"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[6809],{"./packages/components/src/elevation/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return elevation_component}});var react=__webpack_require__("./node_modules/react/index.js"),context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/view/component.tsx"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js");const Elevation={name:"12ip69d",styles:"background:transparent;display:block;margin:0!important;pointer-events:none;position:absolute;will-change:box-shadow"};var config_values=__webpack_require__("./packages/components/src/utils/config-values.js"),reduce_motion=__webpack_require__("./packages/components/src/utils/reduce-motion.js"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts"),values=__webpack_require__("./packages/components/src/utils/values.js");function getBoxShadow(value){return`0 ${value}px ${2*value}px 0\n\t${`rgba(0, 0, 0, ${value/20})`}`}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedElevation(props,forwardedRef){const elevationProps=function useElevation(props){const{active:active,borderRadius:borderRadius="inherit",className:className,focus:focus,hover:hover,isInteractive:isInteractive=!1,offset:offset=0,value:value=0,...otherProps}=(0,use_context_system.y)(props,"Elevation"),cx=(0,use_cx.I)();return{...otherProps,className:(0,react.useMemo)((()=>{let hoverValue=(0,values.Jf)(hover)?hover:2*value,activeValue=(0,values.Jf)(active)?active:value/2;isInteractive||(hoverValue=(0,values.Jf)(hover)?hover:void 0,activeValue=(0,values.Jf)(active)?active:void 0);const transition=`box-shadow ${config_values.Z.transitionDuration} ${config_values.Z.transitionTimingFunction}`,sx={};return sx.Base=(0,emotion_react_browser_esm.iv)({borderRadius:borderRadius,bottom:offset,boxShadow:getBoxShadow(value),opacity:config_values.Z.elevationIntensity,left:offset,right:offset,top:offset,transition:transition},(0,reduce_motion.r)("transition"),"",""),(0,values.Jf)(hoverValue)&&(sx.hover=(0,emotion_react_browser_esm.iv)("*:hover>&{box-shadow:",getBoxShadow(hoverValue),";}","")),(0,values.Jf)(activeValue)&&(sx.active=(0,emotion_react_browser_esm.iv)("*:active>&{box-shadow:",getBoxShadow(activeValue),";}","")),(0,values.Jf)(focus)&&(sx.focus=(0,emotion_react_browser_esm.iv)("*:focus>&{box-shadow:",getBoxShadow(focus),";}","")),cx(Elevation,sx.Base,sx.hover,sx.focus,sx.active,className)}),[active,borderRadius,className,cx,focus,hover,isInteractive,offset,value]),"aria-hidden":!0}}(props);return(0,jsx_runtime.jsx)(component.Z,{...elevationProps,ref:forwardedRef})}UnconnectedElevation.displayName="UnconnectedElevation";const component_Elevation=(0,context_connect.Iq)(UnconnectedElevation,"Elevation");var elevation_component=component_Elevation;try{component_Elevation.displayName="Elevation",component_Elevation.__docgenInfo={description:"`Elevation` is a core component that renders shadow, using the component\nsystem's shadow system.\n\nThe shadow effect is generated using the `value` prop.\n\n```jsx\nimport {\n__experimentalElevation as Elevation,\n__experimentalSurface as Surface,\n__experimentalText as Text,\n} from '@wordpress/components';\n\nfunction Example() {\n  return (\n    <Surface>\n      <Text>Code is Poetry</Text>\n      <Elevation value={ 5 } />\n    </Surface>\n  );\n}\n```",displayName:"Elevation",props:{active:{defaultValue:null,description:"Size of the shadow value when active (see the `value` and `isInteractive`\nprops).",name:"active",required:!1,type:{name:"number"}},borderRadius:{defaultValue:{value:"'inherit'"},description:"Renders the border-radius of the shadow.",name:"borderRadius",required:!1,type:{name:"BorderRadius<string | number>"}},focus:{defaultValue:null,description:"Size of the shadow value when focused (see the `value` and\n`isInteractive` props).",name:"focus",required:!1,type:{name:"number"}},hover:{defaultValue:null,description:"Size of the shadow value when hovered (see the `value` and\n`isInteractive` props).",name:"hover",required:!1,type:{name:"number"}},isInteractive:{defaultValue:{value:"false"},description:"Determines if `hover`, `active`, and `focus` shadow values should be\nautomatically calculated and rendered.",name:"isInteractive",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"0"},description:"Dimensional offsets (margin) for the shadow.",name:"offset",required:!1,type:{name:"number"}},value:{defaultValue:{value:"0"},description:"Size of the shadow, based on the Style system's elevation system. The\n`value` determines the strength of the shadow, which creates the sense of\ndepth.",name:"value",required:!1,type:{name:"number"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | ... 515 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/elevation/component.tsx#Elevation"]={docgenInfo:component_Elevation.__docgenInfo,name:"Elevation",path:"packages/components/src/elevation/component.tsx#Elevation"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/utils/reduce-motion.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function reduceMotion(prop="transition"){let style;switch(prop){case"transition":style="transition-duration: 0ms;";break;case"animation":style="animation-duration: 1ms;";break;default:style="\n\t\t\t\tanimation-duration: 1ms;\n\t\t\t\ttransition-duration: 0ms;\n\t\t\t"}return`\n\t\t@media ( prefers-reduced-motion: reduce ) {\n\t\t\t${style};\n\t\t}\n\t`}__webpack_require__.d(__webpack_exports__,{r:function(){return reduceMotion}})}}]);