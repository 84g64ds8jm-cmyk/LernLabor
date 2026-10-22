# USAGE_AND_UX: LERNLABOR

Stand: 22.10.2026, `main` = **Version 94** (v94 = neue Reihenfolge im Reiter Prüfen, sonst wie v93). Kennzeichnung wie in [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md): [Code], [Test], [Doku], [Gedächtnis], [Annahme].

Dieses Dokument beschreibt **was man mit LERNLABOR tun kann, wie es sich bedient und wie es aussieht**. Technik steht in PROJECT_CONTEXT.md (Abschnitt C), Bewertungen in [EXPERT_REVIEW.md](EXPERT_REVIEW.md), die Gründe für Entscheidungen in [PROJECT_DECISIONS.md](PROJECT_DECISIONS.md).

Grundregel dieses Dokuments: Die Spalte **Status** unterscheidet streng:
- **Implementiert** = in v93/v94 im Code vorhanden und in dieser Sitzung in Chromium geöffnet oder im Code nachgesehen.
- **Implementiert, ungetestet am Gerät** = Code vorhanden, Verhalten auf echtem iPhone/Android unbekannt.
- **Konzept** = beschrieben, entschieden oder als Entwurf vorhanden, aber nicht in der Teilnehmerfassung.
- **Idee** = nur vorgeschlagen.

---

## B. Produktumfang und Nutzung

### B1. Aufbau der App (Navigation)
Menüband unten mit vier Bereichen 🏠 Start, 📚 Fächer, 🎓 Prüfen, 🧑‍🔬 Ich [Test: Seitentext in Chromium bei 390 px]. Das Ich-Symbol ist wählbar (Forscher-Emoji, nur Standardgelb).

