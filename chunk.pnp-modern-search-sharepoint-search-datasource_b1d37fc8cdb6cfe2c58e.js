(window.webpackJsonp_2ea4494a4801c9aca03bba9314014278=window.webpackJsonp_2ea4494a4801c9aca03bba9314014278||[]).push([[24],{nepr:function(e,t,n){"use strict";n.r(t),n.d(t,"BuiltinSourceIds",function(){return E}),n.d(t,"SharePointSearchDataSource",function(){return A});var a=n("cDcd"),i=n("UDSP"),r=n("26ea"),o=n("PqB8"),s=n("UWqr"),c=n("Pk8u"),d=n("lWUY"),l=n("WVJB"),u=n("X+PM"),f=n("tDQZ"),p=n("LHku"),m=n("aFY1"),_=n("OuDy"),h=n("ci4p"),b=n("q5kO"),g=n("hO2E"),v=n("UqOl"),y=n("tpj2"),S=n("/ED6");class D{static getEnumKeyByEnumValue(e,t){let n=Object.keys(e).filter(n=>e[n]==t);return n.length>0?n[0]:null}}var I=n("vnLM"),x=n("0k10"),C=n("rMgv"),O=function(e,t,n,a){return new(n||(n=Promise))(function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function s(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,s)}c((a=a.apply(e,t||[])).next())})};const w=/((L0)\|#.?([0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}))\|?/;var E;!function(e){e.Documents="e7ec8cee-ded8-43c9-beb5-436b54b31e84",e.ItemsMatchingContentType="5dc9f503-801e-4ced-8a2c-5d1237132419",e.ItemsMatchingTag="e1327b9c-2b8c-4b23-99c9-3730cb29c3f7",e.ItemsRelatedToCurrentUser="48fec42e-4a92-48ce-8363-c2703a40e67d",e.ItemsWithSameKeywordAsThisItem="5c069288-1d17-454a-8ac6-9c642a065f48",e.LocalPeopleResults="b09a7990-05ea-4af9-81ef-edfab16c4e31",e.LocalReportsAndDataResults="203fba36-2763-4060-9931-911ac8c0583b",e.LocalSharePointResults="8413cd39-2156-4e00-b54d-11efd9abdb89",e.LocalVideoResults="78b793ce-7956-4669-aa3b-451fc5defebf",e.Pages="5e34578e-4d08-4edc-8bf3-002acf3cdbcc",e.Pictures="38403c8c-3975-41a8-826e-717f2d41568a",e.Popular="97c71db1-58ce-4891-8b64-585bc2326c12",e.RecentlyChangedItems="ba63bbae-fa9c-42c0-b027-9a878f16557c",e.RecommendedItems="ec675252-14fa-4fbe-84dd-8d098ed74181",e.Wiki="9479bf85-e257-4318-b5a8-81a180f5faa1"}(E||(E={}));class A extends i.BaseDataSource{constructor(e){super(e),this._availableLanguages=[],this._availableManagedProperties=[],this._sortableFields=C.n.map(e=>({key:e,text:e})),this._resultSourcesOptions=[],this._propertyFieldCollectionData=null,this._customCollectionFieldType=null,this._propertyPaneWebPartInformation=null,e.whenFinished(()=>{this._sharePointSearchService=e.consume(d.e.ServiceKey),this._pageContext=e.consume(u.PageContext.serviceKey),this._tokenService=e.consume(f.t.ServiceKey),this._taxonomyService=e.consume(p.e.ServiceKey)})}onInit(){return O(this,void 0,void 0,function*(){if(this.initProperties(),this.dateHelper=this.serviceScope.consume(v.e.ServiceKey),this.moment=yield this.dateHelper.moment(),this.editMode){const{PropertyFieldCollectionData:e,CustomCollectionFieldType:t}=yield Promise.all([n.e(3),n.e(2),n.e(4),n.e(5),n.e(16)]).then(n.bind(null,"2LYl")),{PropertyPaneWebPartInformation:a}=yield Promise.all([n.e(3),n.e(2),n.e(4),n.e(5),n.e(16)]).then(n.bind(null,"Wluh"));this._propertyFieldCollectionData=e,this._customCollectionFieldType=t,this._propertyPaneWebPartInformation=a}let e=this.getTranslatedCultureFromUrl();if(e&&(this._currentLocaleId=l.e.getLocaleId(e)),e&&0!==this._currentLocaleId||(this._currentLocaleId=l.e.getLocaleId(this._pageContext.cultureInfo.currentUICultureName)),0==this._availableLanguages.length){const e=yield this._sharePointSearchService.getAvailableQueryLanguages();this._availableLanguages=e.map(e=>({key:e.Lcid,text:`${e.DisplayName} (${e.Lcid})`}))}})}getTranslatedCultureFromUrl(){const e=window.location.pathname.toLocaleLowerCase().split("/"),t=e[e.length-2];return 2==t.length?t:null}getData(e){return O(this,void 0,void 0,function*(){const t=yield this.buildSharePointSearchQuery(e),n=yield this._sharePointSearchService.search(t);let a={items:n.relevantResults,filters:n.refinementResults,queryModification:n.queryModification,secondaryResults:n.secondaryResults,spellingSuggestion:n.spellingSuggestion,promotedResults:n.promotedResults};if(this.properties.enableLocalization){const e=yield this._getLocalizedFilters(a.filters,this._currentLocaleId);a.filters=e;const t=yield this._getLocalizedMetadata(a.items,this._currentLocaleId);a.items=t}return this._itemsCount=n.totalRows,a})}getPropertyPaneGroupsConfiguration(){return[{groupName:o.DataSources.SharePointSearch.SourceName,groupFields:[Object(r.PropertyPaneLabel)("",{text:o.DataSources.SharePointSearch.QueryTextFieldLabel}),this._propertyPaneWebPartInformation({description:`<em>${o.DataSources.SharePointSearch.QueryTextFieldInfoMessage}</em>`,key:"queryText"}),new y.e("dataSourceProperties.queryTemplate",{componentKey:`${I.t.SharePointSearch}-queryTemplate`,defaultValue:this.properties.queryTemplate,label:o.DataSources.SharePointSearch.QueryTemplateFieldLabel,placeholderText:o.DataSources.SharePointSearch.QueryTemplatePlaceHolderText,multiline:!0,description:o.DataSources.SharePointSearch.QueryTemplateFieldDescription,applyBtnText:o.DataSources.SharePointSearch.ApplyQueryTemplateBtnText,allowEmptyValue:!1,rows:8}),new m.e("dataSourceProperties.resultSourceId",{availableOptions:this._resultSourcesOptions,allowMultiSelect:!1,allowFreeform:!0,description:o.DataSources.SharePointSearch.ResultSourceIdDescription,label:o.DataSources.SharePointSearch.ResultSourceIdLabel,onLoadOptions:this.getBuiltinSourceIdOptions.bind(this),searchAsYouType:!1,defaultSelectedKey:this.properties.resultSourceId,textDisplayValue:null!==D.getEnumKeyByEnumValue(E,this.properties.resultSourceId)?D.getEnumKeyByEnumValue(E,this.properties.resultSourceId):this.properties.resultSourceId,onGetErrorMessage:this.validateSourceId.bind(this),onPropertyChange:this.onCustomPropertyUpdate.bind(this),onUpdateOptions:(e=>{this._resultSourcesOptions=e}).bind(this)}),new m.e("dataSourceProperties.selectedProperties",{availableOptions:this._availableManagedProperties,allowMultiSelect:!0,allowFreeform:!0,description:o.DataSources.SharePointSearch.SelectedPropertiesFieldDescription,label:o.DataSources.SharePointSearch.SelectedPropertiesFieldLabel,placeholder:o.DataSources.SharePointSearch.SelectedPropertiesPlaceholderLabel,onLoadOptions:this.getAvailableProperties.bind(this),searchAsYouType:!1,clearTextOnFocus:!0,defaultSelectedKeys:this.properties.selectedProperties,onPropertyChange:this.onCustomPropertyUpdate.bind(this),onUpdateOptions:(e=>{this._availableManagedProperties=this.parseAndCleanOptions(e)}).bind(this)}),this._propertyFieldCollectionData("dataSourceProperties.sortList",{manageBtnLabel:o.DataSources.SearchCommon.Sort.EditSortLabel,key:"sortList",enableSorting:!0,panelHeader:o.DataSources.SearchCommon.Sort.EditSortLabel,panelDescription:o.DataSources.SearchCommon.Sort.SortListDescription,label:o.DataSources.SearchCommon.Sort.SortPropertyPaneFieldLabel,value:this.properties.sortList,fields:[{id:"sortField",title:o.DataSources.SearchCommon.Sort.SortFieldColumnLabel,type:this._customCollectionFieldType.custom,required:!0,onCustomRender:((e,t,n,i,r,s)=>a.createElement("div",{key:`${e.id}-${r}`},a.createElement(g.e,{defaultSelectedKey:i[e.id]?i[e.id]:"",allowMultiSelect:!1,allowFreeform:!0,availableOptions:this._sortableFields,onUpdateOptions:(e=>{this._sortableFields=e}).bind(this),clearTextOnFocus:!0,onUpdate:t=>{n(e.id,t.key)},placeholder:o.DataSources.SearchCommon.Sort.SortFieldColumnPlaceholder,useComboBoxAsMenuWidth:!1}))).bind(this)},{id:"isDefaultSort",title:o.DataSources.SearchCommon.Sort.SortFieldDefaultSortLabel,type:this._customCollectionFieldType.boolean},{id:"sortDirection",title:o.DataSources.SearchCommon.Sort.SortDirectionColumnLabel,type:this._customCollectionFieldType.custom,onCustomRender:(e,t,n,r)=>a.createElement("div",null,a.createElement(_.e,{options:[{key:i.SortFieldDirection.Ascending,text:o.DataSources.SearchCommon.Sort.SortDirectionAscendingLabel},{key:i.SortFieldDirection.Descending,text:o.DataSources.SearchCommon.Sort.SortDirectionDescendingLabel}],disabled:!r.isDefaultSort,defaultSelectedKey:r.sortDirection?r.sortDirection:i.SortFieldDirection.Ascending,onChange:(t,a)=>n(e.id,a.key)}))},{id:"isUserSort",title:o.DataSources.SearchCommon.Sort.SortFieldUserSortLabel,type:this._customCollectionFieldType.boolean},{id:"sortFieldDisplayName",title:o.DataSources.SearchCommon.Sort.SortFieldFriendlyNameLabel,type:this._customCollectionFieldType.custom,onCustomRender:(e,t,n,i)=>a.createElement("div",null,a.createElement(h.e,{defaultValue:t,disabled:!i.isUserSort,onChange:(t,a)=>{n(e.id,a)}}))}]}),new y.e("dataSourceProperties.refinementFilters",{componentKey:`${I.t.SharePointSearch}-refinementFilters`,defaultValue:this.properties.refinementFilters,label:o.DataSources.SharePointSearch.RefinementFilters,placeholderText:'ex: FileType:equals("docx")',multiline:!0,allowEmptyValue:!0,description:o.DataSources.SharePointSearch.RefinementFiltersDescription,applyBtnText:o.DataSources.SharePointSearch.ApplyQueryTemplateBtnText,rows:3}),Object(r.PropertyPaneDropdown)("dataSourceProperties.searchQueryLanguage",{label:o.DataSources.SharePointSearch.QueryCultureLabel,options:[{type:r.PropertyPaneDropdownOptionType.Normal,key:this._currentLocaleId,text:o.DataSources.SharePointSearch.QueryCultureUseUiLanguageLabel}].concat(Object(c.sortBy)(this._availableLanguages,["text"])),selectedKey:this.properties.searchQueryLanguage?this.properties.searchQueryLanguage:this._currentLocaleId}),Object(r.PropertyPaneToggle)("dataSourceProperties.enableQueryRules",{label:o.DataSources.SharePointSearch.EnableQueryRulesLabel,checked:this.properties.enableQueryRules}),Object(r.PropertyPaneToggle)("dataSourceProperties.trimDuplicates",{label:o.DataSources.SharePointSearch.TrimDuplicates}),Object(r.PropertyPaneToggle)("dataSourceProperties.enableAudienceTargeting",{label:o.DataSources.SharePointSearch.EnableAudienceTargetingTglLabel,checked:this.properties.enableAudienceTargeting}),Object(r.PropertyPaneToggle)("dataSourceProperties.enableLocalization",{checked:this.properties.enableLocalization,label:o.DataSources.SharePointSearch.EnableLocalizationLabel,onText:o.DataSources.SharePointSearch.EnableLocalizationOnLabel,offText:o.DataSources.SharePointSearch.EnableLocalizationOffLabel}),new y.e("dataSourceProperties.hitHighlightedProperties",{componentKey:`${I.t.SharePointSearch}-hitHighlightedProperties`,defaultValue:this.properties.hitHighlightedProperties,label:o.DataSources.SharePointSearch.HitHighlightedPropertiesFieldLabel,placeholderText:"ex: Department,UserName",multiline:!1,allowEmptyValue:!0,description:o.DataSources.SharePointSearch.HitHighlightedPropertiesFieldDescription,applyBtnText:o.DataSources.SharePointSearch.ApplyQueryTemplateBtnText,rows:1})]}]}onCustomPropertyUpdate(e,t){if(0===e.localeCompare("dataSourceProperties.selectedProperties")){let e=this.parseAndCleanOptions(Object(c.cloneDeep)(t));this.properties.selectedProperties=e.map(e=>e.key),this.context.propertyPane.refresh(),this.render()}0===e.localeCompare("dataSourceProperties.resultSourceId")&&(this.properties.resultSourceId=t.key,this.context.propertyPane.refresh(),this.render())}getPagingBehavior(){return i.PagingBehavior.Dynamic}getFilterBehavior(){return i.FilterBehavior.Dynamic}getItemCount(){return this._itemsCount}getTemplateSlots(){return[{slotName:i.BuiltinTemplateSlots.Title,slotField:"Title"},{slotName:i.BuiltinTemplateSlots.Path,slotField:"DefaultEncodingURL"},{slotName:i.BuiltinTemplateSlots.Summary,slotField:"HitHighlightedSummary"},{slotName:i.BuiltinTemplateSlots.FileType,slotField:"FileType"},{slotName:i.BuiltinTemplateSlots.PreviewImageUrl,slotField:"AutoPreviewImageUrl"},{slotName:i.BuiltinTemplateSlots.PreviewUrl,slotField:"AutoPreviewUrl"},{slotName:i.BuiltinTemplateSlots.Author,slotField:"AuthorOWSUSER"},{slotName:i.BuiltinTemplateSlots.Tags,slotField:"owstaxidmetadataalltagsinfo"},{slotName:i.BuiltinTemplateSlots.Date,slotField:"Created"},{slotName:i.BuiltinTemplateSlots.SiteId,slotField:"NormSiteID"},{slotName:i.BuiltinTemplateSlots.WebId,slotField:"NormWebID"},{slotName:i.BuiltinTemplateSlots.ListId,slotField:"NormListID"},{slotName:i.BuiltinTemplateSlots.ItemId,slotField:"NormUniqueID"},{slotName:i.BuiltinTemplateSlots.IsFolder,slotField:"ContentTypeId"},{slotName:i.BuiltinTemplateSlots.ContentClass,slotField:"contentclass"},{slotName:i.BuiltinTemplateSlots.PersonQuery,slotField:"AADObjectID"},{slotName:i.BuiltinTemplateSlots.UserDisplayName,slotField:"Title"},{slotName:i.BuiltinTemplateSlots.UserEmail,slotField:"UserName"}]}getSortableFields(){return this.properties.sortList.filter(e=>e.isUserSort).map(e=>e.sortField)}initProperties(){this.properties.queryTemplate=this.properties.queryTemplate?this.properties.queryTemplate:"{searchTerms}",this.properties.enableQueryRules=void 0!==this.properties.enableQueryRules&&this.properties.enableQueryRules,this.properties.enableLocalization=void 0!==this.properties.enableLocalization&&this.properties.enableLocalization,this.properties.refinementFilters=this.properties.refinementFilters?this.properties.refinementFilters:"",this.properties.selectedProperties=void 0!==this.properties.selectedProperties?this.properties.selectedProperties:["Title","Path","DefaultEncodingURL","FileType","HitHighlightedSummary","HitHighlightedProperties","AuthorOWSUSER","owstaxidmetadataalltagsinfo","Created","UniqueID","NormSiteID","NormWebID","NormListID","NormUniqueID","ContentTypeId","contentclass","UserName","JobTitle","WorkPhone","SPSiteUrl","SiteTitle","CreatedBy","HtmlFileType","SiteLogo"],this.properties.resultSourceId=void 0!==this.properties.resultSourceId?this.properties.resultSourceId:E.LocalSharePointResults,this.properties.hitHighlightedProperties=this.properties.hitHighlightedProperties?this.properties.hitHighlightedProperties:"",this.properties.trimDuplicates=void 0!==this.properties.trimDuplicates&&this.properties.trimDuplicates,void 0!==this.properties.sortList?this.properties.sortList=this.properties.sortList.map(e=>(void 0===e.isDefaultSort&&(e.isDefaultSort=!0),e)):this.properties.sortList=[]}getBuiltinSourceIdOptions(){return this._resultSourcesOptions=[{key:E.Documents,text:D.getEnumKeyByEnumValue(E,E.Documents)},{key:E.ItemsMatchingContentType,text:D.getEnumKeyByEnumValue(E,E.ItemsMatchingContentType)},{key:E.ItemsMatchingTag,text:D.getEnumKeyByEnumValue(E,E.ItemsMatchingTag)},{key:E.ItemsRelatedToCurrentUser,text:D.getEnumKeyByEnumValue(E,E.ItemsRelatedToCurrentUser)},{key:E.ItemsWithSameKeywordAsThisItem,text:D.getEnumKeyByEnumValue(E,E.ItemsWithSameKeywordAsThisItem)},{key:E.LocalPeopleResults,text:D.getEnumKeyByEnumValue(E,E.LocalPeopleResults)},{key:E.LocalReportsAndDataResults,text:D.getEnumKeyByEnumValue(E,E.LocalReportsAndDataResults)},{key:E.LocalSharePointResults,text:D.getEnumKeyByEnumValue(E,E.LocalSharePointResults)},{key:E.LocalVideoResults,text:D.getEnumKeyByEnumValue(E,E.LocalVideoResults)},{key:E.Pages,text:D.getEnumKeyByEnumValue(E,E.Pages)},{key:E.Pictures,text:D.getEnumKeyByEnumValue(E,E.Pictures)},{key:E.Popular,text:D.getEnumKeyByEnumValue(E,E.Popular)},{key:E.RecentlyChangedItems,text:D.getEnumKeyByEnumValue(E,E.RecentlyChangedItems)},{key:E.RecommendedItems,text:D.getEnumKeyByEnumValue(E,E.RecommendedItems)},{key:E.Wiki,text:D.getEnumKeyByEnumValue(E,E.Wiki)}],this._resultSourcesOptions}getAvailableProperties(){return O(this,void 0,void 0,function*(){const e=yield this._sharePointSearchService.getAvailableManagedProperties();return this._availableManagedProperties=e.map(e=>({key:e.name,text:e.name})),this._availableManagedProperties})}_convertToSortList(e){return e.map(e=>{let t;switch(e.sortDirection){case i.SortFieldDirection.Ascending:t=b.e.Ascending;break;case i.SortFieldDirection.Descending:t=b.e.Descending;break;default:t=b.e.Ascending}return{Property:e.sortField,Direction:t}})}buildSharePointSearchQuery(e){var t,n;return O(this,void 0,void 0,function*(){let a={ClientType:"PnPModernSearch",Properties:[{Name:"EnableDynamicGroups",Value:{BoolVal:!0,QueryPropertyValueTypeIndex:3}},{Name:"EnableMultiGeoSearch",Value:{BoolVal:!0,QueryPropertyValueTypeIndex:3}},{Name:"ClientFunction",Value:{StrVal:"PnPSearchWebPart",QueryPropertyValueTypeIndex:1}}]};this._pageContext.list&&a.Properties.push({Name:"ListId",Value:{StrVal:this._pageContext.list.id.toString(),QueryPropertyValueTypeIndex:1}}),this._pageContext.listItem&&a.Properties.push({Name:"ListItemId",Value:{StrVal:this._pageContext.listItem.id.toString(),QueryPropertyValueTypeIndex:1}}),a.Querytext=e.inputQueryText,a.EnableQueryRules=this.properties.enableQueryRules,a.QueryTemplate=yield this._tokenService.resolveTokens(this.properties.queryTemplate),this.properties.resultSourceId&&(s.Guid.isValid(this.properties.resultSourceId)?(a.SourceId=this.properties.resultSourceId,a.SourceId&&a.SourceId.toLocaleLowerCase()===E.LocalPeopleResults?(a.EnableNicknames=!0,a.EnablePhonetic=!0):(a.EnableNicknames=!1,a.EnablePhonetic=!1)):a=this._setResultSourceByName(this.properties.resultSourceId,a)),a.Culture=void 0!==this.properties.searchQueryLanguage&&null!==this.properties.searchQueryLanguage?this.properties.searchQueryLanguage:this._currentLocaleId;let r={WebBias:this._pageContext.legacyPageContext.webTimeZoneData.Bias?this._pageContext.legacyPageContext.webTimeZoneData.Bias:0,WebDST:this._pageContext.legacyPageContext.webTimeZoneData.DaylightBias?this._pageContext.legacyPageContext.webTimeZoneData.DaylightBias:0,UserBias:null,UserDST:null,Id:this._pageContext.legacyPageContext.webTimeZoneData.Id};this._pageContext.legacyPageContext.userTimeZoneData&&(r.UserBias=this._pageContext.legacyPageContext.userTimeZoneData.Bias?this._pageContext.legacyPageContext.userTimeZoneData.Bias:0,r.UserDST=this._pageContext.legacyPageContext.userTimeZoneData.DaylightBias?this._pageContext.legacyPageContext.userTimeZoneData.DaylightBias:0,r.Id=this._pageContext.legacyPageContext.webTimeZoneData.Id),a.TimeZoneId=r.Id;let o=Object(c.isEmpty)(this.properties.refinementFilters)?[]:[this.properties.refinementFilters];if(!Object(c.isEmpty)(e.filters)&&(a.Refiners=e.filters.filtersConfiguration.map(e=>{if(new RegExp("(RefinableDate\\d+)(?=,|$)|(RefinableDateInvariant00\\d+)(?=,|$)|(RefinableDateSingle\\d+)(?=,|$)|(LastModifiedTime)(?=,|$)|(LastModifiedTimeForRetention)(?=,|$)|(Created)(?=,|$)|(Date\\d+)(?=,|$)|(EndDate)(?=,|$)|(.+OWSDATE)(?=,|$)|(EventsRollUpEndDate)(?=,|$)|(EventsRollUpStartDate)(?=,|$)|(FirstPublishedDate)(?=,|$)|(ImageDateCreated)(?=,|$)|(LastAnalyticsUpdateTime)(?=,|$)|(ModifierDates)(?=,|$)|(ClassificationLastScan)(?=,|$)|(ComplianceTagWrittenTime)(?=,|$)|(ContentModifiedTime)(?=,|$)|(DocumentAnalyticsLastActivityTimestamp)(?=,|$)|(ExpirationTime)(?=,|$)|(LastSharedByTime)(?=,|$)|(StartDate)(?=,|$)|(TagEventDate)(?=,|$)|(processingtime)(?=,|$)|(ExtractedDate)(?=,|$)".replace(/\s+/gi,""),"gi").test(e.filterName)){const t=this.moment(new Date).subtract(1,"years").subtract("minutes",1).toISOString(),n=this.moment(new Date).subtract(3,"months").subtract("minutes",1).toISOString(),a=this.moment(new Date).subtract(1,"months").subtract("minutes",1).toISOString(),i=this.moment(new Date).subtract(1,"week").subtract("minutes",1).toISOString(),r=this.moment(new Date).subtract(24,"hours").subtract("minutes",1).toISOString(),o=(new Date).toISOString();return`${e.filterName}(discretize=manual/${t}/${n}/${a}/${i}/${r}/${o})`}if(e.maxBuckets){const t=e.sortBy==i.FilterSortType.ByName?"name":"frequency",n=e.sortDirection==i.FilterSortDirection.Ascending?"ascending":"descending";return`${e.filterName}(filter=${e.maxBuckets}/0/*,sort=${t}/${n})`}return e.filterName}).join(","),e.filters.selectedFilters.length>0))if(e.filters.selectedFilters.length>1&&e.filters.selectedFilters.filter(e=>e.values.length>0).length>1){const t=S.e.buildFqlRefinementString(e.filters.selectedFilters,e.filters.filtersConfiguration,this.moment).join(",");Object(c.isEmpty)(t)||(o=o.concat([`${e.filters.filterOperator}(${t})`]))}else o=o.concat(S.e.buildFqlRefinementString(e.filters.selectedFilters,e.filters.filtersConfiguration,this.moment));return a.RefinementFilters=o,a.RowLimit=e.itemsCountPerPage?e.itemsCountPerPage:50,1===e.pageNumber?a.StartRow=0:a.StartRow=(e.pageNumber-1)*a.RowLimit,a.TrimDuplicates=this.properties.trimDuplicates,(null===(t=e.sorting)||void 0===t?void 0:t.selectedSortFieldName)&&(null===(n=e.sorting)||void 0===n?void 0:n.selectedSortDirection)?a.SortList=[{Property:e.sorting.selectedSortFieldName,Direction:e.sorting.selectedSortDirection===i.SortFieldDirection.Ascending?b.e.Ascending:b.e.Descending}]:a.SortList=this._convertToSortList(this.properties.sortList.filter(e=>e.isDefaultSort)),a.SelectProperties=this.properties.selectedProperties.filter(e=>e),this.properties.enableAudienceTargeting&&(a.QueryTemplate=`${a.QueryTemplate} (ModernAudienceAadObjectIds:{User.Audiences} OR NOT IsAudienceTargeted:true)`),this.properties.hitHighlightedProperties.length>0&&(a.HitHighlightedProperties=this.properties.hitHighlightedProperties.split(",")),a})}validateSourceId(e){return e.length>0&&!/^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/.test(e)?this._validateSourceName(e):""}_validateSourceName(e){const t=["SPSiteSubscription","SPSite","SPWeb"];if(e.length>0){const n=e.split("|");if(2!==n.length)return o.DataSources.SharePointSearch.InvalidResultSourceIdMessage;const a=n[0],i=n[1];if(!t.find(e=>e.toLowerCase()===a.toLowerCase()))return o.DataSources.SharePointSearch.InvalidResultSourceIdMessage;if(!i)return o.DataSources.SharePointSearch.InvalidResultSourceIdMessage}return""}_setResultSourceByName(e,t){const n=e.split("|"),a=n[0],i=n[1];return t.Properties.push({Name:"SourceLevel",Value:{StrVal:a,QueryPropertyValueTypeIndex:1}}),t.Properties.push({Name:"SourceName",Value:{StrVal:i,QueryPropertyValueTypeIndex:1}}),t}_getLocalizedFilters(e,t){return O(this,void 0,void 0,function*(){let n=[],a=[],i=[];if(a=e.map(e=>{let t=[];return e.values.forEach(e=>{w.test(e.name)?e.name.split(";").forEach(n=>{const a=w.exec(n)[1],i=`"ǂǂ${x.e._bytesToHex(x.e._stringToUTF8Bytes(n))}"`,r=t.map(e=>e.name).indexOf(a);-1===r?t.push({count:e.count,name:a,value:i}):(t[r].count=t[r].count+1,t[r].value=i)}):t.push(e)}),e.values=Object(c.cloneDeep)(t),e}),a.forEach(e=>{e.values.forEach(e=>{if(w.test(e.name)){let t=w.exec(e.name);if(t.length>0){let a=t[3];-1===n.map(e=>e.uniqueIdentifier).indexOf(e.value)&&n.push({uniqueIdentifier:e.value,termId:a,localizedTermLabel:null})}}})}),n.length>0){const e=yield this._taxonomyService.getTermsById(this._pageContext.site.absoluteUrl,n.map(e=>e.termId));n.forEach(n=>{const a=e.filter(e=>e.Id.substring(e.Id.indexOf("(")+1,e.Id.indexOf(")"))===n.termId);if(a.length>0){const e=a[0];let r=e.Labels._Child_Items_.filter(e=>e.Language===t);0===r.length&&(r=e.Labels._Child_Items_),i.push({uniqueIdentifier:n.uniqueIdentifier,termId:n.termId,localizedTermLabel:r[0].Value})}else i.push({uniqueIdentifier:n.uniqueIdentifier,termId:n.termId,localizedTermLabel:s.Text.format(o.DataSources.SharePointSearch.TermNotFound,n.termId)})}),a=a.map(e=>(e.values=e.values.map(e=>{const t=i.filter(t=>t.uniqueIdentifier===e.value);if(t.length>0){if(w.test(e.name)){const t=w.exec(e.name),n=t[3];if(0===t[2].localeCompare("L0")){const t=`GP0|#${n.toString()}`,a=`L0|#${n.toString()}`;e.value=`or(${t},${a})`}}e.name=t[0].localizedTermLabel}if(!/(GTSet|GPP|GP0)/i.test(e.name))return e}).filter(e=>e),e))}return a})}_getLocalizedMetadata(e,t){return O(this,void 0,void 0,function*(){let n=[],a=[],i=[];if(e.forEach((e,t)=>{let a=[];Object.keys(e).forEach(t=>{if(/L0\|#.?([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})/.test(e[t])){let n=[];const i=/L0\|#.?([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})/g,r=e[t];let o;for(;null!==(o=i.exec(r));)o.index===i.lastIndex&&i.lastIndex++,n.push(o[1]);a.push({propertyName:t,termIds:n})}}),a.length>0&&n.push({uniqueIdentifier:t,properties:a})}),n.length>0){let r=[];n.forEach(e=>{e.properties.forEach(e=>{r=r.concat(e.termIds)})}),r=Object(c.uniq)(r);const o=yield this._taxonomyService.getTermsById(this._pageContext.site.absoluteUrl,r);return n.forEach(e=>{let n=[];e.properties.forEach(e=>{let a=[];const i=o.filter(t=>{const n=t.Id.substring(t.Id.indexOf("(")+1,t.Id.indexOf(")"));return-1!==e.termIds.indexOf(n)});i.length>0&&(i.forEach(e=>{let n=e.Labels._Child_Items_.filter(e=>e.Language===t&&e.IsDefaultForLanguage);0===n.length&&(n=e.Labels._Child_Items_),n.length>0&&a.push(n[0].Value)}),n.push({propertyName:e.propertyName,termLabels:a}))}),i.push({uniqueIdentifier:e.uniqueIdentifier,properties:n})}),a=e.map((e,t)=>{const n=i.filter(e=>e.uniqueIdentifier===t);return n.length>0&&n[0].properties.forEach(t=>{e[`Auto${t.propertyName}`]=t.termLabels.join(", ")}),e}),a}return e})}parseAndCleanOptions(e){let t=e.find(e=>e.key.indexOf(",")>0);return t?t.key.split(",").map(e=>({key:e.trim(),text:e.trim(),selected:!0})):e}}},tpj2:function(e,t,n){"use strict";n.d(t,"e",function(){return l});var a=n("cDcd"),i=n("faye"),r=n("26ea"),o=n("ci4p"),s=n("Dk3Y"),c=n("Pk8u");class d extends a.Component{constructor(e){super(e),this.state={value:e.defaultValue,iconName:null},this._onChange=this._onChange.bind(this),this._onApply=this._onApply.bind(this)}render(){const e=this.state.iconName?{iconProps:{iconName:this.state.iconName}}:null;let t=!this.state.value&&!this.props.allowEmptyValue||Object(c.isEqual)(this.state.value,this.props.defaultValue);return a.createElement(a.Fragment,null,a.createElement(o.e,{key:this.props.key,defaultValue:this.props.defaultValue,label:this.props.label,placeholder:this.props.placeholderText,description:this.props.description,multiline:this.props.multiline,autoAdjustHeight:this.props.multiline,rows:this.props.rows?this.props.rows:4,onChange:this._onChange}),a.createElement(s.e,Object.assign({toggle:!0,styles:{root:{marginTop:8}},text:this.props.applyBtnText,onClick:this._onApply,allowDisabledFocus:!0,disabled:t,checked:!0},e)))}componentDidUpdate(e,t){Object(c.isEqual)(e.defaultValue,this.props.defaultValue)||this.setState({value:this.props.defaultValue})}_onChange(e,t){this.setState({value:t,iconName:t!==this.props.defaultValue?"Save":null})}_onApply(){this.props.onUpdate(this.state.value),this.setState({iconName:"Accept"})}}class l{constructor(e,t){this.type=r.PropertyPaneFieldType.Custom,this.targetProperty=e,this.properties={componentKey:t.componentKey,key:t.componentKey,description:t.description,label:t.label,placeholderText:t.placeholderText,multiline:t.multiline,onRender:this.onRender.bind(this),onDispose:this.onDispose.bind(this),applyBtnText:t.applyBtnText,defaultValue:t.defaultValue,rows:t.rows,allowEmptyValue:t.allowEmptyValue}}render(){this.elem&&this.onRender(this.elem)}onDispose(e){i.unmountComponentAtNode(e)}onRender(e,t,n){this.elem||(this.elem=e);const r=a.createElement("div",{key:this.properties.key},a.createElement(d,{key:this.properties.componentKey,onUpdate:(e=>{n(this.targetProperty,e)}).bind(this),description:this.properties.description,label:this.properties.label,multiline:this.properties.multiline,placeholderText:this.properties.placeholderText,applyBtnText:this.properties.applyBtnText,defaultValue:this.properties.defaultValue,rows:this.properties.rows,allowEmptyValue:this.properties.allowEmptyValue}));i.render(r,e)}}}}]);