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
	userService.logout=function(){
	return	$http.put("http://localhost:8777/middle/logout")	
	}
	userService.getUser=function(){
		console.log('userservice-> getuser')
		return	$http.get("http://localhost:8777/middle/getuser")
	}
	userService.updateUser=function(user){
		console.log('userservice-> updateuser')
		return	$http.put("http://localhost:8777/middle/updateuser",user)
	}
	
	
	return userService;
})



