using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using PriceModal = EzHms.ModelEntity.ServicePrice;
using System.Data.Common;
using System.Data;
using Microsoft.Practices.EnterpriseLibrary.Data;
using System.Collections;
using EzHms.ModelEntity;
using ServiceMasterModel = EzHms.ModelEntity.ServiceMaster;
using servicemaster = EzHms.ModelEntity.TARIFF_SERVICE;
using ServiceMasterCollection = EzHms.ModelEntity.ServiceMasterCollection;
using SMConstants = EzHms.ModelEntity.DALConstants;
using SPNames = EzHms.ModelEntity.StoreProceduresNames;
using Microsoft.Practices.EnterpriseLibrary.Caching;
using Microsoft.Practices.EnterpriseLibrary.Caching.Expirations;
using System.IO;

namespace EzHms.DataAccessObject
{
    public class DBServiceMaster : DBExecuteDataReader
    {
        public CollectionBase GetServicePriceforcons(PriceModal priceMaster)
        {

            try
            {
                DataAccessLayer dAccessLayer = new DataAccessLayer();
                Database dBase = dAccessLayer.DBaseFactory;
                DbCommand dbCmd = dAccessLayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GET_SERVICE_PRICE);

                dAccessLayer.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARM, DbType.Int32, priceMaster.SERVICE_ID);
                dAccessLayer.AddInParameter(dbCmd, DALConstants.CONSULTATION_TYPE_ID_PARM, DbType.Int32, priceMaster.CONSULTATION_TYPE_ID);
                dAccessLayer.AddInParameter(dbCmd, DALConstants.DOCTOR_ID_PARM, DbType.Int32, priceMaster.DOCTOR_ID);
                dAccessLayer.AddInParameter(dbCmd, DALConstants.PATIENT_ID_PARM, DbType.Int32, priceMaster.PATIENT_ID);
                dAccessLayer.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, priceMaster.TARIFF_ID);
                dAccessLayer.AddInParameter(dbCmd, DALConstants.FACILITY_ID_PARAM, DbType.Int32, priceMaster.FACILITY_ID);
                // dAccessLayer.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, priceMaster.SESSION_ID);
                dAccessLayer.AddInParameter(dbCmd, DALConstants.SURGERY_CATEGORY_ID_PARM, DbType.Int32, priceMaster.SURGERY_CATEGORY_ID);
                dAccessLayer.AddInParameter(dbCmd, DALConstants.SURGERY_CLASS_ID_PARM, DbType.Int32, priceMaster.SURGERY_CLASS_ID);
                dAccessLayer.AddInParameter(dbCmd, DALConstants.DEPARTMENT_ID_PARM, DbType.Int32, priceMaster.DEPARTMENT_ID);
                dAccessLayer.AddInParameter(dbCmd, DALConstants.COMPANY_ID_PARM, DbType.Int32, priceMaster.COMPANY_ID);
                if (!string.IsNullOrEmpty(priceMaster.PATIENT_CLASS_ID.ToString()))
                {
                    dBase.AddInParameter(dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, priceMaster.PATIENT_CLASS_ID);
                }
                else
                {
                    dBase.AddInParameter(dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, 0);
                }
                //dBase.AddInParameter(dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, priceMaster.PATIENT_CLASS_ID);
                //dBase.AddInParameter(dbCmd, DALConstants.CONSULTATION_TYPE_ID_PARM, DbType.Int32, priceMaster.PRICE_LEVEL_ID);
                //dBase.AddInParameter(dbCmd, DALConstants.PRICE_TIER_ID_PARM, DbType.Int32, priceMaster.PRICE_TIER_ID);
                //dBase.AddInParameter(dbCmd, DALConstants.WARD_ID_PARM, DbType.Int32, priceMaster.WARD_ID);

                GenerateCollectionReader _SqlData = new GenerateCollectionReader(GenerateConServPriceCollnew);
                CollectionBase _coll = dAccessLayer.ExecuteReaderCommand(dbCmd, _SqlData);

                return _coll;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicePrice").Name;
                ErrorLoger.InsertErrorLogger(ex, 1702, 1);
                return null;
            }
            //  return null;

        }

        public CollectionBase GenerateConServPriceCollnew(IDataReader returnData)
        {

            Service_PriceModel _objModel = null;
            service_priceCollection _objColl = new service_priceCollection();

            while (returnData.Read())
            {
                _objModel = new Service_PriceModel();
                _objModel.PRICE = !DBNull.Value.Equals(returnData[DALConstants.PRICE_COL]) ? Convert.ToString(returnData[DALConstants.PRICE_COL]) : string.Empty;
                _objModel.NO_OF_DAYS = !DBNull.Value.Equals(returnData[DALConstants.NO_OF_DAYS_COL]) ? Convert.ToInt32(returnData[DALConstants.NO_OF_DAYS_COL]) : 0;
                _objModel.NO_OF_VISITS = !DBNull.Value.Equals(returnData[DALConstants.NO_OF_VISITS_COL]) ? Convert.ToInt32(returnData[DALConstants.NO_OF_VISITS_COL]) : 0;
                _objModel.ORG_PRICE = !DBNull.Value.Equals(returnData[DALConstants.ORG_PRICE_COL]) ? Convert.ToString(returnData[DALConstants.ORG_PRICE_COL]) : "0";
                _objModel.DOCTOR_PRICE = !DBNull.Value.Equals(returnData[DALConstants.DOCTOR_PRICE_COL]) ? Convert.ToString(returnData[DALConstants.DOCTOR_PRICE_COL]) : "0";
                _objModel.P_D_NO_VISITS = !DBNull.Value.Equals(returnData["P_D_NO_VISITS"]) ? Convert.ToInt32(returnData["P_D_NO_VISITS"]) : 0;
                _objModel.P_NO_VISITS = !DBNull.Value.Equals(returnData["P_NO_VISITS"]) ? Convert.ToInt32(returnData["P_NO_VISITS"]) : 0;
                _objModel.NO_OF_VISITS_DOCTOR_DAY = !DBNull.Value.Equals(returnData["NO_OF_VISITS_DOCTOR_DAY"]) ? Convert.ToInt32(returnData["NO_OF_VISITS_DOCTOR_DAY"]) : 0;
                _objModel.SERVICE_PRICE_ID = !DBNull.Value.Equals(returnData["SERVICE_PRICE_ID"]) ? Convert.ToString(returnData["SERVICE_PRICE_ID"]) : "0";
                _objModel.ORG_PCT = !DBNull.Value.Equals(returnData["ORG_PCT"]) ? Convert.ToString(returnData["ORG_PCT"]) : "0";
                _objModel.DOCTOR_PCT = !DBNull.Value.Equals(returnData["DOCTOR_PCT"]) ? Convert.ToString(returnData["DOCTOR_PCT"]) : "0";
                _objColl.Add(_objModel);
            }

            return _objColl;
        }
        //For Service Masters EventLog id's starts with 1200
        private ICacheManager _pOptionCache = null;

        public CollectionBase get_auto_wardGroups(string contextKey, string prefixText, int count)
        {
            DataAccessLayer dbLayer = new DataAccessLayer();
            DbCommand dbCmd = null;
            dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_WARD_AUTO);
            try
            {
                dbLayer.AddInParameter(dbCmd, DALConstants.IP_PREFIXTEXT_PARAM, DbType.String, prefixText);
                dbLayer.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, 1);
                GenerateCollectionReader SqlData = new GenerateCollectionReader(GenerateWardsCollection);
                CollectionBase _coll = dbLayer.ExecuteReaderCommand(dbCmd, SqlData);
                return _coll;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("get_auto_wardGroups").Name;
                ErrorLoger.InsertErrorLogger(ex, 1201, 1);

            }

            return null;
        }


        protected CollectionBase GenerateWardsCollection(IDataReader returnData)
        {
            WardMasterCollection _coll = new WardMasterCollection();
            WardMaster _objMaster = null;
            while (returnData.Read())
            {
                _objMaster = new WardMaster();
                _objMaster.WARD_ID = !DBNull.Value.Equals(returnData[DALConstants.WARD_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.WARD_ID_COL]) : 0;
                _objMaster.WARD_GROUP_ID = !DBNull.Value.Equals(returnData[DALConstants.WARD_GROUP_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.WARD_GROUP_ID_COL]) : 0;
                _objMaster.WARD_DESC = !DBNull.Value.Equals(returnData[DALConstants.WARD_NAME_COL]) ? Convert.ToString(returnData[DALConstants.WARD_NAME_COL]) : string.Empty;
                _coll.Add(_objMaster);
            }
            return _coll;
        }




        public bool saveServiceMasterDetails(ServiceMasterModel sMaster, out string servicecd)
        {
            servicecd = "";
            try
            {

                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = null;
                if (sMaster.TARIFF_ID > 0)
                {
                    dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_INSUPD_TARIFF_SERVICE);
                    dBase.AddInParameter(dbCmd, DALConstants.GENERAL_SERVICE_ID_PARM, DbType.Int32, sMaster.PARENT_SERVICE_ID);
                    dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, sMaster.TARIFF_ID);
                }
                else
                {
                    dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_INSUPD_SERVICEMASTER);
                    dBase.AddInParameter(dbCmd, DALConstants.ACC_CMP_ID_PARM, DbType.Int32, sMaster.ACC_CMP_ID);
                    dBase.AddInParameter(dbCmd, DALConstants.ACC_CMP_PCT_PARM, DbType.Double, sMaster.ACC_CMP_PCT);
                    dBase.AddInParameter(dbCmd, DALConstants.ACC_EFFECT_FROM_DT_PARM, DbType.String, sMaster.ACC_EFFECT_FROM_DT);
                    dBase.AddInParameter(dbCmd, DALConstants.ACC_EFFECT_TO_DT_PARM, DbType.String, sMaster.ACC_EFFECT_TO_DT);
                    dBase.AddInParameter(dbCmd, "@IP_IS_APPOINTMENT", DbType.String, sMaster.IS_APPT_REQ);
                    dBase.AddInParameter(dbCmd, "@IP_IS_CONSENT_FORM", DbType.String, sMaster.IS_CONSENT_REQ);
                    dBase.AddInParameter(dbCmd, "@IP_IS_SRV_GUIDELINES_REQUIRED", DbType.String, sMaster.IS_SRV_GUIDELINES_REQUIRED);
                    dBase.AddInParameter(dbCmd, "@IP_IS_SRV_CHECKLIST_REQUIRED", DbType.String, sMaster.IS_SRV_CHECKLIST_REQUIRED);
                    dBase.AddInParameter(dbCmd, "@IP_IS_SRV_INSTRUCTION_REQ", DbType.String, sMaster.IS_SRV_INSTRUCTION_REQ);
                    dBase.AddInParameter(dbCmd, "@IP_IS_PRE_REQUISIT", DbType.String, sMaster.IS_PRE_REQUISIT);
                    dBase.AddInParameter(dbCmd, "@IP_IS_QUANTITY_EDIT", DbType.String, sMaster.IS_QUANTITY_EDIT);
                    dBase.AddInParameter(dbCmd, "@IP_IS_PRICE_EDIT", DbType.String, sMaster.IS_PRICE_EDIT);
                    dBase.AddInParameter(dbCmd, "@IP_TEST_OCCURANCY", DbType.Int32, sMaster.TESTOCCURaNCY);
                    dBase.AddInParameter(dbCmd, "@IP_MAX_CEILING", DbType.String, sMaster.MAXCEILING);
                    dBase.AddInParameter(dbCmd, "@IP_MIN_CEILING", DbType.String, sMaster.MINCEILING);
                    dBase.AddInParameter(dbCmd, "@IP_NUM_OF_DAYS", DbType.Int32, sMaster.NO_OF_DAYS);
                    dBase.AddInParameter(dbCmd, "@IP_CONSENT_TEMPLATE_ID", DbType.String, sMaster.CONSENT_TEMPLATE_ID);
                    dBase.AddInParameter(dbCmd, "@IP_SERVICE_GUIDELINE_TEMPLATE_ID", DbType.String, sMaster.SERVICE_GUIDELINE_TEMPLATE_ID);
                    dBase.AddInParameter(dbCmd, "@IP_SERVICE_CHECKLIST_TEMPLATE_ID", DbType.String, sMaster.SERVICE_CHECKLIST_TEMPLATE_ID);
                    dBase.AddInParameter(dbCmd, "@IP_SERVICE_INSTRUCTIONS_TEMPLATE_ID", DbType.String, sMaster.SERVICE_INSTRUCTIONS_TEMPLATE_ID);
                    dBase.AddInParameter(dbCmd, "@IP_PRE_REQUIST_NOTE", DbType.String, sMaster.NOTE);
                    dBase.AddInParameter(dbCmd, "@IP_FROM_AGE", DbType.Int32, sMaster.FROM_AGE);
                    dBase.AddInParameter(dbCmd, "@IP_TO_AGE", DbType.Int32, sMaster.TO_AGE);
                    dBase.AddInParameter(dbCmd, "@IP_SERVICE_QUESTION_TEMPLATE_ID", DbType.Int32, Convert.ToInt32(sMaster.SERVICE_QUESTION_TEMPLATE_ID));
                    dBase.AddInParameter(dbCmd, "@IP_SERVICE_FEEDBACK_TEMPLATE_ID", DbType.Int32, Convert.ToInt32(sMaster.SERVICE_FEEDBACK_TEMPLATE_ID));
                    dBase.AddInParameter(dbCmd, "@IP_SERVICE_SUBCLASS_ID", DbType.Int32, sMaster.SERVICE_SUBCLASS_ID);
                    if (sMaster.MAX_OPT_SERVICES_ALLOWED != "" && sMaster.MAX_OPT_SERVICES_ALLOWED != string.Empty)
                    {
                        dBase.AddInParameter(dbCmd, "@IP_MAX_OPT_SERVICES_ALLOWED", DbType.Int32, sMaster.MAX_OPT_SERVICES_ALLOWED);
                    }
                    dBase.AddInParameter(dbCmd, "@IP_IS_DOCTOR_SHARE_REQUIRED", DbType.String, sMaster.IS_DOCTOR_SHARE_REQUIRED);
                    dBase.AddInParameter(dbCmd, "@IP_PRICING_METHOD_ID", DbType.String, sMaster.PRICING_METHOD_ID);
                    dBase.AddInParameter(dbCmd, "@IP_IS_DIRECT_BILLING", DbType.String, sMaster.IS_DIRECT_BILLING);
                    dBase.AddInParameter(dbCmd, "@IP_IS_ONLINE_DISPLAY", DbType.String, sMaster.IS_ONLINE_DISPLAY);
                    dBase.AddInParameter(dbCmd, "@IP_APPROVAL_MUST", DbType.String, sMaster.ISAPPROVALMUST);
                    dBase.AddInParameter(dbCmd, "@IP_GL_CD", DbType.String, sMaster.GL_CODE);
                    dBase.AddInParameter(dbCmd, "@IP_CPT_ID", DbType.String, sMaster.CPT_ID);
                }
                dBase.AddInParameter(dbCmd, "@IP_DURATION", DbType.Int32, sMaster.Duration);
                dBase.AddInParameter(dbCmd, DALConstants.IS_FOREIGN_SERVICE_PARM, DbType.String, sMaster.IS_FOREIGN_SERVICE);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARM, DbType.Int32, sMaster.SERVICE_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_REV_NO_PARM, DbType.Int32, sMaster.SERVICE_REV_NO);
                dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sMaster.SESSION_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_CD_PARM, DbType.String, sMaster.SERVICE_CD);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_NAME_PARM, DbType.String, sMaster.SERVICE_NAME);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_DESC_PARM, DbType.String, sMaster.SERVICE_DESC);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICEM_DISPNAME_PARM, DbType.String, sMaster.DisplayName);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICEM_UNIOCDE_PARM, DbType.String, sMaster.Uniservicecode);
                dBase.AddInParameter(dbCmd, DALConstants.ISACTIVE_PARM, DbType.String, sMaster.IsActive);
                //dBase.AddInParameter(dbCmd, DALConstants.HOSPITAL_ID_PARM, DbType.Int32, sMaster.HOSPITAL_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, Convert.ToInt32(CommonFunctions.Get_ID(sMaster.Service_Type_IdSeq)[0]));
                dBase.AddInParameter(dbCmd, DALConstants.COVERAGE_ID_PARM, DbType.Int32, Convert.ToInt32(CommonFunctions.Get_ID(sMaster.Coverage_IdSeq)[0]));
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_GROUP_ID_PARM, DbType.Int32, Convert.ToInt32(CommonFunctions.Get_ID(sMaster.Service_Grp_IdSeq)[0]));
                //dBase.AddInParameter(dbCmd, DALConstants.SERVICECLASS_ID_PARM, DbType.Int32, Convert.ToInt32(CommonFunctions.Get_ID(sMaster.Service_Class_IdSeq)[0]));
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_CLASS_ID_PARM, DbType.Int32, Convert.ToInt32(CommonFunctions.Get_ID(sMaster.Service_Class_IdSeq)[0]));
                dBase.AddInParameter(dbCmd, DALConstants.EFFECT_FROM_DT_PARM, DbType.String, sMaster.EFFECT_FROM_DT);
                dBase.AddInParameter(dbCmd, DALConstants.EFFECT_TO_DT_PARM, DbType.String, sMaster.EFFECT_TO_DT);
                dBase.AddInParameter(dbCmd, DALConstants.PRICE_PARM, DbType.Int32, sMaster.PRICE);

                dBase.AddInParameter(dbCmd, DALConstants.DOCTOR_PRICE_PARM, DbType.Int32, sMaster.DOCTOR_PRICE);
                dBase.AddInParameter(dbCmd, DALConstants.ORG_PRICE_PARM, DbType.Int32, sMaster.IS_PRICE);

                dBase.AddInParameter(dbCmd, "@IP_DOCTOR_PRICE_PER", DbType.Int32, sMaster.HOSPITAL_ID_VER);
                dBase.AddInParameter(dbCmd, "@IP_ORG_PRICE_PER", DbType.Int32, sMaster.IS_DOCTOR_REQUIRED);

                dBase.AddInParameter(dbCmd, "IP_IS_NUR_STATION", DbType.String, sMaster.IS_NUR_STATION);
                dBase.AddInParameter(dbCmd, DALConstants.BILLING_HEAD_ID_PARM, DbType.Int32, sMaster.BILLING_HEAD_ID);
                dBase.AddInParameter(dbCmd, "@IP_LUXURY_TAX", DbType.String, sMaster.Luxry_tax);
                dBase.AddInParameter(dbCmd, DALConstants.EMERGANCY_PRICE_PARM, DbType.String, sMaster.EMERGNCY_PRICE);

                dBase.AddInParameter(dbCmd, "@IP_DOCTOR_PRICE_EMERGENCY", DbType.Int32, sMaster.IS_PRIC_EDIT);
                dBase.AddInParameter(dbCmd, "@IP_ORG_PRICE_EMERGENCY", DbType.Int32, sMaster.IS_REG_FEE_INCLUDED);


                dBase.AddInParameter(dbCmd, "@IP_DOCTOR_PRICE_EMERGENCY_PER", DbType.Int32, sMaster.IS_PRE_REQUISIT);
                dBase.AddInParameter(dbCmd, "@IP_ORG_PRICE_EMERGENCY_PER", DbType.Int32, sMaster.IS_QUANTITY_EDIT);




                dBase.AddInParameter(dbCmd, DALConstants.CONSUMPTION_PARM, DbType.String, sMaster.CONSUMPTION);
                dBase.AddInParameter(dbCmd, DALConstants.SRV_GENDER_ID_PARM, DbType.String, sMaster.GENDER_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SPECIES_ID_PARM, DbType.String, sMaster.SPECIES_ID);
                dBase.AddInParameter(dbCmd, DALConstants.FLAG_PARM, DbType.String, sMaster.FLAG);
                dBase.AddInParameter(dbCmd, DALConstants.COMPANY_ID_PARM, DbType.String, sMaster.COMPANY_ID);
                dBase.AddInParameter(dbCmd, "@IP_IS_REG_FEE_INCLUDED", DbType.String, sMaster.IS_REG_FEE_INCLUDED);
                dBase.AddInParameter(dbCmd, "@IP_OP_BILLINGHEAD", DbType.Int32, sMaster.BILLINGEAD_ID);
                dBase.AddInParameter(dbCmd, "@IP_SERVICE_SUBTYPE_ID", DbType.String, sMaster.SUB_PKD_ID);
                dBase.AddInParameter(dbCmd, "@XML", DbType.String, sMaster.XML);
                dBase.AddInParameter(dbCmd, "@IP_UNI_SERVICE_TYPE_ID", DbType.String, sMaster.UNI_SERVICE_TYPE_ID);
                dBase.AddInParameter(dbCmd, "@IP_FROM_DT", DbType.String, sMaster.FROM_DT);
                dBase.AddInParameter(dbCmd, "@IP_TO_DT", DbType.String, sMaster.TO_DT);
                dBase.AddInParameter(dbCmd, "@IP_TAX_ID", DbType.String, sMaster.TAX_ID);
                dBase.AddInParameter(dbCmd, "@IP_TAX_PCT", DbType.String, sMaster.TAX_PCT);
                dBase.AddInParameter(dbCmd, "@IP_TAX_AMOUNT", DbType.String, sMaster.TAX_AMOUNT);
                dBase.AddInParameter(dbCmd, "@IP_SERVICE_CD1", DbType.String, sMaster.SERVICE_CD1);
                dBase.AddInParameter(dbCmd, "@IP_IS_SRV_QTY_DISPLAY", DbType.String, sMaster.IS_SRV_QTY_DISPLAY);
                dBase.AddInParameter(dbCmd, "@IP_SRV_QTY_DISPLAY_SUFFIX_TEXT", DbType.String, sMaster.SRV_QTY_DISPLAY_SUFFIX_TEXT);
                dBase.AddInParameter(dbCmd, "@IP_PROCEDURE_TYPE_ID", DbType.String, sMaster.PROCEDURE_TYPE_ID);
                dBase.AddInParameter(dbCmd, "@IP_IS_DIET", DbType.String, sMaster.IS_DIET);
                dBase.AddInParameter(dbCmd, "@IP_IS_DOCTOR_REQUIRED", DbType.String, sMaster.IS_DOCTOR_REQUIRED);
                dBase.AddInParameter(dbCmd, "@IP_IS_SCHEDULE_REQUIRED", DbType.String, sMaster.IS_SCHEDULE_REQUIRED);

                dBase.AddInParameter(dbCmd, "@IP_ACCOUNT_SET", DbType.String, sMaster.ACCOUNT_SET);
                dBase.AddInParameter(dbCmd, "@IP_GL_CONTROL", DbType.String, sMaster.GL_CONTROL);
                dBase.AddInParameter(dbCmd, "@IP_CATEGORY", DbType.String, sMaster.CATEGORY);
                dBase.AddInParameter(dbCmd, "@IP_COGS_ACCOUNT", DbType.String, sMaster.COGS_ACCOUNT);
                dBase.AddInParameter(dbCmd, "@IP_SALES_REVENUE_ACCOUNT", DbType.String, sMaster.SALES_REVENUE_ACCOUNT);
                dBase.AddInParameter(dbCmd, "@IP_APPLICABLE_FOR_ID", DbType.Int32, sMaster.APPLICABLE_FOR_ID);
                //dBase.AddInParameter(dbCmd, "@IP_DOCTOR_PCT", DbType.String, sMaster.DOCTOR_PCT);
                //dBase.AddInParameter(dbCmd, "@IP_ORG_PCT", DbType.Int32, sMaster.ORG_PCT);

                dBase.AddOutParameter(dbCmd, "@OP_SERVICE_CD", DbType.String, 50);



                int count = dBase.ExecuteNonQuery(dbCmd);

                servicecd = (dBase.GetParameterValue(dbCmd, "@OP_SERVICE_CD")).ToString();
                if (count > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("saveServiceMasterDetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 1201, 1);
                return false;
            }
        }
        public bool saveServiceTypeChangeDetails(SERVICE_TYPE_CHANGE srvtypechng)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = null;

                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_INSUPD_SERVICE_TYPE_CHANGE");
                dBase.AddInParameter(dbCmd, "@IP_ORGANIZATION_ID", DbType.String, srvtypechng.ORGANIZATION_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_GROUP_ID_PARM, DbType.String, srvtypechng.SERVICE_GROUP_ID);
                dBase.AddInParameter(dbCmd, "@IP_SERVICE_TYPE", DbType.String, srvtypechng.SERVICE_TYPE);
                dBase.AddInParameter(dbCmd, DALConstants.IS_ACTIVE_PARM, DbType.String, srvtypechng.IS_ACTIVE);
                dBase.AddInParameter(dbCmd, "@IP_S_TYPE_CHANGE_CD", DbType.String, srvtypechng.S_TYPE_CHANGE_CD);
                dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, Convert.ToInt32(srvtypechng.SESSION_ID));

                int count = dBase.ExecuteNonQuery(dbCmd);

                if (count > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("saveServiceTypeChangeDetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 1201, 1);
                return false;
            }
        }

        public bool savetarifServiceMasterDetails(servicemaster sMaster)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = null;
                if (sMaster.TARIFF_ID > 0)
                {
                    dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_INSUPD_TARIFF_SERVICE);
                    dBase.AddInParameter(dbCmd, DALConstants.GENERAL_SERVICE_ID_PARM, DbType.Int32, sMaster.GENERAL_SERVICE_ID);
                    dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, sMaster.TARIFF_ID);
                }
                else
                {
                    dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_INSUPD_SERVICEMASTER);
                }

                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARM, DbType.Int32, sMaster.SERVICE_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_REV_NO_PARM, DbType.Int32, sMaster.SERVICE_REV_NO);
                dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sMaster.SESSION_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_CD_PARM, DbType.String, sMaster.SERVICE_CD);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_NAME_PARM, DbType.String, sMaster.SERVICE_NAME);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_DESC_PARM, DbType.String, sMaster.SERVICE_DESC);
                //dBase.AddInParameter(dbCmd, DALConstants.SERVICEM_DISPNAME_PARM, DbType.String, sMaster.DisplayName);
                //dBase.AddInParameter(dbCmd, DALConstants.SERVICEM_UNIOCDE_PARM, DbType.String, sMaster.Uniservicecode);
                ///dBase.AddInParameter(dbCmd, DALConstants.ISACTIVE_PARM, DbType.String, sMaster.IsActive);
                //dBase.AddInParameter(dbCmd, DALConstants.HOSPITAL_ID_PARM, DbType.Int32, sMaster.HOSPITAL_ID);
                //dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, Convert.ToInt32(CommonFunctions.Get_ID(sMaster.Service_Type_IdSeq)[0]));
               // dBase.AddInParameter(dbCmd, DALConstants.COVERAGE_ID_PARM, DbType.Int32, sMaster.COVERAGE_ID);
                //dBase.AddInParameter(dbCmd, DALConstants.SERVICE_GROUP_ID_PARM, DbType.Int32, Convert.ToInt32(CommonFunctions.Get_ID(sMaster.Service_Grp_IdSeq)[0]));
                //dBase.AddInParameter(dbCmd, DALConstants.SERVICECLASS_ID_PARM, DbType.Int32, Convert.ToInt32(CommonFunctions.Get_ID(sMaster.Service_Class_IdSeq)[0]));
               // dBase.AddInParameter(dbCmd, DALConstants.SERVICE_CLASS_ID_PARM, DbType.Int32, Convert.ToInt32(CommonFunctions.Get_ID(sMaster.Service_Class_IdSeq)[0]));
                dBase.AddInParameter(dbCmd, DALConstants.EFFECT_FROM_DT_PARM, DbType.String, sMaster.EFFECT_FROM_DT);
                dBase.AddInParameter(dbCmd, DALConstants.EFFECT_TO_DT_PARM, DbType.String, sMaster.EFFECT_TO_DT);
                dBase.AddInParameter(dbCmd, DALConstants.PRICE_PARM, DbType.Int32, sMaster.PRICE);
                dBase.AddInParameter(dbCmd, DALConstants.IS_FLAG, DbType.String, sMaster.IS_FLAG);
                int count = dBase.ExecuteNonQuery(dbCmd);

                if (count > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("savetarifServiceMasterDetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 1201, 1);
                return false;
            }
        }

        public bool DeleteServiceMasterDetails(string serMasID)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                // Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_DEL_SERVICE_MASTER);
                dbLayer.AddInParameter(dbCmd, "IP_SERVICE_ID", DbType.String, serMasID);
                int count = Convert.ToInt32(dbLayer.ExecuteNonQuery(dbCmd));

                if (count > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("DeleteServiceMasterDetails").Name;
                ErrorLoger.InsertErrorLogger(ex, 1202, 1);
                return false;
            }
        }
        public CollectionBase GenerateAutoServicesCollComp(IDataReader returnData)
        {
            ServiceCollection _objColl = new ServiceCollection();
            OSPListElement _objElement = null;
            try
            {
                while (returnData.Read())
                {

                    _objElement = new OSPListElement();
                    _objElement.GENDER_ID = !DBNull.Value.Equals(returnData[DALConstants.GENDER_ID_COL]) ? Convert.ToString(returnData[DALConstants.GENDER_ID_COL]) : "";
                    _objElement.Price = !DBNull.Value.Equals(returnData[DALConstants.PRICE_COL]) ? Convert.ToInt32(returnData[DALConstants.PRICE_COL]) : 0;
                    _objElement.PKG_INC_AMOUNT = !DBNull.Value.Equals(returnData[DALConstants.PKG_INC_AMOUNT_COLL]) ? Convert.ToInt32(returnData[DALConstants.PKG_INC_AMOUNT_COLL]) : 0;

                    _objElement.Service_type_id = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _objElement.Service_type_name = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _objElement.SERVICE_ID = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.SERVICE_ID_COL]) : 0;
                    _objElement.Tariff_Id = !DBNull.Value.Equals(returnData[DALConstants.TARIFF_ID_COL]) ? Convert.ToString(returnData[DALConstants.TARIFF_ID_COL]) : string.Empty;
                    //_objElement.RATE = !DBNull.Value.Equals(returnData[DALConstants.RATE_COL]) ? Convert.ToString(returnData[DALConstants.RATE_COL]) : string.Empty;
                    // _objElement.QUANTITY = !DBNull.Value.Equals(returnData[DALConstants.QUANTITY_COL]) ? Convert.ToInt32(returnData[DALConstants.QUANTITY_COL]) : 0;
                    _objElement.SERVICE_NAME = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _objElement.Text = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _objElement.Value = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _objElement.DOCTOR_ID = string.IsNullOrEmpty(Convert.ToString(returnData[DALConstants.DOCTOR_ID_COL])) ? 0 : Convert.ToInt32(returnData[DALConstants.DOCTOR_ID_COL]);
                    _objElement.Doctor_id = string.IsNullOrEmpty(Convert.ToString(returnData[DALConstants.DOCTOR_ID_COL])) ? "0" : Convert.ToString(returnData[DALConstants.DOCTOR_ID_COL]);
                    _objElement.Service_group_id = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _objElement.Service_Class_Id = !DBNull.Value.Equals(returnData[DALConstants.SERVICECLASS_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.SERVICECLASS_ID_COL]) : 0;
                    _objElement.SERVICE_GROUP_NAME = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_GROUP_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_GROUP_NAME_COL]) : string.Empty;
                    _objElement.DEPARTMENT_NAME = !DBNull.Value.Equals(returnData[DALConstants.DEPARTMENT_NAME_COL]) ? Convert.ToString(returnData[DALConstants.DEPARTMENT_NAME_COL]) : string.Empty;
                    _objElement.Department_id = !DBNull.Value.Equals(returnData[DALConstants.DEPARTMENT_ID_COL]) ? Convert.ToString(returnData[DALConstants.DEPARTMENT_ID_COL]) : string.Empty;
                    _objElement.Service_cd = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _objElement.CONSULTATION_TYPE_ID = !DBNull.Value.Equals(returnData[DALConstants.CONSULTATION_TYPE_ID_COL]) ? Convert.ToString(returnData[DALConstants.CONSULTATION_TYPE_ID_COL]) : string.Empty;
                    _objElement.CATEGORY_TYPE = !DBNull.Value.Equals(returnData["CATEGORY_TYPE"]) ? Convert.ToString(returnData["CATEGORY_TYPE"]) : string.Empty;

                    _objColl.Add(_objElement);


                }


            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateAutoServicesColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 1202, 1);
            }
            return _objColl;




        }
        public CollectionBase Get_Auto_Services_Comp(LookUpSearch _obj, string prefixText, string contextKey, int tariff_id)
        {

            DataAccessLayer dbLayer = new DataAccessLayer();
            // Database dBase = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_VW_SERVICES_AUTO_CMP");
            try
            {
                dbLayer.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                dbLayer.AddInParameter(dbCmd, DALConstants.IP_COLUMN_NAME_PARM, DbType.String, contextKey);
                dbLayer.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, tariff_id);
                if (_obj != null && _obj.PreConditon != null && _obj.PreConditon.Count > 2)
                {
                    dbLayer.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, Convert.ToInt32(_obj.PreConditon[0]));
                    dbLayer.AddInParameter(dbCmd, DALConstants.SERVICE_GROUP_ID_PARM, DbType.Int32, Convert.ToInt32(_obj.PreConditon[1]));
                    dbLayer.AddInParameter(dbCmd, DALConstants.DEPARTMENT_ID_PARM, DbType.Int32, Convert.ToInt32(_obj.PreConditon[2]));
                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateAutoServicesCollComp);
                CollectionBase _coll = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return _coll;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Auto_Services").Name;
                ErrorLoger.InsertErrorLogger(ex, 1202, 1);

            }

            return null;


        }
        public CollectionBase Get_Auto_Services(LookUpSearch _obj, string prefixText, string contextKey, int tariff_id)
        {

            DataAccessLayer dbLayer = new DataAccessLayer();
            // Database dBase = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_VW_SERVICES_AUTO);
            try
            {
                dbLayer.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                dbLayer.AddInParameter(dbCmd, DALConstants.IP_COLUMN_NAME_PARM, DbType.String, contextKey);
                dbLayer.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, tariff_id);
                if (_obj != null && _obj.PreConditon != null && _obj.PreConditon.Count > 2)
                {
                    if (_obj.PreConditon[0] != "")
                    {
                        dbLayer.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, Convert.ToInt32(_obj.PreConditon[0]));
                    }
                    if (_obj.PreConditon[1] != "")
                    {
                        dbLayer.AddInParameter(dbCmd, DALConstants.SERVICE_GROUP_ID_PARM, DbType.Int32, Convert.ToInt32(_obj.PreConditon[1]));
                    }
                    if (_obj.PreConditon[2] != "")
                    {
                        dbLayer.AddInParameter(dbCmd, DALConstants.DEPARTMENT_ID_PARM, DbType.Int32, Convert.ToInt32(_obj.PreConditon[2]));
                    }
                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateAutoServicesColl);
                CollectionBase _coll = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return _coll;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Auto_Services").Name;
                ErrorLoger.InsertErrorLogger(ex, 1202, 1);

            }

            return null;


        }




        public CollectionBase Get_Auto_Services1(LookUpSearch _obj, string prefixText, string contextKey, int tariff_id)
        {

            DataAccessLayer dbLayer = new DataAccessLayer();
            // Database dBase = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_VW_SERVICES_AUTO);
            try
            {
                dbLayer.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                dbLayer.AddInParameter(dbCmd, DALConstants.IP_COLUMN_NAME_PARM, DbType.String, contextKey);
                dbLayer.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, tariff_id);
                if (_obj != null && _obj.PreConditon != null && _obj.PreConditon.Count > 2)
                {
                    if (_obj.PreConditon[0] != "")
                    {
                        dbLayer.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, Convert.ToInt32(_obj.PreConditon[0]));
                    }
                    if (_obj.PreConditon[1] != "")
                    {
                        dbLayer.AddInParameter(dbCmd, DALConstants.SERVICE_GROUP_ID_PARM, DbType.Int32, Convert.ToInt32(_obj.PreConditon[1]));
                    }
                    if (_obj.PreConditon[2] != "")
                    {
                        dbLayer.AddInParameter(dbCmd, DALConstants.DEPARTMENT_ID_PARM, DbType.Int32, Convert.ToInt32(_obj.PreConditon[2]));
                    }
                    if (_obj.PreConditon[3] != "")
                    {
                        dbLayer.AddInParameter(dbCmd, DALConstants.WARD_GROUP_ID_PARM, DbType.Int32, Convert.ToInt32(_obj.PreConditon[3]));
                    }
                    if (_obj.PreConditon[4] != "")
                    {
                        dbLayer.AddInParameter(dbCmd, DALConstants.FLAG_PARM, DbType.String, (_obj.PreConditon[4]));
                    }
                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateAutoServicesColl);
                CollectionBase _coll = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return _coll;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Auto_Services").Name;
                ErrorLoger.InsertErrorLogger(ex, 1202, 1);

            }

            return null;


        }






        public CollectionBase Get_Auto_Services_new(LookUpSearch _obj, string prefixText, string contextKey, int tariff_id)
        {

            DataAccessLayer dbLayer = new DataAccessLayer();
            // Database dBase = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_VW_SERVICES_AUTO);
            try
            {
                //string[] objarray = contextKey.Split(',');
                dbLayer.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                dbLayer.AddInParameter(dbCmd, DALConstants.IP_COLUMN_NAME_PARM, DbType.String, contextKey);
                dbLayer.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, tariff_id);
                //if (objarray[1] != "")
                //{
                dbLayer.AddInParameter(dbCmd, "@IP_FLAG", DbType.String, "srvpck");
                //}
                if (_obj != null && _obj.PreConditon != null && _obj.PreConditon.Count > 2)
                {
                    if (_obj.PreConditon[0] != "")
                    {
                        dbLayer.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, Convert.ToInt32

(_obj.PreConditon[0]));
                    }
                    if (_obj.PreConditon[1] != "")
                    {
                        dbLayer.AddInParameter(dbCmd, DALConstants.SERVICE_GROUP_ID_PARM, DbType.Int32, Convert.ToInt32

(_obj.PreConditon[1]));
                    }
                    if (_obj.PreConditon[2] != "")
                    {
                        dbLayer.AddInParameter(dbCmd, DALConstants.DEPARTMENT_ID_PARM, DbType.Int32, Convert.ToInt32

(_obj.PreConditon[2]));
                    }
                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateAutoServicesColl);
                CollectionBase _coll = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return _coll;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod

