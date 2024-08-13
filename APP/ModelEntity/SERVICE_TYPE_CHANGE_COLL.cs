using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class SERVICE_TYPE_CHANGE_COLL : SortableCollectionBase
    {
        public int Add(SERVICE_TYPE_CHANGE _stctab)
        {
            return List.Add(_stctab);
        }

        public SERVICE_TYPE_CHANGE GetList(int position)
        {
            return (SERVICE_TYPE_CHANGE)InnerList[position];
        }
    }
}
