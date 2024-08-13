#region Comments
// ClassName    : Constants
// Description  : This class is used to define constant variables which are going to use through out the pages.
// Author       : Naga Sankar J.
// DateCreated  : 29/12/2009.
// Modified By  :
// DateModified :
#endregion

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.BusinessObject
{
    #region Constants
    public class Constants
    {

        #region Constants StoredProcedures
        //Constant For Stored Procedure 'MASTERS.Stp_GetAll_TableColumnNames'.
        public const string Stp_GetAll_TableColumnNames = "MASTERS.Stp_GetAll_TableColumnNames";

        //Constant For Stored Procedure 'GenericPaging'.
        public const string Stp_GenericPaging = "hims.PR_GenericPaging";

        public const string SE_Get_UserDetails = "hims.PR_GET_USERDETAILS";

        public const string SE_CheckUserCredentials = "SE.PR_GET_CHECKUSERCREDENTIALS";

        public const string Stp_Get_DataFromTable = "hims.UPR_Get_DataFromTable";

        public const string Stp_Get_TableColumnNames = "hims.UPR_Get_TableColumnNames";

        public const string Stp_Get_IdFromTable = "hims.PR_Get_IdFromTable";

        public const string Stp_Get_Services = "hims.UPR_Get_Services";

        public const string Stp_Insert_DepartmentServices = "hims.UPR_Insert_DepartmentServices";

        public const string Stp_Get_Departmentservices = "hims.UPR_Get_Departmentservices";

        public const string Stp_Get_DynamicValue = "hims.PR_Get_DynamicValue";

        //public const string Stp_Get_Modules = "hims.UPR_Get_Modules";//[SE].[PR_GET_MODULES]
        public const string UPR_GET_USER_MODULE_DOC_ALL = "PR_GET_USER_MODULE_DOC_ALL";
        public const string Stp_Get_Modules = "hims.PR_GET_MODULES";

        public const string Stp_InsUpd_Address = "hims.PR_InsUpd_Address";

        public const string Stp_Update_RefalInfo = "MA.PR_UPD_REFALINFO";

        public const string Stp_Insert_ReferalInfo = "MA.PR_INS_REFERALINFO";

        public const string Stp_Get_Referals = "PR_GETALL_REFERALS";//7/24/2010

        public const string Stp_GetAll_LookUp_Referals = "PR_GETALL_LOOKUP_REFERALS";

        public const string stp_get_referals = "hims.PR_get_referals";

        public const string Stp_Get_Search_ReferInfo = "GN.PR_Get_Search_ReferInfo";   //2/11/2010(rama)

        public const string Stp_Delete_ReferalInfor = "GN.PR_Del_ReferalInfor";//

        public const string Sp_Get_Users = "hims.PR_Get_Users";

        public const string VerifyUserGetUser = "VerifyUserGetUser";

        public const string Stp_Ins_DoctorDetails = "hims.UPR_Ins_DoctorDetails";

        public const string Sp_Get_Specilization = "hims.PR_Get_Specilization";

        public const string Sp_GetSpecialization_Byuser = "hims.PR_GetSpecialization_Byuser";

        public const string Sp_Hint_Question = "hims.PR_GET_HINTQUESTION";

        public const string Stp_Get_ColumnNames_Search = "hims.PR_GET_COLUMNNAMES_SEARCH";

        public const string Stp_Get_ColumnNames = "hims.PR_Get_ColumnNames";

        public const string Stp_Get_AdvanceSearch_Data = "hims.PR_Get_AdvanceSearch_Data";

        public const string UPR_Get_Country = "hims.PR_GET_COUNTRY";

        public const string UPR_Get_State = "PR_Get_State";

        public const string Stp_Upd_addressDetails = "MA.PR_Upd_addressDetails";

        public const string Stp_Get_UserDetails = "SE.PR_GET_USERDETAILS";

        public const string STP_GET_USERCREDENTIALS = "PR_GET_USERCREDENTIALS";

        public const string Stp_Get_UserDetailsByUserName = "SE.PR_GET_USERDETAILSBYUSERNAME";

        public const string UPR_Get_City = "PR_GET_CITY";

        public const string UPR_UPD_USERPASSWORD = "SE.PR_UPD_USERS";
        public const string UPR_GET_AUTO_REFERALS = "PR_GET_AUTO_REFERALS";
        public const string Stp_Get_InsUpd_TableId = "hims.PR_Get_InsUpd_TableId";
        public const string Stp_Get_LookupData = "hims.PR_Get_LookupData";
        public const string Stp_Get_Autocomplete = "hims.PR_Get_Autocomplete";
        public const string Stp_Get_View_ColumnNames = "hims.PR_Get_View_ColumnNames";
        public const string Stp_Get_InsUpd_RowStatus = "hims.PR_Get_InsUpd_RowStatus";

        // SP's for SIM saleem
        public const string Stp_Get_ModuleNames = "hims.PR_get_Modulenames";
        public const string Stp_Get_Sub_ModuleNames = "hims.PR_Get_Documents";
        public const string Stp_Get_Save_userPermisions = "hims.PR_insupd_AccessPermitions";
        public const string Stp_Get_DetailsForModify = "hims.PR_get_assigndocs";
        public const string UPR_INSUPD_USER_DOC_PERMISSION = "PR_INSUPD_MODULE_DOC";
        public const string UPR_INSUPD_ROLE_DOC_ACCESS = "PR_INSUPD_ROLE_DOC_ACCESS";
        //assign users to group related sp's
        public const string Stp_Insupd_Assign_UserToGroup = "PR_INS_USER_GROUPS";
        //paging for assign users to group or role 
        //public const string Stp_Get_UsersAsRoleGroupbyPageno = "UPR_GET_USERS_BY_ID";
        public const string Stp_Get_UsersbyPageno = "PR_GET_USERS_BY_ID";
        //get the list of users assign to Role or Group
        public const string PR_Get_Users_GroupRoleAssign = "PR_GET_USERS_ASSIGNGROUPROLE";



        //public const string Stp_Get_Users_GroupAssign= "";
        //sp for Assign message category for Groups,Role,Dept
        public const string Stp_Ins_Upd_GroupCategory = "Stp_Ins_Upd_GroupCategory ";
        public const string Stp_Ins_Upd_RoleCategory = "Stp_InsuPD_ROLECATEGORY ";
        public const string Stp_Ins_Upd_DeptCategory = "Stp_InsUpd_DEPTCATEGORY ";
        //sp for getting users list based on user group id
        public const string Stp_Get_GroupIDRelatedUsers = "Stp_Get_GroupIDRelatedUsers";
        //sp for sending compose mails

        public const string PR_Get_AllRoles = "PR_Get_AllRoles";
        public const string UPR_GET_ALLGROUPS = "PR_GET_ALLGROUPS";
        public const string UPR_GET_ALLUSERS = "PR_GET_ALLUSERS";
        public const string Pr_Ins_ComposeMessage = "PR_Ins_ComposeMessages";
        public const string Stp_Get_MessageCategories = "Stp_Get_MessageCategories";
        public const string PR_GET_ROLE_GROUP_DEPT_TOUSER = "PR_GET_ROLE_GROUP_DEPT_TOUSER";
        public const string PR_GET_ROLES_BYID = "PR_GET_ROLES_BYID";
        public const string PR_GET_GROUPS_BYID = "PR_GET_GROUPS_BYID";
        public const string PR_GET_ROLES = "PR_GET_ROLES";
        public const string PR_INS_ROLE_MESSAGE = "PR_INS_ROLE_MESSAGE";
        public const string PR_GET_GROUPS = "PR_GET_GROUPS";
        public const string PR_INS_GROUP_MESSAGE = "PR_INS_GROUP_MESSAGE";
        public const string PR_GETALL_CATEGORIES = "PR_GETALL_CATEGORIES";
        public const string PR_INS_ROLE_MESSAGE_NEW = "PR_INS_ROLE_MESSAGE_NEW";
        public const string PR_GET_ALLUSER_CATEGORIES = "PR_GET_ALLUSER_CATEGORIES";
        public const string PR_GET_CATEGORY_TYPE_NAME = "PR_GET_CATEGORY_TYPE_NAME";
        //sp for saving new user details.
        public const string Stp_Insupd_userInfo = "hims.UPR_Insupd_userInfo";
        public const string Stp_Get_ExistUsers = "hims.UPR_Get_ExistUsers";
        public const string Stp_Get_Specialisations = "hims.UPR_Get_Specializations";
        public const string UPR_Get_UserAnd_Group = "SE.PR_GET_USERAND_GROUP";

        //public const string 

        #region For Assign Permission to A GROUP OR ROLE OR DEPARTMENT
        public const string Stp_GetRole = "SE.PR_GETROLE";
        public const string Stp_GetGroup = "SE.GETGROUPS";
        public const string Stp_GetDepartment = "SE.GETDEPARTMENT";
        public const string Stp_SaveRolePermission = "STP_ASSIGNPERMISSION_ROLE";
        public const string Stp_SaveGroupPermission = "STP_ASSIGNPERMISSION_GROUP";
        public const string Stp_SaveDeptPermission = "STP_ASSIGNPERMISSION_DEPARTMENT";
        public const string Stp_GetMessageCategory = "MS.UPR_GET_MSGCATEGORIES";
        public const string Stp_INS_MESSAGECAT_GROUP = "MS.INSUPD_MESSAGECAT_GROUP";
        public const string Stp_INS_MESSAGECAT_ROLE = "MS.INSUPD_MESSAGECAT_ROLE";
        public const string Stp_INS_MESSAGECAT_DEPARTMENT = "MS.INSUPD_MESSAGECAT_DEPARTMENT";
        public const string Stp_GET_GROUPCATEGORY = "SE.STP_GETGROUPCATEGORY";
        public const string Stp_GET_CATBYGROUP = "MS.GET_CATBYGROUP";
        public const string Stp_GET_CATBYROLE = "MS.GET_CATBYROLE";
        public const string Stp_GET_CATBYDEPT = "MS.GET_CATBYDEPARTMENT";
        public const string MS_CHECK_CATBYGROUP = "HIMS.CHECK_CATBYGROUP";
        public const string MS_CHECK_CATBYROLE = "HIMS.CHECK_CATBYROLE";
        public const string MS_CHECK_CATBYDEPT = "HIMS.CHECK_CATBYDEPT";
        public const string MS_UPDATE_GROUPCAT = "HIMS.UPDATE_GROUPCAT";
        public const string MS_UPDATE_ROLECAT = "HIMS.UPDATE_ROLECAT";
        public const string MS_UPDATE_DEPTCAT = "HIMS.UPDATE_DEPTCAT";


        #endregion

        #region User Groups
        public const string Stp_Get_Groups = "HIMS.UPR_Get_Groups";
        #endregion User Groups

        #region DashBoard Procedures...
        public const string Stp_Get_MyProfile = "MA.PR_GET_MYPROFILE";
        //public const string Stp_Update_Myprofile = "HIMS.PR_UPD_MYPROFILE";
        public const string Stp_Update_Myprofile = "PR_INSUPD_MYPROFILE_ADDRESS";
        public const string PR_INS_MYPROFILE_ADDRESS = "PR_INSUPD_MYPROFILE_ADDRESS";
        public const string PR_GET_EMPLOYEE_ADDRESS = "PR_GET_EMPLOYEE_ADDRESS";
        #endregion DashBoard Procedures...

        #region Constants for Search
        //public const string Stp_Get_SearchCriteria = "SEARCH.Stp_Get_SearchCriteria";
        public const string Stp_Update_AdvanceSearch = "HIMS.PR_Update_AdvanceSearch";
        public const string Stp_GetTable_ColumnNames = "hims.PR_Get_ColumnNames";
        public const string Stp_Get_AdvanceSearch = "HIMS.UPR_Get_AdvanceSearch";
        public const string Stp_Get_SearchData = "HIMS.UPR_Get_SearchData";
        public const string Stp_Get_DefaultSearchColumn = "HIMS.UPR_Get_DefaultSearchColumn";
        public const string Stp_Get_TableSearchCriteria = "hims.PR_Get_SearchCriteria";
        #endregion Search

        #region Constans for Employee Informaiton
        public const string Stp_Insert_EmpInfo = "PR_INS_EMPINFO";
        public const string Stp_Get_EmpType = "HIMS.PR_GET_EMPLOYEE_TYPE";
        public const string Stp_Get_Designation = "HIMS.PR_GET_DESIGNATIONLIST";
        public const string Stp_Get_Department = "HIMS.PR_GET_DEPARTMENTLIST";
        public const string Stp_Get_EmpInfo = "HIMS.PR_Get_EmpInfo";
        public const string Stp_Deleteall = "HIMS.UPR_Deleteall";
        public const string Stp_Get_Search_EmpData = "HIMS.UPR_Get_Search_EmpData";
        public const string Stp_Update_EmpInfo = "HIMS.PR_UPD_EMPINFO";


        public const string Stp_Delete_EmpInfor = "HIMS.UPR_Delete_EmpInfor";
        public const string Stp_Get_EmpInfor_ByID = "PR_GET_EMPLOYEEINFO_BYID";
        public const string UPR_GETALL_EMPLOYEE = "PR_GETALL_EMPLOYEE";
        #endregion Constans for Employee Informaiton

        #region Constatns for CommonMethod

        #endregion Constatns for CommonMethod

        #region ConstantsAutoComplete
        //store procedure name

        //parameter for the stored procedure
        public const string parmTableName = "@tableName";
        public const string parmCount = "@count";
        public const string parmPrefixtxt = "@prefixText";
        public const string parmColumnName = "@columnName";
        //column name for the auto complete
        public const string COLUMN_NAME = "COLUMN_NAME";
        #endregion ConstantsAutoComplete

        #region Message Station
        public const string UPR_Get_MsgCategories = "HIMS.UPR_GET_MSGCATEGORIES";

        public const string MS_UPR_GET_USERMSGCAT = "HIMS.UPR_GET_USERMSGCAT";

        public const string MS_UPR_GET_CATEGORYCOUNT = "HIMS.UPR_GET_CATEGORYCOUNT";
        #endregion

        #endregion

        #region Constants Table Schemas.
        public const string masterSchema = "Masters.";
        public const string Users = "USERS";
        #endregion

        #region Constants TableNames
        public const string TableName = "";
        #endregion

        #region DataBase Connection Name
        // public const string ConnectionName = "SuvarnaDB";

        private static string _connectionname;

        public static string ConnectionName
        {
            get {
                string str = string.Empty;
                if (System.Web.HttpContext.Current.Session["Dbconfig"] != null)
                    str = System.Web.HttpContext.Current.Session["Dbconfig"].ToString();
                else
                    str = "SuvarnaDB";
                return str; 
                }
            set 
               { _connectionname = value; 
              }
        }
        public const string ConnectionMySqlName = "SuvarnaMySqlDB";
        #endregion DataBase Connection Name

        #region Stored Procedure Parameter Names

        #region Search
        public const string InString = "@ip_inString";
        public const string ColumnId = "ColumnId";
        public const string TName = "TName";

        public const string COLUMN_NAMES = "COLUMN_NAMES";
        public const string TABLE_NAME = "TABLE_NAME";
        public const string SEARCH_CONDITION = "SEARCH_CONDITION";
        public const string DESIGNATION_COL = "DESIGNATION";
        public const string DEPARTMENT_COL = "DEPARTMENT";
        #endregion Search

        #region Employee
        public const string NATIONALITY_ID = "NATIONALITY_ID";
        public const string IP_EMPLOYEE_ID_VER = "@IP_EMPLOYEE_ID_VER";
        public const string EMPLOYEE_ID_VER = "EMPLOYEE_ID_VER";
        public const string EMPLOYEE_CD = "EMPLOYEE CODE";
        public const string ACCOUNTNO = "ACCOUNTNO";
        public const string BLOOD_GROUP = "BLOODGROUP";
        public const string DEPT_NAME = "DEPTNAME";
        public const string DOB = "DATE OF BIRTH";
        public const string FATHER_NAME = "FATHERNAME";
        public const string FIRST_NAME = "FIRSTNAME";
        public const string JOINING_DT = "JOININGDATE";
        public const string LANGUAGES_KNOWN = "LANGUAGES KNOWN";
        public const string LAST_NAME = "LASTNAME";
        public const string MARITAL_STATUS = "MARITAL STATUS";
        public const string MARITAL_STATUS1 = "MARITALSTATUS";
        public const string MIDDLE_NAME = "MIDDLE NAME";
        public const string MIDDLE_NAME1 = "MIDDLENAME";
        public const string NATIONALITY = "NATIONALITY";
        public const string PASSPORT_NO = "PASSPORT NO";
        public const string PASSPORT_NO1 = "PASSPORTNO";
        public const string Photo = "Photo";
        public const string SEX = "SEX";
        public const string UMRN = "UNIQUE MEDICAL RECOR NO";
        public const string PASSPORT_EXPIRY_DT = "PASSPORTEXPIRYDATE";
        public const string PASSPORT_ISSUE_DT = "PASSPORTISSUEDATE";
        public const string PASSPORT_ISSUED_AT = "PASSPORTISSUEDAT";
        public const string BANKCD = "BANKCD";
        public const string DOB1 = "DOB";
        public const string EMPLOYEE_CD1 = "EMPLOYEE_CD";
        public const string EMPLOYEE_DESC1 = "EMPLOYEE_DESC";
        public const string PFNO = "PFNO";
        public const string BLOOD_GROUP1 = "BLOOD_GROUP";
        public const string EMPLOYEESTATUS = "EMPLOYEESTATUS";
        public const string PROBATIONDT = "PROBATIONDT";
        public const string PERMANENT_DT = "PERMANENT_DT";
        public const string RESIGNATION_DT = "RESIGNATION_DT";
        public const string RELIEVING_DT = "RELIEVING_DT";
        public const string REMARKS = "REMARKS";
        public const string CREATE_BY = "CREATE_BY";
        public const string CREATE_DT = "CREATE_DT";
        public const string MODIFY_BY = "MODIFY_BY";
        public const string MODIFY_DT = "MODIFY_DT";
        public const string ISMANAGEMENT = "ISMANAGEMENT";

        public const string ACCTYPE = "ACCTYPE";
        public const string LEDGNO = "LEDGNO";
        public const string ESIID = "ESIID";
        public const string ESINO = "ESINO";
        public const string PTAXID = "PTAXID";
        public const string EMO = "EMO";
        public const string ESICLOSEDT = "ESICLOSEDT";
        public const string INCREMENTDT = "INCREMENTDT";
        public const string COSTCENTRECD = "COSTCENTRECD";
        public const string EMPLOYEECD1 = "EMPLOYEECD1";
        public const string TEMPID = "TEMPID";
        public const string BRANCHCD = "BRANCHCD";
        public const string EMPLOYEE_ID = "EMPLOYEE_ID";
        public const string ROW_STATUS = "ROW_STATUS";




        public const string EMPLOYMENT_TYPE_ID = "EMPLOYMENT_TYPE_ID";
        public const string EMPLOYMENT_TYPE_ID_VER = "EMPLOYMENT_TYPE_ID_VER";

        public const string SIGNATURE = "SIGNATURE";
        public const string DESIGNATION_ID = "DESIGNATION_ID";
        public const string DESIGNATION_ID_VER = "DESIGNATION_ID_VER";
        public const string DEPT_ID = "DEPT_ID";
        public const string DEPT_ID_VER = "DEPT_ID_VER";
        public const string SSN = "SSN";


        #endregion Employee

        #region Users
        public const string USER_ID_COL = "USER_ID";
        public const string USER_CD_COL = "USER CODE";
        public const string USER_NAME_COL = "USER NAME";
        public const string UNAME_COL = "USER_NAME";
        public const string PASSWORD_COL = "PASSWORD";
        public const string REFERENCE_ID_COL = "REFERENCE_ID";
        public const string REFERENCE_ID_VER_COL = "REFERENCE_ID_VER";

        #endregion Users

        #region CommonClass
        public const string VIEW_NAME = "VIEW_NAME";
        #endregion CommonClass
        #endregion Stored Procedure Parameter Names

        #region Message Station
        public const string MS_PR_GET_ALLMSGCOUNT = "MS.PR_GET_ALLMSGCOUNT";
        //Inbox mails
        public const string PR_GET_ALLUSERS = "PR_GET_ALLUSERS";
        public const string MS_PR_GET_MAILMESSAGES = "MS.PR_GET_MAILMESSAGES";
        public const string DEL_COMPOSE_MESSAGES = "PR_DEL_COMPOSE_MESSAGES";
        public const string Read_COMPOSE_MESSAGES = "PR_Read_COMPOSE_MESSAGES";
        public const string UnRead_COMPOSE_MESSAGES = "PR_GET_UNREAD_COMPOSE_MESSAGES";
        public const string PR_USER_AUTO_COMP = "PR_GET_USER_AUTOCOMP";

        //Sent Item Mails
        public const string MS_PR_GET_SENTMAILMESSAGES = "MS.PR_GET_SENTMAILMESSAGES";
        public const string DEL_COMPOSE_SENTMESSAGES = "PR_DEL_COMPOSE_SENTMESSAGES";
        public const string MS_PR_GET_ALLSENTMSGCOUNT = "MS.PR_GET_ALLSENTMSGCOUNT";
        //Draft Items
        public const string MS_PR_GET_DRAFTMAILMESSAGES = "MS.PR_GET_DRAFTMESSAGES";
        public const string MS_PR_GET_ALLDRAFTMSGCOUNT = "MS.PR_GET_ALLDRAFTMSGCOUNT";
        public const string DEL_COMPOSE_DRAFTMESSAGES = "PR_DEL_COMPOSE_DRAFTMESSAGES";
        public const string Pr_Ins_DraftMessages = "PR_Ins_ComposeMessagesDetails";
        public const string PR_GET_MESSAGE_ORDER = "PR_GET_MESSAGE_ORDER";

        // Task Items
        public const string PR_UPD_TASKDETAILS = "PR_UPD_TASKDETAILS";
        public const string PR_GET_TASKSTATUS = "PR_GET_TASKSTATUS";
        public const string PR_GET_TASKCATEGORY = "PR_GET_TASKCATEGORY";
        public const string PR_GET_PRIORITY = "PR_GET_PRIORITY";
        public const string PR_GET_TASKCOMPLETE = "PR_GET_TASKCOMPLETE";
        public const string PR_INS_TASK = "PR_INS_TASK";
        public const string PR_GET_TASKDETAILS = "PR_GET_TASKDETAILS";
        public const string PR_GET_NASSIGNTASKDETAILS = "PR_GET_NASSIGNTASKDETAILS";
        public const string PR_DEL_TASKDETAILS = "PR_DEL_TASKDETAILS";
        // Leave Requisition
        public const string PR_GET_LEAVEDAYS = "PR_GET_LEAVEDAYS";
        public const string PR_GET_LEAVEFROMDATE = "PR_GET_LEAVEFROMDATE";
        public const string PR_GET_LEAVETO = "PR_GET_LEAVETO";
        public const string PR_GET_LEAVEREQUISITION = "PR_GET_LEAVEREQUISITION";
        public const string PR_INSUPD_LEAVEREQUISITION = "PR_INSUPD_LEAVEREQUISITION";
        public const string PR_DEL_LEAVEDETAILS = "PR_DEL_LEAVEDETAILS";
        //Issue Items
        public const string PR_GET_BUGSTATUS = "PR_GET_BUGSTATUS";
        public const string PR_DEL_TASK_BUGS = "PR_DEL_TASK_BUGS";
        public const string PR_INSUPD_TASK_BUGS = "PR_INSUPD_TASK_BUGS";
        public const string PR_GETALL_TASK_BUGS = "PR_GETALL_TASK_BUGS";
        public const string PR_GET_TASK_BUGS_BYID = "PR_GET_TASK_BUGS_BYID";
        public const string PR_GET_TASKRELATEDISSUES = "PR_GET_TASKRELATEDISSUES";
        public const string PR_GET_TASK_BUGSVIEW = "PR_GET_TASK_BUGSVIEW";
        public const string PR_GETALL_TASK = "PR_GETALL_TASK";
        public const string PR_GET_RELATEDISSUESBYID = "GETTASKSBYID";
        //Requisition
        public const string PR_GET_REQUISTIONSTYPES = "PR_GET_REQUISTIONSTYPES";
        public const string PR_GETALL_REQUISTIONS = "PR_GETALL_REQUISTIONS";
        public const string PR_INSUPD_REQUISTIONS = "PR_INSUPD_REQUISTIONS";
        public const string PR_GET_REQUISTIONS = "PR_GET_REQUISTIONS";
        public const string PR_DEL_REQUISTIONS = "PR_DEL_REQUISTIONS";
        public const string PR_INS_DEPT_SERVICE = "PR_INS_DEPT_SERVICE";
        public const string GET_DEPARTMENT = "SE.PR_GET_DEPARTMENT";
        public const string PR_GET_DEPT_SERVICE = "PR_GET_DEPT_SERVICE";
        public const string GET_SERVICE_DEPT_USER = "GET_SERVICE_DEPT_USER";

        //Requisition Master
        public const string PR_GET_DEPARTMENTINUSERS = "PR_GET_DEPARTMENTINUSERS";
        public const string PR_INSUPD_SUB_REQMASTER = "PR_INSUPD_SUB_REQMASTER";
        public const string PR_GET_ALLSUBREQUISITIONS = "PR_GET_ALLSUBREQUISITIONS";
        public const string PR_DEL_SUB_REQUISITIONS = "PR_DEL_SUB_REQUISITIONS";
        public const string PR_GET_SUB_REQBYID = "PR_GET_SUB_REQBYID";
        //Exceptions
        public const string stp_Get_Exceptions = "stp_Get_Exceptions";
        #endregion
    }

    #region Enums
    public enum RowStatus
    {
        Active,
        InActive,
        Delete,
    }

    public enum SearchColumns
    {
        USER_TAB_DEFAULTS_ID_VER,
        COLUMN_NAME_ALIAS,
        FILTER_SEARCH_COLS_STAT,
        DEFAULT_SEARCH_COL_STAT
    }
    #endregion
    #endregion

}
