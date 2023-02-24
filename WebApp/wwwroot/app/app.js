﻿var app = angular.module('AngularJSApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar', 'ngSanitize', 'ngAnimate']).config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
	cfpLoadingBarProvider.includeSpinner = false;
}]);

app.config(function ($routeProvider) {


	$routeProvider.when("/Login", {
		controller: "LoginController",
		templateUrl: "app/views/Login.html"
	});

});


//app.constant('ngAuthSettings', {
//	//apiServiceBaseUri: serviceBase,
//	clientId: 'ngAuthApp'
//});
//app.config(['$httpProvider', function ($httpProvider) {

//	$httpProvider.interceptors.push('authInterceptorService');
//}]);
app.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {






	//////////////////////////
	//$rootScope.serviceUrl = serviceBase;
	//$rootScope.$on('$viewContentLoaded', function () {


	//});


}]);
