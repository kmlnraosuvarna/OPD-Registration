using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class UMR_INCLUDES_COLL : SortableCollectionBase
    {
       
        public UMR_INCLUDES_COLL()
        {
            base.SortObjectType = typeof(UMR_LOCK_INCLUDES);
        }
        public int Add(UMR_DOC_INCLUDES obj)
        {
            return List.Add(obj);
        }
        public UMR_DOC_INCLUDES GetList(int pos)
        {
            return (UMR_DOC_INCLUDES)InnerList[pos];
        }
    }
}
