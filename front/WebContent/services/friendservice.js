/**
 * 
 */
app.factory('FriendService',function($http){
	var friendService={}
	friendService.getAllSuggestedUsers=function(){
		return $http.get("http://localhost:8777/middle/suggestedusers")
	}
	friendService.addFriend=function(toId){
		return $http.post("http://localhost:8777/middle/addfriend",toId)
	}
	friendService.getPendingRequests=function(){
		return $http.get("http://localhost:8777/middle/pendingrequests")
	}
	friendService.acceptRequest=function(request) {
		return $http.put("http://localhost:8777/middle/acceptrequest",request);
	}
	
	friendService.deleteRequest=function(request) {
		return $http.put("http://localhost:8777/middle/deleterequest",request)
	}
	friendService.getAllFriends=function() {
		return $http.get("http://localhost:8777/middle/friends")
}
	return friendService;
})