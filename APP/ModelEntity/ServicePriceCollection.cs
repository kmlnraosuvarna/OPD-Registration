using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    public class ServicePriceCollection:CollectionBase
    {
        public ServicePriceCollection()
        {

        }

        public int Add(ServicePrice serPrice)
        {
            return List.Add(serPrice);
        }

        public ServicePrice GetList(int position)
        {
            return (ServicePrice)InnerList[position];
        }

        public CollectionBase Filter(int patClasssD)
        {
            ServicePriceCollection priceCollection = new ServicePriceCollection();
            for (int index = 0; index < InnerList.Count; index++)
            {
                ServicePrice _price = (ServicePrice)InnerList[index];
                if (_price.PATIENT_CLASS_ID == patClasssD)
                {
                    priceCollection.Add(_price);
                }
            }
            return priceCollection;
        }
    }
}
