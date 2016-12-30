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
		if($scope.kw==''||$scope.kw==undefined||$scope.kw==null){
				angular.element(".alertw").css('bottom', '0')
				angular.element(".alertw").stop().animate({
					"bottom": "18%",
					"opacity": 1
				}, 600, function() {
			
				})
				$scope.shj = '您还未登陆请点击登陆';
				$scope.lon=function(){
					$state.go('login')
				}
		}else{
			

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
		}, function() { $state.go('404') })
		
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
	}}]).directive('shuju', function() { //自定义指令
		return {
			restrict: 'EACM', //仅限元素名调用
			template: '<div><div class="z-ju" ><li class="list-group-item"  ng-click="xw()">{{x.title}}</li><span class="badgew glyphicon glyphicon-tint" ng-click="xw()"></span></div><div class="z-d" style="display:none;"><div class="zk-p" ng-click="kk(x.id)"><img src="images/z-zl.png"/><span>分享</span></div><div class="zk-p" ng-click="yl(x.id)"><img src="images/z-yx.png"/><span>预览</span></div><div class="zk-p" ng-click="xq(x.id)"><img src="images/z-sds.png"/><span>结果</span></div><div class="zk-p" ng-click="sc(x,$index)"><img src="images/z-dd.png"/><span>删除</span></div></div></div>',
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
			template: '<div class="z-kj"style="display: none;"> <div class="HRshare2"><span class="sz-p">分享到:</span><br /><div class="lk"><a href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey" class="hr-share-qzone"></a><span>扣扣空间</span></div><div class="lk"><a href="http://service.weibo.com/share/share.php?url=http://127.0.0.1:8020/ss/index.html" class="hr-share-tsina"></a><span>新浪微博</span></div><div class="lk"><a href="http://share.tianya.cn/openapp/restpage/activity/appendDiv.jsp" class="hr-share-tianya"></a><span>天涯社区</span></div><div class="lk"><a href="http://v.t.qq.com/share/share.php" class="hr-share-tqq"></a><span>腾讯微博</span></div><div class="lk"><a href="http://t.163.com/article/user/checkLogin.do" class="hr-share-twangyi"></a><span>网易微博</span></div><div class="lk"><a href="http://cang.baidu.com/do/add" class="hr-share-baidu"></a><span>百度收藏</span></div></div>',
			link: function(scope, ele, attr) {
	console.log(ele.find('.HRshare2'))
	     		ele.find('.HRshare2').HRshare({size:32});
			}

		}
	})

