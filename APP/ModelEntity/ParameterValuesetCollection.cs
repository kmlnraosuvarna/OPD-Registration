using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
namespace EzHms.ModelEntity
{
    [Serializable]
    public class ParameterValuesetCollection : SortableCollectionBase
    {
        public int Add(Parameter_Valueset _antiMaster)
        {
            return List.Add(_antiMaster);
        }

        public Parameter_Valueset GetList(int position)
        {
            return (Parameter_Valueset)InnerList[position];
        }
    }
}
