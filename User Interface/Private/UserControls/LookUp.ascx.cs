using System;
using System.Collections;
using System.Data;
using System.ComponentModel;
using System.Collections.Generic;
using EzHms.ModelEntity;

using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;

public partial class LookUp : System.Web.UI.UserControl
{
    #region Properties

    public delegate CollectionBase PagingMethodWithObject(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records);
    private PagingMethodWithObject _pagingMethodWithObjects = null;
    public PagingMethodWithObject GettingDataWithObjects
    {
        get
        {
            return _pagingMethodWithObjects;
        }
        set
        {
            _pagingMethodWithObjects = value;
        }
    }

    public delegate void TextChanged(object sender, EventArgs e);
    public event TextChanged OnSearchTextChanged;


    private List<object> _preCondition = null;
    public List<object> PreConditon
    {
        set
        {
            _preCondition = value;
        }
        get { return _preCondition; }
    }

    private string _sLookupName = String.Empty;
    public string LookupName
    {
        set
        {
            _sLookupName = value;
        }
    }

    private string _dlist = string.Empty;
    public string getDlist()
    {
        return _dlist;
    }

    private string _srvUrl = string.Empty;
    public string getSrvUrl()
    {
        return _srvUrl;
    }

    public string getURL()
    {
        return "";
    }

    private string _autoSrvUrl = string.Empty;
    public string autoSrvUrl
    {
        get { return _autoSrvUrl; }
        set { _autoSrvUrl = value; }
    }

    private bool _onblurreq = false;
    public bool OnBlurRequired
    {
        get { return _onblurreq; }
        set { _onblurreq = value; }
    }

    private bool _isprefixlenconsider = false;
    public bool IsPrefixLenRequired
    {
        get { return _isprefixlenconsider; }
        set { _isprefixlenconsider = value; }
    }

    private bool _isReqExtraColsinAuto = false;
    public bool IsReqExtraColsinAuto
    {
        get { return _isReqExtraColsinAuto; }
        set { _isReqExtraColsinAuto = value; }
    }

    private string _autoExtraCols = string.Empty;
    public string AutoExtraCols
    {
        get { return _autoExtraCols; }
        set { _autoExtraCols = value; }
    }
    private string _IsAutoCompleteJson = "N";
    public string IsAutoCompleteJson
    {
        get { return _IsAutoCompleteJson; }
        set { _IsAutoCompleteJson = value; }
    }

    

    /// <summary>
    /// whether textbox need the post back event or not
    /// </summary>
    [DefaultValue(false)]
    public bool AutoPostBack
    {
        set
        {
            txtSearchControl.AutoPostBack = value;
            if (value)
            {
                txtSearchControl.TextChanged += new EventHandler(txtSearchControl_TextChanged);
            }
        }
    }
    /// <summary>
    /// fires the Textbox text changed event in Page
    /// </summary>
    /// <param name="sender"></param>
    /// <param name="e"></param>
    void txtSearchControl_TextChanged(object sender, EventArgs e)
    {
        if (OnSearchTextChanged != null)
            OnSearchTextChanged(sender, e);
    }

    /// <summary>
    /// Enterd or selected text in control....
    /// </summary>
    public string Service_Path
    {
        get
        {
            return hdn_srv_method.Value;
        }
        set
        {
            hdn_srv_method.Value = value;
        }
    }

    public string Flag
    {
        get
        {
            return hdn_preCond.Value;
        }
        set
        {
            hdn_preCond.Value = value;
        }
    }
    /// <summary>
    /// an unique value...
    /// </summary>   
    //private string _Value;
    //public string Value
    //{
    //    get
    //    {
    //        return _Value;
    //    }
    //    set
    //    {
    //        _Value = value;
    //    }
    //}

    public string Value
    {
        get
        {
            return _hiddenID.Value;
        }
        set
        {
            _hiddenID.Value = value;
        }
    }

