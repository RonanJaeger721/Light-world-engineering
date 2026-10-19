from PIL import Image,ImageOps,ImageDraw
from pathlib import Path
files=list(Path('outputs/light-world-engineering/public/media').glob('*.jpeg'))
c=Image.new('RGB',(1000,((len(files)+3)//4)*235),'#eeeeee');d=ImageDraw.Draw(c)
for i,f in enumerate(files):
 im=Image.open(f);print(f.name,im.size);im.thumbnail((240,200));x=(i%4)*250;y=(i//4)*235;c.paste(im,(x,y));d.text((x,y+204),f.name,fill='black')
c.save('work/assets.jpg')
