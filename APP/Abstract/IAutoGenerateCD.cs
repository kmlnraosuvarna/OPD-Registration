using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.ModelEntity;
using EzHms.BusinessObject;

namespace EzHms.Abstract
{
    public interface IAutoGenerateCD
    {
        string GetAutoGenerateCD(string tableName);
        string GetAntiBioticsAutoCD(AntiBioticsAutoCode _anitbioticsautocode, string code);
        string GetAutoReferalSourceNumber(string tableName);
    }
}
