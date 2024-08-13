using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace EzHms.ModelEntity
{
   public class UserAuditCollection:SortableCollectionBase
    {
       public int Add(UserAudit uAudit)
       {
           return List.Add(uAudit);
       }
       public UserAudit GetList(int Position)
       {
           return (UserAudit)InnerList[Position];
       }
    }
}
