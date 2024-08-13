<%@ Control Language="C#" AutoEventWireup="true" CodeFile="NewAddressDetails.ascx.cs" Inherits="Private_UserControls_NewAddressDetails" %>
<%@ Register Src="~/Private/UserControls/Lookup.ascx" TagName="GenericGrid" TagPrefix="GenericSearch" %>

<script type="text/javascript">
function OnAddressDetnew(results)
{ 

  if(results.RESULT!=null&&results.RESULT!=undefined)
  {
     OnAssignAddressDetailsnew(results.RESULT.AREA_ID,results.RESULT.AREA_NAME,results.RESULT.CITY_ID,results.RESULT.CITY_NAME,results.RESULT.STATE_ID,results.RESULT.STATE_NAME,results.RESULT.COUNTRY_ID,results.RESULT.COUNTRY_NAME,results.RESULT.PIN_CODE);
  }
  else
  {
     $("#ctl00_ContentPlaceHolder1_AreaUserControl1_txtSearchControl").val(results["_lktext"]);
     OnAssignAddressDetailsnew(results.AREA_ID, results.AREA_NAME, results.CITY_ID, results.CITY_NAME, results.STATE_ID, results.STATE_NAME, results.COUNTRY_ID, results.COUNTRY_NAME, results.PIN_CODE);
     var Area_Name = $('[id$=ucaddress2_AreaUserControl1_txtSearchControl]').val();
     if (Area_Name == "") {
         $('#ctl00_ContentPlaceHolder1_ucaddress2_AreaUserControl1_txtSearchControl').addClass('red');
     }
     else {
         $('#ctl00_ContentPlaceHolder1_ucaddress2_AreaUserControl1_txtSearchControl').removeClass('red');
     }

   }
}
function remove(ctrl)
{ 
var txt=document.getElementById(ctrl.id); 
var val=txt.value; 
for(i=0;i<val.length;i++) 
{ var code=val.charCodeAt(i); 
if(!(code>=48 && code<=57)) 
{  
txt.value=""; txt.focus(); 
return false; 
}
}
}
function OnAssignAddressDetailsnew(area_id, area_name, city_id, city_name, state_id, state_name,country_id,country_name,pincode) 
{
if(area_name!=undefined)
{ 
document.getElementById('<%=AreaUserControl1.FindControl("txtSearchControl").ClientID%>').value = area_name; 
document.getElementById('<%=AreaUserControl1.FindControl("_hiddenID").ClientID%>').value = area_id; 
document.getElementById('<%=AreaUserControl1.FindControl("_hiddenText").ClientID%>').value = area_name; 
document.getElementById('<%=hdnAreaId.ClientID%>').value = area_id; 
document.getElementById('<%=CityUserControl1.ClientID %>').value = city_name;  
document.getElementById('<%=hdncityid.ClientID %>').value = city_id; 
document.getElementById('<%=StateUserControl1.ClientID %>').value = state_name; 
document.getElementById('<%=hdnstateid.ClientID %>').value = state_id; 
document.getElementById('<%=CountryUserControl1.ClientID%>').value = country_name; 
document.getElementById('<%=hdncountryid.ClientID %>').value = country_id; 
//document.getElementById('<%=txtPin.ClientID %>').value =pincode; 

}

}
</script>

<table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" class="FormsCtrl" style="margin:0px !important">
    <tr>
        <td align="left" name="label">
            Address1
        </td>
        <td align="left" colspan="3">
            <asp:TextBox ID="txtAddress1" runat="server" MaxLength="64" autocomplete="off" CssClass="tbwidth" onkeyup="return OnNullValue(this);"
                ToolTip="Enter Address1"></asp:TextBox>
        </td>
    </tr>
    <tr>
        <td align="left" name="label">
            Address2
        </td>
        <td align="left" colspan="3">
            <asp:TextBox ID="txtAddress2" runat="server" MaxLength="64" autocomplete="off" ToolTip="Enter Address2"
                CssClass="tbwidth"></asp:TextBox>
        </td>
    </tr>
    <tr>
        <td align="left"  class="NAddr1" name="label">
            Area
        </td>
        <td align="left"  class="NAddr2">
            <GenericSearch:GenericGrid ID="AreaUserControl1" runat="server" CallbackFn="OnAddressDetnew" />
           
        </td>
        <td align="left"  class="NAddr3" name="label">
            City
        </td>
        <td align="left"  class="NAddr4">
            <asp:TextBox ID="CityUserControl1" runat="server" Enabled="false"></asp:TextBox>
            
        </td>
    </tr>
    <tr>
        <td align="left" name="label">
            State
        </td>
        <td align="left">
            <asp:TextBox ID="StateUserControl1" runat="server" Enabled="false"></asp:TextBox>
       
        </td>
        <td align="left" name="label">
            Country
        </td>
        <td align="left">
            <asp:TextBox ID="CountryUserControl1" runat="server" Enabled="false"></asp:TextBox>
          
        </td>
    </tr>
    <tr>
        <td align="left" name="label">
            <asp:Label ID="lblpin" runat="server" Text="Pin/Zip"></asp:Label>
        </td>
        <td align="left">
            <asp:TextBox ID="txtPin" runat="server" MaxLength="8" autocomplete="off" onkeypress="return chkNumeric(event);"
                ToolTip="Enter Zipcode"></asp:TextBox>
        </td>
        <td align="left">
        </td>
        <td align="left">
        </td>
    </tr>
</table>
<asp:HiddenField ID="hdnAreaId" runat="server" />
<asp:HiddenField ID="hdncityid" runat="server" />
<asp:HiddenField ID="hdnstateid" runat="server" />
<asp:HiddenField ID="hdncountryid" runat="server" />
