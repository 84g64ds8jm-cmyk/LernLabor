# EXPERT_REVIEW: LERNLABOR

Stand: 22.10.2026, `main` = Version 94. Kennzeichnung wie in [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md).

Dieses Dokument enthält **alle Bewertungen, die im Projekt bisher entstanden sind**, jede Rolle einzeln, mit dem Originalauftrag von Markus, den Kernaussagen und dem Stand der Umsetzung. Danach folgen eine vergleichende Synthese und die Grenzen dieser Bewertungen.
Was die App kann, steht in [USAGE_AND_UX.md](USAGE_AND_UX.md). Warum etwas so entschieden wurde, steht in [PROJECT_DECISIONS.md](PROJECT_DECISIONS.md).

> **Wichtig vorab:** Alle „Expertinnen und Experten“ sind **von Claude simulierte Rollen**, keine realen Personen. Es gibt bisher **keine** Bewertung durch einen echten Fachmenschen außerhalb des Projekts und keine Rückmeldung echter Teilnehmender. Die Gutachten haben trotzdem Wert, weil sie den Code tatsächlich ausgeführt, Aufgaben maschinell nachgerechnet und Screenshots vermessen haben. Ihre Urteile (Noten, Punkte) sind aber Einschätzungen, keine Messungen. Siehe Abschnitt „Grenzen“.

Quellen je Gutachten: Originalauftrag aus Projektchat oder Thread (wörtlich zitiert), Gutachtentext aus `/mnt/project-files/feedback/` bzw. `markt/` oder Claude Doc. Umsetzungsstand aus Git-Log, NEWS-Text und Projektgedächtnis.

---

## Übersicht

| Nr. | Gutachten | Datum | Geprüfter Stand | Ergebnis | Umsetzung |
|---|---|---|---|---|---|
| 1 | Strategie-Interview („Grill me“) | 19.10.2026 | Konzept | CONTEXT.md, PRD, ADR 001–003 | Grundlage aller Entscheidungen |
| 2 | Schülersicht „Kevin, 27“ | 20.10.2026 | v47 | 9 Stärken, 18 Schwächen, 4 Lösungspakete | Paket 1 in v48, Teile von Paket 3 später |
| 3 | Professoren-Konsortium (Fachgutachten 1) | 20.10.2026 | v57 | 47 Befunde, Physik gut, Chemie befr.–gut, Mathe gut, Didaktik gut | bis v63/v70 weitgehend |
| 4 | Gymnasiallehrkräfte | 21.10.2026 | v58 | 32 Befunde, Punkte 10/12, 8/10, 10/12, 8/9 | v63, v70 |
| 5 | Produkt- und UX-Gremium | 21.10.2026 | v58 | 24 Befunde, 9 Feature-Ideen, Träger-Reife 2,2/5 | v67 ff.; Icons in v75 zurückgenommen |
| 6 | Meisterlabor-Gremium (Recht, Verwaltung, BWL) | 21.10.2026 | Meisterlabor v1 | 41 Befunde, 9 neue Fälle | vollständig in Meisterlabor v2 |
| 7 | Recht bis zur Lizenz | 21.10.2026 | Geschäftsplan | Schrittliste | überwiegend offen |
| 8 | Marktvergleich (alle Gremien) | 21.10.2026 | v58 | Alleinstellung bestätigt, Lücken benannt | Positionierungssatz übernommen |
| 9 | Rechteprüfung | 21.10.2026 | vertraulich | Pilot/Verkauf möglich | Bestätigung offen |
| 10 | Lernfortschritt-Simulation | 21./22.10.2026 | v85 | Persona JK, Dozentenauswertung, Lücken | v86 (Kursübersicht, Mail-Auswertung) |
| 11 | Fachliches Abschlussgutachten | 22.10.2026 | v86 | Gesamt 1,9 | A1–A5 in v87, B/C in v90 |
| 12 | UI- und Software-Abschlussgutachten | 22.10.2026 | v86 | Gesamt 2,0 | v87 außer Datei-Aufteilung |
| 13 | Sprach- und Optikprüfung (5 Prüfende) | 22.10.2026 | v87 | Rechtschreibung 1,3, Umbrüche 2,7 | v88 |
| 14 | Erfahrener NTG-Dozent | 22.10.2026 | v90 | Gesamt 2,0 | überwiegend v93 |
| 15 | Anwendungsbeispiele bewerten | 20.10.2026 | v42 | Praxisbezug je Thema | „Im Betrieb“ in v43/v44 |

---

## 1. Strategie-Interview „Grill me“

1. **Rolle:** Erfahrener Produkt- und Lernplattform-Berater (berufliche Weiterbildung, Didaktik, Web-Technik, Bildungsrecht).
2. **Fach und Perspektive:** Strategie. Soll Markus befragen, nicht sofort Lösungen liefern.
3. **Originalauftrag** (Projektchat 19.10.2026, Auszug): „Du bist ein erfahrener Produkt- und Lernplattform-Berater mit Hintergrund in der beruflichen Weiterbildung (IHK-Industriemeister), Didaktik, Web-Technik und Bildungs-Recht. … Deine Aufgabe ist nicht, sofort Lösungen zu liefern. Deine Aufgabe ist, Markus **gründlich und beharrlich zu befragen** („grill me“), bis jede wichtige Entscheidung geklärt, begründet und dokumentiert ist.“
4. **Kernaussagen:** Der Kern ist das Rechentraining mit Zufallswerten und Rechenweg. Erst ein eigener Pilot, dann Verkauf. Kein Server, keine Konten.
5. **Stärken (festgehalten):** Eigene Fachkompetenz, eigener Kurs als Testfeld, sehr geringe Betriebskosten.
6. **Risiken:** Zeitbudget 5–7 h/Woche, Haftung für Fachfehler, Rechte gegenüber dem Bildungsträger, KI-Zuverlässigkeit.
7. **Vorschläge:** Pilot ohne KI, Abstandsregel zu IHK-Aufgaben, Erfolgskriterium „2/3 erledigen die Aufgabe“, Zwischenumfrage nach dem 3. Samstag.
8. **Begründung:** Ein Pilot muss mit wenig Aufwand messbar sein; KI und Konten würden Datenschutz und Kosten sprengen.
9. **Widersprüche zu anderen:** Die Annahme „NTG schriftlich 60 Minuten“ aus diesem Interview wurde von der Schülersicht korrigiert (90 Minuten, siehe Nr. 2). Die Linie „im Pilot keine neuen Themen“ wurde in der Praxis nicht gehalten (siehe Synthese).
10. **Folgerung:** ADR 001 bis 003, PRD, ROADMAP, OFFENE-FRAGEN. Gilt weiter als Grundordnung.

