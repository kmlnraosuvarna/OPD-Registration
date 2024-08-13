
var suvUtils = (function(){
    
    function getStorage(name){
        return localStorage.getItem(name);   
    }
    
    function setStorage(name,value){
        localStorage.setItem(name,value);
    }
    
    function deleteStorage(name){
        localStorage.removeItem(name);
    }
    
    return {
        getStorage:getStorage,
        setStorage:setStorage,
        deleteStorage:deleteStorage
    }

}());




var extendedDisplay = (function(){

    var _structure;


    function checkUrl() {

        if (suvUtils.getStorage("ED")) {
           return true; 
        }
        return false;
    }
    
    function setData(position,label,value){
        _structure[position].label = label;
        _structure[position].value = value;
        suvUtils.deleteStorage("STC");
        suvUtils.setStorage("STC",JSON.stringify(_structure));
    }
    
    
    function setStructure(structure){
        _structure = structure;
        suvUtils.deleteStorage("STC");
        suvUtils.setStorage("STC",JSON.stringify(structure));
    }
    
    return {
        checkUrl:checkUrl,
        setData:setData,
        setStructure:setStructure
    }
    
    
}());

if(!window.location.toString().toLowerCase().match(/extendeddisplay.aspx/)){
    suvUtils.deleteStorage("ED");
}
function eddesign()
{ 
var windowH=$(window).height();
var extheaderH=$(".extended_header").height();
$('.extended_content').css("height",extheaderH);
$('.extended_content').css({ height: (windowH - extheaderH) + "px" });
$('.extended_content').css('width','100%');

$('.ed_healthtip').css("height",windowH);
}


$(document).ready(function(){
   
    setTimeout(function () {
     eddesign();
    }, 500); 
    
    $(window).resize(function(){ 
    eddesign(); 
    });
}); 
 
$(window).resize(function(){
    eddesign();
});

function DatePickerCompanyPolicyDateFormat(selected, ctrl) {
    var dateformat = $('[id*=hdnDateFormat]').val();
    var dt = new Date(selected).format(dateformat);
    ctrl.value = dt;

}