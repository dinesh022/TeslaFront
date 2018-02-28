/**
 * 
 */
app.factory('JobService',function($http){
	var jobService={}
	
	jobService.addJob=function(job){
	console.log(job)	
	return	$http.post("http://localhost:8777/middle/addjob",job)
	}
	jobService.getAllJobs=function(){
	
		return	$http.get("http://localhost:8777/middle/alljobs")
	}
	jobService.getJob=function(id){
	return	$http.get("http://localhost:8777/middle/getjob/"+id)
	}
	return jobService;
})