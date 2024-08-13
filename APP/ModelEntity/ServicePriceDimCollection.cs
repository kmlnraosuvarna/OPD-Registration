using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class ServicePriceDimCollection:SortableCollectionBase
    {
        public ServicePriceDimCollection()
        { 

        }
        public int Add(ServicePriceDim _element)
        {
            return List.Add(_element);
        }

       

        public ServicePriceDim GetList(int position)
        {
            return (ServicePriceDim)InnerList[position];
        }

        
       
    }
}
