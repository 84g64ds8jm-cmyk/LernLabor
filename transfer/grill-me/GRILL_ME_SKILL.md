# GRILL_ME_SKILL – Spezifikation des Skills „grill-me“

Stand: 22.10.2026

> **Wichtig:** Diese Datei beschreibt den Skill. Sie ist **nicht** der Skill. Ausführbar wird er erst, wenn Markus die Vorschlagskarte „grill-me“ in Claude speichert. Die gespeicherte Fassung entspricht `skill/grill-me/SKILL.md` (Frontmatter `name` + `description`, darunter die Anweisungen).

## 1. Zweck

Ein wiederverwendbarer, kritischer Review-Workflow für LERNLABOR (übertragbar auf Meisterlabor Basis). Claude befragt Markus Frage für Frage zu Schwachstellen, unbelegten Annahmen, Widersprüchen zwischen Dokumenten, Code und früheren Entscheidungen und überführt das Ergebnis in einen priorisierten Bericht mit Entscheidungen.

Vorbild: Das „Grill-me-Interview“ vom 19.10.2026 (Blöcke A bis I), aus dem `CONTEXT.md` und die ADRs entstanden sind. Damals ohne Skill im Chat geführt. Der Skill macht den Ablauf wiederholbar und dokumentengestützt.

## 2. Format und Ablage

| Teil | Ort | Rolle |
|---|---|---|
| `skill/grill-me/SKILL.md` | dieser Ordner | Quelle des Skills, Inhalt der Vorschlagskarte |
| Gespeicherter Skill | Markus' Claude-Konto (Skills) | wird in allen Projekten und Sitzungen des Kontos geladen |
| `GRILL_ME_PROMPT.md` | dieser Ordner | gleicher Inhalt als Kopiervorlage ohne Skill |
| `GRILL_WITH_DOCS.md` | dieser Ordner | ausführliche Anleitung für die Dokumentprüfung |
| `register/GRILL-ME-REGISTER.md` | entsteht beim ersten Durchlauf | Zwischenstand, übersteht Sitzungswechsel |
| `berichte/GRILL-ME-BERICHT-<Datum>.md` oder Claude Doc | entsteht am Ende | Abschlussbericht |

Skill-Format laut Skill-Anleitung („skill-creator“): Ordner `grill-me/` mit `SKILL.md`, YAML-Kopf mit `name` und `description` (die Beschreibung steuert, wann der Skill geladen wird), darunter Markdown-Anweisungen. Zusätzliche Dateien im Skill-Ordner sind möglich, die Vorschlagskarte speichert aber nur die eine `SKILL.md`. Deshalb ist der Skill in sich vollständig; die Anleitungen hier sind Ergänzung.

## 3. Auslöser

„Grill-Me“, „grill mich“, „Grill with Docs“, „kritischer Review“, „stell mich auf die Probe“, „Red Team“, „hinterfrag das Projekt“, auch für einzelne Dimensionen („grill mich zum Geschäftsmodell“).

## 4. Eingaben

- Pflicht: Projektkontext (`CONTEXT.md` oder `transfer/PROJECT_CONTEXT.md`), PRD, ROADMAP, OFFENE-FRAGEN, ADR 001–003, START-PROMPT.
- Empfohlen: Gutachten (`transfer/EXPERT_REVIEW.md`, `feedback/…`), Geschäftsmodell, Recht/Datenschutz, Technik, Didaktik, KI, Ideenliste, Marktvergleich, Projekt-Memory.
- Stärkster Beleg: Code im Repo `84g64ds8jm-cmyk/LernLabor` (`index.html`), nur lesend.
- Fehlen Pflichtunterlagen, fordert der Skill sie einmal an und markiert sonst alles als „Beleg fehlt“.

## 5. Ablauf

```
Vorbereitung
  Unterlagen prüfen (gefunden/fehlt, Stand-Datum)
  laufendes Register? → fortsetzen oder neu
  Umfang klären (1 Frage)
  Widersprüche vormerken
      │
      ▼
je Dimension (1–12, Reihenfolge nach Risiko)
  Einstieg mit Fundstellen
  ┌─► 1 zentrale Frage ──► warten ──► Antwort einordnen
  │        │ unklar → 1 gezielte Rückfrage
  │        ▼
  │   Befund ins Register (7 Felder)
  └── nächste Frage (max. 3–5 je Dimension)
  Kurzfazit, weiter?
      │
      ▼
Abschlussbericht (10 Abschnitte) + Register „Bericht erstellt“
wichtige Entscheidungen ins Projekt-Memory
```

Steuerwörter für Markus: „Pause“, „überspringen“, „zurück zu Dimension n“, „Bericht jetzt“.

## 6. Dimensionen

