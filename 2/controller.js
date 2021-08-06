var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'home.html'
	})
	.when('/aboutus',{
		templateUrl: 'aboutus.html'
	})
	.when('/contactus',{
		templateUrl: 'contactus.html'
	})
	.otherwise({
		redirectTo:'/'});


	// $scope.requestApiForConverToBase64=function () {
 //            $http({
 //                method: 'GET',
 //                url: 'https://www.runoob.com/try/angularjs/data/sites.php',
 //                headers:{'Content-Type': 'application/json',
 //                    "Access-Control-Allow-Origin": "*",
 //                    'Accept': 'application/json'}
 //            }).then(function successCallback(response) {
 //                $scope.aStringOutput = response.data;
 //                console.log("--------1");
 //            }, function errorCallback(response) {
 //                                 // request failed execution code
 //                console.log("--------2");
 //            });
 //        }
});