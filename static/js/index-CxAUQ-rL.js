import{e,f as a,h as l,d as t,u as i,r as s,n,_ as r,b as o,i as d,w as c,p as u,F as p,k as m,l as v,m as y}from"./index-DANx4g5m.js";const x={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};const h={name:"ic-round-search",render:function(t,i){return e(),a("svg",x,i[0]||(i[0]=[l("path",{fill:"currentColor",d:"M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"},null,-1)]))}},f={class:"h-full bg-gray-50 text-gray-800 p-8","data-id":"1"},b={class:"max-w-4xl mx-auto","data-id":"2"},g={class:"flex items-center mb-8","data-id":"6"},w={class:"flex items-center gap-1"},k={class:"grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6"},S=["onClick"],_={class:"text-lg text-center cursor-pointer font-semibold mb-2","data-id":"14"};const M=r(t({__name:"index",setup(e,{expose:a}){a();const l=i(),t=s(""),r=s("nnyy"),o=s([]),d=s([{label:"nnyy",value:"nnyy"},{label:"xfani",value:"xfani"}]);const c={router:l,kw:t,type:r,aniList:o,options:d,toSearch:function(){o.value=[],n({kw:t.value,type:r.value}).then((e=>{o.value=e.data}))}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),[["render",function(t,i,s,n,r,x){const M=o("el-option"),V=o("el-select"),C=o("el-input"),z=h,j=o("el-button"),K=o("el-image");return e(),a("div",f,[l("div",b,[i[3]||(i[3]=l("header",{class:"text-center mb-12","data-id":"3"},[l("h1",{class:"text-3xl font-semibold mb-2","data-id":"4"}," Anime Movie Search "),l("p",{class:"text-gray-600","data-id":"5"},"Find your favorite anime movies")],-1)),l("div",g,[d(C,{placeholder:"Search for anime movies...",type:"text",size:"large",modelValue:n.kw,"onUpdate:modelValue":i[1]||(i[1]=e=>n.kw=e),onKeyup:u(n.toSearch,["enter","native"])},{append:c((()=>[d(V,{modelValue:n.type,"onUpdate:modelValue":i[0]||(i[0]=e=>n.type=e),placeholder:"请选择接口",size:"large",style:{width:"200px"}},{default:c((()=>[(e(!0),a(p,null,m(n.options,(a=>(e(),v(M,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),d(j,{type:"primary",size:"large",onClick:n.toSearch},{default:c((()=>[l("div",w,[d(z),i[2]||(i[2]=l("span",{class:"text-base"},"search",-1))])])),_:1})]),l("div",k,[(e(!0),a(p,null,m(n.aniList,(t=>(e(),a("div",{class:"overflow-hidden",key:t.id,onClick:e=>n.router.push(`/animation/play?id=${t.id}&type=${n.type}`)},[d(K,{alt:t.title,class:"w-full h-56 object-cover rounded-xl cursor-pointer",src:t.img},null,8,["alt","src"]),l("h3",_,y(t.title),1)],8,S)))),128))])])])}],["__file","/home/runner/work/KMMusicPlayer/KMMusicPlayer/src/views/discover/animation/index.vue"]]);export{M as default};
