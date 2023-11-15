"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[404],{"./packages/components/build-module/h-stack/component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/context/context-connect.js"),_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/view/component.js"),_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/h-stack/hook.js");function UnconnectedHStack(props,forwardedRef){const hStackProps=(0,_hook__WEBPACK_IMPORTED_MODULE_1__.R)(props);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_view__WEBPACK_IMPORTED_MODULE_2__.Z,{...hStackProps,ref:forwardedRef})}const HStack=(0,_context__WEBPACK_IMPORTED_MODULE_3__.Iq)(UnconnectedHStack,"HStack");__webpack_exports__.Z=HStack,UnconnectedHStack.__docgenInfo={description:"",methods:[],displayName:"UnconnectedHStack"}},"./packages/components/build-module/h-stack/hook.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{R:function(){return useHStack}});var react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),component=__webpack_require__("./packages/components/build-module/flex/flex-item/component.js"),hook=__webpack_require__("./packages/components/build-module/flex/flex/hook.js"),values=__webpack_require__("./packages/components/build-module/utils/values.js");const H_ALIGNMENTS={bottom:{align:"flex-end",justify:"center"},bottomLeft:{align:"flex-end",justify:"flex-start"},bottomRight:{align:"flex-end",justify:"flex-end"},center:{align:"center",justify:"center"},edge:{align:"center",justify:"space-between"},left:{align:"center",justify:"flex-start"},right:{align:"center",justify:"flex-end"},stretch:{align:"stretch"},top:{align:"flex-start",justify:"center"},topLeft:{align:"flex-start",justify:"flex-start"},topRight:{align:"flex-start",justify:"flex-end"}},V_ALIGNMENTS={bottom:{justify:"flex-end",align:"center"},bottomLeft:{justify:"flex-end",align:"flex-start"},bottomRight:{justify:"flex-end",align:"flex-end"},center:{justify:"center",align:"center"},edge:{justify:"space-between",align:"center"},left:{justify:"center",align:"flex-start"},right:{justify:"center",align:"flex-end"},stretch:{align:"stretch"},top:{justify:"flex-start",align:"center"},topLeft:{justify:"flex-start",align:"flex-start"},topRight:{justify:"flex-start",align:"flex-end"}};var get_valid_children=__webpack_require__("./packages/components/build-module/utils/get-valid-children.js");function useHStack(props){const{alignment:alignment="edge",children:children,direction:direction,spacing:spacing=2,...otherProps}=(0,use_context_system.y)(props,"HStack"),align=function getAlignmentProps(alignment,direction="row"){if(!(0,values.Jf)(alignment))return{};const props="column"===direction?V_ALIGNMENTS:H_ALIGNMENTS;return alignment in props?props[alignment]:{align:alignment}}(alignment,direction),propsForFlex={children:(0,get_valid_children.W)(children).map(((child,index)=>{if((0,context_connect.H)(child,["Spacer"])){const childElement=child,_key=childElement.key||`hstack-${index}`;return(0,react.createElement)(component.Z,{isBlock:!0,key:_key,...childElement.props})}return child})),direction:direction,justify:"center",...align,...otherProps,gap:spacing};return(0,hook.k)(propsForFlex)}},"./packages/components/build-module/input-control/styles/input-control-styles.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{CM:function(){return Suffix},II:function(){return Input},Kg:function(){return BackdropUI},W2:function(){return Container},__:function(){return Label},fC:function(){return Root},j7:function(){return getSizeConfig},oT:function(){return Prefix},ub:function(){return LabelWrapper}});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_flex__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/flex/flex/component.js"),_flex__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/components/build-module/flex/flex-item/component.js"),_text__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/build-module/text/component.js"),_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/build-module/utils/base-label.js"),_utils__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/components/build-module/utils/config-values.js"),_utils__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/components/build-module/utils/rtl.js"),_utils_space__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/build-module/utils/space.js");var _ref2={name:"1739oy8",styles:"z-index:1"};const rootFocusedStyles=({isFocused:isFocused})=>isFocused?_ref2:"",Root=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_flex__WEBPACK_IMPORTED_MODULE_2__.Z,{target:"em5sgkm7"})("box-sizing:border-box;position:relative;border-radius:2px;padding-top:0;",rootFocusedStyles,";");var _ref={name:"1d3w5wq",styles:"width:100%"};const Container=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"em5sgkm6"})("align-items:center;box-sizing:border-box;border-radius:inherit;display:flex;flex:1;position:relative;",(({disabled:disabled})=>{const backgroundColor=disabled?_utils__WEBPACK_IMPORTED_MODULE_3__.D.ui.backgroundDisabled:_utils__WEBPACK_IMPORTED_MODULE_3__.D.ui.background;return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({backgroundColor:backgroundColor},"","","","")})," ",(({__unstableInputWidth:__unstableInputWidth,labelPosition:labelPosition})=>__unstableInputWidth?"side"===labelPosition?"":"edge"===labelPosition?(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({flex:`0 0 ${__unstableInputWidth}`},"","","",""):(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({width:__unstableInputWidth},"","","",""):_ref),";"),getSizeConfig=({inputSize:size,__next40pxDefaultSize:__next40pxDefaultSize})=>{const sizes={default:{height:40,lineHeight:1,minHeight:40,paddingLeft:(0,_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(4),paddingRight:(0,_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(4)},small:{height:24,lineHeight:1,minHeight:24,paddingLeft:(0,_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(2),paddingRight:(0,_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(2)},"__unstable-large":{height:40,lineHeight:1,minHeight:40,paddingLeft:(0,_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(4),paddingRight:(0,_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(4)}};return __next40pxDefaultSize||(sizes.default={height:32,lineHeight:1,minHeight:32,paddingLeft:(0,_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(2),paddingRight:(0,_utils_space__WEBPACK_IMPORTED_MODULE_5__.D)(2)}),sizes[size]||sizes.default},Input=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("input",{target:"em5sgkm5"})("&&&{background-color:transparent;box-sizing:border-box;border:none;box-shadow:none!important;color:",_utils__WEBPACK_IMPORTED_MODULE_3__.D.gray[900],";display:block;font-family:inherit;margin:0;outline:none;width:100%;",(({isDragging:isDragging,dragCursor:dragCursor})=>{let defaultArrowStyles,activeDragCursorStyles;return isDragging&&(defaultArrowStyles=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)("cursor:",dragCursor,";user-select:none;&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{-webkit-appearance:none!important;margin:0!important;}","","","")),isDragging&&dragCursor&&(activeDragCursorStyles=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)("&:active{cursor:",dragCursor,";}","","","")),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)(defaultArrowStyles," ",activeDragCursorStyles,";","","","")})," ",(({disabled:disabled})=>disabled?(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({color:_utils__WEBPACK_IMPORTED_MODULE_3__.D.ui.textDisabled},"","","",""):"")," ",(({inputSize:size})=>{const sizes={default:"13px",small:"11px","__unstable-large":"13px"},fontSize=sizes[size]||sizes.default;return fontSize?(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)("font-size:","16px",";@media ( min-width: 600px ){font-size:",fontSize,";}","","",""):""})," ",(props=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)(getSizeConfig(props),"","","",""))," ",(({paddingInlineStart:paddingInlineStart,paddingInlineEnd:paddingInlineEnd})=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({paddingInlineStart:paddingInlineStart,paddingInlineEnd:paddingInlineEnd},"","","",""))," &::-webkit-input-placeholder{line-height:normal;}}"),BaseLabel=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_text__WEBPACK_IMPORTED_MODULE_6__.Z,{target:"em5sgkm4"})("&&&{",_utils__WEBPACK_IMPORTED_MODULE_7__.S,";box-sizing:border-box;display:block;padding-top:0;padding-bottom:0;max-width:100%;z-index:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}"),Label=props=>(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(BaseLabel,{...props,as:"label"}),LabelWrapper=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)(_flex__WEBPACK_IMPORTED_MODULE_8__.Z,{target:"em5sgkm3"})({name:"1b6uupn",styles:"max-width:calc( 100% - 10px )"}),BackdropUI=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{target:"em5sgkm2"})("&&&{box-sizing:border-box;border-radius:inherit;bottom:0;left:0;margin:0;padding:0;pointer-events:none;position:absolute;right:0;top:0;",(({disabled:disabled,isFocused:isFocused})=>{let boxShadow,outline,outlineOffset,borderColor=isFocused?_utils__WEBPACK_IMPORTED_MODULE_3__.D.ui.borderFocus:_utils__WEBPACK_IMPORTED_MODULE_3__.D.ui.border;return isFocused&&(boxShadow=_utils__WEBPACK_IMPORTED_MODULE_9__.Z.controlBoxShadowFocus,outline="2px solid transparent",outlineOffset="-2px"),disabled&&(borderColor=_utils__WEBPACK_IMPORTED_MODULE_3__.D.ui.borderDisabled),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.iv)({boxShadow:boxShadow,borderColor:borderColor,borderStyle:"solid",borderWidth:1,outline:outline,outlineOffset:outlineOffset},"","","","")})," ",(0,_utils__WEBPACK_IMPORTED_MODULE_10__.b)({paddingLeft:2}),";}"),Prefix=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("span",{target:"em5sgkm1"})({name:"pvvbxf",styles:"box-sizing:border-box;display:block"}),Suffix=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.Z)("span",{target:"em5sgkm0"})({name:"jgf79h",styles:"align-items:center;align-self:stretch;box-sizing:border-box;display:flex"});Label.__docgenInfo={description:"",methods:[],displayName:"Label"}},"./packages/components/build-module/text/component.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/context/context-connect.js"),_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/view/component.js"),_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/text/hook.js");function UnconnectedText(props,forwardedRef){const textProps=(0,_hook__WEBPACK_IMPORTED_MODULE_1__.Z)(props);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_view__WEBPACK_IMPORTED_MODULE_2__.Z,{as:"span",...textProps,ref:forwardedRef})}const Text=(0,_context__WEBPACK_IMPORTED_MODULE_3__.Iq)(UnconnectedText,"Text");__webpack_exports__.Z=Text,UnconnectedText.__docgenInfo={description:"@param props\n@param forwardedRef",methods:[],displayName:"UnconnectedText"}},"./packages/components/build-module/text/hook.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useText}});var styles_namespaceObject={};__webpack_require__.r(styles_namespaceObject),__webpack_require__.d(styles_namespaceObject,{Text:function(){return Text},block:function(){return block},destructive:function(){return destructive},highlighterText:function(){return highlighterText},muted:function(){return muted},positive:function(){return positive},upperCase:function(){return upperCase}});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),hook=__webpack_require__("./packages/components/build-module/truncate/hook.js"),colors=__webpack_require__("./packages/components/build-module/utils/colors.js"),colors_values=__webpack_require__("./packages/components/build-module/utils/colors-values.js"),config_values=__webpack_require__("./packages/components/build-module/utils/config-values.js");const Text=(0,emotion_react_browser_esm.iv)("color:",colors_values.D.gray[900],";line-height:",config_values.Z.fontLineHeightBase,";margin:0;","","",""),block={name:"4zleql",styles:"display:block"},positive=(0,emotion_react_browser_esm.iv)("color:",colors_values.D.alert.green,";","","",""),destructive=(0,emotion_react_browser_esm.iv)("color:",colors_values.D.alert.red,";","","",""),muted=(0,emotion_react_browser_esm.iv)("color:",colors_values.D.gray[700],";","","",""),highlighterText=(0,emotion_react_browser_esm.iv)("mark{background:",colors_values.D.alert.yellow,";border-radius:2px;box-shadow:0 0 0 1px rgba( 0, 0, 0, 0.05 ) inset,0 -1px 0 rgba( 0, 0, 0, 0.1 ) inset;}","","",""),upperCase={name:"50zrmy",styles:"text-transform:uppercase"};var dist=__webpack_require__("./node_modules/memize/dist/index.js"),highlight_words_core_dist=__webpack_require__("./node_modules/highlight-words-core/dist/index.js");const memoizedLowercaseProps=(0,dist.Z)((object=>{const mapped={};for(const key in object)mapped[key.toLowerCase()]=object[key];return mapped}));var font_size=__webpack_require__("./packages/components/build-module/utils/font-size.js"),space=__webpack_require__("./packages/components/build-module/utils/space.js");var use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js");var _ref={name:"50zrmy",styles:"text-transform:uppercase"};function useText(props){const{adjustLineHeightForInnerControls:adjustLineHeightForInnerControls,align:align,children:children,className:className,color:color,ellipsizeMode:ellipsizeMode,isDestructive:isDestructive=!1,display:display,highlightEscape:highlightEscape=!1,highlightCaseSensitive:highlightCaseSensitive=!1,highlightWords:highlightWords,highlightSanitize:highlightSanitize,isBlock:isBlock=!1,letterSpacing:letterSpacing,lineHeight:lineHeightProp,optimizeReadabilityFor:optimizeReadabilityFor,size:size,truncate:truncate=!1,upperCase:upperCase=!1,variant:variant,weight:weight=config_values.Z.fontWeight,...otherProps}=(0,use_context_system.y)(props,"Text");let content=children;const isHighlighter=Array.isArray(highlightWords),isCaption="caption"===size;if(isHighlighter){if("string"!=typeof children)throw new TypeError("`children` of `Text` must only be `string` types when `highlightWords` is defined");content=function createHighlighterText({activeClassName:activeClassName="",activeIndex:activeIndex=-1,activeStyle:activeStyle,autoEscape:autoEscape,caseSensitive:caseSensitive=!1,children:children,findChunks:findChunks,highlightClassName:highlightClassName="",highlightStyle:highlightStyle={},highlightTag:highlightTag="mark",sanitize:sanitize,searchWords:searchWords=[],unhighlightClassName:unhighlightClassName="",unhighlightStyle:unhighlightStyle}){if(!children)return null;if("string"!=typeof children)return children;const textToHighlight=children,chunks=(0,highlight_words_core_dist.findAll)({autoEscape:autoEscape,caseSensitive:caseSensitive,findChunks:findChunks,sanitize:sanitize,searchWords:searchWords,textToHighlight:textToHighlight}),HighlightTag=highlightTag;let highlightStyles,highlightIndex=-1,highlightClassNames="";return chunks.map(((chunk,index)=>{const text=textToHighlight.substr(chunk.start,chunk.end-chunk.start);if(chunk.highlight){let highlightClass;highlightIndex++,highlightClass="object"==typeof highlightClassName?caseSensitive?highlightClassName[text]:(highlightClassName=memoizedLowercaseProps(highlightClassName))[text.toLowerCase()]:highlightClassName;const isActive=highlightIndex===+activeIndex;highlightClassNames=`${highlightClass} ${isActive?activeClassName:""}`,highlightStyles=!0===isActive&&null!==activeStyle?Object.assign({},highlightStyle,activeStyle):highlightStyle;const props={children:text,className:highlightClassNames,key:index,style:highlightStyles};return"string"!=typeof HighlightTag&&(props.highlightIndex=highlightIndex),(0,react.createElement)(HighlightTag,props)}return(0,react.createElement)("span",{children:text,className:unhighlightClassName,key:index,style:unhighlightStyle})}))}({autoEscape:highlightEscape,children:children,caseSensitive:highlightCaseSensitive,searchWords:highlightWords,sanitize:highlightSanitize})}const cx=(0,use_cx.I)();let finalEllipsizeMode;!0===truncate&&(finalEllipsizeMode="auto"),!1===truncate&&(finalEllipsizeMode="none");const finalComponentProps={...otherProps,className:(0,react.useMemo)((()=>{const sx={},lineHeight=function getLineHeight(adjustLineHeightForInnerControls,lineHeight){if(lineHeight)return lineHeight;if(!adjustLineHeightForInnerControls)return;let value=`calc(${config_values.Z.controlHeight} + ${(0,space.D)(2)})`;switch(adjustLineHeightForInnerControls){case"large":value=`calc(${config_values.Z.controlHeightLarge} + ${(0,space.D)(2)})`;break;case"small":value=`calc(${config_values.Z.controlHeightSmall} + ${(0,space.D)(2)})`;break;case"xSmall":value=`calc(${config_values.Z.controlHeightXSmall} + ${(0,space.D)(2)})`}return value}(adjustLineHeightForInnerControls,lineHeightProp);if(sx.Base=(0,emotion_react_browser_esm.iv)({color:color,display:display,fontSize:(0,font_size.yv)(size),fontWeight:weight,lineHeight:lineHeight,letterSpacing:letterSpacing,textAlign:align},"","","",""),sx.upperCase=_ref,sx.optimalTextColor=null,optimizeReadabilityFor){const isOptimalTextColorDark="dark"===(0,colors.to)(optimizeReadabilityFor);sx.optimalTextColor=isOptimalTextColorDark?(0,emotion_react_browser_esm.iv)({color:colors_values.D.gray[900]},"","","",""):(0,emotion_react_browser_esm.iv)({color:colors_values.D.white},"","","","")}return cx(Text,sx.Base,sx.optimalTextColor,isDestructive&&destructive,!!isHighlighter&&highlighterText,isBlock&&block,isCaption&&muted,variant&&styles_namespaceObject[variant],upperCase&&sx.upperCase,className)}),[adjustLineHeightForInnerControls,align,className,color,cx,display,isBlock,isCaption,isDestructive,isHighlighter,letterSpacing,lineHeightProp,optimizeReadabilityFor,size,upperCase,variant,weight]),children:children,ellipsizeMode:ellipsizeMode||finalEllipsizeMode},truncateProps=(0,hook.Z)(finalComponentProps);return!truncate&&Array.isArray(children)&&(content=react.Children.map(children,(child=>{if("object"!=typeof child||null===child||!("props"in child))return child;return(0,context_connect.H)(child,["Link"])?(0,react.cloneElement)(child,{size:child.props.size||"inherit"}):child}))),{...truncateProps,children:truncate?truncateProps.children:content}}},"./packages/components/build-module/truncate/hook.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useTruncate}});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js");const Truncate={name:"hdknak",styles:"display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"};var values=__webpack_require__("./packages/components/build-module/utils/values.js");const TRUNCATE_ELLIPSIS="…",TRUNCATE_TYPE={auto:"auto",head:"head",middle:"middle",tail:"tail",none:"none"},TRUNCATE_DEFAULT_PROPS={ellipsis:TRUNCATE_ELLIPSIS,ellipsizeMode:TRUNCATE_TYPE.auto,limit:0,numberOfLines:0};function truncateContent(words="",props){const mergedProps={...TRUNCATE_DEFAULT_PROPS,...props},{ellipsis:ellipsis,ellipsizeMode:ellipsizeMode,limit:limit}=mergedProps;if(ellipsizeMode===TRUNCATE_TYPE.none)return words;let truncateHead,truncateTail;switch(ellipsizeMode){case TRUNCATE_TYPE.head:truncateHead=0,truncateTail=limit;break;case TRUNCATE_TYPE.middle:truncateHead=Math.floor(limit/2),truncateTail=Math.floor(limit/2);break;default:truncateHead=limit,truncateTail=0}const truncatedContent=ellipsizeMode!==TRUNCATE_TYPE.auto?function truncateMiddle(word,headLength,tailLength,ellipsis){if("string"!=typeof word)return"";const wordLength=word.length,frontLength=~~headLength,backLength=~~tailLength,truncateStr=(0,values.Jf)(ellipsis)?ellipsis:TRUNCATE_ELLIPSIS;return 0===frontLength&&0===backLength||frontLength>=wordLength||backLength>=wordLength||frontLength+backLength>=wordLength?word:0===backLength?word.slice(0,frontLength)+truncateStr:word.slice(0,frontLength)+truncateStr+word.slice(wordLength-backLength)}(words,truncateHead,truncateTail,ellipsis):words;return truncatedContent}var use_cx=__webpack_require__("./packages/components/build-module/utils/hooks/use-cx.js");function useTruncate(props){const{className:className,children:children,ellipsis:ellipsis=TRUNCATE_ELLIPSIS,ellipsizeMode:ellipsizeMode=TRUNCATE_TYPE.auto,limit:limit=0,numberOfLines:numberOfLines=0,...otherProps}=(0,use_context_system.y)(props,"Truncate"),cx=(0,use_cx.I)(),truncatedContent=truncateContent("string"==typeof children?children:"",{ellipsis:ellipsis,ellipsizeMode:ellipsizeMode,limit:limit,numberOfLines:numberOfLines}),shouldTruncate=ellipsizeMode===TRUNCATE_TYPE.auto;return{...otherProps,className:(0,react.useMemo)((()=>cx(shouldTruncate&&!numberOfLines&&Truncate,shouldTruncate&&!!numberOfLines&&(0,emotion_react_browser_esm.iv)("-webkit-box-orient:vertical;-webkit-line-clamp:",numberOfLines,";display:-webkit-box;overflow:hidden;","","",""),className)),[className,cx,numberOfLines,shouldTruncate]),children:truncatedContent}}},"./packages/components/build-module/utils/config-values.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _space__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/utils/space.js"),_colors_values__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/build-module/utils/colors-values.js");const CONTROL_PROPS={controlSurfaceColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,controlTextActiveColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.theme.accent,controlPaddingX:"12px",controlPaddingXLarge:"calc(12px * 1.3334)",controlPaddingXSmall:"calc(12px / 1.3334)",controlBackgroundColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.theme.accent}`,controlDestructiveBorderColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.alert.red,controlHeight:"36px",controlHeightXSmall:"calc( 36px * 0.6 )",controlHeightSmall:"calc( 36px * 0.8 )",controlHeightLarge:"calc( 36px * 1.2 )",controlHeightXLarge:"calc( 36px * 1.4 )"},TOGGLE_GROUP_CONTROL_PROPS={toggleGroupControlBackgroundColor:CONTROL_PROPS.controlBackgroundColor,toggleGroupControlBorderColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.ui.border,toggleGroupControlBackdropBackgroundColor:CONTROL_PROPS.controlSurfaceColor,toggleGroupControlBackdropBorderColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.ui.border,toggleGroupControlButtonColorActive:CONTROL_PROPS.controlBackgroundColor};__webpack_exports__.Z=Object.assign({},CONTROL_PROPS,TOGGLE_GROUP_CONTROL_PROPS,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(2)}`,cardPaddingSmall:`${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(4)}`,cardPaddingMedium:`${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(4)} ${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(6)}`,cardPaddingLarge:`${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(6)} ${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,surfaceColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"./packages/components/build-module/utils/font-size.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{gZ:function(){return getHeadingFontSize},yv:function(){return getFontSize}});var _config_values__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/build-module/utils/config-values.js");const BASE_FONT_SIZE=13,PRESET_FONT_SIZES={body:BASE_FONT_SIZE,caption:10,footnote:11,largeTitle:28,subheadline:12,title:20},HEADING_FONT_SIZES=[1,2,3,4,5,6].flatMap((n=>[n,n.toString()]));function getFontSize(size=BASE_FONT_SIZE){if(size in PRESET_FONT_SIZES)return getFontSize(PRESET_FONT_SIZES[size]);if("number"!=typeof size){const parsed=parseFloat(size);if(Number.isNaN(parsed))return size;size=parsed}return`calc(${`(${size} / ${BASE_FONT_SIZE})`} * ${_config_values__WEBPACK_IMPORTED_MODULE_0__.Z.fontSize})`}function getHeadingFontSize(size=3){if(!HEADING_FONT_SIZES.includes(size))return getFontSize(size);const headingSize=`fontSizeH${size}`;return _config_values__WEBPACK_IMPORTED_MODULE_0__.Z[headingSize]}},"./packages/components/build-module/utils/get-valid-children.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return getValidChildren}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function getValidChildren(children){return"string"==typeof children?[children]:_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./packages/components/build-module/utils/rtl.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{b:function(){return rtl}});var _emotion_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js");const LOWER_LEFT_REGEXP=new RegExp(/-left/g),LOWER_RIGHT_REGEXP=new RegExp(/-right/g),UPPER_LEFT_REGEXP=new RegExp(/Left/g),UPPER_RIGHT_REGEXP=new RegExp(/Right/g);function getConvertedKey(key){return"left"===key?"right":"right"===key?"left":LOWER_LEFT_REGEXP.test(key)?key.replace(LOWER_LEFT_REGEXP,"-right"):LOWER_RIGHT_REGEXP.test(key)?key.replace(LOWER_RIGHT_REGEXP,"-left"):UPPER_LEFT_REGEXP.test(key)?key.replace(UPPER_LEFT_REGEXP,"Right"):UPPER_RIGHT_REGEXP.test(key)?key.replace(UPPER_RIGHT_REGEXP,"Left"):key}const convertLTRToRTL=(ltrStyles={})=>Object.fromEntries(Object.entries(ltrStyles).map((([key,value])=>[getConvertedKey(key),value])));function rtl(ltrStyles={},rtlStyles){return()=>rtlStyles?(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.dZ)()?(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(rtlStyles,"",""):(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(ltrStyles,"",""):(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.dZ)()?(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(convertLTRToRTL(ltrStyles),"",""):(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(ltrStyles,"","")}rtl.watch=()=>(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.dZ)()},"./packages/components/build-module/utils/values.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function isValueDefined(value){return null!=value}function isValueEmpty(value){const isEmptyString=""===value;return!isValueDefined(value)||isEmptyString}function getDefinedValue(values=[],fallbackValue){var _values$find;return null!==(_values$find=values.find(isValueDefined))&&void 0!==_values$find?_values$find:fallbackValue}__webpack_require__.d(__webpack_exports__,{Jf:function(){return isValueDefined},Me:function(){return getDefinedValue},Wx:function(){return isValueEmpty},q9:function(){return ensureNumber}});const ensureNumber=value=>"string"==typeof value?(value=>parseFloat(value))(value):value}}]);