using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
    public class ServiceMapiingToLocColl :SortableCollectionBase
    {
        public int Add(ServiceMappingToLoc objlocationservices)
        {
            return List.Add(objlocationservices);
        }
        public int AddData(User_Doc_Access docAss)
        {
            return List.Add(docAss);
        }
    }
}
