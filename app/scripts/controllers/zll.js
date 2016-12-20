'use strict';

/**
 * @ngdoc function
 * @name surveyTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyTimeApp
 */
angular.module('surveyTimeApp')
  .controller('zllCon', ["$scope","$http","url",function($scope,$http,url){
  	
  	$scope.ll=false;
		$scope.shu=0;
		$http({
			method:'get',
	        url:url+'server/item/'
			}).then(function(e){
				if(e!=''){
					$scope.we=false;
					$scope.as=true;
				}else{
					$scope.we=true;
				$scope.as=false;
				}
				$scope.data=e;
				console.log(e)
			},function(){$scope.we=true;
				$scope.as=false;})
			$scope.fn2=function(){
			
					$scope.shu++
		
			}
			$scope.kk=function(hh){
			$scope.ll=true;
	
			}
				$scope.xis=function(hh){
			$scope.ll=false;
	
			}
			$scope.fn=function(){
				if($scope.shu>0){
					$scope.shu--
				}else{
					$scope.shu=0
				}
				
				
			}
	}]).directive('shuju',function(){//自定义指令
    return {
        restrict: 'EACM',//仅限元素名调用
        template: '<div><li class="list-group-item"  ng-click="fn()"><span class="badge">0</span>{{x.title}}</li><div class="z-d" ng-if="po"><div class="zk-p" ng-click="kk(x.id)"><img src="images/z-zl.png"/><span>分享</span></div><div class="zk-p"><img src="images/z-sds.png"/><span>结果</span></div><div class="zk-p"><img src="images/z-dd.png"/><span>删除</span></div></div></div>',
     
  link:function(scope){
	  scope.po=false;
	  scope.fn=function(){
      scope.po=!scope.po;	
			}
	    			}
           
            }
  }).filter('offset', function() { 
      return function(arr,ss) {

    return arr.slice(6*ss,6*(ss+1))

      
      };
    
  });
