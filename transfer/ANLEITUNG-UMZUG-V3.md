# Umzug nach „Lernlabor V3“: Schritt für Schritt

Stand: 22.10.2026, `main` = Version 94.

Das neue Projekt sieht weder die Dateien noch das Gedächtnis von „Lernlabor v2“. Deshalb liegen die Übergabedateien hier im Repo im Ordner `transfer/`. Sobald das Repo im neuen Projekt verbunden ist, kann Claude sie lesen. Ein Download ist nicht nötig.

**Hinweis:** Das Repo ist öffentlich. Dieser Ordner enthält deshalb keine Mailadressen, keine Vertrags- oder Steuerdetails. Von GitHub Pages wird er nicht ausgeliefert (`_config.yml`), auf github.com ist er aber lesbar.

## Inhalt von `transfer/`

| Datei | Inhalt |
|---|---|
| `PROJECT_CONTEXT.md` | Überblick, Architektur, Regeln für Claude, Quellen |
| `USAGE_AND_UX.md` | Funktionen mit Status, Nutzerabläufe, Branding und Stil |
| `EXPERT_REVIEW.md` | alle Gutachten einzeln, Synthese, Umsetzungsmatrix |
| `PROJECT_DECISIONS.md` | Entscheidungen mit Gründen, verworfene Alternativen, Versionsverlauf |
| `OPEN_QUESTIONS.md` | Fakten, Annahmen, Widersprüche, offene Fragen, Top 5 |
| `adr/` | ADR 001 bis 003 |
| `grill-me/` | Skill `grill-me`, Kopiervorlage, Anleitung für Prüfungen mit Dokumenten |

Nicht im Repo (bleiben im alten Projekt): Gutachten-Seiten als HTML, Meisterlabor, Pitch, Unterrichtsfolien, Dozentenversion, Skript `build-dozent.py`. Die fünf Übergabedateien fassen die Gutachten zusammen.

---

## Teil 1: Vorbereiten (im alten Projekt)

1. **Skill „grill-me“ speichern:** Im Thread „Grill-Me-Workflow“ auf der Karte „grill-me“ auf Speichern tippen. Er gilt dann in allen Projekten.
2. **Das alte Projekt nicht löschen.** Es bleibt das Archiv mit Threads, Vorschauseiten, Meisterlabor und Gedächtnis.

## Teil 2: Neues Projekt anlegen

3. **Projekt „Lernlabor V3“ anlegen** (kannst nur Du).
4. **Repo verbinden:** Projekt-Einstellungen → Ressourcen → `84g64ds8jm-cmyk/LernLabor`.
5. **Projektanweisung eintragen:** Text unten kopieren.

## Teil 3: Erster Chat

6. **Startnachricht senden** (Text unten).
7. **Prüfen, ob es geklappt hat:** Claude nennt Dir Stand und Top 5. Stimmt das mit der Übersichtsseite aus dem alten Projekt überein, ist der Umzug fertig.

## Teil 4: Grill-me (eigener Thread)

8. Neuen Thread starten: „Grill-Me: voller Durchlauf“. Ohne gespeicherten Skill: den Teil zwischen den Linien aus `transfer/grill-me/GRILL_ME_PROMPT.md` als erste Nachricht.
9. Erste Antwort: Liste gefundener und fehlender Unterlagen, dann **eine** Frage zum Umfang. Fehlende Gutachten-HTMLs sind normal; die Übergabedateien ersetzen sie.
10. Reihenfolge-Empfehlung: Pilot-Absicherung → Recht und Datenschutz → Messbarkeit → Qualität → Geschäftsmodell, KI, Meisterlabor.
11. Pausieren jederzeit, weiter mit „Grill-Me: weiter mit dem Register“.
12. Am Ende Bericht als Claude Doc. Übernahme in Dokumente oder Code nur auf Deinen Auftrag, Merge weiterhin nur mit „Merge PR N“.

---

## Projektanweisung (zum Kopieren)

```
Projekt LERNLABOR (Lern-App für IHK-Industriemeister, Fach NTG) von Dr. rer. nat. Markus Baum.
Repo 84g64ds8jm-cmyk/LernLabor, live über GitHub Pages. Übergabe aus dem Vorgängerprojekt im Repo-Ordner transfer/.
Lies vor jeder Antwort zum Projekt die Übergabedateien in transfer/ (PROJECT_CONTEXT, USAGE_AND_UX, EXPERT_REVIEW, PROJECT_DECISIONS, OPEN_QUESTIONS). Im Zweifel gilt der Code von main.
Regeln:
- Deutsch, Du-Form, kurze klare Sätze.
- Nur eigene Aufgaben, keine IHK-Originale (ADR 002). Lernstand bleibt lokal, keine Konten, keine Nutzungszählung, im Pilot keine KI.
- Code-Änderungen und PRs nur nach meinem ausdrücklichen Ja. Merge nur nach meinem wörtlichen „Merge PR N“.
- Vor Darstellungsänderungen eine Vorschau mit Screenshots (Handy 390 und 320 px, Laptop, hell und dunkel).
- Vor jedem Merge main holen, rebasen, nächste freie Version in APPV, NEWS und sw.js.
- Das Repo ist öffentlich: keine Geheimnisse, Mailadressen, Vertrags- oder Steuerdaten ins Repo.
- Kritisch beraten, Annahmen belegen, nichts als umgesetzt darstellen, was nicht im Code ist.
```

## Startnachricht (zum Kopieren)

```
Das ist der Umzug aus dem Projekt „Lernlabor v2“.
1. Klone das Repo 84g64ds8jm-cmyk/LernLabor.
2. Lies transfer/ANLEITUNG-UMZUG-V3.md, dann transfer/PROJECT_CONTEXT.md und die anderen vier Übergabedateien.
3. Schreib die wichtigsten Fakten, Regeln und offenen Punkte ins Projektgedächtnis.
4. Prüf, ob main noch Version 94 ist und das Prüfskript (tests/check.js) ohne Fehler läuft. Ist main neuer, sag mir, was sich geändert hat.
5. Nenn mir danach in wenigen Sätzen den Stand und die fünf wichtigsten offenen Punkte. Ändere nichts am Code.
```
