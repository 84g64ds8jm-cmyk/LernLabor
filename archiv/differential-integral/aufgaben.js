// Archiv: Übungs- und Prüfungsaufgaben zu „Ableitung: Steigung & Tangente“ (DFN) und
// „Integral: Fläche unter dem Graphen“ (INN), erstellt am 24.10.2026, nicht in der App.
// Wiedereinbau: siehe README.md.

// ===== Abschnitt 1: Übungen (GEN), Mehrschritt-Aufgaben (STEPS), Ankreuzfragen (MCQ), mündliche Prüfung (ORAL)
Object.assign(GEN,{
[DFN]:r=>{const v=Math.floor(r()*6),ng=x=>nf(x,4),np=x=>x<0?'('+ng(x)+')':ng(x);
 if(v==0){const a=pk(r,[-2,-1,.5,1,2,3]),b=rg(r,-4,4,1),c=rg(r,-5,5,1),x=rg(r,-3,3,1),m=2*a*x+b;return[`Wie groß ist die Steigung von f(x) = ${dFx([0,a,b,c])} an der Stelle x₀ = ${ng(x)}?`,m,'',['Ableiten: f′(x) = '+dF1x([0,a,b,c]),`f′(${ng(x)}) = ${ng(2*a)} · ${np(x)}${b?(b<0?' − ':' + ')+ng(Math.abs(b)):''} = ${ng(m)}`]]}
 if(v==1){const a=pk(r,[1,2,-1,.5]),c=rg(r,-6,6,1),x=rg(r,-3,3,1),m=3*a*x*x+c;return[`Wie groß ist die Steigung von f(x) = ${dFx([a,0,c,0])} an der Stelle x₀ = ${ng(x)}?`,m,'',['Ableiten: f′(x) = '+dF1x([a,0,c,0]),`f′(${ng(x)}) = ${ng(3*a)} · ${np(x)}²${c?(c<0?' − ':' + ')+ng(Math.abs(c)):''} = ${ng(m)}`]]}
 if(v==2){const a=pk(r,[-2,-1,1,2]),xs=rg(r,-4,4,1),b=-2*a*xs,c=rg(r,-6,6,1);return[`Bei welchem x hat der Graph von f(x) = ${dFx([0,a,b,c])} seinen ${a>0?"Tiefpunkt":"Hochpunkt"}?`,xs,'',['Ableiten: f′(x) = '+dF1x([0,a,b,c]),'Waagerechte Tangente: f′(x) = 0',`${ng(2*a)} · x ${b<0?'− '+ng(-b):'+ '+ng(b)} = 0 ⇒ x = ${ng(-b)} / ${np(2*a)} = ${ng(xs)}`]]}
 if(v==3){const a=pk(r,[.5,1,1.5,2,2.5]),t=rg(r,2,8,1),vv=2*a*t;return[`Ein Wagen fährt nach s(t) = ${nf(a)} · t² los (s in m, t in s). Wie schnell ist er nach ${t} s?`,vv,'m/s',['Die Geschwindigkeit ist die Steigung des Weg-Zeit-Graphen: v(t) = s′(t)',`s′(t) = 2 · ${nf(a)} · t = ${nf(2*a)} · t`,`v(${t}) = ${nf(2*a)} · ${t} = ${nf(vv)} m/s`]]}
 if(v==4){const a=pk(r,[1,-1,2,.5]),xw=rg(r,-3,3,1),b=-3*a*xw,c=rg(r,-4,4,1);return[`Bei welchem x liegt der Wendepunkt von f(x) = ${dFx([a,b,c,0])}?`,xw,'',['Zweimal ableiten: f′(x) = '+dF1x([a,b,c,0]),'f″(x) = '+dF2x([a,b,c,0]),`f″(x) = 0 ⇒ x = ${ng(-2*b)} / ${np(6*a)} = ${ng(xw)}`]]}
 const x0=rg(r,-3,3,1)||2,m=2*x0,n=-x0*x0;return[`Die Tangente an f(x) = x² im Punkt P (${ng(x0)} | ${ng(x0*x0)}) hat die Form t(x) = m · x + n. Wie groß ist n?`,n,'',[`f′(x) = 2 · x, also m = f′(${ng(x0)}) = ${ng(m)}`,`P einsetzen: ${ng(x0*x0)} = ${ng(m)} · ${np(x0)} + n`,`n = ${ng(x0*x0)} − ${np(m*x0)} = ${ng(n)}`]]},
[INN]:r=>{const v=Math.floor(r()*6);
 if(v==0){const c=rg(r,2,9,1),x1=rg(r,-2,2,1),x2=x1+rg(r,2,6,1);return[`Wie groß ist das Integral von f(x) = ${c} von x = ${nf(x1)} bis x = ${x2}?`,c*(x2-x1),'',['Konstante Funktion: Die Fläche ist ein Rechteck.',`A = ${c} · (${x2} − ${x1<0?'('+nf(x1)+')':x1}) = ${c} · ${x2-x1} = ${c*(x2-x1)}`]]}
 if(v==1){const m=pk(r,[.5,1,2,3,4]),b=rg(r,2,6,1),A=m*b*b/2;return[`Wie groß ist die Fläche unter f(x) = ${dFx([0,0,m,0])} von x = 0 bis x = ${b}?`,A,'',['Stammfunktion: F(x) = '+dFFx([0,0,m,0]),`F(${b}) − F(0) = ${nf(m/2)} · ${b}² − 0 = ${nf(A)}`,`Probe: Dreieck mit Grundseite ${b} und Höhe ${nf(m*b)}: ${b} · ${nf(m*b)} / 2 = ${nf(A)}`]]}
 if(v==2){const a=pk(r,[1,2,3,.5]),b=pk(r,[2,3,6]),A=a*b**3/3;return[`Wie groß ist die Fläche unter f(x) = ${dFx([0,a,0,0])} von x = 0 bis x = ${b}?`,A,'',['Stammfunktion: aus x² wird x³ / 3: F(x) = '+dFFx([0,a,0,0]),`F(${b}) − F(0) = ${nf(a)} · ${b}³ / 3 = ${nf(A)}`]]}
 if(v==3){const a=pk(r,[1,-1,3]),c=rg(r,1,6,1),x2=pk(r,[1,2,3]),A=a*x2**3/3+c*x2,k=[0,a,0,c];return[`Berechne ∫ (${dFx(k)}) dx von x = 0 bis x = ${x2}.`,A,'',['Stammfunktion: F(x) = '+dFFx(k),`F(${x2}) = ${dn(a/3*x2**3)} + ${c * x2} = ${dn(A)}`,'F(0) = 0, also Integral = '+dn(A)],{abs:.01}]}
 if(v==4){const D=pk(r,[200,400,500,800,1000]),sm=pk(r,[.1,.2,.25,.3,.5]),W=D*sm*sm/2;return[`Eine Feder (D = ${D} N/m) wird um ${nf(sm)} m gespannt. Die Kraft wächst dabei nach F(s) = D · s. Welche Arbeit ist nötig?`,W,'J',['Arbeit = Fläche unter der Kraft-Weg-Linie: W = ∫ D · s ds von 0 bis s','W = D · s² / 2 (Dreieck)',`W = ${D} N/m · (${nf(sm)} m)² / 2 = ${nf(W)} J`]]}
 const a=pk(r,[1,2,.5]),L=pk(r,[2,4]),N=4,dx=L/N,S=[0,1,2,3].reduce((q,i)=>q+a*(i*dx)**2*dx,0);return[`Die Fläche unter f(x) = ${dFx([0,a,0,0])} von 0 bis ${L} wird mit ${N} Rechtecken genähert, Höhe jeweils am linken Rand. Wie groß ist die Rechtecksumme?`,S,'',[`Δx = ${L} / ${N} = ${nf(dx)}`,`Höhen: f(0), f(${nf(dx)}), f(${nf(2*dx)}), f(${nf(3*dx)}) = ${[0,1,2,3].map(i=>nf(a*(i*dx)**2)).join('; ')}`,`Summe = (${[0,1,2,3].map(i=>nf(a*(i*dx)**2)).join(' + ')}) · ${nf(dx)} = ${nf(S)}`,`Genau wäre ${nf(a*L**3/3)}. Die Rechtecke links liegen unter der steigenden Kurve, die Summe ist zu klein.`]]}
});
Object.assign(STEPS,{
[DFN]:r=>{const q=pk(r,[1,2,3]),d=rg(r,-4,4,1),k=[1,0,-3*q*q,d],x0=pk(r,[q+1,-(q+1)]),m=dP1(k,x0);return{intro:`Untersuche die Funktion f(x) = ${dFx(k)}.`,steps:[
 ['Wie groß ist die Steigung an der Stelle x₀ = '+nf(x0)+'?',m,'',['f′(x) = '+dF1x(k),`f′(${nf(x0)}) = 3 · ${x0<0?'('+nf(x0)+')':nf(x0)}² − ${3*q*q} = ${nf(m)}`]],
 ['Bei welchem positiven x liegt ein Extrempunkt?',q,'',['f′(x) = 0: '+dF1x(k)+' = 0',`x² = ${q*q} ⇒ x = ±${q}`,`f″(${q}) = 6 · ${q} = ${6*q} > 0: Tiefpunkt`]],
 ['Wie groß ist der y-Wert dieses Tiefpunkts?',dP(k,q),'',[`f(${q}) = ${q}³ − ${3*q*q} · ${q}${d?(d<0?' − ':' + ')+Math.abs(d):''} = ${nf(dP(k,q))}`]],
 ['Wie groß ist der y-Wert des Wendepunkts?',d,'',['f″(x) = 6 · x = 0 ⇒ x = 0',`f(0) = ${nf(d)}, Wendepunkt W (0 | ${nf(d)})`]]]}},
[INN]:r=>{const a=pk(r,[.5,1,1.5,2]),T=pk(r,[2,4,6]),t2=pk(r,[5,10,20]),vT=a*T,s1=a*T*T/2,s2=vT*t2;return{intro:`Ein Stapler fährt aus dem Stand los. Seine Geschwindigkeit wächst nach v(t) = ${nf(a)} · t (v in m/s, t in s), bis ${T} s erreicht sind. Danach fährt er ${t2} s mit gleicher Geschwindigkeit weiter.`,steps:[
 [`Wie schnell ist er nach ${T} s?`,vT,'m/s',[`v(${T}) = ${nf(a)} · ${T} = ${nf(vT)} m/s`]],
 ['Welchen Weg legt er beim Anfahren zurück?',s1,'m',['Weg = Fläche unter der v-t-Linie: s = ∫ v dt von 0 bis '+T,`Stammfunktion s(t) = ${nf(a/2)} · t²`,`s = ${nf(a/2)} · ${T}² = ${nf(s1)} m (Dreieck: ${T} · ${nf(vT)} / 2)`]],
 ['Welchen Weg legt er danach mit gleicher Geschwindigkeit zurück?',s2,'m',['Rechteck unter der waagerechten v-Linie',`s = ${nf(vT)} m/s · ${t2} s = ${nf(s2)} m`]],
 ['Wie lang ist der gesamte Weg?',s1+s2,'m',[`s = ${nf(s1)} m + ${nf(s2)} m = ${nf(s1+s2)} m`]]]}}
});
MCQ.push(
[DFN,'Was gibt die Ableitung f′(x₀) an?',['Die Steigung des Graphen an der Stelle x₀','Den Funktionswert an der Stelle x₀','Die Fläche unter dem Graphen','Die Nullstelle der Funktion'],'Die Ableitung ist die Steigung der Tangente im Punkt (x₀ | f(x₀)).'],
[DFN,'Was ist die Ableitung von f(x) = x³?',['3 · x²','x²','3 · x³','x⁴ / 4'],'Potenzregel: Die Hochzahl wandert als Faktor nach vorn und wird um 1 kleiner.'],
[DFN,'An einem Hochpunkt gilt …',['f′(x) = 0 und f″(x) < 0','f′(x) = 0 und f″(x) > 0','f(x) = 0','f″(x) = 0 und f′(x) > 0'],'Die Tangente ist waagerecht (f′ = 0), der Graph ist dort nach unten gekrümmt (f″ < 0).'],
[DFN,'Wo liegt der Wendepunkt eines Graphen?',['Wo die Krümmung wechselt, also f″(x) = 0 mit Vorzeichenwechsel','Wo der Graph die x-Achse schneidet','Wo die Tangente waagerecht ist','Am höchsten Punkt'],'Im Wendepunkt geht eine Rechtskurve in eine Linkskurve über. Dort ist die Steigung am größten oder kleinsten.'],
[DFN,'Was ist die Ableitung des Weg-Zeit-Verlaufs s(t)?',['Die Geschwindigkeit v(t)','Die Beschleunigung a(t)','Die Kraft F','Die Arbeit W'],'Geschwindigkeit ist Weg je Zeit, also die Steigung im s-t-Diagramm. Die Ableitung von v(t) ist die Beschleunigung.'],
[DFN,'Was passiert mit der Ableitung, wenn man zu f(x) eine Zahl d addiert?',['Nichts, die Konstante fällt beim Ableiten weg','Sie wird um d größer','Sie wird d-mal so groß','Sie wird null'],'d verschiebt den Graphen nur nach oben. Die Steigung bleibt an jeder Stelle gleich.'],
[INN,'Was gibt das Integral von x₁ bis x₂ anschaulich an?',['Die Fläche zwischen Graph und x-Achse im Bereich von x₁ bis x₂','Die Steigung des Graphen','Den höchsten Punkt','Die Nullstellen'],'Teile über der x-Achse zählen positiv, Teile darunter negativ.'],
[INN,'Was ist eine Stammfunktion von f(x) = x²?',['F(x) = x³ / 3','F(x) = 2 · x','F(x) = x³','F(x) = 3 · x²'],'Rückwärts zur Potenzregel: Hochzahl um 1 erhöhen und durch die neue Hochzahl teilen. Probe: (x³ / 3)′ = x².'],
[INN,'Was passiert mit der Rechtecksumme, wenn man mehr und schmalere Rechtecke nimmt?',['Sie kommt dem genauen Integral immer näher','Sie wird immer größer','Sie wird immer kleiner','Sie ändert sich nicht'],'Die Treppe passt sich der Kurve immer besser an. Der Fehler an den Ecken wird kleiner.'],
[INN,'Ein Graph liegt zwischen x₁ und x₂ ganz unter der x-Achse. Wie ist das Integral?',['Negativ','Positiv','Null','Nicht berechenbar'],'Unter der Achse sind die Rechteckhöhen f(x) negativ. Die Fläche ist der Betrag des Integrals.'],
[INN,'Was ergibt die Fläche unter dem Kraft-Weg-Diagramm?',['Die Arbeit W','Die Leistung P','Die Geschwindigkeit v','Den Druck p'],'W = F · s. Bei veränderlicher Kraft addiert man F · Δs über alle kleinen Wegstücke, das ist die Fläche.'],
[INN,'Wie rechnet man das Integral von x₁ bis x₂ mit der Stammfunktion F?',['F(x₂) − F(x₁)','F(x₁) − F(x₂)','F(x₂) + F(x₁)','F(x₂) · F(x₁)'],'Obere Grenze einsetzen minus untere Grenze einsetzen.']
);
ORAL.push(
['Mathematik','Erkläre anschaulich, was die Ableitung einer Funktion ist und wofür man sie braucht.','Die Ableitung f′(x) ist die Steigung des Graphen an der Stelle x, also die Steigung der Tangente, die den Graphen dort berührt. Man erhält sie als Grenzwert der Sekantensteigung Δy / Δx, wenn Δx immer kleiner wird. Wo f′ = 0 ist, liegen Hoch- und Tiefpunkte, wo f″ = 0 ist, Wendepunkte. Im Betrieb: Die Ableitung des Wegs nach der Zeit ist die Geschwindigkeit, die der Geschwindigkeit die Beschleunigung.'],
['Mathematik','Was bedeutet das Integral anschaulich und wie berechnet man es?','Das Integral ist die Fläche zwischen Graph und x-Achse zwischen zwei Grenzen. Man nähert sie mit vielen schmalen Rechtecken (Breite Δx, Höhe f(x)) und addiert sie. Je schmaler die Rechtecke, desto genauer. Genau rechnet man mit der Stammfunktion F: Integral = F(x₂) − F(x₁). Teile unter der x-Achse zählen negativ. Anwendungen: Arbeit als Fläche unter dem Kraft-Weg-Diagramm, Weg als Fläche unter dem Geschwindigkeit-Zeit-Diagramm.']
);

