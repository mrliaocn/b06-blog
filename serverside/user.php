<?php
	if ( 'POST' != $_SERVER['REQUEST_METHOD'] ) {
		header('Allow: POST');
		header('HTTP/1.1 405 Method Not Allowed');
		header('Content-Type: text/plain');
		header('location: ../');
		exit;
	}

	$input = file_get_contents("php://input");

	$user = json_decode($input, true);
	if (array_key_exists('datatype',$user)) {
		if ($user['datatype'] == 'login') {

			if ($user['email'] == 'hi@mrliao.cn' && $user['password'] == '123456789') {
				echo '{"name":"mrliao","post":15}';

			}else{
				echo '{"error":1}';
				return;
			}
		}elseif ($user['datatype'] == 'signin') {
			if ($user['email'] && $user['username'] && $user['password'] == $user['pwdrepeat']) {
				echo '{"success":"success"}';
			}else{
				echo '{"error":2}';
				return;
			}
		}
	}else{
		echo '{"error":0}';
		return;
	}
?>