("Get_Auto_Services_new").Name;
                ErrorLoger.InsertErrorLogger(ex, 1202, 1);

            }

            return null;


        }

        public CollectionBase GenerateAutoServicesColl(IDataReader returnData)
        {
            ServiceCollection _objColl = new ServiceCollection();
            OSPListElement _objElement = null;
            try
            {
                while (returnData.Read())
                {

                    _objElement = new OSPListElement();
                    _objElement.GENDER_ID = !DBNull.Value.Equals(returnData[DALConstants.GENDER_ID_COL]) ? Convert.ToString(returnData[DALConstants.GENDER_ID_COL]) : "";
                    _objElement.Price = !DBNull.Value.Equals(returnData[DALConstants.PRICE_COL]) ? Convert.ToInt32(returnData[DALConstants.PRICE_COL]) : 0;
                    _objElement.PKG_INC_AMOUNT = !DBNull.Value.Equals(returnData[DALConstants.PKG_INC_AMOUNT_COLL]) ? Convert.ToInt32(returnData[DALConstants.PKG_INC_AMOUNT_COLL]) : 0;

                    _objElement.Service_type_id = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _objElement.SERVICE_TYPE_ID = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_TYPE_ID_COL]) : "0";
                    _objElement.Service_type_name = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _objElement.SERVICE_ID = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.SERVICE_ID_COL]) : 0;
                    _objElement.Tariff_Id = !DBNull.Value.Equals(returnData[DALConstants.TARIFF_ID_COL]) ? Convert.ToString(returnData[DALConstants.TARIFF_ID_COL]) : string.Empty;
                    //_objElement.RATE = !DBNull.Value.Equals(returnData[DALConstants.RATE_COL]) ? Convert.ToString(returnData[DALConstants.RATE_COL]) : string.Empty;
                    // _objElement.QUANTITY = !DBNull.Value.Equals(returnData[DALConstants.QUANTITY_COL]) ? Convert.ToInt32(returnData[DALConstants.QUANTITY_COL]) : 0;
                    _objElement.SERVICE_NAME = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _objElement.Text = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _objElement.Value = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _objElement.DOCTOR_ID = string.IsNullOrEmpty(Convert.ToString(returnData[DALConstants.DOCTOR_ID_COL])) ? 0 : Convert.ToInt32(returnData[DALConstants.DOCTOR_ID_COL]);
                    _objElement.Doctor_id = string.IsNullOrEmpty(Convert.ToString(returnData[DALConstants.DOCTOR_ID_COL])) ? "0" : Convert.ToString(returnData[DALConstants.DOCTOR_ID_COL]);
                    _objElement.Service_group_id = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _objElement.Service_Class_Id = !DBNull.Value.Equals(returnData[DALConstants.SERVICECLASS_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.SERVICECLASS_ID_COL]) : 0;
                    _objElement.SERVICE_GROUP_NAME = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_GROUP_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_GROUP_NAME_COL]) : string.Empty;
                    _objElement.DEPARTMENT_NAME = !DBNull.Value.Equals(returnData[DALConstants.DEPARTMENT_NAME_COL]) ? Convert.ToString(returnData[DALConstants.DEPARTMENT_NAME_COL]) : string.Empty;
                    _objElement.Department_id = !DBNull.Value.Equals(returnData[DALConstants.DEPARTMENT_ID_COL]) ? Convert.ToString(returnData[DALConstants.DEPARTMENT_ID_COL]) : string.Empty;
                    _objElement.Service_cd = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _objElement.CONSULTATION_TYPE_ID = !DBNull.Value.Equals(returnData[DALConstants.CONSULTATION_TYPE_ID_COL]) ? Convert.ToString(returnData[DALConstants.CONSULTATION_TYPE_ID_COL]) : string.Empty;
                    _objElement.CATEGORY_TYPE = !DBNull.Value.Equals(returnData["CATEGORY_TYPE"]) ? Convert.ToString(returnData["CATEGORY_TYPE"]) : "";
                    _objElement.EFFECT_FROM_DT = returnData[DALConstants.EFFECT_FROM_DT_COL] != DBNull.Value ? returnData[DALConstants.EFFECT_FROM_DT_COL].ToString() : string.Empty;
                    _objElement.EFFECT_TO_DT = returnData[DALConstants.EFFECT_TO_DT_COL] != DBNull.Value ? returnData[DALConstants.EFFECT_TO_DT_COL].ToString() : string.Empty;

                    _objElement.FROM_AGE = !DBNull.Value.Equals(returnData["FROM_AGE"]) ? Convert.ToString(returnData["FROM_AGE"]) : string.Empty;
                    _objElement.TO_AGE = !DBNull.Value.Equals(returnData["TO_AGE"]) ? Convert.ToString(returnData["TO_AGE"]) : string.Empty;
                    _objElement.DEPENDENT_SRV_EXIST = !DBNull.Value.Equals(returnData["DEPENDENT_SRV_EXIST"]) ? Convert.ToString(returnData["DEPENDENT_SRV_EXIST"]) : string.Empty;
                    _objColl.Add(_objElement);


                }


            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateAutoServicesColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 1202, 1);
            }
            return _objColl;




        }

        public CollectionBase GetAllServiceMasterDetails_Paging(int pNo, int pSize, out int total_records)
        {
            total_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_SERVICE);
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, pNo);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, pSize);
                dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, total_records);

                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateCollection);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                total_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAllServiceMasterDetails_Paging").Name;
                ErrorLoger.InsertErrorLogger(ex, 1203, 1);
                return null;
            }

        }

        public CollectionBase GetAllServiceMaster_GridBind(GridPaging gpage, out int total_records)
        {
            total_records = 0;
            try
            {
                servicemaster _obj = new servicemaster();
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_SERVICE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGENUM_PARAM, DbType.Int32, gpage.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGESIZE_PARM, DbType.Int32, gpage.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARAM, DbType.String, gpage.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, gpage.PREFIX_TEXT);
                dBase.AddInParameter(dbCmd, "@IP_FROM_DT", DbType.String, gpage.FROM_DATE);
                dBase.AddInParameter(dbCmd, "@IP_TO_DT", DbType.String, gpage.TO_DATE);
                dBase.AddInParameter(dbCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, gpage.ADVANCESEARCH);
                dBase.AddInParameter(dbCmd, "@IP_COUNT", DbType.Int32, gpage.EVENTFLAG);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(ServiceMaster_GridCollection);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                // total_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAllServiceMaster_GridBind").Name;
                ErrorLoger.InsertErrorLogger(ex, 1203, 1);
                return null;
            }

        }
        protected CollectionBase ServiceMaster_GridCollection(IDataReader reader)
        {
            try
            {
                ServiceMasterCollection serMasterCollection = new ServiceMasterCollection();

                while (reader.Read())
                {
                    ServiceMasterModel _sModel = new ServiceMasterModel();
                    _sModel.SERVICE_CD = reader[DALConstants.SERVICE_CD_COL].ToString();
                    _sModel.SERVICE_ID = Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL]);
                    _sModel.SERVICE_DESC = reader[DALConstants.SERVICE_DESC_COL].ToString();
                    _sModel.SERVICE_NAME = reader[DALConstants.SERVICE_NAME_COL].ToString();
                    _sModel.SERVICE_GROUP_NAME = reader[DALConstants.SERVICE_GROUP_NAME_COL].ToString();
                    _sModel.SERVICE_GROUP_ID = reader[DALConstants.SERVICE_GROUP_ID_COL].ToString();
                    _sModel.SERVICE_TYPE_NAME = reader[DALConstants.SERVICE_TYPE_NAME_COL].ToString();
                    _sModel.DisplayName = reader[DALConstants.SERVICE_DISPNAME_COL].ToString();
                    _sModel.Uniservicecode = reader[DALConstants.SERVICE_UNICODE_COL].ToString();
                    _sModel.SERVICE_CLASS_NAME = reader["SERVICE_CLASS_NAME"].ToString();
                    if (!string.IsNullOrEmpty(reader["ORG_PRICE"].ToString()))
                        _sModel.ORG_PRICE = float.Parse(reader["ORG_PRICE"].ToString());
                    if (!string.IsNullOrEmpty(reader["DOCTOR_PRICE"].ToString()))
                        _sModel.DOCTOR_PRICE = float.Parse(reader["DOCTOR_PRICE"].ToString());
                    _sModel.GENDER_NAME = reader["GENDER_NAME"].ToString();

                    _sModel.NUM_OF_DAYS = reader["NUM_OF_DAYS"].ToString();
                    _sModel.MIN_CEILING = reader["MIN_CEILING"].ToString();
                    _sModel.MAX_CEILING = reader["MAX_CEILING"].ToString();
                    _sModel.FROM_AGE = !DBNull.Value.Equals(reader["FROM_AGE"]) ? Convert.ToInt32(reader["FROM_AGE"].ToString()) : 0;
                    _sModel.TO_AGE = !DBNull.Value.Equals(reader["TO_AGE"]) ? Convert.ToInt32(reader["TO_AGE"].ToString()) : 0;
                    _sModel.SERVICE_UNICODE = reader["SERVICE_UNICODE"].ToString();
                    _sModel.PRICING_METHOD_NAME = reader["PRICING_METHOD_NAME"].ToString();
                    _sModel.UNI_SERVICE_TYPE_NAME = reader["UNI_SERVICE_TYPE_NAME"].ToString();
                    _sModel.EFFECT_FROM_DT = reader["EFFECT_FROM_DT"].ToString();
                    _sModel.EFFECT_TO_DT = reader["EFFECT_TO_DT"].ToString();
                    if (!string.IsNullOrEmpty(reader["ACC_CMP_PCT"].ToString()))
                        _sModel.ACC_CMP_PCT = float.Parse(reader["ACC_CMP_PCT"].ToString());
                    _sModel.ACC_EFFECT_FROM_DT = reader["ACC_EFFECT_FROM_DT"].ToString();
                    _sModel.ACC_EFFECT_TO_DT = reader["ACC_EFFECT_TO_DT"].ToString();
                    _sModel.SERVICE_DISPNAME = reader["SERVICE_DISPNAME"].ToString();
                    _sModel.SPECIES_NAME = reader["SPECIES_NAME"].ToString();
                    _sModel.CONSUMPTION = reader["CONSUMPTION"].ToString();
                    _sModel.TEST_OCCURANCY = reader["TEST_OCCURANCY"].ToString();
                    _sModel.LUXARY_TAX = !DBNull.Value.Equals(reader["LUXURY_TAX"]) ? float.Parse(reader["LUXURY_TAX"].ToString()) : 0;
                    if (!string.IsNullOrEmpty(reader["TAX_FROM_DT"].ToString()))
                        _sModel.TAX_FROM_DT = reader["TAX_FROM_DT"].ToString();
                    if (!string.IsNullOrEmpty(reader["TAX_TO_DT"].ToString()))
                        _sModel.TAX_TO_DT = reader["TAX_TO_DT"].ToString();
                    _sModel.OP_BILLINGHEAD_ID = reader["OP_BILLINGHEAD_ID"].ToString();
                    _sModel.BILLINGHEAD = reader["BILLINGHEAD"].ToString();
                    _sModel.IS_DOCTOR_SHARE_REQUIRED = reader["IS_DOCTOR_SHARE_REQUIRED"].ToString();
                    _sModel.IS_QUANTITY_EDIT = reader["IS_QUANTITY_EDIT"].ToString();
                    if (!string.IsNullOrEmpty(reader["IS_PRICE_EDIT"].ToString()))
                    {
                        _sModel.IS_PRIC_EDIT = reader["IS_PRICE_EDIT"].ToString();
                        _sModel.IS_PRICE = reader["IS_PRICE_EDIT"].ToString();
                    }
                    _sModel.IS_HAVING_UNIVERSAL_CODE = reader["IS_HAVING_UNIVERSAL_CODE"].ToString();
                    if (!string.IsNullOrEmpty(reader["SLOT_DURATION"].ToString()))
                        _sModel.SLOT_DURATION = reader["SLOT_DURATION"].ToString();
                    if (!string.IsNullOrEmpty(reader["ACC_CMP_NAME"].ToString()))
                        _sModel.ACC_CMP_NAME = reader["ACC_CMP_NAME"].ToString();
                    _sModel.EMERGNCY_PRICE = reader["EMERGNCY_PRICE"].ToString();
                    if (!string.IsNullOrEmpty(reader["LUXURY_TAX_NAME"].ToString()))
                        _sModel.LUXURY_TAX_NAME = reader["LUXURY_TAX_NAME"].ToString();
                    _sModel.IS_APPOINTMENT = reader["IS_APPOINTMENT"].ToString();
                    _sModel.IS_CONSENT_FORM = reader["IS_CONSENT_FORM"].ToString();
                    _sModel.IS_PRE_REQUISIT = reader["IS_PRE_REQUISIT"].ToString();
                    _sModel.CONSENT_TEMPLATE_ID = reader["CONSENT_TEMPLATE_ID"].ToString();
                    _sModel.CONSENT_TEMPLATE_NAME = reader["CONSENT_TEMPLATE_NAME"].ToString();
                    _sModel.SERVICE_GUIDELINE_TEMPLATE_ID = reader["SERVICE_GUIDELINE_TEMPLATE_ID"].ToString();
                    _sModel.SERVICE_GUIDELINE_TEMPLATE_NAME = reader["SERVICE_GUIDELINE_TEMPLATE_NAME"].ToString();
                    _sModel.IS_SRV_GUIDELINES_REQUIRED = reader["IS_SRV_GUIDELINES_REQUIRED"].ToString();
                    _sModel.PRE_REQUIST_NOTE = reader["PRE_REQUIST_NOTE"].ToString();

                    _sModel.SERVICE_QUESTION_TEMPLATE_NAME = reader["SERVICE_QUESTION_TEMPLATE_NAME"].ToString();
                    _sModel.IS_SRV_CHECKLIST_REQUIRED = reader["IS_SRV_CHECKLIST_REQUIRED"].ToString();
                    _sModel.SERVICE_CHECKLIST_TEMPLATE_NAME = reader["SERVICE_CHECKLIST_TEMPLATE_NAME"].ToString();
                    _sModel.IS_SRV_INSTRUCTION_REQ = reader["IS_SRV_INSTRUCTION_REQ"].ToString();
                    _sModel.SERVICE_INSTRUCTIONS_TEMPLATE_NAME = reader["SERVICE_INSTRUCTIONS_TEMPLATE_NAME"].ToString();
                    _sModel.IS_APPROVAL_REQUIRED = reader["IS_APPROVAL_REQUIRED"].ToString();
                    _sModel.IS_ONLINE_DISPLAY = reader["IS_ONLINE_DISPLAY"].ToString();
                    _sModel.EQUI_SERVICE_CD = reader["EQUI_SERVICE_CD"].ToString();



                    // _sModel.TAX_NAME = reader["TAX_NAME"].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.PRICE_COL].ToString()))
                        _sModel.PRICE = float.Parse(reader[DALConstants.PRICE_COL].ToString());
                    _sModel.TARIFF_ID = !DBNull.Value.Equals(reader[DALConstants.TARIFF_ID_COL]) ? Convert.ToInt32(reader[DALConstants.TARIFF_ID_COL]) : 0;
                    _sModel.CREATE_BY = !DBNull.Value.Equals(reader[DALConstants.CREATE_BY_COL]) ? Convert.ToString(reader[DALConstants.CREATE_BY_COL]) : string.Empty;
                    _sModel.CREATE_DT = !DBNull.Value.Equals(reader[DALConstants.CREATE_DT_COL]) ? Convert.ToString(reader[DALConstants.CREATE_DT_COL]) : string.Empty;
                    _sModel.MODIFY_BY = !DBNull.Value.Equals(reader[DALConstants.MODIFY_BY_COL]) ? Convert.ToString(reader[DALConstants.MODIFY_BY_COL]) : string.Empty;
                    _sModel.MODIFY_DT = !DBNull.Value.Equals(reader[DALConstants.MODIFY_DT_COL]) ? Convert.ToString(reader[DALConstants.MODIFY_DT_COL]) : string.Empty;
                    _sModel.RECORD_STATUS = reader[DALConstants.RECORD_STATUS_COL].ToString();
                    if (_sModel.RECORD_STATUS == "A")
                    {
                        _sModel.RECORD_STATUSS = "Active";
                    }
                    else
                    {
                        _sModel.RECORD_STATUSS = "InActive";
                    }
                    _sModel.COVERAGE_ID = !DBNull.Value.Equals(reader[DALConstants.COVERAGE_ID_COL]) ? Convert.ToInt32(reader[DALConstants.COVERAGE_ID_COL]) : 0;
                    _sModel.Coverage_desc = !DBNull.Value.Equals(reader[DALConstants.COVERAGE_DESC_COL]) ? Convert.ToString(reader[DALConstants.COVERAGE_DESC_COL]) : string.Empty;
                    _sModel.TARIFF_NAME = !DBNull.Value.Equals(reader[DALConstants.TARIFF_NAME_COL]) ? Convert.ToString(reader[DALConstants.TARIFF_NAME_COL]) : string.Empty;
                    _sModel.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(reader[DALConstants.IS_FOREIGN_SERVICE_COL]) ? Convert.ToString(reader[DALConstants.IS_FOREIGN_SERVICE_COL]) : string.Empty;
                    _sModel.TARIFF_SERVICE_ID = !DBNull.Value.Equals(reader[DALConstants.TARIFF_SERVICE_ID_COL]) ? Convert.ToString(reader[DALConstants.TARIFF_SERVICE_ID_COL]) : string.Empty;
                    _sModel.NoOfRecords = !DBNull.Value.Equals(reader["TOT_RECORD_CNT"]) ? Convert.ToInt32(reader["TOT_RECORD_CNT"]) : 0;
                    serMasterCollection.Add(_sModel);
                }
                return serMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("ServiceMaster_GridCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1200, 1);
                return null;
            }
        }


        public CollectionBase GetServiceClassType_OnID(int serviceID)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.PR_GET_PATCLASS_ONSERID);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARM, DbType.Int32, serviceID);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetServiceCLassCollection);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceClassType_OnID").Name;
                ErrorLoger.InsertErrorLogger(ex, 1204, 1);
                return null;
            }
        }

        public CollectionBase GetServiceMasterBasedOnCode(int serViceCode, int tariff_id)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_SERVICE_ONCODE);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARM, DbType.Int32, serViceCode);
                dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, tariff_id);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetCodeBasedCollection);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceMasterBasedOnCode").Name;
                ErrorLoger.InsertErrorLogger(ex, 1205, 1);
                return null;
            }
        }

        protected override CollectionBase GenerateCollection(IDataReader returnData)
        {
            try
            {
                ServiceMasterCollection serMasterCollection = new ServiceMasterCollection();
                ServiceMasterModel serMaster;

                while (returnData.Read())
                {
                    serMaster = new ServiceMasterModel();

                    if (returnData[DALConstants.SERVICE_ID_COL].ToString() != string.Empty)
                        serMaster.SERVICE_ID = Convert.ToInt32(returnData[DALConstants.SERVICE_ID_COL].ToString());
                    serMaster.SERVICE_CD = returnData[DALConstants.SERVICE_CD_COL].ToString();
                    serMaster.SERVICE_NAME = returnData[DALConstants.SERVICE_NAME_COL].ToString();
                    serMaster.SERVICE_DESC = returnData[DALConstants.SERVICE_DESC_COL].ToString();
                    if (returnData[DALConstants.SERVICE_GROUP_ID_COL].ToString() != string.Empty)
                        serMaster.SERVICE_GROUP_ID = returnData[DALConstants.SERVICE_GROUP_ID_COL].ToString();
                    if (returnData[DALConstants.SERVICE_TYPE_ID_COL].ToString() != string.Empty)
                        serMaster.SERVICE_TYPE_ID = Convert.ToInt32(returnData[DALConstants.SERVICE_TYPE_ID_COL].ToString());
                    if (returnData[DALConstants.COVERAGE_ID_COL].ToString() != string.Empty)
                        serMaster.COVERAGE_ID = Convert.ToInt32(returnData[DALConstants.COVERAGE_ID_COL].ToString());
                    if (returnData[DALConstants.SERVICECLASS_ID_COL].ToString() != string.Empty)
                        serMaster.Serviceclass_id = Convert.ToInt32(returnData[DALConstants.SERVICECLASS_ID_COL].ToString());
                    serMaster.DisplayName = returnData[DALConstants.SERVICE_DISPNAME_COL].ToString();
                    serMaster.Uniservicecode = returnData[DALConstants.SERVICE_UNICODE_COL].ToString();
                    //serMaster.IsActive = returnData[DALConstants.ISACTIVE_COL].ToString();
                    //if (returnData[DALConstants.SERVICE_REV_NO_COL].ToString() != string.Empty)
                    //    serMaster.SERVICE_REV_NO = Convert.ToInt32(returnData[DALConstants.SERVICE_REV_NO_COL].ToString());

                    //serMaster.Service_Grp_IdSeq = returnData[DALConstants.SER_GRP_IDSEQ_COL].ToString();
                    //serMaster.BILLING_HEAD_ID = Convert.ToInt32(returnData["BILLING_HEAD_ID"].ToString());
                    //serMaster.Service_Type_IdSeq = returnData[DALConstants.SERV_TYPE_IDSEQ_COL].ToString();
                    //serMaster.Service_Class_IdSeq = returnData[""].ToString();
                    //serMaster.IS_DIET = returnData["IS_DIET"].ToString();
                    //serMaster.IS_FOREIGN_SERVICE = returnData["IS_FOREIGN_SERVICE"].ToString();
                    //serMaster.PARENT_SERVICE_ID = Convert.ToInt32(returnData["PARENT_SERVICE_ID"].ToString());
                    //serMaster.TARIFF_ID = Convert.ToInt32(returnData["TARIFF_ID"].ToString());
                    //serMaster.Coverage_IdSeq = returnData[""].ToString();
                    //serMaster.PAYMENT_TYPE_ID = Convert.ToInt32(returnData["PAYMENT_TYPE_ID"].ToString());
                    //serMaster.Count = Convert.ToInt32(returnData["NO.OF.RECORDS"].ToString());
                    serMasterCollection.Add(serMaster);
                }
                return serMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1200, 1);
                return null;
            }
        }

        public CollectionBase GetServiceCLassCollection(IDataReader returnData)
        {
            try
            {
                ServiceMasterCollection serMasterCollection = new ServiceMasterCollection();
                ServiceMasterModel serMaster;

                while (returnData.Read())
                {
                    serMaster = new ServiceMasterModel();
                    serMaster.SERVICE_ID = Convert.ToInt32(returnData[DALConstants.SERVICE_ID_COL].ToString());
                    serMaster.SERVICE_CD = returnData[DALConstants.SERVICE_CD_COL].ToString();
                    serMaster.SERVICE_NAME = returnData[DALConstants.SERVICE_NAME_COL].ToString();
                    serMaster.COVERAGE_ID = Convert.ToInt32(returnData[DALConstants.COVERAGE_ID_COL].ToString());
                    serMaster.Coverage_cd = returnData[DALConstants.PATIENT_CLASS_CD_COL].ToString();
                    serMaster.Coverage_desc = returnData[DALConstants.PATIENT_CLASS_DESC_COL].ToString();

                    serMasterCollection.Add(serMaster);
                }
                return serMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceCLassCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1206, 1);
                return null;
            }
        }

        public CollectionBase GetCodeBasedCollection(IDataReader returnData)
        {
            try
            {
                ServiceMasterCollection serMasterCollection = new ServiceMasterCollection();
                ServiceMasterModel serMaster;

                while (returnData.Read())
                {
                    serMaster = new ServiceMasterModel();
                    serMaster.MAX_OPT_SERVICES_ALLOWED = returnData["MAX_OPT_SERVICES_ALLOWED"].ToString();
                    serMaster.SERVICE_SUBCLASS_ID = !DBNull.Value.Equals(returnData["SERVICE_SUBCLASS_ID"]) ? Convert.ToInt32(returnData["SERVICE_SUBCLASS_ID"]) : 0;
                    serMaster.IS_DOCTOR_SHARE_REQUIRED = returnData["IS_DOCTOR_SHARE_REQUIRED"].ToString();
                    serMaster.IS_CONSENT_FORM = returnData["IS_CONSENT_FORM"].ToString();
                    serMaster.IS_SRV_GUIDELINES_REQUIRED = returnData["IS_SRV_GUIDELINES_REQUIRED"].ToString();
                    serMaster.IS_SRV_CHECKLIST_REQUIRED = returnData["IS_SRV_CHECKLIST_REQUIRED"].ToString();
                    serMaster.IS_SRV_INSTRUCTION_REQ = returnData["IS_SRV_INSTRUCTION_REQ"].ToString();
                    serMaster.CONSENT_TEMPLATE_ID = returnData["CONSENT_TEMPLATE_ID"].ToString();
                    serMaster.SERVICE_GUIDELINE_TEMPLATE_ID = returnData["SERVICE_GUIDELINE_TEMPLATE_ID"].ToString();
                    serMaster.SERVICE_CHECKLIST_TEMPLATE_ID = returnData["SERVICE_CHECKLIST_TEMPLATE_ID"].ToString();
                    serMaster.SERVICE_INSTRUCTIONS_TEMPLATE_ID = returnData["SERVICE_INSTRUCTIONS_TEMPLATE_ID"].ToString();
                    serMaster.CONSENT_TEMPLATE_NAME = returnData["CONSENT_TEMPLATE_NAME"].ToString();
                    serMaster.SERVICE_GUIDELINE_TEMPLATE_NAME = returnData["SERVICE_GUIDELINE_TEMPLATE_NAME"].ToString();
                    serMaster.SERVICE_CHECKLIST_TEMPLATE_NAME = returnData["SERVICE_CHECKLIST_TEMPLATE_NAME"].ToString();
                    serMaster.SERVICE_INSTRUCTIONS_TEMPLATE_NAME = returnData["SERVICE_INSTRUCTIONS_TEMPLATE_NAME"].ToString();
                    serMaster.SERVICE_QUESTION_TEMPLATE_ID = returnData["SERVICE_QUESTION_TEMPLATE_ID"].ToString();
                    serMaster.SERVICE_QUESTION_TEMPLATE_NAME = returnData["SERVICE_QUESTION_TEMPLATE_NAME"].ToString();
                    serMaster.SERVICE_FEEDBACK_TEMPLATE_ID = !DBNull.Value.Equals(returnData["SERVICE_FEEDBACK_TEMPLATE_ID"]) ? Convert.ToString(returnData["SERVICE_FEEDBACK_TEMPLATE_ID"]) : string.Empty;
                    serMaster.SERVICE_FEEDBACK_TEMPLATE_NAME = returnData["SERVICE_FEEDBACK_TEMPLATE_NAME"].ToString();
                    serMaster.SERVICE_ID = Convert.ToInt32(returnData[DALConstants.SERVICE_ID_COL].ToString());
                    serMaster.SERVICE_CD = returnData[DALConstants.SERVICE_CD_COL].ToString();
                    serMaster.SERVICE_NAME = returnData[DALConstants.SERVICE_NAME_COL].ToString();
                    serMaster.SERVICE_DESC = returnData[DALConstants.SERVICE_DESC_COL].ToString();
                    serMaster.Uniservicecode = returnData[DALConstants.SERVICE_UNICODE_COL].ToString();
                    serMaster.DisplayName = returnData[DALConstants.SERVICE_DISPNAME_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.SERVICE_REV_NO_COL].ToString()))
                        serMaster.SERVICE_REV_NO = Convert.ToInt32(returnData[DALConstants.SERVICE_REV_NO_COL].ToString());
                    serMaster.EFFECT_FROM_DT = returnData[DALConstants.EFFECT_FROM_DT_COL] != DBNull.Value ? returnData[DALConstants.EFFECT_FROM_DT_COL].ToString() : string.Empty;
                    serMaster.EFFECT_TO_DT = returnData[DALConstants.EFFECT_TO_DT_COL] != DBNull.Value ? returnData[DALConstants.EFFECT_TO_DT_COL].ToString() : string.Empty;
                    if (!string.IsNullOrEmpty(returnData[DALConstants.PRICE_COL].ToString()))
                        serMaster.PRICE = !DBNull.Value.Equals(returnData["PRICE"]) ? float.Parse(returnData["PRICE"].ToString()) : 0;
                    if (!string.IsNullOrEmpty(returnData[DALConstants.ORG_PRICE_COL].ToString()))
                        serMaster.ORG_PRICE = !DBNull.Value.Equals(returnData["ORG_PRICE"]) ? float.Parse(returnData["ORG_PRICE"].ToString()) : 0;
                    if (!string.IsNullOrEmpty(returnData[DALConstants.DOCTOR_PRICE_COL].ToString()))
                        serMaster.DOCTOR_PRICE = !DBNull.Value.Equals(returnData["DOCTOR_PRICE"]) ? float.Parse(returnData["DOCTOR_PRICE"].ToString()) : 0;
                    serMaster.Duration = !DBNull.Value.Equals(returnData["DURATION"]) == true ? Convert.ToInt32(returnData["DURATION"]) : 0;


                    if (!string.IsNullOrEmpty(returnData[DALConstants.SERVICE_GROUP_ID_COL].ToString()))
                    {
                        serMaster.SERVICE_GROUP_ID = returnData[DALConstants.SERVICE_GROUP_ID_COL].ToString();
                        serMaster.SERVICE_GROUP_NAME = returnData[DALConstants.SERVICE_GROUP_NAME_COL].ToString();
                    }
                    if (!string.IsNullOrEmpty(returnData[DALConstants.BILLING_HEAD_ID_COL].ToString()))
                        serMaster.BILLING_HEAD_ID = Convert.ToInt32(returnData[DALConstants.BILLING_HEAD_ID_COL].ToString());

                    if (!string.IsNullOrEmpty(returnData[DALConstants.SERVICE_TYPE_ID_COL].ToString()))
                    {
                        serMaster.SERVICE_TYPE_ID = Convert.ToInt32(returnData[DALConstants.SERVICE_TYPE_ID_COL].ToString());
                        serMaster.SERVICE_TYPE_NAME = returnData[DALConstants.SERVICE_TYPE_NAME_COL].ToString();
                    }

                    if (!string.IsNullOrEmpty(returnData[DALConstants.SERVICECLASS_ID_COL].ToString()))
                    {
                        serMaster.Serviceclass_id = Convert.ToInt32(returnData[DALConstants.SERVICECLASS_ID_COL].ToString());
                        serMaster.SERVICE_CLASS_NAME = returnData[DALConstants.SERVICE_CLASS_NAME_COL].ToString();
                    }
                    if (!string.IsNullOrEmpty(returnData[DALConstants.IS_SAMPLE_NEEDED_COL].ToString()))
                        serMaster.IS_SAMPLE_NEEDED = returnData[DALConstants.IS_SAMPLE_NEEDED_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.IS_DIET_COL].ToString()))
                        serMaster.IS_DIET = returnData[DALConstants.IS_DIET_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.IS_FOREIGN_SERVICE_COL].ToString()))
                        serMaster.IS_FOREIGN_SERVICE = returnData[DALConstants.IS_FOREIGN_SERVICE_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.PARENT_SERVICE_ID_COL].ToString()))
                        serMaster.PARENT_SERVICE_ID = Convert.ToInt32(returnData[DALConstants.PARENT_SERVICE_ID_COL].ToString());
                    if (!string.IsNullOrEmpty(returnData[DALConstants.TARIFF_ID_COL].ToString()))
                        serMaster.TARIFF_ID = Convert.ToInt32(returnData[DALConstants.TARIFF_ID_COL].ToString());
                    if (!string.IsNullOrEmpty(returnData[DALConstants.COVERAGE_ID_COL].ToString()))
                    {
                        serMaster.COVERAGE_ID = Convert.ToInt32(returnData[DALConstants.COVERAGE_ID_COL].ToString());
                        serMaster.Coverage_desc = returnData[DALConstants.COVERAGE_DESC_COL].ToString();
                    }
                    if (!string.IsNullOrEmpty(returnData[DALConstants.PAYMENT_TYPE_ID_COL].ToString()))
                        serMaster.PAYMENT_TYPE_ID = Convert.ToInt32(returnData[DALConstants.PAYMENT_TYPE_ID_COL].ToString());


                    serMaster.ACC_CMP_PCT = returnData[DALConstants.ACC_CMP_PCT_COL] != DBNull.Value ? float.Parse(returnData[DALConstants.ACC_CMP_PCT_COL].ToString()) : 0;
                    serMaster.ACC_CMP_ID = returnData[DALConstants.ACC_CMP_ID_COL] != DBNull.Value ? Convert.ToInt32(returnData[DALConstants.ACC_CMP_ID_COL]) : 0;
                    serMaster.ACC_CMP_NAME = returnData[DALConstants.ACC_CMP_NAME_COL].ToString();
                    serMaster.ACC_EFFECT_FROM_DT = returnData[DALConstants.ACC_EFFECT_FROM_DT_COL].ToString();
                    serMaster.ACC_EFFECT_TO_DT = returnData[DALConstants.ACC_EFFECT_TO_DT_COL].ToString();

                    if (!string.IsNullOrEmpty(returnData[DALConstants.CREATE_DT_COL].ToString()))
                        serMaster.CREATE_DT = returnData[DALConstants.CREATE_DT_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.CREATE_BY_COL].ToString()))
                        serMaster.CREATE_BY = returnData[DALConstants.CREATE_BY_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.MODIFY_BY_COL].ToString()))
                        serMaster.MODIFY_BY = returnData[DALConstants.MODIFY_BY_COL].ToString();
                    if (!string.IsNullOrEmpty(returnData[DALConstants.MODIFY_DT_COL].ToString()))
                        serMaster.MODIFY_DT = returnData[DALConstants.MODIFY_DT_COL].ToString();
                    serMaster.BILLING_HEAD_ID = !DBNull.Value.Equals(returnData[DALConstants.BILLING_HEAD_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.BILLING_HEAD_ID_COL]) : 0;
                    serMaster.LUXARY_TAX = !DBNull.Value.Equals(returnData["LUXURY_TAX"]) ? float.Parse(returnData["LUXURY_TAX"].ToString()) : 0;
                    serMaster.CONSUMPTION = !DBNull.Value.Equals(returnData[DALConstants.CONSUMPTION_COL]) ? Convert.ToString(returnData[DALConstants.CONSUMPTION_COL]) : string.Empty;
                    serMaster.EMERGNCY_PRICE = !DBNull.Value.Equals(returnData[DALConstants.EMERGANCY_PRICE_COL]) ? Convert.ToString(returnData[DALConstants.EMERGANCY_PRICE_COL]) : string.Empty;
                    //FOR NAVIGATION
                    serMaster.FIRSTREC = returnData[DALConstants.FIRSTRECORD_COL] != DBNull.Value ? returnData[DALConstants.FIRSTRECORD_COL].ToString() : string.Empty;
                    serMaster.NEXTREC = returnData[DALConstants.NEXTRECORD_COL] != DBNull.Value ? returnData[DALConstants.NEXTRECORD_COL].ToString() : string.Empty;
                    serMaster.PREVREC = returnData[DALConstants.PREVIOUSRECORD_COL] != DBNull.Value ? returnData[DALConstants.PREVIOUSRECORD_COL].ToString() : string.Empty;
                    serMaster.LASTREC = returnData[DALConstants.LASTRECORD_COL] != DBNull.Value ? returnData[DALConstants.LASTRECORD_COL].ToString() : string.Empty;
                    serMaster.GENDER_ID = !DBNull.Value.Equals(returnData[DALConstants.SRV_GENDER_ID_COL]) ? (Convert.ToString(returnData[DALConstants.SRV_GENDER_ID_COL])) : string.Empty;
                    serMaster.GENDER_NAME = !DBNull.Value.Equals(returnData[DALConstants.GENDER_NAME_COL]) ? (Convert.ToString(returnData[DALConstants.GENDER_NAME_COL])) : string.Empty;
                    serMaster.SPECIES_ID = !DBNull.Value.Equals(returnData[DALConstants.SPECIES_ID_COL]) ? (Convert.ToString(returnData[DALConstants.SPECIES_ID_COL])) : string.Empty;
                    serMaster.SPECIES_NAME = !DBNull.Value.Equals(returnData[DALConstants.SPECIES_NAME_COL]) ? (Convert.ToString(returnData[DALConstants.SPECIES_NAME_COL])) : string.Empty;
                    serMaster.COMPANY_ID = !DBNull.Value.Equals(returnData["COMPANY_ID"]) ? ((returnData["COMPANY_ID"].ToString())) : string.Empty;
                    serMaster.COMPANY_NAME = !DBNull.Value.Equals(returnData["COMPANY_NAME"]) ? ((returnData["COMPANY_NAME"].ToString())) : string.Empty;

                    if (!string.IsNullOrEmpty(returnData["IS_APPOINTMENT"].ToString()))
                        serMaster.IS_APPT_REQ = returnData["IS_APPOINTMENT"].ToString();
                    if (!string.IsNullOrEmpty(returnData["IS_CONSENT_FORM"].ToString()))
                        serMaster.IS_CONSENT_REQ = returnData["IS_CONSENT_FORM"].ToString();
                    if (!string.IsNullOrEmpty(returnData["IS_PRE_REQUISIT"].ToString()))
                        serMaster.IS_PRE_REQUISIT = returnData["IS_PRE_REQUISIT"].ToString();
                    if (!string.IsNullOrEmpty(returnData["IS_QUANTITY_EDIT"].ToString()))
                        serMaster.IS_QUANTITY_EDIT = returnData["IS_QUANTITY_EDIT"].ToString();
                    if (!string.IsNullOrEmpty(returnData["IS_PRICE_EDIT"].ToString()))
                        serMaster.IS_PRICE_EDIT = returnData["IS_PRICE_EDIT"].ToString();


                    if (!string.IsNullOrEmpty(returnData["IS_DIRECT_BILLING"].ToString()))
                        serMaster.IS_DIRECT_BILLING = returnData["IS_DIRECT_BILLING"].ToString();

                    if (!string.IsNullOrEmpty(returnData["IS_NURSE_INDENT_REQ"].ToString()))
                        serMaster.IS_NURSE_INDENT_REQ = returnData["IS_NURSE_INDENT_REQ"].ToString();

                    serMaster.TESTOCCURaNCY = returnData["TEST_OCCURANCY"] != DBNull.Value ? Convert.ToInt32(returnData["TEST_OCCURANCY"]) : 0;
                    serMaster.NO_OF_DAYS = returnData["NUM_OF_DAYS"] != DBNull.Value ? Convert.ToInt32(returnData["NUM_OF_DAYS"]) : 0;

                    serMaster.MINCEILING = !DBNull.Value.Equals(returnData["MIN_CEILING"]) ? float.Parse(returnData["MIN_CEILING"].ToString()) : 0;
                    serMaster.MAXCEILING = !DBNull.Value.Equals(returnData["MAX_CEILING"]) ? float.Parse(returnData["MAX_CEILING"].ToString()) : 0;

                    serMaster.FROM_AGE = !DBNull.Value.Equals(returnData["FROM_AGE"]) ? Convert.ToInt32(returnData["FROM_AGE"].ToString()) : 0;
                    serMaster.TO_AGE = !DBNull.Value.Equals(returnData["TO_AGE"]) ? Convert.ToInt32(returnData["TO_AGE"].ToString()) : 0;
                    serMaster.NOTE = !DBNull.Value.Equals(returnData["PRE_REQUIST_NOTE"]) ? ((returnData["PRE_REQUIST_NOTE"].ToString())) : string.Empty;
                    serMaster.IS_REG_FEE_INCLUDED = !DBNull.Value.Equals(returnData["IS_REG_FEE_INCLUDED"]) ? ((returnData["IS_REG_FEE_INCLUDED"].ToString())) : string.Empty;
                    serMaster.BILLINGHEAD_ID = returnData["BILLINGHEAD_ID"] != DBNull.Value ? Convert.ToInt32(returnData["BILLINGHEAD_ID"]) : 0;
                    serMaster.BILLINGHEAD = !DBNull.Value.Equals(returnData["BILLINGHEAD"]) ? ((returnData["BILLINGHEAD"].ToString())) : string.Empty;
                    serMaster.SUB_PKD_ID = returnData["SERVICE_SUBTYPE_ID"].ToString();
                    serMaster.TAX_ID = returnData["TAX_ID"] != DBNull.Value ? Convert.ToInt32(returnData["TAX_ID"]) : 0;
                    serMaster.FROM_DT = !DBNull.Value.Equals(returnData["TAX_FROM_DT"]) ? ((returnData["TAX_FROM_DT"].ToString())) : string.Empty;
                    serMaster.TO_DT = !DBNull.Value.Equals(returnData["TAX_TO_DT"]) ? ((returnData["TAX_TO_DT"].ToString())) : string.Empty;
                    serMaster.TAX_PCT = !DBNull.Value.Equals(returnData["TAX_PCT"]) ? ((returnData["TAX_PCT"].ToString())) : string.Empty;
                    serMaster.TAX_AMOUNT = !DBNull.Value.Equals(returnData["TAX_AMOUNT"]) ? ((returnData["TAX_AMOUNT"].ToString())) : string.Empty;
                    serMaster.TAX_NAME = !DBNull.Value.Equals(returnData["TAX_NAME"]) ? ((returnData["TAX_NAME"].ToString())) : string.Empty;
                    serMaster.APPROVAL_REG = returnData["IS_APPROVAL_REQUIRED"].ToString();
                    serMaster.IS_ONLINE_DISPLAY = returnData["IS_ONLINE_DISPLAY"].ToString();
                    serMaster.PRICING_METHOD_ID = !DBNull.Value.Equals(returnData["PRICING_METHOD_ID"]) ? (returnData["PRICING_METHOD_ID"].ToString()) : "0";
                    serMaster.UNI_SERVICE_TYPE_ID = !DBNull.Value.Equals(returnData["UNI_SERVICE_TYPE_ID"]) ? (returnData["UNI_SERVICE_TYPE_ID"].ToString()) : "0";
                    serMaster.SERVICE_CD1 = !DBNull.Value.Equals(returnData["SERVICE_CD1"]) ? (returnData["SERVICE_CD1"].ToString()) : "";
                    serMaster.IS_SRV_QTY_DISPLAY = !DBNull.Value.Equals(returnData["IS_SRV_QTY_DISPLAY"]) ? ((returnData["IS_SRV_QTY_DISPLAY"].ToString())) : string.Empty;
                    serMaster.SRV_QTY_DISPLAY_SUFFIX_TEXT = !DBNull.Value.Equals(returnData["SRV_QTY_DISPLAY_SUFFIX_TEXT"]) ? ((returnData["SRV_QTY_DISPLAY_SUFFIX_TEXT"].ToString())) : string.Empty;
                    serMaster.PROCEDURE_TYPE_ID = !DBNull.Value.Equals(returnData["PROCEDURE_TYPE_ID"]) ? ((returnData["PROCEDURE_TYPE_ID"].ToString())) : string.Empty;
                    serMaster.GL_CODE = !DBNull.Value.Equals(returnData["GL_CD"]) ? ((returnData["GL_CD"].ToString())) : string.Empty;
                    serMaster.CPT_ID = !DBNull.Value.Equals(returnData["CPT_ID"]) ? ((returnData["CPT_ID"].ToString())) : string.Empty;
                    serMaster.CPT_NAME = !DBNull.Value.Equals(returnData["CPT_NAME"]) ? ((returnData["CPT_NAME"].ToString())) : string.Empty;
                    serMaster.IS_DOCTOR_REQUIRED = !DBNull.Value.Equals(returnData["IS_DOCTOR_REQUIRED"]) ? ((returnData["IS_DOCTOR_REQUIRED"].ToString())) : string.Empty;
                    serMaster.IS_SCHEDULE_REQUIRED = !DBNull.Value.Equals(returnData["IS_SCHEDULE_REQUIRED"]) ? ((returnData["IS_SCHEDULE_REQUIRED"].ToString())) : string.Empty;

                    serMaster.ACCOUNT_SET = !DBNull.Value.Equals(returnData["ACCOUNT_SET"]) ? ((returnData["ACCOUNT_SET"].ToString())) : string.Empty;
                    serMaster.GL_CONTROL = !DBNull.Value.Equals(returnData["GL_CONTROL"]) ? ((returnData["GL_CONTROL"].ToString())) : string.Empty;
                    serMaster.CATEGORY = !DBNull.Value.Equals(returnData["CATEGORY"]) ? ((returnData["CATEGORY"].ToString())) : string.Empty;
                    serMaster.COGS_ACCOUNT = !DBNull.Value.Equals(returnData["COGS_ACCOUNT"]) ? ((returnData["COGS_ACCOUNT"].ToString())) : string.Empty;
                    serMaster.SALES_REVENUE_ACCOUNT = !DBNull.Value.Equals(returnData["SALES_REVENUE_ACCOUNT"]) ? ((returnData["SALES_REVENUE_ACCOUNT"].ToString())) : string.Empty;
                    serMaster.APPLICABLE_FOR_ID = !DBNull.Value.Equals(returnData["APPLICABLE_FOR_ID"]) ? Convert.ToInt32(returnData["APPLICABLE_FOR_ID"].ToString()) : 0;
                    serMaster.EMER_DOCTOR_PRICE = !DBNull.Value.Equals(returnData["EMER_DOCTOR_PRICE"]) ? Convert.ToString(returnData["EMER_DOCTOR_PRICE"].ToString()) : "0";
                    serMaster.EMER_ORG_PRICE = !DBNull.Value.Equals(returnData["EMER_ORG_PRICE"]) ? Convert.ToString(returnData["EMER_ORG_PRICE"].ToString()) : "0";
                    serMaster.SAC_CD = !DBNull.Value.Equals(returnData["SAC_CD"]) ? Convert.ToString(returnData["SAC_CD"].ToString()) : string.Empty;
                    serMaster.IS_TAX_INCLUDE_EXCLUDE = returnData["IS_TAX_INCLUDE_EXCLUDE"].ToString();
                    serMaster.TARIFF_NAME = returnData["TARIFF_NAME"].ToString();
                    serMaster.SUB_PKD_ID = returnData["SUB_PKD_ID"].ToString();
                    serMaster.GL_NAME = !DBNull.Value.Equals(returnData["GL_NAME"]) ? ((returnData["GL_NAME"].ToString())) : string.Empty;
                    serMaster.SERVICE_CD3 = !DBNull.Value.Equals(returnData["SERVICE_CD3"]) ? ((returnData["SERVICE_CD3"].ToString())) : string.Empty;
                    serMaster.SERVICE_SUB_GROUP_ID = !DBNull.Value.Equals(returnData["SERVICE_SUB_GROUP_ID"]) ? Convert.ToString(returnData["SERVICE_SUB_GROUP_ID"].ToString()) : "0";
                    serMaster.SERVICE_SUB_GROUP_NAME = !DBNull.Value.Equals(returnData["SERVICE_SUB_GROUP_NAME"]) ? ((returnData["SERVICE_SUB_GROUP_NAME"].ToString())) : string.Empty;
                    serMaster.ITEM_ID = returnData["ITEM_ID"].ToString();
                    serMaster.ITEM_NAME = !DBNull.Value.Equals(returnData["ITEM_NAME"]) ? ((returnData["ITEM_NAME"].ToString())) : string.Empty;
                    serMasterCollection.Add(serMaster);
                }
                return serMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetCodeBasedCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1207, 1);
                return null;
            }
        }

        //check this where we r using ths method.
        public CollectionBase GetServiceMasterByColST(string colName, string SearchText)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_SERVICEMASTERBY_COLST);
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, colName);
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_DATA_PARM, DbType.String, SearchText);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateCollection);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceMasterByColST").Name;
                ErrorLoger.InsertErrorLogger(ex, 1208, 1);
                return null;
            }
        }


        private CollectionBase GetAutoCompleteInfo(IDataReader reader)
        {
            try
            {
                ServiceMasterCollection returnData = new ServiceMasterCollection();
                while (reader.Read())
                {
                    ListElements _element = new ListElements();
                    _element.Text = reader[0].ToString();
                    _element.Value = reader[1].ToString();
                    returnData.Add(_element);
                }
                return returnData;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 1208, 1);
                return null;
            }
        }

        public CollectionBase GetAutoCompleteInfo(string prefixText, int count, string contextKey)
        {
            try
            {
                string ServiceType = null;
                if (!string.IsNullOrEmpty(contextKey))
                {
                    string[] InputValues = contextKey.Split('/');
                    if (InputValues.Length > 1)
                    {
                        contextKey = InputValues[0];
                        ServiceType = InputValues[1];
                    }
                }

                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_IP_AUTO_SERVICES);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARAM, DbType.Int32, ServiceType);//1
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                GenerateCollectionReader reader = new GenerateCollectionReader(GetAutoCompleteInfo);
                return dbLayer.ExecuteReaderCommand(dbCmd, reader);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompleteInfo").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }

        }
        public CollectionBase GetServicesByTariff(LookUpSearch _lookUPSearch, out int _tot_records)
        {
            _tot_records = 0;
            int tariff_id = 0;
            DataAccessLayer dbLayer = new DataAccessLayer();
            DbCommand dbCmd = null;
            dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_SERVICE);
            try
            {
                if (_lookUPSearch.PreConditon != null && (!string.IsNullOrEmpty(_lookUPSearch.PreConditon[0].ToString()) ? Convert.ToInt32(_lookUPSearch.PreConditon[0]) : 0) > 0)
                {
                    tariff_id = !string.IsNullOrEmpty(_lookUPSearch.PreConditon[0].ToString()) ? Convert.ToInt32(_lookUPSearch.PreConditon[0]) : 0;
                    dbLayer.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, tariff_id);
                    dbLayer.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                    dbLayer.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                    dbLayer.AddInParameter(dbCmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);

                    //if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                    //{
                    dbLayer.AddInParameter(dbCmd, EzHms.ModelEntity.DALConstants.COLUMN_NAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                    dbLayer.AddInParameter(dbCmd, "@IP_PREFIXTEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                    //}
                    if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                        dbLayer.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.ADVANCE_SEARCH_PARM, DbType.String, _lookUPSearch.ADVANCESEARCH);
                    GenerateCollectionReader sqlData = new GenerateCollectionReader(GetLookUPSearch);
                    CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                    //_tot_records = Convert.ToInt32(dbLayer.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                    return _cBase;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicesByTariff").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
            return null;
        }

        public CollectionBase GetProcSearchData(GridPaging gpage, out int _tot_records)
        {
            _tot_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = null;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_SERVICE_BY_TYPE);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, gpage.SERVICE_TYPE_ID);
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, gpage.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, gpage.PAGE_SIZE);
                dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 8);
                if (!string.IsNullOrEmpty(gpage.COLUMN_NAME))
                {
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.DALConstants.COLUMN_NAME_PARM, DbType.String, gpage.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, "@IP_PREFIXTEXT", DbType.String, gpage.PREFIX_TEXT);
                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetProcLookUPSearch);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                _tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetProcSearchData").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }
        public CollectionBase GetProcSearchDataAdmn(GridPaging gpage, out int _tot_records)
        {
            _tot_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = null;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_SERVICE_BY_TYPE);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.String, gpage.ADMN_SERVICE_TYPE_ID);
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, gpage.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, gpage.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, "@IP_COUNT", DbType.Int32, gpage.EVENTFLAG);
                if (!string.IsNullOrEmpty(gpage.COLUMN_NAME))
                {
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.DALConstants.COLUMN_NAME_PARM, DbType.String, gpage.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, "@IP_PREFIXTEXT", DbType.String, gpage.PREFIX_TEXT);
                }
                if (!string.IsNullOrEmpty(gpage.ADVANCESEARCH))
                {

                    dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, gpage.ADVANCESEARCH);
                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetProcLookUPSearchAdmn);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                //_tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetProcSearchDataAdmn").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }
        public CollectionBase GetProcLookUPSearchAdmn(IDataReader reader)
        {
            try
            {
                ServiceMasterCollection _bCollection = new ServiceMasterCollection();
                while (reader.Read())
                {
                    ServiceMasterModel _sModel = new ServiceMasterModel();
                    _sModel.SERVICE_CD = reader[DALConstants.SERVICE_CD_COL].ToString();
                    _sModel.SERVICE_ID = Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL]);
                    _sModel.SERVICE_DESC = reader[DALConstants.SERVICE_DESC_COL].ToString();
                    _sModel.SERVICE_NAME = reader[DALConstants.SERVICE_NAME_COL].ToString();
                    _sModel.SERVICE_GROUP_NAME = reader[DALConstants.SERVICE_GROUP_NAME_COL].ToString();
                    _sModel.SERVICE_GROUP_ID = reader[DALConstants.SERVICE_GROUP_ID_COL].ToString();
                    _sModel.SERVICE_TYPE_NAME = reader[DALConstants.SERVICE_TYPE_NAME_COL].ToString();
                    _sModel.DisplayName = reader[DALConstants.SERVICE_DISPNAME_COL].ToString();
                    _sModel.Uniservicecode = reader[DALConstants.SERVICE_UNICODE_COL].ToString();
                    _sModel.IS_FOREIGN_SERVICE = reader[DALConstants.IS_FOREIGN_SERVICE_COL].ToString();
                    if (!string.IsNullOrEmpty(reader[DALConstants.PRICE_COL].ToString()))
                        _sModel.PRICE = float.Parse(reader[DALConstants.PRICE_COL].ToString());
                    _sModel.TARIFF_ID = !DBNull.Value.Equals(reader[DALConstants.TARIFF_ID_COL]) ? Convert.ToInt32(reader[DALConstants.TARIFF_ID_COL]) : 0;
                    _sModel.RECORD_STATUS = reader[DALConstants.RECORD_STATUS_COL].ToString();
                    _sModel.COVERAGE_ID = !DBNull.Value.Equals(reader[DALConstants.COVERAGE_ID_COL]) ? Convert.ToInt32(reader[DALConstants.COVERAGE_ID_COL]) : 0;
                    _sModel.Coverage_desc = !DBNull.Value.Equals(reader[DALConstants.COVERAGE_DESC_COL]) ? Convert.ToString(reader[DALConstants.COVERAGE_DESC_COL]) : string.Empty;
                    _sModel.TARIFF_NAME = !DBNull.Value.Equals(reader[DALConstants.TARIFF_NAME_COL]) ? Convert.ToString(reader[DALConstants.TARIFF_NAME_COL]) : string.Empty;
                    _sModel.NoOfRecords = !DBNull.Value.Equals(reader["TOT_RECORD_CNT"]) ? Convert.ToInt32(reader["TOT_RECORD_CNT"]) : 0;
                    _sModel.COMPANY_BILL_HEAD_ID = !DBNull.Value.Equals(reader["COMPANY_BILL_HEAD_ID"]) ? Convert.ToString(reader["COMPANY_BILL_HEAD_ID"]) : string.Empty;
                    _bCollection.Add(_sModel);
                }
                return _bCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetProcLookUPSearchAdmn").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        public CollectionBase GetLookUPSearchData(LookUpSearch _lookUPSearch, out int _tot_records)
        {
            string srv_cond = "N";
            _tot_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = null;
                if (_lookUPSearch.PreConditon != null)
                {

                    if (_lookUPSearch.PreConditon[0].ToString() == "srv")
                    {
                        srv_cond = "Y";
                        dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_SERVICE);
                    }

                    else
                    {
                        if (typeof(ListElements) == _lookUPSearch.PreConditon[0].GetType())
                        {
                            ListElements _element = (ListElements)_lookUPSearch.PreConditon[0];
                            if (_element.Text == "Tariff")
                            {
                                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_TARIFF_SERVICES);
                                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, _lookUPSearch.PreConditon[0]);
                            }
                        }
                        else
                        {
                            dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_SERVICE_BY_TYPE);
                            dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, _lookUPSearch.PreConditon[0]);

                            if (_lookUPSearch.PreConditon.Count > 1)
                            {
                                dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, _lookUPSearch.PreConditon[1]);
                                dBase.AddInParameter(dbCmd, "@IP_FLAG", DbType.String, "TAGPRICES");
                            }
                        }
                    }
                }
                else
                {
                    dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_SERVICE);
                }
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);
                if (!string.IsNullOrEmpty(_lookUPSearch.REPORTFILTERCRETERIA))
                {
                    dBase.AddInParameter(dbCmd, DALConstants.REPORT_FLAG, DbType.String, _lookUPSearch.REPORTFILTERCRETERIA);
                }
                if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.DALConstants.COLUMN_NAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, "@IP_PREFIXTEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                }

                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.ADVANCE_SEARCH_PARM, DbType.String, _lookUPSearch.ADVANCESEARCH);
                if (srv_cond == "Y")
                {
                    GenerateCollectionReader sqlData = new GenerateCollectionReader(GetLookUPSearch);
                    CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                    // _tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                    return _cBase;
                }
                else
                {
                    GenerateCollectionReader sqlData = new GenerateCollectionReader(GetLookUPSearch_not_srv);
                    CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                    //  _tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                    return _cBase;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPSearchData").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }
        public CollectionBase GetLookUPSearchData_Report(LookUpSearch _lookUPSearch, out int _tot_records)
        {
            string srv_cond = "N";
            _tot_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = null;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "RPR_GETALL_SERVICE_BY_TYPE_NEW_REPORT");

                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);
                if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.DALConstants.COLUMN_NAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, "@IP_PREFIXTEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                }

                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.ADVANCE_SEARCH_PARM, DbType.String, _lookUPSearch.ADVANCESEARCH);

                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetLookUPSearch_Report_coll);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                //  _tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return _cBase;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPSearchData_Report").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }


        public CollectionBase GetLookUPSearchDataservices(LookUpSearch _lookUPSearch, out int _tot_records)
        {
            _tot_records = 0;
            //_pOptionCache = CacheFactory.GetCacheManager();
            //string keyValue = "Get_Service_List";
            try
            {

                //if (!_pOptionCache.Contains(keyValue))
                //{
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = null;

                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_SERVICE);

                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);

                if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.DALConstants.COLUMN_NAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, "@IP_PREFIXTEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                }

                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.ADVANCE_SEARCH_PARM, DbType.String, _lookUPSearch.ADVANCESEARCH);

                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetLookUPSearch);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                _tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                //Add_Data_ToCache(keyValue, dbLayer.ExecuteReaderCommand(dbCmd, sqlData));
                return _cBase;
                //}
                //else
                //{
                //    return (CollectionBase)_pOptionCache.GetData(keyValue);
                //}
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPSearchData").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }

        private void Add_Data_ToCache(string keyValue, CollectionBase _valueAddToCache)
        {
            _pOptionCache.Add(keyValue, _valueAddToCache, CacheItemPriority.Normal, null, new SlidingTime(TimeSpan.FromMinutes(20)));
        }

        public CollectionBase GetLookUPSearch(IDataReader reader)
        {
            try
            {
                ServiceMasterCollection _bCollection = new ServiceMasterCollection();
                while (reader.Read())
                {
                    ServiceMasterModel _sModel = new ServiceMasterModel();
                    _sModel.SERVICE_CD = reader[DALConstants.SERVICE_CD_COL].ToString();
                    _sModel.SERVICE_ID = Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL]);
                    _sModel.SERVICE_DESC = reader[DALConstants.SERVICE_DESC_COL].ToString();
                    _sModel.SERVICE_NAME = reader[DALConstants.SERVICE_NAME_COL].ToString();
                    _sModel.SERVICE_GROUP_NAME = reader[DALConstants.SERVICE_GROUP_NAME_COL].ToString();
                    _sModel.SERVICE_GROUP_ID = reader[DALConstants.SERVICE_GROUP_ID_COL].ToString();
                    _sModel.SERVICE_TYPE_NAME = reader[DALConstants.SERVICE_TYPE_NAME_COL].ToString();
                    _sModel.DisplayName = reader[DALConstants.SERVICE_DISPNAME_COL].ToString();
                    _sModel.Uniservicecode = reader[DALConstants.SERVICE_UNICODE_COL].ToString();
                    _sModel.IS_FOREIGN_SERVICE = reader[DALConstants.IS_FOREIGN_SERVICE_COL].ToString();
                    if (!string.IsNullOrEmpty(reader[DALConstants.PRICE_COL].ToString()))
                        _sModel.PRICE = float.Parse(reader[DALConstants.PRICE_COL].ToString());
                    _sModel.TARIFF_ID = !DBNull.Value.Equals(reader[DALConstants.TARIFF_ID_COL]) ? Convert.ToInt32(reader[DALConstants.TARIFF_ID_COL]) : 0;
                    _sModel.RECORD_STATUS = reader[DALConstants.RECORD_STATUS_COL].ToString();
                    _sModel.COVERAGE_ID = !DBNull.Value.Equals(reader[DALConstants.COVERAGE_ID_COL]) ? Convert.ToInt32(reader[DALConstants.COVERAGE_ID_COL]) : 0;
                    _sModel.Coverage_desc = !DBNull.Value.Equals(reader[DALConstants.COVERAGE_DESC_COL]) ? Convert.ToString(reader[DALConstants.COVERAGE_DESC_COL]) : string.Empty;
                    _sModel.TARIFF_NAME = !DBNull.Value.Equals(reader[DALConstants.TARIFF_NAME_COL]) ? Convert.ToString(reader[DALConstants.TARIFF_NAME_COL]) : string.Empty;
                    _sModel.GENERAL_SERVICE_NAME = !DBNull.Value.Equals(reader["EQUI_SERVICE_NAME"]) ? Convert.ToString(reader["EQUI_SERVICE_NAME"]) : string.Empty;
                    _sModel.NoOfRecords = !DBNull.Value.Equals(reader["TOT_RECORD_CNT"]) ? Convert.ToInt32(reader["TOT_RECORD_CNT"]) : 0;
                    _bCollection.Add(_sModel);
                }
                return _bCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPSearch").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase GetProcLookUPSearch(IDataReader reader)
        {
            try
            {
                ServiceMasterCollection _bCollection = new ServiceMasterCollection();
                while (reader.Read())
                {
                    ServiceMasterModel _sModel = new ServiceMasterModel();
                    _sModel.SERVICE_CD = reader[DALConstants.SERVICE_CD_COL].ToString();
                    _sModel.SERVICE_ID = Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL]);
                    _sModel.SERVICE_DESC = reader[DALConstants.SERVICE_DESC_COL].ToString();
                    _sModel.SERVICE_NAME = reader[DALConstants.SERVICE_NAME_COL].ToString();
                    _sModel.SERVICE_GROUP_NAME = reader[DALConstants.SERVICE_GROUP_NAME_COL].ToString();
                    _sModel.SERVICE_GROUP_ID = reader[DALConstants.SERVICE_GROUP_ID_COL].ToString();
                    _sModel.SERVICE_TYPE_NAME = reader[DALConstants.SERVICE_TYPE_NAME_COL].ToString();
                    _sModel.DisplayName = reader[DALConstants.SERVICE_DISPNAME_COL].ToString();
                    _sModel.Uniservicecode = reader[DALConstants.SERVICE_UNICODE_COL].ToString();
                    _sModel.IS_FOREIGN_SERVICE = reader[DALConstants.IS_FOREIGN_SERVICE_COL].ToString();
                    if (!string.IsNullOrEmpty(reader[DALConstants.PRICE_COL].ToString()))
                        _sModel.PRICE = float.Parse(reader[DALConstants.PRICE_COL].ToString());
                    _sModel.TARIFF_ID = !DBNull.Value.Equals(reader[DALConstants.TARIFF_ID_COL]) ? Convert.ToInt32(reader[DALConstants.TARIFF_ID_COL]) : 0;
                    _sModel.RECORD_STATUS = reader[DALConstants.RECORD_STATUS_COL].ToString();
                    _sModel.COVERAGE_ID = !DBNull.Value.Equals(reader[DALConstants.COVERAGE_ID_COL]) ? Convert.ToInt32(reader[DALConstants.COVERAGE_ID_COL]) : 0;
                    _sModel.Coverage_desc = !DBNull.Value.Equals(reader[DALConstants.COVERAGE_DESC_COL]) ? Convert.ToString(reader[DALConstants.COVERAGE_DESC_COL]) : string.Empty;
                    _sModel.TARIFF_NAME = !DBNull.Value.Equals(reader[DALConstants.TARIFF_NAME_COL]) ? Convert.ToString(reader[DALConstants.TARIFF_NAME_COL]) : string.Empty;

                    _bCollection.Add(_sModel);
                }
                return _bCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPSearch").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        public CollectionBase GetLookUPSearch_not_srv(IDataReader reader)
        {
            try
            {
                ServiceMasterCollection _bCollection = new ServiceMasterCollection();
                while (reader.Read())
                {
                    ServiceMasterModel _sModel = new ServiceMasterModel();
                    _sModel.SERVICE_CD = !DBNull.Value.Equals(reader[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _sModel.SERVICE_ID = !DBNull.Value.Equals(reader[DALConstants.SERVICE_ID_COL]) ? Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL].ToString()) : 0;
                    _sModel.SERVICE_DESC = !DBNull.Value.Equals(reader[DALConstants.SERVICE_DESC_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_DESC_COL]) : string.Empty;
                    _sModel.SERVICE_NAME = !DBNull.Value.Equals(reader[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _sModel.GENERAL_SERVICE_NAME = !DBNull.Value.Equals(reader[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _sModel.SERVICE_GROUP_NAME = !DBNull.Value.Equals(reader[DALConstants.SERVICE_GROUP_NAME_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_GROUP_NAME_COL]) : string.Empty;
                    _sModel.SERVICE_GROUP_ID = !DBNull.Value.Equals(reader[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_GROUP_ID_COL]) : "0";
                    _sModel.SERVICE_TYPE_NAME = !DBNull.Value.Equals(reader[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _sModel.DisplayName = !DBNull.Value.Equals(reader[DALConstants.SERVICE_DISPNAME_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_DISPNAME_COL]) : string.Empty;
                    _sModel.Uniservicecode = !DBNull.Value.Equals(reader[DALConstants.SERVICE_UNICODE_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_UNICODE_COL]) : string.Empty;
                    _sModel.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(reader[DALConstants.IS_FOREIGN_SERVICE_COL]) ? Convert.ToString(reader[DALConstants.IS_FOREIGN_SERVICE_COL]) : string.Empty;
                    _sModel.PRICE = !DBNull.Value.Equals(reader[DALConstants.PRICE_COL]) ? float.Parse(reader[DALConstants.PRICE_COL].ToString()) : 0;
                    _sModel.TARIFF_ID = !DBNull.Value.Equals(reader[DALConstants.TARIFF_ID_COL]) ? Convert.ToInt32(reader[DALConstants.TARIFF_ID_COL]) : 0;
                    _sModel.RECORD_STATUS = !DBNull.Value.Equals(reader[DALConstants.RECORD_STATUS_COL]) ? Convert.ToString(reader[DALConstants.RECORD_STATUS_COL]) : string.Empty;
                    _sModel.COVERAGE_ID = !DBNull.Value.Equals(reader[DALConstants.COVERAGE_ID_COL]) ? Convert.ToInt32(reader[DALConstants.COVERAGE_ID_COL]) : 0;
                    _sModel.Coverage_desc = !DBNull.Value.Equals(reader[DALConstants.COVERAGE_DESC_COL]) ? Convert.ToString(reader[DALConstants.COVERAGE_DESC_COL]) : string.Empty;
                    _sModel.TARIFF_NAME = !DBNull.Value.Equals(reader[DALConstants.TARIFF_NAME_COL]) ? Convert.ToString(reader[DALConstants.TARIFF_NAME_COL]) : string.Empty;
                    _sModel.SERVICE_TYPE_ID = !DBNull.Value.Equals(reader["SERVICE_TYPE_ID"]) ? Convert.ToInt32(reader["SERVICE_TYPE_ID"]) : 0;
                    _sModel.ISACTIVE = !DBNull.Value.Equals(reader["ISACTIVE"]) ? Convert.ToString(reader["ISACTIVE"]) : string.Empty;
                    _sModel.NoOfRecords = !DBNull.Value.Equals(reader["TOT_RECORD_CNT"]) ? Convert.ToInt32(reader["TOT_RECORD_CNT"]) : 0;
                    _bCollection.Add(_sModel);
                }
                return _bCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPSearch").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase GetLookUPSearch_Report_coll(IDataReader reader)
        {
            try
            {
                ServiceMasterCollection _bCollection = new ServiceMasterCollection();
                while (reader.Read())
                {
                    ServiceMasterModel _sModel = new ServiceMasterModel();
                    _sModel.SERVICE_CD = !DBNull.Value.Equals(reader[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _sModel.SERVICE_ID = !DBNull.Value.Equals(reader[DALConstants.SERVICE_ID_COL]) ? Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL].ToString()) : 0;
                    _sModel.SERVICE_DESC = !DBNull.Value.Equals(reader[DALConstants.SERVICE_DESC_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_DESC_COL]) : string.Empty;
                    _sModel.SERVICE_NAME = !DBNull.Value.Equals(reader[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _sModel.GENERAL_SERVICE_NAME = !DBNull.Value.Equals(reader[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _sModel.SERVICE_GROUP_NAME = !DBNull.Value.Equals(reader[DALConstants.SERVICE_GROUP_NAME_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_GROUP_NAME_COL]) : string.Empty;
                    _sModel.RECORD_STATUS = !DBNull.Value.Equals(reader["RECORD_STATUS"]) ? Convert.ToString(reader["RECORD_STATUS"]) : string.Empty;
                    _sModel.NoOfRecords = !DBNull.Value.Equals(reader["TOT_RECORD_CNT"]) ? Convert.ToInt32(reader["TOT_RECORD_CNT"]) : 0;
                    _bCollection.Add(_sModel);
                }
                return _bCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPSearch_Report_coll").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="Type"></param>
        /// <param name="colName"></param>
        /// <param name="preFix"></param>
        /// <param name="pNo"></param>
        /// <param name="pSize"></param>
        /// <param name="serMast"></param>
        /// <param name="total_records"></param>
        /// <returns></returns>
        /// 
        public CollectionBase GetLookUPDataservices(LookUpSearch _lookUPSearch, out int _tot_records)
        {
            _tot_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = null;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_TARIFF_DTLS");
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 8);

                if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.DALConstants.COLUMN_NAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, "@IP_PREFIXTEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                }
                if (_lookUPSearch.PreConditon != null)
                {
                    dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, Convert.ToInt32(_lookUPSearch.PreConditon[0]));
                }
                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.ADVANCE_SEARCH_PARM, DbType.String, _lookUPSearch.ADVANCESEARCH);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetLookUPSearch1);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                _tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPDataservices").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }


        public CollectionBase GetLookUPSearch1(IDataReader reader)
        {
            try
            {
                ServiceMasterCollection _bCollection = new ServiceMasterCollection();
                while (reader.Read())
                {
                    ServiceMasterModel _sModel = new ServiceMasterModel();
                    _sModel.SERVICE_CD = reader[DALConstants.SERVICE_CD_COL].ToString();
                    _sModel.SERVICE_ID = Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL]);
                    _sModel.SERVICE_NAME = reader[DALConstants.SERVICE_NAME_COL].ToString();
                    _sModel.TARIFF_ID = !DBNull.Value.Equals(reader[DALConstants.TARIFF_ID_COL]) ? Convert.ToInt32(reader[DALConstants.TARIFF_ID_COL]) : 0;
                    _sModel.TARIFF_NAME = !DBNull.Value.Equals(reader[DALConstants.TARIFF_NAME_COL]) ? Convert.ToString(reader[DALConstants.TARIFF_NAME_COL]) : string.Empty;
                    _bCollection.Add(_sModel);
                }
                return _bCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPSearch1").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }
        public CollectionBase GetServicesByServiceType(string Type, string colName, string preFix, int pNo, int pSize, ServicePrice serMast, out int total_records)
        {
            total_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_SERVICE_BY_TYPE);
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, pNo);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, pSize);
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, colName);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, preFix);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, Convert.ToInt32(Type));
                dBase.AddInParameter(dbCmd, "@IP_ADVANCE_SEARCH", DbType.String, serMast.Advancesearch);
                dBase.AddInParameter(dbCmd, DALConstants.CONSULTATION_TYPE_ID_PARM, DbType.Int32, serMast.CONSULTATION_TYPE_ID);
                dBase.AddInParameter(dbCmd, DALConstants.DOCTOR_ID_PARM, DbType.Int32, serMast.DOCTOR_ID);
                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_ID_PARM, DbType.Int32, serMast.PATIENT_ID);
                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, serMast.PATIENT_CLASS_ID);
                dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, serMast.TARIFF_ID);
                dBase.AddInParameter(dbCmd, DALConstants.FACILITY_ID_PARM, DbType.Int32, serMast.FACILITY_ID);
                //dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, serMast.SESSION_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SURGERY_CATEGORY_ID_PARM, DbType.Int32, serMast.SURGERY_CATEGORY_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SURGERY_CLASS_ID_PARM, DbType.Int32, serMast.SURGERY_CLASS_ID);

                dBase.AddInParameter(dbCmd, "@IP_COUNT", DbType.Int32, serMast.EVENTFLAG);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateServicesCollection);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicesByServiceType").Name;
                ErrorLoger.InsertErrorLogger(ex, 1208, 1);
                return null;
            }
        }
        //saleem
        protected CollectionBase GenerateServicesCollection(IDataReader reader)
        {
            try
            {
                ServiceMasterCollection _bCollection = new ServiceMasterCollection();
                while (reader.Read())
                {
                    ServiceMasterModel _sModel = new ServiceMasterModel();
                    _sModel.SERVICE_CD = reader[DALConstants.SERVICE_CD_COL].ToString();
                    _sModel.SERVICE_ID = Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL]);
                    _sModel.SERVICE_DESC = reader[DALConstants.SERVICE_DESC_COL].ToString();
                    _sModel.SERVICE_NAME = reader[DALConstants.SERVICE_NAME_COL].ToString();
                    _sModel.SERVICE_GROUP_NAME = reader[DALConstants.SERVICE_GROUP_NAME_COL].ToString();
                    _sModel.SERVICE_GROUP_ID = reader[DALConstants.SERVICE_GROUP_ID_COL].ToString();
                    _sModel.SERVICE_TYPE_NAME = reader[DALConstants.SERVICE_TYPE_NAME_COL].ToString();
                    _sModel.DisplayName = reader[DALConstants.SERVICE_DISPNAME_COL].ToString();
                    _sModel.Uniservicecode = reader[DALConstants.SERVICE_UNICODE_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.SERVICECLASS_ID_COL].ToString()))
                        _sModel.Serviceclass_id = Convert.ToInt32(reader[DALConstants.SERVICECLASS_ID_COL].ToString());

                    if (!string.IsNullOrEmpty(reader[DALConstants.SERVICE_TYPE_ID_COL].ToString()))
                        _sModel.SERVICE_TYPE_ID = Convert.ToInt32(reader[DALConstants.SERVICE_TYPE_ID_COL].ToString());

                    if (!string.IsNullOrEmpty(reader[DALConstants.DOCTOR_ID_COL].ToString()))
                        _sModel.DOCTOR_ID = reader[DALConstants.DOCTOR_ID_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.DEPARTMENT_ID_COL].ToString()))
                        _sModel.DEPARTMENT_ID = Convert.ToInt32(reader[DALConstants.DEPARTMENT_ID_COL].ToString());

                    if (!string.IsNullOrEmpty(reader[DALConstants.PRICE_COL].ToString()))
                        _sModel.PRICE = float.Parse(reader[DALConstants.PRICE_COL].ToString());

                    if (!string.IsNullOrEmpty(reader["TOT_RECORD_CNT"].ToString()))
                        _sModel.TOT_RECORD_CNT = (reader["TOT_RECORD_CNT"].ToString());

                    _sModel.EFFECT_FROM_DT = !DBNull.Value.Equals(reader["EFFECT_FROM_DT"]) ? Convert.ToString(reader["EFFECT_FROM_DT"]) : string.Empty;
                    _sModel.EFFECT_TO_DT = !DBNull.Value.Equals(reader["EFFECT_TO_DT"]) ? Convert.ToString(reader["EFFECT_TO_DT"]) : string.Empty;

                    _bCollection.Add(_sModel);
                }
                return _bCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateServicesCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1208, 1);
                return null;
            }
        }
        //GANAPATHI FOR IPSERVICEENTRY
        public CollectionBase GetServicesByIPServiceType(ServicePrice serMast, out int total_records)
        {
            total_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.GetServiceDetailsBasedOnSrvType);

                if (serMast.COLUMN_NAME.Contains("/"))
                {
                    string[] ColNameArry = serMast.COLUMN_NAME.Split('/');
                    if (ColNameArry.Length > 0)
                    {
                        dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, ColNameArry[0]);
                        dBase.AddInParameter(dbCmd, DALConstants.FLAG_PARM, DbType.String, ColNameArry[1]);
                    }
                }
                else
                {
                    dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, serMast.COLUMN_NAME);
                }

                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, serMast.PREFIX);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, serMast.SERVICE_TYPE_ID);
                dBase.AddInParameter(dbCmd, DALConstants.WARD_GROUP_ID_PARM, DbType.Int32, Convert.ToInt32(serMast.WARD_GROUP_ID));
                dBase.AddInParameter(dbCmd, DALConstants.CONSULTATION_TYPE_ID_PARM, DbType.Int32, serMast.CONSULTATION_TYPE_ID);
                //dBase.AddInParameter(dbCmd,DALConstants.SERVICE_TYPE_CD_PARM,DbType.String,serMast.SERVICE_TYPE_CD);
                //dBase.AddInParameter(dbCmd,DALConstants.VISIT_TYPE_PARM,DbType.String,serMast.VISIT_TYPE); 
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, serMast.PAGENUM);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, serMast.PAGESIZE);
                dBase.AddInParameter(dbCmd, DALConstants.DOCTOR_ID_PARM, DbType.Int32, serMast.DOCTOR_ID);
                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_ID_PARM, DbType.Int32, serMast.PATIENT_ID);
                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_CLASS_ID_PARM, DbType.Int32, serMast.PATIENT_CLASS_ID);
                dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, serMast.TARIFF_ID);
                dBase.AddInParameter(dbCmd, DALConstants.FACILITY_ID_PARM, DbType.Int32, serMast.FACILITY_ID);
                //dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, serMast.SESSION_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SURGERY_CATEGORY_ID_PARM, DbType.Int32, serMast.SURGERY_CATEGORY_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SURGERY_CLASS_ID_PARM, DbType.Int32, serMast.SURGERY_CLASS_ID);
                //dBase.AddInParameter(dbCmd, DALConstants.IP_ADMN_NO_PARM, DbType.String, serMast.UmrNo);
                dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, total_records);
                dBase.AddInParameter(dbCmd, "@IP_EMERGNCY_PRICE", DbType.String, serMast.IS_EMERGNCY_PRICE);
                dBase.AddInParameter(dbCmd, "@IP_GENDER_ID", DbType.Int32, serMast.GENDER_ID);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateIPServicesCollection);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                if (cBase.Count > 0)
                    total_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                else
                    total_records = 0;
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicesByIPServiceType").Name;
                ErrorLoger.InsertErrorLogger(ex, 1208, 1);
                return null;
            }
        }
        protected CollectionBase GenerateIPServicesCollection(IDataReader reader)
        {
            try
            {
                ServiceMasterCollection _bCollection = new ServiceMasterCollection();
                while (reader.Read())
                {
                    ServiceMasterModel _sModel = new ServiceMasterModel();
                    _sModel.SERVICE_CD = reader[DALConstants.SERVICE_CD_COL].ToString();
                    _sModel.SERVICE_ID = Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL]);
                    //_sModel.SERVICE_DESC = reader[DALConstants.SERVICE_DESC_COL].ToString();
                    _sModel.SERVICE_NAME = reader[DALConstants.SERVICE_NAME_COL].ToString();
                    _sModel.SERVICE_GROUP_NAME = reader[DALConstants.SERVICE_GROUP_NAME_COL].ToString();
                    _sModel.SERVICE_GROUP_ID = reader[DALConstants.SERVICE_GROUP_ID_COL].ToString();
                    _sModel.SERVICE_TYPE_NAME = reader[DALConstants.SERVICE_TYPE_NAME_COL].ToString();
                    // _sModel.DisplayName = reader[DALConstants.SERVICE_DISPNAME_COL].ToString();
                    //_sModel.Uniservicecode = reader[DALConstants.SERVICE_UNICODE_COL].ToString();
                    _sModel.SPECIMEN_NAME = reader[DALConstants.SPECIMEN_NAME_COL].ToString();
                    _sModel.VACCUTAINER_NAME = reader[DALConstants.VACCUTAINER_NAME_COL].ToString();
                    if (!string.IsNullOrEmpty(reader[DALConstants.SERVICECLASS_ID_COL].ToString()))
                        _sModel.Serviceclass_id = Convert.ToInt32(reader[DALConstants.SERVICECLASS_ID_COL].ToString());

                    if (!string.IsNullOrEmpty(reader[DALConstants.SERVICE_TYPE_ID_COL].ToString()))
                        _sModel.SERVICE_TYPE_ID = Convert.ToInt32(reader[DALConstants.SERVICE_TYPE_ID_COL].ToString());

                    //added by ramakotireddy
                    if (!string.IsNullOrEmpty(reader[DALConstants.SERVICE_ID_COL].ToString()))
                        _sModel.DOCTOR_ID = reader[DALConstants.SERVICE_ID_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.DEPARTMENT_ID_COL].ToString()))
                        _sModel.DEPARTMENT_ID = Convert.ToInt32(reader[DALConstants.DEPARTMENT_ID_COL].ToString());
                    if (!string.IsNullOrEmpty(reader[DALConstants.DEPARTMENT_NAME_COL].ToString()))
                        _sModel.DEPARTMENT_NAME = reader[DALConstants.DEPARTMENT_NAME_COL].ToString();

                    if (!string.IsNullOrEmpty(reader[DALConstants.PRICE_COL].ToString()))
                        _sModel.PRICE = float.Parse(reader[DALConstants.PRICE_COL].ToString());

                    _bCollection.Add(_sModel);
                }
                return _bCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateIPServicesCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1208, 1);
                return null;
            }
        }
        public string GetServiceid(int serviceid)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SERVICEID");
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARAM, DbType.Int32, serviceid);
                return dBase.ExecuteScalar(dbCmd).ToString();
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceid").Name;
                ErrorLoger.InsertErrorLogger(ex, 1208, 1);
                return null;
            }
        }
        public CollectionBase GetAllPackageServices_Paging(LookUpSearch lookUPSearch, out int total_records)
        {
            total_records = 0;
            try
            {

                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_PACKAGE_SERVICES);
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, lookUPSearch.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, lookUPSearch.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIX_TEXT_PARM, DbType.String, lookUPSearch.PREFIX_TEXT);
                dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, total_records);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateCollection);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                total_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAllPackageServices_Paging").Name;
                ErrorLoger.InsertErrorLogger(ex, 1203, 1);
                return null;
            }

        }

        public bool SavePackageServices(EzHms.ModelEntity.ServiceDetMaster sDetMaster)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_INSUPD_SERVICEPACKAGE);
                dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, sDetMaster.TARIFF_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARM, DbType.Int32, sDetMaster.SERVICE_ID);
                dBase.AddInParameter(dbCmd, DALConstants.GENERAL_SERVICE_ID_PARM, DbType.String, sDetMaster.GENERAL_SERVICE_ID);

                //dBase.AddInParameter(dbCmd, DALConstants.SERVICE_GROUP_ID_PARM, DbType.Int32, sDetMaster.SERVICE_GROUP_ID);
                //dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, sDetMaster.SERVICE_TYPE_ID);
                //dBase.AddInParameter(dbCmd, DALConstants.EFFECT_FROM_PARM, DbType.Int32, sDetMaster.EFFECT_FROM);
                //dBase.AddInParameter(dbCmd, DALConstants.EFFECT_TO_PARM, DbType.Int32, sDetMaster.EFFECT_TO);
                //dBase.AddInParameter(dbCmd, DALConstants.RATE_PARM, DbType.String, sDetMaster.RATE);
                //dBase.AddInParameter(dbCmd, DALConstants.QUANTITY_PARM, DbType.String, sDetMaster.QUANTITY);
                //dBase.AddInParameter(dbCmd, DALConstants.AMOUNT_PARM, DbType.String, sDetMaster.AMOUNT);
                dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sDetMaster.SESSION_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_DET_ID_PARM, DbType.String, sDetMaster.SERVICE_DET_ID);

                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_DET_REV_NO_PARM, DbType.String, sDetMaster.SERVICE_DET_REV_NO);

                int count = dBase.ExecuteNonQuery(dbCmd);

                if (count > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("SavePackageServices").Name;
                ErrorLoger.InsertErrorLogger(ex, 1201, 1);
                return false;
            }
        }

        public List<ListElements> GetAutoCompletePackaGeServices(string prefixText, int count, string contextKey)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_AUTOPACKAGESERVICE);

                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, contextKey);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                return dbLayer.ExecuteReadercmd(dbCmd);

                //List<string> returnData = new List<string>();
                //IDataReader dbDR = dBase.ExecuteReader(dbCmd);
                //while (dbDR.Read())
                //{
                //    returnData.Add(dbDR[contextKey].ToString());
                //}
                //return returnData.ToArray();
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetAutoCompletePackaGeServices").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }

        }


        public CollectionBase GetLookup_ServiceAdvanceSerach(LookUpSearch _lookUPSearch, out int _tot_records)
        {
            _tot_records = 0;
            try
            {

                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = null;
                if (_lookUPSearch.PreConditon != null)
                {
                    dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_SERVICES_SEARCH);
                    dBase.AddInParameter(dbCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.Int32, _lookUPSearch.PreConditon[0]);
                }
                else
                {
                    dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_SERVICE);
                }
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 8);
                if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.COLUMN_NAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.PREFIX_TEXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);
                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetLookUPSearch);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                _tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return _cBase;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookup_ServiceAdvanceSerach").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }

        public CollectionBase Get_All_Tariff_Services(GridPaging _gridPaging, out int _tot_records)
        {
            _tot_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_TARIFF_SERVICE_DETAILS);
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _gridPaging.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _gridPaging.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARAM, DbType.Int32, 0);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_CLASS_ID_PARM, DbType.Int32, 0);
                dBase.AddInParameter(dbCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, _gridPaging.ADVANCESEARCH);
                dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 8);
                if (_gridPaging.PreConditon != null)
                {
                    int tariffID = (int)_gridPaging.PreConditon[0];
                    dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, tariffID);
                }
                if (!string.IsNullOrEmpty(_gridPaging.COLUMN_NAME))
                {
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.COLUMN_NAME_PARM, DbType.String, _gridPaging.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.PREFIX_TEXT_PARM, DbType.String, _gridPaging.PREFIX_TEXT);
                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetTariffServices);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                _tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_All_Tariff_Services").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }

        CollectionBase GetTariffServices(IDataReader reader)
        {
            //ServiceMappingCollection _bCollection = new ServiceMappingCollection();
            try
            {
                ServiceMasterCollection _bCollection = new ServiceMasterCollection();
                while (reader.Read())
                {
                    TARIFF_SERVICE _sModel = new TARIFF_SERVICE();
                    _sModel.SERVICE_CD = reader[DALConstants.SERVICE_CD_COL].ToString();
                    _sModel.SERVICE_ID = Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL]);
                    _sModel.SERVICE_DESC = reader[DALConstants.SERVICE_DESC_COL].ToString();
                    _sModel.SERVICE_NAME = reader[DALConstants.SERVICE_NAME_COL].ToString();
                    _sModel.SERVICE_GROUP_NAME = reader[DALConstants.SERVICE_GROUP_NAME_COL].ToString();
                    _sModel.SERVICE_TYPE_NAME = reader[DALConstants.SERVICE_TYPE_NAME_COL].ToString();
                    _sModel.GENERAL_SERVICE_NAME = reader[DALConstants.GENERAL_SERVICE_NAME_COL].ToString();
                    _sModel.GENERAL_SERVICE_ID = reader[DALConstants.GENERAL_SERVICE_ID_COL] != DBNull.Value ? Convert.ToInt32(reader[DALConstants.GENERAL_SERVICE_ID_COL]) : 0;
                   // _sModel.TARIFF_NAME = reader[DALConstants.TARIFF_NAME_COL].ToString();
                  //  if (!string.IsNullOrEmpty(reader[DALConstants.PRICE_COL].ToString()))
                        //_sModel.PRICE = float.Parse(reader[DALConstants.PRICE_COL].ToString());
                    //_sModel.CREATE_BY_NAME = !DBNull.Value.Equals(reader[DALConstants.CREATE_BY_COL]) ? Convert.ToString(reader[DALConstants.CREATE_BY_COL]) : string.Empty;
                    _sModel.CREATE_DT = !DBNull.Value.Equals(reader[DALConstants.CREATE_DT_COL]) ? Convert.ToString(reader[DALConstants.CREATE_DT_COL]) : string.Empty;
                    //_sModel.MODIFY_BY_NAME = !DBNull.Value.Equals(reader[DALConstants.MODIFY_BY_COL]) ? Convert.ToString(reader[DALConstants.MODIFY_BY_COL]) : string.Empty;
                    _sModel.MODIFY_DT = !DBNull.Value.Equals(reader[DALConstants.MODIFY_DT_COL]) ? Convert.ToString(reader[DALConstants.MODIFY_DT_COL]) : string.Empty;
                    _sModel.RECORD_STATUS = reader[DALConstants.RECORD_STATUS_COL].ToString();
                    //if (_sModel.RECORD_STATUS == "A")
                    //{
                    //    _sModel.RECORD_STATUSS = "Active";
                    //}
                    //else
                    //{
                    //    _sModel.RECORD_STATUSS = "InActive";
                    //}
                    //_sModel.COVERAGE_FOR = !DBNull.Value.Equals(reader[DALConstants.COVERAGE_FOR_COL]) ? Convert.ToString(reader[DALConstants.COVERAGE_FOR_COL]) : string.Empty;
                    _bCollection.Add(_sModel);
                }
                return _bCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetTariffServices").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }


        public CollectionBase Get_All_Tariff_Services_Cmp(LookUpSearch _lookupSearch, out int _tot_records)
        {

            _tot_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_TARIFF_SERVICE_DETAIL");
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookupSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookupSearch.PAGE_SIZE);
                dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 8);

                if (_lookupSearch.PreConditon != null && _lookupSearch.PreConditon.Count > 0 && !string.IsNullOrEmpty(_lookupSearch.PreConditon[0].ToString()))
                    dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, Convert.ToInt32(_lookupSearch.PreConditon[0]));



                //if (_lookupSearch.PreConditon != null)
                //{
                //    int tariffID = (int)_gridPaging.PreConditon[0];
                //    dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, tariffID);
                //}

                dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.COLUMN_NAME_PARM, DbType.String, _lookupSearch.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.PREFIX_TEXT_PARM, DbType.String, _lookupSearch.PREFIX_TEXT);
                //if (!string.IsNullOrEmpty(_gridPaging.COLUMN_NAME))
                //{
                //    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.COLUMN_NAME_PARM, DbType.String, _gridPaging.COLUMN_NAME);
                //    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.PREFIX_TEXT_PARM, DbType.String, _gridPaging.PREFIX_TEXT);
                //}
                GenerateCollectionReader sqlData = new GenerateCollectionReader(Get_All_Tariff_Services_Cmp_coll);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                _tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_All_Tariff_Services1").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }



        }

        public CollectionBase Get_All_Tariff_Services1(int Service_class, int Service_Type, GridPaging _gridPaging, out int _tot_records)
        {
            _tot_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_TARIFF_SERVICE_DETAILS);
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _gridPaging.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _gridPaging.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_CLASS_ID_PARM, DbType.Int32, Service_class);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARAM, DbType.Int32, Service_Type);
                dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 8);
                if (_gridPaging.PreConditon != null)
                {
                    int tariffID = (int)_gridPaging.PreConditon[0];
                    dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, tariffID);
                }
                if (!string.IsNullOrEmpty(_gridPaging.COLUMN_NAME))
                {
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.COLUMN_NAME_PARM, DbType.String, _gridPaging.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.PREFIX_TEXT_PARM, DbType.String, _gridPaging.PREFIX_TEXT);
                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetTariffServices1);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                _tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_All_Tariff_Services1").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }


        CollectionBase Get_All_Tariff_Services_Cmp_coll(IDataReader reader)
        {
            try
            {
                ServiceMappingCollection _bCollection = new ServiceMappingCollection();
                TARIFF_SERVICE _sModel = null;
                while (reader.Read())
                {
                    _sModel = new TARIFF_SERVICE();
                    _sModel.SERVICE_CD = !DBNull.Value.Equals(reader[DALConstants.SERVICE_CD_COL].ToString()) ? Convert.ToString(reader[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _sModel.SERVICE_ID = !DBNull.Value.Equals(reader[DALConstants.SERVICE_ID_COL].ToString()) ? Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL]) : 0;
                    _sModel.SERVICE_REV_NO = !DBNull.Value.Equals(reader[DALConstants.SERVICE_REV_NO_COL]) ? Convert.ToInt32(reader[DALConstants.SERVICE_REV_NO_COL]) : 0;
                    _sModel.SERVICE_DESC = !DBNull.Value.Equals(reader[DALConstants.SERVICE_DESC_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_DESC_COL]) : string.Empty;
                    _sModel.SERVICE_NAME = !DBNull.Value.Equals(reader[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                   // _sModel.SERVICE_GROUP_ID = !DBNull.Value.Equals(reader[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_GROUP_ID_COL]) : string.Empty;
                    _sModel.SERVICE_GROUP_NAME = !DBNull.Value.Equals(reader[DALConstants.SERVICE_GROUP_NAME_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_GROUP_NAME_COL]) : string.Empty;
                    _sModel.SERVICE_TYPE_NAME = !DBNull.Value.Equals(reader[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _sModel.GENERAL_SERVICE_NAME = !DBNull.Value.Equals(reader[DALConstants.GENERAL_SERVICE_NAME_COL]) ? Convert.ToString(reader[DALConstants.GENERAL_SERVICE_NAME_COL]) : string.Empty;
                    _sModel.TARIFF_ID = !DBNull.Value.Equals(reader[DALConstants.TARIFF_ID_COL]) ? Convert.ToInt32(reader[DALConstants.TARIFF_ID_COL]) : 0;
                    _sModel.GENERAL_SERVICE_ID = reader[DALConstants.GENERAL_SERVICE_ID_COL] != DBNull.Value ? Convert.ToInt32(reader[DALConstants.GENERAL_SERVICE_ID_COL]) : 0;
                 //   if (!string.IsNullOrEmpty(reader[DALConstants.PRICE_COL].ToString()))
                     //   _sModel.PRICE = float.Parse(reader[DALConstants.PRICE_COL].ToString());
                    _bCollection.Add(_sModel);
                }
                return _bCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetTariffServices1").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }



        protected CollectionBase GetTariffServices1(IDataReader reader)
        {
            try
            {
                //ServiceMappingCollection _bCollection = new ServiceMappingCollection();
                //ServiceMasterCollection _bCollection = new ServiceMasterCollection();
                TARIFF_SERVICE_COLL _tariffSerColl = new TARIFF_SERVICE_COLL();
                while (reader.Read())
                {
                    //TARIFF_SERVICE _sModel = new TARIFF_SERVICE();
                    TARIFF_SERVICE _objTariffService = new TARIFF_SERVICE();
                    _objTariffService.SERVICE_CD = !DBNull.Value.Equals(reader[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _objTariffService.SERVICE_ID = !DBNull.Value.Equals(reader[DALConstants.SERVICE_ID_COL]) ? Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL]) : 0;
                    _objTariffService.SERVICE_REV_NO = !DBNull.Value.Equals(reader[DALConstants.SERVICE_REV_NO_COL]) ? Convert.ToInt32(reader[DALConstants.SERVICE_REV_NO_COL]) : 0;
                    _objTariffService.SERVICE_DESC = !DBNull.Value.Equals(reader[DALConstants.SERVICE_DESC_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_DESC_COL]) : string.Empty;
                    _objTariffService.SERVICE_NAME = !DBNull.Value.Equals(reader[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _objTariffService.SERVICE_GROUP_ID = !DBNull.Value.Equals(reader[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToInt32(reader[DALConstants.SERVICE_GROUP_ID_COL]) : 0;
                    _objTariffService.SERVICE_GROUP_NAME = !DBNull.Value.Equals(reader[DALConstants.SERVICE_GROUP_NAME_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_GROUP_NAME_COL]) : string.Empty;
                    _objTariffService.SERVICE_TYPE_NAME = !DBNull.Value.Equals(reader[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(reader[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _objTariffService.GENERAL_SERVICE_ID = !DBNull.Value.Equals(reader[DALConstants.GENERAL_SERVICE_ID_COL]) ? Convert.ToInt32(reader[DALConstants.GENERAL_SERVICE_ID_COL]) : 0;
                    _objTariffService.GENERAL_SERVICE_NAME = !DBNull.Value.Equals(reader[DALConstants.GENERAL_SERVICE_NAME_COL]) ? Convert.ToString(reader[DALConstants.GENERAL_SERVICE_NAME_COL]) : string.Empty;
                    _objTariffService.TARIFF_ID = !DBNull.Value.Equals(reader[DALConstants.TARIFF_ID_COL]) ? Convert.ToInt32(reader[DALConstants.TARIFF_ID_COL]) : 0;
                    _objTariffService.SERVICE_TYPE_ID = !DBNull.Value.Equals(reader[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(reader[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _objTariffService.SERVICE_CLASS_ID = !DBNull.Value.Equals(reader[DALConstants.SERVICE_CLASS_ID_COL]) ? Convert.ToInt32(reader[DALConstants.SERVICE_CLASS_ID_COL]) : 0;
                    _objTariffService.TARIFF_PRICE = !DBNull.Value.Equals(reader[DALConstants.TARIFF_PRICE_COL]) ? Convert.ToString(reader[DALConstants.TARIFF_PRICE_COL]) : string.Empty;
                    _objTariffService.PRICE = !DBNull.Value.Equals(reader[DALConstants.PRICE_COL]) ? Convert.ToString(reader[DALConstants.PRICE_COL]) : string.Empty;

                    _tariffSerColl.Add(_objTariffService);



                    //_sModel.SERVICE_CD = reader[DALConstants.SERVICE_CD_COL].ToString();
                    //_sModel.SERVICE_ID = Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL]);
                    //_sModel.SERVICE_REV_NO = Convert.ToInt32(reader[DALConstants.SERVICE_REV_NO_COL]);
                    //_sModel.SERVICE_DESC = reader[DALConstants.SERVICE_DESC_COL].ToString();
                    //_sModel.SERVICE_NAME = reader[DALConstants.SERVICE_NAME_COL].ToString();
                    //_sModel.SERVICE_GROUP_ID = reader[DALConstants.SERVICE_GROUP_ID_COL].ToString();
                    //_sModel.SERVICE_GROUP_NAME = reader[DALConstants.SERVICE_GROUP_NAME_COL].ToString();
                    //_sModel.SERVICE_TYPE_NAME = reader[DALConstants.SERVICE_TYPE_NAME_COL].ToString();
                    //_sModel.GENERAL_SERVICE_NAME = reader[DALConstants.GENERAL_SERVICE_NAME_COL].ToString();
                    ////_sModel.TARIFF_ID = Convert.ToInt32(reader[DALConstants.TARIFF_ID_COL]);
                    //_sModel.TARIFF_ID = reader[DALConstants.TARIFF_ID_COL] != DBNull.Value ? Convert.ToInt32(reader[DALConstants.TARIFF_ID_COL]) : 0;
                    //_sModel.GENERAL_SERVICE_ID = reader[DALConstants.GENERAL_SERVICE_ID_COL] != DBNull.Value ? Convert.ToInt32(reader[DALConstants.GENERAL_SERVICE_ID_COL]) : 0;
                    //_sModel.SERVICE_TYPE_ID = !DBNull.Value.Equals(reader[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(reader[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    //_sModel.Serviceclass_id = !DBNull.Value.Equals(reader[DALConstants.SERVICECLASS_ID_COL]) ? Convert.ToInt32(reader[DALConstants.SERVICECLASS_ID_COL]) : 0;
                    //if (!string.IsNullOrEmpty(reader[DALConstants.PRICE_COL].ToString()))
                    //    _sModel.PRICE = float.Parse(reader[DALConstants.PRICE_COL].ToString());
                    //_bCollection.Add(_sModel);
                }
                return _tariffSerColl;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetTariffServices1").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }
        public CollectionBase Get_All_Tariff_ServicesCopy(GridPaging _gridPaging, int _groupid, int _service_type_id, int _service_class_id, out int _tot_records)
        {
            _tot_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.PR_GET_TARIFFSERVICE_DETAILS);
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _gridPaging.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _gridPaging.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_GROUP_ID_PARAM, DbType.Int32, _groupid);
                dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 8);
                if (_gridPaging.PreConditon != null)
                {
                    int tariffID = (int)_gridPaging.PreConditon[0];
                    dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, tariffID);
                }
                if (!string.IsNullOrEmpty(_gridPaging.COLUMN_NAME))
                {
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.COLUMN_NAME_PARM, DbType.String, _gridPaging.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.PREFIX_TEXT_PARM, DbType.String, _gridPaging.PREFIX_TEXT);
                }

                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_CLASS_ID_PARM, DbType.Int32, _service_class_id);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARAM, DbType.Int32, _service_type_id);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetTariffServices1);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                _tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_All_Tariff_ServicesCopy").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }

        public CollectionBase GetLookUPSearchDataByServiceGroupID_Tariff(LookUpSearch _lookUPSearch, out int _tot_records)
        {
            _tot_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = null;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_SERVICES_BY_SERVICE_GROUPID);

                if (_lookUPSearch.PreConditon != null)
                {

                    dBase.AddInParameter(dbCmd, DALConstants.SERVICE_GROUP_ID_PARM, DbType.Int32, _lookUPSearch.PreConditon[0]);
                    if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 1)
                    {
                        dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, int.Parse(string.IsNullOrEmpty(Convert.ToString(_lookUPSearch.PreConditon[1])) ? "0" : _lookUPSearch.PreConditon[1].ToString()));

                    }
                    if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count > 2)
                    {
                        dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, int.Parse(string.IsNullOrEmpty(Convert.ToString(_lookUPSearch.PreConditon[2])) ? "0" : _lookUPSearch.PreConditon[2].ToString()));
                    }
                    if (_lookUPSearch.PreConditon != null && _lookUPSearch.PreConditon.Count == 4)
                    {
                        dBase.AddInParameter(dbCmd, DALConstants.FLAG_PARM, DbType.String, Convert.ToString(_lookUPSearch.PreConditon[3]));
                        // dBase.AddInParameter(dbCmd, DALConstants.FLAG_PARM, DbType.Int32, Convert.ToInt32(_obj.PreConditon[0]));
                    }
                    //if (_lookUPSearch.PreConditon.Count > 1)
                    //{
                    //    dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, int.Parse(string.IsNullOrEmpty(Convert.ToString(_lookUPSearch.PreConditon[1])) ? "0" : _lookUPSearch.PreConditon[1].ToString()));
                    //    if (_lookUPSearch.PreConditon.Count == 3)
                    //        dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, int.Parse(string.IsNullOrEmpty(Convert.ToString(_lookUPSearch.PreConditon[2])) ? "0" : _lookUPSearch.PreConditon[2].ToString()));
                    //}

                }
                //if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                //{
                dBase.AddInParameter(dbCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, _lookUPSearch.ADVANCESEARCH);
                //}

                //if (!string.IsNullOrEmpty(_lookUPSearch.PREFIX_TEXT))
                //{
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, DALConstants.PREFIX_TXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);
                //}

                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 0);
                //dBase.AddInParameter(dbCmd, "IP_PREFIX_TEXT", DbType.String, 1);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetLookUPSearchDet);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                _tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return _cBase;

            }
            catch (Exception ex)
            {
                throw new ArgumentException(ex.Message);
            }
        }

        public static CollectionBase GetLookUPSearchDet(IDataReader reader)
        {
            ServiceMasterCollection _bCollection = new ServiceMasterCollection();
            while (reader.Read())
            {
                ServiceMasterModel _sModel = new ServiceMasterModel();
                _sModel.SERVICE_CD = reader[DALConstants.SERVICE_CD_COL].ToString();
                _sModel.SERVICE_ID = Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL]);
                _sModel.SERVICE_DESC = reader[DALConstants.SERVICE_DESC_COL].ToString();
                _sModel.SERVICE_NAME = reader[DALConstants.SERVICE_NAME_COL].ToString();
                _sModel.COVERAGE_ID = Convert.ToInt32(reader["COVERAGE_ID"].ToString());
                _bCollection.Add(_sModel);
            }
            return _bCollection;
        }

        public CollectionBase Get_All_WardGroups_By_Tariff(int tariff_id, string flag)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_WARD_GROUP_TARIFF);
                dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, tariff_id);
                if (!string.IsNullOrEmpty(flag))
                {
                    dBase.AddInParameter(dbCmd, DALConstants.FLAG_PARM, DbType.String, flag);
                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetWardGroupcoll_By_Tariff);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_All_WardGroups_By_Tariff").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }




        CollectionBase GetWardGroupcoll_By_Tariff(IDataReader reader)
        {
            try
            {

                Ward_Group_Collection wardcoll = new Ward_Group_Collection();
                while (reader.Read())
                {

                    WardGroup objwg = new WardGroup();

                    objwg.Ward_Group_Desc = reader[DALConstants.WARD_GROUP_DESC_COL].ToString();
                    objwg.Ward_Group_Id = Convert.ToInt32(reader[DALConstants.WARD_GROUP_ID_COL].ToString());
                    objwg.Ward_Group_Cd = reader[DALConstants.WARD_GROUP_CD_COL].ToString();
                    objwg.WARD_GROUP_NAME = reader[DALConstants.WARD_GROUP_NAME_COL].ToString();
                    objwg.VALUE = reader["VALUE"].ToString();
                    wardcoll.Add(objwg);
                }
                return wardcoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetWardGroupcoll_By_Tariff").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }


        public DataSet GetEnquiryDetailsWardWise(WardGroup wgroup)
        {
            DataSet ds = new DataSet();
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_SERVICE_ENQUIRY);
                dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, wgroup.TARIFF_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARAM, DbType.Int32, wgroup.SERVICE_TYPE_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_GROUP_ID_PARAM, DbType.Int32, wgroup.SERVICE_GROUP_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARAM, DbType.Int32, wgroup.SERVICE_ID);
                dBase.AddInParameter(dbCmd, DALConstants.WARD_GROUP_ID_PARAM, DbType.String, wgroup.Ward_Group_Ids);
                int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                //GenerateCollectionReader sqlData = new GenerateCollectionReader(EnquiryDetailsCollection);
                //DataSet _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                //return _cBase;
                dBase.LoadDataSet(dbCmd, ds, "Price");
            }
            catch (Exception ex)
            {
                //ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_All_Tariff_ServicesCopy").Name;
                //ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                //return null;
            }
            return ds;
        }

        public DataSet GetEnquiryDetailsWardWiseDetails(WardGroup wgroup)
        {
            DataSet ds = new DataSet();
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GETALL_SERVICE_PRICES);
                dBase.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARAM, DbType.Int32, wgroup.TARIFF_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARAM, DbType.Int32, wgroup.SERVICE_TYPE_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_GROUP_ID_PARAM, DbType.Int32, wgroup.SERVICE_GROUP_ID);
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARAM, DbType.Int32, wgroup.SERVICE_ID);
                dBase.AddInParameter(dbCmd, DALConstants.WARD_GROUP_ID_PARAM, DbType.String, wgroup.Ward_Group_Ids);
                dBase.AddInParameter(dbCmd, DALConstants.DOCTOR_ID_PARAM, DbType.Int32, wgroup.DOCTOR_ID);
                int sessionid = Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]);
                dBase.AddInParameter(dbCmd, DALConstants.SESSION_ID_PARM, DbType.Int32, sessionid);
                dBase.LoadDataSet(dbCmd, ds, "Price");
            }
            catch (Exception ex)
            {
                //ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_All_Tariff_ServicesCopy").Name;
                //ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                //return null;
            }
            return ds;

        }

        CollectionBase EnquiryDetailsCollection(IDataReader reader)
        {
            try
            {

                ServiceGroupCollection sercoll = new ServiceGroupCollection();
                while (reader.Read())
                {

                    Service objservice = new Service();

                    objservice.SERVICE_CD = reader[DALConstants.SERVICE_CD_COL].ToString();
                    objservice.SERVICE_ID = Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL].ToString());
                    objservice.SERVICE_NAME = reader[DALConstants.SERVICE_NAME_COL].ToString();
                    objservice.SERVICE_PRICE = reader[DALConstants.PRICE_COL].ToString();
                    sercoll.Add(objservice);
                }
                return sercoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("EnquiryDetailsCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }



        public bool InsertCompanyTariffServiceMapping(string _xmlStr)
        {

            DataAccessLayer dbLayer = new DataAccessLayer();
            DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_INSUPD_SERVICE_PRICE_XML);
            bool val = false;
            try
            {
                MemoryStream stream = new MemoryStream(System.Text.Encoding.UTF32.GetBytes(_xmlStr.ToString()));
                System.Data.SqlTypes.SqlXml xml = new System.Data.SqlTypes.SqlXml(stream);
                dbLayer.AddInParameter(dbCmd, "@XML", DbType.Xml, xml);
                val = dbLayer.ExecuteNonQuery(dbCmd);

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("InsertCompanyTariffServiceMapping").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);

            }
            return val;

        }


        public bool InsertTariffServiceDetailsXML(TARIFF_SERVICE _objModel)
        {
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dBase = dbLayer.DBaseFactory;
            DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_INSUPD_TARIFF_SERVICE_XML);
            bool val = false;
            try
            {
                StringBuilder xmlData = new StringBuilder();
                xmlData.Append("<root>");
                foreach (TARIFF_SERVICE _objTariff_service in _objModel.TARIFF_SERVICE_COLL)
                {
                    xmlData.Append("<TARIFF_SERVICE");
                    xmlData.Append(EzHms.ModelEntity.PropertyHandler.AddAttributes(_objTariff_service));
                    xmlData.Append(">");
                    xmlData.Append("</TARIFF_SERVICE>");
                }
                xmlData.Append("</root>");
                MemoryStream stream = new MemoryStream(System.Text.Encoding.UTF32.GetBytes(xmlData.ToString()));
                System.Data.SqlTypes.SqlXml xml = new System.Data.SqlTypes.SqlXml(stream);
                dBase.AddInParameter(dbCmd, "@XML", DbType.Xml, xml);
                dBase.AddOutParameter(dbCmd, "@OP_COUNT", DbType.Int32, 0);
                val = dbLayer.ExecuteNonQuery(dbCmd);


            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("InsertTariffServiceDetailsXML").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);

            }
            return val;





        }


        public CollectionBase Get_Service_types(string contextKey, string prefixText, int count)
        {
            DataAccessLayer dbLayer = new DataAccessLayer();
            DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_SERVICE_TYPE_AUTO);
            try
            {
                dbLayer.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARAM, DbType.String, contextKey);
                dbLayer.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARAM, DbType.String, prefixText);
                dbLayer.AddInParameter(dbCmd, DALConstants.COUNT_PARM, DbType.Int32, count);
                GenerateCollectionReader _SqlData = new GenerateCollectionReader(Get_service_type_COllection);
                CollectionBase _coll = dbLayer.ExecuteReaderCommand(dbCmd, _SqlData);
                return _coll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Service_types").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);

            }


            return null;

        }


        public CollectionBase Get_Service_types_new(string contextKey, string prefixText, int count)
        {
            DataAccessLayer dbLayer = new DataAccessLayer();
            DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_SERVICE_TYPE_AUTO);
            try
            {
                //string[] objarray = contextKey.Split(',');
                dbLayer.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARAM, DbType.String, contextKey);
                dbLayer.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARAM, DbType.String, prefixText);
                dbLayer.AddInParameter(dbCmd, DALConstants.COUNT_PARM, DbType.Int32, count);
                //if (objarray[1] != "")
                //{
                dbLayer.AddInParameter(dbCmd, "@IP_FLAG", DbType.String, "srvpck");
                //}
                GenerateCollectionReader _SqlData = new GenerateCollectionReader(Get_service_type_COllection);
                CollectionBase _coll = dbLayer.ExecuteReaderCommand(dbCmd, _SqlData);
                return _coll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod

