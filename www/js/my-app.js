'use strict';

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log('onDeviceReady');
    window.analytics.debugMode();
    window.analytics.startTrackerWithId('UA-44246405-6');
    window.analytics.trackView('index');
}

// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true
});

// Export selectors engine
var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

$$(document).on('pageInit', function (p) {
    var pageinfo = p.detail.page;
    console.log(pageinfo.name);
});
