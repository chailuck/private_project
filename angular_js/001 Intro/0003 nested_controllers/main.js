
var app = angular.module('popAngularTutorial',[]);

app.controller('IntroToScopeCtrl', IntroToScopeCtrlCnst);

function IntroToScopeCtrlCnst($scope) {
		$scope.formData = {
			name: 'Poppop',
			email: 'ttt.@test.com'
		};

		$scope.register = function() {
			alert("Registered by " + $scope.formData.name + " (" + $scope.formData.email +")")
		}
}

app.controller('IntroToScopeCtrl2', IntroToScopeCtrlCnst2);

function IntroToScopeCtrlCnst2($scope) {
		$scope.formData2 = {
			name: 'Poppop',
			email: 'ttt.@test.com'
		};

		$scope.register2 = function() {
			alert("Registered by " + $scope.formData2.name + " (" + $scope.formData2.email +")")
		}
}



app.controller('IntroToScopeCtrl3',  function($scope) {
		$scope.formData3 = {
			name: 'Poppop',
			email: 'ttt.@test.com'
		};

		$scope.register3 = function() {
			alert("Registered by " + $scope.formData3.name + " (" + $scope.formData3.email +")")
		}
});

