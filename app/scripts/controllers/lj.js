'use strict';

/**
 * @ngdoc function
 * @name surveyTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the surveyTimeApp
 */
angular.module('surveyTimeApp')
  .controller('loginCon', ["$scope","$http","url",function ($scope,$http,url) {
  	$scope.user="";
    $scope.password="";
  	
  	$scope.userBlur=function(){  
  		if(!$scope.user.match(/^[1][34578](\d{9})$/)){
        $scope.user="手机格式错误";
        $scope.className="lj-red"
      } 		
  	}
    $scope.userFocus=function(){      
      if($scope.className!="lj-black"){
        $scope.user="";
        $scope.className="lj-black"
      }
    }
    $scope.login=function(){
      $http({
          method:"post",
          url:url+"server/users/login/",
          data:{"username":$scope.user,"password":$scope.password},
          headers:{'Content-Type':'application/x-www-form-urlencoded'}
        }).then(function(reponse){
            console.log(reponse)
        },function(reponse){
            console.log(reponse)
        })
    }
        
      

  	
  }])

  .controller('zhuceCon',  ["$scope","$http","url",function ($scope,$http,url) {
    $scope.user="";
    $scope.password="";
    $scope.password1="";
    $scope.userBlur=function(){  
      if(!$scope.user.match(/^[1][34578](\d{9})$/)){
        $scope.user="手机格式错误";
        $scope.className="lj-red"
      }     
    }
    $scope.userFocus=function(){      
      if($scope.className!="lj-black"){
        $scope.user="";
        $scope.className="lj-black"
      }
    }
  	$scope.pasBlur=function(){  
      if($scope.password.length>6 && $scope.password.length<18){
        
      }else{
        $scope.password="密码格式错误";
        $scope.className1="lj-red";
        
      }     
    }
    $scope.pasFocus=function(){      
      if($scope.className1!="lj-black"){
        $scope.password="";
        $scope.className1="lj-black"
      }
    }
    $scope.zhuce=function(){
      $http({
          method:"post",
          url:url+"server/users/",
          data:{"username":$scope.user,"password":$scope.password}
          // headers:{'Content-Type':'application/x-www-form-urlencoded'}
        }).then(function(reponse){
            console.log(reponse);
        },function(){
            alert("error");
        })
    }


  }])
  .controller('zhuyemianCon', ["$scope","$http",function ($scope,$http) {
  	
  }]);
// window.onload=function(){
// 		changeImg()

// 		var code;//声明一个变量用于存储生成的验证码  
//         document.getElementById("lj-code").onclick=changeImg;  
//         function changeImg(){  
//             //alert("换图片");  
//             var arrays=new Array(  
//                 '1','2','3','4','5','6','7','8','9','0',  
//                 'a','b','c','d','e','f','g','h','i','j',  
//                 'k','l','m','n','o','p','q','r','s','t',  
//                 'u','v','w','x','y','z',  
//                 'A','B','C','D','E','F','G','H','I','J',  
//                 'K','L','M','N','O','P','Q','R','S','T',  
//                 'U','V','W','X','Y','Z'               
//             );  
//             code='';//重新初始化验证码  
//             //alert(arrays.length);  
//             //随机从数组中获取四个元素组成验证码  
//             for(var i=0;i<4;i++){  
//             //随机获取一个数组的下标  
//                 var r=parseInt(Math.random()*arrays.length);  
//                 code+=arrays[r];  
//                 //alert(arrays[r]);  
//             }  
//             //alert(code);  
//             document.getElementById('lj-code').innerHTML=code;//将验证码写入指定区域  
//         }         
          
//         //效验验证码(表单被提交时触发)  
//         function check(){  
//             //获取用户输入的验证码  
//             var input_code=document.getElementById('lj-vcode').value;  
//             //alert(input_code+"----"+code);  
//             if(input_code.toLowerCase()==code.toLowerCase())  
//             {  
//                 //验证码正确(表单提交)  
//                 return true;  
//             }  
//             alert("请输入正确的验证码!");  
//             //验证码不正确,表单不允许提交  
//             return false;  
//         }
// }
