function Jn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Gc(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Sr={duration:.5,overwrite:!1,delay:0},Da,jt,pt,dn=1e8,Ze=1/dn,La=Math.PI*2,Wd=La/4,Xd=0,Vc=Math.sqrt,qd=Math.cos,Yd=Math.sin,bt=function(e){return typeof e=="string"},ot=function(e){return typeof e=="function"},Qn=function(e){return typeof e=="number"},Ra=function(e){return typeof e=="undefined"},Gn=function(e){return typeof e=="object"},$t=function(e){return e!==!1},Hc=function(){return typeof window!="undefined"},uo=function(e){return ot(e)||bt(e)},Wc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Rt=Array.isArray,Ia=/(?:-?\.?\d|\.)+/gi,Xc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qc=/[+-]=-?[.\d]+/,Yc=/[^,'"\[\]\s]+/gi,jd=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,nt,pn,Oa,za,rn={},fo={},jc,$c=function(e){return(fo=Hi(e,rn))&&an},Na=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ho=function(e,t){return!t&&console.warn(e)},Zc=function(e,t){return e&&(rn[e]=t)&&fo&&(fo[e]=t)||rn},ys=function(){return 0},$d={suppressEvents:!0,isStart:!0,kill:!1},po={suppressEvents:!0,kill:!1},Zd={suppressEvents:!0},ka={},mi=[],Ua={},Kc,sn={},Ba={},Jc=30,mo=[],Ga="",Va=function(e){var t=e[0],n,i;if(Gn(t)||ot(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=mo.length;i--&&!mo[i].targetTest(t););n=mo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Tu(e[i],n)))||e.splice(i,1);return e},Vi=function(e){return e._gsap||Va(_n(e))[0]._gsap},Qc=function(e,t,n){return(n=e[t])&&ot(n)?e[t]():Ra(n)&&e.getAttribute&&e.getAttribute(t)||n},Zt=function(e,t){return(e=e.split(",")).forEach(t)||e},ut=function(e){return Math.round(e*1e5)/1e5||0},At=function(e){return Math.round(e*1e7)/1e7||0},Tr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Kd=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},go=function(){var e=mi.length,t=mi.slice(0),n,i;for(Ua={},mi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},eu=function(e,t,n,i){mi.length&&go(),e.render(t,n,i||jt&&t<0&&(e._initted||e._startAt)),mi.length&&go()},tu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Yc).length<2?t:bt(e)?e.trim():e},nu=function(e){return e},mn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Jd=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Hi=function(e,t){for(var n in t)e[n]=t[n];return e},iu=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Gn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},_o=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ms=function(e){var t=e.parent||nt,n=e.keyframes?Jd(Rt(e.keyframes)):mn;if($t(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Qd=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ru=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},vo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},gi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Wi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ep=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ha=function(e,t,n,i){return e._startAt&&(jt?e._startAt.revert(po):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},tp=function s(e){return!e||e._ts&&s(e.parent)},su=function(e){return e._repeat?Er(e._tTime,e=e.duration()+e._rDelay)*e:0},Er=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},xo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yo=function(e){return e._end=At(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ze)||0))},Mo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=At(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yo(e),n._dirty||Wi(n,e)),e},ou=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=xo(e.rawTime(),t),(!t._dur||Ss(0,t.totalDuration(),n)-t._tTime>Ze)&&t.render(n,!0)),Wi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ze}},Vn=function(e,t,n,i){return t.parent&&gi(t),t._start=At((Qn(n)?n:n||e!==nt?gn(e,n,t):e._time)+t._delay),t._end=At(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ru(e,t,"_first","_last",e._sort?"_start":0),Wa(t)||(e._recent=t),i||ou(e,t),e._ts<0&&Mo(e,e._tTime),e},au=function(e,t){return(rn.ScrollTrigger||Na("scrollTrigger",t))&&rn.ScrollTrigger.create(t,e)},lu=function(e,t,n,i,r){if(Qa(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!jt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Kc!==on.frame)return mi.push(e),e._lazy=[r,i],1},np=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Wa=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ip=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&np(e)&&!(!e._initted&&Wa(e))||(e._ts<0||e._dp._ts<0)&&!Wa(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Ss(0,e._tDur,t),u=Er(l,o),e._yoyo&&u&1&&(a=1-a),u!==Er(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||jt||i||e._zTime===Ze||!t&&e._zTime){if(!e._initted&&lu(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Ze:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ha(e,t,n,!0),e._onUpdate&&!n&&vn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&vn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&gi(e,1),!n&&!jt&&(vn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},rp=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Cr=function(e,t,n,i){var r=e._repeat,a=At(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:At(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Mo(e,e._tTime=e._tDur*o),e.parent&&yo(e),n||Wi(e.parent,e),e},cu=function(e){return e instanceof Kt?Wi(e):Cr(e,e._dur)},sp={_start:0,endTime:ys,totalDuration:ys},gn=function s(e,t,n){var i=e.labels,r=e._recent||sp,a=e.duration()>=dn?r.endTime(!1):e._dur,o,l,c;return bt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Rt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},bs=function(e,t,n){var i=Qn(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=$t(l.vars.inherit)&&l.parent;a.immediateRender=$t(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new _t(t[0],a,t[r+1])},_i=function(e,t){return e||e===0?t(e):t},Ss=function(e,t,n){return n<e?e:n>t?t:n},It=function(e,t){return!bt(e)||!(t=jd.exec(e))?"":t[1]},op=function(e,t,n){return _i(n,function(i){return Ss(e,t,i)})},Xa=[].slice,uu=function(e,t){return e&&Gn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Gn(e[0]))&&!e.nodeType&&e!==pn},ap=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return bt(i)&&!t||uu(i,1)?(r=n).push.apply(r,_n(i)):n.push(i)})||n},_n=function(e,t,n){return pt&&!t&&pt.selector?pt.selector(e):bt(e)&&!n&&(Oa||!Pr())?Xa.call((t||za).querySelectorAll(e),0):Rt(e)?ap(e,n):uu(e)?Xa.call(e,0):e?[e]:[]},qa=function(e){return e=_n(e)[0]||ho("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return _n(t,n.querySelectorAll?n:n===e?ho("Invalid scope")||za.createElement("div"):e)}},fu=function(e){return e.sort(function(){return .5-Math.random()})},hu=function(e){if(ot(e))return e;var t=Gn(e)?e:{each:e},n=Xi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return bt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,p,g){var d=(g||t).length,m=a[d],_,M,E,x,y,S,C,v,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,dn])[1],!w){for(C=-dn;C<(C=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(m=a[d]=[],_=l?Math.min(w,d)*u-.5:i%w,M=w===dn?0:l?d*f/w-.5:i/w|0,C=0,v=dn,S=0;S<d;S++)E=S%w-_,x=M-(S/w|0),m[S]=y=c?Math.abs(c==="y"?x:E):Vc(E*E+x*x),y>C&&(C=y),y<v&&(v=y);i==="random"&&fu(m),m.max=C-v,m.min=v,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:c?c==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),m.b=d<0?r-d:r,m.u=It(t.amount||t.each)||0,n=n&&d<0?bu(n):n}return d=(m[h]-m.min)/m.max||0,At(m.b+(n?n(d):d)*m.v)+m.u}},Ya=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=At(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Qn(n)?0:It(n))}},du=function(e,t){var n=Rt(e),i,r;return!n&&Gn(e)&&(i=n=e.radius||dn,e.values?(e=_n(e.values),(r=!Qn(e[0]))&&(i*=i)):e=Ya(e.increment)),_i(t,n?ot(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=dn,u=0,f=e.length,h,p;f--;)r?(h=e[f].x-o,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,r||u===a||Qn(a)?u:u+It(a)}:Ya(e))},pu=function(e,t,n,i){return _i(Rt(e)?!t:n===!0?!!(n=0):!i,function(){return Rt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},lp=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},cp=function(e,t){return function(n){return e(parseFloat(n))+(t||It(n))}},up=function(e,t,n){return gu(e,t,0,1,n)},mu=function(e,t,n){return _i(n,function(i){return e[~~t(i)]})},fp=function s(e,t,n){var i=t-e;return Rt(e)?mu(e,s(0,e.length),t):_i(n,function(r){return(i+(r-e)%i)%i+e})},hp=function s(e,t,n){var i=t-e,r=i*2;return Rt(e)?mu(e,s(0,e.length-1),t):_i(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},ws=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?Yc:Ia),n+=e.substr(t,i-t)+pu(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},gu=function(e,t,n,i,r){var a=t-e,o=i-n;return _i(r,function(l){return n+((l-e)/a*o||0)})},dp=function s(e,t,n,i){var r=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!r){var a=bt(e),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Rt(e)&&!Rt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(s(e[c-1],e[c]));f--,r=function(g){g*=f;var d=Math.min(h,~~g);return u[d](g-d)},n=t}else i||(e=Hi(Rt(e)?[]:{},e));if(!u){for(l in t)Ka.call(o,e,l,"get",t[l]);r=function(g){return nl(g,o)||(a?e.p:e)}}}return _i(n,r)},_u=function(e,t,n){var i=e.labels,r=dn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},vn=function(e,t,n){var i=e.vars,r=i[t],a=pt,o=e._ctx,l,c,u;if(!!r)return l=i[t+"Params"],c=i.callbackScope||e,n&&mi.length&&go(),o&&(pt=o),u=l?r.apply(c,l):r.call(c),pt=a,u},Ts=function(e){return gi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!jt),e.progress()<1&&vn(e,"onInterrupt"),e},Ar,pp=function(e){e=!e.name&&e.default||e;var t=e.name,n=ot(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:ys,render:nl,add:Ka,kill:Dp,modifier:Pp,rawVars:0},a={targetTest:0,get:0,getSetter:tl,aliases:{},register:0};if(Pr(),e!==i){if(sn[t])return;mn(i,mn(_o(e,r),a)),Hi(i.prototype,Hi(r,_o(e,a))),sn[i.prop=t]=i,e.targetTest&&(mo.push(i),ka[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Zc(t,i),e.register&&e.register(an,i,Jt)},Qe=255,Es={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},ja=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Qe+.5|0},vu=function(e,t,n){var i=e?Qn(e)?[e>>16,e>>8&Qe,e&Qe]:0:Es.black,r,a,o,l,c,u,f,h,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Es[e])i=Es[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Qe,i&Qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Qe,e&Qe]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ia),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=ja(l+1/3,r,a),i[1]=ja(l,r,a),i[2]=ja(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Xc),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ia)||Es.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Qe,a=i[1]/Qe,o=i[2]/Qe,f=Math.max(r,a,o),h=Math.min(r,a,o),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===r?(a-o)/p+(a<o?6:0):f===a?(o-r)/p+2:(r-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},xu=function(e){var t=[],n=[],i=-1;return e.split(vi).forEach(function(r){var a=r.match(wr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},yu=function(e,t,n){var i="",r=(e+i).match(vi),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!r)return e;if(r=r.map(function(h){return(h=vu(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=xu(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(vi,"1").split(wr),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(vi),f=c.length-1;o<f;o++)i+=c[o]+r[o];return i+c[f]},vi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Es)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),mp=/hsl[a]?\(/,Mu=function(e){var t=e.join(" "),n;if(vi.lastIndex=0,vi.test(t))return n=mp.test(t),e[1]=yu(e[1],n),e[0]=yu(e[0],n,xu(e[1])),!0},Cs,on=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,f,h,p,g=function d(m){var _=s()-i,M=m===!0,E,x,y,S;if(_>e&&(n+=_-t),i+=_,y=i-n,E=y-a,(E>0||M)&&(S=++f.frame,h=y-f.time*1e3,f.time=y=y/1e3,a+=E+(E>=r?4:r-E),x=1),M||(l=c(d)),x)for(p=0;p<o.length;p++)o[p](y,h,S,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){jc&&(!Oa&&Hc()&&(pn=Oa=window,za=pn.document||{},rn.gsap=an,(pn.gsapVersions||(pn.gsapVersions=[])).push(an.version),$c(fo||pn.GreenSockGlobals||!pn.gsap&&pn||{}),u=pn.requestAnimationFrame),l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Cs=1,g(2))},sleep:function(){(u?pn.cancelAnimationFrame:clearTimeout)(l),Cs=0,c=ys},lagSmoothing:function(m,_){e=m||1/Ze,t=Math.min(_,e,0)},fps:function(m){r=1e3/(m||240),a=f.time*1e3+r},add:function(m,_,M){var E=_?function(x,y,S,C){m(x,y,S,C),f.remove(E)}:m;return f.remove(m),o[M?"unshift":"push"](E),Pr(),E},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&p>=_&&p--},_listeners:o},f}(),Pr=function(){return!Cs&&on.wake()},We={},gp=/^[\d.\-M][\d.\-,\s]/,_p=/["']/g,vp=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(_p,"").trim():+c,i=l.substr(o+1).trim();return t},xp=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},yp=function(e){var t=(e+"").split("("),n=We[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[vp(t[1])]:xp(e).split(",").map(tu)):We._CE&&gp.test(e)?We._CE("",e):n},bu=function(e){return function(t){return 1-e(1-t)}},Su=function s(e,t){for(var n=e._first,i;n;)n instanceof Kt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Xi=function(e,t){return e&&(ot(e)?e:We[e]||yp(e))||t},qi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Zt(e,function(o){We[o]=rn[o]=r,We[a=o.toLowerCase()]=n;for(var l in r)We[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=We[o+"."+l]=r[l]}),r},wu=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},$a=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/La*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Yd((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:wu(o);return r=La/r,l.config=function(c,u){return s(e,c,u)},l},Za=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:wu(n);return i.config=function(r){return s(e,r)},i};Zt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;qi(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});We.Linear.easeNone=We.none=We.Linear.easeIn;qi("Elastic",$a("in"),$a("out"),$a());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};qi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);qi("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});qi("Circ",function(s){return-(Vc(1-s*s)-1)});qi("Sine",function(s){return s===1?1:-qd(s*Wd)+1});qi("Back",Za("in"),Za("out"),Za());We.SteppedEase=We.steps=rn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Ze;return function(o){return((i*Ss(0,a,o)|0)+r)*n}}};Sr.ease=We["quad.out"];Zt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ga+=s+","+s+"Params,"});var Tu=function(e,t){this.id=Xd++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Qc,this.set=t?t.getSetter:tl},Dr=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Cr(this,+t.duration,1,1),this.data=t.data,pt&&(this._ctx=pt,pt.data.push(this)),Cs||on.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Cr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Pr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Mo(this,n),!r._dp||r.parent||ou(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ze||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),eu(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+su(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+su(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Er(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ze?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?xo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ze?0:this._rts,this.totalTime(Ss(-this._delay,this._tDur,i),!0),yo(this),ep(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Pr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ze&&(this._tTime-=Ze)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Vn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+($t(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Zd);var i=jt;return jt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),jt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,cu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,cu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(gn(this,n),$t(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$t(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ze:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ze,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ze)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=ot(n)?n:nu,o=function(){var c=i.then;i.then=null,ot(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Ts(this)},s}();mn(Dr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ze,_prom:0,_ps:!1,_rts:1});var Kt=function(s){Gc(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=$t(n.sortChildren),nt&&Vn(n.parent||nt,Jn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&au(Jn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return bs(0,arguments,this),this},t.from=function(i,r,a){return bs(1,arguments,this),this},t.fromTo=function(i,r,a,o){return bs(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Ms(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new _t(i,r,gn(this,a),1),this},t.call=function(i,r,a){return Vn(this,_t.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new _t(i,a,gn(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,Ms(a).immediateRender=$t(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,f){return o.startAt=a,Ms(o).immediateRender=$t(o.immediateRender),this.staggerTo(i,r,o,l,c,u,f)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:At(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,p,g,d,m,_,M,E,x,y,S,C;if(this!==nt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,x=this._start,E=this._ts,_=!E,f&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(h=At(u%m),u===l?(d=this._repeat,h=c):(d=~~(u/m),d&&d===u/m&&(h=c,d--),h>c&&(h=c)),y=Er(this._tTime,m),!o&&this._tTime&&y!==d&&(y=d),S&&d&1&&(h=c-h,C=1),d!==y&&!this._lock){var v=S&&y&1,w=v===(S&&d&1);if(d<y&&(v=!v),o=v?0:c,this._lock=1,this.render(o||(C?0:At(d*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&vn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Su(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=rp(this,At(o),At(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!r&&(vn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,r,a),h!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=-Ze);break}}p=g}else{p=this._last;for(var L=i<0?i:h;p;){if(g=p._prev,(p._act||L<=p._end)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(L-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(L-p._start)*p._ts,r,a||jt&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=L?-Ze:Ze);break}}p=g}}if(M&&!r&&(this.pause(),M.render(h>=o?0:-Ze)._zTime=h>=o?1:-1,this._ts))return this._start=x,yo(this),this.render(i,r,a);this._onUpdate&&!r&&vn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&gi(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(vn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Qn(r)||(r=gn(this,r,i)),!(i instanceof Dr)){if(Rt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(bt(i))return this.addLabel(i,r);if(ot(i))i=_t.delayedCall(0,i);else return this}return this!==i?Vn(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-dn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof _t?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return bt(i)?this.removeLabel(i):ot(i)?this.killTweensOf(i):(vo(this,i),i===this._recent&&(this._recent=this._last),Wi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=At(on.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=gn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=_t.delayedCall(0,r||ys,a);return o.data="isPause",this._hasPause=1,Vn(this,o,gn(this,i))},t.removePause=function(i){var r=this._first;for(i=gn(this,i);r;)r._start===i&&r.data==="isPause"&&gi(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)xi!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=_n(i),l=this._first,c=Qn(r),u;l;)l instanceof _t?Kd(l._targets,o)&&(c?(!xi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=gn(a,i),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=_t.to(a,mn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ze,onStart:function(){if(a.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Cr(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,f||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,mn({startAt:{time:gn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),_u(this,gn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),_u(this,gn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ze)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Wi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Wi(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=dn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Vn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Cr(a,a===nt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(nt._ts&&(eu(nt,xo(i,nt)),Kc=on.frame),on.frame>=Jc){Jc+=nn.autoSleep||120;var r=nt._first;if((!r||!r._ts)&&nn.autoSleep&&on._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||on.sleep()}}},e}(Dr);mn(Kt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Mp=function(e,t,n,i,r,a,o){var l=new Jt(this._pt,e,t,0,1,Lu,null,r),c=0,u=0,f,h,p,g,d,m,_,M;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=ws(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),h=n.match(Fa)||[];f=Fa.exec(i);)g=f[0],d=i.substring(c,f.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?Tr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Fa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(qc.test(i)||_)&&(l.e=0),this._pt=l,l},Ka=function(e,t,n,i,r,a,o,l,c,u){ot(i)&&(i=i(r||0,e,a));var f=e[t],h=n!=="get"?n:ot(f)?c?e[t.indexOf("set")||!ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=ot(f)?c?Ep:Pu:el,g;if(bt(i)&&(~i.indexOf("random(")&&(i=ws(i)),i.charAt(1)==="="&&(g=Tr(h,i)+(It(h)||0),(g||g===0)&&(i=g))),!u||h!==i||Ja)return!isNaN(h*i)&&i!==""?(g=new Jt(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?Ap:Du,0,p),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&Na(t,i),Mp.call(this,e,t,h,i,p,l||nn.stringFilter,c))},bp=function(e,t,n,i,r){if(ot(e)&&(e=As(e,r,t,n,i)),!Gn(e)||e.style&&e.nodeType||Rt(e)||Wc(e))return bt(e)?As(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=As(e[o],r,t,n,i);return a},Eu=function(e,t,n,i,r,a){var o,l,c,u;if(sn[e]&&(o=new sn[e]).init(r,o.rawVars?t[e]:bp(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Jt(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Ar))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},xi,Ja,Qa=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,p=i.yoyoEase,g=i.keyframes,d=i.autoRevert,m=e._dur,_=e._startAt,M=e._targets,E=e.parent,x=E&&E.data==="nested"?E.vars.targets:M,y=e._overwrite==="auto"&&!Da,S=e.timeline,C,v,w,L,R,H,K,I,k,F,G,B,N;if(S&&(!g||!r)&&(r="none"),e._ease=Xi(r,Sr.ease),e._yEase=p?bu(Xi(p===!0?r:p,Sr.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!S&&!!i.runBackwards,!S||g&&!i.stagger){if(I=M[0]?Vi(M[0]).harness:0,B=I&&i[I.prop],C=_o(i,ka),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!d?_.render(-1,!0):_.revert(h&&m?po:$d),_._lazy=0),a){if(gi(e._startAt=_t.set(M,mn({data:"isStart",overwrite:!1,parent:E,immediateRender:!0,lazy:$t(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},a))),e._startAt._dp=0,t<0&&(jt||!o&&!d)&&e._startAt.revert(po),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(o=!1),w=mn({overwrite:!1,data:"isFromStart",lazy:o&&$t(l),immediateRender:o,stagger:0,parent:E},C),B&&(w[I.prop]=B),gi(e._startAt=_t.set(M,w)),e._startAt._dp=0,t<0&&(jt?e._startAt.revert(po):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,Ze,Ze);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&$t(l)||l&&!m,v=0;v<M.length;v++){if(R=M[v],K=R._gsap||Va(M)[v]._gsap,e._ptLookup[v]=F={},Ua[K.id]&&mi.length&&go(),G=x===M?v:x.indexOf(R),I&&(k=new I).init(R,B||C,e,G,x)!==!1&&(e._pt=L=new Jt(e._pt,R,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(A){F[A]=L}),k.priority&&(H=1)),!I||B)for(w in C)sn[w]&&(k=Eu(w,C,e,G,R,x))?k.priority&&(H=1):F[w]=L=Ka.call(e,R,w,"get",C[w],G,x,0,i.stringFilter);e._op&&e._op[v]&&e.kill(R,e._op[v]),y&&e._pt&&(xi=e,nt.killTweensOf(R,F,e.globalTime(t)),N=!e.parent,xi=0),e._pt&&l&&(Ua[K.id]=1)}H&&Ru(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!N,g&&t<=0&&S.render(dn,!0,!0)},Sp=function(e,t,n,i,r,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Ja=1,e.vars[t]="+=0",Qa(e,o),Ja=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=ut(n)+It(u.e)),u.b&&(u.b=c.s+It(u.b))},wp=function(e,t){var n=e[0]?Vi(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=Hi({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Tp=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Rt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},As=function(e,t,n,i,r){return ot(e)?e.call(t,n,i,r):bt(e)&&~e.indexOf("random(")?ws(e):e},Cu=Ga+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Au={};Zt(Cu+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Au[s]=1});var _t=function(s){Gc(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Ms(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,M=i.parent||nt,E=(Rt(n)||Wc(n)?Qn(n[0]):"length"in i)?[n]:_n(n),x,y,S,C,v,w,L,R;if(o._targets=E.length?Va(E):ho("GSAP target "+n+" not found. https://greensock.com",!nn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||h||uo(c)||uo(u)){if(i=o.vars,x=o.timeline=new Kt({data:"nested",defaults:d||{},targets:M&&M.data==="nested"?M.vars.targets:E}),x.kill(),x.parent=x._dp=Jn(o),x._start=0,h||uo(c)||uo(u)){if(C=E.length,L=h&&hu(h),Gn(h))for(v in h)~Cu.indexOf(v)&&(R||(R={}),R[v]=h[v]);for(y=0;y<C;y++)S=_o(i,Au),S.stagger=0,_&&(S.yoyoEase=_),R&&Hi(S,R),w=E[y],S.duration=+As(c,Jn(o),y,w,E),S.delay=(+As(u,Jn(o),y,w,E)||0)-o._delay,!h&&C===1&&S.delay&&(o._delay=u=S.delay,o._start+=u,S.delay=0),x.to(w,S,L?L(y,w,E):0),x._ease=We.none;x.duration()?c=u=0:o.timeline=0}else if(g){Ms(mn(x.vars.defaults,{ease:"none"})),x._ease=Xi(g.ease||i.ease||"none");var H=0,K,I,k;if(Rt(g))g.forEach(function(F){return x.to(E,F,">")}),x.duration();else{S={};for(v in g)v==="ease"||v==="easeEach"||Tp(v,g[v],S,g.easeEach);for(v in S)for(K=S[v].sort(function(F,G){return F.t-G.t}),H=0,y=0;y<K.length;y++)I=K[y],k={ease:I.e,duration:(I.t-(y?K[y-1].t:0))/100*c},k[v]=I.v,x.to(E,k,H),H+=k.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return p===!0&&!Da&&(xi=Jn(o),nt.killTweensOf(E),xi=0),Vn(M,Jn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===At(M._time)&&$t(f)&&tp(Jn(o))&&M.data!=="nested")&&(o._tTime=-Ze,o.render(Math.max(0,-u)||0)),m&&au(Jn(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Ze&&!u?l:i<Ze?0:i,h,p,g,d,m,_,M,E,x;if(!c)ip(this,i,r,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,E=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,a);if(h=At(f%d),f===l?(g=this._repeat,h=c):(g=~~(f/d),g&&g===f/d&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(x=this._yEase,h=c-h),m=Er(this._tTime,d),h===o&&!a&&this._initted)return this._tTime=f,this;g!==m&&(E&&this._yEase&&Su(E,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(At(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(lu(this,u?i:h,a,r,f))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(x||this._ease)(h/c),this._from&&(this.ratio=M=1-M),h&&!o&&!r&&(vn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(M,p.d),p=p._next;E&&E.render(i<0?i:!h&&_?-Ze:E._dur*E._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Ha(this,i,r,a),vn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&vn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Ha(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&gi(this,1),!r&&!(u&&!o)&&(f||o||_)&&(vn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o){Cs||on.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Qa(this,l),c=this._ease(l/this._dur),Sp(this,i,r,a,o,c,l)?this.resetTo(i,r,a,o):(Mo(this,0),this.parent||ru(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ts(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,xi&&xi.vars.overwrite!==!0)._first||Ts(this),this.parent&&a!==this.timeline.totalDuration()&&Cr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?_n(i):o,c=this._ptLookup,u=this._pt,f,h,p,g,d,m,_;if((!r||r==="all")&&Qd(o,l))return r==="all"&&(this._pt=0),Ts(this);for(f=this._op=this._op||[],r!=="all"&&(bt(r)&&(d={},Zt(r,function(M){return d[M]=1}),r=d),r=wp(o,r)),_=o.length;_--;)if(~l.indexOf(o[_])){h=c[_],r==="all"?(f[_]=r,g=h,p={}):(p=f[_]=f[_]||{},g=r);for(d in g)m=h&&h[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&vo(this,m,"_pt"),delete h[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&Ts(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return bs(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return bs(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return nt.killTweensOf(i,r,a)},e}(Dr);mn(_t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zt("staggerTo,staggerFrom,staggerFromTo",function(s){_t[s]=function(){var e=new Kt,t=Xa.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var el=function(e,t,n){return e[t]=n},Pu=function(e,t,n){return e[t](n)},Ep=function(e,t,n,i){return e[t](i.fp,n)},Cp=function(e,t,n){return e.setAttribute(t,n)},tl=function(e,t){return ot(e[t])?Pu:Ra(e[t])&&e.setAttribute?Cp:el},Du=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ap=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Lu=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},nl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Pp=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},Dp=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?vo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Lp=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ru=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Jt=function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Du,this.d=l||this,this.set=c||el,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Lp,this.m=n,this.mt=r,this.tween=i},s}();Zt(Ga+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return ka[s]=1});rn.TweenMax=rn.TweenLite=_t;rn.TimelineLite=rn.TimelineMax=Kt;nt=new Kt({sortChildren:!1,defaults:Sr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});nn.stringFilter=Mu;var Lr=[],bo={},Rp=[],Iu=0,il=function(e){return(bo[e]||Rp).map(function(t){return t()})},rl=function(){var e=Date.now(),t=[];e-Iu>2&&(il("matchMediaInit"),Lr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=pn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),il("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Iu=e,il("matchMedia"))},Fu=function(){function s(t,n){this.selector=n&&qa(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){ot(n)&&(r=i,i=n,n=ot);var a=this,o=function(){var c=pt,u=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=qa(r)),pt=a,f=i.apply(a,arguments),ot(f)&&a._r.push(f),pt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===ot?o(a):n?a[n]=o:o},e.ignore=function(n){var i=pt;pt=null,n(this),pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof _t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Dr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=Lr.indexOf(this);!!~o&&Lr.splice(o,1)}},e.revert=function(n){this.kill(n||{})},s}(),Ip=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){Gn(n)||(n={matches:n});var a=new Fu(0,r||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=pn.matchMedia(n[c]),l&&(Lr.indexOf(a)<0&&Lr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(rl):l.addEventListener("change",rl)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),So={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return pp(i)})},timeline:function(e){return new Kt(e)},getTweensOf:function(e,t){return nt.getTweensOf(e,t)},getProperty:function(e,t,n,i){bt(e)&&(e=_n(e)[0]);var r=Vi(e||{}).get,a=n?nu:tu;return n==="native"&&(n=""),e&&(t?a((sn[t]&&sn[t].get||r)(e,t,n,i)):function(o,l,c){return a((sn[o]&&sn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=_n(e),e.length>1){var i=e.map(function(u){return an.quickSetter(u,t,n)}),r=i.length;return function(u){for(var f=r;f--;)i[f](u)}}e=e[0]||{};var a=sn[t],o=Vi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Ar._pt=0,f.init(e,n?u+n:u,Ar,0,[e]),f.render(1,f),Ar._pt&&nl(1,Ar)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=an.to(e,Hi((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return nt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xi(e.ease,Sr.ease)),iu(Sr,e||{})},config:function(e){return iu(nn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!sn[o]&&!rn[o]&&ho(t+" effect requires "+o+" plugin.")}),Ba[t]=function(o,l,c){return n(_n(o),mn(l||{},r),c)},a&&(Kt.prototype[t]=function(o,l,c){return this.add(Ba[t](o,Gn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){We[e]=Xi(t)},parseEase:function(e,t){return arguments.length?Xi(e,t):We},getById:function(e){return nt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Kt(e),i,r;for(n.smoothChildTiming=$t(e.smoothChildTiming),nt.remove(n),n._dp=0,n._time=n._tTime=nt._time,i=nt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof _t&&i.vars.onComplete===i._targets[0]))&&Vn(n,i,i._start-i._delay),i=r;return Vn(nt,n,0),n},context:function(e,t){return e?new Fu(e,t):pt},matchMedia:function(e){return new Ip(e)},matchMediaRefresh:function(){return Lr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||rl()},addEventListener:function(e,t){var n=bo[e]||(bo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=bo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:fp,wrapYoyo:hp,distribute:hu,random:pu,snap:du,normalize:up,getUnit:It,clamp:op,splitColor:vu,toArray:_n,selector:qa,mapRange:gu,pipe:lp,unitize:cp,interpolate:dp,shuffle:fu},install:$c,effects:Ba,ticker:on,updateRoot:Kt.updateRoot,plugins:sn,globalTimeline:nt,core:{PropTween:Jt,globals:Zc,Tween:_t,Timeline:Kt,Animation:Dr,getCache:Vi,_removeLinkedListItem:vo,reverting:function(){return jt},context:function(e){return e&&pt&&(pt.data.push(e),e._ctx=pt),pt},suppressOverwrites:function(e){return Da=e}}};Zt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return So[s]=_t[s]});on.add(Kt.updateRoot);Ar=So.to({},{duration:0});var Fp=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Op=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Fp(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},sl=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(bt(r)&&(l={},Zt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Op(o,r)}}}},an=So.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)jt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},sl("roundProps",Ya),sl("modifiers"),sl("snap",du))||So;_t.version=Kt.version=an.version="3.11.3";jc=1;Hc()&&Pr();We.Power0;We.Power1;We.Power2;We.Power3;We.Power4;We.Linear;We.Quad;We.Cubic;We.Quart;We.Quint;We.Strong;We.Elastic;We.Back;We.SteppedEase;We.Bounce;We.Sine;We.Expo;We.Circ;/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ou,yi,Rr,ol,Yi,zu,al,zp=function(){return typeof window!="undefined"},ei={},ji=180/Math.PI,Ir=Math.PI/180,Fr=Math.atan2,Nu=1e8,ll=/([A-Z])/g,Np=/(left|right|width|margin|padding|x)/i,kp=/[\s,\(]\S/,ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Up=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bp=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Gp=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ku=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Uu=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Vp=function(e,t,n){return e.style[t]=n},Hp=function(e,t,n){return e.style.setProperty(t,n)},Wp=function(e,t,n){return e._gsap[t]=n},Xp=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},qp=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Yp=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},it="transform",En=it+"Origin",jp=function(e,t){var n=this,i=this.target,r=i.style;if(e in ei){if(this.tfm=this.tfm||{},e!=="transform"&&(e=ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ni(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:ni(i,e)),this.props.indexOf(it)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(En,t,"")),e=it}(r||t)&&this.props.push(e,t,r[e])},Bu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},$p=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].replace(ll,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=al(),r&&!r.isStart&&!n[it]&&(Bu(n),i.uncache=1)}},Gu=function(e,t){var n={target:e,props:[],revert:$p,save:jp};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Vu,ul=function(e,t){var n=yi.createElementNS?yi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):yi.createElement(e);return n.style?n:yi.createElement(e)},Hn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ll,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Or(t)||t,1)||""},Hu="O,Moz,ms,Ms,Webkit".split(","),Or=function(e,t,n){var i=t||Yi,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Hu[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Hu[a]:"")+e},fl=function(){zp()&&window.document&&(Ou=window,yi=Ou.document,Rr=yi.documentElement,Yi=ul("div")||{style:{}},ul("div"),it=Or(it),En=it+"Origin",Yi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Vu=!!Or("perspective"),al=an.core.reverting,ol=1)},hl=function s(e){var t=ul("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Rr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Rr.removeChild(t),this.style.cssText=r,a},Wu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Xu=function(e){var t;try{t=e.getBBox()}catch{t=hl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===hl||(t=hl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Wu(e,["x","cx","x1"])||0,y:+Wu(e,["y","cy","y1"])||0,width:0,height:0}:t},qu=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Xu(e))},Ps=function(e,t){if(t){var n=e.style;t in ei&&t!==En&&(t=it),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(ll,"-$1").toLowerCase())):n.removeAttribute(t)}},Mi=function(e,t,n,i,r,a){var o=new Jt(e._pt,t,n,0,1,a?Uu:ku);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Yu={deg:1,rad:1,turn:1},Zp={grid:1,flex:1},bi=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Yi.style,l=Np.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",p=i==="%",g,d,m,_;return i===a||!r||Yu[i]||Yu[a]?r:(a!=="px"&&!h&&(r=s(e,t,n,"px")),_=e.getCTM&&qu(e),(p||a==="%")&&(ei[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],ut(p?r/g*f:r/100*g)):(o[l?"width":"height"]=f+(h?a:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===yi||!d.appendChild)&&(d=yi.body),m=d._gsap,m&&p&&m.width&&l&&m.time===on.time&&!m.uncache?ut(r/m.width*f):((p||a==="%")&&!Zp[Hn(d,"display")]&&(o.position=Hn(e,"position")),d===e&&(o.position="static"),d.appendChild(Yi),g=Yi[u],d.removeChild(Yi),o.position="absolute",l&&p&&(m=Vi(d),m.time=on.time,m.width=d[u]),ut(h?g*r/f:g&&r?f/g*r:0))))},ni=function(e,t,n,i){var r;return ol||fl(),t in ti&&t!=="transform"&&(t=ti[t],~t.indexOf(",")&&(t=t.split(",")[0])),ei[t]&&t!=="transform"?(r=Ls(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:To(Hn(e,En))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=wo[t]&&wo[t](e,t,n)||Hn(e,t)||Qc(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?bi(e,t,r,n)+n:r},Kp=function(e,t,n,i){if(!n||n==="none"){var r=Or(t,e,1),a=r&&Hn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Hn(e,"borderTopColor"))}var o=new Jt(this._pt,e.style,t,0,1,Lu),l=0,c=0,u,f,h,p,g,d,m,_,M,E,x,y;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Hn(e,t)||i,e.style[t]=n),u=[n,i],Mu(u),n=u[0],i=u[1],h=n.match(wr)||[],y=i.match(wr)||[],y.length){for(;f=wr.exec(i);)m=f[0],M=i.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(d=h[c++]||"")&&(p=parseFloat(d)||0,x=d.substr((p+"").length),m.charAt(1)==="="&&(m=Tr(p,m)+x),_=parseFloat(m),E=m.substr((_+"").length),l=wr.lastIndex-E.length,E||(E=E||nn.units[t]||x,l===i.length&&(i+=E,o.e+=E)),x!==E&&(p=bi(e,t,d,E)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Uu:ku;return qc.test(i)&&(o.e=0),this._pt=o,o},ju={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Jp=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ju[n]||n,t[1]=ju[i]||i,t.join(" ")},Qp=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],ei[o]&&(l=1,o=o==="transformOrigin"?En:it),Ps(n,o);l&&(Ps(n,it),a&&(a.svg&&n.removeAttribute("transform"),Ls(n,1),a.uncache=1,Bu(i)))}},wo={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Jt(e._pt,t,n,0,0,Qp);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Ds=[1,0,0,1,0,0],$u={},Zu=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ku=function(e){var t=Hn(e,it);return Zu(t)?Ds:t.substr(7).match(Xc).map(ut)},dl=function(e,t){var n=e._gsap||Vi(e),i=e.style,r=Ku(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ds:r):(r===Ds&&!e.offsetParent&&e!==Rr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Rr.appendChild(e)),r=Ku(e),l?i.display=l:Ps(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Rr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},pl=function(e,t,n,i,r,a){var o=e._gsap,l=r||dl(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],_=l[4],M=l[5],E=t.split(" "),x=parseFloat(E[0])||0,y=parseFloat(E[1])||0,S,C,v,w;n?l!==Ds&&(C=p*m-g*d)&&(v=x*(m/C)+y*(-d/C)+(d*M-m*_)/C,w=x*(-g/C)+y*(p/C)-(p*M-g*_)/C,x=v,y=w):(S=Xu(e),x=S.x+(~E[0].indexOf("%")?x/100*S.width:x),y=S.y+(~(E[1]||E[0]).indexOf("%")?y/100*S.height:y)),i||i!==!1&&o.smooth?(_=x-c,M=y-u,o.xOffset=f+(_*p+M*d)-_,o.yOffset=h+(_*g+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=y,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[En]="0px 0px",a&&(Mi(a,o,"xOrigin",c,x),Mi(a,o,"yOrigin",u,y),Mi(a,o,"xOffset",f,o.xOffset),Mi(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+y)},Ls=function(e,t){var n=e._gsap||new Tu(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Hn(e,En)||"0",u,f,h,p,g,d,m,_,M,E,x,y,S,C,v,w,L,R,H,K,I,k,F,G,B,N,A,Q,X,ee,ie,he;return u=f=h=d=m=_=M=E=x=0,p=g=1,n.svg=!!(e.getCTM&&qu(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[it]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[it]!=="none"?l[it]:"")),i.scale=i.rotate=i.translate="none"),C=dl(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),pl(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,C)),y=n.xOrigin||0,S=n.yOrigin||0,C!==Ds&&(R=C[0],H=C[1],K=C[2],I=C[3],u=k=C[4],f=F=C[5],C.length===6?(p=Math.sqrt(R*R+H*H),g=Math.sqrt(I*I+K*K),d=R||H?Fr(H,R)*ji:0,M=K||I?Fr(K,I)*ji+d:0,M&&(g*=Math.abs(Math.cos(M*Ir))),n.svg&&(u-=y-(y*R+S*K),f-=S-(y*H+S*I))):(he=C[6],ee=C[7],A=C[8],Q=C[9],X=C[10],ie=C[11],u=C[12],f=C[13],h=C[14],v=Fr(he,X),m=v*ji,v&&(w=Math.cos(-v),L=Math.sin(-v),G=k*w+A*L,B=F*w+Q*L,N=he*w+X*L,A=k*-L+A*w,Q=F*-L+Q*w,X=he*-L+X*w,ie=ee*-L+ie*w,k=G,F=B,he=N),v=Fr(-K,X),_=v*ji,v&&(w=Math.cos(-v),L=Math.sin(-v),G=R*w-A*L,B=H*w-Q*L,N=K*w-X*L,ie=I*L+ie*w,R=G,H=B,K=N),v=Fr(H,R),d=v*ji,v&&(w=Math.cos(v),L=Math.sin(v),G=R*w+H*L,B=k*w+F*L,H=H*w-R*L,F=F*w-k*L,R=G,k=B),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),p=ut(Math.sqrt(R*R+H*H+K*K)),g=ut(Math.sqrt(F*F+he*he)),v=Fr(k,F),M=Math.abs(v)>2e-4?v*ji:0,x=ie?1/(ie<0?-ie:ie):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Zu(Hn(e,it)),G&&e.setAttribute("transform",G))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(p*=-1,M+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=ut(p),n.scaleY=ut(g),n.rotation=ut(d)+o,n.rotationX=ut(m)+o,n.rotationY=ut(_)+o,n.skewX=M+o,n.skewY=E+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[En]=To(c)),n.xOffset=n.yOffset=0,n.force3D=nn.force3D,n.renderTransform=n.svg?tm:Vu?Ju:em,n.uncache=0,n},To=function(e){return(e=e.split(" "))[0]+" "+e[1]},ml=function(e,t,n){var i=It(t);return ut(parseFloat(t)+parseFloat(bi(e,"x",n+"px",i)))+i},em=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ju(e,t)},$i="0deg",Rs="0px",Zi=") ",Ju=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,_=n.force3D,M=n.target,E=n.zOrigin,x="",y=_==="auto"&&e&&e!==1||_===!0;if(E&&(f!==$i||u!==$i)){var S=parseFloat(u)*Ir,C=Math.sin(S),v=Math.cos(S),w;S=parseFloat(f)*Ir,w=Math.cos(S),a=ml(M,a,C*w*-E),o=ml(M,o,-Math.sin(S)*-E),l=ml(M,l,v*w*-E+E)}m!==Rs&&(x+="perspective("+m+Zi),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(y||a!==Rs||o!==Rs||l!==Rs)&&(x+=l!==Rs||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Zi),c!==$i&&(x+="rotate("+c+Zi),u!==$i&&(x+="rotateY("+u+Zi),f!==$i&&(x+="rotateX("+f+Zi),(h!==$i||p!==$i)&&(x+="skew("+h+", "+p+Zi),(g!==1||d!==1)&&(x+="scale("+g+", "+d+Zi),M.style[it]=x||"translate(0, 0)"},tm=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,_=n.yOffset,M=n.forceCSS,E=parseFloat(a),x=parseFloat(o),y,S,C,v,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ir,c*=Ir,y=Math.cos(l)*f,S=Math.sin(l)*f,C=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=Ir,w=Math.tan(c-u),w=Math.sqrt(1+w*w),C*=w,v*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),y*=w,S*=w)),y=ut(y),S=ut(S),C=ut(C),v=ut(v)):(y=f,v=h,S=C=0),(E&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(E=bi(p,"x",a,"px"),x=bi(p,"y",o,"px")),(g||d||m||_)&&(E=ut(E+g-(g*y+d*C)+m),x=ut(x+d-(g*S+d*v)+_)),(i||r)&&(w=p.getBBox(),E=ut(E+i/100*w.width),x=ut(x+r/100*w.height)),w="matrix("+y+","+S+","+C+","+v+","+E+","+x+")",p.setAttribute("transform",w),M&&(p.style[it]=w)},nm=function(e,t,n,i,r){var a=360,o=bt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?ji:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Nu)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Nu)%a-~~(c/a)*a)),e._pt=h=new Jt(e._pt,t,n,i,c,Up),h.e=u,h.u="deg",e._props.push(n),h},Qu=function(e,t){for(var n in t)e[n]=t[n];return e},im=function(e,t,n){var i=Qu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[it]=t,o=Ls(n,1),Ps(n,it),n.setAttribute("transform",c)):(c=getComputedStyle(n)[it],a[it]=t,o=Ls(n,1),a[it]=c);for(l in ei)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(p=It(c),g=It(u),f=p!==g?bi(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Jt(e._pt,o,l,f,h-f,cl),e._pt.u=g||0,e._props.push(l));Qu(o,i)};Zt("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});wo[e>1?"border"+s:s]=function(o,l,c,u,f){var h,p;if(arguments.length<4)return h=a.map(function(g){return ni(o,g,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},a.forEach(function(g,d){return p[g]=h[d]=h[d]||h[(d-1)/2|0]}),o.init(l,p,f)}});var ef={name:"css",register:fl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,p,g,d,m,_,M,E,x,y,S,C,v;ol||fl(),this.styles=this.styles||Gu(e),v=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(sn[d]&&Eu(d,t,n,i,e,r)))){if(p=typeof u,g=wo[d],p==="function"&&(u=u.call(n,i,e,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=ws(u)),g)g(this,e,d,u,n)&&(C=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",vi.lastIndex=0,vi.test(c)||(m=It(c),_=It(u)),_?m!==_&&(c=bi(e,d,c,_)+_):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,d),a.push(d),v.push(d,0,o[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,r):l[d],bt(c)&&~c.indexOf("random(")&&(c=ws(c)),It(c+"")||(c+=nn.units[d]||It(ni(e,d))||""),(c+"").charAt(1)==="="&&(c=ni(e,d))):c=ni(e,d),h=parseFloat(c),M=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),d in ti&&(d==="autoAlpha"&&(h===1&&ni(e,"visibility")==="hidden"&&f&&(h=0),v.push("visibility",0,o.visibility),Mi(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=ti[d],~d.indexOf(",")&&(d=d.split(",")[0]))),E=d in ei,E){if(this.styles.save(d),x||(y=e._gsap,y.renderTransform&&!t.parseTransform||Ls(e,t.parseTransform),S=t.smoothOrigin!==!1&&y.smooth,x=this._pt=new Jt(this._pt,o,it,0,1,y.renderTransform,y,0,-1),x.dep=1),d==="scale")this._pt=new Jt(this._pt,y,"scaleY",h,(M?Tr(h,M+f):f)-h||0,cl),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){v.push(En,0,o[En]),u=Jp(u),y.svg?pl(e,u,0,S,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==y.zOrigin&&Mi(this,y,"zOrigin",y.zOrigin,_),Mi(this,o,d,To(c),To(u)));continue}else if(d==="svgOrigin"){pl(e,u,1,S,0,this);continue}else if(d in $u){nm(this,y,d,h,M?Tr(h,M+u):u);continue}else if(d==="smoothOrigin"){Mi(this,y,"smooth",y.smooth,u);continue}else if(d==="force3D"){y[d]=u;continue}else if(d==="transform"){im(this,u,e);continue}}else d in o||(d=Or(d)||d);if(E||(f||f===0)&&(h||h===0)&&!kp.test(u)&&d in o)m=(c+"").substr((h+"").length),f||(f=0),_=It(u)||(d in nn.units?nn.units[d]:m),m!==_&&(h=bi(e,d,c,_)),this._pt=new Jt(this._pt,E?y:o,d,h,(M?Tr(h,M+f):f)-h,!E&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?Gp:cl),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Bp);else if(d in o)Kp.call(this,e,d,c,M?M+u:u);else if(d in e)this.add(e,d,c||e[d],M?M+u:u,i,r);else{Na(d,u);continue}E||(d in o?v.push(d,0,o[d]):v.push(d,1,c||e[d])),a.push(d)}}C&&Ru(this)},render:function(e,t){if(t.tween._time||!al())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ni,aliases:ti,getSetter:function(e,t,n){var i=ti[t];return i&&i.indexOf(",")<0&&(t=i),t in ei&&t!==En&&(e._gsap.x||ni(e,"x"))?n&&zu===n?t==="scale"?Xp:Wp:(zu=n||{})&&(t==="scale"?qp:Yp):e.style&&!Ra(e.style[t])?Vp:~t.indexOf("-")?Hp:tl(e,t)},core:{_removeProperty:Ps,_getMatrix:dl}};an.utils.checkPrefix=Or;an.core.getStyleSaver=Gu;(function(s,e,t,n){var i=Zt(s+","+e+","+t,function(r){ei[r]=1});Zt(e,function(r){nn.units[r]="deg",$u[r]=1}),ti[i[13]]=s+","+e,Zt(n,function(r){var a=r.split(":");ti[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){nn.units[s]="px"});an.registerPlugin(ef);var rm=an.registerPlugin(ef)||an;rm.core.Tween;function Ut(){if(!(this instanceof Ut))return new Ut;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}var Is=window.document.documentElement,sm=Is.matches||Is.webkitMatchesSelector||Is.mozMatchesSelector||Is.oMatchesSelector||Is.msMatchesSelector;Ut.prototype.matchesSelector=function(s,e){return sm.call(s,e)};Ut.prototype.querySelectorAll=function(s,e){return e.querySelectorAll(s)};Ut.prototype.indexes=[];var om=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;Ut.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(om))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var am=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;Ut.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(am))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if(typeof t=="string")return t.split(/\s/);if(typeof t=="object"&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var lm=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;Ut.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(lm))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}});Ut.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}};var gl;typeof window.Map=="function"?gl=window.Map:gl=function(){function s(){this.map={}}return s.prototype.get=function(e){return this.map[e+" "]},s.prototype.set=function(e,t){this.map[e+" "]=t},s}();var tf=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function nf(s,e){s=s.slice(0).concat(s.default);var t=s.length,n,i,r,a,o=e,l,c,u=[];do if(tf.exec(""),(r=tf.exec(o))&&(o=r[3],r[2]||!o)){for(n=0;n<t;n++)if(c=s[n],l=c.selector(r[1])){for(i=u.length,a=!1;i--;)if(u[i].index===c&&u[i].key===l){a=!0;break}a||u.push({index:c,key:l});break}}while(r);return u}function cm(s,e){var t,n,i;for(t=0,n=s.length;t<n;t++)if(i=s[t],e.isPrototypeOf(i))return i}Ut.prototype.logDefaultIndexUsed=function(){};Ut.prototype.add=function(s,e){var t,n,i,r,a,o,l,c,u=this.activeIndexes,f=this.selectors,h=this.selectorObjects;if(typeof s=="string"){for(t={id:this.uid++,selector:s,data:e},h[t.id]=t,l=nf(this.indexes,s),n=0;n<l.length;n++)c=l[n],r=c.key,i=c.index,a=cm(u,i),a||(a=Object.create(i),a.map=new gl,u.push(a)),i===this.indexes.default&&this.logDefaultIndexUsed(t),o=a.map.get(r),o||(o=[],a.map.set(r,o)),o.push(t);this.size++,f.push(s)}};Ut.prototype.remove=function(s,e){if(typeof s=="string"){var t,n,i,r,a,o,l,c,u=this.activeIndexes,f=this.selectors=[],h=this.selectorObjects,p={},g=arguments.length===1;for(t=nf(this.indexes,s),i=0;i<t.length;i++)for(n=t[i],r=u.length;r--;)if(o=u[r],n.index.isPrototypeOf(o)){if(l=o.map.get(n.key),l)for(a=l.length;a--;)c=l[a],c.selector===s&&(g||c.data===e)&&(l.splice(a,1),p[c.id]=!0);break}for(i in p)delete h[i],this.size--;for(i in h)f.push(h[i].selector)}};function rf(s,e){return s.id-e.id}Ut.prototype.queryAll=function(s){if(!this.selectors.length)return[];var e={},t=[],n=this.querySelectorAll(this.selectors.join(", "),s),i,r,a,o,l,c,u,f;for(i=0,a=n.length;i<a;i++)for(l=n[i],c=this.matches(l),r=0,o=c.length;r<o;r++)f=c[r],e[f.id]?u=e[f.id]:(u={id:f.id,selector:f.selector,data:f.data,elements:[]},e[f.id]=u,t.push(u)),u.elements.push(l);return t.sort(rf)};Ut.prototype.matches=function(s){if(!s)return[];var e,t,n,i,r,a,o,l,c,u,f,h=this.activeIndexes,p={},g=[];for(e=0,i=h.length;e<i;e++)if(o=h[e],l=o.element(s),l){for(t=0,r=l.length;t<r;t++)if(c=o.map.get(l[t]))for(n=0,a=c.length;n<a;n++)u=c[n],f=u.id,!p[f]&&this.matchesSelector(s,u.selector)&&(p[f]=!0,g.push(u))}return g.sort(rf)};const zr={},Cn={},sf=["mouseenter","mouseleave"];function of(s){Cn[s]===void 0&&(Cn[s]=[])}function um(s,e){if(Cn[s])for(let t=0;t<Cn[s].length;t++)Cn[s][t](...e)}function af(s){return typeof s=="string"?document.querySelectorAll(s):s}function _l(s){let e=fm(zr[s.type],s.target);if(e.length)for(let t=0;t<e.length;t++)for(let n=0;n<e[t].stack.length;n++)sf.indexOf(s.type)!==-1?(lf(s,e[t].delegatedTarget),s.target===e[t].delegatedTarget&&e[t].stack[n].data(s)):(lf(s,e[t].delegatedTarget),e[t].stack[n].data(s))}function fm(s,e){const t=[];let n=e;do{if(n.nodeType!==1)break;const i=s.matches(n);i.length&&t.push({delegatedTarget:n,stack:i})}while(n=n.parentElement);return t}function lf(s,e){Object.defineProperty(s,"currentTarget",{configurable:!0,enumerable:!0,value:e})}function cf(s){return JSON.parse(JSON.stringify(s))}class vM{bindAll(e,t){t===void 0&&(t=Object.getOwnPropertyNames(Object.getPrototypeOf(e)));for(let n=0;n<t.length;n++)e[t[n]]=e[t[n]].bind(e)}on(e,t,n,i){if(typeof t=="function"&&n===void 0){of(e),Cn[e].push(t);return}const r=e.split(" ");for(let a=0;a<r.length;a++){if(t.nodeType&&t.nodeType===1||t===window||t===document){t.addEventListener(r[a],n,i);continue}t=af(t);for(let o=0;o<t.length;o++)t[o].addEventListener(r[a],n,i)}}delegate(e,t,n){const i=e.split(" ");for(let r=0;r<i.length;r++){let a=zr[i[r]];a===void 0&&(a=new Ut,zr[i[r]]=a,sf.indexOf(i[r])!==-1?document.addEventListener(i[r],_l,!0):document.addEventListener(i[r],_l)),a.add(t,n)}}off(e,t,n){if(t===void 0){Cn[e]=[];return}if(typeof t=="function"){of(e);for(let r=0;r<Cn[e].length;r++)Cn[e][r]===t&&Cn[e].splice(r,1);return}const i=e.split(" ");for(let r=0;r<i.length;r++){const a=zr[i[r]];if(a!==void 0&&(a.remove(t,n),a.size===0)){delete zr[i[r]],document.removeEventListener(i[r],_l);continue}if(t.removeEventListener!==void 0){t.removeEventListener(i[r],n);continue}t=af(t);for(let o=0;o<t.length;o++)t[o].removeEventListener(i[r],n)}}emit(e,...t){um(e,t)}debugDelegated(){return cf(zr)}debugBus(){return cf(Cn)}}var Fs=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/*!
 * dashify <https://github.com/jonschlinkert/dashify>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */var hm=function(e){if(typeof e!="string")throw new TypeError("expected a string");return e=e.replace(/([a-z])([A-Z])/g,"$1-$2"),e=e.replace(/[ \t\W]/g,"-"),e=e.replace(/^-+|-+$/g,""),e.toLowerCase()},dm=hm,xM=new vl;function vl(){var s=navigator.userAgent.toLowerCase(),e=navigator.appVersion.toLowerCase(),t=/windows phone|iemobile|wpdesktop/.test(s),n=!t&&/android.*mobile/.test(s),i=!t&&!n&&/android/i.test(s),r=n||i,a=!t&&/ip(hone|od|ad)/i.test(s)&&!window.MSStream,o=!t&&/ipad/i.test(s)&&a,l=i||o,c=n||a&&!o||t,u=c||l,f=s.indexOf("firefox")>-1,h=!!s.match(/version\/[\d\.]+.*safari/),p=s.indexOf("opr")>-1,g=!window.ActiveXObject&&"ActiveXObject"in window,d=e.indexOf("msie")>-1||g||e.indexOf("edge")>-1,m=s.indexOf("edge")>-1,_=window.chrome!==null&&window.chrome!==void 0&&navigator.vendor.toLowerCase()=="google inc."&&!p&&!m;this.infos={isDroid:r,isDroidPhone:n,isDroidTablet:i,isWindowsPhone:t,isIos:a,isIpad:o,isDevice:u,isEdge:m,isIE:d,isIE11:g,isPhone:c,isTablet:l,isFirefox:f,isSafari:h,isOpera:p,isChrome:_,isDesktop:!c&&!l},Object.keys(this.infos).forEach(function(M){Object.defineProperty(this,M,{get:function(){return this.infos[M]}})},this),Object.freeze(this)}vl.prototype.addClasses=function(s){Object.keys(this.infos).forEach(function(e){this.infos[e]&&pm(s,dm(e))},this)};vl.prototype.getInfos=function(){return mm(this.infos)};function pm(s,e){s.addClass?s.addClass(e):s.classList?s.classList.add(e):s.className+=" "+e}function mm(s){return JSON.parse(JSON.stringify(s))}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="142",yM={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},MM={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gm=0,uf=1,_m=2,ff=1,vm=2,Os=3,zs=0,An=1,Nr=2,xm=1,Si=0,kr=1,hf=2,df=3,pf=4,ym=5,Ur=100,Mm=101,bm=102,mf=103,gf=104,Sm=200,wm=201,Tm=202,Em=203,_f=204,vf=205,Cm=206,Am=207,Pm=208,Dm=209,Lm=210,Rm=0,Im=1,Fm=2,yl=3,Om=4,zm=5,Nm=6,km=7,xf=0,Um=1,Bm=2,ii=0,Gm=1,Vm=2,Hm=3,Wm=4,Xm=5,yf=300,Br=301,Gr=302,Ml=303,bl=304,Eo=306,Sl=1e3,Pn=1001,wl=1002,Qt=1003,Mf=1004,bf=1005,xn=1006,qm=1007,Co=1008,Ki=1009,Ym=1010,jm=1011,Sf=1012,$m=1013,Ji=1014,Qi=1015,Ns=1016,Zm=1017,Km=1018,Vr=1020,Jm=1021,Qm=1022,Wn=1023,eg=1024,tg=1025,er=1026,Hr=1027,ng=1028,ig=1029,rg=1030,sg=1031,og=1033,Tl=33776,El=33777,Cl=33778,Al=33779,wf=35840,Tf=35841,Ef=35842,Cf=35843,ag=36196,Af=37492,Pf=37496,Df=37808,Lf=37809,Rf=37810,If=37811,Ff=37812,Of=37813,zf=37814,Nf=37815,kf=37816,Uf=37817,Bf=37818,Gf=37819,Vf=37820,Hf=37821,Wf=36492,tr=3e3,at=3001,lg=3200,cg=3201,ug=0,fg=1,ri="srgb",nr="srgb-linear",Pl=7680,hg=519,Xf=35044,qf="300 es",Dl=1035;class Wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yf=1234567;const ks=Math.PI/180,Ao=180/Math.PI;function Xr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[s&255]+Ft[s>>8&255]+Ft[s>>16&255]+Ft[s>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Bt(s,e,t){return Math.max(e,Math.min(t,s))}function Ll(s,e){return(s%e+e)%e}function dg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function pg(s,e,t){return s!==e?(t-s)/(e-s):0}function Us(s,e,t){return(1-t)*s+t*e}function mg(s,e,t,n){return Us(s,e,1-Math.exp(-t*n))}function gg(s,e=1){return e-Math.abs(Ll(s,e*2)-e)}function _g(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function vg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function xg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function yg(s,e){return s+Math.random()*(e-s)}function Mg(s){return s*(.5-Math.random())}function bg(s){s!==void 0&&(Yf=s);let e=Yf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sg(s){return s*ks}function wg(s){return s*Ao}function Rl(s){return(s&s-1)==0&&s!==0}function Tg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Po(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Eg(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*f,l*h,o*c);break;case"YZY":s.set(l*h,o*u,l*f,o*c);break;case"ZXZ":s.set(l*f,l*h,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Cg(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ag(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var bM=Object.freeze({__proto__:null,DEG2RAD:ks,RAD2DEG:Ao,generateUUID:Xr,clamp:Bt,euclideanModulo:Ll,mapLinear:dg,inverseLerp:pg,lerp:Us,damp:mg,pingpong:gg,smoothstep:_g,smootherstep:vg,randInt:xg,randFloat:yg,randFloatSpread:Mg,seededRandom:bg,degToRad:Sg,radToDeg:wg,isPowerOfTwo:Rl,ceilPowerOfTwo:Tg,floorPowerOfTwo:Po,setQuaternionFromProperEuler:Eg,normalize:Ag,denormalize:Cg});class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yn{constructor(){yn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],d=i[0],m=i[3],_=i[6],M=i[1],E=i[4],x=i[7],y=i[2],S=i[5],C=i[8];return r[0]=a*d+o*M+l*y,r[3]=a*m+o*E+l*S,r[6]=a*_+o*x+l*C,r[1]=c*d+u*M+f*y,r[4]=c*m+u*E+f*S,r[7]=c*_+u*x+f*C,r[2]=h*d+p*M+g*y,r[5]=h*m+p*E+g*S,r[8]=h*_+p*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,p=c*r-a*l,g=t*f+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=f*d,e[1]=(i*c-u*n)*d,e[2]=(o*n-i*a)*d,e[3]=h*d,e[4]=(u*t-i*l)*d,e[5]=(i*r-o*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(a*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*r+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function jf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function Bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ir(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Do(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Il={[ri]:{[nr]:ir},[nr]:{[ri]:Do}},Dn={legacyMode:!0,get workingColorSpace(){return nr},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Il[e]&&Il[e][t]!==void 0){const n=Il[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},$f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vt={r:0,g:0,b:0},Ln={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Fl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Ro(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=nr){return this.r=e,this.g=t,this.b=n,Dn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=nr){if(e=Ll(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fl(a,r,e+1/3),this.g=Fl(a,r,e),this.b=Fl(a,r,e-1/3)}return Dn.toWorkingColorSpace(this,i),this}setStyle(e,t=ri){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Dn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Dn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Dn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Dn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ri){const n=$f[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Dn.fromWorkingColorSpace(Ro(this,vt),e),Bt(vt.r*255,0,255)<<16^Bt(vt.g*255,0,255)<<8^Bt(vt.b*255,0,255)<<0}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nr){Dn.fromWorkingColorSpace(Ro(this,vt),t);const n=vt.r,i=vt.g,r=vt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nr){return Dn.fromWorkingColorSpace(Ro(this,vt),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=ri){return Dn.fromWorkingColorSpace(Ro(this,vt),e),e!==ri?`color(${e} ${vt.r} ${vt.g} ${vt.b})`:`rgb(${vt.r*255|0},${vt.g*255|0},${vt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ln),Ln.h+=e,Ln.s+=t,Ln.l+=n,this.setHSL(Ln.h,Ln.s,Ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Lo);const n=Us(Ln.h,Lo.h,t),i=Us(Ln.s,Lo.s,t),r=Us(Ln.l,Lo.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}et.NAMES=$f;let qr;class Zf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qr===void 0&&(qr=Bs("canvas")),qr.width=e.width,qr.height=e.height;const n=qr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ir(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ir(t[n]/255)*255):t[n]=ir(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Kf{constructor(e=null){this.isSource=!0,this.uuid=Xr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ol(i[a].image)):r.push(Ol(i[a]))}else r=Ol(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ol(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Zf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pg=0;class Mn extends Wr{constructor(e=Mn.DEFAULT_IMAGE,t=Mn.DEFAULT_MAPPING,n=Pn,i=Pn,r=xn,a=Co,o=Wn,l=Ki,c=1,u=tr){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Xr(),this.name="",this.source=new Kf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sl:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sl:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=yf;class St{constructor(e=0,t=0,n=0,i=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const a=.01,o=.1,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<a&&Math.abs(f-d)<a&&Math.abs(g-m)<a){if(Math.abs(u+h)<o&&Math.abs(f+d)<o&&Math.abs(g+m)<o&&Math.abs(c+p+_-3)<o)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,x=(p+1)/2,y=(_+1)/2,S=(u+h)/4,C=(f+d)/4,v=(g+m)/4;return E>x&&E>y?E<a?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=S/n,r=C/n):x>y?x<a?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=S/i,r=v/i):y<a?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=C/r,i=v/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-d)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rr extends Wr{constructor(e,t,n={}){super();this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Mn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jf extends Mn{constructor(e=null,t=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dg extends Mn{constructor(e=null,t=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=r[a+0],p=r[a+1],g=r[a+2],d=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(f!==d||l!==h||c!==p||u!==g){let m=1-o;const _=l*h+c*p+u*g+f*d,M=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const y=Math.sqrt(E),S=Math.atan2(y,_*M);m=Math.sin(m*S)/y,o=Math.sin(o*S)/y}const x=o*M;if(l=l*m+h*x,c=c*m+p*x,u=u*m+g*x,f=f*m+d*x,m===1-o){const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[a],h=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-o*p,e[t+2]=c*g+u*p+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(r/2),h=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Qf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,f=l*i+r*n-a*t,h=-r*t-a*n-o*i;return this.x=c*l+h*-r+u*-o-f*-a,this.y=u*l+h*-a+f*-r-c*-o,this.z=f*l+h*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zl=new U,Qf=new Gs;class Vs{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)sr.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(sr)}else n.boundingBox===null&&n.computeBoundingBox(),Nl.copy(n.boundingBox),Nl.applyMatrix4(e.matrixWorld),this.union(Nl);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,sr),sr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),Io.subVectors(this.max,Hs),Yr.subVectors(e.a,Hs),jr.subVectors(e.b,Hs),$r.subVectors(e.c,Hs),wi.subVectors(jr,Yr),Ti.subVectors($r,jr),or.subVectors(Yr,$r);let t=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-or.z,or.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,or.z,0,-or.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-or.y,or.x,0];return!kl(t,Yr,jr,$r,Io)||(t=[1,0,0,0,1,0,0,0,1],!kl(t,Yr,jr,$r,Io))?!1:(Fo.crossVectors(wi,Ti),t=[Fo.x,Fo.y,Fo.z],kl(t,Yr,jr,$r,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return sr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(sr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new U,new U,new U,new U,new U,new U,new U,new U],sr=new U,Nl=new Vs,Yr=new U,jr=new U,$r=new U,wi=new U,Ti=new U,or=new U,Hs=new U,Io=new U,Fo=new U,ar=new U;function kl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ar.fromArray(s,r);const o=i.x*Math.abs(ar.x)+i.y*Math.abs(ar.y)+i.z*Math.abs(ar.z),l=e.dot(ar),c=t.dot(ar),u=n.dot(ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Lg=new Vs,eh=new U,Oo=new U,Ul=new U;class zo{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ul.subVectors(e,this.center);const t=Ul.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ul.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Oo.set(0,0,1).multiplyScalar(e.radius):Oo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(eh.copy(e.center).add(Oo)),this.expandByPoint(eh.copy(e.center).sub(Oo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new U,Bl=new U,No=new U,Ei=new U,Gl=new U,ko=new U,Vl=new U;class th{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.direction).multiplyScalar(t).add(this.origin),oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bl.copy(e).add(t).multiplyScalar(.5),No.copy(t).sub(e).normalize(),Ei.copy(this.origin).sub(Bl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(No),o=Ei.dot(this.direction),l=-Ei.dot(No),c=Ei.lengthSq(),u=Math.abs(1-a*a);let f,h,p,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(No).multiplyScalar(h).add(Bl),p}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const n=oi.dot(this.direction),i=oi.dot(oi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,n,i,r){Gl.subVectors(t,e),ko.subVectors(n,e),Vl.crossVectors(Gl,ko);let a=this.direction.dot(Vl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(ko.crossVectors(Ei,ko));if(l<0)return null;const c=o*this.direction.dot(Gl.cross(Ei));if(c<0||l+c>a)return null;const u=-o*Ei.dot(Vl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,c,u,f,h,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Zr.setFromMatrixColumn(e,0).length(),r=1/Zr.setFromMatrixColumn(e,1).length(),a=1/Zr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,p=a*f,g=o*u,d=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-d*c,t[9]=-o*l,t[2]=d-h*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h+d*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=d+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h-d*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=d-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,g=o*u,d=o*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,g=o*l,d=o*c;t[0]=l*u,t[4]=d-h*f,t[8]=g*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-d*f}else if(e.order==="XZY"){const h=a*l,p=a*c,g=o*l,d=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=a*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rg,e,Ig)}lookAt(e,t,n){const i=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ci.crossVectors(n,ln),Ci.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ci.crossVectors(n,ln)),Ci.normalize(),Uo.crossVectors(ln,Ci),i[0]=Ci.x,i[4]=Uo.x,i[8]=ln.x,i[1]=Ci.y,i[5]=Uo.y,i[9]=ln.y,i[2]=Ci.z,i[6]=Uo.z,i[10]=ln.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],M=n[3],E=n[7],x=n[11],y=n[15],S=i[0],C=i[4],v=i[8],w=i[12],L=i[1],R=i[5],H=i[9],K=i[13],I=i[2],k=i[6],F=i[10],G=i[14],B=i[3],N=i[7],A=i[11],Q=i[15];return r[0]=a*S+o*L+l*I+c*B,r[4]=a*C+o*R+l*k+c*N,r[8]=a*v+o*H+l*F+c*A,r[12]=a*w+o*K+l*G+c*Q,r[1]=u*S+f*L+h*I+p*B,r[5]=u*C+f*R+h*k+p*N,r[9]=u*v+f*H+h*F+p*A,r[13]=u*w+f*K+h*G+p*Q,r[2]=g*S+d*L+m*I+_*B,r[6]=g*C+d*R+m*k+_*N,r[10]=g*v+d*H+m*F+_*A,r[14]=g*w+d*K+m*G+_*Q,r[3]=M*S+E*L+x*I+y*B,r[7]=M*C+E*R+x*k+y*N,r[11]=M*v+E*H+x*F+y*A,r[15]=M*w+E*K+x*G+y*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+r*l*f-i*c*f-r*o*h+n*c*h+i*o*p-n*l*p)+d*(+t*l*p-t*c*h+r*a*h-i*a*p+i*c*u-r*l*u)+m*(+t*c*f-t*o*p-r*a*f+n*a*p+r*o*u-n*c*u)+_*(-i*o*u-t*l*f+t*o*h+i*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],M=f*m*c-d*h*c+d*l*p-o*m*p-f*l*_+o*h*_,E=g*h*c-u*m*c-g*l*p+a*m*p+u*l*_-a*h*_,x=u*d*c-g*f*c+g*o*p-a*d*p-u*o*_+a*f*_,y=g*f*l-u*d*l-g*o*h+a*d*h+u*o*m-a*f*m,S=t*M+n*E+i*x+r*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/S;return e[0]=M*C,e[1]=(d*h*r-f*m*r-d*i*p+n*m*p+f*i*_-n*h*_)*C,e[2]=(o*m*r-d*l*r+d*i*c-n*m*c-o*i*_+n*l*_)*C,e[3]=(f*l*r-o*h*r-f*i*c+n*h*c+o*i*p-n*l*p)*C,e[4]=E*C,e[5]=(u*m*r-g*h*r+g*i*p-t*m*p-u*i*_+t*h*_)*C,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*_-t*l*_)*C,e[7]=(a*h*r-u*l*r+u*i*c-t*h*c-a*i*p+t*l*p)*C,e[8]=x*C,e[9]=(g*f*r-u*d*r-g*n*p+t*d*p+u*n*_-t*f*_)*C,e[10]=(a*d*r-g*o*r+g*n*c-t*d*c-a*n*_+t*o*_)*C,e[11]=(u*o*r-a*f*r-u*n*c+t*f*c+a*n*p-t*o*p)*C,e[12]=y*C,e[13]=(u*d*i-g*f*i+g*n*h-t*d*h-u*n*m+t*f*m)*C,e[14]=(g*o*i-a*d*i-g*n*l+t*d*l+a*n*m-t*o*m)*C,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*h+t*o*h)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,p=r*u,g=r*f,d=a*u,m=a*f,_=o*f,M=l*c,E=l*u,x=l*f,y=n.x,S=n.y,C=n.z;return i[0]=(1-(d+_))*y,i[1]=(p+x)*y,i[2]=(g-E)*y,i[3]=0,i[4]=(p-x)*S,i[5]=(1-(h+_))*S,i[6]=(m+M)*S,i[7]=0,i[8]=(g+E)*C,i[9]=(m-M)*C,i[10]=(1-(h+d))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Zr.set(i[0],i[1],i[2]).length();const a=Zr.set(i[4],i[5],i[6]).length(),o=Zr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Rn.copy(this);const c=1/r,u=1/a,f=1/o;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,t.setFromRotationMatrix(Rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),f=(t+e)*l,h=(n+i)*c,p=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zr=new U,Rn=new wt,Rg=new U(0,0,0),Ig=new U(1,1,1),Ci=new U,Uo=new U,ln=new U,nh=new wt,ih=new Gs;class Ws{constructor(e=0,t=0,n=0,i=Ws.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ws.DefaultOrder="XYZ";Ws.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class rh{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let Fg=0;const sh=new U,Kr=new Gs,ai=new wt,Bo=new U,Xs=new U,Og=new U,zg=new Gs,oh=new U(1,0,0),ah=new U(0,1,0),lh=new U(0,0,1),Ng={type:"added"},ch={type:"removed"};class bn extends Wr{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DefaultUp.clone();const e=new U,t=new Ws,n=new Gs,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wt},normalMatrix:{value:new yn}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=bn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(oh,e)}rotateY(e){return this.rotateOnAxis(ah,e)}rotateZ(e){return this.rotateOnAxis(lh,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oh,e)}translateY(e){return this.translateOnAxis(ah,e)}translateZ(e){return this.translateOnAxis(lh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bo.copy(e):Bo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Xs,Bo,this.up):ai.lookAt(Bo,Xs,this.up),this.quaternion.setFromRotationMatrix(ai),i&&(ai.extractRotation(i.matrixWorld),Kr.setFromRotationMatrix(ai),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ng)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ch)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ch)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,Og),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,zg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bn.DefaultUp=new U(0,1,0);bn.DefaultMatrixAutoUpdate=!0;const In=new U,li=new U,Hl=new U,ci=new U,Jr=new U,Qr=new U,uh=new U,Wl=new U,Xl=new U,ql=new U;class ui{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),In.subVectors(e,t),i.cross(In);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){In.subVectors(i,t),li.subVectors(n,t),Hl.subVectors(e,t);const a=In.dot(In),o=In.dot(li),l=In.dot(Hl),c=li.dot(li),u=li.dot(Hl),f=a*c-o*o;if(f===0)return r.set(-2,-1,-1);const h=1/f,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ci),ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ci),l.set(0,0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l}static isFrontFacing(e,t,n,i){return In.subVectors(n,t),li.subVectors(e,t),In.cross(li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),li.subVectors(this.a,this.b),In.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ui.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Jr.subVectors(i,n),Qr.subVectors(r,n),Wl.subVectors(e,n);const l=Jr.dot(Wl),c=Qr.dot(Wl);if(l<=0&&c<=0)return t.copy(n);Xl.subVectors(e,i);const u=Jr.dot(Xl),f=Qr.dot(Xl);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Jr,a);ql.subVectors(e,r);const p=Jr.dot(ql),g=Qr.dot(ql);if(g>=0&&p<=g)return t.copy(r);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Qr,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return uh.subVectors(r,i),o=(f-u)/(f-u+(p-g)),t.copy(i).addScaledVector(uh,o);const _=1/(m+d+h);return a=d*_,o=h*_,t.copy(n).addScaledVector(Jr,a).addScaledVector(Qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let kg=0;class qs extends Wr{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=kr,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_f,this.blendDst=vf,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pl,this.stencilZFail=Pl,this.stencilZPass=Pl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===xm;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(n.blending=this.blending),this.side!==zs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fh extends qs{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new U,Go=new Ke;class Xn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Xf,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new et),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new Ke),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new U),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new St),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Go.fromBufferAttribute(this,t),Go.applyMatrix3(e),this.setXY(t,Go.x,Go.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class hh extends Xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dh extends Xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lr extends Xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ug=0;const Sn=new wt,Yl=new bn,es=new U,cn=new Vs,Ys=new Vs,Tt=new U;class Ai extends Wr{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jf(e)?dh:hh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new yn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Yl.lookAt(e),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new lr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(cn.min,Ys.min),cn.expandByPoint(Tt),Tt.addVectors(cn.max,Ys.max),cn.expandByPoint(Tt)):(cn.expandByPoint(Ys.min),cn.expandByPoint(Ys.max))}cn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Tt.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(e,c),Tt.add(es)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<o;L++)c[L]=new U,u[L]=new U;const f=new U,h=new U,p=new U,g=new Ke,d=new Ke,m=new Ke,_=new U,M=new U;function E(L,R,H){f.fromArray(i,L*3),h.fromArray(i,R*3),p.fromArray(i,H*3),g.fromArray(a,L*2),d.fromArray(a,R*2),m.fromArray(a,H*2),h.sub(f),p.sub(f),d.sub(g),m.sub(g);const K=1/(d.x*m.y-m.x*d.y);!isFinite(K)||(_.copy(h).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(K),M.copy(p).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(K),c[L].add(_),c[R].add(_),c[H].add(_),u[L].add(M),u[R].add(M),u[H].add(M))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let L=0,R=x.length;L<R;++L){const H=x[L],K=H.start,I=H.count;for(let k=K,F=K+I;k<F;k+=3)E(n[k+0],n[k+1],n[k+2])}const y=new U,S=new U,C=new U,v=new U;function w(L){C.fromArray(r,L*3),v.copy(C);const R=c[L];y.copy(R),y.sub(C.multiplyScalar(C.dot(R))).normalize(),S.crossVectors(v,R);const K=S.dot(u[L])<0?-1:1;l[L*4]=y.x,l[L*4+1]=y.y,l[L*4+2]=y.z,l[L*4+3]=K}for(let L=0,R=x.length;L<R;++L){const H=x[L],K=H.start,I=H.count;for(let k=K,F=K+I;k<F;k+=3)w(n[k+0]),w(n[k+1]),w(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),d=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let f=0,h=c;f<u;f++,h++)a[h]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){o.isInterleavedBufferAttribute?p=l[d]*o.data.stride+o.offset:p=l[d]*u;for(let _=0;_<u;_++)h[g++]=c[p++]}return new Xn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ai,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new wt,ts=new th,jl=new zo,Pi=new U,Di=new U,Li=new U,$l=new U,Zl=new U,Kl=new U,Vo=new U,Ho=new U,Wo=new U,Xo=new Ke,qo=new Ke,Yo=new Ke,Jl=new U,jo=new U;class Ri extends bn{constructor(e=new Ai,t=new fh){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),jl.copy(n.boundingSphere),jl.applyMatrix4(r),e.ray.intersectsSphere(jl)===!1)||(ph.copy(r).invert(),ts.copy(e.ray).applyMatrix4(ph),n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,p=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let d=0,m=p.length;d<m;d++){const _=p[d],M=i[_.materialIndex],E=Math.max(_.start,g.start),x=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let y=E,S=x;y<S;y+=3){const C=o.getX(y),v=o.getX(y+1),w=o.getX(y+2);a=$o(this,M,e,ts,l,c,u,f,h,C,v,w),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const d=Math.max(0,g.start),m=Math.min(o.count,g.start+g.count);for(let _=d,M=m;_<M;_+=3){const E=o.getX(_),x=o.getX(_+1),y=o.getX(_+2);a=$o(this,i,e,ts,l,c,u,f,h,E,x,y),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,m=p.length;d<m;d++){const _=p[d],M=i[_.materialIndex],E=Math.max(_.start,g.start),x=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let y=E,S=x;y<S;y+=3){const C=y,v=y+1,w=y+2;a=$o(this,M,e,ts,l,c,u,f,h,C,v,w),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const d=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let _=d,M=m;_<M;_+=3){const E=_,x=_+1,y=_+2;a=$o(this,i,e,ts,l,c,u,f,h,E,x,y),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function Bg(s,e,t,n,i,r,a,o){let l;if(e.side===An?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side!==Nr,o),l===null)return null;jo.copy(o),jo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(jo);return c<t.near||c>t.far?null:{distance:c,point:jo.clone(),object:s}}function $o(s,e,t,n,i,r,a,o,l,c,u,f){Pi.fromBufferAttribute(i,c),Di.fromBufferAttribute(i,u),Li.fromBufferAttribute(i,f);const h=s.morphTargetInfluences;if(r&&h){Vo.set(0,0,0),Ho.set(0,0,0),Wo.set(0,0,0);for(let g=0,d=r.length;g<d;g++){const m=h[g],_=r[g];m!==0&&($l.fromBufferAttribute(_,c),Zl.fromBufferAttribute(_,u),Kl.fromBufferAttribute(_,f),a?(Vo.addScaledVector($l,m),Ho.addScaledVector(Zl,m),Wo.addScaledVector(Kl,m)):(Vo.addScaledVector($l.sub(Pi),m),Ho.addScaledVector(Zl.sub(Di),m),Wo.addScaledVector(Kl.sub(Li),m)))}Pi.add(Vo),Di.add(Ho),Li.add(Wo)}s.isSkinnedMesh&&(s.boneTransform(c,Pi),s.boneTransform(u,Di),s.boneTransform(f,Li));const p=Bg(s,e,t,n,Pi,Di,Li,Jl);if(p){o&&(Xo.fromBufferAttribute(o,c),qo.fromBufferAttribute(o,u),Yo.fromBufferAttribute(o,f),p.uv=ui.getUV(Jl,Pi,Di,Li,Xo,qo,Yo,new Ke)),l&&(Xo.fromBufferAttribute(l,c),qo.fromBufferAttribute(l,u),Yo.fromBufferAttribute(l,f),p.uv2=ui.getUV(Jl,Pi,Di,Li,Xo,qo,Yo,new Ke));const g={a:c,b:u,c:f,normal:new U,materialIndex:0};ui.getNormal(Pi,Di,Li,g.normal),p.face=g}return p}class js extends Ai{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new lr(c,3)),this.setAttribute("normal",new lr(u,3)),this.setAttribute("uv",new lr(f,2));function g(d,m,_,M,E,x,y,S,C,v,w){const L=x/C,R=y/v,H=x/2,K=y/2,I=S/2,k=C+1,F=v+1;let G=0,B=0;const N=new U;for(let A=0;A<F;A++){const Q=A*R-K;for(let X=0;X<k;X++){const ee=X*L-H;N[d]=ee*M,N[m]=Q*E,N[_]=I,c.push(N.x,N.y,N.z),N[d]=0,N[m]=0,N[_]=S>0?1:-1,u.push(N.x,N.y,N.z),f.push(X/C),f.push(1-A/v),G+=1}}for(let A=0;A<v;A++)for(let Q=0;Q<C;Q++){const X=h+Q+k*A,ee=h+Q+k*(A+1),ie=h+(Q+1)+k*(A+1),he=h+(Q+1)+k*A;l.push(X,ee,he),l.push(ee,ie,he),B+=6}o.addGroup(p,B,w),p+=B,h+=G}}static fromJSON(e){return new js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ot(s){const e={};for(let t=0;t<s.length;t++){const n=ns(s[t]);for(const i in n)e[i]=n[i]}return e}const Gg={clone:ns,merge:Ot};var Vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends qs{constructor(e){super();this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Vg,this.fragmentShader=Hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mh extends bn{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fn extends mh{constructor(e=50,t=1,n=.1,i=2e3){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ks*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const is=90,rs=1;class Wg extends bn{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Fn(is,rs,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new U(1,0,0)),this.add(i);const r=new Fn(is,rs,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new U(-1,0,0)),this.add(r);const a=new Fn(is,rs,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new U(0,1,0)),this.add(a);const o=new Fn(is,rs,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new U(0,-1,0)),this.add(o);const l=new Fn(is,rs,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new U(0,0,1)),this.add(l);const c=new Fn(is,rs,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new U(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=ii,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Ql extends Mn{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Br;super(e,t,n,i,r,a,o,l,c,u);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xg extends rr{constructor(e,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ql(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new js(5,5,5),r=new Ii({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:Si});r.uniforms.tEquirect.value=t;const a=new Ri(i,r),o=t.minFilter;return t.minFilter===Co&&(t.minFilter=xn),new Wg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const ec=new U,qg=new U,Yg=new yn;class cr{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ec.subVectors(n,t).cross(qg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ec),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yg.getNormalMatrix(e),i=this.coplanarPoint(ec).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new zo,Zo=new U;class gh{constructor(e=new cr,t=new cr,n=new cr,i=new cr,r=new cr,a=new cr){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],M=n[14],E=n[15];return t[0].setComponents(o-i,f-l,d-h,E-m).normalize(),t[1].setComponents(o+i,f+l,d+h,E+m).normalize(),t[2].setComponents(o+r,f+c,d+p,E+_).normalize(),t[3].setComponents(o-r,f-c,d-p,E-_).normalize(),t[4].setComponents(o-a,f-u,d-g,E-M).normalize(),t[5].setComponents(o+a,f+u,d+g,E+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Zo.x=i.normal.x>0?e.max.x:e.min.x,Zo.y=i.normal.y>0?e.max.y:e.min.y,Zo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _h(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function jg(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,p=s.createBuffer();s.bindBuffer(u,p),s.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,p=u.updateRange;s.bindBuffer(f,c),p.count===-1?s.bufferSubData(f,0,h):(t?s.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):s.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class tc extends Ai{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const M=_*h-a;for(let E=0;E<c;E++){const x=E*f-r;g.push(x,-M,0),d.push(0,0,1),m.push(E/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<o;M++){const E=M+c*_,x=M+c*(_+1),y=M+1+c*(_+1),S=M+1+c*_;p.push(E,x,S),p.push(x,y,S)}this.setIndex(p),this.setAttribute("position",new lr(g,3)),this.setAttribute("normal",new lr(d,3)),this.setAttribute("uv",new lr(m,2))}static fromJSON(e){return new tc(e.width,e.height,e.widthSegments,e.heightSegments)}}var $g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,e_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t_="vec3 transformed = vec3( position );",n_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,r_=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,s_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,d_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,p_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,m_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,g_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,x_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,M_="gl_FragColor = linearToOutputTexel( gl_FragColor );",b_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,w_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,T_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,I_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,F_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O_=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,z_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,N_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,k_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,B_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,V_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,H_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,W_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,X_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Y_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Z_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,K_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,s0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,o0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,l0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,p0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,m0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,g0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,x0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,E0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,A0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,L0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,I0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,k0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,U0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,B0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,G0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,V0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,H0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,W0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,X0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Z0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,J0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Q0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_v=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,bv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Be={alphamap_fragment:$g,alphamap_pars_fragment:Zg,alphatest_fragment:Kg,alphatest_pars_fragment:Jg,aomap_fragment:Qg,aomap_pars_fragment:e_,begin_vertex:t_,beginnormal_vertex:n_,bsdfs:i_,iridescence_fragment:r_,bumpmap_pars_fragment:s_,clipping_planes_fragment:o_,clipping_planes_pars_fragment:a_,clipping_planes_pars_vertex:l_,clipping_planes_vertex:c_,color_fragment:u_,color_pars_fragment:f_,color_pars_vertex:h_,color_vertex:d_,common:p_,cube_uv_reflection_fragment:m_,defaultnormal_vertex:g_,displacementmap_pars_vertex:__,displacementmap_vertex:v_,emissivemap_fragment:x_,emissivemap_pars_fragment:y_,encodings_fragment:M_,encodings_pars_fragment:b_,envmap_fragment:S_,envmap_common_pars_fragment:w_,envmap_pars_fragment:T_,envmap_pars_vertex:E_,envmap_physical_pars_fragment:N_,envmap_vertex:C_,fog_vertex:A_,fog_pars_vertex:P_,fog_fragment:D_,fog_pars_fragment:L_,gradientmap_pars_fragment:R_,lightmap_fragment:I_,lightmap_pars_fragment:F_,lights_lambert_vertex:O_,lights_pars_begin:z_,lights_toon_fragment:k_,lights_toon_pars_fragment:U_,lights_phong_fragment:B_,lights_phong_pars_fragment:G_,lights_physical_fragment:V_,lights_physical_pars_fragment:H_,lights_fragment_begin:W_,lights_fragment_maps:X_,lights_fragment_end:q_,logdepthbuf_fragment:Y_,logdepthbuf_pars_fragment:j_,logdepthbuf_pars_vertex:$_,logdepthbuf_vertex:Z_,map_fragment:K_,map_pars_fragment:J_,map_particle_fragment:Q_,map_particle_pars_fragment:e0,metalnessmap_fragment:t0,metalnessmap_pars_fragment:n0,morphcolor_vertex:i0,morphnormal_vertex:r0,morphtarget_pars_vertex:s0,morphtarget_vertex:o0,normal_fragment_begin:a0,normal_fragment_maps:l0,normal_pars_fragment:c0,normal_pars_vertex:u0,normal_vertex:f0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:p0,clearcoat_pars_fragment:m0,iridescence_pars_fragment:g0,output_fragment:_0,packing:v0,premultiplied_alpha_fragment:x0,project_vertex:y0,dithering_fragment:M0,dithering_pars_fragment:b0,roughnessmap_fragment:S0,roughnessmap_pars_fragment:w0,shadowmap_pars_fragment:T0,shadowmap_pars_vertex:E0,shadowmap_vertex:C0,shadowmask_pars_fragment:A0,skinbase_vertex:P0,skinning_pars_vertex:D0,skinning_vertex:L0,skinnormal_vertex:R0,specularmap_fragment:I0,specularmap_pars_fragment:F0,tonemapping_fragment:O0,tonemapping_pars_fragment:z0,transmission_fragment:N0,transmission_pars_fragment:k0,uv_pars_fragment:U0,uv_pars_vertex:B0,uv_vertex:G0,uv2_pars_fragment:V0,uv2_pars_vertex:H0,uv2_vertex:W0,worldpos_vertex:X0,background_vert:q0,background_frag:Y0,cube_vert:j0,cube_frag:$0,depth_vert:Z0,depth_frag:K0,distanceRGBA_vert:J0,distanceRGBA_frag:Q0,equirect_vert:ev,equirect_frag:tv,linedashed_vert:nv,linedashed_frag:iv,meshbasic_vert:rv,meshbasic_frag:sv,meshlambert_vert:ov,meshlambert_frag:av,meshmatcap_vert:lv,meshmatcap_frag:cv,meshnormal_vert:uv,meshnormal_frag:fv,meshphong_vert:hv,meshphong_frag:dv,meshphysical_vert:pv,meshphysical_frag:mv,meshtoon_vert:gv,meshtoon_frag:_v,points_vert:vv,points_frag:xv,shadow_vert:yv,shadow_frag:Mv,sprite_vert:bv,sprite_frag:Sv},ce={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new yn},uv2Transform:{value:new yn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yn}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yn}}},qn={basic:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.fog,ce.lights,{emissive:{value:new et(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ot([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ot([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new et(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ot([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ot([ce.points,ce.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ot([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ot([ce.common,ce.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ot([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ot([ce.sprite,ce.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new yn},t2D:{value:null}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},cube:{uniforms:Ot([ce.envmap,{opacity:{value:1}}]),vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Ot([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Ot([ce.lights,ce.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};qn.physical={uniforms:Ot([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};function wv(s,e,t,n,i,r){const a=new et(0);let o=i===!0?0:1,l,c,u=null,f=0,h=null;function p(d,m){let _=!1,M=m.isScene===!0?m.background:null;M&&M.isTexture&&(M=e.get(M));const E=s.xr,x=E.getSession&&E.getSession();x&&x.environmentBlendMode==="additive"&&(M=null),M===null?g(a,o):M&&M.isColor&&(g(M,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Eo)?(c===void 0&&(c=new Ri(new js(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:ns(qn.cube.uniforms),vertexShader:qn.cube.vertexShader,fragmentShader:qn.cube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,(u!==M||f!==M.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=s.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ri(new tc(2,2),new Ii({name:"BackgroundMaterial",uniforms:ns(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=s.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function g(d,m){t.buffers.color.setClear(d.r,d.g,d.b,m,r)}return{getClearColor:function(){return a},setClearColor:function(d,m=1){a.set(d),o=m,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(d){o=d,g(a,o)},render:p}}function Tv(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function f(I,k,F,G,B){let N=!1;if(a){const A=d(G,F,k);c!==A&&(c=A,p(c.object)),N=_(I,G,F,B),N&&M(I,G,F,B)}else{const A=k.wireframe===!0;(c.geometry!==G.id||c.program!==F.id||c.wireframe!==A)&&(c.geometry=G.id,c.program=F.id,c.wireframe=A,N=!0)}B!==null&&t.update(B,34963),(N||u)&&(u=!1,v(I,k,F,G),B!==null&&s.bindBuffer(34963,t.get(B).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function d(I,k,F){const G=F.wireframe===!0;let B=o[I.id];B===void 0&&(B={},o[I.id]=B);let N=B[k.id];N===void 0&&(N={},B[k.id]=N);let A=N[G];return A===void 0&&(A=m(h()),N[G]=A),A}function m(I){const k=[],F=[],G=[];for(let B=0;B<i;B++)k[B]=0,F[B]=0,G[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:F,attributeDivisors:G,object:I,attributes:{},index:null}}function _(I,k,F,G){const B=c.attributes,N=k.attributes;let A=0;const Q=F.getAttributes();for(const X in Q)if(Q[X].location>=0){const ie=B[X];let he=N[X];if(he===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(he=I.instanceColor)),ie===void 0||ie.attribute!==he||he&&ie.data!==he.data)return!0;A++}return c.attributesNum!==A||c.index!==G}function M(I,k,F,G){const B={},N=k.attributes;let A=0;const Q=F.getAttributes();for(const X in Q)if(Q[X].location>=0){let ie=N[X];ie===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor));const he={};he.attribute=ie,ie&&ie.data&&(he.data=ie.data),B[X]=he,A++}c.attributes=B,c.attributesNum=A,c.index=G}function E(){const I=c.newAttributes;for(let k=0,F=I.length;k<F;k++)I[k]=0}function x(I){y(I,0)}function y(I,k){const F=c.newAttributes,G=c.enabledAttributes,B=c.attributeDivisors;F[I]=1,G[I]===0&&(s.enableVertexAttribArray(I),G[I]=1),B[I]!==k&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),B[I]=k)}function S(){const I=c.newAttributes,k=c.enabledAttributes;for(let F=0,G=k.length;F<G;F++)k[F]!==I[F]&&(s.disableVertexAttribArray(F),k[F]=0)}function C(I,k,F,G,B,N){n.isWebGL2===!0&&(F===5124||F===5125)?s.vertexAttribIPointer(I,k,F,B,N):s.vertexAttribPointer(I,k,F,G,B,N)}function v(I,k,F,G){if(n.isWebGL2===!1&&(I.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const B=G.attributes,N=F.getAttributes(),A=k.defaultAttributeValues;for(const Q in N){const X=N[Q];if(X.location>=0){let ee=B[Q];if(ee===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),ee!==void 0){const ie=ee.normalized,he=ee.itemSize,V=t.get(ee);if(V===void 0)continue;const He=V.buffer,Ce=V.type,Le=V.bytesPerElement;if(ee.isInterleavedBufferAttribute){const ae=ee.data,Fe=ae.stride,pe=ee.offset;if(ae.isInstancedInterleavedBuffer){for(let ve=0;ve<X.locationSize;ve++)y(X.location+ve,ae.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<X.locationSize;ve++)x(X.location+ve);s.bindBuffer(34962,He);for(let ve=0;ve<X.locationSize;ve++)C(X.location+ve,he/X.locationSize,Ce,ie,Fe*Le,(pe+he/X.locationSize*ve)*Le)}else{if(ee.isInstancedBufferAttribute){for(let ae=0;ae<X.locationSize;ae++)y(X.location+ae,ee.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ae=0;ae<X.locationSize;ae++)x(X.location+ae);s.bindBuffer(34962,He);for(let ae=0;ae<X.locationSize;ae++)C(X.location+ae,he/X.locationSize,Ce,ie,he*Le,he/X.locationSize*ae*Le)}}else if(A!==void 0){const ie=A[Q];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(X.location,ie);break;case 3:s.vertexAttrib3fv(X.location,ie);break;case 4:s.vertexAttrib4fv(X.location,ie);break;default:s.vertexAttrib1fv(X.location,ie)}}}}S()}function w(){H();for(const I in o){const k=o[I];for(const F in k){const G=k[F];for(const B in G)g(G[B].object),delete G[B];delete k[F]}delete o[I]}}function L(I){if(o[I.id]===void 0)return;const k=o[I.id];for(const F in k){const G=k[F];for(const B in G)g(G[B].object),delete G[B];delete k[F]}delete o[I.id]}function R(I){for(const k in o){const F=o[k];if(F[I.id]===void 0)continue;const G=F[I.id];for(const B in G)g(G[B].object),delete G[B];delete F[I.id]}}function H(){K(),u=!0,c!==l&&(c=l,p(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:H,resetDefaultState:K,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:R,initAttributes:E,enableAttribute:x,disableUnusedAttributes:S}}function Ev(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,p;if(i)h=s,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,c,u,f),t.update(u,r,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Cv(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=s.getParameter(34930),h=s.getParameter(35660),p=s.getParameter(3379),g=s.getParameter(34076),d=s.getParameter(34921),m=s.getParameter(36347),_=s.getParameter(36348),M=s.getParameter(36349),E=h>0,x=a||e.has("OES_texture_float"),y=E&&x,S=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:E,floatFragmentTextures:x,floatVertexTextures:y,maxSamples:S}}function Av(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new cr,o=new yn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,p){const g=f.length!==0||h||n!==0||i;return i=h,t=u(f,p,0),n=f.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(f,h,p){const g=f.clippingPlanes,d=f.clipIntersection,m=f.clipShadows,_=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,E=M*4;let x=_.clippingState||null;l.value=x,x=u(g,h,E,p);for(let y=0;y!==E;++y)x[y]=t[y];_.clippingState=x,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){const d=f!==null?f.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<_)&&(m=new Float32Array(_));for(let E=0,x=p;E!==d;++E,x+=4)a.copy(f[E]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function Pv(s){let e=new WeakMap;function t(a,o){return o===Ml?a.mapping=Br:o===bl&&(a.mapping=Gr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ml||o===bl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xg(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Dv extends mh{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const os=4,vh=[.125,.215,.35,.446,.526,.582],ur=20,nc=new Dv,xh=new et;let ic=null;const fr=(1+Math.sqrt(5))/2,as=1/fr,yh=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,fr,as),new U(0,fr,-as),new U(as,0,fr),new U(-as,0,fr),new U(fr,as,0),new U(-fr,as,0)];class Mh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ic=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ic),e.scissorTest=!1,Ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Br||e.mapping===Gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ic=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,16*7),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Ns,format:Wn,encoding:tr,depthBuffer:!1},i=bh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lv(r)),this._blurMaterial=Rv(r,e,t)}return i}_compileMaterial(e){const t=new Ri(this._lodPlanes[0],e);this._renderer.compile(t,nc)}_sceneToCubeUV(e,t,n,i){const r=90,a=1,o=new Fn(r,a,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(xh),u.toneMapping=ii,u.autoClear=!1;const p=new fh({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),g=new Ri(new js,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(xh),d=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):M===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const E=this._cubeSize;Ko(i,M*E,_>2?E:0,E,E),u.setRenderTarget(i),d&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Br||e.mapping===Gr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ri(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ko(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,nc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=yh[(i-1)%yh.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ri(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ur-1),d=r/g,m=isFinite(r)?1+Math.floor(u*d):ur;m>ur&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ur}`);const _=[];let M=0;for(let C=0;C<ur;++C){const v=C/d,w=Math.exp(-v*v/2);_.push(w),C===0?M+=w:C<m&&(M+=2*w)}for(let C=0;C<_.length;C++)_[C]=_[C]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-n;const x=this._sizeLods[i],y=3*x*(i>E-os?i-E+os:0),S=4*(this._cubeSize-x);Ko(t,y,S,3*x,2*x),l.setRenderTarget(t),l.render(f,nc)}}function Lv(s){const e=[],t=[],n=[];let i=s;const r=s-os+1+vh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-os?l=vh[a-s+os-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,d=3,m=2,_=1,M=new Float32Array(d*g*p),E=new Float32Array(m*g*p),x=new Float32Array(_*g*p);for(let S=0;S<p;S++){const C=S%3*2/3-1,v=S>2?0:-1,w=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];M.set(w,d*g*S),E.set(h,m*g*S);const L=[S,S,S,S,S,S];x.set(L,_*g*S)}const y=new Ai;y.setAttribute("position",new Xn(M,d)),y.setAttribute("uv",new Xn(E,m)),y.setAttribute("faceIndex",new Xn(x,_)),e.push(y),i>os&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bh(s,e,t){const n=new rr(s,e,t);return n.texture.mapping=Eo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ko(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Rv(s,e,t){const n=new Float32Array(ur),i=new U(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Sh(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function wh(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Iv(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ml||l===bl,u=l===Br||l===Gr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Mh(s)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Mh(s));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",r),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Fv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ov(s,e,t,n){const i={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let d=0;if(p!==null){const M=p.array;d=p.version;for(let E=0,x=M.length;E<x;E+=3){const y=M[E+0],S=M[E+1],C=M[E+2];h.push(y,S,S,C,C,y)}}else{const M=g.array;d=g.version;for(let E=0,x=M.length/3-1;E<x;E+=3){const y=E+0,S=E+1,C=E+2;h.push(y,S,S,C,C,y)}}const m=new(jf(h)?dh:hh)(h,1);m.version=d;const _=r.get(f);_&&e.remove(_),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function zv(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,p){s.drawElements(r,p,o,h*l),t.update(p,r,1)}function f(h,p,g){if(g===0)return;let d,m;if(i)d=s,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,p,o,h*l,g),t.update(p,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Nv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function kv(s,e){return s[0]-e[0]}function Uv(s,e){return Math.abs(e[1])-Math.abs(s[1])}function sc(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function Bv(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new St,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==d){let k=function(){K.dispose(),r.delete(u),u.removeEventListener("dispose",k)};m!==void 0&&m.texture.dispose();const E=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let w=0;E===!0&&(w=1),x===!0&&(w=2),y===!0&&(w=3);let L=u.attributes.position.count*w,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const H=new Float32Array(L*R*4*d),K=new Jf(H,L,R,d);K.type=Qi,K.needsUpdate=!0;const I=w*4;for(let F=0;F<d;F++){const G=S[F],B=C[F],N=v[F],A=L*R*4*F;for(let Q=0;Q<G.count;Q++){const X=Q*I;E===!0&&(a.fromBufferAttribute(G,Q),G.normalized===!0&&sc(a,G),H[A+X+0]=a.x,H[A+X+1]=a.y,H[A+X+2]=a.z,H[A+X+3]=0),x===!0&&(a.fromBufferAttribute(B,Q),B.normalized===!0&&sc(a,B),H[A+X+4]=a.x,H[A+X+5]=a.y,H[A+X+6]=a.z,H[A+X+7]=0),y===!0&&(a.fromBufferAttribute(N,Q),N.normalized===!0&&sc(a,N),H[A+X+8]=a.x,H[A+X+9]=a.y,H[A+X+10]=a.z,H[A+X+11]=N.itemSize===4?a.w:1)}}m={count:d,texture:K,size:new Ke(L,R)},r.set(u,m),u.addEventListener("dispose",k)}let _=0;for(let E=0;E<p.length;E++)_+=p[E];const M=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",p),h.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=p===void 0?0:p.length;let d=n[u.id];if(d===void 0||d.length!==g){d=[];for(let x=0;x<g;x++)d[x]=[x,0];n[u.id]=d}for(let x=0;x<g;x++){const y=d[x];y[0]=x,y[1]=p[x]}d.sort(Uv);for(let x=0;x<8;x++)x<g&&d[x][1]?(o[x][0]=d[x][0],o[x][1]=d[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(kv);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let M=0;for(let x=0;x<8;x++){const y=o[x],S=y[0],C=y[1];S!==Number.MAX_SAFE_INTEGER&&C?(m&&u.getAttribute("morphTarget"+x)!==m[S]&&u.setAttribute("morphTarget"+x,m[S]),_&&u.getAttribute("morphNormal"+x)!==_[S]&&u.setAttribute("morphNormal"+x,_[S]),i[x]=C,M+=C):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),_&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const E=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",E),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Gv(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Th=new Mn,Eh=new Jf,Ch=new Dg,Ah=new Ql,Ph=[],Dh=[],Lh=new Float32Array(16),Rh=new Float32Array(9),Ih=new Float32Array(4);function ls(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ph[i];if(r===void 0&&(r=new Float32Array(i),Ph[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Jo(s,e){let t=Dh[e];t===void 0&&(t=new Int32Array(e),Dh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Vv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Hv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;s.uniform2fv(this.addr,e),Vt(t,e)}}function Wv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;s.uniform3fv(this.addr,e),Vt(t,e)}}function Xv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;s.uniform4fv(this.addr,e),Vt(t,e)}}function qv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;Ih.set(n),s.uniformMatrix2fv(this.addr,!1,Ih),Vt(t,n)}}function Yv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;Rh.set(n),s.uniformMatrix3fv(this.addr,!1,Rh),Vt(t,n)}}function jv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;Lh.set(n),s.uniformMatrix4fv(this.addr,!1,Lh),Vt(t,n)}}function $v(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Zv(s,e){const t=this.cache;Gt(t,e)||(s.uniform2iv(this.addr,e),Vt(t,e))}function Kv(s,e){const t=this.cache;Gt(t,e)||(s.uniform3iv(this.addr,e),Vt(t,e))}function Jv(s,e){const t=this.cache;Gt(t,e)||(s.uniform4iv(this.addr,e),Vt(t,e))}function Qv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ex(s,e){const t=this.cache;Gt(t,e)||(s.uniform2uiv(this.addr,e),Vt(t,e))}function tx(s,e){const t=this.cache;Gt(t,e)||(s.uniform3uiv(this.addr,e),Vt(t,e))}function nx(s,e){const t=this.cache;Gt(t,e)||(s.uniform4uiv(this.addr,e),Vt(t,e))}function ix(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Th,i)}function rx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ch,i)}function sx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ah,i)}function ox(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Eh,i)}function ax(s){switch(s){case 5126:return Vv;case 35664:return Hv;case 35665:return Wv;case 35666:return Xv;case 35674:return qv;case 35675:return Yv;case 35676:return jv;case 5124:case 35670:return $v;case 35667:case 35671:return Zv;case 35668:case 35672:return Kv;case 35669:case 35673:return Jv;case 5125:return Qv;case 36294:return ex;case 36295:return tx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return ox}}function lx(s,e){s.uniform1fv(this.addr,e)}function cx(s,e){const t=ls(e,this.size,2);s.uniform2fv(this.addr,t)}function ux(s,e){const t=ls(e,this.size,3);s.uniform3fv(this.addr,t)}function fx(s,e){const t=ls(e,this.size,4);s.uniform4fv(this.addr,t)}function hx(s,e){const t=ls(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function dx(s,e){const t=ls(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function px(s,e){const t=ls(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function mx(s,e){s.uniform1iv(this.addr,e)}function gx(s,e){s.uniform2iv(this.addr,e)}function _x(s,e){s.uniform3iv(this.addr,e)}function vx(s,e){s.uniform4iv(this.addr,e)}function xx(s,e){s.uniform1uiv(this.addr,e)}function yx(s,e){s.uniform2uiv(this.addr,e)}function Mx(s,e){s.uniform3uiv(this.addr,e)}function bx(s,e){s.uniform4uiv(this.addr,e)}function Sx(s,e,t){const n=e.length,i=Jo(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Th,i[r])}function wx(s,e,t){const n=e.length,i=Jo(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Ch,i[r])}function Tx(s,e,t){const n=e.length,i=Jo(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Ah,i[r])}function Ex(s,e,t){const n=e.length,i=Jo(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Eh,i[r])}function Cx(s){switch(s){case 5126:return lx;case 35664:return cx;case 35665:return ux;case 35666:return fx;case 35674:return hx;case 35675:return dx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return _x;case 35669:case 35673:return vx;case 5125:return xx;case 36294:return yx;case 36295:return Mx;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return Ex}}class Ax{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ax(t.type)}}class Px{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Cx(t.type)}}class Dx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const oc=/(\w+)(\])?(\[|\.)?/g;function Fh(s,e){s.seq.push(e),s.map[e.id]=e}function Lx(s,e,t){const n=s.name,i=n.length;for(oc.lastIndex=0;;){const r=oc.exec(n),a=oc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Fh(t,c===void 0?new Ax(o,s,e):new Px(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new Dx(o),Fh(t,f)),t=f}}}class Qo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Lx(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Oh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Rx=0;function Ix(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Fx(s){switch(s){case tr:return["Linear","( value )"];case at:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function zh(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Ix(s.getShaderSource(e),a)}else return i}function Ox(s,e){const t=Fx(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function zx(s,e){let t;switch(e){case Gm:t="Linear";break;case Vm:t="Reinhard";break;case Hm:t="OptimizedCineon";break;case Wm:t="ACESFilmic";break;case Xm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Nx(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($s).join(`
`)}function kx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ux(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function $s(s){return s!==""}function Nh(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(s){return s.replace(Bx,Gx)}function Gx(s,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ac(t)}const Vx=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(s){return s.replace(Hx,Bh).replace(Vx,Wx)}function Wx(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Bh(s,e,t,n)}function Bh(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gh(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ff?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Os&&(e="SHADOWMAP_TYPE_VSM"),e}function qx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Br:case Gr:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gr:e="ENVMAP_MODE_REFRACTION";break}return e}function jx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xf:e="ENVMAP_BLENDING_MULTIPLY";break;case Um:e="ENVMAP_BLENDING_MIX";break;case Bm:e="ENVMAP_BLENDING_ADD";break}return e}function $x(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zx(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Xx(t),c=qx(t),u=Yx(t),f=jx(t),h=$x(t),p=t.isWebGL2?"":Nx(t),g=kx(r),d=i.createProgram();let m,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter($s).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter($s).join(`
`),_.length>0&&(_+=`
`)):(m=[Gh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),_=[p,Gh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Be.tonemapping_pars_fragment:"",t.toneMapping!==ii?zx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,Ox("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),a=ac(a),a=Nh(a,t),a=kh(a,t),o=ac(o),o=Nh(o,t),o=kh(o,t),a=Uh(a),o=Uh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===qf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=M+m+a,x=M+_+o,y=Oh(i,35633,E),S=Oh(i,35632,x);if(i.attachShader(d,y),i.attachShader(d,S),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),s.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),L=i.getShaderInfoLog(y).trim(),R=i.getShaderInfoLog(S).trim();let H=!0,K=!0;if(i.getProgramParameter(d,35714)===!1){H=!1;const I=zh(i,y,"vertex"),k=zh(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+I+`
`+k)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||R==="")&&(K=!1);K&&(this.diagnostics={runnable:H,programLog:w,vertexShader:{log:L,prefix:m},fragmentShader:{log:R,prefix:_}})}i.deleteShader(y),i.deleteShader(S);let C;this.getUniforms=function(){return C===void 0&&(C=new Qo(i,d)),C};let v;return this.getAttributes=function(){return v===void 0&&(v=Ux(i,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=Rx++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=S,this}let Kx=0;class Jx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Qx(e);t.set(e,n)}return t.get(e)}}class Qx{constructor(e){this.id=Kx++,this.code=e,this.usedTimes=0}}function ey(s,e,t,n,i,r,a){const o=new rh,l=new Jx,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,w,L,R,H){const K=R.fog,I=H.geometry,k=v.isMeshStandardMaterial?R.environment:null,F=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),G=!!F&&F.mapping===Eo?F.image.height:null,B=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const N=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,A=N!==void 0?N.length:0;let Q=0;I.morphAttributes.position!==void 0&&(Q=1),I.morphAttributes.normal!==void 0&&(Q=2),I.morphAttributes.color!==void 0&&(Q=3);let X,ee,ie,he;if(B){const Fe=qn[B];X=Fe.vertexShader,ee=Fe.fragmentShader}else X=v.vertexShader,ee=v.fragmentShader,l.update(v),ie=l.getVertexShaderID(v),he=l.getFragmentShaderID(v);const V=s.getRenderTarget(),He=v.alphaTest>0,Ce=v.clearcoat>0,Le=v.iridescence>0;return{isWebGL2:u,shaderID:B,shaderName:v.type,vertexShader:X,fragmentShader:ee,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:he,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:h,outputEncoding:V===null?s.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:tr,map:!!v.map,matcap:!!v.matcap,envMap:!!F,envMapMode:F&&F.mapping,envMapCubeUVHeight:G,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===fg,tangentSpaceNormalMap:v.normalMapType===ug,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===at,clearcoat:Ce,clearcoatMap:Ce&&!!v.clearcoatMap,clearcoatRoughnessMap:Ce&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Ce&&!!v.clearcoatNormalMap,iridescence:Le,iridescenceMap:Le&&!!v.iridescenceMap,iridescenceThicknessMap:Le&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===kr,alphaMap:!!v.alphaMap,alphaTest:He,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!I.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!K,useFog:v.fog===!0,fogExp2:K&&K.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:Q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:ii,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Nr,flipSided:v.side===An,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)w.push(L),w.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(_(w,v),M(w,v),w.push(s.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.lightMap&&o.enable(7),w.aoMap&&o.enable(8),w.emissiveMap&&o.enable(9),w.bumpMap&&o.enable(10),w.normalMap&&o.enable(11),w.objectSpaceNormalMap&&o.enable(12),w.tangentSpaceNormalMap&&o.enable(13),w.clearcoat&&o.enable(14),w.clearcoatMap&&o.enable(15),w.clearcoatRoughnessMap&&o.enable(16),w.clearcoatNormalMap&&o.enable(17),w.iridescence&&o.enable(18),w.iridescenceMap&&o.enable(19),w.iridescenceThicknessMap&&o.enable(20),w.displacementMap&&o.enable(21),w.specularMap&&o.enable(22),w.roughnessMap&&o.enable(23),w.metalnessMap&&o.enable(24),w.gradientMap&&o.enable(25),w.alphaMap&&o.enable(26),w.alphaTest&&o.enable(27),w.vertexColors&&o.enable(28),w.vertexAlphas&&o.enable(29),w.vertexUvs&&o.enable(30),w.vertexTangents&&o.enable(31),w.uvsVertexOnly&&o.enable(32),w.fog&&o.enable(33),v.push(o.mask),o.disableAll(),w.useFog&&o.enable(0),w.flatShading&&o.enable(1),w.logarithmicDepthBuffer&&o.enable(2),w.skinning&&o.enable(3),w.morphTargets&&o.enable(4),w.morphNormals&&o.enable(5),w.morphColors&&o.enable(6),w.premultipliedAlpha&&o.enable(7),w.shadowMapEnabled&&o.enable(8),w.physicallyCorrectLights&&o.enable(9),w.doubleSided&&o.enable(10),w.flipSided&&o.enable(11),w.useDepthPacking&&o.enable(12),w.dithering&&o.enable(13),w.specularIntensityMap&&o.enable(14),w.specularColorMap&&o.enable(15),w.transmission&&o.enable(16),w.transmissionMap&&o.enable(17),w.thicknessMap&&o.enable(18),w.sheen&&o.enable(19),w.sheenColorMap&&o.enable(20),w.sheenRoughnessMap&&o.enable(21),w.decodeVideoTexture&&o.enable(22),w.opaque&&o.enable(23),v.push(o.mask)}function E(v){const w=g[v.type];let L;if(w){const R=qn[w];L=Gg.clone(R.uniforms)}else L=v.uniforms;return L}function x(v,w){let L;for(let R=0,H=c.length;R<H;R++){const K=c[R];if(K.cacheKey===w){L=K,++L.usedTimes;break}}return L===void 0&&(L=new Zx(s,w,v,r),c.push(L)),L}function y(v){if(--v.usedTimes==0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function S(v){l.remove(v)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:C}}function ty(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ny(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Vh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,p,g,d,m){let _=s[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:d,group:m},s[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=p,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=d,_.group=m),e++,_}function o(f,h,p,g,d,m){const _=a(f,h,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(f,h,p,g,d,m){const _=a(f,h,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||ny),n.length>1&&n.sort(h||Vh),i.length>1&&i.sort(h||Vh)}function u(){for(let f=e,h=s.length;f<h;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function iy(){let s=new WeakMap;function e(n,i){let r;return s.has(n)===!1?(r=new Hh,s.set(n,[r])):i>=s.get(n).length?(r=new Hh,s.get(n).push(r)):r=s.get(n)[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function ry(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new et};break;case"SpotLight":t={position:new U,direction:new U,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function sy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let oy=0;function ay(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function ly(s,e){const t=new ry,n=sy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,a=new wt,o=new wt;function l(u,f){let h=0,p=0,g=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,m=0,_=0,M=0,E=0,x=0,y=0,S=0;u.sort(ay);const C=f!==!0?Math.PI:1;for(let w=0,L=u.length;w<L;w++){const R=u[w],H=R.color,K=R.intensity,I=R.distance,k=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=H.r*K*C,p+=H.g*K*C,g+=H.b*K*C;else if(R.isLightProbe)for(let F=0;F<9;F++)i.probe[F].addScaledVector(R.sh.coefficients[F],K);else if(R.isDirectionalLight){const F=t.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity*C),R.castShadow){const G=R.shadow,B=n.get(R);B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,i.directionalShadow[d]=B,i.directionalShadowMap[d]=k,i.directionalShadowMatrix[d]=R.shadow.matrix,x++}i.directional[d]=F,d++}else if(R.isSpotLight){const F=t.get(R);if(F.position.setFromMatrixPosition(R.matrixWorld),F.color.copy(H).multiplyScalar(K*C),F.distance=I,F.coneCos=Math.cos(R.angle),F.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),F.decay=R.decay,R.castShadow){const G=R.shadow,B=n.get(R);B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=k,i.spotShadowMatrix[_]=R.shadow.matrix,S++}i.spot[_]=F,_++}else if(R.isRectAreaLight){const F=t.get(R);F.color.copy(H).multiplyScalar(K),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),i.rectArea[M]=F,M++}else if(R.isPointLight){const F=t.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity*C),F.distance=R.distance,F.decay=R.decay,R.castShadow){const G=R.shadow,B=n.get(R);B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,i.pointShadow[m]=B,i.pointShadowMap[m]=k,i.pointShadowMatrix[m]=R.shadow.matrix,y++}i.point[m]=F,m++}else if(R.isHemisphereLight){const F=t.get(R);F.skyColor.copy(R.color).multiplyScalar(K*C),F.groundColor.copy(R.groundColor).multiplyScalar(K*C),i.hemi[E]=F,E++}}M>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const v=i.hash;(v.directionalLength!==d||v.pointLength!==m||v.spotLength!==_||v.rectAreaLength!==M||v.hemiLength!==E||v.numDirectionalShadows!==x||v.numPointShadows!==y||v.numSpotShadows!==S)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=M,i.point.length=m,i.hemi.length=E,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotShadowMatrix.length=S,v.directionalLength=d,v.pointLength=m,v.spotLength=_,v.rectAreaLength=M,v.hemiLength=E,v.numDirectionalShadows=x,v.numPointShadows=y,v.numSpotShadows=S,i.version=oy++)}function c(u,f){let h=0,p=0,g=0,d=0,m=0;const _=f.matrixWorldInverse;for(let M=0,E=u.length;M<E;M++){const x=u[M];if(x.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),h++}else if(x.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const y=i.rectArea[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(_),o.identity(),a.copy(x.matrixWorld),a.premultiply(_),o.extractRotation(a),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),d++}else if(x.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(_),p++}else if(x.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function Wh(s,e){const t=new ly(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function cy(s,e){let t=new WeakMap;function n(r,a=0){let o;return t.has(r)===!1?(o=new Wh(s,e),t.set(r,[o])):a>=t.get(r).length?(o=new Wh(s,e),t.get(r).push(o)):o=t.get(r)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class uy extends qs{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fy extends qs{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function py(s,e,t){let n=new gh;const i=new Ke,r=new Ke,a=new St,o=new uy({depthPacking:cg}),l=new fy,c={},u=t.maxTextureSize,f={0:An,1:zs,2:Nr},h=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:hy,fragmentShader:dy}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ai;g.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Ri(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ff,this.render=function(x,y,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const C=s.getRenderTarget(),v=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Si),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let R=0,H=x.length;R<H;R++){const K=x[R],I=K.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const k=I.getFrameExtents();if(i.multiply(k),r.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/k.x),i.x=r.x*k.x,I.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/k.y),i.y=r.y*k.y,I.mapSize.y=r.y)),I.map===null){const G=this.type!==Os?{minFilter:Qt,magFilter:Qt}:{};I.map=new rr(i.x,i.y,G),I.map.texture.name=K.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const F=I.getViewportCount();for(let G=0;G<F;G++){const B=I.getViewport(G);a.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),L.viewport(a),I.updateMatrices(K,G),n=I.getFrustum(),E(y,S,I.camera,K,this.type)}I.isPointLightShadow!==!0&&this.type===Os&&_(I,S),I.needsUpdate=!1}m.needsUpdate=!1,s.setRenderTarget(C,v,w)};function _(x,y){const S=e.update(d);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new rr(i.x,i.y)),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,s.setRenderTarget(x.mapPass),s.clear(),s.renderBufferDirect(y,null,S,h,d,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,s.setRenderTarget(x.map),s.clear(),s.renderBufferDirect(y,null,S,p,d,null)}function M(x,y,S,C,v,w){let L=null;const R=S.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(R!==void 0?L=R:L=S.isPointLight===!0?l:o,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const H=L.uuid,K=y.uuid;let I=c[H];I===void 0&&(I={},c[H]=I);let k=I[K];k===void 0&&(k=L.clone(),I[K]=k),L=k}return L.visible=y.visible,L.wireframe=y.wireframe,w===Os?L.side=y.shadowSide!==null?y.shadowSide:y.side:L.side=y.shadowSide!==null?y.shadowSide:f[y.side],L.alphaMap=y.alphaMap,L.alphaTest=y.alphaTest,L.clipShadows=y.clipShadows,L.clippingPlanes=y.clippingPlanes,L.clipIntersection=y.clipIntersection,L.displacementMap=y.displacementMap,L.displacementScale=y.displacementScale,L.displacementBias=y.displacementBias,L.wireframeLinewidth=y.wireframeLinewidth,L.linewidth=y.linewidth,S.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(S.matrixWorld),L.nearDistance=C,L.farDistance=v),L}function E(x,y,S,C,v){if(x.visible===!1)return;if(x.layers.test(y.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&v===Os)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,x.matrixWorld);const R=e.update(x),H=x.material;if(Array.isArray(H)){const K=R.groups;for(let I=0,k=K.length;I<k;I++){const F=K[I],G=H[F.materialIndex];if(G&&G.visible){const B=M(x,G,C,S.near,S.far,v);s.renderBufferDirect(S,null,R,B,x,F)}}}else if(H.visible){const K=M(x,H,C,S.near,S.far,v);s.renderBufferDirect(S,null,R,K,x,null)}}const L=x.children;for(let R=0,H=L.length;R<H;R++)E(L[R],y,S,C,v)}}function my(s,e,t){const n=t.isWebGL2;function i(){let D=!1;const se=new St;let re=null;const le=new St(0,0,0,0);return{setMask:function(fe){re!==fe&&!D&&(s.colorMask(fe,fe,fe,fe),re=fe)},setLocked:function(fe){D=fe},setClear:function(fe,Se,ne,Te,ze){ze===!0&&(fe*=Te,Se*=Te,ne*=Te),se.set(fe,Se,ne,Te),le.equals(se)===!1&&(s.clearColor(fe,Se,ne,Te),le.copy(se))},reset:function(){D=!1,re=null,le.set(-1,0,0,0)}}}function r(){let D=!1,se=null,re=null,le=null;return{setTest:function(fe){fe?he(2929):V(2929)},setMask:function(fe){se!==fe&&!D&&(s.depthMask(fe),se=fe)},setFunc:function(fe){if(re!==fe){if(fe)switch(fe){case Rm:s.depthFunc(512);break;case Im:s.depthFunc(519);break;case Fm:s.depthFunc(513);break;case yl:s.depthFunc(515);break;case Om:s.depthFunc(514);break;case zm:s.depthFunc(518);break;case Nm:s.depthFunc(516);break;case km:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);re=fe}},setLocked:function(fe){D=fe},setClear:function(fe){le!==fe&&(s.clearDepth(fe),le=fe)},reset:function(){D=!1,se=null,re=null,le=null}}}function a(){let D=!1,se=null,re=null,le=null,fe=null,Se=null,ne=null,Te=null,ze=null;return{setTest:function(Ue){D||(Ue?he(2960):V(2960))},setMask:function(Ue){se!==Ue&&!D&&(s.stencilMask(Ue),se=Ue)},setFunc:function(Ue,st,ht){(re!==Ue||le!==st||fe!==ht)&&(s.stencilFunc(Ue,st,ht),re=Ue,le=st,fe=ht)},setOp:function(Ue,st,ht){(Se!==Ue||ne!==st||Te!==ht)&&(s.stencilOp(Ue,st,ht),Se=Ue,ne=st,Te=ht)},setLocked:function(Ue){D=Ue},setClear:function(Ue){ze!==Ue&&(s.clearStencil(Ue),ze=Ue)},reset:function(){D=!1,se=null,re=null,le=null,fe=null,Se=null,ne=null,Te=null,ze=null}}}const o=new i,l=new r,c=new a;let u={},f={},h=new WeakMap,p=[],g=null,d=!1,m=null,_=null,M=null,E=null,x=null,y=null,S=null,C=!1,v=null,w=null,L=null,R=null,H=null;const K=s.getParameter(35661);let I=!1,k=0;const F=s.getParameter(7938);F.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(F)[1]),I=k>=1):F.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),I=k>=2);let G=null,B={};const N=s.getParameter(3088),A=s.getParameter(2978),Q=new St().fromArray(N),X=new St().fromArray(A);function ee(D,se,re){const le=new Uint8Array(4),fe=s.createTexture();s.bindTexture(D,fe),s.texParameteri(D,10241,9728),s.texParameteri(D,10240,9728);for(let Se=0;Se<re;Se++)s.texImage2D(se+Se,0,6408,1,1,0,6408,5121,le);return fe}const ie={};ie[3553]=ee(3553,3553,1),ie[34067]=ee(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),he(2929),l.setFunc(yl),je(!1),tt(uf),he(2884),pe(Si);function he(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function V(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function He(D,se){return f[D]!==se?(s.bindFramebuffer(D,se),f[D]=se,n&&(D===36009&&(f[36160]=se),D===36160&&(f[36009]=se)),!0):!1}function Ce(D,se){let re=p,le=!1;if(D)if(re=h.get(se),re===void 0&&(re=[],h.set(se,re)),D.isWebGLMultipleRenderTargets){const fe=D.texture;if(re.length!==fe.length||re[0]!==36064){for(let Se=0,ne=fe.length;Se<ne;Se++)re[Se]=36064+Se;re.length=fe.length,le=!0}}else re[0]!==36064&&(re[0]=36064,le=!0);else re[0]!==1029&&(re[0]=1029,le=!0);le&&(t.isWebGL2?s.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Le(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const ae={[Ur]:32774,[Mm]:32778,[bm]:32779};if(n)ae[mf]=32775,ae[gf]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(ae[mf]=D.MIN_EXT,ae[gf]=D.MAX_EXT)}const Fe={[Sm]:0,[wm]:1,[Tm]:768,[_f]:770,[Lm]:776,[Pm]:774,[Cm]:772,[Em]:769,[vf]:771,[Dm]:775,[Am]:773};function pe(D,se,re,le,fe,Se,ne,Te){if(D===Si){d===!0&&(V(3042),d=!1);return}if(d===!1&&(he(3042),d=!0),D!==ym){if(D!==m||Te!==C){if((_!==Ur||x!==Ur)&&(s.blendEquation(32774),_=Ur,x=Ur),Te)switch(D){case kr:s.blendFuncSeparate(1,771,1,771);break;case hf:s.blendFunc(1,1);break;case df:s.blendFuncSeparate(0,769,0,1);break;case pf:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case kr:s.blendFuncSeparate(770,771,1,771);break;case hf:s.blendFunc(770,1);break;case df:s.blendFuncSeparate(0,769,0,1);break;case pf:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,E=null,y=null,S=null,m=D,C=Te}return}fe=fe||se,Se=Se||re,ne=ne||le,(se!==_||fe!==x)&&(s.blendEquationSeparate(ae[se],ae[fe]),_=se,x=fe),(re!==M||le!==E||Se!==y||ne!==S)&&(s.blendFuncSeparate(Fe[re],Fe[le],Fe[Se],Fe[ne]),M=re,E=le,y=Se,S=ne),m=D,C=null}function ve(D,se){D.side===Nr?V(2884):he(2884);let re=D.side===An;se&&(re=!re),je(re),D.blending===kr&&D.transparent===!1?pe(Si):pe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const le=D.stencilWrite;c.setTest(le),le&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Y(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?he(32926):V(32926)}function je(D){v!==D&&(D?s.frontFace(2304):s.frontFace(2305),v=D)}function tt(D){D!==gm?(he(2884),D!==w&&(D===uf?s.cullFace(1029):D===_m?s.cullFace(1028):s.cullFace(1032))):V(2884),w=D}function $e(D){D!==L&&(I&&s.lineWidth(D),L=D)}function Y(D,se,re){D?(he(32823),(R!==se||H!==re)&&(s.polygonOffset(se,re),R=se,H=re)):V(32823)}function Je(D){D?he(3089):V(3089)}function Ae(D){D===void 0&&(D=33984+K-1),G!==D&&(s.activeTexture(D),G=D)}function yt(D,se){G===null&&Ae();let re=B[G];re===void 0&&(re={type:void 0,texture:void 0},B[G]=re),(re.type!==D||re.texture!==se)&&(s.bindTexture(D,se||ie[D]),re.type=D,re.texture=se)}function Mt(){const D=B[G];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function P(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function b(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(D){Q.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Q.copy(D))}function ue(D){X.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function de(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},G=null,B={},f={},h=new WeakMap,p=[],g=null,d=!1,m=null,_=null,M=null,E=null,x=null,y=null,S=null,C=!1,v=null,w=null,L=null,R=null,H=null,Q.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:he,disable:V,bindFramebuffer:He,drawBuffers:Ce,useProgram:Le,setBlending:pe,setMaterial:ve,setFlipSided:je,setCullFace:tt,setLineWidth:$e,setPolygonOffset:Y,setScissorTest:Je,activeTexture:Ae,bindTexture:yt,unbindTexture:Mt,compressedTexImage2D:P,texImage2D:be,texImage3D:q,texStorage2D:J,texStorage3D:oe,texSubImage2D:b,texSubImage3D:$,compressedTexSubImage2D:te,scissor:me,viewport:ue,reset:de}}function gy(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,b){return _?new OffscreenCanvas(P,b):Bs("canvas")}function E(P,b,$,te){let J=1;if((P.width>te||P.height>te)&&(J=te/Math.max(P.width,P.height)),J<1||b===!0)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap){const oe=b?Po:Math.floor,be=oe(J*P.width),q=oe(J*P.height);d===void 0&&(d=M(be,q));const me=$?M(be,q):d;return me.width=be,me.height=q,me.getContext("2d").drawImage(P,0,0,be,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+be+"x"+q+")."),me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function x(P){return Rl(P.width)&&Rl(P.height)}function y(P){return o?!1:P.wrapS!==Pn||P.wrapT!==Pn||P.minFilter!==Qt&&P.minFilter!==xn}function S(P,b){return P.generateMipmaps&&b&&P.minFilter!==Qt&&P.minFilter!==xn}function C(P){s.generateMipmap(P)}function v(P,b,$,te,J=!1){if(o===!1)return b;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let oe=b;return b===6403&&($===5126&&(oe=33326),$===5131&&(oe=33325),$===5121&&(oe=33321)),b===33319&&($===5126&&(oe=33328),$===5131&&(oe=33327),$===5121&&(oe=33323)),b===6408&&($===5126&&(oe=34836),$===5131&&(oe=34842),$===5121&&(oe=te===at&&J===!1?35907:32856),$===32819&&(oe=32854),$===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function w(P,b,$){return S(P,$)===!0||P.isFramebufferTexture&&P.minFilter!==Qt&&P.minFilter!==xn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function L(P){return P===Qt||P===Mf||P===bf?9728:9729}function R(P){const b=P.target;b.removeEventListener("dispose",R),K(b),b.isVideoTexture&&g.delete(b)}function H(P){const b=P.target;b.removeEventListener("dispose",H),k(b)}function K(P){const b=n.get(P);if(b.__webglInit===void 0)return;const $=P.source,te=m.get($);if(te){const J=te[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(P),Object.keys(te).length===0&&m.delete($)}n.remove(P)}function I(P){const b=n.get(P);s.deleteTexture(b.__webglTexture);const $=P.source,te=m.get($);delete te[b.__cacheKey],a.memory.textures--}function k(P){const b=P.texture,$=n.get(P),te=n.get(b);if(te.__webglTexture!==void 0&&(s.deleteTexture(te.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++)s.deleteFramebuffer($.__webglFramebuffer[J]),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer[J]);else{if(s.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&s.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let J=0;J<$.__webglColorRenderbuffer.length;J++)$.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer($.__webglColorRenderbuffer[J]);$.__webglDepthRenderbuffer&&s.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let J=0,oe=b.length;J<oe;J++){const be=n.get(b[J]);be.__webglTexture&&(s.deleteTexture(be.__webglTexture),a.memory.textures--),n.remove(b[J])}n.remove(b),n.remove(P)}let F=0;function G(){F=0}function B(){const P=F;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),F+=1,P}function N(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.encoding),b.join()}function A(P,b){const $=n.get(P);if(P.isVideoTexture&&yt(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce($,P,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,$.__webglTexture)}function Q(P,b){const $=n.get(P);if(P.version>0&&$.__version!==P.version){Ce($,P,b);return}t.activeTexture(33984+b),t.bindTexture(35866,$.__webglTexture)}function X(P,b){const $=n.get(P);if(P.version>0&&$.__version!==P.version){Ce($,P,b);return}t.activeTexture(33984+b),t.bindTexture(32879,$.__webglTexture)}function ee(P,b){const $=n.get(P);if(P.version>0&&$.__version!==P.version){Le($,P,b);return}t.activeTexture(33984+b),t.bindTexture(34067,$.__webglTexture)}const ie={[Sl]:10497,[Pn]:33071,[wl]:33648},he={[Qt]:9728,[Mf]:9984,[bf]:9986,[xn]:9729,[qm]:9985,[Co]:9987};function V(P,b,$){if($?(s.texParameteri(P,10242,ie[b.wrapS]),s.texParameteri(P,10243,ie[b.wrapT]),(P===32879||P===35866)&&s.texParameteri(P,32882,ie[b.wrapR]),s.texParameteri(P,10240,he[b.magFilter]),s.texParameteri(P,10241,he[b.minFilter])):(s.texParameteri(P,10242,33071),s.texParameteri(P,10243,33071),(P===32879||P===35866)&&s.texParameteri(P,32882,33071),(b.wrapS!==Pn||b.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,10240,L(b.magFilter)),s.texParameteri(P,10241,L(b.minFilter)),b.minFilter!==Qt&&b.minFilter!==xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(b.type===Qi&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Ns&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function He(P,b){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",R));const te=b.source;let J=m.get(te);J===void 0&&(J={},m.set(te,J));const oe=N(b);if(oe!==P.__cacheKey){J[oe]===void 0&&(J[oe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,$=!0),J[oe].usedTimes++;const be=J[P.__cacheKey];be!==void 0&&(J[P.__cacheKey].usedTimes--,be.usedTimes===0&&I(b)),P.__cacheKey=oe,P.__webglTexture=J[oe].texture}return $}function Ce(P,b,$){let te=3553;b.isDataArrayTexture&&(te=35866),b.isData3DTexture&&(te=32879);const J=He(P,b),oe=b.source;if(t.activeTexture(33984+$),t.bindTexture(te,P.__webglTexture),oe.version!==oe.__currentVersion||J===!0){s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const be=y(b)&&x(b.image)===!1;let q=E(b.image,be,!1,u);q=Mt(b,q);const me=x(q)||o,ue=r.convert(b.format,b.encoding);let de=r.convert(b.type),D=v(b.internalFormat,ue,de,b.encoding,b.isVideoTexture);V(te,b,me);let se;const re=b.mipmaps,le=o&&b.isVideoTexture!==!0,fe=oe.__currentVersion===void 0||J===!0,Se=w(b,q,me);if(b.isDepthTexture)D=6402,o?b.type===Qi?D=36012:b.type===Ji?D=33190:b.type===Vr?D=35056:D=33189:b.type===Qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===er&&D===6402&&b.type!==Sf&&b.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Ji,de=r.convert(b.type)),b.format===Hr&&D===6402&&(D=34041,b.type!==Vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Vr,de=r.convert(b.type))),fe&&(le?t.texStorage2D(3553,1,D,q.width,q.height):t.texImage2D(3553,0,D,q.width,q.height,0,ue,de,null));else if(b.isDataTexture)if(re.length>0&&me){le&&fe&&t.texStorage2D(3553,Se,D,re[0].width,re[0].height);for(let ne=0,Te=re.length;ne<Te;ne++)se=re[ne],le?t.texSubImage2D(3553,ne,0,0,se.width,se.height,ue,de,se.data):t.texImage2D(3553,ne,D,se.width,se.height,0,ue,de,se.data);b.generateMipmaps=!1}else le?(fe&&t.texStorage2D(3553,Se,D,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,ue,de,q.data)):t.texImage2D(3553,0,D,q.width,q.height,0,ue,de,q.data);else if(b.isCompressedTexture){le&&fe&&t.texStorage2D(3553,Se,D,re[0].width,re[0].height);for(let ne=0,Te=re.length;ne<Te;ne++)se=re[ne],b.format!==Wn?ue!==null?le?t.compressedTexSubImage2D(3553,ne,0,0,se.width,se.height,ue,se.data):t.compressedTexImage2D(3553,ne,D,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?t.texSubImage2D(3553,ne,0,0,se.width,se.height,ue,de,se.data):t.texImage2D(3553,ne,D,se.width,se.height,0,ue,de,se.data)}else if(b.isDataArrayTexture)le?(fe&&t.texStorage3D(35866,Se,D,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,ue,de,q.data)):t.texImage3D(35866,0,D,q.width,q.height,q.depth,0,ue,de,q.data);else if(b.isData3DTexture)le?(fe&&t.texStorage3D(32879,Se,D,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,ue,de,q.data)):t.texImage3D(32879,0,D,q.width,q.height,q.depth,0,ue,de,q.data);else if(b.isFramebufferTexture){if(fe)if(le)t.texStorage2D(3553,Se,D,q.width,q.height);else{let ne=q.width,Te=q.height;for(let ze=0;ze<Se;ze++)t.texImage2D(3553,ze,D,ne,Te,0,ue,de,null),ne>>=1,Te>>=1}}else if(re.length>0&&me){le&&fe&&t.texStorage2D(3553,Se,D,re[0].width,re[0].height);for(let ne=0,Te=re.length;ne<Te;ne++)se=re[ne],le?t.texSubImage2D(3553,ne,0,0,ue,de,se):t.texImage2D(3553,ne,D,ue,de,se);b.generateMipmaps=!1}else le?(fe&&t.texStorage2D(3553,Se,D,q.width,q.height),t.texSubImage2D(3553,0,0,0,ue,de,q)):t.texImage2D(3553,0,D,ue,de,q);S(b,me)&&C(te),oe.__currentVersion=oe.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Le(P,b,$){if(b.image.length!==6)return;const te=He(P,b),J=b.source;if(t.activeTexture(33984+$),t.bindTexture(34067,P.__webglTexture),J.version!==J.__currentVersion||te===!0){s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const oe=b.isCompressedTexture||b.image[0].isCompressedTexture,be=b.image[0]&&b.image[0].isDataTexture,q=[];for(let ne=0;ne<6;ne++)!oe&&!be?q[ne]=E(b.image[ne],!1,!0,c):q[ne]=be?b.image[ne].image:b.image[ne],q[ne]=Mt(b,q[ne]);const me=q[0],ue=x(me)||o,de=r.convert(b.format,b.encoding),D=r.convert(b.type),se=v(b.internalFormat,de,D,b.encoding),re=o&&b.isVideoTexture!==!0,le=J.__currentVersion===void 0||te===!0;let fe=w(b,me,ue);V(34067,b,ue);let Se;if(oe){re&&le&&t.texStorage2D(34067,fe,se,me.width,me.height);for(let ne=0;ne<6;ne++){Se=q[ne].mipmaps;for(let Te=0;Te<Se.length;Te++){const ze=Se[Te];b.format!==Wn?de!==null?re?t.compressedTexSubImage2D(34069+ne,Te,0,0,ze.width,ze.height,de,ze.data):t.compressedTexImage2D(34069+ne,Te,se,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?t.texSubImage2D(34069+ne,Te,0,0,ze.width,ze.height,de,D,ze.data):t.texImage2D(34069+ne,Te,se,ze.width,ze.height,0,de,D,ze.data)}}}else{Se=b.mipmaps,re&&le&&(Se.length>0&&fe++,t.texStorage2D(34067,fe,se,q[0].width,q[0].height));for(let ne=0;ne<6;ne++)if(be){re?t.texSubImage2D(34069+ne,0,0,0,q[ne].width,q[ne].height,de,D,q[ne].data):t.texImage2D(34069+ne,0,se,q[ne].width,q[ne].height,0,de,D,q[ne].data);for(let Te=0;Te<Se.length;Te++){const Ue=Se[Te].image[ne].image;re?t.texSubImage2D(34069+ne,Te+1,0,0,Ue.width,Ue.height,de,D,Ue.data):t.texImage2D(34069+ne,Te+1,se,Ue.width,Ue.height,0,de,D,Ue.data)}}else{re?t.texSubImage2D(34069+ne,0,0,0,de,D,q[ne]):t.texImage2D(34069+ne,0,se,de,D,q[ne]);for(let Te=0;Te<Se.length;Te++){const ze=Se[Te];re?t.texSubImage2D(34069+ne,Te+1,0,0,de,D,ze.image[ne]):t.texImage2D(34069+ne,Te+1,se,de,D,ze.image[ne])}}}S(b,ue)&&C(34067),J.__currentVersion=J.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ae(P,b,$,te,J){const oe=r.convert($.format,$.encoding),be=r.convert($.type),q=v($.internalFormat,oe,be,$.encoding);n.get(b).__hasExternalTextures||(J===32879||J===35866?t.texImage3D(J,0,q,b.width,b.height,b.depth,0,oe,be,null):t.texImage2D(J,0,q,b.width,b.height,0,oe,be,null)),t.bindFramebuffer(36160,P),Ae(b)?h.framebufferTexture2DMultisampleEXT(36160,te,J,n.get($).__webglTexture,0,Je(b)):s.framebufferTexture2D(36160,te,J,n.get($).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(P,b,$){if(s.bindRenderbuffer(36161,P),b.depthBuffer&&!b.stencilBuffer){let te=33189;if($||Ae(b)){const J=b.depthTexture;J&&J.isDepthTexture&&(J.type===Qi?te=36012:J.type===Ji&&(te=33190));const oe=Je(b);Ae(b)?h.renderbufferStorageMultisampleEXT(36161,oe,te,b.width,b.height):s.renderbufferStorageMultisample(36161,oe,te,b.width,b.height)}else s.renderbufferStorage(36161,te,b.width,b.height);s.framebufferRenderbuffer(36160,36096,36161,P)}else if(b.depthBuffer&&b.stencilBuffer){const te=Je(b);$&&Ae(b)===!1?s.renderbufferStorageMultisample(36161,te,35056,b.width,b.height):Ae(b)?h.renderbufferStorageMultisampleEXT(36161,te,35056,b.width,b.height):s.renderbufferStorage(36161,34041,b.width,b.height),s.framebufferRenderbuffer(36160,33306,36161,P)}else{const te=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0;J<te.length;J++){const oe=te[J],be=r.convert(oe.format,oe.encoding),q=r.convert(oe.type),me=v(oe.internalFormat,be,q,oe.encoding),ue=Je(b);$&&Ae(b)===!1?s.renderbufferStorageMultisample(36161,ue,me,b.width,b.height):Ae(b)?h.renderbufferStorageMultisampleEXT(36161,ue,me,b.width,b.height):s.renderbufferStorage(36161,me,b.width,b.height)}}s.bindRenderbuffer(36161,null)}function pe(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),A(b.depthTexture,0);const te=n.get(b.depthTexture).__webglTexture,J=Je(b);if(b.depthTexture.format===er)Ae(b)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,J):s.framebufferTexture2D(36160,36096,3553,te,0);else if(b.depthTexture.format===Hr)Ae(b)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,J):s.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function ve(P){const b=n.get(P),$=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");pe(b.__webglFramebuffer,P)}else if($){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]=s.createRenderbuffer(),Fe(b.__webglDepthbuffer[te],P,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),Fe(b.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function je(P,b,$){const te=n.get(P);b!==void 0&&ae(te.__webglFramebuffer,P,P.texture,36064,3553),$!==void 0&&ve(P)}function tt(P){const b=P.texture,$=n.get(P),te=n.get(b);P.addEventListener("dispose",H),P.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=b.version,a.memory.textures++);const J=P.isWebGLCubeRenderTarget===!0,oe=P.isWebGLMultipleRenderTargets===!0,be=x(P)||o;if(J){$.__webglFramebuffer=[];for(let q=0;q<6;q++)$.__webglFramebuffer[q]=s.createFramebuffer()}else{if($.__webglFramebuffer=s.createFramebuffer(),oe)if(i.drawBuffers){const q=P.texture;for(let me=0,ue=q.length;me<ue;me++){const de=n.get(q[me]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Ae(P)===!1){const q=oe?b:[b];$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer);for(let me=0;me<q.length;me++){const ue=q[me];$.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(36161,$.__webglColorRenderbuffer[me]);const de=r.convert(ue.format,ue.encoding),D=r.convert(ue.type),se=v(ue.internalFormat,de,D,ue.encoding),re=Je(P);s.renderbufferStorageMultisample(36161,re,se,P.width,P.height),s.framebufferRenderbuffer(36160,36064+me,36161,$.__webglColorRenderbuffer[me])}s.bindRenderbuffer(36161,null),P.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(J){t.bindTexture(34067,te.__webglTexture),V(34067,b,be);for(let q=0;q<6;q++)ae($.__webglFramebuffer[q],P,b,36064,34069+q);S(b,be)&&C(34067),t.unbindTexture()}else if(oe){const q=P.texture;for(let me=0,ue=q.length;me<ue;me++){const de=q[me],D=n.get(de);t.bindTexture(3553,D.__webglTexture),V(3553,de,be),ae($.__webglFramebuffer,P,de,36064+me,3553),S(de,be)&&C(3553)}t.unbindTexture()}else{let q=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?q=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(q,te.__webglTexture),V(q,b,be),ae($.__webglFramebuffer,P,b,36064,q),S(b,be)&&C(q),t.unbindTexture()}P.depthBuffer&&ve(P)}function $e(P){const b=x(P)||o,$=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let te=0,J=$.length;te<J;te++){const oe=$[te];if(S(oe,b)){const be=P.isWebGLCubeRenderTarget?34067:3553,q=n.get(oe).__webglTexture;t.bindTexture(be,q),C(be),t.unbindTexture()}}}function Y(P){if(o&&P.samples>0&&Ae(P)===!1){const b=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],$=P.width,te=P.height;let J=16384;const oe=[],be=P.stencilBuffer?33306:36096,q=n.get(P),me=P.isWebGLMultipleRenderTargets===!0;if(me)for(let ue=0;ue<b.length;ue++)t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ue,36161,null),t.bindFramebuffer(36160,q.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ue,3553,null,0);t.bindFramebuffer(36008,q.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,q.__webglFramebuffer);for(let ue=0;ue<b.length;ue++){oe.push(36064+ue),P.depthBuffer&&oe.push(be);const de=q.__ignoreDepthValues!==void 0?q.__ignoreDepthValues:!1;if(de===!1&&(P.depthBuffer&&(J|=256),P.stencilBuffer&&(J|=1024)),me&&s.framebufferRenderbuffer(36008,36064,36161,q.__webglColorRenderbuffer[ue]),de===!0&&(s.invalidateFramebuffer(36008,[be]),s.invalidateFramebuffer(36009,[be])),me){const D=n.get(b[ue]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,D,0)}s.blitFramebuffer(0,0,$,te,0,0,$,te,J,9728),p&&s.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),me)for(let ue=0;ue<b.length;ue++){t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ue,36161,q.__webglColorRenderbuffer[ue]);const de=n.get(b[ue]).__webglTexture;t.bindFramebuffer(36160,q.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ue,3553,de,0)}t.bindFramebuffer(36009,q.__webglMultisampledFramebuffer)}}function Je(P){return Math.min(f,P.samples)}function Ae(P){const b=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function yt(P){const b=a.render.frame;g.get(P)!==b&&(g.set(P,b),P.update())}function Mt(P,b){const $=P.encoding,te=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Dl||$!==tr&&($===at?o===!1?e.has("EXT_sRGB")===!0&&te===Wn?(P.format=Dl,P.minFilter=xn,P.generateMipmaps=!1):b=Zf.sRGBToLinear(b):(te!==Wn||J!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",$)),b}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=A,this.setTexture2DArray=Q,this.setTexture3D=X,this.setTextureCube=ee,this.rebindTextures=je,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ae}function _y(s,e,t){const n=t.isWebGL2;function i(r,a=null){let o;if(r===Ki)return 5121;if(r===Zm)return 32819;if(r===Km)return 32820;if(r===Ym)return 5120;if(r===jm)return 5122;if(r===Sf)return 5123;if(r===$m)return 5124;if(r===Ji)return 5125;if(r===Qi)return 5126;if(r===Ns)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Jm)return 6406;if(r===Wn)return 6408;if(r===eg)return 6409;if(r===tg)return 6410;if(r===er)return 6402;if(r===Hr)return 34041;if(r===ng)return 6403;if(r===Qm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Dl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ig)return 36244;if(r===rg)return 33319;if(r===sg)return 33320;if(r===og)return 36249;if(r===Tl||r===El||r===Cl||r===Al)if(a===at)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Tl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===El)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Al)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Tl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===El)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Al)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wf||r===Tf||r===Ef||r===Cf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===wf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ef)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ag)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Af||r===Pf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Af)return a===at?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Pf)return a===at?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Df||r===Lf||r===Rf||r===If||r===Ff||r===Of||r===zf||r===Nf||r===kf||r===Uf||r===Bf||r===Gf||r===Vf||r===Hf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Df)return a===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lf)return a===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rf)return a===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===If)return a===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ff)return a===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Of)return a===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zf)return a===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nf)return a===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kf)return a===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uf)return a===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bf)return a===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Gf)return a===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vf)return a===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hf)return a===at?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Wf)return a===at?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Vr?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class vy extends Fn{constructor(e=[]){super();this.isArrayCamera=!0,this.cameras=e}}class ea extends bn{constructor(){super();this.isGroup=!0,this.type="Group"}}const xy={type:"move"};class lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n);if(c.joints[d.jointName]===void 0){const M=new ea;M.matrixAutoUpdate=!1,M.visible=!1,c.joints[d.jointName]=M,c.add(M)}const _=c.joints[d.jointName];m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xy)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class yy extends Mn{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:er,u!==er&&u!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===er&&(n=Ji),n===void 0&&u===Hr&&(n=Vr);super(null,i,r,a,o,l,u,n,c);this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1}}class My extends Wr{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,p=null;const g=t.getContextAttributes();let d=null,m=null;const _=[],M=[],E=new Fn;E.layers.enable(1),E.viewport=new St;const x=new Fn;x.layers.enable(2),x.viewport=new St;const y=[E,x],S=new vy;S.layers.enable(1),S.layers.enable(2);let C=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let A=_[N];return A===void 0&&(A=new lc,_[N]=A),A.getTargetRaySpace()},this.getControllerGrip=function(N){let A=_[N];return A===void 0&&(A=new lc,_[N]=A),A.getGripSpace()},this.getHand=function(N){let A=_[N];return A===void 0&&(A=new lc,_[N]=A),A.getHandSpace()};function w(N){const A=M.indexOf(N.inputSource);if(A===-1)return;const Q=_[A];Q!==void 0&&Q.dispatchEvent({type:N.type,data:N.inputSource})}function L(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",R);for(let N=0;N<_.length;N++){const A=M[N];A!==null&&(M[N]=null,_[N].disconnect(A))}C=null,v=null,e.setRenderTarget(d),h=null,f=null,u=null,i=null,m=null,B.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",L),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const A={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,A),i.updateRenderState({baseLayer:h}),m=new rr(h.framebufferWidth,h.framebufferHeight,{format:Wn,type:Ki,encoding:e.outputEncoding})}else{let A=null,Q=null,X=null;g.depth&&(X=g.stencil?35056:33190,A=g.stencil?Hr:er,Q=g.stencil?Vr:Ji);const ee={colorFormat:32856,depthFormat:X,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(ee),i.updateRenderState({layers:[f]}),m=new rr(f.textureWidth,f.textureHeight,{format:Wn,type:Ki,depthTexture:new yy(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,A),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ie=e.properties.get(m);ie.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),B.setContext(i),B.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(N){for(let A=0;A<N.removed.length;A++){const Q=N.removed[A],X=M.indexOf(Q);X>=0&&(M[X]=null,_[X].dispatchEvent({type:"disconnected",data:Q}))}for(let A=0;A<N.added.length;A++){const Q=N.added[A];let X=M.indexOf(Q);if(X===-1){for(let ie=0;ie<_.length;ie++)if(ie>=M.length){M.push(Q),X=ie;break}else if(M[ie]===null){M[ie]=Q,X=ie;break}if(X===-1)break}const ee=_[X];ee&&ee.dispatchEvent({type:"connected",data:Q})}}const H=new U,K=new U;function I(N,A,Q){H.setFromMatrixPosition(A.matrixWorld),K.setFromMatrixPosition(Q.matrixWorld);const X=H.distanceTo(K),ee=A.projectionMatrix.elements,ie=Q.projectionMatrix.elements,he=ee[14]/(ee[10]-1),V=ee[14]/(ee[10]+1),He=(ee[9]+1)/ee[5],Ce=(ee[9]-1)/ee[5],Le=(ee[8]-1)/ee[0],ae=(ie[8]+1)/ie[0],Fe=he*Le,pe=he*ae,ve=X/(-Le+ae),je=ve*-Le;A.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(je),N.translateZ(ve),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const tt=he+ve,$e=V+ve,Y=Fe-je,Je=pe+(X-je),Ae=He*V/$e*tt,yt=Ce*V/$e*tt;N.projectionMatrix.makePerspective(Y,Je,Ae,yt,tt,$e)}function k(N,A){A===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(A.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;S.near=x.near=E.near=N.near,S.far=x.far=E.far=N.far,(C!==S.near||v!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,v=S.far);const A=N.parent,Q=S.cameras;k(S,A);for(let ee=0;ee<Q.length;ee++)k(Q[ee],A);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),N.position.copy(S.position),N.quaternion.copy(S.quaternion),N.scale.copy(S.scale),N.matrix.copy(S.matrix),N.matrixWorld.copy(S.matrixWorld);const X=N.children;for(let ee=0,ie=X.length;ee<ie;ee++)X[ee].updateMatrixWorld(!0);Q.length===2?I(S,E,x):S.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(N){f!==null&&(f.fixedFoveation=N),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=N)};let F=null;function G(N,A){if(c=A.getViewerPose(l||a),p=A,c!==null){const Q=c.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let X=!1;Q.length!==S.cameras.length&&(S.cameras.length=0,X=!0);for(let ee=0;ee<Q.length;ee++){const ie=Q[ee];let he=null;if(h!==null)he=h.getViewport(ie);else{const He=u.getViewSubImage(f,ie);he=He.viewport,ee===0&&(e.setRenderTargetTextures(m,He.colorTexture,f.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(m))}let V=y[ee];V===void 0&&(V=new Fn,V.layers.enable(ee),V.viewport=new St,y[ee]=V),V.matrix.fromArray(ie.transform.matrix),V.projectionMatrix.fromArray(ie.projectionMatrix),V.viewport.set(he.x,he.y,he.width,he.height),ee===0&&S.matrix.copy(V.matrix),X===!0&&S.cameras.push(V)}}for(let Q=0;Q<_.length;Q++){const X=M[Q],ee=_[Q];X!==null&&ee!==void 0&&ee.update(X,A,l||a)}F&&F(N,A),p=null}const B=new _h;B.setAnimationLoop(G),this.setAnimationLoop=function(N){F=N},this.dispose=function(){}}}function by(s,e){function t(d,m){d.fogColor.value.copy(m.color),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,M,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(d,m):m.isMeshToonMaterial?(i(d,m),u(d,m)):m.isMeshPhongMaterial?(i(d,m),c(d,m)):m.isMeshStandardMaterial?(i(d,m),f(d,m),m.isMeshPhysicalMaterial&&h(d,m,E)):m.isMeshMatcapMaterial?(i(d,m),p(d,m)):m.isMeshDepthMaterial?i(d,m):m.isMeshDistanceMaterial?(i(d,m),g(d,m)):m.isMeshNormalMaterial?i(d,m):m.isLineBasicMaterial?(r(d,m),m.isLineDashedMaterial&&a(d,m)):m.isPointsMaterial?o(d,m,_,M):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===An&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===An&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const x=s.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*x}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let M;m.map?M=m.map:m.specularMap?M=m.specularMap:m.displacementMap?M=m.displacementMap:m.normalMap?M=m.normalMap:m.bumpMap?M=m.bumpMap:m.roughnessMap?M=m.roughnessMap:m.metalnessMap?M=m.metalnessMap:m.alphaMap?M=m.alphaMap:m.emissiveMap?M=m.emissiveMap:m.clearcoatMap?M=m.clearcoatMap:m.clearcoatNormalMap?M=m.clearcoatNormalMap:m.clearcoatRoughnessMap?M=m.clearcoatRoughnessMap:m.iridescenceMap?M=m.iridescenceMap:m.iridescenceThicknessMap?M=m.iridescenceThicknessMap:m.specularIntensityMap?M=m.specularIntensityMap:m.specularColorMap?M=m.specularColorMap:m.transmissionMap?M=m.transmissionMap:m.thicknessMap?M=m.thicknessMap:m.sheenColorMap?M=m.sheenColorMap:m.sheenRoughnessMap&&(M=m.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix));let E;m.aoMap?E=m.aoMap:m.lightMap&&(E=m.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),d.uv2Transform.value.copy(E.matrix))}function r(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function o(d,m,_,M){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=M*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let E;m.map?E=m.map:m.alphaMap&&(E=m.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),d.uvTransform.value.copy(E.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function h(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===An&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Sy(){const s=Bs("canvas");return s.style.display="block",s}function wy(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:Sy(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let f=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=tr,this.physicallyCorrectLights=!1,this.toneMapping=ii,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let m=!1,_=0,M=0,E=null,x=-1,y=null;const S=new St,C=new St;let v=null,w=e.width,L=e.height,R=1,H=null,K=null;const I=new St(0,0,w,L),k=new St(0,0,w,L);let F=!1;const G=new gh;let B=!1,N=!1,A=null;const Q=new wt,X=new Ke,ee=new U,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return E===null?R:1}let V=t;function He(T,O){for(let W=0;W<T.length;W++){const z=T[W],j=e.getContext(z,O);if(j!==null)return j}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xl}`),e.addEventListener("webglcontextlost",D,!1),e.addEventListener("webglcontextrestored",se,!1),e.addEventListener("webglcontextcreationerror",re,!1),V===null){const O=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&O.shift(),V=He(O,T),V===null)throw He(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ce,Le,ae,Fe,pe,ve,je,tt,$e,Y,Je,Ae,yt,Mt,P,b,$,te,J,oe,be,q,me;function ue(){Ce=new Fv(V),Le=new Cv(V,Ce,s),Ce.init(Le),q=new _y(V,Ce,Le),ae=new my(V,Ce,Le),Fe=new Nv,pe=new ty,ve=new gy(V,Ce,ae,pe,Le,q,Fe),je=new Pv(d),tt=new Iv(d),$e=new jg(V,Le),me=new Tv(V,Ce,$e,Le),Y=new Ov(V,$e,Fe,me),Je=new Gv(V,Y,$e,Fe),J=new Bv(V,Le,ve),b=new Av(pe),Ae=new ey(d,je,tt,Ce,Le,me,b),yt=new by(d,pe),Mt=new iy,P=new cy(Ce,Le),te=new wv(d,je,ae,Je,u,a),$=new py(d,Je,Le),oe=new Ev(V,Ce,Fe,Le),be=new zv(V,Ce,Fe,Le),Fe.programs=Ae.programs,d.capabilities=Le,d.extensions=Ce,d.properties=pe,d.renderLists=Mt,d.shadowMap=$,d.state=ae,d.info=Fe}ue();const de=new My(d,V);this.xr=de,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=Ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(T){T!==void 0&&(R=T,this.setSize(w,L,!1))},this.getSize=function(T){return T.set(w,L)},this.setSize=function(T,O,W){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,L=O,e.width=Math.floor(T*R),e.height=Math.floor(O*R),W!==!1&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(w*R,L*R).floor()},this.setDrawingBufferSize=function(T,O,W){w=T,L=O,R=W,e.width=Math.floor(T*W),e.height=Math.floor(O*W),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(I)},this.setViewport=function(T,O,W,z){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,O,W,z),ae.viewport(S.copy(I).multiplyScalar(R).floor())},this.getScissor=function(T){return T.copy(k)},this.setScissor=function(T,O,W,z){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,O,W,z),ae.scissor(C.copy(k).multiplyScalar(R).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(T){ae.setScissorTest(F=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(T=!0,O=!0,W=!0){let z=0;T&&(z|=16384),O&&(z|=256),W&&(z|=1024),V.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",D,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",re,!1),Mt.dispose(),P.dispose(),pe.dispose(),je.dispose(),tt.dispose(),Je.dispose(),me.dispose(),Ae.dispose(),de.dispose(),de.removeEventListener("sessionstart",ze),de.removeEventListener("sessionend",Ue),A&&(A.dispose(),A=null),st.stop()};function D(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const T=Fe.autoReset,O=$.enabled,W=$.autoUpdate,z=$.needsUpdate,j=$.type;ue(),Fe.autoReset=T,$.enabled=O,$.autoUpdate=W,$.needsUpdate=z,$.type=j}function re(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function le(T){const O=T.target;O.removeEventListener("dispose",le),fe(O)}function fe(T){Se(T),pe.remove(T)}function Se(T){const O=pe.get(T).programs;O!==void 0&&(O.forEach(function(W){Ae.releaseProgram(W)}),T.isShaderMaterial&&Ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,W,z,j,we){O===null&&(O=ie);const _e=j.isMesh&&j.matrixWorld.determinant()<0,ye=De(T,O,W,z,j);ae.setMaterial(z,_e);let Me=W.index;const Ge=W.attributes.position;if(Me===null){if(Ge===void 0||Ge.count===0)return}else if(Me.count===0)return;let Oe=1;z.wireframe===!0&&(Me=Y.getWireframeAttribute(W),Oe=2),me.setup(j,z,ye,W,Me);let Pe,Re=oe;Me!==null&&(Pe=$e.get(Me),Re=be,Re.setIndex(Pe));const Ct=Me!==null?Me.count:Ge.count,kn=W.drawRange.start*Oe,Kn=W.drawRange.count*Oe,Lt=we!==null?we.start*Oe:0,Ve=we!==null?we.count*Oe:1/0,br=Math.max(kn,Lt),dt=Math.min(Ct,kn+Kn,Lt+Ve)-1,Un=Math.max(0,dt-br+1);if(Un!==0){if(j.isMesh)z.wireframe===!0?(ae.setLineWidth(z.wireframeLinewidth*he()),Re.setMode(1)):Re.setMode(4);else if(j.isLine){let pi=z.linewidth;pi===void 0&&(pi=1),ae.setLineWidth(pi*he()),j.isLineSegments?Re.setMode(1):j.isLineLoop?Re.setMode(2):Re.setMode(3)}else j.isPoints?Re.setMode(0):j.isSprite&&Re.setMode(4);if(j.isInstancedMesh)Re.renderInstances(br,Un,j.count);else if(W.isInstancedBufferGeometry){const pi=Math.min(W.instanceCount,W._maxInstanceCount);Re.renderInstances(br,Un,pi)}else Re.render(br,Un)}},this.compile=function(T,O){h=P.get(T),h.init(),g.push(h),T.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),h.setupLights(d.physicallyCorrectLights),T.traverse(function(W){const z=W.material;if(z)if(Array.isArray(z))for(let j=0;j<z.length;j++){const we=z[j];ge(we,T,W)}else ge(z,T,W)}),g.pop(),h=null};let ne=null;function Te(T){ne&&ne(T)}function ze(){st.stop()}function Ue(){st.start()}const st=new _h;st.setAnimationLoop(Te),typeof self!="undefined"&&st.setContext(self),this.setAnimationLoop=function(T){ne=T,de.setAnimationLoop(T),T===null?st.stop():st.start()},de.addEventListener("sessionstart",ze),de.addEventListener("sessionend",Ue),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(O),O=de.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,O,E),h=P.get(T,g.length),h.init(),g.push(h),Q.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G.setFromProjectionMatrix(Q),N=this.localClippingEnabled,B=b.init(this.clippingPlanes,N,O),f=Mt.get(T,p.length),f.init(),p.push(f),ht(T,O,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(H,K),B===!0&&b.beginShadows();const W=h.state.shadowsArray;if($.render(W,T,O),B===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(f,T),h.setupLights(d.physicallyCorrectLights),O.isArrayCamera){const z=O.cameras;for(let j=0,we=z.length;j<we;j++){const _e=z[j];di(f,T,_e,_e.viewport)}}else di(f,T,O);E!==null&&(ve.updateMultisampleRenderTarget(E),ve.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(d,T,O),me.resetDefaultState(),x=-1,y=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function ht(T,O,W,z){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||G.intersectsSprite(T)){z&&ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const _e=Je.update(T),ye=T.material;ye.visible&&f.push(T,_e,ye,W,ee.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Fe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Fe.render.frame),!T.frustumCulled||G.intersectsObject(T))){z&&ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const _e=Je.update(T),ye=T.material;if(Array.isArray(ye)){const Me=_e.groups;for(let Ge=0,Oe=Me.length;Ge<Oe;Ge++){const Pe=Me[Ge],Re=ye[Pe.materialIndex];Re&&Re.visible&&f.push(T,_e,Re,W,ee.z,Pe)}}else ye.visible&&f.push(T,_e,ye,W,ee.z,null)}}const we=T.children;for(let _e=0,ye=we.length;_e<ye;_e++)ht(we[_e],O,W,z)}function di(T,O,W,z){const j=T.opaque,we=T.transmissive,_e=T.transparent;h.setupLightsView(W),we.length>0&&Gi(j,O,W),z&&ae.viewport(S.copy(z)),j.length>0&&Ne(j,O,W),we.length>0&&Ne(we,O,W),_e.length>0&&Ne(_e,O,W),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Gi(T,O,W){const z=Le.isWebGL2;A===null&&(A=new rr(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?Ns:Ki,minFilter:Co,samples:z&&r===!0?4:0})),d.getDrawingBufferSize(X),z?A.setSize(X.x,X.y):A.setSize(Po(X.x),Po(X.y));const j=d.getRenderTarget();d.setRenderTarget(A),d.clear();const we=d.toneMapping;d.toneMapping=ii,Ne(T,O,W),d.toneMapping=we,ve.updateMultisampleRenderTarget(A),ve.updateRenderTargetMipmap(A),d.setRenderTarget(j)}function Ne(T,O,W){const z=O.isScene===!0?O.overrideMaterial:null;for(let j=0,we=T.length;j<we;j++){const _e=T[j],ye=_e.object,Me=_e.geometry,Ge=z===null?_e.material:z,Oe=_e.group;ye.layers.test(W.layers)&&Z(ye,O,W,Me,Ge,Oe)}}function Z(T,O,W,z,j,we){T.onBeforeRender(d,O,W,z,j,we),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(d,O,W,z,T,we),j.transparent===!0&&j.side===Nr?(j.side=An,j.needsUpdate=!0,d.renderBufferDirect(W,O,z,j,T,we),j.side=zs,j.needsUpdate=!0,d.renderBufferDirect(W,O,z,j,T,we),j.side=Nr):d.renderBufferDirect(W,O,z,j,T,we),T.onAfterRender(d,O,W,z,j,we)}function ge(T,O,W){O.isScene!==!0&&(O=ie);const z=pe.get(T),j=h.state.lights,we=h.state.shadowsArray,_e=j.state.version,ye=Ae.getParameters(T,j.state,we,O,W),Me=Ae.getProgramCacheKey(ye);let Ge=z.programs;z.environment=T.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(T.isMeshStandardMaterial?tt:je).get(T.envMap||z.environment),Ge===void 0&&(T.addEventListener("dispose",le),Ge=new Map,z.programs=Ge);let Oe=Ge.get(Me);if(Oe!==void 0){if(z.currentProgram===Oe&&z.lightsStateVersion===_e)return xe(T,ye),Oe}else ye.uniforms=Ae.getUniforms(T),T.onBuild(W,ye,d),T.onBeforeCompile(ye,d),Oe=Ae.acquireProgram(ye,Me),Ge.set(Me,Oe),z.uniforms=ye.uniforms;const Pe=z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=b.uniform),xe(T,ye),z.needsLights=Ie(T),z.lightsStateVersion=_e,z.needsLights&&(Pe.ambientLightColor.value=j.state.ambient,Pe.lightProbe.value=j.state.probe,Pe.directionalLights.value=j.state.directional,Pe.directionalLightShadows.value=j.state.directionalShadow,Pe.spotLights.value=j.state.spot,Pe.spotLightShadows.value=j.state.spotShadow,Pe.rectAreaLights.value=j.state.rectArea,Pe.ltc_1.value=j.state.rectAreaLTC1,Pe.ltc_2.value=j.state.rectAreaLTC2,Pe.pointLights.value=j.state.point,Pe.pointLightShadows.value=j.state.pointShadow,Pe.hemisphereLights.value=j.state.hemi,Pe.directionalShadowMap.value=j.state.directionalShadowMap,Pe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pe.spotShadowMap.value=j.state.spotShadowMap,Pe.spotShadowMatrix.value=j.state.spotShadowMatrix,Pe.pointShadowMap.value=j.state.pointShadowMap,Pe.pointShadowMatrix.value=j.state.pointShadowMatrix);const Re=Oe.getUniforms(),Ct=Qo.seqWithValue(Re.seq,Pe);return z.currentProgram=Oe,z.uniformsList=Ct,Oe}function xe(T,O){const W=pe.get(T);W.outputEncoding=O.outputEncoding,W.instancing=O.instancing,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function De(T,O,W,z,j){O.isScene!==!0&&(O=ie),ve.resetTextureUnits();const we=O.fog,_e=z.isMeshStandardMaterial?O.environment:null,ye=E===null?d.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:tr,Me=(z.isMeshStandardMaterial?tt:je).get(z.envMap||_e),Ge=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Oe=!!z.normalMap&&!!W.attributes.tangent,Pe=!!W.morphAttributes.position,Re=!!W.morphAttributes.normal,Ct=!!W.morphAttributes.color,kn=z.toneMapped?d.toneMapping:ii,Kn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Lt=Kn!==void 0?Kn.length:0,Ve=pe.get(z),br=h.state.lights;if(B===!0&&(N===!0||T!==y)){const Bn=T===y&&z.id===x;b.setState(z,T,Bn)}let dt=!1;z.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==br.state.version||Ve.outputEncoding!==ye||j.isInstancedMesh&&Ve.instancing===!1||!j.isInstancedMesh&&Ve.instancing===!0||j.isSkinnedMesh&&Ve.skinning===!1||!j.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Me||z.fog===!0&&Ve.fog!==we||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==b.numPlanes||Ve.numIntersection!==b.numIntersection)||Ve.vertexAlphas!==Ge||Ve.vertexTangents!==Oe||Ve.morphTargets!==Pe||Ve.morphNormals!==Re||Ve.morphColors!==Ct||Ve.toneMapping!==kn||Le.isWebGL2===!0&&Ve.morphTargetsCount!==Lt)&&(dt=!0):(dt=!0,Ve.__version=z.version);let Un=Ve.currentProgram;dt===!0&&(Un=ge(z,O,j));let pi=!1,vs=!1,Aa=!1;const kt=Un.getUniforms(),xs=Ve.uniforms;if(ae.useProgram(Un.program)&&(pi=!0,vs=!0,Aa=!0),z.id!==x&&(x=z.id,vs=!0),pi||y!==T){if(kt.setValue(V,"projectionMatrix",T.projectionMatrix),Le.logarithmicDepthBuffer&&kt.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),y!==T&&(y=T,vs=!0,Aa=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Bn=kt.map.cameraPosition;Bn!==void 0&&Bn.setValue(V,ee.setFromMatrixPosition(T.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&kt.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||j.isSkinnedMesh)&&kt.setValue(V,"viewMatrix",T.matrixWorldInverse)}if(j.isSkinnedMesh){kt.setOptional(V,j,"bindMatrix"),kt.setOptional(V,j,"bindMatrixInverse");const Bn=j.skeleton;Bn&&(Le.floatVertexTextures?(Bn.boneTexture===null&&Bn.computeBoneTexture(),kt.setValue(V,"boneTexture",Bn.boneTexture,ve),kt.setValue(V,"boneTextureSize",Bn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Pa=W.morphAttributes;return(Pa.position!==void 0||Pa.normal!==void 0||Pa.color!==void 0&&Le.isWebGL2===!0)&&J.update(j,W,z,Un),(vs||Ve.receiveShadow!==j.receiveShadow)&&(Ve.receiveShadow=j.receiveShadow,kt.setValue(V,"receiveShadow",j.receiveShadow)),vs&&(kt.setValue(V,"toneMappingExposure",d.toneMappingExposure),Ve.needsLights&&ct(xs,Aa),we&&z.fog===!0&&yt.refreshFogUniforms(xs,we),yt.refreshMaterialUniforms(xs,z,R,L,A),Qo.upload(V,Ve.uniformsList,xs,ve)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Qo.upload(V,Ve.uniformsList,xs,ve),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&kt.setValue(V,"center",j.center),kt.setValue(V,"modelViewMatrix",j.modelViewMatrix),kt.setValue(V,"normalMatrix",j.normalMatrix),kt.setValue(V,"modelMatrix",j.matrixWorld),Un}function ct(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Ie(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,O,W){pe.get(T.texture).__webglTexture=O,pe.get(T.depthTexture).__webglTexture=W;const z=pe.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=W===void 0,z.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const W=pe.get(T);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,W=0){E=T,_=O,M=W;let z=!0;if(T){const Me=pe.get(T);Me.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(36160,null),z=!1):Me.__webglFramebuffer===void 0?ve.setupRenderTarget(T):Me.__hasExternalTextures&&ve.rebindTextures(T,pe.get(T.texture).__webglTexture,pe.get(T.depthTexture).__webglTexture)}let j=null,we=!1,_e=!1;if(T){const Me=T.texture;(Me.isData3DTexture||Me.isDataArrayTexture)&&(_e=!0);const Ge=pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(j=Ge[O],we=!0):Le.isWebGL2&&T.samples>0&&ve.useMultisampledRTT(T)===!1?j=pe.get(T).__webglMultisampledFramebuffer:j=Ge,S.copy(T.viewport),C.copy(T.scissor),v=T.scissorTest}else S.copy(I).multiplyScalar(R).floor(),C.copy(k).multiplyScalar(R).floor(),v=F;if(ae.bindFramebuffer(36160,j)&&Le.drawBuffers&&z&&ae.drawBuffers(T,j),ae.viewport(S),ae.scissor(C),ae.setScissorTest(v),we){const Me=pe.get(T.texture);V.framebufferTexture2D(36160,36064,34069+O,Me.__webglTexture,W)}else if(_e){const Me=pe.get(T.texture),Ge=O||0;V.framebufferTextureLayer(36160,36064,Me.__webglTexture,W||0,Ge)}x=-1},this.readRenderTargetPixels=function(T,O,W,z,j,we,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){ae.bindFramebuffer(36160,ye);try{const Me=T.texture,Ge=Me.format,Oe=Me.type;if(Ge!==Wn&&q.convert(Ge)!==V.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Oe===Ns&&(Ce.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Oe!==Ki&&q.convert(Oe)!==V.getParameter(35738)&&!(Oe===Qi&&(Le.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-z&&W>=0&&W<=T.height-j&&V.readPixels(O,W,z,j,q.convert(Ge),q.convert(Oe),we)}finally{const Me=E!==null?pe.get(E).__webglFramebuffer:null;ae.bindFramebuffer(36160,Me)}}},this.copyFramebufferToTexture=function(T,O,W=0){const z=Math.pow(2,-W),j=Math.floor(O.image.width*z),we=Math.floor(O.image.height*z);ve.setTexture2D(O,0),V.copyTexSubImage2D(3553,W,0,0,T.x,T.y,j,we),ae.unbindTexture()},this.copyTextureToTexture=function(T,O,W,z=0){const j=O.image.width,we=O.image.height,_e=q.convert(W.format),ye=q.convert(W.type);ve.setTexture2D(W,0),V.pixelStorei(37440,W.flipY),V.pixelStorei(37441,W.premultiplyAlpha),V.pixelStorei(3317,W.unpackAlignment),O.isDataTexture?V.texSubImage2D(3553,z,T.x,T.y,j,we,_e,ye,O.image.data):O.isCompressedTexture?V.compressedTexSubImage2D(3553,z,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,_e,O.mipmaps[0].data):V.texSubImage2D(3553,z,T.x,T.y,_e,ye,O.image),z===0&&W.generateMipmaps&&V.generateMipmap(3553),ae.unbindTexture()},this.copyTextureToTexture3D=function(T,O,W,z,j=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=T.max.x-T.min.x+1,_e=T.max.y-T.min.y+1,ye=T.max.z-T.min.z+1,Me=q.convert(z.format),Ge=q.convert(z.type);let Oe;if(z.isData3DTexture)ve.setTexture3D(z,0),Oe=32879;else if(z.isDataArrayTexture)ve.setTexture2DArray(z,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(37440,z.flipY),V.pixelStorei(37441,z.premultiplyAlpha),V.pixelStorei(3317,z.unpackAlignment);const Pe=V.getParameter(3314),Re=V.getParameter(32878),Ct=V.getParameter(3316),kn=V.getParameter(3315),Kn=V.getParameter(32877),Lt=W.isCompressedTexture?W.mipmaps[0]:W.image;V.pixelStorei(3314,Lt.width),V.pixelStorei(32878,Lt.height),V.pixelStorei(3316,T.min.x),V.pixelStorei(3315,T.min.y),V.pixelStorei(32877,T.min.z),W.isDataTexture||W.isData3DTexture?V.texSubImage3D(Oe,j,O.x,O.y,O.z,we,_e,ye,Me,Ge,Lt.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Oe,j,O.x,O.y,O.z,we,_e,ye,Me,Lt.data)):V.texSubImage3D(Oe,j,O.x,O.y,O.z,we,_e,ye,Me,Ge,Lt),V.pixelStorei(3314,Pe),V.pixelStorei(32878,Re),V.pixelStorei(3316,Ct),V.pixelStorei(3315,kn),V.pixelStorei(32877,Kn),j===0&&z.generateMipmaps&&V.generateMipmap(Oe),ae.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ve.setTextureCube(T,0):T.isData3DTexture?ve.setTexture3D(T,0):T.isDataArrayTexture?ve.setTexture2DArray(T,0):ve.setTexture2D(T,0),ae.unbindTexture()},this.resetState=function(){_=0,M=0,E=null,ae.reset(),me.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ty extends wy{}Ty.prototype.isWebGL1Renderer=!0;class Xh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=t,this.far=n}clone(){return new Xh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class SM extends bn{constructor(){super();this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class Ey extends qs{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qh=new wt,cc=new th,ta=new zo,na=new U;class wM extends bn{constructor(e=new Ai,t=new Ey){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(i),ta.radius+=r,e.ray.intersectsSphere(ta)===!1)return;qh.copy(i).invert(),cc.copy(e.ray).applyMatrix4(qh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=h,d=p;g<d;g++){const m=c.getX(g);na.fromBufferAttribute(f,m),Yh(na,m,l,i,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=h,d=p;g<d;g++)na.fromBufferAttribute(f,g),Yh(na,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Yh(s,e,t,n,i,r,a){const o=cc.distanceSqToPoint(s);if(o<t){const l=new U;cc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class TM extends Ii{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const jh={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Cy{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Ay=new Cy;class uc{constructor(e){this.manager=e!==void 0?e:Ay,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class $h extends uc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=jh.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Bs("img");function l(){u(),jh.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class EM extends uc{constructor(e){super(e)}load(e,t,n,i){const r=new Ql,a=new $h(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){r.images[c]=u,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class CM extends uc{constructor(e){super(e)}load(e,t,n,i){const r=new Mn,a=new $h(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class AM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Zh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zh(){return(typeof performance=="undefined"?Date:performance).now()}const Py="\\[\\]\\.:\\/";""+Py.replace("\\.","");class PM{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){const e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);let Zs;function DM(){if(Zs!==void 0)return Zs;try{var s;let e;const t=document.createElement("canvas");return Zs=!!(window.WebGL2RenderingContext&&(e=t.getContext("webgl2"))),e&&((s=e.getExtension("WEBGL_lose_context"))===null||s===void 0||s.loseContext()),Zs}catch{return Zs=!1}}new Ke,["varying vec2 vUv;","void main() {","	vUv = uv;","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),["#include <common>","varying vec2 vUv;","uniform sampler2D tColor;","uniform sampler2D tDepth;","uniform float textureWidth;","uniform float textureHeight;","uniform float focalDepth;  //focal distance value in meters, but you may use autofocus option below","uniform float focalLength; //focal length in mm","uniform float fstop; //f-stop value","uniform bool showFocus; //show debug focus point and focal range (red = focal point, green = focal range)","/*","make sure that these two values are the same for your camera, otherwise distances will be wrong.","*/","uniform float znear; // camera clipping start","uniform float zfar; // camera clipping end","//------------------------------------------","//user variables","const int samples = SAMPLES; //samples on the first ring","const int rings = RINGS; //ring count","const int maxringsamples = rings * samples;","uniform bool manualdof; // manual dof calculation","float ndofstart = 1.0; // near dof blur start","float ndofdist = 2.0; // near dof blur falloff distance","float fdofstart = 1.0; // far dof blur start","float fdofdist = 3.0; // far dof blur falloff distance","float CoC = 0.03; //circle of confusion size in mm (35mm film = 0.03mm)","uniform bool vignetting; // use optical lens vignetting","float vignout = 1.3; // vignetting outer border","float vignin = 0.0; // vignetting inner border","float vignfade = 22.0; // f-stops till vignete fades","uniform bool shaderFocus;","// disable if you use external focalDepth value","uniform vec2 focusCoords;","// autofocus point on screen (0.0,0.0 - left lower corner, 1.0,1.0 - upper right)","// if center of screen use vec2(0.5, 0.5);","uniform float maxblur;","//clamp value of max blur (0.0 = no blur, 1.0 default)","uniform float threshold; // highlight threshold;","uniform float gain; // highlight gain;","uniform float bias; // bokeh edge bias","uniform float fringe; // bokeh chromatic aberration / fringing","uniform bool noise; //use noise instead of pattern for sample dithering","uniform float dithering;","uniform bool depthblur; // blur the depth buffer","float dbsize = 1.25; // depth blur size","/*","next part is experimental","not looking good with small sample and ring count","looks okay starting from samples = 4, rings = 4","*/","uniform bool pentagon; //use pentagon as bokeh shape?","float feather = 0.4; //pentagon shape feather","//------------------------------------------","float penta(vec2 coords) {","	//pentagonal shape","	float scale = float(rings) - 1.3;","	vec4  HS0 = vec4( 1.0,         0.0,         0.0,  1.0);","	vec4  HS1 = vec4( 0.309016994, 0.951056516, 0.0,  1.0);","	vec4  HS2 = vec4(-0.809016994, 0.587785252, 0.0,  1.0);","	vec4  HS3 = vec4(-0.809016994,-0.587785252, 0.0,  1.0);","	vec4  HS4 = vec4( 0.309016994,-0.951056516, 0.0,  1.0);","	vec4  HS5 = vec4( 0.0        ,0.0         , 1.0,  1.0);","	vec4  one = vec4( 1.0 );","	vec4 P = vec4((coords),vec2(scale, scale));","	vec4 dist = vec4(0.0);","	float inorout = -4.0;","	dist.x = dot( P, HS0 );","	dist.y = dot( P, HS1 );","	dist.z = dot( P, HS2 );","	dist.w = dot( P, HS3 );","	dist = smoothstep( -feather, feather, dist );","	inorout += dot( dist, one );","	dist.x = dot( P, HS4 );","	dist.y = HS5.w - abs( P.z );","	dist = smoothstep( -feather, feather, dist );","	inorout += dist.x;","	return clamp( inorout, 0.0, 1.0 );","}","float bdepth(vec2 coords) {","	// Depth buffer blur","	float d = 0.0;","	float kernel[9];","	vec2 offset[9];","	vec2 wh = vec2(1.0/textureWidth,1.0/textureHeight) * dbsize;","	offset[0] = vec2(-wh.x,-wh.y);","	offset[1] = vec2( 0.0, -wh.y);","	offset[2] = vec2( wh.x -wh.y);","	offset[3] = vec2(-wh.x,  0.0);","	offset[4] = vec2( 0.0,   0.0);","	offset[5] = vec2( wh.x,  0.0);","	offset[6] = vec2(-wh.x, wh.y);","	offset[7] = vec2( 0.0,  wh.y);","	offset[8] = vec2( wh.x, wh.y);","	kernel[0] = 1.0/16.0;   kernel[1] = 2.0/16.0;   kernel[2] = 1.0/16.0;","	kernel[3] = 2.0/16.0;   kernel[4] = 4.0/16.0;   kernel[5] = 2.0/16.0;","	kernel[6] = 1.0/16.0;   kernel[7] = 2.0/16.0;   kernel[8] = 1.0/16.0;","	for( int i=0; i<9; i++ ) {","		float tmp = texture2D(tDepth, coords + offset[i]).r;","		d += tmp * kernel[i];","	}","	return d;","}","vec3 color(vec2 coords,float blur) {","	//processing the sample","	vec3 col = vec3(0.0);","	vec2 texel = vec2(1.0/textureWidth,1.0/textureHeight);","	col.r = texture2D(tColor,coords + vec2(0.0,1.0)*texel*fringe*blur).r;","	col.g = texture2D(tColor,coords + vec2(-0.866,-0.5)*texel*fringe*blur).g;","	col.b = texture2D(tColor,coords + vec2(0.866,-0.5)*texel*fringe*blur).b;","	vec3 lumcoeff = vec3(0.299,0.587,0.114);","	float lum = dot(col.rgb, lumcoeff);","	float thresh = max((lum-threshold)*gain, 0.0);","	return col+mix(vec3(0.0),col,thresh*blur);","}","vec3 debugFocus(vec3 col, float blur, float depth) {","	float edge = 0.002*depth; //distance based edge smoothing","	float m = clamp(smoothstep(0.0,edge,blur),0.0,1.0);","	float e = clamp(smoothstep(1.0-edge,1.0,blur),0.0,1.0);","	col = mix(col,vec3(1.0,0.5,0.0),(1.0-m)*0.6);","	col = mix(col,vec3(0.0,0.5,1.0),((1.0-e)-(1.0-m))*0.2);","	return col;","}","float linearize(float depth) {","	return -zfar * znear / (depth * (zfar - znear) - zfar);","}","float vignette() {","	float dist = distance(vUv.xy, vec2(0.5,0.5));","	dist = smoothstep(vignout+(fstop/vignfade), vignin+(fstop/vignfade), dist);","	return clamp(dist,0.0,1.0);","}","float gather(float i, float j, int ringsamples, inout vec3 col, float w, float h, float blur) {","	float rings2 = float(rings);","	float step = PI*2.0 / float(ringsamples);","	float pw = cos(j*step)*i;","	float ph = sin(j*step)*i;","	float p = 1.0;","	if (pentagon) {","		p = penta(vec2(pw,ph));","	}","	col += color(vUv.xy + vec2(pw*w,ph*h), blur) * mix(1.0, i/rings2, bias) * p;","	return 1.0 * mix(1.0, i /rings2, bias) * p;","}","void main() {","	//scene depth calculation","	float depth = linearize(texture2D(tDepth,vUv.xy).x);","	// Blur depth?","	if ( depthblur ) {","		depth = linearize(bdepth(vUv.xy));","	}","	//focal plane calculation","	float fDepth = focalDepth;","	if (shaderFocus) {","		fDepth = linearize(texture2D(tDepth,focusCoords).x);","	}","	// dof blur factor calculation","	float blur = 0.0;","	if (manualdof) {","		float a = depth-fDepth; // Focal plane","		float b = (a-fdofstart)/fdofdist; // Far DoF","		float c = (-a-ndofstart)/ndofdist; // Near Dof","		blur = (a>0.0) ? b : c;","	} else {","		float f = focalLength; // focal length in mm","		float d = fDepth*1000.0; // focal plane in mm","		float o = depth*1000.0; // depth in mm","		float a = (o*f)/(o-f);","		float b = (d*f)/(d-f);","		float c = (d-f)/(d*fstop*CoC);","		blur = abs(a-b)*c;","	}","	blur = clamp(blur,0.0,1.0);","	// calculation of pattern for dithering","	vec2 noise = vec2(rand(vUv.xy), rand( vUv.xy + vec2( 0.4, 0.6 ) ) )*dithering*blur;","	// getting blur x and y step factor","	float w = (1.0/textureWidth)*blur*maxblur+noise.x;","	float h = (1.0/textureHeight)*blur*maxblur+noise.y;","	// calculation of final color","	vec3 col = vec3(0.0);","	if(blur < 0.05) {","		//some optimization thingy","		col = texture2D(tColor, vUv.xy).rgb;","	} else {","		col = texture2D(tColor, vUv.xy).rgb;","		float s = 1.0;","		int ringsamples;","		for (int i = 1; i <= rings; i++) {","			/*unboxstart*/","			ringsamples = i * samples;","			for (int j = 0 ; j < maxringsamples ; j++) {","				if (j >= ringsamples) break;","				s += gather(float(i), float(j), ringsamples, col, w, h, blur);","			}","			/*unboxend*/","		}","		col /= s; //divide by sample count","	}","	if (showFocus) {","		col = debugFocus(col, blur, depth);","	}","	if (vignetting) {","		col *= vignette();","	}","	gl_FragColor.rgb = col;","	gl_FragColor.a = 1.0;","} "].join(`
`);const LM={uniforms:{mNear:{value:1},mFar:{value:1e3}},vertexShader:["varying float vViewZDepth;","void main() {","	#include <begin_vertex>","	#include <project_vertex>","	vViewZDepth = - mvPosition.z;","}"].join(`
`),fragmentShader:["uniform float mNear;","uniform float mFar;","varying float vViewZDepth;","void main() {","	float color = 1.0 - smoothstep( mNear, mFar, vViewZDepth );","	gl_FragColor = vec4( vec3( color ), 1.0 );","} "].join(`
`)};function Kh(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Dy(s,e,t){return e&&Kh(s.prototype,e),t&&Kh(s,t),s}/*!
 * Observer 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zt,fc,un,Fi,Oi,cs,Jh,hr,Ks,Qh,fi,On,ed=function(){return zt||typeof window!="undefined"&&(zt=window.gsap)&&zt.registerPlugin&&zt},td=1,us=[],Xe=[],Yn=[],Js=Date.now,hc=function(e,t){return t},Ly=function(){var e=Ks.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Xe),i.push.apply(i,Yn),Xe=n,Yn=i,hc=function(a,o){return t[a](o)}},zi=function(e,t){return~Yn.indexOf(e)&&Yn[Yn.indexOf(e)+1][t]},Qs=function(e){return!!~Qh.indexOf(e)},en=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Ht=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ia="scrollLeft",ra="scrollTop",dc=function(){return fi&&fi.isPressed||Xe.cache++},sa=function(e,t){var n=function i(r){if(r||r===0){td&&(un.history.scrollRestoration="manual");var a=fi&&fi.isPressed;r=i.v=Math.round(r)||(fi&&fi.iOS?1:0),e(r),i.cacheID=Xe.cache,a&&hc("ss",r)}else(t||Xe.cache!==i.cacheID||hc("ref"))&&(i.cacheID=Xe.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Wt={s:ia,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:sa(function(s){return arguments.length?un.scrollTo(s,xt.sc()):un.pageXOffset||Fi[ia]||Oi[ia]||cs[ia]||0})},xt={s:ra,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Wt,sc:sa(function(s){return arguments.length?un.scrollTo(Wt.sc(),s):un.pageYOffset||Fi[ra]||Oi[ra]||cs[ra]||0})},tn=function(e){return zt.utils.toArray(e)[0]||(typeof e=="string"&&zt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ni=function(e,t){var n=t.s,i=t.sc;Qs(e)&&(e=Fi.scrollingElement||Oi);var r=Xe.indexOf(e),a=i===xt.sc?1:2;!~r&&(r=Xe.push(e)-1),Xe[r+a]||e.addEventListener("scroll",dc);var o=Xe[r+a],l=o||(Xe[r+a]=sa(zi(e,n),!0)||(Qs(e)?i:sa(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=zt.getProperty(e,"scrollBehavior")==="smooth"),l},pc=function(e,t,n){var i=e,r=e,a=Js(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,d){var m=Js();d||m-a>l?(r=i,i=g,o=a,a=m):n?i+=g:i=r+(g-r)/(m-o)*(a-o)},f=function(){r=i=n?0:i,o=a=0},h=function(g){var d=o,m=r,_=Js();return(g||g===0)&&g!==i&&u(g),a===o||_-o>c?0:(i+(n?m:-m))/((n?_:a)-d)*1e3};return{update:u,reset:f,getVelocity:h}},eo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},nd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},id=function(){Ks=zt.core.globals().ScrollTrigger,Ks&&Ks.core&&Ly()},rd=function(e){return zt=e||ed(),zt&&typeof document!="undefined"&&document.body&&(un=window,Fi=document,Oi=Fi.documentElement,cs=Fi.body,Qh=[un,Fi,Oi,cs],zt.utils.clamp,hr="onpointerenter"in cs?"pointer":"mouse",Jh=gt.isTouch=un.matchMedia&&un.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in un||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,On=gt.eventTypes=("ontouchstart"in Oi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Oi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return td=0},500),id(),fc=1),fc};Wt.op=xt;Xe.cache=0;var gt=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){fc||rd(zt)||console.warn("Please gsap.registerPlugin(Observer)"),Ks||id();var i=n.tolerance,r=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,d=n.event,m=n.onDragStart,_=n.onDragEnd,M=n.onDrag,E=n.onPress,x=n.onRelease,y=n.onRight,S=n.onLeft,C=n.onUp,v=n.onDown,w=n.onChangeX,L=n.onChangeY,R=n.onChange,H=n.onToggleX,K=n.onToggleY,I=n.onHover,k=n.onHoverEnd,F=n.onMove,G=n.ignoreCheck,B=n.isNormalizer,N=n.onGestureStart,A=n.onGestureEnd,Q=n.onWheel,X=n.onEnable,ee=n.onDisable,ie=n.onClick,he=n.scrollSpeed,V=n.capture,He=n.allowClicks,Ce=n.lockAxis,Le=n.onLockAxis;this.target=o=tn(o)||Oi,this.vars=n,p&&(p=zt.utils.toArray(p)),i=i||1e-9,r=r||0,g=g||1,he=he||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(un.getComputedStyle(cs).lineHeight)||22);var ae,Fe,pe,ve,je,tt,$e,Y=this,Je=0,Ae=0,yt=Ni(o,Wt),Mt=Ni(o,xt),P=yt(),b=Mt(),$=~a.indexOf("touch")&&!~a.indexOf("pointer")&&On[0]==="pointerdown",te=Qs(o),J=o.ownerDocument||Fi,oe=[0,0,0],be=[0,0,0],q=0,me=function(){return q=Js()},ue=function(Z,ge){return(Y.event=Z)&&p&&~p.indexOf(Z.target)||ge&&$&&Z.pointerType!=="touch"||G&&G(Z,ge)},de=function(){Y._vx.reset(),Y._vy.reset(),Fe.pause(),f&&f(Y)},D=function(){var Z=Y.deltaX=nd(oe),ge=Y.deltaY=nd(be),xe=Math.abs(Z)>=i,De=Math.abs(ge)>=i;R&&(xe||De)&&R(Y,Z,ge,oe,be),xe&&(y&&Y.deltaX>0&&y(Y),S&&Y.deltaX<0&&S(Y),w&&w(Y),H&&Y.deltaX<0!=Je<0&&H(Y),Je=Y.deltaX,oe[0]=oe[1]=oe[2]=0),De&&(v&&Y.deltaY>0&&v(Y),C&&Y.deltaY<0&&C(Y),L&&L(Y),K&&Y.deltaY<0!=Ae<0&&K(Y),Ae=Y.deltaY,be[0]=be[1]=be[2]=0),(ve||pe)&&(F&&F(Y),pe&&(M(Y),pe=!1),ve=!1),tt&&!(tt=!1)&&Le&&Le(Y),je&&(Q(Y),je=!1),ae=0},se=function(Z,ge,xe){oe[xe]+=Z,be[xe]+=ge,Y._vx.update(Z),Y._vy.update(ge),c?ae||(ae=requestAnimationFrame(D)):D()},re=function(Z,ge){Ce&&!$e&&(Y.axis=$e=Math.abs(Z)>Math.abs(ge)?"x":"y",tt=!0),$e!=="y"&&(oe[2]+=Z,Y._vx.update(Z,!0)),$e!=="x"&&(be[2]+=ge,Y._vy.update(ge,!0)),c?ae||(ae=requestAnimationFrame(D)):D()},le=function(Z){if(!ue(Z,1)){Z=eo(Z,u);var ge=Z.clientX,xe=Z.clientY,De=ge-Y.x,ct=xe-Y.y,Ie=Y.isDragging;Y.x=ge,Y.y=xe,(Ie||Math.abs(Y.startX-ge)>=r||Math.abs(Y.startY-xe)>=r)&&(M&&(pe=!0),Ie||(Y.isDragging=!0),re(De,ct),Ie||m&&m(Y))}},fe=Y.onPress=function(Ne){ue(Ne,1)||(Y.axis=$e=null,Fe.pause(),Y.isPressed=!0,Ne=eo(Ne),Je=Ae=0,Y.startX=Y.x=Ne.clientX,Y.startY=Y.y=Ne.clientY,Y._vx.reset(),Y._vy.reset(),en(B?o:J,On[1],le,u,!0),Y.deltaX=Y.deltaY=0,E&&E(Y))},Se=function(Z){if(!ue(Z,1)){Ht(B?o:J,On[1],le,!0);var ge=Y.isDragging&&(Math.abs(Y.x-Y.startX)>3||Math.abs(Y.y-Y.startY)>3),xe=eo(Z);ge||(Y._vx.reset(),Y._vy.reset(),u&&He&&zt.delayedCall(.08,function(){if(Js()-q>300&&!Z.defaultPrevented){if(Z.target.click)Z.target.click();else if(J.createEvent){var De=J.createEvent("MouseEvents");De.initMouseEvent("click",!0,!0,un,1,xe.screenX,xe.screenY,xe.clientX,xe.clientY,!1,!1,!1,!1,0,null),Z.target.dispatchEvent(De)}}})),Y.isDragging=Y.isGesturing=Y.isPressed=!1,f&&!B&&Fe.restart(!0),_&&ge&&_(Y),x&&x(Y,ge)}},ne=function(Z){return Z.touches&&Z.touches.length>1&&(Y.isGesturing=!0)&&N(Z,Y.isDragging)},Te=function(){return(Y.isGesturing=!1)||A(Y)},ze=function(Z){if(!ue(Z)){var ge=yt(),xe=Mt();se((ge-P)*he,(xe-b)*he,1),P=ge,b=xe,f&&Fe.restart(!0)}},Ue=function(Z){if(!ue(Z)){Z=eo(Z,u),Q&&(je=!0);var ge=(Z.deltaMode===1?l:Z.deltaMode===2?un.innerHeight:1)*g;se(Z.deltaX*ge,Z.deltaY*ge,0),f&&!B&&Fe.restart(!0)}},st=function(Z){if(!ue(Z)){var ge=Z.clientX,xe=Z.clientY,De=ge-Y.x,ct=xe-Y.y;Y.x=ge,Y.y=xe,ve=!0,(De||ct)&&re(De,ct)}},ht=function(Z){Y.event=Z,I(Y)},di=function(Z){Y.event=Z,k(Y)},Gi=function(Z){return ue(Z)||eo(Z,u)&&ie(Y)};Fe=Y._dc=zt.delayedCall(h||.25,de).pause(),Y.deltaX=Y.deltaY=0,Y._vx=pc(0,50,!0),Y._vy=pc(0,50,!0),Y.scrollX=yt,Y.scrollY=Mt,Y.isDragging=Y.isGesturing=Y.isPressed=!1,Y.enable=function(Ne){return Y.isEnabled||(en(te?J:o,"scroll",dc),a.indexOf("scroll")>=0&&en(te?J:o,"scroll",ze,u,V),a.indexOf("wheel")>=0&&en(o,"wheel",Ue,u,V),(a.indexOf("touch")>=0&&Jh||a.indexOf("pointer")>=0)&&(en(o,On[0],fe,u,V),en(J,On[2],Se),en(J,On[3],Se),He&&en(o,"click",me,!1,!0),ie&&en(o,"click",Gi),N&&en(J,"gesturestart",ne),A&&en(J,"gestureend",Te),I&&en(o,hr+"enter",ht),k&&en(o,hr+"leave",di),F&&en(o,hr+"move",st)),Y.isEnabled=!0,Ne&&Ne.type&&fe(Ne),X&&X(Y)),Y},Y.disable=function(){Y.isEnabled&&(us.filter(function(Ne){return Ne!==Y&&Qs(Ne.target)}).length||Ht(te?J:o,"scroll",dc),Y.isPressed&&(Y._vx.reset(),Y._vy.reset(),Ht(B?o:J,On[1],le,!0)),Ht(te?J:o,"scroll",ze,V),Ht(o,"wheel",Ue,V),Ht(o,On[0],fe,V),Ht(J,On[2],Se),Ht(J,On[3],Se),Ht(o,"click",me,!0),Ht(o,"click",Gi),Ht(J,"gesturestart",ne),Ht(J,"gestureend",Te),Ht(o,hr+"enter",ht),Ht(o,hr+"leave",di),Ht(o,hr+"move",st),Y.isEnabled=Y.isPressed=Y.isDragging=!1,ee&&ee(Y))},Y.kill=function(){Y.disable();var Ne=us.indexOf(Y);Ne>=0&&us.splice(Ne,1),fi===Y&&(fi=0)},us.push(Y),B&&Qs(o)&&(fi=Y),Y.enable(d)},Dy(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();gt.version="3.11.3";gt.create=function(s){return new gt(s)};gt.register=rd;gt.getAll=function(){return us.slice()};gt.getById=function(s){return us.filter(function(e){return e.vars.id===s})[0]};ed()&&zt.registerPlugin(gt);/*!
 * ScrollTrigger 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,fs,qe,rt,jn,lt,sd,oa,aa,hs,la,ca,Nt,ua,mc,Xt,od,ad,ds,ld,gc,cd,fn,ud,fd,hd,ki,_c,vc,xc,fa=1,qt=Date.now,yc=qt(),wn=0,ha=0,dd=function(){return ua=1},pd=function(){return ua=0},$n=function(e){return e},to=function(e){return Math.round(e*1e5)/1e5||0},md=function(){return typeof window!="undefined"},gd=function(){return Ee||md()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},dr=function(e){return!!~sd.indexOf(e)},_d=function(e){return zi(e,"getBoundingClientRect")||(dr(e)?function(){return Ta.width=qe.innerWidth,Ta.height=qe.innerHeight,Ta}:function(){return hi(e)})},Ry=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=zi(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?qe["inner"+r]:e["client"+r])||0}},Iy=function(e,t){return!t||~Yn.indexOf(e)?_d(e):function(){return Ta}},Ui=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return(n="scroll"+i)&&(a=zi(e,n))?a()-_d(e)()[r]:dr(e)?(jn[n]||lt[n])-(qe["inner"+i]||jn["client"+i]||lt["client"+i]):e[n]-e["offset"+i]},da=function(e,t){for(var n=0;n<ds.length;n+=3)(!t||~t.indexOf(ds[n+1]))&&e(ds[n],ds[n+1],ds[n+2])},zn=function(e){return typeof e=="string"},Yt=function(e){return typeof e=="function"},no=function(e){return typeof e=="number"},pa=function(e){return typeof e=="object"},io=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Mc=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ps=Math.abs,vd="left",xd="top",bc="right",Sc="bottom",pr="width",mr="height",ro="Right",so="Left",oo="Top",ao="Bottom",ft="padding",Tn="margin",ms="Width",wc="Height",Pt="px",Zn=function(e){return qe.getComputedStyle(e)},Fy=function(e){var t=Zn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},yd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},hi=function(e,t){var n=t&&Zn(e)[mc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Tc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Md=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Oy=function(e){return function(t){return Ee.utils.snap(Md(e),t)}},Ec=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var o;if(!r)return t(i);if(r>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var o=t(i);return!r||Math.abs(o-i)<a||o-i<0==r<0?o:t(r<0?i-e:i+e)}},zy=function(e){return function(t,n){return Ec(Md(e))(t,n.direction)}},ma=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Dt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Et=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ga=function(e,t,n){return n&&n.wheelHandler&&e(t,"wheel",n)},bd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_a={toggleActions:"play",anticipatePin:0},va={top:0,left:0,center:.5,bottom:1,right:1},xa=function(e,t){if(zn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in va?va[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ya=function(e,t,n,i,r,a,o,l){var c=r.startColor,u=r.endColor,f=r.fontSize,h=r.indent,p=r.fontWeight,g=rt.createElement("div"),d=dr(n)||zi(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=d?lt:n,M=e.indexOf("start")!==-1,E=M?c:u,x="border-color:"+E+";font-size:"+f+";color:"+E+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&d?"fixed;":"absolute;"),(m||l||!d)&&(x+=(i===xt?bc:Sc)+":"+(a+parseFloat(h))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],Ma(g,0,i,M),g},Ma=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+ms]=1,r["border"+o+ms]=0,r[n.p]=t+"px",Ee.set(e,r)},ke=[],Cc={},lo,Sd=function(){return qt()-wn>34&&(lo||(lo=requestAnimationFrame(Mr)))},gs=function(){(!fn||!fn.isPressed||fn.startX>lt.clientWidth)&&(Xe.cache++,fn?lo||(lo=requestAnimationFrame(Mr)):Mr(),wn||_r("scrollStart"),wn=qt())},Ac=function(){hd=qe.innerWidth,fd=qe.innerHeight},co=function(){Xe.cache++,!Nt&&!cd&&!rt.fullscreenElement&&!rt.webkitFullscreenElement&&(!ud||hd!==qe.innerWidth||Math.abs(qe.innerHeight-fd)>qe.innerHeight*.25)&&oa.restart(!0)},gr={},Ny=[],wd=function s(){return Et(Ye,"scrollEnd",s)||xr(!0)},_r=function(e){return gr[e]&&gr[e].map(function(t){return t()})||Ny},hn=[],Td=function(e){for(var t=0;t<hn.length;t+=5)(!e||hn[t+4]&&hn[t+4].query===e)&&(hn[t].style.cssText=hn[t+1],hn[t].getBBox&&hn[t].setAttribute("transform",hn[t+2]||""),hn[t+3].uncache=1)},Pc=function(e,t){var n;for(Xt=0;Xt<ke.length;Xt++)n=ke[Xt],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&Td(t),t||_r("revert")},Ed=function(e,t){Xe.cache++,(t||!Nn)&&Xe.forEach(function(n){return Yt(n)&&n.cacheID++&&(n.rec=0)}),zn(e)&&(qe.history.scrollRestoration=vc=e)},Nn,vr=0,Cd,ky=function(){if(Cd!==vr){var e=Cd=vr;requestAnimationFrame(function(){return e===vr&&xr(!0)})}},xr=function(e,t){if(wn&&!e){Dt(Ye,"scrollEnd",wd);return}Nn=Ye.isRefreshing=!0,Xe.forEach(function(i){return Yt(i)&&i.cacheID++&&(i.rec=i())});var n=_r("refreshInit");ld&&Ye.sort(),t||Pc(),Xe.forEach(function(i){Yt(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ke.slice(0).forEach(function(i){return i.refresh()}),ke.forEach(function(i,r){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-o),i.revert(!1,1)}}),ke.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,Ui(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Xe.forEach(function(i){Yt(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Ed(vc,1),oa.pause(),vr++,Mr(2),ke.forEach(function(i){return Yt(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Nn=Ye.isRefreshing=!1,_r("refresh")},Ad=0,ba=1,yr,Mr=function(e){if(!Nn||e===2){Ye.isUpdating=!0,yr&&yr.update(0);var t=ke.length,n=qt(),i=n-yc>=50,r=t&&ke[0].scroll();if(ba=Ad>r?-1:1,Ad=r,i&&(wn&&!ua&&n-wn>200&&(wn=0,_r("scrollEnd")),la=yc,yc=n),ba<0){for(Xt=t;Xt-- >0;)ke[Xt]&&ke[Xt].update(0,i);ba=1}else for(Xt=0;Xt<t;Xt++)ke[Xt]&&ke[Xt].update(0,i);Ye.isUpdating=!1}lo=0},Dc=[vd,xd,Sc,bc,Tn+ao,Tn+ro,Tn+oo,Tn+so,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Sa=Dc.concat([pr,mr,"boxSizing","max"+ms,"max"+wc,"position",Tn,ft,ft+oo,ft+ro,ft+ao,ft+so]),Uy=function(e,t,n){_s(n);var i=e._gsap;if(i.spacerIsNative)_s(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Lc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Dc.length,a=t.style,o=e.style,l;r--;)l=Dc[r],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Sc]=o[bc]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[pr]=Tc(e,Wt)+Pt,a[mr]=Tc(e,xt)+Pt,a[ft]=o[Tn]=o[xd]=o[vd]="0",_s(i),o[pr]=o["max"+ms]=n[pr],o[mr]=o["max"+wc]=n[mr],o[ft]=n[ft],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},By=/([A-Z])/g,_s=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(By,"-$1").toLowerCase())}},wa=function(e){for(var t=Sa.length,n=e.style,i=[],r=0;r<t;r++)i.push(Sa[r],n[Sa[r]]);return i.t=e,i},Gy=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,o;a<r;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Ta={left:0,top:0},Pd=function(e,t,n,i,r,a,o,l,c,u,f,h,p){Yt(e)&&(e=e(l)),zn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?xa("0"+e.substr(3),n):0));var g=p?p.time():0,d,m,_;if(p&&p.seek(0),no(e))o&&Ma(o,n,i,!0);else{Yt(t)&&(t=t(l));var M=(e||"0").split(" "),E,x,y,S;_=tn(t)||lt,E=hi(_)||{},(!E||!E.left&&!E.top)&&Zn(_).display==="none"&&(S=_.style.display,_.style.display="block",E=hi(_),S?_.style.display=S:_.style.removeProperty("display")),x=xa(M[0],E[i.d]),y=xa(M[1]||"0",n),e=E[i.p]-c[i.p]-u+x+r-y,o&&Ma(o,y,i,n-y<20||o._isStart&&y>20),n-=n-y}if(a){var C=e+n,v=a._isStart;d="scroll"+i.d2,Ma(a,C,i,v&&C>20||!v&&(f?Math.max(lt[d],jn[d]):a.parentNode[d])<=C+1),f&&(c=hi(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Pt))}return p&&_&&(d=hi(_),p.seek(h),m=hi(_),p._caScrollDist=d[i.p]-m[i.p],e=e/p._caScrollDist*h),p&&p.seek(g),p?e:Math.round(e)},Vy=/(webkit|moz|length|cssText|inset)/i,Dd=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,o;if(t===lt){e._stOrig=r.cssText,o=Zn(e);for(a in o)!+a&&!Vy.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},Ld=function(e,t){var n=Ni(e,t),i="_scroll"+t.p2,r,a,o=function l(c,u,f,h,p){var g=l.tween,d=u.onComplete,m={};return f=f||n(),p=h&&p||0,h=h||c-f,g&&g.kill(),r=Math.round(f),u[i]=c,u.modifiers=m,m[i]=function(_){return _=Math.round(n()),_!==r&&_!==a&&Math.abs(_-r)>3&&Math.abs(_-a)>3?(g.kill(),l.tween=0):_=f+h*g.ratio+p*g.ratio*g.ratio,a=r,r=Math.round(_)},u.onComplete=function(){l.tween=0,d&&d.call(g)},g=l.tween=Ee.to(e,u),g};return e[i]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},Dt(e,"wheel",n.wheelHandler),o},Ye=function(){function s(t,n){fs||s.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ha){this.update=this.refresh=this.kill=$n;return}n=yd(zn(n)||no(n)||n.nodeType?{trigger:n}:n,_a);var r=n,a=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,f=r.scrub,h=r.trigger,p=r.pin,g=r.pinSpacing,d=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,M=r.onSnapComplete,E=r.once,x=r.snap,y=r.pinReparent,S=r.pinSpacer,C=r.containerAnimation,v=r.fastScrollEnd,w=r.preventOverlaps,L=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Wt:xt,R=!f&&f!==0,H=tn(n.scroller||qe),K=Ee.core.getCache(H),I=dr(H),k=("pinType"in n?n.pinType:zi(H,"pinType")||I&&"fixed")==="fixed",F=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=R&&n.toggleActions.split(" "),B="markers"in n?n.markers:_a.markers,N=I?0:parseFloat(Zn(H)["border"+L.p2+ms])||0,A=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(A)},X=Ry(H,I,L),ee=Iy(H,I),ie=0,he=0,V=Ni(H,L),He,Ce,Le,ae,Fe,pe,ve,je,tt,$e,Y,Je,Ae,yt,Mt,P,b,$,te,J,oe,be,q,me,ue,de,D,se,re,le,fe,Se,ne,Te,ze,Ue,st,ht;if(_c(A),A._dir=L,m*=45,A.scroller=H,A.scroll=C?C.time.bind(C):V,ae=V(),A.vars=n,i=i||n.animation,"refreshPriority"in n&&(ld=1,n.refreshPriority===-9999&&(yr=A)),K.tweenScroll=K.tweenScroll||{top:Ld(H,xt),left:Ld(H,Wt)},A.tweenTo=He=K.tweenScroll[L.p],A.scrubDuration=function(Z){fe=no(Z)&&Z,fe?le?le.duration(Z):le=Ee.to(i,{ease:"expo",totalProgress:"+=0.001",duration:fe,paused:!0,onComplete:function(){return _&&_(A)}}):(le&&le.progress(1).kill(),le=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),A.animation=i.pause(),i.scrollTrigger=A,A.scrubDuration(f),se=0,l||(l=i.vars.id)),ke.push(A),x&&((!pa(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in lt.style&&Ee.set(I?[lt,jn]:H,{scrollBehavior:"auto"}),Xe.forEach(function(Z){return Yt(Z)&&Z.target===(I?rt.scrollingElement||jn:H)&&(Z.smooth=!1)}),Le=Yt(x.snapTo)?x.snapTo:x.snapTo==="labels"?Oy(i):x.snapTo==="labelsDirectional"?zy(i):x.directional!==!1?function(Z,ge){return Ec(x.snapTo)(Z,qt()-he<500?0:ge.direction)}:Ee.utils.snap(x.snapTo),Se=x.duration||{min:.1,max:2},Se=pa(Se)?hs(Se.min,Se.max):hs(Se,Se),ne=Ee.delayedCall(x.delay||fe/2||.1,function(){var Z=V(),ge=qt()-he<500,xe=He.tween;if((ge||Math.abs(A.getVelocity())<10)&&!xe&&!ua&&ie!==Z){var De=(Z-pe)/Ae,ct=i&&!R?i.totalProgress():De,Ie=ge?0:(ct-re)/(qt()-la)*1e3||0,T=Ee.utils.clamp(-De,1-De,ps(Ie/2)*Ie/.185),O=De+(x.inertia===!1?0:T),W=hs(0,1,Le(O,A)),z=Math.round(pe+W*Ae),j=x,we=j.onStart,_e=j.onInterrupt,ye=j.onComplete;if(Z<=ve&&Z>=pe&&z!==Z){if(xe&&!xe._initted&&xe.data<=ps(z-Z))return;x.inertia===!1&&(T=W-De),He(z,{duration:Se(ps(Math.max(ps(O-ct),ps(W-ct))*.185/Ie/.05||0)),ease:x.ease||"power3",data:ps(z-Z),onInterrupt:function(){return ne.restart(!0)&&_e&&_e(A)},onComplete:function(){A.update(),ie=V(),se=re=i&&!R?i.totalProgress():A.progress,M&&M(A),ye&&ye(A)}},Z,T*Ae,z-Z-T*Ae),we&&we(A,He.tween)}}else A.isActive&&ie!==Z&&ne.restart(!0)}).pause()),l&&(Cc[l]=A),h=A.trigger=tn(h||p),ht=h&&h._gsap&&h._gsap.stRevert,ht&&(ht=ht(A)),p=p===!0?h:tn(p),zn(o)&&(o={targets:h,className:o}),p&&(g===!1||g===Tn||(g=!g&&p.parentNode&&p.parentNode.style&&Zn(p.parentNode).display==="flex"?!1:ft),A.pin=p,Ce=Ee.core.getCache(p),Ce.spacer?yt=Ce.pinState:(S&&(S=tn(S),S&&!S.nodeType&&(S=S.current||S.nativeElement),Ce.spacerIsNative=!!S,S&&(Ce.spacerState=wa(S))),Ce.spacer=b=S||rt.createElement("div"),b.classList.add("pin-spacer"),l&&b.classList.add("pin-spacer-"+l),Ce.pinState=yt=wa(p)),n.force3D!==!1&&Ee.set(p,{force3D:!0}),A.spacer=b=Ce.spacer,D=Zn(p),q=D[g+L.os2],te=Ee.getProperty(p),J=Ee.quickSetter(p,L.a,Pt),Lc(p,b,D),P=wa(p)),B){Je=pa(B)?yd(B,bd):bd,$e=ya("scroller-start",l,H,L,Je,0),Y=ya("scroller-end",l,H,L,Je,0,$e),$=$e["offset"+L.op.d2];var di=tn(zi(H,"content")||H);je=this.markerStart=ya("start",l,di,L,Je,$,0,C),tt=this.markerEnd=ya("end",l,di,L,Je,$,0,C),C&&(st=Ee.quickSetter([je,tt],L.a,Pt)),!k&&!(Yn.length&&zi(H,"fixedMarkers")===!0)&&(Fy(I?lt:H),Ee.set([$e,Y],{force3D:!0}),ue=Ee.quickSetter($e,L.a,Pt),de=Ee.quickSetter(Y,L.a,Pt))}if(C){var Gi=C.vars.onUpdate,Ne=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){A.update(0,0,1),Gi&&Gi.apply(Ne||[])})}A.previous=function(){return ke[ke.indexOf(A)-1]},A.next=function(){return ke[ke.indexOf(A)+1]},A.revert=function(Z,ge){if(!ge)return A.kill(!0);var xe=Z!==!1||!A.enabled,De=Nt;xe!==A.isReverted&&(xe&&(ze=Math.max(V(),A.scroll.rec||0),Te=A.progress,Ue=i&&i.progress()),je&&[je,tt,$e,Y].forEach(function(ct){return ct.style.display=xe?"none":"block"}),xe&&(Nt=1,A.update(xe)),p&&(xe?Uy(p,b,yt):(!y||!A.isActive)&&Lc(p,b,Zn(p),me)),xe||A.update(xe),Nt=De,A.isReverted=xe)},A.refresh=function(Z,ge){if(!((Nt||!A.enabled)&&!ge)){if(p&&Z&&wn){Dt(s,"scrollEnd",wd);return}!Nn&&Q&&Q(A),Nt=1,he=qt(),He.tween&&(He.tween.kill(),He.tween=0),le&&le.pause(),d&&i&&i.revert({kill:!1}).invalidate(),A.isReverted||A.revert(!0,!0),A._subPinOffset=!1;for(var xe=X(),De=ee(),ct=C?C.duration():Ui(H,L),Ie=0,T=0,O=n.end,W=n.endTrigger||h,z=n.start||(n.start===0||!h?0:p?"0 0":"0 100%"),j=A.pinnedContainer=n.pinnedContainer&&tn(n.pinnedContainer),we=h&&Math.max(0,ke.indexOf(A))||0,_e=we,ye,Me,Ge,Oe,Pe,Re,Ct,kn,Kn,Lt;_e--;)Re=ke[_e],Re.end||Re.refresh(0,1)||(Nt=1),Ct=Re.pin,Ct&&(Ct===h||Ct===p)&&!Re.isReverted&&(Lt||(Lt=[]),Lt.unshift(Re),Re.revert(!0,!0)),Re!==ke[_e]&&(we--,_e--);for(Yt(z)&&(z=z(A)),pe=Pd(z,h,xe,L,V(),je,$e,A,De,N,k,ct,C)||(p?-.001:0),Yt(O)&&(O=O(A)),zn(O)&&!O.indexOf("+=")&&(~O.indexOf(" ")?O=(zn(z)?z.split(" ")[0]:"")+O:(Ie=xa(O.substr(2),xe),O=zn(z)?z:pe+Ie,W=h)),ve=Math.max(pe,Pd(O||(W?"100% 0":ct),W,xe,L,V()+Ie,tt,Y,A,De,N,k,ct,C))||-.001,Ae=ve-pe||(pe-=.01)&&.001,Ie=0,_e=we;_e--;)Re=ke[_e],Ct=Re.pin,Ct&&Re.start-Re._pinPush<=pe&&!C&&Re.end>0&&(ye=Re.end-Re.start,(Ct===h&&Re.start-Re._pinPush<pe||Ct===j)&&!no(z)&&(Ie+=ye*(1-Re.progress)),Ct===p&&(T+=ye));if(pe+=Ie,ve+=Ie,A._pinPush=T,je&&Ie&&(ye={},ye[L.a]="+="+Ie,j&&(ye[L.p]="-="+V()),Ee.set([je,tt],ye)),p)ye=Zn(p),Oe=L===xt,Ge=V(),oe=parseFloat(te(L.a))+T,!ct&&ve>1&&((I?lt:H).style["overflow-"+L.a]="scroll"),Lc(p,b,ye),P=wa(p),Me=hi(p,!0),kn=k&&Ni(H,Oe?Wt:xt)(),g&&(me=[g+L.os2,Ae+T+Pt],me.t=b,_e=g===ft?Tc(p,L)+Ae+T:0,_e&&me.push(L.d,_e+Pt),_s(me),j&&ke.forEach(function(Ve){Ve.pin===j&&Ve.vars.pinSpacing!==!1&&(Ve._subPinOffset=!0)}),k&&V(ze)),k&&(Pe={top:Me.top+(Oe?Ge-pe:kn)+Pt,left:Me.left+(Oe?kn:Ge-pe)+Pt,boxSizing:"border-box",position:"fixed"},Pe[pr]=Pe["max"+ms]=Math.ceil(Me.width)+Pt,Pe[mr]=Pe["max"+wc]=Math.ceil(Me.height)+Pt,Pe[Tn]=Pe[Tn+oo]=Pe[Tn+ro]=Pe[Tn+ao]=Pe[Tn+so]="0",Pe[ft]=ye[ft],Pe[ft+oo]=ye[ft+oo],Pe[ft+ro]=ye[ft+ro],Pe[ft+ao]=ye[ft+ao],Pe[ft+so]=ye[ft+so],Mt=Gy(yt,Pe,y),Nn&&V(0)),i?(Kn=i._initted,gc(1),i.render(i.duration(),!0,!0),be=te(L.a)-oe+Ae+T,Ae!==be&&k&&Mt.splice(Mt.length-2,2),i.render(0,!0,!0),Kn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),gc(0)):be=Ae;else if(h&&V()&&!C)for(Me=h.parentNode;Me&&Me!==lt;)Me._pinOffset&&(pe-=Me._pinOffset,ve-=Me._pinOffset),Me=Me.parentNode;Lt&&Lt.forEach(function(Ve){return Ve.revert(!1,!0)}),A.start=pe,A.end=ve,ae=Fe=Nn?ze:V(),!C&&!Nn&&(ae<ze&&V(ze),A.scroll.rec=0),A.revert(!1,!0),ne&&(ie=-1,A.isActive&&V(pe+Ae*Te),ne.restart(!0)),Nt=0,i&&R&&(i._initted||Ue)&&i.progress()!==Ue&&i.progress(Ue,!0).render(i.time(),!0,!0),(Te!==A.progress||C)&&(i&&!R&&i.totalProgress(Te,!0),A.progress=(ae-pe)/Ae===Te?0:Te),p&&g&&(b._pinOffset=Math.round(A.progress*be)),u&&!Nn&&u(A)}},A.getVelocity=function(){return(V()-Fe)/(qt()-la)*1e3||0},A.endAnimation=function(){io(A.callbackAnimation),i&&(le?le.progress(1):i.paused()?R||io(i,A.direction<0,1):io(i,i.reversed()))},A.labelToScroll=function(Z){return i&&i.labels&&(pe||A.refresh()||pe)+i.labels[Z]/i.duration()*Ae||0},A.getTrailing=function(Z){var ge=ke.indexOf(A),xe=A.direction>0?ke.slice(0,ge).reverse():ke.slice(ge+1);return(zn(Z)?xe.filter(function(De){return De.vars.preventOverlaps===Z}):xe).filter(function(De){return A.direction>0?De.end<=pe:De.start>=ve})},A.update=function(Z,ge,xe){if(!(C&&!xe&&!Z)){var De=Nn?ze:A.scroll(),ct=Z?0:(De-pe)/Ae,Ie=ct<0?0:ct>1?1:ct||0,T=A.progress,O,W,z,j,we,_e,ye,Me;if(ge&&(Fe=ae,ae=C?V():De,x&&(re=se,se=i&&!R?i.totalProgress():Ie)),m&&!Ie&&p&&!Nt&&!fa&&wn&&pe<De+(De-Fe)/(qt()-la)*m&&(Ie=1e-4),Ie!==T&&A.enabled){if(O=A.isActive=!!Ie&&Ie<1,W=!!T&&T<1,_e=O!==W,we=_e||!!Ie!=!!T,A.direction=Ie>T?1:-1,A.progress=Ie,we&&!Nt&&(z=Ie&&!T?0:Ie===1?1:T===1?2:3,R&&(j=!_e&&G[z+1]!=="none"&&G[z+1]||G[z],Me=i&&(j==="complete"||j==="reset"||j in i))),w&&(_e||Me)&&(Me||f||!i)&&(Yt(w)?w(A):A.getTrailing(w).forEach(function(Re){return Re.endAnimation()})),R||(le&&!Nt&&!fa?((C||yr&&yr!==A)&&le.render(le._dp._time-le._start),le.resetTo?le.resetTo("totalProgress",Ie,i._tTime/i._tDur):(le.vars.totalProgress=Ie,le.invalidate().restart())):i&&i.totalProgress(Ie,!!Nt)),p){if(Z&&g&&(b.style[g+L.os2]=q),!k)J(to(oe+be*Ie));else if(we){if(ye=!Z&&Ie>T&&ve+1>De&&De+1>=Ui(H,L),y)if(!Z&&(O||ye)){var Ge=hi(p,!0),Oe=De-pe;Dd(p,lt,Ge.top+(L===xt?Oe:0)+Pt,Ge.left+(L===xt?0:Oe)+Pt)}else Dd(p,b);_s(O||ye?Mt:P),be!==Ae&&Ie<1&&O||J(oe+(Ie===1&&!ye?be:0))}}x&&!He.tween&&!Nt&&!fa&&ne.restart(!0),o&&(_e||E&&Ie&&(Ie<1||!xc))&&aa(o.targets).forEach(function(Re){return Re.classList[O||E?"add":"remove"](o.className)}),a&&!R&&!Z&&a(A),we&&!Nt?(R&&(Me&&(j==="complete"?i.pause().totalProgress(1):j==="reset"?i.restart(!0).pause():j==="restart"?i.restart(!0):i[j]()),a&&a(A)),(_e||!xc)&&(c&&_e&&Mc(A,c),F[z]&&Mc(A,F[z]),E&&(Ie===1?A.kill(!1,1):F[z]=0),_e||(z=Ie===1?1:3,F[z]&&Mc(A,F[z]))),v&&!O&&Math.abs(A.getVelocity())>(no(v)?v:2500)&&(io(A.callbackAnimation),le?le.progress(1):io(i,j==="reverse"?1:!Ie,1))):R&&a&&!Nt&&a(A)}if(de){var Pe=C?De/C.duration()*(C._caScrollDist||0):De;ue(Pe+($e._isFlipped?1:0)),de(Pe)}st&&st(-De/C.duration()*(C._caScrollDist||0))}},A.enable=function(Z,ge){A.enabled||(A.enabled=!0,Dt(H,"resize",co),Dt(I?rt:H,"scroll",gs),Q&&Dt(s,"refreshInit",Q),Z!==!1&&(A.progress=Te=0,ae=Fe=ie=V()),ge!==!1&&A.refresh())},A.getTween=function(Z){return Z&&He?He.tween:le},A.setPositions=function(Z,ge){p&&(oe+=Z-pe,be+=ge-Z-Ae,g===ft&&A.adjustPinSpacing(ge-Z-Ae)),A.start=pe=Z,A.end=ve=ge,Ae=ge-Z,A.update()},A.adjustPinSpacing=function(Z){if(me){var ge=me.indexOf(L.d)+1;me[ge]=parseFloat(me[ge])+Z+Pt,me[1]=parseFloat(me[1])+Z+Pt,_s(me)}},A.disable=function(Z,ge){if(A.enabled&&(Z!==!1&&A.revert(!0,!0),A.enabled=A.isActive=!1,ge||le&&le.pause(),ze=0,Ce&&(Ce.uncache=1),Q&&Et(s,"refreshInit",Q),ne&&(ne.pause(),He.tween&&He.tween.kill()&&(He.tween=0)),!I)){for(var xe=ke.length;xe--;)if(ke[xe].scroller===H&&ke[xe]!==A)return;Et(H,"resize",co),Et(H,"scroll",gs)}},A.kill=function(Z,ge){A.disable(Z,ge),le&&!ge&&le.kill(),l&&delete Cc[l];var xe=ke.indexOf(A);xe>=0&&ke.splice(xe,1),xe===Xt&&ba>0&&Xt--,xe=0,ke.forEach(function(De){return De.scroller===A.scroller&&(xe=1)}),xe||Nn||(A.scroll.rec=0),i&&(i.scrollTrigger=null,Z&&i.revert({kill:!1}),ge||i.kill()),je&&[je,tt,$e,Y].forEach(function(De){return De.parentNode&&De.parentNode.removeChild(De)}),yr===A&&(yr=0),p&&(Ce&&(Ce.uncache=1),xe=0,ke.forEach(function(De){return De.pin===p&&xe++}),xe||(Ce.spacer=0)),n.onKill&&n.onKill(A)},A.enable(!1,!1),ht&&ht(A),!i||!i.add||Ae?A.refresh():Ee.delayedCall(.01,function(){return pe||ve||A.refresh()})&&(Ae=.01)&&(pe=ve=0),p&&ky()},s.register=function(n){return fs||(Ee=n||gd(),md()&&window.document&&s.enable(),fs=ha),fs},s.defaults=function(n){if(n)for(var i in n)_a[i]=n[i];return _a},s.disable=function(n,i){ha=0,ke.forEach(function(a){return a[i?"kill":"disable"](n)}),Et(qe,"wheel",gs),Et(rt,"scroll",gs),clearInterval(ca),Et(rt,"touchcancel",$n),Et(lt,"touchstart",$n),ma(Et,rt,"pointerdown,touchstart,mousedown",dd),ma(Et,rt,"pointerup,touchend,mouseup",pd),oa.kill(),da(Et);for(var r=0;r<Xe.length;r+=3)ga(Et,Xe[r],Xe[r+1]),ga(Et,Xe[r],Xe[r+2])},s.enable=function(){if(qe=window,rt=document,jn=rt.documentElement,lt=rt.body,Ee&&(aa=Ee.utils.toArray,hs=Ee.utils.clamp,_c=Ee.core.context||$n,gc=Ee.core.suppressOverwrites||$n,vc=qe.history.scrollRestoration||"auto",Ee.core.globals("ScrollTrigger",s),lt)){ha=1,gt.register(Ee),s.isTouch=gt.isTouch,ki=gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Dt(qe,"wheel",gs),sd=[qe,rt,jn,lt],Ee.matchMedia?(s.matchMedia=function(l){var c=Ee.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Ee.addEventListener("matchMediaInit",function(){return Pc()}),Ee.addEventListener("matchMediaRevert",function(){return Td()}),Ee.addEventListener("matchMedia",function(){xr(0,1),_r("matchMedia")}),Ee.matchMedia("(orientation: portrait)",function(){return Ac(),Ac})):console.warn("Requires GSAP 3.11.0 or later"),Ac(),Dt(rt,"scroll",gs);var n=lt.style,i=n.borderTopStyle,r=Ee.core.Animation.prototype,a,o;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=hi(lt),xt.m=Math.round(a.top+xt.sc())||0,Wt.m=Math.round(a.left+Wt.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),ca=setInterval(Sd,250),Ee.delayedCall(.5,function(){return fa=0}),Dt(rt,"touchcancel",$n),Dt(lt,"touchstart",$n),ma(Dt,rt,"pointerdown,touchstart,mousedown",dd),ma(Dt,rt,"pointerup,touchend,mouseup",pd),mc=Ee.utils.checkPrefix("transform"),Sa.push(mc),fs=qt(),oa=Ee.delayedCall(.2,xr).pause(),ds=[rt,"visibilitychange",function(){var l=qe.innerWidth,c=qe.innerHeight;rt.hidden?(od=l,ad=c):(od!==l||ad!==c)&&co()},rt,"DOMContentLoaded",xr,qe,"load",xr,qe,"resize",co],da(Dt),ke.forEach(function(l){return l.enable(0,1)}),o=0;o<Xe.length;o+=3)ga(Et,Xe[o],Xe[o+1]),ga(Et,Xe[o],Xe[o+2])}},s.config=function(n){"limitCallbacks"in n&&(xc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ca)||(ca=i)&&setInterval(Sd,i),"ignoreMobileResize"in n&&(ud=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(da(Et)||da(Dt,n.autoRefreshEvents||"none"),cd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=tn(n),a=Xe.indexOf(r),o=dr(r);~a&&Xe.splice(a,o?6:2),i&&(o?Yn.unshift(qe,i,lt,i,jn,i):Yn.unshift(r,i))},s.clearMatchMedia=function(n){ke.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var a=(zn(n)?tn(n):n).getBoundingClientRect(),o=a[r?pr:mr]*i||0;return r?a.right-o>0&&a.left+o<qe.innerWidth:a.bottom-o>0&&a.top+o<qe.innerHeight},s.positionInViewport=function(n,i,r){zn(n)&&(n=tn(n));var a=n.getBoundingClientRect(),o=a[r?pr:mr],l=i==null?o/2:i in va?va[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(a.left+l)/qe.innerWidth:(a.top+l)/qe.innerHeight},s.killAll=function(n){if(ke.forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=gr.killAll||[];gr={},i.forEach(function(r){return r()})}},s}();Ye.version="3.11.3";Ye.saveStyles=function(s){return s?aa(s).forEach(function(e){if(e&&e.style){var t=hn.indexOf(e);t>=0&&hn.splice(t,5),hn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),_c())}}):hn};Ye.revert=function(s,e){return Pc(!s,e)};Ye.create=function(s,e){return new Ye(s,e)};Ye.refresh=function(s){return s?co():(fs||Ye.register())&&xr(!0)};Ye.update=Mr;Ye.clearScrollMemory=Ed;Ye.maxScroll=function(s,e){return Ui(s,e?Wt:xt)};Ye.getScrollFunc=function(s,e){return Ni(tn(s),e?Wt:xt)};Ye.getById=function(s){return Cc[s]};Ye.getAll=function(){return ke.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Ye.isScrolling=function(){return!!wn};Ye.snapDirectional=Ec;Ye.addEventListener=function(s,e){var t=gr[s]||(gr[s]=[]);~t.indexOf(e)||t.push(e)};Ye.removeEventListener=function(s,e){var t=gr[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ye.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(c,u){var f=[],h=[],p=Ee.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||p.restart(!0),f.push(g.trigger),h.push(g),r<=f.length&&p.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Yt(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Yt(r)&&(r=r(),Dt(Ye,"refresh",function(){return r=e.batchMax()})),aa(s).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ye.create(c))}),t};var Rd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Rc=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(gt.isTouch?" pinch-zoom":""):"none",e===jn&&s(lt,t)},Id={auto:1,scroll:1},Hy=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||Ee.core.getCache(r),o=qt(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r.scrollHeight<=r.clientHeight;)r=r.parentNode;a._isScroll=r&&!dr(r)&&r!==n&&(Id[(l=Zn(r)).overflowY]||Id[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Fd=function(e,t,n,i){return gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Hy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Dt(rt,gt.eventTypes[0],zd,!1,!0)},onDisable:function(){return Et(rt,gt.eventTypes[0],zd,!0)}})},Wy=/(input|label|select|textarea)/i,Od,zd=function(e){var t=Wy.test(e.target.tagName);(t||Od)&&(e._gsapAllow=!0,Od=t)},Xy=function(e){pa(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a,o,l=tn(e.target)||jn,c=Ee.core.globals().ScrollSmoother,u=c&&c.get(),f=ki&&(e.content&&tn(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),h=Ni(l,xt),p=Ni(l,Wt),g=1,d=(gt.isTouch&&qe.visualViewport?qe.visualViewport.scale*qe.visualViewport.width:qe.outerWidth)/qe.innerWidth,m=0,_=Yt(i)?function(){return i(a)}:function(){return i||2.8},M,E,x=Fd(l,e.type,!0,r),y=function(){return E=!1},S=$n,C=$n,v=function(){o=Ui(l,xt),C=hs(ki?1:0,o),n&&(S=hs(0,Ui(l,Wt))),M=vr},w=function(){f._gsap.y=to(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},L=function(){if(E){requestAnimationFrame(y);var G=to(a.deltaY/2),B=C(h.v-G);if(f&&B!==h.v+h.offset){h.offset=B-h.v;var N=to((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",f._gsap.y=N+"px",h.cacheID=Xe.cache,Mr()}return!0}h.offset&&w(),E=!0},R,H,K,I,k=function(){v(),R.isActive()&&R.vars.scrollY>o&&(h()>o?R.progress(1)&&h(o):R.resetTo("scrollY",o))};return f&&Ee.set(f,{y:"+=0"}),e.ignoreCheck=function(F){return ki&&F.type==="touchmove"&&L()||g>1.05&&F.type!=="touchstart"||a.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){var F=g;g=to((qe.visualViewport&&qe.visualViewport.scale||1)/d),R.pause(),F!==g&&Rc(l,g>1.01?!0:n?!1:"x"),H=p(),K=h(),v(),M=vr},e.onRelease=e.onGestureStart=function(F,G){if(h.offset&&w(),!G)I.restart(!0);else{Xe.cache++;var B=_(),N,A;n&&(N=p(),A=N+B*.05*-F.velocityX/.227,B*=Rd(p,N,A,Ui(l,Wt)),R.vars.scrollX=S(A)),N=h(),A=N+B*.05*-F.velocityY/.227,B*=Rd(h,N,A,Ui(l,xt)),R.vars.scrollY=C(A),R.invalidate().duration(B).play(.01),(ki&&R.vars.scrollY>=o||N>=o-1)&&Ee.to({},{onUpdate:k,duration:B})}},e.onWheel=function(){R._ts&&R.pause(),qt()-m>1e3&&(M=0,m=qt())},e.onChange=function(F,G,B,N,A){if(vr!==M&&v(),G&&n&&p(S(N[2]===G?H+(F.startX-F.x):p()+G-N[1])),B){h.offset&&w();var Q=A[2]===B,X=Q?K+F.startY-F.y:h()+B-A[1],ee=C(X);Q&&X!==ee&&(K+=ee-X),h(ee)}(B||G)&&Mr()},e.onEnable=function(){Rc(l,n?!1:"x"),Ye.addEventListener("refresh",k),Dt(qe,"resize",k),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=p.smooth=!1),x.enable()},e.onDisable=function(){Rc(l,!0),Et(qe,"resize",k),Ye.removeEventListener("refresh",k),x.kill()},e.lockAxis=e.lockAxis!==!1,a=new gt(e),a.iOS=ki,ki&&!h()&&h(1),ki&&Ee.ticker.add($n),I=a._dc,R=Ee.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:I.vars.onComplete}),a};Ye.sort=function(s){return ke.sort(s||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Ye.observe=function(s){return new gt(s)};Ye.normalizeScroll=function(s){if(typeof s=="undefined")return fn;if(s===!0&&fn)return fn.enable();if(s===!1)return fn&&fn.kill();var e=s instanceof gt?s:Xy(s);return fn&&fn.target===e.target&&fn.kill(),dr(e.target)&&(fn=e),e};Ye.core={_getVelocityProp:pc,_inputObserver:Fd,_scrollers:Xe,_proxies:Yn,bridge:{ss:function(){wn||_r("scrollStart"),wn=qt()},ref:function(){return Nt}}};gd()&&Ee.registerPlugin(Ye);var qy="Expected a function",Nd=0/0,Yy="[object Symbol]",jy=/^\s+|\s+$/g,$y=/^[-+]0x[0-9a-f]+$/i,Zy=/^0b[01]+$/i,Ky=/^0o[0-7]+$/i,Jy=parseInt,Qy=typeof Fs=="object"&&Fs&&Fs.Object===Object&&Fs,eM=typeof self=="object"&&self&&self.Object===Object&&self,tM=Qy||eM||Function("return this")(),nM=Object.prototype,iM=nM.toString,rM=Math.max,sM=Math.min,Ic=function(){return tM.Date.now()};function oM(s,e,t){var n,i,r,a,o,l,c=0,u=!1,f=!1,h=!0;if(typeof s!="function")throw new TypeError(qy);e=kd(e)||0,Fc(t)&&(u=!!t.leading,f="maxWait"in t,r=f?rM(kd(t.maxWait)||0,e):r,h="trailing"in t?!!t.trailing:h);function p(S){var C=n,v=i;return n=i=void 0,c=S,a=s.apply(v,C),a}function g(S){return c=S,o=setTimeout(_,e),u?p(S):a}function d(S){var C=S-l,v=S-c,w=e-C;return f?sM(w,r-v):w}function m(S){var C=S-l,v=S-c;return l===void 0||C>=e||C<0||f&&v>=r}function _(){var S=Ic();if(m(S))return M(S);o=setTimeout(_,d(S))}function M(S){return o=void 0,h&&n?p(S):(n=i=void 0,a)}function E(){o!==void 0&&clearTimeout(o),c=0,n=l=i=o=void 0}function x(){return o===void 0?a:M(Ic())}function y(){var S=Ic(),C=m(S);if(n=arguments,i=this,l=S,C){if(o===void 0)return g(l);if(f)return o=setTimeout(_,e),p(l)}return o===void 0&&(o=setTimeout(_,e)),a}return y.cancel=E,y.flush=x,y}function Fc(s){var e=typeof s;return!!s&&(e=="object"||e=="function")}function aM(s){return!!s&&typeof s=="object"}function lM(s){return typeof s=="symbol"||aM(s)&&iM.call(s)==Yy}function kd(s){if(typeof s=="number")return s;if(lM(s))return Nd;if(Fc(s)){var e=typeof s.valueOf=="function"?s.valueOf():s;s=Fc(e)?e+"":e}if(typeof s!="string")return s===0?s:+s;s=s.replace(jy,"");var t=Zy.test(s);return t||Ky.test(s)?Jy(s.slice(2),t?2:8):$y.test(s)?Nd:+s}var RM=oM,Oc={exports:{}};function zc(){}zc.prototype={on:function(s,e,t){var n=this.e||(this.e={});return(n[s]||(n[s]=[])).push({fn:e,ctx:t}),this},once:function(s,e,t){var n=this;function i(){n.off(s,i),e.apply(t,arguments)}return i._=e,this.on(s,i,t)},emit:function(s){var e=[].slice.call(arguments,1),t=((this.e||(this.e={}))[s]||[]).slice(),n=0,i=t.length;for(n;n<i;n++)t[n].fn.apply(t[n].ctx,e);return this},off:function(s,e){var t=this.e||(this.e={}),n=t[s],i=[];if(n&&e)for(var r=0,a=n.length;r<a;r++)n[r].fn!==e&&n[r].fn._!==e&&i.push(n[r]);return i.length?t[s]=i:delete t[s],this}};Oc.exports=zc;Oc.exports.TinyEmitter=zc;var cM=Oc.exports;class Ea{constructor(e){this.wrap=document.querySelector("[data-router-wrapper]"),this.properties=e,this.Transition=e.transition?new e.transition.class(this.wrap,e.transition.name):null}setup(){this.onEnter&&this.onEnter(),this.onEnterCompleted&&this.onEnterCompleted()}add(){this.wrap.insertAdjacentHTML("beforeend",this.properties.view.outerHTML)}update(){document.title=this.properties.page.title}show(e){return new Promise(async t=>{this.update(),this.onEnter&&this.onEnter(),this.Transition&&await this.Transition.show(e),this.onEnterCompleted&&this.onEnterCompleted(),t()})}hide(e){return new Promise(async t=>{this.onLeave&&this.onLeave(),this.Transition&&await this.Transition.hide(e),this.onLeaveCompleted&&this.onLeaveCompleted(),t()})}}const uM=new window.DOMParser;class Ud{constructor(e,t){this.renderers=e,this.transitions=t}getOrigin(e){const t=e.match(/(https?:\/\/[\w\-.]+)/);return t?t[1].replace(/https?:\/\//,""):null}getPathname(e){const t=e.match(/https?:\/\/.*?(\/[\w_\-./]+)/);return t?t[1]:"/"}getAnchor(e){const t=e.match(/(#.*)$/);return t?t[1]:null}getParams(e){const t=e.match(/\?([\w_\-.=&]+)/);if(!t)return null;const n=t[1].split("&"),i={};for(let r=0;r<n.length;r++){const a=n[r].split("="),{0:o}=a,{1:l}=a;i[o]=l}return i}getDOM(e){return typeof e=="string"?uM.parseFromString(e,"text/html"):e}getView(e){return e.querySelector("[data-router-view]")}getSlug(e){return e.getAttribute("data-router-view")}getRenderer(e){if(!this.renderers)return Promise.resolve(Ea);if(e in this.renderers){const t=this.renderers[e];return typeof t=="function"&&!Ea.isPrototypeOf(t)?Promise.resolve(t()).then(({default:n})=>n):typeof t.then=="function"?Promise.resolve(t).then(({default:n})=>n):Promise.resolve(t)}return Promise.resolve(Ea)}getTransition(e){return this.transitions?e in this.transitions?{class:this.transitions[e],name:e}:"default"in this.transitions?{class:this.transitions.default,name:"default"}:null:null}getProperties(e){const t=this.getDOM(e),n=this.getView(t),i=this.getSlug(n),r=this.getRenderer(i,this.renderers),a=this.getTransition(i,this.transitions);return{page:t,view:n,slug:i,renderer:r,transition:a}}getLocation(e){return{href:e,anchor:this.getAnchor(e),origin:this.getOrigin(e),params:this.getParams(e),pathname:this.getPathname(e)}}}class fM extends cM{constructor({renderers:e,transitions:t}={}){super();this.Helpers=new Ud(e,t),this.Transitions=t,this.Contextual=!1,this.location=this.Helpers.getLocation(window.location.href),this.properties=this.Helpers.getProperties(document.cloneNode(!0)),this.popping=!1,this.running=!1,this.trigger=null,this.cache=new Map,this.cache.set(this.location.href,this.properties),this.properties.renderer.then(n=>{this.From=new n(this.properties),this.From.setup()}),this._navigate=this.navigate.bind(this),window.addEventListener("popstate",this.popState.bind(this)),this.links=document.querySelectorAll("a:not([target]):not([data-router-disabled])"),this.attach(this.links)}attach(e){for(const t of e)t.addEventListener("click",this._navigate)}detach(e){for(const t of e)t.removeEventListener("click",this._navigate)}navigate(e){if(!(e.metaKey||e.ctrlKey)){e.preventDefault();const t=e.currentTarget.hasAttribute("data-transition")?e.currentTarget.dataset.transition:!1;this.redirect(e.currentTarget.href,t,e.currentTarget)}}redirect(e,t=!1,n="script"){if(this.trigger=n,!this.running&&e!==this.location.href){const i=this.Helpers.getLocation(e);this.Contextual=!1,t&&(this.Contextual=this.Transitions.contextual[t].prototype,this.Contextual.name=t),i.origin!==this.location.origin||i.anchor&&i.pathname===this.location.pathname?window.location.href=e:(this.location=i,this.beforeFetch())}}popState(){this.trigger="popstate",this.Contextual=!1;const e=this.Helpers.getLocation(window.location.href);this.location.pathname!==e.pathname||!this.location.anchor&&!e.anchor?(this.popping=!0,this.location=e,this.beforeFetch()):this.location=e}pushState(){this.popping||window.history.pushState(this.location,"",this.location.href)}async fetch(){const e=await fetch(this.location.href,{mode:"same-origin",method:"GET",headers:{"X-Requested-With":"Highway"},credentials:"same-origin"});if(e.status>=200&&e.status<300)return e.text();window.location.href=this.location.href}async beforeFetch(){this.pushState(),this.running=!0,this.emit("NAVIGATE_OUT",{from:{page:this.From.properties.page,view:this.From.properties.view},trigger:this.trigger,location:this.location});const e={trigger:this.trigger,contextual:this.Contextual};if(this.cache.has(this.location.href))await this.From.hide(e),this.properties=this.cache.get(this.location.href);else{const t=await Promise.all([this.fetch(),this.From.hide(e)]);this.properties=this.Helpers.getProperties(t[0]),this.cache.set(this.location.href,this.properties)}this.afterFetch()}async afterFetch(){const e=await this.properties.renderer;this.To=new e(this.properties),this.To.add(),this.emit("NAVIGATE_IN",{to:{page:this.To.properties.page,view:this.To.wrap.lastElementChild},trigger:this.trigger,location:this.location}),await this.To.show({trigger:this.trigger,contextual:this.Contextual}),this.popping=!1,this.running=!1,this.detach(this.links),this.links=document.querySelectorAll("a:not([target]):not([data-router-disabled])"),this.attach(this.links),this.emit("NAVIGATE_END",{to:{page:this.To.properties.page,view:this.To.wrap.lastElementChild},from:{page:this.From.properties.page,view:this.From.properties.view},trigger:this.trigger,location:this.location}),this.From=this.To,this.trigger=null}}class hM{constructor(e,t){this.wrap=e,this.name=t}show({trigger:e,contextual:t}){const n=this.wrap.lastElementChild,i=this.wrap.firstElementChild;return new Promise(r=>{t?(n.setAttribute("data-transition-in",t.name),n.removeAttribute("data-transition-out",t.name),t.in&&t.in({to:n,from:i,trigger:e,done:r})):(n.setAttribute("data-transition-in",this.name),n.removeAttribute("data-transition-out",this.name),this.in&&this.in({to:n,from:i,trigger:e,done:r}))})}hide({trigger:e,contextual:t}){const n=this.wrap.firstElementChild;return new Promise(i=>{t?(n.setAttribute("data-transition-out",t.name),n.removeAttribute("data-transition-in",t.name),t.out&&t.out({from:n,trigger:e,done:i})):(n.setAttribute("data-transition-out",this.name),n.removeAttribute("data-transition-in",this.name),this.out&&this.out({from:n,trigger:e,done:i}))})}}console.log("Highway v2.2.0");var IM={Core:fM,Helpers:Ud,Renderer:Ea,Transition:hM},Nc={exports:{}};/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/(function(s,e){(function(t,n){n(s,e)})(Fs,function(t,n){var i=typeof Map=="function"?new Map:function(){var u=[],f=[];return{has:function(p){return u.indexOf(p)>-1},get:function(p){return f[u.indexOf(p)]},set:function(p,g){u.indexOf(p)===-1&&(u.push(p),f.push(g))},delete:function(p){var g=u.indexOf(p);g>-1&&(u.splice(g,1),f.splice(g,1))}}}(),r=function(f){return new Event(f,{bubbles:!0})};try{new Event("test")}catch{r=function(h){var p=document.createEvent("Event");return p.initEvent(h,!0,!1),p}}function a(u){if(!u||!u.nodeName||u.nodeName!=="TEXTAREA"||i.has(u))return;var f=null,h=null,p=null;function g(){var y=window.getComputedStyle(u,null);y.resize==="vertical"?u.style.resize="none":y.resize==="both"&&(u.style.resize="horizontal"),y.boxSizing==="content-box"?f=-(parseFloat(y.paddingTop)+parseFloat(y.paddingBottom)):f=parseFloat(y.borderTopWidth)+parseFloat(y.borderBottomWidth),isNaN(f)&&(f=0),M()}function d(y){{var S=u.style.width;u.style.width="0px",u.offsetWidth,u.style.width=S}u.style.overflowY=y}function m(y){for(var S=[];y&&y.parentNode&&y.parentNode instanceof Element;)y.parentNode.scrollTop&&S.push({node:y.parentNode,scrollTop:y.parentNode.scrollTop}),y=y.parentNode;return S}function _(){if(u.scrollHeight!==0){var y=m(u),S=document.documentElement&&document.documentElement.scrollTop;u.style.height="",u.style.height=u.scrollHeight+f+"px",h=u.clientWidth,y.forEach(function(C){C.node.scrollTop=C.scrollTop}),S&&(document.documentElement.scrollTop=S)}}function M(){_();var y=Math.round(parseFloat(u.style.height)),S=window.getComputedStyle(u,null),C=S.boxSizing==="content-box"?Math.round(parseFloat(S.height)):u.offsetHeight;if(C<y?S.overflowY==="hidden"&&(d("scroll"),_(),C=S.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(u,null).height)):u.offsetHeight):S.overflowY!=="hidden"&&(d("hidden"),_(),C=S.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(u,null).height)):u.offsetHeight),p!==C){p=C;var v=r("autosize:resized");try{u.dispatchEvent(v)}catch{}}}var E=function(){u.clientWidth!==h&&M()},x=function(y){window.removeEventListener("resize",E,!1),u.removeEventListener("input",M,!1),u.removeEventListener("keyup",M,!1),u.removeEventListener("autosize:destroy",x,!1),u.removeEventListener("autosize:update",M,!1),Object.keys(y).forEach(function(S){u.style[S]=y[S]}),i.delete(u)}.bind(u,{height:u.style.height,resize:u.style.resize,overflowY:u.style.overflowY,overflowX:u.style.overflowX,wordWrap:u.style.wordWrap});u.addEventListener("autosize:destroy",x,!1),"onpropertychange"in u&&"oninput"in u&&u.addEventListener("keyup",M,!1),window.addEventListener("resize",E,!1),u.addEventListener("input",M,!1),u.addEventListener("autosize:update",M,!1),u.style.overflowX="hidden",u.style.wordWrap="break-word",i.set(u,{destroy:x,update:M}),g()}function o(u){var f=i.get(u);f&&f.destroy()}function l(u){var f=i.get(u);f&&f.update()}var c=null;typeof window=="undefined"||typeof window.getComputedStyle!="function"?(c=function(f){return f},c.destroy=function(u){return u},c.update=function(u){return u}):(c=function(f,h){return f&&Array.prototype.forEach.call(f.length?f:[f],function(p){return a(p)}),f},c.destroy=function(u){return u&&Array.prototype.forEach.call(u.length?u:[u],o),u},c.update=function(u){return u&&Array.prototype.forEach.call(u.length?u:[u],l),u}),n.default=c,t.exports=n.default})})(Nc,Nc.exports);var FM=Nc.exports,Ca=globalThis&&globalThis.__assign||function(){return Ca=Object.assign||function(s){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s[i]=e[i])}return s},Ca.apply(this,arguments)},kc=function(){return typeof window!="undefined"&&!!window.document&&!!window.document.createElement},dM=function(){function s(){var e=this;this.handleWheel=function(t){t.preventDefault()},this.handleScroll=function(){window.scrollTo.apply(window,e.lockToScrollPos)},this.handleKeydown=function(t){var n=e.options.keyboardKeys;["INPUT","TEXTAREA"].includes(t.target.tagName)&&(n=n.filter(function(i){return!e.options.authorizedInInputs.includes(i)})),n.includes(t.keyCode)&&t.preventDefault()},this.element=null,this.lockToScrollPos=[0,0],this.options={authorizedInInputs:[32,37,38,39,40],disableKeys:!0,disableScroll:!0,disableWheel:!0,keyboardKeys:[32,33,34,35,36,37,38,39,40]},kc()&&(this.element=document.scrollingElement)}return s.prototype.on=function(e,t){var n,i,r,a;if(!!kc()){this.element=e||this.element,this.options=Ca(Ca({},this.options),t);var o=this.options,l=o.disableKeys,c=o.disableScroll,u=o.disableWheel;u&&(document.addEventListener("wheel",this.handleWheel,{passive:!1}),document.addEventListener("touchmove",this.handleWheel,{passive:!1})),c&&(this.lockToScrollPos=[(i=(n=this.element)===null||n===void 0?void 0:n.scrollLeft)!==null&&i!==void 0?i:0,(a=(r=this.element)===null||r===void 0?void 0:r.scrollTop)!==null&&a!==void 0?a:0],document.addEventListener("scroll",this.handleScroll,{passive:!1})),l&&document.addEventListener("keydown",this.handleKeydown,{passive:!1})}},s.prototype.off=function(){!kc()||(document.removeEventListener("wheel",this.handleWheel),document.removeEventListener("touchmove",this.handleWheel),document.removeEventListener("scroll",this.handleScroll),document.removeEventListener("keydown",this.handleKeydown))},s}(),OM=new dM;function Uc(s,e,t,n){return new(t||(t=Promise))(function(i,r){function a(c){try{l(n.next(c))}catch(u){r(u)}}function o(c){try{l(n.throw(c))}catch(u){r(u)}}function l(c){var u;c.done?i(c.value):(u=c.value,u instanceof t?u:new t(function(f){f(u)})).then(a,o)}l((n=n.apply(s,e||[])).next())})}const pM=["geforce 320m","geforce 8600","geforce 8600m gt","geforce 8800 gs","geforce 8800 gt","geforce 9400","geforce 9400m g","geforce 9400m","geforce 9600m gt","geforce 9600m","geforce fx go5200","geforce gt 120","geforce gt 130","geforce gt 330m","geforce gtx 285","google swiftshader","intel g41","intel g45","intel gma 4500mhd","intel gma x3100","intel hd 3000","intel q45","legacy","mali-2","mali-3","mali-4","quadro fx 1500","quadro fx 4","quadro fx 5","radeon hd 2400","radeon hd 2600","radeon hd 4670","radeon hd 4850","radeon hd 4870","radeon hd 5670","radeon hd 5750","radeon hd 6290","radeon hd 6300","radeon hd 6310","radeon hd 6320","radeon hd 6490m","radeon hd 6630m","radeon hd 6750m","radeon hd 6770m","radeon hd 6970m","sgx 543","sgx543"];function Bd(s){return s=s.toLowerCase().replace(/^angle ?\((.+)\)*$/,"$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g,"").replace(/(?:vulkan|opengl) \d+\.\d+(?:\.\d+)?(?: \((.*)\))?/,"$1")}const Gd=typeof window=="undefined",Bi=(()=>{if(Gd)return;const{userAgent:s,platform:e,maxTouchPoints:t}=window.navigator,n=/(iphone|ipod|ipad)/i.test(s),i=e==="iPad"||e==="MacIntel"&&t>0&&!window.MSStream;return{isIpad:i,isMobile:/android/i.test(s)||n||i,isSafari12:/Version\/12.+Safari/.test(s)}})();function mM(s,e,t){if(!t)return[e];const n=function(c){const u=`
    precision highp float;
    attribute vec3 aPosition;
    varying float vvv;
    void main() {
      vvv = 0.31622776601683794;
      gl_Position = vec4(aPosition, 1.0);
    }
  `,f=`
    precision highp float;
    varying float vvv;
    void main() {
      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;
      enc = fract(enc);
      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);
      gl_FragColor = enc;
    }
  `,h=c.createShader(35633),p=c.createShader(35632),g=c.createProgram();if(!(p&&h&&g))return;c.shaderSource(h,u),c.shaderSource(p,f),c.compileShader(h),c.compileShader(p),c.attachShader(g,h),c.attachShader(g,p),c.linkProgram(g),c.detachShader(g,h),c.detachShader(g,p),c.deleteShader(h),c.deleteShader(p),c.useProgram(g);const d=c.createBuffer();c.bindBuffer(34962,d),c.bufferData(34962,new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),35044);const m=c.getAttribLocation(g,"aPosition");c.vertexAttribPointer(m,3,5126,!1,0,0),c.enableVertexAttribArray(m),c.clearColor(1,1,1,1),c.clear(16384),c.viewport(0,0,1,1),c.drawArrays(4,0,3);const _=new Uint8Array(4);return c.readPixels(0,0,1,1,6408,5121,_),c.deleteProgram(g),c.deleteBuffer(d),_.join("")}(s),i="801621810",r="8016218135",a="80162181161",o=(Bi==null?void 0:Bi.isIpad)?[["a7",a,12],["a8",r,15],["a8x",r,15],["a9",r,15],["a9x",r,15],["a10",r,15],["a10x",r,15],["a12",i,15],["a12x",i,15],["a12z",i,15],["a14",i,15],["m1",i,15]]:[["a7",a,12],["a8",r,12],["a9",r,15],["a10",r,15],["a11",i,15],["a12",i,15],["a13",i,15],["a14",i,15]];let l;return n==="80162181255"?l=o.filter(([,,c])=>c>=14):(l=o.filter(([,c])=>c===n),l.length||(l=o)),l.map(([c])=>`apple ${c} gpu`)}const Bc=[],Vd=[];function gM(s,e){if(s===e)return 0;const t=s;s.length>e.length&&(s=e,e=t);let n=s.length,i=e.length;for(;n>0&&s.charCodeAt(~-n)===e.charCodeAt(~-i);)n--,i--;let r,a=0;for(;a<n&&s.charCodeAt(a)===e.charCodeAt(a);)a++;if(n-=a,i-=a,n===0)return i;let o,l,c=0,u=0,f=0;for(;u<n;)Vd[u]=s.charCodeAt(a+u),Bc[u]=++u;for(;f<i;)for(r=e.charCodeAt(a+f),o=f++,c=f,u=0;u<n;u++)l=r===Vd[u]?o:o+1,o=Bc[u],c=Bc[u]=o>c?l>c?c+1:l:l>o?o+1:l;return c}function _M(s){return s!=null}class Hd extends Error{constructor(e){super(e),Object.setPrototypeOf(this,new.target.prototype)}}const zM=({mobileTiers:s=[0,15,30,60],desktopTiers:e=[0,15,30,60],override:t={},glContext:n,failIfMajorPerformanceCaveat:i=!1,benchmarksURL:r="https://unpkg.com/detect-gpu@4.0.50/dist/benchmarks"}={})=>Uc(void 0,void 0,void 0,function*(){const a={};if(Gd)return{tier:0,type:"SSR"};const{isIpad:o=!!(Bi==null?void 0:Bi.isIpad),isMobile:l=!!(Bi==null?void 0:Bi.isMobile),screenSize:c=window.screen,loadBenchmarks:u=y=>Uc(void 0,void 0,void 0,function*(){const S=yield fetch(`${r}/${y}`).then(C=>C.json());if(parseInt(S.shift().split(".")[0],10)<4)throw new Hd("Detect GPU benchmark data is out of date. Please update to version 4x");return S})}=t;let{renderer:f}=t;const h=(y,S,C,v,w)=>({device:w,fps:v,gpu:C,isMobile:l,tier:y,type:S});let p,g="";if(f)f=Bd(f),p=[f];else{const y=n||function(C,v=!1){const w={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:v,powerPreference:"high-performance",stencil:!1};C&&delete w.powerPreference;const L=window.document.createElement("canvas"),R=L.getContext("webgl",w)||L.getContext("experimental-webgl",w);return R!=null?R:void 0}(Bi==null?void 0:Bi.isSafari12,i);if(!y)return h(0,"WEBGL_UNSUPPORTED");const S=y.getExtension("WEBGL_debug_renderer_info");if(S&&(f=y.getParameter(S.UNMASKED_RENDERER_WEBGL)),!f)return h(1,"FALLBACK");g=f,f=Bd(f),p=function(C,v,w){return v==="apple gpu"?mM(C,v,w):[v]}(y,f,l)}const d=(yield Promise.all(p.map(function(y){var S;return Uc(this,void 0,void 0,function*(){const C=(X=>{const ee=l?["adreno","apple","mali-t","mali","nvidia","powervr"]:["intel","apple","amd","radeon","nvidia","geforce"];for(const ie of ee)if(X.includes(ie))return ie})(y);if(!C)return;const v=`${l?"m":"d"}-${C}${o?"-ipad":""}.json`,w=a[v]=(S=a[v])!==null&&S!==void 0?S:u(v);let L;try{L=yield w}catch(X){if(X instanceof Hd)throw X;return}const R=function(X){var ee;const ie=(X=X.replace(/\([^)]+\)/,"")).match(/\d+/)||X.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g);return(ee=ie==null?void 0:ie.join("").replace(/\W|amd/g,""))!==null&&ee!==void 0?ee:""}(y);let H=L.filter(([,X])=>X===R);H.length||(H=L.filter(([X])=>X.includes(y)));const K=H.length;if(K===0)return;let I,[k,,,F]=K>1?H.map(X=>[X,gM(y,X[0])]).sort(([,X],[,ee])=>X-ee)[0][0]:H[0],G=Number.MAX_VALUE;const{devicePixelRatio:B}=window,N=c.width*B*c.height*B;for(const X of F){const[ee,ie]=X,he=ee*ie,V=Math.abs(N-he);V<G&&(G=V,I=X)}if(!I)return;const[,,A,Q]=I;return[G,A,k,Q]})}))).filter(_M).sort(([y=Number.MAX_VALUE,S],[C=Number.MAX_VALUE,v])=>y===C?S-v:y-C);if(!d.length){const y=pM.find(S=>f.includes(S));return y?h(0,"BLOCKLISTED",y):h(1,"FALLBACK",`${f} (${g})`)}const[,m,_,M]=d[0];if(m===-1)return h(0,"BLOCKLISTED",_,m,M);const E=l?s:e;let x=0;for(let y=0;y<E.length;y++)m>=E[y]&&(x=y);return h(x,"BENCHMARK",_,m,M)});export{MM as A,Xn as B,et as C,Ay as D,vM as E,lr as F,ea as G,IM as H,PM as I,Ri as M,Qt as N,bn as O,Fn as P,Gs as Q,TM as R,Ye as S,CM as T,Ke as V,wy as W,FM as a,SM as b,tc as c,OM as d,Ii as e,Nr as f,rm as g,rr as h,DM as i,U as j,Ai as k,RM as l,EM as m,St as n,AM as o,bM as p,at as q,wM as r,xM as s,Dv as t,LM as u,Xh as v,zM as w,Fs as x,Wr as y,yM as z};
