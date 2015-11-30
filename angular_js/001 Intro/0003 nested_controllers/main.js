
var app = angular.module('popAngularTutorial',[]);

app.controller('IntroToScopeCtrl', IntroToScopeCtrlCnst);

function IntroToScopeCtrlCnst($scope) {
		$scope.name1="Name1";
		$scope.register1 = function() {
			alert("Registered by " + $scope.name1)
		}
}

app.controller('IntroToScopeCtrl2', IntroToScopeCtrlCnst2);

function IntroToScopeCtrlCnst2($scope) {
		$scope.name2="Name2";
		$scope.register2 = function() {
			alert("Registered by " + $scope.name2)
		}
}



app.controller('IntroToScopeCtrl3',  function($scope) {
		$scope.name3="Name3";
		$scope.register3 = function() {
			alert("Registered by " + $scope.name3)
		}
});

