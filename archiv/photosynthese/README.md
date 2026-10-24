# Archiv: Thema „Photosynthese“

Das Thema stand von v66 bis v119 im Fach Chemie als eigener Bereich „Photosynthese“.
In v120 (24.10.2026) wurde es auf Wunsch von Markus vorerst aus der App genommen und hier als Beispiel aufbewahrt.
Der Ordner `archiv/` wird von GitHub Pages nicht ausgeliefert (`_config.yml`, exclude).

## Inhalt von `photosynthese.js`

Der Code ist unverändert aus `index.html` v119 kopiert, in vier Abschnitten:

1. Hauptblock: Konstanten (`PSG`, `PSA`, `PSV`), Zeichenhelfer (`psAt`, `psBd`, `psCO2`, `psH2O`, `psO2`, `psGlu`, `psEq`), Modell `psR` (Minimumgesetz), Gleichungsanimation `PSEQ`, das Thema `fm(FC,PSG,'Photosynthese',…)` mit den Ansichten „Blatt“ und „Gleichung“ und den Reglern Licht, CO₂ und Zucker, außerdem `FX`, Übungen `GEN`, Mehrschritt-Aufgabe `STEPS` (Buche), 8 Ankreuzfragen `MCQ` und 2 mündliche Fragen `ORAL`.
2. `ERK` und `BET` (Erklärung, typische Fehler, Betriebsbezug).
3. Drei Aufgaben „Typische Fehler üben“.
4. Formelkarte „Photosynthese und Zellatmung“ für die Formelsammlung.

## Wieder einbauen

1. Abschnitt 1 in `index.html` direkt nach dem Block der Mathe-`ORAL`-Fragen zur Bruchrechnung einfügen, vor `/* ===== Funktionen: Gerade & Parabel …`. Er braucht `BALL`, `TH`, `T`, `ORD`, `FC`, `fm`, `GEN`, `STEPS`, `MCQ`, `ORAL`.
2. Abschnitt 2 nach `BET['Bruchrechnung']` einfügen (`ERK` ist vorher noch nicht definiert).
3. Abschnitt 3 ans Ende des Arrays der typischen Fehler (nach den Einträgen „Messreihe auswerten“), Abschnitt 4 in das Array der Formelkarten nach der Gruppe `[FC,WH,[…]]`. Auf die Kommas an den Array-Enden achten.
4. In `LVT` (Stufen) bei `"num"` und `"steps"` wieder `"Photosynthese":2` eintragen.
5. In `index.html` den Namen aus `OFFT` (bei `memGet`) streichen. Dort wird der alte Lernstand zum Thema seit v120 unter `ll_mem.off` beiseitegelegt; beim Streichen `m.off['Photosynthese']` zurück nach `m.t` holen, wenn er erhalten bleiben soll.
6. `APPV`, `sw.js` und `NEWS` hochzählen, `node tests/check.js` laufen lassen.
