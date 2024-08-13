using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class CurrencySettingCollections : SortableCollectionBase
    {
        public int Add(CurrencySettings curr)
        {
            return InnerList.Add(curr);
        }
        public CurrencySettings Getlist(int position)
        {
            return (CurrencySettings)InnerList[position];
        }
        public CurrencySettingCollections()
        {
            base.SortObjectType = typeof(CurrencySettings);
        }
    }
}
