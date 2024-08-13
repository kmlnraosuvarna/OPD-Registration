using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
namespace EzHms.ModelEntity
{
    [Serializable]
    public class COUNTERMASTERCOLLECTION : SortableCollectionBase
    {


        public COUNTERMASTERCOLLECTION()
        {
            base.SortObjectType = typeof(COUNTERMASTER);
        }

        public int Add(COUNTERMASTER Cmaster)
        {
            return List.Add(Cmaster);
        }
        public COUNTERMASTER GetList(int position)
        {
            return (COUNTERMASTER)InnerList[position];
        }
      
    }
}
