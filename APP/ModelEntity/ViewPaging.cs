using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class ViewPaging
    {
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

        private int _NoOfRecords;

        public int NoOfRecords
        {
            get { return _NoOfRecords; }
            set { _NoOfRecords = value; }
        }

        private int _eventFlag;
        public int EVENTFLAG
        {
            get { return _eventFlag; }
            set { _eventFlag = value; }
        }
    }
}
