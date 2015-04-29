'use strict';

document.addEventListener("deviceready", onDeviceReady, false);

var admobid = {};

function onDeviceReady() {
    console.log('onDeviceReady');
    // Google Analytics
    window.analytics.debugMode();
    window.analytics.startTrackerWithId('UA-44246405-6');
    if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        // AdMob
        admobid = {
            banner: 'ca-app-pub-9733787518596382/1681312032',
            interstitial: 'ca-app-pub-9733787518596382/2308277237'
        };
        if (AdMob) AdMob.createBanner ({
            adId: admobid.banner,
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow: true
        });
        // Google Analytics
        var userid = document.location.pathname.split('/');
        window.analytics.setUserId(userid[7]);
    }
    window.analytics.trackView('index');
    document.addEventListener('onAdLeaveApp', function(data){
        window.analytics.trackEvent('AdMob', 'Ad Clicked', 'banner', 4);
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
