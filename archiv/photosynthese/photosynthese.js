/* ARCHIV: Thema „Photosynthese“ (Chemie, eigener Bereich), aus der App genommen in v120 (24.10.2026).
   Stand des Codes: index.html v119. Diese Datei wird NICHT geladen; sie dient als Beispiel und zum Wiedereinbau.
   Wiedereinbau: siehe README.md im selben Ordner. */

/* ---------- Hauptblock: Konstanten, Zeichenhelfer, Simulation fm(...), FX, GEN, STEPS, MCQ, ORAL (stand in index.html direkt nach den Mathe-ORAL-Fragen zur Bruchrechnung, vor „Funktionen: Gerade & Parabel“) ---------- */
/* ===== Photosynthese (Chemie, eigener Bereich) ===== */
const PSG='Photosynthese';ORD[FC].push(PSG);
const PSA={C:['#3b4148',11],O:['#e5534b',10],H:['#f4f6f8',6.5]},PSV=['Blatt','Gleichung'];
const psAt=(x,y,e,s=1,ex='')=>BALL(x,y,PSA[e][1]*s,PSA[e][0],1.2,ex),
 psBd=(a,b,d=0,op=1)=>{if(op<=.02)return '';const L=Math.hypot(b[0]-a[0],b[1]-a[1])||1,nx=-(b[1]-a[1])/L*2.6,ny=(b[0]-a[0])/L*2.6,ln=(o)=>`<line x1="${a[0]+nx*o}" y1="${a[1]+ny*o}" x2="${b[0]+nx*o}" y2="${b[1]+ny*o}" stroke="var(--ink)" stroke-width="${d?2.2:3.2}" stroke-linecap="round" opacity="${op}"/>`;return d?ln(1)+ln(-1):ln(0)},
 psCO2=(x,y,s=1,o=1)=>{const d=19*s;return `<g opacity="${o}">`+psBd([x-d,y],[x+d,y],1)+psAt(x-d,y,'O',s)+psAt(x+d,y,'O',s)+psAt(x,y,'C',s)+'</g>'},
 psH2O=(x,y,s=1,o=1)=>`<g opacity="${o}">`+psBd([x,y],[x-13*s,y+10*s])+psBd([x,y],[x+13*s,y+10*s])+psAt(x-13*s,y+10*s,'H',s)+psAt(x+13*s,y+10*s,'H',s)+psAt(x,y,'O',s)+'</g>',
 psO2=(x,y,s=1,o=1)=>`<g opacity="${o}">`+psBd([x-8*s,y],[x+8*s,y],1)+psAt(x-8*s,y,'O',s)+psAt(x+8*s,y,'O',s)+'</g>',
 psGlu=(x,y,s=1,o=1)=>{let p='';for(let k=0;k<6;k++){const a=PI/3*k+PI/6;p+=`${x+11*s*Math.cos(a)},${y+11*s*Math.sin(a)} `}return `<polygon points="${p}" fill="#f2c14e" stroke="var(--ink)" stroke-width="1.5" opacity="${o}"/><polygon points="${p}" fill="url(#g-ball)" opacity="${o}"/>`},
 psQ=(a,c,b,u)=>[(1-u)*(1-u)*a[0]+2*u*(1-u)*c[0]+u*u*b[0],(1-u)*(1-u)*a[1]+2*u*(1-u)*c[1]+u*u*b[1]],
 psSm=x=>x*x*(3-2*x),
 psEq=(cx,y)=>TH(cx-66,y,'6 CO₂ + 6 H₂O','t1','end')+`<path d="M${cx-58} ${y-6}H${cx+56}M${cx+46} ${y-13}L${cx+58} ${y-6} ${cx+46} ${y+1}" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`+TH(cx,y-14,'Licht, Chlorophyll','t2','middle')+TH(cx+66,y,'C₆H₁₂O₆ + 6 O₂','t1'),
 psR=(L,c)=>{const fl=L/(L+25)*1.25,fc=c/(c+350)*1550/1200;return{fl,fc,P:100*fl*fc}};
