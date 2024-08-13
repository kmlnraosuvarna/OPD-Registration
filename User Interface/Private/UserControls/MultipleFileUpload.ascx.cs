using System;
using System.ComponentModel;
using System.Text;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using EzHms.DataAccessObject;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using EzHms.ModelEntity;

/// <summary>
/// This control is to upload multiple files.
/// </summary>
public partial class MultipleFileUpload : System.Web.UI.UserControl
{
    //This is Click event defenition for MultipleFileUpload control.
    public event MultipleFileUploadClick Click;

    /// <summary>
    /// The no of visible rows to display.
    /// </summary>
    private int _Rows = 6;
    public int Rows
    {
        get { return _Rows; }
        set { _Rows = value < 6 ? 6 : value; }
    }

    /// <summary>
    /// The no of maximukm files to upload.
    /// </summary>
    private int _UpperLimit = 0;
    public int UpperLimit
    {
        get { return _UpperLimit; }
        set { _UpperLimit = value; }
    }

    /// <summary>
    /// Methos for page load event.
    /// </summary>
    /// <param name="sender">Reference of the object that raises this event.</param>
    /// <param name="e">Contains information regarding page load click event data.</param>
    protected void Page_Load(object sender, EventArgs e)
    {
        lblCaption.Text = _UpperLimit == 0 ? "Maximum Files: No Limit" : string.Format("Maximum Files: {0}", _UpperLimit);
       // pnlListBox.Attributes["style"] = "overflow:auto;";
        //pnlListBox.Height = Unit.Pixel(20 * _Rows - 1);
        Page.ClientScript.RegisterStartupScript(typeof(Page), "MyScript", GetJavaScript());
        if (!IsPostBack)
        {
            BindDropDownList();
        }
    }
    void BindDropDownList()
    {
        DBDMS_FORMATS _Objdms = new DBDMS_FORMATS();
        int docid;
        docid = SessionHandler.DOCUMENT_ID;
        CollectionBase _collection = _Objdms.Get_DMS_Formats(docid);
        ddlFormats.DataSource = _collection;
        ddlFormats.DataTextField = "Text";
        ddlFormats.DataValueField = "value";
        ddlFormats.DataBind();
        ddlFormats.Items.Insert(0, new ListItem("--select--", "0"));
    }

    /// <summary>
    /// Methods for btnUpload Click event. 
    /// </summary>
    /// <param name="sender">Reference of the object that raises this event.</param>
    /// <param name="e">Contains information regarding button click event data.</param>
    protected void btnUpload_Click(object sender, EventArgs e)
    {
        // Fire the event.
        Click(this, new FileCollectionEventArgs(this.Request));
    }

