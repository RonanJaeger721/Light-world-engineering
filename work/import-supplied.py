from pathlib import Path
from PIL import Image,ImageOps
import json,hashlib,subprocess
src=Path(r'C:\Users\User\Downloads\CLIENT PICTURES\Lightworld engineering');out=Path('outputs/light-world-engineering/public/media');m=json.loads(Path('work/supplied-manifest.json').read_text());names={2:'water-storage-wide',3:'water-tanks',4:'solar-water-pump-story',5:'elevated-water-tank',6:'water-storage-team',7:'water-system-testing',8:'survey-woodland-setup',9:'survey-woodland',10:'survey-electrodes',11:'survey-open-field',12:'survey-tank-site',13:'survey-grassland',14:'site-survey',15:'survey-building',16:'survey-rig-site',17:'survey-residential',18:'survey-garden',19:'survey-garden-reading',20:'survey-courtyard',21:'survey-truck',22:'survey-streetside',23:'survey-streetside-reading',24:'survey-homestead',25:'survey-courtyard-team',26:'survey-homestead-reading',28:'geo-survey',29:'survey-homestead-instrument',31:'borehole-flushing',33:'borehole-service',34:'solar-dual-battery',35:'rooftop-solar-array',36:'solar-panels',37:'solar-installation-collage',38:'pump-installation-closeup',39:'pump-water-flow',40:'drilling-rig-wide',41:'drilling-rig-casing',42:'blue-pipes-closeup',43:'pressure-tanks',44:'blue-pipes',45:'shop',46:'drilling-rig-on-site',48:'solar-inverter-dark-battery',49:'solar-must-battery',50:'solar-must-system',51:'pump-installation-team',52:'inverter-battery',53:'drilling-rig'}
provenance=[]
for row in m:
 i=row['index']
 if i not in names:continue
 name=names[i];dest=out/(name+'.webp')
 if not dest.exists():
  im=ImageOps.exif_transpose(Image.open(src/row['file'])).convert('RGB');im.thumbnail((1600,1600));im.save(dest,'WEBP',quality=81,method=6)
 provenance.append({'asset':name+'.webp','source':row['file']})
Path('outputs/light-world-engineering/MEDIA-SOURCES.json').write_text(json.dumps(provenance,indent=2))
ff='work/media-tools/node_modules/ffmpeg-static/ffmpeg.exe'
for row in json.loads(Path('work/videos-manifest.json').read_text()):
 n=row['id'];name='project-video' if n==4 else f'field-video-{n}';f=src/row['file'];dest=out/(name+'.mp4')
 subprocess.run([ff,'-loglevel','error','-i',str(f),'-map_metadata','-1','-vf','scale=min(720\\,iw):-2','-c:v','libx264','-preset','fast','-crf','25','-c:a','aac','-b:a','96k','-movflags','+faststart','-y',str(dest)],check=True)
 Image.open(f'work/video-{n}-1.jpg').save(out/(f'field-video-{n}-poster.webp'),'WEBP',quality=80)
 print(name,dest.stat().st_size)
print('Prepared',len(provenance),'distinct photographic assets and 7 videos')
