'use strict';
angular.module('appController', [])

	// inject the Todo service factory into our controller
	.controller('appCtrl', ['$scope','$http','Service', function($scope, $http, Service) {
	
		

		$scope.selectedCity = 'Jakarta' // Set default selected city
		Service.getWeatherByCity($scope.selectedCity).success(function (data){
				console.log(data.list);
				$scope.weathers = data.list;
		});

		$scope.city = [
		    {name : "Jakarta"},
		    {name : "Tokyo"},
		    {name : "London"}
		];

		$scope.searchWeather = function(){
			Service.getWeatherByCity($scope.selectedCity).success(function (data){
				console.log(data.list);
				$scope.weathers = data.list;
			});
		}



}]);