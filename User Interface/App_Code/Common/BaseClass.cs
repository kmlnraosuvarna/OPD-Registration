using System;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using EzHms.ModelEntity;
using EzHms.Abstract;
using System.Reflection;
using System.Collections;
using System.IO;
using System.IO.Compression;
using System.Collections.Generic;
using EzHms.DataAccessObject;

using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using System.Web.Services;
/// <summary>
/// Summary description for BaseClass
/// </summary>
public class BaseClass : MasterClass
{

    public BaseClass()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    protected override void OnPreInit(EventArgs e)
    {
        base.OnPreInit(e);
        //this.MasterPageFile = "~/Private/MasterPages/Admin.master";
    }

    protected override void OnInit(EventArgs e)
    {
        if (SessionHandler.DBSESSION_ID > 0)
        {
            if (!IsPostBack)
            {
                base.OnInit(e);
                //IAdmin _iadminservice = new EzHms.Services.AdminWebService();
                //USER_DOC_AUDIT uda = new USER_DOC_AUDIT();
                //uda.USER_ID = Convert.ToInt32(SessionHandler.UserID);
                //uda.DOC_ID = SessionHandler.DOCUMENT_ID;
                //uda.SESSION_ID = SessionHandler.DBSESSION_ID;
                //uda.ACTION_ID = 1;
                //uda.TRANSACTION_ID = 0;
                //bool status = _iadminservice.SAVEUSER_DOC_AUDIT(uda);
            }
        }
    }

}

public class SuperClass : System.Web.UI.Page
{
   
    protected override void OnInit(EventArgs e)
    {
        base.OnInit(e);
        if (Request.QueryString["DOC_ID"] != null)
        {
            //Newly Added For Thumb Access

            if (Request.QueryString["THUMB_USER_ID"] != null)
            {
                SessionHandler.UserID = Request.QueryString["THUMB_USER_ID"].ToString();
                Session["DBSessionID"] = Request.QueryString["THUMB_SESSION_ID"].ToString();
                SessionHandler.DBSESSION_ID = Convert.ToInt32(Request.QueryString["THUMB_SESSION_ID"].ToString());

                SessionHandler.LOCATION_ID = Request.QueryString["LOC_ID"].ToString();
                SessionHandler.LOCATION_NAME = Request.QueryString["LOC_NAME"].ToString();
                SessionHandler.ORGANIZATION_NAME = Request.QueryString["ORG_NAME"].ToString();
                Session["location"] = SessionHandler.LOCATION_NAME.ToString();
                SessionHandler.LOGIN_TIME = Request.QueryString["LOG_TIME"].ToString();
            }
            //Newly Added For Thumb Access

            SessionHandler.DOCUMENT_ID = Convert.ToInt32(Request.QueryString["DOC_ID"]);
            if (Request.QueryString["DOC_TYPE"] != null)
                SessionHandler.DOCUMENT_TYPE = Request.QueryString["DOC_TYPE"];
            if (Cache[SessionHandler.UserID.ToString() + "TABPanel"] != null)
            {
                if (Cache[SessionHandler.UserID.ToString() + "TABPanel"].ToString().Split(',').Length < 11)
                {
                    string prvids = HttpContext.Current.Cache[SessionHandler.UserID.ToString() + "TABPanel"].ToString().Replace(SessionHandler.DOCUMENT_ID.ToString() + ",", "");
                    Cache[SessionHandler.UserID.ToString() + "TABPanel"] = prvids + SessionHandler.DOCUMENT_ID.ToString() + ",";
                }
                // ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alert", "divcsschange(this);", true);
            }
            else
            {
                Cache[SessionHandler.UserID.ToString() + "TABPanel"] = SessionHandler.DOCUMENT_ID.ToString() + ",";

            }
        }
        else if ((Request.QueryString["DOC_ID"] == null) && (SessionHandler.DOCUMENT_ID == 0))
        {
            SessionHandler.DOCUMENT_ID = 1;
        }

        if (SessionHandler.DOCUMENT_ID > 0)
        {
            //if(!IsPostBack)
            if (SessionHandler.UserID != null && SessionHandler.UserID != "")
            {
                DOCUMENTPERMISSIONS();
            }
        }
        else
            Response.Redirect("~/Default.aspx");

    }
    protected void DOCUMENTPERMISSIONS()
    {
       
    }
    private string _ACCESS_ADD; public string ACCESS_ADD { get { return _ACCESS_ADD; } set { _ACCESS_ADD = value; } }
    private string _ACCESS_MOD; public string ACCESS_MOD { get { return _ACCESS_MOD; } set { _ACCESS_MOD = value; } }
    private string _ACCESS_DEL; public string ACCESS_DEL { get { return _ACCESS_DEL; } set { _ACCESS_DEL = value; } }
    private string _ACCESS_QRY; public string ACCESS_QRY { get { return _ACCESS_QRY; } set { _ACCESS_QRY = value; } }
    private string _ACCESS_APP; public string ACCESS_APP { get { return _ACCESS_APP; } set { _ACCESS_APP = value; } }
    private string _ACCESS_EXE; public string ACCESS_EXE { get { return _ACCESS_EXE; } set { _ACCESS_EXE = value; } }
    private string _PRN_HEADER; public string PRN_HEADER { get { return _PRN_HEADER; } set { _PRN_HEADER = value; } }
    private string _CRITICAL_VALUE; public string CRITICAL_VALUE { get { return _CRITICAL_VALUE; } set { _CRITICAL_VALUE = value; } }
    //protected override void OnPreRender(EventArgs e)
    //{
    //    base.OnPreRender(e);
    //    if(SessionHandler.DOCUMENT_ID!=64)
    //       TabInexes(this.Page);
    //}
    protected override void OnPreInit(EventArgs e)
    {
        base.OnPreInit(e);
        this.Page.Theme = SessionHandler.Theme;

    }



