using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class AutoComplete
    {
        private string tableName;

        public string TableName
        {
            get { return tableName; }
            set { tableName = value; }
        }

        private string searchCondition;

        public string SearchCondition
        {
            get { return searchCondition; }
            set { searchCondition = value; }
        }
    }
}
