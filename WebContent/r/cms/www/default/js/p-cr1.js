(function(a){if(window[a]===undefined){window[a]={}}a=window[a];a.mix=function(f,e,d,h){if(!e||!f){return f}if(d===undefined){d=true}var c,g,b;if(h&&(b=h.length)){for(c=0;c<b;c++){g=h[c];if(g in e){if(d||!(g in f)){f[g]=e[g]}}}}else{for(g in e){if(d||!(g in f)){f[g]=e[g]}}}return f};a.mix(a,{$:function(b){return"string"==typeof b?document.getElementById(b):b},ready:!+"\v1"?function(c){var b=this;(function(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(arguments.callee,0);return}c.call(window,b)})()}:function(c){var b=this;document.addEventListener("DOMContentLoaded",function(){c.call(window,b)},false)},IE6:document.all&&([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1]==6),Bind:function(d,b){var c=Array.prototype.slice.call(arguments).slice(2);return function(){return b.apply(d,c)}},getECN:function(j,c,g){var h=[],f=new RegExp("(^|\\s)"+c+"(\\s|$)"),k=(j||document).getElementsByTagName(g||"*");for(var d=0,b=k.length;d<b;d++){if(f.test(k[d].className)){h.push(k[d])}}return h},getStyle:function(d,e){var c;function b(f){return f.replace(/-(\w)/g,function(g,h){return h.toUpperCase()})}if(!+"\v1"){if(e.indexOf("-")!=-1){e=b(e)}c=d.currentStyle[e]}else{c=document.defaultView.getComputedStyle(d,null).getPropertyValue(e)}return c},cleanWhitespace:function(b){for(var c=0;c<b.childNodes.length;c++){var d=b.childNodes[c];if(d.nodeType==3&&!/\S/.test(d.nodeValue)){d.parentNode.removeChild(d)}}},stopPropagation:function(b){var b=b||window.event;if(b.stopPropagation){b.stopPropagation()}else{b.cancelBubble=true}},preventDefault:function(b){var b=b||window.event;if(b.preventDefault){b.preventDefault()}else{b.returnValue=false}},getObjPos:function(e){var b=y=0;if(e.getBoundingClientRect){var c=e.getBoundingClientRect();if(c.left==0&&c.top==0){return}var d=document.documentElement;b=c.left+Math.max(d.scrollLeft,document.body.scrollLeft)-d.clientLeft;y=c.top+Math.max(d.scrollTop,document.body.scrollTop)-d.clientTop}else{for(;e!=document.body;b+=e.offsetLeft,y+=e.offsetTop,e=e.offsetParent){}}return{x:b,y:y}},addEvent:function(c,b,d){if(!(c=this.$(c))){return false}if(c.addEventListener){c.addEventListener(b,d,false);return true}else{if(c.attachEvent){c["e"+b+d]=d;c[b+d]=function(){c["e"+b+d](window.event)};c.attachEvent("on"+b,c[b+d]);return true}}return false},removeEvent:function(c,b,d){if(!(c=this.$(c))){return false}if(c.removeEventListener){c.removeEventListener(b,d,false);return true}else{if(c.detachEvent){c.detachEvent("on"+b,c[b+d]);c[b+d]=null;return true}}return false},setCookie:function(d,e,f){if(f){var c=new Date();c.setTime(c.getTime()+(f*24*60*60*1000));var b="; expires="+c.toGMTString()}else{b=""}document.cookie=d+"="+e+b+"; path=/"},getCookie:function(d){var f=d+"=";var b=document.cookie.split(";");for(var e=0;e<b.length;e++){var g=b[e];while(g.charAt(0)==" "){g=g.substring(1,g.length)}if(g.indexOf(f)==0){return g.substring(f.length,g.length)}}return null},removeClass:function(b,d){if(!b||!b.className){return false}if(b.className.indexOf(d)!=-1){b.className=b.className.replace(d,"")}},addClass:function(d,e){if(!d){return false}var b=d.className;if(!b){d.className=e}else{if(d.className.indexOf(e)==-1){d.className+=" "+e}}},hover:function(e,f,d){function c(h,g){try{return h.contains?h!=g&&h.contains(g):!!(h.compareDocumentPosition(g)&16)}catch(j){}}function b(j,h,k){function g(n){var m=n.currentTarget,l=n.relatedTarget;if(!c(m,l)&&m!=l){k.call(n.currentTarget,n)}}if(j.addEventListener){if(h=="mouseenter"){j.addEventListener("mouseover",g,false)}else{if(h=="mouseleave"){j.addEventListener("mouseout",g,false)}else{j.addEventListener(h,fn,false)}}}else{if(j.attachEvent){j["e"+h+k]=k;j[h+k]=function(){j["e"+h+k](window.event)};j.attachEvent("on"+h,j[h+k]);return true}}}f&&(Object.prototype.toString.call(f)==="[object Function]")&&b(e,"mouseenter",f);d&&(Object.prototype.toString.call(d)==="[object Function]")&&b(e,"mouseleave",d)},Browser:{ie:/msie/.test(window.navigator.userAgent.toLowerCase()),isIE6:document.all&&([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1]==6),moz:/gecko/.test(window.navigator.userAgent.toLowerCase()),opera:/opera/.test(window.navigator.userAgent.toLowerCase())}});a.$$=a.getECN;a.on=a.addEvent})("PPS");var domReady=PPS.ready,$=PPS.$,stopPropagation=PPS.stopPropagation,addEvent=PPS.addEvent,cssValue=PPS.getStyle,getECN=PPS.getECN;PPS.page={};(function(a){var b=function(e,f){var d=document.getElementsByTagName("head")[0];var c=document.createElement("script");c.setAttribute("type","text/javascript");c.setAttribute("src",e);d.appendChild(c);if(!document.all){c.onload=function(){f()}}else{c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete"){f()}}}return false};a.jsload=b})(PPS);(function(a){function b(d){var c=this;if(!(c instanceof b)){return new b(d)}this.init(d);this._filterImg();this.complete();this.lazyTime=setInterval(function(){c.loadLazy()},100);window.onresize=function(){c._containerInfo()}}b.prototype={init:function(d){this.lazyTag=d.lazyTag||"img";this.container=d.container||window;this.mode=d.mode||"vertical";this.placeholder=d.placeholder||"placeholder.png";this.start=d.start||function(){};this.loading=d.loading||function(){};this.callback=d.callback||function(){};var c=this.container===window||(/^(?:body|html)$/i).test(this.container.tagName);if(c){this._containerInfo()}this.lazylength;this.lazy=[]},_containerInfo:function(){var f=/applewebkit/.test(window.navigator.userAgent.toLowerCase()),g=document,e=g.body,c=g.documentElement;this.dd=g.compatMode==="CSS1Compat"&&!f?c:e;this.clientHeight=this.mode==="vertical"?c.clientHeight:c.clientWidth;return this.clientHeight},_getPos:function(c){if(a.getObjPos(c)){return this.mode==="vertical"?a.getObjPos(c).y:a.getObjPos(c).x}else{return 0}},_filterImg:function(){var d=document.getElementsByTagName(this.lazyTag);for(var f=0,c=d.length;f<c;f++){if(d[f].getAttribute("lazy_src")){var e={},g;!d[f].src&&(d[f].src=this.placeholder);g=this._getPos(d[f]);e.o=d[f];if(g>=0&&!this.isHidden(d[f])){e.pos=g}this.lazy.push(e)}}this.lazylength=this.lazy.length;this.start()},isHidden:function(c){return((c.offsetWidth===0&&c.offsetHeight===0)||a.getStyle(c,"display")==="none")?true:false},loadLazy:function(){this.complete();this.loading();for(var c=0;c<this.lazylength;c++){var d=this.lazy[c];if(d.pos&&(d.pos-this.dd.scrollTop)<this.clientHeight&&!this.isHidden(d.o)){d.o.src=d.o.getAttribute("lazy_src");d.o.setAttribute("lazy_src","");d.o.removeAttribute("lazy_src");this.lazy.splice(c--,1);this.lazylength--}if(!d.pos){d.pos=this._getPos(d.o)}}},complete:function(){if(this.lazylength==0){clearInterval(this.lazyTime);this.callback();return true}return false}};a.lazyLoad=b})(PPS);PPS.lazyLoad({placeholder:"http://image1.webscache.com/kan/style_v9/img/placeholder.png"});(function(a,c){function b(d){this.set(d);this.aNtag=this.s.nTag();this.aMtag=this.s.mTag();this.aText=this.s.text();this.dis=Math.abs(this.s.slider.dis);this.sbj=this.s.slider.obj;if(this.sbj){this.sbj.key=1}this.dir=this.s.slider.dir||this.s.dir;this.Tween=this.s.slider.Tween||this.s.Tween;this.de=this.s.index;this.callBack=this.s.callBack;this.eType=["click","mouseover"];this.run()}b.prototype={version:4,B:function(f,e){var d=Array.prototype.slice.call(arguments).slice(2);return function(){return e.apply(f,d)}},G:function(d){return document.getElementById(d)},E:function(e,f){for(var d in f){e[d]=f[d]}},pre:function(d){if(d.preventDefault){d.preventDefault()}else{d.returnValue=false}},aE:function(d,f,e){if(d.addEventListener){d.addEventListener(f,e,false)}else{if(d.attachEvent){d.attachEvent("on"+f,e)}else{d["on"+f]=e}}},set:function(d){this.s={evt:0,index:0,auto:[0,2000],cur:"cur",intTabTime:50,interval:500,nTag:function(){},mTag:function(){},text:function(){},slider:{obj:null,dis:0},dir:"top",Tween:function(l,m,j,k){return -j*((l=l/k-1)*l*l*l-1)+m},callBack:function(){}};this.E(this.s,d||{})},action:function(d){this.TabLi(d);this.TabText(d);this.dis?this.slider(d):this.TabChange(d);this.callBack()},autoplay:function(d){if(d){this.de=(this.de<this.aMtag.length-1)?this.de+1:0}else{this.de=(this.de!=0)?this.de-1:this.aMtag.length-1}this.action(this.de)},autoFun:function(){this.clearAuto();this.intAuto=setInterval(this.B(this,this.autoplay,1),this.s.auto[1])},clearAuto:function(){if(this.intAuto){clearInterval(this.intAuto)}},TabLi:function(d){if(this.lLi&&this.aNtag[d]){this.lLi.className=this.lLi.className.replace(this.s.cur,"");this.lLi.key=0;if(this.aNtag[d].className.indexOf(this.s.cur)==-1){this.aNtag[d].className+=" "+this.s.cur;this.aNtag[d].key=1}this.lLi=this.aNtag[d]}},TabText:function(d){if(this.aText){this.lText.style.display="none";this.aText[d].style.display="block";this.lText=this.aText[d]}},TabChange:function(d){if(this.lDiv&&this.lDiv!=this.aMtag[d]){this.lDiv.style.display="none"}this.aMtag[d].style.display="block";this.lDiv=this.aMtag[d]},slider:function(k){var m=0,o=parseInt(this.sbj.style[this.dir]),l=-k*this.dis-o,j,n;n=l>0?"ceil":"floor";this.Move=function(){m=new Date().getTime()-j;if(!l){return false}if(this.moveTime){clearTimeout(this.moveTime)}if(m<this.s.interval){this.sbj.style[this.dir]=Math[n](this.Tween(m,o,l,this.s.interval))+"px";this.moveTime=setTimeout(this.B(this,this.Move),10)}else{this.sbj.style[this.dir]=o+l+"px"}};j=new Date().getTime();this.Move()},clearintTab:function(){if(this.intTab){clearTimeout(this.intTab)}},aNtagAct:function(d){if(this.lLi==d){return false}this.clearintTab();this.clearAuto();this.intTab=setTimeout(this.B(this,function(){this.de=d.cNub;this.action(d.cNub)}),this.s.intTabTime);return this},run:function(){this.lDiv=this.aMtag[this.de];this.lDiv.key=1;if(this.aText){this.lText=this.aText[this.de];this.lText.style.display="block"}if(this.dis){this.sbj.style[this.dir]=-this.de*this.dis+"px"}if(this.aNtag){if(this.aNtag[this.de].className.indexOf(this.s.cur)==-1){this.aNtag[this.de].className+=" "+this.s.cur;this.aNtag[this.de].key=1}this.lLi=this.aNtag[this.de];for(var k=0,h=this.aNtag.length;k<h;k++){var l=this.aNtag[k],o=l.getElementsByTagName("a")[0]||l.tagName.toLocaleLowerCase()=="a"&&l;l.cNub=k;if(o){this.aE(o,"focus",this.B(this,function(d){d.blur()},o));if(this.s.evt==0){this.aE(o,"click",this.pre)}}this.aE(l,this.eType[this.s.evt],this.B(this,function(d){this.aNtagAct(d)},l));if(this.s.auto[0]==1){this.aE(l,"mouseover",this.B(this,function(d){if(!d.key){return}this.clearAuto()},l));this.aE(l,"mouseout",this.B(this,function(d){if(!d.key){return}this.autoFun();this.clearintTab()},l))}else{this.aE(l,"mouseout",this.B(this,this.clearintTab))}}}if(this.s.auto[0]==1){this.autoFun();for(var j=0,m=this.aMtag.length;j<m;j++){var n=this.aMtag[j];this.aE(n,"mouseover",this.B(this,this.clearAuto));this.aE(n,"mouseout",this.B(this,this.autoFun))}}}};a.Rotation=b;c.Rotation=b})(PPS,this);(function(a){function b(c){this.d=c.handle||[];this.cur=c.cur||"select";this.index=(c.index<this.d.length&&c.index)||0;this.evt=c.evt||"mouseover";this.delay=c.delay||20;this.cs=c.cs||0;this.last=null;if(this.d.length==0||!this.d){return false}this.run()}b.prototype={Expand:function(f){var g="className",e=this.cur,d=f[g].indexOf(e)==-1;if(f==this.last&&!this.cs){return false}if(this.eTime){clearTimeout(this.eTime)}this.eTime=setTimeout(a.Bind(this,function(){if(!this.last){this.last=f}if(f!=this.last){if(this.last[g].indexOf(e)!=-1){this.last[g]=(this.last[g].replace(e,""))}this.last=f}if(!this.cs){if(d){f[g]+=" "+e}}else{f[g]=(!d?f[g].replace(" "+e,""):f[g]+=" "+e)}return this.last}),this.delay)},run:function(){for(var d=0,c=this.d.length;d<c;d++){a.addEvent(this.d[d],this.evt,a.Bind(this,this.Expand,this.d[d]));a.addEvent(this.d[d],"mouseout",a.Bind(this,function(){if(this.eTime){clearTimeout(this.eTime)}}))}this.Expand(this.d[this.index])}};a.classExpand=b})(PPS);(function(a){function b(c){this.sets(c);this.h=this.set.hd;this.m=this.set.bd;this.e=this.set.evt;this.cur=this.set.c;this.eCur=this.set.e;this.cs=this.set.cs;this.cl=this.set.cl;this.index=(this.set.index<this.h.length&&this.set.index)||0;if(!this.h||!this.m||this.h.length==0||this.m.length==0||this.h.length!=this.m.length){return false}this.run()}b.prototype={E:function(c,e){for(var d in e){c[d]=e[d]}},sets:function(c){this.set={hd:[],bd:[],c:"",e:"",index:0,evt:"click",cs:1,cl:1};this.E(this.set,c||{})},ec:function(f){var g=this.h[f],p="className",q=this.m[f],o=q.style,m=this.eCur,j=this.cur,l=(o.display=="none"||q.offsetHeight==0),k=g[p].indexOf(j)!=-1,e=g[p].indexOf(m)!=-1;if(this.cl&&!this.lh){this.lh=g}if(this.cl&&!this.lm){this.lm=q}if(this.cl&&this.lh!=g){if(m&&this.lh[p].indexOf(m)!=-1){this.lh[p]=this.lh[p].replace(new RegExp("\\s*"+m,"g"),"")}if(this.cur&&this.lh[p].indexOf(j)==-1){this.lh[p]+=" "+j}this.lm!=q&&(this.lm.style.display="none");if(m&&g[p].indexOf(m)==-1&&l){g[p]+=" "+m}if(j&&g[p].indexOf(j)!=-1&&l){g[p]=g[p].replace(new RegExp("\\s*"+j,"g"),"")}o.display="block"}if(this.cs&&!this.cl){this.lh=g;this.lm=q;this.frist=true}if(this.cs&&this.lh==g&&this.frist){if(l){if(j&&g[p].indexOf(j)!=-1){g[p]=g[p].replace(new RegExp("\\s*"+j,"g"),"")}if(m&&g[p].indexOf(m)==-1){g[p]+=" "+m}}else{if(m&&g[p].indexOf(m)!=-1){g[p]=g[p].replace(new RegExp("\\s*"+m,"g"),"")}if(this.cur&&g[p].indexOf(j)==-1){g[p]+=" "+j}}o.display=l?"block":"none"}this.lh=g;this.lm=q;this.frist=true},run:function(){for(var f=0,e=this.h.length;f<e;f++){var g=this.h[f],d=this.m[f],n="className",k=d.style,j=g[n].indexOf(this.eCur)!=-1,l=g[n].indexOf(this.cur)!=-1;if(this.cl){if(f!=this.index){if(this.eCur&&j){g[n]=g[n].replace(new RegExp("\\s*"+this.cur,"g"),"")}if(this.cur&&!l){g[n]+=" "+this.cur}k.display="none"}if(f==this.index){if(this.cur&&l){g[n]=this.h[f].replace(new RegExp("\\s*"+this.eCur,"g"),"")}if(this.eCur&&!j){g[n]+=" "+this.eCur}k.display="block"}}g.n=f;a.addEvent(g,this.e,a.Bind(this,this.ec,g.n))}if(this.cl){this.ec(this.index)}}};a.ExpandContraction=b})(PPS);(function(a){function b(d){this.h=d.handle;this.m=d.submore;this.sn=d.className;this.hTime=d.hTime||200;this.oTime=d.oTime||200;this.showback=d.showback||function(){};this.hiddenback=d.hiddenback||function(){};if(!this.h||!this.m||this.h.length==0||this.m.length==0||this.h.length!=this.m.length){return false}var e="className";this.show=function(c){if(c.ht){clearTimeout(c.ht)}c.ht=setTimeout(a.Bind(this,function(){if(c[e].indexOf(this.sn)==-1){c[e]+=" "+this.sn}this.showback();this.m[c.n].style.visibility="visible"}),this.hTime)};this.hidden=function(f,c){if(f.ht){clearTimeout(f.ht)}if(f.ot){clearTimeout(f.ot)}f.ot=setTimeout(a.Bind(this,function(){if(f[e].indexOf(this.sn)!=-1){f[e]=f[e].replace(" "+this.sn,"")}this.hiddenback();this.m[f.n].style.visibility="hidden"}),this.oTime)};this.init=function(){for(var g=0,f=this.h.length;g<f;g++){var j=this.h[g],c=this.m[g];j.n=g;a.addEvent(j,"mouseover",a.Bind(this,this.show,j));a.addEvent(j,"mouseout",a.Bind(this,this.hidden,j));a.addEvent(c,"mouseover",a.Bind(this,function(h){if(h.ot){clearTimeout(h.ot)}},j));a.addEvent(c,"mouseout",a.Bind(this,this.hidden,j))}};this.init()}a.Dropsub=b})(PPS);(function(a){function b(e,f){var t=e.getElementsByTagName("li"),u=[],d=[],n,l,q=a.getECN(e.parentNode,"drop-handle","div")[0],m=e.parentNode.className.indexOf("new-drop-wrap")==-1?["#f0f0f0","#ffffff"]:["#ffffff","#eef6ff"];if(q){d.inner=q.innerHTML.replace("<b></b>","");d.cNub=q.cNub;u.push(d)}for(var k=0,r=t.length;k<r;k++){d[k]={};if(t[k].className.indexOf("select")!=-1){n={};n.inner=t[k].innerHTML;n.n=k+1;n.cNub=t[k].cNub;if(!f){t[k].className=t[k].className.replace("select","")}}d[k].inner=t[k].innerHTML;d[k].cNub=t[k].cNub;u.push(d[k]);if(k%2==0){t[k].style.backgroundColor=m[0]}else{t[k].style.backgroundColor=m[1]}}if(n&&q){l=u.splice(n.n,1);u.unshift(l[0]);q.innerHTML=u[0].inner+"<b></b>";q.cNub=u[0].cNub;for(var g=0,c=t.length;g<c;g++){t[g].innerHTML=u[g+1].inner;t[g].cNub=u[g+1].cNub}}return n}a.analogSelect=b})(PPS);(function(b,d){function c(g){this.hd=g.hd;this.bd=g.bd;this.cur=g.cur||"cur";this.index=g.index||0;this.callBack=g.callBack||function(){};this.act=function(j){if(this.lbd==this.bd[this.hd[j].cNub]){return false}if(this.hd[j].className.indexOf(this.cur)==-1){this.hd[j].className+=" "+this.cur}if(this.lhd&&this.lhd.className.indexOf(this.cur)!=-1){this.lhd.className=this.lhd.className.replace(" "+this.cur,"")}if(this.lbd){this.lbd.style.display="none"}this.bd[this.hd[j].cNub].style.display="block";this.lhd=this.hd[j];this.lbd=this.bd[this.hd[j].cNub];this.index=j;this.callBack()};for(var f=0,e=this.hd.length;f<e;f++){this.hd[f].t=f;if(!this.hd[f].cNub){this.hd[f].cNub=f}var h=this;this.hd[f].onmousedown=function(){h.act.apply(h,[this.t])}}this.act(this.index)}function a(f){if(!b.$(f)){return false}var k=b.$(f),p,q,h,j=[],g;p=b.getECN(k,"drop-handle","div");q=b.getECN(k,"drop-sub-more","ul")[0];if(p.length==0||q.length==0){return false}h=q.getElementsByTagName("li");if(h.length==0){return false}g=b.getECN(k,"rank-wrap","div");if(h[0].className.indexOf("select")==-1){h[0].className+=" select"}for(var n=0,o=h.length;n<o;n++){j.push(h[n])}var e=p.concat(j);var m=new c({hd:e,bd:g,callBack:function(){var r=this.hd[this.index],l=r.parentNode,s="className";if(l[s].indexOf("drop-sub-more")!=-1){b.cleanWhitespace(r.parentNode.parentNode);l.previousSibling[s]=l.previousSibling[s].replace("drop-select","");l.style.visibility="hidden";b.analogSelect(l,1)}}})}b.rt=a;d.rt=a})(PPS,this);function dialog(a){this.setOptions(a);this.popOBj=this.$(this.boxSet.id);this.openBack=this.boxSet.openBack;this.closeBack=this.boxSet.closeBack;this.dialogInit();this.open()}dialog.prototype={$:function(a){return"string"==typeof a?document.getElementById(a):a},isIE6:document.all&&([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1]==6),B:function(c,a){var b=Array.prototype.slice.call(arguments).slice(2);return function(){return a.apply(c,b)}},Extend:function(a,c){for(var b in c){a[b]=c[b]}},getECN:function(h,b,f){var g=[],d=new RegExp("(^|\\s)"+b+"(\\s|$)"),j=(h||document).getElementsByTagName(f||"*");for(var c=0,a=j.length;c<a;c++){if(d.test(j[c].className)){g.push(j[c])}}return g},setOptions:function(a){this.boxSet={Layer:1,width:"",height:"",left:"undefind",top:"undefind",openBack:function(){},closeBack:function(){},closeName:"p_close"};this.Extend(this.boxSet,a||{})},shadingLayer:function(){this.layDic=document.createElement("div");this.layDic.style.cssText="	opacity:0.5;-moz-opacity:0.5;filter:alpha(opacity=50);background:#000;position:absolute;top:0;left:0;z-index:9998;display:none";this.layDic.style.width=Math.max(document.body.scrollWidth,document.body.clientWidth)+"px";this.layDic.style.height=Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight)+"px";document.body.appendChild(this.layDic)},hideSelects:function(a){if(this.isIE6){selects=document.getElementsByTagName("select");for(i=0;i<selects.length;i++){selects[i].style.visibility=a}}},dialogInit:function(){var c,d=this;this.popOBj.style.display="block";this.pHeight=this.boxSet.height?parseInt(this.boxSet.height):this.popOBj.offsetHeight;this.pWidth=parseInt(this.boxSet.width);this.popOBj.style.width=this.pWidth+"px";this.popOBj.style.display="none";c=this.getECN(this.popOBj,this.boxSet.closeName,"*");for(var b=0,a=c.length;b<a;b++){c[b].onclick=function(){d.close.call(d);return false}}},open:function(){var b=parseInt(this.boxSet.top),a=parseInt(this.boxSet.left);if(this.boxSet.Layer){this.shadingLayer();this.layDic.style.display="block";this.hideSelects("hidden")}if(this.isIE6){this.popOBj.style.position="absolute";this.popOBj.style.top=this.boxSet.top!="undefind"?(b+"px"):(document.documentElement.scrollTop+document.documentElement.clientHeight*0.382-this.pHeight/2+"px")}else{this.popOBj.style.position="fixed";this.popOBj.style.top=this.boxSet.top!="undefind"?(b+"px"):document.documentElement.clientHeight*0.382-this.pHeight/2+"px"}this.popOBj.style.left=this.boxSet.left!="undefind"?(a+"px"):((document.documentElement.clientWidth-this.pWidth)/2+"px");this.popOBj.style.display="block";this.openBack()},close:function(){if(this.boxSet.Layer){this.layDic.style.display="none";this.layDic.parentNode.removeChild(this.layDic);this.layDic=null;this.hideSelects("visible")}this.popOBj.style.display="none";this.closeBack()}};PPS.ready(function(a){a.page.base=(function(){var c="getElementsByTagName";(function(){var e=a.$("content"),d=a.getECN(e,"EsHandle","div"),f=a.getECN(e,"EsMain","*");new a.ExpandContraction({hd:d,bd:f,c:"Shrink",cs:1,cl:0})})();(function(){var f=a.getECN(document,"drop-handle","*"),g=a.getECN(document,"drop-sub-more","*");for(var e=0,d=g.length;e<d;e++){if(/drop-skip/.test(g[e].className)){continue}a.analogSelect(g[e])}new a.Dropsub({handle:f,submore:g,className:"drop-select"})})();(function(){var e=a.getECN(document,"p-close","a").concat(a.getECN(document,"tb-close","a"));if(e.length==0){return false}for(var f=0,d=e.length;f<d;f++){a.addEvent(e[f],"click",function(g){this.parentNode.style.display="none";a.preventDefault(g)})}})();(function(){var f=a.getECN(document,"h-drop","div");if(f.length==0){return false}for(var d=0,e=f.length;d<e;d++){a.rt(f[d])}})();(function(){if(!a.$("focus-n")||!a.$("focus-ul")||!a.$("focus")){return false}var e=a.$("focus-n")[c]("li"),d=a.$("focus-ul")[c]("li");if(e.length==0||d.length==0||e.length!=d.length){return false}new a.Rotation({nTag:function(){return e},mTag:function(){return d},text:function(){return a.$("focus")[c]("dl")},index:0,slider:{obj:a.$("focus-ul"),dis:300},auto:["1","5000"],interval:500,cur:"select"})})(),(function(){var f=function(l){var j=l.getElementsByTagName("li"),h=[];for(var k=0;k<j.length;k++){if(j[k].parentNode==l){h.push(j[k])}}new a.classExpand({handle:h,cur:"select"})},d=a.getECN(document,"rank","ol");if(d==""||d.length==0){return false}for(var e=0,g=d.length;e<g;e++){if(d[e].className.indexOf("r-skip")!=-1){continue}f(d[e])}})();(function(){if(!(!a.$("cat-index")||!a.$("anime-index"))){return false}var d=a.getECN(document,"p-tab","div");if(d.length==0){return false}function h(j){var p=a.getECN(j,"control","ul"),s=a.getECN(j,"p-list","ul"),r,t=[],m=[],u="className",l;if(s.length==0){s=a.getECN(j,"news-list","ul")}if(p.length==0||s.length==0){return false}r=p[0].getElementsByTagName("li");for(var n=0,q=r.length;n<q;n++){if(r[n][u].indexOf("-active")==-1){t.push(r[n])}if(r[n][u].indexOf("prev-active")!=-1||r[n][u].indexOf("next-active")!=-1){m.push(r[n])}}if(t.length==0||s.length==0||t.length!==s.length){return false}j.tab=new a.Rotation({nTag:function(){return t},mTag:function(){return s},index:0,cur:"active",start:function(){this.key=true},callBack:function(){var o=this.aMtag[this.de].parentNode,w=a.getECN(o.parentNode,"EsHandle","div")[0];k(this);if(!w){return false}if(a.getStyle(o,"display")=="none"){var x="className";if(w[x].indexOf("Shrink")!=-1){w[x]=w[x].replace("Shrink","")}o.style.display="block"}}});function k(w){if(w.de==0){m[0].className="prev"}else{m[0].className="prev-active"}if(w.de==(w.aMtag.length-1)){m[1].className="next"}else{m[1].className="next-active"}}function v(o){l.clearAuto();if(l.de==o?(l.aMtag.length-1):0){return false}l.autoplay(0);k(j.tab)}l=j.tab;k(l);a.addEvent(m[0],"click",function(){v(0)});a.addEvent(m[1],"click",function(){v(1)})}for(var e=0,f=d.length;e<f;e++){var g=a.getECN(d[e],"EsHandle","div");if(g.length!=0){a.addEvent(g[0],"click",function(){var j=this.parentNode;setTimeout(function(){if(a.getStyle(a.getECN(j,"EsMain","div")[0],"display")=="none"){j.tab.clearAuto()}else{j.tab.autoFun()}},0)})}h(d[e])}})()})();var b=function(k){var f=a.getECN(document,"dra-esHandle","a");if(!f||f.length==0){return false}var c=k.d||["none","block"],j=k.callback||function(){},g;for(var h=0,e=f.length;h<e;h++){a.addEvent(f[h],"focus",function(){this.blur()});a.addEvent(f[h],"click",function(m){a.preventDefault(m);a.cleanWhitespace(this.parentNode);var d=this.previousSibling.getElementsByTagName("li");this.len=d.length;if(this.len<=k.n){return false}g=this.innerHTML=="-收起"?c[0]:c[1];this.innerHTML=this.innerHTML=="-收起"?"+展开":"-收起";for(var l=(k.n||20);l<this.len;l++){d[l].style.display=g}j.call(this,this)})}};a.page.play=(function(){(function(){if(!a.$("but-widescreen")){return false}var d=document.body,c=a.$("but-widescreen");a.widescreen={kp:function(){a.addClass(d,"widescreen");c.innerHTML="标屏"},bp:function(){a.removeClass(d,"widescreen");c.innerHTML="宽屏"},init:function(){if(!/widescreen/.test(d.className)){this.kp()}else{this.bp()}}};a.addEvent(c,"click",function(e){a.preventDefault(e);a.widescreen.init()})})();(function(){if(!a.$("but-dark")){return false}var e=document.body,d=a.$("but-dark"),c=a.$("but-widescreen");function f(h){if(!h.init){if(a.getCookie("dark")==1){a.addClass(e,"dark");h.innerHTML="开灯"}h.init=true}else{var g=e.className.indexOf("dark")!=-1;g?function(){a.removeClass(e,"dark");c&&a.widescreen.bp()}():function(){a.addClass(e,"dark");c&&a.widescreen.kp()}();h.innerHTML=g?"关灯":"开灯";g?a.setCookie("dark",0):a.setCookie("dark",1)}}f(d);a.addEvent(d,"click",function(g){a.preventDefault(g);f(this)})})();(function(){var c=PPS.$("J_Drop-share"),d=a.$("J_Drop-reprint");if(!c||!d){return false}new a.Dropsub({handle:[c],submore:[d],className:"drop-share-select",showback:function(){d.style.left=a.getObjPos(c).x-d.offsetWidth+c.offsetWidth+"px";d.style.top=a.getObjPos(c).y+c.offsetHeight-1+"px"}});a.addEvent(c,"click",function(e){a.preventDefault(e)})})();(function(){if(!a.$("J_fx-bx")||!a.$("fx")){return false}var e=a.$("J_fx-bx"),c=a.$("fx"),d=a.$$(e,"fx-close","a")[0];a.addEvent(c,"click",function(f){if(a.getStyle(e,"display")==="none"||e.offsetHeight==0){e.style.display="block";a.addClass(this,"select")}else{e.style.display="none";a.removeClass(this,"select")}a.preventDefault(f)});a.addEvent(d,"click",function(f){e.style.display="none";a.removeClass(c,"select");a.preventDefault(f)})})();(function(){if(!a.$("J_fx-bx")){return false}var h=a.$("J_fx-bx"),g=a.$$(h,"item","p");if(g.length===0){return false}function c(j){if(!a.$("J_share-dialog")){var m=document.createElement("div"),l=document.createDocumentFragment(),k='<div class="dialog-inner"><div class="dialog-hd"><h2>分享</h2></div><div class="dialog-bd"><p align="center"><span id="J_center" class="c">'+j+'</span><br /><a class="aj-but1 p_close" href="#">确定</a></p></div><div class="dialog-close"><a href="#" class="p_close">关闭</a></div></div><iframe class="share-iframe" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="about:blank"></iframe>';m.className="dialog2 share-dialog";m.id="J_share-dialog";l.appendChild(m);m.innerHTML=k;document.body.appendChild(l)}else{a.$("J_center").innerHTML=j}}function f(j){c(j);new dialog({id:"J_share-dialog",width:350,Layer:0,fixed:0,openBack:function(){this.popOBj.style.height=this.popOBj.offsetHeight+"px";var k=this;this.shareTime=setTimeout(function(){k.close()},3000)},closeBack:function(){this.shareTime&&clearTimeout(this.shareTime)}})}window.executeCommand=function(l,m,p,k,j){var o=j.command,n={get:function(){return a.$(p).value},ok:function(){a.$(p).select();f("复制成功。您可以粘贴（Ctrl+V）到Blog或BBS中了")},error:function(){f("您使用的浏览器不支持此复制功能，请使用Ctrl+C或鼠标右键复制。")}};return n[o]()};for(var d=0,e=g.length;d<e;d++){(function(){var l=g[d],k=a.$$(l,"new-g-but","a")[0],j=l.getElementsByTagName("input")[0],m;if(!a.Browser.ie){j.id="clipboard_input"+d;m=document.createElement("span");g[d].appendChild(m);m.className="clipboard";m.innerHTML='<embed width="56" height="20" type="application/x-shockwave-flash" title="" allowscriptaccess="always" wmode="transparent" flashvars="clipboardId=clipboard_input'+d+'" menu="false" src="http://v.pps.tv/style_v9/img/clipboard.swf" />'}a.addEvent(k,"click",function(n){a.preventDefault(n);j.select();if(!a.Browser.ie){f("您使用的浏览器不支持此复制功能，请使用Ctrl+C或鼠标右键复制。");return false}var o=j.value;window.clipboardData.setData("Text",o);f("复制成功。您可以粘贴（Ctrl+V）到Blog或BBS中了")})})()}})();(function(){var m=a.$("p-version"),o;if(!m){return false}o=[{tClass:"parallelTab",tTag:"ul",tChild:"li",pClass:"parallelCont",pTag:"div"},{tClass:"pv-suoyin",tTag:"div",tChild:"a",pClass:"pv-panel",pTag:"div"}];for(var e=0,n=o.length;e<n;e++){var c=o[e],g=a.$$(m,c.tClass,c.tTag),k=a.$$(m,c.pClass,c.pTag),l,h;(g.length!=0)&&(l=g[0].getElementsByTagName(c.tChild));if(l&&l.length==0||k.length==0||l.length!=k.length){continue}for(var d=0,f=l.length;d<f;d++){if(/cur/.test(l[d].className)){h=d;break}}new a.Rotation({nTag:function(){return l},mTag:function(){return k},cur:"cur",index:h})}})()})();a.page.search=(function(){if(a.$("search")){b({n:20,d:["none","inline"]})}})()});