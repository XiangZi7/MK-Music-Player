import{u as y,r as k,t as P,o as L,s as x,a as u,b as r,c as i,f as e,d,w,e as a,F as B,h as R,i as j,k as F}from"./index-b248589c.js";const N={class:"content-section menuBar-mv"},S={class:"apps-card"},U=["onClick"],V={class:"app-card"},b=["src"],q={href:"javascript:;"},z={class:"pagination"},M={__name:"index",setup(D){const p=y(),t=k({list:[],currentPage:1,loading:!0,songListCount:0}),{list:g,currentPage:o,loading:_,songListCount:m}=P(t);L(()=>{l()});const l=async()=>{t.loading=!0;const{data:n}=await x({limit:30,offset:(t.currentPage-1)*30});t.list=n,t.songListCount=n.total,t.loading=!1},h=n=>{l()};return(n,c)=>{const v=u("el-pagination"),f=u("el-skeleton");return r(),i("div",null,[e("div",N,[d(f,{rows:5,animated:"",loading:a(_)},{default:w(()=>[e("div",S,[(r(!0),i(B,null,R(a(g).playlists,(s,C)=>(r(),i("div",{class:"apps-item",key:C,onClick:E=>a(p).push({path:"/playList",query:{id:s.id}})},[e("div",V,[e("img",{src:s.coverImgUrl+"?param=200y200",alt:""},null,8,b)]),e("a",q,j(s.name),1)],8,U))),128))]),e("div",z,[d(v,{onCurrentChange:h,currentPage:a(o),"onUpdate:currentPage":c[0]||(c[0]=s=>F(o)?o.value=s:null),"page-size":30,layout:"prev, pager, next, jumper",total:a(m)},null,8,["currentPage","total"])])]),_:1},8,["loading"])])])}}};export{M as default};
