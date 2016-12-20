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
    })

	$urlRouterProvider.when("","/home");
}]);
