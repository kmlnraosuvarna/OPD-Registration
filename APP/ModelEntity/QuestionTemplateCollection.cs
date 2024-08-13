using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;


namespace EzHms.ModelEntity
{
    public class QuestionTemplateCollection : SortableCollectionBase 
    {
        public int Add(QuestionTemplate deptMaster)
        {
            return List.Add(deptMaster);
        }

        public QuestionTemplate GetList(int position)
        {
            return (QuestionTemplate)InnerList[position];
        }
    }
}
