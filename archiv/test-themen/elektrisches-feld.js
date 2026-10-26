/* Aufgaben für das Test-Thema „Elektrisches Feld“ (nicht in der App, siehe README.md). Stufe in LVT "num": "Elektrisches Feld":2 */
MCQ.push(
['Elektrisches Feld','In welche Richtung zeigen elektrische Feldlinien?',['Von + nach −','Von − nach +','Immer im Kreis','Immer nach unten'],'Feldlinien zeigen in die Richtung der Kraft auf eine positive Ladung, also von + weg und zu − hin.'],
['Elektrisches Feld','Der Plattenabstand wird bei gleicher Spannung halbiert. Was passiert mit der Feldstärke?',['Sie verdoppelt sich','Sie halbiert sich','Sie bleibt gleich','Sie vervierfacht sich'],'E = U / d: halber Abstand, doppelte Feldstärke.'],
['Elektrisches Feld','Welche Kraft wirkt auf eine negative Ladung im Feld?',['Gegen die Feldrichtung','In Feldrichtung','Keine','Quer zum Feld'],'F = q · E mit negativem q: die Kraft zeigt gegen die Feldlinien, zur positiven Platte.'],
['Elektrisches Feld','Zwei gleich große positive Ladungen: Der Abstand wird verdoppelt. Wie ändert sich die Kraft?',['Sie sinkt auf ein Viertel','Sie halbiert sich','Sie bleibt gleich','Sie verdoppelt sich'],'Coulomb-Gesetz: F ∝ 1 / r², doppelter Abstand, ein Viertel der Kraft.']
);
Object.assign(GEN,{
'Elektrisches Feld':r=>{const U=pk(r,[100,230,400,1000,5000]),d=pk(r,[2,5,10,20,50]),E=U/d;return r()<.5?[`Zwischen zwei Platten im Abstand d = ${d} mm liegt U = ${U} V. Wie groß ist die Feldstärke in V/mm?`,E,'V/mm',['E = U / d',`E = ${U} V / ${d} mm = ${nf(E,4)} V/mm`]]
 :(()=>{const q=pk(r,[2,5,10,20]),F=q*1e-9*E*1000;return[`Im Feld E = ${nf(E,4)} V/mm (U = ${U} V, d = ${d} mm) sitzt eine Ladung q = ${q} nC. Welche Kraft wirkt in µN?`,F*1e6,'µN',['F = q · E',`E = ${nf(E,4)} V/mm = ${nf(E*1000)} V/m`,`F = ${q} · 10⁻⁹ C · ${nf(E*1000)} V/m = ${nf(F,4)} N = ${nf(F*1e6,4)} µN`]]})()}});
FEH.push(
['Elektrisches Feld','Mia sagt: „Ohne eine zweite Ladung gibt es auch kein Feld.“ Was stimmt?',['Das Feld ist immer da, die zweite Ladung macht es nur sichtbar (Kraft).','Stimmt, Felder brauchen zwei Ladungen.','Felder gibt es nur zwischen Platten.','Felder gibt es nur bei Wechselspannung.'],'Das Feld gehört zur Ladung selbst. Eine Probeladung zeigt es durch die Kraft, erzeugt es aber nicht.']
);
BEW.push(
['Elektrisches Feld','b','Erkläre, warum beim elektrostatischen Lackieren die Farbtröpfchen auch hinter Kanten auf dem Werkstück landen, und was die Spannung zwischen Pistole und Werkstück dabei bewirkt.',
 'Die Tröpfchen werden an der Pistole aufgeladen, das Werkstück ist geerdet. Zwischen beiden liegt eine hohe Spannung, also ein elektrisches Feld. Auf jedes geladene Tröpfchen wirkt die Kraft F = q · E in Richtung der Feldlinien. Die Feldlinien enden auf dem Werkstück und laufen auch um Kanten herum, deshalb folgen die Tröpfchen ihnen bis auf die Rückseite (Umgriff). Höhere Spannung bedeutet stärkeres Feld und größere Kraft, zu hohe Spannung führt aber zu Überschlägen.',
 ['Tröpfchen geladen, Werkstück geerdet, dazwischen Feld','Kraft F = q · E entlang der Feldlinien','Feldlinien enden auf dem Werkstück, auch um Kanten (Umgriff)','Spannung bestimmt Feldstärke E = U / d']]
);
