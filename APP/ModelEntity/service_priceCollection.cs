using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections.ObjectModel;
using System.Collections;


namespace EzHms.ModelEntity
{
  [Serializable]
   public class service_priceCollection:SortableCollectionBase
    {

      public int Add(Service_PriceModel serviceMaster)
        {
            return List.Add(serviceMaster);
      
        }
      public service_priceCollection()
        {
            base.SortObjectType = typeof(Service_PriceModel);
        }

      public Service_PriceModel GetList(int position)
        {
            return (Service_PriceModel)InnerList[position];
        }
    }
}
