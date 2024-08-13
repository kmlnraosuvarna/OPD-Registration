using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
namespace EzHms.ModelEntity
{
    public class ConsultationTypeCollection:SortableCollectionBase
    {
        public int Add(ConsultationTypeMaster consltypeMaster)
        {
            return List.Add(consltypeMaster);
        }

        public ConsultationTypeMaster GetList(int position)
        {
            return (ConsultationTypeMaster)InnerList[position];
        }

        public string GetValuesAsString()
        {
            StringBuilder values = new StringBuilder();
            for (int index = 0; index < InnerList.Count; index++)
            {
                values.Append(((ConsultationTypeMaster)InnerList[index]).ConsultationType_ID.ToString());
                values.Append(",");
            }
            return values.ToString().Substring(0, values.Length - 1);
        }
    }
}
