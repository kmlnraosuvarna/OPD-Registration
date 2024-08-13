using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
namespace EzHms.ModelEntity
{
    public class MethodsCollection:CollectionBase
    {
        public int Add(Methods _antiMaster)
        {
            return List.Add(_antiMaster);
        }

        public Methods GetList(int position)
        {
            return (Methods)InnerList[position];
        }
     
    }
}