    /// <summary>
    /// This method is used to generate javascript code for MultipleFileUpload control that execute at client side.
    /// </summary>
    /// <returns>Javascript as a string object.</returns>
    private string GetJavaScript()
    {
        StringBuilder JavaScript = new StringBuilder();

        JavaScript.Append("<script type='text/javascript'>");
        JavaScript.Append("var Id = 0;\n");
        JavaScript.AppendFormat("var MAX = {0};\n", _UpperLimit);
        JavaScript.AppendFormat("var DivFiles = document.getElementById('{0}');\n", pnlFiles.ClientID);
        JavaScript.AppendFormat("var DivListBox = document.getElementById('{0}');\n", pnlListBox.ClientID);
        JavaScript.AppendFormat("var BtnAdd = document.getElementById('{0}');\n", btnAdd.ClientID);
        JavaScript.AppendFormat("var txtremarks = document.getElementById('{0}');\n", txtremarks.ClientID);
        JavaScript.AppendFormat("var ddlFormats = document.getElementById('{0}');\n", ddlFormats.ClientID);
        JavaScript.AppendFormat("var hdnRemarks = document.getElementById('{0}');\n", hdnRemarks.ClientID);
        JavaScript.AppendFormat("var hdnFormats = document.getElementById('{0}');\n", hdnFormats.ClientID);
        JavaScript.AppendFormat("var hdnUMRNO = document.getElementById('{0}');\n", hdnUMRNO.ClientID);
        //JavaScript.AppendFormat("var hdnREGNO = document.getElementById('{0}');\n", hdnREGNO.ClientID);
        JavaScript.AppendFormat("var hdnADMNNO = document.getElementById('{0}');\n", hdnADMNNO.ClientID);
        JavaScript.AppendFormat("var hdntablename = document.getElementById('{0}');\n", hdntablename.ClientID);
        JavaScript.AppendFormat("var hdntblautocdGlobalcolumns=document.getElementById('{0}');\n", hdntblautocdGlobalcolumns.ClientID);
        JavaScript.AppendFormat("var hdntblautoidcolumns=document.getElementById('{0}');\n", hdntblautoidcolumns.ClientID);
        JavaScript.Append("function Add()");
        JavaScript.Append("{\n");
        JavaScript.Append("var IpFile = GetTopFile();\n");
        JavaScript.Append("if(IpFile == null || IpFile.value == null || IpFile.value.length == 0)\n");
        JavaScript.Append("{\n");
        JavaScript.Append("alert('Please select a file to add.');\n");
        JavaScript.Append("return;\n");
        JavaScript.Append("}\n");

        JavaScript.Append("var divFromats = ddlFormats.value;\n");
        JavaScript.Append("if(divFromats == null || divFromats == undefined || divFromats == 0)\n");
        JavaScript.Append("{\n");
        JavaScript.Append("alert('Please select a Format to add.');\n");
        JavaScript.Append("return;\n");
        JavaScript.Append("}\n");

        JavaScript.Append("var NewIpFile = CreateFile();\n");
        JavaScript.Append("DivFiles.insertBefore(NewIpFile,IpFile);\n");
        JavaScript.Append("if(MAX != 0 && GetTotalFiles() - 1 == MAX)\n");
        JavaScript.Append("{\n");
        JavaScript.Append("NewIpFile.disabled = true;\n");
        JavaScript.Append("BtnAdd.disabled = true;\n");
        JavaScript.Append("}\n");
        JavaScript.Append("IpFile.style.display = 'none';\n");
        JavaScript.Append("DivListBox.appendChild(CreateItem(IpFile));\n");
        JavaScript.Append("}\n");
        JavaScript.Append("function CreateFile()");
        JavaScript.Append("{\n");
        JavaScript.Append("var IpFile = document.createElement('input');\n");
        JavaScript.Append("IpFile.id = IpFile.name = 'IpFile_' + Id++;\n");
        JavaScript.Append("IpFile.type = 'file';\n");
        JavaScript.Append("return IpFile;\n");
        JavaScript.Append("}\n");
        JavaScript.Append("function CreateItem(IpFile)\n");
        JavaScript.Append("{\n");
        JavaScript.Append("var Item = document.createElement('div');\n");
       // JavaScript.Append("Item.style.backgroundColor = '#ffffff';\n");
        //JavaScript.Append("Item.style.fontWeight = 'normal';\n");
        //JavaScript.Append("Item.style.textAlign = 'left';\n");
       // JavaScript.Append("Item.style.verticalAlign = 'middle'; \n");
        //JavaScript.Append("Item.style.cursor = 'default';\n");
        //JavaScript.Append("Item.style.height = 20 + 'px';\n");
        JavaScript.Append("Item.className = 'filediv';\n");

        JavaScript.Append("var Splits = IpFile.value.split('\\\\');\n");
        JavaScript.Append("Item.innerHTML = Splits[Splits.length - 1] + '&nbsp;';\n");
        JavaScript.Append("Item.value = IpFile.id;\n");
        JavaScript.Append("Item.title = IpFile.value;\n");
        JavaScript.Append("var A = document.createElement('a');\n");
        JavaScript.Append("A.innerHTML = 'X';\n");
        JavaScript.Append("A.className = 'delete';\n");
        JavaScript.Append("A.id = 'A_' + Id++;\n");
        JavaScript.Append("A.href = '#';\n");
       // JavaScript.Append("A.style.color = 'blue';\n");
        JavaScript.Append("A.onclick = function()\n");
        JavaScript.Append("{\n");
        JavaScript.Append("DivFiles.removeChild(document.getElementById(this.parentNode.value));\n");
        JavaScript.Append("DivListBox.removeChild(this.parentNode);\n");
        JavaScript.Append("if(MAX != 0 && GetTotalFiles() - 1 < MAX)\n");
        JavaScript.Append("{\n");
        JavaScript.Append("GetTopFile().disabled = false;\n");
        JavaScript.Append("BtnAdd.disabled = false;\n");
        JavaScript.Append("}\n");
        JavaScript.Append("}\n");
        JavaScript.Append("var remarks= document.createElement('span');\n");
        JavaScript.Append("remarks.id ='lbl_' + Id++;\n");
        JavaScript.Append("remarks.innerHTML=' , ' +txtremarks.value;\n");

        JavaScript.Append("var format= document.createElement('span');\n");
        JavaScript.Append("format.id ='f_' + Id++;\n");
        JavaScript.Append("format.innerHTML= ', ' + ddlFormats.value;\n");

        JavaScript.Append("Item.appendChild(A);\n");
        JavaScript.Append("Item.appendChild(remarks);\n");
        JavaScript.Append("Item.appendChild(format);\n");
        JavaScript.Append("txtremarks.value='';\n");
        JavaScript.Append("ddlFormats.value='0';\n");
        //JavaScript.Append("Item.onmouseover = function()\n");
        //JavaScript.Append("{\n");
        //JavaScript.Append("Item.bgColor = Item.style.backgroundColor;\n");
        //JavaScript.Append("Item.fColor = Item.style.color;\n");
        //JavaScript.Append("Item.style.backgroundColor = '#C6790B';\n");
        //JavaScript.Append("Item.style.color = '#ffffff';\n");
        //JavaScript.Append("Item.style.fontWeight = 'bold';\n");
        //JavaScript.Append("}\n");
        //JavaScript.Append("Item.onmouseout = function()\n");
        //JavaScript.Append("{\n");
        //JavaScript.Append("Item.style.backgroundColor = Item.bgColor;\n");
        //JavaScript.Append("Item.style.color = Item.fColor;\n");
        //JavaScript.Append("Item.style.fontWeight = 'normal';\n");
        //JavaScript.Append("}\n");
        JavaScript.Append("return Item;\n");
        JavaScript.Append("}\n");
        JavaScript.Append("function Clear()\n");
        JavaScript.Append("{\n");
        JavaScript.Append("DivListBox.innerHTML = '';\n");
        JavaScript.Append("DivFiles.innerHTML = '';\n");
        JavaScript.Append("DivFiles.appendChild(CreateFile());\n");
        JavaScript.Append("BtnAdd.disabled = false;\n");
        JavaScript.Append("}\n");
        JavaScript.Append("function GetTopFile()\n");
        JavaScript.Append("{\n");
        JavaScript.Append("var Inputs = DivFiles.getElementsByTagName('input');\n");
        JavaScript.Append("var IpFile = null;\n");
        JavaScript.Append("for(var n = 0; n < Inputs.length && Inputs[n].type == 'file'; ++n)\n");
        JavaScript.Append("{\n");
        JavaScript.Append("IpFile = Inputs[n];\n");
        JavaScript.Append("break;\n");
        JavaScript.Append("}\n");
        JavaScript.Append("return IpFile;\n");
        JavaScript.Append("}\n");
        JavaScript.Append("function GetTotalFiles()\n");
        JavaScript.Append("{\n");
        JavaScript.Append("var Inputs = DivFiles.getElementsByTagName('input');\n");
        JavaScript.Append("var Counter = 0;\n");
        JavaScript.Append("for(var n = 0; n < Inputs.length && Inputs[n].type == 'file'; ++n)\n");
        JavaScript.Append("Counter++;\n");
        JavaScript.Append("return Counter;\n");
        JavaScript.Append("}\n");
        JavaScript.Append("function GetTotalItems()\n");
        JavaScript.Append("{\n");
        JavaScript.Append("var Items = DivListBox.getElementsByTagName('div');\n");
        JavaScript.Append("return Items.length;\n");
        JavaScript.Append("}\n");
        JavaScript.Append("function DisableTop()\n");
        JavaScript.Append("{\n");
        JavaScript.Append("if(GetTotalItems() == 0)\n");
        JavaScript.Append("{\n");
        JavaScript.Append("alert('Please browse at least one file to upload.');\n");
        JavaScript.Append("return false;\n");
        JavaScript.Append("}\n");
        JavaScript.Append("GetTopFile().disabled = true;\n");
        JavaScript.Append("var arrayRemarks = [];var arrFormats=[];\n");
        JavaScript.Append(" $('[ID*=pnlListBox] div').each(function(){\n");
        JavaScript.Append("arrayRemarks +=  $($(this).find('span')[0]).text();\n");
        JavaScript.Append("arrFormats +=  $($(this).find('span')[1]).text();\n");
		JavaScript.Append("});\n");
        JavaScript.Append("hdnRemarks.value = arrayRemarks;\n");
        JavaScript.Append("hdnFormats.value = arrFormats;\n");
        JavaScript.Append("hdnUMRNO.value = window.parent.document.getElementById('ctl00_hdnDMSUmrNo').value;\n");
        //JavaScript.Append("hdnREGNO.value = window.parent.document.getElementById('ctl00_hdnDMSRegNo').value;\n");
        JavaScript.Append("hdnADMNNO.value = window.parent.document.getElementById('ctl00_hdnDMSAdmnNo').value;\n");
        JavaScript.Append("hdntablename.value = window.parent.document.getElementById('ctl00_hdnMtablename').value;\n");
        JavaScript.Append("hdntblautocdGlobalcolumns.value = window.parent.document.getElementById('ctl00_hdnMtblautocdGlobalcolumns').value;\n");
        JavaScript.Append("hdntblautoidcolumns.value = window.parent.document.getElementById('ctl00_hdnMtblautoidcolumns').value;\n");
        JavaScript.Append("return true;\n");
        JavaScript.Append("}\n");
        JavaScript.Append("</script>");

        return JavaScript.ToString();
    }
}

