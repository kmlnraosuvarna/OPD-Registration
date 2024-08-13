using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.ModelEntity;
using System.Collections;
using System.IO;
using System.Data.SqlTypes;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using System.Data;

namespace EzHms.DataAccessObject
{
    public class DBHCSCHEME_RULE : DBExecuteDataReader
    {
        public CollectionBase Get_Rule(HC_Scheme hc)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_HC_SCHEME_RULE");

                dBase.AddInParameter(dCmd, "@IP_SCHEME_ID", DbType.Int32, hc.SCHEME_ID);
                IGenerateReaderCollection.GenerateCollectionReader sqlData = new IGenerateReaderCollection.GenerateCollectionReader(Get_Rule_Coll);
                return dbLayer.ExecuteReaderCommand(dCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Rule").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        private CollectionBase Get_Rule_Coll(IDataReader returnData)
        {
            try
            {
                HC_SCHEME_RULE_COLL SRColl = new HC_SCHEME_RULE_COLL();
                HC_SCHEME_RULE SRule;
                while (returnData.Read())
                {
                    SRule = new HC_SCHEME_RULE();
                    SRule.CNCSN_RULE_ID = returnData["CNCSN_RULE_ID"].ToString();
                    SRule.SCHEME_RULE_ID = returnData["SCHEME_RULE_ID"].ToString();
                    SRule.SCHEME_RULE_REV_NO = returnData["SCHEME_RULE_REV_NO"].ToString();
                    SRule.SCHEME_ID = returnData["SCHEME_ID"].ToString();
                    SRule.SCHEME_NAME = returnData["SCHEME_NAME"].ToString();
                    SRule.CNCSN_RULE_CODE = returnData["CNCSN_RULE_CD"].ToString();
                    SRule.CNCSN_RULE_NAME = returnData["CNCSN_RULE_NAME"].ToString();
                    SRColl.add(SRule);
                }
                return SRColl;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetStaff_DependentColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }

        protected override CollectionBase GenerateCollection(IDataReader returnData)
        {
            throw new NotImplementedException();
        }
    }
}
