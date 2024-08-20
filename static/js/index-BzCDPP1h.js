import{e,f as t,g as a,d as r,a3 as l,a4 as n,a as o,t as s,o as i,a5 as c,_ as d,b as m,h as u,w as h,F as g,k as T,E as q,m as p,v as b,p as v,n as f}from"./index-BgYOp9xZ.js";const y={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},x=[a("path",{fill:"currentColor",d:"M11 3V2q0-.425.288-.712T12 1t.713.288T13 2v1q0 .425-.288.713T12 4t-.712-.288T11 3m0 19v-1q0-.425.288-.712T12 20t.713.288T13 21v1q0 .425-.288.713T12 23t-.712-.288T11 22m11-9h-1q-.425 0-.712-.288T20 12t.288-.712T21 11h1q.425 0 .713.288T23 12t-.288.713T22 13M3 13H2q-.425 0-.712-.288T1 12t.288-.712T2 11h1q.425 0 .713.288T4 12t-.288.713T3 13m16.75-7.325l-.35.35q-.275.275-.687.275T18 6q-.275-.275-.288-.687t.263-.713l.375-.375q.275-.3.7-.3t.725.3t.288.725t-.313.725M6.025 19.4l-.375.375q-.275.3-.7.3t-.725-.3t-.288-.725t.313-.725l.35-.35q.275-.275.688-.275T6 18q.275.275.288.688t-.263.712m12.3.35l-.35-.35q-.275-.275-.275-.687T18 18q.275-.275.688-.287t.712.262l.375.375q.3.275.3.7t-.3.725t-.725.288t-.725-.313M4.6 6.025l-.375-.375q-.3-.275-.3-.7t.3-.725t.725-.288t.725.313l.35.35q.275.275.275.688T6 6q-.275.275-.687.288T4.6 6.025M12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18m0-2q1.675 0 2.838-1.162T16 12t-1.162-2.838T12 8T9.162 9.163T8 12t1.163 2.838T12 16m0-4"},null,-1)];const k={name:"material-symbols-wb-sunny-outline-rounded",render:function(a,r){return e(),t("svg",y,[...x])}},w={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},M=[a("path",{fill:"currentColor",d:"M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362t.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"},null,-1)];const S={name:"material-symbols-dark-mode-outline-rounded",render:function(a,r){return e(),t("svg",w,[...M])}},C=r({__name:"index",setup(e,{expose:t}){t();const a=l(),{switchDark:r,changePrimary:d}=n(),m=o({colorList:[]}),{colorList:u}=s(m);function h(e){const t=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/);if(!t)throw new Error("Invalid RGBA string");return`#${((1<<24)+(parseInt(t[1],10)<<16)+(parseInt(t[2],10)<<8)+parseInt(t[3],10)).toString(16).slice(1)}`}i((()=>{c({method:"get",url:"https://mock.mengxuegu.com/mock/634f6425369a770d74bbf7b9/example/colorsList"}).then((({data:e})=>{m.colorList=e}))}));const g={themeStore:a,switchDark:r,changePrimary:d,state:m,colorList:u,changePrimarys:e=>{const t=h(e);d(t)},changeColor:function(e){a.setPrimary(e),d(e)},reset:()=>{a.setPrimary("#000000"),d("#000000")},rgbaToHex:h,get MaterialSymbolsWbSunnyOutlineRounded(){return k},get MaterialSymbolsDarkModeOutlineRounded(){return S}};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}),_=e=>(v("data-v-d4923dd8"),e=e(),f(),e),P={class:"w-full"},D={class:"p-4"},V=_((()=>a("h2",{class:"text-lg font-semibold mb-2 dark:text-white"},"黑暗模式",-1))),L={class:"p-4"},I=_((()=>a("h2",{class:"text-lg font-semibold mb-2 dark:text-white"},"主题",-1))),O={class:"grid grid-cols-auto-fill gap-4"},R=["onClick"],j={class:"text-sm line-clamp-1 text-gray-600 dark:text-gray-300"},B={class:"p-4"},E=_((()=>a("h2",{class:"text-lg font-semibold mb-2 dark:text-white"},"自定义",-1))),H={class:"flex items-center space-x-2"};const K=d(C,[["render",function(r,l,n,o,s,i){const c=m("el-switch"),d=m("el-scrollbar"),v=m("el-color-picker"),f=m("el-button");return e(),t("div",P,[a("div",D,[V,u(c,{modelValue:o.themeStore.isDark,"onUpdate:modelValue":l[0]||(l[0]=e=>o.themeStore.isDark=e),"active-action-icon":o.MaterialSymbolsWbSunnyOutlineRounded,"inactive-action-icon":o.MaterialSymbolsDarkModeOutlineRounded,onChange:o.switchDark},null,8,["modelValue","active-action-icon","inactive-action-icon","onChange"])]),a("div",L,[I,u(d,{height:"400px",class:"rounded-lg dark:bg-gray-800"},{default:h((()=>[a("div",O,[(e(!0),t(g,null,T(o.colorList,(r=>(e(),t("a",{href:"javascript:;",key:r.name,onClick:e=>o.changeColor(r.hex),class:"bg-lightblue text-center rounded-md transition-transform duration-200 ease-in-out hover:scale-105"},[a("div",{class:"w-full h-32 rounded-lg",style:q({backgroundColor:r.hex})},null,4),a("span",j,p(r.name)+" ("+p(r.pinyin)+") ",1)],8,R)))),128))])])),_:1})]),a("div",B,[E,a("div",H,[u(v,{modelValue:o.themeStore.primary,"onUpdate:modelValue":l[1]||(l[1]=e=>o.themeStore.primary=e),"show-alpha":"",onChange:o.changePrimarys},null,8,["modelValue"]),u(f,{color:"#000",onClick:o.reset},{default:h((()=>[b("重置默认")])),_:1})])])])}],["__scopeId","data-v-d4923dd8"],["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/views/theme/index.vue"]]);export{K as default};
