    function OnItemSelected(sender,eventArgs)
    {   
      var results = eval('('+eventArgs.get_value()+')');
     document.getElementById('ctl00_ContentPlaceHolder1_txtpatname').value = results.Text;
    }
    function acePopulated(source, eventArgs) 
   {
        source.get_element().value = eventArgs.get_value(); 
    } 
     function OnItemSelectedumrno(sender,eventArgs)
    {   
      var results = eval('('+eventArgs.get_value()+')');
     document.getElementById('ctl00_ContentPlaceHolder1_txtumrno').value = results.Text;
    }   
     function OnItemSelectedadmn(sender,eventArgs)
    {   
      var results = eval('('+eventArgs.get_value()+')');
     document.getElementById('ctl00_ContentPlaceHolder1_txtadmno').value = results.Text;
    }   
    function DisplayMes(lbladdress,cityname)
    {
      alert("Patient Address :"+ lbladdress+ "\n" +cityname+"" );
      return false;
    }
    
    function OnConsultant(input)
    {debugger;
        $('#ctl00_ContentPlaceHolder1_UCConsultantName_txtSearchControl').val(input["_lktext"]);
    }
    function OnRoom(input)
    {
        $('#ctl00_ContentPlaceHolder1_UcRoom_txtSearchControl').val(input["_lktext"]);
    }
    function OnWard(input)
    {
        $('#ctl00_ContentPlaceHolder1_UcWard_txtSearchControl').val(input["_lktext"]);
    }
    function OnBed(input)
    {
        $('#ctl00_ContentPlaceHolder1_UcBed_txtSearchControl').val(input["_lktext"]);
    }
    function OnCity(input)
    {
        $('#ctl00_ContentPlaceHolder1_uccity_txtSearchControl').val(input["_lktext"]);
    }
