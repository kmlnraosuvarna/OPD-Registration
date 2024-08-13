
var __USoptionselectposition =0;
var USglobal_cobj={};
function UniverseAutoArrowSelection(options)
{
var _makeAutoTxtBxId=options.txtBoxID || "";
var _makeAutoTxtBxOptionsId=options.OptionsDivID || "";
var Name=options.Name||"";
var ____height = 0;
_makeAutoTxtBxId.keydown(function(event) {
  
    //
    var _licount = _makeAutoTxtBxOptionsId.find("ul li").size();
    var _displayData;
    var _cobj;
    /*Code for Ristrict Enter Key*/
    if (event.keyCode === 13) {
      
        ____height = 0;
        _makeAutoTxtBxOptionsId.empty();
        _makeAutoTxtBxOptionsId.hide();
        UniverseReturnPreviousObj(USglobal_cobj.RESULT, _makeAutoTxtBxId);
        __USoptionselectposition = 0;
        event.stopImmediatePropagation();
        return false;
    }
    /*Code for KeyDown Arrow Press */
    if (event.keyCode === 40) {
        event.stopImmediatePropagation();
        // $(this).removeClass("autohightlight");
        $(this).removeAttr("style");
        // alert("__USoptionselectposition < _licount:"+__USoptionselectposition+"<"+_licount+"key down:"+(parseFloat(__USoptionselectposition)+1));
        // 
        if (__USoptionselectposition < _licount) {
            __USoptionselectposition++;
            // alert('increase:'+__USoptionselectposition);
        }
        var Scroll = false;
        _makeAutoTxtBxOptionsId.find("ul li").each(function(i, j) {

            // $(this).removeClass("autohightlight");
            $(this).removeAttr("style");
            var _makeAutoTxtBxOptionsId_div = $(this).parent().parent();
            if (__USoptionselectposition === 0 && i === 0) {
                ____height = 0;
            }
            if (__USoptionselectposition > _licount) {
                Scroll = false;
            }
            // 
            //alert('__USoptionselectposition:'+__USoptionselectposition+",_licount:"+_licount);
            if (__USoptionselectposition == i + 1 && __USoptionselectposition <= _licount) {
                // 
                if (((_licount) * 25) > ____height && _licount > 0)
                    ____height += $(this).height();
                //  alert('increase:'+____height);
                if (_makeAutoTxtBxOptionsId_div.height() <= ____height)
                    Scroll = true;
                _displayData = $(this).find("a").html();
                var tb = $.parseJSON(eval($.trim($(this).find('span').html())));
                $(this).css({ "background": "#14b2db" });
                // $(this).addClass("autohightlight");
                // _makeAutoTxtBxId.val(_displayData);
                //lk_val.val(tb.Value);
                var _cobj = {};
                _cobj._lktext = _displayData;
                _cobj.ID = tb.Value;
                _cobj.RESULT = tb;
                USglobal_cobj = _cobj;
            } //End for _USoptionselectposition == i
        }); //End for _makeAutoTxtBxOptionsId Each Function
        if (Scroll) {
            _makeAutoTxtBxOptionsId.scrollTop(____height);
        }
        //  $(this).val(_displayData);
        //End for event.keyCode === 40  
    }
    else if (event.keyCode === 38) {
        event.stopImmediatePropagation();
        // alert("__USoptionselectposition <= _licount:"+__USoptionselectposition+"<="+_licount+"keyUP:"+(parseFloat(__USoptionselectposition)-1));
        if (__USoptionselectposition <= _licount && __USoptionselectposition >= 0) {
            __USoptionselectposition--;
            //alert('__USoptionselectposition:decrease:'+__USoptionselectposition);
        }
        //
        if (__USoptionselectposition > 0 && __USoptionselectposition <= _licount) {
            _makeAutoTxtBxOptionsId.find("ul li").each(function(i, j) {
                // 
                //$(this).removeClass("autohightlight");
                $(this).next().removeAttr("style");

                var _makeAutoTxtBxOptionsId_div = $(this).parent().parent();
                if (__USoptionselectposition > _licount) {
                    Scroll = false;
                }
                if (__USoptionselectposition == (i + 1) && __USoptionselectposition >= 0) {
                    //
                    if (____height > 0)
                        ____height -= $(this).height();
                    // alert('decrease:'+____height);
                    if ((_makeAutoTxtBxOptionsId_div.height() - 100) >= (____height - 100))
                        Scroll = true;

                    _displayData = $(this).find("a").html();
                    var tb = $.parseJSON(eval($.trim($(this).find('span').html())));
                    //   alert('beforArrow');
                    $(this).css({ "background": "#14b2db" });
                    //   alert('afterArrow');
                    // $(this).addClass("autohightlight");
                    //  _makeAutoTxtBxId.val(_displayData);
                    //
                    // lk_val.val(tb.Value);
                    var _cobj = {};
                    _cobj._lktext = _displayData;
                    _cobj.ID = tb.Value;
                    _cobj.RESULT = tb;
                    USglobal_cobj = _cobj;
                }
            });
            if (Scroll) {
                _makeAutoTxtBxOptionsId.scrollTop(____height - 100);
            }
            //   $(this).val(_displayData);
            /*End For __USoptionselectposition!=-1 && __USoptionselectposition<=_licount*/
        }
        else {
            $(this).val('');
        }
        // End For event.keyCode === 38
    }
});  //End For _makeAutoTxtBxId.keydown
}




$(document).ready(function () {

    var sp = new SuperPlaceholder({

        placeholders: ["Search For Document ..."],

        preText: "",
        stay: 1000,
        speed: 100,
        element: '#globalSearch'

    });
    sp.init();

});

var SuperPlaceholder = function (options) {
    this.options = options;
    this.element = options.element
    this.placeholderIdx = 0;
    this.charIdx = 0;
    this.setPlaceholder = function () {


    



        placeholder =
      options.placeholders[this.placeholderIdx];
        var placeholderchunk =
      placeholder.substring(0, this.charIdx + 1);
        document.querySelector(this.element).setAttribute("placeholder", this.options.preText + "" + placeholderchunk)
    };
    this.onTickReverse = function (afterReverse) {
        if (this.charIdx === 0) {
            afterReverse.bind(this)();
            clearInterval(this.intervalId);
            this.init();
        }
        else {


            this.setPlaceholder();
            this.charIdx--;

        }
    };
    this.goReverse = function () {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.onTickReverse.bind(this, function () {
            this.charIdx = 0;
            this.placeholderIdx++;
            if (this.placeholderIdx === options.placeholders.length) {

                this.placeholderIdx = 0;
            }
        }), this.options.speed)
    };
    this.onTick = function () {

        var placeholder = options.placeholders[this.placeholderIdx];
        if (this.charIdx === placeholder.length) {
            setTimeout(this.goReverse.bind(this), this.options.stay);
        }
        this.setPlaceholder();
        this.charIdx++;
    }
    this.init = function () {
        this.intervalId = setInterval(this.onTick.bind(this), this.options.speed);
    }
    this.kill = function () {
        clearInterval(this.intervalId);

    }
}
  


  