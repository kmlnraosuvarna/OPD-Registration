using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    public class OrganizationMasterCollection:CollectionBase 
    {
        public int Add(OrganizationMaster orgMaster)
        {
            return List.Add(orgMaster);
        }

        public OrganizationMaster GetList(int position)
        {
            return (OrganizationMaster)InnerList[position];
        }
    }
}
