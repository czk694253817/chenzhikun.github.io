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
		// $scope.$window=$window;
		// $scope.ret=function(){
		// 	$window.history.back();
		// }
		$scope.s_type=0;
		$scope.sts_sqq=true;
		$scope.sts_sqqq=true;
		$rootScope.opend=[];
		// $rootScope.aa=$stateParams.id;
		// console.log($stateParams.id)
		
  }])
	.controller('news',['$scope',"$rootScope","$state","mySer",function ($scope,$rootScope,$state,mySer) {
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
	.controller('topic',['$scope',"$rootScope",'mySer',function ($scope,$rootScope,mySer) {
    	// alert(mySer.wjtitle);
    	// alert(mySer.wjtitle);
  }])
	.controller('dx',['$scope','$rootScope','$state','mySer',function ($scope,$rootScope,$state,mySer) {
    	$scope.arr=[{"op":"选项名称"},{"op":"选项名称"}];
    	$rootScope.arr=$scope.arr;

    	$scope.sarr=[{"op":"选项名称"},{"op":"选项名称"}];
    	$rootScope.sarr=$scope.sarr;
  }])
	.controller('sxt',['$scope','$rootScope','$state','mySer',function ($scope,$rootScope,$state,mySer) {
		$scope.sar=["单选题","多选题","填空题","简答题"];

    	$scope.szd=function(){
    		$rootScope.arr.push({"op":"选项名称"})

    	}

    	$scope.sdx=function(){
    		$rootScope.sarr.push({"op":"选项名称"})
    	}
    	/*删除*/
    	$scope.sts_shc=function(index){
    		$rootScope.arr.splice(index,1)
    	}

    	$scope.sts_shch=function(index){
    		$rootScope.sarr.splice(index,1)
    	}
    	/*点击切换模板*/
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
    	/*点击确认*/
    	$scope.sque=function(){
    		if($scope.titl==undefined||$scope.titl==""){
    			return $scope.sts_sqq=false;
    		}else{
    			$scope.sts_sqq=true;
    			$scope.boss=[];
    			$scope.opt=[];
    			if($scope.s_type==0){
    				for(var i=0;i<$scope.arr.length;i++){
		    			console.log($scope.arr[i].detail)
		    			if($scope.arr[i].detail==undefined||$scope.arr[i].detail==""){
		    				return $scope.sts_sqqq=false;
		    			}else{
		    				$scope.sts_sqqq=true;
		    				$scope.opt.push({"op":$scope.arr[i].detail,"num":0})
		    			}
		    			
		    		}
		    		mySer.wjtitle.push({"lx":"单选题","t":$scope.titl})
		    		$scope.boss.push($scope.opt)
		    		$scope.boss.push({"title":$scope.titl})
		    		$scope.boss.push({"type":$scope.s_type})
		    		$scope.boss.push({"oop":[]})
    			}else if($scope.s_type==1){
    				for(var i=0;i<$scope.sarr.length;i++){
		    			console.log($scope.sarr[i].detail)
		    			if($scope.sarr[i].detail==undefined||$scope.sarr[i].detail==""){
		    				return $scope.sts_sqqq=false;
		    			}else{
		    				$scope.sts_sqqq=true;
		    				$scope.opt.push({"op":$scope.sarr[i].detail,"num":0})
		    			}
		    			
		    		}
		    		mySer.wjtitle.push({"lx":"多选题","t":$scope.titl})
		    		$scope.boss.push($scope.opt)
		    		$scope.boss.push({"title":$scope.titl})
		    		$scope.boss.push({"type":$scope.s_type})
		    		$scope.boss.push({"oop":[]})
    			}else if($scope.s_type==2){
    				mySer.wjtitle.push({"lx":"填空题","t":$scope.titl})
    				$scope.boss.push({"title":$scope.titl})
    				$scope.boss.push({"type":$scope.s_type})
    				$scope.boss.push({"opt":[]})
    				$scope.boss.push({"oop":[]})
    			}else if($scope.s_type==3){
    				mySer.wjtitle.push({"lx":"简答题","t":$scope.titl})
    				$scope.boss.push({"title":$scope.titl})
    				$scope.boss.push({"type":$scope.s_type})
    				$scope.boss.push({"oop":[]})
    				$scope.boss.push({"opt":[]})
    			}
	    		$rootScope.boss=$scope.boss;
	    		console.log($rootScope.boss);
	    		$state.go("home.topic.ststotk");
	    		mySer.stsobj.push({"option":$scope.boss})
	    		// $rootScope.opend.push({"option":$scope.boss})
    		}
    	}

  }])
	.controller('ststotk',['$scope','$rootScope','$state','mySer',function ($scope,$rootScope,$state,mySer) {
    	$scope.sts_arr=mySer.wjtitle
    	// alert($scope.sts_arr)
    	// alert(mySer.wjtitle);
    	$scope.sts_shan=function(index){ 		
    		// alert(index)
    		// angular.element(".sts_to").eq(index).remove();
    		mySer.wjtitle.splice(index,1)
    		// console.log(mySer.stsobj)
    	}

  }])
  .service("mySer",function(){
  	this.wjtitle = [];
  	this.stsobj=[];
  })
	
	
	
	
	
	
	
	
