using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class ServiceGroupCollection:SortableCollectionBase 
    {
        public ServiceGroupCollection()
        {
            base.SortObjectType = typeof(ServiceGroup);
        }
        public int Add(ServiceGroup SGMASTER)
        {
            return List.Add(SGMASTER);
        }

        public ServiceGroup GetList(int position)
        {
            return (ServiceGroup)InnerList[position];
        }
    }
}
