from pathlib import Path
from PIL import Image,ImageOps,ImageDraw
import hashlib,json
src=Path(r'C:\Users\User\Downloads\CLIENT PICTURES\Lightworld engineering');dest=Path('outputs/light-world-engineering/public/media');manifest=[];seen={}
files=sorted(src.glob('*.jpeg'))
canvas=Image.new('RGB',(1100,((len(files)+5)//6)*205),'#eef0f2');d=ImageDraw.Draw(canvas)
for i,f in enumerate(files):
 im=ImageOps.exif_transpose(Image.open(f));v=im.copy();v.thumbnail((174,165));x=(i%6)*183;y=(i//6)*205;canvas.paste(v,(x,y));d.text((x,y+169),f'{i+1:02d} '+f.name[14:31],fill='black');d.text((x,y+184),f.name[31:],fill='black')
 h=hashlib.sha256(f.read_bytes()).hexdigest();manifest.append({'index':i+1,'file':f.name,'size':im.size,'duplicateOf':seen.get(h)})
 if h not in seen:seen[h]=i+1
canvas.save('work/supplied-contact-sheet.jpg');Path('work/supplied-manifest.json').write_text(json.dumps(manifest,indent=2))
print('Images',len(files),'unique',len(seen));print(json.dumps(manifest,indent=2))
