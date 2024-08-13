
function suappFreezeHeader(_sugrids) {
    try {
        if (_sugrids.length > 0) {
           
            _.each(_sugrids, function (i, j) {
                var _headerControlHTML = $("#" + i + " thead").html();
                if (_headerControlHTML) {
                    //console.log("read");
                    var tblclass = $("#" + i).attr("class");
                    var tblclassW = $("#" + i).attr("width");
                   // console.log(i , tblclassW);

                    var tblparentid = $("#" + i).parent().attr('id');
                    $("#" + tblparentid +" .fixedheader").remove();
                    var _GTRTH = "<div class='fixedheader' id='" + i + "_fixed' style='position: absolute; top: 0px; left: 1px; width: 100%; overflow: hidden;z-index: 999;'><table width='" + tblclassW + "' class='" + tblclass + "' cellspacing='0' cellpadding='0' border='0'><thead>" + _headerControlHTML + "</thead></table></div>"
                    //$("#" + i).wrap("<div id='" + i + "_kasina' style=\"height: 100%; width: 100%; overflow: auto;\" class=\"divscroll\"></div>");
                    //$("#kasina_" + i).parent().css({ height: "100%" });
                    $(_GTRTH).insertBefore("#" + i);

                    $("#" + tblparentid).scroll(function () {

                        $("#" + i + "_fixed").scrollLeft($(this).scrollLeft());

                        //var scrollwidth = $('.scwidth').width();
                       // $("#" + i + "_fixed").width(dydiv2 - scrollwidth);
                    });

                    var scrollwidth = $('.scwidth').width();
                    /* div -1 id is */var dydiv1 = $("#" + tblparentid).height();
                    /* table -1 id is */var dytbl1 = $("#" + i).height();
                    /* div -2 id is*/var dydiv2 = $("#" + i + "_fixed").width();
                    if (dydiv1 >= dytbl1) /* condition-1 */
                    {

                        $("#" + i + "_fixed").width(dydiv2);
                    }
                    else if (dydiv1 < dytbl1) /* condition -2 */
                    {
                        console.log('sweth');
                        $("#" + i + "_fixed").width(dydiv2 - scrollwidth);
                    }
                    suGridTableWidth(i);
                    setTimeout(function () {
                        SetTabletdFreeze(i);

                    }, 500);
                    $(window).resize(function () {
                        SetTabletdFreeze(i);

                    });

                }

            });
        }
    }
    catch (e) {
        //exception
    }
}

function SetTabletdFreeze(ctrlId) {
    $('#' + ctrlId + ' thead tr:nth-child(1) th').each(function (i, j) {
        var colwidth = $(this).outerWidth();
        $('#' + ctrlId + '_fixed thead th').each(function (k, l) {
            if (i == k) {
                $(this).css('min-width', colwidth + 'px');
            }
        });
    });
}
function suGridTableWidth(_selfid) {
    var parenttblWidth = $("#" + _selfid).parent().parent() == undefined ? "0" : $("#" + _selfid).parent().parent().width();
    var tblWidth = $("#" + _selfid).width();
    if (parenttblWidth >= tblWidth) {
        var cellWidth = $("#" + _selfid + " > tbody > tr > td:last-child()").width();
        var cellHWidth = $("#" + _selfid + " > thead > tr > th:last-child()").width();
        //  $("#tbl_" + _selfid).css("width","100%");
        $("#" + _selfid + " > tbody > tr > td:last-child()").css({ "min-width": (parenttblWidth - tblWidth) + cellWidth });
        $("#" + _selfid + " > thead > tr > th:last-child()").css({ "min-width": (parenttblWidth - tblWidth) + cellHWidth });
    }
}

/*Grid Search Filter Criteria Start
var FilterValue = $('[id*=ctl00_ContentPlaceHolder1_gvServices_fixed]').find('[id*=' + Id + ']').val();
gridviewScroll();
$('[id*=ctl00_ContentPlaceHolder1_gvServices_fixed]').find('[id*=' + Id + ']').val(FilterValue);
$('[id*=ctl00_ContentPlaceHolder1_gvServices_fixed]').find('[id*=' + Id + ']').focus();
Grid Search Filter Criteria Start*/
