using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.ModelEntity;
using EzHms.DataAccessObject;
using EzHms.BusinessObject;
using System.Collections;

namespace EzHms.Abstract
{
    public interface ILookupconfig
    {
        bool SaveLookup(LookupconfigMaster obj);
        CollectionBase GetLookupDetails(EzHms.ModelEntity.GridPaging _objpag, out int _total_records, int _lookup_id);
    }
}
