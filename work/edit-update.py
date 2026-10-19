from pathlib import Path
r=Path('outputs/light-world-engineering');p=r/'components/site.tsx';s=p.read_text();s=s.replace('  Play,','  Play,\n  Pause,')
a=s.index('  const reduce = useReducedMotion();',s.index('export function Hero()'));b=s.index('  return (',a)
s=s[:a]+'''  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [focused, setFocused] = useState(false);
  const [progress, setProgress] = useState(0);
  const section = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const elapsed = useRef(0);
  const slides = [
    { image: "updated-field-3-poster", label: "Drilling", alt: "Borehole drilling in the field", video: true },
    { image: "branded-drilling-truck", label: "Our equipment", alt: "Light World Engineering branded drilling truck" },
    { image: "completed-tank-system", label: "Water systems", alt: "Completed branded tank installation and water connections" },
    { image: "client-handover-group", label: "Client handovers", alt: "Light World team meeting clients at a project site" },
  ];
  const running = !paused && !reduce && visible && !focused;
  const select = (index: number) => { elapsed.current = 0; setProgress(0); setActive((index + slides.length) % slides.length); };
  useEffect(() => {
    const update = () => setVisible(!document.hidden && !!section.current && section.current.getBoundingClientRect().bottom > 0);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting && !document.hidden));
    if (section.current) observer.observe(section.current);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, []);
  useEffect(() => {
    if (!running) return;
    let previous = performance.now();
    let frame: number;
    const tick = (now: number) => {
      elapsed.current += Math.min(now - previous, 100); previous = now;
      if (elapsed.current >= 8000) { elapsed.current = 0; setActive(value => (value + 1) % 4); }
      setProgress(elapsed.current / 8000);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [running]);
  useEffect(() => {
    if (!video.current) return;
    if (running && active === 0) { void video.current.play().catch(() => {}); }
    else video.current.pause();
  }, [running, active]);
''' + s[b:]
s=s.replace('<section className="hero">','<section className="hero" ref={section} aria-label="Light World Engineering project highlights">',1)
a=s.index('      <motion.div',s.index('export function Hero()'));b=s.index('      <div className="hero-shade"',a)
s=s[:a]+'''      <div className="hero-photo">
        {slides.map((slide, index) => (
          <div key={slide.image} className={`hero-scene ${active === index ? "is-active" : ""}`} aria-hidden={active !== index}>
            <Photo name={slide.image} alt={slide.alt} eager={index === 0} />
            {slide.video && !reduce && active === 0 && <video ref={video} src="/media/hero-drilling.mp4" muted playsInline loop preload="metadata" poster="/media/updated-field-3-poster.webp" aria-hidden="true" />}
          </div>
        ))}
      </div>
''' + s[b:]
a=s.index('      <div className="hero-bottom wrap">',s.index('export function Hero()'));b=s.index('    </section>',a)
s=s[:a]+'''      <div className="hero-bottom wrap hero-controls" onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
        <div className="hero-tracks" role="group" aria-label="Choose hero scene">
          {slides.map((slide, index) => <button key={slide.image} type="button" aria-label={`Show ${slide.label}`} aria-pressed={active === index} onClick={() => select(index)}>
            <span className="hero-track"><span style={{ transform: `scaleX(${index === active ? progress : index < active ? 1 : 0})` }} /></span>
            <span className="hero-track-label">0{index + 1}<span>{slide.label}</span></span>
          </button>)}
        </div>
        <div className="hero-playback">
          <button type="button" aria-label="Previous hero scene" onClick={() => select(active - 1)}><ChevronLeft size={18}/></button>
          <button type="button" aria-label={paused ? "Play hero slideshow" : "Pause hero slideshow"} aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? <Play size={16}/> : <Pause size={16}/>}</button>
          <button type="button" aria-label="Next hero scene" onClick={() => select(active + 1)}><ChevronRight size={18}/></button>
        </div>
      </div>
''' + s[b:]
p.write_text(s)
p=r/'lib/content.ts';s=p.read_text();s=s.replace('      "drilling-rig-wide",','      "branded-drilling-truck",\n      "rig-sunset",\n      "finished-casing",\n      "drilling-rig-wide",',1).replace('      "rooftop-solar-array",','      "solar-roof-technician",\n      "rooftop-solar-array",',1).replace('    image: "water-tanks",\n    images: [','    image: "completed-tank-system",\n    images: [\n      "completed-tank-system",\n      "completed-green-tank",\n      "water-filtration-connections",',1).replace('      "survey-woodland",','      "survey-tree",\n      "survey-tree-reading",\n      "survey-woodland",',1)
a=s.index('export const projects = [')+len('export const projects = [');s=s[:a]+'''
  {
    title: "People behind the projects",
    category: "Client Handovers",
    image: "client-handover-group",
    images: ["client-handover-group", "client-handover", "project-team"],
    description: "Meetings, handshakes and moments with clients and the Light World Engineering team on site.",
  },'''+s[a:]
a=s.index('export const fieldVideos = [')+len('export const fieldVideos = ['); titles=['Clients and crew on site','Water flowing at the borehole','Drilling in progress','Solar installation in progress','Meeting clients at the rig','A handshake on site'];s=s[:a]+''.join(f'\n  {{ title: "{title}", category: "{ "Solar Installations" if n==4 else "Client Handovers" if n in [1,5,6] else "Borehole Drilling"}", src: "/media/updated-field-{n}.mp4", poster: "updated-field-{n}-poster" }},' for n,title in enumerate(titles,1))+s[a:];p.write_text(s)
p=r/'app/globals.css';s=p.read_text().replace('--steel: #466e8b','--steel: #2e526d').replace('--muted: #5d6a77','--muted: #485867');s+='''
/* Project highlights: a single timer drives both the scene and its progress track. */
.hero-scene { position:absolute; inset:0; opacity:0; transition:opacity .8s ease; }
.hero-scene.is-active { opacity:1; }
.hero-scene img, .hero-scene video { width:100%; height:100%; object-fit:cover; object-position:65% 45%; }
.hero-scene video { position:absolute; inset:0; }
.hero-scene:first-child img, .hero-scene:first-child video { object-position:center 45%; }
.hero-controls { align-items:center; gap:32px; z-index:3; }
.hero-tracks { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:22px; flex:1; max-width:850px; }
.hero-tracks button { text-align:left; color:#fff; padding:8px 0; min-height:48px; background:none; border:0; cursor:pointer; }
.hero-track { display:block; height:2px; background:#ffffff50; overflow:hidden; }
.hero-track > span { display:block; height:100%; background:var(--gold); transform-origin:left; }
.hero-track-label { display:flex; gap:12px; margin-top:10px; font-size:10px; letter-spacing:.1em; text-transform:uppercase; }
.hero-tracks button[aria-pressed="false"] .hero-track-label { opacity:.7; }
.hero-playback { display:flex; gap:2px; }
.hero-playback button { display:grid; place-items:center; width:44px; height:44px; color:white; border:1px solid #ffffff50; background:#0b1b3055; cursor:pointer; }
.hero-playback button:hover { background:#153450; }
.hero-controls button:focus-visible { outline:2px solid var(--gold); outline-offset:5px; }
@media(max-width:760px) {
 .hero-controls { gap:15px; bottom:24px; }
 .hero-tracks { gap:10px; }
 .hero-track-label { font-size:9px; }
 .hero-track-label > span { display:none; }
 .hero-playback button { width:44px; }
 .hero-copy { padding-bottom:130px; }
}
@media(prefers-reduced-motion:reduce) { .hero-scene { transition:none; } }
''';p.write_text(s)
print('Hero, contrast and collections updated')
