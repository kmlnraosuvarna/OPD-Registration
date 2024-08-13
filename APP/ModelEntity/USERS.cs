
namespace EzHms.ModelEntity
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;

    [Serializable]
    public class UsersUtility : Address
    {


        private string _lock_status = string.Empty;
        public string LOCK_STATUS
        {
            get { return _lock_status; }
            set { _lock_status = value; }
        }

        private string _apply_pwd_rule = string.Empty;
        public string APPLY_PWD_RULE
        {
            get { return _apply_pwd_rule; }
            set { _apply_pwd_rule = value; }
        }

        private string _dms_upload = string.Empty;
        public string DMS_UPLOAD
        {
            get { return _dms_upload; }
            set { _dms_upload = value; }
        }

        private string _dms_view = string.Empty;
        public string DMS_VIEW
        {
            get { return _dms_view; }
            set { _dms_view = value; }
        }

        private string _DEPT_CD;
        public string DEPT_CD
        {
            get { return _DEPT_CD; }
            set { _DEPT_CD = value; }
        }
        private int _USER_DEPT_REV_NO;

        public int USER_DEPT_REV_NO
        {
            get { return _USER_DEPT_REV_NO; }
            set { _USER_DEPT_REV_NO = value; }
        }
        private int _USER_DEPT_ID;

        public int USER_DEPT_ID
        {
            get { return _USER_DEPT_ID; }
            set { _USER_DEPT_ID = value; }
        }
        private string _TransationPwd;

        public string TransationPwd
        {
            get { return _TransationPwd; }
            set { _TransationPwd = value; }
        }
        private string _PAGE_URL_MOD;

        public string PAGE_URL_MOD
        {
            get { return _PAGE_URL_MOD; }
            set { _PAGE_URL_MOD = value; }
        }
        private string _MULTI_USER_LOC_ROLE_ID;

        public string MULTI_USER_LOC_ROLE_ID
        {
            get { return _MULTI_USER_LOC_ROLE_ID; }
            set { _MULTI_USER_LOC_ROLE_ID = value; }
        }
        private string _MULTIUSER_LOC_ROLE_REV_NO;

        public string MULTIUSER_LOC_ROLE_REV_NO
        {
            get { return _MULTIUSER_LOC_ROLE_REV_NO; }
            set { _MULTIUSER_LOC_ROLE_REV_NO = value; }
        }
        private string _MULTIUSER_LOC_ID;

        public string MULTIUSER_LOC_ID
        {
            get { return _MULTIUSER_LOC_ID; }
            set { _MULTIUSER_LOC_ID = value; }
        }
        private string _MULTIUSER_ROLE_ID;

        public string MULTIUSER_ROLE_ID
        {
            get { return _MULTIUSER_ROLE_ID; }
            set { _MULTIUSER_ROLE_ID = value; }
        }
        private int _USER_LOC_ID;

        public int USER_LOC_ID
        {
            get { return _USER_LOC_ID; }
            set { _USER_LOC_ID = value; }
        }
        private int _USER_ROLE_ID;

        public int USER_ROLE_ID
        {
            get { return _USER_ROLE_ID; }
            set { _USER_ROLE_ID = value; }
        }
        private string _MULTIUSER_ROLE_REV_NO;

        public string MULTIUSER_ROLE_REV_NO
        {
            get { return _MULTIUSER_ROLE_REV_NO; }
            set { _MULTIUSER_ROLE_REV_NO = value; }
        }
        private string _MULTIUSER_LOC_REV_NO;

        public string MULTIUSER_LOC_REV_NO
        {
            get { return _MULTIUSER_LOC_REV_NO; }
            set { _MULTIUSER_LOC_REV_NO = value; }
        }
        private string _MULTIROLE_ID;

        public string MULTIROLE_ID
        {
            get { return _MULTIROLE_ID; }
            set { _MULTIROLE_ID = value; }
        }
        private int _USER_ROLE_REV_NO;

        public int USER_ROLE_REV_NO
        {
            get { return _USER_ROLE_REV_NO; }
            set { _USER_ROLE_REV_NO = value; }
        }
        private int _USER_LOC_REV_NO;

        public int USER_LOC_REV_NO
        {
            get { return _USER_LOC_REV_NO; }
            set { _USER_LOC_REV_NO = value; }
        }
        private string _MODULENAME;

        public string MODULENAME
        {
            get { return _MODULENAME; }
            set { _MODULENAME = value; }
        }
        private string _MODIFY_BY;

        public string MODIFY_BY
        {
            get { return _MODIFY_BY; }
            set { _MODIFY_BY = value; }
        }
        private string _MODIFY_DT;

        public string MODIFY_DT
        {
            get { return _MODIFY_DT; }
            set { _MODIFY_DT = value; }
        }
        private string _CREATE_BY;

        public string CREATE_BY
        {
            get { return _CREATE_BY; }
            set { _CREATE_BY = value; }
        }
        private string _CREATE_DT;

        public string CREATE_DT
        {
            get { return _CREATE_DT; }
            set { _CREATE_DT = value; }
        }
        private string _NOTE;

        public string NOTE
        {
            get { return _NOTE; }
            set { _NOTE = value; }
        }
        private string _LOCATIONNAME;

        public string LOCATIONNAME
        {
            get { return _LOCATIONNAME; }
            set { _LOCATIONNAME = value; }
        }
        private int _DEFAULT_LOC_ID;

        public int DEFAULT_LOC_ID
        {
            get { return _DEFAULT_LOC_ID; }
            set { _DEFAULT_LOC_ID = value; }
        }
        private string _DEFAULT_LOC_REV_NO;

        public string DEFAULT_LOC_REV_NO
        {
            get { return _DEFAULT_LOC_REV_NO; }
            set { _DEFAULT_LOC_REV_NO = value; }
        }
        private string _strRoleid;

        public string StrRoleid
        {
            get { return _strRoleid; }
            set { _strRoleid = value; }
        }
        private int _LOC_REV_NO;

        public int LOC_REV_NO
        {
            get { return _LOC_REV_NO; }
            set { _LOC_REV_NO = value; }
        }
        private int _LOC_ID;

        public int LOC_ID
        {
            get { return _LOC_ID; }
            set { _LOC_ID = value; }
        }

        private string _FIRSTRECORD;

        public string FIRSTRECORD
        {
            get { return _FIRSTRECORD; }
            set { _FIRSTRECORD = value; }
        }
        private string _PREVIOUS;

        public string PREVIOUS
        {
            get { return _PREVIOUS; }
            set { _PREVIOUS = value; }
        }
        private string _NEXT;

        public string NEXT
        {
            get { return _NEXT; }
            set { _NEXT = value; }
        }
        private string _LASTRECORD;

        public string LASTRECORD
        {
            get { return _LASTRECORD; }
            set { _LASTRECORD = value; }
        }
        private string _USER_GROUP_NAME;

        public string USER_GROUP_NAME
        {
            get { return _USER_GROUP_NAME; }
            set { _USER_GROUP_NAME = value; }
        }
        private int _USER_GRP_ID;

        public int USER_GRP_ID
        {
            get { return _USER_GRP_ID; }
            set { _USER_GRP_ID = value; }
        }
        private int _USER_GROUP_REV_NO;

        public int USER_GROUP_REV_NO
        {
            get { return _USER_GROUP_REV_NO; }
            set { _USER_GROUP_REV_NO = value; }
        }



        private string _USERNAME;

        public string USERNAME
        {
            get { return _USERNAME; }
            set { _USERNAME = value; }
        }
        private int _USER_ID_REV_NO;

        public int USER_ID_REV_NO
        {
            get { return _USER_ID_REV_NO; }
            set { _USER_ID_REV_NO = value; }
        }
        private int _GROUP_ID;

        public int GROUP_ID
        {
            get { return _GROUP_ID; }
            set { _GROUP_ID = value; }
        }
        private int _GROUP_REV_NO;

        public int GROUP_REV_NO
        {
            get { return _GROUP_REV_NO; }
            set { _GROUP_REV_NO = value; }
        }
        private int _Locid;

        public int Locid
        {
            get { return _Locid; }
            set { _Locid = value; }
        }
        private string _rolename;

        public string Rolename
        {
            get { return _rolename; }
            set { _rolename = value; }
        }
        private string _LocationName;

        public string LocationName
        {
            get { return _LocationName; }
            set { _LocationName = value; }
        }
        private string _IMAGEURL;

        public string IMAGEURL
        {
            get { return _IMAGEURL; }
            set { _IMAGEURL = value; }
        }
        private string _PAGEURL;

        public string PAGEURL
        {
            get { return _PAGEURL; }
            set { _PAGEURL = value; }
        }
        private string _new_page_url;
        public string NEW_PAGE_URL
        {
            get { return _new_page_url; }
            set { _new_page_url = value; }
        }
        private string _access_prnheader;

        public string Access_prnheader
        {
            get { return _access_prnheader; }
            set { _access_prnheader = value; }
        }
        private string _strLocation;

        public string StrLocation
        {
            get { return _strLocation; }
            set { _strLocation = value; }
        }
        private int _USER_LOC_ROLE_ID;

        public int USER_LOC_ROLE_ID
        {
            get { return _USER_LOC_ROLE_ID; }
            set { _USER_LOC_ROLE_ID = value; }
        }
        private int _USER_LOC_ROLE_REV_NO;

        public int USER_LOC_ROLE_REV_NO
        {
            get { return _USER_LOC_ROLE_REV_NO; }
            set { _USER_LOC_ROLE_REV_NO = value; }
        }
        private int _locationID;

        public int LocationID
        {
            get { return _locationID; }
            set { _locationID = value; }
        }
        private int _USER_REV_NO;

        public int USER_REV_NO
        {
            get { return _USER_REV_NO; }
            set { _USER_REV_NO = value; }
        }
        private string _FLAG;

        public string FLAG
        {
            get { return _FLAG; }
            set { _FLAG = value; }
        }
        private string _DOCIDS;

        /// <summary>
        /// Gets or sets the DOCIDS.
        /// </summary>
        /// <value>Used for Getting Multiple Docids...</value>
        /// <remarks></remarks>
        public string DOCIDS
        {
            get { return _DOCIDS; }
            set { _DOCIDS = value; }
        }
        private string _MODULE_REV_NO;

        public string MODULE_REV_NO
        {
            get { return _MODULE_REV_NO; }
            set { _MODULE_REV_NO = value; }
        }
        private string _MODULE_DOC_REV_NO;

        public string MODULE_DOC_REV_NO
        {
            get { return _MODULE_DOC_REV_NO; }
            set { _MODULE_DOC_REV_NO = value; }
        }
        private string _DOC_REV_NO;

        /// <summary>
        /// Gets or sets the DO c_ RE v_ NO.
        /// </summary>
        /// <value>The DO c_ RE v_ NO.</value>
        /// <remarks></remarks>
        /// 
        public string DOC_REV_NO
        {
            get { return _DOC_REV_NO; }
            set { _DOC_REV_NO = value; }
        }
        private string _DOC_CD;

        /// <summary>
        /// Gets or sets the DO c_ CD.
        /// </summary>
        /// <value>The DO c_ CD.</value>
        /// <remarks></remarks>
        public string DOC_CD
        {
            get { return _DOC_CD; }
            set { _DOC_CD = value; }
        }

        private string _DOC_TYPE;

        public string DOC_TYPE
        {
            get { return _DOC_TYPE; }
            set { _DOC_TYPE = value; }
        }
        private string _DOC_NAME;

        /// <summary>
        /// Gets or sets the DO c_ NAME.
        /// </summary>
        /// <value>The DO c_ NAME.</value>
        /// <remarks></remarks>
        public string DOC_NAME
        {
            get { return _DOC_NAME; }
            set { _DOC_NAME = value; }
        }
        private string _CURSORFLOW;

        /// <summary>
        /// Gets or sets the CURSORFLOW.
        /// </summary>
        /// <value>The CURSORFLOW.</value>
        /// <remarks></remarks>
        public string CURSORFLOW
        {
            get { return _CURSORFLOW; }
            set { _CURSORFLOW = value; }
        }
        private string _DISABLED;

        /// <summary>
        /// Gets or sets the DISABLED.
        /// </summary>
        /// <value>The DISABLED.</value>
        /// <remarks></remarks>
        public string DISABLED
        {
            get { return _DISABLED; }
            set { _DISABLED = value; }
        }
        private string _ISSECURITYCD;

        /// <summary>
        /// Gets or sets the ISSECURITYCD.
        /// </summary>
        /// <value>The ISSECURITYCD.</value>
        /// <remarks></remarks>
        public string ISSECURITYCD
        {
            get { return _ISSECURITYCD; }
            set { _ISSECURITYCD = value; }
        }
        private int _MODULE_ID;

        /// <summary>
        /// Gets or sets the MODUL e_ ID.
        /// </summary>
        /// <value>The MODUL e_ ID.</value>
        /// <remarks></remarks>
        public int MODULE_ID
        {
            get { return _MODULE_ID; }
            set { _MODULE_ID = value; }
        }
        private string _PARENTMODULE_ID;

        /// <summary>
        /// Gets or sets the PARENTMODUL e_ ID.
        /// </summary>
        /// <value>The PARENTMODUL e_ ID.</value>
        /// <remarks></remarks>
        public string PARENTMODULE_ID
        {
            get { return _PARENTMODULE_ID; }
            set { _PARENTMODULE_ID = value; }
        }
        private string _MODULE_CD;

        /// <summary>
        /// Gets or sets the MODUL e_ CD.
        /// </summary>
        /// <value>The MODUL e_ CD.</value>
        /// <remarks></remarks>
        public string MODULE_CD
        {
            get { return _MODULE_CD; }
            set { _MODULE_CD = value; }
        }
        private string _MODULE_DESC;

        /// <summary>
        /// Gets or sets the MODUL e_ DESC.
        /// </summary>
        /// <value>The MODUL e_ DESC.</value>
        /// <remarks></remarks>
        public string MODULE_DESC
        {
            get { return _MODULE_DESC; }
            set { _MODULE_DESC = value; }
        }
        private string _MODULE_NOTE;

        /// <summary>
        /// Gets or sets the MODUL e_ NOTE.
        /// </summary>
        /// <value>The MODUL e_ NOTE.</value>
        /// <remarks></remarks>
        public string MODULE_NOTE
        {
            get { return _MODULE_NOTE; }
            set { _MODULE_NOTE = value; }
        }
        private string _EMPLOYEE_CD;

        /// <summary>
        /// Gets or sets the EMPLOYE e_ CD.
        /// </summary>
        /// <value>The EMPLOYE e_ CD.</value>
        /// <remarks></remarks>
        public string EMPLOYEE_CD
        {
            get { return _EMPLOYEE_CD; }
            set { _EMPLOYEE_CD = value; }
        }
        private string _FIRST_NAME;

        /// <summary>
        /// Gets or sets the FIRS t_ NAME.
        /// </summary>
        /// <value>The FIRS t_ NAME.</value>
        /// <remarks></remarks>
        public string FIRST_NAME
        {
            get { return _FIRST_NAME; }
            set { _FIRST_NAME = value; }
        }
        private int _HOSPITAL_ID;

        /// <summary>
        /// Gets or sets the HOSPITA l_ ID.
        /// </summary>
        /// <value>The HOSPITA l_ ID.</value>
        /// <remarks></remarks>
        public int HOSPITAL_ID
        {
            get { return _HOSPITAL_ID; }
            set { _HOSPITAL_ID = value; }
        }
        private string _USER_GRP_DESC;

        public string USER_GRP_DESC
        {
            get { return _USER_GRP_DESC; }
            set { _USER_GRP_DESC = value; }
        }
        private string _USER_GRP_NAME;

        /// <summary>
        /// Gets or sets the USE r_ GR p_ NAME.
        /// </summary>
        /// <value>The USE r_ GR p_ NAME.</value>
        /// <remarks></remarks>
        public string USER_GRP_NAME
        {
            get { return _USER_GRP_NAME; }
            set { _USER_GRP_NAME = value; }
        }
        private string _USER_GRP_CD;

        /// <summary>
        /// Gets or sets the USE r_ GR p_ CD.
        /// </summary>
        /// <value>The USE r_ GR p_ CD.</value>
        /// <remarks></remarks>
        public string USER_GRP_CD
        {
            get { return _USER_GRP_CD; }
            set { _USER_GRP_CD = value; }
        }


        private int count;

        /// <summary>
        /// Gets or sets the count.
        /// </summary>
        /// <value>The count.</value>
        /// <remarks></remarks>
        public int Count
        {
            get { return count; }
            set { count = value; }
        }
        private string _ROLE_CD;

        /// <summary>
        /// Gets or sets the ROL e_ CD.
        /// </summary>
        /// <value>The ROL e_ CD.</value>
        /// <remarks></remarks>
        public string ROLE_CD
        {
            get { return _ROLE_CD; }
            set { _ROLE_CD = value; }
        }
        private string _ROLE_DESC;

        /// <summary>
        /// Gets or sets the ROL e_ DESC.
        /// </summary>
        /// <value>The ROL e_ DESC.</value>
        /// <remarks></remarks>
        public string ROLE_DESC
        {
            get { return _ROLE_DESC; }
            set { _ROLE_DESC = value; }
        }
        private int _session_id;

        public int Session_id
        {
            get { return _session_id; }
            set { _session_id = value; }
        }
        private string _SESSION_ID;

        /// <summary>
        /// Gets or sets the SESSION_ID.
        /// </summary>
        /// <value>The SESSIO n_ ID.</value>
        /// <remarks></remarks>
        public string SESSION_ID
        {
            get { return _SESSION_ID; }
            set { _SESSION_ID = value; }
        }


        private string _DEPT_NAME;

        /// <summary>
        /// Gets or sets the DEPt_ NAME.
        /// </summary>
        /// <value>The DEP t_ NAME.</value>
        /// <remarks></remarks>
        public string DEPT_NAME
        {
            get { return _DEPT_NAME; }
            set { _DEPT_NAME = value; }
        }
        private int _ROLE_REV_NO;

        /// <summary>
        /// Gets or sets the ROL e_ RE v_ NO.
        /// </summary>
        /// <value>The ROL e_ RE v_ NO.</value>
        /// <remarks></remarks>
        public int ROLE_REV_NO
        {
            get { return _ROLE_REV_NO; }
            set { _ROLE_REV_NO = value; }
        }
        private string _ROLE_NAME;

        /// <summary>
        /// Gets or sets the ROL e_ NAME.
        /// </summary>
        /// <value>The ROL e_ NAME.</value>
        /// <remarks></remarks>
        public string ROLE_NAME
        {
            get { return _ROLE_NAME; }
            set { _ROLE_NAME = value; }
        }
        private string _UserRefVerId;

        /// <summary>
        /// Gets or sets the user ref ver id.
        /// </summary>
        /// <value>The user ref ver id.</value>
        /// <remarks></remarks>
        public string UserRefVerId
        {
            get { return _UserRefVerId; }
            set { _UserRefVerId = value; }
        }

        private string _UserTypeIdVer;

        /// <summary>
        /// Gets or sets the user type id ver.
        /// </summary>
        /// <value>The user type id ver.</value>
        /// <remarks></remarks>
        public string UserTypeIdVer
        {
            get { return _UserTypeIdVer; }
            set { _UserTypeIdVer = value; }
        }
        private string _USER_DESC;

        /// <summary>
        /// Gets or sets the USE r_ DESC.
        /// </summary>
        /// <value>The USE r_ DESC.</value>
        /// <remarks></remarks>
        public string USER_DESC
        {
            get { return _USER_DESC; }
            set { _USER_DESC = value; }
        }
        private string _user_cd;
        /// <summary>
        /// Gets or sets the USE r_ CD.
        /// </summary>
        /// <value>The USE r_ CD.</value>
        /// <remarks></remarks>
        public string USER_CD
        {
            set { _user_cd = value; }
            get { return _user_cd; }
        }
        private string _user_name;
        /// <summary>
        /// Gets or sets the USE r_ NAME.
        /// </summary>
        /// <value>The USE r_ NAME.</value>
        /// <remarks></remarks>
        public string USER_NAME
        {
            set { _user_name = value; }
            get { return _user_name; }
        }
        private string _password;
        /// <summary>
        /// Gets or sets the PASSWORD.
        /// </summary>
        /// <value>The PASSWORD.</value>
        /// <remarks></remarks>
        public string PASSWORD
        {
            set { _password = value; }
            get { return _password; }
        }

        private string _loginstatus;
        /// <summary>
        /// Gets or sets the LOGINSTATUS.
        /// </summary>
        /// <value>The LOGINSTATUS.</value>
        /// <remarks></remarks>
        public string LOGINSTATUS
        {
            set { _loginstatus = value; }
            get { return _loginstatus; }
        }
        private string _systemname;
        /// <summary>
        /// Gets or sets the SYSTEMNAME.
        /// </summary>
        /// <value>The SYSTEMNAME.</value>
        /// <remarks></remarks>
        public string SYSTEMNAME
        {
            set { _systemname = value; }
            get { return _systemname; }
        }
        private string _securitycd;
        /// <summary>
        /// Gets or sets the SECURITYCD.
        /// </summary>
        /// <value>The SECURITYCD.</value>
        /// <remarks></remarks>
        public string SECURITYCD
        {
            set { _securitycd = value; }
            get { return _securitycd; }
        }
        private string _usertype;
        /// <summary>
        /// Gets or sets the USERTYPE.
        /// </summary>
        /// <value>The USERTYPE.</value>
        /// <remarks></remarks>
        public string USERTYPE
        {
            set { _usertype = value; }
            get { return _usertype; }
        }
        private string _usertab;
        public string USERTAB
        {
            set { _usertab = value; }
            get { return _usertab; }
        }
        private string _ap_perm_type;
        /// <summary>
        /// Gets or sets the A p_ PER m_ TYPE.
        /// </summary>
        /// <value>The A p_ PER m_ TYPE.</value>
        /// <remarks></remarks>
        public string AP_PERM_TYPE
        {
            set { _ap_perm_type = value; }
            get { return _ap_perm_type; }
        }
        private int _user_id;
        /// <summary>
        /// Gets or sets the USE r_ ID.
        /// </summary>
        /// <value>The USE r_ ID.</value>
        /// <remarks></remarks>
        public int USER_ID
        {
            set { _user_id = value; }
            get { return _user_id; }
        }
        private int _user_id_ver;
        /// <summary>
        /// Gets or sets the USE r_ I d_ VER.
        /// </summary>
        /// <value>The USE r_ I d_ VER.</value>
        /// <remarks></remarks>
        public int USER_ID_VER
        {
            set { _user_id_ver = value; }
            get { return _user_id_ver; }
        }
        private int _EMPLOYEE_ID;

        /// <summary>
        /// Gets or sets the EMPLOYE e_ ID.
        /// </summary>
        /// <value>The EMPLOYE e_ ID.</value>
        /// <remarks></remarks>
        public int EMPLOYEE_ID
        {
            get { return _EMPLOYEE_ID; }
            set { _EMPLOYEE_ID = value; }
        }
        private string _ref_name;
        /// <summary>
        /// Gets or sets the name of the ref.
        /// </summary>
        /// <value>The name of the ref.</value>
        /// <remarks></remarks>
        public string RefName
        {
            set { _ref_name = value; }
            get { return _ref_name; }
        }
        private string _ref_type;
        /// <summary>
        /// Gets or sets the type of the ref.
        /// </summary>
        /// <value>The type of the ref.</value>
        /// <remarks></remarks>
        public string RefType
        {
            set { _ref_type = value; }
            get { return _ref_type; }
        }
        private int _reference_id;
        /// <summary>
        /// Gets or sets the REFERENC e_ ID.
        /// </summary>
        /// <value>The REFERENC e_ ID.</value>
        /// <remarks></remarks>
        public int REFERENCE_ID
        {
            set { _reference_id = value; }
            get { return _reference_id; }
        }
        private int _reference_type_id_ver;
        /// <summary>
        /// Gets or sets the REFERENC e_ TYP e_ I d_ VER.
        /// </summary>
        /// <value>The REFERENC e_ TYP e_ I d_ VER.</value>
        /// <remarks></remarks>
        public int REFERENCE_TYPE_ID_VER
        {
            set { _reference_type_id_ver = value; }
            get { return _reference_type_id_ver; }
        }
        private int _DEPARTMENT_ID;

        /// <summary>
        /// Gets or sets the DEPARTMEN t_ ID.
        /// </summary>
        /// <value>The DEPARTMEN t_ ID.</value>
        /// <remarks></remarks>
        public int DEPARTMENT_ID
        {
            get { return _DEPARTMENT_ID; }
            set { _DEPARTMENT_ID = value; }
        }
        private string _DEPARTMENT;

        /// <summary>
        /// Gets or sets the DEPARTMENT.
        /// </summary>
        /// <value>The DEPARTMENT.</value>
        /// <remarks></remarks>
        public string DEPARTMENT
        {
            get { return _DEPARTMENT; }
            set { _DEPARTMENT = value; }
        }
        private string _ROLES;

        public string ROLES
        {
            get { return _ROLES; }
            set { _ROLES = value; }
        }
        private string _CODE;

        /// <summary>
        /// Gets or sets the CODE.
        /// </summary>
        /// <value>The CODE.</value>
        /// <remarks></remarks>
        public string CODE
        {
            get { return _CODE; }
            set { _CODE = value; }
        }
        private string _ID;

        /// <summary>
        /// Gets or sets the I d1.
        /// </summary>
        /// <value>The I d1.</value>
        /// <remarks></remarks>
        public string ID1
        {
            get { return _ID; }
            set { _ID = value; }
        }
        private string _NAME;

        /// <summary>
        /// Gets or sets the NAME.
        /// </summary>
        /// <value>The NAME.</value>
        /// <remarks></remarks>
        public string NAME
        {
            get { return _NAME; }
            set { _NAME = value; }
        }
        private int _hint1_id;
        /// <summary>
        /// Gets or sets the HIN T1_ ID.
        /// </summary>
        /// <value>The HIN T1_ ID.</value>
        /// <remarks></remarks>
        public int HINT1_ID
        {
            set { _hint1_id = value; }
            get { return _hint1_id; }
        }
        private int _hint2_id;
        /// <summary>
        /// Gets or sets the HIN T2_ ID.
        /// </summary>
        /// <value>The HIN T2_ ID.</value>
        /// <remarks></remarks>
        public int HINT2_ID
        {
            set { _hint2_id = value; }
            get { return _hint2_id; }
        }
        private int _hint3_id;
        /// <summary>
        /// Gets or sets the HIN T3_ ID.
        /// </summary>
        /// <value>The HIN T3_ ID.</value>
        /// <remarks></remarks>
        public int HINT3_ID
        {
            set { _hint3_id = value; }
            get { return _hint3_id; }
        }
        private string _hint1_ans;
        /// <summary>
        /// Gets or sets the HIN T1_ ANS.
        /// </summary>
        /// <value>The HIN T1_ ANS.</value>
        /// <remarks></remarks>
        public string HINT1_ANS
        {
            set { _hint1_ans = value; }
            get { return _hint1_ans; }
        }
        private string _hint2_ans;
        /// <summary>
        /// Gets or sets the HIN T2_ ANS.
        /// </summary>
        /// <value>The HIN T2_ ANS.</value>
        /// <remarks></remarks>
        public string HINT2_ANS
        {
            set { _hint2_ans = value; }
            get { return _hint2_ans; }
        }
        private string _hint3_ans;
        /// <summary>
        /// Gets or sets the HIN T3_ ANS.
        /// </summary>
        /// <value>The HIN T3_ ANS.</value>
        /// <remarks></remarks>
        public string HINT3_ANS
        {
            set { _hint3_ans = value; }
            get { return _hint3_ans; }
        }
        private int _hint1_id_ver;
        /// <summary>
        /// Gets or sets the HIN T1_ I d_ VER.
        /// </summary>
        /// <value>The HIN T1_ I d_ VER.</value>
        /// <remarks></remarks>
        public int HINT1_ID_VER
        {
            set { _hint1_id_ver = value; }
            get { return _hint1_id_ver; }
        }
        private int _hint2_id_ver;
        /// <summary>
        /// Gets or sets the HIN T2_ I d_ VER.
        /// </summary>
        /// <value>The HIN T2_ I d_ VER.</value>
        /// <remarks></remarks>
        public int HINT2_ID_VER
        {
            set { _hint2_id_ver = value; }
            get { return _hint2_id_ver; }
        }
        private int _hint3_id_ver;
        /// <summary>
        /// Gets or sets the HIN T3_ I d_ VER.
        /// </summary>
        /// <value>The HIN T3_ I d_ VER.</value>
        /// <remarks></remarks>
        public int HINT3_ID_VER
        {
            set { _hint3_id_ver = value; }
            get { return _hint3_id_ver; }
        }

        private int _ROLE_ID;

        /// <summary>
        /// Gets or sets the ROL e_ ID.
        /// </summary>
        /// <value>The ROL e_ ID.</value>
        /// <remarks></remarks>
        public int ROLE_ID
        {
            get { return _ROLE_ID; }
            set { _ROLE_ID = value; }
        }
        private List<Address> _lstAddressUtility = new List<Address>();
        /// <summary>
        /// Gets or sets the list_ of_ address.
        /// </summary>
        /// <value>The list_ of_ address.</value>
        /// <remarks></remarks>
        public List<Address> List_Of_Address
        {
            get
            {
                return _lstAddressUtility;
            }
            set
            {
                _lstAddressUtility = value;
            }
        }
        private int _doc_id;
        /// <summary>
        /// Gets or sets the DO c_ ID.
        /// </summary>
        /// <value>The DO c_ ID.</value>
        /// <remarks></remarks>
        public int DOC_ID
        {
            set { _doc_id = value; }
            get { return _doc_id; }
        }
        private int _doc_id_ver;
        /// <summary>
        /// Gets or sets the DO c_ I d_ VER.
        /// </summary>
        /// <value>The DO c_ I d_ VER.</value>
        /// <remarks></remarks>
        public int DOC_ID_VER
        {
            set { _doc_id_ver = value; }
            get { return _doc_id_ver; }
        }

        private string _access_add;
        /// <summary>
        /// Gets or sets the ACCES s_ ADD.
        /// </summary>
        /// <value>The ACCES s_ ADD.</value>
        /// <remarks></remarks>
        public string ACCESS_ADD
        {
            set { _access_add = value; }
            get { return _access_add; }
        }
        private string _access_mod;
        /// <summary>
        /// Gets or sets the ACCES s_ MOD.
        /// </summary>
        /// <value>The ACCES s_ MOD.</value>
        /// <remarks></remarks>
        public string ACCESS_MOD
        {
            set { _access_mod = value; }
            get { return _access_mod; }
        }
        private string _access_del;
        /// <summary>
        /// Gets or sets the ACCES s_ DEL.
        /// </summary>
        /// <value>The ACCES s_ DEL.</value>
        /// <remarks></remarks>
        public string ACCESS_DEL
        {
            set { _access_del = value; }
            get { return _access_del; }
        }
        private string _access_qry;
        /// <summary>
        /// Gets or sets the ACCES s_ QRY.
        /// </summary>
        /// <value>The ACCES s_ QRY.</value>
        /// <remarks></remarks>
        public string ACCESS_QRY
        {
            set { _access_qry = value; }
            get { return _access_qry; }
        }
        private string _ACCESS_PRICE;

        public string ACCESS_PRICE
        {
            get { return _ACCESS_PRICE; }
            set { _ACCESS_PRICE = value; }
        }
        private string _access_app;
        /// <summary>
        /// Gets or sets the ACCES s_ APP.
        /// </summary>
        /// <value>The ACCES s_ APP.</value>
        /// <remarks></remarks>
        public string ACCESS_APP
        {
            set { _access_app = value; }
            get { return _access_app; }
        }
        private string _access_exe;
        /// <summary>
        /// Gets or sets the ACCES s_ EXE.
        /// </summary>
        /// <value>The ACCES s_ EXE.</value>
        /// <remarks></remarks>
        public string ACCESS_EXE
        {
            set { _access_exe = value; }
            get { return _access_exe; }
        }
        private string _barcode;
        /// <summary>
        /// Gets or sets the BARCODE.
        /// </summary>
        /// <value>The BARCODE.</value>
        /// <remarks></remarks>
        public string BARCODE
        {
            set { _barcode = value; }
            get { return _barcode; }
        }
        private string _printtype;
        /// <summary>
        /// Gets or sets the PRINTTYPE.
        /// </summary>
        /// <value>The PRINTTYPE.</value>
        /// <remarks></remarks>
        public string PRINTTYPE
        {
            set { _printtype = value; }
            get { return _printtype; }
        }
        private string _printtypeid;
        public string PRINTTYPEID
        {
            set { _printtypeid = value; }
            get { return _printtypeid; }
        }
        private string _approvedlevel;
        /// <summary>
        /// Gets or sets the APPROVEDLEVEL.
        /// </summary>
        /// <value>The APPROVEDLEVEL.</value>
        /// <remarks></remarks>
        public string APPROVEDLEVEL
        {
            set { _approvedlevel = value; }
            get { return _approvedlevel; }
        }

        private string _printformat;
        /// <summary>
        /// Gets or sets the PRINTFORMAT.
        /// </summary>
        /// <value>The PRINTFORMAT.</value>
        /// <remarks></remarks>
        public string PRINTFORMAT
        {
            set { _printformat = value; }
            get { return _printformat; }
        }


        private string _role_service_group_id;
        /// <summary>
        /// Gets or sets the ROLE_SERVICE_GROUP_ID.
        /// </summary>
        /// <value>The ROLE_SERVICE_GROUP_ID.</value>
        /// <remarks></remarks>
        public string ROLE_SERVICE_GROUP_ID
        {
            set { _role_service_group_id = value; }
            get { return _role_service_group_id; }
        }

        private string _service_group_id;
        /// <summary>
        /// Gets or sets the ROLE_SERVICE_GROUP_ID.
        /// </summary>
        /// <value>The ROLE_SERVICE_GROUP_ID.</value>
        /// <remarks></remarks>
        public string SERVICE_GROUP_ID
        {
            set { _service_group_id = value; }
            get { return _service_group_id; }
        }

        private string _role_service_group_rev_no;
        /// <summary>
        /// Gets or sets the ROLE_SERVICE_GROUP_ID.
        /// </summary>
        /// <value>The ROLE_SERVICE_GROUP_ID.</value>
        /// <remarks></remarks>
        public string ROLE_SERVICE_GROUP_REV_NO
        {
            set { _role_service_group_rev_no = value; }
            get { return _role_service_group_rev_no; }
        }
        private string change_pwd_count;

        public string CHNG_PWD_CNT
        {
            get { return change_pwd_count; }
            set { change_pwd_count = value; }
        }


        private string print_dt;
        public string PRINT_DT
        {
            get { return print_dt; ; }
            set { print_dt = value; }
        }


        private int print_count;
        public int PRINT_COUNT
        {
            get { return print_count; }
            set { print_count = value; }
        }
        private string _default_org_id;

        public string DEFAULT_ORG_ID
        {
            get { return _default_org_id; }
            set { _default_org_id = value; }
        }
        private string org_name;

        public string ORG_NAME
        {
            get { return org_name; }
            set { org_name = value; }
        }
        private string _default_grp_id;

        public string DEFAULT_GRP_ID
        {
            get { return _default_grp_id; }
            set { _default_grp_id = value; }
        }
        private string grp_name;

        public string GRP_NAME
        {
            get { return grp_name; }
            set { grp_name = value; }
        }
        private string reference_type_name;

        public string REFERENCE_TYPE_NAME
        {
            get { return reference_type_name; }
            set { reference_type_name = value; }
        }
        private string _reference_name;

        public string REFERENCE_NAME
        {
            get { return _reference_name; }
            set { _reference_name = value; }
        }
        private string _crit_value;
        /// <summary>
        /// Gets or sets the BARCODE.
        /// </summary>
        /// <value>The BARCODE.</value>
        /// <remarks></remarks>
        public string CRITICAL_VALUE
        {
            set { _crit_value = value; }
            get { return _crit_value; }
        }
        private string Access_Token;

        public string ACCESS_TOKEN
        {
            get { return Access_Token; }
            set { Access_Token = value; }
        }

        private string SessionUserHostAddress;

        public string SESSIONUSERHOSTADDRESS
        {
            get { return SessionUserHostAddress; }
            set { SessionUserHostAddress = value; }
        }

        private string SessionUserAgent;

        public string SESSIONUSERAGENT
        {
            get { return SessionUserAgent; }
            set { SessionUserAgent = value; }
        }
        private string SessionURL;

        public string SESSIONURL
        {
            get { return SessionURL; }
            set { SessionURL = value; }
        }
        private string SessionReferrer;

        public string SESSIONREFERRER
        {
            get { return SessionReferrer; }
            set { SessionReferrer = value; }
        }


        private string MachineName;

        public string MACHINENAME
        {
            get { return MachineName; }
            set { MachineName = value; }
        }

        private string terminal;

        public string TERMINAL
        {
            get { return terminal; }
            set { terminal = value; }
        }

        private string browser;

        public string BROWSER
        {
            get { return browser; }
            set { browser = value; }
        }


        private string browser_ver;

        public string BROWSER_VER
        {
            get { return browser_ver; }
            set { browser_ver = value; }
        }


        private string error_desc;

        public string ERROR_DESC
        {
            get { return error_desc; }
            set { error_desc = value; }
        }


        private string _ACCESS_MA;

        public string ACCESS_MA
        {
            get { return _ACCESS_MA; }
            set { _ACCESS_MA = value; }
        }

        private int method_of_communication_id;
        public int METHOD_OF_COMMUNICATION_ID
        {
            get { return method_of_communication_id; }
            set { method_of_communication_id = value; }
        }


        private string access_dms_download;

        public string ACCESS_DMS_DOWNLOAD
        {
            get { return access_dms_download; }
            set { access_dms_download = value; }
        }

        private string _allowmachineservices;

        public string ALLOWMACHINESERVICES
        {
            get { return _allowmachineservices; }
            set { _allowmachineservices = value; }
        }
        private string _Shift_Limit_Amount;

        public string SHIFT_LIMIT_AMOUNT
        {
            get { return _Shift_Limit_Amount; }
            set { _Shift_Limit_Amount = value; }
        }

        private string account_expiry_dt;
        public string ACCOUNT_EXPIRY_DT
        {
            get { return account_expiry_dt; }
            set { account_expiry_dt = value; }
        }

        private string access_print_authorized;
        public string ACCESS_PRINT_AUTHORIZED
        {
            get { return access_print_authorized; }
            set { access_print_authorized = value; }
        }
        private string access_original_prn;
        public string ACCESS_ORIGINAL_PRN
        {
            get { return access_original_prn; }
            set { access_original_prn = value; }
        }
        private string access_duplicate_prn;
        public string ACCESS_DUPLICATE_PRN
        {
            get { return access_duplicate_prn; }
            set { access_duplicate_prn = value; }
        }

        private string is_counter_reqired;
        public string IS_COUNTER_REQIRED
        {
            get { return is_counter_reqired; }
            set { is_counter_reqired = value; }
        }

        private string _SHIFT_LIMIT_ALERT_PCT;
        public string SHIFT_LIMIT_ALERT_PCT
        {
            get { return _SHIFT_LIMIT_ALERT_PCT; }
            set { _SHIFT_LIMIT_ALERT_PCT = value; }
        }
        private string _SHIFT_LIMIT_ALERT_AMOUNT;
        public string SHIFT_LIMIT_ALERT_AMOUNT
        {
            get { return _SHIFT_LIMIT_ALERT_AMOUNT; }
            set { _SHIFT_LIMIT_ALERT_AMOUNT = value; }
        }

        private int _DISPLAY_ORDER;

        public int DISPLAY_ORDER
        {
            get { return _DISPLAY_ORDER; }
            set { _DISPLAY_ORDER = value; }
        }
        public string _STATUS;
        public string STATUS
        {
            get { return _STATUS; }
            set { _STATUS = value; }
        }
        public string _OLD_PWD;
        public string OLD_PWD
        {
            get { return _OLD_PWD; }
            set { _OLD_PWD = value; }
        }
        private string mobile_No = string.Empty;
        public string MOBILE_NO
        {
            get { return mobile_No; }
            set { mobile_No = value; }
        }
        
        
        private string Designation = string.Empty;
        public string DESIGNATION 
        {
            get { return Designation; }
            set { Designation = value; }
        }
        private string _GRID_URL;
        public string GRID_URL
        {
            get { return _GRID_URL; }
            set { _GRID_URL = value; }
        }

        private string is_srv_lock_ignore;
        public string IS_SRV_LOCK_IGNORE
        {
            get { return is_srv_lock_ignore; }
            set { is_srv_lock_ignore = value; }
        }

        private string parent_doc_id;
        public string PARENT_DOC_ID
        {
            get { return parent_doc_id; }
            set { parent_doc_id = value; }
        }
        private string parent_doc_cd;
        public string PARENT_DOC_CD
        {
            get { return parent_doc_cd; }
            set { parent_doc_cd = value; }
        }
        private string parent_doc_name;
        public string PARENT_DOC_NAME
        {
            get { return parent_doc_name; }
            set { parent_doc_name = value; }
        }
        private string _EMR_LOGIN_NAME;
        public string EMR_LOGIN_NAME
        {
            get { return _EMR_LOGIN_NAME; }
            set { _EMR_LOGIN_NAME = value; }
        }
        private string _MULTI_USER_ID;
        public string MULTI_USER_ID
        {
            get { return _MULTI_USER_ID; }
            set { _MULTI_USER_ID = value; }
        }
        private string _PARENT_MODULE_NAME;
        public string PARENT_MODULE_NAME
        {
            get { return _PARENT_MODULE_NAME; }
            set { _PARENT_MODULE_NAME = value; }
        }
        private string _MOBILE_NO_MASK;
        public string MOBILE_NO_MASK
        {
          get { return _MOBILE_NO_MASK; }
          set { _MOBILE_NO_MASK = value; }
        }

        private int _EMR_ROLE_ID;
        public int EMR_ROLE_ID
        {
            get { return _EMR_ROLE_ID; }
            set { _EMR_ROLE_ID = value; }
        }

        public string LOCATION_ID { get; set; }
        public string LOC_ID_LOC_ID { get; set; }
    }

    
}
