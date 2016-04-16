/*  ArticleDetailCtrl.js Created by mrliao on 2016-4-15  */



define(['angular','Hyperdown','highlight','jquery'], function (angular) {

    return function ArticleDetailCtrl($scope, $routeParams, $sce){
    	var aid = parseInt($routeParams.aid);

    	var article ={
    		aid : 'Oxd450oXd239N',
    		title : '第一篇测试文章',
    		author : 'mrliao',
    		timestr : '2016-4-16',
    		tags : ['标签1','标签二','333'],
    		content : "经过一番比较，最后还是决定博客用[Hexo](https://hexo.io/)来建，好看又好用。由于Hexo发表博客使用的是`Markdown`语法，所以，为了熟悉一下`Markdown`。\n"+
                        "```python\n"+
                        "print 'hello world!'\n"+
                        "# what's the matter?\n"+
                        "```\n\n"+
                        '```\n'+
                        '<link rel="stylesheet" href="static/css/hightlight/foundation.css">\n'+
                        '<div class="ct-box">\n'+
                        '   <h3 ng-bind ="cont.title"></h3>\n'+
                        '```'
    	};

        if (!article.aid) {
            window.location = '#/';
        };
        var hyperdown = new Hyperdown();
        var ht = hyperdown.makeHtml(article.content);
      
    	$scope.cont = article;
        $('#contHtml').html(ht);
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
        
    }
});