<%@ Page Language="C#" AutoEventWireup="true" CodeFile="FileUpload.aspx.cs" Inherits="Private_FrontOffice_IPBilling_FileUpload" %>

<%@ Register Src="../../UserControls/MultipleFileUpload.ascx" TagName="MultipleFileUpload"
    TagPrefix="uc1" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="../../../Assets/css/multifileupload.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="../../../Assets/js/jquery.js"></script>
    <script type="text/javascript" src="../../../Assets/js/json.js"></script>
    <style type="text/css">
        
    </style>
    <script type="text/javascript">
        function OnSaveDMSAlert() {
//            alert('Documents Saved!');
            window.parent.$(".stoast").toastText("Success", "Documents Saved", 5, 1);
            window.parent.btnDMSclose();
        }
        function OnSaveUpdateDMSAlertFTP() {
            //            alert('Documents Saved!');
            window.parent.$(".stoast").toastText("Success", "Ftp Not Working.Please Contact to Administrator.", 5, 3);
            window.parent.btnDMSclose();
        }

        function OnSaveUpdateDMSAlertFail() {
            //            alert('Documents Saved!');
            window.parent.$(".stoast").toastText("Alert", "Save Failed", 5, 3);
        }

        $(document).ready(function () {
            if(window.parent.document.getElementById('ctl00_ContentPlaceHolder1_headerControl1_hdnDMSFtp')!=null)
            window.parent.document.getElementById('ctl00_ContentPlaceHolder1_headerControl1_hdnDMSFtp').value = $('[id*=hdnftpcheck]').val();
        });
        
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <uc1:MultipleFileUpload ID="MultipleFileUpload1" runat="server" />
    <div style="height: 200px; display: none;">
        <table style="display: none;">
            <tr>
                <td>
                    Choose Images&nbsp;:
                </td>
                <td>
                    <asp:FileUpload ID="fileUpload1" runat="server" />
                </td>
            </tr>
            <tr>
                <td>
                    <label>
                        Comments</label>
                </td>
                <td>
                </td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <asp:Button ID="btnUpload" runat="server" Text="Upload" />
                    <asp:HiddenField ID="hdnftpcheck" runat="server" />
                </td>
            </tr>
        </table>
    </div>
    </form>
    <%--    <script type="text/javascript">
//        function DynamicData() {
//        }
    </script>--%>
</body>
</html>
