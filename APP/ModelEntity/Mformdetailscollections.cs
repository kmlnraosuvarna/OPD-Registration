using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class Mformdetailscollections:SortableCollectionBase
    {
        public int Add(Mformdetails objformdetails)
        {
            return List.Add(objformdetails);
        }
        public Mformdetails GetList(int position)
        {
            return (Mformdetails)InnerList[position];
        }
    }
}
