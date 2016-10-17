app.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/stories', {

		controller : 'ListUserStories',
		templateUrl : '/partials/list-stories.html'

	}).when('/home',{

		controller: 'HomeController',
		templateUrl : '/partials/list-home.html'

	}).otherwise({
		redirectTo : '/'
	});
	
	$locationProvider.html5Mode({
		  enabled: true
	});
});