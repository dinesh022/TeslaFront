/**
 * UserService
 */
app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
	console.log(user)	
	return	$http.post("http://localhost:8777/middle/registeruser",user)
	}
	userService.login=function(user){
	console.log('userservice-> login')	
	console.log(user)
	return	$http.post("http://localhost:8777/middle/login",user)
	}
	return userService;
})



