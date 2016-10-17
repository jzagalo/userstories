app.controller('StoriesList', function($scope, $location, $http){
	// variable for all user stories
	$scope.stories = {};


	//Fetch all stories from the backend
	$http.get('http://localhost:3000/user-stories').
	success(function(data){
		$scope.stories = data;
	}).error(function(error){
		cosole.log(error);
	});

	//Variable that determines the display of Milestones
	$scope.showMile = true;

	// Toggle Function for showing and hiding of Milestones
	$scope.ToggleMileStones = function(){
		
		$scope.showMile = !$scope.showMile;

	}

	   

}).controller('AddStory', function($scope, $location, $http){

	// Setting the defaults for newstory form object
	$scope.newstory = {};
	$scope.newstory.milestones = [];
	$scope.newstory.milestone = {};

	// Determines if a story has been created or a milestone has been added
	$scope.positive = false;

	// Adds a  new story
	$scope.addStory = function(){
		delete $scope.newstory.milestone;
		$http.post("/add-stories",{
			title: $scope.newstory.title,
			body: $scope.newstory.body,
			milestones: $scope.newstory.milestones
		}).success(function(){
			console.log('done');
		});

		
	}
	// Function can be used to add a Milestone
	$scope.addMilestone = function(){		

		$scope.newstory.milestones.push({
			name: $scope.newstory.milestone.name,
			name_de: $scope.newstory.milestone.name_de,
			name_en: $scope.newstory.milestone.name_en,
			start_date: $scope.newstory.milestone.start_date,
			end_date: $scope.newstory.milestone.end_date,
			usecase: $scope.newstory.milestone.usecase
		});
		$scope.positive = true;	
		$scope.message = 'Milestone Successfully Added';
		$scope.newstory.milestone = {};
		return false;
		
	}
	// Function that helps hide the Status of the Notification
	$scope.hideMessage = function(){
		$scope.positive = false;
	}
		

});
