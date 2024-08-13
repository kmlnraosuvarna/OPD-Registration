using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class RegTypeMaterColl : SortableCollectionBase
    {
        public int Add(RegTypeMaster RegType)
        {
            return List.Add(RegType);
        }
        public RegTypeMaster GetList(int position)
        {
            return (RegTypeMaster)InnerList[position];
        }
    }
}
