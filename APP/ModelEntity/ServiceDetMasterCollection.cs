using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class ServiceDetMasterCollection : SortableCollectionBase
    {
        public int Add(ServiceMaster serviceMaster)
        {
            return List.Add(serviceMaster);
        }

        public ServiceDetMaster GetList(int position)
        {
            return (ServiceDetMaster)InnerList[position];
        }
    }
}
