using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class OPD_PROC_COLL : SortableCollectionBase
    {
        public int Add(OPD_PROC _billh)
        {
            return List.Add(_billh);
        }

        public OPD_PROC GetList(int position)
        {
            return (OPD_PROC)InnerList[position];
        }
    }
}
