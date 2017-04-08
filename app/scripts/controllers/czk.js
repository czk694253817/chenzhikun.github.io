'use strict';

/**
 * @ngdoc function
 * @name surveyTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyTimeApp
 */
angular.module('surveyTimeApp')
.controller("czkCon", ['$scope', '$timeout','$rootScope','service','url','$location','$http','$state',function ($scope,$rootScope, $timeout ,service,url,$location,$http,$state) { 

  if(navigator.onLine){



$scope.guanbi=function(){
  $scope.html=null;
}

$scope.html=null;
$scope.$on("oopOne",function(event,data){
// console.log(data); 
  $scope.html = data;

})
  var idurl=$location.absUrl();
  // var idurl2=new Array();
  var idurl3=idurl.split("=");
  service.get(url+"item/"+idurl3[1],function(e){
      $scope.dataj = e.data;
      $scope.finalData = $scope.changeData($scope.dataj.option);
      // console.log( $scope.dataj);
   }); 
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
  };
  }else{
    $state.go("403")
  } 
}]).directive("test",[function(){
    return {
      restrict:"ECMA",
      scope:{data:"=data",add:"&add","czkindex":"=index"},
      template:function(s,a){
      	if(a.type==0){
      		return '<div><p class="czkwt"><span>{{czkindex+1}}.</span>{{data.title}}<span>（单选题）</span></p><p class="nei2"><div class="czkbox2"><canvas class="chart chart-pie" chart-data="data.chartData" chart-labels="data.labels"" chart-series="[]" chart-click="onClick"></canvas></div></p></div>';
      	}else if(a.type==1){
      		return '<div><p class="czkwt"><span>{{czkindex+1}}.</span>{{data.title}}<span>（多选题）</span></p><p class="nei2"><div class="czkbox"><canvas class="chart chart-bar" chart-data="data.chartData" chart-labels="data.labels"" chart-series="[]" chart-click="onClick"></canvas></div></p></div>';
      	}else if(a.type==2){
      		return '<div class="czkti"><p class="czkwt"><span>{{czkindex+1}}.</span>{{data.title}}<span>（填空题）</span></p><p class="nei2">{{data.oop[0]}}<p><span class="nei" ng-click="add()" ng-show="aa">【显示全部】</span></p></div>';
      	}else if(a.type==3){
      		return '<div class="czkti"><p class="czkwt"><span>{{czkindex+1}}.</span>{{data.title}}<span>（简答题）</span></p><p class="nei2">{{data.oop[0]}}</p><p><span class="nei" ng-click="add()" ng-show="aa">【显示全部】</span></p></div>';
      	};
      },
      link:function(s,a){
        var len = s.data.oop.length;
          s.add=function(){
            s.$emit("oopOne",s.data.oop);
          }
          if(len!=0){
              s.aa=true;
          }else{
              s.aa=false;
          }
      },
      replace:true
    }
  }]).filter("dan",[function(){
    return function(e){
      if(e!=null){
      var czkArr = [];
      for(var i=0; i<e.length; i++){
      	if(e[i].type == 0){
      		czkArr.push(e[i]);
      	}
      }
      return czkArr;
     }
    }
  }]).filter("duo",[function(){
    return function(e){
      if(e!=null){
      var czkArr = [];
      for(var i=0; i<e.length; i++){
        if(e[i].type == 1){
          czkArr.push(e[i]);
        }
      }
      return czkArr;
     }
    }
  }]).filter("tian",[function(){
    return function(e){
      if(e!=null){
      var czkArr = [];
      for(var i=0; i<e.length; i++){
        if(e[i].type == 2){
          czkArr.push(e[i]);
        }
      }
      return czkArr;
     }
    }
  }]).filter("jian",[function(){
    return function(e){
      if(e!=null){
      var czkArr = [];
      for(var i=0; i<e.length; i++){
        if(e[i].type == 3){
          czkArr.push(e[i]);
        }
      }
      return czkArr;
     }
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