1 Problem und Nutzen · 2 Zielgruppen und Lernbedürfnisse · 3 Pädagogische Qualität und Lernerfolg · 4 Funktionen und Benutzerführung · 5 UX, Design, Smartphone · 6 Differenzierung und Wettbewerb · 7 Technik und Skalierbarkeit · 8 KI-Qualität und Halluzinationen · 9 Datenschutz, Sicherheit, Recht · 10 Monetarisierung · 11 Ergebnisse der simulierten Experten · 12 Priorisierung und Umsetzungsplan.

Anpassungen an die echte App (alle aus den Unterlagen belegt, vor jedem Durchlauf gegen den Stand prüfen):
- Dimension 8: Im Pilot gibt es keine KI für Teilnehmer (ADR 003). Der Schwerpunkt liegt deshalb auf KI-erstellten Inhalten und KI-erstellten Gutachten, nicht auf einem KI-Tutor.
- Dimension 11: Alle bisherigen Gutachten sind Claude-Rollen. Sie zählen als Meinung, ihre Noten nicht als Messwert.
- Dimension 3: Die Pilot-Kriterien messen Erledigung und Zufriedenheit, keinen Lernzuwachs.
- Dimension 9: Impressum/Datenschutz sind ungeprüfte Entwürfe, Projekt-Mail fehlt, „Lernfortschritt senden“ überträgt personenbezogene Daten per Mail.

Die vollständige Fragenbank steht in `skill/grill-me/SKILL.md`, Abschnitt 3.

## 7. Verhaltensregeln (Kurzfassung)

Konstruktiv, direkt, anspruchsvoll · eine zentrale Frage pro Schritt, dann warten · Belege und Beispiele einfordern · Fakt, Dokument, Entscheidung, Annahme, Hypothese, Meinung, Bewertung, Beleg fehlt trennen · Widersprüche benennen · begründete Entscheidungen akzeptieren und nicht erneut verhandeln · keine Redundanz, keine Kritik ohne Nutzen · nichts erfinden · keine Funktion ohne Beleg als vorhanden behandeln · keine Code- oder Dokumentänderungen außer Register und Bericht.

## 8. Ergebnisse

- **Register** mit Befunden in 7 Feldern: Problem · Evidenz/fehlender Nachweis · Auswirkung · Schweregrad (kritisch/hoch/mittel/niedrig) · Wahrscheinlichkeit (hoch/mittel/niedrig/unbekannt) · Gegenmaßnahmen · offene Entscheidung.
- **Abschlussbericht** mit 10 Abschnitten: Executive Summary, bestätigte Stärken, kritische Schwächen und Risiken, unbelegte Annahmen, Konflikte mit früheren Gutachten, priorisierte Verbesserungen (P1/P2/P3 mit Wirkung, Aufwand, Begründung), nächste Schritte, Entscheidungen für Markus, offene Fragen, Quellen- und Evidenzübersicht.

## 9. Abnahmetest (nach dem Speichern einmal ausprobieren)

| Test | Erwartung |
|---|---|
| „Grill-Me: voller Durchlauf“ in einem Projekt **mit** Unterlagen | Liste der gefundenen Dateien mit Stand, dann genau eine Frage zum Umfang |
| Gleicher Satz in einem Projekt **ohne** Unterlagen | Bittet um die Pflichtdateien, behauptet keine Funktionen |
| Vage Antwort „Die Teilnehmer finden das gut“ | Rückfrage: wer, wie viele, woher bekannt; Einordnung als Annahme |
| Begründete Ablehnung einer Empfehlung | Entscheidung wird festgehalten, keine erneute Frage |
| „Bericht jetzt“ nach zwei Dimensionen | Bericht mit allen 10 Abschnitten, nicht befragte Dimensionen als „nicht geprüft“ |
| Frage nach Nutzerzahlen | Antwort „Beleg fehlt“ (keine Nutzungszählung), keine erfundene Zahl |

## 10. Grenzen

- Ein Skill liefert Anweisungen, keine neuen Werkzeuge. Was er prüfen kann, hängt davon ab, welche Dateien, Repos und Connectoren die jeweilige Sitzung hat.
- Die Prüfung ist so gut wie die Unterlagen. Veraltete Dateien (viele `docs/` haben Stand 19.10.2026) erzeugen Scheinwidersprüche; der Skill kennzeichnet sie, aktualisiert sie aber nicht.
- Der Skill ersetzt keine Rechts-, Steuer- oder Fachprüfung durch Menschen und keine echten Nutzertests.
- Die eingebaute Fragenbank ist auf den Stand 22.10.2026 zugeschnitten. Bei großen Produktänderungen Fragen und „bekannte Widersprüche“ im SKILL.md aktualisieren und neu als Karte vorlegen lassen.
