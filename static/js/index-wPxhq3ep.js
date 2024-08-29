import{e as t,f as e,g as a,d as l,z as s,W as r,a as i,t as n,o as c,X as o,Y as d,_ as m,b as u,h as p,v as x,m as y,F as f,k as g,w as h,Z as v,$ as w}from"./index-CIo8OW2e.js";import{_ as D}from"./index-CjF9eCAr.js";const b={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},k=[a("path",{fill:"currentColor",d:"m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"},null,-1)];const C={name:"mdi-cards-heart-outline",render:function(a,l){return t(),e("svg",b,[...k])}},T={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_=[a("path",{fill:"currentColor",d:"m9.5 16.5l7-4.5l-7-4.5zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"},null,-1)];const L={name:"material-symbols-play-circle-outline",render:function(a,l){return t(),e("svg",T,[..._])}},j={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},M=[a("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-2.5-3.5l7-4.5l-7-4.5z"},null,-1)];const S={name:"ic-outline-play-circle",render:function(a,l){return t(),e("svg",j,[...M])}},V={class:"container h-full px-4 md:px-6 py-12 w-full box-border flex flex-1 flex-col overflow-x-hidden"},q={class:"flex flex-col md:flex-row h-full gap-8 md:gap-12 lg:gap-16"},P={class:"lg:flex flex-col items-center gap-4 relative hidden w-[320px]"},N=["src"],U={class:"absolute top-2 right-2 bg-gray-400/50 dark:bg-gray-600/50 px-2 py-1 rounded-md text-white text-sm flex items-center gap-1"},z={class:"text-center flex flex-col gap-3"},B={class:"text-2xl font-bold tracking-tight dark:text-white"},F={class:"flex items-center justify-center gap-2 text-muted-foreground dark:text-gray-300 text-sm md:text-base"},I=["src"],K={class:"flex items-center justify-center gap-2 text-muted-foreground dark:text-gray-300 text-sm md:text-base"},W={class:"bg-muted dark:bg-gray-700 px-2 py-1 rounded-md text-sm"},J=["title"],O={class:"flex items-center justify-center gap-1 w-full"},X={class:"flex items-center"},Y={class:"text-sm dark:text-gray-300"},Z={class:"flex items-center"},$={class:"text-sm dark:text-gray-300"},A={class:"flex items-center"},E={class:"text-sm dark:text-gray-300"},G={class:"text-muted-foreground dark:text-gray-300 text-sm"},H={class:"text-muted-foreground dark:text-gray-300 text-sm"},Q={class:"gap-6 flex flex-1"},R={class:"relative w-full h-full overflow-hidden"};const tt=m(l({__name:"index",setup(t,{expose:e}){e();const a=s(),l=r(),m=i({playlistData:{playlist:{tracks:[]}},commentListData:[],drawer:!1}),{playlistData:u,commentListData:p,drawer:x}=n(m);c((()=>{o(a.query.id).then((t=>{m.playlistData=t}))}));const y={route:a,audioStore:l,state:m,playlistData:u,commentListData:p,drawer:x,formatNumber:function(t){if(t<1e4)return t.toString();if(t<1e5){const e=(t/1e4).toFixed(1);return e.endsWith(".0")?e.slice(0,-2)+"万":e+"万"}return(t/1e4).toFixed(0)+"万"},formattedDate:function(t){return new Date(t).toLocaleString()},getCommentPlaylist:(t=1)=>{d({offset:t,id:a.query.id}).then((t=>{m.commentListData=m.commentListData.concat(t.comments)}))},showDrawer:()=>{m.drawer=!0,m.commentListData.length>0||d({offset:1,id:a.query.id}).then((t=>{m.commentListData=t.comments}))},playMusic:()=>{let t=u.value.playlist.tracks.map((t=>({id:t.id,title:t.name,singer:t.ar.map((t=>t.name)).join(" / "),album:t.al.name,cover:t.al.picUrl,time:t.dt,source:"",mv:t.mv})));l.addTrack(t)}};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}),[["render",function(l,s,r,i,n,c){var o,d;const m=S,b=L,k=u("el-button"),T=C,_=w,j=D,M=v;return t(),e("div",V,[a("div",q,[a("div",P,[a("img",{src:i.playlistData.playlist.coverImgUrl+"?param=560y560",alt:"Summer Vibes Playlist",width:"300",height:"300",class:"rounded-lg object-cover aspect-square"},null,8,N),a("div",U,[p(m),x(" "+y(i.formatNumber(i.playlistData.playlist.playCount)),1)]),a("div",z,[a("h1",B,y(i.playlistData.playlist.name),1),a("div",F,[a("img",{src:null==(o=i.playlistData.playlist.creator)?void 0:o.avatarUrl,alt:"DJ Sunny",width:"24",height:"24",class:"rounded-full",style:{"aspect-ratio":"24 / 24","object-fit":"cover"}},null,8,I),a("span",null,y(null==(d=i.playlistData.playlist.creator)?void 0:d.nickname),1)]),a("div",K,[(t(!0),e(f,null,g(i.playlistData.playlist.tags,(a=>(t(),e("span",W,y(a),1)))),256))]),a("p",{class:"text-muted-foreground dark:text-gray-300 text-sm md:line-clamp-5",title:i.playlistData.playlist.description},y(i.playlistData.playlist.description),9,J),a("div",O,[a("div",X,[p(k,{text:"",circle:"",class:"!p-3",onClick:i.playMusic},{default:h((()=>[p(b,{class:"text-xl dark:text-white"})])),_:1}),a("span",Y,y(i.formatNumber(i.playlistData.playlist.playCount)),1)]),a("div",Z,[p(k,{text:"",circle:"",class:"!p-3"},{default:h((()=>[p(T,{class:"text-xl dark:text-white"})])),_:1}),a("span",$,y(i.formatNumber(i.playlistData.playlist.subscribedCount)),1)]),a("div",A,[p(k,{text:"",circle:"",class:"!p-3",onClick:i.showDrawer},{default:h((()=>[p(_,{class:"text-xl dark:text-white"})])),_:1}),a("span",E,y(i.formatNumber(i.playlistData.playlist.commentCount)),1)])]),a("p",G,y(i.formattedDate(i.playlistData.playlist.createTime)),1),a("span",H,y(i.playlistData.playlist.trackCount)+" songs ",1)])]),a("div",Q,[a("div",R,[p(j,{modelValue:i.playlistData.playlist.tracks,"onUpdate:modelValue":s[0]||(s[0]=t=>i.playlistData.playlist.tracks=t)},null,8,["modelValue"])])])]),p(M,{modelValue:i.drawer,"onUpdate:modelValue":s[1]||(s[1]=t=>i.drawer=t),data:i.commentListData,onDIntersect:i.getCommentPlaylist},null,8,["modelValue","data"])])}],["__file","/home/runner/work/KM-Music-Player/KM-Music-Player/src/views/songlist/index.vue"]]);export{tt as default};