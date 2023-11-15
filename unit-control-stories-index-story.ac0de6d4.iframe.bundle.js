"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[4895],{"./packages/components/src/utils/hooks/use-controlled-state.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_values__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/utils/values.js");const defaultOptions={initial:void 0,fallback:""};__webpack_exports__.Z=function useControlledState(currentState,options=defaultOptions){const{initial:initial,fallback:fallback}={...defaultOptions,...options},[internalState,setInternalState]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(currentState),hasCurrentState=(0,_values__WEBPACK_IMPORTED_MODULE_1__.Jf)(currentState);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{hasCurrentState&&internalState&&setInternalState(void 0)}),[hasCurrentState,internalState]),[(0,_values__WEBPACK_IMPORTED_MODULE_1__.Me)([currentState,internalState,initial],fallback),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextState=>{hasCurrentState||setInternalState(nextState)}),[hasCurrentState])]}},"./packages/compose/build-module/hooks/use-merge-refs/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useMergeRefs}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function assignRef(ref,value){"function"==typeof ref?ref(value):ref&&ref.hasOwnProperty("current")&&(ref.current=value)}function useMergeRefs(refs){const element=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(),isAttached=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),didElementChange=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),previousRefs=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),currentRefs=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);return currentRefs.current=refs,(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{!1===didElementChange.current&&!0===isAttached.current&&refs.forEach(((ref,index)=>{const previousRef=previousRefs.current[index];ref!==previousRef&&(assignRef(previousRef,null),assignRef(ref,element.current))})),previousRefs.current=refs}),refs),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{didElementChange.current=!1})),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{assignRef(element,value),didElementChange.current=!0,isAttached.current=null!==value;const refsToAssign=value?currentRefs.current:previousRefs.current;for(const ref of refsToAssign)assignRef(ref,value)}),[])}},"./packages/primitives/build-module/svg/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Cd:function(){return Circle},G:function(){return G},UL:function(){return Rect},Wj:function(){return SVG},y$:function(){return Path}});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");const Circle=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("circle",props),G=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g",props),Path=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path",props),Rect=props=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("rect",props),SVG=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({className:className,isPressed:isPressed,...props},ref)=>{const appliedProps={...props,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,{"is-pressed":isPressed})||void 0,"aria-hidden":!0,focusable:!1};return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg",{...appliedProps,ref:ref})}));SVG.displayName="SVG"},"./packages/components/src/unit-control/stories/index.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},PressEnterToChange:function(){return PressEnterToChange},TweakingTheNumberInput:function(){return TweakingTheNumberInput},WithCustomUnits:function(){return WithCustomUnits},WithSingleUnit:function(){return WithSingleUnit},__namedExportsOrder:function(){return __namedExportsOrder}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/unit-control/index.tsx"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/unit-control/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={component:___WEBPACK_IMPORTED_MODULE_1__.dO,title:"Components (Experimental)/UnitControl",argTypes:{__unstableInputWidth:{control:{type:"text"}},__unstableStateReducer:{control:{type:null}},onChange:{control:{type:null}},onUnitChange:{control:{type:null}},prefix:{control:{type:"text"}},value:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/unit-control",actions:{argTypesRegex:"^on.*"},controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}};__webpack_exports__.default=meta;const DefaultTemplate=({onChange:onChange,...args})=>{const[value,setValue]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("10px");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.dO,{...args,value:value,onChange:(v,extra)=>{setValue(v),onChange?.(v,extra)}})};DefaultTemplate.displayName="DefaultTemplate";const Default=DefaultTemplate.bind({});Default.args={label:"Label"};const PressEnterToChange=DefaultTemplate.bind({});PressEnterToChange.args={...Default.args,isPressEnterToChange:!0};const TweakingTheNumberInput=DefaultTemplate.bind({});TweakingTheNumberInput.args={...Default.args,min:0,max:100,step:"any",label:"Custom label"};const WithSingleUnit=DefaultTemplate.bind({});WithSingleUnit.args={...Default.args,units:_utils__WEBPACK_IMPORTED_MODULE_3__.Ui.slice(0,1)};const WithCustomUnits=({onChange:onChange,...args})=>{const[value,setValue]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("80km");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.dO,{...args,value:value,onChange:(v,extra)=>{setValue(v),onChange?.(v,extra)}})};WithCustomUnits.displayName="WithCustomUnits",WithCustomUnits.args={...Default.args,isResetValueOnUnitChange:!0,min:0,units:[{value:"km",label:"km",default:1},{value:"mi",label:"mi",default:1},{value:"m",label:"m",default:1e3},{value:"yd",label:"yd",default:1760}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<string | undefined>('10px');\n  return <UnitControl {...args} value={value} onChange={(v, extra) => {\n    setValue(v);\n    onChange?.(v, extra);\n  }} />;\n}",...Default.parameters?.docs?.source}}},PressEnterToChange.parameters={...PressEnterToChange.parameters,docs:{...PressEnterToChange.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<string | undefined>('10px');\n  return <UnitControl {...args} value={value} onChange={(v, extra) => {\n    setValue(v);\n    onChange?.(v, extra);\n  }} />;\n}",...PressEnterToChange.parameters?.docs?.source},description:{story:"If the `isPressEnterToChange` prop is set to `true`, the `onChange` callback\nwill not fire while a new value is typed in the input field (you can verify this\nbehavior by inspecting the console's output).",...PressEnterToChange.parameters?.docs?.description}}},TweakingTheNumberInput.parameters={...TweakingTheNumberInput.parameters,docs:{...TweakingTheNumberInput.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<string | undefined>('10px');\n  return <UnitControl {...args} value={value} onChange={(v, extra) => {\n    setValue(v);\n    onChange?.(v, extra);\n  }} />;\n}",...TweakingTheNumberInput.parameters?.docs?.source},description:{story:"Most of `NumberControl`'s props can be passed to `UnitControl`, and they will\naffect its numeric input field.",...TweakingTheNumberInput.parameters?.docs?.description}}},WithSingleUnit.parameters={...WithSingleUnit.parameters,docs:{...WithSingleUnit.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<string | undefined>('10px');\n  return <UnitControl {...args} value={value} onChange={(v, extra) => {\n    setValue(v);\n    onChange?.(v, extra);\n  }} />;\n}",...WithSingleUnit.parameters?.docs?.source},description:{story:"When only one unit is available, the unit selection dropdown becomes static text.",...WithSingleUnit.parameters?.docs?.description}}},WithCustomUnits.parameters={...WithCustomUnits.parameters,docs:{...WithCustomUnits.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState<string | undefined>('80km');\n  return <UnitControl {...args} value={value} onChange={(v, extra) => {\n    setValue(v);\n    onChange?.(v, extra);\n  }} />;\n}",...WithCustomUnits.parameters?.docs?.source},description:{story:"It is possible to pass a custom list of units. Every time the unit changes,\nif the `isResetValueOnUnitChange` is set to `true`, the input's quantity is\nreset to the new unit's default value.",...WithCustomUnits.parameters?.docs?.description}}};const __namedExportsOrder=["Default","PressEnterToChange","TweakingTheNumberInput","WithSingleUnit","WithCustomUnits"];try{PressEnterToChange.displayName="PressEnterToChange",PressEnterToChange.__docgenInfo={description:"If the `isPressEnterToChange` prop is set to `true`, the `onChange` callback\nwill not fire while a new value is typed in the input field (you can verify this\nbehavior by inspecting the console's output).",displayName:"PressEnterToChange",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/stories/index.story.tsx#PressEnterToChange"]={docgenInfo:PressEnterToChange.__docgenInfo,name:"PressEnterToChange",path:"packages/components/src/unit-control/stories/index.story.tsx#PressEnterToChange"})}catch(__react_docgen_typescript_loader_error){}try{TweakingTheNumberInput.displayName="TweakingTheNumberInput",TweakingTheNumberInput.__docgenInfo={description:"Most of `NumberControl`'s props can be passed to `UnitControl`, and they will\naffect its numeric input field.",displayName:"TweakingTheNumberInput",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/stories/index.story.tsx#TweakingTheNumberInput"]={docgenInfo:TweakingTheNumberInput.__docgenInfo,name:"TweakingTheNumberInput",path:"packages/components/src/unit-control/stories/index.story.tsx#TweakingTheNumberInput"})}catch(__react_docgen_typescript_loader_error){}try{WithSingleUnit.displayName="WithSingleUnit",WithSingleUnit.__docgenInfo={description:"When only one unit is available, the unit selection dropdown becomes static text.",displayName:"WithSingleUnit",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/stories/index.story.tsx#WithSingleUnit"]={docgenInfo:WithSingleUnit.__docgenInfo,name:"WithSingleUnit",path:"packages/components/src/unit-control/stories/index.story.tsx#WithSingleUnit"})}catch(__react_docgen_typescript_loader_error){}try{WithCustomUnits.displayName="WithCustomUnits",WithCustomUnits.__docgenInfo={description:"It is possible to pass a custom list of units. Every time the unit changes,\nif the `isResetValueOnUnitChange` is set to `true`, the input's quantity is\nreset to the new unit's default value.",displayName:"WithCustomUnits",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/unit-control/stories/index.story.tsx#WithCustomUnits"]={docgenInfo:WithCustomUnits.__docgenInfo,name:"WithCustomUnits",path:"packages/components/src/unit-control/stories/index.story.tsx#WithCustomUnits"})}catch(__react_docgen_typescript_loader_error){}}}]);