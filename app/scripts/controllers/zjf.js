'use strict';

/**
 * @ngdoc function
 * @name surveyTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyTimeApp
 */

var title = '', uid = '', option = [];
angular.module('surveyTimeApp')
.controller('zjfCon', ["$scope","$http","url",function($scope,$http,url){
  $scope.options = {
    height: 100,
    focus: true,
    // airMode: true,
    toolbar: [
            ['edit',[]],
            ['headline', []],
            ['style', ['bold','clear']],
            ['fontface', []],
            ['textsize', ['fontsize']],
            ['fontclr', ['color']],
            ['alignment', []],
            ['height', []],
            ['table', []],
            ['insert', ['picture']],
            ['view', []]
        ]
  };

	$scope.opindex = 0;
	$scope.zjfArr = null;
	$scope.$on('to-parent', function(event,data) {
		console.log(data);
		$scope.zjfArr = data;
	});
	$scope.changeBool = true;
	$scope.zjfdata = {
		id:"6c4087e8acf439b7",
		title:"你想不想学习？",
		uid:"56aa508e239548c2",
		option:[
			{
				type:0,
				title:"你多久学习一次",
				oop:[],
				opt:[
					{num:1,op:"一天"},
					{num:2,op:"两天"},
					{num:3,op:"三天"},
					{num:4,op:"四天"}
				]	
			},
			{
				type:1,
				title:"你多久运动一次",
				oop:[],
				opt:[
					{num:1,op:"一天"},
					{num:2,op:"两天"},
					{num:3,op:"三天"},
					{num:4,op:"四天"}
				]	
			},
			{
				type:2,
				title:"你多久复习一次",
				oop:["两天","三天","四天"],
				opt:[]	
			},
			{
				type:3,
				title:"你多久复习一次",
				oop:["两天","三天","四天"],
				opt:[]	
			}
		]
	}
  // $http({
  // 	method: "get",
  // 	url: url + 'item/' + '09e7d87e00bcf8db'
  // }).then(function(e){
  	$scope.index1 = 0;
  	$scope.index2 = 0;
  	$scope.index3 = 0;
  // 	$scope.maxIndex = e.data.option.length;
  // 	for(var i=0; i<e.data.option.length; i++){
  // 		if(e.data.option[i].type == 0){
  // 			$scope.index1 ++;
  // 		}else if(e.data.option[i].type == 1){
  // 			$scope.index2 ++;
  // 		}else if(e.data.option[i].type == 2){
  // 			$scope.index3 ++;
  // 		}
  // 	}
  	
  	$scope.maxIndex = $scope.zjfdata.option.length;
  	for(var i=0; i<$scope.zjfdata.option.length; i++){
  		if($scope.zjfdata.option[i].type == 0){
  			$scope.index1 ++;
  		}else if($scope.zjfdata.option[i].type == 1){
  			$scope.index2 ++;
  		}else if($scope.zjfdata.option[i].type == 2){
  			$scope.index3 ++;
  		}
  	}
  	// alert($scope.index1 + $scope.index2 + $scope.index3);
  	// $scope.zjfdata = e.data;
  	$scope.changeQes = function(){
  		if($scope.zjfArr == null){
  			if($scope.changeBool == true){
  				$scope.changeBool = false;
  				angular.element(".zjfWain").css("bottom",0).css("opacity",1);
	 				angular.element(".zjfWain").animate({"bottom":"5rem"},300,function(){
	 					angular.element(".zjfWain").delay(600).animate({"opacity":0},function(){
	 						$scope.changeBool = true;
	 					});
	 				})
	 			}
  		}else{
  			if($scope.opindex < $scope.maxIndex -1){
  				if($scope.zjfArr[0].type == 0){
  					$scope.zjfArr[0].opt[$scope.zjfArr[1]].num = $scope.zjfArr[2];
  					option.push($scope.zjfArr[0]);
  					console.log(option);
  					$scope.zjfArr = null;
  					$scope.opindex ++;
  				}else if($scope.zjfArr[0].type == 1){
  					option.push($scope.zjfArr[0]);
  					console.log(option);
  					$scope.zjfArr = null;
  					$scope.opindex ++;
  				}else if($scope.zjfArr[0].type == 2){
  					option.push($scope.zjfArr[0]);
  					$scope.zjfArr = null;
  					$scope.opindex ++;
  				}else if($scope.zjfArr[0].type == 3){

  				}
  			}else if($scope.opindex == $scope.maxIndex -1){
  				angular.element(".questionaire_submit").text("提交问卷");
  				alert();
  			}
  		}
  		
  	}

  	
  // },function(){alert("error!");})

	
	// $scope.zjfArr = null;
	// $scope.$on('to-parent', function(event,data) {
	// 	console.log(data);
	// 	$scope.zjfArr = data;
	// 	// if(data.type == 1){
	// 	// 	if(data.arr.length == 0){
	// 	// 		$scope.zjfObj = null;
	// 	// 	}
	// 	// }
	// 	// if(data.type == 2){
	// 	// 	if(data.txt == ""){
	// 	// 		$scope.zjfObj = null;
	// 	// 	}
	// 	// }
	// 	// if(data.type == 3){
	// 	// 	if(data.txt == ""){
	// 	// 		$scope.zjfObj = null;
	// 	// 	}
	// 	// }
	// });
	
	// $scope.changeqes = function(){
	// 	alert();
	// 	// if($scope.zjfArr == null){
	// 	// 	angular.element(".zjfWain").css("bottom",0).css("opacity",1);
	//  // 		angular.element(".zjfWain").stop().animate({"bottom":"5rem"},300,function(){
	//  // 			angular.element(".zjfWain").delay(1000).animate({"opacity":0});
	//  // 		})
	// 	// }
	// }
// 	$scope.changeQes = function(){
// 	 if($scope.zjfObj == null){
// 	 	angular.element(".zjfWain").css("bottom",0).css("opacity",1);
// 	 	angular.element(".zjfWain").animate({"bottom":"5rem"},300,function(){
// 	 		angular.element(".zjfWain").delay(1000).animate({"opacity":0});
// 	 	});
// 	 }else{
// 	 	if($scope.opindex < $scope.zjfdata.option.length-1){
// 		 if($scope.zjfObj.type == 0){
// 			$scope.opindex ++;
// 			$scope.zjfdata.option[$scope.zjfObj.proindex].opt[$scope.zjfObj.i].num = $scope.zjfObj.num; 
// 			$scope.zjfObj = null;
// 		 }else if($scope.zjfObj.type == 1){
// 		 	$scope.opindex ++;
// 		 	for(var i=0; i<$scope.zjfObj.arr.length; i++){
// 		 		$scope.zjfdata.option[$scope.zjfObj.proindex].opt[$scope.zjfObj.arr[i].i].num = $scope.zjfObj.arr[i].num;
// 		 	}
// 		 	$scope.zjfObj = null;
// 		 }else if($scope.zjfObj.type == 2){
// 		 	$scope.zjfdata.option[$scope.zjfObj.proindex].oop.push($scope.zjfObj.txt);
// 		 	$scope.opindex ++;
// 		 	$scope.zjfObj = null;
// 		 }else if($scope.zjfObj.type == 3){
// 		 	$scope.zjfdata.option[$scope.zjfObj.proindex].oop.push($scope.zjfObj.txt);
// 		 	$scope.opindex ++;
// 		 	$scope.zjfObj = null;
// 		 }
// 		 if($scope.opindex == $scope.zjfdata.option.length-1){
// 				angular.element(".questionaire_submit").text("提交问卷");
// 		 }
// 		}else if($scope.opindex == $scope.zjfdata.option.length-1){
// 			if($scope.zjfObj.type == 0){
// 			$scope.zjfdata.option[$scope.zjfObj.proindex].opt[$scope.zjfObj.i].num = $scope.zjfObj.num; 
// 			console.log($scope.zjfdata);
// 			$scope.zjfObj = null;
// 		 }else if($scope.zjfObj.type == 1){
// 		 	for(var i=0; i<$scope.zjfObj.arr.length; i++){
// 		 		$scope.zjfdata.option[$scope.zjfObj.proindex].opt[$scope.zjfObj.arr[i].i].num = $scope.zjfObj.arr[i].num;
// 		 	}
// 		 	$scope.zjfObj = null;
// 		 }else if($scope.zjfObj.type == 2){
// 		 	$scope.zjfdata.option[$scope.zjfObj.proindex].oop.push($scope.zjfObj.txt);
// 		 }else if($scope.zjfObj.type == 3){
// 		 	$scope.zjfdata.option[$scope.zjfObj.proindex].oop.push($scope.zjfObj.txt);
// 		 }
// 		 if($scope.opindex == $scope.zjfdata.option.length-1){
// 				angular.element(".questionaire_submit").text("提交问卷");
// 		 }
// 		}
// 	}
// 	}
}])
.directive("zjfoptionone",function(){
	return {
		restrict: "EACM",
		scope: {"zjfdataone":"=zjfd","options":"=options"},
		template: function(ele,attrs){	
			if(attrs.type == 0){
				return '<div class="questionaire_question"><div class="question_title">{{zjfdataone.title | addqstmark}}</div><div class="zjf_options"><div ng-repeat="opo in zjfdataone.opt" class="opts"><span class="zjf_state" ng-class="{zjf_bgactive:$index == i}" ng-click="changeState($index)"></span><span class="optCont" ng-class="{zjf_colactive:$index == i}">{{opo.op}}</span><div></div>';
			}else if(attrs.type == 1){ 
				return '<div class="questionaire_question"><div class="question_title">{{zjfdataone.title | addqstmark}}</div><div class="zjf_options"><div ng-repeat="opo in zjfdataone.opt" class="opts"><span class="zjf_state" bool="false" ng-click="changeState($index)"></span><span class="optCont">{{opo.op}}</span><div></div>';
			}else if(attrs.type == 2){ 
				return '<div class="questionaire_question"><div class="question_title">{{zjfdataone.title | addqstmark}}</div><div class="zjf_options"><input type="text" class="form-control formpos" placeholder="请填写答案" ng-blur="addFill()"></div></div>';
			}else if(attrs.type == 3){
				return '<div class="questionaire_question"><div class="question_title">{{zjfdataone.title | addqstmark}}</div><div class="zjf_options"><summernote config="options"></summernote></div></div>';
			}
		},
		link: function(scope,ele,attrs){
			var obj = scope.zjfdataone;
			console.log(obj);
			scope.changeState = function(i){
				if(attrs.type == 0){
					var arr = [];
					scope.i = i;
					var num = Number(obj.opt[i].num) + 1;
					arr.push(obj);
					arr.push(i);
					arr.push(num);
					scope.$emit('to-parent', arr);
				}else if(attrs.type == 1){
					var arr = [];
					var bool = ele.find(".zjf_state").eq(i).attr("bool");
					if(bool == "false"){
						ele.find(".zjf_state").eq(i).attr("bool","true");
						ele.find(".zjf_state").eq(i).addClass("zjf_bgactive");
						ele.find(".optCont").eq(i).addClass("zjf_colactive");
						obj.opt[i].num = Number(obj.opt[i].num) + 1;
						arr.push(obj);
						scope.$emit('to-parent', arr);
					}else{
						ele.find(".zjf_state").eq(i).attr("bool","false");
						ele.find(".zjf_state").eq(i).removeClass("zjf_bgactive");
						ele.find(".optCont").eq(i).removeClass("zjf_colactive");
						obj.opt[i].num = Number(obj.opt[i].num) - 1;
						arr.push(obj);
						var bool2 = false;
						for(var i=0; i<ele.find(".zjf_state").length; i++){
							if(ele.find(".zjf_state").eq(i).attr("bool") == "true"){
								bool2 = true;
							}
						}
						if(bool2 == true){
							scope.$emit('to-parent', arr);
						}else{
							scope.$emit('to-parent', null);
						}
					}
				}
			}
			scope.addFill = function(){
				var arr = [];
				var answer = angular.element(".formpos").val();
				if(answer == "" || answer == null){
					return;
				}else{
					obj.oop.push(answer);
					arr.push(obj);
					scope.$emit('to-parent', arr);
				}
			}

			// ele.find(".zjf_state").each(function(i,e){
			// 	e.onclick = function(){
			// 		alert();
			// 		if(obj.type == 0){
			// 			// zjfobj.opt[i].num = zjfobj.opt[i].num + 1;
			// 			ele.find(".zjf_state").removeClass("zjf_bgactive");
			// 			ele.find(".optCont").removeClass("zjf_colactive");
			// 			alert($(e));
			// 			$(e).addClass("zjf_bgactive");
			// 			$(e).next().addClass("zjf_colactive");
			// 			scope.$emit('to-parent', zjfobj);
			// 		}else if(zjftype == 1){
			// 			if($(this).attr("bool") == "false"){
			// 				$(this).attr("bool","true");
			// 				$(e).addClass("zjf_bgactive");
			// 				$(e).next().addClass("zjf_colactive");
			// 				dxObj.type = zjftype;
			// 				dxObj.proindex = proindex;
			// 				var num = qstObj.opt[i].num + 1;
			// 				dxObj.arr[dxObj.arr.length] = {i:i, num:num};
			// 			}else{
			// 				$(this).attr("bool","false");
			// 				$(e).removeClass("zjf_bgactive");
			// 				$(e).next().removeClass("zjf_colactive");
			// 				for(var j=0; j<dxObj.arr.length; j++){
			// 					if(dxObj.arr[j].i == i){
			// 						dxObj.arr.splice(j,1);
			// 					}
			// 				}
			// 			}
			// 			scope.$emit('to-parent', dxObj);
			// 		}
			// 	}
			// })
		}
		// template: "<div>{{zjfdataone}}</div>",
		// template:function(ele,attrs){
		// 	if(attrs.zjftype == 0){
		// 		return '<div>
		// 			<div class="questionaire_question">
		// 				<div class="question_title"> 	
		// 					{{zjfdataone.title | addqstmark}}
		// 				</div>
		// 				<div class="zjf_options">
		// 					<div ng-repeat="opo in zjfdataone.opt">
		// 						<span class="zjf_state"></span>
		// 						<span>{{opo.op}}</span>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>';
		// 	}
		// },
		// link: function(scope,ele,attrs){
		// 	var qstObj = scope.zjfdataone;
		// 	var zjftype = attrs.zjftype;
		// 	var proindex = attrs.proindex;
		// 	if(zjftype == 0 || zjftype == 1){
		// 		var elestr = '';
		// 		for(var i=0; i<qstObj.opt.length; i++){
		// 			elestr += '<div><span class="zjf_state" bool = "false"></span><span class="optCont">'+qstObj.opt[i].op+'</span></div>';
		// 		}
		// 		ele.html('<div class="questionaire_question"><div class="question_title">'+qstObj.title+'</div><div class="zjf_options">'+elestr+'</div></div></div>');
		// 	}else if(zjftype == 2){
		// 		ele.html('<div class="questionaire_question"><div class="question_title">'+qstObj.title+'</div><div class="zjf_options"><input type="text" class="form-control formpos" placeholder="请填写答案"></div></div>');
		// 	}else if(zjftype == 3){
		// 		ele.html('<div class="questionaire_question"><div class="question_title">'+qstObj.title+'</div><div class="zjf_options"><textarea class="form-control zjfArea" rows="5" style="resize:none;"></textarea></div></div>');
		// 	}


			// ele.find(".zjf_state").each(function(i,e){
			// 	e.onclick = function(){
			// 		var zjfobj = {};
			// 		zjfobj.type = zjftype;
			// 		zjfobj.proindex = proindex;
			// 		if(zjftype == 0){
			// 			zjfobj.i = i;
			// 			zjfobj.num = qstObj.opt[i].num + 1;
			// 			ele.find(".zjf_state").removeClass("zjf_bgactive");
			// 			ele.find(".optCont").removeClass("zjf_colactive");
			// 			$(e).addClass("zjf_bgactive");
			// 			$(e).next().addClass("zjf_colactive ");
			// 			scope.$emit('to-parent', zjfobj);
			// 		}else if(zjftype == 1){
			// 			if($(this).attr("bool") == "false"){
			// 				$(this).attr("bool","true");
			// 				$(e).addClass("zjf_bgactive");
			// 				$(e).next().addClass("zjf_colactive");
			// 				dxObj.type = zjftype;
			// 				dxObj.proindex = proindex;
			// 				var num = qstObj.opt[i].num + 1;
			// 				dxObj.arr[dxObj.arr.length] = {i:i, num:num};
			// 			}else{
			// 				$(this).attr("bool","false");
			// 				$(e).removeClass("zjf_bgactive");
			// 				$(e).next().removeClass("zjf_colactive");
			// 				for(var j=0; j<dxObj.arr.length; j++){
			// 					if(dxObj.arr[j].i == i){
			// 						dxObj.arr.splice(j,1);
			// 					}
			// 				}
			// 			}
			// 			scope.$emit('to-parent', dxObj);
			// 		}
			// 	}
			// })
	
		// 	ele.find(".formpos").on("blur",function(){
		// 		var txtObj = {};
		// 		txtObj.type = zjftype;
		// 		txtObj.proindex = proindex;
		// 		txtObj.txt = $(this).val();
		// 		scope.$emit('to-parent', txtObj);
		// 	})

		// 	ele.find(".zjfArea").on("blur",function(){
		// 		var areaObj = {};
		// 		areaObj.type = zjftype;
		// 		areaObj.proindex = proindex;
		// 		areaObj.txt = $(this).val();
		// 		scope.$emit('to-parent', areaObj);
		// 	})

		// 	// ele.find(".zjf_state").on("click",function(){
		// 	// 	if(zjftype == 0){
		// 	// 		angular.element(".zjf_state").removeClass("zjf_bgactive");
		// 	// 		angular.element(".optCont").removeClass("zjf_colactive");
		// 	// 		$(this).addClass("zjf_bgactive");
		// 	// 		$(this).next().addClass("zjf_colactive");
		// 	// 		scope.$emit('to-parent', qstObj);
		// 	// 	}
				
		// 	// });
		// }
		// template: function(ele,attrs){
		// 	// console.log(this);
		// 	var obj = this;
		// 	var str = "";
		// 	for(var x in obj){
		// 		str = str+x+"||";
		// 	}
		// 	console.log(str);
		// 	// console.log(obj['type2']);
		// 	// alert(zjftype);
		// 	// alert(obj.aa);/
		// 	// alert(attrs.);
		// 	// {{zjftype}};
		// 	// alert(attrs.zjftype);
		// 	// alert(attrs.zjftype);
		// 	// var zjftype = attrs.zjftype;
		// 	// alert(zjftype);
		// 	// if(attrs.zjftype == 0){
		// 		return '<div class="questionaire_question"><div class="question_title">{{zjfdataone.title | addqstmark}}</div><div class="zjf_options"><div ng-repeat="opo in zjfdataone.opt"><span class="zjf_state"></span><span>{{opo.op}}</span></div></div></div></div>';
		// 	// }
			
		// }
	}
})
.filter("addqstmark",function(){
	return function(str){
	 	if(str != null){
			if(str[str.length-1] != "?"&&str[str.length-1] != "？"){
				return str + "？";
			}else{
				return str;
			}
		}
	}
})
.filter("pgmType",function(){
	return function(arr,types){
		if(arr != null){
			var newArr = [];
			if(types == 0){
				for(var i=0; i<arr.length; i++){
					if(arr[i].type == 0){
						newArr.push(arr[i]);
					}
				}
				return newArr;
			}else if(types == 1){
				for(var i=0; i<arr.length; i++){
					if(arr[i].type == 1){
						newArr.push(arr[i]);
					}
				}
				return newArr;
			}else if(types == 2){
				for(var i=0; i<arr.length; i++){
					if(arr[i].type == 2){
						newArr.push(arr[i]);
					}
				}
				return newArr;
			}else if(types == 3){
				for(var i=0; i<arr.length; i++){
					if(arr[i].type == 3){
						newArr.push(arr[i]);
					}
				}
				return newArr;
			}
		}
	}
})









