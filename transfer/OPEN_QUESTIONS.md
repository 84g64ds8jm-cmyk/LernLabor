# OPEN_QUESTIONS: LERNLABOR

Stand: 22.10.2026, `main` = Version 94. Kennzeichnung wie in [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md).

Dieses Dokument trennt streng zwischen **gesicherten Fakten**, **begründeten Schlussfolgerungen**, **Annahmen** und **offenen Fragen**. Es listet außerdem, wo die Projektunterlagen einander oder dem Code widersprechen, und endet mit einer priorisierten Liste und den fünf wichtigsten offenen Punkten.
Entscheidungen und ihre Gründe stehen in [PROJECT_DECISIONS.md](PROJECT_DECISIONS.md), Gutachten in [EXPERT_REVIEW.md](EXPERT_REVIEW.md), Funktionen in [USAGE_AND_UX.md](USAGE_AND_UX.md).

---

## H1. Gesicherte Fakten
In dieser Sitzung selbst nachgesehen oder ausgeführt.

| Fakt | Beleg |
|---|---|
| main = v94 (Commit 6f4eb9e), v94 änderte nur die Reihenfolge im Reiter Prüfen | [Code: git fetch, Diff 4 Zeilen] |
| index.html: 1.500.728 Byte, 5.585 Zeilen, eine Datei, kein Framework | [Code] |
| Prüfskript auf v93 und v94: „9440 Aufgaben erzeugt, 116 Themen geöffnet. Alles in Ordnung.“ | [Test] |
| 116 Themen, 7 Fächer, 89 Generatoren, 111 Prüfungsaufgaben, 267 MCQ, 115 mündliche, 348 FEH, 43 BEW | [Test: Playwright-Zählung v93] |
| Lernstand nur in `localStorage` (34 `ll_*`-Schlüssel), keine `fetch()`-Aufrufe, keine externen URLs | [Code] |
| KI-Code vorhanden, nur im Claude-Artifact aktiv, auf GitHub Pages ausgeblendet | [Code: `KIOK`] |
| Private E-Mail-Adresse steht im öffentlichen Code (`MAIL`) | [Code] |
| Keine Content-Security-Policy; 104 Stellen mit `innerHTML`; geprüfte Eingangswege maskiert | [Code, Stichprobe] |
| Kurskalender IM TZ 11/2026: 28.11.2026 bis 02.10.2027 (Einheiten 1–9), 16.10.2027 Prüfungsvorbereitung, BQ-Prüfung 21./22.10.2027 | [Test: Lernstand-Ansicht] |
| Lernstand-Ansicht zählt 107 Themen (Umrechnen 4 statt 13, Mathematik 14 statt 15) | [Test] |
| Es gibt eine dezente „Lernserie“ (Tage in Folge), keine Ranglisten, keine Abzeichen | [Code] |
| Kein Konstantenblatt, kein Prüfungsmodus „nur erlaubte Hilfsmittel“, keine Wochenbilanz im Code | [Code: Suche ohne Treffer] |
| 115 Commits bis v93, 63 Branches im Remote, erster Commit 18.10.2026 | [Code: Git] |
| Alle Gutachten sind von Claude simulierte Rollen | [Doku: Auftragstexte] |

## H2. Begründete Schlussfolgerungen
Aus Fakten abgeleitet, aber nicht direkt gemessen.

