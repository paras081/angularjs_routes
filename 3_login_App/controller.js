var app = angular.module('myLoginApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{

		templateUrl:'login.html'
	})
	.when('/dashboard',{
		resolve:{
				"check":function($rootScope,$location){
					if(!$rootScope.loggedIn){
						$location.path('/');
					}
				}
		},
		templateUrl:'dashboard.html'
	})
	.otherwise({
		redirectTo:'/'});
});

app.controller('loginCtrl',function($scope,$location,$rootScope){

	$scope.submit =function(){
		if($scope.username == 'admin' && $scope.password == '123'){
			$rootScope.loggedIn = true;
			$location.path('/dashboard');
		}else{
			alert("wrong username/password");
		}
	}

});