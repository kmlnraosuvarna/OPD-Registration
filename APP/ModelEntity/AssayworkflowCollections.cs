using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class AssayworkflowCollections:SortableCollectionBase
    {
        public int Add(Assayworkflow objworkflow)
        {
            return InnerList.Add(objworkflow);
        }
        public AssayworkflowCollections()
        {
            base.SortObjectType = typeof(Assayworkflow);
        }
        public Assayworkflow GetList(int position)
        {
            return (Assayworkflow)InnerList[position];
        }
    }
}
