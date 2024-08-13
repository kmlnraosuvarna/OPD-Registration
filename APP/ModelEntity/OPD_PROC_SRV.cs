using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class OPD_PROC_SRV
    {
        private int _opd_proc_srv_id;
        public int OPD_PROC_SRV_ID
        {
            set { _opd_proc_srv_id = value; }
            get { return _opd_proc_srv_id; }
        }
        private int _opd_proc_srv_rev_no;
        public int OPD_PROC_SRV_REV_NO
        {
            set { _opd_proc_srv_rev_no = value; }
            get { return _opd_proc_srv_rev_no; }
        }
        private int _opd_proc_id;
        public int OPD_PROC_ID
        {
            set { _opd_proc_id = value; }
            get { return _opd_proc_id; }
        }
        private int _opd_proc_rev_no;
        public int OPD_PROC_REV_NO
        {
            set { _opd_proc_rev_no = value; }
            get { return _opd_proc_rev_no; }
        }
        private int _service_type_id;
        public int SERVICE_TYPE_ID
        {
            set { _service_type_id = value; }
            get { return _service_type_id; }
        }
        private int _service_type_rev_no;
        public int SERVICE_TYPE_REV_NO
        {
            set { _service_type_rev_no = value; }
            get { return _service_type_rev_no; }
        }
        private int _general_service_id;
        public int GENERAL_SERVICE_ID
        {
            set { _general_service_id = value; }
            get { return _general_service_id; }
        }
        private int _general_service_rev_no;
        public int GENERAL_SERVICE_REV_NO
        {
            set { _general_service_rev_no = value; }
            get { return _general_service_rev_no; }
        }
        private int _quantity;
        public int QUANTITY
        {
            set { _quantity = value; }
            get { return _quantity; }
        }
        private int _rate;
        public int RATE
        {
            set { _rate = value; }
            get { return _rate; }
        }
        private int _amount;
        public int AMOUNT
        {
            set { _amount = value; }
            get { return _amount; }
        }
        
        private string _record_status;
        public string RECORD_STATUS
        {
            set { _record_status = value; }
            get { return _record_status; }
        }
        private int _record_sno;
        public int RECORD_SNO
        {
            set { _record_sno = value; }
            get { return _record_sno; }
        }

        private string service_type_name;
        public string SERVICE_TYPE_NAME
        {
            get { return service_type_name; }
            set { service_type_name = value; }
        }

        private string general_service_name;

        public string GENERAL_SERVICE_NAME
        {
            get { return general_service_name; }
            set { general_service_name = value; }
        }
    }
}
