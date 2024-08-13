using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
   public class KitReturnColl:SortableCollectionBase
    {
        public int Add(KitReturn Cssd)
        {
            return List.Add(Cssd);
        }
        public KitReturn GetListCssd(int position)
        {
            return (KitReturn)InnerList[position];
        }
        public KitReturn GetListKit(int position)
        {
            return (KitReturn)InnerList[position];
        }
       
    }
}