    public string HiddenText
    {
        get
        {
            return _hiddenText.Value;
        }
        set
        {
            _hiddenText.Value = value;
        }
    }
    /// <summary>
    /// an unique value...
    /// </summary>   
    public string Text
    {
        get
        {
            return txtSearchControl.Text;
        }
        set
        {
            txtSearchControl.Text = value;
        }
    }
    /// <summary>
    /// Title for the Lookup search...
    /// </summary>
    public string Title
    {
        set
        {
            lbl_Title.Text = value;
        }
    }
    /// <summary>
    /// Service method which calls the autocomplete method....
    /// </summary>
    //private string _service_method = string.Empty;
    //public string ServiceMethod
    //{
    //    set
    //    {
    //        _autoTxtSearchControl.ServiceMethod = autoComID.ServiceMethod = value;
    //    }
    //}
    /// <summary>
    /// Path for the service ....
    /// </summary>
    private string _service_path = string.Empty;
    //public string ServicePath
    //{
    //    set
    //    {
    //        _autoTxtSearchControl.ServicePath = autoComID.ServicePath = value;
    //    }
    //}
    /// <summary>
    /// SetContextKey
    /// </summary>
    private string _set_Context_Key = string.Empty;
    public string SET_CONTEXT_KEY
    {
        get
        {
            return _set_Context_Key;
        }
        set
        {
            _set_Context_Key = value;
        }
    }
    /// <summary>
    /// an unique key column names to operate the data in the gridview
    /// that should be either single value or more than one value....
    /// </summary>
    //public string[] DataKeyNames
    //{
    //    get
    //    {
    //        if (this.gridGeneric.DataKeyNames != null)
    //        {
    //            return this.gridGeneric.DataKeyNames;
    //        }
    //        return null;
    //    }
    //    set
    //    {
    //        this.gridGeneric.DataKeyNames = value;
    //    }
    //}
    /// <summary>
    /// a Primariy key column name to operate the data in the gridview 
    /// </summary>
    //public string PrimaryKey
    //{
    //    get
    //    {
    //        if (this.gridGeneric.DataKeyNames != null)
    //            return this.gridGeneric.DataKeyNames.GetValue(0).ToString();
    //        return null;
    //    }
    //    set
    //    {
    //        string[] _dataKeys = value.Split(',');
    //        this.gridGeneric.DataKeyNames = _dataKeys;
    //    }
    //}


    //public string OnKeyPress
    //{
    //    set
    //    {
    //        this.txtSearchControl.Attributes.Add("onkeypress", value);
    //    }
    //}

    //public string OnKeyDown
    //{
    //    set
    //    {
    //        this.txtSearchControl.Attributes.Add("onkeydown", value);
    //    }
    //}

    //public string OnKeyUp
    //{
    //    set
    //    {
    //        this.txtSearchControl.Attributes.Add("onkeyup", value);
    //    }
    //}

    //public string OnBlur
    //{
    //    set
    //    {
    //        this.txtSearchControl.Attributes.Add("onblur", value);
    //    }
    //}
    //public string OnChange
    //{
    //    set
    //    {
    //        this.txtSearchControl.Attributes.Add("onchange", value);
    //    }
    //}

    //public bool Visible
    //{
    //    set
    //    {
    //        if (value)
    //        {
    //            this.Style.Add(HtmlTextWriterStyle.Display, "none");
    //        }
    //        else
    //        {
    //            this.Style.Add(HtmlTextWriterStyle.Display, "block");
    //        }
    //    }
    //}

    private string toolTipMessage;

    public string ToolTipMessage
    {
        get { return toolTipMessage; }
        set { imgbtnSearch.ToolTip = value; }
    }
    public bool Enabled
    {
        set
        {
            txtSearchControl.Enabled = value;
            imgbtnSearch.Enabled = value;
        }
        get { return imgbtnSearch.Enabled; }
    }

    private short _tabIndex;
    public short TabIndex
    {
        get
        {
            return _tabIndex;
        }
        set
        {
            _tabIndex = value;
            txtSearchControl.TabIndex = (short)(value++);
            //imgbtnSearch.TabIndex = (short)(value++);
        }
    }


    
    private string _CallbackFn;
    public string CallbackFn
    {
        get
        {
            return _CallbackFn;
        }
        set
        {
            _CallbackFn = value;
        }
    }

    #endregion Properties

