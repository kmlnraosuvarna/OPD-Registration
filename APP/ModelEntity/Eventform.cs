using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class Eventform : Address
    {
        private int _event_id;

        public int EVENT_ID
        {
            get { return _event_id; }
            set { _event_id = value; }
        }
        private int _event_rev_no;

        public int EVENT_REV_NO
        {
            get { return _event_rev_no; }
            set { _event_rev_no = value; }
        }
        private string _event_cd;

        private string _event_name;

        public string EVENT_NAME
        {
            get { return _event_name; }
            set { _event_name = value; }
        }
        public string EVENT_CD
        {
            get { return _event_cd; }
            set { _event_cd = value; }
        }

        private string _eft_from_date;

        public string EFT_FROM_DATE
        {
            get { return _eft_from_date; }
            set { _eft_from_date = value; }
        }
        private string _eft_to_date;

        public string EFT_TO_DATE
        {
            get { return _eft_to_date; }
            set { _eft_to_date = value; }
        }
        private int _cncsn_rule_id;

        public int CNCSN_RULE_ID
        {
            get { return _cncsn_rule_id; }
            set { _cncsn_rule_id = value; }
        }
        private int _create_by;

        public int CREATE_BY
        {
            get { return _create_by; }
            set { _create_by = value; }
        }

        private string _create_dt;

        public string CREATE_DT
        {
            get { return _create_dt; }
            set { _create_dt = value; }
        }
        private int _modify_by;

        public int MODIFY_BY
        {
            get { return _modify_by; }
            set { _modify_by = value; }
        }
        private string _modify_dt;

        public string MODIFY_DT
        {
            get { return _modify_dt; }
            set { _modify_dt = value; }
        }
        private string _record_status;

        public string RECORD_STATUS
        {
            get { return _record_status; }
            set { _record_status = value; }
        }
        private int _session_id;

        public int SESSION_ID
        {
            get { return _session_id; }
            set { _session_id = value; }
        }
        private int _event_define_by;

        public int EVENT_DEFINE_BY
        {
            get { return _event_define_by; }
            set { _event_define_by = value; }
        }
        private int _event_auth_id;

        public int EVENT_AUTH_ID
        {
            get { return _event_auth_id; }
            set { _event_auth_id = value; }
        }
        private string _cncsn_rule_name;

        public string CNCSN_RULE_NAME
        {
            get { return _cncsn_rule_name; }
            set { _cncsn_rule_name = value; }
        }

        private string _auth_name;

        public string AUTH_NAME
        {
            get { return _auth_name; }
            set { _auth_name = value; }
        }
        private string _first_name;

        public string FIRST_NAME
        {
            get { return _first_name; }
            set { _first_name = value; }
        }
        private int _fund_id;

        public int FUND_ID
        {
            get { return _fund_id; }
            set { _fund_id = value; }
        }
        private int _fund_rev_no;

        public int FUND_REV_NO
        {
            get { return _fund_rev_no; }
            set { _fund_rev_no = value; }
        }
        private string _fund_cd;

        public string FUND_CD
        {
            get { return _fund_cd; }
            set { _fund_cd = value; }
        }
        private string _fund_name;

        public string FUND_NAME
        {
            get { return _fund_name; }
            set { _fund_name = value; }
        }
        private string _fund_donar_name;

        public string FUND_DONAR_NAME
        {
            get { return _fund_donar_name; }
            set { _fund_donar_name = value; }
        }
        private int _fund_sanction_id;

        public int FUND_SANCTION_ID
        {
            get { return _fund_sanction_id; }
            set { _fund_sanction_id = value; }
        }
        private int _fund_sanction_rev_no;

        public int FUND_SANCTION_REV_NO
        {
            get { return _fund_sanction_rev_no; }
            set { _fund_sanction_rev_no = value; }
        }
        private string _fund_sanction_no;

        public string FUND_SANCTION_NO
        {
            get { return _fund_sanction_no; }
            set { _fund_sanction_no = value; }
        }
        private string _fund_sanction_dt;

        public string FUND_SANCTION_DT
        {
            get { return _fund_sanction_dt; }
            set { _fund_sanction_dt = value; }
        }
        private string _valid_from_dt;

        public string VALID_FROM_DT
        {
            get { return _valid_from_dt; }
            set { _valid_from_dt = value; }
        }
        private string _valid_to_dt;

        public string VALID_TO_DT
        {
            get { return _valid_to_dt; }
            set { _valid_to_dt = value; }
        }
        private string _fund_criteria;

        public string FUND_CRITERIA
        {
            get { return _fund_criteria; }
            set { _fund_criteria = value; }
        }
        private int _sanction_amount;

        public int SANCTION_AMOUNT
        {
            get { return _sanction_amount; }
            set { _sanction_amount = value; }
        }
        private string _sanction_amount1;

        public string SANCTION_AMOUNT1
        {
            get { return _sanction_amount1; }
            set { _sanction_amount1 = value; }
        }
        private int _utilized_amount;

        public int UTILIZED_AMOUNT
        {
            get { return _utilized_amount; }
            set { _utilized_amount = value; }
        }
        private string _utilized_amount1;

        public string UTILIZED_AMOUNT1
        {
            get { return _utilized_amount1; }
            set { _utilized_amount1 = value; }
        }
        //private int _balance_amount;

        //public int BALANCE_AMOUNT
        //{
        //    get { return _balance_amount; }
        //    set { _balance_amount = value; }
        //}
        //private int _bal_amount;

        //public int BAL_AMOUNT
        //{
        //    get { return _bal_amount; }
        //    set { _bal_amount = value; }
        //}
        //private string _balance_amount1;

        //public string BALANCE_AMOUNT1
        //{
        //    get { return _balance_amount1; }
        //    set { _balance_amount1 = value; }
        //}

        private string _fund_source_id;

        public string FUND_SOURCE_ID
        {
            get { return _fund_source_id; }
            set { _fund_source_id = value; }
        }
        private string _contact_no;

        public string CONTACT_NO
        {
            get { return _contact_no; }
            set { _contact_no = value; }
        }
        private string _fund_source_name;

        public string FUND_SOURCE_NAME
        {
            get { return _fund_source_name; }
            set { _fund_source_name = value; }
        }
        private string _umr_no;

        public string UMR_NO
        {
            get { return _umr_no; }
            set { _umr_no = value; }
        }
        private string _patient_name;

        public string PATIENT_NAME
        {
            get { return _patient_name; }
            set { _patient_name = value; }
        }
        private string _age_dob;

        public string AGE_DOB
        {
            get { return _age_dob; }
            set { _age_dob = value; }
        }
        private string _gender;

        public string GENDER
        {
            get { return _gender; }
            set { _gender = value; }
        }
        private string _occupation;

        public string OCCUPATION
        {
            get { return _occupation; }
            set { _occupation = value; }
        }
        private string _REFF_DOCTOR;

        public string REFF_DOCTOR
        {
            get { return _REFF_DOCTOR; }
            set { _REFF_DOCTOR = value; }
        }
        private string _reff_name;

        public string REFF_NAME
        {
            get { return _reff_name; }
            set { _reff_name = value; }
        }
        private string _mother_name;

        public string MOTHER_NAME
        {
            get { return _mother_name; }
            set { _mother_name = value; }
        }
        private string _patient_type;

        public string PATIENT_TYPE
        {
            get { return _patient_type; }
            set { _patient_type = value; }
        }
        private string _company_name;

        public string COMPANY_NAME
        {
            get { return _company_name; }
            set { _company_name = value; }
        }
        private string _reciept_no;

        public string RECIEPT_NO
        {
            get { return _reciept_no; }
            set { _reciept_no = value; }
        }
        private string _reciept_date;

        public string RECIEPT_DATE
        {
            get { return _reciept_date; }
            set { _reciept_date = value; }
        }
        private string _cash_amount;

        public string CASH_AMOUNT
        {
            get { return _cash_amount; }
            set { _cash_amount = value; }
        }
        private string _card_amount;

        public string CARD_AMOUNT
        {
            get { return _card_amount; }
            set { _card_amount = value; }
        }
        private string _card_expire_date;

        public string CARD_EXPIRE_DATE
        {
            get { return _card_expire_date; }
            set { _card_expire_date = value; }
        }
        private string _card_no;

        public string CARD_NO
        {
            get { return _card_no; }
            set { _card_no = value; }
        }
        private string _bank_name;

        public string BANK_NAME
        {
            get { return _bank_name; }
            set { _bank_name = value; }
        }
        private string _patient_id;

        public string PATIENT_ID
        {
            get { return _patient_id; }
            set { _patient_id = value; }
        }
        private string _transaction_id;

        public string TRANSACTION_ID
        {
            get { return _transaction_id; }
            set { _transaction_id = value; }
        }
        private string _pat_gndr_title_id;

        public string PAT_GNDR_TITLE_ID
        {
            get { return _pat_gndr_title_id; }
            set { _pat_gndr_title_id = value; }
        }
        private int _checklist_id;

        public int CHECKLIST_ID
        {
            get { return _checklist_id; }
            set { _checklist_id = value; }
        }
        private int _checklist_rev_no;

        public int CHECKLIST_REV_NO
        {
            get { return _checklist_rev_no; }
            set { _checklist_rev_no = value; }
        }
        private string _checklist_cd;

        public string CHECKLIST_CD
        {
            get { return _checklist_cd; }
            set { _checklist_cd = value; }
        }
        private string _checklist_desc;

        public string CHECKLIST_DESC
        {
            get { return _checklist_desc; }
            set { _checklist_desc = value; }
        }
        private string _MODIFIED_BY;

        public string MODIFIED_BY
        {
            get { return _MODIFIED_BY; }
            set { _MODIFIED_BY = value; }
        }

        private int _ES_REV_NO;

        public int ES_REV_NO
        {
            get { return _ES_REV_NO; }
            set { _ES_REV_NO = value; }
        }
        private string _EC_CD;

        public string EC_CD
        {
            get { return _EC_CD; }
            set { _EC_CD = value; }
        }
        private string _EC_DESC;

        public string EC_DESC
        {
            get { return _EC_DESC; }
            set { _EC_DESC = value; }
        }
        private string _INCOME_FROM;

        public string INCOME_FROM
        {
            get { return _INCOME_FROM; }
            set { _INCOME_FROM = value; }
        }
        private string _INCOME_TO;

        public string INCOME_TO
        {
            get { return _INCOME_TO; }
            set { _INCOME_TO = value; }
        }
        private int _RULE_ID;

        public int RULE_ID
        {
            get { return _RULE_ID; }
            set { _RULE_ID = value; }
        }
        private int _ES_ID;

        public int ES_ID
        {
            get { return _ES_ID; }
            set { _ES_ID = value; }
        }
        private int _INCIDENT_TYPE_ID;

        public int INCIDENT_TYPE_ID
        {
            get { return _INCIDENT_TYPE_ID; }
            set { _INCIDENT_TYPE_ID = value; }
        }
        private int _INCIDENT_TYPE_REV_NO;

        public int INCIDENT_TYPE_REV_NO
        {
            get { return _INCIDENT_TYPE_REV_NO; }
            set { _INCIDENT_TYPE_REV_NO = value; }
        }
        private string _INCIDENT_TYPE_CD;

        public string INCIDENT_TYPE_CD
        {
            get { return _INCIDENT_TYPE_CD; }
            set { _INCIDENT_TYPE_CD = value; }
        }
        private string _INCIDENT_TYPE_DESC;

        public string INCIDENT_TYPE_DESC
        {
            get { return _INCIDENT_TYPE_DESC; }
            set { _INCIDENT_TYPE_DESC = value; }
        }
        private int _INCIDENT_CATEGORY_ID;

        public int INCIDENT_CATEGORY_ID
        {
            get { return _INCIDENT_CATEGORY_ID; }
            set { _INCIDENT_CATEGORY_ID = value; }
        }
        private int _APPROVE_BY;

        public int APPROVE_BY
        {
            get { return _APPROVE_BY; }
            set { _APPROVE_BY = value; }
        }
        private string _APPROVE_DT;

        public string APPROVE_DT
        {
            get { return _APPROVE_DT; }
            set { _APPROVE_DT = value; }
        }
        private string _CATEGORYNAME;

        public string CATEGORYNAME
        {
            get { return _CATEGORYNAME; }
            set { _CATEGORYNAME = value; }
        }
        private int _LOC_ID;

        public int LOC_ID
        {
            get { return _LOC_ID; }
            set { _LOC_ID = value; }
        }
        private int _GRP_ID;

        public int GRP_ID
        {
            get { return _GRP_ID; }
            set { _GRP_ID = value; }
        }
        private string _APPROVED_BY;

        public string APPROVED_BY
        {
            get { return _APPROVED_BY; }
            set { _APPROVED_BY = value; }
        }
        private string _MESSAGE;

        public string MESSAGE
        {
            get { return _MESSAGE; }
            set { _MESSAGE = value; }
        }
        private int _REQUEST_ID;
        public int REQUEST_ID
        {
            set { _REQUEST_ID = value; }
            get { return _REQUEST_ID; }
        }
        private int _REQUEST_REV_NO;
        public int REQUEST_REV_NO
        {
            set { _REQUEST_REV_NO = value; }
            get { return _REQUEST_REV_NO; }
        }
        private int _PES_ID;
        public int PES_ID
        {
            set { _PES_ID = value; }
            get { return _PES_ID; }
        }
        private string _REQUEST_NO;
        public string REQUEST_NO
        {
            set { _REQUEST_NO = value; }
            get { return _REQUEST_NO; }
        }
        private int _AUTHORIZED_BY;
        public int AUTHORIZED_BY
        {
            set { _AUTHORIZED_BY = value; }
            get { return _AUTHORIZED_BY; }
        }
        private string _REMARKS;
        public string REMARKS
        {
            set { _REMARKS = value; }
            get { return _REMARKS; }
        }
        private int _REQUEST_STATUS_ID;
        public int REQUEST_STATUS_ID
        {
            set { _REQUEST_STATUS_ID = value; }
            get { return _REQUEST_STATUS_ID; }
        }
        private string _REQUEST_DT;
        public string REQUEST_DT
        {
            set { _REQUEST_DT = value; }
            get { return _REQUEST_DT; }
        }

        private string _ADMN_NO;
        public string ADMN_NO
        {
            set { _ADMN_NO = value; }
            get { return _ADMN_NO; }
        }






        private string _AUTHORIZATION;
        public string AUTHORIZATION
        {
            set { _AUTHORIZATION = value; }
            get { return _AUTHORIZATION; }
        }

        private string _DD_ISSUE_BRANCH_NAME;
        public string DD_ISSUE_BRANCH_NAME
        {
            set { _DD_ISSUE_BRANCH_NAME = value; }
            get { return _DD_ISSUE_BRANCH_NAME; }
        }
        private string _DD_ISSUE_BANK_NAME;
        public string DD_ISSUE_BANK_NAME
        {
            set { _DD_ISSUE_BANK_NAME = value; }
            get { return _DD_ISSUE_BANK_NAME; }
        }

        private string _DC_ISSUE_BANK_ID;
        public string DC_ISSUE_BANK_ID
        {
            set { _DC_ISSUE_BANK_ID = value; }
            get { return _DC_ISSUE_BANK_ID; }
        }
        private string _CC_ISSUE_BANK_ID;
        public string CC_ISSUE_BANK_ID
        {
            set { _CC_ISSUE_BANK_ID = value; }
            get { return _CC_ISSUE_BANK_ID; }
        }

        private string _SERVICE_CHARGE_AMOUNT;
        public string SERVICE_CHARGE_AMOUNT
        {
            set { _SERVICE_CHARGE_AMOUNT = value; }
            get { return _SERVICE_CHARGE_AMOUNT; }
        }
        private string _SERVICE_CHARGE_PERCENT;
        public string SERVICE_CHARGE_PERCENT
        {
            set { _SERVICE_CHARGE_PERCENT = value; }
            get { return _SERVICE_CHARGE_PERCENT; }
        }

        private string _CHANGE_AMOUNT;
        public string CHANGE_AMOUNT
        {
            set { _CHANGE_AMOUNT = value; }
            get { return _CHANGE_AMOUNT; }
        }
        private string _TENDERED_AMOUNT;
        public string TENDERED_AMOUNT
        {
            set { _TENDERED_AMOUNT = value; }
            get { return _TENDERED_AMOUNT; }
        }

        private string _ENTERED_AMOUNT;
        public string ENTERED_AMOUNT
        {
            set { _ENTERED_AMOUNT = value; }
            get { return _ENTERED_AMOUNT; }
        }
        private string _EX_RATE;
        public string EX_RATE
        {
            set { _EX_RATE = value; }
            get { return _EX_RATE; }
        }

        private string _CURRENCY_ID;
        public string CURRENCY_ID
        {
            set { _CURRENCY_ID = value; }
            get { return _CURRENCY_ID; }
        }
        private string _CURRENCY_NAME;
        public string CURRENCY_NAME
        {
            set { _CURRENCY_NAME = value; }
            get { return _CURRENCY_NAME; }
        }

        private string _CQ_BANK_NAME;
        public string CQ_BANK_NAME
        {
            set { _CQ_BANK_NAME = value; }
            get { return _CQ_BANK_NAME; }
        }
        private string _PAYMENT_MODE_ID;
        public string PAYMENT_MODE_ID
        {
            set { _PAYMENT_MODE_ID = value; }
            get { return _PAYMENT_MODE_ID; }
        }

        private string _PAYMENT_TYPE;
        public string PAYMENT_TYPE
        {
            set { _PAYMENT_TYPE = value; }
            get { return _PAYMENT_TYPE; }
        }
        private string _CARD_TYPE;
        public string CARD_TYPE
        {
            set { _CARD_TYPE = value; }
            get { return _CARD_TYPE; }
        }

        private string _DC_CARD_NO;
        public string DC_CARD_NO
        {
            set { _DC_CARD_NO = value; }
            get { return _DC_CARD_NO; }
        }
        private string _CC_CARD_HOLDER_ADDRESS;
        public string CC_CARD_HOLDER_ADDRESS
        {
            set { _CC_CARD_HOLDER_ADDRESS = value; }
            get { return _CC_CARD_HOLDER_ADDRESS; }
        }



        private string _DC_APPROVAL_NO;
        public string DC_APPROVAL_NO
        {
            set { _DC_APPROVAL_NO = value; }
            get { return _DC_APPROVAL_NO; }
        }

        private string _DC_CARD_HOLDER_NAME;
        public string DC_CARD_HOLDER_NAME
        {
            set { _DC_CARD_HOLDER_NAME = value; }
            get { return _DC_CARD_HOLDER_NAME; }
        }
        private string _DC_EDC_MACHINE;
        public string DC_EDC_MACHINE
        {
            set { _DC_EDC_MACHINE = value; }
            get { return _DC_EDC_MACHINE; }
        }

        private string _DC_CARD_TYPE_ID;
        public string DC_CARD_TYPE_ID
        {
            set { _DC_CARD_TYPE_ID = value; }
            get { return _DC_CARD_TYPE_ID; }
        }
        private string _DC_ISSUE_BANK_NAME;
        public string DC_ISSUE_BANK_NAME
        {
            set { _DC_ISSUE_BANK_NAME = value; }
            get { return _DC_ISSUE_BANK_NAME; }
        }

        private string _DC_CARD_HOLDER_ADDRESS;
        public string DC_CARD_HOLDER_ADDRESS
        {
            set { _DC_CARD_HOLDER_ADDRESS = value; }
            get { return _DC_CARD_HOLDER_ADDRESS; }
        }
        private string _DD_NO;
        public string DD_NO
        {
            set { _DD_NO = value; }
            get { return _DD_NO; }
        }

        private string _DD_ISSUE_BANK_ID;
        public string DD_ISSUE_BANK_ID
        {
            set { _DD_ISSUE_BANK_ID = value; }
            get { return _DD_ISSUE_BANK_ID; }
        }
        private string _DD_ISSUE_BRANCH_ID;
        public string DD_ISSUE_BRANCH_ID
        {
            set { _DD_ISSUE_BRANCH_ID = value; }
            get { return _DD_ISSUE_BRANCH_ID; }
        }

        private string _DD_SERVICE_BANK_ID;
        public string DD_SERVICE_BANK_ID
        {
            set { _DD_SERVICE_BANK_ID = value; }
            get { return _DD_SERVICE_BANK_ID; }
        }





        private string _DD_SERVICE_BRANCH_ID;
        public string DD_SERVICE_BRANCH_ID
        {
            set { _DD_SERVICE_BRANCH_ID = value; }
            get { return _DD_SERVICE_BRANCH_ID; }
        }
        private string _CQ_CHEQUE_NO;
        public string CQ_CHEQUE_NO
        {
            set { _CQ_CHEQUE_NO = value; }
            get { return _CQ_CHEQUE_NO; }
        }

        private string _CQ_ISSUER_NAME;
        public string CQ_ISSUER_NAME
        {
            set { _CQ_ISSUER_NAME = value; }
            get { return _CQ_ISSUER_NAME; }
        }
        private string _CQ_BANK_ID;
        public string CQ_BANK_ID
        {
            set { _CQ_BANK_ID = value; }
            get { return _CQ_BANK_ID; }
        }

        private string _CQ_BRANCH_ID;
        public string CQ_BRANCH_ID
        {
            set { _CQ_BRANCH_ID = value; }
            get { return _CQ_BRANCH_ID; }
        }
        private string _PAYMENT_TYPE_ID;
        public string PAYMENT_TYPE_ID
        {
            set { _PAYMENT_TYPE_ID = value; }
            get { return _PAYMENT_TYPE_ID; }
        }

        private string _Payment_Type_NAME;
        public string Payment_Type_NAME
        {
            set { _Payment_Type_NAME = value; }
            get { return _Payment_Type_NAME; }
        }


        private string _DOB;
        public string DOB
        {
            set { _DOB = value; }
            get { return _DOB; }
        }
        private string _RES_PERSON_REL_ID;
        public string RES_PERSON_REL_ID
        {
            set { _RES_PERSON_REL_ID = value; }
            get { return _RES_PERSON_REL_ID; }
        }

        private string _RESPOSIBLE_PERSON_NAME;
        public string RESPOSIBLE_PERSON_NAME
        {
            set { _RESPOSIBLE_PERSON_NAME = value; }
            get { return _RESPOSIBLE_PERSON_NAME; }
        }
        private string _RES_PERSON_NAME;
        public string RES_PERSON_NAME
        {
            set { _RES_PERSON_NAME = value; }
            get { return _RES_PERSON_NAME; }
        }

        private string _TOTAL_ADVANCE;
        public string TOTAL_ADVANCE
        {
            set { _TOTAL_ADVANCE = value; }
            get { return _TOTAL_ADVANCE; }
        }


        private string _REMAINING_AMOUNT;
        public string REMAINING_AMOUNT
        {
            set { _REMAINING_AMOUNT = value; }
            get { return _REMAINING_AMOUNT; }
        }


        private string _CC_CARD_NO;
        public string CC_CARD_NO
        {
            set { _CC_CARD_NO = value; }
            get { return _CC_CARD_NO; }
        }
        private string _CC_APPROVAL_NO;
        public string CC_APPROVAL_NO
        {
            set { _CC_APPROVAL_NO = value; }
            get { return _CC_APPROVAL_NO; }
        }

        private string _CC_CARD_HOLDER_NAME;
        public string CC_CARD_HOLDER_NAME
        {
            set { _CC_CARD_HOLDER_NAME = value; }
            get { return _CC_CARD_HOLDER_NAME; }
        }
        private string _CC_CARD_TYPE_NAME;
        public string CC_CARD_TYPE_NAME
        {
            set { _CC_CARD_TYPE_NAME = value; }
            get { return _CC_CARD_TYPE_NAME; }
        }

        private string _DC_CARD_TYPE_NAME;
        public string DC_CARD_TYPE_NAME
        {
            set { _DC_CARD_TYPE_NAME = value; }
            get { return _DC_CARD_TYPE_NAME; }
        }

        private string _CC_ISSUE_BANK_NAME;
        public string CC_ISSUE_BANK_NAME
        {
            set { _CC_ISSUE_BANK_NAME = value; }
            get { return _CC_ISSUE_BANK_NAME; }
        }



        private string _CC_VALID_TO_DT;
        public string CC_VALID_TO_DT
        {
            set { _CC_VALID_TO_DT = value; }
            get { return _CC_VALID_TO_DT; }
        }
        private string _DC_VALID_TO_DT;
        public string DC_VALID_TO_DT
        {
            set { _DC_VALID_TO_DT = value; }
            get { return _DC_VALID_TO_DT; }
        }

        private string _DD_VALID_TO_DT;
        public string DD_VALID_TO_DT
        {
            set { _DD_VALID_TO_DT = value; }
            get { return _DD_VALID_TO_DT; }
        }
        private string _CQ_VALID_TO_DT;
        public string CQ_VALID_TO_DT
        {
            set { _CQ_VALID_TO_DT = value; }
            get { return _CQ_VALID_TO_DT; }
        }

        private string _VH_VALID_TO_DT;
        public string VH_VALID_TO_DT
        {
            set { _VH_VALID_TO_DT = value; }
            get { return _VH_VALID_TO_DT; }
        }

        private string fund_amount;
        public string FUND_AMOUNT
        {
            set { fund_amount = value; }
            get { return fund_amount; }
        }



        private int template_rev_no;
        public int TEMPLATE_REV_NO
        {
            set { template_rev_no = value; }
            get { return template_rev_no; }
        }

        private string template_cd;
        public string TEMPLATE_CD
        {
            set { template_cd = value; }
            get { return template_cd; }
        }

        private string template_name;
        public string TEMPLATE_NAME
        {
            set { template_name = value; }
            get { return template_name; }
        }

        private string template_desc;
        public string TEMPLATE_DESC
        {
            set { template_desc = value; }
            get { return template_desc; }
        }
        private int template_type_id;
        public int TEMPLATE_TYPE_ID
        {
            set { template_type_id = value; }
            get { return template_type_id; }
        }
        private int org_id;
        public int ORG_ID
        {
            set { org_id = value; }
            get { return org_id; }
        }
        private string form_meta_text;
        public string FORM_META_TEXT
        {
            set { form_meta_text = value; }
            get { return form_meta_text; }
        }

        private int template_id;
        public int TEMPLATE_ID
        {
            set { template_id = value; }
            get { return template_id; }
        }
        private string template_type_name;
        public string TEMPLATE_TYPE_NAME
        {
            set { template_type_name = value; }
            get { return template_type_name; }
        }

        private string xml;
        public string XML
        {
            set { xml = value; }
            get { return xml; }
        }
        private string _EFFECT_FROM_DT;
        public string EFFECT_FROM_DT
        {
            set { _EFFECT_FROM_DT = value; }
            get { return _EFFECT_FROM_DT; }
        }

        private string _EFFECT_TO_DT;
        public string EFFECT_TO_DT
        {
            set { _EFFECT_TO_DT = value; }
            get { return _EFFECT_TO_DT; }
        }

        private string donatee_name;
        public string DONATEE_NAME
        {
            set { donatee_name = value; }
            get { return donatee_name; }
        }

        private string donatee_organization_name;
        public string DONATEE_ORGANIZATION_NAME
        {
            set { donatee_organization_name = value; }
            get { return donatee_organization_name; }
        }

        private string city_id;
        public string CITY_ID
        {
            set { city_id = value; }
            get { return city_id; }
        }
        private string city_name;
        public string CITY_NAME
        {
            set { city_name = value; }
            get { return city_name; }
        }
        private string state_id;
        public string STATE_ID
        {
            set { state_id = value; }
            get { return state_id; }
        }
        private string state_name;
        public string STATE_NAME
        {
            set { state_name = value; }
            get { return state_name; }
        }
        private string country_id;
        public string COUNTRY_ID
        {
            set { country_id = value; }
            get { return country_id; }
        }
        private string country_name;
        public string COUNTRY_NAME
        {
            set { country_name = value; }
            get { return country_name; }
        }
        private string district_id;
        public string DISTRICT_ID
        {
            set { district_id = value; }
            get { return district_id; }
        }
        private string district_name;
        public string DISTRICT_NAME
        {
            set { district_name = value; }
            get { return district_name; }
        }
        private string area_id;
        public string AREA_ID
        {
            set { area_id = value; }
            get { return area_id; }
        }
        private string area_name;
        public string AREA_NAME
        {
            set { area_name = value; }
            get { return area_name; }
        }

        private int fcat_tariff_rev_no;
        public int FCAT_TARIFF_REV_NO
        {
            set { fcat_tariff_rev_no = value; }
            get { return fcat_tariff_rev_no; }
        }

        private int foreign_category_id;
        public int FOREIGN_CATEGORY_ID
        {
            set { foreign_category_id = value; }
            get { return foreign_category_id; }
        }
        private int tariff_id;
        public int TARIFF_ID
        {
            set { tariff_id = value; }
            get { return tariff_id; }
        }
        private string effect_from_date;
        public string EFFECT_FROM_DATE
        {
            set { effect_from_date = value; }
            get { return effect_from_date; }
        }
        private string effect_to_date;
        public string EFFECT_TO_DATE
        {
            set { effect_to_date = value; }
            get { return effect_to_date; }
        }
        private int fcat_tariff_id;
        public int FCAT_TARIFF_ID
        {
            set { fcat_tariff_id = value; }
            get { return fcat_tariff_id; }
        }
        private string foreign_categories_name;
        public string FOREIGN_CATEGORIES_NAME
        {
            set { foreign_categories_name = value; }
            get { return foreign_categories_name; }
        }
        private string tariff_name;
        public string TARIFF_NAME
        {
            set { tariff_name = value; }
            get { return tariff_name; }
        }
        private string created_by;
        public string CREATED_BY
        {
            set { created_by = value; }
            get { return created_by; }
        }
        private string document_paymode_rev_no;
        public string DOCUMENT_PAYMODE_REV_NO
        {
            set { document_paymode_rev_no = value; }
            get { return document_paymode_rev_no; }
        }
        private string doc_id;
        public string DOC_ID
        {
            set { doc_id = value; }
            get { return doc_id; }
        }
        private string doc_rev_no;
        public string DOC_REV_NO
        {
            set { doc_rev_no = value; }
            get { return doc_rev_no; }
        }
        private string payment_mode_rev_no;
        public string PAYMENT_MODE_REV_NO
        {
            set { payment_mode_rev_no = value; }
            get { return payment_mode_rev_no; }
        }
        private int document_paymode_id;
        public int DOCUMENT_PAYMODE_ID
        {
            set { document_paymode_id = value; }
            get { return document_paymode_id; }
        }
        private string payment_mode_name;
        public string PAYMENT_MODE_NAME
        {
            set { payment_mode_name = value; }
            get { return payment_mode_name; }
        }
        private string transaction_no;
        public string TRANSACTION_NO
        {
            set { transaction_no = value; }
            get { return transaction_no; }
        }

        private string transaction_dt;
        public string TRANSACTION_DT
        {
            set { transaction_dt = value; }
            get { return transaction_dt; }
        }
        private string transaction_type;
        public string TRANSACTION_TYPE
        {
            set { transaction_type = value; }
            get { return transaction_type; }
        }
        private string amount;
        public string AMOUNT
        {
            set { amount = value; }
            get { return amount; }
        }
        private string transaction_by;
        public string TRANSACTION_BY
        {
            set { transaction_by = value; }
            get { return transaction_by; }
        }
        private string foreign_categories_id;
        public string FOREIGN_CATEGORIES_ID
        {
            set { foreign_categories_id = value; }
            get { return foreign_categories_id; }
        }
        private string foreign_categories_cd;
        public string FOREIGN_CATEGORIES_CD
        {
            set { foreign_categories_cd = value; }
            get { return foreign_categories_cd; }
        }

        private string foreign_categories_desc;
        public string FOREIGN_CATEGORIES_DESC
        {
            set { foreign_categories_desc = value; }
            get { return foreign_categories_desc; }
        }

        private string _CC_AUTH_CD;
        public string CC_AUTH_CD
        {
            set { _CC_AUTH_CD = value; }
            get { return _CC_AUTH_CD; }
        }

        private string _DC_AUTH_CD;
        public string DC_AUTH_CD
        {
            set { _DC_AUTH_CD = value; }
            get { return _DC_AUTH_CD; }
        }
        private string _ADV_PAT_MOBILE_NO;
        public string ADV_PAT_MOBILE_NO
        {
            set { _ADV_PAT_MOBILE_NO = value; }
            get { return _ADV_PAT_MOBILE_NO; }
        }
        private string _BILL_SRV_SCH_ID;
        public string BILL_SRV_SCH_ID
        {
            set { _BILL_SRV_SCH_ID = value; }
            get { return _BILL_SRV_SCH_ID; }
        }
        private string _BILL_SRV_ID;
        public string BILL_SRV_ID
        {
            set { _BILL_SRV_ID = value; }
            get { return _BILL_SRV_ID; }
        }
        private string _SCH_DT;
        public string SCH_DT
        {
            set { _SCH_DT = value; }
            get { return _SCH_DT; }
        }

        private string _INCIDENT_TYPE_NAME;
        public string INCIDENT_TYPE_NAME
        {
            set { _INCIDENT_TYPE_NAME = value; }
            get { return _INCIDENT_TYPE_NAME; }
        }
        private string _CQ_ISSUE_BANK_NAME;
        public string CQ_ISSUE_BANK_NAME
        {
            set { _CQ_ISSUE_BANK_NAME = value; }
            get { return _CQ_ISSUE_BANK_NAME; }
        }

        private int _LANGUAGE_ID;
        public int LANGUAGE_ID
        {
            set { _LANGUAGE_ID = value; }
            get { return _LANGUAGE_ID; }
        }

        private string _ATTACHMENT_DESCRIPTION;
        public string ATTACHMENT_DESCRIPTION
        {
            set { _ATTACHMENT_DESCRIPTION = value; }
            get { return _ATTACHMENT_DESCRIPTION; }
        }

        private string _IMAGE_PATH;
        public string IMAGE_PATH
        {
            set { _IMAGE_PATH = value; }
            get { return _IMAGE_PATH; }
        }
        private byte[] _IMAGEDATA;

        public byte[] IMAGEDATA
        {
            get { return _IMAGEDATA; }
            set { _IMAGEDATA = value; }
        }
        private string _patient_class_id;
        public string PATIENT_CLASS_ID
        {
            set { _patient_class_id = value; }
            get { return _patient_class_id; }
        }
        private string _billinghead_id;
        public string BILLINGHEAD_ID
        {
            set { _billinghead_id = value; }
            get { return _billinghead_id; }
        }

        private string _billinghead_name;
        public string BILLINGHEAD_NAME
        {
            set { _billinghead_name = value; }
            get { return _billinghead_name; }
        }
        private string _display_order;
        public string DISPLAY_ORDER
        {
            set { _display_order = value; }
            get { return _display_order; }
        }
        private string id;
        public string ID
        {
            set { id = value; }
            get { return id; }
        }
        private string ward_desc;
        public string WARD_DESC
        {
            set { ward_desc = value; }
            get { return ward_desc; }
        }










        /*er*/

        private int ward_id;
        public int WARD_ID
        {
            set { ward_id = value; }
            get { return ward_id; }
        }
        private int room_id;
        public int ROOM_ID
        {
            set { room_id = value; }
            get { return room_id; }
        }
        private string room_name;
        public string ROOM_NAME
        {
            set { room_name = value; }
            get { return room_name; }
        }
        private string bed_name;
        public string BED_NAME
        {
            set { bed_name = value; }
            get { return bed_name; }
        }
        private string from_dt;
        public string FROM_DT
        {
            set { from_dt = value; }
            get { return from_dt; }
        }
        private int bed_id;
        public int BED_ID
        {
            set { bed_id = value; }
            get { return bed_id; }
        }





        private int ip_bed_mngmnt_id;
        public int IP_BED_MNGMNT_ID
        {
            set { ip_bed_mngmnt_id = value; }
            get { return ip_bed_mngmnt_id; }
        }
        private int ip_tran_type_id;
        public int IP_TRAN_TYPE_ID
        {
            set { ip_tran_type_id = value; }
            get { return ip_tran_type_id; }
        }
        private int ip_admn_id;
        public int IP_ADMN_ID
        {
            set { ip_admn_id = value; }
            get { return ip_admn_id; }
        }
        private int ip_ward_id;
        public int IP_WARD_ID
        {
            set { ip_ward_id = value; }
            get { return ip_ward_id; }
        }
        private int ip_treated_ward_id;
        public int IP_TREATED_WARD_ID
        {
            set { ip_treated_ward_id = value; }
            get { return ip_treated_ward_id; }
        }
        private int ip_bed_req_id;
        public int IP_BED_REQ_ID
        {
            set { ip_bed_req_id = value; }
            get { return ip_bed_req_id; }
        }
        private int ip_from_room_id;
        public int IP_FROM_ROOM_ID
        {
            set { ip_from_room_id = value; }
            get { return ip_from_room_id; }
        }
        private int ip_from_treated_ward_id;
        public int IP_FROM_TREATED_WARD_ID
        {
            set { ip_from_treated_ward_id = value; }
            get { return ip_from_treated_ward_id; }
        }
        private int ip_from_bed_status_id;
        public int IP_FROM_BED_STATUS_ID
        {
            set { ip_from_bed_status_id = value; }
            get { return ip_from_bed_status_id; }
        }
        private int ip_bed_status_id;
        public int IP_BED_STATUS_ID
        {
            set { ip_bed_status_id = value; }
            get { return ip_bed_status_id; }
        }
        private int ip_room_id;
        public int IP_ROOM_ID
        {
            set { ip_room_id = value; }
            get { return ip_room_id; }
        }
        private int ip_bed_id;
        public int IP_BED_ID
        {
            set { ip_bed_id = value; }
            get { return ip_bed_id; }
        }
        private int ip_auth_by_id;
        public int IP_AUTH_BY_ID
        {
            set { ip_auth_by_id = value; }
            get { return ip_auth_by_id; }
        }
        private int ip_eminiti_id;
        public int IP_EMINITI_ID
        {
            set { ip_eminiti_id = value; }
            get { return ip_eminiti_id; }
        }
        private int ip_faceing_id;
        public int IP_FACEING_ID
        {
            set { ip_faceing_id = value; }
            get { return ip_faceing_id; }
        }
        private int ip_from_ward_id;
        public int IP_FROM_WARD_ID
        {
            set { ip_from_ward_id = value; }
            get { return ip_from_ward_id; }
        }
        private int ip_bed_mngmnt_dt;
        public int IP_BED_MNGMNT_DT
        {
            set { ip_bed_mngmnt_dt = value; }
            get { return ip_bed_mngmnt_dt; }
        }
        private string ip_tran_dt;
        public string IP_TRAN_DT
        {
            set { ip_tran_dt = value; }
            get { return ip_tran_dt; }
        }
        private int ip_bed_release_dt;
        public int IP_BED_RELEASE_DT
        {
            set { ip_bed_release_dt = value; }
            get { return ip_bed_release_dt; }
        }
        private string ip_bed_mngmnt_no;
        public string IP_BED_MNGMNT_NO
        {
            set { ip_bed_mngmnt_no = value; }
            get { return ip_bed_mngmnt_no; }
        }
        private string ip_umr_no;
        public string IP_UMR_NO
        {
            set { ip_umr_no = value; }
            get { return ip_umr_no; }
        }
        private string ip_remarks;
        public string IP_REMARKS
        {
            set { ip_remarks = value; }
            get { return ip_remarks; }
        }
        private string ip_is_oxygen;
        public string IP_IS_OXYGEN
        {
            set { ip_is_oxygen = value; }
            get { return ip_is_oxygen; }
        }
        private string ip_is_suction;
        public string IP_IS_SUCTION
        {
            set { ip_is_suction = value; }
            get { return ip_is_suction; }
        }
        private string ip_is_windowside;
        public string IP_IS_WINDOWSIDE
        {
            set { ip_is_windowside = value; }
            get { return ip_is_windowside; }
        }
        private string ip_is_retain_curr_bed;
        public string IP_IS_RETAIN_CURR_BED
        {
            set { ip_is_retain_curr_bed = value; }
            get { return ip_is_retain_curr_bed; }
        }
        private int op_status;
        public int OP_STATUS
        {
            set { op_status = value; }
            get { return op_status; }
        }
        private int ip_transfer_mode_id;
        public int IP_TRANSFER_MODE_ID
        {
            set { ip_transfer_mode_id = value; }
            get { return ip_transfer_mode_id; }
        }
        private string ip_item_info;
        public string IP_ITEM_INFO
        {
            set { ip_item_info = value; }
            get { return ip_item_info; }
        }
        private string ip_is_change_treated_ward;
        public string IP_IS_CHANGE_TREATED_WARD
        {
            set { ip_is_change_treated_ward = value; }
            get { return ip_is_change_treated_ward; }
        }
        private int ip_treated_ward_reason_id;
        public int IP_TREATED_WARD_REASON_ID
        {
            set { ip_treated_ward_reason_id = value; }
            get { return ip_treated_ward_reason_id; }
        }
        private int ip_reserved_bed_id;
        public int IP_RESERVED_BED_ID
        {
            set { ip_reserved_bed_id = value; }
            get { return ip_reserved_bed_id; }
        }
        private string ip_ack_dt;
        public string IP_ACK_DT
        {
            set { ip_ack_dt = value; }
            get { return ip_ack_dt; }
        }
        private string ip_ack_notes;
        public string IP_ACK_NOTES
        {
            set { ip_ack_notes = value; }
            get { return ip_ack_notes; }
        }
        private int ip_cancel_by_id;
        public int IP_CANCEL_BY_ID
        {
            set { ip_cancel_by_id = value; }
            get { return ip_cancel_by_id; }
        }
        private int ip_cancel_dt;
        public int IP_CANCEL_DT
        {
            set { ip_cancel_dt = value; }
            get { return ip_cancel_dt; }
        }
        private string ip_cancel_notes;
        public string IP_CANCEL_NOTES
        {
            set { ip_cancel_notes = value; }
            get { return ip_cancel_notes; }
        }
        private int op_count;
        public int OP_COUNT
        {
            set { op_count = value; }
            get { return op_count; }
        }
        private string ip_pat_admn_id;
        public string IP_PAT_ADMN_ID
        {
            set { ip_pat_admn_id = value; }
            get { return ip_pat_admn_id; }
        }
        private int admn_id;
        public int ADMN_ID
        {
            set { admn_id = value; }
            get { return admn_id; }
        }
        private string ip_from_bed_id;
        public string IP_FROM_BED_ID
        {
            set { ip_from_bed_id = value; }
            get { return ip_from_bed_id; }
        }
        private int tran_type_id;
        public int TRAN_TYPE_ID
        {
            set { tran_type_id = value; }
            get { return tran_type_id; }
        }
        private string ip_er_no;
        public string IP_ER_NO
        {
            set { ip_er_no = value; }
            get { return ip_er_no; }
        }
        private int op_bed_mngmnt_id;
        public int OP_BED_MNGMNT_ID
        {
            set { op_bed_mngmnt_id = value; }
            get { return op_bed_mngmnt_id; }
        }


        private string _FEEDBACK_ID;
        public string FEEDBACK_ID
        {
            set { _FEEDBACK_ID = value; }
            get { return _FEEDBACK_ID; }
        }


        private string _FEEDBACK_CD;
        public string FEEDBACK_CD
        {
            set { _FEEDBACK_CD = value; }
            get { return _FEEDBACK_CD; }
        }

        private string _NOTES;
        public string NOTES
        {
            set { _NOTES = value; }
            get { return _NOTES; }
        }


        private string _SUBMIT_TO;
        public string SUBMIT_TO
        {
            set { _SUBMIT_TO = value; }
            get { return _SUBMIT_TO; }
        }
        private string _IS_SUBMITTED;
        public string IS_SUBMITTED
        {
            set { _IS_SUBMITTED = value; }
            get { return _IS_SUBMITTED; }
        }
        private string _SUBMIT_REMARKS;
        public string SUBMIT_REMARKS
        {
            set { _SUBMIT_REMARKS = value; }
            get { return _SUBMIT_REMARKS; }
        }
        private int _IP_ADMN_CASE_TYPE_ID;

        public int IP_ADMN_CASE_TYPE_ID
        {
            get { return _IP_ADMN_CASE_TYPE_ID; }
            set { _IP_ADMN_CASE_TYPE_ID = value; }
        }

        private string _BILL_NO;

        public string BILL_NO
        {
            get { return _BILL_NO; }
            set { _BILL_NO = value; }
        }

        private int _BILL_ID;

        public int BILL_ID
        {
            get { return _BILL_ID; }
            set { _BILL_ID = value; }
        }

        private string _BILL_DATE;

        public string BILL_DATE
        {
            get { return _BILL_DATE; }
            set { _BILL_DATE = value; }
        }

        private string _PACKAGE_NAME;

        public string PACKAGE_NAME
        {
            get { return _PACKAGE_NAME; }
            set { _PACKAGE_NAME = value; }
        }

        private string _CRITERIA;

        public string CRITERIA
        {
            get { return _CRITERIA; }
            set { _CRITERIA = value; }
        }
        private string _COMMENTS;

        public string COMMENTS
        {
            get { return _COMMENTS; }
            set { _COMMENTS = value; }
        }
        private string total_advance_amount;
        public string TOTAL_ADVANCE_AMOUNT
        {
            get { return total_advance_amount; }
            set { total_advance_amount = value; }
        }

        private string total_utilized_amount;

        public string TOTAL_UTILIZED_AMOUNT
        {
            get { return total_utilized_amount; }
            set { total_utilized_amount = value; }
        }
        private string _CC_BANK_NAME;

        public string CC_BANK_NAME
        {
            get { return _CC_BANK_NAME; }
            set { _CC_BANK_NAME = value; }
        }

        private string _CQ_DATE;

        public string CQ_DATE
        {
            get { return _CQ_DATE; }
            set { _CQ_DATE = value; }
        }
        private string _CQ_CHEQUE_REALIZATION_DT;

        public string CQ_CHEQUE_REALIZATION_DT
        {
            get { return _CQ_CHEQUE_REALIZATION_DT; }
            set { _CQ_CHEQUE_REALIZATION_DT = value; }
        }

       
    }
}
