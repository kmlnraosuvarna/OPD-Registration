using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
using EzHms.ModelEntity;

namespace EzHms.Abstract
{
    public interface IBindGrids
    {
        CollectionBase BindGetGrid(GridPaging _gPage, out int _total_records);
    }
}
