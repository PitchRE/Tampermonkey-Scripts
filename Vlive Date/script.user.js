// ==UserScript==
// @name         New Userscript
// @namespace    https://github.com/PitchRE/Tampermonkey-Scripts
// @version      0.1
// @description  Vlive Date
// @author       PitchRE
// @match        https://www.vlive.tv/video/*
// @grant        none

// @require http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
  'use strict';

  var hideChat = 0; // 1 on anything else off.

  if (hideChat == 1) {
    $('.comment_area').css('display', 'none'); // delete chat.
    $('.vapp_bridge').css('display', 'none'); // delete App advertisement.
  }

  var x = document.head.querySelector('[name~=description][content]').content; // get meta with date.

  var myDate = x.substr(0, x.indexOf(' - ')); /// extract date

  var myDate = '<b>' + myDate + '</b>'; // style data var.

  setTimeout(function() {
    $('.date') // exchange text of first class "date" with our prepared data var.
      .first()
      .html(myDate);
  }, 600);
})();