    /// <summary>
    /// Company policy service
    /// </summary>

    /// <summary>
    /// Auto code generation
    /// </summary>
    protected virtual string DateFormat
    {
        get
        {
          
            return string.Empty;
        }
    }
    public virtual string CompanySettingValue(string parameter)
    {
     
            return string.Empty;
    }
    protected virtual string AutoCode(string _table_name)
    {
        return null;
    }
    protected virtual string serverdate(string _date)
    {
        if (_date == null || _date == string.Empty)
        {
            if (Convert.ToInt32(SessionHandler.TIMEZONE_MINUTES) != 0)
                _date = DateTime.Now.AddMinutes(Convert.ToInt32(SessionHandler.TIMEZONE_MINUTES)).ToString("dd-MMM-yyyy");
            else
                _date = DateTime.Now.ToString("dd-MMM-yyyy");
        }
        return _date;
    }
    protected virtual DateTime Timezonedate
    {
        get
        {
            DateTime _datetime = DateTime.Now;
            float i = 0;
            if (Convert.ToInt32(float.TryParse(SessionHandler.TIMEZONE_MINUTES, out i) ? SessionHandler.TIMEZONE_MINUTES : "0") != 0)
                _datetime = DateTime.Now.AddMinutes(Convert.ToInt32(SessionHandler.TIMEZONE_MINUTES));
            return _datetime;
        }
    }
    protected virtual string CompanySetting(CompanyPolicyEnum EnumType, Enum EnumValue)
    {
       
            return string.Empty;
    }

    protected virtual DateTime ClientTime
    {
        get
        {
            DateTime _datetime = DateTime.Now;
            float i = 0;
            if (Convert.ToInt32(float.TryParse(SessionHandler.TIMEZONE_MINUTES, out i) ? SessionHandler.TIMEZONE_MINUTES : "0") != 0)
                _datetime = DateTime.Now.AddMinutes(Convert.ToInt32(SessionHandler.TIMEZONE_MINUTES));
            return _datetime;
        }
    }
    protected virtual string StockPointSetting(Enum Value)
    {
       
        return string.Empty;
    }
    public void ShiftLog()
    {
      
    }

    public string ShiftLogStatus()
    {
        return string.Empty;

    }
    short count = 0;
    #region Commented By Mahendra
    protected void TabInexes(Control ctrl)
    {
        foreach (Control c in ctrl.Controls)
        {
            TabInexes(c);
            if (c is TextBox)
            {
                count++;
                ((TextBox)(c)).TabIndex = count;
            }
            if (c is DropDownList)
            {
                count++;
                ((DropDownList)(c)).TabIndex = count;

            }
            if (c is RadioButtonList)
            {
                count++;
                ((RadioButtonList)(c)).TabIndex = count;

            }
            if (c is RadioButton)
            {
                count++;
                ((RadioButton)(c)).TabIndex = count;

            }
            if (c is RadioButtonList)
            {
                count++;
                ((RadioButtonList)(c)).TabIndex = count;

            }
            if (c is CheckBox)
            {
                count++;
                ((CheckBox)(c)).TabIndex = count;

            }
            if (c is CheckBoxList)
            {
                count++;
                ((CheckBoxList)(c)).TabIndex = count;

            }
            if (c is Button)
            {
                count++;
                ((Button)(c)).TabIndex = count;

            }
            if (c is ImageButton)
            {
                count++;
                ((ImageButton)(c)).TabIndex = count;

            }
            if (c is LinkButton)
            {
                count++;
                ((LinkButton)(c)).TabIndex = count;

            }
            if (c is UserControl)
            {
                TabInexes(c);
            }

        }
    }
    #endregion
    //Added By Ramakotireddy
    public string ReplaceSplCharactor(string value)
    {
        value = value.Replace(">", "&gt;");
        value = value.Replace("<", "&lt;");
        value = value.Replace("&", "&amp;");
        value = value.Replace("'", "&apos;");
        value = value.Replace("%", "&#37;");
        value = value.Replace("\"", "&quot;");
        value = value.Replace("\'", "&#39;");
        return value;
    }
}
public class webuser : System.Web.UI.UserControl
{
    

    protected virtual DateTime ClientTime
    {
        get
        {
            DateTime _datetime = DateTime.Now;
            float i = 0;
            if (Convert.ToInt32(float.TryParse(SessionHandler.TIMEZONE_MINUTES, out i) ? SessionHandler.TIMEZONE_MINUTES : "0") != 0)
                _datetime = DateTime.Now.AddMinutes(Convert.ToInt32(SessionHandler.TIMEZONE_MINUTES));
            return _datetime;
        }
    }
    public string ShiftLogStatus(int docid)
    {
        
                return "Y";
     
    }
    public void ShiftLog()
    {
       
    }
    public virtual string CompanySettingValue(string parameter)
    {
       
            return string.Empty;
    }
    protected virtual string CompanySetting(CompanyPolicyEnum EnumType, Enum EnumValue)
    {
       
            return string.Empty;
    }

    //protected override void OnInit(EventArgs e)
    //{
    //    base.OnInit(e);

    //    if (Request.QueryString["DOC_FORM_CD"] != null && Request.QueryString["DOC_FORM_CD"] != "")
    //    {
    //        DataSet dsper = GetDocPermissionByDocFormCD(Request.QueryString["DOC_FORM_CD"].ToString());
    //        if (dsper != null && dsper.Tables.Count > 0 && dsper.Tables[0].Rows.Count > 0 && dsper.Tables[0].Columns.Count > 1)
    //        {
    //            SessionHandler.DOCUMENT_ID = Convert.ToInt32(dsper.Tables[0].Rows[0]["DOC_ID"].ToString());
    //            SessionHandler.MODULE_ID = dsper.Tables[0].Rows[0]["PARENT_MODULE_ID"].ToString();
    //            SessionHandler.SUB_MODULE_ID = dsper.Tables[0].Rows[0]["MODULE_ID"].ToString();
    //        }
    //    }

