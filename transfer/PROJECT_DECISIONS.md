# PROJECT_DECISIONS: LERNLABOR

Stand: 22.10.2026, `main` = Version 94. Kennzeichnung wie in [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md).

Dieses Dokument hält fest, **was entschieden wurde, warum, was verworfen wurde und was daraus folgt**. Daten stammen aus ADRs, CONTEXT.md, Projektchat, Threads, Projektgedächtnis und Git-Log. Wo ein Datum oder Stand nicht belegt ist, steht das dabei.
Die Bewertungen hinter vielen Entscheidungen stehen in [EXPERT_REVIEW.md](EXPERT_REVIEW.md), offene Folgefragen in [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md).

---

## F1. Grundsatzentscheidungen (Architektur, Geschäft, Recht)

### D-01 Ohne Konten, ohne Server, kein Abo (ADR 001, 19.10.2026)
- **Entscheidung:** Lernlabor und Meisterlabor bleiben je eine HTML-Datei ohne Server und ohne Nutzerkonten. Kein Abo für Einzelne.
- **Begründung:** Kein Datenschutz- und Pflegeaufwand für Konten; passt zum Zeitbudget; Datenschutz wird Verkaufsargument.
- **Verworfen:** Abo für Einzelne (braucht Anmeldung, Bezahlung, Zugangskontrolle, Server).
- **Bevorzugt:** Lizenz für Bildungsträger (eigene Adresse oder Datei je Träger); Einmalkauf möglich.
- **Folgen:** Nutzung nicht zentral messbar; Lernstand kann verloren gehen; kein Kopierschutz (vertraglich regeln).

### D-02 Abstandsregel zu IHK-Prüfungsaufgaben (ADR 002, 19.10.2026)
- **Entscheidung:** Alte Prüfungen nur auswerten (Thema, Aufgabenart, Schwierigkeit). Beim Schreiben ist keine Prüfungsaufgabe offen. Jede Aufgabe entsteht aus Lernziel und Auswertungsliste, mit eigenem Betriebsbeispiel und eigenen Zahlen.
- **Begründung:** Urheberrecht, Bearbeitung nach § 23 UrhG; Herkunft jeder Aufgabe belegbar.
- **Verworfen:** Freie Inspiration direkt an der Vorlage (Abstand nicht nachweisbar); gar kein Blick in alte Prüfungen (Prüfungsnähe leidet).
- **Folge:** Bei Verkauf Prüfung durch Anwalt für Urheberrecht empfohlen. Am 18.10.2026 wurden 13 Prüfungsaufgaben „mit hoher bzw. mittlerer Ähnlichkeit zur Vorlage neu geschrieben“ [Code: Git-Log]; das war vor der ADR und zeigt, dass es frühere, vorlagennahe Fassungen gab.

### D-03 Pilot ohne KI (ADR 003, 19.10.2026)
- **Entscheidung:** Im NTG-Pilot keine KI. KI-Bereiche in der GitHub-Fassung ausgeblendet, kein Artifact-Link an Teilnehmende. Markus testet die KI parallel selbst.
- **Begründung:** KI läuft nur im Claude-Artifact über das Konto des Nutzers, ist mit echten Nutzern ungetestet.
- **Verworfen:** KI-Bereiche sichtbar mit Hinweis (wirkt wie ein Fehler); Artifact-Link als freiwilliges Extra (Konto bei KI-Anbieter nötig, ungetestet).
- **Umgesetzt:** PR #1 (19./20.10.2026) [Code: Git-Log „KI ausblenden“].
- **Offen:** KI-Zugangsmodell nach dem Pilot.

### D-04 Zielgruppe und Pilot (CONTEXT Block A, 19.10.2026)
- Erste Zielgruppe: Markus' eigene Teilnehmende. Träger und weitere Prüflinge frühestens nach dem Pilot.
- Pilot: NTG-Kurs ab November 2026, nur Lernlabor, GitHub Pages, PWA ohne KI.
- Das Handy ist der kritische Fall.
- Einsatz: feste Aufgabe von Samstag zu Samstag passend zum Unterrichtsthema.
- **Erfolg:** ≥ 2/3 erledigen die Aufgabe bis zum nächsten Termin **und** anonyme Zwischenumfrage nach dem 3. Samstag überwiegend positiv; Abschlussumfrage zusätzlich. Ersetzt am 19.10.2026 die Fassung „wöchentliche Nutzung, Umfrage am Kursende“.
- **Verworfen als Erfolgsmaß:** Bestehensquote („bei einer Kursgröße kein belastbarer Beleg“).

