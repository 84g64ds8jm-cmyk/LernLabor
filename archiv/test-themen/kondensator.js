/* Aufgaben für das Test-Thema „Kondensator: Laden & Entladen“ (nicht in der App, siehe README.md). Stufe in LVT "num": "Kondensator: Laden & Entladen":2 */
MCQ.push(
['Kondensator: Laden & Entladen','Ein Kondensator wird über einen Widerstand an Gleichspannung geladen. Wann ist er praktisch voll?',['Nach etwa 5 τ','Nach 1 τ','Sofort beim Einschalten','Nie, der Strom fließt dauernd weiter'],'Nach 1 τ sind 63 % erreicht, nach 5 τ etwa 99 %. Dann fließt praktisch kein Strom mehr.'],
['Kondensator: Laden & Entladen','Wie ändert sich die Zeitkonstante, wenn der Widerstand verdoppelt wird?',['Sie verdoppelt sich','Sie halbiert sich','Sie bleibt gleich','Sie vervierfacht sich'],'τ = R · C: doppelter Widerstand, halber Ladestrom, doppelte Ladezeit.'],
['Kondensator: Laden & Entladen','Wie vergrößert man die Kapazität eines Plattenkondensators?',['Plattenabstand verkleinern','Plattenabstand vergrößern','Spannung erhöhen','Plattenfläche verkleinern'],'C = ε₀ · ε_r · A / d: Große Fläche, kleiner Abstand und ein Isolierstoff mit großem ε_r ergeben große Kapazität. Die Spannung ändert C nicht.'],
['Kondensator: Laden & Entladen','Wie viel Energie speichert ein Kondensator mit 1000 µF bei 10 V?',['50 mJ','10 mJ','100 mJ','5 J'],'W = ½ · C · U² = ½ · 0,001 F · (10 V)² = 0,05 J = 50 mJ.'],
['Kondensator: Laden & Entladen','Was passiert mit einem voll geladenen Kondensator im Gleichstromkreis?',['Es fließt kein Strom mehr, er wirkt wie eine Unterbrechung','Er leitet wie ein Draht','Er erwärmt sich dauernd','Er entlädt sich von selbst sofort'],'Ist u_C gleich der Quellenspannung, treibt nichts mehr Strom durch den Widerstand. Für Gleichstrom sperrt der Kondensator.']
);
Object.assign(GEN,{
'Kondensator: Laden & Entladen':r=>{const R=pk(r,[2.2,4.7,10,22,47]),C=pk(r,[47,100,220,470]),U=pk(r,[5,12,24]),tau=R*C/1000,k=pk(r,[1,2,3]),t=k*tau,u=U*(1-Math.exp(-k));
 return r()<.5?[`Ein Kondensator mit C = ${C} µF wird über R = ${nf(R)} kΩ geladen. Wie groß ist die Zeitkonstante τ in s?`,tau,'s',['τ = R · C',`τ = ${nf(R)} kΩ · ${C} µF = ${nf(R*1000)} Ω · ${nf(C/1e6)} F`,`τ = ${nf(tau)} s`]]
 :[`Ein leerer Kondensator (C = ${C} µF) wird über R = ${nf(R)} kΩ an U = ${U} V geladen. Welche Spannung u_C liegt nach t = ${nf(t)} s an?`,u,'V',['τ = R · C = '+nf(tau)+' s',`t / τ = ${k}`,`u_C = U · (1 − e^(−t/τ)) = ${U} V · (1 − e^(−${k}))`,`u_C = ${nf(u,3)} V`]]}});
FEH.push(
['Kondensator: Laden & Entladen','Jonas sagt: „Nach τ = R · C ist der Kondensator voll geladen.“ Was stimmt?',['Nach 1 τ sind es erst 63 %, praktisch voll ist er nach etwa 5 τ.','Stimmt genau, τ ist die volle Ladezeit.','Nach τ ist er halb voll, nach 2 τ voll.','Ein Kondensator wird nie voll.'],'Die Ladekurve ist eine e-Funktion: 63 % nach 1 τ, 86 % nach 2 τ, 99 % nach 5 τ.'],
['Kondensator: Laden & Entladen','Ein Kollege rechnet τ = 10 kΩ · 100 µF = 1000. Wo liegt der Fehler?',['Die Vorsätze fehlen: 10 000 Ω · 0,0001 F = 1 s.','Kein Fehler, τ = 1000 s.','Man muss R durch C teilen.','τ hat keine Einheit.'],'Vor dem Multiplizieren in Grundeinheiten umrechnen: kΩ in Ω, µF in F. Ω · F ergibt Sekunden.']
);
