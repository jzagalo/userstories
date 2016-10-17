app.service('UserStories', ['$resource', function($resource){

	return $resource('http://localhost:3000/stories/:id');

}]);