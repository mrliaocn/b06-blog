define(['angular','angular-cookies'],function (angular) {
	var logInfo = angular.module('logInfo',['ngCookies']);

	logInfo.controller('LoginCtrl', function($scope, $cookieStore, $http) {

		$scope.error_info = '';
		$scope.log_form_template = '';
		$scope.cur_user = {};
		$scope.tologin_user = {};
		$scope.new_user = {};
		$scope.all_ariticles = 500;
		
		var user_cookie = $cookieStore.get('user_cookie');

		if (typeof(user_cookie) =='object'  && 'name' in user_cookie) {
			$scope.cur_user = user_cookie;
			$scope.log_status_template = 'modules/login/allready-logged.html';
		}else{
			$scope.log_status_template = 'modules/login/not-logged.html';
		}

		// console.log($scope.cur_user,$scope.error_info,$scope.tologin_user,$scope.new_user,user_cookie);

		$scope.login = function () {
			
			if ($scope.tologin_user.email && $scope.tologin_user.password) {
				var post_data = $scope.tologin_user;
				post_data.datatype = 'login';

				$http({
					method:'POST',
					url:'./serverside/user.php',
					data: post_data
				}).success(function (data, status) {

					console.log(data,status)
					if (status == '200' && typeof(data) =='object' && 'name' in data){

						var expireDate = new Date();
		  				expireDate.setDate(expireDate.getDate() + 1);
						$cookieStore.put("user_cookie" , data, {'expires': expireDate});

						window.location = './';

					}else{
						$scope.error_info = '请重试';
					}

				}).error(function () {
					$scope.error_info = '网络错误';
				});
			}
		}

		$scope.signin = function() {
			console.log($scope.new_user)
			if ($scope.new_user.email && $scope.new_user.username && $scope.new_user.password && $scope.new_user.pwdrepeat) {
				var post_data = $scope.new_user;
				post_data.datatype = 'signin';

				$http({
					method:'POST',
					url:'./serverside/user.php',
					data: post_data
				}).success(function (data, status) {

					console.log(data,status)
					if (status == '200' && typeof(data) =='object' && 'success' in data){

						$scope.log_form_template = 'modules/login/login-form.html';
						$scope.error_info = '注册成功，请登录';
					}else{
						$scope.error_info = '请重试';
					}

				}).error(function () {
					$scope.error_info = '网络错误';
				});
			}
		}

		$scope.logout = function () {

			$cookieStore.remove("user_cookie");
			window.location = './';
		}

		$scope.show_mask = function (str) {
			// 弹出遮罩层(注册、登录)

			// $scope.log_form_template = 'modules/login/' + str + '-form.html';
			if (str == 'login') {
				$scope.log_form_template = 'modules/login/login-form.html';
			}else if (str == 'signin') {
				$scope.log_form_template = 'modules/login/signin-form.html';
			}
		}

		$scope.hide_mask = function($event) {
			// 关闭遮罩层(登录、注册)
			if ($event.target.className == 'log-mask ng-scope') {
				$scope.log_form_template = '';

				// 清除已填写注册表单
				// $scope.new_user = {};
			}

		};

		$scope.check_pwd = function() {
			// 判断密码重复是否正确
			if (!$scope.new_user.pwdrepeat||$scope.new_user.password == $scope.new_user.pwdrepeat) {
				$scope.new_user.isInvalid = false;
			}else{
				$scope.new_user.isInvalid = true;
			}
			console.log($scope.new_user.password,$scope.new_user.pwdrepeat,$scope.new_user.isInvalid)
		}


		
		// $scope.all_users = header_info.all_users;
		// $scope.all_tags = header_info.all_tags;
	});
	return logInfo;
});