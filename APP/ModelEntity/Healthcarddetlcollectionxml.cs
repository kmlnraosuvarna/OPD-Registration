using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
   public  class Healthcarddetlcollectionxml:SortableCollectionBase
    {

       public int Add(HEALTH_CARD _objBillStmt)
        {
            return List.Add(_objBillStmt);
        }


       public HEALTH_CARD GetList(int position)
        {
            return (HEALTH_CARD)InnerList[position];
        }
    }
}
