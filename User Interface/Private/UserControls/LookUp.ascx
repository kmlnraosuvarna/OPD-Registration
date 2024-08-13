<%@ Control Language="C#" AutoEventWireup="true" EnableViewState="false" CodeFile="~/Private/UserControls/LookUp.ascx.cs"
    Inherits="LookUp" %>
<%--<div class="lkmain lookupmain">--%>
<div class="lookupcontrol">
    <asp:TextBox ID="txtSearchControl" runat="server" CssClass="lookuptextbox" autocomplete="off"
        onkeypress="return LookUpKeyPress(this);" />
    <div class="lookupcontrolbutton">
        <input type="button" id="lk_btn_<%=this.ClientID%>" value="&nbsp;" class="Mbutton" />
        <asp:ImageButton ID="imgbtnSearch" runat="server" Style="display: none;" />
    </div>
    <%--</div>--%>
    <div id="lk_txt_options_<%=this.ClientID%>" class="lk_auto_options divscroll">
    </div>
</div>
<div id="<%=this.ClientID%>" data-dlist="<%=getDlist()%>" tabindex="-1" style="z-index: 999999;
    position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; display: none;">
    <div id="Lcmask">
    </div>
    <div class="lookupmodal mainlookup">
        <div style="position: relative;" class="lookupcore">
            <div class="lookup-header lrow-1">
                <h1>
                    <asp:Label ID="lbl_Title" runat="server" />
                </h1>
                <input type="button" value="&times;" class="cbutton" />
            </div>
            <div class="lookup-body">
                <div class="lk_header lrow-12">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tbody>
                            <tr>
                                <td>
                                    <input type="button" id="bnt_search" name="test" value="Adv Search" class="lk_adv_search last" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="lk_body">
                    <div class="lrow-13" style="margin: 0px 5px 0px 5px;">
                        <table border="0" cellpadding="0" cellspacing="3" class="lk_table_controls">
                            <tr>
                              
                                <td>
                                    <div class="btn-search-group ">
                                        <input type="button" value="A" class="sbtn" />
                                        <input type="button" value="B" class="sbtn" />
                                        <input type="button" value="C" class="sbtn" />
                                        <input type="button" value="D" class="sbtn" />
                                        <input type="button" value="E" class="sbtn" />
                                        <input type="button" value="F" class="sbtn" />
                                        <input type="button" value="G" class="sbtn" />
                                        <input type="button" value="H" class="sbtn" />
                                        <input type="button" value="I" class="sbtn" />
                                        <input type="button" value="J" class="sbtn" />
                                        <input type="button" value="K" class="sbtn" />
                                        <input type="button" value="L" class="sbtn" />
                                        <input type="button" value="M" class="sbtn" />
                                        <input type="button" value="N" class="sbtn" />
                                        <input type="button" value="O" class="sbtn" />
                                        <input type="button" value="P" class="sbtn" />
                                        <input type="button" value="Q" class="sbtn" />
                                        <input type="button" value="R" class="sbtn" />
                                        <input type="button" value="S" class="sbtn" />
                                        <input type="button" value="T" class="sbtn" />
                                        <input type="button" value="U" class="sbtn" />
                                        <input type="button" value="V" class="sbtn" />
                                        <input type="button" value="W" class="sbtn" />
                                        <input type="button" value="X" class="sbtn" />
                                        <input type="button" value="Y" class="sbtn" />
                                        <input type="button" value="Z" class="sbtn" />
                                        <input type="button" value="All" class="sbtn" />
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="lk_table_find lrow-14">
                        <table border="0" cellpadding="0" cellspacing="3" class="lk_table_controls">
                            <tr>
                                <td width="50px">
                                    Find
                                </td>
                                <td width="125px">
                                    <div style="position: relative;">
                                        <input type="text" id="_lk_<%=this.ClientID%>" name="_lk_<%=this.ClientID%>" class="lk_search lk_txt_search" />
                                        <div class="lk_autooptions lk_auto_options">
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <select class="dpl_colmns" id="_lk_dpl_<%=this.ClientID%>" name="_lk_dpl_<%=this.ClientID%>">
                                    </select>
                                </td>
                                <td>
                                    <input type="button" id="btn_fnd_<%=this.ClientID%>" name="btn_fnd_<%=this.ClientID%>"
                                        value="&nbsp;" class="lk_search tb_Btn searchbtn " />
                                </td>
                                  <td>
                                    <i id="_assend_<%=this.ClientID%>" class="icon-up updown tooltip" title="Ascending Order">
                                    </i><i id="_dessend_<%=this.ClientID%>" class="icon-down updown select tooltip" title="Descending Order">
                                    </i>
                                    <asp:DropDownList ID="ddlsort" runat="server" class="lk_sortorder" Style="display: none;">
                                        <asp:ListItem Value="ASC" Text="Ascending"></asp:ListItem>
                                        <asp:ListItem Value="DESC" Text="Descending" Selected="True"></asp:ListItem>
                                    </asp:DropDownList>
                                </td>
                                <td>
                                    <asp:RadioButtonList ID="rbtnfuzzy" runat="server" RepeatDirection="Horizontal" RepeatLayout="Flow" CssClass="chk-list1">
                                        <asp:ListItem Value="1" Text="Like" Selected="True"></asp:ListItem>
                                        <asp:ListItem Value="2" Text="Sounds Like"></asp:ListItem>
                                        <asp:ListItem Value="3" Text="Start with"></asp:ListItem>
                                        <asp:ListItem Value="4" Text="End with"></asp:ListItem>
                                        <asp:ListItem Value="5" Text="Exact"></asp:ListItem>
                                    </asp:RadioButtonList>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="gtblh lrow-2">
                        <table class="lk_tbl_body jtblgrid looktbl" border="0" cellpadding="0" cellspacing="0">
                            <thead>
                                <tr>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="lookup-footer lk_footer lrow-15">
                <table width="100%" border="0" align="center" cellspacing="0" cellpadding="0">
                    <tbody>
                        <tr>
                            <td align="left">
                                Page&nbsp;<b><span class="span_current_page">1</span></b>&nbsp;of&nbsp;<b><span class="span_total_records">
                                </span></b>&nbsp;Records
                            </td>
                            <td align="right">
                                <div class="pull-right pagination">
                                    <input type="button" id="first" class="pg_first" value="&lt;&lt;" />
                                    <input type="button" id="prev" class="pg_prev" value="&lt;" />
                                    <input type="button" id="next" class="pg_next" value="&gt;" />
                                    <input type="button" id="last" class="pg_last" value="&gt;&gt;" />
                                </div>
                                <div class="pull-right" style="padding: 1px 5px 0 0; height: 25px;">
                                    <span style="vertical-align: middle; padding-top: 2px;">Show Rows </span>
                                    <select class="pg_page_size" style="width: 50px !important; vertical-align: middle;"
                                        id="_pg_dpl_<%=this.ClientID%>" name="_pg_dpl_<%=this.ClientID%>" tabindex="0">
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20" selected="selected">20</option>
                                    </select>
                                    <span style="vertical-align: middle; padding-top: 3px;">Page</span>
                                    <input type="text" style="width: 30px !important; vertical-align: middle;" class="pg_page_number"
                                        id="_pg_txt_<%=this.ClientID %>" name="_pg_txt_<%=this.ClientID %>" value="1"
                                        tabindex="0">
                                    <span style="vertical-align: middle; padding-top: 2px;">of</span> <span style="vertical-align: middle;
                                        padding-top: 2px;" id="_pg_tPage_<%=this.ClientID %>" class="span_total_pages">
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="lookup-loader">
                <div class="preloader">
                    &nbsp;</div>
            </div>
        </div>
    </div>
    <div style="display: none;">
        <asp:HiddenField runat="server" ID="hdn_preCond" />
        <asp:HiddenField runat="server" ID="hdn_auto_srv_method" />
        <asp:HiddenField runat="server" ID="hdn_srv_method" />
        <asp:Label runat="server" ID="lbl_lk_name" CssClass="lookupName" />
        <asp:HiddenField runat="server" ID="_hiddenID" />
        <asp:HiddenField runat="server" ID="_hiddenID1" />
        <asp:HiddenField runat="server" ID="_hiddenText" />
        <asp:HiddenField runat="server" ID="hdn_key_columns" />
        <asp:HiddenField runat="server" ID="hdn_selected_item_json" />
        <asp:HiddenField runat="server" ID="hdnprefixlength" />
        <asp:HiddenField runat="server" ID="hdnfiltercreteria" />
        <asp:HiddenField runat="server" ID="hdnsortorder" />
        <asp:HiddenField runat="server" ID="hdnautoextracols" />
        <asp:HiddenField runat="server" ID="hdnisDefaultLoad" />
        <input type="hidden" class="resetSearch" name="searchposition" value="0" />

    </div>
