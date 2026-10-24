# Archiv: Aufgaben zur Differential- und Integralrechnung

Seit v121 (24.10.2026) stehen in Mathematik die Themen „Ableitung: Steigung & Tangente“ und „Integral: Fläche unter dem Graphen“ als Simulationen zum Anschauen in der App.
Die dazu erstellten Übungs- und Prüfungsaufgaben sind auf Wunsch von Markus nicht in der App, weil das Thema über den NTG-Kurs hinausgeht. Sie liegen hier für später.
Der Ordner `archiv/` wird von GitHub Pages nicht ausgeliefert (`_config.yml`, exclude).

## Inhalt von `aufgaben.js`

1. Übungen `GEN` (je 6 Aufgabenarten), Mehrschritt-Aufgaben `STEPS` (Kurvenuntersuchung, Stapler aus dem v-t-Diagramm), 12 Ankreuzfragen `MCQ`, 2 Fragen für die mündliche Prüfung `ORAL`.
2. „Passt das?“-Hinweise im Lösungsweg (`PLAUS`).
3. Sechs Aufgaben „Typische Fehler üben“ (`FEH`).

Der Code nutzt die Helfer aus dem Themenblock in `index.html` (`DFN`, `INN`, `dP`, `dP1`, `dFx`, `dF1x`, `dF2x`, `dFFx`, `dn`) sowie `pk`, `rg`, `nf`.

## Wieder einbauen

1. Die ganze Datei in `index.html` direkt nach dem Ende des Arrays `const FEH=[ … ];` einfügen (alle drei Abschnitte sind gültiges JavaScript und hängen sich mit `Object.assign` bzw. `push` an).
2. In `LVT` (Stufen) bei `"num"` und `"steps"` je `"Ableitung: Steigung & Tangente":2,"Integral: Fläche unter dem Graphen":2` eintragen.
3. `APPV`, `sw.js` und `NEWS` hochzählen, `node tests/check.js` laufen lassen. Mit eingefügtem Archiv ist das Prüfskript am 24.10.2026 grün gelaufen (10 480 Aufgaben).
