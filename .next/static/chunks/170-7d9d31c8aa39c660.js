"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[170],{34088:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"}},35759:function(e,t,n){var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;let l=(a=n(69781))&&a.__esModule?a:{default:a};t.default=l,e.exports=l},69781:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=_getRequireWildcardCache(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=l?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(2265)),l=_interop_require_default(n(34088)),r=_interop_require_default(n(51718));function _interop_require_default(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_getRequireWildcardCache=function(e){return e?n:t})(e)}var i=a.forwardRef(function(e,t){var n,i;return a.createElement(r.default,(n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){var a;a=n[t],t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a})}return e}({},e),i=i={ref:t,icon:l.default},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n.push.apply(n,a)}return n})(Object(i)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}),n))})},75658:function(e,t,n){var a=n(36199).default,l=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(54440)),i=l(n(2041)),o=a(n(2265)),d=n(9273),s=l(n(98939)),c=l(n(26782)),u=l(n(83570)),g=l(n(57320)),f=l(n(19244)),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]]);return n};let p=o.forwardRef((e,t)=>{let n;let{prefixCls:a,className:l,rootClassName:p,style:m,extra:b,headStyle:$={},bodyStyle:v={},title:h,loading:y,bordered:S=!0,size:O,type:j,cover:x,actions:k,tabList:C,children:E,activeTabKey:w,defaultActiveTabKey:_,tabBarExtraContent:z,hoverable:P,tabProps:M={}}=e,N=__rest(e,["prefixCls","className","rootClassName","style","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),{getPrefixCls:B,direction:R,card:I}=o.useContext(d.ConfigContext),T=o.useMemo(()=>{let e=!1;return o.Children.forEach(E,t=>{t&&t.type&&t.type===g.default&&(e=!0)}),e},[E]),H=B("card",a),[W,A]=(0,f.default)(H),L=o.createElement(c.default,{loading:!0,active:!0,paragraph:{rows:4},title:!1},E),G=void 0!==w,q=Object.assign(Object.assign({},M),{[G?"activeKey":"defaultActiveKey"]:G?w:_,tabBarExtraContent:z}),D=(0,s.default)(O),F=C?o.createElement(u.default,Object.assign({size:D&&"default"!==D?D:"large"},q,{className:`${H}-head-tabs`,onChange:t=>{var n;null===(n=e.onTabChange)||void 0===n||n.call(e,t)},items:C.map(e=>{var{tab:t}=e;return Object.assign({label:t},__rest(e,["tab"]))})})):null;(h||b||F)&&(n=o.createElement("div",{className:`${H}-head`,style:$},o.createElement("div",{className:`${H}-head-wrapper`},h&&o.createElement("div",{className:`${H}-head-title`},h),b&&o.createElement("div",{className:`${H}-extra`},b)),F));let X=x?o.createElement("div",{className:`${H}-cover`},x):null,K=o.createElement("div",{className:`${H}-body`,style:v},y?L:E),Z=k&&k.length?o.createElement("ul",{className:`${H}-actions`},k.map((e,t)=>o.createElement("li",{style:{width:`${100/k.length}%`},key:`action-${t}`},o.createElement("span",null,e)))):null,V=(0,i.default)(N,["onTabChange"]),J=(0,r.default)(H,null==I?void 0:I.className,{[`${H}-loading`]:y,[`${H}-bordered`]:S,[`${H}-hoverable`]:P,[`${H}-contain-grid`]:T,[`${H}-contain-tabs`]:C&&C.length,[`${H}-${D}`]:D,[`${H}-type-${j}`]:!!j,[`${H}-rtl`]:"rtl"===R},l,p,A),Q=Object.assign(Object.assign({},null==I?void 0:I.style),m);return W(o.createElement("div",Object.assign({ref:t},V,{className:J,style:Q}),n,X,K,Z))});t.default=p},57320:function(e,t,n){var a=n(36199).default,l=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(54440)),i=a(n(2265)),o=n(9273),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]]);return n};t.default=e=>{var{prefixCls:t,className:n,hoverable:a=!0}=e,l=__rest(e,["prefixCls","className","hoverable"]);let{getPrefixCls:d}=i.useContext(o.ConfigContext),s=d("card",t),c=(0,r.default)(`${s}-grid`,n,{[`${s}-grid-hoverable`]:a});return i.createElement("div",Object.assign({},l,{className:c}))}},55174:function(e,t,n){var a=n(36199).default,l=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(54440)),i=a(n(2265)),o=n(9273),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>t.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]]);return n};t.default=e=>{let{prefixCls:t,className:n,avatar:a,title:l,description:d}=e,s=__rest(e,["prefixCls","className","avatar","title","description"]),{getPrefixCls:c}=i.useContext(o.ConfigContext),u=c("card",t),g=(0,r.default)(`${u}-meta`,n),f=a?i.createElement("div",{className:`${u}-meta-avatar`},a):null,p=l?i.createElement("div",{className:`${u}-meta-title`},l):null,m=d?i.createElement("div",{className:`${u}-meta-description`},d):null,b=p||m?i.createElement("div",{className:`${u}-meta-detail`},p,m):null;return i.createElement("div",Object.assign({},s,{className:g}),f,b)}},28170:function(e,t,n){var a=n(26314).default;t.Z=void 0;var l=a(n(75658)),r=a(n(57320)),i=a(n(55174));let o=l.default;o.Grid=r.default,o.Meta=i.default,t.Z=o},19244:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(5101),l=n(18710);let genCardHeadStyle=e=>{let{antCls:t,componentCls:n,headerHeight:l,cardPaddingBase:r,tabsMarginBottom:i}=e;return Object.assign(Object.assign({display:"flex",justifyContent:"center",flexDirection:"column",minHeight:l,marginBottom:-1,padding:`0 ${r}px`,color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.headerFontSize,background:e.headerBg,borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`},(0,a.clearFix)()),{"&-wrapper":{width:"100%",display:"flex",alignItems:"center"},"&-title":Object.assign(Object.assign({display:"inline-block",flex:1},a.textEllipsis),{[`
          > ${n}-typography,
          > ${n}-typography-edit-content
        `]:{insetInlineStart:0,marginTop:0,marginBottom:0}}),[`${t}-tabs-top`]:{clear:"both",marginBottom:i,color:e.colorText,fontWeight:"normal",fontSize:e.fontSize,"&-bar":{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`}}})},genCardGridStyle=e=>{let{cardPaddingBase:t,colorBorderSecondary:n,cardShadow:a,lineWidth:l}=e;return{width:"33.33%",padding:t,border:0,borderRadius:0,boxShadow:`
      ${l}px 0 0 0 ${n},
      0 ${l}px 0 0 ${n},
      ${l}px ${l}px 0 0 ${n},
      ${l}px 0 0 0 ${n} inset,
      0 ${l}px 0 0 ${n} inset;
    `,transition:`all ${e.motionDurationMid}`,"&-hoverable:hover":{position:"relative",zIndex:1,boxShadow:a}}},genCardActionsStyle=e=>{let{componentCls:t,iconCls:n,actionsLiMargin:l,cardActionsIconSize:r,colorBorderSecondary:i,actionsBg:o}=e;return Object.assign(Object.assign({margin:0,padding:0,listStyle:"none",background:o,borderTop:`${e.lineWidth}px ${e.lineType} ${i}`,display:"flex",borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px `},(0,a.clearFix)()),{"& > li":{margin:l,color:e.colorTextDescription,textAlign:"center","> span":{position:"relative",display:"block",minWidth:2*e.cardActionsIconSize,fontSize:e.fontSize,lineHeight:e.lineHeight,cursor:"pointer","&:hover":{color:e.colorPrimary,transition:`color ${e.motionDurationMid}`},[`a:not(${t}-btn), > ${n}`]:{display:"inline-block",width:"100%",color:e.colorTextDescription,lineHeight:`${e.fontSize*e.lineHeight}px`,transition:`color ${e.motionDurationMid}`,"&:hover":{color:e.colorPrimary}},[`> ${n}`]:{fontSize:r,lineHeight:`${r*e.lineHeight}px`}},"&:not(:last-child)":{borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${i}`}}})},genCardMetaStyle=e=>Object.assign(Object.assign({margin:`-${e.marginXXS}px 0`,display:"flex"},(0,a.clearFix)()),{"&-avatar":{paddingInlineEnd:e.padding},"&-detail":{overflow:"hidden",flex:1,"> div:not(:last-child)":{marginBottom:e.marginXS}},"&-title":Object.assign({color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG},a.textEllipsis),"&-description":{color:e.colorTextDescription}}),genCardTypeInnerStyle=e=>{let{componentCls:t,cardPaddingBase:n,colorFillAlter:a}=e;return{[`${t}-head`]:{padding:`0 ${n}px`,background:a,"&-title":{fontSize:e.fontSize}},[`${t}-body`]:{padding:`${e.padding}px ${n}px`}}},genCardLoadingStyle=e=>{let{componentCls:t}=e;return{overflow:"hidden",[`${t}-body`]:{userSelect:"none"}}},genCardStyle=e=>{let{antCls:t,componentCls:n,cardShadow:l,cardHeadPadding:r,colorBorderSecondary:i,boxShadowTertiary:o,cardPaddingBase:d,extraColor:s}=e;return{[n]:Object.assign(Object.assign({},(0,a.resetComponent)(e)),{position:"relative",background:e.colorBgContainer,borderRadius:e.borderRadiusLG,[`&:not(${n}-bordered)`]:{boxShadow:o},[`${n}-head`]:genCardHeadStyle(e),[`${n}-extra`]:{marginInlineStart:"auto",color:s,fontWeight:"normal",fontSize:e.fontSize},[`${n}-body`]:Object.assign({padding:d,borderRadius:` 0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`},(0,a.clearFix)()),[`${n}-grid`]:genCardGridStyle(e),[`${n}-cover`]:{"> *":{display:"block",width:"100%"},[`img, img + ${t}-image-mask`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`}},[`${n}-actions`]:genCardActionsStyle(e),[`${n}-meta`]:genCardMetaStyle(e)}),[`${n}-bordered`]:{border:`${e.lineWidth}px ${e.lineType} ${i}`,[`${n}-cover`]:{marginTop:-1,marginInlineStart:-1,marginInlineEnd:-1}},[`${n}-hoverable`]:{cursor:"pointer",transition:`box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,"&:hover":{borderColor:"transparent",boxShadow:l}},[`${n}-contain-grid`]:{borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0 `,[`${n}-body`]:{display:"flex",flexWrap:"wrap"},[`&:not(${n}-loading) ${n}-body`]:{marginBlockStart:-e.lineWidth,marginInlineStart:-e.lineWidth,padding:0}},[`${n}-contain-tabs`]:{[`> ${n}-head`]:{minHeight:0,[`${n}-head-title, ${n}-extra`]:{paddingTop:r}}},[`${n}-type-inner`]:genCardTypeInnerStyle(e),[`${n}-loading`]:genCardLoadingStyle(e),[`${n}-rtl`]:{direction:"rtl"}}},genCardSizeStyle=e=>{let{componentCls:t,cardPaddingSM:n,headerHeightSM:a,headerFontSizeSM:l}=e;return{[`${t}-small`]:{[`> ${t}-head`]:{minHeight:a,padding:`0 ${n}px`,fontSize:l,[`> ${t}-head-wrapper`]:{[`> ${t}-extra`]:{fontSize:e.fontSize}}},[`> ${t}-body`]:{padding:n}},[`${t}-small${t}-contain-tabs`]:{[`> ${t}-head`]:{[`${t}-head-title, ${t}-extra`]:{paddingTop:0,display:"flex",alignItems:"center"}}}}};t.default=(0,l.genComponentStyleHook)("Card",e=>{let t=(0,l.mergeToken)(e,{cardShadow:e.boxShadowCard,cardHeadPadding:e.padding,cardPaddingBase:e.paddingLG,cardActionsIconSize:e.fontSize,cardPaddingSM:12});return[genCardStyle(t),genCardSizeStyle(t)]},e=>({headerBg:"transparent",headerFontSize:e.fontSizeLG,headerFontSizeSM:e.fontSize,headerHeight:e.fontSizeLG*e.lineHeightLG+2*e.padding,headerHeightSM:e.fontSize*e.lineHeight+2*e.paddingXS,actionsBg:e.colorBgContainer,actionsLiMargin:`${e.paddingSM}px 0`,tabsMarginBottom:-e.padding-e.lineWidth,extraColor:e.colorText}))},59123:function(e,t,n){var a=n(36199).default,l=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(54440)),i=l(n(2041)),o=a(n(2265)),d=n(9273),s=l(n(59831)),c=l(n(86725));t.default=e=>{let{prefixCls:t,className:n,rootClassName:a,active:l,shape:u="circle",size:g="default"}=e,{getPrefixCls:f}=o.useContext(d.ConfigContext),p=f("skeleton",t),[m,b]=(0,c.default)(p),$=(0,i.default)(e,["prefixCls","className"]),v=(0,r.default)(p,`${p}-element`,{[`${p}-active`]:l},n,a,b);return m(o.createElement("div",{className:v},o.createElement(s.default,Object.assign({prefixCls:`${p}-avatar`,shape:u,size:g},$))))}},5722:function(e,t,n){var a=n(36199).default,l=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(54440)),i=l(n(2041)),o=a(n(2265)),d=n(9273),s=l(n(59831)),c=l(n(86725));t.default=e=>{let{prefixCls:t,className:n,rootClassName:a,active:l,block:u=!1,size:g="default"}=e,{getPrefixCls:f}=o.useContext(d.ConfigContext),p=f("skeleton",t),[m,b]=(0,c.default)(p),$=(0,i.default)(e,["prefixCls"]),v=(0,r.default)(p,`${p}-element`,{[`${p}-active`]:l,[`${p}-block`]:u},n,a,b);return m(o.createElement("div",{className:v},o.createElement(s.default,Object.assign({prefixCls:`${p}-button`,size:g},$))))}},59831:function(e,t,n){var a=n(36199).default,l=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(54440)),i=a(n(2265));t.default=e=>{let{prefixCls:t,className:n,style:a,size:l,shape:o}=e,d=(0,r.default)({[`${t}-lg`]:"large"===l,[`${t}-sm`]:"small"===l}),s=(0,r.default)({[`${t}-circle`]:"circle"===o,[`${t}-square`]:"square"===o,[`${t}-round`]:"round"===o}),c=i.useMemo(()=>"number"==typeof l?{width:l,height:l,lineHeight:`${l}px`}:{},[l]);return i.createElement("span",{className:(0,r.default)(t,d,s,n),style:Object.assign(Object.assign({},c),a)})}},15275:function(e,t,n){var a=n(36199).default,l=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(54440)),i=a(n(2265)),o=n(9273),d=l(n(86725));t.default=e=>{let{prefixCls:t,className:n,rootClassName:a,style:l,active:s}=e,{getPrefixCls:c}=i.useContext(o.ConfigContext),u=c("skeleton",t),[g,f]=(0,d.default)(u),p=(0,r.default)(u,`${u}-element`,{[`${u}-active`]:s},n,a,f);return g(i.createElement("div",{className:p},i.createElement("div",{className:(0,r.default)(`${u}-image`,n),style:l},i.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${u}-image-svg`},i.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:`${u}-image-path`})))))}},1719:function(e,t,n){var a=n(36199).default,l=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(54440)),i=l(n(2041)),o=a(n(2265)),d=n(9273),s=l(n(59831)),c=l(n(86725));t.default=e=>{let{prefixCls:t,className:n,rootClassName:a,active:l,block:u,size:g="default"}=e,{getPrefixCls:f}=o.useContext(d.ConfigContext),p=f("skeleton",t),[m,b]=(0,c.default)(p),$=(0,i.default)(e,["prefixCls"]),v=(0,r.default)(p,`${p}-element`,{[`${p}-active`]:l,[`${p}-block`]:u},n,a,b);return m(o.createElement("div",{className:v},o.createElement(s.default,Object.assign({prefixCls:`${p}-input`,size:g},$))))}},1508:function(e,t,n){var a=n(36199).default,l=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(35759)),i=l(n(54440)),o=a(n(2265)),d=n(9273),s=l(n(86725));t.default=e=>{let{prefixCls:t,className:n,rootClassName:a,style:l,active:c,children:u}=e,{getPrefixCls:g}=o.useContext(d.ConfigContext),f=g("skeleton",t),[p,m]=(0,s.default)(f),b=(0,i.default)(f,`${f}-element`,{[`${f}-active`]:c},m,n,a),$=null!=u?u:o.createElement(r.default,null);return p(o.createElement("div",{className:b},o.createElement("div",{className:(0,i.default)(`${f}-image`,n),style:l},$)))}},55310:function(e,t,n){var a=n(36199).default,l=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(15433)),i=l(n(54440)),o=a(n(2265));t.default=e=>{let getWidth=t=>{let{width:n,rows:a=2}=e;return Array.isArray(n)?n[t]:a-1===t?n:void 0},{prefixCls:t,className:n,style:a,rows:l}=e,d=(0,r.default)(Array(l)).map((e,t)=>o.createElement("li",{key:t,style:{width:getWidth(t)}}));return o.createElement("ul",{className:(0,i.default)(t,n),style:a},d)}},25715:function(e,t,n){var a=n(36199).default,l=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(54440)),i=a(n(2265)),o=n(9273),d=l(n(59123)),s=l(n(5722)),c=l(n(59831)),u=l(n(15275)),g=l(n(1719)),f=l(n(1508)),p=l(n(55310)),m=l(n(34042)),b=l(n(86725));function getComponentProps(e){return e&&"object"==typeof e?e:{}}let Skeleton=e=>{let{prefixCls:t,loading:n,className:a,rootClassName:l,style:d,children:s,avatar:u=!1,title:g=!0,paragraph:f=!0,active:$,round:v}=e,{getPrefixCls:h,direction:y,skeleton:S}=i.useContext(o.ConfigContext),O=h("skeleton",t),[j,x]=(0,b.default)(O);if(n||!("loading"in e)){let e,t;let n=!!u,o=!!g,s=!!f;if(n){let t=Object.assign(Object.assign({prefixCls:`${O}-avatar`},o&&!s?{size:"large",shape:"square"}:{size:"large",shape:"circle"}),getComponentProps(u));e=i.createElement("div",{className:`${O}-header`},i.createElement(c.default,Object.assign({},t)))}if(o||s){let e,a;if(o){let t=Object.assign(Object.assign({prefixCls:`${O}-title`},!n&&s?{width:"38%"}:n&&s?{width:"50%"}:{}),getComponentProps(g));e=i.createElement(m.default,Object.assign({},t))}if(s){let e=Object.assign(Object.assign({prefixCls:`${O}-paragraph`},function(e,t){let n={};return e&&t||(n.width="61%"),!e&&t?n.rows=3:n.rows=2,n}(n,o)),getComponentProps(f));a=i.createElement(p.default,Object.assign({},e))}t=i.createElement("div",{className:`${O}-content`},e,a)}let b=(0,r.default)(O,{[`${O}-with-avatar`]:n,[`${O}-active`]:$,[`${O}-rtl`]:"rtl"===y,[`${O}-round`]:v},null==S?void 0:S.className,a,l,x);return j(i.createElement("div",{className:b,style:Object.assign(Object.assign({},null==S?void 0:S.style),d)},e,t))}return void 0!==s?s:null};Skeleton.Button=s.default,Skeleton.Avatar=d.default,Skeleton.Input=g.default,Skeleton.Image=u.default,Skeleton.Node=f.default,t.default=Skeleton},34042:function(e,t,n){var a=n(36199).default,l=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(54440)),i=a(n(2265));t.default=e=>{let{prefixCls:t,className:n,width:a,style:l}=e;return i.createElement("h3",{className:(0,r.default)(t,n),style:Object.assign({width:a},l)})}},26782:function(e,t,n){var a=n(26314).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(25715));t.default=l.default},86725:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(81792),l=n(18710);let r=new a.Keyframes("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),genSkeletonElementCommonSize=e=>({height:e,lineHeight:`${e}px`}),genSkeletonElementAvatarSize=e=>Object.assign({width:e},genSkeletonElementCommonSize(e)),genSkeletonColor=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:r,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),genSkeletonElementInputSize=e=>Object.assign({width:5*e,minWidth:5*e},genSkeletonElementCommonSize(e)),genSkeletonElementAvatar=e=>{let{skeletonAvatarCls:t,gradientFromColor:n,controlHeight:a,controlHeightLG:l,controlHeightSM:r}=e;return{[`${t}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:n},genSkeletonElementAvatarSize(a)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},genSkeletonElementAvatarSize(l)),[`${t}${t}-sm`]:Object.assign({},genSkeletonElementAvatarSize(r))}},genSkeletonElementInput=e=>{let{controlHeight:t,borderRadiusSM:n,skeletonInputCls:a,controlHeightLG:l,controlHeightSM:r,gradientFromColor:i}=e;return{[`${a}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:i,borderRadius:n},genSkeletonElementInputSize(t)),[`${a}-lg`]:Object.assign({},genSkeletonElementInputSize(l)),[`${a}-sm`]:Object.assign({},genSkeletonElementInputSize(r))}},genSkeletonElementImageSize=e=>Object.assign({width:e},genSkeletonElementCommonSize(e)),genSkeletonElementImage=e=>{let{skeletonImageCls:t,imageSizeBase:n,gradientFromColor:a,borderRadiusSM:l}=e;return{[`${t}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:a,borderRadius:l},genSkeletonElementImageSize(2*n)),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},genSkeletonElementImageSize(n)),{maxWidth:4*n,maxHeight:4*n}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},genSkeletonElementButtonShape=(e,t,n)=>{let{skeletonButtonCls:a}=e;return{[`${n}${a}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${n}${a}-round`]:{borderRadius:t}}},genSkeletonElementButtonSize=e=>Object.assign({width:2*e,minWidth:2*e},genSkeletonElementCommonSize(e)),genSkeletonElementButton=e=>{let{borderRadiusSM:t,skeletonButtonCls:n,controlHeight:a,controlHeightLG:l,controlHeightSM:r,gradientFromColor:i}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:i,borderRadius:t,width:2*a,minWidth:2*a},genSkeletonElementButtonSize(a))},genSkeletonElementButtonShape(e,a,n)),{[`${n}-lg`]:Object.assign({},genSkeletonElementButtonSize(l))}),genSkeletonElementButtonShape(e,l,`${n}-lg`)),{[`${n}-sm`]:Object.assign({},genSkeletonElementButtonSize(r))}),genSkeletonElementButtonShape(e,r,`${n}-sm`))},genBaseStyle=e=>{let{componentCls:t,skeletonAvatarCls:n,skeletonTitleCls:a,skeletonParagraphCls:l,skeletonButtonCls:r,skeletonInputCls:i,skeletonImageCls:o,controlHeight:d,controlHeightLG:s,controlHeightSM:c,gradientFromColor:u,padding:g,marginSM:f,borderRadius:p,titleHeight:m,blockRadius:b,paragraphLiHeight:$,controlHeightXS:v,paragraphMarginTop:h}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:g,verticalAlign:"top",[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:u},genSkeletonElementAvatarSize(d)),[`${n}-circle`]:{borderRadius:"50%"},[`${n}-lg`]:Object.assign({},genSkeletonElementAvatarSize(s)),[`${n}-sm`]:Object.assign({},genSkeletonElementAvatarSize(c))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${a}`]:{width:"100%",height:m,background:u,borderRadius:b,[`+ ${l}`]:{marginBlockStart:c}},[`${l}`]:{padding:0,"> li":{width:"100%",height:$,listStyle:"none",background:u,borderRadius:b,"+ li":{marginBlockStart:v}}},[`${l}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${a}, ${l} > li`]:{borderRadius:p}}},[`${t}-with-avatar ${t}-content`]:{[`${a}`]:{marginBlockStart:f,[`+ ${l}`]:{marginBlockStart:h}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},genSkeletonElementButton(e)),genSkeletonElementAvatar(e)),genSkeletonElementInput(e)),genSkeletonElementImage(e)),[`${t}${t}-block`]:{width:"100%",[`${r}`]:{width:"100%"},[`${i}`]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${a},
        ${l} > li,
        ${n},
        ${r},
        ${i},
        ${o}
      `]:Object.assign({},genSkeletonColor(e))}}};t.default=(0,l.genComponentStyleHook)("Skeleton",e=>{let{componentCls:t}=e,n=(0,l.mergeToken)(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:1.5*e.controlHeight,borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[genBaseStyle(n)]},e=>{let{colorFillContent:t,colorFill:n}=e;return{color:t,colorGradientEnd:n,gradientFromColor:t,gradientToColor:n,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}},{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]})}}]);