using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
   public class KitRequestColl:SortableCollectionBase
    {
        public int Add(KitRequest Trns)
        {
            return List.Add(Trns);
        }

        public KitRequest GetListTrns(int position)
        {
            return (KitRequest)InnerList[position];
        }
    }
}
