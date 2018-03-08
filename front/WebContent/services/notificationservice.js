/**
 * 
 */
app.factory('NotificationService',function($http) {
	var notificationService={}
	notificationService.getNotificationsNotViewed=function() {
		 return $http.get("http://localhost:8777/middle/getnotifications")
	}
	
	notificationService.getNotification=function(id) {
		return $http.get("http://localhost:8777/middle/getnotification/"+id)
	}
	
	notificationService.updateNotification=function(id) {
		return $http.put("http://localhost:8777/middle/updatenotification/"+id)
	}
	
	return notificationService;
})