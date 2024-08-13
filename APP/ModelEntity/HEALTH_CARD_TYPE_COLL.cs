using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class HEALTH_CARD_TYPE_COLL : SortableCollectionBase
    {
      public int Add(HEALTH_CARD_TYPE HCtype)
        {
            return InnerList.Add(HCtype);
        }
      public HEALTH_CARD_TYPE Getlist(int positon)
        {
            return (HEALTH_CARD_TYPE)InnerList[positon];     
        }
    }
}
