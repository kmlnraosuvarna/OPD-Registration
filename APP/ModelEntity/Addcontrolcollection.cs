using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
   public  class Addcontrolcollection:CollectionBase
    {
       public int AddItems(Controlvalue_set_Modelentity csm)
       {
           return InnerList.Add(csm);
       }

    }
}
