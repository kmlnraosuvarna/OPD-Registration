

function documents() {
    if ($('#ctl00_ContentPlaceHolder1_rdblocation_0').prop('checked') == true) {
        $('#tddocumt').show();
        $('#tddoclk').show();
        $('#tduser').hide();
        $('#userlk').hide();
        $('#tdusrcd').hide();
        $('#tduserdec').hide();
        divlocation.style.display = "block";
        DivDocument.style.display = "none";
        $('#tbl_loc tr:has(td)').remove();
        $('[id*=hdnuserid]').val('');
        $('[id*=hdndocid]').val('');
        $('[id*=lkdocument]').val('');
        $('#ctl00_ContentPlaceHolder1_ucNewUser_txtSearchControl').val('');
    }

    else {
        $('#tduser').show();
        $('#userlk').show();
        $('#tdusrcd').show();
        $('#tduserdec').show();
        $('#tddocumt').hide();
        $('#tddoclk').hide();
        divlocation.style.display = "none";
        DivDocument.style.display = "block";
        $('#tbl_doc tr:has(td)').remove();
        $('[id*=hdnuserid]').val('');
        $('[id*=hdndocid]').val('');
        $('[id*=lkdocument]').val('');
        $('#ctl00_ContentPlaceHolder1_ucNewUser_txtSearchControl').val('');
    }
}

function Onlkdocumentbitton() {

    $('[id*=DivService]')[0].style.display = 'block';
    var cName = ''; var pText = '';
    var param = param || {};
    var ADMN_NO = '';
    var DEPARTMENT_ID = '';
    var TARIFF_ID = '';
    param.dataKey = "DOC_ID";
     var pageSizeU = 100;
    param.pageNum = 1;
    var user_id =0;
    var location_id = $('#ctl00_ContentPlaceHolder1_ddltolocations').val();
    param.defaultWSParams = { _cName: cName, _pText: pText, _advSrch: '', ProcName: '', _eventFlag: 1, user_id: user_id, location_id: location_id, pageSizeU: pageSizeU };

    param.wsPath = "Private/security_IdentityManagement/QuickLinksmaster.aspx/getalldocuments";
    param.wsFilterPath = "Private/security_IdentityManagement/QuickLinksmaster.aspx/getalldocuments";
    param.template = ["DOC_NAME*DOC_NAME"
                     , "DOC_CD*DOC_CD"
                     , "DOC_FORM_CD*DOC_FORM_CD"

                     ];
    param.header = [{ col: "Document NAME", sort: true, filter: true }
                   , { col: "Document Code", sort: true, filter: true }
                   , { col: "Document format Code", sort: true, filter: true }
                  ];
    param.enablePaging = false;
    param.enableTrace = false;
    param.enableFilter = true;
    param.enableCheckbox = false;
    param.enableSorting = true;
    param.tableTemplate = false;
    param.rowClick = function (key) {
        AssignConsultation(key);
    };
    gridControl = $("#divServices").jtable(param);
    return false;
}
function OnNewUser(input) {
    $('#ctl00_ContentPlaceHolder1_ucNewUser_txtSearchControl').val(input.USER_NAME);
    $('#ctl00_ContentPlaceHolder1_hdnuserid').val(input.USER_ID);
    $('#ctl00_ContentPlaceHolder1_txtUserCd').val(input.USER_CD);
    $('#ctl00_ContentPlaceHolder1_txtcopyuserDesc').val(input.USER_DESC);

}
var gridControlLoc = "";
function Getdata() {

    if ($('#ctl00_ContentPlaceHolder1_rdblocation_0').prop('checked') == true) {
        if ($('[id*=hdndocid]').val() == '' || $('[id*=lkdocument]').val() == '') {
            $(".toast").toastText("Warning", 'Please select Document ...', 7, 3);
            $('[id*=lkdocument]').focus();
            return false;

        } else {
            Getusers();
        }
    }
    else {
       if ($('[id*=hdnuserid]').val() == '' || $('#ctl00_ContentPlaceHolder1_ucNewUser_txtSearchControl').val() == '') {
            $(".toast").toastText("Warning", 'Please select User...', 7, 3);
            $('#ctl00_ContentPlaceHolder1_ucNewUser_txtSearchControl').focus();
            return false;

        } else {
            getdocuments();
        }
    }

}