| Bereich | Inhalt in v93 [Test] |
|---|---|
| **Start** | „Probier es in einer Minute aus“ (Hydraulik-Presse ohne Rechnen), „👉 Dein nächster Schritt“ (zu Beginn: Mathe-Check), „📅 Nächster Kurstag“ mit Thema und „In den Kalender“, „📝 Hausaufgaben“ (nächste Einheit), „📈 Lernstand“, Kacheln der 7 Fächer |
| **Fächer** | Physik 45, Chemie 13, Energie 11, Statistik 9, Mathematik 15, Sicherheit 11, Umrechnen 13 Themen. Summe 117 Einträge bei 116 Themen, weil ein Thema in zwei Fächern steht (XL). Suche, Wischleisten mit Pfeilen unter 900 px |
| **Prüfen** | Seit v94 in der Reihenfolge des Lernwegs: 🧮 Mathe-Check, ✏️ Üben, ✍️ Begründen & Skizzieren, 🗣️ Mündliche Prüfung, 🎓 Prüfungsaufgaben, ⏱️ Prüfungssimulation [Code v94, Markus' Wunsch 22.10.2026] |
| **Ich** | 📝 Hausaufgaben, 📈 Lernstand, 📤 Lernfortschritt senden, 🧭 So funktioniert das Lernlabor, 🎨 Darstellung, ⚖️ Impressum & Datenschutz, 🆕 Version 94 · Was ist neu |

Fußzeile auf jeder Seite: Hinweise, Impressum, Datenschutz, Darstellung, Versionsangabe, „© 2026 Dr. rer. nat. Markus Baum · Alle Rechte vorbehalten. Weitergabe nur mit Erlaubnis.“ [Test]

### B2. Funktionen und Status

#### Lernen am Thema
| Funktion | Beschreibung | Status |
|---|---|---|
| Themenseite mit Simulation | Inline-SVG-Simulation mit Reglern, Merkbox, Grundgleichungen, 116 Themen | Implementiert [Test: alle 116 geöffnet, keine Fehler] |
| „Vermute zuerst“ | Vorhersage vor dem Regler-Ausprobieren (PRED, PRED2: 25+25) | Implementiert |
| „Verstehen und typische Fehler“ | ERK-Kasten je Thema (116), dazu „Im Betrieb“ (BET, 103) | Implementiert |
| „Diese Fehler üben“ | 348 Aufgaben „Fehler finden“ (FEH), großer Hauptknopf im ERK-Kasten seit v93 | Implementiert |
| „Passt das?“ | Plausibilitätsfragen (PLAUS, 30) | Implementiert |
| Formelkarten | FX, 96 Karten | Implementiert |
| Vorlesen | Erklärtexte und mündliche Fragen per Gerätestimme (`speechSynthesis`) | Implementiert, Stimmenqualität geräteabhängig |
| Glossar | Formelzeichen (GL 162), Einheiten (GLU 40), Reiter „Vergleich“ ähnlicher Zeichen (GLA 24, neu v93) | Implementiert |

#### Üben und Prüfen
| Funktion | Beschreibung | Status |
|---|---|---|
| Übungsmodus | Zufallsaufgaben aus 89 Generatoren, Ankreuzfragen (267), Auswahl nach Fach und Aufgabentyp, Lösungsweg, „⚑ Fehler melden“ | Implementiert [Test: 9.440 erzeugte Aufgaben ohne Fehler] |
| Prüfungsaufgaben | 111 Aufgaben in Schritten („Schritt 1 von 4“), Eingabe mit Komma, Toleranz ±2 %, gestufte „💡 Hilfe“ (erst Tipp, dann Ansatz, seit v90), Auswahlschritte | Implementiert |
| Mehrschrittaufgaben | STEPS, 36 | Implementiert |
| Begründen, Beurteilen, Skizzieren | 43 Aufgaben (BEW) mit Musterlösung und Prüfpunkten zum Selbstvergleich, keine automatische Bewertung [Code] | Implementiert (v93) |
| Mündliche Prüfung | 115 Fragen mit Musterantwort, Vorlesen | Implementiert. KI-Prüfer nur im Claude-Artifact, im Pilot aus |
| Prüfungssimulation | 90 Minuten, 100 Punkte, Formelsammlung, Folgefehler-Bewertung, Verlauf (`ll_simh`); Update-Hinweis erst nach der Simulation | Implementiert |
| Mathe-Check | Eingangstest, 15 Aufgaben, etwa 20 Minuten, 5 Aufgabensätze, reproduzierbar per Startwert, ergibt Startplan | Implementiert |
| Meine Fehler | Falsch gelöste Aufgaben zum Wiederholen (`ll_fehler`) | Implementiert |

#### Planen und Kurs
| Funktion | Beschreibung | Status |
|---|---|---|
| Hausaufgaben | 8 Einheiten (Kapitel 1.1 bis 4) mit je 3 Aufgaben, Start zeigt „0 von 24“ | Implementiert |
| Lernstand | Themen sicher / auf dem Weg / unsicher / neu je Fach, Aufgaben der letzten 14 Tage, Wiederholungsplan | Implementiert. Zählt 107 statt 116 Themen (u. a. Umrechnen nur 4 von 13) [Test]; ob das gewollt ist, ist nicht dokumentiert |
| Lernplan „Heute“ | Prüfungsdatum + Minuten pro Tag (15 bis 120) ergeben einen Tagesplan | Implementiert |
| Kurstermine | Kalender, vorbelegt mit IM TZ 11/2026 Regenstauf (9 Einheiten, 16.10.2027 Prüfungsvorbereitung, BQ-Prüfung 21./22.10.2027), eigene Termine, Kalender-Export (ICS) | Implementiert |
| Kurslink | Dozent verteilt `#kurs/<Name>/<Daten>`, Teilnehmende übernehmen Termine | Implementiert |
| Aufgaben vom Dozenten | Dozent erstellt eigene Aufgaben und verteilt sie als Link `#aufgaben/…`; erscheinen als Einheit „Vom Dozenten“ | Implementiert (v93) |
| Lernfortschritt senden | Name oder Kürzel, Kurs, Ergebnisse als Datei, Teilen-Menü oder Text; Sende-Erinnerung (`ll_sent`) | Implementiert. Ob Teilnehmende das regelmäßig tun, ist unbekannt |
| Einführungstour | 7 Karten beim ersten Öffnen, einmalige Tipps je Bereich, erneut unter Ich | Implementiert (v91, Hotfix v92) |
| Sichern / Wiederherstellen | Export und Import des Lernstands als JSON, Löschen unter „Lernstand → Daten“ | Implementiert |

#### Nur Dozentenversion (nicht veröffentlicht)
| Funktion | Status |
|---|---|
| Ich → Kursübersicht: eingesammelte Lernstände, Teilnehmerzahl, „Auswertung an mich mailen“ | Implementiert (v86) |
| Kursplan: Kapitel je Einheit festlegen, Kurslink erzeugen | Implementiert (v93) |
| Eigene Aufgaben schreiben und als Link verteilen | Implementiert (v93) |
| Änderungsliste fachlicher Korrekturen (CHL) einsehen | Implementiert (v93) |
| Aufgaben sperren / freigeben je Termin | **Idee / offen** (Dozentenbericht) |

#### Nicht im Pilot
| Funktion | Status |
|---|---|
| KI-Tutor, KI-Prüfer, KI-Bewertung von Freitext, Spracheingabe | **Implementiert, aber ausgeblendet** (nur im Claude-Artifact). Im Pilot aus (ADR 003) |
| Nutzungszählung, Konten, Zugangsschutz | **Konzept, bewusst nicht** (frühestens bei Träger-Lizenz) |
| Weitere Rahmenplan-Themen: Getriebe/Übersetzung, Schallpegel, U-Wert/Wärmedurchgang, CO₂-Bilanz | **Idee** (Dozentenbericht, nach dem Pilot) |
| Videos | **Idee, umstritten** (siehe EXPERT_REVIEW.md, Konflikte) |
| Adaptive Wiederholung nach Fehlern über den Wiederholungsplan hinaus | **Idee** (Marktvergleich) |
| Aufteilen in Inhaltsdateien + Build-Skript | **Konzept**, nach dem Pilot (Markus 22.10.2026) |
| Unterrichtsfolien im Lernlabor-Stil | Kapitel 1.1 als Muster fertig, 7 Kapitel offen [Gedächtnis] |
| Ideenliste `docs/IDEEN-FUNKTIONEN.md` | Sagt „nichts umgesetzt“, ist aber überholt: viele Punkte sind inzwischen gebaut (OPEN_QUESTIONS.md) |

### B3. Typische Nutzerabläufe

**1. Erster Start (Teilnehmende).**
Link öffnen → Einführungstour (7 Karten) → Start zeigt „Probier es in einer Minute aus“ und als nächsten Schritt den Mathe-Check → 15 Aufgaben → Startplan. Empfohlen: als Homebildschirm-App speichern (Anleitung in docs/ANLEITUNG-INSTALLATION.md). [Test bis Startseite; Homebildschirm-Installation nicht getestet]

**2. Zwischen zwei Samstagen (Kernablauf des Pilots).**
Start → „📝 Hausaufgaben: Als Nächstes Kapitel …“ → 3 Aufgaben lösen → falsch gelöste landen in „Meine Fehler“ → bei Bedarf Themenseite mit Simulation → „Lernfortschritt senden“ vor dem nächsten Kurstag. Der Erfolg des Pilots wird an diesem Ablauf gemessen (≥ 2/3 erledigen die Aufgabe).

**3. Prüfungsvorbereitung.**
Ich → Lernstand → Prüfungsdatum eintragen → „Heute“-Plan → Prüfungsaufgaben in Schritten → Prüfungssimulation 90 Minuten → Verlauf vergleichen. Mündliche Fragen mit Vorlesen.

**4. Dozent (Markus).**
Dozentenversion öffnen → Kursplan festlegen → Kurslink und ggf. Aufgabenlink an die Gruppe → Teilnehmende senden Lernstände per Mail → in Kursübersicht einlesen → „Auswertung an mich mailen“ → im Unterricht auf Schwächen eingehen.

**5. Fehler melden.**
In jeder Aufgabe „⚑ Fehler melden“ → eigenes Mailprogramm öffnet sich mit Thema und Zufallswerten → Markus korrigiert, trägt in CHL ein. Zusage im Dozenten-Handout: Reaktion auf fachliche Fehler innerhalb von 3 Werktagen.

**6. Gerätewechsel.**
Lernstand → Daten → Export (JSON) → auf neuem Gerät Import. Ohne Export geht der Lernstand verloren (kein Server).

### B4. Einstellungen und Konfiguration
| Einstellung | Wo | Werte |
|---|---|---|
| Darstellung | Ich → 🎨 Darstellung (`ll_view.mode`) | Wie am Gerät, Dunkel mit Muster, Weiß mit Karo, Weiß ohne Muster [Code] |
| Schriftgröße | Darstellung (`ll_fs`) | stufenweise |
| Ich-Symbol | Ich (`ll_me`) | Emoji-Auswahl, Standardgelb |
| Vorlesen | `ki-voice` | Stimme, Tempo |
| Lernplan | Lernstand | Prüfungsdatum, 15 bis 120 Minuten pro Tag |
| Name/Kürzel und Kurs | Lernfortschritt senden (`ll_ident`) | frei, Kürzel reicht |
| Kurstermine | Lernstand / Kurslink | vorbelegt, änderbar |
| Für Betreiber (Code) | `DOZENT`, `MAIL`, `OWNER`, `APPV`, `KURS0` in index.html | siehe PROJECT_CONTEXT.md, C |

### B5. Bekannte Einschränkungen
1. **Kein Gerätetest.** Alles in Headless-Chromium geprüft. iOS-Safari-Verhalten (Homebildschirm-App, Update-Hinweis, Tick beim Einrasten, Speicherlöschung) ist unbekannt. Der Tick (v84) soll entfernt werden, falls er am iPhone nicht wirkt [Gedächtnis].
2. **Datenverlust möglich.** Lernstand nur im Browser. Safari kann Daten von Websites nach 7 Tagen ohne Besuch löschen; für Homebildschirm-Apps gilt das nach allgemeiner Kenntnis nicht [Annahme, nicht geprüft].
3. **Keine Nutzungsdaten.** Ob jemand übt, sieht Markus nur, wenn Teilnehmende ihren Stand senden.
4. **Freitext wird nicht bewertet** (Begründen & Skizzieren, mündliche Prüfung): Selbstvergleich mit Musterantwort. Rechenwege auf Papier sieht die App nicht.
5. **Barrierefreiheit** nur teilweise: aria-labels und Tippflächen in v87 nachgebessert, Bildschirmleser-Test fehlt (UI-Gutachten v86: Note 2,7).
6. **Nur NTG**, nur Deutsch, Rechtsstand und Zahlen Oktober 2026.
7. **Lernstand zählt 107 von 116 Themen** (siehe B2). Ungeklärt, ob gewollt.
8. Inhalte sind technisch frei kopierbar (Weitergabe nur vertraglich geregelt).

---

## D. Branding, Stil und UX

### D1. Name und Slogan (verbindlich, nicht ändern)
- Name: **LERNLABOR**, im Schriftzug zweiteilig LERN / LABOR.
- Slogan: **„Verstehen. Anwenden. Bestehen.“**
- Copyright-Zeile wie in B1. Inhaber: Dr. rer. nat. Markus Baum.

### D2. Logo und App-Symbol
Quelle: `/mnt/project-files/branding/BRANDING.md` (20.10.2026) und Ordner `branding/` [Doku].
- **Konzept 1 „Kolben-O“ ist umgesetzt:** Das O in LABOR ist ein Rundkolben mit Hals oben rechts, Mint-Füllung, zwei Bläschen. Auf dunklem Kopf: LERN weiß, LABOR Mint, Kolben weiß mit Mint. Leitgedanke „Modern. Klar. Praxisnah.“
- **App-Symbol:** Kolben allein auf dunklem Marineblau-Quadrat (icon-192/512, maskierbar, apple-touch-icon). Davor gab es ein Atom-Symbol (v14 bis v17, 18.10.2026), das ersetzt wurde [Code: Git-Log].
- **Konzept 2 „L-Play“** (L aus zwei Flächen mit Play-Dreieck, „Fokussiert. Dynamisch. Zukunftsorientiert.“): von Markus ebenfalls „sehr gut“ gefunden, **nicht umgesetzt**, als Alternative dokumentiert.
- Hinweis: Im Seitentext erscheint der Schriftzug als „LERNLABR“, weil das O eine Grafik ist. Ein Bildschirmleser-Test steht aus [Test].

### D3. Farben und Schrift
| Rolle | Wert |
|---|---|
| Marineblau (Grund, Schrift auf hell) | #0F1E33 |
| Mint (Akzent, LABOR, Kolbenfüllung) | #4FD1AE |
| Türkis (nur Konzept 2) | #14B8A6 |
| Weiß auf dunkel | #F8FAFC |

- In der App zusätzlich Fachfarben (Akzent je Fach, u. a. #10a37f, #3b82f6, #8b5cf6, #d97706, #db2777, #dc2626, #f97316) sowie Zustandsfarben ok/rot/amber und eigene Werte für hell und dunkel [Code: CSS-Variablen].
- Schrift: **Schibsted Grotesk** 400/600/800, lokal eingebunden (kein Google-Fonts-Abruf, SIL OFL). Schriftzug in ExtraBold.

### D4. Gestaltungsregeln (dokumentiert und in Gutachten bestätigt)
- **Menüband mit Emojis 🏠 📚 🎓 👤/🧑‍🔬, keine Strich-Icons dort.** Das Produkt-UX-Gutachten (v58) hatte einheitliche Linien-Icons vorgeschlagen; sie wurden umgesetzt und auf Markus' Wunsch in v75 zurückgenommen. Gleich große Menü-Symbole seit v37.
- **Grafikstil 3D** nach `docs/GRAFIKSTIL-3D.md`: Kugeln, Stäbe, Gläser, Würfel mit Licht von oben links; Lehrbuch-Stil (z. B. galvanische Zelle mit Bechergläsern v68).
- **Formeln linear schreiben**, Brüche mit „ a / b “ (Leerzeichen) werden als Bruch gesetzt, Wurzeln mit Wurzelhaken, Indizes tiefgestellt (F_G). Gewichtskraft heißt F_G.
- **Text:** Du-Form, kurze Sätze, Fachbegriff beim ersten Auftreten erklärt; eigene Silbentrennung, damit am Handy nichts überläuft (v69, v74, v88).
- **Handy zuerst:** jede Darstellung bei 390 px und 320 px prüfen; Reglerlabels kurz; Knöpfe unter Reglern in einer Zeile (v73); Tippflächen ≥ 44 px (v87).
- **Wischleisten** mit runden Pfeilen ‹ › nur unter 900 px (v83).
- **Vor jeder Darstellungsänderung eine Vorschau** mit Screenshots für Markus (Regel, siehe PROJECT_CONTEXT.md, G).

### D5. UX-Grundsätze (aus Entscheidungen und Gutachten abgeleitet)
1. **Sofort etwas tun können:** Startseite mit „Probier es in einer Minute aus“ und genau einem nächsten Schritt (Paket 1 der Schülersicht, v48).
2. **Kein Konto, keine Hürde:** Link öffnen genügt.
3. **Hilfe gestuft statt Lösung sofort:** Tipp → Ansatz → Lösungsweg.
4. **Fehler sind Lernanlass:** typische Fehler je Thema, „Fehler finden“, Meine Fehler.
5. **Kursrhythmus sichtbar:** nächster Kurstag und nächste Hausaufgabe immer auf Start.
6. **Wenig Spielmechanik:** keine Ranglisten oder Abzeichen [Code: Suche ohne Treffer]; es gibt nur eine dezente „Lernserie: n Tage“ im Lernstand [Code: `memStreak()`]. Motivation vor allem über Fortschritt und Kursbezug (siehe EXPERT_REVIEW.md, Konflikt Gamification).

### D6. Was am Stil offen oder ungeprüft ist
- Bildschirmleser, Kontraste im Modus „Dunkel mit Muster“ und große Schriftstufen sind nicht systematisch geprüft.
- Konzept 2 als zweite Marke (z. B. für Meisterlabor) ist nicht entschieden. Das Meisterlabor übernimmt seit seiner Version 3 das Lernlabor-Design mit eigenem Akzent #0f766e [Gedächtnis].
- Ob Fachfarben und Mint-Akzent zusammen genug Kontrast haben, wurde nicht gemessen.
