var af=Object.defineProperty;var uf=(e,t,n)=>t in e?af(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Qe=(e,t,n)=>uf(e,typeof t!="symbol"?t+"":t,n);function cf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Il(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mu={exports:{}},Rl={},gu={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yr=Symbol.for("react.element"),df=Symbol.for("react.portal"),ff=Symbol.for("react.fragment"),pf=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),mf=Symbol.for("react.provider"),gf=Symbol.for("react.context"),xf=Symbol.for("react.forward_ref"),vf=Symbol.for("react.suspense"),yf=Symbol.for("react.memo"),wf=Symbol.for("react.lazy"),$o=Symbol.iterator;function Nf(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var xu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vu=Object.assign,yu={};function Cn(e,t,n){this.props=e,this.context=t,this.refs=yu,this.updater=n||xu}Cn.prototype.isReactComponent={};Cn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wu(){}wu.prototype=Cn.prototype;function $s(e,t,n){this.props=e,this.context=t,this.refs=yu,this.updater=n||xu}var Hs=$s.prototype=new wu;Hs.constructor=$s;vu(Hs,Cn.prototype);Hs.isPureReactComponent=!0;var Ho=Array.isArray,Nu=Object.prototype.hasOwnProperty,Vs={current:null},ju={key:!0,ref:!0,__self:!0,__source:!0};function Su(e,t,n){var r,l={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Nu.call(t,r)&&!ju.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:yr,type:e,key:i,ref:s,props:l,_owner:Vs.current}}function jf(e,t){return{$$typeof:yr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Js(e){return typeof e=="object"&&e!==null&&e.$$typeof===yr}function Sf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vo=/\/+/g;function ai(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sf(""+e.key):t.toString(36)}function Wr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case yr:case df:s=!0}}if(s)return s=e,l=l(s),e=r===""?"."+ai(s,0):r,Ho(l)?(n="",e!=null&&(n=e.replace(Vo,"$&/")+"/"),Wr(l,t,n,"",function(c){return c})):l!=null&&(Js(l)&&(l=jf(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(Vo,"$&/")+"/")+e)),t.push(l)),1;if(s=0,r=r===""?".":r+":",Ho(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+ai(i,a);s+=Wr(i,t,n,u,l)}else if(u=Nf(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+ai(i,a++),s+=Wr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Tr(e,t,n){if(e==null)return e;var r=[],l=0;return Wr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Cf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Qr={transition:null},kf={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Qr,ReactCurrentOwner:Vs};function Cu(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:Tr,forEach:function(e,t,n){Tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Tr(e,function(){t++}),t},toArray:function(e){return Tr(e,function(t){return t})||[]},only:function(e){if(!Js(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Cn;I.Fragment=ff;I.Profiler=hf;I.PureComponent=$s;I.StrictMode=pf;I.Suspense=vf;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kf;I.act=Cu;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vu({},e.props),l=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Vs.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Nu.call(t,u)&&!ju.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:yr,type:e.type,key:l,ref:i,props:r,_owner:s}};I.createContext=function(e){return e={$$typeof:gf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mf,_context:e},e.Consumer=e};I.createElement=Su;I.createFactory=function(e){var t=Su.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:xf,render:e}};I.isValidElement=Js;I.lazy=function(e){return{$$typeof:wf,_payload:{_status:-1,_result:e},_init:Cf}};I.memo=function(e,t){return{$$typeof:yf,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Qr.transition;Qr.transition={};try{e()}finally{Qr.transition=t}};I.unstable_act=Cu;I.useCallback=function(e,t){return pe.current.useCallback(e,t)};I.useContext=function(e){return pe.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};I.useEffect=function(e,t){return pe.current.useEffect(e,t)};I.useId=function(){return pe.current.useId()};I.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return pe.current.useMemo(e,t)};I.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};I.useRef=function(e){return pe.current.useRef(e)};I.useState=function(e){return pe.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return pe.current.useTransition()};I.version="18.3.1";gu.exports=I;var j=gu.exports;const $=Il(j),Ef=cf({__proto__:null,default:$},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf=j,Pf=Symbol.for("react.element"),Af=Symbol.for("react.fragment"),Lf=Object.prototype.hasOwnProperty,Of=Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_f={key:!0,ref:!0,__self:!0,__source:!0};function ku(e,t,n){var r,l={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Lf.call(t,r)&&!_f.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Pf,type:e,key:i,ref:s,props:l,_owner:Of.current}}Rl.Fragment=Af;Rl.jsx=ku;Rl.jsxs=ku;mu.exports=Rl;var o=mu.exports,Fi={},Eu={exports:{}},ke={},Tu={exports:{}},Pu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,L){var _=E.length;E.push(L);e:for(;0<_;){var K=_-1>>>1,ee=E[K];if(0<l(ee,L))E[K]=L,E[_]=ee,_=K;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var L=E[0],_=E.pop();if(_!==L){E[0]=_;e:for(var K=0,ee=E.length,kr=ee>>>1;K<kr;){var At=2*(K+1)-1,oi=E[At],Lt=At+1,Er=E[Lt];if(0>l(oi,_))Lt<ee&&0>l(Er,oi)?(E[K]=Er,E[Lt]=_,K=Lt):(E[K]=oi,E[At]=_,K=At);else if(Lt<ee&&0>l(Er,_))E[K]=Er,E[Lt]=_,K=Lt;else break e}}return L}function l(E,L){var _=E.sortIndex-L.sortIndex;return _!==0?_:E.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],h=1,p=null,g=3,v=!1,y=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=E)r(c),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(c)}}function x(E){if(w=!1,m(E),!y)if(n(u)!==null)y=!0,ii(C);else{var L=n(c);L!==null&&si(x,L.startTime-E)}}function C(E,L){y=!1,w&&(w=!1,f(A),A=-1),v=!0;var _=g;try{for(m(L),p=n(u);p!==null&&(!(p.expirationTime>L)||E&&!we());){var K=p.callback;if(typeof K=="function"){p.callback=null,g=p.priorityLevel;var ee=K(p.expirationTime<=L);L=e.unstable_now(),typeof ee=="function"?p.callback=ee:p===n(u)&&r(u),m(L)}else r(u);p=n(u)}if(p!==null)var kr=!0;else{var At=n(c);At!==null&&si(x,At.startTime-L),kr=!1}return kr}finally{p=null,g=_,v=!1}}var T=!1,P=null,A=-1,B=5,O=-1;function we(){return!(e.unstable_now()-O<B)}function An(){if(P!==null){var E=e.unstable_now();O=E;var L=!0;try{L=P(!0,E)}finally{L?Ln():(T=!1,P=null)}}else T=!1}var Ln;if(typeof d=="function")Ln=function(){d(An)};else if(typeof MessageChannel<"u"){var Bo=new MessageChannel,of=Bo.port2;Bo.port1.onmessage=An,Ln=function(){of.postMessage(null)}}else Ln=function(){S(An,0)};function ii(E){P=E,T||(T=!0,Ln())}function si(E,L){A=S(function(){E(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,ii(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var _=g;g=L;try{return E()}finally{g=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var _=g;g=E;try{return L()}finally{g=_}},e.unstable_scheduleCallback=function(E,L,_){var K=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?K+_:K):_=K,E){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=_+ee,E={id:h++,callback:L,priorityLevel:E,startTime:_,expirationTime:ee,sortIndex:-1},_>K?(E.sortIndex=_,t(c,E),n(u)===null&&E===n(c)&&(w?(f(A),A=-1):w=!0,si(x,_-K))):(E.sortIndex=ee,t(u,E),y||v||(y=!0,ii(C))),E},e.unstable_shouldYield=we,e.unstable_wrapCallback=function(E){var L=g;return function(){var _=g;g=L;try{return E.apply(this,arguments)}finally{g=_}}}})(Pu);Tu.exports=Pu;var If=Tu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf=j,Ce=If;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Au=new Set,er={};function Jt(e,t){gn(e,t),gn(e+"Capture",t)}function gn(e,t){for(er[e]=t,e=0;e<t.length;e++)Au.add(t[e])}var et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bi=Object.prototype.hasOwnProperty,Mf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jo={},Wo={};function zf(e){return Bi.call(Wo,e)?!0:Bi.call(Jo,e)?!1:Mf.test(e)?Wo[e]=!0:(Jo[e]=!0,!1)}function Df(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Uf(e,t,n,r){if(t===null||typeof t>"u"||Df(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,l,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ie[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ie[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ie[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ie[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ie[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ie[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ie[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ie[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ie[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ws=/[\-:]([a-z])/g;function Qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ws,Qs);ie[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ws,Qs);ie[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ws,Qs);ie[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ie.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ie[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gs(e,t,n,r){var l=ie.hasOwnProperty(t)?ie[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Uf(t,n,l,r)&&(n=null),r||l===null?zf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var lt=Rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pr=Symbol.for("react.element"),Kt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),Ks=Symbol.for("react.strict_mode"),$i=Symbol.for("react.profiler"),Lu=Symbol.for("react.provider"),Ou=Symbol.for("react.context"),Ys=Symbol.for("react.forward_ref"),Hi=Symbol.for("react.suspense"),Vi=Symbol.for("react.suspense_list"),qs=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),_u=Symbol.for("react.offscreen"),Qo=Symbol.iterator;function On(e){return e===null||typeof e!="object"?null:(e=Qo&&e[Qo]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,ui;function Bn(e){if(ui===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ui=t&&t[1]||""}return`
`+ui+e}var ci=!1;function di(e,t){if(!e||ci)return"";ci=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),s=l.length-1,a=i.length-1;1<=s&&0<=a&&l[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(l[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||l[s]!==i[a]){var u=`
`+l[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{ci=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Bn(e):""}function bf(e){switch(e.tag){case 5:return Bn(e.type);case 16:return Bn("Lazy");case 13:return Bn("Suspense");case 19:return Bn("SuspenseList");case 0:case 2:case 15:return e=di(e.type,!1),e;case 11:return e=di(e.type.render,!1),e;case 1:return e=di(e.type,!0),e;default:return""}}function Ji(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Kt:return"Portal";case $i:return"Profiler";case Ks:return"StrictMode";case Hi:return"Suspense";case Vi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ou:return(e.displayName||"Context")+".Consumer";case Lu:return(e._context.displayName||"Context")+".Provider";case Ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qs:return t=e.displayName||null,t!==null?t:Ji(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return Ji(e(t))}catch{}}return null}function Ff(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ji(t);case 8:return t===Ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Iu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bf(e){var t=Iu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ar(e){e._valueTracker||(e._valueTracker=Bf(e))}function Ru(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Iu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ol(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wi(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Go(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mu(e,t){t=t.checked,t!=null&&Gs(e,"checked",t,!1)}function Qi(e,t){Mu(e,t);var n=jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gi(e,t.type,jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ko(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gi(e,t,n){(t!=="number"||ol(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $n=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ki(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if($n(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jt(n)}}function zu(e,t){var n=jt(t.value),r=jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Du(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Du(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lr,Uu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$f=["Webkit","ms","Moz","O"];Object.keys(Jn).forEach(function(e){$f.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jn[t]=Jn[e]})});function bu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jn.hasOwnProperty(e)&&Jn[e]?(""+t).trim():t+"px"}function Fu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=bu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Hf=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qi(e,t){if(t){if(Hf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Xi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zi=null;function Xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var es=null,un=null,cn=null;function Xo(e){if(e=jr(e)){if(typeof es!="function")throw Error(N(280));var t=e.stateNode;t&&(t=bl(t),es(e.stateNode,e.type,t))}}function Bu(e){un?cn?cn.push(e):cn=[e]:un=e}function $u(){if(un){var e=un,t=cn;if(cn=un=null,Xo(e),t)for(e=0;e<t.length;e++)Xo(t[e])}}function Hu(e,t){return e(t)}function Vu(){}var fi=!1;function Ju(e,t,n){if(fi)return e(t,n);fi=!0;try{return Hu(e,t,n)}finally{fi=!1,(un!==null||cn!==null)&&(Vu(),$u())}}function nr(e,t){var n=e.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var ts=!1;if(et)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){ts=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{ts=!1}function Vf(e,t,n,r,l,i,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Wn=!1,al=null,ul=!1,ns=null,Jf={onError:function(e){Wn=!0,al=e}};function Wf(e,t,n,r,l,i,s,a,u){Wn=!1,al=null,Vf.apply(Jf,arguments)}function Qf(e,t,n,r,l,i,s,a,u){if(Wf.apply(this,arguments),Wn){if(Wn){var c=al;Wn=!1,al=null}else throw Error(N(198));ul||(ul=!0,ns=c)}}function Wt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zo(e){if(Wt(e)!==e)throw Error(N(188))}function Gf(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Zo(l),e;if(i===r)return Zo(l),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=l,r=i;else{for(var s=!1,a=l.child;a;){if(a===n){s=!0,n=l,r=i;break}if(a===r){s=!0,r=l,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=l;break}if(a===r){s=!0,r=i,n=l;break}a=a.sibling}if(!s)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Qu(e){return e=Gf(e),e!==null?Gu(e):null}function Gu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gu(e);if(t!==null)return t;e=e.sibling}return null}var Ku=Ce.unstable_scheduleCallback,ea=Ce.unstable_cancelCallback,Kf=Ce.unstable_shouldYield,Yf=Ce.unstable_requestPaint,Y=Ce.unstable_now,qf=Ce.unstable_getCurrentPriorityLevel,Zs=Ce.unstable_ImmediatePriority,Yu=Ce.unstable_UserBlockingPriority,cl=Ce.unstable_NormalPriority,Xf=Ce.unstable_LowPriority,qu=Ce.unstable_IdlePriority,Ml=null,Je=null;function Zf(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Ml,e,void 0,(e.current.flags&128)===128)}catch{}}var be=Math.clz32?Math.clz32:np,ep=Math.log,tp=Math.LN2;function np(e){return e>>>=0,e===0?32:31-(ep(e)/tp|0)|0}var Or=64,_r=4194304;function Hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~l;a!==0?r=Hn(a):(i&=s,i!==0&&(r=Hn(i)))}else s=n&~l,s!==0?r=Hn(s):i!==0&&(r=Hn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-be(t),l=1<<n,r|=e[n],t&=~l;return r}function rp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-be(i),a=1<<s,u=l[s];u===-1?(!(a&n)||a&r)&&(l[s]=rp(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function rs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xu(){var e=Or;return Or<<=1,!(Or&4194240)&&(Or=64),e}function pi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-be(t),e[t]=n}function ip(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-be(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function eo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-be(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var M=0;function Zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ec,to,tc,nc,rc,ls=!1,Ir=[],pt=null,ht=null,mt=null,rr=new Map,lr=new Map,at=[],sp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ta(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(t.pointerId)}}function In(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=jr(t),t!==null&&to(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function op(e,t,n,r,l){switch(t){case"focusin":return pt=In(pt,e,t,n,r,l),!0;case"dragenter":return ht=In(ht,e,t,n,r,l),!0;case"mouseover":return mt=In(mt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return rr.set(i,In(rr.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,lr.set(i,In(lr.get(i)||null,e,t,n,r,l)),!0}return!1}function lc(e){var t=Rt(e.target);if(t!==null){var n=Wt(t);if(n!==null){if(t=n.tag,t===13){if(t=Wu(n),t!==null){e.blockedOn=t,rc(e.priority,function(){tc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=is(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zi=r,n.target.dispatchEvent(r),Zi=null}else return t=jr(n),t!==null&&to(t),e.blockedOn=n,!1;t.shift()}return!0}function na(e,t,n){Gr(e)&&n.delete(t)}function ap(){ls=!1,pt!==null&&Gr(pt)&&(pt=null),ht!==null&&Gr(ht)&&(ht=null),mt!==null&&Gr(mt)&&(mt=null),rr.forEach(na),lr.forEach(na)}function Rn(e,t){e.blockedOn===t&&(e.blockedOn=null,ls||(ls=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,ap)))}function ir(e){function t(l){return Rn(l,e)}if(0<Ir.length){Rn(Ir[0],e);for(var n=1;n<Ir.length;n++){var r=Ir[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&Rn(pt,e),ht!==null&&Rn(ht,e),mt!==null&&Rn(mt,e),rr.forEach(t),lr.forEach(t),n=0;n<at.length;n++)r=at[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<at.length&&(n=at[0],n.blockedOn===null);)lc(n),n.blockedOn===null&&at.shift()}var dn=lt.ReactCurrentBatchConfig,fl=!0;function up(e,t,n,r){var l=M,i=dn.transition;dn.transition=null;try{M=1,no(e,t,n,r)}finally{M=l,dn.transition=i}}function cp(e,t,n,r){var l=M,i=dn.transition;dn.transition=null;try{M=4,no(e,t,n,r)}finally{M=l,dn.transition=i}}function no(e,t,n,r){if(fl){var l=is(e,t,n,r);if(l===null)Si(e,t,r,pl,n),ta(e,r);else if(op(l,e,t,n,r))r.stopPropagation();else if(ta(e,r),t&4&&-1<sp.indexOf(e)){for(;l!==null;){var i=jr(l);if(i!==null&&ec(i),i=is(e,t,n,r),i===null&&Si(e,t,r,pl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Si(e,t,r,null,n)}}var pl=null;function is(e,t,n,r){if(pl=null,e=Xs(r),e=Rt(e),e!==null)if(t=Wt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pl=e,null}function ic(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qf()){case Zs:return 1;case Yu:return 4;case cl:case Xf:return 16;case qu:return 536870912;default:return 16}default:return 16}}var ct=null,ro=null,Kr=null;function sc(){if(Kr)return Kr;var e,t=ro,n=t.length,r,l="value"in ct?ct.value:ct.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[i-r];r++);return Kr=l.slice(e,1<r?1-r:void 0)}function Yr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rr(){return!0}function ra(){return!1}function Ee(e){function t(n,r,l,i,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Rr:ra,this.isPropagationStopped=ra,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rr)},persist:function(){},isPersistent:Rr}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lo=Ee(kn),Nr=J({},kn,{view:0,detail:0}),dp=Ee(Nr),hi,mi,Mn,zl=J({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:io,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mn&&(Mn&&e.type==="mousemove"?(hi=e.screenX-Mn.screenX,mi=e.screenY-Mn.screenY):mi=hi=0,Mn=e),hi)},movementY:function(e){return"movementY"in e?e.movementY:mi}}),la=Ee(zl),fp=J({},zl,{dataTransfer:0}),pp=Ee(fp),hp=J({},Nr,{relatedTarget:0}),gi=Ee(hp),mp=J({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),gp=Ee(mp),xp=J({},kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vp=Ee(xp),yp=J({},kn,{data:0}),ia=Ee(yp),wp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jp[e])?!!t[e]:!1}function io(){return Sp}var Cp=J({},Nr,{key:function(e){if(e.key){var t=wp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Np[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:io,charCode:function(e){return e.type==="keypress"?Yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kp=Ee(Cp),Ep=J({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sa=Ee(Ep),Tp=J({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:io}),Pp=Ee(Tp),Ap=J({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lp=Ee(Ap),Op=J({},zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_p=Ee(Op),Ip=[9,13,27,32],so=et&&"CompositionEvent"in window,Qn=null;et&&"documentMode"in document&&(Qn=document.documentMode);var Rp=et&&"TextEvent"in window&&!Qn,oc=et&&(!so||Qn&&8<Qn&&11>=Qn),oa=" ",aa=!1;function ac(e,t){switch(e){case"keyup":return Ip.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function Mp(e,t){switch(e){case"compositionend":return uc(t);case"keypress":return t.which!==32?null:(aa=!0,oa);case"textInput":return e=t.data,e===oa&&aa?null:e;default:return null}}function zp(e,t){if(qt)return e==="compositionend"||!so&&ac(e,t)?(e=sc(),Kr=ro=ct=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oc&&t.locale!=="ko"?null:t.data;default:return null}}var Dp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ua(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dp[e.type]:t==="textarea"}function cc(e,t,n,r){Bu(r),t=hl(t,"onChange"),0<t.length&&(n=new lo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,sr=null;function Up(e){Nc(e,0)}function Dl(e){var t=en(e);if(Ru(t))return e}function bp(e,t){if(e==="change")return t}var dc=!1;if(et){var xi;if(et){var vi="oninput"in document;if(!vi){var ca=document.createElement("div");ca.setAttribute("oninput","return;"),vi=typeof ca.oninput=="function"}xi=vi}else xi=!1;dc=xi&&(!document.documentMode||9<document.documentMode)}function da(){Gn&&(Gn.detachEvent("onpropertychange",fc),sr=Gn=null)}function fc(e){if(e.propertyName==="value"&&Dl(sr)){var t=[];cc(t,sr,e,Xs(e)),Ju(Up,t)}}function Fp(e,t,n){e==="focusin"?(da(),Gn=t,sr=n,Gn.attachEvent("onpropertychange",fc)):e==="focusout"&&da()}function Bp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dl(sr)}function $p(e,t){if(e==="click")return Dl(t)}function Hp(e,t){if(e==="input"||e==="change")return Dl(t)}function Vp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:Vp;function or(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Bi.call(t,l)||!Be(e[l],t[l]))return!1}return!0}function fa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pa(e,t){var n=fa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fa(n)}}function pc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hc(){for(var e=window,t=ol();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ol(e.document)}return t}function oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jp(e){var t=hc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pc(n.ownerDocument.documentElement,n)){if(r!==null&&oo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=pa(n,i);var s=pa(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wp=et&&"documentMode"in document&&11>=document.documentMode,Xt=null,ss=null,Kn=null,os=!1;function ha(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;os||Xt==null||Xt!==ol(r)||(r=Xt,"selectionStart"in r&&oo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kn&&or(Kn,r)||(Kn=r,r=hl(ss,"onSelect"),0<r.length&&(t=new lo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xt)))}function Mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zt={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionend:Mr("Transition","TransitionEnd")},yi={},mc={};et&&(mc=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);function Ul(e){if(yi[e])return yi[e];if(!Zt[e])return e;var t=Zt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mc)return yi[e]=t[n];return e}var gc=Ul("animationend"),xc=Ul("animationiteration"),vc=Ul("animationstart"),yc=Ul("transitionend"),wc=new Map,ma="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){wc.set(e,t),Jt(t,[e])}for(var wi=0;wi<ma.length;wi++){var Ni=ma[wi],Qp=Ni.toLowerCase(),Gp=Ni[0].toUpperCase()+Ni.slice(1);Ct(Qp,"on"+Gp)}Ct(gc,"onAnimationEnd");Ct(xc,"onAnimationIteration");Ct(vc,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(yc,"onTransitionEnd");gn("onMouseEnter",["mouseout","mouseover"]);gn("onMouseLeave",["mouseout","mouseover"]);gn("onPointerEnter",["pointerout","pointerover"]);gn("onPointerLeave",["pointerout","pointerover"]);Jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));function ga(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qf(r,t,void 0,e),e.currentTarget=null}function Nc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;ga(l,a,c),i=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;ga(l,a,c),i=u}}}if(ul)throw e=ns,ul=!1,ns=null,e}function D(e,t){var n=t[fs];n===void 0&&(n=t[fs]=new Set);var r=e+"__bubble";n.has(r)||(jc(t,e,2,!1),n.add(r))}function ji(e,t,n){var r=0;t&&(r|=4),jc(n,e,r,t)}var zr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[zr]){e[zr]=!0,Au.forEach(function(n){n!=="selectionchange"&&(Kp.has(n)||ji(n,!1,e),ji(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zr]||(t[zr]=!0,ji("selectionchange",!1,t))}}function jc(e,t,n,r){switch(ic(t)){case 1:var l=up;break;case 4:l=cp;break;default:l=no}n=l.bind(null,t,n,e),l=void 0,!ts||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Si(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;s=s.return}for(;a!==null;){if(s=Rt(a),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}a=a.parentNode}}r=r.return}Ju(function(){var c=i,h=Xs(n),p=[];e:{var g=wc.get(e);if(g!==void 0){var v=lo,y=e;switch(e){case"keypress":if(Yr(n)===0)break e;case"keydown":case"keyup":v=kp;break;case"focusin":y="focus",v=gi;break;case"focusout":y="blur",v=gi;break;case"beforeblur":case"afterblur":v=gi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=la;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=pp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Pp;break;case gc:case xc:case vc:v=gp;break;case yc:v=Lp;break;case"scroll":v=dp;break;case"wheel":v=_p;break;case"copy":case"cut":case"paste":v=vp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=sa}var w=(t&4)!==0,S=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var d=c,m;d!==null;){m=d;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,f!==null&&(x=nr(d,f),x!=null&&w.push(ur(d,x,m)))),S)break;d=d.return}0<w.length&&(g=new v(g,y,null,n,h),p.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Zi&&(y=n.relatedTarget||n.fromElement)&&(Rt(y)||y[tt]))break e;if((v||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?Rt(y):null,y!==null&&(S=Wt(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(w=la,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=sa,x="onPointerLeave",f="onPointerEnter",d="pointer"),S=v==null?g:en(v),m=y==null?g:en(y),g=new w(x,d+"leave",v,n,h),g.target=S,g.relatedTarget=m,x=null,Rt(h)===c&&(w=new w(f,d+"enter",y,n,h),w.target=m,w.relatedTarget=S,x=w),S=x,v&&y)t:{for(w=v,f=y,d=0,m=w;m;m=Qt(m))d++;for(m=0,x=f;x;x=Qt(x))m++;for(;0<d-m;)w=Qt(w),d--;for(;0<m-d;)f=Qt(f),m--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=Qt(w),f=Qt(f)}w=null}else w=null;v!==null&&xa(p,g,v,w,!1),y!==null&&S!==null&&xa(p,S,y,w,!0)}}e:{if(g=c?en(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var C=bp;else if(ua(g))if(dc)C=Hp;else{C=Bp;var T=Fp}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=$p);if(C&&(C=C(e,c))){cc(p,C,n,h);break e}T&&T(e,g,c),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&Gi(g,"number",g.value)}switch(T=c?en(c):window,e){case"focusin":(ua(T)||T.contentEditable==="true")&&(Xt=T,ss=c,Kn=null);break;case"focusout":Kn=ss=Xt=null;break;case"mousedown":os=!0;break;case"contextmenu":case"mouseup":case"dragend":os=!1,ha(p,n,h);break;case"selectionchange":if(Wp)break;case"keydown":case"keyup":ha(p,n,h)}var P;if(so)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else qt?ac(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(oc&&n.locale!=="ko"&&(qt||A!=="onCompositionStart"?A==="onCompositionEnd"&&qt&&(P=sc()):(ct=h,ro="value"in ct?ct.value:ct.textContent,qt=!0)),T=hl(c,A),0<T.length&&(A=new ia(A,e,null,n,h),p.push({event:A,listeners:T}),P?A.data=P:(P=uc(n),P!==null&&(A.data=P)))),(P=Rp?Mp(e,n):zp(e,n))&&(c=hl(c,"onBeforeInput"),0<c.length&&(h=new ia("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=P))}Nc(p,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=nr(e,n),i!=null&&r.unshift(ur(e,i,l)),i=nr(e,t),i!=null&&r.push(ur(e,i,l))),e=e.return}return r}function Qt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xa(e,t,n,r,l){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,l?(u=nr(n,i),u!=null&&s.unshift(ur(n,u,a))):l||(u=nr(n,i),u!=null&&s.push(ur(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Yp=/\r\n?/g,qp=/\u0000|\uFFFD/g;function va(e){return(typeof e=="string"?e:""+e).replace(Yp,`
`).replace(qp,"")}function Dr(e,t,n){if(t=va(t),va(e)!==t&&n)throw Error(N(425))}function ml(){}var as=null,us=null;function cs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ds=typeof setTimeout=="function"?setTimeout:void 0,Xp=typeof clearTimeout=="function"?clearTimeout:void 0,ya=typeof Promise=="function"?Promise:void 0,Zp=typeof queueMicrotask=="function"?queueMicrotask:typeof ya<"u"?function(e){return ya.resolve(null).then(e).catch(eh)}:ds;function eh(e){setTimeout(function(){throw e})}function Ci(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);ir(t)}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var En=Math.random().toString(36).slice(2),Ve="__reactFiber$"+En,cr="__reactProps$"+En,tt="__reactContainer$"+En,fs="__reactEvents$"+En,th="__reactListeners$"+En,nh="__reactHandles$"+En;function Rt(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tt]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wa(e);e!==null;){if(n=e[Ve])return n;e=wa(e)}return t}e=n,n=e.parentNode}return null}function jr(e){return e=e[Ve]||e[tt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function bl(e){return e[cr]||null}var ps=[],tn=-1;function kt(e){return{current:e}}function b(e){0>tn||(e.current=ps[tn],ps[tn]=null,tn--)}function z(e,t){tn++,ps[tn]=e.current,e.current=t}var St={},ue=kt(St),xe=kt(!1),Ft=St;function xn(e,t){var n=e.type.contextTypes;if(!n)return St;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ve(e){return e=e.childContextTypes,e!=null}function gl(){b(xe),b(ue)}function Na(e,t,n){if(ue.current!==St)throw Error(N(168));z(ue,t),z(xe,n)}function Sc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(N(108,Ff(e)||"Unknown",l));return J({},n,r)}function xl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||St,Ft=ue.current,z(ue,e),z(xe,xe.current),!0}function ja(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Sc(e,t,Ft),r.__reactInternalMemoizedMergedChildContext=e,b(xe),b(ue),z(ue,e)):b(xe),z(xe,n)}var Ye=null,Fl=!1,ki=!1;function Cc(e){Ye===null?Ye=[e]:Ye.push(e)}function rh(e){Fl=!0,Cc(e)}function Et(){if(!ki&&Ye!==null){ki=!0;var e=0,t=M;try{var n=Ye;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ye=null,Fl=!1}catch(l){throw Ye!==null&&(Ye=Ye.slice(e+1)),Ku(Zs,Et),l}finally{M=t,ki=!1}}return null}var nn=[],rn=0,vl=null,yl=0,Pe=[],Ae=0,Bt=null,qe=1,Xe="";function _t(e,t){nn[rn++]=yl,nn[rn++]=vl,vl=e,yl=t}function kc(e,t,n){Pe[Ae++]=qe,Pe[Ae++]=Xe,Pe[Ae++]=Bt,Bt=e;var r=qe;e=Xe;var l=32-be(r)-1;r&=~(1<<l),n+=1;var i=32-be(t)+l;if(30<i){var s=l-l%5;i=(r&(1<<s)-1).toString(32),r>>=s,l-=s,qe=1<<32-be(t)+l|n<<l|r,Xe=i+e}else qe=1<<i|n<<l|r,Xe=e}function ao(e){e.return!==null&&(_t(e,1),kc(e,1,0))}function uo(e){for(;e===vl;)vl=nn[--rn],nn[rn]=null,yl=nn[--rn],nn[rn]=null;for(;e===Bt;)Bt=Pe[--Ae],Pe[Ae]=null,Xe=Pe[--Ae],Pe[Ae]=null,qe=Pe[--Ae],Pe[Ae]=null}var Se=null,je=null,F=!1,De=null;function Ec(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,je=gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bt!==null?{id:qe,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Se=e,je=null,!0):!1;default:return!1}}function hs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ms(e){if(F){var t=je;if(t){var n=t;if(!Sa(e,t)){if(hs(e))throw Error(N(418));t=gt(n.nextSibling);var r=Se;t&&Sa(e,t)?Ec(r,n):(e.flags=e.flags&-4097|2,F=!1,Se=e)}}else{if(hs(e))throw Error(N(418));e.flags=e.flags&-4097|2,F=!1,Se=e}}}function Ca(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Ur(e){if(e!==Se)return!1;if(!F)return Ca(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!cs(e.type,e.memoizedProps)),t&&(t=je)){if(hs(e))throw Tc(),Error(N(418));for(;t;)Ec(e,t),t=gt(t.nextSibling)}if(Ca(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=Se?gt(e.stateNode.nextSibling):null;return!0}function Tc(){for(var e=je;e;)e=gt(e.nextSibling)}function vn(){je=Se=null,F=!1}function co(e){De===null?De=[e]:De.push(e)}var lh=lt.ReactCurrentBatchConfig;function zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=l.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ka(e){var t=e._init;return t(e._payload)}function Pc(e){function t(f,d){if(e){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=wt(f,d),f.index=0,f.sibling=null,f}function i(f,d,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,m,x){return d===null||d.tag!==6?(d=_i(m,f.mode,x),d.return=f,d):(d=l(d,m),d.return=f,d)}function u(f,d,m,x){var C=m.type;return C===Yt?h(f,d,m.props.children,x,m.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===st&&ka(C)===d.type)?(x=l(d,m.props),x.ref=zn(f,d,m),x.return=f,x):(x=rl(m.type,m.key,m.props,null,f.mode,x),x.ref=zn(f,d,m),x.return=f,x)}function c(f,d,m,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Ii(m,f.mode,x),d.return=f,d):(d=l(d,m.children||[]),d.return=f,d)}function h(f,d,m,x,C){return d===null||d.tag!==7?(d=bt(m,f.mode,x,C),d.return=f,d):(d=l(d,m),d.return=f,d)}function p(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=_i(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Pr:return m=rl(d.type,d.key,d.props,null,f.mode,m),m.ref=zn(f,null,d),m.return=f,m;case Kt:return d=Ii(d,f.mode,m),d.return=f,d;case st:var x=d._init;return p(f,x(d._payload),m)}if($n(d)||On(d))return d=bt(d,f.mode,m,null),d.return=f,d;br(f,d)}return null}function g(f,d,m,x){var C=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(f,d,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Pr:return m.key===C?u(f,d,m,x):null;case Kt:return m.key===C?c(f,d,m,x):null;case st:return C=m._init,g(f,d,C(m._payload),x)}if($n(m)||On(m))return C!==null?null:h(f,d,m,x,null);br(f,m)}return null}function v(f,d,m,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(m)||null,a(d,f,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Pr:return f=f.get(x.key===null?m:x.key)||null,u(d,f,x,C);case Kt:return f=f.get(x.key===null?m:x.key)||null,c(d,f,x,C);case st:var T=x._init;return v(f,d,m,T(x._payload),C)}if($n(x)||On(x))return f=f.get(m)||null,h(d,f,x,C,null);br(d,x)}return null}function y(f,d,m,x){for(var C=null,T=null,P=d,A=d=0,B=null;P!==null&&A<m.length;A++){P.index>A?(B=P,P=null):B=P.sibling;var O=g(f,P,m[A],x);if(O===null){P===null&&(P=B);break}e&&P&&O.alternate===null&&t(f,P),d=i(O,d,A),T===null?C=O:T.sibling=O,T=O,P=B}if(A===m.length)return n(f,P),F&&_t(f,A),C;if(P===null){for(;A<m.length;A++)P=p(f,m[A],x),P!==null&&(d=i(P,d,A),T===null?C=P:T.sibling=P,T=P);return F&&_t(f,A),C}for(P=r(f,P);A<m.length;A++)B=v(P,f,A,m[A],x),B!==null&&(e&&B.alternate!==null&&P.delete(B.key===null?A:B.key),d=i(B,d,A),T===null?C=B:T.sibling=B,T=B);return e&&P.forEach(function(we){return t(f,we)}),F&&_t(f,A),C}function w(f,d,m,x){var C=On(m);if(typeof C!="function")throw Error(N(150));if(m=C.call(m),m==null)throw Error(N(151));for(var T=C=null,P=d,A=d=0,B=null,O=m.next();P!==null&&!O.done;A++,O=m.next()){P.index>A?(B=P,P=null):B=P.sibling;var we=g(f,P,O.value,x);if(we===null){P===null&&(P=B);break}e&&P&&we.alternate===null&&t(f,P),d=i(we,d,A),T===null?C=we:T.sibling=we,T=we,P=B}if(O.done)return n(f,P),F&&_t(f,A),C;if(P===null){for(;!O.done;A++,O=m.next())O=p(f,O.value,x),O!==null&&(d=i(O,d,A),T===null?C=O:T.sibling=O,T=O);return F&&_t(f,A),C}for(P=r(f,P);!O.done;A++,O=m.next())O=v(P,f,A,O.value,x),O!==null&&(e&&O.alternate!==null&&P.delete(O.key===null?A:O.key),d=i(O,d,A),T===null?C=O:T.sibling=O,T=O);return e&&P.forEach(function(An){return t(f,An)}),F&&_t(f,A),C}function S(f,d,m,x){if(typeof m=="object"&&m!==null&&m.type===Yt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Pr:e:{for(var C=m.key,T=d;T!==null;){if(T.key===C){if(C=m.type,C===Yt){if(T.tag===7){n(f,T.sibling),d=l(T,m.props.children),d.return=f,f=d;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===st&&ka(C)===T.type){n(f,T.sibling),d=l(T,m.props),d.ref=zn(f,T,m),d.return=f,f=d;break e}n(f,T);break}else t(f,T);T=T.sibling}m.type===Yt?(d=bt(m.props.children,f.mode,x,m.key),d.return=f,f=d):(x=rl(m.type,m.key,m.props,null,f.mode,x),x.ref=zn(f,d,m),x.return=f,f=x)}return s(f);case Kt:e:{for(T=m.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(f,d.sibling),d=l(d,m.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Ii(m,f.mode,x),d.return=f,f=d}return s(f);case st:return T=m._init,S(f,d,T(m._payload),x)}if($n(m))return y(f,d,m,x);if(On(m))return w(f,d,m,x);br(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,m),d.return=f,f=d):(n(f,d),d=_i(m,f.mode,x),d.return=f,f=d),s(f)):n(f,d)}return S}var yn=Pc(!0),Ac=Pc(!1),wl=kt(null),Nl=null,ln=null,fo=null;function po(){fo=ln=Nl=null}function ho(e){var t=wl.current;b(wl),e._currentValue=t}function gs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fn(e,t){Nl=e,fo=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(fo!==e)if(e={context:e,memoizedValue:t,next:null},ln===null){if(Nl===null)throw Error(N(308));ln=e,Nl.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return t}var Mt=null;function mo(e){Mt===null?Mt=[e]:Mt.push(e)}function Lc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,mo(t)):(n.next=l.next,l.next=n),t.interleaved=n,nt(e,r)}function nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ot=!1;function go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ze(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,nt(e,n)}return l=r.interleaved,l===null?(t.next=t,mo(r)):(t.next=l.next,l.next=t),r.interleaved=t,nt(e,n)}function qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eo(e,n)}}function Ea(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jl(e,t,n,r){var l=e.updateQueue;ot=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?i=c:s.next=c,s=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(i!==null){var p=l.baseState;s=0,h=c=u=null,a=i;do{var g=a.lane,v=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(g=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(v,p,g);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,g=typeof y=="function"?y.call(v,p,g):y,g==null)break e;p=J({},p,g);break e;case 2:ot=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,u=p):h=h.next=v,s|=g;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;g=a,a=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(h===null&&(u=p),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Ht|=s,e.lanes=s,e.memoizedState=p}}function Ta(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(N(191,l));l.call(r)}}}var Sr={},We=kt(Sr),dr=kt(Sr),fr=kt(Sr);function zt(e){if(e===Sr)throw Error(N(174));return e}function xo(e,t){switch(z(fr,t),z(dr,e),z(We,Sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yi(t,e)}b(We),z(We,t)}function wn(){b(We),b(dr),b(fr)}function _c(e){zt(fr.current);var t=zt(We.current),n=Yi(t,e.type);t!==n&&(z(dr,e),z(We,n))}function vo(e){dr.current===e&&(b(We),b(dr))}var H=kt(0);function Sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ei=[];function yo(){for(var e=0;e<Ei.length;e++)Ei[e]._workInProgressVersionPrimary=null;Ei.length=0}var Xr=lt.ReactCurrentDispatcher,Ti=lt.ReactCurrentBatchConfig,$t=0,V=null,X=null,te=null,Cl=!1,Yn=!1,pr=0,ih=0;function se(){throw Error(N(321))}function wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function No(e,t,n,r,l,i){if($t=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xr.current=e===null||e.memoizedState===null?uh:ch,e=n(r,l),Yn){i=0;do{if(Yn=!1,pr=0,25<=i)throw Error(N(301));i+=1,te=X=null,t.updateQueue=null,Xr.current=dh,e=n(r,l)}while(Yn)}if(Xr.current=kl,t=X!==null&&X.next!==null,$t=0,te=X=V=null,Cl=!1,t)throw Error(N(300));return e}function jo(){var e=pr!==0;return pr=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?V.memoizedState=te=e:te=te.next=e,te}function Ie(){if(X===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=te===null?V.memoizedState:te.next;if(t!==null)te=t,X=e;else{if(e===null)throw Error(N(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},te===null?V.memoizedState=te=e:te=te.next=e}return te}function hr(e,t){return typeof t=="function"?t(e):t}function Pi(e){var t=Ie(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=X,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=s=null,u=null,c=i;do{var h=c.lane;if(($t&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,s=r):u=u.next=p,V.lanes|=h,Ht|=h}c=c.next}while(c!==null&&c!==i);u===null?s=r:u.next=a,Be(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,V.lanes|=i,Ht|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ai(e){var t=Ie(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);Be(i,t.memoizedState)||(ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ic(){}function Rc(e,t){var n=V,r=Ie(),l=t(),i=!Be(r.memoizedState,l);if(i&&(r.memoizedState=l,ge=!0),r=r.queue,So(Dc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||te!==null&&te.memoizedState.tag&1){if(n.flags|=2048,mr(9,zc.bind(null,n,r,l,t),void 0,null),ne===null)throw Error(N(349));$t&30||Mc(n,t,l)}return l}function Mc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zc(e,t,n,r){t.value=n,t.getSnapshot=r,Uc(t)&&bc(e)}function Dc(e,t,n){return n(function(){Uc(t)&&bc(e)})}function Uc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function bc(e){var t=nt(e,1);t!==null&&Fe(t,e,1,-1)}function Pa(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hr,lastRenderedState:e},t.queue=e,e=e.dispatch=ah.bind(null,V,e),[t.memoizedState,e]}function mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fc(){return Ie().memoizedState}function Zr(e,t,n,r){var l=He();V.flags|=e,l.memoizedState=mr(1|t,n,void 0,r===void 0?null:r)}function Bl(e,t,n,r){var l=Ie();r=r===void 0?null:r;var i=void 0;if(X!==null){var s=X.memoizedState;if(i=s.destroy,r!==null&&wo(r,s.deps)){l.memoizedState=mr(t,n,i,r);return}}V.flags|=e,l.memoizedState=mr(1|t,n,i,r)}function Aa(e,t){return Zr(8390656,8,e,t)}function So(e,t){return Bl(2048,8,e,t)}function Bc(e,t){return Bl(4,2,e,t)}function $c(e,t){return Bl(4,4,e,t)}function Hc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vc(e,t,n){return n=n!=null?n.concat([e]):null,Bl(4,4,Hc.bind(null,t,e),n)}function Co(){}function Jc(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wc(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qc(e,t,n){return $t&21?(Be(n,t)||(n=Xu(),V.lanes|=n,Ht|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function sh(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Ti.transition;Ti.transition={};try{e(!1),t()}finally{M=n,Ti.transition=r}}function Gc(){return Ie().memoizedState}function oh(e,t,n){var r=yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kc(e))Yc(t,n);else if(n=Lc(e,t,n,r),n!==null){var l=fe();Fe(n,e,r,l),qc(n,t,r)}}function ah(e,t,n){var r=yt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kc(e))Yc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(l.hasEagerState=!0,l.eagerState=a,Be(a,s)){var u=t.interleaved;u===null?(l.next=l,mo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Lc(e,t,l,r),n!==null&&(l=fe(),Fe(n,e,r,l),qc(n,t,r))}}function Kc(e){var t=e.alternate;return e===V||t!==null&&t===V}function Yc(e,t){Yn=Cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eo(e,n)}}var kl={readContext:_e,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},uh={readContext:_e,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Aa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zr(4194308,4,Hc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zr(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=He();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=oh.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:Pa,useDebugValue:Co,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=Pa(!1),t=e[0];return e=sh.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=He();if(F){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ne===null)throw Error(N(349));$t&30||Mc(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Aa(Dc.bind(null,r,i,e),[e]),r.flags|=2048,mr(9,zc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=He(),t=ne.identifierPrefix;if(F){var n=Xe,r=qe;n=(r&~(1<<32-be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ih++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ch={readContext:_e,useCallback:Jc,useContext:_e,useEffect:So,useImperativeHandle:Vc,useInsertionEffect:Bc,useLayoutEffect:$c,useMemo:Wc,useReducer:Pi,useRef:Fc,useState:function(){return Pi(hr)},useDebugValue:Co,useDeferredValue:function(e){var t=Ie();return Qc(t,X.memoizedState,e)},useTransition:function(){var e=Pi(hr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:Rc,useId:Gc,unstable_isNewReconciler:!1},dh={readContext:_e,useCallback:Jc,useContext:_e,useEffect:So,useImperativeHandle:Vc,useInsertionEffect:Bc,useLayoutEffect:$c,useMemo:Wc,useReducer:Ai,useRef:Fc,useState:function(){return Ai(hr)},useDebugValue:Co,useDeferredValue:function(e){var t=Ie();return X===null?t.memoizedState=e:Qc(t,X.memoizedState,e)},useTransition:function(){var e=Ai(hr)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:Rc,useId:Gc,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $l={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),l=yt(e),i=Ze(r,l);i.payload=t,n!=null&&(i.callback=n),t=xt(e,i,l),t!==null&&(Fe(t,e,l,r),qr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),l=yt(e),i=Ze(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=xt(e,i,l),t!==null&&(Fe(t,e,l,r),qr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=yt(e),l=Ze(n,r);l.tag=2,t!=null&&(l.callback=t),t=xt(e,l,r),t!==null&&(Fe(t,e,r,n),qr(t,e,r))}};function La(e,t,n,r,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!or(n,r)||!or(l,i):!0}function Xc(e,t,n){var r=!1,l=St,i=t.contextType;return typeof i=="object"&&i!==null?i=_e(i):(l=ve(t)?Ft:ue.current,r=t.contextTypes,i=(r=r!=null)?xn(e,l):St),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$l,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Oa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$l.enqueueReplaceState(t,t.state,null)}function vs(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},go(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=_e(i):(i=ve(t)?Ft:ue.current,l.context=xn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(xs(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&$l.enqueueReplaceState(l,l.state,null),jl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Nn(e,t){try{var n="",r=t;do n+=bf(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Li(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ys(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fh=typeof WeakMap=="function"?WeakMap:Map;function Zc(e,t,n){n=Ze(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Tl||(Tl=!0,As=r),ys(e,t)},n}function ed(e,t,n){n=Ze(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){ys(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ys(e,t),typeof r!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function _a(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fh;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Eh.bind(null,e,t,n),t.then(e,e))}function Ia(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ra(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ze(-1,1),t.tag=2,xt(n,t,1))),n.lanes|=1),e)}var ph=lt.ReactCurrentOwner,ge=!1;function ce(e,t,n,r){t.child=e===null?Ac(t,null,n,r):yn(t,e.child,n,r)}function Ma(e,t,n,r,l){n=n.render;var i=t.ref;return fn(t,l),r=No(e,t,n,r,i,l),n=jo(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,rt(e,t,l)):(F&&n&&ao(t),t.flags|=1,ce(e,t,r,l),t.child)}function za(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!_o(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,td(e,t,i,r,l)):(e=rl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:or,n(s,r)&&e.ref===t.ref)return rt(e,t,l)}return t.flags|=1,e=wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function td(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(or(i,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,rt(e,t,l)}return ws(e,t,n,r,l)}function nd(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(on,Ne),Ne|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(on,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,z(on,Ne),Ne|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,z(on,Ne),Ne|=r;return ce(e,t,l,n),t.child}function rd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ws(e,t,n,r,l){var i=ve(n)?Ft:ue.current;return i=xn(t,i),fn(t,l),n=No(e,t,n,r,i,l),r=jo(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,rt(e,t,l)):(F&&r&&ao(t),t.flags|=1,ce(e,t,n,l),t.child)}function Da(e,t,n,r,l){if(ve(n)){var i=!0;xl(t)}else i=!1;if(fn(t,l),t.stateNode===null)el(e,t),Xc(t,n,r),vs(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=ve(n)?Ft:ue.current,c=xn(t,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Oa(t,s,r,c),ot=!1;var g=t.memoizedState;s.state=g,jl(t,r,s,l),u=t.memoizedState,a!==r||g!==u||xe.current||ot?(typeof h=="function"&&(xs(t,n,h,r),u=t.memoizedState),(a=ot||La(t,n,a,r,g,u,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Oc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Me(t.type,a),s.props=c,p=t.pendingProps,g=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=ve(n)?Ft:ue.current,u=xn(t,u));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||g!==u)&&Oa(t,s,r,u),ot=!1,g=t.memoizedState,s.state=g,jl(t,r,s,l);var y=t.memoizedState;a!==p||g!==y||xe.current||ot?(typeof v=="function"&&(xs(t,n,v,r),y=t.memoizedState),(c=ot||La(t,n,c,r,g,y,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Ns(e,t,n,r,i,l)}function Ns(e,t,n,r,l,i){rd(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&ja(t,n,!1),rt(e,t,i);r=t.stateNode,ph.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=yn(t,e.child,null,i),t.child=yn(t,null,a,i)):ce(e,t,a,i),t.memoizedState=r.state,l&&ja(t,n,!0),t.child}function ld(e){var t=e.stateNode;t.pendingContext?Na(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Na(e,t.context,!1),xo(e,t.containerInfo)}function Ua(e,t,n,r,l){return vn(),co(l),t.flags|=256,ce(e,t,n,r),t.child}var js={dehydrated:null,treeContext:null,retryLane:0};function Ss(e){return{baseLanes:e,cachePool:null,transitions:null}}function id(e,t,n){var r=t.pendingProps,l=H.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),z(H,l&1),e===null)return ms(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Jl(s,r,0,null),e=bt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ss(n),t.memoizedState=js,e):ko(t,s));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return hh(e,t,s,r,a,l,n);if(i){i=r.fallback,s=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=wt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=wt(a,i):(i=bt(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Ss(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=js,r}return i=e.child,e=i.sibling,r=wt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ko(e,t){return t=Jl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fr(e,t,n,r){return r!==null&&co(r),yn(t,e.child,null,n),e=ko(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hh(e,t,n,r,l,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Li(Error(N(422))),Fr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Jl({mode:"visible",children:r.children},l,0,null),i=bt(i,l,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&yn(t,e.child,null,s),t.child.memoizedState=Ss(s),t.memoizedState=js,i);if(!(t.mode&1))return Fr(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(N(419)),r=Li(i,r,void 0),Fr(e,t,s,r)}if(a=(s&e.childLanes)!==0,ge||a){if(r=ne,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,nt(e,l),Fe(r,e,l,-1))}return Oo(),r=Li(Error(N(421))),Fr(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Th.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,je=gt(l.nextSibling),Se=t,F=!0,De=null,e!==null&&(Pe[Ae++]=qe,Pe[Ae++]=Xe,Pe[Ae++]=Bt,qe=e.id,Xe=e.overflow,Bt=t),t=ko(t,r.children),t.flags|=4096,t)}function ba(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gs(e.return,t,n)}function Oi(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function sd(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ce(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ba(e,n,t);else if(e.tag===19)ba(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(H,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Sl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Oi(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Sl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Oi(t,!0,n,null,i);break;case"together":Oi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function el(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ht|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mh(e,t,n){switch(t.tag){case 3:ld(t),vn();break;case 5:_c(t);break;case 1:ve(t.type)&&xl(t);break;case 4:xo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;z(wl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(z(H,H.current&1),t.flags|=128,null):n&t.child.childLanes?id(e,t,n):(z(H,H.current&1),e=rt(e,t,n),e!==null?e.sibling:null);z(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),z(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,nd(e,t,n)}return rt(e,t,n)}var od,Cs,ad,ud;od=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cs=function(){};ad=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,zt(We.current);var i=null;switch(n){case"input":l=Wi(e,l),r=Wi(e,r),i=[];break;case"select":l=J({},l,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":l=Ki(e,l),r=Ki(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ml)}qi(n,r);var s;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(er.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(er.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&D("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};ud=function(e,t,n,r){n!==r&&(t.flags|=4)};function Dn(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gh(e,t,n){var r=t.pendingProps;switch(uo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ve(t.type)&&gl(),oe(t),null;case 3:return r=t.stateNode,wn(),b(xe),b(ue),yo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ur(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(_s(De),De=null))),Cs(e,t),oe(t),null;case 5:vo(t);var l=zt(fr.current);if(n=t.type,e!==null&&t.stateNode!=null)ad(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return oe(t),null}if(e=zt(We.current),Ur(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ve]=t,r[cr]=i,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(l=0;l<Vn.length;l++)D(Vn[l],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Go(r,i),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},D("invalid",r);break;case"textarea":Yo(r,i),D("invalid",r)}qi(n,i),l=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Dr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Dr(r.textContent,a,e),l=["children",""+a]):er.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&D("scroll",r)}switch(n){case"input":Ar(r),Ko(r,i,!0);break;case"textarea":Ar(r),qo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ml)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Du(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ve]=t,e[cr]=r,od(e,t,!1,!1),t.stateNode=e;e:{switch(s=Xi(n,r),n){case"dialog":D("cancel",e),D("close",e),l=r;break;case"iframe":case"object":case"embed":D("load",e),l=r;break;case"video":case"audio":for(l=0;l<Vn.length;l++)D(Vn[l],e);l=r;break;case"source":D("error",e),l=r;break;case"img":case"image":case"link":D("error",e),D("load",e),l=r;break;case"details":D("toggle",e),l=r;break;case"input":Go(e,r),l=Wi(e,r),D("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=J({},r,{value:void 0}),D("invalid",e);break;case"textarea":Yo(e,r),l=Ki(e,r),D("invalid",e);break;default:l=r}qi(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Fu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Uu(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&tr(e,u):typeof u=="number"&&tr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(er.hasOwnProperty(i)?u!=null&&i==="onScroll"&&D("scroll",e):u!=null&&Gs(e,i,u,s))}switch(n){case"input":Ar(e),Ko(e,r,!1);break;case"textarea":Ar(e),qo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?an(e,!!r.multiple,i,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)ud(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=zt(fr.current),zt(We.current),Ur(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(i=r.nodeValue!==n)&&(e=Se,e!==null))switch(e.tag){case 3:Dr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Dr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return oe(t),null;case 13:if(b(H),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&je!==null&&t.mode&1&&!(t.flags&128))Tc(),vn(),t.flags|=98560,i=!1;else if(i=Ur(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Ve]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),i=!1}else De!==null&&(_s(De),De=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?Z===0&&(Z=3):Oo())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return wn(),Cs(e,t),e===null&&ar(t.stateNode.containerInfo),oe(t),null;case 10:return ho(t.type._context),oe(t),null;case 17:return ve(t.type)&&gl(),oe(t),null;case 19:if(b(H),i=t.memoizedState,i===null)return oe(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Dn(i,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Sl(e),s!==null){for(t.flags|=128,Dn(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(H,H.current&1|2),t.child}e=e.sibling}i.tail!==null&&Y()>jn&&(t.flags|=128,r=!0,Dn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Sl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Dn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!F)return oe(t),null}else 2*Y()-i.renderingStartTime>jn&&n!==1073741824&&(t.flags|=128,r=!0,Dn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Y(),t.sibling=null,n=H.current,z(H,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Lo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function xh(e,t){switch(uo(t),t.tag){case 1:return ve(t.type)&&gl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(),b(xe),b(ue),yo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vo(t),null;case 13:if(b(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(H),null;case 4:return wn(),null;case 10:return ho(t.type._context),null;case 22:case 23:return Lo(),null;case 24:return null;default:return null}}var Br=!1,ae=!1,vh=typeof WeakSet=="function"?WeakSet:Set,k=null;function sn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function ks(e,t,n){try{n()}catch(r){W(e,t,r)}}var Fa=!1;function yh(e,t){if(as=fl,e=hc(),oo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,h=0,p=e,g=null;t:for(;;){for(var v;p!==n||l!==0&&p.nodeType!==3||(a=s+l),p!==i||r!==0&&p.nodeType!==3||(u=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===e)break t;if(g===n&&++c===l&&(a=s),g===i&&++h===r&&(u=s),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(us={focusedElem:e,selectionRange:n},fl=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,S=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Me(t.type,w),S);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(x){W(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return y=Fa,Fa=!1,y}function qn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&ks(t,n,i)}l=l.next}while(l!==r)}}function Hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Es(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cd(e){var t=e.alternate;t!==null&&(e.alternate=null,cd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[cr],delete t[fs],delete t[th],delete t[nh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dd(e){return e.tag===5||e.tag===3||e.tag===4}function Ba(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ts(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ml));else if(r!==4&&(e=e.child,e!==null))for(Ts(e,t,n),e=e.sibling;e!==null;)Ts(e,t,n),e=e.sibling}function Ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ps(e,t,n),e=e.sibling;e!==null;)Ps(e,t,n),e=e.sibling}var re=null,ze=!1;function it(e,t,n){for(n=n.child;n!==null;)fd(e,t,n),n=n.sibling}function fd(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:ae||sn(n,t);case 6:var r=re,l=ze;re=null,it(e,t,n),re=r,ze=l,re!==null&&(ze?(e=re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):re.removeChild(n.stateNode));break;case 18:re!==null&&(ze?(e=re,n=n.stateNode,e.nodeType===8?Ci(e.parentNode,n):e.nodeType===1&&Ci(e,n),ir(e)):Ci(re,n.stateNode));break;case 4:r=re,l=ze,re=n.stateNode.containerInfo,ze=!0,it(e,t,n),re=r,ze=l;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&ks(n,t,s),l=l.next}while(l!==r)}it(e,t,n);break;case 1:if(!ae&&(sn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){W(n,t,a)}it(e,t,n);break;case 21:it(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,it(e,t,n),ae=r):it(e,t,n);break;default:it(e,t,n)}}function $a(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vh),t.forEach(function(r){var l=Ph.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,ze=!1;break e;case 3:re=a.stateNode.containerInfo,ze=!0;break e;case 4:re=a.stateNode.containerInfo,ze=!0;break e}a=a.return}if(re===null)throw Error(N(160));fd(i,s,l),re=null,ze=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){W(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pd(t,e),t=t.sibling}function pd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),$e(e),r&4){try{qn(3,e,e.return),Hl(3,e)}catch(w){W(e,e.return,w)}try{qn(5,e,e.return)}catch(w){W(e,e.return,w)}}break;case 1:Re(t,e),$e(e),r&512&&n!==null&&sn(n,n.return);break;case 5:if(Re(t,e),$e(e),r&512&&n!==null&&sn(n,n.return),e.flags&32){var l=e.stateNode;try{tr(l,"")}catch(w){W(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Mu(l,i),Xi(a,s);var c=Xi(a,i);for(s=0;s<u.length;s+=2){var h=u[s],p=u[s+1];h==="style"?Fu(l,p):h==="dangerouslySetInnerHTML"?Uu(l,p):h==="children"?tr(l,p):Gs(l,h,p,c)}switch(a){case"input":Qi(l,i);break;case"textarea":zu(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?an(l,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?an(l,!!i.multiple,i.defaultValue,!0):an(l,!!i.multiple,i.multiple?[]:"",!1))}l[cr]=i}catch(w){W(e,e.return,w)}}break;case 6:if(Re(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(N(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){W(e,e.return,w)}}break;case 3:if(Re(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ir(t.containerInfo)}catch(w){W(e,e.return,w)}break;case 4:Re(t,e),$e(e);break;case 13:Re(t,e),$e(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Po=Y())),r&4&&$a(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(c=ae)||h,Re(t,e),ae=c):Re(t,e),$e(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(k=e,h=e.child;h!==null;){for(p=k=h;k!==null;){switch(g=k,v=g.child,g.tag){case 0:case 11:case 14:case 15:qn(4,g,g.return);break;case 1:sn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){W(r,n,w)}}break;case 5:sn(g,g.return);break;case 22:if(g.memoizedState!==null){Va(p);continue}}v!==null?(v.return=g,k=v):Va(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{l=p.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=bu("display",s))}catch(w){W(e,e.return,w)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){W(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Re(t,e),$e(e),r&4&&$a(e);break;case 21:break;default:Re(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dd(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(tr(l,""),r.flags&=-33);var i=Ba(e);Ps(e,i,l);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Ba(e);Ts(e,a,s);break;default:throw Error(N(161))}}catch(u){W(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wh(e,t,n){k=e,hd(e)}function hd(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var l=k,i=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||Br;if(!s){var a=l.alternate,u=a!==null&&a.memoizedState!==null||ae;a=Br;var c=ae;if(Br=s,(ae=u)&&!c)for(k=l;k!==null;)s=k,u=s.child,s.tag===22&&s.memoizedState!==null?Ja(l):u!==null?(u.return=s,k=u):Ja(l);for(;i!==null;)k=i,hd(i),i=i.sibling;k=l,Br=a,ae=c}Ha(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,k=i):Ha(e)}}function Ha(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ta(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ta(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ir(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ae||t.flags&512&&Es(t)}catch(g){W(t,t.return,g)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Va(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Ja(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Hl(4,t)}catch(u){W(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){W(t,l,u)}}var i=t.return;try{Es(t)}catch(u){W(t,i,u)}break;case 5:var s=t.return;try{Es(t)}catch(u){W(t,s,u)}}}catch(u){W(t,t.return,u)}if(t===e){k=null;break}var a=t.sibling;if(a!==null){a.return=t.return,k=a;break}k=t.return}}var Nh=Math.ceil,El=lt.ReactCurrentDispatcher,Eo=lt.ReactCurrentOwner,Oe=lt.ReactCurrentBatchConfig,R=0,ne=null,q=null,le=0,Ne=0,on=kt(0),Z=0,gr=null,Ht=0,Vl=0,To=0,Xn=null,me=null,Po=0,jn=1/0,Ke=null,Tl=!1,As=null,vt=null,$r=!1,dt=null,Pl=0,Zn=0,Ls=null,tl=-1,nl=0;function fe(){return R&6?Y():tl!==-1?tl:tl=Y()}function yt(e){return e.mode&1?R&2&&le!==0?le&-le:lh.transition!==null?(nl===0&&(nl=Xu()),nl):(e=M,e!==0||(e=window.event,e=e===void 0?16:ic(e.type)),e):1}function Fe(e,t,n,r){if(50<Zn)throw Zn=0,Ls=null,Error(N(185));wr(e,n,r),(!(R&2)||e!==ne)&&(e===ne&&(!(R&2)&&(Vl|=n),Z===4&&ut(e,le)),ye(e,r),n===1&&R===0&&!(t.mode&1)&&(jn=Y()+500,Fl&&Et()))}function ye(e,t){var n=e.callbackNode;lp(e,t);var r=dl(e,e===ne?le:0);if(r===0)n!==null&&ea(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ea(n),t===1)e.tag===0?rh(Wa.bind(null,e)):Cc(Wa.bind(null,e)),Zp(function(){!(R&6)&&Et()}),n=null;else{switch(Zu(r)){case 1:n=Zs;break;case 4:n=Yu;break;case 16:n=cl;break;case 536870912:n=qu;break;default:n=cl}n=jd(n,md.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function md(e,t){if(tl=-1,nl=0,R&6)throw Error(N(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=dl(e,e===ne?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Al(e,r);else{t=r;var l=R;R|=2;var i=xd();(ne!==e||le!==t)&&(Ke=null,jn=Y()+500,Ut(e,t));do try{Ch();break}catch(a){gd(e,a)}while(!0);po(),El.current=i,R=l,q!==null?t=0:(ne=null,le=0,t=Z)}if(t!==0){if(t===2&&(l=rs(e),l!==0&&(r=l,t=Os(e,l))),t===1)throw n=gr,Ut(e,0),ut(e,r),ye(e,Y()),n;if(t===6)ut(e,r);else{if(l=e.current.alternate,!(r&30)&&!jh(l)&&(t=Al(e,r),t===2&&(i=rs(e),i!==0&&(r=i,t=Os(e,i))),t===1))throw n=gr,Ut(e,0),ut(e,r),ye(e,Y()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:It(e,me,Ke);break;case 3:if(ut(e,r),(r&130023424)===r&&(t=Po+500-Y(),10<t)){if(dl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ds(It.bind(null,e,me,Ke),t);break}It(e,me,Ke);break;case 4:if(ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-be(r);i=1<<s,s=t[s],s>l&&(l=s),r&=~i}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nh(r/1960))-r,10<r){e.timeoutHandle=ds(It.bind(null,e,me,Ke),r);break}It(e,me,Ke);break;case 5:It(e,me,Ke);break;default:throw Error(N(329))}}}return ye(e,Y()),e.callbackNode===n?md.bind(null,e):null}function Os(e,t){var n=Xn;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=Al(e,t),e!==2&&(t=me,me=n,t!==null&&_s(t)),e}function _s(e){me===null?me=e:me.push.apply(me,e)}function jh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Be(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ut(e,t){for(t&=~To,t&=~Vl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-be(t),r=1<<n;e[n]=-1,t&=~r}}function Wa(e){if(R&6)throw Error(N(327));pn();var t=dl(e,0);if(!(t&1))return ye(e,Y()),null;var n=Al(e,t);if(e.tag!==0&&n===2){var r=rs(e);r!==0&&(t=r,n=Os(e,r))}if(n===1)throw n=gr,Ut(e,0),ut(e,t),ye(e,Y()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,me,Ke),ye(e,Y()),null}function Ao(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(jn=Y()+500,Fl&&Et())}}function Vt(e){dt!==null&&dt.tag===0&&!(R&6)&&pn();var t=R;R|=1;var n=Oe.transition,r=M;try{if(Oe.transition=null,M=1,e)return e()}finally{M=r,Oe.transition=n,R=t,!(R&6)&&Et()}}function Lo(){Ne=on.current,b(on)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xp(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(uo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gl();break;case 3:wn(),b(xe),b(ue),yo();break;case 5:vo(r);break;case 4:wn();break;case 13:b(H);break;case 19:b(H);break;case 10:ho(r.type._context);break;case 22:case 23:Lo()}n=n.return}if(ne=e,q=e=wt(e.current,null),le=Ne=t,Z=0,gr=null,To=Vl=Ht=0,me=Xn=null,Mt!==null){for(t=0;t<Mt.length;t++)if(n=Mt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=l,r.next=s}n.pending=r}Mt=null}return e}function gd(e,t){do{var n=q;try{if(po(),Xr.current=kl,Cl){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Cl=!1}if($t=0,te=X=V=null,Yn=!1,pr=0,Eo.current=null,n===null||n.return===null){Z=1,gr=t,q=null;break}e:{var i=e,s=n.return,a=n,u=t;if(t=le,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Ia(s);if(v!==null){v.flags&=-257,Ra(v,s,a,i,t),v.mode&1&&_a(i,c,t),t=v,u=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(u),t.updateQueue=w}else y.add(u);break e}else{if(!(t&1)){_a(i,c,t),Oo();break e}u=Error(N(426))}}else if(F&&a.mode&1){var S=Ia(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ra(S,s,a,i,t),co(Nn(u,a));break e}}i=u=Nn(u,a),Z!==4&&(Z=2),Xn===null?Xn=[i]:Xn.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Zc(i,u,t);Ea(i,f);break e;case 1:a=u;var d=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(vt===null||!vt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=ed(i,a,t);Ea(i,x);break e}}i=i.return}while(i!==null)}yd(n)}catch(C){t=C,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function xd(){var e=El.current;return El.current=kl,e===null?kl:e}function Oo(){(Z===0||Z===3||Z===2)&&(Z=4),ne===null||!(Ht&268435455)&&!(Vl&268435455)||ut(ne,le)}function Al(e,t){var n=R;R|=2;var r=xd();(ne!==e||le!==t)&&(Ke=null,Ut(e,t));do try{Sh();break}catch(l){gd(e,l)}while(!0);if(po(),R=n,El.current=r,q!==null)throw Error(N(261));return ne=null,le=0,Z}function Sh(){for(;q!==null;)vd(q)}function Ch(){for(;q!==null&&!Kf();)vd(q)}function vd(e){var t=Nd(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?yd(e):q=t,Eo.current=null}function yd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xh(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,q=null;return}}else if(n=gh(n,t,Ne),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);Z===0&&(Z=5)}function It(e,t,n){var r=M,l=Oe.transition;try{Oe.transition=null,M=1,kh(e,t,n,r)}finally{Oe.transition=l,M=r}return null}function kh(e,t,n,r){do pn();while(dt!==null);if(R&6)throw Error(N(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ip(e,i),e===ne&&(q=ne=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$r||($r=!0,jd(cl,function(){return pn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Oe.transition,Oe.transition=null;var s=M;M=1;var a=R;R|=4,Eo.current=null,yh(e,n),pd(n,e),Jp(us),fl=!!as,us=as=null,e.current=n,wh(n),Yf(),R=a,M=s,Oe.transition=i}else e.current=n;if($r&&($r=!1,dt=e,Pl=l),i=e.pendingLanes,i===0&&(vt=null),Zf(n.stateNode),ye(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Tl)throw Tl=!1,e=As,As=null,e;return Pl&1&&e.tag!==0&&pn(),i=e.pendingLanes,i&1?e===Ls?Zn++:(Zn=0,Ls=e):Zn=0,Et(),null}function pn(){if(dt!==null){var e=Zu(Pl),t=Oe.transition,n=M;try{if(Oe.transition=null,M=16>e?16:e,dt===null)var r=!1;else{if(e=dt,dt=null,Pl=0,R&6)throw Error(N(331));var l=R;for(R|=4,k=e.current;k!==null;){var i=k,s=i.child;if(k.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(k=c;k!==null;){var h=k;switch(h.tag){case 0:case 11:case 15:qn(8,h,i)}var p=h.child;if(p!==null)p.return=h,k=p;else for(;k!==null;){h=k;var g=h.sibling,v=h.return;if(cd(h),h===c){k=null;break}if(g!==null){g.return=v,k=g;break}k=v}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}k=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,k=s;else e:for(;k!==null;){if(i=k,i.flags&2048)switch(i.tag){case 0:case 11:case 15:qn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,k=f;break e}k=i.return}}var d=e.current;for(k=d;k!==null;){s=k;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,k=m;else e:for(s=d;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hl(9,a)}}catch(C){W(a,a.return,C)}if(a===s){k=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,k=x;break e}k=a.return}}if(R=l,Et(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Ml,e)}catch{}r=!0}return r}finally{M=n,Oe.transition=t}}return!1}function Qa(e,t,n){t=Nn(n,t),t=Zc(e,t,1),e=xt(e,t,1),t=fe(),e!==null&&(wr(e,1,t),ye(e,t))}function W(e,t,n){if(e.tag===3)Qa(e,e,n);else for(;t!==null;){if(t.tag===3){Qa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vt===null||!vt.has(r))){e=Nn(n,e),e=ed(t,e,1),t=xt(t,e,1),e=fe(),t!==null&&(wr(t,1,e),ye(t,e));break}}t=t.return}}function Eh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,ne===e&&(le&n)===n&&(Z===4||Z===3&&(le&130023424)===le&&500>Y()-Po?Ut(e,0):To|=n),ye(e,t)}function wd(e,t){t===0&&(e.mode&1?(t=_r,_r<<=1,!(_r&130023424)&&(_r=4194304)):t=1);var n=fe();e=nt(e,t),e!==null&&(wr(e,t,n),ye(e,n))}function Th(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wd(e,n)}function Ph(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),wd(e,n)}var Nd;Nd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,mh(e,t,n);ge=!!(e.flags&131072)}else ge=!1,F&&t.flags&1048576&&kc(t,yl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;el(e,t),e=t.pendingProps;var l=xn(t,ue.current);fn(t,n),l=No(null,t,r,e,l,n);var i=jo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ve(r)?(i=!0,xl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,go(t),l.updater=$l,t.stateNode=l,l._reactInternals=t,vs(t,r,e,n),t=Ns(null,t,r,!0,i,n)):(t.tag=0,F&&i&&ao(t),ce(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(el(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Lh(r),e=Me(r,e),l){case 0:t=ws(null,t,r,e,n);break e;case 1:t=Da(null,t,r,e,n);break e;case 11:t=Ma(null,t,r,e,n);break e;case 14:t=za(null,t,r,Me(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),ws(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),Da(e,t,r,l,n);case 3:e:{if(ld(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Oc(e,t),jl(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Nn(Error(N(423)),t),t=Ua(e,t,r,n,l);break e}else if(r!==l){l=Nn(Error(N(424)),t),t=Ua(e,t,r,n,l);break e}else for(je=gt(t.stateNode.containerInfo.firstChild),Se=t,F=!0,De=null,n=Ac(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===l){t=rt(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return _c(t),e===null&&ms(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,s=l.children,cs(r,l)?s=null:i!==null&&cs(r,i)&&(t.flags|=32),rd(e,t),ce(e,t,s,n),t.child;case 6:return e===null&&ms(t),null;case 13:return id(e,t,n);case 4:return xo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),Ma(e,t,r,l,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,s=l.value,z(wl,r._currentValue),r._currentValue=s,i!==null)if(Be(i.value,s)){if(i.children===l.children&&!xe.current){t=rt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ze(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),gs(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(N(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),gs(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ce(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,fn(t,n),l=_e(l),r=r(l),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,l=Me(r,t.pendingProps),l=Me(r.type,l),za(e,t,r,l,n);case 15:return td(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),el(e,t),t.tag=1,ve(r)?(e=!0,xl(t)):e=!1,fn(t,n),Xc(t,r,l),vs(t,r,l,n),Ns(null,t,r,!0,e,n);case 19:return sd(e,t,n);case 22:return nd(e,t,n)}throw Error(N(156,t.tag))};function jd(e,t){return Ku(e,t)}function Ah(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new Ah(e,t,n,r)}function _o(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lh(e){if(typeof e=="function")return _o(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ys)return 11;if(e===qs)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function rl(e,t,n,r,l,i){var s=2;if(r=e,typeof e=="function")_o(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Yt:return bt(n.children,l,i,t);case Ks:s=8,l|=8;break;case $i:return e=Le(12,n,t,l|2),e.elementType=$i,e.lanes=i,e;case Hi:return e=Le(13,n,t,l),e.elementType=Hi,e.lanes=i,e;case Vi:return e=Le(19,n,t,l),e.elementType=Vi,e.lanes=i,e;case _u:return Jl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lu:s=10;break e;case Ou:s=9;break e;case Ys:s=11;break e;case qs:s=14;break e;case st:s=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Le(s,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function bt(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function Jl(e,t,n,r){return e=Le(22,e,r,t),e.elementType=_u,e.lanes=n,e.stateNode={isHidden:!1},e}function _i(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function Ii(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Oh(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pi(0),this.expirationTimes=pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Io(e,t,n,r,l,i,s,a,u){return e=new Oh(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Le(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},go(i),e}function _h(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Sd(e){if(!e)return St;e=e._reactInternals;e:{if(Wt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(ve(n))return Sc(e,n,t)}return t}function Cd(e,t,n,r,l,i,s,a,u){return e=Io(n,r,!0,e,l,i,s,a,u),e.context=Sd(null),n=e.current,r=fe(),l=yt(n),i=Ze(r,l),i.callback=t??null,xt(n,i,l),e.current.lanes=l,wr(e,l,r),ye(e,r),e}function Wl(e,t,n,r){var l=t.current,i=fe(),s=yt(l);return n=Sd(n),t.context===null?t.context=n:t.pendingContext=n,t=Ze(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xt(l,t,s),e!==null&&(Fe(e,l,s,i),qr(e,l,s)),s}function Ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ga(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ro(e,t){Ga(e,t),(e=e.alternate)&&Ga(e,t)}function Ih(){return null}var kd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mo(e){this._internalRoot=e}Ql.prototype.render=Mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Wl(e,t,null,null)};Ql.prototype.unmount=Mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){Wl(null,e,null,null)}),t[tt]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=nc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<at.length&&t!==0&&t<at[n].priority;n++);at.splice(n,0,e),n===0&&lc(e)}};function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ka(){}function Rh(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Ll(s);i.call(c)}}var s=Cd(t,r,e,0,null,!1,!1,"",Ka);return e._reactRootContainer=s,e[tt]=s.current,ar(e.nodeType===8?e.parentNode:e),Vt(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=Ll(u);a.call(c)}}var u=Io(e,0,!1,null,null,!1,!1,"",Ka);return e._reactRootContainer=u,e[tt]=u.current,ar(e.nodeType===8?e.parentNode:e),Vt(function(){Wl(t,u,n,r)}),u}function Kl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var s=i;if(typeof l=="function"){var a=l;l=function(){var u=Ll(s);a.call(u)}}Wl(t,s,e,l)}else s=Rh(n,t,e,l,r);return Ll(s)}ec=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hn(t.pendingLanes);n!==0&&(eo(t,n|1),ye(t,Y()),!(R&6)&&(jn=Y()+500,Et()))}break;case 13:Vt(function(){var r=nt(e,1);if(r!==null){var l=fe();Fe(r,e,1,l)}}),Ro(e,1)}};to=function(e){if(e.tag===13){var t=nt(e,134217728);if(t!==null){var n=fe();Fe(t,e,134217728,n)}Ro(e,134217728)}};tc=function(e){if(e.tag===13){var t=yt(e),n=nt(e,t);if(n!==null){var r=fe();Fe(n,e,t,r)}Ro(e,t)}};nc=function(){return M};rc=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};es=function(e,t,n){switch(t){case"input":if(Qi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=bl(r);if(!l)throw Error(N(90));Ru(r),Qi(r,l)}}}break;case"textarea":zu(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}};Hu=Ao;Vu=Vt;var Mh={usingClientEntryPoint:!1,Events:[jr,en,bl,Bu,$u,Ao]},Un={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zh={bundleType:Un.bundleType,version:Un.version,rendererPackageName:Un.rendererPackageName,rendererConfig:Un.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qu(e),e===null?null:e.stateNode},findFiberByHostInstance:Un.findFiberByHostInstance||Ih,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{Ml=Hr.inject(zh),Je=Hr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mh;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zo(t))throw Error(N(200));return _h(e,t,null,n)};ke.createRoot=function(e,t){if(!zo(e))throw Error(N(299));var n=!1,r="",l=kd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Io(e,1,!1,null,null,n,!1,r,l),e[tt]=t.current,ar(e.nodeType===8?e.parentNode:e),new Mo(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Qu(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Vt(e)};ke.hydrate=function(e,t,n){if(!Gl(t))throw Error(N(200));return Kl(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!zo(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",s=kd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Cd(t,null,e,1,n??null,l,!1,i,s),e[tt]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ql(t)};ke.render=function(e,t,n){if(!Gl(t))throw Error(N(200));return Kl(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!Gl(e))throw Error(N(40));return e._reactRootContainer?(Vt(function(){Kl(null,null,e,!1,function(){e._reactRootContainer=null,e[tt]=null})}),!0):!1};ke.unstable_batchedUpdates=Ao;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gl(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Kl(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function Ed(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ed)}catch(e){console.error(e)}}Ed(),Eu.exports=ke;var Dh=Eu.exports,Ya=Dh;Fi.createRoot=Ya.createRoot,Fi.hydrateRoot=Ya.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xr(){return xr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xr.apply(null,arguments)}var ft;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ft||(ft={}));const qa="popstate";function Uh(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:s,hash:a}=r.location;return Is("",{pathname:i,search:s,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:Ol(l)}return Fh(t,n,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Do(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function bh(){return Math.random().toString(36).substr(2,8)}function Xa(e,t){return{usr:e.state,key:e.key,idx:t}}function Is(e,t,n,r){return n===void 0&&(n=null),xr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Tn(t):t,{state:n,key:t&&t.key||r||bh()})}function Ol(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Tn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Fh(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,s=l.history,a=ft.Pop,u=null,c=h();c==null&&(c=0,s.replaceState(xr({},s.state,{idx:c}),""));function h(){return(s.state||{idx:null}).idx}function p(){a=ft.Pop;let S=h(),f=S==null?null:S-c;c=S,u&&u({action:a,location:w.location,delta:f})}function g(S,f){a=ft.Push;let d=Is(w.location,S,f);c=h()+1;let m=Xa(d,c),x=w.createHref(d);try{s.pushState(m,"",x)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;l.location.assign(x)}i&&u&&u({action:a,location:w.location,delta:1})}function v(S,f){a=ft.Replace;let d=Is(w.location,S,f);c=h();let m=Xa(d,c),x=w.createHref(d);s.replaceState(m,"",x),i&&u&&u({action:a,location:w.location,delta:0})}function y(S){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof S=="string"?S:Ol(S);return d=d.replace(/ $/,"%20"),Q(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let w={get action(){return a},get location(){return e(l,s)},listen(S){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(qa,p),u=S,()=>{l.removeEventListener(qa,p),u=null}},createHref(S){return t(l,S)},createURL:y,encodeLocation(S){let f=y(S);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:v,go(S){return s.go(S)}};return w}var Za;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Za||(Za={}));function Bh(e,t,n){return n===void 0&&(n="/"),$h(e,t,n)}function $h(e,t,n,r){let l=typeof t=="string"?Tn(t):t,i=Sn(l.pathname||"/",n);if(i==null)return null;let s=Td(e);Hh(s);let a=null,u=em(i);for(let c=0;a==null&&c<s.length;++c)a=Xh(s[c],u);return a}function Td(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,s,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};u.relativePath.startsWith("/")&&(Q(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Nt([r,u.relativePath]),h=n.concat(u);i.children&&i.children.length>0&&(Q(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Td(i.children,t,h,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Yh(c,i.index),routesMeta:h})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))l(i,s);else for(let u of Pd(i.path))l(i,s,u)}),t}function Pd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let s=Pd(r.join("/")),a=[];return a.push(...s.map(u=>u===""?i:[i,u].join("/"))),l&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Hh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:qh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vh=/^:[\w-]+$/,Jh=3,Wh=2,Qh=1,Gh=10,Kh=-2,eu=e=>e==="*";function Yh(e,t){let n=e.split("/"),r=n.length;return n.some(eu)&&(r+=Kh),t&&(r+=Wh),n.filter(l=>!eu(l)).reduce((l,i)=>l+(Vh.test(i)?Jh:i===""?Qh:Gh),r)}function qh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Xh(e,t,n){let{routesMeta:r}=e,l={},i="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=i==="/"?t:t.slice(i.length)||"/",p=Rs({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!p)return null;Object.assign(l,p.params),s.push({params:l,pathname:Nt([i,p.pathname]),pathnameBase:im(Nt([i,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(i=Nt([i,p.pathnameBase]))}return s}function Rs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Zh(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],s=i.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,h,p)=>{let{paramName:g,isOptional:v}=h;if(g==="*"){let w=a[p]||"";s=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[p];return v&&!y?c[g]=void 0:c[g]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function Zh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Do(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function em(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Do(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Sn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const tm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nm=e=>tm.test(e);function rm(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Tn(e):e,i;if(n)if(nm(n))i=n;else{if(n.includes("//")){let s=n;n=Od(n),Do(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=tu(n.substring(1),"/"):i=tu(n,t)}else i=t;return{pathname:i,search:sm(r),hash:om(l)}}function tu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Ri(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lm(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ad(e,t){let n=lm(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ld(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Tn(e):(l=xr({},e),Q(!l.pathname||!l.pathname.includes("?"),Ri("?","pathname","search",l)),Q(!l.pathname||!l.pathname.includes("#"),Ri("#","pathname","hash",l)),Q(!l.search||!l.search.includes("#"),Ri("#","search","hash",l)));let i=e===""||l.pathname==="",s=i?"/":l.pathname,a;if(s==null)a=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),p-=1;l.pathname=g.join("/")}a=p>=0?t[p]:"/"}let u=rm(l,a),c=s&&s!=="/"&&s.endsWith("/"),h=(i||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Od=e=>e.replace(/\/\/+/g,"/"),Nt=e=>Od(e.join("/")),im=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),sm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,om=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function am(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const _d=["post","put","patch","delete"];new Set(_d);const um=["get",..._d];new Set(um);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vr(){return vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vr.apply(null,arguments)}const Yl=j.createContext(null),Id=j.createContext(null),Tt=j.createContext(null),ql=j.createContext(null),Pt=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Rd=j.createContext(null);function cm(e,t){let{relative:n}=t===void 0?{}:t;Cr()||Q(!1);let{basename:r,navigator:l}=j.useContext(Tt),{hash:i,pathname:s,search:a}=Xl(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:Nt([r,s])),l.createHref({pathname:u,search:a,hash:i})}function Cr(){return j.useContext(ql)!=null}function Pn(){return Cr()||Q(!1),j.useContext(ql).location}function Md(e){j.useContext(Tt).static||j.useLayoutEffect(e)}function dm(){let{isDataRoute:e}=j.useContext(Pt);return e?Em():fm()}function fm(){Cr()||Q(!1);let e=j.useContext(Yl),{basename:t,future:n,navigator:r}=j.useContext(Tt),{matches:l}=j.useContext(Pt),{pathname:i}=Pn(),s=JSON.stringify(Ad(l,n.v7_relativeSplatPath)),a=j.useRef(!1);return Md(()=>{a.current=!0}),j.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=Ld(c,JSON.parse(s),i,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Nt([t,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[t,r,s,i,e])}const pm=j.createContext(null);function hm(e){let t=j.useContext(Pt).outlet;return t&&j.createElement(pm.Provider,{value:e},t)}function Xl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Tt),{matches:l}=j.useContext(Pt),{pathname:i}=Pn(),s=JSON.stringify(Ad(l,r.v7_relativeSplatPath));return j.useMemo(()=>Ld(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function mm(e,t){return gm(e,t)}function gm(e,t,n,r){Cr()||Q(!1);let{navigator:l}=j.useContext(Tt),{matches:i}=j.useContext(Pt),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=Pn(),h;if(t){var p;let S=typeof t=="string"?Tn(t):t;u==="/"||(p=S.pathname)!=null&&p.startsWith(u)||Q(!1),h=S}else h=c;let g=h.pathname||"/",v=g;if(u!=="/"){let S=u.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=Bh(e,{pathname:v}),w=Nm(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:Nt([u,l.encodeLocation?l.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?u:Nt([u,l.encodeLocation?l.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n,r);return t&&w?j.createElement(ql.Provider,{value:{location:vr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ft.Pop}},w):w}function xm(){let e=km(),t=am(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:l},n):null,null)}const vm=j.createElement(xm,null);class ym extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(Pt.Provider,{value:this.props.routeContext},j.createElement(Rd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wm(e){let{routeContext:t,match:n,children:r}=e,l=j.useContext(Yl);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Pt.Provider,{value:t},r)}function Nm(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(l=n)==null?void 0:l.errors;if(a!=null){let h=s.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);h>=0||Q(!1),s=s.slice(0,Math.min(s.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let p=s[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:g,errors:v}=n,y=p.route.loader&&g[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||y){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((h,p,g)=>{let v,y=!1,w=null,S=null;n&&(v=a&&p.route.id?a[p.route.id]:void 0,w=p.route.errorElement||vm,u&&(c<0&&g===0?(Tm("route-fallback"),y=!0,S=null):c===g&&(y=!0,S=p.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,g+1)),d=()=>{let m;return v?m=w:y?m=S:p.route.Component?m=j.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=h,j.createElement(wm,{match:p,routeContext:{outlet:h,matches:f,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?j.createElement(ym,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var zd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(zd||{}),Dd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Dd||{});function jm(e){let t=j.useContext(Yl);return t||Q(!1),t}function Sm(e){let t=j.useContext(Id);return t||Q(!1),t}function Cm(e){let t=j.useContext(Pt);return t||Q(!1),t}function Ud(e){let t=Cm(),n=t.matches[t.matches.length-1];return n.route.id||Q(!1),n.route.id}function km(){var e;let t=j.useContext(Rd),n=Sm(),r=Ud();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Em(){let{router:e}=jm(zd.UseNavigateStable),t=Ud(Dd.UseNavigateStable),n=j.useRef(!1);return Md(()=>{n.current=!0}),j.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,vr({fromRouteId:t},i)))},[e,t])}const nu={};function Tm(e,t,n){nu[e]||(nu[e]=!0)}function Pm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Am(e){return hm(e.context)}function Ge(e){Q(!1)}function Lm(e){let{basename:t="/",children:n=null,location:r,navigationType:l=ft.Pop,navigator:i,static:s=!1,future:a}=e;Cr()&&Q(!1);let u=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:i,static:s,future:vr({v7_relativeSplatPath:!1},a)}),[u,a,i,s]);typeof r=="string"&&(r=Tn(r));let{pathname:h="/",search:p="",hash:g="",state:v=null,key:y="default"}=r,w=j.useMemo(()=>{let S=Sn(h,u);return S==null?null:{location:{pathname:S,search:p,hash:g,state:v,key:y},navigationType:l}},[u,h,p,g,v,y,l]);return w==null?null:j.createElement(Tt.Provider,{value:c},j.createElement(ql.Provider,{children:n,value:w}))}function Om(e){let{children:t,location:n}=e;return mm(Ms(t),n)}new Promise(()=>{});function Ms(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,l)=>{if(!j.isValidElement(r))return;let i=[...t,l];if(r.type===j.Fragment){n.push.apply(n,Ms(r.props.children,i));return}r.type!==Ge&&Q(!1),!r.props.index||!r.props.children||Q(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ms(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _l(){return _l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_l.apply(null,arguments)}function bd(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function _m(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Im(e,t){return e.button===0&&(!t||t==="_self")&&!_m(e)}const Rm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Mm=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],zm="6";try{window.__reactRouterVersion=zm}catch{}const Dm=j.createContext({isTransitioning:!1}),Um="startTransition",ru=Ef[Um];function bm(e){let{basename:t,children:n,future:r,window:l}=e,i=j.useRef();i.current==null&&(i.current=Uh({window:l,v5Compat:!0}));let s=i.current,[a,u]=j.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},h=j.useCallback(p=>{c&&ru?ru(()=>u(p)):u(p)},[u,c]);return j.useLayoutEffect(()=>s.listen(h),[s,h]),j.useEffect(()=>Pm(r),[r]),j.createElement(Lm,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Fm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,de=j.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:s,state:a,target:u,to:c,preventScrollReset:h,viewTransition:p}=t,g=bd(t,Rm),{basename:v}=j.useContext(Tt),y,w=!1;if(typeof c=="string"&&Bm.test(c)&&(y=c,Fm))try{let m=new URL(window.location.href),x=c.startsWith("//")?new URL(m.protocol+c):new URL(c),C=Sn(x.pathname,v);x.origin===m.origin&&C!=null?c=C+x.search+x.hash:w=!0}catch{}let S=cm(c,{relative:l}),f=Vm(c,{replace:s,state:a,target:u,preventScrollReset:h,relative:l,viewTransition:p});function d(m){r&&r(m),m.defaultPrevented||f(m)}return j.createElement("a",_l({},g,{href:y||S,onClick:w||i?r:d,ref:n,target:u}))}),$m=j.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:l=!1,className:i="",end:s=!1,style:a,to:u,viewTransition:c,children:h}=t,p=bd(t,Mm),g=Xl(u,{relative:p.relative}),v=Pn(),y=j.useContext(Id),{navigator:w,basename:S}=j.useContext(Tt),f=y!=null&&Jm(g)&&c===!0,d=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,m=v.pathname,x=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;l||(m=m.toLowerCase(),x=x?x.toLowerCase():null,d=d.toLowerCase()),x&&S&&(x=Sn(x,S)||x);const C=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let T=m===d||!s&&m.startsWith(d)&&m.charAt(C)==="/",P=x!=null&&(x===d||!s&&x.startsWith(d)&&x.charAt(d.length)==="/"),A={isActive:T,isPending:P,isTransitioning:f},B=T?r:void 0,O;typeof i=="function"?O=i(A):O=[i,T?"active":null,P?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let we=typeof a=="function"?a(A):a;return j.createElement(de,_l({},p,{"aria-current":B,className:O,ref:n,style:we,to:u,viewTransition:c}),typeof h=="function"?h(A):h)});var zs;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(zs||(zs={}));var lu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(lu||(lu={}));function Hm(e){let t=j.useContext(Yl);return t||Q(!1),t}function Vm(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,u=dm(),c=Pn(),h=Xl(e,{relative:s});return j.useCallback(p=>{if(Im(p,n)){p.preventDefault();let g=r!==void 0?r:Ol(c)===Ol(h);u(e,{replace:g,state:l,preventScrollReset:i,relative:s,viewTransition:a})}},[c,u,h,r,l,n,e,i,s,a])}function Jm(e,t){t===void 0&&(t={});let n=j.useContext(Dm);n==null&&Q(!1);let{basename:r}=Hm(zs.useViewTransitionState),l=Xl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=Sn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Sn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Rs(l.pathname,s)!=null||Rs(l.pathname,i)!=null}var Wm=typeof Element<"u",Qm=typeof Map=="function",Gm=typeof Set=="function",Km=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function ll(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,l;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!ll(e[r],t[r]))return!1;return!0}var i;if(Qm&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;for(i=e.entries();!(r=i.next()).done;)if(!ll(r.value[1],t.get(r.value[0])))return!1;return!0}if(Gm&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(i=e.entries();!(r=i.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(Km&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(l=Object.keys(e),n=l.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,l[r]))return!1;if(Wm&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((l[r]==="_owner"||l[r]==="__v"||l[r]==="__o")&&e.$$typeof)&&!ll(e[l[r]],t[l[r]]))return!1;return!0}return e!==e&&t!==t}var Ym=function(t,n){try{return ll(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const qm=Il(Ym);var Xm=function(e,t,n,r,l,i,s,a){if(!e){var u;if(t===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,l,i,s,a],h=0;u=new Error(t.replace(/%s/g,function(){return c[h++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}},Zm=Xm;const iu=Il(Zm);var eg=function(t,n,r,l){var i=r?r.call(l,t,n):void 0;if(i!==void 0)return!!i;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),a=Object.keys(n);if(s.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),c=0;c<s.length;c++){var h=s[c];if(!u(h))return!1;var p=t[h],g=n[h];if(i=r?r.call(l,p,g,h):void 0,i===!1||i===void 0&&p!==g)return!1}return!0};const tg=Il(eg);var Fd=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(Fd||{}),Mi={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},su=Object.values(Fd),Zl={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Bd=Object.entries(Zl).reduce((e,[t,n])=>(e[n]=t,e),{}),Ue="data-rh",hn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},mn=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},ng=e=>{let t=mn(e,"title");const n=mn(e,hn.TITLE_TEMPLATE);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,()=>t);const r=mn(e,hn.DEFAULT_TITLE);return t||r||void 0},rg=e=>mn(e,hn.ON_CHANGE_CLIENT_STATE)||(()=>{}),zi=(e,t)=>t.filter(n=>typeof n[e]<"u").map(n=>n[e]).reduce((n,r)=>({...n,...r}),{}),lg=(e,t)=>t.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const l=Object.keys(r);for(let i=0;i<l.length;i+=1){const a=l[i].toLowerCase();if(e.indexOf(a)!==-1&&r[a])return n.concat(r)}}return n},[]),ig=e=>console&&typeof console.warn=="function"&&console.warn(e),bn=(e,t,n)=>{const r={};return n.filter(l=>Array.isArray(l[e])?!0:(typeof l[e]<"u"&&ig(`Helmet: ${e} should be of type "Array". Instead found type "${typeof l[e]}"`),!1)).map(l=>l[e]).reverse().reduce((l,i)=>{const s={};i.filter(u=>{let c;const h=Object.keys(u);for(let g=0;g<h.length;g+=1){const v=h[g],y=v.toLowerCase();t.indexOf(y)!==-1&&!(c==="rel"&&u[c].toLowerCase()==="canonical")&&!(y==="rel"&&u[y].toLowerCase()==="stylesheet")&&(c=y),t.indexOf(v)!==-1&&(v==="innerHTML"||v==="cssText"||v==="itemprop")&&(c=v)}if(!c||!u[c])return!1;const p=u[c].toLowerCase();return r[c]||(r[c]={}),s[c]||(s[c]={}),r[c][p]?!1:(s[c][p]=!0,!0)}).reverse().forEach(u=>l.push(u));const a=Object.keys(s);for(let u=0;u<a.length;u+=1){const c=a[u],h={...r[c],...s[c]};r[c]=h}return l},[]).reverse()},sg=(e,t)=>{if(Array.isArray(e)&&e.length){for(let n=0;n<e.length;n+=1)if(e[n][t])return!0}return!1},og=e=>({baseTag:lg(["href"],e),bodyAttributes:zi("bodyAttributes",e),defer:mn(e,hn.DEFER),encode:mn(e,hn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:zi("htmlAttributes",e),linkTags:bn("link",["rel","href"],e),metaTags:bn("meta",["name","charset","http-equiv","property","itemprop"],e),noscriptTags:bn("noscript",["innerHTML"],e),onChangeClientState:rg(e),scriptTags:bn("script",["src","innerHTML"],e),styleTags:bn("style",["cssText"],e),title:ng(e),titleAttributes:zi("titleAttributes",e),prioritizeSeoTags:sg(e,hn.PRIORITIZE_SEO_TAGS)}),$d=e=>Array.isArray(e)?e.join(""):e,ag=(e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1},Di=(e,t)=>Array.isArray(e)?e.reduce((n,r)=>(ag(r,t)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:e,priority:[]},ou=(e,t)=>({...e,[t]:void 0}),ug=["noscript","script","style"],Ds=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Hd=e=>Object.keys(e).reduce((t,n)=>{const r=typeof e[n]<"u"?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r},""),cg=(e,t,n,r)=>{const l=Hd(n),i=$d(t);return l?`<${e} ${Ue}="true" ${l}>${Ds(i,r)}</${e}>`:`<${e} ${Ue}="true">${Ds(i,r)}</${e}>`},dg=(e,t,n=!0)=>t.reduce((r,l)=>{const i=l,s=Object.keys(i).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,h)=>{const p=typeof i[h]>"u"?h:`${h}="${Ds(i[h],n)}"`;return c?`${c} ${p}`:p},""),a=i.innerHTML||i.cssText||"",u=ug.indexOf(e)===-1;return`${r}<${e} ${Ue}="true" ${s}${u?"/>":`>${a}</${e}>`}`},""),Vd=(e,t={})=>Object.keys(e).reduce((n,r)=>{const l=Zl[r];return n[l||r]=e[r],n},t),fg=(e,t,n)=>{const r={key:t,[Ue]:!0},l=Vd(n,r);return[$.createElement("title",l,t)]},il=(e,t)=>t.map((n,r)=>{const l={key:r,[Ue]:!0};return Object.keys(n).forEach(i=>{const a=Zl[i]||i;if(a==="innerHTML"||a==="cssText"){const u=n.innerHTML||n.cssText;l.dangerouslySetInnerHTML={__html:u}}else l[a]=n[i]}),$.createElement(e,l)}),Te=(e,t,n=!0)=>{switch(e){case"title":return{toComponent:()=>fg(e,t.title,t.titleAttributes),toString:()=>cg(e,t.title,t.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Vd(t),toString:()=>Hd(t)};default:return{toComponent:()=>il(e,t),toString:()=>dg(e,t,n)}}},pg=({metaTags:e,linkTags:t,scriptTags:n,encode:r})=>{const l=Di(e,Mi.meta),i=Di(t,Mi.link),s=Di(n,Mi.script);return{priorityMethods:{toComponent:()=>[...il("meta",l.priority),...il("link",i.priority),...il("script",s.priority)],toString:()=>`${Te("meta",l.priority,r)} ${Te("link",i.priority,r)} ${Te("script",s.priority,r)}`},metaTags:l.default,linkTags:i.default,scriptTags:s.default}},hg=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:l,noscriptTags:i,styleTags:s,title:a="",titleAttributes:u,prioritizeSeoTags:c}=e;let{linkTags:h,metaTags:p,scriptTags:g}=e,v={toComponent:()=>[],toString:()=>""};return c&&({priorityMethods:v,linkTags:h,metaTags:p,scriptTags:g}=pg(e)),{priority:v,base:Te("base",t,r),bodyAttributes:Te("bodyAttributes",n,r),htmlAttributes:Te("htmlAttributes",l,r),link:Te("link",h,r),meta:Te("meta",p,r),noscript:Te("noscript",i,r),script:Te("script",g,r),style:Te("style",s,r),title:Te("title",{title:a,titleAttributes:u},r)}},Us=hg,Vr=[],Uo=!!(typeof window<"u"&&window.document&&window.document.createElement),bs=class{constructor(e,t){Qe(this,"instances",[]);Qe(this,"canUseDOM",Uo);Qe(this,"context");Qe(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Vr:this.instances,add:e=>{(this.canUseDOM?Vr:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?Vr:this.instances).indexOf(e);(this.canUseDOM?Vr:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Us({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},mg=parseInt($.version.split(".")[0],10),Fs=mg>=19,gg={},Jd=$.createContext(gg),Dt,Wd=(Dt=class extends j.Component{constructor(n){super(n);Qe(this,"helmetData");Fs?this.helmetData=null:this.helmetData=new bs(this.props.context||{},Dt.canUseDOM)}render(){return Fs?$.createElement($.Fragment,null,this.props.children):$.createElement(Jd.Provider,{value:this.helmetData.value},this.props.children)}},Qe(Dt,"canUseDOM",Uo),Dt),Gt=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${Ue}]`),l=[].slice.call(r),i=[];let s;return t&&t.length&&t.forEach(a=>{const u=document.createElement(e);for(const c in a)if(Object.prototype.hasOwnProperty.call(a,c))if(c==="innerHTML")u.innerHTML=a.innerHTML;else if(c==="cssText"){const h=a.cssText;u.appendChild(document.createTextNode(h))}else{const h=c,p=typeof a[h]>"u"?"":a[h];u.setAttribute(c,p)}u.setAttribute(Ue,"true"),l.some((c,h)=>(s=h,u.isEqualNode(c)))?l.splice(s,1):i.push(u)}),l.forEach(a=>{var u;return(u=a.parentNode)==null?void 0:u.removeChild(a)}),i.forEach(a=>n.appendChild(a)),{oldTags:l,newTags:i}},Bs=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(Ue),l=r?r.split(","):[],i=[...l],s=Object.keys(t);for(const a of s){const u=t[a]||"";n.getAttribute(a)!==u&&n.setAttribute(a,u),l.indexOf(a)===-1&&l.push(a);const c=i.indexOf(a);c!==-1&&i.splice(c,1)}for(let a=i.length-1;a>=0;a-=1)n.removeAttribute(i[a]);l.length===i.length?n.removeAttribute(Ue):n.getAttribute(Ue)!==s.join(",")&&n.setAttribute(Ue,s.join(","))},xg=(e,t)=>{typeof e<"u"&&document.title!==e&&(document.title=$d(e)),Bs("title",t)},au=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:l,linkTags:i,metaTags:s,noscriptTags:a,onChangeClientState:u,scriptTags:c,styleTags:h,title:p,titleAttributes:g}=e;Bs("body",r),Bs("html",l),xg(p,g);const v={baseTag:Gt("base",n),linkTags:Gt("link",i),metaTags:Gt("meta",s),noscriptTags:Gt("noscript",a),scriptTags:Gt("script",c),styleTags:Gt("style",h)},y={},w={};Object.keys(v).forEach(S=>{const{newTags:f,oldTags:d}=v[S];f.length&&(y[S]=f),d.length&&(w[S]=v[S].oldTags)}),t&&t(),u(e,y,w)},Fn=null,vg=e=>{Fn&&cancelAnimationFrame(Fn),e.defer?Fn=requestAnimationFrame(()=>{au(e,()=>{Fn=null})}):(au(e),Fn=null)},yg=vg,uu=class extends j.Component{constructor(){super(...arguments);Qe(this,"rendered",!1)}shouldComponentUpdate(t){return!tg(t,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:t}=this.props.context;t.remove(this),this.emitChange()}emitChange(){const{helmetInstances:t,setHelmet:n}=this.props.context;let r=null;const l=og(t.get().map(i=>{const{context:s,...a}=i.props;return a}));Wd.canUseDOM?yg(l):Us&&(r=Us(l)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:t}=this.props.context;t.add(this),this.emitChange()}render(){return this.init(),null}},sl=[],cu=e=>{const t={};for(const n of Object.keys(e))t[Bd[n]||n]=e[n];return t},Ot=e=>{const t={};for(const n of Object.keys(e)){const r=Zl[n];t[r||n]=e[n]}return t},du=(e,t)=>{if(!Uo)return;const n=document.getElementsByTagName(e)[0];if(!n)return;const r="data-rh-managed",l=n.getAttribute(r),i=l?l.split(","):[],s=Object.keys(t);for(const a of i)s.includes(a)||n.removeAttribute(a);for(const a of s){const u=t[a];u==null||u===!1?n.removeAttribute(a):u===!0?n.setAttribute(a,""):n.setAttribute(a,String(u))}s.length>0?n.setAttribute(r,s.join(",")):n.removeAttribute(r)},Ui=()=>{const e={},t={};for(const n of sl){const{htmlAttributes:r,bodyAttributes:l}=n.props;r&&Object.assign(e,cu(r)),l&&Object.assign(t,cu(l))}du("html",e),du("body",t)},wg=class extends j.Component{componentDidMount(){sl.push(this),Ui()}componentDidUpdate(){Ui()}componentWillUnmount(){const e=sl.indexOf(this);e!==-1&&sl.splice(e,1),Ui()}resolveTitle(){const{title:e,titleTemplate:t,defaultTitle:n}=this.props;return e&&t?t.replace(/%s/g,()=>Array.isArray(e)?e.join(""):e):e||n||void 0}renderTitle(){const e=this.resolveTitle();if(e===void 0)return null;const t=this.props.titleAttributes||{};return $.createElement("title",Ot(t),e)}renderBase(){const{base:e}=this.props;return e?$.createElement("base",Ot(e)):null}renderMeta(){const{meta:e}=this.props;return!e||!Array.isArray(e)?null:e.map((t,n)=>$.createElement("meta",{key:n,...Ot(t)}))}renderLink(){const{link:e}=this.props;return!e||!Array.isArray(e)?null:e.map((t,n)=>$.createElement("link",{key:n,...Ot(t)}))}renderScript(){const{script:e}=this.props;return!e||!Array.isArray(e)?null:e.map((t,n)=>{const{innerHTML:r,...l}=t,i=Ot(l);return r&&(i.dangerouslySetInnerHTML={__html:r}),$.createElement("script",{key:n,...i})})}renderStyle(){const{style:e}=this.props;return!e||!Array.isArray(e)?null:e.map((t,n)=>{const{cssText:r,...l}=t,i=Ot(l);return r&&(i.dangerouslySetInnerHTML={__html:r}),$.createElement("style",{key:n,...i})})}renderNoscript(){const{noscript:e}=this.props;return!e||!Array.isArray(e)?null:e.map((t,n)=>{const{innerHTML:r,...l}=t,i=Ot(l);return r&&(i.dangerouslySetInnerHTML={__html:r}),$.createElement("noscript",{key:n,...i})})}render(){return $.createElement($.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},bi,Ng=(bi=class extends j.Component{shouldComponentUpdate(e){return!qm(ou(this.props,"helmetData"),ou(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach(r=>{n={...n,[r]:e[r]}}),n}warnOnInvalidChildren(e,t){return iu(su.some(n=>e.type===n),typeof e.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${su.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),iu(!t||typeof t=="string"||Array.isArray(t)&&!t.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(e,t){let n={};return $.Children.forEach(e,r=>{if(!r||!r.props)return;const{children:l,...i}=r.props,s=Object.keys(i).reduce((u,c)=>(u[Bd[c]||c]=i[c],u),{});let{type:a}=r;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(r,l),a){case"Symbol(react.fragment)":t=this.mapChildrenToProps(l,t);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,s,l);break;default:t=this.mapObjectTypeChildren(r,t,s,l);break}}),this.mapArrayTypeChildrenToProps(n,t)}render(){const{children:e,...t}=this.props;let n={...t},{helmetData:r}=t;if(e&&(n=this.mapChildrenToProps(e,n)),r&&!(r instanceof bs)){const l=r;r=new bs(l.context,!0),delete n.helmetData}return Fs?$.createElement(wg,{...n}):r?$.createElement(uu,{...n,context:r.value}):$.createElement(Jd.Consumer,null,l=>$.createElement(uu,{...n,context:l}))}},Qe(bi,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),bi);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qd=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=j.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:s,...a},u)=>j.createElement("svg",{ref:u,...Sg,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Qd("lucide",l),...a},[...s.map(([c,h])=>j.createElement(c,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=(e,t)=>{const n=j.forwardRef(({className:r,...l},i)=>j.createElement(Cg,{ref:i,iconNode:t,className:Qd(`lucide-${jg(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=G("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=G("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=G("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=G("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=G("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=G("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=G("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=G("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=G("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=G("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=G("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=G("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=G("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=G("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=G("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=G("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=G("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=G("Ship",[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"iegodh"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76",key:"fp8vka"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M12 10v4",key:"1kjpxc"}],["path",{d:"M12 2v3",key:"qbqxhf"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=G("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=G("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=G("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=G("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ig="/assets/JJT-logo-BD0CWAle.png",fu=[{label:"Home",path:"/"},{label:"About JJT",path:"/about"},{label:"JJT Auto",path:"/auto"},{label:"JJT Steel",path:"/steel"},{label:"Machinery",path:"/machinery"},{label:"Contact",path:"/contact"}];function Rg(){const[e,t]=j.useState(!1);return o.jsxs("header",{className:`\r
fixed\r
top-0\r
left-0\r
w-full\r
z-50\r
bg-white/95\r
backdrop-blur\r
shadow-sm\r
`,children:[o.jsxs("div",{className:`\r
max-w-7xl\r
mx-auto\r
px-6\r
py-4\r
flex\r
items-center\r
justify-between\r
`,children:[o.jsxs(de,{to:"/",className:`\r
flex\r
items-center\r
gap-3\r
`,children:[o.jsx("img",{src:Ig,alt:"JJT GLOBAL - QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.",className:`\r
w-14\r
h-14\r
object-contain\r
`}),o.jsxs("div",{children:[o.jsx("div",{className:`\r
text-xl\r
font-bold\r
text-gray-900\r
`,children:"JJT GLOBAL"}),o.jsx("div",{className:`\r
text-[11px]\r
text-gray-600\r
leading-tight\r
`,children:"QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD."}),o.jsx("div",{className:`\r
text-[11px]\r
text-gray-500\r
leading-tight\r
`,children:"青岛君杰泰进出口贸易有限公司"})]})]}),o.jsx("nav",{className:`\r
hidden\r
lg:flex\r
items-center\r
gap-7\r
`,children:fu.map(n=>o.jsx($m,{to:n.path,className:({isActive:r})=>`

text-sm
font-medium
transition

${r?"text-blue-600":"text-gray-700 hover:text-blue-600"}

`,children:n.label},n.path))}),o.jsx("button",{className:`\r
lg:hidden\r
`,onClick:()=>t(!e),children:e?o.jsx(_g,{size:28}):o.jsx(Ag,{size:28})})]}),e&&o.jsx("div",{className:`\r
lg:hidden\r
bg-white\r
border-t\r
px-6\r
py-5\r
`,children:o.jsx("nav",{className:`\r
flex\r
flex-col\r
gap-5\r
`,children:fu.map(n=>o.jsx(de,{to:n.path,onClick:()=>t(!1),className:`\r
text-gray-700\r
font-medium\r
hover:text-blue-600\r
`,children:n.label},n.path))})})]})}const U={fullName:"QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.",chineseName:"青岛君杰泰进出口贸易有限公司",email:"fanheliang2006@gmail.com",phone:"+86 15590551259",whatsapp:"+86 15590551259",address:"Qingdao, Shandong, China",workingHours:"Mon - Fri: 9:00 - 18:00 (GMT+8)",foundedYear:2017,countriesServed:50,yearsOfExperience:9,mission:"To connect global buyers with reliable Chinese products through professional export services, strict quality control and efficient international logistics.",vision:"To become a trusted global China sourcing partner providing vehicles, steel products and industrial solutions to worldwide customers."};function Mg(){return o.jsx("footer",{className:"bg-blue-950 text-white",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"text-2xl font-bold mb-4",children:"JJT GLOBAL"}),o.jsx("p",{className:"text-sm text-white/70 leading-relaxed mb-4",children:"Qingdao Junjietai International Trading Co., Ltd. is a professional China export company specializing in used cars, steel structures, construction machinery and global supply chain solutions."}),o.jsx("p",{className:"text-sm text-white/60 leading-relaxed",children:"青岛君杰泰进出口贸易有限公司"})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-sm font-semibold mb-5 uppercase",children:"Quick Links"}),o.jsxs("ul",{className:"space-y-3",children:[o.jsx("li",{children:o.jsx(de,{to:"/",className:"text-sm text-white/70 hover:text-white",children:"Home"})}),o.jsx("li",{children:o.jsx(de,{to:"/about",className:"text-sm text-white/70 hover:text-white",children:"About JJT"})}),o.jsx("li",{children:o.jsx(de,{to:"/auto",className:"text-sm text-white/70 hover:text-white",children:"JJT Auto"})}),o.jsx("li",{children:o.jsx(de,{to:"/steel",className:"text-sm text-white/70 hover:text-white",children:"JJT Steel"})}),o.jsx("li",{children:o.jsx(de,{to:"/contact",className:"text-sm text-white/70 hover:text-white",children:"Contact Us"})})]})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-sm font-semibold mb-5 uppercase",children:"Our Business"}),o.jsxs("ul",{className:"space-y-3 text-sm text-white/70",children:[o.jsx("li",{children:"China Used Cars Export"}),o.jsx("li",{children:"Used Vehicle Supplier China"}),o.jsx("li",{children:"Used Car Exporter China"}),o.jsx("li",{children:"China Steel Supplier"}),o.jsx("li",{children:"Steel Structure Manufacturer China"}),o.jsx("li",{children:"Construction Machinery Exporter"})]})]}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-sm font-semibold mb-5 uppercase",children:"Contact Us"}),o.jsxs("ul",{className:"space-y-4",children:[o.jsxs("li",{className:"flex gap-3",children:[o.jsx(bo,{className:"w-5 h-5 flex-shrink-0"}),o.jsx("span",{className:"text-sm text-white/70",children:U.email})]}),o.jsxs("li",{className:"flex gap-3",children:[o.jsx(Fo,{className:"w-5 h-5 flex-shrink-0"}),o.jsx("span",{className:"text-sm text-white/70",children:U.phone})]}),o.jsxs("li",{className:"flex gap-3",children:[o.jsx(ni,{className:"w-5 h-5 flex-shrink-0"}),o.jsxs("span",{className:"text-sm text-white/70",children:["WhatsApp:",o.jsx("br",{}),U.whatsapp]})]}),o.jsxs("li",{className:"flex gap-3",children:[o.jsx(Zd,{className:"w-5 h-5 flex-shrink-0"}),o.jsx("span",{className:"text-sm text-white/70",children:U.address})]}),o.jsxs("li",{className:"flex gap-3",children:[o.jsx(Eg,{className:"w-5 h-5 flex-shrink-0"}),o.jsx("span",{className:"text-sm text-white/70",children:U.workingHours})]})]})]})]}),o.jsx("div",{className:"mt-12 pt-8 border-t border-white/10",children:o.jsxs("p",{className:"text-xs text-white/50 leading-relaxed text-center",children:["© ",new Date().getFullYear()," QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD. All Rights Reserved. Professional China Used Car Exporter, China Steel Supplier, Steel Structure Manufacturer and Construction Machinery Export Company."]})})]})})}function zg(){const t=`https://wa.me/${U.whatsapp.replace(/\s/g,"").replace(/\+/g,"")}`;return o.jsx("a",{href:t,target:"_blank",rel:"noreferrer",className:"fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform","aria-label":"WhatsApp",children:o.jsx(ni,{className:"w-6 h-6"})})}function Dg(){const e={"@context":"https://schema.org","@type":"Organization",name:U.fullName,alternateName:"JJT GLOBAL",url:"https://www.jjtglobal.com",logo:"https://www.jjtglobal.com/logo.png",description:"JJT GLOBAL is a professional China export company specializing in used vehicles, new energy vehicles, steel structures, construction machinery and global supply chain solutions.",foundingDate:String(U.foundedYear),address:{"@type":"PostalAddress",streetAddress:"5th floor, East Office Building, No. 15 Shanghai Road, Qianwan Bonded Port Area",addressLocality:"Qingdao",addressRegion:"Shandong",addressCountry:"China"},contactPoint:{"@type":"ContactPoint",telephone:U.phone,contactType:"sales",availableLanguage:["English","Chinese","Russian"]},email:U.email,areaServed:[{"@type":"Place",name:"Africa"},{"@type":"Place",name:"Central Asia"},{"@type":"Place",name:"Southeast Asia"},{"@type":"Place",name:"Middle East"},{"@type":"Place",name:"South America"}],makesOffer:[{"@type":"Offer",itemOffered:{"@type":"Product",name:"China Used Cars Export"}},{"@type":"Offer",itemOffered:{"@type":"Product",name:"Steel Structure Buildings"}},{"@type":"Offer",itemOffered:{"@type":"Product",name:"Construction Machinery Export"}}]};return o.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(e)}})}function Ug(){return o.jsxs("div",{className:`\r
      min-h-screen\r
      bg-background\r
      flex\r
      flex-col\r
      `,children:[o.jsx(Dg,{}),o.jsx(Rg,{}),o.jsx("main",{className:`\r
        flex-1\r
        `,children:o.jsx(Am,{})}),o.jsx(Mg,{}),o.jsx(zg,{})]})}function bg(){const{pathname:e}=Pn();return j.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const Fg="/assets/banner1-Br1kgT0_.jpg",Bg="/assets/banner2-CdK56E7-.jpg",$g="/assets/banner3-B7Z3ghGC.jpg";function Hg(){const e=[Fg,Bg,$g],[t,n]=j.useState(0);return j.useEffect(()=>{const r=setInterval(()=>{n(l=>l===e.length-1?0:l+1)},5e3);return()=>clearInterval(r)},[]),o.jsxs("section",{className:`\r
relative\r
min-h-screen\r
flex\r
items-center\r
justify-center\r
overflow-hidden\r
`,"aria-label":"JJT GLOBAL China Export Supplier",children:[o.jsx("div",{className:`\r
absolute\r
inset-0\r
bg-cover\r
bg-center\r
transition-all\r
duration-1000\r
`,style:{backgroundImage:`url(${e[t]})`}}),o.jsx("div",{className:`\r
absolute\r
inset-0\r
bg-black/55\r
`}),o.jsx("div",{className:`\r
relative\r
z-10\r
container\r
mx-auto\r
px-6\r
py-32\r
`,children:o.jsxs("div",{className:`\r
max-w-5xl\r
mx-auto\r
text-center\r
`,children:[o.jsxs("h1",{className:`\r
text-4xl\r
sm:text-5xl\r
md:text-6xl\r
lg:text-7xl\r
font-bold\r
text-white\r
leading-tight\r
mb-6\r
`,children:["QINGDAO JUNJIETAI",o.jsx("br",{}),o.jsx("span",{className:"text-amber-400",children:"INTERNATIONAL TRADE"}),o.jsx("br",{}),"China Export Supplier"]}),o.jsxs("p",{className:`\r
text-lg\r
md:text-xl\r
text-white/90\r
leading-relaxed\r
max-w-4xl\r
mx-auto\r
mb-10\r
`,children:["JJT GLOBAL is a professional China export company specializing in",o.jsx("strong",{children:" China Used Cars Export, New Energy Vehicles, Steel Structure Buildings, Construction Machinery and Industrial Products."}),o.jsx("br",{}),"We provide reliable sourcing, quality inspection, export documentation and international logistics solutions for global buyers."]}),o.jsxs("div",{className:`\r
flex\r
flex-col\r
sm:flex-row\r
justify-center\r
gap-5\r
mb-16\r
`,children:[o.jsxs(de,{to:"/auto",className:`\r
inline-flex\r
items-center\r
justify-center\r
gap-2\r
rounded-lg\r
bg-amber-400\r
text-black\r
px-8\r
py-4\r
font-semibold\r
hover:bg-amber-300\r
transition\r
`,children:["Explore Used Cars Export",o.jsx(Gd,{className:"w-5 h-5"})]}),o.jsx(de,{to:"/contact",className:`\r
inline-flex\r
items-center\r
justify-center\r
gap-2\r
rounded-lg\r
border-2\r
border-white/60\r
text-white\r
px-8\r
py-4\r
font-semibold\r
hover:bg-white/20\r
transition\r
`,children:"Request Export Quote"})]}),o.jsxs("div",{className:`\r
grid\r
grid-cols-2\r
md:grid-cols-4\r
gap-6\r
`,children:[o.jsx(Jr,{number:`${U.yearsOfExperience}+`,text:"Years China Export Experience"}),o.jsx(Jr,{number:`${U.countriesServed}+`,text:"Countries Served"}),o.jsx(Jr,{number:"500+",text:"Product Categories"}),o.jsx(Jr,{number:"24H",text:"Fast Response Service"})]})]})}),o.jsx("div",{className:`\r
absolute\r
bottom-24\r
left-0\r
right-0\r
flex\r
justify-center\r
gap-3\r
`,children:e.map((r,l)=>o.jsx("button",{onClick:()=>n(l),"aria-label":`Switch banner ${l+1}`,className:`

w-3
h-3
rounded-full

${t===l?"bg-amber-400":"bg-white/50"}

`},l))}),o.jsx("div",{className:`\r
absolute\r
bottom-0\r
left-0\r
right-0\r
`,children:o.jsx("svg",{viewBox:"0 0 1440 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:`\r
M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0Z\r
`,className:"fill-background"})})})]})}function Jr({number:e,text:t}){return o.jsxs("div",{className:`\r
text-white\r
text-center\r
`,children:[o.jsx("div",{className:`\r
text-3xl\r
font-bold\r
`,children:e}),o.jsx("div",{className:`\r
text-sm\r
text-white/70\r
mt-2\r
`,children:t})]})}const tf="/assets/company-CSnLkeJC.jpg",Vg=["Official used vehicle export qualification","Steel structure and building material supply","Multi-brand construction machinery sourcing","Global logistics and export support"];function Jg(){return o.jsx("section",{className:"py-20 md:py-28 bg-background",children:o.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",children:[o.jsxs("div",{children:[o.jsx("div",{className:`\r
              inline-block\r
              px-4\r
              py-1.5\r
              rounded-full\r
              bg-primary/10\r
              text-primary\r
              text-sm\r
              font-medium\r
              mb-6\r
              `,children:"About JJT GLOBAL"}),o.jsx("h2",{className:`\r
              text-3xl\r
              md:text-4xl\r
              font-bold\r
              text-foreground\r
              mb-6\r
              `,children:"Your Reliable China Export Partner"}),o.jsx("p",{className:`\r
              text-muted-foreground\r
              text-lg\r
              mb-6\r
              leading-relaxed\r
              `,children:"Qingdao Junjietai International Trading Co., Ltd. is a professional China export company specializing in used vehicles, steel structures, construction machinery and industrial products."}),o.jsx("p",{className:`\r
              text-muted-foreground\r
              text-lg\r
              mb-8\r
              leading-relaxed\r
              `,children:"With professional export qualifications and global supply chain resources, JJT GLOBAL provides reliable sourcing, inspection, logistics and delivery solutions for international customers."}),o.jsx("ul",{className:"space-y-4 mb-10",children:Vg.map((e,t)=>o.jsxs("li",{className:`\r
                  flex\r
                  items-center\r
                  gap-3\r
                  `,children:[o.jsx(ei,{className:`\r
                    w-5\r
                    h-5\r
                    text-primary\r
                    flex-shrink-0\r
                    `}),o.jsx("span",{className:"text-foreground/90",children:e})]},t))}),o.jsxs(de,{to:"/about",className:`\r
              inline-flex\r
              items-center\r
              gap-2\r
              text-primary\r
              font-semibold\r
              hover:gap-3\r
              transition-all\r
              `,children:["Learn More About Us",o.jsx("span",{children:"→"})]})]}),o.jsx("div",{className:"relative",children:o.jsx("img",{src:tf,alt:"JJT GLOBAL Company",className:`\r
              w-full\r
              aspect-[4/3]\r
              object-cover\r
              rounded-2xl\r
              shadow-xl\r
              `})})]})})})}const Wg=[{id:"vehicles",name:"Used Vehicles",description:"Quality inspected used cars and trucks from top Chinese brands, export-ready with competitive pricing and full documentation.",keySellingPoints:["Quality Inspected","Competitive Prices","Export-Ready"],products:[{id:"v1",name:"Sinotruk Howo Truck",description:"Heavy-duty used trucks in excellent condition for logistics and construction",imageUrl:"",highlights:["Low mileage","Full service history","Euro V emission"]},{id:"v2",name:"BYD Electric Sedan",description:"Reliable used electric sedans from BYD with great battery health",imageUrl:"",highlights:["Battery health 90%+","Clean interior","Fast charging"]},{id:"v3",name:"SUV AWD Model",description:"Versatile used SUVs suitable for various terrains and conditions",imageUrl:"",highlights:["All-wheel drive","Spacious cabin","Good condition"]}]},{id:"machinery",name:"Construction Machinery",description:"Reliable construction and engineering equipment direct from Chinese factories, with global shipping support.",keySellingPoints:["Reliable Performance","Factory Direct Supply","Global Shipping"],products:[{id:"m1",name:"Electric Forklift",description:"Efficient electric forklifts for warehouse and industrial use",imageUrl:"",highlights:["1.5-5 ton capacity","Zero emission","Low maintenance"]},{id:"m2",name:"Electric Sweeper",description:"Industrial electric sweepers for street and facility cleaning",imageUrl:"",highlights:["Large cleaning width","Long battery life","Easy operation"]},{id:"m3",name:"Hydraulic Excavator",description:"Heavy-duty excavators for construction and mining projects",imageUrl:"",highlights:["Strong digging force","Durable build","Fuel efficient"]}]},{id:"steel",name:"Steel Structure",description:"Custom-designed steel structure buildings, warehouses and workshops with fast installation and high quality steel.",keySellingPoints:["Custom Design","Fast Installation","High Quality Steel"],products:[{id:"s1",name:"Steel Structure Warehouse",description:"Large-span steel warehouses for industrial storage needs",imageUrl:"",highlights:["Custom span","Quick assembly","Corrosion resistant"]},{id:"s2",name:"Prefab Workshop",description:"Prefabricated steel workshops ready for fast construction",imageUrl:"",highlights:["Prefabricated parts","Cost effective","Flexible layout"]},{id:"s3",name:"Steel Structure Building",description:"Multi-purpose steel buildings for commercial and industrial use",imageUrl:"",highlights:["Wide application","Earthquake resistant","Long lifespan"]}]},{id:"autoparts",name:"Auto Parts",description:"Premium quality auto spare parts for various vehicle makes and models, with original quality and bulk wholesale supply.",keySellingPoints:["Original Quality","Wide Compatibility","Bulk Supply"],products:[{id:"a1",name:"Engine Parts",description:"Complete range of engine components for trucks and passenger cars",imageUrl:"",highlights:["Pistons & rings","Valves & gaskets","Bearings & bushings"]},{id:"a2",name:"Chassis Parts",description:"Durable chassis components for heavy duty and commercial vehicles",imageUrl:"",highlights:["Brake systems","Suspension parts","Steering components"]},{id:"a3",name:"Electrical Systems",description:"Reliable electrical parts for vehicle lighting and electronics",imageUrl:"",highlights:["LED lighting","Sensors & switches","Alternators & starters"]}]},{id:"steel-accessories",name:"Steel Structure Accessories",description:"Complete range of supporting components for steel structure projects, matching standard specifications for one-stop procurement.",keySellingPoints:["Matching Standards","Complete Range","One-Stop Solution"],products:[{id:"sa1",name:"Bolts & Fasteners",description:"High-strength bolts and fasteners for steel structure connections",imageUrl:"",highlights:["High strength grade","Various sizes","Anti-corrosion coating"]},{id:"sa2",name:"Sandwich Panels",description:"Insulated sandwich panels for roof and wall systems",imageUrl:"",highlights:["EPS / rock wool","Thermal insulation","Easy installation"]},{id:"sa3",name:"Purlins & Connectors",description:"C/Z purlins and connecting fittings for steel framing",imageUrl:"",highlights:["C & Z purlins","Anchor bolts","Connecting plates"]}]}],nf="/assets/banner-DDuPH6Bb.jpg",rf="/assets/banner-BJWWKh3v.jpg",lf="/assets/banner-B34edAdq.jpg",Qg={vehicles:o.jsx(li,{className:"w-8 h-8"}),machinery:o.jsx(qd,{className:"w-8 h-8"}),steel:o.jsx(Kd,{className:"w-8 h-8"}),autoparts:o.jsx(Og,{className:"w-8 h-8"}),"steel-accessories":o.jsx(Pg,{className:"w-8 h-8"})},pu={vehicles:nf,machinery:rf,steel:lf};function Gg(){return o.jsx("section",{className:"py-20 md:py-28 bg-background",children:o.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"text-center max-w-4xl mx-auto mb-16",children:[o.jsx("h2",{className:`\r
text-3xl\r
md:text-4xl\r
font-bold\r
text-foreground\r
mb-4\r
`,children:"China Export Products & Global Supply Solutions"}),o.jsx("p",{className:`\r
text-muted-foreground\r
text-lg\r
leading-relaxed\r
`,children:"JJT GLOBAL provides professional China export solutions, including used vehicles, new energy vehicles, steel structure buildings, construction machinery and industrial products for worldwide customers."})]}),o.jsx("div",{className:`\r
grid\r
grid-cols-1\r
md:grid-cols-2\r
lg:grid-cols-3\r
gap-8\r
`,children:Wg.map(e=>o.jsxs("div",{className:`\r
group\r
bg-white\r
rounded-xl\r
overflow-hidden\r
border\r
border-border\r
hover:shadow-xl\r
transition-all\r
duration-300\r
`,children:[pu[e.id]&&o.jsx("img",{src:pu[e.id],alt:e.name,className:`\r
w-full\r
h-52\r
object-cover\r
group-hover:scale-105\r
transition-transform\r
duration-500\r
`}),o.jsxs("div",{className:"p-8",children:[o.jsx("div",{className:`\r
w-16\r
h-16\r
rounded-lg\r
bg-primary/10\r
text-primary\r
flex\r
items-center\r
justify-center\r
mb-6\r
`,children:Qg[e.id]}),o.jsx("h3",{className:`\r
text-xl\r
font-bold\r
text-foreground\r
mb-3\r
`,children:e.name}),o.jsx("p",{className:`\r
text-muted-foreground\r
text-sm\r
mb-6\r
leading-relaxed\r
`,children:e.description}),o.jsx("ul",{className:"space-y-2 mb-6",children:e.keySellingPoints.map((t,n)=>o.jsxs("li",{className:`\r
flex\r
items-center\r
gap-2\r
text-sm\r
text-foreground/80\r
`,children:[o.jsx("span",{className:`\r
w-1.5\r
h-1.5\r
rounded-full\r
bg-primary\r
`}),t]},n))}),o.jsx(de,{to:e.id==="vehicles"?"/auto":e.id==="steel"?"/steel":e.id==="machinery"?"/machinery":"/contact",className:`\r
inline-flex\r
items-center\r
gap-2\r
text-primary\r
font-medium\r
text-sm\r
hover:gap-3\r
transition-all\r
`,children:"Explore Solutions →"})]})]},e.id))})]})})}const sf=[{id:"quality",iconName:"ShieldCheck",title:"Professional Quality Control",description:"JJT GLOBAL provides strict quality inspection and reliable sourcing services for China export products including vehicles, steel structures and machinery."},{id:"cost",iconName:"DollarSign",title:"Competitive China Supply Chain",description:"Direct connection with Chinese manufacturers and suppliers helps global buyers reduce purchasing costs and improve efficiency."},{id:"logistics",iconName:"Ship",title:"Global Export Logistics",description:"We provide professional international shipping, export documentation and delivery solutions for customers worldwide."},{id:"service",iconName:"Headphones",title:"Professional Export Support",description:"Our experienced team provides responsive communication and complete support from inquiry to final delivery."}],Kg={ShieldCheck:o.jsx(ri,{className:"w-7 h-7"}),DollarSign:o.jsx(Yd,{className:"w-7 h-7"}),Ship:o.jsx(ef,{className:"w-7 h-7"}),Headphones:o.jsx(Xd,{className:"w-7 h-7"})};function Yg(){return o.jsx("section",{className:"py-20 md:py-28 bg-muted/50",children:o.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"text-center max-w-4xl mx-auto mb-16",children:[o.jsx("h2",{className:`\r
text-3xl\r
md:text-4xl\r
font-bold\r
text-foreground\r
mb-4\r
`,children:"Why Choose JJT GLOBAL as Your China Export Partner"}),o.jsx("p",{className:`\r
text-muted-foreground\r
text-lg\r
leading-relaxed\r
`,children:"JJT GLOBAL provides reliable China sourcing and export services with professional quality control, international logistics support and global supply chain solutions for customers worldwide."})]}),o.jsx("div",{className:`\r
grid\r
grid-cols-1\r
md:grid-cols-2\r
lg:grid-cols-4\r
gap-8\r
`,children:sf.map(e=>o.jsxs("div",{className:`\r
text-center\r
bg-white\r
rounded-xl\r
p-8\r
hover:shadow-lg\r
transition\r
`,children:[o.jsx("div",{className:`\r
w-16\r
h-16\r
mx-auto\r
rounded-full\r
bg-primary/10\r
text-primary\r
flex\r
items-center\r
justify-center\r
mb-5\r
`,children:Kg[e.iconName]}),o.jsx("h3",{className:`\r
text-lg\r
font-bold\r
text-foreground\r
mb-3\r
`,children:e.title}),o.jsx("p",{className:`\r
text-sm\r
text-muted-foreground\r
leading-relaxed\r
`,children:e.description})]},e.id))})]})})}const qg=[{id:"1",region:"Africa",countries:"Nigeria, Ghana, Kenya, South Africa",highlight:"Largest export destination",exportYears:12},{id:"2",region:"Central Asia",countries:"Kazakhstan, Uzbekistan, Turkmenistan",highlight:"Growing infrastructure demand",exportYears:8},{id:"3",region:"Southeast Asia",countries:"Vietnam, Philippines, Indonesia",highlight:"Rapid industrial growth",exportYears:10},{id:"4",region:"Russia",countries:"Moscow, Siberia, Far East",highlight:"Strong machinery demand",exportYears:9},{id:"5",region:"Middle East",countries:"UAE, Saudi Arabia, Qatar",highlight:"Construction boom market",exportYears:7}];function Xg(){return o.jsx("section",{className:"py-20 md:py-28 bg-background",children:o.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"text-center max-w-4xl mx-auto mb-16",children:[o.jsx("h2",{className:`\r
text-3xl\r
md:text-4xl\r
font-bold\r
text-foreground\r
mb-4\r
`,children:"Global Markets Served by JJT GLOBAL China Export Company"}),o.jsxs("p",{className:`\r
text-muted-foreground\r
text-lg\r
leading-relaxed\r
`,children:["JJT GLOBAL provides professional China export services to customers in Africa, Russia, Central Asia, Southeast Asia, Middle East and South America through Qingdao China port. Serving ",U.countriesServed,"+ countries worldwide with reliable international trade solutions."]})]}),o.jsx("div",{className:`\r
grid\r
grid-cols-1\r
md:grid-cols-2\r
lg:grid-cols-3\r
gap-6\r
`,children:qg.map(e=>o.jsxs("div",{className:`\r
bg-white\r
rounded-xl\r
border\r
border-border\r
p-6\r
hover:shadow-lg\r
transition-shadow\r
`,children:[o.jsxs("div",{className:`\r
flex\r
items-start\r
justify-between\r
mb-4\r
`,children:[o.jsx("h3",{className:`\r
text-xl\r
font-bold\r
text-foreground\r
`,children:e.region}),o.jsxs("span",{className:`\r
text-sm\r
font-semibold\r
text-primary\r
bg-primary/10\r
px-3\r
py-1\r
rounded-full\r
`,children:[e.exportYears," yrs"]})]}),o.jsx("p",{className:`\r
text-sm\r
text-muted-foreground\r
mb-3\r
`,children:e.countries}),o.jsx("p",{className:`\r
text-sm\r
font-medium\r
text-foreground/80\r
leading-relaxed\r
`,children:e.highlight})]},e.id))})]})})}function Zg(){return o.jsxs("section",{className:"py-20 md:py-28 bg-primary relative overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 opacity-5",style:{backgroundImage:'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.4" fill-rule="evenodd"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E")'}}),o.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:o.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[o.jsx("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6",children:"Ready to Start Your Project?"}),o.jsx("p",{className:"text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto",children:"Get a free quote from our expert team. We respond within 24 hours and provide end-to-end support from inquiry to delivery."}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-12",children:[o.jsxs(de,{to:"/contact",className:"inline-flex items-center justify-center gap-2 rounded-lg bg-white text-primary px-8 py-4 text-base font-semibold hover:bg-white/90 transition-colors",children:["Inquire Now",o.jsx(Gd,{className:"w-5 h-5"})]}),o.jsxs("a",{href:`mailto:${U.email}`,className:"inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 text-white px-8 py-4 text-base font-semibold hover:bg-white/10 transition-colors",children:[o.jsx(bo,{className:"w-5 h-5"}),U.email]})]}),o.jsxs("div",{className:"flex flex-wrap justify-center gap-8 text-white/70",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Fo,{className:"w-5 h-5"}),o.jsx("span",{children:U.phone})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(ni,{className:"w-5 h-5 text-[#25D366]"}),o.jsxs("span",{children:["WhatsApp: ",U.whatsapp]})]})]})]})})]})}function ex(){return o.jsxs("div",{className:"min-h-screen bg-background",children:[o.jsx(Hg,{}),o.jsx(Jg,{}),o.jsx(Gg,{}),o.jsx(Yg,{}),o.jsx(Xg,{}),o.jsx(Zg,{})]})}const tx="/assets/banner-BINWnEGH.jpg",nx="/assets/global-CM8gBAw8.jpg",rx={ShieldCheck:o.jsx(ri,{className:"w-8 h-8"}),DollarSign:o.jsx(Yd,{className:"w-8 h-8"}),Ship:o.jsx(ef,{className:"w-8 h-8"}),Headphones:o.jsx(Xd,{className:"w-8 h-8"})};function lx(){return o.jsxs("div",{className:"bg-white",children:[o.jsxs("section",{className:`\r
relative\r
min-h-[600px]\r
flex\r
items-center\r
bg-cover\r
bg-center\r
text-white\r
`,style:{backgroundImage:`url(${tx})`},children:[o.jsx("div",{className:"absolute inset-0 bg-black/50"}),o.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6",children:[o.jsx("h1",{className:`\r
text-5xl\r
md:text-6xl\r
font-bold\r
mb-6\r
`,children:"About JJT GLOBAL"}),o.jsxs("p",{className:`\r
text-xl\r
text-gray-200\r
max-w-3xl\r
leading-relaxed\r
`,children:["QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.",o.jsx("br",{}),"青岛君杰泰进出口贸易有限公司",o.jsx("br",{}),o.jsx("br",{}),"Your trusted China export partner, connecting quality products with global markets."]})]})]}),o.jsx("section",{className:"py-20 px-6",children:o.jsxs("div",{className:`\r
max-w-7xl\r
mx-auto\r
grid\r
md:grid-cols-2\r
gap-12\r
items-center\r
`,children:[o.jsxs("div",{children:[o.jsx("div",{className:`\r
inline-block\r
px-4\r
py-2\r
rounded-full\r
bg-blue-100\r
text-blue-700\r
mb-5\r
`,children:"Who We Are"}),o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
mb-6\r
`,children:"Connecting China Quality With The World"}),o.jsxs("p",{className:`\r
text-gray-600\r
leading-relaxed\r
mb-5\r
`,children:[U.chineseName,o.jsx("br",{}),U.fullName]}),o.jsxs("p",{className:`\r
text-gray-600\r
leading-relaxed\r
mb-5\r
`,children:["Established in ",U.foundedYear,", JJT GLOBAL is a professional China export company specializing in international trade solutions."]}),o.jsxs("p",{className:`\r
text-gray-600\r
leading-relaxed\r
`,children:["Our main businesses include:",o.jsx("br",{}),o.jsx("br",{}),"✓ China Used Vehicle Export",o.jsx("br",{}),"✓ New Energy Vehicle Export",o.jsx("br",{}),"✓ Steel Structure & Steel Products",o.jsx("br",{}),"✓ Construction Machinery Export",o.jsx("br",{}),"✓ Global Supply Chain Service"]})]}),o.jsxs("div",{children:[o.jsx("img",{src:tf,alt:"Qingdao Junjietai International Trading Company",className:`\r
rounded-2xl\r
shadow-xl\r
w-full\r
`}),o.jsxs("div",{className:`\r
mt-6\r
bg-blue-900\r
text-white\r
rounded-xl\r
p-6\r
`,children:[o.jsxs("div",{className:`\r
text-4xl\r
font-bold\r
`,children:[U.yearsOfExperience,"+"]}),o.jsx("div",{children:"Years Export Experience"})]})]})]})}),o.jsx("section",{className:`\r
bg-blue-900\r
text-white\r
py-16\r
px-6\r
`,children:o.jsxs("div",{className:`\r
max-w-7xl\r
mx-auto\r
grid\r
grid-cols-2\r
md:grid-cols-4\r
gap-8\r
text-center\r
`,children:[o.jsxs("div",{children:[o.jsxs("div",{className:"text-4xl font-bold",children:[U.yearsOfExperience,"+"]}),o.jsx("p",{children:"Years Experience"})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"text-4xl font-bold",children:[U.countriesServed,"+"]}),o.jsx("p",{children:"Countries Served"})]}),o.jsxs("div",{children:[o.jsx("div",{className:"text-4xl font-bold",children:"500+"}),o.jsx("p",{children:"Products"})]}),o.jsxs("div",{children:[o.jsx("div",{className:"text-4xl font-bold",children:"24h"}),o.jsx("p",{children:"Response"})]})]})}),o.jsx("section",{className:`\r
py-20\r
px-6\r
`,children:o.jsxs("div",{className:`\r
max-w-7xl\r
mx-auto\r
`,children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
text-center\r
mb-12\r
`,children:"Our Core Advantages"}),o.jsx("div",{className:`\r
grid\r
md:grid-cols-2\r
gap-8\r
`,children:sf.map(e=>o.jsxs("div",{className:`\r
border\r
rounded-xl\r
p-8\r
hover:shadow-lg\r
transition\r
`,children:[o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-lg\r
bg-blue-100\r
text-blue-700\r
flex\r
items-center\r
justify-center\r
mb-5\r
`,children:rx[e.iconName]}),o.jsx("h3",{className:`\r
text-xl\r
font-bold\r
mb-3\r
`,children:e.title}),o.jsx("p",{className:"text-gray-600",children:e.description})]},e.id))})]})}),o.jsx("section",{className:`\r
py-20\r
px-6\r
bg-gray-50\r
`,children:o.jsxs("div",{className:`\r
max-w-7xl\r
mx-auto\r
grid\r
md:grid-cols-2\r
gap-12\r
items-center\r
`,children:[o.jsx("img",{src:nx,alt:"JJT Global Export Network",className:`\r
rounded-2xl\r
shadow-lg\r
`}),o.jsxs("div",{children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
mb-6\r
`,children:"Global Business Network"}),o.jsxs("p",{className:`\r
text-gray-600\r
leading-relaxed\r
`,children:["JJT GLOBAL serves customers in:",o.jsx("br",{}),o.jsx("br",{}),"Africa, Middle East, Central Asia, Russia, Southeast Asia, South America."]})]})]})}),o.jsx("section",{className:`\r
py-20\r
px-6\r
`,children:o.jsxs("div",{className:`\r
max-w-5xl\r
mx-auto\r
grid\r
md:grid-cols-2\r
gap-8\r
`,children:[o.jsxs("div",{className:`\r
bg-gray-50\r
p-8\r
rounded-xl\r
`,children:[o.jsx(Lg,{className:"text-blue-700 mb-5"}),o.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Our Mission"}),o.jsx("p",{className:"text-gray-600",children:U.mission})]}),o.jsxs("div",{className:`\r
bg-gray-50\r
p-8\r
rounded-xl\r
`,children:[o.jsx(Tg,{className:"text-blue-700 mb-5"}),o.jsx("h3",{className:"text-2xl font-bold mb-4",children:"Our Vision"}),o.jsx("p",{className:"text-gray-600",children:U.vision})]})]})}),o.jsxs("section",{className:`\r
bg-blue-900\r
text-white\r
py-20\r
px-6\r
text-center\r
`,children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
mb-6\r
`,children:"Ready To Work With JJT?"}),o.jsx(de,{to:"/contact",className:`\r
bg-white\r
text-blue-700\r
px-8\r
py-4\r
rounded-lg\r
font-semibold\r
inline-block\r
`,children:"Contact Us"})]})]})}const ix="/assets/banner-DiV6Gsy4.jpg";function sx(){return o.jsxs("div",{className:"bg-white",children:[o.jsxs("section",{className:`\r
relative\r
min-h-[550px]\r
flex\r
items-center\r
bg-cover\r
bg-center\r
text-white\r
`,style:{backgroundImage:`url(${ix})`},children:[o.jsx("div",{className:`\r
absolute\r
inset-0\r
bg-black/50\r
`}),o.jsxs("div",{className:`\r
relative\r
z-10\r
max-w-7xl\r
mx-auto\r
px-6\r
w-full\r
`,children:[o.jsx("h1",{className:`\r
text-5xl\r
md:text-6xl\r
font-bold\r
mb-6\r
`,children:"Contact JJT GLOBAL"}),o.jsx("p",{className:`\r
text-xl\r
text-gray-200\r
max-w-3xl\r
`,children:"QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD. is a professional China export supplier providing used vehicles, steel structures, construction machinery and global supply chain solutions."})]})]}),o.jsx("section",{className:`\r
py-20\r
px-6\r
`,children:o.jsx("div",{className:`\r
max-w-7xl\r
mx-auto\r
`,children:o.jsxs("div",{className:`\r
grid\r
md:grid-cols-2\r
gap-10\r
`,children:[o.jsxs("div",{className:`\r
border\r
rounded-2xl\r
p-8\r
shadow-sm\r
`,children:[o.jsx("h2",{className:`\r
text-3xl\r
font-bold\r
mb-8\r
`,children:"Company Information"}),o.jsxs("div",{className:"space-y-5",children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Company Name:"}),o.jsx("br",{}),"QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD."]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Brand:"}),o.jsx("br",{}),"JJT GLOBAL"]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Business Scope:"}),o.jsx("br",{}),"China Used Car Export, Steel Structure Building, Construction Machinery Export, Industrial Equipment Supply."]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Headquarters:"}),o.jsx("br",{}),"Qingdao, Shandong, China"]})]})]}),o.jsxs("div",{className:`\r
border\r
rounded-2xl\r
p-8\r
shadow-sm\r
`,children:[o.jsx("h2",{className:`\r
text-3xl\r
font-bold\r
mb-8\r
`,children:"Contact Details"}),o.jsxs("div",{className:`\r
space-y-6\r
`,children:[o.jsxs("div",{className:"flex gap-4",children:[o.jsx(bo,{className:"text-blue-600"}),o.jsxs("div",{children:[o.jsx("p",{className:"font-semibold",children:"Email"}),o.jsx("p",{children:"fanheliang2006@gmail.com"})]})]}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx(ni,{className:"text-blue-600"}),o.jsxs("div",{children:[o.jsx("p",{className:"font-semibold",children:"WhatsApp"}),o.jsx("p",{children:"+86 15590551259"})]})]}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx(Fo,{className:"text-blue-600"}),o.jsxs("div",{children:[o.jsx("p",{className:"font-semibold",children:"Phone"}),o.jsx("p",{children:"+86 15590551259"})]})]}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx(Zd,{className:"text-blue-600"}),o.jsxs("div",{children:[o.jsx("p",{className:"font-semibold",children:"Office Address"}),o.jsx("p",{children:"5th Floor, East Office Building, No.15 Shanghai Road, Qianwan Bonded Port Area, Qingdao Section, China (Shandong) Pilot Free Trade Zone"})]})]})]})]})]})})}),o.jsx("section",{className:`\r
bg-gray-50\r
py-20\r
px-6\r
`,children:o.jsxs("div",{className:`\r
max-w-7xl\r
mx-auto\r
`,children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
text-center\r
mb-12\r
`,children:"Our Export Business Areas"}),o.jsxs("div",{className:`\r
grid\r
md:grid-cols-3\r
gap-8\r
`,children:[o.jsxs("div",{className:`\r
bg-white\r
rounded-xl\r
p-8\r
`,children:[o.jsx(kg,{className:"text-blue-600"}),o.jsx("h3",{className:`\r
text-xl\r
font-bold\r
mt-5\r
`,children:"China Used Car Export"}),o.jsx("p",{className:`\r
text-gray-600\r
mt-3\r
`,children:"Professional used vehicle export service from China to global markets."})]}),o.jsxs("div",{className:`\r
bg-white\r
rounded-xl\r
p-8\r
`,children:[o.jsx(Kd,{className:"text-blue-600"}),o.jsx("h3",{className:`\r
text-xl\r
font-bold\r
mt-5\r
`,children:"China Steel Structure Supplier"}),o.jsx("p",{className:`\r
text-gray-600\r
mt-3\r
`,children:"Complete steel building solutions including steel structures, panels and accessories."})]}),o.jsxs("div",{className:`\r
bg-white\r
rounded-xl\r
p-8\r
`,children:[o.jsx(li,{className:"text-blue-600"}),o.jsx("h3",{className:`\r
text-xl\r
font-bold\r
mt-5\r
`,children:"Construction Machinery Export"}),o.jsx("p",{className:`\r
text-gray-600\r
mt-3\r
`,children:"Chinese engineering machinery and industrial equipment export solutions."})]})]})]})}),o.jsx("section",{className:`\r
bg-blue-900\r
text-white\r
py-20\r
px-6\r
`,children:o.jsxs("div",{className:`\r
max-w-5xl\r
mx-auto\r
text-center\r
`,children:[o.jsx(ti,{size:50,className:"mx-auto"}),o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
mt-6\r
mb-5\r
`,children:"Your Reliable China Export Partner"}),o.jsx("p",{className:"text-blue-100",children:"Contact JJT GLOBAL for vehicles, steel products and machinery sourcing."})]})})]})}function ox(){return o.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:o.jsxs("div",{className:"text-center px-4",children:[o.jsx("h1",{className:"text-7xl md:text-9xl font-bold text-primary/20 mb-4",children:"404"}),o.jsx("h2",{className:"text-2xl font-bold text-foreground mb-3",children:"Page Not Found"}),o.jsx("p",{className:"text-muted-foreground mb-8 max-w-md mx-auto",children:"The page you're looking for doesn't exist or has been moved."}),o.jsx(de,{to:"/",className:"inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors",children:"Back to Home"})]})})}const ax="/assets/about-auto-BWkuR5FW.jpg",ux="/assets/ev-CnKYkn9a.jpg",cx="/assets/suv-BLJ39Tde.jpg",dx="/assets/commercial-oE_Mbxq1.jpg",fx="/assets/special-CIVmfuXB.jpg",px="/assets/shipping-Bzyjvlqy.jpg";function hx(){const e=[{title:"China New Energy Vehicles Export",image:ux,desc:"Professional export of Chinese electric vehicles (EV), new energy vehicles and smart cars to global markets."},{title:"China Used Cars Export",image:cx,desc:"Reliable used cars from China including SUVs, passenger vehicles and popular international models."},{title:"Commercial Vehicles Export",image:dx,desc:"China commercial vehicles including trucks, vans and transportation solutions for global buyers."},{title:"Special Vehicles Supply",image:fx,desc:"Customized special vehicles and professional automotive solutions according to different market requirements."}],t=["Official China used vehicle export qualification","Professional vehicle inspection and quality control","Reliable Chinese vehicle supplier network","Complete export documentation service","Global vehicle shipping and logistics support"],n=["Vehicle Selection","Vehicle Inspection","Export Documentation","International Shipping","Customer Delivery"];return o.jsxs("div",{className:"bg-white",children:[o.jsxs(Ng,{children:[o.jsx("title",{children:"China Used Car Export | New Energy Vehicle Supplier | JJT Auto"}),o.jsx("meta",{name:"description",content:`\r
JJT Auto is a professional China used car export company providing used vehicles, new energy vehicles, commercial vehicles and complete vehicle export solutions worldwide.\r
`}),o.jsx("meta",{name:"keywords",content:`\r
China Used Car Export,\r
Used Cars From China,\r
China Vehicle Export,\r
China New Energy Vehicle Export,\r
Chinese Electric Vehicle Supplier,\r
China Auto Export Company,\r
JJT Auto,\r
Qingdao Junjietai International Trading\r
`}),o.jsx("script",{type:"application/ld+json",children:`

{
"@context":"https://schema.org",
"@type":"Organization",
"name":"QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.",
"brand":"JJT Auto",
"description":"Professional China used car export company providing vehicles, new energy vehicles and international automobile export services.",
"address":{
"@type":"PostalAddress",
"addressLocality":"Qingdao",
"addressRegion":"Shandong",
"addressCountry":"China"
},
"areaServed":[
"Africa",
"Central Asia",
"Russia",
"Middle East",
"Southeast Asia",
"South America"
]
}

`})]}),o.jsxs("section",{className:`\r
min-h-[650px]\r
flex\r
items-center\r
relative\r
bg-cover\r
bg-center\r
text-white\r
`,style:{backgroundImage:`url(${nf})`},children:[o.jsx("div",{className:`\r
absolute\r
inset-0\r
bg-black/50\r
`}),o.jsx("div",{className:`\r
relative\r
z-10\r
max-w-7xl\r
mx-auto\r
px-6\r
w-full\r
`,children:o.jsxs("div",{className:"max-w-4xl",children:[o.jsxs("h1",{className:`\r
text-5xl\r
md:text-6xl\r
font-bold\r
leading-tight\r
mb-6\r
`,children:["China Used Car Export Partner",o.jsx("br",{}),"JJT Auto"]}),o.jsx("p",{className:`\r
text-xl\r
text-gray-200\r
leading-relaxed\r
mb-8\r
`,children:"JJT Auto, a brand of QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD., provides professional China used car export, new energy vehicle export and global automotive supply chain services."}),o.jsx("a",{href:"/contact",className:`\r
inline-block\r
bg-white\r
text-blue-700\r
px-8\r
py-4\r
rounded-lg\r
font-semibold\r
`,children:"Request Vehicle Quote"})]})})]}),o.jsx("section",{className:`\r
py-20\r
px-6\r
`,children:o.jsxs("div",{className:`\r
max-w-7xl\r
mx-auto\r
grid\r
md:grid-cols-2\r
gap-12\r
items-center\r
`,children:[o.jsxs("div",{children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
mb-6\r
`,children:"Professional China Vehicle Export Service"}),o.jsx("p",{className:`\r
text-gray-600\r
leading-relaxed\r
mb-5\r
`,children:"JJT Auto specializes in China automobile export services, supplying quality used cars, electric vehicles, SUVs and commercial vehicles to international buyers."}),o.jsx("p",{className:`\r
text-gray-600\r
leading-relaxed\r
`,children:"With professional sourcing, vehicle inspection, export documentation and global logistics support, we help overseas dealers purchase vehicles from China efficiently."})]}),o.jsx("div",{children:o.jsx("img",{src:ax,alt:`\r
JJT Auto China Used Car Export Service\r
`,className:`\r
rounded-2xl\r
shadow-xl\r
w-full\r
`})})]})}),o.jsx("section",{className:`\r
bg-gray-50\r
py-20\r
px-6\r
`,children:o.jsxs("div",{className:`\r
max-w-7xl\r
mx-auto\r
`,children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
text-center\r
mb-12\r
`,children:"China Vehicle Export Categories"}),o.jsx("p",{className:`\r
text-center\r
text-gray-600\r
max-w-3xl\r
mx-auto\r
mb-12\r
`,children:"JJT Auto provides various China vehicle export solutions, including used cars, electric vehicles, passenger cars, commercial vehicles and customized vehicles for global markets."}),o.jsx("div",{className:`\r
grid\r
md:grid-cols-4\r
gap-6\r
`,children:e.map((r,l)=>o.jsxs("div",{className:`\r
bg-white\r
rounded-xl\r
overflow-hidden\r
shadow-sm\r
hover:shadow-xl\r
transition\r
`,children:[o.jsx("img",{src:r.image,alt:r.title,className:`\r
h-44\r
w-full\r
object-cover\r
`}),o.jsxs("div",{className:`\r
p-6\r
`,children:[o.jsx("h3",{className:`\r
text-xl\r
font-bold\r
mb-3\r
`,children:r.title}),o.jsx("p",{className:`\r
text-gray-600\r
text-sm\r
leading-relaxed\r
`,children:r.desc})]})]},l))})]})}),o.jsx("section",{className:`\r
py-20\r
px-6\r
`,children:o.jsxs("div",{className:`\r
max-w-7xl\r
mx-auto\r
`,children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
text-center\r
mb-12\r
`,children:"China Used Vehicle Export Process"}),o.jsx("div",{className:`\r
grid\r
md:grid-cols-5\r
gap-5\r
`,children:n.map((r,l)=>o.jsxs("div",{className:`\r
border\r
rounded-xl\r
p-6\r
text-center\r
bg-white\r
`,children:[o.jsxs("div",{className:`\r
text-blue-600\r
font-bold\r
text-3xl\r
mb-3\r
`,children:["0",l+1]}),o.jsx("h3",{className:`\r
font-semibold\r
`,children:r})]},l))})]})}),o.jsx("section",{className:`\r
py-20\r
px-6\r
bg-gray-50\r
`,children:o.jsxs("div",{className:`\r
max-w-7xl\r
mx-auto\r
grid\r
md:grid-cols-2\r
gap-12\r
items-center\r
`,children:[o.jsx("div",{children:o.jsx("img",{src:px,alt:`\r
China Vehicle Export Shipping Service\r
`,className:`\r
rounded-2xl\r
shadow-lg\r
w-full\r
`})}),o.jsxs("div",{children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
mb-6\r
`,children:"Global China Vehicle Export Service"}),o.jsx("p",{className:`\r
text-gray-600\r
leading-relaxed\r
mb-6\r
`,children:"JJT Auto provides complete international vehicle export services from China, including sourcing, inspection, customs documentation, shipping arrangement and delivery."}),o.jsx("div",{className:`\r
space-y-4\r
`,children:t.map((r,l)=>o.jsxs("div",{className:`\r
flex\r
gap-3\r
items-center\r
`,children:[o.jsx(ei,{className:`\r
text-blue-600\r
`}),o.jsx("span",{children:r})]},l))})]})]})}),o.jsx("section",{className:`\r
py-20\r
px-6\r
`,children:o.jsxs("div",{className:`\r
max-w-5xl\r
mx-auto\r
`,children:[o.jsx("h2",{className:`\r
text-3xl\r
font-bold\r
mb-6\r
`,children:"Why Choose JJT Auto as Your China Vehicle Export Partner?"}),o.jsx("p",{className:`\r
text-gray-600\r
leading-relaxed\r
mb-5\r
`,children:"QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD. is a professional China export company providing international vehicle trading solutions. Through reliable Chinese supplier networks, strict quality inspection and efficient logistics services, JJT Auto helps global dealers purchase vehicles from China."}),o.jsx("p",{className:`\r
text-gray-600\r
leading-relaxed\r
`,children:"Our China used car export business covers used passenger cars, electric vehicles, new energy vehicles, SUVs, commercial vehicles and special purpose vehicles. We serve customers in Africa, Russia, Central Asia, Southeast Asia, Middle East and South America."})]})}),o.jsx("section",{className:`\r
bg-blue-900\r
text-white\r
py-20\r
px-6\r
`,children:o.jsxs("div",{className:`\r
max-w-5xl\r
mx-auto\r
text-center\r
`,children:[o.jsx(ti,{size:50,className:`\r
mx-auto\r
`}),o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
mt-6\r
mb-4\r
`,children:"Your Trusted China Used Car Export Partner"}),o.jsx("p",{className:`\r
text-blue-100\r
text-lg\r
mb-8\r
`,children:"Contact JJT Auto for China vehicle sourcing, used car export and international automotive solutions."}),o.jsx("a",{href:"/contact",className:`\r
inline-block\r
bg-white\r
text-blue-700\r
px-8\r
py-4\r
rounded-lg\r
font-semibold\r
`,children:"Contact JJT Auto"})]})})]})}const hu="/assets/factory-C74umhF8.jpg",mx="/assets/warehouse-vT7uEYWy.jpg",gx="/assets/workshop-Ct0l2V2O.jpg",xx="/assets/frame-Bl0vXVkG.jpg",vx="/assets/shipping-DP2x8US2.jpg";function yx(){const e=[{title:"Prefabricated Steel Warehouse",image:mx,desc:"Durable prefabricated steel warehouse buildings designed for industrial storage and commercial applications."},{title:"Industrial Steel Workshop",image:gx,desc:"Customized steel structure workshops for factories, manufacturing plants and industrial projects."},{title:"Steel Frame Building",image:xx,desc:"High-strength steel frame construction solutions with professional engineering support."},{title:"Customized Steel Buildings",image:hu,desc:"Complete steel building solutions based on customer requirements and project specifications."}],t=["Project Requirement","Engineering Design","Steel Fabrication","Quality Inspection","International Shipping"];return o.jsxs("div",{className:"bg-white",children:[o.jsxs("section",{className:`\r
relative\r
min-h-[680px]\r
flex\r
items-center\r
bg-cover\r
bg-center\r
text-white\r
`,style:{backgroundImage:`url(${lf})`},children:[o.jsx("div",{className:`\r
absolute\r
inset-0\r
bg-black/50\r
`}),o.jsx("div",{className:`\r
relative\r
z-10\r
max-w-7xl\r
mx-auto\r
px-6\r
w-full\r
`,children:o.jsxs("div",{className:"max-w-4xl",children:[o.jsxs("h1",{className:`\r
text-5xl\r
md:text-6xl\r
font-bold\r
leading-tight\r
mb-6\r
`,children:["China Steel Structure Manufacturer",o.jsx("br",{}),"Complete Steel Building Solutions"]}),o.jsx("p",{className:`\r
text-xl\r
text-gray-200\r
leading-relaxed\r
mb-8\r
`,children:"JJT GLOBAL is a professional China steel structure exporter. QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD. (青岛君杰泰进出口贸易有限公司) provides prefabricated steel buildings, industrial workshops, steel warehouses and complete construction solutions for global markets."}),o.jsx("a",{href:"/contact",className:`\r
inline-block\r
bg-white\r
text-blue-800\r
px-8\r
py-4\r
rounded-lg\r
font-semibold\r
hover:bg-blue-50\r
`,children:"Get Steel Project Quote"})]})})]}),o.jsx("section",{className:"py-20 px-6",children:o.jsxs("div",{className:"max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center",children:[o.jsxs("div",{children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
mb-6\r
`,children:"Professional Steel Structure Export Partner From China"}),o.jsx("p",{className:`\r
text-gray-600\r
leading-relaxed\r
mb-5\r
`,children:"QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD. (青岛君杰泰进出口贸易有限公司) is a professional international trade exporter specializing in China steel structure manufacturing, steel products export and global construction solutions."}),o.jsx("p",{className:`\r
text-gray-600\r
leading-relaxed\r
`,children:"Our services include steel structure design, factory manufacturing, building materials supply, quality inspection, export packaging and international logistics."})]}),o.jsx("img",{src:hu,alt:"China steel structure manufacturer factory",className:`\r
rounded-2xl\r
shadow-xl\r
w-full\r
`})]})}),o.jsx("section",{className:"bg-gray-50 py-20 px-6",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
text-center\r
mb-12\r
`,children:"Steel Structure Products & Building Solutions"}),o.jsx("p",{className:`\r
text-center\r
text-gray-600\r
max-w-3xl\r
mx-auto\r
mb-12\r
`,children:"JJT GLOBAL provides complete steel building solutions, including prefabricated steel buildings, steel warehouses, industrial workshops, steel frame structures and customized construction projects."}),o.jsx("div",{className:`\r
grid\r
md:grid-cols-4\r
gap-6\r
`,children:e.map((n,r)=>o.jsxs("div",{className:`\r
bg-white\r
rounded-xl\r
overflow-hidden\r
shadow-sm\r
hover:shadow-xl\r
transition\r
`,children:[o.jsx("img",{src:n.image,alt:n.title+" China steel structure supplier",className:`\r
h-48\r
w-full\r
object-cover\r
`}),o.jsxs("div",{className:"p-6",children:[o.jsx("h3",{className:`\r
text-xl\r
font-bold\r
mb-3\r
`,children:n.title}),o.jsx("p",{className:`\r
text-gray-600\r
text-sm\r
leading-relaxed\r
`,children:n.desc})]})]},r))})]})}),o.jsx("section",{className:"py-20 px-6",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
text-center\r
mb-12\r
`,children:"Complete Steel Building Material Supply Chain"}),o.jsx("div",{className:`\r
grid\r
md:grid-cols-3\r
gap-8\r
`,children:["Main Steel Frame Structure","Roofing And Wall Panels","Steel Doors And Windows","Steel Structure Accessories","Insulation Materials","Complete Building Package"].map((n,r)=>o.jsxs("div",{className:`\r
border\r
rounded-xl\r
p-6\r
bg-white\r
`,children:[o.jsx(ei,{className:`\r
text-blue-600\r
mb-3\r
`}),o.jsx("h3",{className:`\r
font-semibold\r
text-lg\r
`,children:n}),o.jsx("p",{className:`\r
text-gray-500\r
text-sm\r
mt-2\r
`,children:"Professional China steel supplier providing complete construction materials for global projects."})]},r))})]})}),o.jsx("section",{className:`\r
bg-blue-900\r
text-white\r
py-20\r
px-6\r
`,children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
text-center\r
mb-12\r
`,children:"Steel Structure Export Process"}),o.jsx("div",{className:`\r
grid\r
md:grid-cols-5\r
gap-5\r
`,children:t.map((n,r)=>o.jsxs("div",{className:`\r
bg-white/10\r
rounded-xl\r
p-6\r
text-center\r
`,children:[o.jsxs("div",{className:`\r
text-3xl\r
font-bold\r
mb-3\r
`,children:["0",r+1]}),o.jsx("p",{children:n})]},r))})]})}),o.jsx("section",{className:"py-20 px-6",children:o.jsx("div",{className:"max-w-7xl mx-auto",children:o.jsxs("div",{className:`\r
grid\r
md:grid-cols-3\r
gap-10\r
`,children:[o.jsxs("div",{children:[o.jsx(ri,{size:45}),o.jsx("h3",{className:`\r
text-2xl\r
font-bold\r
mt-5\r
`,children:"Quality Control"}),o.jsx("p",{className:`\r
text-gray-600\r
mt-3\r
leading-relaxed\r
`,children:"Strict quality inspection during steel fabrication ensures reliable products for international customers."})]}),o.jsxs("div",{children:[o.jsx(ti,{size:45}),o.jsx("h3",{className:`\r
text-2xl\r
font-bold\r
mt-5\r
`,children:"Global Steel Export Service"}),o.jsx("p",{className:`\r
text-gray-600\r
mt-3\r
leading-relaxed\r
`,children:"JJT GLOBAL exports steel structures and construction materials to Africa, Middle East, Central Asia, Southeast Asia and South America."})]}),o.jsxs("div",{children:[o.jsx(li,{size:45}),o.jsx("h3",{className:`\r
text-2xl\r
font-bold\r
mt-5\r
`,children:"International Logistics Support"}),o.jsx("p",{className:`\r
text-gray-600\r
mt-3\r
leading-relaxed\r
`,children:"Professional export packaging, container loading and global delivery solutions."})]})]})})}),o.jsx("section",{className:`\r
py-20\r
px-6\r
bg-gray-50\r
`,children:o.jsxs("div",{className:`\r
max-w-7xl\r
mx-auto\r
grid\r
md:grid-cols-2\r
gap-12\r
items-center\r
`,children:[o.jsx("img",{src:vx,alt:"Steel structure export shipping from China",className:`\r
rounded-2xl\r
shadow-xl\r
w-full\r
`}),o.jsxs("div",{children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
mb-6\r
`,children:"China Steel Structure Export Partner"}),o.jsx("p",{className:`\r
text-gray-600\r
leading-relaxed\r
mb-6\r
`,children:"From steel structure design to manufacturing, inspection and international transportation, JJT GLOBAL provides one-stop steel building solutions for overseas customers."}),o.jsx("a",{href:"/contact",className:`\r
inline-block\r
bg-blue-700\r
text-white\r
px-8\r
py-4\r
rounded-lg\r
font-semibold\r
`,children:"Contact JJT GLOBAL"})]})]})}),o.jsx("section",{className:`\r
bg-blue-900\r
text-white\r
py-20\r
px-6\r
`,children:o.jsxs("div",{className:`\r
max-w-5xl\r
mx-auto\r
text-center\r
`,children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
mb-5\r
`,children:"Your Trusted China Steel Structure Supplier"}),o.jsx("p",{className:`\r
text-blue-100\r
text-lg\r
leading-relaxed\r
`,children:"JJT GLOBAL - QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD. (青岛君杰泰进出口贸易有限公司) is committed to providing reliable steel structure buildings, prefabricated steel warehouses, industrial workshops and complete construction solutions for global markets."})]})})]})}const wx="/assets/excavator-DRI74ugD.jpg",Nx="/assets/loader-P0WkZXw0.jpg",jx="/assets/mining-DLkSPxlS.jpg",Sx="/assets/generator-CgiZ2NrC.jpg",Cx="/assets/shipping-BlWnlm3P.jpg";function kx(){const e=[{title:"Excavators",image:wx,desc:"China excavator export service including crawler excavators and construction machines for global projects."},{title:"Wheel Loaders",image:Nx,desc:"Reliable Chinese wheel loaders and heavy equipment solutions for construction and mining industries."},{title:"Mining Equipment",image:jx,desc:"Mining machinery, crushing equipment and industrial solutions supplied from China."},{title:"Diesel Generator Sets",image:Sx,desc:"Large mining generators and industrial power equipment for international markets."}],t=["Authorized Chinese machinery brands cooperation","Professional machinery sourcing and inspection","Competitive factory direct pricing","Complete export documentation service","Global shipping and logistics support"];return o.jsxs("div",{className:"bg-white",children:[o.jsxs("section",{className:`\r
relative\r
min-h-[650px]\r
flex\r
items-center\r
bg-cover\r
bg-center\r
text-white\r
`,style:{backgroundImage:`url(${rf})`},children:[o.jsx("div",{className:`\r
absolute\r
inset-0\r
bg-black/50\r
`}),o.jsx("div",{className:`\r
relative\r
z-10\r
max-w-7xl\r
mx-auto\r
px-6\r
w-full\r
`,children:o.jsxs("div",{className:"max-w-4xl",children:[o.jsxs("h1",{className:`\r
text-5xl\r
md:text-6xl\r
font-bold\r
leading-tight\r
mb-6\r
`,children:["China Construction Machinery Export Partner",o.jsx("br",{}),"JJT Global Machinery Solutions"]}),o.jsx("p",{className:`\r
text-xl\r
text-gray-200\r
leading-relaxed\r
mb-8\r
`,children:"QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD. provides professional China construction machinery export services, including excavators, loaders, mining equipment, generators and industrial machinery."}),o.jsx("a",{href:"/contact",className:`\r
inline-block\r
bg-white\r
text-blue-700\r
px-8\r
py-4\r
rounded-lg\r
font-semibold\r
`,children:"Request Machinery Quote"})]})})]}),o.jsx("section",{className:"py-20 px-6",children:o.jsxs("div",{className:"max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center",children:[o.jsxs("div",{children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
mb-6\r
`,children:"Professional Chinese Heavy Equipment Supplier"}),o.jsx("p",{className:`\r
text-gray-600\r
leading-relaxed\r
mb-5\r
`,children:"JJT Global specializes in exporting Chinese construction machinery and industrial equipment to overseas markets."}),o.jsx("p",{className:`\r
text-gray-600\r
leading-relaxed\r
`,children:"We cooperate with reliable Chinese manufacturers and provide complete solutions including machinery sourcing, quality inspection, export documents and international transportation."})]}),o.jsxs("div",{className:`\r
bg-gray-100\r
rounded-2xl\r
p-10\r
`,children:[o.jsx("h3",{className:`\r
text-2xl\r
font-bold\r
mb-6\r
`,children:"Machinery Export Capability"}),o.jsx("div",{className:"space-y-4",children:t.map((n,r)=>o.jsxs("div",{className:`\r
flex\r
items-center\r
gap-3\r
`,children:[o.jsx(ei,{className:"text-blue-600"}),o.jsx("span",{children:n})]},r))})]})]})}),o.jsx("section",{className:`\r
bg-gray-50\r
py-20\r
px-6\r
`,children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
text-center\r
mb-12\r
`,children:"Construction Machinery Products"}),o.jsx("div",{className:`\r
grid\r
md:grid-cols-4\r
gap-6\r
`,children:e.map((n,r)=>o.jsxs("div",{className:`\r
bg-white\r
rounded-xl\r
overflow-hidden\r
shadow-sm\r
hover:shadow-xl\r
transition\r
`,children:[o.jsx("img",{src:n.image,alt:n.title,className:`\r
w-full\r
h-48\r
object-cover\r
`}),o.jsxs("div",{className:"p-6",children:[o.jsx("h3",{className:`\r
text-xl\r
font-bold\r
mb-3\r
`,children:n.title}),o.jsx("p",{className:`\r
text-gray-600\r
text-sm\r
`,children:n.desc})]})]},r))})]})}),o.jsx("section",{className:"py-20 px-6",children:o.jsxs("div",{className:`\r
max-w-7xl\r
mx-auto\r
grid\r
md:grid-cols-2\r
gap-12\r
items-center\r
`,children:[o.jsx("img",{src:Cx,alt:"China machinery shipping",className:`\r
rounded-2xl\r
shadow-lg\r
`}),o.jsxs("div",{children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
mb-6\r
`,children:"Global Machinery Export Service"}),o.jsx("p",{className:`\r
text-gray-600\r
leading-relaxed\r
mb-6\r
`,children:"JJT Global serves customers in Africa, Middle East, Central Asia, Southeast Asia, Russia and South America."}),o.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[o.jsxs("div",{children:[o.jsx(li,{}),o.jsx("h3",{className:"font-bold mt-3",children:"International Logistics"})]}),o.jsxs("div",{children:[o.jsx(ti,{}),o.jsx("h3",{className:"font-bold mt-3",children:"Global Markets"})]}),o.jsxs("div",{children:[o.jsx(qd,{}),o.jsx("h3",{className:"font-bold mt-3",children:"Factory Supply"})]}),o.jsxs("div",{children:[o.jsx(ri,{}),o.jsx("h3",{className:"font-bold mt-3",children:"Quality Control"})]})]})]})]})}),o.jsx("section",{className:`\r
bg-blue-900\r
text-white\r
py-20\r
px-6\r
`,children:o.jsxs("div",{className:`\r
max-w-5xl\r
mx-auto\r
text-center\r
`,children:[o.jsx("h2",{className:`\r
text-4xl\r
font-bold\r
mb-5\r
`,children:"Your Trusted China Machinery Export Partner"}),o.jsx("p",{className:"text-blue-100",children:"Contact JJT Global for construction machinery, mining equipment and industrial solutions."})]})})]})}function Ex(){return o.jsxs(o.Fragment,{children:[o.jsx(bg,{}),o.jsx(Om,{children:o.jsxs(Ge,{path:"/",element:o.jsx(Ug,{}),children:[o.jsx(Ge,{index:!0,element:o.jsx(ex,{})}),o.jsx(Ge,{path:"about",element:o.jsx(lx,{})}),o.jsx(Ge,{path:"auto",element:o.jsx(hx,{})}),o.jsx(Ge,{path:"steel",element:o.jsx(yx,{})}),o.jsx(Ge,{path:"machinery",element:o.jsx(kx,{})}),o.jsx(Ge,{path:"contact",element:o.jsx(sx,{})}),o.jsx(Ge,{path:"*",element:o.jsx(ox,{})})]})})]})}Fi.createRoot(document.getElementById("root")).render(o.jsx($.StrictMode,{children:o.jsx(Wd,{children:o.jsx(bm,{children:o.jsx(Ex,{})})})}));
