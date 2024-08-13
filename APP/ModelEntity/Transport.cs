using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace EzHms.ModelEntity
{
    //class Transport
    //{
    //}
    [Serializable]
    public class Transport 
    {


        private int _EMPLOYEE_ID;
        public int EMPLOYEE_ID
        {
            get { return _EMPLOYEE_ID; }
            set { _EMPLOYEE_ID = value; }
        }
        private string _firtname;
        public string Firtname
        {
            get { return _firtname; }
            set { _firtname = value; }
        }

        private string _middlename;
        public string Middlename
        {
            get { return _middlename; }
            set { _middlename = value; }
        }

        private string _lastname;
        public string Lastname
        {
            get { return _lastname; }
            set { _lastname = value; }
        }
        private string _dob;
        public string DOB
        {
            set { _dob = value; }
            get { return _dob; }
        }
        private string _AGE;
        public string AGE
        {
            set { _AGE = value; }
            get { return _AGE; }
        }
        private int genderpr_id;

        public int GENDER_ID
        {
            get { return genderpr_id; }
            set { genderpr_id = value; }
        }
        private int maritalpr_statuspr_id;

        public int MARITAL_STATUS_ID
        {
            get { return maritalpr_statuspr_id; }
            set { maritalpr_statuspr_id = value; }
        }
        private string _mobno;
        public string MOBILE_NO
        {
            get { return _mobno; }
            set { _mobno = value; }
        }
        private string onhand_qty;
        public string ONHAND_QTY
        {
            get { return onhand_qty; }
            set { onhand_qty = value; }
        }
        private string purc_rate;

        public string PURC_RATE
        {
            get { return purc_rate; }
            set { purc_rate = value; }
        }
        private string sale_rate;

        public string SALE_RATE
        {
            get { return sale_rate; }
            set { sale_rate = value; }
        }
        private string disc_val;

        public string DISC_VAL
        {
            get { return disc_val; }
            set { disc_val = value; }
        }

        private string item_name;

        public string ITEM_NAME
        {
            get { return item_name; }
            set { item_name = value; }
        }

        private string remarks;
        public string REMARKS
        {
            get { return remarks; }
            set { remarks = value; }
        }

        private string machine_name;
        public string MACHINE_NAME
        {
            get { return machine_name; }
            set { machine_name = value; }
        }

        private string approved_dt;
        public string APPROVED_DT
        {
            get { return approved_dt; }
            set { approved_dt = value; }
        }
        private string sale_amt;

        public string SALE_AMT
        {
            get { return sale_amt; }
            set { sale_amt = value; }
        }
        private string purc_amt;
        public string PURC_AMT
        {
            get { return purc_amt; }
            set { purc_amt = value; }
        }
        private string qty_pack;
        public string QTY_PACK
        {
            get { return qty_pack; }
            set { qty_pack = value; }
        }

        private string qty_unit;
        public string QTY_UNIT
        {
            get { return qty_unit; }
            set { qty_unit = value; }
        }
        private string exp_dt;
        public string EXP_DT
        {
            get { return exp_dt; }
            set { exp_dt = value; }
        }
        private string batch_no;
        public string BATCH_NO
        {
            get { return batch_no; }
            set { batch_no = value; }
        }
        private string roundoff_amt;

        public string ROUNDOFF_AMT
        {
            get { return roundoff_amt; }
            set { roundoff_amt = value; }
        }

        private string qty;
        public string QTY
        {
            get { return qty; }
            set { qty = value; }
        }
        private string salerate;
        public string SALERATE
        {
            get { return salerate; }
            set { salerate = value; }
        }
        private string purcrate;
        public string PURCRATE
        {
            get { return purcrate; }
            set { purcrate = value; }
        }
        private string item_nam;
        public string ITEM_NAM
        {
            get { return item_nam; }
            set { item_nam = value; }
        }
        private string item_cd;
        public string ITEM_CD
        {
            get { return item_cd; }
            set { item_cd = value; }
        }

        private string from_sale_val;
        public string FROM_SALE_VAL
        {
            get { return from_sale_val; }
            set { from_sale_val = value; }
        }
        private string to_sale_val;
        public string TO_SALE_VAL
        {
            get { return to_sale_val; }
            set { to_sale_val = value; }
        }
        private string from_qty;
        public string FROM_QTY
        {
            get { return from_qty; }
            set { from_qty = value; }
        }
        private string to_qty;
        public string TO_QTY
        {
            get { return to_qty; }
            set { to_qty = value; }
        }

        private string flag;
        public string FLAG
        {
            get { return flag; }
            set { flag = value; }
        }
        private int _vend_id;
        public int VEND_ID
        {
            set { _vend_id = value; }
            get { return _vend_id; }
        }
        private int _vend_rev_no;
        public int VEND_REV_NO
        {
            set { _vend_rev_no = value; }
            get { return _vend_rev_no; }
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
        private string _vend_cd;
        public string VEND_CD
        {
            set { _vend_cd = value; }
            get { return _vend_cd; }
        }
        private string _vend_name;
        public string VEND_NAME
        {
            set { _vend_name = value; }
            get { return _vend_name; }
        }
        private string _vend_desc;
        public string VEND_DESC
        {
            set { _vend_desc = value; }
            get { return _vend_desc; }
        }


        private string _record_status;
        public string RECORD_STATUS
        {
            set { _record_status = value; }
            get { return _record_status; }
        }
        private string _CREATE_NAME;
        public string CREATE_NAME
        {
            set { _CREATE_NAME = value; }
            get { return _CREATE_NAME; }
        }
        private string _create_dt;
        public string CREATE_DT
        {
            set { _create_dt = value; }
            get { return _create_dt; }
        }
        private string _MODIFY_NAME;
        public string MODIFY_NAME
        {
            set { _MODIFY_NAME = value; }
            get { return _MODIFY_NAME; }
        }
        private string _modify_dt;
        public string MODIFY_DT
        {
            set { _modify_dt = value; }
            get { return _modify_dt; }
        }
        private int _addr_id;
        public int ADDR_ID
        {
            set { _addr_id = value; }
            get { return _addr_id; }
        }
        private int _addr_rev_no;
        public int ADDR_REV_NO
        {
            set { _addr_rev_no = value; }
            get { return _addr_rev_no; }
        }
        private int reg_type;

        public int REG_TYPE
        {
            get { return reg_type; }
            set { reg_type = value; }
        }
        private string prevrec = string.Empty;
        public string PREVREC
        {
            get { return prevrec; }
            set { prevrec = value; }
        }

        private string nextrec = string.Empty;
        public string NEXTREC
        {
            get { return nextrec; }
            set { nextrec = value; }
        }

        private string firstrec = string.Empty;
        public string FIRSTREC
        {
            get { return firstrec; }
            set { firstrec = value; }
        }

        private string lastrec = string.Empty;
        public string LASTREC
        {
            get { return lastrec; }
            set { lastrec = value; }
        }

        private string from_dt = string.Empty;
        public string FROM_DT
        {
            get { return from_dt; }
            set { from_dt = value; }
        }

        private string to_dt = string.Empty;
        public string TO_DT
        {
            get { return to_dt; }
            set { to_dt = value; }
        }
        private int _ITEM_ID;
        public int ITEM_ID
        {
            get { return _ITEM_ID; }
            set { _ITEM_ID = value; }
        }


        private string _currency;
        public string CURRENCY
        {
            get { return _currency; }
            set { _currency = value; }
        }

        private string _termsandconditions;
        public string TERMSANDCONDITIONS
        {
            get { return _termsandconditions; }
            set { _termsandconditions = value; }
        }

        private int _currency_id;
        public int CURRENCY_ID
        {
            get { return _currency_id; }
            set { _currency_id = value; }
        }

        private int _payment_days;
        public int PAYMENT_DAYS
        {
            get { return _payment_days; }
            set { _payment_days = value; }
        }

        private string _currency_name;
        public string CURRENCY_NAME
        {
            get { return _currency_name; }
            set { _currency_name = value; }
        }
        private string _currency_symbol;
        public string CURRENCY_SYMBOL
        {
            get { return _currency_symbol; }
            set { _currency_symbol = value; }
        }


        private string _Value;

        public string Value
        {
            get { return _Value; }
            set { _Value = value; }
        }



        private string _pan_no;
        public string PAN_NO
        {
            get { return _pan_no; }
            set { _pan_no = value; }
        }

        private string _contactperson;

        public string CONTACTPERSON
        {
            get { return _contactperson; }
            set { _contactperson = value; }
        }

        private string _tran_xml;
        public string TRAN_XML
        {
            get { return _tran_xml; }
            set { _tran_xml = value; }
        }
        private int session_id;

        public int SESSION_ID
        {
            get { return session_id; }
            set { session_id = value; }
        }

        private string _Driver_ID;

        public string Driver_ID
        {
            get { return _Driver_ID; }
            set { _Driver_ID = value; }
        }

        private string _DriverName;

        public string DriverName
        {
            get { return _DriverName; }
            set { _DriverName = value; }
        }

        private string _FatherName;

        public string FatherName
        {
            get { return _FatherName; }
            set { _FatherName = value; }
        }

        private string _DriverLienceNo;
        public string DriverLienceNo
        {
            get { return _DriverLienceNo; }
            set { _DriverLienceNo = value; }
        }
        private string _Gender;
        public string Gender
        {
            get { return _Gender; }
            set { _Gender = value; }
        }

        private string _Regien;
        public string Regien
        {
            get { return _Regien; }
            set { _Regien = value; }
        }
        private string _Nationality;
        public string Nationality
        {
            get { return _Nationality; }
            set { _Nationality = value; }
        }

        private int _Nationality_Id;
        public int Nationality_ID
        {
            get { return _Nationality_Id; }
            set { _Nationality_Id = value; }
        }
        private string _RELIGION;
        public string RELIGION
        {
            get { return _RELIGION; }
            set { _RELIGION = value; }
        }
        private int _RELIGION_ID;
        public int RELIGION_ID
        {
            get { return _RELIGION_ID; }
            set { _RELIGION_ID = value; }
        }

        private string _BloodGroup;
        public string BloodGroup
        {
            get { return _BloodGroup; }
            set { _BloodGroup = value; }
        }
        private int _BloodGroupId;
        public int BloodGroup_ID
        {
            get { return _BloodGroupId; }
            set { _BloodGroupId = value; }
        }
        private string _MaritalStatus;
        public string MaritalStatus
        {
            get { return _MaritalStatus; }
            set { _MaritalStatus = value; }
        }

        private string _DrivingLicenceValid;
        public string DrivingLicenceValid
        {
            get { return _DrivingLicenceValid; }
            set { _DrivingLicenceValid = value; }
        }
        private string _Details;
        public string Details
        {
            get { return _Details; }
            set { _Details = value; }
        }

        private string _PreviousExpDetails;
        public string PreviousExpDetails
        {
            get { return _PreviousExpDetails; }
            set { _PreviousExpDetails = value; }
        }
        private string _ExpVehicleType;
        public string ExpVehicleType
        {
            get { return _ExpVehicleType; }
            set { _ExpVehicleType = value; }
        }
        private string _DOJ;
        public string DOJ
        {
            get { return _DOJ; }
            set { _DOJ = value; }
        }

        private string _MobileNo;
        public string MobileNo
        {
            get { return _MobileNo; }
            set { _MobileNo = value; }
        }

        private int _DRVR_DETL_ID;
        public int DRVR_DETL_ID
        {
            get { return _DRVR_DETL_ID; }
            set { _DRVR_DETL_ID = value; }
        }

        private string _DRVR_DETL_CD;
        public string DRVR_DETL_CD
        {
            get { return _DRVR_DETL_CD; }
            set { _DRVR_DETL_CD = value; }
        }

        private string _LICENCE_NO;
        public string LICENCE_NO
        {
            get { return _LICENCE_NO; }
            set { _LICENCE_NO = value; }
        }

        private string _LICENCE_VALID;
        public string LICENCE_VALID
        {
            get { return _LICENCE_VALID; }
            set { _LICENCE_VALID = value; }
        }
        private string _LICENCE_EXP;
        public string LICENCE_EXP
        {
            get { return _LICENCE_EXP; }
            set { _LICENCE_EXP = value; }
        }

        private int _EXP_VEHICLE_TYPE;
        public int EXP_VEHICLE_TYPE
        {
            get { return _EXP_VEHICLE_TYPE; }
            set { _EXP_VEHICLE_TYPE = value; }
        }
        private string _LICENCE_PRV_EXP;
        public string LICENCE_PRV_EXP
        {
            get { return _LICENCE_PRV_EXP; }
            set { _LICENCE_PRV_EXP = value; }
        }
        private string _CREATE_BY;
        public string CREATE_BY
        {
            get { return _CREATE_BY; }
            set { _CREATE_BY = value; }
        }
        private string _MODIFY_BY;
        public string MODIFY_BY
        {
            get { return _MODIFY_BY; }
            set { _MODIFY_BY = value; }
        }
        private int _CountAll;
        public int COUNTALL
        {
            get { return _CountAll; }
            set { _CountAll = value; }
        }
        private string _DRIVER_NAME;
        public string DRIVER_NAME
        {
            get { return _DRIVER_NAME; }
            set { _DRIVER_NAME = value; }
        }
        private string _JOINING_DT;
        public string JOINING_DT
        {
            get { return _JOINING_DT; }
            set { _JOINING_DT = value; }
        }

        //vehicle properties
        private string _VEHCL_NAME;
        public string VEHCL_NAME
        {
            get { return _VEHCL_NAME; }
            set { _VEHCL_NAME = value; }
        }

        private string _VEHCL_REG_NO;
        public string VEHCL_REG_NO
        {
            get { return _VEHCL_REG_NO; }
            set { _VEHCL_REG_NO = value; }
        }

        private string _VEHCL_REG_DT;
        public string VEHCL_REG_DT
        {
            get { return _VEHCL_REG_DT; }
            set { _VEHCL_REG_DT = value; }
        }

        private string _PURCHASED_BY;
        public string PURCHASED_BY
        {
            get { return _PURCHASED_BY; }
            set { _PURCHASED_BY = value; }
        }

        private string _PURCHASED_DT;
        public string PURCHASED_DT
        {
            get { return _PURCHASED_DT; }
            set { _PURCHASED_DT = value; }
        }

        private string _MANFACTURE_NAME;
        public string MANFACTURE_NAME
        {
            get { return _MANFACTURE_NAME; }
            set { _MANFACTURE_NAME = value; }
        }

        private int _VEHICLE_TYPE;
        public int VEHICLE_TYPE
        {
            get { return _VEHICLE_TYPE; }
            set { _VEHICLE_TYPE = value; }
        }
        private string _TMC_RENVL_DT;
        public string TMC_RENVL_DT
        {
            get { return _TMC_RENVL_DT; }
            set { _TMC_RENVL_DT = value; }
        }

        private string _TAX_RENVL_DT;
        public string TAX_RENVL_DT
        {
            get { return _TAX_RENVL_DT; }
            set { _TAX_RENVL_DT = value; }
        }


        private string item_category;
        public string ITEM_CATEGORY
        {
            get { return item_category; }
            set { item_category = value; }
        }

        private string _VECHL_OWNR_NAME;
        public string VECHL_OWNR_NAME
        {
            get { return _VECHL_OWNR_NAME; }
            set { _VECHL_OWNR_NAME = value; }
        }

        private string _CHASSES_NO;
        public string CHASSES_NO
        {
            get { return _CHASSES_NO; }
            set { _CHASSES_NO = value; }
        }

        private string _FC_EXP_DT;
        public string FC_EXP_DT
        {
            get { return _FC_EXP_DT; }
            set { _FC_EXP_DT = value; }
        }

        private string _ENGINE_NO;
        public string ENGINE_NO
        {
            get { return _ENGINE_NO; }
            set { _ENGINE_NO = value; }
        }

        private int _ON_ROAD_PRICE;
        public int ON_ROAD_PRICE
        {
            get { return _ON_ROAD_PRICE; }
            set { _ON_ROAD_PRICE = value; }
        }
        private int _SEATING_CNT;
        public int SEATING_CNT
        {
            get { return _SEATING_CNT; }
            set { _SEATING_CNT = value; }
        }
        private int _FUEL_CAPACITY;
        public int FUEL_CAPACITY
        {
            get { return _FUEL_CAPACITY; }
            set { _FUEL_CAPACITY = value; }
        }

        private string _BVS_PERSN;
        public string BVS_PERSN
        {
            get { return _BVS_PERSN; }
            set { _BVS_PERSN = value; }
        }

        private string _EXTRA_FEATURES;
        public string EXTRA_FEATURES
        {
            get { return _EXTRA_FEATURES; }
            set { _EXTRA_FEATURES = value; }
        }


        private string _VECHL_BLNGS_TO;
        public string VECHL_BLNGS_TO
        {
            get { return _VECHL_BLNGS_TO; }
            set { _VECHL_BLNGS_TO = value; }
        }

        private int _DEPTID;
        public int DEPTID
        {
            get { return _DEPTID; }
            set { _DEPTID = value; }
        }
        private int _PAYMENT_MODE_ID;
        public int PAYMENT_MODE_ID
        {
            get { return _PAYMENT_MODE_ID; }
            set { _PAYMENT_MODE_ID = value; }
        }

        private int _FREE_SRV_NO;
        public int FREE_SRV_NO
        {
            get { return _FREE_SRV_NO; }
            set { _FREE_SRV_NO = value; }
        }

        private int _EMI_MONTHS;
        public int EMI_MONTHS
        {
            get { return _EMI_MONTHS; }
            set { _EMI_MONTHS = value; }
        }

        private int _EMI_AMT;
        public int EMI_AMT
        {
            get { return _EMI_AMT; }
            set { _EMI_AMT = value; }
        }


        private int _BANK_ID;
        public int BANK_ID
        {
            get { return _BANK_ID; }
            set { _BANK_ID = value; }
        }
        private string _BANK_NAME;
        public string BANK_NAME
        {
            get { return _BANK_NAME; }
            set { _BANK_NAME = value; }
        }
        private int _SERVC_FOR_DAYS;
        public int SERVC_FOR_DAYS
        {
            get { return _SERVC_FOR_DAYS; }
            set { _SERVC_FOR_DAYS = value; }
        }

        private string _SERVICEFOR;
        public string SERVICEFOR
        {
            get { return _SERVICEFOR; }
            set { _SERVICEFOR = value; }
        }

        private int _VEHCL_ID;
        public int VEHCL_ID
        {
            get { return _VEHCL_ID; }
            set { _VEHCL_ID = value; }
        }

        private string _VEHCL_CD;
        public string VEHCL_CD
        {
            get { return _VEHCL_CD; }
            set { _VEHCL_CD = value; }
        }

        private int _REV_NO;
        public int REV_NO
        {
            get { return _REV_NO; }
            set { _REV_NO = value; }
        }

        private string _REFERENCE_ID;
        public string REFERENCE_ID
        {
            get { return _REFERENCE_ID; }
            set { _REFERENCE_ID = value; }
        }

        //added by sivasankar on 09122015 for vehicle charges 




        private int _VEHCL_CHRG_ID;
        public int VEHCL_CHRG_ID
        {
            get { return _VEHCL_CHRG_ID; }
            set { _VEHCL_CHRG_ID = value; }
        }

        private string _VEHCL_CHRG_CD;
        public string VEHCL_CHRG_CD
        {
            get { return _VEHCL_CHRG_CD; }
            set { _VEHCL_CHRG_CD = value; }
        }

        private int _FROM_CITY_ID;
        public int FROM_CITY_ID
        {
            get { return _FROM_CITY_ID; }
            set { _FROM_CITY_ID = value; }
        }

        private string _FROM_CITY_NAME;
        public string FROM_CITY_NAME
        {
            get { return _FROM_CITY_NAME; }
            set { _FROM_CITY_NAME = value; }
        }


        private int _FROM_STATE_ID;
        public int FROM_STATE_ID
        {
            get { return _FROM_STATE_ID; }
            set { _FROM_STATE_ID = value; }
        }
        private string _FROM_STATE_NAME;
        public string FROM_STATE_NAME
        {
            get { return _FROM_STATE_NAME; }
            set { _FROM_STATE_NAME = value; }
        }

        private int _FROM_AREA_ID;
        public int FROM_AREA_ID
        {
            get { return _FROM_AREA_ID; }
            set { _FROM_AREA_ID = value; }
        }
        private string _FROM_AREA_NAME;
        public string FROM_AREA_NAME
        {
            get { return _FROM_AREA_NAME; }
            set { _FROM_AREA_NAME = value; }
        }

        private int _FROM_COUNTRY_ID;
        public int FROM_COUNTRY_ID
        {
            get { return _FROM_COUNTRY_ID; }
            set { _FROM_COUNTRY_ID = value; }
        }
        private string _FROM_COUNTRY_NAME;
        public string FROM_COUNTRY_NAME
        {
            get { return _FROM_COUNTRY_NAME; }
            set { _FROM_COUNTRY_NAME = value; }
        }

        private string _FROM_ADDRESS1;
        public string FROM_ADDRESS1
        {
            get { return _FROM_ADDRESS1; }
            set { _FROM_ADDRESS1 = value; }
        }

        private string _FROM_ADDRESS2;
        public string FROM_ADDRESS2
        {
            get { return _FROM_ADDRESS2; }
            set { _FROM_ADDRESS2 = value; }
        }
        private int _FROM_PIN_CODE;
        public int FROM_PIN_CODE
        {
            get { return _FROM_PIN_CODE; }
            set { _FROM_PIN_CODE = value; }
        }





        private int _TO_CITY_ID;
        public int TO_CITY_ID
        {
            get { return _TO_CITY_ID; }
            set { _TO_CITY_ID = value; }
        }
        private string _TO_CITY_NAME;
        public string TO_CITY_NAME
        {
            get { return _TO_CITY_NAME; }
            set { _TO_CITY_NAME = value; }
        }

        private int _TO_STATE_ID;
        public int TO_STATE_ID
        {
            get { return _TO_STATE_ID; }
            set { _TO_STATE_ID = value; }
        }
        private string _TO_STATE_NAME;
        public string TO_STATE_NAME
        {
            get { return _TO_STATE_NAME; }
            set { _TO_STATE_NAME = value; }
        }


        private int _TO_AREA_ID;
        public int TO_AREA_ID
        {
            get { return _TO_AREA_ID; }
            set { _TO_AREA_ID = value; }
        }
        private string _TO_AREA_NAME;
        public string TO_AREA_NAME
        {
            get { return _TO_AREA_NAME; }
            set { _TO_AREA_NAME = value; }
        }

        private int _TO_COUNTRY_ID;
        public int TO_COUNTRY_ID
        {
            get { return _TO_COUNTRY_ID; }
            set { _TO_COUNTRY_ID = value; }
        }
        private string _TO_COUNTRY_NAME;
        public string TO_COUNTRY_NAME
        {
            get { return _TO_COUNTRY_NAME; }
            set { _TO_COUNTRY_NAME = value; }
        }

        private string _TO_ADDRESS1;
        public string TO_ADDRESS1
        {
            get { return _TO_ADDRESS1; }
            set { _TO_ADDRESS1 = value; }
        }

        private string _TO_ADDRESS2;
        public string TO_ADDRESS2
        {
            get { return _TO_ADDRESS2; }
            set { _TO_ADDRESS2 = value; }
        }
        private int _TO_PIN_CODE;
        public int TO_PIN_CODE
        {
            get { return _TO_PIN_CODE; }
            set { _TO_PIN_CODE = value; }
        }


        private int _CHRG_TYPE_ID;
        public int CHRG_TYPE_ID
        {
            get { return _CHRG_TYPE_ID; }
            set { _CHRG_TYPE_ID = value; }
        }

        private string _CHRG_TYPE_NAME;
        public string CHRG_TYPE_NAME
        {
            get { return _CHRG_TYPE_NAME; }
            set { _CHRG_TYPE_NAME = value; }
        }

        private int _KILOMITERS;
        public int KILOMITERS
        {
            get { return _KILOMITERS; }
            set { _KILOMITERS = value; }
        }

        private int _CHRG_AMT;
        public int CHRG_AMT
        {
            get { return _CHRG_AMT; }
            set { _CHRG_AMT = value; }
        }

        private int _WTNG_CHRG_TYPE_ID;
        public int WTNG_CHRG_TYPE_ID
        {
            get { return _WTNG_CHRG_TYPE_ID; }
            set { _WTNG_CHRG_TYPE_ID = value; }
        }

        private string _WTNG_CHRG_TYPE_NAME;
        public string WTNG_CHRG_TYPE_NAME
        {
            get { return _WTNG_CHRG_TYPE_NAME; }
            set { _WTNG_CHRG_TYPE_NAME = value; }
        }
        private int _VEHCL_CHRG_REV_NO;
        public int VEHCL_CHRG_REV_NO
        {
            get { return _VEHCL_CHRG_REV_NO; }
            set { _VEHCL_CHRG_REV_NO = value; }
        }
        private int _WAIT_CHRGS_AMT;
        public int WAIT_CHRGS_AMT
        {
            get { return _WAIT_CHRGS_AMT; }
            set { _WAIT_CHRGS_AMT = value; }
        }

        private int _ADVANCE_AMT;
        public int ADVANCE_AMT
        {
            get { return _ADVANCE_AMT; }
            set { _ADVANCE_AMT = value; }
        }


        //ADDED BY SHANKAR
        private string _VECHL_SALEDT;
        public string VECHL_SALEDT
        {
            get { return _VECHL_SALEDT; }
            set { _VECHL_SALEDT = value; }
        }
        private string _VECHL_SALEBY;
        public string VECHL_SALEBY
        {
            get { return _VECHL_SALEBY; }
            set { _VECHL_SALEBY = value; }
        }
        private string _VECHL_SALETO;
        public string VECHL_SALETO
        {
            get { return _VECHL_SALETO; }
            set { _VECHL_SALETO = value; }
        }
        private string _VECHL_SALE_BYNAME;
        public string VECHL_SALE_BYNAME
        {
            get { return _VECHL_SALE_BYNAME; }
            set { _VECHL_SALE_BYNAME = value; }
        }
        private int _VECHL_READINGKM;
        public int VECHL_READINGKM
        {
            get { return _VECHL_READINGKM; }
            set { _VECHL_READINGKM = value; }
        }

        private string _VECHL_ADVANCEAMT;
        public string VECHL_ADVANCEAMT
        {
            get { return _VECHL_ADVANCEAMT; }
            set { _VECHL_ADVANCEAMT = value; }
        }

        private string _VECHL_DUEAMT;
        public string VECHL_DUEAMT
        {
            get { return _VECHL_DUEAMT; }
            set { _VECHL_DUEAMT = value; }
        }

        private string _VECHL_CONCESSIONAMT;
        public string VECHL_CONCESSIONAMT
        {
            get { return _VECHL_CONCESSIONAMT; }
            set { _VECHL_CONCESSIONAMT = value; }
        }

        private string _VECHL_PAIDAMT;
        public string VECHL_PAIDAMT
        {
            get { return _VECHL_PAIDAMT; }
            set { _VECHL_PAIDAMT = value; }
        }

        private string _VECHL_SALEREMARKS;
        public string VECHL_SALEREMARKS
        {
            get { return _VECHL_SALEREMARKS; }
            set { _VECHL_SALEREMARKS = value; }
        }
        private string _VECHL_SPAREPARTSNOTSALE;
        public string VECHL_SPAREPARTSNOTSALE
        {
            get { return _VECHL_SPAREPARTSNOTSALE; }
            set { _VECHL_SPAREPARTSNOTSALE = value; }
        }
        private string _VEHCL_SALE_NO;
        public string VEHCL_SALE_NO
        {
            get { return _VEHCL_SALE_NO; }
            set { _VEHCL_SALE_NO = value; }
        }
        private string _VEHCL_SALE_CD;
        public string VEHCL_SALE_CD
        {
            get { return _VEHCL_SALE_CD; }
            set { _VEHCL_SALE_CD = value; }
        }
        //added by sreekanth on 12112015
        private int _VEHICLE_ACCDT_REV_NO;
        public int VEHICLE_ACCDT_REV_NO
        {
            get { return _VEHICLE_ACCDT_REV_NO; }
            set { _VEHICLE_ACCDT_REV_NO = value; }
        }


        private string _VEHICLE_ACCDT_NO;
        public string VEHICLE_ACCDT_NO
        {
            get { return _VEHICLE_ACCDT_NO; }
            set { _VEHICLE_ACCDT_NO = value; }
        }



        private int _VECHL_ID;
        public int VECHL_ID
        {
            get { return _VECHL_ID; }
            set { _VECHL_ID = value; }
        }



        private int _ACCDT_BY;
        public int ACCDT_BY
        {
            get { return _ACCDT_BY; }
            set { _ACCDT_BY = value; }
        }


        private string _ACCDT_DT;
        public string ACCDT_DT
        {
            get { return _ACCDT_DT; }
            set { _ACCDT_DT = value; }
        }


        private string _ACCDT_AREA;
        public string ACCDT_AREA
        {
            get { return _ACCDT_AREA; }
            set { _ACCDT_AREA = value; }
        }



        private int _ACCDT_KM_READING;
        public int ACCDT_KM_READING
        {
            get { return _ACCDT_KM_READING; }
            set { _ACCDT_KM_READING = value; }
        }

        private int _DAMGE_COST;
        public int DAMGE_COST
        {
            get { return _DAMGE_COST; }
            set { _DAMGE_COST = value; }
        }

        private string _DAMGE_PARTS;
        public string DAMGE_PARTS
        {
            get { return _DAMGE_PARTS; }
            set { _DAMGE_PARTS = value; }
        }


        private int _TRAVLNG_PERSN_NO;
        public int TRAVLNG_PERSN_NO
        {
            get { return _TRAVLNG_PERSN_NO; }
            set { _TRAVLNG_PERSN_NO = value; }
        }


        private int _INJUR_PERSN_NO;
        public int INJUR_PERSN_NO
        {
            get { return _INJUR_PERSN_NO; }
            set { _INJUR_PERSN_NO = value; }
        }

        private string _INJUR_PERSN_NAME;
        public string INJUR_PERSN_NAME
        {
            get { return _INJUR_PERSN_NAME; }
            set { _INJUR_PERSN_NAME = value; }
        }

        private string _DIED_PERSN_NAMES;
        public string DIED_PERSN_NAMES
        {
            get { return _DIED_PERSN_NAMES; }
            set { _DIED_PERSN_NAMES = value; }
        }
        private int _DIED_PERSS_NO;
        public int DIED_PERSS_NO
        {
            get { return _DIED_PERSS_NO; }
            set { _DIED_PERSS_NO = value; }
        }

        private string _FIR_DETLS;
        public string FIR_DETLS
        {
            get { return _FIR_DETLS; }
            set { _FIR_DETLS = value; }
        }

        private string _FIR_STATUS;
        public string FIR_STATUS
        {
            get { return _FIR_STATUS; }
            set { _FIR_STATUS = value; }
        }

        private string _VECHL_JURNY_DTLS;
        public string VECHL_JURNY_DTLS
        {
            get { return _VECHL_JURNY_DTLS; }
            set { _VECHL_JURNY_DTLS = value; }
        }

        private string _INSURNC_RECOVET_AMT;
        public string INSURNC_RECOVET_AMT
        {
            get { return _INSURNC_RECOVET_AMT; }
            set { _INSURNC_RECOVET_AMT = value; }
        }


        private string _ACCDT_ADDRESS;
        public string ACCDT_ADDRESS
        {
            get { return _ACCDT_ADDRESS; }
            set { _ACCDT_ADDRESS = value; }
        }

        private string _ACCDT_REMARKS;
        public string ACCDT_REMARKS
        {
            get { return _ACCDT_REMARKS; }
            set { _ACCDT_REMARKS = value; }
        }

        private string _OTHER_PERSN_DTLS;
        public string OTHER_PERSN_DTLS
        {
            get { return _OTHER_PERSN_DTLS; }
            set { _OTHER_PERSN_DTLS = value; }
        }

        private string _OTHER_PERSN_DIED;
        public string OTHER_PERSN_DIED
        {
            get { return _OTHER_PERSN_DIED; }
            set { _OTHER_PERSN_DIED = value; }
        }

        private int _VEHCL_REG_ID;
        public int VEHCL_REG_ID
        {
            get { return _VEHCL_REG_ID; }
            set { _VEHCL_REG_ID = value; }
        }

        private int _VEHCL_REG_REV_NO;
        public int VEHCL_REG_REV_NO
        {
            get { return _VEHCL_REG_REV_NO; }
            set { _VEHCL_REG_REV_NO = value; }
        }
        private string _VEHCL_REG_CD;
        public string VEHCL_REG_CD
        {
            get { return _VEHCL_REG_CD; }
            set { _VEHCL_REG_CD = value; }
        }

        private string _FROM_LOC;
        public string FROM_LOC
        {
            get { return _FROM_LOC; }
            set { _FROM_LOC = value; }
        }
        private string _TO_LOC;
        public string TO_LOC
        {
            get { return _TO_LOC; }
            set { _TO_LOC = value; }
        }
        private int _KM_OPEN;
        public int KM_OPEN
        {
            get { return _KM_OPEN; }
            set { _KM_OPEN = value; }
        }

        private int _KM_CLOSE;
        public int KM_CLOSE
        {
            get { return _KM_CLOSE; }
            set { _KM_CLOSE = value; }
        }

        private int _FUEL_QTY_OPEN;
        public int FUEL_QTY_OPEN
        {
            get { return _FUEL_QTY_OPEN; }
            set { _FUEL_QTY_OPEN = value; }
        }

        private int _FUEL_QTY_CLOSE;
        public int FUEL_QTY_CLOSE
        {
            get { return _FUEL_QTY_CLOSE; }
            set { _FUEL_QTY_CLOSE = value; }
        }

        private int _FUEL_QTY_USED;
        public int FUEL_QTY_USED
        {
            get { return _FUEL_QTY_USED; }
            set { _FUEL_QTY_USED = value; }
        }

        private string _REASON;
        public string REASON
        {
            get { return _REASON; }
            set { _REASON = value; }
        }

        private int _DISTNS_KM;
        public int DISTNS_KM
        {
            get { return _DISTNS_KM; }
            set { _DISTNS_KM = value; }
        }

        private int _PAYMENT_TYPE;
        public int PAYMENT_TYPE
        {
            get { return _PAYMENT_TYPE; }
            set { _PAYMENT_TYPE = value; }
        }

        private int _WATING_CHARGE_TYPE;
        public int WATING_CHARGE_TYPE
        {
            get { return _WATING_CHARGE_TYPE; }
            set { _WATING_CHARGE_TYPE = value; }
        }

        private int _PAID_AMT;
        public int PAID_AMT
        {
            get { return _PAID_AMT; }
            set { _PAID_AMT = value; }
        }

        private int _CONS_AMT;
        public int CONS_AMT
        {
            get { return _CONS_AMT; }
            set { _CONS_AMT = value; }
        }
        private int _NET_AMT;
        public int NET_AMT
        {
            get { return _NET_AMT; }
            set { _NET_AMT = value; }
        }
        private int _CHARGE_AMT;
        public int CHARGE_AMT
        {
            get { return _CHARGE_AMT; }
            set { _CHARGE_AMT = value; }
        }

        private int _KILO_METRS;
        public int KILO_METRS
        {
            get { return _KILO_METRS; }
            set { _KILO_METRS = value; }
        }
        private int _EXLEC_AMT;
        public int EXLEC_AMT
        {
            get { return _EXLEC_AMT; }
            set { _EXLEC_AMT = value; }
        }

        private string _START_TIME;
        public string START_TIME
        {
            get { return _START_TIME; }
            set { _START_TIME = value; }
        }

        private string _END_TIME;
        public string END_TIME
        {
            get { return _END_TIME; }
            set { _END_TIME = value; }
        }

        private string _AUTH_BY;
        public string AUTH_BY
        {
            get { return _AUTH_BY; }
            set { _AUTH_BY = value; }
        }
        private int _DRIVER_ID;
        public int DRIVER_ID
        {
            get { return _DRIVER_ID; }
            set { _DRIVER_ID = value; }
        }
        private int _REQ_FROM_DEPT;
        public int REQ_FROM_DEPT
        {
            get { return _REQ_FROM_DEPT; }
            set { _REQ_FROM_DEPT = value; }
        }
        private int _REQUEST_BY_ID;
        public int REQUEST_BY_ID
        {
            get { return _REQUEST_BY_ID; }
            set { _REQUEST_BY_ID = value; }
        }
        private string _REQUEST_BY_NAME;
        public string REQUEST_BY_NAME
        {
            get { return _REQUEST_BY_NAME; }
            set { _REQUEST_BY_NAME = value; }
        }
        private string _WATING_HRS;
        public string WATING_HRS
        {
            get { return _WATING_HRS; }
            set { _WATING_HRS = value; }
        }
        private int _TARVLNG_PERSN;
        public int TARVLNG_PERSN
        {
            get { return _TARVLNG_PERSN; }
            set { _TARVLNG_PERSN = value; }
        }

        private int _TOLL_PLAZZA;
        public int TOLL_PLAZZA
        {
            get { return _TOLL_PLAZZA; }
            set { _TOLL_PLAZZA = value; }
        }

        private string _MOBILENO1;
        public string MOBILENO1
        {
            get { return _MOBILENO1; }
            set { _MOBILENO1 = value; }
        }
        private string _MOBILENO2;
        public string MOBILENO2
        {
            get { return _MOBILENO2; }
            set { _MOBILENO2 = value; }
        }
        private string _PARTY_NAME;
        public string PARTY_NAME
        {
            get { return _PARTY_NAME; }
            set { _PARTY_NAME = value; }
        }
        private int _DUE_AMT;
        public int DUE_AMT
        {
            get { return _DUE_AMT; }
            set { _DUE_AMT = value; }
        }
        private int _DUE_AUTH_BY;
        public int DUE_AUTH_BY
        {
            get { return _DUE_AUTH_BY; }
            set { _DUE_AUTH_BY = value; }
        }
        private string _DUE_AUTH_BY_NAME;
        public string DUE_AUTH_BY_NAME
        {
            get { return _DUE_AUTH_BY_NAME; }
            set { _DUE_AUTH_BY_NAME = value; }
        }
        private string _START_DT;
        public string START_DT
        {
            get { return _START_DT; }
            set { _START_DT = value; }
        }
        private string _END_DT;
        public string END_DT
        {
            get { return _END_DT; }
            set { _END_DT = value; }
        }


        private int _VECHL_SALE_ID;
        public int VECHL_SALE_ID
        {
            get { return _VECHL_SALE_ID; }
            set { _VECHL_SALE_ID = value; }
        }
        private string _OTH_VEHCL_DAMG_DETLS;
        public string OTH_VEHCL_DAMG_DETLS
        {
            get { return _OTH_VEHCL_DAMG_DETLS; }
            set { _OTH_VEHCL_DAMG_DETLS = value; }

        }

        private string _INSURANCE_STATUS;
        public string INSURANCE_STATUS
        {
            get { return _INSURANCE_STATUS; }
            set { _INSURANCE_STATUS = value; }

        }
        private int _VEHICLE_ACCDT_ID;
        public int VEHICLE_ACCDT_ID
        {
            get { return _VEHICLE_ACCDT_ID; }
            set { _VEHICLE_ACCDT_ID = value; }

        }

        private int _VEHCL_FUEL_ID;
        public int VEHCL_FUEL_ID
        {
            get { return _VEHCL_FUEL_ID; }
            set { _VEHCL_FUEL_ID = value; }
        }
        private int _VEHCL_FUEL_REV_NO;
        public int VEHCL_FUEL_REV_NO
        {
            get { return _VEHCL_FUEL_REV_NO; }
            set { _VEHCL_FUEL_REV_NO = value; }
        }
        private string _VEHCL_FUEL_CD;
        public string VEHCL_FUEL_CD
        {
            get { return _VEHCL_FUEL_CD; }
            set { _VEHCL_FUEL_CD = value; }
        }
        private int _FUEL_BY_ID;
        public int FUEL_BY_ID
        {
            get { return _FUEL_BY_ID; }
            set { _FUEL_BY_ID = value; }
        }

        private string _FUEL_BY_NAME;
        public string FUEL_BY_NAME
        {
            get { return _FUEL_BY_NAME; }
            set { _FUEL_BY_NAME = value; }
        }

        private string _FUEL_DT;
        public string FUEL_DT
        {
            get { return _FUEL_DT; }
            set { _FUEL_DT = value; }
        }
        private int _LTR_RS;
        public int LTR_RS
        {
            get { return _LTR_RS; }
            set { _LTR_RS = value; }
        }
        private int _FUEL_QTY;
        public int FUEL_QTY
        {
            get { return _FUEL_QTY; }
            set { _FUEL_QTY = value; }
        }
        private int _TOTAL_AMT;
        public int TOTAL_AMT
        {
            get { return _TOTAL_AMT; }
            set { _TOTAL_AMT = value; }
        }
        private int _PAYMENT_TYPE_ID;
        public int PAYMENT_TYPE_ID
        {
            get { return _PAYMENT_TYPE_ID; }
            set { _PAYMENT_TYPE_ID = value; }
        }
        private int _CONC_AMT;
        public int CONC_AMT
        {
            get { return _CONC_AMT; }
            set { _CONC_AMT = value; }
        }
        private int _SERVICE_AMT_SER;
        public int SERVICE_AMT_SER
        {
            get { return _SERVICE_AMT_SER; }
            set { _SERVICE_AMT_SER = value; }
        }

        private int _PAYMENT_BY_ID;
        public int PAYMENT_BY_ID
        {
            get { return _PAYMENT_BY_ID; }
            set { _PAYMENT_BY_ID = value; }
        }
        private string _PAYMENT_BY_NAME;
        public string PAYMENT_BY_NAME
        {
            get { return _PAYMENT_BY_NAME; }
            set { _PAYMENT_BY_NAME = value; }
        }

        private string _PAYMENT_DT;
        public string PAYMENT_DT
        {
            get { return _PAYMENT_DT; }
            set { _PAYMENT_DT = value; }
        }
        private int _PETROL_BUNK_ID;
        public int PETROL_BUNK_ID
        {
            get { return _PETROL_BUNK_ID; }
            set { _PETROL_BUNK_ID = value; }
        }
        private string _PETROL_BUNK_NAME;
        public string PETROL_BUNK_NAME
        {
            get { return _PETROL_BUNK_NAME; }
            set { _PETROL_BUNK_NAME = value; }
        }



        private string _VEHICLE_ACCDT_BY;
        public string VEHICLE_ACCDT_BY
        {
            get { return _VEHICLE_ACCDT_BY; }
            set { _VEHICLE_ACCDT_BY = value; }

        }
        private string _ACCD_BY_NAME;

        public string ACCD_BY_NAME
        {
            get { return _ACCD_BY_NAME; }
            set { _ACCD_BY_NAME = value; }

        }
        private string _ACCDT_TIME;

        public string ACCDT_TIME
        {
            get { return _ACCDT_TIME; }
            set { _ACCDT_TIME = value; }

        }

        private int _LAST_SERVICE_KM;
        public int LAST_SERVICE_KM
        {
            get { return _LAST_SERVICE_KM; }
            set { _LAST_SERVICE_KM = value; }
        }

        //added by sreekanth on 29122015
        private int _VEHCL_REQ_ID;

        public int VEHCL_REQ_ID
        {
            get { return _VEHCL_REQ_ID; }
            set { _VEHCL_REQ_ID = value; }

        }


        private int _VEHCL_REQ_REV_NO;

        public int VEHCL_REQ_REV_NO
        {
            get { return _VEHCL_REQ_REV_NO; }
            set { _VEHCL_REQ_REV_NO = value; }

        }

        private string _VEHCL_REQ_CD;

        public string VEHCL_REQ_CD
        {
            get { return _VEHCL_REQ_CD; }
            set { _VEHCL_REQ_CD = value; }

        }

        private string _TRIP_PURPOSE;

        public string TRIP_PURPOSE
        {
            get { return _TRIP_PURPOSE; }
            set { _TRIP_PURPOSE = value; }

        }

        private int _SERVICE_TYPE_ID;

        public int SERVICE_TYPE_ID
        {
            get { return _SERVICE_TYPE_ID; }
            set { _SERVICE_TYPE_ID = value; }

        }
        private int _REQ_DEPT_ID;

        public int REQ_DEPT_ID
        {
            get { return _REQ_DEPT_ID; }
            set { _REQ_DEPT_ID = value; }

        }


        private int _REQ_BY_ID;

        public int REQ_BY_ID
        {
            get { return _REQ_BY_ID; }
            set { _REQ_BY_ID = value; }

        }


        private string _REQ_BY_NAME;

        public string REQ_BY_NAME
        {
            get { return _REQ_BY_NAME; }
            set { _REQ_BY_NAME = value; }

        }
        private string _START_DATE;

        public string START_DATE
        {
            get { return _START_DATE; }
            set { _START_DATE = value; }

        }
        private string _MOBILENO;

        public string MOBILENO
        {
            get { return _MOBILENO; }
            set { _MOBILENO = value; }

        }
        private string _FROM_PINCODE;

        public string FROM_PINCODE
        {
            get { return _FROM_PINCODE; }
            set { _FROM_PINCODE = value; }

        }

        private string _TO_PINCODE;

        public string TO_PINCODE
        {
            get { return _TO_PINCODE; }
            set { _TO_PINCODE = value; }

        }

        //added by sreekanth  on 06 12 2016
        private int _VEHCL_INS_ID;
        public int VEHCL_INS_ID
        {
            get { return _VEHCL_INS_ID; }
            set { _VEHCL_INS_ID = value; }

        }


        private int _VEHCL_INS_REV_NO;

        public int VEHCL_INS_REV_NO
        {
            get { return _VEHCL_INS_REV_NO; }
            set { _VEHCL_INS_REV_NO = value; }

        }
        private string _VEHCL_INS_CD;

        public string VEHCL_INS_CD
        {
            get { return _VEHCL_INS_CD; }
            set { _VEHCL_INS_CD = value; }

        }
        private string _INS_NAME;

        public string INS_NAME
        {
            get { return _INS_NAME; }
            set { _INS_NAME = value; }

        }

        private string _VEHCL_INS_NO;

        public string VEHCL_INS_NO
        {
            get { return _VEHCL_INS_NO; }
            set { _VEHCL_INS_NO = value; }

        }
        private string _VEHCLE_INS_START_DT;

        public string VEHCLE_INS_START_DT
        {
            get { return _VEHCLE_INS_START_DT; }
            set { _VEHCLE_INS_START_DT = value; }

        }

        private string _VEHCLE_INS_EXP_DT;

        public string VEHCLE_INS_EXP_DT
        {
            get { return _VEHCLE_INS_EXP_DT; }
            set { _VEHCLE_INS_EXP_DT = value; }

        }

        private string _VEHCLE_INS_REN_DT;

        public string VEHCLE_INS_REN_DT
        {
            get { return _VEHCLE_INS_REN_DT; }
            set { _VEHCLE_INS_REN_DT = value; }

        }

        private int _INS_ID;

        public int INS_ID
        {
            get { return _INS_ID; }
            set { _INS_ID = value; }

        }

        private int _INS_AMT;

        public int INS_AMT
        {
            get { return _INS_AMT; }
            set { _INS_AMT = value; }

        }

        private string _INS_CATEGORY;

        public string INS_CATEGORY
        {
            get { return _INS_CATEGORY; }
            set { _INS_CATEGORY = value; }

        }

        private string _AGENT_REG_NO;

        public string AGENT_REG_NO
        {
            get { return _AGENT_REG_NO; }
            set { _AGENT_REG_NO = value; }

        }
        private string _AGENT_NAME;

        public string AGENT_NAME
        {
            get { return _AGENT_NAME; }
            set { _AGENT_NAME = value; }

        }
        private string vehcl_ins_Mno;

        public string VEHCL_INS_MNO
        {
            get { return vehcl_ins_Mno; }
            set { vehcl_ins_Mno = value; }
        }
        private string _ADDRESS1;

        public string ADDRESS1
        {
            get { return _ADDRESS1; }
            set { _ADDRESS1 = value; }

        }

        private string _ADDRESS2;

        public string ADDRESS2
        {
            get { return _ADDRESS2; }
            set { _ADDRESS2 = value; }
        }
        //Added by shankar
        private int _VECHL_SCARP_ID;
        public int VECHL_SCARP_ID
        {
            get { return _VECHL_SCARP_ID; }
            set { _VECHL_SCARP_ID = value; }
        }
        private int _VEHCL_SCRAP_REV_NO;
        public int VEHCL_SCRAP_REV_NO
        {
            get { return _VEHCL_SCRAP_REV_NO; }
            set { _VEHCL_SCRAP_REV_NO = value; }
        }
        private string _VECHL_SCARP_NO;
        public string VECHL_SCARP_NO
        {
            get { return _VECHL_SCARP_NO; }
            set { _VECHL_SCARP_NO = value; }
        }

        private int _scrap_yearsused;
        public int scrap_yearsused
        {
            get { return _scrap_yearsused; }
            set { _scrap_yearsused = value; }
        }

        private int _scrap_amt;
        public int scrap_amt
        {
            get { return _scrap_amt; }
            set { _scrap_amt = value; }
        }

        private int _scrap_netamt;
        public int scrap_netamt
        {
            get { return _scrap_netamt; }
            set { _scrap_netamt = value; }
        }

        private int _READING_KM;
        public int READING_KM
        {
            get { return _READING_KM; }
            set { _READING_KM = value; }
        }
        private int _grasswaight;
        public int grasswaight
        {
            get { return _grasswaight; }
            set { _grasswaight = value; }
        }

        private int _netwaight;
        public int netwaight
        {
            get { return _netwaight; }
            set { _netwaight = value; }
        }

        private string _scrap_remarks;
        public string scrap_remarks
        {
            get { return _scrap_remarks; }
            set { _scrap_remarks = value; }

        }
        private string _SCARP_BY;
        public string SCARP_BY
        {
            get { return _SCARP_BY; }
            set { _SCARP_BY = value; }

        }
        private string _scrap_dt;
        public string scrap_dt
        {
            get { return _scrap_dt; }
            set { _scrap_dt = value; }

        }
        private string _SCARP_PT;
        public string SCARP_PT
        {
            get { return _SCARP_PT; }
            set { _SCARP_PT = value; }

        }
        private string _scrap_purchasedt;
        public string scrap_purchasedt
        {
            get { return _scrap_purchasedt; }
            set { _scrap_purchasedt = value; }

        }
        private string _SCARP_TO;
        public string SCARP_TO
        {
            get { return _SCARP_TO; }
            set { _SCARP_TO = value; }

        }
        private string _scrap_pt;
        public string scrap_pt
        {
            get { return _scrap_pt; }
            set { _scrap_pt = value; }

        }
        private int _SCARP_BY_ID;
        public int SCARP_BY_ID
        {
            get { return _SCARP_BY_ID; }
            set { _SCARP_BY_ID = value; }
        }
        private string _PURCHAGE_DT;
        public string PURCHAGE_DT
        {
            get { return _PURCHAGE_DT; }
            set { _PURCHAGE_DT = value; }

        }
        private string _SCARP_DT;
        public string SCARP_DT
        {
            get { return _SCARP_DT; }
            set { _SCARP_DT = value; }

        }
        private int _SCRAP_TYPE_ID;
        public int SCRAP_TYPE_ID
        {
            get { return _SCRAP_TYPE_ID; }
            set { _SCRAP_TYPE_ID = value; }

        }
        private string _SCRAP_TYPE_NAME;
        public string SCRAP_TYPE_NAME
        {
            get { return _SCRAP_TYPE_NAME; }
            set { _SCRAP_TYPE_NAME = value; }

        }


        //added by sreekanth on 20-1-2016
        private int _VECHL_FRM_ID;
        public int VECHL_FRM_ID
        {
            get { return _VECHL_FRM_ID; }
            set { _VECHL_FRM_ID = value; }

        }


        private int _VECHL_FRM_REV_NO;
        public int VECHL_FRM_REV_NO
        {
            get { return _VECHL_FRM_REV_NO; }
            set { _VECHL_FRM_REV_NO = value; }

        }

        private string _FREE_SERV_NO;
        public string FREE_SERV_NO
        {
            get { return _FREE_SERV_NO; }
            set { _FREE_SERV_NO = value; }

        }

        private string _SERVICE_BY;
        public string SERVICE_BY
        {
            get { return _SERVICE_BY; }
            set { _SERVICE_BY = value; }

        }
        private string _SERVICE_DT;
        public string SERVICE_DT
        {
            get { return _SERVICE_DT; }
            set { _SERVICE_DT = value; }

        }
        private string _SERV_FEED_BACK;
        public string SERV_FEED_BACK
        {
            get { return _SERV_FEED_BACK; }
            set { _SERV_FEED_BACK = value; }

        }


        private string _LAST_SERV_DT;
        public string LAST_SERV_DT
        {
            get { return _LAST_SERV_DT; }
            set { _LAST_SERV_DT = value; }

        }

        private string _COMPANY_NAME;
        public string COMPANY_NAME
        {
            get { return _COMPANY_NAME; }
            set { _COMPANY_NAME = value; }

        }
        private string _COMPANY_ADDRESS;
        public string COMPANY_ADDRESS
        {
            get { return _COMPANY_ADDRESS; }
            set { _COMPANY_ADDRESS = value; }

        }
        private string _SERVICE_EVERY;
        public string SERVICE_EVERY
        {
            get { return _SERVICE_EVERY; }
            set { _SERVICE_EVERY = value; }

        }
        private string _VECHL_SER_CD;
        public string VECHL_SER_CD
        {
            get { return _VECHL_SER_CD; }
            set { _VECHL_SER_CD = value; }

        }

        private string _ACCIDENT_COUSE;

        public string ACCIDENT_COUSE
        {
            get { return _ACCIDENT_COUSE; }
            set { _ACCIDENT_COUSE = value; }
        }


        //added by sreekanth on 27012016

        private int _VEHCL_RT_WISE_ID;
        public int VEHCL_RT_WISE_ID
        {
            get { return _VEHCL_RT_WISE_ID; }
            set { _VEHCL_RT_WISE_ID = value; }

        }
        private int _COMPANY_ID;
        public int COMPANY_ID
        {
            get { return _COMPANY_ID; }
            set { _COMPANY_ID = value; }

        }


        private int _VEHCL_RT_WISE_REV_NO;
        public int VEHCL_RT_WISE_REV_NO
        {
            get { return _VEHCL_RT_WISE_REV_NO; }
            set { _VEHCL_RT_WISE_REV_NO = value; }

        }

        private string _VEHCL_RT_WISE_CD;
        public string VEHCL_RT_WISE_CD
        {
            get { return _VEHCL_RT_WISE_CD; }
            set { _VEHCL_RT_WISE_CD = value; }

        }

        private string _VEHCL_RT_MAP_NAME;
        public string VEHCL_RT_MAP_NAME
        {
            get { return _VEHCL_RT_MAP_NAME; }
            set { _VEHCL_RT_MAP_NAME = value; }

        }


        private int _VEHCL_TYPE_ID;
        public int VEHCL_TYPE_ID
        {
            get { return _VEHCL_TYPE_ID; }
            set { _VEHCL_TYPE_ID = value; }

        }

        private int _VEHCL_TYPE_REV_NO;
        public int VEHCL_TYPE_REV_NO
        {
            get { return _VEHCL_TYPE_REV_NO; }
            set { _VEHCL_TYPE_REV_NO = value; }

        }

        private int _TYPE_OF_SRV_ID;
        public int TYPE_OF_SRV_ID
        {
            get { return _TYPE_OF_SRV_ID; }
            set { _TYPE_OF_SRV_ID = value; }

        }
        private int _KILLO_METERS;
        public int KILLO_METERS
        {
            get { return _KILLO_METERS; }
            set { _KILLO_METERS = value; }

        }


        private int _PER_KLMTR;
        public int PER_KLMTR
        {
            get { return _PER_KLMTR; }
            set { _PER_KLMTR = value; }

        }
        private int _AMOUNT;
        public int AMOUNT
        {
            get { return _AMOUNT; }
            set { _AMOUNT = value; }

        }


        private int _MIN_KLMTR;
        public int MIN_KLMTR
        {
            get { return _MIN_KLMTR; }
            set { _MIN_KLMTR = value; }

        }
        private int _MIN_KLMTR_AMT;
        public int MIN_KLMTR_AMT
        {
            get { return _MIN_KLMTR_AMT; }
            set { _MIN_KLMTR_AMT = value; }

        }
        private int _WTCH_TYPE_ID;
        public int WTCH_TYPE_ID
        {
            get { return _WTCH_TYPE_ID; }
            set { _WTCH_TYPE_ID = value; }

        }

        private int _WTCH_AMOUNT;
        public int WTCH_AMOUNT
        {
            get { return _WTCH_AMOUNT; }
            set { _WTCH_AMOUNT = value; }

        }

        //added by sreekanth on 29-01-2016
        private int _VEHCL_SRV_CNR_ID;
        public int VEHCL_SRV_CNR_ID
        {
            get { return _VEHCL_SRV_CNR_ID; }
            set { _VEHCL_SRV_CNR_ID = value; }

        }

        private int _VEHCL_SRV_CNR_REV_NO;
        public int VEHCL_SRV_CNR_REV_NO
        {
            get { return _VEHCL_SRV_CNR_REV_NO; }
            set { _VEHCL_SRV_CNR_REV_NO = value; }

        }

        private string _VEHCL_SRV_CNR_CD;
        public string VEHCL_SRV_CNR_CD
        {
            get { return _VEHCL_SRV_CNR_CD; }
            set { _VEHCL_SRV_CNR_CD = value; }

        }
        private string _VEHCL_SRV_NAME;
        public string VEHCL_SRV_NAME
        {
            get { return _VEHCL_SRV_NAME; }
            set { _VEHCL_SRV_NAME = value; }

        }
        private string _VEHCL_SRV_DESC;
        public string VEHCL_SRV_DESC
        {
            get { return _VEHCL_SRV_DESC; }
            set { _VEHCL_SRV_DESC = value; }

        }
        //added by sreekanth on 4-2-2016 vehicletype


        private int _VEHCLE_TYPE_ID;
        public int VEHCLE_TYPE_ID
        {
            get { return _VEHCLE_TYPE_ID; }
            set { _VEHCLE_TYPE_ID = value; }

        }
        private int _VEHCLE_TYPE_REV_NO;
        public int VEHCLE_TYPE_REV_NO
        {
            get { return _VEHCLE_TYPE_REV_NO; }
            set { _VEHCLE_TYPE_REV_NO = value; }

        }
        private string _VEHCLE_TYPE_CD;
        public string VEHCLE_TYPE_CD
        {
            get { return _VEHCLE_TYPE_CD; }
            set { _VEHCLE_TYPE_CD = value; }

        }
        private string _VEHCLE_TYPE_NAME;
        public string VEHCLE_TYPE_NAME
        {
            get { return _VEHCLE_TYPE_NAME; }
            set { _VEHCLE_TYPE_NAME = value; }

        }
        private string _VEHCLE_TYPE_DESC;
        public string VEHCLE_TYPE_DESC
        {
            get { return _VEHCLE_TYPE_DESC; }
            set { _VEHCLE_TYPE_DESC = value; }

        }
        //ADDED BY SREEKANTH ON 06 02 2016 polutiOnCheck

        private int _VEHCL_PLTN_CHK_ID;
        public int VEHCL_PLTN_CHK_ID
        {
            get { return _VEHCL_PLTN_CHK_ID; }
            set { _VEHCL_PLTN_CHK_ID = value; }
        }
        private int _VEHCL_PLTN_CHK_REV_NO;

        public int VEHCL_PLTN_CHK_REV_NO
        {
            get { return _VEHCL_PLTN_CHK_REV_NO; }
            set { _VEHCL_PLTN_CHK_REV_NO = value; }
        }
        private string _VEHCL_PLTN_CHK_CD;

        public string VEHCL_PLTN_CHK_CD
        {
            get { return _VEHCL_PLTN_CHK_CD; }
            set { _VEHCL_PLTN_CHK_CD = value; }
        }

        private string _VEHCL_PLTN_CHK_NO;

        public string VEHCL_PLTN_CHK_NO
        {
            get { return _VEHCL_PLTN_CHK_NO; }
            set { _VEHCL_PLTN_CHK_NO = value; }
        }
        private string _PLTN_VALID_START_DT;

        public string PLTN_VALID_START_DT
        {
            get { return _PLTN_VALID_START_DT; }
            set { _PLTN_VALID_START_DT = value; }
        }
        private string _PLTN_VALID_END_DT;

        public string PLTN_VALID_END_DT
        {
            get { return _PLTN_VALID_END_DT; }
            set { _PLTN_VALID_END_DT = value; }
        }
        private string _PLTN_VALID_REN_DT;

        public string PLTN_VALID_REN_DT
        {
            get { return _PLTN_VALID_REN_DT; }
            set { _PLTN_VALID_REN_DT = value; }
        }
        private int _PLTN_CHK_BY_ID;

        public int PLTN_CHK_BY_ID
        {
            get { return _PLTN_CHK_BY_ID; }
            set { _PLTN_CHK_BY_ID = value; }
        }
        private string _PLTN_CHK_BY_NAME;

        public string PLTN_CHK_BY_NAME
        {
            get { return _PLTN_CHK_BY_NAME; }
            set { _PLTN_CHK_BY_NAME = value; }
        }

        private int _PLTN_CHK_AMT;

        public int PLTN_CHK_AMT
        {
            get { return _PLTN_CHK_AMT; }
            set { _PLTN_CHK_AMT = value; }
        }
        private string _PLTN_CHK_ADDRESS_ID;

        public string PLTN_CHK_ADDRESS_ID
        {
            get { return _PLTN_CHK_ADDRESS_ID; }
            set { _PLTN_CHK_ADDRESS_ID = value; }
        }

        //ADDED BY MANOJ FOR VEHICLE TRACKING SCREEN
        private int track_id;

        public int TRACK_ID
        {
            get { return track_id; }
            set { track_id = value; }
        }
        private int track_rev_no;

        public int TRACK_REV_NO
        {
            get { return track_rev_no; }
            set { track_rev_no = value; }
        }
        private string track_cd;

        public string TRACK_CD
        {
            get { return track_cd; }
            set { track_cd = value; }
        }
        private int vehcle_out_id;

        public int VEHCLE_OUT_ID
        {
            get { return vehcle_out_id; }
            set { vehcle_out_id = value; }
        }
        private string present_area;

        public string PRESENT_AREA
        {
            get { return present_area; }
            set { present_area = value; }
        }
        private string track_remarks;

        public string TRACK_REMARKS
        {
            get { return track_remarks; }
            set { track_remarks = value; }
        }
        private string klmtrss_charge_amt;

        public string KLMTRSS_CHARGE_AMT
        {
            get { return klmtrss_charge_amt; }
            set { klmtrss_charge_amt = value; }
        }
        private string kilo_meters;

        public string KILO_METERS
        {
            get { return kilo_meters; }
            set { kilo_meters = value; }
        }
        private string net_amnt;

        public string NET_AMNT
        {
            get { return net_amnt; }
            set { net_amnt = value; }
        }
        private int _CUR_EXCH_RATE_ID;

        public int CUR_EXCH_RATE_ID
        {
            get { return _CUR_EXCH_RATE_ID; }
            set { _CUR_EXCH_RATE_ID = value; }
        }
        private int _CUR_EXCH_RATE;
        public int CUR_EXCH_RATE
        {
            get { return _CUR_EXCH_RATE; }
            set { _CUR_EXCH_RATE = value; }
        }
        private int _REQUIRED_AMT_IN;
        public int REQUIRED_AMT_IN
        {
            get { return _REQUIRED_AMT_IN; }
            set { _REQUIRED_AMT_IN = value; }
        }

        private int _AMT_IN_CUR;
        public int AMT_IN_CUR
        {
            get { return _AMT_IN_CUR; }
            set { _AMT_IN_CUR = value; }
        }

        private int _CARD_TYPE_ID;
        public int CARD_TYPE_ID
        {
            get { return _CARD_TYPE_ID; }
            set { _CARD_TYPE_ID = value; }
        }

        private int _CARD_NO;
        public int CARD_NO
        {
            get { return _CARD_NO; }
            set { _CARD_NO = value; }
        }
        private string _AUTHORIZATION_NAME;
        public string AUTHORIZATION_NAME
        {
            get { return _AUTHORIZATION_NAME; }
            set { _AUTHORIZATION_NAME = value; }
        }
        private string _EXPIRY_DT;
        public string EXPIRY_DT
        {
            get { return _EXPIRY_DT; }
            set { _EXPIRY_DT = value; }
        }

        private string _RECEIPT_NO;
        public string RECEIPT_NO
        {
            get { return _RECEIPT_NO; }
            set { _RECEIPT_NO = value; }
        }

        private int _RECEIPT_AMT;
        public int RECEIPT_AMT
        {
            get { return _RECEIPT_AMT; }
            set { _RECEIPT_AMT = value; }
        }
        private int _TENDERED;
        public int TENDERED
        {
            get { return _TENDERED; }
            set { _TENDERED = value; }
        }
        private int _CHANGE_IN;
        public int CHANGE_IN
        {
            get { return _CHANGE_IN; }
            set { _CHANGE_IN = value; }
        }
        private string _TRANSACTION_NO;
        public string TRANSACTION_NO
        {
            get { return _TRANSACTION_NO; }
            set { _TRANSACTION_NO = value; }
        }

        private string _TRANSPORT_REFERENCE_TYPE_ID;
        public string TRANSPORT_REFERENCE_TYPE_ID
        {
            get { return _TRANSPORT_REFERENCE_TYPE_ID; }
            set { _TRANSPORT_REFERENCE_TYPE_ID = value; }
        }
        private string _ROUTE_NAME;
        public string ROUTE_NAME
        {
            get { return _ROUTE_NAME; }
            set { _ROUTE_NAME = value; }
        }
        private int _ROUTE_ID;
        public int ROUTE_ID
        {
            get { return _ROUTE_ID; }
            set { _ROUTE_ID = value; }
        }
        private int _PER_KM;
        public int PER_KM
        {
            get { return _PER_KM; }
            set { _PER_KM = value; }
        }
        private int _MIN_KM;
        public int MIN_KM
        {
            get { return _MIN_KM; }
            set { _MIN_KM = value; }
        }
        private int _MIN_KM_AMT;
        public int MIN_KM_AMT
        {
            get { return _MIN_KM_AMT; }
            set { _MIN_KM_AMT = value; }
        }
        private int _CHARGE_TYPE_ID;
        public int CHARGE_TYPE_ID
        {
            get { return _CHARGE_TYPE_ID; }
            set { _CHARGE_TYPE_ID = value; }
        }
        private string _DRIVER_MOBILE_NO;
        public string DRIVER_MOBILE_NO
        {
            get { return _DRIVER_MOBILE_NO; }
            set { _DRIVER_MOBILE_NO = value; }
        }
        private string _TIME_OF_JOURNY;
        public string TIME_OF_JOURNY
        {
            get { return _TIME_OF_JOURNY; }
            set { _TIME_OF_JOURNY = value; }
        }
        private int _VEHCL_KILMTR_WISE_ID;
        public int VEHCL_KILMTR_WISE_ID
        {
            get { return _VEHCL_KILMTR_WISE_ID; }
            set { _VEHCL_KILMTR_WISE_ID = value; }
        }

        private string _VEHCL_KILMTR_WISE_CD;
        public string VEHCL_KILMTR_WISE_CD
        {
            get { return _VEHCL_KILMTR_WISE_CD; }
            set { _VEHCL_KILMTR_WISE_CD = value; }
        }

        private string _VEHCL_TYPE_NAME;
        public string VEHCL_TYPE_NAME
        {
            get { return _VEHCL_TYPE_NAME; }
            set { _VEHCL_TYPE_NAME = value; }
        }

        private string _TYPE_OF_SRV_NAME;
        public string TYPE_OF_SRV_NAME
        {
            get { return _TYPE_OF_SRV_NAME; }
            set { _TYPE_OF_SRV_NAME = value; }
        }

        private int _ENTITY_VALUE_ID;
        public int ENTITY_VALUE_ID
        {
            get { return _ENTITY_VALUE_ID; }
            set { _ENTITY_VALUE_ID = value; }
        }

        private int _ENTITY_VALUE_REV_NO;
        public int ENTITY_VALUE_REV_NO
        {
            get { return _ENTITY_VALUE_REV_NO; }
            set { _ENTITY_VALUE_REV_NO = value; }
        }

        private string _ENTITY_VALUE_CD;
        public string ENTITY_VALUE_CD
        {
            get { return _ENTITY_VALUE_CD; }
            set { _ENTITY_VALUE_CD = value; }
        }

        private string _ENTITY_VALUE_NAME;
        public string ENTITY_VALUE_NAME
        {
            get { return _ENTITY_VALUE_NAME; }
            set { _ENTITY_VALUE_NAME = value; }
        }

        private string _ENTITY_VALUE_DESC;
        public string ENTITY_VALUE_DESC
        {
            get { return _ENTITY_VALUE_DESC; }
            set { _ENTITY_VALUE_DESC = value; }
        }

        private int _ENTITY_ID;
        public int ENTITY_ID
        {
            get { return _ENTITY_ID; }
            set { _ENTITY_ID = value; }
        }

        private int _ENTITY_REV_NO;
        public int ENTITY_REV_NO
        {
            get { return _ENTITY_REV_NO; }
            set { _ENTITY_REV_NO = value; }
        }
        private string _ENTITY_CD;
        public string ENTITY_CD
        {
            get { return _ENTITY_CD; }
            set { _ENTITY_CD = value; }
        }

        private string _ENTITY_NAME;
        public string ENTITY_NAME
        {
            get { return _ENTITY_NAME; }
            set { _ENTITY_NAME = value; }
        }

        private string _ENTITY_DESC;
        public string ENTITY_DESC
        {
            get { return _ENTITY_DESC; }
            set { _ENTITY_DESC = value; }
        }

        private int _VEHCL_OUT_ID;
        public int VEHCL_OUT_ID
        {
            get { return _VEHCL_OUT_ID; }
            set { _VEHCL_OUT_ID = value; }
        }


        private int _VEHCL_OUT_REV_NO;
        public int VEHCL_OUT_REV_NO
        {
            get { return _VEHCL_OUT_REV_NO; }
            set { _VEHCL_OUT_REV_NO = value; }
        }

        private string _VEHCL_OUT_CD;
        public string VEHCL_OUT_CD
        {
            get { return _VEHCL_OUT_CD; }
            set { _VEHCL_OUT_CD = value; }
        }


        private string _TOTAL_PERSONS;
        public string TOTAL_PERSONS
        {
            get { return _TOTAL_PERSONS; }
            set { _TOTAL_PERSONS = value; }
        }

        private int _UN_RECOVERABLE_AMT;
        public int UN_RECOVERABLE_AMT
        {
            get { return _UN_RECOVERABLE_AMT; }
            set { _UN_RECOVERABLE_AMT = value; }
        }

        private int _KLMTRS_CHARGE_AMT;
        public int KLMTRS_CHARGE_AMT
        {
            get { return _KLMTRS_CHARGE_AMT; }
            set { _KLMTRS_CHARGE_AMT = value; }
        }
        private string _DRIVER_MOBILENO;
        public string DRIVER_MOBILENO
        {
            get { return _DRIVER_MOBILENO; }
            set { _DRIVER_MOBILENO = value; }
        }

        //FOR VEHICLE MASTER SCREEN ADDED BY MANOJ
        private int show_room_id;

        public int SHOW_ROOM_ID
        {
            get { return show_room_id; }
            set { show_room_id = value; }
        }
        private int vehicle_show_room_rev_no;

        public int VEHICLE_SHOW_ROOM_REV_NO
        {
            get { return vehicle_show_room_rev_no; }
            set { vehicle_show_room_rev_no = value; }
        }
        private string show_room_cd;

        public string SHOW_ROOM_CD
        {
            get { return show_room_cd; }
            set { show_room_cd = value; }
        }
        private string show_room_name;

        public string SHOW_ROOM_NAME
        {
            get { return show_room_name; }
            set { show_room_name = value; }
        }
        private string branch_name;

        public string BRANCH_NAME
        {
            get { return branch_name; }
            set { branch_name = value; }
        }
        private string sales_person_name;

        public string SALES_PERSON_NAME
        {
            get { return sales_person_name; }
            set { sales_person_name = value; }
        }

        // IN VEHICLE MASTER FOR VEHICLE RENTAL DETAILS BY MANOJ
        private string rental_from;

        public string RENTAL_FROM
        {
            get { return rental_from; }
            set { rental_from = value; }
        }
        private string rental_mno;

        public string RENTAL_MNO
        {
            get { return rental_mno; }
            set { rental_mno = value; }
        }
        private string rental_phno;

        public string RENTAL_PHNO
        {
            get { return rental_phno; }
            set { rental_phno = value; }
        }
        private string contract_type;

        public string CONTRACT_TYPE
        {
            get { return contract_type; }
            set { contract_type = value; }
        }
        private string rent_amount;

        public string RENT_AMOUNT
        {
            get { return rent_amount; }
            set { rent_amount = value; }
        }
        private string km_reading;

        public string KM_READING
        {
            get { return km_reading; }
            set { km_reading = value; }
        }

        // for old vehicle details in vehicle master
        private string old_sale_person_name;

        public string OLD_SALE_PERSON_NAME
        {
            get { return old_sale_person_name; }
            set { old_sale_person_name = value; }
        }
        private string old_km_reading;

        public string OLD_KM_READING
        {
            get { return old_km_reading; }
            set { old_km_reading = value; }
        }
        private string old_licence_renew_dt;

        public string OLD_LICENCE_RENEW_DT
        {
            get { return old_licence_renew_dt; }
            set { old_licence_renew_dt = value; }
        }

        //For payment details in vehilce master

        private string showroom_price;

        public string SHOWROOM_PRICE
        {
            get { return showroom_price; }
            set { showroom_price = value; }
        }
        //For loan details in vehilce master

        private string loan_bank_name;

        public string LOAN_BANK_NAME
        {
            get { return loan_bank_name; }
            set { loan_bank_name = value; }
        }
        private string loan_amt;

        public string LOAN_AMT
        {
            get { return loan_amt; }
            set { loan_amt = value; }
        }
        private string down_payment_amt;

        public string DOWN_PAYMENT_AMT
        {
            get { return down_payment_amt; }
            set { down_payment_amt = value; }
        }

        private string loan_bank_address_id;

        public string LOAN_BANK_ADDRESS_ID
        {
            get { return loan_bank_address_id; }
            set { loan_bank_address_id = value; }
        }
        private string loan_start_dt;

        public string LOAN_START_DT
        {
            get { return loan_start_dt; }
            set { loan_start_dt = value; }
        }
        private string loan_end_dt;

        public string LOAN_END_DT
        {
            get { return loan_end_dt; }
            set { loan_end_dt = value; }
        }
        private string veh_loan_amt;

        public string VEH_LOAN_AMT
        {
            get { return veh_loan_amt; }
            set { veh_loan_amt = value; }
        }
        //For insurance details in vehilce master

        private string insurance_type_id;

        public string INSURANCE_TYPE_ID
        {
            get { return insurance_type_id; }
            set { insurance_type_id = value; }
        }
        private string insurance_agent_name;

        public string INSURANCE_AGENT_NAME
        {
            get { return insurance_agent_name; }
            set { insurance_agent_name = value; }
        }
        private string insurance_agent_reg_no;

        public string INSURANCE_AGENT_REG_NO
        {
            get { return insurance_agent_reg_no; }
            set { insurance_agent_reg_no = value; }
        }
        private string insurance_mno;

        public string INSURANCE_MNO
        {
            get { return insurance_mno; }
            set { insurance_mno = value; }
        }
        private string insurance_name;

        public string INSURANCE_NAME
        {
            get { return insurance_name; }
            set { insurance_name = value; }
        }
        private string insurence_name;

        public string INSURENCE_NAME
        {
            get { return insurence_name; }
            set { insurence_name = value; }
        }
        private string insurance_amt;

        public string INSURANCE_AMT
        {
            get { return insurance_amt; }
            set { insurance_amt = value; }
        }
        private string insurance_start_dt;

        public string INSURANCE_START_DT
        {
            get { return insurance_start_dt; }
            set { insurance_start_dt = value; }
        }
        private string insurance_exp_dt;

        public string INSURANCE_EXP_DT
        {
            get { return insurance_exp_dt; }
            set { insurance_exp_dt = value; }
        }
        private string insurance_renew_dt;

        public string INSURANCE_RENEW_DT
        {
            get { return insurance_renew_dt; }
            set { insurance_renew_dt = value; }
        }
        private string old_service_dt;

        public string OLD_SERVICE_DT
        {
            get { return old_service_dt; }
            set { old_service_dt = value; }
        }

        private string old_address_id;

        public string OLD_ADDRESS_ID
        {
            get { return old_address_id; }
            set { old_address_id = value; }
        }

        private string rent_address_id;

        public string RENT_ADDRESS_ID
        {
            get { return rent_address_id; }
            set { rent_address_id = value; }
        }
        private string vehcel_model;

        public string VEHCEL_MODEL
        {
            get { return vehcel_model; }
            set { vehcel_model = value; }
        }
        private string make_year;

        public string MAKE_YEAR
        {
            get { return make_year; }
            set { make_year = value; }
        }
        private string patient_capacity;

        public string PATIENT_CAPACITY
        {
            get { return patient_capacity; }
            set { patient_capacity = value; }
        }
        private int fuel_type_id;

        public int FUEL_TYPE_ID
        {
            get { return fuel_type_id; }
            set { fuel_type_id = value; }
        }
        private int manufature_id;

        public int MANUFATURE_ID
        {
            get { return manufature_id; }
            set { manufature_id = value; }
        }
        private int purchase_type_id;

        public int PURCHASE_TYPE_ID
        {
            get { return purchase_type_id; }
            set { purchase_type_id = value; }
        }
        private int purchase_category_id;

        public int PURCHASE_CATEGORY_ID
        {
            get { return purchase_category_id; }
            set { purchase_category_id = value; }
        }

        private string voucher_cd;
        public string VOUCHER_CD
        {
            get { return voucher_cd; }
            set { voucher_cd = value; }
        }
        private string voucher_dt;
        public string VOUCHER_DT
        {
            get { return voucher_dt; }
            set { voucher_dt = value; }
        }
        //private string remarks;
        //public string REMARKS
        //{
        //    get { return remarks; }
        //    set { remarks = value; }
        //}
        //private string authorization_name;
        //public string AUTHORIZATION_NAME
        //{
        //    get { return authorization_name; }
        //    set { authorization_name = value; }
        //}
        //private string tendered;
        //public string TENDERED
        //{
        //    get { return tendered; }
        //    set { tendered = value; }
        //}
        private string voucher_id;
        public string VOUCHER_ID
        {
            get { return voucher_id; }
            set { voucher_id = value; }
        }
        private string money_receipt_id;

        public string MONEY_RECEIPT_ID
        {
            get { return money_receipt_id; }
            set { money_receipt_id = value; }
        }

        private string money_receipt_cd;

        public string MONEY_RECEIPT_CD
        {
            get { return money_receipt_cd; }
            set { money_receipt_cd = value; }
        }

        private string money_receipt_rev_no;

        public string MONEY_RECEIPT_REV_NO
        {
            get { return money_receipt_rev_no; }
            set { money_receipt_rev_no = value; }
        }

        private string vehcle_book_id;

        public string VEHCLE_BOOK_ID
        {
            get { return vehcle_book_id; }
            set { vehcle_book_id = value; }
        }
        private string _VEHICLE_BOOK_STATUS;

        public string vehicle_book_status
        {
            get { return _VEHICLE_BOOK_STATUS; }
            set { _VEHICLE_BOOK_STATUS = value; }
        }
        private string cancel_amt;

        public string CANCEL_AMT
        {
            get { return cancel_amt; }
            set { cancel_amt = value; }
        }


        private string out_standing_due;
        public string OUT_STANDING_DUE
        {
            get { return out_standing_due; }
            set { out_standing_due = value; }
        }
        private string due_recovered;

        public string DUE_RECOVERED
        {
            get { return due_recovered; }
            set { due_recovered = value; }
        }
        private string cancel_paid_amt;

        public string CANCEL_PAID_AMT
        {
            get { return cancel_paid_amt; }
            set { cancel_paid_amt = value; }
        }
        private int _VEHCL_IN_ID;
        public int VEHCL_IN_ID
        {
            get { return _VEHCL_IN_ID; }
            set { _VEHCL_IN_ID = value; }
        }
        private string _VEHCL_IN_CD;
        public string VEHCL_IN_CD
        {
            get { return _VEHCL_IN_CD; }
            set { _VEHCL_IN_CD = value; }
        }
        private int _VEHCL_IN_REV_NO;
        public int VEHCL_IN_REV_NO
        {
            get { return _VEHCL_IN_REV_NO; }
            set { _VEHCL_IN_REV_NO = value; }
        }
        private int _WTCH_TYPE_ID_RW;
        public int WTCH_TYPE_ID_RW
        {
            get { return _WTCH_TYPE_ID_RW; }
            set { _WTCH_TYPE_ID_RW = value; }
        }
        private int _WTCH_AMOUNT_RW;
        public int WTCH_AMOUNT_RW
        {
            get { return _WTCH_AMOUNT_RW; }
            set { _WTCH_AMOUNT_RW = value; }
        }
        private int _WTCH_TYPE_ID_KW;
        public int WTCH_TYPE_ID_KW
        {
            get { return _WTCH_TYPE_ID_KW; }
            set { _WTCH_TYPE_ID_KW = value; }
        }
        private int _WTCH_AMOUNT_KW;
        public int WTCH_AMOUNT_KW
        {
            get { return _WTCH_AMOUNT_KW; }
            set { _WTCH_AMOUNT_KW = value; }
        }
        private int _CON_AUTH_BY_ID;
        public int CON_AUTH_BY_ID
        {
            get { return _CON_AUTH_BY_ID; }
            set { _CON_AUTH_BY_ID = value; }
        }
        private string _CON_AUTH_BY_NAME;
        public string CON_AUTH_BY_NAME
        {
            get { return _CON_AUTH_BY_NAME; }
            set { _CON_AUTH_BY_NAME = value; }
        }
        private int _EMPLOYEE_TYPE_ID;
        public int EMPLOYEE_TYPE_ID
        {
            get { return _EMPLOYEE_TYPE_ID; }
            set { _EMPLOYEE_TYPE_ID = value; }
        }
        private int _LICENCE_TYPE_ID;
        public int LICENCE_TYPE_ID
        {
            get { return _LICENCE_TYPE_ID; }
            set { _LICENCE_TYPE_ID = value; }
        }
        private string _BATCHNO;
        public string BATCHNO
        {
            get { return _BATCHNO; }
            set { _BATCHNO = value; }
        }
        private string _BATCH_VALID_UPTO;
        public string BATCH_VALID_UPTO
        {
            get { return _BATCH_VALID_UPTO; }
            set { _BATCH_VALID_UPTO = value; }
        }
        private int _VEHCL_SALE_ID;
        public int VEHCL_SALE_ID
        {
            get { return _VEHCL_SALE_ID; }
            set { _VEHCL_SALE_ID = value; }
        }
        private int _VEHCL_SALE_REV_NO;
        public int VEHCL_SALE_REV_NO
        {
            get { return _VEHCL_SALE_REV_NO; }
            set { _VEHCL_SALE_REV_NO = value; }
        }

        // In vehicle master for main table address
        private string address11;

        public string ADDRESS11
        {
            get { return address11; }
            set { address11 = value; }
        }
        private string address12;

        public string ADDRESS12
        {
            get { return address12; }
            set { address12 = value; }
        }
        private string veh_area_id;

        public string VEH_AREA_ID
        {
            get { return veh_area_id; }
            set { veh_area_id = value; }
        }
        private string veh_area_name;

        public string VEH_AREA_NAME
        {
            get { return veh_area_name; }
            set { veh_area_name = value; }
        }
        private string veh_state_id;

        public string VEH_STATE_ID
        {
            get { return veh_state_id; }
            set { veh_state_id = value; }
        }
        private string veh_state_name;

        public string VEH_STATE_NAME
        {
            get { return veh_state_name; }
            set { veh_state_name = value; }
        }
        private string veh_city_id;

        public string VEH_CITY_ID
        {
            get { return veh_city_id; }
            set { veh_city_id = value; }
        }
        private string veh_city_name;

        public string VEH_CITY_NAME
        {
            get { return veh_city_name; }
            set { veh_city_name = value; }
        }
        private string veh_country_id;

        public string VEH_COUNTRY_ID
        {
            get { return veh_country_id; }
            set { veh_country_id = value; }
        }
        private string veh_country_name;

        public string VEH_COUNTRY_NAME
        {
            get { return veh_country_name; }
            set { veh_country_name = value; }
        }
        private string veh_pin_id;

        public string VEH_PIN_ID
        {
            get { return veh_pin_id; }
            set { veh_pin_id = value; }
        }
        // In vehicle master for VEHICLE RENT DETAILS address
        private string address21;

        public string ADDRESS21
        {
            get { return address21; }
            set { address21 = value; }
        }
        private string address22;

        public string ADDRESS22
        {
            get { return address22; }
            set { address22 = value; }
        }

        private string rent_area_id;

        public string RENT_AREA_ID
        {
            get { return rent_area_id; }
            set { rent_area_id = value; }
        }
        private string rent_area_name;

        public string RENT_AREA_NAME
        {
            get { return rent_area_name; }
            set { rent_area_name = value; }
        }
        private string rent_state_id;

        public string RENT_STATE_ID
        {
            get { return rent_state_id; }
            set { rent_state_id = value; }
        }
        private string rent_state_name;

        public string RENT_STATE_NAME
        {
            get { return rent_state_name; }
            set { rent_state_name = value; }
        }
        private string rent_city_id;

        public string RENT_CITY_ID
        {
            get { return rent_city_id; }
            set { rent_city_id = value; }
        }
        private string rent_city_name;

        public string RENT_CITY_NAME
        {
            get { return rent_city_name; }
            set { rent_city_name = value; }
        }
        private string rent_country_id;

        public string RENT_COUNTRY_ID
        {
            get { return rent_country_id; }
            set { rent_country_id = value; }
        }
        private string rent_country_name;

        public string RENT_COUNTRY_NAME
        {
            get { return rent_country_name; }
            set { rent_country_name = value; }
        }
        private string rent_pin_id;

        public string RENT_PIN_ID
        {
            get { return rent_pin_id; }
            set { rent_pin_id = value; }
        }

        // In vehicle master for  LOAN DETAILS DETAILS address 
        private string address31;

        public string ADDRESS31
        {
            get { return address31; }
            set { address31 = value; }
        }
        private string address32;

        public string ADDRESS32
        {
            get { return address32; }
            set { address32 = value; }
        }
        private string loan_area_id;

        public string LOAN_AREA_ID
        {
            get { return loan_area_id; }
            set { loan_area_id = value; }
        }
        private string loan_area_name;

        public string LOAN_AREA_NAME
        {
            get { return loan_area_name; }
            set { loan_area_name = value; }
        }
        private string loan_state_id;

        public string LOAN_STATE_ID
        {
            get { return loan_state_id; }
            set { loan_state_id = value; }
        }
        private string loan_state_name;

        public string LOAN_STATE_NAME
        {
            get { return loan_state_name; }
            set { loan_state_name = value; }
        }
        private string loan_city_id;

        public string LOAN_CITY_ID
        {
            get { return loan_city_id; }
            set { loan_city_id = value; }
        }
        private string loan_city_name;

        public string LOAN_CITY_NAME
        {
            get { return loan_city_name; }
            set { loan_city_name = value; }
        }


        private string loan_country_id;

        public string LOAN_COUNTRY_ID
        {
            get { return loan_country_id; }
            set { loan_country_id = value; }
        }
        private string loan_country_name;

        public string LOAN_COUNTRY_NAME
        {
            get { return loan_country_name; }
            set { loan_country_name = value; }
        }
        private string loan_pin_id;

        public string LOAN_PIN_ID
        {
            get { return loan_pin_id; }
            set { loan_pin_id = value; }
        }

        // In vehicle master for PURCHASE DETAILS DETAILS address
        private string address41;

        public string ADDRESS41
        {
            get { return address41; }
            set { address41 = value; }
        }
        private string address42;

        public string ADDRESS42
        {
            get { return address42; }
            set { address42 = value; }
        }
        private string purchase_area_id;

        public string PURCHASE_AREA_ID
        {
            get { return purchase_area_id; }
            set { purchase_area_id = value; }
        }
        private string purchase_area_name;

        public string PURCHASE_AREA_NAME
        {
            get { return purchase_area_name; }
            set { purchase_area_name = value; }
        }
        private string purchase_state_id;

        public string PURCHASE_STATE_ID
        {
            get { return purchase_state_id; }
            set { purchase_state_id = value; }
        }
        private string purchase_state_name;

        public string PURCHASE_STATE_NAME
        {
            get { return purchase_state_name; }
            set { purchase_state_name = value; }
        }
        private string purchase_country_id;

        public string PURCHASE_COUNTRY_ID
        {
            get { return purchase_country_id; }
            set { purchase_country_id = value; }
        }
        private string purchase_country_name;

        public string PURCHASE_COUNTRY_NAME
        {
            get { return purchase_country_name; }
            set { purchase_country_name = value; }
        }

        private string purchase_city_id;

        public string PURCHASE_CITY_ID
        {
            get { return purchase_city_id; }
            set { purchase_city_id = value; }
        }
        private string purchase_city_name;

        public string PURCHASE_CITY_NAME
        {
            get { return purchase_city_name; }
            set { purchase_city_name = value; }
        }

        private string purchase_pin_id;

        public string PURCHASE_PIN_ID
        {
            get { return purchase_pin_id; }
            set { purchase_pin_id = value; }
        }

        // In vehicle master for  OLD VEHICLE DETAILS address
        private string address51;

        public string ADDRESS51
        {
            get { return address51; }
            set { address51 = value; }
        }
        private string address52;

        public string ADDRESS52
        {
            get { return address52; }
            set { address52 = value; }
        }
        private string old_area_id;

        public string OLD_AREA_ID
        {
            get { return old_area_id; }
            set { old_area_id = value; }
        }
        private string old_area_name;

        public string OLD_AREA_NAME
        {
            get { return old_area_name; }
            set { old_area_name = value; }
        }
        private string old_state_id;

        public string OLD_STATE_ID
        {
            get { return old_state_id; }
            set { old_state_id = value; }
        }
        private string old_state_name;

        public string OLD_STATE_NAME
        {
            get { return old_state_name; }
            set { old_state_name = value; }
        }
        private string old_city_id;

        public string OLD_CITY_ID
        {
            get { return old_city_id; }
            set { old_city_id = value; }
        }
        private string old_city_name;

        public string OLD_CITY_NAME
        {
            get { return old_city_name; }
            set { old_city_name = value; }
        }
        private string old_country_id;

        public string OLD_COUNTRY_ID
        {
            get { return old_country_id; }
            set { old_country_id = value; }
        }
        private string old_country_name;

        public string OLD_COUNTRY_NAME
        {
            get { return old_country_name; }
            set { old_country_name = value; }
        }
        private string sroom_mobile_no;

        public string SROOM_MOBILE_NO
        {
            get { return sroom_mobile_no; }
            set { sroom_mobile_no = value; }
        }

        private int _EMI_LEFT;

        public int EMI_LEFT
        {
            get { return _EMI_LEFT; }
            set { _EMI_LEFT = value; }
        }
        // properties for loan form
        private int vehicle_loan_id;

        public int VEHICLE_LOAN_ID
        {
            get { return vehicle_loan_id; }
            set { vehicle_loan_id = value; }
        }
        private int vehicle_rev_no;

        public int VEHICLE_REV_NO
        {
            get { return vehicle_rev_no; }
            set { vehicle_rev_no = value; }
        }
        private string vehicle_loan_cd;

        public string VEHICLE_LOAN_CD
        {
            get { return vehicle_loan_cd; }
            set { vehicle_loan_cd = value; }
        }
        private int vehicle_id;

        public int VEHICLE_ID
        {
            get { return vehicle_id; }
            set { vehicle_id = value; }
        }
        private int loan_by_id;

        public int LOAN_BY_ID
        {
            get { return loan_by_id; }
            set { loan_by_id = value; }
        }
        private string loan_by_name;

        public string LOAN_BY_NAME
        {
            get { return loan_by_name; }
            set { loan_by_name = value; }
        }
        private string loan_dt;

        public string LOAN_DT
        {
            get { return loan_dt; }
            set { loan_dt = value; }
        }
        private string vehicle_loan_amt;

        public string VEHICLE_LOAN_AMT
        {
            get { return vehicle_loan_amt; }
            set { vehicle_loan_amt = value; }
        }

        private string paid_dt;

        public string PAID_DT
        {
            get { return paid_dt; }
            set { paid_dt = value; }
        }

        private string veh_loan_start_dt;

        public string VEH_LOAN_START_DT
        {
            get { return veh_loan_start_dt; }
            set { veh_loan_start_dt = value; }
        }
        private string veh_loan_end_dt;

        public string VEH_LOAN_END_DT
        {
            get { return veh_loan_end_dt; }
            set { veh_loan_end_dt = value; }
        }

        private int veh_emi_amt;

        public int VEH_EMI_AMT
        {
            get { return veh_emi_amt; }
            set { veh_emi_amt = value; }
        }
        private string loan_no;

        public string LOAN_NO
        {
            get { return loan_no; }
            set { loan_no = value; }
        }
        private string emi_dt;

        public string Emi_dt
        {
            get { return emi_dt; }
            set { emi_dt = value; }
        }

        private Int32 _FROM_ADDRESS_ID;

        public Int32 FROM_ADDRESS_ID
        {
            get { return _FROM_ADDRESS_ID; }
            set { _FROM_ADDRESS_ID = value; }
        }
        private Int32 _TO_ADDRESS_ID;

        public Int32 TO_ADDRESS_ID
        {
            get { return _TO_ADDRESS_ID; }
            set { _TO_ADDRESS_ID = value; }
        }

        //  private int REFERENCE_ID1;

        //public int REFERENCE_ID
        //{
        //    get { return REFERENCE_ID1; }
        //    set { REFERENCE_ID1 = value; }
        //}
        //  private int ADDRESS_REV_NO1;

        //public int ADDRESS_REV_NO
        //{
        //    get { return ADDRESS_REV_NO1; }
        //    set { ADDRESS_REV_NO1 = value; }
        //}
        private int ADDRSS_ID1;

        public int ADDRSS_ID
        {
            get { return ADDRSS_ID1; }
            set { ADDRSS_ID1 = value; }
        }
        private int ADDREFERENCE_ID1;

        public int ADDRESSREFERENCE_ID
        {
            get { return ADDREFERENCE_ID1; }
            set { ADDREFERENCE_ID1 = value; }
        }
        private string conc_auth_by_id;

        public string CONC_AUTH_BY_ID
        {
            get { return conc_auth_by_id; }
            set { conc_auth_by_id = value; }
        }
        private Int32 _VEHICLE_REQ_TRNS_ID;

        public Int32 VEHICLE_REQ_TRNS_ID
        {
            get { return _VEHICLE_REQ_TRNS_ID; }
            set { _VEHICLE_REQ_TRNS_ID = value; }
        }
        private char _ITEM_REUSABLE;
        public char ITEM_REUSABLE
        {
            get { return _ITEM_REUSABLE; }
            set { _ITEM_REUSABLE = value; }
        }
        private Int32 _STERILIZE_METHOD_ID;
        public Int32 STERILIZE_METHOD_ID
        {
            get { return _STERILIZE_METHOD_ID; }
            set { _STERILIZE_METHOD_ID = value; }
        }
        private string _STERILIZE_METHOD;
        public string STERILIZE_METHOD
        {
            get { return _STERILIZE_METHOD; }
            set { _STERILIZE_METHOD = value; }
        }
        private Int32 _ITEM_TYPE_ID;
        public Int32 ITEM_TYPE_ID
        {
            get { return _ITEM_TYPE_ID; }
            set { _ITEM_TYPE_ID = value; }
        }
        private string _ITEM_TYPE_NAME;
        public string ITEM_TYPE_NAME
        {
            get { return _ITEM_TYPE_NAME; }
            set { _ITEM_TYPE_NAME = value; }
        }
        private Int32 _MACHINE_ID;
        public Int32 MACHINE_ID
        {
            get { return _MACHINE_ID; }
            set { _MACHINE_ID = value; }
        }
        private string _MACHINE_CD;
        public string MACHINE_CD
        {
            get { return _MACHINE_CD; }
            set { _MACHINE_CD = value; }
        }

        private string _MACHINE_DESC;
        public string MACHINE_DESC
        {
            get { return _MACHINE_DESC; }
            set { _MACHINE_DESC = value; }
        }
        private string _MACHINE_MODEL;
        public string MACHINE_MODEL
        {
            get { return _MACHINE_MODEL; }
            set { _MACHINE_MODEL = value; }
        }
        private Int32 _MANFACTURE_ID;
        public Int32 MANFACTURE_ID
        {
            get { return _MANFACTURE_ID; }
            set { _MANFACTURE_ID = value; }
        }
        private Int32 _STER_METHOD_ID;
        public Int32 STER_METHOD_ID
        {
            get { return _STER_METHOD_ID; }
            set { _STER_METHOD_ID = value; }
        }
        private string _STER_METHOD_NAME;
        public string STER_METHOD_NAME
        {
            get { return _STER_METHOD_NAME; }
            set { _STER_METHOD_NAME = value; }
        }
        private Int32 _KIT_PREPARE_ID;
        public Int32 KIT_PREPARE_ID
        {
            get { return _KIT_PREPARE_ID; }
            set { _KIT_PREPARE_ID = value; }
        }
        private string _KIT_PREPARE_CD;
        public string KIT_PREPARE_CD
        {
            get { return _KIT_PREPARE_CD; }
            set { _KIT_PREPARE_CD = value; }
        }
        private Int32 _PREPARATION_TYPE_ID;
        public Int32 PREPARATION_TYPE_ID
        {
            get { return _PREPARATION_TYPE_ID; }
            set { _PREPARATION_TYPE_ID = value; }
        }
        private string _PREPARATION_TYPE_NAME;
        public string PREPARATION_TYPE_NAME
        {
            get { return _PREPARATION_TYPE_NAME; }
            set { _PREPARATION_TYPE_NAME = value; }
        }

        private Int32 _KIT_TYPE_ID;
        public Int32 KIT_TYPE_ID
        {
            get { return _KIT_TYPE_ID; }
            set { _KIT_TYPE_ID = value; }
        }
        private string _KIT_TYPE_NAME;
        public string KIT_TYPE_NAME
        {
            get { return _KIT_TYPE_NAME; }
            set { _KIT_TYPE_NAME = value; }
        }
        private string _STERILIZE_METHOD_NAME;
        public string STERILIZE_METHOD_NAME
        {
            get { return _STERILIZE_METHOD_NAME; }
            set { _STERILIZE_METHOD_NAME = value; }
        }
        private string _PREPARED_BY;
        public string PREPARED_BY
        {
            get { return _PREPARED_BY; }
            set { _PREPARED_BY = value; }
        }
        private string _PREPARED_DATE;
        public string PREPARED_DATE
        {
            get { return _PREPARED_DATE; }
            set { _PREPARED_DATE = value; }
        }
        private string _APPROVED_BY;
        public string APPROVED_BY
        {
            get { return _APPROVED_BY; }
            set { _APPROVED_BY = value; }
        }
        private string _APPROVED_DATE;
        public string APPROVED_DATE
        {
            get { return _APPROVED_DATE; }
            set { _APPROVED_DATE = value; }
        }
        private string item_reusablee;

        public string ITEM_REUSABLEE
        {
            get { return item_reusablee; }
            set { item_reusablee = value; }
        }
        private string _PHONENO_1;
        public string PHONENO_1
        {
            get { return _PHONENO_1; }
            set { _PHONENO_1 = value; }
        }
        private string _CONTACT_PERSON_NAME;
        public string CONTACT_PERSON_NAME
        {
            get { return _CONTACT_PERSON_NAME; }
            set { _CONTACT_PERSON_NAME = value; }
        }
        private string _PHONENO_2;
        public string PHONENO_2
        {
            get { return _PHONENO_2; }
            set { _PHONENO_2 = value; }
        }



        private string kit_id;
        public string KIT_ID
        {
            get { return kit_id; }
            set { kit_id = value; }
        }
        private string kit_name;
        public string KIT_NAME
        {
            get { return kit_name; }
            set { kit_name = value; }
        }
        private string batch_cd;

        public string BATCH_CD
        {
            get { return batch_cd; }
            set { batch_cd = value; }
        }
        private string bat_exp_date;
        public string BAT_EXP_DATE
        {
            get { return bat_exp_date; }
            set { bat_exp_date = value; }
        }
        private string barcode;
        public string BARCODE
        {
            get { return barcode; }
            set { barcode = value; }
        }
        private string barcode_exp_date;
        public string BARCODE_EXP_DATE
        {
            get { return barcode_exp_date; }
            set { barcode_exp_date = value; }
        }

        private string cip_create_dt;
        public string CIP_CREATE_DT
        {
            get { return cip_create_dt; }
            set { cip_create_dt = value; }
        }
        private string cip_create_by;
        public string CIP_CREATE_BY
        {
            get { return cip_create_by; }
            set { cip_create_by = value; }
        }
        private char _ISEXPIRY;
        public char ISEXPIRY
        {
            get { return _ISEXPIRY; }
            set { _ISEXPIRY = value; }
        }
        private int _STP_ID;
        public int STP_ID
        {
            get { return _STP_ID; }
            set { _STP_ID = value; }
        }
        private string _STP_CD;
        public string STP_CD
        {
            get { return _STP_CD; }
            set { _STP_CD = value; }
        }
        private string _STP_NAME;
        public string STP_NAME
        {
            get { return _STP_NAME; }
            set { _STP_NAME = value; }
        }
        private string _STP_DESC;
        public string STP_DESC
        {
            get { return _STP_DESC; }
            set { _STP_DESC = value; }
        }
        private string _STP_ALIAS;
        public string STP_ALIAS
        {
            get { return _STP_ALIAS; }
            set { _STP_ALIAS = value; }
        }
        private string _REG_NAME;
        public string REG_NAME
        {
            get { return _REG_NAME; }
            set { _REG_NAME = value; }
        }
        private string _GRP_NAME;
        public string GRP_NAME
        {
            get { return _GRP_NAME; }
            set { _GRP_NAME = value; }
        }
        private int _KIT_RACK_ID;
        public int KIT_RACK_ID
        {
            get { return _KIT_RACK_ID; }
            set { _KIT_RACK_ID = value; }
        }
        private string _STERLIZED_BY;
        public string STERLIZED_BY
        {
            get { return _STERLIZED_BY; }
            set { _STERLIZED_BY = value; }
        }
        private string _STERLIZED_DT;
        public string STERLIZED_DT
        {
            get { return _STERLIZED_DT; }
            set { _STERLIZED_DT = value; }
        }

        private int _STERLIZED_METHOD_ID;
        public int STERLIZED_METHOD_ID
        {
            get { return _STERLIZED_METHOD_ID; }
            set { _STERLIZED_METHOD_ID = value; }
        }
        private int _KIT_STERIL_ID;
        public int KIT_STERIL_ID
        {
            get { return _KIT_STERIL_ID; }
            set { _KIT_STERIL_ID = value; }
        }
        private string _KIT_PREPARE_NAME;
        public string KIT_PREPARE_NAME
        {
            get { return _KIT_PREPARE_NAME; }
            set { _KIT_PREPARE_NAME = value; }
        }
        private string _KIT_STERIL_NAME;
        public string KIT_STERIL_NAME
        {
            get { return _KIT_STERIL_NAME; }
            set { _KIT_STERIL_NAME = value; }
        }
        private string _DEPTTYPE;
        public string DEPTTYPE
        {
            get { return _DEPTTYPE; }
            set { _DEPTTYPE = value; }
        }
        private string _DEPARTMENT_CD;
        public string DEPARTMENT_CD
        {
            get { return _DEPARTMENT_CD; }
            set { _DEPARTMENT_CD = value; }
        }


        private int feedback_type_id;
        public int FEEDBACK_TYPE_ID
        {
            get { return feedback_type_id; }
            set { feedback_type_id = value; }
        }

        private int feedback_type_rev_no;
        public int FEEDBACK_TYPE_REV_NO
        {
            get { return feedback_type_rev_no; }
            set { feedback_type_rev_no = value; }
        }

        private string feedback_type_cd;
        public string FEEDBACK_TYPE_CD
        {
            get { return feedback_type_cd; }
            set { feedback_type_cd = value; }
        }
        private string feedback_type;
        public string FEEDBACK_TYPE
        {
            get { return feedback_type; }
            set { feedback_type = value; }
        }
        private string feedback_desc;
        public string FEEDBACK_DESC
        {
            get { return feedback_desc; }
            set { feedback_desc = value; }
        }
        private string feedback_reason_cd;
        public string FEEDBACK_REASON_CD
        {
            get { return feedback_reason_cd; }
            set { feedback_reason_cd = value; }
        }

        private int feedback_reason_id;
        public int FEEDBACK_REASON_ID
        {
            get { return feedback_reason_id; }
            set { feedback_reason_id = value; }
        }
        private int feedback_reason_rev_no;
        public int FEEDBACK_REASON_REV_NO
        {
            get { return feedback_reason_rev_no; }
            set { feedback_reason_rev_no = value; }
        }
        private string feedback_reason;
        public string FEEDBACK_REASON
        {
            get { return feedback_reason; }
            set { feedback_reason = value; }
        }
        private string reason_reason_desc;
        public string REASON_REASON_DESC
        {
            get { return reason_reason_desc; }
            set { reason_reason_desc = value; }
        }

        private string vehicle_req_cd;
        public string VEHICLE_REQ_CD
        {
            get { return vehicle_req_cd; }
            set { vehicle_req_cd = value; }
        }
        private int vehicle_type_id;
        public int VEHICLE_TYPE_ID
        {
            get { return vehicle_type_id; }
            set { vehicle_type_id = value; }
        }
        private string vehicle_type_name;
        public string VEHICLE_TYPE_NAME
        {
            get { return vehicle_type_name; }
            set { vehicle_type_name = value; }
        }
        private int status;
        public int STATUS
        {
            get { return status; }
            set { status = value; }
        }
        private string hours;
        public string HOURS
        {
            get { return hours; }
            set { hours = value; }
        }
        private string minits;
        public string MINITS
        {
            get { return minits; }
            set { minits = value; }
        }
        private string book_status;
        public string BOOK_STATUS
        {
            get { return book_status; }
            set { book_status = value; }
        }
        private int ack_request_id;
        public int ACK_REQUEST_ID
        {
            get { return ack_request_id; }
            set { ack_request_id = value; }
        }
        private int ack_request_rev_no;
        public int ACK_REQUEST_REV_NO
        {
            get { return ack_request_rev_no; }
            set { ack_request_rev_no = value; }
        }
        private int available_status_id;
        public int AVAILABLE_STATUS_ID
        {
            get { return available_status_id; }
            set { available_status_id = value; }
        }
        private string available_status_name;
        public string AVAILABLE_STATUS_NAME
        {
            get { return available_status_name; }
            set { available_status_name = value; }
        }
        private string available_dt;
        public string AVAILABLE_DT
        {
            get { return available_dt; }
            set { available_dt = value; }
        }
        private string available_time;
        public string AVAILABLE_TIME
        {
            get { return available_time; }
            set { available_time = value; }
        }

        private int feedback_detls_id;
        public int FEEDBACK_DETLS_ID
        {
            get { return feedback_detls_id; }
            set { feedback_detls_id = value; }
        }
        private int vehicle_out_id;
        public int VEHICLE_OUT_ID
        {
            get { return vehicle_out_id; }
            set { vehicle_out_id = value; }
        }
        private int feedback_detls_rev_no;
        public int FEEDBACK_DETLS_REV_NO
        {
            get { return feedback_detls_rev_no; }
            set { feedback_detls_rev_no = value; }
        }

        private string feedback_detls_cd;
        public string FEEDBACK_DETLS_CD
        {
            get { return feedback_detls_cd; }
            set { feedback_detls_cd = value; }
        }
        private string feedback_vehicle_status;
        public string FEEDBACK_VEHICLE_STATUS
        {
            get { return feedback_vehicle_status; }
            set { feedback_vehicle_status = value; }
        }


        private int feedback_vehicle_status_id;
        public int FEEDBACK_VEHICLE_STATUS_ID
        {
            get { return feedback_vehicle_status_id; }
            set { feedback_vehicle_status_id = value; }
        }



        private string comments;
        public string COMMENTS
        {
            get { return comments; }
            set { comments = value; }
        }
        // for vehicle master 
        private string service_description;

        public string SERVICE_DESCRIPTION
        {
            get { return service_description; }
            set { service_description = value; }
        }
        private string ser_km_reading;

        public string SER_KM_READING
        {
            get { return ser_km_reading; }
            set { ser_km_reading = value; }
        }
        private string ser_period;

        public string SER_PERIOD
        {
            get { return ser_period; }
            set { ser_period = value; }
        }
        private string equipment_details;

        public string EQUIPMENT_DETAILS
        {
            get { return equipment_details; }
            set { equipment_details = value; }
        }
        private string sub_qty;

        public string SUB_QTY
        {
            get { return sub_qty; }
            set { sub_qty = value; }
        }
        private string medicine_details;

        public string MEDICINE_DETAILS
        {
            get { return medicine_details; }
            set { medicine_details = value; }
        }
        private string med_qty;

        public string MED_QTY
        {
            get { return med_qty; }
            set { med_qty = value; }
        }
        private string period_for;

        public string PERIOD_FOR
        {
            get { return period_for; }
            set { period_for = value; }
        }
        private int vehicle_det_ext_id;

        public int VEHICLE_DET_EXT_ID
        {
            get { return vehicle_det_ext_id; }
            set { vehicle_det_ext_id = value; }
        }
        private int vehicle_det_ext_rev_no;

        public int VEHICLE_DET_EXT_REV_NO
        {
            get { return vehicle_det_ext_rev_no; }
            set { vehicle_det_ext_rev_no = value; }
        }
        private string vehicle_ext_id;

        public string VEHICLE_EXT_ID
        {
            get { return vehicle_ext_id; }
            set { vehicle_ext_id = value; }
        }
        private string _DEPARTMENT_DESC;
        public string DEPARTMENT_DESC
        {
            get { return _DEPARTMENT_DESC; }
            set { _DEPARTMENT_DESC = value; }
        }
        private string supplier_id;

        public string SUPPLIER_ID
        {
            get { return supplier_id; }
            set { supplier_id = value; }
        }
        private string supplier_name;

        public string SUPPLIER_NAME
        {
            get { return supplier_name; }
            set { supplier_name = value; }
        }
        private int rate_of_intrest;

        public int RATE_OF_INTREST
        {
            get { return rate_of_intrest; }
            set { rate_of_intrest = value; }
        }
        private string medicine_sub_eqp_desc;

        public string Medicine_sub_eqp_desc
        {
            get { return medicine_sub_eqp_desc; }
            set { medicine_sub_eqp_desc = value; }
        }
        private int period;
        public int PERIOD
        {
            get { return period; }
            set { period = value; }
        }
        private int _KIT_REQ_ID;
        public int KIT_REQ_ID
        {
            get { return _KIT_REQ_ID; }
            set { _KIT_REQ_ID = value; }
        }
        private int _KIT_REQ_REV_NO;
        public int KIT_REQ_REV_NO
        {
            get { return _KIT_REQ_REV_NO; }
            set { _KIT_REQ_REV_NO = value; }
        }
        private string _KIT_REQ_CD;
        public string KIT_REQ_CD
        {
            get { return _KIT_REQ_CD; }
            set { _KIT_REQ_CD = value; }
        }

        private string _FROM_DEP;
        public string FROM_DEP
        {
            get { return _FROM_DEP; }
            set { _FROM_DEP = value; }
        }
        private string _TO_STP;
        public string TO_STP
        {
            get { return _TO_STP; }
            set { _TO_STP = value; }
        }
        private string _TO_DEP;
        public string TO_DEP
        {
            get { return _TO_DEP; }
            set { _TO_DEP = value; }
        }
        private string _TO_DEPT;
        public string TO_DEPT
        {
            get { return _TO_DEPT; }
            set { _TO_DEPT = value; }
        }
        private int _REQUEST_TYPE_ID;
        public int REQUEST_TYPE_ID
        {
            get { return _REQUEST_TYPE_ID; }
            set { _REQUEST_TYPE_ID = value; }
        }
        private string _REQUEST_TYPE_NAME;
        public string REQUEST_TYPE_NAME
        {
            get { return _REQUEST_TYPE_NAME; }
            set { _REQUEST_TYPE_NAME = value; }
        }
        private int _CATEGORY_ID;
        public int CATEGORY_ID
        {
            get { return _CATEGORY_ID; }
            set { _CATEGORY_ID = value; }
        }
        private string _CATEGORY_NAME;
        public string CATEGORY_NAME
        {
            get { return _CATEGORY_NAME; }
            set { _CATEGORY_NAME = value; }
        }

        private string _MATERIAL_TYPE_NAME;
        public string MATERIAL_TYPE_NAME
        {
            get { return _MATERIAL_TYPE_NAME; }
            set { _MATERIAL_TYPE_NAME = value; }
        }
        private string _REQUEST_BY;
        public string REQUEST_BY
        {
            get { return _REQUEST_BY; }
            set { _REQUEST_BY = value; }
        }
        private string _REQUEST_DATE;
        public string REQUEST_DATE
        {
            get { return _REQUEST_DATE; }
            set { _REQUEST_DATE = value; }
        }
        private int _PRIORITY_ID;
        public int PRIORITY_ID
        {
            get { return _PRIORITY_ID; }
            set { _PRIORITY_ID = value; }
        }
        private string _priority_id;
        public string PRIRITY_ID
        {
            get { return _priority_id; }
            set { _priority_id = value; }
        }
        private string _PRIORITY_NAME;
        public string PRIORITY_NAME
        {
            get { return _PRIORITY_NAME; }
            set { _PRIORITY_NAME = value; }
        }
        private string _RISK_ID;
        public string RISK_ID
        {
            get { return _RISK_ID; }
            set { _RISK_ID = value; }
        }
        private string _RISK_NAME;
        public string RISK_NAME
        {
            get { return _RISK_NAME; }
            set { _RISK_NAME = value; }
        }
        private string _DUE_DATE;
        public string DUE_DATE
        {
            get { return _DUE_DATE; }
            set { _DUE_DATE = value; }
        }
        private int _KIT_ISSUE_ID;
        public int KIT_ISSUE_ID
        {
            get { return _KIT_ISSUE_ID; }
            set { _KIT_ISSUE_ID = value; }
        }
        private int _KIT_ISSUE_REV_NO;
        public int KIT_ISSUE_REV_NO
        {
            get { return _KIT_ISSUE_REV_NO; }
            set { _KIT_ISSUE_REV_NO = value; }
        }
        private string _KIT_ISSUE_CD;
        public string KIT_ISSUE_CD
        {
            get { return _KIT_ISSUE_CD; }
            set { _KIT_ISSUE_CD = value; }
        }

        private int _ISSUE_TYPE_ID;
        public int ISSUE_TYPE_ID
        {
            get { return _ISSUE_TYPE_ID; }
            set { _ISSUE_TYPE_ID = value; }
        }
        private string _ISSUE_TYPE_NAME;
        public string ISSUE_TYPE_NAME
        {
            get { return _ISSUE_TYPE_NAME; }
            set { _ISSUE_TYPE_NAME = value; }
        }
        private int _MATERIAL_TYPE_ID;
        public int MATERIAL_TYPE_ID
        {
            get { return _MATERIAL_TYPE_ID; }
            set { _MATERIAL_TYPE_ID = value; }
        }
        private int _KITOPENTYPE;
        public int KITOPENTYPE
        {
            get { return _KITOPENTYPE; }
            set { _KITOPENTYPE = value; }
        }

        private string _ISSUE_BY;
        public string ISSUE_BY
        {
            get { return _ISSUE_BY; }
            set { _ISSUE_BY = value; }
        }
        private string _ISSUE_DATE;
        public string ISSUE_DATE
        {
            get { return _ISSUE_DATE; }
            set { _ISSUE_DATE = value; }
        }
        private string _FROM_STP;
        public string FROM_STP
        {
            get { return _FROM_STP; }
            set { _FROM_STP = value; }
        }
        private int _KIT_RECEIVE_ID;
        public int KIT_RECEIVE_ID
        {
            get { return _KIT_RECEIVE_ID; }
            set { _KIT_RECEIVE_ID = value; }
        }
        private int _KIT_RECEIVE_REV_NO;
        public int KIT_RECEIVE_REV_NO
        {
            get { return _KIT_RECEIVE_REV_NO; }
            set { _KIT_RECEIVE_REV_NO = value; }
        }
        private string _KIT_RECEIVE_CD;
        public string KIT_RECEIVE_CD
        {
            get { return _KIT_RECEIVE_CD; }
            set { _KIT_RECEIVE_CD = value; }
        }
        private string _RECEIVED_BY;
        public string RECEIVED_BY
        {
            get { return _RECEIVED_BY; }
            set { _RECEIVED_BY = value; }
        }
        private string _RECEIVED_DATE;
        public string RECEIVED_DATE
        {
            get { return _RECEIVED_DATE; }
            set { _RECEIVED_DATE = value; }
        }
        private string _FROM_DEPT;
        public string FROM_DEPT
        {
            get { return _FROM_DEPT; }
            set { _FROM_DEPT = value; }
        }
        private string _QTY_ISSUE;
        public string QTY_ISSUE
        {
            get { return _QTY_ISSUE; }
            set { _QTY_ISSUE = value; }
        }
        private string _QTY_REQ;
        public string QTY_REQ
        {
            get { return _QTY_REQ; }
            set { _QTY_REQ = value; }
        }
        private string _RACK_NAME;
        public string RACK_NAME
        {
            get { return _RACK_NAME; }
            set { _RACK_NAME = value; }
        }
        private string _KIT_CD;
        public string KIT_CD
        {
            get { return _KIT_CD; }
            set { _KIT_CD = value; }
        }
        private string _KIT_DESC;
        public string KIT_DESC
        {
            get { return _KIT_DESC; }
            set { _KIT_DESC = value; }
        }
        private int _RE_PROCESS_ID;
        public int RE_PROCESS_ID
        {
            get { return _RE_PROCESS_ID; }
            set { _RE_PROCESS_ID = value; }
        }
        private string _RE_PROCESS_CD;
        public string RE_PROCESS_CD
        {
            get { return _RE_PROCESS_CD; }
            set { _RE_PROCESS_CD = value; }
        }
        private int _PROCESS_TYPE_ID;
        public int PROCESS_TYPE_ID
        {
            get { return _PROCESS_TYPE_ID; }
            set { _PROCESS_TYPE_ID = value; }
        }
        private string _PROCESS_TYPE_NAME;
        public string PROCESS_TYPE_NAME
        {
            get { return _PROCESS_TYPE_NAME; }
            set { _PROCESS_TYPE_NAME = value; }
        }
        private int _PROCESS_ID;
        public int PROCESS_ID
        {
            get { return _PROCESS_ID; }
            set { _PROCESS_ID = value; }
        }
        private string _PROCESS_BY;
        public string PROCESS_BY
        {
            get { return _PROCESS_BY; }
            set { _PROCESS_BY = value; }
        }
        private string _PROCESS_BY_NAME;
        public string PROCESS_BY_NAME
        {
            get { return _PROCESS_BY_NAME; }
            set { _PROCESS_BY_NAME = value; }
        }
        private string _PROCESS_DT;
        public string PROCESS_DT
        {
            get { return _PROCESS_DT; }
            set { _PROCESS_DT = value; }
        }



        private int kit_storage_item_id;
        public int KIT_STORAGE_ITEM_ID
        {
            get { return kit_storage_item_id; }
            set { kit_storage_item_id = value; }
        }
        private string kit_storage_id;
        public string KIT_STORAGE_ID
        {
            get { return kit_storage_id; }
            set { kit_storage_id = value; }
        }
        private string kit_steril_item_id;
        public string KIT_STERIL_ITEM_ID
        {
            get { return kit_steril_item_id; }
            set { kit_steril_item_id = value; }
        }

        private string steril_type;
        public string STERIL_TYPE
        {
            get { return steril_type; }
            set { steril_type = value; }
        }


        private string kit_receive_item_id;
        public string KIT_RECEIVE_ITEM_ID
        {
            get { return kit_receive_item_id; }
            set { kit_receive_item_id = value; }
        }

        private string kit_issue_item_id;
        public string KIT_ISSUE_ITEM_ID
        {
            get { return kit_issue_item_id; }
            set { kit_issue_item_id = value; }
        }

        private string item_type;
        public string ITEM_TYPE
        {
            get { return item_type; }
            set { item_type = value; }
        }
        private string own_mobile_no1;

        public string OWN_MOBILE_NO1
        {
            get { return own_mobile_no1; }
            set { own_mobile_no1 = value; }
        }
        private string own_mobile_no2;

        public string OWN_MOBILE_NO2
        {
            get { return own_mobile_no2; }
            set { own_mobile_no2 = value; }
        }
        private string from_dep_name;

        public string FROM_DEP_NAME
        {
            get { return from_dep_name; }
            set { from_dep_name = value; }
        }
        private string to_stp_name;

        public string TO_STP_NAME
        {
            get { return to_stp_name; }
            set { to_stp_name = value; }
        }
        private string rate_of_instrest;

        public string RATE_OF_INSTREST
        {
            get { return rate_of_instrest; }
            set { rate_of_instrest = value; }
        }
        private int item_mapping_id;

        public int ITEM_MAPPING_ID
        {
            get { return item_mapping_id; }
            set { item_mapping_id = value; }
        }
        private string received_by_name;

        public string RECEIVED_BY_NAME
        {
            get { return received_by_name; }
            set { received_by_name = value; }
        }
        private string _CONTACT_PERSON;

        public string CONTACT_PERSON
        {
            get { return _CONTACT_PERSON; }
            set { _CONTACT_PERSON = value; }
        }
        //main
        private string main_address_id;

        public string MAIN_ADDRESS_ID
        {
            get { return main_address_id; }
            set { main_address_id = value; }
        }
        private string main_address_revno_id;

        public string MAIN_ADDRESS_REVNO_ID
        {
            get { return main_address_revno_id; }
            set { main_address_revno_id = value; }
        }
        //rent
        private string ren_address_id;

        public string REN_ADDRESS_ID
        {
            get { return ren_address_id; }
            set { ren_address_id = value; }
        }
        private string rent_address_revno_id;

        public string RENT_ADDRESS_REVNO_ID
        {
            get { return rent_address_revno_id; }
            set { rent_address_revno_id = value; }
        }
        //old
        private string oldd_address_id;

        public string OLDD_ADDRESS_ID
        {
            get { return oldd_address_id; }
            set { oldd_address_id = value; }
        }
        private string old_address_revno_id;

        public string OLD_ADDRESS_REVNO_ID
        {
            get { return old_address_revno_id; }
            set { old_address_revno_id = value; }
        }
        //loan
        private string loan_address_id;

        public string LOAN_ADDRESS_ID
        {
            get { return loan_address_id; }
            set { loan_address_id = value; }
        }
        private string loan_address_revno_id;

        public string LOAN_ADDRESS_REVNO_ID
        {
            get { return loan_address_revno_id; }
            set { loan_address_revno_id = value; }
        }
        //purchase
        private string pur_address_id;

        public string PUR_ADDRESS_ID
        {
            get { return pur_address_id; }
            set { pur_address_id = value; }
        }
        private string pur_address_revno_id;

        public string PUR_ADDRESS_REVNO_ID
        {
            get { return pur_address_revno_id; }
            set { pur_address_revno_id = value; }
        }
        private string from_stp_name;

        public string FROM_STP_NAME
        {
            get { return from_stp_name; }
            set { from_stp_name = value; }
        }





        private string kit_return_id;

        public string KIT_RETURN_ID
        {
            get { return kit_return_id; }
            set { kit_return_id = value; }
        }
        //old
        private string kit_return_cd;

        public string KIT_RETURN_CD
        {
            get { return kit_return_cd; }
            set { kit_return_cd = value; }
        }
        private string return_by;

        public string RETURN_BY
        {
            get { return return_by; }
            set { return_by = value; }
        }
        //loan
        private string return_by_name;

        public string RETURN_BY_NAME
        {
            get { return return_by_name; }
            set { return_by_name = value; }
        }
        private string return_date;

        public string RETURN_DATE
        {
            get { return return_date; }
            set { return_date = value; }
        }
        //purchase
        private string approved_by_name;

        public string APPROVED_BY_NAME
        {
            get { return approved_by_name; }
            set { approved_by_name = value; }
        }
        private string return_type_id;

        public string RETURN_TYPE_ID
        {
            get { return return_type_id; }
            set { return_type_id = value; }
        }
        private string return_type_name;

        public string RETURN_TYPE_NAME
        {
            get { return return_type_name; }
            set { return_type_name = value; }
        }
        private string stn_dt;

        public string STN_DT
        {
            get { return stn_dt; }
            set { stn_dt = value; }
        }

        private string stp_to_name;

        public string STP_TO_NAME
        {
            get { return stp_to_name; }
            set { stp_to_name = value; }
        }
        private int reference_type_id;

        public int REFERENCE_TYPE_ID
        {
            get { return reference_type_id; }
            set { reference_type_id = value; }
        }
        private string insurence_type_id;

        public string INSURENCE_TYPE_ID
        {
            get { return insurence_type_id; }
            set { insurence_type_id = value; }
        }

        private int service_amt;

        public int SERVICE_AMT
        {
            get { return service_amt; }
            set { service_amt = value; }
        }
        private string due_auth_name;

        public string DUE_AUTH_NAME
        {
            get { return due_auth_name; }
            set { due_auth_name = value; }
        }
        private string estimated_in_time;

        public string ESTIMATED_IN_TIME
        {
            get { return estimated_in_time; }
            set { estimated_in_time = value; }
        }
        private int trans_id;
        public int TRANS_ID
        {
            get { return trans_id; }
            set { trans_id = value; }
        }
        private int maintanence_id;
        public int MAINTANENCE_ID
        {
            get { return maintanence_id; }
            set { maintanence_id = value; }
        }
        private string maintenance_types_name;
        public string MAINTENANCE_TYPES_NAME
        {
            get { return maintenance_types_name; }
            set { maintenance_types_name = value; }
        }
        private Int32 _ROW;
        public Int32 ROW
        {
            get { return _ROW; }
            set { _ROW = value; }
        }
        private string vehicle_reg_no;
        public string VEHICLE_REG_NO
        {
            get { return vehicle_reg_no; }
            set { vehicle_reg_no = value; }
        }
        private string years_used;

        public string YEARS_USED
        {
            get { return years_used; }
            set { years_used = value; }
        }
        private string vehicle_loan_no;

        public string VEHICLE_LOAN_NO
        {
            get { return vehicle_loan_no; }
            set { vehicle_loan_no = value; }
        }
        private int authorized_id;

        public int AUTHORIZED_ID
        {
            get { return authorized_id; }
            set { authorized_id = value; }
        }
        private string license_issuedt;

        public string LICENSE_ISSUEDT
        {
            get { return license_issuedt; }
            set { license_issuedt = value; }
        }

        private int service_by_id;

        public int SERVICE_BY_ID
        {
            get { return service_by_id; }
            set { service_by_id = value; }
        }
        private int millage_forltr;

        public int MILLAGE_FORLTR
        {
            get { return millage_forltr; }
            set { millage_forltr = value; }
        }
        private string scrap_yearsused1;
        public string SCRAP_YEARSUSED1
        {
            get { return scrap_yearsused1; }
            set { scrap_yearsused1 = value; }
        }

        private string l1_approved_by;
        public string L1_APPROVED_BY
        {
            get { return l1_approved_by; }
            set { l1_approved_by = value; }
        }
        private string l1_approved_dt;
        public string L1_APPROVED_DT
        {
            get { return l1_approved_dt; }
            set { l1_approved_dt = value; }
        }
        private string l1_status;
        public string L1_STATUS
        {
            get { return l1_status; }
            set { l1_status = value; }
        }
        private string l2_approved_by;
        public string L2_APPROVED_BY
        {
            get { return l2_approved_by; }
            set { l2_approved_by = value; }
        }
        private string l2_approved_dt;
        public string L2_APPROVED_DT
        {
            get { return l2_approved_dt; }
            set { l2_approved_dt = value; }
        }
        private string l2_status;
        public string L2_STATUS
        {
            get { return l2_status; }
            set { l2_status = value; }
        }
        private string type_of_journy_id;

        public string TYPE_OF_JOURNY_ID
        {
            get { return type_of_journy_id; }
            set { type_of_journy_id = value; }
        }
        private string referal_no;

        public string REFERAL_NO
        {
            get { return referal_no; }
            set { referal_no = value; }
        }
        private string umr_no;

        public string UMR_NO
        {
            get { return umr_no; }
            set { umr_no = value; }
        }
        private string mobile_phone;

        public string MOBILE_PHONE
        {
            get { return mobile_phone; }
            set { mobile_phone = value; }
        }
        private string patient_type;

        public string PATIENT_TYPE
        {
            get { return patient_type; }
            set { patient_type = value; }
        }

        //FOR GRN EQUIP LOOKUP

        private string vendor_id;

        public string VENDOR_ID
        {
            get { return vendor_id; }
            set { vendor_id = value; }
        }
       
        private string group_id;

        public string GROUP_ID
        {
            get { return group_id; }
            set { group_id = value; }
        }
        private string group_name;

        public string GROUP_NAME
        {
            get { return group_name; }
            set { group_name = value; }
        }
        private string invoice_no;

        public string INVOICE_NO
        {
            get { return invoice_no; }
            set { invoice_no = value; }
        }
        private string invoice_dt;

        public string INVOICE_DT
        {
            get { return invoice_dt; }
            set { invoice_dt = value; }
        }
        private string grn_id;

        public string GRN_ID
        {
            get { return grn_id; }
            set { grn_id = value; }
        }
        private string grn_no;

        public string GRN_NO
        {
            get { return grn_no; }
            set { grn_no = value; }
        }
        private string grn_dt;

        public string GRN_DT
        {
            get { return grn_dt; }
            set { grn_dt = value; }
        }
        private string po_no;
        public string PO_NO
        {
            get { return po_no; }
            set { po_no = value; }
        }
        private string po_dt;

        public string PO_DT
        {
            get { return po_dt; }
            set { po_dt = value; }
        }
        private string po_value;

        public string PO_VALUE
        {
            get { return po_value; }
            set { po_value = value; }
        }
       
        private string po_type_id;

        public string PO_TYPE_ID
        {
            get { return po_type_id; }
            set { po_type_id = value; }
        }
        private string po_type;

        public string PO_TYPE
        {
            get { return po_type; }
            set { po_type = value; }
        }
        private string po_type_name;
        public string PO_TYPE_NAME
        {
            get { return po_type_name; }
            set { po_type_name = value; }
        }
      

        private string eqp_model_id;
        public string EQP_MODEL_ID
        {
            get { return eqp_model_id; }
            set { eqp_model_id = value; }
        }
        private string eqp_model_cd;
        public string EQP_MODEL_CD
        {
            get { return eqp_model_cd; }
            set { eqp_model_cd = value; }
        }
        private string eqp_model_rev_no;
        public string EQP_MODEL_REV_NO
        {
            get { return eqp_model_rev_no; }
            set { eqp_model_rev_no = value; }
        }

     
        private string eqp_model_dtls_id;
        public string EQP_MODEL_DTLS_ID
        {
            get { return eqp_model_dtls_id; }
            set { eqp_model_dtls_id = value; }
        }
        private string eqp_model_dtls_rev_no;
        public string EQP_MODEL_DTLS_REV_NO
        {
            get { return eqp_model_dtls_rev_no; }
            set { eqp_model_dtls_rev_no = value; }
        }
        private string model_name;
        public string MODEL_NAME
        {
            get { return model_name; }
            set { model_name = value; }
        }
        private string model_desc;
        public string MODEL_DESC
        {
            get { return model_desc; }
            set { model_desc = value; }
        }

       

        private string srt_name;
        public string SRT_NAME
        {
            get { return srt_name; }
            set { srt_name = value; }
        }
     
        private string po_tnc_id;
        public string PO_TNC_ID
        {
            get { return po_tnc_id; }
            set { po_tnc_id = value; }
        }
        private string po_tnc_name;
        public string PO_TNC_NAME
        {
            get { return po_tnc_name; }
            set { po_tnc_name = value; }
        }
        private string pa_tnc_name;
        public string PA_TNC_NAME
        {
            get { return pa_tnc_name; }
            set { pa_tnc_name = value; }
        }
        private string total_qty;
        public string TOTAL_QTY
        {
            get { return total_qty; }
            set { total_qty = value; }
        }
       

        private string po_by;
        public string PO_BY
        {
            set { po_by = value; }
            get { return po_by; }
        }
        private string po_by_id;
        public string PO_BY_ID
        {
            set { po_by_id = value; }
            get { return po_by_id; }
        }
        //----------------------------
        private string receive_id;

        public string RECEIVE_ID
        {
            get { return receive_id; }
            set { receive_id = value; }
        }

        private string receive_rev_no;

        public string RECEIVE_REV_NO
        {
            get { return receive_rev_no; }
            set { receive_rev_no = value; }
        }

        private string receive_no;

        public string RECEIVE_NO
        {
            get { return receive_no; }
            set { receive_no = value; }
        }

        private string receive_dt;

        public string RECEIVE_DT
        {
            get { return receive_dt; }
            set { receive_dt = value; }
        }
      

        private string identity_no;

        public string IDENTITY_NO
        {
            get { return identity_no; }
            set { identity_no = value; }
        }

        private string date_of_delivery;

        public string DATE_OF_DELIVERY
        {
            get { return date_of_delivery; }
            set { date_of_delivery = value; }
        }

        private string serial_no;

        public string SERIAL_NO
        {
            get { return serial_no; }
            set { serial_no = value; }
        }

        private string warranty_no;

        public string WARRANTY_NO
        {
            get { return warranty_no; }
            set { warranty_no = value; }
        }
        private string installation_dt;

        public string INSTALLATION_DT
        {
            get { return installation_dt; }
            set { installation_dt = value; }
        }
        private string mnf_name;

        public string MNF_NAME
        {
            get { return mnf_name; }
            set { mnf_name = value; }
        }
        private string warranty_type_name;
        public string WARRANTY_TYPE_NAME
        {
            set { warranty_type_name = value; }
            get { return warranty_type_name; }
        }
        private string period_name;
        public string PERIOD_NAME
        {
            set { period_name = value; }
            get { return period_name; }
        }
    
        private string pms_period_name;
        public string PMS_PERIOD_NAME
        {
            set { pms_period_name = value; }
            get { return pms_period_name; }
        }
        private string pms_expiry_dt;
        public string PMS_EXPIRY_DT
        {
            get { return pms_expiry_dt; }
            set { pms_expiry_dt = value; }
        }
   
        private string warranty_type_id;
        public string WARRANTY_TYPE_ID
        {
            set { warranty_type_id = value; }
            get { return warranty_type_id; }
        }
        private string eqp_maintance_id;
        public string EQP_MAINTANCE_ID
        {
            set { eqp_maintance_id = value; }
            get { return eqp_maintance_id; }
        }
        private string eqp_receive_id;
        public string EQP_RECEIVE_ID
        {
            set { eqp_receive_id = value; }
            get { return eqp_receive_id; }
        }
        private string period_id;
        public string PERIOD_ID
        {
            set { period_id = value; }
            get { return period_id; }
        }
        private string pms_period;
        public string PMS_PERIOD
        {
            set { pms_period = value; }
            get { return pms_period; }
        }
        private string pms_period_id;
        public string PMS_PERIOD_ID
        {
            set { pms_period_id = value; }
            get { return pms_period_id; }
        }
        private string calibration_period;
        public string CALIBRATION_PERIOD
        {
            set { calibration_period = value; }
            get { return calibration_period; }
        }
        private string calibration_period_id;
        public string CALIBRATION_PERIOD_ID
        {
            set { calibration_period_id = value; }
            get { return calibration_period_id; }
        }
        private string calibration_period_name;
        public string CALIBRATION_PERIOD_NAME
        {
            set { calibration_period_name = value; }
            get { return calibration_period_name; }
        }
        private string calibration_expiry_dt;
        public string CALIBRATION_EXPIRY_DT
        {
            set { calibration_expiry_dt = value; }
            get { return calibration_expiry_dt; }
        }
        private string item_bat_id;
        public string ITEM_BAT_ID
        {
            set { item_bat_id = value; }
            get { return item_bat_id; }
        }
        private string item_stp_id;
        public string ITEM_STP_ID
        {
            set { item_stp_id = value; }
            get { return item_stp_id; }
        }
        private string trn_item_id;
        public string TRN_ITEM_ID
        {
            set { trn_item_id = value; }
            get { return trn_item_id; }
        }
        private string warranty_period;
        public string WARRANTY_PERIOD
        {
            set { warranty_period = value; }
            get { return warranty_period; }
        }
        private string pms_periodd;
        public string PMS_PERIODD
        {
            set { pms_periodd = value; }
            get { return pms_periodd; }
        }
        private string calibration_periodd;
        public string CALIBRATION_PERIODD
        {
            set { calibration_periodd = value; }
            get { return calibration_periodd; }
        }
        private string maintanence_dt;
        public string MAINTANENCE_DT
        {
            set { maintanence_dt = value; }
            get { return maintanence_dt; }
        }
        private string manufacture_id;
        public string MANUFACTURE_ID
        {
            set { manufacture_id = value; }
            get { return manufacture_id; }
        }
        private string po_by_name;
        public string PO_BY_NAME
        {
            set { po_by_name = value; }
            get { return po_by_name; }
        }
        private string receive_type_id;
        public string RECEIVE_TYPE_ID
        {
            set { receive_type_id = value; }
            get { return receive_type_id; }
        }
        private string receive_type_name;
        public string RECEIVE_TYPE_NAME
        {
            set { receive_type_name = value; }
            get { return receive_type_name; }
        }
        private string is_replaceble;
        public string IS_REPLACEBLE
        {
            set { is_replaceble = value; }
            get { return is_replaceble; }
        }
        private string item_expiry_dt;
        public string ITEM_EXPIRY_DT
        {
            set { item_expiry_dt = value; }
            get { return item_expiry_dt; }
        }
        private string eqp_type;
        public string EQP_TYPE
        {
            set { eqp_type = value; }
            get { return eqp_type; }
        }

        private string eqp_id;
        public string EQP_ID
        {
            set { eqp_id = value; }
            get { return eqp_id; }
        }
        private string eqp_name;
        public string EQP_NAME
        {
            set { eqp_name = value; }
            get { return eqp_name; }
        }
        private string eqp_cd;
        public string EQP_CD
        {
            set { eqp_cd = value; }
            get { return eqp_cd; }
        }
        private string eqp_qty;
        public string EQP_QTY
        {
            set { eqp_qty = value; }
            get { return eqp_qty; }
        }
        private string item_qty;
        public string ITEM_QTY
        {
            set { item_qty = value; }
            get { return item_qty; }
        }

        //MaintenanceModifyCancel
    
        private string maintanence_rev_no;

        public string MAINTANENCE_REV_NO
        {
            get { return maintanence_rev_no; }
            set { maintanence_rev_no = value; }
        }

        private string maintanence_no;

        public string MAINTANENCE_NO
        {
            get { return maintanence_no; }
            set { maintanence_no = value; }
        }

        private string eqp_maintance_id_rev_no;

        public string EQP_MAINTANCE_ID_REV_NO
        {
            get { return eqp_maintance_id_rev_no; }
            set { eqp_maintance_id_rev_no = value; }
        }
       
        private string maintanence_mode_id;

        public string MAINTANENCE_MODE_ID
        {
            get { return maintanence_mode_id; }
            set { maintanence_mode_id = value; }
        }
        private string maintanence_type_id;

        public string MAINTANENCE_TYPE_ID
        {
            get { return maintanence_type_id; }
            set { maintanence_type_id = value; }
        }
        private string actual_dt;

        public string ACTUAL_DT
        {
            get { return actual_dt; }
            set { actual_dt = value; }
        }
        private string done_dt;

        public string DONE_DT
        {
            get { return done_dt; }
            set { done_dt = value; }
        }
        private string done_by;

        public string DONE_BY
        {
            get { return done_by; }
            set { done_by = value; }
        }
        private string equipment_id;

        public string EQUIPMENT_ID
        {
            get { return equipment_id; }
            set { equipment_id = value; }
        }
        private string equipment_cd;

        public string EQUIPMENT_CD
        {
            get { return equipment_cd; }
            set { equipment_cd = value; }
        }
        private string equipment_name;

        public string EQUIPMENT_NAME
        {
            get { return equipment_name; }
            set { equipment_name = value; }
        }
        private string department_name;

        public string DEPARTMENT_NAME
        {
            get { return department_name; }
            set { department_name = value; }
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
        private string warranty_expiry_dt;

        public string WARRANTY_EXPIRY_DT
        {
            get { return warranty_expiry_dt; }
            set { warranty_expiry_dt = value; }
        }


      
        private string maintanence_mode_name;

        public string MAINTANENCE_MODE_NAME
        {
            get { return maintanence_mode_name; }
            set { maintanence_mode_name = value; }
        }
        private string maintanence_type_name;

        public string MAINTANENCE_TYPE_NAME
        {
            get { return maintanence_type_name; }
            set { maintanence_type_name = value; }
        }
        private string done_by_name;

        public string DONE_BY_NAME
        {
            get { return done_by_name; }
            set { done_by_name = value; }
        }


        private string mexpiry;

        public string MEXPIRY
        {
            get { return mexpiry; }
            set { mexpiry = value; }
        }
        private string mperiod;

        public string MPERIOD
        {
            get { return mperiod; }
            set { mperiod = value; }
        }
        private string mperiod_type_id;

        public string MPERIOD_TYPE_ID
        {
            get { return mperiod_type_id; }
            set { mperiod_type_id = value; }
        }
        private string mperiod_type_name;

        public string MPERIOD_TYPE_NAME
        {
            get { return mperiod_type_name; }
            set { mperiod_type_name = value; }
        }
        private string warranty_identity;

        public string WARRANTY_IDENTITY
        {
            get { return warranty_identity; }
            set { warranty_identity = value; }
        }

        private string eqp_type_name;

        public string EQP_TYPE_NAME
        {
            get { return eqp_type_name; }
            set { eqp_type_name = value; }
        }




        private string mnf_id;

        public string MNF_ID
        {
            get { return mnf_id; }
            set { mnf_id = value; }
        }
        private string manufacturer_name;

        public string MANUFACTURER_NAME
        {
            get { return manufacturer_name; }
            set { manufacturer_name = value; }
        }
        private string vendor_name;

        public string VENDOR_NAME
        {
            get { return vendor_name; }
            set { vendor_name = value; }
        }

        private string eqp_group_id;

        public string EQP_GROUP_ID
        {
            get { return eqp_group_id; }
            set { eqp_group_id = value; }
        }

        private string eqp_group_name;

        public string EQP_GROUP_NAME
        {
            get { return eqp_group_name; }
            set { eqp_group_name = value; }
        }
        private string eqp_type_id;

        public string EQP_TYPE_ID
        {
            get { return eqp_type_id; }
            set { eqp_type_id = value; }
        }



        private string pms_start_dt;

        public string PMS_START_DT
        {
            get { return pms_start_dt; }
            set { pms_start_dt = value; }
        }

        private string calibration_start_dt;

        public string CALIBRATION_START_DT
        {
            get { return calibration_start_dt; }
            set { calibration_start_dt = value; }
        }
        private string warranty_start_dt;

        public string WARRANTY_START_DT
        {
            get { return warranty_start_dt; }
            set { warranty_start_dt = value; }
        }


      
        private string warranty_model_id;

        public string WARRANTY_MODEL_ID
        {
            get { return warranty_model_id; }
            set { warranty_model_id = value; }
        }
        private string warranty_model_name;

        public string WARRANTY_MODEL_NAME
        {
            get { return warranty_model_name; }
            set { warranty_model_name = value; }
        }
        private string receive_acc_type_id;

        public string RECEIVE_ACC_TYPE_ID
        {
            get { return receive_acc_type_id; }
            set { receive_acc_type_id = value; }
        }
        private string handover_dept_id;

        public string HANDOVER_DEPT_ID
        {
            get { return handover_dept_id; }
            set { handover_dept_id = value; }
        }


        private string extended_warrenty_startdt;

        public string EXTENDED_WARRENTY_STARTDT
        {
            get { return extended_warrenty_startdt; }
            set { extended_warrenty_startdt = value; }
        }
        private string extended_warrenty_enddt;

        public string EXTENDED_WARRENTY_ENDDT
        {
            get { return extended_warrenty_enddt; }
            set { extended_warrenty_enddt = value; }
        }
        private string display_warrenty_schedule;

        public string DISPLAY_WARRENTY_SCHEDULE
        {
            get { return display_warrenty_schedule; }
            set { display_warrenty_schedule = value; }
        }
        private string display_maint_pims_schedule;

        public string DISPLAY_MAINT_PIMS_SCHEDULE
        {
            get { return display_maint_pims_schedule; }
            set { display_maint_pims_schedule = value; }
        }
        private string display_maint_calibration_schedule;

        public string DISPLAY_MAINT_CALIBRATION_SCHEDULE
        {
            get { return display_maint_calibration_schedule; }
            set { display_maint_calibration_schedule = value; }
        }

        private string eqp_owner;

        public string EQP_OWNER
        {
            get { return eqp_owner; }
            set { eqp_owner = value; }
        }

        private string ems_equipment_owned_name;

        public string EMS_EQUIPMENT_OWNED_NAME
        {
            get { return ems_equipment_owned_name; }
            set { ems_equipment_owned_name = value; }
        }
        private string eqp_critical;

        public string EQP_CRITICAL
        {
            get { return eqp_critical; }
            set { eqp_critical = value; }
        }

        private string s_no;

        public string S_NO
        {
            get { return s_no; }
            set { s_no = value; }
        }
        private string eqp_utilization_id;

        public string EQP_UTILIZATION_ID
        {
            get { return eqp_utilization_id; }
            set { eqp_utilization_id = value; }
        }
        private string eqp_utilization_rev_no;

        public string EQP_UTILIZATION_REV_NO
        {
            get { return eqp_utilization_rev_no; }
            set { eqp_utilization_rev_no = value; }
        }
        private string eqp_utilization_cd;

        public string EQP_UTILIZATION_CD
        {
            get { return eqp_utilization_cd; }
            set { eqp_utilization_cd = value; }
        }
        private string utilization_entry_type_id;

        public string UTILIZATION_ENTRY_TYPE_ID
        {
            get { return utilization_entry_type_id; }
            set { utilization_entry_type_id = value; }
        }
        private string referral_no;

        public string REFERRAL_NO
        {
            get { return referral_no; }
            set { referral_no = value; }
        }
        private string emp_name;

        public string EMP_NAME
        {
            get { return emp_name; }
            set { emp_name = value; }
        }
        private string model_no;

        public string MODEL_NO
        {
            get { return model_no; }
            set { model_no = value; }
        }
        private string emp_id;

        public string EMP_ID
        {
            get { return emp_id; }
            set { emp_id = value; }
        }
        private string utilization_dt;

        public string UTILIZATION_DT
        {
            get { return utilization_dt; }
            set { utilization_dt = value; }
        }
        private string utilization_type_name;

        public string UTILIZATION_TYPE_NAME
        {
            get { return utilization_type_name; }
            set { utilization_type_name = value; }
        }
        ////FOR FILE DOWNLOAD FORM
        private string RecordID;

        public string RecordID1
        {
            get { return RecordID; }
            set { RecordID = value; }
        }
        private string RecordRevNo;

        public string RecordRevNo1
        {
            get { return RecordRevNo; }
            set { RecordRevNo = value; }
        }
        private string RecordCD;

        public string RecordCD1
        {
            get { return RecordCD; }
            set { RecordCD = value; }
        }
        private string DeptID;

        public string DeptID1
        {
            get { return DeptID; }
            set { DeptID = value; }
        }
        private string RecordName;

        public string RecordName1
        {
            get { return RecordName; }
            set { RecordName = value; }
        }
        private string RecordDesc;

        public string RecordDesc1
        {
            get { return RecordDesc; }
            set { RecordDesc = value; }
        }
        private string Dmsupload;

        public string Dmsupload1
        {
            get { return Dmsupload; }
            set { Dmsupload = value; }
        }
        private string DocID;

        public string DocID1
        {
            get { return DocID; }
            set { DocID = value; }
        }
        private string ModuleID;

        public string ModuleID1
        {
            get { return ModuleID; }
            set { ModuleID = value; }
        }
        private string Record_Status;

        public string Record_Status1
        {
            get { return Record_Status; }
            set { Record_Status = value; }
        }
        private string LId;

        public string LId1
        {
            get { return LId; }
            set { LId = value; }
        }
        private string Lrevno;

        public string Lrevno1
        {
            get { return Lrevno; }
            set { Lrevno = value; }
        }
        private string cd;

        public string CD
        {
            get { return cd; }
            set { cd = value; }
        }
        private string files_upload_id;

        public string FILES_UPLOAD_ID
        {
            get { return files_upload_id; }
            set { files_upload_id = value; }
        }
        private string files_upload_rev_no;

        public string FILES_UPLOAD_REV_NO
        {
            get { return files_upload_rev_no; }
            set { files_upload_rev_no = value; }
        }
        private string files_upload_cd;

        public string FILES_UPLOAD_CD
        {
            get { return files_upload_cd; }
            set { files_upload_cd = value; }
        }
        private string dept_id;

        public string DEPT_ID
        {
            get { return dept_id; }
            set { dept_id = value; }
        }
        private string dept_cd;

        public string DEPT_CD
        {
            get { return dept_cd; }
            set { dept_cd = value; }
        }
        private string file_type_name;

        public string FILE_TYPE_NAME
        {
            get { return file_type_name; }
            set { file_type_name = value; }
        }
        private string file_type_desc;

        public string FILE_TYPE_DESC
        {
            get { return file_type_desc; }
            set { file_type_desc = value; }
        }
        private string patient_id;
        public string PATIENT_ID
        {
            get { return patient_id; }
            set { patient_id = value; }
        }
        private string patient_umr_no;
        public string PATIENT_UMR_NO
        {
            get { return patient_umr_no; }
            set { patient_umr_no = value; }
        }
        private string admn_no;
        public string ADMN_NO
        {
            get { return admn_no; }
            set { admn_no = value; }
        }
        private string employee_desc;

        public string EMPLOYEE_DESC
        {
            get { return employee_desc; }
            set { employee_desc = value; }
        }
        private string service_id;

        public string SERVICE_ID
        {
            get { return service_id; }
            set { service_id = value; }
        }
        private string service_code;

        public string SERVICE_CODE
        {
            get { return service_code; }
            set { service_code = value; }
        }
        private string service_name;

        public string SERVICE_NAME
        {
            get { return service_name; }
            set { service_name = value; }
        }
        private string service_desc;

        public string SERVICE_DESC
        {
            get { return service_desc; }
            set { service_desc = value; }
        }
        private string _FacilityID;

        /// <summary>
        /// Gets or sets the facility ID.
        /// </summary>
        /// <value>The facility ID.</value>
        /// <remarks></remarks>
        public string FacilityID
        {
            get { return _FacilityID; }
            set { _FacilityID = value; }
        }


        /// <summary>
        /// 
        /// </summary>
        private int _area_id;

        /// <summary>
        /// Gets or sets the ARE a_ ID.
        /// </summary>
        /// <value>The ARE a_ ID.</value>
        /// <remarks></remarks>
        public int AREA_ID
        {
            get { return _area_id; }
            set { _area_id = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private int _city_id;

        /// <summary>
        /// Gets or sets the CIT y_ ID.
        /// </summary>
        /// <value>The CIT y_ ID.</value>
        /// <remarks></remarks>
        public int CITY_ID
        {
            get { return _city_id; }
            set { _city_id = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private int _state_id;

        /// <summary>
        /// Gets or sets the STAT e_ ID.
        /// </summary>
        /// <value>The STAT e_ ID.</value>
        /// <remarks></remarks>
        public int STATE_ID
        {
            get { return _state_id; }
            set { _state_id = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private int _country_id;

        /// <summary>
        /// Gets or sets the COUNTR y_ ID.
        /// </summary>
        /// <value>The COUNTR y_ ID.</value>
        /// <remarks></remarks>
        public int COUNTRY_ID
        {
            get { return _country_id; }
            set { _country_id = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private int _addrss_type_id;

        /// <summary>
        /// Gets or sets the ADDRES s_ TYP e_ ID.
        /// </summary>
        /// <value>The ADDRES s_ TYP e_ ID.</value>
        /// <remarks></remarks>
        public int ADDRESS_TYPE_ID
        {
            get { return _addrss_type_id; }
            set { _addrss_type_id = value; }
        }


        #region Properties

        /// <summary>
        /// 
        /// </summary>
        private string address_ID;
        /// <summary>
        /// Gets or sets the ADDRES s_ ID.
        /// </summary>
        /// <value>The ADDRES s_ ID.</value>
        /// <remarks></remarks>
        public string ADDRESS_ID
        {
            get
            {
                return address_ID;
            }
            set
            {
                address_ID = value;
            }
        }
        /// <summary>
        /// 
        /// </summary>
        private string addressType = string.Empty;

        /// <summary>
        /// Gets or sets the type of the address.
        /// </summary>
        /// <value>The type of the address.</value>
        /// <remarks></remarks>
        public string AddressType
        {
            get { return addressType; }
            set { addressType = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string address1 = string.Empty;
        /// <summary>
        /// Gets or sets the address1.
        /// </summary>
        /// <value>The address1.</value>
        /// <remarks></remarks>
        public string Address1
        {
            get { return address1; }
            set { address1 = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string address2 = string.Empty;
        /// <summary>
        /// Gets or sets the address2.
        /// </summary>
        /// <value>The address2.</value>
        /// <remarks></remarks>
        public string Address2
        {
            get { return address2; }
            set { address2 = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string city = string.Empty;
        /// <summary>
        /// Gets or sets the city.
        /// </summary>
        /// <value>The city.</value>
        /// <remarks></remarks>
        public string City
        {
            get { return city; }
            set { city = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string country = string.Empty;
        /// <summary>
        /// Gets or sets the country.
        /// </summary>
        /// <value>The country.</value>
        /// <remarks></remarks>
        public string Country
        {
            get { return country; }
            set { country = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string emailID = string.Empty;
        /// <summary>
        /// Gets or sets the email ID.
        /// </summary>
        /// <value>The email ID.</value>
        /// <remarks></remarks>
        public string Email_ID
        {
            get { return emailID; }
            set { emailID = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private string area;
        /// <summary>
        /// Gets or sets the area.
        /// </summary>
        /// <value>The area.</value>
        /// <remarks></remarks>
        public string Area
        {
            get { return area; }
            set { area = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string faxNo = string.Empty;
        /// <summary>
        /// Gets or sets the fax no.
        /// </summary>
        /// <value>The fax no.</value>
        /// <remarks></remarks>
        public string FAX_NUMBER
        {
            get { return faxNo; }
            set { faxNo = value; }
        }

        /// <summary>
        /// 
        /// </summary>
      

        /// <summary>
        /// 
        /// </summary>
        private string state = string.Empty;
        /// <summary>
        /// Gets or sets the state.
        /// </summary>
        /// <value>The state.</value>
        /// <remarks></remarks>
        public string State
        {
            get { return state; }
            set { state = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string webSiteURL = string.Empty;
        /// <summary>
        /// Gets or sets the web site URL.
        /// </summary>
        /// <value>The web site URL.</value>
        /// <remarks></remarks>
        public string WEBSITE_URL
        {
            get { return webSiteURL; }
            set { webSiteURL = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private string webSiteURL2 = string.Empty;
        /// <summary>
        /// Gets or sets the web site URL.
        /// </summary>
        /// <value>The web site URL.</value>
        /// <remarks></remarks>
        public string WEBSITE_URL2
        {
            get { return webSiteURL2; }
            set { webSiteURL2 = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private string webSiteURL3 = string.Empty;
        /// <summary>
        /// Gets or sets the web site URL.
        /// </summary>
        /// <value>The web site URL.</value>
        /// <remarks></remarks>
        public string WEBSITE_URL3
        {
            get { return webSiteURL3; }
            set { webSiteURL3 = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string zipCode = string.Empty;
        /// <summary>
        /// Gets or sets the zip code.
        /// </summary>
        /// <value>The zip code.</value>
        /// <remarks></remarks>
        public string ZipCode
        {
            get { return zipCode; }
            set { zipCode = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private string cityname;
        /// <summary>
        /// Gets or sets the CIT y_ NAME.
        /// </summary>
        /// <value>The CIT y_ NAME.</value>
        /// <remarks></remarks>
        public string CITY_NAME
        {
            get { return cityname; }
            set { cityname = value; }

        }
        /// <summary>
        /// 
        /// </summary>
        private string statename;
        /// <summary>
        /// Gets or sets the STAT e_ NAME.
        /// </summary>
        /// <value>The STAT e_ NAME.</value>
        /// <remarks></remarks>
        public string STATE_NAME
        {
            get { return statename; }
            set { statename = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string countryname;
        /// <summary>
        /// Gets or sets the COUNTR y_ NAME.
        /// </summary>
        /// <value>The COUNTR y_ NAME.</value>
        /// <remarks></remarks>
        public string COUNTRY_NAME
        {
            get { return countryname; }
            set { countryname = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string areaname;
        /// <summary>
        /// Gets or sets the ARE a_ NAME.
        /// </summary>
        /// <value>The ARE a_ NAME.</value>
        /// <remarks></remarks>
        public string AREA_NAME
        {
            get { return areaname; }
            set { areaname = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string adrtypename;
        /// <summary>
        /// Gets or sets the name of the address type.
        /// </summary>
        /// <value>The name of the address type.</value>
        /// <remarks></remarks>
        public string AddressTypeName
        {
            get { return adrtypename; }
            set { adrtypename = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string toroleid;
        /// <summary>
        /// Gets or sets to role ID.
        /// </summary>
        /// <value>To role ID.</value>
        /// <remarks></remarks>
        public string ToRoleID
        {
            get { return toroleid; }
            set { toroleid = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private int fromroleid;
        /// <summary>
        /// Gets or sets from role ID.
        /// </summary>
        /// <value>From role ID.</value>
        /// <remarks></remarks>
        public int FromRoleID
        {
            get { return fromroleid; }
            set { fromroleid = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        private string togroupid;
        /// <summary>
        /// Gets or sets to group ID.
        /// </summary>
        /// <value>To group ID.</value>
        /// <remarks></remarks>
        public string ToGroupID
        {
            get { return togroupid; }
            set { togroupid = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private int fromgroupid;
        /// <summary>
        /// Gets or sets from group ID.
        /// </summary>
        /// <value>From group ID.</value>
        /// <remarks></remarks>
        public int FromGroupID
        {
            get { return fromgroupid; }
            set { fromgroupid = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private string perispresaddr;
        /// <summary>
        /// Gets or sets the per is pres addr.
        /// </summary>
        /// <value>The per is pres addr.</value>
        /// <remarks></remarks>
        public string PerIsPresAddr
        {
            get { return perispresaddr; }
            set { perispresaddr = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        private int address_rev_no;
        /// <summary>
        /// Gets or sets the ADDRES s_ RE v_ NO.
        /// </summary>
        /// <value>The ADDRES s_ RE v_ NO.</value>
        /// <remarks></remarks>
        public int ADDRESS_REV_NO
        {
            get { return address_rev_no; }
            set { address_rev_no = value; }
        }
        //public string prevrec;
        //public string PrevRec
        //{
        //    get { return prevrec; }
        //    set { prevrec = value; }
        //}
        //public string nextrec;
        //public string NextRec
        //{
        //    get { return nextrec; }
        //    set { nextrec = value; }
        //}
        /// <summary>
        /// 
        /// </summary>
        public string reference_type;
        /// <summary>
        /// Gets or sets the REFERENC e_ TYPE.
        /// </summary>
        /// <value>The REFERENC e_ TYPE.</value>
        /// <remarks></remarks>
        public string REFERENCE_TYPE
        {
            get { return reference_type; }
            set { reference_type = value; }
        }
        /// <summary>
        /// 
        /// </summary>
      
        private string home_phone;

        public string HOME_PHONE
        {
            get { return home_phone; }
            set { home_phone = value; }
        }
        private string office_phone;

        public string OFFICE_PHONE
        {
            get { return office_phone; }
            set { office_phone = value; }
        }

        private int addr_type_id;

        public int ADDR_TYPE_ID
        {
            get { return addr_type_id; }
            set { addr_type_id = value; }
        }
        private int addr_grp_id;

        public int ADDR_GRP_ID
        {
            get { return addr_grp_id; }
            set { addr_grp_id = value; }
        }
       

        private int referal_id;

        public int REFRL_ID
        {
            get { return referal_id; }
            set { referal_id = value; }
        }

        private string referal_cd;

        public string REFRL_CD
        {
            get { return referal_cd; }
            set { referal_cd = value; }
        }


        private int reference_source_id;

        public int REFERENCE_SOURCE_ID
        {
            get { return reference_source_id; }
            set { reference_source_id = value; }
        }

        private string referal_name;

        public string REFERAL_NAME
        {
            get { return referal_name; }
            set { referal_name = value; }
        }
        private string fax2;

        public string FAX2
        {
            get { return fax2; }
            set { fax2 = value; }
        }
       
        #endregion Properties
        private string pin_code;

        public string PIN_CODE
        {
            get { return pin_code; }
            set { pin_code = value; }
        }
     

        private string pin_code_name;

        public string PIN_CODE_NAME
        {
            get { return pin_code_name; }
            set { pin_code_name = value; }
        }

        private string _district_id;

        public string DISTRICT_ID
        {
            get { return _district_id; }
            set { _district_id = value; }
        }

        private string _district_name;

        public string DISTRICT_NAME
        {
            get { return _district_name; }
            set { _district_name = value; }
        }
        private string _STD_CODE;

        public string STD_CODE
        {
            get { return _STD_CODE; }
            set { _STD_CODE = value; }
        }
        private string _ADMISSION_TYPE;

        public string ADMISSION_TYPE
        {
            get { return _ADMISSION_TYPE; }
            set { _ADMISSION_TYPE = value; }
        }
        private string patient_name;

        public string PATIENT_NAME
        {
            get { return patient_name; }
            set { patient_name = value; }
        }
        private int _DEPARTMENT_ID;

        public int DEPARTMENT_ID
        {
            get { return _DEPARTMENT_ID; }
            set { _DEPARTMENT_ID = value; }
        }
        private string _dept_name;

        public string DEPT_NAME
        {
            get { return _dept_name; }
            set { _dept_name = value; }
        }
        private int count;

        public int COUNT
        {
            get { return count; }
            set { count = value; }
        }

        private string description;

        public string DESCRIPTION
        {
            get { return description; }
            set { description = value; }
        }

        private string item_used;

        public string ITEM_USED
        {
            get { return item_used; }
            set { item_used = value; }
        }
        private int adt_trt_ward_rsn_id;

        public int ADT_TRT_WARD_RSN_ID
        {
            get { return adt_trt_ward_rsn_id; }
            set { adt_trt_ward_rsn_id = value; }
        }
        private string adt_trt_ward_rsn_name;

        public string ADT_TRT_WARD_RSN_NAME
        {
            get { return adt_trt_ward_rsn_name; }
            set { adt_trt_ward_rsn_name = value; }
        }
        private string requisitioncd;

        public string REQUISITIONCD
        {
            get { return requisitioncd; }
            set { requisitioncd = value; }
        }
        private string req_status;

        public string REQ_STATUS
        {
            get { return req_status; }
            set { req_status = value; }
        }
        private string user_id;

        public string USER_ID
        {
            get { return user_id; }
            set { user_id = value; }
        }
        private string mrd_ack_remarks;

        public string MRD_ACK_REMARKS
        {
            get { return mrd_ack_remarks; }
            set { mrd_ack_remarks = value; }
        }
        private string mrd_handover_to;

        public string MRD_HANDOVER_TO
        {
            get { return mrd_handover_to; }
            set { mrd_handover_to = value; }
        }
        private string mrd_handover_by;

        public string MRD_HANDOVER_BY
        {
            get { return mrd_handover_by; }
            set { mrd_handover_by = value; }
        }
        private string mrd_handover_remarks;

        public string MRD_HANDOVER_REMARKS
        {
            get { return mrd_handover_remarks; }
            set { mrd_handover_remarks = value; }
        }
        private string requiredfile;

        public string REQUIREDFILE
        {
            get { return requiredfile; }
            set { requiredfile = value; }
        }
        private string admn_dt;

        public string ADMN_DT
        {
            get { return admn_dt; }
            set { admn_dt = value; }
        }
        private string kit_storage_cd;

        public string KIT_STORAGE_CD
        {
            get { return kit_storage_cd; }
            set { kit_storage_cd = value; }
        }

        public string EMPLOYEE_NAME { get; set; }
        public string EMPLOYEE_CD { get; set; }
        public string DESIGNATION_NAME { get; set; }
        private string _dms_upload_Query;

        public string DMS_UPLOAD_QUERY
        {
            get { return _dms_upload_Query; }
            set { _dms_upload_Query = value; }
        }

        private string service_group_id;

        public string SERVICE_GROUP_ID
        {
            get { return service_group_id; }
            set { service_group_id = value; }
        }
        private string service_group_name;

        public string SERVICE_GROUP_NAME
        {
            get { return service_group_name; }
            set { service_group_name = value; }
        }

        private int _NoOfRecords;

        public int NoOfRecords
        {
            get { return _NoOfRecords; }
            set { _NoOfRecords = value; }
        }
        private string order_id;

        public string ORDER_ID
        {
            get { return order_id; }
            set { order_id = value; }
        }
        private string service_cd;

        public string SERVICE_CD
        {
            get { return service_cd; }
            set { service_cd = value; }
        }

       
        public string EMS_ITEM_ISSUE_ID { get; set; }
        public string EMS_ITEM_ISSUE_CD { get; set; }

        private string _DEPT_TYPE;
        public string DEPT_TYPE
        {
            get { return _DEPT_TYPE; }
            set { _DEPT_TYPE = value; }
        }
    }

}

