from pathlib import Path
from PIL import Image
import json,subprocess
r=Path('outputs/light-world-engineering');m=json.loads((r/'MEDIA-SOURCES.json').read_text());ff='work/media-tools/node_modules/ffmpeg-static/ffmpeg.exe'
for item in m['images']: Image.open(r/'public/media'/item['asset']).verify()
for item in m['videos']:
 Image.open(r/'public/media'/item['poster']).verify()
 if item['asset'].startswith(('updated-','hero-')): subprocess.run([ff,'-v','error','-i',str(r/'public/media'/item['asset']),'-f','null','-'],check=True,stdout=subprocess.DEVNULL)
print('PASS: all photo/poster decodes and all new video decodes')
