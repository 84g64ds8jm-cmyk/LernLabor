# SETUP_NEW_PROJECT – Grill-Me in einem neuen Claude-Projekt einrichten

Stand: 22.10.2026 · Ziel: Projekt „Lernlabor V3“ (oder jedes andere Projekt)

## Schritt 1: Skill speichern (einmalig, gilt für alle Projekte)

1. Im Thread „Grill-Me-Workflow“ des Projekts „Lernlabor v2“ liegt eine **Vorschlagskarte „grill-me“**. Auf der Karte speichern.
2. Danach ist der Skill in Deinem Claude-Konto gespeichert und wird in allen Projekten und Sitzungen angeboten, auch in „Lernlabor V3“.
3. Kontrolle in einer neuen Sitzung: „Welche Skills habe ich?“ → `grill-me` muss in der Liste stehen.

Ohne Speichern ist `skill/grill-me/SKILL.md` nur eine Textdatei. Dann `GRILL_ME_PROMPT.md` als Kopiervorlage nutzen (Schritt 4, Variante B).

Spätere Änderungen am Skill: Claude bitten, eine neue Fassung als Vorschlagskarte vorzulegen. Das Bearbeiten der Datei allein ändert den gespeicherten Skill nicht.

## Schritt 2: Projekt anlegen

Das neue Projekt kannst nur Du selbst anlegen. Als Startnachricht `docs/START-PROMPT.md` verwenden (dort steht der Projektstand).

## Schritt 3: Unterlagen ins neue Projekt bringen

Der Projektordner ist je Projekt getrennt. Das neue Projekt sieht die Dateien aus „Lernlabor v2“ nicht automatisch. Lade diese Dateien hoch oder lass sie von Claude im neuen Projekt aus dem Repo bzw. aus Deinen Downloads anlegen.

**Pflicht**
- `transfer/PROJECT_CONTEXT.md` (entsteht im Thread „Bestandsaufnahme für Projekttransfer“) oder `CONTEXT.md`
- `docs/PRD.md`, `docs/ROADMAP.md`, `docs/OFFENE-FRAGEN.md`, `docs/START-PROMPT.md`
- `docs/adr/001-ohne-konten-kein-abo.md`, `002-abstandsregel-pruefungsaufgaben.md`, `003-pilot-ohne-ki.md`

**Empfohlen**
- `transfer/EXPERT_REVIEW.md` (aus der Bestandsaufnahme)
- `feedback/abschluss/fachgutachten-abschluss.html`, `feedback/abschluss/ui-software-gutachten-abschluss.html`
- `feedback/FACHGUTACHTEN-FEHLERLISTE.md`, `feedback/gutachten-gymnasium/BEFUNDE-GYMNASIUM.md`, `feedback/SCHUELERSICHT.md`
- `docs/GESCHAEFTSMODELL.md`, `docs/RECHT-DATENSCHUTZ.md`, `docs/TECHNIK.md`, `docs/DIDAKTIK.md`, `docs/KI.md`, `docs/IDEEN-FUNKTIONEN.md`
- `markt/marktvergleich.html`
- dieser Ordner `transfer/grill-me/` (für Register und Berichte)

**Code**
- Repo `84g64ds8jm-cmyk/LernLabor` in der Sitzung freischalten (Claude fragt danach). Nur lesend.

Tipp: Ordnerstruktur beibehalten (`docs/`, `feedback/`, `transfer/`). Der Skill sucht unter diesen Pfaden. Andere Ablage geht auch, dann einmal sagen, wo die Dateien liegen.

## Schritt 4: Starten

**Variante A (Skill gespeichert):**
- „Grill-Me: voller Durchlauf“
- „Grill-Me: nur Dimension 3, 9 und 10“
- „Grill with Docs: prüf die ROADMAP gegen den Code“
- Fortsetzen: „Grill-Me: weiter mit dem Register“

**Variante B (ohne Skill):** Den Teil zwischen den Linien in `GRILL_ME_PROMPT.md` in den ersten Chat kopieren oder in die Projektanweisungen legen.

Erwartete erste Antwort: Liste der gefundenen und fehlenden Unterlagen mit Stand, dann genau eine Frage zum Umfang. Kommt stattdessen ein langer Monolog oder eine Liste vieler Fragen, sag „eine Frage nach der anderen“.

## Schritt 5: Während und nach dem Durchlauf

- Der Zwischenstand liegt in `transfer/grill-me/register/GRILL-ME-REGISTER.md`. Ein Durchlauf kann über mehrere Tage und Threads gehen.
- Am Ende entsteht der Bericht als Claude Doc oder unter `transfer/grill-me/berichte/`.
- Entscheidungen aus dem Durchlauf in die passenden Dokumente übernehmen (ROADMAP, OFFENE-FRAGEN, ADR). Das macht Claude nur auf Deinen Auftrag.
- Code-Änderungen aus dem Bericht laufen wie bisher: eigener Auftrag, Vorschau, Dein Ja, Merge nur nach „Merge PR N“.

## Manuelle Schritte im Überblick

| Schritt | Wer | Warum nicht automatisch |
|---|---|---|
| Vorschlagskarte speichern | Markus | Skills werden nur über Deine Bestätigung gespeichert |
| Projekt „Lernlabor V3“ anlegen | Markus | kann Claude nicht |
| Dateien ins neue Projekt bringen | Markus (oder Claude im neuen Projekt aus Repo/Upload) | Projektordner sind getrennt |
| Repo freischalten | Markus bestätigt | Zugriff pro Sitzung |
| Bericht in Dokumente übernehmen | Markus entscheidet, Claude setzt um | keine stillen Änderungen |