    //    else
    //        Response.Redirect("~/Default.aspx");

    //}
    //public DataSet GetDocPermissionByDocFormCD(string formcd)
    //{
    //    EzHms.BusinessObject.UserDetails objs = new EzHms.BusinessObject.UserDetails();
    //    DataSet ds = objs.GetDocPermissionByDocFormCd(formcd, SessionHandler.UserID != "" ? Convert.ToInt32(SessionHandler.UserID) : 0);
    //    if (ds != null && ds.Tables.Count > 0)
    //    {
    //        return ds;
    //    }
    //    else
    //        return null;
    //}

}
public class CompressViewState : MasterClass
{

    protected override object LoadPageStateFromPersistenceMedium()
    {
        System.Web.UI.PageStatePersister pageStatePersister1 = this.PageStatePersister;
        pageStatePersister1.Load();
        String vState = pageStatePersister1.ViewState != null ? pageStatePersister1.ViewState.ToString() : "";
        byte[] pBytes = System.Convert.FromBase64String(vState);
        pBytes = Decompress(pBytes);
        LosFormatter mFormat = new LosFormatter();
        Object ViewState = mFormat.Deserialize(System.Convert.ToBase64String(pBytes));
        return new Pair(pageStatePersister1.ControlState, ViewState);
    }

    protected override void SavePageStateToPersistenceMedium(Object pViewState)
    {
        Pair pair1;
        System.Web.UI.PageStatePersister pageStatePersister1 = this.PageStatePersister;
        Object ViewState;
        if (pViewState is Pair)
        {
            pair1 = ((Pair)pViewState);
            pageStatePersister1.ControlState = pair1.First;
            ViewState = pair1.Second;
        }
        else
        {
            ViewState = pViewState;
        }
        LosFormatter mFormat = new LosFormatter();
        StringWriter mWriter = new StringWriter();
        mFormat.Serialize(mWriter, ViewState);
        String mViewStateStr = mWriter.ToString();
        byte[] pBytes = System.Convert.FromBase64String(mViewStateStr);
        pBytes = Compress(pBytes);
        String vStateStr = System.Convert.ToBase64String(pBytes);
        pageStatePersister1.ViewState = vStateStr;
        pageStatePersister1.Save();
    }
    /// <summary>
    /// This Methhod takes the byte stream as parameter 
    /// and return a compressed bytestream.
    /// For compression it uses GZipStream
    /// </summary>
    /// <param name="b"></param>
    /// <returns></returns>
    private byte[] Compress(byte[] b)
    {
        MemoryStream ms = new MemoryStream();
        GZipStream zs = new GZipStream(ms, CompressionMode.Compress, true);
        zs.Write(b, 0, b.Length);
        zs.Close();
        return ms.ToArray();
    }

    /// <summary>
    /// This methhod takes the compressed byte stream as parameter
    /// and return a decompressed bytestream.
    /// </summary>
    /// <param name="b"></param>
    /// <returns></returns>
    private byte[] Decompress(byte[] b)
    {
        MemoryStream ms = new MemoryStream();
        GZipStream zs = new GZipStream(new MemoryStream(b), CompressionMode.Decompress, true);
        byte[] buffer = new byte[4096];
        int size;
        while (true)
        {
            size = zs.Read(buffer, 0, buffer.Length);
            if (size > 0)
                ms.Write(buffer, 0, size);
            else break;
        }
        zs.Close();
        return ms.ToArray();
    }

}
public class MasterClass : System.Web.UI.Page
{
    private static string shift_login_time = string.Empty;
    public static string SHIFT_LOGIN_TIME
    {
        set { shift_login_time = value; }
        get { return shift_login_time; }
    }
     
