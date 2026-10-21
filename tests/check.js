// Prüfskript: öffnet die App im Browser und lässt alle Aufgabengeneratoren laufen.
// Start: npx playwright@1.56.1 install chromium && node tests/check.js
const path=require('path');let chromium;try{({chromium}=require('playwright'))}catch(e){({chromium}=require('/opt/node22/lib/node_modules/playwright'))}
(async()=>{
 const b=await chromium.launch(process.env.CHROMIUM?{executablePath:process.env.CHROMIUM}:{});const p=await b.newPage();const errs=[];
 p.on('pageerror',e=>errs.push('Seitenfehler: '+e.message));p.on('console',m=>{if(m.type()==='error'&&!/serviceWorker|sw\.js/.test(m.text()))errs.push('Konsole: '+m.text())});
 await p.goto('file://'+path.resolve(__dirname,'../index.html'));await p.waitForTimeout(500);
 const r=await p.evaluate(()=>{const bad=[],N=40,ok=v=>typeof v==='number'&&isFinite(v),txt=v=>typeof v==='string'&&v.trim().length>0;
  const chk=(w,q,a,u,s)=>{if(!txt(q))bad.push(w+': Aufgabentext leer');if(!ok(a))bad.push(w+': Ergebnis keine Zahl ('+a+')');if(typeof u!=='string')bad.push(w+': Einheit fehlt');if(!Array.isArray(s)||!s.length)bad.push(w+': Lösungsweg leer')};
  let n=0;for(const k of Object.keys(GEN))for(let i=0;i<N;i++){try{const x=GEN[k](mk(i*7919+1));chk('Übung „'+k+'“',x[0],x[1],x[2],x[3]);n++}catch(e){bad.push('Übung „'+k+'“: '+e.message)}}
  for(const k of Object.keys(STEPS))for(let i=0;i<N;i++){try{const d=STEPS[k](mk(i*104729+3));if(!txt(d.intro))bad.push('Mehrschritt „'+k+'“: Einleitung leer');d.steps.forEach((s,j)=>chk('Mehrschritt „'+k+'“ Schritt '+(j+1),s[0],s[1],s[2],s[3]));n++}catch(e){bad.push('Mehrschritt „'+k+'“: '+e.message)}}
  EXW.forEach(([k,f])=>{for(let i=0;i<N;i++){try{const d=f(mk(i*31337+5));d.steps.forEach((s,j)=>chk('Prüfungsaufgabe „'+k+'“ Schritt '+(j+1),s[0],s[1],s[2],s[3]));n++}catch(e){bad.push('Prüfungsaufgabe „'+k+'“: '+e.message)}}});
  MCQ.forEach(x=>{if(!txt(x[1])||!Array.isArray(x[2])||x[2].length<2||x[2].some(o=>!txt(o)))bad.push('Ankreuzfrage „'+x[0]+'“: Antworten oder Lösung fehlerhaft')});
  M.forEach((m,i)=>{try{go(i);render()}catch(e){bad.push('Thema „'+m.name+'“: '+e.message)}});cur=-1;prac=false;nav();
  return{n,topics:M.length,bad:[...new Set(bad)]}});
 await b.close();const all=[...r.bad,...errs];
 console.log(`${r.n} Aufgaben erzeugt, ${r.topics} Themen geöffnet.`);
 if(all.length){console.log(all.length+' Probleme:\n- '+all.slice(0,80).join('\n- '));process.exit(1)}else console.log('Alles in Ordnung.');
})().catch(e=>{console.error(e);process.exit(1)});
