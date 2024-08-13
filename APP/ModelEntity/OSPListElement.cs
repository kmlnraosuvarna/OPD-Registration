using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class OSPListElement : ListElements
    {


        private string adt_op_service_type_id;
        public string ADT_OP_SERVICE_TYPE_ID
        {
            get { return adt_op_service_type_id; }
            set { adt_op_service_type_id = value; }
        }

        private int _post_days = 0;
        public int POST_DAYS
        {
            get { return _post_days; }
            set { _post_days = value; }
        }
        private string _SERVICE_QUESTION_TEMPLATE_ID = string.Empty;
        public string SERVICE_QUESTION_TEMPLATE_ID
        {
            get { return _SERVICE_QUESTION_TEMPLATE_ID; }
            set { _SERVICE_QUESTION_TEMPLATE_ID = value; }
        }


        private string _pkg_srv_ids = string.Empty;
        public string PKG_SRV_IDS
        {
            get { return _pkg_srv_ids; }
            set { _pkg_srv_ids = value; }
        }

        private int _pre_days = 0;
        public int PRE_DAYS
        {
            get { return _pre_days; }
            set { _pre_days = value; }
        }

        private int _quantity = 0;
        public int QUANTITY
        {
            get { return _quantity; }
            set { _quantity = value; }
        }

        private int _doctor_id = 0;
        public int DOCTOR_ID
        {
            get { return _doctor_id; }
            set { _doctor_id = value; }
        }

        private int _service_id = 0;
        public int SERVICE_ID
        {
            get { return _service_id; }
            set { _service_id = value; }
        }
        private int price;
        public int Price
        {
            get { return price; }
            set { price = value; }
        }

        private double _price = 0.00;
        public double _Price
        {
            get { return _price; }
            set { _price = value; }
        }

        private int service_type_id;
        public int Service_type_id
        {
            get { return service_type_id; }
            set { service_type_id = value; }
        }

        private int service_group_id;
        public int Service_group_id
        {
            get { return service_group_id; }
            set { service_group_id = value; }
        }

        private string service_type_name;
        public string Service_type_name
        {
            get { return service_type_name; }
            set { service_type_name = value; }
        }

        private int service_class_id;
        public int Service_Class_Id
        {
            get { return service_class_id; }
            set { service_class_id = value; }
        }

        private string _service_cd;
        public string Service_cd
        {
            get { return _service_cd; }
            set { _service_cd = value; }
        }

        private string _service_group;
        public string Service_group
        {
            get { return _service_group; }
            set { _service_group = value; }
        }

        private string doctor_id;
        public string Doctor_id
        {
            get { return doctor_id; }
            set { doctor_id = value; }
        }


        private string department_id;
        public string Department_id
        {
            get { return department_id; }
            set { department_id = value; }
        }

        private string start_dt;
        public string START_DT
        {
            get { return start_dt; }
            set { start_dt = value; }
        }

        private string end_dt;
        public string END_DT
        {
            get { return end_dt; }
            set { end_dt = value; }
        }
        private string record_status;
        public string RECORD_STATUS
        {
            get { return record_status; }
            set { record_status = value; }
        }
        private string _Tarrif_Id;
        public string Tariff_Id
        {
            get { return _Tarrif_Id; }
            set { _Tarrif_Id = value; }
        }
        private string _Priority;
        public string Priority
        {
            get { return _Priority; }
            set { _Priority = value; }
        }
        private int _org_price;

        public int ORG_PRICE
        {
            get { return _org_price; }
            set { _org_price = value; }
        }
        private int _doctor_price;

        public int DOCTOR_PRICE
        {
            get { return _doctor_price; }
            set { _doctor_price = value; }
        }
        private int _orgRAmount;

        public int OrgRAmount
        {
            get { return _orgRAmount; }
            set { _orgRAmount = value; }
        }
        private int _docRamt;

        public int DoctorRAmount
        {
            get { return _docRamt; }
            set { _docRamt = value; }
        }
        private string _discount_precent;

        public string DISCOUNT_PERCENT
        {
            get { return _discount_precent; }
            set { _discount_precent = value; }
        }
        private int service_price_id;
        public int SERVICE_PRICE_ID
        {
            get { return service_price_id; }
            set { service_price_id = value; }
        }


        private string _equivalent_service_name = string.Empty;
        public string EQUIVALENT_SERVICE_NAME
        {
            get { return _equivalent_service_name; }
            set { _equivalent_service_name = value; }
        }


        private string _tariff_price = string.Empty;
        public string TARIFF_PRICE
        {
            get { return _tariff_price; }
            set { _tariff_price = value; }
        }


        private string _color_cd = string.Empty;
        public string COLOR_CD
        {
            get { return _color_cd; }
            set { _color_cd = value; }
        }
        private int company_service_id;
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

        private string rate;
        public string RATE
        {
            set { rate = value; }
            get { return rate; }
        }

        private string _service_name = string.Empty;
        public string SERVICE_NAME
        {
            get { return _service_name; }
            set { _service_name = value; }
        }
        private string tariff_cd = string.Empty;
        public string TARIFF_CD
        {
            get { return tariff_cd; }
            set { tariff_cd = value; }
        }
        private string tariff_name = string.Empty;
        public string TARIFF_NAME
        {
            get { return tariff_name; }
            set { tariff_name = value; }
        }
        //private string _service_cd = string.Empty;
        //public string SERVICE_CD
        //{
        //    get { return _service_cd; }
        //    set { _service_cd = value; }
        //}
        //private string doctor_id;
        //public string DOCTOR_ID
        //{
        //    get { return doctor_id; }
        //    set { doctor_id = value; }
        //}

        //private int department_id;
        //public int DEPARTMENT_ID
        //{
        //    get { return department_id; }
        //    set { department_id = value; }
        //}

        private string consultation_type_id;
        public string CONSULTATION_TYPE_ID
        {
            get { return consultation_type_id; }
            set { consultation_type_id = value; }
        }
        private string cnsltsn_type_id;
        public string CNSLTSN_TYPE_ID
        {
            get { return cnsltsn_type_id; }
            set { cnsltsn_type_id = value; }
        }

        //private string service_class_id;
        //public string SERVICE_CLASS_ID
        //{
        //    get { return service_class_id; }
        //    set { service_class_id = value; }
        //}

        //private string service_type_id;
        //public string SERVICE_TYPE_ID
        //{
        //    get { return service_type_id; }
        //    set { service_type_id = value; }
        //}

        //private string service_type_name;
        //public string SERVICE_TYPE_NAME
        //{
        //    get { return service_type_name; }
        //    set { service_type_name = value; }
        //}

        //private string service_group_id;
        //public string SERVICE_GROUP_ID
        //{
        //    get { return service_group_id; }
        //    set { service_group_id = value; }
        //}

        private string service_group_name;
        public string SERVICE_GROUP_NAME
        {
            get { return service_group_name; }
            set { service_group_name = value; }
        }

        private int ward_group_id;
        public int WARD_GROUP_ID
        {
            get { return ward_group_id; }
            set { ward_group_id = value; }
        }

        //private string tariff_id;
        //public string Tariff_id
        //{
        //    get { return tariff_id; }
        //    set { tariff_id = value; }
        //}

        private string tariff_rate;
        public string TARIFF_RATE
        {
            get { return tariff_rate; }
            set { tariff_rate = value; }
        }

        private string priority;
        public string PRIORITY
        {
            get { return priority; }
            set { priority = value; }
        }

        private string original_amount;
        public string ORIGINAL_AMOUNT
        {
            get { return original_amount; }
            set { original_amount = value; }
        }

        private string _department_name = string.Empty;
        public string DEPARTMENT_NAME
        {
            get { return _department_name; }
            set { _department_name = value; }
        }

        private string _NON_SHOW = string.Empty;
        public string NON_SHOW
        {
            get { return _NON_SHOW; }
            set { _NON_SHOW = value; }
        }

        private string _IS_CASH = string.Empty;
        public string IS_CASH
        {
            get { return _IS_CASH; }
            set { _IS_CASH = value; }
        }
        private string last_invst_srv;

        public string LAST_INVST_SRV
        {
            get { return last_invst_srv; }
            set { last_invst_srv = value; }
        }
        private string specimen_name;

        public string SPECIMEN_NAME
        {
            get { return specimen_name; }
            set { specimen_name = value; }
        }
        private string vaccutainer_name;

        public string VACCUTAINER_NAME
        {
            get { return vaccutainer_name; }
            set { vaccutainer_name = value; }
        }


        private string Accepted_by;

        public string ACCEPTED_BY
        {
            get { return Accepted_by; }
            set { Accepted_by = value; }
        }
        private string posted_time;

        public string POSTED_TIME
        {
            get { return posted_time; }
            set { posted_time = value; }
        }
        private string _is_foreign_service;

        public string IS_FOREIGN_SERVICE
        {
            get { return _is_foreign_service; }
            set { _is_foreign_service = value; }
        }

        private string _is_billed;

        public string IS_BILLED
        {
            get { return _is_billed; }
            set { _is_billed = value; }
        }
        private string _item_from;

        public string ITEM_FROM
        {
            get { return _item_from; }
            set { _item_from = value; }
        }
        private string _instructions;

        public string INSTRUCTIONS
        {
            get { return _instructions; }
            set { _instructions = value; }
        }
        private string billing_head_name = "";
        public string BILLING_HEAD_NAME
        {
            set { billing_head_name = value; }
            get { return billing_head_name; }
        }
        private string billing_head_id = "0";
        public string BILLING_HEAD_ID
        {
            set { billing_head_id = value; }
            get { return billing_head_id; }
        }

        private string vaccutainer;

        public string VACCUTAINER
        {
            get { return vaccutainer; }
            set { vaccutainer = value; }
        }
        private string dosage_qty;

        public string DOSAGE_QTY
        {
            get { return dosage_qty; }
            set { dosage_qty = value; }
        }
        private string speciman_id;

        public string SPECIMEN_ID
        {
            get { return speciman_id; }
            set { speciman_id = value; }
        }
        private string vaccutainer_id;

        public string VACCUTAINER_ID
        {
            get { return vaccutainer_id; }
            set { vaccutainer_id = value; }
        }
        private string var_bar_cd;

        public string VAR_BAR_CD
        {
            get { return var_bar_cd; }
            set { var_bar_cd = value; }
        }
        private string batch_no = string.Empty;

        public string BATCH_NO
        {
            get { return batch_no; }
            set { batch_no = value; }
        }
        private string batch_expery_dt = string.Empty;

        public string BATCH_EXPERY_DT
        {
            get { return batch_expery_dt; }
            set { batch_expery_dt = value; }
        }
        private string manfacture_name = string.Empty;

        public string MANFACTURE_NAME
        {
            get { return manfacture_name; }
            set { manfacture_name = value; }
        }
        private string _cocession;

        public string CONCESSION
        {
            get { return _cocession; }
            set { _cocession = value; }
        }
        private string is_clinical_hist_req;

        public string IS_CLINICAL_HIST_REQ
        {
            get { return is_clinical_hist_req; }
            set { is_clinical_hist_req = value; }
        }
        private string chistory_text;

        public string CHISTORY_TEXT
        {
            get { return chistory_text; }
            set { chistory_text = value; }
        }

        private string _srv_gender_id;
        public string SRV_GENDER_ID
        {
            get { return _srv_gender_id; }
            set { _srv_gender_id = value; }
        }
        private string _amount;

        public string AMOUNT
        {
            get { return _amount; }
            set { _amount = value; }
        }
        private string _net_amount;

        public string NET_AMOUNT
        {
            get { return _net_amount; }
            set { _net_amount = value; }
        }
        private string _concession_amount;

        public string CONCESSION_AMOUNT
        {
            get { return _concession_amount; }
            set { _concession_amount = value; }
        }
        private string _is_emergency;

        public string IS_EMERGENCY
        {
            get { return _is_emergency; }
            set { _is_emergency = value; }
        }
        private string _emerg_price;

        public string EMERGENCY_PRICE
        {
            get { return _emerg_price; }
            set { _emerg_price = value; }
        }
        private string report_dispatch_time;

        public string REPORT_DISPATCH_TIME
        {
            get { return report_dispatch_time; }
            set { report_dispatch_time = value; }
        }
        private string service_status;

        public string SERVICE_STATUS
        {
            get { return service_status; }
            set { service_status = value; }
        }
        private string _history_type;

        public string HISTORY_TYPE
        {
            get { return _history_type; }
            set { _history_type = value; }
        }
        private string _cncl_smry_id;
        public string CNCL_SMRY_ID
        {
            get { return _cncl_smry_id; }
            set { _cncl_smry_id = value; }
        }
        private string _medication_id;
        public string MEDICATION_ID
        {
            get { return _medication_id; }
            set { _medication_id = value; }
        }
        private string _is_taken_today;
        public string IS_TAKEN_TODAY
        {
            get { return _is_taken_today; }
            set { _is_taken_today = value; }
        }
        private string _dosage;
        public string DOSAGE
        {
            get { return _dosage; }
            set { _dosage = value; }
        }
        private string _lmp_dt;
        public string LMP_DT
        {
            get { return _lmp_dt; }
            set { _lmp_dt = value; }
        }
        private string _medication_name;
        public string MEDICATION_NAME
        {
            get { return _medication_name; }
            set { _medication_name = value; }
        }
        private string _outher_medication;
        public string OUTHER_MEDICATION
        {
            get { return _outher_medication; }
            set { _outher_medication = value; }
        }
        private string _pkg_srv_id;

        public string PKG_SRV_ID
        {
            get { return _pkg_srv_id; }
            set { _pkg_srv_id = value; }
        }
        private string _history_type_id;

        public string HISTORY_TYPE_ID
        {
            get { return _history_type_id; }
            set { _history_type_id = value; }
        }
        private string _patient_class_id;

        public string PATIENT_CLASS_ID
        {
            get { return _patient_class_id; }
            set { _patient_class_id = value; }
        }
        private string _min_price;

        public string MIN_PRICE
        {
            get { return _min_price; }
            set { _min_price = value; }
        }
        private string _max_Price;

        public string MAX_PRICE
        {
            get { return _max_Price; }
            set { _max_Price = value; }
        }
        private string _no_need_srv;

        public string NO_NEED_SRV
        {
            get { return _no_need_srv; }
            set { _no_need_srv = value; }
        }
        private string _concern_form_req;

        public string CONCERN_FORM_REQ
        {
            get { return _concern_form_req; }
            set { _concern_form_req = value; }
        }
        private string _priv_srv_posted_dt;

        public string PRIV_SRV_POSTED_DT
        {
            get { return _priv_srv_posted_dt; }
            set { _priv_srv_posted_dt = value; }
        }
        private string _no_need_days;

        public string NO_NEED_DAYS
        {
            get { return _no_need_days; }
            set { _no_need_days = value; }
        }
        private string _qty_edit;

        public string QYT_EDIT
        {
            get { return _qty_edit; }
            set { _qty_edit = value; }
        }
        private string _rate_edit;

        public string RATE_EDIT
        {
            get { return _rate_edit; }
            set { _rate_edit = value; }
        }
        private string _cmp_disc_pcnt;

        public string CMP_DISC_PCNT
        {
            get { return _cmp_disc_pcnt; }
            set { _cmp_disc_pcnt = value; }
        }

        private string _emp_price;

        public string EMP_PRICE
        {
            get { return _emp_price; }
            set { _emp_price = value; }
        }

        private string _emp_percent;

        public string EMP_PERCENT
        {
            get { return _emp_percent; }
            set { _emp_percent = value; }
        }

        private string _org_percent;

        public string ORG_PERCENT
        {
            get { return _org_percent; }
            set { _org_percent = value; }
        }
        private string _from_days;

        public string FROM_DAYS
        {
            get { return _from_days; }
            set { _from_days = value; }
        }
        private string _to_days;

        public string TO_DAYS
        {
            get { return _to_days; }
            set { _to_days = value; }
        }
        private string _equi_service_name;

        public string EQUI_SERVICE_NAME
        {
            get { return _equi_service_name; }
            set { _equi_service_name = value; }
        }
        private string _is_post;

        public string IS_POST
        {
            get { return _is_post; }
            set { _is_post = value; }
        }
        private string _order_det_id;

        public string ORDER_DET_ID
        {
            get { return _order_det_id; }
            set { _order_det_id = value; }
        }
        private string _pkg_Srv_Name;

        public string PKG_SRV_NAME
        {
            get { return _pkg_Srv_Name; }
            set { _pkg_Srv_Name = value; }
        }
        private string concession_mode_id;

        public string CONCESSION_MODE_ID
        {
            get { return concession_mode_id; }
            set { concession_mode_id = value; }
        }
        private string _trf;

        public string TRF
        {
            get { return _trf; }
            set { _trf = value; }
        }
        private string _site;

        public string SITE
        {
            get { return _site; }
            set { _site = value; }
        }
        private string _pat_gross_amt;

        public string PAT_GROSS_AMT
        {
            get { return _pat_gross_amt; }
            set { _pat_gross_amt = value; }
        }
        private string _emp_net_amt;

        public string EMP_NET_AMT
        {
            get { return _emp_net_amt; }
            set { _emp_net_amt = value; }
        }
        private string _company_amount;

        public string COMPANY_AMOUNT
        {
            get { return _company_amount; }
            set { _company_amount = value; }
        }
        private string _company_cncsn_amt;

        public string COMPANY_CNCSN_AMT
        {
            get { return _company_cncsn_amt; }
            set { _company_cncsn_amt = value; }
        }
        private string _company_cncsn_pct;

        public string COMPANY_CNCSN_PCT
        {
            get { return _company_cncsn_pct; }
            set { _company_cncsn_pct = value; }
        }
        private string _company_net_amt;

        public string COMPANY_NET_AMT
        {
            get { return _company_net_amt; }
            set { _company_net_amt = value; }
        }
        private string _bill_amount;

        public string BILL_AMOUNT
        {
            get { return _bill_amount; }
            set { _bill_amount = value; }
        }
        private string _paid_amount;

        public string PAID_AMOUNT
        {
            get { return _paid_amount; }
            set { _paid_amount = value; }
        }
        private string _concession_auth_name;

        public string CONCESSION_AUTH_NAME
        {
            get { return _concession_auth_name; }
            set { _concession_auth_name = value; }
        }
        private string _due_auth_name;

        public string DUE_AUTH_NAME
        {
            get { return _due_auth_name; }
            set { _due_auth_name = value; }
        }
        private string _due_amount;

        public string DUE_AMOUNT
        {
            get { return _due_amount; }
            set { _due_amount = value; }
        }
        private string _cmp_name;

        public string CMP_NAME
        {
            get { return _cmp_name; }
            set { _cmp_name = value; }
        }
        private string _cmp_cncsn_amt;

        public string CMP_CNCSN_AMT
        {
            get { return _cmp_cncsn_amt; }
            set { _cmp_cncsn_amt = value; }
        }
        private string _cmp_cncsn_pct;

        public string CMP_CNCSN_PCT
        {
            get { return _cmp_cncsn_pct; }
            set { _cmp_cncsn_pct = value; }
        }
        private string _cmp_gross_amt;

        public string CMP_GROSS_AMT
        {
            get { return _cmp_gross_amt; }
            set { _cmp_gross_amt = value; }
        }
        private string _cmp_due_amt;

        public string CMP_DUE_AMT
        {
            get { return _cmp_due_amt; }
            set { _cmp_due_amt = value; }
        }
        private string _cmp_net_amt;

        public string CMP_NET_AMT
        {
            get { return _cmp_net_amt; }
            set { _cmp_net_amt = value; }
        }
        private string _cmp_paid_amt;

        public string CMP_PAID_AMT
        {
            get { return _cmp_paid_amt; }
            set { _cmp_paid_amt = value; }
        }
        private string _pat_cncsn_amt;

        public string PAT_CNCSN_AMT
        {
            get { return _pat_cncsn_amt; }
            set { _pat_cncsn_amt = value; }
        }
        private string _pat_cncsn_pct;

        public string PAT_CNCSN_PCT
        {
            get { return _pat_cncsn_pct; }
            set { _pat_cncsn_pct = value; }
        }
        private string _pat_due_amt;

        public string PAT_DUE_AMT
        {
            get { return _pat_due_amt; }
            set { _pat_due_amt = value; }
        }
        private string _pat_net_amt;

        public string PAT_NET_AMT
        {
            get { return _pat_net_amt; }
            set { _pat_net_amt = value; }
        }
        private string _pat_paid_amt;

        public string PAT_PAID_AMT
        {
            get { return _pat_paid_amt; }
            set { _pat_paid_amt = value; }
        }
        private string _emp_gross_amt;

        public string EMP_GROSS_AMT
        {
            get { return _emp_gross_amt; }
            set { _emp_gross_amt = value; }
        }
        private string _ORG_PERCENT_PRICE;

        public string ORG_PERCENT_PRICE
        {
            get { return _ORG_PERCENT_PRICE; }
            set { _ORG_PERCENT_PRICE = value; }
        }
        private string _COMPANY_ID;

        public string COMPANY_ID
        {
            get { return _COMPANY_ID; }
            set { _COMPANY_ID = value; }
        }
        private string _IS_APPOINTMENT;

        public string IS_APPOINTMENT
        {
            get { return _IS_APPOINTMENT; }
            set { _IS_APPOINTMENT = value; }
        }
        private string _EQUI_SERVICE_CD;

        public string EQUI_SERVICE_CD
        {
            get { return _EQUI_SERVICE_CD; }
            set { _EQUI_SERVICE_CD = value; }
        }
        private int _DEPARTMENTID;

        public int DEPARTMENTID
        {
            get { return _DEPARTMENTID; }
            set { _DEPARTMENTID = value; }
        }
        private string cmp_req_status;

        public string CMP_REQ_STATUS
        {
            get { return cmp_req_status; }
            set { cmp_req_status = value; }
        }

        private string charge_setup_done;

        public string CHARGE_SETUP_DONE
        {
            get { return charge_setup_done; }
            set { charge_setup_done = value; }
        }

        private string gender_id;

        public string GENDER_ID
        {
            get { return gender_id; }
            set { gender_id = value; }
        }

        private string _EFFECT_FROM_DT;

        public string EFFECT_FROM_DT
        {
            get { return _EFFECT_FROM_DT; }
            set { _EFFECT_FROM_DT = value; }
        }
        private string _EFFECT_TO_DT;

        public string EFFECT_TO_DT
        {
            get { return _EFFECT_TO_DT; }
            set { _EFFECT_TO_DT = value; }
        }
        private string _IS_SHOW;

        public string IS_SHOW
        {
            get { return _IS_SHOW; }
            set { _IS_SHOW = value; }
        }
        private int profile_det_id;

        public int PROFILE_DET_ID
        {
            get { return profile_det_id; }
            set { profile_det_id = value; }
        }
        private string is_quantity_edit;

        public string IS_QUANTITY_EDIT
        {
            get { return is_quantity_edit; }
            set { is_quantity_edit = value; }
        }
        private string from_age;

        public string FROM_AGE
        {
            get { return from_age; }
            set { from_age = value; }
        }
        private string to_age;

        public string TO_AGE
        {
            get { return to_age; }
            set { to_age = value; }
        }

        private string _IS_OPTIONAL;

        public string IS_OPTIONAL
        {
            get { return _IS_OPTIONAL; }
            set { _IS_OPTIONAL = value; }
        }

        private string _IS_REG_FEE_INCLUDED;

        public string IS_REG_FEE_INCLUDED
        {
            get { return _IS_REG_FEE_INCLUDED; }
            set { _IS_REG_FEE_INCLUDED = value; }
        }
        private string op_tran_allowed;

        public string OP_TRAN_ALLOWED
        {
            get { return op_tran_allowed; }
            set { op_tran_allowed = value; }
        }

        private string _STOP_CONS;

        public string STOP_CONS
        {
            get { return _STOP_CONS; }
            set { _STOP_CONS = value; }
        }

        private string refrl_qty;

        public string REFRL_QTY
        {
            get { return refrl_qty; }
            set { refrl_qty = value; }
        }
        private string _SERVICE_DEPENDS;

        public string SERVICE_DEPENDS
        {
            get { return _SERVICE_DEPENDS; }
            set { _SERVICE_DEPENDS = value; }
        }
        private string utilized_refrl_qty;

        public string UTILIZED_REFRL_QTY
        {
            get { return utilized_refrl_qty; }
            set { utilized_refrl_qty = value; }
        }

        private int pkg_inc_amount;
        public int PKG_INC_AMOUNT
        {
            get { return pkg_inc_amount; }
            set { pkg_inc_amount = value; }
        }
        private string _MAX_OPT_SERVICES_ALLOWED;
        public string MAX_OPT_SERVICES_ALLOWED
        {
            set { _MAX_OPT_SERVICES_ALLOWED = value; }
            get { return _MAX_OPT_SERVICES_ALLOWED; }
        }

        private string _IS_FREE_FOLLOWUP;
        public string IS_FREE_FOLLOWUP
        {
            set { _IS_FREE_FOLLOWUP = value; }
            get { return _IS_FREE_FOLLOWUP; }
        }

        private int _profile_id;
        public int PROFILE_ID
        {
            get { return _profile_id; }
            set { _profile_id = value; }
        }

        private string __service_cd;
        public string SERVICE_CD
        {
            get { return __service_cd; }
            set { __service_cd = value; }
        }
        private string __service_type_name;
        public string SERVICE_TYPE_NAME
        {
            get { return __service_type_name; }
            set { __service_type_name = value; }
        }
        private string _is_remarks_mandatory;
        public string IS_REMARKS_MANDATORY
        {
            get { return _is_remarks_mandatory; }
            set { _is_remarks_mandatory = value; }
        }
        private string _utilz_cmp_rule_qty;

        public string Utilz_cmp_rule_qty
        {
            get { return _utilz_cmp_rule_qty; }
            set { _utilz_cmp_rule_qty = value; }
        }
        private string _cmp_rul_qty;

        public string Cmp_rul_qty
        {
            get { return _cmp_rul_qty; }
            set { _cmp_rul_qty = value; }
        }
        private string _is_srv_guidelines_required;

        public string IS_SRV_GUIDELINES_REQUIRED
        {
            get { return _is_srv_guidelines_required; }
            set { _is_srv_guidelines_required = value; }
        }
        private string _is_consent_from;

        public string IS_CONSENT_FROM
        {
            get { return _is_consent_from; }
            set { _is_consent_from = value; }
        }
        private string is_srv_checklist_required;

        public string IS_SRV_CHECKLIST_REQUIRED
        {
            get { return is_srv_checklist_required; }
            set { is_srv_checklist_required = value; }
        }
        private string _is_additional;

        public string IS_ADDITIONAL
        {
            get { return _is_additional; }
            set { _is_additional = value; }
        }

        private string _IS_SRV_INSTRUCTION_REQ;

        public string IS_SRV_INSTRUCTION_REQ
        {
            get { return _IS_SRV_INSTRUCTION_REQ; }
            set { _IS_SRV_INSTRUCTION_REQ = value; }
        }
        private string _DOC_HOL_STATUS;

        public string DOC_HOL_STATUS
        {
            get { return _DOC_HOL_STATUS; }
            set { _DOC_HOL_STATUS = value; }
        }
        private string _IS_ELGIBLE;

        public string IS_ELGIBLE
        {
            get { return _IS_ELGIBLE; }
            set { _IS_ELGIBLE = value; }
        }
        private int ind_srv_id;

        public int IND_SRV_ID
        {
            get { return ind_srv_id; }
            set { ind_srv_id = value; }
        }

        private string _CMP_PKG_EXIST;

        public string CMP_PKG_EXIST
        {
            get { return _CMP_PKG_EXIST; }
            set { _CMP_PKG_EXIST = value; }
        }

        private string _SERVICE_UNICODE;

        public string SERVICE_UNICODE
        {
            get { return _SERVICE_UNICODE; }
            set { _SERVICE_UNICODE = value; }
        }

        private string _ADT_IMR_SRV_ID;

        public string ADT_IMR_SRV_ID
        {
            get { return _ADT_IMR_SRV_ID; }
            set { _ADT_IMR_SRV_ID = value; }
        }
        private string _service_type_id;

        public string SERVICE_TYPE_ID
        {
            get { return _service_type_id; }
            set { _service_type_id = value; }
        }

        private string _UNI_SERVICE_TYPE_ID;

        public string UNI_SERVICE_TYPE_ID
        {
            get { return _UNI_SERVICE_TYPE_ID; }
            set { _UNI_SERVICE_TYPE_ID = value; }
        }
        private string _category_type;

        public string CATEGORY_TYPE
        {
            get { return _category_type; }
            set { _category_type = value; }
        }
        private string _item_group_id;

        public string ITEM_GROUP_ID
        {
            get { return _item_group_id; }
            set { _item_group_id = value; }
        }

        private string _status;

        public string STATUS
        {
            get { return _status; }
            set { _status = value; }
        }
        private string _APMNT_DOC_LEAVE_FROM_DT;

        public string APMNT_DOC_LEAVE_FROM_DT
        {
            get { return _APMNT_DOC_LEAVE_FROM_DT; }
            set { _APMNT_DOC_LEAVE_FROM_DT = value; }
        }
        private string _APMNT_DOC_LEAVE_TO_DT;

        public string APMNT_DOC_LEAVE_TO_DT
        {
            get { return _APMNT_DOC_LEAVE_TO_DT; }
            set { _APMNT_DOC_LEAVE_TO_DT = value; }
        }

        private string min_ceiling;

        public string MIN_CEILING
        {
            get { return min_ceiling; }
            set { min_ceiling = value; }
        }
        private string max_ceiling;

        public string MAX_CEILING
        {
            get { return max_ceiling; }
            set { max_ceiling = value; }
        }

        private string test_occurancy = string.Empty;
        public string TEST_OCCURANCY
        {
            get { return test_occurancy; }
            set { test_occurancy = value; }
        }
        private string _WARD_AUTO_CHRG_ID;

        public string WARD_AUTO_CHRG_ID
        {
            get { return _WARD_AUTO_CHRG_ID; }
            set { _WARD_AUTO_CHRG_ID = value; }
        }
        private string _WARD_ID;

        public string WARD_ID
        {
            get { return _WARD_ID; }
            set { _WARD_ID = value; }
        }
        private string _WARD_AUTO_CHRG_SRV_ID;

        public string WARD_AUTO_CHRG_SRV_ID
        {
            get { return _WARD_AUTO_CHRG_SRV_ID; }
            set { _WARD_AUTO_CHRG_SRV_ID = value; }
        }


        private string _DESIGNATION;

        public string DESIGNATION
        {
            get { return _DESIGNATION; }
            set { _DESIGNATION = value; }
        }
        private string _ESTIMATED_TIME;

        public string ESTIMATED_TIME
        {
            get { return _ESTIMATED_TIME; }
            set { _ESTIMATED_TIME = value; }
        }

        private string cross_referal_request;

        public string CROSS_REFERAL_REQUEST
        {
            get { return cross_referal_request; }
            set { cross_referal_request = value; }
        }
        private string _DEPENDENT_SRV_EXIST;

        public string DEPENDENT_SRV_EXIST
        {
            get { return _DEPENDENT_SRV_EXIST; }
            set { _DEPENDENT_SRV_EXIST = value; }
        }
        private string _DEPARTMENT_ID;

        public string DEPARTMENT_ID
        {
            get { return _DEPARTMENT_ID; }
            set { _DEPARTMENT_ID = value; }
        }

        private string _POSTED_DT;

        public string POSTED_DT
        {
            get { return _POSTED_DT; }
            set { _POSTED_DT = value; }
        }
        private string _ROW;

        public string ROW
        {
            get { return _ROW; }
            set { _ROW = value; }
        }
        private string _CONCERN_FORM_REQ;

        public string CONCERN_FORM_REQ1
        {
            get { return _CONCERN_FORM_REQ; }
            set { _CONCERN_FORM_REQ = value; }
        }
        private string _IS_ADDITIONAL;

        public string IS_ADDITIONAL1
        {
            get { return _IS_ADDITIONAL; }
            set { _IS_ADDITIONAL = value; }
        }
        private int _HISTORY_TYPE_ID1;

        public int HISTORY_TYPE_ID1
        {
            get { return _HISTORY_TYPE_ID1; }
            set { _HISTORY_TYPE_ID1 = value; }
        }


        private string _IS_NUR_STATION;

        public string IS_NUR_STATION
        {
            get { return _IS_NUR_STATION; }
            set { _IS_NUR_STATION = value; }
        }

        private string _IS_DIRECT_BILLING;

        public string IS_DIRECT_BILLING
        {
            get { return _IS_DIRECT_BILLING; }
            set { _IS_DIRECT_BILLING = value; }
        }

        private string _BILLING_HEAD;

        public string BILLING_HEAD
        {
            get { return _BILLING_HEAD; }
            set { _BILLING_HEAD = value; }
        }

        private string _is_approval_required;

        public string IS_APPROVAL_REQUIRED
        {
            get { return _is_approval_required; }
            set { _is_approval_required = value; }
        }

        private string _op_to_ip_service_id;

        public string OP_TO_IP_SERVICE_ID
        {
            get { return _op_to_ip_service_id; }
            set { _op_to_ip_service_id = value; }
        }
        private int _SERVICE_GROUP_ID;
        public int SERVICE_GROUP_ID
        {
            get { return _SERVICE_GROUP_ID; }
            set { _SERVICE_GROUP_ID = value; }
        }
        private int _SERVICE_GROUP;
        public int SERVICE_GROUP
        {
            get { return _SERVICE_GROUP; }
            set { _SERVICE_GROUP = value; }
        }
        private string _SERVICE_CLASS_NAME;
        public string SERVICE_CLASS_NAME
        {
            get { return _SERVICE_CLASS_NAME; }
            set { _SERVICE_CLASS_NAME = value; }
        }
        private int _SERVICECLASS_ID;
        public int SERVICECLASS_ID
        {
            get { return _SERVICECLASS_ID; }
            set { _SERVICECLASS_ID = value; }
        }

        /* ROW_KEY - used for doctorVisits Screen,dnt change/Duplicate it with different datatype*/
        private string _ROW_KEY;
        public string ROW_KEY
        {
            get { return _ROW_KEY; }
            set { _ROW_KEY = value; }
        }
        private string _STATUS_REMARKS;

        public string STATUS_REMARKS
        {
            get { return _STATUS_REMARKS; }
            set { _STATUS_REMARKS = value; }
        }
        private string _STATUS_DT;

        public string STATUS_DT
        {
            get { return _STATUS_DT; }
            set { _STATUS_DT = value; }
        }
        private string _STATUS_BY_NAME;
        public string STATUS_BY_NAME
        {
            get { return _STATUS_BY_NAME; }
            set { _STATUS_BY_NAME = value; }
        }
        public string IS_DOCTOR_REQUIRED { get; set; }
        private string _COMPANY_BILL_HEAD_ID = "0";

        public string COMPANY_BILL_HEAD_ID
        {
            get { return _COMPANY_BILL_HEAD_ID; }
            set { _COMPANY_BILL_HEAD_ID = value; }
        }
        private string _IS_SCHEDULE_REQUIRED;

        public string IS_SCHEDULE_REQUIRED
        {
            get { return _IS_SCHEDULE_REQUIRED; }
            set { _IS_SCHEDULE_REQUIRED = value; }
        }
        private string _VISIT_TYPE;

        public string VISIT_TYPE
        {
            get { return _VISIT_TYPE; }
            set { _VISIT_TYPE = value; }
        }
        private string _BILL_ID;

        public string BILL_ID
        {
            get { return _BILL_ID; }
            set { _BILL_ID = value; }
        }
        private string _DOCTOR_PCT;

        public string DOCTOR_PCT
        {
            get { return _DOCTOR_PCT; }
            set { _DOCTOR_PCT = value; }
        }
        private string _ORG_PCT;

        public string ORG_PCT
        {
            get { return _ORG_PCT; }
            set { _ORG_PCT = value; }
        }

        private int _ORG_PRICE;

        public int ORG_PRICE1
        {
            get { return _ORG_PRICE; }
            set { _ORG_PRICE = value; }
        }
        private int _DOCTOR_PRICE;

        public int DOCTOR_PRICE1
        {
            get { return _DOCTOR_PRICE; }
            set { _DOCTOR_PRICE = value; }
        }

        private string _IS_PRICE_EDIT;

        public string IS_PRICE_EDIT
        {
            get { return _IS_PRICE_EDIT; }
            set { _IS_PRICE_EDIT = value; }
        }
        private string applicable_for_id;

        public string APPLICABLE_FOR_ID
        {
            get { return applicable_for_id; }
            set { applicable_for_id = value; }
        }
        private string _STAT;

        public string STAT
        {
            get { return _STAT; }
            set { _STAT = value; }
        }
        private string _IS_FAVOURITE;
        public string IS_FAVOURITE
        {
            get { return _IS_FAVOURITE; }
            set { _IS_FAVOURITE = value; }
        }

        private string _TAX_PCT;
        public string TAX_PCT
        {
            get { return _TAX_PCT; }
            set { _TAX_PCT = value; }
        }
        private string _PAT_TAX;
        public string PAT_TAX
        {
            get { return _PAT_TAX; }
            set { _PAT_TAX = value; }
        }
        private string _CMP_TAX;
        public string CMP_TAX
        { 
            get { return _CMP_TAX; }
            set { _CMP_TAX = value; }
        }
        private string _TARIFF_SERVICE_ID;

        public string TARIFF_SERVICE_ID
        {
            get { return _TARIFF_SERVICE_ID; }
            set { _TARIFF_SERVICE_ID = value; }
        }
        public string SGST_TAX_PCT { get; set; }
        public string CGST_TAX_PCT { get; set; }
        public string GEN_SERVICE_NAME { get; set; }
        public string GEN_SERVICE_CODE { get; set; }

        public string CONC_RULE_PCT { get; set; }
        public string CONC_RULE_ID { get; set; }
        public string CONC_RULE_AUTH_ID { get; set; }
        public string CONC_RULE_AUTH_NAME { get; set; }
        public string AUTH_NAME { get; set; }
        public string CONC_RULE_NAME { get; set; }
        public string PHAR_LIMIT_PER { get; set; }
        public string IS_GST_APPLICABLE { get; set; }
        public string IS_TAX_INCLUDE_EXCLUDE { get; set; }
        public string SGST_PCT { get; set; }
        public string CGST_PCT { get; set; }
        public string SERVICE_TAX_PCT { get; set; }
        public string SERVICE_TAX_AMT { get; set; }
        public string SERVICE_TAX_APP { get; set; }
        
	
        public string RULE_CONC_PCT { get; set; }
        public string RULE_CONC_AMT { get; set; }

    }
}
