using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class ServiceCollection:SortableCollectionBase
    {
        public int Add(Service bhMaster)
        {
            return List.Add(bhMaster);
        }
        public Service GetList(int position)
        {
            return (Service)InnerList[position];
        }
       
        public ServiceCollection Filter(int serviceId)
        {
            ServiceCollection _filterColl = new ServiceCollection();
            foreach(Service _srv in InnerList)
            {
                if (_srv.SERVICE_ID.Equals(serviceId))
                {
                    _filterColl.Add(_srv);
                }
            }
            return _filterColl;
        }

        public int Contains(string lvlCode)
        {
            return InnerList.BinarySearch(lvlCode, new IServiceCompare());
        }

        public int Add(OSPListElement element)
        {
            return List.Add(element);
        }
        public OSPListElement Getlist(int position)
        {
            return (OSPListElement)InnerList[position];
        }
    }

    public sealed class IServiceCompare : IComparer
    {
        #region IComparer Members

        public int  Compare(object x, object y)
        {
            Service objService = (Service)x;
            if (objService.SERVICE_CD.Contains(y.ToString()))
            {
                return 1;
            }
            return 0;
        }

        #endregion
    }

}
