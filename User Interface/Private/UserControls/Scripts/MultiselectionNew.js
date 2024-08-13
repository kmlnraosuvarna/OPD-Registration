<script language="javascript" type="text/javascript">
    $(document).ready(function () {
        mchklist()
        bindLeftMenu();
        bindLeftDataToArrys();
    });
   
    var dctrDataArr = [];var dctrRecSource = dctrDataArr;
    var deptDataArr = [];var deptRecSource = deptDataArr;
    var cmpCatDataArr = []; var cmpCatRecSource = cmpCatDataArr;
    var cmpDataArr = []; var cmpRecSource = cmpDataArr;
    var wrdDataArr = []; var wrdRecSource = wrdDataArr;
    var wrdGrpDataArr = []; var wrdGrpRecSource = wrdGrpDataArr;
    var nsDataArr = []; var nsRecSource = nsDataArr;
    var gndrDataArr = []; var gndrRecSource = gndrDataArr;
    var admnTypDataArr = []; var admnTypRecSource = admnTypDataArr;
    function bindLeftDataToArrys() {
    var _url = '';
        _url = _iniUrl + "PatientCounslingWebSerivce.asmx/GetLeftMenuListData";
        $('[id*=tbl_Dctrschkbxlst]').empty();
        $.ajax({
            type: "POST",
            url: _url,
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            error: function (jqXHR, textStatus, errorThrown) { },
            success: function (jdata) {
                if (jdata.d != null && jdata.d != "" && jdata.d != undefined) {
                    $("#divPopupNoRecs").html('');

                    
                       data = jdata.d[0]; /* jdata.d[0] ===> Departments Collection  */
                       data = jdata.d[1]; /* jdata.d[1] ===> Doctors Collection */
                       data = jdata.d[2]; /* jdata.d[2]  ===>Company Category Collection */
                       data = jdata.d[3]; /* jdata.d[3]  ===>Company Collection */
                       data = jdata.d[4]; /* jdata.d[4]  ===>Ward Collection */
                       data = jdata.d[5]; /* jdata.d[5]  ===>WardGroup Collection */
                       data = jdata.d[6]; /* jdata.d[6]  ===>Nursestation Collection */
                       data = jdata.d[7]; /* jdata.d[7]  ===>Gender Collection */
                       data = jdata.d[8]; /* jdata.d[8]  ===>Admission Type Collection */
                    
    }
    function mchklist() {
        $('input[type="checkbox"]').addClass("filled-in");
        $('input[type="radio"]').addClass("with-gap");
    }
    function bindLeftMenu() {
        debugger;
        var lst = "";
        var li = '';
        /* *******************BIND THESE LI'S DYNAMICALLY BY USING ENTITY ************** */
        /*for (var i = 0; i < 5; i++) {
        li += "<li onclick='return lstsel(this);'></li>";
        }*/
        //li += "<li value='U'   id='U'  onclick='return lstsel(this);' >User</li>";
        li += "<li value='Dep' id='Dep'  onclick='return lstsel(this);' >Department</li>";
        li += "<li value='Doc' id='Doc'  onclick='return lstsel(this);' >Doctor</li>";
        li += "<li value='CmpCat' id='CmpCat'  onclick='return lstsel(this);' >Company Category</li>";
        li += "<li value='Cmpny'  id='Cmpny'  onclick='return lstsel(this);' >Company</li>";
        //li += "<li value='Org'  id='Org'  onclick='return lstsel(this);' >Organization</li>";
        //li += "<li value='RefSrc' id='RefSrc' onclick='return lstsel(this);' >Referral Source</li>";
        li += "<li value='Wrd' id='Wrd'  onclick='return lstsel(this);' >Ward</li>";
        li += "<li value='WrdGrp' id='WrdGrp'  onclick='return lstsel(this);' >Ward Group</li>";
        li += "<li value='NS' id='NS' onclick='return lstsel(this);' >Nursestation</li>";
        li += "<li value='Gndr' id='Gndr'  onclick='return lstsel(this);' >Gender</li>";
        li += "<li value='AdmnTyp' id='AdmnTyp'  onclick='return lstsel(this);' >Admission Type</li>";
        $("[id$=lstid]").html(li);
    }
    function lstsel(val) {
        debugger;
        var ctrlId = val.id;
        $("[id*=lblLgn]").text(val.innerText);
        bindDoctors(ctrlId);
        $('[id$=divDctrfilter]').removeAttr("style");
        $('[id$=divDctrfilter]').attr("style", "display:block;");
        filterdTags();
        $("[id*=lblSelVals]").text("Selected " + val.innerText + "'s");
        /*switch (ctrlId) {
        case 'Dep':
        bindDoctors(ctrlId); 
        break;
        case 'Doc':
        debugger;
        bindDoctors(ctrlId);
        $('[id$=divDctrfilter]').removeAttr("style");
        $('[id$=divDctrfilter]').attr("style", "display:block;");
        filterdTags();
        break;
        case 'CmpCat': bindCompnyCat(); break;
        case 'Cmpny': bindCompnys(); break;
        case 'Org': bindOrgnztions(); break;
        case 'RefSrc': bindRefralSrc(); break;
        case 'NS': bindNurseStations(); break;
        case 'Wrd': bindWards(); break;
        case 'WrdGrp': bindWrdGroups(); break;
        case 'Gndr': bindGender(); break;
        case 'AdmnTyp': bindAdmnTypes(); break;

        }*/
        return false;
    }
    var Norecs = '<table><tr class="norecord"><td><h2 class="error"><i class=" icon-pencil-1"></i>No Record(s) Found</h2></td></tr></table>';
    //    function bindusers() {
    //        debugger;
    //        $("#tbl_userschkbxlst").html('');
    //        var colname = ''; var pText = '';
    //        var pno = 1, psize = 999999; var _advSrch = '';
    //        $.ajax({
    //            type: "POST",
    //            url: _iniUrl + "PatientCounslingWebSerivce.asmx/GetAllUserList",
    //            data: "{}",
    //            contentType: "application/json; charset=utf-8",
    //            dataType: "json",
    //            error: function (jqXHR, textStatus, errorThrown) { },
    //            success: function (jdata) {
    //                if (jdata.d != null && jdata.d != "" && jdata.d != undefined) {
    //                    $("#divPopupNoRecs").html('');
    //                    $('.fltr_sec').html('');
    //                    var _data = jdata.d[0];
    //                    BindUsersData(_data);
    //                }
    //                else {
    //                    $("#divPopupNoRecs").html(Norecs);
    //                }
    //            }
    //        });
    //    }
    //    function BindUsersData(data) {
    //        debugger;
    //        var builder = '';
    //        for (var i = 1; i <= data.length; i++) {
    //            builder += "<li><input type=\"checkbox\" class=\"filled-in\" id=\"userschkbxlst" + (i - 1) + "\"  onclick=\"ChkbxClientClickUsers(this);\" value=\"" + data[i - 1].USER_ID + "\" /><label for=\"chkbxlst_" + (i - 1) + "\">" + data[i - 1].USER_NAME + "</label></li>";
    //        }
    //        $('[id*=divfilter] ul[id*=tbl_userschkbxlst]').append(builder);
    //        var chkEmpIds = $("[id$=hdnChkdUserIds] ").val();
    //        if (chkEmpIds != undefined && chkEmpIds != null && chkEmpIds != "") {
    //            $('#divfilter li').each(function () {
    //                var id = $(this).find('input[type=checkbox]').val();

    //                for (var i = 0; i <= chkEmpIds.split(',').length; i++) {
    //                    var chkEmpId = chkEmpIds.split(',')[i];
    //                    if (id == chkEmpId) {
    //                        $(this).find('input[type=checkbox][id*=userschkbxlst]')[0].checked = true;
    //                    }
    //                }
    //            });
    //        }
    //        return false;
    //    }
    function ChkbxClientClickDoctors(obj) {
        dctrId = [];
        $('#divDctrfilter li').each(function () {
            if ($(this).find('input[type=checkbox][id*=Dctrschkbxlst]')[0].checked == true) {
                var chkid = $(this).find('input[type=checkbox][id*=Dctrschkbxlst]')[0].value;
                dctrId += chkid + ',';
                flag = true;
            }
            else {
            }
        });

        if (dctrId.length == 0) { dctrId = 0; } else {
            dctrId = dctrId.substring(0, dctrId.length - 1);
            $("[id$=hdnChkdDctrIds] ").val('');
            $("[id$=hdnChkdDctrIds] ").val(dctrId);
        }
        //BindRoleFilters('');
    }
    function bindDoctors(obj) {
        debugger;
        $("#divfilter").empty();
        var _url = '';
        _url = _iniUrl + "PatientCounslingWebSerivce.asmx/GetLeftMenuListData";
        $('[id*=tbl_Dctrschkbxlst]').empty();
        $.ajax({
            type: "POST",
            url: _url,
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            error: function (jqXHR, textStatus, errorThrown) { },
            success: function (jdata) {
                if (jdata.d != null && jdata.d != "" && jdata.d != undefined) {
                    $("#divPopupNoRecs").html('');

                    switch (obj) {
                        case 'Dep': data = jdata.d[0]; /* jdata.d[0] ===> Departments Collection  */
                            var builder = '';
                            for (var i = 1; i <= data.length; i++) {
                                builder += "<li><input type=\"checkbox\" class=\"filled-in\" id=\"Dctrschkbxlst" + (i - 1) + "\"  onclick=\"ChkbxClientClickDctrs(this);\" value=\"" + data[i - 1].DEPARTMENT_ID + "\" /><label for=\"chkbxlst_" + (i - 1) + "\">" + data[i - 1].DEPARTMENT_NAME + "</label></li>";
                            }
                            break;
                        case 'Doc': data = jdata.d[1]; /* jdata.d[1] ===> Doctors Collection */
                            var builder = '';
                            for (var i = 1; i <= data.length; i++) {
                                builder += "<li><input type=\"checkbox\" class=\"filled-in\" id=\"Dctrschkbxlst" + (i - 1) + "\"  onclick=\"ChkbxClientClickDctrs(this);\" value=\"" + data[i - 1].DOCTOR_ID + "\" /><label for=\"chkbxlst_" + (i - 1) + "\">" + data[i - 1].DOCTOR_NAME + "</label></li>";
                            }
                            break;
                        case 'CmpCat': data = jdata.d[2]; /* jdata.d[2]  ===>Company Category Collection */
                            var builder = '';
                            for (var i = 1; i <= data.length; i++) {
                                builder += "<li><input type=\"checkbox\" class=\"filled-in\" id=\"Dctrschkbxlst" + (i - 1) + "\"  onclick=\"ChkbxClientClickDctrs(this);\" value=\"" + data[i - 1].COMPANY_CATEGORY_ID + "\" /><label for=\"chkbxlst_" + (i - 1) + "\">" + data[i - 1].COMPANY_CATEGORY_NAME + "</label></li>";
                            }
                            break;
                        case 'Cmpny': data = jdata.d[3]; /* jdata.d[3]  ===>Company Collection */
                            var builder = '';
                            for (var i = 1; i <= data.length; i++) {
                                builder += "<li><input type=\"checkbox\" class=\"filled-in\" id=\"Dctrschkbxlst" + (i - 1) + "\"  onclick=\"ChkbxClientClickDctrs(this);\" value=\"" + data[i - 1].COMPANY_ID + "\" /><label for=\"chkbxlst_" + (i - 1) + "\">" + data[i - 1].COMPANY_NAME + "</label></li>";
                            }
                            break;
                        case 'Wrd': data = jdata.d[4]; /* jdata.d[4]  ===>Ward Collection */
                            var builder = '';
                            for (var i = 1; i <= data.length; i++) {
                                builder += "<li><input type=\"checkbox\" class=\"filled-in\" id=\"Dctrschkbxlst" + (i - 1) + "\"  onclick=\"ChkbxClientClickDctrs(this);\" value=\"" + data[i - 1].WARD_ID + "\" /><label for=\"chkbxlst_" + (i - 1) + "\">" + data[i - 1].WARD_NAME + "</label></li>";
                            }
                            break;
                        case 'WrdGrp': data = jdata.d[5]; /* jdata.d[5]  ===>WardGroup Collection */
                            var builder = '';
                            for (var i = 1; i <= data.length; i++) {
                                builder += "<li><input type=\"checkbox\" class=\"filled-in\" id=\"Dctrschkbxlst" + (i - 1) + "\"  onclick=\"ChkbxClientClickDctrs(this);\" value=\"" + data[i - 1].WARD_GROUP_ID + "\" /><label for=\"chkbxlst_" + (i - 1) + "\">" + data[i - 1].WARD_GROUP_NAME + "</label></li>";
                            }
                            break;
                        case 'NS': data = jdata.d[6]; /* jdata.d[6]  ===>Nursestation Collection */
                            var builder = '';
                            for (var i = 1; i <= data.length; i++) {
                                builder += "<li><input type=\"checkbox\" class=\"filled-in\" id=\"Dctrschkbxlst" + (i - 1) + "\"  onclick=\"ChkbxClientClickDctrs(this);\" value=\"" + data[i - 1].NURSESTATION_ID + "\" /><label for=\"chkbxlst_" + (i - 1) + "\">" + data[i - 1].NURSESTATION_NAME + "</label></li>";
                            }
                            break;
                        case 'Gndr': data = jdata.d[7]; /* jdata.d[7]  ===>Gender Collection */
                            var builder = '';
                            for (var i = 1; i <= data.length; i++) {
                                builder += "<li><input type=\"checkbox\" class=\"filled-in\" id=\"Dctrschkbxlst" + (i - 1) + "\"  onclick=\"ChkbxClientClickDctrs(this);\" value=\"" + data[i - 1].GENDER_ID + "\" /><label for=\"chkbxlst_" + (i - 1) + "\">" + data[i - 1].GENDER_NAME + "</label></li>";
                            }
                            break;
                        case 'AdmnTyp': data = jdata.d[8]; /* jdata.d[8]  ===>Admission Type Collection */
                            var builder = '';
                            for (var i = 1; i <= data.length; i++) {
                                builder += "<li><input type=\"checkbox\" class=\"filled-in\" id=\"Dctrschkbxlst" + (i - 1) + "\"  onclick=\"ChkbxClientClickDctrs(this);\" value=\"" + data[i - 1].ADMISSION_TYPE_ID + "\" /><label for=\"chkbxlst_" + (i - 1) + "\">" + data[i - 1].ADMISSION_TYPE_NAME + "</label></li>";
                            }
                            break;
                        //case 'Org':     data = jdata.d[9]; break;     /* jdata.d[9]  ===>Organization Collection */ 
                        //case 'RefSrc':  data = jdata.d[10]; break;    /*    */ 
                    }



                    debugger;
                    $('[id*=tbl_Dctrschkbxlst]').empty();
                    $('ul[id*=tbl_Dctrschkbxlst]').html(builder);
                    var chkDctrIds = $("[id$=hdnChkdDctrIds] ").val();
                    if (chkDctrIds != undefined && chkDctrIds != null && chkDctrIds != "") {
                        $('#divfilter li').each(function () {
                            var id = $(this).find('input[type=checkbox]').val();

                            for (var i = 0; i <= chkDctrIds.split(',').length; i++) {
                                var chkDctrId = chkDctrIds.split(',')[i];
                                if (id == chkDctrId) {
                                    $(this).find('input[type=checkbox][id*=Dctrschkbxlst]')[0].checked = true;
                                }
                            }
                        });
                    }
                }
                else {
                    $("#divPopupNoRecs").html(Norecs);
                }
            }
        });
    }
    var selDctrsId = [];
    function ChkbxClientClickDctrs(obj) {
        selDctrsId = [];
        $('#tbl_Dctrschkbxlst li').each(function () {
            if ($(this).find('input[type=checkbox][id*=Dctrschkbxlst]')[0].checked == true) {
                var chkid = $(this).find('input[type=checkbox][id*=Dctrschkbxlst]')[0].value;
                selDctrsId += chkid + ',';
                flag = true;
            }
        });
        if (selDctrsId.length == 0) { selDctrsId = 0; } else {
            selDctrsId = selDctrsId.substring(0, selDctrsId.length - 1);
        }
        BindDctrFilters('');
    }
    function filterdTags() {
        var builder = ''
        builder = "<fieldset class=\"frameborder\"><legend><b><span id=\"lblSelVals\"></span></b></legend><ul id=\"searchfilterdata\" data-key=\"" + "A" + "\" style=\"height: 20px;\">";
        builder += "</ul></fieldset>";
        $('[id*=divfilter]').append(builder);
    }
    function BindDctrFilters(locid) {
        var srvtypeidfilter = []; var srvtypetextfilter = []; var builder1 = '';

        $("[id*=divfilter] ul[id*=searchfilterdata] li").each(function () {
            var type = $(this).find('i').attr('text');
            if (type == "srvtype") {
                $(this).remove();
            }
        });
        $('#tbl_Dctrschkbxlst li').each(function () {
            if ($(this).find('input[type=checkbox][id*=Dctrschkbxlst]')[0].checked == true) {
                var Index = $(this).find('[id*=Dctrschkbxlst]')[0].id;
                var aa = Index.replace('Dctrschkbxlst', '');
                var chkid = $(this).find('input[type=checkbox][id*=Dctrschkbxlst]')[0].value;
                var chktext = $('#tbl_Dctrschkbxlst li label')[aa].innerHTML;
                srvtypetextfilter += chktext + ',';
                srvtypeidfilter += chkid + ',';
            }
        });
        if (srvtypeidfilter.length > 0) {
            var filterid = filterid = srvtypeidfilter.substring(0, srvtypeidfilter.length - 1);
            var filtertext = srvtypetextfilter.substring(0, srvtypetextfilter.length - 1);
            filtertext = filtertext.split(','); var j = 0;
            filterid = filterid.split(',');
            for (var i = 0; i <= filterid.length - 1; i++) {
                builder1 += "<li class=\"stype\"><span>\  " + filtertext[j] + "\ </span><i onclick=\"closeRoles(this);\" class=\"icon-cancel-circled-outline\" id=\"lblfilter_" + (i) + "\" value=\"" + filterid[i] + "\" text=\"" + "srvtype" + "\" ></i></li>";
                j++;
            }
            $("[id*=divfilter] ul[id*=searchfilterdata]").append(builder1);
        }
        divfilter.style.display = 'block';
    }
    function SearchDoctr(obj) {
        debugger;
        var liLngth = $('[id*=tbl_Dctrschkbxlst] li').length;
        if (liLngth > 0) {
            var value = document.getElementById(obj.id).value;
            if (value != "") {
                $('[id*=tbl_Dctrschkbxlst] li').each(function (i, j) {
                    var _val = $(this).text();
                    if (_val.toLowerCase().indexOf(value.toLowerCase()) != -1) {
                        $(this).show();
                    }
                    else {
                        $(this).hide();
                    }
                });
            } else {
                $('[id*=tbl_Dctrschkbxlst] li').each(function (i, j) {
                    $(this).show();
                });
            }
            $("input[type=radio][id*=rdlLst]").attr('checked', false)
            $("input[type=radio][id$=rdlLst_2]").attr('checked', true)
        }
        else {
            $(".stoast").toastText("warning", "Please Select One Option!.", 5, 3);
        }
    }
    function getLst(sel) {
        $("[id*=txtSrcText]").val('');
        if (sel == "S") {
            $('[id*=tbl_Dctrschkbxlst] li').each(function (i, j) {
                if ($(this).find('input[type=checkbox]').is(':checked')) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            });
        }
        else if (sel == "US") {
            $('[id*=tbl_Dctrschkbxlst] li').each(function (i, j) {
                if (!$(this).find('input[type=checkbox]').is(':checked')) {
                    $(this).show();
                }
                else {
                    $(this).hide();
                }
            });
        }
        else if (sel == "A") {
            $('[id*=tbl_Dctrschkbxlst] li').each(function (i, j) {
                $(this).show();
            });
        }
    }
    function closeRoles(obj) {
        $('[id*=tbl_Dctrschkbxlst] li').each(function () {
            if ($(this).find('input[type=checkbox][id*=Dctrschkbxlst]')[0].checked == true) {
                var selDctrsId = $(obj).attr('value');
                if (selDctrsId == $(this).find('input[type=checkbox][id*=Dctrschkbxlst]')[0].value) {
                    $(this).find('input[type=checkbox][id*=Dctrschkbxlst]')[0].checked = false;
                }
            }
        });
        obj.parentElement.remove();
    }
</script>