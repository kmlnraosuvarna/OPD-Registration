using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class LookUpSearch:ViewPaging
    {
        private int _STP_ID;

        public int STP_ID
        {
            get { return _STP_ID; }
            set { _STP_ID = value; }
        }


        private int to_stp_id;

        public int TO_STP_ID
        {
            get { return to_stp_id; }
            set { to_stp_id = value; }
        }

        private int _pageSize;
        public int PAGE_SIZE
        {
            get
            {
                return _pageSize;
            }
            set
            {
                _pageSize = value;
            }
        }
        private int _currPage;
        public int CURRENT_PAGE
        {
            get
            {
                return _currPage;
            }
            set
            {
                _currPage = value;
            }
        }
        private int _total_records;
        public int TOTAL_RECORDS
        {
            get
            {
                return _total_records;
            }
            set
            {
                _total_records = value;
            }
        }
        private string _columnName = string.Empty;
        public string COLUMN_NAME
        {
            get
            {
                return _columnName;
            }
            set
            {
                _columnName = value;
            }
        }
        private string _prefixTxt= string.Empty;
        public string PREFIX_TEXT
        {
            get
            {
                return _prefixTxt;
            }
            set
            {
                _prefixTxt = value;
            }
        }
        private string _advance_Search = string.Empty;
        public string ADVANCESEARCH
        {
            set
            {
                _advance_Search = value;
            }
            get
            {
                return _advance_Search;
            }
        }

        private List<object> _customConditon = null;
        public List<object> PreConditon
        {
            get
            {
                return _customConditon;
            }
            set
            {
                _customConditon = value;
            }
        }
        private string _filtered_by;
        public string FILTERED_BY
        {
            get
            {
                return _filtered_by;
            }
            set
            {
                _filtered_by = value;
            }
        }

        private string _patient_type;
        public string PATIENT_TYPE
        {
            get
            {
                return _patient_type;
            }
            set
            {
                _patient_type = value;
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
        private int _member_id;
        public int MEMBER_ID
        {
            set { _member_id = value; }
            get { return _member_id; }
        }
        private string _flag;
        public string FLAG
        {
            set { _flag = value; }
            get { return _flag; }
        }
        private int _MODULE_ID;

        public int MODULE_ID
        {
            get { return _MODULE_ID; }
            set { _MODULE_ID = value; }
        }
        private int _USER_ID;

        public int USER_ID
        {
            get { return _USER_ID; }
            set { _USER_ID = value; }
        }
        private string all_ind;

        public string ALL_IND
        {
            get { return all_ind; }
            set { all_ind = value; }
        }
        private int service_type_id;

        public int SERVICE_TYPE_ID
        {
            get { return service_type_id; }
            set { service_type_id = value; }
        }

        private string _ADMN_NO;

        public string ADMN_NO
        {
            get { return _ADMN_NO; }
            set { _ADMN_NO = value; }
        }
        private int _VEHICLE_TYPE_ID;

        public int VEHICLE_TYPE_ID
        {
            get { return _VEHICLE_TYPE_ID; }
            set { _VEHICLE_TYPE_ID = value; }
        }
        private string invoice_no;

        public string INVOICE_NO
        {
            get { return invoice_no; }
            set { invoice_no = value; }
        }

        private string _UMR_NO;
        public string UMR_NO
        {
            get { return _UMR_NO; }
            set { _UMR_NO = value; }
        }
        private string emp_id;

        public string EMP_ID
        {
            get { return emp_id; }
            set { emp_id = value; }
        }
        private string reference_type_id;

        public string REFERENCE_TYPE_ID
        {
            get { return reference_type_id; }
            set { reference_type_id = value; }
        }

        public int PATIENT_TYPE_ID { get; set; }
        public int ORDER_TYPE { get; set; }

        private string sortorder;

        public string SORTORDER
        {
            get { return sortorder; }
            set { sortorder = value; }
        }

        private string _PROCNAME;

        public string PROCNAME
        {
            get { return _PROCNAME; }
            set { _PROCNAME = value; }
        }

        private string _PAGEFLAGNAME;

        public string PAGEFLAGNAME
        {
            get { return _PAGEFLAGNAME; }
            set { _PAGEFLAGNAME = value; }
        }
        private string _flag1;
        public string FLAG1
        {
            set { _flag1 = value; }
            get { return _flag1; }
        }
        private string patient_id;

        public string PATIENT_ID
        {
            get { return patient_id; }
            set { patient_id = value; }
        }
        private int department_id;

        public int DEPARTMENT_ID
        {
            get { return department_id; }
            set { department_id = value; }
        }

        private string _REPORTFILTERCRETERIA;

        public string REPORTFILTERCRETERIA
        {
            get { return _REPORTFILTERCRETERIA; }
            set { _REPORTFILTERCRETERIA = value; }
        }
        private int _rec_type_id;

        public int REC_TYPE_ID
        {
            get { return _rec_type_id; }
            set { _rec_type_id = value; }
        }

        private int _location_id;

        public int LOCATION_ID
        {
            get { return _location_id; }
            set { _location_id = value; }
        }

        public string CMO_DOCTOR { get; set; }
        public string CMO1 { get; set; }
    }
}
