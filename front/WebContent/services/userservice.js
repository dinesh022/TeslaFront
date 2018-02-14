/**
 * UserService
 */
app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
	console.log(user)	
	return	$http.post("http://localhost:8777/middle/registeruser",user)
	}
	return userService;
})