    protected override void OnInit(EventArgs e)
    {
        base.OnInit(e);
        if (Request.QueryString["DOC_ID"] != null)
        {
            SessionHandler.DOCUMENT_ID = Convert.ToInt32(Request.QueryString["DOC_ID"]);
            if (Request.QueryString["DOC_TYPE"] != null)
                SessionHandler.DOCUMENT_TYPE = Request.QueryString["DOC_TYPE"];
            if (Cache[SessionHandler.UserID.ToString() + "TABPanel"] != null)
            {
                if (Cache[SessionHandler.UserID.ToString() + "TABPanel"].ToString().Split(',').Length < 11)
                {
                    string prvids = HttpContext.Current.Cache[SessionHandler.UserID.ToString() + "TABPanel"].ToString().Replace(SessionHandler.DOCUMENT_ID.ToString() + ",", "");
                    Cache[SessionHandler.UserID.ToString() + "TABPanel"] = prvids + SessionHandler.DOCUMENT_ID.ToString() + ",";
                }
                // ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alert", "divcsschange(this);", true);
            }
            else
            {
                Cache[SessionHandler.UserID.ToString() + "TABPanel"] = SessionHandler.DOCUMENT_ID.ToString() + ",";

            }
        }
        else if ((Request.QueryString["DOC_ID"] == null))
        {
            if (SessionHandler.DOCUMENT_ID == 0)
                SessionHandler.DOCUMENT_ID = 1;
            //SessionHandler.DOCUMENT_ID = 1;
            if (SessionHandler.DOCUMENT_ID == 0)
            {
                string path = Request.AppRelativeCurrentExecutionFilePath.ToString();
                DataTable dt = (DataTable)SessionHandler.ModDocAccess;
                DataView dv = new DataView(dt);
                dv.RowFilter = "NEW_PAGE_URL=" + "'" + path + "'";
                if (dv.Count > 0)
                {
                    SessionHandler.DOCUMENT_ID = Convert.ToInt32(dv[0]["DOC_ID"].ToString());
                    SessionHandler.SUB_MODULE_ID = dv[0]["PARENT_DOC_ID"].ToString();
                    SessionHandler.MODULE_ID = dv[0]["PARENT_MODULE_ID"].ToString() == "" ? dv[0]["PARENT_DOC_ID"].ToString() : dv[0]["PARENT_MODULE_ID"].ToString();
                }
            }
        }

        if (Request.QueryString["DOC_FORM_CD"] != null && Request.QueryString["DOC_FORM_CD"] != "" && Request.QueryString["DOC_FORM_CD"] != "undefined")
        {
            string docformcd = Request.QueryString["DOC_FORM_CD"].Contains(',') ? Request.QueryString["DOC_FORM_CD"].Split(',')[0] : Request.QueryString["DOC_FORM_CD"].ToString();
            DataSet dsper = GetDocPermissionByDocFormCD(docformcd);
            if (dsper != null && dsper.Tables.Count > 0 && dsper.Tables[0].Rows.Count > 0 && dsper.Tables[0].Columns.Count > 1)
            {
                SessionHandler.DOCUMENT_ID = Convert.ToInt32(dsper.Tables[0].Rows[0]["DOC_ID"].ToString());
                SessionHandler.MODULE_ID = dsper.Tables[0].Rows[0]["PARENT_MODULE_ID"].ToString();
                SessionHandler.SUB_MODULE_ID = dsper.Tables[0].Rows[0]["MODULE_ID"].ToString();
            }
        }

        //if (Request.QueryString["MOD_ID"] == "Y" && Request.QueryString["DOC_FORM_CD"] == null)
        //{
        //    SessionHandler.SUB_MODULE_ID = "";

        //}
        if (SessionHandler.DOCUMENT_ID > 0)
        {
            //if(!IsPostBack)
            // DOCUMENTPERMISSIONS();
        }
        else
            Response.Redirect("~/Default.aspx");

    }
    protected void DOCUMENTPERMISSIONS()
    {
        //string[] _doc = Docpermission.DocPermissions(SessionHandler.DOCUMENT_ID);
        //ACCESS_ADD = _doc[0]; ACCESS_MOD = _doc[1]; ACCESS_DEL = _doc[2]; ACCESS_QRY = _doc[3]; ACCESS_APP = _doc[4]; ACCESS_EXE = _doc[5]; PRN_HEADER = _doc[6]; CRITICAL_VALUE = _doc[7];
    }
    private string _ACCESS_ADD; public string ACCESS_ADD { get { return _ACCESS_ADD; } set { _ACCESS_ADD = value; } }
    private string _ACCESS_MOD; public string ACCESS_MOD { get { return _ACCESS_MOD; } set { _ACCESS_MOD = value; } }
    private string _ACCESS_DEL; public string ACCESS_DEL { get { return _ACCESS_DEL; } set { _ACCESS_DEL = value; } }
    private string _ACCESS_QRY; public string ACCESS_QRY { get { return _ACCESS_QRY; } set { _ACCESS_QRY = value; } }
    private string _ACCESS_APP; public string ACCESS_APP { get { return _ACCESS_APP; } set { _ACCESS_APP = value; } }
    private string _ACCESS_EXE; public string ACCESS_EXE { get { return _ACCESS_EXE; } set { _ACCESS_EXE = value; } }
    private string _PRN_HEADER; public string PRN_HEADER { get { return _PRN_HEADER; } set { _PRN_HEADER = value; } }
    private string _CRITICAL_VALUE; public string CRITICAL_VALUE { get { return _CRITICAL_VALUE; } set { _CRITICAL_VALUE = value; } }
    //protected override void OnPreRender(EventArgs e)
    //{
    //    base.OnPreRender(e);
    //    if(SessionHandler.DOCUMENT_ID!=64)
    //       TabInexes(this.Page);
    //}
    protected override void OnPreInit(EventArgs e)
    {
        base.OnPreInit(e);
        //this.Page.Theme = SessionHandler.Theme;

    }


    /// <summary>
    /// Company policy service
    /// </summary>

    /// <summary>
    /// Auto code generation
    /// </summary>
    protected virtual string DateFormat
    {
        get
        {
           
            return string.Empty;
        }
    }
    protected virtual string CompanySetting(CompanyPolicyEnum EnumType, Enum EnumValue)
    {
     
            return string.Empty;
    }
    protected virtual string CompanySettingvalue(CompanyPolicyEnum EnumType, Enum EnumValue)
    {
       
            return string.Empty;
    }
    public virtual string CompanySettingDSValue(string parameter)
    {
      
            return string.Empty;
    }

    public virtual string CompanySettingDisplayValue(string parameter)
    {
      
            return string.Empty;
    }
    protected virtual string AutoCode(string _table_name)
    {

        return string.Empty;
    }
    protected virtual string serverdate(string _date)
    {
        if (_date == null || _date == string.Empty)
        {
            if (Convert.ToInt32(SessionHandler.TIMEZONE_MINUTES) != 0)
                _date = DateTime.Now.AddMinutes(Convert.ToInt32(SessionHandler.TIMEZONE_MINUTES)).ToString("dd-MMM-yyyy");
            else
                _date = DateTime.Now.ToString("dd-MMM-yyyy");
        }
        return _date;
    }
    protected virtual DateTime Timezonedate
    {
        get
        {
            DateTime _datetime = DateTime.Now;
            float i = 0;
            if (Convert.ToInt32(float.TryParse(SessionHandler.TIMEZONE_MINUTES, out i) ? SessionHandler.TIMEZONE_MINUTES : "0") != 0)
                _datetime = DateTime.Now.AddMinutes(Convert.ToInt32(SessionHandler.TIMEZONE_MINUTES));
            return _datetime;
        }
    }


