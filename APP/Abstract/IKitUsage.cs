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
    public interface IKitUsage
    {
        int SaveKitUsageDetails(Transport objmrq, out int op_count, out string op_out_cd);
      CollectionBase GetKitUsageDetails(EzHms.ModelEntity.GridPaging _objpag, out int _total_records);
      CollectionBase GetKitUsageItem(KitUsage gp);
      CollectionBase KitUsageEdit(string mrq_cncl_id, int session_id);
      CollectionBase GetKitUsageItemPartial(KitUsage gp);
      CollectionBase GetKitUsageItemPermenant(KitUsage gp);
      CollectionBase GetKitUsageItemPermenantNew(KitUsage gp);
      CollectionBase KitUsageEditNew(string mrq_cncl_id, int session_id);
      int SaveKitUsageDetailsNew(Transport objmrq, out int op_count, out string op_out_cd);

    }
}
