using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class WardMasterCollection:SortableCollectionBase
    {
        public int Add(WardMaster _usreLoginInfo)
        {
            return List.Add(_usreLoginInfo);
        }
        public WardMaster GetList(int position)
        {
            return (WardMaster)InnerList[position];
        }

    }
}
