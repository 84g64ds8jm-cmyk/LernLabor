LERNLABOR ALS WEB-APP
=====================
Inhalt: index.html (die App), manifest.webmanifest, sw.js (Offline-Funktion), 3 Symbole, Ordner fonts/ (Schrift).

1) HOCHLADEN (einmalig)
   Die App muss über https erreichbar sein, sonst funktioniert Installation und Offline-Modus nicht
   (ein Doppelklick auf index.html zeigt die App, installieren kann man sie so aber nicht).
   Gratis-Möglichkeiten: GitHub Pages, Netlify oder Cloudflare Pages.
   Lade dort den ganzen Ordnerinhalt (alle Dateien, nicht die ZIP) hoch.

2) INSTALLIEREN
   iPhone/iPad: Adresse in Safari öffnen > Teilen-Symbol > "Zum Home-Bildschirm".
   Android (Chrome): Menü > "App installieren" bzw. "Zum Startbildschirm".
   Computer (Chrome/Edge): Installieren-Symbol in der Adressleiste.

3) OFFLINE
   Nach dem ersten Öffnen mit Internet läuft die App auch ohne Verbindung.
   Die Schriftart wird nur geladen, wenn sie einmal online abgerufen wurde, sonst Standardschrift.

4) UPDATES
   Neue index.html hochladen und in sw.js die Version erhöhen (const V='lernlabor-v34'),
   dann holen sich die Geräte beim nächsten Start die neue Fassung.
   In index.html APPV auf dieselbe Nummer setzen und NEWS kurz beschreiben
   (erscheint als "Neu in Version ..." auf der Startseite).

5) KONTAKT
   In index.html OWNER (Name) und MAIL (Projekt-Adresse) eintragen. Sie erscheinen
   im Impressum, im Datenschutz und im Knopf "Fehler melden".
   Die Schrift liegt im Ordner fonts/ (SIL Open Font License, siehe fonts/OFL.txt).
