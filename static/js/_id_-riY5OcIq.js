import{_ as w}from"./songSheet-hdaeK_s7.js";import{h as C}from"./element-plus-xJXzS9R-.js";import"./vue-BZWOMMSN.js";import{b as E,d as N,p as T,_ as D}from"./index-8nxaCWdS.js";import{b as I}from"./vue-router-IRVoSInp.js";import{d as L,$ as P,af as j,w as A,u as s,c as u,a as e,Z as K,Y as p,U as R,a6 as $,e as z,V as F,b as O,T as B,o as m,a8 as Y}from"./@vue-F4a5j40Z.js";import"./@element-plus-1E4uKyJ7.js";import"./@vueuse-C0SftM8Q.js";import"./lodash-es-S-9mw2Ow.js";import"./@ctrl--dareiTT.js";import"./@popperjs-NiN61gaS.js";import"./pinia-3ZJqzBWs.js";import"./axios-52F-EHG1.js";import"./nprogress-8aEWLQce.js";import"./@babel-3yCADe9Y.js";import"./pinia-plugin-persistedstate-XbYvz584.js";const Z={key:0,class:"playlist"},q={class:"flex"},G={class:"playlist-info"},H={class:"author"},J=["src","alt"],Q={class:"author-name"},W={class:"playlist-description"},X={class:"tags"},tt={class:"Button-group mt-3"},st=L({__name:"[id]",setup(at){const M=E(),_=I(),l=P({playlists:{}}),{playlists:t}=j(l);A(()=>_.params.id,()=>{l.playlists=[],T(_.params.id).then(({playlist:o})=>{l.playlists=o})},{immediate:!0});const y=o=>{if(o)return Object.keys(o).length>0};function S(){let o=l.playlists.tracks.map(n=>n.id).join(),i=[];N(o).then(({data:n})=>{l.playlists.tracks.forEach(a=>{let c=n.find(r=>a.id===r.id);i.push({id:a.id,title:a.name,singer:a.ar.map(r=>r.name).join(),album:a.al.name,cover:a.al.picUrl,source:c.url,time:a.dt,mv:a.mv})}),M.addTrackAndPlay(i)})}return(o,i)=>{var c,r,h,f,g,k,v,V,b,x;const n=C,a=w;return y(s(t))?(m(),u("div",Z,[e("div",q,[e("div",{class:"playlist-cover yx-col-6",style:K({backgroundImage:`url(${((c=s(t))==null?void 0:c.coverImgUrl)+"?param=500y500"})`})},null,4),e("div",G,[e("h2",null,p((r=s(t))==null?void 0:r.name),1),e("div",H,[e("img",{src:((f=(h=s(t))==null?void 0:h.creator)==null?void 0:f.avatarUrl)+"?param=60y60",alt:(k=(g=s(t))==null?void 0:g.creator)==null?void 0:k.nickname},null,8,J),e("span",Q,p((V=(v=s(t))==null?void 0:v.creator)==null?void 0:V.nickname),1)]),e("p",W,p((b=s(t))==null?void 0:b.description),1),e("ul",X,[(m(!0),u(R,null,$((x=s(t))==null?void 0:x.tags,(d,U)=>(m(),u("li",{key:U},p(d)+">钢琴 ",1))),128))]),e("div",tt,[z(n,{type:"primary",onClick:S},{default:F(()=>[Y("播放全部")]),_:1})])])]),y(s(t))?(m(),O(a,{key:0,modelValue:s(t).tracks,"onUpdate:modelValue":i[0]||(i[0]=d=>s(t).tracks=d)},null,8,["modelValue"])):B("",!0)])):B("",!0)}}}),kt=D(st,[["__scopeId","data-v-898ab488"],["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/pages/songList/songListDetails/[id].vue"]]);export{kt as default};
