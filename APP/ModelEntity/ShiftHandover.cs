        using System;
        using System.Collections.Generic;
        using System.Linq;
        using System.Text;

        namespace EzHms.ModelEntity
        {
 
        public  class SHIFT_HANDOVER
        {
        private int _shift_col_trnsfr_id;
        public int SHIFT_COL_TRNSFR_ID
        {
        set { _shift_col_trnsfr_id = value; }
        get { return _shift_col_trnsfr_id; }
        }
        private int _shift_col_trnsfr_rev_no;
        public int SHIFT_COL_TRNSFR_REV_NO
        {
        set { _shift_col_trnsfr_rev_no = value; }
        get { return _shift_col_trnsfr_rev_no; }
        }
        private string _trnsfr_no;
        public string TRNSFR_NO
        {
        set { _trnsfr_no = value; }
        get { return _trnsfr_no; }
        }
        private string _trnsfr_dt;
        public string TRNSFR_DT
        {
        set { _trnsfr_dt = value; }
        get { return _trnsfr_dt; }
        }
        private int _from_user_id;
        public int FROM_USER_ID
        {
        set { _from_user_id = value; }
        get { return _from_user_id; }
        }
        private int _to_user_id;
        public int TO_USER_ID
        {
        set { _to_user_id = value; }
        get { return _to_user_id; }
        }
        private int _from_shift_log_id;
        public int FROM_SHIFT_LOG_ID
        {
        set { _from_shift_log_id = value; }
        get { return _from_shift_log_id; }
        }
        private int _to_shift_log_id;
        public int TO_SHIFT_LOG_ID
        {
        set { _to_shift_log_id = value; }
        get { return _to_shift_log_id; }
        }
        private string _trnsfr_amount;
        public string TRNSFR_AMOUNT
        {
        set { _trnsfr_amount = value; }
        get { return _trnsfr_amount; }
        }
        private int _org_id;
        public int ORG_ID
        {
        set { _org_id = value; }
        get { return _org_id; }
        }
        private int _grp_id;
        public int GRP_ID
        {
        set { _grp_id = value; }
        get { return _grp_id; }
        }
        private int _loc_id;
        public int LOC_ID
        {
        set { _loc_id = value; }
        get { return _loc_id; }
        }
        private int _create_by;
        public int CREATE_BY
        {
        set { _create_by = value; }
        get { return _create_by; }
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
        private string _record_status;
        public string RECORD_STATUS
        {
        set { _record_status = value; }
        get { return _record_status; }
        }
        private int _session_id;
        public int SESSION_ID
        {
        set { _session_id = value; }
        get { return _session_id; }
        }


        private int _shift_col_trnsfr_det_id;
        public int SHIFT_COL_TRNSFR_DET_ID
        {
        set {_shift_col_trnsfr_det_id = value; }
        get {return _shift_col_trnsfr_det_id; }

        }
        private int _shift_col_trnsfr_det_rev_no;
        public int SHIFT_COL_TRNSFR_DET_REV_NO
        { set {_shift_col_trnsfr_det_rev_no = value; }
        get {return _shift_col_trnsfr_det_rev_no; }
        }

        private int _payment_mode_id;
        public int PAYMENT_MODE_ID
        {set {_payment_mode_id = value; }
        get {return _payment_mode_id; }
        }

        private int _payment_mode_rev_no;
        public int PAYMENT_MODE_REV_NO
        {set {_payment_mode_rev_no = value; }
        get {return _payment_mode_rev_no; }
        }
        private int _curr_id;
        public int CURR_ID
        {set {_curr_id = value; }
        get {return _curr_id; }
        }
        private int _curr_rev_no;
        public int CURR_REV_NO
        {set {_curr_rev_no = value; }
        get {return _curr_rev_no; }
        }
        private string _shift_amount;
        public string SHIFT_AMOUNT
        {set {_shift_amount = value; }
        get {return _shift_amount; }
        }

        private int _approve_by;
        public int APPROVE_BY
        {set {_approve_by = value; }
        get {return _approve_by; }
        }
        private string _approve_dt;
        public string APPROVE_DT
        {set {_approve_dt = value; }
        get {return _approve_dt; }
        }

        private int _auth_id;
        public int AUTH_ID
        {set {_auth_id = value; }
        get {return _auth_id; }
        }


        private int _shift_col_trnsfr_den_id;
        public int SHIFT_COL_TRNSFR_DEN_ID
        {set {_shift_col_trnsfr_den_id = value; }
        get {return _shift_col_trnsfr_den_id; }
        }
        private int _shift_col_trnsfr_den_rev_no;
        public int SHIFT_COL_TRNSFR_DEN_REV_NO
        {set {_shift_col_trnsfr_den_rev_no = value; }
        get {return _shift_col_trnsfr_den_rev_no; }
        }

        private int cash_denomination_id;
        public int CASH_DENOMINATION_ID
        {set {cash_denomination_id = value; }
            get { return cash_denomination_id; }
        }
        private int _denomination_rev_no;
        public int DENOMINATION_REV_NO
        {set {_denomination_rev_no = value; }
        get {return _denomination_rev_no; }
        }
        private int _quantity;
        public int QUANTITY
        {set {_quantity = value; }
        get {return _quantity; }
        }
        private string _amount;
        public string AMOUNT
        {set {_amount = value; }
        get {return _amount; }
        }
        private string xml;
        public string XML
        {
        set { xml = value; }
        get { return xml; }
        }
        private string count;
        public string COUNT
        {
        set { count = value; }
        get { return count; }
        }
        private string from_user_name;
        public string FROM_USER_NAME
        {
            set { from_user_name = value; }
            get { return from_user_name; }
        }
        private string to_user_name;
        public string TO_USER_NAME
        {
            set { to_user_name = value; }
            get { return to_user_name; }
        }
        private string currency_name;
        public string CURRENCY_NAME
        {
            set { currency_name = value; }
            get { return currency_name; }
        }
        private string  det_trnsfr_amount;
        public string  DET_TRNSFR_AMOUNT
        {
            set { det_trnsfr_amount = value; }
            get { return det_trnsfr_amount; }
        }
            private string  payment_mode_name;
        public string  PAYMENT_MODE_NAME
        {
            set { payment_mode_name = value; }
            get { return payment_mode_name; }
        }
        private string cash_denomination_name;
        public string CASH_DENOMINATION_NAME
        {
            set { cash_denomination_name = value; }
            get { return cash_denomination_name; }
        }
        private string from_shift_log_time;
        public string FROM_SHIFT_LOG_TIME
        {
            set { from_shift_log_time = value; }
            get { return from_shift_log_time; }
        }
        private string to_shift_log_time;
        public string TO_SHIFT_LOG_TIME
        {
            set { to_shift_log_time = value; }
            get { return to_shift_log_time; }
        }

        }
        }


     


