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
//    controller:"home"
    })
	$urlRouterProvider.when("","/home");
}]);
