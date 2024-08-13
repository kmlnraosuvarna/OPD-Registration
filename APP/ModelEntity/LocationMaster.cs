using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
   public class LocationMaster
    {
        private string trans_id;

        public string TRANS_ID
        {
            get { return trans_id; }
            set { trans_id = value; }
        }
        private string trans_cd;

        public string TRANS_CD
        {
            get { return trans_cd; }
            set { trans_cd = value; }
        }
        private string trans_rev_no;

        public string TRANS_REV_NO
        {
            get { return trans_rev_no; }
            set { trans_rev_no = value; }
        }
        private string stp_id;

        public string STP_ID
        {
            get { return stp_id; }
            set { stp_id = value; }
        }
        private string department_id;

        public string DEPARTMENT_ID
        {
            get { return department_id; }
            set { department_id = value; }
        }
        private string floor_id;

        public string FLOOR_ID
        {
            get { return floor_id; }
            set { floor_id = value; }
        }
        private string block_id;

        public string BLOCK_ID
        {
            get { return block_id; }
            set { block_id = value; }
        }
        private string create_by;
        public string CREATE_BY
        {
            set { create_by = value; }
            get { return create_by; }
        }
        private string create_dt;
        public string CREATE_DT
        {
            set { create_dt = value; }
            get { return create_dt; }
        }
        private string _MODIFY_BY;
        public string MODIFY_BY
        {
            get { return _MODIFY_BY; }
            set { _MODIFY_BY = value; }
        }
        private string _modify_dt;
        public string MODIFY_DT
        {
            set { _modify_dt = value; }
            get { return _modify_dt; }
        }
        private string floor_name;

        public string FLOOR_NAME
        {
            get { return floor_name; }
            set { floor_name = value; }
        }
        private string floor_desc;

        public string FLOOR_DESC
        {
            get { return floor_desc; }
            set { floor_desc = value; }
        }
        private string floor_cd;

        public string FLOOR_CD
        {
            get { return floor_cd; }
            set { floor_cd = value; }
        }
        private string block_cd;

        public string BLOCK_CD
        {
            get { return block_cd; }
            set { block_cd = value; }
        }
        private string block_name;

        public string BLOCK_NAME
        {
            get { return block_name; }
            set { block_name = value; }
        }
        private string block_desc;

        public string BLOCK_DESC
        {
            get { return block_desc; }
            set { block_desc = value; }
        }
        private int block_rev_no;

        public int BLOCK_REV_NO
        {
            get { return block_rev_no; }
            set { block_rev_no = value; }
        }
        private string record_status;

        public string RECORD_STATUS
        {
            get { return record_status; }
            set { record_status = value; }
        }
        private string stp_name;

        public string STP_NAME
        {
            get { return stp_name; }
            set { stp_name = value; }
        }
        private string department_name;

        public string DEPARTMENT_NAME
        {
            get { return department_name; }
            set { department_name = value; }
        }
        private string dms_upload;

        public string DMS_UPLOAD
        {
            get { return dms_upload; }
            set { dms_upload = value; }
        }
    }
}