/// <summary>
/// EventArgs class that has some readonly properties regarding posted files corresponding to MultipleFileUpload control. 
/// </summary>
public class FileCollectionEventArgs : EventArgs
{
    private HttpRequest _HttpRequest;

    public HttpFileCollection PostedFiles
    {
        get
        {
            return _HttpRequest.Files;
        }
    }

    public int Count
    {
        get { return _HttpRequest.Files.Count; }
    }

    public bool HasFiles
    {
        get { return _HttpRequest.Files.Count > 0 ? true : false; }
    }

    public double TotalSize
    {
        get
        {
            double Size = 0D;
            for (int n = 0; n < _HttpRequest.Files.Count; ++n)
            {
                if (_HttpRequest.Files[n].ContentLength < 0)
                    continue;
                else
                    Size += _HttpRequest.Files[n].ContentLength;
            }

            return Math.Round(Size / 1024D, 2);
        }
    }

    public FileCollectionEventArgs(HttpRequest oHttpRequest)
    {
        _HttpRequest = oHttpRequest;
    }
}

//Delegate that represents the Click event signature for MultipleFileUpload control.
public delegate void MultipleFileUploadClick(object sender, FileCollectionEventArgs e);


[Serializable]
public class DMS_FORMATS 
{
    private string _FORMATNAME;

