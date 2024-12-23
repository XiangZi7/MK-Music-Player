import{d as defineComponent,r as ref,o as onMounted,_ as _export_sfc,b as resolveComponent,j as openBlock,e as createElementBlock,g as createBaseVNode,A as createTextVNode,h as createVNode,w as withCtx,F as Fragment,k as renderList,l as createBlock,m as toDisplayString}from"./index-DRnlCkq-.js";import{u as useSpeechSynthesis$1}from"./index-B4t7rFRN.js";const _sfc_main$2=defineComponent({__name:"useSpeechSynthesis",setup(e,{expose:t}){t();const o=ref(void 0),a=ref("Hello, everyone! Good morning!"),l=ref(1),s=ref(1),n=useSpeechSynthesis$1(a,{voice:o,pitch:l,rate:s});let r;const c=ref([]);onMounted((()=>{n.isSupported.value&&setTimeout((()=>{r=window.speechSynthesis,c.value=r.getVoices(),o.value=c.value[0]}))}));const i={voice:o,text:a,pitch:l,rate:s,speech:n,get synth(){return r},set synth(e){r=e},voices:c,play:function(){"pause"===n.status.value?window.speechSynthesis.resume():n.speak()},pause:function(){window.speechSynthesis.pause()},stop:function(){n.stop()}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}),_hoisted_1$2={class:"p-2 bg-gray-50 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg"},_hoisted_2$2={class:"p-6"},_hoisted_3$1={key:0,class:"text-red-600"},_hoisted_4={key:1},_hoisted_5={class:"flex space-x-4"};function _sfc_render$2(e,t,o,a,l,s){const n=resolveComponent("el-input"),r=resolveComponent("el-form-item"),c=resolveComponent("el-option"),i=resolveComponent("el-select"),d=resolveComponent("el-slider"),u=resolveComponent("el-button"),p=resolveComponent("el-form");return openBlock(),createElementBlock("div",_hoisted_1$2,[t[7]||(t[7]=createBaseVNode("div",{class:"flex flex-col space-y-1.5 p-6"},[createBaseVNode("h3",{class:"whitespace-nowrap text-2xl font-semibold leading-none tracking-tight"}," 使用语音合成 ")],-1)),createBaseVNode("div",_hoisted_2$2,[a.speech.isSupported?(openBlock(),createElementBlock("div",_hoisted_4,[createVNode(p,null,{default:withCtx((()=>[createVNode(r,{label:"朗读文本"},{default:withCtx((()=>[createVNode(n,{modelValue:a.text,"onUpdate:modelValue":t[0]||(t[0]=e=>a.text=e),placeholder:"请输入要朗读的文本"},null,8,["modelValue"])])),_:1}),createVNode(r,{label:"语言"},{default:withCtx((()=>[createVNode(i,{modelValue:a.voice,"onUpdate:modelValue":t[1]||(t[1]=e=>a.voice=e),placeholder:"选择语言"},{default:withCtx((()=>[createVNode(c,{disabled:"",label:"选择语言",value:""}),(openBlock(!0),createElementBlock(Fragment,null,renderList(a.voices,((e,t)=>(openBlock(),createBlock(c,{key:t,label:`${e.name} (${e.lang})`,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),createVNode(r,{label:"音调"},{default:withCtx((()=>[createVNode(d,{modelValue:a.pitch,"onUpdate:modelValue":t[2]||(t[2]=e=>a.pitch=e),min:.5,max:2,step:.1},null,8,["modelValue"])])),_:1}),createVNode(r,{label:"朗读速度"},{default:withCtx((()=>[createVNode(d,{modelValue:a.rate,"onUpdate:modelValue":t[3]||(t[3]=e=>a.rate=e),min:.5,max:2,step:.1},null,8,["modelValue"])])),_:1}),createVNode(r,null,{default:withCtx((()=>[createBaseVNode("div",_hoisted_5,[createVNode(u,{type:"primary",disabled:a.speech.isPlaying.value,onClick:a.play},{default:withCtx((()=>[createTextVNode(toDisplayString("pause"===a.speech.status.value?"继续":"朗读"),1)])),_:1},8,["disabled"]),createVNode(u,{type:"warning",disabled:!a.speech.isPlaying.value,onClick:a.pause},{default:withCtx((()=>t[5]||(t[5]=[createTextVNode(" 暂停 ")]))),_:1},8,["disabled"]),createVNode(u,{type:"danger",disabled:!a.speech.isPlaying.value,onClick:a.stop},{default:withCtx((()=>t[6]||(t[6]=[createTextVNode(" 停止 ")]))),_:1},8,["disabled"])])])),_:1})])),_:1})])):(openBlock(),createElementBlock("div",_hoisted_3$1,t[4]||(t[4]=[createTextVNode(" 您的浏览器不支持 SpeechSynthesis API， "),createBaseVNode("a",{href:"https://caniuse.com/mdn-api_speechsynthesis",target:"_blank",class:"text-blue-500 underline"},"更多详情",-1)])))])])}const useSpeechSynthesis=_export_sfc(_sfc_main$2,[["render",_sfc_render$2],["__file","/home/runner/work/KMMusicPlayer/KMMusicPlayer/src/views/utils/components/useSpeechSynthesis.vue"]]),_sfc_main$1=defineComponent({__name:"useCalculator",setup(__props,{expose:__expose}){__expose();const input=ref(""),history=ref([]),buttons=["7","8","9","÷","4","5","6","×","1","2","3","-","0",".","=","+","(",")","sin","cos","tan","bin","dec"],handleButtonClick=e=>{"="===e?calculate():"bin"===e?convertBase("bin"):"dec"===e?convertBase("dec"):"sin"===e||"cos"===e||"tan"===e?handleTrigFunction(e):input.value+=e},calculate=()=>{try{input.value=eval(input.value.replace(/×/g,"*").replace(/÷/g,"/")),history.value.push(`${input.value}`)}catch(error){input.value="错误"}},clear=()=>{input.value=""},convertBase=e=>{if("bin"===e){const e=parseInt(input.value,10);input.value=e.toString(2)}else if("dec"===e){const e=parseInt(input.value,2);input.value=e.toString(10)}},handleTrigFunction=e=>{const t=parseFloat(input.value);"sin"===e?input.value=Math.sin(t).toString():"cos"===e?input.value=Math.cos(t).toString():"tan"===e&&(input.value=Math.tan(t).toString())},__returned__={input:input,history:history,buttons:buttons,handleButtonClick:handleButtonClick,calculate:calculate,clear:clear,convertBase:convertBase,handleTrigFunction:handleTrigFunction};return Object.defineProperty(__returned__,"__isScriptSetup",{enumerable:!1,value:!0}),__returned__}}),_hoisted_1$1={class:"p-2 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-300"},_hoisted_2$1={class:"grid grid-cols-4 gap-2"},_hoisted_3={class:"mt-4"};function _sfc_render$1(e,t,o,a,l,s){const n=resolveComponent("el-input"),r=resolveComponent("el-button"),c=resolveComponent("el-popover");return openBlock(),createElementBlock("div",_hoisted_1$1,[t[5]||(t[5]=createBaseVNode("h2",{class:"text-2xl font-bold mb-4"},"多功能计算器",-1)),createVNode(n,{modelValue:a.input,"onUpdate:modelValue":t[0]||(t[0]=e=>a.input=e),placeholder:"输入表达式",class:"mb-4"},null,8,["modelValue"]),createBaseVNode("div",_hoisted_2$1,[(openBlock(),createElementBlock(Fragment,null,renderList(a.buttons,(e=>createVNode(r,{key:e,onClick:t=>a.handleButtonClick(e)},{default:withCtx((()=>[createTextVNode(toDisplayString(e),1)])),_:2},1032,["onClick"]))),64))]),createBaseVNode("div",_hoisted_3,[createVNode(r,{type:"success",onClick:a.calculate,class:"w-full"},{default:withCtx((()=>t[1]||(t[1]=[createTextVNode("等于")]))),_:1}),createVNode(r,{type:"danger",onClick:a.clear,class:"w-full mt-2"},{default:withCtx((()=>t[2]||(t[2]=[createTextVNode("清除")]))),_:1}),createVNode(c,{trigger:"click",placement:"bottom"},{reference:withCtx((()=>[createVNode(r,{class:"w-full mt-2",type:"primary"},{default:withCtx((()=>t[3]||(t[3]=[createTextVNode("查看计算历史")]))),_:1})])),default:withCtx((()=>[t[4]||(t[4]=createBaseVNode("h3",{class:"text-lg font-bold"},"计算历史",-1)),createBaseVNode("ul",null,[(openBlock(!0),createElementBlock(Fragment,null,renderList(a.history,((e,t)=>(openBlock(),createElementBlock("li",{key:t},toDisplayString(e),1)))),128))])])),_:1})])])}const useCalculator=_export_sfc(_sfc_main$1,[["render",_sfc_render$1],["__scopeId","data-v-1397e610"],["__file","/home/runner/work/KMMusicPlayer/KMMusicPlayer/src/views/utils/components/useCalculator.vue"]]),_sfc_main=defineComponent({__name:"index",setup(e,{expose:t}){t();const o={useSpeechSynthesis:useSpeechSynthesis,useCalculator:useCalculator};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),_hoisted_1={class:"container mx-auto p-4"},_hoisted_2={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"};function _sfc_render(e,t,o,a,l,s){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("div",_hoisted_2,[createVNode(a.useSpeechSynthesis),createVNode(a.useCalculator)])])}const index=_export_sfc(_sfc_main,[["render",_sfc_render],["__file","/home/runner/work/KMMusicPlayer/KMMusicPlayer/src/views/utils/index.vue"]]);export{index as default};
