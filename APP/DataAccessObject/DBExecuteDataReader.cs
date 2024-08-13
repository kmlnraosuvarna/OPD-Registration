using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
using System.Data;

namespace EzHms.DataAccessObject
{
    public abstract class DBExecuteDataReader : IGenerateReaderCollection
    {
        protected  abstract CollectionBase GenerateCollection(IDataReader returnData);        
    }
}
