/*! For license information please see chunk.vendors~pnp-modern-search-sharepoint-stat~34a0d1d7_5d24c7dc1eb46a8d1bca.js.LICENSE.txt */
(window.webpackJsonp_2ea4494a4801c9aca03bba9314014278=window.webpackJsonp_2ea4494a4801c9aca03bba9314014278||[]).push([[30],{"0Hxx":function(e,t,n){"use strict";var a,i;Object.defineProperty(t,"__esModule",{value:!0}),(i=t.FilterConditionOperator||(t.FilterConditionOperator={})).OR="or",i.AND="and",(a=t.FilterComparisonOperator||(t.FilterComparisonOperator={}))[a.Eq=0]="Eq",a[a.Neq=1]="Neq",a[a.Gt=2]="Gt",a[a.Lt=3]="Lt",a[a.Geq=4]="Geq",a[a.Leq=5]="Leq",a[a.Contains=6]="Contains"},"5iWF":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("2cRh"),i=a.__importStar(n("faye")),r=n("Pk8u");n("AMX2"),n("tAhT");var o=n("7Awa"),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.disconnectedCallback=function(){i.unmountComponentAtNode(this)},t.prototype.resolveAttributes=function(){for(var e={},t=0;t<this.attributes.length;t++)if(this.attributes.item(t)){var n=this.attributes.item(t).value,a=this.attributes.item(t).name,i=a.match(/data-(.+)/);if(i&&2===i.length&&(a=i[1]),n)if(/^(true|false)$/.test(n))e[r.camelCase(a)]="true"===n;else if(/^(?:'|").*(?:'|")$/.test(n))e[r.camelCase(a)]=n;else try{e[r.camelCase(a)]=JSON.parse(n)}catch(t){this._moment&&this._moment(n,this._moment.ISO_8601,!0).isValid()?e[r.camelCase(a)]=new Date(Date.parse(n)):e[r.camelCase(a)]=n}}if(this._serviceScope&&!e.themeVariant){var s=this._serviceScope.consume(o.ThemeProvider.serviceKey).tryGetTheme();e.themeVariant=s}return e},t}(HTMLElement);t.BaseWebComponent=s},AMX2:function(e,t,n){"use strict";!function(){if(void 0===window.Reflect||void 0===window.customElements||window.customElements.polyfillWrapFlushCallback)return;const e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}()},Akhn:function(e,t,n){"use strict";function a(e,t){for(var n=[],a=2;a<arguments.length;a++)n[a-2]=arguments[a];return function(){t.apply(e,n)}}function i(e,t,n){var a=new Date(e.toString());switch(t.toLowerCase()){case"year":a.setFullYear(a.getFullYear()+n);break;case"quarter":a.setMonth(a.getMonth()+3*n);break;case"month":a.setMonth(a.getMonth()+n);break;case"week":a.setDate(a.getDate()+7*n);break;case"day":a.setDate(a.getDate()+n);break;case"hour":a.setTime(a.getTime()+36e5*n);break;case"minute":a.setTime(a.getTime()+6e4*n);break;case"second":a.setTime(a.getTime()+1e3*n);break;default:a=void 0}return a}function r(e){return"function"==typeof e}function o(e){return null!=e}function s(e){return JSON.stringify(e)}n.d(t,"t",function(){return a}),n.d(t,"e",function(){return i}),n.d(t,"n",function(){return r}),n.d(t,"i",function(){return o}),n.d(t,"a",function(){return s})},Ch60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){}return e.EVENT_FILTER_UPDATED="filterUpdated",e.EVENT_FILTER_APPLY_ALL="filterApplyAll",e.EVENT_FILTER_CLEAR_ALL="filterClearAll",e.EVENT_FILTER_VALUE_OPERATOR_UPDATED="filterOperatorUpdated",e.EVENT_SORT_BY="sortBy",e}();t.ExtensibilityConstants=a},LIXb:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),(a=t.BuiltinTemplateSlots||(t.BuiltinTemplateSlots={})).Title="Title",a.Path="Path",a.Summary="Summary",a.Date="Date",a.FileType="FileType",a.PreviewImageUrl="PreviewImageUrl",a.PreviewUrl="PreviewUrl",a.Author="Author",a.Tags="Tags",a.SiteId="SiteId",a.WebId="WebId",a.ListId="ListId",a.ItemId="ItemId",a.IsFolder="IsFolder",a.PersonQuery="PersonQuery",a.UserDisplayName="UserDisplayName",a.UserEmail="UserEmail",a.ContentClass="contentclass",a.DriveId="DriveId",a.Id="Id"},ObZL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e){this.serviceScope=e}return Object.defineProperty(e.prototype,"properties",{get:function(){return this._properties},set:function(e){this._properties=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"context",{get:function(){return this._context},set:function(e){this._context=e},enumerable:!0,configurable:!0}),e.prototype.onInit=function(){},e.prototype.getPropertyPaneFieldsConfiguration=function(e){return[]},e.prototype.onPropertyUpdate=function(e,t,n){},e}();t.BaseLayout=a},Swo8:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),(a=t.FilterBehavior||(t.FilterBehavior={})).Dynamic="dynamic",a.Static="static"},UDSP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("2cRh");a.__exportStar(n("xIPP"),t),a.__exportStar(n("5iWF"),t),a.__exportStar(n("wN3S"),t),a.__exportStar(n("ObZL"),t),a.__exportStar(n("0Hxx"),t),a.__exportStar(n("V7ie"),t),a.__exportStar(n("Swo8"),t),a.__exportStar(n("UNJV"),t),a.__exportStar(n("Ch60"),t),a.__exportStar(n("LIXb"),t),a.__exportStar(n("amjC"),t),a.__exportStar(n("ajhZ"),t)},UNJV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),(t.PagingBehavior||(t.PagingBehavior={})).Dynamic="dynamic"},V7ie:function(e,t,n){"use strict";var a,i,r;Object.defineProperty(t,"__esModule",{value:!0}),(r=t.FilterType||(t.FilterType={})).Refiner="Refiner",r.StaticFilter="StaticFilter",(i=t.FilterSortType||(t.FilterSortType={})).ByCount="ByCount",i.ByName="ByName",(a=t.FilterSortDirection||(t.FilterSortDirection={})).Ascending="Ascending",a.Descending="Descending"},ajhZ:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),(a=t.SortFieldDirection||(t.SortFieldDirection={}))[a.Ascending=1]="Ascending",a[a.Descending=2]="Descending"},amjC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e){this.serviceScope=e}return Object.defineProperty(e.prototype,"properties",{get:function(){return this._properties},set:function(e){this._properties=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isZeroTermSuggestionsEnabled",{get:function(){return this._isZeroTermSuggestionsEnabled},set:function(e){this._isZeroTermSuggestionsEnabled=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"context",{get:function(){return this._context},set:function(e){this._context=e},enumerable:!0,configurable:!0}),e.prototype.onInit=function(){},e.prototype.getPropertyPaneGroupsConfiguration=function(){return[]},e.prototype.onPropertyUpdate=function(e,t,n){},e.prototype.getSuggestions=function(e){throw"Not implemented"},e.prototype.getZeroTermSuggestions=function(){throw"Not implemented"},e}();t.BaseSuggestionProvider=a},eGXB:function(e,t,n){"use strict";function a(e,t,n,a){return new(n||(n=Promise))(function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function s(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,s)}c((a=a.apply(e,t||[])).next())})}function i(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}n.d(t,"e",function(){return f}),Object.create,Object.create;var r=n("Akhn"),o=Object(r.n)(Object.entries)?Object.entries:function(e){return Object.keys(e).map(function(t){return[t,e[t]]})},s=["defaultCachingStore","defaultCachingTimeoutSeconds","globalCacheDisable","enableCacheExpiration","cacheExpirationIntervalMilliseconds","spfxContext","ie11"],c=function(){function e(e){void 0===e&&(e=new Map),this._v=e,this._v.set(s[0],"session"),this._v.set(s[1],60),this._v.set(s[2],!1),this._v.set(s[3],!1),this._v.set(s[4],750),this._v.set(s[5],null),this._v.set(s[6],!1)}return e.prototype.assign=function(e){var t;this._v=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var a=0;a<t.length;a++)t[a].forEach(function(t,n){e.set(n,t)});return e}(this._v,null!=(t=e)?new Map(o(t)):new Map)},e.prototype.get=function(e){return this._v.get(e)},Object.defineProperty(e.prototype,"defaultCachingStore",{get:function(){return this.get(s[0])},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"defaultCachingTimeoutSeconds",{get:function(){return this.get(s[1])},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"globalCacheDisable",{get:function(){return this.get(s[2])},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"enableCacheExpiration",{get:function(){return this.get(s[3])},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cacheExpirationIntervalMilliseconds",{get:function(){return this.get(s[4])},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"spfxContext",{get:function(){return this.get(s[5])},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ie11",{get:function(){return this.get(s[6])},enumerable:!1,configurable:!0}),e}(),d=new c,l=function(){function e(e,t){void 0===t&&(t=-1),this.store=e,this.defaultTimeoutMinutes=t,this.enabled=this.test(),d.enableCacheExpiration&&this.cacheExpirationHandler()}return e.bind=function(t){return new e(void 0===t?new u:t)},e.prototype.get=function(e){if(!this.enabled)return null;var t=this.store.getItem(e);if(!Object(r.i)(t))return null;var n=JSON.parse(t);return new Date(n.expiration)<=new Date?(this.delete(e),null):n.value},e.prototype.put=function(e,t,n){this.enabled&&this.store.setItem(e,this.createPersistable(t,n))},e.prototype.delete=function(e){this.enabled&&this.store.removeItem(e)},e.prototype.getOrPut=function(e,t,n){return a(this,void 0,void 0,function(){var a;return i(this,function(i){switch(i.label){case 0:return this.enabled?null!==(a=this.get(e))?[3,2]:[4,t()]:[2,t()];case 1:a=i.sent(),this.put(e,a,n),i.label=2;case 2:return[2,a]}})})},e.prototype.deleteExpired=function(){return a(this,void 0,void 0,function(){var e,t;return i(this,function(n){switch(n.label){case 0:if(!this.enabled)return[2];e=0,n.label=1;case 1:return e<this.store.length?null===(t=this.store.key(e))?[3,3]:/["|']?pnp["|']? ?: ?1/i.test(this.store.getItem(t))?[4,this.get(t)]:[3,3]:[3,4];case 2:n.sent(),n.label=3;case 3:return e++,[3,1];case 4:return[2]}})})},e.prototype.test=function(){try{return this.store.setItem("t","t"),this.store.removeItem("t"),!0}catch(e){return!1}},e.prototype.createPersistable=function(e,t){if(void 0===t){var n=d.defaultCachingTimeoutSeconds;this.defaultTimeoutMinutes>0&&(n=60*this.defaultTimeoutMinutes),t=Object(r.e)(new Date,"second",n)}return Object(r.a)({pnp:1,expiration:t,value:e})},e.prototype.cacheExpirationHandler=function(){var e=this;this.enabled&&this.deleteExpired().then(function(t){setTimeout(Object(r.t)(e,e.cacheExpirationHandler),d.cacheExpirationIntervalMilliseconds)}).catch(console.error)},e}(),u=function(){function e(e){void 0===e&&(e=new Map),this._store=e}return Object.defineProperty(e.prototype,"length",{get:function(){return this._store.size},enumerable:!1,configurable:!0}),e.prototype.clear=function(){this._store.clear()},e.prototype.getItem=function(e){return this._store.get(e)},e.prototype.key=function(e){return Array.from(this._store)[e][0]},e.prototype.removeItem=function(e){this._store.delete(e)},e.prototype.setItem=function(e,t){this._store.set(e,t)},e}(),f=function(){function e(e,t){void 0===e&&(e=null),void 0===t&&(t=null),this._local=e,this._session=t}return Object.defineProperty(e.prototype,"local",{get:function(){return null===this._local&&(this._local=new l("undefined"==typeof localStorage?new u:localStorage)),this._local},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"session",{get:function(){return null===this._session&&(this._session=new l("undefined"==typeof sessionStorage?new u:sessionStorage)),this._session},enumerable:!1,configurable:!0}),e}()},tAhT:function(e,t){(function(){"use strict";var e=window.Document.prototype.createElement,t=window.Document.prototype.createElementNS,n=window.Document.prototype.importNode,a=window.Document.prototype.prepend,i=window.Document.prototype.append,r=window.DocumentFragment.prototype.prepend,o=window.DocumentFragment.prototype.append,s=window.Node.prototype.cloneNode,c=window.Node.prototype.appendChild,d=window.Node.prototype.insertBefore,l=window.Node.prototype.removeChild,u=window.Node.prototype.replaceChild,f=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),p=window.Element.prototype.attachShadow,m=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),_=window.Element.prototype.getAttribute,h=window.Element.prototype.setAttribute,b=window.Element.prototype.removeAttribute,g=window.Element.prototype.getAttributeNS,v=window.Element.prototype.setAttributeNS,y=window.Element.prototype.removeAttributeNS,S=window.Element.prototype.insertAdjacentElement,D=window.Element.prototype.insertAdjacentHTML,I=window.Element.prototype.prepend,x=window.Element.prototype.append,C=window.Element.prototype.before,O=window.Element.prototype.after,w=window.Element.prototype.replaceWith,E=window.Element.prototype.remove,A=window.HTMLElement,L=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),k=window.HTMLElement.prototype.insertAdjacentElement,M=window.HTMLElement.prototype.insertAdjacentHTML,P=new Set;function T(e){var t=P.has(e);return e=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(e),!t&&e}"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(e){return P.add(e)});var U=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);function F(e){var t=e.isConnected;if(void 0!==t)return t;if(U(e))return!0;for(;e&&!(e.__CE_isImportDocument||e instanceof Document);)e=e.parentNode||(window.ShadowRoot&&e instanceof ShadowRoot?e.host:void 0);return!(!e||!(e.__CE_isImportDocument||e instanceof Document))}function H(e){var t=e.children;if(t)return Array.prototype.slice.call(t);for(t=[],e=e.firstChild;e;e=e.nextSibling)e.nodeType===Node.ELEMENT_NODE&&t.push(e);return t}function R(e,t){for(;t&&t!==e&&!t.nextSibling;)t=t.parentNode;return t&&t!==e?t.nextSibling:null}function N(e,t,n){for(var a=e;a;){if(a.nodeType===Node.ELEMENT_NODE){var i=a;t(i);var r=i.localName;if("link"===r&&"import"===i.getAttribute("rel")){if(a=i.import,void 0===n&&(n=new Set),a instanceof Node&&!n.has(a))for(n.add(a),a=a.firstChild;a;a=a.nextSibling)N(a,t,n);a=R(e,i);continue}if("template"===r){a=R(e,i);continue}if(i=i.__CE_shadowRoot)for(i=i.firstChild;i;i=i.nextSibling)N(i,t,n)}a=a.firstChild?a.firstChild:R(e,a)}}function B(){var e=!(null==oe||!oe.noDocumentConstructionObserver),t=!(null==oe||!oe.shadyDomFastWalk);this.h=[],this.a=[],this.f=!1,this.shadyDomFastWalk=t,this.C=!e}function j(e,t,n,a){var i=window.ShadyDom;if(e.shadyDomFastWalk&&i&&i.inUse){if(t.nodeType===Node.ELEMENT_NODE&&n(t),t.querySelectorAll)for(e=i.nativeMethods.querySelectorAll.call(t,"*"),t=0;t<e.length;t++)n(e[t])}else N(t,n,a)}function V(e,t){e.f&&j(e,t,function(t){return z(e,t)})}function z(e,t){if(e.f&&!t.__CE_patched){t.__CE_patched=!0;for(var n=0;n<e.h.length;n++)e.h[n](t);for(n=0;n<e.a.length;n++)e.a[n](t)}}function G(e,t){var n=[];for(j(e,t,function(e){return n.push(e)}),t=0;t<n.length;t++){var a=n[t];1===a.__CE_state?e.connectedCallback(a):q(e,a)}}function K(e,t){var n=[];for(j(e,t,function(e){return n.push(e)}),t=0;t<n.length;t++){var a=n[t];1===a.__CE_state&&e.disconnectedCallback(a)}}function W(e,t,n){var a=(n=void 0===n?{}:n).D,i=n.upgrade||function(t){return q(e,t)},r=[];for(j(e,t,function(t){if(e.f&&z(e,t),"link"===t.localName&&"import"===t.getAttribute("rel")){var n=t.import;n instanceof Node&&(n.__CE_isImportDocument=!0,n.__CE_registry=document.__CE_registry),n&&"complete"===n.readyState?n.__CE_documentLoadHandled=!0:t.addEventListener("load",function(){var n=t.import;if(!n.__CE_documentLoadHandled){n.__CE_documentLoadHandled=!0;var r=new Set;a&&(a.forEach(function(e){return r.add(e)}),r.delete(n)),W(e,n,{D:r,upgrade:i})}})}else r.push(t)},a),t=0;t<r.length;t++)i(r[t])}function q(e,t){try{var n=t.ownerDocument,a=n.__CE_registry,i=a&&(n.defaultView||n.__CE_isImportDocument)?ae(a,t.localName):void 0;if(i&&void 0===t.__CE_state){i.constructionStack.push(t);try{try{if(new i.constructorFunction!==t)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{i.constructionStack.pop()}}catch(e){throw t.__CE_state=2,e}if(t.__CE_state=1,t.__CE_definition=i,i.attributeChangedCallback&&t.hasAttributes()){var r=i.observedAttributes;for(i=0;i<r.length;i++){var o=r[i],s=t.getAttribute(o);null!==s&&e.attributeChangedCallback(t,o,null,s,null)}}F(t)&&e.connectedCallback(t)}}catch(e){Y(e)}}function Q(n,a,i,r){var o=a.__CE_registry;if(o&&(null===r||"http://www.w3.org/1999/xhtml"===r)&&(o=ae(o,i)))try{var s=new o.constructorFunction;if(void 0===s.__CE_state||void 0===s.__CE_definition)throw Error("Failed to construct '"+i+"': The returned value was not constructed with the HTMLElement constructor.");if("http://www.w3.org/1999/xhtml"!==s.namespaceURI)throw Error("Failed to construct '"+i+"': The constructed element's namespace must be the HTML namespace.");if(s.hasAttributes())throw Error("Failed to construct '"+i+"': The constructed element must not have any attributes.");if(null!==s.firstChild)throw Error("Failed to construct '"+i+"': The constructed element must not have any children.");if(null!==s.parentNode)throw Error("Failed to construct '"+i+"': The constructed element must not have a parent node.");if(s.ownerDocument!==a)throw Error("Failed to construct '"+i+"': The constructed element's owner document is incorrect.");if(s.localName!==i)throw Error("Failed to construct '"+i+"': The constructed element's local name is incorrect.");return s}catch(o){return Y(o),a=null===r?e.call(a,i):t.call(a,r,i),Object.setPrototypeOf(a,HTMLUnknownElement.prototype),a.__CE_state=2,a.__CE_definition=void 0,z(n,a),a}return z(n,a=null===r?e.call(a,i):t.call(a,r,i)),a}function Y(e){var t=e.message,n=e.sourceURL||e.fileName||"",a=e.line||e.lineNumber||0,i=e.column||e.columnNumber||0,r=void 0;void 0===ErrorEvent.prototype.initErrorEvent?r=new ErrorEvent("error",{cancelable:!0,message:t,filename:n,lineno:a,colno:i,error:e}):((r=document.createEvent("ErrorEvent")).initErrorEvent("error",!1,!0,t,n,a),r.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})}),void 0===r.error&&Object.defineProperty(r,"error",{configurable:!0,enumerable:!0,get:function(){return e}}),window.dispatchEvent(r),r.defaultPrevented||console.error(e)}function J(){var e=this;this.a=void 0,this.w=new Promise(function(t){e.g=t})}function X(e){var t=document;this.g=void 0,this.b=e,this.a=t,W(this.b,this.a),"loading"===this.a.readyState&&(this.g=new MutationObserver(this.A.bind(this)),this.g.observe(this.a,{childList:!0,subtree:!0}))}function Z(e){e.g&&e.g.disconnect()}function $(e){this.j=new Map,this.l=new Map,this.u=new Map,this.o=!1,this.s=new Map,this.i=function(e){return e()},this.c=!1,this.m=[],this.b=e,this.v=e.C?new X(e):void 0}function ee(e,t){if(!T(t))throw new SyntaxError("The element name '"+t+"' is not valid.");if(ae(e,t))throw Error("A custom element with name '"+t+"' has already been defined.");if(e.o)throw Error("A custom element is already being defined.")}function te(e,t,n){var a;e.o=!0;try{var i=n.prototype;if(!(i instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var r=function(e){var t=i[e];if(void 0!==t&&!(t instanceof Function))throw Error("The '"+e+"' callback must be a function.");return t},o=r("connectedCallback"),s=r("disconnectedCallback"),c=r("adoptedCallback"),d=(a=r("attributeChangedCallback"))&&n.observedAttributes||[]}catch(e){throw e}finally{e.o=!1}return n={localName:t,constructorFunction:n,connectedCallback:o,disconnectedCallback:s,adoptedCallback:c,attributeChangedCallback:a,observedAttributes:d,constructionStack:[]},e.l.set(t,n),e.u.set(n.constructorFunction,n),n}function ne(e){if(!1!==e.c){e.c=!1;for(var t=[],n=e.m,a=new Map,i=0;i<n.length;i++)a.set(n[i],[]);for(W(e.b,document,{upgrade:function(n){if(void 0===n.__CE_state){var i=n.localName,r=a.get(i);r?r.push(n):e.l.has(i)&&t.push(n)}}}),i=0;i<t.length;i++)q(e.b,t[i]);for(i=0;i<n.length;i++){for(var r=n[i],o=a.get(r),s=0;s<o.length;s++)q(e.b,o[s]);(r=e.s.get(r))&&r.resolve(void 0)}n.length=0}}function ae(e,t){var n=e.l.get(t);if(n)return n;if(n=e.j.get(t)){e.j.delete(t);try{return te(e,t,n())}catch(e){Y(e)}}}function ie(e,t,n){function a(t){return function(n){for(var a=[],i=0;i<arguments.length;++i)a[i]=arguments[i];i=[];for(var r=[],o=0;o<a.length;o++){var s=a[o];if(s instanceof Element&&F(s)&&r.push(s),s instanceof DocumentFragment)for(s=s.firstChild;s;s=s.nextSibling)i.push(s);else i.push(s)}for(t.apply(this,a),a=0;a<r.length;a++)K(e,r[a]);if(F(this))for(a=0;a<i.length;a++)(r=i[a])instanceof Element&&G(e,r)}}void 0!==n.prepend&&(t.prepend=a(n.prepend)),void 0!==n.append&&(t.append=a(n.append))}B.prototype.connectedCallback=function(e){var t=e.__CE_definition;if(t.connectedCallback)try{t.connectedCallback.call(e)}catch(e){Y(e)}},B.prototype.disconnectedCallback=function(e){var t=e.__CE_definition;if(t.disconnectedCallback)try{t.disconnectedCallback.call(e)}catch(e){Y(e)}},B.prototype.attributeChangedCallback=function(e,t,n,a,i){var r=e.__CE_definition;if(r.attributeChangedCallback&&-1<r.observedAttributes.indexOf(t))try{r.attributeChangedCallback.call(e,t,n,a,i)}catch(e){Y(e)}},J.prototype.resolve=function(e){if(this.a)throw Error("Already resolved.");this.a=e,this.g(e)},X.prototype.A=function(e){var t=this.a.readyState;for("interactive"!==t&&"complete"!==t||Z(this),t=0;t<e.length;t++)for(var n=e[t].addedNodes,a=0;a<n.length;a++)W(this.b,n[a])},$.prototype.B=function(e,t){var n=this;if(!(t instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");ee(this,e),this.j.set(e,t),this.m.push(e),this.c||(this.c=!0,this.i(function(){return ne(n)}))},$.prototype.define=function(e,t){var n=this;if(!(t instanceof Function))throw new TypeError("Custom element constructors must be functions.");ee(this,e),te(this,e,t),this.m.push(e),this.c||(this.c=!0,this.i(function(){return ne(n)}))},$.prototype.upgrade=function(e){W(this.b,e)},$.prototype.get=function(e){if(e=ae(this,e))return e.constructorFunction},$.prototype.whenDefined=function(e){if(!T(e))return Promise.reject(new SyntaxError("'"+e+"' is not a valid custom element name."));var t=this.s.get(e);if(t)return t.w;t=new J,this.s.set(e,t);var n=this.l.has(e)||this.j.has(e);return e=-1===this.m.indexOf(e),n&&e&&t.resolve(void 0),t.w},$.prototype.polyfillWrapFlushCallback=function(e){this.v&&Z(this.v);var t=this.i;this.i=function(n){return e(function(){return t(n)})}},window.CustomElementRegistry=$,$.prototype.define=$.prototype.define,$.prototype.upgrade=$.prototype.upgrade,$.prototype.get=$.prototype.get,$.prototype.whenDefined=$.prototype.whenDefined,$.prototype.polyfillDefineLazy=$.prototype.B,$.prototype.polyfillWrapFlushCallback=$.prototype.polyfillWrapFlushCallback;var re={},oe=window.customElements;function se(){var P=new B;!function(t){function n(){var n=this.constructor,a=document.__CE_registry.u.get(n);if(!a)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var i=a.constructionStack;if(0===i.length)return i=e.call(document,a.localName),Object.setPrototypeOf(i,n.prototype),i.__CE_state=1,i.__CE_definition=a,z(t,i),i;var r=i.length-1,o=i[r];if(o===re)throw Error("Failed to construct '"+a.localName+"': This element was already constructed.");return i[r]=re,Object.setPrototypeOf(o,n.prototype),z(t,o),o}n.prototype=A.prototype,Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:n}),window.HTMLElement=n}(P),function(e){Document.prototype.createElement=function(t){return Q(e,this,t,null)},Document.prototype.importNode=function(t,a){return t=n.call(this,t,!!a),this.__CE_registry?W(e,t):V(e,t),t},Document.prototype.createElementNS=function(t,n){return Q(e,this,n,t)},ie(e,Document.prototype,{prepend:a,append:i})}(P),ie(P,DocumentFragment.prototype,{prepend:r,append:o}),function(e){function t(t,n){Object.defineProperty(t,"textContent",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(t){if(this.nodeType===Node.TEXT_NODE)n.set.call(this,t);else{var a=void 0;if(this.firstChild){var i=this.childNodes,r=i.length;if(0<r&&F(this)){a=Array(r);for(var o=0;o<r;o++)a[o]=i[o]}}if(n.set.call(this,t),a)for(t=0;t<a.length;t++)K(e,a[t])}}})}Node.prototype.insertBefore=function(t,n){if(t instanceof DocumentFragment){var a=H(t);if(t=d.call(this,t,n),F(this))for(n=0;n<a.length;n++)G(e,a[n]);return t}return a=t instanceof Element&&F(t),n=d.call(this,t,n),a&&K(e,t),F(this)&&G(e,t),n},Node.prototype.appendChild=function(t){if(t instanceof DocumentFragment){var n=H(t);if(t=c.call(this,t),F(this))for(var a=0;a<n.length;a++)G(e,n[a]);return t}return n=t instanceof Element&&F(t),a=c.call(this,t),n&&K(e,t),F(this)&&G(e,t),a},Node.prototype.cloneNode=function(t){return t=s.call(this,!!t),this.ownerDocument.__CE_registry?W(e,t):V(e,t),t},Node.prototype.removeChild=function(t){var n=t instanceof Element&&F(t),a=l.call(this,t);return n&&K(e,t),a},Node.prototype.replaceChild=function(t,n){if(t instanceof DocumentFragment){var a=H(t);if(t=u.call(this,t,n),F(this))for(K(e,n),n=0;n<a.length;n++)G(e,a[n]);return t}a=t instanceof Element&&F(t);var i=u.call(this,t,n),r=F(this);return r&&K(e,n),a&&K(e,t),r&&G(e,t),i},f&&f.get?t(Node.prototype,f):function(e,t){e.f=!0,e.h.push(t)}(e,function(e){t(e,{enumerable:!0,configurable:!0,get:function(){for(var e=[],t=this.firstChild;t;t=t.nextSibling)t.nodeType!==Node.COMMENT_NODE&&e.push(t.textContent);return e.join("")},set:function(e){for(;this.firstChild;)l.call(this,this.firstChild);null!=e&&""!==e&&c.call(this,document.createTextNode(e))}})})}(P),function(e){function n(t,n){Object.defineProperty(t,"innerHTML",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(t){var a=this,i=void 0;if(F(this)&&(i=[],j(e,this,function(e){e!==a&&i.push(e)})),n.set.call(this,t),i)for(var r=0;r<i.length;r++){var o=i[r];1===o.__CE_state&&e.disconnectedCallback(o)}return this.ownerDocument.__CE_registry?W(e,this):V(e,this),t}})}function a(t,n){t.insertAdjacentElement=function(t,a){var i=F(a);return t=n.call(this,t,a),i&&K(e,a),F(t)&&G(e,a),t}}function i(t,n){function a(t,n){for(var a=[];t!==n;t=t.nextSibling)a.push(t);for(n=0;n<a.length;n++)W(e,a[n])}t.insertAdjacentHTML=function(e,t){if("beforebegin"===(e=e.toLowerCase())){var i=this.previousSibling;n.call(this,e,t),a(i||this.parentNode.firstChild,this)}else if("afterbegin"===e)i=this.firstChild,n.call(this,e,t),a(this.firstChild,i);else if("beforeend"===e)i=this.lastChild,n.call(this,e,t),a(i||this.firstChild,null);else{if("afterend"!==e)throw new SyntaxError("The value provided ("+String(e)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");i=this.nextSibling,n.call(this,e,t),a(this.nextSibling,i)}}}p&&(Element.prototype.attachShadow=function(t){if(t=p.call(this,t),e.f&&!t.__CE_patched){t.__CE_patched=!0;for(var n=0;n<e.h.length;n++)e.h[n](t)}return this.__CE_shadowRoot=t}),m&&m.get?n(Element.prototype,m):L&&L.get?n(HTMLElement.prototype,L):function(e,t){e.f=!0,e.a.push(t)}(e,function(e){n(e,{enumerable:!0,configurable:!0,get:function(){return s.call(this,!0).innerHTML},set:function(e){var n="template"===this.localName,a=n?this.content:this,i=t.call(document,this.namespaceURI,this.localName);for(i.innerHTML=e;0<a.childNodes.length;)l.call(a,a.childNodes[0]);for(e=n?i.content:i;0<e.childNodes.length;)c.call(a,e.childNodes[0])}})}),Element.prototype.setAttribute=function(t,n){if(1!==this.__CE_state)return h.call(this,t,n);var a=_.call(this,t);h.call(this,t,n),n=_.call(this,t),e.attributeChangedCallback(this,t,a,n,null)},Element.prototype.setAttributeNS=function(t,n,a){if(1!==this.__CE_state)return v.call(this,t,n,a);var i=g.call(this,t,n);v.call(this,t,n,a),a=g.call(this,t,n),e.attributeChangedCallback(this,n,i,a,t)},Element.prototype.removeAttribute=function(t){if(1!==this.__CE_state)return b.call(this,t);var n=_.call(this,t);b.call(this,t),null!==n&&e.attributeChangedCallback(this,t,n,null,null)},Element.prototype.removeAttributeNS=function(t,n){if(1!==this.__CE_state)return y.call(this,t,n);var a=g.call(this,t,n);y.call(this,t,n);var i=g.call(this,t,n);a!==i&&e.attributeChangedCallback(this,n,a,i,t)},k?a(HTMLElement.prototype,k):S&&a(Element.prototype,S),M?i(HTMLElement.prototype,M):D&&i(Element.prototype,D),ie(e,Element.prototype,{prepend:I,append:x}),function(e){function t(t){return function(n){for(var a=[],i=0;i<arguments.length;++i)a[i]=arguments[i];i=[];for(var r=[],o=0;o<a.length;o++){var s=a[o];if(s instanceof Element&&F(s)&&r.push(s),s instanceof DocumentFragment)for(s=s.firstChild;s;s=s.nextSibling)i.push(s);else i.push(s)}for(t.apply(this,a),a=0;a<r.length;a++)K(e,r[a]);if(F(this))for(a=0;a<i.length;a++)(r=i[a])instanceof Element&&G(e,r)}}var n=Element.prototype;void 0!==C&&(n.before=t(C)),void 0!==O&&(n.after=t(O)),void 0!==w&&(n.replaceWith=function(t){for(var n=[],a=0;a<arguments.length;++a)n[a]=arguments[a];a=[];for(var i=[],r=0;r<n.length;r++){var o=n[r];if(o instanceof Element&&F(o)&&i.push(o),o instanceof DocumentFragment)for(o=o.firstChild;o;o=o.nextSibling)a.push(o);else a.push(o)}for(r=F(this),w.apply(this,n),n=0;n<i.length;n++)K(e,i[n]);if(r)for(K(e,this),n=0;n<a.length;n++)(i=a[n])instanceof Element&&G(e,i)}),void 0!==E&&(n.remove=function(){var t=F(this);E.call(this),t&&K(e,this)})}(e)}(P),P=new $(P),document.__CE_registry=P,Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:P})}oe&&!oe.forcePolyfill&&"function"==typeof oe.define&&"function"==typeof oe.get||se(),window.__CE_installPolyfill=se}).call(self)},wN3S:function(e,t,n){"use strict";var a,i;Object.defineProperty(t,"__esModule",{value:!0}),(i=t.LayoutType||(t.LayoutType={})).Results="ResultsLayout",i.Filter="FiltersLayout",(a=t.LayoutRenderType||(t.LayoutRenderType={})).Handlebars="Handlebars",a.AdaptiveCards="AdaptiveCards"},xIPP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("UNJV"),i=n("Swo8"),r=function(){function e(e){this.serviceScope=e}return Object.defineProperty(e.prototype,"properties",{get:function(){return this._properties},set:function(e){this._properties=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"render",{get:function(){return this._render},set:function(e){this._render=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"context",{get:function(){return this._context},set:function(e){this._context=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"serviceKeys",{get:function(){return this._serviceKeys},set:function(e){this._serviceKeys=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"editMode",{get:function(){return this._editMode},set:function(e){this._editMode=e},enumerable:!0,configurable:!0}),e.prototype.onInit=function(){},e.prototype.getPropertyPaneGroupsConfiguration=function(){return[]},e.prototype.getPagingBehavior=function(){return a.PagingBehavior.Dynamic},e.prototype.getFilterBehavior=function(){return i.FilterBehavior.Static},e.prototype.getAppliedFilters=function(){return[]},e.prototype.getTemplateSlots=function(){return[]},e.prototype.onPropertyUpdate=function(e,t,n){},e.prototype.getSortableFields=function(){return[]},e}();t.BaseDataSource=r}}]);