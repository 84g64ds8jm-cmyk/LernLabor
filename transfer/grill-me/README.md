# Grill-Me für LERNLABOR – Übersicht

Stand: 22.10.2026

## Inhalt dieses Ordners

| Datei | Zweck |
|---|---|
| `skill/grill-me/SKILL.md` | der eigentliche Skill im Claude-Skill-Format (Quelle der Vorschlagskarte) |
| `GRILL_ME_PROMPT.md` | gleicher Inhalt als Kopiervorlage, wenn der Skill nicht gespeichert ist |
| `GRILL_ME_SKILL.md` | Spezifikation: Ablauf, Regeln, Ergebnisse, Abnahmetest, Grenzen |
| `GRILL_WITH_DOCS.md` | Anleitung für dokumentengestützte Prüfungen, Widerspruchstabelle |
| `SETUP_NEW_PROJECT.md` | Einrichtung im Projekt „Lernlabor V3“ |
| `register/`, `berichte/` | entstehen beim ersten Durchlauf |

## Phase 1: Was in der Umgebung tatsächlich verfügbar ist (geprüft 22.10.2026)

Geprüft über die Skill-Liste des Kontos (ListSkills), die Skill-Suche (SearchSkills mit „grill me“, „grill with docs“, „critical review“, „red team“, „interview“, „product critique“, „devil's advocate“, „socratic questioning“) und die Skill-Liste dieser Sitzung.

**Ergebnis: Es gibt weder „Grill-Me“ noch „Grill with Docs“ als Skill.** Die Suche ergab keinen Treffer. Es gibt auch keinen anderen Skill für kritische Befragung, Interviewführung, Produktkritik oder Red Teaming. Das „Grill-me-Interview“ vom 19.10.2026 (siehe `CONTEXT.md`) wurde ohne Skill im Chat geführt.

### Verfügbare Skills und Werkzeuge mit Bezug zur Aufgabe

| Skill / Werkzeug | Zweck | Eignung für Grill-Me |
|---|---|---|
| `skill-creator` | Skills entwerfen, testen, verbessern | **genutzt** für das Format (`SKILL.md` mit `name`/`description`) |
| Vorschlagskarte (propose_skills) | Skill in Markus' Konto speichern lassen | **einziger Weg**, den Skill wirklich zu installieren |
| Dateien lesen/suchen (Read, Grep, Glob) | Projektordner, Repo | Kern von „Grill with Docs“ |
| Artifact lesen | Gutachten-Seiten auf claude.ai | Gutachten als Quelle |
| Claude Docs (Connector + Skill `docs`) | Dokumente schreiben und lesen | Abschlussbericht |
| Projekt-Memory | frühere Entscheidungen | verhindert doppelte Fragen |
| Websuche | externe Fakten | nur mit Quelle, z. B. Recht, Marktzahlen |
| `deep-research` | Recherche mit Unteragenten | nur auf ausdrücklichen Wunsch (teuer) |
| GitHub-Werkzeuge, `git` | Code lesen | Belege für Funktionen, nur lesend |
| `code-review`, `security-review` | Code-Diffs prüfen | nicht passend (prüfen Änderungen, nicht das Produkt) |
| `docx`, `pdf`, `pptx`, `xlsx` | Dateiformate | nur falls ein Bericht in diesem Format gewünscht ist |

### Zusammenspiel

`grill-me` (neu) steuert das Interview → liest Unterlagen mit den Datei-Werkzeugen und Artifact-Lesen („Grill with Docs“ als eingebauter Abschnitt) → führt das Register im Projektordner → schreibt den Bericht als Claude Doc oder Markdown → wichtige Entscheidungen ins Memory.

### Voraussetzungen

Projektunterlagen im Projektordner (Pflichtliste in `SETUP_NEW_PROJECT.md`), bei Funktionsfragen das Repo freigeschaltet, Skill gespeichert (sonst Prompt kopieren).

### Grenzen und manuelle Schritte

- Eine Markdown-Datei ist kein installierter Skill. Installiert ist er erst nach dem Speichern der Vorschlagskarte durch Markus.
- Die Karte speichert nur eine `SKILL.md`. Deshalb ist der Skill in sich vollständig, die übrigen Dateien sind Begleitmaterial.
- Projektordner sind je Projekt getrennt: Unterlagen für „Lernlabor V3“ müssen dort neu hochgeladen werden.
- Die Dateien `transfer/PROJECT_CONTEXT.md` und `transfer/EXPERT_REVIEW.md` waren beim Schreiben noch nicht vorhanden (entstehen im Thread „Bestandsaufnahme für Projekttransfer“). Der Skill sucht sie und weicht sonst auf `CONTEXT.md` und die Gutachten unter `feedback/` aus.
- Viele Dateien unter `docs/` haben Stand 19.10.2026 und sind teils veraltet. Der Skill markiert das, aktualisiert aber nichts.
- Alle bisherigen Gutachten sind von Claude simulierte Experten. Echte Nutzertests und menschliche Fach- und Rechtsprüfung ersetzt der Skill nicht.
- Ein Probedurchlauf mit Markus hat noch nicht stattgefunden.
