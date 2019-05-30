// ==UserScript==
// @name         Vlive Date 9000
// @namespace    https://github.com/PitchRE/Tampermonkey-Scripts
// @version      0.1
// @description  Changes date under video from "x time ago" to actuall date.
// @author       PitchRE
// @match        https://www.vlive.tv/video/*
// @grant        none

// @require http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

var hideChat = 0; // 1 on anything else off.

var delay = 600;
// default value = 600. Change to higher if script doesn't work for you properly (due to slow third party api response)

(function() {
  'use strict';

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
  }, delay);
})();
