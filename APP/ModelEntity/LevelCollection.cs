using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    public class LevelCollection:SortableCollectionBase
    {
        public LevelCollection()
        {
            base.SortObjectType=typeof(ServiceLevels);
        }
        
        private int count;
        public int Count
        {
            get { return count; }
            set { count = value; }
        }
        public int Add(ListElements _element)
        {
            return List.Add(_element);
        }
        public int Add(CollectionBase _element)
        {
            return List.Add(_element);
        }

        public int Add(PriceLevels _pLvls)
        {
            return List.Add(_pLvls);
        }

        public PriceLevels GetList(int position)
        {
            return (PriceLevels)InnerList[position];
        }
        //public CollectionBase GetList(int position)
        //{
        //    return (CollectionBase)InnerList[position];
        //}

        public ServiceLevels GetServiceLevel(int position)
        {
            return (ServiceLevels)InnerList[position];
        }
    }
}
