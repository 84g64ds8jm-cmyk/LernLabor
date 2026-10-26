/* Aufgaben für das Test-Thema „Magnetisches Feld“ (nicht in der App, siehe README.md). Stufe in LVT "num": "Magnetisches Feld":2 */
MCQ.push(
['Magnetisches Feld','Was unterscheidet magnetische Feldlinien von elektrischen?',['Sie sind immer geschlossen, ohne Anfang und Ende','Sie zeigen von N nach S und enden dort','Sie sind immer gerade','Es gibt keinen Unterschied'],'Magnetische Feldlinien laufen außen von N nach S und im Magnet zurück. Elektrische beginnen auf + und enden auf −.'],
['Magnetisches Feld','Man bricht einen Stabmagnet in der Mitte durch. Was entsteht?',['Zwei Magnete mit je Nord- und Südpol','Ein reiner Nordpol und ein reiner Südpol','Zwei unmagnetische Stücke','Ein Magnet mit zwei Nordpolen'],'Einzelne Pole gibt es nicht. Jedes Stück hat wieder zwei Pole.'],
['Magnetisches Feld','Wie liegen die Feldlinien um einen geraden stromdurchflossenen Leiter?',['In konzentrischen Kreisen um den Leiter','Parallel zum Leiter','Radial vom Leiter weg','Es gibt kein Feld'],'Rechte-Hand-Regel: Daumen in Stromrichtung, die Finger zeigen den Umlaufsinn der Kreise.'],
['Magnetisches Feld','Was bewirkt ein Eisenkern in einer Spule?',['Das Feld wird um µ_r (hundert- bis tausendfach) stärker','Das Feld wird schwächer','Die Stromrichtung dreht sich um','Die Spule wird zum Kondensator'],'Eisen bündelt die Feldlinien. Ab etwa 1,6 T ist es gesättigt, mehr Strom bringt dann kaum mehr Feld.']
);
Object.assign(GEN,{
'Magnetisches Feld':r=>{if(r()<.5){const I=pk(r,[5,10,20,50,100]),d=pk(r,[1,2,5,10]),B=4e-7*Math.PI*I/(2*Math.PI*d/100);return[`Durch einen geraden Leiter fließen I = ${I} A. Wie groß ist die Flussdichte in µT im Abstand r = ${d} cm?`,B*1e6,'µT',['B = µ₀ · I / (2π · r)',`B = 1,257 · 10⁻⁶ · ${I} / (2π · ${nf(d/100,3)}) T`,`B = ${nf(B*1e6,4)} µT`]]}
 const N=pk(r,[100,200,500,1000]),I=pk(r,[1,2,5,10]),l=pk(r,[10,20,50]),B=4e-7*Math.PI*N*I/(l/100);return[`Eine Luftspule hat N = ${N} Windungen auf l = ${l} cm Länge, es fließen I = ${I} A. Wie groß ist B innen in mT?`,B*1e3,'mT',['B = µ₀ · N · I / l',`B = 1,257 · 10⁻⁶ · ${N} · ${I} / ${nf(l/100,3)} T`,`B = ${nf(B*1e3,4)} mT`]]}});
FEH.push(
['Magnetisches Feld','Ein Kollege legt den Kompass neben eine Stromschiene, um Norden zu finden. Warum klappt das nicht?',['Die Schiene erzeugt ein eigenes Magnetfeld, das das Erdfeld überdeckt.','Kompasse funktionieren nur im Freien.','Stromschienen sind aus Kupfer und schirmen den Kompass ab.','Das klappt, Strom hat kein Magnetfeld.'],'Jeder Strom erzeugt ein Magnetfeld. Bei 100 A in 5 cm Abstand sind es 400 µT, achtmal das Erdfeld.']
);
BEW.push(
['Magnetisches Feld','b','Ein Lasthebemagnet hebt ein Blechpaket. Erkläre, wie sein Magnetfeld entsteht, warum der Eisenkern so wichtig ist und was beim Abschalten des Stroms passiert.',
 'Im Hebemagnet fließt Strom durch eine Spule mit vielen Windungen. Jeder Strom erzeugt ein Magnetfeld, in der Spule addieren sich die Felder der Windungen: B = μ₀ · μ_r · N · I / l. Der Eisenkern hat ein sehr großes μ_r und verstärkt das Feld um das Hundert- bis Tausendfache, er bündelt die Feldlinien zum Blech. Wird der Strom abgeschaltet, bricht das Feld zusammen und die Last fällt; ein kleiner Restmagnetismus kann das Blech kurz halten. Deshalb haben Hebemagnete Sicherheitsvorschriften gegen Stromausfall.',
 ['Strom in der Spule erzeugt das Feld','Windungen addieren sich: B ∝ N · I / l','Eisenkern mit großem μ_r verstärkt und bündelt','Ohne Strom kein Feld, Last fällt']]
);
