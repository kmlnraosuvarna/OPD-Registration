using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Common;

namespace EzHms.ModelEntity
{
    [Serializable]
  public  class Dynamicoperaion
    {
        private string proc_name;

        public string Proc_name
        {
            get 
            { 
                return proc_name;
            }
            set
            { 
                proc_name = value; 
            }
        }     
        private List<Parameters> _paramlist;

        public List<Parameters> Paramlist
        {
            get 
            { 
                return _paramlist; 
            }
            set
            {
                _paramlist = value;
            }

        }

        private string _BILL_TYPE;

        public string BILL_TYPE
        {
            get { return _BILL_TYPE; }
            set { _BILL_TYPE = value; }
        }

        private string _CASH_AMOUNT;

        public string CASH_AMOUNT
        {
            get { return _CASH_AMOUNT; }
            set { _CASH_AMOUNT = value; }
        }
        private string _CHEQUE_AMOUNT;

        public string CHEQUE_AMOUNT
        {
            get { return _CHEQUE_AMOUNT; }
            set { _CHEQUE_AMOUNT = value; }
        }

        private string _CARD_AMOUNT;

        public string CARD_AMOUNT
        {
            get { return _CARD_AMOUNT; }
            set { _CARD_AMOUNT = value; }
        }

        private string _TOTAL_AMOUNT;

        public string TOTAL_AMOUNT
        {
            get { return _TOTAL_AMOUNT; }
            set { _TOTAL_AMOUNT = value; }
        }

        private string _BILL_TYPE_COUNT;

        public string BILL_TYPE_COUNT
        {
            get { return _BILL_TYPE_COUNT; }
            set { _BILL_TYPE_COUNT = value; }
        }
        private string _OVERALL_SUM;

        public string OVERALL_SUM
        {
            get { return _OVERALL_SUM; }
            set { _OVERALL_SUM = value; }
        }
        private string _BILL_TYPE_COUNT_PER;

        public string BILL_TYPE_COUNT_PER
        {
            get { return _BILL_TYPE_COUNT_PER; }
            set { _BILL_TYPE_COUNT_PER = value; }
        }

        private string _USER_NAME;

        public string USER_NAME
        {
            get { return _USER_NAME; }
            set { _USER_NAME = value; }
        }
        private string _TOTAL_COLLECTED;

        public string TOTAL_COLLECTED
        {
            get { return _TOTAL_COLLECTED; }
            set { _TOTAL_COLLECTED = value; }
        }

        private string _YEAR;

        public string YEAR
        {
            get { return _YEAR; }
            set { _YEAR = value; }
        }

        private string _MONTH_NAME;

        public string MONTH_NAME
        {
            get { return _MONTH_NAME; }
            set { _MONTH_NAME = value; }
        }

        private string _MONTH;

        public string MONTH
        {
            get { return _MONTH; }
            set { _MONTH = value; }
        }

        private string _IP;

        public string IP
        {
            get { return _IP; }
            set { _IP = value; }
        }

        private string _OP;

        public string OP
        {
            get { return _OP; }
            set { _OP = value; }
        }

        private string _CORPORATE;

        public string CORPORATE
        {
            get { return _CORPORATE; }
            set { _CORPORATE = value; }
        }
        //#region Dashboard
        
        
        //private string _TOTAL_BEDS;

        //public string TOTAL_BEDS
        //{
        //    get { return _TOTAL_BEDS; }
        //    set { _TOTAL_BEDS = value; }
        //}
        //private string _OCCUPIED_BEDS;

        //public string OCCUPIED_BEDS
        //{
        //    get { return _OCCUPIED_BEDS; }
        //    set { _OCCUPIED_BEDS = value; }
        //}

        //private string _ICU;

        //public string ICU
        //{
        //    get { return _ICU; }
        //    set { _ICU = value; }
        //}
        //private string _AMCU;

        //public string AMCU
        //{
        //    get { return _AMCU; }
        //    set { _AMCU = value; }
        //}
        //private string _SICU;

        //public string SICU
        //{
        //    get { return _SICU; }
        //    set { _SICU = value; }
        //}
        //private string _SINGLE;

        //public string SINGLE
        //{
        //    get { return _SINGLE; }
        //    set { _SINGLE = value; }
        //}
        //private string _TWIN_SHARING;

        //public string TWIN_SHARING
        //{
        //    get { return _TWIN_SHARING; }
        //    set { _TWIN_SHARING = value; }
        //}
        //private string _TRIPLE_SHARING;

        //public string TRIPLE_SHARING
        //{
        //    get { return _TRIPLE_SHARING; }
        //    set { _TRIPLE_SHARING = value; }
        //}
        //private string _GENERAL;

