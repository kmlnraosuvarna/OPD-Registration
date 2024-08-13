 function BindData(data){
        var gridCols = []        
        var color='';
                  for (var key in dataRecSource[0]) {
                               if (key != 'ROW' && key != "TOT_RECORD_CNT" && key.match("_ID") == null) {
                                 var col = { field: key, caption: toTitleCase(key).split('-')[0], size: '100px', sortable: false, resizable: true, arrow: true }                
                                  gridCols.push(col)
                                 }

                    }
                        window.mycustomGrid = $('#divw2igridInner').w2grid({
                        name: 'divw2igridInner',
                                        show: {
                                            toolbar: true,
                                            footer: true,                                            
                                            toolbarReload: false,
                                            onReload: false,
                                            toolbar: true,
                                            lineNumbers: true                    
                                        },             
                                        columns: gridCols,
                                        records: myMultiDatar1,
                                        columnGroups: gridColGroups,
                                        summary: SuvarnaGrid.gridSummary,
                toolbar: {
                items: [
                    { type: 'spacer' },
                    { type: 'html', id: 'item5',
                        html: function (item) {
                            var html = '';
                            
                            if ($('[id*=hdnShowExport]').val() == 'Y' || $('[id*=hdnShowExportRep]').val() == "Y") {
                                html = '<div style="float: left;margin-left: -35px;margin-top: 10px;">' + '<div style="background: rgb(120, 201, 231); height: 10px; width: 10px; float: left; margin-right: 5px;">' + '</div>' +  
                        '<span id="ctl00_ContentPlaceHolder1_lblpri3">VIP</span>' +  '</div>' +'<div style="float: left;margin-left: -111px;margin-top: 10px;">' + '<div style="background: Pink; height: 10px; width: 10px; float: left;margin-right: 5px;">' + '</div>' +  
                        '<span id="ctl00_ContentPlaceHolder1_lblpri3">Corporate</span>' +  '</div>' +  '</div>'+ '<div style="padding: 3px 10px;">' +
                                     'Export To <input id="listExport">' +
                                       '</div>' +
                                       '<script>' +
                                       'var exportOptions = ["Select One", "Excel", "Word", "CSV"];' +
                                       '$("input[id=listExport]").w2field("list", { items: exportOptions });' +
                                       '$("#listExport").w2field().setIndex(0)' +
                                       '</script>';
                            }
                            return html;
                        }
                    },
                    { type: 'button', id: 'btnExport', text: 'Export', style: 'background-color:#01a2d8;color:#ffffff;height:25px;width:60px;text-align:center;font-weight:bold;margin-right:10px;display:' + ($('[id*=hdnShowExport]').val() == 'Y' || $('[id*=hdnShowExportRep]').val() == "Y" ? "" : "none") + ';' }
                ],
                onClick: function (event) {
                    if (event.target.toUpperCase() == 'BTNEXPORT') {
                        if ($('#listExport').w2field().get().id.toUpperCase() == "SELECT ONE") {
                            $(".stoast").toastText("Info", "Please select Export Option", 5, 2);
                        }
                        else {
                            lastSearchIds = 0;
                            bFilter = (lastSearchIds.length == w2ui['divw2igridInner'].records.length || lastSearchIds.length == 0 ? false : true);
                            

                            if (bFilter == true) {
                               
                                $(".smessagebox").scustommessagebox(1, "Export Data", "Filtered data is exporting to EXCEL, click OK to export", fn_ExportInpatient, "", ExportNoalert);
                            }
                            else {
                                fn_ExportCorp(bFilter, lastSearchIds);
                            }
                        }
                        
                    }
                    else if (event.target.toUpperCase() == 'BTNCLEARFILTER') {
                        w2ui['divw2igridInner'].searchReset();
                    }
                    event.done(function () {
                      
                    });
                    
                }
            },
                                     onClick:function(event) {                                                                                           
                                                 var selIndex = event.index; 
                                                 if(w2ui['divw2igridInner'].records[event.recid-1]["CITY_NAME"]==null){w2ui['divw2igridInner'].records[event.recid-1]["CITY_NAME"]='';}                                                
                                                 $(".stoast").toastText("Warning", "Address Name :"+w2ui['divw2igridInner'].records[event.recid-1]["CITY_NAME"]+"", 7, 2);
                                                 return false;                                            
                                     },
                        });

         GetSrvTariffColors();            
        }   
        function fn_ExportInpatient() {
    $("#progressshow").show();
    setTimeout(function () {

        var sExtension = "";
        switch ($('#listExport').w2field().get().id.toUpperCase()) {
            case "EXCEL": sExtension = '.xls'; break;
            case "WORD": sExtension = '.doc'; break;
            case "CSV": sExtension = '.csv'; break;
        }

        var curTime = new Date();
        var formatTime = curTime.getDate().toString() + (curTime.getMonth() + 1).toString() + curTime.getFullYear().toString() +
                     curTime.getHours().toString() + curTime.getMinutes().toString() + curTime.getSeconds().toString();
        var dRowIndex = 0, objOrgDet;

        var excelData = w2ui['divw2igridInner'].records;
        var gridCols = w2ui['divw2igridInner'].columns;
        var gridHtml = "<table border='1'>";

        gridHtml += "<tr style='position:absolute;'>";
        gridCols.forEach(function (col, index) {
            gridHtml += "<td style='background-color:#d6d5d7'><b>" + col.caption + "</b></td>";
        });
        gridHtml += "</tr>";

        excelData.forEach(function (row, rowIndex) {
                var bgColor = (dRowIndex % 2 != 0 ? "#f7f7f7" : "#ffffff");
                gridHtml += "<tr>";
                gridCols.forEach(function (col, colIndex) {
                    gridHtml += "<td style='background-color:" + bgColor + "'>" +  $($.parseHTML(w2ui['divw2igridInner'].getCellHTML(rowIndex, colIndex))).text()+ "</td>";
                });
                gridHtml += "</tr>";
                dRowIndex += 1;
        });
        gridHtml += "</table>";
        var data = new Blob([gridHtml], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
        });
        if(SuvarnaGrid.FileName =='Download'){ SuvarnaGrid.FileName='InPatientSearch';}
        var sFileName = ((SuvarnaGrid.FileName == "" ? $(document).find('title').text() :SuvarnaGrid.FileName) + '_' + SuvarnaGrid.fromDate + "_" + SuvarnaGrid.toDate + "_" + formatTime).replace(/\ /g, '_') + sExtension;
        saveAs(data, sFileName);
        
        $("#progressshow").hide();
    }, 1000);
}