using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class USER_LIMIT_COLL : SortableCollectionBase
    {
        public USER_LIMIT_COLL()
        {
            base.SortObjectType = typeof(USER_LIMIT);
        }

        public int Add(USER_LIMIT _bill)
        {
            return List.Add(_bill);
        }

        public USER_LIMIT GetList(int position)
        {
            return (USER_LIMIT)InnerList[position];
        }
    }
}
