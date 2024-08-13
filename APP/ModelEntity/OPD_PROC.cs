using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class OPD_PROC:OPD_PROC_SRV
    {

        private int _frequency_days;
        public int FREQUENCY_DAYS
        {
            set { _frequency_days = value; }
            get { return _frequency_days; }
        }

        private int _no_of_sittings;
        public int NO_OF_SITTINGS
        {
            set { _no_of_sittings = value; }
            get { return _no_of_sittings; }
        }

        private string _price;
        public string PRICE
        {
            set { _price = value; }
            get { return _price; }
        }

        private string _prefix;
        public string PREFIX
        {
            set { _prefix = value; }
            get { return _prefix; }
        }

        private int _service_id;
        public int SERVICE_ID
        {
            set { _service_id = value; }
            get { return _service_id; }
        }
        private int _service_rev_no;
        public int SERVICE_REV_NO
        {
            set { _service_rev_no = value; }
            get { return _service_rev_no; }
        }

        private string service_name;
        public string SERVICE_NAME
        {
            get { return service_name; }
            set { service_name = value; }
        }

        private CollectionBase opd_proc_coll;
        public CollectionBase OPD_PROC_COLL
        {
            get { return opd_proc_coll; }
            set { opd_proc_coll = value; }
        }

        private int proc_count;
        public int PROC_COUNT
        {
            get { return proc_count; }
            set { proc_count = value; }
        }

        private float net_amount;
        public float NET_AMOUNT
        {
            get { return net_amount; }
            set { net_amount = value; }
        }

        private float concession_amount;
        public float CONCESSION_AMOUNT
        {
            get { return concession_amount; }
            set { concession_amount = value; }
        }
    }
}
