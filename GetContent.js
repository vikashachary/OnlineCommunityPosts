module.exports = {
    getParsedData : function(fileName, cb){
  let logs = "";
  let fs = require('fs');
  let  xml2js = require('xml2js');
  //let CompleteDataDump = {};
  var parser = new xml2js.Parser();
         let data =  fs.readFileSync('./StarterDump/'+fileName);
            parser.parseString(data, function (err, result) {
                //console.dir(result);
                if(err)
                {
                    console.log(err);
                }
                // array of objects
                let obj = result[fileName.substring(0, fileName.indexOf('.xml')).toLowerCase()]["row"];
                //CompleteDataDump[fileName.substring(0, fileName.indexOf('.xml')).toLowerCase()] = obj;
                console.log('Processed'+ fileName.substring(0, fileName.indexOf('.xml')));
                cb( obj);
            });
}
};
  //module.exports = CompleteDataDump;