/* Aufgaben für das Test-Thema „Licht: Wellenlänge & Farbe“ (nicht in der App, siehe README.md). Stufe in LVT "num": "Licht: Wellenlänge & Farbe":2 */
MCQ.push(
['Licht: Wellenlänge & Farbe','Welches Licht hat die größte Photonenenergie?',['Violett','Rot','Gelb','Grün'],'E = h · c / λ: kürzeste Wellenlänge, größte Energie.'],
['Licht: Wellenlänge & Farbe','Grünes Licht hat 550 nm. Wie groß ist etwa die Frequenz?',['5,5 · 10¹⁴ Hz','5,5 · 10⁸ Hz','1,8 · 10⁻¹⁵ Hz','550 Hz'],'f = c / λ = 3 · 10⁸ m/s / 5,5 · 10⁻⁷ m ≈ 5,5 · 10¹⁴ Hz.'],
['Licht: Wellenlänge & Farbe','Was liegt unterhalb von 380 nm?',['Ultraviolett','Infrarot','Mikrowellen','Rotes Licht'],'Kürzer als Violett ist Ultraviolett, länger als Rot ist Infrarot.']);
Object.assign(GEN,{
'Licht: Wellenlänge & Farbe':r=>{const l=rg(r,400,700,10),f=3e8/(l*1e-9)/1e14;return[`Licht hat die Wellenlänge λ = ${l} nm. Wie groß ist die Frequenz in 10¹⁴ Hz (c = 3 · 10⁸ m/s)?`,f,'· 10¹⁴ Hz',['f = c / λ',`λ = ${l} · 10⁻⁹ m`,`f = 3 · 10⁸ / (${l} · 10⁻⁹) Hz = ${nf(f,3)} · 10¹⁴ Hz`]]}});
FEH.push(
['Licht: Wellenlänge & Farbe','Jana rechnet f = c / λ mit λ = 500 und erhält 6 · 10⁵ Hz. Was hat sie vergessen?',['nm in m umzurechnen: 500 nm = 5 · 10⁻⁷ m, f = 6 · 10¹⁴ Hz.','c in km/s einzusetzen.','Mit λ zu multiplizieren.','Nichts, das Ergebnis stimmt.'],'Wellenlängen in nm immer mit 10⁻⁹ in Meter umrechnen.']);
