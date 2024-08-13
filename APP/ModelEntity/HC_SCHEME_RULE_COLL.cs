using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class HC_SCHEME_RULE_COLL : CollectionBase
    {
      public int add(HC_SCHEME_RULE hcd)
        {
            return InnerList.Add(hcd);
        }
      public HC_SCHEME_RULE GetList(int position)
        {
            return (HC_SCHEME_RULE)InnerList[position];
        }
    }
}