</div>
<script type="text/javascript">
//var _url='<%=ConfigurationManager.AppSettings["PortName"] %>';
var _url = _iniUrl;
    $("#<%=this.ClientID%>").lookupControl(<%= this.CallbackFn %>,{    
        dataURL:_url+'LookupService.asmx/GetLookUpSearchData',
        autoSuggest:_url+document.getElementById('<%=hdn_auto_srv_method.ClientID %>').value,
        contextKey:'<%=SET_CONTEXT_KEY %>',
        dataKey:document.getElementById('<%=hdn_key_columns.ClientID %>').value,
        flag:document.getElementById('<%=hdn_preCond.ClientID %>').value,
        filtercreteria:document.getElementById('<%=hdnfiltercreteria.ClientID %>').value,
        lookuptextboxid:$('#<%=txtSearchControl.ClientID%>'),
        lookuptextboxoptions:'#lk_txt_options_<%=this.ClientID%>',
        lookupval:$('#<%=_hiddenID.ClientID %>'),
        lookupval:$('#<%=_hiddenID1.ClientID %>'),
        lookupText:$('#<%=_hiddenText.ClientID %>'),
        lookupoptions:$('#<%=hdn_selected_item_json.ClientID %>'),
        lookupbuttonid:'#lk_btn_<%=this.ClientID%>',
        onBlurReqired:'<%=OnBlurRequired %>',
	    IsPrefixLenReqired:'<%=IsPrefixLenRequired %>',
        isUMR:'<%=IsUMR %>',
        SortOrder:document.getElementById('<%=hdnsortorder.ClientID %>').value,
        IsExtraColsReqinAuto:'<%=IsReqExtraColsinAuto %>',
        AutoExtraCols:'<%=AutoExtraCols %>',
        AutocomplereDataURL:_url+'LookupAutoService.asmx/GetLookUpSearchData',
        IsAutoCompleteJson:'<%=IsAutoCompleteJson %>',
        prefixLength:document.getElementById('<%=hdnprefixlength.ClientID %>').value,
        isDefaultLoad:document.getElementById('<%=hdnisDefaultLoad.ClientID %>').value
    });


</script>
<script language="javascript" type="text/javascript">
    function LookUpValidation(obj, hdnControl) {
        if (obj.val() == "" || hdnControl.val() == "") {
            obj.focus();
        }
    }

    function LookUpKeyPress(obj) {
        if (obj.value == null || obj.value == "" || obj.value == '') {
            var ID = obj.id.substring(0, obj.id.length - 16);
            var HiddenID = ID + '_hiddenID';
            var HdntxtSerchName = ID + '_hiddenText';
            if ((document.getElementById(HiddenID).value != null) && (document.getElementById(HiddenID).value != "") & (document.getElementById(HiddenID).value != "0")) {
                document.getElementById(HiddenID).value = '';
                document.getElementById(HdntxtSerchName).value = '';
                $('.smessagebox').hide();
                return false;
            }
        }
    }
</script>
