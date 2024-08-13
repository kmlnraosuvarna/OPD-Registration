using System;
using System.Collections.Generic;
using System.Web.UI;
using System.Web.UI.WebControls;
using EzHms.Abstract;
using EzHms.ModelEntity;
using System.Data;

public partial class Private_UserControls_PageHeaderControl : webuser
{
    // private IAssignPermissions idocwiseper = null;
    // private IUserValidation iuserval = null;
    // IUserValidation iUValidation = null;
    // private IUserDetails iUser = new EzHms.Services.UserDetailsServices();
    int docid;
    int moduleID;
    int Time_zone_id = 8;
    Byte[] senddata = new Byte[1024000];
    string ipAddress = System.Configuration.ConfigurationManager.AppSettings["DmsIpAdd"];
    string dmsPortNumber = System.Configuration.ConfigurationManager.AppSettings["DmsPort"];
    string _admn_no = string.Empty;
    string _umr_no = string.Empty;
    string _module_id = string.Empty;
    string strFileExtention = string.Empty;
    IDynamicMastersBO dMasters = new EzHms.Services.DynamicMasterService();
    MasterClass objr = new MasterClass();

    protected void Page_Load(object sender, EventArgs e)
    {
        if (SessionHandler.DBSESSION_ID == 0)
            Response.Redirect("~/Default.aspx");

        if (!IsPostBack)
        {
            // hdngdocformcd.Value = SessionHandler.DOC_FORM_CD;
            string DashBdFlag = Request.QueryString["DashBdFlag"] != null ? Request.QueryString["DashBdFlag"].ToString() : string.Empty;
            if (DashBdFlag.Trim() != string.Empty)
            {
                imgbacktodah.Visible = true;
            }
            hdnextendedVal.Value = base.CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.Is_Extended_Display_Req);
            hdninitialgridpagecount.Value = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.DEFAULT_GRID_PAGE_SIZE);
            MasterClass obj1 = new MasterClass();
            hdndownloadpath.Value = obj1.WebConfigSettings("DownloadPath");
            hdnclientNameFor.Value = obj1.WebConfigSettings("ClientName");
            hdnDateFormat.Value = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.DATE_FORMAT);
            if (string.IsNullOrEmpty(hdnDateFormat.Value))
            {
                hdnDateFormat.Value = "dd-MMM-yyyy";
            }
            hdnTimeFormat.Value = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.TIME_FORMAT);
            if (!string.IsNullOrEmpty(hdnTimeFormat.Value))
            {
                if (hdnTimeFormat.Value == "12 Hours")
                {
                    hdnTimeFormat.Value = "hh:mm:ss tt";
                }
                else if (hdnTimeFormat.Value == "24 Hours")
                {
                    hdnTimeFormat.Value = "HH:mm:ss";
                }
                else
                {
                    hdnTimeFormat.Value = "HH:mm:ss tt";
                }
            }
            else
            {
                hdnTimeFormat.Value = "HH:mm:ss tt";
            }
            MasterClass obj = new MasterClass();
            hdnclientNameFor.Value = obj.WebConfigSettings("ClientName");
            hdnMobileMadatory.Value = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.Is_Mobile_No_Mandatory);
            hdnMobileMinDigits.Value = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.Mobile_No_Minimum_Digits);
            hdnMobileMaxDigits.Value = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.Mobile_No_Maximum_Digits);
            hdnIsMedClg.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.Is_Medical_College).ToUpper();

            hdnEnableRuralBedssel.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.IS_ENABLE_RURAL_BED_SEL).ToUpper();
            hdnEnableUrbanBedssel.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.IS_ENABLE_URBAN_BED_SEL).ToUpper();
            if (hdnIsMedClg.Value == "TRUE")
            {
                string query = "SELECT ENTITY_ID FROM ENTITY WHERE ENTITY_DESC='RECORD TYPE' AND ENTITY_CD='REC_TYPE'";
                DataSet ds = dMasters.DynamicDataset(query);
                int Entity_id = 10028;
                if (ds.Tables[0].Rows.Count > 0)
                {
                    Entity_id = Convert.ToInt32(ds.Tables[0].Rows[0]["ENTITY_ID"]);
                }
                bindTarnctionType(Entity_id);
            }
            hdntranpwdsave.Value = "";
            string addprmn = "N";//CheckAddPermission(SessionHandler.DOCUMENT_ID);
            getPermissionsDMS(); string shiftstatus = "N";//CheckShiftLogStatus(DOC_ID);
            if (_page_type == PageClassification.AddNew && addprmn == "Y" && shiftstatus == "N" || (shiftstatus == "H" && IsShiftValidate != "Y") || shiftstatus == "P" || shiftstatus == "R" || shiftstatus == "S" || shiftstatus == "J")
            {
                Checkdocper();
                ScriptManager.RegisterStartupScript(this, this.GetType(), "alert", "CheckShiftLogStatus('" + shiftstatus + "','" + System.Web.HttpContext.Current.Request.Url.AbsoluteUri + "')", true);
            }
            else
            {
                if (Request.QueryString["DOC_ID"] != null)
                {
                    SessionHandler.DOCUMENT_ID = Convert.ToInt32(Request.QueryString["DOC_ID"]);
                    hdndocId.Value = SessionHandler.DOCUMENT_ID.ToString();
                }
                else if (Request.QueryString["DOC_FORM_CD"] != null)
                {
                    hdndocId.Value = SessionHandler.DOCUMENT_ID.ToString();
                }
                else
                {
                    string path = Request.AppRelativeCurrentExecutionFilePath.ToString();
                    DataTable dt = (DataTable)SessionHandler.ModDocAccess;
                    DataView dv = new DataView(dt);
                    dv.RowFilter = "NEW_PAGE_URL=" + "'" + path + "'";
                    if (dv.Count > 0)
                    {
                        hdndocId.Value = dv[0]["DOC_ID"].ToString();
                        SessionHandler.DOCUMENT_ID = Convert.ToInt32(dv[0]["DOC_ID"].ToString());
                    }
                    else
                    {
                        hdndocId.Value = SessionHandler.DOCUMENT_ID.ToString();
                    }
                }
                Checkdocper();
                if (Request.QueryString["ApproveBtn"] == "Y")
                {
                    imgBtnApproved.Visible = true;
                }
                if (SessionHandler.RoleUsers != null)
                {
                    // IUserMenu iroleUser = new EzHms.Services.UserMenuService();
                    // DataTable _dtUserRole = iroleUser.GetUsersByRole(Convert.ToInt32(SessionHandler.RoleID), SessionHandler.DBSESSION_ID);

                    ddlUsers.DataSource = SessionHandler.RoleUsers.DataSet;
                    ddlUsers.DataTextField = "USER_NAME";
                    ddlUsers.DataValueField = "USER_ID";
                    ddlUsers.DataBind();

                    ddlUsers.SelectedValue = SessionHandler.UserID.ToString();
                }
                //This is for page help
                SessionHandler.Doc_Path = Request.Url.AbsolutePath;
            }

        }
    }
    private void bindTarnctionType(int entityid)
    {
        /// EzHms.DataAccessObject.DBBinGeneration dbhc = new EzHms.DataAccessObject.DBBinGeneration();
        //   CollectionBase dset = dbhc.GetEntityValuesByEntityId(entityid);
        radiousertran.DataSource = null;
        radiousertran.DataTextField = "ENTITY_VALUE_NAME";
        radiousertran.DataValueField = "ENTITY_VALUE_ID";
        radiousertran.DataBind();
        if (SessionHandler.REC_TYPE_ID != "" && SessionHandler.REC_TYPE_ID == "3")
        {
            SessionHandler.USER_REC_TYPE_ID = SessionHandler.REC_TYPE_ID;
            SessionHandler.REC_TYPE_ID = "1";
        }
        if (SessionHandler.USER_REC_TYPE_ID == "3")
        {
            radiousertran.Enabled = true;
            divShowHide.Style.Add("display", "block");
            divUserTran.Style.Add("display", "block");
        }
        else
        {
            radiousertran.Enabled = false;
            divShowHide.Style.Add("display", "none");
            divUserTran.Style.Add("display", "none");
        }
        radiousertran.SelectedValue = SessionHandler.REC_TYPE_ID;
        radiousertran.Items.RemoveAt(2);

    }

    public string CheckAddPermission(int docid)
    {
        //DataSet _dsgetdocper = Docpermission.DocpermissionbyDocId(docid);
        //if (_dsgetdocper != null && _dsgetdocper.Tables[0].Rows.Count > 0)
        //{
        //    if (_dsgetdocper.Tables[0].Rows[0]["ACCESS_ADD"].ToString() == "Y")
        //        return "Y";
        //    return string.Empty;
        //}
        //else
        return string.Empty;
    }
    protected override void OnLoad(EventArgs e)
    {
        base.OnLoad(e);

        if (SessionHandler.UserID == "1")
        {
            ImgBtnUManualAdd.Style["display"] = "block";
        }
        else
        {
            ImgBtnUManualAdd.Style["display"] = "none";
            ImageButton3.Style["display"] = "none";
            DBManual.Style["display"] = "none";
            UmanualHelp1.Style["display"] = "none";
        }
        this.ImgBtnUManualAdd.Attributes.Add("onclick", "window.open(this.href,null,'top=0,left=0,titlebar=no,width=800,height=500,toolbar=no,status=no,location=no,menubar=no,resizable=no,scrollbars=yes,maximize=no');return false;");
        DBManual.Attributes.Add("onclick", "window.open(this.href,null,'top=0,left=0,titlebar=no,width=800,height=500,toolbar=no,status=no,location=no,menubar=no,resizable=no,scrollbars=yes,maximize=no');return false;");
        this.UserManual.Attributes.Add("onclick", "window.open(this.href,null,'top=0,left=0,titlebar=no,width=800,height=500,toolbar=no,status=no,location=no,menubar=no,resizable=no,scrollbars=yes,maximize=no');return false;");

    }

    public delegate void OnAddNew(object sender, ImageClickEventArgs e);
    public OnAddNew AddNewItems;
    public delegate void OnEdit(object sender, ImageClickEventArgs e);
    public OnEdit EditItems;
    public delegate void OnReload(object sender, ImageClickEventArgs e);
    public OnReload ReloadItems;
    public delegate void OnDelete(object sender, ImageClickEventArgs e);
    public OnDelete DeleteItems;
    public delegate void OnSave(object sender, ImageClickEventArgs e);
    public OnSave SaveItems;
    public delegate void OnCancel(object sender, ImageClickEventArgs e);
    public OnCancel CancelItems;
    public delegate void OnClear(object sender, ImageClickEventArgs e);
    public OnClear ClearItems;
    public delegate void OnSaveConfig(object sender, ImageClickEventArgs e);
    public OnSaveConfig SaveConfigInformation;
    public delegate void OnApprove(object sender, ImageClickEventArgs e);
    public OnApprove ApproveItems;
    public delegate void onPrint(object sender, ImageClickEventArgs e);
    public onPrint PrintItems;

    /// <summary>
    /// Fetch the Document permission for the user
    /// based on permission to make the controls are visible
    /// </summary>
    void Checkdocper()
    {
        //moduleID = HttpContext.Current.Session["MODULE_ID"].ToString() != "undefined" ? Convert.ToInt32(HttpContext.Current.Session["MODULE_ID"]) : 0;
        docid = SessionHandler.DOCUMENT_ID;
        /*  ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "aler", "alert("+docid+");", true); */

        if (docid > 0)
        {
            switch (_page_type)
            {
                case EzHms.ModelEntity.PageClassification.Grid:
                    {
                        Isshowindicares = false;
                        imgBtnApproved.Visible = false;
                        imgconfiguration.Visible = false;
                        imgBtnReload.Visible = false;
                        imgdelete.Visible = false;
                        imgbtnclear.Visible = false;
                        imgbtnEdit.Visible = false;
                        imgbtncancel.Visible = false;
                        imgbtnSave.Visible = false;
                        divexport.Attributes["style"] = "display:none;";
                        break;
                    }
                case PageClassification.AddNew:
                    {
                        imgbtnSave.Visible = true;
                        imgbtnclear.Visible = true;
                        imgbtncancel.Visible = true;
                        imgBtnApproved.Visible = false; /* approve button */
                        imgadd.Visible = false;/* add button */
                        imgbtnEdit.Visible = false;/* edit button */
                        imgdelete.Visible = false;/* delete button */
                        imgdirectPrint.Visible = false; /* print button */
                        imgBtnReload.Visible = false; /* reload button */
                        imgconfiguration.Visible = false; /* configaration button */
                        divexport.Attributes["style"] = "display:none;";
                        break;
                    }
                case PageClassification.View:
                    {
                        imgbtnSave.Visible = false;
                        imgbtnclear.Visible = false;
                        imgbtncancel.Visible = true;
                        imgBtnApproved.Visible = false; /* approve button */
                        imgadd.Visible = false;/* add button */
                        imgbtnEdit.Visible = false;/* edit button */
                        imgdelete.Visible = false;/* delete button */
                        imgdirectPrint.Visible = false; /* print button */
                        imgBtnReload.Visible = false; /* reload button */
                        imgconfiguration.Visible = false; /* configaration button */
                        imgadd.Visible = true;
                        divexport.Attributes["style"] = "display:none;";
                        break;
                    }
            }
        }

            
        
        string ismaskActive = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.Is_Screen_Mask_Required);
        hdnIstokencall.Value = ismaskActive;
        if (ismaskActive == "True" || ismaskActive == "Yes")
        {
            hdnTokenSys.Value = _page_type.ToString();
        }
        else
        {
            hdnTokenSys.Value = string.Empty;
        }

        if (this.imgbtnSave.Visible == true)
            this.tdindicares.Style.Add(HtmlTextWriterStyle.Display, "block");
    }

    #region properties



    public string UMR_NO
    {
        get { return hdnUmrNo.Value; }
        set { hdnUmrNo.Value = value; }
    }

    public string TRANSACTION_NUM
    {
        get { return hdnTransactionId.Value; }
        set { hdnTransactionId.Value = value; }
    }
    private int doc_id;
    public int DOC_ID
    {
        get { return doc_id; }
        set { doc_id = value; }
    }
    public string CONSULTATION_NO
    {
        get { return hdnConsultationNum.Value; }
        set { hdnConsultationNum.Value = value; }
    }

    public string ADMN_NO
    {
        get { return hdnAdmnNo.Value; }
        set { hdnAdmnNo.Value = value; }
    }


    private PageClassification _page_type;
    public PageClassification PageType
    {
        set
        {
            _page_type = value;
        }
    }


    public string OnUploadClientClick
    {
        set
        {
            this.imgDmsUpload.OnClientClick = value;
        }
    }

    public string OnDownloadClientClick
    {
        set
        {
            this.imgDmsDownload.OnClientClick = value;
        }
    }

    public string OnAddClientClick
    {
        set
        {
            this.imgadd.OnClientClick = value;
        }
    }

    public string OnEditClientClick
    {
        set
        {
            this.imgbtnEdit.OnClientClick = value;
        }
    }

    public string OnDeleteClientClick
    {
        set
        {
            this.imgdelete.OnClientClick = value;
        }
    }
    public string OnApprovalClientClick
    {
        set
        {
            this.imgBtnApproved.OnClientClick = value;
        }
    }


    public string OnDmsViewClick
    {
        set
        {
            this.imgDmsView.OnClientClick = value;
        }
    }

    public string OnSaveClientClick
    {
        set
        {
            this.imgbtnSave.OnClientClick = value;
        }
    }

    public string OnCancelClientClick
    {
        set
        {
            this.imgbtncancel.OnClientClick = value;
        }
    }

    public string OnClearClientClick
    {
        set
        {
            this.imgbtnclear.OnClientClick = value;
        }
    }

    public bool OnReloadClientClick
    {
        set
        {
            foreach (ListItem li in chkConfigColumns.Items)
            {
                li.Selected = value;
            }
        }
    }

    private bool _IsShowMessage = true;
    public bool IsShowMessage
    {
        set
        {
            _IsShowMessage = value;
            this.lblMsg.Visible = value;
        }
        get { return _IsShowMessage; }
    }

    private bool _IsShowApprove = true;
    public bool IsShowApprove
    {
        set
        {
            _IsShowApprove = value;
            this.imgBtnApproved.Visible = value;
        }
        get { return _IsShowApprove; }
    }

    private bool _IsShowBox = true;
    public bool IsShowBox
    {
        set
        {
            _IsShowBox = value;
            this.box.Visible = value;
        }
        get { return _IsShowBox; }
    }

    private bool _IsShowEdit = true;
    public bool IsShowEdit
    {
        set
        {
            _IsShowEdit = value;
            this.imgbtnEdit.Visible = value;
        }
        get { return _IsShowEdit; }
    }

    private bool _IsShowConfig = true;
    public bool IsShowConfig
    {
        set
        {
            _IsShowConfig = value;
            this.imgconfiguration.Visible = value;
        }
        get { return _IsShowConfig; }
    }

    private bool _IsShowAdd = true;
    public bool IsShowAdd
    {
        set
        {
            _IsShowAdd = value;
            this.imgadd.Visible = value;
        }
        get { return _IsShowAdd; }
    }

    public string AddPostBackUrl
    {
        set
        {
            this.imgadd.PostBackUrl = value;
        }
    }
    private bool _IsShowReload = true;
    public bool IsShowReload
    {
        set
        {
            _IsShowReload = value;
            this.imgBtnReload.Visible = value;
        }
        get { return _IsShowReload; }
    }

    private bool _IsShowCancel = true;
    public bool IsShowCancel
    {
        set
        {
            _IsShowCancel = value;
            this.imgbtncancel.Visible = value;
        }
        get { return _IsShowCancel; }
    }

    public string CancelPostbakcUrl
    {
        set
        {
            this.imgbtncancel.PostBackUrl = value;
        }
    }

    private bool _IsShowClear = true;
    public bool IsShowClear
    {
        set
        {
            _IsShowClear = value;
            this.imgbtnclear.Visible = value;
        }
        get { return _IsShowClear; }
    }

    private bool _IsShowDmsUpload = false;
    public bool IsShowDmsUpload
    {
        set
        {
            _IsShowDmsUpload = value;
            this.imgDmsUpload.Visible = value;
        }
        get { return _IsShowDmsUpload; }
    }

    private bool _IsShowDmsDownload = false;
    public bool IsShowDmsDownload
    {
        set
        {
            _IsShowDmsDownload = value;
            this.imgDmsDownload.Visible = value;
        }
        get { return _IsShowDmsDownload; }
    }

    private bool _IsShowDmsView = false;
    public bool IsShowDmsView
    {
        set
        {
            _IsShowDmsView = value;
            this.imgDmsView.Visible = value;
        }
        get { return _IsShowDmsView; }
    }


    private bool _IsShowDelete = true;
    public bool IsShowDelete
    {
        set
        {
            _IsShowDelete = value;
            this.imgdelete.Visible = value;
        }
        get { return _IsShowDelete; }
    }

    private bool _IsShowSave = true;
    public bool IsShowSave
    {
        set
        {
            _IsShowSave = value;
            this.imgbtnSave.Visible = value;
        }
        get { return _IsShowSave; }
    }
    private bool _IsShowDashBoard = true;
    public bool IsShowDashBoard
    {
        set
        {
            _IsShowDashBoard = value;
            this.imgbacktodah.Visible = value;
        }
        get { return _IsShowDashBoard; }
    }
    public string IsShiftValidate
    {
        get { return hdnisshiftvaliate.Value; }
        set { hdnisshiftvaliate.Value = value; }

    }
    public int ConfigPageSize
    {
        get
        {
            return Convert.ToInt32(ddlConfigPage.SelectedValue);
        }
    }

    public bool CauseValidation
    {
        set
        {
            this.imgadd.CausesValidation = value;
        }
    }
    public bool CauseValidationSave
    {
        set
        {
            this.imgbtnSave.CausesValidation = value;
        }
    }
    public bool IsApprovalEnable
    {
        set
        {
            this.imgBtnApproved.Enabled = value;
        }
    }

    public bool Isshowindicares
    {
        set
        {
            this.tdindicares.Visible = value;
        }
    }
    private bool _IsShowPrint = true;
    public bool IsShowPrint
    {
        set
        {
            _IsShowPrint = value;
            this.imgdirectPrint.Visible = value;
        }
        get { return _IsShowPrint; }
    }

    private bool _ischeckshiftlog;
    public bool IsCheckShiftLog
    {
        set
        {
            this._ischeckshiftlog = value;
        }
        get { return _ischeckshiftlog; }
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
            imgbtnSave.TabIndex = (short)(value++);
            imgbtnEdit.TabIndex = (short)(value++);
            imgadd.TabIndex = (short)(value++);
            imgbtnclear.TabIndex = (short)(value++);
            imgbtncancel.TabIndex = (short)(value);
        }
    }

    private List<string> _configColumns = new List<string>();
    public List<string> ConfigColumns
    {
        set
        {
            chkConfigColumns.Items.Clear();
            _configColumns = value;
            foreach (string _columnName in _configColumns)
            {
                ListItem _item = new ListItem();
                _item.Text = _columnName;// +"&nbsp;&nbsp;&nbsp;";
                _item.Value = _columnName;
                chkConfigColumns.Items.Add(_item);
            }
        }
    }

    public int PageSize
    {
        get
        {
            return Convert.ToInt32(ddlConfigPage.SelectedValue);
        }
    }

    private List<string> _selectedColumns = new List<string>();
    public List<string> SelectedColumns
    {
        get
        {
            foreach (ListItem _item in chkConfigColumns.Items)
            {
                if (_item.Selected == true)
                {
                    _selectedColumns.Add(_item.Text);
                }
            }
            return _selectedColumns;
        }
    }


    #endregion

    protected override void OnInit(EventArgs e)
    {
        base.OnInit(e);
        this.imgadd.Click += new ImageClickEventHandler(imgadd_Click);
        this.imgBtnReload.Click += new ImageClickEventHandler(imgBtnReload_Click);
        this.imgdelete.Click += new ImageClickEventHandler(imgdelete_Click);
        this.imgbtnSave.Click += new ImageClickEventHandler(imgbtnSave_Click);
        this.imgbtncancel.Click += new ImageClickEventHandler(imgbtncancel_Click);
        this.imgbtnclear.Click += new ImageClickEventHandler(imgbtnclear_Click);
        this.imgBtnSaveConfig.Click += new ImageClickEventHandler(imgBtnSaveConfig_Click);
        this.imgbtnEdit.Click += new ImageClickEventHandler(imgbtnEdit_Click);
        this.imgBtnApproved.Click += new ImageClickEventHandler(imgBtnApproved_Click);
        this.imgdirectPrint.Click += new ImageClickEventHandler(imgdirectPrint_Click);
        this.imgbacktodah.Click += new ImageClickEventHandler(imgbacktodah_Click);

    }

    void imgbacktodah_Click(object sender, ImageClickEventArgs e)
    {

        string DashBdFlag = Request.QueryString["DashBdFlag"] != null ? Request.QueryString["DashBdFlag"].ToString() : string.Empty;
        if (DashBdFlag.Trim() != string.Empty && DashBdFlag.Trim() == "Adm")
        {
            Response.Redirect("~/Private/Admin/View/DashBoard/AdminBillDashboardNew.aspx?ref=dashboard");
        }
        else if (DashBdFlag.Trim() != string.Empty && DashBdFlag.Trim() == "frntadmn")
        {

            Response.Redirect("~/Private/Admin/View/DashBoard/ForntOfficeDashboardNew.aspx?ref=dashboard");
        }
        else if (DashBdFlag.Trim() != string.Empty && DashBdFlag.Trim() == "Lab")
            Response.Redirect("~/Private/Admin/View/DashBoard/LabDashBoard.aspx?ref=dashboard");
        else if (DashBdFlag.Trim() != string.Empty && DashBdFlag.Trim() == "FrntOffice")
        {

            string umr_no = !string.IsNullOrEmpty(Session["DashBoard_umrno"].ToString()) ? Session["DashBoard_umrno"].ToString() : string.Empty;
            string admn_no = !string.IsNullOrEmpty(Session["DashBoard_admnno"].ToString()) ? Session["DashBoard_admnno"].ToString() : string.Empty;
            string pat_id = !string.IsNullOrEmpty(Session["DashBoard_pat_id"].ToString()) ? Session["DashBoard_pat_id"].ToString() : string.Empty;
            //ReleaseTransactionLog();
            Response.Redirect("~/Private/Admin/View/DashBoard/FrontOfficeDashBoard_New.aspx?umr_no=" + umr_no + "&admn_no=" + admn_no + "&pat_id=" + pat_id);
        }
        else if (DashBdFlag.Trim() == "LIMS")
        {
            string umr_no = !string.IsNullOrEmpty(Session["DashBoard_umrno"].ToString()) ? Session["DashBoard_umrno"].ToString() : string.Empty;
            string pat_id = !string.IsNullOrEmpty(Session["DashBoard_pat_id"].ToString()) ? Session["DashBoard_pat_id"].ToString() : string.Empty;
            Response.Redirect("~/Private/Diagnostics/Lims_Billing_DashBoard.aspx?umr_no=" + umr_no + "&pat_id=" + pat_id);
        }


    }

    private void ReleaseTransactionLog()
    {
        if (!string.IsNullOrEmpty(Request.QueryString["admn_no"]))
        {
            //UmrLock objLock = new UmrLock();
            //lockModal lockMaster = new lockModal();
            //lockMaster.UMR_NO = string.Empty;
            //lockMaster.ADMN_NO = Request.QueryString["admn_no"];
            //lockMaster.BILL_NO = string.Empty;
            //lockMaster.DOC_ID = SessionHandler.DOCUMENT_ID;
            //lockMaster.SESSION_ID = SessionHandler.DBSESSION_ID;
            //objLock.ReleaseTransactionLog(lockMaster);
        }
    }

    void imgdirectPrint_Click(object sender, ImageClickEventArgs e)
    {
        if (this.PrintItems != null)
            this.PrintItems(sender, e);
    }

    void imgBtnApproved_Click(object sender, ImageClickEventArgs e)
    {
        if (this.ApproveItems != null)
            this.ApproveItems(sender, e);
    }

    void imgbtnEdit_Click(object sender, ImageClickEventArgs e)
    {
        if (this.EditItems != null)
            this.EditItems(sender, e);
    }

    void imgBtnSaveConfig_Click(object sender, ImageClickEventArgs e)
    {
        if (this.SaveConfigInformation != null)
        {
            this.SaveConfigInformation(sender, e);
        }
    }

    void imgbtnclear_Click(object sender, ImageClickEventArgs e)
    {
        if (this.ClearItems != null)
            this.ClearItems(sender, e);
    }

    void imgbtncancel_Click(object sender, ImageClickEventArgs e)
    {
        if (this.CancelItems != null)
            this.CancelItems(sender, e);
    }
    string CheckShiftLogStatus(int subdocid)
    {
        docid = subdocid > 0 ? subdocid : SessionHandler.DOCUMENT_ID;
        DataTable dt = (DataTable)SessionHandler.ModDocAccess;
        DataView dv = new DataView(dt);
        dv.RowFilter = "DOC_ID=" + docid;
        if (dv.Count > 0)
        {
            string docshiftstatus = dv[0]["IS_SHIFT_LOG_REQUIRED"].ToString() != string.Empty ? dv[0]["IS_SHIFT_LOG_REQUIRED"].ToString().ToUpper() : "N";
            if (docshiftstatus == "Y")
            {
                string status = ShiftLogStatus(subdocid > 0 ? subdocid : docid);
                if (status == "Y")
                    return "Y";
                else if (status == "R")
                    return "R";
                else if (status == "H")
                    return "H";
                else if (status == "S")
                    return "S";
                else if (status == "J")
                    return "J";
                else
                    return "N";
            }

        }
        return "Y";
    }
    void imgbtnSave_Click(object sender, ImageClickEventArgs e)
    {
        docid = SessionHandler.DOCUMENT_ID;
        DataTable dt = (DataTable)SessionHandler.ModDocAccess;
        DataView dv = new DataView(dt);
        dv.RowFilter = "DOC_ID=" + docid;
        if (dv.Count > 0)
        {
            if (dv[0]["ISSECURITYCD"].ToString().ToUpper() == "Y")
            {
                txtTransactionpwd.Focus();
                ModalPopupExtender3.Show();
            }
            else
            {
                if (dv[0]["IS_SHIFT_LOG_REQUIRED"].ToString().ToUpper() == "Y")
                {
                    string status = ShiftLogStatus(docid);
                    if (status == "Y" || status == "R" || status == "H")
                    {
                        if (this.SaveItems != null)
                        {
                            this.SaveItems(sender, e);
                        }
                    }
                    else
                    {
                        if (status == "N")
                            ScriptManager.RegisterClientScriptBlock((sender as Control), this.GetType(), "", "alert('Please Login for Shift');ShowShiftlogDialog();", true);
                    }
                }
                else
                {
                    if (this.SaveItems != null)
                    {
                        this.SaveItems(sender, e);
                    }
                }

            }
        }
        else
        {
            if (this.SaveItems != null)
            {
                this.SaveItems(sender, e);
            }
        }

    }

    //public int SaveDmsUploadDetails
    //{
    //    set
    //    {
    //        if (value > 0)
    //            SaveDmsDetails(value);
    //    }
    //}

    //private void SaveDmsDetails(int tran_id)
    //{


    //    StringBuilder _strfileupload = new StringBuilder();
    //    string imagename = string.Empty;
    //    Byte[] _image_bytes = new Byte[1000];
    //    if (DMSControl1.FILE_UPLOAD.FileName != string.Empty)
    //    {
    //        Guid _guid;
    //        _guid = Guid.NewGuid();
    //        //Getting File Extension
    //        string strFileExtention = System.IO.Path.GetExtension(DMSControl1.FILE_UPLOAD.PostedFile.FileName).ToUpper();
    //        //Checking File Extension is jpg/jpeg
    //        if (strFileExtention == ".jpg".ToUpper() || strFileExtention == ".jpeg".ToUpper())
    //        {
    //            imagename = _guid + DMSControl1.FILE_UPLOAD.FileName;
    //            //Saving Image into Physical Folder
    //            DMSControl1.FILE_UPLOAD.SaveAs(Server.MapPath("~/DMS") + "\\" + imagename);
    //            string filepath = Server.MapPath("~/DMS") + "\\" + imagename;
    //            //Converting image into bytes
    //            _image_bytes = File.ReadAllBytes(filepath);

    //            if (_strfileupload.ToString() == "")
    //            {
    //                _strfileupload.Append("" + UMR_NO + "," + ADMN_NO + "," + ADMN_NO + "," + SessionHandler.MODULE_ID + "," + SessionHandler.DOCUMENT_ID + "," + SessionHandler.UserID + ",FNF,REMARKS:" + DMSControl1.COMMENTS + "," + GetToBase64Format(_image_bytes) + " ");
    //                _strfileupload.Append("$$$");

    //            }
    //            else
    //            {
    //                _strfileupload.Append("");
    //            }


    //            try
    //            {


    //                ip = new IPEndPoint(IPAddress.Parse(ipAddress.ToString()), Convert.ToInt32(dmsPortNumber));
    //                server = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
    //                server.Connect(ip);
    //                server.Send(System.Text.Encoding.ASCII.GetBytes(_strfileupload.ToString()));
    //                Byte[] _status = new Byte[100];
    //                server.Receive(_status);
    //                string savedstatus = Encoding.ASCII.GetString(_status).Trim();
    //                if (savedstatus.Substring(0, 1) == "Y")
    //                {
    //                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "saveAlert", "alert('Documents Saved!');", true);
    //                }
    //            }
    //            catch (Exception)
    //            {


    //            }
    //        }
    //    }


    //}

    protected string GetToBase64Format(Byte[] image)
    {
        return Convert.ToBase64String(image);
    }

    //protected void Get()
    //{



    //        ip = new IPEndPoint(IPAddress.Parse(txtipadd.Text.ToString()), Convert.ToInt32(txtport.Text.ToString()));
    //        server = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);

    //       try{
    //            server.Connect(ip);

    //        }
    //        catch (Exception ex)
    //        {
    //        }

    //        //string filetext = File.ReadAllText("D:\\vinodanna\\base64.base64");

    //        //byte[] array = Convert.FromBase64String(filetext);
    //        //File.WriteAllBytes("D:\\vinodanna\\" + "001.jpg", array);


    //        string str = string.Empty;
    //        DirectoryInfo dire = new DirectoryInfo(strpath);
    //        FileInfo[] finof = dire.GetFiles("*.jpg");
    //        for (int k = 0; k <= finof.Length - 1; k++)
    //        {
    //            //senddata = File.ReadAllBytes("D:\\JPGTEST\\00000001.jpg");
    //            //string str = Convert.ToBase64String(senddata);

    //            senddata = File.ReadAllBytes(finof[k].FullName.ToString());

    //            if (k == 0)
    //            {
    //                //sending order  ->moduleid,docid,umrno,admissionno,transactionno,
    //                str = "UMR33869,OP441,OP441,HIMSAPP,BILLING,SIVA,FNA," + Convert.ToBase64String(senddata);

    //            }
    //            else
    //            {
    //                if ((k == 4) || (k == 7) || (k == 10) || (k == 13))
    //                {
    //                    str = str + ",FNF," + Convert.ToBase64String(senddata);
    //                }
    //                else
    //                {
    //                    str = str + "," + Convert.ToBase64String(senddata);
    //                }

    //            }

    //            senddata = null;

    //        }


    //        File.AppendAllText(strpath + "\\filesdata.txt", str + "$$$");


    //        // File.WriteAllBytes("E:\\Softwares\\D44123.jpg", JH123);      
    //        //server.Send(JHJ);
    //        // server.Send(System.Text.Encoding.ASCII.GetBytes(str));
    //        byte[] strlength = File.ReadAllBytes(strpath + "\\filesdata.txt");
    //        server.Send(strlength);
    //        senddata = null;
    //        str = string.Empty;


    //}

    void imgdelete_Click(object sender, ImageClickEventArgs e)
    {
        if (this.DeleteItems != null)
            this.DeleteItems(sender, e);
    }

    void imgBtnReload_Click(object sender, ImageClickEventArgs e)
    {

        if (this.ReloadItems != null)

            this.ReloadItems(sender, e);
    }

    void imgadd_Click(object sender, ImageClickEventArgs e)
    {
        if (this.AddNewItems != null)
            this.AddNewItems(sender, e);
    }

    public void NewUserLogin()
    {
        //ViewState["OLDSESSION_ID"] = SessionHandler.DBSESSION_ID;

        //lblMessage.Visible = false;
        //userLog _userlog = new userLog();
        //_userlog.UserName = ddlUsers.SelectedItem.Text;// txtUserName.Text;
        //_userlog.Password = txtTransactionpwd.Text; //txtPassword.Text;
        //_userlog.HostName = Context.Request.UserHostName;
        //_userlog.MACHINE = System.Net.Dns.GetHostByName("LocalHost").HostName;
        //_userlog.VERSION = System.Environment.OSVersion.ToString();
        //_userlog.TERMINAL = Context.Request.UserHostAddress;
        //_userlog.OSUSER = System.Environment.UserDomainName.ToString();
        //_userlog.ROLE_ID = Convert.ToInt32(SessionHandler.RoleID);//we can change this value based on roles
        //_userlog.START_TIME = ClientTime.ToString();
        //_userlog.ORG_ID = Convert.ToInt32(SessionHandler.ORG_ID);
        //_userlog.LOC_ID = Convert.ToInt32(SessionHandler.LOCATION_ID);
        //_userlog.GRP_ID = Convert.ToInt32(SessionHandler.GRP_ID);
        //_userlog.TIME_ZONE_ID = Time_zone_id;
        ////cal method for check the credentials
        //iUValidation = new EzHms.Services.UserValidationCredentialService();
        ////check the user credentials,insert loginfo and get the user details
        //string _checkStatus = string.Empty;
        //int _dbSessionID = 0;
        //int _minutes = 0;
        //DataSet _userInfo = iUValidation.GetUserDetails(_userlog, out _checkStatus, out _dbSessionID, out _minutes);
        //if (_userInfo != null)
        //{
        //    if (_userInfo.Tables.Count > 0)
        //    {
        //        if (_userInfo.Tables[0] != null && _userInfo.Tables[0].Rows.Count > 0)
        //        {
        //            SessionHandler.DBSESSION_ID = _dbSessionID;
        //            ModalPopupExtender3.Show();
        //        }
        //        else
        //        {
        //            lblMessage.Visible = true;
        //            lblMessage.Text = _checkStatus;
        //            txtPassword.Focus();
        //            ModalPopupExtender3.Show();
        //        }
        //    }
        //    else
        //    {
        //        lblMessage.Visible = true;
        //        lblMessage.Text = _checkStatus;
        //        txtPassword.Focus();
        //        ModalPopupExtender3.Show();
        //    }
        //}
        //else
        //{
        //    lblMessage.Visible = true;
        //    lblMessage.Text = "Server Exception";
        //    txtPassword.Focus();
        //    ModalPopupExtender3.Show();
        //}
    }
    protected void imgBtnLogin_ClickNusre(object sender, ImageClickEventArgs e)
    {
        NewUserLogin();
    }

    protected void CheckSecurityCd()
    {
        int docid;
        docid = SessionHandler.DOCUMENT_ID;
        DataTable dt = (DataTable)SessionHandler.ModDocAccess;
        DataView dv = new DataView(dt);
        dv.RowFilter = "DOC_ID=" + docid;
        if (dv[0]["ISSECURITYCD"].ToString().ToUpper() == "Y")
        {
            ModalPopupExtender2.Show();
        }
    }

    protected void imgSaveTransaction_Click(object sender, ImageClickEventArgs e)
    {

        //docid = SessionHandler.DOCUMENT_ID;
        //moduleID = Convert.ToInt32(HttpContext.Current.Session["MODULE_ID"]);
        //if (docid > 0)
        //{
        //    idocwiseper = new EzHms.Services.AssignPermissions();
        //    DataSet _dsgetdocper = Docpermission.DocpermissionbyDocId(SessionHandler.DOCUMENT_ID); //idocwiseper.GetDocPermissions(Convert.ToInt32(SessionHandler.UserID), moduleID, docid);
        //    if (_dsgetdocper.Tables[0].Rows.Count > 0)
        //    {
        //        if ((_dsgetdocper.Tables[0].Rows[0]["ACCESS_ADD"].ToString()) == "Y")
        //        {
        //            int _Count = 0;
        //            iuserval = new EzHms.Services.UserValidationCredentialService();
        //            UserLogingInfo _uloginfo = new UserLogingInfo();
        //            if (ddlUsers.SelectedIndex > -1)
        //                _uloginfo.USER_ID = Convert.ToInt32(ddlUsers.SelectedValue);
        //            else
        //                _uloginfo.USER_ID = Convert.ToInt32(SessionHandler.UserID);
        //            _uloginfo.Transaction_pwd = txtTransactionpwd.Text;
        //            DataSet ds = iuserval.GetTransactionPwdDetails(_uloginfo, out _Count);
        //            if (_Count > 0)
        //            {
        //                hdntranpwdsave.Value = "Y";
        //                ViewState["OLDSESSION_ID"] = SessionHandler.DBSESSION_ID;
        //                NewUserLogin();
        //                if (this.SaveItems != null)
        //                    this.SaveItems(sender, e);
        //                ModalPopupExtender3.Hide();

        //                if (ViewState["OLDSESSION_ID"] != null)
        //                    SessionHandler.DBSESSION_ID = Convert.ToInt32(ViewState["OLDSESSION_ID"]);
        //            }
        //            else
        //            {
        //                if (txtTransactionpwd.Text == "")
        //                {
        //                    ScriptManager.RegisterClientScriptBlock(this.Page, this.GetType(), "alert", "javascript:Fn_NoData();", true);
        //                }
        //                else
        //                {
        //                    //ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "msg", "alert('Transaction password is wrong.')", true);
        //                    ScriptManager.RegisterClientScriptBlock(this.Page, this.GetType(), "alert", "javascript:Fn_WrongPwd();", true);
        //                }
        //                txtTransactionpwd.Focus();
        //                ModalPopupExtender3.Show();
        //            }

        //        }
        //        else
        //        {
        //            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "msg", "alert('You don't have the permission to do this transaction.')", true);
        //            return;
        //        }
        //    }
        //    else
        //    {
        //        ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "msg", "alert('You don't have the permission to access this page.')", true);
        //        return;
        //    }
        //}


    }

    public string getPermissionsDMS()
    {
        string strPermissions = string.Empty;
        //        DataSet _dsgetperdoc = Docpermission.DocpermissionbyDocId(SessionHandler.DOCUMENT_ID);
        //        if (_dsgetperdoc != null)
        //        {

        //            if (_dsgetperdoc.Tables[0].Rows.Count > 0)
        //            {
        //                hdnDocName.Value = _dsgetperdoc.Tables[0].Rows[0]["DOC_NAME"].ToString();
        //                if ((_dsgetperdoc.Tables[0].Rows[0]["DMS_UPLOAD"].ToString()) == "Y" && (_dsgetperdoc.Tables[0].Rows[0]["DMS_VIEW"].ToString()) == "Y" && (_dsgetperdoc.Tables[0].Rows[0]["DMS_DOWNLOAD"].ToString()) == "Y")
        //                {
        //                    strPermissions = @"[{icon: _iniUrl + 'Assets/Grid_Icons/sort_asc.png',click:'ViewUploadedDoc',alt:'Upload Document'}
        //                                ,{icon: _iniUrl + 'Assets/Grid_Icons/add_icon.png',click:'ViewDocUments',alt:'View Document'}
        //                                ,{icon: _iniUrl + 'Assets/Grid_Icons/sort_desc.png',click:'ViewDownloadedDoc',alt:'Download Document'}]";
        //                }
        //                else if ((_dsgetperdoc.Tables[0].Rows[0]["DMS_UPLOAD"].ToString()) == "Y" && (_dsgetperdoc.Tables[0].Rows[0]["DMS_VIEW"].ToString()) == "Y" && (_dsgetperdoc.Tables[0].Rows[0]["DMS_DOWNLOAD"].ToString()) == "N")
        //                {
        //                    strPermissions = @"[{icon: _iniUrl + 'Assets/Grid_Icons/sort_asc.png',click:'ViewUploadedDoc',alt:'Upload Document'}
        //                                ,{icon: _iniUrl + 'Assets/Grid_Icons/add_icon.png',click:'ViewDocUments',alt:'View Document'}]";
        //                }
        //                else if ((_dsgetperdoc.Tables[0].Rows[0]["DMS_UPLOAD"].ToString()) == "Y" && (_dsgetperdoc.Tables[0].Rows[0]["DMS_VIEW"].ToString()) == "N" && (_dsgetperdoc.Tables[0].Rows[0]["DMS_DOWNLOAD"].ToString()) == "N")
        //                {
        //                    strPermissions = @"[{icon: _iniUrl + 'Assets/Grid_Icons/sort_asc.png',click:'ViewUploadedDoc',alt:'Upload Document'}]";
        //                }
        //                else if ((_dsgetperdoc.Tables[0].Rows[0]["DMS_UPLOAD"].ToString()) == "Y" && (_dsgetperdoc.Tables[0].Rows[0]["DMS_VIEW"].ToString()) == "N" && (_dsgetperdoc.Tables[0].Rows[0]["DMS_DOWNLOAD"].ToString()) == "Y")
        //                {
        //                    strPermissions = @"[{icon: _iniUrl + 'Assets/Grid_Icons/sort_asc.png',click:'ViewUploadedDoc',alt:'Upload Document'}
        //                                ,{icon: _iniUrl + 'Assets/Grid_Icons/sort_desc.png',click:'ViewDownloadedDoc',alt:'Download Document'}]";
        //                }
        //                else if ((_dsgetperdoc.Tables[0].Rows[0]["DMS_UPLOAD"].ToString()) == "N" && (_dsgetperdoc.Tables[0].Rows[0]["DMS_VIEW"].ToString()) == "Y" && (_dsgetperdoc.Tables[0].Rows[0]["DMS_DOWNLOAD"].ToString()) == "Y")
        //                {
        //                    strPermissions = @"[{icon: _iniUrl + 'Assets/Grid_Icons/add_icon.png',click:'ViewDocUments',alt:'View Document'}
        //                                ,{icon: _iniUrl + 'Assets/Grid_Icons/sort_desc.png',click:'ViewDownloadedDoc',alt:'Download Document'}]";
        //                }
        //                else if ((_dsgetperdoc.Tables[0].Rows[0]["DMS_UPLOAD"].ToString()) == "N" && (_dsgetperdoc.Tables[0].Rows[0]["DMS_VIEW"].ToString()) == "Y" && (_dsgetperdoc.Tables[0].Rows[0]["DMS_DOWNLOAD"].ToString()) == "N")
        //                {
        //                    strPermissions = @"[{icon: _iniUrl + 'Assets/Grid_Icons/add_icon.png',click:'ViewDocUments',alt:'View Document'}]";
        //                }
        //                else if ((_dsgetperdoc.Tables[0].Rows[0]["DMS_UPLOAD"].ToString()) == "N" && (_dsgetperdoc.Tables[0].Rows[0]["DMS_VIEW"].ToString()) == "N" && (_dsgetperdoc.Tables[0].Rows[0]["DMS_DOWNLOAD"].ToString()) == "Y")
        //                {
        //                    strPermissions = @"[{icon:'../../Assets/Grid_Icons/sort_desc.png',click:'ViewDownloadedDoc',alt:'Download Document'}]";
        //                }
        //                else if ((_dsgetperdoc.Tables[0].Rows[0]["DMS_UPLOAD"].ToString()) == "N" && (_dsgetperdoc.Tables[0].Rows[0]["DMS_VIEW"].ToString()) == "N" && (_dsgetperdoc.Tables[0].Rows[0]["DMS_DOWNLOAD"].ToString()) == "N")
        //                {
        //                    strPermissions = @"[]";
        //                }
        //                else
        //                {
        //                    strPermissions = @"[]";
        //                }
        //            }
        //}
        //else
        //{
        //    strPermissions = @"[]";
        //}
        //        hdnDMSPermissions.Value = strPermissions;
        strPermissions = @"[]";
        return strPermissions;

    }
}
