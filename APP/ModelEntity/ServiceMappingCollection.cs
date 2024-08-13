using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{

    [Serializable]
    public class ServiceMappingCollection : SortableCollectionBase
    {
        public ServiceMappingCollection()
        {

            base.SortObjectType = typeof(ServiceMapping);
        }

        public int Add(ServiceMapping _element)
        {
            return List.Add(_element);
        }

        public ServiceMapping GetList(int position)
        {
            return (ServiceMapping)InnerList[position];
        }

        public int IndexOf(string value)
        {
            for (int i = 0; i < InnerList.Count; i++)
            {
                if (((ServiceMapping)InnerList[i]).PriceDimCD == value)
                {
                    return i;
                }
            }
            return -1;
        }

        public bool Search(string lvlCode)
        {
            //return InnerList.BinarySearch(lvlCode, new IServiceMappingCompare());
            for (int i = 0; i < InnerList.Count; i++)
            {
                if (((ServiceMapping)InnerList[i]).PriceDimCD == lvlCode)
                {
                    return true;
                }
            }
            return false;
        }
        public void CopyTo(ServiceMappingCollection copyList)
        {
            //InnerList.CopyTo(copyList.InnerList.ToArray(), InnerList.Count - 1);
            InnerList.AddRange(copyList);//.CopyTo(0, copyList, InnerList.Count - 1, copyList.Count);

        }

        public ServiceMappingCollection Filter(string ServiceId)
        {
            ServiceMappingCollection filterColl = new ServiceMappingCollection();
            foreach (ServiceMapping result in InnerList)
            {
                if (result.SERVICE_ID.Equals(Convert.ToInt32(ServiceId)))
                {
                    filterColl.Add(result);
                }
            }
            return filterColl;
        }

        public ServiceMappingCollection GroupByServiceID()
        {
            ServiceMappingCollection filterColl = new ServiceMappingCollection();
            foreach (ServiceMapping result in InnerList)
            {
                if (filterColl.Contains(result.SERVICE_ID) > 0)
                {
                    filterColl.Add(result);
                }
            }
            return filterColl;
        }

        public override int Contains(object Value)
        {
            foreach (ServiceMapping result in InnerList)
            {
                if (result.SERVICE_ID.Equals(Convert.ToInt32(Value)))
                {
                    return 0;
                }
            }
            return 1;
        }
    }

    [Serializable]
    public sealed class IServiceMappingCompare : IComparer
    {
        #region IComparer Members

        public int Compare(object x, object y)
        {
            ServiceMapping objService = (ServiceMapping)x;
            return objService.PriceDimCD.CompareTo(y.ToString());
        }

        #endregion
    }
}