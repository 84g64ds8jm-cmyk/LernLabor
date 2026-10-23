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
  HW.forEach(u=>(u.x?[...u.tasks,u.x]:u.tasks).forEach(t=>{if(t.typ==='num')for(let i=0;i<N;i++){try{const c=t.gen();chk('Hausaufgabe „'+t.name+'“',c.q,c.a,c.u,c.sol);n++}catch(e){bad.push('Hausaufgabe „'+t.name+'“: '+e.message)}}}));
  MCQ.forEach(x=>{if(!txt(x[1])||!Array.isArray(x[2])||x[2].length<2||x[2].some(o=>!txt(o)))bad.push('Ankreuzfrage „'+x[0]+'“: Antworten oder Lösung fehlerhaft')});
  if(keyTxt(151.74,'',{dp:2})!=='151,74'||keyTxt(1094.8,'€',{})!=='1094,80 €')bad.push('Ergebnisanzeige: Stellen oder Cent falsch ('+keyTxt(151.74,'',{dp:2})+', '+keyTxt(1094.8,'€',{})+')');
  if(tolOf(.0005,'mm',8).rel!==.0005||tolOf(undefined,'€',100).abs!==.5)bad.push('Toleranz: Zahl oder Geld falsch ausgewertet');
  M.forEach((m,i)=>{try{go(i);render();if(!document.title.startsWith(m.name+' · '))bad.push('Thema „'+m.name+'“: Seitentitel fehlt ('+document.title+')')}catch(e){bad.push('Thema „'+m.name+'“: '+e.message)}});cur=-1;prac=false;nav();
  // Fachliche Regeln
  const hint=[];
  [[3.3*0.35,'1,16'],[136.805,'136,81'],[1.005,'1,01'],[-2.675,'−2,68'],[-0.004,'0,00'],[1234.5,'1234,50']].forEach(([v,w])=>{if(nfe(v)!==w)bad.push('Geldrundung: nfe('+v+') ergibt '+nfe(v)+' statt '+w)});
  if(hf(-1234.5,1)!=='−1\u202f234,5')bad.push('Zahlenformat: hf(−1234,5) ergibt '+hf(-1234.5,1));
  const r1=JSON.stringify(mcNew(4711).qs.map(x=>[x.q,x.a])),r2=JSON.stringify(mcNew(4711).qs.map(x=>[x.q,x.a]));if(r1!==r2)bad.push('Mathe-Check: gleicher Satz ergibt verschiedene Aufgaben');
  EXW.forEach(([k,f])=>{for(let i=0;i<N;i++){try{f(mk(i*31337+5)).steps.forEach(s=>{const t=s[4];if(t&&t.ch&&!(Number.isInteger(s[1])&&s[1]>=0&&s[1]<t.ch.length))bad.push('Prüfungsaufgabe „'+k+'“: Auswahlantwort ungültig')})}catch(e){}}});
  for(let sd=1;sd<=40;sd++)mcNew(sd).qs.forEach(x=>{const t=x.q+' '+(x.sol||[]).join(' ');if(!ok(x.a))bad.push('Mathe-Check: Ergebnis keine Zahl');if(/\^|÷/.test(t))bad.push('Mathe-Check: „^“ oder „÷“ im Text: '+t.slice(0,80))});
  const CNT=/^(Windungen|Teile|Stück|Haushalte|Personen|Fahrten)$/,AVG=/Median|Quartil|Mittel|Durchschnitt|Standardabweichung|Spannweite|durchschnittlich|je Schicht im Mittel/i,cnt=(w,a,u,q)=>{if((CNT.test(String(u).trim())||/^Wie viele (Windungen|Haushalte|Teile|fehlerhafte|Stück|Fahrten)/.test(q||''))&&!AVG.test(q||'')&&ok(a)&&Math.abs(a-Math.round(a))>1e-9)hint.push(w+': Zählgröße nicht ganzzahlig, z. B. '+a+' '+u)};
  for(const k of Object.keys(GEN))for(let i=0;i<N;i++){try{const x=GEN[k](mk(i*7919+1));cnt('Übung „'+k+'“',x[1],x[2],x[0])}catch(e){}}
  EXW.forEach(([k,f])=>{for(let i=0;i<N;i++){try{f(mk(i*31337+5)).steps.forEach(s=>cnt('Prüfungsaufgabe „'+k+'“',s[1],s[2],s[0]))}catch(e){}}});
  const hs={};hint.forEach(h=>{const k=h.split(':')[0];if(!hs[k])hs[k]=h});return{n,topics:M.length,bad:[...new Set(bad)],hint:Object.values(hs)}});
 // Stufen: Filter liefert nur Aufgaben der gewählten Stufe, Vorschlag nach zwei Fehlern, Karte im Lernstand
 errs.push(...await p.evaluate(()=>{const bad=[];try{const seen={};for(const l of [1,2,3]){openPractice('Alle',null,l);for(let i=0;i<60;i++){newQ();const c=PS.cur;if(lvOf(c)!==l)bad.push('Stufen: Stufe '+l+' liefert '+c.k+' „'+c.n+'“ mit Stufe '+lvOf(c));if(c.xp)seen.xp=1;if(!$('#pt .lvb'))bad.push('Stufen: Etikett fehlt')}}
  if(!seen.xp)bad.push('Stufen: Prüfungsniveau mischt keine Prüfungsaufgaben ein');
  ['num','steps','und','fehl','bew'].forEach(k=>{KIND=k;[1,2,3].forEach(l=>{LVSEL=l;poolQ().forEach(([kk,n])=>{if(!lvPool(kk,n).includes(l))bad.push('Stufen: Pool falsch '+kk+' '+n)})})});
  openPractice('Alle','num',2);for(let i=0;i<2;i++){newQ();const it=item();$('#pin').value=String(it.a*1000+7);checkQ()}if($('#plvs').hidden||!$('#plvg'))bad.push('Stufen: kein Vorschlag nach zwei Fehlern');else{$('#plvg').click();if(LVSEL!==1)bad.push('Stufen: Vorschlag wechselt nicht auf Grundlagen')}
  openPractice('M:Gasgesetze','und',3);if(LVSEL!==0)bad.push('Stufen: leere Stufe fällt nicht auf alle Stufen zurück');
  memOpen();if(!$('#lvpan'))bad.push('Stufen: Karte „Dein Niveau“ fehlt im Lernstand');if(!document.querySelector('#mem .lvd'))bad.push('Stufen: Punkte in der Themenliste fehlen');
  localStorage.removeItem('ll_lv');localStorage.removeItem('ll_mem');localStorage.removeItem('ll_score');location.hash='';cur=-1;prac=false;nav()}catch(e){bad.push('Stufen: '+e.message)}return bad}));
 // Kurskalender und Beispiel JK: Termine eingetragen, Umschalten hin und zurück ohne Datenverlust
 const kb=await p.evaluate(()=>{const bad=[],k=store.get('ll_kurs',null);if(!k||k.n!==KURS0.n||KURS0.d.some(d=>!k.d.includes(d)))bad.push('Kurskalender: Kurstermine fehlen');return bad});errs.push(...kb);
 await p.evaluate(()=>{localStorage.setItem('ll_score',JSON.stringify({ok:1,n:2}));llDemo.start()});await p.waitForLoadState('load');await p.waitForTimeout(400);
 errs.push(...await p.evaluate(()=>{const bad=[];if(!llDemo.on())bad.push('Beispiel JK: nicht aktiv');if(store.get('ll_score',{}).n!==439)bad.push('Beispiel JK: Lernstand fehlt');if(!document.querySelector('.demob'))bad.push('Beispiel JK: Hinweisleiste fehlt');if(Object.keys(store.get('ll_mem',{t:{}}).t).length<10)bad.push('Beispiel JK: Themen fehlen');llDemo.stop();return bad}));
 await p.waitForLoadState('load');await p.waitForTimeout(400);
 errs.push(...await p.evaluate(()=>{const bad=[];if(llDemo.on())bad.push('Beispiel JK: lässt sich nicht beenden');if(store.get('ll_score',{}).n!==2)bad.push('Beispiel JK: eigener Lernstand nicht zurück');return bad}));
 // Einführung: erscheint nur ohne Lernstand und nur einmal
 {const c2=await b.newContext();const q=await c2.newPage();q.on('pageerror',e=>errs.push('Einführung: '+e.message));await q.goto('file://'+path.resolve(__dirname,'../index.html'));await q.waitForTimeout(900);
  if(!(await q.$('.tour')))errs.push('Einführung: erscheint beim ersten Öffnen nicht');else{for(let i=0;i<7;i++){await q.click('.tnx');await q.waitForTimeout(80)}if(await q.$('.tour'))errs.push('Einführung: lässt sich nicht beenden');if(!(await q.evaluate(()=>!!document.body&&!!document.querySelector('#app'))))errs.push('Einführung: Seite ist nach dem Schließen leer')}
  await q.reload();await q.waitForTimeout(900);if(await q.$('.tour'))errs.push('Einführung: erscheint ein zweites Mal');await q.evaluate(()=>{const b=[...document.querySelectorAll('#fs button')].pop();b.click()});await q.waitForTimeout(150);{const so=await q.$('#nm [data-k="109"]');if(so){await so.click();await q.waitForTimeout(100)}const it=await q.$('#nm [data-k="106"]');if(!it)errs.push('Einführung: fehlt im Reiter Ich');else{await it.click();await q.waitForTimeout(150);if(!(await q.$('div.tour')))errs.push('Einführung: öffnet nicht aus dem Reiter Ich');else{await q.click('.tsk');await q.waitForTimeout(100);if(!(await q.evaluate(()=>!!document.body&&!!document.querySelector('#app')&&!document.querySelector('div.tour'))))errs.push('Einführung: Überspringen leert die Seite')}}}{await q.evaluate(()=>{document.querySelectorAll('#fs button')[2].click()});await q.waitForTimeout(150);const t=await q.$$eval('#nm [data-k]',b=>b.map(x=>x.textContent).join('|'));const w=['Mathe-Check','Üben','Begründen','Mündliche','Prüfungsaufgaben','Prüfungssimulation'];let i=-1,ok=true;for(const x of w){const j=t.indexOf(x);if(j<=i){ok=false;break}i=j}if(!ok)errs.push('Prüfen: Reihenfolge falsch: '+t)}await c2.close()}
 // Dozentenpaket: Kursplan, Schreibweisen, Begründen-Aufgaben, eigene Aufgaben, Umstellung auf neun Einheiten
 {const c3=await b.newContext();const q=await c3.newPage();q.on('pageerror',e=>errs.push('Dozentenpaket: '+e.message));
  await q.addInitScript(()=>{if(!sessionStorage.getItem('v1')){sessionStorage.setItem('v1','1');localStorage.setItem('ll_tour','1');localStorage.setItem('ll_kurs0',JSON.stringify('IMKO-1TRST261101'));const e={},d=['2026-11-28','2027-01-16','2027-01-23','2027-02-27','2027-03-20','2027-06-05','2027-06-19','2027-07-10','2027-10-02','2027-10-16'];d.forEach((x,i)=>e[x]={t:'NTG, Einheit '+(i+1)+' von 10',z:'8:00–15:45'});e['2027-01-01']={t:'Eigener Termin',own:1};localStorage.setItem('ll_kurs',JSON.stringify({n:'IM TZ 11/2026 Regenstauf',d:[...d,'2027-01-01'].sort(),e}))}});
  await q.goto('file://'+path.resolve(__dirname,'../index.html'));await q.waitForTimeout(700);
  errs.push(...await q.evaluate(()=>{const bad=[],k=store.get('ll_kurs',{}),E=k.e||{},u=Object.values(E).filter(x=>/^NTG, Einheit/.test(x.t||''));
   if(u.length!==9||u.some(x=>!/ von 9$/.test(x.t)))bad.push('Kurskalender: nicht auf 9 Einheiten umgestellt');if(!E['2027-10-16']||E['2027-10-16'].t!=='NTG, Prüfungsvorbereitung')bad.push('Kurskalender: 16.10.2027 fehlt als Prüfungsvorbereitung');
   if(!E['2027-01-01']||!k.d.includes('2027-10-22')||!k.d.includes('2027-01-01'))bad.push('Kurskalender: eigener Termin oder Prüfung verloren');if(E['2026-11-28'].k!=='k11')bad.push('Kurskalender: Kapitel fehlt');
   BEW.forEach(x=>{if(!M.some(m=>m.name===x[0]))bad.push('Begründen: Thema „'+x[0]+'“ gibt es nicht');if(!x[2]||!x[3]||!Array.isArray(x[4])||x[4].length<3)bad.push('Begründen „'+x[0]+'“: unvollständig');if(x[1]==='s'&&!x[5])bad.push('Begründen „'+x[0]+'“: Musterskizze fehlt')});
   openPractice('Alle','bew');if(PS.cur.k!=='bew')bad.push('Begründen: Übung startet nicht');showSol();document.querySelectorAll('#psol [data-bi]').forEach(x=>x.checked=true);document.querySelector('#pbw').click();if(!/Punkten/.test(document.querySelector('#pfb').textContent))bad.push('Begründen: Auswertung fehlt');
   GLS.t='a';glOpen();if(document.querySelectorAll('#gll .gla tr').length<GLA.length)bad.push('Glossar: Schreibweisen fehlen');
   const lk=b64e(JSON.stringify({n:'Test',a:[{id:'1',th:'T <i>x</i>',t:'num',q:'Q?',a:2.5,u:'W',tol:2,s:['a']}]}));location.hash='#aufgaben/'+lk;return bad}));
  await q.waitForTimeout(400);errs.push(...await q.evaluate(()=>{const bad=[];if(!/Vom Dozenten/.test(document.querySelector('#hw').textContent))bad.push('Eigene Aufgaben: Link wird nicht übernommen');if(document.querySelector('#hw i'))bad.push('Eigene Aufgaben: HTML wird nicht maskiert');return bad}));await c3.close()}
 // Lernenden-Konsortium: Lösungsweg bei jedem Typ, Übungsmix, Fehlerhinweise, Hausaufgaben im Lernstand, Begriffe, Suche
 {const c4=await b.newContext();const q=await c4.newPage();q.on('pageerror',e=>errs.push('Konsortium: '+e.message));
  await q.addInitScript(()=>{try{localStorage.setItem('ll_tour','1')}catch(e){}});await q.goto('file://'+path.resolve(__dirname,'../index.html'));await q.waitForTimeout(700);
  errs.push(...await q.evaluate(()=>{const bad=[];
   ['num','steps','mc','und','fehl'].forEach(k=>{for(let i=0;i<6;i++){openPractice('Alle',k);if(!PS.cur)continue;try{showSol()}catch(e){bad.push('Lösungsweg „'+k+'“: '+e.message);break}if(!document.querySelector('#psol').textContent.trim()){bad.push('Lösungsweg „'+k+'“: bleibt leer');break}}});
   openPractice('Alle');const c={};for(let i=0;i<400;i++){newQ();c[PS.cur.k]=(c[PS.cur.k]||0)+1}if(((c.num||0)+(c.steps||0))/400<.4)bad.push('Übungsmix „Gemischt“: zu wenig Rechnen ('+JSON.stringify(c)+')');
   if(!/°C/.test(errHint(25,298.15,{n:'Gasgesetze',u:'K'})||''))bad.push('Fehlerhinweis: °C statt K wird nicht erkannt');
   if(/Str[aä]ng|Phase/.test(errHint(30,10,{n:'Wärmekapazität',u:'kJ'})||''))bad.push('Fehlerhinweis: Drehstrom-Hinweis bei Wärmekapazität');
   GLB.forEach(r=>{try{new RegExp(r[4],'i')}catch(e){bad.push('Begriff „'+r[0]+'“: Suchmuster ungültig')}r[3].forEach(n=>{if(!M.some(m=>m.name===n))bad.push('Begriff „'+r[0]+'“: Thema „'+n+'“ gibt es nicht')})});
   $('#q').value='Om';search();if(!/Ohmsches Gesetz/.test($('#sr').textContent))bad.push('Suche: „Om“ findet das Ohmsche Gesetz nicht');$('#q').value='';search();
   location.hash='#hausaufgaben/k11';return bad}));
  await q.waitForTimeout(500);
  errs.push(...await q.evaluate(()=>{const bad=[],i=document.querySelector('#hw .hwin');if(!i){bad.push('Hausaufgabe: keine Rechenaufgabe in Einheit 1.1');return bad}
   i.value='12345';i.closest('.panel,div').querySelector('.hwck').click();const m=store.get('ll_mem',{t:{}});if(!Object.keys(m.t||{}).length)bad.push('Hausaufgabe: Antwort fehlt im Lernstand');if(!(store.get('ll_fehler',[])||[]).length)bad.push('Hausaufgabe: falsche Antwort fehlt unter Meine Fehler');
   if(!document.querySelector('#hw .glbb'))bad.push('Hausaufgabe: Begriffe-Kasten fehlt');return bad}));
  await c4.close()}
 // Service Worker: Datei vorhanden und Cache-Name passt zur Version
 {const fs=require('fs'),sw=fs.readFileSync(path.resolve(__dirname,'../sw.js'),'utf8'),ix=fs.readFileSync(path.resolve(__dirname,'../index.html'),'utf8'),v=(ix.match(/APPV=(\d+)/)||[])[1];
  if(!/addEventListener\('fetch'/.test(sw))errs.push('sw.js: leer oder ohne fetch-Handler');if(!sw.includes("'lernlabor-v"+v+"'"))errs.push('sw.js: Cache-Name passt nicht zu APPV '+v)}
 await b.close();const all=[...r.bad,...errs];
 console.log(`${r.n} Aufgaben erzeugt, ${r.topics} Themen geöffnet.`);
 if(r.hint.length)console.log(r.hint.length+' fachliche Hinweise (blockieren nicht):\n- '+r.hint.slice(0,30).join('\n- '));
 if(all.length){console.log(all.length+' Probleme:\n- '+all.slice(0,80).join('\n- '));process.exit(1)}else console.log('Alles in Ordnung.');
})().catch(e=>{console.error(e);process.exit(1)});
