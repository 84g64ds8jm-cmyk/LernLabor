# Archiv: Aufgaben der Test-Themen

Themen mit dem Abzeichen „Test“ (`test:1` im Thema) stehen als Simulation, Verstehen-Box, Formeln und Glossar in der App,
ihre Aufgaben aber nicht (Wunsch von Markus, 25.10.2026). Die Aufgaben liegen hier, damit die Freischaltung später schnell geht.
Der Ordner `archiv/` wird von GitHub Pages nicht ausgeliefert (`_config.yml`, exclude).

## Dateiformat (eine Datei je Thema, `<kurzname>.js`)

Erste Zeile ein Kommentar mit der Stufe, danach gültiges JavaScript, das sich an die Listen in `index.html` anhängt:

```js
/* Aufgaben für das Test-Thema „Thema“ (nicht in der App, siehe README.md). Stufe in LVT "num": "Thema":2 */
MCQ.push( [...], [...] );            // Ankreuzfragen
BEW.push( [...] );                   // Begründen & Skizzieren
Object.assign(GEN,{ 'Thema':r=>{…} });   // Übungen mit Rechnung
Object.assign(STEPS,{ … });          // Mehrschritt-Aufgaben (falls vorhanden)
FEH.push( [...] );                   // Typische Fehler üben
ORAL.push( {...} );                  // Mündlich (falls vorhanden)
```

Nicht hierher gehören: Simulation (`M.push`), Formeln (`FX`), Verstehen (`ERK`), Im Betrieb (`BET`), Glossar (`GLB`). Die bleiben in der App.

## Inhalt (Stand v167)

| Datei | Thema | Ankreuz | Begründen | Rechnen | Fehler |
|---|---|---|---|---|---|
| chromatographie.js | Chromatographie | 3 | – | 1 | 1 |
| doppelspalt.js | Doppelspalt: Welle oder Teilchen | 3 | – | 1 | 1 |
| dualismus.js | Welle-Teilchen-Dualismus | 3 | – | 1 | 1 |
| grundreaktionen.js | Chemische Grundreaktionen | 12 | 1 | 1 | – |
| haber-bosch.js | Haber-Bosch-Verfahren | 4 | – | 1 | – |
| konzentration.js | Konzentration & Verdünnung | 4 | – | 1 | 2 |
| kunststoffe.js | Kunststoffe: Ketten und Netze | 4 | – | – | – |
| licht-farbe.js | Licht: Wellenlänge & Farbe | 3 | – | 1 | 1 |
| mikroskopie.js | Mikroskopie | 7 | 1 | 1 | 2 |
| orbitalmodell.js | Orbitalmodell & Mehrfachbindungen | 9 | 1 | 1 | – |
| photoeffekt.js | Photoeffekt | 3 | – | 1 | 1 |
| photometrie.js | Photometrie (Lambert-Beer) | 4 | – | 1 | 1 |
| spektroskopie.js | Spektroskopie & Flammenfärbung | 4 | – | 1 | 1 |
| tenside.js | Tenside & Grenzflächen | 5 | 1 | – | 2 |

Differential- und Integralrechnung liegt weiter in `archiv/differential-integral/`.

## Freischalten

1. `python3 archiv/test-themen/freischalten.py tenside` (fügt die Datei an der Markierung `/* TEST-THEMEN: … */` in `index.html` ein und trägt die Stufe ein).
2. Datei in `archiv/test-themen/` löschen, Tabelle oben anpassen.
3. Wenn das Thema für alle gedacht ist: `test:1` beim Thema entfernen (Abzeichen weg).
4. `APPV`, `NEWS`, `sw.js` hochzählen, `node tests/check.js` laufen lassen.

Prüfung am 25.10.2026: Mit allen Dateien eingebaut läuft das Prüfskript grün.
