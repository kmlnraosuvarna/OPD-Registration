using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;

namespace EzHms.ModelEntity
{
    [Serializable]
   public class Parameters
    {
        private string _parameter_name = string.Empty;
        private string parameter_value = string.Empty;
        private DbType dbtype;
        public DbType Dbtype
        {
            get
            { 
                return dbtype;
            }
            set
            { 
                dbtype = value; 
            }
        }

        public string Parameter_name
        {
            get
            { 
                return _parameter_name;
            }
            set
            {
                _parameter_name = value;
            }
        }
      

        public string Parameter_value
        {
            get 
            { 
                return parameter_value;
            }
            set
            {
                parameter_value = value;
            }
        }
    }
}
