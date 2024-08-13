using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public  class TARIFF_SERVICE_COLL:SortableCollectionBase
    {

        public TARIFF_SERVICE GetList(int position)
        {
            return (TARIFF_SERVICE)InnerList[position];
        }

        public int Add(TARIFF_SERVICE _objModel)
        {
            return List.Add(_objModel);
        }
    }
}
