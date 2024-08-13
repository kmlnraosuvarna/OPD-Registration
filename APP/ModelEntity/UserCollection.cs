using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
    [Serializable]
   public  class UserCollection:SortableCollectionBase
    {
       public int Add(UsersUtility userUtill)
       {
           return List.Add(userUtill);
       }
       public UsersUtility GetList(int position)
       {
           return (UsersUtility)InnerList[position];
       }
       public UserCollection()
        {
            base.SortObjectType = typeof(UsersUtility);
        }
    }
}
