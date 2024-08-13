<%@ Page Language="C#" AutoEventWireup="true" CodeFile="mobilelink.aspx.cs" Inherits="mobilelink" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        body{margin:0px;font-family: sans-serif;
             padding:0px}
           .sulogo img
        {
            width: 115px;
        }
      
        .header
        {
            display: flex;
            width: 100%;
            justify-content: space-between;
            background: linear-gradient(to right, #0647a6 0%, #2278de 100%);
            padding: 5px;
        }
        .sulogo
        {
            background: #fff;
            padding: 5px 9px;
            border-radius: 3px;
        }
     
        .patient-details{display: flex;      flex-wrap: wrap;  margin: 5px;}
    .card
    {width: 250px;
    height: 50px;
    box-shadow: 1px 1px 6px 3px #cacaca;
    padding: 8px;
    border-radius: 12px;
    border-left: 4px solid #154c78;
    margin: 5px;
        }
        h3{margin:0px}
    .pat_name{display: flex;
    justify-content: space-between;}
    .pat_name h3{font-size:16px;}
    .crd_amount{    color: Red;    font-size: 12px;
    font-weight: bold;
                }
                .ip_number{    color: #989898;
    padding: 7px 0px 4px 0px;    font-size: 12px;}
    .crd_clr{border-left: 4px solid #1e85d6;}
    </style>
</head>
<body>
    <form id="form1" runat="server">
     <div class="header">
        <div class="sulogo">
            <img src="img/suvarna_logo.PNG" /></div>
          
    </div>
    <div class="patient-details">
  <div class="card">
  <div class="pat_name">
  <h3>Manju</h3>
  <div class="crd_amount">20.00</div>
  </div>
  <div class="ip_number">
  IPN0098765789
  </div>
  </div>
   <div class="card crd_clr">
  <div class="pat_name">
  <h3>Manju</h3>
  <div class="crd_amount">20.00</div>
  </div>
  <div class="ip_number">
  IPN0098765789
  </div>
  </div>
   <div class="card">
  <div class="pat_name">
  <h3>Manju</h3>
  <div class="crd_amount">20.00</div>
  </div>
  <div class="ip_number">
  IPN0098765789
  </div>
  </div>
   <div class="card">
  <div class="pat_name">
  <h3>Manju</h3>
  <div class="crd_amount">20.00</div>
  </div>
  <div class="ip_number">
  IPN0098765789
  </div>
  </div>
    </div>
    </form>
</body>
</html>
