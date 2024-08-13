using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class PriceLevelCollection:SortableCollectionBase
    {
        public PriceLevelCollection()
        {
            this.SortObjectType = typeof(PriceLevels);
        }

        public int Add(PriceLevels pLevels)
        {
            return List.Add(pLevels);
        }

        public PriceLevels GetList(int position)
        {
            return (PriceLevels)InnerList[position];
        }
    }
}
