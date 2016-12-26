'use strict'; 
 
 
 /** 
  * @ngdoc overview 
  * @name surveyTimeApp 
  * @description 
  * # surveyTimeApp 
  * 
  * Main module of the application. 
  */ 

 angular.module('surveyTimeApp', ["ui.router","chart.js","ipCookie"]) 
 .constant("url","http://47.90.20.200:1602/") 
 .config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){ 
 $urlRouterProvider.when("","/home");
  $stateProvider.state("home",{ 
    url:"/home", 
       templateUrl:'views/home.html', 
       controller:"stsCon",
       params:{id:null}
     }).state("home.news",{ 
    url:"/news", 
       templateUrl:'views/news.html', 
       controller:"news" 
     }).state("home.results",{ 
    url:"/results", 
       templateUrl:'views/results.html', 
       controller:"czkCon" 
     }).state("home.topic",{ 
    url:"/topic", 
       templateUrl:'views/topic.html', 
       controller:"topic" 
     }).state("home.xt",{ 
    url:"/xt", 
       templateUrl:'views/xt.html', 
       controller:"sxt" 
     }).state("home.xt.dx",{ 
    url:"/dx", 
       templateUrl:'views/dx.html', 
       controller:"dx" 
     }).state("home.lists",{ 
       url:"/lists", 
       templateUrl:"views/lists.html", 
       controller:"zllCon"
     }).state("zhuce",{ 
       url:"/zhuce", 
       templateUrl:"views/zhuce.html", 
       controller:"zhuceCon" 
     }).state("login",{ 
       url:"/login", 
       templateUrl:"views/login.html", 
       controller:"loginCon" 
     }).state("zhuyemian",{ 
       url:"/zhuyemian", 
       templateUrl:"views/zhuyemian.html", 
       controller:"zhuyemianCon" 
     }).state("404",{ 
       url:"/404", 
       templateUrl:"404.html" 
     }).state("home.xt.dxt",{
      url:"/dxt",
      templateUrl:'views/stsdxt.html'
    }).state("home.xt.tk",{
      url:"/tk",
      templateUrl:'views/ststk.html',
      controller:"dx"
    }).state("home.xt.jd",{
      url:"/jd",
      templateUrl:'views/stsjd.html'
    }).state("home.topic.ststotk",{
      url:"/ststotk",
      templateUrl:'views/ststotk.html',
      controller:"ststotk"
    })
 }]); 
