(window.webpackJsonp_1a86ce4e35bac7ae60ca710fe0988d33=window.webpackJsonp_1a86ce4e35bac7ae60ca710fe0988d33||[]).push([[163],{"75+5":function(t,e,o){(t.exports=o("k9so")(!1)).push([t.i,".textDialog_7520d201{max-width:100%}",""])},JEvU:function(t,e,o){var i=o("75+5"),a=o("3zAo");"string"==typeof i&&(i=[[t.i,i]]);for(var s=0;s<i.length;s++)a.loadStyles(i[s][1],!0);i.locals&&(t.exports=i.locals)},nxHY:function(t,e,o){"use strict";o.r(e);var i=o("cDcd"),a=o("Ugnp"),s=o("13Lh"),n=o("dMCP"),l=o("c0sA"),r=o("NNms");o("JEvU");o("xEZU");var p,c=o("xeb6"),d=o("4WNs"),h=(p=function(t,e){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}p(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),g=i.lazy(function(){return o.e(2).then(o.t.bind(null,"dXKQ",7))}),u=function(t){function e(e,o){var i=t.call(this,e)||this;return i.state={dialogText:i.props.dialogTextFieldValue?i.props.dialogTextFieldValue:"",showDialog:!1},i}return h(e,t),e.prototype.showDialog=function(){this.setState({dialogText:this.state.dialogText?this.state.dialogText:"",showDialog:!0})},e.prototype.saveDialog=function(){this.setState({dialogText:this.state.dialogText?this.state.dialogText:"",showDialog:!1}),this.props.onChanged&&this.props.onChanged(this.state.dialogText)},e.prototype.cancelDialog=function(){this.setState({dialogText:this.props.dialogTextFieldValue?this.props.dialogTextFieldValue:"",showDialog:!1})},e.prototype.onDialogTextChanged=function(t){this.setState({dialogText:t,showDialog:this.state.showDialog})},e.prototype.componentDidUpdate=function(t,e){this.props.disabled===t.disabled&&this.props.stateKey===t.stateKey||this.setState({dialogText:this.props.dialogTextFieldValue?this.props.dialogTextFieldValue:"",showDialog:this.state.showDialog})},e.prototype.render=function(){return i.createElement("div",null,i.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},i.createElement(c.a,{value:this.state.dialogText,readOnly:!0,styles:{root:{width:"100%",marginRight:15,fontSize:"small",fontFamily:"Courier New"}}}),i.createElement(d.a,{iconName:"CodeEdit",onClick:this.showDialog.bind(this),styles:{root:{fontSize:20,cursor:"pointer"}}})),i.createElement(a.a,{hidden:!this.state.showDialog,dialogContentProps:{subText:this.props.strings.dialogTitle,type:s.a.normal},onDismiss:this.cancelDialog.bind(this),title:this.props.strings.dialogTitle,modalProps:{isBlocking:!0,containerClassName:"ms-dialogMainOverride textDialog_7520d201"}},i.createElement(i.Suspense,{fallback:""},i.createElement(g,{width:"600px",mode:this.props.language?this.props.language:"html",theme:"monokai",enableLiveAutocompletion:!1,showPrintMargin:!1,showGutter:!0,onChange:this.onDialogTextChanged.bind(this),value:this.state.dialogText,highlightActiveLine:!0,editorProps:{$blockScrolling:1/0},name:"CodeEditor",enableBasicAutocompletion:!0})),i.createElement(n.a,null,i.createElement(l.a,{buttonType:r.a.primary,onClick:this.saveDialog.bind(this)},this.props.strings.saveButtonText),i.createElement(l.a,{onClick:this.cancelDialog.bind(this)},this.props.strings.cancelButtonText))))},e}(i.Component);e.default=u},xEZU:function(t,e,o){var i=o("xF5K"),a=o("3zAo");"string"==typeof i&&(i=[[t.i,i]]);for(var s=0;s<i.length;s++)a.loadStyles(i[s][1],!0);i.locals&&(t.exports=i.locals)},xF5K:function(t,e,o){(t.exports=o("k9so")(!1)).push([t.i,".ace_editor_8d1729ab.ace_autocomplete_8d1729ab{z-index:2000000!important}",""])}}]);