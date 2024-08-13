var maingriddiv, maingriddivW, height1, panelheaderH1, panelheaderHF1, hf;
function setdesign() {
    var HH = ''; var FH = ''; HH = $("#topnav").outerHeight();
    FH = $("#bottomnav").outerHeight();
    HFH = HH + FH; height1 = $(window).height() - 100;

    $('.nav-menu-drop').css("min-height", "500px");
    $('.nav-menu-drop').css("max-height", height1);

    var height2 = '';
    height2 = $(window).height() - HFH;
    $('.contentbody').css("height", height2);
    $('.main-form-div').css({ height: ($(".contentbody").height() - 40) + "px", width: $(".contentbody").width() + "px" });
    $('.leftmenu,.Msgleftmenu').css({ height: ($(".contentbody").height() - 10) + "px" });
    $('.right-main-div').css({ height: ($(".contentbody").height() - 10) + "px", width: ($(".contentbody").width() - $('.leftmenu,.Msgleftmenu').width() - 10) + "px" });
    $('.main-form-div2').css({ height: ($(".right-main-div").height() - 35) + "px", width: ($(".right-main-div").width()) + "px" });
    $('.SuGridH1').css({ height: ($(".right-main-div").height() - 37) + "px", width: ($(".right-main-div").width() - 16) + "px" });
    $('.IPServicesleft').css({ height: ($(".leftmenu").height() - $('.lefttop').height()) + "px" }); 
    $('.nav-menu-drop table td').css({ height: $(".nav-menu-drop").height() + "px" });
    $('.submodule-list,.document-list').css({ height: ($(".nav-menu-drop").height() - 3) + "px" });
    $('.trowcolourId').css({ height: $(".ipcolor").height() + "px", width: $(".ipcolor").width() + "px" });
    var tabhead = $(".tab-head").height();
    $('.tab-content,.tab-pane').css({ height: ($(".contentbody").height() - tabhead) + "px" });
    $('.mainscrol1').css({ height: $(".main-form-div").height() + "px", width: ($(".main-form-div").width() - 2) + "px" });
    $('.mainscrol2').css({ height: ($(".leftmenu").height() - 120) + "px", width: ($(".leftmenu").width()) + "px" });
    $('.mainscrol4').css({ height: ($(".Msgleftmenu").height()) + "px", width: ($(".Msgleftmenu").width()) + "px" });
    $('.mainscrol3').css({ height: ($(".main-form-div2,.SuGridH1").height() - 18) + "px", width: ($(".main-form-div2,.SuGridH1").width() - 2) + "px" });
    $('.main-grid-div').css({ height: ($(".contentbody").height() - 48) + "px" });
    maingriddiv = parseInt($(".main-grid-div").height()) - 72; $('.grid-panel-body').css("height", maingriddiv);
    maingriddivW = parseInt($(".main-grid-div").width()) - 10; $('.grid-panel-body').css("width", maingriddivW);
    panelheaderH1 = $(".panelheaderH").height() + 54;
    hf = parseInt($(".main-form-div").height()) - panelheaderH1; $('.MaterialRequisition').css("height", hf);
    panelheaderHF1 = $(".panelheaderHF").height() + 94;
    $('.GridHF').css({ height: ($(".main-form-div").height() - panelheaderHF1) + "px" });
    $('.SuGridH').css({ height: ($(".contentbody").height() - 48) + "px" });
    grdsearch1 = $(".grdsearch").height() + 38;
    $('.gridheght').css({ height: ($(".SuGridH").height() - grdsearch1) + "px" });
    GFgrdsearch = $(".grdsearch").height() + 11;
    $('.GFgridheght').css({ height: ($(".SuGridH,.SuGridH1").height() - GFgrdsearch) + "px" });
    $('.GFgriddiv').css({ height: ($(".GFgridheght").height() - 35) + "px" });
    fgrdsearch = $(".grdsearch").height() + 5;
    $('.Fgridheght').css({ height: ($(".SuGridH").height() - fgrdsearch) + "px" });
    tgrdsearch = $(".grdsearch").height() + 85;
    $('.Tgridheght').css({ height: ($(".SuGridH").height() - tgrdsearch) + "px" });
    $('.mgridheght').css({ height: ($(".SuGridH1").height() - grdsearch1) + "px" });
    grdsearch2 = $(".grdsearch").height() + 45;
    $('.Apermi').css({ height: ($(".SuGridH1").height() - grdsearch2) + "px" });
    $('#modulediv').css({ height: ($(".contentbody").height()) + "px", width: $(".contentbody").width() + "px" });
    $('.modscroll').css({ height: $("#modulediv").height() + "px", width: ($("#modulediv").width() - 2) + "px" });
    $('.row').css({ height: ($(".main-form-div,.main-form-div2").height() - 0) + "px" });
    row1h = $(".row-1").height() + 40;
    $('.row-2').css({ height: ($(".main-form-div,.main-form-div2").height() - row1h) + "px" });
    row2h = $(".row-12").height() + 10;
    rowheight = row1h + row2h;
    $('.row-22').css({ height: ($(".main-form-div,.main-form-div2").height() - rowheight) + "px" });
    trowh3 = rowheight - 35;
    $('.row-23').css({ height: ($(".main-form-div,.main-form-div2").height() - trowh3) + "px" });
    trowh4 = rowheight - 70;
    $('.row-24').css({ height: ($(".main-form-div,.main-form-div2").height() - trowh4) + "px" });
    trow1h = $(".row-1").height() + 15;
    trow2h = $(".row-1").height() + 100;
    $('.trow-2,.trow-3').css({ height: ($(".main-form-div,.main-form-div2").height() - trow1h) + "px" });
    $('.fancyPOS .ajax__tab_body').css({ height: ($(".trow-2,.trow-3").height() - 40) + "px" });
    $('.fancy .ajax__tab_body').css({ height: ($(".main-form-div").height() - 40) + "px" });
    $('.tabcontH').css({ height: ($(".ajax__tab_body").height() - 40) + "px" });
    drow1 = $(".drowlt").height() + 80;
    $('.drowml').css({ height: ($(".row").height() - drow1) + "px" });
    drow2 = $(".drowrt").height() + 150;
    drowr2 = $(".drowrt").height() + 20;
    $('.drowmr').css({ height: ($(".row").height() - drow2) + "px" });
    $('.drowmr2').css({ height: ($(".row").height() - drowr2) + "px" });
    $('.Rgridheght1').css({ height: ($(".row-22").height() - 45) + "px" });
    $('.Rgridheght').css({ height: ($(".row-2,.row-22,.trow-2,trow-3").height() - 37) + "px" });
    row3h = $(".row-3").height() + 5;
    $('.trBillDetailsdiv').css({ height: ($(".main-form-div").height() - row3h) + "px" });
    $('.RVBillsDetails').css({ height: ($(".trBillDetailsdiv").height() - 50) + "px" });
    $('.trservicesdiv').css({ height: ($(".trBillDetailsdiv").height() * 50) / 100 + "px" });
    $('.trservicesdiv2').css({ height: ($(".trBillDetailsdiv").height() * 40) / 100 + "px" });
    $('.trservicesdiv1').css({ height: ($(".trBillDetailsdiv").height()) + "px" });
    $('.trservicesH').css({ height: ($(".trservicesdiv,.trservicesdiv1,.trservicesdiv2").height() - 50) + "px" });
    $('.trservicesdiv3').css({ height: ($(".trBillDetailsdiv").height() - 100) + "px" });
    $('.trCompdiv').css({ height: ($(".trBillDetailsdiv").height() * 45) / 100 + "px" });
    $('.trCompheight').css({ height: ($(".trCompdiv").height() - 50) + "px" });
    $('.trBillStatusdiv').css({ height: ($(".main-form-div").height() - row3h) + "px" });
    legendh = $(".legend").height();
    $('.ResultDisBillStat').css({ height: ($(".trBillStatusdiv").height() - 125) + "px" });
    $('.contentbodydiv').css({ height: $(".contentbody").height() + "px", width: ($(".contentbody").width()) + "px" }); 
    $('.panel-headingf').css({ width: ($(".main-form-divf").width()) + "px" });
    $('.main-form-divf').css({ height: ($(".contentbodydiv").height() - 40) + "px", width: ($(".contentbodydiv").width() - 20) + "px" });
    srow1h = $(".srow-1").height() + 35;
    srow2h = $(".srow-12").height() + 20;
    srow13h = $(".srow-13").height() + 20;
    srow14h = $(".srow-14").height() + 10;
    srowheight = srow1h + srow2h;
    srowheight1 = srow1h + srow13h;
    srowheight2 = srow1h + srow14h;
    $('.srow-25').css({ height: ($(".main-form-div,.main-form-div2").height() - srowheight2) + "px" });
    $('.srow-24').css({ height: ($(".main-form-div,.main-form-div2").height() - srowheight1) + "px" });
    $('.srow-22').css({ height: ($(".main-form-div,.main-form-div2").height() - srowheight) + "px" });
    strowh3 = srowheight - 40;
    $('.srow-23').css({ height: ($(".main-form-div").height() - strowh3) + "px" });
    $('.usertabdiv').css({ height: ($(".SuGridH").height() - (GFgrdsearch - 5)) + "px" });
    urow1h = $(".urow-1").height() + 56;
    urow1h2 = $(".urow-1").height() + 20;
    $('.urow-2').css({ height: ($(".usertabdiv").height() - urow1h) + "px" });
    $('.urow-2h').css({ height: ($(".usertabdiv").height() - urow1h2) + "px" });
    height4 = $(window).height() - 200; $('.modalbody').css("height", height4);
    grdtxtbtnw = $('.grdtxtbtn').width();
    $('.grdtxtbox').css("padding-right", grdtxtbtnw);
    $('.BillDetailsdiv').css({ height: ($(".main-form-div").height()) + "px" });
    $('.mainlookup').css({ height: ($(window).height() - 40) + "px" });
    rowR1h = $(".row-rv1").height() + 50;
    $('.row-rv2').css({ height: ($(".main-form-div,.main-form-div2").height() - rowR1h) + "px" });
    $('.servicesdivtr').css({ height: ($(".main-form-div").height() * 44) / 100 + "px" });
    $('.servicesdivtr1').css({ height: ($(".main-form-div").height()) + "px" });
    $('.servicesHtr').css({ height: ($(".servicesdivtr,.servicesdivtr1").height() - 47) + "px" });
    $('.Compdivtr').css({ height: ($(".main-form-div").height() * 44) / 100 + "px" });
    $('.Compdivtr1').css({ height: ($(".main-form-div").height() * 56) / 100 + "px" });
    $('.Compheighttr').css({ height: ($(".Compdivtr,.Compdivtr1").height() - 47) + "px" });
    $('.trdelaytext').css({ height: ($(".main-form-div").height() * 11) / 100 + "px" });
    $('.Rv-gridheght').css({ height: ($(".row-rv2").height() - 32) + "px" });
    $('.divsrv').css({ height: ($(".row-2").height() - 120) + "px" });
    $("._opdquick .reff-panelH i.reffmore").hover(function () {
        $('._opdquick .reff-panelH .reff-moreD').addClass('addrefH');
    }, function () {
        $('._opdquick .reff-panelH .reff-moreD').removeClass('addrefH');
    });
    arowh = $(".arow-1").height();
    arowhf = $(".arow-12").height() + 5;
    $('.arow-2').css({ height: ($(".trow-2").height() - (arowh + arowhf)) + "px" });

$("#imgshow").click(function () {$("#imghide").show();$("#lsearchdiv").slideDown(300);$('.Rgridheght').css({ height: ($(".row-2").height() - 110) + "px" });$("#imgshow").hide();});
$("#imghide").click(function () {$("#imghide").hide();$("#lsearchdiv").slideUp(300);$('.Rgridheght').css({ height: ($(".row-2").height() - 40) + "px" });$("#imgshow").show();});
$("#tab1").click(function () {$("#tabbody1").show(); $("#tabbody2,#tabbody3,#tabbody4,#tabbody5,#tabbody6").hide(); $("#tab1").addClass("tabselect");$("#tab2,#tab3,#tab4,#tab5,#tab6").removeClass("tabselect");});
$("#tab2").click(function () {$("#tabbody2").show(); $("#tabbody1,#tabbody3,#tabbody4,#tabbody5,#tabbody6").hide(); $("#tab2").addClass("tabselect");$("#tab1,#tab3,#tab4,#tab5,#tab6").removeClass("tabselect");});
$("#tab3").click(function () {$("#tabbody3").show(); $("#tabbody2,#tabbody1,#tabbody4,#tabbody5,#tabbody6").hide(); $("#tab3").addClass("tabselect");$("#tab2,#tab1,#tab4,#tab5,#tab6").removeClass("tabselect");});
$("#tab4").click(function () {$("#tabbody4").show(); $("#tabbody2,#tabbody3,#tabbody1,#tabbody5,#tabbody6").hide(); $("#tab4").addClass("tabselect");$("#tab2,#tab3,#tab4,#tab1,#tab6").removeClass("tabselect");});
$("#tab5").click(function () {$("#tabbody5").show(); $("#tabbody2,#tabbody3,#tabbody4,#tabbody1,#tabbody6").hide(); $("#tab5").addClass("tabselect");$("#tab2,#tab3,#tab4,#tab1,#tab6").removeClass("tabselect");});
$("#tab6").click(function () {$("#tabbody6").show(); $("#tabbody2,#tabbody3,#tabbody4,#tabbody5,#tabbody1").hide(); $("#tab6").addClass("tabselect");$("#tab2,#tab3,#tab4,#tab5,#tab1").removeClass("tabselect");});

$(".root").click(function () {var _tar1 = $(this).data("tar");$(".user-tab-body").hide();$(".root").removeClass("select");$(this).addClass("select");$("#" + _tar1).show();});
$(".chtab > .root").click(function () {var _tar1 = $(this).data("tar");$(".tabed-body").hide();$(".root").removeClass("select");$(this).addClass("select");$("#" + _tar1).show();});
$(".visit-tabs > ul > .root1").click(function () {      var _tar1 = $(this).data("tar");$(".visit-body").hide();$(".root1").removeClass("select");$(this).addClass("select");$("#" + _tar1).show();});

$(".report-tabs > ul > .root").click(function () {
    var _tar1 = $(this).data("tar");
    $(".report-body").hide();
    $(".root").removeClass("select"); 
$(this).addClass("select"); $("#" + _tar1).show(); });






$(".bookmarkli li").click(function () {


    var _tar1 = $(this).data("tar");
    $(".bookmarkli li").removeClass("select");

    $(this).addClass("select");
    $('.bookmark-list').removeClass('large');
    $('.bookmark-list').removeClass('small');
    $('.bookmark-list').removeClass('list');
    if (_tar1 == "large") {

        $('.bookmark-list').addClass('large');
    }
    else if (_tar1 == "small") {

        $('.bookmark-list').addClass('small');
    }
    else if (_tar1 == "list") {

        $('.bookmark-list').addClass('list');
    }

   
});
//$(".icd-auto-list").css({ width: ($(".main-form-div").width() - 140) + "px" });

}





$(document).ready(function () {

    $("#bookmarkico").click(function (e) {

        e.preventDefault();
        var $this = $(this);
        if ($this.hasClass('stpl-heart')) {

            $this.removeClass('stpl-heart');
            $this.addClass('stpl-heart');

        }
        else if ($this.hasClass('stpl-heart')) {
            $this.removeClass('stpl-heart');
            $this.addClass('stpl-heart');
        }
        $('#bookmarkdiv').toggleClass('bookmarkdiv');
    });

    $("#closebookmark").click(function () {

        $('#bookmarkdiv').removeClass('bookmarkdiv').hide();
    });
    setTimeout(function () {

        setdesign();

    }, 500);
    $(window).resize(function () { setdesign(); });

   

});


$(window).resize(function () {
    setdesign();

});



function getScrollBarWidth() {
    var inner = document.createElement("p");
   
    inner.style.width = "100%";
    inner.style.height = "200px";
  
    var outer = document.createElement('div');
    outer.className = "divscroll";
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "100px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;
    document.body.removeChild(outer);
    return (w1 - w2);
    console.log(w1);
    console.log(w2);
    console.log(getScrollBarWidth());
}







