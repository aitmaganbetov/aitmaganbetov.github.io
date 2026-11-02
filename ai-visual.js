'use strict';
// Decorative, local Canvas artwork. No data, models or external services are involved.
const aiVisualText={
 ru:{title:'Интеллект, который<br>связывает системы.',text:'Искусственный интеллект. Архитектура. Новые связи.',modes:['Нейросеть','Орбиты','Поток'],pause:'Приостановить',play:'Продолжить',static:'Статичный режим',note:'Цифровые связи. Живые формы.',link:'AI и технологии ↗'},
 kk:{title:'Жүйелерді<br>біріктіретін интеллект.',text:'Жасанды интеллект. Архитектура. Жаңа байланыстар.',modes:['Нейрожелі','Орбиталар','Ағын'],pause:'Кідірту',play:'Жалғастыру',static:'Статикалық режим',note:'Цифрлық байланыстар. Жанды пішіндер.',link:'AI және технологиялар ↗'},
 en:{title:'Intelligence that<br>connects systems.',text:'Artificial intelligence. Architecture. New connections.',modes:['Neural form','Orbits','Flow'],pause:'Pause motion',play:'Resume motion',static:'Static view',note:'Digital connections. Living forms.',link:'AI and technology ↗'}
};
function aiVisualMarkup(){const u=aiVisualText[lang];return `<section class="ai-art" aria-labelledby="ai-art-title"><canvas class="ai-particles" aria-hidden="true"></canvas><div class="ai-art-copy"><span class="ai-art-kicker">AI / SYSTEMS / CONNECTIONS</span><h2 id="ai-art-title">${u.title}</h2><p>${u.text}</p></div><div class="ai-art-controls" role="group" aria-label="${lang==='ru'?'Вид визуализации':lang==='kk'?'Визуализация түрі':'Visualization style'}">${u.modes.map((label,i)=>`<button type="button" data-ai-mode="${i}" aria-pressed="${i===0}">${label}</button>`).join('')}</div><div class="ai-art-footer"><span>${u.note}</span><button class="ai-motion" type="button" aria-pressed="true">${u.pause}</button></div></section>`;}
const previousAIHome=views.home;
views.home=()=>{const html=previousAIHome();return document.body.classList.contains('executive')?html.replace('<section class="editorial-projects">',aiVisualMarkup()+'<section class="editorial-projects">'):html;};
const previousAISkills=views.skills;
views.skills=()=>previousAISkills()+(document.body.classList.contains('executive')?aiVisualMarkup():'');
let disposeAI=()=>{};
function mountAI(){
 disposeAI();const root=document.querySelector('.ai-art');if(!root)return;
 const canvas=root.querySelector('canvas'),ctx=canvas.getContext('2d');if(!ctx)return;
 const u=aiVisualText[lang],motion=matchMedia('(prefers-reduced-motion: reduce)'),controller=new AbortController(),signal=controller.signal;
 let mode=0,blend=0,oldMode=0,userPaused=false,visible=false,frame=0,time=0,last=0,width=0,height=0,pointerX=0,pointerY=0,dead=false;
 let seed=37;const random=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646;};
 const count=matchMedia('(max-width:680px)').matches?2200:6200;
 const points=Array.from({length:count},()=>({a:random()*Math.PI*2,b:Math.acos(random()*2-1),offset:random(),size:.45+random()*.6}));
 function position(p,shape,t){const {a,b}=p;let x,y,z;
  if(shape===1){const r=.64+.22*Math.cos(b*2);x=r*Math.cos(a);y=.24*Math.sin(b*2);z=r*Math.sin(a);const tilt=.55;x+=.1*Math.cos(3*a+t);const v=y;y=v*Math.cos(tilt)-z*Math.sin(tilt);z=v*Math.sin(tilt)+z*Math.cos(tilt);}
  else if(shape===2){x=(a/Math.PI-1)*1.05;z=Math.cos(b)*.85;y=.2*Math.sin(x*4+t)+.18*Math.cos(z*5+t*.6);}
  else{const r=.78+.16*Math.sin(a*4+t*.45)*Math.sin(b*3-t*.3)+.07*Math.cos(b*6+a*2);x=r*Math.sin(b)*Math.cos(a);y=r*Math.cos(b);z=r*Math.sin(b)*Math.sin(a);}
  return[x,y,z];
 }
 function draw(){
  if(dead||!width)return;ctx.clearRect(0,0,width,height);
  const mobile=width<680,cx=width*(mobile?.5:.61),cy=height*(mobile?.57:.5),scale=Math.min(width*(mobile?.48:.34),height*.48),angle=time*.13+pointerX*.12,tilt=pointerY*.09;
  const ca=Math.cos(angle),sa=Math.sin(angle);const projected=[];
  for(const p of points){let v=position(p,mode,time);if(blend<1){const from=position(p,oldMode,time);v=v.map((n,i)=>from[i]+(n-from[i])*blend);}
   const [x,y,z]=v,rx=x*ca-z*sa,rz=x*sa+z*ca,ry=y+rz*tilt,perspective=2.8/(2.8+rz*.3),depth=(rz+1.15)/2.3;
   projected.push({x:cx+rx*scale*perspective,y:cy+ry*scale*perspective,r:p.size*(.65+depth*.7),alpha:.28+depth*.62,white:p.offset>.91,depth});
  }
  projected.sort((a,b)=>a.depth-b.depth);
  for(const p of projected){ctx.fillStyle=p.white?`rgba(235,231,214,${p.alpha})`:`rgba(210,174,90,${p.alpha})`;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();}
 }
 function allowed(){return !dead&&visible&&!document.hidden&&!motion.matches&&!userPaused;}
 function tick(now){frame=0;if(!allowed())return;if(now-last>=32){const delta=Math.min((now-last)/1000,.06);time+=delta;blend=Math.min(1,blend+delta*1.7);last=now;draw();}frame=requestAnimationFrame(tick);}
 function sync(){cancelAnimationFrame(frame);frame=0;const paused=motion.matches||userPaused;const button=root.querySelector('.ai-motion');button.textContent=motion.matches?u.static:paused?u.play:u.pause;button.disabled=motion.matches;button.setAttribute('aria-pressed',String(!paused));if(allowed()){last=performance.now();frame=requestAnimationFrame(tick);}else{blend=1;draw();}}
 function resize(){const rect=root.getBoundingClientRect();width=rect.width;height=rect.height;const dpr=Math.min(devicePixelRatio||1,width<680?1.3:1.7);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);draw();}
 const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(root);
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{rootMargin:'60px'});observer.observe(root);
 root.addEventListener('click',event=>{const button=event.target.closest('[data-ai-mode]');if(!button)return;oldMode=mode;mode=Number(button.dataset.aiMode);blend=motion.matches||userPaused?1:0;root.querySelectorAll('[data-ai-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));draw();},{signal});
 root.querySelector('.ai-motion').addEventListener('click',()=>{userPaused=!userPaused;sync();},{signal});
 root.addEventListener('pointermove',event=>{if(motion.matches||event.pointerType==='touch')return;const r=root.getBoundingClientRect();pointerX=(event.clientX-r.left)/r.width-.5;pointerY=(event.clientY-r.top)/r.height-.5;},{signal});
 root.addEventListener('pointerleave',()=>{pointerX=pointerY=0;},{signal});
 document.addEventListener('visibilitychange',sync,{signal});motion.addEventListener('change',sync,{signal});
 resize();sync();
 disposeAI=()=>{dead=true;cancelAnimationFrame(frame);controller.abort();observer.disconnect();resizeObserver.disconnect();};
}
const previousAIRender=render;
render=function(){disposeAI();previousAIRender();mountAI();};
render();
