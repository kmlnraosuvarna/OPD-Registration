using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class ServiceMasterCollection:SortableCollectionBase
    {
        public int Add(ServiceMaster serviceMaster)
        {
            return List.Add(serviceMaster);
        }

        public int Add(ListElements element)
        {
            return InnerList.Add(element);
        }

        public ServiceMaster GetList(int position)
        {
            return (ServiceMaster)InnerList[position];
        }
       
    }
}
