/**
 * 
 */
app.factory('BlogService',function($http){
	var blogService={}
	blogService.addBlog=function(blog){	
	return	$http.post("http://localhost:8777/middle/addblogpost",blog)
	}
	return blogService;
})