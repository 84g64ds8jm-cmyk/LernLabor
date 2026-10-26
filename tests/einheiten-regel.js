// Einheiten-Regel (v194): liefert für einen Lösungsweg jede Zahl, die in einem Rechenschritt ohne Einheit steht.
// Erlaubt sind reine Zahlen (Faktoren wie 2, ½, π, η, sin-Werte, Anzahlen) und Zahlen, die in der Aufgabe ohne Einheit stehen.
// Wird von tests/check.js in die Seite geladen.
window.__EU=(()=>{
const nz=s=>{s=String(s).replace(/[  ]/g,' ');let o;do{o=s;s=s.replace(/(\d) (\d{3})(?!\d)/,'$1$2')}while(o!==s);return s.replace(/(\d)\.(\d)/g,'$1,$2')};
const UNIT=/^\s?(?:[kMGmcdhµμnp]?(?:m|g|Nm|N|Pa|W|Wh|V|Ah|A|J|Ω|s|l|L|mol|Hz|t|T|C|F|H|VA|var|lx|lm|cd|Wb|Ws|eV)(?![a-zäöüß])|[mkh]?bar|kWh|MWh|min|h(?![a-z])|K(?![a-z])|°C|°dH|°|€|ct|U\/min|1\/|%|‰|rad|e⁻|Tage?(?![a-z])|d(?![a-z])|a(?![a-z])|Jahre?|Stunden?|Minuten?|Sekunden?|Liter|mmol|kcal|ppm|dB|PS(?![a-z])|U(?![a-z]))/;
const NUMRE=/(?<![\d,⁰-⁹¹²³⁻A-Za-z_₀-₉'·]10|[\d,⁰-⁹¹²³⁻A-Za-z_₀-₉'])(\d+(?:,\d+)?)(?![\d,⁰-⁹¹²³⁻]|\s?·\s?10[⁰-⁹¹²³⁻]|\/[A-Za-z])/g;
const nums=t=>{const r=[];let m;const re=new RegExp(NUMRE.source,'g');while(m=re.exec(t))r.push([m[1],m.index]);return r};
const dec=x=>String(+x.toFixed(6)).replace('.',',');
const COUNTW=/^\s[A-ZÄÖÜ][a-zäöüß]{2,}/;
const qsets=q=>{const S=new Set,D=new Set,t=nz(q);for(const [v,i] of nums(t)){const r=t.slice(i+v.length);if(/^\s?%/.test(r)){const x=+v.replace(',','.')/100;D.add(dec(x));D.add(dec(1-x));D.add(dec(1+x))}(UNIT.test(r)&&!/^\s?%/.test(r)?S:D).add(v)}return {S,D}};
const WORDU=/^\s[A-ZÄÖÜ][a-zäöüß]{2,}/;
const UTOK='(?:[A-Za-zΩµ°€%‰]+|1\\/[A-Za-z]+)(?:[²³⁻¹]*[\\/·]\\(?[A-Za-zΩµ°·]+\\)?)*[²³⁻¹]*';
const STRIP=new RegExp('(?:\\d+(?:,\\d+)?[²³]?|10[⁰-⁹¹²³⁻]+|\\))\\s?'+UTOK,'g');
const isF=g=>/\p{L}/u.test(g.replace(STRIP,'').replace(/\b(?:sin|cos|tan|lg|ln|und|also|mit|bei|pro|je|von|max|min)\b/g,'').replace(/[π√±]/g,''));
const opnd=g=>g.replace(/√/g,'').split(/\s[·\/+−×÷]\s|[()]|(?<=\d)·(?=\d)/).map(x=>x.trim()).filter(x=>x&&!/^[²³]$/.test(x)).map(x=>x.replace(/[²³]$/,''));
const DIMS=/^(?:[½¼¾πe]|\d+(?:,\d+)?|[ημεν](?:_?[\p{L}\d₀-₉,]*)?|μ₀|c_[Pwp]|z(?:_\w+|[₀-₉]+)?|n(?:_\w+)?|N|S|k|i|sin.*|cos.*|tan.*|p\/100|x|w|ψ|Anzahl.*|Anteil.*|Faktor.*)$/u;
const OPS=/[·\/÷+−×²³√]/;
// sol: Zeilen; q: Aufgabentext (+Einleitung); u: Einheit des Ergebnisses
return (q,sol,u,dims)=>{const bad=[];const {S,D}=qsets(q||'');(dims||[]).forEach(x=>D.add(x));const F=new Set,FORMS=[];
 (sol||[]).forEach(l0=>{const l=nz(l0);if(/\blg\b|\bln\b|log|⌊|Taschenrechner|TR:/.test(l))return;
  const cont=/^\s*[=≈]/.test(l);let seg=l.replace(/^\s*[=≈]\s*/,'').split(/\s(?:[=≈→⇒]|<|>|≤|≥)\s/);
  if(/^\s*(Hinweis|Merke|Probe|Kontrolle)\b/.test(l))return;seg=seg.map(g=>{const m=g.match(/^(.*?:\s)(?=.*\d)(?!.*:\s)/);return m&&/\p{L}{3}/u.test(m[1])?g.slice(m[1].length):g});const segs0=seg.slice();seg=seg.filter(g=>{if(isF(g)){nums(g).forEach(([v])=>F.add(v));return false}return true});
  if(!u)return;const hasU=/\d\s?(?:[A-Za-zΩµ°€]|1\/)/.test(l);if(!hasU&&u==='%')return;
  segs0.filter(isF).forEach(f=>FORMS.push(opnd(f)));const forms=FORMS;
  seg.forEach((g,gi)=>{const og=opnd(g);const fm=forms.filter(f=>f.length===og.length).pop();if(!OPS.test(g.replace(STRIP,'X').replace(/\s?·\s?10[⁰-⁹¹²³⁻]+/g,'').replace(/^\s*[−-]/,'')))return;
   for(const [v,i] of nums(g)){const rest=g.slice(i+v.length),pre=g.slice(0,i);
    if(UNIT.test(rest)||WORDU.test(rest))continue;
    if(/^[²³]/.test(rest)&&UNIT.test(rest.slice(1)))continue;
    if(/(?:sin|cos|tan)\s?\(?$/.test(pre))continue;
    {let d=0,okp=false;for(let j=0;j<rest.length;j++){const ch=rest[j];if(ch==='(')d++;else if(ch===')'){if(d>0)d--;else{const r2=rest.slice(j+1).replace(/^[²³]/,'');if(UNIT.test(r2)){okp=true;break}}}}if(okp&&pre.split('(').length>pre.split(')').length)continue}
    if(/^\d+$/.test(v)&&/^\s?[−-]\s?1\)/.test(rest))continue;
    if(/^\d+$/.test(v)&&/n\s?[−-]\s?1/.test(l)&&/\/\s?$/.test(pre))continue;
    if(F.has(v)||(D.has(v)&&!S.has(v)))continue;
    if(fm){let k=-1,acc=0;const gg=g;for(let j=0;j<og.length;j++){const p=gg.indexOf(og[j],acc);if(p<0)break;if(p<=i&&i<p+og[j].length){k=j;break}acc=p+og[j].length}if(k>=0&&DIMS.test(fm[k]))continue}
    if(/^(1,414|1,732|1,41|1,73)$/.test(v))continue;
    if(/π/.test(g)&&/^[24]$/.test(v))continue;
    if(v==='2'&&/√\(\s?$/.test(pre))continue;
    if(/^\d+$/.test(v)&&+v<=12&&/Molare Masse|M\(/.test(l)&&/^\s?·/.test(rest))continue;
    if(v==='1'&&/[−-]\s?$/.test(pre)&&/^\s?\)/.test(rest))continue;
    if(/^\d+$/.test(v)&&+v<=100&&!S.has(v)&&(/^\s?[·\/]\s?\(?\d/.test(rest)||/[\d)²³]\s?\p{L}*[²³]?\)?\s?[·\/]\s?$/u.test(pre)))continue;
    if(/^\d+$/.test(v)&&/(?:^|[\s(])\d+\s?\/\s?$/.test(pre)&&/^\s?(?:·|$)/.test(rest))continue;
    if(/^\d+$/.test(v)&&/^\s?\/\s?\d+\s?(?:·|$)/.test(rest)&&!/\/\s?$/.test(pre))continue;
    if(v==='1'&&/^\s?[−-]\s/.test(rest)&&!/\d\s?$/.test(pre))continue;
    if(/^\d+$/.test(v)&&/\)\s?\/\s?$/.test(pre)&&/x̄|Mittel/.test(l))continue;
    if(v==='100'&&(/[·\/]\s?$/.test(pre))&&/%/.test(l))continue;
    if(/\b(sin|cos|tan)\b/.test(l)&&/^0,\d{3,}$/.test(v))continue;
    bad.push([v,l0])}});seg.forEach(x=>{x=x.trim();if(/^[−-]?\d+(?:,\d+)?$/.test(x))D.add(x.replace(/^[−-]/,''))})});
 return bad}})();
