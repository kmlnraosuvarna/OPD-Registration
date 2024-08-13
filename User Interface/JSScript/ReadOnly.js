function OnMakeReadOnlyTxt() {
    
    var inputElements = document.getElementsByTagName("input");
    for (var _index = 0; _index < inputElements.length; _index++) {
     
        if (inputElements[_index].readOnly == true) {
            inputElements[_index].setAttribute("onfocus", "OnLostFoucs(this)");
        }
    }
}

function OnLostFoucs(txtid) {
   try{
    if (txtid != null)
        txtid.blur();
        }
        catch(exp){}
}