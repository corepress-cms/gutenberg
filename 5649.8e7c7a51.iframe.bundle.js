"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[5649],{"./packages/components/src/text/hook.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useText}});var styles_namespaceObject={};__webpack_require__.r(styles_namespaceObject),__webpack_require__.d(styles_namespaceObject,{Text:function(){return Text},block:function(){return block},destructive:function(){return destructive},highlighterText:function(){return highlighterText},muted:function(){return muted},positive:function(){return positive},upperCase:function(){return upperCase}});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),hook=__webpack_require__("./packages/components/src/truncate/hook.ts"),colors=__webpack_require__("./packages/components/src/utils/colors.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js");const Text=(0,emotion_react_browser_esm.iv)("color:",colors_values.D.gray[900],";line-height:",config_values.Z.fontLineHeightBase,";margin:0;",""),block={name:"4zleql",styles:"display:block"},positive=(0,emotion_react_browser_esm.iv)("color:",colors_values.D.alert.green,";",""),destructive=(0,emotion_react_browser_esm.iv)("color:",colors_values.D.alert.red,";",""),muted=(0,emotion_react_browser_esm.iv)("color:",colors_values.D.gray[700],";",""),highlighterText=(0,emotion_react_browser_esm.iv)("mark{background:",colors_values.D.alert.yellow,";border-radius:2px;box-shadow:0 0 0 1px rgba( 0, 0, 0, 0.05 ) inset,0 -1px 0 rgba( 0, 0, 0, 0.1 ) inset;}",""),upperCase={name:"50zrmy",styles:"text-transform:uppercase"};var dist=__webpack_require__("./node_modules/memize/dist/index.js"),highlight_words_core_dist=__webpack_require__("./node_modules/highlight-words-core/dist/index.js");const memoizedLowercaseProps=(0,dist.Z)((object=>{const mapped={};for(const key in object)mapped[key.toLowerCase()]=object[key];return mapped}));var font_size=__webpack_require__("./packages/components/src/utils/font-size.ts"),space=__webpack_require__("./packages/components/src/utils/space.ts");var use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");var _ref={name:"50zrmy",styles:"text-transform:uppercase"};function useText(props){const{adjustLineHeightForInnerControls:adjustLineHeightForInnerControls,align:align,children:children,className:className,color:color,ellipsizeMode:ellipsizeMode,isDestructive:isDestructive=!1,display:display,highlightEscape:highlightEscape=!1,highlightCaseSensitive:highlightCaseSensitive=!1,highlightWords:highlightWords,highlightSanitize:highlightSanitize,isBlock:isBlock=!1,letterSpacing:letterSpacing,lineHeight:lineHeightProp,optimizeReadabilityFor:optimizeReadabilityFor,size:size,truncate:truncate=!1,upperCase:upperCase=!1,variant:variant,weight:weight=config_values.Z.fontWeight,...otherProps}=(0,use_context_system.y)(props,"Text");let content=children;const isHighlighter=Array.isArray(highlightWords),isCaption="caption"===size;if(isHighlighter){if("string"!=typeof children)throw new TypeError("`children` of `Text` must only be `string` types when `highlightWords` is defined");content=function createHighlighterText({activeClassName:activeClassName="",activeIndex:activeIndex=-1,activeStyle:activeStyle,autoEscape:autoEscape,caseSensitive:caseSensitive=!1,children:children,findChunks:findChunks,highlightClassName:highlightClassName="",highlightStyle:highlightStyle={},highlightTag:highlightTag="mark",sanitize:sanitize,searchWords:searchWords=[],unhighlightClassName:unhighlightClassName="",unhighlightStyle:unhighlightStyle}){if(!children)return null;if("string"!=typeof children)return children;const textToHighlight=children,chunks=(0,highlight_words_core_dist.findAll)({autoEscape:autoEscape,caseSensitive:caseSensitive,findChunks:findChunks,sanitize:sanitize,searchWords:searchWords,textToHighlight:textToHighlight}),HighlightTag=highlightTag;let highlightStyles,highlightIndex=-1,highlightClassNames="";return chunks.map(((chunk,index)=>{const text=textToHighlight.substr(chunk.start,chunk.end-chunk.start);if(chunk.highlight){let highlightClass;highlightIndex++,highlightClass="object"==typeof highlightClassName?caseSensitive?highlightClassName[text]:(highlightClassName=memoizedLowercaseProps(highlightClassName))[text.toLowerCase()]:highlightClassName;const isActive=highlightIndex===+activeIndex;highlightClassNames=`${highlightClass} ${isActive?activeClassName:""}`,highlightStyles=!0===isActive&&null!==activeStyle?Object.assign({},highlightStyle,activeStyle):highlightStyle;const props={children:text,className:highlightClassNames,key:index,style:highlightStyles};return"string"!=typeof HighlightTag&&(props.highlightIndex=highlightIndex),(0,react.createElement)(HighlightTag,props)}return(0,react.createElement)("span",{children:text,className:unhighlightClassName,key:index,style:unhighlightStyle})}))}({autoEscape:highlightEscape,children:children,caseSensitive:highlightCaseSensitive,searchWords:highlightWords,sanitize:highlightSanitize})}const cx=(0,use_cx.I)();let finalEllipsizeMode;!0===truncate&&(finalEllipsizeMode="auto"),!1===truncate&&(finalEllipsizeMode="none");const finalComponentProps={...otherProps,className:(0,react.useMemo)((()=>{const sx={},lineHeight=function getLineHeight(adjustLineHeightForInnerControls,lineHeight){if(lineHeight)return lineHeight;if(!adjustLineHeightForInnerControls)return;let value=`calc(${config_values.Z.controlHeight} + ${(0,space.D)(2)})`;switch(adjustLineHeightForInnerControls){case"large":value=`calc(${config_values.Z.controlHeightLarge} + ${(0,space.D)(2)})`;break;case"small":value=`calc(${config_values.Z.controlHeightSmall} + ${(0,space.D)(2)})`;break;case"xSmall":value=`calc(${config_values.Z.controlHeightXSmall} + ${(0,space.D)(2)})`}return value}(adjustLineHeightForInnerControls,lineHeightProp);if(sx.Base=(0,emotion_react_browser_esm.iv)({color:color,display:display,fontSize:(0,font_size.yv)(size),fontWeight:weight,lineHeight:lineHeight,letterSpacing:letterSpacing,textAlign:align},"",""),sx.upperCase=_ref,sx.optimalTextColor=null,optimizeReadabilityFor){const isOptimalTextColorDark="dark"===(0,colors.to)(optimizeReadabilityFor);sx.optimalTextColor=isOptimalTextColorDark?(0,emotion_react_browser_esm.iv)({color:colors_values.D.gray[900]},"",""):(0,emotion_react_browser_esm.iv)({color:colors_values.D.white},"","")}return cx(Text,sx.Base,sx.optimalTextColor,isDestructive&&destructive,!!isHighlighter&&highlighterText,isBlock&&block,isCaption&&muted,variant&&styles_namespaceObject[variant],upperCase&&sx.upperCase,className)}),[adjustLineHeightForInnerControls,align,className,color,cx,display,isBlock,isCaption,isDestructive,isHighlighter,letterSpacing,lineHeightProp,optimizeReadabilityFor,size,upperCase,variant,weight]),children:children,ellipsizeMode:ellipsizeMode||finalEllipsizeMode},truncateProps=(0,hook.Z)(finalComponentProps);return!truncate&&Array.isArray(children)&&(content=react.Children.map(children,(child=>{if("object"!=typeof child||null===child||!("props"in child))return child;return(0,context_connect.H)(child,["Link"])?(0,react.cloneElement)(child,{size:child.props.size||"inherit"}):child}))),{...truncateProps,children:truncate?truncateProps.children:content}}},"./packages/components/src/truncate/hook.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useTruncate}});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js");const Truncate={name:"hdknak",styles:"display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"};var values=__webpack_require__("./packages/components/src/utils/values.js");const TRUNCATE_ELLIPSIS="…",TRUNCATE_TYPE={auto:"auto",head:"head",middle:"middle",tail:"tail",none:"none"},TRUNCATE_DEFAULT_PROPS={ellipsis:TRUNCATE_ELLIPSIS,ellipsizeMode:TRUNCATE_TYPE.auto,limit:0,numberOfLines:0};function truncateContent(words="",props){const mergedProps={...TRUNCATE_DEFAULT_PROPS,...props},{ellipsis:ellipsis,ellipsizeMode:ellipsizeMode,limit:limit}=mergedProps;if(ellipsizeMode===TRUNCATE_TYPE.none)return words;let truncateHead,truncateTail;switch(ellipsizeMode){case TRUNCATE_TYPE.head:truncateHead=0,truncateTail=limit;break;case TRUNCATE_TYPE.middle:truncateHead=Math.floor(limit/2),truncateTail=Math.floor(limit/2);break;default:truncateHead=limit,truncateTail=0}const truncatedContent=ellipsizeMode!==TRUNCATE_TYPE.auto?function truncateMiddle(word,headLength,tailLength,ellipsis){if("string"!=typeof word)return"";const wordLength=word.length,frontLength=~~headLength,backLength=~~tailLength,truncateStr=(0,values.Jf)(ellipsis)?ellipsis:TRUNCATE_ELLIPSIS;return 0===frontLength&&0===backLength||frontLength>=wordLength||backLength>=wordLength||frontLength+backLength>=wordLength?word:0===backLength?word.slice(0,frontLength)+truncateStr:word.slice(0,frontLength)+truncateStr+word.slice(wordLength-backLength)}(words,truncateHead,truncateTail,ellipsis):words;return truncatedContent}var use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useTruncate(props){const{className:className,children:children,ellipsis:ellipsis=TRUNCATE_ELLIPSIS,ellipsizeMode:ellipsizeMode=TRUNCATE_TYPE.auto,limit:limit=0,numberOfLines:numberOfLines=0,...otherProps}=(0,use_context_system.y)(props,"Truncate"),cx=(0,use_cx.I)(),truncatedContent=truncateContent("string"==typeof children?children:"",{ellipsis:ellipsis,ellipsizeMode:ellipsizeMode,limit:limit,numberOfLines:numberOfLines}),shouldTruncate=ellipsizeMode===TRUNCATE_TYPE.auto;return{...otherProps,className:(0,react.useMemo)((()=>cx(shouldTruncate&&!numberOfLines&&Truncate,shouldTruncate&&!!numberOfLines&&(0,emotion_react_browser_esm.iv)("-webkit-box-orient:vertical;-webkit-line-clamp:",numberOfLines,";display:-webkit-box;overflow:hidden;",""),className)),[className,cx,numberOfLines,shouldTruncate]),children:truncatedContent}}},"./packages/components/src/utils/config-values.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _space__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/utils/space.ts"),_colors_values__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/src/utils/colors-values.js");const CONTROL_PROPS={controlSurfaceColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,controlTextActiveColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.theme.accent,controlPaddingX:"12px",controlPaddingXLarge:"calc(12px * 1.3334)",controlPaddingXSmall:"calc(12px / 1.3334)",controlBackgroundColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,controlBorderRadius:"2px",controlBoxShadow:"transparent",controlBoxShadowFocus:`0 0 0 0.5px ${_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.theme.accent}`,controlDestructiveBorderColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.alert.red,controlHeight:"36px",controlHeightXSmall:"calc( 36px * 0.6 )",controlHeightSmall:"calc( 36px * 0.8 )",controlHeightLarge:"calc( 36px * 1.2 )",controlHeightXLarge:"calc( 36px * 1.4 )"},TOGGLE_GROUP_CONTROL_PROPS={toggleGroupControlBackgroundColor:CONTROL_PROPS.controlBackgroundColor,toggleGroupControlBorderColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.ui.border,toggleGroupControlBackdropBackgroundColor:CONTROL_PROPS.controlSurfaceColor,toggleGroupControlBackdropBorderColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.ui.border,toggleGroupControlButtonColorActive:CONTROL_PROPS.controlBackgroundColor};__webpack_exports__.Z=Object.assign({},CONTROL_PROPS,TOGGLE_GROUP_CONTROL_PROPS,{colorDivider:"rgba(0, 0, 0, 0.1)",colorScrollbarThumb:"rgba(0, 0, 0, 0.2)",colorScrollbarThumbHover:"rgba(0, 0, 0, 0.5)",colorScrollbarTrack:"rgba(0, 0, 0, 0.04)",elevationIntensity:1,radiusBlockUi:"2px",borderWidth:"1px",borderWidthFocus:"1.5px",borderWidthTab:"4px",spinnerSize:16,fontSize:"13px",fontSizeH1:"calc(2.44 * 13px)",fontSizeH2:"calc(1.95 * 13px)",fontSizeH3:"calc(1.56 * 13px)",fontSizeH4:"calc(1.25 * 13px)",fontSizeH5:"13px",fontSizeH6:"calc(0.8 * 13px)",fontSizeInputMobile:"16px",fontSizeMobile:"15px",fontSizeSmall:"calc(0.92 * 13px)",fontSizeXSmall:"calc(0.75 * 13px)",fontLineHeightBase:"1.2",fontWeight:"normal",fontWeightHeading:"600",gridBase:"4px",cardBorderRadius:"2px",cardPaddingXSmall:`${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(2)}`,cardPaddingSmall:`${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(4)}`,cardPaddingMedium:`${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(4)} ${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(6)}`,cardPaddingLarge:`${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(6)} ${(0,_space__WEBPACK_IMPORTED_MODULE_1__.D)(8)}`,popoverShadow:"0 0.7px 1px rgba(0, 0, 0, 0.1), 0 1.2px 1.7px -0.2px rgba(0, 0, 0, 0.1), 0 2.3px 3.3px -0.5px rgba(0, 0, 0, 0.1)",surfaceBackgroundColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,surfaceBackgroundSubtleColor:"#F3F3F3",surfaceBackgroundTintColor:"#F5F5F5",surfaceBorderColor:"rgba(0, 0, 0, 0.1)",surfaceBorderBoldColor:"rgba(0, 0, 0, 0.15)",surfaceBorderSubtleColor:"rgba(0, 0, 0, 0.05)",surfaceBackgroundTertiaryColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,surfaceColor:_colors_values__WEBPACK_IMPORTED_MODULE_0__.D.white,transitionDuration:"200ms",transitionDurationFast:"160ms",transitionDurationFaster:"120ms",transitionDurationFastest:"100ms",transitionTimingFunction:"cubic-bezier(0.08, 0.52, 0.52, 1)",transitionTimingFunctionControl:"cubic-bezier(0.12, 0.8, 0.32, 1)"})},"./packages/components/src/utils/font-size.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{gZ:function(){return getHeadingFontSize},yv:function(){return getFontSize}});var _config_values__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/src/utils/config-values.js");const BASE_FONT_SIZE=13,PRESET_FONT_SIZES={body:BASE_FONT_SIZE,caption:10,footnote:11,largeTitle:28,subheadline:12,title:20},HEADING_FONT_SIZES=[1,2,3,4,5,6].flatMap((n=>[n,n.toString()]));function getFontSize(size=BASE_FONT_SIZE){if(size in PRESET_FONT_SIZES)return getFontSize(PRESET_FONT_SIZES[size]);if("number"!=typeof size){const parsed=parseFloat(size);if(Number.isNaN(parsed))return size;size=parsed}return`calc(${`(${size} / ${BASE_FONT_SIZE})`} * ${_config_values__WEBPACK_IMPORTED_MODULE_0__.Z.fontSize})`}function getHeadingFontSize(size=3){if(!HEADING_FONT_SIZES.includes(size))return getFontSize(size);const headingSize=`fontSizeH${size}`;return _config_values__WEBPACK_IMPORTED_MODULE_0__.Z[headingSize]}},"./packages/components/src/utils/values.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function isValueDefined(value){return null!=value}function isValueEmpty(value){const isEmptyString=""===value;return!isValueDefined(value)||isEmptyString}function getDefinedValue(values=[],fallbackValue){var _values$find;return null!==(_values$find=values.find(isValueDefined))&&void 0!==_values$find?_values$find:fallbackValue}__webpack_require__.d(__webpack_exports__,{Jf:function(){return isValueDefined},Me:function(){return getDefinedValue},Wx:function(){return isValueEmpty},q9:function(){return ensureNumber}});const ensureNumber=value=>"string"==typeof value?(value=>parseFloat(value))(value):value}}]);