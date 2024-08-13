using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
  public  class UserLoginInfoCollection:SortableCollectionBase
    {
      public int Add(UserLogingInfo _usreLoginInfo)
      {
          return List.Add(_usreLoginInfo);
      }
      public UserLogingInfo GetList(int position)
      {
          return (UserLogingInfo) InnerList[position];
      }
      public UserLoginInfoCollection()
        {
            base.SortObjectType = typeof(UserLogingInfo);
        }

  }
}
