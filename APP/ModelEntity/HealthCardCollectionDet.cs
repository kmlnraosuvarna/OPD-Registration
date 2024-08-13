using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    public class HealthCardCollectionDet : CollectionBase
    {
        public int add(HEALTH_CARD_DET hcd)
        {
            return InnerList.Add(hcd);
        }
        public HEALTH_CARD_DET GetList(int position)
        {
            return (HEALTH_CARD_DET)InnerList[position];
        }
    }
}
