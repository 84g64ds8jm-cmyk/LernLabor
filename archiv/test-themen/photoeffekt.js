/* Aufgaben für das Test-Thema „Photoeffekt“ (nicht in der App, siehe README.md). Stufe in LVT "num": "Photoeffekt":2 */
MCQ.push(
['Photoeffekt','Was passiert, wenn rotes Licht auf Zink fällt, egal wie hell?',['Es werden keine Elektronen ausgelöst','Es werden langsame Elektronen ausgelöst','Bei großer Helligkeit lösen sich Elektronen','Das Zink lädt sich positiv auf'],'Die Photonenenergie liegt unter der Austrittsarbeit von Zink (4,3 eV). Helligkeit ändert nur die Anzahl der Photonen.'],
['Photoeffekt','Was ändert eine größere Helligkeit über der Grenzfrequenz?',['Die Zahl der ausgelösten Elektronen','Die Geschwindigkeit der Elektronen','Die Grenzfrequenz','Die Austrittsarbeit'],'Mehr Photonen lösen mehr Elektronen aus. Ihre Energie hängt nur von der Frequenz ab.'],
['Photoeffekt','Wie lautet die Energiebilanz beim Photoeffekt?',['E_kin = h · f − W_A','E_kin = h · f + W_A','E_kin = W_A − h · f','E_kin = h / f'],'Ein Teil der Photonenenergie löst das Elektron (W_A), der Rest ist Bewegungsenergie.']);
Object.assign(GEN,{
'Photoeffekt':r=>{const l=rg(r,200,280,10),E=1240/l,x=E-4.3;return[`UV-Licht mit λ = ${l} nm fällt auf Zink (W_A = 4,3 eV). Wie groß ist die Bewegungsenergie der Elektronen in eV?`,x,'eV',['E_Photon = 1240 eV·nm / λ',`E_Photon = 1240 / ${l} = ${nf(E,3)} eV`,`E_kin = ${nf(E,3)} − 4,3 = ${nf(x,3)} eV`]]}});
FEH.push(
['Photoeffekt','Max meint: „Mit einer helleren Lampe fliegen die Elektronen schneller.“ Was ist richtig?',['Es fliegen mehr Elektronen, nicht schnellere.','Ja, die Elektronen werden schneller.','Hellere Lampen senken die Austrittsarbeit.','Bei hellerem Licht fliegen gar keine Elektronen.'],'Die Energie je Elektron hängt nur von der Frequenz ab: E_kin = h · f − W_A.']);
