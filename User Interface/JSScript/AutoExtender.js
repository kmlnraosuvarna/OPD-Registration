function ClientPopulated(source, eventArgs) {
    
    if (source._currentPrefix != null)
    {
        var list = source.get_completionList();
        var search = source._currentPrefix.toLowerCase();
        for (var i = 0; i < list.childNodes.length; i++)
        {
             var obj=list.childNodes[i]._value.split("^").length
             if(list.childNodes[i]._value.split("^").length==2)
              {
                var _value=list.childNodes[i]._value.split("^");       
                var text=_value[0];
                var moreText=_value[1];
                list.childNodes[i]._value=moreText;
                list.childNodes[i].innerHTML=text;
               }
            var text = list.childNodes[i].innerHTML;
            var index = text.toLowerCase().indexOf(search);
            if (index != -1)
            {
                var value1 = text.substring(0, index);
                value1 += '<span class="AutoComplete_ListItemHiliteText">';
                value1 += text.substr(index, search.length);
                value1 += '</span>';
                value1 += text.substring(index + search.length);
                list.childNodes[i].innerHTML = value1;
            }
        }
    }
}