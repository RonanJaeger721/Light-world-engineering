from PIL import Image
from pathlib import Path
p=Path('outputs/light-world-engineering/public/media')
im=Image.open(p/'logo.jpeg').convert('RGBA').crop((32,30,445,224))
im.save(p/'logo-light.png')
dark=im.copy()
for y in range(im.height):
 for x in range(im.width):
  r,g,b,a=im.getpixel((x,y))
  if min(r,g,b)>205: dark.putpixel((x,y),(0,0,0,0))
  elif max(r,g,b)<100:dark.putpixel((x,y),(255,255,255,255))
dark.save(p/'logo-dark.png')
for f in p.glob('*.jpeg'):
 if f.name=='logo.jpeg':continue
 i=Image.open(f);i.save(p/(f.stem+'.webp'),'WEBP',quality=84)
fav=Image.open(p/'logo.jpeg').crop((280,48,376,144));fav.resize((64,64)).save('outputs/light-world-engineering/public/favicon.png')
