from pathlib import Path
from PIL import Image,ImageOps
import json,subprocess
src=Path(r'C:\Users\User\Downloads\CLIENT PICTURES\Lightworld engineering\Lightworld updated'); root=Path('outputs/light-world-engineering');out=root/'public/media';ff='work/media-tools/node_modules/ffmpeg-static/ffmpeg.exe'
names={'10.04.43':'project-team','10.04.44':'client-handover-group','10.04.46':'client-handover','10.04.47':'survey-tree-reading','10.04.47 (1)':'survey-tree','10.04.48 (1)':'solar-roof-technician','10.05.03':'completed-tank-system','10.05.04':'completed-green-tank','10.05.04 (1)':'water-filtration-connections','10.05.04 (2)':'rig-sunset','10.05.05':'finished-casing','10.05.05 (2)':'branded-drilling-truck'}
m=json.loads((root/'MEDIA-SOURCES.json').read_text())
for stamp,name in names.items():
 f=src/f'WhatsApp Image 2026-10-19 at {stamp}.jpeg'; im=ImageOps.exif_transpose(Image.open(f)).convert('RGB');im.thumbnail((1600,1600));im.save(out/f'{name}.webp','WEBP',quality=83,method=6);m['images'].append({'asset':name+'.webp','source':'Lightworld updated/'+f.name})
for row in json.loads(Path('work/new-videos-manifest.json').read_text()):
 n=row['id'];name=f'updated-field-{n}';vf='scale=min(720\\,iw):-2'
 if n==2:vf='transpose=1,'+vf
 subprocess.run([ff,'-loglevel','error','-i',str(src/row['file']),'-map_metadata','-1','-vf',vf,'-c:v','libx264','-preset','fast','-crf','25','-c:a','aac','-b:a','96k','-movflags','+faststart','-y',str(out/(name+'.mp4'))],check=True)
 im=Image.open(f'work/new-video-{n}-1.jpg')
 if n==2:im=im.transpose(Image.Transpose.ROTATE_270)
 im.save(out/(name+'-poster.webp'),'WEBP',quality=81)
 m['videos'].append({'asset':name+'.mp4','source':'Lightworld updated/'+row['file'],'durationSeconds':row['duration'],'poster':name+'-poster.webp'})
subprocess.run([ff,'-loglevel','error','-ss','9','-i',str(src/'WhatsApp Video 2026-10-19 at 10.04.50.mp4'),'-t','8','-an','-vf','scale=540:-2','-c:v','libx264','-crf','27','-movflags','+faststart','-y',str(out/'hero-drilling.mp4')],check=True)
m['videos'].append({'asset':'hero-drilling.mp4','source':'Lightworld updated/WhatsApp Video 2026-10-19 at 10.04.50.mp4 (9-17 seconds, silent hero excerpt)','durationSeconds':8,'poster':'updated-field-3-poster.webp'})
m['notes'].append('19 October update: private chat screenshots and status screenshot excluded; near-duplicate pump photograph omitted. New clip 2 rotated upright. Hero uses an eight-second silent excerpt; full clips remain in the video library.')
(root/'MEDIA-SOURCES.json').write_text(json.dumps(m,indent=2))
print('Imported 12 photos, 6 full videos and 1 silent hero excerpt')
