using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
     [Serializable]
  public  class KitSterilizationColl:SortableCollectionBase
    {
       

        public int Add(Transport Trns)
        {
            return List.Add(Trns);
        }

        public Transport GetListVM(int position)
        {
            return (Transport)InnerList[position];
        }
    }
}