        //public string GENERAL
        //{
        //    get { return _GENERAL; }
        //    set { _GENERAL = value; }
        //}
        //private string _KTU;

        //public string KTU
        //{
        //    get { return _KTU; }
        //    set { _KTU = value; }
        //}
        //private string _DIALYSIS;

        //public string DIALYSIS
        //{
        //    get { return _DIALYSIS; }
        //    set { _DIALYSIS = value; }
        //}
        //private string _OCCUPANCY_PER;

        //public string OCCUPANCY_PER
        //{
        //    get { return _OCCUPANCY_PER; }
        //    set { _OCCUPANCY_PER = value; }
        //}
        //private string _AVG_REG_PER_BED;

        //public string AVG_REG_PER_BED
        //{
        //    get { return _AVG_REG_PER_BED; }
        //    set { _AVG_REG_PER_BED = value; }
        //}
        //private string _ICU_OCCUPANCY;

        //public string ICU_OCCUPANCY
        //{
        //    get { return _ICU_OCCUPANCY; }
        //    set { _ICU_OCCUPANCY = value; }
        //}
        //private string _AVG_ICU_REG_PER_BED;

        //public string AVG_ICU_REG_PER_BED
        //{
        //    get { return _AVG_ICU_REG_PER_BED; }
        //    set { _AVG_ICU_REG_PER_BED = value; }
        //}
        //private string _SURGERIES;

        //public string SURGERIES
        //{
        //    get { return _SURGERIES; }
        //    set { _SURGERIES = value; }
        //}
        //private string _PHARMACY_SALE;

        //public string PHARMACY_SALE
        //{
        //    get { return _PHARMACY_SALE; }
        //    set { _PHARMACY_SALE = value; }
        //}
        //private string _INVESTIGATIONS;

        //public string INVESTIGATIONS
        //{
        //    get { return _INVESTIGATIONS; }
        //    set { _INVESTIGATIONS = value; }
        //}
        //private string _RADIOLOGY;

        //public string RADIOLOGY
        //{
        //    get { return _RADIOLOGY; }
        //    set { _RADIOLOGY = value; }
        //}
        //private string _ROOM_RENTS;

        //public string ROOM_RENTS
        //{
        //    get { return _ROOM_RENTS; }
        //    set { _ROOM_RENTS = value; }
        //}
        //private string _NORMAL_DSCHRG;

        //public string NORMAL_DSCHRG
        //{
        //    get { return _NORMAL_DSCHRG; }
        //    set { _NORMAL_DSCHRG = value; }
        //}

        //private string _DEATHS;

        //public string DEATHS
        //{
        //    get { return _DEATHS; }
        //    set { _DEATHS = value; }
        //}
        //private string _LAMA_DSCHRG;

        //public string LAMA_DSCHRG
        //{
        //    get { return _LAMA_DSCHRG; }
        //    set { _LAMA_DSCHRG = value; }
        //}
        //private string _DISCOUNTS;

        //public string DISCOUNTS
        //{
        //    get { return _DISCOUNTS; }
        //    set { _DISCOUNTS = value; }
        //}
        //private string _OUTSTNDG_AMOUNT;

        //public string OUTSTNDG_AMOUNT
        //{
        //    get { return _OUTSTNDG_AMOUNT; }
        //    set { _OUTSTNDG_AMOUNT = value; }
        //}
        
        //private string _AVG_DSCHRG_TIME;

        //public string AVG_DSCHRG_TIME
        //{
        //    get { return _AVG_DSCHRG_TIME; }
        //    set { _AVG_DSCHRG_TIME = value; }
        //}
        //#endregion

        #region IPRevenue

        private string _TYPE;

        public string TYPE
        {
            get { return _TYPE; }
            set { _TYPE = value; }
        }

        private string _TODAY;

        public string TODAY
        {
            get { return _TODAY; }
            set { _TODAY = value; }
        }

        private string _YESTERDAY;

        public string YESTERDAY
        {
            get { return _YESTERDAY; }
            set { _YESTERDAY = value; }
        }

        private string _LW_TODAY;

        public string LW_TODAY
        {
            get { return _LW_TODAY; }
            set { _LW_TODAY = value; }
        }

        private string _MONTH_TO_DT;

        public string MONTH_TO_DT
        {
            get { return _MONTH_TO_DT; }
            set { _MONTH_TO_DT = value; }
        }

        private string _YEAR_TO_DT;

        public string YEAR_TO_DT
        {
            get { return _YEAR_TO_DT; }
            set { _YEAR_TO_DT = value; }
        }

        private string _LY_YTD;

        public string LY_YTD
        {
            get { return _LY_YTD; }
            set { _LY_YTD = value; }
        }
        #endregion

        private string _PATIENT_TYPE_ID;

