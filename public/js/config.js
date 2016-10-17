app.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/user-stories', {
		controller : 'StoriesList',
		templateUrl : '/partials/user-stories.html'
	}).when('/add-stories', {
		controller  : 'AddStory',
		templateUrl : '/partials/add-stories.html'
	}).otherwise({
		redirectTo : '/'
	});
	
	$locationProvider.html5Mode(true);
});