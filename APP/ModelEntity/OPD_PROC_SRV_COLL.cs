using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class OPD_PROC_SRV_COLL : SortableCollectionBase
    {
        public int Add(OPD_PROC_SRV _billh)
        {
            return List.Add(_billh);
        }

        public OPD_PROC_SRV GetList(int position)
        {
            return (OPD_PROC_SRV)InnerList[position];
        }
    }
}
