using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class PriceLevels
    {
        private string _code = string.Empty;
        private string _desc = string.Empty;
        private LevelCollection _dimCollection = null;
        private int _id = 0;
        private int _price_dim_id = 0;
        private int count;
        private int _price_dim_rev_no = 0;
        private int _session_id = 0;

        public int Session_id
        {
            get { return _session_id; }
            set { _session_id = value; }
        }

        public int Price_dim_rev_no
        {
            get { return _price_dim_rev_no; }
            set { _price_dim_rev_no = value; }
        }

        public int Count
        {
            get { return count; }
            set { count = value; }
        }
        public int ID
        {
            get
            {
                return _id;
            }
            set
            {
                _id = value;
            }
        }

        public int PriceDimID
        {
            get
            {
                return _price_dim_id;
            }
            set
            {
                _price_dim_id = value;
            }
        }
        public string Description
        {
            get
            {
                return _desc;
            }
            set
            {
                _desc = value;
            }
        }
        public string Code
        {
            get
            {
                return _code;
            }
            set
            {
                _code = value;
            }

        }
        public LevelCollection Dimenssions
        {
            get
            {
                return _dimCollection;
            }
            set
            {
                _dimCollection = value;
            }
        }




        private string _service_levels = String.Empty;

        public string SERVICE_LEVELS
        {
            get { return _service_levels; }
            set { _service_levels = value; }
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
    }
}
