using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class LookupconfigCollection:SortableCollectionBase
    {
        public int Add(LookupconfigMaster lobj)
        {
            return List.Add(lobj);
        }
        public LookupconfigMaster GetList(int position)
        {
            return (LookupconfigMaster)InnerList[position];
        }
    }
}
