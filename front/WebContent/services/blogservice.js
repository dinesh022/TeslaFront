/**
 * 
 */
app.factory('BlogService',function($http){
	var blogService={}
	blogService.addBlog=function(blog){	
	return	$http.post("http://localhost:8777/middle/addblogpost",blog)
	}
	
	blogService.getBlogsWaitingForApproval=function(){
	return	$http.get("http://localhost:8777/middle/getblogs/"+0)
	}
	
	blogService.getBlogsApproved=function(){
		return	$http.get("http://localhost:8777/middle/getblogs/"+1)
		}
	
	blogService.getBlog=function(id){
		return	$http.get("http://localhost:8777/middle/getblog/"+id)
		}
	
	blogService.hasUserLikedBlog=function(id){
		return	$http.get("http://localhost:8777/middle/hasuserlikedblog/"+id)
		}
	
	blogService.approve=function(blog) {
		 return $http.put("http://localhost:8777/middle/approve",blog)
	 }
	 blogService.reject=function(blog,rejectionReason) {
		 return $http.put("http://localhost:8777/middle/reject/"+rejectionReason,blog)
	 }
	 blogService.updateLikes=function(id) {
		 return $http.put("http://localhost:8777/middle/updatelikes/"+id)
	 }
	 blogService.addComment=function(blogComment){
		    return $http.post("http://localhost:8777/middle/addcomment",blogComment)
		    }

		blogService.getBlogComments=function(id){
		    return $http.get("http://localhost:8777/middle/blogcomments/"+id)
		    }
	return blogService;
})