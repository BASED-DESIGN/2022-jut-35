"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{9845:function(t,e,s){s.d(e,{d:function(){return T}});const i={enabled:!1,files:{},add:function(t,e){!1!==this.enabled&&(this.files[t]=e)},get:function(t){if(!1!==this.enabled)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};const r=new class{constructor(t,e,s){const i=this;let r,n=!1,h=0,a=0;const o=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=s,this.itemStart=function(t){a++,!1===n&&void 0!==i.onStart&&i.onStart(t,h,a),n=!0},this.itemEnd=function(t){h++,void 0!==i.onProgress&&i.onProgress(t,h,a),h===a&&(n=!1,void 0!==i.onLoad&&i.onLoad())},this.itemError=function(t){void 0!==i.onError&&i.onError(t)},this.resolveURL=function(t){return r?r(t):t},this.setURLModifier=function(t){return r=t,this},this.addHandler=function(t,e){return o.push(t,e),this},this.removeHandler=function(t){const e=o.indexOf(t);return-1!==e&&o.splice(e,2),this},this.getHandler=function(t){for(let e=0,s=o.length;e<s;e+=2){const s=o[e],i=o[e+1];if(s.global&&(s.lastIndex=0),s.test(t))return i}return null}}};class n{constructor(t){this.manager=void 0!==t?t:r,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const s=this;return new Promise((function(i,r){s.load(t,i,e,r)}))}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array;function h(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}class a extends n{constructor(t){super(t)}load(t,e,s,r){void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const n=this,a=i.get(t);if(void 0!==a)return n.manager.itemStart(t),setTimeout((function(){e&&e(a),n.manager.itemEnd(t)}),0),a;const o=h("img");function l(){c(),i.add(t,this),e&&e(this),n.manager.itemEnd(t)}function u(e){c(),r&&r(e),n.manager.itemError(t),n.manager.itemEnd(t)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),"data:"!==t.slice(0,5)&&void 0!==this.crossOrigin&&(o.crossOrigin=this.crossOrigin),n.manager.itemStart(t),o.src=t,o}}const o=1001,l=[];for(let I=0;I<256;I++)l[I]=(I<16?"0":"")+I.toString(16);Math.PI,Math.PI;function u(){const t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,s=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(l[255&t]+l[t>>8&255]+l[t>>16&255]+l[t>>24&255]+"-"+l[255&e]+l[e>>8&255]+"-"+l[e>>16&15|64]+l[e>>24&255]+"-"+l[63&s|128]+l[s>>8&255]+"-"+l[s>>16&255]+l[s>>24&255]+l[255&i]+l[i>>8&255]+l[i>>16&255]+l[i>>24&255]).toUpperCase()}function c(t,e,s){return Math.max(e,Math.min(s,t))}function d(t,e){return(t%e+e)%e}function m(t,e,s){return(1-s)*t+s*e}class g{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return void 0!==e?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return void 0!==e?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,s=this.y,i=t.elements;return this.x=i[0]*e+i[3]*s+i[6],this.y=i[1]*e+i[4]*s+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(e,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y;return e*e+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,s){return void 0!==s&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const s=Math.cos(e),i=Math.sin(e),r=this.x-t.x,n=this.y-t.y;return this.x=r*s-n*i+t.x,this.y=r*i+n*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}g.prototype.isVector2=!0;class p{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,s,i,r,n,h,a,o){const l=this.elements;return l[0]=t,l[1]=i,l[2]=h,l[3]=e,l[4]=r,l[5]=a,l[6]=s,l[7]=n,l[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,s=t.elements;return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],this}extractBasis(t,e,s){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const s=t.elements,i=e.elements,r=this.elements,n=s[0],h=s[3],a=s[6],o=s[1],l=s[4],u=s[7],c=s[2],d=s[5],m=s[8],g=i[0],p=i[3],y=i[6],f=i[1],x=i[4],b=i[7],M=i[2],w=i[5],v=i[8];return r[0]=n*g+h*f+a*M,r[3]=n*p+h*x+a*w,r[6]=n*y+h*b+a*v,r[1]=o*g+l*f+u*M,r[4]=o*p+l*x+u*w,r[7]=o*y+l*b+u*v,r[2]=c*g+d*f+m*M,r[5]=c*p+d*x+m*w,r[8]=c*y+d*b+m*v,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],s=t[1],i=t[2],r=t[3],n=t[4],h=t[5],a=t[6],o=t[7],l=t[8];return e*n*l-e*h*o-s*r*l+s*h*a+i*r*o-i*n*a}invert(){const t=this.elements,e=t[0],s=t[1],i=t[2],r=t[3],n=t[4],h=t[5],a=t[6],o=t[7],l=t[8],u=l*n-h*o,c=h*a-l*r,d=o*r-n*a,m=e*u+s*c+i*d;if(0===m)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=u*g,t[1]=(i*o-l*s)*g,t[2]=(h*s-i*n)*g,t[3]=c*g,t[4]=(l*e-i*a)*g,t[5]=(i*r-h*e)*g,t[6]=d*g,t[7]=(s*a-o*e)*g,t[8]=(n*e-s*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,s,i,r,n,h){const a=Math.cos(r),o=Math.sin(r);return this.set(s*a,s*o,-s*(a*n+o*h)+n+t,-i*o,i*a,-i*(-o*n+a*h)+h+e,0,0,1),this}scale(t,e){const s=this.elements;return s[0]*=t,s[3]*=t,s[6]*=t,s[1]*=e,s[4]*=e,s[7]*=e,this}rotate(t){const e=Math.cos(t),s=Math.sin(t),i=this.elements,r=i[0],n=i[3],h=i[6],a=i[1],o=i[4],l=i[7];return i[0]=e*r+s*a,i[3]=e*n+s*o,i[6]=e*h+s*l,i[1]=-s*r+e*a,i[4]=-s*n+e*o,i[7]=-s*h+e*l,this}translate(t,e){const s=this.elements;return s[0]+=t*s[2],s[3]+=t*s[5],s[6]+=t*s[8],s[1]+=e*s[2],s[4]+=e*s[5],s[7]+=e*s[8],this}equals(t){const e=this.elements,s=t.elements;for(let i=0;i<9;i++)if(e[i]!==s[i])return!1;return!0}fromArray(t,e=0){for(let s=0;s<9;s++)this.elements[s]=t[s+e];return this}toArray(t=[],e=0){const s=this.elements;return t[e]=s[0],t[e+1]=s[1],t[e+2]=s[2],t[e+3]=s[3],t[e+4]=s[4],t[e+5]=s[5],t[e+6]=s[6],t[e+7]=s[7],t[e+8]=s[8],t}clone(){return(new this.constructor).fromArray(this.elements)}}p.prototype.isMatrix3=!0;const y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},f={h:0,s:0,l:0},x={h:0,s:0,l:0};function b(t,e,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+6*(e-t)*s:s<.5?e:s<2/3?t+6*(e-t)*(2/3-s):t}function M(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}function w(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}class v{constructor(t,e,s){return void 0===e&&void 0===s?this.set(t):this.setRGB(t,e,s)}set(t){return t&&t.isColor?this.copy(t):"number"===typeof t?this.setHex(t):"string"===typeof t&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,this}setRGB(t,e,s){return this.r=t,this.g=e,this.b=s,this}setHSL(t,e,s){if(t=d(t,1),e=c(e,0,1),s=c(s,0,1),0===e)this.r=this.g=this.b=s;else{const i=s<=.5?s*(1+e):s+e-s*e,r=2*s-i;this.r=b(r,i,t+1/3),this.g=b(r,i,t),this.b=b(r,i,t-1/3)}return this}setStyle(t){function e(e){void 0!==e&&parseFloat(e)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let t;const i=s[1],r=s[2];switch(i){case"rgb":case"rgba":if(t=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(t[1],10))/255,this.g=Math.min(255,parseInt(t[2],10))/255,this.b=Math.min(255,parseInt(t[3],10))/255,e(t[4]),this;if(t=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(t[1],10))/100,this.g=Math.min(100,parseInt(t[2],10))/100,this.b=Math.min(100,parseInt(t[3],10))/100,e(t[4]),this;break;case"hsl":case"hsla":if(t=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const s=parseFloat(t[1])/360,i=parseInt(t[2],10)/100,r=parseInt(t[3],10)/100;return e(t[4]),this.setHSL(s,i,r)}}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const t=s[1],e=t.length;if(3===e)return this.r=parseInt(t.charAt(0)+t.charAt(0),16)/255,this.g=parseInt(t.charAt(1)+t.charAt(1),16)/255,this.b=parseInt(t.charAt(2)+t.charAt(2),16)/255,this;if(6===e)return this.r=parseInt(t.charAt(0)+t.charAt(1),16)/255,this.g=parseInt(t.charAt(2)+t.charAt(3),16)/255,this.b=parseInt(t.charAt(4)+t.charAt(5),16)/255,this}return t&&t.length>0?this.setColorName(t):this}setColorName(t){const e=y[t.toLowerCase()];return void 0!==e?this.setHex(e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=M(t.r),this.g=M(t.g),this.b=M(t.b),this}copyLinearToSRGB(t){return this.r=w(t.r),this.g=w(t.g),this.b=w(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(t){const e=this.r,s=this.g,i=this.b,r=Math.max(e,s,i),n=Math.min(e,s,i);let h,a;const o=(n+r)/2;if(n===r)h=0,a=0;else{const t=r-n;switch(a=o<=.5?t/(r+n):t/(2-r-n),r){case e:h=(s-i)/t+(s<i?6:0);break;case s:h=(i-e)/t+2;break;case i:h=(e-s)/t+4}h/=6}return t.h=h,t.s=a,t.l=o,t}getStyle(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"}offsetHSL(t,e,s){return this.getHSL(f),f.h+=t,f.s+=e,f.l+=s,this.setHSL(f.h,f.s,f.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,s){return this.r=t.r+(e.r-t.r)*s,this.g=t.g+(e.g-t.g)*s,this.b=t.b+(e.b-t.b)*s,this}lerpHSL(t,e){this.getHSL(f),t.getHSL(x);const s=m(f.h,x.h,e),i=m(f.s,x.s,e),r=m(f.l,x.l,e);return this.setHSL(s,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),!0===t.normalized&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}let S;v.NAMES=y,v.prototype.isColor=!0,v.prototype.r=1,v.prototype.g=1,v.prototype.b=1;class A{constructor(t=null){this.uuid=u(),this.data=t,this.version=0}set needsUpdate(t){!0===t&&this.version++}toJSON(t){const e=void 0===t||"string"===typeof t;if(!e&&void 0!==t.images[this.uuid])return t.images[this.uuid];const s={uuid:this.uuid,url:""},i=this.data;if(null!==i){let t;if(Array.isArray(i)){t=[];for(let e=0,s=i.length;e<s;e++)i[e].isDataTexture?t.push(E(i[e].image)):t.push(E(i[e]))}else t=E(i);s.url=t}return e||(t.images[this.uuid]=s),s}}function E(t){return"undefined"!==typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!==typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!==typeof ImageBitmap&&t instanceof ImageBitmap?class{static getDataURL(t){if(/^data:/i.test(t.src))return t.src;if("undefined"==typeof HTMLCanvasElement)return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{void 0===S&&(S=h("canvas")),S.width=t.width,S.height=t.height;const s=S.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),e=S}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if("undefined"!==typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!==typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!==typeof ImageBitmap&&t instanceof ImageBitmap){const e=h("canvas");e.width=t.width,e.height=t.height;const s=e.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const i=s.getImageData(0,0,t.width,t.height),r=i.data;for(let t=0;t<r.length;t++)r[t]=255*M(r[t]/255);return s.putImageData(i,0,0),e}if(t.data){const e=t.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(255*M(e[t]/255)):e[t]=M(e[t]);return{data:e,width:t.width,height:t.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}.getDataURL(t):t.data?{data:Array.prototype.slice.call(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}A.prototype.isSource=!0;let L=0;class k extends class{addEventListener(t,e){void 0===this._listeners&&(this._listeners={});const s=this._listeners;void 0===s[t]&&(s[t]=[]),-1===s[t].indexOf(e)&&s[t].push(e)}hasEventListener(t,e){if(void 0===this._listeners)return!1;const s=this._listeners;return void 0!==s[t]&&-1!==s[t].indexOf(e)}removeEventListener(t,e){if(void 0===this._listeners)return;const s=this._listeners[t];if(void 0!==s){const t=s.indexOf(e);-1!==t&&s.splice(t,1)}}dispatchEvent(t){if(void 0===this._listeners)return;const e=this._listeners[t.type];if(void 0!==e){t.target=this;const s=e.slice(0);for(let e=0,i=s.length;e<i;e++)s[e].call(this,t);t.target=null}}}{constructor(t=k.DEFAULT_IMAGE,e=k.DEFAULT_MAPPING,s=1001,i=1001,r=1006,n=1008,h=1023,a=1009,o=1,l=3e3){super(),Object.defineProperty(this,"id",{value:L++}),this.uuid=u(),this.name="",this.source=new A(t),this.mipmaps=[],this.mapping=e,this.wrapS=s,this.wrapT=i,this.magFilter=r,this.minFilter=n,this.anisotropy=o,this.format=h,this.internalFormat=null,this.type=a,this.offset=new g(0,0),this.repeat=new g(1,1),this.center=new g(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new p,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return(new this.constructor).copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=void 0===t||"string"===typeof t;if(!e&&void 0!==t.textures[this.uuid])return t.textures[this.uuid];const s={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return"{}"!==JSON.stringify(this.userData)&&(s.userData=this.userData),e||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(300!==this.mapping)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case o:t.x=t.x<0?0:1;break;case 1002:1===Math.abs(Math.floor(t.x)%2)?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case o:t.y=t.y<0?0:1;break;case 1002:1===Math.abs(Math.floor(t.y)%2)?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){!0===t&&(this.version++,this.source.needsUpdate=!0)}}k.DEFAULT_IMAGE=null,k.DEFAULT_MAPPING=300,k.prototype.isTexture=!0;class T extends n{constructor(t){super(t)}load(t,e,s,i){const r=new k,n=new a(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(t,(function(t){r.image=t,r.needsUpdate=!0,void 0!==e&&e(r)}),s,i),r}}}}]);