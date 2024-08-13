using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
   public class WRD_GRP_SRV_PRICE_INC
    {
        private int _SETUP_ID;
        public int SETUP_ID
        {
            get { return _SETUP_ID; }
            set { _SETUP_ID = value; }
        }
        private int _SETUP_REV_NO;
        public int SETUP_REV_NO
        {
            get { return _SETUP_REV_NO; }
            set { _SETUP_REV_NO = value; }
        }
        private int _FROM_TARIFF_ID;

        public int FROM_TARIFF_ID
        {
            get { return _FROM_TARIFF_ID; }
            set { _FROM_TARIFF_ID = value; }
        }
        private int _FROM_WARD_GROUP_ID;

        public int FROM_WARD_GROUP_ID
        {
            get { return _FROM_WARD_GROUP_ID; }
            set { _FROM_WARD_GROUP_ID = value; }
        }
        private int _TO_TARIFF_ID;

        public int TO_TARIFF_ID
        {
            get { return _TO_TARIFF_ID; }
            set { _TO_TARIFF_ID = value; }
        }
        private int _TO_WARD_GROUP_ID;

        public int TO_WARD_GROUP_ID
        {
            get { return _TO_WARD_GROUP_ID; }
            set { _TO_WARD_GROUP_ID = value; }
        }
        private int _SETUP_DET_ID;

        public int SETUP_DET_ID
        {
            get { return _SETUP_DET_ID; }
            set { _SETUP_DET_ID = value; }
        }
        private int _SETUP_DET_REV_NO;

        public int SETUP_DET_REV_NO
        {
            get { return _SETUP_DET_REV_NO; }
            set { _SETUP_DET_REV_NO = value; }
        }
       private int SETUP_ID INT;
    }
}
