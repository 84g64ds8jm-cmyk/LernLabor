/* Aufgaben für das Test-Thema „Chromatographie“ (nicht in der App, siehe README.md). Stufe in LVT "num": "Chromatographie":1 */
MCQ.push(
['Chromatographie','Wie berechnet man den R_f-Wert?',['Laufstrecke des Flecks / Laufstrecke der Front','Laufstrecke der Front / Laufstrecke des Flecks','Laufzeit / Laufstrecke','Fleckbreite / Papierbreite'],'R_f = Fleck / Front, beide ab der Startlinie gemessen. Er liegt immer zwischen 0 und 1.'],
['Chromatographie','Warum zieht man die Startlinie mit Bleistift?',['Graphit löst sich im Laufmittel nicht','Bleistift ist genauer','Kugelschreiber hält auf Papier nicht','Bleistift beschleunigt das Laufmittel'],'Tinte würde mitlaufen und das Ergebnis verfälschen.'],
['Chromatographie','Ein Farbstoff haftet stark am Papier. Was gilt für seinen R_f-Wert?',['Er ist klein','Er ist größer als 1','Er ist genau 1','Er ist negativ'],'Stark haftende Stoffe bleiben zurück und wandern kaum.']);
Object.assign(GEN,{
'Chromatographie':r=>{const F=rg(r,5,9,.5),b=rg(r,1,F-.5,.5),x=b/F;return[`Die Laufmittelfront ist ${nf(F)} cm, der Fleck ${nf(b)} cm von der Startlinie entfernt. Wie groß ist R_f?`,x,'',['R_f = Laufstrecke Fleck / Laufstrecke Front',`R_f = ${nf(b)} / ${nf(F)} = ${nf(x,3)}`]]}});
FEH.push(
['Chromatographie','Ein Schüler misst den Fleck ab Papierrand (5,5 cm) und die Front ab Startlinie (6 cm). Was ist falsch?',['Beide Strecken müssen ab der Startlinie gemessen werden.','Nichts, der R_f-Wert ist 0,92.','Die Front misst man ab Papierrand.','R_f ist Front / Fleck.'],'Sonst wird der R_f-Wert zu groß.']);
