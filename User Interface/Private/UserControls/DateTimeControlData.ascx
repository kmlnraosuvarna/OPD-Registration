<%@ Control Language="C#" AutoEventWireup="true" CodeFile="DateTimeControlData.ascx.cs"
    Inherits="Private_UserControls_DateTimeControl" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="ajax" %>

<script type="text/javascript">

 function CheckFromDate()
    {
  
            var SDate = document.getElementById('<%=txtfromdate.ClientID %>').value;
            var EDate = document.getElementById('<%= txttodate.ClientID%>').value;
            var firstIndex = SDate.indexOf("-");
            var secondIndex = SDate.lastIndexOf("-");
            var d1 = SDate.substring(0, firstIndex);
            var m1 = SDate.substring(firstIndex + 1, secondIndex);
            if (m1 == 'Jan') { m1 = 1 } if (m1 == 'Feb') { m1 = 2 } if (m1 == 'Mar') { m1 = 3 }
            if (m1 == 'Apr') { m1 = 4 } if (m1 == 'May') { m1 = 5 } if (m1 == 'Jun') { m1 = 6 }
            if (m1 == 'Jul') { m1 = 7 } if (m1 == 'Aug') { m1 = 8 } if (m1 == 'Sep') { m1 = 9 }
            if (m1 == 'Oct') { m1 = 10 } if (m1 == 'Nov') { m1 = 11 } if (m1 == 'Dec') { m1 = 12 }
            var y1 = SDate.substring(secondIndex + 1, SDate.length);
            var SDateFull = m1 + "/" + d1 + "/" + y1;
            var d2 = EDate.substring(0, firstIndex);
            var m2 = EDate.substring(firstIndex + 1, secondIndex);
            if (m2 == 'Jan') { m2 = 1 } if (m2 == 'Feb') { m2 = 2 } if (m2 == 'Mar') { m2 = 3 }
            if (m2 == 'Apr') { m2 = 4 } if (m2 == 'May') { m2 = 5 } if (m2 == 'Jun') { m2 = 6 }
            if (m2 == 'Jul') { m2 = 7 } if (m2 == 'Aug') { m2 = 8 } if (m2 == 'Sep') { m2 = 9 }
            if (m2 == 'Oct') { m2 = 10 } if (m2 == 'Nov') { m2 = 11 } if (m2 == 'Dec') { m2 = 12 }
            var y2 = EDate.substring(secondIndex + 1, EDate.length);
            var EDateFull = m2 + "/" + d2 + "/" + y2;
            var currDt = new Date().format('dd-MMM-yyyy hh:mm:ss tt');
            var startDate = new Date(y1, m1, d1);
            var endDate = new Date(y2, m2, d2);
            if (SDate != '' && EDate != '' && SDate > EDate) {
                alert('"TODATE"  must be greater than "FROMDATE" date!.');
                document.getElementById('<%=txtfromdate.ClientID %>').value=currDt;
                document.getElementById('<%=txtfromdate.ClientID %>').focus();
                 document.getElementById('<%= txttodate.ClientID%>').value=currDt;
                document.getElementById('<%= txttodate.ClientID%>').focus();
                if(('<%= txttodate.ClientID%>').CheckFromDate)
                {
                   showtimepm();
                   return false;
                   }
                 if(('<%= txtfromdate.ClientID%>').CheckFromDate)
                 {
                    showtimeam();
                return false;
                }
                return false;
            }
         
            if(EDate>currDt)
            {
            alert("To Date cannot be greater than today's Date");
             document.getElementById('<%= txttodate.ClientID%>').value=currDt;
                document.getElementById('<%= txttodate.ClientID%>').focus();
                   showtimepm();
                return false;
            }
             showtimepm();
            return false;
              
        }
   function  assigntime(txt)
   {
  var exactdate= document.getElementById('<%= txtfromdate.ClientID%>').value;
   if(exactdate.length>=11)
   {
    exactdate=exactdate.substring(0,11);
    document.getElementById('<%= txtfromdate.ClientID%>').value=exactdate+' '+txt;
   }
   $find('<%= model1.ClientID%>').hide();
   }
    function  assignamandpm(obhh)
   {
  var corecttime= document.getElementById('<%= txttodate.ClientID%>').value;
  if(corecttime.length>=11)
   {
    corecttime=corecttime.substring(0,11);
    document.getElementById('<%= txttodate.ClientID%>').value=corecttime+' '+obhh;
   }
   $find('<%= ModalPopupExtender1.ClientID%>').hide();
   }   
