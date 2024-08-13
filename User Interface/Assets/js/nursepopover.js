(function (window, document, undefined) {
    'use strict';
    (function (factory) {
        if (typeof define === 'function' && define.amd) {
            // Register as an anonymous AMD module.
            define(['jquery'], factory);
        } else if (typeof exports === 'object') {
            // Node/CommonJS
            module.exports = factory(require('jquery'));
        } else {
            // Browser globals
            factory(window.jQuery);
        }
    } (function ($) {
        // Create the defaults once
        var attribValue = ''; var patientobj = '';
        var pluginName = 'webuiPopover';
        var pluginClass = 'webui-popover';
        var pluginType = 'webui.popover';
        var defaults = {
            datasource: [],
            placement: 'auto',
            container: null,
            width: 'auto',
            height: 'auto',
            trigger: 'click', //hover,click,sticky,manual
            style: '',
            selector: false, // jQuery selector, if a selector is provided, popover objects will be delegated to the specified. 
            delay: {
                show: null,
                hide: 300
            },
            async: {
                type: 'GET',
                before: null, //function(that, xhr){}
                success: null, //function(that, xhr){}
                error: null //function(that, xhr, data){}
            },
            cache: true,
            multi: false,
            arrow: true,
            title: '',
            content: '',
            closeable: false,
            padding: true,
            url: '',
            type: 'html',
            direction: '', // ltr,rtl
            animation: null,
            template: '<div class="webui-popover">' +
                '<div class="webui-arrow"></div>' +
                '<div class="webui-popover-inner">' +
                '<a href="#" class="close"></a>' +
            //'<h3 class="webui-popover-title"></h3>' +
                '<ul class="webui-popover-content psrv-list divscroll"><i class="icon-refresh"></i> <p>&nbsp;</p></ul>' +
                '</div>' +
                '</div>',
            backdrop: false,
            dismissible: true,
            onShow: null,
            onHide: null,
            abortXHR: true,
            autoHide: false,
            offsetTop: 0,
            offsetLeft: 0,
            iframeOptions: {
                frameborder: '0',
                allowtransparency: 'true',
                id: '',
                name: '',
                scrolling: '',
                onload: '',
                height: '',
                width: ''
            },
            hideEmpty: false
        };

        var rtlClass = pluginClass + '-rtl';
        var _srcElements = [];
        var backdrop = $('<div class="webui-popover-backdrop"></div>');
        var _globalIdSeed = 0;
        var _isBodyEventHandled = false;
        var _offsetOut = -2000; // the value offset  out of the screen
        var $document = $(document);

        var toNumber = function (numeric, fallback) {
            return isNaN(numeric) ? (fallback || 0) : Number(numeric);
        };

        var getPopFromElement = function ($element) {
            return $element.data('plugin_' + pluginName);
        };

        var hideAllPop = function () {
            var pop = null;
            for (var i = 0; i < _srcElements.length; i++) {
                pop = getPopFromElement(_srcElements[i]);
                if (pop) {
                    pop.hide(true);
                }
            }
            $document.trigger('hiddenAll.' + pluginType);
        };

        var hideOtherPops = function (currentPop) {
            var pop = null;
            for (var i = 0; i < _srcElements.length; i++) {
                pop = getPopFromElement(_srcElements[i]);
                if (pop && pop.id !== currentPop.id) {
                    pop.hide(true);
                }
            }
            $document.trigger('hiddenAll.' + pluginType);
        };

        var isMobile = ('ontouchstart' in document.documentElement) && (/Mobi/.test(navigator.userAgent));

        var pointerEventToXY = function (e) {
            var out = {
                x: 0,
                y: 0
            };
            if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                out.x = touch.pageX;
                out.y = touch.pageY;
            } else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'click') {
                out.x = e.pageX;
                out.y = e.pageY;
            }
            return out;
        };



        // The actual plugin constructor
        function WebuiPopover(element, options) {
            this.$element = $(element);
            if (options) {
                if ($.type(options.delay) === 'string' || $.type(options.delay) === 'number') {
                    options.delay = {
                        show: options.delay,
                        hide: options.delay
                    }; // bc break fix
                }
            }
            this.options = $.extend({}, defaults, options);
            this._defaults = defaults;
            this._name = pluginName;
            this._targetclick = false;
            this.init();
            _srcElements.push(this.$element);
            return this;

        }

        WebuiPopover.prototype = {
            //init webui popover
            init: function () {
                if (this.$element[0] instanceof document.constructor && !this.options.selector) {
                    throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
                }

                if (this.getTrigger() !== 'manual') {
                    //init the event handlers
                    if (this.getTrigger() === 'click' || isMobile) {
                        this.$element.off('click touchend', this.options.selector).on('click touchend', this.options.selector, $.proxy(this.toggle, this));
                    } else if (this.getTrigger() === 'hover') {
                        this.$element
                            .off('mouseenter mouseleave click', this.options.selector)
                            .on('mouseenter', this.options.selector, $.proxy(this.mouseenterHandler, this))
                            .on('mouseleave', this.options.selector, $.proxy(this.mouseleaveHandler, this));
                    }
                }
                this._poped = false;
                this._inited = true;
                this._opened = false;
                this._idSeed = _globalIdSeed;
                this.id = pluginName + this._idSeed;
                // normalize container
                this.options.container = $(this.options.container || document.body).first();

                if (this.options.backdrop) {
                    backdrop.appendTo(this.options.container).hide();
                }
                _globalIdSeed++;
                if (this.getTrigger() === 'sticky') {
                    this.show();
                }

                if (this.options.selector) {
                    this._options = $.extend({}, this.options, {
                        selector: ''
                    });
                }

            },
            /* api methods and actions */
            destroy: function () {
                var index = -1;

                for (var i = 0; i < _srcElements.length; i++) {
                    if (_srcElements[i] === this.$element) {
                        index = i;
                        break;
                    }
                }

                _srcElements.splice(index, 1);


                this.hide();
                this.$element.data('plugin_' + pluginName, null);
                if (this.getTrigger() === 'click') {
                    this.$element.off('click');
                } else if (this.getTrigger() === 'hover') {
                    this.$element.off('mouseenter mouseleave');
                }
                if (this.$target) {
                    this.$target.remove();
                }
            },
            getDelegateOptions: function () {
                var options = {};

                this._options && $.each(this._options, function (key, value) {
                    if (defaults[key] !== value) {
                        options[key] = value;
                    }
                });
                return options;
            },
            /*
            param: force    boolean value, if value is true then force hide the popover
            param: event    dom event,
            */
            hide: function (force, event) {

                if (!force && this.getTrigger() === 'sticky') {
                    return;
                }
                if (!this._opened) {
                    return;
                }
                if (event) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                if (this.xhr && this.options.abortXHR === true) {
                    this.xhr.abort();
                    this.xhr = null;
                }


                var e = $.Event('hide.' + pluginType);
                this.$element.trigger(e, [this.$target]);
                if (this.$target) {
                    this.$target.removeClass('in').addClass(this.getHideAnimation());
                    var that = this;
                    setTimeout(function () {
                        that.$target.hide();
                        if (!that.getCache()) {
                            that.$target.remove();
                        }
                    }, that.getHideDelay());
                }
                if (this.options.backdrop) {
                    backdrop.hide();
                }
                this._opened = false;
                this.$element.trigger('hidden.' + pluginType, [this.$target]);

                if (this.options.onHide) {
                    this.options.onHide(this.$target);
                }

            },
            resetAutoHide: function () {
                var that = this;
                var autoHide = that.getAutoHide();
                if (autoHide) {
                    if (that.autoHideHandler) {
                        clearTimeout(that.autoHideHandler);
                    }
                    that.autoHideHandler = setTimeout(function () {
                        that.hide();
                    }, autoHide);
                }
            },
            delegate: function (eventTarget) {
                var self = $(eventTarget).data('plugin_' + pluginName);
                if (!self) {
                    self = new WebuiPopover(eventTarget, this.getDelegateOptions());
                    $(eventTarget).data('plugin_' + pluginName, self);
                }
                return self;
            },
            toggle: function (e) {
                var self = this;
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    console.log("toggle", this);
                    console.log(this.$element);
                    console.log("GET ATTRIBUTE:", this.$element[0].getAttribute("attrib"));
                    attribValue = this.$element[0].getAttribute("attrib")

                    patientobj = this.$element;

                    if (this.options.selector) {
                        self = this.delegate(e.currentTarget);
                    }
                }
                self[self.getTarget().hasClass('in') ? 'hide' : 'show']();
            },
            hideAll: function () {
                hideAllPop();
            },
            hideOthers: function () {
                hideOtherPops(this);
            },
            /*core method ,show popover */
            show: function () {
                if (this._opened) {
                    return;
                }
                //removeAllTargets();
                var 
                    $target = this.getTarget().removeClass().addClass(pluginClass).addClass(this._customTargetClass);
                if (!this.options.multi) {
                    this.hideOthers();
                }

                // use cache by default, if not cache setted  , reInit the contents
                if (!this.getCache() || !this._poped || this.content === '') {
                    this.content = '';
                    this.setTitle(this.getTitle());
                    if (!this.options.closeable) {
                        $target.find('.close').off('click').remove();
                    }
                    if (!this.isAsync()) {
                        this.setContent(this.getContent());
                    } else {
                        this.setContentASync(this.options.content);
                    }

                    if (this.canEmptyHide() && this.content === '') {
                        return;
                    }
                    $target.show();
                }

                this.displayContent();

                if (this.options.onShow) {
                    this.options.onShow($target,patientobj);
                }

                this.bindBodyEvents();
                if (this.options.backdrop) {
                    backdrop.show();
                }
                this._opened = true;
                this.resetAutoHide();
            },
            displayContent: function () {
                var 
                //element postion
                    elementPos = this.getElementPosition(),
                //target postion
                    $target = this.getTarget().removeClass().addClass(pluginClass).addClass(this._customTargetClass),
                //target content
                    $targetContent = this.getContentElement(),
                //target Width
                    targetWidth = $target[0].offsetWidth,
                //target Height
                    targetHeight = $target[0].offsetHeight,
                //placement
                    placement = 'bottom',
                    e = $.Event('show.' + pluginType);

                if (this.canEmptyHide()) {

                    var content = $targetContent.children().html();
                    if (content !== null && content.trim().length === 0) {
                        return;
                    }
                }

                //if (this.hasContent()){
                this.$element.trigger(e, [$target]);
                //}
                // support width as data attribute
                var optWidth = this.$element.data('width') || this.options.width;
                if (optWidth === '') {
                    optWidth = this._defaults.width;
                }

                if (optWidth !== 'auto') {
                    $target.width(optWidth);
                }

                // support height as data attribute
                var optHeight = this.$element.data('height') || this.options.height;
                if (optHeight === '') {
                    optHeight = this._defaults.height;
                }

                if (optHeight !== 'auto') {
                    $targetContent.height(optHeight);
                }

                if (this.options.style) {
                    this.$target.addClass(pluginClass + '-' + this.options.style);
                }

                //check rtl
                if (this.options.direction === 'rtl' && !$targetContent.hasClass(rtlClass)) {
                    $targetContent.addClass(rtlClass);
                }

                //init the popover and insert into the document body
                if (!this.options.arrow) {
                    $target.find('.webui-arrow').remove();
                }
                $target.detach().css({
                    top: _offsetOut,
                    left: _offsetOut,
                    display: 'block'
                });

                if (this.getAnimation()) {
                    $target.addClass(this.getAnimation());
                }
                $target.appendTo(this.options.container);


                placement = this.getPlacement(elementPos);

                //This line is just for compatible with knockout custom binding
                this.$element.trigger('added.' + pluginType);

                this.initTargetEvents();

                if (!this.options.padding) {
                    if (this.options.height !== 'auto') {
                        $targetContent.css('height', $targetContent.outerHeight());
                    }
                    this.$target.addClass('webui-no-padding');
                }
                targetWidth = $target[0].offsetWidth;
                targetHeight = $target[0].offsetHeight;

                var postionInfo = this.getTargetPositin(elementPos, placement, targetWidth, targetHeight);

                this.$target.css(postionInfo.position).addClass(placement).addClass('in');

                if (this.options.type === 'iframe') {
                    var $iframe = $target.find('iframe');
                    var iframeWidth = $target.width();
                    var iframeHeight = $iframe.parent().height();

                    if (this.options.iframeOptions.width !== '' && this.options.iframeOptions.width !== 'auto') {
                        iframeWidth = this.options.iframeOptions.width;
                    }

                    if (this.options.iframeOptions.height !== '' && this.options.iframeOptions.height !== 'auto') {
                        iframeHeight = this.options.iframeOptions.height;
                    }

                    $iframe.width(iframeWidth).height(iframeHeight);
                }

                if (!this.options.arrow) {
                    this.$target.css({
                        'margin': 0
                    });
                }
                if (this.options.arrow) {
                    var $arrow = this.$target.find('.webui-arrow');
                    $arrow.removeAttr('style');

                    //prevent arrow change by content size
                    if (placement === 'left' || placement === 'right') {
                        $arrow.css({
                            top: this.$target.height() / 2
                        });
                    } else if (placement === 'top' || placement === 'bottom') {
                        $arrow.css({
                            left: this.$target.width() / 2
                        });
                    }

                    if (postionInfo.arrowOffset) {
                        //hide the arrow if offset is negative
                        if (postionInfo.arrowOffset.left === -1 || postionInfo.arrowOffset.top === -1) {
                            $arrow.hide();
                        } else {
                            $arrow.css(postionInfo.arrowOffset);
                        }
                    }

                }
                this._poped = true;
                this.$element.trigger('shown.' + pluginType, [this.$target]);
            },

            isTargetLoaded: function () {
                return this.getTarget().find('i.glyphicon-refresh').length === 0;
            },

            /*getter setters */
            getTriggerElement: function () {
                return this.$element;
            },
            getTarget: function () {
                if (!this.$target) {
                    var id = pluginName + this._idSeed;
                    this.$target = $(this.options.template)
                        .attr('id', id);
                    this._customTargetClass = this.$target.attr('class') !== pluginClass ? this.$target.attr('class') : null;
                    this.getTriggerElement().attr('data-target', id);
                }
                if (!this.$target.data('trigger-element')) {
                    this.$target.data('trigger-element', this.getTriggerElement());
                }
                return this.$target;
            },
            removeTarget: function () {
                this.$target.remove();
                this.$target = null;
                this.$contentElement = null;
            },
            getTitleElement: function () {
                return this.getTarget().find('.' + pluginClass + '-title');
            },
            getContentElement: function () {
                if (!this.$contentElement) {
                    this.$contentElement = this.getTarget().find('.' + pluginClass + '-content');
                }
                return this.$contentElement;
            },
            getTitle: function () {
                return this.$element.attr('data-title') || this.options.title || this.$element.attr('title');
            },
            getUrl: function () {
                return this.$element.attr('data-url') || this.options.url;
            },
            getAutoHide: function () {
                return this.$element.attr('data-auto-hide') || this.options.autoHide;
            },
            getOffsetTop: function () {
                return toNumber(this.$element.attr('data-offset-top')) || this.options.offsetTop;
            },
            getOffsetLeft: function () {
                return toNumber(this.$element.attr('data-offset-left')) || this.options.offsetLeft;
            },
            getCache: function () {
                var dataAttr = this.$element.attr('data-cache');
                if (typeof (dataAttr) !== 'undefined') {
                    switch (dataAttr.toLowerCase()) {
                        case 'true':
                        case 'yes':
                        case '1':
                            return true;
                        case 'false':
                        case 'no':
                        case '0':
                            return false;
                    }
                }
                return this.options.cache;
            },
            getTrigger: function () {
                return this.$element.attr('data-trigger') || this.options.trigger;
            },
            getDelayShow: function () {
                var dataAttr = this.$element.attr('data-delay-show');
                if (typeof (dataAttr) !== 'undefined') {
                    return dataAttr;
                }
                return this.options.delay.show === 0 ? 0 : this.options.delay.show || 100;
            },
            getHideDelay: function () {
                var dataAttr = this.$element.attr('data-delay-hide');
                if (typeof (dataAttr) !== 'undefined') {
                    return dataAttr;
                }
                return this.options.delay.hide === 0 ? 0 : this.options.delay.hide || 100;
            },
            getAnimation: function () {
                var dataAttr = this.$element.attr('data-animation');
                return dataAttr || this.options.animation;
            },
            getHideAnimation: function () {
                var ani = this.getAnimation();
                return ani ? ani + '-out' : 'out';
            },
            setTitle: function (title) {
                var $titleEl = this.getTitleElement();
                if (title) {
                    //check rtl
                    if (this.options.direction === 'rtl' && !$titleEl.hasClass(rtlClass)) {
                        $titleEl.addClass(rtlClass);
                    }
                    $titleEl.html(title);
                } else {
                    $titleEl.remove();
                }
            },
            hasContent: function () {
                return this.getContent();
            },
            canEmptyHide: function () {
                return this.options.hideEmpty && this.options.type === 'html';
            },
            getIframe: function () {
                var $iframe = $('<iframe></iframe>').attr('src', this.getUrl());
                var self = this;
                $.each(this._defaults.iframeOptions, function (opt) {
                    if (typeof self.options.iframeOptions[opt] !== 'undefined') {
                        $iframe.attr(opt, self.options.iframeOptions[opt]);
                    }
                });

                return $iframe;
            },
            getContent: function () {

                if (this.getUrl()) {
                    switch (this.options.type) {
                        case 'iframe':
                            this.content = this.getIframe();
                            break;
                        case 'html':
                            try {
                                this.content = $(this.getUrl());
                                if (!this.content.is(':visible')) {
                                    this.content.show();
                                }
                            } catch (error) {
                                throw new Error('Unable to get popover content. Invalid selector specified.');
                            }
                            break;
                    }
                } else if (!this.content) {
                    var content = '';
                    if ($.isFunction(this.options.content)) {
                        content = this.options.content.apply(this.$element[0], [this]);
                    } else {
                        content = this.options.content;
                    }

                    //this.content = this.$element.attr('data-content') || content;
                    var refCode = parseInt(this.$element.attr('data-ref'));
                    var _html = "<ul id=\"uimodulecollection\" class=\"modulelist list-group\">";
                    var _subhtml = "";

                    /*
                    
                    var _collection = _.where(this.options.datasource, { PARENT_DOC_ID: refCode, PARENT_DOC_ID_TYPE: 'M' });
                    _.each(_collection, function (i, j) {
                        
                    if (i.PARENT_MODULE_ID != null)
                    _html += "<li class=\"list-group-item\"><a onclick=\"toggleChild(" + i.DOC_ID + ")\">" + i.DOC_DESC + "</a></li>";
                    else
                    _html += "<li  class=\"list-group-item\"><a onclick=\"ManageS(" + i.PARENT_DOC_ID + "," + i.DOC_ID + "," + i.DOC_ID + ",'" + i.DOC_TYPE + "','" + i.DOC_DESC + "','" + i.PAGE_URL.replace("~/", $("#_abspath").val()) + "','" + i.IS_TOKENSYSTEM + "','" + i.GRID_PAGE_URL.replace("~/", $("#_abspath").val()) + "')\">" + i.DOC_DESC + "</a></li>";
                    _subhtml = "";


                    if (_.where(subitems, { PARENT_DOC_ID: i.DOC_ID, DOC_ID_TYPE: 'D' }).length > 0) {

                    _subhtml = "<li class=\"submodulelistli list-group-item\" id=\"li_" + i.DOC_ID + "\"><div class=\"submodulelistdiv\"><ul class=\"submodulelist\">";
                    _.each(_.where(subitems, { PARENT_DOC_ID: i.DOC_ID, PARENT_DOC_ID_TYPE: 'M' }), function (k, l) {

                    _subhtml += "<li  class=\"list-group-item\"><a onclick=\"ManageS(" + i.PARENT_DOC_ID + "," + i.DOC_ID + "," + k.DOC_ID + ",'" + k.DOC_TYPE + "','" + k.DOC_DESC + "','" + k.PAGE_URL.replace("~/", $("#_abspath").val()) + "','" + k.IS_TOKENSYSTEM + "','" + k.GRID_PAGE_URL.replace("~/", $("#_abspath").val()) + "')\">" + k.DOC_DESC + "</a></li>";
                    })
                    _subhtml += "</ul></div></li>";

                    }

                    _html += _subhtml;
                    });
                    _html += "</ul>";
                    
                    */

                    var _ds = this.options.datasource;

                    var result_1 = _.groupBy(this.options.datasource, function (obj) {
                        return obj.PARENT_DOC_ID;
                    })


                    var results = _.map(result_1, function (res) {
                        return { name: res[0].PARENT_DOC_DESC, id: res[0].PARENT_DOC_ID }
                    });


                    console.log(results);

                    var _html = "";
                    var submodule = '';
                    var document = '';
                    var finalmodule = '';
                    var gr = '';
                    if (($(this.$element.context.parentElement.parentElement).find('#hdnlbedstatusID')[0].value == 6) && ($(this.$element.context.parentElement.parentElement).find('#hdnldschrgstatus')[0].value == 'D' || $(this.$element.context.parentElement.parentElement).find('#hdnldschrgstatus')[0].value == 'W')) {
                        _html += "<ul class=\"popoverchildelement\"><li onclick=\"return bedvecate();\">Vacate Bed</li></ul>";
                    }
                    else {
                        $(results).each(function (i, j) {

                            if (j.id != 146) {

                                _html += "<li class=\"popoverparentelement\"><a>" + j.name + "</a><ul class=\"popoverchildelement\" style=\"display:none;\">";
                                $(_.where(_ds, { PARENT_DOC_ID: j.id })).each(function (k, l) {

                                    var redirecturl = "";
                                    var url = l.PAGE_URL.split('/');
                                    var origurl = url[url.length - 1];
                                    var stypid = "0";
                                    var canselid = "'" + "'";
                                    var styp = l.DOC_DESC.toUpperCase();
                                    var DocFormCd = l.DOC_FORM_CD;
                                    var dUrl = l.PAGE_URL.substring(2, l.PAGE_URL.lastIndexOf(l.PAGE_URL.split('/')[(l.PAGE_URL.split('/')).length - 1]));
                                    if (dUrl != 'Private/NurseStation/' && dUrl != 'private/NurseStation/' && dUrl != 'private/nursestation/' && dUrl != 'Private/nursestation/') {
                                        stypid = "'" + url[2] + "'";
                                        canselid = "'Other'";
                                        if (DocFormCd == "NSTBEDRELSE" || DocFormCd == "NSTPRESPRNT" || DocFormCd == 'NSTCNCLTRNSF') {
                                            stop = "DNT";
                                        }
                                        //                                        else if (DocFormCd == "NSTDBEDACK") {
                                        //                                            $('#ctl00_ContentPlaceHolder1_hdnTranSecurity').val(l.ISSECURITYCD);
                                        //                                            $('#ctl00_ContentPlaceHolder1_hdnBedAckSaveDocID').val(l.DOC_ID);
                                        //                                            $('#ctl00_ContentPlaceHolder1_hdnSubModeId').val(SubModules[m]);
                                        //                                            stop = "DNT";
                                        //                                        }
                                        else if (DocFormCd == "NSTSRVBILLS") {
                                            redirecturl = "'" + _iniUrl + dUrl + origurl + '&DOC_ID=' + l.DOC_ID + "'";
                                            stop = "";
                                        }
                                        else {
                                            redirecturl = "'" + _iniUrl + dUrl + origurl + '?&DOC_ID=' + l.DOC_ID + "'";
                                            stop = "";
                                        }
                                    }
                                    else {

                                        var styp = l.DOC_DESC.toUpperCase();

                                        var DocFrmCD = l.DOC_FORM_CD;
                                        switch (DocFrmCD) {
                                            case "NSTSRVIND": stypid = "8";
                                                break;
                                            case "NSTPRCIND": stypid = "3";
                                                break;
                                            case "NSTLABORDR": stypid = "2";
                                                break;
                                            case "NSTDIAGIND": stypid = "2";
                                                break;
                                            case "NSTSRVPRDR": stypid = "8";
                                                break;
                                            case "NSTPROORDR": stypid = "3";
                                                break;
                                            case "NSTDIAGORDR": stypid = "2";
                                                break;
                                            case "NSTSRVBILLS": stypid = "0";
                                                break;
                                            case "NSTDRGORDR": stypid = "1";
                                                break;
                                            case "NSTDRGDOSAGE": stypid = "1";
                                                break;
                                            case "NSTDRGIND": stypid = "1";
                                                break;
                                            case "NSTDCVST": stypid = "4";
                                                break;
                                            case "NSTDCVSTREQ": stypid = "1";
                                                break;
                                            case "NSTCRSDCIND": stypid = "1";
                                                canselid = "1";
                                                break;
                                            case "NSTBLDREQ": stypid = "0";
                                                break;
                                            case "NSTPHYREQ": stypid = "0";
                                                break;
                                            case "NSTDSCHRGPRCSTA": stypid = "9";
                                                break;
                                            case "NSTPATBEDVAC": stypid = "BV";
                                                canselid = "1";
                                                break;
                                            case "NSTNSWBD": stypid = "10";
                                                break;
                                            case "NSTPATLBL": stypid = "11";
                                                break;
                                            case "NSTMRDREQ": stypid = "12";
                                                break;
                                            case "NSTNURORDER": stypid = "15";
                                                break;
                                            case "NSTADMNCANREQ": stypid = "16";
                                                break;

                                        }

                                        //                                    switch (styp) {
                                        //                                        case "SERVICE INDENTS": stypid = "8";
                                        //                                            break;
                                        //                                        case "PROCEDURE INDENT": stypid = "3";
                                        //                                            break;
                                        //                                        case "LAB INDENT": stypid = "2";
                                        //                                            break;
                                        //                                        case "SERVICE BILLS": stypid = "0";
                                        //                                            break;
                                        //                                        case "DRUG INDENT": stypid = "1";
                                        //                                            break;
                                        //                                        case "DOCTORVISITS": stypid = "4";
                                        //                                            break;
                                        //                                        case "REQUEST FOR DOCTORVISITS": stypid = "1";
                                        //                                            break;
                                        //                                        case "CROSS DOCTOR INDENT": stypid = "1";
                                        //                                            canselid = "1";
                                        //                                            break;
                                        //                                        case "BLOOD REQUEST": stypid = "0";
                                        //                                            break;
                                        //                                        case "PHYSIOTHERAPY  REQUEST": stypid = "0";
                                        //                                            break;
                                        //                                        case "DISCHARGE PROCESS STATUS": stypid = "9";
                                        //                                            break;
                                        //                                        case "PATIENT BED VECATE": stypid = "BV";
                                        //                                            canselid = "1";
                                        //                                            break;
                                        //                                        case "NURSE WHITE BOARD": stypid = "10";
                                        //                                            break;
                                        //                                        case "PATIENT LABEL": stypid = "11";
                                        //                                            break;
                                        //                                        case "MRD REQUEST": stypid = "12";
                                        //                                            break;
                                        //                                    }






                                        if (stypid == "0") {
                                            //redirecturl = "'" + origurl + '?DOC_ID=' + l.DOC_ID + "'";
                                            redirecturl = "'" + _iniUrl + dUrl + origurl + '?&DOC_ID=' + l.DOC_ID + "'";
                                        }
                                        else if (stypid == "9" || stypid == "10" || stypid == "11" || stypid == "12") {
                                            redirecturl = "'" + _iniUrl + dUrl + origurl + '?&DOC_ID=' + l.DOC_ID + "'";
                                            //redirecturl = "'" + origurl + '?DOC_ID=' + l.DOC_ID + "'";
                                        }
                                        else
                                            redirecturl = "'" + _iniUrl + dUrl + origurl + '?styp=' + stypid + '&ID=IMR Service Entry&DOC_ID=' + l.DOC_ID + "'";
                                    }
                                    //  redirecturl = "'" + origurl + '?styp=' + stypid + '&ID=IMR Service Entry&DOC_ID=' + l.DOC_ID + "'";
                                    var PageTitle = "'" + l.DOC_DESC + "'";
                                    var dtype = "'" + l.PARENT_MODULE_ID + '$' + l.PARENT_DOC_ID + '$' + l.DOC_ID + "'";
                                    document += '<li onclick="return redirecturl(' + redirecturl + ',' + stypid + ',' + canselid + "," + dtype + ',' + PageTitle + ');" >' + l.DOC_DESC + '</li>'
                                    submodule = '<li class="root"  onclick="return show(this);">' + l.PARENT_DOC_DESC + '<div class="children" style="display:none;"><ul>' + document + '</ul></div></li>'
                                    finalmodule = '';
                                    finalmodule += document;
                                    document = '';
                                    submodule = '';
                                    gr = finalmodule
                                    _html += gr;
                                });
                                _html += "</ul></li>";
                            }
                        });
                    }


                    /*
                    _searchoptions.find("ul#options").empty();
                    var _HTML = "";
                    $(results).each(function (i, j) {
                    if (j.id != 146) {
                    _HTML = "";
                    _HTML = "<li class=\"parent\">" + j.name + "<ul>";
                    $(_.where(_nurseDatasource, { PARENT_DOC_ID: j.id })).each(function (k, l) {
                    _HTML += "<li class=\"child\">" + l.DOC_DESC + "</li>";
                    });
                    _HTML += "</ul></li>";
                    _searchoptions.find("ul#options").append(_HTML);
                    }

                    });
                    */




                    /*
                    var _collection = _.where(this.options.datasource, { PARENT_DOC_ID: refCode, PARENT_DOC_ID_TYPE: 'M' });
                    _.each(_collection, function (i, j) {

                    if (i.PARENT_MODULE_ID != null)
                    _html += "<li class=\"list-group-item\"><a onclick=\"toggleChild(" + i.DOC_ID + ")\">" + i.DOC_DESC + "</a></li>";
                    else
                    _html += "<li  class=\"list-group-item\"><a onclick=\"ManageS(" + i.PARENT_DOC_ID + "," + i.DOC_ID + "," + i.DOC_ID + ",'" + i.DOC_TYPE + "','" + i.DOC_DESC + "','" + i.PAGE_URL.replace("~/", $("#_abspath").val()) + "','" + i.IS_TOKENSYSTEM + "','" + i.GRID_PAGE_URL.replace("~/", $("#_abspath").val()) + "')\">" + i.DOC_DESC + "</a></li>";
                    _subhtml = "";


                    if (_.where(subitems, { PARENT_DOC_ID: i.DOC_ID, DOC_ID_TYPE: 'D' }).length > 0) {

                    _subhtml = "<li class=\"submodulelistli list-group-item\" id=\"li_" + i.DOC_ID + "\"><div class=\"submodulelistdiv\"><ul class=\"submodulelist\">";
                    _.each(_.where(subitems, { PARENT_DOC_ID: i.DOC_ID, PARENT_DOC_ID_TYPE: 'M' }), function (k, l) {

                    _subhtml += "<li  class=\"list-group-item\"><a onclick=\"ManageS(" + i.PARENT_DOC_ID + "," + i.DOC_ID + "," + k.DOC_ID + ",'" + k.DOC_TYPE + "','" + k.DOC_DESC + "','" + k.PAGE_URL.replace("~/", $("#_abspath").val()) + "','" + k.IS_TOKENSYSTEM + "','" + k.GRID_PAGE_URL.replace("~/", $("#_abspath").val()) + "')\">" + k.DOC_DESC + "</a></li>";
                    })
                    _subhtml += "</ul></div></li>";

                    }

                    _html += _subhtml;
                    });
                    _html += "</ul>";*/
                    var prevselmodid = '';

                    setTimeout(function () {
                        $(".popoverparentelement a").click(function () {

                            if (prevselmodid == "") {
                                $(this).next(".popoverchildelement").toggle();
                                prevselmodid = $(this).next(".popoverchildelement");
                            }
                            else {
                                prevselmodid.toggle();
                                if (prevselmodid.context.innerText != $(this).next(".popoverchildelement").context.innerText) {
                                    $(this).next(".popoverchildelement").toggle();
                                    prevselmodid = $(this).next(".popoverchildelement");
                                }
                                else
                                    prevselmodid = "";
                            }

                            // prevselmodid != '' ? prevselmodid.toggle() : '';
                            // if (prevselmodid != $(this).next(".popoverchildelement").context.innerText)
                            //$(this).next(".popoverchildelement").toggle();
                            //prevselmodid = $(this).next(".popoverchildelement").context.innerHTML;
                        });
                    }, 1000)

                    this.content = _html;
                    if (!this.content) {
                        var $next = this.$element.next();
                        if ($next && $next.hasClass(pluginClass + '-content')) {
                            this.content = $next;
                        }
                    }
                }
                return this.content;
            },
            setContent: function (content) {
                var $target = this.getTarget();
                var $ct = this.getContentElement();
                if (typeof content === 'string') {
                    $ct.html(content);
                } else if (content instanceof $) {
                    $ct.html('');
                    //Don't want to clone too many times.
                    if (!this.options.cache) {
                        content.clone(true, true).removeClass(pluginClass + '-content').appendTo($ct);
                    } else {
                        content.removeClass(pluginClass + '-content').appendTo($ct);
                    }
                }
                this.$target = $target;
            },
            isAsync: function () {
                return this.options.type === 'async';
            },
            setContentASync: function (content) {
                var that = this;
                if (this.xhr) {
                    return;
                }
                this.xhr = $.ajax({
                    url: this.getUrl(),
                    type: this.options.async.type,
                    cache: this.getCache(),
                    beforeSend: function (xhr) {
                        if (that.options.async.before) {
                            that.options.async.before(that, xhr);
                        }
                    },
                    success: function (data) {
                        that.bindBodyEvents();
                        if (content && $.isFunction(content)) {
                            that.content = content.apply(that.$element[0], [data]);
                        } else {
                            that.content = data;
                        }
                        that.setContent(that.content);
                        var $targetContent = that.getContentElement();
                        $targetContent.removeAttr('style');
                        that.displayContent();
                        if (that.options.async.success) {
                            that.options.async.success(that, data);
                        }
                    },
                    complete: function () {
                        that.xhr = null;
                    },
                    error: function (xhr, data) {
                        if (that.options.async.error) {
                            that.options.async.error(that, xhr, data);
                        }
                    }
                });
            },

            bindBodyEvents: function () {
                if (_isBodyEventHandled) {
                    return;
                }
                if (this.options.dismissible && this.getTrigger() === 'click') {
                    $document.off('keyup.webui-popover').on('keyup.webui-popover', $.proxy(this.escapeHandler, this));
                    $document.off('click.webui-popover touchend.webui-popover')
                        .on('click.webui-popover touchend.webui-popover', $.proxy(this.bodyClickHandler, this));
                } else if (this.getTrigger() === 'hover') {
                    $document.off('touchend.webui-popover')
                        .on('touchend.webui-popover', $.proxy(this.bodyClickHandler, this));
                }
            },

            /* event handlers */
            mouseenterHandler: function (e) {
                var self = this;

                if (e && this.options.selector) {
                    self = this.delegate(e.currentTarget);
                }

                if (self._timeout) {
                    clearTimeout(self._timeout);
                }
                self._enterTimeout = setTimeout(function () {
                    if (!self.getTarget().is(':visible')) {
                        self.show();
                    }
                }, this.getDelayShow());
            },
            mouseleaveHandler: function () {
                var self = this;
                clearTimeout(self._enterTimeout);
                //key point, set the _timeout  then use clearTimeout when mouse leave
                self._timeout = setTimeout(function () {
                    self.hide();
                }, this.getHideDelay());
            },
            escapeHandler: function (e) {
                if (e.keyCode === 27) {
                    this.hideAll();
                }
            },

            bodyClickHandler: function (e) {
                _isBodyEventHandled = true;
                var canHide = true;
                for (var i = 0; i < _srcElements.length; i++) {
                    var pop = getPopFromElement(_srcElements[i]);
                    if (pop && pop._opened) {
                        var offset = pop.getTarget().offset();
                        var popX1 = offset.left;
                        var popY1 = offset.top;
                        var popX2 = offset.left + pop.getTarget().width();
                        var popY2 = offset.top + pop.getTarget().height();
                        var pt = pointerEventToXY(e);
                        var inPop = pt.x >= popX1 && pt.x <= popX2 && pt.y >= popY1 && pt.y <= popY2;
                        if (inPop) {
                            canHide = false;
                            break;
                        }
                    }
                }
                if (canHide) {
                    hideAllPop();
                }
            },

            /*
            targetClickHandler: function() {
            this._targetclick = true;
            },
            */

            //reset and init the target events;
            initTargetEvents: function () {
                if (this.getTrigger() === 'hover') {
                    this.$target
                        .off('mouseenter mouseleave')
                        .on('mouseenter', $.proxy(this.mouseenterHandler, this))
                        .on('mouseleave', $.proxy(this.mouseleaveHandler, this));
                }
                this.$target.find('.close').off('click').on('click', $.proxy(this.hide, this, true));
                //this.$target.off('click.webui-popover').on('click.webui-popover', $.proxy(this.targetClickHandler, this));
            },
            /* utils methods */
            //caculate placement of the popover
            getPlacement: function (pos) {
                var 
                    placement,
                    container = this.options.container,
                    clientWidth = container.innerWidth(),
                    clientHeight = container.innerHeight(),
                    scrollTop = container.scrollTop(),
                    scrollLeft = container.scrollLeft(),
                    pageX = Math.max(0, pos.left - scrollLeft),
                    pageY = Math.max(0, pos.top - scrollTop);
                //arrowSize = 20;

                //if placement equals autoï¼Œcaculate the placement by element information;
                if (typeof (this.options.placement) === 'function') {
                    placement = this.options.placement.call(this, this.getTarget()[0], this.$element[0]);
                } else {
                    placement = this.$element.data('placement') || this.options.placement;
                }

                var isH = placement === 'horizontal';
                var isV = placement === 'vertical';
                var detect = placement === 'auto' || isH || isV;

                if (detect) {
                    if (pageX < clientWidth / 3) {
                        if (pageY < clientHeight / 3) {
                            placement = isH ? 'right-bottom' : 'bottom-right';
                        } else if (pageY < clientHeight * 2 / 3) {
                            if (isV) {
                                placement = pageY <= clientHeight / 2 ? 'bottom-right' : 'top-right';
                            } else {
                                placement = 'right';
                            }
                        } else {
                            placement = isH ? 'right-top' : 'top-right';
                        }
                        //placement= pageY>targetHeight+arrowSize?'top-right':'bottom-right';
                    } else if (pageX < clientWidth * 2 / 3) {
                        if (pageY < clientHeight / 3) {
                            if (isH) {
                                placement = pageX <= clientWidth / 2 ? 'right-bottom' : 'left-bottom';
                            } else {
                                placement = 'bottom';
                            }
                        } else if (pageY < clientHeight * 2 / 3) {
                            if (isH) {
                                placement = pageX <= clientWidth / 2 ? 'right' : 'left';
                            } else {
                                placement = pageY <= clientHeight / 2 ? 'bottom' : 'top';
                            }
                        } else {
                            if (isH) {
                                placement = pageX <= clientWidth / 2 ? 'right-top' : 'left-top';
                            } else {
                                placement = 'top';
                            }
                        }
                    } else {
                        //placement = pageY>targetHeight+arrowSize?'top-left':'bottom-left';
                        if (pageY < clientHeight / 3) {
                            placement = isH ? 'left-bottom' : 'bottom-left';
                        } else if (pageY < clientHeight * 2 / 3) {
                            if (isV) {
                                placement = pageY <= clientHeight / 2 ? 'bottom-left' : 'top-left';
                            } else {
                                placement = 'left';
                            }
                        } else {
                            placement = isH ? 'left-top' : 'top-left';
                        }
                    }
                } else if (placement === 'auto-top') {
                    if (pageX < clientWidth / 3) {
                        placement = 'top-right';
                    } else if (pageX < clientWidth * 2 / 3) {
                        placement = 'top';
                    } else {
                        placement = 'top-left';
                    }
                } else if (placement === 'auto-bottom') {
                    if (pageX < clientWidth / 3) {
                        placement = 'bottom-right';
                    } else if (pageX < clientWidth * 2 / 3) {
                        placement = 'bottom';
                    } else {
                        placement = 'bottom-left';
                    }
                } else if (placement === 'auto-left') {
                    if (pageY < clientHeight / 3) {
                        placement = 'left-top';
                    } else if (pageY < clientHeight * 2 / 3) {
                        placement = 'left';
                    } else {
                        placement = 'left-bottom';
                    }
                } else if (placement === 'auto-right') {
                    if (pageY < clientHeight / 3) {
                        placement = 'right-bottom';
                    } else if (pageY < clientHeight * 2 / 3) {
                        placement = 'right';
                    } else {
                        placement = 'right-top';
                    }
                }
                return placement;
            },
            getElementPosition: function () {
                // If the container is the body or normal conatiner, just use $element.offset()
                var elRect = this.$element[0].getBoundingClientRect();
                var container = this.options.container;
                var cssPos = container.css('position');

                if (container.is(document.body) || cssPos === 'static') {
                    return $.extend({}, this.$element.offset(), {
                        width: this.$element[0].offsetWidth || elRect.width,
                        height: this.$element[0].offsetHeight || elRect.height
                    });
                    // Else fixed container need recalculate the  position
                } else if (cssPos === 'fixed') {
                    var containerRect = container[0].getBoundingClientRect();
                    return {
                        top: elRect.top - containerRect.top + container.scrollTop(),
                        left: elRect.left - containerRect.left + container.scrollLeft(),
                        width: elRect.width,
                        height: elRect.height
                    };
                } else if (cssPos === 'relative') {
                    return {
                        top: this.$element.offset().top - container.offset().top,
                        left: this.$element.offset().left - container.offset().left,
                        width: this.$element[0].offsetWidth || elRect.width,
                        height: this.$element[0].offsetHeight || elRect.height
                    };
                }
            },

            getTargetPositin: function (elementPos, placement, targetWidth, targetHeight) {
                var pos = elementPos,
                    container = this.options.container,
                //clientWidth = container.innerWidth(),
                //clientHeight = container.innerHeight(),
                    elementW = this.$element.outerWidth(),
                    elementH = this.$element.outerHeight(),
                    scrollTop = document.documentElement.scrollTop + container.scrollTop(),
                    scrollLeft = document.documentElement.scrollLeft + container.scrollLeft(),
                    position = {},
                    arrowOffset = null,
                    arrowSize = this.options.arrow ? 20 : 0,
                    padding = 10,
                    fixedW = elementW < arrowSize + padding ? arrowSize : 0,
                    fixedH = elementH < arrowSize + padding ? arrowSize : 0,
                    refix = 0,
                    pageH = document.documentElement.clientHeight + scrollTop,
                    pageW = document.documentElement.clientWidth + scrollLeft;

                var validLeft = pos.left + pos.width / 2 - fixedW > 0;
                var validRight = pos.left + pos.width / 2 + fixedW < pageW;
                var validTop = pos.top + pos.height / 2 - fixedH > 0;
                var validBottom = pos.top + pos.height / 2 + fixedH < pageH;


                switch (placement) {
                    case 'bottom':
                        position = {
                            top: pos.top + pos.height,
                            left: pos.left + pos.width / 2 - targetWidth / 2
                        };
                        break;
                    case 'top':
                        position = {
                            top: pos.top - targetHeight,
                            left: pos.left + pos.width / 2 - targetWidth / 2
                        };
                        break;
                    case 'left':
                        position = {
                            top: pos.top + pos.height / 2 - targetHeight / 2,
                            left: pos.left - targetWidth
                        };
                        break;
                    case 'right':
                        position = {
                            top: pos.top + pos.height / 2 - targetHeight / 2,
                            left: pos.left + pos.width
                        };
                        break;
                    case 'top-right':
                        position = {
                            top: pos.top - targetHeight,
                            left: validLeft ? pos.left - fixedW : padding
                        };
                        arrowOffset = {
                            left: validLeft ? Math.min(elementW, targetWidth) / 2 + fixedW : _offsetOut
                        };
                        break;
                    case 'top-left':
                        refix = validRight ? fixedW : -padding;
                        position = {
                            top: pos.top - targetHeight,
                            left: pos.left - targetWidth + pos.width + refix
                        };
                        arrowOffset = {
                            left: validRight ? targetWidth - Math.min(elementW, targetWidth) / 2 - fixedW : _offsetOut
                        };
                        break;
                    case 'bottom-right':
                        position = {
                            top: pos.top + pos.height,
                            left: validLeft ? pos.left - fixedW : padding
                        };
                        arrowOffset = {
                            left: validLeft ? Math.min(elementW, targetWidth) / 2 + fixedW : _offsetOut
                        };
                        break;
                    case 'bottom-left':
                        refix = validRight ? fixedW : -padding;
                        position = {
                            top: pos.top + pos.height,
                            left: pos.left - targetWidth + pos.width + refix
                        };
                        arrowOffset = {
                            left: validRight ? targetWidth - Math.min(elementW, targetWidth) / 2 - fixedW : _offsetOut
                        };
                        break;
                    case 'right-top':
                        refix = validBottom ? fixedH : -padding;
                        position = {
                            top: pos.top - targetHeight + pos.height + refix,
                            left: pos.left + pos.width
                        };
                        arrowOffset = {
                            top: validBottom ? targetHeight - Math.min(elementH, targetHeight) / 2 - fixedH : _offsetOut
                        };
                        break;
                    case 'right-bottom':
                        position = {
                            top: validTop ? pos.top - fixedH : padding,
                            left: pos.left + pos.width
                        };
                        arrowOffset = {
                            top: validTop ? Math.min(elementH, targetHeight) / 2 + fixedH : _offsetOut
                        };
                        break;
                    case 'left-top':
                        refix = validBottom ? fixedH : -padding;
                        position = {
                            top: pos.top - targetHeight + pos.height + refix,
                            left: pos.left - targetWidth
                        };
                        arrowOffset = {
                            top: validBottom ? targetHeight - Math.min(elementH, targetHeight) / 2 - fixedH : _offsetOut
                        };
                        break;
                    case 'left-bottom':
                        position = {
                            top: validTop ? pos.top - fixedH : padding,
                            left: pos.left - targetWidth
                        };
                        arrowOffset = {
                            top: validTop ? Math.min(elementH, targetHeight) / 2 + fixedH : _offsetOut
                        };
                        break;

                }
                position.top += this.getOffsetTop();
                position.left += this.getOffsetLeft();

                return {
                    position: position,
                    arrowOffset: arrowOffset
                };
            }
        };
        $.fn[pluginName] = function (options, noInit) {
            var results = [];
            var $result = this.each(function () {

                var webuiPopover = $.data(this, 'plugin_' + pluginName);
                if (!webuiPopover) {
                    if (!options) {
                        webuiPopover = new WebuiPopover(this, null);
                    } else if (typeof options === 'string') {
                        if (options !== 'destroy') {
                            if (!noInit) {
                                webuiPopover = new WebuiPopover(this, null);
                                results.push(webuiPopover[options]());
                            }
                        }
                    } else if (typeof options === 'object') {
                        webuiPopover = new WebuiPopover(this, options);
                    }
                    $.data(this, 'plugin_' + pluginName, webuiPopover);
                } else {
                    if (options === 'destroy') {
                        webuiPopover.destroy();
                    } else if (typeof options === 'string') {
                        results.push(webuiPopover[options]());
                    }
                }
            });
            return (results.length) ? results : $result;
        };

        //Global object exposes to window.
        var webuiPopovers = (function () {
            var _hideAll = function () {
                hideAllPop();
            };
            var _create = function (selector, options) {
                options = options || {};
                $(selector).webuiPopover(options);
            };
            var _isCreated = function (selector) {
                var created = true;
                $(selector).each(function (item) {
                    created = created && $(item).data('plugin_' + pluginName) !== undefined;
                });
                return created;
            };
            var _show = function (selector, options) {
                if (options) {
                    $(selector).webuiPopover(options).webuiPopover('show');
                } else {
                    $(selector).webuiPopover('show');
                }
            };
            var _hide = function (selector) {
                $(selector).webuiPopover('hide');
            };
            var _updateContent = function (selector, content) {
                var pop = $(selector).data('plugin_' + pluginName);
                if (pop) {
                    var cache = pop.getCache();
                    pop.options.cache = false;
                    pop.options.content = content;
                    if (pop._opened) {
                        pop._opened = false;
                        pop.show();
                    } else {
                        if (pop.isAsync()) {
                            pop.setContentASync(content);
                        } else {
                            pop.setContent(content);
                        }
                    }
                    pop.options.cache = cache;
                }
            };

            return {
                show: _show,
                hide: _hide,
                create: _create,
                isCreated: _isCreated,
                hideAll: _hideAll,
                updateContent: _updateContent
            };
        })();
        window.WebuiPopovers = webuiPopovers;
    }));
})(window, document);