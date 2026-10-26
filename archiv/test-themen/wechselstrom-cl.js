/* Aufgaben für das Test-Thema „Kondensator & Spule am Wechselstrom“ (nicht in der App, siehe README.md). Stufe in LVT "num": "Kondensator & Spule am Wechselstrom":2 */
MCQ.push(
['Kondensator & Spule am Wechselstrom','Wie ändert sich der Blindwiderstand eines Kondensators, wenn die Frequenz steigt?',['Er wird kleiner','Er wird größer','Er bleibt gleich','Er wird negativ'],'X_C = 1 / (2π · f · C): Je höher die Frequenz, desto öfter wird umgeladen und desto größer ist der Strom.'],
['Kondensator & Spule am Wechselstrom','Wie liegen Strom und Spannung an einer idealen Spule zueinander?',['Der Strom eilt der Spannung um 90° nach','Der Strom eilt der Spannung um 90° voraus','Beide sind gleichphasig','Sie sind um 180° verschoben'],'Die Spule bremst jede Stromänderung. Merksatz: Bei Induktivitäten wird der Strom sich verspäten.'],
['Kondensator & Spule am Wechselstrom','Welche Wirkleistung nimmt ein idealer Kondensator am Wechselstrom im Mittel auf?',['Keine','U · I','U² / X_C','die Hälfte von U · I'],'Energie pendelt nur hin und her. Es fließt ein Blindstrom, die Blindleistung Q = U · I wird in var angegeben.'],
['Kondensator & Spule am Wechselstrom','Wie groß ist X_L einer Spule mit L = 0,1 H bei 50 Hz?',['31,4 Ω','5 Ω','3,14 Ω','314 Ω'],'X_L = 2π · f · L = 2π · 50 Hz · 0,1 H ≈ 31,4 Ω.']
);
Object.assign(GEN,{
'Kondensator & Spule am Wechselstrom':r=>{const f=pk(r,[50,100,400,1000]),U=pk(r,[24,230]);
 if(r()<.5){const C=pk(r,[1,2.2,4.7,10,22]),X=1/(2*Math.PI*f*C*1e-6);return[`Ein Kondensator mit C = ${nf(C)} µF liegt an ${U} V, ${f} Hz. Wie groß ist der Strom in mA?`,U/X*1000,'mA',['X_C = 1 / (2π · f · C)',`X_C = 1 / (2π · ${f} Hz · ${nf(C)} µF) = ${nf(X,4)} Ω`,'I = U / X_C',`I = ${U} V / ${nf(X,4)} Ω = ${nf(U/X*1000,3)} mA`]]}
 const L=pk(r,[.05,.1,.2,.5]),X=2*Math.PI*f*L;return[`Eine Spule mit L = ${nf(L)} H (Drahtwiderstand vernachlässigt) liegt an ${U} V, ${f} Hz. Wie groß ist der Strom in A?`,U/X,'A',['X_L = 2π · f · L',`X_L = 2π · ${f} Hz · ${nf(L)} H = ${nf(X,4)} Ω`,'I = U / X_L',`I = ${U} V / ${nf(X,4)} Ω = ${nf(U/X,3)} A`]]}});
FEH.push(
['Kondensator & Spule am Wechselstrom','Tim rechnet für einen Kondensator X_C = 2π · f · C. Was hat er verwechselt?',['Das ist die Form für die Spule. Für den Kondensator gilt X_C = 1 / (2π · f · C).','Nichts, die Formel stimmt.','Es muss X_C = f · C heißen.','Der Kondensator hat am Wechselstrom keinen Widerstand.'],'X_C sinkt mit steigender Frequenz und Kapazität, X_L steigt mit Frequenz und Induktivität.']
);
BEW.push(
['Kondensator & Spule am Wechselstrom','b','Erkläre, warum ein Kondensator bei Gleichspannung sperrt, bei Wechselspannung aber Strom fließt, und warum dieser Strom bei höherer Frequenz größer wird.',
 'Bei Gleichspannung lädt sich der Kondensator einmal auf, danach fließt kein Strom mehr: Das Dielektrikum lässt keine Ladungen durch. Bei Wechselspannung wird er ständig umgeladen; der Lade- und Entladestrom fließt in der Zuleitung, obwohl keine Ladung durch den Kondensator geht. Der Strom ist i = C · Δu/Δt. Je höher die Frequenz, desto schneller ändert sich die Spannung und desto größer der Strom. Der Blindwiderstand X_C = 1 / (2π · f · C) sinkt also mit der Frequenz. Der Strom eilt der Spannung dabei um 90° voraus.',
 ['Gleichspannung: einmal laden, dann sperrt er','Wechselspannung: ständiges Umladen, Strom in der Zuleitung','i = C · Δu/Δt, höhere Frequenz → größerer Strom','X_C = 1 / (2π · f · C), Strom eilt 90° vor']]
);
