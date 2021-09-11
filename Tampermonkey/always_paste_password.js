// ==UserScript==
// @name         Always Paste
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  onpaste="return false;" doesn't exist in a perfect world...
// @author       jkclark
// @match        *://*/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.$;

    var $password = $( '[type=password]' );
    if ($password.length && $password.attr('onpaste')) {
        $(":password").removeAttr('onpaste');
    }
})();