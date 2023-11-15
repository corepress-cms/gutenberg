!function(){"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=function(result,chunkIds,fn,priority){if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((function(key){return __webpack_require__.O[key](chunkIds[j])}))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?function(obj){return Object.getPrototypeOf(obj)}:function(obj){return obj.__proto__},__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((function(key){def[key]=function(){return value[key]}}));return def.default=function(){return value},__webpack_require__.d(ns,def),ns},__webpack_require__.d=function(exports,definition){for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=function(chunkId){return Promise.all(Object.keys(__webpack_require__.f).reduce((function(promises,key){return __webpack_require__.f[key](chunkId,promises),promises}),[]))},__webpack_require__.u=function(chunkId){return({81:"components-inserter-stories-index-story",139:"guide-stories-index-story",204:"heading-stories-index-story",243:"scroll-lock-stories-index-story",309:"toggle-group-control-stories-index-story",408:"popover-stories-index-story",698:"navigation-stories-index-story",772:"date-time-stories-time-story",869:"components-dimensions-tool-stories-scale-tool-story",951:"components-block-mover-stories-index-story",970:"angle-picker-control-stories-index-story",983:"components-dimensions-tool-stories-index-story",1057:"visually-hidden-stories-index-story",1101:"palette-edit-stories-index-story",1638:"placeholder-stories-index-story",1656:"components-block-draggable-stories-index-story",1791:"search-control-stories-index-story",1802:"form-toggle-stories-index-story",1821:"sandbox-stories-index-story",1960:"base-control-stories-index-story",1998:"gradient-picker-stories-index-story",2057:"docs-introduction-mdx",2211:"dropdown-menu-stories-index-story",2419:"text-highlight-stories-index-story",2792:"dropdown-menu-v2-ariakit-stories-index-story",2900:"tooltip-stories-index-story",3218:"components-url-popover-stories-index-story",3267:"item-group-stories-index-story",3417:"icon-stories-index-story",3421:"combobox-control-stories-index-story",3517:"dropdown-menu-v2-stories-index-story",3614:"navigator-stories-index-story",3732:"date-time-stories-date-story",3754:"truncate-stories-index-story",3772:"view-stories-index-story",3788:"radio-group-stories-index-story",3813:"components-text-decoration-control-stories-index-story",3933:"tab-panel-stories-index-story",3953:"border-box-control-stories-index-story",4317:"alignment-matrix-control-stories-index-story",4325:"number-control-stories-index-story",4355:"text-control-stories-index-story",4520:"docs-components-contributing-mdx",4593:"resizable-box-stories-index-story",4595:"components-global-styles-stories-index-story",4662:"draggable-stories-index-story",4706:"select-control-stories-index-story",4770:"components-dimensions-tool-stories-width-height-tool-story",4831:"navigable-container-stories-navigable-menu-story",4836:"drop-zone-stories-index-story",4895:"unit-control-stories-index-story",4972:"components-dimensions-tool-stories-aspect-ratio-tool-story",5008:"button-stories-index-story",5100:"toggle-control-stories-index-story",5106:"menu-items-choice-stories-index-story",5151:"scrollable-stories-index-story",5175:"custom-gradient-picker-stories-index-story",5194:"components-text-transform-control-stories-index-story",5309:"font-size-picker-stories-index-story",5367:"h-stack-stories-index-story",5619:"menu-group-stories-index-story",5735:"dropdown-stories-index-story",5739:"menu-item-stories-index-story",5745:"tip-stories-index-story",5825:"components-resolution-tool-stories-index-story",5891:"animate-stories-index-story",6180:"box-control-stories-index-story",6246:"spinner-stories-index-story",6265:"components-height-control-stories-index-story",6510:"query-controls-stories-index-story",6605:"card-stories-index-story",6610:"icon-stories-index-story-tsx",6758:"form-file-upload-stories-index-story",6764:"modal-stories-index-story",6869:"flex-stories-index-story",6883:"surface-stories-index-story",6932:"form-token-field-stories-index-story",6939:"border-control-stories-index-story",7131:"spacer-stories-index-story",7137:"elevation-stories-index-story",7152:"input-control-stories-index-story",7196:"duotone-picker-stories-duotone-picker-story",7211:"tabs-stories-index-story",7306:"color-indicator-stories-index-story",7351:"radio-control-stories-index-story",7552:"dimension-control-stories-index-story",7577:"color-palette-stories-index-story",7637:"tree-select-stories-index-story",7707:"button-group-stories-index-story",7716:"textarea-control-stories-index-story",7752:"snackbar-stories-index-story",7844:"color-picker-stories-index-story",7875:"tree-grid-stories-index-story",8035:"range-control-stories-index-story",8067:"shortcut-stories-index-story",8108:"v-stack-stories-index-story",8147:"duotone-picker-stories-duotone-swatch-story",8297:"checkbox-control-stories-index-story",8518:"tools-panel-stories-index-story",8628:"snackbar-stories-list-story",8633:"date-time-stories-date-time-story",8673:"confirm-dialog-stories-index-story",8748:"components-line-height-control-stories-index-story",8751:"focal-point-picker-stories-index-story",8768:"external-link-stories-index-story",8772:"playground-index-story",8773:"custom-select-control-stories-index-story",8821:"icon-stories-index-story-js",8917:"slot-fill-stories-index-story",8930:"circular-option-picker-stories-index-story",8953:"keyboard-shortcuts-stories-index-story",8958:"toolbar-stories-index-story",8971:"z-stack-stories-index-story",9003:"disabled-stories-index-story",9170:"progress-bar-stories-index-story",9189:"notice-stories-index-story",9379:"divider-stories-index-story",9475:"text-stories-index-story",9501:"docs-components-readme-mdx",9696:"navigable-container-stories-tabbable-container-story",9812:"grid-stories-index-story",9828:"theme-stories-index-story",9901:"responsive-wrapper-stories-index-story",9943:"panel-stories-index-story"}[chunkId]||chunkId)+"."+{81:"c5c7de9e",139:"4761df07",204:"b04e8bc5",238:"43fc269d",243:"41d50e4e",257:"71a13471",272:"c2f2332a",309:"f55148dc",331:"be000c0b",347:"89b9a8c3",404:"0f368636",408:"6482e1a9",453:"dc9d410e",652:"a2b28818",698:"f77615b1",723:"0f5ace8c",772:"5162a40a",827:"f34bc267",869:"421f5bb7",951:"8c90ae2d",970:"39d3000c",983:"2c057a9c",1057:"1b98951e",1086:"cf10579c",1101:"6de1602d",1124:"6f086654",1159:"de6feafe",1223:"c429b0e7",1230:"98c1abc4",1505:"10baae16",1572:"67ac5f91",1613:"ba854f4a",1638:"b5c0506b",1642:"5c014d03",1656:"efe878ef",1730:"2144d391",1745:"33567f72",1785:"9a944cea",1786:"90455046",1791:"6e65f378",1802:"e13ff0d2",1817:"99b4c76c",1821:"c7299901",1960:"3f68c24a",1998:"97ddda26",2033:"8f380c67",2057:"1cb445a4",2127:"48455f2b",2211:"a60f1422",2218:"a9e9e56c",2237:"b73eb0ca",2324:"b2a592bd",2394:"205cc617",2415:"4fe33c72",2419:"2579511f",2470:"e4bf35eb",2473:"de861da1",2493:"92c97c56",2689:"560e2c83",2731:"99ad6d86",2732:"f43aa42b",2792:"42ec0459",2900:"0b19962b",2915:"3b63b32e",3043:"a13daed5",3064:"25dca1d9",3196:"80b36d6f",3218:"4130603a",3264:"a318a2c8",3267:"aa0a62b2",3417:"470af28e",3421:"eadfaaa1",3423:"84dbccd7",3517:"9c63c235",3614:"3276f245",3622:"33d25c59",3678:"74182765",3712:"cf964931",3732:"d899eb15",3754:"b80a933f",3772:"34bb30ea",3788:"c5596672",3813:"87734522",3861:"f170709c",3933:"beddcc24",3953:"4a1196d6",4076:"8a2ba76b",4095:"e88e97f9",4166:"2bce4b03",4247:"52e9d791",4285:"ae2c098c",4308:"88786cfb",4317:"b24a4a29",4325:"fcbbdf5b",4355:"6454ccd6",4520:"c1aa5676",4532:"347b4a2f",4535:"735e18da",4593:"a18964eb",4595:"7b789133",4646:"4a9c044c",4662:"56dde9e3",4706:"2fcc87a4",4743:"24912f79",4760:"c8d7ea5f",4770:"39beed58",4831:"b90a3525",4836:"3a8736cd",4837:"f2e7ecf3",4875:"6d6c124e",4895:"ac0de6d4",4924:"730b7480",4928:"d916315c",4940:"607c5e7f",4963:"ee045b71",4972:"f05bd5fc",5008:"8f0a1f84",5100:"f89a6aa6",5106:"8ca9d77b",5150:"904fd9f5",5151:"08819869",5175:"05a5a47b",5194:"c226ddf8",5248:"0838ff11",5253:"07f7805c",5309:"3aafe694",5353:"10340623",5367:"736e96b3",5434:"7f69cfe1",5473:"08d18336",5496:"42eb764b",5609:"acd9990a",5619:"5aea0cd4",5649:"8e7c7a51",5699:"9b10ac33",5723:"6142d407",5735:"f4f769a1",5739:"eca27c40",5745:"9a054687",5800:"9e4c3870",5825:"de5665a0",5891:"c4314d0b",6034:"eb4ce0a2",6118:"4fb16113",6180:"59d9ee19",6246:"0c87846b",6260:"d8f2e490",6265:"307ad435",6414:"83eae2cc",6418:"a5300c5b",6447:"6ddfdffa",6476:"120a02ca",6493:"70be7d94",6510:"535daa2b",6605:"f48b82ef",6610:"fb72fb90",6615:"20d2f4d0",6758:"1e35e097",6759:"da11b8ba",6764:"b43c42b8",6809:"0fb5ea1b",6869:"423b550c",6883:"93423b7a",6911:"53f25656",6931:"6088661d",6932:"8d0215dc",6939:"745c6f7d",6966:"b0b9c294",6983:"e07259ba",7131:"46720848",7137:"94717680",7143:"8e160c31",7152:"7b2cba0f",7196:"6a3f629c",7211:"634220b6",7275:"daf47ab5",7306:"c9a99653",7328:"989e45bc",7351:"678eae4e",7355:"36597437",7435:"8e4ea61a",7482:"6707c44f",7513:"d29c23cb",7552:"e8f70ec5",7577:"43de8467",7637:"6d9c3e27",7689:"83c117ac",7707:"9ebd0e88",7716:"b6ef4254",7752:"cb7f2e07",7782:"c7ced795",7844:"2bfa036f",7875:"d9569b97",7886:"dfdf6ab0",8035:"64162157",8067:"0d043a28",8108:"84a2fbbb",8147:"ddfef8ba",8297:"83f98272",8303:"dab3c516",8322:"b2bd9bed",8518:"ce0d02c9",8628:"01b3ff5f",8633:"f232148e",8673:"b642690d",8692:"22b81534",8693:"6347ae70",8738:"95ec0595",8748:"19c87238",8751:"5f135aa2",8768:"494a85ca",8772:"99c210f1",8773:"39b1e15a",8775:"440bab84",8777:"9a98c4af",8821:"1af9f785",8842:"42000f3d",8895:"ec59b86f",8917:"d5569e05",8930:"a4698b59",8938:"6a433bdc",8953:"6cbf093d",8958:"69ebef47",8971:"737b3cc8",8997:"58cff47f",9003:"f4fa6f11",9032:"875b941c",9044:"296e36a7",9115:"81967b0c",9119:"3217407f",9170:"cd5384f8",9189:"c57b8a90",9213:"4d28a19d",9226:"718f58f9",9379:"92c33cbf",9406:"2d39a86a",9433:"307677a8",9475:"6c8d4e17",9501:"9f789ab7",9696:"26ad7993",9744:"4ce3100c",9812:"2bec24ed",9828:"feabb696",9901:"519b932c",9903:"de58ce42",9943:"209c9877",9982:"4269f711",9989:"86a40855"}[chunkId]+".iframe.bundle.js"},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=function(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)},inProgress={},__webpack_require__.l=function(url,done,key,chunkId){if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="gutenberg:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","gutenberg:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=function(prev,event){script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((function(fn){return fn(event)})),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=function(module){return module.paths=[],module.children||(module.children=[]),module},__webpack_require__.p="",function(){__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=function(chunkId,promises){var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(function(event){if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=function(chunkId){return 0===installedChunks[chunkId]};var webpackJsonpCallback=function(parentChunkLoadingFunction,data){var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((function(id){return 0!==installedChunks[id]}))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkgutenberg=self.webpackChunkgutenberg||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))}(),__webpack_require__.nc=void 0}();