function Getusers() {
    divlocation.style.display = "block";
    var current_format = "dd-MMM-yyyy";
    var param = param || {};
    var cName = 'USER_NAME';
    var pText = '';
    var pageNum = 1;
    param.dataKey = "USER_ID";
    var _pageSize = 30;
    param.pageNum = 1;
    var document_id = $('[id*=hdndocid]').val();
    var location_id = $('#ctl00_ContentPlaceHolder1_ddltolocations').val();
    param.defaultWSParams = { _pText: pText, _advSrch: '', pageNum: pageNum, pageSizeU: _pageSize, document_id: document_id, location_id: location_id };
    param.wsPath = "Private/security_IdentityManagement/QuickLinksmaster.aspx/BindUsers";
    param.wsFilterPath = "Private/security_IdentityManagement/QuickLinksmaster.aspx/BindUsers";
    param.template = ["USER_CD*USER_CD"
                            , "USER_NAME*USER_NAME"
                            , "USER_DESC*USER_DESC"
                            , "CREATE_BY*CREATE_BY"
                            , "CREATE_DT*CREATE_DT"
                            , "MODIFY_BY*MODIFY_BY"
                            , "MODIFY_DT*MODIFY_DT"

                                    ];
    param.header = [
                            { col: "User Code", sort: true, filter: true }
                           , { col: "User Name", sort: true, filter: true }
                           , { col: "User Desc ", sort: true, filter: true }
                           , { col: "Created By", sort: true, filter: true }
                           , { col: "Created Dt", sort: true, filter: true }
                           , { col: "Modified By", sort: true, filter: true }
                           , { col: "Modified Dt", sort: true, filter: true }

                          ];
    SuvarnaGrid.rowFormat = [{ CheckField: "RECORD_STATUS", CheckVal: "A", BGColor: '#F3DEDE' },
    { CheckField: "IS_CHECKED", CheckVal: "true", BGColor: '#CAF1BE'}];
    param.enablePaging = true;
    param.enableTrace = true;
    param.enableFilter = true;
    param.enableCheckbox = true;
    param.enableSorting = true;
    param.tableTemplate = true;
    param.enableDMS = false;
    param.rowClick = function (key) {
        OnlocationSelection1(key);
    };
    param.RowDataBinding = function (rowitem, _data) {
        var obj = $(rowitem);
        obj.find("td").each(function (i, j) {
            if (i == 7||i==5) {
                if (_data.CREATE_DT != undefined && _data.CREATE_DT != null && _data.CREATE_DT != "" && _data.CREATE_DT != "null")
                    $(this).text(new Date(_data.CREATE_DT).format("dd-MMM-yyyy"));

            }

        });
        return obj[0].outerHTML;
    };
    gridControlLoc = $("#tbl_loc").jtable(param);
    $("table[id$=tbl_loc] tbody tr:has(td)").each(function (e) {
        var key = $(this).data("key");
        var _datarow = gridControlLoc.getDataRow(key);
        if (_datarow.IS_CHECKED == 'true' && _datarow.RECORD_STATUS == 'A') {

            $(this).find('input[type=checkbox]')[0].checked = true;

            return key = " style='background-color: #F3C3C3'";

        }
        else if (_datarow.IS_CHECKED == 'false') {
            $(this).find('input[type=checkbox]')[0].checked = false;
        }
    });
    return false;
}
function OnlocationSelection1(data) {
    chkcount = 0;

}




function getdocuments() {
    DivDocument.style.display = "block";
    var current_format = "dd-MMM-yyyy";
    var param = param || {};
    var cName = 'DOC_NAME';
    var pText = '';
    var pageNum = 1;
    param.dataKey = "DOC_ID";
    var _pageSize = 30;
    param.pageNum = 1;
    var user_id=$('[id*=hdnuserid]').val();
    var location_id=$('#ctl00_ContentPlaceHolder1_ddltolocations').val();
    param.defaultWSParams = { _pText: pText, _advSrch: '', pageNum: pageNum, pageSizeU: _pageSize, user_id: user_id, location_id: location_id };
    param.wsPath = "Private/security_IdentityManagement/QuickLinksmaster.aspx/getalldocuments";
    param.wsFilterPath = "Private/security_IdentityManagement/QuickLinksmaster.aspx/getalldocuments";
    param.template = ["DOC_CD*DOC_CD"
                            , "DOC_NAME*DOC_NAME"
                            , "CREATE_BY*CREATE_BY"
                            , "CREATE_DT*CREATE_DT"
                            , "MODIFY_BY*MODIFY_BY"
                            , "MODIFY_DT*MODIFY_DT"

                                    ];
    param.header = [
                            { col: "DOC Code", sort: true, filter: true }
                           , { col: "DOC Name", sort: true, filter: true }
                           , { col: "Created By", sort: true, filter: true }
                           , { col: "Created Dt", sort: true, filter: true }
                           , { col: "Modified By", sort: true, filter: true }
                           , { col: "Modified Dt", sort: true, filter: true }

                          ];
    SuvarnaGrid.rowFormat = [{ CheckField: "RECORD_STATUS", CheckVal: "A", BGColor: '#F3DEDE' },
    { CheckField: "IS_CHECKED", CheckVal: "true", BGColor: '#CAF1BE'}];
    param.enablePaging = true;
    param.enableTrace = true;
    param.enableFilter = true;
    param.enableCheckbox = true;
    param.enableSorting = true;
    param.tableTemplate = true;
    param.enableDMS = false;
    param.rowClick = function (key) {
        OnlocationSelection(key);
    };
    param.RowDataBinding = function (rowitem, _data) {

        var obj = $(rowitem);
        obj.find("td").each(function (i, j) {
            if (i == 4||i==5) {
                if (_data.CREATE_DT != undefined && _data.CREATE_DT != null && _data.CREATE_DT != "" && _data.CREATE_DT != "null")
                    $(this).text(new Date(_data.CREATE_DT).format("dd-MMM-yyyy"));

            }

        });
        return obj[0].outerHTML;
    };
    gridControlLoc = $("#tbl_doc").jtable(param);

    $("table[id$=tbl_doc] tbody tr:has(td)").each(function (e) {
        var key = $(this).data("key");
        var _datarow = gridControlLoc.getDataRow(key);
        if (_datarow.IS_CHECKED == 'true' && _datarow.RECORD_STATUS == 'A') {

            $(this).find('input[type=checkbox]')[0].checked = true;

            return key = " style='background-color: #F3C3C3'";

        }
        else if (_datarow.IS_CHECKED == 'false') {
            $(this).find('input[type=checkbox]')[0].checked = false;
        }
    });
    return false;
}
function OnlocationSelection(data) {
    chkcount = 0;

}


