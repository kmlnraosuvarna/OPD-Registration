using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    public class HealthCardSlabCollection:CollectionBase
    {
        public int add(HEALTH_CARD_TYPE_SLAB hcts)
        {
            return InnerList.Add(hcts);
        }
        public HEALTH_CARD_TYPE_SLAB GetList(int position)
        {
            return (HEALTH_CARD_TYPE_SLAB)InnerList[position];
        }
    }
}
