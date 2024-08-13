using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
   public class KitGroupMaster
    {
        private string kit_group_id;
        public string KIT_GROUP_ID
        {
            get { return kit_group_id; }
            set { kit_group_id = value; }
        }
        private string kit_group_rev_no;
        public string KIT_GROUP_REV_NO
        {
            get { return kit_group_rev_no; }
            set { kit_group_rev_no = value; }
        }
        private string kit_group_cd;
        public string KIT_GROUP_CD
        {
            get { return kit_group_cd; }
            set { kit_group_cd = value; }
        }
        private string kit_group_name;
        public string KIT_GROUP_NAME
        {
            get { return kit_group_name; }
            set { kit_group_name = value; }
        }
        private string kit_group_desc;
        public string KIT_GROUP_DESC
        {
            get { return kit_group_desc; }
            set { kit_group_desc = value; }
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
            set { create_by = value; }
            get { return create_by; }
        }
        private string create_dt;
        public string CREATE_DT
        {
            set { create_dt = value; }
            get { return create_dt; }
        }
        private string modify_by;
        public string MODIFY_BY
        {
            set { modify_by = value; }
            get { return modify_by; }
        }
        private string modify_dt;
        public string MODIFY_DT
        {
            set { modify_dt = value; }
            get { return modify_dt; }
        }
        private string stp_id;
        public string STP_ID
        {
            set { stp_id = value; }
            get { return stp_id; }
        }
    }
}
