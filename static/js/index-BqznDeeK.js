import{r as e,a5 as a,a6 as n,a7 as t,D as i,a8 as r,a9 as l,aa as u,K as s,ab as o,ac as c,o as v,$ as g}from"./index-Vt-FovNN.js";function m(e){var a;const n=l(e);return null!=(a=null==n?void 0:n.$el)?a:n}const p=n?window:void 0,h=n?window.navigator:void 0;function d(a){const n=function(){const a=e(!1),n=g();return n&&v((()=>{a.value=!0}),n),a}();return s((()=>(n.value,Boolean(a()))))}function f(a={}){const{navigator:n=h}=a,s=["chargingchange","chargingtimechange","dischargingtimechange","levelchange"],o=d((()=>n&&"getBattery"in n&&"function"==typeof n.getBattery)),c=e(!1),v=e(0),g=e(0),f=e(1);let y;function w(){c.value=this.charging,v.value=this.chargingTime||0,g.value=this.dischargingTime||0,f.value=this.level}return o.value&&n.getBattery().then((e=>{y=e,w.call(y),function(...e){let a,n,s,o;if("string"==typeof e[0]||Array.isArray(e[0])?([n,s,o]=e,a=p):[a,n,s,o]=e,!a)return t;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const c=[],v=()=>{c.forEach((e=>e())),c.length=0},g=i((()=>[m(a),l(o)]),(([e,a])=>{if(v(),!e)return;const t=r(a)?{...a}:a;c.push(...n.flatMap((a=>s.map((n=>((e,a,n,t)=>(e.addEventListener(a,n,t),()=>e.removeEventListener(a,n,t)))(e,a,n,t))))))}),{immediate:!0,flush:"post"}),h=()=>{g(),v()};u(h)}(y,s,w,{passive:!0})})),{isSupported:o,charging:c,chargingTime:v,dischargingTime:g,level:f}}function y(n={}){const t=e(),i=d((()=>"undefined"!=typeof performance&&"memory"in performance));if(i.value){const{interval:e=1e3}=n;a((()=>{t.value=performance.memory}),e,{immediate:n.immediate,immediateCallback:n.immediateCallback})}return{isSupported:i,memory:t}}function w(a,n={}){const{pitch:t=1,rate:r=1,volume:v=1,window:g=p}=n,m=g&&g.speechSynthesis,h=d((()=>m)),f=e(!1),y=e("init"),w=o(a||""),S=o(n.lang||"en-US"),A=c(void 0),b=e=>{e.lang=l(S),e.voice=l(n.voice)||null,e.pitch=l(t),e.rate=l(r),e.volume=v,e.onstart=()=>{f.value=!0,y.value="play"},e.onpause=()=>{f.value=!1,y.value="pause"},e.onresume=()=>{f.value=!0,y.value="play"},e.onend=()=>{f.value=!1,y.value="end"},e.onerror=e=>{A.value=e}},k=s((()=>{f.value=!1,y.value="init";const e=new SpeechSynthesisUtterance(w.value);return b(e),e}));return h.value&&(b(k.value),i(S,(e=>{k.value&&!f.value&&(k.value.lang=e)})),n.voice&&i(n.voice,(()=>{m.cancel()})),i(f,(()=>{f.value?m.resume():m.pause()}))),u((()=>{f.value=!1})),{isSupported:h,isPlaying:f,status:y,utterance:k,error:A,stop:()=>{m.cancel(),f.value=!1},toggle:(e=!f.value)=>{f.value=e},speak:()=>{m.cancel(),k&&m.speak(k.value)}}}export{y as a,f as b,w as u};
