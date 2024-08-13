using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
       [Serializable]
  public  class HC_SCHEME_Collections :CollectionBase
    {
        public int add(HC_Scheme hcd)
        {
            return InnerList.Add(hcd);
        }
        public HC_Scheme GetList(int position)
        {
            return (HC_Scheme)InnerList[position];
        }
    }
}
