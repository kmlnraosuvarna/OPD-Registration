function updateDOM(inputField) {
    /* if the inputField ID string has been passed in, get the inputField object*/
    if (typeof inputField == "string") {
        inputField = document.getElementById(inputField);
    }

    if (inputField.type == "select-one") {
        for (var i = 0; i < inputField.options.length; i++) {
            if (i == inputField.selectedIndex) {
                inputField.options[inputField.selectedIndex].setAttribute("selected", "selected");
            }
        }
    } else if (inputField.type == "select-multiple") {
        for (var i = 0; i < inputField.options.length; i++) {
            if (inputField.options[i].selected) {
                inputField.options[i].setAttribute("selected", "selected");
            } else {
                inputField.options[i].removeAttribute("selected");
            }
        }
    } else if (inputField.type == "text") {

        inputField.setAttribute("value", inputField.value);
    } else if (inputField.type == "textarea") {
        inputField.setAttribute("value", inputField.value);
        inputField.innerHTML = inputField.value;
    } else if (inputField.type == "checkbox") {
        if (inputField.checked) {
            inputField.setAttribute("checked", "checked");
        } else {
            inputField.removeAttribute("checked");
        }
    } else if (inputField.type == "radio") {
        var radioNames = document.getElementsByName(inputField.name);
        for (var i = 0; i < radioNames.length; i++) {
            if (radioNames[i].checked) {
                radioNames[i].setAttribute("checked", "checked");
            } else {
                radioNames[i].removeAttribute("checked");
            }
        }
    }
}
