"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[7577],{"./packages/components/src/color-palette/stories/index.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CSSVariables:function(){return CSSVariables},Default:function(){return Default},InitialValue:function(){return InitialValue},MultipleOrigins:function(){return MultipleOrigins},__namedExportsOrder:function(){return __namedExportsOrder}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/color-palette/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"Components/ColorPalette",component:___WEBPACK_IMPORTED_MODULE_1__.ZP,argTypes:{as:{control:{type:null}},onChange:{action:"onChange",control:{type:null}},value:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/color-palette",controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}};__webpack_exports__.default=meta;const Template=({onChange:onChange,value:value,...args})=>{const[color,setColor]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(value);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.ZP,{...args,value:color,onChange:newColor=>{setColor(newColor),onChange?.(newColor)}})};Template.displayName="Template";const Default=Template.bind({});Default.args={colors:[{name:"Red",color:"#f00"},{name:"White",color:"#fff"},{name:"Blue",color:"#00f"}]};const InitialValue=Template.bind({});InitialValue.args={colors:[{name:"Red",color:"#f00"},{name:"White",color:"#fff"},{name:"Blue",color:"#00f"}],value:"#00f"};const MultipleOrigins=Template.bind({});MultipleOrigins.args={colors:[{name:"Primary colors",colors:[{name:"Red",color:"#f00"},{name:"Yellow",color:"#ff0"},{name:"Blue",color:"#00f"}]},{name:"Secondary colors",colors:[{name:"Orange",color:"#f60"},{name:"Green",color:"#0f0"},{name:"Purple",color:"#60f"}]}]};const CSSVariables=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{"--red":"#f00","--yellow":"#ff0","--blue":"#00f"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Template,{...args})});CSSVariables.displayName="CSSVariables",CSSVariables.args={colors:[{name:"Red",color:"var(--red)"},{name:"Yellow",color:"var(--yellow)"},{name:"Blue",color:"var(--blue)"}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  onChange,\n  value,\n  ...args\n}) => {\n  const [color, setColor] = useState<string | undefined>(value);\n  return <ColorPalette {...args} value={color} onChange={newColor => {\n    setColor(newColor);\n    onChange?.(newColor);\n  }} />;\n}",...Default.parameters?.docs?.source}}},InitialValue.parameters={...InitialValue.parameters,docs:{...InitialValue.parameters?.docs,source:{originalSource:"({\n  onChange,\n  value,\n  ...args\n}) => {\n  const [color, setColor] = useState<string | undefined>(value);\n  return <ColorPalette {...args} value={color} onChange={newColor => {\n    setColor(newColor);\n    onChange?.(newColor);\n  }} />;\n}",...InitialValue.parameters?.docs?.source}}},MultipleOrigins.parameters={...MultipleOrigins.parameters,docs:{...MultipleOrigins.parameters?.docs,source:{originalSource:"({\n  onChange,\n  value,\n  ...args\n}) => {\n  const [color, setColor] = useState<string | undefined>(value);\n  return <ColorPalette {...args} value={color} onChange={newColor => {\n    setColor(newColor);\n    onChange?.(newColor);\n  }} />;\n}",...MultipleOrigins.parameters?.docs?.source}}},CSSVariables.parameters={...CSSVariables.parameters,docs:{...CSSVariables.parameters?.docs,source:{originalSource:"args => {\n  return <div style={({\n    '--red': '#f00',\n    '--yellow': '#ff0',\n    '--blue': '#00f'\n  } as CSSProperties)}>\n            <Template {...args} />\n        </div>;\n}",...CSSVariables.parameters?.docs?.source}}};const __namedExportsOrder=["Default","InitialValue","MultipleOrigins","CSSVariables"]}}]);