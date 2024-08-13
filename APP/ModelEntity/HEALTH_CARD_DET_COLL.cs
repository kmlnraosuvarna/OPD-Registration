using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class HEALTH_CARD_DET_COLL : SortableCollectionBase
    {
        public int Add(HEALTH_CARD_DET HCDet)
        {
            return InnerList.Add(HCDet);
        }
        public HEALTH_CARD_DET Getlist(int positon)
        {
            return (HEALTH_CARD_DET)InnerList[positon];
        }
    }
}
