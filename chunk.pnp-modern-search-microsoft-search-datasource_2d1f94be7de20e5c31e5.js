(window.webpackJsonp_1a86ce4e35bac7ae60ca710fe0988d33=window.webpackJsonp_1a86ce4e35bac7ae60ca710fe0988d33||[]).push([[15],{GaMX:function(e,t,r){"use strict";r.r(t),r.d(t,"EntityType",function(){return d}),r.d(t,"MicrosoftSearchDataSource",function(){return g});var o,i=r("MONU"),n=r("26ea"),s=r("Pk8u"),a=r("vlQI"),l=r("tDQZ"),c=r("aFY1"),p=r("PqB8");!function(e){e.Count="count",e.KeyAsNumber="keyAsNumber",e.KeyAsString="keyAsString"}(o||(o={}));var u,d,h=r("UqOl"),f=r("/ED6"),y=r("IZhc"),m=(u=function(e,t){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),S=function(e,t,r,o){return new(r||(r=Promise))(function(i,n){function s(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(s,a)}l((o=o.apply(e,t||[])).next())})},b=function(e,t){var r,o,i,n,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return n={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function a(n){return function(a){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(i=2&n[0]?o.return:n[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,n[1])).done)return i;switch(o=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,o=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==n[0]&&2!==n[0])){s=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){s.label=n[1];break}if(6===n[0]&&s.label<i[1]){s.label=i[1],i=n;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(n);break}i[2]&&s.ops.pop(),s.trys.pop();continue}n=t.call(e,s)}catch(e){n=[6,e],o=0}finally{r=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,a])}}};!function(e){e.Message="message",e.Event="event",e.Drive="drive",e.DriveItem="driveItem",e.ExternalItem="externalItem",e.List="list",e.ListItem="listItem",e.Site="site"}(d||(d={}));var g=function(e){function t(t){var r=e.call(this,t)||this;return r._propertyPaneWebPartInformation=null,r._availableFields=[],r._availableEntityTypeOptions=[{key:d.Message,text:"Messages"},{key:d.Event,text:"Events"},{key:d.Drive,text:"Drive"},{key:d.DriveItem,text:"Drive Items"},{key:d.ExternalItem,text:"External Items"},{key:d.ListItem,text:"List Items"},{key:d.Site,text:"Sites"}],r._itemsCount=0,r._propertyFieldCollectionData=null,r._customCollectionFieldType=null,t.whenFinished(function(){r._tokenService=t.consume(l.b.ServiceKey)}),r}return m(t,e),t.prototype.onInit=function(){return S(this,void 0,void 0,function(){var e,t,o,i,n;return b(this,function(s){switch(s.label){case 0:return this.dateHelper=this.serviceScope.consume(h.a.ServiceKey),e=this,[4,this.dateHelper.moment()];case 1:return e.moment=s.sent(),this.editMode?[4,Promise.all([r.e(1),r.e(2),r.e(3),r.e(4),r.e(151)]).then(r.bind(null,"hgYt"))]:[3,4];case 2:return t=s.sent(),o=t.PropertyFieldCollectionData,i=t.CustomCollectionFieldType,[4,Promise.all([r.e(1),r.e(2),r.e(3),r.e(4),r.e(151)]).then(r.bind(null,"NdhV"))];case 3:n=s.sent().PropertyPaneWebPartInformation,this._propertyPaneWebPartInformation=n,this._propertyFieldCollectionData=o,this._customCollectionFieldType=i,s.label=4;case 4:return this.initProperties(),[2]}})})},t.prototype.getItemCount=function(){return this._itemsCount},t.prototype.getFilterBehavior=function(){return i.g.Dynamic},t.prototype.getPagingBehavior=function(){return i.n.Dynamic},t.prototype.getData=function(e){return S(this,void 0,void 0,function(){var t;return b(this,function(r){switch(r.label){case 0:return[4,this.buildMicrosoftSearchRequest(e)];case 1:return t=r.sent(),[4,this.search(t)];case 2:return[2,r.sent()]}})})},t.prototype.getPropertyPaneGroupsConfiguration=function(){var e=this,t=this._availableEntityTypeOptions.map(function(t){if(-1!==e.properties.entityTypes.indexOf(t.key))return t.text}),r=[Object(n.PropertyPaneLabel)("",{text:p.DataSources.MicrosoftSearch.QueryTextFieldLabel}),this._propertyPaneWebPartInformation({description:"<em>"+p.DataSources.MicrosoftSearch.QueryTextFieldInfoMessage+"</em>",key:"queryText"}),new c.a("dataSourceProperties.entityTypes",{availableOptions:this._availableEntityTypeOptions,allowMultiSelect:!0,allowFreeform:!1,description:"",label:p.DataSources.MicrosoftSearch.EntityTypesField,placeholder:"",searchAsYouType:!1,defaultSelectedKeys:this.properties.entityTypes,onPropertyChange:this.onCustomPropertyUpdate.bind(this),textDisplayValue:t.filter(function(e){return e}).join(",")}),new c.a("dataSourceProperties.fields",{availableOptions:this._availableFields,allowMultiSelect:!0,allowFreeform:!0,description:p.DataSources.MicrosoftSearch.SelectedFieldsPropertiesFieldDescription,label:p.DataSources.MicrosoftSearch.SelectedFieldsPropertiesFieldLabel,placeholder:p.DataSources.MicrosoftSearch.SelectedFieldsPlaceholderLabel,searchAsYouType:!1,defaultSelectedKeys:this.properties.fields,onPropertyChange:this.onCustomPropertyUpdate.bind(this),onUpdateOptions:function(t){e._availableFields=t}.bind(this)})];return-1===this.properties.entityTypes.indexOf(d.DriveItem)&&-1===this.properties.entityTypes.indexOf(d.ListItem)&&-1===this.properties.entityTypes.indexOf(d.Site)&&-1===this.properties.entityTypes.indexOf(d.List)||r.push(this._propertyFieldCollectionData("dataSourceProperties.sortProperties",{manageBtnLabel:p.DataSources.SearchCommon.Sort.EditSortLabel,key:"sortProperties",enableSorting:!0,panelHeader:p.DataSources.SearchCommon.Sort.EditSortLabel,panelDescription:p.DataSources.SearchCommon.Sort.SortListDescription,label:p.DataSources.SearchCommon.Sort.SortPropertyPaneFieldLabel,value:this.properties.sortProperties,fields:[{id:"sortField",title:p.DataSources.SearchCommon.Sort.SortFieldColumnLabel,type:this._customCollectionFieldType.string},{id:"sortDirection",title:p.DataSources.SearchCommon.Sort.SortDirectionColumnLabel,type:this._customCollectionFieldType.dropdown,required:!0,options:[{key:y.a.Ascending,text:p.DataSources.SearchCommon.Sort.SortDirectionAscendingLabel},{key:y.a.Descending,text:p.DataSources.SearchCommon.Sort.SortDirectionDescendingLabel}],defaultValue:y.a.Ascending}]})),-1!==this.properties.entityTypes.indexOf(d.ExternalItem)&&r.push(new c.a("dataSourceProperties.contentSourceConnectionIds",{availableOptions:[],allowMultiSelect:!0,allowFreeform:!0,description:p.DataSources.MicrosoftSearch.ContentSourcesFieldDescriptionLabel,label:p.DataSources.MicrosoftSearch.ContentSourcesFieldLabel,placeholder:p.DataSources.MicrosoftSearch.ContentSourcesFieldPlaceholderLabel,searchAsYouType:!1,defaultSelectedKeys:this.properties.contentSourceConnectionIds,onPropertyChange:this.onCustomPropertyUpdate.bind(this)})),-1!==this.properties.entityTypes.indexOf(d.Message)&&1===this.properties.entityTypes.length&&r.push(Object(n.PropertyPaneToggle)("dataSourceProperties.enableTopResults",{label:p.DataSources.MicrosoftSearch.EnableTopResultsLabel})),[{groupName:p.DataSources.MicrosoftSearch.SourceConfigurationGroupName,groupFields:r}]},t.prototype.onCustomPropertyUpdate=function(e,t){0===e.localeCompare("dataSourceProperties.entityTypes")&&(this.properties.entityTypes=Object(s.cloneDeep)(t).map(function(e){return e.key}),this.context.propertyPane.refresh(),this.render()),0===e.localeCompare("dataSourceProperties.fields")&&(this.properties.fields=Object(s.cloneDeep)(t).map(function(e){return e.key}),this.context.propertyPane.refresh(),this.render()),0===e.localeCompare("dataSourceProperties.contentSourceConnectionIds")&&(this.properties.contentSourceConnectionIds=Object(s.cloneDeep)(t).map(function(e){return e.key}),this.context.propertyPane.refresh(),this.render())},t.prototype.getTemplateSlots=function(){return[{slotName:i.e.Title,slotField:"resource.name"},{slotName:i.e.Path,slotField:"resource.webUrl"},{slotName:i.e.Summary,slotField:"summary"},{slotName:i.e.FileType,slotField:"resource.webUrl"},{slotName:i.e.PreviewImageUrl,slotField:"AutoPreviewImageUrl"},{slotName:i.e.PreviewUrl,slotField:"AutoPreviewUrl"},{slotName:i.e.Tags,slotField:"owstaxidmetadataalltagsinfo"},{slotName:i.e.Date,slotField:"created"},{slotName:i.e.SiteId,slotField:"NormSiteID"},{slotName:i.e.WebId,slotField:"NormWebID"},{slotName:i.e.ListId,slotField:"NormListID"},{slotName:i.e.ItemId,slotField:"NormUniqueID"},{slotName:i.e.IsFolder,slotField:"ContentTypeId"}]},t.prototype.initProperties=function(){this.properties.entityTypes=void 0!==this.properties.entityTypes?this.properties.entityTypes:[d.DriveItem],this.properties.fields=void 0!==this.properties.fields?this.properties.fields:["Title","Path","DefaultEncodingUrl",,"ContentTypeId"].concat(["name","webUrl","filetype","createdBy","createdDateTime","lastModifiedDateTime","parentReference","size","description","file","folder"]),this.properties.sortProperties=void 0!==this.properties.sortProperties?this.properties.sortProperties:[],this.properties.contentSourceConnectionIds=void 0!==this.properties.contentSourceConnectionIds?this.properties.contentSourceConnectionIds:[]},t.prototype.buildMicrosoftSearchRequest=function(e){return S(this,void 0,void 0,function(){var t,r,n,a,l,c,p,u,d=this;return b(this,function(h){switch(h.label){case 0:return t=[],r=[],n=[],a=[],l="*",c=0,e.inputQueryText?[4,this._tokenService.resolveTokens(e.inputQueryText)]:[3,2];case 1:l=h.sent(),h.label=2;case 2:return e.pageNumber>1&&(c=(e.pageNumber-1)*e.itemsCountPerPage),t=e.filters.filtersConfiguration.map(function(e){var t,r={field:e.filterName,bucketDefinition:{isDescending:e.sortDirection!==i.j.Ascending,minimumCount:0,sortBy:e.sortBy===i.k.ByCount?o.Count:o.KeyAsString},size:(null===(t=e)||void 0===t?void 0:t.maxBuckets)?e.maxBuckets:10};if("DateIntervalFilterTemplate"===e.selectedTemplate){var n=d.moment(new Date).subtract(1,"years").subtract("minutes",1).toISOString(),s=d.moment(new Date).subtract(3,"months").subtract("minutes",1).toISOString(),a=d.moment(new Date).subtract(1,"months").subtract("minutes",1).toISOString(),l=d.moment(new Date).subtract(1,"week").subtract("minutes",1).toISOString(),c=d.moment(new Date).subtract(24,"hours").subtract("minutes",1).toISOString(),p=(new Date).toISOString();r.bucketDefinition.ranges=[{to:n},{from:n,to:s},{from:s,to:a},{from:a,to:l},{from:l,to:c},{from:c,to:p},{from:p}]}return r}),e.filters.selectedFilters.length>0&&(e.filters.selectedFilters.length>1&&e.filters.selectedFilters.filter(function(e){return e.values.length>0}).length>1?(p=this.buildAggregationFilters(e.filters.selectedFilters,e.filters.filtersConfiguration).join(","),Object(s.isEmpty)(p)||(r=r.concat([e.filters.filterOperator+"("+p+")"]))):r=r.concat(this.buildAggregationFilters(e.filters.selectedFilters,e.filters.filtersConfiguration))),this.properties.contentSourceConnectionIds.forEach(function(e){a.push("/external/connections/"+e)}),this.properties.sortProperties.forEach(function(e){n.push({name:e.sortField,isDescending:e.sortDirection===y.a.Descending})}),u={entityTypes:this.properties.entityTypes,query:{queryString:l},from:c,size:e.itemsCountPerPage},this.properties.fields.length>0&&(u.fields=this.properties.fields),t.length>0&&(u.aggregations=t.filter(function(e){return e})),r.length>0&&(u.aggregationFilters=r),n.length>0&&(u.sortProperties=n),a.length>0&&(u.contentSources=a),[2,u]}})})},t.prototype.buildAggregationFilters=function(e,t,r){var o=this,n=[];return e.forEach(function(e){var s=e.operator;if(f.a.getConfigurationForFilter(e,t))if(e.values.length>1){var a=null,l=null,c=e.values.map(function(e){var t=e.value;return o.moment(t,o.moment.ISO_8601,!0).isValid()&&(a||e.operator!==i.h.Geq&&e.operator!==i.h.Gt||(a=t),l||e.operator!==i.h.Lt&&e.operator!==i.h.Leq||(l=t)),/ǂǂ/.test(t)&&r?encodeURIComponent(t):t});a&&l?n.push(e.filterName+":range("+a+","+l+")"):n.push(e.filterName+":"+s+"("+c.join(",")+")")}else if(1===e.values.length){var p=e.values[0],u=/ǂǂ/.test(p.value)&&r?encodeURIComponent(p.value):p.value;o.moment(u,o.moment.ISO_8601,!0).isValid()&&(p.operator!==i.h.Gt&&p.operator!==i.h.Geq||(u="range("+u+",max)"),p.operator!==i.h.Leq&&p.operator!==i.h.Lt||(u="range(min,"+u+")")),n.push(e.filterName+":"+u)}}),n},t.prototype.search=function(e){return S(this,void 0,void 0,function(){var t,r,o,n;return b(this,function(s){switch(s.label){case 0:return t=0,r={items:[],filters:[]},o=[],[4,this.serviceScope.consume(a.MSGraphClientFactory.serviceKey).getClient()];case 1:return[4,s.sent().api("https://graph.microsoft.com/beta/search/query").header("SdkVersion","PnPModernSearch/"+this.context.manifest.version)];case 2:return[4,s.sent().post({requests:[e]})];case 3:return(n=s.sent()).value&&Array.isArray(n.value)&&n.value.forEach(function(e){e.hitsContainers.forEach(function(e){t+=e.total,e.hits&&(r.items=r.items.concat(e.hits)),e.aggregations&&e.aggregations.forEach(function(e){var t=[];e.buckets.forEach(function(e){t.push({count:e.count,name:e.key,value:e.aggregationFilterToken,operator:i.h.Contains})}),o.push({filterName:e.field,values:t})}),r.filters=o})}),this._itemsCount=t,[2,r]}})})},t}(i.a)},IZhc:function(e,t,r){"use strict";var o;r.d(t,"a",function(){return o}),function(e){e[e.Ascending=1]="Ascending",e[e.Descending=2]="Descending"}(o||(o={}))},aFY1:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var o=r("26ea"),i=r("cDcd"),n=r("faye"),s=r("hO2E"),a=function(){function e(e,t){this.type=o.PropertyPaneFieldType.Custom,this.targetProperty=e,this.properties={key:t.label,label:t.label,description:t.description,onPropertyChange:t.onPropertyChange,onGetErrorMessage:t.onGetErrorMessage,allowMultiSelect:t.allowMultiSelect,allowFreeform:t.allowFreeform,defaultSelectedKey:t.defaultSelectedKey,availableOptions:t.availableOptions,onUpdateOptions:t.onUpdateOptions,searchAsYouType:t.searchAsYouType,onLoadOptions:t.onLoadOptions,defaultSelectedKeys:t.defaultSelectedKeys,textDisplayValue:t.textDisplayValue,disabled:t.disabled,stateKey:t.stateKey,placeholder:t.placeholder,onRender:this.onRender.bind(this),onDispose:this.onDispose.bind(this)}}return e.prototype.render=function(){this.elem&&this.onRender(this.elem)},e.prototype.onDispose=function(e){n.unmountComponentAtNode(e)},e.prototype.onRender=function(e,t,r){var o=this;this.elem||(this.elem=e);var a=i.createElement("div",{key:this.properties.key},i.createElement(s.a,{label:this.properties.label,allowMultiSelect:this.properties.allowMultiSelect,allowFreeform:this.properties.allowFreeform,defaultSelectedKey:this.properties.defaultSelectedKey,availableOptions:this.properties.availableOptions,defaultSelectedKeys:this.properties.defaultSelectedKeys,textDisplayValue:this.properties.textDisplayValue,stateKey:this.properties.stateKey,description:this.properties.description,disabled:this.properties.disabled,placeholder:this.properties.placeholder,searchAsYouType:this.properties.searchAsYouType,onUpdate:function(e){o.properties.onPropertyChange(o.targetProperty,e)}.bind(this),onGetErrorMessage:this.properties.onGetErrorMessage,onLoadOptions:this.properties.onLoadOptions,onUpdateOptions:this.properties.onUpdateOptions}));n.render(a,e)},e}()}}]);