    #region Events & Methods
    protected void Page_Load(object sender, EventArgs e)
    {

       // hdnprefixlength.Value = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.Autocompletion_Prefix_Length);
    }
    protected override void OnInit(EventArgs e)
    {
        base.OnInit(e);
        txtSearchControl.TextChanged += new EventHandler(txtSearchControl_TextChanged);
    }
    protected void Page_PreRender(object sender, EventArgs e)
    {
        if (PreConditon != null)
        {
            this.hdn_preCond.Value = string.Empty;
            if (PreConditon.Count > 0)
                for (int i = 0; i < PreConditon.Count; i++)
                {
                    this.hdn_preCond.Value += PreConditon[i] == null ? PreConditon[i] + "^" : PreConditon[i].ToString() + "^";
                }
        }
        if (filtercreteria != null)
        {
            this.hdnfiltercreteria.Value = string.Empty;
            if (filtercreteria != "") 
            {
                hdnfiltercreteria.Value = filtercreteria;
            }
        }
        Load_Config();
    }
    public void Load_Config()
    {
        #region Lookup Configuration
        if (_sLookupName != null && _sLookupName != "")
        {
            EzHms.DataAccessObject.DBLookUpSearch1 _lookUP = new EzHms.DataAccessObject.DBLookUpSearch1();
            this.lbl_lk_name.Text = this._sLookupName;
            LOOKUP_CONFIG1 _lConfig = _lookUP.GetLookUP_Search_Config(_sLookupName);
            if (_lConfig != null)
            {
                if (autoSrvUrl != string.Empty)
                {
                    hdn_auto_srv_method.Value = autoSrvUrl;
                    hdn_auto_srv_method.Value = hdn_auto_srv_method.Value.Substring(2, hdn_auto_srv_method.Value.Length - 2);
                }
                else
                {
                    hdn_auto_srv_method.Value = _lConfig.LOOKUP_SERVICE_PATH + "/" + _lConfig.LOOKUP_SERVICE_METHOD;
                    hdn_auto_srv_method.Value = hdn_auto_srv_method.Value.Substring(2, hdn_auto_srv_method.Value.Length - 2);
                }
             
                hdn_key_columns.Value = _lConfig.LOOKUP_KEY_COLUMNS.ToUpper();
                hdnsortorder.Value = _lConfig.LOOKUP_SORTING_ORDER;
                hdnisDefaultLoad.Value=_lConfig.IS_DEFAULT_LOAD;
                hdnprefixlength.Value = _lConfig.PREFIX_LENGTH.ToString();

                this.lbl_Title.Text = _lConfig.LOOKUP_NAME;
                string[] LookUPCOlumns = _lConfig.LOOKUP_COLUMN.Split(',');
                string[] LookUPCOlumnsAlias = _lConfig.LOOKUP_COLUMN_ALIAS.Split(',');
                _dlist = "[";
                for (int i = 0; i < LookUPCOlumns.Length; i++)
                {
                    if (i == 0)
                        _dlist += "{" + LookUPCOlumns[i] + ":'" + LookUPCOlumnsAlias[i] + "'}";
                    else
                        _dlist += ",{" + LookUPCOlumns[i] + ":'" + LookUPCOlumnsAlias[i] + "'}";
                }
                _dlist = _dlist + "]";
            }
        }
        #endregion
    }


    private string _filtercreteria=String.Empty;
    public string filtercreteria
    {
        get
        {
            return _filtercreteria;
        }
        set
        {
            _filtercreteria = value;
        }
    }
    private string isumr;
    public string IsUMR
    {
        get
        {
            return isumr;
        }
        set
        {
            isumr = value;
        }
    }
    #endregion

    protected string CompanySetting(CompanyPolicyEnum EnumType, Enum EnumValue)
    {
        
            return string.Empty;
    }
}

