/*
* @Author: saigsf<qq: 2270029397 email: sai_gsf@163.com>
* @Date:   2017-12-12
* @Last Modified by:   M S I
* @Last Modified time: 2017-12-26
*/
require.config({
    paths: {
        jquery: 'https://cdn.bootcss.com/jquery/3.2.1/jquery',
        jqueryUI: 'https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui',
    }
});

require([
    'jquery',
    'BombBox'
], function($, b) {
    'use strict';
    var win = new b.BombBox();
    $('#alert').click(function(){
        win.alert({
            title: '提示',
            content: 'welcome!',
            width: 300,
            height: 150,
            isDraggable: true,
            dragHandle: '.window_header'
        }).on('alert',function(){
            alert('this is alert ok')
        })
    });
    $('#confirm').click(function(){
        win.confirm({
            title: '提示',
            content: 'welcome!',
            width: 300,
            height: 150,
            isDraggable: true,
            dragHandle: '.window_header'
        }).on('cancel',function(){
            alert('cancel')
        }).on('confirm', function () {
            alert('confirm')
        })
    });
    $('#prompt').click(function(){
        win.prompt({
            title: '提示',
            content: '请输入你想要输入的内容：',
            width: 300,
            height: 150,
            isDraggable: true,
            dragHandle: '.window_header',
            text4PromptBtn: '输入',
            isPromptPassword: false,
            defaultValue4PromptInput: '呵呵'
        }).on('cancel',function(){
            alert('cancel')
        }).on('prompt', function (inputValue) {
            alert('您输入的内容是：' + inputValue);
        })
    });
    $('#common').click(function(){
        win.common({
            content: '请输入你想要输入',
            width: 300,
            height: 150,
        })
    });

});

