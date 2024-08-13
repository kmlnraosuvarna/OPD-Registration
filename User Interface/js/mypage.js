
$(document).ready(function () {
    var ckeditor_config = {
        
        height: 150,
        toolbarCanCollapse: true,
        removePlugins: 'elementspath',
        uiColor: '#9AB8F3'
    };
    $("textarea#editor1").val("").ckeditor(ckeditor_config);
});