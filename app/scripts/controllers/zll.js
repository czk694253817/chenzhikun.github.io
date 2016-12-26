'use strict';

/**
 * @ngdoc function
 * @name surveyTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyTimeApp
 */
angular.module('surveyTimeApp')
  .controller('zllCon', ["$scope","$http","url","$state","$stateParams",function($scope,$http,url,$state,$stateParams){
  	// $rootScope.aa=$stateParams.id;
  	// $rootScope.uid = $stateParams.id;
  	$scope.id=$stateParams.id;
  	console.log($stateParams.id);
  	$scope.ll=false;
  	$scope.zhu=false;
  	/*$scope.we=true;*/
		$scope.shu=0;
		$http({
			method:'get',
	        url:url+'item'
	       /* params:{uid:$scope.id}*/
			}).then(function(e){
				console.log(e)
				if(e==''||e=='null'){
					console.log('ppp')
					$scope.we=true;
					$scope.as=false;
				}else{
					console.log('aaa')
					$scope.we=false;
					$scope.as=true;
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
				console.log(n)
			 $state.go('home.results', {producerId: '='+n});
			}
	}]).directive('shuju',function(){//自定义指令
    return {
        restrict: 'EACM',//仅限元素名调用
        template: '<div><div class="z-ju" ><li class="list-group-item" ng-click="xq(x.id)" >{{x.title}}</li><span class="badgew" ng-click="xw()">0</span></div><div class="z-d" style="display:none;"><div class="zk-p" ng-click="kk(x.id)"><img src="images/z-zl.png"/><span>查看</span></div><div class="zk-p"><img src="images/z-sds.png"/><span>结果</span></div><div class="zk-p" ng-click="sc(x,$index)"><img src="images/z-dd.png"/><span>删除</span></div></div></div>',
     
  link:function(scope,ele,attr){
	  scope.xw=function(){
      ele.find(".z-d").slideToggle(200);	
			}
	    			}
           
            }
  }).filter('offset', function() { 
      return function(arr,ss) {

    return arr.slice(6*ss,6*(ss+1));

      
      };
    
  });


$(document).ready(function() {  
    iBShare.init();    //初始化  
});  
 
//bShare分享  

var iBShare = {  
    //初始化  
    init: function() {  
        var $shareBox = $(".bshare-custom");  
 
        //绑定分享事件  
        $shareBox.children("a").click(function() {  
            var parents = $(this).parent();  
            bShare.addEntry({  
                title: parents.attr("title"),  
                url: parents.attr("url"),  
                summary: parents.attr("summary"),  
                pic: parents.attr("pic")  
            });  
        });  
    }  
}  