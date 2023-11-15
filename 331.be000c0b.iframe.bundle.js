"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[331],{"./packages/components/build-module/base-control/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Xp:function(){return BaseControl}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_visually_hidden__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/visually-hidden/component.js"),_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/base-control/styles/base-control-styles.js");const BaseControl=({__nextHasNoMarginBottom:__nextHasNoMarginBottom=!1,id:id,label:label,hideLabelFromVision:hideLabelFromVision=!1,help:help,className:className,children:children})=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.im,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("components-base-control",className)},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.ob,{className:"components-base-control__field",__nextHasNoMarginBottom:__nextHasNoMarginBottom},label&&id&&(hideLabelFromVision?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_visually_hidden__WEBPACK_IMPORTED_MODULE_3__.Z,{as:"label",htmlFor:id},label):(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.ar,{className:"components-base-control__label",htmlFor:id},label)),label&&!id&&(hideLabelFromVision?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_visually_hidden__WEBPACK_IMPORTED_MODULE_3__.Z,{as:"label"},label):(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl.VisualLabel,null,label)),children),!!help&&(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.vB,{id:id?id+"__help":void 0,className:"components-base-control__help",__nextHasNoMarginBottom:__nextHasNoMarginBottom},help)),VisualLabel=({className:className,children:children,...props})=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.yF,{...props,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("components-base-control__label",className)},children);BaseControl.VisualLabel=VisualLabel,BaseControl.__docgenInfo={description:"`BaseControl` is a component used to generate labels and help text for components handling user inputs.\n\n```jsx\nimport { BaseControl, useBaseControlProps } from '@wordpress/components';\n\n// Render a `BaseControl` for a textarea input\nconst MyCustomTextareaControl = ({ children, ...baseProps }) => (\n\t// `useBaseControlProps` is a convenience hook to get the props for the `BaseControl`\n\t// and the inner control itself. Namely, it takes care of generating a unique `id`,\n\t// properly associating it with the `label` and `help` elements.\n\tconst { baseControlProps, controlProps } = useBaseControlProps( baseProps );\n\n\treturn (\n\t\t<BaseControl { ...baseControlProps } __nextHasNoMarginBottom={ true }>\n\t\t\t<textarea { ...controlProps }>\n\t\t\t  { children }\n\t\t\t</textarea>\n\t\t</BaseControl>\n\t);\n);\n```",methods:[{name:"VisualLabel",docblock:null,modifiers:["static"],params:[{name:"{\n  className,\n  children,\n  ...props\n}",type:null}],returns:null}],displayName:"BaseControl",props:{__nextHasNoMarginBottom:{defaultValue:{value:"false",computed:!1},required:!1},hideLabelFromVision:{defaultValue:{value:"false",computed:!1},required:!1}}},__webpack_exports__.ZP=BaseControl,VisualLabel.__docgenInfo={description:"`BaseControl.VisualLabel` is used to render a purely visual label inside a `BaseControl` component.\n\nIt should only be used in cases where the children being rendered inside `BaseControl` are already accessibly labeled,\ne.g., a button, but we want an additional visual label for that section equivalent to the labels `BaseControl` would\notherwise use if the `label` prop was passed.\n\n@example\nimport { BaseControl } from '@wordpress/components';\n\nconst MyBaseControl = () => (\n\t<BaseControl help=\"This button is already accessibly labeled.\">\n\t\t<BaseControl.VisualLabel>Author</BaseControl.VisualLabel>\n\t\t<Button>Select an author</Button>\n\t</BaseControl>\n);",methods:[],displayName:"VisualLabel"}},"./packages/components/build-module/base-control/styles/base-control-styles.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{ar:function(){return StyledLabel},im:function(){return Wrapper},ob:function(){return StyledField},vB:function(){return StyledHelp},yF:function(){return StyledVisualLabel}});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/utils/font.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/utils/box-sizing.js"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/build-module/utils/base-label.js"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),_utils_space__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/utils/space.js");const Wrapper=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"ej5x27r4"})("font-family:",(0,_utils__WEBPACK_IMPORTED_MODULE_1__.L)("default.fontFamily"),";font-size:",(0,_utils__WEBPACK_IMPORTED_MODULE_1__.L)("default.fontSize"),";",_utils__WEBPACK_IMPORTED_MODULE_2__.p,";"),StyledField=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"ej5x27r3"})((({__nextHasNoMarginBottom:__nextHasNoMarginBottom=!1})=>!__nextHasNoMarginBottom&&(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)("margin-bottom:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_4__.D)(2),";","","",""))," .components-panel__row &{margin-bottom:inherit;}"),labelStyles=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.iv)(_utils__WEBPACK_IMPORTED_MODULE_5__.S,";display:inline-block;margin-bottom:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_4__.D)(2),";padding:0;","","",""),StyledLabel=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("label",{target:"ej5x27r2"})(labelStyles,";");var _ref={name:"11yad0w",styles:"margin-bottom:revert"};const StyledHelp=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("p",{target:"ej5x27r1"})("margin-top:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_4__.D)(2),";margin-bottom:0;font-size:",(0,_utils__WEBPACK_IMPORTED_MODULE_1__.L)("helpText.fontSize"),";font-style:normal;color:",_utils__WEBPACK_IMPORTED_MODULE_6__.D.gray[700],";",(({__nextHasNoMarginBottom:__nextHasNoMarginBottom=!1})=>!__nextHasNoMarginBottom&&_ref),";"),StyledVisualLabel=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("span",{target:"ej5x27r0"})(labelStyles,";")},"./packages/components/build-module/button/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{zx:function(){return Button}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/deprecated/build-module/index.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),_tooltip__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/build-module/tooltip/index.js"),_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/icon/index.js"),_visually_hidden__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/build-module/visually-hidden/component.js"),_popover_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/build-module/popover/utils.js");const disabledEventsOnDisabledButton=["onMouseDown","onClick"];function UnforwardedButton(props,ref){const{__next40pxDefaultSize:__next40pxDefaultSize,isBusy:isBusy,isDestructive:isDestructive,className:className,disabled:disabled,icon:icon,iconPosition:iconPosition="left",iconSize:iconSize,showTooltip:showTooltip,tooltipPosition:tooltipPosition,shortcut:shortcut,label:label,children:children,size:size="default",text:text,variant:variant,__experimentalIsFocusable:isFocusable,describedBy:describedBy,...buttonOrAnchorProps}=function useDeprecatedProps({isDefault:isDefault,isPrimary:isPrimary,isSecondary:isSecondary,isTertiary:isTertiary,isLink:isLink,isPressed:isPressed,isSmall:isSmall,size:size,variant:variant,...otherProps}){let computedSize=size,computedVariant=variant;const newProps={"aria-pressed":isPressed};var _computedSize,_computedVariant,_computedVariant2,_computedVariant3,_computedVariant4,_computedVariant5;return isSmall&&(null!==(_computedSize=computedSize)&&void 0!==_computedSize||(computedSize="small")),isPrimary&&(null!==(_computedVariant=computedVariant)&&void 0!==_computedVariant||(computedVariant="primary")),isTertiary&&(null!==(_computedVariant2=computedVariant)&&void 0!==_computedVariant2||(computedVariant="tertiary")),isSecondary&&(null!==(_computedVariant3=computedVariant)&&void 0!==_computedVariant3||(computedVariant="secondary")),isDefault&&((0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__.Z)("Button isDefault prop",{since:"5.4",alternative:'variant="secondary"',version:"6.2"}),null!==(_computedVariant4=computedVariant)&&void 0!==_computedVariant4||(computedVariant="secondary")),isLink&&(null!==(_computedVariant5=computedVariant)&&void 0!==_computedVariant5||(computedVariant="link")),{...newProps,...otherProps,size:computedSize,variant:computedVariant}}(props),{href:href,target:target,"aria-checked":ariaChecked,"aria-pressed":ariaPressed,"aria-selected":ariaSelected,...additionalProps}="href"in buttonOrAnchorProps?buttonOrAnchorProps:{href:void 0,target:void 0,...buttonOrAnchorProps},instanceId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.Z)(Button,"components-button__description"),hasChildren="string"==typeof children&&!!children||Array.isArray(children)&&children?.[0]&&null!==children[0]&&"components-tooltip"!==children?.[0]?.props?.className,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("components-button",className,{"is-next-40px-default-size":__next40pxDefaultSize,"is-secondary":"secondary"===variant,"is-primary":"primary"===variant,"is-small":"small"===size,"is-compact":"compact"===size,"is-tertiary":"tertiary"===variant,"is-pressed":[!0,"true","mixed"].includes(ariaPressed),"is-pressed-mixed":"mixed"===ariaPressed,"is-busy":isBusy,"is-link":"link"===variant,"is-destructive":isDestructive,"has-text":!!icon&&hasChildren,"has-icon":!!icon}),trulyDisabled=disabled&&!isFocusable,Tag=void 0===href||trulyDisabled?"button":"a",buttonProps="button"===Tag?{type:"button",disabled:trulyDisabled,"aria-checked":ariaChecked,"aria-pressed":ariaPressed,"aria-selected":ariaSelected}:{},anchorProps="a"===Tag?{href:href,target:target}:{};if(disabled&&isFocusable){buttonProps["aria-disabled"]=!0,anchorProps["aria-disabled"]=!0;for(const disabledEvent of disabledEventsOnDisabledButton)additionalProps[disabledEvent]=event=>{event&&(event.stopPropagation(),event.preventDefault())}}const shouldShowTooltip=!trulyDisabled&&(showTooltip&&label||shortcut||!!label&&!children?.length&&!1!==showTooltip),descriptionId=describedBy?instanceId:void 0,describedById=additionalProps["aria-describedby"]||descriptionId,commonProps={className:classes,"aria-label":additionalProps["aria-label"]||label,"aria-describedby":describedById,ref:ref},elementChildren=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,icon&&"left"===iconPosition&&(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon__WEBPACK_IMPORTED_MODULE_4__.Z,{icon:icon,size:iconSize}),text&&(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,text),icon&&"right"===iconPosition&&(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_icon__WEBPACK_IMPORTED_MODULE_4__.Z,{icon:icon,size:iconSize}),children),element="a"===Tag?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a",{...anchorProps,...additionalProps,...commonProps},elementChildren):(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button",{...buttonProps,...additionalProps,...commonProps},elementChildren);let computedPlacement;return void 0!==tooltipPosition&&(computedPlacement=(0,_popover_utils__WEBPACK_IMPORTED_MODULE_5__.KF)(tooltipPosition)),shouldShowTooltip?(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_tooltip__WEBPACK_IMPORTED_MODULE_7__.Z,{text:children?.length&&describedBy?describedBy:label,shortcut:shortcut,placement:computedPlacement},element),describedBy&&(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_visually_hidden__WEBPACK_IMPORTED_MODULE_6__.Z,null,(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span",{id:descriptionId},describedBy))):(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,element,describedBy&&(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_visually_hidden__WEBPACK_IMPORTED_MODULE_6__.Z,null,(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span",{id:descriptionId},describedBy)))}const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(UnforwardedButton);__webpack_exports__.ZP=Button,UnforwardedButton.__docgenInfo={description:"",methods:[],displayName:"UnforwardedButton"}},"./packages/components/build-module/popover/utils.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{CK:function(){return getReferenceElement},KF:function(){return positionToPlacement},d9:function(){return placementToMotionAnimationProps},sw:function(){return computePopoverPosition}});const POSITION_TO_PLACEMENT={bottom:"bottom",top:"top","middle left":"left","middle right":"right","bottom left":"bottom-end","bottom center":"bottom","bottom right":"bottom-start","top left":"top-end","top center":"top","top right":"top-start","middle left left":"left","middle left right":"left","middle left bottom":"left-end","middle left top":"left-start","middle right left":"right","middle right right":"right","middle right bottom":"right-end","middle right top":"right-start","bottom left left":"bottom-end","bottom left right":"bottom-end","bottom left bottom":"bottom-end","bottom left top":"bottom-end","bottom center left":"bottom","bottom center right":"bottom","bottom center bottom":"bottom","bottom center top":"bottom","bottom right left":"bottom-start","bottom right right":"bottom-start","bottom right bottom":"bottom-start","bottom right top":"bottom-start","top left left":"top-end","top left right":"top-end","top left bottom":"top-end","top left top":"top-end","top center left":"top","top center right":"top","top center bottom":"top","top center top":"top","top right left":"top-start","top right right":"top-start","top right bottom":"top-start","top right top":"top-start",middle:"bottom","middle center":"bottom","middle center bottom":"bottom","middle center left":"bottom","middle center right":"bottom","middle center top":"bottom"},positionToPlacement=position=>{var _POSITION_TO_PLACEMEN;return null!==(_POSITION_TO_PLACEMEN=POSITION_TO_PLACEMENT[position])&&void 0!==_POSITION_TO_PLACEMEN?_POSITION_TO_PLACEMEN:"bottom"},PLACEMENT_TO_ANIMATION_ORIGIN={top:{originX:.5,originY:1},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},right:{originX:0,originY:.5},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},bottom:{originX:.5,originY:0},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},left:{originX:1,originY:.5},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1},overlay:{originX:.5,originY:.5}},placementToMotionAnimationProps=placement=>{const translateProp=placement.startsWith("top")||placement.startsWith("bottom")?"translateY":"translateX",translateDirection=placement.startsWith("top")||placement.startsWith("left")?1:-1;return{style:PLACEMENT_TO_ANIMATION_ORIGIN[placement],initial:{opacity:0,scale:0,[translateProp]:2*translateDirection+"em"},animate:{opacity:1,scale:1,[translateProp]:0},transition:{duration:.1,ease:[0,0,.2,1]}}};const getReferenceElement=({anchor:anchor,anchorRef:anchorRef,anchorRect:anchorRect,getAnchorRect:getAnchorRect,fallbackReferenceElement:fallbackReferenceElement})=>{var _referenceElement;let referenceElement=null;return anchor?referenceElement=anchor:!function isTopBottom(anchorRef){return!!anchorRef?.top}(anchorRef)?!function isRef(anchorRef){return!!anchorRef?.current}(anchorRef)?anchorRef?referenceElement=anchorRef:anchorRect?referenceElement={getBoundingClientRect(){return anchorRect}}:getAnchorRect?referenceElement={getBoundingClientRect(){var _rect$x,_rect$y,_rect$width,_rect$height;const rect=getAnchorRect(fallbackReferenceElement);return new window.DOMRect(null!==(_rect$x=rect.x)&&void 0!==_rect$x?_rect$x:rect.left,null!==(_rect$y=rect.y)&&void 0!==_rect$y?_rect$y:rect.top,null!==(_rect$width=rect.width)&&void 0!==_rect$width?_rect$width:rect.right-rect.left,null!==(_rect$height=rect.height)&&void 0!==_rect$height?_rect$height:rect.bottom-rect.top)}}:fallbackReferenceElement&&(referenceElement=fallbackReferenceElement.parentElement):referenceElement=anchorRef.current:referenceElement={getBoundingClientRect(){const topRect=anchorRef.top.getBoundingClientRect(),bottomRect=anchorRef.bottom.getBoundingClientRect();return new window.DOMRect(topRect.x,topRect.y,topRect.width,bottomRect.bottom-topRect.top)}},null!==(_referenceElement=referenceElement)&&void 0!==_referenceElement?_referenceElement:null},computePopoverPosition=c=>null===c||Number.isNaN(c)?void 0:Math.round(c)},"./packages/components/build-module/shortcut/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function Shortcut(props){const{shortcut:shortcut,className:className}=props;if(!shortcut)return null;let displayText,ariaLabel;return"string"==typeof shortcut&&(displayText=shortcut),null!==shortcut&&"object"==typeof shortcut&&(displayText=shortcut.display,ariaLabel=shortcut.ariaLabel),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span",{className:className,"aria-label":ariaLabel},displayText)}Shortcut.__docgenInfo={description:"Shortcut component is used to display keyboard shortcuts, and it can be customized with a custom display and aria label if needed.\n\n```jsx\nimport { Shortcut } from '@wordpress/components';\n\nconst MyShortcut = () => {\n\treturn (\n\t\t<Shortcut shortcut={{ display: 'Ctrl + S', ariaLabel: 'Save' }} />\n\t);\n};\n```",methods:[],displayName:"Shortcut"},__webpack_exports__.Z=Shortcut},"./packages/components/build-module/tooltip/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/KGKSIW34.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/react-core/esm/tooltip/tooltip-anchor.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ariakit/react-core/esm/tooltip/tooltip.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/deprecated/build-module/index.js"),_shortcut__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/build-module/shortcut/index.js"),_popover_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/popover/utils.js");const TOOLTIP_DELAY=700;function Tooltip(props){const{children:children,delay:delay=TOOLTIP_DELAY,hideOnClick:hideOnClick=!0,placement:placement,position:position,shortcut:shortcut,text:text}=props,baseId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.Z)(Tooltip,"tooltip"),describedById=text||shortcut?baseId:void 0,isOnlyChild=1===react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children);let computedPlacement;void 0!==placement?computedPlacement=placement:void 0!==position&&(computedPlacement=(0,_popover_utils__WEBPACK_IMPORTED_MODULE_2__.KF)(position),(0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3__.Z)("`position` prop in wp.components.tooltip",{since:"6.4",alternative:"`placement` prop"})),computedPlacement=computedPlacement||"bottom";const tooltipStore=_ariakit_react__WEBPACK_IMPORTED_MODULE_4__._({placement:computedPlacement,timeout:delay});return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ariakit_react__WEBPACK_IMPORTED_MODULE_5__.e,{onClick:hideOnClick?tooltipStore.hide:void 0,store:tooltipStore,render:isOnlyChild?children:void 0},isOnlyChild?void 0:children),isOnlyChild&&(text||shortcut)&&(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ariakit_react__WEBPACK_IMPORTED_MODULE_6__.u,{unmountOnHide:!0,className:"components-tooltip",gutter:4,id:describedById,overflowPadding:.5,store:tooltipStore},text,shortcut&&(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_shortcut__WEBPACK_IMPORTED_MODULE_7__.Z,{className:text?"components-tooltip__shortcut":"",shortcut:shortcut})))}Tooltip.__docgenInfo={description:"",methods:[],displayName:"Tooltip"},__webpack_exports__.Z=Tooltip},"./packages/components/build-module/utils/base-label.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{S:function(){return baseLabelTypography}});const baseLabelTypography={name:"9amh4a",styles:"font-size:11px;font-weight:500;line-height:1.4;text-transform:uppercase"}},"./packages/components/build-module/utils/box-sizing.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{p:function(){return boxSizingReset}});const boxSizingReset={name:"kv6lnz",styles:"box-sizing:border-box;*,*::before,*::after{box-sizing:inherit;}"}},"./packages/components/build-module/utils/colors-values.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{D:function(){return COLORS}});var _colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/build-module/utils/colors.js");const GRAY={900:"#1e1e1e",800:"#2f2f2f",700:"#757575",600:"#949494",400:"#ccc",300:"#ddd",200:"#e0e0e0",100:"#f0f0f0"},ADMIN_theme="var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9))",ADMIN_themeDark10="var(--wp-components-color-accent-darker-10, var(--wp-admin-theme-color-darker-10, #2145e6))",UI={background:"#fff",backgroundDisabled:GRAY[100],border:GRAY[600],borderHover:GRAY[700],borderFocus:ADMIN_theme,borderDisabled:GRAY[400],textDisabled:GRAY[600],textDark:"#fff",darkGrayPlaceholder:(0,_colors__WEBPACK_IMPORTED_MODULE_0__.m4)(GRAY[900],.62),lightGrayPlaceholder:(0,_colors__WEBPACK_IMPORTED_MODULE_0__.m4)("#fff",.65)},THEME={accent:ADMIN_theme,accentDarker10:ADMIN_themeDark10},COLORS=Object.freeze({gray:GRAY,white:"#fff",alert:{yellow:"#f0b849",red:"#d94f4f",green:"#4ab866"},theme:THEME,ui:UI})},"./packages/components/build-module/utils/colors.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m4:function(){return rgba},to:function(){return getOptimalTextShade}});var memize__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/memize/dist/index.js"),colord__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/colord/index.mjs"),colord_plugins_names__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/colord/plugins/names.mjs");let colorComputationNode;function rgba(hexValue="",alpha=1){return(0,colord__WEBPACK_IMPORTED_MODULE_0__.Vi)(hexValue).alpha(alpha).toRgbString()}(0,colord__WEBPACK_IMPORTED_MODULE_0__.l7)([colord_plugins_names__WEBPACK_IMPORTED_MODULE_1__.Z]);const getComputedBackgroundColor=(0,memize__WEBPACK_IMPORTED_MODULE_2__.Z)((function _getComputedBackgroundColor(backgroundColor){if("string"!=typeof backgroundColor)return"";if(function isColor(value){return"string"==typeof value&&(0,colord__WEBPACK_IMPORTED_MODULE_0__.Vi)(value).isValid()}(backgroundColor))return backgroundColor;if(!backgroundColor.includes("var("))return"";if("undefined"==typeof document)return"";const el=function getColorComputationNode(){if("undefined"!=typeof document){if(!colorComputationNode){const el=document.createElement("div");el.setAttribute("data-g2-color-computation-node",""),document.body.appendChild(el),colorComputationNode=el}return colorComputationNode}}();if(!el)return"";el.style.background=backgroundColor;const computedColor=window?.getComputedStyle(el).background;return el.style.background="",computedColor||""}));function getOptimalTextShade(backgroundColor){const result=function getOptimalTextColor(backgroundColor){const background=getComputedBackgroundColor(backgroundColor);return(0,colord__WEBPACK_IMPORTED_MODULE_0__.Vi)(background).isLight()?"#000000":"#ffffff"}(backgroundColor);return"#000000"===result?"dark":"light"}},"./packages/components/build-module/utils/font.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{L:function(){return font}});var font_values={"default.fontFamily":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif","default.fontSize":"13px","helpText.fontSize":"12px",mobileTextMinFontSize:"16px"};function font(value){var _FONT$value;return null!==(_FONT$value=font_values[value])&&void 0!==_FONT$value?_FONT$value:""}},"./packages/components/build-module/visually-hidden/component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return visually_hidden_component}});var react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js");const visuallyHidden={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var component=__webpack_require__("./packages/components/build-module/view/component.js");function UnconnectedVisuallyHidden(props,forwardedRef){const{style:styleProp,...contextProps}=(0,use_context_system.y)(props,"VisuallyHidden");return(0,react.createElement)(component.Z,{ref:forwardedRef,...contextProps,style:{...visuallyHidden,...styleProp||{}}})}var visually_hidden_component=(0,context_connect.Iq)(UnconnectedVisuallyHidden,"VisuallyHidden");UnconnectedVisuallyHidden.__docgenInfo={description:"",methods:[],displayName:"UnconnectedVisuallyHidden"}},"./packages/compose/build-module/hooks/use-instance-id/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const instanceMap=new WeakMap;__webpack_exports__.Z=function useInstanceId(object,prefix,preferredId){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(preferredId)return preferredId;const id=function createId(object){const instances=instanceMap.get(object)||0;return instanceMap.set(object,instances+1),instances}(object);return prefix?`${prefix}-${id}`:id}),[object,preferredId,prefix])}}}]);