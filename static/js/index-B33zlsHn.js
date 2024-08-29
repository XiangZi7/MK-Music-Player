import{d as e,a as s,t,u as a,r as l,q as i,o as r,s as o,_ as n,b as c,e as d,f as u,g as p,h as m,w as f,F as x,k as v,v as g,m as y,p as b,n as h}from"./index-CIo8OW2e.js";const w=e({__name:"index",setup(e,{expose:n}){n();const c=s({Playlist:[]}),{Playlist:d}=t(c),u=a(),p=l([]);function m(e){o({offset:e+1}).then((({playlists:e})=>{c.Playlist=c.Playlist.concat(e)}))}i(p,{initialPageNum:1,pageSize:10,threshold:.1},m),r((()=>{o({offset:1,limit:20}).then((({playlists:e})=>{c.Playlist=e}))}));const f={state:c,Playlist:d,router:u,observedElement:p,handleIntersect:m};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}),P=e=>(b("data-v-ceb91f59"),e=e(),h(),e),_={class:"p-6"},k={class:"bg-gradient rounded-xl text-white py-5"},j={class:"container mx-auto px-4 md:px-6"},M={class:"grid grid-cols-1 md:grid-cols-2 gap-8"},I={class:"flex flex-col justify-center"},S=P((()=>p("h1",{class:"text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4"}," Discover the Latest Trends in Urban Fashion ",-1))),C=P((()=>p("p",{class:"text-gray-400 mb-6"}," Delve into our stylish and accessible collection of musical exploration, instruments, and creative inspiration ",-1))),D={class:"flex gap-3"},E={class:"py-12"},F={class:"grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-8"},K=["onClick"],U=["src","alt"],q={class:"absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg"},z={class:"text-white text-sm font-semibold line-clamp-1"},L={class:"text-white text-xs line-clamp-2"};const N=n(w,[["render",function(e,s,t,a,l,i){const r=c("el-button");return d(),u("div",_,[p("section",k,[p("div",j,[p("div",M,[p("div",I,[S,C,p("div",D,[m(r,{type:"primary"},{default:f((()=>[g("View")])),_:1})])])])])]),p("div",E,[p("div",F,[(d(!0),u(x,null,v(a.Playlist,(e=>(d(),u("div",{class:"group relative rounded-lg overflow-hidden cursor-pointer",key:e.id,onClick:s=>a.router.push(`/songlist?id=${e.id}`),ref_for:!0,ref:"observedElement"},[p("img",{src:e.coverImgUrl+"?param=260y260",alt:e.name,class:"w-full h-auto rounded-lg object-cover transition-all duration-300 group-hover:opacity-80"},null,8,U),p("div",q,[p("h3",z,y(e.name),1),p("p",L,y(e.description),1)])],8,K)))),128))])])])}],["__scopeId","data-v-ceb91f59"],["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/views/discover/index.vue"]]);export{N as default};