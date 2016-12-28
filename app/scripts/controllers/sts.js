'use strict';

/**
 * @ngdoc function
 * @name surveyTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyTimeApp
 */
angular.module('surveyTimeApp')
	.controller('stsCon',['$scope',"$window","$rootScope","$state","$stateParams",function ($scope,$rootScope,$window,$state,$stateParams) {
		var uid = $stateParams.id;
		var i = 0;
		$scope.num = 0;
		$scope.$on("toparent",function(event,data){
			$scope.num = data;
			$rootScope.navindex = data;
		});
	
		
		$scope.fix=true;
		$scope.s_type=0;
		$scope.sts_sqq=true;
		$scope.sts_sqqq=true;
		$rootScope.opend=[];
		$scope.sts_fo=function(){
			i = $rootScope.navindex;
			$scope.num = 2;
			$rootScope.navindex = 2;
			$scope.fix=false;
		}

		/*设置*/
		$scope.hid=function(){
			$scope.fix=true;
			$scope.num = i;
		}	

		$scope.tui=function(){
			$scope.fix=true;
			localStorage.removeItem("user")
			if($cookies.get("myuser")){
		      $cookies.remove("myuser");
		      $cookies.remove("myuid");
		    }
			$state.go("home.login");
		}

		$scope.sts_xg=function(){
			$scope.fix=true;
			$state.go("reset",{"id":uid});
		}
		
  }])
	.controller('news',['$scope',"$rootScope","$state","mySer",function ($scope,$rootScope,$state,mySer) {
		$scope.$emit("toparent",0);
		$rootScope.navindex = 0;
		$scope.arr=[{"a":"选项名称"},{"a":"选项名称"}];
		$rootScope.arr=$scope.arr;
		$scope.sar=["单选题","多选题","填空题","简答题"];
		
		$scope.bool=false
		$scope.aa = function(){
			if($scope.ststitle==''||$scope.ststitle==undefined){
				$scope.bool=true;
			}else{
				$scope.bool=false;
				$rootScope.ststitle = $scope.ststitle;
				$state.go("home.topic")
			}
		}

		
  }])
	.controller('topic',['$scope','$rootScope','http','mySer','$stateParams','url','$state',function ($scope,$rootScope,http,mySer,$stateParams,url,$state) {
    	$scope.sts_wj=false
    	$scope.bb=function(){

		if($rootScope.ststitle==""||$rootScope.ststitle==undefined){
    		$scope.sts_wj=true;
    	}else{
    		$scope.sts_wj=false;
    		http.post(url+"item",{"option":mySer.boss,"title":$rootScope.ststitle,"uid":$stateParams.id},function(e){
    			mySer.boss=[];
    			$rootScope.ststitle="";
    			console.log(e)
    			$state.go("home.lists")
    		})
    		}
    	}

    	
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
    			$rootScope.boss=[];
    			$scope.opt=[];
    			if($scope.s_type==0){
    				for(var i=0;i<$scope.arr.length;i++){
		    			if($scope.arr[i].detail==undefined||$scope.arr[i].detail==""){
		    				return $scope.sts_sqqq=false;
		    			}else{
		    				$scope.sts_sqqq=true;
		    				$scope.opt.push({"op":$scope.arr[i].detail,"num":0})
		    			}
		    			
		    		}
		    		mySer.wjtitle.push({"lx":"单选题","t":$scope.titl})
		    		mySer.boss.push({"opt":$scope.opt,"title":$scope.titl,"type":$scope.s_type,"oop":[]})
		    		
    			}else if($scope.s_type==1){
    				for(var i=0;i<$scope.sarr.length;i++){
		    			if($scope.sarr[i].detail==undefined||$scope.sarr[i].detail==""){
		    				return $scope.sts_sqqq=false;
		    			}else{
		    				$scope.sts_sqqq=true;
		    				$scope.opt.push({"op":$scope.sarr[i].detail,"num":0})
		    			}
		    			
		    		}
		    		mySer.wjtitle.push({"lx":"多选题","t":$scope.titl})
		    		mySer.boss.push({"opt":$scope.opt,"title":$scope.titl,"type":$scope.s_type,"oop":[]})
		    		
    			}else if($scope.s_type==2){
    				mySer.wjtitle.push({"lx":"填空题","t":$scope.titl})
    				mySer.boss.push({"title":$scope.titl,"type":$scope.s_type,"opt":[],"oop":[]})
    				
    			}else if($scope.s_type==3){
    				mySer.wjtitle.push({"lx":"简答题","t":$scope.titl})
    				mySer.boss.push({"title":$scope.titl,"type":$scope.s_type,"oop":[],"opt":[]})
    				
    			}
	    		// $rootScope.boss=$scope.boss;
	    		// console.log(mySer.boss);
	    		$state.go("home.topic.ststotk");
	    		
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
  	this.boss=[];
  })
  .service("http",["$http",function($http){
    return {
      get:function(url,cbk){
        $http({
          url:url,
          method:"get"
        }).then(function(e){
          cbk(e)
        },function(){})

      },
      post:function(url,data,cbk){
        $http({
          url:url,
          method:"post",
          data:data
        }).then(function(e){
          cbk(e)
        },function(){})

      }
    }
  }])

	
	
	
	
	
	
	
