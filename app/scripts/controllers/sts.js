'use strict';

/**
 * @ngdoc function
 * @name surveyTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyTimeApp
 */
angular.module('surveyTimeApp')
	.controller('stsCon',['$scope',"$rootScope","$window",function ($scope,$rootScope,$window) {
		$scope.$window=$window;
		$scope.ret=function(){
			$window.history.back();
		}
		$scope.s_type=0;
  }])
	.controller('news',['$scope',"$rootScope","$state",function ($scope,$rootScope,$state) {
		$scope.arr=[{"a":"选项名称"},{"a":"选项名称"}];
		$rootScope.arr=$scope.arr;
		$scope.sar=["单选题","多选题","填空题","简答题"];

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
	.controller('dx',['$scope','$rootScope',function ($scope,$rootScope) {
    	$scope.arr=[{"op":"选项名称"},{"op":"选项名称"}];
    	$rootScope.arr=$scope.arr;

    	$scope.sarr=[{"op":"选项名称"},{"op":"选项名称"}];
    	$rootScope.sarr=$scope.sarr;

  }])
	.controller('sxt',['$scope','$rootScope','$state',function ($scope,$rootScope,$state) {
		$scope.sar=["单选题","多选题","填空题","简答题"];

    	$scope.szd=function(){
    		$rootScope.arr.push({"op":"选项名称"})

    	}

    	$scope.sdx=function(){
    		$rootScope.sarr.push({"op":"选项名称"})
    	}

    	$scope.xxk=function(index){
    		$scope.s_type=index
    		angular.element(".sts_type").eq(index).addClass("sts_active").siblings().removeClass("sts_active");
    		if(index==0){
    			$state.go("home.xt.dx")

    		}else if(index==1){
    			$state.go("home.xt.dxt")
    		}else if(index==2){
    			$state.go("home.xt.tk")
    		}else if(index==3){
    			$state.go("home.xt.jd")
    		}	
    	}

    	$scope.sque=function(){
    		$scope.boss=[];
    		console.log($scope.s_type)
    		$rootScope.titl=$scope.titl
    		console.log($rootScope.titl)
    		for(var i=0;i<$scope.arr.length;i++){
    			console.log($scope.arr[i].detail)
    			$scope.boss.push({"op":$scope.arr[i].detail})
    		}
    		$scope.boss.push({"title":$scope.titl})
    		$scope.boss.push({"type":$scope.s_type})
    		console.log($scope.boss)

    	}

  }])

	
	
	
	
	
	
	
	
