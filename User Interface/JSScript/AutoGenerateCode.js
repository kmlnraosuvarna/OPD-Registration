function GetNewBillNumber(obj,CodeLength)
{
    var BillNo=document.getElementById(obj);
    if(BillNo!=null)
    {
        var str='';
        var Bill=BillNo.value; 
        var Length=Bill.length;  
        var Text=Bill.substring(0,CodeLength);
        var Number=Bill.substring(CodeLength,Length);
        var Num= + Number ;
        var NewLength=Text.concat(Num + 1);
        if(NewLength.length==Length)
            document.getElementById(obj).value= Text.concat(Num + 1);
        else
        {
            if(Length>NewLength.length)
            {
                var count=Length-NewLength.length;
                for(var i=0; i<count; i++)
                {
                    str=str.concat(0);
                }
                document.getElementById(obj).value= Text.concat(str, Num + 1);
            }
        }
    }
}
function DropDownSearch(obj)
    {
        if(document.getElementById('ctl00_ContentPlaceHolder1_ddlSearchCriteria')!=null)
        {
                if(document.getElementById('ctl00_ContentPlaceHolder1_ddlSearchCriteria').selectedIndex==obj)
                {
                    document.getElementById('ctl00_ContentPlaceHolder1_txtSearchCriteria').autocomplete='off';                    
                }
                else
                {
                    document.getElementById('ctl00_ContentPlaceHolder1_txtSearchCriteria').autocomplete='on';
                }
        }
        return false;      
    }
function CompareDates(FromDate,ToDate) 
{ 
    var str1 = document.getElementById(FromDate).value;
    var str2 = document.getElementById(ToDate).value;
    var dt1  = parseInt(str1.substring(0,2),10); 
    var mon1 = parseInt(str1.substring(3,5),10);
    var yr1  = parseInt(str1.substring(6,10),10); 
    var dt2  = parseInt(str2.substring(0,2),10); 
    var mon2 = parseInt(str2.substring(3,5),10); 
    var yr2  = parseInt(str2.substring(6,10),10); 
    var date1 = new Date(yr1, mon1, dt1); 
    var date2 = new Date(yr2, mon2, dt2); 
    if(date2 < date1)
    {
        alert("To date cannot be greater than from date");
        return false; 
    } 
    else 
    { 
       alert("Submitting ...");
       document.form1.submit(); 
    } 
} 
function CheckIsPreviousDate(Date1)
{
    var id=Date1;
    if(document.getElementById(id).value!='')
    {
        var d = new Date();
        var Today = d.getDate(); 
        var d2=new Date(document.getElementById(Date1.id).value);
        var EnteredDate=d2.getDate();
        if(EnteredDate < Today)
        {
            alert('Not a valid Date');
            return false;
        }
    } 
}
function CheckIsNextDate(Date1)
{
    if(document.getElementById(Date1.id).value!='')
    {
        var d = new Date();
        var Today = d.getDate(); 
        var d2=new Date(document.getElementById(Date1.id).value);
        var EnteredDate=d2.getDate();
        if(EnteredDate > Today)
        {
            alert('Not a valid Date');
            return false;
        }
    } 
}