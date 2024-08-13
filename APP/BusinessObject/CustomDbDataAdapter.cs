#region Comments
// ClassName    : DynamicMastersBO
// Description  : Using this class we are creating our own custom DbDatabAdapter.
// Author       : Naga Sankar J
// DateCreated  : 29/12/2009
// Modified By  :
// DateModified :
#endregion

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.Common;

namespace EzHms.BusinessObject
{
    #region CustomDbDataAdapter
    class CustomDbDataAdapter : DbDataAdapter, IDbDataAdapter
    {
        public CustomDbDataAdapter()
        {

        }
    } 
    #endregion
}
