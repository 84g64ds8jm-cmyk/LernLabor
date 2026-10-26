/* Aufgaben für das Test-Thema „LC-Schwingkreis“ (nicht in der App, siehe README.md). Stufe in LVT "num": "LC-Schwingkreis":3 */
MCQ.push(
['LC-Schwingkreis','Wo steckt die Energie eines Schwingkreises, wenn der Kondensator gerade leer ist?',['Im Magnetfeld der Spule','Sie ist verloren','Im Isolierstoff des Kondensators','In der Spannungsquelle'],'In diesem Moment ist der Strom am größten, die ganze Energie steckt im Magnetfeld: W = ½ · L · I².'],
['LC-Schwingkreis','Die Kapazität eines Schwingkreises wird vervierfacht. Wie ändert sich die Eigenfrequenz?',['Sie halbiert sich','Sie viertelt sich','Sie verdoppelt sich','Sie bleibt gleich'],'f₀ = 1 / (2π · √(L · C)): Wegen der Wurzel halbiert vierfaches C die Frequenz.'],
['LC-Schwingkreis','Warum klingt eine Schwingung im echten Schwingkreis ab?',['Der Widerstand wandelt Energie in Wärme um','Der Kondensator verliert seine Kapazität','Die Spule wird kleiner','Die Frequenz steigt dauernd'],'Leitungen und Spulendraht haben einen Widerstand. Bei jeder Schwingung geht dort Energie als Wärme verloren (Dämpfung).'],
['LC-Schwingkreis','Was gilt im Reihenschwingkreis bei Resonanz?',['X_L = X_C, der Strom ist am größten','X_L = 0','Der Strom ist null','Die Spannung an C ist null'],'X_L und X_C heben sich auf, nur R begrenzt den Strom. An L und C kann dabei eine sehr hohe Spannung liegen.']
);
Object.assign(GEN,{
'LC-Schwingkreis':r=>{const L=pk(r,[.1,.2,.5,1,2]),C=pk(r,[1,2.2,4.7,10,47]),f=1/(2*Math.PI*Math.sqrt(L*C*1e-6));
 return[`Ein Schwingkreis besteht aus L = ${nf(L)} H und C = ${nf(C)} µF. Wie groß ist die Eigenfrequenz f₀ in Hz?`,f,'Hz',['f₀ = 1 / (2π · √(L · C))',`L · C = ${nf(L)} H · ${nf(C)} · 10⁻⁶ F = ${nf(L*C,3)} · 10⁻⁶ s²`,`√(L · C) = ${nf(Math.sqrt(L*C*1e-6),3)} s`,`f₀ = 1 / (2π · ${nf(Math.sqrt(L*C*1e-6),3)} s) = ${nf(f,3)} Hz`]]}});
BEW.push(
['LC-Schwingkreis','b','Erkläre, wie in einem Schwingkreis aus Kondensator und Spule eine Schwingung entsteht und warum sie abklingt.',
 'Der geladene Kondensator entlädt sich über die Spule. Der Strom baut in der Spule ein Magnetfeld auf, die Energie wandert vom elektrischen ins magnetische Feld. Ist der Kondensator leer, hält die Spule den Strom aufrecht (Lenzsche Regel) und lädt den Kondensator mit umgekehrter Polung. Dann läuft der Vorgang rückwärts. Die Frequenz ist f₀ = 1 / (2π · √(L · C)). Der Widerstand von Draht und Spule wandelt bei jeder Schwingung Energie in Wärme, deshalb wird die Amplitude kleiner.',
 ['Kondensator entlädt sich über die Spule','Energie pendelt zwischen elektrischem und magnetischem Feld','Spule treibt den Strom weiter und lädt C umgekehrt','Widerstand wandelt Energie in Wärme, Schwingung klingt ab']]
);
FEH.push(
['LC-Schwingkreis','Anna verdoppelt L und C und erwartet die doppelte Frequenz. Was stimmt?',['Die Frequenz halbiert sich, denn L · C wird viermal so groß.','Die Frequenz verdoppelt sich.','Die Frequenz bleibt gleich.','Die Frequenz vervierfacht sich.'],'f₀ = 1 / (2π · √(L · C)). Größere Bauteile machen die Schwingung langsamer: √4 = 2, also halbe Frequenz.']
);
