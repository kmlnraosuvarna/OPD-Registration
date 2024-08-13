using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class AddressCollection : SortableCollectionBase
    {
        public int Add(Address _aUtility)
        {
            return InnerList.Add(_aUtility);
        }
        public Address this[int index]
        {
            get
            {
                return (Address)List[index];
            }
            set
            {
                List[index] = value;
            }
        }
        public object GetObject(int index)
        {
            if (InnerList.Count >= index)
                return InnerList[index];
            return null;
        }
        public Address GetList(int position)
        {
            return (Address)InnerList[position];
        }
    }
}
