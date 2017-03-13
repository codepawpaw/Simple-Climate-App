angular.module('appService', [])

	.factory('Service', ['$http',function($http) {
		return {
			getWeatherByCity : function(name) {
				return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?mode=json&units=metric&cnt=5&APPID=481e3bc28e5264e5607c2b65b449bfc1&q='+name)
								 // api.openweathermap.org/data/2.5/forecast
			}
		}
	}]);