</script>

<script type="text/javascript">
function showtimeam(sender)
{
  $find('<%= model1.ClientID%>').show();
}
function showtimepm(sender)
{
  $find('<%= ModalPopupExtender1.ClientID%>').show();
}
 function CompareDateam(sender) 
     {            
            var dt1 = document.getElementById('<%=txtfromdate.ClientID %>').value;
            var dt2 = document.getElementById('<%=txttodate.ClientID %>').value;
            if(dt1!='' && dt2!='')
            var result = CompareDates(dt1, dt2);
            if (result == "d1>=d2") 
            {
                alert("You must enter FromDate greater than the ToDate.");                
                 sender._selectedDate = new Date();
               // set the date back to the current date
                sender._textbox.set_Value(sender._selectedDate.format(sender._format))
                document.getElementById('<%=txttodate.ClientID %>').focus();
                return false;
            }
            else{$find('<%= model1.ClientID%>').show();}
     }
      function CompareDatepm(sender) 
     {            
            var dt1 = document.getElementById('<%=txtfromdate.ClientID %>').value;
            var dt2 = document.getElementById('<%=txttodate.ClientID %>').value;
            if(dt1!='' && dt2!='')
            var result = CompareDates(dt1, dt2);
            if (result == "d1>=d2") 
            {
                alert("You must enter FromDate greater than the ToDate.");                
                 sender._selectedDate = new Date();
               // set the date back to the current date
                sender._textbox.set_Value(sender._selectedDate.format(sender._format))
                document.getElementById('<%=txttodate.ClientID %>').focus();
                return false;
            }
            else{$find('<%= ModalPopupExtender1.ClientID%>').show();}
     }


</script>


    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td align="left"  class="cfromdt">
                <asp:TextBox ID="txtfromdate" runat="server" ></asp:TextBox>
            
                <asp:ImageButton Visible="false" ID="imgfromam" runat="server" ImageAlign="Top" ImageUrl="~/WorkFlowImages/timepicker.png" />
                <asp:Button ID="hh" runat="server" Style="display: none" />
            </td>
            <td align="left" class="ctodt">
                <asp:Label ID="lblto" runat="server" Text="To"></asp:Label>
            </td>
            <td align="left"  class="ctodttxt">
                <asp:TextBox ID="txttodate" runat="server" ></asp:TextBox>
          
                <asp:ImageButton Visible="false" ID="ImageButton1" runat="server" ImageAlign="Top"
                    ImageUrl="~/WorkFlowImages/timepicker.png" />
                <asp:Button ID="Button1" runat="server" Style="display: none" />
            </td>
        </tr>
    </table>

