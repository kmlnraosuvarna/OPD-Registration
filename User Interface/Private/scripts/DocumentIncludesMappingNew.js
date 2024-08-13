/* AUTHOR: P.Praveenkumar(STIL094) */
/* DESC: Document Includes mapping by using ClientSide Technology */
$(document).ready(function () {
    bindAllModules();
});
function bindAllModules() {
    
    $.ajax({
        type: "POST",
        data: "{}",
        url: "DocumentIncludesMappingNew.aspx/GetAllModules",
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        async:false,
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.responseText);
        },
        success: function (jData) {
            if (jData.d != "" && jData.d != undefined && jData.d != null) {
                
                var res = jData.d;
                $("table[id*=gvModules] tr:has(td)").each(function (e) {
                    $(this).closest('tr').remove();
                });
                var opt = "<option value='0'>--Select--</option>";
                for (var i = 0; i < res.length; i++) {
                    opt += "<option value='" + res[i].MODULE_ID + "'>" + res[i].MODULE_DESC + "</option>";
                    fn_AddNewRowforModules(res[i]);
                }
                $("[id$=ddlModules]").html(opt);
                
            }
        }
    });

}
var modIndex = 0;
var rowClr = 0;
function fn_AddNewRowforModules(data) {
    
    var gvModules = document.getElementById('ctl00_ContentPlaceHolder1_gvModules');
    var RowIndex = gvModules.rows.length;
    var newRow = gvModules.insertRow(RowIndex);
    if (rowClr == 0) {
        newRow.className = 'gridrow'
        rowClr++;
    }
    else {
        newRow.className = 'gridAlternaterow'
        rowClr = 0;
    }
    var newCell = newRow.insertCell(0);
    var rbMods = document.createElement('input'); rbMods.name = "rbMods"; rbMods.type = 'radio'; rbMods.id = 'rbMods' + modIndex;
    rbMods.onchange = function () { getAllSubModules(this); };
    var lblModuleName = document.createElement('label'); lblModuleName.innerHTML = data.MODULE_DESC; newCell.align = 'left'; lblModuleName.id = 'lblModuleName' + modIndex;
    var hidModid = document.createElement('input'); hidModid.type = 'hidden'; hidModid.id = 'hidModid' + modIndex; hidModid.value = data.MODULE_ID;
    var hidModRevno = document.createElement('input'); hidModRevno.type = 'hidden'; hidModRevno.id = 'hidModRevno' + modIndex; hidModRevno.value = data.MODULE_REV_NO;
    newCell.appendChild(rbMods);
    newCell.appendChild(lblModuleName);
    newCell.appendChild(hidModid);
    newCell.appendChild(hidModRevno);
    modIndex++;
}
function getAllSubModules(obj) {
    var modId = "";
    var frmCtrl = $(obj).parent().parent().parent().parent().prop("id").split('_')[2];
    if ($(obj).parent().parent().parent().parent().prop("id").split('_')[2] == "gvModules") {
    /*SELECTION THROUGH(DIRECT FROM)MODULE RADIOBUTTON LIST*/
        modId = $(obj).parent().find("input[type=hidden][id*=hidModid]").val();
        $("[id$=ddlModules]").val(modId);
    }
    else {
        /*SELECTION THROUGH(DIRECT FROM)MODULE DROPDOWN */
        modId = $("[id$=ddlModules]").val();
    }
    $("table[id$=gvModules] tr:has(td)").each(function () {
        if (modId == $(this).find("input[type=hidden][id*=hidModid]").val()) {
            if (frmCtrl == "gvModules") {
                $(this).removeAttr("style");
                $(this).prop("class", "rowselect");
            } else {
                $(this).removeAttr("class");
                $(this).attr("style", "background-color:CadetBlue;");
            }
            $(this).find("input[type=radio][id*=rbMods]").prop("checked", true);
        }
        else {
            $(this).removeAttr("class");
            $(this).attr("style", "background-color:White;");
            $(this).find("input[type=radio][id*=rbMods]").prop("checked", false);
        }
    });
    
    $.ajax({
        type: "POST",
        data: "{'moduleId':'" + modId + "'}",
        url: "DocumentIncludesMappingNew.aspx/GetAllSubModules",
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.responseText);
        },
        success: function (jData) {
            
            if (jData.d != "" && jData.d != undefined && jData.d != null) {
                
                var res = jData.d;
                var opt = "<table id='rblSubModules' border='0'><tbody>";
                for (var i = 0; i < res.length; i++) {
                    opt += "<tr><td><input id='rblSubModules_" + i + "' type='radio' name='rblSubModules' value='" + res[i].MODULE_ID + "' onchange='return getAllDocs(" + res[i].MODULE_ID + ",\"SR\")'>";
                    opt += "<label for='rblSubModules_" + i + "'>" + res[i].MODULE_DESC + "</label></td></tr>";
                }
                opt += "</tbody></table>";
                $("[id$=divSubModules]").html(opt);
                var item = "<option value='0'>--Select--</option>";
                for (var i = 0; i < res.length; i++) {
                    item += "<option value='" + res[i].MODULE_ID + "'>" + res[i].MODULE_DESC + "</option>";
                }
                $("[id$=ddlSubModule]").html(item);
                $("[id$=tdsubModDDL]").prop("style", "display:block;");
                $("[id$=submoddiv]").prop("style", "display:block;width: 32.2%");
                $("[id$=docdiv]").prop("style", "display:none;");
            }
            else {
                getAllDocs(modId,'S');
                $("[id$=tdsubModDDL]").prop("style", "display:none;");
                $("[id$=submoddiv]").prop("style", "display:none;");

            }
        }
    });
}
var _slcted_doc_TR = [];
function getAllDocs(modId,sel) {
    if (sel == "D") {/*SELECTION THROUGH SUB-MODULE DROPDOWN*/
        var subModId = $("[id$=ddlSubModule]").val();
        $("table[id$=rblSubModules] tr:has(td)").each(function () {
            if (subModId == $(this).find("input[type=radio][id*=rblSubModules_]").val()) {
                $(this).find("input[type=radio][id*=rblSubModules_]").prop("checked", true);
            }
            else {
                $(this).find("input[type=radio][id*=rblSubModules_]").prop("checked", false);
                $("[id$=gvDocument]").html('');
            }
        });
    }
    else if (sel == "SR") {/*SELECTION THROUGH SUB-MODULE RADIOBUTTON LIST*/
        $("[id$=ddlSubModule]").val(modId);
    }
    if (modId.value > 0) {
        modId = $("[id$=ddlSubModule]").val();
    }
    else if (modId != "" && modId != undefined && modId != null) { }
    var docId = "";
    
    $.ajax({
        type: "POST",
        data: "{'moduleId':'" + modId + "','DocId':'" + docId + "'}",
        url: "DocumentIncludesMappingNew.aspx/GetAllDocsByModId",
        contentType: "application/json; charset=utf-8",
        dataType: "JSON",
        async: false,
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR.responseText);
        },
        success: function (jData) {
            if (jData.d != "" && jData.d != undefined && jData.d != null) {
                
                var res = jData.d;
                var table = "<table id='tbl_docs' border='0' cellpadding='0' cellspacing='0' class='grid' style='width:100%;'>";
                table += "<thead><tr><th width='1%'>S.No.</th>";
                table += "<th width='2%'><input type='checkbox' id='chkAllDocs' onchange='return checkAllDocs(this);'/></th>";
                table += "<th width='97%'>Document Name</th></tr></thead><tbody>";
                var tr = "";
                for (var i = 0; i < res.length; i++) {
                    var tmp = JSON.stringify(res[i]);
                    tr += "<tr><td>" + (i + 1) + "</td>";
                    if (res[i].IS_CHECKED == "true") {
                        tr += "<td><input type='checkbox' value='" + res[i].DOC_ID + "' data-key='" + res[i].UMR_DOC_INC_ID + "," + res[i].DOCUMENT_REV_NO + "' id='chkDoc_" + res[i].DOC_ID + "' onchange='return selctdDcs(this," + tmp + ");' checked/></td>";
                        //_slcted_doc_TR += "<tr><td><input type='checkbox' value='" + res[i].DOC_ID + "' data-key='" + res[i].UMR_DOC_INC_ID + "," + res[i].DOCUMENT_REV_NO + "' id='chkDoc_" + res[i].DOC_ID + "' onchange='return selctdDcs(this);' checked/></td></tr>";
                        var docId = $("[id$=hdndocid]").val();

                        if (_slcted_doc_TR.length == 0) {
                            _slcted_doc_TR[i] = new Array(5);
                            _slcted_doc_TR[i]["UMR_DOC_INC_ID"] = res[i].UMR_DOC_INC_ID;
                            _slcted_doc_TR[i]["UMR_DOC_INC_REV_NO"] = res[i].DOCUMENT_REV_NO;
                            _slcted_doc_TR[i]["DOC_ID"] = (docId != "" && docId != null && docId != undefined) ? $("[id$=hdndocid]").val() : res[i].DOC_ID;
                            _slcted_doc_TR[i]["RECORD_STATUS"] = res[i].RECORD_STATUS;
                            _slcted_doc_TR[i]["INCLUDE_DOC_ID"] = res[i].DOC_ID;
                        }
                        else if (_slcted_doc_TR.length > 0) {
                            _slcted_doc_TR[_slcted_doc_TR.length] = new Array(5);
                            _slcted_doc_TR[_slcted_doc_TR.length - 1]["UMR_DOC_INC_ID"] = res[i].UMR_DOC_INC_ID;
                            _slcted_doc_TR[_slcted_doc_TR.length - 1]["UMR_DOC_INC_REV_NO"] = res[i].DOCUMENT_REV_NO;
                            _slcted_doc_TR[_slcted_doc_TR.length - 1]["DOC_ID"] = (docId != "" && docId != null && docId != undefined) ? $("[id$=hdndocid]").val() : res[i].DOC_ID;
                            _slcted_doc_TR[i]["RECORD_STATUS"] = res[i].RECORD_STATUS;
                            _slcted_doc_TR[_slcted_doc_TR.length - 1]["INCLUDE_DOC_ID"] = res[i].DOC_ID;
                        }

                    }
                    else {
                        
                        tr += "<td><input type='checkbox' value='" + res[i].DOC_ID + "' data-key='" + res[i].UMR_DOC_INC_ID + "," + res[i].DOCUMENT_REV_NO + "' id='chkDoc_" + res[i].DOC_ID + "' onchange='return selctdDcs(this," + tmp + ");'/></td>"; //" + jQuery.parseJSON(res[i]) + "
                    }
                    tr += "<td>" + res[i].DOC_NAME + "</td></tr>";
                }
                table += tr + "</tbody></table>";
                $("[id$=gvDocument]").html(table);
            }
            else {
                $("[id$=gvDocument]").html('');
            }
        }
    });
    $("[id$=docdiv]").prop("style", "display:block;;width: 32.2%");
    $("[id$=tbl_SlctdDocs]").append(_slcted_doc_TR);
}
function checkAllDocs(obj) {
    
    $("table[id$=tbl_docs] tr:has(td)").each(function () {
        if (obj.checked == true) {
            $(this).find("input[type=checkbox][id*=chkDoc_]").prop("checked", true);
        }
        else {
            $(this).find("input[type=checkbox][id*=chkDoc_]").prop("checked", false);
        }

    });
}

