var gridCols = [];
var searchCols = [];
var searchElements = [];
var gridColGroups = [];
var reload = true;
var _iniUrl = "/" + window.location.pathname.split('/')[1] + "/";
var iKeyUp = 0;

var SuvarnaGrid = {
    wsPath: "",
    divID: "",
    pageSize: 1000,
    pageNum: 1,
    params: {},
    dateFormat: "",
    timeFormat: "",
    rowFormat: [],
    gridCols: [],
    BindGrid: function (isPageLoad) {
        $('[id*=hdnWSPath]').val(this.wsPath);
        $('[id*=hdnWSParams]').val(JSON.stringify(this.params));

        if (isPageLoad) {
            populateGird([]);
        }
        else {
            $.ajax({
                type: "POST",
                url: _iniUrl + SuvarnaGrid.wsPath,
                dataType: "json",
                data: JSON.stringify(SuvarnaGrid.params),
                contentType: "application/json; charset=utf-8",
                success: function (JData) {
                    populateGird(JData.d[0]);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    var error = 0;
                }
            });
        }
    }
}

function populateGird(data) {
    var reportCols = '';

    // Add Unique ID (recid) to Grid
    data.forEach(function (rowItem, rowIndex) {
        rowItem.recid = rowIndex + 1;

        var rowBgColor = "";
        SuvarnaGrid.rowFormat.forEach(function (hRow, hIndex) {
            var checkField = hRow.CheckField, checkVal = hRow.CheckVal;
            $.each(rowItem, function (key, value) {
                if (key.toLowerCase() == checkField.toLowerCase() && value.toLowerCase() == checkVal.toLowerCase()) { rowBgColor = hRow.BGColor; };
            });
        });
        if (rowBgColor != "") rowItem.w2ui = { "style": "background-color: " + rowBgColor };
    });

    // Prepare Grid Columns to render
    SuvarnaGrid.gridCols.forEach(function (rowItem, rowIndex) {
        var bgColor = (rowItem.BgColor == undefined || rowItem.BgColor == null ? "" : "background-color: " + rowItem.BgColor);
        var textColor = (rowItem.TextColor == undefined || rowItem.TextColor == null ? "" : "color: " + rowItem.TextColor);
        var textAlign = (rowItem.TextAlign == undefined || rowItem.TextAlign == null ? "" : "text-align: " + rowItem.TextAlign);
        var editOptions = { type: "", items: [], showAll: true };

        var colSchema = { field: rowItem.DBField,
            caption: rowItem.Caption,
            size: (rowItem.Width == undefined || rowItem.Width == "" || rowItem.Width == "0" || rowItem.Width == null ? "100px" : rowItem.Width),
            sortable: (rowItem.Sortable == undefined || rowItem.Sortable == null ? true : rowItem.Sortable),
            resizable: true,
            searchable: (rowItem.Searchable == undefined || rowItem.Searchable == null ? true : rowItem.Searchable),
            style: "",
            frozen: (rowItem.FreezeCol == undefined || rowItem.FreezeCol == null ? false : rowItem.FreezeCol),
            render: null
        }
        if (rowItem.DataType == undefined || rowItem.DataType == null) rowItem.DataType = 'text';
        if (rowItem.Searchable == undefined || rowItem.Searchable == null) rowItem.Searchable = 'text';
        switch (rowItem.DataType.toUpperCase()) {
            case 'MANAGE':
                var objManage = rowItem.ManageValue;
                var divManage = '&nbsp;&nbsp;';
                objManage.forEach(function (mngItem, mngIndex) {
                    var clickOption = { ClickFn: mngItem.click, RecId: "##recid##" };
                    divManage += "<a href='#' title='" + mngItem.alt + "' onclick='ManageClick(" + JSON.stringify(clickOption) + ")'><img src='" + mngItem.icon + "'></a>&nbsp;&nbsp;";
                });
                colSchema.render = function (record, index, column_index) {
                    var html = '<div>' + divManage.replace(/\##recid##/g, record.recid) + '</div>';
                    return html;
                }
                break;
            case "INT":
                if (textAlign == "") textAlign = "text-align: right";
                break;
            case "FLOAT":
                if (textAlign == "") textAlign = "text-align: right";
                colSchema.precision = "2";
                break;
            case "DATE":
                colSchema.render = function (record, index, column_index) {
                    var tempDate = this.getCellValue(index, column_index);
                    return (tempDate != "" ? new Date(tempDate).format(SuvarnaGrid.dateFormat) : "");
                }
                break;
            case "DATETIME":
                colSchema.render = function (record, index, column_index) {
                    var tempDate = this.getCellValue(index, column_index);
                    return (tempDate != "" ? new Date(tempDate).format(SuvarnaGrid.dateFormat) + " " + new Date(tempDate).format(SuvarnaGrid.timeFormat) : "");
                }
                break;
        }

        // If column is editable apply edit options
        if (rowItem.EditType != undefined && rowItem.EditType != null && rowItem.EditType != '') {
            editOptions.type = rowItem.EditType.toLowerCase();
            if (editOptions.type.toUpperCase() == 'SELECT' || editOptions.type.toUpperCase() == 'LIST') editOptions.items = rowItem.EditOptions;
            colSchema.editable = editOptions;
        }

        colSchema.style = (bgColor != "" ? bgColor + "; " : "") + (textColor != "" ? textColor + "; " : "") + (textAlign != "" ? textAlign + "; " : "")
        gridCols.push(colSchema);

        //Insert Search textboxes
        var sGroup = '';
        if (rowIndex == 0) gridColGroups.push({ caption: sGroup });
        if (rowItem.Searchable != undefined && rowItem.Searchable != null && rowItem.Searchable != '' && rowItem.DataType != 'Manage') {
            sGroup = "<div class='jtblfilterdiv'><i class='icon-search' style='margin-top:2px;'></i><input type='text' class='filtertext' style='width:100%;height:20px;padding-left:17px;' id='" + rowItem.DBField + "' placeholder='" + rowItem.Caption + "' onKeyUp='fn_KeyUp(event,this.id)' /></div>"
            searchElements.push({ searchID: rowItem.DBField, searchVal: '' });
        }
        gridColGroups.push({ caption: sGroup });

        if (rowItem.DBField != undefined && rowItem.DBField != null && rowItem.DBField != '') {
            reportCols += rowItem.Caption + ':' + rowItem.DBField + '&';
        }
    });

    gridCols.unshift({ field: 'recid', caption: 'Sl. No.', size: '51px', sortable: true, frozen: true });
    // Configure Grid
    var config = {
        grid: {
            name: 'grid',
            show: {
                footer: true,
                toolbar: true,
                refresh: false
            },
            resizable: true,
            multiSearch: true,
            columns: gridCols,
            columnGroups: gridColGroups
        }
    };

    // Bind data to grid
    $().w2grid(config.grid);
    w2ui['grid'].records = data;
    $('#' + SuvarnaGrid.divID).w2render('grid');

    //Grid Search
    w2ui.grid.on('search', function (event) {
        var searchCriteria = event.searchData;
        searchCriteria.forEach(function (searchRow, searchIndex) {
            var searchCol = searchRow.field;
            var searchVal = searchRow.value;

            searchElements.forEach(function (rowItem, rowIndex) {
                //rowItem.searchVal = $('#' + rowItem.searchID).val();
                if (searchCol == rowItem.searchID) {
                    rowItem.searchVal = searchVal;
                }
            });
        });
        if (searchCriteria.length == 0) {
            searchElements.forEach(function (rowItem, rowIndex) {
                rowItem.searchVal = "";
            });
        }
        event.done(function () {
            searchElements.forEach(function (rowItem, rowIndex) {
                $('#' + rowItem.searchID).val(rowItem.searchVal);
            });
        });
    });

    //Grid Reload
    w2ui.grid.on('reload', function (event) {
        if (reload) {
            event.preventDefault();
            SuvarnaGrid.BindGrid(false);
            reload = false;
        }
        event.done(function () {
            reload = true;
        });
    });

    // Prepare Report Columns
    if (reportCols.lenght > 0) reportCols = reportCols.substring(1, reportCols.length - 1);
    $('[id*=hdnExportColumns]').val(reportCols);
}

function fn_KeyUp(e, thisID) {
    if (e.keyCode == 13) {
        var dateChanged = $('[id*=hdnDateChanged]').val();
        var searchData = w2ui.grid.searchData

        if (dateChanged == 'Y' || iKeyUp == 0) {
            populateGird([]);
            var fDt = ''; var tDt = '';
            var _dt = $('[id*=txtDate]').val(); //document.getElementById('ctl00_ContentPlaceHolder1_ucDateSearchControl1_txtDate').value;
            fDt = GetDates('FROM_DT', _dt); tDt = GetDates('TO_DT', _dt);
            SuvarnaGrid.params._fDt = fDt;
            SuvarnaGrid.params._tDt = tDt;
            SuvarnaGrid.BindGrid(false);
            w2ui['grid'].searchReset();
            $('[id*=hdnDateChanged]').val("");
            iKeyUp += 1;
        }
        else {
            fn_Search();
            $('#' + thisID).focus();
        }
    }
}

function fn_Search() {
    var searchOn = [];
    searchElements.forEach(function (rowItem, rowIndex) {
        rowItem.searchVal = $('#' + rowItem.searchID).val();
        if (rowItem.searchVal != '') searchOn.push({ field: rowItem.searchID, value: rowItem.searchVal, operator: 'contains' });
    });

    if (searchOn.length > 0) {
        w2ui['grid'].search(searchOn, 'AND');
        searchElements.forEach(function (rowItem, rowIndex) {
            $('#' + rowItem.searchID).val(rowItem.searchVal);
        });
    }
    else {
        w2ui['grid'].searchReset();
    }
}

function ManageClick(clickOption) {
    // var clickOption = { ClickFn: mngItem.click, RecId: "##recid##" };
    var fnName = clickOption.ClickFn;
    var recId = clickOption.RecId;
    var rowData = w2ui['grid'].get(recId);

    var callbackFunction = eval(fnName);
    callbackFunction(rowData);
}

