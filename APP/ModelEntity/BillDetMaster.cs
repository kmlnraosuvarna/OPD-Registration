using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class BillDetMaster 
    {
        private string service_con_amount;

        public string SERVICE_CON_AMOUNT
        {
            get { return service_con_amount; }
            set { service_con_amount = value; }
        }
        private float total_discnt;
        public float TOTAL_DISCNT
        {
            get { return total_discnt; }
            set { total_discnt = value; }
        }
        private string _LOCATION_ID;

        public string LOCATION_ID
        {
            get { return _LOCATION_ID; }
            set { _LOCATION_ID = value; }
        }
        private float gross_amt;

        public float GROSS_AMT
        {
            get { return gross_amt; }
            set { gross_amt = value; }
        }
        #region FO_BILL_DET MEMBERS

        private int bill_det_id;
        private int bill_det_rev_no;
        private string umr_no;
        private int bill_id = 0;
        private string consultation_type_id;
        private string consultation_type_name = string.Empty;
        private int consultation_type_rev_no;
        private string bill_quantity;
        private string _rate;
        private string bill_det_amount;
        private string bill_det_concession;
        private string bill_det_concession_amount;
        private string bill_det_net_amount;
        private int department_id;
        private int department_rev_no;
        private string bill_det_doctor_id;
        private string no_of_consults_done;
        private string company_rate = "0";
        private string company_det_amount;
        private string doctor_name;
        private string doctor_cd;
        private int doctor_rev_no;
        private int treated_by_id;
        private int treated_by_rev_no;
        private string bill_det_concession_mode_id;
        private int concession_mode_rev_no;
        private int unit_id;
        private int unit_rev_no;
        private string service_id;
        private string service_name;
        private string service_code;
        private string service_group_name;
        private string service_group_id;
        private int role_id;
        private int role_rev_no;
        private string is_centralized;
        private string name;
        private string department_name;
        private string service_class_id;
        private int company_service_id;
        private string service_type_id;
        private string class_service_id;
        private string service_status_id;
        private string general_service_group_id;
        private string is_outside_service;
        private int company_tariff_id;
        private float post_discount;
        private string sno;
        private string service_type_name;

        #endregion

        #region FO_BILL_DET_PROPERTIES

        public string DEPARTMENT_NAME
        {
            get { return department_name; }
            set { department_name = value; }
        }

        public string SERVICE_CODE
        {
            get { return service_code; }
            set { service_code = value; }
        }
        public string NO_OF_CONSULTS_DONE
        {
            get { return no_of_consults_done; }
            set { no_of_consults_done = value; }
        }
        public string SERVICE_NAME
        {
            get { return service_name; }
            set { service_name = value; }
        }

        public string SERVICE_GROUP_NAME
        {
            get { return service_group_name; }
            set { service_group_name = value; }
        }

        public string SERVICE_GROUP_ID
        {
            get { return service_group_id; }
            set { service_group_id = value; }
        }

        public int BILL_DET_ID
        {
            get { return bill_det_id; }
            set { bill_det_id = value; }
        }

        public int BILL_DET_REV_NO
        {
            get { return bill_det_rev_no; }
            set { bill_det_rev_no = value; }
        }

        public string UMR_NO
        {
            get { return umr_no; }
            set { umr_no = value; }
        }

        private int _PATIENT_ID;
        public int PATIENT_ID
        {
            get { return _PATIENT_ID; }
            set { _PATIENT_ID = value; }
        }

        public int BILL_ID
        {
            get { return bill_id; }
            set { bill_id = value; }
        }

        private int ref_id;
        public int REF_ID
        {
            get { return ref_id; }
            set { ref_id = value; }
        }

        public string CONSULTATION_TYPE_ID
        {
            get { return consultation_type_id; }
            set { consultation_type_id = value; }
        }

        public string CONSULTATION_TYPE_NAME
        {
            get { return consultation_type_name; }
            set { consultation_type_name = value; }
        }

        public int CONSULTATION_TYPE_REV_NO
        {
            get { return consultation_type_rev_no; }
            set { consultation_type_rev_no = value; }
        }

        public string BILL_QUANTITY
        {
            get { return bill_quantity; }
            set { bill_quantity = value; }
        }

        public string RATE
        {
            get { return _rate; }
            set { _rate = value; }
        }

        public string BILL_DET_AMOUNT
        {
            get { return bill_det_amount; }
            set { bill_det_amount = value; }
        }
        public string COMPANY_DET_AMOUNT
        {
            get { return company_det_amount; }
            set { company_det_amount = value; }
        }
        public string COMPANY_RATE
        {
            get { return company_rate; }
            set { company_rate = value; }
        }
        public string BILL_DET_CONCESSION
        {
            get { return bill_det_concession; }
            set { bill_det_concession = value; }
        }

        public string BILL_DET_CONCESSION_AMOUNT
        {
            get { return bill_det_concession_amount; }
            set { bill_det_concession_amount = value; }
        }

        public string BILL_DET_NET_AMOUNT
        {
            get { return bill_det_net_amount; }
            set { bill_det_net_amount = value; }
        }

        public int DEPARTMENT_ID
        {
            get { return department_id; }
            set { department_id = value; }
        }

        public int DEPARTMENT_REV_NO
        {
            get { return department_rev_no; }
            set { department_rev_no = value; }
        }

        public string BILL_DET_DOCTOR_ID
        {
            get { return bill_det_doctor_id; }
            set { bill_det_doctor_id = value; }
        }

        public string DOCTOR_CODE
        {
            get { return doctor_cd; }
            set { doctor_cd = value; }
        }

        public string DOCTOR_NAME
        {
            get { return doctor_name; }
            set { doctor_name = value; }
        }

        public int DOCTOR_REV_NO
        {
            get { return doctor_rev_no; }
            set { doctor_rev_no = value; }
        }

        public int TREATED_BY_ID
        {
            get { return treated_by_id; }
            set { treated_by_id = value; }
        }

        public int TREATED_BY_REV_NO
        {
            get { return treated_by_rev_no; }
            set { treated_by_rev_no = value; }
        }

        public string BILL_DET_CONSESSION_MODE_ID
        {
            get { return bill_det_concession_mode_id; }
            set { bill_det_concession_mode_id = value; }
        }

        public int CONSESSION_MODE_REV_NO
        {
            get { return concession_mode_rev_no; }
            set { concession_mode_rev_no = value; }
        }

        public int UNIT_ID
        {
            get { return unit_id; }
            set { unit_id = value; }
        }

        public int UNIT_REV_NO
        {
            get { return unit_rev_no; }
            set { unit_rev_no = value; }
        }

        public string SERVICE_ID
        {
            get { return service_id; }
            set { service_id = value; }
        }

        public int ROLE_ID
        {
            get { return role_id; }
            set { role_id = value; }
        }

        public int ROLE_REV_NO
        {
            get { return role_rev_no; }
            set { role_rev_no = value; }
        }

        public string IS_CENTRALIZED
        {
            get { return is_centralized; }
            set { is_centralized = value; }
        }

        public string NAME
        {
            get { return name; }
            set { name = value; }
        }

        public string SNO
        {
            get { return sno; }
            set { sno = value; }
        }

        public float POST_DISCOUNT
        {
            get { return post_discount; }
            set { post_discount = value; }
        }

        public int COMPANY_TARIFF_ID
        {
            get { return company_tariff_id; }
            set { company_tariff_id = value; }
        }

        public string IS_OUTSIDE_SERVICE
        {
            get { return is_outside_service; }
            set { is_outside_service = value; }
        }

        public string GENERAL_SERVICE_GROUP_ID
        {
            get { return general_service_group_id; }
            set { general_service_group_id = value; }
        }

        public string SERVICE_STATUS_ID
        {
            get { return service_status_id; }
            set { service_status_id = value; }
        }

        public string CLASS_SERVICE_ID
        {
            get { return class_service_id; }
            set { class_service_id = value; }
        }

        public string SERVICE_TYPE_ID
        {
            get { return service_type_id; }
            set { service_type_id = value; }
        }
        public int COMPANY_SERVICE_ID
        {
            get { return company_service_id; }
            set { company_service_id = value; }
        }

        private string company_service_name;
        public string COMPANY_SERVICE_NAME
        {
            get { return company_service_name; }
            set { company_service_name = value; }
        }

        public string SERVICE_CLASS_ID
        {
            get { return service_class_id; }
            set { service_class_id = value; }
        }

        public string SERVICE_TYPE_NAME
        {
            get { return service_type_name; }
            set { service_type_name = value; }
        }

        #endregion

        #region FO_BILL MEMBERS

        private string bill_rev_no = "0";
        private int referal_src_id;
        private int bill_type_id;
        private int credit_type_id;
        private int referal_type_id;
        private int referal_doctor_id;
        private string referal_doctor_name;
        private string bill_dt;
        private int employee_id;
        private int concession_on_id;
        private int concession_type_id;
        private int concession_to_id;
        private int bill_concession_mode_id;
        private float concession_amount;
        private float cancel_amount;
        private string paid_amount;
        private string due_amount;
        // private float net_amount;
        private string bill_no;
        private int concession_auth_id;
        private int due_auth_id;
        private float bill_amount;
        private float excess_amount;
        private float bill_concession;
        private string concession_amount_name;
        private string due_amount_name;
        private int bill_doctor_id;
        private string referal_name;
        private string admn_no;
        private float company_due_amount;
        private float company_amount;
        private float company_con_amount;
        private int company_due_auth_id;
        #endregion

        #region FO_BILL PROPERTIES

        public int BILL_DOCTOR_ID
        {
            get { return bill_doctor_id; }
            set { bill_doctor_id = value; }
        }

        public string REFERAL_DOCTOR_NAME
        {
            get { return referal_doctor_name; }
            set { referal_doctor_name = value; }
        }
        //public float NET_AMOUNT
        //{
        //    get { return net_amount; }
        //    set { net_amount = value; }
        //}
        public string PAID_AMOUNT
        {
            get { return paid_amount; }
            set { paid_amount = value; }
        }
        public string DUE_AMOUNT
        {
            get { return due_amount; }
            set { due_amount = value; }
        }
        public float EXCESS_AMOUNT
        {
            get { return excess_amount; }
            set { excess_amount = value; }
        }
        public float CANCEL_AMOUNT
        {
            get { return cancel_amount; }
            set { cancel_amount = value; }
        }
        //SENDING MULTIPLE BILL_REV_NO'S.
        public string BILL_REV_NO
        {
            get { return bill_rev_no; }
            set { bill_rev_no = value; }
        }
        public int REFERAL_SRC_ID
        {
            get { return referal_src_id; }
            set { referal_src_id = value; }
        }
        public int BILL_TYPE_ID
        {
            get { return bill_type_id; }
            set { bill_type_id = value; }
        }
        public int CREDIT_TYPE_ID
        {
            get { return credit_type_id; }
            set { credit_type_id = value; }
        }
        public int REFERAL_TYPE_ID
        {
            get { return referal_type_id; }
            set { referal_type_id = value; }
        }
        public int REFERAL_DOCTOR_ID
        {
            get { return referal_doctor_id; }
            set { referal_doctor_id = value; }
        }
        public string BILL_DT
        {
            get { return bill_dt; }
            set { bill_dt = value; }
        }
        public int EMPLOYEE_ID
        {
            get { return employee_id; }
            set { employee_id = value; }
        }
        public int CONCESSION_ON_ID
        {
            get { return concession_on_id; }
            set { concession_on_id = value; }
        }
        public int CONCESSION_TYPE_ID
        {
            get { return concession_type_id; }
            set { concession_type_id = value; }
        }
        public int CONCESSION_TO_ID
        {
            get { return concession_to_id; }
            set { concession_to_id = value; }
        }
        public int BILL_CONCESSION_MODE_ID
        {
            get { return bill_concession_mode_id; }
            set { bill_concession_mode_id = value; }
        }
        public float CONCESSION_AMOUNT
        {
            get { return concession_amount; }
            set { concession_amount = value; }
        }


        private string _bill_cncl_no;
        public string BILL_CNCL_NO
        {
            set { _bill_cncl_no = value; }
            get { return _bill_cncl_no; }
        }
        private string _bill_cncl_dt;
        public string BILL_CNCL_DT
        {
            set { _bill_cncl_dt = value; }
            get { return _bill_cncl_dt; }
        }
        public string BILL_NO
        {
            get { return bill_no; }
            set { bill_no = value; }
        }
        private string corp_bill_no;
        public string CORP_BILL_NO
        {
            get { return corp_bill_no; }
            set { corp_bill_no = value; }
        }
        private string company_name;
        public string COMPANY_NAME
        {
            get { return company_name; }
            set { company_name = value; }
        }
        public int DUE_AUTH_ID
        {
            get { return due_auth_id; }
            set { due_auth_id = value; }
        }
        public int CONCESSION_AUTH_ID
        {
            get { return concession_auth_id; }
            set { concession_auth_id = value; }
        }
        public float BILL_AMOUNT
        {
            get { return bill_amount; }
            set { bill_amount = value; }
        }
        public float BILL_CONCESSION
        {
            get { return bill_concession; }
            set { bill_concession = value; }
        }
        public string CONCESSION_AUTH_NAME
        {
            get { return concession_amount_name; }
            set { concession_amount_name = value; }
        }
        public string DUE_AUTH_NAME
        {
            get { return due_amount_name; }
            set { due_amount_name = value; }
        }
        public string REFERAL_NAME
        {
            get { return referal_name; }
            set { referal_name = value; }
        }
        public string ADMN_NO
        {
            get { return admn_no; }
            set { admn_no = value; }
        }
        public float COMPANY_AMOUNT
        {
            get { return company_amount; }
            set { company_amount = value; }
        }
        public float COMPANY_DUE_AMOUNT
        {
            get { return company_due_amount; }
            set { company_due_amount = value; }
        }
        public float COMPANY_CONCESSION_AMOUNT
        {
            get { return company_con_amount; }
            set { company_con_amount = value; }
        }
        public int COMPANY_DUE_AUTH_ID
        {
            get { return company_due_auth_id; }
            set { company_due_auth_id = value; }
        }
        #endregion

        #region OP REPORT MEMBERS

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
        private string bill_type;

        public string BILL_TYPE
        {
            get { return bill_type; }
            set { bill_type = value; }
        }

        private string user_id;

        public string USER_ID
        {
            get { return user_id; }
            set { user_id = value; }
        }
        private string _APPROVE_BY_AUTH;

        public string APPROVE_BY_AUTH
        {
            get { return _APPROVE_BY_AUTH; }
            set { _APPROVE_BY_AUTH = value; }
        }

        //private string org_id;

        //public string ORG_ID
        //{
        //    get { return org_id; }
        //    set { org_id = value; }
        //}

        private string payment_type;
        public string PAYMENT_TYPE
        {
            get { return payment_type; }
            set { payment_type = value; }
        }
        private string order_by;
        public string ORDER_BY
        {
            get { return order_by; }
            set { order_by = value; }
        }

        #endregion

        #region POST DISCOUNT

        private string _SERVICE_CD;

        public string SERVICE_CD
        {
            get { return _SERVICE_CD; }
            set { _SERVICE_CD = value; }
        }
        private string _CHARGE;

        public string CHARGE
        {
            get { return _CHARGE; }
            set { _CHARGE = value; }
        }


        private string _DEPT_ID;

        public string DEPT_ID
        {
            get { return _DEPT_ID; }
            set { _DEPT_ID = value; }
        }
        private string _DEPT_NAME;

        public string DEPT_NAME
        {
            get { return _DEPT_NAME; }
            set { _DEPT_NAME = value; }
        }
        private string _APPROVED_BY;

        public string APPROVED_BY
        {
            get { return _APPROVED_BY; }
            set { _APPROVED_BY = value; }
        }


        private string _AUTHORIZATION_NAME;

        public string AUTHORIZATION_NAME
        {
            get { return _AUTHORIZATION_NAME; }
            set { _AUTHORIZATION_NAME = value; }
        }
        //private string _DOCTOR_ID;

        //public string DOCTOR_ID
        //{
        //    get { return _DOCTOR_ID; }
        //    set { _DOCTOR_ID = value; }
        //}

        #endregion

        private string ref_amount;
        public string REF_AMOUNT
        {
            get { return ref_amount; }
            set { ref_amount = value; }
        }

        private string imr_ref_id;
        public string IMR_REF_ID
        {
            get { return imr_ref_id; }
            set { imr_ref_id = value; }
        }

        private string display_name = string.Empty;

        public string DISPLAY_NAME
        {
            get { return display_name; }
            set { display_name = value; }
        }

        private int first;
        public int FIRST
        {
            get { return first; }
            set { first = value; }
        }
        private int previous;
        public int PREVIOUS
        {
            get { return previous; }
            set { previous = value; }
        }
        private int next;
        public int NEXT
        {
            get { return next; }
            set { next = value; }
        }
        private int last;
        public int LAST
        {
            get { return last; }
            set { last = value; }
        }

        //private string record_status;
        //public string RECORD_STATUS
        //{
        //    get { return record_status; }
        //    set { record_status = value; }
        //}
        private string _register_amt;
        public string REGISTER_AMT
        {
            get { return _register_amt; }
            set { _register_amt = value; }
        }
        private string _cc_card_no;
        public string CC_CARD_NO
        {
            get { return _cc_card_no; }
            set { _cc_card_no = value; }
        }

        private string _cc_card_holder_name;
        public string CC_CARD_HOLDER_NAME
        {
            get { return _cc_card_holder_name; }
            set { _cc_card_holder_name = value; }
        }

        private string _cc_type;
        public string CC_TYPE
        {
            get { return _cc_type; }
            set { _cc_type = value; }
        }

        private string _cc_issue_bank;
        public string CC_ISSUE_BANK
        {
            get { return _cc_issue_bank; }
            set { _cc_issue_bank = value; }
        }

        private string _cc_valid_from_dt;
        public string CC_VALID_FROM_DT
        {
            get { return _cc_valid_from_dt; }
            set { _cc_valid_from_dt = value; }
        }

        private string _cc_valid_to_dt;
        public string CC_VALID_TO_DT
        {
            get { return _cc_valid_to_dt; }
            set { _cc_valid_to_dt = value; }
        }



        private string _dc_card_no;
        public string DC_CARD_NO
        {
            get { return _dc_card_no; }
            set { _dc_card_no = value; }
        }

        private string _dc_card_holder_name;
        public string DC_CARD_HOLDER_NAME
        {
            get { return _dc_card_holder_name; }
            set { _dc_card_holder_name = value; }
        }

        private string _dc_type;
        public string DC_TYPE
        {
            get { return _dc_type; }
            set { _dc_type = value; }
        }

        private string _dc_issue_bank;
        public string DC_ISSUE_BANK
        {
            get { return _dc_issue_bank; }
            set { _dc_issue_bank = value; }
        }

        private string _dc_valid_from_dt;
        public string DC_VALID_FROM_DT
        {
            get { return _dc_valid_from_dt; }
            set { _dc_valid_from_dt = value; }
        }

        private string _dc_valid_to_dt;
        public string DC_VALID_TO_DT
        {
            get { return _dc_valid_to_dt; }
            set { _dc_valid_to_dt = value; }
        }
        private string _chq_no;

        public string CHQ_NO
        {
            get { return _chq_no; }
            set { _chq_no = value; }
        }
        private string _chq_issue_name;

        public string CHQ_ISSUE_NAME
        {
            get { return _chq_issue_name; }
            set { _chq_issue_name = value; }
        }
        private string _chq_branch_name;

        public string CHQ_BRANCH_NAME
        {
            get { return _chq_branch_name; }
            set { _chq_branch_name = value; }
        }
        private string chq_issue_bank_name;

        public string CHQ_ISSUE_BANK_NAME
        {
            get { return chq_issue_bank_name; }
            set { chq_issue_bank_name = value; }
        }
        private string _chq_valid_from_dt;
        public string CHQ_VALID_FROM_DT
        {
            get { return _chq_valid_from_dt; }
            set { _chq_valid_from_dt = value; }
        }

        private string _chq_valid_to_dt;
        public string CHQ_VALID_TO_DT
        {
            get { return _chq_valid_to_dt; }
            set { _chq_valid_to_dt = value; }
        }

        private string _discount_no;
        public string DISCOUNT_NO
        {
            get { return _discount_no; }
            set { _discount_no = value; }
        }
        private string _discnt_no;
        public string DISCNT_NO
        {
            get { return _discnt_no; }
            set { _discnt_no = value; }
        }
        private string _discount_dt;
        public string DISCOUNT_DT
        {
            get { return _discount_dt; }
            set { _discount_dt = value; }
        }

        private string _advance_amnt;
        public string ADVANCE_AMNT
        {
            get { return _advance_amnt; }
            set { _advance_amnt = value; }
        }

        private string _service_dscnt;
        public string SERVICE_DSCNT
        {
            get { return _service_dscnt; }
            set { _service_dscnt = value; }
        }
        private string _investigation_dscnt;
        public string INVESTIGATION_DSCNT
        {
            get { return _investigation_dscnt; }
            set { _investigation_dscnt = value; }
        }
        private string _miscellaneous_dscnt;
        public string MISCELLANEOUS_DSCNT
        {
            get { return _miscellaneous_dscnt; }
            set { _miscellaneous_dscnt = value; }
        }
        private string _procedure_dscnt;
        public string PROCEDURE_DSCNT
        {
            get { return _procedure_dscnt; }
            set { _procedure_dscnt = value; }
        }

        private string _ward_dscnt;
        public string WARD_DSCNT
        {
            get { return _ward_dscnt; }
            set { _ward_dscnt = value; }
        }

        private string _pharmacy_dscnt;
        public string PHARMACY_DSCNT
        {
            get { return _pharmacy_dscnt; }
            set { _pharmacy_dscnt = value; }
        }

        private string _created_person;
        public string CREATED_PERSON
        {
            get { return _created_person; }
            set { _created_person = value; }
        }

        private string _reg_no;
        public string REG_NO
        {
            get { return _reg_no; }
            set { _reg_no = value; }
        }

        private string transaction_no;
        public string TRANSACTION_NO
        {
            get { return transaction_no; }
            set { transaction_no = value; }
        }

        private string _outstanding_due = string.Empty;

        public string OUTSTANDING_DUE
        {
            get { return _outstanding_due; }
            set { _outstanding_due = value; }
        }

        private int cmp_class_srv_id;
        public int CMP_CLASS_SRV_ID
        {
            set { cmp_class_srv_id = value; }
            get { return cmp_class_srv_id; }
        }

        private int cmp_class_srv_tariff_id;
        public int CMP_CLASS_SRV_TARIFF_ID
        {
            set { cmp_class_srv_tariff_id = value; }
            get { return cmp_class_srv_tariff_id; }
        }

        private string _paitent_count;

        public string PATIENT_COUNT
        {
            get { return _paitent_count; }
            set { _paitent_count = value; }
        }
        private string _doctor_count;

        public string DOCTOR_COUNT
        {
            get { return _doctor_count; }
            set { _doctor_count = value; }
        }
        private string _pat_tax_amt;

        public string PAT_TAX_AMT
        {
            get { return _pat_tax_amt; }
            set { _pat_tax_amt = value; }
        }
        private string Referal_Mobile_number;

        public string REFERAL_MOBILENO
        {
            get { return Referal_Mobile_number; }
            set { Referal_Mobile_number = value; }
        }
        private string referal_addres;

        public string REFERAL_ADDRESS
        {
            get { return referal_addres; }
            set { referal_addres = value; }
        }
        private string disc_req_reason;

        public string DISC_REQ_REASON
        {
            get { return disc_req_reason; }
            set { disc_req_reason = value; }
        }

        private string pre_advance;

        public string PRE_ADVANCE
        {
            get { return pre_advance; }
            set { pre_advance = value; }
        }

        private string _TRANSACTION_DT;

        public string TRANSACTION_DT
        {
            get { return _TRANSACTION_DT; }
            set { _TRANSACTION_DT = value; }
        }


        private int _CC_CARD_TYPE_ID;

        public int CC_CARD_TYPE_ID
        {
            get { return _CC_CARD_TYPE_ID; }
            set { _CC_CARD_TYPE_ID = value; }
        }

        private string _CC_ISSUE_BANK_NAME;

        public string CC_ISSUE_BANK_NAME
        {
            get { return _CC_ISSUE_BANK_NAME; }
            set { _CC_ISSUE_BANK_NAME = value; }
        }


        private int _DC_CARD_TYPE_ID;

        public int DC_CARD_TYPE_ID
        {
            get { return _DC_CARD_TYPE_ID; }
            set { _DC_CARD_TYPE_ID = value; }
        }

        private string _DC_ISSUE_BANK_NAME;

        public string DC_ISSUE_BANK_NAME
        {
            get { return _DC_ISSUE_BANK_NAME; }
            set { _DC_ISSUE_BANK_NAME = value; }
        }
        private int _REFERENCE_ID;


        public int REFERENCE_ID
        {
            get { return _REFERENCE_ID; }
            set { _REFERENCE_ID = value; }
        }

        private int _REFERENCE_TYPE_ID;

        public int REFERENCE_TYPE_ID
        {
            get { return _REFERENCE_TYPE_ID; }
            set { _REFERENCE_TYPE_ID = value; }
        }

        private int _ADVANCE_TYPE_ID;

        public int ADVANCE_TYPE_ID
        {
            get { return _ADVANCE_TYPE_ID; }
            set { _ADVANCE_TYPE_ID = value; }
        }

        private string _TRAN_RECEIVED_AMT;

        public string TRAN_RECEIVED_AMT
        {
            get { return _TRAN_RECEIVED_AMT; }
            set { _TRAN_RECEIVED_AMT = value; }
        }

        private string _TRAN_DUE_AMT;

        public string TRAN_DUE_AMT
        {
            get { return _TRAN_DUE_AMT; }
            set { _TRAN_DUE_AMT = value; }
        }

        private string _TRAN_PAID_AMT;

        public string TRAN_PAID_AMT
        {
            get { return _TRAN_PAID_AMT; }
            set { _TRAN_PAID_AMT = value; }
        }

        private int _PAYMENT_MODE_ID;

        public int PAYMENT_MODE_ID
        {
            get { return _PAYMENT_MODE_ID; }
            set { _PAYMENT_MODE_ID = value; }
        }

        private int _CQ_CHEQUE_NO;

        public int CQ_CHEQUE_NO
        {
            get { return _CQ_CHEQUE_NO; }
            set { _CQ_CHEQUE_NO = value; }
        }

        private string _CQ_ISSUER_NAME;

        public string CQ_ISSUER_NAME
        {
            get { return _CQ_ISSUER_NAME; }
            set { _CQ_ISSUER_NAME = value; }
        }

        private string _OL_ACCOUNT_NO;

        public string OL_ACCOUNT_NO
        {
            get { return _OL_ACCOUNT_NO; }
            set { _OL_ACCOUNT_NO = value; }
        }

        private string _OL_ACCOUNT_HOLDER_NAME;

        public string OL_ACCOUNT_HOLDER_NAME
        {
            get { return _OL_ACCOUNT_HOLDER_NAME; }
            set { _OL_ACCOUNT_HOLDER_NAME = value; }
        }
        private int _OL_BANK_ID;

        public int OL_BANK_ID
        {
            get { return _OL_BANK_ID; }
            set { _OL_BANK_ID = value; }
        }

        private string _OL_BRANCH_ID;

        public string OL_BRANCH_ID
        {
            get { return _OL_BRANCH_ID; }
            set { _OL_BRANCH_ID = value; }
        }

        private string _OL_TRANSACTION_MODE_ID;

        public string OL_TRANSACTION_MODE_ID
        {
            get { return _OL_TRANSACTION_MODE_ID; }
            set { _OL_TRANSACTION_MODE_ID = value; }
        }

        private string _VH_VOUCHER_TYPE_ID;


        public string VH_VOUCHER_TYPE_ID
        {
            get { return _VH_VOUCHER_TYPE_ID; }
            set { _VH_VOUCHER_TYPE_ID = value; }
        }

        private string _VH_VOUCHER_NO;

        public string VH_VOUCHER_NO
        {
            get { return _VH_VOUCHER_NO; }
            set { _VH_VOUCHER_NO = value; }
        }


        private string _VH_VALID_TO_DT;

        public string VH_VALID_TO_DT
        {
            get { return _VH_VALID_TO_DT; }
            set { _VH_VALID_TO_DT = value; }
        }

        private string _CMP_GROSS_AMT;

        public string CMP_GROSS_AMT
        {
            get { return _CMP_GROSS_AMT; }
            set { _CMP_GROSS_AMT = value; }
        }

        private string _CMP_NET_AMT;

        public string CMP_NET_AMT
        {
            get { return _CMP_NET_AMT; }
            set { _CMP_NET_AMT = value; }
        }

        private int transaction_id;
        public int TRANSACTION_ID
        {
            get { return transaction_id; }
            set { transaction_id = value; }
        }
        private string _bill_amount;

        public string Bill_amount
        {
            get { return _bill_amount; }
            set { _bill_amount = value; }
        }

        private string _paid_amount;

        public string Paid_amount
        {
            get { return _paid_amount; }
            set { _paid_amount = value; }
        }

        private string _due_amount;

        public string Due_amount
        {
            get { return _due_amount; }
            set { _due_amount = value; }
        }
       
        private string transaction_type;

        public string Transaction_type
        {
            get { return transaction_type; }
            set { transaction_type = value; }
        }
        private string _trans_amount;

        public string Trans_amount
        {
            get { return _trans_amount; }
            set { _trans_amount = value; }
        }
       
        private string _concession;

        public string Concession
        {
            get { return _concession; }
            set { _concession = value; }
        }
        private string _net_amount;

        public string Net_amount
        {
            get { return _net_amount; }
            set { _net_amount = value; }
        }
        private string _transaction_by;

        public string Transaction_by
        {
            get { return _transaction_by; }
            set { _transaction_by = value; }
        }

        private string _TOTAL_AMOUNT;

        public string TOTAL_AMOUNT
        {
            get { return _TOTAL_AMOUNT; }
            set { _TOTAL_AMOUNT = value; }
        }
        private string _VISIT_STATUS;

        public string VISIT_STATUS
        {
            get { return _VISIT_STATUS; }
            set { _VISIT_STATUS = value; }
        }
        private float _SERVICE_RATE;

        public float SERVICE_RATE
        {
            get { return _SERVICE_RATE; }
            set { _SERVICE_RATE = value; }
        }
        private string _POST_DISCOUNT_DATE;

        public string POST_DISCOUNT_DATE
        {
            get { return _POST_DISCOUNT_DATE; }
            set { _POST_DISCOUNT_DATE = value; }
        }
        private string _BILL_DATE;

        public string BILL_DATE
        {
            get { return _BILL_DATE; }
            set { _BILL_DATE = value; }
        }

        private string _DIAG_NO;

        public string DIAG_NO
        {
            get { return _DIAG_NO; }
            set { _DIAG_NO = value; }
        }
        private string _INVESTIGATION_NAME;

        public string INVESTIGATION_NAME
        {
            get { return _INVESTIGATION_NAME; }
            set { _INVESTIGATION_NAME = value; }
        }
        private string _PRE_DISCOUNT;

        public string PRE_DISCOUNT
        {
            get { return _PRE_DISCOUNT; }
            set { _PRE_DISCOUNT = value; }
        }
        private string _POST_DISCOUNT_AMOUNT;

        public string POST_DISCOUNT_AMOUNT
        {
            get { return _POST_DISCOUNT_AMOUNT; }
            set { _POST_DISCOUNT_AMOUNT = value; }
        }
        private string _TOTAL_DISCOUNT_AMOUNT;

        public string TOTAL_DISCOUNT_AMOUNT
        {
            get { return _TOTAL_DISCOUNT_AMOUNT; }
            set { _TOTAL_DISCOUNT_AMOUNT = value; }
        }
        private string _DISCOUNT_PERCENTAGE;

        public string DISCOUNT_PERCENTAGE
        {
            get { return _DISCOUNT_PERCENTAGE; }
            set { _DISCOUNT_PERCENTAGE = value; }
        }
        private string _CATEGORY;

        public string CATEGORY
        {
            get { return _CATEGORY; }
            set { _CATEGORY = value; }
        }
        private string _AUTH_NAME;

        public string AUTH_NAME
        {
            get { return _AUTH_NAME; }
            set { _AUTH_NAME = value; }
        }
        private string _REASON_FOR_POST_DISCOUNT;

        public string REASON_FOR_POST_DISCOUNT
        {
            get { return _REASON_FOR_POST_DISCOUNT; }
            set { _REASON_FOR_POST_DISCOUNT = value; }
        }
        private string _USER_CD;

        public string USER_CD
        {
            get { return _USER_CD; }
            set { _USER_CD = value; }
        }
        private string _USER_NAME;

        public string USER_NAME
        {
            get { return _USER_NAME; }
            set { _USER_NAME = value; }
        }
        private string _IP_NO;

        public string IP_NO
        {
            get { return _IP_NO; }
            set { _IP_NO = value; }
        }
        private string _PATIENT_TYPE_GROUP;

        public string PATIENT_TYPE_GROUP
        {
            get { return _PATIENT_TYPE_GROUP; }
            set { _PATIENT_TYPE_GROUP = value; }
        }
        private string _PATIENT_TYPE;

        public string PATIENT_TYPE
        {
            get { return _PATIENT_TYPE; }
            set { _PATIENT_TYPE = value; }
        }
        private string _PRINT_BY;

        public string PRINT_BY
        {
            get { return _PRINT_BY; }
            set { _PRINT_BY = value; }
        }

        private string _company_id;

        public string Company_id
        {
            get { return _company_id; }
            set { _company_id = value; }
        }
        private string _company_group_id;

        public string Company_group_id
        {
            get { return _company_group_id; }
            set { _company_group_id = value; }
        }
        private string _referal_source_id;

        public string Referal_source_id
        {
            get { return _referal_source_id; }
            set { _referal_source_id = value; }
        }
        private int admn_id;

        public int ADMN_ID
        {
            get { return admn_id; }
            set { admn_id = value; }
        }
        private string admn_dt;

        public string ADMN_DT
        {
            get { return admn_dt; }
            set { admn_dt = value; }
        }
        private string discnt_dt;

        public string DISCNT_DT
        {
            get { return discnt_dt; }
            set { discnt_dt = value; }
        }
        private float discnt_amt;

        public float DISCNT_AMT
        {
            get { return discnt_amt; }
            set { discnt_amt = value; }
        }
        private string perc_of_discount;

        public string PERC_OF_DISCOUNT
        {
            get { return perc_of_discount; }
            set { perc_of_discount = value; }
        }
        private string patient_type_id;

        public string PATIENT_TYPE_ID
        {
            get { return patient_type_id; }
            set { patient_type_id = value; }
        }
        private string patient_group_id;

        public string PATIENT_GROUP_ID
        {
            get { return patient_group_id; }
            set { patient_group_id = value; }
        }
        private string _DISCHARGE_DATE;

        public string DISCHARGE_DATE
        {
            get { return _DISCHARGE_DATE; }
            set { _DISCHARGE_DATE = value; }
        }
       
    }
}
