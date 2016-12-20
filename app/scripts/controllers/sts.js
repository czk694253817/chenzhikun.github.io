'use strict';

/**
 * @ngdoc function
 * @name surveyTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyTimeApp
 */
angular.module('surveyTimeApp')
	.controller('stsCon',['$scope',"$rootScope", function ($scope) {
		
  }])
	.controller('news',['$scope',"$rootScope",function ($scope,$rootScope) {
		$scope.aa = function(){
			$rootScope.title = $scope.title;
		}
  }])
	.controller('topic',['$scope',"$rootScope",function ($scope,$rootScope) {
    	
  }]);
