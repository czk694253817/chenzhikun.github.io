'use strict';

/**
 * @ngdoc function
 * @name surveyTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyTimeApp
 */
angular.module('surveyTimeApp')
.controller("czkCon", ['$scope', '$timeout','$rootScope', function ($scope,$rootScope, $timeout) { 
  $scope.labels = ["A","B","C","D"]//$scope.duoxuanxiang;
  $scope.labels2 = ["A","B","C","D"]//$scope.danxuanxiang;
  $scope.series=[];
  $scope.series2=[];
  $scope.data = ["1","2","3","4"]//$scope.duoxuan;
  $scope.data2 =["1","2","3","4"]//$scope.danxuan ;
  // $timeout(function () {
  //   $scope.data = [28, 48, 40, 19];
  //   $scope.data2 = [4, 3, 2, 1];
  // }, 3000);

  $scope.changeData = function(Arr){
  	var newData = [];
  	for(var i=0; i<Arr.length; i++){
  		if(Arr[i].type == 0 || Arr[i].type == 1){
  			var labels = [];
  			var chartData = [];
  			for(var j=0; j<Arr[i].opt.length; j++){
  				labels[labels.length] = Arr[i].opt[j].op;
  				chartData[chartData.length] = Arr[i].opt[j].num;
  			}
  			Arr[i].labels = labels;
  			Arr[i].chartData = chartData;
  			newData.push(Arr[i]);
  		}else if(Arr[i].type == 2 || Arr[i].type == 3){
  			newData.push(Arr[i]);
  		}
  	}
  	return newData;
  }

  $scope.dataj={
  "option":[
    {
      "title":"你每天学习几个小时？",
      "opt":[
        {"op":"7小时","num":1},
        {"op":"8小时","num":2},
        {"op":"9小时","num":3},
        {"op":"10小时","num":4}
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

$scope.finalData = $scope.changeData($scope.dataj.option);


}]).directive("test",[function(){
    return {
      restrict:"ECMA",
      scope:{data:"=data"},
      template:function(s,a){
      	if(a.type==0){
      		// return "<div>{{data}}</div>";
      		// return '<div><canvas class="chart chart-bar" chart-data="data.chartData" chart-labels="data.labels" chart-series="[]" chart-click="onClick"></canvas></div>';
      		return '<div><canvas class="chart chart-pie" chart-data="data.chartData" chart-labels="data.labels"" chart-series="[]" chart-click="onClick"></canvas></div>';
      	}else if(a.type==1){
      		return "<div>bbb</div>";
      	}else if(a.type==2){
      		return "<div>ccc</div>";
      	}else if(a.type==3){
      		return "<div>ddd</div>";
      	}
      },// '<div class="tiankong"><div ng-repeat="x in data | dan"><p><span>{{$index+1}}.</span>{{x.title}}</p><p class="nei2">答：<div class="box"><canvas class="chart chart-pie" chart-data="data"  chart-labels="labels"  chart-series="series" chart-click="onClick"></canvas></div></p></div></div>',
      // scope:{data:"=data"},
      replace:true
    }
  // }]).directive("test2",[function(){
  //   return {
  //     restrict:"ECMA",
  //     template:'<div class="tiankong"><div ng-repeat="x in data"><p><span>{{$index+1}}.</span>{{x.title}}</p><p class="nei2">答：<div class="box"><canvas class="chart chart-bar" chart-data="data"  chart-labels="labels"  chart-series="series" chart-click="onClick"></canvas></div></p></div></div>',
  //     scope:{data:"=data"},
  //     replace:true,
  //     transclude:{},
  //     link:function(s,e,a){
  //     	s.quanbu=function(x){
      		
  //     	}
  //     }
  //   }
  // }]).directive("test3",[function(){
  //   return {
  //     restrict:"ECMA",
  //     template:'<div class="tiankong"><div ng-repeat="x in data"><p><span>{{$index+1}}.</span>{{x.title}}</p><p class="nei2">答：<span>{{x.oop[0]}}</span></p><p><span class="nei" ng-click="quanbu(x)">显示全部</span></p></div></div>',
  //     scope:{data:"=data"},
  //     replace:true,
  //     transclude:{},
  //     link:function(s,e,a){
  //     	s.quanbu=function(x){
      		
  //     	}
  //     }
  //   }
  // }]).directive("test4",[function(){
  //   return {
  //     restrict:"ECMA",
  //     template:'<div class="tiankong"><div ng-repeat="x in data"><p><span>{{$index+1}}.</span>{{x.title}}</p><p class="nei2">答：</p><p><span class="nei" ng-click="quanbu(x)">显示全部</span></p></div></div>',
  //     scope:{data:"=data"},
  //     replace:true,
  //     transclude:{},
  //     link:function(s,e,a){
  //     	s.quanbu=function(x){
      		
  //     	}
  //     }
  //   }
  }]).filter("dan",[function(){
    return function(e){
    	var czkArr = [];
      for(var i=0;i<e.length;i++){
      	if(e[i].type == 0){
      		czkArr.push(e[i]);
      	}
      }
      return czkArr;
    }
  }]).filter("duo",[function(){
    return function(e){
      var czkArr = [];
      for(var i=0;i<e.length;i++){
      	if(e[i].type == 1){
      		czkArr.push(e[i]);
      	}
      }
      return czkArr;
    }
  }]).filter("tian",[function(){
    return function(e){
     var czkArr = [];
      for(var i=0;i<e.length;i++){
      	if(e[i].type == 2){
      		czkArr.push(e[i]);
      	}
      }
      return czkArr; 
    }
  }]).filter("jian",[function(){
    return function(e){
      var czkArr = [];
      for(var i=0;i<e.length;i++){
      	if(e[i].type == 3){
      		czkArr.push(e[i]);
      	}
      }
      return czkArr; 
    }
  }])
  // .directive("piechart",function(){
  // 	return {
  // 		restrict: "ECMA",
  // 		replace: true,
  // 		scope: {},
  // 		template:'<div><canvas class="chart chart-bar" chart-data="data" chart-labels="labels" chart-series="series" chart-click="onClick" chart-colors="blue"></canvas></div>';
  // 	}
  // })
