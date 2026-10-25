/* Aufgaben für das Test-Thema „Photometrie (Lambert-Beer)“ (nicht in der App, siehe README.md). Stufe in LVT "num": "Photometrie (Lambert-Beer)":2 */
MCQ.push(
['Photometrie (Lambert-Beer)','Wovon hängt die Extinktion A nach Lambert-Beer ab?',['Von Konzentration, Schichtdicke und Stoff (ε)','Nur von der Lampenhelligkeit','Nur von der Temperatur','Von der Masse der Küvette'],'A = ε · c · d. ε hängt vom Stoff und von der Wellenlänge ab.'],
['Photometrie (Lambert-Beer)','Bei welcher Lichtfarbe misst man eine violette KMnO₄-Lösung am besten?',['Grün','Violett','Rot','Weiß'],'Violette Lösungen schlucken die Komplementärfarbe Grün. Dort ist ε am größten.'],
['Photometrie (Lambert-Beer)','Die Extinktion beträgt A = 1. Wie viel Licht kommt durch?',['10 %','1 %','90 %','50 %'],'I / I₀ = 10^(−A) = 10^(−1) = 0,1.'],
['Photometrie (Lambert-Beer)','Wozu misst man Eichlösungen?',['Um eine Kalibriergerade für unbekannte Proben zu erhalten','Um die Lampe zu kühlen','Um die Küvette zu reinigen','Um die Wellenlänge zu ändern'],'Aus den Messwerten bekannter Konzentrationen entsteht die Gerade A(c), an der man die Probe abliest.']);
Object.assign(GEN,{
'Photometrie (Lambert-Beer)':r=>{const A=rg(r,.2,1,.05),d=pk(r,[1,2]),c=A/(2400*d)*1000;return[`Eine KMnO₄-Lösung zeigt bei 525 nm die Extinktion A = ${nf(A)} in einer Küvette mit d = ${d} cm (ε = 2400 l/(mol·cm)). Wie groß ist c in mmol/l?`,c,'mmol/l',['A = ε · c · d','c = A / (ε · d)',`c = ${nf(A)} / (2400 · ${d}) mol/l = ${nf(c,3)} mmol/l`]]}});
FEH.push(
['Photometrie (Lambert-Beer)','Eine Probe zeigt A = 2,5, die Kalibriergerade reicht bis A = 1. Der Kollege rechnet trotzdem linear weiter. Was ist besser?',['Die Probe verdünnen und erneut messen.','Die Lampe heller stellen.','Eine kürzere Wellenlänge wählen und weiterrechnen.','Den Wert halbieren.'],'Außerhalb des Kalibrierbereichs ist der lineare Zusammenhang nicht gesichert.']);
