# PROJECT_CONTEXT: LERNLABOR

Stand: 22.10.2026, geprüft gegen `main` = **Version 94** (Commit 6f4eb9e, PR #60; v94 änderte gegenüber v93 nur die Reihenfolge im Reiter Prüfen). Zählungen wurden an v93 gemacht, das Prüfskript lief auf v93 und v94.
Erstellt als Übergabe für das neue Claude-Projekt „Lernlabor V3“.

Dieses Dokument beschreibt **was LERNLABOR ist, wie es technisch gebaut ist und wie ein neues Claude-Projekt damit arbeiten soll**.
Die anderen vier Dokumente ergänzen es ohne Wiederholung:

| Dokument | Inhalt |
|---|---|
| [USAGE_AND_UX.md](USAGE_AND_UX.md) | Funktionen (implementiert / Konzept / Idee), Nutzerabläufe, Branding, Gestaltung |
| [EXPERT_REVIEW.md](EXPERT_REVIEW.md) | Alle simulierten Gutachten einzeln, Originalaufträge, Synthese, Umsetzungsstand |
| [PROJECT_DECISIONS.md](PROJECT_DECISIONS.md) | Entscheidungen mit Begründung, verworfene Alternativen, Versionsverlauf |
| [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md) | Fakten, Annahmen, Widersprüche, offene Fragen, Top 5 |

Kennzeichnung in allen Dokumenten: **[Code]** = im Quellcode v93/v94 nachgesehen, **[Test]** = in dieser Sitzung ausgeführt, **[Doku]** = steht in Projektunterlagen, **[Gedächtnis]** = nur im Projektgedächtnis belegt, **[Annahme]** = nicht belegt.

---

## A. Projektüberblick

### Name, Zweck, Eigentümer
- **LERNLABOR**, Slogan **„Verstehen. Anwenden. Bestehen.“** [Code: steht zweimal in index.html]
- Lern-App für das Prüfungsfach **NTG** (Naturwissenschaftlich-technische Gesetzmäßigkeiten) der **IHK-Industriemeister-Basisqualifikation**.
- Eigentümer und einziger fachlicher Autor: **Dr. rer. nat. Markus Baum**, freiberuflicher Dozent für NTG. Alle Code-Arbeit bisher durch Claude-Sitzungen.
- Schwesterprodukt **Meisterlabor Basis** für die übrigen vier BQ-Fächer (ReHa, BeHa, MIKP, ZiB), technisch getrennt (siehe unten).

### Problem, das die App löst
Belegt durch Markus' eigene Problemliste für den Pitch (Projektchat 20.10.2026) und CONTEXT.md:
1. Teilnehmende arbeiten zwischen den Kursterminen nicht mit und machen keine Aufgaben. Zwischen zwei NTG-Samstagen liegen 3 bis 15 Wochen [Code: KURS0].
2. Sie schätzen ihren Lernaufwand falsch ein.
3. Mathe-Grundlagen fehlen (Umstellen, Einheiten, Prozent, Brüche).
4. „Trockene“ Formeln werden nicht verstanden.

Kernnutzen laut PRD [Doku, entschieden 19.10.2026]: **unbegrenzt üben mit Zufallswerten und Rechenweg in Schritten, dazu Simulationen, die zeigen, was in der Formel passiert.**

### Zielgruppen und Nutzungssituation
| Gruppe | Situation | Status |
|---|---|---|
| Teilnehmende von Markus' eigenem NTG-Kurs (IM TZ 11/2026, Regenstauf) | Teilzeit, oft Schichtarbeit, 19 bis 55 Jahre, technische Erstausbildung, lernen vor allem am Handy in Pausen | Erste Zielgruppe, Pilot ab November 2026 [Doku] |
| Markus als Dozent | Dozentenversion mit Kursübersicht, eigene Aufgaben, Kurslink | Implementiert [Code] |
| Andere Dozenten und Bildungsträger | Lizenzkunde | Frühestens nach der Zwischenauswertung des Pilots [Doku] |
| Einzelne Prüflinge ohne Kurs | Selbstlerner | Nicht im Fokus, kein Abo (ADR 001) |

Kursrealität: überwiegend Muttersprachler, einige mit Deutsch als Zweitsprache [Doku DIDAKTIK.md]. Geräte gemischt, **das Handy ist der kritische Fall** [Doku].

Kurstermine NTG laut Stundenplan [Gedächtnis kurs-2026, im Code KURS0]: 28.11.2026, 16.01., 23.01., 27.02., 20.03., 05.06., 19.06., 10.07., 02.10.2027 (Einheiten 1 bis 9), 16.10.2027 Prüfungsvorbereitung, BQ-Prüfung 21./22.10.2027. Kursstart insgesamt 07.11.2026.

### Positionierung und Alleinstellungsmerkmale
Positionierungssatz aus dem Marktvergleich (21.10.2026): **„Das NTG-Rechentraining zum Kurs: unbegrenzt Aufgaben, jeder Rechenschritt erklärt, jede Formel zum Anfassen.“**

Im Marktvergleich (Web-Recherche, Anbieterangaben, nicht selbst getestet) kombinierte kein gefundenes Angebot:
- Simulationen mit Reglern + Zufallsaufgaben + Rechenweg + Fehlerdiagnose am Ergebnis,
- Kursanbindung (Hausaufgaben je Termin, Lernstand freiwillig an Dozent),
- ohne Konto, ohne Store, ohne Tracking, offline.

Ehrliche Lücken laut Marktvergleich: kleinerer Fragenpool als Quiz-Apps (500 bis 2.900 Fragen), nur NTG, keine Store-Präsenz, keine Videos, keine adaptive Wiederholung nach Fehlern.

### Entwicklungsstand und Reifegrad (Einschätzung)
- **Inhaltlich breit und für den Pilot einsetzbar.** 7 Fächer, 116 Themen [Test]. Das letzte Fachgutachten (v86) sah keine Fehler mehr, „die Teilnehmende systematisch falsch lernen lassen“; die fünf A-Befunde wurden in v87 behoben [Code: NEWS-Text v87].
- **Technisch ein gut funktionierender Prototyp, kein wartbares Produkt.** Eine HTML-Datei mit 1,5 MB, Daten und Logik gemischt, ein Entwickler (Claude-Sitzungen), 94 Versionen in fünf Tagen (erster Commit 18.10.2026, v94 am 22.10.2026) [Code: Git-Log].
- **Nicht auf echten Geräten getestet** (alle Tests in Headless-Chromium). Nicht mit echten Nutzern getestet. Alle Gutachten sind von Claude simulierte Rollen, keine realen Personen (siehe EXPERT_REVIEW.md, Abschnitt „Grenzen“).
- Reifegrad für eine Träger-Lizenz laut Produkt-UX-Gutachten v58: 2,2 von 5; seitdem viel verbessert, aber Wartbarkeit (UI-Gutachten v86: Note 3,0) und Steuerbarkeit durch andere Dozenten (Dozentenbericht: 2,7) bleiben die Schwachstellen.

---

## C. Technische Architektur

### Technologien
Belegt durch Repo-Inhalt [Code]:

| Bestandteil | Technik | Größe / Stand |
|---|---|---|
| `index.html` | Eine Datei mit eingebettetem CSS und Vanilla-JavaScript, kein Framework, kein Build-Schritt | 1.500.728 Byte, 5.585 Zeilen (v94) |
| `sw.js` | Service Worker, cache-first, Cache-Name `lernlabor-v94` | 900 Byte |
| `manifest.webmanifest` | PWA-Manifest mit 4 Schnellzugriffen (#ueben, #hausaufgaben, #fehler, #simulation), maskierbares Icon | |
| `fonts/` | Schibsted Grotesk 400/600/800 als woff2, lokal (SIL OFL) | |
| Icons | icon-192/512, icon-maskable-512, apple-touch-icon | |
| `tests/check.js` | Playwright-Prüfskript | 10 KB |
| `.github/workflows/check.yml` | CI „Prüfskript“ bei jedem PR und Push auf main (Node 22, Playwright 1.56.1) | |

Kein Server, keine Datenbank, keine API, keine externen Laufzeit-Abhängigkeiten. In index.html stehen außer dem SVG-Namensraum keine externen URLs [Code: grep]. Kein `fetch()` im App-Code [Code].

### Hosting und Auslieferung
- GitHub Pages aus `main`: https://84g64ds8jm-cmyk.github.io/LernLabor/ [Doku]. Jeder Merge auf main ist sofort live.
- Repo `84g64ds8jm-cmyk/LernLabor`. Ließ sich in dieser Sitzung per `git clone` laden; ob es öffentlich ist, konnte per API nicht bestätigt werden (GitHub-API für diese Sitzung nicht freigeschaltet). Empfehlung im Projektgedächtnis: Repo privat mit GitHub Pro (erst Pro, dann privat, sonst fällt Pages aus). Umsetzung unbekannt.
- Update-Weg: neue index.html + höhere Version in `APPV` (index.html), `NEWS`-Text und Cache-Name in sw.js. Die App erkennt neue Versionen und zeigt „Jetzt laden“, während einer Prüfungssimulation erst danach [Doku UI-Gutachten v86, START-PROMPT].

### Architektur und Komponenten
Alles in index.html. Wichtige Datenstrukturen, gezählt per Playwright in v93 [Test]:

| Struktur | Inhalt | Anzahl |
|---|---|---|
| `M` | Themen (Simulation, Regler, Merkbox, Grundgleichungen) | 116 |
| `FA` | Fächer Physik, Chemie, Energie, Statistik, Mathematik, Sicherheit, Umrechnen | 7 |
| `GEN` | Übungsgeneratoren, liefern `[frage, antwort, einheit, schritte]` | 89 |
| `STEPS` | Mehrschrittaufgaben | 36 |
| `EXW` | Prüfungsaufgaben, optional Skizze `fig` | 111 |
| `MCQ` | Ankreuzfragen | 267 |
| `ORAL` | Mündliche Fragen mit Musterantwort | 115 |
| `FEH` | „Fehler finden“-Aufgaben | 348 |
| `BEW` | Begründen, Beurteilen, Skizzieren (neu v93) | 43 |
| `ERK` / `BET` | „Verstehen und typische Fehler“ / „Im Betrieb“ | 116 / 103 |
| `PRED`, `PRED2` / `PLAUS` | „Vermute zuerst“ / „Passt das?“ | 25+25 / 30 |
| `FX` | Formelkarten | 96 |
| `GL`, `GLU`, `GLA` | Glossar, Einheiten, Vergleich der Formelzeichen | 162, 40, 24 |
| `HW` | Hausaufgaben-Einheiten (Kapitel 1.1 bis 4) | 8 |
| `MCG` | Mathe-Check-Aufgabensätze | 5 |
| `KURS0` | Vorbelegter Kurskalender IM TZ 11/2026 | 1 Kurs |

Weitere Bausteine [Code/Gedächtnis]:
- **UX-Schicht** als eigener `<script>` am Ende, umhüllt `nav`, `build`, `render`, `homeView`, `renderQ` und setzt Hash-Routing mit Verlauf: `#thema/<slug>`, `#ueben`, `#fehler`, `#pruefung`, `#simulation`, `#lernstand`, `#hausaufgaben`, `#mathe-check`, `#glossar`, `#kurs/<Name>/<Daten>`, `#aufgaben/<base64>`. Seitentitel je Ansicht über `document.title`.
- **Grafik**: Inline-SVG per JavaScript, 3D-Helfer `BALL`, `ROD`, `GLAS`, `CUBE`, `TH`; Regeln in docs/GRAFIKSTIL-3D.md.
- **Text und Zahlen**: `subify` (Indizes wie F_G), `rootTxt`/`rootDraw` (Wurzelhaken), Bruch-Renderer bei „ / “ mit Leerzeichen, `fitAll()` (eigene Silbentrennung, Schriftverkleinerung), `nf()` (4 gültige Ziffern), `nfe()` (Geld, kaufmännisch seit v87), `hf`/`mcn` (Mathe-Check), `pnum()` (Eingabe mit Komma, Tausenderpunkt, ±). Prüftoleranz Standard 2 %.
- **Dozentenversion**: dieselbe index.html mit `const DOZENT=true`, Titel „Dozent · Lernlabor“, Schriften als base64. Liegt nur unter `/mnt/project-files/dozent/lernlabor_dozent.html`, **nie committen**, nach jedem Merge neu bauen: `python3 /mnt/project-files/dozent/build-dozent.py index.html /mnt/project-files/dozent/lernlabor_dozent.html`. Teilnehmerversion v94: `DOZENT=false` [Code].

### Datenmodell und Datenflüsse
**Speicherung nur im Browser (`localStorage`)** [Code]. 34 Schlüssel mit Präfix `ll_`, u. a.:
`ll_mem` (Lernstand je Thema, Wiederholungsplan), `ll_score`, `ll_hw` (Hausaufgaben), `ll_fehler` (Meine Fehler), `ll_simh` (Prüfungssimulationen), `ll_mc`/`ll_mcrun` (Mathe-Check), `ll_plan` (Lernplan), `ll_kurs`/`ll_kurs0` (Kurstermine), `ll_ident` (Name/Kürzel und Kurs für „Lernfortschritt senden“), `ll_notes`, `ll_fav`, `ll_pred`, `ll_view`/`ll_fs`/`ll_me` (Darstellung, Schriftgröße, Symbol), `ll_tour`/`ll_tips`, `ll_own` (Aufgaben vom Dozenten), `ll_sent` (Sende-Erinnerung). Nur Dozent: `ll_doz` (eingesammelte Stände), `ll_doztn` (Teilnehmerzahl). Dazu `ki-voice` (Vorlese-Einstellungen).

Datenflüsse, alle vom Nutzer ausgelöst:

```
Teilnehmer-Gerät                              Dozent (Markus)
localStorage ──Export──> JSON-Datei (Sicherung, Gerätewechsel)
localStorage ──"Lernfortschritt senden"──> Datei / Teilen-Menü / Text ──Mail──> Dozentenversion "Kursübersicht" (localStorage ll_doz)
                                                                            └─> "Auswertung an mich mailen" (HTML-Datei + mailto)
Dozent ──Kurslink #kurs/<Name>/<Daten>──> Teilnehmer: Kurstermine
Dozent ──Aufgabenlink #aufgaben/<base64>──> Teilnehmer: Einheit "Vom Dozenten" (ll_own)
Teilnehmer ──"Fehler melden"──> eigenes Mailprogramm (mailto mit Thema, Zufallswerten)
```

Folge (ADR 001): Nutzung ist nicht zentral messbar. Der Lernstand geht verloren, wenn der Browser die Daten löscht und kein Export existiert.

### KI-Modelle, Prompts, externe Dienste
- **KI-Code ist vorhanden, im Pilot aber unsichtbar** [Code]: Modul `KI` (Tutor, mündliche Prüfung, Bewertung von Freitext) ruft `window.claude.use('sample')` auf. Das gibt es nur, wenn die Datei als Claude-Artifact läuft (`KIOK`-Prüfung). Auf GitHub Pages ist die KI ausgeblendet (ADR 003).
- System-Prompt im Code (wörtlich): „Du bist ein erfahrener IHK-Prüfer und Dozent für die Industriemeister-Prüfung. Antworte immer auf Deutsch, duze die Person, sei fachlich korrekt und prüfungsnah. Rechtsstand: Oktober 2026. Wenn Du Dir bei Gesetzesstand, Paragrafen oder Zahlen nicht sicher bist, sage das klar. Antworte kompakt (höchstens ca. 200 Wörter), nutze bei Aufzählungen Spiegelstriche.“
- Ausgabe wird vor dem Einfügen HTML-maskiert (`E()` in `md()`), Warnhinweis „KI-Antworten können Fehler enthalten“ [Code].
- **Bewertung (kritisch):** Die KI ist mit echten Nutzern ungetestet [Doku KI.md]. Es gibt keine Wissensbasis (kein RAG), keine Testfälle für Antwortqualität oder Fairness der Prüfertypen, keine Kostenabschätzung. Die Zugangsfrage (Konto der Teilnehmenden bei einem KI-Anbieter) ist ungelöst. Für den Pilot ist das Ausblenden richtig. Eine spätere KI braucht zuerst einen Testplan mit festen Beispielantworten, Bezug auf die Merkbox des Themas und eine Entscheidung zum Zugang. Ein eigener KI-Server würde ADR 001 (kein Server) und den Datenschutz grundlegend ändern.
- **Vorlesen** nutzt `speechSynthesis` des Geräts (lokal). **Spracheingabe** (`SpeechRecognition`) hängt nur an den KI-Bereichen und ist damit im Pilot ebenfalls weg; in Chrome ginge die Aufnahme an Google [Doku KI.md].
- Keine weiteren externen Dienste. Hoster GitHub verarbeitet Zugriffsdaten (IP) [Doku RECHT-DATENSCHUTZ.md].

### Schnittstellen, Authentifizierung
- Keine Konten, keine Anmeldung, keine Zugriffskontrolle. Die Dozentenversion ist nur dadurch geschützt, dass sie nicht veröffentlicht wird.
- Der Pilot-Link ist offen weitergebbar (Entscheidung „Zugang schützen“, 20.10.2026; Zugangsschutz z. B. Cloudflare Access erst bei Träger-Lizenz) [Gedächtnis].
- Eingänge von außen: Import einer Lernstand-Datei, Kurslink, Aufgabenlink, eingesammelte Lernstände in der Dozentenversion. Alle werden geparst und vor der Anzeige maskiert (`rEsc`, `esc`, `ownClean` mit Längenbegrenzung) [Code, Stichprobe]. Ein präparierter Kurslink mit HTML im Namen blieb wirkungslos [Doku UI-Gutachten v86].

### Tests
- `node tests/check.js` öffnet die App in Chromium, ruft alle 89 Generatoren je 40-mal auf, öffnet alle 116 Themen und prüft u. a.: keine Seiten- oder Konsolenfehler, Geldrundung `nfe()`, Zahlenformat, reproduzierbarer Mathe-Check per Startwert, ganzzahlige Zählgrößen (Windungen, Teile, Haushalte), gültige Auswahlantworten, sw.js-Cache passt zu APPV, Einführungstour, Kurskalender, Dozentenpaket [Code].
- **Läufe in dieser Sitzung auf v93 und v94: jeweils „9440 Aufgaben erzeugt, 116 Themen geöffnet. Alles in Ordnung.“** [Test, 22.10.2026, Chromium /opt/pw-browsers/chromium]
- Nicht abgedeckt: fachliche Richtigkeit allgemein (nur einzelne Regeln), Darstellung auf echten Geräten (iOS Safari, Android Chrome), Barrierefreiheit, Datenverlust-Szenarien.

### Sicherheit und Datenschutz (Ist-Stand)
- Datensparsam: kein Tracking, keine Cookies, keine Nutzungszählung (Markus 21.10.2026), Schrift lokal.
- Personenbezogene Lerndaten entstehen nur bei „Lernfortschritt senden“ (Name oder Kürzel, Kurs, Ergebnisse, aktive Tage, Fehlerarten). Sie liegen danach auf Markus' Gerät in der Dozentenversion. Datenschutzhinweis-Entwurf: freiwillig, Kürzel reicht, Löschung nach Kursende [Doku]. Ob Markus oder das Bildungsträger verantwortlich ist, ist offen (OPEN_QUESTIONS.md).
- Im öffentlichen Code steht derzeit Markus' **private** E-Mail-Adresse als `MAIL` (Impressum, „Fehler melden“, Auswertung). Eine Projekt-Adresse ist entschieden, aber noch nicht angelegt.
- Keine Content-Security-Policy (GitHub Pages setzt keine eigenen Header; eine Meta-CSP wäre möglich). 104 Stellen mit `innerHTML`; die geprüften Eingangswege sind maskiert, eine vollständige Prüfung aller 104 Stellen fand nicht statt.
- Kein Weitergabeschutz für Inhalte (ADR 001: bei Lizenz vertraglich regeln).

### Technische Schulden und offene Architekturentscheidungen
Priorisiert nach Wirkung (eigene Bewertung auf Basis Code + Gutachten):

| Prio | Schuld | Wirkung | Empfehlung |
|---|---|---|---|
| Hoch | Eine Datei mit 1,5 MB, Daten und Logik gemischt, viele globale Variablen | Parallele Threads kollidieren (z. B. v88 ging mit leerer sw.js live, Reparatur v89). Kein anderer Dozent kann Inhalte pflegen. | Nach dem Pilot (Markus 22.10.2026): Inhalte (Aufgaben, Texte, Glossar) in eigene Dateien, kleines Build-Skript erzeugt weiter **eine** Datei. Kein Framework. |
| Hoch | Sehr hohe Änderungsrate ohne Freeze (94 Versionen vom 18. bis 22.10.2026, 63 Branches im Repo) | Risiko, dass kurz vor einem Kurstag ein Fehler live geht | Vor dem 1. NTG-Samstag (28.11.2026) Inhalts- und Funktionsstopp, nur Fehlerbehebungen |
| Mittel | Vier Zahlenformatierer (`nf`, `nfe`, `hf`, `mcn`), Konstanten teils verteilt | Uneinheitliche Darstellung, Fachfehler durch Rundung | Ein Formatierer mit Optionen, eine Konstantentabelle |
| Mittel | Tests prüfen vor allem Abstürze | Fachfehler werden erst durch Gutachten gefunden | Fachliche Regeln weiter ausbauen (angezeigte Werte ergeben angezeigtes Ergebnis, Titel passt zur Rechnung) |
| Mittel | Keine Tests auf echten Geräten | iOS-Verhalten (Tick, Update-Hinweis, Speicherlöschung) unbekannt | Ein iPhone und ein älteres Android als Homebildschirm-App testen |
| Niedrig | Veraltete Branches (u. a. `fachgutachten-fixes` PR #29 veraltet, `physik-3d` ungemergt) | Verwirrung in neuen Sitzungen | Aufräumen; PR #29 nicht rebasen |
| Niedrig | Dozentenversion als nicht versionierte Datei | Kann veralten | Nach jedem Merge bauen (Regel besteht) |

Bewusst offen: Aufteilen der Datei (nach dem Pilot), KI-Zugangsmodell (nach dem Pilot), Nutzungszählung (frühestens bei Träger-Lizenz).

### Meisterlabor Basis (Kurzüberblick)
- Eine HTML-Datei, **Version 4 live seit 22.10.2026 als Claude-Artifact** https://claude.ai/artifact/ETNVG16tGKCYAce3JXraiW (Kurstermine, Einführungstour; laut Thread „Meisterlabor Kurskalender und Tour“).
- Quelle: `/mnt/project-files/meisterlabor/meisterlabor-basis.html`; GitHub-Pages-Paket `meisterlabor/github-pages/` (Cache v4) und ZIP; Dozentenversion `meisterlabor/dozent/`.
- **Noch kein Repository** (legt Markus selbst an; Claude kann in Sitzungen keine Repos erstellen). Damit gibt es außer dem Projektordner keine Sicherung und keine Versionsgeschichte.
- Umfang laut Stand v2: 49 Module, 87 Rechentypen, 36 Fälle, 67 mündliche Fragen [Gedächtnis]. Rechtsstand Oktober 2026, vor dem Lehren prüfen.
- Ist nicht Teil des Pilots. Gemeinsamer Lernstand oder gemeinsame Navigation mit dem Lernlabor: bis nach dem Pilot nein [Doku].

---

## G. Nutzungshinweise für ein neues Claude-Projekt

### Was LERNLABOR ist (für Claude, in einem Satz)
Eine einzelne, offline-fähige HTML-Lern-App ohne Konten für das IHK-Fach NTG, die Markus im eigenen Industriemeister-Kurs ab November 2026 als Übung zwischen den Samstagen einsetzt und später an Bildungsträger lizenzieren möchte.

### Wie Claude unterstützen soll
- Fachlich und didaktisch Inhalte erstellen und prüfen (eigene Aufgaben, Rechenwege, Simulationen).
- Code in index.html ändern, testen, Vorschau zeigen, PR stellen, nach Freigabe mergen, Dozentenversion bauen.
- Kritisch beraten: Produkt, Datenschutz, Geschäftsmodell. Annahmen von Markus nicht einfach bestätigen.
- Unterrichtsmaterial (Folien, Handouts) im Lernlabor-Stil erstellen.

### Regeln, die immer gelten
1. **Deutsch, Du-Form, kurze klare Sätze**, ein Gedanke pro Satz, Fachbegriff beim ersten Auftreten erklären.
2. **Nur eigene Aufgaben.** Keine IHK-Originale und keine Abwandlungen. Alte Prüfungen nur auswerten (Thema, Aufgabenart, Schwierigkeit), beim Schreiben nicht offen haben (ADR 002).
3. **Code-Änderungen, PRs und Merges nur nach Markus' ausdrücklichem Ja.** Der Merge braucht seinen wörtlichen Satz **„Merge PR N“** im Thread („live“ oder „Ja“ allein wurden vom Rechte-Klassifizierer abgelehnt).
4. **Bei Darstellungsänderungen vorher Vorschau** als Artifact-Seite mit Screenshots (Handy 390 px und 320 px, Laptop, hell und dunkel). Dateilinks öffnen bei Markus teils nicht, Bilder über eine Artifact-Seite zeigen.
5. **Lernstand bleibt lokal**, keine Konten, kein Tracking, keine Nutzungszählung im Pilot.
6. **Im Pilot keine KI** in der Teilnehmerfassung.
7. Vor jedem Merge: main holen, rebasen, **nächste freie Versionsnummer** in `APPV`, `NEWS` und `sw.js` (`lernlabor-vN`) setzen; nach dem Merge **Dozentenversion neu bauen** (nie committen); fachliche Korrekturen in die Änderungsliste `CHL` eintragen.
8. Tests vor jedem PR: `CHROMIUM=/opt/pw-browsers/chromium node tests/check.js`.
9. Geheimnisse, Zugangsdaten, Honorar und persönliche Vertragsdaten nie in Repo, Artifacts oder Doku.

### Arbeitstechnik in Claude-Sitzungen (belegt durch frühere Threads)
- Repo holen: `git clone https://github.com/84g64ds8jm-cmyk/LernLabor.git`. Für PRs das Repo mit `add_repo` freischalten; PRs per `gh api` REST (GraphQL war gesperrt), der GitHub-MCP fiel zeitweise aus.
- Live-Prüfung per curl ging nicht (Proxy 403); stattdessen die Pages-Workflow-Läufe prüfen.
- Playwright mit `/opt/pw-browsers/chromium`; bei Tests das sichtbare `select` wählen (das erste ist `#pf` im Übungsmodus).
- Bekannte Fallen: „ / “ mit Leerzeichen in Antwortoptionen wird zum Bruch und verrät die Antwort; `ERK`/`BET` neuer Themen erst nach `BET['Bruchrechnung']`; `subify` wirkt nicht in `<option>` (dort Unicode-Indizes); in index.html nie vor „#gl .glq{“ einfügen; `route`, `SL`, `esc` leben im Scope der UX-Schicht (global nur `window.llRoute` usw.); `nf()` nicht für ganze Zahlen; Reglerlabels höchstens etwa 6 Zeichen; neue Formelzeichen ins Glossar; neue Themen brauchen ERK, BET, FEH und ggf. GORD-Eintrag; Kopf braucht Manifest-Link, apple-touch-icon und Apple-Meta-Tags.

### Entscheidungen, die nicht ohne neue Begründung wieder geöffnet werden
Details in [PROJECT_DECISIONS.md](PROJECT_DECISIONS.md).
- Keine Konten, kein Server, kein Abo (ADR 001).
- Abstandsregel zu IHK-Aufgaben (ADR 002).
- Pilot ohne KI (ADR 003).
- Keine Nutzungszählung im Pilot (21.10.2026).
- Kein Framework-Neubau, keine native Store-App.
- Menüband mit Emojis 🏠 📚 🎓 👤, keine Strich-Icons dort (21.10.2026).
- Reiter heißt „Ich“, Forscher-Emoji wählbar, nur Standardgelb.
- Prüfungssimulation 90 Minuten.
- Datei aufteilen erst nach dem Pilot.
- Pilot kostenlos, offen ohne Anmeldung.

### Was aktiv diskutiert werden darf
Lizenzmodell und Preis, KI-Zugang nach dem Pilot, neue Rahmenplan-Themen (Getriebe, Schallpegel, U-Wert, CO₂-Bilanz), Aufgaben sperren/freigeben für Dozenten, Datei-Aufteilung und Build-Schritt, Barrierefreiheit, Meisterlabor-Repo und Integration, Videos, Gestaltung im Detail.

### Was bei jeder Arbeit zu berücksichtigen ist
- Das Handy ist der kritische Fall. Immer bei 390 px und 320 px prüfen.
- Markus' Zeitbudget: **5 bis 7 Stunden pro Woche.** Jede neue Funktion muss er pflegen und fachlich verantworten.
- Pilot-Erfolg = mindestens zwei Drittel erledigen die Aufgabe von Samstag zu Samstag, anonyme Zwischenumfrage nach dem 3. Samstag überwiegend positiv.
- Projektunterlagen vor Antworten lesen: diese fünf Dateien, dann `CONTEXT.md`, `docs/`, `feedback/`.
- Viele ältere Dokumente unter `docs/` stammen vom 19./20.10.2026 und sind in Teilen überholt (Liste in OPEN_QUESTIONS.md, Abschnitt „Widersprüche“). Im Zweifel gilt der Code von main.

---

## Quellen dieser Bestandsaufnahme

### Verwendet
- Repo `84g64ds8jm-cmyk/LernLabor`, main f7312ac (v93), danach 6f4eb9e (v94): index.html, sw.js, manifest, tests/check.js, CI-Workflow, README.txt, Git-Log (115 Commits), Branch-Liste. Prüfskript ausgeführt, Datenstrukturen per Playwright gezählt.
- Projektordner `/mnt/project-files/`: CONTEXT.md, alle Dateien in docs/ inkl. ADR 001 bis 003 und START-PROMPT.md, branding/BRANDING.md, feedback/ (SCHUELERSICHT, LOESUNGEN, FACHGUTACHTEN-FEHLERLISTE, BEFUNDE-GYMNASIUM, fachgutachten-lernlabor.html, produkt-ux-gutachten.html, gutachten-meisterlabor.html, abschluss/fachgutachten-abschluss.html, abschluss/ui-software-gutachten-abschluss.html, abschluss/sprache-optik-pruefung.html), markt/marktvergleich.html, Ordnerliste.
- Projektgedächtnis: MEMORY.md und alle 22 Themendateien.
- Projektchat (alle Seiten, Nachrichten von Markus vollständig gesichtet) und die Threads: Fachgutachten der Professoren, Gutachten Produkt und UX, Gutachten Gymnasiallehrer, Gutachten Meisterlabor, Schülersicht, Recht und Steuern, Zugang schützen, Anwendungsbeispiele, Änderungen ins Meisterlabor, Meisterlabor Kurskalender und Tour, Abschlussgutachten und Start-Prompt V3 (Anfang und Ende).
- Claude Docs: Dozentenbericht (https://claude.ai/artifact/TnzVyByNzgUFdbEhYLKFqW) vollständig, Recht-Gremium in Gliederung und Kernabschnitten.

### Nicht oder nur teilweise geprüft
- Nicht jeder der 40 Threads wurde vollständig gelesen; die übrigen Feature-Threads nur über Projektgedächtnis und Projektchat.
- Die meisten Vorschau-Artifacts (Screenshots) wurden nicht geöffnet.
- GitHub-API (PR-Liste, Sichtbarkeit des Repos, Pages-Status): für diese Sitzung nicht freigeschaltet.
- Pitch (pitch/*.pptx, *.pdf), Unterrichtsfolien (unterricht/), Dozenten-Handout (https://claude.ai/artifact/NaypLPMVts5CSivFj7Rg6a): nur aus dem Gedächtnis bekannt, nicht gelesen.
- Meisterlabor-Quellcode: nicht selbst geprüft, nur Gutachten und Gedächtnis.
- Projektanweisungen des Projekts: in dieser Sitzung waren keine eigenen Projektanweisungen sichtbar; die Regeln stammen aus Gedächtnis und Unterlagen.
- Skills: Der parallele Thread „Grill-Me-Workflow“ legt unter `/mnt/project-files/transfer/grill-me/` eigene Dateien an; sie sind nicht Teil dieser Bestandsaufnahme.