1. **Für den Pilot fachlich einsetzbar.** Zwei Fachgutachten mit maschineller Nachrechnung (6.848 Rechenschritte) und alle A-Befunde behoben. Restrisiko: Konzeptfehler, die dasselbe Modell beim Schreiben und Prüfen übersieht.
2. **Das größte Betriebsrisiko ist die Änderungsrate, nicht der Code.** 94 Versionen in fünf Tagen, parallele Threads an einer Datei, ein Vorfall mit leerer sw.js (v88). Ohne Freeze steigt das Risiko, kurz vor einem Kurstag etwas zu brechen.
3. **Wartbarkeit ist das Hindernis für eine Träger-Lizenz.** Kein Dritter kann Inhalte pflegen; Markus ist für jede Aufgabe fachlich verantwortlich (UI-Gutachten Wartbarkeit 3,0).
4. **Das Erfolgskriterium ist mit den heutigen Mitteln nur teilweise messbar.** „2/3 erledigen die Aufgabe“ setzt voraus, dass Teilnehmende ihren Stand senden. Wer nicht sendet, zählt als unbekannt, nicht als „nicht erledigt“. Ohne Fragebogen fehlt die zweite Hälfte des Kriteriums.
5. **Die erste Zwischenumfrage kommt spät.** Nach dem 3. NTG-Samstag heißt nach dem 23.01.2027, rund zwei Monate nach Start. Ein früheres kurzes Stimmungsbild nach dem 1. Samstag wäre billig und nützlich.
6. **Datenschutz ist stark, aber nicht fertig.** Die Architektur ist datensparsam; offen sind Verantwortlichkeit, Projekt-Adresse und die Prüfung der Texte.
7. **Simulierte Gutachten sind kein Qualitätsnachweis für Träger.** Sie sollten im Pitch nicht als „externe Gutachten“ erscheinen.
8. **Inhaltsumfang wächst schneller, als Markus prüfen kann.** 5–7 h pro Woche reichen nicht, um 348 + 43 + neue Aufgaben fachlich selbst gegenzulesen. Fehlermeldungen der Teilnehmenden werden die eigentliche Prüfung sein.

## H3. Annahmen (nicht belegt)
| Annahme | Warum relevant | Wie prüfen |
|---|---|---|
| Safari löscht Website-Daten nach 7 Tagen ohne Besuch, Homebildschirm-Apps sind ausgenommen | Lernstand-Verlust am iPhone | Am echten iPhone testen; gemeinsamer Export am 1. Samstag |
| Der Tick beim Einrasten wirkt am iPhone (iOS-18-Trick) | Sonst entfernen (D-19) | Homebildschirm-App am iPhone |
| Update-Hinweis „Jetzt laden“ funktioniert in der iOS-Homebildschirm-App | Teilnehmende bleiben sonst auf alter Version | Am Gerät nach einem Merge prüfen |
| Teilnehmende senden ihren Lernstand regelmäßig | Grundlage des Erfolgskriteriums | Erst im Pilot sichtbar |
| 90 Minuten gelten auch bei der für Regenstauf zuständigen IHK (vermutlich IHK Regensburg) | Simulation prüfungsnah | Prüfungsordnung/-plan der zuständigen IHK |
| Repo ist öffentlich (sonst liefe Pages ohne Pro nicht) | Code und private Adresse für alle sichtbar | Repo-Einstellungen bei GitHub ansehen |
| Die Zählung „107 Themen“ im Lernstand ist gewollt (z. B. reine Nachschlage-Themen ausgenommen) | Teilnehmende könnten Lücken vermuten | Filter der Fortschrittsanzeige im Code prüfen, Markus fragen |
| Die Marktpreise vom 21.10.2026 stimmen | Preisfindung | Vor Preisentscheidung erneut prüfen |

## H4. Offene Fragen
Nach Thema geordnet. **Wer** = wer entscheiden oder handeln muss.

### Recht und Datenschutz
| Nr. | Frage | Wer | Bis |
|---|---|---|---|
| R1 | Projekt-Mailadresse anlegen und `MAIL` im Code ersetzen | Markus, dann Claude-PR | vor 28.11.2026 |
| R2 | Schriftliche Bestätigung des Bildungsträgers zu den Rechten | Markus | vor Träger-Angebot, besser vor Pilot |
| R3 | Wer ist Verantwortlicher nach DSGVO für gesendete Lernstände: Markus oder der Bildungsträger? | Markus mit Bildungsträger | vor 28.11.2026 |
| R4 | Impressum und Datenschutzhinweis fachlich prüfen lassen | Markus | vor 28.11.2026 |
| R5 | Persönliche steuerliche Fragen (nicht öffentlich, siehe Projektarchiv) | Markus mit Beratung | vor erster Einnahme |
| R6 | Lizenzvertrag (Inhalt, Weitergabe, Haftung, Pflege) | Markus mit Anwalt | vor Träger-Lizenz |
| R7 | Urheberrechtliche Prüfung der Aufgaben (ADR 002) | Anwalt | vor Verkauf |

