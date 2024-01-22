import{defineComponent as e,openBlock as n,createElementBlock as t,createElementVNode as o,resolveComponent as a,ref as i,computed as u,onMounted as r,nextTick as l,normalizeClass as c,normalizeStyle as s,withKeys as d,Fragment as v,renderList as f,renderSlot as m,createCommentVNode as h,toDisplayString as p,createVNode as g,createBlock as y,resolveDynamicComponent as b,createSlots as M,withCtx as w,normalizeProps as A,guardReactiveProps as E,watch as k,unref as L,onUnmounted as S,Transition as D}from"vue";var x;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;!function(){function e(e){var n=!0,t=!1,o=null,a={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function u(e){var n=e.type,t=e.tagName;return!("INPUT"!==t||!a[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}function r(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function l(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function c(t){t.metaKey||t.altKey||t.ctrlKey||(i(e.activeElement)&&r(e.activeElement),n=!0)}function s(e){n=!1}function d(e){i(e.target)&&(n||u(e.target))&&r(e.target)}function v(e){i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(t=!0,window.clearTimeout(o),o=window.setTimeout((function(){t=!1}),100),l(e.target))}function f(e){"hidden"===document.visibilityState&&(t&&(n=!0),m())}function m(){document.addEventListener("mousemove",p),document.addEventListener("mousedown",p),document.addEventListener("mouseup",p),document.addEventListener("pointermove",p),document.addEventListener("pointerdown",p),document.addEventListener("pointerup",p),document.addEventListener("touchmove",p),document.addEventListener("touchstart",p),document.addEventListener("touchend",p)}function h(){document.removeEventListener("mousemove",p),document.removeEventListener("mousedown",p),document.removeEventListener("mouseup",p),document.removeEventListener("pointermove",p),document.removeEventListener("pointerdown",p),document.removeEventListener("pointerup",p),document.removeEventListener("touchmove",p),document.removeEventListener("touchstart",p),document.removeEventListener("touchend",p)}function p(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(n=!1,h())}document.addEventListener("keydown",c,!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",f,!0),m(),e.addEventListener("focus",d,!0),e.addEventListener("blur",v,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var n;window.applyFocusVisiblePolyfill=e;try{n=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(n)}"undefined"!=typeof document&&e(document)}(),function(e){e.TOP="TOP";e.LEFT="LEFT";e.BOTTOM="BOTTOM";e.RIGHT="RIGHT";e.NOT_AVAILABLE="NOT_AVAILABLE"}(x||(x={}));var T=x;var C=function(e,n){var t=window.innerHeight,o=window.innerWidth,a=0,i=0,u=n.x,r=n.y,l={dragActive:!1,dockPosition:T.NOT_AVAILABLE};if(e instanceof DragEvent)a=Math.round(u/o*100),i=Math.round(r/t*100);else if(e instanceof TouchEvent){var c=e.changedTouches[0];if(Boolean(c)){var s=c.clientX,d=c.clientY;a=Math.round(s/o*100),i=Math.round(d/t*100)}}return a<10&&(l.dockPosition=T.LEFT),a>90&&(l.dockPosition=T.RIGHT),i>90&&(l.dockPosition=T.BOTTOM),i<10&&(l.dockPosition=T.TOP),l.dockPosition!==T.NOT_AVAILABLE?l:null},B=function(e){if(e instanceof DragEvent){var n=new Image;!function(e){for(var n=void 0,t=e[0],o=1;o<e.length;){var a=e[o],i=e[o+1];if(o+=2,("optionalAccess"===a||"optionalCall"===a)&&null==t)return;"access"===a||"optionalAccess"===a?(n=t,t=i(t)):"call"!==a&&"optionalCall"!==a||(t=i((function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];return t.call.apply(t,[n].concat(e))})),n=void 0)}}([e,"access",function(e){return e.dataTransfer},"optionalAccess",function(e){return e.setDragImage},"call",function(e){return e(n,0,0)}])}};function I(e){for(var n=void 0,t=e[0],o=1;o<e.length;){var a=e[o],i=e[o+1];if(o+=2,("optionalAccess"===a||"optionalCall"===a)&&null==t)return;"access"===a||"optionalAccess"===a?(n=t,t=i(t)):"call"!==a&&"optionalCall"!==a||(t=i((function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];return t.call.apply(t,[n].concat(e))})),n=void 0)}return t}var O=function(){return!!/Android|webO[S\u017F]|iPhone|iPad|iPod|Blac[k\u212A]Berry/i.test(navigator.userAgent)},P=e({name:"ChevRightIcon"}),_={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right"},q=[o("polyline",{points:"9 18 15 12 9 6"},null,-1)];function K(e){for(var n=void 0,t=e[0],o=1;o<e.length;){var a=e[o],i=e[o+1];if(o+=2,("optionalAccess"===a||"optionalCall"===a)&&null==t)return;"access"===a||"optionalAccess"===a?(n=t,t=i(t)):"call"!==a&&"optionalCall"!==a||(t=i((function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];return t.call.apply(t,[n].concat(e))})),n=void 0)}return t}P.render=function(e,o,a,i,u,r){return n(),t("svg",_,q)},P.__file="src/components/ChevRight.vue";var R=e({name:"DockMenu",components:{ChevRight:P},props:{items:{type:Array,default:[],required:!0},dock:{required:!1,default:T.TOP,type:String},parent:{required:!1,default:"",type:String},theme:{required:!0,type:Object},isMobile:{type:Boolean,default:!1},nested:{type:Boolean,default:!1},onSelected:{required:!0,type:Function},initialHighlightIndex:{required:!1,type:Number,default:-1}},emits:["selected","close-menu"],setup:function(e,n){var t=n.emit,o=a("DockMenu"),c=i(),s=i(),d=u((function(){return e.dock.toLowerCase()})),v=function(e,n){e&&(c.value?s.value=null:s.value=n,c.value=!c.value)},f=i(),m=i(),h=i(e.initialHighlightIndex),p=i(-1),g=u((function(){return{"--background-color-hover":e.theme.tertiary,"--fore-color":e.theme.textColor,"--text-hover-color":e.theme.textHoverColor}})),y=i(e.items.map((function(e){return Object.assign({},e,{id:Math.random().toString(16).slice(2),showSubMenu:!1})}))),b=u((function(){return y.value.length}));r((function(){l((function(){m.value.focus()}))}));var M=function(){var e=m.value.closest(".menu-bar-item-container");e&&e.focus()};return{MenuComponent:o,activeMenuId:s,dockClass:d,handleCloseMenu:function(){c.value=!1,l((function(){m.value.focus()}))},handleKeyDown:function(e){if(f.value){e.stopPropagation();var n=h.value+1;(n=K([y,"access",function(e){return e.value},"access",function(e){return e[n]},"optionalAccess",function(e){return e.isDivider}])?n+1:n)>=0&&n<b.value?h.value=n:n>b.value-1&&(h.value=0)}},handleKeyLeft:function(n){f.value&&(e.nested?(n.stopPropagation(),t("close-menu")):M())},handleKeyRight:function(e){if(f.value){var n=y.value[h.value];n&&n.menu?(e.stopPropagation(),p.value=0,v(!!n.menu,n.id)):M()}},handleKeySelection:function(n){if(h.value>=0){var t=y.value[h.value];n.stopPropagation(),K([t,"optionalAccess",function(e){return e.menu}])?(p.value=0,v(!!t.menu,t.id),l((function(){m.value.focus()}))):t&&e.onSelected({name:t.name,path:(e.parent+">"+t.name).toLowerCase()})}},handleKeyUp:function(e){if(f.value){e.stopPropagation();var n=h.value-1;(n=K([y,"access",function(e){return e.value},"access",function(e){return e[n]},"optionalAccess",function(e){return e.isDivider}])?n-1:n)>=0?h.value=n:n<0&&(h.value=b.value-1)}},handleSelection:function(n){if(n.event.stopPropagation(),n.event.preventDefault(),!n.disable)if(n.isParent)c.value=!c.value;else{var t=n.path,o=n.name;e.onSelected({name:o,path:(e.parent+">"+(t||o)).toLowerCase()})}},highlightedIndex:h,menuItemStyle:g,menuItems:y,menuItemsRef:m,onBlur:function(){return f.value=!1},onFocus:function(){return f.value=!0},showSubMenu:c,subMenuHighlightIndex:p,toggleSubMenu:v}}}),N=["onMouseenter","onMouseleave","onClick","onTouchend"],F={key:0,class:"menu-item-icon"},H={class:"name"},j={key:1,class:"menu-item-divider"};R.render=function(e,i,u,r,l,k){var L=a("ChevRight");return n(),t("div",{class:c([e.dockClass,"menu-wrapper"]),style:s({background:e.theme.secondary})},[o("ul",{ref:"menuItemsRef",class:"menu-items",tabindex:"0",onKeyup:[i[0]||(i[0]=d((function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleKeyUp&&e.handleKeyUp.apply(e,n)}),["up"])),i[1]||(i[1]=d((function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleKeyDown&&e.handleKeyDown.apply(e,n)}),["down"])),i[2]||(i[2]=d((function(n){return"RIGHT"===e.dock?e.handleKeyRight(n):e.handleKeyLeft(n)}),["left"])),i[3]||(i[3]=d((function(n){return"RIGHT"===e.dock?e.handleKeyLeft(n):e.handleKeyRight(n)}),["right"])),i[6]||(i[6]=d((function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleKeySelection&&e.handleKeySelection.apply(e,n)}),["enter"]))],onFocus:i[4]||(i[4]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.onFocus&&e.onFocus.apply(e,n)}),onBlur:i[5]||(i[5]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.onBlur&&e.onBlur.apply(e,n)})},[(n(!0),t(v,null,f(e.menuItems,(function(a,i){return n(),t("li",{key:a.id,class:c([e.dockClass,"menu-item",{"is-parent":!!a.menu,highlight:i===e.highlightedIndex,divider:a.isDivider,disable:a.disable}]),style:s(e.menuItemStyle),onMouseenter:function(n){return a.menu&&!e.isMobile&&e.toggleSubMenu(!!a.menu,a.id)},onMouseleave:function(n){return a.menu&&!e.isMobile&&e.toggleSubMenu(!!a.menu,a.id)},onClick:function(n){return e.handleSelection({event:n,name:a.name,isParent:!!a.menu,disable:a.disable})},onTouchend:function(n){return e.handleSelection({event:n,name:a.name,isParent:!!a.menu,disable:a.disable})}},[a.isDivider?(n(),t("span",j)):(n(),t(v,{key:0},[a.iconSlot?(n(),t("span",F,[m(e.$slots,a.iconSlot)])):h("v-if",!0),o("span",H,p(a.name),1),o("span",{class:c([{visible:!!a.menu},"icon-wrap"])},[g(L)],2),a.menu&&e.showSubMenu&&a.id===e.activeMenuId?(n(),t("div",{key:1,class:c([e.dockClass,"sub-menu-wrapper"])},[(n(),y(b(e.MenuComponent),{items:a.menu,dock:e.dock,parent:e.parent+">"+a.name,theme:e.theme,"is-touch":e.isMobile,nested:!0,"on-selected":e.onSelected,"initial-highlight-index":e.subMenuHighlightIndex,onCloseMenu:e.handleCloseMenu},M({_:2},[f(Object.keys(e.$slots),(function(n){return{name:n,fn:w((function(t){return[m(e.$slots,n,A(E(t)))]}))}}))]),1064,["items","dock","parent","theme","is-touch","on-selected","initial-highlight-index","onCloseMenu"]))],2)):h("v-if",!0)],64))],46,N)})),128))],544)],6)},R.__scopeId="data-v-9bcc0be2",R.__file="src/components/Menu.vue";var U=e({name:"MenuBarItem",components:{DockMenu:R},props:{name:{type:String,default:"",required:!0},icon:{type:String,required:!0},menu:{type:Array,required:!0},menuActive:{type:Boolean,default:!1,required:!0},menuBarActive:{type:Boolean,default:!1,required:!0},showMenu:{type:Boolean,default:!1,required:!0},menuBarDimensions:{type:Object,default:function(){},required:!0},dock:{required:!0,default:T.TOP,type:String},id:{required:!0,type:String},theme:{required:!0,type:Object},isMobileDevice:{type:Boolean,default:!1},activeMenuSelectionIndex:{type:Number,default:-1},onSelected:{required:!0,type:Function},highlightFirstElement:{type:Boolean,required:!1,default:!1}},emits:["show","deactivate","activate","selected","activate-next","activate-previous","highlight-menu-item","select-highlighted-menu-item"],setup:function(e,n){var t=n.emit,o=i(),a=i(!1),c=i(),s=i(O()),d=i(!1),v=function(n){t(n?"activate":"deactivate",e.id)},f=function(n){n.stopPropagation(),d.value=!d.value,t("show",d.value,e.id)},m=i(-1),h=function(){var n={},t=o.value,a=t.clientHeight,i=t.clientWidth;e.dock===T.LEFT?(n.top="0px",n.left=i+"px"):e.dock===T.RIGHT?(n.top="0px",n.right=i+"px"):e.dock===T.TOP?(n.top=a+"px",n.left="0px"):e.dock===T.BOTTOM&&(n.bottom=a+"px",n.left="0px"),c.value=n},p=u((function(){return[e.dock.toLowerCase(),a.value?"active":"",e.menuBarActive?"expanded":""]}));k((function(){return e.showMenu}),(function(e){a.value=e,e&&(d.value=!1,l((function(){return function(e){for(var n=void 0,t=e[0],o=1;o<e.length;){var a=e[o],i=e[o+1];if(o+=2,("optionalAccess"===a||"optionalCall"===a)&&null==t)return;"access"===a||"optionalAccess"===a?(n=t,t=i(t)):"call"!==a&&"optionalCall"!==a||(t=i((function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];return t.call.apply(t,[n].concat(e))})),n=void 0)}return t}([o,"access",function(e){return e.value},"optionalAccess",function(e){return e.focus},"call",function(e){return e()}])})))})),k((function(){return[e.dock,e.menuBarActive]}),(function(){l((function(){setTimeout((function(){h()}),150)}))})),k((function(){return e.highlightFirstElement}),(function(e){m.value=e?0:-1})),r((function(){h();var e=L(o),n=L(s);e&&(n?e.addEventListener("touchend",(function(e){v(!1),l((function(){f(e)}))})):e.addEventListener("click",f))})),S((function(){var e=L(o),n=L(s);e&&(n?e.removeEventListener("touchstart",f):e.removeEventListener("mousedown",f))}));var g=u((function(){return a.value?e.theme.secondary:"transparent"})),y=u((function(){return"TOP"===e.dock||"BOTTOM"===e.dock?"horizontal":"vertical"}));return{menuBarItemRef:o,menuBarStyle:p,menuStyle:c,setMenuViewable:v,toggleMenu:f,handleMenuSelection:function(n){return e.onSelected(n)},computeMenuStyle:h,bgColor:g,handleKeyUp:function(n){var o=n.key,a=L(y);"Tab"===o?t("activate",e.id):"Enter"===o?e.activeMenuSelectionIndex<0?t("show",!e.menuActive,e.id):t("select-highlighted-menu-item"):"Escape"===o?t("show",!1):"ArrowRight"===o&&"horizontal"===a||"ArrowDown"===o&&"vertical"===a?t("activate-next",e.id,"next"):"ArrowLeft"===o&&"horizontal"===a||"ArrowUp"===o&&"vertical"===a?t("activate-previous",e.id,"prev"):"ArrowDown"===o&&"horizontal"===a?t("highlight-menu-item","down",e.id):"ArrowUp"===o&&"horizontal"===a&&t("highlight-menu-item","up",e.id)},highlightIndex:m}}});function G(e){for(var n=void 0,t=e[0],o=1;o<e.length;){var a=e[o],i=e[o+1];if(o+=2,("optionalAccess"===a||"optionalCall"===a)&&null==t)return;"access"===a||"optionalAccess"===a?(n=t,t=i(t)):"call"!==a&&"optionalCall"!==a||(t=i((function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];return t.call.apply(t,[n].concat(e))})),n=void 0)}return t}U.render=function(e,i,u,r,l,d){var v=a("DockMenu");return n(),t("div",{ref:"menuBarItemRef",class:c(e.menuBarStyle.concat(["menu-bar-item-container"])),style:s({background:e.bgColor}),tabindex:"0",onMouseenter:i[0]||(i[0]=function(n){return e.setMenuViewable(!0)}),onMouseleave:i[1]||(i[1]=function(n){return e.setMenuViewable(!1)}),onKeyup:i[2]||(i[2]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleKeyUp&&e.handleKeyUp.apply(e,n)})},[o("span",{class:c(e.menuBarStyle.concat(["name-container"])),style:s({color:e.theme.textColor})},[o("i",{class:c(e.icon)},null,2)],6),o("span",{class:"menu-container",style:s(e.menuStyle)},[g(D,{name:"fade"},{default:w((function(){return[e.menuActive&&e.showMenu?(n(),y(v,{key:0,items:e.menu,dock:e.dock,parent:e.name,theme:e.theme,"is-touch":e.isMobileDevice,"on-selected":e.onSelected,"initial-highlight-index":e.highlightIndex},M({_:2},[f(Object.keys(e.$slots),(function(n){return{name:n,fn:w((function(t){return[m(e.$slots,n,A(E(t)))]}))}}))]),1032,["items","dock","parent","theme","is-touch","on-selected","initial-highlight-index"])):h("v-if",!0)]})),_:3})],4)],38)},U.__scopeId="data-v-d6123432",U.__file="src/components/MenuBarItem.vue";var V=document.removeEventListener,W=document.addEventListener,$=e({name:"MenuBar",components:{MenuBarItem:U},props:{items:{required:!0,default:[],type:Array},dock:{required:!1,default:T.TOP,type:String},onSelected:{required:!0,type:Function},draggable:{required:!1,type:Boolean,default:!0},sidebarWidth:{required:!1,type:String,default:"200px"},theme:{required:!1,type:Object,default:function(){return{primary:"#21252b",secondary:"#32323e",tertiary:"#4c4c57",textColor:"#fff"}}}},setup:function(e){var n=i(),t=i(!1),o=i(!1),a=i(!1),l=i(!1),c=i(e.dock),s=u((function(){return[c.value.toLowerCase()]})),d=i(0),v=i(0),f=i(),m=i(),h=i(e.items.map((function(e){return Object.assign({},e,{id:Math.random().toString(16).slice(2)})}))),p=i(-1),g=i(""),y=i({x:0,y:0}),b=function(){l.value=!0},M=function(){f.value||a.value||(l.value=!1)},w=function(){(L(a)||L(l))&&(l.value=!1,a.value=!1,p.value=-1,g.value="",m.value=!1,k())},A=function(e){return y.value={x:e.clientX,y:e.clientY}};r((function(){var e=n.value;d.value=G([e,"optionalAccess",function(e){return e.clientHeight}]),v.value=G([e,"optionalAccess",function(e){return e.clientWidth}]),f.value=O();var t=L(n);f.value?W("touchend",w):(W("click",w),t&&(t.addEventListener("mouseenter",b),t.addEventListener("mouseleave",M))),W("dragover",A)})),S((function(){V("dragover",A);var e=L(n);f.value?V("touchend",w):(V("click",w),e&&(e.removeEventListener("mouseenter",b),e.removeEventListener("mouseleave",M))),V("dragover",A)}));var E=function(e){h.value=h.value.map((function(n){return Object.assign({},n,{showMenu:n.id===e})}))},k=function(){a.value||(h.value=h.value.map((function(e){return Object.assign({},e,{showMenu:!1})})))},D=u((function(){return c.value===T.LEFT||c.value===T.RIGHT?l.value?"expanded":"not-expanded":""})),x=u((function(){return{"--menubar-expanded-width":e.sidebarWidth,"--menubar-not-expanded-width":"50px","--menubar-bg-color":e.theme.primary}}));return{activeMenuBarId:g,activeMenuSelection:p,barHeight:d,barWidth:v,dockClass:s,dockPosition:c,expandClass:D,handleActivateDir:function(e,n){var t=function(e,n,t,o,a){var i=t.findIndex((function(n){return n.id===e})),u="next"===n?i+1:i-1,r=t.length,l="";u>-1&&u<r?l=t[u].id:u>r-1?l=t[0].id:u<0&&(l=t[r-1].id);var c=t.find((function(n){return n.id===e})),s=I([c,"optionalAccess",function(e){return e.menu}])?c.menu[o]:null;return I([s,"optionalAccess",function(e){return e.menu}])&&"next"===n?{navigateMenu:{items:t.map((function(e){return e.id===a?Object.assign({},e,{menu:I([e,"access",function(e){return e.menu},"optionalAccess",function(e){return e.map},"call",function(e){return e((function(e){return Object.assign({},e,{showSubMenu:I([e,"access",function(e){return e.name},"optionalAccess",function(e){return e.toLowerCase},"call",function(e){return e()}])===I([s,"access",function(e){return e.name},"optionalAccess",function(e){return e.toLowerCase},"call",function(e){return e()}])})}))}])}):e}))}}:{navigateMenubar:{nextId:l}}}(e,n,L(h),L(p),L(g));if("navigateMenu"in t)h.value=t.navigateMenu.items;else if("navigateMenubar"in t){m.value=!0;var o=t.navigateMenubar.nextId;g.value=o,o&&E(o)}p.value=-1},handleActivateMenu:E,handleDeactivateMenu:k,handleDrag:function(e){y.value={x:e.clientX,y:e.clientY}},handleDragCancel:function(e){e.preventDefault(),e.stopPropagation()},handleDragEnd:function(e){if(L(t)){var n=C(e,L(y));if(n){var a=n.dragActive,i=n.dockPosition;o.value=a,c.value=i}t.value=!1,o.value=!1}},handleDragMove:function(){t.value&&(o.value=!0,a.value=!1)},handleDragStart:function(e){t.value=!0,o.value=!1,B(e)},handleMouseEnter:b,handleMouseLeave:M,handleOnShowMenu:function(e,n){a.value=e,e?g.value=n:(g.value="",m.value=!1)},handleSelected:function(n){w(),e.onSelected(n)},highlightFirstElement:m,isMobileDevice:f,menuActive:a,menuBarActive:l,menuBarRef:n,menuBarStyle:x,menuItems:h}}}),z=["draggable"];$.render=function(e,i,u,r,l,d){var h=a("menu-bar-item");return n(),t("div",{ref:"menuBarRef",class:c([e.dockClass,"menu-bar-container",e.expandClass]),draggable:e.draggable,tabindex:"0",style:s(e.menuBarStyle),onDragover:i[1]||(i[1]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleDragMove&&e.handleDragMove.apply(e,n)}),onDragstart:i[2]||(i[2]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleDragStart&&e.handleDragStart.apply(e,n)}),onDragend:i[3]||(i[3]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleDragEnd&&e.handleDragEnd.apply(e,n)}),onTouchstart:i[4]||(i[4]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleDragStart&&e.handleDragStart.apply(e,n)}),onTouchmove:i[5]||(i[5]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleDragMove&&e.handleDragMove.apply(e,n)}),onTouchend:i[6]||(i[6]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleDragEnd&&e.handleDragEnd.apply(e,n)})},[o("ul",{class:c([e.dockClass,"menu-bar-items"]),draggable:"true",onDragstart:i[0]||(i[0]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleDragCancel&&e.handleDragCancel.apply(e,n)})},[(n(!0),t(v,null,f(e.menuItems,(function(o){return n(),t("li",{key:o.id,class:c([e.dockClass,"v-dock-menu-bar-item-wrapper"])},[g(h,{id:o.id,dock:e.dockPosition,"menu-active":e.menuActive,"menu-bar-dimensions":{height:e.barHeight,width:e.barWidth},menu:o.menu,name:o.name,icon:o.icon,"menu-bar-active":e.menuBarActive,"show-menu":o.showMenu,theme:e.theme,"is-touch-device":e.isMobileDevice,"on-selected":e.handleSelected,"highlight-first-element":e.highlightFirstElement,onDeactivate:e.handleDeactivateMenu,onActivate:e.handleActivateMenu,onActivateNext:e.handleActivateDir,onActivatePrevious:e.handleActivateDir,onShow:e.handleOnShowMenu},M({_:2},[f(Object.keys(e.$slots),(function(n){return{name:n,fn:w((function(t){return[m(e.$slots,n,A(E(t)))]}))}}))]),1032,["id","dock","menu-active","menu-bar-dimensions","menu","name","icon","menu-bar-active","show-menu","theme","is-touch-device","on-selected","highlight-first-element","onDeactivate","onActivate","onActivateNext","onActivatePrevious","onShow"])],2)})),128))],34)],46,z)},$.__scopeId="data-v-4a501398",$.__file="src/components/MenuBar.vue";export{$ as DockMenu};
