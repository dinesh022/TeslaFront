/**
 * Angular Js module
 */
var app=angular.module('app',['ngRoute'])
app.config(function($routeProvider){
	$routeProvider
	.when('/register',{
		templateUrl:'views/registrationform.html',
		controller:'UserController'
	})
	
	
})
