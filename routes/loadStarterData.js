var express = require('express');
var router = express.Router();
var GetContent = require('../GetContent');
var neo4j = require('neo4j-driver').v1;
var request = require('request');

var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));
var session = driver.session();
var host = 'localhost',
  port = 7474;
var httpUrlForTransaction = 'http://' + host + ':' + port + '/db/data/transaction/commit';

function runCypherQuery(query, params, callback) {
  request.post({
      uri: httpUrlForTransaction,
      json: {statements: [{statement: query, parameters: params}]}
    },
    function (err, res, body) {
      callback(err, body);
    })
};

/* GET home page. */
router.get('/', function(req, res, next) {
  // all parsing logic
  // output logic
  
 GetContent.getParsedData("Users.xml", function(Users)
 {
    Users.forEach(function(element) {
      console.log(element.$);
      //let cqlQuery = ' CREATE (u:User ' + element.$ + ')';
      //session.run( cqlQuery );

    }, this);
 }); //let Users             =

let Posts             = GetContent.getParsedData("Posts.xml");
Posts.forEach(function(element) {
  let cqlQuery = ' CREATE (u:Posts ' + JSON.stringify(element) + ')';
  session
  .run( cqlQuery )
  .then( function()
      {
        let txt = "MATCH (a:User {Id : " + element.OwnerUserId + ") , (p:Post {Id:"+ element.Id +"} ) CREATE (u)-[:HAS_Posted]->(p) CREATE (p)-[:Commented_By]->(u) ";
        return session.run(  ) ; // "+ element.Id +"
      });
}, this);

let Badges            = GetContent.getParsedData("Badges.xml");
let Comments          = GetContent.getParsedData("Comments.xml");
let PostHistory       = GetContent.getParsedData("PostHistory.xml");
let PostLinks         = GetContent.getParsedData("PostLinks.xml");
let Tags              = GetContent.getParsedData("Tags.xml");
let Votes             = GetContent.getParsedData("Votes.xml");
  
  res.render('loadStarterData', { title: 'Express' });
});

module.exports = router;
