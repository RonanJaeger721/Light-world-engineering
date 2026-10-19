from pathlib import Path
from PIL import Image
import json,subprocess
root=Path('outputs/light-world-engineering');media=root/'public/media';images=json.loads((root/'MEDIA-SOURCES.json').read_text());videos=json.loads(Path('work/videos-manifest.json').read_text());rows=[]
for v in videos:
 name='project-video' if v['id']==4 else f"field-video-{v['id']}"
 rows.append({'asset':name+'.mp4','source':v['file'],'durationSeconds':v['duration'],'poster':f"field-video-{v['id']}-poster.webp"})
(root/'MEDIA-SOURCES.json').write_text(json.dumps({'images':images,'videos':rows,'notes':['Exact duplicate images are omitted.','The named client report and standalone survey graph are not published in the gallery.','Collections group related subject matter, without asserting a shared client, site or project.']},indent=2))
for row in images:
 with Image.open(media/row['asset']) as im: im.verify()
print('Verified',len(images),'photographs decode successfully')
for row in rows:
 subprocess.run(['work/media-tools/node_modules/ffmpeg-static/ffmpeg.exe','-v','error','-i',str(media/row['asset']),'-f','null','-'],check=True,capture_output=True)
 with Image.open(media/row['poster']) as im: im.verify()
print('Verified all',len(rows),'videos decode and all posters exist')
