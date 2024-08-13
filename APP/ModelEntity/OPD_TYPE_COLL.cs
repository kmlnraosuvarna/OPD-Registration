using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class OPD_TYPE_COLL : SortableCollectionBase
    {
        public int Add(OPD_TYPE _billh)
        {
            return List.Add(_billh);
        }

        public OPD_TYPE GetList(int position)
        {
            return (OPD_TYPE)InnerList[position];
        }
    }
}
