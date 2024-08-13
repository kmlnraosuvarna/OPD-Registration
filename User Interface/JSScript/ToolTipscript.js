var tooltip=function(){
	var id = 'tt';
	var top = 3;
	var left = 3;
	var maxw = 300;
	var speed = 200;
	var timer = 2;
	var endalpha = 95;
	var alpha = 0;
	var tt,t,c,b,h;
	var ie = document.all ? true : false;
	return{
		show:function(v,w){
			if(tt == null){
				tt = document.createElement('div');
				tt.setAttribute('id',id);
				t = document.createElement('div');
				t.setAttribute('id',id + 'top');
				c = document.createElement('div');
				c.setAttribute('id',id + 'cont');
				b = document.createElement('div');
				b.setAttribute('id',id + 'bot');
				tt.appendChild(t);
				tt.appendChild(c);
				tt.appendChild(b);
				document.body.appendChild(tt);
				tt.style.opacity = 0;
				tt.style.filter = 'alpha(opacity=0)';
				document.onmousemove = this.pos;
			}
			tt.style.display = 'block';
			c.innerHTML = v;
			tt.style.width = w ? w + 'px' : 'auto';
			if(!w && ie){
				t.style.display = 'none';
				b.style.display = 'none';
				tt.style.width = tt.offsetWidth;
				t.style.display = 'block';
				b.style.display = 'block';
			}
			if(tt.offsetWidth > maxw){tt.style.width = maxw + 'px'}
			h = parseInt(tt.offsetHeight) + top;
			clearInterval(tt.timer);
			tt.timer = setInterval(function(){tooltip.fade(1)},timer);
		},
		pos:function(e){
			var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
			var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
			tt.style.top = (u - h) + 'px';
			tt.style.left = (l + left) + 'px';
		},
		fade:function(d){
			var a = alpha;
			if((a != endalpha && d == 1) || (a != 0 && d == -1)){
				var i = speed;
				if(endalpha - a < speed && d == 1){
					i = endalpha - a;
				}else if(alpha < speed && d == -1){
					i = a;
				}
				alpha = a + (i * d);
				tt.style.opacity = alpha * .01;
				tt.style.filter = 'alpha(opacity=' + alpha + ')';
			}else{
				clearInterval(tt.timer);
				if(d == -1){tt.style.display = 'none'}
			}
		},
		hide:function(){
			clearInterval(tt.timer);
			tt.timer = setInterval(function(){tooltip.fade(-1)},timer);
		}
	};
} ();


function ExpandCollapseReceiptDetail(image, index, ColumnSpan) {
 
    var src = image.getAttribute("src");
  
    if (src.indexOf("plus") > 0) {
     
        image.src = src.replace("plus", "minus");
        

        var tr = image.parentNode.parentNode;
        
        var next_tr = tr.nextSibling;
     
        var tbody = tr.parentNode;
    
        var td = image.parentNode;
        var detailnode

       
        for (var j = 0; j < td.childNodes.length; j++) {
            if (td.childNodes[j].nodeType == 1) {
                if (td.childNodes[j].nodeName.toLowerCase() == 'div') {
                    detailnode = td.childNodes[j].cloneNode(true);
                    detailnode.setAttribute('style', '');
                }
            }
        }

        
        var newtr = document.createElement('tr');
        var newtd = document.createElement('td');
        var newfirsttd = newtd.cloneNode(true);
       
        newfirsttd.innerHTML = ' ';
        newtr.appendChild(newfirsttd);

        newtd.colSpan = ColumnSpan;

      
        newtd.innerHTML = detailnode.innerHTML;
        newtr.appendChild(newtd);

        tbody.insertBefore(newtr, next_tr);

    }
    else {
        image.src = src.replace("minus", "plus");
        var row = image.parentNode.parentNode;
        var rowsibiling = row.nextSibling;
        var rowparent = row.parentNode;
        rowparent.removeChild(rowsibiling);
        row.backgroundColor = '#e0e0e1';
    }
}   