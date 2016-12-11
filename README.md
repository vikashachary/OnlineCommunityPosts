# OnlineCommunityPosts
A startup project for stack over flow type community post 




	POSTS 
		Id="1"
		PostTypeId="1"
		AcceptedAnswerId="2"
		CreationDate="2015-01-20T18:35:59.493"
		Score="25"
		ViewCount="1645"
		Body="&lt;p&gt;Is it possible to &quot;pump&quot; a powder 
		the same way liquids can be pumped?&lt;/p&gt;&#xA;&#xA;&lt;p&gt;If so,
		what are the challenges? If not, what are some alternatives?&lt;/p&gt;&#xA;"
		OwnerUserId="9"
		LastEditorUserId="148"
		LastEditDate="2015-01-21T08:28:32.950"
		LastActivityDate="2016-06-28T09:12:52.693"
		Title="Is it possible to &quot;pump&quot; a powder?"
		Tags="&lt;pumps&gt;&lt;liquid&gt;&lt;fluid-mechanics&gt;"
		AnswerCount="7"
		CommentCount="2"
		FavoriteCount="1"
	
	PostHistory
		Id="1"
		PostHistoryTypeId="2"
		PostId="1"
		RevisionGUID="d8299b2b-815a-44c6-a243-45131239e0a7"
		CreationDate="2015-01-20T18:35:59.493"
		UserId="9"
		Text="If so, what are the challenges? If not, what are the alternatives?"

	PostLinks
		Id="327"
		CreationDate="2015-01-24T03:20:43.000"
		PostId="185"
		RelatedPostId="199"
		LinkTypeId="1"
		
	Comments
		Id="1"
		PostId="2"
		Score="0"
		Text="They can do this so simply as if it were a liquid?"
		CreationDate="2015-01-20T18:44:48.173"
		UserId="9"
	
	Votes
		Id="1"
		PostId="2"
		VoteTypeId="2"
		CreationDate="2015-01-20T00:00:00.000"
		UserId="154"          // few are anonymous votes and few are User tagged votes
		
	Tags
		Id="1"
		TagName="liquid"
		Count="7"
		ExcerptPostId="130"
		WikiPostId="129"				
		
	Badges
		Id="1"
		UserId="21"
		Name="Autobiographer"
		Date="2015-01-20T19:04:45.823"
		Class="3"
		TagBased="False"

		
	Users
		Id="-1"
		Reputation="1"
		CreationDate="2015-01-20T16:45:52.530"
		DisplayName="Community"
		LastAccessDate="2015-01-20T16:45:52.530"
		Location="on the server farm"
		AboutMe="&lt;p&gt;Hi, I'm not really a person.&lt;/p&gt;&#xD;&#xA;&lt;p&gt;
		I'm a background process that helps keep this site clean!&lt;/p&gt;&#xD;&#xA;&lt;p&gt;
		I do things like&lt;/p&gt;&#xD;&#xA;&lt;ul&gt;&#xD;&#xA;&lt;li&gt;Randomly poke 
		old unanswered questions every hour so they get some attention&lt;/li&gt;&#xD;&#xA;&lt;li&gt;
		Own community questions and answers so nobody gets unnecessary reputation from them&lt;/li&gt;&#xD;&#xA;&lt;li&gt;
		Own downvotes on spam/evil posts that get permanently deleted&lt;/li&gt;&#xD;&#xA;&lt;li&gt;Own suggested edits
		from anonymous users&lt;/li&gt;&#xD;&#xA;&lt;li&gt;&lt;a href=&quot;http://meta.stackoverflow.com/a/92006&quot;&gt;Remove 
		abandoned questions&lt;/a&gt;&lt;/li&gt;&#xD;&#xA;&lt;/ul&gt;"
		Views="0"
		UpVotes="496"
		DownVotes="609"
		Age="1"
		AccountId="-1"
	

		
		
		
		
		                                             ** Other than Tags and Badges everyone else has CreationDate
		             has
		Users  -------------------> POSTS
	has badges  \ UserId            /       \   
	             \                 /  PostId \
				post has PostHistory 		Post has Tags []
				Post has Comments			Post has Votes []  has type up or down
											post has PostLinks
											
											
											


											
											
											
											
											
											
											
											
											
Work : 
======
Parse all collections from xml and put in DB
use UI to get / set posts from / to DB

use case
	1. Neo4j - graphs
	2. mongo - tables and lot of finds
Parsing Problems:
	> some lists are in "&lt;pumps&gt;" not valid Html and need to be retrieved as text and converted to relevent Tag object
UI
======
*** main features
Display all posts and their revisions (and sharable post link)
	> comments, Post-Subject, Post-Tags are HTML so render as html
	> 
	> 
Problem 2 : Select a user 
			Find links
				posible links 
				> all users by same badges
				> all users commented in same post
				> all users voted on other user's post
				> 
				
** useful ones
	search by user id / post / tags 
	create post / tags / 
	
	

