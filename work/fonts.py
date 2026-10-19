from pathlib import Path
import re,subprocess


p=Path('outputs/light-world-engineering/public/fonts');p.mkdir(exist_ok=True)
css=Path('work/fonts.css').read_text();out=''
for block in re.findall(r'@font-face \{[^}]+\}',css):
 family=re.search("font-family: '([^']+)'",block)[1];weight=re.search(r'font-weight: (\d+)',block)[1]
 if weight=='800':continue
 url=re.search(r'url\(([^)]+)',block)[1];name=family.lower().replace(' ','-')+'-'+weight
 raw=Path('work')/(name+'.ttf');subprocess.run(['curl.exe','-sL',url,'-o',str(raw)],check=True)
 (p/(name+'.ttf')).write_bytes(raw.read_bytes())
 out+=f"@font-face{{font-family:'{family}';font-style:normal;font-weight:{weight};font-display:swap;src:url('/fonts/{name}.ttf') format('truetype')}}\n"
style=Path('outputs/light-world-engineering/app/globals.css');s=style.read_text();s=re.sub(r"@import url\([^\n]+\);\n",'',s);s=s.replace("@import 'tailwindcss';", "@import 'tailwindcss';\n"+out);style.write_text(s)
for name in ['dmsans','manrope']:
 subprocess.run(['curl.exe','-sL',f'https://raw.githubusercontent.com/google/fonts/main/ofl/{name}/OFL.txt','-o',str(p/(name+'-LICENSE.txt'))])
print('Self-hosted font files prepared')

