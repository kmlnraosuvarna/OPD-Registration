      function IsResultNumeric(ev) {
            var kcode = window.event ? event.keyCode : ev.which;
            if ((kcode == 46) || (kcode >= 48 && kcode <= 57) || (kcode == 8) || (kcode == 0) || kcode == 190 || kcode == 110)
                return true;
            return false;
        }

        var rowIndex;
        var HdnAntibiotics;
        function ShowAnitbioticsPopup(row, id) {

            rowIndex = row;
            HdnAntibiotics = id;
            var kcode = window.event ? event.keyCode : ev.which;
            if (kcode == 113) {
             document.getElementById(id).focus();
                document.getElementById(id).click();
            }
          
        }

        function EnableDisableCheckboxes() {
            var grid = document.getElementById('ctl00_ContentPlaceHolder1_gvcomponents');
            var _sel_values = '';
            for (var _row = 1; _row < grid.rows.length; _row++) {
                // get the previously selected  checkbox values from hidden controls
                _sel_values = _sel_values + grid.rows[1].cells[1].children[0].value
            }
        }

        function selectAntibiotics() {
//                document.getElementById('ctl00_ContentPlaceHolder1_chkantibiotics').focud();
            var chkAnti = document.getElementById('ctl00_ContentPlaceHolder1_chkantibiotics').childNodes[0];
            var grid = document.getElementById('ctl00_ContentPlaceHolder1_gvcomponents');
            var _sel_values = '';
            for (var _row = 1; _row < grid.rows.length; _row++) {
                // get the previously selected  checkbox values from hidden controls
                _sel_values = _sel_values + grid.rows[1].cells[1].children[0].value
            }
            //alert(_sel_values);
            var _hiddenField = document.getElementById(HdnAntibiotics);
            debugger;
            for (var i = 0; i < chkAnti.childNodes.length; i++) {
                //process the row level values
                for (var _cell_index = 0; _cell_index < chkAnti.childNodes[i].childNodes.length; _cell_index++) {
                    // process the column level values
                    //check whether the checkbox is checked or not
                    if (chkAnti.childNodes[i].childNodes[_cell_index].childNodes[0].checked == true) {
                        //if the check box selection is true then add the innertext to the hidden variable...
                        var _sel_chk_text = chkAnti.childNodes[i].childNodes[_cell_index].innerText;
                        var _indexof = _sel_values.indexOf(_sel_chk_text + ',');
                        if (parseInt(_indexof) > -1) {
                            chkAnti.childNodes[i].childNodes[_cell_index].childNodes[0].disabled = true;
                        }
                        else {
                            _hiddenField.value = _hiddenField.value + _sel_chk_text + ',';
                        }

                    }
                }
            }
        }
        function showTextarea(id) {

            $(document.getElementById(id)).htmlarea();

        }
        function ClosePopup() {
            $find('ctl00_ContentPlaceHolder1_chkmodal').hide();
            return false;
        }
        function pageLoad() {

            document.getElementById('ctl00_ContentPlaceHolder1__uPnl').className = 'UpDt';
             //document.getElementById('ctl00_ContentPlaceHolder1_updpnl').className = 'UpDt';
             
            var a = document.getElementById('ctl00_ContentPlaceHolder1_rdBtnPattype_0');
            var b = document.getElementById('ctl00_ContentPlaceHolder1_rdBtnPattype_1');
            if (a.checked == true) {
            
                document.getElementById('ctl00_ContentPlaceHolder1_radioptype').disabled=false;
              
            }
            else if (b.checked == true) {
                document.getElementById('ctl00_ContentPlaceHolder1_radioptype').disabled=true;
            
            }
            
            var _chkValidation = true;
            var _ctrls = new Array();

            _ctrls[1] = 'ctl00_ContentPlaceHolder1_ucbills_txtSearchControl';
            _ctrls[2]='ctl00_ContentPlaceHolder1_ucInPatient_txtSearchControl';

            for (var i = 0; i < _ctrls.length; i++) {
                var ctrl = document.getElementById(_ctrls[i]);
                if (OnNullValue(ctrl) == false) {

                    _chkValidation = false;
                }
            }
            return _chkValidation;
        }

        function Clearpopup() {
            document.getElementById('ctl00_ContentPlaceHolder1_ucpartners_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_ucbills_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_ucInPatient_txtSearchControl').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_txtpatientname').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_txtumrno').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_txtgender').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_txtage').value = '';
            document.getElementById('ctl00_ContentPlaceHolder1_txtconsultant').value = '';
            if(document.getElementById('ctl00_ContentPlaceHolder1_lblserviceformat')!=null)
                document.getElementById('ctl00_ContentPlaceHolder1_lblserviceformat').innerText = '';
            document.getElementById('ctl00_ContentPlaceHolder1_trOne').style.display = 'none';
            document.getElementById('ctl00_ContentPlaceHolder1_trTwo').style.display = 'none';
            return false;
        }

        function CheckValidation() {

            if (document.getElementById('ctl00_ContentPlaceHolder1_ucbills_txtSearchControl').value == '') {
                alert("Please enter BILL number");
                document.getElementById('ctl00_ContentPlaceHolder1_ucbills_txtSearchControl').focus();
                return false;
            }
            
            var grid = document.getElementById('ctl00_ContentPlaceHolder1_gvServices');
            if (grid != null) {
                var inputs = grid.getElementsByTagName("input");
                var isValid = false;
                for (var i = 0; i < inputs.length; i += 1) {
                    if (inputs[i].type === "checkbox") {
                        if (inputs[i].checked === true) {
                            isValid = true;
                            break;
                        }
                    }
                }
                if (!isValid) {
                    alert('Select atleast one service.');
                    return isValid;
                }

            }
            else {
                return false;
            }

            var grid = document.getElementById('ctl00_ContentPlaceHolder1_gvServices');
            if (grid != null) {
                var inputs = grid.getElementsByTagName("input");
                var isValid = false;
                for (var i = 0; i < inputs.length; i += 1) {
                    if (inputs[i].type === "checkbox") {
                        if (inputs[i].checked === true) {
                            isValid = true;
                            break;
                        }
                    }
                }
                if (!isValid) {
                    alert('Select atleast one service.');
                    return isValid;
                }

            }
            else {
                return false;
            }
        }
        function OnItemSelected(sender, eventArgs) {
            var results = eval('(' + eventArgs.get_value() + ')');
            document.getElementById('ctl00_ContentPlaceHolder1_txtremarks').value = results.Text;
        }
        function OnItemSelected1(sender, eventArgs) {
            var results = eval('(' + eventArgs.get_value() + ')');
            document.getElementById('ctl00_ContentPlaceHolder1_txtnote').value = results.Text;
        }

        function checkResultValue(event) {
           //debugger;
            var grid = document.getElementById('ctl00_ContentPlaceHolder1_gvcomponents');
            var Grid = document.getElementById('ctl00_ContentPlaceHolder1_gvServices');
            var chkFlag = 0;
            var Flag = 1;
            for (var i = 1; i < Grid.rows.length; i++) {
                if (Grid.rows[i].cells[0].childNodes[0].checked == true) {
                    chkFlag++;
                }
            }
            if (event.checked == true) {
                if (grid != null) {
                    for (var i = 0; i < grid.rows.length; i++) {
                    debugger;
                        if (grid.rows[i].cells[1].children[0] != null) {
                            //finding textbox
                            if (grid.rows[i].cells[1].children[0].value == "")
                                Flag++;
                        }

                        if (grid.rows[i].cells[1].children[1] != null) {
                            //finding multiline textbox
                            if (grid.rows[i].cells[1].children[1].value == "")
                                Flag++;

                        }
                        if (grid.rows[i].cells[1].children[2] != null) {
                            //Finding HiddenTextbox
                            if (grid.rows[i].cells[1].children[2].value == "") {
                                Flag++;
                            }
                        }
                    }
                    if (chkFlag > 1) {
                        if (Flag >= grid.rows.length) {
                            alert("Plz Enter Atleast One Resultvalue");
                            return false;
                        }
                    }
                }
                setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$gvServices$ctl02$chkservice\',\'\')', 0);
            }
            else {

                //__doPostBack('ctl00_ContentPlaceHolder1_gvServices_chkservice', '');
                setTimeout('__doPostBack(\'ctl00$ContentPlaceHolder1$gvServices$ctl02$chkservice\',\'\')', 0);
                //document.getElementById('ctl00_ContentPlaceHolder1_ucformats_txtSearchControl').value='';
                return true;
            }
        }

        function CheckValidation(obj, event) {
//debugger;
            var grid = document.getElementById('ctl00_ContentPlaceHolder1_gvcomponents');
            var Flag = 1;
            var cmbFlag = 0;
            if (grid != null) {
                for (var i = 0; i < grid.rows.length; i++) {
                    if (grid.rows[i].cells[1].children[0] != null) {
                        //finding textbox
                        if (grid.rows[i].cells[1].children[0].value == "")
                            Flag++;
                    }

                    if (grid.rows[i].cells[1].children[1] != null) {
                        //finding multiline textbox
                        if (grid.rows[i].cells[1].children[1].value == "")
                            Flag++;

                    }
                    if (grid.rows[i].cells[1].children[2] != null) {
                        //Finding HiddenTextbox
                        if (grid.rows[i].cells[1].children[2].value == "") {
                            Flag++;
                        }
                    }
                }
                if (Flag >= grid.rows.length) {
                    alert('Plz Enter Atleast One Resultvalue Before Saving');
                    return false;
                }
                return ConfirmationRequiredForSave(obj);
            }
        }

        function EnableDisableControls(event) {
            Clearpopup();

             
            var a = document.getElementById('ctl00_ContentPlaceHolder1_rdBtnPattype_0');
            var b = document.getElementById('ctl00_ContentPlaceHolder1_rdBtnPattype_1');
            if (a.checked == true) {
               
                document.getElementById('ctl00_ContentPlaceHolder1_radioptype').disabled=false;
                document.getElementById('ctl00_ContentPlaceHolder1_tdIP').style.display = 'block';
                document.getElementById('ctl00_ContentPlaceHolder1_tdOP').style.display = 'none';
            }
            else if (b.checked == true) {
             document.getElementById('ctl00_ContentPlaceHolder1_radioptype_2').selected=true;
                document.getElementById('ctl00_ContentPlaceHolder1_radioptype').disabled=true;
                document.getElementById('ctl00_ContentPlaceHolder1_tdIP').style.display = 'none';
                document.getElementById('ctl00_ContentPlaceHolder1_tdOP').style.display = 'block';
            }
        }


        function OnDeselect() {
            var grid = document.getElementById('ctl00_ContentPlaceHolder1_GridView1');
            OnDeSelectAll(grid, 0);
        }       
        function selectAll(sender) {
            //debugger;
            var grid = document.getElementById('ctl00_ContentPlaceHolder1_GridView1');
            OnSelectAll(grid, 0, sender);
        }

        function BussinesParnter() {
            //debugger;
            var chk = document.getElementById('ctl00_ContentPlaceHolder1_chkoutside');
            var bussinesspartner = document.getElementById('ctl00_ContentPlaceHolder1_ucpartners_txtSearchControl');
            var bussinesspartner1 = document.getElementById('ctl00_ContentPlaceHolder1_ucpartners_imgbtnSearch');
            if (chk.checked == true) {
                bussinesspartner.disabled = false;
                bussinesspartner1.disabled = false;
            }
            else { bussinesspartner.disabled = true; bussinesspartner1.disabled = true; }
        }
        
 function CompareDate(sender) 
     {            
            var dt1 = document.getElementById('ctl00_ContentPlaceHolder1_txtformdt').value;
            var dt2 = document.getElementById('ctl00_ContentPlaceHolder1_txttodt').value;
            if(dt1!='' && dt2!='')
            var result = CompareDates(dt1, dt2);
            if (result == "d1>=d2") 
            {
                alert("You must enter FromDate greater than the ToDate.");                
                 sender._selectedDate = new Date();
                sender._textbox.set_Value(sender._selectedDate.format(sender._format))
                document.getElementById('ctl00_ContentPlaceHolder1_txttodt').focus();
                return false;
            }
     }
     
     
     
   function ChkReportValidation() {
         
            var a = document.getElementById('ctl00_ContentPlaceHolder1_rdBtnPattype_0');
            var b = document.getElementById('ctl00_ContentPlaceHolder1_rdBtnPattype_1');
            var hndue = document.getElementById('ctl00_ContentPlaceHolder1_hdndue');
             var d = document.getElementById('ctl00_ContentPlaceHolder1_hdnmessage');
             
            if (a.checked == true) {
                if (confirm('Do you want print?')) {
                    $find('ctl00_ContentPlaceHolder1_model1').show();
                    return false;
                }
                else { window.location = './NewResultEntry.aspx'; }
            }
            else if (b.checked == true) 
            {
               if(parseInt(hndue.value)>0)
               {
                    if (d.value == 'Message') {
                        if (confirm('Patient has due,still do you want print?')) {
                            $find('ctl00_ContentPlaceHolder1_model1').show();
                            return false;
                        }
                        else { window.location = './NewResultEntry.aspx'; }
                     }
                     else if (d.value == 'Validation') 
                     {
                        alert('Patient has due do not have a Permission to Print..');
                        window.location = './NewResultEntry.aspx';
                     }
                     else
                     {
                       $find('ctl00_ContentPlaceHolder1_model1').show();
                         return false;
                     }
               }
               else
               {
                       $find('ctl00_ContentPlaceHolder1_model1').show();
                         return false;
               }

            }
        }
            function deletethistextbox(event) {
//debugger;
            var grid = document.getElementById('ctl00_ContentPlaceHolder1_gvcomponents');
            //var Flag = 0;
            if (grid != null) {
                for (var i = 0; i < grid.rows.length; i++) {
                    
                    if (grid.rows[i].cells[1].children[3] != null) {
                        //Finding HiddenTextbox
                        if(grid.rows[i].cells[1].children[3].id=event.id)
                        {
                        if(event.value=='')
                        grid.rows[i].cells[1].children[2].value='';}                      
                        }                                
                    }                     
              }
             
              }