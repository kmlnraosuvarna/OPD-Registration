using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class TransactionMaster
    {
        private int receipt_mode_id;

        public int RECEIPT_MODE_ID
        {
            get { return receipt_mode_id; }
            set { receipt_mode_id = value; }
        }
        private string receipt_mode;

        public string RECEIPT_MODE
        {
            get { return receipt_mode; }
            set { receipt_mode = value; }
        }
        private string amount;

        public string AMOUNT
        {
            get { return amount; }
            set { amount = value; }
        }
        private string _card_amount;
        public string CARD_AMOUNT
        {
            get { return _card_amount; }
            set { _card_amount = value; }
        }
        private string _check_dt;
        public string CHECK_DT
        {
            get { return _check_dt; }
            set { _check_dt = value; }
        }
        private string curr_name;

        public string CURR_NAME
        {
            get { return curr_name; }
            set { curr_name = value; }
        }
        private string exch_rate;

        public string EXCH_RATE
        {
            get { return exch_rate; }
            set { exch_rate = value; }
        }

        private string converted_amt;

        public string CONVERTED_AMT
        {
            get { return converted_amt; }
            set { converted_amt = value; }
        }
        private string bank_name;

        public string BANK_NAME
        {
            get { return bank_name; }
            set { bank_name = value; }
        }
        private string card_no;

        public string CARD_NO
        {
            get { return card_no; }
            set { card_no = value; }
        }
        private string auth_cd;

        public string AUTH_CODE
        {
            get { return auth_cd; }
            set { auth_cd = value; }
        }
        private string expiry_dt;

        public string EXPIRY_DT
        {
            get { return expiry_dt; }
            set { expiry_dt = value; }
        }
        private string tendered_cash;

        public string TENDERED_CASH
        {
            get { return tendered_cash; }
            set { tendered_cash = value; }
        }

        private string change;

        public string CHANGE
        {
            get { return change; }
            set { change = value; }
        }
        private string card_type;

        public string CARD_TYPE
        {
            get { return card_type; }
            set { card_type = value; }
        }
        private int bank_id;

        public int BANK_ID
        {
            get { return bank_id; }
            set { bank_id = value; }
        }

        private int card_typr_id;

        public int CARD_TYPE_ID
        {
            get { return card_typr_id; }
            set { card_typr_id = value; }
        }
        private int transaction_id;

        public int TRANSACTION_ID
        {
            get { return transaction_id; }
            set { transaction_id = value; }
        }
        private string remarks;

        public string REMARKS
        {
            get { return remarks; }
            set { remarks = value; }
        }
        private string receipt_amt;

        public string RECEIPT_AMT
        {
            get { return receipt_amt; }
            set { receipt_amt = value; }
        }
        private string _bill_no;
        public string BILL_NO
        {
            get { return _bill_no; }
            set { _bill_no = value; }
        }

        private string _bill_dt;
        public string BILL_DT
        {
            get { return _bill_dt; }
            set { _bill_dt = value; }
        }
        private string _umr_no;
        public string UMR_NO
        {
            get { return _umr_no; }
            set { _umr_no = value; }
        }
        private string _doctor_cd;
        public string DOCTOR_CD
        {
            get { return _doctor_cd; }
            set { _doctor_cd = value; }
        }
        private string _bill_amt;
        public string BILL_AMT
        {
            get { return _bill_amt; }
            set { _bill_amt = value; }
        }
        private string _due_amt;
        public string DUE_AMT
        {
            get { return _due_amt; }
            set { _due_amt = value; }
        }
        private string _cncs_amt;
        public string CNCS_AMT
        {
            get { return _cncs_amt; }
            set { _cncs_amt = value; }
        }
        private int curr_id;

        public int CURR_ID
        {
            get { return curr_id; }
            set { curr_id = value; }
        }
        private string _payment_mode_name;
        public string PAYMENT_MODE_NAME
        {
            get { return _payment_mode_name; }
            set { _payment_mode_name = value; }
        }
        private string transaction_no;

        public string TRANSACTION_NO
        {
            get { return transaction_no; }
            set { transaction_no = value; }
        }
        private string transaction_dt;

        public string TRANSACTION_DT
        {
            get { return transaction_dt; }
            set { transaction_dt = value; }
        }
        private string receipt_type;

        public string RECEIPT_TYPE
        {
            get { return receipt_type; }
            set { receipt_type = value; }
        }

        private string _patient_name;
        public string PATIENT_NAME
        {
            get { return _patient_name; }
            set { _patient_name = value; }
        }
    }
}
