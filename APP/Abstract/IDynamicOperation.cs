using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.ModelEntity;
using System.Data;
using System.Collections;

namespace EzHms.Abstract
{
    public interface IDynamicOperation
    {
        DataSet Dynamicdataset(Dynamicoperaion _objdy);
        object DynamicExecutescar(Dynamicoperaion _objdy);
        bool DynamicExecuteNonquery(Dynamicoperaion _objdy);
        //CollectionBase DynamicCollection_NEW(Dynamicoperaion _objdy);
    }
}
