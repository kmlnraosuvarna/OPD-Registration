using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
   [Serializable]
   public class ADT_DSCHRG_SUM_COLLECTION:SortableCollectionBase
   {
        public int Add(IpPatserviceentryParams ObjIPPatdtls)
        {
            return List.Add(ObjIPPatdtls);
        }
        public object GetObject(int position)
        {
            if (InnerList.Count > position)
                return List[position];
            return null;
        }
        public ADT_DSCHRG_SUM_COLLECTION()
        {
            base.SortObjectType = typeof(ADT_DSCHRG_SUM_COLLECTION);
        }
        public ADT_DSCHRG_SUM GetList(int position)
        {
            return (ADT_DSCHRG_SUM)InnerList[position];
        }
   }
}

