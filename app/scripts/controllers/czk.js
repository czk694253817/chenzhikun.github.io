'use strict';

/**
 * @ngdoc function
 * @name surveyTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyTimeApp
 */
angular.module('surveyTimeApp')
.controller("czkCon", ['$scope', '$timeout', function ($scope, $timeout) { 
  $scope.labels = ["A","B","C","D"];
  $scope.labels2 = ["A","B","C","D"];
  $scope.series = [];
  $scope.series2 = [];
  $scope.data = [65, 59, 80, 81];
  $scope.data2 = [1, 2, 3, 4];
  $timeout(function () {
    $scope.data = [28, 48, 40, 19];
    $scope.data2 = [4, 3, 2, 1];
  }, 3000);
  $scope.data={"option":[{"title":"你每天学习几个小时？","opt":[],"type":2,"oop":"我每天学习8小时"},{"title":"你每天睡觉几小时","opt":[{"op":"8小时","num":1},{"op":"9小时","num":1}],"type":0,"oop":""},{"title":"你每天吃饭用多久","opt":[{"op":"1小时","num":1},{"op":"2小时","num":1}],"type":0,"oop":""}],"uid":"56aa508e239548c2","title":"你热爱学习吗","id":"6c4087e8acf439b7"}

}]).directive("test",[function(){
    return {
      restrict:"ECMA",
      template:'<div ng-repeat="x in data | g"><p>{{x.title}}</p><p>{{x.opp[0]}}<span ng-click="quanbu()">显示全部</span></p></div>',
      scope:{data:"=data"},
      replace:true,
      link:function(s,e,a){
      	s.quanbu=function(){
      		alert()
      	}
      }

    }
  }]).filter("g",[function(){
    return function(e){
      if(e.type==0||e.type==1){
        return 
      }else{
        return e.opp
      }
        
    }
  }]);