/* Gleichung: Atome links (6 CO₂ + 6 H₂O) und rechts (Glucose + 6 O₂), Bindungen je Seite */
const PSEQ=(()=>{const A=[],bl=[],br=[],at=(e,L)=>{A.push({e,L,M:null,R:null});return A.length-1};
 const co=[],wa=[];for(let i=0;i<6;i++){const x=36+56*(i%2),y=118+52*Math.floor(i/2),c=at('C',[x,y]),o1=at('O',[x-18,y]),o2=at('O',[x+18,y]);bl.push([c,o1,1],[c,o2,1]);co.push([c,o1,o2])}
 for(let j=0;j<6;j++){const x=162+44*(j%2),y=112+52*Math.floor(j/2),o=at('O',[x,y]),h1=at('H',[x-12,y+9]),h2=at('H',[x+12,y+9]);bl.push([o,h1],[o,h2]);wa.push([o,h1,h2])}
 const G=[506,184],R=27,deg=PI/180,va=k=>(-60+60*k)*deg,vp=(k,r=R)=>[G[0]+r*Math.cos(va(k)),G[1]+r*Math.sin(va(k))],off=(p,a,d)=>[p[0]+d*Math.cos(a),p[1]+d*Math.sin(a)];
 const gC=[1,2,3,4,5].map(k=>vp(k)),c6=off(gC[4],va(5)+.5,26),gO=[vp(0)],gH=[];
 [0,1,2,3].forEach(i=>{const k=i+1,o=off(gC[i],va(k)+.5,22);gO.push(o);gH.push(off(o,va(k)+.5,14))});
 const o6=off(c6,va(5)+1.4,21);gO.push(o6);
 [0,1,2,3,4].forEach(i=>gH.push(off(gC[i],va(i+1)-.65,19)));gH.push(off(o6,va(5)+1.4,14),off(c6,va(5)-.9,18),off(c6,va(5)+.1-PI*.62,17));
 const CP=[...gC,c6];co.forEach((m,i)=>{A[m[0]].R=CP[i];A[m[1]].R=gO[i];A[m[2]].R=[600-7,104+28*i]});wa.forEach((m,j)=>{A[m[0]].R=[600+7,104+28*j];A[m[1]].R=gH[2*j];A[m[2]].R=gH[2*j+1]});
 const C=co.map(m=>m[0]),Og=co.map(m=>m[1]),Hg=[];wa.forEach(m=>Hg.push(m[1],m[2]));
 br.push([Og[0],C[0]],[C[0],C[1]],[C[1],C[2]],[C[2],C[3]],[C[3],C[4]],[C[4],Og[0]],[C[4],C[5]]);
 [0,1,2,3].forEach(i=>br.push([C[i],Og[i+1]],[Og[i+1],Hg[i]]));br.push([C[5],Og[5]],[Og[5],Hg[9]],[C[5],Hg[10]],[C[5],Hg[11]]);[0,1,2,3,4].forEach(i=>br.push([C[i],Hg[4+i]]));
 co.forEach((m,i)=>br.push([m[2],wa[i][0],1]));
 const n={C:0,H:0,O:0};A.forEach(a=>{const k=n[a.e]++;a.M=a.e=='C'?[290+k*20,126]:a.e=='H'?[284+k*10.5,172]:[284+(k%9)*15,212+Math.floor(k/9)*20]});
 return{A,bl,br}})();
