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
  M.forEach((m,i)=>{try{go(i);render();if(!document.title.startsWith(m.name+' · '))bad.push('Thema „'+m.name+'“: Seitentitel fehlt ('+document.title+')')}catch(e){bad.push('Thema „'+m.name+'“: '+e.message)}});cur=-1;prac=false;nav();
  // Fachliche Regeln
  const hint=[];
  [[3.3*0.35,'1,16'],[136.805,'136,81'],[1.005,'1,01'],[-2.675,'−2,68'],[-0.004,'0,00'],[1234.5,'1234,50']].forEach(([v,w])=>{if(nfe(v)!==w)bad.push('Geldrundung: nfe('+v+') ergibt '+nfe(v)+' statt '+w)});
  if(hf(-1234.5,1)!=='−1.234,5')bad.push('Zahlenformat: hf(−1234,5) ergibt '+hf(-1234.5,1));
  const r1=JSON.stringify(mcNew(4711).qs.map(x=>[x.q,x.a])),r2=JSON.stringify(mcNew(4711).qs.map(x=>[x.q,x.a]));if(r1!==r2)bad.push('Mathe-Check: gleicher Satz ergibt verschiedene Aufgaben');
  for(let sd=1;sd<=40;sd++)mcNew(sd).qs.forEach(x=>{const t=x.q+' '+(x.sol||[]).join(' ');if(!ok(x.a))bad.push('Mathe-Check: Ergebnis keine Zahl');if(/\^|÷/.test(t))bad.push('Mathe-Check: „^“ oder „÷“ im Text: '+t.slice(0,80))});
  const CNT=/^(Windungen|Teile|Stück|Haushalte|Personen|Fahrten)$/,AVG=/Median|Quartil|Mittel|Durchschnitt|Standardabweichung|Spannweite|durchschnittlich|je Schicht im Mittel/i,cnt=(w,a,u,q)=>{if((CNT.test(String(u).trim())||/^Wie viele (Windungen|Haushalte|Teile|fehlerhafte|Stück|Fahrten)/.test(q||''))&&!AVG.test(q||'')&&ok(a)&&Math.abs(a-Math.round(a))>1e-9)hint.push(w+': Zählgröße nicht ganzzahlig, z. B. '+a+' '+u)};
  for(const k of Object.keys(GEN))for(let i=0;i<N;i++){try{const x=GEN[k](mk(i*7919+1));cnt('Übung „'+k+'“',x[1],x[2],x[0])}catch(e){}}
  EXW.forEach(([k,f])=>{for(let i=0;i<N;i++){try{f(mk(i*31337+5)).steps.forEach(s=>cnt('Prüfungsaufgabe „'+k+'“',s[1],s[2],s[0]))}catch(e){}}});
  const hs={};hint.forEach(h=>{const k=h.split(':')[0];if(!hs[k])hs[k]=h});return{n,topics:M.length,bad:[...new Set(bad)],hint:Object.values(hs)}});
 // Kurskalender und Beispiel JK: Termine eingetragen, Umschalten hin und zurück ohne Datenverlust
 const kb=await p.evaluate(()=>{const bad=[],k=store.get('ll_kurs',null);if(!k||k.n!==KURS0.n||KURS0.d.some(d=>!k.d.includes(d)))bad.push('Kurskalender: Kurstermine fehlen');return bad});errs.push(...kb);
 await p.evaluate(()=>{localStorage.setItem('ll_score',JSON.stringify({ok:1,n:2}));llDemo.start()});await p.waitForLoadState('load');await p.waitForTimeout(400);
 errs.push(...await p.evaluate(()=>{const bad=[];if(!llDemo.on())bad.push('Beispiel JK: nicht aktiv');if(store.get('ll_score',{}).n!==439)bad.push('Beispiel JK: Lernstand fehlt');if(!document.querySelector('.demob'))bad.push('Beispiel JK: Hinweisleiste fehlt');if(Object.keys(store.get('ll_mem',{t:{}}).t).length<10)bad.push('Beispiel JK: Themen fehlen');llDemo.stop();return bad}));
 await p.waitForLoadState('load');await p.waitForTimeout(400);
 errs.push(...await p.evaluate(()=>{const bad=[];if(llDemo.on())bad.push('Beispiel JK: lässt sich nicht beenden');if(store.get('ll_score',{}).n!==2)bad.push('Beispiel JK: eigener Lernstand nicht zurück');return bad}));
 // Service Worker: Datei vorhanden und Cache-Name passt zur Version
 {const fs=require('fs'),sw=fs.readFileSync(path.resolve(__dirname,'../sw.js'),'utf8'),ix=fs.readFileSync(path.resolve(__dirname,'../index.html'),'utf8'),v=(ix.match(/APPV=(\d+)/)||[])[1];
  if(!/addEventListener\('fetch'/.test(sw))errs.push('sw.js: leer oder ohne fetch-Handler');if(!sw.includes("'lernlabor-v"+v+"'"))errs.push('sw.js: Cache-Name passt nicht zu APPV '+v)}
 await b.close();const all=[...r.bad,...errs];
 console.log(`${r.n} Aufgaben erzeugt, ${r.topics} Themen geöffnet.`);
 if(r.hint.length)console.log(r.hint.length+' fachliche Hinweise (blockieren nicht):\n- '+r.hint.slice(0,30).join('\n- '));
 if(all.length){console.log(all.length+' Probleme:\n- '+all.slice(0,80).join('\n- '));process.exit(1)}else console.log('Alles in Ordnung.');
})().catch(e=>{console.error(e);process.exit(1)});
