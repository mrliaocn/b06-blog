'use strict';

(function (win) {
    //配置baseUrl
    // var baseUrl = '';

    /*
     * 文件依赖
     */
    var config = {
        baseUrl: './',          	//依赖相对路径
        paths: {                    //如果某个前缀的依赖不是按照baseUrl拼接这么简单，就需要在这里指出
            'jquery': 'libs/jquery.min',
            'angular': 'libs/angular.min',
            'angular-route': 'libs/angular-route.min',  // 路由模块
            'angular-cookies':'libs/angular-cookies.min',    // Cookie模块
            'Hyperdown':'libs/Hyperdown',               // MarkDown解析模块
            'highlight':'libs/highlight.pack',          // 代码高亮模块
            'logInfo':'modules/login/logInfo',          // 登录注册验证模块

            'router' : 'static/js/router',              // 路由设置
        },
        // 引入没有使用requirejs模块写法的类库。
        // 即使写法符合requirejs，也没有关系。保险起见
        shim: {
            'jquery': {
                exports: '$'
            },
            'angular': {
                exports: 'angular'
            },
            'angular-route': {
                deps: ['angular'],   
                exports: 'ngRoute'
            },
            'angular-cookies': {
                deps: ['angular'],   
                exports: 'ngCookies'
            },
            'Hyperdown':{
                exports: 'Hyperdown'
            },
            'highlight':{
                exports: 'highlight'
            }
        }
    };

    require.config(config);

    require(['angular','router','logInfo'], function(angular){

        angular.bootstrap(document.getElementById("header"), ['logInfo']);
        angular.bootstrap(document.getElementById("container"), ['appCont']);
    });

})(window);