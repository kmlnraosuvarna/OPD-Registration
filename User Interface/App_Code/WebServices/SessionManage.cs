using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Collections.Generic;
// Static / shared class for handling session variables
public class SessionHandler
{

    #region Variable for the session
    // Declare a string variable to hold the key name of the session variable
    // and use this string variable instead of typing the key name
    // in order to avoid spelling mistakes

    private static string _facilities = "facilities";
    private static string _dbconfig = "Dbconfig";
    private static string _reportsetting = "reportsetting";
    private static string _applypwdrule = string.Empty;

    private static string _userName = "UserName";

    private static string _employeeId = "EmployeeId";
    private static string _employeeName = "EmployeeName";
    private static string _userRole = "UserRole";
    private static string _roleID = "RoleID";
    private static string _userID = "UserID";
    private static string _currentuserID = "CurrentUserID";
    private static string _sessionID = "sessioID";
    private static string _LocationID = "LocationID";
    private static string _LoginTime = "LoginTime";
    private static string _MEGID = "MEG_ID";
    private static string _treeviewIndex = "0";
    private static string _dbSessionID = "DBSessionID";
    //private static DataTable _modDocAccess;
    private static string _masterTableName = "MasterTableName";
    private static string _newmasterTableName = "MasterTableName";
    private static string _from_dept_id = "FROM_DEPT_ID";
    
    private static string _to_stockpoint_id = "TO_STP_ID";
    private static string _pane = "PaneIndex";
    private static string _theme = "Classic";
    //Gray - SkyBlue - New_Classic - Blue - Simple - CoolWeb -
    private static string _IL0 = "IL0";
    private static string _module_id = "MODULE_ID";
    private static string _sub_module_id = "SUB_MODULE_ID";
    private static string _module_name = "MODULE_NAME";
    private static string _module_form_Cd = "MODULE_FORM_CD";
    private static string _doc_form_Cd = "DOC_FORM_CD";
    private static string _doc_name = "DOC_NAME";
    private static string _Docid = "Docid";
    private static string _Doc_Type = "DOC_TYPE";
    private static string rptparams = "rptParams";
    private static string rptparams1 = "rptParams1";
    private static string rptparams2 = "rptParams2";
    private static string rptparams3 = "rptParams3";
    private static string rptparams4 = "rptParams4";
    private static string rptparams5 = "rptParams5";
    private static string rptparams6 = "rptParams6";
    private static string rptparams7 = "rptParams7";
    private static string rptparams8 = "rptParams8";
    private static string _location = "location";
    private static string _organisation = "organisation";
    private static string _org_id = "org_id";
    private static string _group = "group";
    private static string _group_id = "group_id";

    private static string _i_loc_id = "i_loc_id";
    private static string _i_org_id = "i_org_id";

    private static string _export_grid = "exportGrid";
    private static string _modDocAccess = "moduledocs";
    private static string _reportDocAccess = "reportdocs";
    private static string _Tab_DocAccess = "Tabdocs";
    private static string _reportDocPermission = "ReportDocPermission";
    private static string _docPermission = "DocPermission";
    private static string _stockpoints = "stockpoints";
    private static string _view_type = "view_type";
    private static string _quick_links = "quick_links";
    private static string _reference_id = "reference_id";
    private static string _reference_name = "reference_name";
    private static string _reference_type = "reference_type";
    private static string _docPath = "Doc_Path";
    private static string _caption_name = "CAPTION_NAME";
    private static string _dashboard_url = "dashboardurl";
    private static string _Admn_No = "Admn_No";
    private static int _NurseStation_Id = 0;
    private static string _Time_zone_minutes = "Time_zone_minutes";
    private static string _nus_cd = "Dept_cd";
    private static string _nus_Id = "0";
    private static string _stockpoint_id = "STP_ID";
    private static string _stockpoint_name = "STP_NAME";
    private static string _INVOICE_NO = "INVOICE_NO";
    private static string _EMP_ID = "EMP_ID";
    private static string _auth_for_tran_id_con = "0";
    private static string _auth_for_tran_id_con_for_all = "0";
    private static string _auth_for_tran_id_due = "0";
    private static string _from_dt = string.Empty;
    private static string _to_dt = string.Empty;

