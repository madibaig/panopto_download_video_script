// ==UserScript==
// @name         Panopto Download Video Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a download button on the panopto video viewer. Currently you have to right click save the button to download. Not sure how to change that so you can use one left click.
// @author       Madi Baig
// @match        https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let video_link = document.querySelector('meta[property="og:video"]').content;
    let a = document.createElement('a');
    a.innerText = "Download (right click save as)";
    a.href = video_link;
    a.download = document.title.replace(/ /g, "_") + ".mp4";
    document.getElementsByClassName("header-right")[0].insertAdjacentElement("afterbegin", a);
})();