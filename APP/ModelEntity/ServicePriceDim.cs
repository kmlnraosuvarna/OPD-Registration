using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class ServicePriceDim
    {
        private int priceDimID;
        private int _Count;

        public int Count
        {
            get { return _Count; }
            set { _Count = value; }
        }
        public int PriceDimID
        {
            get { return priceDimID; }
            set { priceDimID = value; }
        }

        private int serviceDimID;

        public int ServiceDimID
        {
            get { return serviceDimID; }
            set { serviceDimID = value; }
        }

        private string serviceDimCD;

        public string ServiceDimCD
        {
            get { return serviceDimCD; }
            set { serviceDimCD = value; }
        }

        private string serviceDimDESC;

        public string ServiceDimDESC
        {
            get { return serviceDimDESC; }
            set { serviceDimDESC = value; }
        }
    }
}