    protected virtual DateTime ClientTime
    {
        get
        {
            DateTime _datetime = DateTime.Now;
            float i = 0;
            if (Convert.ToInt32(float.TryParse(SessionHandler.TIMEZONE_MINUTES, out i) ? SessionHandler.TIMEZONE_MINUTES : "0") != 0)
                _datetime = DateTime.Now.AddMinutes(Convert.ToInt32(SessionHandler.TIMEZONE_MINUTES));
            return _datetime;
        }
    }
    protected virtual string StockPointSetting(Enum Value)
    {
      
        return string.Empty;
    }

    //Added By Krishna S regarding Stores Module Compnay Settings
    protected virtual string GetgeneralSettings(int Index)
    {
      

        return string.Empty;
    }


    public void ShiftLog()
    {
      
    }

    public string ShiftLogStatus()
    {
        //string retval = "";
  
                return "Y";
       
    }
    short count = 0;
    #region Commented By Mahendra
    protected void TabInexes(Control ctrl)
    {
        foreach (Control c in ctrl.Controls)
        {
            TabInexes(c);
            if (c is TextBox)
            {
                count++;
                ((TextBox)(c)).TabIndex = count;
            }
            if (c is DropDownList)
            {
                count++;
                ((DropDownList)(c)).TabIndex = count;

            }
            if (c is RadioButtonList)
            {
                count++;
                ((RadioButtonList)(c)).TabIndex = count;

            }
            if (c is RadioButton)
            {
                count++;
                ((RadioButton)(c)).TabIndex = count;

            }
            if (c is RadioButtonList)
            {
                count++;
                ((RadioButtonList)(c)).TabIndex = count;

            }
            if (c is CheckBox)
            {
                count++;
                ((CheckBox)(c)).TabIndex = count;

            }
            if (c is CheckBoxList)
            {
                count++;
                ((CheckBoxList)(c)).TabIndex = count;

            }
            if (c is Button)
            {
                count++;
                ((Button)(c)).TabIndex = count;

            }
            if (c is ImageButton)
            {
                count++;
                ((ImageButton)(c)).TabIndex = count;

            }
            if (c is LinkButton)
            {
                count++;
                ((LinkButton)(c)).TabIndex = count;

            }
            if (c is UserControl)
            {
                TabInexes(c);
            }

        }
    }
    #endregion
    //Added By Ramakotireddy
    public string ReplaceSplCharactor(string value)
    {
        value = value.Replace(">", "&gt;");
        value = value.Replace("<", "&lt;");
        value = value.Replace("&", "&amp;");
        value = value.Replace("'", "&apos;");
        value = value.Replace("%", "&#37;");
        value = value.Replace("\"", "&quot;");
        value = value.Replace("\'", "&#39;");
        return value;
    }

    public string WebConfigSettings(string key)
    {
       
            return string.Empty;
    }

    public string GetTimeFormat(string time)
    {
        string tformat = string.Empty;
        if (!string.IsNullOrEmpty(time))
        {
            if (time == "12 Hours")
            {
                tformat = "hh:mm:ss tt";
            }
            else if (time == "24 Hours")
            {
                tformat = "HH:mm:ss";
            }
            else if (time == "hh:mm:ss tt")
            {
                return time;
            }
            else if (time == "hh:mm:ss")
            {
                return time;
            }
            else
            {
                tformat = "HH:mm:ss";
            }
        }
        else
        {
            tformat = "HH:mm:ss";
        }

        return tformat;
    }
    public void ReportListBind(ListBox lbox)
    {
        DataTable _dtrep = SessionHandler.ReportDocPermission;
        DataView _dvrep = new DataView(_dtrep);
        _dvrep.RowFilter = "PAR_DOC_ID = " + SessionHandler.DOCUMENT_ID.ToString() + " AND PARENT_MODULE_ID=" + SessionHandler.MODULE_ID;
        _dtrep = _dvrep != null && _dvrep.Count > 0 ? _dvrep.ToTable() : null; //changed by ali
        List<KeyValuePair<string, string>> items = new List<KeyValuePair<string, string>>();
        if (_dtrep != null && _dtrep.Rows.Count > 0)
        {
            foreach (DataRow row in _dtrep.Rows)
            {
                items.Add(new KeyValuePair<string, string>(row["DOC_ID"].ToString() + "_" + row["DOC_CD"].ToString() + "_" + row["PRN_HEADER"].ToString() + "_" + row["DOC_NAME"].ToString() + "_" + row["MODULE_ID"].ToString() + "_" + row["DOC_FORM_CD"].ToString(), row["DOC_NAME"].ToString().Split('-')[1].Trim()));
            }
            lbox.DataSource = items;
            lbox.DataTextField = "Value";
            lbox.DataValueField = "Key";
            lbox.DataBind();
            var ses_module_id = SessionHandler.SUB_MODULE_ID.ToString();
            var itms = from ListItem li in lbox.Items select li; //where li.Value.Contains("N") select li;
            int i = 0;//we need to maintain i variable for selecting top most item from list box items by default @@Ali...2018-07-26 
            foreach (ListItem li in itms)
            {
                if (ses_module_id != li.Value.Split('_')[4])
                {
                    li.Attributes.CssStyle.Add("display", "none");
                }
                if (li.Value.Split('_')[2].ToUpper() == "N")
                { li.Attributes.Add("disabled", "disabled"); }
                else
                {
                    li.Attributes.Add("enabled", "enabled");
                    if (!(ses_module_id != li.Value.Split('_')[4]))
                    {
                        i++;
                        if (i == 1)
                            li.Attributes.Add("selected", "true");
                    }
                }
            }
        }
    }
    public static string GetReportName(string ReportDocid)
    {

        return null;
    }

