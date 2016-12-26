'use strict';

/**
 * @ngdoc function
 * @name surveyTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyTimeApp
 */
angular.module('surveyTimeApp')
	.controller('stsCon',['$scope',"$window","$rootScope","$stateParams",function ($scope,$rootScope,$window,$stateParams) {
		$scope.$window=$window;
		$scope.ret=function(){
			$window.history.back();
		}
		$scope.s_type=0;
		$scope.sts_sqq=true;
		$scope.sts_sqqq=true;
		// $rootScope.aa=$stateParams.id;
		// console.log($stateParams.id)
		
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
    	/*删除*/
    	$scope.sts_shch=function(index){
    		$rootScope.arr.splice(index,1)
    	}
    	/*点击切换模板*/
    	$scope.xxk=function(index){
    		$scope.s_type=index
    		angular.element(".sts_type").eq(index).addClass("sts_active").siblings().removeClass("sts_active");
    		if(index==0){
    			$state.go("home.xt.dx")

    		}else if(index==1){
    			$state.go("home.xt.dx")
    		}else if(index==2){
    			$state.go("home.xt.tk")
    		}else if(index==3){
    			$state.go("home.xt.jd")
    		}	
    	}
    	/*点击确认*/
    	$scope.sque=function(){
    		if($scope.titl==undefined||$scope.titl==""){
    			return $scope.sts_sqq=false;
    		}else{
    			$scope.sts_sqq=true;
    			$scope.boss=[];
    			$scope.opt=[];
    			
	    		for(var i=0;i<$scope.arr.length;i++){
	    			console.log($scope.arr[i].detail)
	    			if($scope.arr[i].detail==undefined||$scope.arr[i].detail==""){
	    				return $scope.sts_sqqq=false;
	    			}else{
	    				$scope.sts_sqqq=true;
	    				$scope.opt.push({"op":$scope.arr[i].detail,"num":0})
	    				
	    			}
	    			
	    		}
	    		$scope.boss.push($scope.opt)
	    		$scope.boss.push({"title":$scope.titl})
	    		$scope.boss.push({"type":$scope.s_type})
	    		console.log($scope.boss)

    		}


    		
    	}

  }])

	
	
	
	
	
	
	
	
