// Single / Multi selection dropdown with search functionality
var tSelectOne = { id: -1, text: "Select One", disabled: false, filter: "", renderValue: "", renderFieldWidth: "", renderItemHeaders: "", recordStatus: "", valueL2: "", filterL2: "" };
var dropdownDataSources = [];
var filterSources = [];
var pagename = '';
var MultiSelectDropdown = {
    dropdownID: "",               // Dropdown ID to which data to be binded
    webServiceURL: "",            // If data to be retrieved from Web Service, URL of the service
    webServiceParams: null,       // If data to be retrieved from Web Service, parameters to the service
    webServiceAsDataSource: true, // Data to be retrieved from Web Service or not (true or false)
    offlineDataSource: null,      // If static data to be binded to dropdown, data should be array of objects. Object template: { id: <<id>>, text: <<text>>, filter: <<filter>>, renderValue: <<renderValue>>, renderFieldWidth: <<renderFieldWidth>> }
    parseData: false,             // If Offline Data is provided and data to be parsed to the structure which is required to bind the dropdown
    valueFields: "",              // Value field(s) of dropdown, should be '|' delimited
    displayFields: "",            // Display field(s) of dropdown, should be '|' delimited
    filterDataOn: "",             // If data to be filter based on parent dropdow, should be '|' delimited
    renderFields: "",             // If more data to be displayed in dropdown, should be '|' delimited (Data will be displayed in tabular format)
    renderFieldWidth: "",         // If more data to be displayed, each field width, should be '|' delimited (If not given all fields will be alloated equal width)
    renderTitles: "",             // If more data to be displayed, title to each field, should be '|' delimited
    renderItemHeaders: "",        // If more data to be displayed, title to each field, should be '|' delimited
    openOnFocus: true,            // If dropdown list to be opened on focus to the control
    maxRows: 2,                   // Maximum rows to be allowed, if multiple items are selected
    maxSelection: 0,              // Maximum No. of items to be selected. (If not given, user can select as many they want)
    valueFieldL2: "",             // Value field(s) of dropdown, should be '|' delimited
    filterDataOnL2: "",           // If data to be filter based on parent dropdow, should be '|' delimited
    overwriteData: true,
    BindData: function () {
        var dataList, fieldSet = [];
        if (MultiSelectDropdown.webServiceAsDataSource == true || (MultiSelectDropdown.offlineDataSource != null && MultiSelectDropdown.parseData == true)) {
            if (MultiSelectDropdown.webServiceAsDataSource == true) {
                GetNonAsync(
                        MultiSelectDropdown.webServiceURL,
                        MultiSelectDropdown.webServiceParams,
                        function (data) {
                            dataList = data.d[0];
                        },
                        function (jqXHR, textStatus, errorThrown) {
                        });
            }
            else if (MultiSelectDropdown.offlineDataSource != null && MultiSelectDropdown.parseData == true) {
                dataList = MultiSelectDropdown.offlineDataSource;
            }
            $.each(dataList, function (index, row) {
                var lvValue = "";
                var tValueFields = MultiSelectDropdown.valueFields.split('|');
                tValueFields.forEach(function (valField, vIndex) {
                    lvValue += (row[valField] != undefined ? row[valField] : row[index][valField]) + "-";
                });
                if (lvValue.length > 0) lvValue = lvValue.substring(0, lvValue.length - 1);

                var lvText = "";
                var tDisplayFields = MultiSelectDropdown.displayFields.split('|');
                tDisplayFields.forEach(function (dispField, dIndex) {
                    lvText += (row[dispField] != null ? row[dispField] : '') + " # ";
                });
                if (lvText.length > 0) lvText = lvText.substring(0, lvText.length - 3);

                var lvFilter = "";
                if (MultiSelectDropdown.filterDataOn != "") {
                    var tFilterValue = MultiSelectDropdown.filterDataOn.split('|');
                    tFilterValue.forEach(function (filterField, vIndex) {
                        lvFilter += (row[filterField] != null ? row[filterField] : "") + "-";
                    });
                    if (lvFilter.length > 0) lvFilter = lvFilter.substring(0, lvFilter.length - 1);
                }

                var lvRenderField = "";
                if (MultiSelectDropdown.renderFields != "") {
                    var tRenderValue = MultiSelectDropdown.renderFields.split('|');
                    tRenderValue.forEach(function (renderField, vIndex) {
                        lvRenderField += (row[renderField] != null ? row[renderField] : "") + "|";
                    });
                    if (lvRenderField.length > 0) lvRenderField = lvRenderField.substring(0, lvRenderField.length - 1);
                }

                var lvRecordStatus = "";
                if (row["RECORD_STATUS"] != undefined) lvRecordStatus = row["RECORD_STATUS"];

                var lvValL2 = "";
                if (MultiSelectDropdown.valueFieldL2 != "") {
                    var tValL2 = MultiSelectDropdown.valueFieldL2.split('|');
                    tValL2.forEach(function (valL2, vIndex) {
                        lvValL2 += (row[valL2] != null ? row[valL2] : "") + "|";
                    });
                    if (lvValL2.length > 0) lvValL2 = lvValL2.substring(0, lvValL2.length - 1);
                }

                var lvFilterL2 = "";
                if (MultiSelectDropdown.filterDataOnL2 != "") {
                    var tFilterL2 = MultiSelectDropdown.filterDataOnL2.split('|');
                    tFilterL2.forEach(function (filterL2, vIndex) {
                        lvFilterL2 += (row[filterL2] != null ? row[filterL2] : "") + "|";
                    });
                    if (lvFilterL2.length > 0) lvFilterL2 = lvFilterL2.substring(0, lvFilterL2.length - 1);
                }

                var listItem = { id: lvValue, text: lvText, disabled: false, filter: lvFilter, renderValue: lvRenderField, renderFieldWidth: MultiSelectDropdown.renderFieldWidth, renderItemHeaders: MultiSelectDropdown.renderItemHeaders, recordStatus: lvRecordStatus, valueL2: lvValL2, filterL2: lvFilterL2, rowid: index, dropdownID: MultiSelectDropdown.dropdownID };
                fieldSet.push(listItem);
            });
        }
        else {
            fieldSet = MultiSelectDropdown.offlineDataSource;
        }
        if (length != undefined) {
            if (fieldSet.length > 0 && fieldSet[0].id != -1) {
                fieldSet.unshift(tSelectOne);
            }
        }

        if (MultiSelectDropdown.overwriteData == true) {
            var bDropdownFound = false;
            $.each(dropdownDataSources, function (index, row) {
                if (row.dropdownID == MultiSelectDropdown.dropdownID) bDropdownFound = true;
            });
            if (bDropdownFound == false) {
                var tempDDSource = { dropdownID: MultiSelectDropdown.dropdownID, dataSource: fieldSet };
                dropdownDataSources.push(tempDDSource);
            }
        }
        $('#' + MultiSelectDropdown.dropdownID).w2destroy();
        $('#' + MultiSelectDropdown.dropdownID).w2field('enum',
                {
                    items: fieldSet,
                    openOnFocus: MultiSelectDropdown.openOnFocus,
                    maxHeight: MultiSelectDropdown.maxRows * 26,
                    max: MultiSelectDropdown.maxSelection,
                    renderItem: function (item, index, remove) {
                        var displayAs = "";
                        if (item.id != -1) {
                            var curDtTime = new Date();
                            var tempItem = "";
                            var tHeaders = item.renderItemHeaders.split("|");
                            var tItems = item.text.split('#');
                            tempItem += "<table cellpadding=1 cellspacing=1>";
                            for (var iItem = 0; iItem < tItems.length; iItem++) {
                                tempItem += "<tr><td>" + tHeaders[iItem] + "</td>" +
                                        "<td>" + (tHeaders[iItem] == "" ? "&nbsp;" : ":") + "</td>" +
                                        "<td>" + tItems[iItem] + "</td></tr>";
                            }
                            tempItem += "</table>";
                            if (tempItem.length > 0) tempItem = tempItem.substring(0, tempItem.length - 4);
                            var spanID = "span" + curDtTime.getHours() + "_" + curDtTime.getMinutes() + "_" + curDtTime.getSeconds() + "_" + curDtTime.getMilliseconds() + "_" + index;
                            var onMouseOver = " onmouseover=\"$('#" + spanID + "').w2tag('" + tempItem + "', { position: 'top' })\"";
                            var onMouseOut = " onmouseout=\"$('#" + spanID + "').w2tag()\"";
                            displayAs = remove + "<span id='" + spanID + "'" + onMouseOver + onMouseOut + ">" + item.text.split('#')[0] + "<span>";
                            if (item.recordStatus == 'I') {
                                item.style = 'background-color: #FCE5CD; border: 1px solid #E69138;';
                            }
                            return displayAs;
                        }
                        else {
                            item.style = 'display:none;';
                        }
                    },
                    renderDrop: function (item, options) {
                        var header = '';

                        /*if (item.rowid == 0 && item.renderItemHeaders != '') {
                        var dropdownWidth = parseInt($('#' + item.dropdownID).css('width').replace('px', '')) - 27;
                        var titles = item.renderItemHeaders.split('|');
                        var thisRenderTitlePerc = [];
                        if (item.renderFieldWidth != "") {
                        thisRenderTitlePerc = item.renderFieldWidth.split('|');
                        }
                        else {
                        for (var iCol = 0; iCol < titles.length; iCol++) {
                        thisRenderTitlePerc.push(100 / titles.length);
                        }
                        }

                        header = '<table style="width:' + dropdownWidth + 'px;position:fixed;margin-top:-12px;margin-left:-3px;"><tr style="background-color:#01a2d8;color:white;font-weight:bold;height:20px;">';
                        for (var iCol = 0; iCol < titles.length; iCol++) {
                        header += '<td style="width:' + thisRenderTitlePerc[iCol] + '%">' + (iCol == 0 ? "&nbsp;" : "") + titles[iCol] + '</td>'
                        }
                        header += '</tr></table><br>';
                        };*/

                        if (item.id != -1) {
                            var renderAs = item.text;
                            if (item.renderValue != "") {
                                var thisRenderVals = item.renderValue.split('|');
                                var thisRenderColPerc = [];
                                if (item.renderFieldWidth != "") {
                                    thisRenderColPerc = item.renderFieldWidth.split('|');
                                }
                                else {
                                    for (var iCol = 0; iCol < thisRenderVals.length; iCol++) {
                                        thisRenderColPerc.push(100 / thisRenderVals.length);
                                    }
                                }
                                var renderAs = '<table width="100%"><tr>';
                                for (var iCol = 0; iCol < thisRenderVals.length; iCol++) {
                                    if (item.recordStatus == 'I') {
                                        renderAs += '<td style="color:#E69138;width:' + thisRenderColPerc[iCol] + '%">' + thisRenderVals[iCol] + '</td>'
                                    } else {
                                        renderAs += '<td style="width:' + thisRenderColPerc[iCol] + '%">' + thisRenderVals[iCol] + '</td>'
                                    }

                                }
                                renderAs += '</tr></table>';
                            } else {
                                if (item.recordStatus == 'I') {
                                    renderAs = "<span style='color:#E69138;'>" + renderAs + "</span>";
                                }
                            }
                            return header + renderAs;
                        }
                        else {
                            item.style = 'display:none;';
                        }
                    }
                });
        $('#' + MultiSelectDropdown.dropdownID).w2field().refresh();
        $('#' + MultiSelectDropdown.dropdownID).removeAttr('placeholder');
        $('#' + MultiSelectDropdown.dropdownID).w2field().set(tSelectOne);
        return fieldSet;
    },
    FilterData: function (parentDropdownID, childDropdownID, preserveData, filterLevel) {
        var tFilter = "MultiSelectDropdown.FilterDataAndReBind('" + parentDropdownID + "', '" + childDropdownID + "', true, '" + filterLevel + "')";
        $('head').append("<script>setInterval(function () {" + tFilter + "}, 1000);<\/script>");
    },
    FilterDataAndReBind: function (parentDropdownID, childDropdownID, preserveData, filterLevel) {
        var parentSelItems = MultiSelectDropdown.GetSelectedList(parentDropdownID);

        var bReBind = true, bDropdownFound = false, prevSelected = "";
        $.each(filterSources, function (index, row) {
            if (row.parentDropdownID == parentDropdownID && row.childDropdownID == childDropdownID) {
                bDropdownFound = true;
                if (row.seletedItems == parentSelItems)
                    bReBind = false;
                else
                    row.seletedItems = parentSelItems;
            }
        });

        if (bDropdownFound == false) filterSources.push({ parentDropdownID: parentDropdownID, childDropdownID: childDropdownID, seletedItems: parentSelItems });
        if (bReBind == false) { return; }

        var lvFilterData = [];
        var selectedSource = $('#' + parentDropdownID).data('selected');
        var selectedDest = $('#' + childDropdownID).data('selected');
        var bIsParentEmpty = (selectedSource.length > 0 ? false : true);
        var srcDataSource = fn_FilterData(dropdownDataSources, childDropdownID);

        if (selectedSource != undefined) {
            if (filterLevel == "L1") {
                $.each(selectedSource, function (index, row) {
                    var filterData = $.grep(srcDataSource, function (objFilter, index) {
                        if (row.id != -1) {
                            if (objFilter.filter == row.id)
                                return objFilter;
                        }
                    });
                    $.each(filterData, function (index, row) {
                        lvFilterData.push(row);
                    });
                });
            }
            else if (filterLevel == "L2") {
                $.each(selectedSource, function (index, row) {
                    var filterData = $.grep(srcDataSource, function (objFilter, index) {
                        if (row.valueL2 != -1 && row.valueL2 != "") {
                            if (objFilter.filterL2 == row.valueL2)
                                return objFilter;
                        }
                    });
                    $.each(filterData, function (index, row) {
                        lvFilterData.push(row);
                    });
                });
            }

            if (lvFilterData.length == 0) {
                lvFilterData = srcDataSource;
            }
            if (preserveData == true) {
                if (selectedDest != undefined && selectedDest.length != 0) {
                    var selList = [];
                    $.each(selectedDest, function (index, row) {
                        var filterList = $.grep(lvFilterData, function (objFilter, index) {
                            if (objFilter.filter == row.filter)
                                return objFilter;
                        });
                        if (filterList.length == 0) {
                            selList.push(row);
                        }
                    });
                    if (selList.length > 0) {
                        for (var iRow = selList.length - 1; iRow >= 0; iRow--) {
                            lvFilterData.unshift(selList[iRow]);
                        }
                    }
                }
            }

            $.each(lvFilterData, function (index, row) {
                row.rowid = index;
            });
            MultiSelectDropdown.ClearMe();
            MultiSelectDropdown.dropdownID = childDropdownID;
            MultiSelectDropdown.offlineDataSource = lvFilterData;
            MultiSelectDropdown.webServiceAsDataSource = false;
            MultiSelectDropdown.overwriteData = false;
            MultiSelectDropdown.BindData();

            if (preserveData == true) {
                if (selectedDest != undefined && selectedDest.length != 0) {
                    $.each(selectedDest, function (index, row) {
                        $('#' + childDropdownID).w2field().set(row, (index == 0 ? false : true));
                    });
                }
            }
            else if (bIsParentEmpty == false) {
                var selIndex = 0;
                $.each(selectedDest, function (index, row) {
                    var filterList = $.grep(lvFilterData, function (objFilter, index) {
                        if (objFilter.filter == row.filter)
                            return objFilter;
                    });
                    if (filterList.length != 0) {
                        $('#' + childDropdownID).w2field().set(row, (selIndex == 0 ? false : true));
                        selIndex++;
                    }
                });
            }
        }
    },
    GetSelectedList: function (dropdownID) {
        var selectedList = $('#' + dropdownID).data('selected');
        var selectedItems = "";
        if (selectedList != undefined) {
            $.each(selectedList, function (index, row) {
                if (row.id != "-1") selectedItems += row.id + ",";
            });
            if (selectedItems.length > 0) selectedItems = selectedItems.substring(0, selectedItems.length - 1);
        }
        return selectedItems;
    },
    GetSelectedText: function (dropdownID, tIndex) {
        if (index == undefined || index == null) index = 0;
        if (tIndex == undefined || tIndex == null) tIndex = 0;
        var selectedList = $('#' + dropdownID).data('selected');
        var selectedItems = "";
        if (selectedList != undefined) {
            $.each(selectedList, function (index, row) {
                if (row.id != "-1") selectedItems += '[' + row.text.split(' # ')[tIndex] + "],";
            });
            if (selectedItems.length > 0) selectedItems = selectedItems.substring(0, selectedItems.length - 1);
        }
        if (selectedItems == "") selectedItems = "[ALL]";
        selectedItems = selectedItems.replace(/\#/g, '-');
        return selectedItems;
    },
    ClearMe: function () {
        MultiSelectDropdown.dropdownID = "";
        MultiSelectDropdown.webServiceURL = "";
        MultiSelectDropdown.webServiceParams = null;
        MultiSelectDropdown.webServiceAsDataSource = true;
        MultiSelectDropdown.offlineDataSource = null;
        MultiSelectDropdown.parseData = false;
        MultiSelectDropdown.valueFields = "";
        MultiSelectDropdown.displayFields = "";
        MultiSelectDropdown.filterDataOn = "";
        MultiSelectDropdown.renderFields = "";
        MultiSelectDropdown.renderFieldWidth = "";
        MultiSelectDropdown.renderTitles = "";
        MultiSelectDropdown.renderItemHeaders = "";
        MultiSelectDropdown.openOnFocus = true;
        MultiSelectDropdown.maxRows = 2;
        MultiSelectDropdown.maxSelection = 0;
        MultiSelectDropdown.valueFieldL2 = "";
        MultiSelectDropdown.filterDataOnL2 = "";
        MultiSelectDropdown.overwriteData = true;
    },
    ClearDropdown: function (dropdownID) {
        var dataToBind = fn_FilterData(dropdownDataSources, dropdownID);
        MultiSelectDropdown.ClearMe();
        MultiSelectDropdown.dropdownID = dropdownID;
        MultiSelectDropdown.offlineDataSource = dataToBind;
        MultiSelectDropdown.webServiceAsDataSource = false;
        MultiSelectDropdown.overwriteData = false;
        MultiSelectDropdown.BindData();

        $('#' + dropdownID).removeAttr('readonly');
        $('#' + dropdownID).closest('td').find('div:first').removeClass('w2ui-readonly');
        $('#' + dropdownID).closest('td').find('input:first').removeAttr('readonly', 'readonly');
    },
    DisableMe: function (dropdownID) {
        $('#' + dropdownID).attr('readonly', 'readonly');
        $('#' + dropdownID).closest('td').find('div:first').addClass('w2ui-readonly');
        $('#' + dropdownID).closest('td').find('input:first').attr('readonly', 'readonly');
    },
    EnableMe: function (dropdownID) {
        MultiSelectDropdown.ClearDropdown(dropdownID);
        //                $('#' + dropdownID).removeAttr('readonly');
        //                $('#' + dropdownID).closest('td').find('div:first').removeClass('w2ui-readonly');
        //                $('#' + dropdownID).closest('td').find('input:first').removeAttr('readonly', 'readonly');
        //                $('#' + MultiSelectDropdown.dropdownID).w2field().refresh();
    },
    OverwriteDataSource: function (dropdownID, dataSource) {
        $.each(dropdownDataSources, function (index, row) {
            if (row.dropdownID == dropdownID) row.dataSource = dataSource;
        });
    }
}
function fn_FilterData(dataSource, dropdownID) {
    if (dataSource.length > 0) {
        var tDataSource = $.grep(dataSource, function (objFilter, index) {
            if (objFilter.dropdownID == dropdownID)
                return objFilter;
        });
        return (tDataSource.length > 0 ? tDataSource[0].dataSource : []); ;
    }
    else
        return [];
}

// Dynamic Grid with search, filter and export options
var DynamicGrid = {
    divID: "",               // DIV ID to which data to be binded
    webServiceURL: "",       // If data to be retrieved from Web Service, URL of the service
    webServiceParams: null,  // If data to be retrieved from Web Service, parameters to the service
    fileName: "Download",
    filterHeader: false,
    showExpand: false,
    showHeader: true,
    gridCols: [],
    dateFormat: '',
    timeFormat: '',
    fromDate: '',
    toDate: '',
    footerItems: [],
    advSearch: false,
    checkAllDateID: "",
    BindGridData: function () {
        $("#progressshow").show();
        $('#' + DynamicGrid.divID).w2destroy('grid');
        var wsData = [];
        //var gridCol = [];
        GetAsync(
                DynamicGrid.webServiceURL,
                DynamicGrid.webServiceParams,
                function (Data) {
                    if (pagename == 'REGISTER') {
                        var datetime = new Date().format('dd-MMM-yyyy hh:mm:ss');
                        document.getElementById('ctl00_ContentPlaceHolder1_lblrunningtime').innerHTML = datetime;
                    }
                    wsData = Data.d;
                    if (wsData != null) {
                        if (wsData.length > 0) {
                            var gridData = wsData[0];

                            if (DynamicGrid.gridCols.length == 0) {
                                if (gridData.length > 0) {
                                    for (var key in gridData[0]) {
                                        if (key != 'ROW' && key != 'SNO' && key != 'ROW_SNO' && key != 'COL_SNO' && key != "TOT_RECORD_CNT" && key.match("_ID") == null && key.match("_REV_NO") == null) {
                                            DynamicGrid.gridCols.push({ DBField: key, Caption: toTitleCase(key), Sortable: true, Searchable: true, DataType: 'text' });
                                        }
                                    }
                                }
                            }
                        }

                        SuvarnaGrid.wsPath = DynamicGrid.webServiceURL;
                        SuvarnaGrid.params = DynamicGrid.webServiceParams;
                        SuvarnaGrid.gridCols = DynamicGrid.gridCols;
                        SuvarnaGrid.divID = DynamicGrid.divID;
                        SuvarnaGrid.FileName = DynamicGrid.fileName;
                        SuvarnaGrid.unlockDivID = DynamicGrid.divID;
                        SuvarnaGrid.filterHeader = DynamicGrid.filterHeader;
                        SuvarnaGrid.dateFormat = (DynamicGrid.dateFormat == '' ? 'dd-MMM-yyyy' : DynamicGrid.dateFormat);
                        SuvarnaGrid.timeFormat = (DynamicGrid.timeFormat == '' ? 'HH:mm:ss' : DynamicGrid.timeFormat);
                        SuvarnaGrid.showExpand = DynamicGrid.showExpand;
                        SuvarnaGrid.fromDate = DynamicGrid.fromDate;
                        SuvarnaGrid.toDate = DynamicGrid.toDate;
                        SuvarnaGrid.footerItems = DynamicGrid.footerItems;
                        SuvarnaGrid.showHeader = DynamicGrid.showHeader;
                        SuvarnaGrid.advSearch = DynamicGrid.advSearch;
                        SuvarnaGrid.checkAllDateID = DynamicGrid.checkAllDateID;
                        populateGird(gridData);
                        $("#progressshow").hide();
                        if (gridData == '') {
                            $("#" + DynamicGrid.divID).html("<h2 style='font-size: 26px;color: rgb(242, 68, 101);font-weight: normal;position: absolute;top: 110px;left: 33%;text-align: center'><i class=' icon-pencil-1' style='  border-radius: 50%;background: #eee;padding: 11px;display: inline-block;margin-right: 10px;'></i> No Record(s) found</h2>");
                        }
                    } else {
                        $("#progressshow").hide();
                        $(".stoast").toastText("Warning", "No data found", 5, 3);
                        return false;
                    }
                },
                function (jqXHR, textStatus, errorThrown) {
                    $("#progressshow").hide();
                    $(".stoast").toastText("Warning", "Error while generating report", 5, 3);
                });
    }
}

function toTitleCase(str) {
    str = (str.replace(/\_/g, " ")).toLowerCase();
    return str.replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}

// Report Formats Types Popup
var ReportFormatTypes = {
    OptionsListID: "",
    DocumentID: "",
    ShowFormatTypes: function (forcePopup) {
        var tempDefaultFormatID = "", tempDefaultFormatName = "";
        if ($('#divFormatTypes') != undefined) { $('#divFormatTypes').remove(); }

        var sPopupContent = "";
        GetNonAsync(
                "VisitDet.asmx/GetReportFormat",
                { DOC_ID: ReportFormatTypes.DocumentID },
                function (Data) {
                    repFormats = JSON.parse(Data.d);
                },
                function (jqXHR, textStatus, errorThrown) {
                });

        sPopupContent += "<table cellpadding='2' cellspacing='2'>";
        if (repFormats.length > 0) {
            for (var iRow = 0; iRow < repFormats.length; iRow++) {
                if (repFormats[iRow].DEFAULT_FORMAT != "") {
                    tempDefaultFormatID = repFormats[iRow].DEFAULT_FORMAT;
                    //$('#hdnFormatType').val(repFormats[iRow].DEFAULT_FORMAT);
                    //$('#hdnPrevDefaultFormat').val(repFormats[iRow].DEFAULT_FORMAT);
                }
                var sChecked = (repFormats[iRow].DOC_FORMAT_ID == repFormats[iRow].DEFAULT_FORMAT ? "checked" : "");
                tempDefaultFormatName = (repFormats[iRow].DOC_FORMAT_ID == repFormats[iRow].DEFAULT_FORMAT ? repFormats[iRow].DOC_FORMAT_DESC : "");
                sPopupContent += "<tr>";
                sPopupContent += "<td style='width:2%'><input type='radio' id='rdFormat" + (iRow.toString()) + "' name='rdFormat' value='" + repFormats[iRow].DOC_FORMAT_DESC + "' " + sChecked + " onclick='ReportFormatTypes.CheckThis(this.value);'></td>";
                sPopupContent += "<td><label for='rdFormat" + (iRow.toString()) + "'>" + repFormats[iRow].DOC_FORMAT_NAME + "<label></td>";

                sPopupContent += "<td style='width:2%'><input type='checkbox' id='rdDefaultFormat" + (iRow.toString()) + "' name='rdDefaultFormat' value='" + repFormats[iRow].DOC_FORMAT_ID + "' " + sChecked + " onclick='ReportFormatTypes.SetDefaultFormat(this.value, " + (iRow.toString()) + ");'></td>";
                sPopupContent += "<td style='width:20%'><label for='rdDefaultFormat" + (iRow.toString()) + "'>Set as Default<label></td>";

                sPopupContent += "</tr>";
            };
        }
        sPopupContent += "</table>";

        var divContent = '<div id="divFormatTypes" class="masking">' +
                         '<div class="cmask"></div>' +
                         '<div class="clientpopup" style="margin-left: -250px; margin-top: -150px; width: 450px;">' +
                         '<div class="pop-header">' +
                         '<h1>Report Format Types</h1>' +
                         '<input type="button" value="×" onclick="return ReportFormatTypes.ClosePopup();" id="btnCloseRerType" class="cbutton" buttonaction="cancelButton" />' +
                         '</div>' +
                         '<div class="pop-body" style="padding: 10px 5px 10px 5px; overflow: auto; height: 130px;">' +
                         sPopupContent +
                         '</div>' +
                         '<div style="text-align:center;font-size:medium;height:30px;">Click <b>OK</b> to get report</div>' +
                         '<div style="text-align:center;height:30px;"><button id="syesbutton" onclick="return ReportFormatTypes.OKClick();">Ok</button><button id="snobutton" onclick="return ReportFormatTypes.ClosePopup();">Cancel</button></div>' +
                         '</div>' +
                         '<input type="hidden" id="hdnFormatType" />' +
                         '<input type="hidden" id="hdnOkRequired" />' +
                         '<input type="hidden" id="hdnDefaultFormat" />' +
                         '<input type="hidden" id="hdnPrevDefaultFormat" />' +
                         '</div>';
        $(document.body).append(divContent);
        $('#hdnFormatType').val(tempDefaultFormatName);
        $('#hdnPrevDefaultFormat').val(tempDefaultFormatID);

        if ($('#hdnFormatType').val() == "" || forcePopup == true) {
            $('[id*=divFormatTypes]')[0].style.display = 'block';
            $('#hdnOkRequired').val('N');
        }
        else {
            $('[id*=divFormatTypes]')[0].style.display = 'none';
            $('#hdnOkRequired').val('Y');
            ShowPrint();
        }
    },
    ClosePopup: function () {
        $('[id*=divFormatTypes]')[0].style.display = 'none';
    },
    CheckThis: function (repFormat) {
        $('#hdnFormatType').val(repFormat);
    },
    OKClick: function () {
        if ($('#hdnFormatType').val() == "") {
            $(".stoast").toastText("Info", "Please select Report Format Type", 5, 2);
        }
        else {
            if ($('#hdnDefaultFormat').val() != $('#hdnPrevDefaultFormat').val()) {
                ReportFormatTypes.UpdateDefault(ReportFormatTypes.DocumentID, $('#hdnDefaultFormat').val());
            }
            $('[id*=divFormatTypes]')[0].style.display = 'none';
            ShowPrint();
        }
    },
    SetDefaultFormat: function (defaultFormat, index) {
        $.each($('[id*=rdDefaultFormat]'), function (tindex, trow) {
            $('#rdDefaultFormat' + tindex).prop('checked', false);
        });

        $('#rdDefaultFormat' + index).prop('checked', true);
        $('#hdnDefaultFormat').val(defaultFormat);
    },
    UpdateDefault: function (DocID, ReportFormat) {
        GetNonAsync(
                "VisitDet.asmx/UpdateDefaultFormat",
                { DOC_ID: ReportFormatTypes.DocumentID, DEFAULT_FORMAT_ID: $('#hdnDefaultFormat').val() },
                function (Data) {
                    var res = JSON.parse(Data.d);
                },
                function (jqXHR, textStatus, errorThrown) {
                });
    }
};
function CheckReportFormats(showPopup) {
    var docSelected = $('[id*=' + ReportFormatTypes.OptionsListID + '] option:selected').val();
    var docID = docSelected.split('_')[0];
    with (ReportFormatTypes) {
        DocumentID = docID;
        ShowFormatTypes(showPopup);
    };
}
$(document).on("keydown", function (event) {
    if (event.keyCode == 113) {
        CheckReportFormats(true);
    };
});

// Auto Complete
var autoCompleteDivIds = [];
function fn_BindAutoCompleteData(textCtrlID, valueCtrlID, divID, wsURL, prefix, textItem, valueItem) {
    autoCompleteDivIds.push(divID);
    $('#' + valueCtrlID).val("");
    $('#' + divID).html('');
    $('#' + divID).css("display", "none");
    if (prefix.length >= 3) {
        GetNonAsync(
                wsURL,
                { PREFIX: prefix, FLAG: 'ICD' },
                function (Data) {
                    var acData = JSON.parse(Data.d);
                    var acItems = "";
                    if (acData.length > 0) {
                        var rowID = 0;
                        $.each(acData, function (index, row) {
                            row[textItem] = row[textItem].replace(/\"/g, '`').replace(/\'/g, '`');
                            row[valueItem] = row[valueItem].replace(/\"/g, '`').replace(/\'/g, '`');
                            var thisRowVal = JSON.stringify(row).replace(/\"/g, '\"');
                            acItems += "<li><div onclick='fn_GetSelected(\"" + row[valueItem] + "\", \"" + row[textItem].replace(/\"/g, '`') + "\", \"" + valueCtrlID + "\", \"" + textCtrlID + "\", \"" + divID + "\")'>" +
                                       "<h3>" + row[textItem] + "</h3>" +
                                       "<label>" + row[valueItem] + "</label></div></li>";
                        });
                        acItems = "<ul class='divscroll'>" + acItems + "<div class='clr'></div></ul>";
                    }
                    else {
                        acItems = "No items found";
                    }
                    $('#' + divID).html(acItems);
                },
                function (jqXHR, textStatus, errorThrown) {
                });
        $('#' + divID).css("display", "block");
    }
}
function fn_GetSelected(valueItem, textItem, valueCtrlID, textCtrlID, divID) {
    $('#' + valueCtrlID).val(valueItem);
    $('#' + textCtrlID).val(textItem);
    $('#' + divID).css("display", "none");
}
$(document).on('click', function (event) {
    $.each(autoCompleteDivIds, function (index, divID) {
        $('#' + divID).html('');
        $('#' + divID).css("display", "none");
    });
});
$(document).keyup(function (e) {
    var key = (e.keyCode ? e.keyCode : e.charCode);
    if (key == 27) {
        $.each(autoCompleteDivIds, function (index, divID) {
            $('#' + divID).html('');
            $('#' + divID).css("display", "none");
        });
    }
});