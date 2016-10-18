app.directive('mileStones', function(){
			var linkFunction = function (scope, element,
                        attributes){                        
                        var ul = element.parent().find('ul');
                        element.on('click', function(){
                              $(ul).slideToggle();
                            element.text() === 'Show Milestones' ? element.text('Hide Milestones') 
                            : element.text('Show Milestones');                            
                        });
                  };

                  return {
                        restrict: "E",
                        link : linkFunction
                  };

})