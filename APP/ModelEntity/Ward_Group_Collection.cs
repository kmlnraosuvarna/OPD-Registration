using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class Ward_Group_Collection : SortableCollectionBase
    {
        public int Add(WardGroup acsc)
        {
            return InnerList.Add(acsc);

        }
        public WardGroup GetList(int Position)
        {
            return (WardGroup)InnerList[Position];
        }
    }
}
