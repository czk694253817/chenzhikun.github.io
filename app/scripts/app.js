'use strict';

/**
 * @ngdoc overview
 * @name surveyTimeApp
 * @description
 * # surveyTimeApp
 *
 * Main module of the application.
 */
angular.module('surveyTimeApp', ["ui.router"])
.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	
	$stateProvider.state("home",{
			url:"/home",
      templateUrl:'views/home.html'
    }).state("home.news",{
			url:"/news",
      templateUrl:'views/news.html'
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