<div style="width: 100%;">
    <ajax:ModalPopupExtender ID="model1" runat="server" TargetControlID="Button1" PopupControlID="panam"
        X="46" Y="173" CancelControlID="imgclose">
    </ajax:ModalPopupExtender>
    <asp:Panel ID="panam" runat="server" Style="display: none; background-color: #ffffcc;
        border: 1px solid #226e0f; width: 40%;">
        <table cellpadding="0" cellspacing="0" width="100%" border="0" style="padding: 3px;">
            <tr>
                <td class="Fields_Rnd_Head1" width="73%">
                    <span style="float: left;">Select Time For Date</span>
                </td>
                <td class="Fields_Rnd_Head1" width="12%">
                    <span id="lsTab1" onclick="swapTb('lsTab1');" style="color: #023A6E; margin: 0; padding: 0;
                        width: 50px;">|&nbsp;AM&nbsp;|</span>
                </td>
                <td class="Fields_Rnd_Head1" width="12%">
                    <span id="lsTab2" onclick="swapTb('lsTab2');" style="color: #023A6E; margin: 0; padding: 0;
                        width: 55px;">|&nbsp;PM&nbsp;|</span>
                </td>
                <td align="right" width="3%">
                    <img runat="server" buttonaction="cancelButton" style="cursor: hand" id="imgclose"
                        src="~/Images/close.gif" />
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    <div id="tbCont1" style="height: 85%; overflow: auto; width: 98%; display: block;
                        padding: 0 0 4px 4px;">
                        <asp:DataList ID="dttime" runat="server" RepeatColumns="6" RepeatDirection="Horizontal"
                            OnItemDataBound="dttime_ItemDataBound" Width="100%" CssClass="DataList">
                            <AlternatingItemStyle BackColor="#E8F3FF" Height="24px" />
                            <ItemTemplate>
                                <asp:Label ID="lblkey" runat="server" Text='<%#Eval("Id") %>'></asp:Label>
                            </ItemTemplate>
                        </asp:DataList>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="4">
                    <div id="tbCont2" style="height: 85%; overflow: auto; width: 98%; display: none;
                        padding: 0 0 4px 4px;">
                        <asp:DataList ID="DataList1" runat="server" RepeatColumns="6" RepeatDirection="Horizontal"
                            OnItemDataBound="DataList1_ItemDataBound" Width="100%" CssClass="DataList">
                            <AlternatingItemStyle BackColor="#E8F3FF" Height="24px" />
                            <ItemTemplate>
                                <asp:Label ID="lblkey" runat="server" Text='<%#Eval("Id") %>'></asp:Label>
                            </ItemTemplate>
                        </asp:DataList>
                    </div>
                </td>
            </tr>
        </table>
    </asp:Panel>

    <ajax:ModalPopupExtender ID="ModalPopupExtender1" runat="server" TargetControlID="hh"
        PopupControlID="Panel1" X="252" Y="173" CancelControlID="img1">
    </ajax:ModalPopupExtender>
    <asp:Panel ID="Panel1" runat="server" Style="display: none; background-color: #ffffcc;
        border: 1px solid #226e0f; width: 40%;">
        <div>
            <table cellpadding="0" cellspacing="0" width="100%" border="0" style="padding: 3px;">
                <tr>
                    <td class="Fields_Rnd_Head1" width="73%">
                        <span style="float: left;">Select Time For Date</span>
                    </td>
                    <td class="Fields_Rnd_Head1" width="12%">
                        <span id="Span1" onclick="swapTb2('Span1');" style="color: #023A6E; margin: 0; padding: 0;
                            width: 50px;">|&nbsp;AM&nbsp;|</span>
                    </td>
                    <td class="Fields_Rnd_Head1" width="12%">
                        <span id="Span2" onclick="swapTb2('Span2');" style="color: #023A6E; margin: 0; padding: 0;
                            width: 55px;">|&nbsp;PM&nbsp;|</span>
                    </td>
                    <td align="right" width="3%">
                        <img runat="server" buttonaction="cancelButton" style="cursor: hand" id="img1" src="~/Images/close.gif" />
                    </td>
                </tr>
                <tr>
                    <td colspan="4">
                        <div id="tbCont11" style="height: 85%; overflow: auto; width: 98%; display: block;
                            padding: 0 0 3px 4px;">
                            <asp:DataList ID="DataList2" runat="server" RepeatColumns="6" RepeatDirection="Horizontal"
                                OnItemDataBound="DataList2_ItemDataBound" CssClass="DataList" Width="100%">
                                <AlternatingItemStyle BackColor="#E8F3FF" Height="24px" />
                                <ItemTemplate>
                                    <asp:Label ID="lblkey" runat="server" Text='<%#Eval("Id") %>'></asp:Label>
                                </ItemTemplate>
                            </asp:DataList>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="4">
                        <div id="tbCont12" style="height: 85%; overflow: auto; width: 98%; display: none;
                            padding: 0 0 3px 4px;">
                            <asp:DataList ID="DataList3" runat="server" RepeatColumns="6" RepeatDirection="Horizontal"
                                OnItemDataBound="DataList3_ItemDataBound" CssClass="DataList" Width="100%">
                                <AlternatingItemStyle BackColor="#E8F3FF" Height="24px" />
                                <ItemTemplate>
                                    <asp:Label ID="lblkey" runat="server" Text='<%#Eval("Id") %>'></asp:Label>
                                </ItemTemplate>
                            </asp:DataList>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </asp:Panel>
</div>
