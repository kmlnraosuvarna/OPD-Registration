using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class PATIENT_MEDICAL_HISTORY : GridPaging
    {

        private int _pmg_id;
        public int PMG_ID
        {
            set { _pmg_id = value; }
            get { return _pmg_id; }
        }
        private int _pmg_rev_no;
        public int PMG_REV_NO
        {
            set { _pmg_rev_no = value; }
            get { return _pmg_rev_no; }
        }
        private int _medical_history_id;
        public int MEDICAL_HISTORY_ID
        {
            set { _medical_history_id = value; }
            get { return _medical_history_id; }
        }
        private int _patient_id;
        public int PATIENT_ID
        {
            set { _patient_id = value; }
            get { return _patient_id; }
        }
        private int _doctor_id;
        public int DOCTOR_ID
        {
            set { _doctor_id = value; }
            get { return _doctor_id; }
        }
        private int _patient_login_id;
        public int PATIENT_LOGIN_ID
        {
            set { _patient_login_id = value; }
            get { return _patient_login_id; }
        }
        private int _consultation_id;
        public int CONSULTATION_ID
        {
            set { _consultation_id = value; }
            get { return _consultation_id; }
        }
        private int _medical_history_grp_id;
        public int MEDICAL_HISTORY_GRP_ID
        {
            set { _medical_history_grp_id = value; }
            get { return _medical_history_grp_id; }
        }
        private string _medical_history_desc;
        public string MEDICAL_HISTORY_DESC
        {
            set { _medical_history_desc = value; }
            get { return _medical_history_desc; }
        }
        private string _notes;
        public string NOTES
        {
            set { _notes = value; }
            get { return _notes; }
        }
        private string _chief_complaint_name;
        public string CHIEF_COMPLAINT_NAME
        {
            set { _chief_complaint_name = value; }
            get { return _chief_complaint_name; }
        }
        private string _duration;
        public string DURATION
        {
            set { _duration = value; }
            get { return _duration; }
        }
        private string _frequency;
        public string FREQUENCY
        {
            set { _frequency = value; }
            get { return _frequency; }
        }
        private string _seviority;
        public string SEVIORITY
        {
            set { _seviority = value; }
            get { return _seviority; }
        }
        private string _chief_complaint_notes;
        public string CHIEF_COMPLAINT_NOTES
        {
            set { _chief_complaint_notes = value; }
            get { return _chief_complaint_notes; }
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

        private DateTime _order_dt;

        public DateTime Order_dt
        {
            get { return _order_dt; }
            set { _order_dt = value; }
        }

        //private DateTime _create_date;

        //public DateTime Create_dt
        //{
        //    get { return _create_date; }
        //    set { _create_date = value; }
        //}
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
        private int _session_id;
        public int SESSION_ID
        {
            set { _session_id = value; }
            get { return _session_id; }
        }
        private int _duration_id;
        public int Duration_ID
        {
            set { _duration_id = value; }
            get { return _duration_id; }
        }
        private string _duration_cd;
        public string Duration_CD
        {
            set { _duration_cd = value; }
            get { return _duration_cd; }
        }
        private string _duration_name;
        public string Duration_NAME
        {
            set { _duration_name = value; }
            get { return _duration_name; }
        }
        private string _duration_desc;
        public string Duration_DESC
        {
            set { _duration_desc = value; }
            get { return _duration_desc; }
        }
        private int _duration_rev_no;
        public int Duration_REV_NO
        {
            set { _duration_rev_no = value; }
            get { return _duration_rev_no; }
        }

        private int _entity_rev_no;
        public int ENTITY_REV_NO
        {
            set { _entity_rev_no = value; }
            get { return _entity_rev_no; }
        }
        private int _entity_id;
        public int ENTITY_ID
        {
            set { _entity_id = value; }
            get { return _entity_id; }
        }

        private int _durationid;
        public int DurationId
        {
            set { _durationid = value; }
            get { return _durationid; }
        }
        private string _period;
        public string Period
        {
            set { _period = value; }
            get { return _period; }
        }
        private int _createdby;
        public int CreatedBy
        {
            set { _createdby = value; }
            get { return _createdby; }
        }
        private string _createddate;
        public string CreatedDate
        {
            set { _createddate = value; }
            get { return _createddate; }
        }
        private int _modifiedby;
        public int ModifiedBy
        {
            set { _modifiedby = value; }
            get { return _modifiedby; }
        }
        private string _modifieddt;
        public string ModifiedDt
        {
            set { _modifieddt = value; }
            get { return _modifieddt; }
        }
        private int _rowversion;
        public int RowVersion
        {
            set { _rowversion = value; }
            get { return _rowversion; }
        }
        private int _rowstatus;
        public int RowStatus
        {
            set { _rowstatus = value; }
            get { return _rowstatus; }
        }
        private int _frequency_id;
        public int Frequency_ID
        {
            set { _frequency_id = value; }
            get { return _frequency_id; }
        }
        private string _frequency_cd;
        public string Frequency_CD
        {
            set { _frequency_cd = value; }
            get { return _frequency_cd; }
        }
        private string _frequency_name;
        public string Frequency_NAME
        {
            set { _frequency_name = value; }
            get { return _frequency_name; }
        }
        private string _frequency_desc;
        public string Frequency_DESC
        {
            set { _frequency_desc = value; }
            get { return _frequency_desc; }
        }
        private int _frequency_rev_no;
        public int Frequency_REV_NO
        {
            set { _frequency_rev_no = value; }
            get { return _frequency_rev_no; }
        }

        private int _priority_id;
        public int PRIORITY_ID
        {
            set { _priority_id = value; }
            get { return _priority_id; }
        }
        private string _priority_cd;
        public string PRIORITY_CD
        {
            set { _priority_cd = value; }
            get { return _priority_cd; }
        }
        private string _priority_name;
        public string PRIORITY_NAME
        {
            set { _priority_name = value; }
            get { return _priority_name; }
        }
        private string _priority_desc;
        public string PRIORITY_DESC
        {
            set { _priority_desc = value; }
            get { return _priority_desc; }
        }
        private int _priority_rev_no;
        public int PRIORITY_REV_NO
        {
            set { _priority_rev_no = value; }
            get { return _priority_rev_no; }
        }
        private int _chf_cmpt_id;
        public int CHF_CMPT_ID
        {
            set { _chf_cmpt_id = value; }
            get { return _chf_cmpt_id; }
        }
        private int _chf_cmpt_rev_no;
        public int CHF_CMPT_REV_NO
        {
            set { _chf_cmpt_rev_no = value; }
            get { return _chf_cmpt_rev_no; }
        }
        private string _chief_cmpt_cd;
        public string CHIEF_CMPT_CD
        {
            set { _chief_cmpt_cd = value; }
            get { return _chief_cmpt_cd; }
        }
        private string _chief_cmpt_name;
        public string CHIEF_CMPT_NAME
        {
            set { _chief_cmpt_name = value; }
            get { return _chief_cmpt_name; }
        }
        private int _specztn_id;
        public int SPECZTN_ID
        {
            set { _specztn_id = value; }
            get { return _specztn_id; }
        }
        private string _dosage;
        public string DOSAGE
        {
            set { _dosage = value; }
            get { return _dosage; }
        }

        private int _uom_id;
        public int UOM_ID
        {
            set { _uom_id = value; }
            get { return _uom_id; }
        }
        private string _uom_name;
        public string UOM_NAME
        {
            set { _uom_name = value; }
            get { return _uom_name; }
        }
        private int _uom_rev_no;
        public int UOM_REV_NO
        {
            set { _uom_rev_no = value; }
            get { return _uom_rev_no; }
        }
        private string _priority;
        public string PRIORITY
        {
            set { _priority = value; }
            get { return _priority; }
        }
        private int _complaint_type_id;

        public int COMPLAINT_TYPE_ID
        {
            get { return _complaint_type_id; }
            set { _complaint_type_id = value; }
        }
        private int _dept_id;

        public int DEPT_ID
        {
            get { return _dept_id; }
            set { _dept_id = value; }
        }
        private string _complaint_type_name;

        public string COMPLAINT_TYPE_NAME
        {
            get { return _complaint_type_name; }
            set { _complaint_type_name = value; }
        }
        private int _np_sub_complaint_id;

        public int NP_SUB_COMPLAINT0_ID
        {
            get { return _np_sub_complaint_id; }
            set { _np_sub_complaint_id = value; }
        }
        private int _np_sub_complaint_rev_no;

        public int NP_SUB_COMPLAINT_REV_NO
        {
            get { return _np_sub_complaint_rev_no; }
            set { _np_sub_complaint_rev_no = value; }
        }
        private string _np_sub_complaint_cd;

        public string NP_SUB_COMPLAINT_CD
        {
            get { return _np_sub_complaint_cd; }
            set { _np_sub_complaint_cd = value; }
        }
        private string _np_sub_complaint_desc;

        public string NP_SUB_COMPLAINT_DESC
        {
            get { return _np_sub_complaint_desc; }
            set { _np_sub_complaint_desc = value; }
        }

        private string _is_active;

        public string ISACTIVE
        {
            get { return _is_active; }
            set { _is_active = value; }
        }
        private int _main_complaint_id;

        public int MAIN_COMPLAINT_ID
        {
            get { return _main_complaint_id; }
            set { _main_complaint_id = value; }
        }

        private string _param_name;

        public string PARAM_NAME
        {
            get { return _param_name; }
            set { _param_name = value; }
        }
        private string _department_name;

        public string DEPARTMENT_NAME
        {
            get { return _department_name; }
            set { _department_name = value; }
        }
        private int _np_sub_complaint1_id;

        public int NP_SUB_COMPLAINT1_ID
        {
            get { return _np_sub_complaint1_id; }
            set { _np_sub_complaint1_id = value; }
        }

        private string _gsiv_complaints_id;

        public string GSIV_COMPLAINTS_ID
        {
            get { return _gsiv_complaints_id; }
            set { _gsiv_complaints_id = value; }
        }
        private string _gsiv_complaints_rev_no;

        public string GSIV_COMPLAINTS_REV_NO
        {
            get { return _gsiv_complaints_rev_no; }
            set { _gsiv_complaints_rev_no = value; }
        }
        private string _complaint_id;

        public string COMPLAINT_ID
        {
            get { return _complaint_id; }
            set { _complaint_id = value; }
        }
        private string _complaint_desc;

        public string COMPLAINT_DESC
        {
            get { return _complaint_desc; }
            set { _complaint_desc = value; }
        }
        private string _subcomplaint_id;

        public string SUB_COMPLAINT_ID
        {
            get { return _subcomplaint_id; }
            set { _subcomplaint_id = value; }
        }
        private string _subcomplaint_desc;

        public string SUB_COMPLAINT_DESC
        {
            get { return _subcomplaint_desc; }
            set { _subcomplaint_desc = value; }
        }
        private string _complaint_type;

        public string COMPLAINT_TYPE
        {
            get { return _complaint_type; }
            set { _complaint_type = value; }
        }
        private string _comments;

        public string COMMENTS
        {
            get { return _comments; }
            set { _comments = value; }
        }
        private string _umr_no;

        public string UMR_NO
        {
            get { return _umr_no; }
            set { _umr_no = value; }
        }
        private string _visit_no;

        public string VISIT_NO
        {
            get { return _visit_no; }
            set { _visit_no = value; }
        }
        private string _married;

        public string MARRIED
        {
            get { return _married; }
            set { _married = value; }
        }
        private int _childrens;

        public int CHILDRENS
        {
            get { return _childrens; }
            set { _childrens = value; }
        }
        private int _mens;

        public int MENS
        {
            get { return _mens; }
            set { _mens = value; }
        }
        private int _womens;

        public int WOMENS
        {
            get { return _womens; }
            set { _womens = value; }
        }
        private string _presentNote;

        public string PREHOSPITALIZATIONNOTES
        {
            get { return _presentNote; }
            set { _presentNote = value; }
        }
        private string _personalNote;

        public string PERCOMPLAINTNOTES
        {
            get { return _personalNote; }
            set { _personalNote = value; }
        }
        private string _pastNotes;

        public string PACOMPLAINTNOTES
        {
            get { return _pastNotes; }
            set { _pastNotes = value; }
        }
        private string _surNotes;

        public string SURGCOMPLAINTNOTES
        {
            get { return _surNotes; }
            set { _surNotes = value; }
        }
        private string _sysNotes;

        public string SYSTCOMPLAINTNOTES
        {
            get { return _sysNotes; }
            set { _sysNotes = value; }
        }
        private string _chiefNotes;

        public string CHCOMPLAINTNOTES
        {
            get { return _chiefNotes; }
            set { _chiefNotes = value; }
        }
        private string _presurgiries;

        public string PRESURGERIES
        {
            get { return _presurgiries; }
            set { _presurgiries = value; }
        }
        private string _otherDiagnosis;

        public string OTHERDIAGS
        {
            get { return _otherDiagnosis; }
            set { _otherDiagnosis = value; }
        }
        private string _reviewdate;

        public string REVIEWDATE
        {
            get { return _reviewdate; }
            set { _reviewdate = value; }
        }
        private string _sentence;

        public string SENTENCE
        {
            get { return _sentence; }
            set { _sentence = value; }
        }

        private string _appointmenttime;

        public string APPOINTMENTTIME
        {
            get { return _appointmenttime; }
            set { _appointmenttime = value; }
        }
        private string _chiefsentenceform;

        public string CHIEFSENTENCEFORM
        {
            get { return _chiefsentenceform; }
            set { _chiefsentenceform = value; }
        }
        private string _presentsentenceform;

        public string PRESENTSENTENCEFORM
        {
            get { return _presentsentenceform; }
            set { _presentsentenceform = value; }
        }
        private string _pastsentenceform;

        public string PASTSENTENCEFORM
        {
            get { return _pastsentenceform; }
            set { _pastsentenceform = value; }
        }
        private string _surgesenteceform;
        public string SURGSENTENCEFORM
        {
            get { return _surgesenteceform; }
            set { _surgesenteceform = value; }
        }
        private string _persenteceform;

        public string PERSENTENCEFORM
        {
            get { return _persenteceform; }
            set { _persenteceform = value; }
        }
        private string _gensentenceform;

        public string GENSENTENCEFORM
        {
            get { return _gensentenceform; }
            set { _gensentenceform = value; }
        }
        private string _systsenteceform;

        public string SYSTSENTENCEFORM
        {
            get { return _systsenteceform; }
            set { _systsenteceform = value; }
        }
        private string _pacesenteceform;

        public string PACESENTENCEFORM
        {
            get { return _pacesenteceform; }
            set { _pacesenteceform = value; }
        }
        private string _progchanges;

        public string PROGRAMCHANGES
        {
            get { return _progchanges; }
            set { _progchanges = value; }
        }
        private string _lead;

        public string LEAD
        {
            get { return _lead; }
            set { _lead = value; }
        }
        private string _a;

        public string A
        {
            get { return _a; }
            set { _a = value; }
        }
        private string _v;

        public string V
        {
            get { return _v; }
            set { _v = value; }
        }
        private string _rv;

        public string RV
        {
            get { return _rv; }
            set { _rv = value; }
        }
        private string _lv;

        public string LV
        {
            get { return _lv; }
            set { _lv = value; }
        }
        private string _battery;

        public string BATTERY
        {
            get { return _battery; }
            set { _battery = value; }
        }
        private string _type;
        public string TYPE
        {
            get { return _type; }
            set { _type = value; }
        }
        private string _treatpaln_dt;

        public string TREATPLAN_DT
        {
            get { return _treatpaln_dt; }
            set { _treatpaln_dt = value; }
        }
        private string _treatmnt_plan;

        public string TREATMNT_PLAN
        {
            get { return _treatmnt_plan; }
            set { _treatmnt_plan = value; }
        }
        private string _treatmanage_plan_id;

        public string TREATMANAGE_PLAN_ID
        {
            get { return _treatmanage_plan_id; }
            set { _treatmanage_plan_id = value; }
        }
        private string _visit_dt;
        public string VISIT_DT
        {
            get { return _visit_dt; }
            set { _visit_dt = value; }
        }

        private string _famcomplaintnotes;

        public string FAMCOMPLAINTNOTES
        {
            get { return _famcomplaintnotes; }
            set { _famcomplaintnotes = value; }
        }
        private string _drugcomplaintnotes;

        public string DRUGCOMPLAINTNOTES
        {
            get { return _drugcomplaintnotes; }
            set { _drugcomplaintnotes = value; }
        }
        private string _habcomplaintnotes;

        public string HABCOMPLAINTNOTES
        {
            get { return _habcomplaintnotes; }
            set { _habcomplaintnotes = value; }
        }
        private int _np_iv_bodyimages;
        public int NP_IVBODY_IMAGES_ID
        {
            get { return _np_iv_bodyimages; }
            set { _np_iv_bodyimages = value; }
        }
        private int _np_ivbodyimg_rev_no;

        public int NP_IVBODY_IMAGES_REV_NO
        {
            get { return _np_ivbodyimg_rev_no; }
            set { _np_ivbodyimg_rev_no = value; }
        }
        private int _sno;

        public int SNO
        {
            get { return _sno; }
            set { _sno = value; }
        }
        private string _img_name;

        public string IMAGE_NAME
        {
            get { return _img_name; }
            set { _img_name = value; }
        }
        private string _image_path;

        public string IMAGE_PATH
        {
            get { return _image_path; }
            set { _image_path = value; }
        }
        private int _pixel_row;

        public int PIXEL_ROW
        {
            get { return _pixel_row; }
            set { _pixel_row = value; }
        }
        private int _pixel_col;

        public int PIXEL_COL
        {
            get { return _pixel_col; }
            set { _pixel_col = value; }
        }
        private string _selectin_type;

        public string SELECTION_TYPE
        {
            get { return _selectin_type; }
            set { _selectin_type = value; }
        }
        private string _forecole_cd;

        public string FORE_COLOUR_CD
        {
            get { return _forecole_cd; }
            set { _forecole_cd = value; }
        }
        private string _arraythmianotes;

        public string ARRHYTHMIANOTES
        {
            get { return _arraythmianotes; }
            set { _arraythmianotes = value; }
        }
        private string _rotuineexamnotes;

        public string ROUTINEEXAMNOTES
        {
            get { return _rotuineexamnotes; }
            set { _rotuineexamnotes = value; }
        }
        private string _arraythmiasentenceform;

        public string ARRHYTHMIASESENTENCEFORM
        {
            get { return _arraythmiasentenceform; }
            set { _arraythmiasentenceform = value; }
        }
        private string _routinsenteceform;

        public string ROUTINESENTENCEFORM
        {
            get { return _routinsenteceform; }
            set { _routinsenteceform = value; }
        }
    }
}
