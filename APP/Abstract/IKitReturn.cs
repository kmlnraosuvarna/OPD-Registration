using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.ModelEntity;
using EzHms.DataAccessObject;
using EzHms.BusinessObject;
using System.Collections;

namespace EzHms.Abstract
{
   public interface IKitReturn
    {

       int SaveKitReturnDetails(KitReturn objkit, out int op_count, out string autocd);
       bool SaveKitReturnDetailsDept(KitReturn objkit, out int op_count);
       CollectionBase GetKitReturnEdit(KitReturn kr);
       CollectionBase GetKitReturnGridEdit(string kit_return_id);
       CollectionBase GetKitItemEdit(KitReturn kr);
       CollectionBase GetKitReturnChiditemEdit(int id, string flag);
       CollectionBase KitReturnItemNew(KitReturn kr);
    //   bool SaveItemReturnDetails(KitReturn objkit, out int op_count);
     //  CollectionBase GetItemReturnGridEdit(string kit_return_id);
    }
}
