/*! For license information please see 1086.cf10579c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[1086],{"./node_modules/@ariakit/core/esm/__chunks/2SMRF6AD.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{EZ:function(){return __spreadProps},S0:function(){return __objRest},ih:function(){return __spreadValues}});var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target}},"./node_modules/@ariakit/core/esm/__chunks/5UJPJ37G.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{G6:function(){return isSafari},V5:function(){return isMac},mL:function(){return isApple},vU:function(){return isFirefox}});var _NIF7E7VE_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/NIF7E7VE.js");function isApple(){return!!_NIF7E7VE_js__WEBPACK_IMPORTED_MODULE_0__.Nq&&/mac|iphone|ipad|ipod/i.test(navigator.platform)}function isSafari(){return _NIF7E7VE_js__WEBPACK_IMPORTED_MODULE_0__.Nq&&isApple()&&/apple/i.test(navigator.vendor)}function isFirefox(){return _NIF7E7VE_js__WEBPACK_IMPORTED_MODULE_0__.Nq&&/firefox\//i.test(navigator.userAgent)}function isMac(){return _NIF7E7VE_js__WEBPACK_IMPORTED_MODULE_0__.Nq&&navigator.platform.startsWith("Mac")&&!function isTouchDevice(){return _NIF7E7VE_js__WEBPACK_IMPORTED_MODULE_0__.Nq&&!!navigator.maxTouchPoints}()}},"./node_modules/@ariakit/core/esm/__chunks/D23ES3Z4.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Bk:function(){return isFalsyBooleanCallback},CE:function(){return omit},EE:function(){return disabledFromProps},Ei:function(){return applyState},LS:function(){return defaultValue},RR:function(){return getKeys},Ue:function(){return normalizeString},ZT:function(){return noop},ei:function(){return pick},kG:function(){return invariant},nr:function(){return hasOwnProperty},tS:function(){return chain},wU:function(){return shallowEqual},yR:function(){return identity}});var _2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/2SMRF6AD.js");function noop(..._){}function shallowEqual(a,b){if(a===b)return!0;if(!a)return!1;if(!b)return!1;if("object"!=typeof a)return!1;if("object"!=typeof b)return!1;const aKeys=Object.keys(a),bKeys=Object.keys(b),{length:length}=aKeys;if(bKeys.length!==length)return!1;for(const key of aKeys)if(a[key]!==b[key])return!1;return!0}function applyState(argument,currentValue){if(function isUpdater(argument){return"function"==typeof argument}(argument)){return argument(function isLazyValue(value){return"function"==typeof value}(currentValue)?currentValue():currentValue)}return argument}function hasOwnProperty(object,prop){return Object.prototype.hasOwnProperty.call(object,prop)}function chain(...fns){return(...args)=>{for(const fn of fns)"function"==typeof fn&&fn(...args)}}function normalizeString(str){return str.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function omit(object,keys){const result=(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_0__.ih)({},object);for(const key of keys)hasOwnProperty(result,key)&&delete result[key];return result}function pick(object,paths){const result={};for(const key of paths)hasOwnProperty(object,key)&&(result[key]=object[key]);return result}function identity(value){return value}function invariant(condition,message){if(!condition){if("string"!=typeof message)throw new Error("Invariant failed");throw new Error(message)}}function getKeys(obj){return Object.keys(obj)}function isFalsyBooleanCallback(booleanOrCallback,...args){const result="function"==typeof booleanOrCallback?booleanOrCallback(...args):booleanOrCallback;return null!=result&&!result}function disabledFromProps(props){return props.disabled||!0===props["aria-disabled"]||"true"===props["aria-disabled"]}function defaultValue(...values){for(const value of values)if(void 0!==value)return value}},"./node_modules/@ariakit/core/esm/__chunks/NIF7E7VE.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Av:function(){return isFrame},Jj:function(){return getWindow},Me:function(){return getDocument},Nq:function(){return canUseDOM},SK:function(){return getPopupRole},eS:function(){return isTextField},iK:function(){return isButton},lQ:function(){return getPopupItemRole},oq:function(){return closest},pn:function(){return isVisible},r3:function(){return contains},vY:function(){return getActiveElement},wB:function(){return matches},wy:function(){return getScrollingElement}});var canUseDOM=function checkIsBrowser(){var _a;return"undefined"!=typeof window&&!!(null==(_a=window.document)?void 0:_a.createElement)}();function getDocument(node){return node?node.ownerDocument||node:document}function getWindow(node){return getDocument(node).defaultView||window}function getActiveElement(node,activeDescendant=!1){const{activeElement:activeElement}=getDocument(node);if(!(null==activeElement?void 0:activeElement.nodeName))return null;if(isFrame(activeElement)&&activeElement.contentDocument)return getActiveElement(activeElement.contentDocument.body,activeDescendant);if(activeDescendant){const id=activeElement.getAttribute("aria-activedescendant");if(id){const element=getDocument(activeElement).getElementById(id);if(element)return element}}return activeElement}function contains(parent,child){return parent===child||parent.contains(child)}function isFrame(element){return"IFRAME"===element.tagName}function isButton(element){const tagName=element.tagName.toLowerCase();return"button"===tagName||!("input"!==tagName||!element.type)&&-1!==buttonInputTypes.indexOf(element.type)}var buttonInputTypes=["button","color","file","image","reset","submit"];function matches(element,selectors){return"matches"in element?element.matches(selectors):"msMatchesSelector"in element?element.msMatchesSelector(selectors):element.webkitMatchesSelector(selectors)}function isVisible(element){const htmlElement=element;return htmlElement.offsetWidth>0||htmlElement.offsetHeight>0||element.getClientRects().length>0}function closest(element,selectors){if("closest"in element)return element.closest(selectors);do{if(matches(element,selectors))return element;element=element.parentElement||element.parentNode}while(null!==element&&1===element.nodeType);return null}function isTextField(element){try{const isTextInput=element instanceof HTMLInputElement&&null!==element.selectionStart,isTextArea="TEXTAREA"===element.tagName;return isTextInput||isTextArea||!1}catch(error){return!1}}function getPopupRole(element,fallback){const role=null==element?void 0:element.getAttribute("role");return role&&-1!==["dialog","menu","listbox","tree","grid"].indexOf(role)?role:fallback}function getPopupItemRole(element,fallback){var _a;const popupRole=getPopupRole(element);if(!popupRole)return fallback;return null!=(_a={menu:"menuitem",listbox:"option",tree:"treeitem",grid:"gridcell"}[popupRole])?_a:fallback}function getScrollingElement(element){if(!element)return null;if(element.clientHeight&&element.scrollHeight>element.clientHeight){const{overflowY:overflowY}=getComputedStyle(element);if("visible"!==overflowY&&"hidden"!==overflowY)return element}else if(element.clientWidth&&element.scrollWidth>element.clientWidth){const{overflowX:overflowX}=getComputedStyle(element);if("visible"!==overflowX&&"hidden"!==overflowX)return element}return getScrollingElement(element.parentElement)||document.scrollingElement||document.body}},"./node_modules/@ariakit/core/esm/utils/events.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Ke:function(){return isPortalEvent},N:function(){return isFocusEventOutside},Ud:function(){return isSelfTarget},Vr:function(){return fireFocusEvent},XN:function(){return isDownloading},iN:function(){return addGlobalEventListener},lO:function(){return fireClickEvent},nm:function(){return fireKeyboardEvent},qx:function(){return queueBeforeEvent},sE:function(){return fireBlurEvent},wC:function(){return isOpeningInNewTab}});var _chunks_5UJPJ37G_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/5UJPJ37G.js"),_chunks_NIF7E7VE_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/NIF7E7VE.js"),_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/2SMRF6AD.js");function isPortalEvent(event){return Boolean(event.currentTarget&&!(0,_chunks_NIF7E7VE_js__WEBPACK_IMPORTED_MODULE_0__.r3)(event.currentTarget,event.target))}function isSelfTarget(event){return event.target===event.currentTarget}function isOpeningInNewTab(event){const element=event.currentTarget;if(!element)return!1;const isAppleDevice=(0,_chunks_5UJPJ37G_js__WEBPACK_IMPORTED_MODULE_1__.mL)();if(isAppleDevice&&!event.metaKey)return!1;if(!isAppleDevice&&!event.ctrlKey)return!1;const tagName=element.tagName.toLowerCase();return"a"===tagName||("button"===tagName&&"submit"===element.type||"input"===tagName&&"submit"===element.type)}function isDownloading(event){const element=event.currentTarget;if(!element)return!1;const tagName=element.tagName.toLowerCase();return!!event.altKey&&("a"===tagName||("button"===tagName&&"submit"===element.type||"input"===tagName&&"submit"===element.type))}function fireBlurEvent(element,eventInit){const event=new FocusEvent("blur",eventInit),defaultAllowed=element.dispatchEvent(event),bubbleInit=(0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({},eventInit),{bubbles:!0});return element.dispatchEvent(new FocusEvent("focusout",bubbleInit)),defaultAllowed}function fireFocusEvent(element,eventInit){const event=new FocusEvent("focus",eventInit),defaultAllowed=element.dispatchEvent(event),bubbleInit=(0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_chunks_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({},eventInit),{bubbles:!0});return element.dispatchEvent(new FocusEvent("focusin",bubbleInit)),defaultAllowed}function fireKeyboardEvent(element,type,eventInit){const event=new KeyboardEvent(type,eventInit);return element.dispatchEvent(event)}function fireClickEvent(element,eventInit){const event=new MouseEvent("click",eventInit);return element.dispatchEvent(event)}function isFocusEventOutside(event,container){const containerElement=container||event.currentTarget,relatedTarget=event.relatedTarget;return!relatedTarget||!(0,_chunks_NIF7E7VE_js__WEBPACK_IMPORTED_MODULE_0__.r3)(containerElement,relatedTarget)}function queueBeforeEvent(element,type,callback){const raf=requestAnimationFrame((()=>{element.removeEventListener(type,callImmediately,!0),callback()})),callImmediately=()=>{cancelAnimationFrame(raf),callback()};return element.addEventListener(type,callImmediately,{once:!0,capture:!0}),raf}function addGlobalEventListener(type,listener,options,scope=window){const children=[];try{scope.document.addEventListener(type,listener,options);for(const frame of Array.from(scope.frames))children.push(addGlobalEventListener(type,listener,options,frame))}catch(e){}return()=>{try{scope.document.removeEventListener(type,listener,options)}catch(e){}children.forEach((remove=>remove()))}}},"./node_modules/@ariakit/react-core/esm/__chunks/2SMRF6AD.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{EZ:function(){return __spreadProps},S0:function(){return __objRest},ih:function(){return __spreadValues}});var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value:value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target}},"./node_modules/@ariakit/react-core/esm/__chunks/6WEF4WY5.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{Gw:function(){return useSafeLayoutEffect},Hw:function(){return usePortalRef},Me:function(){return useId},NW:function(){return useForceUpdate},O:function(){return useTagName},OJ:function(){return useWrapElement},cP:function(){return useLiveRef},m1:function(){return useIsMouseMoving},qq:function(){return useMergeRefs},rf:function(){return useUpdateEffect},t2:function(){return useInitialValue},yl:function(){return useBooleanEvent},zX:function(){return useEvent}});var _OZVWZODE_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/OZVWZODE.js"),_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/2SMRF6AD.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/NIF7E7VE.js"),_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/core/esm/utils/events.js"),_React=(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_1__.ih)({},react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))),useReactId=_React.useId,useReactInsertionEffect=(_React.useDeferredValue,_React.useInsertionEffect),useSafeLayoutEffect=_ariakit_core_utils_dom__WEBPACK_IMPORTED_MODULE_2__.Nq?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function useInitialValue(value){const[initialValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);return initialValue}function useLiveRef(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return useSafeLayoutEffect((()=>{ref.current=value})),ref}function useEvent(callback){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((()=>{throw new Error("Cannot call an event handler while rendering.")}));return useReactInsertionEffect?useReactInsertionEffect((()=>{ref.current=callback})):ref.current=callback,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((...args)=>{var _a;return null==(_a=ref.current)?void 0:_a.call(ref,...args)}),[])}function useMergeRefs(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(refs.some(Boolean))return value=>{refs.forEach((ref=>(0,_OZVWZODE_js__WEBPACK_IMPORTED_MODULE_3__.k$)(ref,value)))}}),refs)}function useId(defaultId){if(useReactId){const reactId=useReactId();return defaultId||reactId}const[id,setId]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultId);return useSafeLayoutEffect((()=>{if(defaultId||id)return;const random=Math.random().toString(36).substr(2,6);setId(`id-${random}`)}),[defaultId,id]),defaultId||id}function useTagName(refOrElement,type){const stringOrUndefined=type2=>{if("string"==typeof type2)return type2},[tagName,setTagName]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>stringOrUndefined(type)));return useSafeLayoutEffect((()=>{const element=refOrElement&&"current"in refOrElement?refOrElement.current:refOrElement;setTagName((null==element?void 0:element.tagName.toLowerCase())||stringOrUndefined(type))}),[refOrElement,type]),tagName}function useUpdateEffect(effect,deps){const mounted=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mounted.current)return effect();mounted.current=!0}),deps),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>{mounted.current=!1}),[])}Symbol("setNextState");function useForceUpdate(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((()=>[]),[])}function useBooleanEvent(booleanOrCallback){return useEvent("function"==typeof booleanOrCallback?booleanOrCallback:()=>booleanOrCallback)}function useWrapElement(props,callback,deps=[]){const wrapElement=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((element=>(props.wrapElement&&(element=props.wrapElement(element)),callback(element))),[...deps,props.wrapElement]);return(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_1__.EZ)((0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_1__.ih)({},props),{wrapElement:wrapElement})}function usePortalRef(portalProp=!1,portalRefProp){const[portalNode,setPortalNode]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return{portalRef:useMergeRefs(setPortalNode,portalRefProp),portalNode:portalNode,domReady:!portalProp||portalNode}}function useIsMouseMoving(){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.iN)("mousemove",setMouseMoving,!0),(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.iN)("mousedown",resetMouseMoving,!0),(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.iN)("mouseup",resetMouseMoving,!0),(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.iN)("keydown",resetMouseMoving,!0),(0,_ariakit_core_utils_events__WEBPACK_IMPORTED_MODULE_4__.iN)("scroll",resetMouseMoving,!0)}),[]);return useEvent((()=>mouseMoving))}var mouseMoving=!1,previousScreenX=0,previousScreenY=0;function setMouseMoving(event){(function hasMouseMovement(event){const movementX=event.movementX||event.screenX-previousScreenX,movementY=event.movementY||event.screenY-previousScreenY;return previousScreenX=event.screenX,previousScreenY=event.screenY,movementX||movementY||!1})(event)&&(mouseMoving=!0)}function resetMouseMoving(){mouseMoving=!1}},"./node_modules/@ariakit/react-core/esm/__chunks/LFJDOMBA.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Bi:function(){return createHook},LM:function(){return createComponent},W5:function(){return createMemoComponent},az:function(){return createElement},re:function(){return createStoreContext}});var _6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/6WEF4WY5.js"),_OZVWZODE_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/OZVWZODE.js"),_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/2SMRF6AD.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/D23ES3Z4.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function createComponent(render){return react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>render((0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({ref:ref},props))))}function createMemoComponent(render){const Role=createComponent(render);return react__WEBPACK_IMPORTED_MODULE_0__.memo(Role)}function createElement(Type,props){const _a=props,{as:As,wrapElement:wrapElement,render:render}=_a,rest=(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_a,["as","wrapElement","render"]);let element;const mergedRef=(0,_6WEF4WY5_js__WEBPACK_IMPORTED_MODULE_3__.qq)(props.ref,(0,_OZVWZODE_js__WEBPACK_IMPORTED_MODULE_4__.Yx)(render));if(As&&"string"!=typeof As)element=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(As,(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({},rest),{render:render}));else if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(render)){const renderProps=(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({},render.props),{ref:mergedRef});element=react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(render,(0,_OZVWZODE_js__WEBPACK_IMPORTED_MODULE_4__.dG)(rest,renderProps))}else if(render)element=render(rest);else if(function isRenderProp(children){return"function"==typeof children}(props.children)){0;const _b=rest,{children:children}=_b,otherProps=(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.S0)(_b,["children"]);element=props.children(otherProps)}else element=As?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(As,(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({},rest)):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Type,(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({},rest));return wrapElement?wrapElement(element):element}function createHook(useProps){return(props={})=>{const htmlProps=useProps(props),copy={};for(const prop in htmlProps)(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_5__.nr)(htmlProps,prop)&&void 0!==htmlProps[prop]&&(copy[prop]=htmlProps[prop]);return copy}}function createStoreContext(providers=[],scopedProviders=[]){const context=react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0),scopedContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0),useContext2=()=>react__WEBPACK_IMPORTED_MODULE_0__.useContext(context),ContextProvider=props=>providers.reduceRight(((children,Provider)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Provider,(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({},props),{children:children}))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(context.Provider,(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({},props)));return{context:context,scopedContext:scopedContext,useContext:useContext2,useScopedContext:(onlyScoped=!1)=>{const scoped=react__WEBPACK_IMPORTED_MODULE_0__.useContext(scopedContext),store=useContext2();return onlyScoped?scoped:scoped||store},useProviderContext:()=>{const scoped=react__WEBPACK_IMPORTED_MODULE_0__.useContext(scopedContext),store=useContext2();if(!scoped||scoped!==store)return store},ContextProvider:ContextProvider,ScopedContextProvider:props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ContextProvider,(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({},props),{children:scopedProviders.reduceRight(((children,Provider)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Provider,(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.EZ)((0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({},props),{children:children}))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(scopedContext.Provider,(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_2__.ih)({},props)))}))}}},"./node_modules/@ariakit/react-core/esm/__chunks/OZVWZODE.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Yx:function(){return getRefProperty},dG:function(){return mergeProps},k$:function(){return setRef}});var _2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/2SMRF6AD.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@ariakit/core/esm/__chunks/D23ES3Z4.js");function setRef(ref,value){"function"==typeof ref?ref(value):ref&&(ref.current=value)}function getRefProperty(element){return function isValidElementWithRef(element){return!!element&&!!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element)&&"ref"in element}(element)?element.ref:null}function mergeProps(base,overrides){const props=(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_1__.ih)({},base);for(const key in overrides){if(!(0,_ariakit_core_utils_misc__WEBPACK_IMPORTED_MODULE_2__.nr)(overrides,key))continue;if("className"===key){const prop="className";props[prop]=base[prop]?`${base[prop]} ${overrides[prop]}`:overrides[prop];continue}if("style"===key){const prop="style";props[prop]=base[prop]?(0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_1__.ih)((0,_2SMRF6AD_js__WEBPACK_IMPORTED_MODULE_1__.ih)({},base[prop]),overrides[prop]):overrides[prop];continue}const overrideValue=overrides[key];if("function"==typeof overrideValue&&key.startsWith("on")){const baseValue=base[key];if("function"==typeof baseValue){props[key]=(...args)=>{overrideValue(...args),baseValue(...args)};continue}}props[key]=overrideValue}return props}},"./node_modules/deepmerge/dist/cjs.js":function(module){var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":function(module){module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./node_modules/is-plain-object/dist/is-plain-object.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function isObject(o){return"[object Object]"===Object.prototype.toString.call(o)}function isPlainObject(o){var ctor,prot;return!1!==isObject(o)&&(void 0===(ctor=o.constructor)||!1!==isObject(prot=ctor.prototype)&&!1!==prot.hasOwnProperty("isPrototypeOf"))}__webpack_require__.d(__webpack_exports__,{P:function(){return isPlainObject}})},"./node_modules/no-case/dist.es2015/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:function(){return noCase}});function lowerCase(str){return str.toLowerCase()}var DEFAULT_SPLIT_REGEXP=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],DEFAULT_STRIP_REGEXP=/[^A-Z0-9]+/gi;function noCase(input,options){void 0===options&&(options={});for(var _a=options.splitRegexp,splitRegexp=void 0===_a?DEFAULT_SPLIT_REGEXP:_a,_b=options.stripRegexp,stripRegexp=void 0===_b?DEFAULT_STRIP_REGEXP:_b,_c=options.transform,transform=void 0===_c?lowerCase:_c,_d=options.delimiter,delimiter=void 0===_d?" ":_d,result=replace(replace(input,splitRegexp,"$1\0$2"),stripRegexp,"\0"),start=0,end=result.length;"\0"===result.charAt(start);)start++;for(;"\0"===result.charAt(end-1);)end--;return result.slice(start,end).split("\0").map(transform).join(delimiter)}function replace(input,re,value){return re instanceof RegExp?input.replace(re,value):re.reduce((function(input,re){return input.replace(re,value)}),input)}},"./node_modules/param-case/dist.es2015/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{o:function(){return paramCase}});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),dist_es2015=__webpack_require__("./node_modules/no-case/dist.es2015/index.js");function paramCase(input,options){return void 0===options&&(options={}),function dotCase(input,options){return void 0===options&&(options={}),(0,dist_es2015.B)(input,(0,tslib_es6.pi)({delimiter:"."},options))}(input,(0,tslib_es6.pi)({delimiter:"-"},options))}}}]);