        public string PATIENT_TYPE_ID
        {
            get { return _PATIENT_TYPE_ID; }
            set { _PATIENT_TYPE_ID = value; }
        }

        private string _FROM_DT;

        public string FROM_DT
        {
            get { return _FROM_DT; }
            set { _FROM_DT = value; }
        }

        private string _TO_DT;

        public string TO_DT
        {
            get { return _TO_DT; }
            set { _TO_DT = value; }
        }
        private string _GROSS_AMT;

        public string GROSS_AMT
        {
            get { return _GROSS_AMT; }
            set { _GROSS_AMT = value; }
        }

        private string _COUNT;

        public string COUNT
        {
            get { return _COUNT; }
            set { _COUNT = value; }
        }
        private string _CONN_DUES_AMOUNT;

        public string CONN_DUES_AMOUNT
        {
            get { return _CONN_DUES_AMOUNT; }
            set { _CONN_DUES_AMOUNT = value; }
        }

        private string _NET_AMOUNT;

        public string NET_AMOUNT
        {
            get { return _NET_AMOUNT; }
            set { _NET_AMOUNT = value; }
        }
        private string _CMP_ID;

        public string CMP_ID
        {
            get { return _CMP_ID; }
            set { _CMP_ID = value; }
        }

        #region Week wise Revenue
        private string _DAY_BEF_YEST;

        public string DAY_BEF_YEST
        {
            get { return _DAY_BEF_YEST; }
            set { _DAY_BEF_YEST = value; }
        }
        private string _THREE_DAY;

        public string THREE_DAY
        {
            get { return _THREE_DAY; }
            set { _THREE_DAY = value; }
        }
        private string _FOURTH_DAY;

        public string FOURTH_DAY
        {
            get { return _FOURTH_DAY; }
            set { _FOURTH_DAY = value; }
        }
        private string _FIFTH_DAY;

        public string FIFTH_DAY
        {
            get { return _FIFTH_DAY; }
            set { _FIFTH_DAY = value; }
        }
        private string _SIXTH_DAY;

        public string SIXTH_DAY
        {
            get { return _SIXTH_DAY; }
            set { _SIXTH_DAY = value; }
        }
        private string _FIRST_DAY;

        public string FIRST_DAY
        {
            get { return _FIRST_DAY; }
            set { _FIRST_DAY = value; }
        }
        private string _SECOND_DAY;

        public string SECOND_DAY
        {
            get { return _SECOND_DAY; }
            set { _SECOND_DAY = value; }
        }
        private string _FLAG;

        public string FLAG
        {
            get { return _FLAG; }
            set { _FLAG = value; }
        }
        private int _PAGE_NUM;

        public int PAGE_NUM
        {
            get { return _PAGE_NUM; }
            set { _PAGE_NUM = value; }
        }

        private int _PAGE_SIZE;

        public int PAGE_SIZE
        {
            get { return _PAGE_SIZE; }
            set { _PAGE_SIZE = value; }
        }

        private string _MIN_IP_OP_AMT;

        public string MIN_IP_OP_AMT
        {
            get { return _MIN_IP_OP_AMT; }
            set { _MIN_IP_OP_AMT = value; }
        }

        private string _MAX_IP_OP_AMT;

        public string MAX_IP_OP_AMT
        {
            get { return _MAX_IP_OP_AMT; }
            set { _MAX_IP_OP_AMT = value; }
        }

        private string _MIN_CORP_AMT;

        public string MIN_CORP_AMT
        {
            get { return _MIN_CORP_AMT; }
            set { _MIN_CORP_AMT = value; }
        }

        private string _MAX_CORP_AMT;

        public string MAX_CORP_AMT
        {
            get { return _MAX_CORP_AMT; }
            set { _MAX_CORP_AMT = value; }
        }

        private string _MIN_MONTH;

        public string MIN_MONTH
        {
            get { return _MIN_MONTH; }
            set { _MIN_MONTH = value; }
        }

        private string _MAX_MONTH;

        public string MAX_MONTH
        {
            get { return _MAX_MONTH; }
            set { _MAX_MONTH = value; }
        }

        private string _MIN_OP;

        public string MIN_OP
        {
            get { return _MIN_OP; }
            set { _MIN_OP = value; }
        }

        private string _MAX_OP;

        public string MAX_OP
        {
            get { return _MAX_OP; }
            set { _MAX_OP = value; }
        }

        private string _MIN_IP;

        public string MIN_IP
        {
            get { return _MIN_IP; }
            set { _MIN_IP = value; }
        }

        private string _MAX_IP;

        public string MAX_IP
        {
            get { return _MAX_IP; }
            set { _MAX_IP = value; }
        }
        #endregion
    }
}