    private static string _Umr_No = "_Umr_No";
    private static string _patient_Id = "patient_Id";
    private static string _Tabs_Req = "Tabs_Req";
    private static string _PostConditon = "CONDITON";
    private static string _PostConditon1 = "CONDITON1";
    private static string _MultiPOstCondition = "MULTI_CONDITION";
    private static string _PostConditonobj = "CONDITON_LIST";

    private static string _service_type_id = "_service_type_id";
    private static string _serviceGrpId = "_serviceGrpId";
    private static string _ConsTypeId = "_ConsTypeId";
    private static string _DoctorId = "_DoctorId";
    private static string _RegionalLabID = "RegionalLabID";
    private static string _is_mkr_chkr = "ISMKRCHKR";
    private static string _VEHICLE_LOOKUP_FLAG = "VEHICLE_LOOKUP_FLAG";
    private static string _VEHICLE_TYPE_ID = "VEHICLE_TYPE_ID";
    private static string _DRIVER_LOOKUP_FLAG = "DRIVER_LOOKUP_FLAG";
    private static string _CHECKLIST_ID = "CHECKLIST_ID";
    private static string _CHECK_DISC = "CHECK_DISC";
    private static string _shift_log_status = "_shift_log_status";
    private static string _developer_tool = "Developer_Tool";
    private static string _rec_type_id = "REC_TYPE_ID";
    private static string _user_rec_type_id = "USER_REC_TYPE_ID";
    private static string _EMS_LOAN_ITEM_ID = "EMS_LOAN_ITEM_ID";
    private static string _modStpDocAccess = "moduleStockPointdocs";
    private static string _Org_gst_no = "ORG_GST_NO";
    private static string _ExecutionTime = "ExecutionTime";

    #endregion

    #region Properties for the Sessions