fm(FC,PSG,'Photosynthese','Grüne Pflanzen bauen mit Lichtenergie aus Kohlenstoffdioxid und Wasser Traubenzucker (Glucose) auf, dabei wird Sauerstoff frei: 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂. Das grüne Chlorophyll in den Chloroplasten fängt das Licht ein. Schiebe Licht und CO₂ und beobachte, welcher Faktor die Leistung begrenzt. Unter Bild wählst Du zwischen dem Blatt und der Gleichung: Dort zerfallen die Moleküle in einzelne Atome, die gezählt und neu verbunden werden.',
 [['v','Bild','sel',PSV,0],['L','Licht',0,100,5,'%',70],['c','CO₂',0,1200,20,'ppm',420],['m','Zucker',1,100,1,'g',18]],
 (s,t)=>{const R=psR(s.L,s.c),P=R.P,k=P/100,on=P>.5,AT=6,net=P-AT,
  lim=s.L==0?'kein Licht':s.c==0?'kein CO₂':Math.min(R.fl,R.fc)>.92?'Sättigung':R.fl<R.fc?'Licht':'CO₂',
  n=s.m/180.16,mC=6*n*44.01,mW=6*n*18.02,mO=6*n*32,VO=6*n*24,lux=.2+.8*s.L/100;let h='',vb='0 0 640 340';
  const sun=(x,y,r)=>{let g='';for(let i=0;i<12;i++){const a=i*PI/6+t*.15;g+=`<line x1="${x+(r+6)*Math.cos(a)}" y1="${y+(r+6)*Math.sin(a)}" x2="${x+(r+16)*Math.cos(a)}" y2="${y+(r+16)*Math.sin(a)}" stroke="#f5b50a" stroke-width="3" stroke-linecap="round" opacity="${s.L/100}"/>`}return g+BALL(x,y,r,s.L?'#ffd23f':'#9aa3ab',1.5,` opacity="${s.L?.4+.6*s.L/100:1}"`)};
  if(s.v==0){
   const TIP=[118,186],BAS=[465,165],cub=(a,b,c,d,u)=>{const v=1-u;return[v*v*v*a[0]+3*v*v*u*b[0]+3*v*u*u*c[0]+u*u*u*d[0],v*v*v*a[1]+3*v*v*u*b[1]+3*v*u*u*c[1]+u*u*u*d[1]]},
    top=u=>cub(BAS,[420,70],[230,70],TIP,u),bot=u=>cub(BAS,[410,255],[220,275],TIP,u),mid=u=>cub(BAS,[350,170],[230,178],TIP,u),
    ST=[325,236],SB=[560,335],SC=[540,205],stem=u=>psQ(BAS,SC,SB,u),LF='M465 165C420 70 230 70 118 186C220 275 410 255 465 165Z',G0=mid(.45);
   h+=`<defs><linearGradient id="ps-lf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fd05a"/><stop offset=".55" stop-color="#43a33f"/><stop offset="1" stop-color="#2b7a34"/></linearGradient><clipPath id="ps-lu"><circle cx="232" cy="146" r="33"/></clipPath></defs>`;
   h+=sun(62,62,24)+TH(62,112,'Licht '+s.L+' %','t2','middle');
   [[215,128],[290,104],[375,112]].forEach(([x,y],i)=>h+=`<line x1="${80+i*6}" y1="${80+i*4}" x2="${x}" y2="${y}" stroke="#f5c518" stroke-width="5" stroke-dasharray="10 14" stroke-dashoffset="${-t*40}" stroke-linecap="round" opacity="${.7*s.L/100}"/>`);
   h+=`<path d="M470 165Q540 205 560 335" fill="none" stroke="#2f6b2a" stroke-width="13" stroke-linecap="round"/><path d="M470 165Q540 205 560 335" fill="none" stroke="#5a9e3d" stroke-width="9" stroke-linecap="round"/>`;
   h+=`<path d="M466 167Q536 207 556 335" fill="none" stroke="var(--flow)" stroke-width="2.5" stroke-dasharray="6 9" stroke-dashoffset="${t*30*Math.max(k,.15)}"/><path d="M474 163Q544 203 564 335" fill="none" stroke="#f2c14e" stroke-width="2.5" stroke-dasharray="6 9" stroke-dashoffset="${-t*30*k}" opacity="${on?1:.3}"/>`;
   h+=`<path d="${LF}" fill="url(#ps-lf)"/><path d="M465 165C410 255 220 275 118 186C230 178 350 170 465 165Z" fill="#0b3d12" opacity=".14"/><path d="${LF}" fill="#c8ff8a" opacity="${(s.L/100*(.1+.08*Math.sin(t*2.5))).toFixed(3)}"/>`;
   for(let i=0;i<8;i++){const u=.1+i*.1,m=mid(u),a=top(Math.min(u+.08,.97)),b=bot(Math.min(u+.08,.97));
    [a,b].forEach(e=>{const cx=m[0]+(e[0]-m[0])*.45-18,cy=m[1]+(e[1]-m[1])*.6,ex=m[0]+(e[0]-m[0])*.9,ey=m[1]+(e[1]-m[1])*.9;h+=`<path d="M${m[0]} ${m[1]}Q${cx} ${cy} ${ex} ${ey}" fill="none" stroke="#b8e68f" stroke-width="${1.8-i*.12}" stroke-linecap="round" opacity=".75"/>`})}
   h+=`<path d="M465 161C350 166 230 175 120 186C230 180 350 173 465 170Z" fill="#d8f0b0" stroke="#3d7a2a" stroke-width=".8"/><path d="M455 140C410 92 300 82 220 104" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".28"/><path d="${LF}" fill="none" stroke="#1f5e2a" stroke-width="2.5" stroke-linejoin="round"/>`;
   h+=`<path d="M465 165Q380 170 ${G0[0]} ${G0[1]}" fill="none" stroke="var(--flow)" stroke-width="2" stroke-dasharray="5 8" stroke-dashoffset="${-t*30*Math.max(k,.15)}" opacity=".8"/>`;
   let lu=`<circle cx="232" cy="146" r="33" fill="#dff2cf"/>`,ci=0;for(let r=0;r<3;r++)for(let c=0;c<4;c++){const x=200+c*18-(r%2)*9,y=116+r*22;lu+=`<rect x="${x}" y="${y}" width="17" height="21" rx="5" fill="#cbe8b4" stroke="#5d9b45" stroke-width="1.2"/>`;
    [[x+5,y+6],[x+12,y+9],[x+6,y+15]].forEach(([a,b])=>{const gl=s.L/100*(.55+.45*Math.sin(t*3+ci*1.3));ci++;lu+=`<ellipse cx="${a}" cy="${b}" rx="3.4" ry="2.3" fill="#1b6b2a"/><ellipse cx="${a}" cy="${b}" rx="3.4" ry="2.3" fill="#c8ff8a" opacity="${(gl*.8).toFixed(2)}"/>`})}
   h+=`<g clip-path="url(#ps-lu)">${lu}</g><path d="M256 170L276 190" stroke="var(--ink)" stroke-width="7" stroke-linecap="round"/><circle cx="232" cy="146" r="33" fill="none" stroke="var(--ink)" stroke-width="3.5"/><path d="M212 126A28 28 0 0 1 240 119" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>`;
   h+=`<path d="M315 233Q325 226 335 233Q325 240 315 233Z" fill="#cfe9c0" stroke="#1f5e2a" stroke-width="1.6"/><path d="M319 233H331" stroke="var(--ink)" stroke-width="1.6"/>`;
   if(on){for(let i=0;i<4;i++){const ph=(t*.3*(.3+k)+i/4)%1,S=[40+55*i,330],x=S[0]+(ST[0]-S[0])*ph,y=S[1]+(ST[1]+6-S[1])*ph;h+=psCO2(x,y,.6,ph>.85?(1-ph)/.15:1)}
    for(let i=0;i<3;i++){const ph=(t*.3*(.3+k)+i/3+.15)%1,E=[345+40*i,336],x=ST[0]+(E[0]-ST[0])*ph,y=ST[1]+8+(E[1]-ST[1]-8)*ph;h+=psO2(x,y,.75,ph<.12?ph/.12:1)}
    for(let i=0;i<3;i++){const ph=(t*.22*(.3+k)+i/3)%1,p=ph<.35?psQ(G0,[400,170],BAS,ph/.35):stem((ph-.35)/.65);h+=psGlu(p[0]+4,p[1],.8,ph<.08?ph/.08:1)}
   }
   for(let i=0;i<3;i++){const ph=(t*.25*Math.max(k,.15)+i/3)%1,p=stem(1-ph);h+=psH2O(p[0]-14,p[1],.55)}
   h+=psEq(292,40);
   h+=`<path d="M128 236L208 168" stroke="var(--ink)" stroke-width="1.5"/>`+TH(124,250,'Lupe: Zellen mit','t2','end')+TH(124,266,'Chloroplasten','t2','end')+TH(325,262,'Spaltöffnung','t2','middle')+TH(20,300,'CO₂ aus der Luft','t2')+TH(436,298,'O₂ an','t2')+TH(436,314,'die Luft','t2')+TH(632,250,'H₂O aus','t2','end')+TH(632,266,'der Wurzel ↑','t2','end')+TH(632,290,'Glucose','t2','end')+TH(632,306,'wird verteilt ↓','t2','end');
   const x0=506,w=116,y0=136,hh=66;let cv='',cm='';for(let i=0;i<=30;i++){const L=i/30*100;cv+=`${x0+w*i/30},${y0-hh*psR(L,s.c).P/100} `;cm+=`${x0+w*i/30},${y0-hh*psR(L,1200).P/100} `}
   h+=`<rect x="${x0-8}" y="${y0-hh-26}" width="${w+16}" height="${hh+50}" rx="8" fill="var(--card)" stroke="var(--line)"/><line x1="${x0}" x2="${x0+w}" y1="${y0}" y2="${y0}" stroke="var(--wire)"/><line x1="${x0}" x2="${x0}" y1="${y0-hh}" y2="${y0}" stroke="var(--wire)"/><polyline points="${cm}" fill="none" stroke="var(--mute)" stroke-width="1.5" stroke-dasharray="4 4"/><polyline points="${cv}" fill="none" stroke="var(--ok)" stroke-width="3"/>`+BALL(x0+w*s.L/100,y0-hh*P/100,5.5,'var(--amber)',1.3)+T(x0+w/2,y0-hh-10,'Leistung','t2','middle')+T(x0+w,y0+16,'Licht','t2','end')+T(x0,y0+16,'CO₂ '+s.c,'t2');
   if(!on)h+=TH(320,200,s.L?'Ohne CO₂ kein Zucker':'Dunkel: keine Photosynthese, nur Zellatmung','t1','middle');
  }else{
   vb='0 0 640 330';const c=(t*.07)%1,st=!on?0:c<.12?0:c<.27?psSm((c-.12)/.15):c<.45?1:c<.6?1+psSm((c-.45)/.15):c<.85?2:2-2*psSm((c-.85)/.15),ph=Math.round(st);
   const PN=[[12,'1 · Ausgangsstoffe','6 CO₂ + 6 H₂O'],[240,'2 · Atome zählen','alle Bindungen gelöst'],[428,'3 · Produkte','C₆H₁₂O₆ + 6 O₂']],PW=[218,178,200];
   PN.forEach(([x,a,b],i)=>{const act=ph==i&&on;h+=`<rect x="${x}" y="74" width="${PW[i]}" height="192" rx="12" fill="${act?'var(--ok)':'var(--line)'}" opacity="${act?.12:.18}" stroke="${act?'var(--ok)':'var(--line)'}" stroke-width="${act?2:1}"/>`+T(x+PW[i]/2,68,a,'t2','middle')+T(x+PW[i]/2,258,b,'t2','middle')});
   [[235,172],[423,172]].forEach(([x,y])=>h+=`<path d="M${x-5} ${y}H${x+3}M${x-1} ${y-5}L${x+4} ${y} ${x-1} ${y+5}" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`);
   const ip=(a,b,u)=>[a[0]+(b[0]-a[0])*u,a[1]+(b[1]-a[1])*u],Q=PSEQ.A.map((a,i)=>{const u=st<=1?st:st-1,P=st<=1?ip(a.L,a.M,u):ip(a.M,a.R,u),arc=Math.sin(PI*(st%1))*(10+8*Math.sin(i*1.9));return[P[0],P[1]-arc]});
   const bd=(b,o)=>o>.02?psBd(Q[b[0]],Q[b[1]],b[2],o):'';PSEQ.bl.forEach(b=>h+=bd(b,Math.max(0,1-st*3)));PSEQ.br.forEach(b=>h+=bd(b,Math.max(0,(st-1.67)*3)));
   h+=T(134,177,'+','t1','middle')+T(576,182,'+','t1','middle');
   if(st>.6&&st<1.4){const o=1-Math.abs(st-1)/.4;h+=`<g opacity="${o.toFixed(2)}">`+T(250,131,'6','t2')+T(250,177,'12','t2')+T(250,227,'18','t2')+'</g>'}
   PSEQ.A.map((a,i)=>[a,i]).sort((x,y)=>(x[0].e=='H')-(y[0].e=='H')).forEach(([a,i])=>h+=psAt(Q[i][0],Q[i][1],a.e,.8));
   h+=psEq(320,34);
   h+=T(200,297,'Atombilanz','t2','end');[['C',6],['H',12],['O',18]].forEach(([e,n],i)=>{const x=226+i*96;h+=psAt(x,292,e,.8)+T(x+14,297,`${e}: ${n} = ${n}`,'t2')});
   h+=T(320,322,'Keine Atome gehen verloren, sie werden nur neu verbunden. Die Energie dafür liefert das Licht.','t2','middle');
   if(!on)h+=TH(120,165,s.L?'Ohne CO₂ keine Reaktion':'Ohne Licht keine Reaktion','t2','middle');
  }
  return{vb,d:h,res:[[nf(P,2)+' %','Leistung'],[lim,'begrenzt durch'],[nf(mC)+' g','CO₂ für '+s.m+' g Zucker']],
   rows:[['Lichtfaktor',nf(R.fl*100,2)+' %'],['CO₂-Faktor',nf(R.fc*100,2)+' %'],['Zellatmung (Verbrauch)',AT+' %'],['Netto',net>=0?'+'+nf(net,2)+' % (gibt O₂ ab)':nf(net,2)+' % (nimmt O₂ auf)'],['n(Glucose)',nf(n)+' mol'],['m(CO₂) verbraucht',nf(mC)+' g'],['m(H₂O) verbraucht',nf(mW)+' g'],['m(O₂) frei',nf(mO)+' g'],['V(O₂) bei 20 °C',nf(VO)+' L']],
   st:[['Summengleichung','6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ (mit Lichtenergie und Chlorophyll)'],['Atombilanz','C: 6 = 6, H: 12 = 12, O: 12 + 6 = 6 + 12'],['Stoffmenge Glucose',`n = m / M = ${s.m} g / 180,16 g/mol = ${nf(n)} mol`],['CO₂-Bedarf',`m(CO₂) = 6 · n · M(CO₂) = 6 · ${nf(n)} mol · 44,01 g/mol = ${nf(mC)} g`],['Wasserbedarf',`m(H₂O) = 6 · ${nf(n)} mol · 18,02 g/mol = ${nf(mW)} g`],['Sauerstoff',`m(O₂) = 6 · ${nf(n)} mol · 32,00 g/mol = ${nf(mO)} g, V = 6 · n · 24 L/mol = ${nf(VO)} L`],['Massenerhaltung',`${nf(mC)} g + ${nf(mW)} g = ${s.m} g + ${nf(mO)} g`],['Licht und Chlorophyll','Licht liefert die Energie, das grüne Chlorophyll fängt sie ein. Beide stehen deshalb über dem Reaktionspfeil, wie ein Katalysator wird Chlorophyll nicht verbraucht. Im Calvin-Zyklus beschleunigen Enzyme (z. B. RuBisCO) die Reaktion.'],['Energie','Endotherm: Je mol Glucose werden rund 2870 kJ Lichtenergie als chemische Energie gespeichert.'],['Lichtreaktion','In den Thylakoiden fängt Chlorophyll Licht ein und spaltet Wasser: 2 H₂O → O₂ + 4 H⁺ + 4 e⁻. Dabei entstehen die Energieträger ATP und NADPH.'],['Dunkelreaktion (Calvin-Zyklus)','Im Stroma wird CO₂ mit ATP und NADPH zu Zucker aufgebaut. Sie braucht kein Licht direkt, aber die Produkte der Lichtreaktion.'],['Herkunft des Sauerstoffs','Der freigesetzte Sauerstoff stammt ganz aus dem Wasser. Genauer: 6 CO₂ + 12 H₂O → C₆H₁₂O₆ + 6 O₂ + 6 H₂O.'],['Begrenzender Faktor',`Der knappste Faktor bestimmt die Leistung (Minimumgesetz). Licht ${nf(R.fl*100,2)} %, CO₂ ${nf(R.fc*100,2)} %: begrenzt durch ${lim}.`],['Umkehrung: Zellatmung','C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + Energie (in Pflanzen und Tieren, Tag und Nacht)']]}},
 'Kugeln: C schwarz, O rot, H weiß, gelbes Sechseck: Glucose. Im Stiel steigt Wasser (blau) auf, Zucker (gelb) wird verteilt. Die Leistung ist ein vereinfachtes Modell, 100 % heißt gesättigt. Die gestrichelte Kurve gilt für viel CO₂ (1200 ppm), heute enthält die Luft rund 420 ppm.',1);
