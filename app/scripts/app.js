'use strict';

/**
 * @ngdoc overview
 * @name surveyTimeApp
 * @description
 * # surveyTimeApp
 *
 * Main module of the application.
 */


angular.module('surveyTimeApp', ["ui.router","chart.js"])
.constant("url","http://47.90.20.200:1602/")
.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
$urlRouterProvider.when("","/home")


	$stateProvider.state("home",{
			url:"/home",
      templateUrl:'views/home.html',
      controller:"stsCon"
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
      templateUrl:'views/dx.html'
    }).state("home.lists",{
        url:"/lists",
        templateUrl:"views/lists.html",
      controller:"zllCon" 
      }).state("404",{
        url:"/404",
        templateUrl:"404.html"
      })


}]);

