var app = angular.module('myApp', []);
app.controller('MyController',['$scope',function($scope){

	
	$scope.reviews = [
        {
        	comment:'awesome',
        	by:'chandler@gmail.com'
        },
        {
        	comment:'how you doing',
        	by:'joey@gmail.com'
        }

	];
	
}]);