### D-05 Geschäftsmodell (CONTEXT Block H, 19.10.2026)
- Pilot kostenlos. Später Träger-Lizenz oder Einmalkauf. Zeitbudget 5–7 h/Woche.
- Preis: **nicht entschieden**.

### D-06 Zugang im Pilot offen (Thread „Zugang schützen“, 20.10.2026)
- **Entscheidung:** Pilot-Link offen ohne Anmeldung.
- **Begründung:** Keine Hürde, keine Konten (D-01).
- **Verschoben:** Zugangsschutz (z. B. Cloudflare Access) erst bei Träger-Lizenz.
- **Empfehlung, Umsetzung unbekannt:** Repo privat mit GitHub Pro, und zwar erst Pro buchen, dann privat stellen (sonst fällt Pages aus) [Gedächtnis].

### D-07 Keine Nutzungszählung im Pilot (Markus, 21.10.2026)
- **Entscheidung:** Nein.
- **Begründung:** Datensparsamkeit, ADR 001.
- **Folge:** Wirkung nur über „Lernfortschritt senden“, Umfragen und Mathe-Check vorher/nachher belegbar.

### D-08 Rechte und Vertrag (21.10.2026)
- Rechte gegenüber dem Bildungsträger geprüft (vertraulich): Pilot und Verkauf möglich. Bildungsträger informiert. **Offen:** schriftliche Bestätigung.
- OWNER = „Dr. rer. nat. Markus Baum“. MAIL vorläufig die private Adresse, **später Projekt-Adresse** (entschieden, nicht umgesetzt).

### D-09 Reaktionszeit bei fachlichen Fehlern (22.10.2026)
- 3 Werktage, von Markus bestätigt, im Dozenten-Handout als feste Zusage.

---

## F2. Technik und Arbeitsweise

### D-10 Eine Datei, kein Framework, kein Build (seit Beginn; bestätigt 22.10.2026)
- **Begründung:** Funktioniert offline, als Artifact und auf GitHub Pages ohne Werkzeugkette; Claude kann sie vollständig lesen und ändern.
- **Verworfen:** Framework-Neubau, native Store-App (nie ernsthaft verfolgt; im Marktvergleich als Lücke „Store-Präsenz“ benannt).
- **D-10a Datei aufteilen:** Nach dem Pilot als eigener PR (Inhalte in eigene Dateien, Build-Skript erzeugt weiter eine Datei). Markus 22.10.2026: „Ja, deine Empfehlung.“ **Verworfen:** sofort aufteilen (Risiko kurz vor dem Pilot), gar nicht aufteilen.

### D-11 Schrift lokal (19./20.10.2026)
- Schibsted Grotesk lokal statt Google Fonts. **Begründung:** keine IP-Übertragung an Google. Umgesetzt in PR #1.

### D-12 Freigabe- und Merge-Regeln (laufend, im Gedächtnis festgehalten)
- Code-Änderungen und PRs nur nach Markus' ausdrücklichem Ja.
- Merge nur mit wörtlichem „Merge PR N“ (der Rechte-Klassifizierer lehnte „live“ oder „Ja“ ab).
- Vor Darstellungsänderungen eine Vorschau mit Screenshots.
- Vor jedem Merge main holen, rebasen, nächste freie Versionsnummer (APPV, sw.js, NEWS).
- Dozentenversion nie committen, nach jedem Merge neu bauen.
- **Begründung:** Viele Threads arbeiten parallel an derselben Datei; Fehler sind sofort live.
- **Beleg für das Risiko:** v88 ging versehentlich mit leerer sw.js live, Reparatur in v89 (22.10.2026).

### D-13 Automatische Tests früher als geplant
- ROADMAP (19.10.2026): „Automatische Tests für Zufallsaufgaben, wenn verkauft wird.“
- Tatsächlich: `tests/check.js` + CI „Prüfskript“ vor dem Pilot. **Begründung:** Empfehlung Fachgutachten (Nr. 3) und viele parallele Änderungen.

