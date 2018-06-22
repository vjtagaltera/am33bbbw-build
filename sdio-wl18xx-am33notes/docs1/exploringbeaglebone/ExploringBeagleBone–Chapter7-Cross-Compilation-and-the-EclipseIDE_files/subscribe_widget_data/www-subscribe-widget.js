(function(){var h,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={Sa:!0},ea={};try{ea.__proto__=da;ca=ea.Sa;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var fa=ba,ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ja(a,b){if(b){for(var c=ia,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ha(c,d,{configurable:!0,writable:!0,value:f})}}
function ka(){ka=function(){};
ia.Symbol||(ia.Symbol=la)}
var la=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function ma(){ka();var a=ia.Symbol.iterator;a||(a=ia.Symbol.iterator=ia.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ha(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return na(this)}});
ma=function(){}}
function na(a){var b=0;return pa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function pa(a){ma();a={next:a};a[ia.Symbol.iterator]=function(){return this};
return a}
var qa=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}();
ja("Reflect.construct",function(){return qa});
function ra(a){ma();var b=a[Symbol.iterator];return b?b.call(a):na(a)}
function sa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
ja("WeakMap",function(a){function b(a){this.b=(f+=Math.random()+1).toString();if(a){ka();ma();a=ra(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(a){sa(a,e)||ha(a,e,{value:{}})}
function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(n){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!sa(a,e))throw Error("WeakMap key fail: "+a);a[e][this.b]=b;return this};
b.prototype.get=function(a){return sa(a,e)?a[e][this.b]:void 0};
b.prototype.has=function(a){return sa(a,e)&&sa(a[e],this.b)};
b.prototype["delete"]=function(a){return sa(a,e)&&sa(a[e],this.b)?delete a[e][this.b]:!1};
return b});
ja("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return pa(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&sa(a.f,c))for(var e=0;e<d.length;e++){var k=d[e];if(b!==b&&k.key!==k.key||b===k.key)return{id:c,list:d,index:e,o:k}}return{id:c,list:d,index:-1,o:void 0}}
function e(a){this.f={};this.b=b();this.size=0;if(a){a=ra(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(ra([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(A){return!1}}())return a;
ka();ma();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.o?c.o.value=b:(c.o={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.o),this.b.previous.next=c.o,this.b.previous=c.o,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.o&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.o.previous.next=a.o.next,a.o.next.previous=a.o.previous,a.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).o};
e.prototype.get=function(a){return(a=d(this,a).o)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ja("Set",function(a){function b(a){this.b=new Map;if(a){a=ra(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(ra([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ka();ma();b.prototype.add=function(a){a=0===a?0:a;this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
ja("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
var m=this;function p(a){return void 0!==a}
function q(a){return"string"==typeof a}
function ta(a){return"number"==typeof a}
function r(a){a=a.split(".");for(var b=m,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ua(){}
function va(a){a.V=void 0;a.u=function(){return a.V?a.V:a.V=new a}}
function wa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function xa(a){return"array"==wa(a)}
function ya(a){var b=wa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function za(a){return"function"==wa(a)}
function Aa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ba(a){return a[Ca]||(a[Ca]=++Da)}
var Ca="closure_uid_"+(1E9*Math.random()>>>0),Da=0;function Ea(a,b,c){return a.call.apply(a.bind,arguments)}
function Fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=Ea:t=Fa;return t.apply(null,arguments)}
var Ga=Date.now||function(){return+new Date};
function v(a,b){var c=a.split("."),d=m;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&p(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function w(a,b){function c(){}
c.prototype=b.prototype;a.m=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Gb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function Ha(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ha);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
w(Ha,Error);Ha.prototype.name="CustomError";var Ia;var Ja=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(q(a))return q(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},y=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ka=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];
b.call(c,l,k,a)&&(e[f++]=l)}return e},La=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=q(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ma=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function Na(a,b){a:{var c=a.length;for(var d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:q(a)?a.charAt(c):a[c]}
function Oa(a,b){return 0<=Ja(a,b)}
function Pa(a){return Array.prototype.concat.apply([],arguments)}
function Qa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ra(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ya(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Sa(a,b,c,d){return Array.prototype.splice.apply(a,Ta(arguments,1))}
function Ta(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Ua(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(xa(d))for(var e=0;e<d.length;e+=8192)for(var f=Ua.apply(null,Ta(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;var Va=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Wa=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function Xa(a){a=p(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return Wa("0",Math.max(0,2-b))+a}
function Ya(a,b){for(var c=0,d=Va(String(a)).split("."),e=Va(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var k=d[g]||"",l=e[g]||"";do{k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==k[0].length&&0==l[0].length)break;c=Za(0==k[1].length?0:parseInt(k[1],10),0==l[1].length?0:parseInt(l[1],10))||Za(0==k[2].length,0==l[2].length)||Za(k[2],l[2]);k=k[3];l=l[3]}while(0==c)}return c}
function Za(a,b){return a<b?-1:a>b?1:0}
function $a(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function ab(a){var b=q(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;function bb(){this.b=("undefined"==typeof document?null:document)||{cookie:""}}
h=bb.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Ga()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
h.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Va(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
h.isEmpty=function(){return!this.b.cookie};
h.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Va(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var cb=new bb;cb.f=3950;function db(a,b){this.h=a;this.i=b;this.f=0;this.b=null}
db.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.h();return a};
function eb(a,b){a.i(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;var fb;a:{var gb=m.navigator;if(gb){var hb=gb.userAgent;if(hb){fb=hb;break a}}fb=""}function z(a){return-1!=fb.indexOf(a)}
;function ib(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function jb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
var mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function ob(){return z("Safari")&&!(pb()||z("Coast")||z("Opera")||z("Edge")||z("Silk")||z("Android"))}
function pb(){return(z("Chrome")||z("CriOS"))&&!z("Edge")}
function qb(){return z("Android")&&!(pb()||z("Firefox")||z("Opera")||z("Silk"))}
;function rb(a){m.setTimeout(function(){throw a;},0)}
var sb;
function tb(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!z("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!z("Trident")&&!z("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.ea;c.ea=null;a()}};
return function(a){d.next={ea:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function ub(){this.f=this.b=null}
var wb=new db(function(){return new vb},function(a){a.reset()});
ub.prototype.add=function(a,b){var c=wb.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
ub.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function vb(){this.next=this.scope=this.b=null}
vb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
vb.prototype.reset=function(){this.next=this.scope=this.b=null};function xb(a,b){yb||zb();Ab||(yb(),Ab=!0);Bb.add(a,b)}
var yb;function zb(){if(m.Promise&&m.Promise.resolve){var a=m.Promise.resolve(void 0);yb=function(){a.then(Cb)}}else yb=function(){var a=Cb;
!za(m.setImmediate)||m.Window&&m.Window.prototype&&!z("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(sb||(sb=tb()),sb(a)):m.setImmediate(a)}}
var Ab=!1,Bb=new ub;function Cb(){for(var a;a=Bb.remove();){try{a.b.call(a.scope)}catch(b){rb(b)}eb(wb,a)}Ab=!1}
;function Db(){return z("iPhone")&&!z("iPod")&&!z("iPad")}
function Eb(){return Db()||z("iPad")||z("iPod")}
;function Fb(a){Fb[" "](a);return a}
Fb[" "]=ua;function Gb(a,b){var c=Hb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Ib=z("Opera"),B=z("Trident")||z("MSIE"),Jb=z("Edge"),Kb=Jb||B,Lb=z("Gecko")&&!(-1!=fb.toLowerCase().indexOf("webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge"),Mb=-1!=fb.toLowerCase().indexOf("webkit")&&!z("Edge"),Nb=z("Macintosh"),Ob=z("Windows"),Pb=z("Android"),Qb=Db(),Rb=z("iPad"),Sb=z("iPod"),Tb=Eb();function Ub(){var a=m.document;return a?a.documentMode:void 0}
var Vb;a:{var Wb="",Xb=function(){var a=fb;if(Lb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Jb)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Mb)return/WebKit\/(\S+)/.exec(a);if(Ib)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Xb&&(Wb=Xb?Xb[1]:"");if(B){var Yb=Ub();if(null!=Yb&&Yb>parseFloat(Wb)){Vb=String(Yb);break a}}Vb=Wb}var Zb=Vb,Hb={};function $b(a){return Gb(a,function(){return 0<=Ya(Zb,a)})}
var ac;var bc=m.document;ac=bc&&B?Ub()||("CSS1Compat"==bc.compatMode?parseInt(Zb,10):5):void 0;var cc=z("Firefox"),dc=Db()||z("iPod"),ec=z("iPad"),fc=qb(),gc=pb(),hc=ob()&&!Eb();function ic(a,b,c){ta(a)?(this.date=jc(a,b||0,c||1),kc(this,c||1)):Aa(a)?(this.date=jc(a.getFullYear(),a.getMonth(),a.getDate()),kc(this,a.getDate())):(this.date=new Date(Ga()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),kc(this,a))}
function jc(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
h=ic.prototype;h.getFullYear=function(){return this.date.getFullYear()};
h.getMonth=function(){return this.date.getMonth()};
h.getDate=function(){return this.date.getDate()};
h.getTime=function(){return this.date.getTime()};
h.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
h.add=function(a){if(a.f||a.b){var b=this.getMonth()+a.b+12*a.f,c=this.getFullYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.date.setDate(1);this.date.setFullYear(c);this.date.setMonth(b);this.date.setDate(d)}a.days&&(a=new Date((new Date(this.getFullYear(),this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.date.setDate(1),this.date.setFullYear(a.getFullYear()),
this.date.setMonth(a.getMonth()),this.date.setDate(a.getDate()),kc(this,a.getDate()))};
h.O=function(a){return[this.getFullYear(),Xa(this.getMonth()+1),Xa(this.getDate())].join(a?"-":"")+""};
h.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
h.toString=function(){return this.O()};
function kc(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
h.valueOf=function(){return this.date.valueOf()};
function lc(a,b,c,d,e,f,g){this.date=ta(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():Ga())}
w(lc,ic);lc.prototype.add=function(a){ic.prototype.add.call(this,a);a.hours&&this.date.setUTCHours(this.date.getUTCHours()+a.hours);a.minutes&&this.date.setUTCMinutes(this.date.getUTCMinutes()+a.minutes);a.seconds&&this.date.setUTCSeconds(this.date.getUTCSeconds()+a.seconds)};
lc.prototype.O=function(a){var b=ic.prototype.O.call(this,a);return a?b+" "+Xa(this.date.getHours())+":"+Xa(this.date.getMinutes())+":"+Xa(this.date.getSeconds()):b+"T"+Xa(this.date.getHours())+Xa(this.date.getMinutes())+Xa(this.date.getSeconds())};
lc.prototype.equals=function(a){return this.getTime()==a.getTime()};
lc.prototype.toString=function(){return this.O()};function mc(){this.h=this.h;this.i=this.i}
mc.prototype.h=!1;mc.prototype.M=function(){return this.h};
mc.prototype.dispose=function(){this.h||(this.h=!0,this.S())};
mc.prototype.S=function(){if(this.i)for(;this.i.length;)this.i.shift()()};
function nc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;var oc=!Lb&&!B||B&&9<=Number(ac)||Lb&&$b("1.9.1"),pc=B&&!$b("9");function qc(a){if(a.classList)return a.classList;a=a.className;return q(a)&&a.match(/\S+/g)||[]}
function C(a,b){return a.classList?a.classList.contains(b):Oa(qc(a),b)}
function D(a,b){a.classList?a.classList.add(b):C(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function rc(a,b){if(a.classList)y(b,function(b){D(a,b)});
else{var c={};y(qc(a),function(a){c[a]=!0});
y(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function E(a,b){a.classList?a.classList.remove(b):C(a,b)&&(a.className=Ka(qc(a),function(a){return a!=b}).join(" "))}
function sc(a,b){a.classList?y(b,function(b){E(a,b)}):a.className=Ka(qc(a),function(a){return!Oa(b,a)}).join(" ")}
function F(a,b,c){c?D(a,b):E(a,b)}
function tc(a,b,c){C(a,b)&&(E(a,b),D(a,c))}
function uc(a,b){var c=!C(a,b);F(a,b,c)}
;var vc=!B&&!ob();function wc(a,b){if(/-[a-z]/.test(b))return null;if(vc&&a.dataset){if(qb()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function xc(){this.b="";this.f=yc}
xc.prototype.U=!0;xc.prototype.T=function(){return this.b};
var zc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,yc={};function Ac(a){var b=new xc;b.b=a;return b}
Ac("about:blank");function Bc(){this.b="";this.f=Cc}
Bc.prototype.U=!0;Bc.prototype.T=function(){return this.b};
function Dc(a){if(a instanceof Bc&&a.constructor===Bc&&a.f===Cc)return a.b;wa(a);return"type_error:SafeHtml"}
var Cc={};function Ec(a){var b=new Bc;b.b=a;return b}
Ec("<!DOCTYPE html>");Ec("");Ec("<br>");function G(a,b){this.x=p(a)?a:0;this.y=p(b)?b:0}
G.prototype.equals=function(a){return a instanceof G&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Fc(a,b){return new G(a.x-b.x,a.y-b.y)}
G.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
G.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
G.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Gc(a,b){this.width=a;this.height=b}
h=Gc.prototype;h.Ua=function(){return this.width*this.height};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!this.Ua()};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Hc(a){return a?new Ic(Jc(a)):Ia||(Ia=new Ic)}
function H(a){return q(a)?document.getElementById(a):a}
function Kc(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Lc(document,"*",a,b)}
function I(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Lc(c,"*",a,b)[0]||null}return c||null}
function Lc(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&Oa(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function Mc(a,b){ib(b,function(b,d){b&&b.U&&(b=b.T());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Nc.hasOwnProperty(d)?a.setAttribute(Nc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Nc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Oc(a){a=a.document;a=Pc(a)?a.documentElement:a.body;return new Gc(a.clientWidth,a.clientHeight)}
function Qc(a){var b=Rc(a);a=Sc(a);return B&&$b("10")&&a.pageYOffset!=b.scrollTop?new G(b.scrollLeft,b.scrollTop):new G(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Rc(a){return a.scrollingElement?a.scrollingElement:!Mb&&Pc(a)?a.documentElement:a.body||a.documentElement}
function Sc(a){return a.parentWindow||a.defaultView}
function Pc(a){return"CSS1Compat"==a.compatMode}
function Tc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Uc(a){return oc&&void 0!=a.children?a.children:Ka(a.childNodes,function(a){return 1==a.nodeType})}
function Vc(a){return Aa(a)&&1==a.nodeType}
function Wc(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Jc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Xc(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Jc(a).createTextNode(String(b)))}}
function Yc(a,b){var c=[];return Zc(a,b,c,!0)?c[0]:void 0}
function Zc(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Zc(a,b,c,d))return!0;a=a.nextSibling}return!1}
var $c={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},ad={IMG:" ",BR:"\n"};function bd(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!cd(a)||dd(a)):cd(a)&&dd(a))&&B){var c;!za(a.getBoundingClientRect)||B&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function cd(a){return B&&!$b("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function dd(a){a=a.tabIndex;return ta(a)&&0<=a&&32768>a}
function ed(a){if(pc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];fd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");pc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function fd(a,b,c){if(!(a.nodeName in $c))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in ad)b.push(ad[a.nodeName]);else for(a=a.firstChild;a;)fd(a,b,c),a=a.nextSibling}
function gd(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return hd(a,function(a){return(!e||a.nodeName==e)&&(!c||q(a.className)&&Oa(a.className.split(/\s+/),c))},!0,d)}
function J(a,b){return gd(a,null,b,void 0)}
function hd(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Ic(a){this.b=a||m.document||document}
Ic.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
Ic.prototype.createElement=function(a){return this.b.createElement(String(a))};
Ic.prototype.appendChild=function(a,b){a.appendChild(b)};
Ic.prototype.isElement=Vc;var id="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function jd(){}
jd.prototype.next=function(){throw id;};
jd.prototype.C=function(){return this};
function kd(a){if(a instanceof jd)return a;if("function"==typeof a.C)return a.C(!1);if(ya(a)){var b=0,c=new jd;c.next=function(){for(;;){if(b>=a.length)throw id;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ld(a,b){if(ya(a))try{y(a,b,void 0)}catch(c){if(c!==id)throw c;}else{a=kd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==id)throw c;}}}
function md(a){if(ya(a))return Qa(a);a=kd(a);var b=[];ld(a,function(a){b.push(a)});
return b}
;function nd(a,b){this.h={};this.b=[];this.F=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof nd)for(c=od(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function od(a){pd(a);return a.b.concat()}
h=nd.prototype;h.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||qd;pd(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function qd(a,b){return a===b}
h.isEmpty=function(){return 0==this.f};
h.clear=function(){this.h={};this.F=this.f=this.b.length=0};
h.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.f--,this.F++,this.b.length>2*this.f&&pd(this),!0):!1};
function pd(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
h.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
h.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.f++,this.b.push(a),this.F++);this.h[a]=b};
h.forEach=function(a,b){for(var c=od(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.C=function(a){pd(this);var b=0,c=this.F,d=this,e=new jd;e.next=function(){if(c!=d.F)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw id;var e=d.b[b++];return a?e:d.h[e]};
return e};function rd(a){var b=[];sd(new td,a,b);return b.join("")}
function td(){}
function sd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(xa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),sd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ud(d,c),c.push(":"),sd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ud(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var vd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},wd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ud(a,b){b.push('"',a.replace(wd,function(a){var b=vd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),vd[a]=b);return b}),'"')}
;function xd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
xd.prototype.getHeight=function(){return this.bottom-this.top};
xd.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
xd.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
xd.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function yd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
yd.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
yd.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
yd.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function zd(a,b,c){if(q(b))(b=Ad(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Ad(c,d);f&&(c.style[f]=e)}}
var Bd={};function Ad(a,b){var c=Bd[b];if(!c){var d=$a(b);c=d;void 0===a.style[d]&&(d=(Mb?"Webkit":Lb?"Moz":B?"ms":Ib?"O":null)+ab(d),void 0!==a.style[d]&&(c=d));Bd[b]=c}return c}
function Cd(a,b){var c=Jc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Dd(a,b){return Cd(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Ed(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}B&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Fd(a){if(B&&!(8<=Number(ac)))return a.offsetParent;var b=Jc(a),c=Dd(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Dd(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Gd(a){for(var b=new xd(0,Infinity,Infinity,0),c=Hc(a),d=c.b.body,e=c.b.documentElement,f=Rc(c.b);a=Fd(a);)if(!(B&&0==a.clientWidth||Mb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Dd(a,"overflow")){var g=Hd(a),k=new G(a.clientLeft,a.clientTop);g.x+=k.x;g.y+=k.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
Oc(Sc(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Hd(a){var b=Jc(a),c=new G(0,0);var d=b?Jc(b):document;d=!B||9<=Number(ac)||Pc(Hc(d).b)?d.documentElement:d.body;if(a==d)return c;a=Ed(a);b=Qc(Hc(b).b);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Id(a){a=Ed(a);return new G(a.left,a.top)}
function Jd(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Kd(a){var b=Ld;if("none"!=Dd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Ld(a){var b=a.offsetWidth,c=a.offsetHeight,d=Mb&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new Gc(b,c):(a=Ed(a),new Gc(a.right-a.left,a.bottom-a.top))}
function Md(a){var b=Hd(a);a=Kd(a);return new yd(b.x,b.y,a.width,a.height)}
function Nd(a){return"rtl"==Dd(a,"direction")}
function Od(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Pd(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Od(a,c):0}
var Qd={thin:2,medium:4,thick:6};function Rd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Qd?Qd[c]:Od(a,c)}
;var Sd=function(){if(Ob){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(fb))?a[1]:"0"}return Nb?(a=/10[_.][0-9_.]+/,(a=a.exec(fb))?a[0].replace(/_/g,"."):"10"):Pb?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(fb))?a[1]:""):Qb||Rb||Sb?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(fb))?a[1].replace(/_/g,"."):""):""}();function Td(a){return(a=a.exec(fb))?a[1]:""}
var Ud=function(){if(cc)return Td(/Firefox\/([0-9.]+)/);if(B||Jb||Ib)return Zb;if(gc)return Eb()?Td(/CriOS\/([0-9.]+)/):Td(/Chrome\/([0-9.]+)/);if(hc&&!Eb())return Td(/Version\/([0-9.]+)/);if(dc||ec){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(fb);if(a)return a[1]+"."+a[2]}else if(fc)return(a=Td(/Android\s+([0-9.]+)/))?a:Td(/Version\/([0-9.]+)/);return""}();function Vd(a,b,c,d,e,f,g){var k;if(k=c.offsetParent){var l="HTML"==k.tagName||"BODY"==k.tagName;if(!l||"static"!=Dd(k,"position")){var n=Hd(k);if(!l){l=Nd(k);var x;if(x=l){if(x=hc)x=0<=Ya(Ud,10);var A;if(A=Tb)A=0<=Ya(Sd,10);x=Lb||x||A}l=x?-k.scrollLeft:!l||Kb&&$b("8")||"visible"==Dd(k,"overflowX")?k.scrollLeft:k.scrollWidth-k.clientWidth-k.scrollLeft;n=Fc(n,new G(l,k.scrollTop))}}}k=n||new G;n=Md(a);if(l=Gd(a)){var u=new yd(l.left,l.top,l.right-l.left,l.bottom-l.top);l=Math.max(n.left,u.left);x=
Math.min(n.left+n.width,u.left+u.width);l<=x&&(A=Math.max(n.top,u.top),u=Math.min(n.top+n.height,u.top+u.height),A<=u&&(n.left=l,n.top=A,n.width=x-l,n.height=u-A))}l=Hc(a);A=Hc(c);if(l.b!=A.b){x=l.b.body;A=Sc(A.b);u=new G(0,0);var Q=(Q=Jc(x))?Sc(Q):window;b:{try{Fb(Q.parent);var N=!0;break b}catch(Yi){}N=!1}if(N){N=x;do{var lf=Q==A?Hd(N):Id(N);u.x+=lf.x;u.y+=lf.y}while(Q&&Q!=A&&Q!=Q.parent&&(N=Q.frameElement)&&(Q=Q.parent))}N=Fc(u,Hd(x));!B||9<=Number(ac)||Pc(l.b)||(N=Fc(N,Qc(l.b)));n.left+=N.x;n.top+=
N.y}a=Wd(a,b);b=n.left;a&4?b+=n.width:a&2&&(b+=n.width/2);b=new G(b,n.top+(a&1?n.height:0));b=Fc(b,k);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var oa;g&&(oa=Gd(c))&&(oa.top-=k.y,oa.right-=k.x,oa.bottom-=k.y,oa.left-=k.x);return Xd(b,c,d,f,oa,g,void 0)}
function Xd(a,b,c,d,e,f,g){a=new G(a.x,a.y);var k=Wd(b,c);c=Kd(b);g=g?new Gc(g.width,g.height):new Gc(c.width,c.height);a=new G(a.x,a.y);g=new Gc(g.width,g.height);var l=0;if(d||0!=k)k&4?a.x-=g.width+(d?d.right:0):k&2?a.x-=g.width/2:d&&(a.x+=d.left),k&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;k=g;l=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,l|=1);if(f&16){var n=d.x;d.x<e.left&&(d.x=e.left,l|=
4);d.x+k.width>e.right&&(k.width=Math.min(e.right-d.x,n+k.width-e.left),k.width=Math.max(k.width,0),l|=4)}d.x+k.width>e.right&&f&1&&(d.x=Math.max(e.right-k.width,e.left),l|=1);f&2&&(l|=(d.x<e.left?16:0)|(d.x+k.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,l|=2);f&32&&(n=d.y,d.y<e.top&&(d.y=e.top,l|=8),d.y+k.height>e.bottom&&(k.height=Math.min(e.bottom-d.y,n+k.height-e.top),k.height=Math.max(k.height,0),l|=8));d.y+k.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-k.height,e.top),l|=2);f&8&&(l|=(d.y<
e.top?64:0)|(d.y+k.height>e.bottom?128:0));e=l}else e=256;l=e}f=new yd(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=l;if(e&496)return e;g=new G(f.left,f.top);g instanceof G?(a=g.x,g=g.y):(a=g,g=void 0);b.style.left=Jd(a,!1);b.style.top=Jd(g,!1);g=new Gc(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=Pc(Hc(Jc(b)).b),!B||$b("10")||g&&$b("8")?(b=b.style,Lb?b.MozBoxSizing="border-box":Mb?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,
0)+"px",b.height=Math.max(c.height,0)+"px"):(a=b.style,g?(B?(g=Pd(b,"paddingLeft"),f=Pd(b,"paddingRight"),d=Pd(b,"paddingTop"),k=Pd(b,"paddingBottom"),g=new xd(d,f,k,g)):(g=Cd(b,"paddingLeft"),f=Cd(b,"paddingRight"),d=Cd(b,"paddingTop"),k=Cd(b,"paddingBottom"),g=new xd(parseFloat(d),parseFloat(f),parseFloat(k),parseFloat(g))),!B||9<=Number(ac)?(f=Cd(b,"borderLeftWidth"),d=Cd(b,"borderRightWidth"),k=Cd(b,"borderTopWidth"),b=Cd(b,"borderBottomWidth"),b=new xd(parseFloat(k),parseFloat(d),parseFloat(b),
parseFloat(f))):(f=Rd(b,"borderLeft"),d=Rd(b,"borderRight"),k=Rd(b,"borderTop"),b=Rd(b,"borderBottom"),b=new xd(k,d,b,f)),a.pixelWidth=c.width-b.left-g.left-g.right-b.right,a.pixelHeight=c.height-b.top-g.top-g.bottom-b.bottom):(a.pixelWidth=c.width,a.pixelHeight=c.height)));return e}
function Wd(a,b){return(b&8&&Nd(a)?b^4:b)&-9}
;function Yd(a){this.b=0;this.v=void 0;this.i=this.f=this.h=null;this.j=this.l=!1;if(a!=ua)try{var b=this;a.call(void 0,function(a){Zd(b,2,a)},function(a){Zd(b,3,a)})}catch(c){Zd(this,3,c)}}
function $d(){this.next=this.context=this.onRejected=this.f=this.b=null;this.h=!1}
$d.prototype.reset=function(){this.context=this.onRejected=this.f=this.b=null;this.h=!1};
var ae=new db(function(){return new $d},function(a){a.reset()});
function be(a,b,c){var d=ae.get();d.f=a;d.onRejected=b;d.context=c;return d}
Yd.prototype.then=function(a,b,c){return ce(this,za(a)?a:null,za(b)?b:null,c)};
Yd.prototype.then=Yd.prototype.then;Yd.prototype.$goog_Thenable=!0;Yd.prototype.cancel=function(a){0==this.b&&xb(function(){var b=new de(a);ee(this,b)},this)};
function ee(a,b){if(0==a.b)if(a.h){var c=a.h;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.h||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?ee(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):fe(c),ge(c,e,3,b)))}a.h=null}else Zd(a,3,b)}
function he(a,b){a.f||2!=a.b&&3!=a.b||ie(a);a.i?a.i.next=b:a.f=b;a.i=b}
function ce(a,b,c,d){var e=be(null,null,null);e.b=new Yd(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof de?g(b):a(e)}catch(n){g(n)}}:g});
e.b.h=a;he(a,e);return e.b}
Yd.prototype.D=function(a){this.b=0;Zd(this,2,a)};
Yd.prototype.R=function(a){this.b=0;Zd(this,3,a)};
function Zd(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.D,f=a.R;if(d instanceof Yd){he(d,be(e||ua,f||null,a));var g=!0}else{if(d)try{var k=!!d.$goog_Thenable}catch(n){k=!1}else k=!1;if(k)d.then(e,f,a),g=!0;else{if(Aa(d))try{var l=d.then;if(za(l)){je(d,l,e,f,a);g=!0;break a}}catch(n){f.call(a,n);g=!0;break a}g=!1}}}g||(a.v=c,a.b=b,a.h=null,ie(a),3!=b||c instanceof de||ke(a,c))}}
function je(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function g(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function ie(a){a.l||(a.l=!0,xb(a.A,a))}
function fe(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
Yd.prototype.A=function(){for(var a;a=fe(this);)ge(this,a,this.b,this.v);this.l=!1};
function ge(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.b)b.b.h=null,le(b,c,d);else try{b.h?b.f.call(b.context):le(b,c,d)}catch(e){me.call(null,e)}eb(ae,b)}
function le(a,b,c){2==b?a.f.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function ke(a,b){a.j=!0;xb(function(){a.j&&me.call(null,b)})}
var me=rb;function de(a){Ha.call(this,a)}
w(de,Ha);de.prototype.name="cancel";function K(a){mc.call(this);this.v=1;this.j=[];this.l=0;this.b=[];this.f={};this.A=!!a}
w(K,mc);h=K.prototype;h.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.v;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.v=e+3;d.push(e);return e};
function ne(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.K(d),b.apply(void 0,arguments))},a)}
function oe(a,b,c){if(b=a.f[b]){var d=a.b;(b=Na(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.K(b)}}
h.K=function(a){var b=this.b[a];if(b){var c=this.f[b];if(0!=this.l)this.j.push(a),this.b[a+1]=ua;else{if(c){var d=Ja(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
h.B=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];pe(this.b[g+1],this.b[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.K(c)}}return 0!=e}return!1};
function pe(a,b,c){xb(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.f[a];b&&(y(b,this.K,this),delete this.f[a])}else this.b.length=0,this.f={}};
function qe(a,b){if(b){var c=a.f[b];return c?c.length:0}c=0;for(var d in a.f)c+=qe(a,d);return c}
h.S=function(){K.m.S.call(this);this.clear();this.j.length=0};function re(a){this.b=a}
re.prototype.set=function(a,b){p(b)?this.b.set(a,rd(b)):this.b.remove(a)};
re.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
re.prototype.remove=function(a){this.b.remove(a)};function se(a){this.b=a}
w(se,re);function te(a){this.data=a}
function ue(a){return!p(a)||a instanceof te?a:new te(a)}
se.prototype.set=function(a,b){se.m.set.call(this,a,ue(b))};
se.prototype.f=function(a){a=se.m.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
se.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ve(a){this.b=a}
w(ve,se);ve.prototype.set=function(a,b,c){if(b=ue(b)){if(c){if(c<Ga()){ve.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ga()}ve.m.set.call(this,a,b)};
ve.prototype.f=function(a){var b=ve.m.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ga()||c&&c>Ga())ve.prototype.remove.call(this,a);else return b}};function we(){}
;function xe(){}
w(xe,we);xe.prototype.clear=function(){var a=md(this.C(!0)),b=this;y(a,function(a){b.remove(a)})};function ye(a){this.b=a}
w(ye,xe);h=ye.prototype;h.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.b.getItem(a);if(!q(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.b.removeItem(a)};
h.C=function(a){var b=0,c=this.b,d=new jd;d.next=function(){if(b>=c.length)throw id;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!q(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){this.b.clear()};
h.key=function(a){return this.b.key(a)};function ze(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
w(ze,ye);function Ae(a,b){this.f=a;this.b=null;if(B&&!(9<=Number(ac))){Be||(Be=new nd);this.b=Be.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),Be.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
w(Ae,xe);var Ce={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Be=null;function De(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Ce[a]})}
h=Ae.prototype;h.isAvailable=function(){return!!this.b};
h.set=function(a,b){this.b.setAttribute(De(a),b);Ee(this)};
h.get=function(a){a=this.b.getAttribute(De(a));if(!q(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.b.removeAttribute(De(a));Ee(this)};
h.C=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new jd;d.next=function(){if(b>=c.length)throw id;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!q(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ee(this)};
function Ee(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Fe(a,b){this.f=a;this.b=b+"::"}
w(Fe,xe);Fe.prototype.set=function(a,b){this.f.set(this.b+a,b)};
Fe.prototype.get=function(a){return this.f.get(this.b+a)};
Fe.prototype.remove=function(a){this.f.remove(this.b+a)};
Fe.prototype.C=function(a){var b=this.f.C(!0),c=this,d=new jd;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};var Ge=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function He(a){return a?decodeURI(a):a}
function Ie(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function Je(a,b,c){if(xa(b))for(var d=0;d<b.length;d++)Je(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ke(a,b){for(var c=[],d=b||0;d<a.length;d+=2)Je(a[d],a[d+1],c);return c.join("&")}
function Le(a){var b=[],c;for(c in a)Je(c,a[c],b);return b.join("&")}
function Me(a,b){var c=2==arguments.length?Ke(arguments[1],0):Ke(arguments,1);return Ie(a,c)}
function Ne(a,b){var c=Le(b);return Ie(a,c)}
;var Oe=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",Oe);function Pe(a){var b=arguments;if(1<b.length)Oe[b[0]]=b[1];else{b=b[0];for(var c in b)Oe[c]=b[c]}}
function L(a,b){return a in Oe?Oe[a]:b}
;function Qe(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Re(b)}}:a}
function Re(a){var b=r("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=L("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),Pe("ERRORS",b))}
;function M(a,b){za(a)&&(a=Qe(a));return window.setTimeout(a,b)}
;var Se=r("ytPubsubPubsubInstance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.K;K.prototype.publish=K.prototype.B;K.prototype.clear=K.prototype.clear;v("ytPubsubPubsubInstance",Se);var Te=r("ytPubsubPubsubSubscribedKeys")||{};v("ytPubsubPubsubSubscribedKeys",Te);var Ue=r("ytPubsubPubsubTopicToKeys")||{};v("ytPubsubPubsubTopicToKeys",Ue);var Ve=r("ytPubsubPubsubIsSynchronous")||{};v("ytPubsubPubsubIsSynchronous",Ve);
function We(a,b,c){var d=Xe();if(d){var e=d.subscribe(a,function(){var d=arguments;var g=function(){Te[e]&&b.apply(c||window,d)};
try{Ve[a]?g():M(g,0)}catch(k){Re(k)}},c);
Te[e]=!0;Ue[a]||(Ue[a]=[]);Ue[a].push(e);return e}return 0}
function Ye(a){var b=Xe();b&&(ta(a)?a=[a]:q(a)&&(a=[parseInt(a,10)]),y(a,function(a){b.unsubscribeByKey(a);delete Te[a]}))}
function O(a,b){var c=Xe();return c?c.publish.apply(c,arguments):!1}
function Ze(a,b){Ve[a]=!0;var c=Xe();c&&c.publish.apply(c,arguments);Ve[a]=!1}
function Xe(){return r("ytPubsubPubsubInstance")}
;function $e(a,b,c){a&&(a.dataset?a.dataset[af(b)]=String(c):a.setAttribute("data-"+b,c))}
function bf(a,b){return a?a.dataset?a.dataset[af(b)]:a.getAttribute("data-"+b):null}
function cf(a,b){a&&(a.dataset?delete a.dataset[af(b)]:a.removeAttribute("data-"+b))}
var df={};function af(a){return df[a]||(df[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function P(a,b){this.version=a;this.args=b}
;function R(a,b){this.topic=a;this.b=b}
R.prototype.toString=function(){return this.topic};function ef(a){var b=void 0;isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");c?c(a,1,b):void 0===b?a():M(a,b||0)}
;function ff(){}
function gf(){}
ff.prototype=aa(gf.prototype);ff.prototype.constructor=ff;if(fa)fa(ff,gf);else for(var hf in gf)if("prototype"!=hf)if(Object.defineProperties){var jf=Object.getOwnPropertyDescriptor(gf,hf);jf&&Object.defineProperty(ff,hf,jf)}else ff[hf]=gf[hf];ff.m=gf.prototype;ff.prototype.start=function(){var a=r("yt.scheduler.instance.start");a&&a()};
va(ff);ff.u();var kf=r("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.K;K.prototype.publish=K.prototype.B;K.prototype.clear=K.prototype.clear;v("ytPubsub2Pubsub2Instance",kf);var mf=r("ytPubsub2Pubsub2SubscribedKeys")||{};v("ytPubsub2Pubsub2SubscribedKeys",mf);var nf=r("ytPubsub2Pubsub2TopicToKeys")||{};v("ytPubsub2Pubsub2TopicToKeys",nf);var of=r("ytPubsub2Pubsub2IsAsync")||{};v("ytPubsub2Pubsub2IsAsync",of);
v("ytPubsub2Pubsub2SkipSubKey",null);function S(a,b){var c=pf();c&&c.publish.call(c,a.toString(),a,b)}
function qf(a,b,c){var d=pf();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){var f=r("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(mf[e])try{if(g&&a instanceof R&&a!=d)try{var f=a.b,k=g;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!f.F){var x=new f;f.F=x.version}var A=f.F}catch(u){}if(!A||k.version!=A)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(f,Qa(k.args))}catch(u){throw u.message=
"yt.pubsub2.Data.deserialize(): "+u.message,u;}}catch(u){throw u.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+u.message,u;}b.call(c||window,g)}catch(u){Re(u)}},of[a.toString()]?r("yt.scheduler.instance")?ef(f):M(f,0):f())});
mf[e]=!0;nf[a.toString()]||(nf[a.toString()]=[]);nf[a.toString()].push(e);return e}
function rf(a){var b=pf();b&&(ta(a)&&(a=[a]),y(a,function(a){b.unsubscribeByKey(a);delete mf[a]}))}
function pf(){return r("ytPubsub2Pubsub2Instance")}
;var sf=0;function tf(a){var b=a.__yt_uid_key;b||(b=uf(),a.__yt_uid_key=b);return b}
function vf(a,b){a=H(a);b=H(b);return!!hd(a,function(a){return a===b},!0,void 0)}
function wf(a,b){var c=Lc(document,a,null,b);return c.length?c[0]:null}
function xf(){var a=document,b;Ma(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function yf(){F(document.body,"hide-players",!1);y(Kc("preserve-players"),function(a){E(a,"preserve-players")})}
var uf=r("ytDomDomGetNextId")||function(){return++sf};
v("ytDomDomGetNextId",uf);var zf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Af(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in zf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}
Af.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Af.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Af.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=r("ytEventsEventsListeners")||{};v("ytEventsEventsListeners",lb);var Bf=r("ytEventsEventsCounter")||{count:0};v("ytEventsEventsCounter",Bf);
function Cf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g;if(g=Aa(e[4])&&Aa(d))a:{g=e[4];for(var k in g)if(!(k in d)||g[k]!==d[k]){g=!1;break a}for(k in d)if(!(k in g)){g=!1;break a}g=!0}return!!e.length&&e[0]==a&&e[1]==b&&e[2]==
c&&(f||g)})}
function T(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Cf(a,b,c,d);if(e)return e;e=++Bf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Af(d);if(!hd(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Af(b);
b.currentTarget=a;return c.call(a,b)};
g=Qe(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Df()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d];return e}
function Ef(a,b,c){var d=a||document;return T(d,"click",function(a){var e=hd(a.target,function(a){return a===d||c(a)},!0);
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function Ff(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var Df=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=!1;
try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Gf(a,b,c){return Ef(a,b,function(a){return C(a,c)})}
function Hf(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function U(a){a&&("string"==typeof a&&(a=[a]),y(a,function(a){if(a in lb){var b=lb[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Df()||"boolean"==typeof b?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[a]}}))}
;var If={},Jf="ontouchstart"in document;function Kf(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return hd(c,function(a){return C(a,b)},!0,d)}
function V(a){var b="mouseover"==a.type&&"mouseenter"in If||"mouseout"==a.type&&"mouseleave"in If,c=a.type in If||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=If[b];for(var d in c.f){var e=Kf(b,d,a.target);e&&!hd(a.relatedTarget,function(a){return a==e},!0)&&c.B(d,e,b,a)}}if(b=If[a.type])for(d in b.f)(e=Kf(a.type,d,a.target))&&b.B(d,e,a.type,a)}}
T(document,"blur",V,!0);T(document,"change",V,!0);T(document,"click",V);T(document,"focus",V,!0);T(document,"mouseover",V);T(document,"mouseout",V);T(document,"mousedown",V);T(document,"keydown",V);T(document,"keyup",V);T(document,"keypress",V);T(document,"cut",V);T(document,"paste",V);Jf&&(T(document,"touchstart",V),T(document,"touchend",V),T(document,"touchcancel",V));function W(a){this.j=a;this.v={};this.D=[];this.A=[]}
h=W.prototype;h.w=function(a){return J(a,X(this))};
function X(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
h.unregister=function(){Ye(this.D);this.D.length=0;rf(this.A);this.A.length=0};
h.init=ua;h.dispose=ua;function Lf(a,b,c){a.D.push(We(b,c,a))}
function Mf(a,b,c){a.A.push(qf(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=t(c,a);b in If||(If[b]=new K);If[b].subscribe(d,e);a.v[c]=e}
function Z(a,b,c,d){if(b in If){var e=If[b];oe(e,X(a,d),a.v[c]);0>=qe(e)&&(e.dispose(),delete If[b])}delete a.v[c]}
h.J=function(a,b,c){var d=this.g(a,b);if(d&&(d=r(d))){var e=Ta(arguments,2);Sa(e,0,0,a);d.apply(null,e)}};
h.g=function(a,b){return bf(a,b)};
function Nf(a,b){$e(a,"tooltip-text",b)}
;var Of=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};v("yt.uix.widgets_",Of);Ga();var Pf=p(XMLHttpRequest)?function(){return new XMLHttpRequest}:p(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Qf(){if(!Pf)return null;var a=Pf();return"open"in a?a:null}
;function Rf(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?xa(b[f])?Ra(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
;var Sf={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Tf=!1;
function Uf(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Ge)[1]||null,e=He(a.match(Ge)[3]||null);d&&e?(d=c,c=a.match(Ge),d=d.match(Ge),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?He(c.match(Ge)[3]||null)==e&&(Number(c.match(Ge)[4]||null)||null)==(Number(a.match(Ge)[4]||null)||null):!0;for(var f in Sf)(d=L(Sf[f]))&&(c||Vf(a,f))&&(b[f]=d);if(c||Vf(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();return b}
function Vf(a,b){var c=L("CORS_HEADER_WHITELIST")||{},d=He(a.match(Ge)[3]||null);return d?(c=c[d])?Oa(c,b):!1:!0}
function Wf(a,b){var c=b.format||"JSON";a=Xf(a,b);var d=Yf(a,b),e=!1,f,g=Zf(a,function(a){if(!e){e=!0;f&&window.clearTimeout(f);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=!0;break a;default:d=!1}var g=null;if(d||400<=a.status&&500>a.status)g=$f(c,a,b.Hb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var k=b.context||m;d?b.onSuccess&&
b.onSuccess.call(k,a,g):b.onError&&b.onError.call(k,a,g);b.W&&b.W.call(k,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.ob&&0<b.timeout&&(f=M(function(){e||(e=!0,g.abort(),window.clearTimeout(f),b.ob.call(b.context||m,g))},b.timeout))}
function Xf(a,b){b.Jb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME",void 0),d=b.za;if(d){d[c]&&delete d[c];d=d||{};var e=a.split("#",2);c=e[0];e=1<e.length?"#"+e[1]:"";var f=c.split("?",2);c=f[0];f=Rf(f[1]||"");for(var g in d)f[g]=d[g];a=Ne(c,f)+e}return a}
function Yf(a,b){var c=L("XSRF_FIELD_NAME",void 0),d=L("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.H,g=L("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.Ib||He(a.match(Ge)[3]||null)&&!b.withCredentials&&He(a.match(Ge)[3]||null)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.H&&b.H[g]||(f||(f={}),f[c]=d);f&&q(e)&&(e=Rf(e),nb(e,f),e=b.rb&&"JSON"==b.rb?JSON.stringify(e):Le(e));if(!(c=e)&&(c=f)){a:{for(var l in f){f=!1;break a}f=!0}c=!f}!Tf&&
c&&"POST"!=b.method&&(Tf=!0,Re(Error("AJAX request with postData should use POST")));return e}
function $f(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?ag(b):null)d={},y(b.getElementsByTagName("*"),function(a){d[a.tagName]=bg(a)})}c&&cg(d);
return d}
function cg(a){if(Aa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Ec(a[b]);a[c]=d}else cg(a[b])}}
function ag(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function bg(a){var b="";y(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Zf(a,b,c,d,e,f,g){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Qe(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Qf();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Uf(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;function dg(a){P.call(this,1,arguments);this.b=a}
w(dg,P);function eg(a){P.call(this,1,arguments);this.b=a}
w(eg,P);function fg(a,b,c){P.call(this,3,arguments);this.h=a;this.f=b;this.b=null!=c?!!c:null}
w(fg,P);function gg(a,b,c,d,e){P.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.h=d||null;this.source=e||null}
w(gg,P);function hg(a,b,c){P.call(this,1,arguments);this.b=a;this.f=b}
w(hg,P);function ig(a,b,c,d,e,f,g){P.call(this,1,arguments);this.f=a;this.j=b;this.b=c;this.l=d||null;this.i=e||null;this.h=f||null;this.source=g||null}
w(ig,P);
var jg=new R("subscription-batch-subscribe",dg),kg=new R("subscription-batch-unsubscribe",dg),lg=new R("subscription-subscribe",gg),mg=new R("subscription-subscribe-loading",eg),ng=new R("subscription-subscribe-loaded",eg),og=new R("subscription-subscribe-success",hg),pg=new R("subscription-subscribe-external",gg),qg=new R("subscription-unsubscribe",ig),rg=new R("subscription-unsubscirbe-loading",eg),sg=new R("subscription-unsubscribe-loaded",eg),tg=new R("subscription-unsubscribe-success",eg),ug=
new R("subscription-external-unsubscribe",ig),vg=new R("subscription-enable-ypc",eg),wg=new R("subscription-disable-ypc",eg),xg=new R("subscription-prefs",fg),yg=new R("subscription-prefs-success",fg),zg=new R("subscription-prefs-failure",fg);function Ag(a){P.call(this,1,arguments)}
w(Ag,P);function Bg(a,b){P.call(this,2,arguments);this.f=a;this.b=b}
w(Bg,P);function Cg(a,b,c,d){P.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
w(Cg,P);function Dg(a,b){P.call(this,1,arguments);this.f=a;this.b=b||null}
w(Dg,P);function Eg(a){P.call(this,1,arguments)}
w(Eg,P);var Fg=new R("ypc-core-load",Ag),Gg=new R("ypc-guide-sync-success",Bg),Hg=new R("ypc-purchase-success",Cg),Ig=new R("ypc-subscription-cancel",Eg),Jg=new R("ypc-subscription-cancel-success",Dg),Kg=new R("ypc-init-subscription",Eg);var Lg=!1,Mg=[];function Ng(a){a.b?Lg?S(pg,a):S(Fg,new Ag(function(){S(Kg,new Eg(a.b))})):Og(a.f,a.i,a.h,a.source)}
function Pg(a){a.b?Lg?S(ug,a):S(Fg,new Ag(function(){S(Ig,new Eg(a.b))})):Qg(a.f,a.j,a.i,a.h,a.source)}
function Rg(a){Sg(Qa(a.b))}
function Tg(a){Ug(Qa(a.b))}
function Vg(a){Wg(a.h,a.f,a.b)}
function Xg(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&S(og,new hg(b,c,a.b.channelInfo))}
function Yg(a){var b=a.b;ib(a.f,function(a,d){S(og,new hg(d,a,b[d]))})}
function Zg(a){S(tg,new eg(a.f.itemId));a.b&&a.b.length&&($g(a.b,tg),$g(a.b,vg))}
function Og(a,b,c,d){var e=new eg(a);S(mg,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=L("PLAYBACK_ID"))&&(c.plid=d);(d=L("EVENT_ID"))&&(c.ei=d);b&&ah(b,c);Wf("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",za:f,H:c,onSuccess:function(b,c){var d=c.response;S(og,new hg(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&O("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
W:function(){S(ng,e)}})}
function Qg(a,b,c,d,e){var f=new eg(a);S(rg,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=L("PLAYBACK_ID"))&&(d.plid=a);(a=L("EVENT_ID"))&&(d.ei=a);c&&ah(c,d);Wf("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",za:g,H:d,onSuccess:function(){S(tg,f)},
W:function(){S(sg,f)}})}
function Wg(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new fg(a,b,c);Wf("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",H:d,onError:function(){S(zg,e)},
onSuccess:function(){S(yg,e)}})}}
function Sg(a){if(a.length){var b=Sa(a,0,40);S("subscription-batch-subscribe-loading");$g(b,mg);var c={};c.a=b.join(",");var d=function(){S("subscription-batch-subscribe-loaded");$g(b,ng)};
Wf("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",H:c,onSuccess:function(c,f){d();var e=f.response,k=e.id;if(xa(k)&&k.length==b.length){var l=e.channel_info_map;y(k,function(a,c){var d=b[c];S(og,new hg(d,a,l[d]))});
a.length?Sg(a):S("subscription-batch-subscribe-finished")}},
onError:function(){d();S("subscription-batch-subscribe-failure")}})}}
function Ug(a){if(a.length){var b=Sa(a,0,40);S("subscription-batch-unsubscribe-loading");$g(b,rg);var c={};c.c=b.join(",");var d=function(){S("subscription-batch-unsubscribe-loaded");$g(b,sg)};
Wf("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",H:c,onSuccess:function(){d();$g(b,tg);a.length&&Ug(a)},
onError:function(){d()}})}}
function $g(a,b){y(a,function(a){S(b,new eg(a))})}
function ah(a,b){var c=Rf(a),d;for(d in c)b[d]=c[d]}
;function bh(){var a=xf();return a?a:null}
;function ch(a,b){(a=H(a))&&a.style&&(a.style.display=b?"":"none",F(a,"hid",!b))}
function dh(a){return(a=H(a))?"none"!=a.style.display&&!C(a,"hid"):!1}
function eh(a){y(arguments,function(a){!ya(a)||a instanceof Element?ch(a,!0):y(a,function(a){eh(a)})})}
function fh(a){y(arguments,function(a){!ya(a)||a instanceof Element?ch(a,!1):y(a,function(a){fh(a)})})}
;function gh(){W.call(this,"tooltip");this.b=0;this.f={}}
w(gh,W);va(gh);h=gh.prototype;h.register=function(){Y(this,"mouseover",this.N);Y(this,"mouseout",this.G);Y(this,"focus",this.ia);Y(this,"blur",this.da);Y(this,"click",this.G);Y(this,"touchstart",this.ya);Y(this,"touchend",this.P);Y(this,"touchcancel",this.P)};
h.unregister=function(){Z(this,"mouseover",this.N);Z(this,"mouseout",this.G);Z(this,"focus",this.ia);Z(this,"blur",this.da);Z(this,"click",this.G);Z(this,"touchstart",this.ya);Z(this,"touchend",this.P);Z(this,"touchcancel",this.P);this.dispose();gh.m.unregister.call(this)};
h.dispose=function(){for(var a in this.f)this.G(this.f[a]);this.f={}};
h.N=function(a){if(!(this.b&&1E3>Ga()-this.b)){var b=parseInt(this.g(a,"tooltip-hide-timer"),10);b&&(cf(a,"tooltip-hide-timer"),window.clearTimeout(b));b=t(function(){hh(this,a);cf(a,"tooltip-show-timer")},this);
var c=parseInt(this.g(a,"tooltip-show-delay"),10)||0;b=M(b,c);$e(a,"tooltip-show-timer",b.toString());a.title&&(Nf(a,ih(this,a)),a.title="");b=Ba(a).toString();this.f[b]=a}};
h.G=function(a){var b=parseInt(this.g(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),cf(a,"tooltip-show-timer"));b=t(function(){if(a){var b=H(jh(this,a));b&&(kh(b),Tc(b),cf(a,"content-id"));b=H(jh(this,a,"arialabel"));Tc(b)}cf(a,"tooltip-hide-timer")},this);
b=M(b,50);$e(a,"tooltip-hide-timer",b.toString());if(b=this.g(a,"tooltip-text"))a.title=b;b=Ba(a).toString();delete this.f[b]};
h.ia=function(a,b){this.b=0;this.N(a,b)};
h.da=function(a){this.b=0;this.G(a)};
h.ya=function(a,b,c){c.changedTouches&&(this.b=0,(a=Kf(b,X(this),c.changedTouches[0].target))&&this.N(a,b))};
h.P=function(a,b,c){c.changedTouches&&(this.b=Ga(),(a=Kf(b,X(this),c.changedTouches[0].target))&&this.G(a))};
function lh(a,b,c){Nf(b,c);a=a.g(b,"content-id");(a=H(a))&&Xc(a,c)}
function ih(a,b){return a.g(b,"tooltip-text")||b.title}
function hh(a,b){if(b){var c=ih(a,b);if(c){var d=H(jh(a,b));if(!d){d=document.createElement("div");d.id=jh(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var k=mh(a,b),l=jh(a,b,"content");g.id=l;$e(b,"content-id",l);e.appendChild(g);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);
var n=ed(b);l=jh(a,b,"arialabel");f=document.createElement("div");D(f,X(a,"arialabel"));f.id=l;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+n:n+" "+c;Xc(f,n);b.setAttribute("aria-labelledby",l);l=bh()||document.body;l.appendChild(f);l.appendChild(d);lh(a,b,c);(c=parseInt(a.g(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",D(g,X(a,"normal-wrap")));g=C(b,X(a,"reverse"));nh(a,b,d,e,k,g)||nh(a,b,d,e,k,!g);var x=X(a,"tip-visible");
M(function(){D(d,x)},0)}}}}
function nh(a,b,c,d,e,f){F(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var k=Kd(b);f=new G((k.width-10)/2,f?k.height:0);var l=Hd(b);Xd(new G(l.x+f.x,l.y+f.y),c,g);f=Oc(window);if(1==c.nodeType)var n=Id(c);else c=c.changedTouches?c.changedTouches[0]:c,n=new G(c.clientX,c.clientY);c=Kd(d);var x=Math.floor(c.width/2);g=!!(f.height<n.y+k.height);k=!!(n.y<k.height);l=!!(n.x<x);f=!!(f.width<n.x+x);n=(c.width+3)/-2- -5;a=a.g(b,"force-tooltip-direction");if("left"==a||l)n=-5;else if("right"==a||f)n=20-c.width-
3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||k)}
function jh(a,b,c){a=X(a)+tf(b);c&&(a+="-"+c);return a}
function mh(a,b){var c=null;Ob&&C(b,X(a,"masked"))&&((c=H("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),eh(c)):(c=document.createElement("IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function kh(a){var b=H("yt-uix-tooltip-shared-mask"),c=b&&hd(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),fh(b),document.body.appendChild(b))}
;function oh(a){var b=ph();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=We("LOGGED_IN",function(b){Ye(L("LOGGED_IN_PUBSUB_KEY",void 0));Pe("LOGGED_IN",!0);a(b)});
Pe("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function ph(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=Me(a,"mode","subscribe");a=Me("/signin?context=popup","next",a);return a=Me(a,"feature","sub_button")}
v("yt.pubsub.publish",O);var qh=Object.create(null);qh.log_event="GENERIC_EVENT_LOGGING";qh.log_interaction="INTERACTION_LOGGING";v("ytLoggingTransportLogPayloadsQueue_",r("ytLoggingTransportLogPayloadsQueue_")||{});v("ytLoggingTransportTokensToCttTargetIds_",r("ytLoggingTransportTokensToCttTargetIds_")||{});v("ytLoggingTransportDispatchedStats_",r("ytLoggingTransportDispatchedStats_")||{});v("ytytLoggingTransportCapturedTime_",r("ytLoggingTransportCapturedTime_")||{});function rh(){var a=new ze;(a=a.isAvailable()?new Fe(a,"yt.innertube"):null)||(a=new Ae("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new ve(a):null;this.f=document.domain||window.location.hostname}
rh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,Ga()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(rd(b))}catch(f){return}else e=escape(b);b=this.f;cb.set(""+a,e,c,"/",void 0===b?"youtube.com":b,!1)};
rh.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=cb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
rh.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;cb.remove(""+a,"/",void 0===b?"youtube.com":b)};new rh;var sh=Ga().toString();var th;a:{if(window.crypto&&window.crypto.getRandomValues)try{var uh=Array(16),vh=new Uint8Array(16);window.crypto.getRandomValues(vh);for(var wh=0;wh<uh.length;wh++)uh[wh]=vh[wh];th=uh;break a}catch(a){}for(var xh=Array(16),yh=0;16>yh;yh++){for(var zh=Ga(),Ah=0;Ah<zh%23;Ah++)xh[yh]=Math.random();xh[yh]=Math.floor(256*Math.random())}if(sh)for(var Bh=1,Ch=0;Ch<sh.length;Ch++)xh[Bh%16]=xh[Bh%16]^xh[(Bh-1)%16]/4^sh.charCodeAt(Ch),Bh++;th=xh}
for(var Dh=th,Eh=[],Fh=0;Fh<Dh.length;Fh++)Eh.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Dh[Fh]&63));v("yt.logging.screen.getRootVeType",function(a){a=void 0===a?0:a;a=void 0===a?0:a;return L(0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a,void 0)});
v("yt.logging.screen.getCurrentCsn",function(a){var b=a=void 0===a?0:a;b=void 0===b?0:b;(b=L(0==b?"client-screen-nonce":"client-screen-nonce."+b))||0!=a||(b=L("EVENT_ID"));return b?b:null});function Gh(){W.call(this,"button");this.b=null;this.h=[];this.f={}}
w(Gh,W);va(Gh);h=Gh.prototype;h.register=function(){Y(this,"click",this.Ba);Y(this,"keydown",this.ma);Y(this,"keypress",this.na);Lf(this,"page-scroll",this.ab)};
h.unregister=function(){Z(this,"click",this.Ba);Z(this,"keydown",this.ma);Z(this,"keypress",this.na);Hh(this);this.f={};Gh.m.unregister.call(this)};
h.Ba=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
h.ma=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=Ih(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=Yc(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.ib;else"table"==e&&(f=this.hb);f&&Jh(this,a,b,c,t(f,this))}}};
h.ab=function(){var a=this.f,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=J(b.activeButtonNode||b.parentNode,X(this));if(void 0==d||void 0==b)break;Kh(this,d,b,!0)}};
function Jh(a,b,c,d,e){var f=dh(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=Lh(a,c)){if(p(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var k=void 0===k?{}:k;var l=void 0===l?"":l;var n=void 0===n?window:n;n=n.location;k=Ne(b.href,k)+l;k instanceof xc||k instanceof xc||(k=k.U?k.T():String(k),zc.test(k)||(k="about:invalid#zClosurez"),k=Ac(k));k instanceof xc&&k.constructor===xc&&k.f===yc?k=k.b:(wa(k),
k="type_error:SafeUrl");n.href=k}else Hf(b)}else g&&Mh(a,b);else f?27==d.keyCode?(Lh(a,c),Mh(a,b)):e(b,c,d):(k=C(b,X(a,"reverse"))?38:40,d.keyCode==k&&(Hf(b),d.preventDefault()))}
h.na=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=Ih(this,a),dh(a)&&c.preventDefault())};
function Lh(a,b){var c=X(a,"menu-item-highlight"),d=I(c,b);d&&E(d,c);return d}
function Nh(a,b,c){D(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+Ba(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
h.hb=function(a,b,c){var d=Lh(this,b);if(d){var e=wf("table",b);b=Lc(document,"td",null,e);d=Oh(d,b,Lc(document,"td",null,wf("tr",e)).length,c);-1!=d&&(Nh(this,a,b[d]),c.preventDefault())}};
h.ib=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Lh(this,b);d&&(b=Ka(Lc(document,"li",null,b),dh),Nh(this,a,b[Oh(d,b,1,c)]),c.preventDefault())}};
function Oh(a,b,c,d){var e=b.length;a=Ja(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Ph(a,b){var c=b.iframeMask;c||(c=document.createElement("IFRAME"),c.src='javascript:""',c.className=X(a,"menu-mask"),fh(c),b.iframeMask=c);return c}
function Kh(a,b,c,d){var e=J(b,X(a,"group")),f=!!a.g(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,k=Md(b);if(C(b,X(a,"reverse"))){f=8;g=9;k=k.top+"px";try{c.style.maxHeight=k}catch(x){}}C(b,"flip")&&(C(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var l;a.g(b,"button-has-sibling-menu")?l=Fd(e):a.g(b,"button-menu-root-container")&&(l=Qh(a,b));B&&!$b("8")&&(l=null);if(l){var n=Md(l);n=new xd(-n.top,n.left,n.top,-n.left)}l=new G(0,1);C(b,X(a,"center-menu"))&&(l.x-=Math.round((Kd(c).width-Kd(b).width)/
2));d&&(l.y+=Qc(document).y);if(a=Ph(a,b))b=Kd(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Vd(e,f,a,g,l,n,197),d&&zd(a,"position","fixed");Vd(e,f,c,g,l,n,197)}
function Qh(a,b){if(a.g(b,"button-menu-root-container")){var c=a.g(b,"button-menu-root-container");return J(b,c)}return document.body}
h.Da=function(a){if(a){var b=Ih(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.g(a,"button-has-sibling-menu")?c=a.parentNode:c=Qh(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Ph(this,a);d&&c.appendChild(d);(c=!!this.g(a,"button-menu-fixed"))&&(this.f[tf(a).toString()]=b);Kh(this,a,b,c);Ze("yt-uix-button-menu-before-show",a,b);eh(b);d&&eh(d);
this.J(a,"button-menu-action",!0);D(a,X(this,"active"));b=t(this.Ca,this,a,!1);d=t(this.Ca,this,a,!0);c=t(this.tb,this,a,void 0);this.b&&Ih(this,this.b)==Ih(this,a)||Hh(this);O("yt-uix-button-menu-show",a);U(this.h);this.h=[T(document,"click",d),T(document,"contextmenu",b),T(window,"resize",c)];this.b=a}}};
function Mh(a,b){if(b){var c=Ih(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");fh(c);a.J(b,"button-menu-action",!1);var d=Ph(a,b),e=tf(c).toString();delete a.f[e];M(function(){d&&d.parentNode&&(fh(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=J(b,X(a,"group"));
var f=[X(a,"active")];e&&f.push(X(a,"group-active"));sc(b,f);O("yt-uix-button-menu-hide",b);U(a.h);a.h.length=0}}
h.tb=function(a,b){var c=Ih(this,a);if(c){b&&(b instanceof Bc?c.innerHTML=Dc(b):Xc(c,b));var d=!!this.g(a,"button-menu-fixed");Kh(this,a,c,d)}};
h.Ca=function(a,b,c){c=Ff(c);var d=J(c,X(this));if(d){d=Ih(this,d);var e=Ih(this,a);if(d==e)return}d=J(c,X(this,"menu"));e=d==Ih(this,a);var f=C(c,X(this,"menu-item")),g=C(c,X(this,"menu-close"));if(!d||e&&(f||g))Mh(this,a),d&&b&&this.g(a,"button-menu-indicate-selected")&&((a=I(X(this,"content"),a))&&Xc(a,ed(c)),Rh(this,d,c))};
function Rh(a,b,c){var d=X(a,"menu-item-selected");y(Kc(d,b),function(a){E(a,d)});
D(c.parentNode,d)}
function Ih(a,b){if(!b.widgetMenu){var c=a.g(b,"button-menu-id");c=c&&H(c);var d=X(a,"menu");c?rc(c,[d,X(a,"menu-external")]):c=I(d,b);b.widgetMenu=c}return b.widgetMenu}
h.isToggled=function(a){return C(a,X(this,"toggled"))};
h.toggle=function(a){if(this.g(a,"button-toggle")){var b=J(a,X(this,"group")),c=X(this,"toggled"),d=C(a,c);if(b&&this.g(b,"button-toggle-group")){var e=this.g(b,"button-toggle-group");y(Kc(X(this),b),function(b){b!=a||"optional"==e&&d?(E(b,c),b.removeAttribute("aria-pressed")):(D(a,c),b.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),uc(a,c)}};
h.click=function(a){if(Ih(this,a)){var b=Ih(this,a);if(b){var c=J(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(Mh(this,c),M(t(this.Da,this,a),1)):dh(b)?Mh(this,a):this.Da(a)}a.focus()}this.J(a,"button-action")};
function Hh(a){a.b&&Mh(a,a.b)}
;function Sh(a){W.call(this,a);this.h=null}
w(Sh,W);h=Sh.prototype;h.w=function(a){var b=W.prototype.w.call(this,a);return b?b:a};
h.register=function(){Lf(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
h.dispose=function(){Th(this);Sh.m.dispose.call(this)};
h.g=function(a,b){var c=Sh.m.g.call(this,a,b);return c?c:(c=Sh.m.g.call(this,a,"card-config"))&&(c=r(c))&&c[b]?c[b]:null};
h.show=function(a){var b=this.w(a);if(b){D(b,X(this,"active"));var c=Uh(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Vh(this,a,c);var d=X(this,"card-visible"),e=this.g(a,"card-delegate-show")&&this.g(b,"card-action");this.J(b,"card-action",a);this.h=a;fh(c);M(t(function(){e||(eh(c),O("yt-uix-card-show",b,a,c));Wh(c);D(c,d);O("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Uh(a,b,c){var d=c||b,e=X(a,"card");c=Xh(a,d);var f=H(X(a,"card")+tf(d));if(f)return a=I(X(a,"card-body"),f),Wc(a,c)||(Tc(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+tf(d);f.className=e;(d=a.g(d,"card-class"))&&rc(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.g(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Tc(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Vh(a,b,c){var d=a.g(b,"orientation")||"horizontal",e=I(X(a,"anchor"),b)||b,f=a.g(b,"position"),g=!!a.g(b,"force-position"),k=a.g(b,"position-fixed");d="horizontal"==d;var l="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==f;if(n&&l){var x=13;var A=8}else n&&!l?(x=12,A=9):!n&&l?(x=9,A=12):(x=8,A=13);var u=Nd(document.body);f=Nd(b);u!=f&&(x^=4);if(d){f=b.offsetHeight/2-12;var Q=new G(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,Q=new G(b.offsetWidth+6,-12);var N=Kd(c);f=
Math.min(f,(d?N.height:N.width)-24-6);6>f&&(f=6,d?Q.y+=12-b.offsetHeight/2:Q.x+=12-b.offsetWidth/2);N=null;g||(N=10);b=X(a,"card-flip");a=X(a,"card-reverse");F(c,b,n);F(c,a,l);N=Vd(e,x,c,A,Q,null,N);!g&&N&&(N&48&&(n=!n,x^=4,A^=4),N&192&&(l=!l,x^=1,A^=1),F(c,b,n),F(c,a,l),Vd(e,x,c,A,Q));k&&(e=parseInt(c.style.top,10),g=Qc(document).y,zd(c,"position","fixed"),zd(c,"top",e-g+"px"));u&&(c.style.right="",e=Md(c),e.left=e.left||parseInt(c.style.left,10),g=Oc(window),c.style.left="",c.style.right=g.width-
e.left-e.width+"px");e=I("yt-uix-card-body-arrow",c);g=I("yt-uix-card-border-arrow",c);d=d?l?"top":"bottom":!u&&n||u&&!n?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";l=I("yt-uix-card-arrow",c);n=I("yt-uix-card-arrow-background",c);l&&n&&(c="right"==d?Kd(c).width-f-13:f+11,f=c/Math.sqrt(2),l.style.left=c+"px",l.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")}
h.hide=function(a){if(a=this.w(a)){var b=H(X(this,"card")+tf(a));b&&(E(a,X(this,"active")),E(b,X(this,"card-visible")),fh(b),this.h=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Tc(b.cardMask),b.cardMask=null))}};
function Th(a){a.h&&a.hide(a.h)}
h.sb=function(a,b){var c=this.w(a);if(c){if(b){var d=Xh(this,c);if(!d)return;b instanceof Bc?d.innerHTML=Dc(b):Xc(d,b)}C(c,X(this,"active"))&&(c=Uh(this,a,c),Vh(this,a,c),eh(c),Wh(c))}};
h.isActive=function(a){return(a=this.w(a))?C(a,X(this,"active")):!1};
function Xh(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.g(b,"card-id"))?H(c):I(d,b))||(c=document.createElement("div"));var f=c;E(f,d);D(f,e);b.cardContentNode=c}return c}
function Wh(a){var b=a.cardMask;b||(b=document.createElement("IFRAME"),b.src='javascript:""',rc(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Yh(){W.call(this,"kbd-nav")}
var Zh;w(Yh,W);va(Yh);h=Yh.prototype;h.register=function(){Y(this,"keydown",this.ka);Lf(this,"yt-uix-kbd-nav-move-in",this.sa);Lf(this,"yt-uix-kbd-nav-move-in-to",this.jb);Lf(this,"yt-uix-kbd-move-next",this.ta);Lf(this,"yt-uix-kbd-nav-move-to",this.L)};
h.unregister=function(){Z(this,"keydown",this.ka);U(Zh)};
h.ka=function(a,b,c){var d=c.keyCode;if(a=J(a,X(this)))switch(d){case 13:case 32:this.sa(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=wc(a,"kbdNavMoveOut");!c;){c=J(a.parentElement,X(this));if(!c)break a;c=wc(c,"kbdNavMoveOut")}c=H(c);this.L(c);O("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&C(a,X(this,"list")))switch(d){case 40:this.ta(b,a);break;case 38:d=document.activeElement==a,a=$h(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),ai(this,a[b]))}c.preventDefault()}};
h.sa=function(a){var b=wc(a,"kbdNavMoveIn");b=H(b);bi(this,a,b);this.L(b)};
h.jb=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}bi(this,d,a);this.L(a)};
h.L=function(a){if(a)if(bd(a))a.focus();else{var b=Yc(a,function(a){return Vc(a)?bd(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function bi(a,b,c){if(b&&c)if(D(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,vc&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
h.ta=function(a,b){var c=document.activeElement==b,d=$h(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),ai(this,d[c]))};
function ai(a,b){if(b){var c=gd(b,"LI");c&&(D(c,X(a,"highlight")),Zh=T(b,"blur",t(function(a){E(a,X(this,"highlight"));U(Zh)},a,c)))}}
function $h(a){if("UL"!=a.tagName.toUpperCase())return[];a=Ka(Uc(a),function(a){return"LI"==a.tagName.toUpperCase()});
return Ka(La(a,function(a){return dh(a)?Yc(a,function(a){return Vc(a)?bd(a):!1}):!1}),function(a){return!!a})}
;function ci(){W.call(this,"menu");this.f=this.b=null;this.h={};this.l={};this.i=null}
w(ci,W);va(ci);function di(a){var b=ci.u();if(C(a,X(b)))return a;var c=b.w(a);return c?c:J(a,X(b,"content"))==b.b?b.f:null}
h=ci.prototype;h.register=function(){Y(this,"click",this.ja);Y(this,"mouseenter",this.Ya);Lf(this,"page-scroll",this.bb);Lf(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.w(a);ei(this,a)});
this.i=new K};
h.unregister=function(){Z(this,"click",this.ja);this.f=this.b=null;U(Ua(jb(this.h)));this.h={};ib(this.l,function(a){Tc(a)},this);
this.l={};nc(this.i);this.i=null;ci.m.unregister.call(this)};
h.ja=function(a,b,c){a&&(b=fi(this,a),!b.disabled&&vf(c.target,b)&&gi(this,a))};
h.Ya=function(a,b,c){a&&C(a,X(this,"hover"))&&vf(c.target,fi(this,a))&&gi(this,a,!0)};
h.bb=function(){this.b&&this.f&&hi(this,this.f,this.b)};
function hi(a,b,c){var d=ii(a,b);if(d){var e=Kd(c);if(e instanceof Gc){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Jd(e,!0);d.style.height=Jd(f,!0)}c==a.b&&(e=9,f=8,C(b,X(a,"reversed"))&&(e^=1,f^=1),C(b,X(a,"flipped"))&&(e^=4,f^=4),a=new G(0,1),d&&Vd(b,e,d,f,a,null,197),Vd(b,e,c,f,a,null,197))}
function gi(a,b,c){ji(a,b)&&!c?ei(a,b):(ki(a,b),!a.b||vf(b,a.b)?a.Ea(b):ne(a.i,t(a.Ea,a,b)))}
h.Ea=function(a){if(a){var b=li(this,a);if(b){Ze("yt-uix-menu-before-show",a,b);this.b?vf(a,this.b)||ei(this,this.f):(this.f=a,this.b=b,C(a,X(this,"sibling-content"))||(Tc(b),document.body.appendChild(b)),b.style.minWidth=fi(this,a).offsetWidth-2+"px");var c=ii(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);E(b,X(this,"content-hidden"));hi(this,a,b);rc(fi(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);O("yt-uix-menu-show",a);mi(b);ni(this,a);O("yt-uix-kbd-nav-move-in-to",
b);var d=t(this.vb,this,a),e=t(this.fb,this,a);c=Ba(a).toString();this.h[c]=[T(b,"click",e),T(document,"click",d)];C(a,X(this,"indicate-selected"))&&(d=t(this.gb,this,a),this.h[c].push(T(b,"click",d)));C(a,X(this,"hover"))&&(a=t(this.Za,this,a),this.h[c].push(T(document,"mousemove",a)))}}};
h.Za=function(a,b){var c=Ff(b);c&&(vf(c,fi(this,a))||oi(this,c)||pi(this,a))};
h.vb=function(a,b){var c=Ff(b);if(c){if(oi(this,c)){var d=J(c,X(this,"content")),e=gd(c,"LI");e&&d&&Wc(d,e)&&Ze("yt-uix-menu-item-clicked",c);c=J(c,X(this,"close-on-select"));if(!c)return;d=di(c)}ei(this,d||a)}};
function ki(a,b){if(b){var c=J(b,X(a,"content"));c&&y(Kc(X(a),c),function(a){!vf(a,b)&&ji(this,a)&&pi(this,a)},a)}}
function ei(a,b){if(b){var c=[];c.push(b);var d=li(a,b);d&&(d=Kc(X(a),d),d=Qa(d),c=c.concat(d),y(c,function(a){ji(this,a)&&pi(this,a)},a))}}
function pi(a,b){if(b){var c=li(a,b);sc(fi(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);D(c,X(a,"content-hidden"));var d=li(a,b);d&&Mc(d,{"aria-expanded":"false"});(d=ii(a,b))&&d.parentNode&&Tc(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.i&&a.i.B("ROOT_MENU_REMOVED"));O("yt-uix-menu-hide",b);c=Ba(b).toString();U(a.h[c]);delete a.h[c]}}
h.fb=function(a,b){var c=Ff(b);c&&qi(this,a,c)};
h.gb=function(a,b){var c=Ff(b);if(c){var d=fi(this,a);if(d&&(c=gd(c,"LI")))if(c=ed(c).trim(),d.hasChildNodes()){var e=Gh.u();(d=I(X(e,"content"),d))&&Xc(d,c)}else Xc(d,c)}};
function ni(a,b){var c=li(a,b);if(c){y(c.children,function(a){"LI"==a.tagName&&Mc(a,{role:"menuitem"})});
Mc(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ba(c),c.id=d);(c=fi(a,b))&&Mc(c,{"aria-controls":d})}}
function qi(a,b,c){var d=li(a,b);d&&C(b,X(a,"checked"))&&(a=gd(c,"LI"))&&(a=I("yt-ui-menu-item-checked-hid",a))&&(y(Kc("yt-ui-menu-item-checked",d),function(a){tc(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),tc(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function ji(a,b){var c=li(a,b);return c?!C(c,X(a,"content-hidden")):!1}
function mi(a){y(Lc(document,"UL",null,a),function(a){a.tabIndex=0;var b=Yh.u();rc(a,[X(b),X(b,"list")])})}
function li(a,b){var c=bf(b,"menu-content-id");return c&&(c=H(c))?(rc(c,[X(a,"content"),X(a,"content-external")]),c):b==a.f?a.b:I(X(a,"content"),b)}
function ii(a,b){var c=Ba(b).toString(),d=a.l[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];y(qc(b),function(a){e.push(a+"-mask")});
rc(d,e);a.l[c]=d}return d||null}
function fi(a,b){return I(X(a,"trigger"),b)}
function oi(a,b){return vf(b,a.b)||vf(b,a.f)}
;function ri(){Sh.call(this,"clickcard");this.b={};this.f={}}
w(ri,Sh);va(ri);h=ri.prototype;h.register=function(){ri.m.register.call(this);Y(this,"click",this.ga,"target");Y(this,"click",this.fa,"close")};
h.unregister=function(){ri.m.unregister.call(this);Z(this,"click",this.ga,"target");Z(this,"click",this.fa,"close");for(var a in this.b)U(this.b[a]);this.b={};for(a in this.f)U(this.f[a]);this.f={}};
h.ga=function(a,b,c){c.preventDefault();b=gd(c.target,"button");if(!b||!b.disabled){if(b=this.g(a,"card-target"))a=document,a=q(b)?a.getElementById(b):b;b=this.w(a);this.g(b,"disabled")||(C(b,X(this,"active"))?(this.hide(a),E(b,X(this,"active"))):(this.show(a),D(b,X(this,"active"))))}};
h.show=function(a){ri.m.show.call(this,a);var b=this.w(a),c=Ba(a).toString();if(!bf(b,"click-outside-persists")){if(this.b[c])return;b=T(document,"click",t(this.ha,this,a));var d=T(window,"blur",t(this.ha,this,a));this.b[c]=[b,d]}a=T(window,"resize",t(this.sb,this,a,void 0));this.f[c]=a};
h.hide=function(a){ri.m.hide.call(this,a);a=Ba(a).toString();var b=this.b[a];b&&(U(b),this.b[a]=null);if(b=this.f[a])U(b),delete this.f[a]};
h.ha=function(a,b){var c="yt-uix"+(this.j?"-"+this.j:"")+"-card",d=null;b.target&&(d=J(b.target,c)||J(di(b.target),c));(d=d||J(document.activeElement,c)||J(di(document.activeElement),c))||this.hide(a)};
h.fa=function(a){(a=J(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function si(){Sh.call(this,"hovercard")}
w(si,Sh);va(si);h=si.prototype;h.register=function(){Y(this,"mouseenter",this.oa,"target");Y(this,"mouseleave",this.qa,"target");Y(this,"mouseenter",this.pa,"card");Y(this,"mouseleave",this.ra,"card")};
h.unregister=function(){Z(this,"mouseenter",this.oa,"target");Z(this,"mouseleave",this.qa,"target");Z(this,"mouseenter",this.pa,"card");Z(this,"mouseleave",this.ra,"card")};
h.oa=function(a){if(ti!=a){ti&&(this.hide(ti),ti=null);var b=t(this.show,this,a),c=parseInt(this.g(a,"delay-show"),10);b=M(b,-1<c?c:200);$e(a,"card-timer",b.toString());ti=a;a.alt&&($e(a,"card-alt",a.alt),a.alt="");a.title&&($e(a,"card-title",a.title),a.title="")}};
h.qa=function(a){var b=parseInt(this.g(a,"card-timer"),10);window.clearTimeout(b);this.w(a).isCardHidable=!0;b=parseInt(this.g(a,"delay-hide"),10);b=-1<b?b:200;M(t(this.cb,this,a),b);if(b=this.g(a,"card-alt"))a.alt=b;if(b=this.g(a,"card-title"))a.title=b};
h.cb=function(a){this.w(a).isCardHidable&&(this.hide(a),ti=null)};
h.pa=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
h.ra=function(a){a&&this.hide(a.cardTargetNode)};
var ti=null;function ui(a,b,c,d,e,f){this.b=a;this.v=null;this.h=I("yt-dialog-fg",this.b)||this.b;if(a=I("yt-dialog-title",this.h)){var g="yt-dialog-title-"+Ba(this.h);a.setAttribute("id",g);this.h.setAttribute("aria-labelledby",g)}this.h.setAttribute("tabindex","-1");this.R=I("yt-dialog-focus-trap",this.b);this.Aa=!1;this.i=new K;this.A=[];this.A.push(Gf(this.b,t(this.kb,this),"yt-dialog-dismiss"));this.A.push(T(this.R,"focus",t(this.Xa,this),!0));vi(this);this.ub=b;this.Ga=c;this.Fa=d;this.D=e;this.Ja=f;this.l=
this.j=null}
var wi={LOADING:"loading",yb:"content",Fb:"working"};function xi(a,b){a.M()||a.i.subscribe("post-all",b)}
function vi(a){a=I("yt-dialog-fg-content",a.b);var b=[];ib(wi,function(a){b.push("yt-dialog-show-"+a)});
sc(a,b);D(a,"yt-dialog-show-content")}
h=ui.prototype;
h.show=function(){if(!this.M()){this.v=document.activeElement;if(!this.Fa){this.f||(this.f=H("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=Oc(a).height,Pc(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.f.style.height=c+"px";eh(this.f)}this.la();c=yi(this);zi(c);this.j=T(document,"keydown",t(this.eb,this));c=this.b;d=We("player-added",this.la,this);$e(c,"player-ready-pubsub-key",d);this.Ga&&(this.l=T(document,"click",t(this.qb,this)));eh(this.b);this.h.setAttribute("tabindex","0");Ai(this);this.D||D(document.body,"yt-dialog-active");Hh(Gh.u());Th(ri.u());Th(si.u());O("yt-ui-dialog-show-complete",this)}};
function Bi(){return Ma(Kc("yt-dialog"),function(a){return dh(a)})}
h.la=function(){if(!this.Ja){var a=this.b;F(document.body,"hide-players",!0);a&&F(a,"preserve-players",!0)}};
function yi(a){var b=Lc(document,"iframe",null,a.b);y(b,function(a){var b=bf(a,"onload");b&&(b=r(b))&&T(a,"load",b);if(b=bf(a,"src"))a.src=b},a);
return Qa(b)}
function zi(a){y(document.getElementsByTagName("iframe"),function(b){-1==Ja(a,b)&&D(b,"iframe-hid")})}
function Ci(){y(Kc("iframe-hid"),function(a){E(a,"iframe-hid")})}
h.kb=function(a){a=a.currentTarget;a.disabled||(a=bf(a,"action")||"",this.dismiss(a))};
h.dismiss=function(a){if(!this.M()){this.i.B("pre-all");this.i.B("pre-"+a);fh(this.b);Th(ri.u());Th(si.u());this.h.setAttribute("tabindex","-1");Bi()||(fh(this.f),this.D||E(document.body,"yt-dialog-active"),yf(),Ci());this.j&&(U(this.j),this.j=null);this.l&&(U(this.l),this.l=null);var b=this.b;if(b){var c=bf(b,"player-ready-pubsub-key");c&&(Ye(c),cf(b,"player-ready-pubsub-key"))}this.i.B("post-all");O("yt-ui-dialog-hide-complete",this);"cancel"==a&&O("yt-ui-dialog-cancelled",this);this.i&&this.i.B("post-"+
a);this.v&&this.v.focus()}};
h.setTitle=function(a){Xc(I("yt-dialog-title",this.b),a)};
h.eb=function(a){M(t(function(){this.ub||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&C(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
h.qb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
h.M=function(){return this.Aa};
h.dispose=function(){dh(this.b)&&this.dismiss("dispose");U(this.A);this.A.length=0;M(t(function(){this.v=null},this),0);
this.R=this.h=null;this.i.dispose();this.i=null;this.Aa=!0};
h.Xa=function(a){a.stopPropagation();Ai(this)};
function Ai(a){M(t(function(){this.h&&this.h.focus()},a),0)}
v("yt.ui.Dialog",ui);function Di(){W.call(this,"overlay");this.i=this.f=this.h=this.b=null}
w(Di,W);va(Di);h=Di.prototype;h.register=function(){Y(this,"click",this.X,"target");Y(this,"click",this.hide,"close");Ei(this)};
h.unregister=function(){Di.m.unregister.call(this);Z(this,"click",this.X,"target");Z(this,"click",this.hide,"close");this.i&&(Ye(this.i),this.i=null);this.f&&(U(this.f),this.f=null)};
h.X=function(a){if(!this.b||!dh(this.b.b)){var b=this.w(a);a=Fi(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.g(b,"disable-shortcuts")||!1,d=!!this.g(b,"disable-outside-click-dismiss")||!1;this.b=new ui(a,c);this.h=b;var e=I("yt-dialog-fg",a);if(e){var f=this.g(b,"overlay-class")||"",g=this.g(b,"overlay-style")||"default",k=this.g(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,k));rc(e,f)}this.b.show();O("yt-uix-kbd-nav-move-to",e||a);Ei(this);c||
d||(c=t(function(a){C(a.target,"yt-dialog-base")&&Gi(this)},this),this.f=T(I("yt-dialog-base",a),"click",c));
this.J(b,"overlay-shown");O("yt-uix-overlay-shown",b)}}};
function Ei(a){a.i||(a.i=We("yt-uix-overlay-hide",Hi));a.b&&xi(a.b,function(){var a=Di.u();a.h=null;a.b.dispose();a.b=null})}
function Gi(a){if(a.b){var b=a.h;a.b.dismiss("overlayhide");b&&a.J(b,"overlay-hidden");a.h=null;a.f&&(U(a.f),a.f=null);a.b=null}}
function Fi(a,b){var c;if(a)if(c=I("yt-dialog",a)){var d=H("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=J(b,"yt-dialog"));return c}
function Ii(){var a=Di.u();if(a.h)a=I("yt-dialog-fg-content",a.h.overlayContentNode);else a:{if(a=Kc("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=J(a[b],"yt-dialog");if(dh(c)){a=a[b];break a}}a=null}return a}
h.hide=function(a){a&&a.disabled||O("yt-uix-overlay-hide")};
function Hi(){Gi(Di.u())}
h.show=function(a){this.X(a)};var Ji={},Ki=[];function Li(a){a=J(a,"yt-uix-button-subscription-container");return I("yt-dialog",I("unsubscribe-confirmation-overlay-container",a))}
function Mi(a,b){U(Ki);Ki.length=0;Ji[b]||(Ji[b]=Li(a));Di.u().show(Ji[b]);var c=Ii();return new Yd(function(a){Ki.push(Gf(c,function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function Ni(){var a=L("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!L("SESSION_INDEX")&&!L("LOGGED_IN"))}
;function Oi(){W.call(this,"subscription-button")}
w(Oi,W);va(Oi);Oi.prototype.register=function(){Y(this,"click",this.Y);Mf(this,mg,this.va);Mf(this,ng,this.ua);Mf(this,og,this.nb);Mf(this,rg,this.va);Mf(this,sg,this.ua);Mf(this,tg,this.pb);Mf(this,vg,this.mb);Mf(this,wg,this.lb)};
Oi.prototype.unregister=function(){Z(this,"click",this.Y);Oi.m.unregister.call(this)};
Oi.prototype.isSubscribed=function(a){return!!this.g(a,"is-subscribed")};
var Pi={Z:"hover-enabled",Ha:"yt-uix-button-subscribe",Ia:"yt-uix-button-subscribed",wb:"ypc-enabled",Ka:"yt-uix-button-subscription-container",La:"yt-subscription-button-disabled-mask-container"},Qi={xb:"channel-external-id",Ma:"subscriber-count-show-when-subscribed",Na:"subscriber-count-tooltip",Oa:"subscriber-count-title",zb:"href",Ab:"insecure",aa:"is-subscribed",Bb:"parent-url",Cb:"clicktracking",Pa:"show-unsub-confirm-dialog",Db:"show-unsub-confirm-time-frame",Qa:"style-type",ba:"subscribed-timestamp",
ca:"subscription-id",Eb:"target",Ra:"ypc-enabled"};h=Oi.prototype;h.Y=function(a){var b=this.g(a,"href"),c=this.g(a,"insecure");if(b)a=this.g(a,"target")||"_self",window.open(b,a);else if(!c)if(Ni()){b=this.g(a,"channel-external-id");c=this.g(a,"clicktracking");var d=Ri(this,a),e=this.g(a,"parent-url");if(this.g(a,"is-subscribed")){var f=this.g(a,"subscription-id"),g=new ig(b,f,d,a,c,e);Si(this,a)?Mi(a,b).then(function(){S(qg,g)}):S(qg,g)}else S(lg,new gg(b,d,c,e))}else Ti(this,a)};
h.va=function(a){this.I(a.b,this.wa,!0)};
h.ua=function(a){this.I(a.b,this.wa,!1)};
h.nb=function(a){this.I(a.b,this.xa,!0,a.f)};
h.pb=function(a){this.I(a.b,this.xa,!1)};
h.mb=function(a){this.I(a.b,this.Wa)};
h.lb=function(a){this.I(a.b,this.Va)};
h.xa=function(a,b,c){b?($e(a,Qi.aa,"true"),c&&$e(a,Qi.ca,c),this.g(a,Qi.Pa)&&(b=new lc,$e(a,Qi.ba,(b.getTime()/1E3).toString()))):(cf(a,Qi.aa),cf(a,Qi.ba),cf(a,Qi.ca));Ui(this,a)};
function Ri(a,b){if(!a.g(b,"ypc-enabled"))return null;var c=a.g(b,"ypc-item-type"),d=a.g(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
h.wa=function(a,b){var c=J(a,Pi.Ka);F(c,Pi.La,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Ui(a,b){var c=a.g(b,Qi.Qa),d=!!a.g(b,"is-subscribed");c="-"+c;var e=Pi.Ia+c;F(b,Pi.Ha+c,!d);F(b,e,d);a.g(b,Qi.Na)&&!a.g(b,Qi.Ma)&&(c=X(gh.u()),F(b,c,!d),b.title=d?"":a.g(b,Qi.Oa));d?M(function(){D(b,Pi.Z)},1E3):E(b,Pi.Z)}
h.Wa=function(a){var b=!!this.g(a,"ypc-item-type"),c=!!this.g(a,"ypc-item-id");!this.g(a,"ypc-enabled")&&b&&c&&(D(a,"ypc-enabled"),$e(a,Qi.Ra,"true"))};
h.Va=function(a){this.g(a,"ypc-enabled")&&(E(a,"ypc-enabled"),cf(a,"ypc-enabled"))};
function Vi(a,b){return Ka(Kc(X(a)),function(a){return b==this.g(a,"channel-external-id")},a)}
h.Ta=function(a,b,c){var d=Ta(arguments,2);y(a,function(a){b.apply(this,Pa(a,d))},this)};
h.I=function(a,b,c){var d=Vi(this,a);this.Ta.apply(this,Pa([d],Ta(arguments,1)))};
function Ti(a,b){var c=t(function(a){a.discoverable_subscriptions&&Pe("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.Y(b)},a);
oh(c)}
function Si(a,b){if(!a.g(b,"show-unsub-confirm-dialog"))return!1;var c=a.g(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.g(b,"subscribed-timestamp"),10),(new lc).getTime()<1E3*(c+600))?!0:!1}
;Lg=!0;Mg.push(qf(lg,Ng),qf(qg,Pg));Lg||Mg.push(qf(pg,Ng),qf(ug,Pg),qf(jg,Rg),qf(kg,Tg),qf(xg,Vg),qf(Hg,Xg),qf(Jg,Zg),qf(Gg,Yg));var Wi=Oi.u(),Xi=X(Wi);Xi in Of||(Wi.register(),Lf(Wi,"yt-uix-init-"+Xi,Wi.init),Lf(Wi,"yt-uix-dispose-"+Xi,Wi.dispose),Of[Xi]=Wi);v("yt.setConfig",Pe);v("yt.config.set",Pe);}).call(this);
