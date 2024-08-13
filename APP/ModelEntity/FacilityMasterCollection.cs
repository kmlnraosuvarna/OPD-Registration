using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    public class FacilityMasterCollection:CollectionBase
    {
        public int Add(FacilityMaster facMaster)
        {
            return List.Add(facMaster);
        }

        public FacilityMaster GetList(int position)
        {
            return (FacilityMaster)InnerList[position];
        }
    }
}
