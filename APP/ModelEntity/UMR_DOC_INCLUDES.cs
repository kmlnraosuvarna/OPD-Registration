using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class UMR_DOC_INCLUDES
    {
        private int _umr_doc_inc_id = 0;

        public int UMR_DOC_INC_ID
        {
            get { return _umr_doc_inc_id; }
            set { _umr_doc_inc_id = value; }
        }

        private int _umr_doc_inc_rev_no = 0;
        public int UMR_DOC_INC_REV_NO
        {
            get { return _umr_doc_inc_rev_no; }
            set { _umr_doc_inc_rev_no = value; }
        }


        private int _doc_id = 0;
        public int DOC_ID
        {
            get { return _doc_id; }
            set { _doc_id = value; }
        }

        private int _include_doc_id = 0;
        public int INCLUDE_DOC_ID
        {
            get { return _include_doc_id; }
            set { _include_doc_id = value; }
        }

        private UMR_INCLUDES_COLL _umr_incudes_coll;

        public UMR_INCLUDES_COLL UMR_INCLUDES
        {
            get { return _umr_incudes_coll; }
            set { _umr_incudes_coll = value; }
        }
        public string XML { get; set; }
        public string SESSION_ID { get; set; }
    }
}
