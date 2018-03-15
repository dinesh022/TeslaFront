/**
 * 
 */
app.factory('FriendService',function($http){
	var friendService={}
	friendService.getAllSuggestedUsers=function(){
	return	$http.get("http://localhost:8777/middle/suggestedusers")
	}
	return friendService;
})