
function labdesign() {

    height1 = $(window).height();
    width1 = $(window).width();
    rightw = $('.main-right').width() + 20;

    topleft1 = $('.Dashboard').height() + 20;
    headerH = $('.dprthdr1').outerHeight();

    $('.container').css({ height: height1 + "px", width: width1 + "px" });

    $('.main-left').css({ width: ($('.container').width() - rightw) + "px", height: ($('.container').height()) + "px" });

    $('.main-right').css({ height: ($('.container').height()) + "px" });

    $('.departments').css({ width: ($('.main-left').width()) + "px", height: ($('.main-left').height() - topleft1) + "px" });


    $('.swiper-container').css({ width: ($('.departments').width()) + "px", height: ($('.departments').height()) + "px" });

    $('.swiper-wrapper').css({ height: ($('.swiper-container').height()) + "px" });

    var swiperslideh = ((parseInt($(".swiper-wrapper").height()) * 50) / 100);
    // $('.swiper-slide').css({ height: ($('.swiper-wrapper').height() - swiperslideh) + "px" });

    // alert(swiperslideh);

    //dprt1h dprtcnet1 
    $('.dprt1').css({ height: (swiperslideh - 18) + "px" });

    $('.dprtcnet1').css({ height: ($('.dprt1').height() - headerH) + "px" });
    liH = $('.dprtcnet1 ul li').outerHeight() - 10;
    circlew = liH + 20;
    circlefont = (liH * 50) / 100 + 10;
    circlefont2 = (liH * 50) / 100 - 10;
    $('.dprtcnet1 ul li > div').css({ height: (liH) + "px" });
    $('.dprtcnet1 ul li > div').css('min-width', circlew + "px");
    $('.dprtcnet1 ul li > div').css('line-height', liH + "px");
    $('.dprtcnet1 ul li > div').css('font-size', circlefont + "px");

    $('.dprtcnet1 ul li h2').css('font-size', circlefont2 + "px");
    $('.dprtcnet1 ul li h2').css('line-height', liH + "px");


    rightliH = $('.rightdprtcnet1 ul li').outerHeight() - 10;



    Rcirclew = rightliH + 20;
    Rcirclefont = (rightliH * 50) / 100 + 5;
    $('.rightdprtcnet1 ul li > div').css({ height: (rightliH) + "px" });
    $('.rightdprtcnet1 ul li > div').css('width', Rcirclew + "px");
    $('.rightdprtcnet1 ul li > div').css('line-height', rightliH + "px");
    $('.rightdprtcnet1 ul li > div').css('top', "5px");
    $('.rightdprtcnet1 ul li > div').css('font-size', Rcirclefont + "px");
    //$('.rightdprtcnet1 ul li h2').css('line-height', rightliH + "px");


    // alert(rightliH);  


    if ($(window).width() == 1280) {

        if ($(window).height() == 1024) {
            $("body").addClass("res_1280x1024");
        }
        else if ($(window).height() < 1014 && $(window).height() > 900) {
            $("body").addClass("res_1280x_1024");

            if ($(window).height() == 960) {

                $("body").removeClass("res_1280x_1024");
                $("body").addClass("res_1280x960");
            }
        }
        else if ($(window).height() < 950 && $(window).height() > 800) {
            $("body").addClass("res_1280x_960");
        }


        else if ($(window).height() == 768) {
            $("body").addClass("res_1280x768");
        }

        else if ($(window).height() < 758 && $(window).height() > 580) {
            $("body").addClass("res_1280x_768");
        }
    }

    else if ($(window).width() == 1024) {

        if ($(window).height() == 768) {
            $("body").addClass("res_1280x768");
        }

        else if ($(window).height() < 748 && $(window).height() > 580) {
            $("body").addClass("res_1280x_768");
        }
    }
    else if ($(window).width() == 1366) {

        if ($(window).height() == 768) {
            $("body").addClass("res_1280x768");
        }

        else if ($(window).height() < 748 && $(window).height() > 580) {
            $("body").addClass("res_1280x_768");
        }
    }

    else if ($(window).width() == 1360) {

        if ($(window).height() == 768) {
            $("body").addClass("res_1280x768");
        }

        else if ($(window).height() < 748 && $(window).height() > 580) {
            $("body").addClass("res_1280x_768");
        }
    }



    else if ($(window).width() == 1400) {
        if ($(window).height() == 1050) {
            $("body").removeClass("res_1400x_1050");
            $("body").addClass("res_1400");
        }
        else if ($(window).height() < 1030 && $(window).height() > 900) {
            $("body").removeClass("res_1400");
            $("body").addClass("res_1400x_1050");
        }
    }

    else if ($(window).width() == 1600) {
        if ($(window).height() == 900) {
            $("body").removeClass("res_1600x_900");
            $("body").addClass("res_1600");
        }
        else if ($(window).height() < 890 && $(window).height() > 760) {
            $("body").removeClass("res_1600");
            $("body").addClass("res_1600x_900");
        }

    }

    else if ($(window).width() == 1680) {
        if ($(window).height() == 1050) {
            $("body").removeClass("res_1650x_1050");
            $("body").addClass("res_1650");
        }
        else if ($(window).height() < 1040 && $(window).height() > 960) {
            $("body").removeClass("res_1650");
            $("body").addClass("res_1650x_1050");
        }
    }

    else if ($(window).width() == 1920) {

        if ($(window).height() == 1080) {
            $("body").removeClass("res_1900x_1080");
            $("body").addClass("res_1900");
        }
        else if ($(window).height() < 1060 && $(window).height() > 981) {
            $("body").removeClass("res_1900");
            $("body").addClass("res_1900x_1080");
        }
    }



}


