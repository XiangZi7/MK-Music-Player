import"./vue-OG_h3pua.js";import{o as i,c as m,a as e,d as b,$ as y,af as w,r as I,w as M,u as c,Y as o,U as S,a6 as C,e as u,a8 as B}from"./@vue-Ply1w2vD.js";import{c as E}from"./element-plus-kQyFuzXp.js";import{l as p,n as N,o as V,_ as $}from"./index-DR6dxGgG.js";import{b as P}from"./vue-router-w9G4URzI.js";import{u as U}from"./useIntersectionObserver-P1fADLvi.js";import"./@element-plus-myGFqmAE.js";import"./@vueuse-O23BbR0F.js";import"./lodash-es-DA4vajO2.js";import"./@ctrl--dareiTT.js";import"./@popperjs-NiN61gaS.js";import"./memoize-one-JaOscZgY.js";import"./pinia-MSClEXYU.js";import"./axios-52F-EHG1.js";import"./nprogress-8aEWLQce.js";import"./@babel-3yCADe9Y.js";import"./pinia-plugin-persistedstate-XbYvz584.js";const j={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},A=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M22 12c0 5.523-4.477 10-10 10c-1.6 0-3.112-.376-4.452-1.044a1.634 1.634 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.633 1.633 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10m-14.5-.892c0 1.369 1.319 2.805 2.529 3.834c.823.7 1.235 1.051 1.971 1.051s1.148-.35 1.971-1.051c1.21-1.03 2.529-2.465 2.529-3.834c0-2.677-2.475-3.676-4.5-1.608c-2.025-2.068-4.5-1.069-4.5 1.608","clip-rule":"evenodd"},null,-1),D=[A];function K(h,r){return i(),m("svg",j,[...D])}const L={name:"solar-chat-round-like-bold",render:K},R={class:"mv-container"},z=["src"],F={class:"mv-info"},O={class:"mv-comments"},T={class:"comments-list mt-2"},Y={class:"user-avatar"},q={class:"comment-content ml-2"},G={class:"user-info"},H={class:"user-name"},J={class:"comment-date"},Q={class:"user-comment"},W={class:"text-xs flex justify-between"},X={class:"flex items-center gap-1 mt-2"},Z=b({__name:"[id]",setup(h){const r=P(),n=y({mvSrc:"",mvInfo:{},comments:[]}),{comments:v,mvSrc:f,mvInfo:l}=w(n),_=I([]);U(_,{initialPageNum:1,pageSize:10,threshold:.1},x);function x(a){p({offset:a,id:r.params.id}).then(({comments:s})=>{n.comments=n.comments.concat(s)})}return M(()=>r.params.id,()=>{const a=r.params.id;N(a).then(({data:s})=>{n.mvSrc=s.url}),V(a).then(({data:s})=>{n.mvInfo=s}),p({id:a}).then(({comments:s})=>{n.comments=s})},{immediate:!0}),(a,s)=>{var d;const k=E,g=L;return i(),m("div",R,[e("video",{class:"mv-player rounded",src:c(f),controls:""},null,8,z),e("div",F,[e("h1",null,o(c(l).name),1),e("h2",null,o((d=c(l).artists)==null?void 0:d.map(t=>t.name).join(" / ")),1)]),e("div",O,[e("h3",null,"用户评论("+o(c(l).commentCount)+")",1),e("ul",T,[(i(!0),m(S,null,C(c(v),t=>(i(),m("li",{key:t.id,ref_for:!0,ref_key:"observedElement",ref:_,class:"comment"},[e("div",Y,[u(k,{src:t.user.avatarUrl,alt:t.user.nickname},null,8,["src","alt"])]),e("div",q,[e("div",G,[e("span",H,o(t.user.nickname),1),e("span",J,o(t.timeStr),1)]),e("p",Q,o(t.content),1),e("div",W,[e("span",X,[u(g,{class:"text-red-500 text-[14px]"}),B(" "+o(t.likedCount),1)]),e("span",null,o(t.ipLocation.location),1)])])]))),128))])])])}}}),fe=$(Z,[["__scopeId","data-v-99f4d33a"],["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/pages/video/[id].vue"]]);export{fe as default};