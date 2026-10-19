from PIL import Image
from pathlib import Path
p=Path('outputs/light-world-engineering/public/media')
im=Image.open(p/'logo-dark.png')
for y in range(im.height):
 for x in range(im.width):
  if x>370 and y>160: im.putpixel((x,y),(0,0,0,0))
im.save(p/'logo-dark.png')
