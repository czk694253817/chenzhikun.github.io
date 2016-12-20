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
.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
   // ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });


	$stateProvider.state("home",{
			url:"/home",
      templateUrl:'views/home.html'
    }).state("home.news",{
			url:"/news",
      templateUrl:'views/news.html'
    }).state("home.results",{
			url:"/results",
      templateUrl:'views/results.html',
      controller:"czkCon"
    })

	$urlRouterProvider.when("","/home");
}]);

