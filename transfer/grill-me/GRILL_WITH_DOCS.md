# GRILL_WITH_DOCS – Anleitung für dokumentengestützte Prüfungen

Stand: 22.10.2026

> **Klarstellung:** In Markus' Umgebung gibt es **keinen** Skill namens „Grill with Docs“ (geprüft am 22.10.2026 über die Skill-Liste und die Skill-Suche, kein Treffer). Diese Anleitung ist der funktionale Ersatz. Sie ist im Skill `grill-me` (Abschnitt 4) eingebaut und hier ausführlicher beschrieben. Aufruf: „Grill with Docs: …“ oder „Grill-Me mit Dokumentprüfung“.

## 1. Werkzeuge, die dafür tatsächlich zur Verfügung stehen

| Werkzeug | Wofür | Voraussetzung |
|---|---|---|
| Dateien lesen und durchsuchen (Read, Grep, Glob) | Projektordner `/mnt/project-files/` und Repo-Dateien | Dateien liegen im Projekt bzw. Repo ist geklont |
| Repo lesen (`git clone`, GitHub-Werkzeuge) | Code als stärkster Beleg für Funktionen | Repo in der Sitzung freigeschaltet |
| Artifact lesen | Gutachten-Seiten auf claude.ai | Link liegt vor |
| Claude Docs lesen | Berichte als Claude Doc | Docs-Connector verfügbar |
| Projekt-Memory | frühere Entscheidungen, Versionen | Memory im Projekt vorhanden |
| Websuche | externe Fakten (Gesetze, Marktzahlen) | nur mit Quellenangabe verwenden |

Nicht nötig und nicht vorgesehen: Unteragenten oder „deep-research“, außer Markus wünscht es ausdrücklich (kostet viel Zeit und Tokens).

## 2. Ablauf einer Dokumentprüfung

1. **Bestand aufnehmen.** Liste aller relevanten Dateien mit `Stand:`-Datum. Fehlende Pflichtdateien benennen und anfordern.
2. **Behauptung festlegen.** Eine Aussage pro Prüfung, zum Beispiel „Das Lernlabor ist am Handy gut bedienbar“ oder eine Aussage, die Markus gerade im Interview gemacht hat.
3. **Gezielt suchen.** Stichwörter statt Volltext lesen. Beispiele:
   - Lernerfolg: `Erfolg`, `2/3`, `zwei Drittel`, `Umfrage`, `Mathe-Check`
   - Technik: `Tests`, `check.js`, `sw.js`, `Version`, `APPV`
   - Recht: `Impressum`, `Datenschutz`, `MAIL`, `Lernfortschritt senden`, `ADR 002`
   - Geld: `Lizenz`, `Preis`, `Träger`, `Einmalkauf`
   - Gutachten: `A-Befund`, `Note`, `offen`, `umgesetzt`
4. **Belegen.** Fundstelle als `Datei, Abschnitt (Stand)` oder `Datei:Zeile`. Wörtlich zitieren nur, was in dieser Sitzung gelesen wurde.
5. **Abgleichen** mit Code (wenn verfügbar), neueren Dateien, Memory und Gutachten.
6. **Einordnen** mit den Etiketten `[Fakt]`, `[Dok]`, `[Entscheidung]`, `[Annahme]`, `[Hypothese]`, `[Meinung]`, `[Bewertung]`, `[Beleg fehlt]`.
7. **Frage stellen.** Ergebnis als eine Frage an Markus: „In A steht …, in B steht …. Was gilt?“

## 3. Aktualität: Was gilt bei Widerspruch?

1. Aktuelle Aussage von Markus im Gespräch (mit Datum festhalten)
2. Code bzw. Live-Version (Versionsnummer nennen)
3. Neueste Projektdatei (nach `Stand:`) und Projekt-Memory
4. Ältere Projektdatei (als „veraltet, Stand …“ kennzeichnen)
5. Gutachten (Meinung, Stand der begutachteten Version beachten)
6. Ideenlisten, Entwürfe (keine Belege für Vorhandenes)

Eine ältere Datei, die einer neueren widerspricht, ist ein Befund „Dokumentation veraltet“, kein Produktfehler. Ob sie aktualisiert wird, entscheidet Markus.

## 4. Widerspruchstabelle

| Nr. | Aussage A (Quelle, Stand) | Aussage B (Quelle, Stand) | gilt vermutlich | Frage an Markus |
|---|---|---|---|---|
| W1 | „rund 50 Themen“, „keine neuen Themen vor dem Pilot“ (`docs/PRD.md`, `docs/ROADMAP.md`, 19.10.2026) | 116 Themen live (`docs/START-PROMPT.md`, 22.10.2026) | B | Ist die Regel „keine neuen Themen“ aufgehoben? |
| W2 | „Keine automatischen Tests“, Cache `lernlabor-v30`, Schrift von Google (`docs/TECHNIK.md`, 19.10.2026) | `tests/check.js` mit CI, Schrift lokal (`START-PROMPT.md`, 22.10.2026) | B | TECHNIK.md aktualisieren oder als veraltet markieren? |
| W3 | „nichts davon ist umgesetzt“ (`docs/IDEEN-FUNKTIONEN.md`, 20.10.2026) | Mathe-Check, Kalenderdatei, Kursübersicht live (Memory, START-PROMPT) | B | Welche Ideen sind erledigt, welche verworfen? |
| W4 | Meisterlabor „erst nach dem Pilot“ (`docs/PRD.md`, 19.10.2026) | Meisterlabor Version 4 live (Memory 22.10.2026) | B | Ist das eine bewusste Planänderung? Was bedeutet sie für das Zeitbudget? |
| W5 | Zeitbudget 5–7 h/Woche (`CONTEXT.md`, `GESCHAEFTSMODELL.md`) | Reaktionszeit 3 Werktage, sehr viele Änderungen seit 19.10. (Memory) | offen | Ist das Zeitbudget im Pilot realistisch? |

Diese Einträge sind Startpunkte vom 22.10.2026. Vor jeder Nutzung prüfen, ob sie noch zutreffen.

## 5. Ausgabeformat je Feststellung

```
Feststellung: …
Die Dokumente sagen: … [Dok] (Datei, Abschnitt, Stand)
Der Code zeigt: … [Fakt] (Datei:Zeile, Version) | nicht geprüft
Bewertung: … [Bewertung]
Beleg fehlt für: …
Frage an Markus: …
```

## 6. Ohne Zugriff auf die bisherigen Dateien

Läuft die Prüfung in einer neuen Umgebung ohne Projektordner:
1. Zuerst sagen, welche Dateien fehlen (Pflichtliste in `SETUP_NEW_PROJECT.md`).
2. Markus bitten, sie hochzuladen, das Repo freizuschalten oder Inhalte einzufügen.
3. Bis dahin nur Fragen stellen, die keine Belege brauchen (z. B. Zielgruppe, Zeitbudget), und jede Produktaussage als `[Beleg fehlt]` führen.
4. Keine Fundstellen nennen, die nicht gelesen wurden.

## 7. Verbote

- Keine erfundenen Zitate, Zeilennummern, Studien, Benchmarks, Nutzerzahlen.
- Keine Gutachten-Note als Messwert darstellen.
- Keine Funktion als vorhanden darstellen, die nur in einer Ideenliste oder einem Entwurf steht.
- Keine Änderung an Projektdateien außer Register und Bericht.
