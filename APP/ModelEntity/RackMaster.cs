using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class RackMaster
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

        private string department_cd;

        public string DEPARTMENT_CD
        {
            get { return department_cd; }
            set { department_cd = value; }
        }


        private string kit_rack_id;

        public string KIT_RACK_ID
        {
            get { return kit_rack_id; }
            set { kit_rack_id = value; }
        }
        private string companycd;

        public string COMPANYCD
        {
            get { return companycd; }
            set { companycd = value; }
        }
        private string locationcd;

        public string LOCATIONCD
        {
            get { return locationcd; }
            set { locationcd = value; }
        }
        private string formatname;

        public string FORMATNAME
        {
            get { return formatname; }
            set { formatname = value; }
        }
        private string indextype;

        public string INDEXTYPE
        {
            get { return indextype; }
            set { indextype = value; }
        }
        private string formatcd;
        public string FORMATCD
        {
            get { return formatcd; }
            set { formatcd = value; }
        }
        private string nextpg;
        public string NEXTPG
        {
            get { return nextpg; }
            set { nextpg = value; }
        }

        private string aliasname;
        public string ALIASNAME
        {
            get { return aliasname; }
            set { aliasname = value; }
        }
        private string createby;
        public string CREATEBY
        {
            get { return createby; }
            set { createby = value; }
        }
        private string cabinet_id;
        public string CABINET_ID
        {
            get { return cabinet_id; }
            set { cabinet_id = value; }
        }
        private string kit_rack_rev_no;

        public string KIT_RACK_REV_NO
        {
            get { return kit_rack_rev_no; }
            set { kit_rack_rev_no = value; }
        }

        private string kit_rack_cd;

        public string KIT_RACK_CD
        {
            get { return kit_rack_cd; }
            set { kit_rack_cd = value; }
        }

        private string rack_name;

        public string RACK_NAME
        {
            get { return rack_name; }
            set { rack_name = value; }
        }

        private string rack_desc;

        public string RACK_DESC
        {
            get { return rack_desc; }
            set { rack_desc = value; }
        }

        private string capasity;

        public string CAPASITY
        {
            get { return capasity; }
            set { capasity = value; }
        }

        private string room_no;

        public string ROOM_NO
        {
            get { return room_no; }
            set { room_no = value; }
        }
        private string referrence_id;

        public string REFERRENCE_ID
        {
            get { return referrence_id; }
            set { referrence_id = value; }
        }

        private string storage_type_id;

        public string STORAGE_TYPE_ID
        {
            get { return storage_type_id; }
            set { storage_type_id = value; }
        }

        private string reference_type_id;

        public string REFERENCE_TYPE_ID
        {
            get { return reference_type_id; }
            set { reference_type_id = value; }
        }
        private string storage_type_name;
        public string STORAGE_TYPE_NAME
        {
            get { return storage_type_name; }
            set { storage_type_name = value; }
        }
        private string filled_qty;
        public string FILLED_QTY
        {
            get { return filled_qty; }
            set { filled_qty = value; }
        }
        private string dms_upload;
        public string DMS_UPLOAD
        {
            get { return dms_upload; }
            set { dms_upload = value; }
        }
        private string admn_no;

        public string ADMN_NO
        {
            get { return admn_no; }
            set { admn_no = value; }
        }
        private string umr_no;

        public string UMR_NO
        {
            get { return umr_no; }
            set { umr_no = value; }
        }
        private string session_id;

        public string SESSION_ID
        {
            get { return session_id; }
            set { session_id = value; }
        }

        private int _NoOfRecords;

        public int NoOfRecords
        {
            get { return _NoOfRecords; }
            set { _NoOfRecords = value; }
        }
        private string _ROOM_NAME;
        public string ROOM_NAME
        {
            get { return _ROOM_NAME; }
            set { _ROOM_NAME = value; }
        }
        private string _Dept_id;
        public string Dept_id
        {
            get { return _Dept_id; }
            set { _Dept_id = value; }
        }
        
    }
}
