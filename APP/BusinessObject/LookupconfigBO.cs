using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.ModelEntity;
using EzHms.DataAccessObject;
using System.Collections;

namespace EzHms.BusinessObject
{
    public class LookupconfigBO
    {
        DBLookupConfig objdb = new DBLookupConfig();

        public bool SaveLookup(LookupconfigMaster obj)
        {
            return objdb.SaveLookup(obj);
        }

        public CollectionBase GetLookupDetails(EzHms.ModelEntity.GridPaging _objpag, out int _total_records, int _lookup_id)
        {
            return objdb.GetLookupDetails(_objpag, out _total_records, _lookup_id); 
        }


    }
}
