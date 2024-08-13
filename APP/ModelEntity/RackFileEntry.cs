using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{

    public class RackFileEntry
    {
        private int _rack_file_id;
        public int RACK_FILE_ID
        {
            set { _rack_file_id = value; }
            get { return _rack_file_id; }
        }
        private int _rack_file_rev_no;
        public int RACK_FILE_REV_NO
        {
            set { _rack_file_rev_no = value; }
            get { return _rack_file_rev_no; }
        }
        private string _rack_file_cd;
        public string RACK_FILE_CD
        {
            set { _rack_file_cd = value; }
            get { return _rack_file_cd; }
        }
        private string mrd_infectious_name;
        public string MRD_INFECTIOUS_NAME
        {
            set { mrd_infectious_name = value; }
            get { return mrd_infectious_name; }
        }
        private int _rack_entry_type_id;
        public int RACK_ENTRY_TYPE_ID
        {
            set { _rack_entry_type_id = value; }
            get { return _rack_entry_type_id; }
        }
        private string _admn_no;
        public string ADMN_NO
        {
            set { _admn_no = value; }
            get { return _admn_no; }
        }
        private string _umrno;
        public string UMRNO
        {
            set { _umrno = value; }
            get { return _umrno; }
        }
        private int _rack_id;
        public int RACK_ID
        {
            set { _rack_id = value; }
            get { return _rack_id; }
        }
        private int _qty;
        public int QTY
        {
            set { _qty = value; }
            get { return _qty; }
        }
        private string _remarks;
        public string REMARKS
        {
            set { _remarks = value; }
            get { return _remarks; }
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

        private string storage_type_name;
        public string STORAGE_TYPE_NAME
        {
            set { storage_type_name = value; }
            get { return storage_type_name; }
        }

        private string rack_name;
        public string RACK_NAME
        {
            set { rack_name = value; }
            get { return rack_name; }
        }
        private string room_no;
        public string ROOM_NO
        {
            set { room_no = value; }
            get { return room_no; }
        }
        private string floor_name;
        public string FLOOR_NAME
        {
            set { floor_name = value; }
            get { return floor_name; }
        }

        private string block_name;
        public string BLOCK_NAME
        {
            set { block_name = value; }
            get { return block_name; }
        }

        private string fill_qty;
        public string FILL_QTY
        {
            set { fill_qty = value; }
            get { return fill_qty; }
        }

        private string capasity;
        public string CAPASITY
        {
            set { capasity = value; }
            get { return capasity; }
        }
        private string floor_id;
        public string FLOOR_ID
        {
            set { floor_id = value; }
            get { return floor_id; }

        }
        private string bloc_id;
        public string BLOCK_ID
        {
            set { bloc_id = value; }
            get { return bloc_id; }

        }
        private string _ADMISSION_TYPE;
        public string ADMISSION_TYPE
        {
            set { _ADMISSION_TYPE = value; }
            get { return _ADMISSION_TYPE; }

        }
        //MRDFILESVIW
        private string admissionno;

        public string ADMISSIONNO
        {
            get { return admissionno; }
            set { admissionno = value; }
        }

        private string patientname;

        public string PATIENTNAME
        {
            get { return patientname; }
            set { patientname = value; }
        }
        private string admissiondt;

        public string ADMISSIONDT
        {
            get { return admissiondt; }
            set { admissiondt = value; }
        }
        private string dischargedt;

        public string DISCHARGEDT
        {
            get { return dischargedt; }
            set { dischargedt = value; }
        }
        private string patienttype;

        public string PATIENTTYPE
        {
            get { return patienttype; }
            set { patienttype = value; }
        }
        private string dmodifydt;

        public string DMODIFYDT
        {
            get { return dmodifydt; }
            set { dmodifydt = value; }
        }
        private string dmodifyby;

        public string DMODIFYBY
        {
            get { return dmodifyby; }
            set { dmodifyby = value; }
        }
        private string dcreatedt;

        public string DCREATEDT
        {
            get { return dcreatedt; }
            set { dcreatedt = value; }
        }
        private string dcreateby;

        public string DCREATEBY
        {
            get { return dcreateby; }
            set { dcreateby = value; }
        }
        private string quality_check_by;

        public string QUALITY_CHECK_BY
        {
            get { return quality_check_by; }
            set { quality_check_by = value; }
        }
        private string is_quality_check;

        public string IS_QUALITY_CHECK
        {
            get { return is_quality_check; }
            set { is_quality_check = value; }
        }
        private string dfileid;

        public string DFILEID
        {
            get { return dfileid; }
            set { dfileid = value; }
        }
        private string doctor_name;

        public string DOCTOR_NAME
        {
            get { return doctor_name; }
            set { doctor_name = value; }
        }
        private string doctor_cd;

        public string DOCTOR_CD
        {
            get { return doctor_cd; }
            set { doctor_cd = value; }
        }
        private string doctor_id;

        public string DOCTOR_ID
        {
            get { return doctor_id; }
            set { doctor_id = value; }
        }
        private string tran_xml;

        public string TRAN_XML
        {
            get { return tran_xml; }
            set { tran_xml = value; }
        }
        private string is_mlc;

        public string IS_MLC
        {
            get { return is_mlc; }
            set { is_mlc = value; }
        }
        private string mlc_id;

        public string MLC_ID
        {
            get { return mlc_id; }
            set { mlc_id = value; }
        }
        private string mlc_no;

        public string MLC_NO
        {
            get { return mlc_no; }
            set { mlc_no = value; }
        }
        private string admn_id;

        public string ADMN_ID
        {
            get { return admn_id; }
            set { admn_id = value; }
        }
        private string mlc_approve;

        public string MLC_APPROVE
        {
            get { return mlc_approve; }
            set { mlc_approve = value; }
        }

        private string dms_mrd_id;

        public string DMS_MRD_ID
        {
            get { return dms_mrd_id; }
            set { dms_mrd_id = value; }
        }

        private string gov_auth_submit_status;

        public string GOV_AUTH_SUBMIT_STATUS
        {
            get { return gov_auth_submit_status; }
            set { gov_auth_submit_status = value; }
        }

        private string sub_remarks;

        public string SUB_REMARKS
        {
            get { return sub_remarks; }
            set { sub_remarks = value; }
        }

        private string sub_by;

        public string SUB_BY
        {
            get { return sub_by; }
            set { sub_by = value; }
        }

        private string sub_dt;

        public string SUB_DT
        {
            get { return sub_dt; }
            set { sub_dt = value; }
        }

        private string sub_to;

        public string SUB_TO
        {
            get { return sub_to; }
            set { sub_to = value; }
        }

        private string print_count;

        public string PRINT_COUNT
        {
            get { return print_count; }
            set { print_count = value; }
        }
        private string count;

        public string COUNT
        {
            get { return count; }
            set { count = value; }
        }
        private string colour_cd;

        public string COLOUR_CD
        {
            get { return colour_cd; }
            set { colour_cd = value; }
        }
        private string dms_upload;

        public string DMS_UPLOAD
        {
            get { return dms_upload; }
            set { dms_upload = value; }
        }
        public string COLUMN_NAME { get; set; }
        public string FLAG { get; set; }
        public string DISPLAY_NAME { get; set; }
        public string AGE { get; set; }
        public string GENDER_NAME { get; set; }
        public string FATHER_NAME { get; set; }
        public string DOA { get; set; }
        public string DOD { get; set; }
        public string DOB { get; set; }
        public string DOCTORNAME { get; set; }
        public string PATIENT_DIAGNOSIS { get; set; }
    }

}
