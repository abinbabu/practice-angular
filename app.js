var app = angular.module('myApp', []);
app.controller('MyController',['$scope',function($scope){

	
	$scope.firstname ='abin';
	$scope.lastname = 'babu';
	$scope.fullname = function(){
		return $scope.firstname+" "+$scope.lastname;
	};
	$scope.isspy = true;
	$scope.codename = 'abees';
	
}])