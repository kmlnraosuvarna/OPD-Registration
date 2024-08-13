using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class Eventformcollection : SortableCollectionBase
    {
        public int Add(Eventform admn)
        {
            return List.Add(admn);
        }
        public Eventform Getlist(int position)
        {
            return (Eventform)InnerList[position];
        }
    }
}
