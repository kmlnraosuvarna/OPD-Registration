<%@ Page Title="Extended Display" Language="C#" AutoEventWireup="true" CodeFile="ExtendedDisplay.aspx.cs"
    Inherits="Private_FrontOffice_ExtendedDisplay" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title></title>
     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no," />
    <link rel="stylesheet" type="text/css" href="../../Assets/css/extended.css" />
    <link rel="stylesheet" type="text/css" href="../../ed-assets/extended-healthtips.css" />
    <link rel="stylesheet" type="text/css" href="../../ed-assets/animate.css" />

    <script type="text/javascript" src="../../Assets/js/jquery.js"></script>

    <script src="../../Assets/js/underscore.js" type="text/javascript"></script>

    <script type="text/javascript" src="../../Assets/js/ExtendedJScript.js"></script>

    <script type="text/javascript">

 function updateTime(){

     var currentTime = new Date();
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
     var seconds = currentTime.getSeconds();
     if (minutes < 10) {
         minutes = "0" + minutes;
     }
     if (seconds < 10) {
         seconds = "0" + seconds;
     }

     var v = hours + ":" + minutes + ":" + seconds + "&nbsp;";

     //        if(hours > 11){
     //        v+="PM";
     //        }
     //        else{
     //        v+="AM";
     //        }
     setTimeout("updateTime()", 1000);
     }
    updateTime();
    function pageload() {
            eddesign();
        updateTime();
    }

    </script>

