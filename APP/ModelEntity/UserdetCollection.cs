using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
   public class UserdetCollection :CollectionBase
    {
       public int Add(Changepwd _changepwd)
       {
           return List.Add(_changepwd);
       }
       public Changepwd GetList(int position)
       {
           return (Changepwd)InnerList[position];

       }

    }
}
