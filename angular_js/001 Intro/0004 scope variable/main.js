
// Controller style 1
angular.module('popAngularTutorial',[])
	.controller('IntroToScopeCtrl', IntroToScopeCtrlCnst);

function IntroToScopeCtrlCnst($scope) {
	var _this = this;
	var fieldValue = "variable.fieldValue";
	$scope.fieldValue="scope.fieldValue";
	this.fieldValue="this.fieldValue";

	$scope.getFieldValue = function() {
		return "scope.getFieldValue -> " + fieldValue;
	}

	this.getFieldValue = function() {
		return "this.getFieldValue -> " + fieldValue;
	}
}

