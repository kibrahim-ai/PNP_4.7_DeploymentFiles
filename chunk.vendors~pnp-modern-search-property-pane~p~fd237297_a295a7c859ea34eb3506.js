(window.webpackJsonp_2ea4494a4801c9aca03bba9314014278=window.webpackJsonp_2ea4494a4801c9aca03bba9314014278||[]).push([[5],{"1T33":function(e,t,n){var a=n("muZu"),i=n("G3p3"),r=n("oA63"),o=n("eKcC"),s=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)a(t,r(e)),e=i(e);return t}:o;e.exports=s},"3kLK":function(e,t){},"4Qqc":function(e,t){var n=/\w*$/;e.exports=function(e){var t=new e.constructor(e.source,n.exec(e));return t.lastIndex=e.lastIndex,t}},"5AKu":function(e,t,n){var a=n("Ln2W"),i=n("jKWR"),r=n("4Qqc"),o=n("gmKo"),s=n("URwZ");e.exports=function(e,t,n){var c=e.constructor;switch(t){case"[object ArrayBuffer]":return a(e);case"[object Boolean]":case"[object Date]":return new c(+e);case"[object DataView]":return i(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return s(e,n);case"[object Map]":case"[object Set]":return new c;case"[object Number]":case"[object String]":return new c(e);case"[object RegExp]":return r(e);case"[object Symbol]":return o(e)}}},"7NGV":function(e,t,n){var a=n("Vc2o"),i=n("lf6h");e.exports=function(e){return i(e)&&"[object Set]"==a(e)}},"8cEZ":function(e,t,n){var a=n("FbU2"),i=n("1T33"),r=n("38cL");e.exports=function(e){return a(e,r,i)}},"9cH7":function(e,t,n){var a=n("+reW"),i=n("apBQ"),r=n("GNBy"),o=n("y24P"),s=n("suam"),c=n("OSrB"),d=n("6hI1"),l=n("8cEZ"),u=d(function(e,t){var n={};if(null==e)return n;var d=!1;t=a(t,function(t){return t=o(t,e),d||(d=t.length>1),t}),s(e,l(e),n),d&&(n=i(n,7,c));for(var u=t.length;u--;)r(n,t[u]);return n});e.exports=u},BuoU:function(e,t,n){var a=n("suam"),i=n("6vUj");e.exports=function(e,t){return e&&a(t,i(t),e)}},"D+S9":function(e,t,n){"use strict";n.d(t,"e",function(){return v});var a=n("v2OP"),i=n("2cRh"),r=n("cDcd"),o=n("Ms4L"),s=n("HHvx"),c=n("EzJR"),d=n("liQt"),l=n("unQo"),u=n("oRsx"),f=n("nukM"),p=n("CJGb"),m=n("waiY"),_=Object(o.e)(),h="Toggle",b=function(e){function t(t){var n=e.call(this,t)||this;return n._toggleButton=r.createRef(),n._onClick=function(e){var t=n.props,a=t.disabled,i=t.checked,r=t.onChange,o=t.onChanged,s=t.onClick,c=n.state.checked;a||(void 0===i&&n.setState({checked:!c}),r&&r(e,!c),o&&o(!c),s&&s(e))},Object(s.e)(n),Object(c.e)(h,t,{checked:"defaultChecked"}),Object(d.e)(h,t,{onAriaLabel:"ariaLabel",offAriaLabel:void 0,onChanged:"onChange"}),n.state={checked:!(!t.checked&&!t.defaultChecked)},n._id=t.id||Object(l.e)("Toggle"),n}return Object(i.__extends)(t,e),t.getDerivedStateFromProps=function(e,t){return void 0===e.checked?null:{checked:!!e.checked}},Object.defineProperty(t.prototype,"checked",{get:function(){return this.state.checked},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this,t=this.props,n=t.as,a=void 0===n?"div":n,o=t.className,s=t.theme,c=t.disabled,d=t.keytipProps,l=t.label,h=t.ariaLabel,b=t.onAriaLabel,g=t.offAriaLabel,v=t.offText,y=t.onText,S=t.styles,D=t.inlineLabel,I=this.state.checked,x=I?y:v,C=I?b:g,O=Object(u.a)(this.props,u.o,["defaultChecked"]),w=_(S,{theme:s,className:o,disabled:c,checked:I,inlineLabel:D,onOffMissing:!y&&!v}),E=this._id+"-label",A=this._id+"-stateText",L=void 0;h||C||(l&&(L=E),x&&(L=L?L+" "+A:A));var k=this.props.role?this.props.role:"switch",M=function(t){return void 0===t&&(t={}),r.createElement("button",Object(i.__assign)({},O,t,{className:w.pill,disabled:c,id:e._id,type:"button",role:k,ref:e._toggleButton,"aria-disabled":c,"aria-checked":I,"aria-label":h||C,"data-is-focusable":!0,onChange:e._noop,onClick:e._onClick,"aria-labelledby":L}),r.createElement("span",{className:w.thumb}))},P=d?r.createElement(m.e,{keytipProps:d,ariaDescribedBy:O["aria-describedby"],disabled:c},function(e){return M(e)}):M();return r.createElement(a,{className:w.root,hidden:O.hidden},l&&r.createElement(p.e,{htmlFor:this._id,className:w.label,id:E},l),r.createElement("div",{className:w.container},P,x&&r.createElement(p.e,{htmlFor:this._id,className:w.text,id:A},x)),r.createElement(f.e,null))},t.prototype.focus=function(){this._toggleButton.current&&this._toggleButton.current.focus()},t.prototype._noop=function(){},t}(r.Component),g=n("yEBe"),v=Object(a.e)(b,function(e){var t,n,a,r,o,s,c,d=e.theme,l=e.className,u=e.disabled,f=e.checked,p=e.inlineLabel,m=e.onOffMissing,_=d.semanticColors,h=d.palette,b=_.bodyBackground,v=_.inputBackgroundChecked,y=_.inputBackgroundCheckedHovered,S=h.neutralDark,D=_.disabledBodySubtext,I=_.smallInputBorder,x=_.inputForegroundChecked,C=_.disabledBodySubtext,O=_.disabledBackground,w=_.smallInputBorder,E=_.inputBorderHovered,A=_.disabledBodySubtext,L=_.disabledText;return{root:["ms-Toggle",f&&"is-checked",!u&&"is-enabled",u&&"is-disabled",d.fonts.medium,{marginBottom:"8px"},p&&{display:"flex",alignItems:"center"},l],label:["ms-Toggle-label",{display:"inline-block"},u&&{color:L,selectors:(t={},t[g.r]={color:"GrayText"},t)},p&&!m&&{marginRight:16},m&&p&&{order:1,marginLeft:16},p&&{wordBreak:"break-all"}],container:["ms-Toggle-innerContainer",{display:"flex",position:"relative"}],pill:["ms-Toggle-background",Object(g.S)(d,{inset:-3}),{fontSize:"20px",boxSizing:"border-box",width:40,height:20,borderRadius:10,transition:"all 0.1s ease",border:"1px solid "+w,background:b,cursor:"pointer",display:"flex",alignItems:"center",padding:"0 3px"},!u&&[!f&&{selectors:{":hover":[{borderColor:E}],":hover .ms-Toggle-thumb":[{backgroundColor:S,selectors:(n={},n[g.r]={borderColor:"Highlight"},n)}]}},f&&[{background:v,borderColor:"transparent",justifyContent:"flex-end"},{selectors:(a={":hover":[{backgroundColor:y,borderColor:"transparent",selectors:(r={},r[g.r]={backgroundColor:"Highlight"},r)}]},a[g.r]=Object(i.__assign)({backgroundColor:"Highlight"},Object(g.I)()),a)}]],u&&[{cursor:"default"},!f&&[{borderColor:A}],f&&[{backgroundColor:D,borderColor:"transparent",justifyContent:"flex-end"}]],!u&&{selectors:{"&:hover":{selectors:(o={},o[g.r]={borderColor:"Highlight"},o)}}}],thumb:["ms-Toggle-thumb",{display:"block",width:12,height:12,borderRadius:"50%",transition:"all 0.1s ease",backgroundColor:I,borderColor:"transparent",borderWidth:6,borderStyle:"solid",boxSizing:"border-box"},!u&&f&&[{backgroundColor:x,selectors:(s={},s[g.r]={backgroundColor:"Window",borderColor:"Window"},s)}],u&&[!f&&[{backgroundColor:C}],f&&[{backgroundColor:O}]]],text:["ms-Toggle-stateText",{selectors:{"&&":{padding:"0",margin:"0 8px",userSelect:"none",fontWeight:g.i.regular}}},u&&{selectors:{"&&":{color:L,selectors:(c={},c[g.r]={color:"GrayText"},c)}}}]}},void 0,{scope:"Toggle"})},Feko:function(e,t,n){"use strict";var a,i=n("cDcd"),r=n("a73M"),o=n("94/6");!function(e){e[e.Click=1]="Click",e[e.Hover=2]="Hover"}(a||(a={}));var s=n("yEBe"),c=n("EpMs");n("NWJi");var d,l=(d=function(e,t){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},d(e,t)},function(e,t){function n(){this.constructor=e}d(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e){function t(t,n){var a=e.call(this,t,n)||this;return a._onCalloutDismiss=a._onCalloutDismiss.bind(a),a.state={isCalloutVisible:!1},a}return l(t,e),t.prototype.render=function(){var e,t=this,n=this.props,d=n.disabled,l=n.label,u=n.calloutContent,f=n.calloutTrigger,p=n.calloutWidth,m=n.gapSpace;return i.createElement("div",{className:Object(c.e)((e={},e.headerBar_cee0aeea=!0,e.isDisabled_cee0aeea=!!d,e))},i.createElement("div",{className:"header_cee0aeea"},l),i.createElement("div",{className:"info_cee0aeea"},u&&i.createElement("i",{className:Object(s.C)("Info"),ref:function(e){t._infoIcon=e},onMouseOver:d||f!==a.Hover?null:this._onInfoIconMouseOver.bind(this),onMouseOut:d||f!==a.Hover?null:this._onInfoIconMouseOut.bind(this),onClick:d||f!==a.Click?null:this._onInfoIconClick.bind(this)})),this.state.isCalloutVisible&&i.createElement(r.e,{className:"headerCallout_cee0aeea",target:this._infoIcon,isBeakVisible:!0,directionalHint:o.e.leftCenter,directionalHintForRTL:o.e.rightCenter,onDismiss:this._onCalloutDismiss,gapSpace:void 0!==m?m:5,calloutWidth:p},u))},t.prototype._onCalloutDismiss=function(){this.state.isCalloutVisible&&this.setState({isCalloutVisible:!1})},t.prototype._onInfoIconMouseOver=function(){this.props.calloutTrigger===a.Hover&&(this.state.isCalloutVisible||this.setState({isCalloutVisible:!0}))},t.prototype._onInfoIconMouseOut=function(e){if(this.props.calloutTrigger===a.Hover){if(e.relatedTarget){var t=e.relatedTarget;if(t&&t.closest(".ms-Callout-container"))return}this.setState({isCalloutVisible:!1})}},t.prototype._onInfoIconClick=function(){this.props.calloutTrigger===a.Click&&this.setState({isCalloutVisible:!this.state.isCalloutVisible})},t}(i.Component),f=n("tMip"),p=n("D+S9"),m=n("9cH7"),_=n.n(m),h=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),b=function(){return b=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},b.apply(this,arguments)},g=function(e){function t(t){var n=e.call(this,t)||this;return f.e("PropertyFieldToggleWithCallout",{disabled:t.disabled}),n}return h(t,e),t.prototype.render=function(){return i.createElement("div",null,i.createElement(u,b({},this.props,{label:this.props.label.toString()})),i.createElement(p.e,b({},_()(this.props,["label"]))))},t}(i.Component);t.e=g},GNBy:function(e,t,n){var a=n("y24P"),i=n("LsRE"),r=n("d/0d"),o=n("OD7W");e.exports=function(e,t){return t=a(t,e),null==(e=r(e,t))||delete e[o(i(t))]}},"Jy9+":function(e,t,n){var a=n("suam"),i=n("oA63");e.exports=function(e,t){return a(e,i(e),t)}},NWJi:function(e,t,n){var a=n("zzRY"),i=n("5rWB");"string"==typeof a&&(a=[[e.i,a]]);for(var r=0;r<a.length;r++)i.loadStyles(a[r][1],!0);a.locals&&(e.exports=a.locals)},OSrB:function(e,t,n){var a=n("pNQ9");e.exports=function(e){return a(e)?void 0:e}},R2EU:function(e,t,n){var a=n("Vc2o"),i=n("lf6h");e.exports=function(e){return i(e)&&"[object Map]"==a(e)}},R6Qu:function(e,t,n){var a=n("suam"),i=n("38cL");e.exports=function(e,t){return e&&a(t,i(t),e)}},apBQ:function(e,t,n){var a=n("Zjmp"),i=n("Frnp"),r=n("TZ1K"),o=n("BuoU"),s=n("R6Qu"),c=n("j0b5"),d=n("x22w"),l=n("Jy9+"),u=n("lpad"),f=n("Mfbz"),p=n("8cEZ"),m=n("Vc2o"),_=n("s4xM"),h=n("5AKu"),b=n("3sUJ"),g=n("eoSM"),v=n("Zsrj"),y=n("dLFG"),S=n("PWyJ"),D=n("hibQ"),I=n("6vUj"),x=n("38cL"),C="[object Arguments]",O="[object Function]",w="[object Object]",E={};E[C]=E["[object Array]"]=E["[object ArrayBuffer]"]=E["[object DataView]"]=E["[object Boolean]"]=E["[object Date]"]=E["[object Float32Array]"]=E["[object Float64Array]"]=E["[object Int8Array]"]=E["[object Int16Array]"]=E["[object Int32Array]"]=E["[object Map]"]=E["[object Number]"]=E[w]=E["[object RegExp]"]=E["[object Set]"]=E["[object String]"]=E["[object Symbol]"]=E["[object Uint8Array]"]=E["[object Uint8ClampedArray]"]=E["[object Uint16Array]"]=E["[object Uint32Array]"]=!0,E["[object Error]"]=E[O]=E["[object WeakMap]"]=!1,e.exports=function e(t,n,A,L,k,M){var P,T=1&n,U=2&n,F=4&n;if(A&&(P=k?A(t,L,k,M):A(t)),void 0!==P)return P;if(!S(t))return t;var H=g(t);if(H){if(P=_(t),!T)return d(t,P)}else{var R=m(t),N=R==O||"[object GeneratorFunction]"==R;if(v(t))return c(t,T);if(R==w||R==C||N&&!k){if(P=U||N?{}:b(t),!T)return U?u(t,s(P,t)):l(t,o(P,t))}else{if(!E[R])return k?t:{};P=h(t,R,T)}}M||(M=new a);var B=M.get(t);if(B)return B;M.set(t,P),D(t)?t.forEach(function(a){P.add(e(a,n,A,a,t,M))}):y(t)&&t.forEach(function(a,i){P.set(i,e(a,n,A,i,t,M))});var j=H?void 0:(F?U?p:f:U?x:I)(t);return i(j||t,function(a,i){j&&(a=t[i=a]),r(P,i,e(a,n,A,i,t,M))}),P}},dLFG:function(e,t,n){var a=n("R2EU"),i=n("NTsA"),r=n("bUaa"),o=r&&r.isMap,s=o?i(o):a;e.exports=s},gmKo:function(e,t,n){var a=n("cBxx"),i=a?a.prototype:void 0,r=i?i.valueOf:void 0;e.exports=function(e){return r?Object(r.call(e)):{}}},hibQ:function(e,t,n){var a=n("7NGV"),i=n("NTsA"),r=n("bUaa"),o=r&&r.isSet,s=o?i(o):a;e.exports=s},jKWR:function(e,t,n){var a=n("Ln2W");e.exports=function(e,t){var n=t?a(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}},lpad:function(e,t,n){var a=n("suam"),i=n("1T33");e.exports=function(e,t){return a(e,i(e),t)}},s4xM:function(e,t){var n=Object.prototype.hasOwnProperty;e.exports=function(e){var t=e.length,a=new e.constructor(t);return t&&"string"==typeof e[0]&&n.call(e,"index")&&(a.index=e.index,a.input=e.input),a}},w9LH:function(e,t,n){"use strict";var a;n.r(t),n.d(t,"CalloutTriggers",function(){return a}),function(e){e[e.Click=1]="Click",e[e.Hover=2]="Hover"}(a||(a={}))},wQej:function(e,t){},yVds:function(e,t,n){"use strict";n.r(t);var a=n("3kLK");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,function(){return a[e]})}(i);var r=n("ymU5");n.d(t,"PropertyFieldToggleWithCallout",function(){return r.e});var o=n("wQej");for(var i in o)["default","PropertyFieldToggleWithCallout"].indexOf(i)<0&&function(e){n.d(t,e,function(){return o[e]})}(i);n("Feko")},ymU5:function(e,t,n){"use strict";n.d(t,"e",function(){return d});var a=n("cDcd"),i=n("faye"),r=n("26ea"),o=n("Feko"),s=function(){return s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)},c=function(){function e(e,t){this.type=r.PropertyPaneFieldType.Custom,this.targetProperty=e,this.properties=t,this.properties.onRender=this._render.bind(this),this.properties.onDispose=this._dispose.bind(this)}return e.prototype._render=function(e,t,n){var r=this.properties,c=a.createElement(o.e,s(s({},r),{onChanged:this._onChanged.bind(this)}));i.render(c,e),n&&(this._onChangeCallback=n)},e.prototype._dispose=function(e){i.unmountComponentAtNode(e)},e.prototype._onChanged=function(e){this._onChangeCallback&&this._onChangeCallback(this.targetProperty,e)},e}();function d(e,t){return new c(e,s(s({},t),{onRender:null,onDispose:null}))}},zy3E:function(e,t,n){"use strict";n.r(t);var a=n("yVds");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,function(){return a[e]})}(i)},zzRY:function(e,t,n){(e.exports=n("k9so")(!1)).push([e.i,'.headerBar_cee0aeea{position:relative;margin-bottom:5px}.headerBar_cee0aeea.isDisabled_cee0aeea{color:"[theme:disabledText, default:#a19f9d]"}.headerBar_cee0aeea.isDisabled_cee0aeea .info_cee0aeea{cursor:default}.headerBar_cee0aeea .header_cee0aeea{margin-right:24px}.headerBar_cee0aeea .info_cee0aeea{position:absolute;font-size:14px;background-color:transparent;top:3px;right:0;cursor:pointer}.headerCallout_cee0aeea{padding:10px}',""])}}]);