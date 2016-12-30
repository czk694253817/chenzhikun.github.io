'use strict';

/**
 * @ngdoc function
 * @name surveyTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyTimeApp
 */
angular.module('surveyTimeApp')
	.controller('zllCon', ["$scope", "$http", "url", "$state", "$stateParams", "$rootScope", function($scope, $http, url, $state, $stateParams, $rootScope) {
		// $rootScope.aa=$stateParams.id;
		// $rootScope.uid = $stateParams.id;
		// $rootScope.num = 1;
		$scope.$emit("toparent",1);
		$rootScope.navindex = 1;
		$scope.kw=localStorage.uid
		$scope.id = $stateParams.id;
		$scope.ll = false;
		$scope.zhu = false;
		$scope.shj = '已是第一页';
		$scope.shu = 0;
		$http({
			method: 'get',
			url: url + 'item/',
			params: {
				uid: $scope.kw
			}
		}).then(function(e) {
			if(e.data == '' || e.data == 'null' || e.data.length == 0) {
				console.log('ppp')
				$scope.we = true;
				$scope.as = false;
			} else {
				console.log('aaa')
				$scope.we = false;
				$scope.as = true;
			}
			if(e.data.length >= 6) {
				$scope.zhu = true;
			} else {
				$scope.zhu = false;
			}
			$scope.data = e.data;
			console.log($scope.data)
		}, function() { /*$state.go('404')*/ })
		
		$scope.$watch('data', function() {
			if($scope.data!=undefined){
			$scope.arr = [];
  			for(var i = 0; i < $scope.data.length / 6; i++) {
				$scope.arr.push(i)
			}
			if($scope.shu != 0) {
				$scope.shu = Math.ceil($scope.data.length / 6) - 1;
			}
			}
//			if($scope.data.length%6==0&&$scope.shu!=0){
//				console.log($scope.data.length)
//				$scope.shu--
//				console.log($scope.shu)
//	    	}
		},true)
			//删除
		$scope.sc = function(e, hj) {
			$http({
				url: url + 'item/' + e.id,
				method: "delete"
			}).then(function(cd) {
				if(cd.data.count == '1') {
							angular.element(".alertw").css('bottom', '0')
				angular.element(".alertw").stop().animate({
					"bottom": "18%",
					"opacity": 1
				}, 600, function() {
			angular.element(".alertw").delay(1000).animate({
						"opacity": 0
					});
				})
				$scope.shj = '删除成功';
		$scope.data.splice($scope.data.indexOf(e), 1);
	
				}
			}, function() {
				console.log(hj);
			})
		}
		$scope.fn = function() {
			if($scope.shu > 0) {
				$scope.shu--
			} else {
				angular.element(".alertw").css('bottom', '0%')
				angular.element(".alertw").stop().animate({
					"bottom": "28%",
					"opacity": 1
				}, 600, function() {
		angular.element(".alertw").delay(1000).animate({
						"opacity": 0
					});
				})
				$scope.shj = '已是第一页';
				$scope.shu = 0
			}
		}
		$scope.fn2 = function() {
			if($scope.data.length / 6 <= $scope.shu+1) {
				angular.element(".alertw").css('bottom', '0%')
				angular.element(".alertw").stop().animate({
					"bottom": "28%",
					"opacity": 1
				}, 600, function() {
			angular.element(".alertw").delay(1000).animate({
						"opacity": 0
					});
				})
				$scope.shj = '已是最后一页';
				$scope.shu = $scope.shu
			} else {
				$scope.shu++
			}
		}
		$scope.kk = function(hh) {
			$scope.ll = true;
			angular.element(".z-kj").slideToggle(500)
		}
		$scope.xis = function(hh) {
			$scope.ll = false;
			angular.element(".z-kj").slideToggle(500)
		}
		
		$scope.xq = function(n) {
			console.log(n)
			$state.go('home.results', {
				producerId: '=' + n
			});
		}
				$scope.yl = function(n) {
			console.log(n)
			$state.go('questionaire', {
				producerId: '=' + n
			});
		}
	}]).directive('shuju', function() { //自定义指令
		return {
			restrict: 'EACM', //仅限元素名调用
			template: '<div><div class="z-ju" ><li class="list-group-item"  ng-click="xw()">{{x.title}}</li><span class="badgew" ng-click="xw()">0</span></div><div class="z-d" style="display:none;"><div class="zk-p" ng-click="kk(x.id)"><img src="images/z-zl.png"/><span>分享</span></div><div class="zk-p" ng-click="yl(x.id)"><img src="images/z-yx.png"/><span>预览</span></div><div class="zk-p" ng-click="xq(x.id)"><img src="images/z-sds.png"/><span>结果</span></div><div class="zk-p" ng-click="sc(x,$index)"><img src="images/z-dd.png"/><span>删除</span></div></div></div>',
			link: function(scope, ele, attr) {
				scope.xw = function() {
					ele.find(".z-d").slideToggle(200);
				}
			}
		}
	}).filter('offset', function() {
		return function(arr, ss) {
			return arr.slice(6 * ss, 6 * (ss + 1));
		};

	}).directive('shujw', function() { //自定义指令
		return {
			restrict: 'EACM', //仅限元素名调用
			template: '<div class="z-kj"style="display: none;"> <div class="bshare-custom icon-medium-plus" title="C#面向对象程序设计" url="http://blog.csdn.net/pan_junbiao/article/details/5308139" pic="http://i0.sinaimg.cn/ty/g/pl/2014-01-05/U9977P6T12D6966211F1286DT20140105031220.jpg"><span class="sz-p">分享到:</span><br /><div class="bsPromo bsPromo1"></div><div class="lk"><a title="分享到QQ空间" class="bshare-qzone"></a><span>QQ空间</span></div><div class="lk"><a title="分享到新浪微博" class="bshare-sinaminiblog"></a><span>QQ空间</span></div><div class="lk"><a title="分享到微信" class="bshare-weixin" href="javascript:void(0);"></a><span>QQ空间</span></div><div class="lk"><a title="分享到腾讯微博" class="bshare-qqmb"></a><span>QQ空间</span></div><div class="lk"><a title="分享到网易微博" class="bshare-neteasemb"></a><span>QQ空间</span></div><div class="lk"><a title="分享到QQ好友" class="bshare-qqim" href="javascript:void(0);"></a><span>QQ空间</span></div></div>',
			link: function(scope, ele, attr) {
	ele.find(".icon-medium-plus").find('a').click(function() {
		console.log($(this).parent().parent().attr("url"))
	var parents = $(this).parent().parent();
	bShare.addEntry({
    title: parents.attr("title"),
    url: parents.attr("url"),
	pic: parents.attr("pic")
   });
    });
			}

		}
	})

