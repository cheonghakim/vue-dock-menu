import{defineComponent as e,openBlock as n,createElementBlock as t,createElementVNode as o,resolveComponent as i,ref as a,computed as u,onMounted as r,nextTick as c,normalizeClass as l,normalizeStyle as s,withKeys as d,Fragment as v,renderList as f,renderSlot as m,createCommentVNode as h,toDisplayString as p,createVNode as g,createBlock as y,resolveDynamicComponent as b,createSlots as w,withCtx as M,normalizeProps as k,guardReactiveProps as A,watch as E,unref as L,onUnmounted as D,createTextVNode as S,Transition as C}from"vue";var T;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;!function(){function e(e){var n=!0,t=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function u(e){var n=e.type,t=e.tagName;return!("INPUT"!==t||!i[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}function r(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function c(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function l(t){t.metaKey||t.altKey||t.ctrlKey||(a(e.activeElement)&&r(e.activeElement),n=!0)}function s(e){n=!1}function d(e){a(e.target)&&(n||u(e.target))&&r(e.target)}function v(e){a(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(t=!0,window.clearTimeout(o),o=window.setTimeout((function(){t=!1}),100),c(e.target))}function f(e){"hidden"===document.visibilityState&&(t&&(n=!0),m())}function m(){document.addEventListener("mousemove",p),document.addEventListener("mousedown",p),document.addEventListener("mouseup",p),document.addEventListener("pointermove",p),document.addEventListener("pointerdown",p),document.addEventListener("pointerup",p),document.addEventListener("touchmove",p),document.addEventListener("touchstart",p),document.addEventListener("touchend",p)}function h(){document.removeEventListener("mousemove",p),document.removeEventListener("mousedown",p),document.removeEventListener("mouseup",p),document.removeEventListener("pointermove",p),document.removeEventListener("pointerdown",p),document.removeEventListener("pointerup",p),document.removeEventListener("touchmove",p),document.removeEventListener("touchstart",p),document.removeEventListener("touchend",p)}function p(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(n=!1,h())}document.addEventListener("keydown",l,!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",f,!0),m(),e.addEventListener("focus",d,!0),e.addEventListener("blur",v,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var n;window.applyFocusVisiblePolyfill=e;try{n=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(n)}"undefined"!=typeof document&&e(document)}(),function(e){e.TOP="TOP";e.LEFT="LEFT";e.BOTTOM="BOTTOM";e.RIGHT="RIGHT";e.NOT_AVAILABLE="NOT_AVAILABLE"}(T||(T={}));var x=T;var I=function(e,n){var t=window.innerHeight,o=window.innerWidth,i=0,a=0,u=n.x,r=n.y,c={dragActive:!1,dockPosition:x.NOT_AVAILABLE};if(e instanceof DragEvent)i=Math.round(u/o*100),a=Math.round(r/t*100);else if(e instanceof TouchEvent){var l=e.changedTouches[0];if(Boolean(l)){var s=l.clientX,d=l.clientY;i=Math.round(s/o*100),a=Math.round(d/t*100)}}return i<10&&(c.dockPosition=x.LEFT),i>90&&(c.dockPosition=x.RIGHT),a>90&&(c.dockPosition=x.BOTTOM),a<10&&(c.dockPosition=x.TOP),c.dockPosition!==x.NOT_AVAILABLE?c:null},B=function(e){if(e instanceof DragEvent){var n=new Image;!function(e){for(var n=void 0,t=e[0],o=1;o<e.length;){var i=e[o],a=e[o+1];if(o+=2,("optionalAccess"===i||"optionalCall"===i)&&null==t)return;"access"===i||"optionalAccess"===i?(n=t,t=a(t)):"call"!==i&&"optionalCall"!==i||(t=a((function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];return t.call.apply(t,[n].concat(e))})),n=void 0)}}([e,"access",function(e){return e.dataTransfer},"optionalAccess",function(e){return e.setDragImage},"call",function(e){return e(n,0,0)}])}};function O(e){for(var n=void 0,t=e[0],o=1;o<e.length;){var i=e[o],a=e[o+1];if(o+=2,("optionalAccess"===i||"optionalCall"===i)&&null==t)return;"access"===i||"optionalAccess"===i?(n=t,t=a(t)):"call"!==i&&"optionalCall"!==i||(t=a((function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];return t.call.apply(t,[n].concat(e))})),n=void 0)}return t}var P=function(){return!!/Android|webO[S\u017F]|iPhone|iPad|iPod|Blac[k\u212A]Berry/i.test(navigator.userAgent)},_=e({name:"ChevRightIcon"}),q={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-chevron-right"},R=[o("polyline",{points:"9 18 15 12 9 6"},null,-1)];function K(e){for(var n=void 0,t=e[0],o=1;o<e.length;){var i=e[o],a=e[o+1];if(o+=2,("optionalAccess"===i||"optionalCall"===i)&&null==t)return;"access"===i||"optionalAccess"===i?(n=t,t=a(t)):"call"!==i&&"optionalCall"!==i||(t=a((function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];return t.call.apply(t,[n].concat(e))})),n=void 0)}return t}_.render=function(e,o,i,a,u,r){return n(),t("svg",q,R)},_.__file="src/components/ChevRight.vue";var F=e({name:"DockMenu",components:{ChevRight:_},props:{items:{type:Array,default:[],required:!0},dock:{required:!1,default:x.TOP,type:String},parent:{required:!1,default:"",type:String},theme:{required:!0,type:Object},isMobile:{type:Boolean,default:!1},nested:{type:Boolean,default:!1},onSelected:{required:!0,type:Function},initialHighlightIndex:{required:!1,type:Number,default:-1}},emits:["selected","close-menu"],setup:function(e,n){var t=n.emit,o=i("DockMenu"),l=a(),s=a(),d=u((function(){return e.dock.toLowerCase()})),v=function(e,n){e&&(l.value?s.value=null:s.value=n,l.value=!l.value)},f=a(),m=a(),h=a(e.initialHighlightIndex),p=a(-1),g=u((function(){return{"--background-color-hover":e.theme.tertiary,"--fore-color":e.theme.textColor,"--text-hover-color":e.theme.textHoverColor}})),y=a(e.items.map((function(e){return Object.assign({},e,{id:Math.random().toString(16).slice(2),showSubMenu:!1})}))),b=u((function(){return y.value.length}));r((function(){c((function(){m.value.focus()}))}));var w=function(){var e=m.value.closest(".menu-bar-item-container");e&&e.focus()};return{MenuComponent:o,activeMenuId:s,dockClass:d,handleCloseMenu:function(){l.value=!1,c((function(){m.value.focus()}))},handleKeyDown:function(e){if(f.value){e.stopPropagation();var n=h.value+1;(n=K([y,"access",function(e){return e.value},"access",function(e){return e[n]},"optionalAccess",function(e){return e.isDivider}])?n+1:n)>=0&&n<b.value?h.value=n:n>b.value-1&&(h.value=0)}},handleKeyLeft:function(n){f.value&&(e.nested?(n.stopPropagation(),t("close-menu")):w())},handleKeyRight:function(e){if(f.value){var n=y.value[h.value];n&&n.menu?(e.stopPropagation(),p.value=0,v(!!n.menu,n.id)):w()}},handleKeySelection:function(n){if(h.value>=0){var t=y.value[h.value];n.stopPropagation(),K([t,"optionalAccess",function(e){return e.menu}])?(p.value=0,v(!!t.menu,t.id),c((function(){m.value.focus()}))):t&&e.onSelected({name:t.name,path:(e.parent+">"+t.name).toLowerCase(),callback:K([t,"optionalAccess",function(e){return e.route}])})}},handleKeyUp:function(e){if(f.value){e.stopPropagation();var n=h.value-1;(n=K([y,"access",function(e){return e.value},"access",function(e){return e[n]},"optionalAccess",function(e){return e.isDivider}])?n-1:n)>=0?h.value=n:n<0&&(h.value=b.value-1)}},handleSelection:function(n){if(n.event.stopPropagation(),n.event.preventDefault(),!n.disable)if(n.isParent)l.value=!l.value;else{var t=n.path,o=n.name;e.onSelected({name:o,path:(e.parent+">"+(t||o)).toLowerCase(),callback:K([n,"optionalAccess",function(e){return e.route}])})}},highlightedIndex:h,menuItemStyle:g,menuItems:y,menuItemsRef:m,onBlur:function(){return f.value=!1},onFocus:function(){return f.value=!0},showSubMenu:l,subMenuHighlightIndex:p,toggleSubMenu:v}}}),N=["onMouseenter","onMouseleave","onClick","onTouchend"],H={key:0,class:"menu-item-icon"},j={class:"name"},U={key:1,class:"menu-item-divider"};function G(e){for(var n=void 0,t=e[0],o=1;o<e.length;){var i=e[o],a=e[o+1];if(o+=2,("optionalAccess"===i||"optionalCall"===i)&&null==t)return;"access"===i||"optionalAccess"===i?(n=t,t=a(t)):"call"!==i&&"optionalCall"!==i||(t=a((function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];return t.call.apply(t,[n].concat(e))})),n=void 0)}return t}F.render=function(e,a,u,r,c,E){var L=i("ChevRight");return n(),t("div",{class:l([e.dockClass,"menu-wrapper"]),style:s({background:e.theme.secondary})},[o("ul",{ref:"menuItemsRef",class:"menu-items",tabindex:"0",onKeyup:[a[0]||(a[0]=d((function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleKeyUp&&e.handleKeyUp.apply(e,n)}),["up"])),a[1]||(a[1]=d((function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleKeyDown&&e.handleKeyDown.apply(e,n)}),["down"])),a[2]||(a[2]=d((function(n){return"RIGHT"===e.dock?e.handleKeyRight(n):e.handleKeyLeft(n)}),["left"])),a[3]||(a[3]=d((function(n){return"RIGHT"===e.dock?e.handleKeyLeft(n):e.handleKeyRight(n)}),["right"])),a[6]||(a[6]=d((function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleKeySelection&&e.handleKeySelection.apply(e,n)}),["enter"]))],onFocus:a[4]||(a[4]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.onFocus&&e.onFocus.apply(e,n)}),onBlur:a[5]||(a[5]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.onBlur&&e.onBlur.apply(e,n)})},[(n(!0),t(v,null,f(e.menuItems,(function(i,a){return n(),t("li",{key:i.id,class:l([e.dockClass,"menu-item",{"is-parent":!!i.menu,highlight:a===e.highlightedIndex,divider:i.isDivider,disable:i.disable}]),style:s(e.menuItemStyle),onMouseenter:function(n){return i.menu&&!e.isMobile&&e.toggleSubMenu(!!i.menu,i.id)},onMouseleave:function(n){return i.menu&&!e.isMobile&&e.toggleSubMenu(!!i.menu,i.id)},onClick:function(n){return e.handleSelection({event:n,name:i.name,route:i.route,isParent:!!i.menu,disable:i.disable})},onTouchend:function(n){return e.handleSelection({event:n,name:i.name,route:i.route,isParent:!!i.menu,disable:i.disable})}},[i.isDivider?(n(),t("span",U)):(n(),t(v,{key:0},[i.iconSlot?(n(),t("span",H,[m(e.$slots,i.iconSlot)])):h("v-if",!0),o("span",j,p(i.name),1),o("span",{class:l([{visible:!!i.menu},"icon-wrap"])},[g(L)],2),i.menu&&e.showSubMenu&&i.id===e.activeMenuId?(n(),t("div",{key:1,class:l([e.dockClass,"sub-menu-wrapper"])},[(n(),y(b(e.MenuComponent),{items:i.menu,dock:e.dock,parent:e.parent+">"+i.name,theme:e.theme,"is-touch":e.isMobile,nested:!0,"on-selected":e.onSelected,"initial-highlight-index":e.subMenuHighlightIndex,onCloseMenu:e.handleCloseMenu},w({_:2},[f(Object.keys(e.$slots),(function(n){return{name:n,fn:M((function(t){return[m(e.$slots,n,k(A(t)))]}))}}))]),1064,["items","dock","parent","theme","is-touch","on-selected","initial-highlight-index","onCloseMenu"]))],2)):h("v-if",!0)],64))],46,N)})),128))],544)],6)},F.__scopeId="data-v-9bcc0be2",F.__file="src/components/Menu.vue";var $=e({name:"MenuBarItem",components:{DockMenu:F},props:{showIcon:{type:Boolean,default:!1},name:{type:String,default:"",required:!0},icon:{type:String,required:!0},menu:{type:Array,required:!0},menuActive:{type:Boolean,default:!1,required:!0},menuBarActive:{type:Boolean,default:!1,required:!0},showMenu:{type:Boolean,default:!1,required:!0},menuBarDimensions:{type:Object,default:function(){},required:!0},dock:{required:!0,default:x.TOP,type:String},id:{required:!0,type:String},theme:{required:!0,type:Object},isMobileDevice:{type:Boolean,default:!1},activeMenuSelectionIndex:{type:Number,default:-1},onSelected:{required:!0,type:Function},highlightFirstElement:{type:Boolean,required:!1,default:!1},route:{type:Function,default:function(){}}},emits:["show","deactivate","activate","selected","activate-next","activate-previous","highlight-menu-item","select-highlighted-menu-item"],setup:function(e,n){var t=n.emit,o=a(),i=a(!1),l=a(),s=a(P()),d=a(!1),v=function(n){t(n?"activate":"deactivate",e.id)},f=function(n){if(n.stopPropagation(),!e.menu||0===G([e,"access",function(e){return e.menu},"optionalAccess",function(e){return e.length}]))return e.onSelected({name:e.name,path:e.name,callback:G([e,"optionalAccess",function(e){return e.route}])});d.value=!d.value,t("show",d.value,e.id)},m=a(-1),h=function(){var n={},t=o.value,i=t.clientHeight,a=t.clientWidth;e.dock===x.LEFT?(n.top="0px",n.left=a+"px"):e.dock===x.RIGHT?(n.top="0px",n.right=a+"px"):e.dock===x.TOP?(n.top=i+"px",n.left="0px"):e.dock===x.BOTTOM&&(n.bottom=i+"px",n.left="0px"),l.value=n},p=u((function(){return[e.dock.toLowerCase(),i.value?"active":"",e.menuBarActive?"expanded":""]}));E((function(){return e.showMenu}),(function(e){i.value=e,e&&(d.value=!1,c((function(){return G([o,"access",function(e){return e.value},"optionalAccess",function(e){return e.focus},"call",function(e){return e()}])})))})),E((function(){return[e.dock,e.menuBarActive]}),(function(){c((function(){setTimeout((function(){h()}),150)}))})),E((function(){return e.highlightFirstElement}),(function(e){m.value=e?0:-1})),r((function(){h();var e=L(o),n=L(s);e&&(n?e.addEventListener("touchend",(function(e){v(!1),c((function(){f(e)}))})):e.addEventListener("click",f))})),D((function(){var e=L(o),n=L(s);e&&(n?e.removeEventListener("touchstart",f):e.removeEventListener("mousedown",f))}));var g=u((function(){return i.value?e.theme.secondary:"transparent"})),y=u((function(){return"TOP"===e.dock||"BOTTOM"===e.dock?"horizontal":"vertical"}));return{menuBarItemRef:o,menuBarStyle:p,menuStyle:l,setMenuViewable:v,toggleMenu:f,handleMenuSelection:function(n){return e.onSelected(n)},computeMenuStyle:h,bgColor:g,handleKeyUp:function(n){var o=n.key,i=L(y);"Tab"===o?t("activate",e.id):"Enter"===o?e.activeMenuSelectionIndex<0?t("show",!e.menuActive,e.id):t("select-highlighted-menu-item"):"Escape"===o?t("show",!1):"ArrowRight"===o&&"horizontal"===i||"ArrowDown"===o&&"vertical"===i?t("activate-next",e.id,"next"):"ArrowLeft"===o&&"horizontal"===i||"ArrowUp"===o&&"vertical"===i?t("activate-previous",e.id,"prev"):"ArrowDown"===o&&"horizontal"===i?t("highlight-menu-item","down",e.id):"ArrowUp"===o&&"horizontal"===i&&t("highlight-menu-item","up",e.id)},highlightIndex:m}}}),V={key:0},W={key:1};function z(e){for(var n=void 0,t=e[0],o=1;o<e.length;){var i=e[o],a=e[o+1];if(o+=2,("optionalAccess"===i||"optionalCall"===i)&&null==t)return;"access"===i||"optionalAccess"===i?(n=t,t=a(t)):"call"!==i&&"optionalCall"!==i||(t=a((function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];return t.call.apply(t,[n].concat(e))})),n=void 0)}return t}$.render=function(e,a,u,r,c,d){var v=i("DockMenu");return n(),t("div",{ref:"menuBarItemRef",class:l(e.menuBarStyle.concat(["menu-bar-item-container"])),style:s({background:e.bgColor}),tabindex:"0",onMouseenter:a[0]||(a[0]=function(n){return e.setMenuViewable(!0)}),onMouseleave:a[1]||(a[1]=function(n){return e.setMenuViewable(!1)}),onKeyup:a[2]||(a[2]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleKeyUp&&e.handleKeyUp.apply(e,n)})},[o("span",{class:l(e.menuBarStyle.concat(["name-container"])),style:s({color:e.theme.textColor})},[e.showIcon?(n(),t("span",W,[o("i",{class:l(e.icon)},null,2)])):(n(),t("span",V,[o("i",{class:l(e.icon)},null,2),S(" "+p(e.name),1)]))],6),o("span",{class:"menu-container",style:s(e.menuStyle)},[g(C,{name:"fade"},{default:M((function(){return[e.menuActive&&e.showMenu&&(e.menu&&e.menu.length)>0?(n(),y(v,{key:0,items:e.menu,dock:e.dock,parent:e.name,theme:e.theme,"is-touch":e.isMobileDevice,"on-selected":e.onSelected,"initial-highlight-index":e.highlightIndex},w({_:2},[f(Object.keys(e.$slots),(function(n){return{name:n,fn:M((function(t){return[m(e.$slots,n,k(A(t)))]}))}}))]),1032,["items","dock","parent","theme","is-touch","on-selected","initial-highlight-index"])):h("v-if",!0)]})),_:3})],4)],38)},$.__scopeId="data-v-d6123432",$.__file="src/components/MenuBarItem.vue";var X=document.removeEventListener,Y=document.addEventListener,J=e({name:"MenuBar",components:{MenuBarItem:$},props:{middleCustomClass:{type:String,default:"flex-1"},customClass:{type:String,default:""},showIcon:{type:Boolean,default:!1},items:{required:!0,default:[],type:Array},dock:{required:!1,default:x.TOP,type:String},onSelected:{required:!0,type:Function},draggable:{required:!1,type:Boolean,default:!0},sidebarWidth:{required:!1,type:String,default:"200px"},theme:{required:!1,type:Object,default:function(){return{primary:"#21252b",secondary:"#32323e",tertiary:"#4c4c57",textColor:"#fff"}}}},setup:function(e){var n=a(),t=a(!1),o=a(!1),i=a(!1),c=a(!1),l=a(e.dock),s=u((function(){return[l.value.toLowerCase()]})),d=a(0),v=a(0),f=a(),m=a(),h=a(e.items.map((function(e){return Object.assign({},e,{id:Math.random().toString(16).slice(2)})}))),p=a(-1),g=a(""),y=a({x:0,y:0}),b=function(){(L(i)||L(c))&&(c.value=!1,i.value=!1,p.value=-1,g.value="",m.value=!1,k())},w=function(e){return y.value={x:e.clientX,y:e.clientY}};r((function(){var e=n.value;d.value=z([e,"optionalAccess",function(e){return e.clientHeight}]),v.value=z([e,"optionalAccess",function(e){return e.clientWidth}]),f.value=P(),f.value?Y("touchend",b):Y("click",b),Y("dragover",w)})),D((function(){X("dragover",w),f.value?X("touchend",b):X("click",b),X("dragover",w)}));var M=function(e){h.value&&0!==z([h,"access",function(e){return e.value},"optionalAccess",function(e){return e.length}])&&(h.value=h.value.map((function(n){return Object.assign({},n,{showMenu:n.id===e})})))},k=function(){i.value||(h.value=h.value.map((function(e){return Object.assign({},e,{showMenu:!1})})))},A=u((function(){return l.value===x.LEFT||l.value===x.RIGHT?c.value?"expanded":"not-expanded":""})),E=u((function(){return{"--menubar-expanded-width":e.sidebarWidth,"--menubar-not-expanded-width":"50px","--menubar-bg-color":e.theme.primary}}));return{DockPosition:x,activeMenuBarId:g,activeMenuSelection:p,barHeight:d,barWidth:v,dockClass:s,dockPosition:l,expandClass:A,handleActivateDir:function(e,n){var t=function(e,n,t,o,i){var a=t.findIndex((function(n){return n.id===e})),u="next"===n?a+1:a-1,r=t.length,c="";u>-1&&u<r?c=t[u].id:u>r-1?c=t[0].id:u<0&&(c=t[r-1].id);var l=t.find((function(n){return n.id===e})),s=O([l,"optionalAccess",function(e){return e.menu}])?l.menu[o]:null;return O([s,"optionalAccess",function(e){return e.menu}])&&"next"===n?{navigateMenu:{items:t.map((function(e){return e.id===i?Object.assign({},e,{menu:O([e,"access",function(e){return e.menu},"optionalAccess",function(e){return e.map},"call",function(e){return e((function(e){return Object.assign({},e,{showSubMenu:O([e,"access",function(e){return e.name},"optionalAccess",function(e){return e.toLowerCase},"call",function(e){return e()}])===O([s,"access",function(e){return e.name},"optionalAccess",function(e){return e.toLowerCase},"call",function(e){return e()}])})}))}])}):e}))}}:{navigateMenubar:{nextId:c}}}(e,n,L(h),L(p),L(g));if("navigateMenu"in t)h.value=t.navigateMenu.items;else if("navigateMenubar"in t){m.value=!0;var o=t.navigateMenubar.nextId;g.value=o,o&&M(o)}p.value=-1},handleActivateMenu:M,handleDeactivateMenu:k,handleDrag:function(e){y.value={x:e.clientX,y:e.clientY}},handleDragCancel:function(e){e.preventDefault(),e.stopPropagation()},handleDragEnd:function(e){if(L(t)){var n=I(e,L(y));if(n){var i=n.dragActive,a=n.dockPosition;o.value=i,l.value=a}t.value=!1,o.value=!1}},handleDragMove:function(){t.value&&(o.value=!0,i.value=!1)},handleDragStart:function(e){t.value=!0,o.value=!1,B(e)},handleOnShowMenu:function(e,n){i.value=e,e?g.value=n:(g.value="",m.value=!1)},handleSelected:function(n){b(),e.onSelected(n)},highlightFirstElement:m,isMobileDevice:f,menuActive:i,menuBarActive:c,menuBarRef:n,menuBarStyle:E,menuItems:h}},slots:["title"]}),Q=["draggable","showIcon"],Z={class:"right-area"};J.render=function(e,a,u,r,c,d){var h,p=i("menu-bar-item");return n(),t("div",{ref:"menuBarRef",class:l([e.dockClass,"menu-bar-container",e.expandClass]),draggable:e.draggable,tabindex:"0",style:s(e.menuBarStyle),showIcon:e.showIcon,onDragover:a[1]||(a[1]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleDragMove&&e.handleDragMove.apply(e,n)}),onDragstart:a[2]||(a[2]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleDragStart&&e.handleDragStart.apply(e,n)}),onDragend:a[3]||(a[3]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleDragEnd&&e.handleDragEnd.apply(e,n)}),onTouchstart:a[4]||(a[4]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleDragStart&&e.handleDragStart.apply(e,n)}),onTouchmove:a[5]||(a[5]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleDragMove&&e.handleDragMove.apply(e,n)}),onTouchend:a[6]||(a[6]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleDragEnd&&e.handleDragEnd.apply(e,n)})},[o("main",{class:l((h={"main-area-top-bottom":e.dock===e.DockPosition.TOP||e.dock===e.DockPosition.BOTTOM,"main-area-left-right":e.dock===e.DockPosition.LEFT||e.dock===e.DockPosition.RIGHT},h[e.customClass]=!0,h))},[o("header",null,[m(e.$slots,"title")]),o("ul",{class:l([e.dockClass,"menu-bar-items",e.middleCustomClass]),draggable:"true",onDragstart:a[0]||(a[0]=function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return e.handleDragCancel&&e.handleDragCancel.apply(e,n)})},[(n(!0),t(v,null,f(e.menuItems,(function(o){return n(),t("li",{key:o.id,class:l([e.dockClass,"v-dock-menu-bar-item-wrapper"])},[g(p,{id:o.id,dock:e.dockPosition,"menu-active":e.menuActive,"menu-bar-dimensions":{height:e.barHeight,width:e.barWidth},menu:o.menu,name:o.name,icon:o.icon,"menu-bar-active":e.menuBarActive,"show-menu":o.showMenu,theme:e.theme,"is-touch-device":e.isMobileDevice,"on-selected":e.handleSelected,"highlight-first-element":e.highlightFirstElement,"show-icon":e.showIcon,onDeactivate:e.handleDeactivateMenu,onActivate:e.handleActivateMenu,onActivateNext:e.handleActivateDir,onActivatePrevious:e.handleActivateDir,onShow:e.handleOnShowMenu},w({_:2},[f(Object.keys(e.$slots),(function(n){return{name:n,fn:M((function(t){return[m(e.$slots,n,k(A(t)))]}))}}))]),1032,["id","dock","menu-active","menu-bar-dimensions","menu","name","icon","menu-bar-active","show-menu","theme","is-touch-device","on-selected","highlight-first-element","show-icon","onDeactivate","onActivate","onActivateNext","onActivatePrevious","onShow"])],2)})),128))],34),o("div",Z,[m(e.$slots,"rightArea")])],2)],46,Q)},J.__scopeId="data-v-4a501398",J.__file="src/components/MenuBar.vue";export{J as DockMenu};
