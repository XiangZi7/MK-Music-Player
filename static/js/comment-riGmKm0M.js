import{d as b,L as g,T as k,bk as w,A as E,g as l,c as a,a as e,F as p,j as x,k as t,n as V,bD as f,o as n,f as r,h as v,Y as C,bp as D,_ as L}from"./index-MyWbvwGn.js";const M={key:0,class:"p-3"},j=e("h3",{class:"py-2"},"热门评论",-1),I={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},N={class:"header flex items-center gap-3"},P={class:"user-info"},S={class:"username font-bold text-sm"},B={class:"text-gray-700 text-xs"},A={class:"comment-text text-gray-800 text-xs py-3"},F={class:"like flex items-center gap-2 justify-between"},K={class:"flex items-center gap-1"},T={class:"text-gray-800 text-xs"},U={class:"py-2"},z={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"},O={class:"header flex items-center gap-3"},Y={class:"user-info"},q={class:"username font-bold text-sm"},G={class:"text-gray-700 text-xs"},H={class:"comment-text text-gray-800 text-xs py-3"},J={class:"like flex items-center gap-2 justify-between text-xs"},Q={class:"flex items-center gap-1"},R={class:"text-gray-800"},W=b({__name:"comment",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(y){const i=g([]),d=k(y,"modelValue"),o=g({comments:[],hotComments:[],total:0});return w(i,{initialPageNum:2,pageSize:10,threshold:.1},c=>{f({id:d.value,offset:c}).then(_=>{o.value.comments.push(..._.comments)})}),E(()=>d.value,()=>{f({id:d.value}).then(c=>{o.value=c})},{immediate:!0}),(c,_)=>{var h;const m=C,u=D;return((h=l(o).comments)==null?void 0:h.length)>0?(n(),a("div",M,[j,e("div",I,[(n(!0),a(p,null,x(l(o).hotComments,s=>(n(),a("div",{key:s.commentId,ref_for:!0,ref_key:"observedElement",ref:i,class:"bg-white transition bg-opacity-40 hover:bg-[#D9DEE3] hover:bg-opacity-50 p-5 rounded-lg shadow-lg flex flex-col justify-between"},[e("div",N,[r(m,{src:s.user.avatarUrl+"?param=60y60",alt:s.user.nickname,class:"w-10 h-10 rounded-full"},null,8,["src","alt"]),e("div",P,[e("h3",S,t(s.user.nickname),1),e("p",B,t(s.timeStr),1)])]),e("p",A,t(s.content),1),e("div",F,[e("div",K,[r(u,{class:"text-red-400"}),e("span",T,t(s.likedCount),1)]),v(" "+t(s.ipLocation.location),1)])]))),128))]),e("h3",U,"最新评论 ("+t(l(o).total)+")",1),e("div",z,[(n(!0),a(p,null,x(l(o).comments,s=>(n(),a("div",{key:s.commentId,ref_for:!0,ref_key:"observedElement",ref:i,class:"bg-white transition bg-opacity-40 hover:bg-[#D9DEE3] hover:bg-opacity-50 p-5 rounded-lg shadow-lg flex flex-col justify-between"},[e("div",O,[r(m,{src:s.user.avatarUrl+"?param=60y60",alt:"头像",class:"w-10 h-10 rounded-full"},null,8,["src"]),e("div",Y,[e("h3",q,t(s.user.nickname),1),e("p",G,t(s.timeStr),1)])]),e("p",H,t(s.content),1),e("div",J,[e("div",Q,[r(u,{class:"text-red-400"}),e("span",R,t(s.likedCount),1)]),v(" "+t(s.ipLocation.location),1)])]))),128))])])):V("",!0)}}}),$=L(W,[["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/pages/songList/songListDetails/comment.vue"]]);export{$ as default};
