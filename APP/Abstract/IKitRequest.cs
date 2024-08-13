using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EzHms.ModelEntity;
using EzHms.DataAccessObject;
using EzHms.BusinessObject;
using System.Collections;
using System.Data;
namespace EzHms.Abstract
{
    public interface IKitRequest
    {
        int SaveKitRequestDetails(KitRequest objmrq, out int op_count,out string op_out_cd);
        int SaveLoanKitRequestDetails(KitRequest objmrq, out int op_count, out string op_out_cd);
        CollectionBase GetKitRequestEdit(string mrq_cncl_id, GridPaging gPage, int session_id);
        CollectionBase GetLoanKitRequestEdit(string mrq_cncl_id, GridPaging gPage, int session_id);
        CollectionBase KitRequestItem(KitRequest gp);
        CollectionBase GetAllKitRequestDetails(EzHms.ModelEntity.GridPaging _objpag, out int _total_records);
        CollectionBase EMSRequestItem(KitRequest gp);
        CollectionBase EMSLoanRequestItem(KitRequest gp);
        CollectionBase GetComplaints_Status(EzHms.ModelEntity.KitRequest _objnew);
        CollectionBase GetComplaintsStatus_main(EzHms.ModelEntity.KitRequest _objnew);
        bool SaveComplaintStatus(EzHms.ModelEntity.KitRequest objds, string xmlstr, out int count);
        CollectionBase GetAllDepartmentDashBoard(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records);
        CollectionBase GetAllRequestDashBoard(EzHms.ModelEntity.LookUpSearch _lookUPSearch, out int _total_records);
        CollectionBase GetRequest_Details(EzHms.ModelEntity.KitRequest _objnew);
        DataSet Get_AllComplaints_Request(EzHms.ModelEntity.KitRequest objnew);
        CollectionBase GetAllFumigationCleanAllotment(EzHms.ModelEntity.GridPaging _objpag, out int _total_records);
    }
}
