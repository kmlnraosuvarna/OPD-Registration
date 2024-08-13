using System;
using System.Configuration;
using System.Data;
using System.Web.UI;
using System.Web.UI.WebControls;
using EzHms.ModelEntity;
using EzHms.Abstract;
using System.IO.Compression;
public partial class Private_Masters_Theme1 : System.Web.UI.MasterPage//,ICallbackEventHandler
{
    IDynamicMastersBO dMasters = new EzHms.Services.DynamicMasterService();
    //private string gridsplitter = "g^";
    MasterClass obj = new MasterClass();
    #region LOAD
    /*For Future Implementation
    protected override void Render(HtmlTextWriter writer)
    {
        TextWriter output = new StringWriter();
        base.Render(new HtmlTextWriter(output));
        string html = output.ToString();
        html = Regex.Replace(html, @"\t", " ");
        //html=Regex.Replace(html,@"\n|\t"," ");
        html = Regex.Replace(html, @">\s+<", "><").Trim();
        html = Regex.Replace(html, @"\s{2,}", " ");
        writer.Write(html);
    }
     * */
    protected override void OnInit(EventArgs e)
    {
        base.OnInit(e);
        hrfDashboards.Click += new EventHandler(hrfDashboards_Click);
        lnkLogout.Click += new EventHandler(lnkLogout_Click);
        lnkForseClose.Click += new EventHandler(lnkForseClose_Click);
        ddlLocation.SelectedIndexChanged += new EventHandler(LocationChanged);

    }

