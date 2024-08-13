using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class RackFileEntryColl : SortableCollectionBase
    {
        public RackFileEntryColl()
        {
            base.SortObjectType = typeof(RackFileEntry);
        }
        public int Add(RackFileEntry RackFileEntry)
        {
            return List.Add(RackFileEntry);
        }

        public RackFileEntry GetList(int position)
        {
            return (RackFileEntry)InnerList[position];
        }

        private List<RackFileEntry> GetCollection()
        {
            List<RackFileEntry> recmaster = new List<RackFileEntry>();
            for (int i = 0; i < List.Count; i++)
            {
                recmaster.Add((RackFileEntry)InnerList[i]);
            }
            return recmaster;
        }

    }
}