### Pilot und Betrieb
| Nr. | Frage | Wer | Bis |
|---|---|---|---|
| P1 | Inhalts- und Funktions-Freeze bis zum 1. NTG-Samstag beschließen? | Markus | jetzt |
| P2 | Test auf echtem iPhone und älterem Android als Homebildschirm-App (Installation, Update, Tick, große Systemschrift) | Markus | vor 28.11.2026 |
| P3 | Fragebogen für Zwischen- und Abschlussumfrage | Claude-Entwurf, Markus | vor 23.01.2027 |
| P4 | Wie zählt „Aufgabe erledigt“, wenn jemand nicht sendet? | Markus | vor 28.11.2026 |
| P5 | Gemeinsamer Export am 1. Samstag und Regel „Rechnung auf Papier“ (LOESUNGEN Paket 2) einplanen | Markus | 28.11.2026 |
| P6 | Repo privat + GitHub Pro: ja oder nein? | Markus | vor Träger-Angebot |
| P7 | 63 Branches aufräumen, PR #29 schließen | Claude nach Ja | jederzeit |

### Produkt und Inhalt
| Nr. | Frage | Wer | Bis |
|---|---|---|---|
| I1 | Aufgaben sperren/freigeben je Termin für Dozenten | Markus | nach Pilot |
| I2 | Neue Rahmenplan-Themen Getriebe, Schall, U-Wert, CO₂ | Markus | nach Pilot |
| I3 | Reale fachliche Zweitprüfung durch eine Person außerhalb des Projekts | Markus | vor Träger-Lizenz |
| I4 | Abdeckungskarte Aufgaben ↔ Rahmenplan-Lernziele | Claude-Entwurf, Markus | vor Träger-Lizenz |
| I5 | Toleranz 2 % bei Geldbeträgen beibehalten? | Markus | im Pilot |
| I6 | Fachsprache statt Umgangssprache in Prüfungstexten? | Markus | im Pilot |
| I7 | Videos ja/nein (nach Zwischenumfrage) | Markus | nach Umfrage |
| I8 | Barrierefreiheit (Bildschirmleser, WCAG 2.1 AA) prüfen | Claude + externe Prüfung | vor Träger-Lizenz |
| I9 | Unterrichtsfolien: 7 Kapitel offen | Markus mit Claude | laufend |

### Technik und Architektur
| Nr. | Frage | Wer | Bis |
|---|---|---|---|
| T1 | Datei aufteilen (Inhalte + Build-Skript) | Claude-PR nach Ja | nach Pilot (entschieden) |
| T2 | Meta-CSP ergänzen; alle 104 `innerHTML`-Stellen prüfen | Claude-PR nach Ja | vor Träger-Lizenz |
| T3 | Ein Zahlenformatierer statt vier | Claude-PR | mit T1 |
| T4 | Fachliche Prüfregeln im Prüfskript ausbauen | Claude | laufend |
| T5 | KI-Zugangsmodell, Testplan, Kosten | Markus | nach Pilot |
| T6 | Meisterlabor-Repo anlegen | Markus | sofort |

### Geschäft
| Nr. | Frage | Wer | Bis |
|---|---|---|---|
| G1 | Lizenzpreis und Modell (Träger-Lizenz vs. Einmalkauf) | Markus | nach Zwischenauswertung |
| G2 | Welche weiteren Träger ansprechen? | Markus | nach Zwischenauswertung |
| G3 | Wie viel Pflegezeit kann Markus einem Träger zusagen (Reaktionszeit 3 Werktage ist zugesagt)? | Markus | vor Lizenz |

---

## H5. Widersprüche und veraltete Unterlagen
Im Zweifel gilt der Code von main. Diese Dateien sollten im neuen Projekt aktualisiert oder als „historisch“ markiert werden.

