using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class DoctorMaster : CommonPropeties
    {


        public int VISIT_TYPE_ID { get; set; }


        private string _visit_type_name = string.Empty;
        public string VISIT_TYPE_NAME
        {
            get { return _visit_type_name; }
            set { _visit_type_name = value; }
        }


        private string _DEPT_CD;

        public string DEPT_CD
        {
            get { return _DEPT_CD; }
            set { _DEPT_CD = value; }
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
        private string _DOCTOR_TYPE_NAME;

        public string DOCTOR_TYPE_NAME
        {
            get { return _DOCTOR_TYPE_NAME; }
            set { _DOCTOR_TYPE_NAME = value; }
        }
        private string _DEPARTMENT_DESC;

        public string DEPARTMENT_DESC
        {
            get { return _DEPARTMENT_DESC; }
            set { _DEPARTMENT_DESC = value; }
        }
        private string _FLAG;

        public string FLAG
        {
            get { return _FLAG; }
            set { _FLAG = value; }
        }
        private string _RELIGION_DESC;

        public string RELIGION_DESC
        {
            get { return _RELIGION_DESC; }
            set { _RELIGION_DESC = value; }
        }
        private int _DOCTOR_DEPENDENT_ID;

        public int DOCTOR_DEPENDENT_ID
        {
            get { return _DOCTOR_DEPENDENT_ID; }
            set { _DOCTOR_DEPENDENT_ID = value; }
        }
        private int _DOCTOR_DEPENDENT_REV_NO;

        public int DOCTOR_DEPENDENT_REV_NO
        {
            get { return _DOCTOR_DEPENDENT_REV_NO; }
            set { _DOCTOR_DEPENDENT_REV_NO = value; }
        }
        private int _RELATIONSHIP_REV_NO;

        public int RELATIONSHIP_REV_NO
        {
            get { return _RELATIONSHIP_REV_NO; }
            set { _RELATIONSHIP_REV_NO = value; }
        }
        private int _RELATIONSHIP_ID;

        public int RELATIONSHIP_ID
        {
            get { return _RELATIONSHIP_ID; }
            set { _RELATIONSHIP_ID = value; }
        }
        private int _DEPENDENT_TYPE_ID;
        public int DEPENDENT_TYPE_ID
        {
            set { _DEPENDENT_TYPE_ID = value; }
            get { return _DEPENDENT_TYPE_ID; }
        }
        private int _DOCTOR_EDUCATION_ID;

        public int DOCTOR_EDUCATION_ID
        {
            get { return _DOCTOR_EDUCATION_ID; }
            set { _DOCTOR_EDUCATION_ID = value; }
        }
        private int _DOCTOR_EDUCATION_REV_NO;

        public int DOCTOR_EDUCATION_REV_NO
        {
            get { return _DOCTOR_EDUCATION_REV_NO; }
            set { _DOCTOR_EDUCATION_REV_NO = value; }
        }
        private int _LOC_REV_NO;

        public int LOC_REV_NO
        {
            get { return _LOC_REV_NO; }
            set { _LOC_REV_NO = value; }
        }
        private int _ORG_REV_NO;

        public int ORG_REV_NO
        {
            get { return _ORG_REV_NO; }
            set { _ORG_REV_NO = value; }
        }
        private int _DOCTOR_ID_REV_NO;

        public int DOCTOR_ID_REV_NO
        {
            get { return _DOCTOR_ID_REV_NO; }
            set { _DOCTOR_ID_REV_NO = value; }
        }
        private int _DOCTOR_ID;

        public int DOCTOR_ID
        {
            get { return _DOCTOR_ID; }
            set { _DOCTOR_ID = value; }
        }
        #region Doctor_Sanction

        private int _doctor_sanction_REV_NO;
        public int DOCTOR_SANCTION_REV_NO
        {
            set { _doctor_sanction_REV_NO = value; }
            get { return _doctor_sanction_REV_NO; }
        }
        private int _doctor_sanction_id;
        public int DOCTOR_SANCTION_ID
        {
            set { _doctor_sanction_id = value; }
            get { return _doctor_sanction_id; }
        }

        private string _name;
        public string NAME
        {
            set { _name = value; }
            get { return _name; }
        }
        private string _authority;
        public string AUTHORITY
        {
            set { _authority = value; }
            get { return _authority; }
        }
        private string _reason;
        public string REASON
        {
            set { _reason = value; }
            get { return _reason; }
        }

        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
        }
        private int _SPECIALIZATION_ID;

        public int SPECIALIZATION_ID
        {
            get { return _SPECIALIZATION_ID; }
            set { _SPECIALIZATION_ID = value; }
        }
        private int _SPECIALIZATION_REV_NO;

        public int SPECIALIZATION_REV_NO
        {
            get { return _SPECIALIZATION_REV_NO; }
            set { _SPECIALIZATION_REV_NO = value; }
        }
        #endregion
        #region Doctor_Education
        private int _DOCTOR_LICENSE_ID;

        public int DOCTOR_LICENSE_ID
        {
            get { return _DOCTOR_LICENSE_ID; }
            set { _DOCTOR_LICENSE_ID = value; }
        }
        private int _qualification_id;
        public int QUALIFICATION_ID
        {
            set { _qualification_id = value; }
            get { return _qualification_id; }
        }

        private int _doctor_language_id;
        public int DOCTOR_LANGUAGE_ID
        {
            set { _doctor_language_id = value; }
            get { return _doctor_language_id; }
        }
        private int _doctor_language_REV_NO;
        public int DOCTOR_LANGUAGE_REV_NO
        {
            set { _doctor_language_REV_NO = value; }
            get { return _doctor_language_REV_NO; }
        }
        private int _institution_id;
        public int INSTITUTION_ID
        {
            set { _institution_id = value; }
            get { return _institution_id; }
        }
        private int _institution_REV_NO;
        public int INSTITUTION_REV_NO
        {
            set { _institution_REV_NO = value; }
            get { return _institution_REV_NO; }
        }
        private int _board_university_id;
        public int BOARD_UNIVERSITY_ID
        {
            set { _board_university_id = value; }
            get { return _board_university_id; }
        }
        private int _board_university_REV_NO;
        public int BOARD_UNIVERSITY_REV_NO
        {
            set { _board_university_REV_NO = value; }
            get { return _board_university_REV_NO; }
        }
        private string _institution_ranking;
        public string INSTITUTION_RANKING
        {
            set { _institution_ranking = value; }
            get { return _institution_ranking; }
        }
        private string _institution_rating;
        public string INSTITUTION_RATING
        {
            set { _institution_rating = value; }
            get { return _institution_rating; }
        }
        private string _year_of_completion;
        public string YEAR_OF_COMPLETION
        {
            set { _year_of_completion = value; }
            get { return _year_of_completion; }
        }
        #endregion
        #region Doctor_Experience

        private int _doctor_experience_REV_NO;
        public int DOCTOR_EXPERIENCE_REV_NO
        {
            set { _doctor_experience_REV_NO = value; }
            get { return _doctor_experience_REV_NO; }
        }
        private int _doctor_experience_id;
        public int DOCTOR_EXPERIENCE_ID
        {
            set { _doctor_experience_id = value; }
            get { return _doctor_experience_id; }
        }


        private string _from_dt;
        public string FROM_DT
        {
            set { _from_dt = value; }
            get { return _from_dt; }
        }
        private string _to_dt;
        public string TO_DT
        {
            set { _to_dt = value; }
            get { return _to_dt; }
        }
        private int _designation_id;
        public int DESIGNATION_ID
        {
            set { _designation_id = value; }
            get { return _designation_id; }
        }
        private int _designation_REV_NO;
        public int DESIGNATION_REV_NO
        {
            set { _designation_REV_NO = value; }
            get { return _designation_REV_NO; }
        }
        #endregion
        #region Doctor_Certification
        private int _doctor_certification_REV_NO;
        public int DOCTOR_CERTIFICATION_REV_NO
        {
            set { _doctor_certification_REV_NO = value; }
            get { return _doctor_certification_REV_NO; }
        }
        private int _doctor_certification_id;
        public int DOCTOR_CERTIFICATION_ID
        {
            set { _doctor_certification_id = value; }
            get { return _doctor_certification_id; }
        }

        private string _issue_dt;
        public string ISSUE_DT
        {
            set { _issue_dt = value; }
            get { return _issue_dt; }
        }
        private int _certification_id;
        public int CERTIFICATION_ID
        {
            set { _certification_id = value; }
            get { return _certification_id; }
        }
        private string _certification_name;
        public string CERTIFICATION_Name
        {
            set { _certification_name = value; }
            get { return _certification_name; }
        }
        private int _certification_REV_NO;
        public int CERTIFICATION_REV_NO
        {
            set { _certification_REV_NO = value; }
            get { return _certification_REV_NO; }
        }
        #endregion

        #region Doctor_Professional
        private int _doctor_professional_REV_NO;
        public int DOCTOR_PROFESSIONAL_REV_NO
        {
            set { _doctor_professional_REV_NO = value; }
            get { return _doctor_professional_REV_NO; }
        }
        private int _doctor_professional_id;
        public int DOCTOR_PROFESSIONAL_ID
        {
            set { _doctor_professional_id = value; }
            get { return _doctor_professional_id; }
        }

        private string _exc_name;
        public string EXC_NAME
        {
            set { _exc_name = value; }
            get { return _exc_name; }
        }
        private string _ach_achievement;
        public string ACH_ACHIEVEMENT
        {
            set { _ach_achievement = value; }
            get { return _ach_achievement; }
        }
        private string _ach_date;
        public string ACH_DATE
        {
            set { _ach_date = value; }
            get { return _ach_date; }
        }
        private string _mem_membership;
        public string MEM_MEMBERSHIP
        {
            set { _mem_membership = value; }
            get { return _mem_membership; }
        }
        private string _mem_role;
        public string MEM_ROLE
        {
            set { _mem_role = value; }
            get { return _mem_role; }
        }
        private string _mem_from_dt;
        public string MEM_FROM_DT
        {
            set { _mem_from_dt = value; }
            get { return _mem_from_dt; }
        }
        private string _mem_to_dt;
        public string MEM_TO_DT
        {
            set { _mem_to_dt = value; }
            get { return _mem_to_dt; }
        }
        private string _int_interest;
        public string INT_INTEREST
        {
            set { _int_interest = value; }
            get { return _int_interest; }
        }
        private string _int_from_dt;
        public string INT_FROM_DT
        {
            set { _int_from_dt = value; }
            get { return _int_from_dt; }
        }
        private string _int_to_dt;
        public string INT_TO_DT
        {
            set { _int_to_dt = value; }
            get { return _int_to_dt; }
        }
        private string _res_name_of_the_work;
        public string RES_NAME_OF_THE_WORK
        {
            set { _res_name_of_the_work = value; }
            get { return _res_name_of_the_work; }
        }
        private string _res_funding_agency;
        public string RES_FUNDING_AGENCY
        {
            set { _res_funding_agency = value; }
            get { return _res_funding_agency; }
        }
        private string _pub_article_book;
        public string PUB_ARTICLE_BOOK
        {
            set { _pub_article_book = value; }
            get { return _pub_article_book; }
        }
        private string _pub_publish_dt;
        public string PUB_PUBLISH_DT
        {
            set { _pub_publish_dt = value; }
            get { return _pub_publish_dt; }
        }
        private string _pub_journal_publisher;
        public string PUB_JOURNAL_PUBLISHER
        {
            set { _pub_journal_publisher = value; }
            get { return _pub_journal_publisher; }
        }
        private string _cnf_name;
        public string CNF_NAME
        {
            set { _cnf_name = value; }
            get { return _cnf_name; }
        }
        private string _cnf_dt;
        public string CNF_DT
        {
            set { _cnf_dt = value; }
            get { return _cnf_dt; }
        }
        private string _cnf_place;
        public string CNF_PLACE
        {
            set { _cnf_place = value; }
            get { return _cnf_place; }
        }
        private string _cnf_role;
        public string CNF_ROLE
        {
            set { _cnf_role = value; }
            get { return _cnf_role; }
        }
        private string _cnf_organizer;
        public string CNF_ORGANIZER
        {
            set { _cnf_organizer = value; }
            get { return _cnf_organizer; }
        }
        private string _prof_info_class_id;
        public string PROF_INFO_CLASS_ID
        {
            set { _prof_info_class_id = value; }
            get { return _prof_info_class_id; }
        }
        private string _remarks;
        public string REMARKS
        {
            set { _remarks = value; }
            get { return _remarks; }
        }
        private int _prof_info_class_REV_NO;
        public int PROF_INFO_CLASS_REV_NO
        {
            set { _prof_info_class_REV_NO = value; }
            get { return _prof_info_class_REV_NO; }
        }
        #endregion
        #region Doctor_License
        private string _LICENSE_NO;

        public string LICENSE_NO
        {
            get { return _LICENSE_NO; }
            set { _LICENSE_NO = value; }
        }
        private string _INSTITUTIONNAME;

        public string INSTITUTIONNAME
        {
            get { return _INSTITUTIONNAME; }
            set { _INSTITUTIONNAME = value; }
        }

        private int _ISSUE_PLACE_ID;

        public int ISSUE_PLACE_ID
        {
            get { return _ISSUE_PLACE_ID; }
            set { _ISSUE_PLACE_ID = value; }
        }
        private int _ISSUE_PLACE_REV_NO;

        public int ISSUE_PLACE_REV_NO
        {
            get { return _ISSUE_PLACE_REV_NO; }
            set { _ISSUE_PLACE_REV_NO = value; }
        }
        private string _EXPIRY_DT;

        public string EXPIRY_DT
        {
            get { return _EXPIRY_DT; }
            set { _EXPIRY_DT = value; }
        }
        #endregion
        private int _DOCTOR_SPECIALIZATION_ID;

        public int DOCTOR_SPECIALIZATION_ID
        {
            get { return _DOCTOR_SPECIALIZATION_ID; }
            set { _DOCTOR_SPECIALIZATION_ID = value; }
        }
        private string _SPECIALIZATIONNAME;

        public string SPECIALIZATIONNAME
        {
            get { return _SPECIALIZATIONNAME; }
            set { _SPECIALIZATIONNAME = value; }
        }
        private string _specializationCd;

        public string SpecializationCd
        {
            get { return _specializationCd; }
            set { _specializationCd = value; }
        }
        private string _UNIVERSITYNAME;

        public string UNIVERSITYNAME
        {
            get { return _UNIVERSITYNAME; }
            set { _UNIVERSITYNAME = value; }
        }
        private DateTime _DateOfBirth;

        public DateTime DateOfBirth
        {
            get { return _DateOfBirth; }
            set { _DateOfBirth = value; }
        }
        private string _DEPENDENT_TYPE_NAME;

        public string DEPENDENT_TYPE_NAME
        {
            get { return _DEPENDENT_TYPE_NAME; }
            set { _DEPENDENT_TYPE_NAME = value; }
        }
        private string _RelationName;

        public string RelationName
        {
            get { return _RelationName; }
            set { _RelationName = value; }
        }
        private string _MaritStatus;

        public string MaritStatus
        {
            get { return _MaritStatus; }
            set { _MaritStatus = value; }
        }
        private int _GENDER_ID;

        public int GENDER_ID
        {
            get { return _GENDER_ID; }
            set { _GENDER_ID = value; }
        }
        private string _Gender;

        public string Gender
        {
            get { return _Gender; }
            set { _Gender = value; }
        }
        private string _LASTREC;

        public string LASTREC
        {
            get { return _LASTREC; }
            set { _LASTREC = value; }
        }
        private string _FIRSTREC;

        public string FIRSTREC
        {
            get { return _FIRSTREC; }
            set { _FIRSTREC = value; }
        }
        private string _NextRec;

        public string NextRec
        {
            get { return _NextRec; }
            set { _NextRec = value; }
        }



        private int _dependent_type_id_ver;
        public int DEPENDENT_TYPE_ID_VER
        {
            set { _dependent_type_id_ver = value; }
            get { return _dependent_type_id_ver; }
        }
        private int _employee_id;
        public int EMPLOYEE_ID
        {
            set { _employee_id = value; }
            get { return _employee_id; }
        }
        private int _employee_id_ver;
        public int EMPLOYEE_ID_VER
        {
            set { _employee_id_ver = value; }
            get { return _employee_id_ver; }
        }
        private int _dependent_id_ver;
        public int DEPENDENT_ID_VER
        {
            set { _dependent_id_ver = value; }
            get { return _dependent_id_ver; }
        }
        private string _PrevRec;

        public string PrevRec
        {
            get { return _PrevRec; }
            set { _PrevRec = value; }
        }
        private string _FACI_ID;

        public string FACI_ID
        {
            get { return _FACI_ID; }
            set { _FACI_ID = value; }
        }
        private string _DESG_ID;

        public string DESG_ID
        {
            get { return _DESG_ID; }
            set { _DESG_ID = value; }
        }
        private string _DEPT_ID;

        public string DEPT_ID
        {
            get { return _DEPT_ID; }
            set { _DEPT_ID = value; }
        }
        private string _DESIGNATION_DESC;

        public string DESIGNATION_DESC
        {
            get { return _DESIGNATION_DESC; }
            set { _DESIGNATION_DESC = value; }
        }
        private string _DOCTORPHOTO;

        public string DOCTORPHOTO
        {
            get { return _DOCTORPHOTO; }
            set { _DOCTORPHOTO = value; }
        }
        private string _DOCTORSIGN;

        public string DOCTORSIGN
        {
            get { return _DOCTORSIGN; }
            set { _DOCTORSIGN = value; }
        }
        private string _DRPARTMENT_DESC;

        public string DRPARTMENT_DESC
        {
            get { return _DRPARTMENT_DESC; }
            set { _DRPARTMENT_DESC = value; }
        }
        private string _FACILITY_DESC;

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
        private string _Name;

        public string Name
        {
            get { return _Name; }
            set { _Name = value; }
        }
        private string _DOC_IDSEQ;

        public string DOC_IDSEQ
        {
            get { return _DOC_IDSEQ; }
            set { _DOC_IDSEQ = value; }
        }
        private int _NoOfRecords;

        public int NoOfRecords
        {
            get { return _NoOfRecords; }
            set { _NoOfRecords = value; }
        }
        private string _DOCTOR_CD;

        public string DOCTOR_CD
        {
            get { return _DOCTOR_CD; }
            set { _DOCTOR_CD = value; }
        }
        private string facilityCode;

        public string FacilityCode
        {
            get { return facilityCode; }
            set { facilityCode = value; }
        }

        private string facilityName;

        public string FacilityName
        {
            get { return facilityName; }
            set { facilityName = value; }
        }

        private string facilityDesc;

        public string FacilityDesc
        {
            get { return facilityDesc; }
            set { facilityDesc = value; }
        }

        private string _record_status;
        public string RECORD_STATUS
        {
            set { _record_status = value; }
            get { return _record_status; }
        }
        #region prakash
        private string _doc_status_name;
        public string DOC_STATUS_NAME
        {
            set { _doc_status_name = value; }
            get { return _doc_status_name; }
        }
        private int _doc_status_id;

        public int DOC_STATUS_ID
        {
            get { return _doc_status_id; }
            set { _doc_status_id = value; }
        }
        private int _doc_id;

        public int DOC_ID
        {
            get { return _doc_id; }
            set { _doc_id = value; }
        }
        private int _no_of_cons;

        public int NO_OF_CONS
        {
            get { return _no_of_cons; }
            set { _no_of_cons = value; }
        }
        private string _doctor_name;

        public string DOCTOR_NAME
        {
            get { return _doctor_name; }
            set { _doctor_name = value; }
        }
        #endregion
        private int _create_by;
        public int CREATE_BY
        {
            set { _create_by = value; }
            get { return _create_by; }
        }


        private int _title_id;
        public int TITLE_ID
        {
            set { _title_id = value; }
            get { return _title_id; }
        }
        private int _title_REV_NO;
        public int TITLE_REV_NO
        {
            set { _title_REV_NO = value; }
            get { return _title_REV_NO; }
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
        private int _sex_REV_NO;
        public int SEX_REV_NO
        {
            set { _sex_REV_NO = value; }
            get { return _sex_REV_NO; }
        }
        private string _dob;
        public string DOB
        {
            set { _dob = value; }
            get { return _dob; }
        }
        private DateTime _DOBDt;

        public DateTime DOBDt
        {
            get { return _DOBDt; }
            set { _DOBDt = value; }
        }
        private int _age;
        public int AGE
        {
            set { _age = value; }
            get { return _age; }
        }
        private string _Age1;

        public string Age1
        {
            get { return _Age1; }
            set { _Age1 = value; }
        }
        private int _marital_status_id;
        public int MARITAL_STATUS_ID
        {
            set { _marital_status_id = value; }
            get { return _marital_status_id; }
        }
        private int _marital_status_REV_NO;
        public int MARITAL_STATUS_REV_NO
        {
            set { _marital_status_REV_NO = value; }
            get { return _marital_status_REV_NO; }
        }
        private int _coverage_id;
        public int COVERAGE_ID
        {
            set { _coverage_id = value; }
            get { return _coverage_id; }
        }
        private int _coverage_REV_NO;
        public int COVERAGE_REV_NO
        {
            set { _coverage_REV_NO = value; }
            get { return _coverage_REV_NO; }
        }
        private int _service_type_id;
        public int SERVICE_TYPE_ID
        {
            set { _service_type_id = value; }
            get { return _service_type_id; }
        }
        private int _service_type_REV_NO;
        public int SERVICE_TYPE_REV_NO
        {
            set { _service_type_REV_NO = value; }
            get { return _service_type_REV_NO; }
        }
        private int _facility_id;
        public int FACILITY_ID
        {
            set { _facility_id = value; }
            get { return _facility_id; }
        }
        private int _facility_REV_NO;
        public int FACILITY_REV_NO
        {
            set { _facility_REV_NO = value; }
            get { return _facility_REV_NO; }
        }


        private string _contact_no;
        public string CONTACT_NO
        {
            set { _contact_no = value; }
            get { return _contact_no; }
        }
        private int _department_id;
        public int DEPARTMENT_ID
        {
            set { _department_id = value; }
            get { return _department_id; }
        }
        private int _department_REV_NO;
        public int DEPARTMENT_REV_NO
        {
            set { _department_REV_NO = value; }
            get { return _department_REV_NO; }
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
        private int _doctor_type_REV_NO;
        public int DOCTOR_TYPE_REV_NO
        {
            set { _doctor_type_REV_NO = value; }
            get { return _doctor_type_REV_NO; }
        }
        private int _payment_type_id;
        public int PAYMENT_TYPE_ID
        {
            set { _payment_type_id = value; }
            get { return _payment_type_id; }
        }
        private int _payment_type_REV_NO;
        public int PAYMENT_TYPE_REV_NO
        {
            set { _payment_type_REV_NO = value; }
            get { return _payment_type_REV_NO; }

        }

        private string _service_name;
        public string SERVICE_NAME
        {
            set { _service_name = value; }
            get { return _service_name; }

        }

        private int service_group_id;
        public int SERVICE_GROUP_ID
        {
            get { return service_group_id; }
            set { service_group_id = value; }

        }

        private string _BILL_NO;
        public string BILL_NO
        {
            get { return _BILL_NO; }
            set { _BILL_NO = value; }

        }

        private string _BILL_DT;
        public string BILL_DT
        {
            get { return _BILL_DT; }
            set { _BILL_DT = value; }

        }

        private string _SERVICE_CD;
        public string SERVICE_CD
        {
            get { return _SERVICE_CD; }
            set { _SERVICE_CD = value; }

        }

        private string _PKG;
        public string PKG
        {
            get { return _PKG; }
            set { _PKG = value; }

        }

        #region Referal Properties

        private int referalid;

        public int Referal_ID
        {
            get { return referalid; }
            set { referalid = value; }
        }
        private int referalsrcid;

        public int Referal_Src_CD
        {
            get { return referalsrcid; }
            set { referalsrcid = value; }
        }
        private int referalsrc_id_ver;

        public int Referalsrc_ID_Ver
        {
            get { return referalsrc_id_ver; }
            set { referalsrc_id_ver = value; }
        }
        private int reg_state_id_ver;

        public int Reg_state_id_ver
        {
            get { return reg_state_id_ver; }
            set { reg_state_id_ver = value; }
        }
        private int reg_city_id_ver;

        public int Reg_city_id_ver
        {
            get { return reg_city_id_ver; }
            set { reg_city_id_ver = value; }
        }
        private int reg_country_id_ver;

        public int Reg_country_id_ver
        {
            get { return reg_country_id_ver; }
            set { reg_country_id_ver = value; }
        }
        private string referalname;

        public string Referalname
        {
            get { return referalname; }
            set { referalname = value; }
        }
        public string REFERAL_NAME
        {
            get { return referalname; }
            set { referalname = value; }
        }
        private string registartion_no;

        public string Registartion_no
        {
            get { return registartion_no; }
            set { registartion_no = value; }
        }
        public string REGISTRATION_NO
        {
            get { return registartion_no; }
            set { registartion_no = value; }
        }

        private string referalcd;

        public string Referalcd
        {
            get { return referalcd; }
            set { referalcd = value; }
        }

        public string REFRL_CD
        {
            get { return referalcd; }
            set { referalcd = value; }
        }
        private int add_id_ver;

        public int Add_id_ver
        {
            get { return add_id_ver; }
            set { add_id_ver = value; }
        }
        private int add_grp_id_ver;

        public int Add_grp_id_ver
        {
            get { return add_grp_id_ver; }
            set { add_grp_id_ver = value; }
        }
        private int referal_id_ver;

        public int Referal_id_ver
        {
            get { return referal_id_ver; }
            set { referal_id_ver = value; }
        }
        private int count;

        public int Count
        {
            get { return count; }
            set { count = value; }
        }
        private string _AddtionalVal;
        public string AddtionalVal
        {
            get
            {
                return _AddtionalVal;
            }
            set
            {
                _AddtionalVal = value;
            }

        }
        private string _refaddress;

        public string RefAddress
        {
            get { return _refaddress; }
            set { _refaddress = value; }
        }
        private string _value;


        public string Value
        {
            get
            {
                return _value;
            }
            set
            {
                _value = value;
            }
        }
        private string _text;
        public string Text
        {
            get
            {
                return _text;
            }
            set
            {
                _text = value;
            }

        }
        private string refrl_type_name;

        public string REFRL_TYPE_NAME
        {
            get { return refrl_type_name; }
            set { refrl_type_name = value; }
        }
        private int tariff_id;

        public int TARIFF_ID
        {
            get { return tariff_id; }
            set { tariff_id = value; }
        }
        private string tariff_name;

        public string TARIFF_NAME
        {
            get { return tariff_name; }
            set { tariff_name = value; }
        }

        #endregion

        private int Employee_Type_ID;
        public int EMPLOYEE_TYPE_ID
        {
            set { Employee_Type_ID = value; }
            get { return Employee_Type_ID; }
        }


        private string Employee_Type_Name;
        public string EMPLOYEE_TYPE_NAME
        {
            set { Employee_Type_Name = value; }
            get { return Employee_Type_Name; }
        }

        private string Doctor_Emp_Type_Desc;
        public string DOCTOR_EMP_TYPE_DESC
        {
            set { Doctor_Emp_Type_Desc = value; }
            get { return Doctor_Emp_Type_Desc; }
        }
        private string dispatch_type_id;

        public string DISPATCH_TYPE_ID
        {
            get { return dispatch_type_id; }
            set { dispatch_type_id = value; }
        }
        private string dispatch_method_name;

        public string DISPATCH_METHOD_NAME
        {
            get { return dispatch_method_name; }
            set { dispatch_method_name = value; }
        }
        private int page_size;

        public int PAGE_SIZE
        {
            get { return page_size; }
            set { page_size = value; }
        }
        private int current_page;

        public int CURRENT_PAGE
        {
            get { return current_page; }
            set { current_page = value; }
        }
        private string _REFRAL_CLASS_ID;
        public string refral_class_id
        {
            get { return _REFRAL_CLASS_ID; }
            set { _REFRAL_CLASS_ID = value; }
        }
        private string referal_class_name;
        public string REFERAL_CLASS_NAME
        {
            get { return referal_class_name; }
            set { referal_class_name = value; }
        }
        private string consultant_room_id;
        public string CONSULTANT_ROOM_ID
        {
            get { return consultant_room_id; }
            set { consultant_room_id = value; }
        }
        private string consultant_room_name;
        public string CONSULTANT_ROOM_NAME
        {
            get { return consultant_room_name; }
            set { consultant_room_name = value; }
        }
        public string CO_DOCTOR_STATUS { get; set; }
      

    }
}
