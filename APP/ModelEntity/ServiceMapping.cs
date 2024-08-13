using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class ServiceMapping : Service 
    {
        private int _priceDimID = 0;
        private string _startDt = string.Empty;
        private string _colname;
        private int _PRICE_TIER_SEQ_ID;
        private int _price_tier_id;
        //private int session_id;
        private int _price_tier_rev_no;
        //public int SESSION_ID
        //{
        //    get { return session_id; }
        //    set { session_id = value; }
        //}

        private string _priority_str = String.Empty;

        public string PRIORITY_STR
        {
            get { return _priority_str; }
            set { _priority_str = value; }
        }

        public int Price_tier_id
        {
            get { return _price_tier_id; }
            set { _price_tier_id = value; }
        }
        public int PRICE_TIER_REV_NO
        {
            get { return _price_tier_rev_no; }
            set { _price_tier_rev_no = value; }
        }
        private string _Price_seqidList;

        public string Price_seqidList
        {
            get { return _Price_seqidList; }
            set { _Price_seqidList = value; }
        }

        public int PRICE_TIER_SEQ_ID
        {
            get { return _PRICE_TIER_SEQ_ID; }
            set { _PRICE_TIER_SEQ_ID = value; }
        }
        public string Colname
        {
            get { return _colname; }
            set { _colname = value; }
        }
        private DateTime _stDate;

        public DateTime StDate
        {
            get { return _stDate; }
            set { _stDate = value; }
        }
        private DateTime _enDate;

        public DateTime EnDate
        {
            get { return _enDate; }
            set { _enDate = value; }
        }
        private string _endDt = string.Empty;
        private string _prcieDimCd = string.Empty;
        private string _prcieDimDesc = string.Empty;
        private int _ServiceId;
        private int _ServiceRevNo;
        private string  _CurrentRecord ;
        private string _RecordStatus;
        private string _priceDimID_M;
        private string _serviceDesc;
        private string _PriceDimidList;

        public string PriceDimidList
        {
            get { return _PriceDimidList; }
            set { _PriceDimidList = value; }
        }
        public string ServiceDesc
        {
            get { return _serviceDesc; }
            set { _serviceDesc = value; }
        }
        

        public string PriceDimID_M
        {
            get { return _priceDimID_M; }
            set { _priceDimID_M = value; }
        }

        public string RecordStatus
        {
            get { return _RecordStatus; }
            set { _RecordStatus = value; }
        }

        public string CurrentRecord
        {
            get { return _CurrentRecord; }
            set { _CurrentRecord = value; }
        }

        public int ServiceId
        {
            get { return _ServiceId; }
            set { _ServiceId = value; }
        }

        public int ServiceRevNo
        {
            get { return _ServiceRevNo; }
            set { _ServiceRevNo = value; }
        }

        public int PriceDimID {
            get
            { 
                return _priceDimID ;
            }
            set { 
                _priceDimID = value ; 
            }
        }
        public string PriceDimCD
        {
            get
            {
                return _prcieDimCd;
            }
            set
            {
                _prcieDimCd = value;
            }
        }
        public string  PriceDimDesc
        {
            get
            {
                return _prcieDimDesc;
            }
            set
            {
                _prcieDimDesc = value;
            }
        }
        public string StartDate 
        {
            get
            {
                return _startDt;
            }
            set
            {
                _startDt = value;
            }
        }
        public string EndDate
        {
            get
            {
                return _endDt;
            }
            set
            {
                _endDt = value;
            }
        }

        private int _hospitalId = 0;
        public int HospitalID
        {
            get {
                return _hospitalId;
            }
            set
            {
                _hospitalId = value;
            }
        }


        private string _priority = string.Empty;
        public string PRIORITY
        {
            get
            {
                return _priority;
            }
            set
            {
                _priority = value;
            }
        }

        private double _price;// = string.Empty;
        public double PRICE
        {
            get
            {
                return _price;
            }
            set
            {
                _price = value;
            }
        }


        private string _Edit_Ser_Dim_ids;

        public string EDIT_SER_DIM_IDS
        {
            get { return _Edit_Ser_Dim_ids; }
            set { _Edit_Ser_Dim_ids = value; }
        }


        private string _is_flag;

        public string IS_FLAG
        {
            get { return _is_flag; }
            set { _is_flag = value; }
        }
        private string _record_status;

        public string RECORD_STATUS
        {
            get { return _record_status; }
            set { _record_status = value; }
        }

        private string _record_statuss;

        public string RECORD_STATUSS
        {
            get { return _record_statuss; }
            set { _record_statuss = value; }
        }
        private string _PRICE_DIM_NAME;

        public string PRICE_DIM_NAME
        {
            get { return _PRICE_DIM_NAME; }
            set { _PRICE_DIM_NAME = value; }
        }
        private string _PRICE_CODE;

        public string PRICE_CODE
        {
            get { return _PRICE_CODE; }
            set { _PRICE_CODE = value; }
        }

    }
}
