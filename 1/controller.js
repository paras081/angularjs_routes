var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		template:'Welcome User!'
	})
	.when('/aboutus',{
		template: 'About us'
	})
	.when('/contactus',{
		template: 'Contact us'
	})
	.otherwise({
		redirectTo:'/'});
});