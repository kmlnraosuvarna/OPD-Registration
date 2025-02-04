
!function (a, b) { "use strict"; "function" == typeof define && define.amd ? define("RowSorter", b) : "object" == typeof exports ? module.exports = b() : a.RowSorter = b() } (
this, function () {

    "use strict"; function a(b, e) {

        if (!(this instanceof a)) return new a(b, e); if ("string" == typeof b && (b = c(b)), d(b, "table") === !1) throw new 
Error("Table not found.");
        return b[r] instanceof a ? b[r] : (this._options = l(s, e), this._table = b, this._tbody = b, this._rows = [], this._lastY = !1,

this._draggingRow = null, this._firstTouch = !0, this._lastSort = null, this._ended = !0,
this._b_mousedown = this._mousedown.bind(this),
this._b_mousemove = this._mousemove.bind(this),
this._b_mouseup = this._mouseup.bind(this),
this._b_touchstart = this._touchstart.bind(this),
 this._b_touchmove = this._touchmove.bind(this),
 this._b_touchend = this._touchend.bind(this),
this._touchId = null,
this._table[r] = this,
 void this.init())
    }
    function b(b) { return b instanceof a ? b : ("string" == typeof b && (b = c(b)), d(b, "table") && r in b && b[r] instanceof a ? b[r] : null) }
    function c(a) { var b = m(document, a); return b.length > 0 && d(b[0], "table") ? b[0] : null }
    function d(a, b) { return a && "object" == typeof a && "nodeName" in a && a.nodeName === b.toUpperCase() }
    function e(a, b, c) {
        var d = a.parentNode; 1 === c ? b.nextSibling ? d.insertBefore(a, b.nextSibling) : d.appendChild(a) : -1 === c &&
    d.insertBefore(a, b)
    } function f(a, b) { for (var c = a.rows, d = c.length, e = 0; d > e; e++) if (b === c[e]) return e; return -1 }
    function g(a, b, c) { a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener(b, c, !1) }
    function h(a, b, c) { a.detachEvent ? a.detachEvent("on" + b, c) : a.removeEventListener(b, c, !1) }
    function i(a, b) { if (b = b.trim(), "" === b) return !1; if (-1 !== b.indexOf(" ")) { for (var c = b.replace(/\s+/g, " ").split(" "), d = 0, e = c.length; e > d; d++) if (i(a, c[d]) === !1) return !1; return !0 } return a.classList ? !!a.classList.contains(b) : !!a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)")) } function j(a, b) { if (b = b.trim(), "" !== b) if (-1 === b.indexOf(" ")) i(a, b) === !1 && (a.classList ? a.classList.add(b) : a.className += " " + b); else for (var c = b.replace(/\s+/g, " ").split(" "), d = 0, e = c.length; e > d; d++) j(a, c[d]) } function k(a, b) { if (b = b.trim(), "" !== b) if (-1 === b.indexOf(" ")) i(a, b) && (a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(\\s|^)" + b + "(\\s|$)"), " ")); else for (var c = b.replace(/\s+/g, " ").split(" "), d = 0, e = c.length; e > d; d++) k(a, c[d]) }
    function l(a, b) {
        if (p) return p.extend({}, a, b); var c, d = {}; for (c in a) a.hasOwnProperty(c) && (d[c] = a[c]);
        if (b && "[object Object]" === Object.prototype.toString.call(b)) for (c in b) b.hasOwnProperty(c) && (d[c] = b[c]); return d
    } function m(a, b) { return p ? p.makeArray(p(a).find(b)) : a.querySelectorAll(b) }
    function n(a, b) {
        var c = 0, d = 20, e = a; for (b = b.toLowerCase(); e.tagName && e.tagName.toLowerCase() !== b; )
        { if (c > d || !e.parentNode) return null; e = e.parentNode, c++ } return e
    }
    function o(a, b) { for (var c = 0, d = b.length; d > c; c++) if (a === b[c]) return c; return -1 }
    String.prototype.trim || (String.prototype.trim = function () { return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") }),
      Function.prototype.bind ||
    (Function.prototype.bind = function (a) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var b = Array.prototype.slice.call(arguments, 1), c = this,
     d = function () { }, e = function ()
     { return c.apply(this instanceof d ? this : a, b.concat(Array.prototype.slice.call(arguments))) };
        return this.prototype && (d.prototype = this.prototype), e.prototype = new d, e
    });



    var p = window.jQuery || !1, q = !!("ontouchstart" in document),
     r = "data-rowsorter", s = { handler: null, tbody: !0, tableClass: "sorting-table",
         dragClass: "sorting-row",
         stickTopRows: 0,
         stickBottomRows: 0,
         onDragStart: null, onDrop: null
     };



    return a.prototype.init = function () {
  
        if (this._options.tbody) { var a = this._table.getElementsByTagName("tbody"); a.length > 0 && (this._tbody = a[0]) }
        if ("function" != typeof this._options.onDragStart && (this._options.onDragStart = null),
"function" != typeof this._options.onDrop && (this._options.onDrop = null), ("number" != typeof this._options.stickTopRows ||
this._options.stickTopRows < 0) && (this._options.stickTopRows = 0), ("number" != typeof this._options.stickBottomRows ||
this._options.stickBottomRows < 0) && (this._options.stickBottomRows = 0), g(this._table, "mousedown", this._b_mousedown),
g(document, "mouseup", this._b_mouseup), q && (g(this._table, "touchstart", this._b_touchstart),
g(this._table, "touchend", this._b_touchend)), "onselectstart" in document)
        { var b = this; g(document, "selectstart", function (a) { var c = a || window.event; return null !== b._draggingRow ? (c.preventDefault ? c.preventDefault() : c.returnValue = !1, !1) : void 0 }) }
    },

     a.prototype._mousedown = function (a) {
 
         var b = a || window.event; return this._start(b.target || b.srcElement,
      b.clientY) ? (b.preventDefault ? b.preventDefault() : b.returnValue = !1, !1) : !0
     },

       a.prototype._touchstart = function (a) {
           if (1 === a.touches.length) {
               var b = a.touches[0], c = document.elementFromPoint(b.clientX, b.clientY);
               if (this._touchId = b.identifier, this._start(c, b.clientY)) return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1
           } return !0
       },


        a.prototype._start = function (a, b) {
            if (this._draggingRow && this._end(), this._rows = this._tbody.rows, this._rows.length < 2) return !1;
            if (this._options.handler) { var c = m(this._table, this._options.handler); if (!c || -1 === o(a, c)) return !1 } var d = n(a, "tr"),
     e = f(this._tbody, d); return -1 === e || this._options.stickTopRows > 0 && e < this._options.stickTopRows ||
     this._options.stickBottomRows > 0 && e >= this._rows.length - this._options.stickBottomRows ? !1 : (this._draggingRow = d,
     this._options.tableClass && j(this._table, this._options.tableClass),
     this._options.dragClass && j(this._draggingRow, this._options.dragClass), this._oldIndex = e,
     this._options.onDragStart && this._options.onDragStart(this._tbody, this._draggingRow, this._oldIndex), this._lastY = b,
     this._ended = !1, g(this._table, "mousemove", this._b_mousemove), q && g(this._table, "touchmove", this._b_touchmove), !0)
        },



     a.prototype._mousemove = function (a) {
        
         var b = a || window.event; return this._move(b.target || b.srcElement, b.clientY), !0
     },


      a.prototype._touchmove = function (a) {
        
          if (1 === a.touches.length)
          { var b = a.touches[0], c = document.elementFromPoint(b.clientX, b.clientY); this._touchId === b.identifier && this._move(c, b.clientY) }
          return !0
      },



      a.prototype._move = function (a, b) {
         
          if (this._draggingRow) {
              var c = b > this._lastY ? 1 : b < this._lastY ? -1 : 0; if (0 !== c) {
                  var d = n(a, "tr"); if (d && d !== this._draggingRow && -1 !== o(d, this._rows)) {
                      var g = !0; if (this._options.stickTopRows > 0 ||
       this._options.stickBottomRows > 0) {
                          var h = f(this._tbody, d); (this._options.stickTopRows > 0 && h < this._options.stickTopRows ||
       this._options.stickBottomRows > 0 && h >= this._rows.length - this._options.stickBottomRows) && (g = !1)
                      } g && e(this._draggingRow, d, c),
        this._lastY = b
                  }
              }
          }
      },



      a.prototype._mouseup = function () {
         
          this._end()
      },

      
    a.prototype._touchend = function (a) {  a.changedTouches.length > 0 && this._touchId === a.changedTouches[0].identifier && this._end() },


        a.prototype._end = function () {
            if (!this._draggingRow) return !0; this._options.tableClass && k(this._table, this._options.tableClass),

        this._options.dragClass && k(this._draggingRow, this._options.dragClass); var a = f(this._tbody, this._draggingRow); if (a !== this._oldIndex) {
                var b = this._lastSort; this._lastSort = { previous: b, newIndex: a, oldIndex: this._oldIndex },

         this._options.onDrop && this._options.onDrop(this._tbody, this._draggingRow, a, this._oldIndex)
            } this._draggingRow = null,

         this._lastY = !1, this._touchId = null, this._ended = !0, h(this._table, "mousemove", this._b_mousemove),
          q && h(this._table, "touchmove", this._b_touchmove)
        },



          a.prototype.revert = function () {
              if (null !== this._lastSort) {
                  var a = this._lastSort, b = a.oldIndex, c = a.newIndex,
          d = this._tbody.rows, e = d.length - 1; d.length > 1 && (e > b ? this._tbody.insertBefore(d[c], d[b + (c > b ? 0 : 1)]) : this._tbody.appendChild(d[c])), this._lastSort = a.previous
              }
          },
           a.prototype.destroy = function () {   this._table[r] = null, this._ended === !1 && this._end(), h(this._table, "mousedown", this._b_mousedown), h(document, "mouseup", this._b_mouseup), q && (h(this._table, "touchstart", this._b_touchstart), h(this._table, "touchend", this._b_touchend)) },
           a.revert = function (a, c) { var d = b(a); if (null === d && c === !1) throw new Error("Table not found."); d && d.revert() }, a.destroy = function (a, c) { var d = b(a); if (null === d && c === !1) throw new Error("Table not found."); d && d.destroy() },
           p && (p.fn.extend({ rowSorter: function (b) { var c = []; return this.each(function (d, e) { c.push(new a(e, b)) }), 1 === c.length ? c[0] : c } }),
            p.rowSorter = { revert: a.revert, destroy: a.destroy }), a
      });
