import subprocess,concurrent.futures
base='https://light-world-engineering.vercel.app'
routes=['/','/about/','/services/','/boreholes/','/solar/','/projects/','/equipment/','/contact/','/quote/','/privacy/','/terms/','/robots.txt','/sitemap.xml','/media/drilling-rig.webp','/media/logo-dark.png','/media/project-video.mp4','/fonts/manrope-500.ttf']
def check(route):
 code=subprocess.check_output(['curl.exe','-sL','-o','NUL','-w','%{http_code}',base+route]).decode();assert code=='200',(route,code);return route+' '+code
with concurrent.futures.ThreadPoolExecutor(max_workers=5) as e:
 for s in e.map(check,routes): print(s)
