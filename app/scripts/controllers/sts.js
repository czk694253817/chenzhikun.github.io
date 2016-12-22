'use strict';

/**
 * @ngdoc function
 * @name surveyTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyTimeApp
 */
angular.module('surveyTimeApp')
	.controller('stsCon',['$scope',"$rootScope","$window",function ($scope,$window) {
		$scope.$window=$window;
		$scope.ret=function(){
			$window.history.back();
		}
  }])
	.controller('news',['$scope',"$rootScope","$state",function ($scope,$rootScope,$state) {
		$scope.bool=false
		$scope.aa = function(){
			if($scope.title==''||$scope.title==undefined){
				$scope.bool=true;
			}else{
				$scope.bool=false;
				$rootScope.title = $scope.title;
				$state.go("home.topic")
			}
		}
		
  }])
	.controller('topic',['$scope',"$rootScope",function ($scope,$rootScope) {
    	
  }])
	.controller('sxt',['$scope',function ($scope) {
    	$scope.szd=function(){
    		alert(1)
    	}
  }]).directive('tian',function(){//自定义指令
    return {
        restrict: 'EACM',//仅限元素名调用
        template: '<div><input type="text"></div>',
  			link:function(scope,ele,attr){
							 	
	    			}
          }
  })

	
	
	
	
	
	
	
	
