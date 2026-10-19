from pathlib import Path
import subprocess,json,concurrent.futures,re
m=json.loads(Path('outputs/light-world-engineering/MEDIA-SOURCES.json').read_text());base='https://light-world-engineering.vercel.app';assets=[row['asset'] for row in m['images']]+[row['asset'] for row in m['videos']]+[row['poster'] for row in m['videos']];routes=['/','/projects/','/solar/','/equipment/'];root=Path('outputs/light-world-engineering/public/media')
def check(name):
 route='/media/'+name if name in assets else name
 h=subprocess.check_output(['curl.exe','-sI','--max-time','25',base+route],text=True);codes=re.findall(r'HTTP/[\d.]+ (\d+)',h);assert codes and codes[-1]=='200',(route,h)
 if name in assets:
  c=re.search(r'content-length:\s*(\d+)',h,re.I)
  if c:assert int(c[1])==(root/name).stat().st_size,(name,'size mismatch')
  expected='video/mp4' if name.endswith('.mp4') else 'image/webp';assert expected in h.lower(),(name,'content type')
 return route
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool: results=list(pool.map(check,assets+routes))
Path('work/public-media-check.json').write_text(json.dumps({'base':base,'status':'passed','assets':len(assets),'routes':routes},indent=2));print('PASS:',len(assets),'public media files and',len(routes),'routes return HTTP 200, with matching file sizes where provided and correct media types.')
