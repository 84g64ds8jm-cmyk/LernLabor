/* Aufgaben für das Test-Thema „Lorentzkraft & Induktion“ (nicht in der App, siehe README.md). Stufe in LVT "num": "Lorentzkraft & Induktion":3 */
MCQ.push(
['Lorentzkraft & Induktion','Wovon hängt die Kraft auf einen stromdurchflossenen Leiter im Magnetfeld ab?',['Von B, I und der Leiterlänge im Feld','Nur vom Strom','Nur vom Magnetfeld','Von der Spannung am Leiter'],'F = B · I · l. Die Kraft steht senkrecht auf Strom und Feld.'],
['Lorentzkraft & Induktion','Der Strom im Leiter wird umgepolt. Was passiert mit der Lorentzkraft?',['Sie kehrt ihre Richtung um','Sie bleibt gleich','Sie wird null','Sie verdoppelt sich'],'Mit der Stromrichtung dreht sich auch die Kraftrichtung um (Drei-Finger-Regel).'],
['Lorentzkraft & Induktion','Ein Magnet liegt ruhig in einer Spule. Welche Spannung wird induziert?',['Keine, es fehlt die Flussänderung','Eine konstante Spannung','Eine Wechselspannung','Das hängt von der Windungszahl ab'],'u = N · ΔΦ / Δt: Ohne Änderung des Flusses keine Spannung, egal wie stark der Magnet ist.'],
['Lorentzkraft & Induktion','Wozu dient der Kommutator im Gleichstrommotor?',['Er polt die Spule alle halbe Umdrehung um, damit die Drehung weitergeht','Er erhöht die Spannung','Er kühlt den Motor','Er misst die Drehzahl'],'Ohne Umpolen würde die Schleife nur in die Ruhelage pendeln.'],
['Lorentzkraft & Induktion','Ein Generator mit einem Polpaar dreht mit 3000 1/min. Welche Frequenz hat die Spannung?',['50 Hz','3000 Hz','60 Hz','25 Hz'],'f = n / 60 = 3000 / 60 = 50 Hz. Deshalb laufen Kraftwerksgeneratoren mit 3000 1/min.']
);
Object.assign(GEN,{
'Lorentzkraft & Induktion':r=>{if(r()<.5){const B=pk(r,[.2,.5,.8,1]),I=pk(r,[2,5,10,20]),l=pk(r,[5,10,20,30]),F=B*I*l/100;return[`Ein Leiter mit l = ${l} cm im Feld liegt quer zu B = ${nf(B)} T, es fließen I = ${I} A. Wie groß ist die Kraft in N?`,F,'N',['F = B · I · l',`F = ${nf(B)} T · ${I} A · ${nf(l/100,3)} m = ${nf(F,4)} N`]]}
 const N=pk(r,[50,100,200,500]),dPhi=pk(r,[1,2,5,10]),dt=pk(r,[10,20,50,100]),u=N*dPhi*1e-3/(dt*1e-3);return[`In einer Spule mit N = ${N} Windungen ändert sich der Fluss um ΔΦ = ${dPhi} mWb in Δt = ${dt} ms. Welche Spannung wird induziert (in V)?`,u,'V',['u = N · ΔΦ / Δt',`u = ${N} · ${dPhi} · 10⁻³ Wb / (${dt} · 10⁻³ s)`,`u = ${nf(u,4)} V`]]}});
BEW.push(
['Lorentzkraft & Induktion','b','Erkläre, warum ein Gleichstrommotor sich dreht, und was der Kommutator dabei leistet.',
 'In der Leiterschleife fließt oben und unten der Strom in entgegengesetzter Richtung. Im Magnetfeld wirkt auf jedes Leiterstück die Lorentzkraft F = B · I · l, oben in die eine, unten in die andere Richtung. Beide Kräfte bilden ein Drehmoment, die Schleife dreht sich. Nach einer halben Umdrehung würden die Kräfte zurückdrehen. Der Kommutator polt in diesem Moment den Strom um, so dass das Drehmoment immer in dieselbe Richtung wirkt.',
 ['Lorentzkraft auf stromdurchflossene Leiter im Magnetfeld','Entgegengesetzte Ströme oben und unten, entgegengesetzte Kräfte','Kräftepaar erzeugt Drehmoment','Kommutator polt alle halbe Umdrehung um']]
);
FEH.push(
['Lorentzkraft & Induktion','Ben bestimmt die Kraftrichtung mit der linken Hand und der technischen Stromrichtung. Was ist falsch?',['Mit technischer Stromrichtung gilt die rechte Hand.','Nichts, beide Hände ergeben dasselbe.','Man braucht gar keine Hand, die Kraft zeigt immer nach oben.','Die linke Hand gilt nur für Wechselstrom.'],'Rechte Hand: Daumen I (+ → −), Zeigefinger B (N → S), Mittelfinger F. Die linke Hand passt zur Elektronenrichtung.'],
['Lorentzkraft & Induktion','Lea schiebt den Magnet langsam in die Spule und wundert sich über die kleine Spannung. Was hilft?',['Schneller bewegen oder mehr Windungen, die Spannung hängt von ΔΦ/Δt und N ab.','Den Magnet länger in der Spule liegen lassen.','Die Spule aus dickerem Draht wickeln.','Die Spule mit Gleichspannung vorladen.'],'u = N · ΔΦ / Δt: Nur die Geschwindigkeit der Änderung und die Windungszahl zählen.']
);
