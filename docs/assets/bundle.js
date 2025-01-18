var $e=Object.defineProperty;var xe=(e,t,n)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var V=(e,t,n)=>(xe(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const g of o.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function y(){}function ve(e){return e()}function oe(){return Object.create(null)}function L(e){e.forEach(ve)}function U(e){return typeof e=="function"}function q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let k;function Me(e,t){return e===t?!0:(k||(k=document.createElement("a")),k.href=t,e===k.href)}function Te(e){return Object.keys(e).length===0}function be(e,...t){if(e==null){for(const i of t)i(void 0);return y}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function le(e,t,n){e.$$.on_destroy.push(be(t,n))}function ue(e,t,n){return e.set(n),t}const Ae=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function x(e,t){e.appendChild(t)}function J(e,t,n){e.insertBefore(t,n||null)}function H(e){e.parentNode&&e.parentNode.removeChild(e)}function T(e){return document.createElement(e)}function Ce(e){return document.createTextNode(e)}function W(){return Ce(" ")}function X(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function I(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Pe(e){return Array.from(e.childNodes)}function G(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let j;function Se(){if(j===void 0){j=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{j=!0}}return j}function Ne(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const i=T("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=Se();let o;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=X(window,"message",g=>{g.source===i.contentWindow&&t()})):(i.src="about:blank",i.onload=()=>{o=X(i.contentWindow,"resize",t),t()}),x(e,i),()=>{(r||o&&i.contentWindow)&&o(),H(i)}}let O;function R(e){O=e}function We(){if(!O)throw new Error("Function called outside component initialization");return O}function Re(e){We().$$.on_mount.push(e)}const P=[],de=[];let S=[];const fe=[],He=Promise.resolve();let Q=!1;function Oe(){Q||(Q=!0,He.then(_e))}function F(e){S.push(e)}const K=new Set;let A=0;function _e(){if(A!==0)return;const e=O;do{try{for(;A<P.length;){const t=P[A];A++,R(t),Le(t.$$)}}catch(t){throw P.length=0,A=0,t}for(R(null),P.length=0,A=0;de.length;)de.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];K.has(n)||(K.add(n),n())}S.length=0}while(P.length);for(;fe.length;)fe.pop()();Q=!1,K.clear(),R(e)}function Le(e){if(e.fragment!==null){e.update(),L(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}function ke(e){const t=[],n=[];S.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),S=t}const B=new Set;let je;function Z(e,t){e&&e.i&&(B.delete(e),e.i(t))}function ce(e,t,n,i){if(e&&e.o){if(B.has(e))return;B.add(e),je.c.push(()=>{B.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function he(e){e&&e.c()}function ee(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),F(()=>{const o=e.$$.on_mount.map(ve).filter(U);e.$$.on_destroy?e.$$.on_destroy.push(...o):L(o),e.$$.on_mount=[]}),r.forEach(F)}function te(e,t){const n=e.$$;n.fragment!==null&&(ke(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ze(e,t){e.$$.dirty[0]===-1&&(P.push(e),Oe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(e,t,n,i,r,o,g=null,h=[-1]){const w=O;R(e);const l=e.$$={fragment:null,ctx:[],props:o,update:y,not_equal:r,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(w?w.$$.context:[])),callbacks:oe(),dirty:h,skip_bound:!1,root:t.target||w.$$.root};g&&g(l.root);let _=!1;if(l.ctx=n?n(e,t.props||{},(m,u,...f)=>{const c=f.length?f[0]:u;return l.ctx&&r(l.ctx[m],l.ctx[m]=c)&&(!l.skip_bound&&l.bound[m]&&l.bound[m](c),_&&ze(e,m)),u}):[],l.update(),_=!0,L(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){const m=Pe(t.target);l.fragment&&l.fragment.l(m),m.forEach(H)}else l.fragment&&l.fragment.c();t.intro&&Z(e.$$.fragment),ee(e,t.target,t.anchor),_e()}R(w)}class se{constructor(){V(this,"$$");V(this,"$$set")}$destroy(){te(this,1),this.$destroy=y}$on(t,n){if(!U(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Te(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Be="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Be);var z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ye(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fe="Expected a function",ge=0/0,De="[object Symbol]",Ue=/^\s+|\s+$/g,qe=/^[-+]0x[0-9a-f]+$/i,Ve=/^0b[01]+$/i,Ge=/^0o[0-7]+$/i,Ke=parseInt,Ye=typeof z=="object"&&z&&z.Object===Object&&z,Je=typeof self=="object"&&self&&self.Object===Object&&self,Xe=Ye||Je||Function("return this")(),Qe=Object.prototype,Ze=Qe.toString,et=Math.max,tt=Math.min,Y=function(){return Xe.Date.now()};function nt(e,t,n){var i,r,o,g,h,w,l=0,_=!1,m=!1,u=!0;if(typeof e!="function")throw new TypeError(Fe);t=me(t)||0,ne(n)&&(_=!!n.leading,m="maxWait"in n,o=m?et(me(n.maxWait)||0,t):o,u="trailing"in n?!!n.trailing:u);function f(v){var M=i,N=r;return i=r=void 0,l=v,g=e.apply(N,M),g}function c(v){return l=v,h=setTimeout(a,t),_?f(v):g}function p(v){var M=v-w,N=v-l,ae=t-M;return m?tt(ae,o-N):ae}function s(v){var M=v-w,N=v-l;return w===void 0||M>=t||M<0||m&&N>=o}function a(){var v=Y();if(s(v))return d(v);h=setTimeout(a,p(v))}function d(v){return h=void 0,u&&i?f(v):(i=r=void 0,g)}function b(){h!==void 0&&clearTimeout(h),l=0,i=w=r=h=void 0}function E(){return h===void 0?g:d(Y())}function $(){var v=Y(),M=s(v);if(i=arguments,r=this,w=v,M){if(h===void 0)return c(w);if(m)return h=setTimeout(a,t),f(w)}return h===void 0&&(h=setTimeout(a,t)),g}return $.cancel=b,$.flush=E,$}function ne(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function it(e){return!!e&&typeof e=="object"}function st(e){return typeof e=="symbol"||it(e)&&Ze.call(e)==De}function me(e){if(typeof e=="number")return e;if(st(e))return ge;if(ne(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ne(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ue,"");var n=Ve.test(e);return n||Ge.test(e)?Ke(e.slice(2),n?2:8):qe.test(e)?ge:+e}var rt=nt;const pe=ye(rt),C=[];function at(e,t){return{subscribe:re(e,t).subscribe}}function re(e,t=y){let n;const i=new Set;function r(h){if(q(e,h)&&(e=h,n)){const w=!C.length;for(const l of i)l[1](),C.push(l,e);if(w){for(let l=0;l<C.length;l+=2)C[l][0](C[l+1]);C.length=0}}}function o(h){r(h(e))}function g(h,w=y){const l=[h,w];return i.add(l),i.size===1&&(n=t(r,o)||y),h(e),()=>{i.delete(l),i.size===0&&n&&(n(),n=null)}}return{set:r,update:o,subscribe:g}}function Ie(e,t,n){const i=!Array.isArray(e),r=i?[e]:e;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const o=t.length<2;return at(n,(g,h)=>{let w=!1;const l=[];let _=0,m=y;const u=()=>{if(_)return;m();const c=t(i?l[0]:l,g,h);o?g(c):m=U(c)?c:y},f=r.map((c,p)=>be(c,s=>{l[p]=s,_&=~(1<<p),w&&u()},()=>{_|=1<<p}));return w=!0,u(),function(){L(f),m(),w=!1}})}const D=re(window.innerWidth),we=re(window.innerHeight);Ie(D,e=>e<=560);Ie(D,e=>e>1200);const{window:ot}=Ae;function lt(e){let t,n;return{c:y,m(i,r){t||(n=X(ot,"resize",function(){U(pe(e[1],e[0]))&&pe(e[1],e[0]).apply(this,arguments)}),t=!0)},p(i,[r]){e=i},i:y,o:y,d(i){t=!1,n()}}}function ut(e,t,n){let i,r;le(e,we,h=>n(2,i=h)),le(e,D,h=>n(3,r=h));let{debounceDur:o=100}=t;const g=()=>{ue(D,r=window.innerWidth,r),ue(we,i=window.innerHeight,i)};return Re(()=>{g()}),e.$$set=h=>{"debounceDur"in h&&n(0,o=h.debounceDur)},[o,g]}class dt extends se{constructor(t){super(),ie(this,t,ut,lt,q,{debounceDur:0})}}function ft(e){let t,n;return{c(){t=T("iframe"),I(t,"title","Decline in NFIP policies-in-force in Louisiana"),I(t,"aria-label","Column Chart"),I(t,"id","datawrapper-chart-KzFxw"),Me(t.src,n="https://datawrapper.dwcdn.net/KzFxw/1/")||I(t,"src",n),I(t,"scrolling","no"),I(t,"frameborder","0"),G(t,"width","0"),G(t,"min-width","100%",1),G(t,"border","none"),I(t,"height","356"),I(t,"data-external","1")},m(i,r){J(i,t,r)},p:y,i:y,o:y,d(i){i&&H(t)}}}function ct(e){return function(){window.addEventListener("message",function(t){if(t.data["datawrapper-height"]!==void 0){var n=document.querySelectorAll("iframe");for(var i in t.data["datawrapper-height"])for(var r=0;r<n.length;r++)if(n[r].contentWindow===t.source){var o=t.data["datawrapper-height"][i]+"px";n[r].style.height=o}}})}(),[]}class ht extends se{constructor(t){super(),ie(this,t,ct,ft,q,{})}}var Ee={exports:{}};/*! pym.js - v1.3.2 - 2018-02-13 */(function(e){(function(t){e.exports?e.exports=t():window.pym=t.call(this)})(function(){var t="xPYMx",n={},i=function(u){var f=document.createEvent("Event");f.initEvent("pym:"+u,!0,!0),document.dispatchEvent(f)},r=function(u){var f=new RegExp("[\\?&]"+u.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]")+"=([^&#]*)"),c=f.exec(location.search);return c===null?"":decodeURIComponent(c[1].replace(/\+/g," "))},o=function(u,f){if(!(f.xdomain!=="*"&&!u.origin.match(new RegExp(f.xdomain+"$")))&&typeof u.data=="string")return!0},g=function(u){var f=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/gi;if(u.match(f))return!0},h=function(u,f,c){var p=["pym",u,f,c];return p.join(t)},w=function(u){var f=["pym",u,"(\\S+)","(.*)"];return new RegExp("^"+f.join(t)+"$")},l=Date.now||function(){return new Date().getTime()},_=function(u,f,c){var p,s,a,d=null,b=0;c||(c={});var E=function(){b=c.leading===!1?0:l(),d=null,a=u.apply(p,s),d||(p=s=null)};return function(){var $=l();!b&&c.leading===!1&&(b=$);var v=f-($-b);return p=this,s=arguments,v<=0||v>f?(d&&(clearTimeout(d),d=null),b=$,a=u.apply(p,s),d||(p=s=null)):!d&&c.trailing!==!1&&(d=setTimeout(E,v)),a}},m=function(){for(var u=n.autoInitInstances.length,f=u-1;f>=0;f--){var c=n.autoInitInstances[f];c.el.getElementsByTagName("iframe").length&&c.el.getElementsByTagName("iframe")[0].contentWindow||n.autoInitInstances.splice(f,1)}};return n.autoInitInstances=[],n.autoInit=function(u){var f=document.querySelectorAll("[data-pym-src]:not([data-pym-auto-initialized])"),c=f.length;m();for(var p=0;p<c;++p){var s=f[p];s.setAttribute("data-pym-auto-initialized",""),s.id===""&&(s.id="pym-"+p+"-"+Math.random().toString(36).substr(2,5));var a=s.getAttribute("data-pym-src"),d={xdomain:"string",title:"string",name:"string",id:"string",sandbox:"string",allowfullscreen:"boolean",parenturlparam:"string",parenturlvalue:"string",optionalparams:"boolean",trackscroll:"boolean",scrollwait:"number"},b={};for(var E in d)if(s.getAttribute("data-pym-"+E)!==null)switch(d[E]){case"boolean":b[E]=s.getAttribute("data-pym-"+E)!=="false";break;case"string":b[E]=s.getAttribute("data-pym-"+E);break;case"number":var $=Number(s.getAttribute("data-pym-"+E));isNaN($)||(b[E]=$);break;default:console.err("unrecognized attribute type")}var v=new n.Parent(s.id,a,b);n.autoInitInstances.push(v)}return u||i("pym-initialized"),n.autoInitInstances},n.Parent=function(u,f,c){this.id=u,this.url=f,this.el=document.getElementById(u),this.iframe=null,this.settings={xdomain:"*",optionalparams:!0,parenturlparam:"parentUrl",parenturlvalue:window.location.href,trackscroll:!1,scrollwait:100},this.messageRegex=w(this.id),this.messageHandlers={},c=c||{},this._constructIframe=function(){var s=this.el.offsetWidth.toString();this.iframe=document.createElement("iframe");var a="",d=this.url.indexOf("#");for(d>-1&&(a=this.url.substring(d,this.url.length),this.url=this.url.substring(0,d)),this.url.indexOf("?")<0?this.url+="?":this.url+="&",this.iframe.src=this.url+"initialWidth="+s+"&childId="+this.id,this.settings.optionalparams&&(this.iframe.src+="&parentTitle="+encodeURIComponent(document.title),this.iframe.src+="&"+this.settings.parenturlparam+"="+encodeURIComponent(this.settings.parenturlvalue)),this.iframe.src+=a,this.iframe.setAttribute("width","100%"),this.iframe.setAttribute("scrolling","no"),this.iframe.setAttribute("marginheight","0"),this.iframe.setAttribute("frameborder","0"),this.settings.title&&this.iframe.setAttribute("title",this.settings.title),this.settings.allowfullscreen!==void 0&&this.settings.allowfullscreen!==!1&&this.iframe.setAttribute("allowfullscreen",""),this.settings.sandbox!==void 0&&typeof this.settings.sandbox=="string"&&this.iframe.setAttribute("sandbox",this.settings.sandbox),this.settings.id&&(document.getElementById(this.settings.id)||this.iframe.setAttribute("id",this.settings.id)),this.settings.name&&this.iframe.setAttribute("name",this.settings.name);this.el.firstChild;)this.el.removeChild(this.el.firstChild);this.el.appendChild(this.iframe),window.addEventListener("resize",this._onResize),this.settings.trackscroll&&window.addEventListener("scroll",this._throttleOnScroll)},this._onResize=(function(){this.sendWidth(),this.settings.trackscroll&&this.sendViewportAndIFramePosition()}).bind(this),this._onScroll=(function(){this.sendViewportAndIFramePosition()}).bind(this),this._fire=function(s,a){if(s in this.messageHandlers)for(var d=0;d<this.messageHandlers[s].length;d++)this.messageHandlers[s][d].call(this,a)},this.remove=function(){window.removeEventListener("message",this._processMessage),window.removeEventListener("resize",this._onResize),this.el.removeChild(this.iframe),m()},this._processMessage=(function(s){if(o(s,this.settings)&&typeof s.data=="string"){var a=s.data.match(this.messageRegex);if(!a||a.length!==3)return!1;var d=a[1],b=a[2];this._fire(d,b)}}).bind(this),this._onHeightMessage=function(s){var a=parseInt(s);this.iframe.setAttribute("height",a+"px")},this._onNavigateToMessage=function(s){g(s)&&(document.location.href=s)},this._onScrollToChildPosMessage=function(s){var a=document.getElementById(this.id).getBoundingClientRect().top+window.pageYOffset,d=a+parseInt(s);window.scrollTo(0,d)},this.onMessage=function(s,a){s in this.messageHandlers||(this.messageHandlers[s]=[]),this.messageHandlers[s].push(a)},this.sendMessage=function(s,a){this.el.getElementsByTagName("iframe").length&&(this.el.getElementsByTagName("iframe")[0].contentWindow?this.el.getElementsByTagName("iframe")[0].contentWindow.postMessage(h(this.id,s,a),"*"):this.remove())},this.sendWidth=function(){var s=this.el.offsetWidth.toString();this.sendMessage("width",s)},this.sendViewportAndIFramePosition=function(){var s=this.iframe.getBoundingClientRect(),a=window.innerWidth||document.documentElement.clientWidth,d=window.innerHeight||document.documentElement.clientHeight,b=a+" "+d;b+=" "+s.top+" "+s.left,b+=" "+s.bottom+" "+s.right,this.sendMessage("viewport-iframe-position",b)};for(var p in c)this.settings[p]=c[p];return this._throttleOnScroll=_(this._onScroll.bind(this),this.settings.scrollwait),this.onMessage("height",this._onHeightMessage),this.onMessage("navigateTo",this._onNavigateToMessage),this.onMessage("scrollToChildPos",this._onScrollToChildPosMessage),this.onMessage("parentPositionInfo",this.sendViewportAndIFramePosition),window.addEventListener("message",this._processMessage,!1),this._constructIframe(),this},n.Child=function(u){this.parentWidth=null,this.id=null,this.parentTitle=null,this.parentUrl=null,this.settings={renderCallback:null,xdomain:"*",polling:0,parenturlparam:"parentUrl"},this.timerId=null,this.messageRegex=null,this.messageHandlers={},u=u||{},this.onMessage=function(s,a){s in this.messageHandlers||(this.messageHandlers[s]=[]),this.messageHandlers[s].push(a)},this._fire=function(s,a){if(s in this.messageHandlers)for(var d=0;d<this.messageHandlers[s].length;d++)this.messageHandlers[s][d].call(this,a)},this._processMessage=(function(s){if(o(s,this.settings)&&typeof s.data=="string"){var a=s.data.match(this.messageRegex);if(!(!a||a.length!==3)){var d=a[1],b=a[2];this._fire(d,b)}}}).bind(this),this._onWidthMessage=function(s){var a=parseInt(s);a!==this.parentWidth&&(this.parentWidth=a,this.settings.renderCallback&&this.settings.renderCallback(a),this.sendHeight())},this.sendMessage=function(s,a){window.parent.postMessage(h(this.id,s,a),"*")},this.sendHeight=(function(){var s=document.getElementsByTagName("body")[0].offsetHeight.toString();return this.sendMessage("height",s),s}).bind(this),this.getParentPositionInfo=function(){this.sendMessage("parentPositionInfo")},this.scrollParentTo=function(s){this.sendMessage("navigateTo","#"+s)},this.navigateParentTo=function(s){this.sendMessage("navigateTo",s)},this.scrollParentToChildEl=function(s){var a=document.getElementById(s).getBoundingClientRect().top+window.pageYOffset;this.scrollParentToChildPos(a)},this.scrollParentToChildPos=function(s){this.sendMessage("scrollToChildPos",s.toString())};var f=function(s){var a=document.getElementsByTagName("html")[0],d,b=a.className;try{window.self!==window.top?d="embedded":d="not-embedded"}catch{d="embedded"}b.indexOf(d)<0&&(a.className=b?b+" "+d:d,s&&s(d),i("marked-embedded"))};this.remove=function(){window.removeEventListener("message",this._processMessage),this.timerId&&clearInterval(this.timerId)};for(var c in u)this.settings[c]=u[c];this.id=r("childId")||u.id,this.messageRegex=new RegExp("^pym"+t+this.id+t+"(\\S+)"+t+"(.*)$");var p=parseInt(r("initialWidth"));return this.parentUrl=r(this.settings.parenturlparam),this.parentTitle=r("parentTitle"),this.onMessage("width",this._onWidthMessage),window.addEventListener("message",this._processMessage,!1),this.settings.renderCallback&&this.settings.renderCallback(p),this.sendHeight(),this.settings.polling&&(this.timerId=window.setInterval(this.sendHeight,this.settings.polling)),f(u.onMarkedEmbeddedStatus),this},typeof document<"u"&&n.autoInit(!0),n})})(Ee);var gt=Ee.exports;const mt=ye(gt);function pt(e){let t,n,i,r,o,g,h,w,l,_,m,u,f,c,p;return t=new dt({}),m=new ht({}),{c(){he(t.$$.fragment),n=W(),i=T("div"),r=T("h1"),r.textContent="Decline in NFIP policies-in-force in Louisiana",o=W(),g=T("p"),g.textContent=`Rising premiums under FEMA’s Risk Rating 2.0, implemented in 2022, have
    driven a significant drop in National Flood Insurance Program (NFIP)
    policies in Louisiana. As affordability becomes a growing concern, fewer
    residents are able to maintain coverage, leaving communities more vulnerable
    to flooding and increasing financial strain for those who remain insured.`,h=W(),w=T("p"),w.textContent=`Bar chart showing the number of active NFIP policies in Louisiana from 2020
    to 2024, with a steady decline starting in 2022. The chart highlights the
    impact of rising premiums under Risk Rating 2.0 on policy retention.`,l=W(),_=T("div"),he(m.$$.fragment),f=W(),c=T("div"),c.innerHTML=`Note: Data is as of December each year; Data: <a target="_blank" href="https://www.fema.gov/openfema-data-page/nfip-multiple-loss-properties-v1">FEMA</a>; Graphic by Jared Whalen /
    <a target="_blank" href="https://agwaterdesk.org/">Ag &amp; Water Desk</a>`,I(r,"class","headline"),I(g,"class","dek"),I(w,"class","sr-only"),I(_,"id","g-viz"),F(()=>e[1].call(_)),I(c,"class","credit"),I(i,"class","chart-container svelte-1vs4stw")},m(s,a){ee(t,s,a),J(s,n,a),J(s,i,a),x(i,r),x(i,o),x(i,g),x(i,h),x(i,w),x(i,l),x(i,_),ee(m,_,null),u=Ne(_,e[1].bind(_)),x(i,f),x(i,c),p=!0},p:y,i(s){p||(Z(t.$$.fragment,s),Z(m.$$.fragment,s),p=!0)},o(s){ce(t.$$.fragment,s),ce(m.$$.fragment,s),p=!1},d(s){s&&(H(n),H(i)),te(t,s),te(m),u()}}}function wt(e,t,n){new mt.Child({polling:500});let i;function r(){i=this.clientWidth,n(0,i)}return[i,r]}class vt extends se{constructor(t){super(),ie(this,t,wt,pt,q,{})}}new vt({target:document.getElementById("app")});
