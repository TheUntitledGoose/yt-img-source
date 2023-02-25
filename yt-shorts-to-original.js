// ==UserScript==
// @name         test scrip
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  scrip
// @author       You
// @match        https://www.youtube.com/shorts/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

var $ = window.jQuery;

setTimeout(function() {
    var shareButn = $("div#share-button")[0]
    // var toYTbutn = $(shareButn).clone().insertBefore("#like-button")
    var button = $(shareButn).clone().insertBefore("#like-button")
    $($("div#share-button")[1].firstElementChild.firstElementChild.firstElementChild).clone().appendTo($("div#share-button")[0].firstElementChild.firstElementChild)
    
    var innerCore = $("div#share-button")[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild
    
    // $(innerCore).attr('title', 'Thumbnails');
    // $(innerCore).attr('aria-label', 'Thumbnails');
    // $(innerCore).find('svg').remove();
    $(innerCore).append('<svg xmlns="http://www.w3.org/2000/svg" width="50" height="25" viewBox="0 0 24 24"><path d="M12 0c-4.992 0-10 1.242-10 3.144 0 .406 3.556 18.488 3.633 18.887 1.135 1.313 3.735 1.969 6.334 1.969 2.601 0 5.199-.656 6.335-1.969.081-.404 3.698-18.468 3.698-18.882 0-2.473-7.338-3.149-10-3.149zm0 1.86c4.211 0 7.625.746 7.625 1.667 0 .92-3.414 1.667-7.625 1.667s-7.625-.746-7.625-1.667 3.414-1.667 7.625-1.667zm4.469 19.139c-.777.532-2.418 1.001-4.502 1.001-2.081 0-3.721-.467-4.498-.998l-.004-.021c-1.552-7.913-2.414-12.369-2.894-14.882 3.55 1.456 11.304 1.455 14.849-.002-.868 4.471-2.434 12.322-2.951 14.902zm-7.872-7.418l-.492-.323 1.824-.008.78 1.667-.506-.32c-.723 1.146-1.027 1.764-.796 2.481-1.823-1.798-1.622-2.182-.81-3.497zm.622-1.304l.781-1.418c.195-.38 1.251-.075 1.688.899l-.797 1.445-1.672-.926zm2.673 5.175h-1.729c-.427.013-.672-1.061-.031-1.915h1.761v1.915zm.058-4.886l.524-.289c-.652-1.188-1.044-1.753-1.781-1.898 2.451-.729 2.593-.41 3.445.981l.521-.275-.79 1.654-1.919-.173zm3.059.005l.911 1.474c.236.355-.546 1.129-1.607 1.035l-.928-1.501 1.624-1.008zm-1.549 4.846l-.004.583-1.028-1.616 1.054-1.47-.006.6c1.354.011 2.037-.055 2.524-.63-.565 2.5-.942 2.533-2.54 2.533z"/></svg>');
    // $(thumbButton).find('svg').attr('id', 'ytp-id-16');
    // $(thumbButton).find('svg').attr('class', 'ytp-subtitles-button-icon');
    $(innerCore).find('svg').attr('transform', 'translate(0,8)');
    $(innerCore).find('svg').attr('fill', '#fff');

    // console.log("click")
    $($("div#share-button")[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild).click(function() {
        var id = window.location.href.toString().match(/\w+$/)
        window.open("https://www.youtube.com/watch?v=" + id)
    })

}, 1500)