FX['Photosynthese']=['6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂','n = m / M','M(C₆H₁₂O₆) = 180 g/mol, M(CO₂) = 44 g/mol, M(O₂) = 32 g/mol','n(CO₂) = n(O₂) = 6 · n(Glucose)','V = n · V_m (≈ 24 L/mol bei 20 °C)'];
Object.assign(GEN,{
'Photosynthese':r=>{const v=Math.floor(r()*3);
 if(v==0){const m=rg(r,1,10,1)*90,n=m/180,x=6*n*44;return[`Eine Pflanze bildet ${m} g Glucose (C₆H₁₂O₆). Wie viel Kohlenstoffdioxid nimmt sie dafür auf? (M(C₆H₁₂O₆) = 180 g/mol, M(CO₂) = 44 g/mol)`,x,'g',['6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂',`n(Glucose) = ${m} g / 180 g/mol = ${nf(n,4)} mol`,`n(CO₂) = 6 · ${nf(n,4)} mol = ${nf(6*n,4)} mol`,`m(CO₂) = ${nf(6*n,4)} mol · 44 g/mol = ${nf(x,4)} g`]]}
 if(v==1){const m=rg(r,1,10,1)*90,n=m/180,x=6*n*24;return[`Bei der Photosynthese entstehen ${m} g Glucose. Wie viel Liter Sauerstoff werden bei 20 °C frei? (M(C₆H₁₂O₆) = 180 g/mol, V_m = 24 L/mol)`,x,'L',[`n(Glucose) = ${m} g / 180 g/mol = ${nf(n,4)} mol`,`n(O₂) = 6 · n(Glucose) = ${nf(6*n,4)} mol`,`V = ${nf(6*n,4)} mol · 24 L/mol = ${nf(x,4)} L`]]}
 const mc=rg(r,1,12,1)*66,n=mc/44,x=n/6*180;return[`Ein Blatt nimmt ${mc} g CO₂ auf. Wie viel Glucose kann daraus höchstens entstehen? (M(CO₂) = 44 g/mol, M(C₆H₁₂O₆) = 180 g/mol)`,x,'g',[`n(CO₂) = ${mc} g / 44 g/mol = ${nf(n,4)} mol`,`n(Glucose) = n(CO₂) / 6 = ${nf(n/6,4)} mol`,`m = ${nf(n/6,4)} mol · 180 g/mol = ${nf(x,4)} g`]]}
});
Object.assign(STEPS,{
'Photosynthese':r=>{const m=pk(r,[11,22,33,44]),n=m*1000/44;return{intro:`Eine ausgewachsene Buche bindet im Jahr rund ${m} kg CO₂. Rechne mit M(CO₂) = 44 g/mol, M(C₆H₁₂O₆) = 180 g/mol und V_m = 24 L/mol.`,steps:[['Wie viel mol CO₂ sind das?',n,'mol',[`n = m / M = ${m*1000} g / 44 g/mol = ${nf(n,4)} mol`]],['Wie viel kg Glucose baut der Baum daraus auf?',n/6*180/1000,'kg',['n(Glucose) = n(CO₂) / 6 = '+nf(n/6,4)+' mol',`m = ${nf(n/6,4)} mol · 180 g/mol = ${nf(n/6*180/1000,4)} kg`]],['Wie viel m³ Sauerstoff gibt er dabei ab?',n*24/1000,'m³',['n(O₂) = n(CO₂) = '+nf(n,4)+' mol',`V = ${nf(n,4)} mol · 24 L/mol = ${nf(n*24,4)} L = ${nf(n*24/1000,4)} m³`]]]}}
});
MCQ.push(
['Photosynthese','Welche Ausgangsstoffe braucht eine Pflanze für die Photosynthese?',['Kohlenstoffdioxid und Wasser','Sauerstoff und Glucose','Stickstoff und Wasser','Kohlenstoffdioxid und Sauerstoff'],'6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂. CO₂ kommt aus der Luft, Wasser aus dem Boden.'],
['Photosynthese','Welche Aufgabe hat das Chlorophyll?',['Es nimmt die Lichtenergie auf','Es speichert das Wasser','Es transportiert den Zucker','Es bindet Stickstoff aus der Luft'],'Chlorophyll ist der grüne Farbstoff in den Chloroplasten. Es absorbiert vor allem rotes und blaues Licht, grünes wird zurückgeworfen.'],
['Photosynthese','Wo in der Pflanzenzelle läuft die Photosynthese ab?',['In den Chloroplasten','In den Mitochondrien','Im Zellkern','In der Zellwand'],'Die Chloroplasten enthalten das Chlorophyll. In den Mitochondrien läuft die Zellatmung.'],
['Photosynthese','Ist die Photosynthese exotherm oder endotherm?',['Endotherm, sie speichert Lichtenergie im Zucker','Exotherm, sie gibt Wärme ab','Weder noch, die Energie bleibt gleich','Exotherm, weil Sauerstoff frei wird'],'Je mol Glucose werden rund 2870 kJ gespeichert. Diese Energie wird bei Zellatmung oder Verbrennung wieder frei.'],
['Photosynthese','Wie viele Moleküle O₂ entstehen je Molekül Glucose?',['6','1','3','12'],'6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂. Für jedes gebundene CO₂ wird ein O₂ frei.'],
['Photosynthese','Woher stammt der Sauerstoff, den die Pflanze abgibt?',['Aus dem Wasser','Aus dem Kohlenstoffdioxid','Aus der Glucose','Aus dem Boden'],'Versuche mit markiertem Sauerstoff zeigen: Das Licht spaltet Wasser, 2 H₂O → O₂ + 4 H⁺ + 4 e⁻.'],
['Photosynthese','Welche Reaktion ist die Umkehrung der Photosynthese?',['Die Zellatmung','Die Elektrolyse von Wasser','Die Neutralisation','Die Korrosion'],'Zellatmung: C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + Energie.'],
['Photosynthese','Warum gibt man in Gewächshäusern zusätzlich CO₂ zu?',['Bei genug Licht begrenzt oft das CO₂ die Photosynthese','CO₂ erwärmt nur die Luft','CO₂ ersetzt das Gießen','CO₂ färbt die Blätter grüner'],'Der knappste Faktor bestimmt die Leistung (Minimumgesetz). Mehr CO₂ steigert dann das Wachstum.']
);
ORAL.push(
['Chemie','Erkläre die Photosynthese mit der Reaktionsgleichung. Welche Rolle spielen Licht und Chlorophyll?','In den Chloroplasten grüner Pflanzen fängt Chlorophyll Lichtenergie ein. Damit bauen sie aus Kohlenstoffdioxid und Wasser Glucose auf, Sauerstoff wird frei: 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂. Die Reaktion ist endotherm, je mol Glucose werden rund 2870 kJ gespeichert. In der Lichtreaktion wird Wasser gespalten (daher stammt der Sauerstoff), in der Dunkelreaktion (Calvin-Zyklus) wird CO₂ zu Zucker gebunden.'],
['Chemie','Wie hängen Photosynthese, Zellatmung und Verbrennung im Kohlenstoffkreislauf zusammen?','Die Photosynthese bindet CO₂ aus der Luft im Zucker und gibt O₂ ab. Zellatmung (C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O) und Verbrennung von Holz geben das CO₂ wieder frei. Holz gilt deshalb als annähernd CO₂-neutral. Kohle, Öl und Gas sind ebenfalls aus Biomasse entstanden, setzen aber CO₂ frei, das vor Jahrmillionen gebunden wurde.']
);

