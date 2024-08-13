using System;
namespace EzHms.ModelEntity
{
    [Serializable]
    public class User_Doc_Access : UserOrGroupDoc
    {

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
        private string _PARENT_MODULE_ID;
        public string PARENT_MODULE_ID {
            get { return _PARENT_MODULE_ID; }
            set { _PARENT_MODULE_ID = value; }
        }

        private string _eventflag;
        public string EVENTFLAG {
            get { return _eventflag; }
            set { _eventflag = value; }
        }

        private int _NoOfRecords;
        public int NoOfRecords {
            get { return _NoOfRecords; }
            set { _NoOfRecords = value; }
        }
          
        private string _ORDER_BY;

        public string ORDER_BY
        {
            get { return _ORDER_BY; }
            set { _ORDER_BY = value; }
        }
        private string _SORTING_ORDER;

        public string SORTING_ORDER
        {
            get { return _SORTING_ORDER; }
            set { _SORTING_ORDER = value; }
        }
        private string _access_prnheader;

        public string Access_prnheader
        {
            get { return _access_prnheader; }
            set { _access_prnheader = value; }
        }
        private int _doc_id;
        public int DOC_ID
        {
            set { _doc_id = value; }
            get { return _doc_id; }
        }
        private string _DOC_CD;

        public string DOC_CD
        {
            get { return _DOC_CD; }
            set { _DOC_CD = value; }
        }
        private string _DOC_NAME;

        public string DOC_NAME
        {
            get { return _DOC_NAME; }
            set { _DOC_NAME = value; }
        }
        private int _doc_id_ver;
        public int DOC_ID_VER
        {
            set { _doc_id_ver = value; }
            get { return _doc_id_ver; }
        }
        private int _user_id;
        public int USER_ID
        {
            set { _user_id = value; }
            get { return _user_id; }
        }
        private string _USER_NAME;

        public string USER_NAME
        {
            get { return _USER_NAME; }
            set { _USER_NAME = value; }
        }
        private int _MODULE_ID;

        public int MODULE_ID
        {
            get { return _MODULE_ID; }
            set { _MODULE_ID = value; }
        }
        private string _MODULE_CD;

        public string MODULE_CD
        {
            get { return _MODULE_CD; }
            set { _MODULE_CD = value; }
        }
        private string _MODULE_DESC;

        public string MODULE_DESC
        {
            get { return _MODULE_DESC; }
            set { _MODULE_DESC = value; }
        }
        private string _MODULE_NAME;

        public string MODULE_NAME
        {
            get { return _MODULE_NAME; }
            set { _MODULE_NAME = value; }
        }
        private int _user_id_ver;
        public int USER_ID_VER
        {
            set { _user_id_ver = value; }
            get { return _user_id_ver; }
        }
        private string _access_add;
        public string ACCESS_ADD
        {
            set { _access_add = value; }
            get { return _access_add; }
        }
        private string _access_mod;
        public string ACCESS_MOD
        {
            set { _access_mod = value; }
            get { return _access_mod; }
        }
        private string _access_del;
        public string ACCESS_DEL
        {
            set { _access_del = value; }
            get { return _access_del; }
        }
        private string _access_qry;
        public string ACCESS_QRY
        {
            set { _access_qry = value; }
            get { return _access_qry; }
        }
        private string _access_app;
        public string ACCESS_APP
        {
            set { _access_app = value; }
            get { return _access_app; }
        }
        private string _access_exe;
        public string ACCESS_EXE
        {
            set { _access_exe = value; }
            get { return _access_exe; }
        }
        private string _barcode;
        public string BARCODE
        {
            set { _barcode = value; }
            get { return _barcode; }
        }
        private string _printtype;
        public string PRINTTYPE
        {
            set { _printtype = value; }
            get { return _printtype; }
        }
        private string _approvedlevel;
        public string APPROVEDLEVEL
        {
            set { _approvedlevel = value; }
            get { return _approvedlevel; }
        }
        private int _create_by;
        public int CREATE_BY
        {
            set { _create_by = value; }
            get { return _create_by; }
        }
        private string _ACCESS_PRICE;

        public string ACCESS_PRICE
        {
            get { return _ACCESS_PRICE; }
            set { _ACCESS_PRICE = value; }
        }
        private string _create_dt;
        public string CREATE_DT
        {
            set { _create_dt = value; }
            get { return _create_dt; }
        }
        private int _modify_by;
        public int MODIFY_BY
        {
            set { _modify_by = value; }
            get { return _modify_by; }
        }
        private string _modify_dt;
        public string MODIFY_DT
        {
            set { _modify_dt = value; }
            get { return _modify_dt; }
        }
        private string _printformat;
        public string PRINTFORMAT
        {
            set { _printformat = value; }
            get { return _printformat; }
        }
        private string _row_status;
        public string ROW_STATUS
        {
            set { _row_status = value; }
            get { return _row_status; }
        }
        private string role;

        public string ROLENAME
        {
            get { return role; }
            set { role = value; }
        }
        private string depart_name;

        public string DEPARTMENT_NAME
        {
            get { return depart_name; }
            set { depart_name = value; }
        }
        private string _crit_value;
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

        private string _ACCESS_MA;

        public string ACCESS_MA
        {
            get { return _ACCESS_MA; }
            set { _ACCESS_MA = value; }
        }

        private string _ACCESS_DMS_DOWNLOAD;
        public string ACCESS_DMS_DOWNLOAD
        {
            get { return _ACCESS_DMS_DOWNLOAD; }
            set { _ACCESS_DMS_DOWNLOAD = value; }
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

        private int _NO_OF_RECORDS;
        public int NO_OF_RECORDS
        {
            get { return _NO_OF_RECORDS; }
            set { _NO_OF_RECORDS = value; }
        }

        private string _FLAG;
        public string FLAG
        {
            get { return _FLAG; }
            set { _FLAG = value; }
        }

        private string _DOC_FORM_CD;
        public string DOC_FORM_CD
        {
            get { return _DOC_FORM_CD; }
            set { _DOC_FORM_CD = value; }
        }

        private string _PROJECT_CD;
        public string PROJECT_CD
        {
            get { return _PROJECT_CD; }
            set { _PROJECT_CD = value; }
        }
    }
}
