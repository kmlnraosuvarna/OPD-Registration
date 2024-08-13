using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{

        [Serializable]
        public class CounterUserColl : SortableCollectionBase
        {
            public int Add(CounterUser countuser)
            {
                return List.Add(countuser);
            }

            public CounterUser GetList(int position)
            {
                return (CounterUser)InnerList[position];
            }
        }
    

}
