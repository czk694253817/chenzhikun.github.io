'use strict';

/**
 * @ngdoc function
 * @name surveyTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyTimeApp
 */
angular.module('surveyTimeApp')
  .controller('zllCon', ["$scope","$rootScope","$http","url","$state",function($scope,$rootScope,$http,url,$state){
  	
  	$scope.ll=false;
  	$scope.zhu=false;
		$scope.shu=0;
		$http({
			method:'get',
	        url:url+'item/'
			}).then(function(e){
				if(e.data!=''){
					$scope.we=false;
					$scope.as=true;
				}else{
					$scope.we=true;
					$scope.as=false;
				}
				if(e.data.length>=6){
					$scope.zhu=true;
				}
				$scope.data=e.data;
	
			},function(){/*$state.go('404')*/})
			$scope.fn2=function(){
		    if($scope.data.length/6<=$scope.shu+1){
		        	$scope.shu=$scope.shu
		        }else{
		        	$scope.shu++
		        }
			}
				//删除
				$scope.sc=function(e,hj){
					 $http({
       url:url+'item/'+'<e.id>',
       method:"delete"
     }).then(function(cd){
     	console.log(cd)
       console.log(hj)
       $scope.data.splice(hj,1)
     },function(){})
				console.log(e.id)
	
		
			}
			$scope.kk=function(hh){
			$scope.ll=true;
			angular.element(".z-kj").slideToggle(500)
	
			}
				$scope.xis=function(hh){
			$scope.ll=false;
			angular.element(".z-kj").slideToggle(500)
			}
			$scope.fn=function(){
				if($scope.shu>0){
					$scope.shu--
				}else{
					$scope.shu=0
				}
				
				
			}
			$scope.xq=function(n){
			 $state.go('home.results', {producerId: '='+n});
			}
	}]).directive('shuju',function(){//自定义指令
    return {
        restrict: 'EACM',//仅限元素名调用
        template: '<div><li class="list-group-item"  ><div class="z-ju" ng-click="xq(x.id)">{{x.title}}</div><span class="badge" ng-click="xw()">0</span></li><div class="z-d" style="display:none;"><div class="zk-p" ng-click="kk(x.id)"><img src="images/z-zl.png"/><span>查看</span></div><div class="zk-p"><img src="images/z-sds.png"/><span>结果</span></div><div class="zk-p" ng-click="sc(x,$index)"><img src="images/z-dd.png"/><span>删除</span></div></div></div>',
     
  link:function(scope,ele,attr){
//	  scope.po=false;
	  scope.xw=function(){
      ele.find(".z-d").toggle(200);	
			}
	    			}
           
            }
  }).filter('offset', function() { 
      return function(arr,ss) {

    return arr.slice(6*ss,6*(ss+1))

      
      };
    
  });
