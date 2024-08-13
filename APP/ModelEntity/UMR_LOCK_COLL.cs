using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class UMR_LOCK_COLL : SortableCollectionBase
    {
        public int Add(UMR_LOCK _bill)
        {
            return List.Add(_bill);
        }

        public UMR_LOCK GetList(int position)
        {
            return (UMR_LOCK)InnerList[position];
        }
    }
}