    void LocationChanged(object sender, EventArgs args)
    {
        //EzHms.Abstract.IUserValidation iUValidation = new EzHms.Services.UserValidationCredentialService();
        //UserLogingInfo _userlog = UserLog.FillUserLog(SessionHandler.SESSION_ID, Convert.ToInt32(ddlLocation.SelectedValue));
        //iUValidation = new EzHms.Services.UserValidationCredentialService();
        //_userlog.SESSION_ID = 1;
        //int _dbSessionID = 0;
        //Session.Clear();
        //DataSet _userInfo = iUValidation.GetUserDetails(_userlog, out _dbSessionID);
        //if (_userInfo != null && _userInfo.Tables[0] != null && _userInfo.Tables.Count > 0 && _userInfo.Tables[0].Rows.Count > 0 && _userInfo.Tables[0].Columns.Count > 1)
        //{
        //    //SessionHandler.DBSESSION_ID = _dbSessionID;
        //    SessionHandler.UserID = _userInfo.Tables[0].Rows[0]["USER_ID"].ToString();
        //    SessionHandler.DEVELOPER_TOOL = _userInfo.Tables[0].Rows[0]["DEV_TOOLS"].ToString();
        //    string User_id = _userInfo.Tables[0].Rows[0]["USER_ID"].ToString();
        //    SessionHandler.LOCATION_NAME = _userInfo.Tables[0].Rows[0]["LOCATION_NAME"].ToString();
        //    SessionHandler.MEG_ID = _userInfo.Tables[0].Rows[0]["MEG_ID"].ToString();
        //    SessionHandler.I_LOC_ID = _userInfo.Tables[0].Rows[0]["I_LOC_ID"].ToString();
        //    SessionHandler.I_ORG_ID = _userInfo.Tables[0].Rows[0]["I_ORG_ID"].ToString();
        //    SessionHandler.UserName = _userInfo.Tables[0].Rows[0]["USER_NAME"].ToString();
        //    SessionHandler.EmployeeId = _userInfo.Tables[0].Rows[0]["EMPLOYEE_ID"].ToString();
        //    SessionHandler.EmployeeName = _userInfo.Tables[0].Rows[0]["EMPLOYEE_NAME"].ToString();
        //    SessionHandler.UserName = _userInfo.Tables[0].Rows[0]["USER_NAME"].ToString();
        //    string Uname = _userInfo.Tables[0].Rows[0]["USER_NAME"].ToString();
        //    string UroleId = _userInfo.Tables[0].Rows[0]["Role_ID"].ToString();
        //    SessionHandler.ORG_ID = _userInfo.Tables[0].Rows[0]["ORG_ID"].ToString();
        //    SessionHandler.ORGANIZATION_NAME = _userInfo.Tables[0].Rows[0]["ORG_NAME"].ToString();
        //    SessionHandler.GRP_ID = _userInfo.Tables[0].Rows[0]["GRP_ID"].ToString();
        //    SessionHandler.GROUP_NAME = _userInfo.Tables[0].Rows[0]["GRP_NAME"].ToString();

        //    SessionHandler.RoleID = _userInfo.Tables[0].Rows[0]["Role_ID"].ToString();
        //    SessionHandler.DBSESSION_ID = _dbSessionID;
        //    SessionHandler.DEPT_ID = _userInfo.Tables[0].Rows[0]["DEPT_ID"].ToString();
        //    SessionHandler.DEPT_NAME = _userInfo.Tables[0].Rows[0]["DEPT_NAME"].ToString();
        //    string _reference_cd = _userInfo.Tables[0].Rows[0]["REFERENCE_TYPE_CD"].ToString();
        //    SessionHandler.REFERENCE_ID = _userInfo.Tables[0].Rows[0]["REFERENCE_ID"].ToString();
        //    SessionHandler.REFERENCE_NAME = _userInfo.Tables[0].Rows[0]["DISPLAY_NAME"].ToString();
        //    SessionHandler.REFERENCE_TYPE_CD = _reference_cd;
        //    if (_userInfo.Tables[0].Rows[0]["USER_THEME"].ToString() != string.Empty)
        //        SessionHandler.Theme = _userInfo.Tables[0].Rows[0]["USER_THEME"].ToString();
        //    //SessionHandler.TIMEZONE_MINUTES = _minutes.ToString();
        //    SessionHandler.LOCATION_ID = _userInfo.Tables[0].Rows[0]["LOCATION_ID"].ToString();
        //    SessionHandler.LOGIN_TIME = _userInfo.Tables[0].Rows[0]["LOGIN_TIME"].ToString();
        //    SessionHandler.REC_TYPE_ID = _userInfo.Tables[0].Rows[0]["REC_TYPE_ID"].ToString();
        //    SessionHandler.ORG_GST_NO = _userInfo.Tables[0].Rows[0]["GST_NO"].ToString();
        //    string login_Status = string.Empty;
        //    if (_userInfo.Tables[0].Rows[0]["LOGIN_STATUS"] != null && _userInfo.Tables[0].Rows[0]["LOGIN_STATUS"] != "")
        //    {
        //        login_Status = _userInfo.Tables[0].Rows[0]["LOGIN_STATUS"].ToString();
        //    }
        //    else
        //    {
        //        login_Status = string.Empty;
        //    }
        //    string login_machine = string.Empty;
        //    if (_userInfo.Tables[0].Rows[0]["LOGIN_MACHINE"] != null && _userInfo.Tables[0].Rows[0]["LOGIN_MACHINE"] != "")
        //    {
        //        login_machine = _userInfo.Tables[0].Rows[0]["LOGIN_MACHINE"].ToString();
        //    }
        //    else
        //    {
        //        login_machine = string.Empty;
        //    }
        //    string last_session = string.Empty;
        //    if (_userInfo.Tables[0].Rows[0]["LAST_SESSIONID"] != null && _userInfo.Tables[0].Rows[0]["LAST_SESSIONID"] != "")
        //    {
        //        last_session = _userInfo.Tables[0].Rows[0]["LAST_SESSIONID"].ToString();
        //    }
        //    else
        //    {
        //        last_session = string.Empty;
        //    }
        //    //SessionHandler.DocPermission = null;
        //    //SessionHandler.ModDocAccess = null;
        //    if (SessionHandler.DocPermission == null)
        //    {
        //        IAssignPermissions idocwiseper = new EzHms.Services.AssignPermissions();
        //        DataSet _dsgetdocper = idocwiseper.GetDocPermissions(Convert.ToInt32(SessionHandler.UserID), 0, 0);
        //        SessionHandler.DocPermission = _dsgetdocper;

        //        DataView dvreport = new DataView(_dsgetdocper.Tables[0]);
        //        dvreport.RowFilter = "PAR_DOC_ID >0";
        //        DataTable reporttable = dvreport.ToTable();
        //        SessionHandler.ReportDocPermission = reporttable;
        //    }
        //    if (SessionHandler.RoleUsers == null)
        //    {
        //        IUserMenu iroleUser = new EzHms.Services.UserMenuService();
        //        DataTable _dtUserRole = iroleUser.GetUsersByRole(Convert.ToInt32(SessionHandler.RoleID), SessionHandler.DBSESSION_ID);
        //        SessionHandler.RoleUsers = _dtUserRole;
        //    }
        //    string newurl = "Private/Module.aspx?ref=moduleview&LGN_STS=" + login_Status + "&Uname=" + Uname + "&Machn=" + login_machine + "&LastSID=" + last_session;
        //    string url = Request.ApplicationPath.ToString();
        //    string rediecrurl = "~/" + newurl;
        //    if (!url.EndsWith("/"))
        //    {
        //        url += "/";
        //    }
        //    url += newurl;
        //    Response.Redirect(rediecrurl);
        //}

    }
    public string CompanySetting(CompanyPolicyEnum EnumType, Enum EnumValue)
    {
        //string Result = string.Empty;
        //CompanyPolicyCollection cpolicycoll = new CompanyPolicyCollection();
        //EzHms.Services.ComapnyPolicyWebService icompolicy = new EzHms.Services.ComapnyPolicyWebService();
        //cpolicycoll = icompolicy.Get_Parameter_Value(EnumType, GetEnumerationString.GetEnumDescription(EnumValue));

        //if (cpolicycoll != null)
        //    if (cpolicycoll.Count > 0)
        //        return Result = cpolicycoll.GetPresettings(0).PARAMETER_DISPLAY_VALUE;
        //    else
        //        return string.Empty;
        //else
            return string.Empty;
    }

