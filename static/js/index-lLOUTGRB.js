import{n as A,o as P,p as K,q as S}from"./element-plus-xJXzS9R-.js";import{_ as U}from"./songSheet-hdaeK_s7.js";import"./vue-BZWOMMSN.js";import{d as b,ap as T,o as i,c as _,U as $,a6 as x,a as n,Y as h,$ as B,af as E,w as I,b as g,V as r,u as a,G as V,e as p,T as k}from"./@vue-F4a5j40Z.js";import{_ as w,c as L}from"./index-8nxaCWdS.js";import{b as q}from"./vue-router-IRVoSInp.js";import"./@element-plus-1E4uKyJ7.js";import"./@vueuse-C0SftM8Q.js";import"./lodash-es-S-9mw2Ow.js";import"./@ctrl--dareiTT.js";import"./@popperjs-NiN61gaS.js";import"./pinia-3ZJqzBWs.js";import"./axios-52F-EHG1.js";import"./nprogress-8aEWLQce.js";import"./@babel-3yCADe9Y.js";import"./pinia-plugin-persistedstate-XbYvz584.js";const R={class:"playlist mt-2"},D={class:"cover"},F=["src"],G={class:"title"},H={class:"artist"},Q=b({__name:"ASongList",props:{modelValue:{type:Array},modelModifiers:{}},emits:["update:modelValue"],setup(d){const e=T(d,"modelValue");return(l,c)=>(i(),_("div",R,[(i(!0),_($,null,x(e.value,o=>(i(),_("div",{key:o.id,class:"song"},[n("div",D,[n("img",{src:o.coverImgUrl+"?param=500y500",alt:"Song 1 Title"},null,8,F)]),n("div",G,h(o.name),1),n("div",H,h(o.creator.nickname),1)]))),128))]))}}),Y=w(Q,[["__scopeId","data-v-a296107f"],["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/pages/search/components/ASongList.vue"]]),j={class:"mvlist mt-2"},z={class:"cover"},J=["src"],O={class:"title"},W={class:"artist"},X=b({__name:"AMV",props:{modelValue:{type:Array},modelModifiers:{}},emits:["update:modelValue"],setup(d){const e=T(d,"modelValue");return(l,c)=>(i(),_("div",j,[(i(!0),_($,null,x(e.value,o=>(i(),_("div",{key:o.id,class:"mv"},[n("div",z,[n("img",{src:o.cover+"?param=500y250",alt:"mv 1 Title"},null,8,J)]),n("div",O,h(o.name),1),n("div",W,h(o.artistName),1)]))),128))]))}}),Z=w(X,[["__scopeId","data-v-7428fe7b"],["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/pages/search/components/AMV.vue"]]),ee=(d,e)=>{A({type:d==200?"success":"error",message:e,title:oe()})};function oe(){const e=new Date().getHours();if(e>=6&&e<=10)return"早上好 ⛅";if(e>=10&&e<=14)return"中午好 🌞";if(e>=14&&e<=18)return"下午好 🌞";if(e>=18&&e<=24)return"晚上好 🌛";if(e>=0&&e<=6)return"凌晨好 🌛"}const te=n("label",null,"歌曲",-1),se=n("label",null,"歌单",-1),ae=n("label",null,"MV",-1),ne=b({__name:"index",setup(d){const e=q(),l=B({activeName:"1",list:[],songTotal:{songCount:0,playlistCount:0,mvCount:0}}),{songTotal:c,list:o,activeName:m}=E(l);function C(v,s){L({kw:e.query.kw,type:v,offset:s}).then(({result:t,code:y,message:f})=>{if(y!=200&&ee(y,f),t){const M=t.songs||t.playlists||t.mvs||[];l.list=l.list.concat(M),t.songCount!==void 0&&(l.songTotal.songCount=t.songCount),t.playlistCount!==void 0&&(l.songTotal.playlistCount=t.playlistCount),t.mvCount!==void 0&&(l.songTotal.mvCount=t.mvCount)}else console.error("result is undefined. Cannot proceed.")}).catch(t=>{console.error("An error occurred:",t)})}function N(v){l.list=[];const{props:s}=v;C(s.name)}return I(()=>e.query.kw,()=>{C(l.activeName)},{immediate:!0}),(v,s)=>{const t=K,y=U,f=S,M=P;return i(),g(M,{modelValue:a(m),"onUpdate:modelValue":s[4]||(s[4]=u=>V(m)?m.value=u:null),onTabClick:N},{default:r(()=>[p(f,{name:"1"},{label:r(()=>[p(t,{hidden:a(c).songCount==0,value:a(c).songCount,max:99,type:"primary"},{default:r(()=>[te]),_:1},8,["hidden","value"])]),default:r(()=>[a(m)=="1"?(i(),g(y,{key:0,modelValue:a(o),"onUpdate:modelValue":s[0]||(s[0]=u=>V(o)?o.value=u:null),onQuery:s[1]||(s[1]=u=>C(v.$event,u))},null,8,["modelValue"])):k("",!0)]),_:1}),p(f,{name:"1000"},{label:r(()=>[p(t,{hidden:a(c).playlistCount==0,value:a(c).playlistCount,max:99,type:"primary"},{default:r(()=>[se]),_:1},8,["hidden","value"])]),default:r(()=>[a(m)=="1000"?(i(),g(Y,{key:0,modelValue:a(o),"onUpdate:modelValue":s[2]||(s[2]=u=>V(o)?o.value=u:null)},null,8,["modelValue"])):k("",!0)]),_:1}),p(f,{name:"1004"},{label:r(()=>[p(t,{hidden:a(c).mvCount==0,value:a(c).mvCount,max:99,type:"primary"},{default:r(()=>[ae]),_:1},8,["hidden","value"])]),default:r(()=>[a(m)=="1004"?(i(),g(Z,{key:0,modelValue:a(o),"onUpdate:modelValue":s[3]||(s[3]=u=>V(o)?o.value=u:null)},null,8,["modelValue"])):k("",!0)]),_:1})]),_:1},8,["modelValue"])}}}),Me=w(ne,[["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/pages/search/index.vue"]]);export{Me as default};
