var Vv=Object.defineProperty;var Bv=(e,t,r)=>t in e?Vv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ba=(e,t,r)=>(Bv(e,typeof t!="symbol"?t+"":t,r),r);function Iv(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(n,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var zv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tm={exports:{}},zs={},Dm={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xo=Symbol.for("react.element"),Uv=Symbol.for("react.portal"),$v=Symbol.for("react.fragment"),Wv=Symbol.for("react.strict_mode"),Hv=Symbol.for("react.profiler"),Kv=Symbol.for("react.provider"),Gv=Symbol.for("react.context"),Yv=Symbol.for("react.forward_ref"),qv=Symbol.for("react.suspense"),Qv=Symbol.for("react.memo"),Xv=Symbol.for("react.lazy"),Rd=Symbol.iterator;function Jv(e){return e===null||typeof e!="object"?null:(e=Rd&&e[Rd]||e["@@iterator"],typeof e=="function"?e:null)}var Rm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jm=Object.assign,Nm={};function In(e,t,r){this.props=e,this.context=t,this.refs=Nm,this.updater=r||Rm}In.prototype.isReactComponent={};In.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};In.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _m(){}_m.prototype=In.prototype;function Uu(e,t,r){this.props=e,this.context=t,this.refs=Nm,this.updater=r||Rm}var $u=Uu.prototype=new _m;$u.constructor=Uu;jm($u,In.prototype);$u.isPureReactComponent=!0;var jd=Array.isArray,Am=Object.prototype.hasOwnProperty,Wu={current:null},Om={key:!0,ref:!0,__self:!0,__source:!0};function Fm(e,t,r){var n,o={},i=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Am.call(t,n)&&!Om.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(a===1)o.children=r;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)o[n]===void 0&&(o[n]=a[n]);return{$$typeof:Xo,type:e,key:i,ref:s,props:o,_owner:Wu.current}}function Zv(e,t){return{$$typeof:Xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xo}function e1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Nd=/\/+/g;function Sa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?e1(""+e.key):t.toString(36)}function _i(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Xo:case Uv:s=!0}}if(s)return s=e,o=o(s),e=n===""?"."+Sa(s,0):n,jd(o)?(r="",e!=null&&(r=e.replace(Nd,"$&/")+"/"),_i(o,t,r,"",function(u){return u})):o!=null&&(Hu(o)&&(o=Zv(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Nd,"$&/")+"/")+e)),t.push(o)),1;if(s=0,n=n===""?".":n+":",jd(e))for(var a=0;a<e.length;a++){i=e[a];var l=n+Sa(i,a);s+=_i(i,t,r,l,o)}else if(l=Jv(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=n+Sa(i,a++),s+=_i(i,t,r,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function pi(e,t,r){if(e==null)return e;var n=[],o=0;return _i(e,n,"","",function(i){return t.call(r,i,o++)}),n}function t1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},Ai={transition:null},r1={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:Wu};I.Children={map:pi,forEach:function(e,t,r){pi(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return pi(e,function(){t++}),t},toArray:function(e){return pi(e,function(t){return t})||[]},only:function(e){if(!Hu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=In;I.Fragment=$v;I.Profiler=Hv;I.PureComponent=Uu;I.StrictMode=Wv;I.Suspense=qv;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r1;I.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=jm({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Wu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Am.call(t,l)&&!Om.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];n.children=a}return{$$typeof:Xo,type:e.type,key:o,ref:i,props:n,_owner:s}};I.createContext=function(e){return e={$$typeof:Gv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kv,_context:e},e.Consumer=e};I.createElement=Fm;I.createFactory=function(e){var t=Fm.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:Yv,render:e}};I.isValidElement=Hu;I.lazy=function(e){return{$$typeof:Xv,_payload:{_status:-1,_result:e},_init:t1}};I.memo=function(e,t){return{$$typeof:Qv,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=Ai.transition;Ai.transition={};try{e()}finally{Ai.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return Be.current.useCallback(e,t)};I.useContext=function(e){return Be.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};I.useEffect=function(e,t){return Be.current.useEffect(e,t)};I.useId=function(){return Be.current.useId()};I.useImperativeHandle=function(e,t,r){return Be.current.useImperativeHandle(e,t,r)};I.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Be.current.useMemo(e,t)};I.useReducer=function(e,t,r){return Be.current.useReducer(e,t,r)};I.useRef=function(e){return Be.current.useRef(e)};I.useState=function(e){return Be.current.useState(e)};I.useSyncExternalStore=function(e,t,r){return Be.current.useSyncExternalStore(e,t,r)};I.useTransition=function(){return Be.current.useTransition()};I.version="18.2.0";Dm.exports=I;var k=Dm.exports;const Vm=Pm(k),wl=Iv({__proto__:null,default:Vm},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1=k,o1=Symbol.for("react.element"),i1=Symbol.for("react.fragment"),s1=Object.prototype.hasOwnProperty,a1=n1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l1={key:!0,ref:!0,__self:!0,__source:!0};function Bm(e,t,r){var n,o={},i=null,s=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)s1.call(t,n)&&!l1.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:o1,type:e,key:i,ref:s,props:o,_owner:a1.current}}zs.Fragment=i1;zs.jsx=Bm;zs.jsxs=Bm;Tm.exports=zs;var x=Tm.exports,kl={},Im={exports:{}},it={},zm={exports:{}},Um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,F){var V=T.length;T.push(F);e:for(;0<V;){var q=V-1>>>1,J=T[q];if(0<o(J,F))T[q]=F,T[V]=J,V=q;else break e}}function r(T){return T.length===0?null:T[0]}function n(T){if(T.length===0)return null;var F=T[0],V=T.pop();if(V!==F){T[0]=V;e:for(var q=0,J=T.length,Oe=J>>>1;q<Oe;){var ce=2*(q+1)-1,ze=T[ce],ye=ce+1,ie=T[ye];if(0>o(ze,V))ye<J&&0>o(ie,ze)?(T[q]=ie,T[ye]=V,q=ye):(T[q]=ze,T[ce]=V,q=ce);else if(ye<J&&0>o(ie,V))T[q]=ie,T[ye]=V,q=ye;else break e}}return F}function o(T,F){var V=T.sortIndex-F.sortIndex;return V!==0?V:T.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,p=3,y=!1,m=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var F=r(u);F!==null;){if(F.callback===null)n(u);else if(F.startTime<=T)n(u),F.sortIndex=F.expirationTime,t(l,F);else break;F=r(u)}}function b(T){if(v=!1,g(T),!m)if(r(l)!==null)m=!0,Y(L);else{var F=r(u);F!==null&&Pe(b,F.startTime-T)}}function L(T,F){m=!1,v&&(v=!1,h(S),S=-1),y=!0;var V=p;try{for(g(F),d=r(l);d!==null&&(!(d.expirationTime>F)||T&&!R());){var q=d.callback;if(typeof q=="function"){d.callback=null,p=d.priorityLevel;var J=q(d.expirationTime<=F);F=e.unstable_now(),typeof J=="function"?d.callback=J:d===r(l)&&n(l),g(F)}else n(l);d=r(l)}if(d!==null)var Oe=!0;else{var ce=r(u);ce!==null&&Pe(b,ce.startTime-F),Oe=!1}return Oe}finally{d=null,p=V,y=!1}}var M=!1,P=null,S=-1,_=5,N=-1;function R(){return!(e.unstable_now()-N<_)}function D(){if(P!==null){var T=e.unstable_now();N=T;var F=!0;try{F=P(!0,T)}finally{F?B():(M=!1,P=null)}}else M=!1}var B;if(typeof f=="function")B=function(){f(D)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,z=O.port2;O.port1.onmessage=D,B=function(){z.postMessage(null)}}else B=function(){w(D,0)};function Y(T){P=T,M||(M=!0,B())}function Pe(T,F){S=w(function(){T(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){m||y||(m=!0,Y(L))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var F=3;break;default:F=p}var V=p;p=F;try{return T()}finally{p=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,F){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var V=p;p=T;try{return F()}finally{p=V}},e.unstable_scheduleCallback=function(T,F,V){var q=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?q+V:q):V=q,T){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=V+J,T={id:c++,callback:F,priorityLevel:T,startTime:V,expirationTime:J,sortIndex:-1},V>q?(T.sortIndex=V,t(u,T),r(l)===null&&T===r(u)&&(v?(h(S),S=-1):v=!0,Pe(b,V-q))):(T.sortIndex=J,t(l,T),m||y||(m=!0,Y(L))),T},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(T){var F=p;return function(){var V=p;p=F;try{return T.apply(this,arguments)}finally{p=V}}}})(Um);zm.exports=Um;var u1=zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m=k,tt=u1;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wm=new Set,Mo={};function en(e,t){Dn(e,t),Dn(e+"Capture",t)}function Dn(e,t){for(Mo[e]=t,e=0;e<t.length;e++)Wm.add(t[e])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bl=Object.prototype.hasOwnProperty,c1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_d={},Ad={};function d1(e){return bl.call(Ad,e)?!0:bl.call(_d,e)?!1:c1.test(e)?Ad[e]=!0:(_d[e]=!0,!1)}function p1(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function f1(e,t,r,n){if(t===null||typeof t>"u"||p1(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,r,n,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ku=/[\-:]([a-z])/g;function Gu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ku,Gu);Ee[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ku,Gu);Ee[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ku,Gu);Ee[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yu(e,t,r,n){var o=Ee.hasOwnProperty(t)?Ee[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(f1(t,r,o,n)&&(r=null),n||o===null?d1(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Qt=$m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fi=Symbol.for("react.element"),sn=Symbol.for("react.portal"),an=Symbol.for("react.fragment"),qu=Symbol.for("react.strict_mode"),Sl=Symbol.for("react.profiler"),Hm=Symbol.for("react.provider"),Km=Symbol.for("react.context"),Qu=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),Ml=Symbol.for("react.suspense_list"),Xu=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),Gm=Symbol.for("react.offscreen"),Od=Symbol.iterator;function Kn(e){return e===null||typeof e!="object"?null:(e=Od&&e[Od]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,La;function ro(e){if(La===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);La=t&&t[1]||""}return`
`+La+e}var Ma=!1;function Ea(e,t){if(!e||Ma)return"";Ma=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=n.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ma=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ro(e):""}function m1(e){switch(e.tag){case 5:return ro(e.type);case 16:return ro("Lazy");case 13:return ro("Suspense");case 19:return ro("SuspenseList");case 0:case 2:case 15:return e=Ea(e.type,!1),e;case 11:return e=Ea(e.type.render,!1),e;case 1:return e=Ea(e.type,!0),e;default:return""}}function El(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case an:return"Fragment";case sn:return"Portal";case Sl:return"Profiler";case qu:return"StrictMode";case Ll:return"Suspense";case Ml:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Km:return(e.displayName||"Context")+".Consumer";case Hm:return(e._context.displayName||"Context")+".Provider";case Qu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xu:return t=e.displayName||null,t!==null?t:El(e.type)||"Memo";case nr:t=e._payload,e=e._init;try{return El(e(t))}catch{}}return null}function h1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return El(t);case 8:return t===qu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function br(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ym(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function g1(e){var t=Ym(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mi(e){e._valueTracker||(e._valueTracker=g1(e))}function qm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Ym(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cl(e,t){var r=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Fd(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=br(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qm(e,t){t=t.checked,t!=null&&Yu(e,"checked",t,!1)}function Pl(e,t){Qm(e,t);var r=br(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Tl(e,t.type,br(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vd(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Tl(e,t,r){(t!=="number"||Zi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var no=Array.isArray;function Ln(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+br(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bd(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(C(92));if(no(r)){if(1<r.length)throw Error(C(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:br(r)}}function Xm(e,t){var r=br(t.value),n=br(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Id(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hi,Zm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hi=hi||document.createElement("div"),hi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Eo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y1=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(e){y1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),uo[t]=uo[e]})});function eh(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||uo.hasOwnProperty(e)&&uo[e]?(""+t).trim():t+"px"}function th(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=eh(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var v1=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jl(e,t){if(t){if(v1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Nl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _l=null;function Ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Al=null,Mn=null,En=null;function zd(e){if(e=ei(e)){if(typeof Al!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Ks(t),Al(e.stateNode,e.type,t))}}function rh(e){Mn?En?En.push(e):En=[e]:Mn=e}function nh(){if(Mn){var e=Mn,t=En;if(En=Mn=null,zd(e),t)for(e=0;e<t.length;e++)zd(t[e])}}function oh(e,t){return e(t)}function ih(){}var Ca=!1;function sh(e,t,r){if(Ca)return e(t,r);Ca=!0;try{return oh(e,t,r)}finally{Ca=!1,(Mn!==null||En!==null)&&(ih(),nh())}}function Co(e,t){var r=e.stateNode;if(r===null)return null;var n=Ks(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(C(231,t,typeof r));return r}var Ol=!1;if(Wt)try{var Gn={};Object.defineProperty(Gn,"passive",{get:function(){Ol=!0}}),window.addEventListener("test",Gn,Gn),window.removeEventListener("test",Gn,Gn)}catch{Ol=!1}function x1(e,t,r,n,o,i,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(c){this.onError(c)}}var co=!1,es=null,ts=!1,Fl=null,w1={onError:function(e){co=!0,es=e}};function k1(e,t,r,n,o,i,s,a,l){co=!1,es=null,x1.apply(w1,arguments)}function b1(e,t,r,n,o,i,s,a,l){if(k1.apply(this,arguments),co){if(co){var u=es;co=!1,es=null}else throw Error(C(198));ts||(ts=!0,Fl=u)}}function tn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ah(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ud(e){if(tn(e)!==e)throw Error(C(188))}function S1(e){var t=e.alternate;if(!t){if(t=tn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return Ud(o),e;if(i===n)return Ud(o),t;i=i.sibling}throw Error(C(188))}if(r.return!==n.return)r=o,n=i;else{for(var s=!1,a=o.child;a;){if(a===r){s=!0,r=o,n=i;break}if(a===n){s=!0,n=o,r=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===r){s=!0,r=i,n=o;break}if(a===n){s=!0,n=i,r=o;break}a=a.sibling}if(!s)throw Error(C(189))}}if(r.alternate!==n)throw Error(C(190))}if(r.tag!==3)throw Error(C(188));return r.stateNode.current===r?e:t}function lh(e){return e=S1(e),e!==null?uh(e):null}function uh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uh(e);if(t!==null)return t;e=e.sibling}return null}var ch=tt.unstable_scheduleCallback,$d=tt.unstable_cancelCallback,L1=tt.unstable_shouldYield,M1=tt.unstable_requestPaint,ue=tt.unstable_now,E1=tt.unstable_getCurrentPriorityLevel,Zu=tt.unstable_ImmediatePriority,dh=tt.unstable_UserBlockingPriority,rs=tt.unstable_NormalPriority,C1=tt.unstable_LowPriority,ph=tt.unstable_IdlePriority,Us=null,Pt=null;function P1(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Us,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:R1,T1=Math.log,D1=Math.LN2;function R1(e){return e>>>=0,e===0?32:31-(T1(e)/D1|0)|0}var gi=64,yi=4194304;function oo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ns(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,s=r&268435455;if(s!==0){var a=s&~o;a!==0?n=oo(a):(i&=s,i!==0&&(n=oo(i)))}else s=r&~o,s!==0?n=oo(s):i!==0&&(n=oo(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-kt(t),o=1<<r,n|=e[r],t&=~o;return n}function j1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N1(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-kt(i),a=1<<s,l=o[s];l===-1?(!(a&r)||a&n)&&(o[s]=j1(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function Vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function fh(){var e=gi;return gi<<=1,!(gi&4194240)&&(gi=64),e}function Pa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Jo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=r}function _1(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-kt(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function ec(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-kt(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var H=0;function mh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hh,tc,gh,yh,vh,Bl=!1,vi=[],dr=null,pr=null,fr=null,Po=new Map,To=new Map,sr=[],A1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wd(e,t){switch(e){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(t.pointerId)}}function Yn(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ei(t),t!==null&&tc(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function O1(e,t,r,n,o){switch(t){case"focusin":return dr=Yn(dr,e,t,r,n,o),!0;case"dragenter":return pr=Yn(pr,e,t,r,n,o),!0;case"mouseover":return fr=Yn(fr,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return Po.set(i,Yn(Po.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,To.set(i,Yn(To.get(i)||null,e,t,r,n,o)),!0}return!1}function xh(e){var t=Ir(e.target);if(t!==null){var r=tn(t);if(r!==null){if(t=r.tag,t===13){if(t=ah(r),t!==null){e.blockedOn=t,vh(e.priority,function(){gh(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);_l=n,r.target.dispatchEvent(n),_l=null}else return t=ei(r),t!==null&&tc(t),e.blockedOn=r,!1;t.shift()}return!0}function Hd(e,t,r){Oi(e)&&r.delete(t)}function F1(){Bl=!1,dr!==null&&Oi(dr)&&(dr=null),pr!==null&&Oi(pr)&&(pr=null),fr!==null&&Oi(fr)&&(fr=null),Po.forEach(Hd),To.forEach(Hd)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Bl||(Bl=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,F1)))}function Do(e){function t(o){return qn(o,e)}if(0<vi.length){qn(vi[0],e);for(var r=1;r<vi.length;r++){var n=vi[r];n.blockedOn===e&&(n.blockedOn=null)}}for(dr!==null&&qn(dr,e),pr!==null&&qn(pr,e),fr!==null&&qn(fr,e),Po.forEach(t),To.forEach(t),r=0;r<sr.length;r++)n=sr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<sr.length&&(r=sr[0],r.blockedOn===null);)xh(r),r.blockedOn===null&&sr.shift()}var Cn=Qt.ReactCurrentBatchConfig,os=!0;function V1(e,t,r,n){var o=H,i=Cn.transition;Cn.transition=null;try{H=1,rc(e,t,r,n)}finally{H=o,Cn.transition=i}}function B1(e,t,r,n){var o=H,i=Cn.transition;Cn.transition=null;try{H=4,rc(e,t,r,n)}finally{H=o,Cn.transition=i}}function rc(e,t,r,n){if(os){var o=Il(e,t,r,n);if(o===null)Va(e,t,n,is,r),Wd(e,n);else if(O1(o,e,t,r,n))n.stopPropagation();else if(Wd(e,n),t&4&&-1<A1.indexOf(e)){for(;o!==null;){var i=ei(o);if(i!==null&&hh(i),i=Il(e,t,r,n),i===null&&Va(e,t,n,is,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else Va(e,t,n,null,r)}}var is=null;function Il(e,t,r,n){if(is=null,e=Ju(n),e=Ir(e),e!==null)if(t=tn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ah(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return is=e,null}function wh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E1()){case Zu:return 1;case dh:return 4;case rs:case C1:return 16;case ph:return 536870912;default:return 16}default:return 16}}var lr=null,nc=null,Fi=null;function kh(){if(Fi)return Fi;var e,t=nc,r=t.length,n,o="value"in lr?lr.value:lr.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===o[i-n];n++);return Fi=o.slice(e,1<n?1-n:void 0)}function Vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function Kd(){return!1}function st(e){function t(r,n,o,i,s){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xi:Kd,this.isPropagationStopped=Kd,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=st(zn),Zo=oe({},zn,{view:0,detail:0}),I1=st(Zo),Ta,Da,Qn,$s=oe({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ic,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(Ta=e.screenX-Qn.screenX,Da=e.screenY-Qn.screenY):Da=Ta=0,Qn=e),Ta)},movementY:function(e){return"movementY"in e?e.movementY:Da}}),Gd=st($s),z1=oe({},$s,{dataTransfer:0}),U1=st(z1),$1=oe({},Zo,{relatedTarget:0}),Ra=st($1),W1=oe({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),H1=st(W1),K1=oe({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),G1=st(K1),Y1=oe({},zn,{data:0}),Yd=st(Y1),q1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=X1[e])?!!t[e]:!1}function ic(){return J1}var Z1=oe({},Zo,{key:function(e){if(e.key){var t=q1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ic,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ex=st(Z1),tx=oe({},$s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=st(tx),rx=oe({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ic}),nx=st(rx),ox=oe({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ix=st(ox),sx=oe({},$s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ax=st(sx),lx=[9,13,27,32],sc=Wt&&"CompositionEvent"in window,po=null;Wt&&"documentMode"in document&&(po=document.documentMode);var ux=Wt&&"TextEvent"in window&&!po,bh=Wt&&(!sc||po&&8<po&&11>=po),Qd=" ",Xd=!1;function Sh(e,t){switch(e){case"keyup":return lx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ln=!1;function cx(e,t){switch(e){case"compositionend":return Lh(t);case"keypress":return t.which!==32?null:(Xd=!0,Qd);case"textInput":return e=t.data,e===Qd&&Xd?null:e;default:return null}}function dx(e,t){if(ln)return e==="compositionend"||!sc&&Sh(e,t)?(e=kh(),Fi=nc=lr=null,ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bh&&t.locale!=="ko"?null:t.data;default:return null}}var px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!px[e.type]:t==="textarea"}function Mh(e,t,r,n){rh(n),t=ss(t,"onChange"),0<t.length&&(r=new oc("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var fo=null,Ro=null;function fx(e){Oh(e,0)}function Ws(e){var t=dn(e);if(qm(t))return e}function mx(e,t){if(e==="change")return t}var Eh=!1;if(Wt){var ja;if(Wt){var Na="oninput"in document;if(!Na){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),Na=typeof Zd.oninput=="function"}ja=Na}else ja=!1;Eh=ja&&(!document.documentMode||9<document.documentMode)}function ep(){fo&&(fo.detachEvent("onpropertychange",Ch),Ro=fo=null)}function Ch(e){if(e.propertyName==="value"&&Ws(Ro)){var t=[];Mh(t,Ro,e,Ju(e)),sh(fx,t)}}function hx(e,t,r){e==="focusin"?(ep(),fo=t,Ro=r,fo.attachEvent("onpropertychange",Ch)):e==="focusout"&&ep()}function gx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ws(Ro)}function yx(e,t){if(e==="click")return Ws(t)}function vx(e,t){if(e==="input"||e==="change")return Ws(t)}function xx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:xx;function jo(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!bl.call(t,o)||!St(e[o],t[o]))return!1}return!0}function tp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rp(e,t){var r=tp(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=tp(r)}}function Ph(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ph(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Th(){for(var e=window,t=Zi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Zi(e.document)}return t}function ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wx(e){var t=Th(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ph(r.ownerDocument.documentElement,r)){if(n!==null&&ac(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=rp(r,i);var s=rp(r,n);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kx=Wt&&"documentMode"in document&&11>=document.documentMode,un=null,zl=null,mo=null,Ul=!1;function np(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ul||un==null||un!==Zi(n)||(n=un,"selectionStart"in n&&ac(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),mo&&jo(mo,n)||(mo=n,n=ss(zl,"onSelect"),0<n.length&&(t=new oc("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=un)))}function wi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var cn={animationend:wi("Animation","AnimationEnd"),animationiteration:wi("Animation","AnimationIteration"),animationstart:wi("Animation","AnimationStart"),transitionend:wi("Transition","TransitionEnd")},_a={},Dh={};Wt&&(Dh=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);function Hs(e){if(_a[e])return _a[e];if(!cn[e])return e;var t=cn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Dh)return _a[e]=t[r];return e}var Rh=Hs("animationend"),jh=Hs("animationiteration"),Nh=Hs("animationstart"),_h=Hs("transitionend"),Ah=new Map,op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(e,t){Ah.set(e,t),en(t,[e])}for(var Aa=0;Aa<op.length;Aa++){var Oa=op[Aa],bx=Oa.toLowerCase(),Sx=Oa[0].toUpperCase()+Oa.slice(1);Pr(bx,"on"+Sx)}Pr(Rh,"onAnimationEnd");Pr(jh,"onAnimationIteration");Pr(Nh,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(_h,"onTransitionEnd");Dn("onMouseEnter",["mouseout","mouseover"]);Dn("onMouseLeave",["mouseout","mouseover"]);Dn("onPointerEnter",["pointerout","pointerover"]);Dn("onPointerLeave",["pointerout","pointerover"]);en("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));en("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));en("onBeforeInput",["compositionend","keypress","textInput","paste"]);en("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));en("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));en("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lx=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function ip(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,b1(n,t,void 0,e),e.currentTarget=null}function Oh(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var a=n[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;ip(o,a,u),i=l}else for(s=0;s<n.length;s++){if(a=n[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;ip(o,a,u),i=l}}}if(ts)throw e=Fl,ts=!1,Fl=null,e}function Q(e,t){var r=t[Gl];r===void 0&&(r=t[Gl]=new Set);var n=e+"__bubble";r.has(n)||(Fh(t,e,2,!1),r.add(n))}function Fa(e,t,r){var n=0;t&&(n|=4),Fh(r,e,n,t)}var ki="_reactListening"+Math.random().toString(36).slice(2);function No(e){if(!e[ki]){e[ki]=!0,Wm.forEach(function(r){r!=="selectionchange"&&(Lx.has(r)||Fa(r,!1,e),Fa(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ki]||(t[ki]=!0,Fa("selectionchange",!1,t))}}function Fh(e,t,r,n){switch(wh(t)){case 1:var o=V1;break;case 4:o=B1;break;default:o=rc}r=o.bind(null,t,r,e),o=void 0,!Ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Va(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var a=n.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=n.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Ir(a),s===null)return;if(l=s.tag,l===5||l===6){n=i=s;continue e}a=a.parentNode}}n=n.return}sh(function(){var u=i,c=Ju(r),d=[];e:{var p=Ah.get(e);if(p!==void 0){var y=oc,m=e;switch(e){case"keypress":if(Vi(r)===0)break e;case"keydown":case"keyup":y=ex;break;case"focusin":m="focus",y=Ra;break;case"focusout":m="blur",y=Ra;break;case"beforeblur":case"afterblur":y=Ra;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=U1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=nx;break;case Rh:case jh:case Nh:y=H1;break;case _h:y=ix;break;case"scroll":y=I1;break;case"wheel":y=ax;break;case"copy":case"cut":case"paste":y=G1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qd}var v=(t&4)!==0,w=!v&&e==="scroll",h=v?p!==null?p+"Capture":null:p;v=[];for(var f=u,g;f!==null;){g=f;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,h!==null&&(b=Co(f,h),b!=null&&v.push(_o(f,b,g)))),w)break;f=f.return}0<v.length&&(p=new y(p,m,null,r,c),d.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&r!==_l&&(m=r.relatedTarget||r.fromElement)&&(Ir(m)||m[Ht]))break e;if((y||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,y?(m=r.relatedTarget||r.toElement,y=u,m=m?Ir(m):null,m!==null&&(w=tn(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(y=null,m=u),y!==m)){if(v=Gd,b="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=qd,b="onPointerLeave",h="onPointerEnter",f="pointer"),w=y==null?p:dn(y),g=m==null?p:dn(m),p=new v(b,f+"leave",y,r,c),p.target=w,p.relatedTarget=g,b=null,Ir(c)===u&&(v=new v(h,f+"enter",m,r,c),v.target=g,v.relatedTarget=w,b=v),w=b,y&&m)t:{for(v=y,h=m,f=0,g=v;g;g=on(g))f++;for(g=0,b=h;b;b=on(b))g++;for(;0<f-g;)v=on(v),f--;for(;0<g-f;)h=on(h),g--;for(;f--;){if(v===h||h!==null&&v===h.alternate)break t;v=on(v),h=on(h)}v=null}else v=null;y!==null&&sp(d,p,y,v,!1),m!==null&&w!==null&&sp(d,w,m,v,!0)}}e:{if(p=u?dn(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var L=mx;else if(Jd(p))if(Eh)L=vx;else{L=gx;var M=hx}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(L=yx);if(L&&(L=L(e,u))){Mh(d,L,r,c);break e}M&&M(e,p,u),e==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&Tl(p,"number",p.value)}switch(M=u?dn(u):window,e){case"focusin":(Jd(M)||M.contentEditable==="true")&&(un=M,zl=u,mo=null);break;case"focusout":mo=zl=un=null;break;case"mousedown":Ul=!0;break;case"contextmenu":case"mouseup":case"dragend":Ul=!1,np(d,r,c);break;case"selectionchange":if(kx)break;case"keydown":case"keyup":np(d,r,c)}var P;if(sc)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else ln?Sh(e,r)&&(S="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(S="onCompositionStart");S&&(bh&&r.locale!=="ko"&&(ln||S!=="onCompositionStart"?S==="onCompositionEnd"&&ln&&(P=kh()):(lr=c,nc="value"in lr?lr.value:lr.textContent,ln=!0)),M=ss(u,S),0<M.length&&(S=new Yd(S,e,null,r,c),d.push({event:S,listeners:M}),P?S.data=P:(P=Lh(r),P!==null&&(S.data=P)))),(P=ux?cx(e,r):dx(e,r))&&(u=ss(u,"onBeforeInput"),0<u.length&&(c=new Yd("onBeforeInput","beforeinput",null,r,c),d.push({event:c,listeners:u}),c.data=P))}Oh(d,t)})}function _o(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ss(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Co(e,r),i!=null&&n.unshift(_o(e,i,o)),i=Co(e,t),i!=null&&n.push(_o(e,i,o))),e=e.return}return n}function on(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sp(e,t,r,n,o){for(var i=t._reactName,s=[];r!==null&&r!==n;){var a=r,l=a.alternate,u=a.stateNode;if(l!==null&&l===n)break;a.tag===5&&u!==null&&(a=u,o?(l=Co(r,i),l!=null&&s.unshift(_o(r,l,a))):o||(l=Co(r,i),l!=null&&s.push(_o(r,l,a)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var Mx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function ap(e){return(typeof e=="string"?e:""+e).replace(Mx,`
`).replace(Ex,"")}function bi(e,t,r){if(t=ap(t),ap(e)!==t&&r)throw Error(C(425))}function as(){}var $l=null,Wl=null;function Hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kl=typeof setTimeout=="function"?setTimeout:void 0,Cx=typeof clearTimeout=="function"?clearTimeout:void 0,lp=typeof Promise=="function"?Promise:void 0,Px=typeof queueMicrotask=="function"?queueMicrotask:typeof lp<"u"?function(e){return lp.resolve(null).then(e).catch(Tx)}:Kl;function Tx(e){setTimeout(function(){throw e})}function Ba(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Do(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Do(t)}function mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function up(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Un=Math.random().toString(36).slice(2),Et="__reactFiber$"+Un,Ao="__reactProps$"+Un,Ht="__reactContainer$"+Un,Gl="__reactEvents$"+Un,Dx="__reactListeners$"+Un,Rx="__reactHandles$"+Un;function Ir(e){var t=e[Et];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ht]||r[Et]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=up(e);e!==null;){if(r=e[Et])return r;e=up(e)}return t}e=r,r=e.parentNode}return null}function ei(e){return e=e[Et]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Ks(e){return e[Ao]||null}var Yl=[],pn=-1;function Tr(e){return{current:e}}function X(e){0>pn||(e.current=Yl[pn],Yl[pn]=null,pn--)}function G(e,t){pn++,Yl[pn]=e.current,e.current=t}var Sr={},Ae=Tr(Sr),He=Tr(!1),Yr=Sr;function Rn(e,t){var r=e.type.contextTypes;if(!r)return Sr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ke(e){return e=e.childContextTypes,e!=null}function ls(){X(He),X(Ae)}function cp(e,t,r){if(Ae.current!==Sr)throw Error(C(168));G(Ae,t),G(He,r)}function Vh(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(C(108,h1(e)||"Unknown",o));return oe({},r,n)}function us(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,Yr=Ae.current,G(Ae,e),G(He,He.current),!0}function dp(e,t,r){var n=e.stateNode;if(!n)throw Error(C(169));r?(e=Vh(e,t,Yr),n.__reactInternalMemoizedMergedChildContext=e,X(He),X(Ae),G(Ae,e)):X(He),G(He,r)}var _t=null,Gs=!1,Ia=!1;function Bh(e){_t===null?_t=[e]:_t.push(e)}function jx(e){Gs=!0,Bh(e)}function Dr(){if(!Ia&&_t!==null){Ia=!0;var e=0,t=H;try{var r=_t;for(H=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}_t=null,Gs=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),ch(Zu,Dr),o}finally{H=t,Ia=!1}}return null}var fn=[],mn=0,cs=null,ds=0,ut=[],ct=0,qr=null,At=1,Ot="";function _r(e,t){fn[mn++]=ds,fn[mn++]=cs,cs=e,ds=t}function Ih(e,t,r){ut[ct++]=At,ut[ct++]=Ot,ut[ct++]=qr,qr=e;var n=At;e=Ot;var o=32-kt(n)-1;n&=~(1<<o),r+=1;var i=32-kt(t)+o;if(30<i){var s=o-o%5;i=(n&(1<<s)-1).toString(32),n>>=s,o-=s,At=1<<32-kt(t)+o|r<<o|n,Ot=i+e}else At=1<<i|r<<o|n,Ot=e}function lc(e){e.return!==null&&(_r(e,1),Ih(e,1,0))}function uc(e){for(;e===cs;)cs=fn[--mn],fn[mn]=null,ds=fn[--mn],fn[mn]=null;for(;e===qr;)qr=ut[--ct],ut[ct]=null,Ot=ut[--ct],ut[ct]=null,At=ut[--ct],ut[ct]=null}var et=null,Je=null,Z=!1,xt=null;function zh(e,t){var r=dt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function pp(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,Je=mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=qr!==null?{id:At,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=dt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,et=e,Je=null,!0):!1;default:return!1}}function ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ql(e){if(Z){var t=Je;if(t){var r=t;if(!pp(e,t)){if(ql(e))throw Error(C(418));t=mr(r.nextSibling);var n=et;t&&pp(e,t)?zh(n,r):(e.flags=e.flags&-4097|2,Z=!1,et=e)}}else{if(ql(e))throw Error(C(418));e.flags=e.flags&-4097|2,Z=!1,et=e}}}function fp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function Si(e){if(e!==et)return!1;if(!Z)return fp(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hl(e.type,e.memoizedProps)),t&&(t=Je)){if(ql(e))throw Uh(),Error(C(418));for(;t;)zh(e,t),t=mr(t.nextSibling)}if(fp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Je=mr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=et?mr(e.stateNode.nextSibling):null;return!0}function Uh(){for(var e=Je;e;)e=mr(e.nextSibling)}function jn(){Je=et=null,Z=!1}function cc(e){xt===null?xt=[e]:xt.push(e)}var Nx=Qt.ReactCurrentBatchConfig;function yt(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var ps=Tr(null),fs=null,hn=null,dc=null;function pc(){dc=hn=fs=null}function fc(e){var t=ps.current;X(ps),e._currentValue=t}function Xl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Pn(e,t){fs=e,dc=hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(dc!==e)if(e={context:e,memoizedValue:t,next:null},hn===null){if(fs===null)throw Error(C(308));hn=e,fs.dependencies={lanes:0,firstContext:e}}else hn=hn.next=e;return t}var zr=null;function mc(e){zr===null?zr=[e]:zr.push(e)}function $h(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,mc(t)):(r.next=o.next,o.next=r),t.interleaved=r,Kt(e,n)}function Kt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var or=!1;function hc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,$&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,Kt(e,r)}return o=n.interleaved,o===null?(t.next=t,mc(n)):(t.next=o.next,o.next=t),n.interleaved=t,Kt(e,r)}function Bi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ec(e,r)}}function mp(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=s:i=i.next=s,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ms(e,t,r,n){var o=e.updateQueue;or=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(i!==null){var d=o.baseState;s=0,c=u=l=null,a=i;do{var p=a.lane,y=a.eventTime;if((n&p)===p){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,v=a;switch(p=t,y=r,v.tag){case 1:if(m=v.payload,typeof m=="function"){d=m.call(y,d,p);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,p=typeof m=="function"?m.call(y,d,p):m,p==null)break e;d=oe({},d,p);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=d):c=c.next=y,s|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Xr|=s,e.lanes=s,e.memoizedState=d}}function hp(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(C(191,o));o.call(n)}}}var Hh=new $m.Component().refs;function Jl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:oe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ys={isMounted:function(e){return(e=e._reactInternals)?tn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ve(),o=yr(e),i=Vt(n,o);i.payload=t,r!=null&&(i.callback=r),t=hr(e,i,o),t!==null&&(bt(t,e,o,n),Bi(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ve(),o=yr(e),i=Vt(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=hr(e,i,o),t!==null&&(bt(t,e,o,n),Bi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ve(),n=yr(e),o=Vt(r,n);o.tag=2,t!=null&&(o.callback=t),t=hr(e,o,n),t!==null&&(bt(t,e,n,r),Bi(t,e,n))}};function gp(e,t,r,n,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!jo(r,n)||!jo(o,i):!0}function Kh(e,t,r){var n=!1,o=Sr,i=t.contextType;return typeof i=="object"&&i!==null?i=mt(i):(o=Ke(t)?Yr:Ae.current,n=t.contextTypes,i=(n=n!=null)?Rn(e,o):Sr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ys,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function yp(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ys.enqueueReplaceState(t,t.state,null)}function Zl(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=Hh,hc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=mt(i):(i=Ke(t)?Yr:Ae.current,o.context=Rn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Jl(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ys.enqueueReplaceState(o,o.state,null),ms(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(C(309));var n=r.stateNode}if(!n)throw Error(C(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;a===Hh&&(a=o.refs={}),s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!r._owner)throw Error(C(290,e))}return e}function Li(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vp(e){var t=e._init;return t(e._payload)}function Gh(e){function t(h,f){if(e){var g=h.deletions;g===null?(h.deletions=[f],h.flags|=16):g.push(f)}}function r(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function n(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function o(h,f){return h=vr(h,f),h.index=0,h.sibling=null,h}function i(h,f,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<f?(h.flags|=2,f):g):(h.flags|=2,f)):(h.flags|=1048576,f)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,f,g,b){return f===null||f.tag!==6?(f=Ga(g,h.mode,b),f.return=h,f):(f=o(f,g),f.return=h,f)}function l(h,f,g,b){var L=g.type;return L===an?c(h,f,g.props.children,b,g.key):f!==null&&(f.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===nr&&vp(L)===f.type)?(b=o(f,g.props),b.ref=Xn(h,f,g),b.return=h,b):(b=Hi(g.type,g.key,g.props,null,h.mode,b),b.ref=Xn(h,f,g),b.return=h,b)}function u(h,f,g,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ya(g,h.mode,b),f.return=h,f):(f=o(f,g.children||[]),f.return=h,f)}function c(h,f,g,b,L){return f===null||f.tag!==7?(f=Hr(g,h.mode,b,L),f.return=h,f):(f=o(f,g),f.return=h,f)}function d(h,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ga(""+f,h.mode,g),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case fi:return g=Hi(f.type,f.key,f.props,null,h.mode,g),g.ref=Xn(h,null,f),g.return=h,g;case sn:return f=Ya(f,h.mode,g),f.return=h,f;case nr:var b=f._init;return d(h,b(f._payload),g)}if(no(f)||Kn(f))return f=Hr(f,h.mode,g,null),f.return=h,f;Li(h,f)}return null}function p(h,f,g,b){var L=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return L!==null?null:a(h,f,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case fi:return g.key===L?l(h,f,g,b):null;case sn:return g.key===L?u(h,f,g,b):null;case nr:return L=g._init,p(h,f,L(g._payload),b)}if(no(g)||Kn(g))return L!==null?null:c(h,f,g,b,null);Li(h,g)}return null}function y(h,f,g,b,L){if(typeof b=="string"&&b!==""||typeof b=="number")return h=h.get(g)||null,a(f,h,""+b,L);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case fi:return h=h.get(b.key===null?g:b.key)||null,l(f,h,b,L);case sn:return h=h.get(b.key===null?g:b.key)||null,u(f,h,b,L);case nr:var M=b._init;return y(h,f,g,M(b._payload),L)}if(no(b)||Kn(b))return h=h.get(g)||null,c(f,h,b,L,null);Li(f,b)}return null}function m(h,f,g,b){for(var L=null,M=null,P=f,S=f=0,_=null;P!==null&&S<g.length;S++){P.index>S?(_=P,P=null):_=P.sibling;var N=p(h,P,g[S],b);if(N===null){P===null&&(P=_);break}e&&P&&N.alternate===null&&t(h,P),f=i(N,f,S),M===null?L=N:M.sibling=N,M=N,P=_}if(S===g.length)return r(h,P),Z&&_r(h,S),L;if(P===null){for(;S<g.length;S++)P=d(h,g[S],b),P!==null&&(f=i(P,f,S),M===null?L=P:M.sibling=P,M=P);return Z&&_r(h,S),L}for(P=n(h,P);S<g.length;S++)_=y(P,h,S,g[S],b),_!==null&&(e&&_.alternate!==null&&P.delete(_.key===null?S:_.key),f=i(_,f,S),M===null?L=_:M.sibling=_,M=_);return e&&P.forEach(function(R){return t(h,R)}),Z&&_r(h,S),L}function v(h,f,g,b){var L=Kn(g);if(typeof L!="function")throw Error(C(150));if(g=L.call(g),g==null)throw Error(C(151));for(var M=L=null,P=f,S=f=0,_=null,N=g.next();P!==null&&!N.done;S++,N=g.next()){P.index>S?(_=P,P=null):_=P.sibling;var R=p(h,P,N.value,b);if(R===null){P===null&&(P=_);break}e&&P&&R.alternate===null&&t(h,P),f=i(R,f,S),M===null?L=R:M.sibling=R,M=R,P=_}if(N.done)return r(h,P),Z&&_r(h,S),L;if(P===null){for(;!N.done;S++,N=g.next())N=d(h,N.value,b),N!==null&&(f=i(N,f,S),M===null?L=N:M.sibling=N,M=N);return Z&&_r(h,S),L}for(P=n(h,P);!N.done;S++,N=g.next())N=y(P,h,S,N.value,b),N!==null&&(e&&N.alternate!==null&&P.delete(N.key===null?S:N.key),f=i(N,f,S),M===null?L=N:M.sibling=N,M=N);return e&&P.forEach(function(D){return t(h,D)}),Z&&_r(h,S),L}function w(h,f,g,b){if(typeof g=="object"&&g!==null&&g.type===an&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case fi:e:{for(var L=g.key,M=f;M!==null;){if(M.key===L){if(L=g.type,L===an){if(M.tag===7){r(h,M.sibling),f=o(M,g.props.children),f.return=h,h=f;break e}}else if(M.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===nr&&vp(L)===M.type){r(h,M.sibling),f=o(M,g.props),f.ref=Xn(h,M,g),f.return=h,h=f;break e}r(h,M);break}else t(h,M);M=M.sibling}g.type===an?(f=Hr(g.props.children,h.mode,b,g.key),f.return=h,h=f):(b=Hi(g.type,g.key,g.props,null,h.mode,b),b.ref=Xn(h,f,g),b.return=h,h=b)}return s(h);case sn:e:{for(M=g.key;f!==null;){if(f.key===M)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){r(h,f.sibling),f=o(f,g.children||[]),f.return=h,h=f;break e}else{r(h,f);break}else t(h,f);f=f.sibling}f=Ya(g,h.mode,b),f.return=h,h=f}return s(h);case nr:return M=g._init,w(h,f,M(g._payload),b)}if(no(g))return m(h,f,g,b);if(Kn(g))return v(h,f,g,b);Li(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(r(h,f.sibling),f=o(f,g),f.return=h,h=f):(r(h,f),f=Ga(g,h.mode,b),f.return=h,h=f),s(h)):r(h,f)}return w}var Nn=Gh(!0),Yh=Gh(!1),ti={},Tt=Tr(ti),Oo=Tr(ti),Fo=Tr(ti);function Ur(e){if(e===ti)throw Error(C(174));return e}function gc(e,t){switch(G(Fo,t),G(Oo,e),G(Tt,ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Rl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Rl(t,e)}X(Tt),G(Tt,t)}function _n(){X(Tt),X(Oo),X(Fo)}function qh(e){Ur(Fo.current);var t=Ur(Tt.current),r=Rl(t,e.type);t!==r&&(G(Oo,e),G(Tt,r))}function yc(e){Oo.current===e&&(X(Tt),X(Oo))}var te=Tr(0);function hs(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var za=[];function vc(){for(var e=0;e<za.length;e++)za[e]._workInProgressVersionPrimary=null;za.length=0}var Ii=Qt.ReactCurrentDispatcher,Ua=Qt.ReactCurrentBatchConfig,Qr=0,ne=null,he=null,ve=null,gs=!1,ho=!1,Vo=0,_x=0;function Te(){throw Error(C(321))}function xc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!St(e[r],t[r]))return!1;return!0}function wc(e,t,r,n,o,i){if(Qr=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ii.current=e===null||e.memoizedState===null?Vx:Bx,e=r(n,o),ho){i=0;do{if(ho=!1,Vo=0,25<=i)throw Error(C(301));i+=1,ve=he=null,t.updateQueue=null,Ii.current=Ix,e=r(n,o)}while(ho)}if(Ii.current=ys,t=he!==null&&he.next!==null,Qr=0,ve=he=ne=null,gs=!1,t)throw Error(C(300));return e}function kc(){var e=Vo!==0;return Vo=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ne.memoizedState=ve=e:ve=ve.next=e,ve}function ht(){if(he===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ve===null?ne.memoizedState:ve.next;if(t!==null)ve=t,he=e;else{if(e===null)throw Error(C(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ve===null?ne.memoizedState=ve=e:ve=ve.next=e}return ve}function Bo(e,t){return typeof t=="function"?t(e):t}function $a(e){var t=ht(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=he,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var a=s=null,l=null,u=i;do{var c=u.lane;if((Qr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=n):l=l.next=d,ne.lanes|=c,Xr|=c}u=u.next}while(u!==null&&u!==i);l===null?s=n:l.next=a,St(n,t.memoizedState)||(We=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,ne.lanes|=i,Xr|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Wa(e){var t=ht(),r=t.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);St(i,t.memoizedState)||(We=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function Qh(){}function Xh(e,t){var r=ne,n=ht(),o=t(),i=!St(n.memoizedState,o);if(i&&(n.memoizedState=o,We=!0),n=n.queue,bc(eg.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(r.flags|=2048,Io(9,Zh.bind(null,r,n,o,t),void 0,null),xe===null)throw Error(C(349));Qr&30||Jh(r,t,o)}return o}function Jh(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Zh(e,t,r,n){t.value=r,t.getSnapshot=n,tg(t)&&rg(e)}function eg(e,t,r){return r(function(){tg(t)&&rg(e)})}function tg(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!St(e,r)}catch{return!0}}function rg(e){var t=Kt(e,1);t!==null&&bt(t,e,1,-1)}function xp(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t.queue=e,e=e.dispatch=Fx.bind(null,ne,e),[t.memoizedState,e]}function Io(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function ng(){return ht().memoizedState}function zi(e,t,r,n){var o=Mt();ne.flags|=e,o.memoizedState=Io(1|t,r,void 0,n===void 0?null:n)}function qs(e,t,r,n){var o=ht();n=n===void 0?null:n;var i=void 0;if(he!==null){var s=he.memoizedState;if(i=s.destroy,n!==null&&xc(n,s.deps)){o.memoizedState=Io(t,r,i,n);return}}ne.flags|=e,o.memoizedState=Io(1|t,r,i,n)}function wp(e,t){return zi(8390656,8,e,t)}function bc(e,t){return qs(2048,8,e,t)}function og(e,t){return qs(4,2,e,t)}function ig(e,t){return qs(4,4,e,t)}function sg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ag(e,t,r){return r=r!=null?r.concat([e]):null,qs(4,4,sg.bind(null,t,e),r)}function Sc(){}function lg(e,t){var r=ht();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&xc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ug(e,t){var r=ht();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&xc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function cg(e,t,r){return Qr&21?(St(r,t)||(r=fh(),ne.lanes|=r,Xr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=r)}function Ax(e,t){var r=H;H=r!==0&&4>r?r:4,e(!0);var n=Ua.transition;Ua.transition={};try{e(!1),t()}finally{H=r,Ua.transition=n}}function dg(){return ht().memoizedState}function Ox(e,t,r){var n=yr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},pg(e))fg(t,r);else if(r=$h(e,t,r,n),r!==null){var o=Ve();bt(r,e,n,o),mg(r,t,n)}}function Fx(e,t,r){var n=yr(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(pg(e))fg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,r);if(o.hasEagerState=!0,o.eagerState=a,St(a,s)){var l=t.interleaved;l===null?(o.next=o,mc(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}r=$h(e,t,o,n),r!==null&&(o=Ve(),bt(r,e,n,o),mg(r,t,n))}}function pg(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function fg(e,t){ho=gs=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function mg(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ec(e,r)}}var ys={readContext:mt,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},Vx={readContext:mt,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:wp,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,zi(4194308,4,sg.bind(null,t,e),r)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return zi(4,2,e,t)},useMemo:function(e,t){var r=Mt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Mt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Ox.bind(null,ne,e),[n.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:xp,useDebugValue:Sc,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=xp(!1),t=e[0];return e=Ax.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ne,o=Mt();if(Z){if(r===void 0)throw Error(C(407));r=r()}else{if(r=t(),xe===null)throw Error(C(349));Qr&30||Jh(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,wp(eg.bind(null,n,i,e),[e]),n.flags|=2048,Io(9,Zh.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=Mt(),t=xe.identifierPrefix;if(Z){var r=Ot,n=At;r=(n&~(1<<32-kt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Vo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=_x++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bx={readContext:mt,useCallback:lg,useContext:mt,useEffect:bc,useImperativeHandle:ag,useInsertionEffect:og,useLayoutEffect:ig,useMemo:ug,useReducer:$a,useRef:ng,useState:function(){return $a(Bo)},useDebugValue:Sc,useDeferredValue:function(e){var t=ht();return cg(t,he.memoizedState,e)},useTransition:function(){var e=$a(Bo)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Qh,useSyncExternalStore:Xh,useId:dg,unstable_isNewReconciler:!1},Ix={readContext:mt,useCallback:lg,useContext:mt,useEffect:bc,useImperativeHandle:ag,useInsertionEffect:og,useLayoutEffect:ig,useMemo:ug,useReducer:Wa,useRef:ng,useState:function(){return Wa(Bo)},useDebugValue:Sc,useDeferredValue:function(e){var t=ht();return he===null?t.memoizedState=e:cg(t,he.memoizedState,e)},useTransition:function(){var e=Wa(Bo)[0],t=ht().memoizedState;return[e,t]},useMutableSource:Qh,useSyncExternalStore:Xh,useId:dg,unstable_isNewReconciler:!1};function An(e,t){try{var r="",n=t;do r+=m1(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ha(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function eu(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var zx=typeof WeakMap=="function"?WeakMap:Map;function hg(e,t,r){r=Vt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){xs||(xs=!0,cu=n),eu(e,t)},r}function gg(e,t,r){r=Vt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){eu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){eu(e,t),typeof n!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function kp(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new zx;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=tw.bind(null,e,t,r),t.then(e,e))}function bp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sp(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Vt(-1,1),t.tag=2,hr(r,t,1))),r.lanes|=1),e)}var Ux=Qt.ReactCurrentOwner,We=!1;function Fe(e,t,r,n){t.child=e===null?Yh(t,null,r,n):Nn(t,e.child,r,n)}function Lp(e,t,r,n,o){r=r.render;var i=t.ref;return Pn(t,o),n=wc(e,t,r,n,i,o),r=kc(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gt(e,t,o)):(Z&&r&&lc(t),t.flags|=1,Fe(e,t,n,o),t.child)}function Mp(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!Rc(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,yg(e,t,i,n,o)):(e=Hi(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(r=r.compare,r=r!==null?r:jo,r(s,n)&&e.ref===t.ref)return Gt(e,t,o)}return t.flags|=1,e=vr(i,n),e.ref=t.ref,e.return=t,t.child=e}function yg(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(jo(i,n)&&e.ref===t.ref)if(We=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,Gt(e,t,o)}return tu(e,t,r,n,o)}function vg(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(yn,Xe),Xe|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(yn,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,G(yn,Xe),Xe|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,G(yn,Xe),Xe|=n;return Fe(e,t,o,r),t.child}function xg(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function tu(e,t,r,n,o){var i=Ke(r)?Yr:Ae.current;return i=Rn(t,i),Pn(t,o),r=wc(e,t,r,n,i,o),n=kc(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gt(e,t,o)):(Z&&n&&lc(t),t.flags|=1,Fe(e,t,r,o),t.child)}function Ep(e,t,r,n,o){if(Ke(r)){var i=!0;us(t)}else i=!1;if(Pn(t,o),t.stateNode===null)Ui(e,t),Kh(t,r,n),Zl(t,r,n,o),n=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=mt(u):(u=Ke(r)?Yr:Ae.current,u=Rn(t,u));var c=r.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==n||l!==u)&&yp(t,s,n,u),or=!1;var p=t.memoizedState;s.state=p,ms(t,n,s,o),l=t.memoizedState,a!==n||p!==l||He.current||or?(typeof c=="function"&&(Jl(t,r,c,n),l=t.memoizedState),(a=or||gp(t,r,a,n,p,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),s.props=n,s.state=l,s.context=u,n=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,Wh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:yt(t.type,a),s.props=u,d=t.pendingProps,p=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=mt(l):(l=Ke(r)?Yr:Ae.current,l=Rn(t,l));var y=r.getDerivedStateFromProps;(c=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||p!==l)&&yp(t,s,n,l),or=!1,p=t.memoizedState,s.state=p,ms(t,n,s,o);var m=t.memoizedState;a!==d||p!==m||He.current||or?(typeof y=="function"&&(Jl(t,r,y,n),m=t.memoizedState),(u=or||gp(t,r,u,n,p,m,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,m,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=m),s.props=n,s.state=m,s.context=l,n=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return ru(e,t,r,n,i,o)}function ru(e,t,r,n,o,i){xg(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return o&&dp(t,r,!1),Gt(e,t,i);n=t.stateNode,Ux.current=t;var a=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=Nn(t,e.child,null,i),t.child=Nn(t,null,a,i)):Fe(e,t,a,i),t.memoizedState=n.state,o&&dp(t,r,!0),t.child}function wg(e){var t=e.stateNode;t.pendingContext?cp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cp(e,t.context,!1),gc(e,t.containerInfo)}function Cp(e,t,r,n,o){return jn(),cc(o),t.flags|=256,Fe(e,t,r,n),t.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function ou(e){return{baseLanes:e,cachePool:null,transitions:null}}function kg(e,t,r){var n=t.pendingProps,o=te.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),G(te,o&1),e===null)return Ql(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,i?(n=t.mode,i=t.child,s={mode:"hidden",children:s},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Js(s,n,0,null),e=Hr(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ou(r),t.memoizedState=nu,e):Lc(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return $x(e,t,s,n,a,o,r);if(i){i=n.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:n.children};return!(s&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=vr(o,l),n.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=vr(a,i):(i=Hr(i,s,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,s=e.child.memoizedState,s=s===null?ou(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~r,t.memoizedState=nu,n}return i=e.child,e=i.sibling,n=vr(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Lc(e,t){return t=Js({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mi(e,t,r,n){return n!==null&&cc(n),Nn(t,e.child,null,r),e=Lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $x(e,t,r,n,o,i,s){if(r)return t.flags&256?(t.flags&=-257,n=Ha(Error(C(422))),Mi(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Js({mode:"visible",children:n.children},o,0,null),i=Hr(i,o,s,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&Nn(t,e.child,null,s),t.child.memoizedState=ou(s),t.memoizedState=nu,i);if(!(t.mode&1))return Mi(e,t,s,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var a=n.dgst;return n=a,i=Error(C(419)),n=Ha(i,n,void 0),Mi(e,t,s,n)}if(a=(s&e.childLanes)!==0,We||a){if(n=xe,n!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Kt(e,o),bt(n,e,o,-1))}return Dc(),n=Ha(Error(C(421))),Mi(e,t,s,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=rw.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Je=mr(o.nextSibling),et=t,Z=!0,xt=null,e!==null&&(ut[ct++]=At,ut[ct++]=Ot,ut[ct++]=qr,At=e.id,Ot=e.overflow,qr=t),t=Lc(t,n.children),t.flags|=4096,t)}function Pp(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Xl(e.return,t,r)}function Ka(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function bg(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Fe(e,t,n.children,r),n=te.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pp(e,r,t);else if(e.tag===19)Pp(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(G(te,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&hs(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Ka(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&hs(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Ka(t,!0,r,null,i);break;case"together":Ka(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ui(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Xr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,r=vr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=vr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Wx(e,t,r){switch(t.tag){case 3:wg(t),jn();break;case 5:qh(t);break;case 1:Ke(t.type)&&us(t);break;case 4:gc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;G(ps,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(G(te,te.current&1),t.flags|=128,null):r&t.child.childLanes?kg(e,t,r):(G(te,te.current&1),e=Gt(e,t,r),e!==null?e.sibling:null);G(te,te.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return bg(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(te,te.current),n)break;return null;case 22:case 23:return t.lanes=0,vg(e,t,r)}return Gt(e,t,r)}var Sg,iu,Lg,Mg;Sg=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};iu=function(){};Lg=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Ur(Tt.current);var i=null;switch(r){case"input":o=Cl(e,o),n=Cl(e,n),i=[];break;case"select":o=oe({},o,{value:void 0}),n=oe({},n,{value:void 0}),i=[];break;case"textarea":o=Dl(e,o),n=Dl(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=as)}jl(r,n);var s;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var l=n[u];if(a=o!=null?o[u]:void 0,n.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(i||(i=[]),i.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Q("scroll",e),i||a===l||(i=[])):(i=i||[]).push(u,l))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Mg=function(e,t,r,n){r!==n&&(t.flags|=4)};function Jn(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Hx(e,t,r){var n=t.pendingProps;switch(uc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return Ke(t.type)&&ls(),De(t),null;case 3:return n=t.stateNode,_n(),X(He),X(Ae),vc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Si(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(fu(xt),xt=null))),iu(e,t),De(t),null;case 5:yc(t);var o=Ur(Fo.current);if(r=t.type,e!==null&&t.stateNode!=null)Lg(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(C(166));return De(t),null}if(e=Ur(Tt.current),Si(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[Et]=t,n[Ao]=i,e=(t.mode&1)!==0,r){case"dialog":Q("cancel",n),Q("close",n);break;case"iframe":case"object":case"embed":Q("load",n);break;case"video":case"audio":for(o=0;o<io.length;o++)Q(io[o],n);break;case"source":Q("error",n);break;case"img":case"image":case"link":Q("error",n),Q("load",n);break;case"details":Q("toggle",n);break;case"input":Fd(n,i),Q("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Q("invalid",n);break;case"textarea":Bd(n,i),Q("invalid",n)}jl(r,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?n.textContent!==a&&(i.suppressHydrationWarning!==!0&&bi(n.textContent,a,e),o=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&bi(n.textContent,a,e),o=["children",""+a]):Mo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Q("scroll",n)}switch(r){case"input":mi(n),Vd(n,i,!0);break;case"textarea":mi(n),Id(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=as)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jm(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[Et]=t,e[Ao]=n,Sg(e,t,!1,!1),t.stateNode=e;e:{switch(s=Nl(r,n),r){case"dialog":Q("cancel",e),Q("close",e),o=n;break;case"iframe":case"object":case"embed":Q("load",e),o=n;break;case"video":case"audio":for(o=0;o<io.length;o++)Q(io[o],e);o=n;break;case"source":Q("error",e),o=n;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=n;break;case"details":Q("toggle",e),o=n;break;case"input":Fd(e,n),o=Cl(e,n),Q("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=oe({},n,{value:void 0}),Q("invalid",e);break;case"textarea":Bd(e,n),o=Dl(e,n),Q("invalid",e);break;default:o=n}jl(r,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?th(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zm(e,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Eo(e,l):typeof l=="number"&&Eo(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Q("scroll",e):l!=null&&Yu(e,i,l,s))}switch(r){case"input":mi(e),Vd(e,n,!1);break;case"textarea":mi(e),Id(e);break;case"option":n.value!=null&&e.setAttribute("value",""+br(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?Ln(e,!!n.multiple,i,!1):n.defaultValue!=null&&Ln(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=as)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return De(t),null;case 6:if(e&&t.stateNode!=null)Mg(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(C(166));if(r=Ur(Fo.current),Ur(Tt.current),Si(t)){if(n=t.stateNode,r=t.memoizedProps,n[Et]=t,(i=n.nodeValue!==r)&&(e=et,e!==null))switch(e.tag){case 3:bi(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bi(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Et]=t,t.stateNode=n}return De(t),null;case 13:if(X(te),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Je!==null&&t.mode&1&&!(t.flags&128))Uh(),jn(),t.flags|=98560,i=!1;else if(i=Si(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[Et]=t}else jn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else xt!==null&&(fu(xt),xt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?ge===0&&(ge=3):Dc())),t.updateQueue!==null&&(t.flags|=4),De(t),null);case 4:return _n(),iu(e,t),e===null&&No(t.stateNode.containerInfo),De(t),null;case 10:return fc(t.type._context),De(t),null;case 17:return Ke(t.type)&&ls(),De(t),null;case 19:if(X(te),i=t.memoizedState,i===null)return De(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)Jn(i,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=hs(e),s!==null){for(t.flags|=128,Jn(i,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return G(te,te.current&1|2),t.child}e=e.sibling}i.tail!==null&&ue()>On&&(t.flags|=128,n=!0,Jn(i,!1),t.lanes=4194304)}else{if(!n)if(e=hs(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Jn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Z)return De(t),null}else 2*ue()-i.renderingStartTime>On&&r!==1073741824&&(t.flags|=128,n=!0,Jn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(r=i.last,r!==null?r.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ue(),t.sibling=null,r=te.current,G(te,n?r&1|2:r&1),t):(De(t),null);case 22:case 23:return Tc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Xe&1073741824&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Kx(e,t){switch(uc(t),t.tag){case 1:return Ke(t.type)&&ls(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(),X(He),X(Ae),vc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yc(t),null;case 13:if(X(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(te),null;case 4:return _n(),null;case 10:return fc(t.type._context),null;case 22:case 23:return Tc(),null;case 24:return null;default:return null}}var Ei=!1,je=!1,Gx=typeof WeakSet=="function"?WeakSet:Set,j=null;function gn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){se(e,t,n)}else r.current=null}function su(e,t,r){try{r()}catch(n){se(e,t,n)}}var Tp=!1;function Yx(e,t){if($l=os,e=Th(),ac(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var y;d!==r||o!==0&&d.nodeType!==3||(a=s+o),d!==i||n!==0&&d.nodeType!==3||(l=s+n),d.nodeType===3&&(s+=d.nodeValue.length),(y=d.firstChild)!==null;)p=d,d=y;for(;;){if(d===e)break t;if(p===r&&++u===o&&(a=s),p===i&&++c===n&&(l=s),(y=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=y}r=a===-1||l===-1?null:{start:a,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Wl={focusedElem:e,selectionRange:r},os=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,w=m.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:yt(t.type,v),w);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(b){se(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return m=Tp,Tp=!1,m}function go(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&su(t,r,i)}o=o.next}while(o!==n)}}function Qs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function au(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Eg(e){var t=e.alternate;t!==null&&(e.alternate=null,Eg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[Ao],delete t[Gl],delete t[Dx],delete t[Rx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cg(e){return e.tag===5||e.tag===3||e.tag===4}function Dp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lu(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=as));else if(n!==4&&(e=e.child,e!==null))for(lu(e,t,r),e=e.sibling;e!==null;)lu(e,t,r),e=e.sibling}function uu(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(uu(e,t,r),e=e.sibling;e!==null;)uu(e,t,r),e=e.sibling}var be=null,vt=!1;function er(e,t,r){for(r=r.child;r!==null;)Pg(e,t,r),r=r.sibling}function Pg(e,t,r){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Us,r)}catch{}switch(r.tag){case 5:je||gn(r,t);case 6:var n=be,o=vt;be=null,er(e,t,r),be=n,vt=o,be!==null&&(vt?(e=be,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):be.removeChild(r.stateNode));break;case 18:be!==null&&(vt?(e=be,r=r.stateNode,e.nodeType===8?Ba(e.parentNode,r):e.nodeType===1&&Ba(e,r),Do(e)):Ba(be,r.stateNode));break;case 4:n=be,o=vt,be=r.stateNode.containerInfo,vt=!0,er(e,t,r),be=n,vt=o;break;case 0:case 11:case 14:case 15:if(!je&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&su(r,t,s),o=o.next}while(o!==n)}er(e,t,r);break;case 1:if(!je&&(gn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){se(r,t,a)}er(e,t,r);break;case 21:er(e,t,r);break;case 22:r.mode&1?(je=(n=je)||r.memoizedState!==null,er(e,t,r),je=n):er(e,t,r);break;default:er(e,t,r)}}function Rp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Gx),t.forEach(function(n){var o=nw.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function gt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:be=a.stateNode,vt=!1;break e;case 3:be=a.stateNode.containerInfo,vt=!0;break e;case 4:be=a.stateNode.containerInfo,vt=!0;break e}a=a.return}if(be===null)throw Error(C(160));Pg(i,s,o),be=null,vt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){se(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tg(t,e),t=t.sibling}function Tg(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),Lt(e),n&4){try{go(3,e,e.return),Qs(3,e)}catch(v){se(e,e.return,v)}try{go(5,e,e.return)}catch(v){se(e,e.return,v)}}break;case 1:gt(t,e),Lt(e),n&512&&r!==null&&gn(r,r.return);break;case 5:if(gt(t,e),Lt(e),n&512&&r!==null&&gn(r,r.return),e.flags&32){var o=e.stateNode;try{Eo(o,"")}catch(v){se(e,e.return,v)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=r!==null?r.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Qm(o,i),Nl(a,s);var u=Nl(a,i);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?th(o,d):c==="dangerouslySetInnerHTML"?Zm(o,d):c==="children"?Eo(o,d):Yu(o,c,d,u)}switch(a){case"input":Pl(o,i);break;case"textarea":Xm(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Ln(o,!!i.multiple,y,!1):p!==!!i.multiple&&(i.defaultValue!=null?Ln(o,!!i.multiple,i.defaultValue,!0):Ln(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ao]=i}catch(v){se(e,e.return,v)}}break;case 6:if(gt(t,e),Lt(e),n&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){se(e,e.return,v)}}break;case 3:if(gt(t,e),Lt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Do(t.containerInfo)}catch(v){se(e,e.return,v)}break;case 4:gt(t,e),Lt(e);break;case 13:gt(t,e),Lt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Cc=ue())),n&4&&Rp(e);break;case 22:if(c=r!==null&&r.memoizedState!==null,e.mode&1?(je=(u=je)||c,gt(t,e),je=u):gt(t,e),Lt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(j=e,c=e.child;c!==null;){for(d=j=c;j!==null;){switch(p=j,y=p.child,p.tag){case 0:case 11:case 14:case 15:go(4,p,p.return);break;case 1:gn(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(v){se(n,r,v)}}break;case 5:gn(p,p.return);break;case 22:if(p.memoizedState!==null){Np(d);continue}}y!==null?(y.return=p,j=y):Np(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=eh("display",s))}catch(v){se(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){se(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:gt(t,e),Lt(e),n&4&&Rp(e);break;case 21:break;default:gt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Cg(r)){var n=r;break e}r=r.return}throw Error(C(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Eo(o,""),n.flags&=-33);var i=Dp(e);uu(e,i,o);break;case 3:case 4:var s=n.stateNode.containerInfo,a=Dp(e);lu(e,a,s);break;default:throw Error(C(161))}}catch(l){se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qx(e,t,r){j=e,Dg(e)}function Dg(e,t,r){for(var n=(e.mode&1)!==0;j!==null;){var o=j,i=o.child;if(o.tag===22&&n){var s=o.memoizedState!==null||Ei;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||je;a=Ei;var u=je;if(Ei=s,(je=l)&&!u)for(j=o;j!==null;)s=j,l=s.child,s.tag===22&&s.memoizedState!==null?_p(o):l!==null?(l.return=s,j=l):_p(o);for(;i!==null;)j=i,Dg(i),i=i.sibling;j=o,Ei=a,je=u}jp(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,j=i):jp(e)}}function jp(e){for(;j!==null;){var t=j;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||Qs(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!je)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:yt(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&hp(t,i,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}hp(t,s,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Do(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}je||t.flags&512&&au(t)}catch(p){se(t,t.return,p)}}if(t===e){j=null;break}if(r=t.sibling,r!==null){r.return=t.return,j=r;break}j=t.return}}function Np(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var r=t.sibling;if(r!==null){r.return=t.return,j=r;break}j=t.return}}function _p(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Qs(4,t)}catch(l){se(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(l){se(t,o,l)}}var i=t.return;try{au(t)}catch(l){se(t,i,l)}break;case 5:var s=t.return;try{au(t)}catch(l){se(t,s,l)}}}catch(l){se(t,t.return,l)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var Qx=Math.ceil,vs=Qt.ReactCurrentDispatcher,Mc=Qt.ReactCurrentOwner,pt=Qt.ReactCurrentBatchConfig,$=0,xe=null,de=null,Me=0,Xe=0,yn=Tr(0),ge=0,zo=null,Xr=0,Xs=0,Ec=0,yo=null,$e=null,Cc=0,On=1/0,Nt=null,xs=!1,cu=null,gr=null,Ci=!1,ur=null,ws=0,vo=0,du=null,$i=-1,Wi=0;function Ve(){return $&6?ue():$i!==-1?$i:$i=ue()}function yr(e){return e.mode&1?$&2&&Me!==0?Me&-Me:Nx.transition!==null?(Wi===0&&(Wi=fh()),Wi):(e=H,e!==0||(e=window.event,e=e===void 0?16:wh(e.type)),e):1}function bt(e,t,r,n){if(50<vo)throw vo=0,du=null,Error(C(185));Jo(e,r,n),(!($&2)||e!==xe)&&(e===xe&&(!($&2)&&(Xs|=r),ge===4&&ar(e,Me)),Ge(e,n),r===1&&$===0&&!(t.mode&1)&&(On=ue()+500,Gs&&Dr()))}function Ge(e,t){var r=e.callbackNode;N1(e,t);var n=ns(e,e===xe?Me:0);if(n===0)r!==null&&$d(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&$d(r),t===1)e.tag===0?jx(Ap.bind(null,e)):Bh(Ap.bind(null,e)),Px(function(){!($&6)&&Dr()}),r=null;else{switch(mh(n)){case 1:r=Zu;break;case 4:r=dh;break;case 16:r=rs;break;case 536870912:r=ph;break;default:r=rs}r=Vg(r,Rg.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Rg(e,t){if($i=-1,Wi=0,$&6)throw Error(C(327));var r=e.callbackNode;if(Tn()&&e.callbackNode!==r)return null;var n=ns(e,e===xe?Me:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ks(e,n);else{t=n;var o=$;$|=2;var i=Ng();(xe!==e||Me!==t)&&(Nt=null,On=ue()+500,Wr(e,t));do try{Zx();break}catch(a){jg(e,a)}while(!0);pc(),vs.current=i,$=o,de!==null?t=0:(xe=null,Me=0,t=ge)}if(t!==0){if(t===2&&(o=Vl(e),o!==0&&(n=o,t=pu(e,o))),t===1)throw r=zo,Wr(e,0),ar(e,n),Ge(e,ue()),r;if(t===6)ar(e,n);else{if(o=e.current.alternate,!(n&30)&&!Xx(o)&&(t=ks(e,n),t===2&&(i=Vl(e),i!==0&&(n=i,t=pu(e,i))),t===1))throw r=zo,Wr(e,0),ar(e,n),Ge(e,ue()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(C(345));case 2:Ar(e,$e,Nt);break;case 3:if(ar(e,n),(n&130023424)===n&&(t=Cc+500-ue(),10<t)){if(ns(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Ve(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Kl(Ar.bind(null,e,$e,Nt),t);break}Ar(e,$e,Nt);break;case 4:if(ar(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var s=31-kt(n);i=1<<s,s=t[s],s>o&&(o=s),n&=~i}if(n=o,n=ue()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Qx(n/1960))-n,10<n){e.timeoutHandle=Kl(Ar.bind(null,e,$e,Nt),n);break}Ar(e,$e,Nt);break;case 5:Ar(e,$e,Nt);break;default:throw Error(C(329))}}}return Ge(e,ue()),e.callbackNode===r?Rg.bind(null,e):null}function pu(e,t){var r=yo;return e.current.memoizedState.isDehydrated&&(Wr(e,t).flags|=256),e=ks(e,t),e!==2&&(t=$e,$e=r,t!==null&&fu(t)),e}function fu(e){$e===null?$e=e:$e.push.apply($e,e)}function Xx(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!St(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ar(e,t){for(t&=~Ec,t&=~Xs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-kt(t),n=1<<r;e[r]=-1,t&=~n}}function Ap(e){if($&6)throw Error(C(327));Tn();var t=ns(e,0);if(!(t&1))return Ge(e,ue()),null;var r=ks(e,t);if(e.tag!==0&&r===2){var n=Vl(e);n!==0&&(t=n,r=pu(e,n))}if(r===1)throw r=zo,Wr(e,0),ar(e,t),Ge(e,ue()),r;if(r===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ar(e,$e,Nt),Ge(e,ue()),null}function Pc(e,t){var r=$;$|=1;try{return e(t)}finally{$=r,$===0&&(On=ue()+500,Gs&&Dr())}}function Jr(e){ur!==null&&ur.tag===0&&!($&6)&&Tn();var t=$;$|=1;var r=pt.transition,n=H;try{if(pt.transition=null,H=1,e)return e()}finally{H=n,pt.transition=r,$=t,!($&6)&&Dr()}}function Tc(){Xe=yn.current,X(yn)}function Wr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Cx(r)),de!==null)for(r=de.return;r!==null;){var n=r;switch(uc(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ls();break;case 3:_n(),X(He),X(Ae),vc();break;case 5:yc(n);break;case 4:_n();break;case 13:X(te);break;case 19:X(te);break;case 10:fc(n.type._context);break;case 22:case 23:Tc()}r=r.return}if(xe=e,de=e=vr(e.current,null),Me=Xe=t,ge=0,zo=null,Ec=Xs=Xr=0,$e=yo=null,zr!==null){for(t=0;t<zr.length;t++)if(r=zr[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var s=i.next;i.next=o,n.next=s}r.pending=n}zr=null}return e}function jg(e,t){do{var r=de;try{if(pc(),Ii.current=ys,gs){for(var n=ne.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}gs=!1}if(Qr=0,ve=he=ne=null,ho=!1,Vo=0,Mc.current=null,r===null||r.return===null){ge=1,zo=t,de=null;break}e:{var i=e,s=r.return,a=r,l=t;if(t=Me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=bp(s);if(y!==null){y.flags&=-257,Sp(y,s,a,i,t),y.mode&1&&kp(i,u,t),t=y,l=u;var m=t.updateQueue;if(m===null){var v=new Set;v.add(l),t.updateQueue=v}else m.add(l);break e}else{if(!(t&1)){kp(i,u,t),Dc();break e}l=Error(C(426))}}else if(Z&&a.mode&1){var w=bp(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Sp(w,s,a,i,t),cc(An(l,a));break e}}i=l=An(l,a),ge!==4&&(ge=2),yo===null?yo=[i]:yo.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=hg(i,l,t);mp(i,h);break e;case 1:a=l;var f=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(gr===null||!gr.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=gg(i,a,t);mp(i,b);break e}}i=i.return}while(i!==null)}Ag(r)}catch(L){t=L,de===r&&r!==null&&(de=r=r.return);continue}break}while(!0)}function Ng(){var e=vs.current;return vs.current=ys,e===null?ys:e}function Dc(){(ge===0||ge===3||ge===2)&&(ge=4),xe===null||!(Xr&268435455)&&!(Xs&268435455)||ar(xe,Me)}function ks(e,t){var r=$;$|=2;var n=Ng();(xe!==e||Me!==t)&&(Nt=null,Wr(e,t));do try{Jx();break}catch(o){jg(e,o)}while(!0);if(pc(),$=r,vs.current=n,de!==null)throw Error(C(261));return xe=null,Me=0,ge}function Jx(){for(;de!==null;)_g(de)}function Zx(){for(;de!==null&&!L1();)_g(de)}function _g(e){var t=Fg(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?Ag(e):de=t,Mc.current=null}function Ag(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Kx(r,t),r!==null){r.flags&=32767,de=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,de=null;return}}else if(r=Hx(r,t,Xe),r!==null){de=r;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);ge===0&&(ge=5)}function Ar(e,t,r){var n=H,o=pt.transition;try{pt.transition=null,H=1,ew(e,t,r,n)}finally{pt.transition=o,H=n}return null}function ew(e,t,r,n){do Tn();while(ur!==null);if($&6)throw Error(C(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(_1(e,i),e===xe&&(de=xe=null,Me=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Ci||(Ci=!0,Vg(rs,function(){return Tn(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=pt.transition,pt.transition=null;var s=H;H=1;var a=$;$|=4,Mc.current=null,Yx(e,r),Tg(r,e),wx(Wl),os=!!$l,Wl=$l=null,e.current=r,qx(r),M1(),$=a,H=s,pt.transition=i}else e.current=r;if(Ci&&(Ci=!1,ur=e,ws=o),i=e.pendingLanes,i===0&&(gr=null),P1(r.stateNode),Ge(e,ue()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(xs)throw xs=!1,e=cu,cu=null,e;return ws&1&&e.tag!==0&&Tn(),i=e.pendingLanes,i&1?e===du?vo++:(vo=0,du=e):vo=0,Dr(),null}function Tn(){if(ur!==null){var e=mh(ws),t=pt.transition,r=H;try{if(pt.transition=null,H=16>e?16:e,ur===null)var n=!1;else{if(e=ur,ur=null,ws=0,$&6)throw Error(C(331));var o=$;for($|=4,j=e.current;j!==null;){var i=j,s=i.child;if(j.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:go(8,c,i)}var d=c.child;if(d!==null)d.return=c,j=d;else for(;j!==null;){c=j;var p=c.sibling,y=c.return;if(Eg(c),c===u){j=null;break}if(p!==null){p.return=y,j=p;break}j=y}}}var m=i.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}j=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,j=s;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:go(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,j=h;break e}j=i.return}}var f=e.current;for(j=f;j!==null;){s=j;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,j=g;else e:for(s=f;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qs(9,a)}}catch(L){se(a,a.return,L)}if(a===s){j=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,j=b;break e}j=a.return}}if($=o,Dr(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Us,e)}catch{}n=!0}return n}finally{H=r,pt.transition=t}}return!1}function Op(e,t,r){t=An(r,t),t=hg(e,t,1),e=hr(e,t,1),t=Ve(),e!==null&&(Jo(e,1,t),Ge(e,t))}function se(e,t,r){if(e.tag===3)Op(e,e,r);else for(;t!==null;){if(t.tag===3){Op(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(gr===null||!gr.has(n))){e=An(r,e),e=gg(t,e,1),t=hr(t,e,1),e=Ve(),t!==null&&(Jo(t,1,e),Ge(t,e));break}}t=t.return}}function tw(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&r,xe===e&&(Me&r)===r&&(ge===4||ge===3&&(Me&130023424)===Me&&500>ue()-Cc?Wr(e,0):Ec|=r),Ge(e,t)}function Og(e,t){t===0&&(e.mode&1?(t=yi,yi<<=1,!(yi&130023424)&&(yi=4194304)):t=1);var r=Ve();e=Kt(e,t),e!==null&&(Jo(e,t,r),Ge(e,r))}function rw(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Og(e,r)}function nw(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(C(314))}n!==null&&n.delete(t),Og(e,r)}var Fg;Fg=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)We=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return We=!1,Wx(e,t,r);We=!!(e.flags&131072)}else We=!1,Z&&t.flags&1048576&&Ih(t,ds,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ui(e,t),e=t.pendingProps;var o=Rn(t,Ae.current);Pn(t,r),o=wc(null,t,n,e,o,r);var i=kc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(n)?(i=!0,us(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,hc(t),o.updater=Ys,t.stateNode=o,o._reactInternals=t,Zl(t,n,e,r),t=ru(null,t,n,!0,i,r)):(t.tag=0,Z&&i&&lc(t),Fe(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ui(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=iw(n),e=yt(n,e),o){case 0:t=tu(null,t,n,e,r);break e;case 1:t=Ep(null,t,n,e,r);break e;case 11:t=Lp(null,t,n,e,r);break e;case 14:t=Mp(null,t,n,yt(n.type,e),r);break e}throw Error(C(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:yt(n,o),tu(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:yt(n,o),Ep(e,t,n,o,r);case 3:e:{if(wg(t),e===null)throw Error(C(387));n=t.pendingProps,i=t.memoizedState,o=i.element,Wh(e,t),ms(t,n,null,r);var s=t.memoizedState;if(n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=An(Error(C(423)),t),t=Cp(e,t,n,r,o);break e}else if(n!==o){o=An(Error(C(424)),t),t=Cp(e,t,n,r,o);break e}else for(Je=mr(t.stateNode.containerInfo.firstChild),et=t,Z=!0,xt=null,r=Yh(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(jn(),n===o){t=Gt(e,t,r);break e}Fe(e,t,n,r)}t=t.child}return t;case 5:return qh(t),e===null&&Ql(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Hl(n,o)?s=null:i!==null&&Hl(n,i)&&(t.flags|=32),xg(e,t),Fe(e,t,s,r),t.child;case 6:return e===null&&Ql(t),null;case 13:return kg(e,t,r);case 4:return gc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Nn(t,null,n,r):Fe(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:yt(n,o),Lp(e,t,n,o,r);case 7:return Fe(e,t,t.pendingProps,r),t.child;case 8:return Fe(e,t,t.pendingProps.children,r),t.child;case 12:return Fe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,G(ps,n._currentValue),n._currentValue=s,i!==null)if(St(i.value,s)){if(i.children===o.children&&!He.current){t=Gt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===n){if(i.tag===1){l=Vt(-1,r&-r),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Xl(i.return,r,t),a.lanes|=r;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(C(341));s.lanes|=r,a=s.alternate,a!==null&&(a.lanes|=r),Xl(s,r,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Fe(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Pn(t,r),o=mt(o),n=n(o),t.flags|=1,Fe(e,t,n,r),t.child;case 14:return n=t.type,o=yt(n,t.pendingProps),o=yt(n.type,o),Mp(e,t,n,o,r);case 15:return yg(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:yt(n,o),Ui(e,t),t.tag=1,Ke(n)?(e=!0,us(t)):e=!1,Pn(t,r),Kh(t,n,o),Zl(t,n,o,r),ru(null,t,n,!0,e,r);case 19:return bg(e,t,r);case 22:return vg(e,t,r)}throw Error(C(156,t.tag))};function Vg(e,t){return ch(e,t)}function ow(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,r,n){return new ow(e,t,r,n)}function Rc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function iw(e){if(typeof e=="function")return Rc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qu)return 11;if(e===Xu)return 14}return 2}function vr(e,t){var r=e.alternate;return r===null?(r=dt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Hi(e,t,r,n,o,i){var s=2;if(n=e,typeof e=="function")Rc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case an:return Hr(r.children,o,i,t);case qu:s=8,o|=8;break;case Sl:return e=dt(12,r,t,o|2),e.elementType=Sl,e.lanes=i,e;case Ll:return e=dt(13,r,t,o),e.elementType=Ll,e.lanes=i,e;case Ml:return e=dt(19,r,t,o),e.elementType=Ml,e.lanes=i,e;case Gm:return Js(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hm:s=10;break e;case Km:s=9;break e;case Qu:s=11;break e;case Xu:s=14;break e;case nr:s=16,n=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=dt(s,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function Hr(e,t,r,n){return e=dt(7,e,n,t),e.lanes=r,e}function Js(e,t,r,n){return e=dt(22,e,n,t),e.elementType=Gm,e.lanes=r,e.stateNode={isHidden:!1},e}function Ga(e,t,r){return e=dt(6,e,null,t),e.lanes=r,e}function Ya(e,t,r){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sw(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pa(0),this.expirationTimes=Pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pa(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function jc(e,t,r,n,o,i,s,a,l){return e=new sw(e,t,r,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=dt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},hc(i),e}function aw(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Bg(e){if(!e)return Sr;e=e._reactInternals;e:{if(tn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var r=e.type;if(Ke(r))return Vh(e,r,t)}return t}function Ig(e,t,r,n,o,i,s,a,l){return e=jc(r,n,!0,e,o,i,s,a,l),e.context=Bg(null),r=e.current,n=Ve(),o=yr(r),i=Vt(n,o),i.callback=t??null,hr(r,i,o),e.current.lanes=o,Jo(e,o,n),Ge(e,n),e}function Zs(e,t,r,n){var o=t.current,i=Ve(),s=yr(o);return r=Bg(r),t.context===null?t.context=r:t.pendingContext=r,t=Vt(i,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=hr(o,t,s),e!==null&&(bt(e,o,s,i),Bi(e,o,s)),s}function bs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Nc(e,t){Fp(e,t),(e=e.alternate)&&Fp(e,t)}function lw(){return null}var zg=typeof reportError=="function"?reportError:function(e){console.error(e)};function _c(e){this._internalRoot=e}ea.prototype.render=_c.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Zs(e,t,null,null)};ea.prototype.unmount=_c.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jr(function(){Zs(null,e,null,null)}),t[Ht]=null}};function ea(e){this._internalRoot=e}ea.prototype.unstable_scheduleHydration=function(e){if(e){var t=yh();e={blockedOn:null,target:e,priority:t};for(var r=0;r<sr.length&&t!==0&&t<sr[r].priority;r++);sr.splice(r,0,e),r===0&&xh(e)}};function Ac(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function uw(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var u=bs(s);i.call(u)}}var s=Ig(t,n,e,0,null,!1,!1,"",Vp);return e._reactRootContainer=s,e[Ht]=s.current,No(e.nodeType===8?e.parentNode:e),Jr(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var a=n;n=function(){var u=bs(l);a.call(u)}}var l=jc(e,0,!1,null,null,!1,!1,"",Vp);return e._reactRootContainer=l,e[Ht]=l.current,No(e.nodeType===8?e.parentNode:e),Jr(function(){Zs(t,l,r,n)}),l}function ra(e,t,r,n,o){var i=r._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=bs(s);a.call(l)}}Zs(t,s,e,o)}else s=uw(r,t,e,o,n);return bs(s)}hh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=oo(t.pendingLanes);r!==0&&(ec(t,r|1),Ge(t,ue()),!($&6)&&(On=ue()+500,Dr()))}break;case 13:Jr(function(){var n=Kt(e,1);if(n!==null){var o=Ve();bt(n,e,1,o)}}),Nc(e,1)}};tc=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var r=Ve();bt(t,e,134217728,r)}Nc(e,134217728)}};gh=function(e){if(e.tag===13){var t=yr(e),r=Kt(e,t);if(r!==null){var n=Ve();bt(r,e,t,n)}Nc(e,t)}};yh=function(){return H};vh=function(e,t){var r=H;try{return H=e,t()}finally{H=r}};Al=function(e,t,r){switch(t){case"input":if(Pl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Ks(n);if(!o)throw Error(C(90));qm(n),Pl(n,o)}}}break;case"textarea":Xm(e,r);break;case"select":t=r.value,t!=null&&Ln(e,!!r.multiple,t,!1)}};oh=Pc;ih=Jr;var cw={usingClientEntryPoint:!1,Events:[ei,dn,Ks,rh,nh,Pc]},Zn={findFiberByHostInstance:Ir,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dw={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lh(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||lw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{Us=Pi.inject(dw),Pt=Pi}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cw;it.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(t))throw Error(C(200));return aw(e,t,null,r)};it.createRoot=function(e,t){if(!Ac(e))throw Error(C(299));var r=!1,n="",o=zg;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=jc(e,1,!1,null,null,r,!1,n,o),e[Ht]=t.current,No(e.nodeType===8?e.parentNode:e),new _c(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=lh(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return Jr(e)};it.hydrate=function(e,t,r){if(!ta(t))throw Error(C(200));return ra(null,e,t,!0,r)};it.hydrateRoot=function(e,t,r){if(!Ac(e))throw Error(C(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",s=zg;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=Ig(t,null,e,1,r??null,o,!1,i,s),e[Ht]=t.current,No(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new ea(t)};it.render=function(e,t,r){if(!ta(t))throw Error(C(200));return ra(null,e,t,!1,r)};it.unmountComponentAtNode=function(e){if(!ta(e))throw Error(C(40));return e._reactRootContainer?(Jr(function(){ra(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1};it.unstable_batchedUpdates=Pc;it.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!ta(r))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return ra(e,t,r,!1,n)};it.version="18.2.0-next-9e3b772b8-20220608";function Ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ug)}catch(e){console.error(e)}}Ug(),Im.exports=it;var pw=Im.exports,Bp=pw;kl.createRoot=Bp.createRoot,kl.hydrateRoot=Bp.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uo(){return Uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Uo.apply(this,arguments)}var cr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(cr||(cr={}));const Ip="popstate";function fw(e){e===void 0&&(e={});function t(n,o){let{pathname:i,search:s,hash:a}=n.location;return mu("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:Ss(o)}return hw(t,r,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $g(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function mw(){return Math.random().toString(36).substr(2,8)}function zp(e,t){return{usr:e.state,key:e.key,idx:t}}function mu(e,t,r,n){return r===void 0&&(r=null),Uo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?$n(t):t,{state:r,key:t&&t.key||n||mw()})}function Ss(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function $n(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function hw(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,s=o.history,a=cr.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(Uo({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=cr.Pop;let w=c(),h=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:h})}function p(w,h){a=cr.Push;let f=mu(v.location,w,h);r&&r(f,w),u=c()+1;let g=zp(f,u),b=v.createHref(f);try{s.pushState(g,"",b)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;o.location.assign(b)}i&&l&&l({action:a,location:v.location,delta:1})}function y(w,h){a=cr.Replace;let f=mu(v.location,w,h);r&&r(f,w),u=c();let g=zp(f,u),b=v.createHref(f);s.replaceState(g,"",b),i&&l&&l({action:a,location:v.location,delta:0})}function m(w){let h=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof w=="string"?w:Ss(w);return f=f.replace(/ $/,"%20"),pe(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let v={get action(){return a},get location(){return e(o,s)},listen(w){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Ip,d),l=w,()=>{o.removeEventListener(Ip,d),l=null}},createHref(w){return t(o,w)},createURL:m,encodeLocation(w){let h=m(w);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:y,go(w){return s.go(w)}};return v}var Up;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Up||(Up={}));function gw(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?$n(t):t,o=Oc(n.pathname||"/",r);if(o==null)return null;let i=Wg(e);yw(i);let s=null;for(let a=0;s==null&&a<i.length;++a){let l=Tw(o);s=Ew(i[a],l)}return s}function Wg(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(pe(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(n.length));let u=xr([n,l.relativePath]),c=r.concat(l);i.children&&i.children.length>0&&(pe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Wg(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Lw(u,i.index),routesMeta:c})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let l of Hg(i.path))o(i,s,l)}),t}function Hg(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let s=Hg(n.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function yw(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Mw(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const vw=/^:[\w-]+$/,xw=3,ww=2,kw=1,bw=10,Sw=-2,$p=e=>e==="*";function Lw(e,t){let r=e.split("/"),n=r.length;return r.some($p)&&(n+=Sw),t&&(n+=ww),r.filter(o=>!$p(o)).reduce((o,i)=>o+(vw.test(i)?xw:i===""?kw:bw),n)}function Mw(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Ew(e,t){let{routesMeta:r}=e,n={},o="/",i=[];for(let s=0;s<r.length;++s){let a=r[s],l=s===r.length-1,u=o==="/"?t:t.slice(o.length)||"/",c=Cw({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(n,c.params);let d=a.route;i.push({params:n,pathname:xr([o,c.pathname]),pathnameBase:Nw(xr([o,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(o=xr([o,c.pathnameBase]))}return i}function Cw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Pw(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:n.reduce((u,c,d)=>{let{paramName:p,isOptional:y}=c;if(p==="*"){let v=a[d]||"";s=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const m=a[d];return y&&!m?u[p]=void 0:u[p]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function Pw(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),$g(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(n.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function Tw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $g(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Oc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Dw(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?$n(e):e;return{pathname:r?r.startsWith("/")?r:Rw(r,t):t,search:_w(n),hash:Aw(o)}}function Rw(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function qa(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jw(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Kg(e,t){let r=jw(e);return t?r.map((n,o)=>o===e.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Gg(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=$n(e):(o=Uo({},e),pe(!o.pathname||!o.pathname.includes("?"),qa("?","pathname","search",o)),pe(!o.pathname||!o.pathname.includes("#"),qa("#","pathname","hash",o)),pe(!o.search||!o.search.includes("#"),qa("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=r;else{let d=t.length-1;if(!n&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),d-=1;o.pathname=p.join("/")}a=d>=0?t[d]:"/"}let l=Dw(o,a),u=s&&s!=="/"&&s.endsWith("/"),c=(i||s===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const xr=e=>e.join("/").replace(/\/\/+/g,"/"),Nw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_w=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Aw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ow(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Yg=["post","put","patch","delete"];new Set(Yg);const Fw=["get",...Yg];new Set(Fw);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$o.apply(this,arguments)}const Fc=k.createContext(null),Vw=k.createContext(null),rn=k.createContext(null),na=k.createContext(null),Rr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),qg=k.createContext(null);function Bw(e,t){let{relative:r}=t===void 0?{}:t;ri()||pe(!1);let{basename:n,navigator:o}=k.useContext(rn),{hash:i,pathname:s,search:a}=Xg(e,{relative:r}),l=s;return n!=="/"&&(l=s==="/"?n:xr([n,s])),o.createHref({pathname:l,search:a,hash:i})}function ri(){return k.useContext(na)!=null}function oa(){return ri()||pe(!1),k.useContext(na).location}function Qg(e){k.useContext(rn).static||k.useLayoutEffect(e)}function Iw(){let{isDataRoute:e}=k.useContext(Rr);return e?tk():zw()}function zw(){ri()||pe(!1);let e=k.useContext(Fc),{basename:t,future:r,navigator:n}=k.useContext(rn),{matches:o}=k.useContext(Rr),{pathname:i}=oa(),s=JSON.stringify(Kg(o,r.v7_relativeSplatPath)),a=k.useRef(!1);return Qg(()=>{a.current=!0}),k.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){n.go(u);return}let d=Gg(u,JSON.parse(s),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:xr([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,s,i,e])}const Uw=k.createContext(null);function $w(e){let t=k.useContext(Rr).outlet;return t&&k.createElement(Uw.Provider,{value:e},t)}function Xg(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=k.useContext(rn),{matches:o}=k.useContext(Rr),{pathname:i}=oa(),s=JSON.stringify(Kg(o,n.v7_relativeSplatPath));return k.useMemo(()=>Gg(e,JSON.parse(s),i,r==="path"),[e,s,i,r])}function Ww(e,t){return Hw(e,t)}function Hw(e,t,r,n){ri()||pe(!1);let{navigator:o}=k.useContext(rn),{matches:i}=k.useContext(Rr),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=oa(),c;if(t){var d;let w=typeof t=="string"?$n(t):t;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||pe(!1),c=w}else c=u;let p=c.pathname||"/",y=p;if(l!=="/"){let w=l.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(w.length).join("/")}let m=gw(e,{pathname:y}),v=Qw(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:xr([l,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:xr([l,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r,n);return t&&v?k.createElement(na.Provider,{value:{location:$o({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:cr.Pop}},v):v}function Kw(){let e=ek(),t=Ow(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),r?k.createElement("pre",{style:o},r):null,null)}const Gw=k.createElement(Kw,null);class Yw extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?k.createElement(Rr.Provider,{value:this.props.routeContext},k.createElement(qg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qw(e){let{routeContext:t,match:r,children:n}=e,o=k.useContext(Fc);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),k.createElement(Rr.Provider,{value:t},n)}function Qw(e,t,r,n){var o;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var i;if((i=r)!=null&&i.errors)e=r.matches;else return null}let s=e,a=(o=r)==null?void 0:o.errors;if(a!=null){let c=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||pe(!1),s=s.slice(0,Math.min(s.length,c+1))}let l=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let c=0;c<s.length;c++){let d=s[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:p,errors:y}=r,m=d.route.loader&&p[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||m){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,d,p)=>{let y,m=!1,v=null,w=null;r&&(y=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||Gw,l&&(u<0&&p===0?(rk("route-fallback",!1),m=!0,w=null):u===p&&(m=!0,w=d.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,p+1)),f=()=>{let g;return y?g=v:m?g=w:d.route.Component?g=k.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,k.createElement(qw,{match:d,routeContext:{outlet:c,matches:h,isDataRoute:r!=null},children:g})};return r&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?k.createElement(Yw,{location:r.location,revalidation:r.revalidation,component:v,error:y,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var Jg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jg||{}),Ls=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ls||{});function Xw(e){let t=k.useContext(Fc);return t||pe(!1),t}function Jw(e){let t=k.useContext(Vw);return t||pe(!1),t}function Zw(e){let t=k.useContext(Rr);return t||pe(!1),t}function Zg(e){let t=Zw(),r=t.matches[t.matches.length-1];return r.route.id||pe(!1),r.route.id}function ek(){var e;let t=k.useContext(qg),r=Jw(Ls.UseRouteError),n=Zg(Ls.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function tk(){let{router:e}=Xw(Jg.UseNavigateStable),t=Zg(Ls.UseNavigateStable),r=k.useRef(!1);return Qg(()=>{r.current=!0}),k.useCallback(function(o,i){i===void 0&&(i={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,$o({fromRouteId:t},i)))},[e,t])}const Wp={};function rk(e,t,r){!t&&!Wp[e]&&(Wp[e]=!0)}function nk(e){return $w(e.context)}function xo(e){pe(!1)}function ok(e){let{basename:t="/",children:r=null,location:n,navigationType:o=cr.Pop,navigator:i,static:s=!1,future:a}=e;ri()&&pe(!1);let l=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:i,static:s,future:$o({v7_relativeSplatPath:!1},a)}),[l,a,i,s]);typeof n=="string"&&(n=$n(n));let{pathname:c="/",search:d="",hash:p="",state:y=null,key:m="default"}=n,v=k.useMemo(()=>{let w=Oc(c,l);return w==null?null:{location:{pathname:w,search:d,hash:p,state:y,key:m},navigationType:o}},[l,c,d,p,y,m,o]);return v==null?null:k.createElement(rn.Provider,{value:u},k.createElement(na.Provider,{children:r,value:v}))}function e0(e){let{children:t,location:r}=e;return Ww(hu(t),r)}new Promise(()=>{});function hu(e,t){t===void 0&&(t=[]);let r=[];return k.Children.forEach(e,(n,o)=>{if(!k.isValidElement(n))return;let i=[...t,o];if(n.type===k.Fragment){r.push.apply(r,hu(n.props.children,i));return}n.type!==xo&&pe(!1),!n.props.index||!n.props.children||pe(!1);let s={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=hu(n.props.children,i)),r.push(s)}),r}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gu(){return gu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},gu.apply(this,arguments)}function ik(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function sk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ak(e,t){return e.button===0&&(!t||t==="_self")&&!sk(e)}const lk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],uk="6";try{window.__reactRouterVersion=uk}catch{}const ck="startTransition",Hp=wl[ck];function dk(e){let{basename:t,children:r,future:n,window:o}=e,i=k.useRef();i.current==null&&(i.current=fw({window:o,v5Compat:!0}));let s=i.current,[a,l]=k.useState({action:s.action,location:s.location}),{v7_startTransition:u}=n||{},c=k.useCallback(d=>{u&&Hp?Hp(()=>l(d)):l(d)},[l,u]);return k.useLayoutEffect(()=>s.listen(c),[s,c]),k.createElement(ok,{basename:t,children:r,location:a.location,navigationType:a.action,navigator:s,future:n})}const pk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mk=k.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:i,replace:s,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=t,p=ik(t,lk),{basename:y}=k.useContext(rn),m,v=!1;if(typeof u=="string"&&fk.test(u)&&(m=u,pk))try{let g=new URL(window.location.href),b=u.startsWith("//")?new URL(g.protocol+u):new URL(u),L=Oc(b.pathname,y);b.origin===g.origin&&L!=null?u=L+b.search+b.hash:v=!0}catch{}let w=Bw(u,{relative:o}),h=hk(u,{replace:s,state:a,target:l,preventScrollReset:c,relative:o,unstable_viewTransition:d});function f(g){n&&n(g),g.defaultPrevented||h(g)}return k.createElement("a",gu({},p,{href:m||w,onClick:v||i?n:f,ref:r,target:l}))});var Kp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Kp||(Kp={}));var Gp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gp||(Gp={}));function hk(e,t){let{target:r,replace:n,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=Iw(),u=oa(),c=Xg(e,{relative:s});return k.useCallback(d=>{if(ak(d,r)){d.preventDefault();let p=n!==void 0?n:Ss(u)===Ss(c);l(e,{replace:p,state:o,preventScrollReset:i,relative:s,unstable_viewTransition:a})}},[u,l,c,n,o,r,e,i,s,a])}const gk="/Newportfolio-ReactViteBuild/assets/character_1.svg",yk="/Newportfolio-ReactViteBuild/assets/homeIcon.svg",vk="/Newportfolio-ReactViteBuild/assets/aboutmeIcon.svg",xk="/Newportfolio-ReactViteBuild/assets/portfolioIcon.svg",wk="/Newportfolio-ReactViteBuild/assets/contactmeIcon.svg",kk="/Newportfolio-ReactViteBuild/assets/HomeIconSelected.svg",bk="/Newportfolio-ReactViteBuild/assets/aboutmeIconSelected.svg",Sk="/Newportfolio-ReactViteBuild/assets/portfolioIconSelected.svg",Lk="/Newportfolio-ReactViteBuild/assets/contactmeIconSelected.svg",Mk="/Newportfolio-ReactViteBuild/assets/backgroundStrips1Mobile.svg",Ek="/Newportfolio-ReactViteBuild/assets/backgroundStrips1.svg",Ck="/Newportfolio-ReactViteBuild/assets/pointer.svg",Pk="/Newportfolio-ReactViteBuild/assets/filter_arrow.svg",Tk="/Newportfolio-ReactViteBuild/assets/browser_MinimizeButto.svg",Dk="/Newportfolio-ReactViteBuild/assets/browser_fullscreenButton.svg",t0="/Newportfolio-ReactViteBuild/assets/browser_closeButton.svg",Rk="/Newportfolio-ReactViteBuild/assets/backgroundStrings2.svg",jk="/Newportfolio-ReactViteBuild/assets/backgroundStrings2Mobile.svg",r0="/Newportfolio-ReactViteBuild/assets/downloadResume.svg",Nk="/Newportfolio-ReactViteBuild/assets/Triangle.svg",_k="/Newportfolio-ReactViteBuild/assets/TriangleMobile.svg",Ak="/Newportfolio-ReactViteBuild/assets/profileImage.svg",Ok="/Newportfolio-ReactViteBuild/assets/leftBraket.svg",Fk="/Newportfolio-ReactViteBuild/assets/rightBraket.svg",Vk="/Newportfolio-ReactViteBuild/assets/dollarSign.svg",Ce=k.createContext(null),Bk=({children:e})=>{const t=k.useRef({}),r=k.useRef([]),n=k.useRef(null),o=k.useRef(null),i=k.useRef([]),s=k.useRef(null),a=k.useRef(null),d={pageRef:t,svgArray:{Home:yk,"About Me":vk,Portfolio:xk,"Contact Me":wk},selectSVGArray:[kk,bk,Sk,Lk],Character1:gk,triangle:Nk,mobileTriangle:_k,profile:Ak,bracketLeft:Ok,bracketRight:Fk,moneySign:Vk,iconsRef:r,arrowRef:n,descRef:o,square:Ek,squareMobile:Mk,pointer:Ck,tabRef:i,filterListRef:s,backgroundSelectRef:a,labels:{Mobile:"#b148d2",HTML:"#E14E1D",CSS:"#0277BD",SASS:"#CD6799",Tailwind:"linear-gradient(82.5deg,#F5F5F5, #CD6799 19%,#3886EC 31%, #F5F5F5 )",JavaScript:"#CAB108",TypeScript:"#32A3EE",React:"#242938",Firebase:"#CF5E1C",PHP:"#7229D1",MySQL:"#F57C00"},Arrow:Pk,minimize:Tk,fullscreen:Dk,close:t0,strips:Rk,downloadSVG:r0,stripsMobile:jk};return x.jsx(Ce.Provider,{value:d,children:e})};function ke(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Ik=typeof Symbol=="function"&&Symbol.observable||"@@observable",Yp=Ik,Qa=()=>Math.random().toString(36).substring(7).split("").join("."),zk={INIT:`@@redux/INIT${Qa()}`,REPLACE:`@@redux/REPLACE${Qa()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Qa()}`},Ms=zk;function Vc(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function n0(e,t,r){if(typeof e!="function")throw new Error(ke(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(ke(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(ke(1));return r(n0)(e,t)}let n=e,o=t,i=new Map,s=i,a=0,l=!1;function u(){s===i&&(s=new Map,i.forEach((w,h)=>{s.set(h,w)}))}function c(){if(l)throw new Error(ke(3));return o}function d(w){if(typeof w!="function")throw new Error(ke(4));if(l)throw new Error(ke(5));let h=!0;u();const f=a++;return s.set(f,w),function(){if(h){if(l)throw new Error(ke(6));h=!1,u(),s.delete(f),i=null}}}function p(w){if(!Vc(w))throw new Error(ke(7));if(typeof w.type>"u")throw new Error(ke(8));if(typeof w.type!="string")throw new Error(ke(17));if(l)throw new Error(ke(9));try{l=!0,o=n(o,w)}finally{l=!1}return(i=s).forEach(f=>{f()}),w}function y(w){if(typeof w!="function")throw new Error(ke(10));n=w,p({type:Ms.REPLACE})}function m(){const w=d;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(ke(11));function f(){const b=h;b.next&&b.next(c())}return f(),{unsubscribe:w(f)}},[Yp](){return this}}}return p({type:Ms.INIT}),{dispatch:p,subscribe:d,getState:c,replaceReducer:y,[Yp]:m}}function Uk(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:Ms.INIT})>"u")throw new Error(ke(12));if(typeof r(void 0,{type:Ms.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ke(13))})}function $k(e){const t=Object.keys(e),r={};for(let i=0;i<t.length;i++){const s=t[i];typeof e[s]=="function"&&(r[s]=e[s])}const n=Object.keys(r);let o;try{Uk(r)}catch(i){o=i}return function(s={},a){if(o)throw o;let l=!1;const u={};for(let c=0;c<n.length;c++){const d=n[c],p=r[d],y=s[d],m=p(y,a);if(typeof m>"u")throw a&&a.type,new Error(ke(14));u[d]=m,l=l||m!==y}return l=l||n.length!==Object.keys(s).length,l?u:s}}function Es(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function Wk(...e){return t=>(r,n)=>{const o=t(r,n);let i=()=>{throw new Error(ke(15))};const s={getState:o.getState,dispatch:(l,...u)=>i(l,...u)},a=e.map(l=>l(s));return i=Es(...a)(o.dispatch),{...o,dispatch:i}}}function o0(e){return Vc(e)&&"type"in e&&typeof e.type=="string"}var i0=Symbol.for("immer-nothing"),qp=Symbol.for("immer-draftable"),rt=Symbol.for("immer-state");function wt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Fn=Object.getPrototypeOf;function Yt(e){return!!e&&!!e[rt]}function qt(e){var t;return e?s0(e)||Array.isArray(e)||!!e[qp]||!!((t=e.constructor)!=null&&t[qp])||sa(e)||aa(e):!1}var Hk=Object.prototype.constructor.toString();function s0(e){if(!e||typeof e!="object")return!1;const t=Fn(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===Hk}function Cs(e,t){ia(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function ia(e){const t=e[rt];return t?t.type_:Array.isArray(e)?1:sa(e)?2:aa(e)?3:0}function yu(e,t){return ia(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function a0(e,t,r){const n=ia(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Kk(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function sa(e){return e instanceof Map}function aa(e){return e instanceof Set}function Or(e){return e.copy_||e.base_}function vu(e,t){if(sa(e))return new Map(e);if(aa(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&s0(e))return Fn(e)?{...e}:Object.assign(Object.create(null),e);const r=Object.getOwnPropertyDescriptors(e);delete r[rt];let n=Reflect.ownKeys(r);for(let o=0;o<n.length;o++){const i=n[o],s=r[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(r[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[i]})}return Object.create(Fn(e),r)}function Bc(e,t=!1){return la(e)||Yt(e)||!qt(e)||(ia(e)>1&&(e.set=e.add=e.clear=e.delete=Gk),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>Bc(n,!0))),e}function Gk(){wt(2)}function la(e){return Object.isFrozen(e)}var Yk={};function Zr(e){const t=Yk[e];return t||wt(0,e),t}var Wo;function l0(){return Wo}function qk(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Qp(e,t){t&&(Zr("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function xu(e){wu(e),e.drafts_.forEach(Qk),e.drafts_=null}function wu(e){e===Wo&&(Wo=e.parent_)}function Xp(e){return Wo=qk(Wo,e)}function Qk(e){const t=e[rt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Jp(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[rt].modified_&&(xu(t),wt(4)),qt(e)&&(e=Ps(t,e),t.parent_||Ts(t,e)),t.patches_&&Zr("Patches").generateReplacementPatches_(r[rt].base_,e,t.patches_,t.inversePatches_)):e=Ps(t,r,[]),xu(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==i0?e:void 0}function Ps(e,t,r){if(la(t))return t;const n=t[rt];if(!n)return Cs(t,(o,i)=>Zp(e,n,t,o,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return Ts(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const o=n.copy_;let i=o,s=!1;n.type_===3&&(i=new Set(o),o.clear(),s=!0),Cs(i,(a,l)=>Zp(e,n,o,a,l,r,s)),Ts(e,o,!1),r&&e.patches_&&Zr("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function Zp(e,t,r,n,o,i,s){if(Yt(o)){const a=i&&t&&t.type_!==3&&!yu(t.assigned_,n)?i.concat(n):void 0,l=Ps(e,o,a);if(a0(r,n,l),Yt(l))e.canAutoFreeze_=!1;else return}else s&&r.add(o);if(qt(o)&&!la(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Ps(e,o),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&Ts(e,o)}}function Ts(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Bc(t,r)}function Xk(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:l0(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=Ic;r&&(o=[n],i=Ho);const{revoke:s,proxy:a}=Proxy.revocable(o,i);return n.draft_=a,n.revoke_=s,a}var Ic={get(e,t){if(t===rt)return e;const r=Or(e);if(!yu(r,t))return Jk(e,r,t);const n=r[t];return e.finalized_||!qt(n)?n:n===Xa(e.base_,t)?(Ja(e),e.copy_[t]=bu(n,e)):n},has(e,t){return t in Or(e)},ownKeys(e){return Reflect.ownKeys(Or(e))},set(e,t,r){const n=u0(Or(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const o=Xa(Or(e),t),i=o==null?void 0:o[rt];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(Kk(r,o)&&(r!==void 0||yu(e.base_,t)))return!0;Ja(e),ku(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Xa(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Ja(e),ku(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=Or(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){wt(11)},getPrototypeOf(e){return Fn(e.base_)},setPrototypeOf(){wt(12)}},Ho={};Cs(Ic,(e,t)=>{Ho[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Ho.deleteProperty=function(e,t){return Ho.set.call(this,e,t,void 0)};Ho.set=function(e,t,r){return Ic.set.call(this,e[0],t,r,e[0])};function Xa(e,t){const r=e[rt];return(r?Or(r):e)[t]}function Jk(e,t,r){var o;const n=u0(t,r);return n?"value"in n?n.value:(o=n.get)==null?void 0:o.call(e.draft_):void 0}function u0(e,t){if(!(t in e))return;let r=Fn(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Fn(r)}}function ku(e){e.modified_||(e.modified_=!0,e.parent_&&ku(e.parent_))}function Ja(e){e.copy_||(e.copy_=vu(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Zk=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const i=r;r=t;const s=this;return function(l=i,...u){return s.produce(l,c=>r.call(this,c,...u))}}typeof r!="function"&&wt(6),n!==void 0&&typeof n!="function"&&wt(7);let o;if(qt(t)){const i=Xp(this),s=bu(t,void 0);let a=!0;try{o=r(s),a=!1}finally{a?xu(i):wu(i)}return Qp(i,n),Jp(o,i)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===i0&&(o=void 0),this.autoFreeze_&&Bc(o,!0),n){const i=[],s=[];Zr("Patches").generateReplacementPatches_(t,o,i,s),n(i,s)}return o}else wt(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(s,...a)=>this.produceWithPatches(s,l=>t(l,...a));let n,o;return[this.produce(t,r,(s,a)=>{n=s,o=a}),n,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){qt(e)||wt(8),Yt(e)&&(e=c0(e));const t=Xp(this),r=bu(e,void 0);return r[rt].isManual_=!0,wu(t),r}finishDraft(e,t){const r=e&&e[rt];(!r||!r.isManual_)&&wt(9);const{scope_:n}=r;return Qp(n,t),Jp(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));const n=Zr("Patches").applyPatches_;return Yt(e)?n(e,t):this.produce(e,o=>n(o,t))}};function bu(e,t){const r=sa(e)?Zr("MapSet").proxyMap_(e,t):aa(e)?Zr("MapSet").proxySet_(e,t):Xk(e,t);return(t?t.scope_:l0()).drafts_.push(r),r}function c0(e){return Yt(e)||wt(10,e),d0(e)}function d0(e){if(!qt(e)||la(e))return e;const t=e[rt];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=vu(e,t.scope_.immer_.useStrictShallowCopy_)}else r=vu(e,!0);return Cs(r,(n,o)=>{a0(r,n,d0(o))}),t&&(t.finalized_=!1),r}var nt=new Zk,zc=nt.produce;nt.produceWithPatches.bind(nt);nt.setAutoFreeze.bind(nt);nt.setUseStrictShallowCopy.bind(nt);nt.applyPatches.bind(nt);nt.createDraft.bind(nt);nt.finishDraft.bind(nt);function eb(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function tb(e,t=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(t)}function rb(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var ef=e=>Array.isArray(e)?e:[e];function nb(e){const t=Array.isArray(e[0])?e[0]:e;return rb(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function ob(e,t){const r=[],{length:n}=e;for(let o=0;o<n;o++)r.push(e[o].apply(null,t));return r}var ib=class{constructor(e){this.value=e}deref(){return this.value}},sb=typeof WeakRef<"u"?WeakRef:ib,ab=0,tf=1;function Ti(){return{s:ab,v:void 0,o:null,p:null}}function Uc(e,t={}){let r=Ti();const{resultEqualityCheck:n}=t;let o,i=0;function s(){var d;let a=r;const{length:l}=arguments;for(let p=0,y=l;p<y;p++){const m=arguments[p];if(typeof m=="function"||typeof m=="object"&&m!==null){let v=a.o;v===null&&(a.o=v=new WeakMap);const w=v.get(m);w===void 0?(a=Ti(),v.set(m,a)):a=w}else{let v=a.p;v===null&&(a.p=v=new Map);const w=v.get(m);w===void 0?(a=Ti(),v.set(m,a)):a=w}}const u=a;let c;if(a.s===tf?c=a.v:(c=e.apply(null,arguments),i++),u.s=tf,n){const p=((d=o==null?void 0:o.deref)==null?void 0:d.call(o))??o;p!=null&&n(p,c)&&(c=p,i!==0&&i--),o=typeof c=="object"&&c!==null||typeof c=="function"?new sb(c):c}return u.v=c,c}return s.clearCache=()=>{r=Ti(),s.resetResultsCount()},s.resultsCount=()=>i,s.resetResultsCount=()=>{i=0},s}function p0(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e,n=(...o)=>{let i=0,s=0,a,l={},u=o.pop();typeof u=="object"&&(l=u,u=o.pop()),eb(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const c={...r,...l},{memoize:d,memoizeOptions:p=[],argsMemoize:y=Uc,argsMemoizeOptions:m=[],devModeChecks:v={}}=c,w=ef(p),h=ef(m),f=nb(o),g=d(function(){return i++,u.apply(null,arguments)},...w),b=y(function(){s++;const M=ob(f,arguments);return a=g.apply(null,M),a},...h);return Object.assign(b,{resultFunc:u,memoizedResultFunc:g,dependencies:f,dependencyRecomputations:()=>s,resetDependencyRecomputations:()=>{s=0},lastResult:()=>a,recomputations:()=>i,resetRecomputations:()=>{i=0},memoize:d,argsMemoize:y})};return Object.assign(n,{withTypes:()=>n}),n}var f0=p0(Uc),lb=Object.assign((e,t=f0)=>{tb(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const r=Object.keys(e),n=r.map(i=>e[i]);return t(n,(...i)=>i.reduce((s,a,l)=>(s[r[l]]=a,s),{}))},{withTypes:()=>lb});function m0(e){return({dispatch:r,getState:n})=>o=>i=>typeof i=="function"?i(r,n,e):o(i)}var ub=m0(),cb=m0,db=(...e)=>{const t=p0(...e),r=Object.assign((...n)=>{const o=t(...n),i=(s,...a)=>o(Yt(s)?c0(s):s,...a);return Object.assign(i,o),i},{withTypes:()=>r});return r},pb=db(Uc),fb=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Es:Es.apply(null,arguments)},mb=e=>e&&typeof e.match=="function";function Bt(e,t){function r(...n){if(t){let o=t(...n);if(!o)throw new Error(Ye(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>o0(n)&&n.type===e,r}function hb(e){return o0(e)&&Object.keys(e).every(gb)}function gb(e){return["type","payload","error","meta"].indexOf(e)>-1}var h0=class so extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,so.prototype)}static get[Symbol.species](){return so}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new so(...t[0].concat(this)):new so(...t.concat(this))}};function rf(e){return qt(e)?zc(e,()=>{}):e}function nf(e,t,r){if(e.has(t)){let o=e.get(t);return r.update&&(o=r.update(o,t,e),e.set(t,o)),o}if(!r.insert)throw new Error(Ye(10));const n=r.insert(t,e);return e.set(t,n),n}function yb(e){return typeof e=="boolean"}var vb=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:o=!0,actionCreatorCheck:i=!0}=t??{};let s=new h0;return r&&(yb(r)?s.push(ub):s.push(cb(r.extraArgument))),s},xb="RTK_autoBatch",g0=e=>t=>{setTimeout(t,e)},wb=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:g0(10),kb=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let o=!0,i=!1,s=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?wb:e.type==="callback"?e.queueNotification:g0(e.timeout),u=()=>{s=!1,i&&(i=!1,a.forEach(c=>c()))};return Object.assign({},n,{subscribe(c){const d=()=>o&&c(),p=n.subscribe(d);return a.add(c),()=>{p(),a.delete(c)}},dispatch(c){var d;try{return o=!((d=c==null?void 0:c.meta)!=null&&d[xb]),i=!o,i&&(s||(s=!0,l(u))),n.dispatch(c)}finally{o=!0}}})},bb=e=>function(r){const{autoBatch:n=!0}=r??{};let o=new h0(e);return n&&o.push(kb(typeof n=="object"?n:void 0)),o},Sb=!0;function Lb(e){const t=vb(),{reducer:r=void 0,middleware:n,devTools:o=!0,preloadedState:i=void 0,enhancers:s=void 0}=e||{};let a;if(typeof r=="function")a=r;else if(Vc(r))a=$k(r);else throw new Error(Ye(1));let l;typeof n=="function"?l=n(t):l=t();let u=Es;o&&(u=fb({trace:!Sb,...typeof o=="object"&&o}));const c=Wk(...l),d=bb(c);let p=typeof s=="function"?s(d):d();const y=u(...p);return n0(a,i,y)}function y0(e){const t={},r=[];let n;const o={addCase(i,s){const a=typeof i=="string"?i:i.type;if(!a)throw new Error(Ye(28));if(a in t)throw new Error(Ye(29));return t[a]=s,o},addMatcher(i,s){return r.push({matcher:i,reducer:s}),o},addDefaultCase(i){return n=i,o}};return e(o),[t,r,n]}function Mb(e){return typeof e=="function"}function Eb(e,t){let[r,n,o]=y0(t),i;if(Mb(e))i=()=>rf(e());else{const a=rf(e);i=()=>a}function s(a=i(),l){let u=[r[l.type],...n.filter(({matcher:c})=>c(l)).map(({reducer:c})=>c)];return u.filter(c=>!!c).length===0&&(u=[o]),u.reduce((c,d)=>{if(d)if(Yt(c)){const y=d(c,l);return y===void 0?c:y}else{if(qt(c))return zc(c,p=>d(p,l));{const p=d(c,l);if(p===void 0){if(c===null)return c;throw new Error(Ye(9))}return p}}return c},a)}return s.getInitialState=i,s}var Cb="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",v0=(e=21)=>{let t="",r=e;for(;r--;)t+=Cb[Math.random()*64|0];return t},Pb=(e,t)=>mb(e)?e.match(t):e(t);function Tb(...e){return t=>e.some(r=>Pb(r,t))}var Db=["name","message","stack","code"],Za=class{constructor(e,t){ba(this,"_type");this.payload=e,this.meta=t}},of=class{constructor(e,t){ba(this,"_type");this.payload=e,this.meta=t}},Rb=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of Db)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},x0=(()=>{function e(t,r,n){const o=Bt(t+"/fulfilled",(l,u,c,d)=>({payload:l,meta:{...d||{},arg:c,requestId:u,requestStatus:"fulfilled"}})),i=Bt(t+"/pending",(l,u,c)=>({payload:void 0,meta:{...c||{},arg:u,requestId:l,requestStatus:"pending"}})),s=Bt(t+"/rejected",(l,u,c,d,p)=>({payload:d,error:(n&&n.serializeError||Rb)(l||"Rejected"),meta:{...p||{},arg:c,requestId:u,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function a(l){return(u,c,d)=>{const p=n!=null&&n.idGenerator?n.idGenerator(l):v0(),y=new AbortController;let m,v;function w(f){v=f,y.abort()}const h=async function(){var b,L;let f;try{let M=(b=n==null?void 0:n.condition)==null?void 0:b.call(n,l,{getState:c,extra:d});if(Nb(M)&&(M=await M),M===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const P=new Promise((S,_)=>{m=()=>{_({name:"AbortError",message:v||"Aborted"})},y.signal.addEventListener("abort",m)});u(i(p,l,(L=n==null?void 0:n.getPendingMeta)==null?void 0:L.call(n,{requestId:p,arg:l},{getState:c,extra:d}))),f=await Promise.race([P,Promise.resolve(r(l,{dispatch:u,getState:c,extra:d,requestId:p,signal:y.signal,abort:w,rejectWithValue:(S,_)=>new Za(S,_),fulfillWithValue:(S,_)=>new of(S,_)})).then(S=>{if(S instanceof Za)throw S;return S instanceof of?o(S.payload,p,l,S.meta):o(S,p,l)})])}catch(M){f=M instanceof Za?s(null,p,l,M.payload,M.meta):s(M,p,l)}finally{m&&y.signal.removeEventListener("abort",m)}return n&&!n.dispatchConditionRejection&&s.match(f)&&f.meta.condition||u(f),f}();return Object.assign(h,{abort:w,requestId:p,arg:l,unwrap(){return h.then(jb)}})}}return Object.assign(a,{pending:i,rejected:s,fulfilled:o,settled:Tb(s,o),typePrefix:t})}return e.withTypes=()=>e,e})();function jb(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Nb(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var _b=Symbol.for("rtk-slice-createasyncthunk");function Ab(e,t){return`${e}/${t}`}function Ob({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[_b];return function(o){const{name:i,reducerPath:s=i}=o;if(!i)throw new Error(Ye(11));typeof process<"u";const a=(typeof o.reducers=="function"?o.reducers(Vb()):o.reducers)||{},l=Object.keys(a),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(g,b){const L=typeof g=="string"?g:g.type;if(!L)throw new Error(Ye(12));if(L in u.sliceCaseReducersByType)throw new Error(Ye(13));return u.sliceCaseReducersByType[L]=b,c},addMatcher(g,b){return u.sliceMatchers.push({matcher:g,reducer:b}),c},exposeAction(g,b){return u.actionCreators[g]=b,c},exposeCaseReducer(g,b){return u.sliceCaseReducersByName[g]=b,c}};l.forEach(g=>{const b=a[g],L={reducerName:g,type:Ab(i,g),createNotation:typeof o.reducers=="function"};Ib(b)?Ub(L,b,c,t):Bb(L,b,c)});function d(){const[g={},b=[],L=void 0]=typeof o.extraReducers=="function"?y0(o.extraReducers):[o.extraReducers],M={...g,...u.sliceCaseReducersByType};return Eb(o.initialState,P=>{for(let S in M)P.addCase(S,M[S]);for(let S of u.sliceMatchers)P.addMatcher(S.matcher,S.reducer);for(let S of b)P.addMatcher(S.matcher,S.reducer);L&&P.addDefaultCase(L)})}const p=g=>g,y=new Map;let m;function v(g,b){return m||(m=d()),m(g,b)}function w(){return m||(m=d()),m.getInitialState()}function h(g,b=!1){function L(P){let S=P[g];return typeof S>"u"&&b&&(S=w()),S}function M(P=p){const S=nf(y,b,{insert:()=>new WeakMap});return nf(S,P,{insert:()=>{const _={};for(const[N,R]of Object.entries(o.selectors??{}))_[N]=Fb(R,P,w,b);return _}})}return{reducerPath:g,getSelectors:M,get selectors(){return M(L)},selectSlice:L}}const f={name:i,reducer:v,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:w,...h(s),injectInto(g,{reducerPath:b,...L}={}){const M=b??s;return g.inject({reducerPath:M,reducer:v},L),{...f,...h(M,!0)}}};return f}}function Fb(e,t,r,n){function o(i,...s){let a=t(i);return typeof a>"u"&&n&&(a=r()),e(a,...s)}return o.unwrapped=e,o}var ua=Ob();function Vb(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function Bb({type:e,reducerName:t,createNotation:r},n,o){let i,s;if("reducer"in n){if(r&&!zb(n))throw new Error(Ye(17));i=n.reducer,s=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,s?Bt(e,s):Bt(e))}function Ib(e){return e._reducerDefinitionType==="asyncThunk"}function zb(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Ub({type:e,reducerName:t},r,n,o){if(!o)throw new Error(Ye(18));const{payloadCreator:i,fulfilled:s,pending:a,rejected:l,settled:u,options:c}=r,d=o(e,i,c);n.exposeAction(t,d),s&&n.addCase(d.fulfilled,s),a&&n.addCase(d.pending,a),l&&n.addCase(d.rejected,l),u&&n.addMatcher(d.settled,u),n.exposeCaseReducer(t,{fulfilled:s||Di,pending:a||Di,rejected:l||Di,settled:u||Di})}function Di(){}function $b(){return{ids:[],entities:{}}}function Wb(e){function t(r={},n){const o=Object.assign($b(),r);return n?e.setAll(o,n):o}return{getInitialState:t}}function Hb(){function e(t,r={}){const{createSelector:n=pb}=r,o=d=>d.ids,i=d=>d.entities,s=n(o,i,(d,p)=>d.map(y=>p[y])),a=(d,p)=>p,l=(d,p)=>d[p],u=n(o,d=>d.length);if(!t)return{selectIds:o,selectEntities:i,selectAll:s,selectTotal:u,selectById:n(i,a,l)};const c=n(t,i);return{selectIds:n(t,o),selectEntities:c,selectAll:n(t,s),selectTotal:n(t,u),selectById:n(c,a,l)}}return{getSelectors:e}}var Kb=Yt;function Gb(e){const t=le((r,n)=>e(n));return function(n){return t(n,void 0)}}function le(e){return function(r,n){function o(s){return hb(s)}const i=s=>{o(n)?e(n.payload,s):e(n,s)};return Kb(r)?(i(r),r):zc(r,i)}}function vn(e,t){return t(e)}function Kr(e){return Array.isArray(e)||(e=Object.values(e)),e}function w0(e,t,r){e=Kr(e);const n=[],o=[];for(const i of e){const s=vn(i,t);s in r.entities?o.push({id:s,changes:i}):n.push(i)}return[n,o]}function k0(e){function t(m,v){const w=vn(m,e);w in v.entities||(v.ids.push(w),v.entities[w]=m)}function r(m,v){m=Kr(m);for(const w of m)t(w,v)}function n(m,v){const w=vn(m,e);w in v.entities||v.ids.push(w),v.entities[w]=m}function o(m,v){m=Kr(m);for(const w of m)n(w,v)}function i(m,v){m=Kr(m),v.ids=[],v.entities={},r(m,v)}function s(m,v){return a([m],v)}function a(m,v){let w=!1;m.forEach(h=>{h in v.entities&&(delete v.entities[h],w=!0)}),w&&(v.ids=v.ids.filter(h=>h in v.entities))}function l(m){Object.assign(m,{ids:[],entities:{}})}function u(m,v,w){const h=w.entities[v.id];if(h===void 0)return!1;const f=Object.assign({},h,v.changes),g=vn(f,e),b=g!==v.id;return b&&(m[v.id]=g,delete w.entities[v.id]),w.entities[g]=f,b}function c(m,v){return d([m],v)}function d(m,v){const w={},h={};m.forEach(g=>{g.id in v.entities&&(h[g.id]={id:g.id,changes:{...h[g.id]?h[g.id].changes:null,...g.changes}})}),m=Object.values(h),m.length>0&&m.filter(b=>u(w,b,v)).length>0&&(v.ids=Object.values(v.entities).map(b=>vn(b,e)))}function p(m,v){return y([m],v)}function y(m,v){const[w,h]=w0(m,e,v);d(h,v),r(w,v)}return{removeAll:Gb(l),addOne:le(t),addMany:le(r),setOne:le(n),setMany:le(o),setAll:le(i),updateOne:le(c),updateMany:le(d),upsertOne:le(p),upsertMany:le(y),removeOne:le(s),removeMany:le(a)}}function Yb(e,t){const{removeOne:r,removeMany:n,removeAll:o}=k0(e);function i(h,f){return s([h],f)}function s(h,f){h=Kr(h);const g=h.filter(b=>!(vn(b,e)in f.entities));g.length!==0&&v(g,f)}function a(h,f){return l([h],f)}function l(h,f){h=Kr(h),h.length!==0&&v(h,f)}function u(h,f){h=Kr(h),f.entities={},f.ids=[],s(h,f)}function c(h,f){return d([h],f)}function d(h,f){let g=!1;for(let b of h){const L=f.entities[b.id];if(!L)continue;g=!0,Object.assign(L,b.changes);const M=e(L);b.id!==M&&(delete f.entities[b.id],f.entities[M]=L)}g&&w(f)}function p(h,f){return y([h],f)}function y(h,f){const[g,b]=w0(h,e,f);d(b,f),s(g,f)}function m(h,f){if(h.length!==f.length)return!1;for(let g=0;g<h.length&&g<f.length;g++)if(h[g]!==f[g])return!1;return!0}function v(h,f){h.forEach(g=>{f.entities[e(g)]=g}),w(f)}function w(h){const f=Object.values(h.entities);f.sort(t);const g=f.map(e),{ids:b}=h;m(b,g)||(h.ids=g)}return{removeOne:r,removeMany:n,removeAll:o,addOne:le(i),updateOne:le(c),upsertOne:le(p),setOne:le(a),setMany:le(l),setAll:le(u),addMany:le(s),updateMany:le(d),upsertMany:le(y)}}function b0(e={}){const{selectId:t,sortComparer:r}={sortComparer:!1,selectId:s=>s.id,...e},n=r?Yb(t,r):k0(t),o=Wb(n),i=Hb();return{selectId:t,sortComparer:r,...o,...i,...n}}var qb=(e,t)=>{if(typeof e!="function")throw new Error(Ye(32))},$c="listenerMiddleware",Qb=e=>{let{type:t,actionCreator:r,matcher:n,predicate:o,effect:i}=e;if(t)o=Bt(t).match;else if(r)t=r.type,o=r.match;else if(n)o=n;else if(!o)throw new Error(Ye(21));return qb(i),{predicate:o,type:t,effect:i}},Xb=Object.assign(e=>{const{type:t,predicate:r,effect:n}=Qb(e);return{id:v0(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(Ye(22))}}},{withTypes:()=>Xb}),Jb=Object.assign(Bt(`${$c}/add`),{withTypes:()=>Jb});Bt(`${$c}/removeAll`);var Zb=Object.assign(Bt(`${$c}/remove`),{withTypes:()=>Zb});function Ye(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}function S0(e,t){return function(){return e.apply(t,arguments)}}const{toString:eS}=Object.prototype,{getPrototypeOf:Wc}=Object,ca=(e=>t=>{const r=eS.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Rt=e=>(e=e.toLowerCase(),t=>ca(t)===e),da=e=>t=>typeof t===e,{isArray:Wn}=Array,Ko=da("undefined");function tS(e){return e!==null&&!Ko(e)&&e.constructor!==null&&!Ko(e.constructor)&&ft(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const L0=Rt("ArrayBuffer");function rS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&L0(e.buffer),t}const nS=da("string"),ft=da("function"),M0=da("number"),pa=e=>e!==null&&typeof e=="object",oS=e=>e===!0||e===!1,Ki=e=>{if(ca(e)!=="object")return!1;const t=Wc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},iS=Rt("Date"),sS=Rt("File"),aS=Rt("Blob"),lS=Rt("FileList"),uS=e=>pa(e)&&ft(e.pipe),cS=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||ft(e.append)&&((t=ca(e))==="formdata"||t==="object"&&ft(e.toString)&&e.toString()==="[object FormData]"))},dS=Rt("URLSearchParams"),pS=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ni(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),Wn(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const i=r?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(n=0;n<s;n++)a=i[n],t.call(null,e[a],a,e)}}function E0(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const C0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,P0=e=>!Ko(e)&&e!==C0;function Su(){const{caseless:e}=P0(this)&&this||{},t={},r=(n,o)=>{const i=e&&E0(t,o)||o;Ki(t[i])&&Ki(n)?t[i]=Su(t[i],n):Ki(n)?t[i]=Su({},n):Wn(n)?t[i]=n.slice():t[i]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&ni(arguments[n],r);return t}const fS=(e,t,r,{allOwnKeys:n}={})=>(ni(t,(o,i)=>{r&&ft(o)?e[i]=S0(o,r):e[i]=o},{allOwnKeys:n}),e),mS=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),hS=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},gS=(e,t,r,n)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!n||n(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=r!==!1&&Wc(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},yS=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},vS=e=>{if(!e)return null;if(Wn(e))return e;let t=e.length;if(!M0(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},xS=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Wc(Uint8Array)),wS=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=n.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},kS=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},bS=Rt("HTMLFormElement"),SS=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),sf=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),LS=Rt("RegExp"),T0=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};ni(r,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(n[i]=s||o)}),Object.defineProperties(e,n)},MS=e=>{T0(e,(t,r)=>{if(ft(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(ft(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},ES=(e,t)=>{const r={},n=o=>{o.forEach(i=>{r[i]=!0})};return Wn(e)?n(e):n(String(e).split(t)),r},CS=()=>{},PS=(e,t)=>(e=+e,Number.isFinite(e)?e:t),el="abcdefghijklmnopqrstuvwxyz",af="0123456789",D0={DIGIT:af,ALPHA:el,ALPHA_DIGIT:el+el.toUpperCase()+af},TS=(e=16,t=D0.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function DS(e){return!!(e&&ft(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const RS=e=>{const t=new Array(10),r=(n,o)=>{if(pa(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;const i=Wn(n)?[]:{};return ni(n,(s,a)=>{const l=r(s,o+1);!Ko(l)&&(i[a]=l)}),t[o]=void 0,i}}return n};return r(e,0)},jS=Rt("AsyncFunction"),NS=e=>e&&(pa(e)||ft(e))&&ft(e.then)&&ft(e.catch),E={isArray:Wn,isArrayBuffer:L0,isBuffer:tS,isFormData:cS,isArrayBufferView:rS,isString:nS,isNumber:M0,isBoolean:oS,isObject:pa,isPlainObject:Ki,isUndefined:Ko,isDate:iS,isFile:sS,isBlob:aS,isRegExp:LS,isFunction:ft,isStream:uS,isURLSearchParams:dS,isTypedArray:xS,isFileList:lS,forEach:ni,merge:Su,extend:fS,trim:pS,stripBOM:mS,inherits:hS,toFlatObject:gS,kindOf:ca,kindOfTest:Rt,endsWith:yS,toArray:vS,forEachEntry:wS,matchAll:kS,isHTMLForm:bS,hasOwnProperty:sf,hasOwnProp:sf,reduceDescriptors:T0,freezeMethods:MS,toObjectSet:ES,toCamelCase:SS,noop:CS,toFiniteNumber:PS,findKey:E0,global:C0,isContextDefined:P0,ALPHABET:D0,generateString:TS,isSpecCompliantForm:DS,toJSONObject:RS,isAsyncFn:jS,isThenable:NS};function U(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}E.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const R0=U.prototype,j0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{j0[e]={value:e}});Object.defineProperties(U,j0);Object.defineProperty(R0,"isAxiosError",{value:!0});U.from=(e,t,r,n,o,i)=>{const s=Object.create(R0);return E.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),U.call(s,e.message,t,r,n,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const _S=null;function Lu(e){return E.isPlainObject(e)||E.isArray(e)}function N0(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function lf(e,t,r){return e?e.concat(t).map(function(o,i){return o=N0(o),!r&&i?"["+o+"]":o}).join(r?".":""):t}function AS(e){return E.isArray(e)&&!e.some(Lu)}const OS=E.toFlatObject(E,{},null,function(t){return/^is[A-Z]/.test(t)});function fa(e,t,r){if(!E.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=E.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,w){return!E.isUndefined(w[v])});const n=r.metaTokens,o=r.visitor||c,i=r.dots,s=r.indexes,l=(r.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(t);if(!E.isFunction(o))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(E.isDate(m))return m.toISOString();if(!l&&E.isBlob(m))throw new U("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(m)||E.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function c(m,v,w){let h=m;if(m&&!w&&typeof m=="object"){if(E.endsWith(v,"{}"))v=n?v:v.slice(0,-2),m=JSON.stringify(m);else if(E.isArray(m)&&AS(m)||(E.isFileList(m)||E.endsWith(v,"[]"))&&(h=E.toArray(m)))return v=N0(v),h.forEach(function(g,b){!(E.isUndefined(g)||g===null)&&t.append(s===!0?lf([v],b,i):s===null?v:v+"[]",u(g))}),!1}return Lu(m)?!0:(t.append(lf(w,v,i),u(m)),!1)}const d=[],p=Object.assign(OS,{defaultVisitor:c,convertValue:u,isVisitable:Lu});function y(m,v){if(!E.isUndefined(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(m),E.forEach(m,function(h,f){(!(E.isUndefined(h)||h===null)&&o.call(t,h,E.isString(f)?f.trim():f,v,p))===!0&&y(h,v?v.concat(f):[f])}),d.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return y(e),t}function uf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Hc(e,t){this._pairs=[],e&&fa(e,this,t)}const _0=Hc.prototype;_0.append=function(t,r){this._pairs.push([t,r])};_0.toString=function(t){const r=t?function(n){return t.call(this,n,uf)}:uf;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function FS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function A0(e,t,r){if(!t)return e;const n=r&&r.encode||FS,o=r&&r.serialize;let i;if(o?i=o(t,r):i=E.isURLSearchParams(t)?t.toString():new Hc(t,r).toString(n),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class cf{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){E.forEach(this.handlers,function(n){n!==null&&t(n)})}}const O0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},VS=typeof URLSearchParams<"u"?URLSearchParams:Hc,BS=typeof FormData<"u"?FormData:null,IS=typeof Blob<"u"?Blob:null,zS={isBrowser:!0,classes:{URLSearchParams:VS,FormData:BS,Blob:IS},protocols:["http","https","file","blob","url","data"]},F0=typeof window<"u"&&typeof document<"u",US=(e=>F0&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),$S=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",WS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:F0,hasStandardBrowserEnv:US,hasStandardBrowserWebWorkerEnv:$S},Symbol.toStringTag,{value:"Module"})),Ct={...WS,...zS};function HS(e,t){return fa(e,new Ct.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,i){return Ct.isNode&&E.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function KS(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function GS(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}function V0(e){function t(r,n,o,i){let s=r[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=i>=r.length;return s=!s&&E.isArray(o)?o.length:s,l?(E.hasOwnProp(o,s)?o[s]=[o[s],n]:o[s]=n,!a):((!o[s]||!E.isObject(o[s]))&&(o[s]=[]),t(r,n,o[s],i)&&E.isArray(o[s])&&(o[s]=GS(o[s])),!a)}if(E.isFormData(e)&&E.isFunction(e.entries)){const r={};return E.forEachEntry(e,(n,o)=>{t(KS(n),o,r,0)}),r}return null}function YS(e,t,r){if(E.isString(e))try{return(t||JSON.parse)(e),E.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const Kc={transitional:O0,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,i=E.isObject(t);if(i&&E.isHTMLForm(t)&&(t=new FormData(t)),E.isFormData(t))return o?JSON.stringify(V0(t)):t;if(E.isArrayBuffer(t)||E.isBuffer(t)||E.isStream(t)||E.isFile(t)||E.isBlob(t))return t;if(E.isArrayBufferView(t))return t.buffer;if(E.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return HS(t,this.formSerializer).toString();if((a=E.isFileList(t))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return fa(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(r.setContentType("application/json",!1),YS(t)):t}],transformResponse:[function(t){const r=this.transitional||Kc.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(t&&E.isString(t)&&(n&&!this.responseType||o)){const s=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?U.from(a,U.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ct.classes.FormData,Blob:Ct.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],e=>{Kc.headers[e]={}});const Gc=Kc,qS=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),QS=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),r=s.substring(0,o).trim().toLowerCase(),n=s.substring(o+1).trim(),!(!r||t[r]&&qS[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},df=Symbol("internals");function eo(e){return e&&String(e).trim().toLowerCase()}function Gi(e){return e===!1||e==null?e:E.isArray(e)?e.map(Gi):String(e)}function XS(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const JS=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function tl(e,t,r,n,o){if(E.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!E.isString(t)){if(E.isString(n))return t.indexOf(n)!==-1;if(E.isRegExp(n))return n.test(t)}}function ZS(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function e2(e,t){const r=E.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,i,s){return this[n].call(this,t,o,i,s)},configurable:!0})})}class ma{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function i(a,l,u){const c=eo(l);if(!c)throw new Error("header name must be a non-empty string");const d=E.findKey(o,c);(!d||o[d]===void 0||u===!0||u===void 0&&o[d]!==!1)&&(o[d||l]=Gi(a))}const s=(a,l)=>E.forEach(a,(u,c)=>i(u,c,l));return E.isPlainObject(t)||t instanceof this.constructor?s(t,r):E.isString(t)&&(t=t.trim())&&!JS(t)?s(QS(t),r):t!=null&&i(r,t,n),this}get(t,r){if(t=eo(t),t){const n=E.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return XS(o);if(E.isFunction(r))return r.call(this,o,n);if(E.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=eo(t),t){const n=E.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||tl(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function i(s){if(s=eo(s),s){const a=E.findKey(n,s);a&&(!r||tl(n,n[a],a,r))&&(delete n[a],o=!0)}}return E.isArray(t)?t.forEach(i):i(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const i=r[n];(!t||tl(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const r=this,n={};return E.forEach(this,(o,i)=>{const s=E.findKey(n,i);if(s){r[s]=Gi(o),delete r[i];return}const a=t?ZS(i):String(i).trim();a!==i&&delete r[i],r[a]=Gi(o),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return E.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&E.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[df]=this[df]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=eo(s);n[a]||(e2(o,s),n[a]=!0)}return E.isArray(t)?t.forEach(i):i(t),this}}ma.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(ma.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});E.freezeMethods(ma);const It=ma;function rl(e,t){const r=this||Gc,n=t||r,o=It.from(n.headers);let i=n.data;return E.forEach(e,function(a){i=a.call(r,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function B0(e){return!!(e&&e.__CANCEL__)}function oi(e,t,r){U.call(this,e??"canceled",U.ERR_CANCELED,t,r),this.name="CanceledError"}E.inherits(oi,U,{__CANCEL__:!0});function t2(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new U("Request failed with status code "+r.status,[U.ERR_BAD_REQUEST,U.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const r2=Ct.hasStandardBrowserEnv?{write(e,t,r,n,o,i){const s=[e+"="+encodeURIComponent(t)];E.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),E.isString(n)&&s.push("path="+n),E.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function n2(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function o2(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function I0(e,t){return e&&!n2(t)?o2(e,t):t}const i2=Ct.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function o(i){let s=i;return t&&(r.setAttribute("href",s),s=r.href),r.setAttribute("href",s),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=o(window.location.href),function(s){const a=E.isString(s)?o(s):s;return a.protocol===n.protocol&&a.host===n.host}}():function(){return function(){return!0}}();function s2(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function a2(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=n[i];s||(s=u),r[o]=l,n[o]=u;let d=i,p=0;for(;d!==o;)p+=r[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const y=c&&u-c;return y?Math.round(p*1e3/y):void 0}}function pf(e,t){let r=0;const n=a2(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-r,l=n(a),u=i<=s;r=i;const c={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&u?(s-i)/l:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}const l2=typeof XMLHttpRequest<"u",u2=l2&&function(e){return new Promise(function(r,n){let o=e.data;const i=It.from(e.headers).normalize();let{responseType:s,withXSRFToken:a}=e,l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let c;if(E.isFormData(o)){if(Ct.hasStandardBrowserEnv||Ct.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((c=i.getContentType())!==!1){const[v,...w]=c?c.split(";").map(h=>h.trim()).filter(Boolean):[];i.setContentType([v||"multipart/form-data",...w].join("; "))}}let d=new XMLHttpRequest;if(e.auth){const v=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(v+":"+w))}const p=I0(e.baseURL,e.url);d.open(e.method.toUpperCase(),A0(p,e.params,e.paramsSerializer),!0),d.timeout=e.timeout;function y(){if(!d)return;const v=It.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),h={data:!s||s==="text"||s==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:v,config:e,request:d};t2(function(g){r(g),u()},function(g){n(g),u()},h),d=null}if("onloadend"in d?d.onloadend=y:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(y)},d.onabort=function(){d&&(n(new U("Request aborted",U.ECONNABORTED,e,d)),d=null)},d.onerror=function(){n(new U("Network Error",U.ERR_NETWORK,e,d)),d=null},d.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||O0;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),n(new U(w,h.clarifyTimeoutError?U.ETIMEDOUT:U.ECONNABORTED,e,d)),d=null},Ct.hasStandardBrowserEnv&&(a&&E.isFunction(a)&&(a=a(e)),a||a!==!1&&i2(p))){const v=e.xsrfHeaderName&&e.xsrfCookieName&&r2.read(e.xsrfCookieName);v&&i.set(e.xsrfHeaderName,v)}o===void 0&&i.setContentType(null),"setRequestHeader"in d&&E.forEach(i.toJSON(),function(w,h){d.setRequestHeader(h,w)}),E.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),s&&s!=="json"&&(d.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&d.addEventListener("progress",pf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",pf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=v=>{d&&(n(!v||v.type?new oi(null,e,d):v),d.abort(),d=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const m=s2(p);if(m&&Ct.protocols.indexOf(m)===-1){n(new U("Unsupported protocol "+m+":",U.ERR_BAD_REQUEST,e));return}d.send(o||null)})},Mu={http:_S,xhr:u2};E.forEach(Mu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ff=e=>`- ${e}`,c2=e=>E.isFunction(e)||e===null||e===!1,z0={getAdapter:e=>{e=E.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let i=0;i<t;i++){r=e[i];let s;if(n=r,!c2(r)&&(n=Mu[(s=String(r)).toLowerCase()],n===void 0))throw new U(`Unknown adapter '${s}'`);if(n)break;o[s||"#"+i]=n}if(!n){const i=Object.entries(o).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(ff).join(`
`):" "+ff(i[0]):"as no adapter specified";throw new U("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return n},adapters:Mu};function nl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new oi(null,e)}function mf(e){return nl(e),e.headers=It.from(e.headers),e.data=rl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),z0.getAdapter(e.adapter||Gc.adapter)(e).then(function(n){return nl(e),n.data=rl.call(e,e.transformResponse,n),n.headers=It.from(n.headers),n},function(n){return B0(n)||(nl(e),n&&n.response&&(n.response.data=rl.call(e,e.transformResponse,n.response),n.response.headers=It.from(n.response.headers))),Promise.reject(n)})}const hf=e=>e instanceof It?{...e}:e;function Vn(e,t){t=t||{};const r={};function n(u,c,d){return E.isPlainObject(u)&&E.isPlainObject(c)?E.merge.call({caseless:d},u,c):E.isPlainObject(c)?E.merge({},c):E.isArray(c)?c.slice():c}function o(u,c,d){if(E.isUndefined(c)){if(!E.isUndefined(u))return n(void 0,u,d)}else return n(u,c,d)}function i(u,c){if(!E.isUndefined(c))return n(void 0,c)}function s(u,c){if(E.isUndefined(c)){if(!E.isUndefined(u))return n(void 0,u)}else return n(void 0,c)}function a(u,c,d){if(d in t)return n(u,c);if(d in e)return n(void 0,u)}const l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,c)=>o(hf(u),hf(c),!0)};return E.forEach(Object.keys(Object.assign({},e,t)),function(c){const d=l[c]||o,p=d(e[c],t[c],c);E.isUndefined(p)&&d!==a||(r[c]=p)}),r}const U0="1.6.8",Yc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Yc[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const gf={};Yc.transitional=function(t,r,n){function o(i,s){return"[Axios v"+U0+"] Transitional option '"+i+"'"+s+(n?". "+n:"")}return(i,s,a)=>{if(t===!1)throw new U(o(s," has been removed"+(r?" in "+r:"")),U.ERR_DEPRECATED);return r&&!gf[s]&&(gf[s]=!0,console.warn(o(s," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,s,a):!0}};function d2(e,t,r){if(typeof e!="object")throw new U("options must be an object",U.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],s=t[i];if(s){const a=e[i],l=a===void 0||s(a,i,e);if(l!==!0)throw new U("option "+i+" must be "+l,U.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new U("Unknown option "+i,U.ERR_BAD_OPTION)}}const Eu={assertOptions:d2,validators:Yc},tr=Eu.validators;class Ds{constructor(t){this.defaults=t,this.interceptors={request:new cf,response:new cf}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";n.stack?i&&!String(n.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+i):n.stack=i}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Vn(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:i}=r;n!==void 0&&Eu.assertOptions(n,{silentJSONParsing:tr.transitional(tr.boolean),forcedJSONParsing:tr.transitional(tr.boolean),clarifyTimeoutError:tr.transitional(tr.boolean)},!1),o!=null&&(E.isFunction(o)?r.paramsSerializer={serialize:o}:Eu.assertOptions(o,{encode:tr.function,serialize:tr.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s=i&&E.merge(i.common,i[r.method]);i&&E.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),r.headers=It.concat(s,i);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(r)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,d=0,p;if(!l){const m=[mf.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,u),p=m.length,c=Promise.resolve(r);d<p;)c=c.then(m[d++],m[d++]);return c}p=a.length;let y=r;for(d=0;d<p;){const m=a[d++],v=a[d++];try{y=m(y)}catch(w){v.call(this,w);break}}try{c=mf.call(this,y)}catch(m){return Promise.reject(m)}for(d=0,p=u.length;d<p;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=Vn(this.defaults,t);const r=I0(t.baseURL,t.url);return A0(r,t.params,t.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(t){Ds.prototype[t]=function(r,n){return this.request(Vn(n||{},{method:t,url:r,data:(n||{}).data}))}});E.forEach(["post","put","patch"],function(t){function r(n){return function(i,s,a){return this.request(Vn(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}Ds.prototype[t]=r(),Ds.prototype[t+"Form"]=r(!0)});const Yi=Ds;class qc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const n=this;this.promise.then(o=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](o);n._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{n.subscribe(a),i=a}).then(o);return s.cancel=function(){n.unsubscribe(i)},s},t(function(i,s,a){n.reason||(n.reason=new oi(i,s,a),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new qc(function(o){t=o}),cancel:t}}}const p2=qc;function f2(e){return function(r){return e.apply(null,r)}}function m2(e){return E.isObject(e)&&e.isAxiosError===!0}const Cu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Cu).forEach(([e,t])=>{Cu[t]=e});const h2=Cu;function $0(e){const t=new Yi(e),r=S0(Yi.prototype.request,t);return E.extend(r,Yi.prototype,t,{allOwnKeys:!0}),E.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return $0(Vn(e,o))},r}const fe=$0(Gc);fe.Axios=Yi;fe.CanceledError=oi;fe.CancelToken=p2;fe.isCancel=B0;fe.VERSION=U0;fe.toFormData=fa;fe.AxiosError=U;fe.Cancel=fe.CanceledError;fe.all=function(t){return Promise.all(t)};fe.spread=f2;fe.isAxiosError=m2;fe.mergeConfig=Vn;fe.AxiosHeaders=It;fe.formToJSON=e=>V0(E.isHTMLForm(e)?new FormData(e):e);fe.getAdapter=z0.getAdapter;fe.HttpStatusCode=h2;fe.default=fe;const Rs=fe,Qc=b0({selectId:e=>e.title,sortComparer:(e,t)=>e.id-t.id}),g2=Qc.getInitialState({status:"idle",error:null,selectSkill:"HTML"}),wo=x0("skills/fetchSkills",async(e,{rejectWithValue:t,signal:r})=>{try{const n=Rs.CancelToken.source();return r.addEventListener("abort",()=>{n.cancel()}),(await Rs.get("https://253olivares.github.io/Newportfolio-ReactViteBuild/data/technicalSkill.json",{cancelToken:n.token}).catch(()=>{throw new Error("Api had issues")})).data.Skills}catch(n){return console.log(`fetchSkills:${n}`),t(n)}}),W0=ua({name:"skills",initialState:g2,reducers:{changeSkill(e,t){e.selectSkill=t.payload}},extraReducers(e){e.addCase(wo.pending,t=>{t.status="loading"}).addCase(wo.fulfilled,(t,r)=>{t.status="succeeded";const n=[];Object.entries(r.payload).map(([o,i])=>{n.push(i)}),Qc.upsertMany(t,n)}).addCase(wo.rejected,(t,r)=>{t.status="failed",r.error.message&&(t.error=r.error.message)})}}),{selectAll:KC,selectById:GC,selectIds:YC,selectEntities:y2}=Qc.getSelectors(e=>e.skills),v2=e=>e.skills.status,x2=e=>e.skills.error,H0=e=>e.skills.selectSkill,{changeSkill:w2}=W0.actions,k2=W0.reducer,Xc=b0({selectId:e=>e.id,sortComparer:(e,t)=>e.id-t.id}),b2=Xc.getInitialState({status:"idle",error:null,filters:{searchTerm:"",tabSelect:"Programming",liveDemos:!1,selectedFilter:[],responsive:!1},openFilter:!1}),qi=x0("portfolio/fetchProjects",async(e,{rejectWithValue:t,signal:r})=>{try{const n=Rs.CancelToken.source();return r.addEventListener("abort",()=>{n.cancel()}),(await Rs.get("https://253olivares.github.io/Newportfolio-ReactViteBuild/data/projectsList.json",{cancelToken:n.token}).catch(()=>{throw new Error("Api had issues")})).data.Projects}catch(n){return console.log(`fetchSkills:${n}`),t(n)}}),K0=ua({name:"project",initialState:b2,reducers:{setSearchTerm(e,t){e.filters.searchTerm=t.payload},setTabSelect(e,t){e.filters.tabSelect=t.payload},changeLiveDemo(e){const t=e.filters.liveDemos;e.filters.liveDemos=!t},removeFromFilter(e,t){const r=e.filters.selectedFilter;e.filters.selectedFilter=r.filter(n=>n!==t.payload)},addToFilter(e,t){const r=e.filters.selectedFilter;e.filters.selectedFilter=[...r,t.payload]},changeResponsive(e){e.filters.responsive=!e.filters.responsive},openFilter(e){e.openFilter=!0},closeFilter(e){e.openFilter=!1},resetFilter(e){e.filters={searchTerm:"",tabSelect:e.filters.tabSelect,liveDemos:!1,selectedFilter:[],responsive:!1}}},extraReducers(e){e.addCase(qi.pending,t=>{t.status="loading"}).addCase(qi.fulfilled,(t,r)=>{t.status="succeeded",Xc.upsertMany(t,r.payload)}).addCase(qi.rejected,(t,r)=>{t.status="failed",console.log(r),r.error.message&&(t.error=r.error.message)})}}),{selectAll:S2}=Xc.getSelectors(e=>e.project),L2=e=>e.project.status,M2=e=>e.project.error,ii=e=>e.project.filters.tabSelect,E2=e=>e.project.filters.liveDemos,C2=e=>e.project.filters.selectedFilter,P2=e=>e.project.filters.responsive,T2=e=>e.project.filters,D2=e=>e.project.openFilter,R2=f0([S2,T2],(e,t)=>{const{searchTerm:r,tabSelect:n,liveDemos:o,selectedFilter:i,responsive:s}=t;let a,l=r.trim().toLowerCase(),u=[];a=e.filter(p=>r===""||p.projectName.trim().toLowerCase().includes(l)?!0:(u.push(p),!1));let c=[];for(let p=0;p<u.length;p++){let y=u[p].tags;for(let m=0;m<y.length;m++)if(y[m].trim().toLowerCase().includes(l)){a.push(u[p]);break}else c.push(u[p])}for(let p=0;p<c.length;p++)c[p].date.trim().toLowerCase().includes(l)&&a.push(c[p]);a=a.filter(p=>p.section===n),o===!0&&n==="Programming"&&(a=a.filter(p=>p.live===!0)),s===!0&&n==="Programming"&&(a=a.filter(p=>p.responsive===!0));let d=[];if(i.length>=1&&n==="Programming"){console.log("running code for tag filter");for(let p=0;p<a.length;p++)for(let y=0;y<a[p].tags.length;y++){let m=!1;for(let v=0;v<i.length;v++)if(a[p].tags[y]===i[v]){m=!0,d.push(a[p]);break}if(m)break}}else d=a;return d=d.sort((p,y)=>y.id-p.id),d}),{setSearchTerm:ol,setTabSelect:j2,changeLiveDemo:N2,removeFromFilter:_2,addToFilter:A2,openFilter:O2,closeFilter:yf,resetFilter:F2,changeResponsive:V2}=K0.actions,B2=K0.reducer,I2={scrollState:"Home",currentSection:"Home",windowWidth:window.innerWidth},G0=ua({name:"sidebar",initialState:I2,reducers:{setScrollState(e,t){e.scrollState=t.payload},setCurrentSelection(e,t){e.currentSection=t.payload},setWindowWidth(e){e.windowWidth=window.innerWidth}}}),z2=e=>e.sidebar.scrollState,U2=e=>e.sidebar.currentSection,Y0=e=>e.sidebar.windowWidth,{setScrollState:ao,setCurrentSelection:xn,setWindowWidth:$2}=G0.actions,W2=G0.reducer,H2={email:"",message:"",formError:"none"},q0=ua({name:"contact",initialState:H2,reducers:{setEmail(e,t){e.email=t.payload},setMessage(e,t){e.message=t.payload},setFormError(e,t){e.formError=t.payload}}}),js=e=>e.contact.email,Q0=e=>e.contact.message,X0=e=>e.contact.formError,{setEmail:J0,setMessage:Z0,setFormError:il}=q0.actions,K2=q0.reducer,Ns=Lb({reducer:{sidebar:W2,skills:k2,project:B2,contact:K2}});var ey={exports:{}},ty={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var si=k;function G2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Y2=typeof Object.is=="function"?Object.is:G2,q2=si.useSyncExternalStore,Q2=si.useRef,X2=si.useEffect,J2=si.useMemo,Z2=si.useDebugValue;ty.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var i=Q2(null);if(i.current===null){var s={hasValue:!1,value:null};i.current=s}else s=i.current;i=J2(function(){function l(y){if(!u){if(u=!0,c=y,y=n(y),o!==void 0&&s.hasValue){var m=s.value;if(o(m,y))return d=m}return d=y}if(m=d,Y2(c,y))return m;var v=n(y);return o!==void 0&&o(m,v)?m:(c=y,d=v)}var u=!1,c,d,p=r===void 0?null:r;return[function(){return l(t())},p===null?void 0:function(){return l(p())}]},[t,r,n,o]);var a=q2(e,i[0],i[1]);return X2(function(){s.hasValue=!0,s.value=a},[a]),Z2(a),a};ey.exports=ty;var eL=ey.exports,Ze="default"in wl?Vm:wl,vf=Symbol.for("react-redux-context"),xf=typeof globalThis<"u"?globalThis:{};function tL(){if(!Ze.createContext)return{};const e=xf[vf]??(xf[vf]=new Map);let t=e.get(Ze.createContext);return t||(t=Ze.createContext(null),e.set(Ze.createContext,t)),t}var Lr=tL(),rL=()=>{throw new Error("uSES not initialized!")};function Jc(e=Lr){return function(){return Ze.useContext(e)}}var ry=Jc(),ny=rL,nL=e=>{ny=e},oL=(e,t)=>e===t;function iL(e=Lr){const t=e===Lr?ry:Jc(e),r=(n,o={})=>{const{equalityFn:i=oL,devModeChecks:s={}}=typeof o=="function"?{equalityFn:o}:o,{store:a,subscription:l,getServerState:u,stabilityCheck:c,identityFunctionCheck:d}=t();Ze.useRef(!0);const p=Ze.useCallback({[n.name](m){return n(m)}}[n.name],[n,c,s.stabilityCheck]),y=ny(l.addNestedSub,a.getState,u||a.getState,p,i);return Ze.useDebugValue(y),y};return Object.assign(r,{withTypes:()=>r}),r}var sL=iL();function aL(e){e()}function lL(){let e=null,t=null;return{clear(){e=null,t=null},notify(){aL(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const o=t={callback:r,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){!n||e===null||(n=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var wf={notify(){},get:()=>[]};function uL(e,t){let r,n=wf,o=0,i=!1;function s(v){c();const w=n.subscribe(v);let h=!1;return()=>{h||(h=!0,w(),d())}}function a(){n.notify()}function l(){m.onStateChange&&m.onStateChange()}function u(){return i}function c(){o++,r||(r=t?t.addNestedSub(l):e.subscribe(l),n=lL())}function d(){o--,r&&o===0&&(r(),r=void 0,n.clear(),n=wf)}function p(){i||(i=!0,c())}function y(){i&&(i=!1,d())}const m={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:p,tryUnsubscribe:y,getListeners:()=>n};return m}var cL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dL=typeof navigator<"u"&&navigator.product==="ReactNative",pL=cL||dL?Ze.useLayoutEffect:Ze.useEffect;function fL({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",identityFunctionCheck:i="once"}){const s=Ze.useMemo(()=>{const u=uL(e);return{store:e,subscription:u,getServerState:n?()=>n:void 0,stabilityCheck:o,identityFunctionCheck:i}},[e,n,o,i]),a=Ze.useMemo(()=>e.getState(),[e]);pL(()=>{const{subscription:u}=s;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[s,a]);const l=t||Lr;return Ze.createElement(l.Provider,{value:s},r)}var mL=fL;function oy(e=Lr){const t=e===Lr?ry:Jc(e),r=()=>{const{store:n}=t();return n};return Object.assign(r,{withTypes:()=>r}),r}var hL=oy();function gL(e=Lr){const t=e===Lr?hL:oy(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var yL=gL();nL(eL.useSyncExternalStoreWithSelector);const qe=yL,W=sL,vL=()=>{const e=qe();return k.useLayoutEffect(()=>{e(xn("ErrorPage"))},[]),x.jsx("div",{className:"flex w-full h-screen justify-center items-center",children:"You have encountered an error"})},xL=k.memo(({character:e})=>{const t=k.useRef(null);return k.useEffect(()=>{const r=()=>{t.current&&(t.current.style.transform=`rotate(${window.scrollY/10}deg)`)};window.addEventListener("scroll",r,!0)},[]),x.jsx("img",{ref:t,className:`\r
      w-[1.838rem]\r
      mobile:w-[2.451rem]\r
      sMobile:w-[3.921rem]  \r
      mMobile:w-[4.706rem]\r
      sLaptop:w-[2.5rem] \r
      mLaptop:w-[3.125rem] \r
      desktop:w-[3.75rem] \r
      largeDesktop:w-[4.688rem]\r
      4k:w-[6.250rem]\r
    `,src:e,alt:"Character_1_svg"})}),wL=k.memo(({item:e,imgURLBase:t,imgAlternate:r})=>{const n=qe(),o=W(U2);let i="",s="";switch(e){case"Home":i="Home",s=`
      w-[1.841rem] 
      mobile:w-[2.455rem] 
      sMobile:w-[3.928rem] 
      mMobile:w-[4.714rem] 
      sLaptop:w-[2.133rem] 
      mLaptop:w-[2.667rem] 
      desktop:w-[3.2rem] 
      largeDesktop:w-[4rem]
      4k:w-[5.333rem]
      `;break;case"About Me":i="AboutMe",s=`
      w-[1.218rem] 
      mobile:w-[1.624rem] 
      sMobile:w-[2.598rem] 
      mMobile:w-[3.118rem] 
      sLaptop:w-[1.40238rem] 
      mLaptop:w-[1.74636rem] 
      desktop:w-[2.1168rem] 
      largeDesktop:w-[2.646rem]
      4k:w-[3.527rem]`;break;case"Portfolio":i="Portfolio",s=`w-[1.271rem] 
      mobile:w-[1.694rem] 
      sMobile:w-[2.711rem] 
      mMobile:w-[3.253rem] 
      sLaptop:w-[1.472rem] 
      mLaptop:w-[1.84rem] 
      desktop:w-[2.208rem] 
      largeDesktop:w-[2.76rem]
      4k:w-[3.679rem]`;break;case"Contact Me":i="ContactMe",s=`w-[1.658rem] 
      mobile:w-[2.209rem] 
      sMobile:w-[3.536rem] 
      mMobile:w-[4.243rem] 
      sLaptop:w-[1.92rem] 
      mLaptop:w-[2.4rem] 
      desktop:w-[2.88rem] 
      largeDesktop:w-[3.6rem]
      4k:w-[4.799rem]`;break}return x.jsx(mk,{className:"h-full",to:"/Newportfolio-ReactViteBuild/",children:x.jsxs("div",{onClick:()=>{n(xn(i)),n(ao(e))},className:`
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
        4k:py-[1.666rem]
        ${o!==i&&"group"}
        ${o!==i?"cursor-pointer hover:opacity-75":"cursor-default"}
         gap-[0.288rem] 
         mobile:gap-[0.384rem] 
         sMobile:gap-[0.614rem]
        mMobile:gap-[0.736rem] 
        sLaptop:gap-[0.333rem] 
        mLaptop:gap-[0.417rem] 
        desktop:gap-[0.5rem] 
        largeDesktop:gap-[0.625rem]
        4k:gap-[0.833rem]
        `,children:[x.jsx("img",{className:s,src:o===i?r:t,alt:i}),x.jsx("p",{className:`
          font-medium 
          text-center 
          leading-none
          ${o===i?" text-SiteYellow":"text-PrimaryWhite"}
          text-PrimaryWhite 
          sLaptop:min-w-[3.333rem] 
          mLaptop:min-w-[4.167rem] 
          desktop:min-w-[5rem] 
          largeDesktop:min-w-[6.25rem]
          4k:min-w-[8.333rem]
          text-[0.518rem]
          mobile:text-[0.691rem]
          sMobile:text-[1.105rem]
          mMobile:text-[1.326rem]
          sLaptop:text-[0.6rem] 
          mLaptop:text-[0.75rem] 
          desktop:text-[0.9rem] 
          largeDesktop:text-[1.125rem]
          4k:text-[1.5rem]
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
        4k:w-[0.399rem]
        sLaptop:right-0 
        bg-SiteYellow
        `})]})})}),kL=k.memo(()=>{const e=k.useContext(Ce),{svgArray:t,selectSVGArray:r,Character1:n}=e;return x.jsxs("div",{className:`\r
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
  largeDesktop:py-[1.25rem]\r
  4k:py-[1.666rem]\r
  w-[100vw]\r
  sLaptop:w-auto\r
  sLaptop:min-w-[3.333rem] \r
  mLaptop:min-w-[4.167rem] \r
  desktop:min-w-[5rem] \r
  largeDesktop:min-w-[6.25rem] \r
  4k:min-w-[8.333rem]\r
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
  `,children:[x.jsx(xL,{character:n}),x.jsx("div",{className:`\r
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
      `,children:Object.entries(t).map(([o,i],s)=>x.jsx(wL,{item:o,imgURLBase:i,imgAlternate:r[s]},s))}),x.jsx("div",{className:`\r
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
      4k:w-[6.250rem]\r
      min-h-[2.3295rem]\r
      mobile:min-h-[3.106rem]\r
      sLaptop:min-h-[1.657rem]\r
      mLaptop:min-h-[2.071rem]\r
      desktop:min-h-[2.485rem]\r
      largeDesktop:min-h-[3.106rem]\r
      4k:min-h-[4.141rem]`})]})}),bL=()=>{const e=qe(),t=k.useContext(Ce),{tabRef:r,backgroundSelectRef:n}=t,o=W(ii),i=W(Y0);if(r.current.length!==0){const a=r.current.filter(l=>l.innerText===o)[0].offsetLeft;n.current.style.left=`${a}px`}k.useEffect(()=>{function s(){i!==window.innerWidth&&e($2())}return window.addEventListener("resize",s),s(),()=>window.removeEventListener("resize",s)},[])},SL=k.memo(()=>(bL(),x.jsxs("main",{className:`\r
      block\r
      relative w-full \r
      min-h-[100vh]\r
      overflow-x-hidden\r
      overflow-y-hidden\r
      `,children:[x.jsx(kL,{}),x.jsx("div",{children:x.jsx(nk,{})})]}))),LL="/Newportfolio-ReactViteBuild/assets/hero_Drawing.svg",ML="/Newportfolio-ReactViteBuild/assets/trianglePNG.png",EL="/Newportfolio-ReactViteBuild/assets/HeaderWaveMobile.svg",CL=k.memo(()=>{const e=k.useContext(Ce),{pageRef:t}=e;return x.jsxs("div",{ref:r=>{r&&(t.current.Home=r)},id:"Home",className:`
    relative 
    w-full 
    `,children:[x.jsx("img",{className:`\r
      block \r
      sLaptop:hidden  \r
      relative \r
      w-full\r
      `,src:EL,alt:"WavebackgroundMobile"}),x.jsx("img",{className:`\r
      hidden \r
      sLaptop:block \r
      relative\r
      w-full\r
      h-auto\r
      extra:h-[77.075rem]\r
      `,src:ML,alt:"Wavebackground"}),x.jsx("div",{className:`\r
      w-full top-0 absolute`,children:x.jsxs("div",{className:`\r
        max-w-[1920px]\r
        mx-auto\r
        relative z-[5] \r
        flex flex-col\r
\r
        gap-[0.264rem]\r
        mobile:gap-[0.351rem]\r
        sMobile:gap-[0.563rem]\r
        mMobile:gap-[0.675rem]\r
        sLaptop:gap-[0.5rem]\r
        largeDesktop:gap-[1rem]\r
\r
        pl-[3.255%]\r
        mobile:pl-[06.51%]\r
        sLaptop:pl-[8%] \r
        largeDesktop:pl-[10.625rem]\r
\r
        pt-[1.221rem]\r
        mobile:pt-[1.628rem]\r
        sMobile:pt-[2.604rem]\r
        mMobile:pt-[3.125rem]\r
        sLaptop:pt-[6.399rem]\r
        mLaptop:pt-[7.999rem]\r
        desktop:pt-[9.6rem]\r
        largeDesktop:pt-[12rem]\r
\r
        heroTextMobileTiny\r
        mobile:heroTextMobile\r
        sMobile:heroTextSmallMobile\r
        mMobile:heroTextMediumMobile\r
        sLaptop:heroTextSmall\r
        mLaptop:heroTextMedium\r
        desktop:heroTextDesktop\r
        largeDesktop:heroTextLarge\r
        `,children:[x.jsx("p",{"data-aos":"slide-right","data-aos-duration":"1250","data-aos-delay":"1300",className:`\r
\r
          text-[2.285rem]\r
          mobile:text-[3.047rem]\r
          sMobile:text-[4.875rem]\r
          mMobile:text-[5.85rem]\r
          sLaptop:text-[3.733rem]\r
          mLaptop:text-[4.666rem]\r
          desktop:text-[5.6rem]\r
          largeDesktop:text-[7rem] \r
\r
          leading-none\r
          text-SiteYellow \r
          font-bold\r
          `,children:"WELCOME !"}),x.jsxs("p",{"data-aos":"slide-right","data-aos-duration":"1250","data-aos-delay":"1800",className:`\r
          font-bold \r
\r
          text-[1.494rem]\r
          mobile:text-[1.992rem]\r
          sMobile:text-[3.188rem]\r
          mMobile:text-[3.825rem]\r
          sLaptop:text-[2.346rem]\r
          mLaptop:text-[2.933rem]\r
          desktop:text-[3.52rem]\r
          largeDesktop:text-[4.4rem]\r
\r
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
            sLaptop:top-[2.133rem]
            mLaptop:top-[2.666rem] 
            desktop:top-[3.2rem] 
            largeDesktop:top-[4rem]
         
            w-[70%]
            sMobile:w-[67.40%]
            sLaptop:w-[54.37%]
            largeDesktop:w-[65.25rem]
            
            `,src:LL,alt:""}),x.jsx("div",{className:"circle1"}),x.jsx("div",{className:"circle2"}),x.jsx("div",{className:"circle3"}),x.jsx("div",{className:"circle4"})]})})]})}),PL=k.memo(()=>{const e=k.useContext(Ce),{triangle:t,mobileTriangle:r,profile:n,bracketLeft:o,bracketRight:i,moneySign:s}=e,a=W(Y0);return x.jsxs("div",{className:`\r
    partOneCSS\r
    `,children:[x.jsxs("div",{className:"w-fill relative flex flex-col",children:[x.jsx("div",{className:`\r
          relative \r
\r
          mt-[1.465rem]\r
          mobile:mt-[1.953rem]\r
          sMobile:mt-[3.125rem]\r
          mMobile:mt-[3.75rem]\r
          sLaptop:mt-0\r
\r
          pl-[calc(6.51%-0.488rem)]\r
          mobile:pl-[calc(6.51%-0.651rem)]\r
          sMobile:pl-[calc(6.51%-1.041rem)]\r
          mMobile:pl-[calc(6.51%-1.25rem)]\r
          sLaptop:pl-[calc(3.6%-1.4rem)] \r
          mLaptop:pl-[calc(3.6%-1.65rem)] \r
          desktop:pl-[calc(3.6%-2rem)] \r
          largeDesktop:pl-[calc(3.6%-2.45rem)] \r
\r
          extra:pl-0  \r
          extra:w-full \r
          extra:max-w-[1920px] \r
          extra:mx-auto\r
          `,children:x.jsxs("h1",{className:`\r
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
            `,src:o,alt:""}),x.jsx("span",{"data-aos":"fade","data-aos-duration":"1250","data-aos-delay":a<1024?"1300":"0",children:"ABOUT ME!"}),x.jsx("img",{className:`\r
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
\r
          pt-[1.207rem]\r
          mobile:pt-[1.651rem]\r
          sMobile:pt-[2.604rem]\r
          mMobile:pt-[3.125rem]\r
          sLaptop:pt-[3.199rem]\r
          mLaptop:pt-[3.999rem]\r
          desktop:pt-[4.8rem]\r
          largeDesktop:pt-[6rem]\r
\r
          sLaptop:flex flex-row\r
          justify-between\r
          `,children:[x.jsx("div",{"data-aos":"slide-right","data-aos-duration":"1250","data-aos-delay":a<1024?"1500":"500",className:`\r
            bg-SiteGreen \r
            sLaptop:min-h-32 \r
\r
            w-[76.69%]\r
\r
            sLaptop:w-[39.94%] \r
\r
            rounded-r-[0.117rem]\r
            mobile:rounded-r-[0.156rem]\r
            sMobile:rounded-r-[0.249rem]\r
            mMobile:rounded-r-[0.299rem]\r
            sLaptop:rounded-r-[0.267rem]\r
            mLaptop:rounded-r-[0.333rem]\r
            desktop:rounded-r-[0.4rem]\r
            largeDesktop:rounded-r-[0.5rem]\r
\r
            sLaptop:pr-[2.4rem]\r
            mLaptop:pr-[3rem]\r
            desktop:pr-[3.6rem]\r
            largeDesktop:pr-[4.5rem]\r
\r
            py-[0.561rem]\r
            mobile:py-[0.749rem]\r
            sMobile:py-[1.198rem]\r
            mMobile:py-[1.438rem]\r
            sLaptop:py-[1.559rem]\r
            mLaptop:py-[1.949rem]\r
            desktop:py-[2.34rem]\r
            largeDesktop:py-[2.925rem]\r
\r
            divTinyShadow\r
\r
            mobile:divMobileShadow\r
            sMobile:divsMobileShadow\r
            mMobile:divmMobileShadow\r
            sLaptop:divSmallShadow\r
            mLaptop:divMediumShadow\r
            desktop:divDesktopShadow\r
            largeDesktop:divLargeDesktopShadow\r
            flex \r
\r
            justify-end \r
\r
            items-center\r
            `,children:x.jsx("img",{className:`\r
                mr-[12.93%]\r
                w-[43.60%]\r
                sLaptop:mr-0\r
                sLaptop:w-[11.999rem]\r
                mLaptop:w-[14.999rem]\r
                desktop:w-[18rem]\r
                largeDesktop:w-[22.5rem]\r
                `,src:n,alt:"My_Profile_Image"})}),x.jsx("div",{className:`\r
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
            `,children:x.jsxs("p",{"data-aos":"slide-right","data-aos-duration":"1250","data-aos-delay":a<1024?"1500":"500",children:[x.jsx("span",{className:`\r
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
            relatives \r
\r
            w-full\r
            sLaptop:w-[57.69%]\r
\r
            mt-[0.488rem]\r
            mobile:mt-[0.651rem]\r
            sMobile:mt-[1.041rem]\r
            mMobile:mt-[1.25rem]\r
            sLaptop:mt-0\r
\r
            `,children:[x.jsxs("h1",{className:`\r
                w-fill\r
                text-center\r
                text-[1.465rem]\r
                mobile:text-[1.953rem]\r
                sMobile:text-[3.125rem]\r
                mMobile:text-[3.75rem]\r
                sLaptop:text-[2.850rem]\r
                mLaptop:text-[3.562rem]\r
                desktop:text-[4.275rem]\r
                largeDesktop:text-[5.344rem]\r
                text-SiteGreen\r
                leading-none\r
                font-bold\r
                `,children:["MIGUEL OLIVARES",x.jsx("span",{className:`\r
                text-[1.91rem]\r
                mobile:text-[2.546rem]\r
                sMobile:text-[4.074rem]\r
                mMobile:text-[4.889rem]\r
                sLaptop:text-[3.466rem]\r
                mLaptop:text-[4.333rem]\r
                desktop:text-[5.2rem]\r
                largeDesktop:text-[6.5rem]\r
                text-GrayBackground\r
                font-medium\r
                `,children:"*"})]}),x.jsx("div",{className:`\r
\r
                mt-[0.304rem]\r
                mobile:mt-[0.447rem]\r
                sMobile:mt-[0.677rem]\r
                mMobile:mt-[0.813rem]\r
                sLaptop:mt-[0.233rem]\r
                mLaptop:mt-[0.313rem]\r
                desktop:mt-[0.35rem]\r
                largeDesktop:mt-[0.438rem]\r
\r
                w-[93.48%]\r
\r
                ml-[calc(100%-93.48%)]\r
\r
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
\r
                flex \r
                items-center \r
                relative\r
                justify-end\r
                sLaptop:justify-start\r
                bg-SiteYellow\r
                divTinyShadow\r
\r
                mobile:divMobileShadow\r
                sMobile:divsMobileShadow\r
                mMobile:divmMobileShadow\r
                sLaptop:divSmallShadow\r
                mLaptop:divMediumShadow\r
                desktop:divDesktopShadow\r
                largeDesktop:divLargeDesktopShadow\r
                `,children:x.jsx("p",{className:`\r
\r
                    text-[0.928rem]\r
                    mobile:text-[1.237rem]\r
                    sMobile:text-[1.979rem]\r
                    mMobile:text-[2.375rem]\r
                    sLaptop:text-[1.650rem]\r
                    mLaptop:text-[2.062rem]\r
                    desktop:text-[2.475rem]\r
                    largeDesktop:text-[3.094rem]\r
\r
                    pr-[calc(53.48%-7.313rem)]\r
                    mobile:pr-[calc(53.48%-9.746rem)]\r
                    sMobile:pr-[calc(53.48%-15.594rem)]\r
                    mMobile:pr-[calc(53.48%-18.716rem)]\r
\r
                    sLaptop:px-[0.933rem]\r
                    mLaptop:px-[1.167rem]\r
                    desktop:px-[1.4rem]\r
                    largeDesktop:px-[1.75rem]\r
\r
                    py-[0.366rem]\r
                    mobile:py-[0.488rem]\r
                    sMobile:py-[0.781rem]\r
                    mMobile:py-[0.938rem]\r
                    sLaptop:py-[0.799rem]\r
                    mLaptop:py-[0.999rem]\r
                    desktop:py-[1.2rem]\r
                    largeDesktop:py-[1.5rem]\r
\r
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
                sLaptop:gap-[0.450rem]\r
                mLaptop:gap-[0.562rem]\r
                desktop:gap-[0.675rem]\r
                largeDesktop:gap-[0.844rem]\r
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
                  sLaptop:h-[0.450rem]\r
                  mLaptop:h-[0.562rem]\r
                  desktop:h-[0.675rem]\r
                  largeDesktop:h-[0.844rem]\r
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
                  sLaptop:h-[0.450rem]\r
                  mLaptop:h-[0.562rem]\r
                  desktop:h-[0.675rem]\r
                  largeDesktop:h-[0.844rem]\r
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
                  sLaptop:gap-[0.299rem]\r
                  mLaptop:gap-[0.374rem]\r
                  desktop:gap-[0.449rem]\r
                  largeDesktop:gap-[0.562rem]\r
                  `,children:[x.jsx("h3",{className:`\r
                      text-[1.013rem]\r
                      mobile:text-[1.351rem]\r
                      sMobile:text-[2.161rem]\r
                      mMobile:text-[2.593rem]\r
                      sLaptop:text-[1.799rem]\r
                      mLaptop:text-[2.249rem]\r
                      desktop:text-[2.7rem]\r
                      largeDesktop:text-[3.375rem]\r
\r
                      font-semibold\r
                      text-SidebarGray\r
                      leading-none\r
\r
                      `,children:"Bachelors:"}),x.jsx("p",{className:`\r
                      text-[0.844rem]\r
                      mobile:text-[1.126rem]\r
                      sMobile:text-[1.801rem]\r
                      mMobile:text-[2.161rem]\r
                      sLaptop:text-[1.499rem]\r
                      mLaptop:text-[1.874rem]\r
                      desktop:text-[2.249rem]\r
                      largeDesktop:text-[2.812rem]\r
\r
                      font-semibold\r
                      text-SiteGreen\r
                      leading-none\r
\r
                      `,children:"Informatics & MAS"})]}),x.jsxs("div",{className:`\r
                   flex flex-col\r
                   gap-[0.169rem]\r
                   mobile:gap-[0.225rem]\r
                   sMobile:gap-[0.36rem]\r
                   mMobile:gap-[0.433rem]\r
                   sLaptop:gap-[0.299rem]\r
                   mLaptop:gap-[0.374rem]\r
                   desktop:gap-[0.449rem]\r
                   largeDesktop:gap-[0.562rem]\r
                  `,children:[x.jsx("h3",{className:`\r
                      text-[1.013rem]\r
                      mobile:text-[1.351rem]\r
                      sMobile:text-[2.161rem]\r
                      mMobile:text-[2.593rem]\r
                      sLaptop:text-[1.799rem]\r
                      mLaptop:text-[2.249rem]\r
                      desktop:text-[2.7rem]\r
                      largeDesktop:text-[3.375rem]\r
\r
                      font-semibold\r
                      text-SidebarGray\r
                      leading-none\r
\r
                      `,children:"School:"}),x.jsx("p",{className:`\r
                      text-[0.844rem]\r
                      mobile:text-[1.126rem]\r
                      sMobile:text-[1.801rem]\r
                      mMobile:text-[2.161rem]\r
                      sLaptop:text-[1.499rem]\r
                      mLaptop:text-[1.874rem]\r
                      desktop:text-[2.249rem]\r
                      largeDesktop:text-[2.812rem]\r
\r
                      font-semibold\r
                      text-SiteGreen\r
                      leading-none\r
\r
                      `,children:"IUPUI 2018-2022"})]})]})]})]}),x.jsx("div",{className:`\r
            hidden\r
            sLaptop:flex \r
\r
            pl-[7.03%]\r
            largeDesktop:pl-[8.063rem]\r
            sLaptop:pt-[1.1rem]\r
            mLaptop:pt-[1.375rem]\r
            desktop:pt-[1.65rem]\r
            largeDesktop:pt-[2.063rem]\r
\r
            sLaptop:pb-[13.579rem]\r
            mLaptop:pb-[16.958rem]\r
            desktop:pb-[20.338rem]\r
            largeDesktop:pb-[25.438rem]\r
\r
            sLaptop:text-[1.199rem]\r
            mLaptop:text-[1.499rem]\r
            desktop:text-[1.8rem]\r
            largeDesktop:text-[2.25rem]\r
\r
            extra:w-full\r
            extra:max-w-[1920px]\r
            extra:mx-auto\r
            font-medium\r
            leading-none\r
          `,children:x.jsxs("p",{"data-aos":"slide-right","data-aos-duration":"1250","data-aos-delay":"500",children:[x.jsx("span",{className:`\r
            sLaptop:text-[1.799rem]\r
            mLaptop:text-[2.249rem]\r
            desktop:text-[2.7rem]\r
            largeDesktop:text-[3.375rem]\r
            text-GrayBackground\r
            `,children:'"'}),"My passion is to draw and code!",x.jsx("span",{className:`\r
            sLaptop:text-[1.799rem]\r
            mLaptop:text-[2.249rem]\r
            desktop:text-[2.7rem]\r
            largeDesktop:text-[3.375rem]\r
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
        sLaptop:top-[29.250rem]\r
        mLaptop:top-[36.562rem]\r
        desktop:top-[43.875rem]\r
        largeDesktop:top-[54.844rem]\r
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
        `,src:r,alt:"MobileTriangle"}),x.jsx("img",{className:`\r
        hidden sLaptop:block\r
        imgCSS`,src:t})]})}),TL=k.memo(({selectSkill:e})=>{const t=k.useContext(Ce),{descRef:r}=t;if(e)return x.jsxs("div",{ref:r,className:`\r
     relative\r
     w-[calc(100%-13.02%)]\r
     mx-auto\r
     sLaptop:w-full \r
\r
     mt-[0.976rem]\r
     mobile:mt-[1.302rem]\r
     sMobile:mt-[2.083rem]\r
     mMobile:mt-[2.5rem]\r
     sLaptop:mt-0\r
\r
     min-h-[10.62rem]\r
     mobile:min-h-[14.16rem]\r
     sMobile:min-h-[22.656rem]\r
     mMobile:min-h-[27.188rem]\r
     sLaptop:min-h-[12.740rem]\r
     mLaptop:min-h-[15.925rem]\r
     desktop:min-h-[19.111rem]\r
     largeDesktop:min-h-[23.889rem] \r
\r
     mb-[1.258rem]\r
     mobile:mb-[1.258rem]\r
     sMobile:mb-[2.822rem]\r
     mMobile:mb-[3.361rem]\r
     sLaptop:mb-[2.389rem]\r
     mLaptop:mb-[2.987rem]\r
     desktop:mb-[3.584rem]\r
     largeDesktop:mb-[4.481rem]\r
     \r
     bg-PrimaryWhite \r
\r
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
\r
      mt-[0.889rem]\r
      mobile:mt-[1.153rem]\r
      sMobile:mt-[1.872rem]\r
      mMobile:mt-[2.213rem]\r
      sLaptop:mt-[1.187rem]\r
      mLaptop:mt-[1.484rem]\r
      desktop:mt-[1.781rem]\r
      largeDesktop:mt-[2.227rem]\r
\r
      pl-[0.854rem]\r
      mobile:pl-[1.139rem]\r
      sMobile:pl-[1.823rem]\r
      mMobile:pl-[2.188rem]\r
      sLaptop:pl-[0.99rem]\r
      mLaptop:pl-[1.238rem]\r
      desktop:pl-[1.485rem]\r
      largeDesktop:pl-[1.856rem]\r
\r
      `,children:[x.jsx("h1",{className:`\r
         text-[0.976rem]\r
         mobile:text-[1.302rem]\r
         sMobile:text-[2.083rem]\r
         mMobile:text-[2.5rem]\r
         sLaptop:text-[1.781rem]\r
         mLaptop:text-[2.227rem]\r
         desktop:text-[2.672rem]\r
         largeDesktop:text-[3.341rem]\r
         font-bold\r
         leading-none\r
         `,children:e.title}),x.jsx("span",{className:`

         text-[0.873rem]
         mobile:text-[1.163rem]
         sMobile:text-[1.861rem]
         mMobile:text-[2.233rem]
         sLaptop:text-[1.633rem]
         mLaptop:text-[2.041rem]
         desktop:text-[2.449rem]
         largeDesktop:text-[3.062rem]

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
      \r
      px-[0.854rem]\r
      mobile:px-[1.139rem]\r
      sMobile:px-[1.823rem]\r
      mMobile:px-[2.188rem]\r
      sLaptop:px-[0.938rem]\r
      mLaptop:px-[1.238rem]\r
      desktop:px-[1.485rem]\r
      largeDesktop:px-[1.856rem]\r
\r
      mt-[0.763rem]\r
      mobile:mt-[1.016rem]\r
      sMobile:mt-[1.626rem]\r
      mMobile:mt-[1.951rem]\r
      sLaptop:mt-[0.719rem]\r
      mLaptop:mt-[0.931rem]\r
      desktop:mt-[1.083rem]\r
      largeDesktop:mt-[1.346rem]\r
\r
      text-[0.781rem]\r
      mobile:text-[1.042rem]\r
      sMobile:text-[1.667rem]\r
      mMobile:text-[2rem]\r
      sLaptop:text-[1.425rem]\r
      mLaptop:text-[1.781rem]\r
      desktop:text-[2.138rem]\r
      largeDesktop:text-[2.673rem]\r
\r
      sLaptop:mb-[3.634rem]\r
      mLaptop:mb-[4.558rem]\r
      desktop:mb-[5.451rem]\r
      largeDesktop:mb-[6.821rem]\r
\r
      leading-[1.035]\r
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
      sLaptop:bottom-[1.098rem]\r
      mLaptop:bottom-[1.372rem]\r
      desktop:bottom-[1.647rem]\r
      largeDesktop:bottom-[2.059rem]\r
\r
      text-[0.781rem]\r
      mobile:text-[1.041rem]\r
      sMobile:text-[1.666rem]\r
      mMobile:text-[2rem]\r
      sLaptop:text-[1.335rem]\r
      mLaptop:text-[1.669rem]\r
      desktop:text-[2.004rem]\r
      largeDesktop:text-[2.505rem]\r
\r
      font-medium\r
      `,children:["Years Experience: ",e.years]})]})}),DL=k.memo(({skill:e,loc:t})=>{const r=qe(),n=k.useContext(Ce),{iconsRef:o,arrowRef:i,descRef:s}=n,a=W(H0);return k.useEffect(()=>{const l=()=>{var y;if(r(w2(e.title)),!i.current)return;const u=o.current[t].offsetLeft+o.current[t].offsetWidth/2,c=((y=i.current)==null?void 0:y.offsetWidth)/2,d=u-c,p=s.current.offsetWidth;i.current.style.left=`${(d/p*100).toFixed(2)}%`};return o.current[t].addEventListener("mouseover",l,!0),()=>{o.current[t].removeEventListener("mouseover",l,!0)}},[]),x.jsx("img",{ref:l=>o.current[t]=l,className:`
      cursor-pointer
      w-[2.591rem]
      mobile:w-[3.455rem]
      sMobile:w-[5.528rem]
      mMobile:w-[6.634rem]
      sLaptop:w-[4.224rem] 
      mLaptop:w-[5.28rem]
      desktop:w-[6.336rem]
      largeDesktop:w-[7.92rem]
      `,src:`https://253olivares.github.io/Newportfolio-ReactViteBuild/assets/SkillIcons/${a===e.title?"Select":""}${e.imgSRC}`,alt:e.title})}),iy=({color:e})=>x.jsxs("div",{className:`flex \r
          gap-[0.585rem]\r
          mobile:gap-[0.781rem]\r
          sMobile:gap-[1.249rem]\r
          mMobile:gap-[1.5rem]\r
          sLaptop:gap-[1.325rem]\r
          mLaptop:gap-[1.65rem]\r
          desktop:gap-[2rem]\r
          largeDesktop:gap-[2.5rem]`,children:[x.jsx("div",{className:`bubble ${e} animate-[reversebounce_1s_infinite] animationDelay3s`}),x.jsx("div",{className:`bubble ${e} animate-[reversebounce_1s_infinite] animationDelay2s`}),x.jsx("div",{className:`bubble ${e} animate-[reversebounce_1s_infinite] animationDelay1s`}),x.jsx("div",{className:`bubble ${e} animate-[reversebounce_1s_infinite]`})]}),RL=k.memo(()=>{const e=k.useContext(Ce),{arrowRef:t,square:r,pointer:n,squareMobile:o}=e,i=W(y2),s=W(v2),a=W(x2),l=W(H0);let u;return s==="failed"?(console.log(a),u=x.jsxs("div",{className:`\r
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
         `,onClick:()=>Ns.dispatch(wo()),children:"Reload"})]})):s==="loading"?u=x.jsx("div",{className:`\r
      w-full \r
      flex justify-center items-center\r
      sLaptop:min-h-[26.5rem]\r
      mLaptop:min-h-[33rem]\r
      desktop:min-h-[40rem]\r
      largeDesktop:min-h-[50rem]\r
      `,children:x.jsx(iy,{color:"bg-PrimaryWhite"})}):s==="succeeded"&&(u=Object.entries(i).map(([c,d],p)=>x.jsx(DL,{skill:d,loc:p},c))),x.jsxs("div",{className:`\r
    sLaptop:block\r
    partTwoCSS\r
    `,children:[x.jsxs("div",{className:`\r
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
          gap-[0.195rem] \r
          mobile:gap-[0.260rem] \r
          sMobile:gap-[0.416rem] \r
          mMobile:gap-[0.5rem]\r
          sLaptop:gap-[0.333rem] \r
          mLaptop:gap-[0.417rem] \r
          desktop:gap-[0.5rem] \r
          largeDesktop:gap-[0.625rem]\r
          `,children:[x.jsx("h1",{className:"sectionCSS",children:"MY TECHNICAL SKILLS"}),x.jsx("p",{className:`\r
            leading-none\r
            font-bold\r
            text-PrimaryWhite\r
\r
            text-[0.781rem]\r
            mobile:text-[1.042rem]\r
            sMobile:text-[1.667rem]\r
            mMobile:text-[2rem]\r
            sLaptop:text-[1.759rem]\r
            mLaptop:text-[2.199rem]\r
            desktop:text-[2.64rem]\r
            largeDesktop:text-[3.3rem]\r
\r
            textShadowTiny\r
            mobile:textShadowmobile\r
            sMobile:textShadowsMobile\r
            mMobile:textShadowmMobile\r
            sLaptop:textShadowSmall\r
            mLaptop:textShadowMedium\r
            desktop:textShadowDesktop\r
            largeDesktop:textShadowLarge\r
            `,children:"Check out some of my strongest technical skills!"})]}),s==="failed"||s==="loading"?u:x.jsxs("div",{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"500",className:`\r
            sLaptop:flex \r
            flex-col \r
            w-full \r
            max-w-[1920px] \r
            extra:mx-auto`,children:[x.jsx("div",{className:`\r
              overflow-x-auto\r
              no-scrollbar\r
\r
              mt-[0.977rem]\r
              mobile:mt-[1.283ren]\r
              sMobile:mt-[2.083rem]\r
              mMobile:mt-[2.5rem]\r
              sLaptop:mt-[1.333rem]\r
              mLaptop:mt-[1.666rem]\r
              desktop:mt-[2rem]\r
              largeDesktop:mt-[2.5rem]\r
\r
              py-[0.608rem]\r
              mobile:py-[0.81rem]\r
              sMobile:py-[1.296rem]\r
              mMobile:py-[1.555rem]\r
              sLaptop:py-[0.890rem]\r
              mLaptop:py-[1.113rem]\r
              desktop:py-[1.336rem]\r
              largeDesktop:py-[1.670rem]\r
\r
              px-[9.80%]\r
              sLaptop:px-[1.82%]\r
\r
              gap-[0.729rem]\r
              mobile:gap-[0.972rem]\r
              sMobile:gap-[1.555rem]\r
              mMobile:gap-[1.866rem]\r
\r
              sLaptop:gap-0\r
              w-full \r
              flex flex-row\r
              sLaptop:justify-between\r
              relative\r
              `,children:u}),x.jsx("div",{className:"w-full hidden sLaptop:block relative sLaptop:min-h-[1.716rem] mLaptop:min-h-[2.145rem] desktop:min-h-[2.574rem] largeDesktop:min-h-[3.218rem]",children:x.jsx("img",{ref:t,className:`
                transition-[left]
                duration-150
                absolute
                sLaptop:h-[1.716rem] 
                mLaptop:h-[2.145rem] 
                desktop:h-[2.574rem] 
                largeDesktop:h-[3.218rem]
                left-[03.20%]
                `,src:n,alt:"pointerSVG"})}),x.jsx(TL,{selectSkill:i[l]})]})]}),x.jsx("img",{className:`\r
        absolute \r
        z-[0]\r
        top-0\r
        right-0 \r
        w-[92.5%]\r
        sLaptop:hidden\r
        `,src:o,alt:"Mobile square"}),x.jsx("img",{className:`\r
        hidden\r
        sLaptop:block\r
        absolute \r
        z-[0]\r
        sLaptop:h-[56.71rem]\r
        mLaptop:h-[70.62rem] \r
        desktop:h-[85.6rem]\r
        largeDesktop:h-[107rem] \r
        sLaptop:right-[-1.06rem] sLaptop:top-[-10.6rem]\r
        mLaptop:right-[-1.32rem] mLaptop:top-[-13.2rem]\r
        desktop:right-[-1.6rem] desktop:top-[-16rem]\r
        largeDesktop:right-[-2rem] largeDesktop:top-[-20rem]`,src:r,alt:""})]})}),jL=k.memo(()=>{const e=k.useContext(Ce),{pageRef:t}=e;return x.jsxs("div",{ref:r=>{r&&(t.current.AboutMe=r)},id:"AboutMe",className:`
    relative 
    w-full`,children:[x.jsx(PL,{}),x.jsx(RL,{})]})}),NL=k.memo(()=>{const e=qe(),t=W(ii),r=k.useContext(Ce),{tabRef:n,backgroundSelectRef:o}=r,i=["Programming","Art","UI / UX"],s=(a,l)=>{e(j2(a));const u=n.current[l].offsetLeft;o.current.style.left=`${u}px`};return x.jsxs("div",{className:`\r
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
    sLaptop:pb-[0.450rem]\r
    mLaptop:pb-[0.562rem]\r
    desktop:pb-[0.675rem]\r
    largeDesktop:pb-[0.844rem]\r
\r
    sLaptop:pl-[1.333rem]\r
    mLaptop:pl-[1.666rem]\r
    desktop:pl-[2rem]\r
    largeDesktop:pl-[3.125rem]\r
    `,children:[x.jsx("div",{ref:o,className:`\r
  \r
    mockBrowserSelected\r
    `}),i.map((a,l)=>x.jsxs(k.Fragment,{children:[x.jsxs("p",{ref:u=>n.current[l]=u,className:`
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
        sLaptop:text-[0.899rem]
        mLaptop:text-[1.124rem]
        desktop:text-[1.349rem]
        largeDesktop:text-[1.687rem]

        py-[0.664rem]
        mobile:py-[0.885rem]
        sMobile:py-[1.416rem]
        mMobile:py-[1.7rem]
        sLaptop:py-[0.299rem]
        mLaptop:py-[0.374rem]
        desktop:py-[0.449rem]
        largeDesktop:py-[0.562rem]
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
            `})]},l))]})}),_L=k.memo(()=>{const e=k.useContext(Ce),{minimize:t,fullscreen:r,close:n}=e,o=[t,r,n];return x.jsx("div",{className:`\r
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
            sLaptop:scale-90\r
            hover:opacity-75\r
            hover:cursor-pointer\r
            py-auto\r
            sLaptop:w-[1.094rem]\r
            mLaptop:w-[1.367rem]\r
            desktop:w-[1.64rem]\r
            largeDesktop:w-[2.051rem]\r
            `,src:i,alt:"x"},s))})}),Zc=k.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),ha=k.createContext({}),ga=k.createContext(null),ed=typeof document<"u",td=ed?k.useLayoutEffect:k.useEffect,sy=k.createContext({strict:!1}),rd=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),AL="framerAppearId",ay="data-"+rd(AL),OL={skipAnimations:!1,useManualTiming:!1};class kf{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const r=this.order.indexOf(t);r!==-1&&(this.order.splice(r,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function FL(e){let t=new kf,r=new kf,n=0,o=!1,i=!1;const s=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const d=c&&o,p=d?t:r;return u&&s.add(l),p.add(l)&&d&&o&&(n=t.order.length),l},cancel:l=>{r.remove(l),s.delete(l)},process:l=>{if(o){i=!0;return}if(o=!0,[t,r]=[r,t],r.clear(),n=t.order.length,n)for(let u=0;u<n;u++){const c=t.order[u];s.has(c)&&(a.schedule(c),e()),c(l)}o=!1,i&&(i=!1,a.process(l))}};return a}const Ri=["read","resolveKeyframes","update","preRender","render","postRender"],VL=40;function ly(e,t){let r=!1,n=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=Ri.reduce((d,p)=>(d[p]=FL(()=>r=!0),d),{}),s=d=>{i[d].process(o)},a=()=>{const d=performance.now();r=!1,o.delta=n?1e3/60:Math.max(Math.min(d-o.timestamp,VL),1),o.timestamp=d,o.isProcessing=!0,Ri.forEach(s),o.isProcessing=!1,r&&t&&(n=!1,e(a))},l=()=>{r=!0,n=!0,o.isProcessing||e(a)};return{schedule:Ri.reduce((d,p)=>{const y=i[p];return d[p]=(m,v=!1,w=!1)=>(r||l(),y.schedule(m,v,w)),d},{}),cancel:d=>Ri.forEach(p=>i[p].cancel(d)),state:o,steps:i}}const{schedule:nd,cancel:qC}=ly(queueMicrotask,!1);function BL(e,t,r,n){const{visualElement:o}=k.useContext(ha),i=k.useContext(sy),s=k.useContext(ga),a=k.useContext(Zc).reducedMotion,l=k.useRef();n=n||i.renderer,!l.current&&n&&(l.current=n(e,{visualState:t,parent:o,props:r,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;k.useInsertionEffect(()=>{u&&u.update(r,s)});const c=k.useRef(!!(r[ay]&&!window.HandoffComplete));return td(()=>{u&&(nd.postRender(u.render),c.current&&u.animationState&&u.animationState.animateChanges())}),k.useEffect(()=>{u&&(u.updateFeatures(),!c.current&&u.animationState&&u.animationState.animateChanges(),c.current&&(c.current=!1,window.HandoffComplete=!0))}),u}function wn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function IL(e,t,r){return k.useCallback(n=>{n&&e.mount&&e.mount(n),t&&(n?t.mount(n):t.unmount()),r&&(typeof r=="function"?r(n):wn(r)&&(r.current=n))},[t])}function Go(e){return typeof e=="string"||Array.isArray(e)}function ya(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const od=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],id=["initial",...od];function va(e){return ya(e.animate)||id.some(t=>Go(e[t]))}function uy(e){return!!(va(e)||e.variants)}function zL(e,t){if(va(e)){const{initial:r,animate:n}=e;return{initial:r===!1||Go(r)?r:void 0,animate:Go(n)?n:void 0}}return e.inherit!==!1?t:{}}function UL(e){const{initial:t,animate:r}=zL(e,k.useContext(ha));return k.useMemo(()=>({initial:t,animate:r}),[bf(t),bf(r)])}function bf(e){return Array.isArray(e)?e.join(" "):e}const Sf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Yo={};for(const e in Sf)Yo[e]={isEnabled:t=>Sf[e].some(r=>!!t[r])};function $L(e){for(const t in e)Yo[t]={...Yo[t],...e[t]}}const sd=k.createContext({}),cy=k.createContext({}),WL=Symbol.for("motionComponentSymbol");function HL({preloadedFeatures:e,createVisualElement:t,useRender:r,useVisualState:n,Component:o}){e&&$L(e);function i(a,l){let u;const c={...k.useContext(Zc),...a,layoutId:KL(a)},{isStatic:d}=c,p=UL(a),y=n(a,d);if(!d&&ed){p.visualElement=BL(o,y,c,t);const m=k.useContext(cy),v=k.useContext(sy).strict;p.visualElement&&(u=p.visualElement.loadFeatures(c,v,e,m))}return x.jsxs(ha.Provider,{value:p,children:[u&&p.visualElement?x.jsx(u,{visualElement:p.visualElement,...c}):null,r(o,a,IL(y,p.visualElement,l),y,d,p.visualElement)]})}const s=k.forwardRef(i);return s[WL]=o,s}function KL({layoutId:e}){const t=k.useContext(sd).id;return t&&e!==void 0?t+"-"+e:e}function GL(e){function t(n,o={}){return HL(e(n,o))}if(typeof Proxy>"u")return t;const r=new Map;return new Proxy(t,{get:(n,o)=>(r.has(o)||r.set(o,t(o)),r.get(o))})}const YL=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ad(e){return typeof e!="string"||e.includes("-")?!1:!!(YL.indexOf(e)>-1||/[A-Z]/u.test(e))}const _s={};function qL(e){Object.assign(_s,e)}const ai=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],nn=new Set(ai);function dy(e,{layout:t,layoutId:r}){return nn.has(e)||e.startsWith("origin")||(t||r!==void 0)&&(!!_s[e]||e==="opacity")}const Ne=e=>!!(e&&e.getVelocity),QL={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},XL=ai.length;function JL(e,{enableHardwareAcceleration:t=!0,allowTransformNone:r=!0},n,o){let i="";for(let s=0;s<XL;s++){const a=ai[s];if(e[a]!==void 0){const l=QL[a]||a;i+=`${l}(${e[a]}) `}}return t&&!e.z&&(i+="translateZ(0)"),i=i.trim(),o?i=o(e,n?"":i):r&&n&&(i="none"),i}const py=e=>t=>typeof t=="string"&&t.startsWith(e),fy=py("--"),ZL=py("var(--"),ld=e=>ZL(e)?e3.test(e.split("/*")[0].trim()):!1,e3=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,t3=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Mr=(e,t,r)=>r>t?t:r<e?e:r,Hn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ko={...Hn,transform:e=>Mr(0,1,e)},ji={...Hn,default:1},bo=e=>Math.round(e*1e5)/1e5,ud=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,r3=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,n3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function li(e){return typeof e=="string"}const ui=e=>({test:t=>li(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),rr=ui("deg"),Dt=ui("%"),A=ui("px"),o3=ui("vh"),i3=ui("vw"),Lf={...Dt,parse:e=>Dt.parse(e)/100,transform:e=>Dt.transform(e*100)},Mf={...Hn,transform:Math.round},my={borderWidth:A,borderTopWidth:A,borderRightWidth:A,borderBottomWidth:A,borderLeftWidth:A,borderRadius:A,radius:A,borderTopLeftRadius:A,borderTopRightRadius:A,borderBottomRightRadius:A,borderBottomLeftRadius:A,width:A,maxWidth:A,height:A,maxHeight:A,size:A,top:A,right:A,bottom:A,left:A,padding:A,paddingTop:A,paddingRight:A,paddingBottom:A,paddingLeft:A,margin:A,marginTop:A,marginRight:A,marginBottom:A,marginLeft:A,rotate:rr,rotateX:rr,rotateY:rr,rotateZ:rr,scale:ji,scaleX:ji,scaleY:ji,scaleZ:ji,skew:rr,skewX:rr,skewY:rr,distance:A,translateX:A,translateY:A,translateZ:A,x:A,y:A,z:A,perspective:A,transformPerspective:A,opacity:ko,originX:Lf,originY:Lf,originZ:A,zIndex:Mf,backgroundPositionX:A,backgroundPositionY:A,fillOpacity:ko,strokeOpacity:ko,numOctaves:Mf};function cd(e,t,r,n){const{style:o,vars:i,transform:s,transformOrigin:a}=e;let l=!1,u=!1,c=!0;for(const d in t){const p=t[d];if(fy(d)){i[d]=p;continue}const y=my[d],m=t3(p,y);if(nn.has(d)){if(l=!0,s[d]=m,!c)continue;p!==(y.default||0)&&(c=!1)}else d.startsWith("origin")?(u=!0,a[d]=m):o[d]=m}if(t.transform||(l||n?o.transform=JL(e.transform,r,c,n):o.transform&&(o.transform="none")),u){const{originX:d="50%",originY:p="50%",originZ:y=0}=a;o.transformOrigin=`${d} ${p} ${y}`}}const dd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function hy(e,t,r){for(const n in t)!Ne(t[n])&&!dy(n,r)&&(e[n]=t[n])}function s3({transformTemplate:e},t,r){return k.useMemo(()=>{const n=dd();return cd(n,t,{enableHardwareAcceleration:!r},e),Object.assign({},n.vars,n.style)},[t])}function a3(e,t,r){const n=e.style||{},o={};return hy(o,n,e),Object.assign(o,s3(e,t,r)),o}function l3(e,t,r){const n={},o=a3(e,t,r);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=o,n}const u3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function As(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||u3.has(e)}let gy=e=>!As(e);function c3(e){e&&(gy=t=>t.startsWith("on")?!As(t):e(t))}try{c3(require("@emotion/is-prop-valid").default)}catch{}function d3(e,t,r){const n={};for(const o in e)o==="values"&&typeof e.values=="object"||(gy(o)||r===!0&&As(o)||!t&&!As(o)||e.draggable&&o.startsWith("onDrag"))&&(n[o]=e[o]);return n}function Ef(e,t,r){return typeof e=="string"?e:A.transform(t+r*e)}function p3(e,t,r){const n=Ef(t,e.x,e.width),o=Ef(r,e.y,e.height);return`${n} ${o}`}const f3={offset:"stroke-dashoffset",array:"stroke-dasharray"},m3={offset:"strokeDashoffset",array:"strokeDasharray"};function h3(e,t,r=1,n=0,o=!0){e.pathLength=1;const i=o?f3:m3;e[i.offset]=A.transform(-n);const s=A.transform(t),a=A.transform(r);e[i.array]=`${s} ${a}`}function pd(e,{attrX:t,attrY:r,attrScale:n,originX:o,originY:i,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},c,d,p){if(cd(e,u,c,p),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:m,dimensions:v}=e;y.transform&&(v&&(m.transform=y.transform),delete y.transform),v&&(o!==void 0||i!==void 0||m.transform)&&(m.transformOrigin=p3(v,o!==void 0?o:.5,i!==void 0?i:.5)),t!==void 0&&(y.x=t),r!==void 0&&(y.y=r),n!==void 0&&(y.scale=n),s!==void 0&&h3(y,s,a,l,!1)}const yy=()=>({...dd(),attrs:{}}),fd=e=>typeof e=="string"&&e.toLowerCase()==="svg";function g3(e,t,r,n){const o=k.useMemo(()=>{const i=yy();return pd(i,t,{enableHardwareAcceleration:!1},fd(n),e.transformTemplate),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};hy(i,e.style,e),o.style={...i,...o.style}}return o}function y3(e=!1){return(r,n,o,{latestValues:i},s)=>{const l=(ad(r)?g3:l3)(n,i,s,r),u=d3(n,typeof r=="string",e),c=r!==k.Fragment?{...u,...l,ref:o}:{},{children:d}=n,p=k.useMemo(()=>Ne(d)?d.get():d,[d]);return k.createElement(r,{...c,children:p})}}function vy(e,{style:t,vars:r},n,o){Object.assign(e.style,t,o&&o.getProjectionStyles(n));for(const i in r)e.style.setProperty(i,r[i])}const xy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function wy(e,t,r,n){vy(e,t,void 0,n);for(const o in t.attrs)e.setAttribute(xy.has(o)?o:rd(o),t.attrs[o])}function md(e,t,r){var n;const{style:o}=e,i={};for(const s in o)(Ne(o[s])||t.style&&Ne(t.style[s])||dy(s,e)||((n=r==null?void 0:r.getValue(s))===null||n===void 0?void 0:n.liveStyle)!==void 0)&&(i[s]=o[s]);return i}function ky(e,t,r){const n=md(e,t,r);for(const o in e)if(Ne(e[o])||Ne(t[o])){const i=ai.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;n[i]=e[o]}return n}function hd(e,t,r,n={},o={}){return typeof t=="function"&&(t=t(r!==void 0?r:e.custom,n,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(r!==void 0?r:e.custom,n,o)),t}function by(e){const t=k.useRef(null);return t.current===null&&(t.current=e()),t.current}const Pu=e=>Array.isArray(e),v3=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),x3=e=>Pu(e)?e[e.length-1]||0:e;function Qi(e){const t=Ne(e)?e.get():e;return v3(t)?t.toValue():t}function w3({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:r},n,o,i){const s={latestValues:k3(n,o,i,e),renderState:t()};return r&&(s.mount=a=>r(n,a,s)),s}const Sy=e=>(t,r)=>{const n=k.useContext(ha),o=k.useContext(ga),i=()=>w3(e,t,n,o);return r?i():by(i)};function k3(e,t,r,n){const o={},i=n(e,{});for(const p in i)o[p]=Qi(i[p]);let{initial:s,animate:a}=e;const l=va(e),u=uy(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let c=r?r.initial===!1:!1;c=c||s===!1;const d=c?a:s;return d&&typeof d!="boolean"&&!ya(d)&&(Array.isArray(d)?d:[d]).forEach(y=>{const m=hd(e,y);if(!m)return;const{transitionEnd:v,transition:w,...h}=m;for(const f in h){let g=h[f];if(Array.isArray(g)){const b=c?g.length-1:0;g=g[b]}g!==null&&(o[f]=g)}for(const f in v)o[f]=v[f]}),o}const _e=e=>e,{schedule:we,cancel:Er,state:Se,steps:sl}=ly(typeof requestAnimationFrame<"u"?requestAnimationFrame:_e,!0),b3={useVisualState:Sy({scrapeMotionValuesFromProps:ky,createRenderState:yy,onMount:(e,t,{renderState:r,latestValues:n})=>{we.read(()=>{try{r.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{r.dimensions={x:0,y:0,width:0,height:0}}}),we.render(()=>{pd(r,n,{enableHardwareAcceleration:!1},fd(t.tagName),e.transformTemplate),wy(t,r)})}})},S3={useVisualState:Sy({scrapeMotionValuesFromProps:md,createRenderState:dd})};function L3(e,{forwardMotionProps:t=!1},r,n){return{...ad(e)?b3:S3,preloadedFeatures:r,useRender:y3(t),createVisualElement:n,Component:e}}function Ft(e,t,r,n={passive:!0}){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r)}const Ly=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function xa(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const M3=e=>t=>Ly(t)&&e(t,xa(t));function zt(e,t,r,n){return Ft(e,t,M3(r),n)}const E3=(e,t)=>r=>t(e(r)),Ut=(...e)=>e.reduce(E3);function My(e){let t=null;return()=>{const r=()=>{t=null};return t===null?(t=e,r):!1}}const Cf=My("dragHorizontal"),Pf=My("dragVertical");function Ey(e){let t=!1;if(e==="y")t=Pf();else if(e==="x")t=Cf();else{const r=Cf(),n=Pf();r&&n?t=()=>{r(),n()}:(r&&r(),n&&n())}return t}function Cy(){const e=Ey(!0);return e?(e(),!1):!0}class jr{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Tf(e,t){const r=t?"pointerenter":"pointerleave",n=t?"onHoverStart":"onHoverEnd",o=(i,s)=>{if(i.pointerType==="touch"||Cy())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t);const l=a[n];l&&l(i,s)};return zt(e.current,r,o,{passive:!e.getProps()[n]})}class C3 extends jr{mount(){this.unmount=Ut(Tf(this.node,!0),Tf(this.node,!1))}unmount(){}}class P3 extends jr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ut(Ft(this.node.current,"focus",()=>this.onFocus()),Ft(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Py=(e,t)=>t?e===t?!0:Py(e,t.parentElement):!1;function al(e,t){if(!t)return;const r=new PointerEvent("pointer"+e);t(r,xa(r))}class T3 extends jr{constructor(){super(...arguments),this.removeStartListeners=_e,this.removeEndListeners=_e,this.removeAccessibleListeners=_e,this.startPointerPress=(t,r)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),i=zt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:d}=this.node.getProps();!d&&!Py(this.node.current,a.target)?c&&c(a,l):u&&u(a,l)},{passive:!(n.onTap||n.onPointerUp)}),s=zt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=Ut(i,s),this.startPress(t,r)},this.startAccessiblePress=()=>{const t=i=>{if(i.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||al("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&c(l,u)})};this.removeEndListeners(),this.removeEndListeners=Ft(this.node.current,"keyup",s),al("down",(a,l)=>{this.startPress(a,l)})},r=Ft(this.node.current,"keydown",t),n=()=>{this.isPressing&&al("cancel",(i,s)=>this.cancelPress(i,s))},o=Ft(this.node.current,"blur",n);this.removeAccessibleListeners=Ut(r,o)}}startPress(t,r){this.isPressing=!0;const{onTapStart:n,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&n(t,r)}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Cy()}cancelPress(t,r){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&n(t,r)}mount(){const t=this.node.getProps(),r=zt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),n=Ft(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Ut(r,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Tu=new WeakMap,ll=new WeakMap,D3=e=>{const t=Tu.get(e.target);t&&t(e)},R3=e=>{e.forEach(D3)};function j3({root:e,...t}){const r=e||document;ll.has(r)||ll.set(r,{});const n=ll.get(r),o=JSON.stringify(t);return n[o]||(n[o]=new IntersectionObserver(R3,{root:e,...t})),n[o]}function N3(e,t,r){const n=j3(t);return Tu.set(e,r),n.observe(e),()=>{Tu.delete(e),n.unobserve(e)}}const _3={some:0,all:1};class A3 extends jr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:r,margin:n,amount:o="some",once:i}=t,s={root:r?r.current:void 0,rootMargin:n,threshold:typeof o=="number"?o:_3[o]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,i&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),p=u?c:d;p&&p(l)};return N3(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:r}=this.node;["amount","margin","root"].some(O3(t,r))&&this.startObserver()}unmount(){}}function O3({viewport:e={}},{viewport:t={}}={}){return r=>e[r]!==t[r]}const F3={inView:{Feature:A3},tap:{Feature:T3},focus:{Feature:P3},hover:{Feature:C3}};function Ty(e,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==e.length)return!1;for(let n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function V3(e){const t={};return e.values.forEach((r,n)=>t[n]=r.get()),t}function B3(e){const t={};return e.values.forEach((r,n)=>t[n]=r.getVelocity()),t}function wa(e,t,r){const n=e.getProps();return hd(n,t,r!==void 0?r:n.custom,V3(e),B3(e))}const wr=e=>e*1e3,$t=e=>e/1e3,I3={type:"spring",stiffness:500,damping:25,restSpeed:10},z3=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),U3={type:"keyframes",duration:.8},$3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},W3=(e,{keyframes:t})=>t.length>2?U3:nn.has(e)?e.startsWith("scale")?z3(t[1]):I3:$3;function H3({when:e,delay:t,delayChildren:r,staggerChildren:n,staggerDirection:o,repeat:i,repeatType:s,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function gd(e,t){return e[t]||e.default||e}const K3=e=>e!==null;function ka(e,{repeat:t,repeatType:r="loop"},n){const o=e.filter(K3),i=t&&r!=="loop"&&t%2===1?0:o.length-1;return!i||n===void 0?o[i]:n}let Xi;function G3(){Xi=void 0}const kr={now:()=>(Xi===void 0&&kr.set(Se.isProcessing||OL.useManualTiming?Se.timestamp:performance.now()),Xi),set:e=>{Xi=e,queueMicrotask(G3)}},Dy=e=>/^0[^.\s]+$/u.test(e);function Y3(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Dy(e):!0}let Ry=_e;const jy=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),q3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Q3(e){const t=q3.exec(e);if(!t)return[,];const[,r,n,o]=t;return[`--${r??n}`,o]}function Ny(e,t,r=1){const[n,o]=Q3(e);if(!n)return;const i=window.getComputedStyle(t).getPropertyValue(n);if(i){const s=i.trim();return jy(s)?parseFloat(s):s}return ld(o)?Ny(o,t,r+1):o}const X3=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Df=e=>e===Hn||e===A,Rf=(e,t)=>parseFloat(e.split(", ")[t]),jf=(e,t)=>(r,{transform:n})=>{if(n==="none"||!n)return 0;const o=n.match(/^matrix3d\((.+)\)$/u);if(o)return Rf(o[1],t);{const i=n.match(/^matrix\((.+)\)$/u);return i?Rf(i[1],e):0}},J3=new Set(["x","y","z"]),Z3=ai.filter(e=>!J3.has(e));function e5(e){const t=[];return Z3.forEach(r=>{const n=e.getValue(r);n!==void 0&&(t.push([r,n.get()]),n.set(r.startsWith("scale")?1:0))}),t}const Bn={width:({x:e},{paddingLeft:t="0",paddingRight:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),height:({y:e},{paddingTop:t="0",paddingBottom:r="0"})=>e.max-e.min-parseFloat(t)-parseFloat(r),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:jf(4,13),y:jf(5,14)};Bn.translateX=Bn.x;Bn.translateY=Bn.y;const _y=e=>t=>t.test(e),t5={test:e=>e==="auto",parse:e=>e},Ay=[Hn,A,Dt,rr,i3,o3,t5],Nf=e=>Ay.find(_y(e)),Gr=new Set;let Du=!1,Ru=!1;function Oy(){if(Ru){const e=Array.from(Gr).filter(n=>n.needsMeasurement),t=new Set(e.map(n=>n.element)),r=new Map;t.forEach(n=>{const o=e5(n);o.length&&(r.set(n,o),n.render())}),e.forEach(n=>n.measureInitialState()),t.forEach(n=>{n.render();const o=r.get(n);o&&o.forEach(([i,s])=>{var a;(a=n.getValue(i))===null||a===void 0||a.set(s)})}),e.forEach(n=>n.measureEndState()),e.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}Ru=!1,Du=!1,Gr.forEach(e=>e.complete()),Gr.clear()}function Fy(){Gr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ru=!0)})}function r5(){Fy(),Oy()}class yd{constructor(t,r,n,o,i,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=r,this.name=n,this.motionValue=o,this.element=i,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Gr.add(this),Du||(Du=!0,we.read(Fy),we.resolveKeyframes(Oy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:r,element:n,motionValue:o}=this;for(let i=0;i<t.length;i++)if(t[i]===null)if(i===0){const s=o==null?void 0:o.get(),a=t[t.length-1];if(s!==void 0)t[0]=s;else if(n&&r){const l=n.readValue(r,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),o&&s===void 0&&o.set(t[0])}else t[i]=t[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Gr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Gr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const vd=(e,t)=>r=>!!(li(r)&&n3.test(r)&&r.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(r,t)),Vy=(e,t,r)=>n=>{if(!li(n))return n;const[o,i,s,a]=n.match(ud);return{[e]:parseFloat(o),[t]:parseFloat(i),[r]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},n5=e=>Mr(0,255,e),ul={...Hn,transform:e=>Math.round(n5(e))},$r={test:vd("rgb","red"),parse:Vy("red","green","blue"),transform:({red:e,green:t,blue:r,alpha:n=1})=>"rgba("+ul.transform(e)+", "+ul.transform(t)+", "+ul.transform(r)+", "+bo(ko.transform(n))+")"};function o5(e){let t="",r="",n="",o="";return e.length>5?(t=e.substring(1,3),r=e.substring(3,5),n=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),r=e.substring(2,3),n=e.substring(3,4),o=e.substring(4,5),t+=t,r+=r,n+=n,o+=o),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(n,16),alpha:o?parseInt(o,16)/255:1}}const ju={test:vd("#"),parse:o5,transform:$r.transform},kn={test:vd("hsl","hue"),parse:Vy("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:r,alpha:n=1})=>"hsla("+Math.round(e)+", "+Dt.transform(bo(t))+", "+Dt.transform(bo(r))+", "+bo(ko.transform(n))+")"},Re={test:e=>$r.test(e)||ju.test(e)||kn.test(e),parse:e=>$r.test(e)?$r.parse(e):kn.test(e)?kn.parse(e):ju.parse(e),transform:e=>li(e)?e:e.hasOwnProperty("red")?$r.transform(e):kn.transform(e)};function i5(e){var t,r;return isNaN(e)&&li(e)&&(((t=e.match(ud))===null||t===void 0?void 0:t.length)||0)+(((r=e.match(r3))===null||r===void 0?void 0:r.length)||0)>0}const By="number",Iy="color",s5="var",a5="var(",_f="${}",l5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Os(e){const t=e.toString(),r=[],n={color:[],number:[],var:[]},o=[];let i=0;const a=t.replace(l5,l=>(Re.test(l)?(n.color.push(i),o.push(Iy),r.push(Re.parse(l))):l.startsWith(a5)?(n.var.push(i),o.push(s5),r.push(l)):(n.number.push(i),o.push(By),r.push(parseFloat(l))),++i,_f)).split(_f);return{values:r,split:a,indexes:n,types:o}}function zy(e){return Os(e).values}function Uy(e){const{split:t,types:r}=Os(e),n=t.length;return o=>{let i="";for(let s=0;s<n;s++)if(i+=t[s],o[s]!==void 0){const a=r[s];a===By?i+=bo(o[s]):a===Iy?i+=Re.transform(o[s]):i+=o[s]}return i}}const u5=e=>typeof e=="number"?0:e;function c5(e){const t=zy(e);return Uy(e)(t.map(u5))}const Cr={test:i5,parse:zy,createTransformer:Uy,getAnimatableNone:c5},d5=new Set(["brightness","contrast","saturate","opacity"]);function p5(e){const[t,r]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[n]=r.match(ud)||[];if(!n)return e;const o=r.replace(n,"");let i=d5.has(t)?1:0;return n!==r&&(i*=100),t+"("+i+o+")"}const f5=/\b([a-z-]*)\(.*?\)/gu,Nu={...Cr,getAnimatableNone:e=>{const t=e.match(f5);return t?t.map(p5).join(" "):e}},m5={...my,color:Re,backgroundColor:Re,outlineColor:Re,fill:Re,stroke:Re,borderColor:Re,borderTopColor:Re,borderRightColor:Re,borderBottomColor:Re,borderLeftColor:Re,filter:Nu,WebkitFilter:Nu},xd=e=>m5[e];function $y(e,t){let r=xd(e);return r!==Nu&&(r=Cr),r.getAnimatableNone?r.getAnimatableNone(t):void 0}function h5(e,t,r){let n=0,o;for(;n<e.length&&!o;)typeof e[n]=="string"&&e[n]!=="none"&&e[n]!=="0"&&(o=e[n]),n++;if(o&&r)for(const i of t)e[i]=$y(r,o)}class Wy extends yd{constructor(t,r,n,o){super(t,r,n,o,o==null?void 0:o.owner,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:r,name:n}=this;if(!r.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){const u=t[l];if(typeof u=="string"&&ld(u)){const c=Ny(u,r.current);c!==void 0&&(t[l]=c),l===t.length-1&&(this.finalKeyframe=u)}}if(!X3.has(n)||t.length!==2)return this.resolveNoneKeyframes();const[o,i]=t,s=Nf(o),a=Nf(i);if(s!==a)if(Df(s)&&Df(a))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:r}=this,n=[];for(let o=0;o<t.length;o++)Y3(t[o])&&n.push(o);n.length&&h5(t,n,r)}measureInitialState(){const{element:t,unresolvedKeyframes:r,name:n}=this;if(!t.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Bn[n](t.measureViewportBox(),window.getComputedStyle(t.current)),r[0]=this.measuredOrigin;const o=r[r.length-1];o!==void 0&&t.getValue(n,o).jump(o,!1)}measureEndState(){var t;const{element:r,name:n,unresolvedKeyframes:o}=this;if(!r.current)return;const i=r.getValue(n);i&&i.jump(this.measuredOrigin,!1);const s=o.length-1,a=o[s];o[s]=Bn[n](r.measureViewportBox(),window.getComputedStyle(r.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{r.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function g5(e){let t;return()=>(t===void 0&&(t=e()),t)}const Af=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Cr.test(e)||e==="0")&&!e.startsWith("url("));function y5(e){const t=e[0];if(e.length===1)return!0;for(let r=0;r<e.length;r++)if(e[r]!==t)return!0}function v5(e,t,r,n){const o=e[0];if(o===null)return!1;const i=e[e.length-1],s=Af(o,t),a=Af(i,t);return!s||!a?!1:y5(e)||r==="spring"&&n}class Hy{constructor({autoplay:t=!0,delay:r=0,type:n="keyframes",repeat:o=0,repeatDelay:i=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.options={autoplay:t,delay:r,type:n,repeat:o,repeatDelay:i,repeatType:s,...a},this.updateFinishedPromise()}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&r5(),this._resolved}onKeyframesResolved(t,r){this.hasAttemptedResolve=!0;const{name:n,type:o,velocity:i,delay:s,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!v5(t,n,o,i))if(s)this.options.duration=0;else{l==null||l(ka(t,this.options,r)),a==null||a(),this.resolveFinishedPromise();return}const c=this.initPlayback(t,r);c!==!1&&(this._resolved={keyframes:t,finalKeyframe:r,...c},this.onPostResolved())}onPostResolved(){}then(t,r){return this.currentFinishedPromise.then(t,r)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function Ky(e,t){return t?e*(1e3/t):0}const x5=5;function Gy(e,t,r){const n=Math.max(t-x5,0);return Ky(r-e(n),t-n)}const cl=.001,w5=.01,k5=10,b5=.05,S5=1;function L5({duration:e=800,bounce:t=.25,velocity:r=0,mass:n=1}){let o,i,s=1-t;s=Mr(b5,S5,s),e=Mr(w5,k5,$t(e)),s<1?(o=u=>{const c=u*s,d=c*e,p=c-r,y=_u(u,s),m=Math.exp(-d);return cl-p/y*m},i=u=>{const d=u*s*e,p=d*r+r,y=Math.pow(s,2)*Math.pow(u,2)*e,m=Math.exp(-d),v=_u(Math.pow(u,2),s);return(-o(u)+cl>0?-1:1)*((p-y)*m)/v}):(o=u=>{const c=Math.exp(-u*e),d=(u-r)*e+1;return-cl+c*d},i=u=>{const c=Math.exp(-u*e),d=(r-u)*(e*e);return c*d});const a=5/e,l=E5(o,i,a);if(e=wr(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*n;return{stiffness:u,damping:s*2*Math.sqrt(n*u),duration:e}}}const M5=12;function E5(e,t,r){let n=r;for(let o=1;o<M5;o++)n=n-e(n)/t(n);return n}function _u(e,t){return e*Math.sqrt(1-t*t)}const C5=["duration","bounce"],P5=["stiffness","damping","mass"];function Of(e,t){return t.some(r=>e[r]!==void 0)}function T5(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Of(e,P5)&&Of(e,C5)){const r=L5(e);t={...t,...r,mass:1},t.isResolvedFromDuration=!0}return t}function Yy({keyframes:e,restDelta:t,restSpeed:r,...n}){const o=e[0],i=e[e.length-1],s={done:!1,value:o},{stiffness:a,damping:l,mass:u,duration:c,velocity:d,isResolvedFromDuration:p}=T5({...n,velocity:-$t(n.velocity||0)}),y=d||0,m=l/(2*Math.sqrt(a*u)),v=i-o,w=$t(Math.sqrt(a/u)),h=Math.abs(v)<5;r||(r=h?.01:2),t||(t=h?.005:.5);let f;if(m<1){const g=_u(w,m);f=b=>{const L=Math.exp(-m*w*b);return i-L*((y+m*w*v)/g*Math.sin(g*b)+v*Math.cos(g*b))}}else if(m===1)f=g=>i-Math.exp(-w*g)*(v+(y+w*v)*g);else{const g=w*Math.sqrt(m*m-1);f=b=>{const L=Math.exp(-m*w*b),M=Math.min(g*b,300);return i-L*((y+m*w*v)*Math.sinh(M)+g*v*Math.cosh(M))/g}}return{calculatedDuration:p&&c||null,next:g=>{const b=f(g);if(p)s.done=g>=c;else{let L=y;g!==0&&(m<1?L=Gy(f,g,b):L=0);const M=Math.abs(L)<=r,P=Math.abs(i-b)<=t;s.done=M&&P}return s.value=s.done?i:b,s}}}function Ff({keyframes:e,velocity:t=0,power:r=.8,timeConstant:n=325,bounceDamping:o=10,bounceStiffness:i=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=e[0],p={done:!1,value:d},y=S=>a!==void 0&&S<a||l!==void 0&&S>l,m=S=>a===void 0?l:l===void 0||Math.abs(a-S)<Math.abs(l-S)?a:l;let v=r*t;const w=d+v,h=s===void 0?w:s(w);h!==w&&(v=h-d);const f=S=>-v*Math.exp(-S/n),g=S=>h+f(S),b=S=>{const _=f(S),N=g(S);p.done=Math.abs(_)<=u,p.value=p.done?h:N};let L,M;const P=S=>{y(p.value)&&(L=S,M=Yy({keyframes:[p.value,m(p.value)],velocity:Gy(g,S,p.value),damping:o,stiffness:i,restDelta:u,restSpeed:c}))};return P(0),{calculatedDuration:null,next:S=>{let _=!1;return!M&&L===void 0&&(_=!0,b(S),P(S)),L!==void 0&&S>=L?M.next(S-L):(!_&&b(S),p)}}}const qy=(e,t,r)=>(((1-3*r+3*t)*e+(3*r-6*t))*e+3*t)*e,D5=1e-7,R5=12;function j5(e,t,r,n,o){let i,s,a=0;do s=t+(r-t)/2,i=qy(s,n,o)-e,i>0?r=s:t=s;while(Math.abs(i)>D5&&++a<R5);return s}function ci(e,t,r,n){if(e===t&&r===n)return _e;const o=i=>j5(i,0,1,e,r);return i=>i===0||i===1?i:qy(o(i),t,n)}const N5=ci(.42,0,1,1),_5=ci(0,0,.58,1),Qy=ci(.42,0,.58,1),A5=e=>Array.isArray(e)&&typeof e[0]!="number",Xy=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Jy=e=>t=>1-e(1-t),wd=e=>1-Math.sin(Math.acos(e)),Zy=Jy(wd),O5=Xy(wd),ev=ci(.33,1.53,.69,.99),kd=Jy(ev),F5=Xy(kd),V5=e=>(e*=2)<1?.5*kd(e):.5*(2-Math.pow(2,-10*(e-1))),B5={linear:_e,easeIn:N5,easeInOut:Qy,easeOut:_5,circIn:wd,circInOut:O5,circOut:Zy,backIn:kd,backInOut:F5,backOut:ev,anticipate:V5},Vf=e=>{if(Array.isArray(e)){Ry(e.length===4);const[t,r,n,o]=e;return ci(t,r,n,o)}else if(typeof e=="string")return B5[e];return e},qo=(e,t,r)=>{const n=t-e;return n===0?1:(r-e)/n},re=(e,t,r)=>e+(t-e)*r;function dl(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function I5({hue:e,saturation:t,lightness:r,alpha:n}){e/=360,t/=100,r/=100;let o=0,i=0,s=0;if(!t)o=i=s=r;else{const a=r<.5?r*(1+t):r+t-r*t,l=2*r-a;o=dl(l,a,e+1/3),i=dl(l,a,e),s=dl(l,a,e-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(s*255),alpha:n}}const pl=(e,t,r)=>{const n=e*e,o=r*(t*t-n)+n;return o<0?0:Math.sqrt(o)},z5=[ju,$r,kn],U5=e=>z5.find(t=>t.test(e));function Bf(e){const t=U5(e);let r=t.parse(e);return t===kn&&(r=I5(r)),r}const If=(e,t)=>{const r=Bf(e),n=Bf(t),o={...r};return i=>(o.red=pl(r.red,n.red,i),o.green=pl(r.green,n.green,i),o.blue=pl(r.blue,n.blue,i),o.alpha=re(r.alpha,n.alpha,i),$r.transform(o))};function Au(e,t){return r=>r>0?t:e}function $5(e,t){return r=>re(e,t,r)}function bd(e){return typeof e=="number"?$5:typeof e=="string"?ld(e)?Au:Re.test(e)?If:K5:Array.isArray(e)?tv:typeof e=="object"?Re.test(e)?If:W5:Au}function tv(e,t){const r=[...e],n=r.length,o=e.map((i,s)=>bd(i)(i,t[s]));return i=>{for(let s=0;s<n;s++)r[s]=o[s](i);return r}}function W5(e,t){const r={...e,...t},n={};for(const o in r)e[o]!==void 0&&t[o]!==void 0&&(n[o]=bd(e[o])(e[o],t[o]));return o=>{for(const i in n)r[i]=n[i](o);return r}}function H5(e,t){var r;const n=[],o={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const s=t.types[i],a=e.indexes[s][o[s]],l=(r=e.values[a])!==null&&r!==void 0?r:0;n[i]=l,o[s]++}return n}const K5=(e,t)=>{const r=Cr.createTransformer(t),n=Os(e),o=Os(t);return n.indexes.var.length===o.indexes.var.length&&n.indexes.color.length===o.indexes.color.length&&n.indexes.number.length>=o.indexes.number.length?Ut(tv(H5(n,o),o.values),r):Au(e,t)};function rv(e,t,r){return typeof e=="number"&&typeof t=="number"&&typeof r=="number"?re(e,t,r):bd(e)(e,t)}function G5(e,t,r){const n=[],o=r||rv,i=e.length-1;for(let s=0;s<i;s++){let a=o(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||_e:t;a=Ut(l,a)}n.push(a)}return n}function Y5(e,t,{clamp:r=!0,ease:n,mixer:o}={}){const i=e.length;if(Ry(i===t.length),i===1)return()=>t[0];if(i===2&&e[0]===e[1])return()=>t[1];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=G5(t,n,o),a=s.length,l=u=>{let c=0;if(a>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=qo(e[c],e[c+1],u);return s[c](d)};return r?u=>l(Mr(e[0],e[i-1],u)):l}function q5(e,t){const r=e[e.length-1];for(let n=1;n<=t;n++){const o=qo(0,t,n);e.push(re(r,1,o))}}function Q5(e){const t=[0];return q5(t,e.length-1),t}function X5(e,t){return e.map(r=>r*t)}function J5(e,t){return e.map(()=>t||Qy).splice(0,e.length-1)}function Fs({duration:e=300,keyframes:t,times:r,ease:n="easeInOut"}){const o=A5(n)?n.map(Vf):Vf(n),i={done:!1,value:t[0]},s=X5(r&&r.length===t.length?r:Q5(t),e),a=Y5(s,t,{ease:Array.isArray(o)?o:J5(t,o)});return{calculatedDuration:e,next:l=>(i.value=a(l),i.done=l>=e,i)}}const zf=2e4;function Z5(e){let t=0;const r=50;let n=e.next(t);for(;!n.done&&t<zf;)t+=r,n=e.next(t);return t>=zf?1/0:t}const eM=e=>{const t=({timestamp:r})=>e(r);return{start:()=>we.update(t,!0),stop:()=>Er(t),now:()=>Se.isProcessing?Se.timestamp:kr.now()}},tM={decay:Ff,inertia:Ff,tween:Fs,keyframes:Fs,spring:Yy},rM=e=>e/100;class Sd extends Hy{constructor({KeyframeResolver:t=yd,...r}){super(r),this.holdTime=null,this.startTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:a}=this.options;a&&a()};const{name:n,motionValue:o,keyframes:i}=this.options,s=(a,l)=>this.onKeyframesResolved(a,l);n&&o&&o.owner?this.resolver=o.owner.resolveKeyframes(i,s,n,o):this.resolver=new t(i,s,n,o),this.resolver.scheduleResolve()}initPlayback(t){const{type:r="keyframes",repeat:n=0,repeatDelay:o=0,repeatType:i,velocity:s=0}=this.options,a=tM[r]||Fs;let l,u;a!==Fs&&typeof t[0]!="number"&&(l=Ut(rM,rv(t[0],t[1])),t=[0,100]);const c=a({...this.options,keyframes:t});i==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=Z5(c));const{calculatedDuration:d}=c,p=d+o,y=p*(n+1)-o;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:p,totalDuration:y}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,r=!1){const{resolved:n}=this;if(!n){const{keyframes:S}=this.options;return{done:!0,value:S[S.length-1]}}const{finalKeyframe:o,generator:i,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:d}=n;if(this.startTime===null)return i.next(0);const{delay:p,repeat:y,repeatType:m,repeatDelay:v,onUpdate:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-c/this.speed,this.startTime)),r?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const h=this.currentTime-p*(this.speed>=0?1:-1),f=this.speed>=0?h<0:h>c;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let g=this.currentTime,b=i;if(y){const S=Math.min(this.currentTime,c)/d;let _=Math.floor(S),N=S%1;!N&&S>=1&&(N=1),N===1&&_--,_=Math.min(_,y+1),!!(_%2)&&(m==="reverse"?(N=1-N,v&&(N-=v/d)):m==="mirror"&&(b=s)),g=Mr(0,1,N)*d}const L=f?{done:!1,value:l[0]}:b.next(g);a&&(L.value=a(L.value));let{done:M}=L;!f&&u!==null&&(M=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&M);return P&&o!==void 0&&(L.value=ka(l,this.options,o)),w&&w(L.value),P&&this.finish(),L}get duration(){const{resolved:t}=this;return t?$t(t.calculatedDuration):0}get time(){return $t(this.currentTime)}set time(t){t=wr(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const r=this.playbackSpeed!==t;this.playbackSpeed=t,r&&(this.time=$t(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=eM,onPlay:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),r&&r();const n=this.driver.now();this.holdTime!==null?this.startTime=n-this.holdTime:(!this.startTime||this.state==="finished")&&(this.startTime=n),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const nv=e=>Array.isArray(e)&&typeof e[0]=="number";function ov(e){return!!(!e||typeof e=="string"&&e in Ld||nv(e)||Array.isArray(e)&&e.every(ov))}const lo=([e,t,r,n])=>`cubic-bezier(${e}, ${t}, ${r}, ${n})`,Ld={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:lo([0,.65,.55,1]),circOut:lo([.55,0,1,.45]),backIn:lo([.31,.01,.66,-.59]),backOut:lo([.33,1.53,.69,.99])};function nM(e){return iv(e)||Ld.easeOut}function iv(e){if(e)return nv(e)?lo(e):Array.isArray(e)?e.map(nM):Ld[e]}function oM(e,t,r,{delay:n=0,duration:o=300,repeat:i=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:r};l&&(u.offset=l);const c=iv(a);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:n,duration:o,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:i+1,direction:s==="reverse"?"alternate":"normal"})}const iM=g5(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),sM=new Set(["opacity","clipPath","filter","transform"]),Vs=10,aM=2e4;function lM(e){return e.type==="spring"||e.name==="backgroundColor"||!ov(e.ease)}function uM(e,t){const r=new Sd({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let n={done:!1,value:e[0]};const o=[];let i=0;for(;!n.done&&i<aM;)n=r.sample(i),o.push(n.value),i+=Vs;return{times:void 0,keyframes:o,duration:i-Vs,ease:"linear"}}class Uf extends Hy{constructor(t){super(t);const{name:r,motionValue:n,keyframes:o}=this.options;this.resolver=new Wy(o,(i,s)=>this.onKeyframesResolved(i,s),r,n),this.resolver.scheduleResolve()}initPlayback(t,r){var n;let{duration:o=300,times:i,ease:s,type:a,motionValue:l,name:u}=this.options;if(!(!((n=l.owner)===null||n===void 0)&&n.current))return!1;if(lM(this.options)){const{onComplete:d,onUpdate:p,motionValue:y,...m}=this.options,v=uM(t,m);t=v.keyframes,t.length===1&&(t[1]=t[0]),o=v.duration,i=v.times,s=v.ease,a="keyframes"}const c=oM(l.owner.current,u,t,{...this.options,duration:o,times:i,ease:s});return c.startTime=kr.now(),this.pendingTimeline?(c.timeline=this.pendingTimeline,this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:d}=this.options;l.set(ka(t,this.options,r)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:o,times:i,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:r}=t;return $t(r)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:r}=t;return $t(r.currentTime||0)}set time(t){const{resolved:r}=this;if(!r)return;const{animation:n}=r;n.currentTime=wr(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:r}=t;return r.playbackRate}set speed(t){const{resolved:r}=this;if(!r)return;const{animation:n}=r;n.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:r}=t;return r.playState}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:r}=this;if(!r)return _e;const{animation:n}=r;n.timeline=t,n.onfinish=null}return _e}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;const{resolved:t}=this;if(!t)return;const{animation:r,keyframes:n,duration:o,type:i,ease:s,times:a}=t;if(!(r.playState==="idle"||r.playState==="finished")){if(this.time){const{motionValue:l,onUpdate:u,onComplete:c,...d}=this.options,p=new Sd({...d,keyframes:n,duration:o,type:i,ease:s,times:a,isGenerator:!0}),y=wr(this.time);l.setWithVelocity(p.sample(y-Vs).value,p.sample(y).value,Vs)}this.cancel()}}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:r,name:n,repeatDelay:o,repeatType:i,damping:s,type:a}=t;return iM()&&n&&sM.has(n)&&r&&r.owner&&r.owner.current instanceof HTMLElement&&!r.owner.getProps().onUpdate&&!o&&i!=="mirror"&&s!==0&&a!=="inertia"}}const Md=(e,t,r,n={},o,i)=>s=>{const a=gd(n,e)||{},l=a.delay||n.delay||0;let{elapsed:u=0}=n;u=u-wr(l);let c={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:p=>{t.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:i?void 0:o};H3(a)||(c={...c,...W3(e,c)}),c.duration&&(c.duration=wr(c.duration)),c.repeatDelay&&(c.repeatDelay=wr(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(d=!0)),d&&!i&&t.get()!==void 0){const p=ka(c.keyframes,a);if(p!==void 0){we.update(()=>{c.onUpdate(p),c.onComplete()});return}}return!i&&Uf.supports(c)?new Uf(c):new Sd(c)};function Bs(e){return!!(Ne(e)&&e.add)}function Ed(e,t){e.indexOf(t)===-1&&e.push(t)}function Cd(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}class Pd{constructor(){this.subscriptions=[]}add(t){return Ed(this.subscriptions,t),()=>Cd(this.subscriptions,t)}notify(t,r,n){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,r,n);else for(let i=0;i<o;i++){const s=this.subscriptions[i];s&&s(t,r,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const $f=30,cM=e=>!isNaN(parseFloat(e));class dM{constructor(t,r={}){this.version="11.1.7",this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(n,o=!0)=>{const i=kr.now();this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.canTrackVelocity=cM(this.current),this.owner=r.owner}setCurrent(t){this.current=t,this.updatedAt=kr.now()}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,r){this.events[t]||(this.events[t]=new Pd);const n=this.events[t].add(r);return t==="change"?()=>{n(),we.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,r){this.passiveEffect=t,this.stopPassiveEffect=r}set(t,r=!0){!r||!this.passiveEffect?this.updateAndNotify(t,r):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,r,n){this.set(r),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-n}jump(t,r=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=kr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>$f)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,$f);return Ky(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(t){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=t(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qo(e,t){return new dM(e,t)}function pM(e,t,r){e.hasValue(t)?e.getValue(t).set(r):e.addValue(t,Qo(r))}function fM(e,t){const r=wa(e,t);let{transitionEnd:n={},transition:o={},...i}=r||{};i={...i,...n};for(const s in i){const a=x3(i[s]);pM(e,s,a)}}function mM({protectedKeys:e,needsAnimating:t},r){const n=e.hasOwnProperty(r)&&t[r]!==!0;return t[r]=!1,n}function sv(e,t,{delay:r=0,transitionOverride:n,type:o}={}){var i;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;const u=e.getValue("willChange");n&&(s=n);const c=[],d=o&&e.animationState&&e.animationState.getState()[o];for(const p in l){const y=e.getValue(p,(i=e.latestValues[p])!==null&&i!==void 0?i:null),m=l[p];if(m===void 0||d&&mM(d,p))continue;const v={delay:r,elapsed:0,...gd(s||{},p)};let w=!1;if(window.HandoffAppearAnimations){const g=e.getProps()[ay];if(g){const b=window.HandoffAppearAnimations(g,p);b!==null&&(v.elapsed=b,w=!0)}}y.start(Md(p,y,m,e.shouldReduceMotion&&nn.has(p)?{type:!1}:v,e,w));const h=y.animation;h&&(Bs(u)&&(u.add(p),h.then(()=>u.remove(p))),c.push(h))}return a&&Promise.all(c).then(()=>{we.update(()=>{a&&fM(e,a)})}),c}function Ou(e,t,r={}){var n;const o=wa(e,t,r.type==="exit"?(n=e.presenceContext)===null||n===void 0?void 0:n.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=o||{};r.transitionOverride&&(i=r.transitionOverride);const s=o?()=>Promise.all(sv(e,o,r)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:p}=i;return hM(e,t,c+u,d,p,r)}:()=>Promise.resolve(),{when:l}=i;if(l){const[u,c]=l==="beforeChildren"?[s,a]:[a,s];return u().then(()=>c())}else return Promise.all([s(),a(r.delay)])}function hM(e,t,r=0,n=0,o=1,i){const s=[],a=(e.variantChildren.size-1)*n,l=o===1?(u=0)=>u*n:(u=0)=>a-u*n;return Array.from(e.variantChildren).sort(gM).forEach((u,c)=>{u.notify("AnimationStart",t),s.push(Ou(u,t,{...i,delay:r+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function gM(e,t){return e.sortNodePosition(t)}function yM(e,t,r={}){e.notify("AnimationStart",t);let n;if(Array.isArray(t)){const o=t.map(i=>Ou(e,i,r));n=Promise.all(o)}else if(typeof t=="string")n=Ou(e,t,r);else{const o=typeof t=="function"?wa(e,t,r.custom):t;n=Promise.all(sv(e,o,r))}return n.then(()=>{we.postRender(()=>{e.notify("AnimationComplete",t)})})}const vM=[...od].reverse(),xM=od.length;function wM(e){return t=>Promise.all(t.map(({animation:r,options:n})=>yM(e,r,n)))}function kM(e){let t=wM(e);const r=SM();let n=!0;const o=l=>(u,c)=>{var d;const p=wa(e,c,l==="exit"?(d=e.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(p){const{transition:y,transitionEnd:m,...v}=p;u={...u,...v,...m}}return u};function i(l){t=l(e)}function s(l){const u=e.getProps(),c=e.getVariantContext(!0)||{},d=[],p=new Set;let y={},m=1/0;for(let w=0;w<xM;w++){const h=vM[w],f=r[h],g=u[h]!==void 0?u[h]:c[h],b=Go(g),L=h===l?f.isActive:null;L===!1&&(m=w);let M=g===c[h]&&g!==u[h]&&b;if(M&&n&&e.manuallyAnimateOnMount&&(M=!1),f.protectedKeys={...y},!f.isActive&&L===null||!g&&!f.prevProp||ya(g)||typeof g=="boolean")continue;let S=bM(f.prevProp,g)||h===l&&f.isActive&&!M&&b||w>m&&b,_=!1;const N=Array.isArray(g)?g:[g];let R=N.reduce(o(h),{});L===!1&&(R={});const{prevResolvedValues:D={}}=f,B={...D,...R},O=z=>{S=!0,p.has(z)&&(_=!0,p.delete(z)),f.needsAnimating[z]=!0;const Y=e.getValue(z);Y&&(Y.liveStyle=!1)};for(const z in B){const Y=R[z],Pe=D[z];if(y.hasOwnProperty(z))continue;let T=!1;Pu(Y)&&Pu(Pe)?T=!Ty(Y,Pe):T=Y!==Pe,T?Y!=null?O(z):p.add(z):Y!==void 0&&p.has(z)?O(z):f.protectedKeys[z]=!0}f.prevProp=g,f.prevResolvedValues=R,f.isActive&&(y={...y,...R}),n&&e.blockInitialAnimation&&(S=!1),S&&(!M||_)&&d.push(...N.map(z=>({animation:z,options:{type:h}})))}if(p.size){const w={};p.forEach(h=>{const f=e.getBaseTarget(h),g=e.getValue(h);g&&(g.liveStyle=!0),w[h]=f??null}),d.push({animation:w})}let v=!!d.length;return n&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(v=!1),n=!1,v?t(d):Promise.resolve()}function a(l,u){var c;if(r[l].isActive===u)return Promise.resolve();(c=e.variantChildren)===null||c===void 0||c.forEach(p=>{var y;return(y=p.animationState)===null||y===void 0?void 0:y.setActive(l,u)}),r[l].isActive=u;const d=s(l);for(const p in r)r[p].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:i,getState:()=>r}}function bM(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Ty(t,e):!1}function Nr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function SM(){return{animate:Nr(!0),whileInView:Nr(),whileHover:Nr(),whileTap:Nr(),whileDrag:Nr(),whileFocus:Nr(),exit:Nr()}}class LM extends jr{constructor(t){super(t),t.animationState||(t.animationState=kM(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),ya(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){}}let MM=0;class EM extends jr{constructor(){super(...arguments),this.id=MM++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:r}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===n)return;const o=this.node.animationState.setActive("exit",!t);r&&!t&&o.then(()=>r(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const CM={animation:{Feature:LM},exit:{Feature:EM}},Wf=(e,t)=>Math.abs(e-t);function PM(e,t){const r=Wf(e.x,t.x),n=Wf(e.y,t.y);return Math.sqrt(r**2+n**2)}class av{constructor(t,r,{transformPagePoint:n,contextWindow:o,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=ml(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,y=PM(d.offset,{x:0,y:0})>=3;if(!p&&!y)return;const{point:m}=d,{timestamp:v}=Se;this.history.push({...m,timestamp:v});const{onStart:w,onMove:h}=this.handlers;p||(w&&w(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,p)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=fl(p,this.transformPagePoint),we.update(this.updatePoint,!0)},this.handlePointerUp=(d,p)=>{this.end();const{onEnd:y,onSessionEnd:m,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=ml(d.type==="pointercancel"?this.lastMoveEventInfo:fl(p,this.transformPagePoint),this.history);this.startEvent&&y&&y(d,w),m&&m(d,w)},!Ly(t))return;this.dragSnapToOrigin=i,this.handlers=r,this.transformPagePoint=n,this.contextWindow=o||window;const s=xa(t),a=fl(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=Se;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=r;c&&c(t,ml(a,this.history)),this.removeListeners=Ut(zt(this.contextWindow,"pointermove",this.handlePointerMove),zt(this.contextWindow,"pointerup",this.handlePointerUp),zt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Er(this.updatePoint)}}function fl(e,t){return t?{point:t(e.point)}:e}function Hf(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ml({point:e},t){return{point:e,delta:Hf(e,lv(t)),offset:Hf(e,TM(t)),velocity:DM(t,.1)}}function TM(e){return e[0]}function lv(e){return e[e.length-1]}function DM(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,n=null;const o=lv(e);for(;r>=0&&(n=e[r],!(o.timestamp-n.timestamp>wr(t)));)r--;if(!n)return{x:0,y:0};const i=$t(o.timestamp-n.timestamp);if(i===0)return{x:0,y:0};const s={x:(o.x-n.x)/i,y:(o.y-n.y)/i};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function ot(e){return e.max-e.min}function Fu(e,t=0,r=.01){return Math.abs(e-t)<=r}function Kf(e,t,r,n=.5){e.origin=n,e.originPoint=re(t.min,t.max,e.origin),e.scale=ot(r)/ot(t),(Fu(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=re(r.min,r.max,e.origin)-e.originPoint,(Fu(e.translate)||isNaN(e.translate))&&(e.translate=0)}function So(e,t,r,n){Kf(e.x,t.x,r.x,n?n.originX:void 0),Kf(e.y,t.y,r.y,n?n.originY:void 0)}function Gf(e,t,r){e.min=r.min+t.min,e.max=e.min+ot(t)}function RM(e,t,r){Gf(e.x,t.x,r.x),Gf(e.y,t.y,r.y)}function Yf(e,t,r){e.min=t.min-r.min,e.max=e.min+ot(t)}function Lo(e,t,r){Yf(e.x,t.x,r.x),Yf(e.y,t.y,r.y)}function jM(e,{min:t,max:r},n){return t!==void 0&&e<t?e=n?re(t,e,n.min):Math.max(e,t):r!==void 0&&e>r&&(e=n?re(r,e,n.max):Math.min(e,r)),e}function qf(e,t,r){return{min:t!==void 0?e.min+t:void 0,max:r!==void 0?e.max+r-(e.max-e.min):void 0}}function NM(e,{top:t,left:r,bottom:n,right:o}){return{x:qf(e.x,r,o),y:qf(e.y,t,n)}}function Qf(e,t){let r=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,n]=[n,r]),{min:r,max:n}}function _M(e,t){return{x:Qf(e.x,t.x),y:Qf(e.y,t.y)}}function AM(e,t){let r=.5;const n=ot(e),o=ot(t);return o>n?r=qo(t.min,t.max-n,e.min):n>o&&(r=qo(e.min,e.max-o,t.min)),Mr(0,1,r)}function OM(e,t){const r={};return t.min!==void 0&&(r.min=t.min-e.min),t.max!==void 0&&(r.max=t.max-e.min),r}const Vu=.35;function FM(e=Vu){return e===!1?e=0:e===!0&&(e=Vu),{x:Xf(e,"left","right"),y:Xf(e,"top","bottom")}}function Xf(e,t,r){return{min:Jf(e,t),max:Jf(e,r)}}function Jf(e,t){return typeof e=="number"?e:e[t]||0}const Zf=()=>({translate:0,scale:1,origin:0,originPoint:0}),bn=()=>({x:Zf(),y:Zf()}),em=()=>({min:0,max:0}),ae=()=>({x:em(),y:em()});function lt(e){return[e("x"),e("y")]}function uv({top:e,left:t,right:r,bottom:n}){return{x:{min:t,max:r},y:{min:e,max:n}}}function VM({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function BM(e,t){if(!t)return e;const r=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:r.y,left:r.x,bottom:n.y,right:n.x}}function hl(e){return e===void 0||e===1}function Bu({scale:e,scaleX:t,scaleY:r}){return!hl(e)||!hl(t)||!hl(r)}function Fr(e){return Bu(e)||cv(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function cv(e){return tm(e.x)||tm(e.y)}function tm(e){return e&&e!=="0%"}function Is(e,t,r){const n=e-r,o=t*n;return r+o}function rm(e,t,r,n,o){return o!==void 0&&(e=Is(e,o,n)),Is(e,r,n)+t}function Iu(e,t=0,r=1,n,o){e.min=rm(e.min,t,r,n,o),e.max=rm(e.max,t,r,n,o)}function dv(e,{x:t,y:r}){Iu(e.x,t.translate,t.scale,t.originPoint),Iu(e.y,r.translate,r.scale,r.originPoint)}function IM(e,t,r,n=!1){const o=r.length;if(!o)return;t.x=t.y=1;let i,s;for(let a=0;a<o;a++){i=r[a],s=i.projectionDelta;const l=i.instance;l&&l.style&&l.style.display==="contents"||(n&&i.options.layoutScroll&&i.scroll&&i!==i.root&&Sn(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,dv(e,s)),n&&Fr(i.latestValues)&&Sn(e,i.latestValues))}t.x=nm(t.x),t.y=nm(t.y)}function nm(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function ir(e,t){e.min=e.min+t,e.max=e.max+t}function om(e,t,[r,n,o]){const i=t[o]!==void 0?t[o]:.5,s=re(e.min,e.max,i);Iu(e,t[r],t[n],s,t.scale)}const zM=["x","scaleX","originX"],UM=["y","scaleY","originY"];function Sn(e,t){om(e.x,t,zM),om(e.y,t,UM)}function pv(e,t){return uv(BM(e.getBoundingClientRect(),t))}function $M(e,t,r){const n=pv(e,r),{scroll:o}=t;return o&&(ir(n.x,o.offset.x),ir(n.y,o.offset.y)),n}const fv=({current:e})=>e?e.ownerDocument.defaultView:null,WM=new WeakMap;class HM{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ae(),this.visualElement=t}start(t,{snapToCursor:r=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const o=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(xa(c,"page").point)},i=(c,d)=>{const{drag:p,dragPropagation:y,onDragStart:m}=this.getProps();if(p&&!y&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Ey(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),lt(w=>{let h=this.getAxisMotionValue(w).get()||0;if(Dt.test(h)){const{projection:f}=this.visualElement;if(f&&f.layout){const g=f.layout.layoutBox[w];g&&(h=ot(g)*(parseFloat(h)/100))}}this.originPoint[w]=h}),m&&m(c,d);const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},s=(c,d)=>{const{dragPropagation:p,dragDirectionLock:y,onDirectionLock:m,onDrag:v}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:w}=d;if(y&&this.currentDirection===null){this.currentDirection=KM(w),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",d.point,w),this.updateAxis("y",d.point,w),this.visualElement.render(),v&&v(c,d)},a=(c,d)=>this.stop(c,d),l=()=>lt(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new av(t,{onSessionStart:o,onStart:i,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:fv(this.visualElement)})}stop(t,r){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:i}=this.getProps();i&&i(t,r)}cancel(){this.isDragging=!1;const{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(t,r,n){const{drag:o}=this.getProps();if(!n||!Ni(t,o,this.currentDirection))return;const i=this.getAxisMotionValue(t);let s=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(s=jM(s,this.constraints[t],this.elastic[t])),i.set(s)}resolveConstraints(){var t;const{dragConstraints:r,dragElastic:n}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,i=this.constraints;r&&wn(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&o?this.constraints=NM(o.layoutBox,r):this.constraints=!1,this.elastic=FM(n),i!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&lt(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=OM(o.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!wn(t))return!1;const n=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const i=$M(n,o.root,this.visualElement.getTransformPagePoint());let s=_M(o.layout.layoutBox,i);if(r){const a=r(VM(s));this.hasMutatedConstraints=!!a,a&&(s=uv(a))}return s}startAnimation(t){const{drag:r,dragMomentum:n,dragElastic:o,dragTransition:i,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=lt(c=>{if(!Ni(c,r,this.currentDirection))return;let d=l&&l[c]||{};s&&(d={min:0,max:0});const p=o?200:1e6,y=o?40:1e7,m={type:"inertia",velocity:n?t[c]:0,bounceStiffness:p,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...i,...d};return this.startAxisValueAnimation(c,m)});return Promise.all(u).then(a)}startAxisValueAnimation(t,r){const n=this.getAxisMotionValue(t);return n.start(Md(t,n,0,r,this.visualElement))}stopAnimation(){lt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){lt(t=>{var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(t){var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(t){const r=`_drag${t.toUpperCase()}`,n=this.visualElement.getProps(),o=n[r];return o||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){lt(r=>{const{drag:n}=this.getProps();if(!Ni(r,n,this.currentDirection))return;const{projection:o}=this.visualElement,i=this.getAxisMotionValue(r);if(o&&o.layout){const{min:s,max:a}=o.layout.layoutBox[r];i.set(t[r]-re(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:r}=this.getProps(),{projection:n}=this.visualElement;if(!wn(r)||!n||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};lt(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();o[s]=AM({min:l,max:l},this.constraints[s])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),lt(s=>{if(!Ni(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(re(l,u,o[s]))})}addListeners(){if(!this.visualElement.current)return;WM.set(this.visualElement,this);const t=this.visualElement.current,r=zt(t,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),n=()=>{const{dragConstraints:l}=this.getProps();wn(l)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,i=o.addEventListener("measure",n);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),n();const s=Ft(window,"resize",()=>this.scalePositionWithinConstraints()),a=o.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(lt(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{s(),r(),i(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:n=!1,dragPropagation:o=!1,dragConstraints:i=!1,dragElastic:s=Vu,dragMomentum:a=!0}=t;return{...t,drag:r,dragDirectionLock:n,dragPropagation:o,dragConstraints:i,dragElastic:s,dragMomentum:a}}}function Ni(e,t,r){return(t===!0||t===e)&&(r===null||r===e)}function KM(e,t=10){let r=null;return Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x"),r}class GM extends jr{constructor(t){super(t),this.removeGroupControls=_e,this.removeListeners=_e,this.controls=new HM(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||_e}unmount(){this.removeGroupControls(),this.removeListeners()}}const im=e=>(t,r)=>{e&&e(t,r)};class YM extends jr{constructor(){super(...arguments),this.removePointerDownListener=_e}onPointerDown(t){this.session=new av(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:fv(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:r,onPan:n,onPanEnd:o}=this.node.getProps();return{onSessionStart:im(t),onStart:im(r),onMove:n,onEnd:(i,s)=>{delete this.session,o&&o(i,s)}}}mount(){this.removePointerDownListener=zt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function qM(){const e=k.useContext(ga);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:n}=e,o=k.useId();return k.useEffect(()=>n(o),[]),!t&&r?[!1,()=>r&&r(o)]:[!0]}const Ji={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function sm(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const to={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(A.test(e))e=parseFloat(e);else return e;const r=sm(e,t.target.x),n=sm(e,t.target.y);return`${r}% ${n}%`}},QM={correct:(e,{treeScale:t,projectionDelta:r})=>{const n=e,o=Cr.parse(e);if(o.length>5)return n;const i=Cr.createTransformer(e),s=typeof o[0]!="number"?1:0,a=r.x.scale*t.x,l=r.y.scale*t.y;o[0+s]/=a,o[1+s]/=l;const u=re(a,l,.5);return typeof o[2+s]=="number"&&(o[2+s]/=u),typeof o[3+s]=="number"&&(o[3+s]/=u),i(o)}};class XM extends k.Component{componentDidMount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:n,layoutId:o}=this.props,{projection:i}=t;qL(JM),i&&(r.group&&r.group.add(i),n&&n.register&&o&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),Ji.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:r,visualElement:n,drag:o,isPresent:i}=this.props,s=n.projection;return s&&(s.isPresent=i,o||t.layoutDependency!==r||r===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?s.promote():s.relegate()||we.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),nd.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:n}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(o),n&&n.deregister&&n.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function mv(e){const[t,r]=qM(),n=k.useContext(sd);return x.jsx(XM,{...e,layoutGroup:n,switchLayoutGroup:k.useContext(cy),isPresent:t,safeToRemove:r})}const JM={borderRadius:{...to,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:to,borderTopRightRadius:to,borderBottomLeftRadius:to,borderBottomRightRadius:to,boxShadow:QM},hv=["TopLeft","TopRight","BottomLeft","BottomRight"],ZM=hv.length,am=e=>typeof e=="string"?parseFloat(e):e,lm=e=>typeof e=="number"||A.test(e);function eE(e,t,r,n,o,i){o?(e.opacity=re(0,r.opacity!==void 0?r.opacity:1,tE(n)),e.opacityExit=re(t.opacity!==void 0?t.opacity:1,0,rE(n))):i&&(e.opacity=re(t.opacity!==void 0?t.opacity:1,r.opacity!==void 0?r.opacity:1,n));for(let s=0;s<ZM;s++){const a=`border${hv[s]}Radius`;let l=um(t,a),u=um(r,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||lm(l)===lm(u)?(e[a]=Math.max(re(am(l),am(u),n),0),(Dt.test(u)||Dt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||r.rotate)&&(e.rotate=re(t.rotate||0,r.rotate||0,n))}function um(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const tE=gv(0,.5,Zy),rE=gv(.5,.95,_e);function gv(e,t,r){return n=>n<e?0:n>t?1:r(qo(e,t,n))}function cm(e,t){e.min=t.min,e.max=t.max}function at(e,t){cm(e.x,t.x),cm(e.y,t.y)}function dm(e,t,r,n,o){return e-=t,e=Is(e,1/r,n),o!==void 0&&(e=Is(e,1/o,n)),e}function nE(e,t=0,r=1,n=.5,o,i=e,s=e){if(Dt.test(t)&&(t=parseFloat(t),t=re(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=re(i.min,i.max,n);e===i&&(a-=t),e.min=dm(e.min,t,r,a,o),e.max=dm(e.max,t,r,a,o)}function pm(e,t,[r,n,o],i,s){nE(e,t[r],t[n],t[o],t.scale,i,s)}const oE=["x","scaleX","originX"],iE=["y","scaleY","originY"];function fm(e,t,r,n){pm(e.x,t,oE,r?r.x:void 0,n?n.x:void 0),pm(e.y,t,iE,r?r.y:void 0,n?n.y:void 0)}function mm(e){return e.translate===0&&e.scale===1}function yv(e){return mm(e.x)&&mm(e.y)}function sE(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function vv(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function hm(e){return ot(e.x)/ot(e.y)}class aE{constructor(){this.members=[]}add(t){Ed(this.members,t),t.scheduleRender()}remove(t){if(Cd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(t){const r=this.members.findIndex(o=>t===o);if(r===0)return!1;let n;for(let o=r;o>=0;o--){const i=this.members[o];if(i.isPresent!==!1){n=i;break}}return n?(this.promote(n),!0):!1}promote(t,r){const n=this.lead;if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.instance&&n.scheduleRender(),t.scheduleRender(),t.resumeFrom=n,r&&(t.resumeFrom.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:r,resumingFrom:n}=t;r.onExitComplete&&r.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function gm(e,t,r){let n="";const o=e.x.translate/t.x,i=e.y.translate/t.y,s=(r==null?void 0:r.z)||0;if((o||i||s)&&(n=`translate3d(${o}px, ${i}px, ${s}px) `),(t.x!==1||t.y!==1)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),r){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:p,skewX:y,skewY:m}=r;u&&(n=`perspective(${u}px) ${n}`),c&&(n+=`rotate(${c}deg) `),d&&(n+=`rotateX(${d}deg) `),p&&(n+=`rotateY(${p}deg) `),y&&(n+=`skewX(${y}deg) `),m&&(n+=`skewY(${m}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(n+=`scale(${a}, ${l})`),n||"none"}const lE=(e,t)=>e.depth-t.depth;class uE{constructor(){this.children=[],this.isDirty=!1}add(t){Ed(this.children,t),this.isDirty=!0}remove(t){Cd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(lE),this.isDirty=!1,this.children.forEach(t)}}function cE(e,t){const r=kr.now(),n=({timestamp:o})=>{const i=o-r;i>=t&&(Er(n),e(i-t))};return we.read(n,!0),()=>Er(n)}function dE(e){window.MotionDebug&&window.MotionDebug.record(e)}function pE(e){return e instanceof SVGElement&&e.tagName!=="svg"}function fE(e,t,r){const n=Ne(e)?e:Qo(e);return n.start(Md("",n,t,r)),n.animation}const gl=["","X","Y","Z"],mE={visibility:"hidden"},ym=1e3;let hE=0;const Vr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function yl(e,t,r,n){const{latestValues:o}=t;o[e]&&(r[e]=o[e],t.setStaticValue(e,0),n&&(n[e]=0))}function xv({attachResizeListener:e,defaultParent:t,measureScroll:r,checkIsScrollRoot:n,resetTransform:o}){return class{constructor(s={},a=t==null?void 0:t()){this.id=hE++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Vr.totalNodes=Vr.resolvedTargetDeltas=Vr.recalculatedProjection=0,this.nodes.forEach(vE),this.nodes.forEach(SE),this.nodes.forEach(LE),this.nodes.forEach(xE),dE(Vr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new uE)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Pd),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=pE(s),this.instance=s;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let d;const p=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=cE(p,250),Ji.hasAnimatedSinceResize&&(Ji.hasAnimatedSinceResize=!1,this.nodes.forEach(xm))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:p,hasRelativeTargetChanged:y,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||c.getDefaultTransition()||TE,{onLayoutAnimationStart:w,onLayoutAnimationComplete:h}=c.getProps(),f=!this.targetLayout||!vv(this.targetLayout,m)||y,g=!p&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||p&&(f||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,g);const b={...gd(v,"layout"),onPlay:w,onComplete:h};(c.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b)}else p||xm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Er(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ME),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(vm);return}this.isUpdating||this.nodes.forEach(kE),this.isUpdating=!1,window.HandoffCancelAllAnimations&&window.HandoffCancelAllAnimations(),this.nodes.forEach(bE),this.nodes.forEach(gE),this.nodes.forEach(yE),this.clearAllSnapshots();const a=kr.now();Se.delta=Mr(0,1e3/60,a-Se.timestamp),Se.timestamp=a,Se.isProcessing=!0,sl.update.process(Se),sl.preRender.process(Se),sl.render.process(Se),Se.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,nd.read(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(wE),this.sharedNodes.forEach(EE)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,we.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){we.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ae(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:n(this.instance),offset:r(this.instance)})}resetTransform(){if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!yv(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;s&&(a||Fr(this.latestValues)||c)&&(o(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),DE(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return ae();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(ir(a.x,l.offset.x),ir(a.y,l.offset.y)),a}removeElementScroll(s){const a=ae();at(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){at(a,s);const{scroll:p}=this.root;p&&(ir(a.x,-p.offset.x),ir(a.y,-p.offset.y))}ir(a.x,c.offset.x),ir(a.y,c.offset.y)}}return a}applyTransform(s,a=!1){const l=ae();at(l,s);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Sn(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Fr(c.latestValues)&&Sn(l,c.latestValues)}return Fr(this.latestValues)&&Sn(l,this.latestValues),l}removeTransform(s){const a=ae();at(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Fr(u.latestValues))continue;Bu(u.latestValues)&&u.updateSnapshot();const c=ae(),d=u.measurePageBox();at(c,d),fm(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Fr(this.latestValues)&&fm(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Se.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:p}=this.options;if(!(!this.layout||!(d||p))){if(this.resolvedRelativeTargetAt=Se.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ae(),this.relativeTargetOrigin=ae(),Lo(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),at(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ae(),this.targetWithTransforms=ae()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),RM(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):at(this.target,this.layout.layoutBox),dv(this.target,this.targetDelta)):at(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ae(),this.relativeTargetOrigin=ae(),Lo(this.relativeTargetOrigin,this.target,y.target),at(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Vr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Bu(this.parent.latestValues)||cv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Se.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;at(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,y=this.treeScale.y;IM(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=ae());const{target:m}=a;if(!m){this.projectionTransform&&(this.projectionDelta=bn(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=bn(),this.projectionDeltaWithTransform=bn());const v=this.projectionTransform;So(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=gm(this.projectionDelta,this.treeScale),(this.projectionTransform!==v||this.treeScale.x!==p||this.treeScale.y!==y)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),Vr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=bn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=ae(),y=l?l.source:void 0,m=this.layout?this.layout.source:void 0,v=y!==m,w=this.getStack(),h=!w||w.members.length<=1,f=!!(v&&!h&&this.options.crossfade===!0&&!this.path.some(PE));this.animationProgress=0;let g;this.mixTargetDelta=b=>{const L=b/1e3;wm(d.x,s.x,L),wm(d.y,s.y,L),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Lo(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),CE(this.relativeTarget,this.relativeTargetOrigin,p,L),g&&sE(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=ae()),at(g,this.relativeTarget)),v&&(this.animationValues=c,eE(c,u,this.latestValues,L,f,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Er(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=we.update(()=>{Ji.hasAnimatedSinceResize=!0,this.currentAnimation=fE(0,ym,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ym),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&wv(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ae();const d=ot(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+d;const p=ot(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+p}at(a,l),Sn(a,c),So(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new aE),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&yl("z",s,u,this.animationValues);for(let c=0;c<gl.length;c++)yl(`rotate${gl[c]}`,s,u,this.animationValues),yl(`skew${gl[c]}`,s,u,this.animationValues);s.render();for(const c in u)s.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return mE;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Qi(s==null?void 0:s.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=Qi(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Fr(this.latestValues)&&(v.transform=c?c({},""):"none",this.hasProjected=!1),v}const p=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=gm(this.projectionDeltaWithTransform,this.treeScale,p),c&&(u.transform=c(p,u.transform));const{x:y,y:m}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${m.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=d===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const v in _s){if(p[v]===void 0)continue;const{correct:w,applyTo:h}=_s[v],f=u.transform==="none"?p[v]:w(p[v],d);if(h){const g=h.length;for(let b=0;b<g;b++)u[h[b]]=f}else u[v]=f}return this.options.layoutId&&(u.pointerEvents=d===this?Qi(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(vm),this.root.sharedNodes.clear()}}}function gE(e){e.updateLayout()}function yE(e){var t;const r=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&r&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:o}=e.layout,{animationType:i}=e.options,s=r.source!==e.layout.source;i==="size"?lt(d=>{const p=s?r.measuredBox[d]:r.layoutBox[d],y=ot(p);p.min=n[d].min,p.max=p.min+y}):wv(i,r.layoutBox,n)&&lt(d=>{const p=s?r.measuredBox[d]:r.layoutBox[d],y=ot(n[d]);p.max=p.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+y)});const a=bn();So(a,n,r.layoutBox);const l=bn();s?So(l,e.applyTransform(o,!0),r.measuredBox):So(l,n,r.layoutBox);const u=!yv(a);let c=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:p,layout:y}=d;if(p&&y){const m=ae();Lo(m,r.layoutBox,p.layoutBox);const v=ae();Lo(v,n,y.layoutBox),vv(m,v)||(c=!0),d.options.layoutRoot&&(e.relativeTarget=v,e.relativeTargetOrigin=m,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:r,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:n}=e.options;n&&n()}e.options.transition=void 0}function vE(e){Vr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function xE(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function wE(e){e.clearSnapshot()}function vm(e){e.clearMeasurements()}function kE(e){e.isLayoutDirty=!1}function bE(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function xm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function SE(e){e.resolveTargetDelta()}function LE(e){e.calcProjection()}function ME(e){e.resetSkewAndRotation()}function EE(e){e.removeLeadSnapshot()}function wm(e,t,r){e.translate=re(t.translate,0,r),e.scale=re(t.scale,1,r),e.origin=t.origin,e.originPoint=t.originPoint}function km(e,t,r,n){e.min=re(t.min,r.min,n),e.max=re(t.max,r.max,n)}function CE(e,t,r,n){km(e.x,t.x,r.x,n),km(e.y,t.y,r.y,n)}function PE(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const TE={duration:.45,ease:[.4,0,.1,1]},bm=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Sm=bm("applewebkit/")&&!bm("chrome/")?Math.round:_e;function Lm(e){e.min=Sm(e.min),e.max=Sm(e.max)}function DE(e){Lm(e.x),Lm(e.y)}function wv(e,t,r){return e==="position"||e==="preserve-aspect"&&!Fu(hm(t),hm(r),.2)}const RE=xv({attachResizeListener:(e,t)=>Ft(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),vl={current:void 0},kv=xv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!vl.current){const e=new RE({});e.mount(window),e.setOptions({layoutScroll:!0}),vl.current=e}return vl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),jE={pan:{Feature:YM},drag:{Feature:GM,ProjectionNode:kv,MeasureLayout:mv}},zu={current:null},bv={current:!1};function NE(){if(bv.current=!0,!!ed)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>zu.current=e.matches;e.addListener(t),t()}else zu.current=!1}function _E(e,t,r){const{willChange:n}=t;for(const o in t){const i=t[o],s=r[o];if(Ne(i))e.addValue(o,i),Bs(n)&&n.add(o);else if(Ne(s))e.addValue(o,Qo(i,{owner:e})),Bs(n)&&n.remove(o);else if(s!==i)if(e.hasValue(o)){const a=e.getValue(o);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(o);e.addValue(o,Qo(a!==void 0?a:i,{owner:e}))}}for(const o in r)t[o]===void 0&&e.removeValue(o);return t}const Mm=new WeakMap,AE=[...Ay,Re,Cr],OE=e=>AE.find(_y(e)),Sv=Object.keys(Yo),FE=Sv.length,Em=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],VE=id.length;function Lv(e){if(e)return e.options.allowProjection!==!1?e.projection:Lv(e.parent)}class BE{scrapeMotionValuesFromProps(t,r,n){return{}}constructor({parent:t,props:r,presenceContext:n,reducedMotionConfig:o,blockInitialAnimation:i,visualState:s},a={}){this.resolveKeyframes=(p,y,m,v)=>new this.KeyframeResolver(p,y,m,v,this),this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=yd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>we.render(this.render,!1,!0);const{latestValues:l,renderState:u}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=r.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=r,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=a,this.blockInitialAnimation=!!i,this.isControllingVariants=va(r),this.isVariantNode=uy(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:c,...d}=this.scrapeMotionValuesFromProps(r,{},this);for(const p in d){const y=d[p];l[p]!==void 0&&Ne(y)&&(y.set(l[p],!1),Bs(c)&&c.add(p))}}mount(t){this.current=t,Mm.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,n)=>this.bindToMotionValue(n,r)),bv.current||NE(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:zu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){var t;Mm.delete(this.current),this.projection&&this.projection.unmount(),Er(this.notifyUpdate),Er(this.render),this.valueSubscriptions.forEach(r=>r()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const r in this.events)this.events[r].clear();for(const r in this.features)(t=this.features[r])===null||t===void 0||t.unmount();this.current=null}bindToMotionValue(t,r){const n=nn.has(t),o=r.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&we.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)}),i=r.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),i(),r.owner&&r.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...r},n,o,i){let s,a;for(let l=0;l<FE;l++){const u=Sv[l],{isEnabled:c,Feature:d,ProjectionNode:p,MeasureLayout:y}=Yo[u];p&&(s=p),c(r)&&(!this.features[u]&&d&&(this.features[u]=new d(this)),y&&(a=y))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,Lv(this.parent));const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:p,layoutRoot:y}=r;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!c||d&&wn(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:p,layoutRoot:y})}return a}updateFeatures(){for(const t in this.features){const r=this.features[t];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ae()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,r){this.latestValues[t]=r}update(t,r){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let n=0;n<Em.length;n++){const o=Em[n];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const i="on"+o,s=t[i];s&&(this.propEventSubscriptions[o]=this.on(o,s))}this.prevMotionValues=_E(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const n=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(n.initial=this.props.initial),n}const r={};for(let n=0;n<VE;n++){const o=id[n],i=this.props[o];(Go(i)||i===!1)&&(r[o]=i)}return r}addVariantChild(t){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(t),()=>r.variantChildren.delete(t)}addValue(t,r){const n=this.values.get(t);r!==n&&(n&&this.removeValue(t),this.bindToMotionValue(t,r),this.values.set(t,r),this.latestValues[t]=r.get())}removeValue(t){this.values.delete(t);const r=this.valueSubscriptions.get(t);r&&(r(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,r){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return n===void 0&&r!==void 0&&(n=Qo(r===null?void 0:r,{owner:this}),this.addValue(t,n)),n}readValue(t,r){var n;let o=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options);return o!=null&&(typeof o=="string"&&(jy(o)||Dy(o))?o=parseFloat(o):!OE(o)&&Cr.test(r)&&(o=$y(t,r)),this.setBaseTarget(t,Ne(o)?o.get():o)),Ne(o)?o.get():o}setBaseTarget(t,r){this.baseTarget[t]=r}getBaseTarget(t){var r;const{initial:n}=this.props;let o;if(typeof n=="string"||typeof n=="object"){const s=hd(this.props,n,(r=this.presenceContext)===null||r===void 0?void 0:r.custom);s&&(o=s[t])}if(n&&o!==void 0)return o;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Ne(i)?i:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,r){return this.events[t]||(this.events[t]=new Pd),this.events[t].add(r)}notify(t,...r){this.events[t]&&this.events[t].notify(...r)}}class Mv extends BE{constructor(){super(...arguments),this.KeyframeResolver=Wy}sortInstanceNodePosition(t,r){return t.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(t,r){return t.style?t.style[r]:void 0}removeValueFromRenderState(t,{vars:r,style:n}){delete r[t],delete n[t]}}function IE(e){return window.getComputedStyle(e)}class zE extends Mv{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,r){if(nn.has(r)){const n=xd(r);return n&&n.default||0}else{const n=IE(t),o=(fy(r)?n.getPropertyValue(r):n[r])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:r}){return pv(t,r)}build(t,r,n,o){cd(t,r,n,o.transformTemplate)}scrapeMotionValuesFromProps(t,r,n){return md(t,r,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ne(t)&&(this.childSubscription=t.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}renderInstance(t,r,n,o){vy(t,r,n,o)}}class UE extends Mv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,r){return t[r]}readValueFromInstance(t,r){if(nn.has(r)){const n=xd(r);return n&&n.default||0}return r=xy.has(r)?r:rd(r),t.getAttribute(r)}measureInstanceViewportBox(){return ae()}scrapeMotionValuesFromProps(t,r,n){return ky(t,r,n)}build(t,r,n,o){pd(t,r,n,this.isSVGTag,o.transformTemplate)}renderInstance(t,r,n,o){wy(t,r,n,o)}mount(t){this.isSVGTag=fd(t.tagName),super.mount(t)}}const $E=(e,t)=>ad(e)?new UE(t,{enableHardwareAcceleration:!1}):new zE(t,{allowProjection:e!==k.Fragment,enableHardwareAcceleration:!0}),WE={layout:{ProjectionNode:kv,MeasureLayout:mv}},HE={...CM,...F3,...jE,...WE},Ev=GL((e,t)=>L3(e,t,HE,$E));function Cv(){const e=k.useRef(!1);return td(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function KE(){const e=Cv(),[t,r]=k.useState(0),n=k.useCallback(()=>{e.current&&r(t+1)},[t]);return[k.useCallback(()=>we.postRender(n),[n]),t]}class GE extends k.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=r.offsetHeight||0,n.width=r.offsetWidth||0,n.top=r.offsetTop,n.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function YE({children:e,isPresent:t}){const r=k.useId(),n=k.useRef(null),o=k.useRef({width:0,height:0,top:0,left:0}),{nonce:i}=k.useContext(Zc);return k.useInsertionEffect(()=>{const{width:s,height:a,top:l,left:u}=o.current;if(t||!n.current||!s||!a)return;n.current.dataset.motionPopId=r;const c=document.createElement("style");return i&&(c.nonce=i),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),x.jsx(GE,{isPresent:t,childRef:n,sizeRef:o,children:k.cloneElement(e,{ref:n})})}const xl=({children:e,initial:t,isPresent:r,onExitComplete:n,custom:o,presenceAffectsLayout:i,mode:s})=>{const a=by(qE),l=k.useId(),u=k.useMemo(()=>({id:l,initial:t,isPresent:r,custom:o,onExitComplete:c=>{a.set(c,!0);for(const d of a.values())if(!d)return;n&&n()},register:c=>(a.set(c,!1),()=>a.delete(c))}),i?[Math.random()]:[r]);return k.useMemo(()=>{a.forEach((c,d)=>a.set(d,!1))},[r]),k.useEffect(()=>{!r&&!a.size&&n&&n()},[r]),s==="popLayout"&&(e=x.jsx(YE,{isPresent:r,children:e})),x.jsx(ga.Provider,{value:u,children:e})};function qE(){return new Map}function QE(e){return k.useEffect(()=>()=>e(),[])}const Br=e=>e.key||"";function XE(e,t){e.forEach(r=>{const n=Br(r);t.set(n,r)})}function JE(e){const t=[];return k.Children.forEach(e,r=>{k.isValidElement(r)&&t.push(r)}),t}const Pv=({children:e,custom:t,initial:r=!0,onExitComplete:n,exitBeforeEnter:o,presenceAffectsLayout:i=!0,mode:s="sync"})=>{const a=k.useContext(sd).forceRender||KE()[0],l=Cv(),u=JE(e);let c=u;const d=k.useRef(new Map).current,p=k.useRef(c),y=k.useRef(new Map).current,m=k.useRef(!0);if(td(()=>{m.current=!1,XE(u,y),p.current=c}),QE(()=>{m.current=!0,y.clear(),d.clear()}),m.current)return x.jsx(x.Fragment,{children:c.map(f=>x.jsx(xl,{isPresent:!0,initial:r?void 0:!1,presenceAffectsLayout:i,mode:s,children:f},Br(f)))});c=[...c];const v=p.current.map(Br),w=u.map(Br),h=v.length;for(let f=0;f<h;f++){const g=v[f];w.indexOf(g)===-1&&!d.has(g)&&d.set(g,void 0)}return s==="wait"&&d.size&&(c=[]),d.forEach((f,g)=>{if(w.indexOf(g)!==-1)return;const b=y.get(g);if(!b)return;const L=v.indexOf(g);let M=f;if(!M){const P=()=>{d.delete(g);const S=Array.from(y.keys()).filter(_=>!w.includes(_));if(S.forEach(_=>y.delete(_)),p.current=u.filter(_=>{const N=Br(_);return N===g||S.includes(N)}),!d.size){if(l.current===!1)return;a(),n&&n()}};M=x.jsx(xl,{isPresent:!1,onExitComplete:P,custom:t,presenceAffectsLayout:i,mode:s,children:b},Br(b)),d.set(g,M)}c.splice(L,0,M)}),c=c.map(f=>{const g=f.key;return d.has(g)?f:x.jsx(xl,{isPresent:!0,presenceAffectsLayout:i,mode:s,children:f},Br(f))}),x.jsx(x.Fragment,{children:d.size?c:c.map(f=>k.cloneElement(f))})},Cm=({tag:e})=>{let t,r;switch(e){case"XD":r="#2E001D";break;case"PS":r="#18152E";break;case"Mobile Responsive":r="#b148d2";break;case"Live":r="#333533";break;case"HTML":r="#CF5E1C";break;case"CSS":r="#0277BD";break;case"SASS":r="#CD6799";break;case"Tailwind":r="linear-gradient(45deg,#F5F5F5, #CD6799 37%,#3886EC 50%, #F5F5F5 )";break;case"JavaScript":r="#CAB108";break;case"TypeScript":r="#32A3EE";break;case"React":r="#242938";break;case"Firebase":r="#CF5E1C";break;case"PHP":r="#7229D1";break;case"MySQL":r="#F57C00";break;case"Figma":r="#0ACF83";break}return e==="Live"?t=x.jsxs(x.Fragment,{children:[x.jsx("div",{className:`\r
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
                `,children:"Demo"})]}):t=e,x.jsx("div",{className:`
    flex flex-row
    justify-center
    items-center 

    py-[0.097rem]
    mobile:py-[0.130rem]
    sMobile:py-[0.208rem]
    mMobile:py-[0.20rem]
    sLaptop:py-[0.14893rem]
    mLaptop:py-[0.18546rem]
    desktop:py-[0.2248rem]
    largeDesktop:py-[0.281rem]
    
        gap-[0.193rem]
        mobile:gap-[0.257rem]
        sMobile:gap-[0.412rem]
        mMobile:gap-[0.495rem]
        sLaptop:gap-[0.10918rem]
        mLaptop:gap-[0.13596rem]
        desktop:gap-[0.1648rem]
        largeDesktop:gap-[0.206rem]

        w-[1.667rem]
        mobile:w-[2.223rem]
        sMobile:w-[3.557rem]
        mMobile:w-[4.269rem]
        sLaptop:w-[2.51432rem]
        mLaptop:w-[3.13104rem]
        desktop:w-[3.7952rem]
        largeDesktop:w-[4.744rem]

        mb-[0.195rem]
        mobile:mb-[0.260rem]
        sMobile:mb-[0.416rem]
        mMobile:mb-[0.5rem]
        sLaptop:mb-[0.29839rem]
        mLaptop:mb-[0.37158rem]
        desktop:mb-[0.4504rem]
        largeDesktop:mb-[0.563rem]

    rounded-[0.036328125rem]
    mobile:rounded-[0.04843749999rem]
    sMobile:rounded-[0.07749999999rem]
    mMobile:rounded-[0.093rem]
    sLaptop:rounded-[0.05459rem]
    mLaptop:rounded-[0.06798rem]
    desktop:rounded-[0.0824rem]
    largeDesktop:rounded-[0.103rem]

    text-PrimaryWhite
    font-semibold
    text-[0.29296875rem]
    mobile:text-[0.39062499999rem]
    sMobile:text-[0.62499999999rem]
    mMobile:text-[.75rem]
    sLaptop:text-[0.52807rem]
    mLaptop:text-[0.60854rem]
    desktop:text-[0.6952rem]
    largeDesktop:text-[0.819rem]
    leading-[1]
    `,style:{background:r},children:t})},ZE=({tag:e,demo:t,projectName:r,date:n})=>x.jsxs("div",{className:`\r
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
                `,children:r}),x.jsx("p",{className:`\r
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
                `,children:n})]})]}),eC=k.memo(({project:e})=>{const{id:t,projectName:r,projectURL:n,imgURL:o,date:i,tags:s,live:a,responsive:l}=e;return x.jsxs(Ev.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},onClick:()=>window.open(n),className:`\r
        block\r
        relative\r
\r
        w-[7.311rem]\r
        h-[8.375rem]\r
        mobile:w-[9.749rem]\r
        mobile:h-[11.166rem]\r
        sMobile:w-[15.598rem]\r
        sMobile:h-[17.866rem]\r
        mMobile:w-[18.718rem]\r
        mMobile:h-[21.439rem]\r
        sLaptop:w-[11.092rem]\r
        mLaptop:w-[13.864rem]\r
        desktop:w-[16.638rem]\r
        largeDesktop:w-[20.797rem]\r
        sLaptop:h-[12.705rem]\r
        mLaptop:h-[15.881rem]\r
        desktop:h-[19.058rem]\r
        largeDesktop:h-[23.822rem]\r
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
       sLaptop:w-[11.092rem]\r
       mLaptop:w-[13.864rem]\r
       desktop:w-[16.638rem]\r
       largeDesktop:w-[20.797rem]\r
       sLaptop:h-[12.705rem]\r
       mLaptop:h-[15.881rem]\r
       desktop:h-[19.058rem]\r
       largeDesktop:h-[23.822rem]\r
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
        `,src:`https://253olivares.github.io/Newportfolio-ReactViteBuild/assets/screenshots/${o}.svg`,alt:r,loading:"lazy"}),l?x.jsx("p",{className:`\r
          absolute\r
          text-PrimaryWhite\r
          bg-[#b148d2]\r
          px-[5%]\r
          \r
          top-[0.427rem]\r
          mobile:top-[0.520rem]\r
          sMobile:top-[0.911rem]\r
          mMobile:top-[1.094rem]\r
          sLaptop:top-[0.62964rem]\r
          mLaptop:top-[0.78408rem]\r
          desktop:top-[0.9504rem]\r
          largeDesktop:top-[1.188rem]\r
\r
          font-semibold\r
\r
          py-[0.097rem]\r
          mobile:py-[0.130rem]\r
          sMobile:py-[0.208rem]\r
          mMobile:py-[0.20rem]\r
          sLaptop:py-[0.14893rem]\r
          mLaptop:py-[0.18546rem] \r
          desktop:py-[0.2248rem]\r
          largeDesktop:py-[0.281rem]\r
\r
          text-[0.29296875rem]\r
          mobile:text-[0.39062499999rem]\r
          sMobile:text-[0.62499999999rem]\r
          mMobile:text-[.75rem]\r
          sLaptop:text-[0.52807rem]\r
          mLaptop:text-[0.60854rem]\r
          desktop:text-[0.6952rem]\r
          largeDesktop:text-[0.819rem]\r
          leading-[1]\r
          `,children:"Mobile Responsive"}):null,x.jsx(ZE,{tag:s,demo:a,projectName:r,date:i})]},t)}),tC=k.memo(()=>{const e=W(R2),t=x.jsx("div",{className:`\r
  emptySpaceTemplate \r
  `});let r,n;switch(e.length){case 1:n=Array(3).fill(null),r=n.map((o,i)=>x.jsx(k.Fragment,{children:t},i));break;case 2:n=Array(2).fill(null),r=n.map((o,i)=>x.jsx(k.Fragment,{children:t},i));break;case 3:n=Array(1).fill(null),r=n.map((o,i)=>x.jsx(k.Fragment,{children:t},i));break}return e.length===0?x.jsx("p",{className:`\r
     w-full\r
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
    `,children:[x.jsx(Pv,{children:e.map((o,i)=>x.jsx(eC,{project:o},i))}),r]})}),rC=k.memo(()=>{const e=qe(),t=W(E2);return x.jsxs("div",{className:`\r
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
    `,children:[x.jsx("input",{checked:t,onChange:()=>e(N2()),className:`\r
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
       sLaptop:w-[1.050rem]\r
       sLaptop:h-[1.050rem]\r
       mLaptop:w-[1.312rem]\r
       mLaptop:h-[1.312rem]\r
       desktop:w-[1.575rem]\r
       desktop:h-[1.575rem]\r
       largeDesktop:w-[1.969rem]\r
       largeDesktop:h-[1.969rem]\r
       bg-GlassLighterBackground\r
       checked:bg-SiteDarkGreen\r
      `,type:"checkbox",id:"LiveDemo",name:"LiveDemo"}),x.jsx("label",{className:`text-SidebarGray\r
       text-[0.917rem]\r
       mobile:text-[1.223rem]\r
       sMobile:text-[1.956rem]\r
       mMobile:text-[2.348rem]\r
       sLaptop:text-[0.899rem]\r
       mLaptop:text-[1.124rem]\r
       desktop:text-[1.349rem]\r
       largeDesktop:text-[1.687rem]\r
       table-cell\r
       align-middle\r
       font-medium\r
       leading-none\r
      `,htmlFor:"LiveDemo",children:"Live Demo"})]})}),nC=k.memo(()=>{const e=qe(),t=k.useContext(Ce),{Arrow:r}=t;return x.jsxs("div",{onClick:()=>e(O2()),className:`flex flex-row\r
     hover:cursor-pointer\r
     items-center\r
     gap-[0.611rem]\r
     mobile:gap-[0.815rem]\r
     sMobile:gap-[1.304rem]\r
     mMobile:gap-[1.565rem]\r
     sLaptop:gap-[0.599rem]\r
     mLaptop:gap-[0.749rem]\r
     desktop:gap-[0.9rem]\r
     largeDesktop:gap-[1.125rem]\r
     font-medium\r
     text-SidebarGray\r
    `,children:[x.jsx("p",{className:`\r
       text-[0.917rem]\r
       mobile:text-[1.223rem]\r
       sMobile:text-[1.956rem]\r
       mMobile:text-[2.348rem]\r
       sLaptop:text-[0.899rem]\r
       mLaptop:text-[1.124rem]\r
       desktop:text-[1.349rem]\r
       largeDesktop:text-[1.687rem]\r
       leading-none\r
       table-cell\r
       align-middle\r
      `,children:"Filter"}),x.jsx("img",{className:`\r
       w-[0.876rem]\r
       mobile:w-[1.168rem]\r
       sMobile:w-[1.868rem]\r
       mMobile:w-[2.242rem]\r
       sLaptop:w-[0.859rem]\r
       mLaptop:w-[1.073rem]\r
       desktop:w-[1.288rem]\r
       largeDesktop:w-[1.611rem]\r
       rotate-90`,id:"Arrow",src:r,alt:"Arrow"})]})}),oC=k.memo(()=>x.jsxs("div",{className:`
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
    sLaptop:gap-[1.050rem]
    mLaptop:gap-[1.312rem]
    desktop:gap-[1.575rem]
    largeDesktop:gap-[1.969rem]
    items-center
    `,children:[x.jsx(rC,{}),x.jsx(nC,{})]})),iC="/Newportfolio-ReactViteBuild/assets/searchButton.svg",sC="/Newportfolio-ReactViteBuild/assets/searchButtonGreen.svg",aC=k.memo(()=>{const e=qe(),[t,r]=k.useState(""),n=W(ii);return k.useEffect(()=>{r(""),e(ol(""))},[n]),x.jsx("form",{onSubmit:o=>{o.preventDefault(),e(ol(t.trim()))},children:x.jsxs("div",{className:`\r
      flex \r
      \r
      mt-[0.488rem]\r
      mobile:mt-[0.651rem]\r
      sMobile:mt-[1.042rem]\r
      mMobile:mt-[1.25rem]\r
      sLaptop:mt-0\r
\r
      sLaptop:gap-[0.933rem]\r
      mLaptop:gap-[1.166rem]\r
      desktop:gap-[1.4rem]\r
      largeDesktop:gap-[1.75rem]\r
\r
      items-center\r
      `,children:[x.jsx("label",{className:`\r
        hidden\r
        sLaptop:block\r
        sLaptop:text-[1rem]\r
        mLaptop:text-[1.25rem]\r
        desktop:text-[1.5rem]\r
        largeDesktop:text-[1.687rem]\r
\r
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
        sLaptop:h-[1.499rem]\r
        mLaptop:h-[1.874rem]  \r
        desktop:h-[2.249rem]\r
        largeDesktop:h-[2.812rem]\r
\r
        rounded-full\r
        sLaptop:rounded-[.265rem]\r
        mLaptop:rounded-[.33rem]\r
        desktop:rounded-[.4rem]\r
        largeDesktop:rounded-[0.5rem]\r
\r
        focus-within:ring-[2.734px]\r
        mobile:focus-within:ring-[3.645px]\r
        sMobile:focus-within:ring-[5.833px]\r
        mMobile:focus-within:ring-[7px]\r
        sLaptop:focus-within:ring-[2.132px]\r
        mLaptop:focus-within:ring-[2.64px]\r
        desktop:focus-within:ring-[3.2px]\r
        largeDesktop:focus-within:ring-[4px]\r
\r
        focus-within:ring-SelectBlue\r
        `,children:[x.jsx("input",{id:"Search",value:t,onChange:o=>{r(o.target.value),o.target.value===""&&e(ol(""))},className:`\r
            text-[0.976rem]\r
            mobile:text-[1.302rem]\r
            sMobile:text-[2.083rem]\r
            mMobile:text-[2.5rem]\r
            font-medium\r
\r
            sLaptop:font-normal\r
            sLaptop:text-[0.899rem]\r
            mLaptop:text-[1.124rem]\r
            desktop:text-[1.349rem]\r
            largeDesktop:text-[1.687rem]\r
\r
            w-full\r
\r
            sLaptop:w-[8.999rem]\r
            mLaptop:w-[11.249rem]\r
            desktop:w-[13.5rem]\r
            largeDesktop:w-[16.875rem]\r
\r
            px-[3%]\r
            sLaptop:px-[0.570rem]\r
            mLaptop:px-[0.712rem]\r
            desktop:px-[0.855rem]\r
            largeDesktop:px-[1.069rem]\r
\r
            sLaptop:rounded-l-[.265rem]\r
            mLaptop:rounded-l-[.33rem]\r
            desktop:rounded-l-[.4rem]\r
            largeDesktop:rounded-l-[0.5rem]\r
\r
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
            `,src:sC,alt:"searchIconGreen"}),x.jsx("button",{type:"submit",className:`\r
            hidden\r
            sLaptop:block\r
            px-0\r
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
              max-w-none\r
              sLaptop:w-[0.930rem]\r
              mLaptop:w-[1.162rem]\r
              desktop:w-[1.395rem]\r
              largeDesktop:w-[1.744rem]\r
              `,src:iC,alt:"SearchIcon"})})]}),x.jsx("p",{onClick:()=>{r(""),e(F2())},className:`\r
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
        `,children:"clear"})]})})}),lC=k.memo(()=>{const e=W(ii);return x.jsxs("div",{className:`\r
    flex\r
    flex-col\r
    sLaptop:flex-row\r
    sLaptop:justify-between\r
    w-full\r
    `,children:[x.jsx(aC,{}),e!=="Art"&&e!=="UI / UX"&&x.jsx(oC,{})]})}),uC=k.memo(({tag:e,color:t})=>{const r=qe(),n=W(C2),o=W(P2);let i;e!=="Mobile"?n.length<=0?i=!1:n.find(l=>l===e)?i=!0:i=!1:i=o;const s=()=>{r(e!=="Mobile"?i?_2(e):A2(e):V2())};return x.jsx("div",{onClick:()=>s(),style:{background:t},className:`
    ${i?"brightness-100":"brightness-50 sLaptop:hover:brightness-[.75]"}

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
        text-[1.562rem]
        mobile:text-[2.083rem]
        sMobile:text-[3.333rem]
        mMobile:text-[4rem]
        sLaptop:text-[1.207rem]
        mLaptop:text-[1.503rem]
        desktop:text-[1.8224rem]
        largeDesktop:text-[2.278rem]
        leading-none
        w-full
        font-semibold
        `,children:e})})}),cC=k.memo(()=>{const e=qe(),t=k.useContext(Ce),{filterListRef:r,labels:n}=t;return k.useEffect(()=>{const o=i=>{const s=i.target;r.current&&!r.current.contains(s)&&e(yf())};return window.addEventListener("click",o,!0),()=>{window.removeEventListener("click",o,!0)}},[]),x.jsxs(Ev.div,{initial:{left:"100%",right:"auto"},animate:{left:"auto",right:"0px"},exit:{left:"100%",right:"auto"},transition:{duration:.15},ref:r,className:`
         flex flex-col

         absolute
        
         sLaptop:top-0

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
            `,children:"Select Filters"}),x.jsx("img",{onClick:()=>e(yf()),className:`\r
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
          `,children:Object.entries(n).map(([o,i],s)=>x.jsx(uC,{tag:o,color:i},s))})]},"modal")}),dC=k.memo(()=>{const e=W(D2),t=W(ii),r=W(L2),n=W(M2);let o;return r==="failed"?(console.log(n),o=x.jsx("div",{className:`\r
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
    `,children:"data fetching failed"})):r==="loading"?o=x.jsx("div",{className:`\r
    flex \r
    justify-center \r
    items-center\r
    flex-grow\r
    sLaptop:mt-[10.6rem]\r
    mLaptop:mt-[13.2rem]\r
    desktop:mt-[16rem]\r
    largeDesktop:mt-[20rem]\r
    `,children:x.jsx(iy,{color:"bg-SidebarGray"})}):r==="succeeded"&&(o=x.jsx(tC,{})),x.jsxs("div",{className:`
      relative

      w-full 
      bg-PrimaryWhite
      
      h-[29.296rem]
      mobile:h-[39.062rem]
      sMobile:h-[62.499rem]
      mMobile:h-[75rem]
      sLaptop:h-[25.333rem]
      mLaptop:h-[31.666rem]
      desktop:h-[38rem]
      largeDesktop:h-[47.5rem]
      4k:h-[60rem]

      pb-[0.488rem]
      mobile:pb-[0.651rem]
      sMobile:pb-[1.041rem]
      mMobile:pb-[1.25rem]
      sLaptop:pb-[0.356rem]
      mLaptop:pb-[0.445rem]
      desktop:pb-[0.534rem]
      largeDesktop:pb-[0.625rem]

      sLaptop:px-[1.667rem]
      mLaptop:px-[2.083rem]
      desktop:px-[2.5rem]
      largeDesktop:px-[3.125rems]
      
      pt-0
      sLaptop:pt-[0.719rem]
      mLaptop:pt-[0.899rem]
      desktop:pt-[1.08rem]
      largeDesktop:pt-[1.35rem]

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
    `,children:[x.jsx(Pv,{children:e&&x.jsx(cC,{})}),x.jsxs("div",{className:`\r
        relative\r
        flex-col\r
        flex-shrink-0\r
        flex-grow-0\r
        w-full\r
        `,children:[x.jsx(lC,{}),x.jsx("hr",{className:`\r
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
           `})]}),o]})}),pC=k.memo(()=>x.jsxs("div",{"data-aos":"fade","data-aos-duration":"1250","data-aos-delay":"800",className:`\r
    mockBrowser\r
    `,children:[x.jsxs("div",{className:`\r
      flex \r
      sLaptop:flex-row \r
      justify-between\r
      `,children:[x.jsx(NL,{}),x.jsx(_L,{})]}),x.jsx(dC,{})]})),fC=k.memo(()=>{const e=k.useContext(Ce),{pageRef:t}=e;return x.jsx("div",{ref:r=>{r&&(t.current.Portfolio=r)},id:"Portfolio",className:`
    block 
    bg-SiteGreen
    w-full`,children:x.jsx("div",{className:`\r
\r
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
      sLaptop:pt-[2.399rem]\r
      mLaptop:pt-[2.999rem]\r
      desktop:pt-[3.6em]\r
      largeDesktop:pt-[4.5rem]\r
\r
      pb-[0.830rem]\r
      mobile:pb-[1.106rem]\r
      sMobile:pb-[1.770rem]\r
      mMobile:pb-[2.125rem]\r
      `,children:x.jsxs("div",{className:`w-fill \r
        flex flex-col \r
\r
        sLaptop:gap-[1.667rem]\r
        mLaptop:gap-[2.083rem]\r
        desktop:gap-[2.5rem]\r
        largeDesktop:gap-[3.105rem] \r
\r
        sLaptop:px-[3.6%] \r
\r
        extra:px-0 extra:mx-auto extra:max-w-[1920px]\r
        sLaptop:pb-[1.813rem]\r
        mLaptop:pb-[2.266rem]\r
        desktop:pb-[2.72rem]\r
        largeDesktop:pb-[3.4rem]\r
        \r
        `,children:[x.jsx("h1",{"data-aos":"fade","data-aos-duration":"1250","data-aos-delay":"300",className:`\r
          px-[6.51%]\r
          sLaptop:px-0\r
          sLaptop:w-full\r
          extra:w-[1920px]\r
          sectionCSS\r
          `,children:"PORTFOLIO"}),x.jsx(pC,{})]})})})}),mC="/Newportfolio-ReactViteBuild/Olivares_Resume2024_Current.pdf",hC=k.memo(()=>x.jsx("div",{"data-aos":"slide-left","data-aos-duration":"1250","data-aos-delay":"500",className:`\r
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
            sLaptop:h-[23.429rem] \r
            mLaptop:h-[29.287rem] \r
            desktop:h-[35.144rem] \r
            largeDesktop:h-[43.931rem] \r
\r
            bg-SiteYellow`,children:x.jsx("a",{className:`\r
            w-full h-full flex items-center\r
            sLaptop:flex-none sLaptop:w-auto sLaptop:h-auto\r
            `,href:mC,download:!0,children:x.jsx("img",{className:`\r
              transition-all\r
              duration-200\r
              w-[60.26%]\r
              sLaptop:w-[18.72rem]\r
              mLaptop:w-[23.4rem]\r
              desktop:w-[28.08rem]\r
              largeDesktop:w-[35.1rem]\r
              hover:cursor-pointer\r
              hover:opacity-75\r
              `,src:r0,alt:""})})})),gC=k.memo(()=>{const e=W(js),t=W(Q0),r=[e,t].every(Boolean);return x.jsx("button",{type:"submit",disabled:!r,className:`\r
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
        `,children:"Send"})}),yC=k.memo(()=>{const e=qe(),t=W(Q0),r=W(X0);return x.jsxs(k.Fragment,{children:[x.jsxs("label",{className:"contactLabelText",htmlFor:"Message",children:["Message:",r==="message"?x.jsx("span",{className:`\r
                         font-bold\r
                         sLaptop:text-[1.06rem]\r
                         mLaptop:text-[1.32rem]\r
                         desktop:text-[1.6rem]\r
                         largeDesktop:text-[2rem] \r
                         leading-tight \r
                        `,children:"Problem in message field!"}):""]}),x.jsx("textarea",{value:t,onChange:n=>e(Z0(n.target.value)),name:"Message",id:"Message",className:`
                    ${r==="email"&&"bg-[rgba(255,148,148,1)]"}
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
                    `})]})}),vC=k.memo(()=>{const e=qe(),t=W(js),r=W(X0);return x.jsxs(k.Fragment,{children:[x.jsxs("label",{className:"contactLabelText",htmlFor:"reply_to",children:["Email:",r==="email"?x.jsx("span",{className:`\r
                         font-bold\r
                         sLaptop:text-[1.06rem]\r
                         mLaptop:text-[1.32rem]\r
                         desktop:text-[1.6rem]\r
                         largeDesktop:text-[2rem] \r
                         leading-tight \r
                        `,children:"Problem Found in the Email Field!"}):""]}),x.jsx("input",{value:t,onChange:n=>e(J0(n.target.value.trim())),name:"reply_to",id:"reply_to",type:"email",className:`
                ${r==="email"&&"bg-[rgba(255,148,148,1)]"}
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
                `,required:!0})]})});class di{constructor(t=0,r="Network Error"){this.status=t,this.text=r}}const xC=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},Le={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:xC()},Td=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},wC=(e,t="https://api.emailjs.com")=>{if(!e)return;const r=Td(e);Le.publicKey=r.publicKey,Le.blockHeadless=r.blockHeadless,Le.storageProvider=r.storageProvider,Le.blockList=r.blockList,Le.limitRate=r.limitRate,Le.origin=r.origin||t},Tv=async(e,t,r={})=>{const n=await fetch(Le.origin+e,{method:"POST",headers:r,body:t}),o=await n.text(),i=new di(n.status,o);if(n.ok)return i;throw i},Dv=(e,t,r)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||typeof r!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},kC=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Rv=e=>e.webdriver||!e.languages||e.languages.length===0,jv=()=>new di(451,"Unavailable For Headless Browser"),bC=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},SC=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},LC=(e,t)=>e instanceof FormData?e.get(t):e[t],Nv=(e,t)=>{if(SC(e))return!1;bC(e.list,e.watchVariable);const r=LC(t,e.watchVariable);return typeof r!="string"?!1:e.list.includes(r)},_v=()=>new di(403,"Forbidden"),MC=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},EC=async(e,t,r)=>{const n=Number(await r.get(e)||0);return t-Date.now()+n},Av=async(e,t,r)=>{if(!t.throttle||!r)return!1;MC(t.throttle,t.id);const n=t.id||e;return await EC(n,t.throttle,r)>0?!0:(await r.set(n,Date.now().toString()),!1)},Ov=()=>new di(429,"Too Many Requests"),CC=async(e,t,r,n)=>{const o=Td(n),i=o.publicKey||Le.publicKey,s=o.blockHeadless||Le.blockHeadless,a=Le.storageProvider||o.storageProvider,l={...Le.blockList,...o.blockList},u={...Le.limitRate,...o.limitRate};return s&&Rv(navigator)?Promise.reject(jv()):(Dv(i,e,t),kC(r),r&&Nv(l,r)?Promise.reject(_v()):await Av(location.pathname,u,a)?Promise.reject(Ov()):Tv("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:i,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"}))},PC=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},TC=e=>typeof e=="string"?document.querySelector(e):e,DC=async(e,t,r,n)=>{const o=Td(n),i=o.publicKey||Le.publicKey,s=o.blockHeadless||Le.blockHeadless,a=Le.storageProvider||o.storageProvider,l={...Le.blockList,...o.blockList},u={...Le.limitRate,...o.limitRate};if(s&&Rv(navigator))return Promise.reject(jv());const c=TC(r);Dv(i,e,t),PC(c);const d=new FormData(c);return Nv(l,d)?Promise.reject(_v()):await Av(location.pathname,u,a)?Promise.reject(Ov()):(d.append("lib_version","4.3.3"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",i),Tv("/api/v1.0/email/send-form",d))},RC={init:wC,send:CC,sendForm:DC,EmailJSResponseStatus:di},jC=k.memo(()=>{const e=qe(),t=W(js),r=W(js),n=k.useRef(null),o=i=>{if(i.preventDefault(),t.trim()===""){e(il("email"));return}if(r.trim()===""){e(il("message"));return}RC.sendForm("service_xmr60i9","template_p24aqcx",n.current,"p1fPRoGfTzwSIiheG").then(s=>{alert("Thank you for your response!"),console.log(s)}).catch(s=>{alert("Problem has occurred please try again"),console.log(s)}),e(il("none")),e(J0("")),e(Z0("")),alert("Message has been sent. Thank you!")};return x.jsxs("form",{"data-aos":"fade","data-aos-duration":"1250","data-aos-delay":"0",ref:n,onSubmit:i=>o(i),className:`flex flex-col \r
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
                  `,children:x.jsx(vC,{})}),x.jsx("div",{className:`flex flex-col\r
                  sLaptop:pr-[3.3rem]\r
                  mLaptop:pr-[4.125rem]\r
                  desktop:pr-[4.95rem]\r
                  largeDesktop:pr-[6.188rem]\r
                  sLaptop:gap-[0.667rem]\r
                  mLaptop:gap-[0.833rem]\r
                  desktop:gap-[1rem]\r
                  largeDesktop:gap-[1.25rem]\r
                  `,children:x.jsx(yC,{})}),x.jsx("div",{className:`\r
                  sLaptop:mt-[1.4rem]\r
                  mLaptop:mt-[1.75rem]\r
                  desktop:mt-[2.119rem]\r
                  largeDesktop:mt-[2.5rem]\r
                  sLaptop:pr-[1rem]\r
                  mLaptop:pr-[1.25rem]\r
                  desktop:pr-[1.5rem]\r
                  largeDesktop:pr-[1.875rem]`,children:x.jsx(gC,{})})]})}),NC="/Newportfolio-ReactViteBuild/assets/FooterMobile.svg",_C="/Newportfolio-ReactViteBuild/assets/Footer.svg",AC="/Newportfolio-ReactViteBuild/assets/character_2.svg",OC="/Newportfolio-ReactViteBuild/assets/instagram.svg",FC="/Newportfolio-ReactViteBuild/assets/linkedin.svg",VC="/Newportfolio-ReactViteBuild/assets/github.svg",BC=()=>{const e=k.useContext(Ce),{pageRef:t}=e,r=()=>{window.scrollTo({top:0,behavior:"smooth"})},n={"https://github.com/253olivares":VC,"https://www.instagram.com/carne_asada_wf/":OC,"https://www.linkedin.com/in/253olivares/":FC};return x.jsxs("footer",{ref:o=>{o&&(t.current[4]=o)},id:"Footer",className:`\r
      w-full\r
      sLaptop:flex \r
      flex-col\r
      relative\r
      z-[5]\r
      `,children:[x.jsxs("div",{className:`\r
        sLaptop:block\r
        w-full \r
        relative\r
        `,children:[x.jsx("img",{className:`\r
            w-full\r
            sLaptop:hidden\r
            `,onClick:()=>r(),src:NC,alt:"MobileFooter"}),x.jsx("img",{className:`\r
          hidden\r
          sLaptop:block\r
          sLaptop:w-[calc(100%-3.333rem)]\r
          mLaptop:w-[calc(100%-4.167rem)]\r
          desktop:w-[calc(100%-5rem)]\r
          largeDesktop:w-[calc(100%-6.25rem)]\r
          float-right`,src:_C,alt:"Footer"}),x.jsx("div",{onClick:()=>r(),className:`\r
          hidden\r
          absolute \r
          right-0 top-0 \r
          sLaptop:w-[calc(100%-3.333rem)]\r
          mLaptop:w-[calc(100%-4.167rem)]\r
          desktop:w-[calc(100%-5rem)]\r
          largeDesktop:w-[calc(100%-6.25rem)] \r
          sLaptop:flex justify-center`,children:x.jsx("p",{className:`\r
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
            text-PrimaryWhite\r
            `,children:"To Top"})})]}),x.jsx("div",{className:`\r
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
            `,src:AC,alt:"Character_2"}),x.jsx("div",{className:"flex gap-[0.769rem] mobile:gap-[1.026rem] sMobile:gap-[1.642rem] mMobile:gap-[1.97rem] sLaptop:gap-[1.5rem] mLaptop:gap-[1.875rem] desktop:gap-[2.25rem] largeDesktop:gap-[2.813rem]",children:Object.entries(n).map(([o,i],s)=>x.jsx("a",{href:o,className:"h-full",children:x.jsx("img",{className:" w-[1.108rem] mobile:w-[1.642rem] sMobile:w-[2.627rem] mMobile:w-[3.153rem] sLaptop:w-[2.125rem] mLaptop:w-[2.5rem] desktop:w-[3.125rem] largeDesktop:w-[3.75rem] cursor-pointer hover:opacity-75",src:i,alt:`svg${s}`})},s))})]})})]})},IC=k.memo(()=>{const e=k.useContext(Ce),{pageRef:t,strips:r,stripsMobile:n}=e;return x.jsxs("div",{ref:o=>{o&&(t.current.ContactMe=o)},id:"ContactMe",className:`
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
        sLaptop:pb-[7.007rem]\r
        mLaptop:pb-[8.759rem]\r
        desktop:pb-[10.512rem]\r
        largeDesktop:pb-[13.14rem]\r
        \r
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
            `,children:x.jsx(jC,{})}),x.jsx(hC,{})]})]}),x.jsx("img",{className:`\r
      absolute bottom-0 left-0\r
      z-[0]\r
      sLaptop:hidden\r
      w-full\r
      `,src:n,alt:"mobile strips"}),x.jsx("img",{className:`\r
       absolute \r
       bottom-0 left-0\r
       z-[0]\r
       hidden\r
       sLaptop:block\r
       sLaptop:w-[57.24rem]\r
       mLaptop:w-[71.28rem]\r
       desktop:w-[86.4rem]\r
       largeDesktop:w-[108rem]\r
      `,src:r,alt:"Stripes_2"}),x.jsx(BC,{})]})}),zC=k.memo(()=>{const e=qe(),t=k.useContext(Ce),{pageRef:r}=t,n=W(z2);return k.useEffect(()=>{const o=()=>{window.scrollY+window.innerHeight*.35>=r.current.ContactMe.offsetTop?(e(xn(r.current.ContactMe.id)),e(ao(""))):window.scrollY+window.innerHeight*.35>=r.current.Portfolio.offsetTop?(e(xn(r.current.Portfolio.id)),e(ao(""))):window.scrollY+window.innerHeight*.35>=r.current.AboutMe.offsetTop?(e(xn(r.current.AboutMe.id)),e(ao(""))):window.scrollY>=r.current.Home.offsetTop&&(e(xn(r.current.Home.id)),e(ao("")))};return window.addEventListener("scroll",o,!0),()=>{window.removeEventListener("scroll",o,!0)}},[]),k.useEffect(()=>{switch(n){case"Home":r.current.Home.scrollIntoView({behavior:"smooth"});break;case"About Me":r.current.AboutMe.scrollIntoView({behavior:"smooth"});break;case"Portfolio":r.current.Portfolio.scrollIntoView({behavior:"smooth"});break;case"Contact Me":r.current.ContactMe.scrollIntoView({behavior:"smooth"});break}},[n]),x.jsxs(x.Fragment,{children:[x.jsx(CL,{}),x.jsx(jL,{}),x.jsx(fC,{}),x.jsx(IC,{})]})});var Fv={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(zv,function(){return function(r){function n(i){if(o[i])return o[i].exports;var s=o[i]={exports:{},id:i,loaded:!1};return r[i].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}var o={};return n.m=r,n.c=o,n.p="dist/",n(0)}([function(r,n,o){function i(O){return O&&O.__esModule?O:{default:O}}var s=Object.assign||function(O){for(var z=1;z<arguments.length;z++){var Y=arguments[z];for(var Pe in Y)Object.prototype.hasOwnProperty.call(Y,Pe)&&(O[Pe]=Y[Pe])}return O},a=o(1),l=(i(a),o(6)),u=i(l),c=o(7),d=i(c),p=o(8),y=i(p),m=o(9),v=i(m),w=o(10),h=i(w),f=o(11),g=i(f),b=o(14),L=i(b),M=[],P=!1,S={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},_=function(){var O=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(O&&(P=!0),P)return M=(0,g.default)(M,S),(0,h.default)(M,S.once),M},N=function(){M=(0,L.default)(),_()},R=function(){M.forEach(function(O,z){O.node.removeAttribute("data-aos"),O.node.removeAttribute("data-aos-easing"),O.node.removeAttribute("data-aos-duration"),O.node.removeAttribute("data-aos-delay")})},D=function(O){return O===!0||O==="mobile"&&v.default.mobile()||O==="phone"&&v.default.phone()||O==="tablet"&&v.default.tablet()||typeof O=="function"&&O()===!0},B=function(O){S=s(S,O),M=(0,L.default)();var z=document.all&&!window.atob;return D(S.disable)||z?R():(S.disableMutationObserver||y.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),S.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",S.easing),document.querySelector("body").setAttribute("data-aos-duration",S.duration),document.querySelector("body").setAttribute("data-aos-delay",S.delay),S.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?_(!0):S.startEvent==="load"?window.addEventListener(S.startEvent,function(){_(!0)}):document.addEventListener(S.startEvent,function(){_(!0)}),window.addEventListener("resize",(0,d.default)(_,S.debounceDelay,!0)),window.addEventListener("orientationchange",(0,d.default)(_,S.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,h.default)(M,S.once)},S.throttleDelay)),S.disableMutationObserver||y.default.ready("[data-aos]",N),M)};r.exports={init:B,refresh:_,refreshHard:N}},function(r,n){},,,,,function(r,n){(function(o){function i(D,B,O){function z(K){var Ue=ce,Zt=ze;return ce=ze=void 0,Xt=K,ie=D.apply(Zt,Ue)}function Y(K){return Xt=K,me=setTimeout(F,B),Jt?z(K):ie}function Pe(K){var Ue=K-Qe,Zt=K-Xt,Dd=B-Ue;return jt?N(Dd,ye-Zt):Dd}function T(K){var Ue=K-Qe,Zt=K-Xt;return Qe===void 0||Ue>=B||Ue<0||jt&&Zt>=ye}function F(){var K=R();return T(K)?V(K):void(me=setTimeout(F,Pe(K)))}function V(K){return me=void 0,ee&&ce?z(K):(ce=ze=void 0,ie)}function q(){me!==void 0&&clearTimeout(me),Xt=0,ce=Qe=ze=me=void 0}function J(){return me===void 0?ie:V(R())}function Oe(){var K=R(),Ue=T(K);if(ce=arguments,ze=this,Qe=K,Ue){if(me===void 0)return Y(Qe);if(jt)return me=setTimeout(F,B),z(Qe)}return me===void 0&&(me=setTimeout(F,B)),ie}var ce,ze,ye,ie,me,Qe,Xt=0,Jt=!1,jt=!1,ee=!0;if(typeof D!="function")throw new TypeError(p);return B=c(B)||0,a(O)&&(Jt=!!O.leading,jt="maxWait"in O,ye=jt?_(c(O.maxWait)||0,B):ye,ee="trailing"in O?!!O.trailing:ee),Oe.cancel=q,Oe.flush=J,Oe}function s(D,B,O){var z=!0,Y=!0;if(typeof D!="function")throw new TypeError(p);return a(O)&&(z="leading"in O?!!O.leading:z,Y="trailing"in O?!!O.trailing:Y),i(D,B,{leading:z,maxWait:B,trailing:Y})}function a(D){var B=typeof D>"u"?"undefined":d(D);return!!D&&(B=="object"||B=="function")}function l(D){return!!D&&(typeof D>"u"?"undefined":d(D))=="object"}function u(D){return(typeof D>"u"?"undefined":d(D))=="symbol"||l(D)&&S.call(D)==m}function c(D){if(typeof D=="number")return D;if(u(D))return y;if(a(D)){var B=typeof D.valueOf=="function"?D.valueOf():D;D=a(B)?B+"":B}if(typeof D!="string")return D===0?D:+D;D=D.replace(v,"");var O=h.test(D);return O||f.test(D)?g(D.slice(2),O?2:8):w.test(D)?y:+D}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},p="Expected a function",y=NaN,m="[object Symbol]",v=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,f=/^0o[0-7]+$/i,g=parseInt,b=(typeof o>"u"?"undefined":d(o))=="object"&&o&&o.Object===Object&&o,L=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,M=b||L||Function("return this")(),P=Object.prototype,S=P.toString,_=Math.max,N=Math.min,R=function(){return M.Date.now()};r.exports=s}).call(n,function(){return this}())},function(r,n){(function(o){function i(R,D,B){function O(ee){var K=Oe,Ue=ce;return Oe=ce=void 0,Qe=ee,ye=R.apply(Ue,K)}function z(ee){return Qe=ee,ie=setTimeout(T,D),Xt?O(ee):ye}function Y(ee){var K=ee-me,Ue=ee-Qe,Zt=D-K;return Jt?_(Zt,ze-Ue):Zt}function Pe(ee){var K=ee-me,Ue=ee-Qe;return me===void 0||K>=D||K<0||Jt&&Ue>=ze}function T(){var ee=N();return Pe(ee)?F(ee):void(ie=setTimeout(T,Y(ee)))}function F(ee){return ie=void 0,jt&&Oe?O(ee):(Oe=ce=void 0,ye)}function V(){ie!==void 0&&clearTimeout(ie),Qe=0,Oe=me=ce=ie=void 0}function q(){return ie===void 0?ye:F(N())}function J(){var ee=N(),K=Pe(ee);if(Oe=arguments,ce=this,me=ee,K){if(ie===void 0)return z(me);if(Jt)return ie=setTimeout(T,D),O(me)}return ie===void 0&&(ie=setTimeout(T,D)),ye}var Oe,ce,ze,ye,ie,me,Qe=0,Xt=!1,Jt=!1,jt=!0;if(typeof R!="function")throw new TypeError(d);return D=u(D)||0,s(B)&&(Xt=!!B.leading,Jt="maxWait"in B,ze=Jt?S(u(B.maxWait)||0,D):ze,jt="trailing"in B?!!B.trailing:jt),J.cancel=V,J.flush=q,J}function s(R){var D=typeof R>"u"?"undefined":c(R);return!!R&&(D=="object"||D=="function")}function a(R){return!!R&&(typeof R>"u"?"undefined":c(R))=="object"}function l(R){return(typeof R>"u"?"undefined":c(R))=="symbol"||a(R)&&P.call(R)==y}function u(R){if(typeof R=="number")return R;if(l(R))return p;if(s(R)){var D=typeof R.valueOf=="function"?R.valueOf():R;R=s(D)?D+"":D}if(typeof R!="string")return R===0?R:+R;R=R.replace(m,"");var B=w.test(R);return B||h.test(R)?f(R.slice(2),B?2:8):v.test(R)?p:+R}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},d="Expected a function",p=NaN,y="[object Symbol]",m=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,h=/^0o[0-7]+$/i,f=parseInt,g=(typeof o>"u"?"undefined":c(o))=="object"&&o&&o.Object===Object&&o,b=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,L=g||b||Function("return this")(),M=Object.prototype,P=M.toString,S=Math.max,_=Math.min,N=function(){return L.Date.now()};r.exports=i}).call(n,function(){return this}())},function(r,n){function o(c){var d=void 0,p=void 0;for(d=0;d<c.length;d+=1)if(p=c[d],p.dataset&&p.dataset.aos||p.children&&o(p.children))return!0;return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function s(){return!!i()}function a(c,d){var p=window.document,y=i(),m=new y(l);u=d,m.observe(p.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(c){c&&c.forEach(function(d){var p=Array.prototype.slice.call(d.addedNodes),y=Array.prototype.slice.call(d.removedNodes),m=p.concat(y);if(o(m))return u()})}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){};n.default={isSupported:s,ready:a}},function(r,n){function o(p,y){if(!(p instanceof y))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function p(y,m){for(var v=0;v<m.length;v++){var w=m[v];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(y,w.key,w)}}return function(y,m,v){return m&&p(y.prototype,m),v&&p(y,v),y}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=function(){function p(){o(this,p)}return s(p,[{key:"phone",value:function(){var y=i();return!(!a.test(y)&&!l.test(y.substr(0,4)))}},{key:"mobile",value:function(){var y=i();return!(!u.test(y)&&!c.test(y.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),p}();n.default=new d},function(r,n){Object.defineProperty(n,"__esModule",{value:!0});var o=function(s,a,l){var u=s.node.getAttribute("data-aos-once");a>s.position?s.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!l&&u!=="true")&&s.node.classList.remove("aos-animate")},i=function(s,a){var l=window.pageYOffset,u=window.innerHeight;s.forEach(function(c,d){o(c,u+l,a)})};n.default=i},function(r,n,o){function i(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(n,"__esModule",{value:!0});var s=o(12),a=i(s),l=function(u,c){return u.forEach(function(d,p){d.node.classList.add("aos-init"),d.position=(0,a.default)(d.node,c.offset)}),u};n.default=l},function(r,n,o){function i(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(n,"__esModule",{value:!0});var s=o(13),a=i(s),l=function(u,c){var d=0,p=0,y=window.innerHeight,m={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(m.offset&&!isNaN(m.offset)&&(p=parseInt(m.offset)),m.anchor&&document.querySelectorAll(m.anchor)&&(u=document.querySelectorAll(m.anchor)[0]),d=(0,a.default)(u).top,m.anchorPlacement){case"top-bottom":break;case"center-bottom":d+=u.offsetHeight/2;break;case"bottom-bottom":d+=u.offsetHeight;break;case"top-center":d+=y/2;break;case"bottom-center":d+=y/2+u.offsetHeight;break;case"center-center":d+=y/2+u.offsetHeight/2;break;case"top-top":d+=y;break;case"bottom-top":d+=u.offsetHeight+y;break;case"center-top":d+=u.offsetHeight/2+y}return m.anchorPlacement||m.offset||isNaN(c)||(p=c),d+p};n.default=l},function(r,n){Object.defineProperty(n,"__esModule",{value:!0});var o=function(i){for(var s=0,a=0;i&&!isNaN(i.offsetLeft)&&!isNaN(i.offsetTop);)s+=i.offsetLeft-(i.tagName!="BODY"?i.scrollLeft:0),a+=i.offsetTop-(i.tagName!="BODY"?i.scrollTop:0),i=i.offsetParent;return{top:a,left:s}};n.default=o},function(r,n){Object.defineProperty(n,"__esModule",{value:!0});var o=function(i){return i=i||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(i,function(s){return{node:s}})};n.default=o}])})})(Fv);var UC=Fv.exports;const $C=Pm(UC),WC=()=>(k.useEffect(()=>{$C.init({once:!0,easing:"ease-out-cubic"});const e=Ns.dispatch(qi()),t=Ns.dispatch(wo());return()=>{t.abort(),e.abort()}},[]),x.jsx(k.Fragment,{children:x.jsx(Bk,{children:x.jsx(e0,{children:x.jsxs(xo,{path:"Newportfolio-ReactViteBuild/",element:x.jsx(SL,{}),children:[x.jsx(xo,{index:!0,element:x.jsx(zC,{})}),x.jsx(xo,{path:"*",element:x.jsx(vL,{})})]})})})}));kl.createRoot(document.getElementById("root")).render(x.jsx(k.StrictMode,{children:x.jsx(mL,{store:Ns,children:x.jsx(dk,{children:x.jsx(e0,{children:x.jsx(xo,{path:"/*",element:x.jsx(WC,{})})})})})}));
