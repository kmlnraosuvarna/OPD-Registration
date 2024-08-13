

function chkCapital()
{
          var pjNo = document.getElementById("txtFirstName").value,
              pattern = /^(A|B|C|D|E|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z)\d{25,}$/i;
          if(!pattern.test(pjNo)) 
          {
              alert("FirstName must begin with Capital numbers");
              document.getElementById("txtFirstName").focus();
              return false;
          }
 }
 
 
//allowing first letter as capital

function Trim(strIn)
 {
         strOut = strIn;
         strOut = strOut.replace(/^ */g, "");
         strOut = strOut.replace(/ *$/g, "");
         return strOut;

 }
function TitleCase(oField) 
{
   var myValue = document.getElementById('ctl00_ContentPlaceHolder1_txtFirstName').value;
//   for(i=0;i<myValue.length;i++)
//       {
//         var code=myValue.charCodeAt(i);
//         if(code>=48 && code<=57)
//         { 
//           myValue=''; 
//           document.getElementById('ctl00_ContentPlaceHolder1_txtFirstName').focus();
//         }    
//       }
//   var htext = Trim(myValue);
//   htext = htext.toLowerCase();
//   htext = htext.substr(0, 1).toUpperCase() + htext.substring(1, htext.length);

//   for (var i = 1; i < htext.length; i++) 
//   {
//     if (htext.substr(i, 1) == " ") 
//     {
//       while (htext.substr(i, 1) == " ")
//       i++;
//       if (i + 1 < htext.length)
//       htext = htext.substr(0, i) + htext.substr(i, 1).toUpperCase() + htext.substring(i + 1, htext.length);
//       else
//       htext = htext.substr(0, i) + htext.substr(i, 1).toUpperCase();
//     }
//   }
//  return htext;
    return myValue;
  }
  function TitleCaseLastName(oField) 
  {
   var myValue = document.getElementById('ctl00_ContentPlaceHolder1_txtLastName').value;
//   for(i=0;i<myValue.length;i++)
//       {
//         var code=myValue.charCodeAt(i);
//         if(code>=48 && code<=57)
//         { 
//           myValue=''; 
//           document.getElementById('ctl00_ContentPlaceHolder1_txtLastName').focus();
//         }    
//       }
//   var htext = Trim(myValue);
//   htext = htext.toLowerCase();
//   htext = htext.substr(0, 1).toUpperCase() + htext.substring(1, htext.length);

//   for (var i = 1; i < htext.length; i++) 
//   {
//     if (htext.substr(i, 1) == " ") 
//     {
//       while (htext.substr(i, 1) == " ")
//       i++;
//       if (i + 1 < htext.length)
//       htext = htext.substr(0, i) + htext.substr(i, 1).toUpperCase() + htext.substring(i + 1, htext.length);
//       else
//       htext = htext.substr(0, i) + htext.substr(i, 1).toUpperCase();
//     }
//   }
//  return htext;
    return myValue;
  }
  
  function TitleCaseMiddleName(oField) 
  {
   var myValue = document.getElementById('ctl00_ContentPlaceHolder1_txtMiddleName').value;
//    for(i=0;i<myValue.length;i++)
//       {
//         var code=myValue.charCodeAt(i);
//         if(code>=48 && code<=57)
//         { 
//           myValue=''; 
//           document.getElementById('ctl00_ContentPlaceHolder1_txtMiddleName').focus();
//         }    
//       }
//   var htext = Trim(myValue);
//   htext = htext.toLowerCase();
//   htext = htext.substr(0, 1).toUpperCase() + htext.substring(1, htext.length);

//   for (var i = 1; i < htext.length; i++) 
//   {
//     if (htext.substr(i, 1) == " ") 
//     {
//       while (htext.substr(i, 1) == " ")
//       i++;
//       if (i + 1 < htext.length)
//       htext = htext.substr(0, i) + htext.substr(i, 1).toUpperCase() + htext.substring(i + 1, htext.length);
//       else
//       htext = htext.substr(0, i) + htext.substr(i, 1).toUpperCase();
//     }
//   }
//  return htext;
    return myValue ;
  }
  
  function TitleCaseAliasName(oField) 
  {
   var myValue = document.getElementById('ctl00_ContentPlaceHolder1_txtAliasname').value;
    for(i=0;i<myValue.length;i++)
       {
         var code=myValue.charCodeAt(i);
         if(code>=48 && code<=57)
         { 
           myValue=''; 
           document.getElementById('ctl00_ContentPlaceHolder1_txtAliasname').focus();
         }    
       }
   var htext = Trim(myValue);
   htext = htext.toLowerCase();
   htext = htext.substr(0, 1).toUpperCase() + htext.substring(1, htext.length);

   for (var i = 1; i < htext.length; i++) 
   {
     if (htext.substr(i, 1) == " ") 
     {
       while (htext.substr(i, 1) == " ")
       i++;
       if (i + 1 < htext.length)
       htext = htext.substr(0, i) + htext.substr(i, 1).toUpperCase() + htext.substring(i + 1, htext.length);
       else
       htext = htext.substr(0, i) + htext.substr(i, 1).toUpperCase();
     }
   }
   document.getElementById('ctl00_ContentPlaceHolder1_ddlDisplayName').focus();
    return htext;
  }
  function TitleCaseDisplayname(oField) 
  {
   var myValue = document.getElementById('ctl00_ContentPlaceHolder1_txtDisplayname').value;
    for(i=0;i<myValue.length;i++)
       {
         var code=myValue.charCodeAt(i);
         if(code>=48 && code<=57)
         { 
           myValue=''; 
           document.getElementById('ctl00_ContentPlaceHolder1_txtDisplayname').focus();
         }    
       }
   var htext = Trim(myValue);
   htext = htext.toLowerCase();
   htext = htext.substr(0, 1).toUpperCase() + htext.substring(1, htext.length);

   for (var i = 1; i < htext.length; i++) 
   {
     if (htext.substr(i, 1) == " ") 
     {
       while (htext.substr(i, 1) == " ")
       i++;
       if (i + 1 < htext.length)
       htext = htext.substr(0, i) + htext.substr(i, 1).toUpperCase() + htext.substring(i + 1, htext.length);
       else
       htext = htext.substr(0, i) + htext.substr(i, 1).toUpperCase();
     }
   }
   document.getElementById('ctl00_ContentPlaceHolder1_ddlDisplayName').focus();
    return htext;
  }
  
  function ValidateDOB(oField,index) 
  {
     var myValue;
     if(index==1)
       myValue= document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtYear').value;
     else if(index==2)
       myValue= document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtMonths').value;
     else if(index==3)
       myValue= document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDay').value;
     for(i=0;i<myValue.length;i++)
       {
         var code=myValue.charCodeAt(i);
         if(!(code>=48 && code<=57))
         { 
           if(index==1)
           {
               document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtYear').value=0;
               document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtYear').focus(); 
           }
           else if(index==2)
           {
               document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtMonths').value=0;
               document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtMonths').focus();
           }
           else if(index==3)
           {
               document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDay').value=0;
               document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDay').focus();
           }
           document.getElementById('ctl00_ContentPlaceHolder1_newAgeUc_txtDob').value=''; 
           break;
         }    
       }
  }
   function ValidatePassport(oField,index) 
  {
     var myValue;
     if(index==1)
       myValue= document.getElementById('ctl00_ContentPlaceHolder1_txtIssueDt').value;
     else if(index==2)
       myValue= document.getElementById('ctl00_ContentPlaceHolder1_txtExpiryDt').value;
     for(i=0;i<myValue.length;i++)
       {
         var code=myValue.charCodeAt(i);
         if(!(code>=48 && code<=57))
         { 
           if(index==1)
           {
               document.getElementById('ctl00_ContentPlaceHolder1_txtIssueDt').value='';
               document.getElementById('ctl00_ContentPlaceHolder1_txtIssueDt').focus(); 
               break;
           }
           else if(index==2)
           {
               document.getElementById('ctl00_ContentPlaceHolder1_txtExpiryDt').value='';
               document.getElementById('ctl00_ContentPlaceHolder1_txtExpiryDt').focus();
               break;
           }
         }    
       }
  }
 
  function chkMobile(event)
  {
     var phone=document.getElementById('ctl00_ContentPlaceHolder1_txtRefMobile').value;
     var val=phone.length;
     if (val<10)
        {
          alert('please enter a valid phone number');
          document.getElementById('ctl00_ContentPlaceHolder1_txtRefMobile').focus();
        }
  }
  
  function calByDateEx(e)
  {
          //debugger;

          document.getElementById('<%=txtBirthNumber.ClientID %>').value='';
          var ageby = document.getElementById('<%=txtDateOfBirth.ClientID %>').value;
          var test=document.getElementById('<%=txtDateOfBirth.ClientID %>').value;
          var str2 = new Date().format('dd-MMM-yyyy');
                var dt2 = parseInt(str2.substring(0, 2), 10);
                var month2;
            var mon2 = str2.substring(3, 6);
            if(mon2=='Jan'|| mon2=='1')
             month2=1;
             else if(mon2=='Feb' || mon2=='2')
             month2=2;
             else if(mon2=='Mar' || mon2=='3')
             month2=3;
             else if(mon2=='Apr' || mon2=='4')
             month2=4;
             else if(mon2=='May' || mon2=='5')
             month2=5;
             else if(mon2=='Jun' || mon2=='6')
             month2=6;
             else if(mon2=='Jul' || mon2=='7')
             month2=7;
             else if(mon2=='Aug' || mon2=='8')
             month2=8;
             else if(mon2=='Sep' || mon2=='9')
             month2=9;
             else if(mon2=='Oct' || mon2=='10')
             month2=10;
             else if(mon2=='Nov' || mon2=='11')
             month2=11;
             else if(mon2=='Dec' || mon2=='12')
             month2=12;
            var yr2 = parseInt(str2.substring(7, 11), 10);
             
             var dt1 = parseInt(test.substring(0, 2), 10);
            var mon1 = test.substring(3, 6);
            var yr1 = parseInt(test.substring(7, 11), 10);
            var month1;
            if(mon1=='Jan'|| mon1=='1')
             month1=1;
             else if(mon1=='Feb' || mon1=='2')
             month1=2;
             else if(mon1=='Mar' || mon1=='3')
             month1=3;
             else if(mon1=='Apr' || mon1=='4')
             month1=4;
             else if(mon1=='May' || mon1=='5')
             month1=5;
             else if(mon1=='Jun' || mon1=='6')
             month1=6;
             else if(mon1=='Jul' || mon1=='7')
             month1=7;
             else if(mon1=='Aug' || mon1=='8')
             month1=8;
             else if(mon1=='Sep' || mon1=='9')
             month1=9;
             else if(mon1=='Oct' || mon1=='10')
             month1=10;
             else if(mon1=='Nov' || mon1=='11')
             month1=11;
             else if(mon1=='Dec' || mon1=='12')
             month1=12;
            var date1 = new Date(yr1,month1,dt1);
            var date2 = new Date(yr2, month2, dt2);
       
              if ( date1 >date2 ) {
                alert("Please enter valid date of birth..!");
                 document.getElementById('<%=txtDateOfBirth.ClientID %>').value="";             
                return false;
            }
            else
            {
            var ddlvalue =1;
            var date=test.split('-');
            var dYear=date[2];
            var dMon=date[1];
            var dDay=date[0];
            if(date[1]=='Jan'|| date[1]=='1')
             dMon=1;
             else if(date[1]=='Feb' || date[2]=='2')
             dMon=2;
             else if(date[1]=='Mar' || date[3]=='3')
             dMon=3;
             else if(date[1]=='Apr' || date[4]=='4')
             dMon=4;
             else if(date[1]=='May' || date[5]=='5')
             dMon=5;
             else if(date[1]=='Jun' || date[6]=='6')
             dMon=6;
             else if(date[1]=='Jul' || date[7]=='7')
             dMon=7;
             else if(date[1]=='Aug' || date[8]=='8')
             dMon=8;
             else if(date[1]=='Sep' || date[9]=='9')
             dMon=9;
             else if(date[1]=='Oct' || date[10]=='10')
             dMon=10;
             else if(date[1]=='Nov' || date[11]=='11')
             dMon=11;
             else if(date[1]=='Dec' || date[12]=='12')
             dMon=12;
            var toDay=new Date();
            var bDay = new Date(dYear, dMon, dDay);
            var bY=bDay.getFullYear();
            var bm=bDay.getMonth()-1;
            var bD=bDay.getDay();
           var age=0;var diff=bDay;
           while(diff <=toDay)
           {
           var diff=new Date(bY+age,bm,bD);
           age++;
           }
          age +=-2 ;
         if(age<0)
         {
          ddlvalue=3;
         var ageT=new Date(curyear,curmon,curday-age);
         age=0;
         }
            document.getElementById('<%= txtBirthNumber.ClientID %>').value = age;
            return false;
            }
  }

     function checkDt(control) 
     {
        if(control.value!=''){
        var mo, day, yr;
        var entry = control.value;
        var reLong = /\b\d{1,2}[\/-]\d{1,2}[\/-]\d{4}\b/;
        var reShort = /\b\d{1,2}[\/-]\d{1,2}[\/-]\d{2}\b/;
        var valid = (reLong.test(entry)) || (reShort.test(entry));
        if (valid) {
            var delimChar = (entry.indexOf("/") != -1) ? "/" : "-";
            var delim1 = entry.indexOf(delimChar);
            var delim2 = entry.lastIndexOf(delimChar);
            mo = parseInt(entry.substring(0, delim1), 10);
            day = parseInt(entry.substring(delim1+1, delim2), 10);
            yr = parseInt(entry.substring(delim2+1), 10);
            // handle two-digit year
            if (yr < 100) 
            {
                var today = new Date();
                // get current century floor (e.g., 2000)
                var currCent = parseInt(today.getFullYear() / 100) * 100;
                // two digits up to this year + 15 expands to current century
                var threshold = (today.getFullYear() + 15) - currCent;
                if (yr > threshold) 
                {
                  yr += currCent - 100;
                } 
                else 
                {
                  yr += currCent;
                }
             }
             var testDate = new Date(yr, mo-1, day);
             if (testDate.getDate() == day) 
             {
                if (testDate.getMonth() + 1 == mo) 
                {
                  if (testDate.getFullYear() == yr) 
                  {
                    // fill field with database-friendly format
                    control.value = day + "-" + mo + "-" + yr;
                    return true;
                  }
                  else 
                  {
                    alert("Check the year entry.");
                  }
                } 
                else 
                {
                   alert("Check the month entry.");
                }
             } 
             else 
             {
                 alert("Check the date entry.");
              }
          } 
          else 
          {
            alert("Invalid date format. Enter as dd-MMM-yyyy.");
            control.value='';
          }
        return false;
       }
      }
   



 

 




