from pathlib import Path
import re
root=Path('outputs/light-world-engineering/out')
for route in ['', 'about','services','boreholes','solar','projects','equipment','contact','quote','privacy','terms']:
 s=(root/route/'index.html').read_text(encoding='utf-8')
 assert '<meta property="og:image"' in s,route
 assert len(re.findall('<h1',s))==1,route
 assert 'rel="canonical"' in s,route
print('SEO: all 11 content routes have one H1, canonical and Open Graph image')
for f in Path('outputs/light-world-engineering/public/fonts').glob('*LICENSE*'):
 assert 'SIL OPEN FONT LICENSE' in f.read_text(),f
print('Font licences verified')