// ===== Abschnitt 2: „Passt das?“-Hinweise im Lösungsweg (nach const PLAUS={…} einfügen)
Object.assign(PLAUS,{
[DFN]:'Steigt der Graph an der Stelle, muss f′ positiv sein, fällt er, negativ. An Hoch- und Tiefpunkten ist f′ = 0.',
[INN]:'Liegt der Graph zwischen den Grenzen über der x-Achse, ist das Integral positiv. Grobe Probe: Breite x₂ − x₁ mal mittlere Höhe.'
});

// ===== Abschnitt 3: Typische Fehler üben (nach const FEH=[…] einfügen)
FEH.push(
["Ableitung: Steigung & Tangente", "f(x) = x³ + 5. Rechnung: f′(x) = 3x² + 5. Was ist falsch?", ["Die Konstante fällt beim Ableiten weg: f′(x) = 3x².", "Nichts, Konstanten bleiben beim Ableiten stehen.", "f′(x) = x² + 5, die 3 fällt weg.", "f′(x) = 3x³, die Hochzahl bleibt."], "Eine Konstante verschiebt den Graphen nur nach oben, die Steigung ändert sie nicht."],
["Ableitung: Steigung & Tangente", "f(x) = 2x³. Rechnung: f′(x) = 6x³. Was ist falsch?", ["Die Hochzahl wird um 1 kleiner: f′(x) = 6x².", "Nichts, man multipliziert nur mit 3.", "f′(x) = 2x², die 3 fällt weg.", "f′(x) = 5x², man addiert die Hochzahl."], "Potenzregel: Hochzahl als Faktor nach vorn, dann um 1 verkleinern."],
["Ableitung: Steigung & Tangente", "f(x) = x². Notiz: „Die Steigung bei x = 3 ist f(3) = 9.“ Was ist falsch?", ["Die Steigung ist f′(3) = 2 · 3 = 6. f(3) = 9 ist die Höhe des Graphen.", "Nichts, Steigung und Funktionswert sind gleich.", "Die Steigung ist 3, man liest x ab.", "Die Steigung ist 9 / 3 = 3."], "Funktionswert und Ableitung sind zwei verschiedene Dinge."],
["Integral: Fläche unter dem Graphen", "Rechnung: Fläche unter x² von 0 bis 3 = 3³ / 2 = 13,5. Was ist falsch?", ["Man teilt durch die neue Hochzahl: 3³ / 3 = 9.", "Nichts, man teilt durch die alte Hochzahl.", "Es muss 2 · 3 = 6 heißen, man leitet ab.", "Es muss 3² = 9 heißen, man setzt nur ein."], "Probe durch Ableiten: (x³ / 3)′ = x², aber (x³ / 2)′ = 1,5 · x²."],
["Integral: Fläche unter dem Graphen", "Stammfunktion F(x) = x², Grenzen 1 bis 4. Rechnung: F(1) − F(4) = −15. Was ist falsch?", ["Obere minus untere Grenze: F(4) − F(1) = 16 − 1 = 15.", "Nichts, man rechnet unten minus oben.", "Man addiert: F(4) + F(1) = 17.", "Man multipliziert: F(4) · F(1) = 16."], "Liegt der Graph über der x-Achse, muss das Integral positiv sein."],
["Integral: Fläche unter dem Graphen", "f(x) = x von −2 bis 2. Notiz: „Das Integral ist 0, also ist die Fläche 0.“ Was ist falsch?", ["Das Integral ist 0, weil sich die Teile über und unter der Achse aufheben. Die Fläche ist 2 + 2 = 4.", "Nichts, Integral und Fläche sind immer gleich.", "Das Integral ist 4.", "Die Fläche ist −4."], "Für die Fläche an der Nullstelle teilen und die Beträge addieren."]
);
