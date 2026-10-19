import re,urllib.request,json,subprocess
from pathlib import Path
from html.parser import HTMLParser
base='https://light-world-powers.lovable.app'
class P(HTMLParser):
 def __init__(self): super().__init__();self.text=[];self.skip=False
 def handle_starttag(self,t,a):
  if t in ['script','style']:self.skip=True
 def handle_endtag(self,t):
  if t in ['script','style']:self.skip=False
 def handle_data(self,d):
  if not self.skip and d.strip():self.text.append(d.strip())
allhtml=Path('work/original.html').read_text(encoding='utf-8')
for route in ['about','services','boreholes','solar','projects','equipment','contact','quote']:
 h=subprocess.check_output(['curl.exe','-sL',base+'/'+route]).decode();Path('work/'+route+'.html').write_text(h,encoding='utf-8');allhtml+=h;p=P();p.feed(h);Path('work/'+route+'.txt').write_text('\n'.join(p.text),encoding='utf-8')
assets=sorted(set(re.findall(r'/__l5e/assets-v1/[^\s"<>]+?\.(?:jpeg|jpg|png|mp4|webp)',allhtml)))
out=Path('outputs/light-world-engineering/public/media');out.mkdir(parents=True,exist_ok=True)
for u in assets:
 name=u.rsplit('/',1)[1];subprocess.run(['curl.exe','-sL',base+u,'-o',str(out/name)],check=True);print(name,(out/name).stat().st_size)
print('Downloaded',len(assets))