</head>
<body>
    <form id="form1" runat="server">
    <div id="ED-Div" class="extended_display" style="display: none;">
        <div class="extended_header">
            <h1>
                Check Your Details</h1>
            <h2 id="time" class="CurrTime">
            </h2>
        </div>
        <div class="extended_content">
            <div class="ed-left">
                <div class="ed-client">
                    <div class="ed-logo">
                        <img src="../../CompanyLogo/CBrand_Logo.PNG" />
                    </div>
                    <h1 class="ed-title">
                    </h1>
                </div>
            </div>
            <div class="ed-right" id="displayTemplate">
            </div>
        </div>
    </div>
    <div id="_anim" class="ed_healthtip" style="display: none;">
        <div class="ed-left">
            <div class="ed-client">
                <div class="ed-logo">
                    <img src="../../CompanyLogo/Brand_Logo.PNG" />
                </div>
                <h1 class="ed-title">
                    Health Packages
                </h1>
            </div>
        </div>
        <div class="ed-right" id="firstcolumn" style="position: relative; display:none;">
            <div class="pack-maindiv diabetic1">
                <%--  <img src="../../ed-assets/img/dibaetescheckup.jpg" width="100%" />--%>
                <h2 class="dia-pac-title">
                    Diabetic Health Check<br />
                    KDRC - Rs. 3,600/-
                </h2>
                <div class="diabetic-content">
                    <div class=""  style="display:none;">
                        <h2>
                            Lab Investigations</h2>
                        <ul>
                            <li>
                                <h3>
                                    Biochemistry</h3>
                                Fasting & Post Lunch Plasma Glucose <b>*</b> HbA <b>*</b> 1 C C Blood Urea <b>*</b> S. Creatinine <b>*</b> S. Electrolytes
                                (Na, K, CL) <b>*</b> Liver function test (LFT) (Bilirubin-Total & Direct, Alk, Phos., ALT, 
                                AST, Total Proteins, Albumin, Globulin, AG Ratio) <b>*</b> Lipid profile (Total Cholesterol,
                                HDL, LDL, Triglycerides, Cardiac Risk Ratio) Urine for Microalbumin </li>
                          
                        </ul>
                    </div>
                    <div>
                        <h2>
                            Lab Investigations</h2>
                        <ul>
               
                            <li>
                                <h3>
                                    Haematology</h3>
                                Hb, PCV, RBC, WBC, DLC, Platelet count, Peripheral Smear, Complete Urine Examination
                            </li>
                            <li>
                                <h3>
                                    Eye Examination</h3>
                                Visual acuity, Fundus Examination </li>
                        </ul>
                         <h2>
                              Consultations</h2>
                        <ul>
               
                            <li>
                              
                               Diabetologist / Endocrinologist
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <%--<div id="div_left_slide_0" class="slide" style="background: #fff; position: absolute;
                left: 0px; top: 0px; width: 100%; height: 100%">
            </div>
            <div id="div_left_slide_1" class="slide" style="background: #fff; position: absolute;
                left: 0px; top: 0px; width: 100%; height: 100%">
            </div>--%>
        </div>
    </div>

    <script type="text/javascript">

        _.templateSettings = {
            interpolate: /\{%=(.+?)%\}/g,
            escape: /\{%-(.+?)%\}/g,
            evaluate: /\{%(.+?)%\}/g
        };
    
    </script>

    <script type="text/html" id="eDataTemplate">
    {% _.each(items,function(item,key,list){ %}
            {% if(item.label == 'SERVICES') { %}
                <div class="services">{%= item.value %}</div>
            {%}else if(item.label=='CONSULTATIONS'){ %}
                <div class="services">{%= item.value %}</div>
            {%}else if(item.label=='Transactions'){ %}
                <div class="Transactions">{%= item.value %}</div>
            {%}else{ %}
               <div class="pat-info"> <b>{%= item.label %}</b><i>{%= item.value %}</i></div>
            {%}%}
            
        </div>
    {% }) %}
    </script>

    <script type="text/javascript">

        var initializePrint = false;
        var intervalRetrieval;
        var items;

        function startRetrievingData() {
            $(".extended_display").show();
            $("#displayTemplate").show();
           // $(".CurrTime").html(new Date()); 
            $("#_anim").fadeOut();
            if (suvUtils.getStorage("ED") == "YRegistration.aspx") {
                $('.ed-title').html('Registration');
                $('#ED-Div').removeClass();
                $('#ED-Div').addClass('extended_display ed-Reg');
            }
            if (suvUtils.getStorage("ED") == "New_IPRegistrationChengesDetails.aspx") {
                $('.ed-title').html('Change Registration Details');
                $('#ED-Div').removeClass();
                $('#ED-Div').addClass('extended_display ed-Reg');
            }
            else if (suvUtils.getStorage("ED") == "OPConsultation1.aspx") {
                $('.ed-title').html('Consultation');
                $('#ED-Div').removeClass();
                $('#ED-Div').addClass('extended_display ed-opBill');
            }
            else if (suvUtils.getStorage("ED") == "OPBillClientSide.aspx") {
                $('.ed-title').html('Billing');
                $('#ED-Div').removeClass();
                $('#ED-Div').addClass('extended_display ed-opBill');
            }
            else if (suvUtils.getStorage("ED") == "OP_QUICK.aspx") {
                $('.ed-title').html('OPD Billing');
                $('#ED-Div').removeClass();
                $('#ED-Div').addClass('extended_display ed-MultiForm');
            }
            else if (suvUtils.getStorage("ED") == "OPDBill.aspx") {
                $('.ed-title').html('OPD Billing');
                $('#ED-Div').removeClass();
                $('#ED-Div').addClass('extended_display ed-MultiForm');
            }
            else if (suvUtils.getStorage("ED") == "AddNewAdmission.aspx") {
                $('.ed-title').html('Admission');
                $('#ED-Div').removeClass();
                $('#ED-Div').addClass('extended_display ed-Admn');
            }
            else if (suvUtils.getStorage("ED") == "PointofsaleOP.aspx") {
                $('.ed-title').html('Pharmacy Bill');
                $('#ED-Div').removeClass();
                $('#ED-Div').addClass('extended_display ed-opPhar');
            }
            else if (suvUtils.getStorage("ED") == "OPRegConBilling.aspx") {
            if (localStorage.getItem("DisplayName") != '' && localStorage.getItem("DisplayName") != undefined && localStorage.getItem("DisplayName") != null)
                $('.ed-title').html(localStorage.getItem("DisplayName"));
            else
                $('.ed-title').html('Registration & Billing');
                $('#ED-Div').removeClass();
                $('#ED-Div').addClass('extended_display ed-MultiForm');
            }
            
            items = JSON.parse(suvUtils.getStorage("STC"));
            var _mtemplate = $("#eDataTemplate").html();
            $("#displayTemplate").html(_.template(_mtemplate, items));
        }

        function stopRetrievingData() {
            clearInterval(intervalRetrieval);
            $(".extended_display").fadeOut();
            $("#displayTemplate").fadeOut();

            $("#_anim").show();
        }

        setInterval(function() {
            if (extendedDisplay.checkUrl() && !initializePrint) {
                initializePrint = true;
                intervalRetrieval = setInterval(function() {
                    startRetrievingData();
                }, 300);
            }
            else {
                if (!extendedDisplay.checkUrl()) {
                    initializePrint = false;
                    stopRetrievingData();
                }
            }
        }, 1000);
        
        
        
       
        
    </script>

    <script>