    protected void Page_Load(object sender, EventArgs e)
    {
        if (SessionHandler.DBSESSION_ID == 0)
            Response.Redirect("~/Default.aspx");
        if (SessionHandler.UserID == string.Empty)
            Response.Redirect("~/Default.aspx");
        hdndevtool.Value = SessionHandler.DEVELOPER_TOOL.ToString();
        hdnSessionDocId.Value = SessionHandler.DOCUMENT_ID.ToString();
        hdnSessionModId.Value = SessionHandler.MODULE_ID;
        hdnSessionSubModId.Value = SessionHandler.SUB_MODULE_ID;
        hdnClientMechineName.Value = Context.Request.UserHostAddress;
        MasterClass obj = new MasterClass();
        hdnBldBankUrl.Value = obj.WebConfigSettings("BloodBankURL");
        hdnLisNewUrl.Value = obj.WebConfigSettings("LIS_NEWUrl");
        hdninboxurl.Value = obj.WebConfigSettings("InboxNew");
        hdnDashboardURL.Value = obj.WebConfigSettings("AdminDashboardURL");
        lblExtension.InnerText = obj.WebConfigSettings("HelpDesk Extension");
        lblCallNo.InnerText = obj.WebConfigSettings("HelpDesk CallNo");
        lblHDMail.InnerText = obj.WebConfigSettings("HelpDesk Email");
        hdnDashBoardModuleID.Value = obj.WebConfigSettings("DashBoardModuleID");
        hdnecitigen.Value = obj.WebConfigSettings("enableecitigen");

        hdnEnableThumb.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.Enable_Thumb).ToUpper();

