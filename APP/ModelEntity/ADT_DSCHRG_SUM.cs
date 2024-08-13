using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class ADT_DSCHRG_SUM : LookUpSearch//:GridPaging
    {
        private int _sum_id;
        private int _sum_rev_no;
        private string _sum_no;
        private string _sum_dt;
        private string _umr_no;
        private string _admn_no;
        private string _admn_dt;
        private int _dept_id;
        private int _dept_rev_no;
        private int _format_id;
        private int _format_rev_no;
        private string _weight;

        private string surgery_dt;
        public string SURGERY_DT
        {

            set { surgery_dt = value; }
            get { return surgery_dt; }
        }
        private string _APPROVE_BY_NAME;
        public string APPROVE_BY_NAME
        {
            set { _APPROVE_BY_NAME = value; }
            get { return _APPROVE_BY_NAME; }
        }


        private string _DSUMRY_STATUS;
        public string DSUMRY_STATUS
        {
            set { _DSUMRY_STATUS = value; }
            get { return _DSUMRY_STATUS; }
        }


        private string _DSUM_STATUS;
        public string DSUM_STATUS
        {
            set { _DSUM_STATUS = value; }
            get { return _DSUM_STATUS; }
        }

        private int format_note_id;
        public int FORMAT_NOTE_ID
        {
            set { format_note_id = value; }
            get { return format_note_id; }
        }

        private int _sum_note_rev_no;
        public int SUM_NOTE_REV_NO
        {
            set { _sum_note_rev_no = value; }
            get { return _sum_note_rev_no; }
        }
        public int SUM_ID
        {
            set { _sum_id = value; }
            get { return _sum_id; }
        }
        public int SUM_REV_NO
        {
            set { _sum_rev_no = value; }
            get { return _sum_rev_no; }
        }
        public string SUM_NO
        {
            set { _sum_no = value; }
            get { return _sum_no; }
        }
        public string SUM_DT
        {
            set { _sum_dt = value; }
            get { return _sum_dt; }
        }
        public string UMR_NO
        {
            set { _umr_no = value; }
            get { return _umr_no; }
        }
        private int _ADMISSION_ID;
        public int ADMISSION_ID
        {
            get { return _ADMISSION_ID; }
            set { _ADMISSION_ID = value; }
        }
        public string ADMN_NO
        {
            set { _admn_no = value; }
            get { return _admn_no; }
        }
        public string ADMN_DT
        {
            set { _admn_dt = value; }
            get { return _admn_dt; }
        }
        public int DEPT_ID
        {
            set { _dept_id = value; }
            get { return _dept_id; }
        }
        public int DEPT_REV_NO
        {
            set { _dept_rev_no = value; }
            get { return _dept_rev_no; }
        }
        public int FORMAT_ID
        {
            set { _format_id = value; }
            get { return _format_id; }
        }
        public int FORMAT_REV_NO
        {
            set { _format_rev_no = value; }
            get { return _format_rev_no; }
        }
        public string WEIGHT
        {
            set { _weight = value; }
            get { return _weight; }
        }
        private string _format_name;
        public string FORMAT_NAME
        {
            set { _format_name = value; }
            get { return _format_name; }
        }
        private string _format_desc;
        public string FORMAT_DESC
        {
            set { _format_desc = value; }
            get { return _format_desc; }
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
        private int _approve_by;
        public int APPROVE_BY
        {
            set { _approve_by = value; }
            get { return _approve_by; }
        }
        private string _approve_dt;
        public string APPROVE_DT
        {
            set { _approve_dt = value; }
            get { return _approve_dt; }
        }
        private string _record_status;
        public string RECORD_STATUS
        {
            set { _record_status = value; }
            get { return _record_status; }
        }
        private int _grp_id;
        public int GRP_ID
        {
            set { _grp_id = value; }
            get { return _grp_id; }
        }
        private int _org_id;
        public int ORG_ID
        {
            set { _org_id = value; }
            get { return _org_id; }
        }
        private int _loc_id;
        public int LOC_ID
        {
            set { _loc_id = value; }
            get { return _loc_id; }
        }
        private CollectionBase _ADT_DSCHRG_SUM_COLLEC;
        public CollectionBase ADT_DSCHRG_SUM_COLLEC
        {
            get { return _ADT_DSCHRG_SUM_COLLEC; }
            set { _ADT_DSCHRG_SUM_COLLEC = value; }
        }
        private string _SERVICE_ID;
        public string SERVICE_ID
        {
            get { return _SERVICE_ID; }
            set { _SERVICE_ID = value; }
        }
        private string _DEPARTMENT_NAME;

        public string DEPARTMENT_NAME
        {
            get { return _DEPARTMENT_NAME; }
            set { _DEPARTMENT_NAME = value; }
        }
        private string _DOCTOR_NAME;

        public string DOCTOR_NAME
        {
            get { return _DOCTOR_NAME; }
            set { _DOCTOR_NAME = value; }
        }
        private string _SERVICE_NAME;

        public string SERVICE_NAME
        {
            get { return _SERVICE_NAME; }
            set { _SERVICE_NAME = value; }
        }
        private string _NOTES;

        public string NOTES
        {
            get { return _NOTES; }
            set { _NOTES = value; }
        }
        private string _RESUL_VALUE;
        private string _RESUL_VALUES;
        private string _RESUL_VALUEB;
        private string _SERVICE_GROUP_ID;

        public string SERVICE_GROUP_ID
        {
            get { return _SERVICE_GROUP_ID; }
            set { _SERVICE_GROUP_ID = value; }
        }

        private int _BILL_ID;

        public int BILL_ID
        {
            get { return _BILL_ID; }
            set { _BILL_ID = value; }
        }

        public string RESULT_VALUE
        {
            get { return _RESUL_VALUE; }
            set { _RESUL_VALUE = value; }
        }

        public string RESULT_VALUES
        {
            get { return _RESUL_VALUES; }
            set { _RESUL_VALUES = value; }
        }

        public string RESULT_VALUEB
        {
            get { return _RESUL_VALUEB; }
            set { _RESUL_VALUEB = value; }
        }

        private string _NORMAL_VALUE;

        private string _PARAMETERS;

        private int _RESULT_ID;

        public string PARAMETERS
        {
            get { return _PARAMETERS; }
            set { _PARAMETERS = value; }
        }

        public int RESULT_ID
        {
            get { return _RESULT_ID; }
            set { _RESULT_ID = value; }
        }

        public string NORMAL_VALUE
        {
            get { return _NORMAL_VALUE; }
            set { _NORMAL_VALUE = value; }
        }

        private int _RESULT_NO;

        public int RESULT_NO
        {
            get { return _RESULT_NO; }
            set { _RESULT_NO = value; }
        }

        private string sub_title;
        public string SUB_TITLE
        {
            get { return sub_title; }
            set { sub_title = value; }
        }

        private int sum_note_id;
        public int SUM_NOTE_ID
        {
            get { return sum_note_id; }
            set { sum_note_id = value; }
        }

        private int print_order;
        public int PRINT_ORDER
        {
            get { return print_order; }
            set { print_order = value; }
        }

        private string isexist;
        public string ISEXIST
        {
            get { return isexist; }
            set { isexist = value; }
        }
        //
        private string age;
        public string AGE
        {
            get { return age; }
            set { age = value; }
        }

        private string display_name;
        public string DISPLAY_NAME
        {
            get { return display_name; }
            set { display_name = value; }
        }

        private string title;
        public string TITLE
        {
            get { return title; }
            set { title = value; }
        }

        private string gender_name;
        public string GENDER_NAME
        {
            get { return gender_name; }
            set { gender_name = value; }
        }

        private string depatment;
        public string DEPATMENT
        {
            get { return depatment; }
            set { depatment = value; }
        }
        private string treatment_by_id;
        public string TREATMENT_BY_ID
        {
            get { return treatment_by_id; }
            set { treatment_by_id = value; }
        }
        private string treatment_by;
        public string TREATMENT_BY
        {
            get { return treatment_by; }
            set { treatment_by = value; }
        }

        private string treat_wardname;
        public string TREAT_WARDNAME
        {
            get { return treat_wardname; }
            set { treat_wardname = value; }
        }

        private string mobile_phone;
        public string MOBILE_PHONE
        {
            get { return mobile_phone; }
            set { mobile_phone = value; }
        }

        private string address1;
        public string ADDRESS1
        {
            get { return address1; }
            set { address1 = value; }
        }

        private string address2;
        public string ADDRESS2
        {
            get { return address2; }
            set { address2 = value; }
        }

        private string dischr_dt;
        public string DISCHR_DT
        {
            get { return dischr_dt; }
            set { dischr_dt = value; }
        }

        private string component_name;
        public string COMPONENT_NAME
        {
            get { return component_name; }
            set { component_name = value; }
        }

        private string srv_type;
        public string SRV_TYPE
        {
            get { return srv_type; }
            set { srv_type = value; }
        }

        private int component_control_id;
        public int COMPONENT_CONTROL_ID
        {
            get { return component_control_id; }
            set { component_control_id = value; }
        }

        private int uom_id;
        public int UOM_ID
        {
            get { return uom_id; }
            set { uom_id = value; }
        }

        private string is_anti_biotic;
        public string IS_ANTI_BIOTIC
        {
            get { return is_anti_biotic; }
            set { is_anti_biotic = value; }
        }

        private int sno;
        public int SNO
        {
            get { return sno; }
            set { sno = value; }
        }

        private int component_id;
        public int COMPONENT_ID
        {
            get { return component_id; }
            set { component_id = value; }
        }

        private string bill_dt;
        public string BILL_DT
        {
            get { return bill_dt; }
            set { bill_dt = value; }
        }

        private string ref_type;
        public string REF_TYPE
        {
            get { return ref_type; }
            set { ref_type = value; }
        }

        private string sensitive;
        public string SENSITIVE
        {
            get { return sensitive; }
            set { sensitive = value; }
        }

        private string mode_rate;
        public string MODE_RATE
        {
            get { return mode_rate; }
            set { mode_rate = value; }
        }

        private string resistive;
        public string RESISTIVE
        {
            get { return resistive; }
            set { resistive = value; }
        }

        private string organism_name;
        public string ORGANISM_NAME
        {
            get { return organism_name; }
            set { organism_name = value; }
        }

        private int dis_summary_id;
        public int DIS_SUMMARY_ID
        {
            get { return dis_summary_id; }
            set { dis_summary_id = value; }
        }

        private int param_order;
        public int PARAM_ORDER
        {
            get { return param_order; }
            set { param_order = value; }
        }

        private string approved_status;
        public string APPROVED_STATUS
        {
            get { return approved_status; }
            set { approved_status = value; }
        }
        private string _CATH_LAB_NO;
        public string CATH_LAB_NO
        {
            get { return _CATH_LAB_NO; }
            set { _CATH_LAB_NO = value; }
        }

        private string _DOCTOR_ID;
        public string DOCTOR_ID
        {
            get { return _DOCTOR_ID; }
            set { _DOCTOR_ID = value; }
        }

        private string _AREA;
        public string AREA
        {
            get { return _AREA; }
            set { _AREA = value; }
        }

        private string _CITY;
        public string CITY
        {
            get { return _CITY; }
            set { _CITY = value; }
        }

        private string _STATE;
        public string STATE
        {
            get { return _STATE; }
            set { _STATE = value; }
        }

        private string _COUNTRY;
        public string COUNTRY
        {
            get { return _COUNTRY; }
            set { _COUNTRY = value; }
        }
        private string _treat_doctor_dept;
        public string TREAT_DOCTOR_DEPT
        {
            get { return _treat_doctor_dept; }
            set { _treat_doctor_dept = value; }
        }

        private string _PROCEDURE_DT;
        public string PROCEDURE_DT
        {
            get { return _PROCEDURE_DT; }
            set { _PROCEDURE_DT = value; }
        }

        private string _MODIFY_BY_NAME;
        public string MODIFY_BY_NAME
        {
            get { return _MODIFY_BY_NAME; }
            set { _MODIFY_BY_NAME = value; }
        }
        private string _FORMAT_TYPE;
        public string FORMAT_TYPE
        {
            get { return _FORMAT_TYPE; }
            set { _FORMAT_TYPE = value; }
        }

        private string _REVIEW_DT;
        public string REVIEW_DT
        {
            get { return _REVIEW_DT; }
            set { _REVIEW_DT = value; }
        }


        private int Item_ID;
        public int ITEM_ID
        {
            get { return Item_ID; }
            set { Item_ID = value; }
        }

        private string Item_Cd;
        public string ITEM_CD
        {
            get { return Item_Cd; }
            set { Item_Cd = value; }
        }

        private string Item_Desc;
        public string ITEM_DESC
        {
            get { return Item_Desc; }
            set { Item_Desc = value; }
        }

        private string Morninig;
        public string MORNINIG
        {
            get { return Morninig; }
            set { Morninig = value; }
        }

        private string AfterNoon;
        public string AFTERNOON
        {
            get { return AfterNoon; }
            set { AfterNoon = value; }
        }

        private string Eveninig;
        public string EVENINIG
        {
            get { return Eveninig; }
            set { Eveninig = value; }
        }

        private string Night;
        public string NIGHT
        {
            get { return Night; }
            set { Night = value; }
        }

        private string No_Of_Days;
        public string NO_OF_DAYS
        {
            get { return No_Of_Days; }
            set { No_Of_Days = value; }
        }


        private string Instructions;
        public string INSTRUCTIONS
        {
            get { return Instructions; }
            set { Instructions = value; }
        }
        private int Instructions_ID;
        public int INSTRUCTIONS_ID
        {
            get { return Instructions_ID; }
            set { Instructions_ID = value; }
        }


        private string Dosage;
        public string DOSAGE
        {
            get { return Dosage; }
            set { Dosage = value; }
        }

        private string Roa_Name;
        public string ROA_NAME
        {
            get { return Roa_Name; }
            set { Roa_Name = value; }
        }

        private int Roa_ID;
        public int ROA_ID
        {
            get { return Roa_ID; }
            set { Roa_ID = value; }
        }

        #region GeneralTest
        private int _PATIENT_GEN_EXAM_ID;
        public int PATIENT_GEN_EXAM_ID
        {
            get { return _PATIENT_GEN_EXAM_ID; }
            set { _PATIENT_GEN_EXAM_ID = value; }
        }

        private int _PATIENT_GEN_EXAM_REV_NO;
        public int PATIENT_GEN_EXAM_REV_NO
        {
            get { return _PATIENT_GEN_EXAM_REV_NO; }
            set { _PATIENT_GEN_EXAM_REV_NO = value; }
        }




        private int _PATIENT_ID;
        public int PATIENT_ID
        {
            get { return _PATIENT_ID; }
            set { _PATIENT_ID = value; }
        }

        private string _PULSE_RATE;
        public string PULSE_RATE
        {
            get { return _PULSE_RATE; }
            set { _PULSE_RATE = value; }
        }
        private string _HEART_RATE;
        public string HEART_RATE
        {
            get { return _HEART_RATE; }
            set { _HEART_RATE = value; }
        }

        private string _BLOODPRESSURE;
        public string BLOODPRESSURE
        {
            get { return _BLOODPRESSURE; }
            set { _BLOODPRESSURE = value; }
        }
        private string _RESPORATORYRATE;
        public string RESPORATORYRATE
        {
            get { return _RESPORATORYRATE; }
            set { _RESPORATORYRATE = value; }
        }

        private string _TEMPRATURE;
        public string TEMPRATURE
        {
            get { return _TEMPRATURE; }
            set { _TEMPRATURE = value; }
        }




        private string _SPO2;
        public string SPO2
        {
            get { return _SPO2; }
            set { _SPO2 = value; }
        }


        private string _BUILT;
        public string BUILT
        {
            get { return _BUILT; }
            set { _BUILT = value; }
        }


        private string _APPEARANCE;
        public string APPEARANCE
        {
            get { return _APPEARANCE; }
            set { _APPEARANCE = value; }
        }





        private string _ENLARGEMENT;
        public string ENLARGEMENT
        {
            get { return _ENLARGEMENT; }
            set { _ENLARGEMENT = value; }
        }
        private string _BMI;
        public string BMI
        {
            get { return _BMI; }
            set { _BMI = value; }
        }

        private string _HEIGHT;
        public string HEIGHT
        {
            get { return _HEIGHT; }
            set { _HEIGHT = value; }
        }
        private string _BSA;
        public string BSA
        {
            get { return _BSA; }
            set { _BSA = value; }
        }

        private string _BP_STANDING;
        public string BP_STANDING
        {
            get { return _BP_STANDING; }
            set { _BP_STANDING = value; }
        }

        private string _BP_SUPINE;
        public string BP_SUPINE
        {
            get { return _BP_SUPINE; }
            set { _BP_SUPINE = value; }
        }


        #endregion
        private string secondary_doc_name;
        public string SECONDARY_DOC_NAME
        {
            get { return secondary_doc_name; }
            set { secondary_doc_name = value; }
        }

        private string sec_dco_doctor_dept;
        public string SEC_DCO_DOCTOR_DEPT
        {
            get { return sec_dco_doctor_dept; }
            set { sec_dco_doctor_dept = value; }
        }

        private string sec_doc_signature;
        public string SEC_DOC_SIGNATURE
        {
            get { return sec_doc_signature; }
            set { sec_doc_signature = value; }
        }

        private string sec_doc_designation;
        public string SEC_DOC_DESIGNATION
        {
            get { return sec_doc_designation; }
            set { sec_doc_designation = value; }
        }

        private string sec_doc_qualification;
        public string SEC_DOC_QUALIFICATION
        {
            get { return sec_doc_qualification; }
            set { sec_doc_qualification = value; }
        }

        private int refrl_id;
        public int REFRL_ID
        {
            get { return refrl_id; }
            set { refrl_id = value; }
        }

        private string refrl_name;
        public string REFRL_NAME
        {
            get { return refrl_name; }
            set { refrl_name = value; }
        }

        private string refrl_doctr_dept_name;
        public string REFRL_DOCTR_DEPT_NAME
        {
            get { return refrl_doctr_dept_name; }
            set { refrl_doctr_dept_name = value; }
        }

        private string refrl_doctr_signature;
        public string REFRL_DOCTR_SIGNATURE
        {
            get { return refrl_doctr_signature; }
            set { refrl_doctr_signature = value; }
        }

        private string refrl_doctr_designation;
        public string REFRL_DOCTR_DESIGNATION
        {
            get { return refrl_doctr_designation; }
            set { refrl_doctr_designation = value; }
        }

        private string refrl_doctr_qualification;
        public string REFRL_DOCTR_QUALIFICATION
        {
            get { return refrl_doctr_qualification; }
            set { refrl_doctr_qualification = value; }
        }






        private int ordr_doctor_id;
        public int ORDR_DOCTOR_ID
        {
            get { return ordr_doctor_id; }
            set { ordr_doctor_id = value; }
        }

        private string ordr_doctor_name;
        public string ORDR_DOCTOR_NAME
        {
            get { return ordr_doctor_name; }
            set { ordr_doctor_name = value; }
        }

        private string order_doctr_dept_name;
        public string ORDER_DOCTR_DEPT_NAME
        {
            get { return order_doctr_dept_name; }
            set { order_doctr_dept_name = value; }
        }

        private string order_doctr_signature;
        public string ORDER_DOCTR_SIGNATURE
        {
            get { return order_doctr_signature; }
            set { order_doctr_signature = value; }
        }

        private string order_doctr_designation;
        public string ORDER_DOCTR_DESIGNATION
        {
            get { return order_doctr_designation; }
            set { order_doctr_designation = value; }
        }

        private string order_doctr_qualification;
        public string ORDER_DOCTR_QUALIFICATION
        {
            get { return order_doctr_qualification; }
            set { order_doctr_qualification = value; }
        }


        private string disc_req_no;
        public string DISC_REQ_NO
        {
            get { return disc_req_no; }
            set { disc_req_no = value; }
        }


        private string disc_req_dt;
        public string DISC_REQ_DT
        {
            get { return disc_req_dt; }
            set { disc_req_dt = value; }
        }

        private string discharge_dt;
        public string DISCHARGE_DT
        {
            get { return discharge_dt; }
            set { discharge_dt = value; }
        }

        private string _BILL_NO;
        public string BILL_NO
        {
            get { return _BILL_NO; }
            set { _BILL_NO = value; }
        }
        private string _PACKAGE_DTLS;
        public string PACKAGE_DTLS
        {
            get { return _PACKAGE_DTLS; }
            set { _PACKAGE_DTLS = value; }
        }
        private string modified_by;
        public string MODIFIED_BY
        {
            get { return modified_by; }
            set { modified_by = value; }
        }
        private string created_by;
        public string CREATED_BY
        {
            get { return created_by; }
            set { created_by = value; }
        }


        #region DYNAMIC DOCUMENT MASTER
        private int attribute_id;
        public int ATTRIBUTE_ID
        {
            get { return attribute_id; }
            set { attribute_id = value; }
        }
        private int document_id;
        public int DOCUMENT_ID
        {
            get { return document_id; }
            set { document_id = value; }
        }

        private string document_name;
        public string DOCUMENT_NAME
        {
            get { return document_name; }
            set { document_name = value; }
        }
        private string attribute_cd;
        public string ATTRIBUTE_CD
        {
            get { return attribute_cd; }
            set { attribute_cd = value; }
        }
        private string attribute_name;
        public string ATTRIBUTE_NAME
        {
            get { return attribute_name; }
            set { attribute_name = value; }
        }

        private string logical_cd;
        public string LOGICAL_CD
        {
            get { return logical_cd; }
            set { logical_cd = value; }
        }

        private string physical_cd;
        public string PHYSICAL_CD
        {
            get { return physical_cd; }
            set { physical_cd = value; }
        }

        private string doc_attr_xml;
        public string DOC_ATTR_XML
        {
            get { return doc_attr_xml; }
            set { doc_attr_xml = value; }
        }

        private string add_attributes;
        public string ADD_ATTRIBUTES
        {
            get { return add_attributes; }
            set { add_attributes = value; }
        }

        private string modify_attributes;
        public string MODIFY_ATTRIBUTES
        {
            get { return modify_attributes; }
            set { modify_attributes = value; }
        }

        private string qry_attributes;
        public string QRY_ATTRIBUTES
        {
            get { return qry_attributes; }
            set { qry_attributes = value; }
        }
        private string document_cd;
        public string DOCUMENT_CD
        {
            get { return document_cd; }
            set { document_cd = value; }
        }
        private string document_rev_no;
        public string DOCUMENT_REV_NO
        {
            get { return document_rev_no; }
            set { document_rev_no = value; }
        }
        #endregion DYNAMIC DOCUMENT MASTER
        private string icd_cd;
        public string ICD_CD
        {
            get { return icd_cd; }
            set { icd_cd = value; }
        }

        private string icd_name;
        public string ICD_NAME
        {
            get { return icd_name; }
            set { icd_name = value; }
        }

        private string diagnosis;
        public string DIAGNOSIS
        {
            get { return diagnosis; }
            set { diagnosis = value; }
        }


        private int disc_req_id;
        public int DISC_REQ_ID
        {
            get { return disc_req_id; }
            set { disc_req_id = value; }
        }
        private string er_no;
        public string ER_NO
        {
            get { return er_no; }
            set { er_no = value; }
        }
        private int trn_source_id;
        public int TRN_SOURCE_ID
        {
            get { return trn_source_id; }
            set { trn_source_id = value; }
        }

        private string critical_value;
        public string CRITICAL_VALUE
        {
            get { return critical_value; }
            set { critical_value = value; }
        }
        private string _report_xml;
        public string REPORT_XML
        {
            set { _report_xml = value; }
            get { return _report_xml; }
        }
        private string _dsumry_hdr;
        public string DSUMRY_HDR
        {
            set { _dsumry_hdr = value; }
            get { return _dsumry_hdr; }
        }
        private string _email_id;
        public string EMAIL_ID
        {
            set { _email_id = value; }
            get { return _email_id; }
        }
        private string _role_id;
        public string ROLE_ID
        {
            set { _role_id = value; }
            get { return _role_id; }
        }
        private string _role_name;
        public string ROLE_NAME
        {
            set { _role_name = value; }
            get { return _role_name; }
        }
        private string _result_status;
        public string RESULT_STATUS
        {
            set { _result_status = value; }
            get { return _result_status; }
        }
        private string _result_status_name;
        public string RESULT_STATUS_NAME
        {
            set { _result_status_name = value; }
            get { return _result_status_name; }
        }
        private string _INVS_XML;
        public string INVS_XML
        {
            set { _INVS_XML = value; }
            get { return _INVS_XML; }
        }
        private string _CONS_XML;
        public string CONS_XML
        {
            set { _CONS_XML = value; }
            get { return _CONS_XML; }
        }
        private string _MEDICS_XML;
        public string MEDICS_XML
        {
            set { _MEDICS_XML = value; }
            get { return _MEDICS_XML; }
        }
        private string _DIAGNOSYS_XML;
        public string DIAGNOSYS_XML
        {
            set { _DIAGNOSYS_XML = value; }
            get { return _DIAGNOSYS_XML; }
        }
        private string _MLC_NO;
        public string MLC_NO
        {
            set { _MLC_NO = value; }
            get { return _MLC_NO; }
        }
        private string _MLC_NAME;
        public string MLC_NAME
        {
            set { _MLC_NAME = value; }
            get { return _MLC_NAME; }
        }
        private string _MLC_TYPE_NAME;
        public string MLC_TYPE_NAME
        {
            set { _MLC_TYPE_NAME = value; }
            get { return _MLC_TYPE_NAME; }
        }

        private string _TEMPLATE_XML;
        public string TEMPLATE_XML
        {
            set { _TEMPLATE_XML = value; }
            get { return _TEMPLATE_XML; }
        }

        #region VITAL Properties
        private string _SYSTOLIC;
        public string SYSTOLIC
        {
            set { _SYSTOLIC = value; }
            get { return _SYSTOLIC; }
        }
        private string _SYSTOLIC_SITTING;
        public string SYSTOLIC_SITTING
        {
            set { _SYSTOLIC_SITTING = value; }
            get { return _SYSTOLIC_SITTING; }
        }
        private string _SYSTOLIC_STANDING;
        public string SYSTOLIC_STANDING
        {
            set { _SYSTOLIC_STANDING = value; }
            get { return _SYSTOLIC_STANDING; }
        }
        private string _DIASTOLIC;
        public string DIASTOLIC
        {
            set { _DIASTOLIC = value; }
            get { return _DIASTOLIC; }
        }
        private string _DIASTOLIC_SITTING;
        public string DIASTOLIC_SITTING
        {
            set { _DIASTOLIC_SITTING = value; }
            get { return _DIASTOLIC_SITTING; }
        }
        private string _DIASTOLIC_STANDING;
        public string DIASTOLIC_STANDING
        {
            set { _DIASTOLIC_STANDING = value; }
            get { return _DIASTOLIC_STANDING; }
        }
        private string _PULSE;
        public string PULSE
        {
            set { _PULSE = value; }
            get { return _PULSE; }
        }
        private string _RESPORATORY_RATE;
        public string RESPORATORY_RATE
        {
            set { _RESPORATORY_RATE = value; }
            get { return _RESPORATORY_RATE; }
        }
        private string _WEIGHTS;
        public string WEIGHTS
        {
            set { _WEIGHTS = value; }
            get { return _WEIGHTS; }
        }
        private string _ADMN_ID;
        public string ADMN_ID
        {
            set { _ADMN_ID = value; }
            get { return _ADMN_ID; }
        }
        private string _VISIT_DT;
        public string VISIT_DT
        {
            set { _VISIT_DT = value; }
            get { return _VISIT_DT; }
        }

        #endregion VITAL Properties
        #region Diagnosys Properties
        private string _DIAGNOSIS_ID;
        public string DIAGNOSIS_ID
        {
            set { _DIAGNOSIS_ID = value; }
            get { return _DIAGNOSIS_ID; }
        }
        private string _DIAGNOSIS_CD;
        public string DIAGNOSIS_CD
        {
            set { _DIAGNOSIS_CD = value; }
            get { return _DIAGNOSIS_CD; }
        }
        private string _DIAGNOSIS_NAME;
        public string DIAGNOSIS_NAME
        {
            set { _DIAGNOSIS_NAME = value; }
            get { return _DIAGNOSIS_NAME; }
        }
        private string _DIAGNOSIS_DESC;
        public string DIAGNOSIS_DESC
        {
            set { _DIAGNOSIS_DESC = value; }
            get { return _DIAGNOSIS_DESC; }
        }
        private string _DIAGNOSIS_DISPNAME;
        public string DIAGNOSIS_DISPNAME
        {
            set { _DIAGNOSIS_DISPNAME = value; }
            get { return _DIAGNOSIS_DISPNAME; }
        }
        private string _DIAG_TYPE;
        public string DIAG_TYPE
        {
            set { _DIAG_TYPE = value; }
            get { return _DIAG_TYPE; }
        }
        #endregion Diagnosys Properties
        /*Grid page --start*/
        #region gridpage
        private int _user_id;
        public int USER_ID
        {
            set
            {
                _user_id = value;
            }
            get { return _user_id; }
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
        /*private string _ADMN_DT;

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
        }*/
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
        private string tran_type_id;

        public string TRAN_TYPE_ID
        {
            get { return tran_type_id; }
            set { tran_type_id = value; }
        }
        private int pc_req_id;
        public int PC_REQ_ID
        {
            get { return pc_req_id; }
            set { pc_req_id = value; }
        }
        private int pc_req_source_id;
        public int PC_REQ_SOURCE_ID
        {
            get { return pc_req_source_id; }
            set { pc_req_source_id = value; }
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
        #endregion gridpage
        /*Grid page --stop*/

        private string _DS_SUMID;
        public string DS_SUMID
        {
            set { _DS_SUMID = value; }
            get { return _DS_SUMID; }
        }
        private string _ICD_ID;
        public string ICD_ID
        {
            set { _ICD_ID = value; }
            get { return _ICD_ID; }
        }

        private string _IND_NO;
        public string IND_NO
        {
            get { return _IND_NO; }
            set { _IND_NO = value; }
        }
        private string parameter_type;
        public string PARAMETER_TYPE
        {
            get { return parameter_type; }
            set { parameter_type = value; }
        }
        private string is_beneath;
        public string IS_BENEATH
        {
            get { return is_beneath; }
            set { is_beneath = value; }
        }
        private string is_beside;
        public string IS_BESIDE
        {
            get { return is_beside; }
            set { is_beside = value; }
        }
        private string units;
        public string UNITS
        {
            get { return units; }
            set { units = value; }
        }
        private string _SURGERY_XML;
        public string SURGERY_XML
        {
            get { return _SURGERY_XML; }
            set { _SURGERY_XML = value; }
        }
        private string _SURGERY_ID;
        public string SURGERY_ID
        {
            get { return _SURGERY_ID; }
            set { _SURGERY_ID = value; }
        }
        private string _DSCHRG_FRMT_SRGRY_ID;
        public string DSCHRG_FRMT_SRGRY_ID
        {
            get { return _DSCHRG_FRMT_SRGRY_ID; }
            set { _DSCHRG_FRMT_SRGRY_ID = value; }
        }

        private string _DSCHRG_FRMT_SRGRY_REV_NO;
        public string DSCHRG_FRMT_SRGRY_REV_NO
        {
            get { return _DSCHRG_FRMT_SRGRY_REV_NO; }
            set { _DSCHRG_FRMT_SRGRY_REV_NO = value; }
        }

        private string _SURGERY_CD;
        public string SURGERY_CD
        {
            get { return _SURGERY_CD; }
            set { _SURGERY_CD = value; }
        }
        private string _SURGERY_NAME;
        public string SURGERY_NAME
        {
            get { return _SURGERY_NAME; }
            set { _SURGERY_NAME = value; }
        }
        private string _DEPT_NAME;
        public string DEPT_NAME
        {
            get { return _DEPT_NAME; }
            set { _DEPT_NAME = value; }
        }
        private string _PAT_DIAGNS_ID;
        public string PAT_DIAGNS_ID
        {
            get { return _PAT_DIAGNS_ID; }
            set { _PAT_DIAGNS_ID = value; }
        }
        private string _PAT_DIAGNS_REV_NO;
        public string PAT_DIAGNS_REV_NO
        {
            get { return _PAT_DIAGNS_REV_NO; }
            set { _PAT_DIAGNS_REV_NO = value; }
        }

        private string _RELATION_ID;
        public string RELATION_ID
        {
            get { return _RELATION_ID; }
            set { _RELATION_ID = value; }
        }
        private string _RES_PERSON_NAME;
        public string RES_PERSON_NAME
        {
            get { return _RES_PERSON_NAME; }
            set { _RES_PERSON_NAME = value; }
        }
        private string _RESP_RELATION_NAME;
        public string RESP_RELATION_NAME
        {
            get { return _RESP_RELATION_NAME; }
            set { _RESP_RELATION_NAME = value; }
        }
        private string _GENDER_ID;
        public string GENDER_ID
        {
            get { return _GENDER_ID; }
            set { _GENDER_ID = value; }
        }
        private string _DSCHRG_DT;
        public string DSCHRG_DT
        {
            get { return _DSCHRG_DT; }
            set { _DSCHRG_DT = value; }
        }
        private string _CREATE_BY_NAME;
        public string CREATE_BY_NAME
        {
            get { return _CREATE_BY_NAME; }
            set { _CREATE_BY_NAME = value; }
        }
        private string _DOCTOR_DEPARTMENT_NAME;
        public string DOCTOR_DEPARTMENT_NAME
        {
            get { return _DOCTOR_DEPARTMENT_NAME; }
            set { _DOCTOR_DEPARTMENT_NAME = value; }
        }
        private string _DESIGNATION_NAME;
        public string DESIGNATION_NAME
        {
            get { return _DESIGNATION_NAME; }
            set { _DESIGNATION_NAME = value; }
        }
        private string _DOCTOR_CD;
        public string DOCTOR_CD
        {
            get { return _DOCTOR_CD; }
            set { _DOCTOR_CD = value; }
        }
        private string _DESIGNATION_ID;
        public string DESIGNATION_ID
        {
            get { return _DESIGNATION_ID; }
            set { _DESIGNATION_ID = value; }
        }
        private string _SPECIALIZATION_ID;
        public string SPECIALIZATION_ID
        {
            get { return _SPECIALIZATION_ID; }
            set { _SPECIALIZATION_ID = value; }
        }
        private string _SPECIALIZATION_NAME;
        public string SPECIALIZATION_NAME
        {
            get { return _SPECIALIZATION_NAME; }
            set { _SPECIALIZATION_NAME = value; }
        }
        private string _DESIGNATION_INFO;
        public string DESIGNATION_INFO
        {
            get { return _DESIGNATION_INFO; }
            set { _DESIGNATION_INFO = value; }
        }

        private string _QUALIFICATION_NAME;
        public string QUALIFICATION_NAME
        {
            get { return _QUALIFICATION_NAME; }
            set { _QUALIFICATION_NAME = value; }
        }
        private string _ADMISSION_DT;
        public string ADMISSION_DT
        {
            get { return _ADMISSION_DT; }
            set { _ADMISSION_DT = value; }
        }
        private string _ROW;
        public string ROW
        {
            get { return _ROW; }
            set { _ROW = value; }
        }
        private string _DSUMRY_HTML;
        public string DSUMRY_HTML
        {
            set { _DSUMRY_HTML = value; }
            get { return _DSUMRY_HTML; }
        }
        private string _ROOM_ID;
        public string ROOM_ID
        {
            set { _ROOM_ID = value; }
            get { return _ROOM_ID; }
        }
        private string _ROOM_NAME;
        public string ROOM_NAME
        {
            set { _ROOM_NAME = value; }
            get { return _ROOM_NAME; }
        }
        public string ORG_NAME { get; set; }
        public string DISCHARGE_TYPE { get; set; }
        public string SECNDARY_DCTR_ID { get; set; }
        public string SECNDARY_DCTR_NAME { get; set; }
        public string MOBILE_NO { get; set; }
        public string DISCHR_DT1 { get; set; }
        public string ADMN_EC_IDS { get; set; }
        public string ADMN_EC_NAMES { get; set; }
        public string ITEM_CATEGORY { get; set; }
        public int BED_ID { get; set; }
        public string BED_NAME { get; set; }
        public string REPORT_TITLE { get; set; }
        public string APPROVED_STATUS1 { get; set; }
        

    }
}



