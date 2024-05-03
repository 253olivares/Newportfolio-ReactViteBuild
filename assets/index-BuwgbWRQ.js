var Fv=Object.defineProperty;var Vv=(e,t,n)=>t in e?Fv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Sa=(e,t,n)=>(Vv(e,typeof t!="symbol"?t+"":t,n),n);function Bv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Iv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tm={exports:{}},zs={},Dm={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),zv=Symbol.for("react.portal"),Uv=Symbol.for("react.fragment"),$v=Symbol.for("react.strict_mode"),Wv=Symbol.for("react.profiler"),Hv=Symbol.for("react.provider"),Kv=Symbol.for("react.context"),Gv=Symbol.for("react.forward_ref"),Yv=Symbol.for("react.suspense"),Qv=Symbol.for("react.memo"),qv=Symbol.for("react.lazy"),Rd=Symbol.iterator;function Xv(e){return e===null||typeof e!="object"?null:(e=Rd&&e[Rd]||e["@@iterator"],typeof e=="function"?e:null)}var Rm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jm=Object.assign,Nm={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=Nm,this.updater=n||Rm}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _m(){}_m.prototype=Ir.prototype;function Uu(e,t,n){this.props=e,this.context=t,this.refs=Nm,this.updater=n||Rm}var $u=Uu.prototype=new _m;$u.constructor=Uu;jm($u,Ir.prototype);$u.isPureReactComponent=!0;var jd=Array.isArray,Am=Object.prototype.hasOwnProperty,Wu={current:null},Om={key:!0,ref:!0,__self:!0,__source:!0};function Fm(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Am.call(t,r)&&!Om.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Xo,type:e,key:i,ref:s,props:o,_owner:Wu.current}}function Jv(e,t){return{$$typeof:Xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xo}function Zv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Nd=/\/+/g;function ba(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zv(""+e.key):t.toString(36)}function _i(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Xo:case zv:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+ba(s,0):r,jd(o)?(n="",e!=null&&(n=e.replace(Nd,"$&/")+"/"),_i(o,t,n,"",function(u){return u})):o!=null&&(Hu(o)&&(o=Jv(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Nd,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",jd(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+ba(i,a);s+=_i(i,t,n,l,o)}else if(l=Xv(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+ba(i,a++),s+=_i(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function fi(e,t,n){if(e==null)return e;var r=[],o=0;return _i(e,r,"","",function(i){return t.call(n,i,o++)}),r}function e1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},Ai={transition:null},t1={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:Wu};I.Children={map:fi,forEach:function(e,t,n){fi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fi(e,function(){t++}),t},toArray:function(e){return fi(e,function(t){return t})||[]},only:function(e){if(!Hu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=Ir;I.Fragment=Uv;I.Profiler=Wv;I.PureComponent=Uu;I.StrictMode=$v;I.Suspense=Yv;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t1;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jm({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Wu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Am.call(t,l)&&!Om.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Xo,type:e.type,key:o,ref:i,props:r,_owner:s}};I.createContext=function(e){return e={$$typeof:Kv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hv,_context:e},e.Consumer=e};I.createElement=Fm;I.createFactory=function(e){var t=Fm.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Gv,render:e}};I.isValidElement=Hu;I.lazy=function(e){return{$$typeof:qv,_payload:{_status:-1,_result:e},_init:e1}};I.memo=function(e,t){return{$$typeof:Qv,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Ai.transition;Ai.transition={};try{e()}finally{Ai.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return Be.current.useCallback(e,t)};I.useContext=function(e){return Be.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};I.useEffect=function(e,t){return Be.current.useEffect(e,t)};I.useId=function(){return Be.current.useId()};I.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Be.current.useMemo(e,t)};I.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};I.useRef=function(e){return Be.current.useRef(e)};I.useState=function(e){return Be.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return Be.current.useTransition()};I.version="18.2.0";Dm.exports=I;var k=Dm.exports;const Vm=Pm(k),wl=Bv({__proto__:null,default:Vm},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1=k,r1=Symbol.for("react.element"),o1=Symbol.for("react.fragment"),i1=Object.prototype.hasOwnProperty,s1=n1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a1={key:!0,ref:!0,__self:!0,__source:!0};function Bm(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)i1.call(t,r)&&!a1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:r1,type:e,key:i,ref:s,props:o,_owner:s1.current}}zs.Fragment=o1;zs.jsx=Bm;zs.jsxs=Bm;Tm.exports=zs;var x=Tm.exports,kl={},Im={exports:{}},it={},zm={exports:{}},Um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,F){var V=T.length;T.push(F);e:for(;0<V;){var Q=V-1>>>1,J=T[Q];if(0<o(J,F))T[Q]=F,T[V]=J,V=Q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var F=T[0],V=T.pop();if(V!==F){T[0]=V;e:for(var Q=0,J=T.length,Oe=J>>>1;Q<Oe;){var ce=2*(Q+1)-1,ze=T[ce],ye=ce+1,ie=T[ye];if(0>o(ze,V))ye<J&&0>o(ie,ze)?(T[Q]=ie,T[ye]=V,Q=ye):(T[Q]=ze,T[ce]=V,Q=ce);else if(ye<J&&0>o(ie,V))T[Q]=ie,T[ye]=V,Q=ye;else break e}}return F}function o(T,F){var V=T.sortIndex-F.sortIndex;return V!==0?V:T.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,c=null,f=3,y=!1,m=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=T)r(u),F.sortIndex=F.expirationTime,t(l,F);else break;F=n(u)}}function S(T){if(v=!1,g(T),!m)if(n(l)!==null)m=!0,Y(L);else{var F=n(u);F!==null&&Pe(S,F.startTime-T)}}function L(T,F){m=!1,v&&(v=!1,h(b),b=-1),y=!0;var V=f;try{for(g(F),c=n(l);c!==null&&(!(c.expirationTime>F)||T&&!R());){var Q=c.callback;if(typeof Q=="function"){c.callback=null,f=c.priorityLevel;var J=Q(c.expirationTime<=F);F=e.unstable_now(),typeof J=="function"?c.callback=J:c===n(l)&&r(l),g(F)}else r(l);c=n(l)}if(c!==null)var Oe=!0;else{var ce=n(u);ce!==null&&Pe(S,ce.startTime-F),Oe=!1}return Oe}finally{c=null,f=V,y=!1}}var E=!1,P=null,b=-1,_=5,N=-1;function R(){return!(e.unstable_now()-N<_)}function D(){if(P!==null){var T=e.unstable_now();N=T;var F=!0;try{F=P(!0,T)}finally{F?B():(E=!1,P=null)}}else E=!1}var B;if(typeof p=="function")B=function(){p(D)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,z=O.port2;O.port1.onmessage=D,B=function(){z.postMessage(null)}}else B=function(){w(D,0)};function Y(T){P=T,E||(E=!0,B())}function Pe(T,F){b=w(function(){T(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){m||y||(m=!0,Y(L))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var V=f;f=F;try{return T()}finally{f=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,F){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var V=f;f=T;try{return F()}finally{f=V}},e.unstable_scheduleCallback=function(T,F,V){var Q=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Q+V:Q):V=Q,T){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=V+J,T={id:d++,callback:F,priorityLevel:T,startTime:V,expirationTime:J,sortIndex:-1},V>Q?(T.sortIndex=V,t(u,T),n(l)===null&&T===n(u)&&(v?(h(b),b=-1):v=!0,Pe(S,V-Q))):(T.sortIndex=J,t(l,T),m||y||(m=!0,Y(L))),T},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(T){var F=f;return function(){var V=f;f=F;try{return T.apply(this,arguments)}finally{f=V}}}})(Um);zm.exports=Um;var l1=zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m=k,tt=l1;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wm=new Set,Eo={};function tr(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for(Eo[e]=t,e=0;e<t.length;e++)Wm.add(t[e])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sl=Object.prototype.hasOwnProperty,u1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_d={},Ad={};function c1(e){return Sl.call(Ad,e)?!0:Sl.call(_d,e)?!1:u1.test(e)?Ad[e]=!0:(_d[e]=!0,!1)}function d1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function f1(e,t,n,r){if(t===null||typeof t>"u"||d1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ku=/[\-:]([a-z])/g;function Gu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ku,Gu);Me[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ku,Gu);Me[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ku,Gu);Me[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yu(e,t,n,r){var o=Me.hasOwnProperty(t)?Me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(f1(t,n,o,r)&&(n=null),r||o===null?c1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qt=$m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pi=Symbol.for("react.element"),sr=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),Qu=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),Hm=Symbol.for("react.provider"),Km=Symbol.for("react.context"),qu=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),El=Symbol.for("react.suspense_list"),Xu=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),Gm=Symbol.for("react.offscreen"),Od=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=Od&&e[Od]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,La;function no(e){if(La===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);La=t&&t[1]||""}return`
`+La+e}var Ea=!1;function Ma(e,t){if(!e||Ea)return"";Ea=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ea=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?no(e):""}function p1(e){switch(e.tag){case 5:return no(e.type);case 16:return no("Lazy");case 13:return no("Suspense");case 19:return no("SuspenseList");case 0:case 2:case 15:return e=Ma(e.type,!1),e;case 11:return e=Ma(e.type.render,!1),e;case 1:return e=Ma(e.type,!0),e;default:return""}}function Ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ar:return"Fragment";case sr:return"Portal";case bl:return"Profiler";case Qu:return"StrictMode";case Ll:return"Suspense";case El:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Km:return(e.displayName||"Context")+".Consumer";case Hm:return(e._context.displayName||"Context")+".Provider";case qu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xu:return t=e.displayName||null,t!==null?t:Ml(e.type)||"Memo";case rn:t=e._payload,e=e._init;try{return Ml(e(t))}catch{}}return null}function m1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ml(t);case 8:return t===Qu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function bn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ym(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function h1(e){var t=Ym(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mi(e){e._valueTracker||(e._valueTracker=h1(e))}function Qm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ym(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cl(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=bn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qm(e,t){t=t.checked,t!=null&&Yu(e,"checked",t,!1)}function Pl(e,t){qm(e,t);var n=bn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tl(e,t.type,bn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Tl(e,t,n){(t!=="number"||Zi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ro=Array.isArray;function Lr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(ro(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:bn(n)}}function Xm(e,t){var n=bn(t.value),r=bn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Id(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hi,Zm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hi=hi||document.createElement("div"),hi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},g1=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(e){g1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),uo[t]=uo[e]})});function eh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||uo.hasOwnProperty(e)&&uo[e]?(""+t).trim():t+"px"}function th(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=eh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var y1=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jl(e,t){if(t){if(y1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Nl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _l=null;function Ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,Er=null,Mr=null;function zd(e){if(e=ei(e)){if(typeof Al!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Ks(t),Al(e.stateNode,e.type,t))}}function nh(e){Er?Mr?Mr.push(e):Mr=[e]:Er=e}function rh(){if(Er){var e=Er,t=Mr;if(Mr=Er=null,zd(e),t)for(e=0;e<t.length;e++)zd(t[e])}}function oh(e,t){return e(t)}function ih(){}var Ca=!1;function sh(e,t,n){if(Ca)return e(t,n);Ca=!0;try{return oh(e,t,n)}finally{Ca=!1,(Er!==null||Mr!==null)&&(ih(),rh())}}function Co(e,t){var n=e.stateNode;if(n===null)return null;var r=Ks(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Ol=!1;if(Wt)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Ol=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Ol=!1}function v1(e,t,n,r,o,i,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var co=!1,es=null,ts=!1,Fl=null,x1={onError:function(e){co=!0,es=e}};function w1(e,t,n,r,o,i,s,a,l){co=!1,es=null,v1.apply(x1,arguments)}function k1(e,t,n,r,o,i,s,a,l){if(w1.apply(this,arguments),co){if(co){var u=es;co=!1,es=null}else throw Error(C(198));ts||(ts=!0,Fl=u)}}function nr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ah(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ud(e){if(nr(e)!==e)throw Error(C(188))}function S1(e){var t=e.alternate;if(!t){if(t=nr(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ud(o),e;if(i===r)return Ud(o),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function lh(e){return e=S1(e),e!==null?uh(e):null}function uh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uh(e);if(t!==null)return t;e=e.sibling}return null}var ch=tt.unstable_scheduleCallback,$d=tt.unstable_cancelCallback,b1=tt.unstable_shouldYield,L1=tt.unstable_requestPaint,ue=tt.unstable_now,E1=tt.unstable_getCurrentPriorityLevel,Zu=tt.unstable_ImmediatePriority,dh=tt.unstable_UserBlockingPriority,ns=tt.unstable_NormalPriority,M1=tt.unstable_LowPriority,fh=tt.unstable_IdlePriority,Us=null,Pt=null;function C1(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Us,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:D1,P1=Math.log,T1=Math.LN2;function D1(e){return e>>>=0,e===0?32:31-(P1(e)/T1|0)|0}var gi=64,yi=4194304;function oo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function rs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=oo(a):(i&=s,i!==0&&(r=oo(i)))}else s=n&~o,s!==0?r=oo(s):i!==0&&(r=oo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kt(t),o=1<<n,r|=e[n],t&=~o;return r}function R1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-kt(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=R1(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function Vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ph(){var e=gi;return gi<<=1,!(gi&4194240)&&(gi=64),e}function Pa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function N1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-kt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ec(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var W=0;function mh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hh,tc,gh,yh,vh,Bl=!1,vi=[],fn=null,pn=null,mn=null,Po=new Map,To=new Map,an=[],_1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wd(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(t.pointerId)}}function Yr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ei(t),t!==null&&tc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function A1(e,t,n,r,o){switch(t){case"focusin":return fn=Yr(fn,e,t,n,r,o),!0;case"dragenter":return pn=Yr(pn,e,t,n,r,o),!0;case"mouseover":return mn=Yr(mn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Po.set(i,Yr(Po.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,To.set(i,Yr(To.get(i)||null,e,t,n,r,o)),!0}return!1}function xh(e){var t=zn(e.target);if(t!==null){var n=nr(t);if(n!==null){if(t=n.tag,t===13){if(t=ah(n),t!==null){e.blockedOn=t,vh(e.priority,function(){gh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_l=r,n.target.dispatchEvent(r),_l=null}else return t=ei(n),t!==null&&tc(t),e.blockedOn=n,!1;t.shift()}return!0}function Hd(e,t,n){Oi(e)&&n.delete(t)}function O1(){Bl=!1,fn!==null&&Oi(fn)&&(fn=null),pn!==null&&Oi(pn)&&(pn=null),mn!==null&&Oi(mn)&&(mn=null),Po.forEach(Hd),To.forEach(Hd)}function Qr(e,t){e.blockedOn===t&&(e.blockedOn=null,Bl||(Bl=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,O1)))}function Do(e){function t(o){return Qr(o,e)}if(0<vi.length){Qr(vi[0],e);for(var n=1;n<vi.length;n++){var r=vi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&Qr(fn,e),pn!==null&&Qr(pn,e),mn!==null&&Qr(mn,e),Po.forEach(t),To.forEach(t),n=0;n<an.length;n++)r=an[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)xh(n),n.blockedOn===null&&an.shift()}var Cr=qt.ReactCurrentBatchConfig,os=!0;function F1(e,t,n,r){var o=W,i=Cr.transition;Cr.transition=null;try{W=1,nc(e,t,n,r)}finally{W=o,Cr.transition=i}}function V1(e,t,n,r){var o=W,i=Cr.transition;Cr.transition=null;try{W=4,nc(e,t,n,r)}finally{W=o,Cr.transition=i}}function nc(e,t,n,r){if(os){var o=Il(e,t,n,r);if(o===null)Va(e,t,r,is,n),Wd(e,r);else if(A1(o,e,t,n,r))r.stopPropagation();else if(Wd(e,r),t&4&&-1<_1.indexOf(e)){for(;o!==null;){var i=ei(o);if(i!==null&&hh(i),i=Il(e,t,n,r),i===null&&Va(e,t,r,is,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Va(e,t,r,null,n)}}var is=null;function Il(e,t,n,r){if(is=null,e=Ju(r),e=zn(e),e!==null)if(t=nr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ah(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return is=e,null}function wh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E1()){case Zu:return 1;case dh:return 4;case ns:case M1:return 16;case fh:return 536870912;default:return 16}default:return 16}}var un=null,rc=null,Fi=null;function kh(){if(Fi)return Fi;var e,t=rc,n=t.length,r,o="value"in un?un.value:un.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Fi=o.slice(e,1<r?1-r:void 0)}function Vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function Kd(){return!1}function st(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xi:Kd,this.isPropagationStopped=Kd,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=st(zr),Zo=oe({},zr,{view:0,detail:0}),B1=st(Zo),Ta,Da,qr,$s=oe({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ic,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qr&&(qr&&e.type==="mousemove"?(Ta=e.screenX-qr.screenX,Da=e.screenY-qr.screenY):Da=Ta=0,qr=e),Ta)},movementY:function(e){return"movementY"in e?e.movementY:Da}}),Gd=st($s),I1=oe({},$s,{dataTransfer:0}),z1=st(I1),U1=oe({},Zo,{relatedTarget:0}),Ra=st(U1),$1=oe({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),W1=st($1),H1=oe({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),K1=st(H1),G1=oe({},zr,{data:0}),Yd=st(G1),Y1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=q1[e])?!!t[e]:!1}function ic(){return X1}var J1=oe({},Zo,{key:function(e){if(e.key){var t=Y1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ic,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Z1=st(J1),ex=oe({},$s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=st(ex),tx=oe({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ic}),nx=st(tx),rx=oe({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ox=st(rx),ix=oe({},$s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sx=st(ix),ax=[9,13,27,32],sc=Wt&&"CompositionEvent"in window,fo=null;Wt&&"documentMode"in document&&(fo=document.documentMode);var lx=Wt&&"TextEvent"in window&&!fo,Sh=Wt&&(!sc||fo&&8<fo&&11>=fo),qd=" ",Xd=!1;function bh(e,t){switch(e){case"keyup":return ax.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lr=!1;function ux(e,t){switch(e){case"compositionend":return Lh(t);case"keypress":return t.which!==32?null:(Xd=!0,qd);case"textInput":return e=t.data,e===qd&&Xd?null:e;default:return null}}function cx(e,t){if(lr)return e==="compositionend"||!sc&&bh(e,t)?(e=kh(),Fi=rc=un=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sh&&t.locale!=="ko"?null:t.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dx[e.type]:t==="textarea"}function Eh(e,t,n,r){nh(r),t=ss(t,"onChange"),0<t.length&&(n=new oc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var po=null,Ro=null;function fx(e){Oh(e,0)}function Ws(e){var t=dr(e);if(Qm(t))return e}function px(e,t){if(e==="change")return t}var Mh=!1;if(Wt){var ja;if(Wt){var Na="oninput"in document;if(!Na){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),Na=typeof Zd.oninput=="function"}ja=Na}else ja=!1;Mh=ja&&(!document.documentMode||9<document.documentMode)}function ef(){po&&(po.detachEvent("onpropertychange",Ch),Ro=po=null)}function Ch(e){if(e.propertyName==="value"&&Ws(Ro)){var t=[];Eh(t,Ro,e,Ju(e)),sh(fx,t)}}function mx(e,t,n){e==="focusin"?(ef(),po=t,Ro=n,po.attachEvent("onpropertychange",Ch)):e==="focusout"&&ef()}function hx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ws(Ro)}function gx(e,t){if(e==="click")return Ws(t)}function yx(e,t){if(e==="input"||e==="change")return Ws(t)}function vx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:vx;function jo(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Sl.call(t,o)||!bt(e[o],t[o]))return!1}return!0}function tf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nf(e,t){var n=tf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tf(n)}}function Ph(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ph(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Th(){for(var e=window,t=Zi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zi(e.document)}return t}function ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xx(e){var t=Th(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ph(n.ownerDocument.documentElement,n)){if(r!==null&&ac(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=nf(n,i);var s=nf(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wx=Wt&&"documentMode"in document&&11>=document.documentMode,ur=null,zl=null,mo=null,Ul=!1;function rf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ul||ur==null||ur!==Zi(r)||(r=ur,"selectionStart"in r&&ac(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&jo(mo,r)||(mo=r,r=ss(zl,"onSelect"),0<r.length&&(t=new oc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ur)))}function wi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:wi("Animation","AnimationEnd"),animationiteration:wi("Animation","AnimationIteration"),animationstart:wi("Animation","AnimationStart"),transitionend:wi("Transition","TransitionEnd")},_a={},Dh={};Wt&&(Dh=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Hs(e){if(_a[e])return _a[e];if(!cr[e])return e;var t=cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dh)return _a[e]=t[n];return e}var Rh=Hs("animationend"),jh=Hs("animationiteration"),Nh=Hs("animationstart"),_h=Hs("transitionend"),Ah=new Map,of="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){Ah.set(e,t),tr(t,[e])}for(var Aa=0;Aa<of.length;Aa++){var Oa=of[Aa],kx=Oa.toLowerCase(),Sx=Oa[0].toUpperCase()+Oa.slice(1);Tn(kx,"on"+Sx)}Tn(Rh,"onAnimationEnd");Tn(jh,"onAnimationIteration");Tn(Nh,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(_h,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bx=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function sf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,k1(r,t,void 0,e),e.currentTarget=null}function Oh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;sf(o,a,u),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;sf(o,a,u),i=l}}}if(ts)throw e=Fl,ts=!1,Fl=null,e}function q(e,t){var n=t[Gl];n===void 0&&(n=t[Gl]=new Set);var r=e+"__bubble";n.has(r)||(Fh(t,e,2,!1),n.add(r))}function Fa(e,t,n){var r=0;t&&(r|=4),Fh(n,e,r,t)}var ki="_reactListening"+Math.random().toString(36).slice(2);function No(e){if(!e[ki]){e[ki]=!0,Wm.forEach(function(n){n!=="selectionchange"&&(bx.has(n)||Fa(n,!1,e),Fa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ki]||(t[ki]=!0,Fa("selectionchange",!1,t))}}function Fh(e,t,n,r){switch(wh(t)){case 1:var o=F1;break;case 4:o=V1;break;default:o=nc}n=o.bind(null,t,n,e),o=void 0,!Ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Va(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=zn(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}sh(function(){var u=i,d=Ju(n),c=[];e:{var f=Ah.get(e);if(f!==void 0){var y=oc,m=e;switch(e){case"keypress":if(Vi(n)===0)break e;case"keydown":case"keyup":y=Z1;break;case"focusin":m="focus",y=Ra;break;case"focusout":m="blur",y=Ra;break;case"beforeblur":case"afterblur":y=Ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=z1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=nx;break;case Rh:case jh:case Nh:y=W1;break;case _h:y=ox;break;case"scroll":y=B1;break;case"wheel":y=sx;break;case"copy":case"cut":case"paste":y=K1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Qd}var v=(t&4)!==0,w=!v&&e==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var p=u,g;p!==null;){g=p;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,h!==null&&(S=Co(p,h),S!=null&&v.push(_o(p,S,g)))),w)break;p=p.return}0<v.length&&(f=new y(f,m,null,n,d),c.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==_l&&(m=n.relatedTarget||n.fromElement)&&(zn(m)||m[Ht]))break e;if((y||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,y?(m=n.relatedTarget||n.toElement,y=u,m=m?zn(m):null,m!==null&&(w=nr(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(y=null,m=u),y!==m)){if(v=Gd,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=Qd,S="onPointerLeave",h="onPointerEnter",p="pointer"),w=y==null?f:dr(y),g=m==null?f:dr(m),f=new v(S,p+"leave",y,n,d),f.target=w,f.relatedTarget=g,S=null,zn(d)===u&&(v=new v(h,p+"enter",m,n,d),v.target=g,v.relatedTarget=w,S=v),w=S,y&&m)t:{for(v=y,h=m,p=0,g=v;g;g=ir(g))p++;for(g=0,S=h;S;S=ir(S))g++;for(;0<p-g;)v=ir(v),p--;for(;0<g-p;)h=ir(h),g--;for(;p--;){if(v===h||h!==null&&v===h.alternate)break t;v=ir(v),h=ir(h)}v=null}else v=null;y!==null&&af(c,f,y,v,!1),m!==null&&w!==null&&af(c,w,m,v,!0)}}e:{if(f=u?dr(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var L=px;else if(Jd(f))if(Mh)L=yx;else{L=hx;var E=mx}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(L=gx);if(L&&(L=L(e,u))){Eh(c,L,n,d);break e}E&&E(e,f,u),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Tl(f,"number",f.value)}switch(E=u?dr(u):window,e){case"focusin":(Jd(E)||E.contentEditable==="true")&&(ur=E,zl=u,mo=null);break;case"focusout":mo=zl=ur=null;break;case"mousedown":Ul=!0;break;case"contextmenu":case"mouseup":case"dragend":Ul=!1,rf(c,n,d);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":rf(c,n,d)}var P;if(sc)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else lr?bh(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Sh&&n.locale!=="ko"&&(lr||b!=="onCompositionStart"?b==="onCompositionEnd"&&lr&&(P=kh()):(un=d,rc="value"in un?un.value:un.textContent,lr=!0)),E=ss(u,b),0<E.length&&(b=new Yd(b,e,null,n,d),c.push({event:b,listeners:E}),P?b.data=P:(P=Lh(n),P!==null&&(b.data=P)))),(P=lx?ux(e,n):cx(e,n))&&(u=ss(u,"onBeforeInput"),0<u.length&&(d=new Yd("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=P))}Oh(c,t)})}function _o(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ss(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Co(e,n),i!=null&&r.unshift(_o(e,i,o)),i=Co(e,t),i!=null&&r.push(_o(e,i,o))),e=e.return}return r}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function af(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,o?(l=Co(n,i),l!=null&&s.unshift(_o(n,l,a))):o||(l=Co(n,i),l!=null&&s.push(_o(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Lx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function lf(e){return(typeof e=="string"?e:""+e).replace(Lx,`
`).replace(Ex,"")}function Si(e,t,n){if(t=lf(t),lf(e)!==t&&n)throw Error(C(425))}function as(){}var $l=null,Wl=null;function Hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,Mx=typeof clearTimeout=="function"?clearTimeout:void 0,uf=typeof Promise=="function"?Promise:void 0,Cx=typeof queueMicrotask=="function"?queueMicrotask:typeof uf<"u"?function(e){return uf.resolve(null).then(e).catch(Px)}:Kl;function Px(e){setTimeout(function(){throw e})}function Ba(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Do(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Do(t)}function hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ur=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Ur,Ao="__reactProps$"+Ur,Ht="__reactContainer$"+Ur,Gl="__reactEvents$"+Ur,Tx="__reactListeners$"+Ur,Dx="__reactHandles$"+Ur;function zn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ht]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cf(e);e!==null;){if(n=e[Mt])return n;e=cf(e)}return t}e=n,n=e.parentNode}return null}function ei(e){return e=e[Mt]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Ks(e){return e[Ao]||null}var Yl=[],fr=-1;function Dn(e){return{current:e}}function X(e){0>fr||(e.current=Yl[fr],Yl[fr]=null,fr--)}function G(e,t){fr++,Yl[fr]=e.current,e.current=t}var Ln={},Ae=Dn(Ln),He=Dn(!1),Qn=Ln;function Rr(e,t){var n=e.type.contextTypes;if(!n)return Ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ke(e){return e=e.childContextTypes,e!=null}function ls(){X(He),X(Ae)}function df(e,t,n){if(Ae.current!==Ln)throw Error(C(168));G(Ae,t),G(He,n)}function Vh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,m1(e)||"Unknown",o));return oe({},n,r)}function us(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,Qn=Ae.current,G(Ae,e),G(He,He.current),!0}function ff(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Vh(e,t,Qn),r.__reactInternalMemoizedMergedChildContext=e,X(He),X(Ae),G(Ae,e)):X(He),G(He,n)}var _t=null,Gs=!1,Ia=!1;function Bh(e){_t===null?_t=[e]:_t.push(e)}function Rx(e){Gs=!0,Bh(e)}function Rn(){if(!Ia&&_t!==null){Ia=!0;var e=0,t=W;try{var n=_t;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Gs=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),ch(Zu,Rn),o}finally{W=t,Ia=!1}}return null}var pr=[],mr=0,cs=null,ds=0,ut=[],ct=0,qn=null,At=1,Ot="";function An(e,t){pr[mr++]=ds,pr[mr++]=cs,cs=e,ds=t}function Ih(e,t,n){ut[ct++]=At,ut[ct++]=Ot,ut[ct++]=qn,qn=e;var r=At;e=Ot;var o=32-kt(r)-1;r&=~(1<<o),n+=1;var i=32-kt(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,At=1<<32-kt(t)+o|n<<o|r,Ot=i+e}else At=1<<i|n<<o|r,Ot=e}function lc(e){e.return!==null&&(An(e,1),Ih(e,1,0))}function uc(e){for(;e===cs;)cs=pr[--mr],pr[mr]=null,ds=pr[--mr],pr[mr]=null;for(;e===qn;)qn=ut[--ct],ut[ct]=null,Ot=ut[--ct],ut[ct]=null,At=ut[--ct],ut[ct]=null}var et=null,Je=null,Z=!1,xt=null;function zh(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,Je=hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qn!==null?{id:At,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,Je=null,!0):!1;default:return!1}}function Ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ql(e){if(Z){var t=Je;if(t){var n=t;if(!pf(e,t)){if(Ql(e))throw Error(C(418));t=hn(n.nextSibling);var r=et;t&&pf(e,t)?zh(r,n):(e.flags=e.flags&-4097|2,Z=!1,et=e)}}else{if(Ql(e))throw Error(C(418));e.flags=e.flags&-4097|2,Z=!1,et=e}}}function mf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function bi(e){if(e!==et)return!1;if(!Z)return mf(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hl(e.type,e.memoizedProps)),t&&(t=Je)){if(Ql(e))throw Uh(),Error(C(418));for(;t;)zh(e,t),t=hn(t.nextSibling)}if(mf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=et?hn(e.stateNode.nextSibling):null;return!0}function Uh(){for(var e=Je;e;)e=hn(e.nextSibling)}function jr(){Je=et=null,Z=!1}function cc(e){xt===null?xt=[e]:xt.push(e)}var jx=qt.ReactCurrentBatchConfig;function yt(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var fs=Dn(null),ps=null,hr=null,dc=null;function fc(){dc=hr=ps=null}function pc(e){var t=fs.current;X(fs),e._currentValue=t}function Xl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pr(e,t){ps=e,dc=hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(dc!==e)if(e={context:e,memoizedValue:t,next:null},hr===null){if(ps===null)throw Error(C(308));hr=e,ps.dependencies={lanes:0,firstContext:e}}else hr=hr.next=e;return t}var Un=null;function mc(e){Un===null?Un=[e]:Un.push(e)}function $h(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,mc(t)):(n.next=o.next,o.next=n),t.interleaved=n,Kt(e,r)}function Kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function hc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Kt(e,n)}return o=r.interleaved,o===null?(t.next=t,mc(r)):(t.next=o.next,o.next=t),r.interleaved=t,Kt(e,n)}function Bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ec(e,n)}}function hf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ms(e,t,n,r){var o=e.updateQueue;on=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(i!==null){var c=o.baseState;s=0,d=u=l=null,a=i;do{var f=a.lane,y=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,v=a;switch(f=t,y=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){c=m.call(y,c,f);break e}c=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,f=typeof m=="function"?m.call(y,c,f):m,f==null)break e;c=oe({},c,f);break e;case 2:on=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,l=c):d=d.next=y,s|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(d===null&&(l=c),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Jn|=s,e.lanes=s,e.memoizedState=c}}function gf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var Hh=new $m.Component().refs;function Jl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ys={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),o=vn(e),i=Vt(r,o);i.payload=t,n!=null&&(i.callback=n),t=gn(e,i,o),t!==null&&(St(t,e,o,r),Bi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),o=vn(e),i=Vt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=gn(e,i,o),t!==null&&(St(t,e,o,r),Bi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=vn(e),o=Vt(n,r);o.tag=2,t!=null&&(o.callback=t),t=gn(e,o,r),t!==null&&(St(t,e,r,n),Bi(t,e,r))}};function yf(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!jo(n,r)||!jo(o,i):!0}function Kh(e,t,n){var r=!1,o=Ln,i=t.contextType;return typeof i=="object"&&i!==null?i=mt(i):(o=Ke(t)?Qn:Ae.current,r=t.contextTypes,i=(r=r!=null)?Rr(e,o):Ln),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ys,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function vf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ys.enqueueReplaceState(t,t.state,null)}function Zl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Hh,hc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=mt(i):(i=Ke(t)?Qn:Ae.current,o.context=Rr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Jl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ys.enqueueReplaceState(o,o.state,null),ms(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;a===Hh&&(a=o.refs={}),s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Li(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xf(e){var t=e._init;return t(e._payload)}function Gh(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=xn(h,p),h.index=0,h.sibling=null,h}function i(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,p,g,S){return p===null||p.tag!==6?(p=Ga(g,h.mode,S),p.return=h,p):(p=o(p,g),p.return=h,p)}function l(h,p,g,S){var L=g.type;return L===ar?d(h,p,g.props.children,S,g.key):p!==null&&(p.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===rn&&xf(L)===p.type)?(S=o(p,g.props),S.ref=Xr(h,p,g),S.return=h,S):(S=Hi(g.type,g.key,g.props,null,h.mode,S),S.ref=Xr(h,p,g),S.return=h,S)}function u(h,p,g,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Ya(g,h.mode,S),p.return=h,p):(p=o(p,g.children||[]),p.return=h,p)}function d(h,p,g,S,L){return p===null||p.tag!==7?(p=Kn(g,h.mode,S,L),p.return=h,p):(p=o(p,g),p.return=h,p)}function c(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ga(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case pi:return g=Hi(p.type,p.key,p.props,null,h.mode,g),g.ref=Xr(h,null,p),g.return=h,g;case sr:return p=Ya(p,h.mode,g),p.return=h,p;case rn:var S=p._init;return c(h,S(p._payload),g)}if(ro(p)||Kr(p))return p=Kn(p,h.mode,g,null),p.return=h,p;Li(h,p)}return null}function f(h,p,g,S){var L=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return L!==null?null:a(h,p,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case pi:return g.key===L?l(h,p,g,S):null;case sr:return g.key===L?u(h,p,g,S):null;case rn:return L=g._init,f(h,p,L(g._payload),S)}if(ro(g)||Kr(g))return L!==null?null:d(h,p,g,S,null);Li(h,g)}return null}function y(h,p,g,S,L){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(g)||null,a(p,h,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pi:return h=h.get(S.key===null?g:S.key)||null,l(p,h,S,L);case sr:return h=h.get(S.key===null?g:S.key)||null,u(p,h,S,L);case rn:var E=S._init;return y(h,p,g,E(S._payload),L)}if(ro(S)||Kr(S))return h=h.get(g)||null,d(p,h,S,L,null);Li(p,S)}return null}function m(h,p,g,S){for(var L=null,E=null,P=p,b=p=0,_=null;P!==null&&b<g.length;b++){P.index>b?(_=P,P=null):_=P.sibling;var N=f(h,P,g[b],S);if(N===null){P===null&&(P=_);break}e&&P&&N.alternate===null&&t(h,P),p=i(N,p,b),E===null?L=N:E.sibling=N,E=N,P=_}if(b===g.length)return n(h,P),Z&&An(h,b),L;if(P===null){for(;b<g.length;b++)P=c(h,g[b],S),P!==null&&(p=i(P,p,b),E===null?L=P:E.sibling=P,E=P);return Z&&An(h,b),L}for(P=r(h,P);b<g.length;b++)_=y(P,h,b,g[b],S),_!==null&&(e&&_.alternate!==null&&P.delete(_.key===null?b:_.key),p=i(_,p,b),E===null?L=_:E.sibling=_,E=_);return e&&P.forEach(function(R){return t(h,R)}),Z&&An(h,b),L}function v(h,p,g,S){var L=Kr(g);if(typeof L!="function")throw Error(C(150));if(g=L.call(g),g==null)throw Error(C(151));for(var E=L=null,P=p,b=p=0,_=null,N=g.next();P!==null&&!N.done;b++,N=g.next()){P.index>b?(_=P,P=null):_=P.sibling;var R=f(h,P,N.value,S);if(R===null){P===null&&(P=_);break}e&&P&&R.alternate===null&&t(h,P),p=i(R,p,b),E===null?L=R:E.sibling=R,E=R,P=_}if(N.done)return n(h,P),Z&&An(h,b),L;if(P===null){for(;!N.done;b++,N=g.next())N=c(h,N.value,S),N!==null&&(p=i(N,p,b),E===null?L=N:E.sibling=N,E=N);return Z&&An(h,b),L}for(P=r(h,P);!N.done;b++,N=g.next())N=y(P,h,b,N.value,S),N!==null&&(e&&N.alternate!==null&&P.delete(N.key===null?b:N.key),p=i(N,p,b),E===null?L=N:E.sibling=N,E=N);return e&&P.forEach(function(D){return t(h,D)}),Z&&An(h,b),L}function w(h,p,g,S){if(typeof g=="object"&&g!==null&&g.type===ar&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case pi:e:{for(var L=g.key,E=p;E!==null;){if(E.key===L){if(L=g.type,L===ar){if(E.tag===7){n(h,E.sibling),p=o(E,g.props.children),p.return=h,h=p;break e}}else if(E.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===rn&&xf(L)===E.type){n(h,E.sibling),p=o(E,g.props),p.ref=Xr(h,E,g),p.return=h,h=p;break e}n(h,E);break}else t(h,E);E=E.sibling}g.type===ar?(p=Kn(g.props.children,h.mode,S,g.key),p.return=h,h=p):(S=Hi(g.type,g.key,g.props,null,h.mode,S),S.ref=Xr(h,p,g),S.return=h,h=S)}return s(h);case sr:e:{for(E=g.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=o(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Ya(g,h.mode,S),p.return=h,h=p}return s(h);case rn:return E=g._init,w(h,p,E(g._payload),S)}if(ro(g))return m(h,p,g,S);if(Kr(g))return v(h,p,g,S);Li(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,g),p.return=h,h=p):(n(h,p),p=Ga(g,h.mode,S),p.return=h,h=p),s(h)):n(h,p)}return w}var Nr=Gh(!0),Yh=Gh(!1),ti={},Tt=Dn(ti),Oo=Dn(ti),Fo=Dn(ti);function $n(e){if(e===ti)throw Error(C(174));return e}function gc(e,t){switch(G(Fo,t),G(Oo,e),G(Tt,ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Rl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Rl(t,e)}X(Tt),G(Tt,t)}function _r(){X(Tt),X(Oo),X(Fo)}function Qh(e){$n(Fo.current);var t=$n(Tt.current),n=Rl(t,e.type);t!==n&&(G(Oo,e),G(Tt,n))}function yc(e){Oo.current===e&&(X(Tt),X(Oo))}var te=Dn(0);function hs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var za=[];function vc(){for(var e=0;e<za.length;e++)za[e]._workInProgressVersionPrimary=null;za.length=0}var Ii=qt.ReactCurrentDispatcher,Ua=qt.ReactCurrentBatchConfig,Xn=0,re=null,he=null,ve=null,gs=!1,ho=!1,Vo=0,Nx=0;function Te(){throw Error(C(321))}function xc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bt(e[n],t[n]))return!1;return!0}function wc(e,t,n,r,o,i){if(Xn=i,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ii.current=e===null||e.memoizedState===null?Fx:Vx,e=n(r,o),ho){i=0;do{if(ho=!1,Vo=0,25<=i)throw Error(C(301));i+=1,ve=he=null,t.updateQueue=null,Ii.current=Bx,e=n(r,o)}while(ho)}if(Ii.current=ys,t=he!==null&&he.next!==null,Xn=0,ve=he=re=null,gs=!1,t)throw Error(C(300));return e}function kc(){var e=Vo!==0;return Vo=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?re.memoizedState=ve=e:ve=ve.next=e,ve}function ht(){if(he===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ve===null?re.memoizedState:ve.next;if(t!==null)ve=t,he=e;else{if(e===null)throw Error(C(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ve===null?re.memoizedState=ve=e:ve=ve.next=e}return ve}function Bo(e,t){return typeof t=="function"?t(e):t}function $a(e){var t=ht(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=he,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,u=i;do{var d=u.lane;if((Xn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,s=r):l=l.next=c,re.lanes|=d,Jn|=d}u=u.next}while(u!==null&&u!==i);l===null?s=r:l.next=a,bt(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,re.lanes|=i,Jn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wa(e){var t=ht(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);bt(i,t.memoizedState)||(We=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function qh(){}function Xh(e,t){var n=re,r=ht(),o=t(),i=!bt(r.memoizedState,o);if(i&&(r.memoizedState=o,We=!0),r=r.queue,Sc(eg.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Io(9,Zh.bind(null,n,r,o,t),void 0,null),xe===null)throw Error(C(349));Xn&30||Jh(n,t,o)}return o}function Jh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zh(e,t,n,r){t.value=n,t.getSnapshot=r,tg(t)&&ng(e)}function eg(e,t,n){return n(function(){tg(t)&&ng(e)})}function tg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bt(e,n)}catch{return!0}}function ng(e){var t=Kt(e,1);t!==null&&St(t,e,1,-1)}function wf(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t.queue=e,e=e.dispatch=Ox.bind(null,re,e),[t.memoizedState,e]}function Io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rg(){return ht().memoizedState}function zi(e,t,n,r){var o=Et();re.flags|=e,o.memoizedState=Io(1|t,n,void 0,r===void 0?null:r)}function Qs(e,t,n,r){var o=ht();r=r===void 0?null:r;var i=void 0;if(he!==null){var s=he.memoizedState;if(i=s.destroy,r!==null&&xc(r,s.deps)){o.memoizedState=Io(t,n,i,r);return}}re.flags|=e,o.memoizedState=Io(1|t,n,i,r)}function kf(e,t){return zi(8390656,8,e,t)}function Sc(e,t){return Qs(2048,8,e,t)}function og(e,t){return Qs(4,2,e,t)}function ig(e,t){return Qs(4,4,e,t)}function sg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ag(e,t,n){return n=n!=null?n.concat([e]):null,Qs(4,4,sg.bind(null,t,e),n)}function bc(){}function lg(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ug(e,t){var n=ht();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cg(e,t,n){return Xn&21?(bt(n,t)||(n=ph(),re.lanes|=n,Jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function _x(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=Ua.transition;Ua.transition={};try{e(!1),t()}finally{W=n,Ua.transition=r}}function dg(){return ht().memoizedState}function Ax(e,t,n){var r=vn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fg(e))pg(t,n);else if(n=$h(e,t,n,r),n!==null){var o=Ve();St(n,e,r,o),mg(n,t,r)}}function Ox(e,t,n){var r=vn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fg(e))pg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,bt(a,s)){var l=t.interleaved;l===null?(o.next=o,mc(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=$h(e,t,o,r),n!==null&&(o=Ve(),St(n,e,r,o),mg(n,t,r))}}function fg(e){var t=e.alternate;return e===re||t!==null&&t===re}function pg(e,t){ho=gs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ec(e,n)}}var ys={readContext:mt,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},Fx={readContext:mt,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:kf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zi(4194308,4,sg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return zi(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ax.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:wf,useDebugValue:bc,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=wf(!1),t=e[0];return e=_x.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,o=Et();if(Z){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),xe===null)throw Error(C(349));Xn&30||Jh(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,kf(eg.bind(null,r,i,e),[e]),r.flags|=2048,Io(9,Zh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Et(),t=xe.identifierPrefix;if(Z){var n=Ot,r=At;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Nx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vx={readContext:mt,useCallback:lg,useContext:mt,useEffect:Sc,useImperativeHandle:ag,useInsertionEffect:og,useLayoutEffect:ig,useMemo:ug,useReducer:$a,useRef:rg,useState:function(){return $a(Bo)},useDebugValue:bc,useDeferredValue:function(e){var t=ht();return cg(t,he.memoizedState,e)},useTransition:function(){var e=$a(Bo)[0],t=ht().memoizedState;return[e,t]},useMutableSource:qh,useSyncExternalStore:Xh,useId:dg,unstable_isNewReconciler:!1},Bx={readContext:mt,useCallback:lg,useContext:mt,useEffect:Sc,useImperativeHandle:ag,useInsertionEffect:og,useLayoutEffect:ig,useMemo:ug,useReducer:Wa,useRef:rg,useState:function(){return Wa(Bo)},useDebugValue:bc,useDeferredValue:function(e){var t=ht();return he===null?t.memoizedState=e:cg(t,he.memoizedState,e)},useTransition:function(){var e=Wa(Bo)[0],t=ht().memoizedState;return[e,t]},useMutableSource:qh,useSyncExternalStore:Xh,useId:dg,unstable_isNewReconciler:!1};function Ar(e,t){try{var n="",r=t;do n+=p1(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ha(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function eu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ix=typeof WeakMap=="function"?WeakMap:Map;function hg(e,t,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xs||(xs=!0,cu=r),eu(e,t)},n}function gg(e,t,n){n=Vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){eu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){eu(e,t),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Sf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ix;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ew.bind(null,e,t,n),t.then(e,e))}function bf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lf(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vt(-1,1),t.tag=2,gn(n,t,1))),n.lanes|=1),e)}var zx=qt.ReactCurrentOwner,We=!1;function Fe(e,t,n,r){t.child=e===null?Yh(t,null,n,r):Nr(t,e.child,n,r)}function Ef(e,t,n,r,o){n=n.render;var i=t.ref;return Pr(t,o),r=wc(e,t,n,r,i,o),n=kc(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gt(e,t,o)):(Z&&n&&lc(t),t.flags|=1,Fe(e,t,r,o),t.child)}function Mf(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Rc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,yg(e,t,i,r,o)):(e=Hi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(s,r)&&e.ref===t.ref)return Gt(e,t,o)}return t.flags|=1,e=xn(i,r),e.ref=t.ref,e.return=t,t.child=e}function yg(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(jo(i,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Gt(e,t,o)}return tu(e,t,n,r,o)}function vg(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(yr,Xe),Xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(yr,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,G(yr,Xe),Xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,G(yr,Xe),Xe|=r;return Fe(e,t,o,n),t.child}function xg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function tu(e,t,n,r,o){var i=Ke(n)?Qn:Ae.current;return i=Rr(t,i),Pr(t,o),n=wc(e,t,n,r,i,o),r=kc(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gt(e,t,o)):(Z&&r&&lc(t),t.flags|=1,Fe(e,t,n,o),t.child)}function Cf(e,t,n,r,o){if(Ke(n)){var i=!0;us(t)}else i=!1;if(Pr(t,o),t.stateNode===null)Ui(e,t),Kh(t,n,r),Zl(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=mt(u):(u=Ke(n)?Qn:Ae.current,u=Rr(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&vf(t,s,r,u),on=!1;var f=t.memoizedState;s.state=f,ms(t,r,s,o),l=t.memoizedState,a!==r||f!==l||He.current||on?(typeof d=="function"&&(Jl(t,n,d,r),l=t.memoizedState),(a=on||yf(t,n,a,r,f,l,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Wh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:yt(t.type,a),s.props=u,c=t.pendingProps,f=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=mt(l):(l=Ke(n)?Qn:Ae.current,l=Rr(t,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==c||f!==l)&&vf(t,s,r,l),on=!1,f=t.memoizedState,s.state=f,ms(t,r,s,o);var m=t.memoizedState;a!==c||f!==m||He.current||on?(typeof y=="function"&&(Jl(t,n,y,r),m=t.memoizedState),(u=on||yf(t,n,u,r,f,m,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,m,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),s.props=r,s.state=m,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return nu(e,t,n,r,i,o)}function nu(e,t,n,r,o,i){xg(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&ff(t,n,!1),Gt(e,t,i);r=t.stateNode,zx.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Nr(t,e.child,null,i),t.child=Nr(t,null,a,i)):Fe(e,t,a,i),t.memoizedState=r.state,o&&ff(t,n,!0),t.child}function wg(e){var t=e.stateNode;t.pendingContext?df(e,t.pendingContext,t.pendingContext!==t.context):t.context&&df(e,t.context,!1),gc(e,t.containerInfo)}function Pf(e,t,n,r,o){return jr(),cc(o),t.flags|=256,Fe(e,t,n,r),t.child}var ru={dehydrated:null,treeContext:null,retryLane:0};function ou(e){return{baseLanes:e,cachePool:null,transitions:null}}function kg(e,t,n){var r=t.pendingProps,o=te.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),G(te,o&1),e===null)return ql(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Js(s,r,0,null),e=Kn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ou(n),t.memoizedState=ru,e):Lc(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Ux(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=xn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=xn(a,i):(i=Kn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?ou(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=ru,r}return i=e.child,e=i.sibling,r=xn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Lc(e,t){return t=Js({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ei(e,t,n,r){return r!==null&&cc(r),Nr(t,e.child,null,n),e=Lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ux(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Ha(Error(C(422))),Ei(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Js({mode:"visible",children:r.children},o,0,null),i=Kn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Nr(t,e.child,null,s),t.child.memoizedState=ou(s),t.memoizedState=ru,i);if(!(t.mode&1))return Ei(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(C(419)),r=Ha(i,r,void 0),Ei(e,t,s,r)}if(a=(s&e.childLanes)!==0,We||a){if(r=xe,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Kt(e,o),St(r,e,o,-1))}return Dc(),r=Ha(Error(C(421))),Ei(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=tw.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Je=hn(o.nextSibling),et=t,Z=!0,xt=null,e!==null&&(ut[ct++]=At,ut[ct++]=Ot,ut[ct++]=qn,At=e.id,Ot=e.overflow,qn=t),t=Lc(t,r.children),t.flags|=4096,t)}function Tf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xl(e.return,t,n)}function Ka(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Sg(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Fe(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tf(e,n,t);else if(e.tag===19)Tf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(te,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&hs(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ka(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&hs(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ka(t,!0,n,null,i);break;case"together":Ka(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ui(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $x(e,t,n){switch(t.tag){case 3:wg(t),jr();break;case 5:Qh(t);break;case 1:Ke(t.type)&&us(t);break;case 4:gc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;G(fs,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?kg(e,t,n):(G(te,te.current&1),e=Gt(e,t,n),e!==null?e.sibling:null);G(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sg(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,vg(e,t,n)}return Gt(e,t,n)}var bg,iu,Lg,Eg;bg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};iu=function(){};Lg=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,$n(Tt.current);var i=null;switch(n){case"input":o=Cl(e,o),r=Cl(e,r),i=[];break;case"select":o=oe({},o,{value:void 0}),r=oe({},r,{value:void 0}),i=[];break;case"textarea":o=Dl(e,o),r=Dl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=as)}jl(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Eo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&q("scroll",e),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Eg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Jr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wx(e,t,n){var r=t.pendingProps;switch(uc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return Ke(t.type)&&ls(),De(t),null;case 3:return r=t.stateNode,_r(),X(He),X(Ae),vc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(pu(xt),xt=null))),iu(e,t),De(t),null;case 5:yc(t);var o=$n(Fo.current);if(n=t.type,e!==null&&t.stateNode!=null)Lg(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return De(t),null}if(e=$n(Tt.current),bi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Mt]=t,r[Ao]=i,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<io.length;o++)q(io[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Fd(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":Bd(r,i),q("invalid",r)}jl(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Si(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Si(r.textContent,a,e),o=["children",""+a]):Eo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&q("scroll",r)}switch(n){case"input":mi(r),Vd(r,i,!0);break;case"textarea":mi(r),Id(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=as)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Mt]=t,e[Ao]=r,bg(e,t,!1,!1),t.stateNode=e;e:{switch(s=Nl(n,r),n){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<io.length;o++)q(io[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":Fd(e,r),o=Cl(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=oe({},r,{value:void 0}),q("invalid",e);break;case"textarea":Bd(e,r),o=Dl(e,r),q("invalid",e);break;default:o=r}jl(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?th(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zm(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Mo(e,l):typeof l=="number"&&Mo(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Eo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&q("scroll",e):l!=null&&Yu(e,i,l,s))}switch(n){case"input":mi(e),Vd(e,r,!1);break;case"textarea":mi(e),Id(e);break;case"option":r.value!=null&&e.setAttribute("value",""+bn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Lr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=as)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return De(t),null;case 6:if(e&&t.stateNode!=null)Eg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=$n(Fo.current),$n(Tt.current),bi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mt]=t,(i=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:Si(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Si(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return De(t),null;case 13:if(X(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Je!==null&&t.mode&1&&!(t.flags&128))Uh(),jr(),t.flags|=98560,i=!1;else if(i=bi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[Mt]=t}else jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else xt!==null&&(pu(xt),xt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?ge===0&&(ge=3):Dc())),t.updateQueue!==null&&(t.flags|=4),De(t),null);case 4:return _r(),iu(e,t),e===null&&No(t.stateNode.containerInfo),De(t),null;case 10:return pc(t.type._context),De(t),null;case 17:return Ke(t.type)&&ls(),De(t),null;case 19:if(X(te),i=t.memoizedState,i===null)return De(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Jr(i,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=hs(e),s!==null){for(t.flags|=128,Jr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(te,te.current&1|2),t.child}e=e.sibling}i.tail!==null&&ue()>Or&&(t.flags|=128,r=!0,Jr(i,!1),t.lanes=4194304)}else{if(!r)if(e=hs(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Z)return De(t),null}else 2*ue()-i.renderingStartTime>Or&&n!==1073741824&&(t.flags|=128,r=!0,Jr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ue(),t.sibling=null,n=te.current,G(te,r?n&1|2:n&1),t):(De(t),null);case 22:case 23:return Tc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Hx(e,t){switch(uc(t),t.tag){case 1:return Ke(t.type)&&ls(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(),X(He),X(Ae),vc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yc(t),null;case 13:if(X(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(te),null;case 4:return _r(),null;case 10:return pc(t.type._context),null;case 22:case 23:return Tc(),null;case 24:return null;default:return null}}var Mi=!1,je=!1,Kx=typeof WeakSet=="function"?WeakSet:Set,j=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function su(e,t,n){try{n()}catch(r){se(e,t,r)}}var Df=!1;function Gx(e,t){if($l=os,e=Th(),ac(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,c=e,f=null;t:for(;;){for(var y;c!==n||o!==0&&c.nodeType!==3||(a=s+o),c!==i||r!==0&&c.nodeType!==3||(l=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(y=c.firstChild)!==null;)f=c,c=y;for(;;){if(c===e)break t;if(f===n&&++u===o&&(a=s),f===i&&++d===r&&(l=s),(y=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wl={focusedElem:e,selectionRange:n},os=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,w=m.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:yt(t.type,v),w);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(S){se(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return m=Df,Df=!1,m}function go(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&su(t,n,i)}o=o.next}while(o!==r)}}function qs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function au(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mg(e){var t=e.alternate;t!==null&&(e.alternate=null,Mg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Ao],delete t[Gl],delete t[Tx],delete t[Dx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cg(e){return e.tag===5||e.tag===3||e.tag===4}function Rf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=as));else if(r!==4&&(e=e.child,e!==null))for(lu(e,t,n),e=e.sibling;e!==null;)lu(e,t,n),e=e.sibling}function uu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(uu(e,t,n),e=e.sibling;e!==null;)uu(e,t,n),e=e.sibling}var Se=null,vt=!1;function en(e,t,n){for(n=n.child;n!==null;)Pg(e,t,n),n=n.sibling}function Pg(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Us,n)}catch{}switch(n.tag){case 5:je||gr(n,t);case 6:var r=Se,o=vt;Se=null,en(e,t,n),Se=r,vt=o,Se!==null&&(vt?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(vt?(e=Se,n=n.stateNode,e.nodeType===8?Ba(e.parentNode,n):e.nodeType===1&&Ba(e,n),Do(e)):Ba(Se,n.stateNode));break;case 4:r=Se,o=vt,Se=n.stateNode.containerInfo,vt=!0,en(e,t,n),Se=r,vt=o;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&su(n,t,s),o=o.next}while(o!==r)}en(e,t,n);break;case 1:if(!je&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,t,a)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,en(e,t,n),je=r):en(e,t,n);break;default:en(e,t,n)}}function jf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Kx),t.forEach(function(r){var o=nw.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,vt=!1;break e;case 3:Se=a.stateNode.containerInfo,vt=!0;break e;case 4:Se=a.stateNode.containerInfo,vt=!0;break e}a=a.return}if(Se===null)throw Error(C(160));Pg(i,s,o),Se=null,vt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){se(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tg(t,e),t=t.sibling}function Tg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),Lt(e),r&4){try{go(3,e,e.return),qs(3,e)}catch(v){se(e,e.return,v)}try{go(5,e,e.return)}catch(v){se(e,e.return,v)}}break;case 1:gt(t,e),Lt(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(gt(t,e),Lt(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var o=e.stateNode;try{Mo(o,"")}catch(v){se(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&qm(o,i),Nl(a,s);var u=Nl(a,i);for(s=0;s<l.length;s+=2){var d=l[s],c=l[s+1];d==="style"?th(o,c):d==="dangerouslySetInnerHTML"?Zm(o,c):d==="children"?Mo(o,c):Yu(o,d,c,u)}switch(a){case"input":Pl(o,i);break;case"textarea":Xm(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Lr(o,!!i.multiple,y,!1):f!==!!i.multiple&&(i.defaultValue!=null?Lr(o,!!i.multiple,i.defaultValue,!0):Lr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ao]=i}catch(v){se(e,e.return,v)}}break;case 6:if(gt(t,e),Lt(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){se(e,e.return,v)}}break;case 3:if(gt(t,e),Lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Do(t.containerInfo)}catch(v){se(e,e.return,v)}break;case 4:gt(t,e),Lt(e);break;case 13:gt(t,e),Lt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Cc=ue())),r&4&&jf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(je=(u=je)||d,gt(t,e),je=u):gt(t,e),Lt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(j=e,d=e.child;d!==null;){for(c=j=d;j!==null;){switch(f=j,y=f.child,f.tag){case 0:case 11:case 14:case 15:go(4,f,f.return);break;case 1:gr(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(v){se(r,n,v)}}break;case 5:gr(f,f.return);break;case 22:if(f.memoizedState!==null){_f(c);continue}}y!==null?(y.return=f,j=y):_f(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=c.stateNode,l=c.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=eh("display",s))}catch(v){se(e,e.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){se(e,e.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:gt(t,e),Lt(e),r&4&&jf(e);break;case 21:break;default:gt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cg(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Mo(o,""),r.flags&=-33);var i=Rf(e);uu(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Rf(e);lu(e,a,s);break;default:throw Error(C(161))}}catch(l){se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yx(e,t,n){j=e,Dg(e)}function Dg(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Mi;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||je;a=Mi;var u=je;if(Mi=s,(je=l)&&!u)for(j=o;j!==null;)s=j,l=s.child,s.tag===22&&s.memoizedState!==null?Af(o):l!==null?(l.return=s,j=l):Af(o);for(;i!==null;)j=i,Dg(i),i=i.sibling;j=o,Mi=a,je=u}Nf(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,j=i):Nf(e)}}function Nf(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||qs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:yt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&gf(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gf(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Do(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}je||t.flags&512&&au(t)}catch(f){se(t,t.return,f)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function _f(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Af(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qs(4,t)}catch(l){se(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){se(t,o,l)}}var i=t.return;try{au(t)}catch(l){se(t,i,l)}break;case 5:var s=t.return;try{au(t)}catch(l){se(t,s,l)}}}catch(l){se(t,t.return,l)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var Qx=Math.ceil,vs=qt.ReactCurrentDispatcher,Ec=qt.ReactCurrentOwner,ft=qt.ReactCurrentBatchConfig,$=0,xe=null,de=null,Ee=0,Xe=0,yr=Dn(0),ge=0,zo=null,Jn=0,Xs=0,Mc=0,yo=null,$e=null,Cc=0,Or=1/0,Nt=null,xs=!1,cu=null,yn=null,Ci=!1,cn=null,ws=0,vo=0,du=null,$i=-1,Wi=0;function Ve(){return $&6?ue():$i!==-1?$i:$i=ue()}function vn(e){return e.mode&1?$&2&&Ee!==0?Ee&-Ee:jx.transition!==null?(Wi===0&&(Wi=ph()),Wi):(e=W,e!==0||(e=window.event,e=e===void 0?16:wh(e.type)),e):1}function St(e,t,n,r){if(50<vo)throw vo=0,du=null,Error(C(185));Jo(e,n,r),(!($&2)||e!==xe)&&(e===xe&&(!($&2)&&(Xs|=n),ge===4&&ln(e,Ee)),Ge(e,r),n===1&&$===0&&!(t.mode&1)&&(Or=ue()+500,Gs&&Rn()))}function Ge(e,t){var n=e.callbackNode;j1(e,t);var r=rs(e,e===xe?Ee:0);if(r===0)n!==null&&$d(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$d(n),t===1)e.tag===0?Rx(Of.bind(null,e)):Bh(Of.bind(null,e)),Cx(function(){!($&6)&&Rn()}),n=null;else{switch(mh(r)){case 1:n=Zu;break;case 4:n=dh;break;case 16:n=ns;break;case 536870912:n=fh;break;default:n=ns}n=Vg(n,Rg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rg(e,t){if($i=-1,Wi=0,$&6)throw Error(C(327));var n=e.callbackNode;if(Tr()&&e.callbackNode!==n)return null;var r=rs(e,e===xe?Ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ks(e,r);else{t=r;var o=$;$|=2;var i=Ng();(xe!==e||Ee!==t)&&(Nt=null,Or=ue()+500,Hn(e,t));do try{Jx();break}catch(a){jg(e,a)}while(!0);fc(),vs.current=i,$=o,de!==null?t=0:(xe=null,Ee=0,t=ge)}if(t!==0){if(t===2&&(o=Vl(e),o!==0&&(r=o,t=fu(e,o))),t===1)throw n=zo,Hn(e,0),ln(e,r),Ge(e,ue()),n;if(t===6)ln(e,r);else{if(o=e.current.alternate,!(r&30)&&!qx(o)&&(t=ks(e,r),t===2&&(i=Vl(e),i!==0&&(r=i,t=fu(e,i))),t===1))throw n=zo,Hn(e,0),ln(e,r),Ge(e,ue()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:On(e,$e,Nt);break;case 3:if(ln(e,r),(r&130023424)===r&&(t=Cc+500-ue(),10<t)){if(rs(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Kl(On.bind(null,e,$e,Nt),t);break}On(e,$e,Nt);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-kt(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qx(r/1960))-r,10<r){e.timeoutHandle=Kl(On.bind(null,e,$e,Nt),r);break}On(e,$e,Nt);break;case 5:On(e,$e,Nt);break;default:throw Error(C(329))}}}return Ge(e,ue()),e.callbackNode===n?Rg.bind(null,e):null}function fu(e,t){var n=yo;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=ks(e,t),e!==2&&(t=$e,$e=n,t!==null&&pu(t)),e}function pu(e){$e===null?$e=e:$e.push.apply($e,e)}function qx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!bt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~Mc,t&=~Xs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),r=1<<n;e[n]=-1,t&=~r}}function Of(e){if($&6)throw Error(C(327));Tr();var t=rs(e,0);if(!(t&1))return Ge(e,ue()),null;var n=ks(e,t);if(e.tag!==0&&n===2){var r=Vl(e);r!==0&&(t=r,n=fu(e,r))}if(n===1)throw n=zo,Hn(e,0),ln(e,t),Ge(e,ue()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,On(e,$e,Nt),Ge(e,ue()),null}function Pc(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Or=ue()+500,Gs&&Rn())}}function Zn(e){cn!==null&&cn.tag===0&&!($&6)&&Tr();var t=$;$|=1;var n=ft.transition,r=W;try{if(ft.transition=null,W=1,e)return e()}finally{W=r,ft.transition=n,$=t,!($&6)&&Rn()}}function Tc(){Xe=yr.current,X(yr)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Mx(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(uc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ls();break;case 3:_r(),X(He),X(Ae),vc();break;case 5:yc(r);break;case 4:_r();break;case 13:X(te);break;case 19:X(te);break;case 10:pc(r.type._context);break;case 22:case 23:Tc()}n=n.return}if(xe=e,de=e=xn(e.current,null),Ee=Xe=t,ge=0,zo=null,Mc=Xs=Jn=0,$e=yo=null,Un!==null){for(t=0;t<Un.length;t++)if(n=Un[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Un=null}return e}function jg(e,t){do{var n=de;try{if(fc(),Ii.current=ys,gs){for(var r=re.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}gs=!1}if(Xn=0,ve=he=re=null,ho=!1,Vo=0,Ec.current=null,n===null||n.return===null){ge=1,zo=t,de=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=Ee,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=bf(s);if(y!==null){y.flags&=-257,Lf(y,s,a,i,t),y.mode&1&&Sf(i,u,t),t=y,l=u;var m=t.updateQueue;if(m===null){var v=new Set;v.add(l),t.updateQueue=v}else m.add(l);break e}else{if(!(t&1)){Sf(i,u,t),Dc();break e}l=Error(C(426))}}else if(Z&&a.mode&1){var w=bf(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Lf(w,s,a,i,t),cc(Ar(l,a));break e}}i=l=Ar(l,a),ge!==4&&(ge=2),yo===null?yo=[i]:yo.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=hg(i,l,t);hf(i,h);break e;case 1:a=l;var p=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(yn===null||!yn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=gg(i,a,t);hf(i,S);break e}}i=i.return}while(i!==null)}Ag(n)}catch(L){t=L,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Ng(){var e=vs.current;return vs.current=ys,e===null?ys:e}function Dc(){(ge===0||ge===3||ge===2)&&(ge=4),xe===null||!(Jn&268435455)&&!(Xs&268435455)||ln(xe,Ee)}function ks(e,t){var n=$;$|=2;var r=Ng();(xe!==e||Ee!==t)&&(Nt=null,Hn(e,t));do try{Xx();break}catch(o){jg(e,o)}while(!0);if(fc(),$=n,vs.current=r,de!==null)throw Error(C(261));return xe=null,Ee=0,ge}function Xx(){for(;de!==null;)_g(de)}function Jx(){for(;de!==null&&!b1();)_g(de)}function _g(e){var t=Fg(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?Ag(e):de=t,Ec.current=null}function Ag(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hx(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,de=null;return}}else if(n=Wx(n,t,Xe),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);ge===0&&(ge=5)}function On(e,t,n){var r=W,o=ft.transition;try{ft.transition=null,W=1,Zx(e,t,n,r)}finally{ft.transition=o,W=r}return null}function Zx(e,t,n,r){do Tr();while(cn!==null);if($&6)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(N1(e,i),e===xe&&(de=xe=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ci||(Ci=!0,Vg(ns,function(){return Tr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ft.transition,ft.transition=null;var s=W;W=1;var a=$;$|=4,Ec.current=null,Gx(e,n),Tg(n,e),xx(Wl),os=!!$l,Wl=$l=null,e.current=n,Yx(n),L1(),$=a,W=s,ft.transition=i}else e.current=n;if(Ci&&(Ci=!1,cn=e,ws=o),i=e.pendingLanes,i===0&&(yn=null),C1(n.stateNode),Ge(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(xs)throw xs=!1,e=cu,cu=null,e;return ws&1&&e.tag!==0&&Tr(),i=e.pendingLanes,i&1?e===du?vo++:(vo=0,du=e):vo=0,Rn(),null}function Tr(){if(cn!==null){var e=mh(ws),t=ft.transition,n=W;try{if(ft.transition=null,W=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,ws=0,$&6)throw Error(C(331));var o=$;for($|=4,j=e.current;j!==null;){var i=j,s=i.child;if(j.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var d=j;switch(d.tag){case 0:case 11:case 15:go(8,d,i)}var c=d.child;if(c!==null)c.return=d,j=c;else for(;j!==null;){d=j;var f=d.sibling,y=d.return;if(Mg(d),d===u){j=null;break}if(f!==null){f.return=y,j=f;break}j=y}}}var m=i.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}j=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,j=s;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:go(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,j=h;break e}j=i.return}}var p=e.current;for(j=p;j!==null;){s=j;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,j=g;else e:for(s=p;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qs(9,a)}}catch(L){se(a,a.return,L)}if(a===s){j=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,j=S;break e}j=a.return}}if($=o,Rn(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Us,e)}catch{}r=!0}return r}finally{W=n,ft.transition=t}}return!1}function Ff(e,t,n){t=Ar(n,t),t=hg(e,t,1),e=gn(e,t,1),t=Ve(),e!==null&&(Jo(e,1,t),Ge(e,t))}function se(e,t,n){if(e.tag===3)Ff(e,e,n);else for(;t!==null;){if(t.tag===3){Ff(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){e=Ar(n,e),e=gg(t,e,1),t=gn(t,e,1),e=Ve(),t!==null&&(Jo(t,1,e),Ge(t,e));break}}t=t.return}}function ew(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(Ee&n)===n&&(ge===4||ge===3&&(Ee&130023424)===Ee&&500>ue()-Cc?Hn(e,0):Mc|=n),Ge(e,t)}function Og(e,t){t===0&&(e.mode&1?(t=yi,yi<<=1,!(yi&130023424)&&(yi=4194304)):t=1);var n=Ve();e=Kt(e,t),e!==null&&(Jo(e,t,n),Ge(e,n))}function tw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Og(e,n)}function nw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Og(e,n)}var Fg;Fg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,$x(e,t,n);We=!!(e.flags&131072)}else We=!1,Z&&t.flags&1048576&&Ih(t,ds,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ui(e,t),e=t.pendingProps;var o=Rr(t,Ae.current);Pr(t,n),o=wc(null,t,r,e,o,n);var i=kc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(i=!0,us(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,hc(t),o.updater=Ys,t.stateNode=o,o._reactInternals=t,Zl(t,r,e,n),t=nu(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&lc(t),Fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ui(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=ow(r),e=yt(r,e),o){case 0:t=tu(null,t,r,e,n);break e;case 1:t=Cf(null,t,r,e,n);break e;case 11:t=Ef(null,t,r,e,n);break e;case 14:t=Mf(null,t,r,yt(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),tu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Cf(e,t,r,o,n);case 3:e:{if(wg(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Wh(e,t),ms(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Ar(Error(C(423)),t),t=Pf(e,t,r,n,o);break e}else if(r!==o){o=Ar(Error(C(424)),t),t=Pf(e,t,r,n,o);break e}else for(Je=hn(t.stateNode.containerInfo.firstChild),et=t,Z=!0,xt=null,n=Yh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===o){t=Gt(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return Qh(t),e===null&&ql(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Hl(r,o)?s=null:i!==null&&Hl(r,i)&&(t.flags|=32),xg(e,t),Fe(e,t,s,n),t.child;case 6:return e===null&&ql(t),null;case 13:return kg(e,t,n);case 4:return gc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nr(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Ef(e,t,r,o,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,G(fs,r._currentValue),r._currentValue=s,i!==null)if(bt(i.value,s)){if(i.children===o.children&&!He.current){t=Gt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Vt(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Xl(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(C(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Xl(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Pr(t,n),o=mt(o),r=r(o),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,o=yt(r,t.pendingProps),o=yt(r.type,o),Mf(e,t,r,o,n);case 15:return yg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Ui(e,t),t.tag=1,Ke(r)?(e=!0,us(t)):e=!1,Pr(t,n),Kh(t,r,o),Zl(t,r,o,n),nu(null,t,r,!0,e,n);case 19:return Sg(e,t,n);case 22:return vg(e,t,n)}throw Error(C(156,t.tag))};function Vg(e,t){return ch(e,t)}function rw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new rw(e,t,n,r)}function Rc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ow(e){if(typeof e=="function")return Rc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qu)return 11;if(e===Xu)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hi(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Rc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ar:return Kn(n.children,o,i,t);case Qu:s=8,o|=8;break;case bl:return e=dt(12,n,t,o|2),e.elementType=bl,e.lanes=i,e;case Ll:return e=dt(13,n,t,o),e.elementType=Ll,e.lanes=i,e;case El:return e=dt(19,n,t,o),e.elementType=El,e.lanes=i,e;case Gm:return Js(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hm:s=10;break e;case Km:s=9;break e;case qu:s=11;break e;case Xu:s=14;break e;case rn:s=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=dt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Kn(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function Js(e,t,n,r){return e=dt(22,e,r,t),e.elementType=Gm,e.lanes=n,e.stateNode={isHidden:!1},e}function Ga(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function Ya(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function iw(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pa(0),this.expirationTimes=Pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pa(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function jc(e,t,n,r,o,i,s,a,l){return e=new iw(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=dt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hc(i),e}function sw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Bg(e){if(!e)return Ln;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ke(n))return Vh(e,n,t)}return t}function Ig(e,t,n,r,o,i,s,a,l){return e=jc(n,r,!0,e,o,i,s,a,l),e.context=Bg(null),n=e.current,r=Ve(),o=vn(n),i=Vt(r,o),i.callback=t??null,gn(n,i,o),e.current.lanes=o,Jo(e,o,r),Ge(e,r),e}function Zs(e,t,n,r){var o=t.current,i=Ve(),s=vn(o);return n=Bg(n),t.context===null?t.context=n:t.pendingContext=n,t=Vt(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gn(o,t,s),e!==null&&(St(e,o,s,i),Bi(e,o,s)),s}function Ss(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nc(e,t){Vf(e,t),(e=e.alternate)&&Vf(e,t)}function aw(){return null}var zg=typeof reportError=="function"?reportError:function(e){console.error(e)};function _c(e){this._internalRoot=e}ea.prototype.render=_c.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Zs(e,t,null,null)};ea.prototype.unmount=_c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zn(function(){Zs(null,e,null,null)}),t[Ht]=null}};function ea(e){this._internalRoot=e}ea.prototype.unstable_scheduleHydration=function(e){if(e){var t=yh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&xh(e)}};function Ac(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bf(){}function lw(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ss(s);i.call(u)}}var s=Ig(t,r,e,0,null,!1,!1,"",Bf);return e._reactRootContainer=s,e[Ht]=s.current,No(e.nodeType===8?e.parentNode:e),Zn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Ss(l);a.call(u)}}var l=jc(e,0,!1,null,null,!1,!1,"",Bf);return e._reactRootContainer=l,e[Ht]=l.current,No(e.nodeType===8?e.parentNode:e),Zn(function(){Zs(t,l,n,r)}),l}function na(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=Ss(s);a.call(l)}}Zs(t,s,e,o)}else s=lw(n,t,e,o,r);return Ss(s)}hh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=oo(t.pendingLanes);n!==0&&(ec(t,n|1),Ge(t,ue()),!($&6)&&(Or=ue()+500,Rn()))}break;case 13:Zn(function(){var r=Kt(e,1);if(r!==null){var o=Ve();St(r,e,1,o)}}),Nc(e,1)}};tc=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var n=Ve();St(t,e,134217728,n)}Nc(e,134217728)}};gh=function(e){if(e.tag===13){var t=vn(e),n=Kt(e,t);if(n!==null){var r=Ve();St(n,e,t,r)}Nc(e,t)}};yh=function(){return W};vh=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};Al=function(e,t,n){switch(t){case"input":if(Pl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ks(r);if(!o)throw Error(C(90));Qm(r),Pl(r,o)}}}break;case"textarea":Xm(e,n);break;case"select":t=n.value,t!=null&&Lr(e,!!n.multiple,t,!1)}};oh=Pc;ih=Zn;var uw={usingClientEntryPoint:!1,Events:[ei,dr,Ks,nh,rh,Pc]},Zr={findFiberByHostInstance:zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},cw={bundleType:Zr.bundleType,version:Zr.version,rendererPackageName:Zr.rendererPackageName,rendererConfig:Zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lh(e),e===null?null:e.stateNode},findFiberByHostInstance:Zr.findFiberByHostInstance||aw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{Us=Pi.inject(cw),Pt=Pi}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uw;it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(t))throw Error(C(200));return sw(e,t,null,n)};it.createRoot=function(e,t){if(!Ac(e))throw Error(C(299));var n=!1,r="",o=zg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=jc(e,1,!1,null,null,n,!1,r,o),e[Ht]=t.current,No(e.nodeType===8?e.parentNode:e),new _c(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=lh(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return Zn(e)};it.hydrate=function(e,t,n){if(!ta(t))throw Error(C(200));return na(null,e,t,!0,n)};it.hydrateRoot=function(e,t,n){if(!Ac(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=zg;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ig(t,null,e,1,n??null,o,!1,i,s),e[Ht]=t.current,No(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ea(t)};it.render=function(e,t,n){if(!ta(t))throw Error(C(200));return na(null,e,t,!1,n)};it.unmountComponentAtNode=function(e){if(!ta(e))throw Error(C(40));return e._reactRootContainer?(Zn(function(){na(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1};it.unstable_batchedUpdates=Pc;it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ta(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return na(e,t,n,!1,r)};it.version="18.2.0-next-9e3b772b8-20220608";function Ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ug)}catch(e){console.error(e)}}Ug(),Im.exports=it;var dw=Im.exports,If=dw;kl.createRoot=If.createRoot,kl.hydrateRoot=If.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uo(){return Uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uo.apply(this,arguments)}var dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dn||(dn={}));const zf="popstate";function fw(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return mu("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:bs(o)}return mw(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $g(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pw(){return Math.random().toString(36).substr(2,8)}function Uf(e,t){return{usr:e.state,key:e.key,idx:t}}function mu(e,t,n,r){return n===void 0&&(n=null),Uo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?$r(t):t,{state:n,key:t&&t.key||r||pw()})}function bs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function $r(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function mw(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=dn.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(Uo({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function c(){a=dn.Pop;let w=d(),h=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:h})}function f(w,h){a=dn.Push;let p=mu(v.location,w,h);n&&n(p,w),u=d()+1;let g=Uf(p,u),S=v.createHref(p);try{s.pushState(g,"",S)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;o.location.assign(S)}i&&l&&l({action:a,location:v.location,delta:1})}function y(w,h){a=dn.Replace;let p=mu(v.location,w,h);n&&n(p,w),u=d();let g=Uf(p,u),S=v.createHref(p);s.replaceState(g,"",S),i&&l&&l({action:a,location:v.location,delta:0})}function m(w){let h=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof w=="string"?w:bs(w);return p=p.replace(/ $/,"%20"),fe(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let v={get action(){return a},get location(){return e(o,s)},listen(w){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(zf,c),l=w,()=>{o.removeEventListener(zf,c),l=null}},createHref(w){return t(o,w)},createURL:m,encodeLocation(w){let h=m(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:y,go(w){return s.go(w)}};return v}var $f;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})($f||($f={}));function hw(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?$r(t):t,o=Oc(r.pathname||"/",n);if(o==null)return null;let i=Wg(e);gw(i);let s=null;for(let a=0;s==null&&a<i.length;++a){let l=Pw(o);s=Ew(i[a],l)}return s}function Wg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=wn([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(fe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Wg(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:bw(u,i.index),routesMeta:d})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let l of Hg(i.path))o(i,s,l)}),t}function Hg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Hg(r.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function gw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Lw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yw=/^:[\w-]+$/,vw=3,xw=2,ww=1,kw=10,Sw=-2,Wf=e=>e==="*";function bw(e,t){let n=e.split("/"),r=n.length;return n.some(Wf)&&(r+=Sw),t&&(r+=xw),n.filter(o=>!Wf(o)).reduce((o,i)=>o+(yw.test(i)?vw:i===""?ww:kw),r)}function Lw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Ew(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=Mw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;i.push({params:r,pathname:wn([o,d.pathname]),pathnameBase:jw(wn([o,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(o=wn([o,d.pathnameBase]))}return i}function Mw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Cw(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:f,isOptional:y}=d;if(f==="*"){let v=a[c]||"";s=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const m=a[c];return y&&!m?u[f]=void 0:u[f]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function Cw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),$g(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Pw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $g(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Oc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Tw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?$r(e):e;return{pathname:n?n.startsWith("/")?n:Dw(n,t):t,search:Nw(r),hash:_w(o)}}function Dw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Qa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Kg(e,t){let n=Rw(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Gg(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=$r(e):(o=Uo({},e),fe(!o.pathname||!o.pathname.includes("?"),Qa("?","pathname","search",o)),fe(!o.pathname||!o.pathname.includes("#"),Qa("#","pathname","hash",o)),fe(!o.search||!o.search.includes("#"),Qa("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let c=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),c-=1;o.pathname=f.join("/")}a=c>=0?t[c]:"/"}let l=Tw(o,a),u=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const wn=e=>e.join("/").replace(/\/\/+/g,"/"),jw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Nw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_w=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Aw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Yg=["post","put","patch","delete"];new Set(Yg);const Ow=["get",...Yg];new Set(Ow);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$o.apply(this,arguments)}const Fc=k.createContext(null),Fw=k.createContext(null),rr=k.createContext(null),ra=k.createContext(null),jn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Qg=k.createContext(null);function Vw(e,t){let{relative:n}=t===void 0?{}:t;ni()||fe(!1);let{basename:r,navigator:o}=k.useContext(rr),{hash:i,pathname:s,search:a}=Xg(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:wn([r,s])),o.createHref({pathname:l,search:a,hash:i})}function ni(){return k.useContext(ra)!=null}function oa(){return ni()||fe(!1),k.useContext(ra).location}function qg(e){k.useContext(rr).static||k.useLayoutEffect(e)}function Bw(){let{isDataRoute:e}=k.useContext(jn);return e?ek():Iw()}function Iw(){ni()||fe(!1);let e=k.useContext(Fc),{basename:t,future:n,navigator:r}=k.useContext(rr),{matches:o}=k.useContext(jn),{pathname:i}=oa(),s=JSON.stringify(Kg(o,n.v7_relativeSplatPath)),a=k.useRef(!1);return qg(()=>{a.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Gg(u,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:wn([t,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[t,r,s,i,e])}const zw=k.createContext(null);function Uw(e){let t=k.useContext(jn).outlet;return t&&k.createElement(zw.Provider,{value:e},t)}function Xg(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(rr),{matches:o}=k.useContext(jn),{pathname:i}=oa(),s=JSON.stringify(Kg(o,r.v7_relativeSplatPath));return k.useMemo(()=>Gg(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function $w(e,t){return Ww(e,t)}function Ww(e,t,n,r){ni()||fe(!1);let{navigator:o}=k.useContext(rr),{matches:i}=k.useContext(jn),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=oa(),d;if(t){var c;let w=typeof t=="string"?$r(t):t;l==="/"||(c=w.pathname)!=null&&c.startsWith(l)||fe(!1),d=w}else d=u;let f=d.pathname||"/",y=f;if(l!=="/"){let w=l.replace(/^\//,"").split("/");y="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let m=hw(e,{pathname:y}),v=Qw(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:wn([l,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:wn([l,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n,r);return t&&v?k.createElement(ra.Provider,{value:{location:$o({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:dn.Pop}},v):v}function Hw(){let e=Zw(),t=Aw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:o},n):null,null)}const Kw=k.createElement(Hw,null);class Gw extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(jn.Provider,{value:this.props.routeContext},k.createElement(Qg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yw(e){let{routeContext:t,match:n,children:r}=e,o=k.useContext(Fc);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(jn.Provider,{value:t},r)}function Qw(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=s.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));d>=0||fe(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let c=s[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:f,errors:y}=n,m=c.route.loader&&f[c.route.id]===void 0&&(!y||y[c.route.id]===void 0);if(c.route.lazy||m){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,c,f)=>{let y,m=!1,v=null,w=null;n&&(y=a&&c.route.id?a[c.route.id]:void 0,v=c.route.errorElement||Kw,l&&(u<0&&f===0?(tk("route-fallback",!1),m=!0,w=null):u===f&&(m=!0,w=c.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,f+1)),p=()=>{let g;return y?g=v:m?g=w:c.route.Component?g=k.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=d,k.createElement(Yw,{match:c,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:g})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?k.createElement(Gw,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Jg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jg||{}),Ls=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ls||{});function qw(e){let t=k.useContext(Fc);return t||fe(!1),t}function Xw(e){let t=k.useContext(Fw);return t||fe(!1),t}function Jw(e){let t=k.useContext(jn);return t||fe(!1),t}function Zg(e){let t=Jw(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function Zw(){var e;let t=k.useContext(Qg),n=Xw(Ls.UseRouteError),r=Zg(Ls.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ek(){let{router:e}=qw(Jg.UseNavigateStable),t=Zg(Ls.UseNavigateStable),n=k.useRef(!1);return qg(()=>{n.current=!0}),k.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,$o({fromRouteId:t},i)))},[e,t])}const Hf={};function tk(e,t,n){!t&&!Hf[e]&&(Hf[e]=!0)}function nk(e){return Uw(e.context)}function xo(e){fe(!1)}function rk(e){let{basename:t="/",children:n=null,location:r,navigationType:o=dn.Pop,navigator:i,static:s=!1,future:a}=e;ni()&&fe(!1);let l=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:i,static:s,future:$o({v7_relativeSplatPath:!1},a)}),[l,a,i,s]);typeof r=="string"&&(r=$r(r));let{pathname:d="/",search:c="",hash:f="",state:y=null,key:m="default"}=r,v=k.useMemo(()=>{let w=Oc(d,l);return w==null?null:{location:{pathname:w,search:c,hash:f,state:y,key:m},navigationType:o}},[l,d,c,f,y,m,o]);return v==null?null:k.createElement(rr.Provider,{value:u},k.createElement(ra.Provider,{children:n,value:v}))}function e0(e){let{children:t,location:n}=e;return $w(hu(t),n)}new Promise(()=>{});function hu(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,o)=>{if(!k.isValidElement(r))return;let i=[...t,o];if(r.type===k.Fragment){n.push.apply(n,hu(r.props.children,i));return}r.type!==xo&&fe(!1),!r.props.index||!r.props.children||fe(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=hu(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gu(){return gu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gu.apply(this,arguments)}function ok(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function ik(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function sk(e,t){return e.button===0&&(!t||t==="_self")&&!ik(e)}const ak=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],lk="6";try{window.__reactRouterVersion=lk}catch{}const uk="startTransition",Kf=wl[uk];function ck(e){let{basename:t,children:n,future:r,window:o}=e,i=k.useRef();i.current==null&&(i.current=fw({window:o,v5Compat:!0}));let s=i.current,[a,l]=k.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=k.useCallback(c=>{u&&Kf?Kf(()=>l(c)):l(c)},[l,u]);return k.useLayoutEffect(()=>s.listen(d),[s,d]),k.createElement(rk,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const dk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pk=k.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=t,f=ok(t,ak),{basename:y}=k.useContext(rr),m,v=!1;if(typeof u=="string"&&fk.test(u)&&(m=u,dk))try{let g=new URL(window.location.href),S=u.startsWith("//")?new URL(g.protocol+u):new URL(u),L=Oc(S.pathname,y);S.origin===g.origin&&L!=null?u=L+S.search+S.hash:v=!0}catch{}let w=Vw(u,{relative:o}),h=mk(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:o,unstable_viewTransition:c});function p(g){r&&r(g),g.defaultPrevented||h(g)}return k.createElement("a",gu({},f,{href:m||w,onClick:v||i?r:p,ref:n,target:l}))});var Gf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Gf||(Gf={}));var Yf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yf||(Yf={}));function mk(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=Bw(),u=oa(),d=Xg(e,{relative:s});return k.useCallback(c=>{if(sk(c,n)){c.preventDefault();let f=r!==void 0?r:bs(u)===bs(d);l(e,{replace:f,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a})}},[u,l,d,r,o,n,e,i,s,a])}const hk="/Newportfolio-ReactViteBuild/assets/character_1.svg",gk="/Newportfolio-ReactViteBuild/assets/homeIcon.svg",yk="/Newportfolio-ReactViteBuild/assets/aboutmeIcon.svg",vk="/Newportfolio-ReactViteBuild/assets/portfolioIcon.svg",xk="/Newportfolio-ReactViteBuild/assets/contactmeIcon.svg",wk="/Newportfolio-ReactViteBuild/assets/HomeIconSelected.svg",kk="/Newportfolio-ReactViteBuild/assets/aboutmeIconSelected.svg",Sk="/Newportfolio-ReactViteBuild/assets/portfolioIconSelected.svg",bk="/Newportfolio-ReactViteBuild/assets/contactmeIconSelected.svg",Lk="/Newportfolio-ReactViteBuild/assets/backgroundStrips1.svg",Ek="/Newportfolio-ReactViteBuild/assets/pointer.svg",Mk="/Newportfolio-ReactViteBuild/assets/filter_arrow.svg",Ck="/Newportfolio-ReactViteBuild/assets/browser_MinimizeButto.svg",Pk="/Newportfolio-ReactViteBuild/assets/browser_fullscreenButton.svg",t0="/Newportfolio-ReactViteBuild/assets/browser_closeButton.svg",Tk="/Newportfolio-ReactViteBuild/assets/backgroundStrings2.svg",n0="/Newportfolio-ReactViteBuild/assets/downloadResume.svg",Dk="/Newportfolio-ReactViteBuild/assets/Triangle.svg",Rk="/Newportfolio-ReactViteBuild/assets/TriangleMobile.svg",jk="/Newportfolio-ReactViteBuild/assets/profileImage.svg",Nk="/Newportfolio-ReactViteBuild/assets/leftBraket.svg",_k="/Newportfolio-ReactViteBuild/assets/rightBraket.svg",Ak="/Newportfolio-ReactViteBuild/assets/dollarSign.svg",Ce=k.createContext(null),Ok=({children:e})=>{const t=k.useRef([]),n=k.useRef([]),r=k.useRef(null),o=k.useRef(null),i=k.useRef([]),s=k.useRef(null),a=k.useRef(null),c={pageRef:t,svgArray:{Home:gk,"About Me":yk,Portfolio:vk,"Contact Me":xk},selectSVGArray:[wk,kk,Sk,bk],Character1:hk,triangle:Dk,mobileTriangle:Rk,profile:jk,bracketLeft:Nk,bracketRight:_k,moneySign:Ak,iconsRef:n,arrowRef:r,descRef:o,square:Lk,pointer:Ek,tabRef:i,filterListRef:s,backgroundSelectRef:a,labels:{HTML:"#E14E1D",CSS:"#0277BD",SASS:"#CD6799",Tailwind:"linear-gradient(82.5deg,#F5F5F5, #CD6799 19%,#3886EC 31%, #F5F5F5 )",JavaScript:"#CAB108",TypeScript:"#32A3EE",React:"#242938",Firebase:"#CF5E1C",PHP:"#7229D1",MySQL:"#F57C00"},Arrow:Mk,minimize:Ck,fullscreen:Pk,close:t0,strips:Tk,downloadSVG:n0};return x.jsx(Ce.Provider,{value:c,children:e})};function ke(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Fk=typeof Symbol=="function"&&Symbol.observable||"@@observable",Qf=Fk,qa=()=>Math.random().toString(36).substring(7).split("").join("."),Vk={INIT:`@@redux/INIT${qa()}`,REPLACE:`@@redux/REPLACE${qa()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${qa()}`},Es=Vk;function Vc(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function r0(e,t,n){if(typeof e!="function")throw new Error(ke(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ke(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ke(1));return n(r0)(e,t)}let r=e,o=t,i=new Map,s=i,a=0,l=!1;function u(){s===i&&(s=new Map,i.forEach((w,h)=>{s.set(h,w)}))}function d(){if(l)throw new Error(ke(3));return o}function c(w){if(typeof w!="function")throw new Error(ke(4));if(l)throw new Error(ke(5));let h=!0;u();const p=a++;return s.set(p,w),function(){if(h){if(l)throw new Error(ke(6));h=!1,u(),s.delete(p),i=null}}}function f(w){if(!Vc(w))throw new Error(ke(7));if(typeof w.type>"u")throw new Error(ke(8));if(typeof w.type!="string")throw new Error(ke(17));if(l)throw new Error(ke(9));try{l=!0,o=r(o,w)}finally{l=!1}return(i=s).forEach(p=>{p()}),w}function y(w){if(typeof w!="function")throw new Error(ke(10));r=w,f({type:Es.REPLACE})}function m(){const w=c;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(ke(11));function p(){const S=h;S.next&&S.next(d())}return p(),{unsubscribe:w(p)}},[Qf](){return this}}}return f({type:Es.INIT}),{dispatch:f,subscribe:c,getState:d,replaceReducer:y,[Qf]:m}}function Bk(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:Es.INIT})>"u")throw new Error(ke(12));if(typeof n(void 0,{type:Es.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ke(13))})}function Ik(e){const t=Object.keys(e),n={};for(let i=0;i<t.length;i++){const s=t[i];typeof e[s]=="function"&&(n[s]=e[s])}const r=Object.keys(n);let o;try{Bk(n)}catch(i){o=i}return function(s={},a){if(o)throw o;let l=!1;const u={};for(let d=0;d<r.length;d++){const c=r[d],f=n[c],y=s[c],m=f(y,a);if(typeof m>"u")throw a&&a.type,new Error(ke(14));u[c]=m,l=l||m!==y}return l=l||r.length!==Object.keys(s).length,l?u:s}}function Ms(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function zk(...e){return t=>(n,r)=>{const o=t(n,r);let i=()=>{throw new Error(ke(15))};const s={getState:o.getState,dispatch:(l,...u)=>i(l,...u)},a=e.map(l=>l(s));return i=Ms(...a)(o.dispatch),{...o,dispatch:i}}}function o0(e){return Vc(e)&&"type"in e&&typeof e.type=="string"}var i0=Symbol.for("immer-nothing"),qf=Symbol.for("immer-draftable"),nt=Symbol.for("immer-state");function wt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Fr=Object.getPrototypeOf;function Yt(e){return!!e&&!!e[nt]}function Qt(e){var t;return e?s0(e)||Array.isArray(e)||!!e[qf]||!!((t=e.constructor)!=null&&t[qf])||sa(e)||aa(e):!1}var Uk=Object.prototype.constructor.toString();function s0(e){if(!e||typeof e!="object")return!1;const t=Fr(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===Uk}function Cs(e,t){ia(e)===0?Reflect.ownKeys(e).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function ia(e){const t=e[nt];return t?t.type_:Array.isArray(e)?1:sa(e)?2:aa(e)?3:0}function yu(e,t){return ia(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function a0(e,t,n){const r=ia(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function $k(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function sa(e){return e instanceof Map}function aa(e){return e instanceof Set}function Fn(e){return e.copy_||e.base_}function vu(e,t){if(sa(e))return new Map(e);if(aa(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&s0(e))return Fr(e)?{...e}:Object.assign(Object.create(null),e);const n=Object.getOwnPropertyDescriptors(e);delete n[nt];let r=Reflect.ownKeys(n);for(let o=0;o<r.length;o++){const i=r[o],s=n[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(n[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Fr(e),n)}function Bc(e,t=!1){return la(e)||Yt(e)||!Qt(e)||(ia(e)>1&&(e.set=e.add=e.clear=e.delete=Wk),Object.freeze(e),t&&Object.entries(e).forEach(([n,r])=>Bc(r,!0))),e}function Wk(){wt(2)}function la(e){return Object.isFrozen(e)}var Hk={};function er(e){const t=Hk[e];return t||wt(0,e),t}var Wo;function l0(){return Wo}function Kk(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Xf(e,t){t&&(er("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function xu(e){wu(e),e.drafts_.forEach(Gk),e.drafts_=null}function wu(e){e===Wo&&(Wo=e.parent_)}function Jf(e){return Wo=Kk(Wo,e)}function Gk(e){const t=e[nt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Zf(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[nt].modified_&&(xu(t),wt(4)),Qt(e)&&(e=Ps(t,e),t.parent_||Ts(t,e)),t.patches_&&er("Patches").generateReplacementPatches_(n[nt].base_,e,t.patches_,t.inversePatches_)):e=Ps(t,n,[]),xu(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==i0?e:void 0}function Ps(e,t,n){if(la(t))return t;const r=t[nt];if(!r)return Cs(t,(o,i)=>ep(e,r,t,o,i,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return Ts(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const o=r.copy_;let i=o,s=!1;r.type_===3&&(i=new Set(o),o.clear(),s=!0),Cs(i,(a,l)=>ep(e,r,o,a,l,n,s)),Ts(e,o,!1),n&&e.patches_&&er("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function ep(e,t,n,r,o,i,s){if(Yt(o)){const a=i&&t&&t.type_!==3&&!yu(t.assigned_,r)?i.concat(r):void 0,l=Ps(e,o,a);if(a0(n,r,l),Yt(l))e.canAutoFreeze_=!1;else return}else s&&n.add(o);if(Qt(o)&&!la(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Ps(e,o),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&Ts(e,o)}}function Ts(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Bc(t,n)}function Yk(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:l0(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,i=Ic;n&&(o=[r],i=Ho);const{revoke:s,proxy:a}=Proxy.revocable(o,i);return r.draft_=a,r.revoke_=s,a}var Ic={get(e,t){if(t===nt)return e;const n=Fn(e);if(!yu(n,t))return Qk(e,n,t);const r=n[t];return e.finalized_||!Qt(r)?r:r===Xa(e.base_,t)?(Ja(e),e.copy_[t]=Su(r,e)):r},has(e,t){return t in Fn(e)},ownKeys(e){return Reflect.ownKeys(Fn(e))},set(e,t,n){const r=u0(Fn(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const o=Xa(Fn(e),t),i=o==null?void 0:o[nt];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if($k(n,o)&&(n!==void 0||yu(e.base_,t)))return!0;Ja(e),ku(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Xa(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Ja(e),ku(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Fn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){wt(11)},getPrototypeOf(e){return Fr(e.base_)},setPrototypeOf(){wt(12)}},Ho={};Cs(Ic,(e,t)=>{Ho[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Ho.deleteProperty=function(e,t){return Ho.set.call(this,e,t,void 0)};Ho.set=function(e,t,n){return Ic.set.call(this,e[0],t,n,e[0])};function Xa(e,t){const n=e[nt];return(n?Fn(n):e)[t]}function Qk(e,t,n){var o;const r=u0(t,n);return r?"value"in r?r.value:(o=r.get)==null?void 0:o.call(e.draft_):void 0}function u0(e,t){if(!(t in e))return;let n=Fr(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Fr(n)}}function ku(e){e.modified_||(e.modified_=!0,e.parent_&&ku(e.parent_))}function Ja(e){e.copy_||(e.copy_=vu(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var qk=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const i=n;n=t;const s=this;return function(l=i,...u){return s.produce(l,d=>n.call(this,d,...u))}}typeof n!="function"&&wt(6),r!==void 0&&typeof r!="function"&&wt(7);let o;if(Qt(t)){const i=Jf(this),s=Su(t,void 0);let a=!0;try{o=n(s),a=!1}finally{a?xu(i):wu(i)}return Xf(i,r),Zf(o,i)}else if(!t||typeof t!="object"){if(o=n(t),o===void 0&&(o=t),o===i0&&(o=void 0),this.autoFreeze_&&Bc(o,!0),r){const i=[],s=[];er("Patches").generateReplacementPatches_(t,o,i,s),r(i,s)}return o}else wt(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(s,...a)=>this.produceWithPatches(s,l=>t(l,...a));let r,o;return[this.produce(t,n,(s,a)=>{r=s,o=a}),r,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Qt(e)||wt(8),Yt(e)&&(e=c0(e));const t=Jf(this),n=Su(e,void 0);return n[nt].isManual_=!0,wu(t),n}finishDraft(e,t){const n=e&&e[nt];(!n||!n.isManual_)&&wt(9);const{scope_:r}=n;return Xf(r,t),Zf(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const o=t[n];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}n>-1&&(t=t.slice(n+1));const r=er("Patches").applyPatches_;return Yt(e)?r(e,t):this.produce(e,o=>r(o,t))}};function Su(e,t){const n=sa(e)?er("MapSet").proxyMap_(e,t):aa(e)?er("MapSet").proxySet_(e,t):Yk(e,t);return(t?t.scope_:l0()).drafts_.push(n),n}function c0(e){return Yt(e)||wt(10,e),d0(e)}function d0(e){if(!Qt(e)||la(e))return e;const t=e[nt];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=vu(e,t.scope_.immer_.useStrictShallowCopy_)}else n=vu(e,!0);return Cs(n,(r,o)=>{a0(n,r,d0(o))}),t&&(t.finalized_=!1),n}var rt=new qk,zc=rt.produce;rt.produceWithPatches.bind(rt);rt.setAutoFreeze.bind(rt);rt.setUseStrictShallowCopy.bind(rt);rt.applyPatches.bind(rt);rt.createDraft.bind(rt);rt.finishDraft.bind(rt);function Xk(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function Jk(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function Zk(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${t}[${n}]`)}}var tp=e=>Array.isArray(e)?e:[e];function eS(e){const t=Array.isArray(e[0])?e[0]:e;return Zk(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function tS(e,t){const n=[],{length:r}=e;for(let o=0;o<r;o++)n.push(e[o].apply(null,t));return n}var nS=class{constructor(e){this.value=e}deref(){return this.value}},rS=typeof WeakRef<"u"?WeakRef:nS,oS=0,np=1;function Ti(){return{s:oS,v:void 0,o:null,p:null}}function Uc(e,t={}){let n=Ti();const{resultEqualityCheck:r}=t;let o,i=0;function s(){var c;let a=n;const{length:l}=arguments;for(let f=0,y=l;f<y;f++){const m=arguments[f];if(typeof m=="function"||typeof m=="object"&&m!==null){let v=a.o;v===null&&(a.o=v=new WeakMap);const w=v.get(m);w===void 0?(a=Ti(),v.set(m,a)):a=w}else{let v=a.p;v===null&&(a.p=v=new Map);const w=v.get(m);w===void 0?(a=Ti(),v.set(m,a)):a=w}}const u=a;let d;if(a.s===np?d=a.v:(d=e.apply(null,arguments),i++),u.s=np,r){const f=((c=o==null?void 0:o.deref)==null?void 0:c.call(o))??o;f!=null&&r(f,d)&&(d=f,i!==0&&i--),o=typeof d=="object"&&d!==null||typeof d=="function"?new rS(d):d}return u.v=d,d}return s.clearCache=()=>{n=Ti(),s.resetResultsCount()},s.resultsCount=()=>i,s.resetResultsCount=()=>{i=0},s}function f0(e,...t){const n=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,r=(...o)=>{let i=0,s=0,a,l={},u=o.pop();typeof u=="object"&&(l=u,u=o.pop()),Xk(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const d={...n,...l},{memoize:c,memoizeOptions:f=[],argsMemoize:y=Uc,argsMemoizeOptions:m=[],devModeChecks:v={}}=d,w=tp(f),h=tp(m),p=eS(o),g=c(function(){return i++,u.apply(null,arguments)},...w),S=y(function(){s++;const E=tS(p,arguments);return a=g.apply(null,E),a},...h);return Object.assign(S,{resultFunc:u,memoizedResultFunc:g,dependencies:p,dependencyRecomputations:()=>s,resetDependencyRecomputations:()=>{s=0},lastResult:()=>a,recomputations:()=>i,resetRecomputations:()=>{i=0},memoize:c,argsMemoize:y})};return Object.assign(r,{withTypes:()=>r}),r}var p0=f0(Uc),iS=Object.assign((e,t=p0)=>{Jk(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),r=n.map(i=>e[i]);return t(r,(...i)=>i.reduce((s,a,l)=>(s[n[l]]=a,s),{}))},{withTypes:()=>iS});function m0(e){return({dispatch:n,getState:r})=>o=>i=>typeof i=="function"?i(n,r,e):o(i)}var sS=m0(),aS=m0,lS=(...e)=>{const t=f0(...e),n=Object.assign((...r)=>{const o=t(...r),i=(s,...a)=>o(Yt(s)?c0(s):s,...a);return Object.assign(i,o),i},{withTypes:()=>n});return n},uS=lS(Uc),cS=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ms:Ms.apply(null,arguments)},dS=e=>e&&typeof e.match=="function";function Bt(e,t){function n(...r){if(t){let o=t(...r);if(!o)throw new Error(Ye(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>o0(r)&&r.type===e,n}function fS(e){return o0(e)&&Object.keys(e).every(pS)}function pS(e){return["type","payload","error","meta"].indexOf(e)>-1}var h0=class so extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,so.prototype)}static get[Symbol.species](){return so}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new so(...t[0].concat(this)):new so(...t.concat(this))}};function rp(e){return Qt(e)?zc(e,()=>{}):e}function op(e,t,n){if(e.has(t)){let o=e.get(t);return n.update&&(o=n.update(o,t,e),e.set(t,o)),o}if(!n.insert)throw new Error(Ye(10));const r=n.insert(t,e);return e.set(t,r),r}function mS(e){return typeof e=="boolean"}var hS=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:o=!0,actionCreatorCheck:i=!0}=t??{};let s=new h0;return n&&(mS(n)?s.push(sS):s.push(aS(n.extraArgument))),s},gS="RTK_autoBatch",g0=e=>t=>{setTimeout(t,e)},yS=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:g0(10),vS=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let o=!0,i=!1,s=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?yS:e.type==="callback"?e.queueNotification:g0(e.timeout),u=()=>{s=!1,i&&(i=!1,a.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const c=()=>o&&d(),f=r.subscribe(c);return a.add(d),()=>{f(),a.delete(d)}},dispatch(d){var c;try{return o=!((c=d==null?void 0:d.meta)!=null&&c[gS]),i=!o,i&&(s||(s=!0,l(u))),r.dispatch(d)}finally{o=!0}}})},xS=e=>function(n){const{autoBatch:r=!0}=n??{};let o=new h0(e);return r&&o.push(vS(typeof r=="object"?r:void 0)),o},wS=!0;function kS(e){const t=hS(),{reducer:n=void 0,middleware:r,devTools:o=!0,preloadedState:i=void 0,enhancers:s=void 0}=e||{};let a;if(typeof n=="function")a=n;else if(Vc(n))a=Ik(n);else throw new Error(Ye(1));let l;typeof r=="function"?l=r(t):l=t();let u=Ms;o&&(u=cS({trace:!wS,...typeof o=="object"&&o}));const d=zk(...l),c=xS(d);let f=typeof s=="function"?s(c):c();const y=u(...f);return r0(a,i,y)}function y0(e){const t={},n=[];let r;const o={addCase(i,s){const a=typeof i=="string"?i:i.type;if(!a)throw new Error(Ye(28));if(a in t)throw new Error(Ye(29));return t[a]=s,o},addMatcher(i,s){return n.push({matcher:i,reducer:s}),o},addDefaultCase(i){return r=i,o}};return e(o),[t,n,r]}function SS(e){return typeof e=="function"}function bS(e,t){let[n,r,o]=y0(t),i;if(SS(e))i=()=>rp(e());else{const a=rp(e);i=()=>a}function s(a=i(),l){let u=[n[l.type],...r.filter(({matcher:d})=>d(l)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[o]),u.reduce((d,c)=>{if(c)if(Yt(d)){const y=c(d,l);return y===void 0?d:y}else{if(Qt(d))return zc(d,f=>c(f,l));{const f=c(d,l);if(f===void 0){if(d===null)return d;throw new Error(Ye(9))}return f}}return d},a)}return s.getInitialState=i,s}var LS="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",v0=(e=21)=>{let t="",n=e;for(;n--;)t+=LS[Math.random()*64|0];return t},ES=(e,t)=>dS(e)?e.match(t):e(t);function MS(...e){return t=>e.some(n=>ES(n,t))}var CS=["name","message","stack","code"],Za=class{constructor(e,t){Sa(this,"_type");this.payload=e,this.meta=t}},ip=class{constructor(e,t){Sa(this,"_type");this.payload=e,this.meta=t}},PS=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of CS)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},x0=(()=>{function e(t,n,r){const o=Bt(t+"/fulfilled",(l,u,d,c)=>({payload:l,meta:{...c||{},arg:d,requestId:u,requestStatus:"fulfilled"}})),i=Bt(t+"/pending",(l,u,d)=>({payload:void 0,meta:{...d||{},arg:u,requestId:l,requestStatus:"pending"}})),s=Bt(t+"/rejected",(l,u,d,c,f)=>({payload:c,error:(r&&r.serializeError||PS)(l||"Rejected"),meta:{...f||{},arg:d,requestId:u,rejectedWithValue:!!c,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,d,c)=>{const f=r!=null&&r.idGenerator?r.idGenerator(l):v0(),y=new AbortController;let m,v;function w(p){v=p,y.abort()}const h=async function(){var S,L;let p;try{let E=(S=r==null?void 0:r.condition)==null?void 0:S.call(r,l,{getState:d,extra:c});if(DS(E)&&(E=await E),E===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const P=new Promise((b,_)=>{m=()=>{_({name:"AbortError",message:v||"Aborted"})},y.signal.addEventListener("abort",m)});u(i(f,l,(L=r==null?void 0:r.getPendingMeta)==null?void 0:L.call(r,{requestId:f,arg:l},{getState:d,extra:c}))),p=await Promise.race([P,Promise.resolve(n(l,{dispatch:u,getState:d,extra:c,requestId:f,signal:y.signal,abort:w,rejectWithValue:(b,_)=>new Za(b,_),fulfillWithValue:(b,_)=>new ip(b,_)})).then(b=>{if(b instanceof Za)throw b;return b instanceof ip?o(b.payload,f,l,b.meta):o(b,f,l)})])}catch(E){p=E instanceof Za?s(null,f,l,E.payload,E.meta):s(E,f,l)}finally{m&&y.signal.removeEventListener("abort",m)}return r&&!r.dispatchConditionRejection&&s.match(p)&&p.meta.condition||u(p),p}();return Object.assign(h,{abort:w,requestId:f,arg:l,unwrap(){return h.then(TS)}})}}return Object.assign(a,{pending:i,rejected:s,fulfilled:o,settled:MS(s,o),typePrefix:t})}return e.withTypes=()=>e,e})();function TS(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function DS(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var RS=Symbol.for("rtk-slice-createasyncthunk");function jS(e,t){return`${e}/${t}`}function NS({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[RS];return function(o){const{name:i,reducerPath:s=i}=o;if(!i)throw new Error(Ye(11));typeof process<"u";const a=(typeof o.reducers=="function"?o.reducers(AS()):o.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(g,S){const L=typeof g=="string"?g:g.type;if(!L)throw new Error(Ye(12));if(L in u.sliceCaseReducersByType)throw new Error(Ye(13));return u.sliceCaseReducersByType[L]=S,d},addMatcher(g,S){return u.sliceMatchers.push({matcher:g,reducer:S}),d},exposeAction(g,S){return u.actionCreators[g]=S,d},exposeCaseReducer(g,S){return u.sliceCaseReducersByName[g]=S,d}};l.forEach(g=>{const S=a[g],L={reducerName:g,type:jS(i,g),createNotation:typeof o.reducers=="function"};FS(S)?BS(L,S,d,t):OS(L,S,d)});function c(){const[g={},S=[],L=void 0]=typeof o.extraReducers=="function"?y0(o.extraReducers):[o.extraReducers],E={...g,...u.sliceCaseReducersByType};return bS(o.initialState,P=>{for(let b in E)P.addCase(b,E[b]);for(let b of u.sliceMatchers)P.addMatcher(b.matcher,b.reducer);for(let b of S)P.addMatcher(b.matcher,b.reducer);L&&P.addDefaultCase(L)})}const f=g=>g,y=new Map;let m;function v(g,S){return m||(m=c()),m(g,S)}function w(){return m||(m=c()),m.getInitialState()}function h(g,S=!1){function L(P){let b=P[g];return typeof b>"u"&&S&&(b=w()),b}function E(P=f){const b=op(y,S,{insert:()=>new WeakMap});return op(b,P,{insert:()=>{const _={};for(const[N,R]of Object.entries(o.selectors??{}))_[N]=_S(R,P,w,S);return _}})}return{reducerPath:g,getSelectors:E,get selectors(){return E(L)},selectSlice:L}}const p={name:i,reducer:v,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:w,...h(s),injectInto(g,{reducerPath:S,...L}={}){const E=S??s;return g.inject({reducerPath:E,reducer:v},L),{...p,...h(E,!0)}}};return p}}function _S(e,t,n,r){function o(i,...s){let a=t(i);return typeof a>"u"&&r&&(a=n()),e(a,...s)}return o.unwrapped=e,o}var ua=NS();function AS(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function OS({type:e,reducerName:t,createNotation:n},r,o){let i,s;if("reducer"in r){if(n&&!VS(r))throw new Error(Ye(17));i=r.reducer,s=r.prepare}else i=r;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,s?Bt(e,s):Bt(e))}function FS(e){return e._reducerDefinitionType==="asyncThunk"}function VS(e){return e._reducerDefinitionType==="reducerWithPrepare"}function BS({type:e,reducerName:t},n,r,o){if(!o)throw new Error(Ye(18));const{payloadCreator:i,fulfilled:s,pending:a,rejected:l,settled:u,options:d}=n,c=o(e,i,d);r.exposeAction(t,c),s&&r.addCase(c.fulfilled,s),a&&r.addCase(c.pending,a),l&&r.addCase(c.rejected,l),u&&r.addMatcher(c.settled,u),r.exposeCaseReducer(t,{fulfilled:s||Di,pending:a||Di,rejected:l||Di,settled:u||Di})}function Di(){}function IS(){return{ids:[],entities:{}}}function zS(e){function t(n={},r){const o=Object.assign(IS(),n);return r?e.setAll(o,r):o}return{getInitialState:t}}function US(){function e(t,n={}){const{createSelector:r=uS}=n,o=c=>c.ids,i=c=>c.entities,s=r(o,i,(c,f)=>c.map(y=>f[y])),a=(c,f)=>f,l=(c,f)=>c[f],u=r(o,c=>c.length);if(!t)return{selectIds:o,selectEntities:i,selectAll:s,selectTotal:u,selectById:r(i,a,l)};const d=r(t,i);return{selectIds:r(t,o),selectEntities:d,selectAll:r(t,s),selectTotal:r(t,u),selectById:r(d,a,l)}}return{getSelectors:e}}var $S=Yt;function WS(e){const t=le((n,r)=>e(r));return function(r){return t(r,void 0)}}function le(e){return function(n,r){function o(s){return fS(s)}const i=s=>{o(r)?e(r.payload,s):e(r,s)};return $S(n)?(i(n),n):zc(n,i)}}function vr(e,t){return t(e)}function Gn(e){return Array.isArray(e)||(e=Object.values(e)),e}function w0(e,t,n){e=Gn(e);const r=[],o=[];for(const i of e){const s=vr(i,t);s in n.entities?o.push({id:s,changes:i}):r.push(i)}return[r,o]}function k0(e){function t(m,v){const w=vr(m,e);w in v.entities||(v.ids.push(w),v.entities[w]=m)}function n(m,v){m=Gn(m);for(const w of m)t(w,v)}function r(m,v){const w=vr(m,e);w in v.entities||v.ids.push(w),v.entities[w]=m}function o(m,v){m=Gn(m);for(const w of m)r(w,v)}function i(m,v){m=Gn(m),v.ids=[],v.entities={},n(m,v)}function s(m,v){return a([m],v)}function a(m,v){let w=!1;m.forEach(h=>{h in v.entities&&(delete v.entities[h],w=!0)}),w&&(v.ids=v.ids.filter(h=>h in v.entities))}function l(m){Object.assign(m,{ids:[],entities:{}})}function u(m,v,w){const h=w.entities[v.id];if(h===void 0)return!1;const p=Object.assign({},h,v.changes),g=vr(p,e),S=g!==v.id;return S&&(m[v.id]=g,delete w.entities[v.id]),w.entities[g]=p,S}function d(m,v){return c([m],v)}function c(m,v){const w={},h={};m.forEach(g=>{g.id in v.entities&&(h[g.id]={id:g.id,changes:{...h[g.id]?h[g.id].changes:null,...g.changes}})}),m=Object.values(h),m.length>0&&m.filter(S=>u(w,S,v)).length>0&&(v.ids=Object.values(v.entities).map(S=>vr(S,e)))}function f(m,v){return y([m],v)}function y(m,v){const[w,h]=w0(m,e,v);c(h,v),n(w,v)}return{removeAll:WS(l),addOne:le(t),addMany:le(n),setOne:le(r),setMany:le(o),setAll:le(i),updateOne:le(d),updateMany:le(c),upsertOne:le(f),upsertMany:le(y),removeOne:le(s),removeMany:le(a)}}function HS(e,t){const{removeOne:n,removeMany:r,removeAll:o}=k0(e);function i(h,p){return s([h],p)}function s(h,p){h=Gn(h);const g=h.filter(S=>!(vr(S,e)in p.entities));g.length!==0&&v(g,p)}function a(h,p){return l([h],p)}function l(h,p){h=Gn(h),h.length!==0&&v(h,p)}function u(h,p){h=Gn(h),p.entities={},p.ids=[],s(h,p)}function d(h,p){return c([h],p)}function c(h,p){let g=!1;for(let S of h){const L=p.entities[S.id];if(!L)continue;g=!0,Object.assign(L,S.changes);const E=e(L);S.id!==E&&(delete p.entities[S.id],p.entities[E]=L)}g&&w(p)}function f(h,p){return y([h],p)}function y(h,p){const[g,S]=w0(h,e,p);c(S,p),s(g,p)}function m(h,p){if(h.length!==p.length)return!1;for(let g=0;g<h.length&&g<p.length;g++)if(h[g]!==p[g])return!1;return!0}function v(h,p){h.forEach(g=>{p.entities[e(g)]=g}),w(p)}function w(h){const p=Object.values(h.entities);p.sort(t);const g=p.map(e),{ids:S}=h;m(S,g)||(h.ids=g)}return{removeOne:n,removeMany:r,removeAll:o,addOne:le(i),updateOne:le(d),upsertOne:le(f),setOne:le(a),setMany:le(l),setAll:le(u),addMany:le(s),updateMany:le(c),upsertMany:le(y)}}function S0(e={}){const{selectId:t,sortComparer:n}={sortComparer:!1,selectId:s=>s.id,...e},r=n?HS(t,n):k0(t),o=zS(r),i=US();return{selectId:t,sortComparer:n,...o,...i,...r}}var KS=(e,t)=>{if(typeof e!="function")throw new Error(Ye(32))},$c="listenerMiddleware",GS=e=>{let{type:t,actionCreator:n,matcher:r,predicate:o,effect:i}=e;if(t)o=Bt(t).match;else if(n)t=n.type,o=n.match;else if(r)o=r;else if(!o)throw new Error(Ye(21));return KS(i),{predicate:o,type:t,effect:i}},YS=Object.assign(e=>{const{type:t,predicate:n,effect:r}=GS(e);return{id:v0(),effect:r,type:t,predicate:n,pending:new Set,unsubscribe:()=>{throw new Error(Ye(22))}}},{withTypes:()=>YS}),QS=Object.assign(Bt(`${$c}/add`),{withTypes:()=>QS});Bt(`${$c}/removeAll`);var qS=Object.assign(Bt(`${$c}/remove`),{withTypes:()=>qS});function Ye(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}function b0(e,t){return function(){return e.apply(t,arguments)}}const{toString:XS}=Object.prototype,{getPrototypeOf:Wc}=Object,ca=(e=>t=>{const n=XS.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Rt=e=>(e=e.toLowerCase(),t=>ca(t)===e),da=e=>t=>typeof t===e,{isArray:Wr}=Array,Ko=da("undefined");function JS(e){return e!==null&&!Ko(e)&&e.constructor!==null&&!Ko(e.constructor)&&pt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const L0=Rt("ArrayBuffer");function ZS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&L0(e.buffer),t}const eb=da("string"),pt=da("function"),E0=da("number"),fa=e=>e!==null&&typeof e=="object",tb=e=>e===!0||e===!1,Ki=e=>{if(ca(e)!=="object")return!1;const t=Wc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},nb=Rt("Date"),rb=Rt("File"),ob=Rt("Blob"),ib=Rt("FileList"),sb=e=>fa(e)&&pt(e.pipe),ab=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||pt(e.append)&&((t=ca(e))==="formdata"||t==="object"&&pt(e.toString)&&e.toString()==="[object FormData]"))},lb=Rt("URLSearchParams"),ub=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ri(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Wr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(r=0;r<s;r++)a=i[r],t.call(null,e[a],a,e)}}function M0(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const C0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,P0=e=>!Ko(e)&&e!==C0;function bu(){const{caseless:e}=P0(this)&&this||{},t={},n=(r,o)=>{const i=e&&M0(t,o)||o;Ki(t[i])&&Ki(r)?t[i]=bu(t[i],r):Ki(r)?t[i]=bu({},r):Wr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&ri(arguments[r],n);return t}const cb=(e,t,n,{allOwnKeys:r}={})=>(ri(t,(o,i)=>{n&&pt(o)?e[i]=b0(o,n):e[i]=o},{allOwnKeys:r}),e),db=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),fb=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},pb=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Wc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},mb=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},hb=e=>{if(!e)return null;if(Wr(e))return e;let t=e.length;if(!E0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},gb=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Wc(Uint8Array)),yb=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},vb=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},xb=Rt("HTMLFormElement"),wb=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),sp=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),kb=Rt("RegExp"),T0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ri(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},Sb=e=>{T0(e,(t,n)=>{if(pt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(pt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},bb=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Wr(e)?r(e):r(String(e).split(t)),n},Lb=()=>{},Eb=(e,t)=>(e=+e,Number.isFinite(e)?e:t),el="abcdefghijklmnopqrstuvwxyz",ap="0123456789",D0={DIGIT:ap,ALPHA:el,ALPHA_DIGIT:el+el.toUpperCase()+ap},Mb=(e=16,t=D0.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Cb(e){return!!(e&&pt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Pb=e=>{const t=new Array(10),n=(r,o)=>{if(fa(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Wr(r)?[]:{};return ri(r,(s,a)=>{const l=n(s,o+1);!Ko(l)&&(i[a]=l)}),t[o]=void 0,i}}return r};return n(e,0)},Tb=Rt("AsyncFunction"),Db=e=>e&&(fa(e)||pt(e))&&pt(e.then)&&pt(e.catch),M={isArray:Wr,isArrayBuffer:L0,isBuffer:JS,isFormData:ab,isArrayBufferView:ZS,isString:eb,isNumber:E0,isBoolean:tb,isObject:fa,isPlainObject:Ki,isUndefined:Ko,isDate:nb,isFile:rb,isBlob:ob,isRegExp:kb,isFunction:pt,isStream:sb,isURLSearchParams:lb,isTypedArray:gb,isFileList:ib,forEach:ri,merge:bu,extend:cb,trim:ub,stripBOM:db,inherits:fb,toFlatObject:pb,kindOf:ca,kindOfTest:Rt,endsWith:mb,toArray:hb,forEachEntry:yb,matchAll:vb,isHTMLForm:xb,hasOwnProperty:sp,hasOwnProp:sp,reduceDescriptors:T0,freezeMethods:Sb,toObjectSet:bb,toCamelCase:wb,noop:Lb,toFiniteNumber:Eb,findKey:M0,global:C0,isContextDefined:P0,ALPHABET:D0,generateString:Mb,isSpecCompliantForm:Cb,toJSONObject:Pb,isAsyncFn:Tb,isThenable:Db};function U(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}M.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:M.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const R0=U.prototype,j0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{j0[e]={value:e}});Object.defineProperties(U,j0);Object.defineProperty(R0,"isAxiosError",{value:!0});U.from=(e,t,n,r,o,i)=>{const s=Object.create(R0);return M.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),U.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const Rb=null;function Lu(e){return M.isPlainObject(e)||M.isArray(e)}function N0(e){return M.endsWith(e,"[]")?e.slice(0,-2):e}function lp(e,t,n){return e?e.concat(t).map(function(o,i){return o=N0(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function jb(e){return M.isArray(e)&&!e.some(Lu)}const Nb=M.toFlatObject(M,{},null,function(t){return/^is[A-Z]/.test(t)});function pa(e,t,n){if(!M.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=M.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,w){return!M.isUndefined(w[v])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&M.isSpecCompliantForm(t);if(!M.isFunction(o))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(M.isDate(m))return m.toISOString();if(!l&&M.isBlob(m))throw new U("Blob is not supported. Use a Buffer instead.");return M.isArrayBuffer(m)||M.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function d(m,v,w){let h=m;if(m&&!w&&typeof m=="object"){if(M.endsWith(v,"{}"))v=r?v:v.slice(0,-2),m=JSON.stringify(m);else if(M.isArray(m)&&jb(m)||(M.isFileList(m)||M.endsWith(v,"[]"))&&(h=M.toArray(m)))return v=N0(v),h.forEach(function(g,S){!(M.isUndefined(g)||g===null)&&t.append(s===!0?lp([v],S,i):s===null?v:v+"[]",u(g))}),!1}return Lu(m)?!0:(t.append(lp(w,v,i),u(m)),!1)}const c=[],f=Object.assign(Nb,{defaultVisitor:d,convertValue:u,isVisitable:Lu});function y(m,v){if(!M.isUndefined(m)){if(c.indexOf(m)!==-1)throw Error("Circular reference detected in "+v.join("."));c.push(m),M.forEach(m,function(h,p){(!(M.isUndefined(h)||h===null)&&o.call(t,h,M.isString(p)?p.trim():p,v,f))===!0&&y(h,v?v.concat(p):[p])}),c.pop()}}if(!M.isObject(e))throw new TypeError("data must be an object");return y(e),t}function up(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Hc(e,t){this._pairs=[],e&&pa(e,this,t)}const _0=Hc.prototype;_0.append=function(t,n){this._pairs.push([t,n])};_0.toString=function(t){const n=t?function(r){return t.call(this,r,up)}:up;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function _b(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function A0(e,t,n){if(!t)return e;const r=n&&n.encode||_b,o=n&&n.serialize;let i;if(o?i=o(t,n):i=M.isURLSearchParams(t)?t.toString():new Hc(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class cp{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){M.forEach(this.handlers,function(r){r!==null&&t(r)})}}const O0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ab=typeof URLSearchParams<"u"?URLSearchParams:Hc,Ob=typeof FormData<"u"?FormData:null,Fb=typeof Blob<"u"?Blob:null,Vb={isBrowser:!0,classes:{URLSearchParams:Ab,FormData:Ob,Blob:Fb},protocols:["http","https","file","blob","url","data"]},F0=typeof window<"u"&&typeof document<"u",Bb=(e=>F0&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Ib=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",zb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:F0,hasStandardBrowserEnv:Bb,hasStandardBrowserWebWorkerEnv:Ib},Symbol.toStringTag,{value:"Module"})),Ct={...zb,...Vb};function Ub(e,t){return pa(e,new Ct.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Ct.isNode&&M.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function $b(e){return M.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Wb(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function V0(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=i>=n.length;return s=!s&&M.isArray(o)?o.length:s,l?(M.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):((!o[s]||!M.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&M.isArray(o[s])&&(o[s]=Wb(o[s])),!a)}if(M.isFormData(e)&&M.isFunction(e.entries)){const n={};return M.forEachEntry(e,(r,o)=>{t($b(r),o,n,0)}),n}return null}function Hb(e,t,n){if(M.isString(e))try{return(t||JSON.parse)(e),M.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Kc={transitional:O0,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=M.isObject(t);if(i&&M.isHTMLForm(t)&&(t=new FormData(t)),M.isFormData(t))return o?JSON.stringify(V0(t)):t;if(M.isArrayBuffer(t)||M.isBuffer(t)||M.isStream(t)||M.isFile(t)||M.isBlob(t))return t;if(M.isArrayBufferView(t))return t.buffer;if(M.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ub(t,this.formSerializer).toString();if((a=M.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return pa(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Hb(t)):t}],transformResponse:[function(t){const n=this.transitional||Kc.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&M.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?U.from(a,U.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ct.classes.FormData,Blob:Ct.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};M.forEach(["delete","get","head","post","put","patch"],e=>{Kc.headers[e]={}});const Gc=Kc,Kb=M.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Gb=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&Kb[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},dp=Symbol("internals");function eo(e){return e&&String(e).trim().toLowerCase()}function Gi(e){return e===!1||e==null?e:M.isArray(e)?e.map(Gi):String(e)}function Yb(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Qb=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function tl(e,t,n,r,o){if(M.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!M.isString(t)){if(M.isString(r))return t.indexOf(r)!==-1;if(M.isRegExp(r))return r.test(t)}}function qb(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Xb(e,t){const n=M.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class ma{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,l,u){const d=eo(l);if(!d)throw new Error("header name must be a non-empty string");const c=M.findKey(o,d);(!c||o[c]===void 0||u===!0||u===void 0&&o[c]!==!1)&&(o[c||l]=Gi(a))}const s=(a,l)=>M.forEach(a,(u,d)=>i(u,d,l));return M.isPlainObject(t)||t instanceof this.constructor?s(t,n):M.isString(t)&&(t=t.trim())&&!Qb(t)?s(Gb(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=eo(t),t){const r=M.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Yb(o);if(M.isFunction(n))return n.call(this,o,r);if(M.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=eo(t),t){const r=M.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||tl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=eo(s),s){const a=M.findKey(r,s);a&&(!n||tl(r,r[a],a,n))&&(delete r[a],o=!0)}}return M.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||tl(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return M.forEach(this,(o,i)=>{const s=M.findKey(r,i);if(s){n[s]=Gi(o),delete n[i];return}const a=t?qb(i):String(i).trim();a!==i&&delete n[i],n[a]=Gi(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return M.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&M.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[dp]=this[dp]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=eo(s);r[a]||(Xb(o,s),r[a]=!0)}return M.isArray(t)?t.forEach(i):i(t),this}}ma.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);M.reduceDescriptors(ma.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});M.freezeMethods(ma);const It=ma;function nl(e,t){const n=this||Gc,r=t||n,o=It.from(r.headers);let i=r.data;return M.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function B0(e){return!!(e&&e.__CANCEL__)}function oi(e,t,n){U.call(this,e??"canceled",U.ERR_CANCELED,t,n),this.name="CanceledError"}M.inherits(oi,U,{__CANCEL__:!0});function Jb(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new U("Request failed with status code "+n.status,[U.ERR_BAD_REQUEST,U.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Zb=Ct.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];M.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),M.isString(r)&&s.push("path="+r),M.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function e2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function t2(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function I0(e,t){return e&&!e2(t)?t2(e,t):t}const n2=Ct.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const a=M.isString(s)?o(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function r2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function o2(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),d=r[i];s||(s=u),n[o]=l,r[o]=u;let c=i,f=0;for(;c!==o;)f+=n[c++],c=c%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const y=d&&u-d;return y?Math.round(f*1e3/y):void 0}}function fp(e,t){let n=0;const r=o2(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,l=r(a),u=i<=s;n=i;const d={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&u?(s-i)/l:void 0,event:o};d[t?"download":"upload"]=!0,e(d)}}const i2=typeof XMLHttpRequest<"u",s2=i2&&function(e){return new Promise(function(n,r){let o=e.data;const i=It.from(e.headers).normalize();let{responseType:s,withXSRFToken:a}=e,l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let d;if(M.isFormData(o)){if(Ct.hasStandardBrowserEnv||Ct.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((d=i.getContentType())!==!1){const[v,...w]=d?d.split(";").map(h=>h.trim()).filter(Boolean):[];i.setContentType([v||"multipart/form-data",...w].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(v+":"+w))}const f=I0(e.baseURL,e.url);c.open(e.method.toUpperCase(),A0(f,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function y(){if(!c)return;const v=It.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:v,config:e,request:c};Jb(function(g){n(g),u()},function(g){r(g),u()},h),c=null}if("onloadend"in c?c.onloadend=y:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(y)},c.onabort=function(){c&&(r(new U("Request aborted",U.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new U("Network Error",U.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||O0;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new U(w,h.clarifyTimeoutError?U.ETIMEDOUT:U.ECONNABORTED,e,c)),c=null},Ct.hasStandardBrowserEnv&&(a&&M.isFunction(a)&&(a=a(e)),a||a!==!1&&n2(f))){const v=e.xsrfHeaderName&&e.xsrfCookieName&&Zb.read(e.xsrfCookieName);v&&i.set(e.xsrfHeaderName,v)}o===void 0&&i.setContentType(null),"setRequestHeader"in c&&M.forEach(i.toJSON(),function(w,h){c.setRequestHeader(h,w)}),M.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&s!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",fp(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",fp(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=v=>{c&&(r(!v||v.type?new oi(null,e,c):v),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const m=r2(f);if(m&&Ct.protocols.indexOf(m)===-1){r(new U("Unsupported protocol "+m+":",U.ERR_BAD_REQUEST,e));return}c.send(o||null)})},Eu={http:Rb,xhr:s2};M.forEach(Eu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const pp=e=>`- ${e}`,a2=e=>M.isFunction(e)||e===null||e===!1,z0={getAdapter:e=>{e=M.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!a2(n)&&(r=Eu[(s=String(n)).toLowerCase()],r===void 0))throw new U(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(pp).join(`
`):" "+pp(i[0]):"as no adapter specified";throw new U("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Eu};function rl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new oi(null,e)}function mp(e){return rl(e),e.headers=It.from(e.headers),e.data=nl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),z0.getAdapter(e.adapter||Gc.adapter)(e).then(function(r){return rl(e),r.data=nl.call(e,e.transformResponse,r),r.headers=It.from(r.headers),r},function(r){return B0(r)||(rl(e),r&&r.response&&(r.response.data=nl.call(e,e.transformResponse,r.response),r.response.headers=It.from(r.response.headers))),Promise.reject(r)})}const hp=e=>e instanceof It?{...e}:e;function Vr(e,t){t=t||{};const n={};function r(u,d,c){return M.isPlainObject(u)&&M.isPlainObject(d)?M.merge.call({caseless:c},u,d):M.isPlainObject(d)?M.merge({},d):M.isArray(d)?d.slice():d}function o(u,d,c){if(M.isUndefined(d)){if(!M.isUndefined(u))return r(void 0,u,c)}else return r(u,d,c)}function i(u,d){if(!M.isUndefined(d))return r(void 0,d)}function s(u,d){if(M.isUndefined(d)){if(!M.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function a(u,d,c){if(c in t)return r(u,d);if(c in e)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,d)=>o(hp(u),hp(d),!0)};return M.forEach(Object.keys(Object.assign({},e,t)),function(d){const c=l[d]||o,f=c(e[d],t[d],d);M.isUndefined(f)&&c!==a||(n[d]=f)}),n}const U0="1.6.8",Yc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Yc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const gp={};Yc.transitional=function(t,n,r){function o(i,s){return"[Axios v"+U0+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(t===!1)throw new U(o(s," has been removed"+(n?" in "+n:"")),U.ERR_DEPRECATED);return n&&!gp[s]&&(gp[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,a):!0}};function l2(e,t,n){if(typeof e!="object")throw new U("options must be an object",U.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const a=e[i],l=a===void 0||s(a,i,e);if(l!==!0)throw new U("option "+i+" must be "+l,U.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new U("Unknown option "+i,U.ERR_BAD_OPTION)}}const Mu={assertOptions:l2,validators:Yc},tn=Mu.validators;class Ds{constructor(t){this.defaults=t,this.interceptors={request:new cp,response:new cp}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Vr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&Mu.assertOptions(r,{silentJSONParsing:tn.transitional(tn.boolean),forcedJSONParsing:tn.transitional(tn.boolean),clarifyTimeoutError:tn.transitional(tn.boolean)},!1),o!=null&&(M.isFunction(o)?n.paramsSerializer={serialize:o}:Mu.assertOptions(o,{encode:tn.function,serialize:tn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&M.merge(i.common,i[n.method]);i&&M.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),n.headers=It.concat(s,i);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let d,c=0,f;if(!l){const m=[mp.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,u),f=m.length,d=Promise.resolve(n);c<f;)d=d.then(m[c++],m[c++]);return d}f=a.length;let y=n;for(c=0;c<f;){const m=a[c++],v=a[c++];try{y=m(y)}catch(w){v.call(this,w);break}}try{d=mp.call(this,y)}catch(m){return Promise.reject(m)}for(c=0,f=u.length;c<f;)d=d.then(u[c++],u[c++]);return d}getUri(t){t=Vr(this.defaults,t);const n=I0(t.baseURL,t.url);return A0(n,t.params,t.paramsSerializer)}}M.forEach(["delete","get","head","options"],function(t){Ds.prototype[t]=function(n,r){return this.request(Vr(r||{},{method:t,url:n,data:(r||{}).data}))}});M.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,a){return this.request(Vr(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Ds.prototype[t]=n(),Ds.prototype[t+"Form"]=n(!0)});const Yi=Ds;class Qc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,a){r.reason||(r.reason=new oi(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Qc(function(o){t=o}),cancel:t}}}const u2=Qc;function c2(e){return function(n){return e.apply(null,n)}}function d2(e){return M.isObject(e)&&e.isAxiosError===!0}const Cu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Cu).forEach(([e,t])=>{Cu[t]=e});const f2=Cu;function $0(e){const t=new Yi(e),n=b0(Yi.prototype.request,t);return M.extend(n,Yi.prototype,t,{allOwnKeys:!0}),M.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return $0(Vr(e,o))},n}const pe=$0(Gc);pe.Axios=Yi;pe.CanceledError=oi;pe.CancelToken=u2;pe.isCancel=B0;pe.VERSION=U0;pe.toFormData=pa;pe.AxiosError=U;pe.Cancel=pe.CanceledError;pe.all=function(t){return Promise.all(t)};pe.spread=c2;pe.isAxiosError=d2;pe.mergeConfig=Vr;pe.AxiosHeaders=It;pe.formToJSON=e=>V0(M.isHTMLForm(e)?new FormData(e):e);pe.getAdapter=z0.getAdapter;pe.HttpStatusCode=f2;pe.default=pe;const Rs=pe,qc=S0({selectId:e=>e.title,sortComparer:(e,t)=>e.id-t.id}),p2=qc.getInitialState({status:"idle",error:null,selectSkill:"HTML"}),wo=x0("skills/fetchSkills",async(e,{rejectWithValue:t,signal:n})=>{try{const r=Rs.CancelToken.source();return n.addEventListener("abort",()=>{r.cancel()}),(await Rs.get("https://253olivares.github.io/Newportfolio-ReactViteBuild/data/technicalSkill.json",{cancelToken:r.token}).catch(()=>{throw new Error("Api had issues")})).data.Skills}catch(r){return console.log(`fetchSkills:${r}`),t(r)}}),W0=ua({name:"skills",initialState:p2,reducers:{changeSkill(e,t){e.selectSkill=t.payload}},extraReducers(e){e.addCase(wo.pending,t=>{t.status="loading"}).addCase(wo.fulfilled,(t,n)=>{t.status="succeeded";const r=[];Object.entries(n.payload).map(([o,i])=>{r.push(i)}),qc.upsertMany(t,r)}).addCase(wo.rejected,(t,n)=>{t.status="failed",n.error.message&&(t.error=n.error.message)})}}),{selectAll:zC,selectById:UC,selectIds:$C,selectEntities:m2}=qc.getSelectors(e=>e.skills),h2=e=>e.skills.status,g2=e=>e.skills.error,H0=e=>e.skills.selectSkill,{changeSkill:y2}=W0.actions,v2=W0.reducer,Xc=S0({selectId:e=>e.id,sortComparer:(e,t)=>e.id-t.id}),x2=Xc.getInitialState({status:"idle",error:null,filters:{searchTerm:"",tabSelect:"Programming",liveDemos:!1,selectedFilter:[]},openFilter:!1}),Qi=x0("portfolio/fetchProjects",async(e,{rejectWithValue:t,signal:n})=>{try{const r=Rs.CancelToken.source();return n.addEventListener("abort",()=>{r.cancel()}),(await Rs.get("https://253olivares.github.io/Newportfolio-ReactViteBuild/data/projectsList.json",{cancelToken:r.token}).catch(()=>{throw new Error("Api had issues")})).data.Projects}catch(r){return console.log(`fetchSkills:${r}`),t(r)}}),K0=ua({name:"project",initialState:x2,reducers:{setSearchTerm(e,t){e.filters.searchTerm=t.payload},setTabSelect(e,t){e.filters.tabSelect=t.payload},changeLiveDemo(e){const t=e.filters.liveDemos;e.filters.liveDemos=!t},removeFromFilter(e,t){const n=e.filters.selectedFilter;e.filters.selectedFilter=n.filter(r=>r!==t.payload)},addToFilter(e,t){const n=e.filters.selectedFilter;e.filters.selectedFilter=[...n,t.payload]},openFilter(e){e.openFilter=!0},closeFilter(e){e.openFilter=!1},resetFilter(e){e.filters={searchTerm:"",tabSelect:e.filters.tabSelect,liveDemos:!1,selectedFilter:[]}}},extraReducers(e){e.addCase(Qi.pending,t=>{t.status="loading"}).addCase(Qi.fulfilled,(t,n)=>{t.status="succeeded",Xc.upsertMany(t,n.payload)}).addCase(Qi.rejected,(t,n)=>{t.status="failed",console.log(n),n.error.message&&(t.error=n.error.message)})}}),{selectAll:w2}=Xc.getSelectors(e=>e.project),k2=e=>e.project.status,S2=e=>e.project.error,ii=e=>e.project.filters.tabSelect,b2=e=>e.project.filters.liveDemos,L2=e=>e.project.filters.selectedFilter,E2=e=>e.project.filters,M2=e=>e.project.openFilter,C2=p0([w2,E2],(e,t)=>{const{searchTerm:n,tabSelect:r,liveDemos:o,selectedFilter:i}=t;let s,a=n.trim().toLowerCase(),l=[];s=e.filter(c=>n===""||c.projectName.trim().toLowerCase().includes(a)?!0:(l.push(c),!1));let u=[];for(let c=0;c<l.length;c++){let f=l[c].tags;for(let y=0;y<f.length;y++)if(f[y].trim().toLowerCase().includes(a)){s.push(l[c]);break}else u.push(l[c])}for(let c=0;c<u.length;c++)u[c].date.trim().toLowerCase().includes(a)&&s.push(u[c]);s=s.filter(c=>c.section===r),o===!0&&(s=s.filter(c=>c.live===!0));let d=[];if(i.length>=1&&r==="Programming"){console.log("running code for tag filter");for(let c=0;c<s.length;c++)for(let f=0;f<s[c].tags.length;f++){let y=!1;for(let m=0;m<i.length;m++)if(s[c].tags[f]===i[m]){y=!0,d.push(s[c]);break}if(y)break}}else d=s;return d=d.sort((c,f)=>f.id-c.id),d}),{setSearchTerm:ol,setTabSelect:P2,changeLiveDemo:T2,removeFromFilter:D2,addToFilter:R2,openFilter:j2,closeFilter:yp,resetFilter:N2}=K0.actions,_2=K0.reducer,A2={scrollState:"Home",currentSection:"Home",windowWidth:window.innerWidth},G0=ua({name:"sidebar",initialState:A2,reducers:{setScrollState(e,t){e.scrollState=t.payload},setCurrentSelection(e,t){e.currentSection=t.payload},setWindowWidth(e){e.windowWidth=window.innerWidth}}}),O2=e=>e.sidebar.scrollState,F2=e=>e.sidebar.currentSection,V2=e=>e.sidebar.windowWidth,{setScrollState:ao,setCurrentSelection:xr,setWindowWidth:B2}=G0.actions,I2=G0.reducer,z2={email:"",message:"",formError:"none"},Y0=ua({name:"contact",initialState:z2,reducers:{setEmail(e,t){e.email=t.payload},setMessage(e,t){e.message=t.payload},setFormError(e,t){e.formError=t.payload}}}),js=e=>e.contact.email,Q0=e=>e.contact.message,q0=e=>e.contact.formError,{setEmail:X0,setMessage:J0,setFormError:il}=Y0.actions,U2=Y0.reducer,Ns=kS({reducer:{sidebar:I2,skills:v2,project:_2,contact:U2}});var Z0={exports:{}},ey={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var si=k;function $2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var W2=typeof Object.is=="function"?Object.is:$2,H2=si.useSyncExternalStore,K2=si.useRef,G2=si.useEffect,Y2=si.useMemo,Q2=si.useDebugValue;ey.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=K2(null);if(i.current===null){var s={hasValue:!1,value:null};i.current=s}else s=i.current;i=Y2(function(){function l(y){if(!u){if(u=!0,d=y,y=r(y),o!==void 0&&s.hasValue){var m=s.value;if(o(m,y))return c=m}return c=y}if(m=c,W2(d,y))return m;var v=r(y);return o!==void 0&&o(m,v)?m:(d=y,c=v)}var u=!1,d,c,f=n===void 0?null:n;return[function(){return l(t())},f===null?void 0:function(){return l(f())}]},[t,n,r,o]);var a=H2(e,i[0],i[1]);return G2(function(){s.hasValue=!0,s.value=a},[a]),Q2(a),a};Z0.exports=ey;var q2=Z0.exports,Ze="default"in wl?Vm:wl,vp=Symbol.for("react-redux-context"),xp=typeof globalThis<"u"?globalThis:{};function X2(){if(!Ze.createContext)return{};const e=xp[vp]??(xp[vp]=new Map);let t=e.get(Ze.createContext);return t||(t=Ze.createContext(null),e.set(Ze.createContext,t)),t}var En=X2(),J2=()=>{throw new Error("uSES not initialized!")};function Jc(e=En){return function(){return Ze.useContext(e)}}var ty=Jc(),ny=J2,Z2=e=>{ny=e},eL=(e,t)=>e===t;function tL(e=En){const t=e===En?ty:Jc(e),n=(r,o={})=>{const{equalityFn:i=eL,devModeChecks:s={}}=typeof o=="function"?{equalityFn:o}:o,{store:a,subscription:l,getServerState:u,stabilityCheck:d,identityFunctionCheck:c}=t();Ze.useRef(!0);const f=Ze.useCallback({[r.name](m){return r(m)}}[r.name],[r,d,s.stabilityCheck]),y=ny(l.addNestedSub,a.getState,u||a.getState,f,i);return Ze.useDebugValue(y),y};return Object.assign(n,{withTypes:()=>n}),n}var nL=tL();function rL(e){e()}function oL(){let e=null,t=null;return{clear(){e=null,t=null},notify(){rL(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const o=t={callback:n,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){!r||e===null||(r=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var wp={notify(){},get:()=>[]};function iL(e,t){let n,r=wp,o=0,i=!1;function s(v){d();const w=r.subscribe(v);let h=!1;return()=>{h||(h=!0,w(),c())}}function a(){r.notify()}function l(){m.onStateChange&&m.onStateChange()}function u(){return i}function d(){o++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=oL())}function c(){o--,n&&o===0&&(n(),n=void 0,r.clear(),r=wp)}function f(){i||(i=!0,d())}function y(){i&&(i=!1,c())}const m={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:f,tryUnsubscribe:y,getListeners:()=>r};return m}var sL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aL=typeof navigator<"u"&&navigator.product==="ReactNative",lL=sL||aL?Ze.useLayoutEffect:Ze.useEffect;function uL({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",identityFunctionCheck:i="once"}){const s=Ze.useMemo(()=>{const u=iL(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,identityFunctionCheck:i}},[e,r,o,i]),a=Ze.useMemo(()=>e.getState(),[e]);lL(()=>{const{subscription:u}=s;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[s,a]);const l=t||En;return Ze.createElement(l.Provider,{value:s},n)}var cL=uL;function ry(e=En){const t=e===En?ty:Jc(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var dL=ry();function fL(e=En){const t=e===En?dL:ry(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var pL=fL();Z2(q2.useSyncExternalStoreWithSelector);const Qe=pL,K=nL,mL=()=>{const e=Qe();return k.useLayoutEffect(()=>{e(xr("ErrorPage"))},[]),x.jsx("div",{className:"flex w-full h-screen justify-center items-center",children:"You have encountered an error"})},hL=k.memo(({character:e})=>{const t=k.useRef(null);return k.useEffect(()=>{const n=()=>{t.current&&(t.current.style.transform=`rotate(${window.scrollY/10}deg)`)};window.addEventListener("scroll",n,!0)},[]),x.jsx("img",{ref:t,className:`\r
      w-[1.838rem]\r
      mobile:w-[2.451rem]\r
      sMobile:w-[3.921rem]  \r
      mMobile:w-[4.706rem]\r
      sLaptop:w-[2.5rem] \r
      mLaptop:w-[3.125rem] \r
      desktop:w-[3.75rem] \r
      largeDesktop:w-[4.688rem]`,src:e,alt:"Character_1_svg"})}),gL=k.memo(({item:e,imgURLBase:t,imgAlternate:n})=>{const r=Qe(),o=K(F2);let i="",s="";switch(e){case"Home":i="Home",s="w-[1.841rem] mobile:w-[2.455rem] sMobile:w-[3.928rem] mMobile:w-[4.714rem] sLaptop:w-[2.133rem] mLaptop:w-[2.667rem] desktop:w-[3.2rem] largeDesktop:w-[4rem]";break;case"About Me":i="AboutMe",s="w-[1.218rem] mobile:w-[1.624rem] sMobile:w-[2.598rem] mMobile:w-[3.118rem] sLaptop:w-[1.40238rem] mLaptop:w-[1.74636rem] desktop:w-[2.1168rem] largeDesktop:w-[2.646rem]";break;case"Portfolio":i="Portfolio",s="w-[1.271rem] mobile:w-[1.694rem] sMobile:w-[2.711rem] mMobile:w-[3.253rem] sLaptop:w-[1.472rem] mLaptop:w-[1.84rem] desktop:w-[2.208rem] largeDesktop:w-[2.76rem]";break;case"Contact Me":i="ContactMe",s="w-[1.658rem] mobile:w-[2.209rem] sMobile:w-[3.536rem] mMobile:w-[4.243rem] sLaptop:w-[1.92rem] mLaptop:w-[2.4rem] desktop:w-[2.88rem] largeDesktop:w-[3.6rem]";break}return x.jsx(pk,{className:"h-full",to:"/Newportfolio-ReactViteBuild/",children:x.jsxs("div",{onClick:()=>{r(xr(i)),r(ao(e))},className:`
        flex flex-col
        h-full
        sLaptop:h-auto
        sLaptop:w-full 
        relative 
        items-center 
        justify-end
        px-[calc(1.151rem/2)]
        mobile:px-[calc(1.534rem/2)]
        sMobile:px-[calc(2.455rem/2)]
        mMobile:px-[calc(2.946rem/2)]
        sLaptop:px-0
        pb-[0.325rem]
        mobile:pb-[0.475rem]
        sMobile:pb-[0.729rem]
        mMobile::pb-[0.868rem]
        sLaptop:py-[calc(1.333rem/2)]
        mLaptop:py-[calc(1.667rem/2)]
        desktop:py-[1rem] 
        largeDesktop:py-[1.25rem]
        ${o!==i&&"group"}
        ${o!==i?"cursor-pointer hover:opacity-75":"cursor-default"}
         gap-[0.288rem] mobile:gap-[0.384rem] sMobile:gap-[0.614rem] mMobile:gap-[0.736rem] sLaptop:gap-[0.333rem] mLaptop:gap-[0.417rem] desktop:gap-[0.5rem] largeDesktop:gap-[0.625rem]`,children:[x.jsx("img",{className:s,src:o===i?n:t,alt:i}),x.jsx("p",{className:`
          font-medium 
          text-center 
          leading-none
          ${o===i?" text-SiteYellow":"text-PrimaryWhite"}
          text-PrimaryWhite 
          sLaptop:min-w-[3.333rem] 
          mLaptop:min-w-[4.167rem] 
          desktop:min-w-[5rem] 
          largeDesktop:min-w-[6.25rem]
          text-[0.518rem]
          mobile:text-[0.691rem]
          sMobile:text-[1.105rem]
          mMobile:text-[1.326rem]
          sLaptop:text-[0.6rem] 
          mLaptop:text-[0.75rem] 
          desktop:text-[0.9rem] 
          largeDesktop:text-[1.125rem]
          `,children:e}),x.jsx("div",{className:`
        block sLaptop:hidden
        transition-all
        absolute
        bg-SiteYellow
        top-0
        h-[0.1171rem]
        mobile:h-[0.1562rem]
        sMobile:h-[0.2499rem]
        mMobile:h-[.3rem]
        ${o===i?`
          w-[100%]
          left-0`:`
          w-[0rem] 
          left-[50%] `} 
        `}),x.jsx("div",{className:`
        hidden sLaptop:block
        transition-all
        absolute 
        ${o===i?`
          sLaptop:h-[100%] 
          sLaptop:top-0`:`
          sLaptop:h-[0rem] 
          sLaptop:top-[50%] 
          group-hover:sLaptop:h-[50%] 
          group-hover:sLaptop:top-[25%]`} 
        sLaptop:w-[.225rem] 
        mLaptop:w-[.25rem]
        desktop:w-[.275rem]
        largeDesktop:w-[.3rem]
        sLaptop:right-0 
        bg-SiteYellow
        `})]})})}),yL=k.memo(()=>{const e=k.useContext(Ce),{svgArray:t,selectSVGArray:n,Character1:r}=e;return x.jsxs("div",{className:`\r
  fixed z-30 \r
  left-0 \r
  bottom-0\r
  px-[0.488rem]\r
  mobile:px-[0.651rem]\r
  sMobile:px-[1.042rem]\r
  mMobile:px-[1.25rem]\r
  sLaptop:px-0\r
  sLaptop:py-[0.667rem]\r
  mLaptop:py-[0.833rem]\r
  desktop:py-[1rem]\r
  largeDesktop:py-5\r
  w-[100vw]\r
  sLaptop:w-auto\r
  sLaptop:min-w-[3.333rem] \r
  mLaptop:min-w-[4.167rem] \r
  desktop:min-w-[5rem] \r
  largeDesktop:min-w-[6.25rem] \r
  h-[3.223rem]\r
  mobile:h-[4.297rem]\r
  sMobile:h-[6.8755rem]\r
  mMobile:h-[8.25rem]\r
  sLaptop:h-[100vh] \r
  flex\r
  flex-row\r
  sLaptop:flex-col\r
  justify-between \r
  items-center\r
  bg-SidebarGray \r
  customShadow\r
  `,children:[x.jsx(hL,{character:r}),x.jsx("div",{className:`\r
      flex \r
      flex-row\r
      sLaptop:flex-col \r
      items-end\r
      sLaptop:items-center \r
      sLaptop:w-full\r
      h-full  \r
      sLaptop:h-auto\r
      sLaptop:px-0\r
      sLaptop:py-0\r
      `,children:Object.entries(t).map(([o,i],s)=>x.jsx(gL,{item:o,imgURLBase:i,imgAlternate:n[s]},s))}),x.jsx("div",{className:`\r
      blank \r
      block \r
      w-[1.838rem]\r
      mobile:w-[2.451rem]\r
      sMobile:w-[3.921rem]  \r
      mMobile:w-[4.706rem]\r
      sLaptop:w-[2.5rem] \r
      mLaptop:w-[3.125rem] \r
      desktop:w-[3.75rem] \r
      largeDesktop:w-[4.688rem] \r
      min-h-[2.3295rem]\r
      mobile:min-h-[3.106rem]\r
      sLaptop:min-h-[1.657rem]\r
      mLaptop:min-h-[2.071rem]\r
      desktop:min-h-[2.485rem]\r
      largeDesktop:min-h-[3.106rem]`})]})}),vL=()=>{const e=k.useContext(Ce),{tabRef:t,backgroundSelectRef:n}=e,r=Qe(),o=K(V2);console.log(o);const i=K(ii);if(t.current.length!==0){const a=t.current.filter(l=>l.innerText===i)[0].offsetLeft;n.current.style.left=`${a}px`}k.useEffect(()=>{function s(){o!==window.innerWidth&&r(B2())}return window.addEventListener("resize",s),s(),()=>window.removeEventListener("resize",s)},[])},xL=k.memo(()=>(vL(),x.jsx(x.Fragment,{children:x.jsxs("main",{className:`\r
      block\r
      relative w-full \r
      min-h-[100vh]\r
      overflow-x-hidden\r
      overflow-y-hidden\r
      `,children:[x.jsx(yL,{}),x.jsx("div",{children:x.jsx(nk,{})})]})}))),wL="/Newportfolio-ReactViteBuild/assets/hero_Drawing.svg",kL="/Newportfolio-ReactViteBuild/assets/trianglePNG.png",SL="/Newportfolio-ReactViteBuild/assets/HeaderWaveMobile.svg",bL=k.memo(()=>{const e=k.useContext(Ce),{pageRef:t}=e;return x.jsxs("div",{ref:n=>{n&&(t.current[0]=n)},id:"Home",className:"relative w-full sLaptop:min-h-[42rem] mLaptop:min-h-[52.5rem] desktop:min-h-[63rem] largeDesktop:min-h-[78.75rem]",children:[x.jsx("img",{className:`\r
      block sLaptop:hidden  \r
      relative w-full\r
      `,src:SL,alt:"WavebackgroundMobile"}),x.jsx("img",{className:`\r
      hidden sLaptop:block relative w-full\r
      `,src:kL,alt:"Wavebackground"}),x.jsx("div",{className:"w-full top-0 absolute",children:x.jsxs("div",{className:`\r
        max-w-[1920px]\r
        mx-auto\r
        relative z-[5] \r
        flex flex-col\r
        gap-[0.264rem]\r
        mobile:gap-[0.351rem]\r
        sMobile:gap-[0.563rem]\r
        mMobile:gap-[0.675rem]\r
        sLaptop:gap-[0.5rem]\r
        largeDesktop:gap-[1rem]\r
        pl-[3.255%]\r
        mobile:pl-[06.51%]\r
        sLaptop:pl-[8%] \r
        largeDesktop:pl-[10.625rem]\r
        pt-[1.221rem]\r
        mobile:pt-[1.628rem]\r
        sMobile:pt-[2.604rem]\r
        mMobile:pt-[3.125rem]\r
        sLaptop:pt-[8rem]\r
        mLaptop:pt-[10rem]\r
        desktop:pt-[12rem]\r
        largeDesktop:pt-[15rem]\r
        heroTextMobileTiny\r
        mobile:heroTextMobile\r
        sMobile:heroTextSmallMobile\r
        mMobile:heroTextMediumMobile\r
        sLaptop:heroTextSmall\r
        mLaptop:heroTextMedium\r
        desktop:heroTextDesktop\r
        largeDesktop:heroTextLarge\r
        `,children:[x.jsx("p",{"data-aos":"slide-right","data-aos-duration":"1250","data-aos-delay":"1300",className:`\r
          text-[2.285rem]\r
          mobile:text-[3.047rem]\r
          sMobile:text-[4.875rem]\r
          mMobile:text-[5.85rem]\r
          sLaptop:text-[4.333rem]\r
          mLaptop:text-[5.375rem]\r
          desktop:text-[6.5rem]\r
          largeDesktop:text-[8.125rem] \r
          leading-none\r
          text-SiteYellow \r
          font-bold\r
          `,children:"WELCOME !"}),x.jsxs("p",{"data-aos":"slide-right","data-aos-duration":"1250","data-aos-delay":"1800",className:`\r
          font-bold \r
          text-[1.494rem]\r
          mobile:text-[1.992rem]\r
          sMobile:text-[3.188rem]\r
          mMobile:text-[3.825rem]\r
          sLaptop:text-[2.833rem]\r
          mLaptop:text-[3.5rem]\r
          desktop:text-[4.25rem]\r
          largeDesktop:text-[5.313rem]\r
          leading-none \r
          text-PrimaryWhite\r
          `,children:[x.jsx("span",{className:"text-SiteYellow",children:"T"}),"o ",x.jsx("span",{className:"text-SiteYellow",children:"M"}),"y ",x.jsx("span",{className:"text-SiteYellow",children:"P"}),"ortfolio"]}),x.jsx("img",{"data-aos":"fade","data-aos-duration":"1250","data-aos-delay":"800",className:`
            right-[3.255%]
            mobile:right-[06.51%]
            sLaptop:right-[2%]
            largeDesktop:right-[2.4rem]
            absolute z-[5]
            top-[5.5rem]
            mobile:top-[7.5rem]
            sMobile:top-[12.49rem]
            mMobile:top-[15.063rem]
            sLaptop:top-[2.625rem]
            mLaptop:top-[3.313rem] 
            desktop:top-[4rem] 
            largeDesktop:top-[5rem]
            extra:top-[12.5rem]
            w-[70%]
            sMobile:w-[67.40%]
            sLaptop:w-[55%]
            largeDesktop:w-[65.25rem]`,src:wL,alt:""}),x.jsx("div",{className:"circle1"}),x.jsx("div",{className:"circle2"}),x.jsx("div",{className:"circle3"}),x.jsx("div",{className:"circle4"})]})})]})}),LL=k.memo(()=>{const e=k.useContext(Ce),{triangle:t,mobileTriangle:n,profile:r,bracketLeft:o,bracketRight:i,moneySign:s}=e;return x.jsxs("div",{className:`\r
    partOneCSS\r
    `,children:[x.jsxs("div",{className:"w-fill relative flex flex-col",children:[x.jsx("div",{className:`relative \r
          mt-[1.465rem]\r
          mobile:mt-[1.953rem]\r
          sMobile:mt-[3.125rem]\r
          mMobile:mt-[3.75rem]\r
          sLaptop:mt-0\r
          pl-[calc(6.51%-0.488rem)]\r
          mobile:pl-[calc(6.51%-0.651rem)]\r
          sMobile:pl-[calc(6.51%-1.041rem)]\r
          mMobile:pl-[calc(6.51%-1.25rem)]\r
          sLaptop:pl-[calc(3.6%-1.4rem)] \r
          mLaptop:pl-[calc(3.6%-1.65rem)] \r
          desktop:pl-[calc(3.6%-2rem)] \r
          largeDesktop:pl-[calc(3.6%-2.45rem)] \r
          extra:pl-0  \r
          extra:w-full \r
          extra:max-w-[1920px] \r
          extra:mx-auto`,children:x.jsxs("h1",{className:`\r
            flex\r
            items-center\r
            sectionCSS\r
            `,children:[x.jsx("img",{className:`\r
            w-[0.488rem]\r
            mr-[0.244rem]\r
            mobile:w-[0.651rem]\r
            mobile:mr-[0.325rem]\r
            sMobile:w-[1.041rem]\r
            sMobile:mr-[0.520rem]\r
            mMobile:w-[1.25rem]\r
            mMobile:mr-[0.625rem]\r
            sLaptop:w-[1rem]\r
            sLaptop:mr-[.4rem]\r
            mLaptop:w-[1.25rem]\r
            mLaptop:mr-[.4rem]\r
            desktop:w-[1.4rem]\r
            desktop:mr-[.6rem]\r
            largeDesktop:w-[1.65rem]\r
            largeDesktop:mr-[.8rem]\r
            `,src:o,alt:""}),x.jsx("span",{"data-aos":"fade","data-aos-duration":"1250","data-aos-delay":"0",children:"ABOUT ME!"}),x.jsx("img",{className:`\r
            w-[0.488rem]\r
            ml-[0.244rem]\r
            mobile:w-[0.651rem]\r
            mobile:ml-[0.325rem]\r
            sMobile:w-[1.041rem]\r
            sMobile:ml-[0.520rem]\r
            mMobile:w-[1.25rem]\r
            mMobile:ml-[0.625rem]\r
            sLaptop:w-[1rem]\r
            sLaptop:ml-[.4rem]\r
            mLaptop:w-[1.25rem]\r
            mLaptop:ml-[.4rem]\r
            desktop:w-[1.4rem]\r
            desktop:ml-[.6rem]\r
            largeDesktop:w-[1.65rem]\r
            largeDesktop:ml-[.8rem]\r
            `,src:i,alt:""})]})}),x.jsxs("div",{className:`\r
          w-full \r
          pt-[1.207rem]\r
          mobile:pt-[1.651rem]\r
          sMobile:pt-[2.604rem]\r
          mMobile:pt-[3.125rem]\r
          sLaptop:pt-[3.379rem]\r
          mLaptop:pt-[4.396rem]\r
          desktop:pt-[5.25rem]\r
          largeDesktop:pt-[6.563rem]\r
          sLaptop:flex flex-row\r
          justify-between\r
          `,children:[x.jsx("div",{"data-aos":"slide-right","data-aos-duration":"1250","data-aos-delay":"500",className:`\r
            bg-SiteGreen \r
            sLaptop:min-h-32 \r
            w-[76.69%]\r
            sLaptop:w-[39.94%] \r
            rounded-r-[0.117rem]\r
            mobile:rounded-r-[0.156rem]\r
            sMobile:rounded-r-[0.249rem]\r
            mMobile:rounded-r-[0.299rem]\r
            sLaptop:rounded-r-[0.267rem]\r
            mLaptop:rounded-r-[0.333rem]\r
            desktop:rounded-r-[0.4rem]\r
            largeDesktop:rounded-r-[0.5rem]\r
            sLaptop:pr-[2.4rem]\r
            mLaptop:pr-[3rem]\r
            desktop:pr-[3.6rem]\r
            largeDesktop:pr-[4.5rem]\r
            py-[0.561rem]\r
            mobile:py-[0.749rem]\r
            sMobile:py-[1.198rem]\r
            mMobile:py-[1.438rem]\r
            sLaptop:py-[1.733rem]\r
            mLaptop:py-[2.167rem]\r
            desktop:py-[2.6rem]\r
            largeDesktop:py-[3.25rem]\r
            divTinyShadow\r
            mobile:divMobileShadow\r
            sMobile:divsMobileShadow\r
            mMobile:divmMobileShadow\r
            sLaptop:divSmallShadow\r
            mLaptop:divMediumShadow\r
            desktop:divDesktopShadow\r
            largeDesktop:divLargeDesktopShadow\r
            flex \r
            justify-end \r
            items-center\r
            `,children:x.jsx("img",{className:`\r
                mr-[12.93%]\r
                w-[43.60%]\r
                sLaptop:mr-0\r
                sLaptop:w-[13.333rem]\r
                mLaptop:w-[16.667rem]\r
                desktop:w-[20rem]\r
                largeDesktop:w-[25rem]\r
                `,src:r,alt:"My_Profile_Image"})}),x.jsx("div",{className:`\r
            flex\r
            sLaptop:hidden\r
            w-full justify-center\r
            pt-[0.610rem]\r
            mobile:pt-[0.814rem]\r
            sMobile:pt-[1.302rem]\r
            mMobile:pt-[1.563rem]\r
            text-[0.628rem]\r
            mobile:text-[0.837rem]\r
            sMobile:text-[1.339rem]\r
            mMobile:tet-[1.608rem]\r
            font-medium\r
            leading-none\r
            `,children:x.jsxs("p",{"data-aos":"slide-right","data-aos-duration":"1250","data-aos-delay":"500",children:[x.jsx("span",{className:`\r
                text-[0.781rem]\r
                mobile:text-[1.041rem]\r
                sMobile:text-[1.666rem]\r
                mMobile:text-[2rem]\r
                text-GrayBackground\r
                `,children:'"'}),"My passion is to draw and code!",x.jsx("span",{className:`\r
                text-[0.781rem]\r
                mobile:text-[1.041rem]\r
                sMobile:text-[1.666rem]\r
                mMobile:text-[2rem]\r
                text-GrayBackground\r
                `,children:'"'})]})}),x.jsxs("div",{"data-aos":"slide-left","data-aos-duration":"1250","data-aos-delay":"500",className:`\r
            relatives\r
            sLaptop:min-h-32 \r
            w-full\r
            sLaptop:w-[57.69%]\r
            mt-[0.488rem]\r
            mobile:mt-[0.651rem]\r
            sMobile:mt-[1.041rem]\r
            mMobile:mt-[1.25rem]\r
            sLaptop:mt-0\r
            `,children:[x.jsxs("h1",{className:`\r
                w-fill\r
                text-center\r
                text-[1.465rem]\r
                mobile:text-[1.953rem]\r
                sMobile:text-[3.125rem]\r
                mMobile:text-[3.75rem]\r
                sLaptop:text-[3.167rem]\r
                mLaptop:text-[3.958rem]\r
                desktop:text-[4.75rem]\r
                largeDesktop:text-[5.938rem]\r
                text-SiteGreen\r
                leading-none\r
                font-bold\r
                `,children:["MIGUEL OLIVARES",x.jsx("span",{className:`\r
                text-[1.91rem]\r
                mobile:text-[2.546rem]\r
                sMobile:text-[4.074rem]\r
                mMobile:text-[4.889rem]\r
                sLaptop:text-[4rem]\r
                mLaptop:text-[5rem]\r
                desktop:text-[6rem]\r
                largeDesktop:text-[7.5rem]\r
                text-GrayBackground\r
                font-medium\r
                `,children:"*"})]}),x.jsx("div",{className:`\r
                mt-[0.304rem]\r
                mobile:mt-[0.447rem]\r
                sMobile:mt-[0.677rem]\r
                mMobile:mt-[0.813rem]\r
                sLaptop:mt-[0.233rem]\r
                mLaptop:mt-[0.313rem]\r
                desktop:mt-[0.35rem]\r
                largeDesktop:mt-[0.438rem]\r
                w-[93.48%]\r
                ml-[calc(100%-93.48%)]\r
                sLaptop:ml-0\r
                sLaptop:w-full\r
                rounded-l-[0.117rem]\r
                mobile:rounded-l-[0.156rem]\r
                sMobile:rounded-l-[0.249rem]\r
                mMobile:rounded-l-[0.299rem]\r
                sLaptop:rounded-l-[0.267rem]\r
                mLaptop:rounded-l-[0.333rem] \r
                desktop:rounded-l-[0.4rem]\r
                largeDesktop:rounded-l-[0.5rem]\r
                flex \r
                items-center \r
                relative\r
                justify-end\r
                sLaptop:justify-start\r
                bg-SiteYellow\r
                divTinyShadow\r
                mobile:divMobileShadow\r
                sMobile:divsMobileShadow\r
                mMobile:divmMobileShadow\r
                sLaptop:divSmallShadow\r
                mLaptop:divMediumShadow\r
                desktop:divDesktopShadow\r
                largeDesktop:divLargeDesktopShadow\r
                `,children:x.jsx("p",{className:`\r
                    text-[0.928rem]\r
                    mobile:text-[1.237rem]\r
                    sMobile:text-[1.979rem]\r
                    mMobile:text-[2.375rem]\r
                    sLaptop:text-[1.833rem]\r
                    mLaptop:text-[2.292rem]\r
                    desktop:text-[2.75rem]\r
                    largeDesktop:text-[3.438rem]\r
                    pr-[calc(53.48%-7.313rem)]\r
                    mobile:pr-[calc(53.48%-9.746rem)]\r
                    sMobile:pr-[calc(53.48%-15.594rem)]\r
                    mMobile:pr-[calc(53.48%-18.716rem)]\r
                    sLaptop:px-[0.933rem]\r
                    mLaptop:px-[1.167rem]\r
                    desktop:px-[1.4rem]\r
                    largeDesktop:px-[1.75rem]\r
                    py-[0.366rem]\r
                    mobile:py-[0.488rem]\r
                    sMobile:py-[0.781rem]\r
                    mMobile:py-[0.938rem]\r
                    sLaptop:py-[1rem]\r
                    mLaptop:py-[1.15rem]\r
                    desktop:py-[1.5rem]\r
                    largeDesktop:py-[1.875rem]\r
                    text-PrimaryWhite\r
                    font-bold\r
                    leading-none\r
                    `,children:"Programmer, Illustrator, & Designer"})}),x.jsxs("div",{className:`\r
                flex flex-col\r
                pt-[0.733rem]\r
                mobile:pt-[0.976rem]\r
                sMobile:pt-[1.563rem]\r
                mMobile:pt-[1.875rem]\r
                sLaptop:pt-[0.877rem]\r
                mLaptop:pt-[1.167rem]\r
                desktop:pt-[1.4rem]\r
                largeDesktop:pt-[1.75rem]\r
\r
                pl-[8.98%]\r
                sLaptop:ml-auto\r
\r
                gap-[0.253rem]\r
                mobile:gap-[0.338rem]\r
                sMobile:gap-[0.54rem]\r
                mMobile:gap-[0.648rem]\r
                sLaptop:gap-[.5rem]\r
                mLaptop:gap-[0.625rem]\r
                desktop:gap-[0.75rem]\r
                largeDesktop:gap-[0.938rem]\r
\r
                relative\r
                w-full\r
                sLaptop:w-auto\r
                `,children:[x.jsx("div",{className:`\r
                  absolute\r
                  bg-SiteYellow\r
                  w-[22.23%]\r
                  sLaptop:w-[9.533rem]\r
                  mLaptop:w-[11.917rem]\r
                  desktop:w-[14.3rem]\r
                  largeDesktop:w-[17.875rem]\r
                  h-[0.219rem]\r
                  mobile:h-[0.291rem]\r
                  sMobile:h-[0.466rem]\r
                  mMobile:h-[0.56rem]\r
                  sLaptop:h-[0.5rem]\r
                  mLaptop:h-[0.625rem]\r
                  desktop:h-[0.75rem]\r
                  largeDesktop:h-[0.938rem]\r
                  sLaptop:top-[3.156rem]\r
                  right-[16.68%]\r
                  sLaptop:right-auto\r
                  sLaptop:left-[16.717rem]\r
                  mLaptop:left-[22.458rem]\r
                  desktop:left-[26.95rem]\r
                  largeDesktop:left-[33.688rem]\r
                  rounded-full\r
                  `}),x.jsx("div",{className:`\r
                  absolute\r
                  bg-SiteYellow\r
                  w-[19.90%]\r
                  sLaptop:w-[8.533rem]\r
                  mLaptop:w-[10.667rem]\r
                  desktop:w-[12.8rem]\r
                  largeDesktop:w-[16rem]\r
\r
                  h-[0.219rem]\r
                  mobile:h-[0.291rem]\r
                  sMobile:h-[0.466rem]\r
                  mMobile:h-[0.56rem]\r
                  sLaptop:h-[0.5rem]\r
                  mLaptop:h-[0.625rem]\r
                  desktop:h-[0.75rem]\r
                  largeDesktop:h-[0.938rem]\r
                  \r
                  top-[1.254rem]\r
                  mobile:top-[1.673rem]\r
                  sMobile:top-[2.676rem]\r
                  mMobile:top-[3.211rem]\r
\r
                  sLaptop:top-[5.406rem]\r
\r
                  right-[4.63%]\r
                  sLaptop:right-auto\r
                  sLaptop:left-[24.135rem]\r
                  mLaptop:left-[30.167rem]\r
                  desktop:left-[36.2rem]\r
                  largeDesktop:left-[45.25rem]\r
                  rounded-full\r
                  `}),x.jsxs("div",{className:`\r
                  flex flex-col\r
                  gap-[0.169rem]\r
                  mobile:gap-[0.225rem]\r
                  sMobile:gap-[0.36rem]\r
                  mMobile:gap-[0.433rem]\r
                  sLaptop:gap-[0.333rem]\r
                  mLaptop:gap-[0.438rem]\r
                  desktop:gap-[.5rem]\r
                  largeDesktop:gap-[0.625rem]\r
                  `,children:[x.jsx("h3",{className:`\r
                      text-[1.013rem]\r
                      mobile:text-[1.351rem]\r
                      sMobile:text-[2.161rem]\r
                      mMobile:text-[2.593rem]\r
                      sLaptop:text-[2rem]\r
                      mLaptop:text-[2.5rem]\r
                      desktop:text-[3rem]\r
                      largeDesktop:text-[3.75rem]\r
                      font-semibold\r
                      text-SidebarGray\r
                      leading-none\r
                      `,children:"Bachelors:"}),x.jsx("p",{className:`\r
                      text-[0.844rem]\r
                      mobile:text-[1.126rem]\r
                      sMobile:text-[1.801rem]\r
                      mMobile:text-[2.161rem]\r
                      sLaptop:text-[1.667rem]\r
                      mLaptop:text-[2.083rem]\r
                      desktop:text-[2.5rem]\r
                      largeDesktop:text-[3.125rem]\r
                      font-semibold\r
                      text-SiteGreen\r
                      leading-none\r
                      `,children:"Informatics & MAS"})]}),x.jsxs("div",{className:`\r
                  flex flex-col\r
                  gap-[0.169rem]\r
                  mobile:gap-[0.225rem]\r
                  sMobile:gap-[0.36rem]\r
                  mMobile:gap-[0.433rem]\r
                  sLaptop:gap-[0.333rem]\r
                  mLaptop:gap-[0.438rem]\r
                  desktop:gap-[.5rem]\r
                  largeDesktop:gap-[0.625rem]\r
                  `,children:[x.jsx("h3",{className:`\r
                      text-[1.013rem]\r
                      mobile:text-[1.351rem]\r
                      sMobile:text-[2.161rem]\r
                      mMobile:text-[2.593rem]\r
                      sLaptop:text-[2rem]\r
                      mLaptop:text-[2.5rem]\r
                      desktop:text-[3rem]\r
                      largeDesktop:text-[3.75rem]\r
                      font-semibold\r
                      text-SidebarGray\r
                      leading-none\r
                      `,children:"School:"}),x.jsx("p",{className:`\r
                      text-[0.844rem]\r
                      mobile:text-[1.126rem]\r
                      sMobile:text-[1.801rem]\r
                      mMobile:text-[2.161rem]\r
                      sLaptop:text-[1.667rem]\r
                      mLaptop:text-[2.083rem]\r
                      desktop:text-[2.5rem]\r
                      largeDesktop:text-[3.125rem]\r
                      font-semibold\r
                      text-SiteGreen\r
                      leading-none\r
                      `,children:"IUPUI 2018-2022"})]})]})]})]}),x.jsx("div",{className:`\r
            hidden\r
            sLaptop:flex \r
            pl-[7.03%]\r
            largeDesktop:pl-[8.063rem]\r
            sLaptop:pt-[1.1rem]\r
            mLaptop:pt-[1.375rem]\r
            desktop:pt-[1.65rem]\r
            largeDesktop:pt-[2.063rem]\r
            sLaptop:pb-[13.579rem]\r
            mLaptop:pb-[16.958rem]\r
            desktop:pb-[20.338rem]\r
            largeDesktop:pb-[25.438rem]\r
            sLaptop:text-[1.333rem]\r
            mLaptop:text-[1.667rem]\r
            desktop:text-[2rem]\r
            largeDesktop:text-[2.5rem]\r
            extra:w-full\r
            extra:max-w-[1920px]\r
            extra:mx-auto\r
            font-medium\r
            leading-none\r
          `,children:x.jsxs("p",{"data-aos":"slide-right","data-aos-duration":"1250","data-aos-delay":"500",children:[x.jsx("span",{className:`\r
            sLaptop:text-[2rem]\r
            mLaptop:text-[2.5rem]\r
            desktop:text-[3rem]\r
            largeDesktop:text-[3.75rem]\r
            text-GrayBackground\r
            `,children:'"'}),"My passion is to draw and code!",x.jsx("span",{className:`\r
            sLaptop:text-[2rem]\r
            mLaptop:text-[2.5rem]\r
            desktop:text-[3rem]\r
            largeDesktop:text-[3.75rem]\r
            text-GrayBackground\r
            `,children:'"'})]})})]}),x.jsx("span",{className:`\r
        hidden\r
        absolute\r
        sLaptop:top-[31.633rem]\r
        mLaptop:top-[39.542rem]\r
        desktop:top-[47.45rem]\r
        largeDesktop:top-[59.313rem]\r
        left-[23%]\r
        font-medium\r
        sLaptop:text-[11.92rem]\r
        mLaptop:text-[14.9rem]\r
        desktop:text-[17.88rem]\r
        largeDesktop:text-[22.35rem]\r
        text-GrayBackground\r
        `,children:"*"}),x.jsx("img",{className:` \r
        absolute \r
        right-[7.94%]\r
        sLaptop:right-[15.26%]\r
        w-[1.587rem]\r
        mobile:w-[2.116rem]\r
        sMobile:w-[3.375rem]\r
        mMobile:w-[4.063rem]\r
        sLaptop:w-[2.633rem]\r
        mLaptop:w-[3.292rem]\r
        desktop:w-[3.95rem]\r
        largeDesktop:w-[4.938rem]\r
        top-[0.368rem]\r
        mobile:top-[0.491rem]\r
        sMobile:top-[0.786rem]\r
        mMobile:top-[0.943rem]\r
        sLaptop:top-0 \r
        `,src:s,alt:"DollarSign"}),x.jsx("img",{className:` absolute\r
        right-[23.22%]\r
        sLaptop:right-[34.37%]\r
        top-[80%]\r
        sLaptop:top-[32.5rem]\r
        mLaptop:top-[40.625rem]\r
        desktop:top-[48.75rem]\r
        largeDesktop:top-[60.938rem]\r
        w-[1.245rem]\r
        mobile:w-[1.66rem]\r
        sMobile:w-[2.656rem]\r
        mMobile:w-[3.188rem]\r
        sLaptop:w-[3.233rem]\r
        mLaptop:w-[4.042rem]\r
        desktop:w-[4.85rem]\r
        largeDesktop:w-[6.063rem]\r
        `,src:s,alt:"DollarSign2"}),x.jsx("img",{className:`\r
        absolute \r
        w-[0.585rem]\r
        mobile:w-[0.700rem]\r
        sMobile:w-[1.249rem]\r
        mMobile:w-[1.5rem]\r
        sLaptop:w-[1.313rem]\r
        mLaptop:w-[1.688rem]\r
        desktop:w-[2rem] \r
        largeDesktop:w-[2.5rem] \r
        left-[6.51%]\r
        sLaptop:left-[44.53%] \r
        bottom-[40%]\r
        sLaptop:bottom-0\r
        sLaptop:top-[3.54rem]\r
        mLaptop:top-[4.417rem]\r
        desktop:top-[5.313rem]\r
        largeDesktop:top-[6.625rem]`,src:o,alt:"Left_Bracket_background"}),x.jsx("img",{className:`\r
        absolute \r
        w-[0.585rem]\r
        mobile:w-[0.700rem]\r
        sMobile:w-[1.249rem]\r
        mMobile:w-[1.5rem]\r
        sLaptop:w-[1.313rem]\r
        mLaptop:w-[1.688rem]\r
        desktop:w-[2rem] \r
        largeDesktop:w-[2.5rem] \r
        left-[6.51%]\r
        sLaptop:left-auto\r
        sLaptop:right-[07.13%] \r
        top-[87.5%]\r
        sLaptop:top-[26.3rem]\r
        mLaptop:top-[32.875rem]\r
        desktop:top-[39.438rem]\r
        largeDesktop:top-[49.313rem]`,src:i,alt:"Right_Bracket_background"}),x.jsx("img",{className:`\r
        block\r
        sLaptop:hidden\r
        w-full\r
        absolute\r
        bottom-0\r
        right-0\r
        `,src:n,alt:"MobileTriangle"}),x.jsx("img",{className:`\r
        hidden sLaptop:block\r
        imgCSS`,src:t})]})}),EL=k.memo(({selectSkill:e})=>{const t=k.useContext(Ce),{descRef:n}=t;if(e)return x.jsxs("div",{ref:n,className:`\r
     relative\r
     w-[calc(100%-13.02%)]\r
     mx-auto\r
     sLaptop:w-full \r
     mt-[0.976rem]\r
     mobile:mt-[1.302rem]\r
     sMobile:mt-[2.083rem]\r
     mMobile:mt-[2.5rem]\r
     sLaptop:mt-0\r
     min-h-[10.62rem]\r
     mobile:min-h-[14.16rem]\r
     sMobile:min-h-[22.656rem]\r
     mMobile:min-h-[27.188rem]\r
     sLaptop:min-h-[14.157rem]\r
     mLaptop:min-h-[17.696rem]\r
     desktop:min-h-[21.236rem]\r
     largeDesktop:min-h-[26.544rem] \r
     mb-[1.258rem]\r
     mobile:mb-[1.258rem]\r
     sMobile:mb-[2.822rem]\r
     mMobile:mb-[3.361rem]\r
     sLaptop:mb-[2.663rem]\r
     mLaptop:mb-[3.321rem]\r
     desktop:mb-[3.984rem]\r
     largeDesktop:mb-[4.979rem]\r
     bg-PrimaryWhite \r
     infoTiny\r
     mobile:informobile\r
     sMobile:infosMobile\r
     mMobile:informMobile\r
     sLaptop:infoSmall\r
     mLaptop:infoMedium\r
     desktop:infoDesktop\r
     largeDesktop:infoLargeDesktop\r
     flex flex-col\r
     text-SidebarGray\r
     `,children:[x.jsxs("div",{className:`w-full \r
      flex justify-between items-center\r
      mt-[0.889rem]\r
      mobile:mt-[1.153rem]\r
      sMobile:mt-[1.872rem]\r
      mMobile:mt-[2.213rem]\r
      sLaptop:mt-[1.32rem]\r
      mLaptop:mt-[1.65rem]\r
      desktop:mt-[1.98rem]\r
      largeDesktop:mt-[2.475rem]\r
      pl-[0.854rem]]\r
      mobile:pl-[1.139rem]\r
      sMobile:pl-[1.823rem]\r
      mMobile:pl-[2.188rem]\r
      sLaptop:pl-[0.99rem]\r
      mLaptop:pl-[1.238rem]\r
      desktop:pl-[1.485rem]\r
      largeDesktop:pl-[1.856rem]\r
      `,children:[x.jsx("h1",{className:`\r
         text-[0.976rem]\r
         mobile:text-[1.302rem]\r
         sMobile:text-[2.083rem]\r
         mMobile:text-[2.5rem]\r
         sLaptop:text-[1.98rem]\r
         mLaptop:text-[2.475rem]\r
         desktop:text-[2.97rem]\r
         largeDesktop:text-[3.713rem]\r
         font-bold\r
         leading-none\r
         `,children:e.title}),x.jsx("span",{className:`
         text-[0.873rem]
         mobile:text-[1.163rem]
         sMobile:text-[1.861rem]
         mMobile:text-[2.233rem]
         sLaptop:text-[1.815rem]
         mLaptop:text-[2.269rem]
         desktop:text-[2.723rem]
         largeDesktop:text-[3.403rem]
         py-[0.234rem]
         mobile:py-[0.312rem]
         sMobile:py-[0.499rem]
         mMobile:py-[.6rem]
         sLaptop:py-[.4rem]
         mLaptop:py-[.525rem]
         desktop:py-[.650rem]
         largeDesktop:py-[.65rem]
         pl-[0.487rem]
         mobile:pl-[0.649rem]
         sMobile:pl-[1.039rem]
         mMobile:pl-[1.247rem]
         sLaptop:pl-[0.938rem]
         mLaptop:pl-[1.238rem]
         desktop:pl-[1.485rem]
         largeDesktop:pl-[1.856rem]
         w-[6.344rem]
         mobile:w-[8.459rem]
         sMobile:w-[13.535rem]
         mMobile:w-[16.243rem]
         sLaptop:w-[13.2rem]
         mLaptop:w-[16.5rem]
         desktop:w-[19.8rem]
         largeDesktop:w-[24.75rem]
         font-semibold
         leading-none
         text-PrimaryWhite
         ${e.skillLevel==="Proficient"?" bg-SiteYellow":"bg-SiteGreen"}
         `,children:e.skillLevel})]}),x.jsx("p",{className:`\r
      font-medium\r
      px-[0.854rem]\r
      mobile:px-[1.139rem]\r
      sMobile:px-[1.823rem]\r
      mMobile:px-[2.188rem]\r
      sLaptop:px-[0.938rem]\r
      mLaptop:px-[1.238rem]\r
      desktop:px-[1.485rem]\r
      largeDesktop:px-[1.856rem]\r
      mt-[0.763rem]\r
      mobile:mt-[1.016rem]\r
      sMobile:mt-[1.626rem]\r
      mMobile:mt-[1.951rem]\r
      sLaptop:mt-[0.719rem]\r
      mLaptop:mt-[0.931rem]\r
      desktop:mt-[1.083rem]\r
      largeDesktop:mt-[1.346rem]\r
      text-[0.781rem]\r
      mobile:text-[1.042rem]\r
      sMobile:text-[1.667rem]\r
      mMobile:text-[2rem]\r
      sLaptop:text-[1.584rem]\r
      mLaptop:text-[1.98rem]\r
      desktop:text-[2.376rem]\r
      largeDesktop:text-[2.97rem]\r
      sLaptop:mb-[3.634rem]\r
      mLaptop:mb-[4.558rem]\r
      desktop:mb-[5.451rem]\r
      largeDesktop:mb-[6.821rem]\r
      leading-[1.15]\r
      `,children:e.desc}),x.jsxs("span",{className:`\r
      absolute\r
      left-[0.854rem]\r
      mobile:left-[1.139rem]\r
      sMobile:left-[1.823rem]\r
      mMobile:left-[2.188rem]\r
      sLaptop:left-[0.938rem]\r
      mLaptop:left-[1.238rem]\r
      desktop:left-[1.485rem]\r
      largeDesktop:left-[1.856rem]\r
      bottom-[0.733rem]\r
      mobile:bottom-[1.171rem]\r
      sMobile:bottom-[1.823rem]\r
      mMobile:bottom-[2.224rem]\r
      sLaptop:bottom-[1.287rem]\r
      mLaptop:bottom-[1.609rem]\r
      desktop:bottom-[1.931rem]\r
      largeDesktop:bottom-[2.288rem]\r
      text-[0.781rem]\r
      mobile:text-[1.041rem]\r
      sMobile:text-[1.666rem]\r
      mMobile:text-[2rem]\r
      sLaptop:text-[1.485rem]\r
      mLaptop:text-[1.856rem]\r
      desktop:text-[2.228rem]\r
      largeDesktop:text-[2.784rem]\r
      font-medium\r
      `,children:["Years Experience: ",e.years]})]})}),ML=k.memo(({skill:e,loc:t})=>{const n=Qe(),r=k.useContext(Ce),{iconsRef:o,arrowRef:i,descRef:s}=r,a=K(H0);return k.useEffect(()=>{const l=()=>{var y;if(n(y2(e.title)),!i.current)return;const u=o.current[t].offsetLeft+o.current[t].offsetWidth/2,d=((y=i.current)==null?void 0:y.offsetWidth)/2,c=u-d,f=s.current.offsetWidth;i.current.style.left=`${(c/f*100).toFixed(2)}%`};return o.current[t].addEventListener("mouseover",l,!0),()=>{o.current[t].removeEventListener("mouseover",l,!0)}},[]),x.jsx("img",{ref:l=>o.current[t]=l,className:`
      cursor-pointer
      w-[2.591rem]
      mobile:w-[3.455rem]
      sMobile:w-[5.528rem]
      mMobile:w-[6.634rem]
      sLaptop:w-[4.224rem] 
      mLaptop:w-[5.28rem]
      desktop:w-[6.336rem]
      largeDesktop:w-[7.92rem]
      `,src:`http://localhost:5173/Newportfolio-ReactViteBuild/assets/SkillIcons/${a===e.title?"Select":""}${e.imgSRC}`,alt:e.title})}),oy=({color:e})=>x.jsxs("div",{className:`flex \r
          gap-[0.585rem]\r
          mobile:gap-[0.781rem]\r
          sMobile:gap-[1.249rem]\r
          mMobile:gap-[1.5rem]\r
          sLaptop:gap-[1.325rem]\r
          mLaptop:gap-[1.65rem]\r
          desktop:gap-[2rem]\r
          largeDesktop:gap-[2.5rem]`,children:[x.jsx("div",{className:`bubble ${e} animate-[reversebounce_1s_infinite] animationDelay3s`}),x.jsx("div",{className:`bubble ${e} animate-[reversebounce_1s_infinite] animationDelay2s`}),x.jsx("div",{className:`bubble ${e} animate-[reversebounce_1s_infinite] animationDelay1s`}),x.jsx("div",{className:`bubble ${e} animate-[reversebounce_1s_infinite]`})]}),CL=k.memo(()=>{const e=k.useContext(Ce),{arrowRef:t,square:n,pointer:r}=e,o=K(m2),i=K(h2),s=K(g2),a=K(H0);let l;return i==="failed"?(console.log(s),l=x.jsxs("div",{className:`\r
      w-full \r
      sLaptop:min-h-[21.5rem]\r
      mLaptop:min-h-[28rem]\r
      desktop:min-h-[35rem]\r
      largeDesktop:min-h-[45rem]\r
      flex flex-col justify-center items-center\r
      sLaptop:gap-[1.59rem]\r
      mLaptop:gap-[1.98rem]\r
      desktop:gap-[2.4rem]\r
      largeDesktop:gap-[3rem]\r
      text-PrimaryWhite\r
      `,children:[x.jsx("p",{className:`\r
         sLaptop:text-[1.9875rem]\r
         mLaptop:text-[2.475rem]\r
         desktop:text-[3rem]\r
         largeDesktop:text-6xl\r
         font-semibold\r
        `,children:"Data Failed to load please try again."}),x.jsx("button",{className:`\r
          sLaptop:text-[1.59rem]\r
          mLaptop:text-[1.98rem]\r
          desktop:text-[2.4rem]\r
          largeDesktop:text-5xl\r
          hover:cursor-pointer\r
          hover:underline\r
         `,onClick:()=>Ns.dispatch(wo()),children:"Reload"})]})):i==="loading"?l=x.jsx("div",{className:`\r
      w-full \r
      flex justify-center items-center\r
      sLaptop:min-h-[26.5rem]\r
      mLaptop:min-h-[33rem]\r
      desktop:min-h-[40rem]\r
      largeDesktop:min-h-[50rem]\r
      `,children:x.jsx(oy,{color:"bg-PrimaryWhite"})}):i==="succeeded"&&(l=Object.entries(o).map(([u,d],c)=>x.jsx(ML,{skill:d,loc:c},u))),x.jsxs("div",{className:`\r
    sLaptop:block\r
    partTwoCSS`,children:[x.jsxs("div",{className:`\r
        w-full \r
        relative z-[5]\r
        flex \r
        flex-col \r
        sLaptop:px-[3.6%] \r
        extra:px-0`,children:[x.jsxs("div",{"data-aos":"fade","data-aos-duration":"1000","data-aos-delay":"0",className:`w-full \r
          flex flex-col \r
          px-[6.51%]\r
          sLaptop:px-0\r
          extra:max-w-[1920px] extra:mx-auto \r
          gap-[0.195rem] mobile:gap-[0.260rem] sMobile:gap-[0.416rem] mMobile:gap-[0.5rem]\r
          sLaptop:gap-[0.333rem] mLaptop:gap-[0.417rem] desktop:gap-[0.5rem] largeDesktop:gap-[0.625rem]`,children:[x.jsx("h1",{className:"sectionCSS",children:"MY TECHNICAL SKILLS"}),x.jsx("p",{className:`\r
            leading-none\r
            font-bold\r
            text-PrimaryWhite\r
            text-[0.781rem]\r
            mobile:text-[1.042rem]\r
            sMobile:text-[1.667rem]\r
            mMobile:text-[2rem]\r
            sLaptop:text-[2rem]\r
            mLaptop:text-[2.5rem]\r
            desktop:text-[3rem]\r
            largeDesktop:text-[3.75rem]\r
            textShadowTiny\r
            mobile:textShadowmobile\r
            sMobile:textShadowsMobile\r
            mMobile:textShadowmMobile\r
            sLaptop:textShadowSmall\r
            mLaptop:textShadowMedium\r
            desktop:textShadowDesktop\r
            largeDesktop:textShadowLarge\r
            `,children:"Check out some of my strongest technical skills!"})]}),i==="failed"||i==="loading"?l:x.jsxs("div",{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"500",className:`\r
            sLaptop:flex \r
            flex-col \r
            w-full \r
            max-w-[1920px] \r
            extra:mx-auto`,children:[x.jsx("div",{className:`\r
              overflow-x-auto\r
              no-scrollbar\r
              mt-[0.977rem]\r
              mobile:mt-[1.283ren]\r
              sMobile:mt-[2.083rem]\r
              mMobile:mt-[2.5rem]\r
              sLaptop:mt-[3.25rem]\r
              mLaptop:mt-[4.25rem]\r
              desktop:mt-[5rem]\r
              largeDesktop:mt-[6.75rem]\r
              py-[0.608rem]\r
              mobile:py-[0.81rem]\r
              sMobile:py-[1.296rem]\r
              mMobile:py-[1.555rem]\r
              sLaptop:py-[0.99rem]\r
              mLaptop:py-[1.238rem]\r
              desktop:py-[1.485rem]\r
              largeDesktop:py-[1.856rem]\r
              px-[9.80%]\r
              sLaptop:px-[1.82%]\r
              gap-[0.729rem]\r
              mobile:gap-[0.972rem]\r
              sMobile:gap-[1.555rem]\r
              mMobile:gap-[1.866rem]\r
              sLaptop:gap-0\r
              w-full \r
              flex flex-row\r
              sLaptop:justify-between\r
              relative\r
              `,children:l}),x.jsx("div",{className:"w-full hidden sLaptop:block relative sLaptop:min-h-[1.716rem] mLaptop:min-h-[2.145rem] desktop:min-h-[2.574rem] largeDesktop:min-h-[3.218rem]",children:x.jsx("img",{ref:t,className:`
                transition-[left]
                duration-150
                absolute
                sLaptop:h-[1.716rem] mLaptop:h-[2.145rem] desktop:h-[2.574rem] largeDesktop:h-[3.218rem]
                left-[03.20%]
                `,src:r,alt:"pointerSVG"})}),x.jsx(EL,{selectSkill:o[a]})]})]}),x.jsx("img",{className:`\r
        hidden\r
        absolute \r
        z-[0]\r
        sLaptop:h-[56.71rem]\r
        mLaptop:h-[70.62rem] \r
        desktop:h-[85.6rem]\r
        largeDesktop:h-[107rem] \r
        sLaptop:right-[-1.06rem] sLaptop:top-[-10.6rem]\r
        mLaptop:right-[-1.32rem] mLaptop:top-[-13.2rem]\r
        desktop:right-[-1.6rem] desktop:top-[-16rem]\r
        largeDesktop:right-[-2rem] largeDesktop:top-[-20rem]`,src:n,alt:""})]})}),PL=k.memo(()=>{const e=k.useContext(Ce),{pageRef:t}=e;return x.jsxs("div",{ref:n=>{n&&(t.current[1]=n)},id:"AboutMe",className:"relative w-full",children:[x.jsx(LL,{}),x.jsx(CL,{})]})}),TL=k.memo(()=>{const e=Qe(),t=K(ii),n=k.useContext(Ce),{tabRef:r,backgroundSelectRef:o}=n,i=["Programming","Art","UI / UX"],s=(a,l)=>{e(P2(a));const u=r.current[l].offsetLeft;o.current.style.left=`${u}px`};return x.jsxs("div",{className:`\r
    flex \r
    flex-row \r
    w-full\r
    relative\r
  \r
    overflow-clip\r
\r
    items-center\r
\r
    justify-between\r
    sLaptop:justify-normal\r
\r
    sLaptop:gap-[0.165rem]\r
    mLaptop:gap-[.20658rem]\r
    desktop:gap-[.25rem]\r
    largeDesktop:gap-[0.313rem]\r
\r
    sLaptop:pt-[0.313rem]\r
    sLaptop:pb-[0.5rem]\r
    mLaptop:pb-[0.625rem]\r
    desktop:pb-[0.75rem]\r
    largeDesktop:pb-[0.938rem]\r
\r
    sLaptop:pl-[1.333rem]\r
    mLaptop:pl-[1.666rem]\r
    desktop:pl-[2rem]\r
    largeDesktop:pl-[3.125rem]\r
    `,children:[x.jsx("div",{ref:o,className:`\r
    transition-all\r
    duration-100\r
    mockBrowserSelected\r
    `}),i.map((a,l)=>x.jsxs(k.Fragment,{children:[x.jsxs("p",{ref:u=>r.current[l]=u,className:`
        relative
        z-[5]
        leading-none 
        flex 
        flex-row
        justify-center
        sLaptop:justify-between
        items-center

        sLaptop:rounded-[.26rem]
        mLaptop:rounded-[.33rem]
        desktop:rounded-[.4rem]
        largeDesktop:rounded-[0.5rem]
        ${a===t?`
        transition-none text-SidebarGray
        `:`
        transition-[background-color]
        duration-500
        text-PrimaryWhite 
        sLaptop:hover:bg-GlassBackground 
        sLaptop:hover:cursor-pointer
        `}

        font-bold
        sLaptop:font-medium

        w-[calc(100%/3-(0.126rem*2))]
        mobile:w-[calc(100%/3-(0.169rem*2))]
        sMobile:w-[calc(100%/3-(0.270rem*2))]
        mMobile:w-[calc(100%/3-(.325rem*2))]
        sLaptop:w-[8.9rem]
        mLaptop:w-[11.125rem]
        desktop:w-[13.35rem]
        largeDesktop:w-[16.688rem]

        px-[0.292rem]
        mobile:px-[0.390rem]
        sMobile:px-[0.624rem]
        mMobile:px-[0.75rem]
        sLaptop:px-[0.833rem]
        mLaptop:px-[1.042rem]
        desktop:px-[1.25rem]
        largeDesktop:px-[1.563rem]

        text-[0.696rem]
        mobile:text-[0.928rem]
        sMobile:text-[1.484rem]
        mMobile:text-[1.781rem]
        sLaptop:text-[1rem]
        mLaptop:text-[1.25rem]
        desktop:text-[1.5rem]
        largeDesktop:text-[1.875rem]

        py-[0.664rem]
        mobile:py-[0.885rem]
        sMobile:py-[1.416rem]
        mMobile:py-[1.7rem]
        sLaptop:py-[0.288rem]
        mLaptop:py-[0.375rem]
        desktop:py-[0.463rem]
        largeDesktop:py-[0.625rem]
        `,onClick:()=>s(a,l),children:[a,x.jsx("img",{className:`
            hidden
            sLaptop:block
            w-[0.488rem]
            mobile:w-[0.651rem]
            sMobile:w-[1.042rem]
            mMobile:w-[1.25rem]
            sLaptop:w-[0.667rem]
            mLaptop:w-[0.833rem]
            desktop:w-[1rem]
            largeDesktop:w-[1.5rem]
            hover:opacity-75
            `,src:`https://253olivares.github.io/Newportfolio-ReactViteBuild/assets/browser_closeButton${a===t?"Select":""}.svg`,alt:"tab_Close"})]}),l<2&&x.jsx("div",{className:`
            ${t==="Art"?"bg-transparent":"bg-PrimaryWhite"}
            ${t==="Programming"&&l===0?"bg-transparent":"bg-PrimaryWhite"}
            ${t==="UI / UX"&&l===1?"bg-transparent":"bg-PrimaryWhite"}
            h-[1.269rem]
            mobile:h-[1.692rem]
            sMobile:h-[2.708rem]
            mMobile:h-[3.25rem]
            sLaptop:h-full
            w-[0.126rem]
            mobile:w-[0.169rem]
            sMobile:w-[0.270rem]
            mMobile:w-[.325rem]
            sLaptop:w-[.125rem]
            mLaptop:w-[.165rem]
            desktop:w-[.20rem]
            largeDesktop:w-[0.25rem] 
            rounded-full
            `})]},l))]})}),DL=k.memo(()=>{const e=k.useContext(Ce),{minimize:t,fullscreen:n,close:r}=e,o=[t,n,r];return x.jsx("div",{className:`\r
    hidden\r
    sLaptop:flex flex-row \r
    items-center relative\r
    sLaptop:px-[0.584rem]\r
    mLaptop:px-[0.761rem]\r
    desktop:px-[.85rem]\r
    largeDesktop:px-[1rem]\r
    sLaptop:gap-[0.675rem]\r
    mLaptop:gap-[0.844rem]\r
    desktop:gap-[1.013rem]\r
    largeDesktop:gap-[1.266rem]\r
    sLaptop:pt-[0.313rem]\r
    sLaptop:pb-[.5rem]\r
    mLaptop:pb-[0.625rem]\r
    desktop:pb-[0.75rem]\r
    largeDesktop:pb-[0.938rem]\r
    `,children:o.map((i,s)=>x.jsx("img",{className:`\r
            hover:opacity-75\r
            hover:cursor-pointer\r
            py-auto\r
            sLaptop:w-[1.094rem]\r
            mLaptop:w-[1.367rem]\r
            desktop:w-[1.64rem]\r
            largeDesktop:w-[2.051rem]\r
            `,src:i,alt:"x"},s))})}),Zc=k.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),ha=k.createContext({}),ga=k.createContext(null),ed=typeof document<"u",td=ed?k.useLayoutEffect:k.useEffect,iy=k.createContext({strict:!1}),nd=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),RL="framerAppearId",sy="data-"+nd(RL),jL={skipAnimations:!1,useManualTiming:!1};class kp{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function NL(e){let t=new kp,n=new kp,r=0,o=!1,i=!1;const s=new WeakSet,a={schedule:(l,u=!1,d=!1)=>{const c=d&&o,f=c?t:n;return u&&s.add(l),f.add(l)&&c&&o&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(o){i=!0;return}if(o=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const d=t.order[u];s.has(d)&&(a.schedule(d),e()),d(l)}o=!1,i&&(i=!1,a.process(l))}};return a}const Ri=["read","resolveKeyframes","update","preRender","render","postRender"],_L=40;function ay(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=Ri.reduce((c,f)=>(c[f]=NL(()=>n=!0),c),{}),s=c=>{i[c].process(o)},a=()=>{const c=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(c-o.timestamp,_L),1),o.timestamp=c,o.isProcessing=!0,Ri.forEach(s),o.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,o.isProcessing||e(a)};return{schedule:Ri.reduce((c,f)=>{const y=i[f];return c[f]=(m,v=!1,w=!1)=>(n||l(),y.schedule(m,v,w)),c},{}),cancel:c=>Ri.forEach(f=>i[f].cancel(c)),state:o,steps:i}}const{schedule:rd,cancel:WC}=ay(queueMicrotask,!1);function AL(e,t,n,r){const{visualElement:o}=k.useContext(ha),i=k.useContext(iy),s=k.useContext(ga),a=k.useContext(Zc).reducedMotion,l=k.useRef();r=r||i.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:o,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;k.useInsertionEffect(()=>{u&&u.update(n,s)});const d=k.useRef(!!(n[sy]&&!window.HandoffComplete));return td(()=>{u&&(rd.postRender(u.render),d.current&&u.animationState&&u.animationState.animateChanges())}),k.useEffect(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}function wr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function OL(e,t,n){return k.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):wr(n)&&(n.current=r))},[t])}function Go(e){return typeof e=="string"||Array.isArray(e)}function ya(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const od=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],id=["initial",...od];function va(e){return ya(e.animate)||id.some(t=>Go(e[t]))}function ly(e){return!!(va(e)||e.variants)}function FL(e,t){if(va(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Go(n)?n:void 0,animate:Go(r)?r:void 0}}return e.inherit!==!1?t:{}}function VL(e){const{initial:t,animate:n}=FL(e,k.useContext(ha));return k.useMemo(()=>({initial:t,animate:n}),[Sp(t),Sp(n)])}function Sp(e){return Array.isArray(e)?e.join(" "):e}const bp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Yo={};for(const e in bp)Yo[e]={isEnabled:t=>bp[e].some(n=>!!t[n])};function BL(e){for(const t in e)Yo[t]={...Yo[t],...e[t]}}const sd=k.createContext({}),uy=k.createContext({}),IL=Symbol.for("motionComponentSymbol");function zL({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:o}){e&&BL(e);function i(a,l){let u;const d={...k.useContext(Zc),...a,layoutId:UL(a)},{isStatic:c}=d,f=VL(a),y=r(a,c);if(!c&&ed){f.visualElement=AL(o,y,d,t);const m=k.useContext(uy),v=k.useContext(iy).strict;f.visualElement&&(u=f.visualElement.loadFeatures(d,v,e,m))}return x.jsxs(ha.Provider,{value:f,children:[u&&f.visualElement?x.jsx(u,{visualElement:f.visualElement,...d}):null,n(o,a,OL(y,f.visualElement,l),y,c,f.visualElement)]})}const s=k.forwardRef(i);return s[IL]=o,s}function UL({layoutId:e}){const t=k.useContext(sd).id;return t&&e!==void 0?t+"-"+e:e}function $L(e){function t(r,o={}){return zL(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const WL=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ad(e){return typeof e!="string"||e.includes("-")?!1:!!(WL.indexOf(e)>-1||/[A-Z]/u.test(e))}const _s={};function HL(e){Object.assign(_s,e)}const ai=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],or=new Set(ai);function cy(e,{layout:t,layoutId:n}){return or.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!_s[e]||e==="opacity")}const Ne=e=>!!(e&&e.getVelocity),KL={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},GL=ai.length;function YL(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,o){let i="";for(let s=0;s<GL;s++){const a=ai[s];if(e[a]!==void 0){const l=KL[a]||a;i+=`${l}(${e[a]}) `}}return t&&!e.z&&(i+="translateZ(0)"),i=i.trim(),o?i=o(e,r?"":i):n&&r&&(i="none"),i}const dy=e=>t=>typeof t=="string"&&t.startsWith(e),fy=dy("--"),QL=dy("var(--"),ld=e=>QL(e)?qL.test(e.split("/*")[0].trim()):!1,qL=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,XL=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Mn=(e,t,n)=>n>t?t:n<e?e:n,Hr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ko={...Hr,transform:e=>Mn(0,1,e)},ji={...Hr,default:1},So=e=>Math.round(e*1e5)/1e5,ud=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,JL=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,ZL=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function li(e){return typeof e=="string"}const ui=e=>({test:t=>li(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),nn=ui("deg"),Dt=ui("%"),A=ui("px"),e3=ui("vh"),t3=ui("vw"),Lp={...Dt,parse:e=>Dt.parse(e)/100,transform:e=>Dt.transform(e*100)},Ep={...Hr,transform:Math.round},py={borderWidth:A,borderTopWidth:A,borderRightWidth:A,borderBottomWidth:A,borderLeftWidth:A,borderRadius:A,radius:A,borderTopLeftRadius:A,borderTopRightRadius:A,borderBottomRightRadius:A,borderBottomLeftRadius:A,width:A,maxWidth:A,height:A,maxHeight:A,size:A,top:A,right:A,bottom:A,left:A,padding:A,paddingTop:A,paddingRight:A,paddingBottom:A,paddingLeft:A,margin:A,marginTop:A,marginRight:A,marginBottom:A,marginLeft:A,rotate:nn,rotateX:nn,rotateY:nn,rotateZ:nn,scale:ji,scaleX:ji,scaleY:ji,scaleZ:ji,skew:nn,skewX:nn,skewY:nn,distance:A,translateX:A,translateY:A,translateZ:A,x:A,y:A,z:A,perspective:A,transformPerspective:A,opacity:ko,originX:Lp,originY:Lp,originZ:A,zIndex:Ep,backgroundPositionX:A,backgroundPositionY:A,fillOpacity:ko,strokeOpacity:ko,numOctaves:Ep};function cd(e,t,n,r){const{style:o,vars:i,transform:s,transformOrigin:a}=e;let l=!1,u=!1,d=!0;for(const c in t){const f=t[c];if(fy(c)){i[c]=f;continue}const y=py[c],m=XL(f,y);if(or.has(c)){if(l=!0,s[c]=m,!d)continue;f!==(y.default||0)&&(d=!1)}else c.startsWith("origin")?(u=!0,a[c]=m):o[c]=m}if(t.transform||(l||r?o.transform=YL(e.transform,n,d,r):o.transform&&(o.transform="none")),u){const{originX:c="50%",originY:f="50%",originZ:y=0}=a;o.transformOrigin=`${c} ${f} ${y}`}}const dd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function my(e,t,n){for(const r in t)!Ne(t[r])&&!cy(r,n)&&(e[r]=t[r])}function n3({transformTemplate:e},t,n){return k.useMemo(()=>{const r=dd();return cd(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function r3(e,t,n){const r=e.style||{},o={};return my(o,r,e),Object.assign(o,n3(e,t,n)),o}function o3(e,t,n){const r={},o=r3(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}const i3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function As(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||i3.has(e)}let hy=e=>!As(e);function s3(e){e&&(hy=t=>t.startsWith("on")?!As(t):e(t))}try{s3(require("@emotion/is-prop-valid").default)}catch{}function a3(e,t,n){const r={};for(const o in e)o==="values"&&typeof e.values=="object"||(hy(o)||n===!0&&As(o)||!t&&!As(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function Mp(e,t,n){return typeof e=="string"?e:A.transform(t+n*e)}function l3(e,t,n){const r=Mp(t,e.x,e.width),o=Mp(n,e.y,e.height);return`${r} ${o}`}const u3={offset:"stroke-dashoffset",array:"stroke-dasharray"},c3={offset:"strokeDashoffset",array:"strokeDasharray"};function d3(e,t,n=1,r=0,o=!0){e.pathLength=1;const i=o?u3:c3;e[i.offset]=A.transform(-r);const s=A.transform(t),a=A.transform(n);e[i.array]=`${s} ${a}`}function fd(e,{attrX:t,attrY:n,attrScale:r,originX:o,originY:i,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},d,c,f){if(cd(e,u,d,f),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:m,dimensions:v}=e;y.transform&&(v&&(m.transform=y.transform),delete y.transform),v&&(o!==void 0||i!==void 0||m.transform)&&(m.transformOrigin=l3(v,o!==void 0?o:.5,i!==void 0?i:.5)),t!==void 0&&(y.x=t),n!==void 0&&(y.y=n),r!==void 0&&(y.scale=r),s!==void 0&&d3(y,s,a,l,!1)}const gy=()=>({...dd(),attrs:{}}),pd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function f3(e,t,n,r){const o=k.useMemo(()=>{const i=gy();return fd(i,t,{enableHardwareAcceleration:!1},pd(r),e.transformTemplate),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};my(i,e.style,e),o.style={...i,...o.style}}return o}function p3(e=!1){return(n,r,o,{latestValues:i},s)=>{const l=(ad(n)?f3:o3)(r,i,s,n),u=a3(r,typeof n=="string",e),d=n!==k.Fragment?{...u,...l,ref:o}:{},{children:c}=r,f=k.useMemo(()=>Ne(c)?c.get():c,[c]);return k.createElement(n,{...d,children:f})}}function yy(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const i in n)e.style.setProperty(i,n[i])}const vy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function xy(e,t,n,r){yy(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(vy.has(o)?o:nd(o),t.attrs[o])}function md(e,t,n){var r;const{style:o}=e,i={};for(const s in o)(Ne(o[s])||t.style&&Ne(t.style[s])||cy(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(i[s]=o[s]);return i}function wy(e,t,n){const r=md(e,t,n);for(const o in e)if(Ne(e[o])||Ne(t[o])){const i=ai.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[i]=e[o]}return r}function hd(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}function ky(e){const t=k.useRef(null);return t.current===null&&(t.current=e()),t.current}const Pu=e=>Array.isArray(e),m3=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),h3=e=>Pu(e)?e[e.length-1]||0:e;function qi(e){const t=Ne(e)?e.get():e;return m3(t)?t.toValue():t}function g3({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,i){const s={latestValues:y3(r,o,i,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const Sy=e=>(t,n)=>{const r=k.useContext(ha),o=k.useContext(ga),i=()=>g3(e,t,r,o);return n?i():ky(i)};function y3(e,t,n,r){const o={},i=r(e,{});for(const f in i)o[f]=qi(i[f]);let{initial:s,animate:a}=e;const l=va(e),u=ly(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const c=d?a:s;return c&&typeof c!="boolean"&&!ya(c)&&(Array.isArray(c)?c:[c]).forEach(y=>{const m=hd(e,y);if(!m)return;const{transitionEnd:v,transition:w,...h}=m;for(const p in h){let g=h[p];if(Array.isArray(g)){const S=d?g.length-1:0;g=g[S]}g!==null&&(o[p]=g)}for(const p in v)o[p]=v[p]}),o}const _e=e=>e,{schedule:we,cancel:Cn,state:be,steps:sl}=ay(typeof requestAnimationFrame<"u"?requestAnimationFrame:_e,!0),v3={useVisualState:Sy({scrapeMotionValuesFromProps:wy,createRenderState:gy,onMount:(e,t,{renderState:n,latestValues:r})=>{we.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),we.render(()=>{fd(n,r,{enableHardwareAcceleration:!1},pd(t.tagName),e.transformTemplate),xy(t,n)})}})},x3={useVisualState:Sy({scrapeMotionValuesFromProps:md,createRenderState:dd})};function w3(e,{forwardMotionProps:t=!1},n,r){return{...ad(e)?v3:x3,preloadedFeatures:n,useRender:p3(t),createVisualElement:r,Component:e}}function Ft(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const by=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function xa(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const k3=e=>t=>by(t)&&e(t,xa(t));function zt(e,t,n,r){return Ft(e,t,k3(n),r)}const S3=(e,t)=>n=>t(e(n)),Ut=(...e)=>e.reduce(S3);function Ly(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Cp=Ly("dragHorizontal"),Pp=Ly("dragVertical");function Ey(e){let t=!1;if(e==="y")t=Pp();else if(e==="x")t=Cp();else{const n=Cp(),r=Pp();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function My(){const e=Ey(!0);return e?(e(),!1):!0}class Nn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Tp(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",o=(i,s)=>{if(i.pointerType==="touch"||My())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t);const l=a[r];l&&l(i,s)};return zt(e.current,n,o,{passive:!e.getProps()[r]})}class b3 extends Nn{mount(){this.unmount=Ut(Tp(this.node,!0),Tp(this.node,!1))}unmount(){}}class L3 extends Nn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ut(Ft(this.node.current,"focus",()=>this.onFocus()),Ft(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Cy=(e,t)=>t?e===t?!0:Cy(e,t.parentElement):!1;function al(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,xa(n))}class E3 extends Nn{constructor(){super(...arguments),this.removeStartListeners=_e,this.removeEndListeners=_e,this.removeAccessibleListeners=_e,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),i=zt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:c}=this.node.getProps();!c&&!Cy(this.node.current,a.target)?d&&d(a,l):u&&u(a,l)},{passive:!(r.onTap||r.onPointerUp)}),s=zt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Ut(i,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=i=>{if(i.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||al("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&d(l,u)})};this.removeEndListeners(),this.removeEndListeners=Ft(this.node.current,"keyup",s),al("down",(a,l)=>{this.startPress(a,l)})},n=Ft(this.node.current,"keydown",t),r=()=>{this.isPressing&&al("cancel",(i,s)=>this.cancelPress(i,s))},o=Ft(this.node.current,"blur",r);this.removeAccessibleListeners=Ut(n,o)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&r(t,n)}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!My()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&r(t,n)}mount(){const t=this.node.getProps(),n=zt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Ft(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Ut(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Tu=new WeakMap,ll=new WeakMap,M3=e=>{const t=Tu.get(e.target);t&&t(e)},C3=e=>{e.forEach(M3)};function P3({root:e,...t}){const n=e||document;ll.has(n)||ll.set(n,{});const r=ll.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(C3,{root:e,...t})),r[o]}function T3(e,t,n){const r=P3(t);return Tu.set(e,n),r.observe(e),()=>{Tu.delete(e),r.unobserve(e)}}const D3={some:0,all:1};class R3 extends Nn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:o="some",once:i}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:D3[o]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,i&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:c}=this.node.getProps(),f=u?d:c;f&&f(l)};return T3(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(j3(t,n))&&this.startObserver()}unmount(){}}function j3({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const N3={inView:{Feature:R3},tap:{Feature:E3},focus:{Feature:L3},hover:{Feature:b3}};function Py(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function _3(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function A3(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function wa(e,t,n){const r=e.getProps();return hd(r,t,n!==void 0?n:r.custom,_3(e),A3(e))}const kn=e=>e*1e3,$t=e=>e/1e3,O3={type:"spring",stiffness:500,damping:25,restSpeed:10},F3=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),V3={type:"keyframes",duration:.8},B3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},I3=(e,{keyframes:t})=>t.length>2?V3:or.has(e)?e.startsWith("scale")?F3(t[1]):O3:B3;function z3({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:i,repeatType:s,repeatDelay:a,from:l,elapsed:u,...d}){return!!Object.keys(d).length}function gd(e,t){return e[t]||e.default||e}const U3=e=>e!==null;function ka(e,{repeat:t,repeatType:n="loop"},r){const o=e.filter(U3),i=t&&n!=="loop"&&t%2===1?0:o.length-1;return!i||r===void 0?o[i]:r}let Xi;function $3(){Xi=void 0}const Sn={now:()=>(Xi===void 0&&Sn.set(be.isProcessing||jL.useManualTiming?be.timestamp:performance.now()),Xi),set:e=>{Xi=e,queueMicrotask($3)}},Ty=e=>/^0[^.\s]+$/u.test(e);function W3(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Ty(e):!0}let Dy=_e;const Ry=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),H3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function K3(e){const t=H3.exec(e);if(!t)return[,];const[,n,r,o]=t;return[`--${n??r}`,o]}function jy(e,t,n=1){const[r,o]=K3(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const s=i.trim();return Ry(s)?parseFloat(s):s}return ld(o)?jy(o,t,n+1):o}const G3=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Dp=e=>e===Hr||e===A,Rp=(e,t)=>parseFloat(e.split(", ")[t]),jp=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return Rp(o[1],t);{const i=r.match(/^matrix\((.+)\)$/u);return i?Rp(i[1],e):0}},Y3=new Set(["x","y","z"]),Q3=ai.filter(e=>!Y3.has(e));function q3(e){const t=[];return Q3.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Br={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:jp(4,13),y:jp(5,14)};Br.translateX=Br.x;Br.translateY=Br.y;const Ny=e=>t=>t.test(e),X3={test:e=>e==="auto",parse:e=>e},_y=[Hr,A,Dt,nn,t3,e3,X3],Np=e=>_y.find(Ny(e)),Yn=new Set;let Du=!1,Ru=!1;function Ay(){if(Ru){const e=Array.from(Yn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const o=q3(r);o.length&&(n.set(r,o),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const o=n.get(r);o&&o.forEach(([i,s])=>{var a;(a=r.getValue(i))===null||a===void 0||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Ru=!1,Du=!1,Yn.forEach(e=>e.complete()),Yn.clear()}function Oy(){Yn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ru=!0)})}function J3(){Oy(),Ay()}class yd{constructor(t,n,r,o,i,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=o,this.element=i,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Yn.add(this),Du||(Du=!0,we.read(Oy),we.resolveKeyframes(Ay))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:o}=this;for(let i=0;i<t.length;i++)if(t[i]===null)if(i===0){const s=o==null?void 0:o.get(),a=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),o&&s===void 0&&o.set(t[0])}else t[i]=t[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Yn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Yn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const vd=(e,t)=>n=>!!(li(n)&&ZL.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Fy=(e,t,n)=>r=>{if(!li(r))return r;const[o,i,s,a]=r.match(ud);return{[e]:parseFloat(o),[t]:parseFloat(i),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},Z3=e=>Mn(0,255,e),ul={...Hr,transform:e=>Math.round(Z3(e))},Wn={test:vd("rgb","red"),parse:Fy("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+ul.transform(e)+", "+ul.transform(t)+", "+ul.transform(n)+", "+So(ko.transform(r))+")"};function e5(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const ju={test:vd("#"),parse:e5,transform:Wn.transform},kr={test:vd("hsl","hue"),parse:Fy("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Dt.transform(So(t))+", "+Dt.transform(So(n))+", "+So(ko.transform(r))+")"},Re={test:e=>Wn.test(e)||ju.test(e)||kr.test(e),parse:e=>Wn.test(e)?Wn.parse(e):kr.test(e)?kr.parse(e):ju.parse(e),transform:e=>li(e)?e:e.hasOwnProperty("red")?Wn.transform(e):kr.transform(e)};function t5(e){var t,n;return isNaN(e)&&li(e)&&(((t=e.match(ud))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(JL))===null||n===void 0?void 0:n.length)||0)>0}const Vy="number",By="color",n5="var",r5="var(",_p="${}",o5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Os(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},o=[];let i=0;const a=t.replace(o5,l=>(Re.test(l)?(r.color.push(i),o.push(By),n.push(Re.parse(l))):l.startsWith(r5)?(r.var.push(i),o.push(n5),n.push(l)):(r.number.push(i),o.push(Vy),n.push(parseFloat(l))),++i,_p)).split(_p);return{values:n,split:a,indexes:r,types:o}}function Iy(e){return Os(e).values}function zy(e){const{split:t,types:n}=Os(e),r=t.length;return o=>{let i="";for(let s=0;s<r;s++)if(i+=t[s],o[s]!==void 0){const a=n[s];a===Vy?i+=So(o[s]):a===By?i+=Re.transform(o[s]):i+=o[s]}return i}}const i5=e=>typeof e=="number"?0:e;function s5(e){const t=Iy(e);return zy(e)(t.map(i5))}const Pn={test:t5,parse:Iy,createTransformer:zy,getAnimatableNone:s5},a5=new Set(["brightness","contrast","saturate","opacity"]);function l5(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(ud)||[];if(!r)return e;const o=n.replace(r,"");let i=a5.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+o+")"}const u5=/\b([a-z-]*)\(.*?\)/gu,Nu={...Pn,getAnimatableNone:e=>{const t=e.match(u5);return t?t.map(l5).join(" "):e}},c5={...py,color:Re,backgroundColor:Re,outlineColor:Re,fill:Re,stroke:Re,borderColor:Re,borderTopColor:Re,borderRightColor:Re,borderBottomColor:Re,borderLeftColor:Re,filter:Nu,WebkitFilter:Nu},xd=e=>c5[e];function Uy(e,t){let n=xd(e);return n!==Nu&&(n=Pn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}function d5(e,t,n){let r=0,o;for(;r<e.length&&!o;)typeof e[r]=="string"&&e[r]!=="none"&&e[r]!=="0"&&(o=e[r]),r++;if(o&&n)for(const i of t)e[i]=Uy(n,o)}class $y extends yd{constructor(t,n,r,o){super(t,n,r,o,o==null?void 0:o.owner,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){const u=t[l];if(typeof u=="string"&&ld(u)){const d=jy(u,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=u)}}if(!G3.has(r)||t.length!==2)return this.resolveNoneKeyframes();const[o,i]=t,s=Np(o),a=Np(i);if(s!==a)if(Dp(s)&&Dp(a))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let o=0;o<t.length;o++)W3(t[o])&&r.push(o);r.length&&d5(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Br[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const o=n[n.length-1];o!==void 0&&t.getValue(r,o).jump(o,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:o}=this;if(!n.current)return;const i=n.getValue(r);i&&i.jump(this.measuredOrigin,!1);const s=o.length-1,a=o[s];o[s]=Br[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function f5(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ap=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Pn.test(e)||e==="0")&&!e.startsWith("url("));function p5(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function m5(e,t,n,r){const o=e[0];if(o===null)return!1;const i=e[e.length-1],s=Ap(o,t),a=Ap(i,t);return!s||!a?!1:p5(e)||n==="spring"&&r}class Wy{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:o=0,repeatDelay:i=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.options={autoplay:t,delay:n,type:r,repeat:o,repeatDelay:i,repeatType:s,...a},this.updateFinishedPromise()}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&J3(),this._resolved}onKeyframesResolved(t,n){this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:i,delay:s,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!m5(t,r,o,i))if(s)this.options.duration=0;else{l==null||l(ka(t,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function Hy(e,t){return t?e*(1e3/t):0}const h5=5;function Ky(e,t,n){const r=Math.max(t-h5,0);return Hy(n-e(r),t-r)}const cl=.001,g5=.01,y5=10,v5=.05,x5=1;function w5({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,i,s=1-t;s=Mn(v5,x5,s),e=Mn(g5,y5,$t(e)),s<1?(o=u=>{const d=u*s,c=d*e,f=d-n,y=_u(u,s),m=Math.exp(-c);return cl-f/y*m},i=u=>{const c=u*s*e,f=c*n+n,y=Math.pow(s,2)*Math.pow(u,2)*e,m=Math.exp(-c),v=_u(Math.pow(u,2),s);return(-o(u)+cl>0?-1:1)*((f-y)*m)/v}):(o=u=>{const d=Math.exp(-u*e),c=(u-n)*e+1;return-cl+d*c},i=u=>{const d=Math.exp(-u*e),c=(n-u)*(e*e);return d*c});const a=5/e,l=S5(o,i,a);if(e=kn(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const k5=12;function S5(e,t,n){let r=n;for(let o=1;o<k5;o++)r=r-e(r)/t(r);return r}function _u(e,t){return e*Math.sqrt(1-t*t)}const b5=["duration","bounce"],L5=["stiffness","damping","mass"];function Op(e,t){return t.some(n=>e[n]!==void 0)}function E5(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Op(e,L5)&&Op(e,b5)){const n=w5(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Gy({keyframes:e,restDelta:t,restSpeed:n,...r}){const o=e[0],i=e[e.length-1],s={done:!1,value:o},{stiffness:a,damping:l,mass:u,duration:d,velocity:c,isResolvedFromDuration:f}=E5({...r,velocity:-$t(r.velocity||0)}),y=c||0,m=l/(2*Math.sqrt(a*u)),v=i-o,w=$t(Math.sqrt(a/u)),h=Math.abs(v)<5;n||(n=h?.01:2),t||(t=h?.005:.5);let p;if(m<1){const g=_u(w,m);p=S=>{const L=Math.exp(-m*w*S);return i-L*((y+m*w*v)/g*Math.sin(g*S)+v*Math.cos(g*S))}}else if(m===1)p=g=>i-Math.exp(-w*g)*(v+(y+w*v)*g);else{const g=w*Math.sqrt(m*m-1);p=S=>{const L=Math.exp(-m*w*S),E=Math.min(g*S,300);return i-L*((y+m*w*v)*Math.sinh(E)+g*v*Math.cosh(E))/g}}return{calculatedDuration:f&&d||null,next:g=>{const S=p(g);if(f)s.done=g>=d;else{let L=y;g!==0&&(m<1?L=Ky(p,g,S):L=0);const E=Math.abs(L)<=n,P=Math.abs(i-S)<=t;s.done=E&&P}return s.value=s.done?i:S,s}}}function Fp({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:i=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:d}){const c=e[0],f={done:!1,value:c},y=b=>a!==void 0&&b<a||l!==void 0&&b>l,m=b=>a===void 0?l:l===void 0||Math.abs(a-b)<Math.abs(l-b)?a:l;let v=n*t;const w=c+v,h=s===void 0?w:s(w);h!==w&&(v=h-c);const p=b=>-v*Math.exp(-b/r),g=b=>h+p(b),S=b=>{const _=p(b),N=g(b);f.done=Math.abs(_)<=u,f.value=f.done?h:N};let L,E;const P=b=>{y(f.value)&&(L=b,E=Gy({keyframes:[f.value,m(f.value)],velocity:Ky(g,b,f.value),damping:o,stiffness:i,restDelta:u,restSpeed:d}))};return P(0),{calculatedDuration:null,next:b=>{let _=!1;return!E&&L===void 0&&(_=!0,S(b),P(b)),L!==void 0&&b>=L?E.next(b-L):(!_&&S(b),f)}}}const Yy=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,M5=1e-7,C5=12;function P5(e,t,n,r,o){let i,s,a=0;do s=t+(n-t)/2,i=Yy(s,r,o)-e,i>0?n=s:t=s;while(Math.abs(i)>M5&&++a<C5);return s}function ci(e,t,n,r){if(e===t&&n===r)return _e;const o=i=>P5(i,0,1,e,n);return i=>i===0||i===1?i:Yy(o(i),t,r)}const T5=ci(.42,0,1,1),D5=ci(0,0,.58,1),Qy=ci(.42,0,.58,1),R5=e=>Array.isArray(e)&&typeof e[0]!="number",qy=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Xy=e=>t=>1-e(1-t),wd=e=>1-Math.sin(Math.acos(e)),Jy=Xy(wd),j5=qy(wd),Zy=ci(.33,1.53,.69,.99),kd=Xy(Zy),N5=qy(kd),_5=e=>(e*=2)<1?.5*kd(e):.5*(2-Math.pow(2,-10*(e-1))),A5={linear:_e,easeIn:T5,easeInOut:Qy,easeOut:D5,circIn:wd,circInOut:j5,circOut:Jy,backIn:kd,backInOut:N5,backOut:Zy,anticipate:_5},Vp=e=>{if(Array.isArray(e)){Dy(e.length===4);const[t,n,r,o]=e;return ci(t,n,r,o)}else if(typeof e=="string")return A5[e];return e},Qo=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},ne=(e,t,n)=>e+(t-e)*n;function dl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function O5({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,i=0,s=0;if(!t)o=i=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;o=dl(l,a,e+1/3),i=dl(l,a,e),s=dl(l,a,e-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(s*255),alpha:r}}const fl=(e,t,n)=>{const r=e*e,o=n*(t*t-r)+r;return o<0?0:Math.sqrt(o)},F5=[ju,Wn,kr],V5=e=>F5.find(t=>t.test(e));function Bp(e){const t=V5(e);let n=t.parse(e);return t===kr&&(n=O5(n)),n}const Ip=(e,t)=>{const n=Bp(e),r=Bp(t),o={...n};return i=>(o.red=fl(n.red,r.red,i),o.green=fl(n.green,r.green,i),o.blue=fl(n.blue,r.blue,i),o.alpha=ne(n.alpha,r.alpha,i),Wn.transform(o))};function Au(e,t){return n=>n>0?t:e}function B5(e,t){return n=>ne(e,t,n)}function Sd(e){return typeof e=="number"?B5:typeof e=="string"?ld(e)?Au:Re.test(e)?Ip:U5:Array.isArray(e)?ev:typeof e=="object"?Re.test(e)?Ip:I5:Au}function ev(e,t){const n=[...e],r=n.length,o=e.map((i,s)=>Sd(i)(i,t[s]));return i=>{for(let s=0;s<r;s++)n[s]=o[s](i);return n}}function I5(e,t){const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=Sd(e[o])(e[o],t[o]));return o=>{for(const i in r)n[i]=r[i](o);return n}}function z5(e,t){var n;const r=[],o={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const s=t.types[i],a=e.indexes[s][o[s]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[i]=l,o[s]++}return r}const U5=(e,t)=>{const n=Pn.createTransformer(t),r=Os(e),o=Os(t);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Ut(ev(z5(r,o),o.values),n):Au(e,t)};function tv(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?ne(e,t,n):Sd(e)(e,t)}function $5(e,t,n){const r=[],o=n||tv,i=e.length-1;for(let s=0;s<i;s++){let a=o(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||_e:t;a=Ut(l,a)}r.push(a)}return r}function W5(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const i=e.length;if(Dy(i===t.length),i===1)return()=>t[0];if(i===2&&e[0]===e[1])return()=>t[1];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=$5(t,r,o),a=s.length,l=u=>{let d=0;if(a>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const c=Qo(e[d],e[d+1],u);return s[d](c)};return n?u=>l(Mn(e[0],e[i-1],u)):l}function H5(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=Qo(0,t,r);e.push(ne(n,1,o))}}function K5(e){const t=[0];return H5(t,e.length-1),t}function G5(e,t){return e.map(n=>n*t)}function Y5(e,t){return e.map(()=>t||Qy).splice(0,e.length-1)}function Fs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const o=R5(r)?r.map(Vp):Vp(r),i={done:!1,value:t[0]},s=G5(n&&n.length===t.length?n:K5(t),e),a=W5(s,t,{ease:Array.isArray(o)?o:Y5(t,o)});return{calculatedDuration:e,next:l=>(i.value=a(l),i.done=l>=e,i)}}const zp=2e4;function Q5(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<zp;)t+=n,r=e.next(t);return t>=zp?1/0:t}const q5=e=>{const t=({timestamp:n})=>e(n);return{start:()=>we.update(t,!0),stop:()=>Cn(t),now:()=>be.isProcessing?be.timestamp:Sn.now()}},X5={decay:Fp,inertia:Fp,tween:Fs,keyframes:Fs,spring:Gy},J5=e=>e/100;class bd extends Wy{constructor({KeyframeResolver:t=yd,...n}){super(n),this.holdTime=null,this.startTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:a}=this.options;a&&a()};const{name:r,motionValue:o,keyframes:i}=this.options,s=(a,l)=>this.onKeyframesResolved(a,l);r&&o&&o.owner?this.resolver=o.owner.resolveKeyframes(i,s,r,o):this.resolver=new t(i,s,r,o),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:i,velocity:s=0}=this.options,a=X5[n]||Fs;let l,u;a!==Fs&&typeof t[0]!="number"&&(l=Ut(J5,tv(t[0],t[1])),t=[0,100]);const d=a({...this.options,keyframes:t});i==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-s})),d.calculatedDuration===null&&(d.calculatedDuration=Q5(d));const{calculatedDuration:c}=d,f=c+o,y=f*(r+1)-o;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:c,resolvedDuration:f,totalDuration:y}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:b}=this.options;return{done:!0,value:b[b.length-1]}}const{finalKeyframe:o,generator:i,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:d,resolvedDuration:c}=r;if(this.startTime===null)return i.next(0);const{delay:f,repeat:y,repeatType:m,repeatDelay:v,onUpdate:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const h=this.currentTime-f*(this.speed>=0?1:-1),p=this.speed>=0?h<0:h>d;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let g=this.currentTime,S=i;if(y){const b=Math.min(this.currentTime,d)/c;let _=Math.floor(b),N=b%1;!N&&b>=1&&(N=1),N===1&&_--,_=Math.min(_,y+1),!!(_%2)&&(m==="reverse"?(N=1-N,v&&(N-=v/c)):m==="mirror"&&(S=s)),g=Mn(0,1,N)*c}const L=p?{done:!1,value:l[0]}:S.next(g);a&&(L.value=a(L.value));let{done:E}=L;!p&&u!==null&&(E=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return P&&o!==void 0&&(L.value=ka(l,this.options,o)),w&&w(L.value),P&&this.finish(),L}get duration(){const{resolved:t}=this;return t?$t(t.calculatedDuration):0}get time(){return $t(this.currentTime)}set time(t){t=kn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=$t(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=q5,onPlay:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:(!this.startTime||this.state==="finished")&&(this.startTime=r),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const nv=e=>Array.isArray(e)&&typeof e[0]=="number";function rv(e){return!!(!e||typeof e=="string"&&e in Ld||nv(e)||Array.isArray(e)&&e.every(rv))}const lo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ld={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:lo([0,.65,.55,1]),circOut:lo([.55,0,1,.45]),backIn:lo([.31,.01,.66,-.59]),backOut:lo([.33,1.53,.69,.99])};function Z5(e){return ov(e)||Ld.easeOut}function ov(e){if(e)return nv(e)?lo(e):Array.isArray(e)?e.map(Z5):Ld[e]}function eE(e,t,n,{delay:r=0,duration:o=300,repeat:i=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=ov(a);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:o,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:i+1,direction:s==="reverse"?"alternate":"normal"})}const tE=f5(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),nE=new Set(["opacity","clipPath","filter","transform"]),Vs=10,rE=2e4;function oE(e){return e.type==="spring"||e.name==="backgroundColor"||!rv(e.ease)}function iE(e,t){const n=new bd({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const o=[];let i=0;for(;!r.done&&i<rE;)r=n.sample(i),o.push(r.value),i+=Vs;return{times:void 0,keyframes:o,duration:i-Vs,ease:"linear"}}class Up extends Wy{constructor(t){super(t);const{name:n,motionValue:r,keyframes:o}=this.options;this.resolver=new $y(o,(i,s)=>this.onKeyframesResolved(i,s),n,r),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:o=300,times:i,ease:s,type:a,motionValue:l,name:u}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(oE(this.options)){const{onComplete:c,onUpdate:f,motionValue:y,...m}=this.options,v=iE(t,m);t=v.keyframes,t.length===1&&(t[1]=t[0]),o=v.duration,i=v.times,s=v.ease,a="keyframes"}const d=eE(l.owner.current,u,t,{...this.options,duration:o,times:i,ease:s});return d.startTime=Sn.now(),this.pendingTimeline?(d.timeline=this.pendingTimeline,this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:c}=this.options;l.set(ka(t,this.options,n)),c&&c(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:o,times:i,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return $t(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return $t(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=kn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return _e;const{animation:r}=n;r.timeline=t,r.onfinish=null}return _e}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:o,type:i,ease:s,times:a}=t;if(!(n.playState==="idle"||n.playState==="finished")){if(this.time){const{motionValue:l,onUpdate:u,onComplete:d,...c}=this.options,f=new bd({...c,keyframes:r,duration:o,type:i,ease:s,times:a,isGenerator:!0}),y=kn(this.time);l.setWithVelocity(f.sample(y-Vs).value,f.sample(y).value,Vs)}this.cancel()}}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:o,repeatType:i,damping:s,type:a}=t;return tE()&&r&&nE.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!o&&i!=="mirror"&&s!==0&&a!=="inertia"}}const Ed=(e,t,n,r={},o,i)=>s=>{const a=gd(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-kn(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:f=>{t.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:i?void 0:o};z3(a)||(d={...d,...I3(e,d)}),d.duration&&(d.duration=kn(d.duration)),d.repeatDelay&&(d.repeatDelay=kn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let c=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(c=!0)),c&&!i&&t.get()!==void 0){const f=ka(d.keyframes,a);if(f!==void 0){we.update(()=>{d.onUpdate(f),d.onComplete()});return}}return!i&&Up.supports(d)?new Up(d):new bd(d)};function Bs(e){return!!(Ne(e)&&e.add)}function Md(e,t){e.indexOf(t)===-1&&e.push(t)}function Cd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Pd{constructor(){this.subscriptions=[]}add(t){return Md(this.subscriptions,t),()=>Cd(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,r);else for(let i=0;i<o;i++){const s=this.subscriptions[i];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const $p=30,sE=e=>!isNaN(parseFloat(e));class aE{constructor(t,n={}){this.version="11.1.7",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,o=!0)=>{const i=Sn.now();this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.canTrackVelocity=sE(this.current),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Sn.now()}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Pd);const r=this.events[t].add(n);return t==="change"?()=>{r(),we.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Sn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>$p)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,$p);return Hy(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function qo(e,t){return new aE(e,t)}function lE(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,qo(n))}function uE(e,t){const n=wa(e,t);let{transitionEnd:r={},transition:o={},...i}=n||{};i={...i,...r};for(const s in i){const a=h3(i[s]);lE(e,s,a)}}function cE({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function iv(e,t,{delay:n=0,transitionOverride:r,type:o}={}){var i;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;const u=e.getValue("willChange");r&&(s=r);const d=[],c=o&&e.animationState&&e.animationState.getState()[o];for(const f in l){const y=e.getValue(f,(i=e.latestValues[f])!==null&&i!==void 0?i:null),m=l[f];if(m===void 0||c&&cE(c,f))continue;const v={delay:n,elapsed:0,...gd(s||{},f)};let w=!1;if(window.HandoffAppearAnimations){const g=e.getProps()[sy];if(g){const S=window.HandoffAppearAnimations(g,f);S!==null&&(v.elapsed=S,w=!0)}}y.start(Ed(f,y,m,e.shouldReduceMotion&&or.has(f)?{type:!1}:v,e,w));const h=y.animation;h&&(Bs(u)&&(u.add(f),h.then(()=>u.remove(f))),d.push(h))}return a&&Promise.all(d).then(()=>{we.update(()=>{a&&uE(e,a)})}),d}function Ou(e,t,n={}){var r;const o=wa(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=o||{};n.transitionOverride&&(i=n.transitionOverride);const s=o?()=>Promise.all(iv(e,o,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:c,staggerDirection:f}=i;return dE(e,t,d+u,c,f,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[u,d]=l==="beforeChildren"?[s,a]:[a,s];return u().then(()=>d())}else return Promise.all([s(),a(n.delay)])}function dE(e,t,n=0,r=0,o=1,i){const s=[],a=(e.variantChildren.size-1)*r,l=o===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(fE).forEach((u,d)=>{u.notify("AnimationStart",t),s.push(Ou(u,t,{...i,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function fE(e,t){return e.sortNodePosition(t)}function pE(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(i=>Ou(e,i,n));r=Promise.all(o)}else if(typeof t=="string")r=Ou(e,t,n);else{const o=typeof t=="function"?wa(e,t,n.custom):t;r=Promise.all(iv(e,o,n))}return r.then(()=>{we.postRender(()=>{e.notify("AnimationComplete",t)})})}const mE=[...od].reverse(),hE=od.length;function gE(e){return t=>Promise.all(t.map(({animation:n,options:r})=>pE(e,n,r)))}function yE(e){let t=gE(e);const n=xE();let r=!0;const o=l=>(u,d)=>{var c;const f=wa(e,d,l==="exit"?(c=e.presenceContext)===null||c===void 0?void 0:c.custom:void 0);if(f){const{transition:y,transitionEnd:m,...v}=f;u={...u,...v,...m}}return u};function i(l){t=l(e)}function s(l){const u=e.getProps(),d=e.getVariantContext(!0)||{},c=[],f=new Set;let y={},m=1/0;for(let w=0;w<hE;w++){const h=mE[w],p=n[h],g=u[h]!==void 0?u[h]:d[h],S=Go(g),L=h===l?p.isActive:null;L===!1&&(m=w);let E=g===d[h]&&g!==u[h]&&S;if(E&&r&&e.manuallyAnimateOnMount&&(E=!1),p.protectedKeys={...y},!p.isActive&&L===null||!g&&!p.prevProp||ya(g)||typeof g=="boolean")continue;let b=vE(p.prevProp,g)||h===l&&p.isActive&&!E&&S||w>m&&S,_=!1;const N=Array.isArray(g)?g:[g];let R=N.reduce(o(h),{});L===!1&&(R={});const{prevResolvedValues:D={}}=p,B={...D,...R},O=z=>{b=!0,f.has(z)&&(_=!0,f.delete(z)),p.needsAnimating[z]=!0;const Y=e.getValue(z);Y&&(Y.liveStyle=!1)};for(const z in B){const Y=R[z],Pe=D[z];if(y.hasOwnProperty(z))continue;let T=!1;Pu(Y)&&Pu(Pe)?T=!Py(Y,Pe):T=Y!==Pe,T?Y!=null?O(z):f.add(z):Y!==void 0&&f.has(z)?O(z):p.protectedKeys[z]=!0}p.prevProp=g,p.prevResolvedValues=R,p.isActive&&(y={...y,...R}),r&&e.blockInitialAnimation&&(b=!1),b&&(!E||_)&&c.push(...N.map(z=>({animation:z,options:{type:h}})))}if(f.size){const w={};f.forEach(h=>{const p=e.getBaseTarget(h),g=e.getValue(h);g&&(g.liveStyle=!0),w[h]=p??null}),c.push({animation:w})}let v=!!c.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(v=!1),r=!1,v?t(c):Promise.resolve()}function a(l,u){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(f=>{var y;return(y=f.animationState)===null||y===void 0?void 0:y.setActive(l,u)}),n[l].isActive=u;const c=s(l);for(const f in n)n[f].protectedKeys={};return c}return{animateChanges:s,setActive:a,setAnimateFunction:i,getState:()=>n}}function vE(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Py(t,e):!1}function _n(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function xE(){return{animate:_n(!0),whileInView:_n(),whileHover:_n(),whileTap:_n(),whileDrag:_n(),whileFocus:_n(),exit:_n()}}class wE extends Nn{constructor(t){super(t),t.animationState||(t.animationState=yE(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),ya(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let kE=0;class SE extends Nn{constructor(){super(...arguments),this.id=kE++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const o=this.node.animationState.setActive("exit",!t);n&&!t&&o.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const bE={animation:{Feature:wE},exit:{Feature:SE}},Wp=(e,t)=>Math.abs(e-t);function LE(e,t){const n=Wp(e.x,t.x),r=Wp(e.y,t.y);return Math.sqrt(n**2+r**2)}class sv{constructor(t,n,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const c=ml(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,y=LE(c.offset,{x:0,y:0})>=3;if(!f&&!y)return;const{point:m}=c,{timestamp:v}=be;this.history.push({...m,timestamp:v});const{onStart:w,onMove:h}=this.handlers;f||(w&&w(this.lastMoveEvent,c),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,c)},this.handlePointerMove=(c,f)=>{this.lastMoveEvent=c,this.lastMoveEventInfo=pl(f,this.transformPagePoint),we.update(this.updatePoint,!0)},this.handlePointerUp=(c,f)=>{this.end();const{onEnd:y,onSessionEnd:m,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=ml(c.type==="pointercancel"?this.lastMoveEventInfo:pl(f,this.transformPagePoint),this.history);this.startEvent&&y&&y(c,w),m&&m(c,w)},!by(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.contextWindow=o||window;const s=xa(t),a=pl(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=be;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,ml(a,this.history)),this.removeListeners=Ut(zt(this.contextWindow,"pointermove",this.handlePointerMove),zt(this.contextWindow,"pointerup",this.handlePointerUp),zt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Cn(this.updatePoint)}}function pl(e,t){return t?{point:t(e.point)}:e}function Hp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ml({point:e},t){return{point:e,delta:Hp(e,av(t)),offset:Hp(e,EE(t)),velocity:ME(t,.1)}}function EE(e){return e[0]}function av(e){return e[e.length-1]}function ME(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=av(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>kn(t)));)n--;if(!r)return{x:0,y:0};const i=$t(o.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const s={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function ot(e){return e.max-e.min}function Fu(e,t=0,n=.01){return Math.abs(e-t)<=n}function Kp(e,t,n,r=.5){e.origin=r,e.originPoint=ne(t.min,t.max,e.origin),e.scale=ot(n)/ot(t),(Fu(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=ne(n.min,n.max,e.origin)-e.originPoint,(Fu(e.translate)||isNaN(e.translate))&&(e.translate=0)}function bo(e,t,n,r){Kp(e.x,t.x,n.x,r?r.originX:void 0),Kp(e.y,t.y,n.y,r?r.originY:void 0)}function Gp(e,t,n){e.min=n.min+t.min,e.max=e.min+ot(t)}function CE(e,t,n){Gp(e.x,t.x,n.x),Gp(e.y,t.y,n.y)}function Yp(e,t,n){e.min=t.min-n.min,e.max=e.min+ot(t)}function Lo(e,t,n){Yp(e.x,t.x,n.x),Yp(e.y,t.y,n.y)}function PE(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ne(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ne(n,e,r.max):Math.min(e,n)),e}function Qp(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function TE(e,{top:t,left:n,bottom:r,right:o}){return{x:Qp(e.x,n,o),y:Qp(e.y,t,r)}}function qp(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function DE(e,t){return{x:qp(e.x,t.x),y:qp(e.y,t.y)}}function RE(e,t){let n=.5;const r=ot(e),o=ot(t);return o>r?n=Qo(t.min,t.max-r,e.min):r>o&&(n=Qo(e.min,e.max-o,t.min)),Mn(0,1,n)}function jE(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Vu=.35;function NE(e=Vu){return e===!1?e=0:e===!0&&(e=Vu),{x:Xp(e,"left","right"),y:Xp(e,"top","bottom")}}function Xp(e,t,n){return{min:Jp(e,t),max:Jp(e,n)}}function Jp(e,t){return typeof e=="number"?e:e[t]||0}const Zp=()=>({translate:0,scale:1,origin:0,originPoint:0}),Sr=()=>({x:Zp(),y:Zp()}),em=()=>({min:0,max:0}),ae=()=>({x:em(),y:em()});function lt(e){return[e("x"),e("y")]}function lv({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function _E({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function AE(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function hl(e){return e===void 0||e===1}function Bu({scale:e,scaleX:t,scaleY:n}){return!hl(e)||!hl(t)||!hl(n)}function Vn(e){return Bu(e)||uv(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function uv(e){return tm(e.x)||tm(e.y)}function tm(e){return e&&e!=="0%"}function Is(e,t,n){const r=e-n,o=t*r;return n+o}function nm(e,t,n,r,o){return o!==void 0&&(e=Is(e,o,r)),Is(e,n,r)+t}function Iu(e,t=0,n=1,r,o){e.min=nm(e.min,t,n,r,o),e.max=nm(e.max,t,n,r,o)}function cv(e,{x:t,y:n}){Iu(e.x,t.translate,t.scale,t.originPoint),Iu(e.y,n.translate,n.scale,n.originPoint)}function OE(e,t,n,r=!1){const o=n.length;if(!o)return;t.x=t.y=1;let i,s;for(let a=0;a<o;a++){i=n[a],s=i.projectionDelta;const l=i.instance;l&&l.style&&l.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&br(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,cv(e,s)),r&&Vn(i.latestValues)&&br(e,i.latestValues))}t.x=rm(t.x),t.y=rm(t.y)}function rm(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function sn(e,t){e.min=e.min+t,e.max=e.max+t}function om(e,t,[n,r,o]){const i=t[o]!==void 0?t[o]:.5,s=ne(e.min,e.max,i);Iu(e,t[n],t[r],s,t.scale)}const FE=["x","scaleX","originX"],VE=["y","scaleY","originY"];function br(e,t){om(e.x,t,FE),om(e.y,t,VE)}function dv(e,t){return lv(AE(e.getBoundingClientRect(),t))}function BE(e,t,n){const r=dv(e,n),{scroll:o}=t;return o&&(sn(r.x,o.offset.x),sn(r.y,o.offset.y)),r}const fv=({current:e})=>e?e.ownerDocument.defaultView:null,IE=new WeakMap;class zE{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ae(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=d=>{const{dragSnapToOrigin:c}=this.getProps();c?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(xa(d,"page").point)},i=(d,c)=>{const{drag:f,dragPropagation:y,onDragStart:m}=this.getProps();if(f&&!y&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Ey(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),lt(w=>{let h=this.getAxisMotionValue(w).get()||0;if(Dt.test(h)){const{projection:p}=this.visualElement;if(p&&p.layout){const g=p.layout.layoutBox[w];g&&(h=ot(g)*(parseFloat(h)/100))}}this.originPoint[w]=h}),m&&m(d,c);const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},s=(d,c)=>{const{dragPropagation:f,dragDirectionLock:y,onDirectionLock:m,onDrag:v}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:w}=c;if(y&&this.currentDirection===null){this.currentDirection=UE(w),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",c.point,w),this.updateAxis("y",c.point,w),this.visualElement.render(),v&&v(d,c)},a=(d,c)=>this.stop(d,c),l=()=>lt(d=>{var c;return this.getAnimationState(d)==="paused"&&((c=this.getAxisMotionValue(d).animation)===null||c===void 0?void 0:c.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new sv(t,{onSessionStart:o,onStart:i,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:fv(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:i}=this.getProps();i&&i(t,n)}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!Ni(t,o,this.currentDirection))return;const i=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=PE(s,this.constraints[t],this.elastic[t])),i.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,i=this.constraints;n&&wr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=TE(o.layoutBox,n):this.constraints=!1,this.elastic=NE(r),i!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&lt(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=jE(o.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!wr(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const i=BE(r,o.root,this.visualElement.getTransformPagePoint());let s=DE(o.layout.layoutBox,i);if(n){const a=n(_E(s));this.hasMutatedConstraints=!!a,a&&(s=lv(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:i,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=lt(d=>{if(!Ni(d,n,this.currentDirection))return;let c=l&&l[d]||{};s&&(c={min:0,max:0});const f=o?200:1e6,y=o?40:1e7,m={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(d,m)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Ed(t,r,0,n,this.visualElement))}stopAnimation(){lt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){lt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),o=r[n];return o||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){lt(n=>{const{drag:r}=this.getProps();if(!Ni(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,i=this.getAxisMotionValue(n);if(o&&o.layout){const{min:s,max:a}=o.layout.layoutBox[n];i.set(t[n]-ne(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!wr(n)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};lt(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();o[s]=RE({min:l,max:l},this.constraints[s])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),lt(s=>{if(!Ni(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(ne(l,u,o[s]))})}addListeners(){if(!this.visualElement.current)return;IE.set(this.visualElement,this);const t=this.visualElement.current,n=zt(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();wr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,i=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),r();const s=Ft(window,"resize",()=>this.scalePositionWithinConstraints()),a=o.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(lt(d=>{const c=this.getAxisMotionValue(d);c&&(this.originPoint[d]+=l[d].translate,c.set(c.get()+l[d].translate))}),this.visualElement.render())});return()=>{s(),n(),i(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:i=!1,dragElastic:s=Vu,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:i,dragElastic:s,dragMomentum:a}}}function Ni(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function UE(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class $E extends Nn{constructor(t){super(t),this.removeGroupControls=_e,this.removeListeners=_e,this.controls=new zE(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||_e}unmount(){this.removeGroupControls(),this.removeListeners()}}const im=e=>(t,n)=>{e&&e(t,n)};class WE extends Nn{constructor(){super(...arguments),this.removePointerDownListener=_e}onPointerDown(t){this.session=new sv(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:fv(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:im(t),onStart:im(n),onMove:r,onEnd:(i,s)=>{delete this.session,o&&o(i,s)}}}mount(){this.removePointerDownListener=zt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function HE(){const e=k.useContext(ga);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=k.useId();return k.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}const Ji={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function sm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const to={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(A.test(e))e=parseFloat(e);else return e;const n=sm(e,t.target.x),r=sm(e,t.target.y);return`${n}% ${r}%`}},KE={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=Pn.parse(e);if(o.length>5)return r;const i=Pn.createTransformer(e),s=typeof o[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;o[0+s]/=a,o[1+s]/=l;const u=ne(a,l,.5);return typeof o[2+s]=="number"&&(o[2+s]/=u),typeof o[3+s]=="number"&&(o[3+s]/=u),i(o)}};class GE extends k.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:i}=t;HL(YE),i&&(n.group&&n.group.add(i),r&&r.register&&o&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),Ji.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:i}=this.props,s=r.projection;return s&&(s.isPresent=i,o||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?s.promote():s.relegate()||we.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),rd.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function pv(e){const[t,n]=HE(),r=k.useContext(sd);return x.jsx(GE,{...e,layoutGroup:r,switchLayoutGroup:k.useContext(uy),isPresent:t,safeToRemove:n})}const YE={borderRadius:{...to,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:to,borderTopRightRadius:to,borderBottomLeftRadius:to,borderBottomRightRadius:to,boxShadow:KE},mv=["TopLeft","TopRight","BottomLeft","BottomRight"],QE=mv.length,am=e=>typeof e=="string"?parseFloat(e):e,lm=e=>typeof e=="number"||A.test(e);function qE(e,t,n,r,o,i){o?(e.opacity=ne(0,n.opacity!==void 0?n.opacity:1,XE(r)),e.opacityExit=ne(t.opacity!==void 0?t.opacity:1,0,JE(r))):i&&(e.opacity=ne(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<QE;s++){const a=`border${mv[s]}Radius`;let l=um(t,a),u=um(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||lm(l)===lm(u)?(e[a]=Math.max(ne(am(l),am(u),r),0),(Dt.test(u)||Dt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=ne(t.rotate||0,n.rotate||0,r))}function um(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const XE=hv(0,.5,Jy),JE=hv(.5,.95,_e);function hv(e,t,n){return r=>r<e?0:r>t?1:n(Qo(e,t,r))}function cm(e,t){e.min=t.min,e.max=t.max}function at(e,t){cm(e.x,t.x),cm(e.y,t.y)}function dm(e,t,n,r,o){return e-=t,e=Is(e,1/n,r),o!==void 0&&(e=Is(e,1/o,r)),e}function ZE(e,t=0,n=1,r=.5,o,i=e,s=e){if(Dt.test(t)&&(t=parseFloat(t),t=ne(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=ne(i.min,i.max,r);e===i&&(a-=t),e.min=dm(e.min,t,n,a,o),e.max=dm(e.max,t,n,a,o)}function fm(e,t,[n,r,o],i,s){ZE(e,t[n],t[r],t[o],t.scale,i,s)}const eM=["x","scaleX","originX"],tM=["y","scaleY","originY"];function pm(e,t,n,r){fm(e.x,t,eM,n?n.x:void 0,r?r.x:void 0),fm(e.y,t,tM,n?n.y:void 0,r?r.y:void 0)}function mm(e){return e.translate===0&&e.scale===1}function gv(e){return mm(e.x)&&mm(e.y)}function nM(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function yv(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function hm(e){return ot(e.x)/ot(e.y)}class rM{constructor(){this.members=[]}add(t){Md(this.members,t),t.scheduleRender()}remove(t){if(Cd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const i=this.members[o];if(i.isPresent!==!1){r=i;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function gm(e,t,n){let r="";const o=e.x.translate/t.x,i=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((o||i||s)&&(r=`translate3d(${o}px, ${i}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:c,rotateY:f,skewX:y,skewY:m}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),c&&(r+=`rotateX(${c}deg) `),f&&(r+=`rotateY(${f}deg) `),y&&(r+=`skewX(${y}deg) `),m&&(r+=`skewY(${m}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const oM=(e,t)=>e.depth-t.depth;class iM{constructor(){this.children=[],this.isDirty=!1}add(t){Md(this.children,t),this.isDirty=!0}remove(t){Cd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(oM),this.isDirty=!1,this.children.forEach(t)}}function sM(e,t){const n=Sn.now(),r=({timestamp:o})=>{const i=o-n;i>=t&&(Cn(r),e(i-t))};return we.read(r,!0),()=>Cn(r)}function aM(e){window.MotionDebug&&window.MotionDebug.record(e)}function lM(e){return e instanceof SVGElement&&e.tagName!=="svg"}function uM(e,t,n){const r=Ne(e)?e:qo(e);return r.start(Ed("",r,t,n)),r.animation}const gl=["","X","Y","Z"],cM={visibility:"hidden"},ym=1e3;let dM=0;const Bn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function yl(e,t,n,r){const{latestValues:o}=t;o[e]&&(n[e]=o[e],t.setStaticValue(e,0),r&&(r[e]=0))}function vv({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(s={},a=t==null?void 0:t()){this.id=dM++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Bn.totalNodes=Bn.resolvedTargetDeltas=Bn.recalculatedProjection=0,this.nodes.forEach(mM),this.nodes.forEach(xM),this.nodes.forEach(wM),this.nodes.forEach(hM),aM(Bn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new iM)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Pd),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=lM(s),this.instance=s;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let c;const f=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,c&&c(),c=sM(f,250),Ji.hasAnimatedSinceResize&&(Ji.hasAnimatedSinceResize=!1,this.nodes.forEach(xm))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:c,hasLayoutChanged:f,hasRelativeTargetChanged:y,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||d.getDefaultTransition()||EM,{onLayoutAnimationStart:w,onLayoutAnimationComplete:h}=d.getProps(),p=!this.targetLayout||!yv(this.targetLayout,m)||y,g=!f&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||f&&(p||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(c,g);const S={...gd(v,"layout"),onPlay:w,onComplete:h};(d.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else f||xm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Cn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(kM),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const c=this.path[d];c.shouldResetTransform=!0,c.updateScroll("snapshot"),c.options.layoutRoot&&c.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(vm);return}this.isUpdating||this.nodes.forEach(yM),this.isUpdating=!1,window.HandoffCancelAllAnimations&&window.HandoffCancelAllAnimations(),this.nodes.forEach(vM),this.nodes.forEach(fM),this.nodes.forEach(pM),this.clearAllSnapshots();const a=Sn.now();be.delta=Mn(0,1e3/60,a-be.timestamp),be.timestamp=a,be.isProcessing=!0,sl.update.process(be),sl.preRender.process(be),sl.render.process(be),be.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,rd.read(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(gM),this.sharedNodes.forEach(SM)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,we.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){we.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ae(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!gv(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&(a||Vn(this.latestValues)||d)&&(o(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),MM(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return ae();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(sn(a.x,l.offset.x),sn(a.y,l.offset.y)),a}removeElementScroll(s){const a=ae();at(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:d,options:c}=u;if(u!==this.root&&d&&c.layoutScroll){if(d.isRoot){at(a,s);const{scroll:f}=this.root;f&&(sn(a.x,-f.offset.x),sn(a.y,-f.offset.y))}sn(a.x,d.offset.x),sn(a.y,d.offset.y)}}return a}applyTransform(s,a=!1){const l=ae();at(l,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&br(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Vn(d.latestValues)&&br(l,d.latestValues)}return Vn(this.latestValues)&&br(l,this.latestValues),l}removeTransform(s){const a=ae();at(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Vn(u.latestValues))continue;Bu(u.latestValues)&&u.updateSnapshot();const d=ae(),c=u.measurePageBox();at(d,c),pm(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Vn(this.latestValues)&&pm(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==be.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:c,layoutId:f}=this.options;if(!(!this.layout||!(c||f))){if(this.resolvedRelativeTargetAt=be.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ae(),this.relativeTargetOrigin=ae(),Lo(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),at(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ae(),this.targetWithTransforms=ae()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),CE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):at(this.target,this.layout.layoutBox),cv(this.target,this.targetDelta)):at(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ae(),this.relativeTargetOrigin=ae(),Lo(this.relativeTargetOrigin,this.target,y.target),at(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Bn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Bu(this.parent.latestValues)||uv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===be.timestamp&&(u=!1),u)return;const{layout:d,layoutId:c}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||c))return;at(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,y=this.treeScale.y;OE(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=ae());const{target:m}=a;if(!m){this.projectionTransform&&(this.projectionDelta=Sr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Sr(),this.projectionDeltaWithTransform=Sr());const v=this.projectionTransform;bo(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=gm(this.projectionDelta,this.treeScale),(this.projectionTransform!==v||this.treeScale.x!==f||this.treeScale.y!==y)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),Bn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},c=Sr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=ae(),y=l?l.source:void 0,m=this.layout?this.layout.source:void 0,v=y!==m,w=this.getStack(),h=!w||w.members.length<=1,p=!!(v&&!h&&this.options.crossfade===!0&&!this.path.some(LM));this.animationProgress=0;let g;this.mixTargetDelta=S=>{const L=S/1e3;wm(c.x,s.x,L),wm(c.y,s.y,L),this.setTargetDelta(c),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Lo(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),bM(this.relativeTarget,this.relativeTargetOrigin,f,L),g&&nM(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=ae()),at(g,this.relativeTarget)),v&&(this.animationValues=d,qE(d,u,this.latestValues,L,p,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Cn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=we.update(()=>{Ji.hasAnimatedSinceResize=!0,this.currentAnimation=uM(0,ym,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ym),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:d}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&xv(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ae();const c=ot(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+c;const f=ot(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+f}at(a,l),br(a,d),bo(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new rM),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&yl("z",s,u,this.animationValues);for(let d=0;d<gl.length;d++)yl(`rotate${gl[d]}`,s,u,this.animationValues),yl(`skew${gl[d]}`,s,u,this.animationValues);s.render();for(const d in u)s.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return cM;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=qi(s==null?void 0:s.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=qi(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Vn(this.latestValues)&&(v.transform=d?d({},""):"none",this.hasProjected=!1),v}const f=c.animationValues||c.latestValues;this.applyTransformsToTarget(),u.transform=gm(this.projectionDeltaWithTransform,this.treeScale,f),d&&(u.transform=d(f,u.transform));const{x:y,y:m}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${m.origin*100}% 0`,c.animationValues?u.opacity=c===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=c===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const v in _s){if(f[v]===void 0)continue;const{correct:w,applyTo:h}=_s[v],p=u.transform==="none"?f[v]:w(f[v],c);if(h){const g=h.length;for(let S=0;S<g;S++)u[h[S]]=p}else u[v]=p}return this.options.layoutId&&(u.pointerEvents=c===this?qi(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(vm),this.root.sharedNodes.clear()}}}function fM(e){e.updateLayout()}function pM(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:i}=e.options,s=n.source!==e.layout.source;i==="size"?lt(c=>{const f=s?n.measuredBox[c]:n.layoutBox[c],y=ot(f);f.min=r[c].min,f.max=f.min+y}):xv(i,n.layoutBox,r)&&lt(c=>{const f=s?n.measuredBox[c]:n.layoutBox[c],y=ot(r[c]);f.max=f.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[c].max=e.relativeTarget[c].min+y)});const a=Sr();bo(a,r,n.layoutBox);const l=Sr();s?bo(l,e.applyTransform(o,!0),n.measuredBox):bo(l,r,n.layoutBox);const u=!gv(a);let d=!1;if(!e.resumeFrom){const c=e.getClosestProjectingParent();if(c&&!c.resumeFrom){const{snapshot:f,layout:y}=c;if(f&&y){const m=ae();Lo(m,n.layoutBox,f.layoutBox);const v=ae();Lo(v,r,y.layoutBox),yv(m,v)||(d=!0),c.options.layoutRoot&&(e.relativeTarget=v,e.relativeTargetOrigin=m,e.relativeParent=c)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function mM(e){Bn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function hM(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function gM(e){e.clearSnapshot()}function vm(e){e.clearMeasurements()}function yM(e){e.isLayoutDirty=!1}function vM(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function xm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function xM(e){e.resolveTargetDelta()}function wM(e){e.calcProjection()}function kM(e){e.resetSkewAndRotation()}function SM(e){e.removeLeadSnapshot()}function wm(e,t,n){e.translate=ne(t.translate,0,n),e.scale=ne(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function km(e,t,n,r){e.min=ne(t.min,n.min,r),e.max=ne(t.max,n.max,r)}function bM(e,t,n,r){km(e.x,t.x,n.x,r),km(e.y,t.y,n.y,r)}function LM(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const EM={duration:.45,ease:[.4,0,.1,1]},Sm=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),bm=Sm("applewebkit/")&&!Sm("chrome/")?Math.round:_e;function Lm(e){e.min=bm(e.min),e.max=bm(e.max)}function MM(e){Lm(e.x),Lm(e.y)}function xv(e,t,n){return e==="position"||e==="preserve-aspect"&&!Fu(hm(t),hm(n),.2)}const CM=vv({attachResizeListener:(e,t)=>Ft(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),vl={current:void 0},wv=vv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!vl.current){const e=new CM({});e.mount(window),e.setOptions({layoutScroll:!0}),vl.current=e}return vl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),PM={pan:{Feature:WE},drag:{Feature:$E,ProjectionNode:wv,MeasureLayout:pv}},zu={current:null},kv={current:!1};function TM(){if(kv.current=!0,!!ed)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>zu.current=e.matches;e.addListener(t),t()}else zu.current=!1}function DM(e,t,n){const{willChange:r}=t;for(const o in t){const i=t[o],s=n[o];if(Ne(i))e.addValue(o,i),Bs(r)&&r.add(o);else if(Ne(s))e.addValue(o,qo(i,{owner:e})),Bs(r)&&r.remove(o);else if(s!==i)if(e.hasValue(o)){const a=e.getValue(o);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(o);e.addValue(o,qo(a!==void 0?a:i,{owner:e}))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const Em=new WeakMap,RM=[..._y,Re,Pn],jM=e=>RM.find(Ny(e)),Sv=Object.keys(Yo),NM=Sv.length,Mm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],_M=id.length;function bv(e){if(e)return e.options.allowProjection!==!1?e.projection:bv(e.parent)}class AM{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:i,visualState:s},a={}){this.resolveKeyframes=(f,y,m,v)=>new this.KeyframeResolver(f,y,m,v,this),this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=yd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>we.render(this.render,!1,!0);const{latestValues:l,renderState:u}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=a,this.blockInitialAnimation=!!i,this.isControllingVariants=va(n),this.isVariantNode=ly(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...c}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in c){const y=c[f];l[f]!==void 0&&Ne(y)&&(y.set(l[f],!1),Bs(d)&&d.add(f))}}mount(t){this.current=t,Em.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),kv.current||TM(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:zu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){var t;Em.delete(this.current),this.projection&&this.projection.unmount(),Cn(this.notifyUpdate),Cn(this.render),this.valueSubscriptions.forEach(n=>n()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const n in this.events)this.events[n].clear();for(const n in this.features)(t=this.features[n])===null||t===void 0||t.unmount();this.current=null}bindToMotionValue(t,n){const r=or.has(t),o=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&we.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),i(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,o,i){let s,a;for(let l=0;l<NM;l++){const u=Sv[l],{isEnabled:d,Feature:c,ProjectionNode:f,MeasureLayout:y}=Yo[u];f&&(s=f),d(n)&&(!this.features[u]&&c&&(this.features[u]=new c(this)),y&&(a=y))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,bv(this.parent));const{layoutId:l,layout:u,drag:d,dragConstraints:c,layoutScroll:f,layoutRoot:y}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!d||c&&wr(c),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:f,layoutRoot:y})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ae()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Mm.length;r++){const o=Mm[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const i="on"+o,s=t[i];s&&(this.propEventSubscriptions[o]=this.on(o,s))}this.prevMotionValues=DM(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<_M;r++){const o=id[r],i=this.props[o];(Go(i)||i===!1)&&(n[o]=i)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=qo(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let o=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return o!=null&&(typeof o=="string"&&(Ry(o)||Ty(o))?o=parseFloat(o):!jM(o)&&Pn.test(n)&&(o=Uy(t,n)),this.setBaseTarget(t,Ne(o)?o.get():o)),Ne(o)?o.get():o}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const s=hd(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(o=s[t])}if(r&&o!==void 0)return o;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Ne(i)?i:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Pd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Lv extends AM{constructor(){super(...arguments),this.KeyframeResolver=$y}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function OM(e){return window.getComputedStyle(e)}class FM extends Lv{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(or.has(n)){const r=xd(n);return r&&r.default||0}else{const r=OM(t),o=(fy(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return dv(t,n)}build(t,n,r,o){cd(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return md(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ne(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,o){yy(t,n,r,o)}}class VM extends Lv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(or.has(n)){const r=xd(n);return r&&r.default||0}return n=vy.has(n)?n:nd(n),t.getAttribute(n)}measureInstanceViewportBox(){return ae()}scrapeMotionValuesFromProps(t,n,r){return wy(t,n,r)}build(t,n,r,o){fd(t,n,r,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,r,o){xy(t,n,r,o)}mount(t){this.isSVGTag=pd(t.tagName),super.mount(t)}}const BM=(e,t)=>ad(e)?new VM(t,{enableHardwareAcceleration:!1}):new FM(t,{allowProjection:e!==k.Fragment,enableHardwareAcceleration:!0}),IM={layout:{ProjectionNode:wv,MeasureLayout:pv}},zM={...bE,...N3,...PM,...IM},Ev=$L((e,t)=>w3(e,t,zM,BM));function Mv(){const e=k.useRef(!1);return td(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function UM(){const e=Mv(),[t,n]=k.useState(0),r=k.useCallback(()=>{e.current&&n(t+1)},[t]);return[k.useCallback(()=>we.postRender(r),[r]),t]}class $M extends k.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function WM({children:e,isPresent:t}){const n=k.useId(),r=k.useRef(null),o=k.useRef({width:0,height:0,top:0,left:0}),{nonce:i}=k.useContext(Zc);return k.useInsertionEffect(()=>{const{width:s,height:a,top:l,left:u}=o.current;if(t||!r.current||!s||!a)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return i&&(d.nonce=i),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),x.jsx($M,{isPresent:t,childRef:r,sizeRef:o,children:k.cloneElement(e,{ref:r})})}const xl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:i,mode:s})=>{const a=ky(HM),l=k.useId(),u=k.useMemo(()=>({id:l,initial:t,isPresent:n,custom:o,onExitComplete:d=>{a.set(d,!0);for(const c of a.values())if(!c)return;r&&r()},register:d=>(a.set(d,!1),()=>a.delete(d))}),i?[Math.random()]:[n]);return k.useMemo(()=>{a.forEach((d,c)=>a.set(c,!1))},[n]),k.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=x.jsx(WM,{isPresent:n,children:e})),x.jsx(ga.Provider,{value:u,children:e})};function HM(){return new Map}function KM(e){return k.useEffect(()=>()=>e(),[])}const In=e=>e.key||"";function GM(e,t){e.forEach(n=>{const r=In(n);t.set(r,n)})}function YM(e){const t=[];return k.Children.forEach(e,n=>{k.isValidElement(n)&&t.push(n)}),t}const Cv=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:i=!0,mode:s="sync"})=>{const a=k.useContext(sd).forceRender||UM()[0],l=Mv(),u=YM(e);let d=u;const c=k.useRef(new Map).current,f=k.useRef(d),y=k.useRef(new Map).current,m=k.useRef(!0);if(td(()=>{m.current=!1,GM(u,y),f.current=d}),KM(()=>{m.current=!0,y.clear(),c.clear()}),m.current)return x.jsx(x.Fragment,{children:d.map(p=>x.jsx(xl,{isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:i,mode:s,children:p},In(p)))});d=[...d];const v=f.current.map(In),w=u.map(In),h=v.length;for(let p=0;p<h;p++){const g=v[p];w.indexOf(g)===-1&&!c.has(g)&&c.set(g,void 0)}return s==="wait"&&c.size&&(d=[]),c.forEach((p,g)=>{if(w.indexOf(g)!==-1)return;const S=y.get(g);if(!S)return;const L=v.indexOf(g);let E=p;if(!E){const P=()=>{c.delete(g);const b=Array.from(y.keys()).filter(_=>!w.includes(_));if(b.forEach(_=>y.delete(_)),f.current=u.filter(_=>{const N=In(_);return N===g||b.includes(N)}),!c.size){if(l.current===!1)return;a(),r&&r()}};E=x.jsx(xl,{isPresent:!1,onExitComplete:P,custom:t,presenceAffectsLayout:i,mode:s,children:S},In(S)),c.set(g,E)}d.splice(L,0,E)}),d=d.map(p=>{const g=p.key;return c.has(g)?p:x.jsx(xl,{isPresent:!0,presenceAffectsLayout:i,mode:s,children:p},In(p))}),x.jsx(x.Fragment,{children:c.size?d:d.map(p=>k.cloneElement(p))})},Cm=({tag:e})=>{let t,n;switch(e){case"Live":n="#333533";break;case"HTML":n="#CF5E1C";break;case"CSS":n="#0277BD";break;case"SASS":n="#CD6799";break;case"Tailwind":n="linear-gradient(45deg,#F5F5F5, #CD6799 37%,#3886EC 50%, #F5F5F5 )";break;case"JavaScript":n="#CAB108";break;case"TypeScript":n="#32A3EE";break;case"React":n="#242938";break;case"Firebase":n="#CF5E1C";break;case"PHP":n="#7229D1";break;case"MySQL":n="#F57C00";break;case"Figma":n="#0ACF83";break}return e==="Live"?t=x.jsxs(x.Fragment,{children:[x.jsx("div",{className:`\r
                 bg-[#E14E1D]\r
                 block\r
\r
                 animate-pulse\r
                 \r
                 w-[0.219rem]\r
                 mobile:w-[0.293rem]\r
                 sMobile:w-[0.469rem]\r
                 mMobile:w-[0.563rem]\r
                 sLaptop:w-[0.32807rem]\r
                 mLaptop:w-[0.40854rem]\r
                 desktop:w-[0.4952rem]\r
                 largeDesktop:w-[0.619rem]\r
\r
                 h-[0.219rem]\r
                 mobile:h-[0.293rem]\r
                 sMobile:h-[0.469rem]\r
                 mMobile:h-[0.563rem]\r
                 sLaptop:h-[0.32807rem]\r
                 mLaptop:h-[0.40854rem]\r
                 desktop:h-[0.4952rem]\r
                 largeDesktop:h-[0.619rem]\r
\r
                 rounded-full\r
                `}),x.jsx("span",{className:`\r
                spanCSSTags\r
                `,children:"Demo"})]}):t=e,x.jsx("div",{className:`\r
    flex flex-row\r
    justify-center\r
    items-center \r
\r
    gap-[0.193rem]\r
    mobile:gap-[0.257rem]\r
    sMobile:gap-[0.412rem]\r
    mMobile:gap-[0.495rem]\r
    sLaptop:gap-[0.10918rem]\r
    mLaptop:gap-[0.13596rem]\r
    desktop:gap-[0.1648rem]\r
    largeDesktop:gap-[0.206rem]\r
\r
    py-[0.097rem]\r
    mobile:py-[0.130rem]\r
    sMobile:py-[0.208rem]\r
    mMobile:py-[0.20rem]\r
    sLaptop:py-[0.14893rem]\r
    mLaptop:py-[0.18546rem]\r
    desktop:py-[0.2248rem]\r
    largeDesktop:py-[0.281rem]\r
\r
    w-[1.667rem]\r
    mobile:w-[2.223rem]\r
    sMobile:w-[3.557rem]\r
    mMobile:w-[4.269rem]\r
    sLaptop:w-[2.51432rem]\r
    mLaptop:w-[3.13104rem]\r
    desktop:w-[3.7952rem]\r
    largeDesktop:w-[4.744rem]\r
\r
    rounded-[0.036328125rem]\r
    mobile:rounded-[0.04843749999rem]\r
    sMobile:rounded-[0.07749999999rem]\r
    mMobile:rounded-[0.093rem]\r
    sLaptop:rounded-[0.05459rem]\r
    mLaptop:rounded-[0.06798rem]\r
    desktop:rounded-[0.0824rem]\r
    largeDesktop:rounded-[0.103rem]\r
\r
    mb-[0.195rem]\r
    mobile:mb-[0.260rem]\r
    sMobile:mb-[0.416rem]\r
    mMobile:mb-[0.5rem]\r
    sLaptop:mb-[0.29839rem]\r
    mLaptop:mb-[0.37158rem]\r
    desktop:mb-[0.4504rem]\r
    largeDesktop:mb-[0.563rem]\r
\r
        text-PrimaryWhite\r
        font-semibold\r
        text-[0.29296875rem]\r
        mobile:text-[0.39062499999rem]\r
        sMobile:text-[0.62499999999rem]\r
        mMobile:text-[.75rem]\r
        sLaptop:text-[0.52807rem]\r
        mLaptop:text-[0.60854rem]\r
        desktop:text-[0.6952rem]\r
        largeDesktop:text-[0.819rem]\r
        leading-[1]\r
    `,style:{background:n},children:t})},QM=({tag:e,demo:t,projectName:n,date:r})=>x.jsxs("div",{className:`\r
    flex flex-col\r
    w-full\r
    absolute \r
    bottom-0 left-0 \r
    `,children:[x.jsxs("div",{className:`\r
        flex \r
        flex-row \r
        flex-wrap\r
        gap-[0.1953125rem]\r
        mobile:gap-[0.26041666666rem]\r
        sMobile:gap-[0.41666666666rem]\r
        mMobile:gap-[0.5rem]\r
        sLaptop:gap-[0.29839rem]\r
        mLaptop:gap-[0.37158rem]\r
        desktop:gap-[0.4504rem]\r
        largeDesktop:gap-[0.563rem]\r
\r
        px-[0.1953125rem]\r
        mobile:px-[0.26041666666rem]\r
        sMobile:px-[0.41666666666rem]\r
        mMobile:px-[.5rem]\r
        sLaptop:px-[0.29839rem]\r
        mLaptop:px-[0.37158rem]\r
        desktoP:px-[0.4504rem]\r
        largeDesktop:px-[0.563rem]\r
        `,children:[t?x.jsx(Cm,{tag:"Live"}):"",e.map(o=>x.jsx(Cm,{tag:o},o))]}),x.jsxs("div",{className:`\r
            text-PrimaryWhite\r
            bg-DarkerGlass\r
            flex flex-col\r
            w-full \r
\r
            gap-[0.390rem]\r
            mobile:gap-[0.325rem]\r
            sMobile:gap-[0.520rem]\r
            mMobile:gap-[0.625rem]\r
            sLaptop:gap-[0.36464rem]\r
            mLaptop:gap-[0.45408rem]\r
            desktop:gap-[0.5504rem]\r
            largeDesktop:gap-[0.688rem]\r
\r
            py-[0.427rem]\r
            mobile:py-[0.520rem]\r
            sMobile:py-[0.911rem]\r
            mMobile:py-[1.094rem]\r
            sLaptop:py-[0.62964rem]\r
            mLaptop:py-[0.78408rem]\r
            desktop:py-[0.9504rem]\r
            largeDesktop:py-[1.188rem]\r
\r
            pl-[0.243rem]\r
            mobile:pl-[0.325rem]\r
            sMobile:pl-[0.520rem]\r
            mMobile:pl-[0.625rem]\r
            sLaptop:pl-[0.36464rem]\r
            mLaptop:pl-[0.45408rem]\r
            desktop:pl-[0.5504rem]\r
            largeDesktop:pl-[0.688rem]\r
\r
            rounded-b-[0.266rem]\r
            mobile:rounded-b-[0.354rem]\r
            sMobile:rounded-b-[0.567rem]\r
            mMobile:rounded-b-[0.681rem]\r
            sLaptop:rounded-b-[0.40068rem]\r
            mLaptop:rounded-b-[0.49896rem]\r
            desktop:rounded-b-[0.6048rem]\r
            largeDesktop:rounded-b-[.756rem]\r
            `,children:[x.jsx("h1",{className:`\r
                font-semibold\r
                text-[0.585rem]\r
                mobile:text-[0.781rem]\r
                sMobile:text-[1.249rem]\r
                mMobile:text-[1.5rem]\r
                sLaptop:text-[0.72875rem]\r
                mLaptop:text-[0.9075rem]\r
                desktop:text-[1.1rem]\r
                largeDesktop:text-[1.375rem]\r
                leading-none\r
                `,children:n}),x.jsx("p",{className:`\r
                font-semibold\r
                text-[0.488rem]\r
                mobile:text-[0.651rem]\r
                sMobile:text-[1.041rem]\r
                mMobile:text-[1.25rem]\r
                sLaptop:text-[0.54643rem]\r
                mLaptop:text-[0.68046rem]\r
                desktop:text-[0.8248rem]\r
                largeDesktop:text-[1.031rem]\r
                leading-none\r
                opacity-80\r
                `,children:r})]})]}),qM=k.memo(({project:e})=>{const{id:t,projectName:n,projectURL:r,imgURL:o,date:i,tags:s,live:a}=e;return x.jsxs(Ev.div,{initial:{scale:.98,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.98,opacity:0},transition:{duration:.5},onClick:()=>window.open(r),className:`\r
        block\r
        relative\r
        transition-all\r
        duration-200\r
\r
        w-[7.311rem]\r
        h-[8.375rem]\r
        mobile:w-[9.749rem]\r
        mobile:h-[11.166rem]\r
        sMobile:w-[15.598rem]\r
        sMobile:h-[17.866rem]\r
        mMobile:w-[18.718rem]\r
        mMobile:h-[21.439rem]\r
        sLaptop:w-[11.16339rem]\r
        mLaptop:w-[13.90158rem]\r
        desktop:w-[16.8504rem]\r
        largeDesktop:w-[21.063rem]\r
        sLaptop:h-[12.62089rem]\r
        mLaptop:h-[15.71658rem]\r
        desktop:h-[19.0504rem]\r
        largeDesktop:h-[23.813rem]\r
\r
        rounded-[0.266rem]\r
        mobile:rounded-[0.354rem]\r
        sMobile:rounded-[0.567rem]\r
        mMobile:rounded-[0.681rem]\r
        sLaptop:rounded-[0.40068rem]\r
        mLaptop:rounded-[0.49896rem]\r
        desktop:rounded-[0.6048rem]\r
        largeDesktop:rounded-[.756rem]\r
\r
        sLaptop:hover:ring-[0.10918rem]\r
        mLaptop:hover:ring-[0.13596rem]\r
        desktop:hover:ring-[0.1648rem]\r
        largeDesktop:hover:ring-[0.206rem]\r
\r
        hover:ring-offset-0\r
        hover:ring-SelectBlue\r
        hover:cursor-pointer\r
    `,children:[x.jsx("img",{className:`\r
        w-[7.311rem]\r
        h-[8.375rem]\r
        mobile:w-[9.749rem]\r
        mobile:h-[11.166rem]\r
        sMobile:w-[15.598rem]\r
        sMobile:h-[17.866rem]\r
        mMobile:w-[18.718rem]\r
        mMobile:h-[21.439rem]\r
        sLaptop:w-[11.16339rem]\r
        mLaptop:w-[13.90158rem]\r
        desktop:w-[16.8504rem]\r
        largeDesktop:w-[21.063rem]\r
        sLaptop:h-[12.62089rem]\r
        mLaptop:h-[15.71658rem]\r
        desktop:h-[19.0504rem]\r
        largeDesktop:h-[23.813rem]\r
\r
        rounded-[0.266rem]\r
        mobile:rounded-[0.354rem]\r
        sMobile:rounded-[0.567rem]\r
        mMobile:rounded-[0.681rem]\r
        sLaptop:rounded-[0.40068rem]\r
        mLaptop:rounded-[0.49896rem]\r
        desktop:rounded-[0.6048rem]\r
        largeDesktop:rounded-[.756rem]\r
        \r
        `,src:`https://253olivares.github.io/Newportfolio-ReactViteBuild/assets/screenshots/${o}`,alt:n}),x.jsx(QM,{tag:s,demo:a,projectName:n,date:i})]},t)}),XM=k.memo(()=>{const e=K(C2);return e.length===0?x.jsx("p",{className:`\r
     w-full\r
\r
     flex-grow\r
\r
     text-[1.171rem]\r
     mobile:text-[1.562rem]\r
     sMobile:text-[2.499rem]\r
     mMobile:text-[3rem]\r
     sLaptop:text-[1.9875rem]\r
     mLaptop:text-[2.475rem]\r
     desktop:text-[3rem]\r
     largeDesktop:text-6xl   \r
     leading-none\r
     font-semibold\r
\r
     sLaptop:h-[23.467rem]\r
     mLaptop:h-[29.333rem]\r
     desktop:h-[35.2rem]\r
     largeDesktop:h-[44rem]\r
     flex items-center\r
     justify-center\r
    `,children:"No results found!"}):x.jsxs("div",{className:`
    projectFlexDiv
    `,children:[x.jsx(Cv,{children:e.map((t,n)=>x.jsx(qM,{project:t},n))}),e.length<=3?x.jsxs(k.Fragment,{children:[x.jsx("div",{className:`\r
          hidden\r
          sLaptop:block\r
          w-[18.718rem]\r
          h-[21.439rem]\r
          sLaptop:w-[11.16339rem]\r
          mLaptop:w-[13.90158rem]\r
          desktop:w-[16.8504rem]\r
          largeDesktop:w-[21.063rem]\r
          sLaptop:h-[12.62089rem]\r
          mLaptop:h-[15.71658rem]\r
          desktop:h-[19.0504rem]\r
          largeDesktop:h-[23.813rem]\r
          `}),x.jsx("div",{className:`\r
        \r
          hidden\r
          sLaptop:block\r
          w-[18.718rem]\r
          h-[21.439rem]\r
          sLaptop:w-[11.16339rem]\r
          mLaptop:w-[13.90158rem]\r
          desktop:w-[16.8504rem]\r
          largeDesktop:w-[21.063rem]\r
          sLaptop:h-[12.62089rem]\r
          mLaptop:h-[15.71658rem]\r
          desktop:h-[19.0504rem]\r
          largeDesktop:h-[23.813rem]\r
          `})]}):""]})}),JM=k.memo(()=>{const e=Qe(),t=K(b2);return x.jsxs("div",{className:`\r
     flex\r
     flex-row-reverse \r
     sLaptop:flex-row \r
     items-center\r
     gap-[0.611rem]\r
     mobile:gap-[0.815rem]\r
     sMobile:gap-[1.304rem]\r
     mMobile:gap-[1.565rem]\r
     sLaptop:gap-[0.667rem]\r
     mLaptop:gap-[0.833rem]\r
     desktop:gap-[1rem]\r
     largeDesktop:gap-[1.25rem]\r
    `,children:[x.jsx("input",{checked:t,onChange:()=>e(T2()),className:`\r
       block\r
       sLaptop:rounded-[0.167rem] \r
       mLaptop:rounded-[0.208rem] \r
       desktop:rounded-[0.25rem] \r
       largeDesktop:rounded-[0.313rem]\r
       w-[1.07rem]\r
       h-[1.07rem]\r
       mobile:w-[1.426rem]\r
       mobile:h-[1.426rem]\r
       sMobile:h-[2.282rem]\r
       sMobile:w-[2.282rem]\r
       mMobile:w-[2.739rem]\r
       mMobile:h-[2.739rem]\r
       sLaptop:w-[1.167rem]\r
       sLaptop:h-[1.167rem]\r
       mLaptop:w-[1.458rem]\r
       mLaptop:h-[1.458rem]\r
       desktop:w-[1.75rem]\r
       desktop:h-[1.75rem]\r
       largeDesktop:w-[2.188rem]\r
       largeDesktop:h-[2.188rem]\r
       bg-GlassLighterBackground\r
       checked:bg-SiteDarkGreen\r
      `,type:"checkbox",id:"LiveDemo",name:"LiveDemo"}),x.jsx("label",{className:`text-SidebarGray\r
       text-[0.917rem]\r
       mobile:text-[1.223rem]\r
       sMobile:text-[1.956rem]\r
       mMobile:text-[2.348rem]\r
       sLaptop:text-[1rem]\r
       mLaptop:text-[1.25rem]\r
       desktop:text-[1.5rem]\r
       largeDesktop:text-[1.875rem]\r
       table-cell\r
       align-middle\r
       font-medium\r
       leading-none\r
      `,htmlFor:"LiveDemo",children:"Live Demo"})]})}),ZM=k.memo(()=>{const e=Qe(),t=k.useContext(Ce),{Arrow:n}=t;return x.jsxs("div",{onClick:()=>e(j2()),className:`flex flex-row\r
     hover:cursor-pointer\r
     items-center\r
     gap-[0.611rem]\r
     mobile:gap-[0.815rem]\r
     sMobile:gap-[1.304rem]\r
     mMobile:gap-[1.565rem]\r
     sLaptop:gap-[0.667rem]\r
     mLaptop:gap-[0.833rem]\r
     desktop:gap-[1rem]\r
     largeDesktop:gap-[1.25rem]\r
     font-medium\r
     text-SidebarGray\r
    `,children:[x.jsx("p",{className:`\r
       text-[0.917rem]\r
       mobile:text-[1.223rem]\r
       sMobile:text-[1.956rem]\r
       mMobile:text-[2.348rem]\r
       sLaptop:text-[1rem]\r
       mLaptop:text-[1.25rem]\r
       desktop:text-[1.5rem]\r
       largeDesktop:text-[1.875rem]\r
       leading-none\r
       table-cell\r
       align-middle\r
      `,children:"Filter"}),x.jsx("img",{className:`\r
       w-[0.876rem]\r
       mobile:w-[1.168rem]\r
       sMobile:w-[1.868rem]\r
       mMobile:w-[2.242rem]\r
       sLaptop:w-[0.956rem]\r
       mLaptop:w-[1.194rem]\r
       desktop:w-[1.433rem]\r
       largeDesktop:w-[1.791rem]\r
       rotate-90`,id:"Arrow",src:n,alt:"Arrow"})]})}),eC=k.memo(()=>x.jsxs("div",{className:`
    flex
    justify-between
    sLaptop:justify-normal
    px-[4%]
    sLaptop:px-0
    mt-[0.488rem]
    mobile:mt-[0.651rem]
    sMobile:mt-[1.041rem]
    mMobile:mt-[1.25rem]
    sLaptop:mt-0
    sLaptop:gap-[1.167rem]
    mLaptop:gap-[1.458rem]
    desktop:gap-[1.75rem]
    largeDesktop:gap-[2.188rem]
    items-center
    `,children:[x.jsx(JM,{}),x.jsx(ZM,{})]})),tC="/Newportfolio-ReactViteBuild/assets/searchButton.svg",nC="/Newportfolio-ReactViteBuild/assets/searchButtonGreen.svg",rC=k.memo(()=>{const e=Qe(),[t,n]=k.useState(""),r=K(ii);return k.useEffect(()=>{n(""),e(ol(""))},[r]),x.jsx("form",{onSubmit:o=>{o.preventDefault(),e(ol(t.trim()))},children:x.jsxs("div",{className:`\r
      flex \r
      mt-[0.488rem]\r
      mobile:mt-[0.651rem]\r
      sMobile:mt-[1.042rem]\r
      mMobile:mt-[1.25rem]\r
      sLaptop:mt-0\r
      sLaptop:gap-[1.333rem]\r
      mLaptop:gap-[1.667rem]\r
      desktop:gap-[2rem]\r
      largeDesktop:gap-[2.5rem]\r
      items-center\r
      `,children:[x.jsx("label",{className:`\r
        hidden\r
        sLaptop:hidden\r
        sLaptop:text-[1rem]\r
        mLaptop:text-[1.25rem]\r
        desktop:text-[1.5rem]\r
        largeDesktop:text-[1.875rem]\r
        font-medium\r
        text-SidebarGray\r
        `,htmlFor:"Search",children:"Search:"}),x.jsxs("div",{className:`\r
        flex \r
        flex-row-reverse\r
        sLaptop:flex-row\r
        items-center\r
        w-full\r
        mx-[2.21%]\r
        sLaptop:px-0\r
\r
        bg-GlassLighterBackground\r
\r
        h-[1.708rem]\r
        mobile:h-[2.278rem]\r
        sMobile:h-[3.645rem]\r
        mMobile:h-[4.375rem]\r
        sLaptop:h-[1.667rem]\r
        mLaptop:h-[2.083rem]  \r
        desktop:h-[2.5rem]\r
        largeDesktop:h-[3.125rem]\r
        rounded-full\r
        sLaptop:rounded-[.265rem]\r
        mLaptop:rounded-[.33rem]\r
        desktop:rounded-[.4rem]\r
        largeDesktop:rounded-[0.5rem]\r
        focus-within:ring-[2.734px]\r
        mobile:focus-within:ring-[3.645px]\r
        sMobile:focus-within:ring-[5.833px]\r
        mMobile:focus-within:ring-[7px]\r
        sLaptop:focus-within:ring-[2.132px]\r
        mLaptop:focus-within:ring-[2.64px]\r
        desktop:focus-within:ring-[3.2px]\r
        largeDesktop:focus-within:ring-[4px]\r
        focus-within:ring-SelectBlue\r
        `,children:[x.jsx("input",{id:"Search",value:t,onChange:o=>{n(o.target.value),o.target.value===""&&e(ol(""))},className:`\r
            text-[0.976rem]\r
            mobile:text-[1.302rem]\r
            sMobile:text-[2.083rem]\r
            mMobile:text-[2.5rem]\r
            font-medium\r
            sLaptop:font-normal\r
            sLaptop:text-[1rem]\r
            mLaptop:text-[1.25rem]\r
            desktop:text-[1.5rem]\r
            largeDesktop:text-[1.875rem]\r
            w-full\r
            sLaptop:w-[9.9375rem]\r
            mLaptop:w-[12.375rem]\r
            desktop:w-[15rem]\r
            largeDesktop:w-[18.75rem]\r
            px-[3%]\r
            sLaptop:px-[.6296rem]\r
            mLaptop:px-[.7840rem]\r
            desktop:px-[0.9504rem]\r
            largeDesktop:px-[1.188rem]\r
            sLaptop:rounded-l-[.265rem]\r
            mLaptop:rounded-l-[.33rem]\r
            desktop:rounded-l-[.4rem]\r
            largeDesktop:rounded-l-[0.5rem]\r
            bg-transparent\r
            sLaptop:bg-GlassLighterBackground\r
            text-SidebarGray\r
            h-full\r
            focus:bg-transparent\r
            \r
            focus:sLaptop:bg-GlassLighterBackgroundSelect\r
            focus:outline-none\r
            `,type:"text"}),x.jsx("img",{className:`\r
            block\r
            sLaptop:hidden\r
            h-[80%]\r
            ml-[3%]\r
            `,src:nC,alt:"searchIconGreen"}),x.jsx("button",{type:"submit",className:`\r
            hidden\r
            sLaptop:block\r
            px-[]\r
            sLaptop:px-[.6296rem]\r
            mLaptop:px-[.7840rem]\r
            desktop:px-[0.9504rem]\r
            largeDesktop:px-[1.188rem]\r
            bg-transparent\r
            sLaptop:bg-SiteDarkGreen\r
            sLaptop:rounded-r-[.265rem]\r
            mLaptop:rounded-r-[.33rem]\r
            desktop:rounded-r-[.4rem]\r
            largeDesktop:rounded-r-[0.5rem]\r
            sLaptop:hover:opacity-75\r
            h-full\r
            `,children:x.jsx("img",{className:`\r
              sLaptop:w-[1.033rem]\r
              mLaptop:w-[1.292rem]\r
              desktop:w-[1.55rem]\r
              largeDesktop:w-[1.938rem]\r
              filterSVG\r
              sLaptop:filter-none\r
              `,src:tC,alt:"SearchIcon"})})]}),x.jsx("p",{onClick:()=>{n(""),e(N2())},className:`\r
        hidden\r
        sLaptop:block\r
        font-semibold\r
        text-SidebarGray\r
\r
        sLaptop:text-[1rem]\r
        mLaptop:text-[1.25rem]\r
        desktop:text-[1.5rem]\r
        largeDesktop:text-[1.875rem]\r
        underline\r
        hover:cursor-pointer\r
        hover:opacity-75\r
        active:opacity-50\r
        `,children:"clear"})]})})}),oC=k.memo(()=>{const e=K(ii);return x.jsxs("div",{className:`\r
    flex\r
    flex-col\r
    sLaptop:flex-row\r
    sLaptop:justify-between\r
    w-full\r
    `,children:[x.jsx(rC,{}),e!=="Art"&&e!=="UI / UX"&&x.jsx(eC,{})]})}),iC=k.memo(({tag:e,color:t})=>{const n=Qe(),r=K(L2);let o;r.length<=0?o=!1:r.find(a=>a===e)?o=!0:o=!1;const i=()=>{n(o?D2(e):R2(e))};return x.jsx("div",{onClick:()=>i(),style:{background:t},className:`
    ${o?"brightness-100":"brightness-50 sLaptop:hover:brightness-[.75]"}

     block
     w-full

     px-[10%]
     sLaptop:px-[.809rem]
     mLaptop:px-[1rem]
     desktop:px-[1.215rem]
     largeDesktop:px-[1.519rem]
     
     py-[0.683rem]
     mobile:py-[0.911rem]
     sMobile:py-[1.458rem]
     mMobile:py-[1.75rem]
     sLaptop:py-[.695rem]
     mLaptop:py-[.866rem]
     desktop:py-[1.05rem]
     largeDesktop:py-[1.313rem]

     rounded-[0.195rem]
     mobile:rounded-[0.520rem]
     sMobile:rounded-[0.4166rem]
     mMobile:rounded-[.5rem]
     sLaptop:rounded-[.214rem]
     mLaptop:rounded-[.267rem]
     desktop:rounded-[.324rem]
     largeDesktop:rounded-[0.405rem]

     hover:cursor-pointer
    `,children:x.jsx("p",{className:`
        text-PrimaryWhite
        text-[1.660rem]
        mobile:text-[2.213rem]
        sMobile:text-[3.541rem]
        mMobile:text-[4.25rem]
        sLaptop:text-[1.207rem]
        mLaptop:text-[1.503rem]
        desktop:text-[1.8224rem]
        largeDesktop:text-[2.278rem]
        leading-none
        w-full
        font-semibold
        `,children:e})})}),sC=k.memo(()=>{const e=Qe(),t=k.useContext(Ce),{filterListRef:n,labels:r}=t;return k.useEffect(()=>{const o=i=>{const s=i.target;n.current&&!n.current.contains(s)&&e(yp())};return window.addEventListener("click",o,!0),()=>{window.removeEventListener("click",o,!0)}},[]),x.jsxs(Ev.div,{initial:{left:"100%",right:"auto"},animate:{left:"auto",right:"0px"},exit:{left:"100%",right:"auto"},transition:{duration:.15},ref:n,className:`
         flex flex-col

         absolute

         h-full
         w-full
         
         z-[5]

         sLaptop:w-[12.229rem]
         mLaptop:w-[14.189rem]
         desktop:w-[18.423rem]
         largeDesktop:w-[23.033rem]

         bg-GlassBackground
         backdrop-blur-[0.25rem]  
         `,children:[x.jsxs("div",{className:`\r
          w-full \r
          flex justify-between\r
\r
          mt-[1.171rem]\r
          mobile:mt-[1.562rem]\r
          sMobile:mt-[2.499rem]\r
          mMobile:mt-[3.125rem]\r
          sLaptop:mt-[.46rem]\r
          mLaptop:mt-[.58rem]\r
          desktop:mt-[.7rem]\r
          largeDesktop:mt-[0.875rem]\r
\r
          px-[7.5%]\r
          sLaptop:px-[.66rem]\r
          mLaptop:px-[.83rem]\r
          desktop:px-[1rem]\r
          largeDesktop:px-[1.25rem]\r
          `,children:[x.jsx("p",{className:`\r
             flex-grow-0\r
             flex-shrink-0\r
\r
             font-medium\r
             text-PrimaryWhite\r
\r
             text-[1.171rem]\r
             mobile:text-[1.562rem]\r
             sMobile:text-[2.499rem]\r
             mMobile:text-[3rem]\r
             sLaptop:text-[0.99375rem]\r
             mLaptop:text-[1.2375rem]\r
             desktop:text-[1.5rem]\r
             largeDesktop:text-[1.875rem]\r
\r
            `,children:"Select Filters"}),x.jsx("img",{onClick:()=>e(yp()),className:`\r
            cursor-pointer\r
            w-[1.308rem]\r
            mobile:w-[1.744rem]\r
            sMobile:w-[2.791rem]\r
            mMobile:w-[3.35rem]\r
            sLaptop:w-[.89rem]\r
            mLaptop:w-[1.1rem]\r
            desktop:w-[1.34rem]\r
            largeDesktop:w-[1.679rem]\r
            `,src:t0,alt:""})]}),x.jsx("div",{className:`\r
            flex flex-col\r
            \r
            flex-grow\r
\r
            px-[7.5%]\r
            sLaptop:px-[1.689rem]\r
            mLaptop:px-[2.104rem]\r
            desktop:px-[2.55rem]\r
            largeDesktop:px-[3.188rem]\r
\r
            py-[1.171rem]\r
            mobile:py-[1.562rem]\r
            sMobile:py-[2.499rem]\r
            mMobile:py-[3rem]\r
            sLaptop:py-[1.258rem]\r
            mLaptop:py-[1.567rem]\r
            desktop:py-[1.9rem]\r
            largeDesktop:py-[2.375rem]\r
\r
            gap-[2.75rem]\r
            sLaptop:gap-[.894rem]\r
            mLaptop:gap-[1.11rem]\r
            desktop:gap-[1.35rem]\r
            largeDesktop:gap-[1.688rem]\r
\r
            sLaptop:h-[calc(100%-1.49rem)]\r
            mLaptop:h-[calc(100%-1.856rem)]\r
            desktop:h-[calc(100%-2.25rem)]\r
            largeDesktop:h-[calc(100%-2.813rem)]\r
\r
            overflow-y-scroll\r
           \r
            sLaptop:scrollSection\r
            relative\r
          `,children:Object.entries(r).map(([o,i],s)=>x.jsx(iC,{tag:o,color:i},s))})]},"modal")}),aC=k.memo(()=>{const e=K(M2),t=K(ii),n=K(k2),r=K(S2);let o;return n==="failed"?(console.log(r),o=x.jsx("div",{className:`\r
    flex \r
    justify-center \r
    items-center\r
\r
    flex-grow\r
\r
    sLaptop:mt-[10.6rem]\r
    mLaptop:mt-[13.2rem]\r
    desktop:mt-[16rem]\r
    largeDesktop:mt-[20rem]\r
\r
    text-[1.171rem]\r
    mobile:text-[1.562rem]\r
    sMobile:text-[2.499rem]\r
    mMobile:text-[3rem]\r
    sLaptop:text-[.9875rem]\r
    mLaptop:text-[1.475rem]\r
    desktop:text-[2rem]\r
    largeDesktop:text-[2.75rem]\r
\r
    font-semibold\r
    text-SidebarGray\r
    `,children:"data fetching failed"})):n==="loading"?o=x.jsx("div",{className:`\r
    flex \r
    justify-center \r
    items-center\r
    flex-grow\r
    sLaptop:mt-[10.6rem]\r
    mLaptop:mt-[13.2rem]\r
    desktop:mt-[16rem]\r
    largeDesktop:mt-[20rem]\r
    `,children:x.jsx(oy,{color:"bg-SidebarGray"})}):n==="succeeded"&&(o=x.jsx(XM,{})),x.jsxs("div",{className:`
      relative

      w-full 
  
      sLaptop:block
      bg-PrimaryWhite
      
      h-[29.296rem]
      mobile:h-[39.062rem]
      sMobile:h-[62.499rem]
      mMobile:h-[75rem]

      pb-[0.488rem]
      mobile:pb-[0.651rem]
      sMobile:pb-[1.041rem]
      mMobile:pb-[1.25rem]

      flex
      flex-col
      
      overflow-hidden
      overflowFix

      ${t==="Programming"&&`  
        rounded-r-[0.244rem]
        mobile:rounded-r-[0.326rem]
        sMobile:rounded-r-[0.521rem]
        mMobile:rounded-r-[0.625rem]
        rounded-bl-[0.244rem]
        mobile:rounded-bl-[0.326rem]
        sMobile:rounded-bl-[0.521rem]
        mMobile:rounded-bl-[0.625rem]
        `}
      ${t==="Art"&&`
        rounded-[0.244rem]
        mobile:rounded-[0.326rem]
        sMobile:rounded-[0.521rem]
        mMobile:rounded-[0.625rem]
        `}
      ${t==="UI / UX"&&`
        rounded-l-[0.244rem]
        mobile:rounded-l-[0.326rem]
        sMobile:rounded-l-[0.521rem]
        mMobile:rounded-l-[0.625rem]
        rounded-br-[0.244rem]
        mobile:rounded-br-[0.326rem]
        sMobile:rounded-br-[0.521rem]
        mMobile:rounded-br-[0.625rem]

        `}
      sLaptop:rounded-[.66rem]
      mLaptop:rounded-[.83rem]
      desktop:rounded-[1rem]
      largeDesktop:rounded-[1.25rem]
    `,children:[x.jsx(Cv,{children:e&&x.jsx(sC,{})}),x.jsxs("div",{className:`\r
        relative\r
        flex-col\r
        flex-shrink-0\r
        flex-grow-0\r
        w-full\r
        `,children:[x.jsx(oC,{}),x.jsx("hr",{className:`\r
            relative\r
\r
            w-fill\r
            rounded-full  \r
            bg-GlassLighterBackground\r
\r
            mx-[2.21%] \r
            sLaptop:mx-0\r
\r
            mt-[0.493rem]\r
            mobile:mt-[0.657rem]\r
            sMobile:mt-[1.051rem]\r
            mMobile:mt-[1.261rem]\r
            sLaptop:mt-[.36464rem]\r
            mLaptop:mt-[.454rem]  \r
            desktop:mt-[0.5504rem]\r
            largeDesktop:mt-[0.688rem]\r
\r
            h-[0.158rems]\r
            mobile:h-[0.211rem]\r
            sMobile:h-[0.338rem]\r
            mMobile:h-[0.406rem]\r
            sLaptop:h-[0.167rem]\r
            mLaptop:h-[0.208rem]\r
            desktop:h-[0.25rem]\r
            largeDesktop:h-[0.313rem]\r
           `})]}),o]})}),lC=k.memo(()=>x.jsxs("div",{"data-aos":"fade","data-aos-duration":"1250","data-aos-delay":"800",className:`\r
    mockBrowser\r
    `,children:[x.jsxs("div",{className:`\r
      flex \r
      sLaptop:flex-row \r
      justify-between\r
      `,children:[x.jsx(TL,{}),x.jsx(DL,{})]}),x.jsx(aC,{})]})),uC=k.memo(()=>{const e=k.useContext(Ce),{pageRef:t}=e;return x.jsx("div",{ref:n=>{n&&(t.current[2]=n)},id:"Portfolio",className:`
    block bg-SiteGreen w-full`,children:x.jsx("div",{className:`\r
      w-full\r
      flex flex-col\r
      sLaptop:pl-[3.333rem]\r
      mLaptop:pl-[4.167rem]\r
      desktop:pl-[5rem]\r
      largeDesktop:pl-[6.25rem]\r
\r
      pt-[1.466rem]\r
      mobile:pt-[1.952rem]\r
      sMobile:pt-[3.126rem]\r
      mMobile:pt-[3.75rem]\r
      sLaptop:pt-[2.667rem]\r
      mLaptop:pt-[3.334rem]\r
      desktop:pt-[4em]\r
      largeDesktop:pt-[5rem]\r
\r
      pb-[0.830rem]\r
      mobile:pb-[1.106rem]\r
      sMobile:pb-[1.770rem]\r
      mMobile:pb-[2.125rem]\r
      min-h-[500px]\r
      `,children:x.jsxs("div",{className:`w-fill \r
        flex flex-col \r
        sLaptop:gap-[1.667rem]\r
        mLaptop:gap-[2.083rem]\r
        desktop:gap-[2.5rem]\r
        largeDesktop:gap-[3.105rem] \r
        sLaptop:px-[3.6%] \r
        extra:px-0 extra:mx-auto extra:max-w-[1920px]\r
        sLaptop:pb-[3.089rem]\r
        mLaptop:pb-[3.862rem]\r
        desktop:pb-[4.625rem]\r
        largeDesktop:pb-[6.813rem]\r
        `,children:[x.jsx("h1",{"data-aos":"fade","data-aos-duration":"1250","data-aos-delay":"300",className:`\r
          px-[6.51%]\r
          sLaptop:px-0\r
          sLaptop:w-full\r
          extra:w-[1920px]\r
          sectionCSS\r
          `,children:"PORTFOLIO"}),x.jsx(lC,{})]})})})}),cC="/Newportfolio-ReactViteBuild/Olivares_Resume2024_Current.pdf",dC=k.memo(()=>x.jsx("div",{"data-aos":"slide-left","data-aos-duration":"1250","data-aos-delay":"500",className:`\r
            w-[93.49%]\r
            ml-[calc(100%-93.49%)]\r
            sLaptop:ml-0\r
            sLaptop:w-[48%] \r
            flex \r
            items-center\r
            sLaptop:justify-normal\r
\r
            pl-[15.84%]\r
            sLaptop:px-[5rem]\r
            mLaptop:px-[6.25rem]\r
            desktop:px-[7.5rem]\r
            largeDesktop:px-[9.375rem]\r
\r
            mt-[1.953rem] mobile:mt-[2.604rem] sMobile:mt-[4.166rem] mMobile:mt-[5rem]\r
            sLaptop:mt-[1.421rem] mLaptop:mt-[1.792rem] desktop:mt-[2.163rem] largeDesktop:mt-[2.688rem]\r
\r
            contactDivShadowmTiny mobile:contactDivShadowMobile sMobile:contactDivShadowsMobile mMobile:contactDivShadowmMobile\r
            sLaptop:contactDivShadowSmall mLaptop:contactDivShadowMedium desktop:contactDivShadowDesktop largeDesktop:contactDivShadowLarge\r
\r
            rounded-l-[0.223rem] mobile:rounded-l-[0.297rem] sMobile:rounded-l-[0.474rem] mMobile:rounded-l-[0.569rem]\r
            sLaptop:rounded-l-[0.54rem] mLaptop:rounded-l-[0.675rem] desktop:rounded-l-[0.81rem] largeDesktop:rounded-l-[1.013rem]\r
\r
            h-[13.526rem] mobile:h-[18.034rem] sMobile:h-[28.854rem] mMobile:h-[34.625rem]\r
            sLaptop:h-[26.033rem] mLaptop:h-[32.542rem] desktop:h-[39.05rem] largeDesktop:h-[48.813rem] \r
\r
            bg-SiteYellow`,children:x.jsx("a",{className:`\r
            w-full h-full flex items-center\r
            sLaptop:flex-none sLaptop:w-auto sLaptop:h-auto\r
            `,href:cC,download:!0,children:x.jsx("img",{className:`\r
              transition-all\r
              duration-200\r
              w-[60.26%]\r
              sLaptop:w-[18.72rem]\r
              mLaptop:w-[23.4rem]\r
              desktop:w-[28.08rem]\r
              largeDesktop:w-[35.1rem]\r
              hover:cursor-pointer\r
              hover:opacity-75\r
              `,src:n0,alt:""})})})),fC=k.memo(()=>{const e=K(js),t=K(Q0),n=[e,t].every(Boolean);return x.jsx("button",{type:"submit",disabled:!n,className:`\r
        w-full\r
        sLaptop:w-auto\r
        sLaptop:float-right\r
        bg-PrimaryWhite\r
        text-SidebarGray\r
        font-medium\r
        h-[2.441rem]\r
        mobile:h-[3.255rem]\r
        sMobile:h-[5.208rem]\r
        mMobile:h-[6.25rem]\r
        sLaptop:h-[3.133rem]\r
        mLaptop:h-[3.917rem]\r
        desktop:h-[4.7rem]\r
        largeDesktop:h-[5.875rem]\r
        sLaptop:px-[2.658rem]\r
        mLaptop:px-[3.292rem]\r
        desktop:px-[3.925rem]\r
        largeDesktop:px-[4.875rem]\r
        rounded-[0.166rem]\r
        mobile:rounded-[0.222rem]\r
        sMobile:rounded-[0.354rem]\r
        mMobile:rounded-[0.426rem]\r
        sLaptop:rounded-[0.267rem]\r
        mLaptop:rounded-[0.333rem]\r
        desktop:rounded-[0.4rem]\r
        largeDesktop:rounded-[0.5rem]\r
        text-[1.247rem]\r
        mobile:text-[1.663rem]\r
        sMobile:text-[2.659rem]\r
        mMobile:text-[3.191rem]\r
        sLaptop:text-[2rem]\r
        mLaptop:text-[2.5rem]\r
        desktop:text-[3rem]\r
        largeDesktop:text-[3.75rem]\r
        leading-[2.441rem]\r
        mobile:leading-[3.255rem]\r
        sMobile:leading-[5.208rem]\r
        mMobile:leading-[6.25rem]\r
        sLaptop:leading-[3.133rem]\r
        mLaptop:leading-[3.917rem]\r
        desktop:leading-[4.7rem]\r
        largeDesktop:leading-[5.875rem]\r
        hover:bg-SelectBlue\r
        hover:text-PrimaryWhite\r
        transition-[color,background-color]\r
        duration-300\r
        cursor-pointer\r
        active:transition-none\r
        active:bg-[#1c3d5b]\r
        disabled:opacity-50\r
        disabled:hover:bg-PrimaryWhite\r
        disabled:hover:text-SidebarGray\r
        disabled:hover:cursor-default\r
        `,children:"Send"})}),pC=k.memo(()=>{const e=Qe(),t=K(Q0),n=K(q0);return x.jsxs(k.Fragment,{children:[x.jsxs("label",{className:"contactLabelText",htmlFor:"Message",children:["Message:",n==="message"?x.jsx("span",{className:`\r
                         font-bold\r
                         sLaptop:text-[1.06rem]\r
                         mLaptop:text-[1.32rem]\r
                         desktop:text-[1.6rem]\r
                         largeDesktop:text-[2rem] \r
                         leading-tight \r
                        `,children:"Problem in message field!"}):""]}),x.jsx("textarea",{value:t,onChange:r=>e(J0(r.target.value)),name:"Message",id:"Message",className:`
                    ${n==="email"&&"bg-[rgba(255,148,148,1)]"}
                    resize-none
                    w-full
                    py-[0.1953rem]
                    px-[0.3906rem]
                    mobile:py-[0.2604rem]
                    mobile:px-[0.5208rem]
                    sMobile:py-[0.4166rem]
                    sMobile:px-[0.8333rem]
                    mMobile:py-[.5rem]
                    mMobile:px-[1rem]
                    sLaptop:px-[.4rem]
                    sLaptop:py-[.2rem]
                    mLaptop:px-[.6rem]
                    mLaptop:py-[.3rem]
                    desktop:px-[.8rem]
                    desktop:py-[.4rem]
                    largeDesktop:px-[1rem]
                    largeDesktop:py-[.5rem]
                    rounded-[0.106rem]
                    mobile:rounded-[0.141rem]
                    sMobile:rounded-[0.225rem]
                    mMobile:rounded-[0.27rem]
                    sLaptop:rounded-[0.27rem]
                    mLaptop:rounded-[0.338rem]
                    desktop:rounded-[0.405rem]
                    largeDesktop:rounded-[0.506rem]
                    focus:outline-none
                    focus:outline-offset-0
                    focus:outline-4
                    focus:outline-SelectBlue
                    min-h-[8.545rem]
                    mobile:min-h-[11.393rem]
                    sMobile:min-h-[18.229rem]
                    mMobile:min-h-[21.875rem]
                    sLaptop:min-h-[14.58rem]
                    mLaptop:min-h-[18.225rem]
                    desktop:min-h-[21.87rem]
                    largeDesktop:min-h-[27.338rem]
                    text-[0.854rem]
                    mobile:text-[1.139rem]
                    sMobile:text-[1.823rem]
                    mMobile:text-[2.188rem]
                    sLaptop:text-[1.5rem]
                    mLaptop:text-[1.75rem]
                    desktop:text-[2rem]
                    largeDesktop:text-[2.25rem]
                    font-medium
                    `})]})}),mC=k.memo(()=>{const e=Qe(),t=K(js),n=K(q0);return x.jsxs(k.Fragment,{children:[x.jsxs("label",{className:"contactLabelText",htmlFor:"reply_to",children:["Email:",n==="email"?x.jsx("span",{className:`\r
                         font-bold\r
                         sLaptop:text-[1.06rem]\r
                         mLaptop:text-[1.32rem]\r
                         desktop:text-[1.6rem]\r
                         largeDesktop:text-[2rem] \r
                         leading-tight \r
                        `,children:"Problem Found in the Email Field!"}):""]}),x.jsx("input",{value:t,onChange:r=>e(X0(r.target.value.trim())),name:"reply_to",id:"reply_to",type:"email",className:`
                ${n==="email"&&"bg-[rgba(255,148,148,1)]"}
                w-[100%]
                sLaptop:w-[calc(100vw*.3234)]
                largeDesktop:w-[38.813rem]
                extra:w-[45rem]
                py-[0.1953rem]
                px-[0.3906rem]
                mobile:py-[0.2604rem]
                mobile:px-[0.5208rem]
                sMobile:py-[0.4166rem]
                sMobile:px-[0.8333rem]
                mMobile:py-[.5rem]
                mMobile:px-[1rem]
                sLaptop:px-[.4rem]
                sLaptop:py-[.2rem]
                mLaptop:px-[.6rem]
                mLaptop:py-[.3rem]
                desktop:px-[.8rem]
                desktop:py-[.4rem]
                largeDesktop:px-[1rem]
                largeDesktop:py-[.5rem]
                rounded-[0.106rem]
                mobile:rounded-[0.141rem]
                sMobile:rounded-[0.225rem]
                mMobile:rounded-[0.27rem]
                sLaptop:rounded-[0.27rem]
                mLaptop:rounded-[0.338rem]
                desktop:rounded-[0.405rem]
                largeDesktop:rounded-[0.506rem]
                focus:outline-none
                focus:outline-offset-0
                focus:outline-4
                focus:outline-SelectBlue
                text-[0.9522rem]
                mobile:text-[1.2697rem]
                sMobile:text-[2.0316rem]
                mMobile:text-[2.438rem]
                sLaptop:text-[1.75rem]
                mLaptop:text-[2rem]
                desktop:text-[2.25rem]
                largeDesktop:text-[2.5rem]                    
                font-medium
                `,required:!0})]})});class di{constructor(t=0,n="Network Error"){this.status=t,this.text=n}}const hC=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},Le={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:hC()},Td=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},gC=(e,t="https://api.emailjs.com")=>{if(!e)return;const n=Td(e);Le.publicKey=n.publicKey,Le.blockHeadless=n.blockHeadless,Le.storageProvider=n.storageProvider,Le.blockList=n.blockList,Le.limitRate=n.limitRate,Le.origin=n.origin||t},Pv=async(e,t,n={})=>{const r=await fetch(Le.origin+e,{method:"POST",headers:n,body:t}),o=await r.text(),i=new di(r.status,o);if(r.ok)return i;throw i},Tv=(e,t,n)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},yC=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Dv=e=>e.webdriver||!e.languages||e.languages.length===0,Rv=()=>new di(451,"Unavailable For Headless Browser"),vC=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},xC=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},wC=(e,t)=>e instanceof FormData?e.get(t):e[t],jv=(e,t)=>{if(xC(e))return!1;vC(e.list,e.watchVariable);const n=wC(t,e.watchVariable);return typeof n!="string"?!1:e.list.includes(n)},Nv=()=>new di(403,"Forbidden"),kC=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},SC=async(e,t,n)=>{const r=Number(await n.get(e)||0);return t-Date.now()+r},_v=async(e,t,n)=>{if(!t.throttle||!n)return!1;kC(t.throttle,t.id);const r=t.id||e;return await SC(r,t.throttle,n)>0?!0:(await n.set(r,Date.now().toString()),!1)},Av=()=>new di(429,"Too Many Requests"),bC=async(e,t,n,r)=>{const o=Td(r),i=o.publicKey||Le.publicKey,s=o.blockHeadless||Le.blockHeadless,a=Le.storageProvider||o.storageProvider,l={...Le.blockList,...o.blockList},u={...Le.limitRate,...o.limitRate};return s&&Dv(navigator)?Promise.reject(Rv()):(Tv(i,e,t),yC(n),n&&jv(l,n)?Promise.reject(Nv()):await _v(location.pathname,u,a)?Promise.reject(Av()):Pv("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:i,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"}))},LC=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},EC=e=>typeof e=="string"?document.querySelector(e):e,MC=async(e,t,n,r)=>{const o=Td(r),i=o.publicKey||Le.publicKey,s=o.blockHeadless||Le.blockHeadless,a=Le.storageProvider||o.storageProvider,l={...Le.blockList,...o.blockList},u={...Le.limitRate,...o.limitRate};if(s&&Dv(navigator))return Promise.reject(Rv());const d=EC(n);Tv(i,e,t),LC(d);const c=new FormData(d);return jv(l,c)?Promise.reject(Nv()):await _v(location.pathname,u,a)?Promise.reject(Av()):(c.append("lib_version","4.3.3"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",i),Pv("/api/v1.0/email/send-form",c))},CC={init:gC,send:bC,sendForm:MC,EmailJSResponseStatus:di},PC=k.memo(()=>{const e=Qe(),t=K(js),n=K(js),r=k.useRef(null),o=i=>{if(i.preventDefault(),t.trim()===""){e(il("email"));return}if(n.trim()===""){e(il("message"));return}CC.sendForm("service_xmr60i9","template_p24aqcx",r.current,"p1fPRoGfTzwSIiheG").then(s=>{alert("Thank you for your response!"),console.log(s)}).catch(s=>{alert("Problem has occurred please try again"),console.log(s)}),e(il("none")),e(X0("")),e(J0("")),alert("Message has been sent. Thank you!")};return x.jsxs("form",{"data-aos":"fade","data-aos-duration":"1250","data-aos-delay":"0",ref:r,onSubmit:i=>o(i),className:`flex flex-col \r
            w-full\r
            sLaptop:w-auto\r
            gap-[1.221rem]\r
            mobile:gap-[1.629rem]\r
            sMobile:gap-[2.604rem]\r
            mMobile:gap-[3.125rem]\r
            sLaptop:gap-[1.333rem]\r
            mLaptop:gap-[1.667rem]\r
            desktop:gap-[2rem]\r
            largeDesktop:gap-[2.5rem]`,children:[x.jsx("div",{className:` flex flex-col\r
                  w-full\r
                  sLaptop:pr-[3.3rem]\r
                  mLaptop:pr-[4.125rem]\r
                  desktop:pr-[4.95rem]\r
                  largeDesktop:pr-[6.188rem]\r
                  sLaptop:gap-[0.667rem]\r
                  mLaptop:gap-[0.833rem]\r
                  desktop:gap-[1rem]\r
                  largeDesktop:gap-[1.25rem]\r
                  `,children:x.jsx(mC,{})}),x.jsx("div",{className:`flex flex-col\r
                  sLaptop:pr-[3.3rem]\r
                  mLaptop:pr-[4.125rem]\r
                  desktop:pr-[4.95rem]\r
                  largeDesktop:pr-[6.188rem]\r
                  sLaptop:gap-[0.667rem]\r
                  mLaptop:gap-[0.833rem]\r
                  desktop:gap-[1rem]\r
                  largeDesktop:gap-[1.25rem]\r
                  `,children:x.jsx(pC,{})}),x.jsx("div",{className:`\r
                  sLaptop:mt-[1.4rem]\r
                  mLaptop:mt-[1.75rem]\r
                  desktop:mt-[2.119rem]\r
                  largeDesktop:mt-[2.5rem]\r
                  sLaptop:pr-[1rem]\r
                  mLaptop:pr-[1.25rem]\r
                  desktop:pr-[1.5rem]\r
                  largeDesktop:pr-[1.875rem]`,children:x.jsx(fC,{})})]})}),TC="/Newportfolio-ReactViteBuild/assets/Footer.svg",DC="/Newportfolio-ReactViteBuild/assets/character_2.svg",RC="/Newportfolio-ReactViteBuild/assets/instagram.svg",jC="/Newportfolio-ReactViteBuild/assets/linkedin.svg",NC="/Newportfolio-ReactViteBuild/assets/github.svg",_C=()=>{const e=k.useContext(Ce),{pageRef:t}=e,n=()=>{window.scrollTo({top:0,behavior:"smooth"})},r={"https://github.com/253olivares":NC,"https://www.instagram.com/carne_asada_wf/":RC,"https://www.linkedin.com/in/253olivares/":jC};return x.jsxs("footer",{ref:o=>{o&&(t.current[4]=o)},id:"Footer",className:`\r
      w-full\r
      sLaptop:flex flex-col\r
      relative\r
      z-[5]\r
      `,children:[x.jsxs("div",{className:`\r
        hidden\r
        sLaptop:block\r
        w-full \r
        relative`,children:[x.jsx("img",{className:`\r
          sLaptop:w-[calc(100%-3.333rem)]\r
          mLaptop:w-[calc(100%-4.167rem)]\r
          desktop:w-[calc(100%-5rem)]\r
          largeDesktop:w-[calc(100%-6.25rem)]\r
          float-right`,src:TC,alt:"Footer"}),x.jsx("div",{onClick:()=>n(),className:`\r
          absolute \r
          right-0 top-0 \r
          sLaptop:w-[calc(100%-3.333rem)]\r
          mLaptop:w-[calc(100%-4.167rem)]\r
          desktop:w-[calc(100%-5rem)]\r
          largeDesktop:w-[calc(100%-6.25rem)] \r
          flex justify-center`,children:x.jsx("p",{className:`\r
            w-[30rem] \r
            sLaptop:py-[0.65rem]\r
            mLaptop:py-[.75rem]\r
            desktop:py-[.875rem]\r
            largeDesktop:py-[1rem] \r
            font-semibold \r
            text-center \r
            sLaptop:text-[1.5rem]\r
            mLaptop:text-[2.05rem]\r
            desktop:text-[2.5rem]\r
            largeDesktop:text-[3.125rem] \r
            cursor-pointer \r
            text-PrimaryWhite`,children:"To Top"})})]}),x.jsx("div",{className:`\r
        w-full \r
        bg-SidebarGray\r
        `,children:x.jsxs("div",{className:`\r
           w-full\r
           sLaptop:w-[calc(100%-3.333rem)]\r
           mLaptop:w-[calc(100%-4.167rem)]\r
           desktop:w-[calc(100%-5rem)]\r
           largeDesktop:w-[calc(100%-6.25rem)]\r
           px-[0.802rem] py-[0.308rem]\r
           mobile:px-[1.069rem] mobile:py-[0.411rem]\r
           sMobile:px-[1.71rem] sMobile:py-[0.658rem]\r
           mMobile:px-[2.053rem] mMobile:py-[0.789rem]\r
           sLaptop:px-[1.55rem] sLaptop:py-[0.234rem]\r
           mLaptop:px-[1.875rem] mLaptop:py-[0.291rem]\r
           desktop:px-[2.313rem] desktop:py-[0.35rem]\r
           largeDesktop:px-[2.906rem] largeDesktop:py-[0.438rem]\r
\r
           sLaptop:float-right \r
           flex \r
           items-center\r
           justify-between \r
           `,children:[x.jsx("img",{className:`\r
            w-[3.113rem]\r
            mobile:w-[4.15rem]\r
            sMobile:w-[6.64rem]\r
            mMobile:w-[7.968rem]\r
            sLaptop:w-[5.5rem]\r
            mLaptop:w-[7.25rem]\r
            desktop:w-[8.75rem]\r
            largeDesktop:w-[10rem]\r
            `,src:DC,alt:"Character_2"}),x.jsx("div",{className:"flex gap-[0.769rem] mobile:gap-[1.026rem] sMobile:gap-[1.642rem] mMobile:gap-[1.97rem] sLaptop:gap-[1.5rem] mLaptop:gap-[1.875rem] desktop:gap-[2.25rem] largeDesktop:gap-[2.813rem]",children:Object.entries(r).map(([o,i],s)=>x.jsx("a",{href:o,className:"h-full",children:x.jsx("img",{className:" w-[1.108rem] mobile:w-[1.642rem] sMobile:w-[2.627rem] mMobile:w-[3.153rem] sLaptop:w-[2.125rem] mLaptop:w-[2.5rem] desktop:w-[3.125rem] largeDesktop:w-[3.75rem] cursor-pointer hover:opacity-75",src:i,alt:`svg${s}`})},s))})]})})]})},AC=k.memo(()=>{const e=k.useContext(Ce),{pageRef:t,strips:n}=e;return x.jsxs("div",{ref:r=>{r&&(t.current[3]=r)},id:"ContactMe",className:`
    bg-SiteGreen 
    w-full
    pb-[3.223rem]
    mobile:pb-[4.297rem]
    sMobile:pb-[6.8755rem]
    mMobile:pb-[8.25rem]
    sLaptop:pb-0
    `,children:[x.jsxs("div",{className:`\r
        w-full\r
        relative\r
        z-[5]\r
        sLaptop:pl-[3.333rem]\r
        mLaptop:pl-[4.167rem]\r
        desktop:pl-[5rem]\r
        largeDesktop:pl-[6.25rem]\r
        pt-[1.466rem]\r
      mobile:pt-[1.952rem]\r
      sMobile:pt-[3.126rem]\r
      mMobile:pt-[3.75rem]\r
        sLaptop:pt-[1.667rem]\r
        mLaptop:pt-[2.083rem]\r
        desktop:pt-[2.5rem]\r
        largeDesktop:pt-[3.125rem]\r
        pb-[2.198rem]\r
        mobile:pb-[2.93rem]\r
        sMobile:pb-[4.688rem]\r
        mMobile:pb-[5.625rem]\r
        sLaptop:pb-[7.791rem]\r
        mLaptop:pb-[9.754rem]\r
        desktop:pb-[11.655rem]\r
        largeDesktop:pb-[14.6rem]\r
        `,children:[x.jsx("div",{className:`\r
          w-full \r
          px-[6.51%]\r
          sLaptop:pl-[3.6%] \r
          sLaptop:pr-0\r
          extra:pl-0 extra:max-w-[1920px] extra:mx-auto\r
          `,children:x.jsx("h1",{"data-aos":"fade","data-aos-duration":"1250","data-aos-delay":"0",className:"sectionCSS",children:"CONTACT ME"})}),x.jsxs("div",{className:`\r
          w-full \r
          sLaptop:flex \r
          flex-col\r
          sLaptop:flex-row \r
          sLaptop:justify-between \r
          mMobile:gap-0\r
          sLaptop:gap-[4.75%]\r
          mt-[1.494rem]\r
          mobile:mt-[2.009rem]\r
          sMobile:mt-[3.177rem]\r
          mMobile:mt-[3.813rem]\r
          sLaptop:mt-[1.667rem]\r
          mLaptop:mt-[2.083rem]\r
          desktop:mt-[2.5rem]\r
          largeDesktop:mt-[3.125rem]\r
          `,children:[x.jsx("div",{className:`\r
            w-full\r
            sLaptop:w-auto \r
            flex \r
            px-[6.51%]\r
            sLaptop:px-0\r
            sLaptop:flex-grow \r
            justify-end \r
            `,children:x.jsx(PC,{})}),x.jsx(dC,{})]})]}),x.jsx("img",{className:`\r
       absolute bottom-0 left-0\r
       z-[0]\r
       hidden\r
       sLaptop:w-[57.24rem]\r
       mLaptop:w-[71.28rem]\r
       desktop:w-[86.4rem]\r
       largeDesktop:w-[108rem]\r
      `,src:n,alt:"Stripes_2"}),x.jsx(_C,{})]})}),OC=k.memo(()=>{const e=Qe(),t=k.useContext(Ce),{pageRef:n}=t,r=K(O2);return k.useEffect(()=>{const o=()=>{window.scrollY+window.innerHeight*.35>=n.current[3].offsetTop?(e(xr(n.current[3].id)),e(ao(""))):window.scrollY+window.innerHeight*.35>=n.current[2].offsetTop?(e(xr(n.current[2].id)),e(ao(""))):window.scrollY+window.innerHeight*.35>=n.current[1].offsetTop?(e(xr(n.current[1].id)),e(ao(""))):window.scrollY>=n.current[0].offsetTop&&(e(xr(n.current[0].id)),e(ao("")))};return window.addEventListener("scroll",o,!0),()=>{window.removeEventListener("scroll",o,!0)}},[]),k.useEffect(()=>{switch(r){case"Home":n.current[0].scrollIntoView({behavior:"smooth"});break;case"About Me":n.current[1].scrollIntoView({behavior:"smooth"});break;case"Portfolio":n.current[2].scrollIntoView({behavior:"smooth"});break;case"Contact Me":n.current[3].scrollIntoView({behavior:"smooth"});break}},[r]),x.jsxs(x.Fragment,{children:[x.jsx(bL,{}),x.jsx(PL,{}),x.jsx(uC,{}),x.jsx(AC,{})]})});var Ov={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Iv,function(){return function(n){function r(i){if(o[i])return o[i].exports;var s=o[i]={exports:{},id:i,loaded:!1};return n[i].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}var o={};return r.m=n,r.c=o,r.p="dist/",r(0)}([function(n,r,o){function i(O){return O&&O.__esModule?O:{default:O}}var s=Object.assign||function(O){for(var z=1;z<arguments.length;z++){var Y=arguments[z];for(var Pe in Y)Object.prototype.hasOwnProperty.call(Y,Pe)&&(O[Pe]=Y[Pe])}return O},a=o(1),l=(i(a),o(6)),u=i(l),d=o(7),c=i(d),f=o(8),y=i(f),m=o(9),v=i(m),w=o(10),h=i(w),p=o(11),g=i(p),S=o(14),L=i(S),E=[],P=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},_=function(){var O=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(O&&(P=!0),P)return E=(0,g.default)(E,b),(0,h.default)(E,b.once),E},N=function(){E=(0,L.default)(),_()},R=function(){E.forEach(function(O,z){O.node.removeAttribute("data-aos"),O.node.removeAttribute("data-aos-easing"),O.node.removeAttribute("data-aos-duration"),O.node.removeAttribute("data-aos-delay")})},D=function(O){return O===!0||O==="mobile"&&v.default.mobile()||O==="phone"&&v.default.phone()||O==="tablet"&&v.default.tablet()||typeof O=="function"&&O()===!0},B=function(O){b=s(b,O),E=(0,L.default)();var z=document.all&&!window.atob;return D(b.disable)||z?R():(b.disableMutationObserver||y.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),b.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?_(!0):b.startEvent==="load"?window.addEventListener(b.startEvent,function(){_(!0)}):document.addEventListener(b.startEvent,function(){_(!0)}),window.addEventListener("resize",(0,c.default)(_,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(_,b.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,h.default)(E,b.once)},b.throttleDelay)),b.disableMutationObserver||y.default.ready("[data-aos]",N),E)};n.exports={init:B,refresh:_,refreshHard:N}},function(n,r){},,,,,function(n,r){(function(o){function i(D,B,O){function z(H){var Ue=ce,Zt=ze;return ce=ze=void 0,Xt=H,ie=D.apply(Zt,Ue)}function Y(H){return Xt=H,me=setTimeout(F,B),Jt?z(H):ie}function Pe(H){var Ue=H-qe,Zt=H-Xt,Dd=B-Ue;return jt?N(Dd,ye-Zt):Dd}function T(H){var Ue=H-qe,Zt=H-Xt;return qe===void 0||Ue>=B||Ue<0||jt&&Zt>=ye}function F(){var H=R();return T(H)?V(H):void(me=setTimeout(F,Pe(H)))}function V(H){return me=void 0,ee&&ce?z(H):(ce=ze=void 0,ie)}function Q(){me!==void 0&&clearTimeout(me),Xt=0,ce=qe=ze=me=void 0}function J(){return me===void 0?ie:V(R())}function Oe(){var H=R(),Ue=T(H);if(ce=arguments,ze=this,qe=H,Ue){if(me===void 0)return Y(qe);if(jt)return me=setTimeout(F,B),z(qe)}return me===void 0&&(me=setTimeout(F,B)),ie}var ce,ze,ye,ie,me,qe,Xt=0,Jt=!1,jt=!1,ee=!0;if(typeof D!="function")throw new TypeError(f);return B=d(B)||0,a(O)&&(Jt=!!O.leading,jt="maxWait"in O,ye=jt?_(d(O.maxWait)||0,B):ye,ee="trailing"in O?!!O.trailing:ee),Oe.cancel=Q,Oe.flush=J,Oe}function s(D,B,O){var z=!0,Y=!0;if(typeof D!="function")throw new TypeError(f);return a(O)&&(z="leading"in O?!!O.leading:z,Y="trailing"in O?!!O.trailing:Y),i(D,B,{leading:z,maxWait:B,trailing:Y})}function a(D){var B=typeof D>"u"?"undefined":c(D);return!!D&&(B=="object"||B=="function")}function l(D){return!!D&&(typeof D>"u"?"undefined":c(D))=="object"}function u(D){return(typeof D>"u"?"undefined":c(D))=="symbol"||l(D)&&b.call(D)==m}function d(D){if(typeof D=="number")return D;if(u(D))return y;if(a(D)){var B=typeof D.valueOf=="function"?D.valueOf():D;D=a(B)?B+"":B}if(typeof D!="string")return D===0?D:+D;D=D.replace(v,"");var O=h.test(D);return O||p.test(D)?g(D.slice(2),O?2:8):w.test(D)?y:+D}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},f="Expected a function",y=NaN,m="[object Symbol]",v=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,S=(typeof o>"u"?"undefined":c(o))=="object"&&o&&o.Object===Object&&o,L=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,E=S||L||Function("return this")(),P=Object.prototype,b=P.toString,_=Math.max,N=Math.min,R=function(){return E.Date.now()};n.exports=s}).call(r,function(){return this}())},function(n,r){(function(o){function i(R,D,B){function O(ee){var H=Oe,Ue=ce;return Oe=ce=void 0,qe=ee,ye=R.apply(Ue,H)}function z(ee){return qe=ee,ie=setTimeout(T,D),Xt?O(ee):ye}function Y(ee){var H=ee-me,Ue=ee-qe,Zt=D-H;return Jt?_(Zt,ze-Ue):Zt}function Pe(ee){var H=ee-me,Ue=ee-qe;return me===void 0||H>=D||H<0||Jt&&Ue>=ze}function T(){var ee=N();return Pe(ee)?F(ee):void(ie=setTimeout(T,Y(ee)))}function F(ee){return ie=void 0,jt&&Oe?O(ee):(Oe=ce=void 0,ye)}function V(){ie!==void 0&&clearTimeout(ie),qe=0,Oe=me=ce=ie=void 0}function Q(){return ie===void 0?ye:F(N())}function J(){var ee=N(),H=Pe(ee);if(Oe=arguments,ce=this,me=ee,H){if(ie===void 0)return z(me);if(Jt)return ie=setTimeout(T,D),O(me)}return ie===void 0&&(ie=setTimeout(T,D)),ye}var Oe,ce,ze,ye,ie,me,qe=0,Xt=!1,Jt=!1,jt=!0;if(typeof R!="function")throw new TypeError(c);return D=u(D)||0,s(B)&&(Xt=!!B.leading,Jt="maxWait"in B,ze=Jt?b(u(B.maxWait)||0,D):ze,jt="trailing"in B?!!B.trailing:jt),J.cancel=V,J.flush=Q,J}function s(R){var D=typeof R>"u"?"undefined":d(R);return!!R&&(D=="object"||D=="function")}function a(R){return!!R&&(typeof R>"u"?"undefined":d(R))=="object"}function l(R){return(typeof R>"u"?"undefined":d(R))=="symbol"||a(R)&&P.call(R)==y}function u(R){if(typeof R=="number")return R;if(l(R))return f;if(s(R)){var D=typeof R.valueOf=="function"?R.valueOf():R;R=s(D)?D+"":D}if(typeof R!="string")return R===0?R:+R;R=R.replace(m,"");var B=w.test(R);return B||h.test(R)?p(R.slice(2),B?2:8):v.test(R)?f:+R}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},c="Expected a function",f=NaN,y="[object Symbol]",m=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,h=/^0o[0-7]+$/i,p=parseInt,g=(typeof o>"u"?"undefined":d(o))=="object"&&o&&o.Object===Object&&o,S=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,L=g||S||Function("return this")(),E=Object.prototype,P=E.toString,b=Math.max,_=Math.min,N=function(){return L.Date.now()};n.exports=i}).call(r,function(){return this}())},function(n,r){function o(d){var c=void 0,f=void 0;for(c=0;c<d.length;c+=1)if(f=d[c],f.dataset&&f.dataset.aos||f.children&&o(f.children))return!0;return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(){return!!i()}function a(d,c){var f=window.document,y=i(),m=new y(l);u=c,m.observe(f.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(d){d&&d.forEach(function(c){var f=Array.prototype.slice.call(c.addedNodes),y=Array.prototype.slice.call(c.removedNodes),m=f.concat(y);if(o(m))return u()})}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){};r.default={isSupported:s,ready:a}},function(n,r){function o(f,y){if(!(f instanceof y))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function f(y,m){for(var v=0;v<m.length;v++){var w=m[v];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(y,w.key,w)}}return function(y,m,v){return m&&f(y.prototype,m),v&&f(y,v),y}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function f(){o(this,f)}return s(f,[{key:"phone",value:function(){var y=i();return!(!a.test(y)&&!l.test(y.substr(0,4)))}},{key:"mobile",value:function(){var y=i();return!(!u.test(y)&&!d.test(y.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),f}();r.default=new c},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(s,a,l){var u=s.node.getAttribute("data-aos-once");a>s.position?s.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!l&&u!=="true")&&s.node.classList.remove("aos-animate")},i=function(s,a){var l=window.pageYOffset,u=window.innerHeight;s.forEach(function(d,c){o(d,u+l,a)})};r.default=i},function(n,r,o){function i(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var s=o(12),a=i(s),l=function(u,d){return u.forEach(function(c,f){c.node.classList.add("aos-init"),c.position=(0,a.default)(c.node,d.offset)}),u};r.default=l},function(n,r,o){function i(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var s=o(13),a=i(s),l=function(u,d){var c=0,f=0,y=window.innerHeight,m={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(m.offset&&!isNaN(m.offset)&&(f=parseInt(m.offset)),m.anchor&&document.querySelectorAll(m.anchor)&&(u=document.querySelectorAll(m.anchor)[0]),c=(0,a.default)(u).top,m.anchorPlacement){case"top-bottom":break;case"center-bottom":c+=u.offsetHeight/2;break;case"bottom-bottom":c+=u.offsetHeight;break;case"top-center":c+=y/2;break;case"bottom-center":c+=y/2+u.offsetHeight;break;case"center-center":c+=y/2+u.offsetHeight/2;break;case"top-top":c+=y;break;case"bottom-top":c+=u.offsetHeight+y;break;case"center-top":c+=u.offsetHeight/2+y}return m.anchorPlacement||m.offset||isNaN(d)||(f=d),c+f};r.default=l},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(i){for(var s=0,a=0;i&&!isNaN(i.offsetLeft)&&!isNaN(i.offsetTop);)s+=i.offsetLeft-(i.tagName!="BODY"?i.scrollLeft:0),a+=i.offsetTop-(i.tagName!="BODY"?i.scrollTop:0),i=i.offsetParent;return{top:a,left:s}};r.default=o},function(n,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(i){return i=i||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(i,function(s){return{node:s}})};r.default=o}])})})(Ov);var FC=Ov.exports;const VC=Pm(FC),BC=()=>(k.useEffect(()=>{VC.init({once:!0,easing:"ease-out-cubic"});const e=Ns.dispatch(Qi()),t=Ns.dispatch(wo());return()=>{t.abort(),e.abort()}},[]),x.jsx(k.Fragment,{children:x.jsx(Ok,{children:x.jsx(e0,{children:x.jsxs(xo,{path:"Newportfolio-ReactViteBuild/",element:x.jsx(xL,{}),children:[x.jsx(xo,{index:!0,element:x.jsx(OC,{})}),x.jsx(xo,{path:"*",element:x.jsx(mL,{})})]})})})}));kl.createRoot(document.getElementById("root")).render(x.jsx(k.StrictMode,{children:x.jsx(cL,{store:Ns,children:x.jsx(ck,{children:x.jsx(e0,{children:x.jsx(xo,{path:"/*",element:x.jsx(BC,{})})})})})}));
