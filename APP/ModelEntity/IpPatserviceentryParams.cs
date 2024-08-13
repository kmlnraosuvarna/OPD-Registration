using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class IpPatserviceentryParams 
    {
        #region Properties for IP Patientdtls usercontrol

        private string _inc_amt_sum = string.Empty;
        public string INC_AMT_SUM
        {
            get { return _inc_amt_sum; }
            set { _inc_amt_sum = value; }
        }

        private string _exc_amt_sum = string.Empty;
        public string EXC_AMT_SUM
        {
            get { return _exc_amt_sum; }
            set { _exc_amt_sum = value; }
        }


        private string _c_tariff_cd = string.Empty;
        public string C_TARIFF_CD
        {
            get { return _c_tariff_cd; }
            set { _c_tariff_cd = value; }
        }


        private string _c_tariff_name = string.Empty;
        public string C_TARIFF_NAME
        {
            get { return _c_tariff_name; }
            set { _c_tariff_name = value; }
        }


        private string _c_discount_percent = string.Empty;
        public string C_DISCOUNT_PERCENT
        {
            get { return _c_discount_percent; }
            set { _c_discount_percent = value; }
        }


        private string _tariff_service_name = string.Empty;
        public string TARIFF_SERVICE_NAME
        {
            get { return _tariff_service_name; }
            set { _tariff_service_name = value; }
        }


        private string _from_web_service;

        public string FROM_WEB_SERVICE
        {
            get { return _from_web_service; }
            set { _from_web_service = value; }
        }

        private int _pckg_conv_id = 0;
        public int PCKG_CONV_ID
        {
            get { return _pckg_conv_id; }
            set { _pckg_conv_id = value; }
        }

        private string _original_amount;
        public string ORIGINAL_AMOUNT
        {
            get { return _original_amount; }
            set { _original_amount = value; }
        }



        private int _Order_Doc_id;

        public int Order_Doc_id
        {
            get { return _Order_Doc_id; }
            set { _Order_Doc_id = value; }
        }
        private string created_by;
        public string CREATED_BY
        {
            get { return created_by; }
            set { created_by = value; }
        }

        private string visit_type;
        public string VISIT_TYPE
        {
            get { return visit_type; }
            set { visit_type = value; }
        }

        private string ward_cd;
        public string WARD_CD
        {
            get { return ward_cd; }
            set { ward_cd = value; }
        }

        private int _AdmID;
        public int AdmID
        {
            get { return _AdmID; }
            set { _AdmID = value; }
        }

        private string _UmrNo;
        public string UmrNo
        {
            get { return _UmrNo; }
            set { _UmrNo = value; }
        }
        private string _Consultant;
        public string Consultant
        {
            get { return _Consultant; }
            set { _Consultant = value; }
        }
        private string _IndentNo;
        public string IndentNo
        {
            get { return _IndentNo; }
            set { _IndentNo = value; }
        }
        private string _Indentdt;
        public string IndentDt
        {
            get { return _Indentdt; }
            set { _Indentdt = value; }
        }
        private string _Status;
        public string Status
        {
            get { return _Status; }
            set { _Status = value; }
        }
        private string _RegNo;
        public string RegNo
        {
            get { return _RegNo; }
            set { _RegNo = value; }
        }
        private Int32 _regid;
        public Int32 REG_ID
        {
            get { return _regid; }
            set { _regid = value; }
        }
        private string _Patname;
        public string Patname
        {
            get { return _Patname; }
            set { _Patname = value; }
        }
        private string _PatType;
        public string PatType
        {
            get { return _PatType; }
            set { _PatType = value; }
        }
        private string _Room;
        public string Room
        {
            get { return _Room; }
            set { _Room = value; }
        }
        private string _Bed;
        public string Bed
        {
            get { return _Bed; }
            set { _Bed = value; }
        }
        private int _RoomId;
        public int RoomId
        {
            get { return _RoomId; }
            set { _RoomId = value; }
        }
        private int _BedId;
        public int BedId
        {
            get { return _BedId; }
            set { _BedId = value; }
        }
        private string _Cropname;
        public string Cropname
        {
            get { return _Cropname; }
            set { _Cropname = value; }
        }
        private int _WardId;
        public int WardId
        {
            get { return _WardId; }
            set { _WardId = value; }
        }
        private string _Ward;
        public string Ward
        {
            get { return _Ward; }
            set { _Ward = value; }
        }
        private string _AdmsNo;
        public string AdmsNo
        {
            get { return _AdmsNo; }
            set { _AdmsNo = value; }
        }
        private string _AdmsDt;
        public string AdmsDt
        {
            get { return _AdmsDt; }
            set { _AdmsDt = value; }
        }
        private string _ApproxBill;
        public string ApproxBill
        {
            get { return _ApproxBill; }
            set { _ApproxBill = value; }
        }
        private string _PaidAmt;
        public string PaidAmt
        {
            get { return _PaidAmt; }
            set { _PaidAmt = value; }
        }
        private string _NetAmt;
        public string NetAmt
        {
            get { return _NetAmt; }
            set { _NetAmt = value; }
        }
        private string _Age;
        public string Age
        {
            get { return _Age; }
            set { _Age = value; }
        }


        private string _emp_net_amt;
        public string EMP_NET_AMT
        {
            get { return _emp_net_amt; }
            set { _emp_net_amt = value; }
        }

        private string _nurse_station_name;

        public string NURSE_STATION_NAME
        {
            get { return _nurse_station_name; }
            set { _nurse_station_name = value; }
        }

        #endregion

        #region Properties for IP service Entry

        private int _bill_srv_id = 0;
        public int BILL_SRV_ID
        {
            get { return _bill_srv_id; }
            set { _bill_srv_id = value; }
        }

        private int _bill_srv_rev_no = 0;
        public int BILL_SRV_REV_NO
        {
            get { return _bill_srv_rev_no; }
            set { _bill_srv_rev_no = value; }
        }

        private int _pre_days = 0;
        public int PRE_DAYS
        {
            get { return _pre_days; }
            set { _pre_days = value; }
        }

        private int _post_days = 0;
        public int POST_DAYS
        {
            get { return _post_days; }
            set { _post_days = value; }
        }

        private string _color_cd;

        public string COLOR_CD
        {
            get { return _color_cd; }
            set { _color_cd = value; }
        }

        private string _color_cd_maintain;

        public string COLOR_CD_MAINTAIN
        {
            get { return _color_cd_maintain; }
            set { _color_cd_maintain = value; }
        }
        private string _SERVICE;
        public string SERVICE
        {
            get { return _SERVICE; }
            set { _SERVICE = value; }
        }
        private string _SERVICETYPE;
        public string SERVICETYPE
        {
            get { return _SERVICETYPE; }
            set { _SERVICETYPE = value; }
        }

        private string _tran_type;
        public string TRAN_TYPE
        {
            set { _tran_type = value; }
            get { return _tran_type; }
        }
        private string _imr_no;
        public string IMR_NO
        {
            set { _imr_no = value; }
            get { return _imr_no; }
        }
        private string _imr_dt;
        public string IMR_DT
        {
            set { _imr_dt = value; }
            get { return _imr_dt; }
        }

        private int _employee_rev_no;
        public int EMPLOYEE_REV_NO
        {
            set { _employee_rev_no = value; }
            get { return _employee_rev_no; }
        }
        private int _cncsn_on_id;
        public int CNCSN_ON_ID
        {
            set { _cncsn_on_id = value; }
            get { return _cncsn_on_id; }
        }
        private int _cncsn_on_rev_no;
        public int CNCSN_ON_REV_NO
        {
            set { _cncsn_on_rev_no = value; }
            get { return _cncsn_on_rev_no; }
        }
        private int _cncsn_mode_id;
        public int CNCSN_MODE_ID
        {
            set { _cncsn_mode_id = value; }
            get { return _cncsn_mode_id; }
        }
        private int _cncsn_mode_rev_no;
        public int CNCSN_MODE_REV_NO
        {
            set { _cncsn_mode_rev_no = value; }
            get { return _cncsn_mode_rev_no; }
        }
        private int _cncsn_type_id;
        public int CNCSN_TYPE_ID
        {
            set { _cncsn_type_id = value; }
            get { return _cncsn_type_id; }
        }
        private int _cncsn_type_rev_no;
        public int CNCSN_TYPE_REV_NO
        {
            set { _cncsn_type_rev_no = value; }
            get { return _cncsn_type_rev_no; }
        }
        private int _cncsn_to_id;
        public int CNCSN_TO_ID
        {
            set { _cncsn_to_id = value; }
            get { return _cncsn_to_id; }
        }
        private int _cncsn_to_rev_no;
        public int CNCSN_TO_REV_NO
        {
            set { _cncsn_to_rev_no = value; }
            get { return _cncsn_to_rev_no; }
        }
        private int _cncsn_auth_id;
        public int CNCSN_AUTH_ID
        {
            set { _cncsn_auth_id = value; }
            get { return _cncsn_auth_id; }
        }
        private int _cncsn_auth_rev_no;
        public int CNCSN_AUTH_REV_NO
        {
            set { _cncsn_auth_rev_no = value; }
            get { return _cncsn_auth_rev_no; }
        }

        private int _due_auth_rev_no;
        public int DUE_AUTH_REV_NO
        {
            set { _due_auth_rev_no = value; }
            get { return _due_auth_rev_no; }
        }

        private float _cncsn_amount;
        public float CNCSN_AMOUNT
        {
            set { _cncsn_amount = value; }
            get { return _cncsn_amount; }
        }

        private string _clinical_history;
        public string CLINICAL_HISTORY
        {
            set { _clinical_history = value; }
            get { return _clinical_history; }
        }
        private int _record_sno;
        public int RECORD_SNO
        {
            set { _record_sno = value; }
            get { return _record_sno; }
        }

        private int _grp_id;
        public int GRP_ID
        {
            set { _grp_id = value; }
            get { return _grp_id; }
        }

        private int _loc_id;
        public int LOC_ID
        {
            set { _loc_id = value; }
            get { return _loc_id; }
        }
        private int _adt_imr_srv_id;
        public int ADT_IMR_SRV_ID
        {
            set { _adt_imr_srv_id = value; }
            get { return _adt_imr_srv_id; }
        }
        private int _adt_imr_srv_rev_no;
        public int ADT_IMR_SRV_REV_NO
        {
            set { _adt_imr_srv_rev_no = value; }
            get { return _adt_imr_srv_rev_no; }
        }

        private string _srv_id;
        public string SRV_ID
        {
            set { _srv_id = value; }
            get { return _srv_id; }
        }
        private int _srv_rev_no;
        public int SRV_REV_NO
        {
            set { _srv_rev_no = value; }
            get { return _srv_rev_no; }
        }
        private int _cnsltsn_type_id;
        public int CNSLTSN_TYPE_ID
        {
            set { _cnsltsn_type_id = value; }
            get { return _cnsltsn_type_id; }
        }
        private int _cnsltsn_type_rev_no;
        public int CNSLTSN_TYPE_REV_NO
        {
            set { _cnsltsn_type_rev_no = value; }
            get { return _cnsltsn_type_rev_no; }
        }

        private string _concession;
        public string CONCESSION
        {
            set { _concession = value; }
            get { return _concession; }
        }

        private int _cnscn_mode_id;
        public int CNSCN_MODE_ID
        {
            set { _cnscn_mode_id = value; }
            get { return _cnscn_mode_id; }
        }
        private int _cnscn_mode_rev_no;
        public int CNSCN_MODE_REV_NO
        {
            set { _cnscn_mode_rev_no = value; }
            get { return _cnscn_mode_rev_no; }
        }

        private string _srv_class_id;
        public string SRV_CLASS_ID
        {
            set { _srv_class_id = value; }
            get { return _srv_class_id; }
        }
        private int _srv_class_rev_no;
        public int SRV_CLASS_REV_NO
        {
            set { _srv_class_rev_no = value; }
            get { return _srv_class_rev_no; }
        }
        private string _srv_type_id;
        public string SRV_TYPE_ID
        {
            set { _srv_type_id = value; }
            get { return _srv_type_id; }
        }
        private int _srv_type_rev_no;
        public int SRV_TYPE_REV_NO
        {
            set { _srv_type_rev_no = value; }
            get { return _srv_type_rev_no; }
        }
        private string _srv_grp_id;
        public string SRV_GRP_ID
        {
            set { _srv_grp_id = value; }
            get { return _srv_grp_id; }
        }
        private int _srv_grp_rev_no;
        public int SRV_GRP_REV_NO
        {
            set { _srv_grp_rev_no = value; }
            get { return _srv_grp_rev_no; }
        }
        private int _class_srv_id;
        public int CLASS_SRV_ID
        {
            set { _class_srv_id = value; }
            get { return _class_srv_id; }
        }
        private string _class_srv_name;
        public string CLASS_SRV_NAME
        {
            set { _class_srv_name = value; }
            get { return _class_srv_name; }
        }
        private float _class_srv_price;
        public float CLASS_SRV_PRICE
        {
            set { _class_srv_price = value; }
            get { return _class_srv_price; }
        }
        private int _class_srv_rev_no;
        public int CLASS_SRV_REV_NO
        {
            set { _class_srv_rev_no = value; }
            get { return _class_srv_rev_no; }
        }
        private string _srv_status;
        public string SRV_STATUS
        {
            set { _srv_status = value; }
            get { return _srv_status; }
        }
        private string _is_foreign_srv;
        public string IS_FOREIGN_SRV
        {
            set { _is_foreign_srv = value; }
            get { return _is_foreign_srv; }
        }

        private int _company_tariff_rev_no;
        public int COMPANY_TARIFF_REV_NO
        {
            set { _company_tariff_rev_no = value; }
            get { return _company_tariff_rev_no; }
        }
        private int _company_srv_id;
        public int COMPANY_SRV_ID
        {
            set { _company_srv_id = value; }
            get { return _company_srv_id; }
        }
        private int _company_srv_rev_no;
        public int COMPANY_SRV_REV_NO
        {
            set { _company_srv_rev_no = value; }
            get { return _company_srv_rev_no; }
        }
        private int _company_srv_grp_id;
        public int COMPANY_SRV_GRP_ID
        {
            set { _company_srv_grp_id = value; }
            get { return _company_srv_grp_id; }
        }
        private int _company_srv_grp_rev_no;
        public int COMPANY_SRV_GRP_REV_NO
        {
            set { _company_srv_grp_rev_no = value; }
            get { return _company_srv_grp_rev_no; }
        }
        private int _company_bill_head_id;
        public int COMPANY_BILL_HEAD_ID
        {
            set { _company_bill_head_id = value; }
            get { return _company_bill_head_id; }
        }
        private int _company_bill_head_rev_no;
        public int COMPANY_BILL_HEAD_REV_NO
        {
            set { _company_bill_head_rev_no = value; }
            get { return _company_bill_head_rev_no; }
        }

        private string _business_partner_id;
        public string BUSINESS_PARTNER_ID
        {
            set { _business_partner_id = value; }
            get { return _business_partner_id; }
        }
        private string _business_partner_rev_no;
        public string BUSINESS_PARTNER_REV_NO
        {
            set { _business_partner_rev_no = value; }
            get { return _business_partner_rev_no; }
        }
        private float _company_rate;
        public float COMPANY_RATE
        {
            set { _company_rate = value; }
            get { return _company_rate; }
        }
        private float _company_amount;
        public float COMPANY_AMOUNT
        {
            set { _company_amount = value; }
            get { return _company_amount; }
        }
        private int _imr_id;
        public int IMR_ID
        {
            set { _imr_id = value; }
            get { return _imr_id; }
        }
        private string _imr_ids;/*This Is String datatype of Imr_id*/
        public string IMR_IDS
        {
            set { _imr_ids = value; }
            get { return _imr_ids; }
        }
        private int _imr_rev_no;
        public int IMR_REV_NO
        {
            set { _imr_rev_no = value; }
            get { return _imr_rev_no; }
        }
        private int _trtd_ward_id;
        public int TRTD_WARD_ID
        {
            set { _trtd_ward_id = value; }
            get { return _trtd_ward_id; }
        }
        private int _trtd_ward_rev_no;
        public int TRTD_WARD_REV_NO
        {
            set { _trtd_ward_rev_no = value; }
            get { return _trtd_ward_rev_no; }
        }

        private string corp_name;

        public string CORP_NAME
        {
            get { return corp_name; }
            set { corp_name = value; }
        }

        private string adt_imr_net_amount;

        public string ADT_IMR_NET_AMOUNT
        {
            get { return adt_imr_net_amount; }
            set { adt_imr_net_amount = value; }
        }

        private string effect_from_dt;

        public string EFFECT_FROM_DT
        {
            get { return effect_from_dt; }
            set { effect_from_dt = value; }
        }

        private string effect_to_dt;

        public string EFFECT_TO_DT
        {
            get { return effect_to_dt; }
            set { effect_to_dt = value; }
        }

        private float prev_discnt_amt;

        public float PREV_DISCNT_AMT
        {
            get { return prev_discnt_amt; }
            set { prev_discnt_amt = value; }
        }

        private float srv_discnt_amt;
        public float SRV_DISCNT_AMT
        {
            get { return srv_discnt_amt; }
            set { srv_discnt_amt = value; }
        }


        private int discnt_srv_id = 0;

        public int DISCNT_SRV_ID
        {
            get { return discnt_srv_id; }
            set { discnt_srv_id = value; }
        }
        private string inc_qty;
        public string INC_QTY
        {
            get { return inc_qty; }
            set { inc_qty = value; }
        }
        private string exc_qty;
        public string EXC_QTY
        {
            get { return exc_qty; }
            set { exc_qty = value; }
        }
        private string exc_amt = string.Empty;
        public string EXC_AMT
        {
            get { return exc_amt; }
            set { exc_amt = value; }
        }

        private string inc_amt = string.Empty;
        public string INC_AMT
        {
            get { return inc_amt; }
            set { inc_amt = value; }
        }

        private string tariff_cd = string.Empty;
        public string TARIFF_CD
        {
            get { return tariff_cd; }
            set { tariff_cd = value; }
        }

        private string tariff_name = string.Empty;
        public string TARIFF_NAME
        {
            get { return tariff_name; }
            set { tariff_name = value; }
        }

        private string tariff_rate = string.Empty;
        public string TARIFF_RATE
        {
            get { return tariff_rate; }
            set { tariff_rate = value; }
        }

        private string tariff_price = string.Empty;
        public string TARIFF_PRICE
        {
            get { return tariff_price; }
            set { tariff_price = value; }
        }
        private string _ward_group_cd;

        public string WARD_GROUP_CD
        {
            get { return _ward_group_cd; }
            set { _ward_group_cd = value; }
        }



        private string _discnt_perc = string.Empty;

        public string DISCNT_PERC
        {
            get { return _discnt_perc; }
            set { _discnt_perc = value; }
        }

        private int _ward_group_id;
        public int WARD_GROUP_ID
        {
            get { return _ward_group_id; }
            set { _ward_group_id = value; }
        }


        private string _pkg_excess_amt = "0";
        public string PKG_EXCESS_AMT
        {

            get { return _pkg_excess_amt; }
            set { _pkg_excess_amt = value; }
        }
        private string _service_ward_Name;

        public string Service_ward_Name
        {
            get { return _service_ward_Name; }
            set { _service_ward_Name = value; }
        }
        private string _tariff_id;

        public string Tariff_id
        {
            get { return _tariff_id; }
            set { _tariff_id = value; }
        }
        private string price;

        public string PRICE
        {
            get { return price; }
            set { price = value; }
        }
        private string _DISCOUNT_PERCENT;

        public string DISCOUNT_PERCENT
        {
            get { return _DISCOUNT_PERCENT; }
            set { _DISCOUNT_PERCENT = value; }
        }
        private string _PRIORITY;

        public string PRIORITY
        {
            get { return _PRIORITY; }
            set { _PRIORITY = value; }
        }
        private string _TAX_PERCENT;

        public string TAX_PERCENT
        {
            get { return _TAX_PERCENT; }
            set { _TAX_PERCENT = value; }
        }
        private string _SRVTAX_APPL_ON_ID;

        public string SRVTAX_APPL_ON_ID
        {
            get { return _SRVTAX_APPL_ON_ID; }
            set { _SRVTAX_APPL_ON_ID = value; }
        }
        private string _SRVTAX_APPL_FOR_ID;

        public string SRVTAX_APPL_FOR_ID
        {
            get { return _SRVTAX_APPL_FOR_ID; }
            set { _SRVTAX_APPL_FOR_ID = value; }
        }
        private string _duty_doc_name;

        public string DUTY_DOCTOR_NAME
        {
            get { return _duty_doc_name; }
            set { _duty_doc_name = value; }
        }
        private string _duty_doc_dept_name;

        public string DUTY_DOCTOR_DEPT
        {
            get { return _duty_doc_dept_name; }
            set { _duty_doc_dept_name = value; }
        }
        private string _srv_post_dt;

        public string SRV_POST_DT
        {
            get { return _srv_post_dt; }
            set { _srv_post_dt = value; }
        }

        private string _c_service_cd = string.Empty;

        public string C_SERVICE_CD
        {
            get { return _c_service_cd; }
            set { _c_service_cd = value; }
        }
        private string _corp_dischr_dt = string.Empty;

        public string CORP_DISCHR_DT
        {
            get { return _corp_dischr_dt; }
            set { _corp_dischr_dt = value; }
        }
        private string address;

        public string ADDRESS
        {
            get { return address; }
            set { address = value; }
        }
        private string mobile_no;

        public string MOBILE_NO
        {
            get { return mobile_no; }
            set { mobile_no = value; }
        }

        private string service_ward;

        public string SERVICE_WARD
        {
            get { return service_ward; }
            set { service_ward = value; }
        }


        // Below are newly added for corp client side grid fields(SRV_GRP_AUTO_ID,IMR_AUTO_ID,GEN_BILL_ID,GEN_BILL_NO)

        private string _srv_grp_auto_id = "0";
        public string SRV_GRP_AUTO_ID
        {
            set { _srv_grp_auto_id = value; }
            get { return _srv_grp_auto_id; }
        }

        private int _imr_auto_id = 0;
        public int IMR_AUTO_ID
        {
            set { _imr_auto_id = value; }
            get { return _imr_auto_id; }
        }
        private string _GEN_BILL_ID = "0";
        public string GEN_BILL_ID
        {
            set { _GEN_BILL_ID = value; }
            get { return _GEN_BILL_ID; }
        }
        private string _GEN_BILL_NO = string.Empty;
        public string GEN_BILL_NO
        {
            set { _GEN_BILL_NO = value; }
            get { return _GEN_BILL_NO; }
        }
        private int desigination_id;

        public int DESIGNATION_ID
        {
            get { return desigination_id; }
            set { desigination_id = value; }
        }
        private string desigination_cd;

        public string DESIGNATION_CD
        {
            get { return desigination_cd; }
            set { desigination_cd = value; }
        }
        private string desigination_desc;

        public string DESIGNATION_DESC
        {
            get { return desigination_desc; }
            set { desigination_desc = value; }
        }
        private string desigination_revno;

        public string DESIGNATION_REV_NO
        {
            get { return desigination_revno; }
            set { desigination_revno = value; }
        }
        private string total_net_amount;

        public string TOTAL_NET_AMOUNT
        {
            get { return total_net_amount; }
            set { total_net_amount = value; }
        }

        private string _lab_no;

        public string LAB_NO
        {
            get { return _lab_no; }
            set { _lab_no = value; }
        }
        private string pkg_srv_id;

        public string PKG_SRV_ID
        {
            get { return pkg_srv_id; }
            set { pkg_srv_id = value; }
        }

        private string _reg_patient_type;

        public string REG_PATIENT_TYPE
        {
            get { return _reg_patient_type; }
            set { _reg_patient_type = value; }
        }

        private string _reg_company_name;

        public string REG_COMPANY_NAME
        {
            get { return _reg_company_name; }
            set { _reg_company_name = value; }
        }

        private int reg_patient_type_id;

        public int REG_PATIENT_TYPE_ID
        {
            get { return reg_patient_type_id; }
            set { reg_patient_type_id = value; }
        }
        private int reg_reference_type_id;

        public int REG_REFERENCE_TYPE_ID
        {
            get { return reg_reference_type_id; }
            set { reg_reference_type_id = value; }
        }
        private string is_emergency;

        public string IS_EMERGENCY
        {
            get { return is_emergency; }
            set { is_emergency = value; }
        }
        private string _PKG_EF_FRM_TODT = string.Empty;

        public string PKG_EF_FRM_TODT
        {
            get { return _PKG_EF_FRM_TODT; }
            set { _PKG_EF_FRM_TODT = value; }
        }

        private string _pkg_include_status;

        public string PKG_INCLUDE_STATUS
        {
            get { return _pkg_include_status; }
            set { _pkg_include_status = value; }
        }
        private string phar_inc_amt;

        public string PHAR_INC_AMT
        {
            get { return phar_inc_amt; }
            set { phar_inc_amt = value; }
        }
        private string phar_exc_amt;

        public string PHAR_EXC_AMT
        {
            get { return phar_exc_amt; }
            set { phar_exc_amt = value; }
        }
        private string phar_tot_amt;

        public string PHAR_TOT_AMT
        {
            get { return phar_tot_amt; }
            set { phar_tot_amt = value; }
        }
        private string gen_bill_dt;

        public string GEN_BILL_DT
        {
            get { return gen_bill_dt; }
            set { gen_bill_dt = value; }
        }
        private string pkg_due_recovered = "0";

        public string PKG_DUE_RECOVERED
        {
            get { return pkg_due_recovered; }
            set { pkg_due_recovered = value; }
        }
        private int imr_srv_id;

        public int IMR_SRV_ID
        {
            get { return imr_srv_id; }
            set { imr_srv_id = value; }
        }
        private string srv_posted_by;

        public string SRV_POSTED_BY
        {
            get { return srv_posted_by; }
            set { srv_posted_by = value; }
        }
        private string _adt_imr_srv_id_corp = "0";
        public string ADT_IMR_SRV_ID_CORP
        {
            set { _adt_imr_srv_id_corp = value; }
            get { return _adt_imr_srv_id_corp; }
        }
        private string billing_head_name = "";
        public string BILLING_HEAD_NAME
        {
            set { billing_head_name = value; }
            get { return billing_head_name; }
        }

        private string billing_head_id = "0";
        public string BILLING_HEAD_ID
        {
            set { billing_head_id = value; }
            get { return billing_head_id; }
        }
        #endregion
        private string bed_id;
        public string BED_ID
        {
            set { bed_id = value; }
            get { return bed_id; }
        }
        private string approximate_bill;
        public string APPROXIMATE_BILL
        {
            set { approximate_bill = value; }
            get { return approximate_bill; }
        }
        private string order_doc_id;
        public string ORDER_DOC_ID
        {
            set { order_doc_id = value; }
            get { return order_doc_id; }
        }
        //private string bedid;
        //public string BED_ID
        //{
        //    set { bedid = value; }
        //    get { return bedid; }
        //}
        private string roomid;
        public string ROOM_ID
        {
            set { roomid = value; }
            get { return roomid; }
        }
        private string wardid;
        public string WARD_ID
        {
            set { wardid = value; }
            get { return wardid; }
        }
        private string srv_type_id;
        public string SRV_TYPE_IDS
        {
            set { srv_type_id = value; }
            get { return srv_type_id; }
        }
        private string adt_imr_srv_ids;
        public string ADT_IMR_SRV_IDS
        {
            set { adt_imr_srv_ids = value; }
            get { return adt_imr_srv_ids; }
        }
        private string adt_imr_srv_rev_nos;
        public string ADT_IMR_SRV_REV_NOS
        {
            set { adt_imr_srv_rev_nos = value; }
            get { return adt_imr_srv_rev_nos; }
        }
        private string imr_new_ids;
        public string IMR_NEW_IDS
        {
            set { imr_new_ids = value; }
            get { return imr_new_ids; }
        }
        private string concessions;

        public string CONCESSIONS
        {
            get { return concessions; }
            set { concessions = value; }
        }
        private string quantitys;
        public string QUANTITYS
        {
            get { return quantitys; }
            set { quantitys = value; }
        }
        private string service_types;

        public string SERVICE_TYPES
        {
            get { return service_types; }
            set { service_types = value; }
        }
        private string is_after_appbill;

        public string IS_AFTER_APPBILL
        {
            get { return is_after_appbill; }
            set { is_after_appbill = value; }
        }


        private string batch_no = string.Empty;

        public string BATCH_NO
        {
            get { return batch_no; }
            set { batch_no = value; }
        }
        private string batch_expery_dt = string.Empty;

        public string BATCH_EXPERY_DT
        {
            get { return batch_expery_dt; }
            set { batch_expery_dt = value; }
        }
        private string manfacture_name = string.Empty;

        public string MANFACTURE_NAME
        {
            get { return manfacture_name; }
            set { manfacture_name = value; }
        }
        private string _DOB;

        public string DOB
        {
            get { return _DOB; }
            set { _DOB = value; }
        }
        private string _TITLE_ID;

        public string TITLE_ID
        {
            get { return _TITLE_ID; }
            set { _TITLE_ID = value; }
        }
        private string _CONCESSION_AMT;

        public string CONCESSION_AMT
        {
            get { return _CONCESSION_AMT; }
            set { _CONCESSION_AMT = value; }
        }

        private string _WARD_CREDIT_LIMIT_AMT;

        public string WARD_CREDIT_LIMIT_AMT
        {
            get { return _WARD_CREDIT_LIMIT_AMT; }
            set { _WARD_CREDIT_LIMIT_AMT = value; }
        }
        private string _SRV_TOTAL_AMT;

        public string SRV_TOTAL_AMT
        {
            get { return _SRV_TOTAL_AMT; }
            set { _SRV_TOTAL_AMT = value; }
        }

        private string _cncsn_percent;
        public string CNCSN_PERCENT
        {
            set { _cncsn_percent = value; }
            get { return _cncsn_percent; }
        }
        private int pes_id;
        public int PES_ID
        {
            set { pes_id = value; }
            get { return pes_id; }
        }

        private string _PRINT_DT;

        public string PRINT_DT
        {
            get { return _PRINT_DT; }
            set { _PRINT_DT = value; }
        }
        private string _WF_STATUS;

        public string WF_STATUS
        {
            get { return _WF_STATUS; }
            set { _WF_STATUS = value; }
        }
        private int nursestation_id;
        public int NURSESTATION_ID
        {
            set { nursestation_id = value; }
            get { return nursestation_id; }
        }

        private string rule_percentage;
        public string RULE_PERCENTAGE
        {
            set { rule_percentage = value; }
            get { return rule_percentage; }
        }

        private string cncn_bill_status;
        public string CNCN_BILL_STATUS
        {
            set { cncn_bill_status = value; }
            get { return cncn_bill_status; }
        }
        private string _IS_MAIN;

        public string IS_MAIN
        {
            get { return _IS_MAIN; }
            set { _IS_MAIN = value; }
        }


        private string _EC_DESC;

        public string EC_DESC
        {
            get { return _EC_DESC; }
            set { _EC_DESC = value; }
        }
        private string _aftr_dscnt_amount;

        public string aftr_dscnt_amount
        {
            get { return _aftr_dscnt_amount; }
            set { _aftr_dscnt_amount = value; }
        }
        private string _ES_ID;

        public string ES_ID
        {
            get { return _ES_ID; }
            set { _ES_ID = value; }
        }
        private string _EC_CD;

        public string EC_CD
        {
            get { return _EC_CD; }
            set { _EC_CD = value; }
        }
        private string _ec_status;

        public string ec_status
        {
            get { return _ec_status; }
            set { _ec_status = value; }
        }

        private string _RULE_ID;

        public string RULE_ID
        {
            get { return _RULE_ID; }
            set { _RULE_ID = value; }
        }
        private string er_no;
        public string ER_NO
        {
            get { return er_no; }
            set { er_no = value; }
        }
        private string is_mass_casuality;
        public string IS_MASS_CASUALITY
        {
            get { return is_mass_casuality; }
            set { is_mass_casuality = value; }
        }
        private string mandatory_status;
        public string MANDATORY_STATUS
        {
            get { return mandatory_status; }
            set { mandatory_status = value; }
        }
        private int trn_source_id;
        public int TRN_SOURCE_ID
        {
            get { return trn_source_id; }
            set { trn_source_id = value; }
        }
        private string _RESPONSIBILITY_PERSON_NAME;

        public string RESPONSIBILITY_PERSON_NAME
        {
            get { return _RESPONSIBILITY_PERSON_NAME; }
            set { _RESPONSIBILITY_PERSON_NAME = value; }
        }


        private string _ELIGIBILTY_WARD_AMOUNT;

        public string ELIGIBILTY_WARD_AMOUNT
        {
            get { return _ELIGIBILTY_WARD_AMOUNT; }
            set { _ELIGIBILTY_WARD_AMOUNT = value; }
        }


        private string _TREATED_WARD_AMOUNT;

        public string TREATED_WARD_AMOUNT
        {
            get { return _TREATED_WARD_AMOUNT; }
            set { _TREATED_WARD_AMOUNT = value; }
        }

        private string _DIFFERENTIAL_AMOUNT;

        public string DIFFERENTIAL_AMOUNT
        {
            get { return _DIFFERENTIAL_AMOUNT; }
            set { _DIFFERENTIAL_AMOUNT = value; }
        }
        private string _PAT_SHOWN_AMT;

        public string PAT_SHOWN_AMT
        {
            get { return _PAT_SHOWN_AMT; }
            set { _PAT_SHOWN_AMT = value; }
        }
        private string __PREV_DISCNT_AMT;

        public string PREV_DISCNT_AMTT
        {
            get { return __PREV_DISCNT_AMT; }
            set { __PREV_DISCNT_AMT = value; }
        }
        private string _item_id;

        public string ITEM_ID
        {
            get { return _item_id; }
            set { _item_id = value; }
        }
        private string _item_name;

        public string ITEM_NAME
        {
            get { return _item_name; }
            set { _item_name = value; }
        }
        private string _item_group_id;

        public string ITEM_GROUP_ID
        {
            get { return _item_group_id; }
            set { _item_group_id = value; }
        }
        private string _item_group_name;

        public string ITEM_GROUP_NAME
        {
            get { return _item_group_name; }
            set { _item_group_name = value; }
        }
        private string _hc_count;

        public string HC_COUNT
        {
            get { return _hc_count; }
            set { _hc_count = value; }
        }
        private string _hc_token_given;

        public string HC_TOKEN_GIVEN
        {
            get { return _hc_token_given; }
            set { _hc_token_given = value; }
        }
        private string _hc_Received_Tokens;

        public string HC_RECEIVED_TOKENS
        {
            get { return _hc_Received_Tokens; }
            set { _hc_Received_Tokens = value; }
        }

        private string srv_ackn_remarks;

        public string SRV_ACKN_REMARKS
        {
            get { return srv_ackn_remarks; }
            set { srv_ackn_remarks = value; }
        }
        private string total_concession;

        public string TOTAL_CONCESSION
        {
            get { return total_concession; }
            set { total_concession = value; }
        }
        private string total_eligibilty_ward_amount;

        public string TOTAL_ELIGIBILTY_WARD_AMOUNT
        {
            get { return total_eligibilty_ward_amount; }
            set { total_eligibilty_ward_amount = value; }
        }
        private string _CMP_AMT_SRV;

        public string CMP_AMT_SRV
        {
            get { return _CMP_AMT_SRV; }
            set { _CMP_AMT_SRV = value; }
        }
        private string _CMP_CNCSN_PCT_SRV;

        public string CMP_CNCSN_PCT_SRV
        {
            get { return _CMP_CNCSN_PCT_SRV; }
            set { _CMP_CNCSN_PCT_SRV = value; }
        }
        private string _CMP_CNCSN_AMT_SRV;

        public string CMP_CNCSN_AMT_SRV
        {
            get { return _CMP_CNCSN_AMT_SRV; }
            set { _CMP_CNCSN_AMT_SRV = value; }
        }
        private string _CMP_NET_AMT_SRV;

        public string CMP_NET_AMT_SRV
        {
            get { return _CMP_NET_AMT_SRV; }
            set { _CMP_NET_AMT_SRV = value; }
        }
        private string _PAT_AMOUNT_SRV;

        public string PAT_AMOUNT_SRV
        {
            get { return _PAT_AMOUNT_SRV; }
            set { _PAT_AMOUNT_SRV = value; }
        }
        private string _PAT_CNCSN_PCT_SRV;

        public string PAT_CNCSN_PCT_SRV
        {
            get { return _PAT_CNCSN_PCT_SRV; }
            set { _PAT_CNCSN_PCT_SRV = value; }
        }
        private string _PAT_CNCSN_AMT_SRV;

        public string PAT_CNCSN_AMT_SRV
        {
            get { return _PAT_CNCSN_AMT_SRV; }
            set { _PAT_CNCSN_AMT_SRV = value; }
        }
        private string _PAT_NET_AMT_SRV;

        public string PAT_NET_AMT_SRV
        {
            get { return _PAT_NET_AMT_SRV; }
            set { _PAT_NET_AMT_SRV = value; }
        }
        private string _pre_post_pkg_flag;

        public string PRE_POST_PKG_FLAG
        {
            get { return _pre_post_pkg_flag; }
            set { _pre_post_pkg_flag = value; }
        }
        private string _PRIV_SRV_POST_DT;

        public string PRIV_SRV_POST_DT
        {
            get { return _PRIV_SRV_POST_DT; }
            set { _PRIV_SRV_POST_DT = value; }
        }
        private string _prev_discnt_amt_s;

        public string PREV_DISCNT_AMT_S
        {
            get { return _prev_discnt_amt_s; }
            set { _prev_discnt_amt_s = value; }
        }
        private string billing_status;

        public string BILLING_STATUS
        {
            get { return billing_status; }
            set { billing_status = value; }
        }
        private string test_status;

        public string TEST_STATUS
        {
            get { return test_status; }
            set { test_status = value; }
        }
        private float pre_discount;

        public float PRE_DISCOUNT
        {
            get { return pre_discount; }
            set { pre_discount = value; }
        }
        private string bed_desc;

        public string BED_DESC
        {
            get { return bed_desc; }
            set { bed_desc = value; }
        }
        private string _IS_PATIENT;

        public string IS_PATIENT
        {
            get { return _IS_PATIENT; }
            set { _IS_PATIENT = value; }
        }
        private string _IS_PATIENT_DIFFERNTIAL_AMT;

        public string IS_PATIENT_DIFFERNTIAL_AMT
        {
            get { return _IS_PATIENT_DIFFERNTIAL_AMT; }
            set { _IS_PATIENT_DIFFERNTIAL_AMT = value; }
        }

        private string _IS_QUANTITY_EDIT;

        public string IS_QUANTITY_EDIT
        {
            get { return _IS_QUANTITY_EDIT; }
            set { _IS_QUANTITY_EDIT = value; }
        }

        private string _IS_PRICE_EDIT;

        public string IS_PRICE_EDIT
        {
            get { return _IS_PRICE_EDIT; }
            set { _IS_PRICE_EDIT = value; }
        }
        private string billinghead_id;
        public string BILLINGHEAD_ID
        {
            get { return billinghead_id; }
            set { billinghead_id = value; }
        }
        private string billinghead_name;
        public string BILLINGHEAD_NAME
        {
            get { return billinghead_name; }
            set { billinghead_name = value; }
        }




        private string bed_status_id;
        public string BED_STATUS_ID
        {
            get { return bed_status_id; }
            set { bed_status_id = value; }
        }
        private string record_status_fb;
        public string RECORD_STATUS_FB
        {
            get { return record_status_fb; }
            set { record_status_fb = value; }
        }
        private string bill_type_id_fb;
        public string BILL_TYPE_ID_FB
        {
            get { return bill_type_id_fb; }
            set { bill_type_id_fb = value; }
        }
        private string lock_status;
        public string LOCK_STATUS
        {
            get { return lock_status; }
            set { lock_status = value; }
        }

        private string _ROW;
        public string ROW
        {
            get { return _ROW; }
            set { _ROW = value; }
        }
        private string _ADMN_EC_HC_STATUS;
        public string ADMN_EC_HC_STATUS
        {
            get { return _ADMN_EC_HC_STATUS; }
            set { _ADMN_EC_HC_STATUS = value; }
        }
        private string srv_pre_dscnt_status;
        public string SRV_PRE_DSCNT_STATUS
        {
            get { return srv_pre_dscnt_status; }
            set { srv_pre_dscnt_status = value; }
        }
        private string performed_doctor;

        public string PERFORMED_DOCTOR
        {
            get { return performed_doctor; }
            set { performed_doctor = value; }
        }
        private string is_doctor_required;

        public string IS_DOCTOR_REQUIRED
        {
            get { return is_doctor_required; }
            set { is_doctor_required = value; }
        }
        private string _RSRC_ID;
        public string RSRC_ID
        {
            get { return _RSRC_ID; }
            set { _RSRC_ID = value; }
        }
        private string _RSRC_TYPE_ID;
        public string RSRC_TYPE_ID
        {
            get { return _RSRC_TYPE_ID; }
            set { _RSRC_TYPE_ID = value; }
        }
        private string _RSRC_CATEGORY_ID;
        public string RSRC_CATEGORY_ID
        {
            get { return _RSRC_CATEGORY_ID; }
            set { _RSRC_CATEGORY_ID = value; }
        }

        private string photo = string.Empty;

        public string PHOTO
        {
            get { return photo; }
            set { photo = value; }
        }
        private string adv_cash_amount;

        public string ADV_CASH_AMOUNT
        {
            get { return adv_cash_amount; }
            set { adv_cash_amount = value; }
        }
        private string _TREATED_WARD_GROUP_ID;

        public string TREATED_WARD_GROUP_ID
        {
            get { return _TREATED_WARD_GROUP_ID; }
            set { _TREATED_WARD_GROUP_ID = value; }
        }
        private string _TREATED_WARD_GROUP_NAME;

        public string TREATED_WARD_GROUP_NAME
        {
            get { return _TREATED_WARD_GROUP_NAME; }
            set { _TREATED_WARD_GROUP_NAME = value; }
        }

        private string is_sample_needed;

        public string IS_SAMPLE_NEEDED
        {
            get { return is_sample_needed; }
            set { is_sample_needed = value; }
        }
        private string _CONC_RULE_AUTH_NAME;

        public string CONC_RULE_AUTH_NAME
        {
            get { return _CONC_RULE_AUTH_NAME; }
            set { _CONC_RULE_AUTH_NAME = value; }
        }
        private string _CONC_RULE_AUTH_ID;

        public string CONC_RULE_AUTH_ID
        {
            get { return _CONC_RULE_AUTH_ID; }
            set { _CONC_RULE_AUTH_ID = value; }
        }
        private string inc_amt_conc = string.Empty;
        public string INC_AMT_CONC
        {
            get { return inc_amt_conc; }
            set { inc_amt_conc = value; }
        }
        private string inc_amt_net = string.Empty;
        public string INC_AMT_NET
        {
            get { return inc_amt_net; }
            set { inc_amt_net = value; }
        }
        private string exc_amt_conc = string.Empty;
        public string EXC_AMT_CONC
        {
            get { return exc_amt_conc; }
            set { exc_amt_conc = value; }
        }
        private string exc_amt_net = string.Empty;
        public string EXC_AMT_NET
        {
            get { return exc_amt_net; }
            set { exc_amt_net = value; }
        }
        private string _CONCESSION_CHAILD = "0";

        public string CONCESSION_CHAILD
        {
            get { return _CONCESSION_CHAILD; }
            set { _CONCESSION_CHAILD = value; }
        }
        public string NET_AMOUNT_EXC_GST { get; set; }
        public string RATE_EXC_GST { get; set; }
        public string TAX_PCT { get; set; }
        public string TAX_AMOUNT { get; set; }
        public string SGST_PCT { get; set; }
        public string SGST_AMOUNT { get; set; }
        public string CGST_PCT { get; set; }
        public string CGST_AMOUNT { get; set; }

    }
}