/*

	datatype = "image/video/packages/HTML";
	rendermode = "a) video or video with HTML content
				  b) image with html content.
				  c) banner with some text"

*/


var _activeLeftSlide = 0; //used for slide count;
var _activeLeftDiv = 0; //used to find active div;
var _leftSlideZindex = 0;
/*
"#div_left_slide_0"
"#div_left_slide_1"
*/

var _leftData = [{seq:1,datatype:"image",renderType:"image",data:"../../ed-assets/img/banner-1.jpg",wait:5,effect:'bounceInDown'}
                   ,{seq:7,datatype:"package",renderType:"html",data:"<div id='slideshow'></div>",wait:5,effect:'bounceInDown'}
				//,{seq:2,datatype:"package",renderType:"html",data:"<div class='slidediv'><div class='intro_logo'><img src='images/prime_Logo.PNG' /></div><div class='title_price'>MASTER<br />HEALTH CHECKUP<div class='price-tag'><span>Rs.</span> 3,950/-</div></div><div class='doctor'><img src='images/Doctor.png' /></div></div>",wait:12,effect:'fadeInUp'}
				//,{seq:3,datatype:"package",renderType:"html",data:"<div class='slidediv'><div class='logo'><img src='images/prime_Logo.PNG' /></div><div class='title'>MASTER HEALTH CHECKUP (Rs. 3,950/-)</div><div class='content'><div>Package Includes :<br /><br /></div><div><ul><li class='pack1'>Complete Blood Picture with Platelet Count </li><li class='pack2'>ESR</li><li class='pack3'>Fasting Plasma Glucose </li><li class='pack4'>Serum Bilirubin (Direct & Total) </li><li class='pack5'>SGOT </li><li class='pack6'>SGPT </li></ul></div></div><div class='doctor'><img src='images/Doctor.png' /></div></div>",wait:12,effect:'fadeInUp'}
				//,{seq:4,datatype:"package",renderType:"html",data:"<div class='slidediv'><div class='logo'><img src='images/prime_Logo.PNG' /></div><div class='title'>MASTER HEALTH CHECKUP (Rs. 3,950/-)</div><div class='content'><div>Package Includes :<br /><br /></div><div><ul><li class='pack1'>Alkaline Phosphatase </li><li class='pack2'>Total Protein </li><li class='pack3'>Albumin & Globulin Ratio </li><li class='pack4'>Blood Urea</li><li class='pack5'>Serum Creatinine</li><li class='pack6'>Serum Calcium</li></ul></div></div><div class='doctor'><img src='images/Doctor.png' /></div></div>",wait:12,effect:'fadeInUp'}
				//,{seq:5,datatype:"package",renderType:"html",data:"<div class='slidediv'><div class='logo'><img src='images/prime_Logo.PNG' /></div><div class='title'>MASTER HEALTH CHECKUP (Rs. 3,950/-)</div><div class='content'><div>Package Includes :<br /><br /></div><div><ul><li class='pack1'>HbsAg</li><li class='pack2'>Lipid Profile</li><li class='pack3'>Blood Grouping with Rh Typing</li><li class='pack4'>Complete Urine Examination</li><li class='pack5'>Glycosylated Hemoglobin(HbA1c)</li><li class='pack6'>Thyroid Stimulating Hormone(TSH)</li></ul></div></div><div class='doctor'><img src='images/Doctor.png' /></div></div>",wait:12,effect:'fadeInUp'}
				//,{seq:6,datatype:"package",renderType:"html",data:"<div class='slidediv'><div class='logo'><img src='images/prime_Logo.PNG' /></div><div class='title'>MASTER HEALTH CHECKUP  (Rs. 3,950/-)</div><div class='content'><div>Package Includes :<br /><br /></div><div><ul><li class='pack1'>ECG</li><li class='pack2'>X-ray of Chest</li><li class='pack3'>Ultrasound of Abdomen & Pelvis</li><li class='pack4'>Physician Consultation</li><li class='pack5'>If daibetic Podiatry checkup</li><li class='pack6'>EGFR</li></ul></div></div><div class='doctor'><img src='images/Doctor.png' /></div></div>",wait:12,effect:'fadeInUp'}
				,{seq:7,datatype:"image",renderType:"image",data:"../../ed-assets/img/banner-2.jpg",wait:5,effect:'bounceInDown'}
				,{seq:8,datatype:"image",renderType:"image",data:"../../ed-assets/img/banner-3.jpg",wait:5,effect:'bounceInUp'}
				,{seq:9,datatype:"image",renderType:"image",data:"../../ed-assets/img/banner-4.jpg",wait:5,effect:'bounceInDown'}
				//,{seq:10,datatype:"video",renderType:"video",data:"vid/sample.mp4",format:"video/mp4",wait:19,effect:'bounceIn'}
				,{seq:11,datatype:"image",renderType:"image",data:"../../ed-assets/img/banner-6.jpg",wait:5,effect:'bounceInUp'}
				
				];
				