("Get_Service_types").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);

            }


            return null;

        }

        public CollectionBase Get_service_type_COllection(IDataReader returnData)
        {
            ServiceMasterCollection _coll = new ServiceMasterCollection();
            servicemaster _objMaster = null;
            try
            {
                while (returnData.Read())
                {
                    _objMaster = new servicemaster();
                    _objMaster.SERVICE_TYPE_ID = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_TYPE_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.SERVICE_TYPE_ID_COL]) : 0;
                    _objMaster.SERVICE_TYPE_NAME = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_TYPE_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_TYPE_NAME_COL]) : string.Empty;
                    _coll.Add(_objMaster);
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_service_type_COllection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
            }
            return _coll;
        }

        public CollectionBase Get_Service_Groups_auto(string contextKey, string prefixText, int count)
        {

            DataAccessLayer dbLayer = new DataAccessLayer();
            DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, SPNames.UPR_GET_SERVICE_GROUP_AUTOCOMPLTE);
            try
            {
                dbLayer.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARAM, DbType.String, contextKey);
                dbLayer.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARAM, DbType.String, prefixText);
                dbLayer.AddInParameter(dbCmd, DALConstants.COUNT_PARM, DbType.Int32, count);
                GenerateCollectionReader _SqlData = new GenerateCollectionReader(Get_service_group_COllection);
                CollectionBase _coll = dbLayer.ExecuteReaderCommand(dbCmd, _SqlData);
                return _coll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_service_group_COllection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
            }
            return null;
        }

        public CollectionBase Get_Service_Groups_auto_new(string contextKey, string prefixText, int count)
        {

            DataAccessLayer dbLayer = new DataAccessLayer();
            DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure,

SPNames.UPR_GET_SERVICE_GROUP_AUTOCOMPLTE);
            try
            {
                //string[] objarray = contextKey.Split(',');
                dbLayer.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARAM, DbType.String, contextKey);
                dbLayer.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARAM, DbType.String, prefixText);
                dbLayer.AddInParameter(dbCmd, DALConstants.COUNT_PARM, DbType.Int32, count);
                //if (objarray[1] != "")
                //{
                dbLayer.AddInParameter(dbCmd, "@IP_FLAG", DbType.String, "srvpck");
                //}
                GenerateCollectionReader _SqlData = new GenerateCollectionReader(Get_service_group_COllection);
                CollectionBase _coll = dbLayer.ExecuteReaderCommand(dbCmd, _SqlData);
                return _coll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod

("Get_service_group_COllection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
            }
            return null;
        }



        public CollectionBase Get_service_group_COllection(IDataReader returnData)
        {
            ServiceMasterCollection _coll = new ServiceMasterCollection();
            servicemaster _objMaster = null;
            try
            {
                while (returnData.Read())
                {
                    _objMaster = new servicemaster();
                 //   _objMaster.SERVICE_GROUP_ID = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_GROUP_ID_COL]) : "0";
                    _objMaster.SERVICE_GROUP_NAME = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_GROUP_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_GROUP_NAME_COL]) : string.Empty;
                    _coll.Add(_objMaster);
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_service_type_COllection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
            }
            return _coll;
        }
        public CollectionBase Get_Consultation_deptsWithPrice_auto(string contextKey, string prefixText, int count)
        {

            DataAccessLayer dbLayer = new DataAccessLayer();
            DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_DEPT_PRICE");
            try
            {
                dbLayer.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARAM, DbType.String, contextKey);
                dbLayer.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARAM, DbType.String, prefixText);
                dbLayer.AddInParameter(dbCmd, DALConstants.COUNT_PARM, DbType.Int32, count);
                GenerateCollectionReader _SqlData = new GenerateCollectionReader(Get_Cons_DeptPrice_COllection);
                CollectionBase _coll = dbLayer.ExecuteReaderCommand(dbCmd, _SqlData);
                return _coll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Consultation_deptsWithPrice_auto").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
            }
            return null;
        }

        public CollectionBase Get_Cons_DeptPrice_COllection(IDataReader returnData)
        {
            ServiceMasterCollection _coll = new ServiceMasterCollection();
            ServiceMaster _objMaster = null;
            try
            {
                while (returnData.Read())
                {
                    _objMaster = new ServiceMaster();
                    _objMaster.SERVICE_GROUP_ID = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_GROUP_ID_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_GROUP_ID_COL]) : "0";
                    _objMaster.SERVICE_GROUP_NAME = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_GROUP_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_GROUP_NAME_COL]) : string.Empty;
                    _objMaster.PRICE = !DBNull.Value.Equals(returnData[DALConstants.PRICE_COL]) ? float.Parse(returnData[DALConstants.PRICE_COL].ToString()) : 0;
                    _coll.Add(_objMaster);
                }
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Cons_DeptPrice_COllection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
            }
            return _coll;
        }

        public CollectionBase getBillingHeads()
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, StoreProceduresNames.UPR_GETALL_BILLINGHEADS);
                GenerateCollectionReader sqldata = new GenerateCollectionReader(GetBillingHeadsCollection);
                CollectionBase cbase = dbLayer.ExecuteReaderCommand(dbCmd, sqldata);
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("getBillingHeads").Name;
                ErrorLoger.InsertErrorLogger(ex, 809, 1);
                return null;
            }
        }

        protected CollectionBase GetBillingHeadsCollection(IDataReader returndata)
        {
            try
            {
                ServiceMasterCollection objcoll = new ServiceMasterCollection();

                while (returndata.Read())
                {
                    servicemaster objSrv = new servicemaster();
                   // objSrv.BILLING_HEAD_ID = !DBNull.Value.Equals(returndata[DALConstants.BILLINGHEAD_ID_COL]) ? Convert.ToInt32(returndata[DALConstants.BILLINGHEAD_ID_COL]) : 0;
                  //  objSrv.BILLINGHEAD_DESC = !DBNull.Value.Equals(returndata[DALConstants.BILLINGHEAD_DESC_COL]) ? Convert.ToString(returndata[DALConstants.BILLINGHEAD_DESC_COL].ToString()) : string.Empty;
                  //  objSrv.BILLINGHEAD_NAME = !DBNull.Value.Equals(returndata[DALConstants.BILLINGHEAD_NAME_COL]) ? Convert.ToString(returndata[DALConstants.BILLINGHEAD_NAME_COL].ToString()) : string.Empty;


                    objcoll.Add(objSrv);
                }
                return objcoll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetBillingHeadsCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 809, 1);
                return null;
            }
        }


        public CollectionBase GetServiceLookUpByTypeId(LookUpSearch _lookUPSearch, out int _tot_records)
        {
            _tot_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = null;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SERVICES_BY_TYPE_ID");
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 8);
                if (!string.IsNullOrEmpty(_lookUPSearch.COLUMN_NAME))
                {
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.DALConstants.COLUMN_NAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, "@IP_PREFIXTEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetServicesByTypeId);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                _tot_records = Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM));
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPSearchData").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }


        public CollectionBase GetServicesByTypeId(IDataReader reader)
        {
            try
            {
                ServiceMasterCollection _bCollection = new ServiceMasterCollection();
                while (reader.Read())
                {
                    ServiceMasterModel _sModel = new ServiceMasterModel();
                    _sModel.SERVICE_CD = reader[DALConstants.SERVICE_CD_COL].ToString();
                    _sModel.SERVICE_ID = Convert.ToInt32(reader[DALConstants.SERVICE_ID_COL]);
                    _sModel.SERVICE_DESC = reader[DALConstants.SERVICE_DESC_COL].ToString();
                    _sModel.SERVICE_NAME = reader[DALConstants.SERVICE_NAME_COL].ToString();
                    _bCollection.Add(_sModel);
                }
                return _bCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetLookUPSearch").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        public CollectionBase GetServicePackageDet(int serviceID)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SERVICE_PKG_DET");
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARM, DbType.Int32, serviceID);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetServicePackageDetCollection);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicePackageDet").Name;
                ErrorLoger.InsertErrorLogger(ex, 1204, 1);
                return null;
            }
        }
        public CollectionBase GetServicePackageDet1(int serviceID, int tariff_id)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SERVICE_PKG_DET");
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARM, DbType.Int32, serviceID);
                dBase.AddInParameter(dbCmd, "@IP_TARIFF_ID", DbType.Int32, Convert.ToInt32(tariff_id));
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetServicePackageDetCollection);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicePackageDet").Name;
                ErrorLoger.InsertErrorLogger(ex, 1204, 1);
                return null;
            }
        }
        protected CollectionBase GetServicePackageDetCollection(IDataReader returnData)
        {
            try
            {
                ServiceMasterCollection serMasterCollection = new ServiceMasterCollection();
                ServiceMasterModel serMaster;

                while (returnData.Read())
                {
                    serMaster = new ServiceMasterModel();

                    serMaster.SERVICE_NAME = returnData[DALConstants.SERVICE_NAME_COL].ToString();
                    serMaster.SERVICE_TYPE_NAME = returnData[DALConstants.SERVICE_TYPE_NAME_COL].ToString();
                    serMaster.SERVICE_CD = returnData[DALConstants.SERVICE_CD_COL].ToString();
                    serMaster.SERVICE_GROUP_NAME = returnData[DALConstants.SERVICE_GROUP_NAME_COL].ToString();
                    serMaster.QUANTITY = returnData[DALConstants.QUANTITY_COL].ToString();
                    serMaster.AMOUNT = float.Parse(returnData[DALConstants.AMOUNT_COL].ToString());
                    serMaster.VACCUTAINER_NAME = !DBNull.Value.Equals(returnData["VACCUTAINER_NAME"]) ? Convert.ToString(returnData["VACCUTAINER_NAME"]) : string.Empty;
                    serMaster.SPECIMEN_NAME = !DBNull.Value.Equals(returnData["SPECIMEN_NAME"]) ? Convert.ToString(returnData["SPECIMEN_NAME"]) : string.Empty;
                    serMaster.IS_FOREIGN_SERVICE = !DBNull.Value.Equals(returnData["IS_FOREIGN_SERVICE"]) ? Convert.ToString(returnData["IS_FOREIGN_SERVICE"]) : string.Empty;
                    serMaster.EFFECT_FROM_DT = !DBNull.Value.Equals(returnData["EFFECT_FROM_DT"]) ? Convert.ToString(returnData["EFFECT_FROM_DT"]) : string.Empty;
                    serMaster.EFFECT_TO_DT = !DBNull.Value.Equals(returnData["EFFECT_TO_DT"]) ? Convert.ToString(returnData["EFFECT_TO_DT"]) : string.Empty;
                    serMaster.GENDER_ID = !DBNull.Value.Equals(returnData["GENDER_ID"]) ? Convert.ToString(returnData["GENDER_ID"]) : string.Empty;
                    serMaster.TO_AGE = !DBNull.Value.Equals(returnData["TO_AGE"]) ? Convert.ToInt32(returnData["TO_AGE"]) : 0;
                    serMaster.FROM_AGE = !DBNull.Value.Equals(returnData["FROM_AGE"]) ? Convert.ToInt32(returnData["FROM_AGE"]) : 0;
                    serMaster.GENERAL_SERVICE_ID = !DBNull.Value.Equals(returnData["GENERAL_SERVICE_ID"]) ? Convert.ToInt32(returnData["GENERAL_SERVICE_ID"]) : 0;
                    serMasterCollection.Add(serMaster);
                }
                return serMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicePackageDetCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1200, 1);
                return null;
            }
        }

        public CollectionBase GetServiceHistoryDet(int serviceID, int patientID)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_INVST_SRV_HISTORY");
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARM, DbType.Int32, serviceID);
                dBase.AddInParameter(dbCmd, DALConstants.PATIENT_ID_PARM, DbType.Int32, patientID);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetServiceHistoryDetCollection);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceHistoryDet").Name;
                ErrorLoger.InsertErrorLogger(ex, 1204, 1);
                return null;
            }
        }
        protected CollectionBase GetServiceHistoryDetCollection(IDataReader returnData)
        {
            try
            {
                ServiceMasterCollection serMasterCollection = new ServiceMasterCollection();
                ServiceMasterModel serMaster;

                while (returnData.Read())
                {
                    serMaster = new ServiceMasterModel();

                    serMaster.RESULT_DT = returnData[DALConstants.RESULT_DT_COL].ToString();
                    serMaster.COMPONENT_NAME = returnData[DALConstants.COMPONENT_NAME_COL].ToString();
                    serMaster.NORMAL_VALUE = returnData[DALConstants.NORMAL_VALUE_COL].ToString();
                    serMaster.RESULT_VALUE = returnData[DALConstants.RESULT_VALUE_COL].ToString();
                    serMasterCollection.Add(serMaster);
                }
                return serMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceHistoryDetCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1200, 1);
                return null;
            }
        }

        public CollectionBase GetServicePackageDetSampleReg(int serviceID)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SERVICE_CLINICAL_HISTORY");
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARM, DbType.Int32, serviceID);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetServicePackageDetCollectionSampleReg);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicePackageDetSampleReg").Name;
                ErrorLoger.InsertErrorLogger(ex, 1204, 1);
                return null;
            }
        }
        protected CollectionBase GetServicePackageDetCollectionSampleReg(IDataReader returnData)
        {
            try
            {
                ServiceMasterCollection serMasterCollection = new ServiceMasterCollection();
                ServiceMasterModel serMaster;

                while (returnData.Read())
                {
                    serMaster = new ServiceMasterModel();

                    serMaster.SERVICE_NAME = returnData[DALConstants.SERVICE_NAME_COL].ToString();
                    serMaster.SERVICE_ID = Convert.ToInt32(returnData[DALConstants.SERVICE_ID_COL].ToString());
                    serMaster.CLINICAL_HISTORY = returnData[DALConstants.CLINICAL_HISTORY_COL].ToString();
                    serMasterCollection.Add(serMaster);
                }
                return serMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicePackageDetCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1200, 1);
                return null;
            }
        }
        public CollectionBase CompanyWardGroup(int CompanyID)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_COMPANY_WARD_GROUPS");
                dBase.AddInParameter(dbCmd, DALConstants.COMPANY_ID_PARM, DbType.Int32, CompanyID);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetCompanyWardGroupCollectionSampleReg);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("CompanyWardGroup").Name;
                ErrorLoger.InsertErrorLogger(ex, 1204, 1);
                return null;
            }
        }

        protected CollectionBase GetCompanyWardGroupCollectionSampleReg(IDataReader returnData)
        {
            try
            {
                ServiceMasterCollection serMasterCollection = new ServiceMasterCollection();
                ServiceMasterModel serMaster;

                while (returnData.Read())
                {
                    serMaster = new ServiceMasterModel();

                    serMaster.WARD_GROUP_ID = Convert.ToInt32(returnData[DALConstants.WARD_GROUP_ID_COL].ToString());
                    serMaster.WARD_GROUP_NAME = (returnData[DALConstants.WARD_GROUP_NAME_COL].ToString());
                    serMasterCollection.Add(serMaster);
                }
                return serMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicePackageDetCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1200, 1);
                return null;
            }
        }

        public CollectionBase Get_Auto_Services_Ref(string prefixText, string contextKey, int locid)
        {

            DataAccessLayer dbLayer = new DataAccessLayer();
            DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_REF_SERVICES_AUTO");
            try
            {
                dbLayer.AddInParameter(dbCmd, DALConstants.PREFIXTEXT_PARM, DbType.String, prefixText);
                dbLayer.AddInParameter(dbCmd, DALConstants.IP_COLUMN_NAME_PARM, DbType.String, contextKey);
                dbLayer.AddInParameter(dbCmd, DALConstants.IP_LOC_ID_PARAM, DbType.Int32, locid);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateAutoServicesCollRef);
                CollectionBase _coll = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return _coll;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Auto_Services").Name;
                ErrorLoger.InsertErrorLogger(ex, 1202, 1);

            }

            return null;


        }

        public CollectionBase GenerateAutoServicesCollRef(IDataReader returnData)
        {
            ServiceCollection _objColl = new ServiceCollection();
            OSPListElement _objElement = null;
            try
            {
                while (returnData.Read())
                {

                    _objElement = new OSPListElement();
                    _objElement.Price = !DBNull.Value.Equals(returnData[DALConstants.PRICE_COL]) ? Convert.ToInt32(returnData[DALConstants.PRICE_COL]) : 0;
                    _objElement.SERVICE_ID = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_ID_COL]) ? Convert.ToInt32(returnData[DALConstants.SERVICE_ID_COL]) : 0;
                    _objElement.SERVICE_NAME = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _objElement.Text = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_NAME_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_NAME_COL]) : string.Empty;
                    _objElement.Value = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_ID_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_ID_COL]) : string.Empty;
                    _objElement.Service_cd = !DBNull.Value.Equals(returnData[DALConstants.SERVICE_CD_COL]) ? Convert.ToString(returnData[DALConstants.SERVICE_CD_COL]) : string.Empty;
                    _objColl.Add(_objElement);

                }


            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateAutoServicesColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 1202, 1);
            }
            return _objColl;
        }

        public CollectionBase Get_All_Services_GroupWise(ServiceMasterModel _service)
        {
            DataAccessLayer dbLayer = new DataAccessLayer();
            DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SERVICETYPE_GROUP_SERVICES");
            try
            {
                dbLayer.AddInParameter(dbCmd, DALConstants.TARIFF_ID_PARM, DbType.Int32, _service.TARIFF_ID);
                dbLayer.AddInParameter(dbCmd, DALConstants.SERVICE_TYPE_ID_PARM, DbType.Int32, _service.SERVICE_TYPE_ID);
                dbLayer.AddInParameter(dbCmd, DALConstants.SERVICE_GROUP_ID_PARM, DbType.Int32, _service.SERVICE_GROUP_ID);
                dbLayer.AddInParameter(dbCmd, DALConstants.DEPARTMENT_ID_PARM, DbType.Int32, _service.DEPARTMENT_ID);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GenerateGetAllServices);
                CollectionBase _coll = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return _coll;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_All_Services_GroupWise").Name;
                ErrorLoger.InsertErrorLogger(ex, 1202, 1);

            }

            return null;
        }
        public CollectionBase GenerateGetAllServices(IDataReader returnData)
        {

            try
            {
                ServiceMasterCollection serMasterCollection = new ServiceMasterCollection();
                ServiceMasterModel serMaster;

                while (returnData.Read())
                {
                    serMaster = new ServiceMasterModel();
                    serMaster.TARIFF_ID = !string.IsNullOrEmpty(returnData[DALConstants.TARIFF_ID_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.TARIFF_ID_COL].ToString()) : 0;
                    serMaster.SERVICE_ID = !string.IsNullOrEmpty(returnData[DALConstants.SERVICE_ID_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.SERVICE_ID_COL].ToString()) : 0;
                    serMaster.SERVICE_CD = !string.IsNullOrEmpty(returnData[DALConstants.SERVICE_CD_COL].ToString()) ? returnData[DALConstants.SERVICE_CD_COL].ToString() : "";

                    serMaster.SERVICE_NAME = !string.IsNullOrEmpty(returnData[DALConstants.SERVICE_NAME_COL].ToString()) ? returnData[DALConstants.SERVICE_NAME_COL].ToString() : "";
                    serMaster.SERVICE_GROUP_ID = !string.IsNullOrEmpty(returnData[DALConstants.SERVICE_GROUP_ID_COL].ToString()) ? returnData[DALConstants.SERVICE_GROUP_ID_COL].ToString() : "";
                    serMaster.SERVICE_GROUP_NAME = !string.IsNullOrEmpty(returnData[DALConstants.SERVICE_GROUP_NAME_COL].ToString()) ? returnData[DALConstants.SERVICE_GROUP_NAME_COL].ToString() : "";
                    serMaster.SERVICE_TYPE_ID = !string.IsNullOrEmpty(returnData[DALConstants.SERVICE_TYPE_ID_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.SERVICE_TYPE_ID_COL].ToString()) : 0;
                    serMaster.SERVICE_TYPE_NAME = !string.IsNullOrEmpty(returnData[DALConstants.SERVICE_TYPE_NAME_COL].ToString()) ? returnData[DALConstants.SERVICE_TYPE_NAME_COL].ToString() : "";
                    serMaster.DEPARTMENT_ID = !string.IsNullOrEmpty(returnData[DALConstants.DEPARTMENT_ID_COL].ToString()) ? Convert.ToInt32(returnData[DALConstants.DEPARTMENT_ID_COL].ToString()) : 0;
                    serMaster.PRICE = !string.IsNullOrEmpty(returnData[DALConstants.PRICE_COL].ToString()) ? float.Parse(returnData[DALConstants.PRICE_COL].ToString()) : 0;

                    serMasterCollection.Add(serMaster);
                }
                return serMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GenerateGetAllServices").Name;
                ErrorLoger.InsertErrorLogger(ex, 1200, 1);
                return null;
            }

        }

        public CollectionBase HistoryTypeChange(int serviceID)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SERVICE_HISTORY_TYPE");
                dBase.AddInParameter(dbCmd, DALConstants.SERVICE_ID_PARM, DbType.Int32, serviceID);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetHistoryTypeCollectionSampleReg);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicePackageDetSampleReg").Name;
                ErrorLoger.InsertErrorLogger(ex, 1204, 1);
                return null;
            }
        }
        protected CollectionBase GetHistoryTypeCollectionSampleReg(IDataReader returnData)
        {
            try
            {
                ServiceMasterCollection serMasterCollection = new ServiceMasterCollection();
                ServiceMasterModel serMaster;

                while (returnData.Read())
                {
                    serMaster = new ServiceMasterModel();

                    serMaster.SERVICE_NAME = returnData[DALConstants.SERVICE_NAME_COL].ToString();
                    serMaster.SERVICE_ID = Convert.ToInt32(returnData[DALConstants.SERVICE_ID_COL].ToString());
                    serMaster.HISTORY_TYPE = returnData[DALConstants.HISTORY_TYPE_COL].ToString();
                    serMasterCollection.Add(serMaster);
                }
                return serMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicePackageDetCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1200, 1);
                return null;
            }
        }



        public CollectionBase Question_Template(QuestionTemplate Question)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_FB_QUESTION");
                dBase.AddInParameter(dbCmd, "@IP_TEMPLATE_ID", DbType.String, Question.QUESTION_ID);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetQuestion_Template);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("PR_GET_FB_QUESTION").Name;
                ErrorLoger.InsertErrorLogger(ex, 1204, 1);
                return null;
            }
        }
        protected CollectionBase GetQuestion_Template(IDataReader returnData)
        {
            try
            {
                QuestionTemplateCollection QusestionMasterCollection = new QuestionTemplateCollection();
                QuestionTemplate QusestionMaster;
                while (returnData.Read())
                {
                    QusestionMaster = new QuestionTemplate();
                    QusestionMaster.QUESTION_ID = returnData["QUESTION_ID"].ToString();
                    QusestionMaster.CONTROL_VAL_ID = returnData["CONTROL_VAL_ID"].ToString();
                    QusestionMaster.QUESTION_NAME = returnData["QUESTION_NAME"].ToString();
                    QusestionMaster.CONTROL_ID = returnData["CONTROL_ID"].ToString();
                    QusestionMaster.CONTROL_VAL_SET_ID = returnData["CONTROL_VAL_SET_ID"].ToString();
                    QusestionMaster.CONTROL_NAME = returnData["CONTROL_NAME"].ToString();
                    QusestionMaster.CONTROL_VAL_NAME = returnData["CONTROL_VAL_NAME"].ToString();
                    QusestionMaster.CONTROL_VAL_SET_NAME = returnData["CONTROL_VAL_SET_NAME"].ToString();
                    QusestionMaster.SERVICE_ID = returnData["SERVICE_ID"].ToString();
                    QusestionMasterCollection.Add(QusestionMaster);
                }
                return QusestionMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicePackageDetCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1200, 1);
                return null;
            }
        }
        public CollectionBase getsubpackagetype(int id)
        {
            DataAccessLayer dbLayer = new DataAccessLayer();
            Database dBase = dbLayer.DBaseFactory;
            Database dBase1 = dbLayer.DBaseFactory;

            try
            {
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_SERVICE_SUBTYPE_HIS_LAB");
                dBase.AddInParameter(dbCmd, "@IP_SERVICE_SUBTYPE_ID", DbType.Int32, id);

                GenerateCollectionReader sqlData = new GenerateCollectionReader(getsubpackagetypecollection);
                CollectionBase cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("getsubpackagetype").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }

        }
        protected CollectionBase getsubpackagetypecollection(IDataReader returnData)
        {
            try
            {
                ServiceMasterCollection coll = new ServiceMasterCollection();
                servicemaster obj;
                while (returnData.Read())
                {
                    obj = new servicemaster();
                    //obj.SUB_PKD_ID = returnData["SERVICE_SUBTYPE_ID"].ToString();
                    //obj.SUB_PKG_NAME = returnData["SERVICE_SUBTYPE_NAME"].ToString();

                    coll.Add(obj);

                }
                return coll;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetRegionalLabcoll").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }

        #region Added by Swetha Reddy About Luxary tax lookup

        public CollectionBase Getall_Luxary_Tax(LookUpSearch _lookUPSearch, out int _tot_records)
        {
            _tot_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = null;
                dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "dbo.PR_GET_ADT_TAX_PAGING");
                dBase.AddInParameter(dbCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, _lookUPSearch.ADVANCESEARCH);
                dBase.AddInParameter(dbCmd, DALConstants.COLUMN_NAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                dBase.AddInParameter(dbCmd, "@IP_PREFIXTEXT", DbType.String, _lookUPSearch.PREFIX_TEXT);
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                dBase.AddOutParameter(dbCmd, DALConstants.OUTPUT_PARM, DbType.Int32, 0);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(Getall_Luxary_Tax_Coll);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                _tot_records = !DBNull.Value.Equals(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM)) ? Convert.ToInt32(dBase.GetParameterValue(dbCmd, DALConstants.OUTPUT_PARM)) : 0;
                return _cBase;

            }
            catch (Exception ex)
            {
                throw new ArgumentException(ex.Message);
            }
        }

        public CollectionBase Getall_Luxary_Tax_Coll(IDataReader reader)
        {
            try
            {
                ST_TAX_FLDCOLLECTION _bCollection = new ST_TAX_FLDCOLLECTION();
                while (reader.Read())
                {
                    ST_TAX_FLD _sModel = new ST_TAX_FLD();
                    _sModel.TAX_ID = !DBNull.Value.Equals(reader["TAX_ID"]) ? Convert.ToInt32(reader["TAX_ID"].ToString()) : 0;
                    _sModel.TAX_CD = !DBNull.Value.Equals(reader["TAX_CD"]) ? reader["TAX_CD"].ToString() : string.Empty;
                    _sModel.TAX_NAME = !DBNull.Value.Equals(reader["TAX_NAME"]) ? reader["TAX_NAME"].ToString() : string.Empty;
                    _sModel.RECORD_STATUS = !DBNull.Value.Equals(reader["RECORD_STATUS"]) ? reader["RECORD_STATUS"].ToString() : string.Empty;
                    _sModel.TAX_PCT = !DBNull.Value.Equals(reader["TAX_PCT"]) ? reader["TAX_PCT"].ToString() : string.Empty;
                    _bCollection.Add(_sModel);
                }
                return _bCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Getall_Luxary_Tax_Coll").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }

        #endregion

        public CollectionBase Get_Tariff_Mapped_services(GridPaging _gridPaging, out int _tot_records)
        {
            _tot_records = 0;
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_TARIFF_SERVICE_T");
                dBase.AddInParameter(dbCmd, DALConstants.CURRENT_PAGE_PARM, DbType.Int32, _gridPaging.CURRENT_PAGE);
                dBase.AddInParameter(dbCmd, DALConstants.PAGE_SIZE_PARM, DbType.Int32, _gridPaging.PAGE_SIZE);
                dBase.AddInParameter(dbCmd, DALConstants.ADVANCE_SEARCH_PARM, DbType.String, _gridPaging.ADVANCESEARCH);
                dBase.AddInParameter(dbCmd, DALConstants.FROM_DT_PARAM, DbType.String, _gridPaging.FROM_DT);
                dBase.AddInParameter(dbCmd, DALConstants.TO_DT_PARAM, DbType.String, _gridPaging.TO_DT);
                dBase.AddInParameter(dbCmd, "@IP_COUNT", DbType.Int32, _gridPaging.EVENTFLAG);
                if (!string.IsNullOrEmpty(_gridPaging.COLUMN_NAME))
                {
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.COLUMN_NAME_PARM, DbType.String, _gridPaging.COLUMN_NAME);
                    dBase.AddInParameter(dbCmd, EzHms.ModelEntity.GenericPopUpConstants.PREFIX_TEXT_PARM, DbType.String, _gridPaging.PREFIX_TEXT);
                }
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetTariffMappedServicesColl);
                CollectionBase _cBase = dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
                return _cBase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("Get_Tariff_Mapped_services").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }

        CollectionBase GetTariffMappedServicesColl(IDataReader reader)
        {
            //ServiceMappingCollection _bCollection = new ServiceMappingCollection();
            try
            {
                ServiceMasterCollection _bCollection = new ServiceMasterCollection();
                while (reader.Read())
                {
                    TARIFF_SERVICE _sModel = new TARIFF_SERVICE();

                    _sModel.SERVICE_CD = !DBNull.Value.Equals(reader["SERVICE_CD"]) ? Convert.ToString(reader["SERVICE_CD"]) : string.Empty;
                    _sModel.SERVICE_NAME = !DBNull.Value.Equals(reader["SERVICE_NAME"]) ? Convert.ToString(reader["SERVICE_NAME"]) : string.Empty;
                    _sModel.SERVICE_DESC = !DBNull.Value.Equals(reader["SERVICE_DESC"]) ? Convert.ToString(reader["SERVICE_DESC"]) : string.Empty;
                    _sModel.SERVICE_ID = !DBNull.Value.Equals(reader["SERVICE_ID"]) ? Convert.ToInt32(reader["SERVICE_ID"]) : 0;
                   // _sModel.SERVICE_GROUP_ID = !DBNull.Value.Equals(reader["SERVICE_GROUP_ID"]) ? Convert.ToString(reader["SERVICE_GROUP_ID"]) : string.Empty;
                    _sModel.SERVICE_GROUP_NAME = !DBNull.Value.Equals(reader["SERVICE_GROUP_NAME"]) ? Convert.ToString(reader["SERVICE_GROUP_NAME"]) : string.Empty;
                    _sModel.SERVICE_TYPE_ID = !DBNull.Value.Equals(reader["SERVICE_TYPE_ID"]) ? Convert.ToInt32(reader["SERVICE_TYPE_ID"]) : 0;
                    _sModel.SERVICE_TYPE_NAME = !DBNull.Value.Equals(reader["SERVICE_TYPE_NAME"]) ? Convert.ToString(reader["SERVICE_TYPE_NAME"]) : string.Empty;
                    _sModel.GENERAL_SERVICE_ID = !DBNull.Value.Equals(reader["GENERAL_SERVICE_ID"]) ? Convert.ToInt32(reader["GENERAL_SERVICE_ID"]) : 0;
                    _sModel.GENERAL_SERVICE_NAME = !DBNull.Value.Equals(reader["GENERAL_SERVICE_NAME"]) ? Convert.ToString(reader["GENERAL_SERVICE_NAME"]) : string.Empty;
                    _sModel.EFFECT_FROM_DT = !DBNull.Value.Equals(reader["EFFECT_FROM_DT"]) ? Convert.ToString(reader["EFFECT_FROM_DT"]) : string.Empty;
                    _sModel.EFFECT_TO_DT = !DBNull.Value.Equals(reader["EFFECT_TO_DT"]) ? Convert.ToString(reader["EFFECT_TO_DT"]) : string.Empty;
                   // _sModel.TARIFF_NAME = !DBNull.Value.Equals(reader["TARIFF_NAME"]) ? Convert.ToString(reader["TARIFF_NAME"]) : string.Empty;
                    _sModel.RECORD_STATUS = !DBNull.Value.Equals(reader["RECORD_STATUS"]) ? Convert.ToString(reader["RECORD_STATUS"]) : string.Empty;
                   // _sModel.CREATE_BY = !DBNull.Value.Equals(reader["CREATE_BY"]) ? Convert.ToString(reader["CREATE_BY"]) : string.Empty;
                   // _sModel.CREATE_DT = !DBNull.Value.Equals(reader["CREATE_DT"]) ? Convert.ToString(reader["CREATE_DT"]) : string.Empty;
                   // _sModel.MODIFY_BY = !DBNull.Value.Equals(reader["MODIFY_BY"]) ? Convert.ToString(reader["MODIFY_BY"]) : string.Empty;
                    //_sModel.MODIFY_DT = !DBNull.Value.Equals(reader["MODIFY_DT"]) ? Convert.ToString(reader["MODIFY_DT"]) : string.Empty;
                   // _sModel.TOT_RECORD_CNT = !DBNull.Value.Equals(reader["TOT_RECORD_CNT"]) ? Convert.ToString(reader["TOT_RECORD_CNT"]) : string.Empty;

                    _bCollection.Add(_sModel);
                }
                return _bCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetTariffServices").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }

        public CollectionBase GetMappedGenSrvs(int service_id)
        {
            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dbase = dblayer.DBaseFactory;
                DbCommand cmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_TARIFF_SERVICE_T");
                dbase.AddInParameter(cmd, "@IP_SERVICE_ID", DbType.Int32, service_id);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetMappedGenSrvsColl);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(cmd, sqlData);
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetMappedGenSrvs").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }

        protected CollectionBase GetMappedGenSrvsColl(IDataReader reader)
        {
            ServiceMasterCollection _bCollection = new ServiceMasterCollection();
            try
            {
                while (reader.Read())
                {
                    TARIFF_SERVICE _sModel = new TARIFF_SERVICE();
                    _sModel.GENERAL_SERVICE_NAME = !DBNull.Value.Equals(reader["GENERAL_SERVICE_NAME"]) ? Convert.ToString(reader["GENERAL_SERVICE_NAME"]) : string.Empty;
                   // if (!string.IsNullOrEmpty(reader[DALConstants.PRICE_COL].ToString()))
                        //_sModel.PRICE = float.Parse(reader[DALConstants.PRICE_COL].ToString());
                    _bCollection.Add(_sModel);
                }
                return _bCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetMappedGenSrvsColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }


        public CollectionBase GetServiceTariffExists(int tariff_id, int serviceid)
        {
            try
            {
                DataAccessLayer dblayer = new DataAccessLayer();
                Database dbase = dblayer.DBaseFactory;
                DbCommand cmd = dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_TARIFF_SERVICE_CORP");
                dbase.AddInParameter(cmd, "@IP_SERVICE_ID", DbType.Int32, serviceid);
                dbase.AddInParameter(cmd, "@IP_TARIFF_ID", DbType.Int32, tariff_id);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetServiceTariffExistsColl);
                CollectionBase cbase = dblayer.ExecuteReaderCommand(cmd, sqlData);
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServiceTariffExists").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }

        protected CollectionBase GetServiceTariffExistsColl(IDataReader reader)
        {
            ServiceMasterCollection _bCollection = new ServiceMasterCollection();
            try
            {
                while (reader.Read())
                {
                    TARIFF_SERVICE _sModel = new TARIFF_SERVICE();
                   // _sModel.STATUS = !DBNull.Value.Equals(reader["STATUS"]) ? Convert.ToString(reader["STATUS"]) : string.Empty;
                    _bCollection.Add(_sModel);
                }
                return _bCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetMappedGenSrvsColl").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
        public CollectionBase GetDcotorOrgPct(int serviceID, int doctor_id, int srv_price_id)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase1 = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GET_DOCTOR_ORG_PCT");
                dBase1.AddInParameter(dbCmd, "@IP_SERVICE_ID", DbType.Int32, serviceID);
                dBase1.AddInParameter(dbCmd, "@IP_DOCTOR_ID", DbType.Int32, doctor_id);
                dBase1.AddInParameter(dbCmd, "@IP_SERVICE_PRICE_ID", DbType.Int32, srv_price_id);
                GenerateCollectionReader sqlData = new GenerateCollectionReader(GetDcotorOrgPctCollection);
                return dbLayer.ExecuteReaderCommand(dbCmd, sqlData);
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetDcotorOrgPct").Name;
                ErrorLoger.InsertErrorLogger(ex, 1204, 1);
                return null;
            }
        }
        public CollectionBase GetDcotorOrgPctCollection(IDataReader returnData)
        {
            try
            {
                ServiceMasterCollection serMasterCollection = new ServiceMasterCollection();
                ServiceMasterModel serMaster;
                while (returnData.Read())
                {
                    serMaster = new ServiceMasterModel();
                    serMaster.DOCTOR_PCT = !DBNull.Value.Equals(returnData["DOCTOR_PCT"]) ? float.Parse(returnData["DOCTOR_PCT"].ToString()) : 0;
                    serMaster.ORG_PCT = !DBNull.Value.Equals(returnData["ORG_PCT"]) ? float.Parse(returnData["ORG_PCT"].ToString()) : 0;
                    serMasterCollection.Add(serMaster);
                }
                return serMasterCollection;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetDcotorOrgPctCollection").Name;
                ErrorLoger.InsertErrorLogger(ex, 1209, 1);
                return null;
            }
        }

        public DataSet GetServicesByLocation(LookUpSearch _lookUPSearch, out int _total_records)
        {
            _total_records = 0;
            try
            {
                DataAccessLayer _dblayer = new DataAccessLayer();
                Database dbSvc = _dblayer.DBaseFactory;
                DbCommand cmd = _dblayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_SERVICES_BYLOC");
                dbSvc.AddInParameter(cmd, DALConstants.PageNum, DbType.Int32, _lookUPSearch.CURRENT_PAGE);
                dbSvc.AddInParameter(cmd, DALConstants.PageSize, DbType.Int32, _lookUPSearch.PAGE_SIZE);
                dbSvc.AddInParameter(cmd, GenericPopUpConstants.COLUMN_NAME_PARM, DbType.String, _lookUPSearch.COLUMN_NAME);
                dbSvc.AddInParameter(cmd, GenericPopUpConstants.PREFIX_TEXT_PARM, DbType.String, _lookUPSearch.PREFIX_TEXT);
                if (_lookUPSearch.PreConditon.Count > 0)
                    dbSvc.AddInParameter(cmd, "@IP_TARIFF_ID", DbType.Int32, Convert.ToInt32(_lookUPSearch.PreConditon[0]));
                if (!string.IsNullOrEmpty(_lookUPSearch.ADVANCESEARCH))
                    dbSvc.AddInParameter(cmd, "@IP_ADVANCE_SEARCH", DbType.String, _lookUPSearch.ADVANCESEARCH);
                dbSvc.AddInParameter(cmd, "@IP_COUNT", DbType.Int32, _lookUPSearch.EVENTFLAG);
                dbSvc.AddInParameter(cmd, "@IP_LOC_ID", DbType.Int32, _lookUPSearch.LOCATION_ID);
                dbSvc.AddInParameter(cmd, "@IP_SESSION_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]));
                DataSet _cBase = dbSvc.ExecuteDataSet(cmd);
                return _cBase;

            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("GetServicesByLocation").Name;
                ErrorLoger.InsertErrorLogger(ex, 201, 1);
                return null;
            }
        }

        public DataSet GetBillS(string Fromdt, string Todt, string colname, string prefixtxt)
        {
            try
            {
                DataAccessLayer dbLayer = new DataAccessLayer();
                Database dBase = dbLayer.DBaseFactory;
                DbCommand dbCmd = dbLayer.SetCommandType(CommandType.StoredProcedure, "PR_GETALL_BILLS_AUTO_BY_DATES");
                dBase.AddInParameter(dbCmd, "@IP_FROM_DT", DbType.DateTime, Fromdt);
                dBase.AddInParameter(dbCmd, "@IP_TO_DT", DbType.DateTime, Todt);
                dBase.AddInParameter(dbCmd, "@IP_COLUMN_NAME", DbType.String, colname);
                dBase.AddInParameter(dbCmd, "@IP_PREFIXTEXT", DbType.String, prefixtxt);
                dBase.AddInParameter(dbCmd, "@IP_SESSION_ID", DbType.Int32, Convert.ToInt32(System.Web.HttpContext.Current.Session["DBSessionID"]));
                DataSet cbase = dbLayer.ExecuteDataSet(dbCmd);
                return cbase;
            }
            catch (Exception ex)
            {
                ex.Source = "CLASS AND METHOD NAME Are " + this.GetType().Name + " & " + this.GetType().GetMethod("BindDoctorPaymentMonths").Name;
                ErrorLoger.InsertErrorLogger(ex, 100, 1);
                return null;
            }
        }
    }
}