### D-14 Navigation in vier Bereichen (20.10.2026)
- Start, Fächer, Prüfen, Ich (20.10.2026, Version im Log nicht genannt). Hash-Routing mit Zurück-Taste (v67).
- **D-14a Menüband-Emojis (21.10.2026):** 🏠 📚 🎓 und Ich-Emoji. **Verworfen:** einheitliche Linien-Icons aus dem Produkt-UX-Gutachten (C2), die kurz live waren. Zurück in v75 auf Markus' Wunsch. Keine Strich-Symbole im Menüband.
- **D-14b Reiter „Ich“** mit wählbarem Forscher-Emoji, nur Standardgelb (v81).
- **D-14c Reihenfolge im Reiter Prüfen** nach Lernweg: Mathe-Check, Üben, Begründen & Skizzieren, Mündliche Prüfung, Prüfungsaufgaben, Prüfungssimulation (v94, 22.10.2026, Markus' Wunsch).

### D-15 Prüfungssimulation 90 Minuten (20.10.2026)
- **Begründung:** Prüfungsplan IHK Nord Westfalen (erster Prüfungsbereich 08:30–10:00). Die Angabe 60 min im Grill-me-Prompt war falsch.
- **Hinweis:** Verbindlich ist die Prüfungsordnung der zuständigen IHK (für Regenstauf vermutlich IHK Regensburg) [Annahme, nicht geprüft].

### D-16 Mathematik als eigenes Fach (20.10.2026, v36); Sicherheit als eigenes Fach (21.10.2026, v62)
- **Begründung:** Mathe-Grundlagen sind ein Hauptproblem der Zielgruppe; Sicherheit (STOP, 5 Sicherheitsregeln, GHS, Brandklassen) gehört zum Rahmenplan.
- **Spannung:** Widerspricht „keine neuen Themen vor dem Pilot“ (ROADMAP). Siehe F4.

### D-17 Branding Konzept 1 „Kolben-O“ (20.10.2026)
- Schriftzug LERNLABOR mit Kolben-O (v52), App-Symbol Laborkolben (v53). Ersetzt das Atom-Symbol (v14–v17, 18.10.2026).
- Konzept 2 „L-Play“ gefiel ebenfalls, wurde aber nicht umgesetzt. Details in USAGE_AND_UX.md, D.

### D-18 Kurskalender und Kursbezug (22.10.2026)
- KURS0 vorbelegt mit IM TZ 11/2026 Regenstauf, „NTG, Einheit n von 9“, **kein Dozentenname** im Kalender. Alle Stundenplan-Tage bleiben; 16.10.2027 als Prüfungsvorbereitung.
- Beispiel-Lernstand „JK“ unter Ich (aus der Simulation).

### D-19 Tick beim Einrasten (21.10.2026, v84)
- Bedingt: Wenn der Tick in der Homebildschirm-App am iPhone nicht wirkt, wird der Tick-Teil entfernt. Test steht aus.

### D-20 Meisterlabor getrennt
- Eigene Datei, eigenes Design-Akzent, kein gemeinsamer Lernstand und keine gemeinsame Navigation bis nach dem Pilot.
- Repo legt Markus selbst an (Claude kann in Sitzungen keine Repos erstellen). **Noch nicht geschehen** [Gedächtnis].

---

## F3. Versionsverlauf (kompakt)
Quelle: Git-Log von main [Code]. Uhrzeiten im Log sind gemischt UTC/Ortszeit, daher nur Tage.

| Tag | Versionen | Wichtigste Inhalte |
|---|---|---|
| 18.10.2026 | v5 bis mind. v17 (Cache-Nummern) | Erste Repo-Fassung v5: Prüfungsaufgaben, Folienmodule, Fach Energie, Wahrscheinlichkeitsnetz, freier Fall, **Prüfungssimulation 90 min, 100 Punkte**, Lernstand mit Wiederholungsplan, Atom-Icon, mündliche Prüfung, Neufassung vorlagennaher Prüfungsaufgaben, Mathe-Grundlagen |
| 19.10.2026 | Nummern im Log nicht genannt | KI-Tutor und KI-Prüfer (nur Artifact), Sprachein- und -ausgabe, Vorlesen; Pilot-Vorbereitung: Schrift lokal, KI aus, Fehler melden, Impressum (PR #1) |
| 20.10.2026 | bis v58 (v30 laut Hausaufgaben-Nachricht im Artifact) | Lernfortschritt senden, Hausaufgaben (8 Einheiten × 3), Navigation in vier Bereichen, Mathe-Check, Mathe als Fach (v36), Im Betrieb (v43/44), Glossar (v45), Copyright (v46), App-Symbol-Fix (v47), Schülersicht Paket 1 (v48), Kolben-O (v52/53), Formeln wie im Buch (v57), neue Mathe-Themen (v58) |
| 21.10.2026 | v59–v85 | Chemie 3D (v59, v80), Ottomotor-Flamme (v60), Wurzel (v61), Fach Sicherheit (v62), Gymnasial-Gutachten (v63, v70), Werkstoffe (v64), Kräfte & Momente (v65, v82), Photosynthese (v66), App-Bedienung nach UX-Gutachten (v67), galvanische Zelle (v68, v79), Umbrüche (v69, v74), Emojis zurück (v75), GHS-Piktogramme (v76), Hyperbel/Logarithmus (v77), 348 Fehler-Übungen (v78), Ich-Emoji (v81), Wischleisten (v83), Tick (v84), „Vermute zuerst“ nur auf Themenseiten (v85) |
| 22.10.2026 | v86–v94 | Kursübersicht und Mail-Auswertung (v86), Abschlusskorrekturen A1–A5 + UI (v87), Kurstermine + Sprache/Optik (v88), Kurskalender + sw.js-Reparatur (v89), Fachkorrekturen + gestufte Hilfe (v90), Einführungstour (v91/v92), Dozentenpaket (v93), Reihenfolge Prüfen (v94) |

Die Versionen v1 bis v4, viele Nummern zwischen v18 und v35 sowie v71/v72 erscheinen nicht in den Commit-Texten. v1–v4 lagen vermutlich vor dem Repo (Artifact), v71/v72 wurden vermutlich in parallelen Branches vergeben und beim Rebase übersprungen [Annahme].

---

## F4. Entscheidungen, die in der Praxis aufgeweicht wurden
Diese Punkte sind wichtig für das neue Projekt, weil die Dokumente etwas anderes sagen als der Code.

| Dokumentiert | Tatsächlich | Bewertung |
|---|---|---|
| „Keine neuen Themen vor dem Pilot“ (ROADMAP, Risiko Zeitmangel) | Von rund 50 Themen (PRD) auf 116, neues Fach Sicherheit, 348 Fehler-Aufgaben, 43 BEW | Inhaltlich gut begründet durch Gutachten. Aber jede neue Aufgabe muss Markus fachlich verantworten. **Empfehlung:** für die Zeit bis 28.11.2026 ausdrücklich einen Inhalts-Freeze beschließen |
| „Automatische Tests, wenn verkauft wird“ | CI ab Pilot | Positiv abgewichen |
| „Repo Meisterlabor sofort anlegen“ (OFFENE-FRAGEN Nr. 7) | Noch kein Repo | Risiko Datenverlust/keine Versionsgeschichte |
| „Projekt-E-Mail anlegen“ (ROADMAP Nr. 2) | Private Adresse im Code | Offen, Datenschutz- und Spam-Risiko |
| „Fragebogen für Zwischenumfrage“ (ROADMAP Nr. 7) | Kein Beleg für Entwurf gefunden | Offen, nötig für das Erfolgskriterium |

---

## F5. Umgesetzte und nicht umgesetzte Empfehlungen
Die vollständige Matrix je Gutachten steht in EXPERT_REVIEW.md („Umsetzungsstand“). Hier nur die Entscheidungen dazu:
- **Bewusst abgelehnt:** Linien-Icons im Menüband; Nutzungszählung im Pilot; Rangliste, Push-Nachrichten, Anmeldung; Abzeichen und Spielzwang; Videos in der App; Leichte-Sprache-Fassung (ROADMAP „bewusst nicht“).
- **Bewusst verschoben (nach dem Pilot):** Datei-Aufteilung; KI-Zugang; neue Rahmenplan-Themen (Getriebe, Schall, U-Wert, CO₂); Aufgaben sperren/freigeben; Zugangsschutz; gemeinsamer Stand mit Meisterlabor.
- **Ohne Entscheidung offen:** Toleranz 2 % bei Geld; Fachsprache vs. Umgangssprache in Prüfungstexten; Prüfungsmodus „nur erlaubte Hilfsmittel“; Konstantenblatt; reale Zweitprüfung; Preis.

---

## F6. Abhängigkeiten zwischen offenen Entscheidungen
```
Projekt-Mailadresse ──> MAIL im Code ersetzen ──> Impressum/Datenschutz final ──> Weitergabe an Träger
Bestätigung des Bildungsträgers schriftlich ──> Rechte sicher ──> Lizenzvertrag ──> Preis
Verantwortlicher nach DSGVO (Markus oder Bildungsträger) ──> Datenschutzhinweis "Lernfortschritt senden"
Gerätetest iPhone/Android ──> Tick behalten oder entfernen; Installationsanleitung bestätigen
Zwischenumfrage (Fragebogen fehlt) ──> Pilot-Erfolg belegt ──> Angebot an Träger ──> Datei aufteilen, Zugangsschutz, KI-Zugang
Meisterlabor-Repo ──> Sicherung + Versionsgeschichte ──> spätere Integration
```
