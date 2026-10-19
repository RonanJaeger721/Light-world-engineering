from pathlib import Path
import json,subprocess
src=Path(r'C:\Users\User\Downloads\CLIENT PICTURES\Lightworld engineering');out=Path('outputs/light-world-engineering/public/media');ff='work/media-tools/node_modules/ffmpeg-static/ffmpeg.exe'
for row in json.loads(Path('work/videos-manifest.json').read_text()):
 n=row['id'];name='project-video' if n==4 else f'field-video-{n}';f=src/row['file'];dest=out/(name+'.mp4')
 if dest.stat().st_size>f.stat().st_size:
  subprocess.run([ff,'-loglevel','error','-i',str(f),'-map_metadata','-1','-c','copy','-movflags','+faststart','-y',str(dest)],check=True)
 print(name, dest.stat().st_size)
