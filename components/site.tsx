"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  MessageCircle,
} from "lucide-react";
import {
  company,
  nav,
  services,
  projects,
  fieldVideos,
  equipment,
  process,
  quoteServices,
  whatsapp,
} from "@/lib/content";

export function Photo({
  name,
  alt,
  className = "",
  eager = false,
}: {
  name: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      className={className}
      src={`/media/${name}.webp`}
      alt={alt}
      width={name === "drilling-rig" ? 1280 : 900}
      height={name === "drilling-rig" ? 960 : 1000}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
    />
  );
}
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`reveal ${className}`}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.07 }}
      transition={{ duration: 0.65, ease: [0.2, 0.65, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
export function Label({ children }: { children: ReactNode }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}
export function Button({
  children,
  href = "/quote",
  light = false,
  outline = false,
}: {
  children: ReactNode;
  href?: string;
  light?: boolean;
  outline?: boolean;
}) {
  return (
    <Link
      className={`button ${light ? "light" : ""} ${outline ? "outline" : ""}`}
      href={href}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function TextLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="logo" aria-label="Light World Engineering home">
      <img
        src={`/media/logo-${dark ? "light" : "dark"}.png`}
        width="413"
        height="194"
        alt="Light World Engineering"
      />
    </Link>
  );
}

export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const last = useRef(0);
  const menu = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    last.current = Math.max(0, window.scrollY);
    const scroll = () => {
      const y = Math.max(0, window.scrollY);
      setHidden(y > 100 && y > last.current);
      setScrolled(y > 35);
      last.current = y;
    };
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const items = menu.current?.querySelectorAll<HTMLElement>("a,button");
    items?.[0]?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
      if (e.key === "Tab" && items?.length) {
        const first = items[0],
          end = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          end.focus();
        } else if (!e.shiftKey && document.activeElement === end) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = old;
      document.removeEventListener("keydown", key);
    };
  }, [open]);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header
        className={`navbar ${scrolled || path !== "/" ? "glass" : ""} ${hidden && !open ? "nav-hidden" : ""}`}
      >
        <Logo />
        <nav aria-label="Main navigation">
          {nav.map(([title, url]) => (
            <Link
              key={url}
              href={url}
              aria-current={path === url ? "page" : undefined}
              className={path === url ? "active" : ""}
            >
              {title}
            </Link>
          ))}
        </nav>
        <Link href="/quote" className="nav-quote">
          Get a quote <ArrowUpRight size={16} />
        </Link>
        <button
          ref={trigger}
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>
      {open && (
        <div
          ref={menu}
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <div className="mobile-top">
            <Logo />
            <button
              aria-label="Close navigation"
              onClick={() => {
                setOpen(false);
                trigger.current?.focus();
              }}
            >
              <X />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {nav.map(([title, url], i) => (
              <Link
                key={url}
                href={url}
                onClick={() => setOpen(false)}
                aria-current={path === url ? "page" : undefined}
              >
                <small>0{i + 1}</small>
                {title}
                <ArrowUpRight />
              </Link>
            ))}
            <Link href="/quote" onClick={() => setOpen(false)}>
              Request a quote
              <ArrowUpRight />
            </Link>
          </nav>
          <a href={`tel:${company.phone}`}>077 169 8755</a>
          <p>Borehole · Solar · Water</p>
        </div>
      )}
    </>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-top wrap">
        <div>
          <Logo />
          <p>
            Engineering solutions that power lives.
            <br />
            Water, energy and equipment, brought together.
          </p>
          <a className="text-link" href={whatsapp()}>
            Start a conversation <ArrowUpRight size={17} />
          </a>
        </div>
        <div>
          <span className="footer-label">Explore</span>
          {nav.map(([title, url]) => (
            <Link href={url} key={url}>
              {title}
            </Link>
          ))}
        </div>
        <div>
          <span className="footer-label">Speak to the team</span>
          <a href={`tel:${company.phone}`}>077 169 8755</a>
          <a href={`tel:${company.phone2}`}>078 211 0887</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={`mailto:${company.email2}`}>{company.email2}</a>
        </div>
        <div>
          <span className="footer-label">Visit our office</span>
          <p>
            Office 7, First Floor
            <br />
            Chiedza House
            <br />
            Corner First Street and
            <br />
            Kwame Nkrumah Avenue
          </p>
          <Link href="/contact">Contact & enquiries ↗</Link>
        </div>
      </div>
      <div className="footer-bottom wrap">
        <span>© {new Date().getFullYear()} Light World Engineering</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
        <a href="https://wa.me/263789937251">
          Designed & Developed by Jaeger Media
        </a>
      </div>
    </footer>
  );
}
export function WhatsApp() {
  return (
    <a
      className="whatsapp"
      href={whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
    >
      <MessageCircle size={21} />
      <span>Let’s talk</span>
    </a>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [focused, setFocused] = useState(false);
  const [progress, setProgress] = useState(0);
  const section = useRef<HTMLElement>(null);
  const elapsed = useRef(0);
  const slides = [
    { image: "rig-sunset", label: "Our rigs", alt: "Light World Engineering drilling rig at sunset" },
    { image: "rooftop-solar-array", label: "Solar installations", alt: "Installed rooftop solar panels" },
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
      if (elapsed.current >= 3000) { elapsed.current = 0; setActive(value => (value + 1) % 4); }
      setProgress(elapsed.current / 3000);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [running]);
  return (
    <section className="hero" ref={section} aria-label="Light World Engineering project highlights">
      <div className="hero-photo">
        {slides.map((slide, index) => (
          <div key={slide.label} className={`hero-scene ${active === index ? "is-active" : ""}`} aria-hidden={active !== index}>
            <Photo name={slide.image} alt={slide.alt} eager />
          </div>
        ))}
      </div>
      <div className="hero-shade" />
      <div className="hero-copy wrap">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <Label>Light World Engineering</Label>
          <h1>
            Engineering
            <br />
            solutions that
            <br />
            <em>power lives.</em>
          </h1>
          <p>
            Reliable borehole, solar and water solutions
            <br className="desktop-break" /> for homes, businesses and
            communities.
          </p>
          <div className="button-row">
            <Button href="/services">Explore our services</Button>
            <Button href="/quote" outline>
              Request a quote
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="hero-bottom wrap hero-controls" onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
        <div className="hero-tracks" role="group" aria-label="Choose hero scene">
          {slides.map((slide, index) => <button key={slide.label} type="button" aria-label={`Show ${slide.label}`} aria-pressed={active === index} onClick={() => select(index)}>
            <span className="hero-track"><span style={{ transform: `scaleX(${index === active ? progress : index < active ? 1 : 0})` }} /></span>
            <span className="hero-track-label">0{index + 1}<span>{slide.label}</span></span>
          </button>)}
        </div>
        <div className="hero-playback">
          <button type="button" aria-label="Previous hero scene" onClick={() => select(active - 1)}><ChevronLeft size={18}/></button>
          <button type="button" aria-label={paused ? "Play hero slideshow" : "Pause hero slideshow"} aria-pressed={paused} disabled={!!reduce} title={reduce ? "Automatic motion disabled by your reduced-motion preference" : undefined} onClick={() => setPaused(value => !value)}>{paused ? <Play size={16}/> : <Pause size={16}/>}</button>
          <button type="button" aria-label="Next hero scene" onClick={() => select(active + 1)}><ChevronRight size={18}/></button>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section id="introduction" className="section intro wrap">
      <Reveal className="intro-images">
        <Photo
          name="water-tanks"
          alt="Elevated water tanks with solar panels in the field"
        />
        <div className="intro-inset">
          <Photo
            name="solar-dual-battery"
            alt="Wall-mounted inverter and battery installation"
          />
        </div>
        <span className="image-note">WATER + ENERGY, CONNECTED.</span>
      </Reveal>
      <Reveal className="intro-copy">
        <Label>Built around your needs</Label>
        <h2>
          Reliable water.
          <br />
          Dependable power.
          <br />
          <em>One practical team.</em>
        </h2>
        <p>
          Light World Engineering brings borehole, water and solar solutions
          together — from assessment and equipment supply to installation,
          testing and ongoing support.
        </p>
        <p>
          For homes, farms, businesses and institutions across Zimbabwe. Every
          project starts with understanding what you need.
        </p>
        <TextLink href="/about">Get to know Light World</TextLink>
      </Reveal>
    </section>
  );
}

export function CoreServices() {
  return (
    <section className="section services-section">
      <div className="wrap">
        <Reveal className="section-heading">
          <div>
            <Label>Our expertise</Label>
            <h2>
              Essential systems.
              <br />
              <em>Thoughtfully engineered.</em>
            </h2>
          </div>
          <p>
            Water. Energy. The equipment that connects them.
            <br />
            Explore the solutions behind everyday reliability.
          </p>
        </Reveal>
        <div className="service-features">
          {services.map((s, i) => (
            <Reveal key={s.name} className="service-feature">
              <Link href={s.href}>
                <Photo name={s.image} alt={s.name} />
                <div className="service-overlay">
                  <span className="service-number">0{i + 1} /</span>
                  <div>
                    <h3>{s.name}</h3>
                    <p>{s.description}</p>
                  </div>
                  <span className="round-arrow">
                    <ArrowUpRight />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery({ featured = false }: { featured?: boolean }) {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState<number | null>(null);
  const close = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const touch = useRef(0);
  const items = projects
    .filter((p) => filter === "All" || p.category === filter)
    .slice(0, featured ? 3 : 100);
  const slides = items.flatMap((p) =>
    p.images.map((image, photoIndex) => ({ ...p, image, photoIndex })),
  );
  const next = (d: number) =>
    setIndex((i) =>
      i === null ? null : (i + d + slides.length) % slides.length,
    );
  useEffect(() => {
    if (index === null) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    close.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight")
        setIndex((i) => (i === null ? null : (i + 1) % slides.length));
      if (e.key === "ArrowLeft")
        setIndex((i) =>
          i === null ? null : (i - 1 + slides.length) % slides.length,
        );
      if (e.key === "Tab") {
        const controls = document.querySelectorAll<HTMLElement>(
          ".lightbox button,.lightbox a",
        );
        const a = controls[0],
          z = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === a) {
          e.preventDefault();
          z.focus();
        } else if (!e.shiftKey && document.activeElement === z) {
          e.preventDefault();
          a.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = old;
      document.removeEventListener("keydown", key);
      opener.current?.focus();
    };
  }, [index, slides.length]);
  return (
    <>
      {!featured && (
        <div className="filters" aria-label="Filter projects">
          {["All", ...Array.from(new Set(projects.map((p) => p.category)))].map(
            (c) => (
              <button
                key={c}
                className={filter === c ? "selected" : ""}
                aria-pressed={filter === c}
                onClick={() => {
                  setFilter(c);
                  setIndex(null);
                }}
              >
                {c}
              </button>
            ),
          )}
        </div>
      )}
      <div
        className={`gallery ${featured ? "featured" : ""}`}
        aria-live="polite"
      >
        {items.map((p, i) => (
          <Reveal className="project" key={p.title}>
            <button
              onClick={(e) => {
                opener.current = e.currentTarget;
                setIndex(
                  items
                    .slice(0, i)
                    .reduce(
                      (total, project) => total + project.images.length,
                      0,
                    ),
                );
              }}
              aria-label={`View ${p.title}`}
            >
              <div className="project-photo">
                <Photo name={p.image} alt={p.title} />
                <span className="photo-count">{p.images.length} photos</span>
                <span className="round-arrow">
                  <Plus />
                </span>
              </div>
              <div className="project-caption">
                <div>
                  <small>{p.category}</small>
                  <h3>{p.title}</h3>
                </div>
                <span>0{projects.indexOf(p) + 1}</span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
      {index !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={slides[index].title}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIndex(null);
          }}
        >
          <button
            className="lightbox-close"
            ref={close}
            onClick={() => setIndex(null)}
            aria-label="Close project"
          >
            <X />
          </button>
          <div
            className="lightbox-photo"
            onTouchStart={(e) => {
              touch.current = e.changedTouches[0].clientX;
            }}
            onTouchEnd={(e) => {
              const dx = e.changedTouches[0].clientX - touch.current;
              if (Math.abs(dx) > 45) next(dx < 0 ? 1 : -1);
            }}
          >
            <Photo
              name={slides[index].image}
              alt={`${slides[index].title} — photograph ${slides[index].photoIndex + 1}`}
              eager
            />
          </div>
          <div className="lightbox-info">
            <small>
              {index + 1} / {slides.length} — {slides[index].category}
            </small>
            <h2>{slides[index].title}</h2>
            <p>{slides[index].description}</p>
            <div className="collection-position">
              Photo {slides[index].photoIndex + 1} of{" "}
              {slides[index].images.length} in this collection
            </div>
            <a
              className="text-link"
              href={whatsapp(
                `Hello Light World Engineering, I would like to enquire about ${slides[index].title}.`,
              )}
            >
              Discuss a similar project <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="lightbox-controls">
            <button onClick={() => next(-1)} aria-label="Previous photo">
              <ChevronLeft />
            </button>
            <button onClick={() => next(1)} aria-label="Next photo">
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export function FeaturedProjects() {
  return (
    <section className="section wrap">
      <Reveal className="section-heading">
        <div>
          <Label>In the field</Label>
          <h2>
            The work.
            <br />
            <em>Seen up close.</em>
          </h2>
        </div>
        <div>
          <p>
            Real photographs from Light World Engineering.
            <br />
            Explore the installations and equipment behind our work.
          </p>
          <TextLink href="/projects">Explore the portfolio</TextLink>
        </div>
      </Reveal>
      <Gallery featured />
    </section>
  );
}

export function SolutionsShowcase() {
  const [active, setActive] = useState(0);
  const stages = [
    {
      label: "01 / Assess",
      title: "Start with the site.",
      text: "Site surveys and assessments help define the scope, installation requirements and suitable equipment.",
      image: "survey-woodland",
    },
    {
      label: "02 / Drill",
      title: "Below the surface.",
      text: "Borehole drilling, casing and installation bring the water-access plan into the field.",
      image: "drilling-rig",
    },
    {
      label: "03 / Connect",
      title: "Bring water into reach.",
      text: "Pumps, pipes, pressure systems and storage complete the connection from the borehole to everyday use.",
      image: "water-tanks",
    },
  ];
  return (
    <section className="water-showcase">
      <div className="wrap water-grid">
        <Reveal className="water-copy">
          <Label>Borehole solutions</Label>
          <h2>
            From the ground.
            <br />
            <em>Into everyday life.</em>
          </h2>
          <p>
            A borehole is part of a bigger water system. Explore how assessment,
            drilling and the right connections work together.
          </p>
          <div
            className="stage-controls"
            role="tablist"
            aria-label="Borehole service stages"
          >
            {stages.map((s, i) => (
              <button
                key={s.label}
                id={`stage-${i}`}
                role="tab"
                tabIndex={i === active ? 0 : -1}
                onKeyDown={(e) => {
                  if (
                    ["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)
                  ) {
                    e.preventDefault();
                    const n =
                      e.key === "Home"
                        ? 0
                        : e.key === "End"
                          ? 2
                          : (i + (e.key === "ArrowRight" ? 1 : 2)) % 3;
                    setActive(n);
                    document.getElementById(`stage-${n}`)?.focus();
                  }
                }}
                aria-selected={i === active}
                aria-controls="stage-panel"
                onClick={() => setActive(i)}
              >
                {s.label}
                <ArrowRight size={16} />
              </button>
            ))}
          </div>
          <div
            id="stage-panel"
            role="tabpanel"
            aria-labelledby={`stage-${active}`}
            tabIndex={0}
          >
            <h3>{stages[active].title}</h3>
            <p>{stages[active].text}</p>
          </div>
          <TextLink href="/boreholes">Explore borehole services</TextLink>
        </Reveal>
        <div className="water-image">
          {stages.map((s, i) => (
            <Photo
              key={s.image}
              name={s.image}
              alt={s.title}
              className={active === i ? "active" : ""}
            />
          ))}
          <div className="image-index">
            0{active + 1}
            <span>/ 03</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SolarShowcase() {
  return (
    <section className="section solar-showcase wrap">
      <Reveal className="solar-images">
        <Photo
          name="rooftop-solar-array"
          alt="Solar panels installed on a tiled roof"
        />
        <div className="solar-detail">
          <Photo
            name="solar-must-system"
            alt="Inverter connected to battery storage"
          />
          <span>Generation. Storage. Connection.</span>
        </div>
      </Reveal>
      <Reveal className="solar-copy">
        <Label>Solar & power</Label>
        <h2>
          A brighter way
          <br />
          <em>to power your world.</em>
        </h2>
        <p>
          Harness the sun with a system built around your actual energy needs.
          From solar panels to inverters and battery storage, we bring the
          components together.
        </p>
        <ul className="clean-list">
          <li>Solar installation & system upgrades</li>
          <li>Inverters, batteries & protection</li>
          <li>Repairs, testing & ongoing support</li>
        </ul>
        <Button href="/solar">Discover solar solutions</Button>
      </Reveal>
    </section>
  );
}
export function EquipmentPreview() {
  return (
    <section className="equipment-preview">
      <div className="wrap equipment-preview-grid">
        <Reveal>
          <Label>Equipment & supplies</Label>
          <h2>
            Every part
            <br />
            <em>has a purpose.</em>
          </h2>
          <p>
            From the pump to the panel. Source the components your project needs
            and discuss the right fit with our team.
          </p>
          <TextLink href="/equipment">Explore equipment</TextLink>
        </Reveal>
        <div className="equipment-lines">
          {[
            ["Solar panels, inverters & batteries", "Solar & power"],
            ["Pumps, pipes & water storage", "Water systems"],
            ["Controls, cables & accessories", "Installation essentials"],
          ].map(([name, type], i) => (
            <Link
              href={`/equipment?category=${encodeURIComponent(type === "Water systems" ? "Water & boreholes" : type)}`}
              key={name}
            >
              <small>
                0{i + 1} / {type}
              </small>
              <h3>{name}</h3>
              <ArrowUpRight />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export function WhyUs() {
  const [open, setOpen] = useState(0);
  const rows = [
    [
      "Practical field experience",
      "Hands-on borehole, water and solar installations for residential, agricultural and commercial sites.",
    ],
    [
      "One team, complete delivery",
      "Assessment, supply, installation, testing and after-installation support, with a clear point of contact.",
    ],
    [
      "Equipment with a purpose",
      "Solar panels, inverters, batteries, pumps and tanks selected around the needs of the project.",
    ],
    [
      "Support you can reach",
      "Speak directly to Light World by phone, email or WhatsApp before, during and after installation.",
    ],
  ];
  return (
    <section className="section wrap why-grid">
      <Reveal>
        <Label>The Light World approach</Label>
        <h2>
          Confidence in
          <br />
          <em>every connection.</em>
        </h2>
        <p>
          Practical thinking. Careful installation.
          <br />
          Support that stays within reach.
        </p>
        <Photo
          name="pump-water-flow"
          alt="Light World technician testing water flow at a borehole"
        />
      </Reveal>
      <div className="accordion">
        {rows.map(([title, text], i) => (
          <div key={title}>
            <button
              aria-expanded={open === i}
              aria-controls={`why-${i}`}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <small>0{i + 1}</small>
              <h3>{title}</h3>
              {open === i ? <Minus size={18} /> : <Plus size={18} />}
            </button>
            <div id={`why-${i}`} hidden={open !== i}>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export function Process() {
  return (
    <section className="process-section section">
      <div className="wrap">
        <Reveal className="section-heading">
          <div>
            <Label>How we work</Label>
            <h2>
              A clear way
              <br />
              <em>forward.</em>
            </h2>
          </div>
          <p>
            From the first conversation to the final connection.
            <br />A considered process around your project.
          </p>
        </Reveal>
        <div className="process-grid">
          {process.map(([title, text], i) => (
            <Reveal key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export function QuoteCTA() {
  return (
    <section className="quote-cta">
      <Photo name="water-tanks" alt="Water storage and solar installation" />
      <div className="wrap">
        <Label>Your next project</Label>
        <h2>
          Let’s put your
          <br />
          <em>plans in motion.</em>
        </h2>
        <p>
          A borehole, a solar system, or the equipment to connect it all.
          <br />
          Start with a conversation.
        </p>
        <div className="button-row">
          <Button>Request a quotation</Button>
          <a className="call-link" href={`tel:${company.phone}`}>
            077 169 8755 <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  label,
  title,
  accent,
  description,
  image,
}: {
  label: string;
  title: string;
  accent: string;
  description: string;
  image?: string;
}) {
  return (
    <section className={`page-hero ${image ? "with-image" : ""}`}>
      {image && <Photo name={image} alt={label} eager />}
      <div className="wrap">
        <Label>{label}</Label>
        <h1>
          {title}
          <br />
          <em>{accent}</em>
        </h1>
        <p>{description}</p>
      </div>
      <span className="page-hero-line" />
    </section>
  );
}
export function VideoReel() {
  const [active, setActive] = useState(0);
  const [play, setPlay] = useState(false);
  const clip = fieldVideos[active];
  return (
    <section className="video-reel wrap">
      <div className="video-title">
        <Label>From the field</Label>
        <h2>Real people. Real work.</h2>
      </div>
      <div className="video-library">
        <div>
          <div className="video-frame">
            {play ? (
              <video
                key={clip.src}
                src={clip.src}
                controls
                autoPlay
                playsInline
                preload="metadata"
                poster={`/media/${clip.poster}.webp`}
                aria-label={clip.title}
              />
            ) : (
              <>
                <Photo
                  className="video-poster"
                  name={clip.poster}
                  alt={clip.title}
                />
                <button
                  onClick={() => setPlay(true)}
                  aria-label={`Play ${clip.title}`}
                >
                  <Play fill="currentColor" />
                  <span>Watch field footage</span>
                </button>
              </>
            )}
          </div>
          <div className="video-active-title" aria-live="polite">
            <h3>{clip.title}</h3>
            <span>
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(fieldVideos.length).padStart(2, "0")}
            </span>
          </div>
        </div>
        <div
          className="video-selections"
          role="group"
          aria-label="Choose a field video"
        >
          {fieldVideos.map((video, i) => (
            <button
              key={video.src}
              className={active === i ? "selected" : ""}
              aria-pressed={active === i}
              onClick={() => {
                setActive(i);
                setPlay(true);
              }}
            >
              <Photo name={video.poster} alt="" />
              <span>
                <small>{video.category}</small>
                {video.title}
              </span>
              <Play size={14} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
      <p className="video-source-note">
        On-site footage from Light World Engineering. Choose a clip to watch the
        team at work.
      </p>
    </section>
  );
}

export function EquipmentCatalogue() {
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("category");
    if (q && equipment.some((e) => e.category === q)) setFilter(q);
  }, []);
  return (
    <section className="section wrap catalogue">
      <div className="section-heading">
        <div>
          <Label>Find your equipment</Label>
          <h2>
            Specified for
            <br />
            <em>your project.</em>
          </h2>
        </div>
        <p>
          Ask us about suitability, availability and a quotation.
          <br />
          System and supply photographs are shown for context.
        </p>
      </div>
      <div className="filters" aria-label="Filter equipment">
        {["All", ...Array.from(new Set(equipment.map((e) => e.category)))].map(
          (c) => (
            <button
              key={c}
              aria-pressed={filter === c}
              className={filter === c ? "selected" : ""}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ),
        )}
      </div>
      <div className="equipment-grid" aria-live="polite">
        {equipment
          .filter((e) => filter === "All" || e.category === filter)
          .map((e) => (
            <Reveal className="equipment-item" key={e.name}>
              <div className="equipment-image">
                <Photo
                  name={e.image}
                  alt={
                    e.context
                      ? `${e.name} — installation or supply context`
                      : e.name
                  }
                />
                <small>
                  {e.context
                    ? "Supply / installation context"
                    : "Original company photograph"}
                </small>
              </div>
              <small>{e.category}</small>
              <h3>{e.name}</h3>
              <p>{e.description}</p>
              <a
                className="text-link"
                href={whatsapp(
                  `Hello Light World Engineering, please advise on ${e.name.toLowerCase()}, suitability, availability and a quotation.`,
                )}
              >
                Enquire on WhatsApp <ArrowUpRight size={17} />
              </a>
            </Reveal>
          ))}
      </div>
    </section>
  );
}

export function QuoteForm() {
  const [selected, setSelected] = useState("");
  const [prepared, setPrepared] = useState("");
  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("service");
    if (s) setSelected(s);
  }, []);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Hello Light World Engineering, I would like a quotation.\n\nName: ${String(d.get("name")).trim()}\nPhone: ${String(d.get("phone")).trim()}\nEmail: ${d.get("email") || "Not provided"}\nService: ${d.get("service")}\nProject location: ${d.get("location")}\nProperty type: ${d.get("property") || "Not specified"}\nPreferred contact: ${d.get("preferred")}\n\nProject details:\n${String(d.get("details")).trim()}`;
    setPrepared(whatsapp(body));
  }
  return (
    <form
      className="quote-form"
      onSubmit={submit}
      onChange={() => setPrepared("")}
    >
      <div className="form-heading">
        <Label>Project enquiry</Label>
        <h2>
          Tell us what
          <br />
          <em>you have in mind.</em>
        </h2>
        <p>
          We’ll prepare your enquiry for WhatsApp. Review it there and send it
          directly to our team.
        </p>
      </div>
      <div className="form-grid">
        <label>
          Full name *
          <input name="name" autoComplete="name" required maxLength={120} />
        </label>
        <label>
          Phone number *
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            minLength={7}
            maxLength={30}
          />
        </label>
        <label>
          Email <span>(optional)</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={180}
          />
        </label>
        <label>
          Project location *<input name="location" required maxLength={200} />
        </label>
        <label className="wide">
          Service required *
          <select
            name="service"
            required
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Select a service</option>
            {quoteServices.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          Property type
          <select name="property">
            <option value="">Select if applicable</option>
            {["Residential", "Commercial", "Agricultural", "Institutional"].map(
              (s) => (
                <option key={s}>{s}</option>
              ),
            )}
          </select>
        </label>
        <label>
          Preferred contact
          <select name="preferred">
            {["WhatsApp", "Phone", "Email"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="wide">
          Project details *
          <textarea
            name="details"
            rows={4}
            required
            maxLength={3000}
            placeholder="Tell us about your site, requirements or existing system."
          />
        </label>
      </div>
      <label className="consent">
        <input type="checkbox" name="consent" required />I agree to be contacted
        about this enquiry.
      </label>
      <p className="form-note">
        Have photographs or documents? Attach them in WhatsApp before sending.
      </p>
      <button type="submit" className="button">
        Prepare WhatsApp enquiry <ArrowRight size={17} />
      </button>
      {prepared && (
        <div className="prepared" role="status">
          <h3>Your enquiry is ready.</h3>
          <p>
            Open WhatsApp to review and send your message. Your enquiry has not
            been sent yet.
          </p>
          <a
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            href={prepared}
          >
            Continue on WhatsApp <ArrowUpRight size={17} />
          </a>
        </div>
      )}
    </form>
  );
}
export function ContactDetails() {
  return (
    <div className="contact-details">
      <Label>A direct connection</Label>
      <h2>
        Let’s talk
        <br />
        <em>possibilities.</em>
      </h2>
      <div>
        <small>Call the team</small>
        <a href={`tel:${company.phone}`}>077 169 8755</a>
        <a href={`tel:${company.phone2}`}>078 211 0887</a>
      </div>
      <div>
        <small>Write to us</small>
        <a href={`mailto:${company.email}`}>{company.email}</a>
        <a href={`mailto:${company.email2}`}>{company.email2}</a>
      </div>
      <div>
        <small>Visit our office</small>
        <p>
          Office 7, First Floor
          <br />
          Chiedza House
          <br />
          Corner First Street and
          <br />
          Kwame Nkrumah Avenue
        </p>
        <a
          className="text-link"
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Find Chiedza House <ArrowUpRight size={17} />
        </a>
      </div>
      <a className="text-link" href={whatsapp()}>
        Prefer WhatsApp? Chat with us <MessageCircle size={18} />
      </a>
    </div>
  );
}