    public static string FROM_DT
    {
        get
        {
            return !string.IsNullOrEmpty(Convert.ToString(HttpContext.Current.Session[SessionHandler._from_dt])) ? Convert.ToString(HttpContext.Current.Session[SessionHandler._from_dt]) : "0";
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._from_dt] = value;
        }
    }

    public static string TO_DT
    {
        get
        {
            return !string.IsNullOrEmpty(Convert.ToString(HttpContext.Current.Session[SessionHandler._to_dt])) ? Convert.ToString(HttpContext.Current.Session[SessionHandler._to_dt]) : "0";
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._to_dt] = value;
        }
    }
    public static int AUTH_FOR_TRAN_ID_DUE
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._auth_for_tran_id_due] == null)
                return 0;
            else
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler._auth_for_tran_id_due].ToString());
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._auth_for_tran_id_due] = value;
        }
    }
    public static DataTable ModStpDocAccess
    {
        //get { return SessionHandler._modDocAccess; }
        //set { SessionHandler._modDocAccess = value; }
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._modStpDocAccess] == null)
            {
                // Return an empty string if session variable is null
                return null;
            }
            else
            {
                return (DataTable)HttpContext.Current.Session[SessionHandler._modStpDocAccess];
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._modStpDocAccess] = value;
        }
    }
    public static int AUTH_FOR_TRAN_ID_CON
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._auth_for_tran_id_con] == null)
                return 0;
            else
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler._auth_for_tran_id_con].ToString());
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._auth_for_tran_id_con] = value;
        }
    }
    public static int AUTH_FOR_TRAN_ID_CON_FOR_ALL
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._auth_for_tran_id_con_for_all] == null)
                return 0;
            else
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler._auth_for_tran_id_con_for_all].ToString());
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._auth_for_tran_id_con_for_all] = value;
        }
    }


    public static int NurseStation_Id
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._NurseStation_Id] == null)
                return 0;
            else
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler._NurseStation_Id].ToString());
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._NurseStation_Id] = value;
        }
    }
    public static string TIMEZONE_MINUTES
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._Time_zone_minutes] == null)
                return "0";
            else
                return HttpContext.Current.Session[SessionHandler._Time_zone_minutes].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._Time_zone_minutes] = value;
        }
    }
    public static string Admn_No
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._Admn_No] == null)
                return string.Empty;
            else
                return HttpContext.Current.Session[SessionHandler._Admn_No].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._Admn_No] = value;
        }
    }
    public static string ORG_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._org_id] == null)
                return "0";
            else
                return HttpContext.Current.Session[SessionHandler._org_id].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._org_id] = value;
        }
    }
    public static string ORGANIZATION_NAME
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._organisation] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._organisation].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._organisation] = value;
        }
    }
    public static string GRP_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._group_id] == null)
                return "0";
            else
                return HttpContext.Current.Session[SessionHandler._group_id].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._group_id] = value;
        }
    }
    public static string I_ORG_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._i_org_id] == null)
                return "0";
            else
                return HttpContext.Current.Session[SessionHandler._i_org_id].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._i_org_id] = value;
        }
    }
    public static string I_LOC_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._i_loc_id] == null)
                return "0";
            else
                return HttpContext.Current.Session[SessionHandler._i_loc_id].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._i_loc_id] = value;
        }
    }
    public static string GROUP_NAME
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._group] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._group].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._group] = value;
        }
    }
    public static string LOCATION_NAME
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._location] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._location].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._location] = value;
        }
    }

    public static string DASHBOARD_URL
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._dashboard_url] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._dashboard_url].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._dashboard_url] = value;
        }
    }


    // Declare a static / shared strongly typed property to expose session variable
    public static string UserName
    {

        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._userName] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._userName].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._userName] = value;
        }
    }


    public static string EmployeeId
    {

        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._employeeId] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._employeeId].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._employeeId] = value;
        }
    }
    public static string EmployeeName
    {

        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._employeeName] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._employeeName].ToString();
            }

        }
        set
        {
            HttpContext.Current.Session[SessionHandler._employeeName] = value;
        }
    }
    public static string REFERENCE_TYPE_CD
    {

        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._reference_type] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._reference_type].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._reference_type] = value;
        }
    }

    public static string REFERENCE_ID
    {

        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._reference_id] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._reference_id].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._reference_id] = value;
        }
    }

    public static string REFERENCE_NAME
    {

        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._reference_name] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._reference_name].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._reference_name] = value;
        }
    }
    public static string IL0
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._IL0] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._IL0].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._IL0] = value;
        }

    }
    public static string SUB_MODULE_ID
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._sub_module_id] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._sub_module_id].ToString();
            }

        } 

        set
        {
            HttpContext.Current.Session[SessionHandler._sub_module_id] = value;
        }

    }

    public static string MODULE_ID
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._module_id] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._module_id].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._module_id] = value;
        }

    }
    public static string MODULE_FORM_CD
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._module_form_Cd] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._module_form_Cd].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._module_form_Cd] = value;
        }

    }
    // Added By Rao on 20110527
    public static string MODULE_NAME
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._module_name] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._module_name].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._module_name] = value;
        }

    }

    public static string DOC_FORM_CD
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._doc_form_Cd] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._doc_form_Cd].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._doc_form_Cd] = value;
        }

    }
    public static string DOC_NAME
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._doc_name] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._doc_name].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._doc_name] = value;
        }

    }

    public static DataTable ModDocAccess
    {
        //get { return SessionHandler._modDocAccess; }
        //set { SessionHandler._modDocAccess = value; }
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._modDocAccess] == null)
            {
                // Return an empty string if session variable is null
                return null;
            }
            else
            {
                return (DataTable)HttpContext.Current.Session[SessionHandler._modDocAccess];
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._modDocAccess] = value;
        }
    }
    public static DataTable ReportDocAccess
    {
        //get { return SessionHandler._modDocAccess; }
        //set { SessionHandler._modDocAccess = value; }
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._reportDocAccess] == null)
            {
                // Return an empty string if session variable is null
                return null;
            }
            else
            {
                return (DataTable)HttpContext.Current.Session[SessionHandler._reportDocAccess];
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._reportDocAccess] = value;
        }
    }
    public static DataTable Tab_DocAccess
    {
        //get { return SessionHandler._modDocAccess; }
        //set { SessionHandler._modDocAccess = value; }
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._Tab_DocAccess] == null)
            {
                // Return an empty string if session variable is null
                return null;
            }
            else
            {
                return (DataTable)HttpContext.Current.Session[SessionHandler._Tab_DocAccess];
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._Tab_DocAccess] = value;
        }
    }

    public static DataTable ReportDocPermission
    {
        //get { return SessionHandler._modDocAccess; }
        //set { SessionHandler._modDocAccess = value; }
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._reportDocPermission] == null)
            {
                // Return an empty string if session variable is null
                return null;
            }
            else
            {
                return (DataTable)HttpContext.Current.Session[SessionHandler._reportDocPermission];
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._reportDocPermission] = value;
        }
    }
    public static DataSet DocPermission
    {
        //get { return SessionHandler._modDocAccess; }
        //set { SessionHandler._modDocAccess = value; }
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._docPermission] == null)
            {
                // Return an empty string if session variable is null
                return null;
            }
            else
            {
                return (DataSet)HttpContext.Current.Session[SessionHandler._docPermission];
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._docPermission] = value;
        }
    }


    //public static int MODULE_ID
    //{
    //    get { return SessionHandler._module_id; }
    //    set { SessionHandler._module_id = value; }
    //}

    public static string UserRole
    {

        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._userRole] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._userRole].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._userRole] = value;
        }

    }

    public static string RoleID
    {

        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._roleID] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._roleID].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._roleID] = value;
        }

    }

    public static string UserID
    {

        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._userID] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._userID].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._userID] = value;
        }

    }
    public static string CurrentUserID
    {

        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._currentuserID] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._currentuserID].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._currentuserID] = value;
        }

    }

    public static int SESSION_ID
    {
        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._sessionID] == null)
            {
                // Return an empty string if session variable is null
                return 0;
            }
            else
            {
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler._sessionID]);
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._sessionID] = value;
        }
    }


    public static int TreeviewIndex
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._treeviewIndex] == null)
            {
                return 0;
            }
            else
            {
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler._treeviewIndex]);
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._sessionID] = value;
        }
    }

    public static int DOCUMENT_ID
    {
        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._Docid] == null)
            {
                // Return an empty string if session variable is null
                return 0;
            }
            else
            {
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler._Docid]);
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._Docid] = value;
        }
    }

    public static string DOCUMENT_TYPE
    {
        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._Doc_Type] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._Doc_Type].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._Doc_Type] = value;
        }
    }

    public static int DBSESSION_ID
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._dbSessionID] == null)
            {
                // Return an empty string if session variable is null
                return 0;
            }
            else
            {
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler._dbSessionID]);
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._dbSessionID] = value;
        }
    }

    
    private static string shift_log_id = "0";
    public static int SHIFT_LOG_ID
    {
        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler.shift_log_id] == null)
            {
                // Return an empty string if session variable is null
                return 0;
            }
            else
            {
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler.shift_log_id]);
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler.shift_log_id] = value;
        }
    }
    public static string SHIFT_LOG_STATUS
    {
        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._shift_log_status] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._shift_log_status].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._shift_log_status] = value;
        }
    }

    private static string advance_amount = "0";
    public static float ADVANCE_AMOUNT
    {
        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler.advance_amount] == null)
            {
                // Return an empty string if session variable is null
                return 0;
            }
            else
            {
                return float.Parse(HttpContext.Current.Session[SessionHandler.advance_amount].ToString());
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler.advance_amount] = value;
        }
    }

    public static string MasterTableNameNew
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._newmasterTableName] == null)
            {
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._newmasterTableName].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._newmasterTableName] = value;
        }
    }
    public static string MasterTableName
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._masterTableName] == null)
            {
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._masterTableName].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._masterTableName] = value;
        }
    }

    public static string PaneIndex
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._pane] == null)
            {
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._pane].ToString();
            }

        }
        set
        {
            HttpContext.Current.Session[SessionHandler._pane] = value;
        }
    }

    public static string Theme
    {
        get
        {
            // Check for null first
            //HttpContext.Current.Session[SessionHandler._theme] = _theme;
            if (HttpContext.Current.Session[SessionHandler._theme] == null)
            {
                // Return an empty string if session variable is null
                return "Classic";
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._theme].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._theme] = value;
        }

    }
    private static string rptPath = string.Empty;
    public static List<string> ReportPaths
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler.rptPath] == null)
            {
                // Return an empty string if session variable is null
                return null;
            }
            else
            {
                return (List<string>)HttpContext.Current.Session[SessionHandler.rptPath];
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler.rptPath] = value;
        }
    }
    private static string rptparamslist = null;
    public static List<object> REPORTPARAMS_LIST
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler.rptparamslist] == null)
            {
                // Return an empty string if session variable is null
                return null;
            }
            else
            {
                return (List<object>)HttpContext.Current.Session[SessionHandler.rptparamslist];
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler.rptparamslist] = value;
        }
    }

   

    public static object ExportGrid
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._export_grid] == null)
            {
                // Return an empty string if session variable is null
                return null;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._export_grid];
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._export_grid] = value;
        }
    }

    public static object VIEWTYPE
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._view_type] == null)
            {
                // Return an empty string if session variable is null
                return null;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._view_type];
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._view_type] = value;
        }
    }
    public static object QuickLInks
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._quick_links] == null)
            {
                // Return an empty string if session variable is null
                return null;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._quick_links];
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._quick_links] = value;
        }
    }

    public static string Doc_Path
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._docPath] == null)
                return string.Empty;
            else
                return HttpContext.Current.Session[SessionHandler._docPath].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._docPath] = value;
        }
    }

    public static string CAPTION_NAME
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._caption_name] == null)
                return string.Empty;
            else
                return HttpContext.Current.Session[SessionHandler._caption_name].ToString();

        }
        set
        {
            HttpContext.Current.Session[SessionHandler._caption_name] = value;
        }
    }

    #endregion

    #region userNursecode
    public static string NUS_CD
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._nus_cd] == null)
                return string.Empty;
            else
                return HttpContext.Current.Session[SessionHandler._nus_cd].ToString();

        }
        set
        {
            HttpContext.Current.Session[SessionHandler._nus_cd] = value;
        }
    }
    public static string NUS_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._nus_Id] == null)
                return string.Empty;
            else
                return HttpContext.Current.Session[SessionHandler._nus_Id].ToString();

        }
        set
        {
            HttpContext.Current.Session[SessionHandler._nus_Id] = value;
        }
    }

    #endregion
    private static string _EMPLOYEE_DRIVER_LOOKUP = "EMPLOYEE_DRIVER_LOOKUP";
    public static string EMPLOYEE_DRIVER_LOOKUP
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._EMPLOYEE_DRIVER_LOOKUP] == null)
            {
                return "0";
            }
            else
                return HttpContext.Current.Session[SessionHandler._EMPLOYEE_DRIVER_LOOKUP].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._EMPLOYEE_DRIVER_LOOKUP] = value;
        }

    }
    public static int DRIVER_LOOKUP_FLAG
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._DRIVER_LOOKUP_FLAG] == null)
                return 0;
            else
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler._DRIVER_LOOKUP_FLAG].ToString());
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._DRIVER_LOOKUP_FLAG] = value;
        }
    }
    public static string VEHICLE_TYPE_ID
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._VEHICLE_TYPE_ID] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._VEHICLE_TYPE_ID].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._VEHICLE_TYPE_ID] = value;
        }
    }
    public static int VEHICLE_LOOKUP_FLAG
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._VEHICLE_LOOKUP_FLAG] == null)
                return 0;
            else
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler._VEHICLE_LOOKUP_FLAG].ToString());
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._VEHICLE_LOOKUP_FLAG] = value;
        }
    }
    public static int FROM_DEPT_ID
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._from_dept_id] == null)
            {
                // Return an empty string if session variable is null
                return 0;
            }
            else
            {
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler._from_dept_id]);
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._from_dept_id] = value;
        }
    }

    public static int STP_ID
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._stockpoint_id] == null)
            {
                // Return an empty string if session variable is null
                return 0;
            }
            else
            {
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler._stockpoint_id]);
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._stockpoint_id] = value;
        }
    }

    public static string STP_NAME
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._stockpoint_name] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._stockpoint_name].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._stockpoint_name] = value;
        }
    }

    public static string LOGIN_TIME
    {
        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._LoginTime] == null)
            {
                // Return an empty string if session variable is null
                return "0";
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._LoginTime].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._LoginTime] = value;
        }
    }
    public static string LOCATION_ID
    {
        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._LocationID] == null)
            {
                // Return an empty string if session variable is null
                return "0";
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._LocationID].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._LocationID] = value;
        }
    }
    public static string MEG_ID
    {
        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._MEGID] == null)
            {
                // Return an empty string if session variable is null
                return "0";
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._MEGID].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._MEGID] = value;
        }
    }
    public static DataSet StockPoints
    {
        //get { return SessionHandler._modDocAccess; }
        //set { SessionHandler._modDocAccess = value; }
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._stockpoints] == null)
            {
                // Return an empty string if session variable is null
                return null;
            }
            else
            {
                return (DataSet)HttpContext.Current.Session[SessionHandler._stockpoints];
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._stockpoints] = value;
        }
    }
    public static string DBCONFIG
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._dbconfig] == null)
                return string.Empty;
            else
                return HttpContext.Current.Session[SessionHandler._dbconfig].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._dbconfig] = value;
        }
    }
    //

    public static string APPLY_PWD_RULE
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._applypwdrule] == null)
            {
                return string.Empty;
            }
            else
                return HttpContext.Current.Session[SessionHandler._applypwdrule].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._applypwdrule] = value;
        }

    }
    public static string REPORTSETTING
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._reportsetting] == null)
                return string.Empty;
            else
                return HttpContext.Current.Session[SessionHandler._reportsetting].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._reportsetting] = value;
        }
    }

    public static string Umr_No
    {
        get
        {
            if (HttpContext.Current.Cache[SessionHandler._Umr_No] == null)
                return string.Empty;
            else
                return HttpContext.Current.Cache[SessionHandler._Umr_No].ToString();
        }
        set
        {
            HttpContext.Current.Cache[SessionHandler._Umr_No] = value;
        }
    }
    public static string Tabs_Req
    {
        get
        {
            if (HttpContext.Current.Cache[SessionHandler._Tabs_Req] == null)
                return string.Empty;
            else
                return HttpContext.Current.Cache[SessionHandler._Tabs_Req].ToString();
        }
        set
        {
            HttpContext.Current.Cache[SessionHandler._Tabs_Req] = value;
        }
    }

    public static string Patient_Id
    {
        get
        {
            if (HttpContext.Current.Cache[SessionHandler._patient_Id] == null)
                return string.Empty;
            else
                return HttpContext.Current.Cache[SessionHandler._patient_Id].ToString();
        }
        set
        {
            HttpContext.Current.Cache[SessionHandler._patient_Id] = value;
        }
    }
    public static void RomoveSession(string name)
    {
        HttpContext.Current.Session.Remove(name);
    }

    private static string _roleUsers = "roleusers";
    public static DataTable RoleUsers
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._roleUsers] == null)
            {
                return null;
            }
            else
            {
                return (DataTable)HttpContext.Current.Session[SessionHandler._roleUsers];
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._roleUsers] = value;
        }
    }
    public static string PRE_CONDITON
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._PostConditon] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._PostConditon].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._PostConditon] = value;
        }
    }
    public static string PRE_CONDITON1
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._PostConditon1] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._PostConditon1].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._PostConditon1] = value;
        }
    }

    public static List<object> PRE_CONDITON_LIST
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._PostConditonobj] == null)
            {
                // Return an empty string if session variable is null
                return null;
            }
            else
            {
                return (List<object>)HttpContext.Current.Session[SessionHandler._PostConditonobj];
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._PostConditonobj] = value;
        }
    }

    public static object MULTI_PRE_CONDITION
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._MultiPOstCondition] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._MultiPOstCondition].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._MultiPOstCondition] = value;
        }
    }

    public static string SERVICE_TYPE_ID
    {
        get
        {
            if (HttpContext.Current.Cache[SessionHandler._service_type_id] == null)
                return string.Empty;
            else
                return HttpContext.Current.Cache[SessionHandler._service_type_id].ToString();
        }
        set
        {
            HttpContext.Current.Cache[SessionHandler._service_type_id] = value;
        }
    }


    public static string SERVICEGRPID
    {
        get
        {
            if (HttpContext.Current.Cache[SessionHandler._serviceGrpId] == null)
                return string.Empty;
            else
                return HttpContext.Current.Cache[SessionHandler._serviceGrpId].ToString();
        }
        set
        {
            HttpContext.Current.Cache[SessionHandler._serviceGrpId] = value;
        }
    }


    public static string CONSTYPEID
    {
        get
        {
            if (HttpContext.Current.Cache[SessionHandler._ConsTypeId] == null)
                return string.Empty;
            else
                return HttpContext.Current.Cache[SessionHandler._ConsTypeId].ToString();
        }
        set
        {
            HttpContext.Current.Cache[SessionHandler._ConsTypeId] = value;
        }
    }

    public static string DOCTORID
    {
        get
        {
            if (HttpContext.Current.Cache[SessionHandler._DoctorId] == null)
                return string.Empty;
            else
                return HttpContext.Current.Cache[SessionHandler._DoctorId].ToString();
        }
        set
        {
            HttpContext.Current.Cache[SessionHandler._DoctorId] = value;
        }
    }
    public static string REGIONALLAB_ID
    {
        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._RegionalLabID] == null)
            {
                // Return an empty string if session variable is null
                return "0";
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._RegionalLabID].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._RegionalLabID] = value;
        }
    }
    //

    public static string ISMKRCHKR
    {
        get
        {

            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._is_mkr_chkr] == null)
            {
                // Return an empty string if session variable is null
                return "0";
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._is_mkr_chkr].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._is_mkr_chkr] = value;
        }
    }
    private static string _REQUEST_TYPE_ID = "REQUEST_TYPE_IDE";

    public static string REQUEST_TYPE_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._REQUEST_TYPE_ID] == null)
            {
                return "0";
            }
            else
                return HttpContext.Current.Session[SessionHandler._REQUEST_TYPE_ID].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._REQUEST_TYPE_ID] = value;
        }

    }
    private static string _KIT_TYPE_ID = "KIT_TYPE_ID";
    public static string KIT_TYPE_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._KIT_TYPE_ID] == null)
            {
                return "0";
            }
            else
                return HttpContext.Current.Session[SessionHandler._KIT_TYPE_ID].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._KIT_TYPE_ID] = value;
        }

    }
    private static string _MATERIAL_TYPE_ID = "MATERIAL_TYPE_ID";
    public static string MATERIAL_TYPE_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._MATERIAL_TYPE_ID] == null)
            {
                return "0";
            }
            else
                return HttpContext.Current.Session[SessionHandler._MATERIAL_TYPE_ID].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._MATERIAL_TYPE_ID] = value;
        }

    }
    private static string _DEPT_ID = "DEPT_ID";
    public static string DEPT_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._DEPT_ID] == null)
            {
                return "0";
            }
            else
                return HttpContext.Current.Session[SessionHandler._DEPT_ID].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._DEPT_ID] = value;
        }

    }
    private static string _DEPARTMENT_ID = "DEPARTMENT_ID";
    public static string DEPARTMENT_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._DEPARTMENT_ID] == null)
            {
                return "0";
            }
            else
                return HttpContext.Current.Session[SessionHandler._DEPARTMENT_ID].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._DEPARTMENT_ID] = value;
        }

    }
    private static string _LOAN_DEPT_ID = "LOAN_DEPT_ID ";
    public static string LOAN_DEPT_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._LOAN_DEPT_ID] == null)
            {
                return "0";
            }
            else
                return HttpContext.Current.Session[SessionHandler._LOAN_DEPT_ID].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._LOAN_DEPT_ID] = value;
        }

    }
    private static string _DEPT_NAME = "DEPT_NAME";
    public static string DEPT_NAME
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._DEPT_NAME] == null)
            {
                return "0";
            }
            else
                return HttpContext.Current.Session[SessionHandler._DEPT_NAME].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._DEPT_NAME] = value;
        }

    }
    private static string _TO_STP_NAME = "TO_STP_NAME";
    public static string TO_STP_NAME
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._TO_STP_NAME] == null)
            {
                return "0";
            }
            else
                return HttpContext.Current.Session[SessionHandler._TO_STP_NAME].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._TO_STP_NAME] = value;
        }

    }

    private static string _GRN_NO = "GRN_NO";
    public static string GRN_NO
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._GRN_NO] == null)
            {
                return "0";
            }
            else
                return HttpContext.Current.Session[SessionHandler._GRN_NO].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._GRN_NO] = value;
        }

    }

    private static string _ITEM_ID = "ITEM_ID";
    public static string ITEM_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._ITEM_ID] == null)
            {
                return "0";
            }
            else
                return HttpContext.Current.Session[SessionHandler._ITEM_ID].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._ITEM_ID] = value;
        }

    }
    private static string _ITEM_TYPE_ID = "ITEM_TYPE_ID";
    public static string ITEM_TYPE_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._ITEM_TYPE_ID] == null)
            {
                return "0";
            }
            else
                return HttpContext.Current.Session[SessionHandler._ITEM_TYPE_ID].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._ITEM_TYPE_ID] = value;
        }

    }
    public static int INVOICE_NO
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._INVOICE_NO] == null)
                return 0;
            else
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler._INVOICE_NO].ToString());
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._INVOICE_NO] = value;
        }
    }
    public static string EMP_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._EMP_ID] == null)
                return "0";
            else
                return HttpContext.Current.Session[SessionHandler._EMP_ID].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._EMP_ID] = value;
        }
    }
    //
    private static string _MODULE_ID_EMS = "MODULE_ID1";


    public static string MODULE_ID1
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._MODULE_ID_EMS] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._MODULE_ID_EMS].ToString();
            }

        }

        set
        {
            HttpContext.Current.Session[SessionHandler._MODULE_ID_EMS] = value;
        }

    }
  
    private static string _FLAG = "FLAG";
    public static string FLAG
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._FLAG] == null)
            {
                return "0";
            }
            else
                return HttpContext.Current.Session[SessionHandler._FLAG].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._FLAG] = value;
        }

    }
    private static string _FLAG1 = "FLAG1";
    public static string FLAG1
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._FLAG1] == null)
            {
                return "0";
            }
            else
                return HttpContext.Current.Session[SessionHandler._FLAG1].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._FLAG1] = value;
        }

    }
    private static string _NATINALITY_ID = "NATINALITY_ID";
    public static string NATINALITY_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._NATINALITY_ID] == null)
            {
                return "0";
            }
            else
                return HttpContext.Current.Session[SessionHandler._NATINALITY_ID].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._NATINALITY_ID] = value;
        }

    }
    public static int TO_STP_ID
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._to_stockpoint_id] == null)
            {
                // Return an empty string if session variable is null
                return 0;
            }
            else
            {
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler._to_stockpoint_id]);
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._to_stockpoint_id] = value;
        }
    }
    public static string CHECKLIST_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._CHECKLIST_ID] == null)
                return "0";
            else
                return HttpContext.Current.Session[SessionHandler._CHECKLIST_ID].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._CHECKLIST_ID] = value;
        }
    }

    public static string CHECK_DISC
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._CHECK_DISC] == null)
                return "0";
            else
                return HttpContext.Current.Session[SessionHandler._CHECK_DISC].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._CHECK_DISC] = value;
        }
    }
    
    private static string _FTPWORKSTATUS = "NO";
    public static string FTPWORKSTATUS
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._FTPWORKSTATUS] == null)
            {
                return "NO";
            }
            else
                return HttpContext.Current.Session[SessionHandler._FTPWORKSTATUS].ToString();
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._FTPWORKSTATUS] = value;
        }

    }

    /* added by rama on 07-06-2018  for Direct/View Print */
    private static string _printtype = "_printtype";
    public static string PRINTTYPE
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._printtype] == null)
            {
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._printtype].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._printtype] = value;
        }
    }

    /* added by rama on 25-06-2018, to show header in report or not */
    private static string _isHeaderVisible = "_isHeaderVisible";
    public static string IsPrintHeaderVisible
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._isHeaderVisible] == null)
            {
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._isHeaderVisible].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._isHeaderVisible] = value;
        }
    }
    public static string DEVELOPER_TOOL
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._developer_tool] == null)
            {
                return "N";
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._developer_tool].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._developer_tool] = value;
        }
    }
    public static string REC_TYPE_ID {

        get {
            if (HttpContext.Current.Session[SessionHandler._rec_type_id] == null)
            {
                return "0";
            }
            else {
                return HttpContext.Current.Session[SessionHandler._rec_type_id].ToString();
            }
        }
        set {
            HttpContext.Current.Session[SessionHandler._rec_type_id] = value;
        }
    }
    public static string USER_REC_TYPE_ID
    {

        get
        {
            if (HttpContext.Current.Session[SessionHandler._user_rec_type_id] == null)
            {
                return "0";
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._user_rec_type_id].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._user_rec_type_id] = value;
        }
    }
    public static int EMS_LOAN_ITEM_ID
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._EMS_LOAN_ITEM_ID] == null)
                return 0;
            else
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler._EMS_LOAN_ITEM_ID].ToString());
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._EMS_LOAN_ITEM_ID] = value;
        }
    }
    public static string ORG_GST_NO
    {
        get
        {
            // Check for null first
            if (HttpContext.Current.Session[SessionHandler._Org_gst_no] == null)
            {
                // Return an empty string if session variable is null
                return string.Empty;
            }
            else
            {
                return HttpContext.Current.Session[SessionHandler._Org_gst_no].ToString();
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._Org_gst_no] = value;
        }
    }


    public static int ExecutionTime
    {
        get
        {
            if (HttpContext.Current.Session[SessionHandler._ExecutionTime] == null)
            {
                return 0;
            }
            else
            {
                return Convert.ToInt32(HttpContext.Current.Session[SessionHandler._ExecutionTime]);
            }
        }
        set
        {
            HttpContext.Current.Session[SessionHandler._ExecutionTime] = value;
        }
    }


}
