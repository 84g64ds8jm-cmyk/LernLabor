#!/usr/bin/env python3
"""Schaltet die Aufgaben eines Test-Themas frei.

Aufruf im Repo-Ordner:  python3 archiv/test-themen/freischalten.py tenside
(Dateiname ohne .js aus archiv/test-themen/). Fügt den Inhalt an der Markierung
„TEST-THEMEN“ in index.html ein und trägt die Stufe in LVT "num" ein.
Danach: Datei aus archiv/test-themen/ löschen, APPV/NEWS/sw.js hochzählen, node tests/check.js.
"""
import re, sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[2]
name = sys.argv[1].removesuffix('.js')
src = (ROOT / 'archiv' / 'test-themen' / f'{name}.js').read_text(encoding='utf-8')
idx = ROOT / 'index.html'
html = idx.read_text(encoding='utf-8')
mark = '/* TEST-THEMEN:'
i = html.index(mark)
html = html[:i] + src.rstrip('\n') + '\n' + html[i:]
# Kopfzeile: Stufe in LVT "num": "Thema":2
m = re.search(r'Stufe in LVT "num": "([^"]+)":(\d)', src)
if m and f'"{m.group(1)}":' not in html[html.index('LVT={"num":{'):html.index('LVT={"num":{') + 20000]:
    html = html.replace('LVT={"num":{', 'LVT={"num":{"%s":%s,' % (m.group(1), m.group(2)), 1)
idx.write_text(html, encoding='utf-8')
print('freigeschaltet:', name)
