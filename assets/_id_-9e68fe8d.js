import{v,r as h,t as y,o as f,x,y as D,z as g,b as i,c as l,f as s,e,g as c,i as a,F as k,h as L}from"./index-b248589c.js";const U={class:"content-section menuBar-mv"},w=["src"],B={class:"content-section-title"},b=s("span",{style:{margin:"0px 10px"}},"-",-1),V={class:"content-section-title comstitle"},F={class:"content-section",style:{"margin-top":"0"}},M={class:"apps-card"},N=["src"],R={class:"app-card__subtext"},S={class:"com-time"},j={class:"usercountlike"},T={__name:"[id]",setup(q){const n=v(),o=h({list:[],mvUrls:"",commList:{},mvDetails:{artists:[{name:""}]}}),{list:z,mvUrls:_,commList:r,mvDetails:m}=y(o);return f(async()=>{const{data:d}=await x({id:n.params.id});o.mvUrls=d.data.url;const u=await D(n.params.id);o.mvDetails=u.data.data,console.log("🚀 => file: [id].vue:27 => state.mvDetails:",o.mvDetails);const t=await g({id:n.params.id,limit:30,offset:0});o.commList=t.data}),(d,u)=>(i(),l("div",U,[s("video",{controls:"",loop:"",autoplay:"",src:e(_),style:{width:"100%","border-radius":"10px"}},null,8,w),s("div",B,[s("h2",null,[c(a(e(m).artists.map(t=>t.name).join())+" ",1),b,s("span",null,a(e(m).name),1)]),c(" "+a(e(n).query.id)+" ",1),s("div",V,[s("h2",null,[c("评论"),s("span",null,"共"+a(e(r).total)+"条 ",1)])]),s("div",F,[s("div",M,[(i(!0),l(k,null,L(e(r).comments,(t,p)=>(i(),l("div",{class:"app-card usercom",key:p},[s("span",null,[s("img",{class:"useravatar",src:t.user.avatarUrl+"?param=32y32",alt:""},null,8,N),c(" "+a(t.user.nickname),1)]),s("div",R,a(t.content),1),s("div",S,[s("span",null,a(t.ipLocation.location),1),s("span",j,a(t.timeStr),1)])]))),128))])])])]))}};export{T as default};
