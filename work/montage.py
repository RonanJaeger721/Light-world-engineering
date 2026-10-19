from PIL import Image,ImageDraw
from pathlib import Path
files=[Path('work')/f for f in ['about-390.png','services-390.png','projects-390.png','equipment-390.png','contact-390.png']]
files=[p for p in files if p.exists()]
w=250;c=Image.new('RGB',(w*len(files),1600),'#ddd');d=ImageDraw.Draw(c)
for j,p in enumerate(files):
 im=Image.open(p);im.resize((w,round(im.height*w/im.width))).thumbnail((w,1560))
 im=Image.open(p);im.thumbnail((w,1560));c.paste(im,(j*w,30));d.text((j*w+5,5),p.stem,fill='black')
c.save('work/mobile-pages.jpg')
