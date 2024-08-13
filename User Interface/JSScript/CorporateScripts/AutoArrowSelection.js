
var _optionselectposition =0;
var global_cobj={};
function AutoArrowSelection(options)
{
var _makeAutoTxtBxId=options.txtBoxID || "";
var _makeAutoTxtBxOptionsId=options.OptionsDivID || "";
var Name=options.Name||"";
var ____height = 0; 
        _makeAutoTxtBxId.keydown(function(event){
        //
                                var _licount =_makeAutoTxtBxOptionsId.find("ul li").size();  
                                var _displayData;
                                var _cobj;
                                /*Code for Ristrict Enter Key*/     
                                if(event.keyCode === 13){
                                ____height= 0;
                                _makeAutoTxtBxOptionsId.empty();
                                _makeAutoTxtBxOptionsId.hide();
                                ReturnPreviousObj(global_cobj.RESULT,_makeAutoTxtBxId);
                                _optionselectposition = 0;
                                event.stopImmediatePropagation();
                                return false;
                                }   
                                /*Code for KeyDown Arrow Press */     
                                if(event.keyCode === 40){
                                 event.stopImmediatePropagation();
                                            // $(this).removeClass("autohightlight");
                                            $(this).removeAttr("style");
                                           // alert("_optionselectposition < _licount:"+_optionselectposition+"<"+_licount+"key down:"+(parseFloat(_optionselectposition)+1));
                                          // 
                                            if(_optionselectposition < _licount){
                                            _optionselectposition++;
                                            // alert('increase:'+_optionselectposition);
                                            }
                                            var Scroll = false;
                                            _makeAutoTxtBxOptionsId.find("ul li").each(function(i,j){
                                                        
                                                            // $(this).removeClass("autohightlight");
                                                            $(this).removeAttr("style");
                                                            var  _makeAutoTxtBxOptionsId_div=$(this).parent().parent();
                                                            if(_optionselectposition === 0 && i === 0 ){
                                                            ____height = 0; 
                                                            }
                                                            if(_optionselectposition > _licount){
                                                            Scroll = false;                        
                                                            }
                                                           // 
                                                           //alert('_optionselectposition:'+_optionselectposition+",_licount:"+_licount);
                                                            if(_optionselectposition == i+1 && _optionselectposition <=_licount){
                                                           // 
                                                                    if(((_licount)*25)>____height && _licount>0 )
                                                                     ____height+=$(this).height();
                                                                   //  alert('increase:'+____height);
                                                                    if(_makeAutoTxtBxOptionsId_div.height()<=____height)
                                                                    Scroll = true;
                                                                    _displayData = $(this).find("a").html(); 
                                                                    var tb = $.parseJSON(eval($.trim($(this).find('span').html())));
                                                                    $(this).css({"background":"#14b2db"});
                                                                    // $(this).addClass("autohightlight");
                                                                   // _makeAutoTxtBxId.val(_displayData);
                                                                    //lk_val.val(tb.Value);
                                                                    var _cobj = {};
                                                                    _cobj._lktext =_displayData;
                                                                    _cobj.ID = tb.Value;
                                                                    _cobj.RESULT = tb;
                                                                    global_cobj=_cobj;
                                                            }//End for optionselectposition == i
                                           });//End for _makeAutoTxtBxOptionsId Each Function
                                if(Scroll){
                                    _makeAutoTxtBxOptionsId.scrollTop(____height);
                                }
                              //  $(this).val(_displayData);
                      //End for event.keyCode === 40  
                      } 
                      else if(event.keyCode === 38){
                                   event.stopImmediatePropagation();
                                   // alert("_optionselectposition <= _licount:"+_optionselectposition+"<="+_licount+"keyUP:"+(parseFloat(_optionselectposition)-1));
                                    if(_optionselectposition <= _licount && _optionselectposition>=0  ){
                                    _optionselectposition--;
                                    //alert('_optionselectposition:decrease:'+_optionselectposition);
                                    }
                                    //
                                    if(_optionselectposition>0 && _optionselectposition <=_licount)
                                    { 
                                           _makeAutoTxtBxOptionsId.find("ul li").each(function(i,j){
                                                      // 
                                                        //$(this).removeClass("autohightlight");
                                                        $(this).next().removeAttr("style");
                                                        
                                                        var  _makeAutoTxtBxOptionsId_div=$(this).parent().parent();
                                                        if(_optionselectposition > _licount){
                                                        Scroll = false;                        
                                                        }
                                                        if(_optionselectposition == (i+1) && _optionselectposition>=0 ){
                                                             //
                                                            if(____height>0) 
                                                            ____height-=$(this).height();
                                                           // alert('decrease:'+____height);
                                                            if((_makeAutoTxtBxOptionsId_div.height()-100)>=(____height-100))
                                                            Scroll = true;
                                                            
                                                            _displayData = $(this).find("a").html();
                                                            var tb = $.parseJSON(eval($.trim($(this).find('span').html())));
                                                            //   alert('beforArrow');
                                                            $(this).css({"background":"#14b2db"});
                                                            //   alert('afterArrow');
                                                            // $(this).addClass("autohightlight");
                                                          //  _makeAutoTxtBxId.val(_displayData);
                                                            //
                                                            // lk_val.val(tb.Value);
                                                            var _cobj = {};
                                                            _cobj._lktext =_displayData;
                                                            _cobj.ID = tb.Value;
                                                            _cobj.RESULT = tb;
                                                            global_cobj=_cobj;
                                                       }
                                               });
                                            if(Scroll){
                                                _makeAutoTxtBxOptionsId.scrollTop(____height-100);
                                            }
                                     //   $(this).val(_displayData);
                                    /*End For _optionselectposition!=-1 && _optionselectposition<=_licount*/
                                    }
                                    else{
                                     $(this).val('');
                                    }
                     // End For event.keyCode === 38
                     }
      });//End For _makeAutoTxtBxId.keydown
}


  