    public string FORMATNAME
    {
        get { return _FORMATNAME; }
        set { _FORMATNAME = value; }
    }
    private string _FORMATCD;

    public string FORMATCD
    {
        get { return _FORMATCD; }
        set { _FORMATCD = value; }
    }
}
[Serializable]
public class DMS_FORMATS_Collection : SortableCollectionBase
{
    public DMS_FORMATS_Collection()
    {
        base.SortObjectType = typeof(DMS_FORMATS);
    }

    public int Add(ListElements _element)
    {
        return List.Add(_element);
    }
    public DMS_FORMATS GetList(int position)
    {
        return (DMS_FORMATS)InnerList[position];
    }
}
public class DBDMS_FORMATS : EzHms.DataAccessObject.DBExecuteDataReader
{
    public CollectionBase Get_DMS_Formats(int docid)
    {
        try
        {
            DataAccessLayer _dblayer = new DataAccessLayer();
         
            Database dbSvc = _dblayer.DBaseFactory;
        
            DbCommand cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_FORMAT_NAMES");
            dbSvc.AddInParameter(cmd, "@IP_DOC_ID", DbType.Int32, docid);
            GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateDmsFormtsCollection);
            return _dblayer.ExecuteReaderCommand(cmd, sqlData);
        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_DMS_Formats").Name;
            ErrorLoger.InsertErrorLogger(ex, 201, 1);
            return null;
        }
    }
    public CollectionBase GenerateDmsFormtsCollection(IDataReader returnData)
    {
        try
        {
            DMS_FORMATS_Collection _collection = new DMS_FORMATS_Collection();
            while (returnData.Read())
            {
                ListElements _element = new ListElements();
                _element.Text = returnData[0].ToString();
                _element.Value = returnData[1].ToString();
                _collection.Add(_element);
            }
            returnData.Close();
            return _collection;
        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateDmsFormtsCollection").Name;
            ErrorLoger.InsertErrorLogger(ex, 100, 1);
        }
        return null;
    }
    protected override CollectionBase GenerateCollection(IDataReader returnData)
    {
        throw new NotImplementedException();
    }
}