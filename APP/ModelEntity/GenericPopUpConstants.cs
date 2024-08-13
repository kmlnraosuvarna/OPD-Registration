using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EzHms.ModelEntity
{
    public class GenericPopUpConstants
    {
        /* re declaring the parameter constants here..
        Reason: DALConstatns constatns is not hainvg the proper format */
        public const string COLUMN_NAME_PARM = "IP_COLUMN_NAME";
        public const string PREFIX_TEXT_PARM = "IP_PREFIX_TEXT";
        public const string IP_PREFIXTEXT_PARAM = "IP_PREFIXTEXT";
        public const string PREFIXTEXT_PARM="IP_PREFIXTEXT";
        public const string COLUMNNAME_PARM = "IP_COLUMN_NAME";
        public const string ADVANCE_SEARCH_PARM = "IP_ADVANCE_SEARCH";
        //Referal source
        public static string[,] REFERAL_SOURCE_COLUMN_CONSTATNS = new string[,] { { "DESC", "DESC" }, { "CODE", "CODE" } };
        public const string REFERAL_SOURCE_PKEY = "ID";
        //UMR no
        public static string[,] UMR_NO_COLUMN_CONSTANTS = new string[,] { { "UmrNo", "UmrNo" }, { "NAME", "DISPLAY_NAME" }, { "REGISTRATION DATE", "REGISTRATION_DT" } };
        public const string UMR_NO_PKEY = "PATIENT_ID";
        //Referal Doctors
        public static string[,] REFERAL_DOCTOR_COLUMN_CONSTATNS = new string[,] { { "NAME", "DISPLAY_NAME" }, { "DRPARTMENT", "DRPARTMENT_DESC" }, { "DOCTOR_CD", "DOCTOR_CD" } };
        public const string REFERAL_DOCTOR_PKEY = "ID";
        //State,City,Country
        public static string[,] EMERGENCY_CONTACTS = new string[,] { { "Area", "AREANAME" }, { "City", "CITYNAME" }, { "State", "STATENAME" }, { "Country", "COUNTRYNAME" } };
        public const string EMERGENCY_PKEY = "AREA_ID,CITY_ID,STATE_ID,COUNTRY_ID";
        //Employee Information
        public static string[,] EMPLOYEE_INFO = new string[,] {{"Name","EmpFirstName"},{"Code","EmpCode"} };
        public const string EMPLOYEE_PKEY = "EmpCode";
        //Address Type
        public static string[,] ADDRESSTYPE_CONSTANT = new string[,] { { "Description", "DESC" }, { "Code", "CODE" } };
        public const string ADDRESSTYPE_PKEY = "ID";
        //Nationality
        public static string[,] NATIONALITY = new string[,] { { "Description", "DESC" }, { "Code", "CODE" } };
        public const string NATIONALITY_PKEY = "ID";
        //Bank Details
        public static string[,] BANK_DETAILS = new string[,] { { "Name", "BANK_NAME" }, { "Location", "LOCATION" }, { "Bank Code", "BANK_CODE" } };
        public const string BANK_PKEY = "BANK_ID";
        //Designation Details
        public static string[,] DESIGNATION_DETAILS = new string[,] { { "Designation", "DESIGATION_DESC" }, { "Code", "DESIGNATION_CD" } };
        public const string DESIGNATON_PKEY = "DESG_ID";
        //Department Details
        public static string[,] DEPT_DETAILS = new string[,] { { "Department", "Deptname" }, { "Code", "Deptcd" } };
        public const string DEPT_PKEY = "Dept_VerID";
        //Specialization Details
        public static string[,] SPECIALIT_DETAILS = new string[,] { { "Specialization", "Specialization_Desc" }, { "Code", "Specialization_CD" } };
        public const string SPECIALITY_PKEY = "Specialver_ID";

        //Allergy Details
        public static string[,] ALLERGY_DETAILS = new string[,] { { "Description", "DESC" }, { "Code", "CODE" } };
        public const string ALLERGY_PKEY = "ID";
    }
}
