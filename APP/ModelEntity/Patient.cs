using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class Patient 
    {

        private string _patient_id;
        public string PATIENT_ID
        {
            set { _patient_id = value; }
            get { return _patient_id; }
        }

        private string _titile_id;
        public string TITILE_ID
        {
            set { _titile_id = value; }
            get { return _titile_id; }
        }

        private string title;
        public string TITLE
        {
            get { return title; }
            set { title = value; }
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
        private string _res_person_name;

        public string RES_PERSON_NAME
        {
            set { _res_person_name = value; }
            get { return _res_person_name; }
        }
        private string _res_person_rel_id;
        public string RES_PERSON_REL_ID
        {
            set { _res_person_rel_id = value; }
            get { return _res_person_rel_id; }
        }
        private string _gender_id;
        public string GENDER_ID
        {
            set { _gender_id = value; }
            get { return _gender_id; }
        }

        private string gender;
        public string GENDER
        {
            get { return gender; }
            set { gender = value; }
        }
        private string _marital_status_id;
        public string MARITAL_STATUS_ID
        {
            set { _marital_status_id = value; }
            get { return _marital_status_id; }
        }

        private string marital_status;
        public string MARITAL_STATUS
        {
            get { return marital_status; }
            set { marital_status = value; }
        }

        private string _mother_maiden_name;
        public string MOTHER_MAIDEN_NAME
        {
            set { _mother_maiden_name = value; }
            get { return _mother_maiden_name; }
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

        private string display_age;
        public string DISPLAY_AGE
        {
            set { display_age = value; }
            get { return display_age; }
        }

        private string _age_uom_id;
        public string AGE_UOM_ID
        {
            set { _age_uom_id = value; }
            get { return _age_uom_id; }
        }

        private string _create_by;
        public string CREATE_BY
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
        private string _modify_by;
        public string MODIFY_BY
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
        private string _current_record;
        public string CURRENT_RECORD
        {
            set { _current_record = value; }
            get { return _current_record; }
        }
        private string _patient_type_id;
        public string PATIENT_TYPE_ID
        {
            set { _patient_type_id = value; }
            get { return _patient_type_id; }
        }

        private string patient_type = string.Empty;
        public string PATIENT_TYPE
        {
            get { return patient_type; }
            set { patient_type = value; }
        }

        private string _patient_type_reference_id;
        public string PATIENT_TYPE_REFERENCE_ID
        {
            set { _patient_type_reference_id = value; }
            get { return _patient_type_reference_id; }
        }

        private string _patient_category_id;
        public string PATIENT_CATEGORY_ID
        {
            set { _patient_category_id = value; }
            get { return _patient_category_id; }
        }


        private string _nationality_id;
        public string NATIONALITY_ID
        {
            set { _nationality_id = value; }
            get { return _nationality_id; }
        }


        private string nationality_name = string.Empty;
        public string NATIONALITY_NAME
        {
            set { nationality_name = value; }
            get { return nationality_name; }
        }
        private string nationality_code = string.Empty;
        public string NATIONALITY_CD
        {
            set { nationality_code = value; }
            get { return nationality_code; }
        }
        private string nationality_desc = string.Empty;
        public string NATIONALITY_DESC
        {
            set { nationality_desc = value; }
            get { return nationality_desc; }
        }
        private string _blood_group_id;
        public string BLOOD_GROUP_ID
        {
            set { _blood_group_id = value; }
            get { return _blood_group_id; }
        }

        private string bloodgroup;
        public string BLOOD_GROUP
        {
            get { return bloodgroup; }
            set { bloodgroup = value; }
        }
        private string _religion_id;
        public string RELIGION_ID
        {
            set { _religion_id = value; }
            get { return _religion_id; }
        }
        private string _occupation_id;
        public string OCCUPATION_ID
        {
            set { _occupation_id = value; }
            get { return _occupation_id; }
        }


        private string _education_id;
        public string EDUCATION_ID
        {
            set { _education_id = value; }
            get { return _education_id; }
        }

        private string educationname;
        public string EducationName
        {
            get { return educationname; }
            set { educationname = value; }
        }
        private string _diet_type_id;
        public string DIET_TYPE_ID
        {
            set { _diet_type_id = value; }
            get { return _diet_type_id; }
        }
        private string _diet_type_name;
        public string DIET_TYPE_NAME
        {
            set { _diet_type_name = value; }
            get { return _diet_type_name; }
        }
        private string _ethnicity_id;
        public string ETHNICITY_ID
        {
            set { _ethnicity_id = value; }
            get { return _ethnicity_id; }
        }

        private string _identification_marks1;
        public string IDENTIFICATION_MARKS1
        {
            set { _identification_marks1 = value; }
            get { return _identification_marks1; }
        }
        private string _identification_marks2;
        public string IDENTIFICATION_MARKS2
        {
            set { _identification_marks2 = value; }
            get { return _identification_marks2; }
        }
        private string _id_proof_id;
        public string ID_PROOF_ID
        {
            set { _id_proof_id = value; }
            get { return _id_proof_id; }
        }
        private string _id_proof_name;
        public string ID_PROOF_NAME
        {
            set { _id_proof_name = value; }
            get { return _id_proof_name; }
        }
        private string _id_proof_assgn_authority;
        public string ID_PROOF_ASSGN_AUTHORITY
        {
            set { _id_proof_assgn_authority = value; }
            get { return _id_proof_assgn_authority; }
        }
        private string _addr_proof_id;
        public string ADDR_PROOF_ID
        {
            set { _addr_proof_id = value; }
            get { return _addr_proof_id; }
        }
        private string _addr_proof_name;
        public string ADDR_PROOF_NAME
        {
            set { _addr_proof_name = value; }
            get { return _addr_proof_name; }
        }
        private string _addr_proof_assgn_authority;
        public string ADDR_PROOF_ASSGN_AUTHORITY
        {
            set { _addr_proof_assgn_authority = value; }
            get { return _addr_proof_assgn_authority; }
        }
        private string _notes;
        public string NOTES
        {
            set { _notes = value; }
            get { return _notes; }
        }
        private string _language_id;
        public string LANGUAGE_ID
        {
            set { _language_id = value; }
            get { return _language_id; }
        }

        private string primary_language = string.Empty;
        public string PRIMARY_LANGUAGE
        {
            get { return primary_language; }
            set { primary_language = value; }
        }
        private string _display_name;
        public string DISPLAY_NAME
        {
            set { _display_name = value; }
            get { return _display_name; }
        }
        private string disp_name_id;
        public string DISPLAY_NAME_ID
        {
            get { return disp_name_id; }
            set { disp_name_id = value; }
        }

        private int _no_of_childrens;
        public int NO_OF_CHILDRENS
        {
            set { _no_of_childrens = value; }
            get { return _no_of_childrens; }
        }
        private string _signature;
        public string SIGNATURE
        {
            set { _signature = value; }
            get { return _signature; }
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
        private string _issued_at_id;
        public string ISSUED_AT_ID
        {
            set { _issued_at_id = value; }
            get { return _issued_at_id; }
        }

        private string _foreigner_flag;
        public string FOREIGNER_FLAG
        {
            set { _foreigner_flag = value; }
            get { return _foreigner_flag; }
        }

        private string _method_of_comm_id;
        public string METHOD_OF_COMM_ID
        {
            set { _method_of_comm_id = value; }
            get { return _method_of_comm_id; }
        }
        private string _method_of_comm_name;
        public string METHOD_OF_COMM_NAME
        {
            set { _method_of_comm_name = value; }
            get { return _method_of_comm_name; }
        }

        private string _mobile_no1;
        public string MOBILE_NO1
        {
            set { _mobile_no1 = value; }
            get { return _mobile_no1; }
        }
        private string _mobile_no2;
        public string MOBILE_NO2
        {
            set { _mobile_no2 = value; }
            get { return _mobile_no2; }
        }
        private string _national_id;
        public string NATIONAL_ID
        {
            set { _national_id = value; }
            get { return _national_id; }
        }
        private string _email_id;
        public string EMAIL_ID
        {
            set { _email_id = value; }
            get { return _email_id; }
        }
        private string _monthly_income;
        public string MONTHLY_INCOME
        {
            set { _monthly_income = value; }
            get { return _monthly_income; }
        }

        private string passprotissueat;
        public string PassportIssueAT
        {
            get { return passprotissueat; }
            set { passprotissueat = value; }

        }
        private string website;
        public string Website
        {
            get { return website; }
            set { website = value; }
        }
        private string rferalphone;
        public string ReferalPhone
        {
            get { return rferalphone; }
            set { rferalphone = value; }
        }
        private string referaladdr;
        public string ReferalAddress
        {
            get { return referaladdr; }
            set { referaladdr = value; }
        }



        public string patientphoto;
        public string PATIENTPHOTO
        {
            get { return patientphoto; }
            set { patientphoto = value; }
        }

        public string patient_rivision_no;
        public string PATIENT_RIVISION_NO
        {
            get { return patient_rivision_no; }
            set { patient_rivision_no = value; }
        }

        public string registration_rivision_no;
        public string REGISTRATION_RIVISION_NO
        {
            get { return registration_rivision_no; }
            set { registration_rivision_no = value; }
        }
        private int _pageSize;
        public int PAGE_SIZE
        {
            get { return _pageSize; }
            set { _pageSize = value; }
        }
        private int _currPage;
        public int CURRENT_PAGE
        {
            get { return _currPage; }
            set { _currPage = value; }
        }
        private int _total_records;
        public int TOTAL_RECORDS
        {
            get { return _total_records; }
            set { _total_records = value; }
        }
        private string _security_cd;
        public string SECURITY_CD
        {
            get { return _security_cd; }
            set { _security_cd = value; }
        }

        private string _ward;
        public string WARD
        {
            get { return _ward; }
            set { _ward = value; }
        }

        private string _room;
        public string ROOM
        {
            get { return _room; }
            set { _room = value; }
        }

        private string _bed;
        public string BED
        {
            get { return _bed; }
            set { _bed = value; }
        }

        private string _address;
        public string Address
        {
            get { return _address; }
            set { _address = value; }
        }
        private string _gender_name;

        public string GENDER_NAME
        {
            get { return _gender_name; }
            set { _gender_name = value; }
        }
        private string _tittle_name;

        public string TITTLE_NAME
        {
            get { return _tittle_name; }
            set { _tittle_name = value; }
        }
        private string _marital_status_name;

        public string MARITAL_STATUS_NAME
        {
            get { return _marital_status_name; }
            set { _marital_status_name = value; }
        }
        private string _blood_group_name;

        public string BLOOD_GROUP_NAME
        {
            get { return _blood_group_name; }
            set { _blood_group_name = value; }
        }
        private string _city_name;

        public string CITY_NAME
        {
            get { return _city_name; }
            set { _city_name = value; }
        }
        private string _state_name;

        public string STATE_NAME
        {
            get { return _state_name; }
            set { _state_name = value; }
        }
        private string _country_name;

        public string COUNTRY_NAME
        {
            get { return _country_name; }
            set { _country_name = value; }
        }
        private string _area_name;

        public string AREA_NAME
        {
            get { return _area_name; }
            set { _area_name = value; }
        }
        private string _address1;

        public string ADDRESS1
        {
            get { return _address1; }
            set { _address1 = value; }
        }
        private string _address2;

        public string ADDRESS2
        {
            get { return _address2; }
            set { _address2 = value; }
        }

        private string is_letter_required = string.Empty;
        public string IS_LETTER_REQUIRED
        {
            get { return is_letter_required; }
            set { is_letter_required = value; }
        }
        private int disc_req_id;
        public int DISC_REQ_ID
        {
            get { return disc_req_id; }
            set { disc_req_id = value; }
        }
        private string _patient_type_id_new;
        public string PATIENT_TYPE_ID_NEW
        {
            set { _patient_type_id_new = value; }
            get { return _patient_type_id_new; }
        }
        private string fathername;

        public string FATHERNAME
        {
            get { return fathername; }
            set { fathername = value; }
        }
        private string mobileno;

        public string MOBILENO
        {
            get { return mobileno; }
            set { mobileno = value; }
        }
        private int questionary_id;

        public int QUESTIONARY_ID
        {
            get { return questionary_id; }
            set { questionary_id = value; }
        }
        private string questionary_name;

        public string QUESTIONARY_NAME
        {
            get { return questionary_name; }
            set { questionary_name = value; }
        }

        private string _ADVANCE_SEARCH;

        public string ADVANCE_SEARCH
        {
            get { return _ADVANCE_SEARCH; }
            set { _ADVANCE_SEARCH = value; }
        }
        private string responsbility_person_name;

        public string RESPONSBILITY_PERSON_NAME
        {
            get { return responsbility_person_name; }
            set { responsbility_person_name = value; }
        }
        private string nursestation_name;

        public string NURSESTATION_NAME
        {
            get { return nursestation_name; }
            set { nursestation_name = value; }
        }

        private int rec_type_id;

        public int REC_TYPE_ID
        {
            get { return rec_type_id; }
            set { rec_type_id = value; }
        }
        public string display_code;
        public string DISPLAY_CODE {
            get { return display_code; }
            set { display_code = value; }
        }
        //public string VIRTUAL_BED { set; get; }
        private string virtual_bed;

        public string VIRTUAL_BED
        {
            get { return virtual_bed; }
            set { virtual_bed = value; }
        }


    }
}