$(document).ready(function () {

    setTimeout(function () {

        labdesign();

    }, 100);

    labdesign();


    $(window).resize(function () { labdesign(); });

});

$(window).resize(function () {
    setTimeout(function () {

        labdesign();

    }, 100);

});



var NAV = {};
NAV.RWD = {
    body: document.getElementsByTagName('body')[0],
    head: document.getElementsByTagName('head')[0],
    deviceWidth: null,
    roundedWidth: null,
    init: function () {

        NAV.RWD.deviceWidth = document.documentElement.clientWidth;
        NAV.RWD.roundedWidth = NAV.RWD.roundWidth(NAV.RWD.deviceWidth);
        NAV.RWD.setupClient(NAV.RWD.deviceWidth);
        window.onresize = function (a) {
            NAV.RWD.deviceWidth = document.documentElement.clientWidth;
            NAV.RWD.roundedWidth = NAV.RWD.roundWidth(NAV.RWD.deviceWidth);
            NAV.RWD.setupClient(NAV.RWD.deviceWidth)
        }

    },
    deviceBucketer: function (a) {
        var b = "large";
        if (a < 831) {
            if (a < 661) {
                b = "small"
            } else {
                b = "medium"
            }
        } else {
            b = "large"
        }
        return b
    },
    roundWidth: function (a) {
        var b = 0;
        a % 100 > 50 ? b = 50 : 0;
        return Math.min(Math.floor(a / 100) * 100) + b
    },
    capitalize: function (a) {
        return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()
    },
    setupClient: function (a) {
        NAV.RWD.body.className = NAV.RWD.body.className.replace(/\bres_.*?\b/g, '');
        NAV.RWD.body.className += " res_" + NAV.RWD.roundedWidth;
    }
};


NAV.RWD.init();




var _browser = (navigator.userAgent).toUpperCase();
if (_browser.indexOf("CHROME") != -1) {
    _browser = "chrome";
}
else if (_browser.indexOf("MSIE 10.0") != -1) {
    alert(navigator.appVersion);

    var ver = parseInt(navigator.appVersion);

    _browser = "ie9";
}
else if (_browser.indexOf("FIREFOX") != -1) {
    _browser = "firefox";
}
else if (_browser.indexOf("SAFARI") != -1) {
    _browser = "safari";
}
//alert(_browser);
$("body").addClass(_browser);