## 2. Schülersicht „Kevin, 27“

1. **Rolle:** Kevin, 27, Verfahrensmechaniker für Kunststoff- und Kautschuktechnik, Wechselschicht, lernt am Handy.
2. **Perspektive:** Lernender mit schwachen Mathe-Erinnerungen.
3. **Originalauftrag** (20.10.2026): „Versetze dich nun in die Lage eines Studenten (Alter zwischen 19-35), du hast einen Ausbildung mit technischem Hintergrund (z B Verfahrenmechaniker, Galvanik, Elektroniker) und machst eine Weiterbildung zum Industriemeister. Welche Punkte findest du an der App gut und welche findest du noch weniger gut. Sei dabei detailliert und durchaus kritisch.“ Dazu: eine Präsentation für den Unterricht.
4. **Kernaussagen / Kritik:** 18 Schwächen in drei Gruppen (Handy, Lernen, Motivation). Beispiele: App prüft nur das Endergebnis, Lösungswege zu knapp, längste Antwort oft richtig, Themenreihenfolge, Hausaufgaben zu dünn, keine Erinnerung, wenig Erfolgserlebnis („0 von 87 Themen sicher“), Lernstand-Verlust möglich.
5. **Stärken:** „Die Aufgaben kommen aus meinem Betrieb, nicht aus dem Schulbuch“ (stärkster Punkt), unbegrenzte Zufallsaufgaben, Fehlerdiagnose („etwa um den Faktor 1.000 zu klein. Prüfe die Einheit.“), Simulationen, Aufgaben in Schritten, Prüfungssimulation, ehrlicher Mathe-Check, kein Konto.
6. **Risiken:** Abbruch am dritten Abend, wenn der nächste Schritt unklar ist; Datenverlust auf iPhone.
7. **Vorschläge (feedback/LOESUNGEN.md):** Paket 1 vor dem Pilot (Code); Paket 2 im Unterricht ohne Code (gemeinsamer Export am 1. Samstag, Regel „Rechnung auf Papier“, Paarübung mündlich, anonymer Kursstand am Beamer); Paket 3 während des Pilots (Ablenker-Längen, Lösungswege im Prüfungsstil, Themenreihenfolge, „Mehr üben“, Wochenbilanz, Kalenderdatei); Paket 4 bewusst nicht (Rangliste, Push, Anmeldung, Spielelemente, Videos in der App).
8. **Begründung:** Erwachsene mit wenig Zeit brauchen einen klaren nächsten Schritt mehr als Abzeichen.
9. **Widersprüche:** Prüfungsdauer: diese Bewertung korrigierte 60 auf 90 Minuten (Quelle IHK Nord Westfalen, Prüfungsplan 08:30–10:00). Videos: hier „nicht in der App“, im Marktvergleich als Lücke genannt.
10. **Folgerung / Umsetzung:** Paket 1 live in v48. Aus Paket 3 später umgesetzt: Kalenderdatei (v88/v89), gestufte Hilfe (v90), Themenreihenfolge (GORD). Offen: Ablenker-Längenprüfung als Liste [nicht geprüft]; Wochenbilanz und Selbstkontrolle „Formel, Einsetzen, Einheit, Ergebnis“ nicht umgesetzt [Code: Suche ohne Treffer].

## 3. Professoren-Konsortium (Fachgutachten 1)

1. **Rollen:** Professur Physik und Elektrotechnik, Professur Chemie, Professur Mathematik und Statistik, wissenschaftliche Mitarbeit Fachdidaktik der beruflichen Bildung.
2. **Perspektive:** Fachliche Richtigkeit und Didaktik.
3. **Originalauftrag** (20.10.2026): „Erstelle bitte ein neues Artefakt. Hier bist du nun ein kleines Konsortium aus erfahrenen Professoren jeweils der Chemie, Physik und der Mathematik und Statistik. Dieses wollen nun kritisch aufzeigen, welche Vor- und Nachteile diese Lern-App hat. Sie sollen die Richtigkeit in den einzelnen Bereichen hinterfragen und aufweisen, ob diese korrekt gerechnet sind. Zudem könnte mit dem Konsortium noch eine Fachkraft oder erfahrene wissenschaftliche Mitarbeiterin einer didaktischen Fakultät beiwohnen …“ Nachtrag: „Das Konsortium kann gerne auch strategische Punkte zur Verbesserung geben …“
4. **Kernaussagen:** „Das Lernlabor ist fachlich deutlich solider als die meisten Lernangebote für Industriemeister, die das Gremium kennt.“ In rund 700 Aufgaben kein Programmfehler. „Die Schwachstelle liegt nicht in der Physik oder Chemie, sondern in der Darstellung der Zahlen.“ 47 Befunde (Q1–Q6 Querschnitt, P1–P15, C1–C10, S1–S9, D1–D7), davon 11 A.
   - Querschnitt 1: `nf()` mit drei gültigen Ziffern erzeugt Lösungswege, die nicht aufgehen („K₀ = 250 · 10,5 = 2630 €“ statt 2625,00 €).
   - Querschnitt 2: iPhone-Tastatur bei `inputmode="decimal"` ohne Minus, negative Ergebnisse nicht eingebbar; „1.276“ wird als 1,276 gelesen.
