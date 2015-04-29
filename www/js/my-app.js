'use strict';

document.addEventListener("deviceready", onDeviceReady, false);

var admobid = {};

function onDeviceReady() {
    console.log('onDeviceReady');
    // Google Analytics
    window.analytics.debugMode();
    window.analytics.startTrackerWithId('UA-44246405-6');
    window.analytics.trackView('index');
    // AdMob
    if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        admobid = {
            banner: 'ca-app-pub-9733787518596382/1681312032',
            interstitial: 'ca-app-pub-9733787518596382/2308277237'
        };
    }
    if (AdMob) AdMob.createBanner ({
        adId: admobid.banner,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        autoShow: true
    });
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
