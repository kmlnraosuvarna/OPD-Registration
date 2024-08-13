using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoGenDAL = EzHms.DataAccessObject.DBAutoGenerateCD;
using EzHms.DataAccessObject;
using EzHms.ModelEntity;

namespace EzHms.BusinessObject
{
    public class AutoGenerateCDBO
    {
        public string GetAutoGenerateCD(string tablename)
        {
            AutoGenDAL autoDAL = new AutoGenDAL();
            return autoDAL.GetAutoGenerateCD(tablename);

        }
        public string GetAnitBioticsAutoCD(AntiBioticsAutoCode _antibioticsCode, string code)
        {
            AutoGenDAL autoDAL = new AutoGenDAL();
            return autoDAL.GetAntiBoiticsAutoCD(_antibioticsCode, code);
        }

        public string GetAutoReferalSourceNumber(string tablename)
        {
            AutoGenDAL autoDAL = new AutoGenDAL();
            return autoDAL.GetAutoReferalSourceNumber(tablename);

        }
    }
}
