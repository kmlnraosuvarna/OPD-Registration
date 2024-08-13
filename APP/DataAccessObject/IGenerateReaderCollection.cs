using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Collections;
namespace EzHms.DataAccessObject
{
    public abstract class IGenerateReaderCollection
    {
       public delegate CollectionBase GenerateCollectionReader(IDataReader returnData);
       public delegate CollectionBase GenerateCollectonList(IDataReader returnData, IList _list);
    }
}
