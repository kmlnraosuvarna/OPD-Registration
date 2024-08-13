using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class FO_BILL 
    {
        private string _cmp_outstanding_due = "0";
        public string CMP_OUTSTANDING_DUE
        {
            get { return _cmp_outstanding_due; }
            set { _cmp_outstanding_due = value; }
        }


        private string _cmp_due_recovered = "0";
        public string CMP_DUE_RECOVERED
        {
            get { return _cmp_due_recovered; }
            set { _cmp_due_recovered = value; }
        }


        private string _disallowance_amt = "0";
        public string DISALLOWANCE_AMT
        {
            get { return _disallowance_amt; }
            set { _disallowance_amt = value; }
        }


        private string _tds_amt = "0";
        public string TDS_AMT
        {
            get { return _tds_amt; }
            set { _tds_amt = value; }
        }



        private int _referal_source_id;
        public int REFERAL_SOURCE_ID
        {
            set { _referal_source_id = value; }
            get { return _referal_source_id; }
        }
        private int _referal_source_rev_no;
        public int REFERAL_SOURCE_REV_NO
        {
            set { _referal_source_rev_no = value; }
            get { return _referal_source_rev_no; }
        }
        private int _bill_type_id;
        public int BILL_TYPE_ID
        {
            set { _bill_type_id = value; }
            get { return _bill_type_id; }
        }
        private int _bill_type_rev_no;
        public int BILL_TYPE_REV_NO
        {
            set { _bill_type_rev_no = value; }
            get { return _bill_type_rev_no; }
        }
        private int _credit_type_id;
        public int CREDIT_TYPE_ID
        {
            set { _credit_type_id = value; }
            get { return _credit_type_id; }
        }
        private int _credit_type_rev_no;
        public int CREDIT_TYPE_REV_NO
        {
            set { _credit_type_rev_no = value; }
            get { return _credit_type_rev_no; }
        }
        private int _referal_type_id;
        public int REFERAL_TYPE_ID
        {
            set { _referal_type_id = value; }
            get { return _referal_type_id; }
        }
        private int _referal_type_rev_no;
        public int REFERAL_TYPE_REV_NO
        {
            set { _referal_type_rev_no = value; }
            get { return _referal_type_rev_no; }
        }
        private int _referal_doctor_id;
        public int REFERAL_DOCTOR_ID
        {
            set { _referal_doctor_id = value; }
            get { return _referal_doctor_id; }
        }
        private int _referal_doctor_rev_no;
        public int REFERAL_DOCTOR_REV_NO
        {
            set { _referal_doctor_rev_no = value; }
            get { return _referal_doctor_rev_no; }
        }
        //private string _bill_dt;
        //public string BILL_DT
        //{
        //    set { _bill_dt = value; }
        //    get { return _bill_dt; }
        //}
        private int _employee_id;
        public int EMPLOYEE_ID
        {
            set { _employee_id = value; }
            get { return _employee_id; }
        }
        private int _employee_rev_no;
        public int EMPLOYEE_REV_NO
        {
            set { _employee_rev_no = value; }
            get { return _employee_rev_no; }
        }
        private int _concession_on_id;
        public int CONCESSION_ON_ID
        {
            set { _concession_on_id = value; }
            get { return _concession_on_id; }
        }
        private int _concession_on_rev_no;
        public int CONCESSION_ON_REV_NO
        {
            set { _concession_on_rev_no = value; }
            get { return _concession_on_rev_no; }
        }
        private int _concession_mode_id;
        public int CONCESSION_MODE_ID
        {
            set { _concession_mode_id = value; }
            get { return _concession_mode_id; }
        }
        private int _concession_mode_rev_no;
        public int CONCESSION_MODE_REV_NO
        {
            set { _concession_mode_rev_no = value; }
            get { return _concession_mode_rev_no; }
        }
        private int _concession_type_id;
        public int CONCESSION_TYPE_ID
        {
            set { _concession_type_id = value; }
            get { return _concession_type_id; }
        }
        private int _concession_type_rev_no;
        public int CONCESSION_TYPE_REV_NO
        {
            set { _concession_type_rev_no = value; }
            get { return _concession_type_rev_no; }
        }
        private int _concession_to_id;
        public int CONCESSION_TO_ID
        {
            set { _concession_to_id = value; }
            get { return _concession_to_id; }
        }
        private int _concession_to_rev_no;
        public int CONCESSION_TO_REV_NO
        {
            set { _concession_to_rev_no = value; }
            get { return _concession_to_rev_no; }
        }

        private string _current_record;
        public string CURRENT_RECORD
        {
            set { _current_record = value; }
            get { return _current_record; }
        }

        private int _grp_rev_no;
        public int GRP_REV_NO
        {
            set { _grp_rev_no = value; }
            get { return _grp_rev_no; }
        }

        private int _org_rev_no;
        public int ORG_REV_NO
        {
            set { _org_rev_no = value; }
            get { return _org_rev_no; }
        }
        private int _loc_rev_no;
        public int LOC_REV_NO
        {
            set { _loc_rev_no = value; }
            get { return _loc_rev_no; }
        }

        //private string _bill_no;
        //public string BILL_NO
        //{
        //    set { _bill_no = value; }
        //    get { return _bill_no; }
        //}
        private int _billconcession_auth_id;
        public int BILLCONCESSION_AUTH_ID
        {
            set { _billconcession_auth_id = value; }
            get { return _billconcession_auth_id; }
        }
        private int _concession_auth_rev_no;
        public int CONCESSION_AUTH_REV_NO
        {
            set { _concession_auth_rev_no = value; }
            get { return _concession_auth_rev_no; }
        }
        private int _due_auth_id;
        public int DUE_AUTH_ID
        {
            set { _due_auth_id = value; }
            get { return _due_auth_id; }
        }
        private int _due_auth_rev_no;
        public int DUE_AUTH_REV_NO
        {
            set { _due_auth_rev_no = value; }
            get { return _due_auth_rev_no; }
        }
        private int _referal_ref_id;
        public int REFERAL_REF_ID
        {
            set { _referal_ref_id = value; }
            get { return _referal_ref_id; }
        }
        private int _referal_ref_rev_no;
        public int REFERAL_REF_REV_NO
        {
            set { _referal_ref_rev_no = value; }
            get { return _referal_ref_rev_no; }
        }

        private string _referal_name;
        public string REFERAL_NAME
        {
            set { _referal_name = value; }
            get { return _referal_name; }
        }
        private string _admn_no;
        public string ADMN_NO
        {
            set { _admn_no = value; }
            get { return _admn_no; }
        }
        private string _company_due;
        public string COMPANY_DUE
        {
            set { _company_due = value; }
            get { return _company_due; }
        }
        private int _company_due_auth_id;
        public int COMPANY_DUE_AUTH_ID
        {
            set { _company_due_auth_id = value; }
            get { return _company_due_auth_id; }
        }
        private string _company_concession_amount;
        public string COMPANY_CONCESSION_AMOUNT
        {
            set { _company_concession_amount = value; }
            get { return _company_concession_amount; }
        }

        private int _due_verify_id;
        public int DUE_VERIFY_ID
        {
            set { _due_verify_id = value; }
            get { return _due_verify_id; }
        }
        private string _due_verify_dt;
        public string DUE_VERIFY_DT
        {
            set { _due_verify_dt = value; }
            get { return _due_verify_dt; }
        }
        private int _due_approve_id;
        public int DUE_APPROVE_ID
        {
            set { _due_approve_id = value; }
            get { return _due_approve_id; }
        }
        private string _due_approve_dt;
        public string DUE_APPROVE_DT
        {
            set { _due_approve_dt = value; }
            get { return _due_approve_dt; }
        }
        private string _due_auth_dt;
        public string DUE_AUTH_DT
        {
            set { _due_auth_dt = value; }
            get { return _due_auth_dt; }
        }
        private int _concession_verify_id;
        public int CONCESSION_VERIFY_ID
        {
            set { _concession_verify_id = value; }
            get { return _concession_verify_id; }
        }
        private string _concession_verify_dt;
        public string CONCESSION_VERIFY_DT
        {
            set { _concession_verify_dt = value; }
            get { return _concession_verify_dt; }
        }
        private int _concession_approve_id;
        public int CONCESSION_APPROVE_ID
        {
            set { _concession_approve_id = value; }
            get { return _concession_approve_id; }
        }
        private string _concession_approve_dt;
        public string CONCESSION_APPROVE_DT
        {
            set { _concession_approve_dt = value; }
            get { return _concession_approve_dt; }
        }
        private int _concession_auth_id;
        public int CONCESSION_AUTH_ID
        {
            set { _concession_auth_id = value; }
            get { return _concession_auth_id; }
        }
        private string _concession_auth_dt;
        public string CONCESSION_AUTH_DT
        {
            set { _concession_auth_dt = value; }
            get { return _concession_auth_dt; }
        }
        private int _print_count;
        public int PRINT_COUNT
        {
            set { _print_count = value; }
            get { return _print_count; }
        }
        private string _bill_amount;
        public string BILL_AMOUNT
        {
            set { _bill_amount = value; }
            get { return _bill_amount; }
        }

        private string _paid_amount;
        public string PAID_AMOUNT
        {
            set { _paid_amount = value; }
            get { return _paid_amount; }
        }
        private string _advance_amount;
        public string ADVANCE_AMOUNT
        {
            set { _advance_amount = value; }
            get { return _advance_amount; }
        }
        private string _due_amount;
        public string DUE_AMOUNT
        {
            set { _due_amount = value; }
            get { return _due_amount; }
        }
        private string _due_recovered;
        public string DUE_RECOVERED
        {
            set { _due_recovered = value; }
            get { return _due_recovered; }
        }
        private string _outstanding_due;
        public string OUTSTANDING_DUE
        {
            set { _outstanding_due = value; }
            get { return _outstanding_due; }
        }

        private string _total_discount;
        public string TOTAL_DISCOUNT
        {
            set { _total_discount = value; }
            get { return _total_discount; }
        }
        private string _cancel_amount;
        public string CANCEL_AMOUNT
        {
            set { _cancel_amount = value; }
            get { return _cancel_amount; }
        }
        private string _refund_amount;
        public string REFUND_AMOUNT
        {
            set { _refund_amount = value; }
            get { return _refund_amount; }
        }
        private string _excess_amount;
        public string EXCESS_AMOUNT
        {
            set { _excess_amount = value; }
            get { return _excess_amount; }
        }
        private string _ca_bill_amt = "0";
        public string CA_BILL_AMT
        {
            set { _ca_bill_amt = value; }
            get { return _ca_bill_amt; }
        }
        private string _cmp_cncsn_amt = "0";
        public string CMP_CNCSN_AMT
        {
            set { _cmp_cncsn_amt = value; }
            get { return _cmp_cncsn_amt; }
        }
        private string _cmp_cncsn_pct = "0";
        public string CMP_CNCSN_PCT
        {
            set { _cmp_cncsn_pct = value; }
            get { return _cmp_cncsn_pct; }
        }
        private string _cmp_due_amt = "0";
        public string CMP_DUE_AMT
        {
            set { _cmp_due_amt = value; }
            get { return _cmp_due_amt; }
        }
        private string _cmp_gross_amt = "0";
        public string CMP_GROSS_AMT
        {
            set { _cmp_gross_amt = value; }
            get { return _cmp_gross_amt; }
        }
        private string _cmp_net_amt = "0";
        public string CMP_NET_AMT
        {
            set { _cmp_net_amt = value; }
            get { return _cmp_net_amt; }
        }
        private string _cmp_paid_amt = "0";
        public string CMP_PAID_AMT
        {
            set { _cmp_paid_amt = value; }
            get { return _cmp_paid_amt; }
        }
        private string _cmp_tax_amt = "0";
        public string CMP_TAX_AMT
        {
            set { _cmp_tax_amt = value; }
            get { return _cmp_tax_amt; }
        }
        private string _cmp_tax_pct = "0";
        public string CMP_TAX_PCT
        {
            set { _cmp_tax_pct = value; }
            get { return _cmp_tax_pct; }
        }
        private string _cr_bill_amt = "0";
        public string CR_BILL_AMT
        {
            set { _cr_bill_amt = value; }
            get { return _cr_bill_amt; }
        }
        private string _cr_cmp_amt = "0";
        public string CR_CMP_AMT
        {
            set { _cr_cmp_amt = value; }
            get { return _cr_cmp_amt; }
        }
        private string _cr_cmp_pct = "0";
        public string CR_CMP_PCT
        {
            set { _cr_cmp_pct = value; }
            get { return _cr_cmp_pct; }
        }
        private string _cr_pat_amt = "0";
        public string CR_PAT_AMT
        {
            set { _cr_pat_amt = value; }
            get { return _cr_pat_amt; }
        }
        private string _cr_pat_pct = "0";
        public string CR_PAT_PCT
        {
            set { _cr_pat_pct = value; }
            get { return _cr_pat_pct; }
        }
        private string _exc_pha_amt = "0";
        public string EXC_PHA_AMT
        {
            set { _exc_pha_amt = value; }
            get { return _exc_pha_amt; }
        }
        private string _gross_pha_amt = "0";
        public string GROSS_PHA_AMT
        {
            set { _gross_pha_amt = value; }
            get { return _gross_pha_amt; }
        }
        private string _inc_pha_amt = "0";
        public string INC_PHA_AMT
        {
            set { _inc_pha_amt = value; }
            get { return _inc_pha_amt; }
        }
        private string _is_dschrg_without_bill;
        public string IS_DSCHRG_WITHOUT_BILL
        {
            set { _is_dschrg_without_bill = value; }
            get { return _is_dschrg_without_bill; }
        }
        private string _pat_cncsn_amt = "0";
        public string PAT_CNCSN_AMT
        {
            set { _pat_cncsn_amt = value; }
            get { return _pat_cncsn_amt; }
        }
        private string _pat_cncsn_pct = "0";
        public string PAT_CNCSN_PCT
        {
            set { _pat_cncsn_pct = value; }
            get { return _pat_cncsn_pct; }
        }
        private string _pat_due_amt = "0";
        public string PAT_DUE_AMT
        {
            set { _pat_due_amt = value; }
            get { return _pat_due_amt; }
        }
        private string _pat_gross_amt = "0";
        public string PAT_GROSS_AMT
        {
            set { _pat_gross_amt = value; }
            get { return _pat_gross_amt; }
        }
        private string _pat_net_amt = "0";
        public string PAT_NET_AMT
        {
            set { _pat_net_amt = value; }
            get { return _pat_net_amt; }
        }
        private string _pat_paid_amt = "0";
        public string PAT_PAID_AMT
        {
            set { _pat_paid_amt = value; }
            get { return _pat_paid_amt; }
        }
        private string _pat_tax_amt = "0";
        public string PAT_TAX_AMT
        {
            set { _pat_tax_amt = value; }
            get { return _pat_tax_amt; }
        }
        private string _pat_tax_pct = "0";
        public string PAT_TAX_PCT
        {
            set { _pat_tax_pct = value; }
            get { return _pat_tax_pct; }
        }
        private string _performed_procs;
        public string PERFORMED_PROCS
        {
            set { _performed_procs = value; }
            get { return _performed_procs; }
        }
        private string _pkg_bill_amt = "0";
        public string PKG_BILL_AMT
        {
            set { _pkg_bill_amt = value; }
            get { return _pkg_bill_amt; }
        }
        private string _pkg_cncsn_amt = "0";
        public string PKG_CNCSN_AMT
        {
            set { _pkg_cncsn_amt = value; }
            get { return _pkg_cncsn_amt; }
        }
        private string _pkg_due_amt = "0";
        public string PKG_DUE_AMT
        {
            set { _pkg_due_amt = value; }
            get { return _pkg_due_amt; }
        }
        private string _pkg_exc_amt = "0";
        public string PKG_EXC_AMT
        {
            set { _pkg_exc_amt = value; }
            get { return _pkg_exc_amt; }
        }
        private string _pkg_gross_amt = "0";
        public string PKG_GROSS_AMT
        {
            set { _pkg_gross_amt = value; }
            get { return _pkg_gross_amt; }
        }
        private string _pkg_inc_amt = "0";
        public string PKG_INC_AMT
        {
            set { _pkg_inc_amt = value; }
            get { return _pkg_inc_amt; }
        }
        private string _pkg_net_amt = "0";
        public string PKG_NET_AMT
        {
            set { _pkg_net_amt = value; }
            get { return _pkg_net_amt; }
        }
        private string _pkg_paid_amt = "0";
        public string PKG_PAID_AMT
        {
            set { _pkg_paid_amt = value; }
            get { return _pkg_paid_amt; }
        }
        private string _pkg_postdsc_amt = "0";
        public string PKG_POSTDSC_AMT
        {
            set { _pkg_postdsc_amt = value; }
            get { return _pkg_postdsc_amt; }
        }
        private string _remarks;
        public string REMARKS
        {
            set { _remarks = value; }
            get { return _remarks; }
        }
        private string _is_shink;
        public string IS_SHINK
        {
            set { _is_shink = value; }
            get { return _is_shink; }
        }
        private string _pkg_total_received_amt = "0";
        public string PKG_TOTAL_RECEIVED_AMT
        {
            set { _pkg_total_received_amt = value; }
            get { return _pkg_total_received_amt; }
        }
        private int _ref_id;
        public int REF_ID
        {
            set { _ref_id = value; }
            get { return _ref_id; }
        }

       


        

        private int _cmp_id = 0;
        public int CMP_ID
        {
            get { return _cmp_id; }
            set { _cmp_id = value; }
        }

        private string _DISC_REQ_REASON;
        public string DISC_REQ_REASON
        {
            get { return _DISC_REQ_REASON; }
            set { _DISC_REQ_REASON = value; }
        }
        private string package_ids;

        public string PACKAGE_IDS
        {
            get { return package_ids; }
            set { package_ids = value; }
        }

        private string pharmacy_flag;

        public string PHARMACY_FLAG
        {
            get { return pharmacy_flag; }
            set { pharmacy_flag = value; }
        }

        private int _page_no = 0;

        public int PAGE_NO
        {
            get { return _page_no; }
            set { _page_no = value; }
        }
        private string _hospital_conc_amt = "0";

        public string HOSPITAL_CONC_AMT
        {
            get { return _hospital_conc_amt; }
            set { _hospital_conc_amt = value; }
        }
        private string cmp_excess_amt = "0";

        public string CMP_EXCESS_AMT
        {
            get { return cmp_excess_amt; }
            set { cmp_excess_amt = value; }
        }

        private string _xml;

        public string Xml
        {
            get { return _xml; }
            set { _xml = value; }
        }




    }
}
