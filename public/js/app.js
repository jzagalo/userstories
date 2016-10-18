// Application Module Definition

var app = angular.module('StoryApp', ['ngRoute', 'ngAnimate']);

app.run(function($location) {
	
	$location.path('/user-stories');
});