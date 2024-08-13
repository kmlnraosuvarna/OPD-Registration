
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class RackMasterColl : SortableCollectionBase
    {
        public RackMasterColl()
        {
            base.SortObjectType = typeof(RackMaster);
        }
        public int Add(RackMaster RacMaster)
        {
            return List.Add(RacMaster);
        }

        public RackMaster GetList(int position)
        {
            return (RackMaster)InnerList[position];
        }
        
        private List<RackMaster> GetCollection()
        {
            List<RackMaster> recmaster = new List<RackMaster>();
            for (int i = 0; i < List.Count; i++)
            {
                recmaster.Add((RackMaster)InnerList[i]);
            }
            return recmaster;
        }

        
    }
}
