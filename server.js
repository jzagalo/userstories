// Import dependencies with Node.js global require
var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');


//var routes = require('./routes');
var stories = require('./public/js/stories');


// Core http and path modules
var http = require('http');
var path = require('path');


// Establish a database connection object
var db = mongojs('stories',['userstories']);

var app = express();

// Enables us export the database objext to all middlewares
app.use(function(req, res, next){
	req.db = {};
// We store the tasks collection in every request
	req.db.userstories = db.collection('userstories');
	next();
});


// Set app port
app.set('port', process.env.PORT || 3000);

//
app.use(express.static(path.join(__dirname ,"public")));

// Middle ware need to access incoming data
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));


app.param('story_id', stories.getStoryWithId);

// Defining our routes
app.get('/', stories.list);

//Todo List Page
app.get('/user-stories', stories.list);

app.post('/add-stories', stories.add);

app.all('*', function(req, res){
   res.sendStatus(404);
 });

http.createServer(app).listen(app.get('port'),
	function(){
		console.log('Express Server listening on port ' +
			app.get('port'));
});








