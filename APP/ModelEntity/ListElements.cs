#region Comments
// ClassName    : ListElements.cs
// Description  : This class is object for List of Elements. We can Use this class to bind 
//                data where we can use for list like Dropdown, checkbox list, readio button list
//                This class contains two properties value and text field.
// Author       : G.Lakshmi Narayana,
// DateCreated  : 12/04/2010.
// Modified By  : 
// Modified Date:  
#endregion
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class ListElements : CommonPropeties
    {
        #region Member Variables
        private int item_id;
        public int ITEM_ID
        {
            set { item_id = value; }
            get { return item_id; }
        }
        private string item_cd;
        public string ITEM_CD
        {
            set { item_cd = value; }
            get { return item_cd; }
        }
        private string item_name;
        public string ITEM_NAME
        {
            set { item_name = value; }
            get { return item_name; }
        }
        private int _REQUEST_TYPE_ID;
        public int REQUEST_TYPE_ID
        {
            get { return _REQUEST_TYPE_ID; }
            set { _REQUEST_TYPE_ID = value; }
        }

        private int _KIT_TYPE_ID;
        public int KIT_TYPE_ID
        {
            get { return _KIT_TYPE_ID; }
            set { _KIT_TYPE_ID = value; }
        }
        private int _MATERIAL_TYPE_ID;
        public int MATERIAL_TYPE_ID
        {
            get { return _MATERIAL_TYPE_ID; }
            set { _MATERIAL_TYPE_ID = value; }
        }
        private int stp_id;
        public int STP_ID
        {
            get { return stp_id; }
            set { stp_id = value; }
        }
        private string _value = string.Empty;
        private string _text = string.Empty;
        private string _name = string.Empty;
        private List<object> _ListObjVal = null;

        private string _hint1_id = string.Empty;
        private string _hint1_ans = string.Empty;
        private string _hint2_id = string.Empty;
        private byte[] _image = new byte[1];

        #endregion Member Variables
        #region Public Properties
        public string VALUE
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
        public string TEXT
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
        public string Name
        {
            get
            {
                return _name;
            }
            set
            {
                _name = value;
            }

        }
        public List<object> ListObjVal
        {
            get
            {
                return _ListObjVal;
            }
            set
            {
                _ListObjVal = value;
            }
        }
        public string HINT1_ID
        {
            get
            {
                return _hint1_id;
            }
            set
            {
                _hint1_id = value;
            }
        }
        public string HINT1_ANS
        {
            get
            {
                return _hint1_ans;
            }
            set
            {
                _hint1_ans = value;
            }

        }
        public string HINT2_ID
        {
            get { return _hint2_id; }
            set { _hint2_id = value; }
        }
        public byte[] image
        {
            get { return _image; }
            set { _image = value; }
        }
        #endregion Public Properties

        private string equipment_group_id;

        public string EQUIPMENT_GROUP_ID
        {
            get { return equipment_group_id; }
            set { equipment_group_id = value; }
        }

        private string eqmt_curr_status_id;

        public string EQMT_CURR_STATUS_ID
        {
            get { return eqmt_curr_status_id; }
            set { eqmt_curr_status_id = value; }
        }
        private string equipment_group_name;

        public string EQUIPMENT_GROUP_NAME
        {
            get { return equipment_group_name; }
            set { equipment_group_name = value; }
        }
        private string package_includes;

        public string PACKAGE_INCLUDES
        {
            get { return package_includes; }
            set { package_includes = value; }
        }
        private string prefix_text;
        public string PREFIX_TEXT
        {
            get { return prefix_text; }
            set { prefix_text = value; }
        }
        private string flag;
        public string FLAG
        {
            get { return flag; }
            set { flag = value; }
        }
        private string model_no;
        public string MODEL_NO
        {
            get { return model_no; }
            set { model_no = value; }
        }
        private string batchno;
        public string BATCH_NO
        {
            get { return batchno; }
            set { batchno = value; }
        }
        private string onhand_qty;
        public string ONHAND_QTY
        {
            get { return onhand_qty; }
            set { onhand_qty = value; }
        }
        private string qtyadj;
        public string QTY_ADJ
        {
            get { return qtyadj; }
            set { qtyadj = value; }
        }
        private string identity_no;
        public string IDENTITY_NO
        {
            get { return identity_no; }
            set { identity_no = value; }
        }
        private string barcode;
        public string BARCODE
        {
            get { return barcode; }
            set { barcode = value; }
        }
        private string expiry_dt;
        public string EXPIRY_DT
        {
            get { return expiry_dt; }
            set { expiry_dt = value; }
        }
        private string desription;
        public string DESRIPTION
        {
            get { return desription; }
            set { desription = value; }
        }
        private string blocked_qty;
        public string BLOCKED_QTY
        {
            get { return blocked_qty; }
            set { blocked_qty = value; }
        }
        private int kit_storage_item_id;
        public int KIT_STORAGE_ITEM_ID
        {
            get { return kit_storage_item_id; }
            set { kit_storage_item_id = value; }
        }
        private string model_name;

        public string MODEL_NAME
        {
            get { return model_name; }
            set { model_name = value; }
        }
        private string qtyonhand;
        public string QTY_OnHand
        {
            get { return qtyonhand; }
            set { qtyonhand = value; }
        }
        private string serial_no;
        public string SERIAL_NO
        {
            get { return serial_no; }
            set { serial_no = value; }
        }

        private string eqmt_cd;
        public string EQMT_CD
        {
            get { return eqmt_cd; }
            set { eqmt_cd = value; }
        }
        private string _admn_no;
        public string ADMN_NO
        {
            get { return _admn_no; }
            set { _admn_no = value; }
        }
        private string _umr_no;
        public string UMR_NO
        {
            get { return _umr_no; }
            set { _umr_no = value; }
        }

        private int _DEPARTMENT_ID;
        public int DEPARTMENT_ID
        {
            get { return _DEPARTMENT_ID; }
            set { _DEPARTMENT_ID = value; }
        }
        private string _DEPARTMENT_NAME;
        public string DEPARTMENT_NAME
        {
            get { return _DEPARTMENT_NAME; }
            set { _DEPARTMENT_NAME = value; }
        }
        private string _DOCTOR_ID;
        public string DOCTOR_ID
        {
            get { return _DOCTOR_ID; }
            set { _DOCTOR_ID = value; }
        }
        private string _DOCTOR_NAME;
        public string DOCTOR_NAME
        {
            get { return _DOCTOR_NAME; }
            set { _DOCTOR_NAME = value; }
        }
        private string _REQ_NO;
        public string REQ_NO
        {
            get { return _REQ_NO; }
            set { _REQ_NO = value; }
        }
        private string _NURSE_REQ_ID;
        public string NURSE_REQ_ID
        {
            get { return _NURSE_REQ_ID; }
            set { _NURSE_REQ_ID = value; }
        }
        private string _APPROVE_DT;
        public string APPROVE_DT
        {
            get { return _APPROVE_DT; }
            set { _APPROVE_DT = value; }
        }
        private string _FROM_USER_ID;
        public string FROM_USER_ID
        {
            get { return _FROM_USER_ID; }
            set { _FROM_USER_ID = value; }
        }
        private string _IS_EMERGENCY;
        public string IS_EMERGENCY
        {
            get { return _IS_EMERGENCY; }
            set { _IS_EMERGENCY = value; }
        }

        private string _CROSS_REFERAL_REQUEST;
        public string CROSS_REFERAL_REQUEST
        {
            get { return _CROSS_REFERAL_REQUEST; }
            set { _CROSS_REFERAL_REQUEST = value; }
        }
        private string _STATUS;
        public string STATUS
        {
            get { return _STATUS; }
            set { _STATUS = value; }
        }

        private string _REFERED_BY_NAME;
        public string REFERED_BY_NAME
        {
            get { return _REFERED_BY_NAME; }
            set { _REFERED_BY_NAME = value; }
        }
        private string _REFERRED_BY_ID;
        public string REFERRED_BY_ID
        {
            get { return _REFERRED_BY_ID; }
            set { _REFERRED_BY_ID = value; }
        }
        private string _DESIGNATION_NAME;
        public string DESIGNATION_NAME
        {
            get { return _DESIGNATION_NAME; }
            set { _DESIGNATION_NAME = value; }
        }
        private string _DOCTOR_VISIT_REQ_TIME;
        public string DOCTOR_VISIT_REQ_TIME
        {
            get { return _DOCTOR_VISIT_REQ_TIME; }
            set { _DOCTOR_VISIT_REQ_TIME = value; }
        }
        private string _COMPANY_TYPE_ID;
        public string COMPANY_TYPE_ID
        {
            get { return _COMPANY_TYPE_ID; }
            set { _COMPANY_TYPE_ID = value; }
        }

        private string item_category;
        public string ITEM_CATEGORY
        {
            get { return item_category; }
            set { item_category = value; }
        }
        private int kit_req_id;
        public int KIT_REQ_ID
        {
            get { return kit_req_id; }
            set { kit_req_id = value; }
        }
        private string item_stp_id;

        public string ITEM_STP_ID
        {
            get { return item_stp_id; }
            set { item_stp_id = value; }
        }
        private string qty;
        public string QTY
        {
            get { return qty; }
            set { qty = value; }
        }
        private string item_bat_id;
        public string ITEM_BAT_ID
        {
            get { return item_bat_id; }
            set { item_bat_id = value; }
        }
        private string ems_loan_item_req_id;
        public string EMS_LOAN_ITEM_REQ_ID
        {
            get { return ems_loan_item_req_id; }
            set { ems_loan_item_req_id = value; }
        }
        private string ems_loan_item_req_item_id;
        public string EMS_LOAN_ITEM_REQ_ITEM_ID
        {
            get { return ems_loan_item_req_item_id; }
            set { ems_loan_item_req_item_id = value; }
        }
        private string eqp_model_id;

        public string EQP_MODEL_ID
        {
            get { return eqp_model_id; }
            set { eqp_model_id = value; }
        }
        public string BLOCK_ID { get; set; }
        public string BLOCK_NAME { get; set; }
        public string FLOOR_ID { get; set; }
        public string FLOOR_NAME { get; set; }
        public string WING_NAME { get; set; }
        public string WING_ID { get; set; }
        public string ROOM_ID { get; set; }
        public string ROOM_NAME { get; set; }
        public string DISPLAY_NAME { get; set; }
        public string STP_NAME { get; set; }

        public string SERVICE_GROUP_NAME { get; set; }
        public string SERVICE_GROUP_ID { get; set; }
        public string SERVICE_SUB_GROUP_CD { get; set; }
        public string SERVICE_SUB_GROUP_DESC { get; set; }
        public string COMPANY_NAME { get; set; }
        public string DOC_CD { get; set; }
        public string DOC_FORM_CD { get; set; }
    }
}
