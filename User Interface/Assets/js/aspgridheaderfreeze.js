function aspFreezeHeader(_grids) {
    try {
        if (_grids.length > 0) {
            _.each(_grids, function (i, j) {
                var _headerControlHTML = $("#" + i + " tbody>tr:nth-child(1)").html();
                if (_headerControlHTML) {
                    var tblclass = $("#" + i).attr("class");
                    $("#" + i).parent().addClass("scrolldivh");
                    $("#" + i).parent().attr("id", 'div_' + i);

                    $("#div_" + i + " .fixedheader").remove();

                    var _GTRTH = "<div class='fixedheader' id='" + i + "_fixed' style='position: absolute; top: 0px; left: 0px; width: 100%; overflow: hidden;z-index: 999;'><table class='" + tblclass + "' cellspacing='0' cellpadding='0' border='0'><tbody><tr>" + _headerControlHTML + "</tr></tbody></table></div>"

                    $(_GTRTH).insertBefore("#" + i);

                    $("#div_" + i).scroll(function () {
                        $("#" + i + "_fixed").scrollLeft($(this).scrollLeft());
                    });
                    var scrollwidth = $('.scwidth').width();

                    var dydiv1 = $("#div_" + i).height();
                    var dytbl1 = $("#" + i).height();
                    var dydiv2 = $("#" + i + "_fixed").width();
                    if (dydiv1 >= dytbl1) {

                        $("#" + i + "_fixed").width(dydiv2);
                    }
                    else if (dydiv1 < dytbl1) {
                        $("#" + i + "_fixed").width(dydiv2 - scrollwidth);
                    }

                    GridTableWidth(i);
                    SetTableFreeze1(i);



                }

            });
        }
    }
    catch (e) {
    }
}

function SetTableFreeze1(ctrlId) {
    $('#' + ctrlId + '_fixed table').width($('#' + ctrlId).width());
    $('#' + ctrlId + ' tr:nth-child(1) th').each(function (i, j) {
        var colwidth = $(this).outerWidth();
        $('#' + ctrlId + '_fixed table tr th').each(function (k, l) {
            if (i == k) {
                $(this).css('min-width', colwidth + 'px');
            }
        });
    });
}
function AdjustData(i, ctrlId) {
    $('#' + ctrlId + ' tr td').each(function (x, y) {
        var dataa = $(this).text().trim();
        var _strlen = dataa.length;
        if (_strlen > 25) {
            $(this).addClass('tdsize');
            var _title = "title=\"" + dataa + "\"";
            if (_title != undefined) {
                var __td = "<label  class='ellipsisd' " + _title + "><span class='ellipsis'>" + dataa + "</span></label>";
                $(this).find('span').empty().append(__td);
            }
        }
    });
}
function GridTableWidth(_selfid) {
    var parenttblWidth = $("#" + _selfid).parent().parent() == undefined ? "0" : $("#" + _selfid).parent().parent().width();
    var tblWidth = $("#" + _selfid).width();
    if (parenttblWidth >= tblWidth) {
        var cellWidth = $("#" + _selfid + " > tbody > tr > td:last-child()").width();
        var cellHWidth = $("#" + _selfid + " > thead > tr > th:last-child()").width();
        $("#" + _selfid + " > tbody > tr > td:last-child()").css({ "min-width": (parenttblWidth - tblWidth) + cellWidth });
        $("#" + _selfid + " > thead > tr > th:last-child()").css({ "min-width": (parenttblWidth - tblWidth) + cellHWidth });
    }
}