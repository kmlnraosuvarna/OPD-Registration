function setdesgin()
    {   
    
	    var height1=$(window).height()-52; $('#FO_container').css("height",height1); $('#FO_container').css("top","28px");
	     
	    var leftmenu=$(window).height()-105; $('.lftrnd_Rnd_content').css("height",leftmenu);
	    
        var Grid_FieldsDiv=$(window).height()-140; $('.Grid_FieldsDiv').css("height",Grid_FieldsDiv);
        
        var Form_ControlsDiv1=$(window).height()-105; $('.Form_ControlsDiv').css("height",Form_ControlsDiv1);  
        
        var SubModuelContFODiv1=$(window).height()-105; $('.SubModuelContFODiv').css("height",SubModuelContFODiv1); 
        
        var rnd_contentFODiv1=$(window).height()-105; $('.rnd_contentFODiv').css("height",rnd_contentFODiv1); 
        
        var FO_FieldsDiv1=parseInt($(".Form_ControlsDiv").height())-30; $(".FO_FieldsDiv").css("height",FO_FieldsDiv1);
        
        var FO_FieldsDivH1=parseInt($(".Form_ControlsDiv").height())-30; $(".FO_FieldsDivH").css("height",FO_FieldsDivH1);
        
        var Sampleentrydiv1=parseInt($(".FO_FieldsDivH").height())-90; $(".Sampleentrydiv").css("height",Sampleentrydiv1);  //SampleEntry.aspx
         
        var Sampleentrycancel1=parseInt($(".FO_FieldsDivH").height())-192;  $(".Sampleentrycancel").css("height",Sampleentrycancel1);  //SampleEntry.aspx

        var Sampleentrydivgrid1=parseInt($(".Sampleentrydiv,.Sampleentrycancel").height())-11; $(".Sampleentrydivgrid").css("height",Sampleentrydivgrid1);//SampleEntry.aspx
       
        var SampleentryH1=parseInt($(".Sampleentrydivgrid").height())-46; $(".SampleentryH").css("height",SampleentryH1); //SampleEntry.aspx
       
        var divQMSheight1=parseInt($(".Sampleentrydiv").height())-11; $(".divQMSheight").css("height",divQMSheight1);//QMSCtrl in SampleEntry.aspx
       
        var QMSHeight1=parseInt($(".divQMSheight").height())-46;  $(".QMSHeight").css("height",QMSHeight1);//QMSCtrl in SampleEntry.aspx
       
        var qmsgridheight1=parseInt($(".divQMSheight").height())-79; $(".qmsgridheight").css("height",qmsgridheight1); //QMSCtrl in SampleEntry.aspx
       
        var lefttop1=(parseInt($(".lftrnd_Rnd_content").height())*50)/100+'px';  $(".lefttop").css("height",lefttop1); $(".lefttop").css("overflow","auto"); 
      
        var Nurseaccord=parseInt($(".lefttop").height())-30; $(".NurseaccordionContent").css("height",Nurseaccord);
        
        var scroll1=parseInt($(".Form_ControlsDiv").height())-155; $(".scroll").css("height",scroll1);	 
        
        var Roomscroll1=parseInt($(".Form_ControlsDiv").height())-100; $(".Roomscroll").css("height",Roomscroll1);	      
         
        var ParameterSetup1=parseInt($(".Form_ControlsDiv").height())-425; $(".ParameterSetup").css("height",ParameterSetup1); // Laboratory/parametersetup.aspx
        
        var ResultDisBillStat1=parseInt($(".Form_ControlsDiv").height())-260; $(".ResultDisBillStat").css("height",ResultDisBillStat1); // when bill status btn click in  Result Dispatch page ---  ResultEntryVerification.aspx		 
      
        var trBillDetailsdiv1=parseInt($(".Form_ControlsDiv").height())-175; $(".trBillDetailsdiv").css("height",trBillDetailsdiv1); // ResultEntryVerification.aspx	
        
        var trBillDetailsdiv2=parseInt($(".Form_ControlsDiv").height())-120; $(".trBillDetailsdiv2").css("height",trBillDetailsdiv2);
        
        var BillsDetails1=parseInt($(".trBillDetailsdiv,.trBillDetailsdiv2").height())-6;  $("#BillsDetails").css("height",BillsDetails1);	 //ResultEntryVerification.aspx and Sample Reprocessing page url ModifyResultEntry.aspx
        
        var ResultVerifyBillsDetails1=parseInt($("#BillsDetails").height())-27;  $(".ResultVerifyBillsDetails").css("height",ResultVerifyBillsDetails1);
        	
        //var trservicesdiv1=(parseInt($(".trBillDetailsdiv").height())*50)/100+'px';  $(".trservicesdiv").css("height",trservicesdiv1); 
        
        var trservicesH1=parseInt($(".trservicesdiv").height())-9;  
        $("#trservicesH").css("height",trservicesH1);
        
        var trservicesheight1=parseInt($("#trservicesH").height())-27;    
        $(".trservicesheight").css("height",trservicesheight1);	        
        
        var Reprocessingtrservices1=(parseInt($(".trBillDetailsdiv2").height())*100)/100+'px'; 
        $(".Reprocessingtrservices").css("height",Reprocessingtrservices1); //Sample Reprocessing page url ModifyResultEntry.aspx
        
        var ReprocessingservicesH1=parseInt($(".Reprocessingtrservices").height())-6;  $("#ReprocessingservicesH").css("height",ReprocessingservicesH1);//Sample Reprocessing page url ModifyResultEntry.aspx
        
        var Reprocessingservicesheight1=parseInt($("#ReprocessingservicesH").height())-27; $(".Reprocessingservicesheight").css("height",Reprocessingservicesheight1);	//Sample Reprocessing page url ModifyResultEntry.aspx
        
        var trCompdiv1=(parseInt($(".trBillDetailsdiv").height())*49)/100+'px'; $(".trCompdiv").css("height",trCompdiv1);
        
        var trCompH1=parseInt($(".trCompdiv").height())-9; $("#trCompH").css("height",trCompH1);
        
        var trCompheight1=parseInt($("#trCompH").height())-27; 
        $(".trCompheight").css("height",trCompheight1);		 
        
       
       
       var radiotrservicesdiv1=parseInt($(".trBillDetailsdiv").height())-72; 
       $(".radiotrservicesdiv").css("height",radiotrservicesdiv1); 
        
        var radiotrservicesH1=parseInt($(".radiotrservicesdiv").height())-6;  
        $("#radiotrservicesH").css("height",radiotrservicesH1);
        
        var radiotrservicesheight1=parseInt($("#radiotrservicesH").height())-27;    
        $(".radiotrservicesheight").css("height",radiotrservicesheight1);	        
        var billstatusH1=parseInt($(".Form_ControlsDiv").height())-200; $(".billstatusH").css("height",billstatusH1); // /BillStatus.aspx		 
        var DLSHeight1=parseInt($(".Form_ControlsDiv").height())-130; $(".DLSHeight").css("height",DLSHeight1); // /DelayLabService.aspx		 
        var nsreH1=parseInt($(".Form_ControlsDiv").height())-140; $(".nsreH").css("height",nsreH1); // /NewSampleReceiveEntry.aspx		 

       
       
        var SampleGrossingEntryH1=parseInt($(".Form_ControlsDiv").height())-140; 
        $(".SampleGrossingEntryH").css("height",SampleGrossingEntryH1); // NewSampleReceiveEntry.aspx		
        
        var NREHeight1=parseInt($(".Form_ControlsDiv").height())-380; $(".NREHeight").css("height",NREHeight1); //Newresultentry.Aspx
       var DiagDrug1=parseInt($(".Form_ControlsDiv").height())-150; $(".DiagDrug").css("height",DiagDrug1); // /DiagDrug.aspx

       
      
 }
 
 

 
 $(document).ready(function(){
    setdesgin();
  
    
  $(window).resize(function(){ setdesgin();   });
   
    //  $(window).load(function(){ setdesgin(); });
    //  $(screen).resize(function(){ setdesgin();  });
    //  $(document).resize(function(){ setdesgin();  });
  
   });