from pathlib import Path
p=Path('outputs/light-world-engineering/components/site.tsx');s=p.read_text(encoding='utf-8');a=s.index('export function VideoReel()');b=s.index('export function EquipmentCatalogue()',a)
s=s[:a]+'''export function VideoReel() {
  const [active,setActive]=useState(0);
  const [play,setPlay]=useState(false);
  const clip=fieldVideos[active];
  return <section className="video-reel wrap">
    <div className="video-title"><Label>From the field</Label><h2>Real people. Real work.</h2></div>
    <div className="video-library">
      <div>
        <div className="video-frame">
          {play ? <video key={clip.src} src={clip.src} controls autoPlay playsInline preload="metadata" poster={`/media/${clip.poster}.webp`} aria-label={clip.title}/> : <>
            <Photo className="video-poster" name={clip.poster} alt={clip.title}/>
            <button onClick={()=>setPlay(true)} aria-label={`Play ${clip.title}`}><Play fill="currentColor"/><span>Watch field footage</span></button>
          </>}
        </div>
        <div className="video-active-title" aria-live="polite"><h3>{clip.title}</h3><span>{String(active+1).padStart(2,'0')} / {String(fieldVideos.length).padStart(2,'0')}</span></div>
      </div>
      <div className="video-selections" role="group" aria-label="Choose a field video">
        {fieldVideos.map((video,i)=><button key={video.src} className={active===i?'selected':''} aria-pressed={active===i} onClick={()=>{setActive(i);setPlay(true);}}><Photo name={video.poster} alt=""/><span><small>{video.category}</small>{video.title}</span><Play size={14} aria-hidden="true"/></button>)}
      </div>
    </div>
    <p className="video-source-note">On-site footage from Light World Engineering. Choose a clip to watch the team at work.</p>
  </section>
}

''' +s[b:];s=s.replace('<Photo name={slides[index].image} alt={slides[index].title} eager />','<Photo name={slides[index].image} alt={`${slides[index].title} — photograph ${slides[index].photoIndex+1}`} eager />');p.write_text(s,encoding='utf-8')
p=Path('outputs/light-world-engineering/app/[slug]/page.tsx');s=p.read_text(encoding='utf-8');s=s.replace('Original photographs of our drilling equipment, solar installations, water systems and work in the field.','Photo collections of borehole drilling, pump installation, rooftop solar, water systems and site surveys.');s=s.replace('Explore by category. Select a photograph to view it fullscreen and\n              learn more. Use the arrow keys or swipe to move through the gallery.','Explore by category. Open a collection to view the supplied photographs fullscreen. Use the arrow keys or swipe to move between photos.');s=s.replace('image: "solar-panels",','image: "rooftop-solar-array",');p.write_text(s,encoding='utf-8')
