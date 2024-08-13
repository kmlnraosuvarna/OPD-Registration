using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class LocationCollection:CollectionBase 
    {
        public int Add(Locations locMaster)
        {
            return List.Add(locMaster);
        }

        public Locations GetList(int position)
        {
            return (Locations)InnerList[position];
        }
    }
}
