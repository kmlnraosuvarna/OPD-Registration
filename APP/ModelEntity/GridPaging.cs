using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{

    [Serializable]
    public class GridPaging : LookUpSearch
    {
        private int _user_id;
        public int USER_ID
        {
            set
            {
                _user_id = value;
            }
            get { return _user_id; }
        }

        private int _sop_doc_id;
        public int SOP_DOC_ID
        {
            set
            {
                _sop_doc_id = value;
            }
            get { return _sop_doc_id; }
        }

        private int stp_id;
        public int STP_ID
        {
            set
            {
                stp_id = value;
            }
            get { return stp_id; }
        }

        private int page_num;
        public int PAGENUM
        {
            set
            {
                page_num = value;
            }
            get { return page_num; }
        }

        private int _session_id;
        public int SESSION_ID
        {
            set
            {
                _session_id = value;
            }
            get
            {
                return _session_id;
            }
        }
        private string from_date;

        public string FROM_DATE
        {
            get { return from_date; }
            set { from_date = value; }
        }
        private string to_date;

        public string TO_DATE
        {
            get { return to_date; }
            set { to_date = value; }
        }
        private string _flag;

        public string FLAG
        {
            get { return _flag; }
            set { _flag = value; }
        }

        private string ADMN_TYPE_ID = string.Empty;

        public string ADMN_TYPE_ID1
        {
            get { return ADMN_TYPE_ID; }
            set { ADMN_TYPE_ID = value; }
        }
        private int _patient_class_id;
        public int PATIENT_CLASS_ID
        {
            get
            {
                return _patient_class_id;
            }
            set
            {
                _patient_class_id = value;
            }
        }


        private int _doc_id = 0;

        public int DOC_ID
        {
            get { return _doc_id; }
            set { _doc_id = value; }
        }


        private int _mod_id = 0;

        public int MOD_ID
        {
            get { return _mod_id; }
            set { _mod_id = value; }
        }

        private string all_ind;

        public string ALL_IND
        {
            get { return all_ind; }
            set { all_ind = value; }
        }

        private string _LOCATION_ID;

        public string LOCATION_ID
        {
            get { return _LOCATION_ID; }
            set { _LOCATION_ID = value; }
        }

        private int _dept_id;

        public int DEPT_ID
        {
            get { return _dept_id; }
            set { _dept_id = value; }
        }
        private int _srv_grp_id;

        public int SRV_GRP_ID
        {
            get { return _srv_grp_id; }
            set { _srv_grp_id = value; }
        }
        private string patient_name;

        public string PATIENT_NAME
        {
            get { return patient_name; }
            set { patient_name = value; }
        }
        private string mobileno;

        public string MOBILENO
        {
            get { return mobileno; }
            set { mobileno = value; }
        }
        private string resonse_id;

        public string RESPONSE_ID
        {
            get { return resonse_id; }
            set { resonse_id = value; }
        }
        private string _ADMN_DT;

        public string ADMN_DT
        {
            get { return _ADMN_DT; }
            set { _ADMN_DT = value; }
        }
        private int reference_type_id;
        public int REFERENCE_TYPE_ID
        {
            get { return reference_type_id; }
            set { reference_type_id = value; }
        }
        private string _authorized_name;
        public string _AUTHORIZED_NAME
        {
            get { return _authorized_name; }
            set { _authorized_name = value; }
        }

        private string _ADMN_EC_ID = string.Empty;
        public string ADMN_EC_ID
        {
            get { return _ADMN_EC_ID; }
            set { _ADMN_EC_ID = value; }
        }
        private string _QueryKey = string.Empty;
        public string QueryKey
        {
            get { return _QueryKey; }
            set { _QueryKey = value; }
        }
        private string auto_id1;
        public string AUTO_ID1
        {
            get { return auto_id1; }
            set { auto_id1 = value; }
        }
        private string auto_id;
        public string AUTO_ID
        {
            get { return auto_id; }
            set { auto_id = value; }
        }
        private string column_name1;
        public string COLUMN_NAME1
        {
            get { return column_name1; }
            set { column_name1 = value; }
        }
        private string sp;
        public string SP
        {
            get { return sp; }
            set { sp = value; }
        }
        private int blood_req_id;
        public int BLOOD_REQ_ID
        {
            get { return blood_req_id; }
            set { blood_req_id = value; }
        }
        private string patient_type_id;
        public string PATIENT_TYPE_ID
        {
            get { return patient_type_id; }
            set { patient_type_id = value; }
        }
        private string column_name2;
        public string COLUMN_NAME2
        {
            get { return column_name2; }
            set { column_name2 = value; }
        }
        private string auto_id2;
        public string AUTO_ID2
        {
            get { return auto_id2; }
            set { auto_id2 = value; }
        }

        private string date;
        public string DATE
        {
            get { return date; }
            set { date = value; }
        }


        private int autoid;
        public int _AUTO_ID
        {
            get { return autoid; }
            set { autoid = value; }
        }
        private string _HC_SCH_ID;

        public string HC_SCH_ID
        {
            get { return _HC_SCH_ID; }
            set { _HC_SCH_ID = value; }
        }
        private string _PC_TEMPLATE_ID;

        public string PC_TEMPLATE_ID
        {
            get { return _PC_TEMPLATE_ID; }
            set { _PC_TEMPLATE_ID = value; }
        }
        private string _PC_SCH_REQ_ID;

        public string PC_SCH_REQ_ID
        {
            get { return _PC_SCH_REQ_ID; }
            set { _PC_SCH_REQ_ID = value; }
        }
        private string _EMP_HC_ID;

        public string EMP_HC_ID
        {
            get { return _EMP_HC_ID; }
            set { _EMP_HC_ID = value; }
        }
        private string tran_type_id;

        public string TRAN_TYPE_ID
        {
            get { return tran_type_id; }
            set { tran_type_id = value; }
        }
        private string pc_req_id;
        public string PC_REQ_ID
        {
            get { return pc_req_id; }
            set { pc_req_id = value; }
        }
        private string pc_req_source_id;
        public string PC_REQ_SOURCE_ID
        {
            get { return pc_req_source_id; }
            set { pc_req_source_id = value; }
        }
        private string _HC_SCH_REQ_ID;
        public string HC_SCH_REQ_ID
        {
            get { return _HC_SCH_REQ_ID; }
            set { _HC_SCH_REQ_ID = value; }
        }
        private string _EMP_VACCINATION_ID;
        public string EMP_VACCINATION_ID
        {
            get { return _EMP_VACCINATION_ID; }
            set { _EMP_VACCINATION_ID = value; }
        }
        private int req_stat_id;
        public int REQ_STAT_ID
        {
            get { return req_stat_id; }
            set { req_stat_id = value; }
        }
        private int _auto_id1;
        public int _AUTO_ID1
        {
            get { return _auto_id1; }
            set { _auto_id1 = value; }
        }
        private int _auto_id2;
        public int _AUTO_ID2
        {
            get { return _auto_id2; }
            set { _auto_id2 = value; }
        }

        private string admin_no;
        public string ADMIN_NO
        {
            get { return admin_no; }
            set { admin_no = value; }
        }
        private string gridflag;
        public string GRIDFLAG
        {
            get { return gridflag; }
            set { gridflag = value; }
        }
        public string IS_STAT { get; set; }

        private string schedule_status_cd;
        public string SCHEDULE_STATUS_CD
        {
            get { return schedule_status_cd; }
            set { schedule_status_cd = value; }
        }

        private string _PROCNAME;

        public string PROCNAME
        {
            get { return _PROCNAME; }
            set { _PROCNAME = value; }
        }
        private string _GRIDPAGENAME;

        public string GRIDPAGENAME
        {
            get { return _GRIDPAGENAME; }
            set { _GRIDPAGENAME = value; }
        }
        private string _VACCINATION_TRN_ID;

        public string VACCINATION_TRN_ID
        {
            get { return _VACCINATION_TRN_ID; }
            set { _VACCINATION_TRN_ID = value; }
        }
        private string _ENTITY_ID;

        public string ENTITY_ID
        {
            get { return _ENTITY_ID; }
            set { _ENTITY_ID = value; }
        }

        private string hai_trn_no;

        public string _HAI_TRN_NO
        {
            get { return hai_trn_no; }
            set { hai_trn_no = value; }
        }

        private string reference_type_idd;
        public string REFERENCE_TYPE_IDD
        {
            get { return reference_type_idd; }
            set { reference_type_idd = value; }
        }
        private string _PC_SCH_ID;
        public string PC_SCH_ID
        {
            get { return _PC_SCH_ID; }
            set { _PC_SCH_ID = value; }
        }

        private string ward_auto_chrg_id;

        public string WARD_AUTO_CHRG_ID
        {
            get { return ward_auto_chrg_id; }
            set { ward_auto_chrg_id = value; }
        }
        private int pas_bill_id;

        public int PAS_BILL_ID
        {
            get { return pas_bill_id; }
            set { pas_bill_id = value; }
        }

        private int _BILL_ASSESMENT_ID;

        public int BILL_ASSESMENT_ID
        {
            get { return _BILL_ASSESMENT_ID; }
            set { _BILL_ASSESMENT_ID = value; }
        }
        private string _ER_FLAG;

        public string ER_FLAG
        {
            get { return _ER_FLAG; }
            set { _ER_FLAG = value; }

        }


        private string ip_flag;

        public string IP_FLAG
        {
            get { return ip_flag; }
            set { ip_flag = value; }

        }
        private string admn_service_type_id;

        public string ADMN_SERVICE_TYPE_ID
        {
            get { return admn_service_type_id; }
            set { admn_service_type_id = value; }

        }
        private int _days;
        public int DAYS
        {

            get { return _days; }
            set { _days = value; }

        }
        private string _ip_advance_search;

        public string IP_ADVANCE_SEARCH
        {
            get { return _ip_advance_search; }
            set { _ip_advance_search = value; }
        }

        private string _ip_prefixtext;

        public string IP_PREFIXTEXT
        {
            get { return _ip_prefixtext; }
            set { _ip_prefixtext = value; }
        }

        private string _ip_pagenum;

        public string IP_PAGENUM
        {
            get { return _ip_pagenum; }
            set { _ip_pagenum = value; }
        }
        private string _ip_pagesize;

        public string IP_PAGESIZE
        {
            get { return _ip_pagesize; }
            set { _ip_pagesize = value; }
        }
        private string ip_from_dt;

        public string IP_FROM_DT
        {
            get { return ip_from_dt; }
            set { ip_from_dt = value; }
        }
        private string ip_to_dt;

        public string IP_TO_DT
        {
            get { return ip_to_dt; }
            set { ip_to_dt = value; }
        }
        private string _CatId;

        public string CatId
        {
            get { return _CatId; }
            set { _CatId = value; }
        }
        private string _admn;

        public string admn
        {
            get { return _admn; }
            set { _admn = value; }
        }
        private string _theterNo;

        public string theterNo
        {
            get { return _theterNo; }
            set { _theterNo = value; }
        }

        private string _MED_CHK_TEMPLAT_ID;
        public string MED_CHK_TEMPLAT_ID
        {
            get { return _MED_CHK_TEMPLAT_ID; }
            set { _MED_CHK_TEMPLAT_ID = value; }
        }
        public int ROOM_ID { get; set; }
        public int FLOOR_ID { get; set; }
        public int WARD_ID { get; set; }

        public int NURSESTATION_ID { get; set; }
        public int BLOCK_ID { get; set; }
        public int WING_ID { get; set; }

        public int GENDER_ID { get; set; }
        public int SPECIALIZATION_ID { get; set; }
        public int BED_STATUS_ID { get; set; }
        public string pageSize { get; set; }
        public string curPage { get; set; }

        private string _FLAG_USER;

        public string FLAG_USER
        {
            get { return _FLAG_USER; }
            set { _FLAG_USER = value; }
        }
        private string recevie_type_id;

        public string RECEVIE_TYPE_ID
        {
            get { return recevie_type_id; }
            set { recevie_type_id = value; }
        }


        private string _COUNTER;

        public string COUNTER
        {
            get { return _COUNTER; }
            set { _COUNTER = value; }
        }
        private string _ORDER_BY;

        public string ORDER_BY
        {
            get { return _ORDER_BY; }
            set { _ORDER_BY = value; }
        }
        private string _CREDIT_VALIDITY_DT;

        public string CREDIT_VALIDITY_DT
        {
            get { return _CREDIT_VALIDITY_DT; }
            set { _CREDIT_VALIDITY_DT = value; }
        }

        public int TotalCount;
        private string _usr_id;
        public string USR_ID
        {
            set
            {
                _usr_id = value;
            }
            get { return _usr_id; }
        }
        private string _LOC_ID;
        public string LOC_ID
        {
            set
            {
                _LOC_ID = value;
            }
            get { return _LOC_ID; }
        }
        private int _TARIFF_ID;
        public int TARIFF_ID
        {
            set
            {
                _TARIFF_ID = value;
            }
            get { return _TARIFF_ID; }
        }
        private string _SERVICE_GROUP_ID;

        public string SERVICE_GROUP_ID
        {
            get { return _SERVICE_GROUP_ID; }
            set { _SERVICE_GROUP_ID = value; }
        }
        private string _DEPARTMENT_ID;

        public string DEPARTMENTID
        {
            get { return _DEPARTMENT_ID; }
            set { _DEPARTMENT_ID = value; }
        }
        //private int eventflag;

        //public int EVENTFLAG
        //{
        //    get { return eventflag; }
        //    set { eventflag = value; }
        //}

        //public string COLUMN_NAME { get; set; }
        //public string PREFIX_TEXT { get; set; }
        public int CMP_ID { get; set; }
        public string CMO_DOCTOR { get; set; }


    }
}
