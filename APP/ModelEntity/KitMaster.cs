using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace EzHms.ModelEntity
{
    [Serializable]
    

    public class KitMaster
    {
       
        private string kit_desc;
        public string KIT_DESC
        {
            get { return kit_desc; }
            set { kit_desc = value; }
        }
        private string kit_id;
        public string KIT_ID
        {
            get { return kit_id; }
            set { kit_id = value; }
        }
        private string kit_rev_no;
        public string KIT_REV_NO
        {
            get { return kit_rev_no; }
            set { kit_rev_no = value; }
        }
        private string kit_cd;
        public string KIT_CD
        {
            get { return kit_cd; }
            set { kit_cd = value; }
        }
        private string kit_name;
        public string KIT_NAME
        {
            get { return kit_name; }
            set { kit_name = value; }
        }
        private string kit_validity;
        public string KIT_VALIDITY
        {
            get { return kit_validity; }
            set { kit_validity = value; }
        }

        private string kit_validity_type_id;
        public string KIT_VALIDITY_TYPE_ID
        {
            get { return kit_validity_type_id; }
            set { kit_validity_type_id = value; }
        }

        private string remarks;
        public string REMARKS
        {
            get { return remarks; }
            set { remarks = value; }
        }
        private string approved_by;
        public string APPROVED_BY
        {
            get { return approved_by; }
            set { approved_by = value; }
        }
        private string approved_date;
        public string APPROVED_DATE
        {
            get { return approved_date; }
            set { approved_date = value; }
        }
        private string kit_item_id;
        public string KIT_ITEM_ID
        {
            get { return kit_item_id; }
            set { kit_item_id = value; }
        }
        private string kit_item_rev_no;
        public string KIT_ITEM_REV_NO
        {
            get { return kit_item_rev_no; }
            set { kit_item_rev_no = value; }
        }

        private string item_id;
        public string ITEM_ID
        {
            get { return item_id; }
            set { item_id = value; }
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

        private string tran_xml;
        public string TRAN_XML
        {
            set { tran_xml = value; }
            get { return tran_xml; }
        }
        private string session_id;
        public string SESSION_ID
        {
            set { session_id = value; }
            get { return session_id; }
        }
        private string department_name;
        public string DEPARTMENT_NAME
        {
            set { department_name = value; }
            get { return department_name; }
        }

        private string kit_validity_type_name;
        public string KIT_VALIDITY_TYPE_NAME
        {
            set { kit_validity_type_name = value; }
            get { return kit_validity_type_name; }
        }
        private string sterilization_name;
        public string STERILIZATION_NAME
        {
            set { sterilization_name = value; }
            get { return sterilization_name; }
        }

        private string qty;
        public string QTY
        {
            set { qty = value; }
            get { return qty; }
        }

        private string item_name;
        public string ITEM_NAME
        {
            set { item_name = value; }
            get { return item_name; }
        }
        private string item_cd;
        public string ITEM_CD
        {
            set { item_cd = value; }
            get { return item_cd; }
        }

        private string dept_id;
        public string DEPT_ID
        {
            set { dept_id = value; }
            get { return dept_id; }
        }

        private string sterilize_method_id;
        public string STERILIZE_METHOD_ID
        {
            set { sterilize_method_id = value; }
            get { return sterilize_method_id; }
        }
        private string kit_group_id;
        public string KIT_GROUP_ID
        {
            set { kit_group_id = value; }
            get { return kit_group_id; }
        }
        private string kit_group_name;
        public string KIT_GROUP_NAME
        {
            set { kit_group_name = value; }
            get { return kit_group_name; }
        }
        private string stp_id;
        public string STP_ID
        {
            set { stp_id = value; }
            get { return stp_id; }
        }
        private string kit_price;
        public string KIT_PRICE
        {
            set { kit_price = value; }
            get { return kit_price; }
        }
        private string colour_code;
        public string COLOUR_CODE
        {
            set { colour_code = value; }
            get { return colour_code; }
        }
        private string colour_code_name;
        public string COLOUR_CODE_NAME
        {
            set { colour_code_name = value; }
            get { return colour_code_name; }
        }
        private string onhand_qty;
         public string ONHAND_QTY
        {
            set { onhand_qty = value; }
            get { return onhand_qty; }
        }
         private string blocked_qty;
         public string BLOCKED_QTY
         {
             set { blocked_qty = value; }
             get { return blocked_qty; }
         }
        
      
    }
}