namespace EzHms.DataAccessObject
{
    public class DBLookUpSearch1 : DBExecuteDataReader
    {
        private Database dbSvc = null;
        private DbCommand cmd = null;
        private DataAccessLayer _dblayer = null;
        //private CollectionBase _cBase = null;
        public LOOKUP_CONFIG1 GetLookUP_Search_Config(string _ctrlName)
        {
            try
            {
                using (_dblayer = new DataAccessLayer())
                {
                    dbSvc = _dblayer.DBaseFactory;
                    cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_LOOKUP_CONFIG_NEW_APPROACH");
                    dbSvc.AddInParameter(cmd, "@IP_LOOKUP_NAME", DbType.String, _ctrlName);
                    GenerateCollectionReader sqlData = new GenerateCollectionReader(Generate_LookUP_Search);
                    LookUP_Config_Collection1 _cBase = (LookUP_Config_Collection1)_dblayer.ExecuteReaderCommand(cmd, sqlData);
                    return _cBase[0];
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUP_Search_Config").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }

        CollectionBase Generate_LookUP_Search(IDataReader reader)
        {
            try
            {
                LookUP_Config_Collection1 _lCollection = new LookUP_Config_Collection1();
                while (reader.Read())
                {
                    LOOKUP_CONFIG1 _lookUP = new LOOKUP_CONFIG1();
                    _lookUP.LOOKUP_COLUMN = reader["LOOKUP_COLUMN"].ToString();
                    _lookUP.LOOKUP_COLUMN_ALIAS = reader["LOOKUP_COLUMN_ALIAS"].ToString();
                    _lookUP.LOOKUP_KEY_COLUMNS = reader["LOOKUP_KEY_COLUMNS"].ToString();
                    _lookUP.LOOKUP_SERVICE_METHOD = reader["LOOKUP_SERVICE_METHOD"].ToString();
                    _lookUP.LOOKUP_SERVICE_PATH = reader["LOOKUP_SERVICE_PATH"].ToString();
                    _lookUP.LOOKUP_NAME = reader["LOOKUP_TITLE"].ToString();
                    _lookUP.LOOKUP_SORTING_ORDER = reader["DEFAULT_SORT_ORDER"].ToString();
                    _lookUP.PREFIX_LENGTH = Convert.ToInt32(reader["PREFIX_LENGTH"].ToString());
                    _lookUP.IS_DEFAULT_LOAD = reader["IS_DEFAULT_LOAD"].ToString();
                    _lCollection.Add(_lookUP);
                }
                return _lCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Generate_LookUP_Search").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }

        protected override CollectionBase GenerateCollection(IDataReader returnData)
        {
            throw new NotImplementedException();
        }
    }
}
namespace EzHms.ModelEntity
{

    public class LookUP_Config_Collection1 : System.Collections.CollectionBase
    {
        public int Add(LOOKUP_CONFIG1 _value)
        {
            return InnerList.Add(_value);
        }

        public LOOKUP_CONFIG1 this[int index]
        {
            get
            {
                if (List.Count > index)
                    return (LOOKUP_CONFIG1)List[index];
                return null;
            }
        }
    }

    public class LOOKUP_CONFIG1
    {
        private string _lookup_sorting_order;
        public string LOOKUP_SORTING_ORDER
        {
            set { _lookup_sorting_order = value; }
            get { return _lookup_sorting_order; }
        }

        private int _lookup_id;
        public int LOOKUP_ID
        {
            set { _lookup_id = value; }
            get { return _lookup_id; }
        }
        private string _lookup_name;
        public string LOOKUP_NAME
        {
            set { _lookup_name = value; }
            get { return _lookup_name; }
        }
        private string _lookup_desc;
        public string LOOKUP_DESC
        {
            set { _lookup_desc = value; }
            get { return _lookup_desc; }
        }
        private string _lookup_service_method;
        public string LOOKUP_SERVICE_METHOD
        {
            set { _lookup_service_method = value; }
            get { return _lookup_service_method; }
        }
        private string _lookup_service_path;
        public string LOOKUP_SERVICE_PATH
        {
            set { _lookup_service_path = value; }
            get { return _lookup_service_path; }
        }
        private string _lookup_column;
        public string LOOKUP_COLUMN
        {
            set { _lookup_column = value; }
            get { return _lookup_column; }
        }
        private string _lookup_column_alias;
        public string LOOKUP_COLUMN_ALIAS
        {
            set { _lookup_column_alias = value; }
            get { return _lookup_column_alias; }
        }
        private string _lookup_key_columns;
        public string LOOKUP_KEY_COLUMNS
        {
            set { _lookup_key_columns = value; }
            get { return _lookup_key_columns; }
        }
        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
        }
        private int _lookup_config_rev_no;
        public int LOOKUP_CONFIG_REV_NO
        {
            set { _lookup_config_rev_no = value; }
            get { return _lookup_config_rev_no; }
        }
        private string _is_default_load;
        public string IS_DEFAULT_LOAD
        {
            set { _is_default_load = value; }
            get { return _is_default_load; }
        }
        private int _prefix_length;
        public int PREFIX_LENGTH
        {
            set { _prefix_length = value; }
            get { return _prefix_length; }
        }
    }
}
