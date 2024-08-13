using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class DOCTOR : CommonPropeties
    {



        public int VISIT_TYPE_ID { get; set; }

        private int id = 0;
        public int ID
        {
            get { return id; }
            set { id = value; }
        }

       
        private string _visit_type_name = string.Empty;
        public string VISIT_TYPE_NAME
        {
            get { return _visit_type_name; }
            set { _visit_type_name = value; }
        }

        private int _pkg_cons_id_rev_no = 0;
        public int PKG_CONS_ID_REV_NO
        {
            get { return _pkg_cons_id_rev_no; }
            set { _pkg_cons_id_rev_no = value; }
        }
        private int _pkg_cons_id=0;
        public int PKG_CONS_ID
        {
            get { return _pkg_cons_id; }
            set { _pkg_cons_id = value; }
        }
            


        private string _ISACCEPT_INSURANCE;
        public string ISACCEPT_INSURANCE
        {
            get { return _ISACCEPT_INSURANCE; }
            set { _ISACCEPT_INSURANCE = value; }
        }
        private string _DOCTOR_TYPE_NAME;

        public string DOCTOR_TYPE_NAME
        {
            get { return _DOCTOR_TYPE_NAME; }
            set { _DOCTOR_TYPE_NAME = value; }
        }
        private string _MULTIDOCID;

        public string MULTIDOCID
        {
            get { return _MULTIDOCID; }
            set { _MULTIDOCID = value; }
        }
        private string _QUALIFICATIONNAME;

        public string QUALIFICATIONNAME
        {
            get { return _QUALIFICATIONNAME; }
            set { _QUALIFICATIONNAME = value; }
        }
        private string _AREANAME;

        public string AREANAME
        {
            get { return _AREANAME; }
            set { _AREANAME = value; }
        }
        private string _COUNTRYNAME;

        public string COUNTRYNAME
        {
            get { return _COUNTRYNAME; }
            set { _COUNTRYNAME = value; }
        }
        private string _ADDRTYPENAME;

        public string ADDRTYPENAME
        {
            get { return _ADDRTYPENAME; }
            set { _ADDRTYPENAME = value; }
        }
        private string _STATENAME;

        public string STATENAME
        {
            get { return _STATENAME; }
            set { _STATENAME = value; }
        }
        private string _CITYNAME;

        public string CITYNAME
        {
            get { return _CITYNAME; }
            set { _CITYNAME = value; }
        }
        private string _EMAIL;

        public string EMAIL
        {
            get { return _EMAIL; }
            set { _EMAIL = value; }
        }
        private string _FAX;

        public string FAX
        {
            get { return _FAX; }
            set { _FAX = value; }
        }
        private string _MOBILE;

        public string MOBILE
        {
            get { return _MOBILE; }
            set { _MOBILE = value; }
        }
        private int _REFERENCE_TYPE_REV_NO;

        public int REFERENCE_TYPE_REV_NO
        {
            get { return _REFERENCE_TYPE_REV_NO; }
            set { _REFERENCE_TYPE_REV_NO = value; }
        }
       
        private int _ADDRESS_ID;

        public int ADDRESS_ID
        {
            get { return _ADDRESS_ID; }
            set { _ADDRESS_ID = value; }
        }
        private string _MOBILE_PHONE;

        public string MOBILE_PHONE
        {
            get { return _MOBILE_PHONE; }
            set { _MOBILE_PHONE = value; }
        }
        private int _ADDRESS_REV_NO;

        public int ADDRESS_REV_NO
        {
            get { return _ADDRESS_REV_NO; }
            set { _ADDRESS_REV_NO = value; }
        }
        private int _REFERENCE_REV_NO;

        public int REFERENCE_REV_NO
        {
            get { return _REFERENCE_REV_NO; }
            set { _REFERENCE_REV_NO = value; }
        }
        private int _REFERENCE_TYPE_ID;

        public int REFERENCE_TYPE_ID
        {
            get { return _REFERENCE_TYPE_ID; }
            set { _REFERENCE_TYPE_ID = value; }
        }
        private int _REFERENCE_ID;

        public int REFERENCE_ID
        {
            get { return _REFERENCE_ID; }
            set { _REFERENCE_ID = value; }
        }
        private string _FAX_NUMBER;

        public string FAX_NUMBER
        {
            get { return _FAX_NUMBER; }
            set { _FAX_NUMBER = value; }
        }
         private string _ADDRESS1;

        public string ADDRESS1
        {
            get { return _ADDRESS1; }
            set { _ADDRESS1 = value; }
        }
        private string _address2;
        public string ADDRESS2
        {
            set { _address2 = value; }
            get { return _address2; }
        }
            private string _phone;
        public string PHONE
        {
            set { _phone = value; }
            get { return _phone; }
        }
           private string _zipcode;

        public string Zipcode
        {
            get { return _zipcode; }
            set { _zipcode = value; }
        } 
            private string _email_id;
        public string EMAIL_ID
        {
            set { _email_id = value; }
            get { return _email_id; }
        }
            private string _website_url;
        public string WEBSITE_URL
        {
            set { _website_url = value; }
            get { return _website_url; }
        }

           private int _country_id;
        public int COUNTRY_ID
        {
            set { _country_id = value; }
            get { return _country_id; }
        }
        private int _state_id;
        public int STATE_ID
        {
            set { _state_id = value; }
            get { return _state_id; }
        }

            private int _city_id;
        public int CITY_ID
        {
            set { _city_id = value; }
            get { return _city_id; }
        }
            private int _addr_type_id;
        public int ADDR_TYPE_ID
        {
            set { _addr_type_id = value; }
            get { return _addr_type_id; }
        }
        private int _area_id;
        public int AREA_ID
        {
            set { _area_id = value; }
            get { return _area_id; }
        }
        private string _RELIGION_DESC;
        private string _FACILITY_DESC;
        private int consultation_type_id;
        public int CONSULTATION_TYPE_ID
        {
            get { return consultation_type_id; }
            set { consultation_type_id = value; }
        }
        public string FACILITY_DESC
        {
            get { return _FACILITY_DESC; }
            set { _FACILITY_DESC = value; }
        }
        private string _SERVICE_DESC;

        public string SERVICE_DESC
        {
            get { return _SERVICE_DESC; }
            set { _SERVICE_DESC = value; }
        }
        public string RELIGION_DESC
        {
            get { return _RELIGION_DESC; }
            set { _RELIGION_DESC = value; }
        }
        private int _title_id;
        public int TITLE_ID
        {
            set { _title_id = value; }
            get { return _title_id; }
        }
        private int _title_seq_id;
        public int TITLE_SEQ_ID
        {
            set { _title_seq_id = value; }
            get { return _title_seq_id; }
        }
        private string _first_name;
        public string FIRST_NAME
        {
            set { _first_name = value; }
            get { return _first_name; }
        }
        private string _middle_name;
        public string MIDDLE_NAME
        {
            set { _middle_name = value; }
            get { return _middle_name; }
        }
        private string _last_name;
        public string LAST_NAME
        {
            set { _last_name = value; }
            get { return _last_name; }
        }
        private string _display_name;
        public string DISPLAY_NAME
        {
            set { _display_name = value; }
            get { return _display_name; }
        }
        private int _sex_id;
        public int SEX_ID
        {
            set { _sex_id = value; }
            get { return _sex_id; }
        }
        private int _sex_seq_id;
        public int SEX_SEQ_ID
        {
            set { _sex_seq_id = value; }
            get { return _sex_seq_id; }
        }
        private string _dob;
        public string DOB
        {
            set { _dob = value; }
            get { return _dob; }
        }
        private string _age;
        public string AGE
        {
            set { _age = value; }
            get { return _age; }
        }
        private int _marital_status_id;
        public int MARITAL_STATUS_ID
        {
            set { _marital_status_id = value; }
            get { return _marital_status_id; }
        }
        private int _marital_status_seq_id;
        public int MARITAL_STATUS_SEQ_ID
        {
            set { _marital_status_seq_id = value; }
            get { return _marital_status_seq_id; }
        }
        private int _coverage_id;
        public int COVERAGE_ID
        {
            set { _coverage_id = value; }
            get { return _coverage_id; }
        }
        private int _coverage_seq_id;
        public int COVERAGE_SEQ_ID
        {
            set { _coverage_seq_id = value; }
            get { return _coverage_seq_id; }
        }
        private int _service_type_id;
        public int SERVICE_TYPE_ID
        {
            set { _service_type_id = value; }
            get { return _service_type_id; }
        }
        private int _service_type_seq_id;
        public int SERVICE_TYPE_SEQ_ID
        {
            set { _service_type_seq_id = value; }
            get { return _service_type_seq_id; }
        }
        private int _facility_id;
        public int FACILITY_ID
        {
            set { _facility_id = value; }
            get { return _facility_id; }
        }
        private int _facility_seq_id;
        public int FACILITY_SEQ_ID
        {
            set { _facility_seq_id = value; }
            get { return _facility_seq_id; }
        }
        private int _designation_id;
        public int DESIGNATION_ID
        {
            set { _designation_id = value; }
            get { return _designation_id; }
        }
        private int _designation_seq_id;
        public int DESIGNATION_SEQ_ID
        {
            set { _designation_seq_id = value; }
            get { return _designation_seq_id; }
        }
        private string _designation_desc = string.Empty;
        public string DESIGNATION_DESC
        {
            set { _designation_desc = value; }
            get { return _designation_desc; }
        }

        private int _department_id;
        public int DEPARTMENT_ID
        {
            set { _department_id = value; }
            get { return _department_id; }
        }
        private int _department_seq_id;
        public int DEPARTMENT_SEQ_ID
        {
            set { _department_seq_id = value; }
            get { return _department_seq_id; }
        }
        private string _departmen_desc = string.Empty;
        public string DEPARTMENT_DESC
        {
            set { _departmen_desc = value; }
            get { return _departmen_desc; }
        }
        private string _signature;
        public string SIGNATURE
        {
            set { _signature = value; }
            get { return _signature; }
        }
        private string _pan;
        public string PAN
        {
            set { _pan = value; }
            get { return _pan; }
        }
        private string _appointment_required;
        public string APPOINTMENT_REQUIRED
        {
            set { _appointment_required = value; }
            get { return _appointment_required; }
        }
        private string _notes;
        public string NOTES
        {
            set { _notes = value; }
            get { return _notes; }
        }
        private int _doctor_type_id;
        public int DOCTOR_TYPE_ID
        {
            set { _doctor_type_id = value; }
            get { return _doctor_type_id; }
        }
        private int _doctor_type_seq_id;
        public int DOCTOR_TYPE_SEQ_ID
        {
            set { _doctor_type_seq_id = value; }
            get { return _doctor_type_seq_id; }
        }
        private int _payment_type_id;
        public int PAYMENT_TYPE_ID
        {
            set { _payment_type_id = value; }
            get { return _payment_type_id; }
        }
        private int _payment_type_seq_id;
        public int PAYMENT_TYPE_SEQ_ID
        {
            set { _payment_type_seq_id = value; }
            get { return _payment_type_seq_id; }
        }
        private string _doctor_cd;
        public string DOCTOR_CD
        {
            set { _doctor_cd = value; }
            get { return _doctor_cd; }
        }
        private string _isappointmentreq;
        public string ISAPPOINTMENTREQ
        {
            set { _isappointmentreq = value; }
            get { return _isappointmentreq; }
        }
        private string _doctor_photopath;
        public string DOCTOR_PHOTOPATH
        {
            set { _doctor_photopath = value; }
            get { return _doctor_photopath; }
        }
        private string _doctor_signature;
        public string DOCTOR_SIGNATURE
        {
            set { _doctor_signature = value; }
            get { return _doctor_signature; }
        }
        private int _emp_dependent_id;
        public int EMP_DEPENDENT_ID
        {
            set { _emp_dependent_id = value; }
            get { return _emp_dependent_id; }
        }
         
        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
        }
        private int _age_unit_id;
        public int AGE_UNIT_ID
        {
            set { _age_unit_id = value; }
            get { return _age_unit_id; }
        }
        private int _age_unit_seq_id;
        public int AGE_UNIT_SEQ_ID
        {
            set { _age_unit_seq_id = value; }
            get { return _age_unit_seq_id; }
        }
        private int _specialization_id;
        public int SPECIALIZATION_ID
        {
            set { _specialization_id = value; }
            get { return _specialization_id; }
        }
        private int _specialization_seq_id;
        public int SPECIALIZATION_SEQ_ID
        {
            set { _specialization_seq_id = value; }
            get { return _specialization_seq_id; }
        }

        private string _specialization_desc;
        public string SPECIALIZATION_DESC
        {
            set { _specialization_desc = value; }
            get { return _specialization_desc; }
        }
         
        private int _religion_id;
        public int RELIGION_ID
        {
            set { _religion_id = value; }
            get { return _religion_id; }
        }
        private int _religion_seq_id;
        public int RELIGION_SEQ_ID
        {
            set { _religion_seq_id = value; }
            get { return _religion_seq_id; }
        }
        private int _nationality_id;
        public int NATIONALITY_ID
        {
            set { _nationality_id = value; }
            get { return _nationality_id; }
        }
        private int _nationality_seq_id;
        public int NATIONALITY_SEQ_ID
        {
            set { _nationality_seq_id = value; }
            get { return _nationality_seq_id; }
        }

        private string _nationality_desc;
        public string NATIONALITY_DESC
        {
            set { _nationality_desc = value; }
            get { return _nationality_desc; }
        }

        private string _ssn;
        public string SSN
        {
            set { _ssn = value; }
            get { return _ssn; }
        }
        private int _blood_group_id;
        public int BLOOD_GROUP_ID
        {
            set { _blood_group_id = value; }
            get { return _blood_group_id; }
        }
        private int _blood_group_seq_id;
        public int BLOOD_GROUP_SEQ_ID
        {
            set { _blood_group_seq_id = value; }
            get { return _blood_group_seq_id; }
        }

        private string _passport_no;
        public string PASSPORT_NO
        {
            set { _passport_no = value; }
            get { return _passport_no; }
        }
        private string _issue_dt;
        public string ISSUE_DT
        {
            set { _issue_dt = value; }
            get { return _issue_dt; }
        }
        private string _expiry_dt;
        public string EXPIRY_DT
        {
            set { _expiry_dt = value; }
            get { return _expiry_dt; }
        }
        private int _issued_at_id;
        public int ISSUED_AT_ID
        {
            set { _issued_at_id = value; }
            get { return _issued_at_id; }
        }
        private int _issued_at_seq_id;
        public int ISSUED_AT_SEQ_ID
        {
            set { _issued_at_seq_id = value; }
            get { return _issued_at_seq_id; }
        }
        private string _issued_at_desc;
        public string ISSUED_AT_DESC
        {
            set { _issued_at_desc = value; }
            get { return _issued_at_desc; }
        }
        private int _no_of_children;
        public int NO_OF_CHILDREN
        {
            set { _no_of_children = value; }
            get { return _no_of_children; }
        }
         
        private int _no_if_dependents;
        public int NO_IF_DEPENDENTS
        {
            set { _no_if_dependents = value; }
            get { return _no_if_dependents; }
        }
        private string _accept_insurance_flg;
        public string ACCEPT_INSURANCE_FLG
        {
            set { _accept_insurance_flg = value; }
            get { return _accept_insurance_flg; }
        }
        private string _accept_new_patient_flg;
        public string ACCEPT_NEW_PATIENT_FLG
        {
            set { _accept_new_patient_flg = value; }
            get { return _accept_new_patient_flg; }
        }
        private int _max_patient_appnt;
        public int MAX_PATIENT_APPNT
        {
            set { _max_patient_appnt = value; }
            get { return _max_patient_appnt; }
        }
        private int _max_patient_appnt_unit_id;
        public int MAX_PATIENT_APPNT_UNIT_ID
        {
            set { _max_patient_appnt_unit_id = value; }
            get { return _max_patient_appnt_unit_id; }
        }
        private int _max_patient_appnt_unit_seq_id;
        public int MAX_PATIENT_APPNT_UNIT_SEQ_ID
        {
            set { _max_patient_appnt_unit_seq_id = value; }
            get { return _max_patient_appnt_unit_seq_id; }
        }
        private int _max_business_appnt_unit_id;
        public int MAX_BUSINESS_APPNT_UNIT_ID
        {
            set { _max_business_appnt_unit_id = value; }
            get { return _max_business_appnt_unit_id; }
        }
        private int _max_business_appnt_unit_seq_id;
        public int MAX_BUSINESS_APPNT_UNIT_SEQ_ID
        {
            set { _max_business_appnt_unit_seq_id = value; }
            get { return _max_business_appnt_unit_seq_id; }
        }
        private int _max_business_appnt;
        public int MAX_BUSINESS_APPNT
        {
            set { _max_business_appnt = value; }
            get { return _max_business_appnt; }
        }
        private string consultation_name;

        public string CONSULTATION_NAME
        {
            get { return consultation_name; }
            set { consultation_name = value; }
        }
        private float price;

        public float PRICE
        {
            get { return price; }
            set { price = value; }
        }
        private string _name;
        public string NAME
        {
            set { _name = value; }
            get { return _name; }
        }
        private string code;

        public string CODE
        {
            get { return code; }
            set { code = value; }
        }
        private string department;

        public string DEPARTMENT
        {
            get { return department; }
            set { department = value; }
        }

        private int acc_cmp_id;
        public int ACC_CMP_ID
        {
            get { return acc_cmp_id; }
            set { acc_cmp_id = value; }
        }


        private string acc_cmp_name;
        public string ACC_CMP_NAME
        {
            get { return acc_cmp_name; }
            set { acc_cmp_name = value; }
        }

        private float acc_cmp_pct;
        public float ACC_CMP_PCT
        {
            get { return acc_cmp_pct; }
            set { acc_cmp_pct = value; }
        }

        private int Doctor_Emp_Type_ID;
          public int DOCTOR_EMP_TYPE_ID
        {
            get { return Doctor_Emp_Type_ID; }
            set { Doctor_Emp_Type_ID = value; }
        }

          private string Doctor_Emp_Type_Desc;
          public string DOCTOR_EMP_TYPE_DESC
          {
              get { return Doctor_Emp_Type_Desc; }
              set { Doctor_Emp_Type_Desc = value; }
          }

          private string _DOC_REG_FEE;

          public string DOC_REG_FEE
          {
              get { return _DOC_REG_FEE; }
              set { _DOC_REG_FEE = value; }
          }

          private string _doc_cmo;

          public string Doc_cmo
          {
              get { return _doc_cmo; }
              set { _doc_cmo = value; }
          }
          private string _bank_account_no;

          public string BANK_ACCOUNT_NO
          {
              get { return _bank_account_no; }
              set { _bank_account_no = value; }
          }
          private string _bank_name;

          public string BANK_NAME
          {
              get { return _bank_name; }
              set { _bank_name = value; }
          }
          private string _bank_branch_name;

          public string BANK_BRANCH_NAME
          {
              get { return _bank_branch_name; }
              set { _bank_branch_name = value; }
          }
          private string _reg_no;

          public string REG_NO
          {
              get { return _reg_no; }
              set { _reg_no = value; }
          }

          private int _ROOM_ID;

          public int ROOM_ID
          {
              get { return _ROOM_ID; }
              set { _ROOM_ID = value; }
          }
          private int _ROOM_REV_NO;

          public int ROOM_REV_NO
          {
              get { return _ROOM_REV_NO; }
              set { _ROOM_REV_NO = value; }
          }

          private string _ROOM_CD;

          public string ROOM_CD
          {
              get { return _ROOM_CD; }
              set { _ROOM_CD = value; }
          }
          private string _ROOM_NAME;

          public string ROOM_NAME
          {
              get { return _ROOM_NAME; }
              set { _ROOM_NAME = value; }
          }
          private string _ROOM_DESC;

          public string ROOM_DESC
          {
              get { return _ROOM_DESC; }
              set { _ROOM_DESC = value; }
          }
          private int _FLOOR_ID;

          public int FLOOR_ID
          {
              get { return _FLOOR_ID; }
              set { _FLOOR_ID = value; }
          }
          private int _BLOCK_ID;

          public int BLOCK_ID
          {
              get { return _BLOCK_ID; }
              set { _BLOCK_ID = value; }
          }
          private int _EXTENSION;

          public int EXTENSION
          {
              get { return _EXTENSION; }
              set { _EXTENSION = value; }
          }

          private string _LEVEL;

          public string LEVEL
          {
              get { return _LEVEL; }
              set { _LEVEL = value; }
          }

          private string _BLOCK;

          public string BLOCK
          {
              get { return _BLOCK; }
              set { _BLOCK = value; }
          }
          private int _WING_ID;

          public int WING_ID
          {
              get { return _WING_ID; }
              set { _WING_ID = value; }
          }
          private int _ROOM_STATUS_ID;

          public int ROOM_STATUS_ID
          {
              get { return _ROOM_STATUS_ID; }
              set { _ROOM_STATUS_ID = value; }
          }
          private int _CONSULTANT_ROOM_ID;

          public int CONSULTANT_ROOM_ID
          {
              get { return _CONSULTANT_ROOM_ID; }
              set { _CONSULTANT_ROOM_ID = value; }
          }
          private int _SEX;

          public int SEX
          {
              get { return _SEX; }
              set { _SEX = value; }
          }
          private string _DOCTOR_PAS_NO;

          public string DOCTOR_PAS_NO
          {
              get { return _DOCTOR_PAS_NO; }
              set { _DOCTOR_PAS_NO = value; }
          }

          private string _COUNTER_DOCTOR_STS;

          public string COUNTER_DOCTOR_STS
          {
              get { return _COUNTER_DOCTOR_STS; }
              set { _COUNTER_DOCTOR_STS = value; }
          }

          private string _IS_COUNTER_REQIRED;

          public string IS_COUNTER_REQIRED
          {
              get { return _IS_COUNTER_REQIRED; }
              set { _IS_COUNTER_REQIRED = value; }
          }

          private string _EMPLOYEE_ID;

          public string EMPLOYEE_ID
          {
              get { return _EMPLOYEE_ID; }
              set { _EMPLOYEE_ID = value; }
          }

          private string _EMPLOYEE_CD;

          public string EMPLOYEE_CD
          {
              get { return _EMPLOYEE_CD; }
              set { _EMPLOYEE_CD = value; }
          }

          private string _EMPLOYEE_DESC;

          public string EMPLOYEE_DESC
          {
              get { return _EMPLOYEE_DESC; }
              set { _EMPLOYEE_DESC = value; }
          }

          private string _JOINING_DT;

          public string JOINING_DT
          {
              get { return _JOINING_DT; }
              set { _JOINING_DT = value; }
          }

          private string _EMPLOYEE_REV_NO;

          public string EMPLOYEE_REV_NO
          {
              get { return _EMPLOYEE_REV_NO; }
              set { _EMPLOYEE_REV_NO = value; }
          }

          private string _DEPENDENT_ID;

          public string DEPENDENT_ID
          {
              get { return _DEPENDENT_ID; }
              set { _DEPENDENT_ID = value; }
          }
          private string _CONTACT_NO;

          public string CONTACT_NO
          {
              get { return _CONTACT_NO; }
              set { _CONTACT_NO = value; }
          }

          private string _DEPENDENT_TYPE_ID;

          public string DEPENDENT_TYPE_ID
          {
              get { return _DEPENDENT_TYPE_ID; }
              set { _DEPENDENT_TYPE_ID = value; }
          }

          private string _DEPENDENT_TYPE_REV_NO;

          public string DEPENDENT_TYPE_REV_NO
          {
              get { return _DEPENDENT_TYPE_REV_NO; }
              set { _DEPENDENT_TYPE_REV_NO = value; }
          }

          private string _EMPLOYEE_DEPENDENTS_REV_NO;

          public string EMPLOYEE_DEPENDENTS_REV_NO
          {
              get { return _EMPLOYEE_DEPENDENTS_REV_NO; }
              set { _EMPLOYEE_DEPENDENTS_REV_NO = value; }
          }

          private string _UMR_NO;

          public string UMR_NO
          {
              get { return _UMR_NO; }
              set { _UMR_NO = value; }
          }

          private string _CONCESSION_RULE_ID;

          public string CONCESSION_RULE_ID
          {
              get { return _CONCESSION_RULE_ID; }
              set { _CONCESSION_RULE_ID = value; }
          }
          private string _DOCTOR_FIRST_NAME;

          public string DOCTOR_FIRST_NAME
          {
              get { return _DOCTOR_FIRST_NAME; }
              set { _DOCTOR_FIRST_NAME = value; }
          }

          private string _DOCTOR_MIDDLE_NAME;

          public string DOCTOR_MIDDLE_NAME
          {
              get { return _DOCTOR_MIDDLE_NAME; }
              set { _DOCTOR_MIDDLE_NAME = value; }
          }

          private string _DOCTOR_LAST_NAME;

          public string DOCTOR_LAST_NAME
          {
              get { return _DOCTOR_LAST_NAME; }
              set { _DOCTOR_LAST_NAME = value; }
          }

          private string _DOCTOR_DISPLAY_NAME;

          public string DOCTOR_DISPLAY_NAME
          {
              get { return _DOCTOR_DISPLAY_NAME; }
              set { _DOCTOR_DISPLAY_NAME = value; }
          }

          private string _DOCTOR_SEX_ID;

          public string DOCTOR_SEX_ID
          {
              get { return _DOCTOR_SEX_ID; }
              set { _DOCTOR_SEX_ID = value; }
          }

          private string _DOCTOR_DOB;

          public string DOCTOR_DOB
          {
              get { return _DOCTOR_DOB; }
              set { _DOCTOR_DOB = value; }
          }
          private string _DOCTOR_AGE;

          public string DOCTOR_AGE
          {
              get { return _DOCTOR_AGE; }
              set { _DOCTOR_AGE = value; }
          }

          private string _EMP_FIRST_NAME;

          public string EMP_FIRST_NAME
          {
              get { return _EMP_FIRST_NAME; }
              set { _EMP_FIRST_NAME = value; }
          }

          private string _EMP_FATHER_NAME;

          public string EMP_FATHER_NAME
          {
              get { return _EMP_FATHER_NAME; }
              set { _EMP_FATHER_NAME = value; }
          }

          private string _EMP_DOB;

          public string EMP_DOB
          {
              get { return _EMP_DOB; }
              set { _EMP_DOB = value; }
          }
          private string _EMP_JOINING_DT;

          public string EMP_JOINING_DT
          {
              get { return _EMP_JOINING_DT; }
              set { _EMP_JOINING_DT = value; }
          }
          private string _EMP_DEPENDENT_NAME;

          public string EMP_DEPENDENT_NAME
          {
              get { return _EMP_DEPENDENT_NAME; }
              set { _EMP_DEPENDENT_NAME = value; }
          }
          private string _EMP_DEPT_ID;

          public string EMP_DEPT_ID
          {
              get { return _EMP_DEPT_ID; }
              set { _EMP_DEPT_ID = value; }
          }
          private string _EMP_DEPT_NAME;

          public string EMP_DEPT_NAME
          {
              get { return _EMP_DEPT_NAME; }
              set { _EMP_DEPT_NAME = value; }
          }
          private string _EMPLOYEE_RECORD_STATUS;

          public string EMPLOYEE_RECORD_STATUS
          {
              get { return _EMPLOYEE_RECORD_STATUS; }
              set { _EMPLOYEE_RECORD_STATUS = value; }
          }
          private string _DOC_FIRST_NAME;

          public string DOC_FIRST_NAME
          {
              get { return _DOC_FIRST_NAME; }
              set { _DOC_FIRST_NAME = value; }
          }
          private string _DOC_DESIGNATION_ID;

          public string DOC_DESIGNATION_ID
          {
              get { return _DOC_DESIGNATION_ID; }
              set { _DOC_DESIGNATION_ID = value; }
          }
          private string _DOC_DESIGNATION_NAME;

          public string DOC_DESIGNATION_NAME
          {
              get { return _DOC_DESIGNATION_NAME; }
              set { _DOC_DESIGNATION_NAME = value; }
          }

          private string _EMP_DESIGNATION_ID;

          public string EMP_DESIGNATION_ID
          {
              get { return _EMP_DESIGNATION_ID; }
              set { _EMP_DESIGNATION_ID = value; }
          }
          private string _EMP_DESIGNATION_NAME;

          public string EMP_DESIGNATION_NAME
          {
              get { return _EMP_DESIGNATION_NAME; }
              set { _EMP_DESIGNATION_NAME = value; }
          }
          private string _DOC_DEPT_ID;

          public string DOC_DEPT_ID
          {
              get { return _DOC_DEPT_ID; }
              set { _DOC_DEPT_ID = value; }
          }
          private string _DOC_DEPT_NAME;

          public string DOC_DEPT_NAME
          {
              get { return _DOC_DEPT_NAME; }
              set { _DOC_DEPT_NAME = value; }
          }
          private string registration_no;

          public string REGISTRATION_NO
          {
              get { return registration_no; }
              set { registration_no = value; }
          }
          private string _DOCTOR_RECORD_STATUS;

          public string DOCTOR_RECORD_STATUS
          {
              get { return _DOCTOR_RECORD_STATUS; }
              set { _DOCTOR_RECORD_STATUS = value; }
          }
          private string designation_name;

          public string DESIGNATION_NAME
          {
              get { return designation_name; }
              set { designation_name = value; }
          }
          private string _EMP_LAST_NAME;

          public string EMP_LAST_NAME
          {
              get { return _EMP_LAST_NAME; }
              set { _EMP_LAST_NAME = value; }
          }
          private string _QUALIFICATION_NAME;

          public string QUALIFICATION_NAME
          {
              get { return _QUALIFICATION_NAME; }
              set { _QUALIFICATION_NAME = value; }
          }
          private int _SERVICE_ID;

          public int SERVICE_ID
          {
              get { return _SERVICE_ID; }
              set { _SERVICE_ID = value; }
          }
    }
}