5. **Stärken:** Betriebsnahe Prüfungsaufgaben (Schaltschrank kippen/rutschen, Gabelstapler), Wahrscheinlichkeitsnetz und Fähigkeitskennwerte „vorbildlich“, verteiltes Wiederholen (1, 3, 7, 14, 30, 60 Tage), Fehlerdiagnose am Ergebnis, Folgefehler-Wertung.
6. **Schwächen:** Keine gestuften Hilfen; Ablenker erklären keine Fehlvorstellung; ±2 % lässt bei Geld bis 30 € durch; Einheitenwechsel übersprungen; Lücken im Rahmenplan (Getriebe, Schall in dB, CO₂-Bilanz, U-Wert).
7. **Vorschläge (strategisch):** Vor dem Pilot A-Befunde, Rundung, ±-Taste, Konstantenblatt. Im Pilot Mathe-Check vorher/nachher als Wirkungsbeleg, Fehlermeldungen monatlich auswerten, gestufte Hilfen an zwei Themen testen. Vor Verkauf: automatische Prüfung als GitHub-Workflow, Abdeckungskarte gegen den Rahmenplan, **zweite fachliche Prüfung durch eine Person außerhalb des Projekts**, Prüfungsmodus „nur erlaubte Hilfsmittel“, WCAG 2.1 AA.
8. **Begründung:** „Bildungsträger kaufen keine Simulationen, sie kaufen Sicherheit, dass Inhalte stimmen und zur Prüfung passen.“ Rechenwege wurden von Hand nachgerechnet, 508 Rechenzeilen per Skript.
9. **Widersprüche:** Toleranz ±2 % hier kritisch für Geld; das Abschlussgutachten (Nr. 11) nennt 2 % „prüfungsgerecht“. Neue Themen: hier empfohlen, ROADMAP sagt „keine neuen Themen vor dem Pilot“.
10. **Umsetzung:** Rundung (`nf` 4 Ziffern, `nfe`), ±-Taste und `pnum()`, A-Befunde und viele B/C bis v63/v70 [Doku: Abschlussgutachten „Seit v57 wurden die meisten schweren Fehler behoben“]. Automatische Prüfung als CI: **umgesetzt** (check.yml). Gestufte Hilfe: v90. Offen: Konstantenblatt und Prüfungsmodus „nur erlaubte Hilfsmittel“ (beide nicht im Code), Abdeckungskarte, reale Zweitprüfung, WCAG-Prüfung, Rahmenplan-Lücken.

## 4. Gymnasiallehrkräfte

