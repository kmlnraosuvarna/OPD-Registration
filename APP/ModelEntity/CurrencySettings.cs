using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class CurrencySettings : ViewPaging
    {
        private int curr_xchg_id;
        public int CURR_XCHG_ID
        {
            set { curr_xchg_id = value; }
            get { return curr_xchg_id; }
        }
        private string curr_xchg_cd;
        public string CURR_XCHG_CD
        {
            set { curr_xchg_cd = value; }
            get { return curr_xchg_cd; }
        }
        private int curr_xchg_rev_no;
        public int CURR_XCHG_REV_NO
        {
            set { curr_xchg_rev_no = value; }
            get { return curr_xchg_rev_no; }
        }
        private int from_curr_id;
        public int FROM_CURR_ID
        {
            set { from_curr_id = value; }
            get { return from_curr_id; }
        }
        private string from_curr_name;
        public string FROM_CURRENCY_NAME
        {
            set { from_curr_name = value; }
            get { return from_curr_name; }
        }
        private string to_curr_name;
        public string TO_CURRENCY_NAME
        {
            set { to_curr_name = value; }
            get { return to_curr_name; }
        }
        private int from_curr_rev_no;
        public int FROM_CURR_REV_NO
        {
            set { from_curr_rev_no = value; }
            get { return from_curr_rev_no; }
        }

        private string from_curr_symbol;
        public string FROM_CURR_SYMBOL
        {
            set { from_curr_symbol = value; }
            get { return from_curr_symbol; }
        }
        private int to_curr_id;
        public int TO_CURR_ID
        {
            set { to_curr_id = value; }
            get { return to_curr_id; }
        }
        private int to_curr_rev_no;
        public int TO_CURR_REV_NO
        {
            set { to_curr_rev_no = value; }
            get { return to_curr_rev_no; }
        }
        private string to_curr_symbol;
        public string TO_CURR_SYMBOL
        {
            set { to_curr_symbol = value; }
            get { return to_curr_symbol; }
        }
        private string ex_rate;
        public string EX_RATE
        {
            set { ex_rate = value; }
            get { return ex_rate; }
        }
        private string eft_from_dt;
        public string EFT_FROM_DT
        {
            set { eft_from_dt = value; }
            get { return eft_from_dt; }
        }
        private string eft_to_dt;
        public string EFT_TO_DT
        {
            set { eft_to_dt = value; }
            get { return eft_to_dt; }
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
        private int session_id;

        public int SESSION_ID
        {
            get { return session_id; }
            set { session_id = value; }
        }
        private string from_curr_cd;

        public string FROM_CURR_CD
        {
            get { return from_curr_cd; }
            set { from_curr_cd = value; }
        }

        private string to_curr_cd;

        public string TO_CURR_CD
        {
            get { return to_curr_cd; }
            set { to_curr_cd = value; }
        }
        private string exchange_rate_dd;

        public string EXCHANGE_RATE_DD
        {
            get { return exchange_rate_dd; }
            set { exchange_rate_dd = value; }
        }
        private string exchange_rate_chaque;

        public string EXCHANGE_RATE_CHAQUE
        {
            get { return exchange_rate_chaque; }
            set { exchange_rate_chaque = value; }
        }
        private string exchange_rate_card;

        public string EXCHANGE_RATE_CARD
        {
            get { return exchange_rate_card; }
            set { exchange_rate_card = value; }
        }

        private string currency_id;

        public string CURRENCY_ID
        {
            get { return currency_id; }
            set { currency_id = value; }
        }

        private string country_id;

        public string COUNTRY_ID
        {
            get { return country_id; }
            set { country_id = value; }
        }

        private string currency_rev_no;

        public string CURRENCY_REV_NO
        {
            get { return currency_rev_no; }
            set { currency_rev_no = value; }
        }
        private string currency_cd;

        public string CURRENCY_CD
        {
            get { return currency_cd; }
            set { currency_cd = value; }
        }
        private string currency_name;

        public string CURRENCY_NAME
        {
            get { return currency_name; }
            set { currency_name = value; }
        }
        private string currency_desc;

        public string CURRENCY_DESC
        {
            get { return currency_desc; }
            set { currency_desc = value; }
        }
        private string currency_symbol;

        public string CURRENCY_SYMBOL
        {
            get { return currency_symbol; }
            set { currency_symbol = value; }
        }
        private string country_name;

        public string COUNTRY_NAME
        {
            get { return country_name; }
            set { country_name = value; }
        }
        private string _po_billing;

        public string PO_BILLING
        {
            get { return _po_billing; }
            set { _po_billing = value; }
        }
        private string _DMS_UPLOAD;

        public string DMS_UPLOAD
        {
            get { return _DMS_UPLOAD; }
            set { _DMS_UPLOAD = value; }
        }
        private string exchange_rate_others;

        public string EXCHANGE_RATE_OTHERS
        {
            get { return exchange_rate_others; }
            set { exchange_rate_others = value; }
        }

    }
}
