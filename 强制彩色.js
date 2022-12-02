// ==UserScript==
// @name         强制彩色
// @namespace    https://3never.life/
// @version      1.0.7
// @description  强制所有网站使用彩色
// @author       3never
// @match        *://*/*
// @exclude      *://*.youtube.com/*
// @exclude      *://*.reddit.com/*
// @exclude      *://twitter.com/*
// @exclude      *://*.google.com/*
// @icon         https://i2.100024.xyz/2022/11/30/ukf7tm.webp
// @grant        none
// @license      MIT
// ==/UserScript==
 
(function() {
    'use strict';
 
    // Your code here...
    let divCount=0
    function 修改节点filter(node){
        let style = window.getComputedStyle(node,null).filter
        if(style=='grayscale(1)'||style=='grayscale(100%)'){
            node.style.setProperty('filter', 'grayscale(0)', 'important');
        }
    }
    function changeFilterByTag(tag){
        var nodes = document.getElementsByTagName(tag);
        for (var i = 0; i < nodes.length; i++) {
            修改节点filter(nodes[i])
        }
    }
    function 黑白清零(){
        let curCount = document.getElementsByTagName("div").length;
        if(divCount != curCount){
            修改节点filter(document.documentElement)
            修改节点filter(document.body)
            changeFilterByTag("div")
            changeFilterByTag("form")
            changeFilterByTag("img")
            divCount = curCount
        }
    }
    // B站
    var patt1=new RegExp("bilibili.com");
    if(patt1.test(window.location.href)){
        document.documentElement.style.setProperty('filter', 'grayscale(0)', 'important');
        return
    }
    黑白清零();
    setInterval(function(){ 黑白清零(); }, 3000);
})();
