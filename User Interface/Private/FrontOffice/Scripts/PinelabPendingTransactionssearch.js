(function ($, window, document, undefined) {
    $.fn.quicksearch = function (target, opt) {

        var timeout, cache, rowcache, jq_results, val = '', e = this,
		options = $.extend({
		    delay: 100,
		    selector: null,
		    stripeRows: null,
		    loader: null,
		    noResults: '',
		    matchedResultsCount: 0,
		    bind: 'keyup',
		    onBefore: function () {
		        return;
		    },
		    onAfter: function () {
		        return;
		    },
		    show: function () {
		        this.style.display = "";
		    },
		    hide: function () {
		        this.style.display = "none";
		    },
		    prepareQuery: function (val) {
		        //return val.toLowerCase().split(' ');
		        return val.split(' ');
		    },
		    testQuery: function (query, txt, _row) {
		        for (var i = 0; i < query.length; i += 1) {
		            //	
		            if (txt.indexOf(query[i]) === -1) {

		                return false;
		            }
		        }
		        return true;
		    }
		}, opt);

        this.go = function () {
            //
            var i = 0,
				numMatchedRows = 0,
				noResults = true,
				query = options.prepareQuery(val),
				val_empty = (val.replace(' ', '').length === 0);
            //
            for (var i = 0, len = rowcache.length; i < len; i++) {
                //
                if (val_empty || options.testQuery(query, cache[i], rowcache[i])) {
                    //
                    options.show.apply(rowcache[i]);
                    noResults = false;
                    numMatchedRows++;

                } else {
                    //
                    if ($(rowcache[i]).find("[id*=lblcommunication]").text().trim() != '' || $(rowcache[i]).find("[id*=txtrequestno]").text().trim() != '' || $(rowcache[i]).find("[id*=lblumrno]").text().trim() != '' || $(rowcache[i]).find("[id*=lbladmnno]").text().trim() != '' || $(rowcache[i]).find("[id*=lblbillno]").text().trim() != '' || $(rowcache[i]).find("[id*=lbldisplayname]").text().trim() != '' || $(rowcache[i]).find("[id*=lbltransactionno]").text().trim() != '' || $(rowcache[i]).find("[id*=lbltereminal]").text().trim() != '' || $(rowcache[i]).find("[id*=lblpaymentmode]").text().trim() != '' || $(rowcache[i]).find("[id*=lblmobileno]").text().trim() != '')
                        options.hide.apply(rowcache[i]);
                }
            }

            if (noResults) {
                this.results(false);
            } else {
                this.results(true);
                this.stripe();
            }

            this.matchedResultsCount = numMatchedRows;
            this.loader(false);
            options.onAfter();

            return this;
        };

        /*
        * External API so that users can perform search programatically. 
        * */
        this.search = function (submittedVal) {
            val = submittedVal;
            e.trigger();
        };

        /*
        * External API to get the number of matched results as seen in 
        * https://github.com/ruiz107/quicksearch/commit/f78dc440b42d95ce9caed1d087174dd4359982d6
        * */
        this.currentMatchedResults = function () {
            return this.matchedResultsCount;
        };

        this.stripe = function () {

            if (typeof options.stripeRows === "object" && options.stripeRows !== null) {
                //
                var joined = options.stripeRows.join(' ');
                var stripeRows_length = options.stripeRows.length;

                jq_results.not(':hidden').each(function (i) {
                    $(this).removeClass(joined).addClass(options.stripeRows[i % stripeRows_length]);
                });
            }

            return this;
        };

        this.strip_html = function (input) {
            var output = input.replace(new RegExp('<[^<]+\>', 'g'), "");
            output = $.trim(output.toLowerCase());
            return output;
        };

        this.results = function (bool) {
            //
            if (typeof options.noResults === "string" && options.noResults !== "") {
                if (bool) {
                    $(options.noResults).hide();
                } else {
                    $(options.noResults).show();
                }
            }
            return this;
        };

        this.loader = function (bool) {
            if (typeof options.loader === "string" && options.loader !== "") {
                (bool) ? $(options.loader).show() : $(options.loader).hide();
            }
            return this;
        };

        this.cache = function () {
            //	
            jq_results = $(target);

            if (typeof options.noResults === "string" && options.noResults !== "") {
                jq_results = jq_results.not(options.noResults);
            }

            var t = (typeof options.selector === "string") ? jq_results.find(options.selector) : $(target).not(options.noResults);
            cache = t.map(function () {
                return e.strip_html(this.innerHTML);
            });

            rowcache = jq_results.map(function () {
                return this;
            });

            /*
            * Modified fix for sync-ing "val". 
            * Original fix https://github.com/michaellwest/quicksearch/commit/4ace4008d079298a01f97f885ba8fa956a9703d1
            * */
            val = val || this.val() || "";

            return this.go();
        };

        this.trigger = function () {
            this.loader(true);
            options.onBefore();

            window.clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                e.go();
            }, options.delay);

            return this;
        };

        this.cache();
        this.results(true);
        this.stripe();
        this.loader(false);

        return this.each(function () {

            /*
            * Changed from .bind to .on.
            * */
            $(this).on(options.bind, function () {

                val = $(this).val();
                e.trigger();
            });
        });

    };

} (jQuery, this, document));






function SearchData(obj) {
    $(obj).quicksearch("[id*=gvStatementpeningBills] tr:not(:has(th))", {
        'testQuery': function (query, txt, row) {
            var controlid = obj.id.substring(obj.id.indexOf('-') + 1).replace('_', '');
            var lblOrText = obj.id.substring(obj.id.indexOf('*') + 1, obj.id.indexOf('-'));
            var dataType = obj.id.substring(0, obj.id.indexOf('*'));
            var rowIndex = $(obj).parent().parent().index();
            if (dataType == 'date')
                return ((lblOrText == "val" ? $(row).children(":eq(" + rowIndex + ")").find('[id*=' + controlid + ']').val().indexOf(query[0])
                : $(row).children(":eq(" + rowIndex + ")").find('[id*=' + controlid + ']').text().indexOf(query[0])) != -1);
            else
                return ((lblOrText == "val" ? $(row).children(":eq(" + rowIndex + ")").find('[id*=' + controlid + ']').val().toLowerCase().indexOf(query[0].toLowerCase())
                : $(row).children(":eq(" + rowIndex + ")").find('[id*=' + controlid + ']').text().toLowerCase().indexOf(query[0].toLowerCase())) != -1);
        }
    });
}


