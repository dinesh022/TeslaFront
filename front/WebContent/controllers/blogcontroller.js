/**
 * 
 */
 app.controller('BlogController',function($scope,$rootScope,$location,BlogService){
	$scope.addBlog=function(blog){ 
		BlogService.addBlog(blog).then(
		function(response){
			alert('blog posted Successfully')
			$location.path('/home')
		},function(response){
			$rootScope.error=response.data
		   if(response.status==401)
			   $location.path('/login')
		})
		}
 })