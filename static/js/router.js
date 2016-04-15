define(['angular', 'require', 'angular-route'], function (angular, require) {

    var blogApp = angular.module('blogApp',['ngRoute']);

    blogApp.config(['$routeProvider','$controllerProvider',
    	function($routeProvider,$controllerProvider) {
	        $routeProvider
	        .when('/', {
	        	templateUrl:'modules/pages/articleList/article-list.html',
	            controller: 'ArticleListCtrl',
	            resolve:{
	            	delay : ctrlRegister('ArticleListCtrl',['modules/pages/articleList/ArticleListCtrl.js'])
	            }
	        })
	        .when('/p=:p', {
	        	templateUrl:'modules/pages/articleList/article-list.html',
	            controller: 'ArticleListCtrl',
	            resolve:{
	            	delay : ctrlRegister('ArticleListCtrl',['modules/pages/articleList/ArticleListCtrl.js'])
	            }
	        })
	        .when('/a/:aid', {
	        	templateUrl:'modules/pages/articleDetail/article-detail.html',
	            controller: 'ArticleDetailCtrl',
	            resolve:{
	            	delay : ctrlRegister('ArticleDetailCtrl',['modules/pages/articleDetail/ArticleDetailCtrl.js'])
	            }
	        })
	        .when('/user/:username', {
	        	templateUrl:'templates/user.html',
	            controller: 'userCtrl',
	            resolve:{
	            	delay : ctrlRegister('DataCtrl',['controllers/DataCtrl.js'])
	            }
	        })
	        .when('/tags/:tag', {
	        	templateUrl:'templates/user.html',
	            controller: 'userCtrl',
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