1. **Rollen:** Gymnasiallehrkräfte Physik, Chemie, Mathematik, Wirtschaft.
2. **Perspektive:** Richtigkeit und didaktischer Mehrwert, Lernlabor und Meisterlabor.
3. **Originalauftrag** (21.10.2026): „In einem weiteren Konsortium … dieses Mal nun bestehend aus Gymnasiallehrern von Physik, Chemie, Mathe Wirtschaft sollen das Lernlabor und das Meisterlabor prüfen auf Richtigkeit und auf den didaktischen Mehrwert, sollen jedoch kritisch und konstruktiv in ihrer Bewertung sein, ein Urteil geben und mögliche Verbesserungsvorschläge …“
4. **Kernaussagen:** 32 Befunde (M1–M11, W1–W7, Ph, Ch, X). Notenpunkte Richtigkeit/Mehrwert: Physik 10/12, Chemie 8/10, Mathematik 10/12, Wirtschaft 8/9. „Nach Behebung der A-Befunde Richtigkeit 12 in allen Fächern.“ Beispiele: M1 falscher ggT beim Ausklammern (8 von 15 Stichproben), M2 negative Restmenge „164 − 200 = -36“ in gut 3 % der Läufe, M3 Prozent statt Prozentpunkte.
5. **Stärken:** Betriebsbezug, Simulationen, Breite der Mathematik.
6. **Schwächen:** Fehlende Grundlagen (negative Zahlen, Flächen und Körper, Runden und sinnvolle Genauigkeit); Zählgrößen als Bruch („58,5 Ausschuss“).
7. **Vorschläge:** Zufallswerte so wählen, dass Ergebnisse sinnvoll sind (teilerfremd, ganzzahlig, positiv); drei kurze Mathe-Themen ergänzen.
8. **Begründung:** Stichproben mit 3.000 Läufen je Generator.
9. **Widersprüche:** Fordert neue Themen (wie Nr. 3), gegen die ROADMAP-Linie.
10. **Umsetzung:** v63 (PR #35) und v70 (PR #41) [Gedächtnis]. Das Prüfskript testet seitdem ganzzahlige Zählgrößen [Code].

## 5. Produkt- und UX-Gremium

1. **Rollen:** Produktmanagerin EdTech („Wer am dritten Abend nicht weiß, wo er weitermacht, ist weg.“), Entwickler Web & PWA („Eine PWA muss sich wie eine App benehmen“), Designerin Marke & Editorial („Wenn alles eine Karte ist, ist nichts wichtig.“), UX-Lead Mobile („Der erste Bildschirm entscheidet, ob jemand anfängt.“).
2. **Perspektive:** Nutzererlebnis, nicht Fachinhalt. Handy 390 px und Laptop 1366 px.
3. **Originalauftrag** (21.10.2026): „… In diesem Konsortium aus erfahrenen Produkt- und App-Entwicklern, Grafikdesigner und Experten für User Interfaces haben einen kritischen und fundierten Einblick auf diese App, um zu beurteilen, welche Vor- und Nachteile, welche Features haben wir vielleicht in dieser App bisher vergessen, welche Verbesserungsmöglichkeiten könnte man anbringen … Sei kritisch, ehrlich und gib jedoch auch Raum für Lob …“
4. **Kernaussagen:** „Der Kern ist besser als bei den meisten kommerziellen Lern-Apps … Die Hülle drumherum verhält sich aber noch wie eine lange Webseite und nicht wie eine App.“ Skala 1–5: Kernnutzen 4,5, Feedback 4,0, Datenschutz & Offline 4,5, Visuelle Identität 3,5, Handy 2,8, Navigation 2,5, Barrierefreiheit 3,0, **Reife für Träger-Lizenz 2,2**.
5. **Stärken:** Simulation + Zufallsaufgaben + Diagnose als „Burggraben“; Datenschutz als Produktmerkmal („im Pitch nach vorne“); schnell und offline; Formeln wie im Buch; Laptop-Themenseite; klare Grundordnung mit vier Bereichen.
6. **Schwächen:** Keine Zurück-Taste und keine Adressen je Ansicht, erster Bildschirm einer Themenseite überladen, keine Rangordnung der Knöpfe, Tippflächen, uneinheitliche Icons.
7. **Vorschläge:** 24 Befunde A1–F-2 plus 9 Feature-Ideen F1–F9; Fahrplan; Liste „Bewusst nicht“.
8. **Begründung:** Durchklicken auf zwei Geräteklassen, kein Messwert, ausdrücklich „ein Urteil“.
9. **Widersprüche:** Vorschlag C2 einheitliche Linien-Icons im Menüband widerspricht Markus' späterem Wunsch (Emojis zurück, v75). Navigation 2,5 hier, im Abschlussgutachten (Nr. 12) „fast alle Bedienprobleme behoben“.
10. **Umsetzung:** Hash-Routing mit Zurück-Taste und Adressen (v67), Seitentitel je Ansicht (v87), Tippflächen (v87). **C2 zurückgenommen** in v75 auf Markus' Wunsch. Feature-Ideen: Einführungstour (v91) umgesetzt, weitere nicht vollständig geprüft.

## 6. Meisterlabor-Gremium (Recht, Verwaltung, BWL)

1. **Rollen:** Rechtsanwalt, Verwaltungsfachangestellte, Betriebswirt.
2. **Perspektive:** Richtigkeit des Meisterlabors Basis (ReHa, BeHa, MIKP, ZiB).
3. **Originalauftrag** (21.10.2026): „… Prüfen Sie bitte kritisch und ehrlich das LearnApp Meisterlabor … Geben Sie einen fundierten Überblick, prüfen Sie die Inhalte kritisch und geben Sie Verbesserungsvorschläge … Wenn Sie noch Fallbeispiele wissen oder weitere Rechnungen, können Sie diese auch.“
4. **Kernaussagen:** 41 Befunde, 9 neue Fälle, 17 neue Rechentypen. Schwere Befunde u. a. B1 Fehlerkosten, R2 Teilurlaub, ein Fehler zum Produkthaftungsrecht. Kalkulationsschema, BAB, Engpass-Deckungsbeitrag, Little's Law „fachlich richtig und selten in Lernmaterial“. 71 Rechentypen je 3.000-mal ohne Rechenfehler.
5. **Stärken:** Datenpanne als Fall mit Behörde, DSB und Betriebsrat „genau richtig“; interaktive Grafiken (Break-even, FMEA).
6. **Schwächen:** Keine Übersicht der zuständigen Stellen; Fristen nie als Datum berechnet; Rundungshinweise fehlen.
7. **Vorschläge:** Fristenrechner mit Datum, Rechengrößen-Block mit Jahreswechsel-Checkliste, neue Module (Arbeitsgericht & Beendigung, Der Einzelne im Betrieb).
8. **Begründung:** Rechtsstand Oktober 2026 (neues ProdHaftG, ArbZG-Reform nur Entwurf, § 26 BDSG nach EuGH C-34/21).
9. **Widersprüche:** Keine direkten zu anderen Gremien; der Rechtsstand macht jährliche Pflege nötig, was mit dem Zeitbudget kollidiert.
10. **Umsetzung:** Markus: „alles übernehmen und live“, erledigt in Meisterlabor Version 2 am 21.10.2026 [Gedächtnis]. Version 3 und 4 folgten (Design, Kurstermine, Tour).

## 7. Recht und Steuern bis zur Lizenz

1. **Rollen:** Rechtsanwalt für Datenschutz und Steuerrecht, Mitarbeiterin der Finanzverwaltung, Steuerberater.
2. **Perspektive:** Rechtliche Schritte vom Pilot bis zur Lizenz.
3. **Originalauftrag** (21.10.2026, sinngemäß): Welche Schritte sind vom ersten Einsatz der Pilot-App bis zur Lizenzierung durch einen Bildungsträger nötig, in welcher Reihenfolge, und worauf ist zu achten?
4. **Kernaussagen (öffentlicher Teil):** Rechte an der App sichern, schriftlicher Lizenzvertrag, datenarm bleiben. Persönliche steuerliche Punkte stehen bewusst nicht in diesem öffentlichen Repo; sie liegen im Projektarchiv „Lernlabor v2“ (Claude Doc).
5. **Stärken der Ausgangslage:** Kein Server, keine Konten: geringe Datenschutzlast.
6. **Risiken:** Unklare Rechte gegenüber dem Bildungsträger; Verantwortlichkeit für die Daten bei „Lernfortschritt senden“.
7.–8. **Begründung:** Allgemeine Rechtslage Stand Oktober 2026. **Keine Rechtsberatung.**
9. **Widersprüche:** Das Gremium will Rechte vor dem Pilot klären, der Pilot startet aber vorher ohne schriftliche Bestätigung des Bildungsträgers.
10. **Umsetzung:** Überwiegend offen; Handlungen von Markus.

## 8. Marktvergleich

1. **Rollen:** Alle vorherigen Gremien gemeinsam.
2. **Perspektive:** Wettbewerb und Key Features für Pitch und Video.
3. **Originalauftrag** (21.10.2026): „Die vorherigen Konsortien sollen sich zusammenstimmen und prüfen, ob es online bereits vergleichbare Lern-Apps mit diesen Inhalten gibt. Dabei sollen sie die grundlegenden Features des Lernlabors mit den schon bestehenden Produkten … vergleichen und die Key Features in unserem Video erarbeiten.“
4. **Kernaussagen:** Es gibt NTG-Quiz-Apps (z. B. „NTG Trainer Basisqualifikation“, 500+ Fragen; „Industriemeister Prüfungen“, rund 2.900 Quizfragen), Videokurse (b-oversee 498 €), Abo-Nachhilfe (S&T 89–149 €/Monat), Bücher (Kiehl), freie Simulationen (PhET). „Kein gefundenes Angebot verbindet Simulationen, unbegrenzte Rechenaufgaben mit Zufallswerten, Rechenweg in Schritten und Fehlerdiagnose.“
5. **Stärken:** Rechentraining statt Wissensabfrage; ohne Konto und offline.
6. **Schwächen:** Bekanntheit, Store-Präsenz, nur NTG, kleinerer Fragenpool, keine Videos, keine adaptive Wiederholung.
7. **Vorschläge:** Positionierungssatz „Das NTG-Rechentraining zum Kurs …“; Key Features für Video.
8. **Begründung:** Web-Recherche am 21.10.2026, **Anbieterangaben, nicht selbst getestet**, Preise ohne Gewähr.
9. **Widersprüche:** Videos als Lücke vs. Schülersicht „nicht in der App“.
10. **Umsetzung:** Positionierung in Pitch übernommen [Gedächtnis].

## 9. Rechteprüfung gegenüber dem Bildungsträger

Am 21.10.2026 geprüft (Inhalte vertraulich, nicht im Repo). Ergebnis: Pilot und späterer Verkauf sind möglich; der Bildungsträger ist informiert, eine **schriftliche Bestätigung ist offen**.

## 10. Lernfortschritt-Simulation

1. **Rolle:** Simulation einer Teilnehmerin/eines Teilnehmers „JK“, gut bis sehr gut, 1–1,5 h pro Woche; erweitert auf einen Kurs.
2. **Perspektive:** Was sehen Teilnehmende, Dozent und Bildungsträger?
3. **Originalauftrag** (21.10.2026): „Kannst du bei der Lern-App einen Lernfortschritt simulieren, bei dem ein Schüler, nehmen wir an, gut bis sehr gut ist, der in der Woche circa eine Stunde bis eineinhalb Stunden mit der Lern-App verbringt, wie sein Lernstand ist und wie eine mögliche Auswertung davon für den Dozenten aussehen könnte, damit man Rückmeldung an Bildungsträger geben könnte …“ Nachtrag: „… simulieren, dass du von mindestens 2/3 der Schüler regelmäßigen … Lernfortschritt bekommst.“
4. **Kernaussagen:** Datenfluss über „Lernfortschritt senden“ funktioniert; Rückmeldung an Träger als anonyme Kennzahlen möglich, ohne Nutzungszählung.
5. **Stärken:** Kein Server nötig, Dozent sieht Schwächen je Thema.
6. **Lücken:** Kursweite Auswertung in einem Schritt fehlte; die Simulation nutzte angenommene Kurstermine, die von den echten abweichen.
7. **Vorschläge:** Kursübersicht mit Teilnehmerzahl, „Auswertung an mich mailen“.
8. **Begründung:** Echte App-Daten in Playwright erzeugt, Screenshots.
9. **Widersprüche:** Die simulierte 2/3-Rücklaufquote ist eine **Annahme**, kein Beleg für den Pilot.
10. **Umsetzung:** v86 (PR #52). Beispiel-Lernstand JK unter Ich in v89 [Gedächtnis]. Dateien in `/mnt/project-files/lernfortschritt-simulation/`.

## 11. Fachliches Abschlussgutachten (v86)

1. **Rollen:** Lehrstühle Experimentalphysik, Physikalische Chemie, Angewandte Mathematik und Statistik, Technikdidaktik in der beruflichen Bildung.
2. **Perspektive:** Abschließende fachliche Richtigkeit vor dem Pilot.
3. **Originalauftrag** (22.10.2026): „Du bist noch, nur nochmal das Konsortium aus Universitätsprofessoren, die die Richtigkeit des Tools abschließend noch einmal genau und kritisch hinterfragen und bewerten sollen. … Wie vorher sollen dabei negative Sachen herausgearbeitet werden, positive Sachen hervorgerufen werden und auch noch Verbesserungsvorschläge gegeben werden.“
4. **Kernaussagen:** „Das Lernlabor ist fachlich solide und für den Pilot im November einsetzbar. … Es bleiben keine Fehler, die Teilnehmende systematisch falsch lernen lassen, aber gut zwei Dutzend Stellen, an denen eine Zahl, ein Satz oder eine Rundung einen aufmerksamen Prüfling verwirrt.“ Noten: Physik und Technik 1,7, Chemie 2,0, Mathematik und Statistik 2,0, Didaktik 1,7, **Gesamt 1,9**. 9.440 Aufgaben ohne ungültigen Wert, 6.848 Rechenschritte maschinell nachgerechnet, rund fünf Abweichungen nur durch Anzeige-Rundung.
5. **Stärken:** Hydraulik, Pneumatik, Drehstrom, Kräfte & Momente praxisnah; Statistik entspricht dem Rahmenplan; Fach Sicherheit korrekt; „Die 348 ‚Fehler finden‘-Aufgaben … sind das stärkste Alleinstellungsmerkmal.“
6. **Schwächen (5 A-Befunde):** ERK Schmelzwärme listet richtiges Vorgehen als Fehler; Titel „Zinkverbrauch“ rechnet mit Eisen; `nfe()` rundet 1,155 € auf 1,15 €; γ ≈ 3·α für Flüssigkeiten; MCQ 128 „Ca+Mg bilden Kalk“.
7. **Vorschläge:** A sofort, B/C im Pilot.
8. **Begründung:** Maschinelle Nachrechnung plus Stichproben von Hand.
9. **Widersprüche:** Toleranz 2 % „prüfungsgerecht“ vs. Fachgutachten 1 (bei Geld zu grob).
10. **Umsetzung:** Markus: „die Punkte aus dem … fachlichen Abschlussgutachten 1 bis 5 alle umsetzen“ → v87 (PR #53). Übrige B/C: „Bitte setze auch die Fachkorrekturen um.“ → v90 (PR #56).

## 12. UI- und Software-Abschlussgutachten (v86)

1. **Rollen:** Zwei Interface-Designer/innen, zwei Softwareentwickler (Web-Apps, Barrierefreiheit).
2. **Perspektive:** Bedienung, Handy, Barrierefreiheit, Code-Qualität.
3. **Originalauftrag:** wie Nr. 11 („Das Konsortium für die User Interface und Softwareentwickler schauen sich das Tool auch nochmal abschließend an.“).
4. **Kernaussagen:** „Für die Teilnehmenden ist das Lernlabor schnell, ruhig und am Handy gut bedienbar. … Die Schwächen liegen jetzt vor allem unter der Haube: eine einzige Datei mit 1,39 MB und 5.156 Zeilen, Tests, die nur prüfen, ob etwas abstürzt, und kleine Lücken bei der Barrierefreiheit. Für den Pilot reicht das. Für einen Verkauf an Bildungsträger sollte die Wartbarkeit vorher besser werden.“ Noten: Gestaltung 1,7, Handy 1,7, **Barrierefreiheit 2,7**, Ladezeit 1,3, **Wartbarkeit 3,0**, Gesamt 2,0.
5. **Stärken:** Seite steht lokal nach 160–220 ms; keine Konsolenfehler; kein seitliches Verrutschen bei 320/390/1366 px; Update-Hinweis; präparierter Kurslink wirkungslos; CI-Test.
6. **Schwächen (keine A):** Tippflächen < 32 px auf Themenseiten, Symbolknöpfe ohne Namen, Slogan in der Hauptüberschrift verschluckt, leere „Meine Fehler“-Ansicht, Geldrundung, alle Ansichten heißen „Lernlabor“, Datei-Aufteilung.
7. **Vorschläge:** 44 × 44 px, aria-label, eine zentrale Rundung, `document.title` je Ansicht, Inhalte in eigene Dateien mit Build-Skript.
8. **Begründung:** Automatische Messung von elf Ansichten auf vier Formaten, Code-Durchsicht.
9. **Widersprüche:** Datei-Aufteilung: Gutachten empfiehlt vor Verkauf; Claude empfahl, Markus entschied „nach dem Pilot“ (kein Widerspruch im Ergebnis, nur im Zeitpunkt).
10. **Umsetzung:** v87 alle Punkte außer Aufteilung. Aufteilung: „Eigener PR nach dem Pilot“ (Markus: „Ja, deine Empfehlung.“, 22.10.2026).

## 13. Sprach- und Optikprüfung

1. **Rollen:** Lena, 22, Mechatronikerin, kleines Android (320 px); Murat, 34, Schichtleiter, iPhone (390 px); Sabine, 46, Industriekauffrau im Quereinstieg, Laptop; ein zweiter NTG-Dozent; eine App-Designerin.
2. **Perspektive:** Rechtschreibung, Umbrüche, sauberes Äußeres.
3. **Originalauftrag** (22.10.2026): „Anschließend kannst du bitte aus der Sicht von 3 Studenten, eines anderen Dozentens und eines App-Designers die komplette App, alle Textbausteine, alle Regler auf richtige Rechtschreibung, schöne Zeilenumbrüche und ein sauberes Äußeres prüfen.“
4. **Kernaussagen:** 14.167 Textstellen, 8.296 Wörter mit LibreOffice-Wörterbuch geprüft: kein echter Tippfehler. Rechtschreibung 1,3, Zeichensetzung 1,7, **Umbrüche 2,7**, Äußeres 1,7.
5. **Stärken:** „Die Texte sind verständlich und kurz.“ (Lena); „Die Fachsprache ist sauber und einheitlich, Du-Form durchgehend.“ (Dozent).
6. **Schwächen:** 13 falsch getrennte Wörter (Besch-leu-ni-gung, Widers-tand …), „Mathem / atik“ bei 320 px, lange Reglerlabels, drei Ergebniskacheln bei 320 px, gerade Anführungszeichen.
7. **Vorschläge:** Trennregeln mit Anlauten und Ausnahmeliste; kleinere Schrift in schmalen Kacheln; kurze Labels. Dozent: in Prüfungstexten „multipliziert“ statt „malgenommen“.
8. **Begründung:** Vermessung aller Themenseiten auf drei Breiten plus Screenshots.
9. **Widersprüche:** Umgangssprache: Sabine findet „Malrechnen“ angenehm, der Dozent will in Prüfungstexten Fachsprache. Nicht entschieden.
10. **Umsetzung:** „Ja, bitte setze die Punkte der Sprachenoptikprüfung um.“ → v88 (PR #54).

## 14. Erfahrener NTG-Dozent

1. **Rolle:** Dozent, der den Kurs seit 14 Jahren mit eigenem Material unterrichtet und das Lernlabor zum ersten Mal sieht.
2. **Perspektive:** Würde ein Kollege die App nutzen, und warum?
3. **Originalauftrag** (22.10.2026): „Des Weiteren bist du nun ein anderer Dozent, der bisher seit Jahren diesen Kurs lehrt, eigenes Unterrichtsmaterial hat und nun die App vorgelegt bekommt. Sei bitte kritisch, konstruktiv und gib an, was dir an der Lern-App, Lernlabor gefällt, was dir nicht gefällt und warum du sie überhaupt nutzen solltest.“
4. **Kernaussagen:** Gesamt 2,0. Fach 1,8, Didaktik 1,7, Prüfungsnähe 2,3, **Steuerung durch den Dozenten 2,7**, Handy 1,8. Claude Doc https://claude.ai/artifact/TnzVyByNzgUFdbEhYLKFqW.
5. **Stärken:** Übungsmenge, die er selbst nie erstellen könnte; Fehlerdiagnose; Kursbezug.
6. **Schwächen:** Kaum Steuerung (eigene Aufgaben, Freigabe je Termin); Formelzeichen weichen von seinem Material ab; Skizzieren und Begründen fehlten; Themenreihenfolge; fehlende Themen (Getriebe, Schall, U-Wert, CO₂); keine Änderungsliste.
7. **Top 7:** Formelzeichen-Liste + Handout, eigene Aufgaben, Skizzen-/Begründungsaufgaben, Themenreihenfolge, fehlende Themen, Änderungsliste, Sende-Erinnerung.
8. **Begründung:** Ein Fremddozent übernimmt die App nur, wenn er sie an sein Material anpassen kann.
9. **Widersprüche:** Bestätigt die Rahmenplan-Lücken aus Nr. 3; widerspricht der Linie „keine neuen Themen“.
10. **Umsetzung:** v93 (PR #59): Glossar-Vergleich GLA, Dozenten-Handout, eigene Aufgaben per Link, BEW (43), Kursplan, CHL, Sende-Erinnerung. **Offen:** Aufgaben sperren/freigeben, neue Themen (nach dem Pilot).

## 15. Anwendungsbeispiele bewerten

1.–3. Thread vom 20.10.2026 zur Bewertung der Betriebsbeispiele; Originalauftrag in dieser Bestandsaufnahme **nicht wörtlich gesichtet**.
4.–8. Ergebnis: je Thema eine Zeile „🏭 Im Betrieb“ mit konkretem Praxisbezug.
9. Keine Widersprüche.
10. Umsetzung v43/v44 (PR #10, #11), heute 103 BET-Einträge [Code].

---

## Vergleichende Synthese

### Übereinstimmungen (von mehreren Gremien unabhängig genannt)
1. **Der Kern trägt:** Simulation + Zufallsaufgaben + Rechenweg + Fehlerdiagnose ist besser als bei Konkurrenz (Nr. 2, 3, 5, 8, 11, 14).
2. **Betriebsbezug** ist der stärkste Punkt für die Zielgruppe (Nr. 2, 3, 15).
3. **Zahlen und Rundung** waren die größte Fehlerquelle (Nr. 3, 4, 11, 12) und sind heute weitgehend behoben.
4. **Datenschutz ohne Konto** ist ein Verkaufsargument (Nr. 2, 5, 7, 12).
5. **Wartbarkeit** (eine Datei) ist die Hauptschwäche vor einem Verkauf (Nr. 5, 12).
6. **Qualitätsnachweis** ist für Bildungsträger entscheidend: CI-Test (erledigt), reale Zweitprüfung (offen), Abdeckungskarte (offen) (Nr. 3, 8).
7. **Rahmenplan-Lücken** Getriebe, Schall, U-Wert, CO₂ (Nr. 3, 14).
8. **Barrierefreiheit** bleibt unter dem Rest (Nr. 3, 5, 12).

### Einzelmeinungen (nur ein Gremium)
- Prüfungsmodus „nur erlaubte Hilfsmittel“ (Nr. 3).
- Wochenbilanz statt „0 von 87 sicher“ (Nr. 2).
- Fristen als Datum berechnen (Nr. 6, Meisterlabor).
- Fachsprache in Prüfungstexten statt Umgangssprache (Nr. 13, Dozent).

### Ungelöste Konflikte
| Konflikt | Position A | Position B | Stand |
|---|---|---|---|
| Menüband-Icons | Einheitliche Linien-Icons (Nr. 5, C2) | Emojis (Markus) | **Entschieden für Emojis** (v75). Nicht wieder öffnen |
| Nutzungszählung | Für Wirkungsnachweis beim Träger hilfreich (implizit Nr. 3, 5, 10) | Datensparsamkeit, ADR 001 | **Entschieden: nein im Pilot** (21.10.2026). Wirkung über Mathe-Check vorher/nachher und Umfrage belegen |
| Zeitpunkt Datei-Aufteilung | Vor Verkauf (Nr. 12) | Nicht vor dem Pilot (Risiko) | **Entschieden: eigener PR nach dem Pilot** |
| Prüfungsdauer | 60 min (Interview Nr. 1) | 90 min (Nr. 2, IHK Nord Westfalen) | **90 min gilt**; Prüfungsordnung der zuständigen IHK gegenprüfen |
| Rechenweg | App prüft Rechenweg (Nr. 2, 3) | Rechnung auf Papier, App prüft Ergebnis (LOESUNGEN Paket 2) | Teilweise: Schritte und gestufte Hilfe; vollständige Wegprüfung offen |
| Videos | Lücke im Markt (Nr. 8) | Nicht in der App, höchstens verlinkt nach Umfrage (Nr. 2) | **Offen**, nach Zwischenumfrage |
| Neue Themen vor dem Pilot | Rahmenplan-Lücken schließen (Nr. 3, 4, 14) | ROADMAP: keine neuen Themen vor dem Pilot | **Faktisch gebrochen:** von rund 50 auf 116 Themen und neues Fach Sicherheit. Für die Zeit bis 28.11.2026 neu entscheiden (siehe OPEN_QUESTIONS.md) |
| Spielmechanik | Wenig Erfolgserlebnis (Nr. 2) | Keine Abzeichen-Flut, ehrliche Bilanz (LOESUNGEN Paket 4) | Gelöst als dezente „Lernserie“; keine Ranglisten |
| Toleranz 2 % | Für Geld zu grob (Nr. 3) | Prüfungsgerecht (Nr. 11) | Offen; Geldrundung selbst behoben |
| Automatische Tests | „Vor dem Verkauf“ (Nr. 3) | früher sinnvoll | Erledigt früher als gefordert (CI) |

---

## Umsetzungsstand der Empfehlungen (Matrix)

| Empfehlung | Quelle | Status v94 |
|---|---|---|
| Rundung / Zahlenformat | 3, 4, 11, 12 | Umgesetzt (v63 ff., `nfe` kaufmännisch v87) |
| ±-Taste, Eingabe mit Tausenderpunkt | 3 | Umgesetzt (`pnum`) |
| Zurück-Taste, Adressen, Seitentitel | 5, 12 | Umgesetzt (v67, v87) |
| Tippflächen 44 px, aria-label | 12 | Umgesetzt (v87); Bildschirmleser-Test offen |
| Gestufte Hilfen | 3 | Umgesetzt (v90) |
| CI-Prüfskript | 3 | Umgesetzt |
| Kalenderdatei / Kurstermine | 2 | Umgesetzt (v88/v89) |
| Einführungstour | 5 | Umgesetzt (v91/v92) |
| Eigene Dozentenaufgaben, Kursplan, CHL, Handout | 14 | Umgesetzt (v93) |
| Begründen/Skizzieren | 14 | Umgesetzt (v93, 43 Aufgaben) |
| Silbentrennung, Kacheln 320 px | 13 | Umgesetzt (v88) |
| Datei aufteilen | 12 | **Offen, nach dem Pilot** |
| Aufgaben sperren/freigeben | 14 | **Offen** |
| Rahmenplan-Themen Getriebe, Schall, U-Wert, CO₂ | 3, 14 | **Offen, nach dem Pilot** |
| Reale Zweitprüfung durch externe Fachperson | 3 | **Offen** |
| Abdeckungskarte Rahmenplan | 3 | **Offen** |
| Konstantenblatt nach erlaubter Formelsammlung | 3 | Nicht umgesetzt [Code: Suche ohne Treffer] |
| Prüfungsmodus „nur erlaubte Hilfsmittel“ | 3 | Nicht umgesetzt [Code: Suche ohne Treffer]; die Simulation hat eine Formelsammlung |
| WCAG-2.1-AA-Prüfung | 3, 12 | **Offen** |
| Ablenker-Längenprüfung | 2 | Nicht geprüft |
| Wochenbilanz, Selbstkontrolle „Formel, Einsetzen, Einheit, Ergebnis“ | 2 | Nicht umgesetzt [Code: Suche ohne Treffer] |
| Schriftliche Bestätigung des Bildungsträgers, Lizenzvertrag | 7, 9 | **Offen** (Markus' Handlung) |
| Projekt-Mailadresse | 7 | **Offen** |

„Nicht geprüft“ heißt: in dieser Bestandsaufnahme weder im Code noch in den Unterlagen ein Beleg für die Umsetzung gefunden. Es kann trotzdem umgesetzt sein.

---

## Grenzen dieser Bewertungen
1. **Alle Rollen sind simuliert** und stammen vom selben Modell, das auch den Code geschrieben hat. Das birgt die Gefahr blinder Flecken: Fehler, die Claude beim Schreiben nicht sieht, sieht es beim Prüfen oft auch nicht. Die maschinellen Nachrechnungen mildern das nur für Rechenfehler, nicht für fachliche Konzeptfehler oder didaktische Fehleinschätzungen.
2. **Noten und Punkte sind Urteile**, keine Messwerte. Sie sind zwischen Gutachten nicht streng vergleichbar (Skala 1–5 bei Nr. 5, Schulnoten bei Nr. 11–14, Notenpunkte bei Nr. 4).
3. **Keine echten Nutzer, keine echten Geräte.** Alle Tests liefen in Headless-Chromium.
4. **Marktvergleich** beruht auf Anbieterangaben vom 21.10.2026, kein Produkt wurde selbst getestet.
5. **Recht bis zur Lizenz** ist keine Rechtsberatung.
6. **Schnelle Iteration:** Gutachten wurden oft innerhalb weniger Stunden umgesetzt. Ein Abstand zum Prüfen der Umsetzung selbst (Regressionen) bestand nur über das Prüfskript und das jeweils nächste Gutachten.

**Empfehlung daraus:** Vor einer Träger-Lizenz mindestens eine **reale** fachliche Prüfung (z. B. eine Kollegin oder ein Kollege aus dem NTG-Kollegium) und eine Rückmeldung echter Teilnehmender aus dem Pilot. Die simulierten Gutachten sollten im Pitch nicht als „externe Gutachten“ bezeichnet werden.
