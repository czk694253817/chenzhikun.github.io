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
  // $scope.series = [];
  // $scope.series2 = [];
  $scope.data = [65, 59, 80, 81];
  $scope.data2 = [1, 2, 3, 4];
  // $timeout(function () {
  //   $scope.data = [28, 48, 40, 19];
  //   $scope.data2 = [4, 3, 2, 1];
  // }, 3000);

  $scope.dataj={
  "option":[
    {
      "title":"你每天学习几个小时？",
      "opt":[
        {"op":"7小时","num":1},
        {"op":"8小时","num":1},
        {"op":"9小时","num":1},
        {"op":"10小时","num":1}
      ],
      "type":0,
      "oop":[]
    },
    {
      "title":"你每天睡觉几小时？",
      "opt":[
        {"op":"7小时","num":1},
        {"op":"8小时","num":1},
        {"op":"9小时","num":1},
        {"op":"10小时","num":1}
      ],
      "type":1,
      "oop":[]
    },
    {
      "title":"你每天吃饭用多久？",
      "opt":[],
      "type":2,
      "oop":[
        "1小时",
        "2小时",
        "3小时",
        "4小时"
      ]
    },
    {
      "title":"你每天运动多久？",
      "opt":[],
      "type":3,
      "oop":
      [
        "我每天运动1小时",
        "我每天运动2小时",
        "我每天运动3小时",
        "我每天运动4小时"
      ]
    }
  ],
  "uid":"56aa508e239548c2",
  "title":"你热爱学习吗",
  "id":"6c4087e8acf439b7"
};


}]).directive("test",[function(){
    return {
      restrict:"ECMA",
      template:'<div class="tiankong"><div ng-repeat="x in data"><p><span>{{$index+1}}.</span>{{x.title}}</p><p class="nei2">答：{{x.oop[0]}}</p><p><span class="nei" ng-click="quanbu(x)">显示全部</span></p></div></div>',
      scope:{data:"=data"},
      replace:true,
      link:function(s,e,a){
      	s.quanbu=function(x){
      		console.log(arr)
      	}
      }

    }
  }]).filter("g",[function(){
  	var arr=[];
  	var xuanxiang=[];
  	var num=[];
    return function(e){
      if(e.type==0||e.type==1){
      		for(var i=0;i<e.opt.length;i++){
      			xuanxiang.push(e.opt.op)
      			num.push(e.opt.num)
      		}
      }else{
      	arr.push(e.opp)
        return arr;
      }
        
    }
  }]);
