import{_ as M,B,r as S,t as j,j as m,o as q,b as V,c as X,f as t,i as d,e as a,C as f}from"./index-b248589c.js";const J={class:"music-player"},w={class:"controls"},z={class:"time"},D=["src"],F={__name:"index",setup(L){const o=B(),e=S({list:[],playing:!1,currentIndex:0,mode:0,progress:0,duration:0,currentTime:0,songs:[{name:"歌曲1",src:"https://cn-scya-ct-01-03.bilivideo.com/mefmxcodeboss/aod/202112/13/76e0f45f3b756cb5fd82f4024a7e4b7e.m4a?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1685005922&gen=playurlv2&os=bcache&oi=2104912314&trid=0000e70271b5204f4af5bc9ee48f1da1d033B&mid=0&platform=html5&upsig=13e2f675be1a5aeb3dfdd01c79f6dae1&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=62703&bvc=vod&nettype=0&orderid=0,1&logo=00000000"},{name:"歌曲2",src:"https://cn-jxjj-ct-01-01.bilivideo.com/mefmxcodeboss/aod/202106/14/f14b848a15d6357bf2b5dc9c14fcb633.m4a?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1685005996&gen=playurlv2&os=bcache&oi=2104912314&trid=0000067ed8353dcc4d5096a47f4dbf757368B&mid=0&platform=html5&upsig=ab517e53df7a09c7cb1fc36ab45886ae&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=4261&bvc=vod&nettype=0&orderid=0,1&logo=00000000"}]}),{list:R,currentTime:g,duration:b,progress:l}=j(e),i=m(()=>e.songs[e.currentIndex]),v=m(()=>["顺序播放","单曲循环","随机播放"][e.mode]);q(()=>{o.value.src=i.value.src});const _=()=>{e.playing=!0,o.value.play()},h=()=>{e.playing=!1,o.value.pause()},x=()=>{e.playing?h():_()},y=()=>{e.currentIndex===0?e.currentIndex=e.songs.length-1:e.currentIndex--,c()},u=()=>{e.currentIndex===e.songs.length-1?e.currentIndex=0:e.currentIndex++,c()},c=()=>{o.value.src=i.value.src,o.value.play(),e.playing=!0},k=()=>{switch(e.mode){case 0:u();break;case 1:c();break;case 2:const n=Math.floor(Math.random()*e.songs.length);e.currentIndex=n,c();break}},T=()=>{e.currentTime=Math.floor(o.value.currentTime),e.progress=e.currentTime/e.duration*100},I=()=>{e.duration=Math.floor(o.value.duration)},N=()=>{e.mode===2?e.mode=0:e.mode++},p=n=>{const s=Math.floor(n/60),r=n%60;return`${s}:${r.toString().padStart(2,"0")}`},C=n=>{const s=n.currentTarget.getBoundingClientRect(),r=s.width,E=(n.clientX-s.left)/r;o.value.currentTime=e.duration*E};return(n,s)=>(V(),X("div",J,[t("div",w,[t("button",{onClick:y},"上一首"),t("button",{onClick:x},d(n.playing?"暂停":"播放"),1),t("button",{onClick:u},"下一首"),t("button",{onClick:N},d(a(v)),1)]),t("div",{class:"progress",onClick:s[0]||(s[0]=r=>C(r))},[t("div",{class:"bar",style:f({width:a(l)+"%"})},null,4),t("div",{class:"thumb",style:f({left:a(l)+"%"})},null,4),t("div",z,d(p(a(g)))+" / "+d(p(a(b))),1)]),t("audio",{ref_key:"audio",ref:o,src:a(i).src,onTimeupdate:T,onDurationchange:I,onEnded:k},null,40,D)]))}},$=M(F,[["__scopeId","data-v-76097b36"]]);export{$ as default};
