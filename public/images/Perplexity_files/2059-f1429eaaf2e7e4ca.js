!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="817ae5af-1441-458d-b984-f02fe89a860d",e._sentryDebugIdIdentifier="sentry-dbid-817ae5af-1441-458d-b984-f02fe89a860d")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2059],{69150:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="xmark",r=[128473,10005,10006,10060,215,"close","multiply","remove","times"],o="f00d",i="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z";t.definition={prefix:"far",iconName:n,icon:[384,512,r,o,i]},t.faXmark=t.definition,t.prefix="far",t.iconName=n,t.width=384,t.height=512,t.ligatures=r,t.unicode=o,t.svgPathData=i,t.aliases=r},59487:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,i){try{return function e(i,a){if(i===a)return!0;if(i&&a&&"object"==typeof i&&"object"==typeof a){var c,s,u,f;if(i.constructor!==a.constructor)return!1;if(Array.isArray(i)){if((c=i.length)!=a.length)return!1;for(s=c;0!=s--;)if(!e(i[s],a[s]))return!1;return!0}if(n&&i instanceof Map&&a instanceof Map){if(i.size!==a.size)return!1;for(f=i.entries();!(s=f.next()).done;)if(!a.has(s.value[0]))return!1;for(f=i.entries();!(s=f.next()).done;)if(!e(s.value[1],a.get(s.value[0])))return!1;return!0}if(r&&i instanceof Set&&a instanceof Set){if(i.size!==a.size)return!1;for(f=i.entries();!(s=f.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(i)&&ArrayBuffer.isView(a)){if((c=i.length)!=a.length)return!1;for(s=c;0!=s--;)if(i[s]!==a[s])return!1;return!0}if(i.constructor===RegExp)return i.source===a.source&&i.flags===a.flags;if(i.valueOf!==Object.prototype.valueOf&&"function"==typeof i.valueOf&&"function"==typeof a.valueOf)return i.valueOf()===a.valueOf();if(i.toString!==Object.prototype.toString&&"function"==typeof i.toString&&"function"==typeof a.toString)return i.toString()===a.toString();if((c=(u=Object.keys(i)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,u[s]))return!1;if(t&&i instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!i.$$typeof)&&!e(i[u[s]],a[u[s]]))return!1;return!0}return i!=i&&a!=a}(e,i)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},74158:function(e,t,n){"use strict";n.d(t,{D:function(){return eg}});var r,o,i,a,c,s=n(78558),u=n(53283);function f(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function l(e){var t=f(e).Element;return e instanceof t||e instanceof Element}function d(e){var t=f(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function p(e){if("undefined"==typeof ShadowRoot)return!1;var t=f(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var h=Math.max,m=Math.min,v=Math.round;function g(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function y(){return!/^((?!chrome|android).)*safari/i.test(g())}function b(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&d(e)&&(o=e.offsetWidth>0&&v(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&v(r.height)/e.offsetHeight||1);var a=(l(e)?f(e):window).visualViewport,c=!y()&&n,s=(r.left+(c&&a?a.offsetLeft:0))/o,u=(r.top+(c&&a?a.offsetTop:0))/i,p=r.width/o,h=r.height/i;return{width:p,height:h,top:u,right:s+p,bottom:u+h,left:s,x:s,y:u}}function w(e){var t=f(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function x(e){return e?(e.nodeName||"").toLowerCase():null}function O(e){return((l(e)?e.ownerDocument:e.document)||window.document).documentElement}function E(e){return b(O(e)).left+w(e).scrollLeft}function S(e){return f(e).getComputedStyle(e)}function k(e){var t=S(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function j(e){var t=b(e),n=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-r)&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function M(e){return"html"===x(e)?e:e.assignedSlot||e.parentNode||(p(e)?e.host:null)||O(e)}function L(e,t){void 0===t&&(t=[]);var n,r=function e(t){return["html","body","#document"].indexOf(x(t))>=0?t.ownerDocument.body:d(t)&&k(t)?t:e(M(t))}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=f(r),a=o?[i].concat(i.visualViewport||[],k(r)?r:[]):r,c=t.concat(a);return o?c:c.concat(L(M(a)))}function A(e){return d(e)&&"fixed"!==S(e).position?e.offsetParent:null}function C(e){for(var t=f(e),n=A(e);n&&["table","td","th"].indexOf(x(n))>=0&&"static"===S(n).position;)n=A(n);return n&&("html"===x(n)||"body"===x(n)&&"static"===S(n).position)?t:n||function(e){var t=/firefox/i.test(g());if(/Trident/i.test(g())&&d(e)&&"fixed"===S(e).position)return null;var n=M(e);for(p(n)&&(n=n.host);d(n)&&0>["html","body"].indexOf(x(n));){var r=S(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var D="bottom",R="right",P="left",T="auto",W=["top",D,R,P],B="start",N="viewport",_="popper",H=W.reduce(function(e,t){return e.concat([t+"-"+B,t+"-end"])},[]),F=[].concat(W,[T]).reduce(function(e,t){return e.concat([t,t+"-"+B,t+"-end"])},[]),I=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],z={placement:"bottom",modifiers:[],strategy:"absolute"};function V(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var q={passive:!0};function U(e){return e.split("-")[0]}function X(e){return e.split("-")[1]}function Y(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Z(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?U(o):null,a=o?X(o):null,c=n.x+n.width/2-r.width/2,s=n.y+n.height/2-r.height/2;switch(i){case"top":t={x:c,y:n.y-r.height};break;case D:t={x:c,y:n.y+n.height};break;case R:t={x:n.x+n.width,y:s};break;case P:t={x:n.x-r.width,y:s};break;default:t={x:n.x,y:n.y}}var u=i?Y(i):null;if(null!=u){var f="y"===u?"height":"width";switch(a){case B:t[u]=t[u]-(n[f]/2-r[f]/2);break;case"end":t[u]=t[u]+(n[f]/2-r[f]/2)}}return t}var $={top:"auto",right:"auto",bottom:"auto",left:"auto"};function G(e){var t,n,r,o,i,a,c,s=e.popper,u=e.popperRect,l=e.placement,d=e.variation,p=e.offsets,h=e.position,m=e.gpuAcceleration,g=e.adaptive,y=e.roundOffsets,b=e.isFixed,w=p.x,x=void 0===w?0:w,E=p.y,k=void 0===E?0:E,j="function"==typeof y?y({x:x,y:k}):{x:x,y:k};x=j.x,k=j.y;var M=p.hasOwnProperty("x"),L=p.hasOwnProperty("y"),A=P,T="top",W=window;if(g){var B=C(s),N="clientHeight",_="clientWidth";B===f(s)&&"static"!==S(B=O(s)).position&&"absolute"===h&&(N="scrollHeight",_="scrollWidth"),("top"===l||(l===P||l===R)&&"end"===d)&&(T=D,k-=(b&&B===W&&W.visualViewport?W.visualViewport.height:B[N])-u.height,k*=m?1:-1),(l===P||("top"===l||l===D)&&"end"===d)&&(A=R,x-=(b&&B===W&&W.visualViewport?W.visualViewport.width:B[_])-u.width,x*=m?1:-1)}var H=Object.assign({position:h},g&&$),F=!0===y?(t={x:x,y:k},n=f(s),r=t.x,o=t.y,{x:v(r*(i=n.devicePixelRatio||1))/i||0,y:v(o*i)/i||0}):{x:x,y:k};return(x=F.x,k=F.y,m)?Object.assign({},H,((c={})[T]=L?"0":"",c[A]=M?"0":"",c.transform=1>=(W.devicePixelRatio||1)?"translate("+x+"px, "+k+"px)":"translate3d("+x+"px, "+k+"px, 0)",c)):Object.assign({},H,((a={})[T]=L?k+"px":"",a[A]=M?x+"px":"",a.transform="",a))}var J={left:"right",right:"left",bottom:"top",top:"bottom"};function K(e){return e.replace(/left|right|bottom|top/g,function(e){return J[e]})}var Q={start:"end",end:"start"};function ee(e){return e.replace(/start|end/g,function(e){return Q[e]})}function et(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&p(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function en(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function er(e,t,n){var r,o,i,a,c,s,u,d,p,m;return t===N?en(function(e,t){var n=f(e),r=O(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,c=0,s=0;if(o){i=o.width,a=o.height;var u=y();(u||!u&&"fixed"===t)&&(c=o.offsetLeft,s=o.offsetTop)}return{width:i,height:a,x:c+E(e),y:s}}(e,n)):l(t)?((r=b(t,!1,"fixed"===n)).top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r):en((o=O(e),a=O(o),c=w(o),s=null==(i=o.ownerDocument)?void 0:i.body,u=h(a.scrollWidth,a.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),d=h(a.scrollHeight,a.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),p=-c.scrollLeft+E(o),m=-c.scrollTop,"rtl"===S(s||a).direction&&(p+=h(a.clientWidth,s?s.clientWidth:0)-u),{width:u,height:d,x:p,y:m}))}function eo(){return{top:0,right:0,bottom:0,left:0}}function ei(e){return Object.assign({},eo(),e)}function ea(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}function ec(e,t){void 0===t&&(t={});var n,r,o,i,a,c,s,u=t,f=u.placement,p=void 0===f?e.placement:f,v=u.strategy,g=void 0===v?e.strategy:v,y=u.boundary,w=u.rootBoundary,E=u.elementContext,k=void 0===E?_:E,j=u.altBoundary,A=u.padding,P=void 0===A?0:A,T=ei("number"!=typeof P?P:ea(P,W)),B=e.rects.popper,H=e.elements[void 0!==j&&j?k===_?"reference":_:k],F=(n=l(H)?H:H.contextElement||O(e.elements.popper),c=(a=[].concat("clippingParents"===(r=void 0===y?"clippingParents":y)?(o=L(M(n)),l(i=["absolute","fixed"].indexOf(S(n).position)>=0&&d(n)?C(n):n)?o.filter(function(e){return l(e)&&et(e,i)&&"body"!==x(e)}):[]):[].concat(r),[void 0===w?N:w]))[0],(s=a.reduce(function(e,t){var r=er(n,t,g);return e.top=h(r.top,e.top),e.right=m(r.right,e.right),e.bottom=m(r.bottom,e.bottom),e.left=h(r.left,e.left),e},er(n,c,g))).width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s),I=b(e.elements.reference),z=Z({reference:I,element:B,strategy:"absolute",placement:p}),V=en(Object.assign({},B,z)),q=k===_?V:I,U={top:F.top-q.top+T.top,bottom:q.bottom-F.bottom+T.bottom,left:F.left-q.left+T.left,right:q.right-F.right+T.right},X=e.modifiersData.offset;if(k===_&&X){var Y=X[p];Object.keys(U).forEach(function(e){var t=[R,D].indexOf(e)>=0?1:-1,n=["top",D].indexOf(e)>=0?"y":"x";U[e]+=Y[n]*t})}return U}function es(e,t,n){return h(e,m(t,n))}function eu(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ef(e){return["top",R,D,P].some(function(t){return e[t]>=0})}var el=(i=void 0===(o=(r={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,c=void 0===a||a,s=f(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(e){e.addEventListener("scroll",n.update,q)}),c&&s.addEventListener("resize",n.update,q),function(){i&&u.forEach(function(e){e.removeEventListener("scroll",n.update,q)}),c&&s.removeEventListener("resize",n.update,q)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Z({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=n.adaptive,i=n.roundOffsets,a=void 0===i||i,c={placement:U(t.placement),variation:X(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,G(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,G(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];d(o)&&x(o)&&(Object.assign(o.style,n),Object.keys(r).forEach(function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});d(r)&&x(r)&&(Object.assign(r.style,i),Object.keys(o).forEach(function(e){r.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=F.reduce(function(e,n){var r,o,a,c,s,u;return e[n]=(r=t.rects,a=[P,"top"].indexOf(o=U(n))>=0?-1:1,s=(c="function"==typeof i?i(Object.assign({},r,{placement:n})):i)[0],u=c[1],s=s||0,u=(u||0)*a,[P,R].indexOf(o)>=0?{x:u,y:s}:{x:s,y:u}),e},{}),c=a[t.placement],s=c.x,u=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,c=void 0===a||a,s=n.fallbackPlacements,u=n.padding,f=n.boundary,l=n.rootBoundary,d=n.altBoundary,p=n.flipVariations,h=void 0===p||p,m=n.allowedAutoPlacements,v=t.options.placement,g=U(v)===v,y=s||(g||!h?[K(v)]:function(e){if(U(e)===T)return[];var t=K(e);return[ee(e),t,ee(t)]}(v)),b=[v].concat(y).reduce(function(e,n){var r,o,i,a,c,s,d,p,v,g,y,b;return e.concat(U(n)===T?(o=(r={placement:n,boundary:f,rootBoundary:l,padding:u,flipVariations:h,allowedAutoPlacements:m}).placement,i=r.boundary,a=r.rootBoundary,c=r.padding,s=r.flipVariations,p=void 0===(d=r.allowedAutoPlacements)?F:d,0===(y=(g=(v=X(o))?s?H:H.filter(function(e){return X(e)===v}):W).filter(function(e){return p.indexOf(e)>=0})).length&&(y=g),Object.keys(b=y.reduce(function(e,n){return e[n]=ec(t,{placement:n,boundary:i,rootBoundary:a,padding:c})[U(n)],e},{})).sort(function(e,t){return b[e]-b[t]})):n)},[]),w=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,S=b[0],k=0;k<b.length;k++){var j=b[k],M=U(j),L=X(j)===B,A=["top",D].indexOf(M)>=0,C=A?"width":"height",N=ec(t,{placement:j,boundary:f,rootBoundary:l,altBoundary:d,padding:u}),_=A?L?R:P:L?D:"top";w[C]>x[C]&&(_=K(_));var I=K(_),z=[];if(i&&z.push(N[M]<=0),c&&z.push(N[_]<=0,N[I]<=0),z.every(function(e){return e})){S=j,E=!1;break}O.set(j,z)}if(E)for(var V=h?3:1,q=function(e){var t=b.find(function(t){var n=O.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return S=t,"break"},Y=V;Y>0&&"break"!==q(Y);Y--);t.placement!==S&&(t.modifiersData[r]._skip=!0,t.placement=S,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=n.altAxis,a=n.boundary,c=n.rootBoundary,s=n.altBoundary,u=n.padding,f=n.tether,l=void 0===f||f,d=n.tetherOffset,p=void 0===d?0:d,v=ec(t,{boundary:a,rootBoundary:c,padding:u,altBoundary:s}),g=U(t.placement),y=X(t.placement),b=!y,w=Y(g),x="x"===w?"y":"x",O=t.modifiersData.popperOffsets,E=t.rects.reference,S=t.rects.popper,k="function"==typeof p?p(Object.assign({},t.rects,{placement:t.placement})):p,M="number"==typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,A={x:0,y:0};if(O){if(void 0===o||o){var T,W="y"===w?"top":P,N="y"===w?D:R,_="y"===w?"height":"width",H=O[w],F=H+v[W],I=H-v[N],z=l?-S[_]/2:0,V=y===B?E[_]:S[_],q=y===B?-S[_]:-E[_],Z=t.elements.arrow,$=l&&Z?j(Z):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:eo(),J=G[W],K=G[N],Q=es(0,E[_],$[_]),ee=b?E[_]/2-z-Q-J-M.mainAxis:V-Q-J-M.mainAxis,et=b?-E[_]/2+z+Q+K+M.mainAxis:q+Q+K+M.mainAxis,en=t.elements.arrow&&C(t.elements.arrow),er=en?"y"===w?en.clientTop||0:en.clientLeft||0:0,ei=null!=(T=null==L?void 0:L[w])?T:0,ea=es(l?m(F,H+ee-ei-er):F,H,l?h(I,H+et-ei):I);O[w]=ea,A[w]=ea-H}if(void 0!==i&&i){var eu,ef,el="x"===w?"top":P,ed="x"===w?D:R,ep=O[x],eh="y"===x?"height":"width",em=ep+v[el],ev=ep-v[ed],eg=-1!==["top",P].indexOf(g),ey=null!=(ef=null==L?void 0:L[x])?ef:0,eb=eg?em:ep-E[eh]-S[eh]-ey+M.altAxis,ew=eg?ep+E[eh]+S[eh]-ey-M.altAxis:ev,ex=l&&eg?(eu=es(eb,ep,ew))>ew?ew:eu:es(l?eb:em,ep,l?ew:ev);O[x]=ex,A[x]=ex-ep}t.modifiersData[r]=A}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,r=e.state,o=e.name,i=e.options,a=r.elements.arrow,c=r.modifiersData.popperOffsets,s=U(r.placement),u=Y(s),f=[P,R].indexOf(s)>=0?"height":"width";if(a&&c){var l=ei("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:ea(t,W)),d=j(a),p="y"===u?"top":P,h="y"===u?D:R,m=r.rects.reference[f]+r.rects.reference[u]-c[u]-r.rects.popper[f],v=c[u]-r.rects.reference[u],g=C(a),y=g?"y"===u?g.clientHeight||0:g.clientWidth||0:0,b=l[p],w=y-d[f]-l[h],x=y/2-d[f]/2+(m/2-v/2),O=es(b,x,w);r.modifiersData[o]=((n={})[u]=O,n.centerOffset=O-x,n)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&et(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ec(t,{elementContext:"reference"}),c=ec(t,{altBoundary:!0}),s=eu(a,r),u=eu(c,o,i),f=ef(s),l=ef(u);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}}]}).defaultModifiers)?[]:o,c=void 0===(a=r.defaultOptions)?z:a,function(e,t,n){void 0===n&&(n=c);var r,o={placement:"bottom",orderedModifiers:[],options:Object.assign({},z,c),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,u={state:o,setOptions:function(n){var r,s,f,d,h,m="function"==typeof n?n(o.options):n;p(),o.options=Object.assign({},c,o.options,m),o.scrollParents={reference:l(e)?L(e):e.contextElement?L(e.contextElement):[],popper:L(t)};var v=(s=Object.keys(r=[].concat(i,o.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),f=new Map,d=new Set,h=[],s.forEach(function(e){f.set(e.name,e)}),s.forEach(function(e){d.has(e.name)||function e(t){d.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!d.has(t)){var n=f.get(t);n&&e(n)}}),h.push(t)}(e)}),I.reduce(function(e,t){return e.concat(h.filter(function(e){return e.phase===t}))},[]));return o.orderedModifiers=v.filter(function(e){return e.enabled}),o.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=e.effect;if("function"==typeof r){var i=r({state:o,name:t,instance:u,options:void 0===n?{}:n});a.push(i||function(){})}}),u.update()},forceUpdate:function(){if(!s){var e,t,n,r,i,a,c,l,p,h,m,g,y=o.elements,S=y.reference,M=y.popper;if(V(S,M)){;o.rects={reference:(t=C(M),n="fixed"===o.options.strategy,r=d(t),l=d(t)&&(a=v((i=t.getBoundingClientRect()).width)/t.offsetWidth||1,c=v(i.height)/t.offsetHeight||1,1!==a||1!==c),p=O(t),h=b(S,l,n),m={scrollLeft:0,scrollTop:0},g={x:0,y:0},(r||!r&&!n)&&(("body"!==x(t)||k(p))&&(m=(e=t)!==f(e)&&d(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:w(e)),d(t)?(g=b(t,!0),g.x+=t.clientLeft,g.y+=t.clientTop):p&&(g.x=E(p))),{x:h.left+m.scrollLeft-g.x,y:h.top+m.scrollTop-g.y,width:h.width,height:h.height}),popper:j(M)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach(function(e){return o.modifiersData[e.name]=Object.assign({},e.data)});for(var L=0;L<o.orderedModifiers.length;L++){if(!0===o.reset){o.reset=!1,L=-1;continue}var A=o.orderedModifiers[L],D=A.fn,R=A.options,P=void 0===R?{}:R,T=A.name;"function"==typeof D&&(o=D({state:o,options:P,name:T,instance:u})||o)}}}},update:function(){return r||(r=new Promise(function(e){Promise.resolve().then(function(){r=void 0,e(new Promise(function(e){u.forceUpdate(),e(o)}))})})),r},destroy:function(){p(),s=!0}};if(!V(e,t))return u;function p(){a.forEach(function(e){return e()}),a=[]}return u.setOptions(n).then(function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)}),u}),ed=n(59487),ep=n.n(ed),eh=function(e){return e.reduce(function(e,t){var n=t[0],r=t[1];return e[n]=r,e},{})},em="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect,ev=[],eg=function(e,t,n){void 0===n&&(n={});var r=s.useRef(null),o={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||ev},i=s.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=i[0],c=i[1],f=s.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);u.flushSync(function(){c({styles:eh(n.map(function(e){return[e,t.styles[e]||{}]})),attributes:eh(n.map(function(e){return[e,t.attributes[e]]}))})})},requires:["computeStyles"]}},[]),l=s.useMemo(function(){var e={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[f,{name:"applyStyles",enabled:!1}])};return ep()(r.current,e)?r.current||e:(r.current=e,e)},[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,f]),d=s.useRef();return em(function(){d.current&&d.current.setOptions(l)},[l]),em(function(){if(null!=e&&null!=t){var r=(n.createPopper||el)(e,t,l);return d.current=r,function(){r.destroy(),d.current=null}}},[e,t,n.createPopper]),{state:d.current?d.current.state:null,styles:a.styles,attributes:a.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}}},85861:function(e,t,n){"use strict";n.d(t,{Av:function(){return a},pF:function(){return r},xv:function(){return i},zi:function(){return o}});var r="right-scroll-bar-position",o="width-before-scroll-bar",i="with-scroll-bars-hidden",a="--removed-body-scroll-bar-size"},53641:function(e,t,n){"use strict";n.d(t,{jp:function(){return m}});var r=n(78558),o=n(28128),i=n(85861),a={left:0,top:0,right:0,gap:0},c=function(e){return parseInt(e||"",10)||0},s=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[c(n),c(r),c(o)]},u=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return a;var t=s(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},f=(0,o.Ws)(),l="data-scroll-locked",d=function(e,t,n,r){var o=e.left,a=e.top,c=e.right,s=e.gap;return void 0===n&&(n="margin"),"\n  .".concat(i.xv," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(s,"px ").concat(r,";\n  }\n  body[").concat(l,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(c,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(i.pF," {\n    right: ").concat(s,"px ").concat(r,";\n  }\n  \n  .").concat(i.zi," {\n    margin-right: ").concat(s,"px ").concat(r,";\n  }\n  \n  .").concat(i.pF," .").concat(i.pF," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(i.zi," .").concat(i.zi," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(l,"] {\n    ").concat(i.Av,": ").concat(s,"px;\n  }\n")},p=function(){var e=parseInt(document.body.getAttribute(l)||"0",10);return isFinite(e)?e:0},h=function(){r.useEffect(function(){return document.body.setAttribute(l,(p()+1).toString()),function(){var e=p()-1;e<=0?document.body.removeAttribute(l):document.body.setAttribute(l,e.toString())}},[])},m=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,i=void 0===o?"margin":o;h();var a=r.useMemo(function(){return u(i)},[i]);return r.createElement(f,{styles:d(a,!t,i,n?"":"!important")})}},20392:function(e,t,n){"use strict";n.d(t,{Z:function(){return L}});var r=n(4815),o=n(78558),i=n(85861),a=n(42386),c=(0,n(16437)._)(),s=function(){},u=o.forwardRef(function(e,t){var n=o.useRef(null),i=o.useState({onScrollCapture:s,onWheelCapture:s,onTouchMoveCapture:s}),u=i[0],f=i[1],l=e.forwardProps,d=e.children,p=e.className,h=e.removeScrollBar,m=e.enabled,v=e.shards,g=e.sideCar,y=e.noIsolation,b=e.inert,w=e.allowPinchZoom,x=e.as,O=e.gapMode,E=(0,r._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),S=(0,a.q)([n,t]),k=(0,r.pi)((0,r.pi)({},E),u);return o.createElement(o.Fragment,null,m&&o.createElement(g,{sideCar:c,removeScrollBar:h,shards:v,noIsolation:y,inert:b,setCallbacks:f,allowPinchZoom:!!w,lockRef:n,gapMode:O}),l?o.cloneElement(o.Children.only(d),(0,r.pi)((0,r.pi)({},k),{ref:S})):o.createElement(void 0===x?"div":x,(0,r.pi)({},k,{className:p,ref:S}),d))});u.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},u.classNames={fullWidth:i.zi,zeroRight:i.pF};var f=n(78175),l=n(53641),d=n(28128),p=!1;if("undefined"!=typeof window)try{var h=Object.defineProperty({},"passive",{get:function(){return p=!0,!0}});window.addEventListener("test",h,h),window.removeEventListener("test",h,h)}catch(e){p=!1}var m=!!p&&{passive:!1},v=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},g=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),y(e,r)){var o=b(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},y=function(e,t){return"v"===e?v(t,"overflowY"):v(t,"overflowX")},b=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},w=function(e,t,n,r,o){var i,a=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),c=a*r,s=n.target,u=t.contains(s),f=!1,l=c>0,d=0,p=0;do{var h=b(e,s),m=h[0],v=h[1]-h[2]-a*m;(m||v)&&y(e,s)&&(d+=v,p+=m),s=s instanceof ShadowRoot?s.host:s.parentNode}while(!u&&s!==document.body||u&&(t.contains(s)||t===s));return l&&(o&&1>Math.abs(d)||!o&&c>d)?f=!0:!l&&(o&&1>Math.abs(p)||!o&&-c>p)&&(f=!0),f},x=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},O=function(e){return[e.deltaX,e.deltaY]},E=function(e){return e&&"current"in e?e.current:e},S=0,k=[],j=(0,f.L)(c,function(e){var t=o.useRef([]),n=o.useRef([0,0]),i=o.useRef(),a=o.useState(S++)[0],c=o.useState(d.Ws)[0],s=o.useRef(e);o.useEffect(function(){s.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var t=(0,r.ev)([e.lockRef.current],(e.shards||[]).map(E),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var u=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!s.current.allowPinchZoom;var r,o=x(e),a=n.current,c="deltaX"in e?e.deltaX:a[0]-o[0],u="deltaY"in e?e.deltaY:a[1]-o[1],f=e.target,l=Math.abs(c)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===l&&"range"===f.type)return!1;var d=g(l,f);if(!d)return!0;if(d?r=l:(r="v"===l?"h":"v",d=g(l,f)),!d)return!1;if(!i.current&&"changedTouches"in e&&(c||u)&&(i.current=r),!r)return!0;var p=i.current||r;return w(p,t,e,"h"===p?c:u,!0)},[]),f=o.useCallback(function(e){if(k.length&&k[k.length-1]===c){var n="deltaY"in e?O(e):x(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(s.current.shards||[]).map(E).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!s.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),p=o.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),h=o.useCallback(function(e){n.current=x(e),i.current=void 0},[]),v=o.useCallback(function(t){p(t.type,O(t),t.target,u(t,e.lockRef.current))},[]),y=o.useCallback(function(t){p(t.type,x(t),t.target,u(t,e.lockRef.current))},[]);o.useEffect(function(){return k.push(c),e.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:y}),document.addEventListener("wheel",f,m),document.addEventListener("touchmove",f,m),document.addEventListener("touchstart",h,m),function(){k=k.filter(function(e){return e!==c}),document.removeEventListener("wheel",f,m),document.removeEventListener("touchmove",f,m),document.removeEventListener("touchstart",h,m)}},[]);var b=e.removeScrollBar,j=e.inert;return o.createElement(o.Fragment,null,j?o.createElement(c,{styles:"\n  .block-interactivity-".concat(a," {pointer-events: none;}\n  .allow-interactivity-").concat(a," {pointer-events: all;}\n")}):null,b?o.createElement(l.jp,{gapMode:e.gapMode}):null)}),M=o.forwardRef(function(e,t){return o.createElement(u,(0,r.pi)({},e,{ref:t,sideCar:j}))});M.classNames=u.classNames;var L=M},28128:function(e,t,n){"use strict";n.d(t,{Ws:function(){return c}});var r,o=n(78558),i=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var i,a;(i=t).styleSheet?i.styleSheet.cssText=o:i.appendChild(document.createTextNode(o)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},a=function(){var e=i();return function(t,n){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},c=function(){var e=a();return function(t){return e(t.styles,t.dynamic),null}}},42386:function(e,t,n){"use strict";n.d(t,{q:function(){return c}});var r=n(78558);function o(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,a=new WeakMap;function c(e,t){var n,c,s,u=(n=t||null,c=function(t){return e.forEach(function(e){return o(e,t)})},(s=(0,r.useState)(function(){return{value:n,callback:c,facade:{get current(){return s.value},set current(value){var e=s.value;e!==value&&(s.value=value,s.callback(value,e))}}}})[0]).callback=c,s.facade);return i(function(){var t=a.get(u);if(t){var n=new Set(t),r=new Set(e),i=u.current;n.forEach(function(e){r.has(e)||o(e,null)}),r.forEach(function(e){n.has(e)||o(e,i)})}a.set(u,e)},[e]),u}},78175:function(e,t,n){"use strict";n.d(t,{L:function(){return a}});var r=n(4815),o=n(78558),i=function(e){var t=e.sideCar,n=(0,r._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var i=t.read();if(!i)throw Error("Sidecar medium not found");return o.createElement(i,(0,r.pi)({},n))};function a(e,t){return e.useMedium(t),i}i.isSideCarExport=!0},16437:function(e,t,n){"use strict";n.d(t,{_:function(){return i}});var r=n(4815);function o(e){return e}function i(e){void 0===e&&(e={});var t,n,i,a=(void 0===t&&(t=o),n=[],i=!1,{read:function(){if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var r=t(e,i);return n.push(r),function(){n=n.filter(function(e){return e!==r})}},assignSyncMedium:function(e){for(i=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){i=!0;var t=[];if(n.length){var r=n;n=[],r.forEach(e),t=n}var o=function(){var n=t;t=[],n.forEach(e)},a=function(){return Promise.resolve().then(o)};a(),n={push:function(e){t.push(e),a()},filter:function(e){return t=t.filter(e),n}}}});return a.options=(0,r.pi)({async:!0,ssr:!1},e),a}}}]);