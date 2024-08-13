using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    public class HealthCardClass : CollectionBase
    {
        public int add(HEALTH_CARD hlthtype)
        {
            return InnerList.Add(hlthtype);
        }
        public HEALTH_CARD GetList(int position)
        {
            return (HEALTH_CARD)InnerList[position];
        }
    }
}