function OnItemSelection(sender, eventArgs) {
    var results = eval('(' + eventArgs.get_value() + ')');
    var doc_id = results.Value;
    $("[id$=hdndocid]").val(doc_id);
    $("table[id$=tbl_docs] tr:has(td)").each(function () {
        if (doc_id == $(this).find("input[type=checkbox][id*=chkDoc_]").val()) {
            $(this).prop("style", "");
            $(this).prop("class", "rowselect");
            $(this).find("input[type=checkbox][id*=chkDoc_]").focus();
            // $(this).attr("style", "background-color:CadetBlue;");
        }
        else {
            $(this).removeAttr("class", "");
        }
    });
}
function Clearcontrol() { }
function chkValidation(obj) {
    ConfirmationToasterForSave(obj, "", "Document Includes Mapping");
    return false;
}
function selctdDcs(obj, res) {
    var _slcted_doc_TR_dup = [];
    var docId = $("[id$=hdndocid]").val();
    if (obj.checked == true) {
        if (_slcted_doc_TR.length == 0) {
            _slcted_doc_TR[0] = new Array(5);
            _slcted_doc_TR[0]["UMR_DOC_INC_ID"] = (res.UMR_DOC_INC_ID != null && res.UMR_DOC_INC_ID != undefined) ? res.UMR_DOC_INC_ID : "0";// res.UMR_DOC_INC_ID;
            _slcted_doc_TR[0]["UMR_DOC_INC_REV_NO"] = (res.DOCUMENT_REV_NO != null && res.DOCUMENT_REV_NO != undefined) ? res.DOCUMENT_REV_NO : ""; //res.DOCUMENT_REV_NO;
            _slcted_doc_TR[0]["DOC_ID"] = (docId != "" && docId != null && docId != undefined) ? $("[id$=hdndocid]").val() : (res.DOC_ID != null && res.DOC_ID != undefined) ? res.DOC_ID : ""; //(docId != "" && docId != null && docId != undefined) ? $("[id$=hdndocid]").val() : res.DOC_ID;
            _slcted_doc_TR[i]["RECORD_STATUS"] = (res.RECORD_STATUS != null && res.RECORD_STATUS != undefined) ? res.RECORD_STATUS : "A";
            _slcted_doc_TR[0]["INCLUDE_DOC_ID"] = (res.DOC_ID != null && res.DOC_ID != undefined) ? res.DOC_ID : ""; //res.DOC_ID;
        }
        else if (_slcted_doc_TR.length > 0) {
            _slcted_doc_TR[_slcted_doc_TR.length] = new Array(5);
            _slcted_doc_TR[_slcted_doc_TR.length - 1]["UMR_DOC_INC_ID"] = (res.UMR_DOC_INC_ID != null && res.UMR_DOC_INC_ID != undefined) ? res.UMR_DOC_INC_ID : "0";
            _slcted_doc_TR[_slcted_doc_TR.length - 1]["UMR_DOC_INC_REV_NO"] = (res.DOCUMENT_REV_NO != null && res.DOCUMENT_REV_NO != undefined) ? res.DOCUMENT_REV_NO : "";
            _slcted_doc_TR[_slcted_doc_TR.length - 1]["DOC_ID"] = (docId != "" && docId != null && docId != undefined) ? $("[id$=hdndocid]").val() : (res.DOC_ID != null && res.DOC_ID != undefined) ? res.DOC_ID : "";
            _slcted_doc_TR[_slcted_doc_TR.length - 1]["RECORD_STATUS"] = (res.RECORD_STATUS != null && res.RECORD_STATUS != undefined) ? res.RECORD_STATUS : "A";
            _slcted_doc_TR[_slcted_doc_TR.length - 1]["INCLUDE_DOC_ID"] = (res.DOC_ID != null && res.DOC_ID != undefined) ? res.DOC_ID : "";
        }
    }
    else {
        _slcted_doc_TR_dup = $.grep(_slcted_doc_TR, function (objFilter, index) {
            if (objFilter.INCLUDE_DOC_ID == res.DOC_ID) { }
            else {
                return objFilter;
            }
        });
        _slcted_doc_TR = _slcted_doc_TR_dup;

        _slcted_doc_TR[_slcted_doc_TR.length] = new Array(5);
        _slcted_doc_TR[_slcted_doc_TR.length - 1]["UMR_DOC_INC_ID"] = (res.UMR_DOC_INC_ID != null && res.UMR_DOC_INC_ID != undefined) ? res.UMR_DOC_INC_ID : "0";
        _slcted_doc_TR[_slcted_doc_TR.length - 1]["UMR_DOC_INC_REV_NO"] = (res.DOCUMENT_REV_NO != null && res.DOCUMENT_REV_NO != undefined) ? res.DOCUMENT_REV_NO : "";
        _slcted_doc_TR[_slcted_doc_TR.length - 1]["DOC_ID"] = (docId != "" && docId != null && docId != undefined) ? $("[id$=hdndocid]").val() : (res.DOC_ID != null && res.DOC_ID != undefined) ? res.DOC_ID : "";
        _slcted_doc_TR[_slcted_doc_TR.length - 1]["RECORD_STATUS"] = "D";
        _slcted_doc_TR[_slcted_doc_TR.length - 1]["INCLUDE_DOC_ID"] = (res.DOC_ID != null && res.DOC_ID != undefined) ? res.DOC_ID : "";
        
       /* _slcted_doc_TR_dup = $.grep(_slcted_doc_TR, function (objFilter, index) {
            if (objFilter.INCLUDE_DOC_ID == res.DOC_ID) { }
            else {
                return objFilter;
            }
        });
        _slcted_doc_TR = _slcted_doc_TR_dup;*/
    }
}
function OnSuccessContinue() {
    SaveDsTemplateXML();
    __doPostBack('ctl00$ContentPlaceHolder1$ucPageHeader$imgbtnSave', "");
}
function SaveDsTemplateXML() {
    var resArr = _slcted_doc_TR;
    //var resArr = _.uniq(_slcted_doc_TR, 'INCLUDE_DOC_ID');
    var doc_id = $("[id$=hdndocid]").val();
    var UMR_DOC_INC_ID = "";
    var _xmlStr = "<root>";
    for (var i = 0; i < resArr.length; i++) {
        
        _xmlStr += "<UMR_DOC_INCLUDES";
        _xmlStr += " UMR_DOC_INC_ID=$" + resArr[i].UMR_DOC_INC_ID + "$";
        _xmlStr += " UMR_DOC_INC_REV_NO=$" + resArr[i].UMR_DOC_INC_REV_NO + "$";
        _xmlStr += " DOC_ID=$" + resArr[i].DOC_ID + "$";
        _xmlStr += " RECORD_STATUS=$" + resArr[i].RECORD_STATUS + "$";
        _xmlStr += " INCLUDE_DOC_ID=$" + resArr[i].INCLUDE_DOC_ID + "$";
        _xmlStr += "/>";
    }
    _xmlStr += "</root>";
    $("[id$=hdnXMLstring]").val(_xmlStr);
}
function savesuccess(res) {
    $(".smessagebox").scustommessagebox(1, "Document Includes Mapping", "Saved Successfully", OnsuccessSaveReload);
}
function OnsuccessSaveReload() {
    var path = window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/') + 1);
    window.location = path + "DocumentIncludesMappingNew.aspx";
    /*window.location = _iniUrl + "Private/scripts/DocumentIncludesMappingNew.aspx";*/
}