        hdnMstDateFormat.Value = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.DATE_FORMAT);
        hdnMstTimeFormat.Value = CompanySetting(CompanyPolicyEnum.PARAMETER_NAME, PARAMETER_NAME.TIME_FORMAT);
        hdnMstTimeFormat.Value = (hdnMstTimeFormat.Value.ToUpper() == "12 HOURS" ? "hh:mm:ss tt" : "HH:mm:ss");
        if (hdnMstTimeFormat.Value == "") hdnMstTimeFormat.Value = "HH:mm:ss";

        hdnrptconformation.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.Conformation_Message_Before_Getting_Reports); //Added by Ali on 20180321

        hdnIsMedClg.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.Is_Medical_College).ToUpper(); //Added by Kalyan 12-oct-2019
        hdnIsQuickLinkShow.Value = obj.CompanySettingDSValue(PARAMETER_NAMES.Need_QuickLink_Module_Desc).ToUpper();


        if (obj.WebConfigSettings("VersionCaption") != string.Empty)
        {
            versioncaption.Style.Add("display", "block");
            versioncaption.InnerText = obj.WebConfigSettings("VersionCaption");
        }
        if (obj.WebConfigSettings("ClientLogoName") != string.Empty && obj.WebConfigSettings("ClientLogoName") != null && obj.WebConfigSettings("ClientLogoName") != "")
            hdnclientLogoName.Value = obj.WebConfigSettings("ClientLogoName").ToString();
        hdnSessionWarning.Value = obj.WebConfigSettings("SessionWarning");
        if (obj.WebConfigSettings("IsShowIPAddress") == "YES")
        {
            ipaddressdiv.Style.Add("display", "block");
            string ipAddress = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
            if (string.IsNullOrEmpty(ipAddress))
            {
                ipAddress = Request.ServerVariables["REMOTE_ADDR"];
            }
            hdnclientIPaddress.Value = ipAddress; 
            ipaddress.InnerText = ipAddress;
        }
        ClientScriptManager cm = Page.ClientScript;
        hdnlocationname.Value = SessionHandler.LOCATION_NAME;
        hdndocsessionid.Value = SessionHandler.DOCUMENT_ID.ToString();
        hdnmodulesessionid.Value = SessionHandler.MODULE_ID.ToString();
        hdnsubmodulesessionid.Value = SessionHandler.SUB_MODULE_ID.ToString();
        hdngdocformcd.Value = SessionHandler.DOC_FORM_CD.ToString();
        Response.Filter = new GZipStream(Response.Filter, CompressionMode.Compress);
        Response.AddHeader("Content-Encoding", "gzip");
        string shiftstatus = string.Empty;
        if (SessionHandler.SHIFT_LOG_STATUS == string.Empty)
        {
            shiftstatus = obj.ShiftLogStatus();
            SessionHandler.SHIFT_LOG_STATUS = shiftstatus;
        }
        else
            shiftstatus = SessionHandler.SHIFT_LOG_STATUS;
        if (shiftstatus == "N")
            lblshiftlogstatus.Text = "Logged Out";
        else
            lblshiftlogstatus.Text = "Logged In";

        lblorgname.Text = SessionHandler.ORGANIZATION_NAME;
        lblLocationName.Text = SessionHandler.LOCATION_NAME;
        #region Quick Search
        if (_hdnNavigation.Value == "Y")
        {
            SessionHandler.DOCUMENT_ID = !string.IsNullOrEmpty(_hdnDocId.Value) ? Convert.ToInt32(_hdnDocId.Value) : 0;
            Session["MODULE_ID"] = _hdnModId.Value;
            if (_hdnPageUrl.Value.IndexOf("?") > -1)
                _hdnPageUrl.Value = _hdnPageUrl.Value + "&DOC_ID=" + _hdnDocId.Value;
            else
                _hdnPageUrl.Value = _hdnPageUrl.Value + "?DOC_ID=" + _hdnDocId.Value;
            Response.Redirect(_hdnPageUrl.Value);
        }
        #endregion

        Literal cssFile = null;
        string _LocID = SessionHandler.LOCATION_ID;
        int _sessionID = SessionHandler.DBSESSION_ID;
        string query1 = "EXEC PR_GET_THEME_PATH " + _LocID + "," + _sessionID + "";
        DataSet ds1 = dMasters.DynamicDataset(query1);
        if (ds1 != null)
        {
            for (var m = 0; m < ds1.Tables[0].Rows.Count; m++)
            {
                if (ds1.Tables[0].Rows[m]["THEME_PATH"].ToString() != "" && ds1.Tables[0].Rows[m]["THEME_PATH"].ToString() != null)
                {
                    cssFile = new Literal() { Text = @"<link href=""" + Page.ResolveUrl(ds1.Tables[0].Rows[m]["THEME_PATH"].ToString()) + @""" type=""text/css"" rel=""stylesheet"" />" };
                    hdnThemePath.Value = ds1.Tables[0].Rows[m]["THEME_PATH"].ToString();
                }
            }
        }
        if (cssFile == null)
        {
            if (SessionHandler.Theme == "Classic")
                cssFile = new Literal() { Text = @"<link href=""" + Page.ResolveUrl("~/Assets/css/color1.css") + @""" type=""text/css"" rel=""stylesheet"" />" };
            else
                cssFile = new Literal() { Text = @"<link href=""" + Page.ResolveUrl("~/Assets/css/Yellow.css") + @""" type=""text/css"" rel=""stylesheet"" />" };
        }


        Page.Header.Controls.Add(cssFile);
        Page.Header.DataBind();


        if (!IsPostBack)
        {
            string dtformat = string.Empty, timeformat = string.Empty;
            hdnSessionId.Value = SessionHandler.DBSESSION_ID.ToString();
            hdnUserId.Value = SessionHandler.UserID.ToString();
            hdnLocId.Value = SessionHandler.LOCATION_ID.ToString();

            BindNewRow();
            // BindFirstRow();
            hdnDate.Value = DateTime.Now.ToString("dd-MMM-yyyy");
            FacilityMasterCollection coll = null;
            //if (SessionHandler.Facilities == null)
            //{
            //    IFacilityMaster ifacility = new EzHms.Services.FacilityMasterWebService();
            //    coll = ifacility.GetFacilitiesByUserID(Convert.ToInt32(SessionHandler.UserID));
            //    ddlLocation.DataSource = coll;
            //    ddlLocation.DataTextField = "Facility_Desc";
            //    ddlLocation.DataValueField = "Facility_ID";
            //    ddlLocation.DataBind();
            //    ddlLocation.SelectedValue = SessionHandler.LOCATION_ID;
            //    SessionHandler.Facilities = coll;
            //}
            //else
            //{
            //    ddlLocation.DataSource = SessionHandler.Facilities;
            //    ddlLocation.DataTextField = "Facility_Desc";
            //    ddlLocation.DataValueField = "Facility_ID";
            //    ddlLocation.DataBind();
            //    ddlLocation.SelectedValue = SessionHandler.LOCATION_ID;
            //}

            _hdnModId.Value = SessionHandler.MODULE_ID;
         //   CompanyPolicyCollection cpolicycoll = new CompanyPolicyCollection();
          //  EzHms.Services.ComapnyPolicyWebService icompolicy = new EzHms.Services.ComapnyPolicyWebService();
          //  cpolicycoll = icompolicy.Get_Parameter_Value(CompanyPolicyEnum.PARAMETER_NAME, GetEnumerationString.GetEnumDescription(PARAMETER_NAME.DATE_FORMAT));
         //   if (cpolicycoll != null && cpolicycoll.Count > 0)
          //  {
          //      dtformat = cpolicycoll.GetPresettings(0).PARAMETER_DISPLAY_VALUE;
         //       timeformat = icompolicy.Get_Parameter_Value(CompanyPolicyEnum.PARAMETER_NAME, GetEnumerationString.GetEnumDescription(PARAMETER_NAME.TIME_FORMAT)).GetPresettings(0).PARAMETER_DISPLAY_VALUE;
        //    }

            if (!string.IsNullOrEmpty(timeformat))
            {
                if (timeformat == "12 Hours")
                {
                    timeformat = "hh:mm:ss tt";
                }
                else if (timeformat == "24 Hours")
                {
                    timeformat = "HH:mm:ss";
                }
                else
                {
                    timeformat = "HH:mm:ss";
                }
            }
            else
            {
                timeformat = "HH:mm:ss";
            }
            txtlastlogin.Text = System.DateTime.Now.ToString(); //Convert.ToDateTime(SessionHandler.LOGIN_TIME).ToString(dtformat) + " " + Convert.ToDateTime(SessionHandler.LOGIN_TIME).ToString(timeformat); // DateTime.Now.ToString("dd-MMM-yyyy");//Session["loginTime"].ToString();
            hdnDashBoard.Value = !string.IsNullOrEmpty(Request.QueryString["DashBdFlag"]) ? Request.QueryString["DashBdFlag"] : string.Empty;
            if (!string.IsNullOrEmpty(Request.QueryString["DashBdFlag"]) && Request.QueryString["DashBdFlag"] == "FrntOffice")
            {
                hdnDashBoardUmr.Value = !string.IsNullOrEmpty(Session["DashBoard_umrno"].ToString()) ? Session["DashBoard_umrno"].ToString() : string.Empty;
                hdnDashBoardAdmnNo.Value = !string.IsNullOrEmpty(Session["DashBoard_admnno"].ToString()) ? Session["DashBoard_admnno"].ToString() : string.Empty;
                hdnDashBoardPatID.Value = !string.IsNullOrEmpty(Session["DashBoard_pat_id"].ToString()) ? Session["DashBoard_pat_id"].ToString() : string.Empty;
            }


            //cpolicycoll = icompolicy.Get_Parameter_Value(CompanyPolicyEnum.PARAMETER_NAME, GetEnumerationString.GetEnumDescription(PARAMETER_NAME.Extended_Display_Window));
            //if (cpolicycoll != null && cpolicycoll.Count > 0)
            //{
            //    hdnextendedWindow.Value = cpolicycoll.GetPresettings(0).PARAMETER_VALUE;
            //}

            string query = "SELECT DOC_NAME FROM SE.DOCUMENT WHERE DOC_ID=" + SessionHandler.DOCUMENT_ID;
            DataSet ds = dMasters.DynamicDataset(query);
            if (ds.Tables[0].Rows.Count > 0)
            {
                if (Page.Title == string.Empty || Page.Title == null)
                {
                    Page.Title = ds.Tables[0].Rows[0]["DOC_NAME"].ToString();
                }
            }
        }
        DataSet _dsgetdocper = null;
        if (SessionHandler.DocPermission == null)
        {
           // IAssignPermissions idocwiseper = new EzHms.Services.AssignPermissions();
          //  _dsgetdocper = idocwiseper.GetDocPermissions(Convert.ToInt32(SessionHandler.UserID), 0, 0);
        }
        else
            _dsgetdocper = SessionHandler.DocPermission;

        hdnLoginUserName.Value = SessionHandler.UserName;
        DataTable _dtdoc = _dsgetdocper != null ? _dsgetdocper.Tables[0] : null;
        DataView _dvdoc = new DataView(_dtdoc);
        if (_dvdoc != null)
        {
            if (!string.IsNullOrEmpty(SessionHandler.MODULE_ID) && SessionHandler.MODULE_ID != "undefined")
                _dvdoc.RowFilter = "DOC_ID = " + SessionHandler.DOCUMENT_ID + " AND PARENT_MODULE_ID=" + SessionHandler.MODULE_ID;
            else
                _dvdoc.RowFilter = "DOC_ID = " + SessionHandler.DOCUMENT_ID;
        }
        //DataSet Dsdocs = new DataSet();
        //Dsdocs.Tables.Add(_dvdoc.ToTable());
        //if (Dsdocs.Tables[0].Rows.Count > 0)
        //{
        //    if ((Dsdocs.Tables[0].Rows[0]["ACCESS_TOKEN"].ToString()) == "Y")
        //    {
        //        hdnDocTokenPer.Value = "Y";
        //    }
        //}
        if (hdnDocTokenPer.Value != "Y")
        {
            hdnDocTokenPer.Value = string.Empty;
        }
        //if (SessionHandler.MODULE_ID == "16" && SessionHandler.SUB_MODULE_ID == "105" && SessionHandler.DOCUMENT_ID == 566)
        //{
        //    SessionHandler.DocPermission = Dsdocs;
        //}
        hdnphymid.Value = obj.WebConfigSettings("Physio_Mid");
        IDynamicMastersBO bMasters = new EzHms.Services.DynamicMasterService();
        string query2 = "select MODULE_ID from se.MODULE where MODULE_CD='M016'";
        DataSet ds2 = bMasters.DynamicDataset(query2);
        if (ds2 != null)
        {
            for (var m = 0; m < ds2.Tables[0].Rows.Count; m++)
            {
                hdnER_moduleID.Value = ds2.Tables[0].Rows[m]["MODULE_ID"].ToString();
            }
        }
        // hdnER_moduleID.Value = obj.WebConfigSettings("ER_Mid");
        hdnDialysis_modID.Value = obj.WebConfigSettings("Dialysis_Mid");
        ScriptManager.RegisterStartupScript(this, GetType(), "servercontrolscript", "countDown();", true);

        /* It is added by rama on 04-06-2018, for all documents Direct/View Print and With/Without header formats*/
        DataSet _dsdocper = null; //Docpermission.DocpermissionbyDocId(SessionHandler.DOCUMENT_ID);
        if (_dsdocper != null && _dsdocper.Tables[0].Rows.Count > 0)
        {
            if (_dsdocper.Tables[0].Rows[0]["PRN_HEADER"].ToString() == "Y")
            {
                hdndocprnpermission.Value = "Y";
            }
            if (_dsdocper.Tables[0].Rows[0]["PRINTTYPE"].ToString() == "P")
            {
                chkComDirectPrint.Checked = true;
                SessionHandler.PRINTTYPE = "Y";
            }
            else
            {
                chkComDirectPrint.Checked = false;
                SessionHandler.PRINTTYPE = "N";
            }
        }

        hdnShowExportRep.Value = "";
        //IAssignPermissions idocwiseper1 = new EzHms.Services.AssignPermissions();
        string mod_id = !string.IsNullOrEmpty(SessionHandler.MODULE_ID.ToString()) && SessionHandler.MODULE_ID != "undefined" ? SessionHandler.MODULE_ID.ToString() : "0";
        DataSet _dsgetdocper1 = null; //idocwiseper1.GetDocPermissions(Convert.ToInt32(SessionHandler.UserID), Convert.ToInt32(mod_id), Convert.ToInt32(SessionHandler.DOCUMENT_ID));

        //if (_dsgetdocper1.Tables.Count > 0)
        //{
        //    if (_dsgetdocper1.Tables[0].Rows.Count > 0)
        //    {
        //        hdnShowExportRep.Value = _dsgetdocper1.Tables[0].Rows[0]["ACCESS_EXE"].ToString();
        //        hdnaddpermissionuserwise.Value = _dsgetdocper1.Tables[0].Rows[0]["ACCESS_ADD"].ToString();
        //        hdnqrypermissionuserwise.Value = _dsgetdocper1.Tables[0].Rows[0]["ACCESS_QRY"].ToString();
        //        hdnprntHeaderpermissionuserwise.Value = _dsgetdocper1.Tables[0].Rows[0]["PRN_HEADER"].ToString();
        //    }
        //}

    }
    #endregion

    #region DASHBOARD STUFF
    protected void BindNewRow()
    {
        DataTable dtableService = new DataTable();
        dtableService.Columns.AddRange(new DataColumn[] 
            {
                new DataColumn("DOCTOR_NAME"), 
                new DataColumn("SHIFT1"),
                new DataColumn("SHIFT2"), 
                new DataColumn("SHIFT3")
            });

        ViewState["Product"] = dtableService;
    }

    void hrfDashboards_Click(object sender, EventArgs e)
    {
        if (ConfigurationManager.AppSettings["ClientName"].ToString() == "Subruban")
        {
            MasterClass obj = new MasterClass();
            string _reference_cd = SessionHandler.REFERENCE_TYPE_CD;
            EzHms.ModelEntity.REFERENCE_TYPE _ref_type = (EzHms.ModelEntity.REFERENCE_TYPE)ConverEnumToString.Parse(typeof(EzHms.ModelEntity.REFERENCE_TYPE), _reference_cd);
            switch (_ref_type)
            {
                case REFERENCE_TYPE.Patient:
                    SessionHandler.MODULE_ID = "197";
                    SessionHandler.MODULE_NAME = "Patient";
                    Response.Redirect("~/Private/Patient/OnlineLabResults.aspx");
                    break;
                case REFERENCE_TYPE.Admin:
                    // newurl = "Private/module.aspx?ref=moduleview";
                    SessionHandler.MODULE_ID = "11";
                    SessionHandler.MODULE_NAME = "Front Office";

                    if (obj.WebConfigSettings("Admin DashBoard") == "2015")
                    {
                        //SessionHandler.DOCUMENT_ID = 1671;
                        if (!string.IsNullOrEmpty(_Document_ID.Value) && _Document_ID.Value != "0")
                            Session["_Doc_ID"] = _Document_ID.Value;
                        if (Session["_Doc_ID"] != null)
                        {
                            if (!string.IsNullOrEmpty(Session["_Doc_ID"].ToString()) && Session["_Doc_ID"] != "0")
                                SessionHandler.DOCUMENT_ID = Convert.ToInt32(Session["_Doc_ID"]);
                        }
                        Response.Redirect("~/private/Admin/View/DashBoard/AdminBillingDashboard.aspx?Doc_ID=" + SessionHandler.DOCUMENT_ID);
                    }
                    else
                    {
                        SessionHandler.DOCUMENT_ID = 1621;
                        Response.Redirect("~/private/Diagnostics/LIMSDashBoard.aspx");
                    }
                    break;
                case REFERENCE_TYPE.Doctor:
                    //newurl = "Private/Admin/View/DashBoard/DoctorDashBoard.aspx?ref=dashboard";
                    Response.Redirect("~/Private/module.aspx?ref=moduleview");
                    break;
                case REFERENCE_TYPE.Employee:
                    Response.Redirect("~/Private/module.aspx?ref=moduleview");
                    break;
                case REFERENCE_TYPE.Franchise_User:
                    Response.Redirect("~/Private/module.aspx?ref=moduleview");
                    break;
                case REFERENCE_TYPE.Laboratory:
                    //newurl = "Private/Admin/View/DashBoard/LabDashBoard.aspx?ref=dashboard";
                    Response.Redirect("~/Private/module.aspx?ref=moduleview");
                    break;
                case REFERENCE_TYPE.Personal_Asst:
                    //newurl = "Private/DoctorsDesk/DoctorsViewList.aspx";
                    Response.Redirect("~/Private/module.aspx?ref=moduleview");
                    break;
                case REFERENCE_TYPE.Nurse:
                    Response.Redirect("~/Private/NurseStation/Nursemanagements.aspx");
                    break;
                case REFERENCE_TYPE.Authentication:
                    {
                        string newurl = string.Empty;
                        if (obj.WebConfigSettings("LaboratoryUrl") != string.Empty)
                            newurl = obj.WebConfigSettings("LaboratoryUrl") + "&SESSION_ID=" + SessionHandler.DBSESSION_ID + "&DashboardType=R&USER_ID=" + SessionHandler.UserID;
                        else
                            newurl = "Private/module.aspx?ref=moduleview";

                        Response.Redirect(newurl);
                        break;
                    }
                case REFERENCE_TYPE.Accesion:
                    {
                        string newurl = string.Empty;
                        if (obj.WebConfigSettings("LaboratoryUrl") != string.Empty)
                            newurl = obj.WebConfigSettings("LaboratoryUrl") + "&SESSION_ID=" + SessionHandler.DBSESSION_ID + "&DashboardType=R&USER_ID=" + SessionHandler.UserID;
                        else
                            newurl = "Private/module.aspx?ref=moduleview";

                        Response.Redirect(newurl);
                        break;
                    }
                case REFERENCE_TYPE.Technical:
                    {
                        string newurl = string.Empty;
                        if (obj.WebConfigSettings("LaboratoryUrl") != string.Empty)
                            newurl = obj.WebConfigSettings("LaboratoryUrl") + "&SESSION_ID=" + SessionHandler.DBSESSION_ID + "&DashboardType=R&USER_ID=" + SessionHandler.UserID;
                        else
                            newurl = "Private/module.aspx?ref=moduleview";

                        Response.Redirect(newurl);
                        break;
                    }

                case REFERENCE_TYPE.Front_Office:
                    {
                        string newurl = string.Empty;
                        SessionHandler.MODULE_ID = "11";
                        SessionHandler.MODULE_NAME = "Front Office";
                        SessionHandler.DOCUMENT_ID = 1621;
                        Response.Redirect("~/Private/Diagnostics/FranchiseDashBoard.aspx");
                        break;
                    }
                case REFERENCE_TYPE.Dispatch_Boy:
                    {
                        SessionHandler.MODULE_ID = "11";
                        SessionHandler.MODULE_NAME = "Front Office";
                        SessionHandler.DOCUMENT_ID = 1621;
                        Response.Redirect("~/Private/Diagnostics/ReportDispatchStatus.aspx");
                        break;
                    }
                case REFERENCE_TYPE.Home_Visit:
                    {
                        SessionHandler.MODULE_ID = "11";
                        SessionHandler.MODULE_NAME = "Front Office";
                        SessionHandler.DOCUMENT_ID = 1621;
                        Response.Redirect("~/Private/Diagnostics/FranchiseDashBoard.aspx");
                        break;
                    }

                case REFERENCE_TYPE.Bank_Branch:
                case REFERENCE_TYPE.Group:
                case REFERENCE_TYPE.Health_Co_ordinators:
                case REFERENCE_TYPE.Location:
                case REFERENCE_TYPE.Organization:
                case REFERENCE_TYPE.Other_Doctors:
                case REFERENCE_TYPE.Other_Hospitals:
                case REFERENCE_TYPE.Other_Organizations:
                case REFERENCE_TYPE.Patient_Emrgency:
                case REFERENCE_TYPE.Standard:
                case REFERENCE_TYPE.Pharmacy:
                case REFERENCE_TYPE.Vendor:
                    Response.Redirect("~/Private/Laboratory/OutSourcingDetails.aspx");
                    break;
            }
        }
        else
        {
            if (SessionHandler.UserName.ToUpper() == "ADMIN")
            {
                Response.Redirect("~/Private/Admin/View/DashBoard/AdminBillingDashboard.aspx?ref=dashboard");
                return;
            }
            string _reference_cd = SessionHandler.REFERENCE_TYPE_CD;
            EzHms.ModelEntity.REFERENCE_TYPE _ref_type = (EzHms.ModelEntity.REFERENCE_TYPE)EzHms.ModelEntity.ConverEnumToString.Parse(typeof(EzHms.ModelEntity.REFERENCE_TYPE), _reference_cd);
            switch (_ref_type)
            {
                case EzHms.ModelEntity.REFERENCE_TYPE.REF:
                    Response.Redirect("~/Private/Patient/DoctorWisePatientDetails.aspx?Docid=" + SessionHandler.REFERENCE_ID);
                    break;
                case EzHms.ModelEntity.REFERENCE_TYPE.Company:
                    Response.Redirect("~/Private/Patient/DoctorWisePatientDetails.aspx?Docid=" + SessionHandler.REFERENCE_ID);
                    break;
                case EzHms.ModelEntity.REFERENCE_TYPE.Admin:
                    Response.Redirect("~/Private/Admin/View/DashBoard/AdminBillingDashboard.aspx");
                    break;
                case EzHms.ModelEntity.REFERENCE_TYPE.superAdmin:
                    Response.Redirect("~/Private/Admin/View/DashBoard/AdminBillingDashboard.aspx");
                    break;
                case EzHms.ModelEntity.REFERENCE_TYPE.Doctor:
                    //re direct to doctor dashboard
                    Response.Redirect("~/Private/Admin/View/DashBoard/DoctorDashBoard.aspx?ref=dashboard");
                    break;
                case EzHms.ModelEntity.REFERENCE_TYPE.Front_Office:
                    //newurl = "Private/Admin/View/DashBoard/DashBoard.aspx?ref=dashboard";
                    Response.Redirect("~/Private/Admin/View/DashBoard/ForntOfficeDashboardNew.aspx?ref=dashboard");
                    break;
                case EzHms.ModelEntity.REFERENCE_TYPE.Laboratory:
                    //newurl = "Private/Admin/View/DashBoard/DashBoard.aspx?ref=dashboard";
                    Response.Redirect("~/Private/Admin/View/DashBoard/LabDashBoard.aspx?ref=dashboard");
                    break;
                case EzHms.ModelEntity.REFERENCE_TYPE.Employee:
                    Response.Redirect("~/Private/Admin/View/DashBoard/DashBoard.aspx?ref=dashboard");
                    //re direct to dashboard.aspx
                    break;
                case EzHms.ModelEntity.REFERENCE_TYPE.Nurse:
                    // redirect to nurse
                    Response.Redirect("~/Private/NurseStation/Nursemanagements.aspx");
                    break;
                case EzHms.ModelEntity.REFERENCE_TYPE.Bank_Branch:
                case EzHms.ModelEntity.REFERENCE_TYPE.Group:
                case EzHms.ModelEntity.REFERENCE_TYPE.Health_Co_ordinators:
                case EzHms.ModelEntity.REFERENCE_TYPE.Location:
                case EzHms.ModelEntity.REFERENCE_TYPE.Organization:
                case EzHms.ModelEntity.REFERENCE_TYPE.Other_Doctors:
                case EzHms.ModelEntity.REFERENCE_TYPE.Other_Hospitals:
                case EzHms.ModelEntity.REFERENCE_TYPE.Other_Organizations:
                case EzHms.ModelEntity.REFERENCE_TYPE.Patient:
                    SessionHandler.MODULE_ID = "197";
                    SessionHandler.MODULE_NAME = "Patient";
                    Response.Redirect("~/Private/Patient/OnlineLabResults.aspx");
                    break;
                case EzHms.ModelEntity.REFERENCE_TYPE.Patient_Emrgency:
                case EzHms.ModelEntity.REFERENCE_TYPE.Standard:
                case EzHms.ModelEntity.REFERENCE_TYPE.Personal_Asst:
                    Response.Redirect("~/Private/DoctorsDesk/DoctorsViewList.aspx");
                    //re direct to PA Screen
                    break;
                case EzHms.ModelEntity.REFERENCE_TYPE.Vendor:
                    Response.Redirect("~/Private/Laboratory/OutSourcingDetails.aspx");
                    break;
            }
        }
    }
    #endregion

    #region LOGOUT STUFF
    void lnkLogout_Click(object sender, EventArgs e)
    {
        LogOutUser();
        Session.Abandon();
        Session.RemoveAll();
        Response.Redirect("~/Default.aspx");

    }

    void lnkForseClose_Click(object sender, EventArgs e)
    {
        LogOutUser();
        Session.Abandon();
        Session.RemoveAll();
        Response.Redirect("~/Default.aspx");
    }

    protected void LogOutUser()
    {
        //EzHms.Abstract.IUser iobj = new EzHms.Services.UserCreationService();
        //System.Web.HttpContext.Current.Session["LogOutTime"] = (Cache[SessionHandler.UserID.ToString() + "TABPanel"] != null) ? "" : "LT";
        //string doc_id = (Cache[SessionHandler.UserID.ToString() + "TABPanel"] != null) ? Cache[SessionHandler.UserID.ToString() + "TABPanel"].ToString() : "0";
        //bool status = iobj.LogoutSave(doc_id, Convert.ToInt32(SessionHandler.UserID));
        //System.Web.HttpContext.Current.Session["LogOutTime"] = null;
        //Cache[SessionHandler.UserID.ToString() + "TABPanel"] = "";
    }

    #endregion
    #region ICallbackEventHandler Members
    //string ExcutableClientScript = string.Empty;
    //public string GetCallbackResult()
    //{
    //    return ExcutableClientScript;
    //}

    //public void RaiseCallbackEvent(string eventArgument)
    //{
    //    StringBuilder gridrender = new StringBuilder();
    //    StringBuilder excutableScript = new StringBuilder();
    //    int total_records = 0;
    //    string date = eventArgument.Split(',')[0];
    //    string divstr = string.Empty;
    //    CollectionBase cbase;
    //    EzHms.Services.BedTransferWebService obj = new EzHms.Services.BedTransferWebService();
    //    cbase = obj.GetDoctorShedule(date, date, "30", "1", out total_records);


    //    if (cbase != null && cbase.Count > 0)
    //    {
    //        gridDocsAvilability.DataSource = cbase;
    //        gridDocsAvilability.DataBind();

    //    }
    //    else
    //    {
    //        gridDocsAvilability.DataSource = null;
    //        gridDocsAvilability.DataBind();
    //    }
    //    StringWriter Sw = new StringWriter();
    //    HtmlTextWriter Htw = new HtmlTextWriter(Sw);
    //    gridDocsAvilability.RenderControl(Htw);
    //    Sw.Close();
    //    Htw.Close();
    //    divstr = Sw.ToString();
    //    ExcutableClientScript = divstr + excutableScript.ToString();
    //}

    #endregion



}