/* ---------- ERK/BET: Erklärung und Betriebsbezug (müssen NACH BET['Bruchrechnung'] stehen, ERK ist vorher noch nicht definiert) ---------- */
ERK['Photosynthese']=['Pflanzen speichern Sonnenenergie als chemische Energie im Zucker. Aus 6 CO₂ und 6 H₂O entstehen 1 Glucose und 6 O₂. Die Leistung hängt vom knappsten Faktor ab: Licht, CO₂, Wasser oder Temperatur.',['Glaubt, die Pflanze nimmt den Kohlenstoff aus dem Boden auf. Er kommt aus dem CO₂ der Luft.','Vertauscht Photosynthese und Zellatmung. Pflanzen atmen auch, Tag und Nacht.','Vergisst den Faktor 6 beim Umrechnen von Glucose auf CO₂ oder O₂.']];
BET['Photosynthese']='Holzpellets und Hackschnitzel gelten als nahezu CO₂-neutral: Beim Verbrennen wird nur so viel CO₂ frei, wie der Baum vorher durch Photosynthese gebunden hat. Dachbegrünung und Grünflächen am Betrieb binden CO₂ und kühlen im Sommer.';

/* ---------- Typische Fehler (drei Einträge, gehören in das Array vor „Lern-Gedächtnis“, nach „Messreihe auswerten“) ---------- */
["Photosynthese", "Mia sagt: Den Kohlenstoff für ihr Holz holt die Pflanze aus dem Boden. Was ist falsch?", ["Er kommt aus dem CO₂ der Luft, über die Blätter.", "Er kommt aus dem Wasser, das die Wurzeln aufnehmen.", "Er kommt aus dem Sonnenlicht, das in Masse übergeht.", "Nichts, die Wurzeln nehmen Kohlenstoff aus der Erde."], "Aus dem Boden kommen Wasser und Mineralstoffe. Der Kohlenstoff stammt aus dem CO₂ der Luft."],
["Photosynthese", "Finn sagt: Pflanzen machen am Tag Photosynthese und atmen nur nachts. Was ist falsch?", ["Pflanzen atmen immer, tagsüber überwiegt Photosynthese.", "Pflanzen atmen gar nicht, sie machen nur Photosynthese.", "Pflanzen machen auch nachts Photosynthese, nur langsamer.", "Nichts, Atmung und Photosynthese wechseln sich ab."], "Zellatmung läuft immer. Am Tag gibt die Pflanze trotzdem mehr O₂ ab, weil die Photosynthese stärker ist."],
["Photosynthese", "Lena schreibt: CO₂ + H₂O → C₆H₁₂O₆ + O₂. Was ist falsch?", ["Die Faktoren fehlen: 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂.", "Es muss 2 CO₂ + 2 H₂O heißen, sonst geht es nicht auf.", "Es entsteht H₂ statt O₂, sonst stimmt alles.", "Nichts, Faktoren schreibt man bei Biologie nicht."], "Auf beiden Seiten müssen gleich viele Atome stehen. 6 C, 18 O und 12 H links wie rechts."]];

/* ---------- Formelsammlung (Gruppe für das Array der Formelkarten, nach [FC,WH,[...]]) ---------- */
[FC,'Photosynthese',[
['Photosynthese und Zellatmung',['6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂','C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O'],'','Die Photosynthese braucht Lichtenergie, die Zellatmung setzt Energie frei. M(C₆H₁₂O₆) = 180 g/mol.','Photosynthese']]],

/* ---------- Stufen (LVT, zwei Stellen: Objekte "num" und "steps"): Eintrag "Photosynthese":2 ---------- */
