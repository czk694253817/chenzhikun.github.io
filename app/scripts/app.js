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
      templateUrl:'views/home.html',
      controller:"stsCon"
    }).state("home.news",{
			url:"/news",
      templateUrl:'views/news.html',
      controller:"news"
    }).state("home.topic",{
			url:"/topic",
      templateUrl:'views/topic.html',
      controller:"topic"
    }).state("home.xt",{
			url:"/xt",
      templateUrl:'views/xt.html'
    }).state("home.xt.dx",{
			url:"/dx",
      templateUrl:'views/dx.html'
    }).state("home.lists",{
        url:"/lists",
        templateUrl:"views/lists.html",
      controller:"zllCon" 
      });


	$urlRouterProvider.when("","/home/lists");
}]);