var _rightData = [];

if(_leftData.length>0){
	if(_leftData.length > 1){
		animateLeftColumn(-1);
	}
	else{
		showSingleLeftBanner();
	}
}
else{
	$("#div_left_slide_0").html("No Animations found....").show();
}


function animateLeftColumn(_slideNumber){
	
	$("#firstcolumn .slide").fadeOut();
	_slideNumber++;
	_slideNumber = (_slideNumber > _leftData.length-1) ? 0 : _slideNumber;
	$("#div_left_slide_"+_activeLeftDiv).html("");
	if(_leftData[_slideNumber].renderType=='image'){
		$("#div_left_slide_"+_activeLeftDiv).append("<img src='"+_leftData[_slideNumber].data+"' width='100%' height='100%'/>")
	}
	else if(_leftData[_slideNumber].renderType=='video'){
		
			var _video='<video width="100%" height="100%" autoplay>';
			  	_video+='<source src="'+_leftData[_slideNumber].data+'" type="'+_leftData[_slideNumber].format+'">';
				_video+='</video>';
			$("#div_left_slide_"+_activeLeftDiv).append(_video);
			
			
	}
	else{
		$("#div_left_slide_"+_activeLeftDiv).html(_leftData[_slideNumber].data);
	}
	$("#div_left_slide_"+((_activeLeftDiv == 0) ? 1 : 0)).removeClass().addClass('escape animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
     $(this).removeClass();
    });
	
	$("#div_left_slide_"+_activeLeftDiv).css("z-index",_leftSlideZindex++).show();
	
	$("#div_left_slide_"+_activeLeftDiv).removeClass().addClass(_leftData[_slideNumber].effect+' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
	
	_activeLeftDiv = (_activeLeftDiv == 0) ? 1 : 0;
	
	var _timer = setTimeout(function(){
		clearTimeout(_timer);
		animateLeftColumn(_slideNumber);
	},_leftData[_slideNumber].wait*1000);
	
}


function showSingleLeftBanner(){
		
}


    </script>

    </form>
</body>
</html>
