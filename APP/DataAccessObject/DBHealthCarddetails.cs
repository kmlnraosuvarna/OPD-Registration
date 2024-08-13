using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Data.Common;
using System.Data;
using SPNames = EzHms.ModelEntity.StoreProceduresNames;
using EzHms.ModelEntity;
using System.Collections;
using System.IO;
using System.Data.SqlTypes;

namespace EzHms.DataAccessObject
{
    public class DBHealthCarddetails : DBExecuteDataReader
    {
        public bool InsertUpdateHealthcarddtlsXML(HEALTH_CARD _objModel)
        {
            bool _status = false;

            DataAccessLayer dbLayer = new DataAccessLayer();
            try
            {

                Database dbSvc = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_INSUPD_HEALTH_CARD_XML);
                dbSvc.AddInParameter(dbCmd, StoresConstatns.XML_PARAM, DbType.Xml, _objModel.XML);
                dbSvc.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, _objModel.SESSION_ID);

                _status = dbSvc.ExecuteNonQuery(dbCmd) > 0;




                return _status;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("InsertUpdateHealthcarddtlsXML").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return _status;
        }


        public bool InsertUpdateHealthcardtypedtlsXML(HEALTH_CARD_TYPE _objModel)
        {
            bool _status = false;
            DataAccessLayer _dbLayer = new DataAccessLayer();
            DbCommand cmd = _dbLayer.SetCommandType(System.Data.CommandType.StoredProcedure, SPNames.UPR_INSUPD_HEALTH_CARD_TYPE_XML);
            StringBuilder _xmlData = new StringBuilder();

            try
            {
                _xmlData.Append("<root>");
                _xmlData.Append("<HEALTH_CARD_TYPE");
                _xmlData.Append(EzHms.ModelEntity.PropertyHandler.AddAttributes(_objModel));
                _xmlData.Append(">");



                foreach (HEALTH_CARD_TYPE_SLAB _objColl in _objModel.Hlthcardtype_det_collxml)
                {
                    _xmlData.Append("<HEALTH_CARD_TYPE_SLAB");
                    _xmlData.Append(EzHms.ModelEntity.PropertyHandler.AddAttributes(_objColl));
                    _xmlData.Append("></HEALTH_CARD_TYPE_SLAB>");
                }
                _xmlData.Append("</HEALTH_CARD_TYPE>");
                _xmlData.Append("</root>");

                MemoryStream _stream = new MemoryStream(System.Text.Encoding.UTF32.GetBytes(_xmlData.ToString()));
                SqlXml _xml = new SqlXml(_stream);
                _dbLayer.AddInParameter(cmd, DALConstants.XML_PARM, DbType.Xml, _xml);



                _status = _dbLayer.ExecuteNonQuery(cmd);

                return _status;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("InsertUpdateHealthcardtypedtlsXML").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return _status;
        }

        public CollectionBase HealtCardDetails(HEALTH_CARD hc, out int totalrecords)
        {
            totalrecords = 0;
            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_HEALTH_CARD);
                dBase.AddInParameter(dbcmd, DALConstants.HEALTH_CARD_ID_PARAM, DbType.Int32, hc.HEALTH_CARD_ID);
                dBase.AddInParameter(dbcmd, DALConstants.HEALTH_PAGENUM, DbType.Int32, hc.PAGE_NUM);
                dBase.AddInParameter(dbcmd, DALConstants.HEALTH_PAGESIZE, DbType.Int32, hc.PAGE_SIZE);
                dBase.AddOutParameter(dbcmd, DALConstants.HOP_COUNT_PARAM, DbType.Int32, totalrecords);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(GetHealthCardProperties);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                totalrecords = Convert.ToInt32(dBase.GetParameterValue(dbcmd, DALConstants.HOP_COUNT_PARAM));
                return cbase;

            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Getcardtypes").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        protected CollectionBase GetHealthCardProperties(IDataReader returnData)
        {
            //hcc = new HealthCardCollection();
            HealthCardClass hcc = new HealthCardClass();
            HealthCardCollection hcc1 = new HealthCardCollection();
            Healthcarddetlcollectionxml hdc = new Healthcarddetlcollectionxml();
            while (returnData.Read())
            {
                HEALTH_CARD hc = new HEALTH_CARD();
                HEALTH_CARD_TYPE htc = new HEALTH_CARD_TYPE();
                HEALTH_CARD_DET hd = new HEALTH_CARD_DET();
                hc.HEALTH_CARD_ID = returnData[DALConstants.HEALTH_CARD_ID_COL] != DBNull.Value ? Convert.ToInt32(returnData[DALConstants.HEALTH_CARD_ID_COL]) : 0;
                hc.HEALTH_CARD_NO = returnData[DALConstants.HEALTH_CARD_NO_COL].ToString();
                hc.UMR_NO = returnData[DALConstants.HUMR_NO_COL].ToString();
                hc.HEALTH_CARD_TYPE_NAME = returnData[DALConstants.HEALTH_CARD_TYPE_NAME_COL].ToString();
                hc.FIRST_NAME = returnData["CARD_HOLDER_NAME"].ToString();
                hc.HEALTH_CARD_ISSUE_DT = returnData[DALConstants.HEALTH_CARD_ISSUE_DT_COL].ToString();
                hc.ACTUAL_AMOUNT = Convert.ToDecimal(returnData[DALConstants.ACTUAL_AMOUNT_COL]).ToString("0.00");
                hc.ELIGIBILITY_AMOUNT = Convert.ToDecimal(returnData[DALConstants.ELIGIBILITY_AMOUNT_COL]).ToString("0.00");
                hc.UTILIZED_AMOUNT = Convert.ToDecimal(returnData[DALConstants.UTILIZED_AMOUNT_COL]).ToString("0.00");
                //hc.FIRST_NAME = returnData["CARD_HOLDER_NAME"].ToString();
                //hc.CREATE_BY =Convert.ToInt32( returnData["CREATE_BY"].ToString());
                //hc.MAX_NO_OF_PERSONS = returnData[DALConstants.MAX_NO_OF_PERSONS_COL] != DBNull.Value ? Convert.ToInt32(returnData[DALConstants.MAX_NO_OF_PERSONS_COL]) : 0;
                //hc.VALIDITY_FROM_DT = returnData[DALConstants.VALIDITY_FROM_DT_COL].ToString();
                //hc.VALIDITY_TO_DATE = returnData[DALConstants.VALIDITY_TO_DATE_COL].ToString();
                hcc.add(hc);
                //hcc1.add(htc);
                //hdc.Add(hd);
            }
            return hcc;
        }

        //this is for card types
        public CollectionBase Getcardtypes()
        {
            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.Upr_get_HEALTH_CARD_TYPES);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(Getcardcollection);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Getcardtypes").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase Getcardcollection(IDataReader idr)
        {
            try
            {
                HealthCardCollection hlthcoll = new HealthCardCollection();
                HEALTH_CARD_TYPE hlthcardtype;
                while (idr.Read())
                {
                    hlthcardtype = new HEALTH_CARD_TYPE();
                    hlthcardtype.HEALTH_CARD_TYPE_ID = Convert.ToInt32(idr[DALConstants.HEALTH_CARD_TYPE_ID_COL].ToString());
                    hlthcardtype.HEALTH_CARD_TYPE_NAME = idr[DALConstants.HEALTH_CARD_TYPE_NAME_COL].ToString();
                    hlthcoll.add(hlthcardtype);
                }
                return hlthcoll;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Getcardcollection").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase HealtCardChildDetails(HEALTH_CARD_DET hcd)
        {

            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_HEALTH_CARD_DET);
                dBase.AddInParameter(dbcmd, DALConstants.HEALTH_CARD_ID_PARAM, DbType.Int32, hcd.HEALTH_CARD_ID);

                //dBase.AddOutParameter(dbcmd, DALConstants.HOP_COUNT_PARAM, DbType.Int32, totalrecords);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(GetHealthCardChild);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                //totalrecords = Convert.ToInt32(dBase.GetParameterValue(dbcmd, DALConstants.HOP_COUNT_PARAM));
                return cbase;

            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("HealtCardChildDetails").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase GetHealthCardChild(IDataReader idr)
        {
            try
            {
                HealthCardCollectionDet hlthcoll = new HealthCardCollectionDet();
                HEALTH_CARD_DET hlthcardtype;
                while (idr.Read())
                {
                    hlthcardtype = new HEALTH_CARD_DET();
                    hlthcardtype.HEALTH_CARD_ID = Convert.ToInt32(idr[DALConstants.HEALTH_CARD_ID_COL].ToString());
                    hlthcardtype.HEALTH_CARD_NO = idr[DALConstants.HEALTH_CARD_NO_COL].ToString();
                    hlthcardtype.UMR_NO = idr[DALConstants.HUMR_NO_COL].ToString();
                    hlthcardtype.FIRST_NAME = idr[DALConstants.HFIRSTNAME].ToString();
                    hlthcardtype.MODDLE_NAME = idr["MIDDLE_NAME"] != DBNull.Value ? idr["MIDDLE_NAME"].ToString() : string.Empty;
                    hlthcardtype.LAST_NAME = idr[DALConstants.HLASTNAME] != DBNull.Value ? idr[DALConstants.HLASTNAME].ToString() : string.Empty;
                    hlthcardtype.GENDER = idr[DALConstants.HGENDER].ToString();
                    hlthcardtype.IS_PRIMARY_CARD_HOLDER = idr[DALConstants.HPRIMARYHOLDER] != DBNull.Value ? idr[DALConstants.HPRIMARYHOLDER].ToString() : "N";
                    hlthcardtype.AGE = !string.IsNullOrEmpty(idr[DALConstants.AGE_COL].ToString()) ? Convert.ToInt32(idr[DALConstants.AGE_COL].ToString()) : 0;
                    hlthcardtype.RECORD_STATUS = idr[DALConstants.HSTATUS].ToString();
                    hlthcardtype.RELATION = idr["PATIENT_RELATIONSHIP_ID"] != DBNull.Value ? idr["PATIENT_RELATIONSHIP_ID"].ToString() : "0";
                    hlthcardtype.HEALTH_CARD_DET_ID = Convert.ToInt32(idr[DALConstants.HHEALTH_CARD_DET_ID_COL].ToString());
                    hlthcardtype.HEALTH_CARD_DET_REV_NO = Convert.ToInt32(idr["HEALTH_CARD_DET_REV_NO"].ToString());
                    hlthcardtype.RULE_ID = idr["CNCSN_RULE_ID"].ToString();
                    hlthcardtype.RULE_NAME = idr["CNCSN_RULE_NAME"].ToString();

                    hlthcardtype.EMPLOYEE_ID = idr["EMPLOYEE_ID"] != DBNull.Value ? idr["EMPLOYEE_ID"].ToString() : "0";
                    hlthcardtype.EMPLOYEE_DEPENDENTS_ID = idr["EMPLOYEE_DEPENDENTS_ID"] != DBNull.Value ? idr["EMPLOYEE_DEPENDENTS_ID"].ToString() : "0";
                    hlthcardtype.EMPLOYEE_CD = !DBNull.Value.Equals(idr["EMPLOYEE_CD"]) ? Convert.ToString(idr["EMPLOYEE_CD"]) : string.Empty;
                    hlthcoll.add(hlthcardtype);
                }
                return hlthcoll;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetHealthCardChild").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase HealtCardhdrview(HEALTH_CARD hdv)
        {

            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GETALL_HEALTH_CARD);
                dBase.AddInParameter(dbcmd, DALConstants.HFROMDT_PARAM, DbType.String, "");

                dBase.AddInParameter(dbcmd, DALConstants.HTODT_PARAM, DbType.String, "");
                dBase.AddInParameter(dbcmd, DALConstants.HIP_CLUMN_NAME_PARAM, DbType.String, "");
                dBase.AddInParameter(dbcmd, DALConstants.HIP_PREFIX_TEXT_PARAM, DbType.String, "");
                dBase.AddInParameter(dbcmd, DALConstants.HIP_ADVANCE_SEARCH_PARAM, DbType.String, "");
                dBase.AddInParameter(dbcmd, DALConstants.HIP_HEALTH_CARD_ID_PARAM, DbType.Int32, hdv.HEALTH_CARD_ID);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(GetHealthhdr);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("HealtCardhdrview").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase GetHealthhdr(IDataReader idr)
        {
            try
            {
                HealthCardClass healthcrdcoll = new HealthCardClass();
                HEALTH_CARD hlthcard;
                while (idr.Read())
                {
                    hlthcard = new HEALTH_CARD();
                    hlthcard.HEALTH_CARD_ID = Convert.ToInt32(idr[DALConstants.HEALTH_CARD_ID_COL].ToString());
                    hlthcard.HEALTH_CARD_NO = idr[DALConstants.HEALTH_CARD_NO_COL].ToString();
                    hlthcard.HEALTH_CARD_TYPE_ID = Convert.ToInt32(idr[DALConstants.HEALTH_CARD_TYPE_ID_COL]);
                    hlthcard.UMR_NO = idr[DALConstants.HUMR_NO_COL].ToString();
                    hlthcard.ACTUAL_AMOUNT = Convert.ToDecimal(idr[DALConstants.ACTUAL_AMOUNT_COL]).ToString("0.00");
                    hlthcard.ELIGIBILITY_AMOUNT = Convert.ToDecimal(idr[DALConstants.ELIGIBILITY_AMOUNT_COL]).ToString("0.00");
                    hlthcard.UTILIZED_AMOUNT = Convert.ToDecimal(idr[DALConstants.UTILIZED_AMOUNT_COL]).ToString("0.00");
                    hlthcard.MAX_NO_OF_PERSONS = Convert.ToInt32(idr[DALConstants.MAX_NO_OF_PERSONS_COL]);
                    hlthcard.VALIDITY_FROM_DT = idr[DALConstants.VALIDITY_FROM_DT_COL].ToString();
                    hlthcard.VALIDITY_TO_DATE = idr[DALConstants.VALIDITY_TO_DATE_COL].ToString();
                    hlthcard.CARD_VALIDITY_DAYS = Convert.ToInt32(idr["CARD_VALIDITY_YEARS"].ToString());
                    hlthcard.HEALTH_CARD_ISSUE_DT = idr[DALConstants.HHEALTH_CARD_ISSUE_DT_COL].ToString();
                    hlthcard.HEALTH_CARD_REV_NO = Convert.ToInt32(idr["HEALTH_CARD_REV_NO"].ToString());
                    hlthcard.SCHEMEID = (idr["SCHEME_ID"].ToString());


                    healthcrdcoll.add(hlthcard);
                }
                return healthcrdcoll;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetHealthhdr").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase GetMastercardtypes(HEALTH_CARD_TYPE hcts, out int totalrecords)
        {
            totalrecords = 0;
            try
            {
                //hcts.HEALTH_CARD_TYPE_ID = 0;
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_HEALTH_CARD_TYPE);
                dBase.AddInParameter(dbcmd, DALConstants.HEALTH_CARD_TYPE_ID_PARAM, DbType.Int32, hcts.HEALTH_CARD_TYPE_ID);//
                dBase.AddInParameter(dbcmd, DALConstants.HEALTH_PAGENUM, DbType.Int32, hcts.PAGE_NUM);
                dBase.AddInParameter(dbcmd, DALConstants.HEALTH_PAGESIZE, DbType.Int32, hcts.PAGE_SIZE);
                dBase.AddOutParameter(dbcmd, DALConstants.HOP_COUNT_PARAM, DbType.Int32, totalrecords);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(GetMastercardcollection);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                totalrecords = Convert.ToInt32(dBase.GetParameterValue(dbcmd, DALConstants.HOP_COUNT_PARAM));
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetMastercardtypes").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase GetMastercardcollection(IDataReader idr)
        {
            try
            {
                HealthCardCollection hlthcoll = new HealthCardCollection();
                HEALTH_CARD_TYPE hlthcardtype;
                while (idr.Read())
                {
                    hlthcardtype = new HEALTH_CARD_TYPE();
                    hlthcardtype.HEALTH_CARD_TYPE_ID = idr[DALConstants.HEALTH_CARD_TYPE_ID_COL] != DBNull.Value ? Convert.ToInt32(idr[DALConstants.HEALTH_CARD_TYPE_ID_COL]) : 0;
                    hlthcardtype.HEALTH_CARD_TYPE_CD = idr[DALConstants.HEALTH_CARD_TYPE_CD].ToString();
                    hlthcardtype.HEALTH_CARD_TYPE_NAME = idr[DALConstants.HEALTH_CARD_TYPE_NAME_COL].ToString();
                    hlthcardtype.HEALTH_CARD_TYPE_DESC = idr[DALConstants.SLABHEALTH_CARD_TYPE_DESC].ToString();
                    hlthcardtype.ACTUAL_AMOUNT = Convert.ToDecimal(idr[DALConstants.ACTUAL_AMOUNT_COL]).ToString("0.00");
                    hlthcardtype.ELIGIBILITY_AMOUNT = Convert.ToDecimal(idr[DALConstants.ELIGIBILITY_AMOUNT_COL]).ToString("0.00");
                    hlthcardtype.SCHEMEID = idr["SCHEME_ID"].ToString();
                    hlthcardtype.SCHEMENAME = idr["SCHEME_NAME"].ToString();
                    hlthcardtype.IS_EDIT = idr["IS_EDIT"].ToString();
                    hlthcardtype.HEALTH_CARD_CODE = idr["HEALTH_CARD_CODE"].ToString();
                    hlthcoll.add(hlthcardtype);
                }
                return hlthcoll;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Getcardcollection").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase GetMasterChildcardtypes(HEALTH_CARD_TYPE_SLAB hcts)
        {
            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_HEALTH_CARD_TYPE_DET);
                dBase.AddInParameter(dbcmd, DALConstants.HEALTH_CARD_TYPE_ID_PARAM, DbType.Int32, hcts.HEALTH_CARD_TYPE_ID);//

                GenerateCollectionReader sqldata = new GenerateCollectionReader(GetMasterChildcardcollection);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetMasterChildcardcollection").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase GetMasterChildcardcollection(IDataReader idr)
        {
            try
            {
                HealthCardSlabCollection hlthcoll = new HealthCardSlabCollection();
                HEALTH_CARD_TYPE_SLAB hlthcardtype;
                while (idr.Read())
                {
                    hlthcardtype = new HEALTH_CARD_TYPE_SLAB();
                    hlthcardtype.CARD_TYPE_SLAB_ID = Convert.ToInt32(idr[DALConstants.CARD_TYPE_SLAB_ID].ToString());
                    hlthcardtype.HEALTH_CARD_TYPE_NAME = idr[DALConstants.HEALTH_CARD_TYPE_NAME_COL].ToString();
                    hlthcardtype.NO_OF_DAYS = idr[DALConstants.NO_OF_DAYS_COL].ToString();
                    hlthcardtype.PERCENTAGE = idr[DALConstants.SLABPERCENTAGE].ToString();

                    hlthcoll.add(hlthcardtype);
                }
                return hlthcoll;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetHealthCardChild").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase HealtCardtypehdrview(HEALTH_CARD_TYPE hdv)
        {

            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GETALL_HEALTH_CARD_TYPE);
                dBase.AddInParameter(dbcmd, DALConstants.HFROMDT_PARAM, DbType.String, "");

                dBase.AddInParameter(dbcmd, DALConstants.HTODT_PARAM, DbType.String, "");
                dBase.AddInParameter(dbcmd, DALConstants.HIP_CLUMN_NAME_PARAM, DbType.String, "");
                dBase.AddInParameter(dbcmd, DALConstants.HIP_PREFIX_TEXT_PARAM, DbType.String, "");
                dBase.AddInParameter(dbcmd, DALConstants.HIP_ADVANCE_SEARCH_PARAM, DbType.String, "");
                dBase.AddInParameter(dbcmd, DALConstants.HEALTH_CARD_TYPE_ID_PARAM, DbType.Int32, hdv.HEALTH_CARD_TYPE_ID);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(GetHealthtypehdr);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("HealtCardtypehdrview").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase GetHealthtypehdr(IDataReader idr)
        {
            try
            {
                HealthCardCollection healthcrdcoll = new HealthCardCollection();
                HEALTH_CARD_TYPE hlthcard;
                while (idr.Read())
                {
                    hlthcard = new HEALTH_CARD_TYPE();
                    hlthcard.HEALTH_CARD_TYPE_CD = Convert.ToString(idr[DALConstants.SLABHEALTH_CARD_TYPE_CD]);
                    hlthcard.HEALTH_CARD_TYPE_ID = Convert.ToInt32(idr[DALConstants.HEALTH_CARD_TYPE_ID_COL]);
                    hlthcard.HEALTH_CARD_TYPE_NAME = idr[DALConstants.HEALTH_CARD_TYPE_NAME_COL].ToString();
                    hlthcard.HEALTH_CARD_TYPE_DESC = Convert.ToString(idr[DALConstants.HHEALTH_CARD_TYPE_DESC]);
                    hlthcard.ACTUAL_AMOUNT = Convert.ToDecimal(idr[DALConstants.ACTUAL_AMOUNT_COL]).ToString("0.00");
                    hlthcard.ELIGIBILITY_AMOUNT = Convert.ToDecimal(idr[DALConstants.ELIGIBILITY_AMOUNT_COL]).ToString("0.00");
                    healthcrdcoll.add(hlthcard);
                }
                return healthcrdcoll;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetHealthhdr").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase GetReportLookUp(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_HEALTH_CARD_AUTO);
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dBase.AddInParameter(dbCmd, DALConstants.DESC_COLUMN_NAME, DbType.String, _lookUPSearch.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, DALConstants.PREFIX_TEXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);
                }
                if (_lookUPSearch.PreConditon != null)
                {
                    dBase.AddInParameter(dbCmd, DALConstants.HEALTH_CARD_TYPE_ID_PARAM, DbType.Int32, _lookUPSearch.PreConditon[0]);
                    dBase.AddInParameter(dbCmd, DALConstants.HEALTH_CARD_NO_PARAM, DbType.String, _lookUPSearch.PreConditon[1]);
                }
                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                {
                    dBase.AddInParameter(dbCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, _lookUPSearch.ADVANCESEARCH);
                }
                dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 8);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetReportLookUpCollection);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                _total_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return _cBase;

                //DataAccessLayer dblayer = new DataAccessLayer();
                //Database dBase = dblayer.DBaseFactory;
                //DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_HEALTH_CARD_AUTO);
                ////dBase.AddInParameter(dbcmd, DALConstants.HEALTH_CARD_NO_PARAM, DbType.String, hdv.HEALTH_CARD_NO);
                ////dBase.AddInParameter(dbcmd, DALConstants.HEALTH_CARD_TYPE_ID_PARAM, DbType.Int32, hdv.HEALTH_CARD_TYPE_ID);
                //dBase.AddInParameter(dbcmd, DALConstants.HIP_CLUMN_NAME_PARAM, DbType.String, "");
                //dBase.AddInParameter(dbcmd, DALConstants.HIP_PREFIX_TEXT_PARAM, DbType.String, "");
                //dBase.AddInParameter(dbcmd, DALConstants.HIP_ADVANCE_SEARCH_PARAM, DbType.String, "");
                //dBase.AddInParameter(dbcmd, DALConstants.HEALTH_PAGENUM, DbType.Int32, _lookUPSearch.PAGE_NUM);
                //dBase.AddInParameter(dbcmd, DALConstants.HEALTH_PAGESIZE, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                //dBase.AddOutParameter(dbcmd, DALConstants.HOP_COUNT_PARAM, DbType.Int32, _total_records);
                //GenerateCollectionReader sqldata = new GenerateCollectionReader(GetReportLookUpCollection);
                //CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                //return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("HealtCardhdrview").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase GetReportLookUpCollection(IDataReader idr)
        {
            try
            {
                HealthCardCollectionDet healthcrdcoll = new HealthCardCollectionDet();
                HEALTH_CARD_DET hlthcard;
                while (idr.Read())
                {
                    hlthcard = new HEALTH_CARD_DET();
                    hlthcard.HEALTH_CARD_NO = idr[DALConstants.HEALTH_CARD_NO_COL].ToString();
                    hlthcard.HEALTH_CARD_TYPE_ID = Convert.ToInt32(idr[DALConstants.HEALTH_CARD_TYPE_ID_COL]);
                    hlthcard.HEALTH_CARD_TYPE_CD = idr[DALConstants.HEALTH_CARD_TYPE_CD].ToString();
                    //hlthcard.DISPLAY_NAME = idr[DALConstants.HDISPLAYNAME].ToString();
                    //hlthcard.ACTUAL_AMOUNT = Convert.ToDecimal(idr[DALConstants.ACTUAL_AMOUNT_COL]).ToString("0.00");
                    //hlthcard.UMR_NO = idr[DALConstants.HUMR_NO_COL].ToString();
                    //hlthcard.ELIGIBILITY_AMOUNT = Convert.ToDecimal(idr[DALConstants.ELIGIBILITY_AMOUNT_COL]).ToString("0.00");
                    //hlthcard.UTILIZED_AMOUNT = Convert.ToDecimal(idr[DALConstants.UTILIZED_AMOUNT_COL]).ToString("0.00");
                    healthcrdcoll.add(hlthcard);
                }
                return healthcrdcoll;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetReportLookUpCollection").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        //public List<ListElements> ItemlookupAuto(string prefixText, string contextKey)
        //{
        //    try
        //    {

        //        DataAccessLayer dbLayer = new DataAccessLayer();
        //        DbCommand dbCmd = null;
        //        Database dBase = dbLayer.DBaseFactory;
        //        List<string> returnData = new List<string>();
        //        dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_ST_BILL_ITEM_AUTO");



        //        dBase.AddInParameter(dbCmd, DALConstants.IP_COLUMN_NAME_PRM, DbType.String, contextKey);
        //        dBase.AddInParameter(dbCmd, DALConstants.IP_PREFIXTEXT_PARM, DbType.String, prefixText);
        //        if (System.Web.HttpContext.Current.Session["DBSessionID"] != null)
        //        {
        //            int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
        //            dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
        //        }
        //        IDataReader dbDR1 = dBase.ExecuteReader(dbCmd);

        //        return DataReader(dbDR1);
        //    }
        //    catch (Exception ex)
        //    {
        //        ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("ItemlookupAuto").Name;
        //        ErrorLoger.InsertErrorLogger(ex, 100, 1);
        //        return null;
        //    }

        //}

        //private List<ListElements> DataReader(IDataReader dr)
        //{
        //    try
        //    {
        //        List<ListElements> returnData = new List<ListElements>();
        //        while (dr.Read())
        //        {
        //            ListElements _element = new ListElements();
        //            _element.Text = dr[0].ToString();
        //            _element.Value = dr[1].ToString();
        //            returnData.Add(_element);
        //        }
        //        return returnData;
        //    }
        //    catch (Exception ex)
        //    {
        //        ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("DataReader").Name;
        //        ErrorLoger.InsertErrorLogger(ex, 100, 1);
        //        return null;
        //    }
        //}

        protected override CollectionBase GenerateCollection(IDataReader returnData)
        {
            throw new NotImplementedException();
        }
        public DataSet Get_CardType_DropDowns(int sessionid)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SCHEMRDDL");
                dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, 1);
                DataSet cbase = dbLayer.ExecuteDataSet(dbCmd);
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_CardType_DropDowns").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        //DBST_ERROR_TRACE objerr = new DBST_ERROR_TRACE();
        public bool InsUpdCardType(HEALTH_CARD_TYPE _objModel, out string HEALTHCARDTYPE)
        {
            HEALTHCARDTYPE = string.Empty;
            bool _status = false;
            
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dbSvc = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_HC_HEALTH_CARD_TYPE_XML");
                dbSvc.AddInParameter(dbCmd, StoresConstatns.XML_PARAM, DbType.Xml, _objModel.XML);
                dbSvc.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, _objModel.SESSION_ID);
                dbSvc.AddOutParameter(dbCmd, "@OP_HEALTH_CARD_TYPE_CD", DbType.String, 100);
                _status = dbSvc.ExecuteNonQuery(dbCmd) > 0;
                HEALTHCARDTYPE = !DBNull.Value.Equals(dbSvc.GetParameterValue(dbCmd, "@OP_HEALTH_CARD_TYPE_CD")) ? Convert.ToString(dbSvc.GetParameterValue(dbCmd, "@OP_HEALTH_CARD_TYPE_CD")) : string.Empty;
                return _status;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("InsUpdCardType").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }

            return _status;
        }
        public CollectionBase CardType_GetAll(GridPaging gpage, out int _totalrecords)
        {

            _totalrecords = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_HC_HEALTH_CARD_TYPE");
                dBase.AddInParameter(dbCmd, DALConstants.PAGENUM_PARM, DbType.Int32, Convert.ToInt32(gpage.CURRENT_PAGE));
                dBase.AddInParameter(dbCmd, DALConstants.PAGESIZE_PARM, DbType.Int32, Convert.ToInt32(gpage.PAGE_SIZE));
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, gpage.COLUMN_NAME);
                // dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARAM, DbType.String, gpage.PREFIX_TEXT);
                //dBase.AddInParameter(dbCmd, DALConstants.TO_DT_PARAM, DbType.String, gpage.TO_DT);
                //dBase.AddInParameter(dbCmd, DALConstants.FROM_DT_PARM, DbType.String, gpage.FROM_DT);
                // dBase.AddInParameter(dbCmd, DALConstants.IP_FLAG_PARM, DbType.String, gpage.FLAG);
                dBase.AddInParameter(dbCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, gpage.ADVANCESEARCH);
                dBase.AddOutParameter(dbCmd, DALConstants.OP_COUNT_PARM, DbType.Int32, _totalrecords);
                EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader sqldata = new EzHms.DataAccessObject.IGenerateReaderCollection.GenerateCollectionReader(CardTpyeColl);
                CollectionBase cbase = dbLayer.ExecuteReaderCommand(dbCmd, sqldata);
                _totalrecords = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OP_COUNT_PARM));
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("CardType_GetAll").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        protected CollectionBase CardTpyeColl(IDataReader returnData)
        {
            try
            {
                HEALTH_CARD_TYPE_COLL HcColl = new HEALTH_CARD_TYPE_COLL();
                while (returnData.Read())
                {
                    HEALTH_CARD_TYPE HCtype = new HEALTH_CARD_TYPE();
                    HCtype.HEALTH_CARD_TYPE_CD = returnData["HEALTH_CARD_TYPE_CD"].ToString();
                    HCtype.HEALTH_CARD_TYPE_ID = Convert.ToInt32(returnData["HEALTH_CARD_TYPE_ID"].ToString());
                    HCtype.HEALTH_CARD_TYPE_NAME = returnData["HEALTH_CARD_TYPE_NAME"].ToString();
                    HCtype.HEALTH_CARD_TYPE_DESC = returnData["HEALTH_CARD_TYPE_DESC"].ToString();
                    HCtype.ACTUAL_AMOUNT = returnData["ACTUAL_AMOUNT"].ToString();
                    HCtype.ELIGIBILITY_AMOUNT = returnData["ELIGIBILITY_AMOUNT"].ToString();
                    HCtype.CREATE_BY1 = !DBNull.Value.Equals(returnData["CREATE_BY"]) ? returnData["CREATE_BY"].ToString() : string.Empty;
                    HCtype.CREATE_DT = !DBNull.Value.Equals(returnData["CREATE_DT"]) ? Convert.ToString(returnData["CREATE_DT"]) : string.Empty;
                    HCtype.MODIFY_BY1 = !DBNull.Value.Equals(returnData["MODIFY_BY"]) ? Convert.ToString(returnData["MODIFY_BY"]) : string.Empty;
                    HCtype.MODIFY_DT = !DBNull.Value.Equals(returnData["MODIFY_DT"]) ? Convert.ToString(returnData["MODIFY_DT"]) : string.Empty;

                    HcColl.Add(HCtype);

                }
                return HcColl;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod(" InvalidPatGrid").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        public CollectionBase Card_type_Lookup(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                Database dbSvc = _dblayer.DBaseFactory;
                DbCommand cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_HC_HEALTH_CARD_TYPE_LOOKUP");
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dbSvc.AddInParameter(cmd, EzHms.ModelEntity.GenericPopUpConstants.COLUMNNAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, EzHms.ModelEntity.GenericPopUpConstants.PREFIXTEXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);
                }
                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dbSvc.AddInParameter(cmd, EzHms.ModelEntity.GenericPopUpConstants.ADVANCE_SEARCH_PARM, DbType.String, _lookUPSearch.ADVANCESEARCH);

                dbSvc.AddOutParameter(cmd, DALConstants.OUTPUT_PARM, DbType.Int32, _total_records);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(Card_type_Lookup_Coll);
                CollectionBase cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                _total_records = dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM).ToString() != string.Empty ? Convert.ToInt32(dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM)) : 0;
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Card_type_Lookup").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        protected CollectionBase Card_type_Lookup_Coll(IDataReader returnData)
        {
            try
            {
                HEALTH_CARD_TYPE_COLL HcColl = new HEALTH_CARD_TYPE_COLL();
                while (returnData.Read())
                {
                    HEALTH_CARD_TYPE HCtype = new HEALTH_CARD_TYPE();
                    HCtype.HEALTH_CARD_TYPE_CD = returnData["HEALTH_CARD_TYPE_CD"].ToString();
                    HCtype.HEALTH_CARD_TYPE_ID = Convert.ToInt32(returnData["HEALTH_CARD_TYPE_ID"].ToString());
                    HCtype.HEALTH_CARD_TYPE_NAME = returnData["HEALTH_CARD_TYPE_NAME"].ToString();
                    HCtype.HEALTH_CARD_TYPE_DESC = returnData["HEALTH_CARD_TYPE_DESC"].ToString();
                    HCtype.ACTUAL_AMOUNT = returnData["ACTUAL_AMOUNT"].ToString();
                    HCtype.ELIGIBILITY_AMOUNT = returnData["ELIGIBILITY_AMOUNT"].ToString();
                   // HCtype.CNCSN_RULE_ID = !DBNull.Value.Equals(returnData["CNCSN_RULE_ID"]) ? Convert.ToInt32(returnData["CNCSN_RULE_ID"]) :0;
                    HcColl.Add(HCtype);

                }
                return HcColl;
            }

            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateEmployerAllCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }




        public CollectionBase Rule_type_Lookup(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                Database dbSvc = _dblayer.DBaseFactory;
                DbCommand cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_CONCESSION_RULE_NEW");
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dbSvc.AddInParameter(cmd, EzHms.ModelEntity.GenericPopUpConstants.COLUMNNAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, EzHms.ModelEntity.GenericPopUpConstants.PREFIX_TEXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);
                }
                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dbSvc.AddInParameter(cmd, EzHms.ModelEntity.GenericPopUpConstants.ADVANCE_SEARCH_PARM, DbType.String, _lookUPSearch.ADVANCESEARCH);
               // dbSvc.AddInParameter(cmd, "@IP_COMPANY_ID", DbType.Int32,Convert.ToInt32(_lookUPSearch.EMP_ID));
                dbSvc.AddOutParameter(cmd, DALConstants.OUTPUT_PARM, DbType.Int32, _total_records);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(Rule_type_Lookup_Coll);
                CollectionBase cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                _total_records = dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM).ToString() != string.Empty ? Convert.ToInt32(dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM)) : 0;
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Card_type_Lookup").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        protected CollectionBase Rule_type_Lookup_Coll(IDataReader returnData)
        {
            try
            {
                HEALTH_CARD_TYPE_COLL HcColl = new HEALTH_CARD_TYPE_COLL();
                while (returnData.Read())
                {
                    HEALTH_CARD_TYPE HCtype = new HEALTH_CARD_TYPE();
                    HCtype.CNCSN_RULE_ID = Convert.ToInt32(returnData["CNCSN_RULE_ID"]);
                    HCtype.CNCSN_RULE_CD = returnData["CNCSN_RULE_CD"].ToString();
                    HCtype.CNCSN_RULE_NAME = returnData["CNCSN_RULE_NAME"].ToString();
                    HCtype.CNCSN_DEFINE_BY = returnData["CNCSN_DEFINE_BY"].ToString();
                    HCtype.CNCSN_DEFINE_NAME = returnData["CNCSN_DEFINE_NAME"].ToString();
                    HCtype.AUTH_NAME = returnData["AUTH_NAME"].ToString();
                    HcColl.Add(HCtype);

                }
                return HcColl;
            }

            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateEmployerAllCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }








        public CollectionBase Health_Card_Lookup(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            int count = 0;
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                Database dbSvc = _dblayer.DBaseFactory;
                DbCommand cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_HC_HEALTH_CARD_TYPE_LOOK");

                dbSvc.AddInParameter(cmd, "@IP_HEALTH_CARD_TYPE_ID", DbType.Int32, 0);
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dbSvc.AddInParameter(cmd, EzHms.ModelEntity.GenericPopUpConstants.COLUMNNAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbSvc.AddInParameter(cmd, EzHms.ModelEntity.GenericPopUpConstants.PREFIX_TEXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);
                    count++;
                }
                if (count == 0 && _lookUPSearch.PreConditon.Count > 1)
                {
                    dbSvc.AddInParameter(cmd, EzHms.ModelEntity.GenericPopUpConstants.COLUMNNAME_PARM, DbType.String, _lookUPSearch.PreConditon[1]);
                    dbSvc.AddInParameter(cmd, EzHms.ModelEntity.GenericPopUpConstants.PREFIX_TEXT_PARM, DbType.String, _lookUPSearch.PreConditon[2]);
                }
                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dbSvc.AddInParameter(cmd, EzHms.ModelEntity.GenericPopUpConstants.ADVANCE_SEARCH_PARM, DbType.String, _lookUPSearch.ADVANCESEARCH);

                dbSvc.AddOutParameter(cmd, DALConstants.OUTPUT_PARM, DbType.Int32, _total_records);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(Health_Card_Lookup_Coll);
                CollectionBase cBase = _dblayer.ExecuteReaderCommand(cmd, sqlData);
                _total_records = dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM).ToString() != string.Empty ? Convert.ToInt32(dbSvc.GetParameterValue(cmd, DALConstants.OUTPUT_PARM)) : 0;
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Health_Card_Lookup").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        protected CollectionBase Health_Card_Lookup_Coll(IDataReader returnData)
        {
            try
            {
                HEALTH_CARD_TYPE_COLL HcColl = new HEALTH_CARD_TYPE_COLL();
                while (returnData.Read())
                {
                    HEALTH_CARD_TYPE HCtype = new HEALTH_CARD_TYPE();
                    HCtype.HEALTH_CARD_TYPE_CD = returnData["HEALTH_CARD_TYPE_CD"].ToString();
                    HCtype.HEALTH_CARD_ID = Convert.ToInt32(returnData["HEALTH_CARD_ID"]);
                    HCtype.HEALTH_CARD_NO = returnData["HEALTH_CARD_NO"].ToString();
                    HCtype.FULL_NAME = returnData["FULL_NAME"].ToString();
                    HCtype.UMR_NO = returnData["UMR_NO"].ToString();
                    HCtype.MAX_NO_OF_PERSONS = Convert.ToInt32(returnData["MAX_NO_OF_PERSONS"]);
                    HCtype.HEALTH_CARD_TYPE_ID = Convert.ToInt32(returnData["HEALTH_CARD_TYPE_ID"].ToString());
                    HCtype.HEALTH_CARD_TYPE_NAME = returnData["HEALTH_CARD_TYPE_NAME"].ToString();
                    HCtype.ACTUAL_AMOUNT = returnData["ACTUAL_AMOUNT"].ToString();
                    HCtype.ELIGIBILITY_AMOUNT = returnData["ELIGIBILITY_AMOUNT"].ToString();
                    HCtype.UTILIZED_AMOUNT = returnData["UTILIZED_AMOUNT"].ToString();
                    // HCtype.RECORD_STATUS = returnData["RECORD_STATUS"].ToString();
                    HcColl.Add(HCtype);

                }
                return HcColl;
            }

            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Health_Card_Lookup_Coll").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
            }
            return null;
        }


        public CollectionBase Edit_CardType(HEALTH_CARD_TYPE hdv)
        {

            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_HC_HEALTH_CARD_TYPE");
                dBase.AddInParameter(dbcmd, DALConstants.HEALTH_CARD_TYPE_ID_PARAM, DbType.Int32, hdv.HEALTH_CARD_TYPE_ID);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(Get_CardType);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("HealtCardtypehdrview").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase Get_CardType(IDataReader idr)
        {
            try
            {
                HealthCardCollection HcColl = new HealthCardCollection();
                while (idr.Read())
                {

                    HEALTH_CARD_TYPE hlthcard;
                    hlthcard = new HEALTH_CARD_TYPE();
                    hlthcard.HEALTH_CARD_TYPE_CD = Convert.ToString(idr[DALConstants.SLABHEALTH_CARD_TYPE_CD]);
                    hlthcard.HEALTH_CARD_TYPE_ID = Convert.ToInt32(idr["HEALTH_CARD_TYPE_ID"]);
                    hlthcard.HEALTH_CARD_TYPE_REV_NO = Convert.ToInt32(idr["HEALTH_CARD_TYPE_REV_NO"]);
                    hlthcard.HEALTH_CARD_TYPE_NAME = idr[DALConstants.HEALTH_CARD_TYPE_NAME_COL].ToString();
                    hlthcard.HEALTH_CARD_TYPE_DESC = Convert.ToString(idr[DALConstants.HHEALTH_CARD_TYPE_DESC]);
                    hlthcard.SCHEMENAME = Convert.ToString(idr["SCHEME_NAME"]);
                    hlthcard.ACTUAL_AMOUNT = Convert.ToDecimal(idr[DALConstants.ACTUAL_AMOUNT_COL]).ToString("0.00");
                    hlthcard.ELIGIBILITY_AMOUNT = Convert.ToDecimal(idr[DALConstants.ELIGIBILITY_AMOUNT_COL]).ToString("0.00");
                    hlthcard.SCHEMEID = Convert.ToString(idr["SCHEME_ID"]);
                    hlthcard.IS_EDIT = idr["IS_EDIT"].ToString();
                    //hlthcard.ELIGIBILITY_AMOUNT_USE = idr["ELIGIBILITY_AMOUNT_USE"].ToString();

                    hlthcard.IS_AMOUNT_CHANGE = idr["IS_AMOUNT_CHANGE"].ToString();
                    hlthcard.AUTO_PREFIX = idr["AUTO_PREFIX"].ToString();
                    HcColl.add(hlthcard);
                }
                return HcColl;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetHealthhdr").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase CardType_Name(String hdv, string CardTypeId)
        {

            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_HC_HEALTH_CARD_TYPE_STATUS");
                dBase.AddInParameter(dbcmd, "@IP_HEALTH_CARD_NAME", DbType.String, hdv);
                dBase.AddInParameter(dbcmd, "@IP_HEALTH_CARD_TYPE_ID", DbType.Int32, CardTypeId != "" ? Convert.ToInt32(CardTypeId) : 0);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(CardType_Name_Coll);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("HealtCardtypehdrview").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase CardType_Name_Coll(IDataReader idr)
        {
            try
            {
                HealthCardCollection HcColl = new HealthCardCollection();
                while (idr.Read())
                {

                    HEALTH_CARD_TYPE hlthcard;
                    hlthcard = new HEALTH_CARD_TYPE();
                    hlthcard.HEALTH_CARD_TYPE_CD = Convert.ToString(idr[DALConstants.SLABHEALTH_CARD_TYPE_CD]);
                    hlthcard.HEALTH_CARD_TYPE_ID = Convert.ToInt32(idr[DALConstants.HEALTH_CARD_TYPE_ID_COL]);
                    hlthcard.HEALTH_CARD_TYPE_NAME = idr[DALConstants.HEALTH_CARD_TYPE_NAME_COL].ToString();
                    hlthcard.HEALTH_CARD_TYPE_DESC = Convert.ToString(idr[DALConstants.HHEALTH_CARD_TYPE_DESC]);
                    //hlthcard.SCHEMENAME = Convert.ToString(idr["SCHEME_NAME"]);
                    hlthcard.ACTUAL_AMOUNT = Convert.ToDecimal(idr[DALConstants.ACTUAL_AMOUNT_COL]).ToString("0.00");
                    //hlthcard.ELIGIBILITY_AMOUNT = Convert.ToDecimal(idr[DALConstants.ELIGIBILITY_AMOUNT_COL]).ToString("0.00");
                    //hlthcard.SCHEMEID = Convert.ToString(idr["SCHEME_ID"]);
                    HcColl.add(hlthcard);
                }
                return HcColl;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetHealthhdr").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase HealtCardDetailsNew(HEALTH_CARD hc, GridPaging gp, out int totalrecords)
        {
            totalrecords = 0;
            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_HEALTH_CARD);
                dBase.AddInParameter(dbcmd, DALConstants.HEALTH_CARD_ID_PARAM, DbType.Int32, hc.HEALTH_CARD_ID);
                dBase.AddInParameter(dbcmd, DALConstants.HEALTH_PAGENUM, DbType.Int32, gp.CURRENT_PAGE);
                dBase.AddInParameter(dbcmd, DALConstants.HEALTH_PAGESIZE, DbType.Int32, gp.PAGE_SIZE);
                dBase.AddInParameter(dbcmd, "@IP_ADVANCE_SEARCH", DbType.String, gp.ADVANCESEARCH);
                dBase.AddInParameter(dbcmd, "@IP_COLUMN_NAME", DbType.String, gp.COLUMN_NAME);
                dBase.AddInParameter(dbcmd, "@IP_PREFIX_TEXT", DbType.String, gp.PREFIX_TEXT);
                dBase.AddInParameter(dbcmd, "@IP_FROM_DT", DbType.String, gp.FROM_DATE);
                dBase.AddInParameter(dbcmd, "@IP_TO_DT", DbType.String, gp.TO_DATE);
                dBase.AddInParameter(dbcmd, "@IP_FILTER_BY", DbType.String, gp.FILTERED_BY);
                dBase.AddOutParameter(dbcmd, DALConstants.HOP_COUNT_PARAM, DbType.Int32, totalrecords);

                GenerateCollectionReader sqldata = new GenerateCollectionReader(GetHealthCardPropertiesNew);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                totalrecords = Convert.ToInt32(dBase.GetParameterValue(dbcmd, DALConstants.HOP_COUNT_PARAM));
                return cbase;

            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Getcardtypes").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        protected CollectionBase GetHealthCardPropertiesNew(IDataReader returnData)
        {
            //hcc = new HealthCardCollection();
            HealthCardClass hcc = new HealthCardClass();
            HealthCardCollection hcc1 = new HealthCardCollection();
            Healthcarddetlcollectionxml hdc = new Healthcarddetlcollectionxml();
            while (returnData.Read())
            {
                HEALTH_CARD hc = new HEALTH_CARD();
                HEALTH_CARD_TYPE htc = new HEALTH_CARD_TYPE();
                HEALTH_CARD_DET hd = new HEALTH_CARD_DET();
                hc.HEALTH_CARD_ID = returnData[DALConstants.HEALTH_CARD_ID_COL] != DBNull.Value ? Convert.ToInt32(returnData[DALConstants.HEALTH_CARD_ID_COL]) : 0;
                hc.HEALTH_CARD_NO = returnData[DALConstants.HEALTH_CARD_NO_COL].ToString();
                hc.UMR_NO = returnData[DALConstants.HUMR_NO_COL].ToString();
                hc.HEALTH_CARD_TYPE_NAME = returnData[DALConstants.HEALTH_CARD_TYPE_NAME_COL].ToString();
                hc.FIRST_NAME = returnData["CARD_HOLDER_NAME"].ToString();
                hc.HEALTH_CARD_ISSUE_DT = returnData[DALConstants.HEALTH_CARD_ISSUE_DT_COL].ToString();
                hc.ACTUAL_AMOUNT = Convert.ToDecimal(returnData[DALConstants.ACTUAL_AMOUNT_COL]).ToString("0.00");
                hc.ELIGIBILITY_AMOUNT = Convert.ToDecimal(returnData[DALConstants.ELIGIBILITY_AMOUNT_COL]).ToString("0.00");
                hc.UTILIZED_AMOUNT = Convert.ToDecimal(returnData[DALConstants.UTILIZED_AMOUNT_COL]).ToString("0.00");
                hc.BALANCE_AMOUNT = Convert.ToDecimal(returnData["BALANCE_AMOUNT"]).ToString("0.00");
                hc.CREATE_BY1 = !DBNull.Value.Equals(returnData["CREATE_BY"]) ? Convert.ToString(returnData["CREATE_BY"]) : string.Empty;
                hc.CREATE_DT = !DBNull.Value.Equals(returnData["CREATE_DT"]) ? Convert.ToString(returnData["CREATE_DT"]) : string.Empty;
                hc.MODIFY_BY1 = !DBNull.Value.Equals(returnData["MODIFY_BY"]) ? Convert.ToString(returnData["MODIFY_BY"]) : string.Empty;
                hc.MODIFY_DT = !DBNull.Value.Equals(returnData["MODIFY_DT"]) ? Convert.ToString(returnData["MODIFY_DT"]) : string.Empty;
                hc.HEALTH_CARD_ISSUE_DT = !DBNull.Value.Equals(returnData["HEALTH_CARD_ISSUE_DT"]) ? Convert.ToString(returnData["HEALTH_CARD_ISSUE_DT"]) : string.Empty;
                hc.VALIDITY_FROM_DT = !DBNull.Value.Equals(returnData["VALIDITY_FROM_DT"]) ? Convert.ToString(returnData["VALIDITY_FROM_DT"]) : string.Empty;
                hc.VALIDITY_TO_DT = !DBNull.Value.Equals(returnData["VALIDITY_TO_DT"]) ? Convert.ToString(returnData["VALIDITY_TO_DT"]) : string.Empty;
                hc.RECORD_STATUS = !DBNull.Value.Equals(returnData["RECORD_STATUS"]) ? Convert.ToString(returnData["RECORD_STATUS"]) : string.Empty;
                hc.EMPLOYEE_CD = !DBNull.Value.Equals(returnData["EMPLOYEE_CD"]) ? Convert.ToString(returnData["EMPLOYEE_CD"]) : string.Empty;
                hc.EMPLOYEE_NAME = !DBNull.Value.Equals(returnData["EMPLOYEE_NAME"]) ? Convert.ToString(returnData["EMPLOYEE_NAME"]) : string.Empty;
                hcc.add(hc);

            }
            return hcc;
        }
        public CollectionBase HealtCardChildDetailsNew(HEALTH_CARD_DET hcd)
        {

            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_HEALTH_CARD_DET);
                dBase.AddInParameter(dbcmd, DALConstants.HEALTH_CARD_ID_PARAM, DbType.Int32, hcd.HEALTH_CARD_ID);

                //dBase.AddOutParameter(dbcmd, DALConstants.HOP_COUNT_PARAM, DbType.Int32, totalrecords);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(GetHealthCardChildNew);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                //totalrecords = Convert.ToInt32(dBase.GetParameterValue(dbcmd, DALConstants.HOP_COUNT_PARAM));
                return cbase;

            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("HealtCardChildDetailsNew").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase GetHealthCardChildNew(IDataReader idr)
        {
            try
            {
                HealthCardCollectionDet hlthcoll = new HealthCardCollectionDet();
                HEALTH_CARD_DET hlthcardtype;
                while (idr.Read())
                {
                    hlthcardtype = new HEALTH_CARD_DET();
                    hlthcardtype.HEALTH_CARD_ID = Convert.ToInt32(idr[DALConstants.HEALTH_CARD_ID_COL].ToString());
                    hlthcardtype.HEALTH_CARD_NO = idr[DALConstants.HEALTH_CARD_NO_COL].ToString();
                    hlthcardtype.UMR_NO = idr[DALConstants.HUMR_NO_COL].ToString();
                    hlthcardtype.FIRST_NAME = idr[DALConstants.HFIRSTNAME].ToString();
                    hlthcardtype.MODDLE_NAME = idr["MIDDLE_NAME"].ToString();
                    hlthcardtype.LAST_NAME = idr[DALConstants.HLASTNAME].ToString();
                    // hlthcardtype.GENDER = idr[DALConstants.HGENDER].ToString();
                    hlthcardtype.GENDER = (idr["SEX_NAME"].ToString());
                    hlthcardtype.IS_PRIMARY_CARD_HOLDER = idr[DALConstants.HPRIMARYHOLDER].ToString();
                    hlthcardtype.AGE = !string.IsNullOrEmpty(idr[DALConstants.AGE_COL].ToString()) ? Convert.ToInt32(idr[DALConstants.AGE_COL].ToString()) : 0;
                    hlthcardtype.RECORD_STATUS = idr[DALConstants.HSTATUS].ToString();
                    hlthcardtype.RELATION = idr["PATIENT_RELATIONSHIP_ID"].ToString();
                    hlthcardtype.HEALTH_CARD_DET_ID = Convert.ToInt32(idr[DALConstants.HHEALTH_CARD_DET_ID_COL].ToString());
                    hlthcardtype.HEALTH_CARD_DET_REV_NO = Convert.ToInt32(idr["HEALTH_CARD_DET_REV_NO"].ToString());
                    hlthcardtype.RULE_ID = (idr["CNCSN_RULE_ID"].ToString());
                    hlthcardtype.RULE_NAME = (idr["CNCSN_RULE_NAME"].ToString());
                    hlthcardtype.CNCSN_RULE_CD = (idr["CNCSN_RULE_CD"].ToString());
                    hlthcardtype.MODIFY_BY1 = idr["MODIFY_BY"].ToString();
                    hlthcardtype.MODIFY_DT = (idr["MODIFY_DT"].ToString());


                    hlthcoll.add(hlthcardtype);
                }
                return hlthcoll;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetHealthCardChild").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase Healthcarddetailsbasedonhctype(int hc_type_id)
        {
            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_HC_CARD_DET");
                dBase.AddInParameter(dbcmd, "@IP_HC_CARD_TYPE_ID", DbType.Int32, hc_type_id);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(GetHealthCardonHCtypes);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;

            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Healthcarddetailsbasedonhctype").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase GetHealthCardonHCtypes(IDataReader idr)
        {
            try
            {
                HealthCardCollectionDet hlthcoll = new HealthCardCollectionDet();
                HEALTH_CARD_DET hlthcardtype;
                while (idr.Read())
                {
                    hlthcardtype = new HEALTH_CARD_DET();
                    hlthcardtype.HEALTH_CARD_ID = !DBNull.Value.Equals(idr["HEALTH_CARD_ID"]) ? Convert.ToInt32(idr["HEALTH_CARD_ID"].ToString()) : 0;
                    hlthcardtype.HEALTH_CARD_NO = !DBNull.Value.Equals(idr["HEALTH_CARD_NO"]) ? Convert.ToString(idr["HEALTH_CARD_NO"]) : string.Empty;
                    hlthcardtype.HEALTH_CARD_TYPE_ID = !DBNull.Value.Equals(idr["HEALTH_CARD_TYPE_ID"]) ? Convert.ToInt32(idr["HEALTH_CARD_TYPE_ID"].ToString()) : 0;
                    hlthcardtype.BALANCE_AMOUNT = !DBNull.Value.Equals(idr["BALANCE_AMOUNT"]) ? Convert.ToString(idr["BALANCE_AMOUNT"]) : "0";
                    hlthcardtype.CARD_VALIDITY_YEARS = !DBNull.Value.Equals(idr["CARD_VALIDITY_YEARS"]) ? Convert.ToString(idr["CARD_VALIDITY_YEARS"]) : "0";
                    hlthcardtype.CNCSN_RULE_ID = !DBNull.Value.Equals(idr["CNCSN_RULE_ID"]) ? Convert.ToInt32(idr["CNCSN_RULE_ID"]) : 0;
                    hlthcoll.add(hlthcardtype);
                }
                return hlthcoll;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetHealthCardonHCtypes").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase HCUnRegisterEdPatDtls(int hc_id)
        {
            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_HCCARD_NOT_REGISTR");
                dBase.AddInParameter(dbcmd, "@IP_HC_CARD_ID", DbType.Int32, hc_id);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(GethcUnregBasedonHcID);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;

            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Healthcarddetailsbasedonhctype").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase GethcUnregBasedonHcID(IDataReader idr)
        {
            try
            {
                HealthCardCollectionDet hlthcoll = new HealthCardCollectionDet();
                HEALTH_CARD_DET hlthcardtype;
                while (idr.Read())
                {
                    hlthcardtype = new HEALTH_CARD_DET();
                    hlthcardtype.HEALTH_CARD_NO = !DBNull.Value.Equals(idr["HEALTH_CARD_NO"]) ? Convert.ToString(idr["HEALTH_CARD_NO"]) : string.Empty;
                    hlthcardtype.HEALTH_CARD_DET_ID = !DBNull.Value.Equals(idr["HEALTH_CARD_DET_ID"]) ? Convert.ToInt32(idr["HEALTH_CARD_DET_ID"].ToString()) : 0;
                    hlthcardtype.FIRST_NAME = !DBNull.Value.Equals(idr["FIRST_NAME"]) ? Convert.ToString(idr["FIRST_NAME"]) : "";
                    hlthcardtype.MIDDLENAME = !DBNull.Value.Equals(idr["MIDDLE_NAME"]) ? Convert.ToString(idr["MIDDLE_NAME"]) : "";
                    hlthcardtype.LAST_NAME = !DBNull.Value.Equals(idr["LAST_NAME"]) ? Convert.ToString(idr["LAST_NAME"]) : "";
                    hlthcardtype.CNCSN_RULE_ID = !DBNull.Value.Equals(idr["CNCSN_RULE_ID"]) ? Convert.ToInt32(idr["CNCSN_RULE_ID"].ToString()) : 0;
                    hlthcardtype.ELIGIBILITY_AMOUNT = !DBNull.Value.Equals(idr["ELIGIBILITY_AMOUNT"]) ? (idr["ELIGIBILITY_AMOUNT"].ToString()) : string.Empty;
                    hlthcardtype.GENDER = !DBNull.Value.Equals(idr["GENDER_ID"]) ? Convert.ToString(idr["GENDER_ID"]) : "";
                    if (idr["AGE"] != "")
                    {
                        if (idr["AGE"].ToString() != "")
                            hlthcardtype.AGE = !DBNull.Value.Equals(idr["AGE"]) ? Convert.ToInt32(idr["AGE"].ToString()) : 0;
                        else
                            hlthcardtype.AGE = 0;
                    }
                    else
                    {
                        hlthcardtype.AGE = 0;
                    }
                    hlthcardtype.EMPLOYEE_ID = !DBNull.Value.Equals(idr["EMPLOYEE_ID"]) ? Convert.ToString(idr["EMPLOYEE_ID"]) : "";
                    hlthcardtype.EMPLOYEE_DEPENDENTS_ID = !DBNull.Value.Equals(idr["EMPLOYEE_DEPENDENTS_ID"]) ? Convert.ToString(idr["EMPLOYEE_DEPENDENTS_ID"]) : "";
                    hlthcardtype.RELATION = !DBNull.Value.Equals(idr["RELATION_ID"]) ? Convert.ToString(idr["RELATION_ID"]) : "";
                    hlthcardtype.RELATIONSHIP_NAME = !DBNull.Value.Equals(idr["RELATIONSHIP_NAME"]) ? Convert.ToString(idr["RELATIONSHIP_NAME"]) : "";
                    hlthcardtype.ED_EMPLOYEE_ID = !DBNull.Value.Equals(idr["ED_EMPLOYEE_ID"]) ? Convert.ToString(idr["ED_EMPLOYEE_ID"]) : "";
                    hlthcoll.add(hlthcardtype);
                }
                return hlthcoll;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetHealthCardonHCtypes").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase MultipleHcGetting(string umr_no)
        {
            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_HC_HEALTH_CARD_DET_UMR_NO");
                dBase.AddInParameter(dbcmd, "@IP_UMR_NO", DbType.String, umr_no);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(Gethcmultipledata);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                return cbase;

            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Healthcarddetailsbasedonhctype").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }
        public CollectionBase Gethcmultipledata(IDataReader idr)
        {
            try
            {
                HealthCardCollectionDet hlthcoll = new HealthCardCollectionDet();
                HEALTH_CARD_DET hlthcardtype;
                while (idr.Read())
                {
                    hlthcardtype = new HEALTH_CARD_DET();
                    hlthcardtype.HEALTH_CARD_DET_ID = !DBNull.Value.Equals(idr["HEALTH_CARD_DET_ID"]) ? Convert.ToInt32(idr["HEALTH_CARD_DET_ID"].ToString()) : 0;
                    hlthcardtype.HEALTH_CARD_ID = !DBNull.Value.Equals(idr["HEALTH_CARD_ID"]) ? Convert.ToInt32(idr["HEALTH_CARD_ID"].ToString()) : 0;
                    hlthcardtype.UMR_NO = !DBNull.Value.Equals(idr["UMR_NO"]) ? Convert.ToString(idr["HEALTH_CARD_ID"]) : "";
                    hlthcardtype.HEALTH_CARD_NO = !DBNull.Value.Equals(idr["HEALTH_CARD_NO"]) ? Convert.ToString(idr["HEALTH_CARD_NO"]) : string.Empty;
                    hlthcardtype.FIRST_NAME = !DBNull.Value.Equals(idr["FIRST_NAME"]) ? Convert.ToString(idr["FIRST_NAME"]) : "";
                    hlthcardtype.MIDDLENAME = !DBNull.Value.Equals(idr["MIDDLE_NAME"]) ? Convert.ToString(idr["MIDDLE_NAME"]) : "";
                    hlthcardtype.LAST_NAME = !DBNull.Value.Equals(idr["LAST_NAME"]) ? Convert.ToString(idr["LAST_NAME"]) : "";
                    hlthcardtype.FULL_NAME = !DBNull.Value.Equals(idr["FULL_NAME"]) ? Convert.ToString(idr["FULL_NAME"]) : "";
                    hlthcardtype.UTILIZED_AMOUNT = !DBNull.Value.Equals(idr["UTILIZED_AMOUNT"]) ? Convert.ToString(idr["UTILIZED_AMOUNT"]) : "";
                    hlthcardtype.HEALTH_CARD_TYPE_ID = !DBNull.Value.Equals(idr["HEALTH_CARD_TYPE_ID"]) ? Convert.ToInt32(idr["HEALTH_CARD_TYPE_ID"].ToString()) : 0;
                    hlthcardtype.HEALTH_CARD_TYPE_NAME = !DBNull.Value.Equals(idr["HEALTH_CARD_TYPE_NAME"]) ? Convert.ToString(idr["HEALTH_CARD_TYPE_NAME"]) : "";
                    hlthcoll.add(hlthcardtype);
                }
                return hlthcoll;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetHealthCardonHCtypes").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

        public CollectionBase HealthCard_no_based_onHc_type(int hc_type_id, LookUpSearch objmod, out int count)
        {
            try
            {
                count = 0;
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dBase = dblayer.DBaseFactory;
                DbCommand dbcmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_HEALTH_CARD_LOOKUP");
                dBase.AddInParameter(dbcmd, "@IP_HEALTH_CARD_TYPE_ID", DbType.Int32, hc_type_id);
                dBase.AddInParameter(dbcmd, "@IP_COLUMN_NAME", DbType.String, objmod.COLUMN_NAME);
                dBase.AddInParameter(dbcmd, "@IP_PREFIX_TEXT", DbType.String, objmod.PREFIX_TEXT);
                if (!string.IsNullOrEmpty(objmod.ADVANCESEARCH))
                {
                    dBase.AddInParameter(dbcmd, "@IP_ADVANCE_SEARCH", DbType.String, objmod.ADVANCESEARCH);
                }
                dBase.AddInParameter(dbcmd, "@IP_PAGENUM", DbType.Int32, objmod.CURRENT_PAGE);
                dBase.AddInParameter(dbcmd, "@IP_PAGESIZE", DbType.Int32, objmod.PAGE_SIZE);
                dBase.AddOutParameter(dbcmd, "@OP_COUNT", DbType.Int32, count);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(HealthCard_no_based_onHc_type_collection);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(dbcmd, sqldata);
                count = Convert.ToInt32(dBase.GetParameterValue(dbcmd, "@OP_COUNT"));
                return cbase;

            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("HealthCard_no_based_onHc_type").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                count = 0;
                return null;

            }
        }

        public CollectionBase HealthCard_no_based_onHc_type_collection(IDataReader idr)
        {
            try
            {
                HealthCardCollectionDet hlthcoll = new HealthCardCollectionDet();
                HEALTH_CARD hlthcardtype;
                while (idr.Read())
                {
                    hlthcardtype = new HEALTH_CARD();
                    hlthcardtype.HEALTH_CARD_ID = !DBNull.Value.Equals(idr["HEALTH_CARD_ID"]) ? Convert.ToInt32(idr["HEALTH_CARD_ID"].ToString()) : 0;
                    hlthcardtype.HEALTH_CARD_NO = !DBNull.Value.Equals(idr["HEALTH_CARD_NO"]) ? Convert.ToString(idr["HEALTH_CARD_NO"]) : string.Empty;
                    hlthcardtype.UTILIZED_AMOUNT = !DBNull.Value.Equals(idr["UTILIZED_AMOUNT"]) ? Convert.ToString(idr["UTILIZED_AMOUNT"]) : "0";
                    hlthcardtype.ACTUAL_AMOUNT = !DBNull.Value.Equals(idr["ACTUAL_AMOUNT"]) ? Convert.ToString(idr["ACTUAL_AMOUNT"]) : "0";
                    hlthcardtype.ELIGIBILITY_AMOUNT = !DBNull.Value.Equals(idr["ELIGIBILITY_AMOUNT"]) ? Convert.ToString(idr["ELIGIBILITY_AMOUNT"]) : "0";
                    hlthcardtype.HEALTH_CARD_TYPE_ID = !DBNull.Value.Equals(idr["HEALTH_CARD_TYPE_ID"]) ? Convert.ToInt32(idr["HEALTH_CARD_TYPE_ID"].ToString()) : 0;
                    hlthcardtype.HEALTH_CARD_TYPE_CD = !DBNull.Value.Equals(idr["HEALTH_CARD_TYPE_CD"]) ? idr["HEALTH_CARD_TYPE_CD"].ToString() : string.Empty;
                    hlthcardtype.HEALTH_CARD_TYPE_NAME = !DBNull.Value.Equals(idr["HEALTH_CARD_TYPE_NAME"]) ? idr["HEALTH_CARD_TYPE_NAME"].ToString() : string.Empty;
                    hlthcardtype.DISPLAY_NAME = !DBNull.Value.Equals(idr["DISPLAY_NAME"]) ? idr["DISPLAY_NAME"].ToString() : string.Empty;
                    hlthcardtype.VALIDITY_FROM_DT = !DBNull.Value.Equals(idr["VALIDITY_FROM_DT"]) ? idr["VALIDITY_FROM_DT"].ToString() : string.Empty;
                    hlthcardtype.VALIDITY_TO_DT = !DBNull.Value.Equals(idr["VALIDITY_TO_DT"]) ? idr["VALIDITY_TO_DT"].ToString() : string.Empty;
                    hlthcardtype.HEALTH_CARD_DET_ID = !DBNull.Value.Equals(idr["HEALTH_CARD_DET_ID"]) ? Convert.ToInt32(idr["HEALTH_CARD_DET_ID"].ToString()) : 0;
                    hlthcoll.add(hlthcardtype);
                }
                return hlthcoll;
            }
            catch (Exception e)
            {
                e.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("HealthCard_no_based_onHc_type_collection").Name;
                ErrorLoger.InsertErrorLogger(e, 100, 1);
                return null;
            }
        }

    }
}
