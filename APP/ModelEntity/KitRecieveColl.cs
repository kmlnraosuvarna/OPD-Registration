using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
   public class KitRecieveColl:SortableCollectionBase
    {
        public int Add(KitRecieve KitRecieve)
        {
            return List.Add(KitRecieve);
        }

        public KitRecieve GetListKitRecieve(int position)
        {
            return (KitRecieve)InnerList[position];
        }

    }
}
