using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    public class DimensionsCollection : CollectionBase 
    {
        public DimensionsCollection()
        { 
            //constructor
        }

        public int Add(ListElements _elements)
        {
            return List.Add(_elements);
        }
        public int Add(ServiceDimenssion  _dimenssions)
        {
            return List.Add(_dimenssions);
        }
    }
}
