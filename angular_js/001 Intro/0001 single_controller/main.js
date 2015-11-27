
// Controller style 1
angular.module('popAngularTutorial',[])
	.controller('IntroToScopeCtrl', IntroToScopeCtrlCnst);

function IntroToScopeCtrlCnst($scope) {
		$scope.formData = {
			name: 'Poppop',
			email: 'ttt.@test.com'
		};

		$scope.register = function() {
			alert("Registered by " + $scope.formData.name + " (" + $scope.formData.email +")")
		}
}

