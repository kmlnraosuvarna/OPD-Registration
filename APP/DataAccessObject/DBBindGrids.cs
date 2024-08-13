using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using System.Data;
using SPNames = EzHms.ModelEntity.StoreProceduresNames;
using EzHms.ModelEntity;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
namespace EzHms.DataAccessObject
{
    public class DBBindGrids : DBExecuteDataReader
    {
        DataAccessLayer dbLayer = null; 
        Database dBase = null;
        DbCommand dCmd = null;
        protected override System.Collections.CollectionBase GenerateCollection(System.Data.IDataReader returnData)
        {
            throw new NotImplementedException();
        }
        //public CollectionBase BindGrid(GridPaging gpage, out int count)
        //{
        //    // total_record = 0;
        //    count = 0;
        //    try
        //    {
        //        dbLayer = new DataAccessLayer();
        //        dBase = dbLayer.DBaseFactory;
        //        dCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, gpage.PROCNAME);
        //        if (!string.IsNullOrEmpty(gpage.FROM_DATE))
        //            dBase.AddInParameter(dCmd, DALConstants.FROM_DATE_PARAM, DbType.String, gpage.FROM_DATE);
        //        if (!string.IsNullOrEmpty(gpage.TO_DATE))
        //            dBase.AddInParameter(dCmd, DALConstants.TO_DATE_PARAM, DbType.String, gpage.TO_DATE);
        //        if (!string.IsNullOrEmpty(gpage.FROM_DT))
        //            dBase.AddInParameter(dCmd, "@IP_FROM_DT", DbType.String, gpage.FROM_DT);
        //        if (!string.IsNullOrEmpty(gpage.TO_DT))
        //            dBase.AddInParameter(dCmd, "@IP_TO_DT", DbType.String, gpage.TO_DT);
        //        if (!string.IsNullOrEmpty(gpage.COLUMN_NAME))
        //            dBase.AddInParameter(dCmd, DALConstants.COLUMN_NAME_PARAM, DbType.String, gpage.COLUMN_NAME);
        //        if (!string.IsNullOrEmpty(gpage.PREFIX_TEXT))
        //            dBase.AddInParameter(dCmd, DALConstants.PREFIX_TEXT_PARM, DbType.String, gpage.PREFIX_TEXT);
        //        if (gpage.CURRENT_PAGE != null && gpage.CURRENT_PAGE != 0)
        //            dBase.AddInParameter(dCmd, DALConstants.CURRENT_PAGE_PARM, DbType.String, gpage.CURRENT_PAGE);
        //        if (gpage.PAGE_SIZE != null && gpage.PAGE_SIZE != 0)
        //            dBase.AddInParameter(dCmd, DALConstants.PAGE_SIZE_PARM, DbType.String, gpage.PAGE_SIZE);
        //        if (!string.IsNullOrEmpty(gpage.ADVANCESEARCH))
        //            dBase.AddInParameter(dCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, gpage.ADVANCESEARCH);
        //        if (gpage.GRIDPAGENAME != "PASLookUP")
        //        {
        //            dBase.AddInParameter(dCmd, "@IP_COUNT", DbType.Int32, gpage.EVENTFLAG);
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("BindGetGrid").Name;
        //        ErrorLoger.InsertErrorLogger(ex, 100, 1);
        //    }
        //    return null;
        //}
        public CollectionBase BindGetGrid(GridPaging gpage, out int count)
        {
            // total_record = 0;
            count = 0;
            try
            {
                dbLayer = new DataAccessLayer();
                dBase = dbLayer.DBaseFactory;
                dCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, gpage.PROCNAME);
                if (!string.IsNullOrEmpty(gpage.FROM_DATE))
                    dBase.AddInParameter(dCmd, DALConstants.FROM_DATE_PARAM, DbType.String, gpage.FROM_DATE);
                if (!string.IsNullOrEmpty(gpage.TO_DATE))
                    dBase.AddInParameter(dCmd, DALConstants.TO_DATE_PARAM, DbType.String, gpage.TO_DATE);
                if (!string.IsNullOrEmpty(gpage.FROM_DT))
                    dBase.AddInParameter(dCmd, "@IP_FROM_DT", DbType.String, gpage.FROM_DT);
                if (!string.IsNullOrEmpty(gpage.TO_DT))
                    dBase.AddInParameter(dCmd, "@IP_TO_DT", DbType.String, gpage.TO_DT);
                if (!string.IsNullOrEmpty(gpage.COLUMN_NAME))
                    dBase.AddInParameter(dCmd, DALConstants.COLUMN_NAME_PARAM, DbType.String, gpage.COLUMN_NAME);
                if (!string.IsNullOrEmpty(gpage.PREFIX_TEXT))
                    dBase.AddInParameter(dCmd, DALConstants.PREFIX_TEXT_PARM, DbType.String, gpage.PREFIX_TEXT);
                if (gpage.CURRENT_PAGE != null && gpage.CURRENT_PAGE != 0)
                    dBase.AddInParameter(dCmd, DALConstants.CURRENT_PAGE_PARM, DbType.String, gpage.CURRENT_PAGE);
                if (gpage.PAGE_SIZE != null && gpage.PAGE_SIZE != 0)
                    dBase.AddInParameter(dCmd, DALConstants.PAGE_SIZE_PARM, DbType.String, gpage.PAGE_SIZE);
                if (!string.IsNullOrEmpty(gpage.ADVANCESEARCH))
                    dBase.AddInParameter(dCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, gpage.ADVANCESEARCH);
                if (!string.IsNullOrEmpty(gpage.TRAN_TYPE_ID))
                    dBase.AddInParameter(dCmd, "@IP_TEMPLATE_TYPE_ID", DbType.String, gpage.TRAN_TYPE_ID);
                if (!string.IsNullOrEmpty(gpage.UMR_NO))
                    dBase.AddInParameter(dCmd, "@IP_UMR_NO", DbType.String, gpage.UMR_NO);
                if (gpage.BILL_ASSESMENT_ID != null && gpage.BILL_ASSESMENT_ID != 0)
                    dBase.AddInParameter(dCmd, "@IP_BILL_ASSESMENT_ID", DbType.Int32, gpage.BILL_ASSESMENT_ID);
                if (!string.IsNullOrEmpty(gpage.FILTERED_BY))
                    dBase.AddInParameter(dCmd, "@FILTERED_BY", DbType.String, gpage.FILTERED_BY);
                if (gpage.GRIDPAGENAME != "PASLookUP")
                {
                    dBase.AddInParameter(dCmd, "@IP_COUNT", DbType.Int32, gpage.EVENTFLAG);
                }
                /*if (gpage.GRIDPAGENAME != "PASLookUP")
                {
                    dBase.AddOutParameter(dCmd, DALConstants.OUTPUT_PARM, DbType.Int32, total_record);
                }*/
                if (gpage.DAYS > 0)
                    dBase.AddInParameter(dCmd, "@IP_DAYS", DbType.Int32, gpage.DAYS);

                if (!string.IsNullOrEmpty(gpage.FLAG))
                    dBase.AddInParameter(dCmd, DALConstants.IP_FLAG_PARM, DbType.String, gpage.FLAG);
                if (!string.IsNullOrEmpty(gpage.FLAG1))
                    dBase.AddInParameter(dCmd, "@IP_FLAG2", DbType.String, gpage.FLAG1);
                switch (gpage.GRIDPAGENAME)
                {
                    case "PRE-REG":/*if any new parameters required please add here*/
                        {
                            dBase.AddInParameter(dCmd, "@IP_PRE_REG_SOURCE_ID", DbType.String, gpage.FLAG);
                            break;
                        }
                    case "WardWiseServiceEntry":
                        {
                            dBase.AddInParameter(dCmd, "@IP_WARD_AUTO_CHRG_ID", DbType.String, gpage.WARD_AUTO_CHRG_ID);
                            break;
                        }
                    case "HIC":
                        {

                            if (!string.IsNullOrEmpty(gpage.TRAN_TYPE_ID))
                                dBase.AddInParameter(dCmd, "@IP_TRAN_TYPE_ID", DbType.Int32, gpage.TRAN_TYPE_ID);
                            if (!string.IsNullOrEmpty(gpage.COLUMN_NAME1))
                                dBase.AddInParameter(dCmd, "@IP_DATE_FLAG", DbType.String, gpage.COLUMN_NAME1);
                            if (!string.IsNullOrEmpty(gpage.VACCINATION_TRN_ID))
                                dBase.AddInParameter(dCmd, "@IP_VACCINATION_TRN_ID", DbType.Int32, gpage.VACCINATION_TRN_ID);
                            if (!string.IsNullOrEmpty(gpage.PC_REQ_ID))
                                dBase.AddInParameter(dCmd, "@IP_PC_REQ_ID", DbType.Int32, gpage.PC_REQ_ID);
                            if (!string.IsNullOrEmpty(gpage.PC_REQ_SOURCE_ID))
                                dBase.AddInParameter(dCmd, "@IP_PC_REQ_SOURCE_ID", DbType.Int32, gpage.PC_REQ_SOURCE_ID);
                            if (!string.IsNullOrEmpty(gpage.ENTITY_ID))
                                dBase.AddInParameter(dCmd, "@IP_ENTITY_ID", DbType.Int32, gpage.ENTITY_ID);
                            if (!string.IsNullOrEmpty(gpage.PC_SCH_ID))
                                dBase.AddInParameter(dCmd, "@IP_PC_SCH_ID", DbType.Int32, gpage.PC_SCH_ID);
                            if (!string.IsNullOrEmpty(gpage.HC_SCH_REQ_ID))
                                dBase.AddInParameter(dCmd, "@IP_HC_SCH_REQ_ID", DbType.Int32, gpage.HC_SCH_REQ_ID);
                            if (!string.IsNullOrEmpty(gpage.EMP_VACCINATION_ID))
                                dBase.AddInParameter(dCmd, "@IP_EMP_VACCINATION_ID", DbType.Int32, gpage.EMP_VACCINATION_ID);
                            if (!string.IsNullOrEmpty(gpage.EMP_HC_ID))
                                dBase.AddInParameter(dCmd, "@IP_EMP_HC_ID", DbType.Int32, gpage.EMP_HC_ID);
                            if (!string.IsNullOrEmpty(gpage.HC_SCH_ID))
                                dBase.AddInParameter(dCmd, "@IP_HC_SCH_ID", DbType.Int32, gpage.HC_SCH_ID);
                            if (!string.IsNullOrEmpty(gpage.PC_SCH_REQ_ID))
                                dBase.AddInParameter(dCmd, "@IP_PC_SCH_REQ_ID", DbType.Int32, gpage.PC_SCH_REQ_ID);
                            if (!string.IsNullOrEmpty(gpage.PC_TEMPLATE_ID))
                                dBase.AddInParameter(dCmd, "@IP_PC_TEMPLATE_ID", DbType.Int32, gpage.PC_TEMPLATE_ID);
                            if (gpage.STP_ID != 0)
                                dBase.AddInParameter(dCmd, "@IP_STP_ID", DbType.String, gpage.STP_ID);
                            break;
                        }

                    //case "ICD":
                    //    {

                    //        if (!string.IsNullOrEmpty(gpage.TRAN_TYPE_ID))
                    //            dBase.AddInParameter(dCmd, "@IP_TRAN_TYPE_ID", DbType.Int32, gpage.TRAN_TYPE_ID);
                    //        if (!string.IsNullOrEmpty(gpage.COLUMN_NAME1))
                    //            dBase.AddInParameter(dCmd, "@IP_DATE_FLAG", DbType.String, gpage.COLUMN_NAME1);
                    //        if (!string.IsNullOrEmpty(gpage.VACCINATION_TRN_ID))
                    //            dBase.AddInParameter(dCmd, "@IP_VACCINATION_TRN_ID", DbType.Int32, gpage.VACCINATION_TRN_ID);
                    //        if (!string.IsNullOrEmpty(gpage.PC_REQ_ID))
                    //            dBase.AddInParameter(dCmd, "@IP_PC_REQ_ID", DbType.Int32, gpage.PC_REQ_ID);
                    //        if (!string.IsNullOrEmpty(gpage.PC_REQ_SOURCE_ID))
                    //            dBase.AddInParameter(dCmd, "@IP_PC_REQ_SOURCE_ID", DbType.Int32, gpage.PC_REQ_SOURCE_ID);
                    //        if (!string.IsNullOrEmpty(gpage.ENTITY_ID))
                    //            dBase.AddInParameter(dCmd, "@IP_ENTITY_ID", DbType.Int32, gpage.ENTITY_ID);
                    //        if (!string.IsNullOrEmpty(gpage.PC_SCH_ID))
                    //            dBase.AddInParameter(dCmd, "@IP_PC_SCH_ID", DbType.Int32, gpage.PC_SCH_ID);
                    //        if (!string.IsNullOrEmpty(gpage.HC_SCH_REQ_ID))
                    //            dBase.AddInParameter(dCmd, "@IP_HC_SCH_REQ_ID", DbType.Int32, gpage.HC_SCH_REQ_ID);
                    //        if (!string.IsNullOrEmpty(gpage.EMP_VACCINATION_ID))
                    //            dBase.AddInParameter(dCmd, "@IP_EMP_VACCINATION_ID", DbType.Int32, gpage.EMP_VACCINATION_ID);
                    //        if (!string.IsNullOrEmpty(gpage.EMP_HC_ID))
                    //            dBase.AddInParameter(dCmd, "@IP_EMP_HC_ID", DbType.Int32, gpage.EMP_HC_ID);
                    //        if (!string.IsNullOrEmpty(gpage.HC_SCH_ID))
                    //            dBase.AddInParameter(dCmd, "@IP_HC_SCH_ID", DbType.Int32, gpage.HC_SCH_ID);
                    //        if (!string.IsNullOrEmpty(gpage.PC_SCH_REQ_ID))
                    //            dBase.AddInParameter(dCmd, "@IP_PC_SCH_REQ_ID", DbType.Int32, gpage.PC_SCH_REQ_ID);
                    //        if (!string.IsNullOrEmpty(gpage.PC_TEMPLATE_ID))
                    //            dBase.AddInParameter(dCmd, "@IP_PC_TEMPLATE_ID", DbType.Int32, gpage.PC_TEMPLATE_ID);
                    //        if (gpage.STP_ID != 0)
                    //            dBase.AddInParameter(dCmd, "@IP_STP_ID", DbType.String, gpage.STP_ID);
                    //        break;
                    //    }


                    case "DICOM":
                        {
                            if (gpage.STP_ID != 0)
                                dBase.AddInParameter(dCmd, "@IP_STP_ID", DbType.String, gpage.STP_ID);
                            if (!string.IsNullOrEmpty(gpage.REFERENCE_TYPE_IDD))
                                dBase.AddInParameter(dCmd, "@IP_REFERENCE_TYPE_ID", DbType.String, gpage.REFERENCE_TYPE_IDD);
                            if (gpage.MODULE_ID != 0)
                                dBase.AddInParameter(dCmd, "@IP_MODULE_ID", DbType.Int32, gpage.MODULE_ID);
                            break;
                        }
                    case "SRV_RENDER":
                        {
                            dBase.AddInParameter(dCmd, "@IP_USER_ID", DbType.String, gpage.USER_ID);
                            break;
                        }
                    case "PASLookUP":
                        {
                            if (gpage.PAS_BILL_ID != 0)
                            {
                                dBase.AddInParameter(dCmd, "@IP_PAS_BILL_ID", DbType.Int32, gpage.PAS_BILL_ID);
                            }
                            break;
                        }
                    case "OP":
                        {
                            dBase.AddInParameter(dCmd, DALConstants.DESC_COLUMN_NAME, DbType.String, gpage.COLUMN_NAME);
                            dBase.AddInParameter(dCmd, "@IP_PREFIX_TEXT", DbType.String, gpage.PREFIX_TEXT);
                            //dBase.AddInParameter(dCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, gpage.ADVANCESEARCH);
                            break;
                        }
                    default:
                        break;

                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(dbLayer.GenerateGridList);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dCmd, sqlData);
                if (gpage.GRIDPAGENAME != "PASLookUP")
                {

                    gpage.EVENTFLAG = !DBNull.Value.Equals(dBase.GetParameterValue(dCmd, "@IP_COUNT")) ? Convert.ToInt32(dBase.GetParameterValue(dCmd, "@IP_COUNT")) : 0;
                    // total_record = !DBNull.Value.Equals(dBase.GetParameterValue(dCmd, DALConstants.OUTPUT_PARM)) ? Convert.ToInt32(dBase.GetParameterValue(dCmd, DALConstants.OUTPUT_PARM)) : 0;
                }
                return cBase;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetUserInfoByCol").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }

        public CollectionBase BindGetLookups(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                dbLayer = new DataAccessLayer();
                dBase = dbLayer.DBaseFactory;
                dCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, _lookUPSearch.PROCNAME);
                //cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_PATIENT");
                dBase.AddInParameter(dCmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dCmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dBase.AddInParameter(dCmd, "@IP_COLUMN_NAME", DbType.String, _lookUPSearch.COLUMN_NAME);
                    dBase.AddInParameter(dCmd, "@IP_PREFIX_TEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                }

                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dBase.AddInParameter(dCmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);
                if (_lookUPSearch.PreConditon.Count != 0 && _lookUPSearch.PreConditon[0].ToString() != "")
                {
                    dBase.AddInParameter(dCmd, "@IP_GENDER_ID", DbType.String, _lookUPSearch.PreConditon[0]);
                }
                if (_lookUPSearch.PreConditon.Count > 1)
                {
                    dBase.AddInParameter(dCmd, "@IP_FLAG", DbType.String, _lookUPSearch.PreConditon[1]);
                }

                dBase.AddOutParameter(dCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 100);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(dbLayer.GenerateGridList);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dCmd, sqlData);
                object count = dBase.GetParameterValue(dCmd, DALConstants.OUTPUT_PARM);
                _total_records = count != DBNull.Value ? Convert.ToInt32(count) : 0;
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Patients_Info_NEW_UMR").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }

        }
        //naresh
        public CollectionBase BindGetAllsGrid(string Params, int Session_Id, out int _totalrecord) /*this method has been changed for getting count has separate column by Ali on 20180205*/
        {

            _totalrecord = 0;
            int _count = 0;
            DataSet ds = new DataSet();
            try
            {
                string Encryptedstr = EnCryptDecrypt.CryptorEngine.Decrypt(ConfigurationManager.ConnectionStrings["SuvarnaDB"].ToString(), true);
                //dbfactory = CreateDatabase(Encryptedstr);
                SqlConnection con = new SqlConnection(Encryptedstr);
                SqlCommand cmd = null;
                for (int i = 0; i < Params.Split('&').Length; i++)
                {
                    if (Params.Split('&')[i].Split(':')[0] != "PROC" && Params.Split('&')[i].Split(':')[0] != "DOC_NAME" && Params.Split('&')[i].Split(':')[1] != "null")
                    {
                        cmd.Parameters.AddWithValue(Params.Split('&')[i].Split(':')[0].ToString(), Params.Split('&')[i].Split(':')[1]);
                    }
                    else if (Params.Split('&')[i].Split(':')[0] == "PROC")
                    {
                        cmd = new SqlCommand(Params.Split('&')[i].Split(':')[1], con);
                    }
                }
                cmd.Parameters.AddWithValue("IP_COUNT", 10);
                cmd.Parameters["IP_COUNT"].Direction = ParameterDirection.Output;
                cmd.Parameters.AddWithValue("IP_SESSION_ID", Session_Id);
                cmd.CommandType = CommandType.StoredProcedure;
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(ds);
                GridCollection userCol = new GridCollection();
                ArrayList arraylist = new ArrayList();
                OptimizationDataSet(ds, arraylist, out _count);
                DataTable dt = ds.Tables[0];
                if (ds != null)
                {
                    if (_count == 1)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                            _totalrecord = Convert.ToInt32(ds.Tables[0].Rows[0]["TOTAL_RECORD_COUNT"]);
                    }
                    else
                    {
                        if (Convert.ToInt32(cmd.Parameters["IP_COUNT"].Value) > 0)
                            _totalrecord = Convert.ToInt32(cmd.Parameters["IP_COUNT"].Value);
                    }
                }
                userCol.Add(arraylist);
                return userCol;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        //I Ashok Naidu
        public CollectionBase BindGetAllGrid(string Params, int Session_Id, out int _totalrecords) /*this method has been changed for getting count has separate column by Ali on 20180205*/
        {
            _totalrecords = 0;
            int _count = 0;
            DataSet ds = new DataSet();
            try
            {

                string Encryptedstr = EnCryptDecrypt.CryptorEngine.Decrypt(ConfigurationManager.ConnectionStrings["SuvarnaDB"].ToString(), true);
                //dbfactory = CreateDatabase(Encryptedstr);
                SqlConnection con = new SqlConnection(Encryptedstr);
                SqlCommand cmd = null;
                for (int i = 0; i < Params.Split('&').Length; i++)
                {
                    if (Params.Split('&')[i].Split(':')[0] != "PROC" && Params.Split('&')[i].Split(':')[0] != "DOC_NAME" && Params.Split('&')[i].Split(':')[1] != "null")
                    {
                        cmd.Parameters.AddWithValue(Params.Split('&')[i].Split(':')[0].ToString(), Params.Split('&')[i].Split(':')[1]);
                    }
                    else if (Params.Split('&')[i].Split(':')[0] == "PROC")
                    {
                        cmd = new SqlCommand(Params.Split('&')[i].Split(':')[1], con);
                    }
                }
                cmd.Parameters.AddWithValue("IP_COUNT", 1);
               // cmd.Parameters["IP_COUNT"].Direction = ParameterDirection.Output;
                cmd.Parameters.AddWithValue("IP_SESSION_ID", Session_Id);
                cmd.CommandType = CommandType.StoredProcedure;
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(ds);
                GridCollection userCol = new GridCollection();
                ArrayList arraylist = new ArrayList();
                OptimizationDataSet(ds, arraylist, out _count);
                DataTable dt = ds.Tables[0];
                if (ds != null)
                {
                    if (_count == 1)
                    {
                        if (ds.Tables[0].Rows.Count > 0)
                            _totalrecords = Convert.ToInt32(ds.Tables[0].Rows[0]["TOTAL_RECORD_COUNT"]);
                    }
                    /*else
                    {
                        if (Convert.ToInt32(cmd.Parameters["IP_COUNT"].Value) > 0)
                            _totalrecords = Convert.ToInt32(cmd.Parameters["IP_COUNT"].Value);
                    }*/
                }
                userCol.Add(arraylist);
                return userCol;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
        //I Ashok Naidu End
        //I Ashok Naidu
        public ArrayList OptimizationDataSet(DataSet ds, ArrayList arraylist, out int _count)
        {
            _count = 0;
            if (ds.Tables[0].Rows.Count > 0)
            {
                DataTable dt = ds.Tables[0];
                foreach (DataRow row in dt.Rows)
                {
                    var dict = new Dictionary<string, object>();
                    foreach (DataColumn col in dt.Columns)
                    {
                        if (col.ColumnName.ToString() == "TOTAL_RECORD_COUNT") { _count = 1; }
                        dict[col.ColumnName] = row[col];
                    }
                    arraylist.Add(dict);

                }
            }
            return arraylist;
        }
        //I Ashok Naidu End
        //I Ashok Naidu
      
        public int Post(string ProcName, string Params)
        {

            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dbSvc = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, ProcName);
                for (int i = 0; i < Params.Split('&').Length; i++)
                {
                    if (Params.Split('&')[i].Split(':')[2].ToString() == "XML")
                    {
                        string XML = Params.Split('&')[i].Split(':')[1].Replace('$', '"');
                        dbSvc.AddInParameter(dbCmd, Params.Split('&')[i].Split(':')[0].ToString(), DbType.Xml, XML);
                    }
                    else if (Params.Split('&')[i].Split(':')[2].ToString() == "INT")
                    {
                        dbSvc.AddInParameter(dbCmd, Params.Split('&')[i].Split(':')[0].ToString(), DbType.Int32, Params.Split('&')[i].Split(':')[1].ToString());
                    }
                    else
                    {
                        dbSvc.AddInParameter(dbCmd, Params.Split('&')[i].Split(':')[0].ToString(), DbType.String, Params.Split('&')[i].Split(':')[1].ToString());
                    }

                }

                int count = dbSvc.ExecuteNonQuery(dbCmd);

                return count;
            }
            catch (Exception ex)
            {

              
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Post").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return -1;
            }

        }
        //I Ashok Naidu End

        //I Ashok Naidu
        public CollectionBase Get(string ProcName, string Params)
        {
            int _count = 0;
            DataSet ds = new DataSet();
            try
            {
                string Encryptedstr = EnCryptDecrypt.CryptorEngine.Decrypt(ConfigurationManager.ConnectionStrings["SuvarnaDB"].ToString(), true);
                //dbfactory = CreateDatabase(Encryptedstr);
                SqlConnection con = new SqlConnection(Encryptedstr);

                SqlCommand cmd = new SqlCommand(ProcName, con);
                for (int i = 0; i < Params.Split('&').Length; i++)
                {

                    cmd.Parameters.AddWithValue(Params.Split('&')[i].Split(':')[0].ToString(), Params.Split('&')[i].Split(':')[1]);

                }
                cmd.CommandType = CommandType.StoredProcedure;
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(ds);
                DataTable dt = ds.Tables[0];

                GridCollection userCol = new GridCollection();
                ArrayList arraylist = new ArrayList();
                OptimizationDataSet(ds, arraylist, out _count);
                userCol.Add(arraylist);
                return userCol;

            }
            catch (Exception ex)
            {
                return null;
            }
        }
        //I Ashok Naidu End

        public CollectionBase BindGetGridCssd(GridPaging gpage)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, gpage.PROCNAME);
                if (!string.IsNullOrEmpty(gpage.FROM_DATE))
                    dBase.AddInParameter(dCmd, DALConstants.FROM_DATE_PARAM, DbType.String, gpage.FROM_DATE);
                if (!string.IsNullOrEmpty(gpage.TO_DATE))
                    dBase.AddInParameter(dCmd, DALConstants.TO_DATE_PARAM, DbType.String, gpage.TO_DATE);
                if (!string.IsNullOrEmpty(gpage.FROM_DT))
                    dBase.AddInParameter(dCmd, "@IP_FROM_DT", DbType.String, gpage.FROM_DT);
                if (!string.IsNullOrEmpty(gpage.TO_DT))
                    dBase.AddInParameter(dCmd, "@IP_TO_DT", DbType.String, gpage.TO_DT);
                if (!string.IsNullOrEmpty(gpage.COLUMN_NAME))
                    dBase.AddInParameter(dCmd, DALConstants.COLUMN_NAME_PARAM, DbType.String, gpage.COLUMN_NAME);
                if (!string.IsNullOrEmpty(gpage.PREFIX_TEXT))
                    dBase.AddInParameter(dCmd, DALConstants.PREFIX_TEXT_PARM, DbType.String, gpage.PREFIX_TEXT);
                if (gpage.CURRENT_PAGE != null && gpage.CURRENT_PAGE != 0)
                    dBase.AddInParameter(dCmd, DALConstants.CURRENT_PAGE_PARM, DbType.String, gpage.CURRENT_PAGE);
                if (gpage.PAGE_SIZE != null && gpage.PAGE_SIZE != 0)
                    dBase.AddInParameter(dCmd, DALConstants.PAGE_SIZE_PARM, DbType.String, gpage.PAGE_SIZE);
                if (!string.IsNullOrEmpty(gpage.ADVANCESEARCH))
                    dBase.AddInParameter(dCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, gpage.ADVANCESEARCH);
                if (!string.IsNullOrEmpty(gpage.FLAG))
                    dBase.AddInParameter(dCmd, DALConstants.IP_FLAG_PARM, DbType.String, gpage.FLAG);
                if (!string.IsNullOrEmpty(gpage.RECEVIE_TYPE_ID))
                    dBase.AddInParameter(dCmd, "@IP_RECEVIE_TYPE_ID", DbType.String, gpage.RECEVIE_TYPE_ID);
                if (!string.IsNullOrEmpty(Convert.ToInt32(gpage.REFERENCE_TYPE_ID).ToString()))
                    dBase.AddInParameter(dCmd, "@IP_REFERENCE_TYPE_ID", DbType.String, gpage.REFERENCE_TYPE_ID);
                if (!string.IsNullOrEmpty(Convert.ToInt32(gpage.STP_ID).ToString()))
                    dBase.AddInParameter(dCmd, "@IP_STP_ID", DbType.String, gpage.STP_ID);
                if (!string.IsNullOrEmpty(Convert.ToInt32(gpage.TRAN_TYPE_ID).ToString()))
                    dBase.AddInParameter(dCmd, "@IP_TRAN_TYPE_ID", DbType.Int32, gpage.TRAN_TYPE_ID);
                if (!string.IsNullOrEmpty(gpage.FILTERED_BY))
                    dBase.AddInParameter(dCmd, "@IP_FILTER_BY", DbType.String, gpage.FILTERED_BY);
                dBase.AddInParameter(dCmd, DALConstants.IP_COUNT_PARM, DbType.String, gpage.EVENTFLAG);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(dbLayer.GenerateGridList);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dCmd, sqlData);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("BindGetGridCssd").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }
        //SERVICE VERIFICATION
        public CollectionBase BindGetGridServiceVer(GridPaging gpage)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, gpage.PROCNAME);
                if (!string.IsNullOrEmpty(gpage.FROM_DATE))
                    dBase.AddInParameter(dCmd, DALConstants.FROM_DATE_PARAM, DbType.String, gpage.FROM_DATE);
                if (!string.IsNullOrEmpty(gpage.TO_DATE))
                    dBase.AddInParameter(dCmd, DALConstants.TO_DATE_PARAM, DbType.String, gpage.TO_DATE);
                if (!string.IsNullOrEmpty(gpage.FROM_DT))
                    dBase.AddInParameter(dCmd, "@IP_FROMDT", DbType.String, gpage.FROM_DT);
                if (!string.IsNullOrEmpty(gpage.TO_DT))
                    dBase.AddInParameter(dCmd, "@IP_TODT", DbType.String, gpage.TO_DT);
                if (!string.IsNullOrEmpty(gpage.COLUMN_NAME))
                    dBase.AddInParameter(dCmd, DALConstants.COLUMN_NAME_PARAM, DbType.String, gpage.COLUMN_NAME);
                if (!string.IsNullOrEmpty(gpage.PREFIX_TEXT))
                    dBase.AddInParameter(dCmd, DALConstants.PREFIX_TEXT_PARM, DbType.String, gpage.PREFIX_TEXT);
                if (gpage.CURRENT_PAGE != null && gpage.CURRENT_PAGE != 0)
                    dBase.AddInParameter(dCmd, DALConstants.CURRENT_PAGE_PARM, DbType.String, gpage.CURRENT_PAGE);
                if (gpage.PAGE_SIZE != null && gpage.PAGE_SIZE != 0)
                    dBase.AddInParameter(dCmd, DALConstants.PAGE_SIZE_PARM, DbType.String, gpage.PAGE_SIZE);
                if (!string.IsNullOrEmpty(gpage.ADVANCESEARCH))
                    dBase.AddInParameter(dCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, gpage.ADVANCESEARCH);
                if (!string.IsNullOrEmpty(Convert.ToInt32(gpage.STP_ID).ToString()))
                    dBase.AddInParameter(dCmd, "@IP_DEPTID", DbType.String, gpage.STP_ID);
                if (!string.IsNullOrEmpty(gpage.SORTORDER))
                    dBase.AddInParameter(dCmd, "@IP_ORDER_CREATE", DbType.String, gpage.SORTORDER);
                dBase.AddInParameter(dCmd, DALConstants.IP_COUNT_PARM, DbType.String, gpage.EVENTFLAG);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(dbLayer.GenerateGridList);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dCmd, sqlData);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("BindGetGridServiceVer").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }

        public CollectionBase GetServiceVerification1(string IP_INDENTID, string IP_PATIENTTYPE, string IP_DEPTID)
        {
            try
            {

                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_IPOP_ORDERS_SER_VER_ITEMS");
                dBase.AddInParameter(dbCmd, "@IP_INDENTID", DbType.String, IP_INDENTID);
                dBase.AddInParameter(dbCmd, "@IP_PATIENTTYPE", DbType.String, IP_PATIENTTYPE);
                dBase.AddInParameter(dbCmd, "@IP_DEPTID", DbType.String, IP_DEPTID);
                GenerateCollectionReader list = new GenerateCollectionReader(GetServiceVerification1_Coll);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, list);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceVerification1").Name;
                ErrorLoger.InsertErrorLogger(ex, 533, 1);
                return null;
            }

        }

        private CollectionBase GetServiceVerification1_Coll(IDataReader returnData)
        {
            try
            {
                KitRequestColl _collection = new KitRequestColl();

                while (returnData.Read())
                {
                    KitRequest gp = new KitRequest();
                    gp.ORDER_ID = returnData["ORDER_ID"].ToString();
                    gp.SERVICEID = returnData["SERVICEID"].ToString();
                    gp.SERVICECD = returnData["SERVICECD"].ToString();
                    gp.SERVICENAME = returnData["SERVICENAME"].ToString();
                    gp.SERVICEGROUPID = returnData["SERVICEGROUPID"].ToString();
                    gp.SERVICEGROUPCD = returnData["SERVICEGROUPCD"].ToString();
                    gp.SERVICEGROUPNAME = returnData["SERVICEGROUPNAME"].ToString();
                    gp.GROUP_NAME = returnData["GROUP_NAME"].ToString();
                    gp.CREATEBY = returnData["CREATEBY"].ToString();
                    gp.CREATE_DT = returnData["CREATE_DT"].ToString();
                    gp.STATUS = returnData["STATUS"].ToString();
                    gp.VERIFIED_BY = returnData["VERIFIED_BY"].ToString();
                    gp.VERIFIEDDT = returnData["VERIFIEDDT"].ToString();
                    gp.VERIFIED_REMARKS = returnData["VERIFIED_REMARKS"].ToString();
                    gp.PATIENTTYPE = returnData["PATIENTTYPE"].ToString();
                    gp.PRICE = returnData["PRICE"].ToString();
                    gp.SERVICE_NAME = returnData["SERVICE_NAME"].ToString();
                    _collection.Add(gp);
                }
                return _collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceVerificationcoll").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        public CollectionBase GetGridtotalcount(string fDt, string tDt, int session_id, int user_id)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_OP_IP_PENDING_STATUS");
                dBase.AddInParameter(dbCmd, "@IP_FROM_DT", DbType.DateTime, fDt);
                dBase.AddInParameter(dbCmd, "@IP_TO_DT", DbType.DateTime, tDt);
                dBase.AddInParameter(dbCmd, "@IP_USER_ID", DbType.Int32, user_id);
                //dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, session_id);
                EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader sqldata = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(GetGridtotalcountcoll);
                CollectionBase cbase = dbLayer.ExecuteReaderCommand(dbCmd, sqldata);

                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetGridtotalcount").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        protected CollectionBase GetGridtotalcountcoll(IDataReader returnData)
        {
            try
            {
                KitRequestColl _collection = new KitRequestColl();

                while (returnData.Read())
                {
                    KitRequest gp = new KitRequest();
                    gp.APPROVED_COUNT = returnData["APPROVED_COUNT"].ToString();
                    gp.PENDING_COUNT = returnData["PENDING_COUNT"].ToString();
                    gp.REJECTED_COUNT = returnData["REJECTED_COUNT"].ToString();
                    gp.TOTAL_SERVICE_COUNT = returnData["TOTAL_SERVICE_COUNT"].ToString();
                    gp.TYPE = returnData["TYPE"].ToString();
                    gp.USER_WISE_APPROVAL_COUNT = returnData["USER_WISE_APPROVAL_COUNT"].ToString();
                    gp.AUTO_VERIFIED_COUNT = returnData["AUTO_VERIFIED_COUNT"].ToString();
                    _collection.Add(gp);
                }
                return _collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetGridtotalcountcoll").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        public CollectionBase GetServiceVerification(KitRequest gp)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_IPOP_ORDERS_SER_VER_ITEMS");
                dBase.AddInParameter(dbCmd, "@IP_INDENTID", DbType.Int32, Convert.ToInt32(gp.IP_INDENTID));
                dBase.AddInParameter(dbCmd, "@IP_PATIENTTYPE", DbType.String, gp.IP_PATIENTTYPE);
                dBase.AddInParameter(dbCmd, "@IP_DEPTID", DbType.Int32, Convert.ToInt32(gp.IP_DEPTID));
                dBase.AddInParameter(dbCmd, "@IP_UMR_NO", DbType.String, gp.UMR_NO);
                EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader sqldata = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(GetServiceVerificationcoll);
                CollectionBase cbase = dbLayer.ExecuteReaderCommand(dbCmd, sqldata);

                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceVerification").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }

        //for update service verification

        public bool SaveServiceVerificationDetails(KitRequest objr, out int output)
        {
            output = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_UPD_INTG_INDENT_APPROVE_STATUS");
                dBase.AddInParameter(dbCmd, "@IP_SERVICE_ID", DbType.String, objr.SERVICEID);
                dBase.AddInParameter(dbCmd, "@IP_ORDER_ID", DbType.String, objr.ORDER_ID);
                dBase.AddInParameter(dbCmd, "@IP_STATUS", DbType.String, objr.STATUS);
                dBase.AddInParameter(dbCmd, "@IP_STATUS_REMARKS", DbType.String, objr.STATUS_REMARKS);
                dBase.AddInParameter(dbCmd, "@IP_PATIENT_TYPE", DbType.String, objr.IP_PATIENTTYPE);
                dBase.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, 100);
                if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
                {
                    int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                    dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.String, sessionid);

                }
                int count = dBase.ExecuteNonQuery(dbCmd);

                //if (count > 0)
                //{
                //    return true;
                //}
                //else
                //{
                //    return false;
                //}
                //int id = Convert.ToInt32(dBase.GetParameterValue(dbCmd, "@OP_COUNT"));
                output = count;
                return output > 0 ? true : false;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("SaveServiceVerificationDetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 1201, 1);
                return false;
            }
        }
     


        ////multiple service
        //public bool SaveServiceVerificationNew(KitRequest objr)
        //{

        //    try
        //    {
        //        DataAccessLayer dbLayer = new DataAccessLayer();
        //        Database dBase = dbLayer.DBaseFactory;
        //        DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_UPD_INTG_INDENT_CHANGE");
        //        dBase.AddInParameter(dbCmd, "@IP_SERVICE_ID", DbType.String, objr.SERVICEID);
        //        dBase.AddInParameter(dbCmd, "@IP_OLD_SERVICE_ID", DbType.String, objr.ORDER_ID);
        //        dBase.AddInParameter(dbCmd, "@IP_ORDER_ID", DbType.String, objr.STATUS);
        //        dBase.AddInParameter(dbCmd, "@IP_PATIENT_TYPE", DbType.String, objr.STATUS);
        //        if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
        //        {
        //            int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
        //            dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.String, sessionid);

        //        }
        //        int count = dBase.ExecuteNonQuery(dbCmd);

        //        if (count > 0)
        //        {
        //            return true;
        //        }
        //        else
        //        {
        //            return false;
        //        }

        //    }
        //    catch (Exception ex)
        //    {
        //        ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("SaveServiceVerificationNew").Name;
        //        ErrorLoger.InsertErrorLogger(ex, 1201, 1);
        //        return false;
        //    }
        //}
        protected CollectionBase GetServiceVerificationcoll(IDataReader returnData)
        {
            try
            {
                KitRequestColl _collection = new KitRequestColl();

                while (returnData.Read())
                {
                    KitRequest gp = new KitRequest();
                    gp.ORDER_ID = returnData["ORDER_ID"].ToString();
                    gp.SERVICEID = returnData["SERVICEID"].ToString();
                    gp.SERVICECD = returnData["SERVICECD"].ToString();
                    gp.SERVICENAME = returnData["SERVICENAME"].ToString();
                    gp.SERVICEGROUPID = returnData["SERVICEGROUPID"].ToString();
                    gp.SERVICEGROUPCD = returnData["SERVICEGROUPCD"].ToString();
                    gp.SERVICEGROUPNAME = returnData["SERVICEGROUPNAME"].ToString();
                    gp.GROUP_NAME = returnData["GROUP_NAME"].ToString();
                    gp.CREATEBY = returnData["CREATEBY"].ToString();
                    gp.CREATE_DT = returnData["CREATE_DT"].ToString();
                    gp.STATUS = returnData["STATUS"].ToString();
                    gp.VERIFIED_BY = returnData["VERIFIED_BY"].ToString();
                    gp.VERIFIEDDT = returnData["VERIFIEDDT"].ToString();
                    gp.VERIFIED_REMARKS = returnData["VERIFIED_REMARKS"].ToString();
                    gp.PATIENTTYPE = returnData["PATIENTTYPE"].ToString();
                    gp.PRICE = returnData["PRICE"].ToString();
                    gp.SERVICE_NAME = returnData["SERVICE_NAME"].ToString();
                    gp.ORDERED_SERVICE_ID = returnData["ORDERED_SERVICE_ID"].ToString();
                    gp.ORDERED_SERVICE_CD = returnData["ORDERED_SERVICE_CD"].ToString();
                    gp.ORDERED_SERVICE_NAME = returnData["ORDERED_SERVICE_NAME"].ToString();
                    gp.SERVCE_QUANTITY = float.Parse(returnData["SERVCE_QUANTITY"].ToString());
                    gp.BILL_NO = returnData["BILL_NO"].ToString();
                    gp.BILL_DT = returnData["BILL_DT"].ToString();
                    gp.BILL_AMOUNT = returnData["BILL_AMOUNT"].ToString();
                    gp.CONCESSION_AMOUNT = returnData["CONCESSION_AMOUNT"].ToString();
                    gp.NET_AMOUNT = returnData["NET_AMOUNT"].ToString();
                    gp.PAID_AMOUNT = returnData["PAID_AMOUNT"].ToString();
                    gp.UMR_NO = returnData["UMR_NO"].ToString();
                    gp.PATIENT_ID = returnData["PATIENT_ID"].ToString();
                    gp.GENDER = returnData["GENDER"].ToString();
                    gp.IS_CONSENT_FORM = returnData["IS_CONSENT_FORM"].ToString();
                    gp.IS_SRV_GUIDELINES_REQUIRED = returnData["IS_SRV_GUIDELINES_REQUIRED"].ToString();
                    gp.IS_PRE_REQUISIT = returnData["IS_PRE_REQUISIT"].ToString();
                    gp.STAT = returnData["STAT"].ToString();
                    gp.INSTRUCTIONS = returnData["INSTRUCTIONS"].ToString();
                    _collection.Add(gp);
                }
                return _collection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceVerificationcoll").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        public CollectionBase BindGetAllGridNew_Hic(GridPaging gpage)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, gpage.PROCNAME);
                if (!string.IsNullOrEmpty(gpage.FROM_DATE))
                    dBase.AddInParameter(dCmd, DALConstants.FROM_DATE_PARAM, DbType.String, gpage.FROM_DATE);
                if (!string.IsNullOrEmpty(gpage.TO_DATE))
                    dBase.AddInParameter(dCmd, DALConstants.TO_DATE_PARAM, DbType.String, gpage.TO_DATE);
                if (!string.IsNullOrEmpty(gpage.FROM_DT))
                    dBase.AddInParameter(dCmd, "@IP_FROM_DT", DbType.String, gpage.FROM_DT);
                if (!string.IsNullOrEmpty(gpage.TO_DT))
                    dBase.AddInParameter(dCmd, "@IP_TO_DT", DbType.String, gpage.TO_DT);
                if (!string.IsNullOrEmpty(gpage.COLUMN_NAME))
                    dBase.AddInParameter(dCmd, DALConstants.COLUMN_NAME_PARAM, DbType.String, gpage.COLUMN_NAME);
                if (!string.IsNullOrEmpty(gpage.PREFIX_TEXT))
                    dBase.AddInParameter(dCmd, DALConstants.PREFIX_TEXT_PARM, DbType.String, gpage.PREFIX_TEXT);
                if (gpage.CURRENT_PAGE != null && gpage.CURRENT_PAGE != 0)
                    dBase.AddInParameter(dCmd, DALConstants.CURRENT_PAGE_PARM, DbType.String, gpage.CURRENT_PAGE);
                if (gpage.PAGE_SIZE != null && gpage.PAGE_SIZE != 0)
                    dBase.AddInParameter(dCmd, DALConstants.PAGE_SIZE_PARM, DbType.String, gpage.PAGE_SIZE);
                if (!string.IsNullOrEmpty(gpage.ADVANCESEARCH))
                    dBase.AddInParameter(dCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, gpage.ADVANCESEARCH);
                if (!string.IsNullOrEmpty(gpage.FLAG))
                    dBase.AddInParameter(dCmd, DALConstants.IP_FLAG_PARM, DbType.String, gpage.FLAG);
                if (!string.IsNullOrEmpty(gpage.RECEVIE_TYPE_ID))
                    dBase.AddInParameter(dCmd, "@IP_RECEVIE_TYPE_ID", DbType.String, gpage.RECEVIE_TYPE_ID);
                if (!string.IsNullOrEmpty(Convert.ToInt32(gpage.REFERENCE_TYPE_ID).ToString()))
                    dBase.AddInParameter(dCmd, "@IP_REFERENCE_TYPE_ID", DbType.String, gpage.REFERENCE_TYPE_ID);
                if (!string.IsNullOrEmpty(Convert.ToInt32(gpage.STP_ID).ToString()))
                    dBase.AddInParameter(dCmd, "@IP_STP_ID", DbType.String, gpage.STP_ID);
                if (!string.IsNullOrEmpty(Convert.ToInt32(gpage.TRAN_TYPE_ID).ToString()))
                    dBase.AddInParameter(dCmd, "@IP_TRAN_TYPE_ID", DbType.String, gpage.TRAN_TYPE_ID);
                dBase.AddInParameter(dCmd, DALConstants.IP_COUNT_PARM, DbType.String, gpage.EVENTFLAG);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(dbLayer.GenerateGridList);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dCmd, sqlData);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("BindGetAllGridNew_Hic").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }


        public CollectionBase BindGetAllGridNew_Mrd(GridPaging gpage)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, gpage.PROCNAME);
                if (!string.IsNullOrEmpty(gpage.FROM_DATE))
                    dBase.AddInParameter(dCmd, DALConstants.FROM_DATE_PARAM, DbType.String, gpage.FROM_DATE);
                if (!string.IsNullOrEmpty(gpage.TO_DATE))
                    dBase.AddInParameter(dCmd, DALConstants.TO_DATE_PARAM, DbType.String, gpage.TO_DATE);
                if (!string.IsNullOrEmpty(gpage.FROM_DT))
                    dBase.AddInParameter(dCmd, "@IP_FROM_DT", DbType.String, gpage.FROM_DT);
                if (!string.IsNullOrEmpty(gpage.TO_DT))
                    dBase.AddInParameter(dCmd, "@IP_TO_DT", DbType.String, gpage.TO_DT);
                if (!string.IsNullOrEmpty(gpage.COLUMN_NAME))
                    dBase.AddInParameter(dCmd, DALConstants.COLUMN_NAME_PARAM, DbType.String, gpage.COLUMN_NAME);
                if (!string.IsNullOrEmpty(gpage.PREFIX_TEXT))
                    dBase.AddInParameter(dCmd, DALConstants.PREFIX_TEXT_PARM, DbType.String, gpage.PREFIX_TEXT);
                if (gpage.CURRENT_PAGE != null && gpage.CURRENT_PAGE != 0)
                    dBase.AddInParameter(dCmd, DALConstants.CURRENT_PAGE_PARM, DbType.String, gpage.CURRENT_PAGE);
                if (gpage.PAGE_SIZE != null && gpage.PAGE_SIZE != 0)
                    dBase.AddInParameter(dCmd, DALConstants.PAGE_SIZE_PARM, DbType.String, gpage.PAGE_SIZE);
                if (!string.IsNullOrEmpty(gpage.ADVANCESEARCH))
                    dBase.AddInParameter(dCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, gpage.ADVANCESEARCH);
                if (!string.IsNullOrEmpty(gpage.FLAG))
                    dBase.AddInParameter(dCmd, DALConstants.IP_FLAG_PARM, DbType.String, gpage.FLAG);
                if (!string.IsNullOrEmpty(gpage.RECEVIE_TYPE_ID))
                    dBase.AddInParameter(dCmd, "@IP_RECEVIE_TYPE_ID", DbType.String, gpage.RECEVIE_TYPE_ID);
                if (!string.IsNullOrEmpty(Convert.ToInt32(gpage.REFERENCE_TYPE_ID).ToString()))
                    dBase.AddInParameter(dCmd, "@IP_REFERENCE_TYPE_ID", DbType.String, gpage.REFERENCE_TYPE_ID);
                if (!string.IsNullOrEmpty(Convert.ToInt32(gpage.STP_ID).ToString()))
                    dBase.AddInParameter(dCmd, "@IP_STP_ID", DbType.String, gpage.STP_ID);
                if (!string.IsNullOrEmpty(Convert.ToInt32(gpage.TRAN_TYPE_ID).ToString()))
                    dBase.AddInParameter(dCmd, "@IP_TRAN_TYPE_ID", DbType.String, gpage.TRAN_TYPE_ID);
                if (!string.IsNullOrEmpty(gpage.FILTERED_BY))
                    dBase.AddInParameter(dCmd, "@IP_FILTER_BY", DbType.String, gpage.FILTERED_BY);
                dBase.AddInParameter(dCmd, DALConstants.IP_COUNT_PARM, DbType.String, gpage.EVENTFLAG);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(dbLayer.GenerateGridList);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dCmd, sqlData);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("BindGetAllGridNew_Mrd").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }

    }

}
