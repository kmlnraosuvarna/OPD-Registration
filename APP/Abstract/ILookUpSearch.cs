
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
using EzHms.ModelEntity;
namespace EzHms.Abstract
{
    public interface ILookUpSearch
    {
        CollectionBase GetLookUpSearchData(LookUpSearch _lookUPSearch, out int _total_records);        
    }
}
