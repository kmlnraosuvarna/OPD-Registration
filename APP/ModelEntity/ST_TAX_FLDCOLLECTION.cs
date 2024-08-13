using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class ST_TAX_FLDCOLLECTION:SortableCollectionBase
    {
        public int Add(ST_TAX_FLD fldMaster)
        {
            return List.Add(fldMaster);
        }
        public ST_TAX_FLDCOLLECTION GetList(int position)
        {
            return (ST_TAX_FLDCOLLECTION)InnerList[position];
        }
    }
}
