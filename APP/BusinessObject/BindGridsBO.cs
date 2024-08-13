using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.DataAccessObject;
using System.Collections;
using EzHms.ModelEntity;
namespace EzHms.BusinessObject
{
    public class BindGridsBO
    {
        public CollectionBase BindGetGrid(GridPaging _gPage, out int _total_records)
        {
            DBBindGrids _spec = new DBBindGrids();
            return _spec.BindGetGrid(_gPage, out _total_records);
        }
        //public CollectionBase BindGrid(GridPaging _gPage, out int _total_records)
        //{
        //    DBBindGrids _spec = new DBBindGrids();
        //    return _spec.BindGrid(_gPage, out _total_records);
        //}
    }
}
