using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    public class HealthCardCollection : CollectionBase
    {
        public int add(HEALTH_CARD_TYPE hlthtype)
        {
            return InnerList.Add(hlthtype);
        }
        public HEALTH_CARD_TYPE GetList(int position)
        {
            return (HEALTH_CARD_TYPE)InnerList[position];
        }
    }
}
