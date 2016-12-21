'use strict';

/**
 * @ngdoc overview
 * @name surveyTimeApp
 * @description
 * # surveyTimeApp
 *
 * Main module of the application.
 */
angular.module('surveyTimeApp', ["ui.router"]).constant("url","https://47.90.20.200:1602/users/").config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	
	$stateProvider.state("home",{  
			url:"/home",
      templateUrl:'views/home.html'
    }).state("home.news",{
			url:"/news",
      templateUrl:'views/news.html'
    }).state("home.lists",{
        url:"/lists",
        templateUrl:"views/lists.html",
      controller:"zllCon" 
      }).state("login",{
      url:"/login",
      templateUrl:'views/login.html',
      controller:"loginCon"
    }).state("zhuce",{
      url:"/zhuce",
      templateUrl:'views/zhuce.html',
      controller:"zhuceCon"
    }).state("zhuyemian",{
      url:"/zhuyemian",
      templateUrl:'views/zhuyemian.html',
      controller:"zhuyemianCon"
    })

	$urlRouterProvider.when("","/zhuyemian");
}]);
