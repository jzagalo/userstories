app.controller('ListUserStories', ['$scope', '$http', function($scope, $http)
{
		$scope.stories = {};

		$scope.getStories = function()
		{
		    $scope.stories = $http.get("http://localhost:3000/stories")
		    .success(function(data){
		    $scope.stories = data;
		    	console.log(data);
		    });
		   
		}	

}]).controller('HomeController', ['$scope', '$http', function($scope, http){


	
}]);