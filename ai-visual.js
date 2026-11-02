'use strict';
// A decorative perspective-projected sculpture integrated into the editorial hero.
const aiLabels={ru:{pause:'Остановить анимацию',play:'Включить анимацию',static:'Без анимации'},kk:{pause:'Анимацияны тоқтату',play:'Анимацияны қосу',static:'Анимациясыз'},en:{pause:'Pause animation',play:'Play animation',static:'Static view'}};
function sculptureMarkup(){return '<div class="ai-sculpture"><canvas class="ai-particles" aria-hidden="true"></canvas><button class="ai-motion" type="button" aria-pressed="true"></button><span class="ai-orbit-label" aria-hidden="true">AI · ARCHITECTURE · PEOPLE</span></div>';}
const previousAIHome=views.home;
views.home=()=>{const html=previousAIHome();return document.body.classList.contains('executive')?html.replace('<figure class="editorial-portrait">','<figure class="editorial-portrait">'+sculptureMarkup()):html;};
let disposeAI=()=>{};
function mountAI(){
 disposeAI();const root=document.querySelector('.ai-sculpture');if(!root)return;
 const canvas=root.querySelector('canvas'),ctx=canvas.getContext('2d');if(!ctx)return;
 const host=root.closest('.editorial-hero'),motion=matchMedia('(prefers-reduced-motion: reduce)'),abort=new AbortController(),signal=abort.signal;
 let frame=0,last=0,time=0,visible=false,paused=false,dead=false,width=0,height=0,px=0,py=0,tx=0,ty=0;
 const strands=3,segments=210,rings=Array.from({length:strands},(_,strand)=>Array.from({length:segments},(_,i)=>({u:i/segments*Math.PI*2,strand})));
 let seed=27;const random=()=>{seed=seed*16807%2147483647;return(seed-1)/2147483646;};
 const motes=Array.from({length:matchMedia('(max-width:680px)').matches?100:200},()=>({a:random()*Math.PI*2,b:Math.acos(random()*2-1),r:.75+random()*.6,size:.45+random()*.9}));
 function project(x,y,z,scale){const a=time*.12+px*.28,ca=Math.cos(a),sa=Math.sin(a);const xx=x*ca-z*sa,zz=x*sa+z*ca;const tilt=-.3+py*.2,yy=y*Math.cos(tilt)-zz*Math.sin(tilt),depth=y*Math.sin(tilt)+zz*Math.cos(tilt),perspective=3.5/(3.5+depth);return{x:width*.46+xx*scale*perspective,y:height*.47+yy*scale*perspective,z:depth,p:perspective};}
 function draw(){
  if(dead||!width)return;ctx.clearRect(0,0,width,height);const scale=Math.min(width*.37,height*.39);
  // Soft ground shadow gives the transparent artwork a position in the page.
  const shadow=ctx.createRadialGradient(width*.47,height*.83,0,width*.47,height*.83,width*.34);shadow.addColorStop(0,'rgba(28,64,115,.11)');shadow.addColorStop(1,'rgba(28,64,115,0)');ctx.save();ctx.translate(0,height*.65);ctx.scale(1,.22);ctx.fillStyle=shadow;ctx.fillRect(0,-height*3,width,height*6);ctx.restore();
  const faces=[];
  for(const ring of rings){for(let i=0;i<ring.length;i++){const u=ring[i].u,v=ring[(i+1)%ring.length].u,phase=ring[i].strand*Math.PI*2/strands;
   const point=(angle,edge)=>{const radius=.73+.16*Math.cos(3*angle+phase+time*.18),z=.25*Math.sin(3*angle+phase+time*.18)+edge*.065;return project(radius*Math.cos(angle),radius*Math.sin(angle)*.86,z,scale);};
   const a=point(u,-1),b=point(v,-1),c=point(v,1),d=point(u,1);faces.push({a,b,c,d,z:(a.z+b.z+c.z+d.z)/4,light:(Math.cos(u*2+phase)+1)/2,strand:ring[i].strand});}}
  faces.sort((a,b)=>b.z-a.z);
  for(const face of faces){const front=Math.max(0,Math.min(1,(1-face.z)/2)),light=face.light;const gradient=ctx.createLinearGradient(face.a.x,face.a.y,face.c.x,face.c.y);gradient.addColorStop(0,`rgba(${Math.round(18+light*45)},${Math.round(68+light*72)},${Math.round(160+light*70)},${.25+front*.6})`);gradient.addColorStop(.5,`rgba(160,202,255,${.38+front*.5})`);gradient.addColorStop(1,`rgba(16,59,150,${.35+front*.6})`);ctx.fillStyle=gradient;ctx.beginPath();ctx.moveTo(face.a.x,face.a.y);ctx.lineTo(face.b.x,face.b.y);ctx.lineTo(face.c.x,face.c.y);ctx.lineTo(face.d.x,face.d.y);ctx.closePath();ctx.fill();ctx.strokeStyle='rgba(112,163,234,.23)';ctx.lineWidth=.4;ctx.stroke();}
  for(const mote of motes){const angle=mote.a+time*.05;const p=project(mote.r*Math.sin(mote.b)*Math.cos(angle),mote.r*Math.cos(mote.b),mote.r*Math.sin(mote.b)*Math.sin(angle),scale);ctx.fillStyle=`rgba(28,87,174,${.15+(1-p.z)*.12})`;ctx.beginPath();ctx.arc(p.x,p.y,mote.size*p.p,0,Math.PI*2);ctx.fill();}
 }
 function allowed(){return !dead&&visible&&!document.hidden&&!motion.matches&&!paused;}
 function tick(now){frame=0;if(!allowed())return;if(now-last>=32){time+=Math.min((now-last)/1000,.06);px+=(tx-px)*.06;py+=(ty-py)*.06;last=now;draw();}frame=requestAnimationFrame(tick);}
 function sync(){cancelAnimationFrame(frame);const button=root.querySelector('button'),u=aiLabels[lang];button.textContent=motion.matches?u.static:paused?u.play:u.pause;button.disabled=motion.matches;button.setAttribute('aria-pressed',String(!paused&&!motion.matches));if(allowed()){last=performance.now();frame=requestAnimationFrame(tick);}else draw();}
 function resize(){const r=root.getBoundingClientRect();width=r.width;height=r.height;const dpr=Math.min(devicePixelRatio||1,1.6);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);draw();}
 const ro=new ResizeObserver(resize);ro.observe(root);const io=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();});io.observe(root);
 host.addEventListener('pointermove',event=>{if(event.pointerType==='touch'||motion.matches)return;const r=host.getBoundingClientRect();tx=(event.clientX-r.left)/r.width-.5;ty=(event.clientY-r.top)/r.height-.5;},{signal});host.addEventListener('pointerleave',()=>{tx=ty=0;},{signal});
 root.querySelector('button').addEventListener('click',()=>{paused=!paused;sync();},{signal});document.addEventListener('visibilitychange',sync,{signal});motion.addEventListener('change',sync,{signal});resize();sync();
 disposeAI=()=>{dead=true;cancelAnimationFrame(frame);abort.abort();ro.disconnect();io.disconnect();};
}
const previousAIRender=render;
render=function(){disposeAI();previousAIRender();mountAI();};
render();
