from pathlib import Path
from PIL import Image,ImageDraw
import subprocess,re,json
ff='work/media-tools/node_modules/ffmpeg-static/ffmpeg.exe'; src=Path(r'C:\Users\User\Downloads\CLIENT PICTURES\Lightworld engineering');out=Path('outputs/light-world-engineering/public/media');c=Image.new('RGB',(1000,7*225),'#eef0f2');d=ImageDraw.Draw(c);meta=[]
for n,f in enumerate(sorted(src.glob('*.mp4')),1):
 r=subprocess.run([ff,'-hide_banner','-i',str(f)],capture_output=True,text=True);m=re.search(r'Duration: (\d+):(\d+):([\d.]+)',r.stderr);duration=int(m[1])*3600+int(m[2])*60+float(m[3]);meta.append({'id':n,'file':f.name,'duration':duration})
 for j,p in enumerate([.1,.5,.85]):
  dest=Path(f'work/video-{n}-{j}.jpg');subprocess.run([ff,'-loglevel','error','-ss',str(duration*p),'-i',str(f),'-frames:v','1','-q:v','3',str(dest),'-y'],check=True);im=Image.open(dest);im.thumbnail((310,185));c.paste(im,(j*330,(n-1)*225+25));d.text((j*330,(n-1)*225+6),f'{n} / {duration*p:.1f}s',fill='black')
 d.text((0,(n-1)*225+209),f.name,fill='black')
c.save('work/video-contact-sheet.jpg');Path('work/videos-manifest.json').write_text(json.dumps(meta,indent=2));print(json.dumps(meta,indent=2))
