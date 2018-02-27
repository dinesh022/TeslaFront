/**
 * 
 */
app.factory('JobService',function($http){
	var jobService={}
	
	jobService.addJob=function(job){
	console.log(job)	
	return	$http.post("http://localhost:8777/middle/addjob",job)
	}
	return jobService;
})