function Savexml() {
    var doc_id = $('[id*=hdndocid]').val();
    var doc_name = '';  //$('[id=*lkdocument]').val();
    var user_id = $('[id*=hdnuserid]').val();
    var usr_name = ''; //$('[id*=hdnuserid]').val();
    var documttousr = $('[id*=ctl00_ContentPlaceHolder1_rdblocation_0]').val();
    var userstodoc = $('[id*=ctl00_ContentPlaceHolder1_rdblocation_]').val();
    var location_id = $('#ctl00_ContentPlaceHolder1_ddltolocations').val();
    var flag = 'N';
    var TRAN_TYPE_ID = '';
    var TRAN_VALUES = '';
    var flag = '';
    if ($('#ctl00_ContentPlaceHolder1_rdblocation_1').prop('checked') == true) {
        TRAN_TYPE_ID = user_id;
        flag = 'UD';
        $("table[id$=tbl_tbl_doc] tbody input[type=checkbox]").each(function () {
            var chk = $(this).is(':checked');
            if (chk == true) {
                var obj = $(this).attr('data-key');
                TRAN_VALUES += obj + ',';
               
                /* flag = 'N';
                obj = $(this).attr('data-key');
                _xmlStr += "<QUICK_LINKS_USER_WISE_TRANS";
                _xmlStr += " TRAN_DOC_ID=!" + obj + "!";
                _xmlStr += "  USER_ID=!" + user_id + "!";
                _xmlStr += "  LOCATION_ID=!" + location_id + "!";
                _xmlStr += "/>";*/

            }
        });

    }
    if ($('#ctl00_ContentPlaceHolder1_rdblocation_0').prop('checked') == true) {
        TRAN_TYPE_ID = doc_id;
        flag = 'DU';
        $("table[id$=tbl_loc] tbody input[type=checkbox]").each(function () {
            var chk = $(this).is(':checked');
            var obj = '';
            if (chk == true) {
                var obj = $(this).attr('data-key');
                TRAN_VALUES += obj + ',';
              
                /*obj = $(this).attr('data-key');
                _xmlStr += "<QUICK_LINKS_USER_WISE_TRANS";
                _xmlStr += " USER_ID=!" + obj + "!";
                _xmlStr += " TRAN_DOC_ID=!" + doc_id + "!";
                _xmlStr += "  LOCATION_ID=!" + location_id + "!";
                _xmlStr += "/>";*/

            }

        });
    }
    
    GetAsync(
     "Private/security_IdentityManagement/QuickLinksmaster.aspx/Savedocumenttouser",
     { TRAN_TYPE_ID: TRAN_TYPE_ID,TRAN_VALUES:TRAN_VALUES, location_id: location_id, flag: flag },
    function (JData) {
        if (JData.d != null) {
            $(".stoast").toastText("Success", "Saved Successfully", 2, 1);
        }
        $('#progress').hide();
    },
    function (jqXHR, textStatus, errorThrown) {
        $(".stoast").toastText("Info", errorThrown, 5, 4);
    });
}


function AssignConsultation(res) {

    $('#lkdocument').val(res.DOC_NAME);
    $('[id*=hdndocid]').val(res.DOC_ID);
    $('[id*=DivService]')[0].style.display = 'none';
}