| Datei | Aussage dort | Tatsächlich |
|---|---|---|
| docs/TECHNIK.md | 660 KB, Stand v30, keine Tests, Google Fonts | 1,5 MB, v94, CI-Prüfskript, Schrift lokal |
| docs/PRD.md | rund 50 Themen | 116 Themen, 7 Fächer |
| docs/IDEEN-FUNKTIONEN.md | „nichts umgesetzt“ | u. a. Kalenderdatei, Tour, eigene Aufgaben umgesetzt |
| docs/START-PROMPT.md | Stand v86, „nächster Schritt v87“ | v87 bis v94 erledigt; durch diese fünf Dateien ersetzt |
| docs/ROADMAP.md | „keine neuen Themen vor dem Pilot“; „Tests, wenn verkauft wird“; PR #1 „in Arbeit“ | Viele neue Themen; CI vorhanden; PR #1 längst gemergt |
| docs/OFFENE-FRAGEN.md | Schrift, KI ausblenden, Fehler melden, Impressum offen | Erledigt in PR #1 |
| CONTEXT.md | Prüfung NTG 60 min (Grill-me-Prompt); Google Fonts als offener Punkt; Meisterlabor 47 Module, 71 Rechentypen | 90 min; Schrift lokal; Meisterlabor v2: 49 Module, 87 Rechentypen |
| CONTEXT.md | „9 Samstage“ | 9 Einheiten + 1 Prüfungsvorbereitung = 10 NTG-Tage im Kalender; Kursstart insgesamt 07.11.2026, erster NTG-Tag 28.11.2026 |
| Lernfortschritt-Simulation | angenommene Kurstermine | Weichen vom echten Stundenplan ab |
| Projektgedächtnis (Meisterlabor-Datei) | Version 4 „Entwurf, noch nicht live“ | Laut Thread „Meisterlabor Kurskalender und Tour“ am 22.10.2026 live |
| UI-Gutachten v86 | 1,39 MB, 5.156 Zeilen | v94: 1,5 MB, 5.585 Zeilen |

---

## H6. Priorisierte Liste (nach Wirkung)
1. **Freeze und Gerätetest vor dem 28.11.2026** (P1, P2). Schützt den Pilot direkt.
2. **Projekt-Mailadresse und DSGVO-Verantwortung** (R1, R3, R4). Privatadresse ist öffentlich; ohne klare Rolle ist „Lernfortschritt senden“ rechtlich unsauber.
3. **Messbarkeit des Pilots** (P3, P4). Ohne Fragebogen und klare Zählregel lässt sich der Erfolg nicht belegen.
4. **Schriftliche Bestätigung des Bildungsträgers** (R2). Voraussetzung für jedes Angebot.
5. **Sicherung Meisterlabor** (T6). Einfache Handlung, verhindert Totalverlust.
6. **Reale Zweitprüfung und Abdeckungskarte** (I3, I4). Qualitätsnachweis für Träger.
7. **Datei aufteilen, CSP, Formatierer** (T1–T3). Nach dem Pilot.
8. **Steuerliches, Lizenzvertrag, Preis** (R5, R6, G1). Vor der ersten Einnahme.
9. Inhaltliche Erweiterungen (I1, I2, I7). Nach der Zwischenumfrage.

## H7. Die fünf wichtigsten offenen Punkte
1. **Pilot absichern:** Inhalts- und Funktions-Freeze bis zum 1. NTG-Samstag (28.11.2026) und ein Test auf echtem iPhone und Android als Homebildschirm-App. Bisher lief alles nur in Headless-Chromium.
2. **Private E-Mail-Adresse aus dem öffentlichen Code entfernen:** Projekt-Adresse anlegen, `MAIL` ersetzen, Impressum und Datenschutzhinweis prüfen lassen.
3. **Rechte und Datenverantwortung klären:** schriftliche Bestätigung des Bildungsträgers und Entscheidung, wer nach DSGVO für gesendete Lernstände verantwortlich ist.
4. **Pilot messbar machen:** Fragebogen für die Zwischenumfrage und eine klare Regel, wie „Aufgabe erledigt“ gezählt wird, wenn jemand nicht sendet. Optional ein kurzes Stimmungsbild schon nach dem 1. Samstag.
5. **Qualität und Wartbarkeit für Träger belegen:** eine reale externe Fachprüfung (bisher sind alle Gutachten simuliert), das Meisterlabor in ein eigenes Repo sichern und nach dem Pilot die Datei aufteilen.
