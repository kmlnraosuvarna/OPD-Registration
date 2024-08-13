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
  public  interface IKitRecieve
    {
      bool SaveKitRecieveDetails(KitRecieve objmrq, out int op_count);
      CollectionBase GetKitRecieveEdit(string mrq_cncl_id, int session_id);
      CollectionBase KitRecieveItem(KitRecieve gp);
      CollectionBase GetAllKitRecieveDetails(EzHms.ModelEntity.GridPaging _objpag, out int _total_records);
      int SaveEMSItemRecieveDetails(KitRecieve objmrq, out int op_count,out string op_out_cd);

      CollectionBase GetEMSItemRecieveEdit(string mrq_cncl_id, int session_id);
      CollectionBase GetEMSRecieveItem(KitRecieve gp);
      CollectionBase GetAllEMSItemRecieveDetails(EzHms.ModelEntity.GridPaging _objpag, out int _total_records);
    }
}
