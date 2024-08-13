using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.ModelEntity;
namespace EzHms.ModelEntity
{
    [Serializable]
    public class FinancialWorkFlowCollection :SortableCollectionBase
    {
         public int Add(FinancialWorkFlow objworkflow)
        {
            return InnerList.Add(objworkflow);
        }
         public FinancialWorkFlowCollection()
        {
            base.SortObjectType = typeof(FinancialWorkFlow);
        }
         public FinancialWorkFlow GetList(int position)
        {
            return (FinancialWorkFlow)InnerList[position];
        }
    }
}
