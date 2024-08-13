using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class MedicalRecordMaintenaceCollection
    {
        //public MedicalRecordMaintenaceCollection GetList(int position)
        //{
        //    return (MedicalRecordMaintenaceCollection)InnerList[position];
        //}
        private string file_storage_main_id;
        public string FILE_STORAGE_MAIN_ID
        {
            get { return file_storage_main_id; }
            set { file_storage_main_id = value; }
        }
        private string file_storage_main_cd;
        public string FILE_STORAGE_MAIN_CD
        {
            get { return file_storage_main_cd; }
            set { file_storage_main_cd = value; }
        }
        private string file_storage_main_rev_no;
        public string FILE_STORAGE_MAIN_REV_NO
        {
            get { return file_storage_main_rev_no; }
            set { file_storage_main_rev_no = value; }
        }
        private string kit_rack_id;
        public string KIT_RACK_ID
        {
            get { return kit_rack_id; }
            set { kit_rack_id = value; }
        }
        private string rack_no;
        public string RACK_NO
        {
            get { return rack_no; }
            set { rack_no = value; }
        }
        private int rack_id;
        public int RACK_ID
        {
            get { return rack_id; }
            set { rack_id = value; }
        }
        private string rack_name;
        public string RACK_NAME
        {
            get { return rack_name; }
            set { rack_name = value; }
        }
        private string block_name;
        public string BLOCK_NAME
        {
            get { return block_name; }
            set { block_name = value; }
        }
        private string floor_name;
        public string FLOOR_NAME
        {
            get { return floor_name; }
            set { floor_name = value; }
        }
        private string room_no;
        public string ROOM_NO
        {
            get { return room_no; }
            set { room_no = value; }
        }
        private int capasity;
        public int CAPASITY
        {
            get { return capasity; }
            set { capasity = value; }
        }
        private int row;
        public int ROW
        {
            get { return row; }
            set { row = value; }
        }
        private int tot_record_cnt;
        public int TOT_RECORD_CNT
        {
            get { return tot_record_cnt; }
            set { tot_record_cnt = value; }
        }
        private int block_id;
        public int BLOCK_ID
        {
            get { return block_id; }
            set { block_id = value; }
        }

        private int floor_id;
        public int FLOOR_ID
        {
            get { return floor_id; }
            set { floor_id = value; }
        }
        private string remarks;
        public string REMARKS
        {
            get { return remarks; }
            set { remarks = value; }
        }
        private string admissionno;
        public string ADMISSIONNO
        {
            get { return admissionno; }
            set { admissionno = value; }
        }
        private string umrno;
        public string UMRNO
        {
            get { return umrno; }
            set { umrno = value; }
        }
        private string partient_name;
        public string PATIENT_NAME
        {
            get { return partient_name; }
            set { partient_name = value; }
        }
        private string record_status;
        public string RECORD_STATUS
        {
            get { return record_status; }
            set { record_status = value; }
        }
        private string create_by;
        public string CREATE_BY
        {
            get { return create_by; }
            set { create_by = value; }
        }
        private string create_dt;
        public string CREATE_DT
        {
            get { return create_dt; }
            set { create_dt = value; }
        }
        private string modify_by;
        public string MODIFY_BY
        {
            get { return modify_by; }
            set { modify_by = value; }
        }
        private string modify_dt;
        public string MODIFY_DT
        {
            get { return modify_dt; }
            set { modify_dt = value; }
        }
        private string display_name;
        public string DISPLAY_NAME
        {
            get { return display_name; }
            set { display_name = value; }
        }
        private string ward_name;
        public string WARD_NAME
        {
            get { return ward_name; }
            set { ward_name = value; }
        }
        private string admn_dt;
        public string ADMN_DT
        {
            get { return admn_dt; }
            set { admn_dt = value; }
        }
        private string ward_group_name;
        public string WARD_GROUP_NAME
        {
            get { return ward_group_name; }
            set { ward_group_name = value; }
        }
        private string company_name;
        public string COMPANY_NAME
        {
            get { return company_name; }
            set { company_name = value; }
        }
        private string primary_doctor_name;
        public string PRIMARY_DOCTOR_NAME
        {
            get { return primary_doctor_name; }
            set { primary_doctor_name = value; }
        }
    }
}
