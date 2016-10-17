/*  ArticleListCtrl.js Created by mrliao on 2016-4-15  */

define(['angular'], function (angular) {

    return function ArticleListCtrl($scope, $routeParams){
    	var p = parseInt($routeParams.p);

    	var pre = 6;	//每页文章数
    	var btn_num = 5;		//分页器最多显示多少页的按钮,必须为奇数(两边对称)
    	var articles =[
	    	{
	    		aid : 'Oxd450oXd239N',
	    		title : 'angularjs学习笔记——使用requirejs动态注入控制器',
	    		author : 'mrliao',
	    		timestr : '2016-4-16',
	    		tags : ['angularjs','requirejs'],
	    		summary : '最近一段时间在学习angularjs，由于觉得直接使用它需要加载很多的js文件，因此想使用requirejs来实现异步加载，并动态注入控制器。简单搜索了下发现好多教程写的都很复杂，所以打算写一下我的方法，算是学习笔记了...'
	    	},
	    	{
	    		aid : 'Oxd450oXd23gd',
	    		title : '第二篇测试文章这个标题非常长1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
	    		author : 'mrliao',
	    		timestr : '2016-4-16',
	    		tags : ['tag1','tag4'],
	    		summary : '22222222222222111111222222222222222222222333333333333333333333'
	    	},
	    	{
	    		aid : 'Oxd450oXd23wX',
	    		title : '第三篇测试文章',
	    		author : 'mrliao2',
	    		timestr : '2016-4-16',
	    		tags : ['tag2','tag3'],
	    		summary : '3333333333333333111111111222222222222222222222333333333333333333333'
	    	},
	    	{
	    		aid : 'Oxd450oXd239N',
	    		title : '第4篇测试文章',
	    		author : 'mrliao',
	    		timestr : '2016-4-16',
	    		tags : ['标签1','标签二','333'],
	    		summary : 'AngularJS是为了克服HTML在构建应用上的不足而设计的。HTML是一门很好的为静态文本展示设计的声明式语言，但要构建WEB应用的话它就显得乏力了。所以我做了一些工作（你也可以觉得是小花招）来让浏览器做我想要的事。通常，我们是通过以下技术来解决静态网页技术在构建动态应用上的不足：类库 - 类库是一些函数的集合，它能帮助页技术在构建动态应用上的不足：类库 - 类库是一些函数...'
	    	},
	    	{
	    		aid : 'Oxd450oXd23gd',
	    		title : '第5篇测试文章',
	    		author : 'mrliao',
	    		timestr : '2016-4-16',
	    		tags : ['tag1','tag4'],
	    		summary : '22222222222222111111222222222222222222222333333333333333333333'
	    	},
	    	{
	    		aid : 'Oxd450oXd23wX',
	    		title : '第6篇测试文章',
	    		author : 'mrliao2',
	    		timestr : '2016-4-16',
	    		tags : ['tag2','tag3'],
	    		summary : '3333333333333333111111111222222222222222222222333333333333333333333'
	    	},
	    	{
	    		aid : 'Oxd450oXd239N',
	    		title : '第7篇测试文章',
	    		author : 'mrliao',
	    		timestr : '2016-4-16',
	    		tags : ['标签1','标签二','333'],
	    		summary : 'AngularJS是为了克服HTML在构建应用上的不足而设计的。HTML是一门很好的为静态文本展示设计的声明式语言，但要构建WEB应用的话它就显得乏力了。所以我做了一些工作（你也可以觉得是小花招）来让浏览器做我想要的事。通常，我们是通过以下技术来解决静态网页技术在构建动态应用上的不足：类库 - 类库是一些函数的集合，它能帮助页技术在构建动态应用上的不足：类库 - 类库是一些函数...'
	    	},
	    	{
	    		aid : 'Oxd450oXd23gd',
	    		title : '第8篇测试文章',
	    		author : 'mrliao',
	    		timestr : '2016-4-16',
	    		tags : ['tag1','tag4'],
	    		summary : '22222222222222111111222222222222222222222333333333333333333333'
	    	},
	    	{
	    		aid : 'Oxd450oXd23wX',
	    		title : '第9篇测试文章',
	    		author : 'mrliao2',
	    		timestr : '2016-4-16',
	    		tags : ['tag2','tag3'],
	    		summary : '3333333333333333111111111222222222222222222222333333333333333333333'
	    	},
	    	{
	    		aid : 'Oxd450oXd239N',
	    		title : '第10篇测试文章',
	    		author : 'mrliao',
	    		timestr : '2016-4-16',
	    		tags : ['标签1','标签二','333'],
	    		summary : 'AngularJS是为了克服HTML在构建应用上的不足而设计的。HTML是一门很好的为静态文本展示设计的声明式语言，但要构建WEB应用的话它就显得乏力了。所以我做了一些工作（你也可以觉得是小花招）来让浏览器做我想要的事。通常，我们是通过以下技术来解决静态网页技术在构建动态应用上的不足：类库 - 类库是一些函数的集合，它能帮助页技术在构建动态应用上的不足：类库 - 类库是一些函数...'
	    	},
	    	{
	    		aid : 'Oxd450oXd23gd',
	    		title : '第11篇测试文章',
	    		author : 'mrliao',
	    		timestr : '2016-4-16',
	    		tags : ['tag1','tag4'],
	    		summary : '22222222222222111111222222222222222222222333333333333333333333'
	    	},
	    	{
	    		aid : 'Oxd450oXd23wX',
	    		title : '第12篇测试文章',
	    		author : 'mrliao2',
	    		timestr : '2016-4-16',
	    		tags : ['tag2','tag3'],
	    		summary : '3333333333333333111111111222222222222222222222333333333333333333333'
	    	}
    	];

    	var all_page = articles.length ? Math.ceil(articles.length / pre) : 1;

    	// 确保cur_page的值,不得大于all_page,且不得小于1;
    	($scope.cur_page = (isNaN(p) || p<1) ? 1 : p) > all_page ? $scope.cur_page = all_page :1;
    	// console.log($scope.cur_page);

    	$scope.page_num = [];

    	// 创造一个长度为数组btn_num的数组，并保证cur_page正好位于数组正中间;
    	if( $scope.cur_page <= Math.ceil(btn_num / 2) ){
    		for ( var i = 1; i <= all_page; i++ ) {

    			if( i <= btn_num ) { $scope.page_num.push(i); }

    			else break;
    		}
    	}else if ( $scope.cur_page > all_page - Math.ceil( btn_num / 2 )) {
    		for (var i = all_page; i >= 1; i--) {

    			if ( i + btn_num > all_page) { $scope.page_num.unshift(i);}
    			else break;
    		}
    	}else{
    		for (var i = 1; i <= all_page; i++) {
	    		if(Math.abs($scope.cur_page - i) < Math.ceil( btn_num / 2 )){

	    			$scope.page_num.push(i);
	    		}
	    	}
    	}
    	
    	$scope.all_page = all_page;
    	$scope.conts = articles.slice(($scope.cur_page-1)*pre, $scope.cur_page*pre);
    }
});