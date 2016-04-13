define(['angular', 'require', 'angular-route'], function (angular, require) {

    var blogApp = angular.module('blogApp',['ngRoute']);

    blogApp.config(['$routeProvider','$controllerProvider',
    	function($routeProvider,$controllerProvider) {
	        $routeProvider
	        .when('/', {
	        	templateUrl:'templates/list.html',
	            controller: 'IndexCtrl',
	            resolve:{
	            	delay : ctrlRegister('IndexCtrl',['controllers/IndexCtrl.js'])
	            }
	        })
	        .when('/data', {
	        	templateUrl:'templates/data.html',
	            controller: 'DataCtrl',
	            resolve:{
	            	delay : ctrlRegister('DataCtrl',['controllers/DataCtrl.js'])
	            }
	        })
	        .otherwise({
	            redirectTo: '/'
	    	});

	    	function ctrlRegister (ctrlName, ctrlModule) {
	    		return function ($q) {
	    			var defer = $q.defer();
	            	require(ctrlModule, function (controller) {

                        $controllerProvider.register(ctrlName, controller);

                        defer.resolve();
                    });
                    return defer.promise;
	    		}
	    	}
	    }
    ]);

	return blogApp;
});