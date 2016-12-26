'use strict';

/**
 * @ngdoc function
 * @name surveyTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyTimeApp
 */
angular.module('surveyTimeApp')
.controller("czkCon", ['$scope', '$timeout','$rootScope','service','url','$location','$http',function ($scope,$rootScope, $timeout ,service,url,$location,$http) { 
   $http({
          url:url+"item/faa1204091c488b1",
          method:"get"
        }).then(function(e){
           $scope.dataj=e.data;

        },function(){

        })
$scope.guanbi=function(){
  $scope.html=null;
}

$scope.html=null;
$scope.$on("oopOne",function(event,data){
console.log(data); 
  $scope.html = data;

})
  // var idurl=$location.absUrl();
  // var idurl2=idurl.splice(10);
  // alert(idurl2)
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
 
  console.log($scope.dataj);

  // service.get(url+"item/faa1204091c488b1",function(e){
  //     $scope.dataj=e.data;
  //     // $scope.finalData = $scope.changeData($scope.dataj.option);
  //  })
  
  // $http({
  //   method: "get",
  //   // params: {"uid":"596d184e5cb5f8c5"},
  //   url: url + "item/faa1204091c488b1"
  // }).then(function(e){
  //   console.log(e);
  // })
//   $scope.dataj={
//   "option":[
//     {
//       "title":"你每天学习几个小时？",
//       "opt":[
//         {"op":"7小时","num":1},
//         {"op":"8小时","num":2},
//         {"op":"9小时","num":3},
//         {"op":"10小时","num":4}
//       ],
//       "type":0,
//       "oop":[]
//     },
//     {
//       "title":"你每天睡觉几小时？",
//       "opt":[
//         {"op":"7小时","num":1},
//         {"op":"8小时","num":2},
//         {"op":"9小时","num":3},
//         {"op":"10小时","num":3}
//       ],
//       "type":1,
//       "oop":[]
//     },
//     {
//       "title":"你每天吃饭用多久？",
//       "opt":[],
//       "type":2,
//       "oop":[
//         "1小时",
//         "2小时",
//         "3小时",
//         "4小时"
//       ]
//     },
//     {
//       "title":"你每天运动多久？",
//       "opt":[],
//       "type":3,
//       "oop":
//       [
//         "我每天运动1小时",
//         "我每天运动2小时",
//         "我每天运动3小时",
//         "我每天运动4小时"
//       ]
//     }
//   ],
//   "uid":"56aa508e239548c2",
//   "title":"你热爱学习吗",
//   "id":"6c4087e8acf439b7"
// };




}]).directive("test",[function(){
    return {
      restrict:"ECMA",
      scope:{data:"=data",add:"&add"},
      template:function(s,a){
      	if(a.type==0){
      		return '<div><p class="czkwt"><span>{{$index+1}}.</span>{{data.title}}</p><p class="nei2"><div class="czkbox2"><canvas class="chart chart-pie" chart-data="data.chartData" chart-labels="data.labels"" chart-series="[]" chart-click="onClick"></canvas></div></p></div>';
      	}else if(a.type==1){
      		return '<div><p class="czkwt"><span>{{$index+1}}.</span>{{data.title}}</p><p class="nei2"><div class="czkbox"><canvas class="chart chart-bar" chart-data="data.chartData" chart-labels="data.labels"" chart-series="[]" chart-click="onClick"></canvas></div></p></div>';
      	}else if(a.type==2){
      		return '<div class="czkti"><p class="czkwt"><span>{{$index+1}}.</span>{{data.title}}</p><p class="nei2">{{data.oop[0]}}<p><span class="nei" ng-click="add()">显示全部</span></p></div>';
      	}else if(a.type==3){
      		return '<div class="czkti"><p class="czkwt"><span>{{$index+1}}.</span>{{data.title}}</p><p class="nei2">{{data.oop[0]}}</p><p><span class="nei" ng-click="add()">显示全部</span></p></div>';
      	};
      },
      link:function(s,a){
          s.add=function(){
            s.$emit("oopOne",s.data.oop);
          }
      },
      replace:true
    }
  }]).filter("dan",[function(){
    return function(e){
    	var czkArr = [];
      for(var i=0; i<e.length; i++){
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
  }]).service("service",["$http",function($http){
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

