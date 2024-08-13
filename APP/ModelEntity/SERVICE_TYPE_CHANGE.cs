using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    [Serializable]
   public class SERVICE_TYPE_CHANGE
    {
   private  string  _SRV_TYPE_CHNG_ID;          
   private  string  _SRV_TYPE_CHNG_REV_NO;
   private  string  _S_TYPE_CHANGE_CD ;          
   private  string  _ORGANIZATION_ID ;           
   private  string  _SERVICE_GROUP_ID;        
   private  string  _SERVICE_TYPE;             
   private  string   _IS_ACTIVE ;             
   private  string  _CREATE_BY ;              
   private  string  _CREATE_DT ;             
   private  string  _MODIFY_BY ;          
   private  string  _MODIFY_DT ;         
   private  string  _RECORD_STATUS ;
   private string  _SESSION_ID;


            public string  SRV_TYPE_CHNG_ID
            {
            set { _SRV_TYPE_CHNG_ID = value; }
            get { return _SRV_TYPE_CHNG_ID; }
            }

            public string SRV_TYPE_CHNG_REV_NO
            {
            set { _SRV_TYPE_CHNG_REV_NO = value; }
            get { return _SRV_TYPE_CHNG_REV_NO; }
            }
            public string S_TYPE_CHANGE_CD
            {
            set { _S_TYPE_CHANGE_CD = value; }
            get { return _S_TYPE_CHANGE_CD; }
            }
            public string ORGANIZATION_ID
            {
            set { _ORGANIZATION_ID = value; }
            get { return _ORGANIZATION_ID; }
            }
            public string SERVICE_GROUP_ID
            {
            get { return _SERVICE_GROUP_ID; }
            set { _SERVICE_GROUP_ID = value; }
            }
            public string SERVICE_TYPE
            {
            set { _SERVICE_TYPE = value; }
            get { return _SERVICE_TYPE; }
            }

            public string IS_ACTIVE
            {
            set { _IS_ACTIVE = value; }
            get { return _IS_ACTIVE; }
            }
            public string CREATE_BY
            {
            set { _CREATE_BY = value; }
            get { return _CREATE_BY; }
            }
            public string MODIFY_BY
            {
            set { _MODIFY_BY = value; }
            get { return _MODIFY_BY; }
            }

            public string CREATE_DT
            {
            get { return _CREATE_DT; }
            set { _CREATE_DT = value; }
            }
            public string MODIFY_DT
            {
            set { _MODIFY_DT = value; }
            get { return _MODIFY_DT; }
            }
            public string RECORD_STATUS
            {
            set { _RECORD_STATUS = value; }
            get { return _RECORD_STATUS; }
            }

            public string SESSION_ID
            {
            get { return _SESSION_ID; }
            set { _SESSION_ID = value; }
            }

        

    }
}
