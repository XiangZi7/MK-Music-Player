import{d as e,a0 as s,_ as t,b as a,e as l,f as n,g as d,m as i,h as m}from"./index-BgYOp9xZ.js";const o=e({__name:"index",setup(e,{expose:t}){t();const{eqSettings:a,updateEQ:l}=s("MusicPlayer"),n={eqSettings:a,updateEQ:l};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),u={class:"m-4 rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md"},c=d("div",{class:"flex flex-col space-y-1.5 p-6"},[d("h3",{class:"whitespace-nowrap tracking-tight text-xl font-bold text-center"}," 三段式均衡器(跨域问题，暂时搁浅该功能) ")],-1),r={class:"p-6"},b={class:"mb-6"},p={class:"flex justify-between items-center mb-2"},x=d("label",{class:"text-lg font-medium"},"低音",-1),f={class:"text-sm font-medium"},g={class:"mb-6"},w={class:"flex justify-between items-center mb-2"},S=d("label",{class:"text-lg font-medium"},"中音",-1),q={class:"text-sm font-medium"},v={class:"mb-6"},h={class:"flex justify-between items-center mb-2"},V=d("label",{class:"text-lg font-medium"},"高音",-1),y={class:"text-sm font-medium"};const _=t(o,[["render",function(e,s,t,o,_,j){const E=a("el-slider");return l(),n("div",u,[c,d("div",r,[d("div",b,[d("div",p,[x,d("span",f,i(o.eqSettings.bass)+"dB",1)]),m(E,{modelValue:o.eqSettings.bass,"onUpdate:modelValue":s[0]||(s[0]=e=>o.eqSettings.bass=e),min:-10,max:10,step:1,onChange:s[1]||(s[1]=e=>o.updateEQ("bass",e)),class:"w-3/4"},null,8,["modelValue"])]),d("div",g,[d("div",w,[S,d("span",q,i(o.eqSettings.mid)+"dB",1)]),m(E,{modelValue:o.eqSettings.mid,"onUpdate:modelValue":s[2]||(s[2]=e=>o.eqSettings.mid=e),min:-10,max:10,step:1,onChange:s[3]||(s[3]=e=>o.updateEQ("mid",e)),class:"w-3/4"},null,8,["modelValue"])]),d("div",v,[d("div",h,[V,d("span",y,i(o.eqSettings.treble)+"dB",1)]),m(E,{modelValue:o.eqSettings.treble,"onUpdate:modelValue":s[4]||(s[4]=e=>o.eqSettings.treble=e),min:-10,max:10,step:1,onChange:s[5]||(s[5]=e=>o.updateEQ("treble",e)),class:"w-3/4"},null,8,["modelValue"])])])])}],["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/views/eq/index.vue"]]);export{_ as default};
