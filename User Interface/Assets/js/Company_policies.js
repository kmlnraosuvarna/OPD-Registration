var Company_Groups = [];
var controls = [];
var Field_Groups = [];
var Fields = [];
var Main_Node_Groups = [];
var config;
function Left_Layout_binding() {
    var Proc_name = 'PR_GET_COMPANY_POLICY_GROUP_DUMMY';
    var session = $('#ctl00_ContentPlaceHolder1_hdnSessionID').val();
    if (session != undefined) {
        GetAsync(
     "DoctorMasterservice.asmx/Company_polcy_Group",
        { level: '', proc_name: Proc_name, DBSESSION_ID: session },
        function (Data) {
            if (Data.d != '') {
                var Groups = JSON.parse(Data.d);
                Company_Groups = [];
                for (var i = 0; i < Groups.length; i++) {
                    var Entity = { id: "0", text: "", img: 'icon-page', selected: i == 0 ? true : false };
                    Entity.id = Groups[i].PARAMETER_GROUP_ID;
                    Entity.text = Groups[i].PARAMETER_GROUP_NAME;
                    Company_Groups.push(Entity);
                }
            }
        }, function (error) {
        }
        );
    }
}
    function Main_Layout_Binding() {
        var sel_level_array = $('input[name=DdlLevel]').w2field().get();
        var Selected_level = sel_level_array.id;
        var Proc_name = 'PR_GET_COMPANY_POLICY_SETTINGS_DUMMY';
        var session = $('#ctl00_ContentPlaceHolder1_hdnSessionID').val();
        if (session != undefined) {
            GetAsync(
     "DoctorMasterservice.asmx/Company_polcy_Group",
        { level: Selected_level, proc_name: Proc_name, DBSESSION_ID: session },
        function (Data) {
            if (Data.d != '') {
                controls = [];
                var Control_data = JSON.parse(Data.d);
                for (var i = 0; i < Control_data.length; i++) {
                    var Control_Entity = { PARAMETER_ID: "0", PARAMETER_CD: '', PARAMETER_NAME: '', PARAMETER_DESC: ''
                                         , PARAMETER_GROUP_ID: '', PARAMETER_GROUP_CD: '', PARAMETER_GROUP_NAME: '', ENTITY_ID: '', ENTITY_VALUE_ID: ''
                                         , ENTITY_VALUE: '', CONTROL_ID: '', CONTROL_NAME: '', PARAMETER_VALUE: '', PARAMETER_DISPLAY_VALUE: '', ATTRIBUTE: ''
                                         , POSITION: 0
                    };
                    Control_Entity.PARAMETER_ID = Control_data[i].PARAMETER_ID;
                    Control_Entity.PARAMETER_CD = Control_data[i].PARAMETER_CD;
                    Control_Entity.PARAMETER_NAME = Control_data[i].PARAMETER_NAME;
                    Control_Entity.PARAMETER_DESC = Control_data[i].PARAMETER_DESC;
                    Control_Entity.PARAMETER_GROUP_ID = Control_data[i].PARAMETER_GROUP_ID;
                    Control_Entity.PARAMETER_GROUP_CD = Control_data[i].PARAMETER_GROUP_CD;
                    Control_Entity.PARAMETER_ID = Control_data[i].PARAMETER_ID;
                    Control_Entity.PARAMETER_CD = Control_data[i].PARAMETER_CD;
                    Control_Entity.PARAMETER_GROUP_NAME = Control_data[i].PARAMETER_GROUP_NAME;
                    Control_Entity.ENTITY_ID = Control_data[i].ENTITY_ID;
                    Control_Entity.ENTITY_VALUE_ID = Control_data[i].ENTITY_VALUE_ID;
                    Control_Entity.ENTITY_VALUE = Control_data[i].ENTITY_VALUE;
                    Control_Entity.CONTROL_ID = Control_data[i].CONTROL_ID;
                    Control_Entity.CONTROL_NAME = Control_data[i].CONTROL_NAME;
                    Control_Entity.PARAMETER_VALUE = Control_data[i].PARAMETER_VALUE;
                    Control_Entity.PARAMETER_DISPLAY_VALUE = Control_data[i].PARAMETER_DISPLAY_VALUE;
                    Control_Entity.ATTRIBUTE = Control_data[i].ATTRIBUTE;
                    if ($.isNumeric(Control_data[i].POSITION)) {
                        if (Control_data[i].POSITION % 2 === 0) {
                            Control_Entity.POSITION = 0;
                        }
                        else {
                            Control_Entity.POSITION = 1;
                        }
                    }
                    else {
                    }
                    controls.push(Control_Entity);
                }
                Form_Fields_Binding();
                Loading_Layout();
                // initialization
                if (w2ui.sidebar == undefined) {
                    $('#main').w2layout(config.layout);
                    w2ui.layout.content('left', $().w2sidebar(config.sidebar));
                    w2ui.layout.content('main', $().w2form(config.mainbar.nodes[0]));
                }
                else {
                    for (var d = 0; d < Company_Groups.length; d++) {
                        if (w2ui[d] != undefined) {
                            w2ui[d].destroy();
                        }
                    }
                    w2ui.layout.content('left', $().w2sidebar(config.sidebar));
                    w2ui.layout.content('main', $().w2form(config.mainbar.nodes[0]));
                    w2ui.sidebar.click(1);
                }
                for (var c = 0; c < w2ui[1].fields.length; c++) {

                    var name = w2ui[1].fields[c].name;
                    var type = w2ui[1].fields[c].type;
                    var Default_value = w2ui[1].fields[c].value;
                    console.log(name);
                    if (type == 'checkbox') {
                        var truefalse = w2ui[1].fields[c].truefalse;
                        if (truefalse == 'yes') {
                            if (Default_value.toLowerCase() == 'true') {
                                w2ui[1].record[name] = 'checked';
                            }
                            else {
                                w2ui[1].record[name] = '';
                            }
                        }
                        else {
                            if (Default_value!=null && Default_value.toLowerCase() == 'yes') {
                                w2ui[1].record[name] = 'checked';
                            }
                            else {
                                w2ui[1].record[name] = '';
                            }
                        }
                    }
                    else if (type == 'list') {
                        w2ui[1].record[name] = { id: Default_value };
                    }
                    else if (type == 'file') {
                        //  w2ui[1].fields[c].options.selected = '~/CompanyLogo/' + Default_value;
                        // defaults = { selected: '~/CompanyLogo/suvarna.png', maxSize: 1, renderItem: 'suvarna.png' };
                        // var options_file = { selected: '~/CompanyLogo/suvarna.png', renderItem: 'Pushkar', maxSize: 1 }
                        // var selected_file = [{ name: 'suvarna.png', path: '~/CompanyLogo/suvarna.png'}];
                        //  options_file.selected = selected_file;
                        //  w2ui[1].fields[c].defaults = defaults;
                        //   w2ui[1].fields[c].options = options_file;
                        //  w2ui[1].fields[c].selected = selected_file;
                    }
                    else {
                        w2ui[1].record[name] = Default_value;
                    }
                }
                w2ui[1].refresh()
            }
        }, function (error) {
        }
        );
        }
}
function Level_Change_event() {
    Left_Layout_binding();
    Main_Layout_Binding();
 }
    function Loading_Layout() {
        // widget configuration
        config = '';
        config = {
            layout: {
                name: 'layout',
                padding: 0,
                panels: [
            { type: 'left', size: 200, resizable: true, minSize: 120 },
            { type: 'main', minSize: 550, overflow: 'hidden' }
        ]
            },
            sidebar: {
                name: 'sidebar',
                nodes: Company_Groups,
                onClick: function (event) {

                    var id = event.target;
                    var node = Number(id) - 1;
                    if (w2ui[id] == undefined) {
                        if (config.mainbar.nodes[node].fields != '') {
                            w2ui.layout.content('main', $().w2form(config.mainbar.nodes[node]));
                            for (var c = 0; c < w2ui[id].fields.length; c++) {
                                var name = w2ui[id].fields[c].name;
                                var type = w2ui[id].fields[c].type;
                                var Default_value = w2ui[id].fields[c].value;
                                if (type == 'checkbox' && Default_value!= null) {
                                    var truefalse = w2ui[id].fields[c].truefalse;
                                    if (truefalse == 'yes') {
                                        if (Default_value.toLowerCase() == 'true') {
                                            w2ui[id].record[name] = 'checked';
                                        }
                                        else {
                                            w2ui[id].record[name] = '';
                                        }
                                    }
                                    else {
                                        if (Default_value.toLowerCase() == 'yes') {
                                            w2ui[id].record[name] = 'checked';
                                        }
                                        else {
                                            w2ui[id].record[name] = '';
                                        }
                                    }
                                }
                                else if (type == 'list') {
                                    w2ui[id].record[name] = { id: Default_value };
                                }
                                else {
                                    w2ui[id].record[name] = Default_value;
                                }
                            }
                            w2ui[id].refresh()

                        }
                        else {
                            $(".stoast").toastText("warning", "Not Yet Developed, so unable to select.", 5, 3);
                            event.preventDefault();
                            return false;
                        }
                    }
                    else {
                        w2ui.layout.content('main', w2ui[id]);
                    }
                }
            },
            mainbar: {
                name: 'mbar',
                nodes: Main_Node_Groups
            }

        };
    }
    function Form_Fields_Binding() {
        Field_Groups = [];
        for (var k = 0; k < Company_Groups.length; k++) {
            var Field_Group_Entity = { name: 0, header: '', fields: [] };
            Field_Group_Entity.name = Company_Groups[k].id;
            Field_Group_Entity.header = Company_Groups[k].text;
            Fields_C = [];
            for (var i = 0; i < controls.length; i++) {
                if (Company_Groups[k].id == controls[i].PARAMETER_GROUP_ID) {
                    var field_entity = { field: '', type: '', html: {}, options: { items: [] }, value: '', truefalse: 'no' };
                    var html_entity = { caption: '', attr: '',column:0 };
                    field_entity.field = controls[i].PARAMETER_CD;
                    field_entity.type = controls[i].CONTROL_NAME;
                    field_entity.value = controls[i].PARAMETER_VALUE;
                    html_entity.caption = controls[i].PARAMETER_NAME;
                    html_entity.attr = controls[i].ATTRIBUTE;
                    html_entity.column = controls[i].POSITION;
                    field_entity.html = html_entity;
                    if (controls[i].CONTROL_NAME == 'list' || controls[i].CONTROL_NAME == 'radio') {
                        var list_items = [];
                        var ids = controls[i].ENTITY_VALUE_ID;
                        var Text2 = controls[i].ENTITY_VALUE;
                        if (ids == null || ids == '' || ids == undefined)
                        { }
                        else {
                            var ids_split = ids.split(',');
                            var Text2_split = Text2.split(',');
                            for (var j = 0; j < ids_split.length; j++) {
                                var list_item_entity = { id: '', text: '', caption: '', checked: false };
                                list_item_entity.id = ids_split[j].trim();
                                list_item_entity.text = Text2_split[j].trim();
                                list_item_entity.caption = Text2_split[j].trim();
                                if (controls[i].PARAMETER_VALUE == ids_split[j].trim()) {
                                    list_item_entity.checked = true;
                                }
                                list_items.push(list_item_entity);
                            }
                        }
                        field_entity.options.items = list_items;
                    }
                    else if (controls[i].CONTROL_NAME == 'checkbox') {
                    if (controls[i].PARAMETER_VALUE == null) {
                        console.log(controls[i].PARAMETER_DESC);
                    }
                    else if (controls[i].PARAMETER_VALUE.toLowerCase() == 'true' || controls[i].PARAMETER_VALUE.toLowerCase() == 'false' || controls[i].PARAMETER_VALUE.toLowerCase() == '') {
                            field_entity.truefalse = 'yes';
                        }
                    }
                 /*   else if (controls[i].CONTROL_NAME == 'file') {
                        var temp_path = "~/CompanyLogo/" + controls[i].PARAMETER_VALUE;
                        var options_file = { selected: [] }
                        options_file.selected.push(temp_path);
                        field_entity.options = options_file;
                    } */
                    
                    Fields_C.push(field_entity);
                } /*Field to Group Related Controls adding Dynamically End */
            } /* Fields End Looping */
            Field_Group_Entity.fields.push(Fields_C);
            Field_Groups.push(Field_Group_Entity);
        } /* Group End Looping */
        Main_Node_Groups_Construction();
    }
    function Main_Node_Groups_Construction() {
        Main_Node_Groups = [];
        for (var b = 0; b < Field_Groups.length; b++) {
            var Main_entity = { name: '', header: '', fields: [] };
            Main_entity.name = Field_Groups[b].name;
            Main_entity.header = Field_Groups[b].header;
            Main_entity.fields = Field_Groups[b].fields[0];
            Main_Node_Groups.push(Main_entity);
        }
    }
    function ValidateIsTextEmpty() {
        $(".smessagebox").scustommessagebox(2, "Company Policy Settings", "Do you want to save the settings?", OnsuccesssaveConfirmation, '', OnCancelConfirmation);
        return false;
    }
    function OnsuccesssaveConfirmation() {
        var _xml = '';
        _xml += "<root>";
        for (var s = 0; s < w2ui.sidebar.nodes.length; s++) {
            var group_id = w2ui.sidebar.nodes[s].id;
            var group_name = w2ui.sidebar.nodes[s].text;
            var form = w2ui[group_id];
            if (form == undefined || form == null || form == '')
            { }
            else {
                var Group_changes = w2ui[group_id].getChanges();
                $.each(Group_changes, function (key, value) {

                    var skip = false;
                    if (key == null || key == undefined || key == '')
                    { }
                    else {
                        var record = w2ui[group_id].get(key);
                        var param_cd = record.name;
                        var param_value = '';
                        var param_display_value = '';
                        if (record.type == "list") {
                            if (value.id == undefined || value.id == null || value.id == '')
                            { skip = true; }
                            else {
                                param_value = value.id;
                                param_display_value = value.text;
                            }
                        }
                        else if (record.type == "checkbox") {
                            
                            var truefalsesetting = record.truefalse;
                            if (truefalsesetting == 'yes') {
                                if (value == false) {
                                    param_value = 'False';
                                    param_display_value = 'False';
                                }
                                else {
                                    param_value = 'True';
                                    param_display_value = 'True';
                                }
                            }
                            else {
                                if (value == false) {
                                    param_value = 'No';
                                    param_display_value = 'No';
                                }
                                else {
                                    param_value = 'Yes';
                                    param_display_value = 'Yes';
                                }
                            }
                        }
                        else if (record.type == "radio") {
                            param_value = value;
                            for (var r = 0; r < record.options.items.length; r++) {
                                var Field = record.options.items[r];
                                if (Field.id == value) {
                                    param_display_value = Field.text;
                                }
                            }
                        }
                        else {
                            param_value = value;
                            param_display_value = value;
                        }
                        var sel_level_array = $('input[name=DdlLevel]').w2field().get();
                        praram_level = sel_level_array.id;
                        if (!skip) {
                            _xml += "<PARAMETER_VALUE ";
                            _xml += "PARAMETER_CD" + "=" + "!" + param_cd + "!" + ' ';
                            _xml += "PARAMETER_VALUE" + "=" + "!" + param_value + "!" + ' ';
                            _xml += "PARAMETER_DISPLAY_VALUE" + "=" + "!" + param_display_value + "!" + ' ';
                            _xml += "PARAMETER_LEVEL" + "=" + "!" + praram_level + "!" + '/>';
                        }
                    }
                });
            }
        }
        _xml += "</root>";
        $('#ctl00_ContentPlaceHolder1_hdnSavingXML').val(_xml);
        __doPostBack($('[id*=imgbtnSave]').attr("name"), "");
    }
    function SaveConvMsg() {
        $(".smessagebox").scustommessagebox(1, "Company Policy settings", "Saved Successfully", successmsg);
    }
    function successmsg() {
        window.location.replace('Policies.aspx');
    }
    function OnCancelConfirmation() { 
    
    }