    public static string CheckReportDocPermission()
    {
        string printpermission = string.Empty;
        DataTable _dtrep = SessionHandler.ReportDocPermission;
        DataView _dvrep = new DataView(_dtrep);
        _dvrep.RowFilter = "PAR_DOC_ID = " + SessionHandler.DOCUMENT_ID.ToString() + " AND PARENT_MODULE_ID=" + SessionHandler.MODULE_ID + " AND MODULE_ID=" + SessionHandler.SUB_MODULE_ID;
        _dtrep = _dvrep != null && _dvrep.Count > 0 ? _dvrep.ToTable() : null;
        if (_dtrep != null && _dtrep.Rows.Count > 0)
        {
            foreach (DataRow row in _dtrep.Rows)
            {
                // these are the documents belongs to admission
                if (row["DOC_NAME"].ToString().Contains("-") == true)
                {
                    if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "VISITOR PASS" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../../Images/printicons/visitorspass2.png',click:'VisitorPass',alt:'Visitor pass',printdocid:" + row["DOC_ID"] + "}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "VEHICLE PASS" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../../Images/printicons/vechilepass2.png',click:'VehiclePasss',alt:'Vehicle pass',printdocid:" + row["DOC_ID"] + "}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "ATTENDANT PASS" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../../Images/printicons/Attenderpass2.png',click:'Attenderpass',alt:'Attender pass',printdocid:" + row["DOC_ID"] + "}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "PATIENT INFO" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../../Images/printicons/patientinfo2.png',click:'PatInfoPrint',alt:'Patient Info Form',printdocid:" + row["DOC_ID"] + "}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "GPPRINT" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../../Images/printicons/printer2.png',click:'PrintGP',alt:'IPD Prescription',printdocid:" + row["DOC_ID"] + "}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "BARCODEPRINTS" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../../Images/printicons/printer2.png',click:'PrintBarCode',alt:'Barcode Labels',printdocid:" + row["DOC_ID"] + "}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "CLEARANCE FORM" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../../Images/printicons/printer2.png',click:'PrintAdmnClearance',alt:'Admission Clearance Form',printdocid:" + row["DOC_ID"] + "}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "ADMISSION CHECKLIST" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../../Images/printicons/printer2.png',click:'PrintAdmnChecklist',alt:'Admission Checklist',printdocid:" + row["DOC_ID"] + "}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "WRISTBAND" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../../Images/printicons/printer2.png',click:'WristBand',alt:'Wristband',printdocid:" + row["DOC_ID"] + "}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "ADMISSIONPRINT" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../../Images/printicons/printer2.png',click:'AdmissionPrint',alt:'Admission Face Sheet',printdocid:" + row["DOC_ID"] + "}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "BARCODE1PRINTS" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../../Images/printicons/printer2.png',click:'PrintBarCode1',alt:'Barcode1',printdocid:" + row["DOC_ID"] + "}";
                    // these are the documents belongs to Advance(IP & ER)
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "ADVANCE RECEIPT" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{ icon: '../../../../Assets/Grid_Icons/printrecord.png', click: 'ConsultPrint', alt: 'Print Record',printdocid:" + row["DOC_ID"] + "}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "ADVANCE DETAILS RECEIPT" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../../../Assets/Grid_Icons/printrecord.png',click:'PrintAdvReceipt',alt:'ER Adv.Details',printdocid:" + row["DOC_ID"] + "}";

                     // these are the documents belongs to Registration
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "RECEIPT PRINT" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{ icon: '../../Assets/Grid_Icons/printview.png', click: 'patientPrint1', alt: 'Print Receipt',printdocid:" + row["DOC_ID"] + "}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "FACESHEET REPORT" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../Assets/Grid_Icons/printcard.png',click:'FaceSheetPrint',alt:'Facesheet Print',printdocid:" + row["DOC_ID"] + "}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "CARD PRINT" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../Assets/Grid_Icons/printcard.png',click:'PriscPrint',alt:'Card Print',printdocid:" + row["DOC_ID"] + "}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "LABEL PRINT" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../Assets/Grid_Icons/printcard.png',click:'GetslipRecord',alt:'Label Print',printdocid:" + row["DOC_ID"] + "}";
                    //else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "BARCODE PRINT" && row["PRN_HEADER"].ToString() == "Y")
                    //    printpermission += ",{icon:'../../Assets/Grid_Icons/barcode.png',click:'BarcodePrint',alt:'Print Barcode',printdocid:" + row["DOC_ID"] + "}";

                    // these are the documents belongs to Ip Discharge
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "DISCHARGE REPORT" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../../Assets/Grid_Icons/opbilling.gif',click:'IPDischargePrint',alt:'IPDischarge Slip'}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "DISCHARGE CLEARANCE" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{ icon: '../../../Assets/Grid_Icons/opbilling.gif', click: 'DischargeClearance', alt: 'Discharge Clearance'}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "MRD BARCODE" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../../Assets/Grid_Icons/opbilling.gif',click:'MRDBarcodePrint',alt:'MRD Barcode'}";
                    else if (row["DOC_NAME"].ToString().Split('-')[1].Trim().ToUpper() == "DEATH CRETIFICATE REPORT" && row["PRN_HEADER"].ToString() == "Y")
                        printpermission += ",{icon:'../../../Assets/Grid_Icons/opbilling.gif',click:'DeathCretificateReport',alt:'Death Cretificate Report'}";

                }
            }
        }
        return printpermission;
    }

    private string _doc_form_cd;
    public string DOC_FORM_CD
    {
        set { _doc_form_cd = value; }
        get { return _doc_form_cd; }
    }

    public DataSet GetDocPermissionByDocFormCD(string formcd)
    {
        EzHms.BusinessObject.UserDetails objs = new EzHms.BusinessObject.UserDetails();
        DataSet ds = objs.GetDocPermissionByDocFormCd(formcd, SessionHandler.UserID != "" ? Convert.ToInt32(SessionHandler.UserID) : 0);
        if (ds != null && ds.Tables.Count > 0)
        {
            return ds;
        }
        else
            return null;
    }

    public DataSet GetModuleIDFromModule_Form_CD(string formcd)
    {
        EzHms.BusinessObject.UserDetails objs = new EzHms.BusinessObject.UserDetails();
        DataSet ds = objs.GetModuleIDFromModule_Form_CD(formcd, SessionHandler.UserID != "" ? Convert.ToInt32(SessionHandler.UserID) : 0);
        if (ds != null && ds.Tables.Count > 0)
        {
            return ds;
        }
        else
            return null;
    }
    public List<object> ConvertDataSetToListObject(DataSet ds)
    {
        List<object> list = new List<object>();
        if (ds != null)
        {
            if (ds.Tables.Count > 0)
            {
                DataTable dt = ds.Tables[0];
                ArrayList arraylist = new ArrayList();
                foreach (DataRow row in dt.Rows)
                {
                    var dict = new Dictionary<string, object>();
                    foreach (DataColumn col in dt.Columns)
                    {
                        dict[col.ColumnName] = row[col];
                    }
                    arraylist.Add(dict);
                }
                list.Add(arraylist);
            }
            return list;
        }
        else
            return null;
    }
    public string[] ConvertDataSetToStringArray(DataSet ds, string column)
    {
        System.Web.Script.Serialization.JavaScriptSerializer serializer = new System.Web.Script.Serialization.JavaScriptSerializer();
        List<string> items1 = new List<string>();
        DataTable dtp = ds.Tables[0];
        foreach (DataRow row in dtp.Rows)
        {
            var listp = new List<Dictionary<string, object>>();
            var dict = new Dictionary<string, object>();
            foreach (DataColumn col in dtp.Columns)
            {
                dict[col.ColumnName] = row[col];
            }
            listp.Add(dict);
            items1.Add(AjaxControlToolkit.AutoCompleteExtender.CreateAutoCompleteItem(row[column].ToString(), serializer.Serialize(listp).Substring(1, serializer.Serialize(listp).Length - 2)));
        }
        return items1.ToArray();
    }

    /*Export Data Methods Begin*/
    public DataSet GetDynamicExportData(string SP_NAME, string PARAMETER_NAMES, string PARAMETER_VALUES)
    {

        try
        {
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dBase = dbLayer.DBaseFactory;
            DbCommand cmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SP_NAME);

            for (int i = 0; i < PARAMETER_NAMES.Split('$').Length; i++)
            {
                dBase.AddInParameter(cmd, PARAMETER_NAMES.Split('$')[i], DbType.String, PARAMETER_VALUES.Split('$')[i]);
            }
            dBase.AddInParameter(cmd, "@IP_SESSION_ID", DbType.String, SessionHandler.DBSESSION_ID);
            cmd.CommandTimeout = 300000;
            DataSet ds = dBase.ExecuteDataSet(cmd);
            return ds;
        }
        catch (Exception ex)
        {
            ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetListData").Name;
            ErrorLoger.InsertErrorLogger(ex, 100, 1);
        }
        return null;
    }
   /* public void ExportDateSetxlsx(DataSet ds, string destination)
    {

        using (var workbook = SpreadsheetDocument.Create(destination, DocumentFormat.OpenXml.SpreadsheetDocumentType.Workbook))
        {
            var workbookpart = workbook.AddWorkbookPart();
            workbook.WorkbookPart.Workbook = new DocumentFormat.OpenXml.Spreadsheet.Workbook();
            workbook.WorkbookPart.Workbook.Sheets = new DocumentFormat.OpenXml.Spreadsheet.Sheets();
            foreach (System.Data.DataTable table in ds.Tables)
            {
                var sheetPart = workbook.WorkbookPart.AddNewPart<WorksheetPart>();
                var sheetData = new DocumentFormat.OpenXml.Spreadsheet.SheetData();
                sheetPart.Worksheet = new DocumentFormat.OpenXml.Spreadsheet.Worksheet(sheetData);
                DocumentFormat.OpenXml.Spreadsheet.Sheets sheets = workbook.WorkbookPart.Workbook.GetFirstChild<DocumentFormat.OpenXml.Spreadsheet.Sheets>();
                string relationshipsId = workbook.WorkbookPart.GetIdOfPart(sheetPart);
                uint sheetId = 1;
                if (sheets.Elements<DocumentFormat.OpenXml.Spreadsheet.Sheet>().Count() > 0)
                {
                    sheetId = sheets.Elements<DocumentFormat.OpenXml.Spreadsheet.Sheet>().Select(s => s.SheetId.Value).Max() + 1;
                }
                DocumentFormat.OpenXml.Spreadsheet.Sheet sheet = new DocumentFormat.OpenXml.Spreadsheet.Sheet() { Id = relationshipsId, SheetId = sheetId, Name = table.TableName };
                sheets.Append(sheet);

                DocumentFormat.OpenXml.Spreadsheet.Row headerRow = new DocumentFormat.OpenXml.Spreadsheet.Row();

                List<String> columns = new List<string>();
                foreach (System.Data.DataColumn column in table.Columns)
                {
                    columns.Add(column.ColumnName);
                    DocumentFormat.OpenXml.Spreadsheet.Cell cell = new DocumentFormat.OpenXml.Spreadsheet.Cell();
                    cell.CellValue = new DocumentFormat.OpenXml.Spreadsheet.CellValue(column.ColumnName);
                    cell.DataType = DocumentFormat.OpenXml.Spreadsheet.CellValues.String;
                    headerRow.AppendChild(cell);
                }
                sheetData.AppendChild(headerRow);
                foreach (System.Data.DataRow dsrow in table.Rows)
                {
                    DocumentFormat.OpenXml.Spreadsheet.Row newRow = new DocumentFormat.OpenXml.Spreadsheet.Row();
                    foreach (String col in columns)
                    {
                        DocumentFormat.OpenXml.Spreadsheet.Cell cell = new DocumentFormat.OpenXml.Spreadsheet.Cell();
                        cell.CellValue = new DocumentFormat.OpenXml.Spreadsheet.CellValue(dsrow[col].ToString());
                        if (dsrow[col].GetType().Name == "String")
                        {
                            cell.DataType = DocumentFormat.OpenXml.Spreadsheet.CellValues.String;
                        }
                        else
                        {
                            cell.DataType = DocumentFormat.OpenXml.Spreadsheet.CellValues.Number;
                        }
                        newRow.AppendChild(cell);
                    }
                    sheetData.AppendChild(newRow);
                }
            }

        }
    }



    public List<DataTable> SplitTable(DataTable originaltable, int batchsize)
    {
        List<DataTable> tables = new List<DataTable>();
        int count = originaltable.Rows.Count;

        int i = 0;
        int j = 0;

        DataTable newdt = originaltable.Clone();
        newdt.TableName = "Table_" + j;
        newdt.Clear();

        int p = 0;
        int m = 0;
        foreach (DataRow row in originaltable.Rows)
        {
            DataRow newRow = newdt.NewRow();
            newRow.ItemArray = row.ItemArray;
            newdt.Rows.Add(newRow);
            i++;
            m++;
            if (i == batchsize)
            {
                tables.Add(newdt);
                j++;
                newdt = originaltable.Clone();
                newdt.TableName = "Table_" + j;
                newdt.Clear();
                i = 0;
            }
            else if (m == count)
            {
                tables.Add(newdt);
                j++;
                newdt = originaltable.Clone();
                newdt.TableName = "Table_" + j;
                newdt.Clear();
                i = 0;
            }


        }


        return tables;
    }

    public void ExportDateSet(List<DataTable> ds, string destination)
    {
        using (var workbook = SpreadsheetDocument.Create(destination, DocumentFormat.OpenXml.SpreadsheetDocumentType.Workbook))
        {
            var workbookpart = workbook.AddWorkbookPart();
            workbook.WorkbookPart.Workbook = new DocumentFormat.OpenXml.Spreadsheet.Workbook();
            workbook.WorkbookPart.Workbook.Sheets = new DocumentFormat.OpenXml.Spreadsheet.Sheets();

            foreach (var i in ds)
            {
                var sheetPart = workbook.WorkbookPart.AddNewPart<WorksheetPart>();
                var sheetData = new DocumentFormat.OpenXml.Spreadsheet.SheetData();
                sheetPart.Worksheet = new DocumentFormat.OpenXml.Spreadsheet.Worksheet(sheetData);
                DocumentFormat.OpenXml.Spreadsheet.Sheets sheets = workbook.WorkbookPart.Workbook.GetFirstChild<DocumentFormat.OpenXml.Spreadsheet.Sheets>();
                string relationshipsId = workbook.WorkbookPart.GetIdOfPart(sheetPart);
                uint sheetId = 1;
                if (sheets.Elements<DocumentFormat.OpenXml.Spreadsheet.Sheet>().Count() > 0)
                {
                    sheetId = sheets.Elements<DocumentFormat.OpenXml.Spreadsheet.Sheet>().Select(s => s.SheetId.Value).Max() + 1;
                }
                DocumentFormat.OpenXml.Spreadsheet.Sheet sheet = new DocumentFormat.OpenXml.Spreadsheet.Sheet() { Id = relationshipsId, SheetId = sheetId, Name = i.TableName };
                sheets.Append(sheet);

                DocumentFormat.OpenXml.Spreadsheet.Row headerRow = new DocumentFormat.OpenXml.Spreadsheet.Row();

                List<String> columns = new List<string>();
                foreach (System.Data.DataColumn column in i.Columns)
                {
                    columns.Add(column.ColumnName);
                    DocumentFormat.OpenXml.Spreadsheet.Cell cell = new DocumentFormat.OpenXml.Spreadsheet.Cell();
                    cell.CellValue = new DocumentFormat.OpenXml.Spreadsheet.CellValue(column.ColumnName);
                    cell.DataType = DocumentFormat.OpenXml.Spreadsheet.CellValues.String;
                    headerRow.AppendChild(cell);
                }
                sheetData.AppendChild(headerRow);
                foreach (System.Data.DataRow dsrow in i.Rows)
                {
                    DocumentFormat.OpenXml.Spreadsheet.Row newRow = new DocumentFormat.OpenXml.Spreadsheet.Row();
                    foreach (String col in columns)
                    {

                        DocumentFormat.OpenXml.Spreadsheet.Cell cell = new DocumentFormat.OpenXml.Spreadsheet.Cell();
                        cell.CellValue = new DocumentFormat.OpenXml.Spreadsheet.CellValue(dsrow[col].ToString());
                        if (dsrow[col].GetType().Name == "String")
                        {
                            cell.DataType = DocumentFormat.OpenXml.Spreadsheet.CellValues.String;
                        }
                        else
                        {
                            cell.DataType = DocumentFormat.OpenXml.Spreadsheet.CellValues.Number;
                        }
                        newRow.AppendChild(cell);
                    }
                    sheetData.AppendChild(newRow);
                }
            }

        }
    }*/

    /*Export Data Methods End*/

}
