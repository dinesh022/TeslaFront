/**
 * Angular Js module
 */
var app=angular.module('app',['ngRoute','ngCookies'])
app.config(function($routeProvider){
	$routeProvider
	.when('/register',{
		templateUrl:'views/registrationform.html',
		controller:'UserController'
	})
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	.when('/edituserprofile',{
		templateUrl:'views/edituserprofile.html',
		controller:'UserController'
	})
	.when('/addjob',{
		templateUrl:'views/jobform.html',
		controller:'JobController'
	})
	.when('/alljobs',{
		templateUrl:'views/jobslist.html',
		controller:'JobController'
	})
		.when('/getjob/:id',{
		templateUrl:'views/jobdetail.html',
		controller:'JobController'
	})
	.when('/addblog',{
		templateUrl:'views/blogform.html',
		controller:'BlogController'
	})
	.when('/blogsnotapproved',{
		templateUrl:'views/blogsnotapproved.html',
		controller:'BlogController'
	})
	.when('/blogsapproved',{
		templateUrl:'views/blogsapproved.html',
		controller:'BlogController'
	})
	.when('/getblog/:id',{
		templateUrl:'views/blogsdetails.html',
		controller:'BlogDetailsController'
	})
	.when('/getblognotapproved/:id',{
		templateUrl:'views/blogapprovalform.html',
		controller:'BlogDetailsController'
	})
})
app.run(function($location,$rootScope,$cookieStore,UserService){
	if($rootScope.loggedInUser==undefined)
		$rootScope.loggedInUser=$cookieStore.get('currentuser')
		$rootScope.logout=function(){
		UserService.logout().then(
		function(response){
			delete $rootScope.loggedInUser;
			$cookieStore.remove('currentuser')
			$rootScope.message="succesfully logged out.."
			$location.path=('/home');
			
			
			},function(response){
			$rootScope.error=response.data
			if(response.status==401)
				$location.path('/login');
	})
	}
})