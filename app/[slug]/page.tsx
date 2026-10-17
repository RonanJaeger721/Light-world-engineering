import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Button,
  ContactDetails,
  CoreServices,
  EquipmentCatalogue,
  Gallery,
  Intro,
  Label,
  PageHero,
  Photo,
  Process,
  QuoteCTA,
  QuoteForm,
  Reveal,
  SolarShowcase,
  TextLink,
  VideoReel,
  WhyUs,
} from "@/components/site";
import { services, company } from "@/lib/content";
const pages: Record<
  string,
  {
    title: string;
    label: string;
    heading: string;
    accent: string;
    description: string;
    image?: string;
  }
> = {
  about: {
    title: "About",
    label: "Meet Light World",
    heading: "Practical thinking.",
    accent: "Lasting connections.",
    description:
      "Borehole, water and solar solutions for homes, farms, businesses and institutions across Zimbabwe.",
    image: "site-survey",
  },
  services: {
    title: "Engineering Services",
    label: "Our expertise",
    heading: "Water. Power.",
    accent: "Possibility.",
    description:
      "Assessment, equipment supply, installation, testing and support. One team for every stage of your project.",
    image: "drilling-rig",
  },
  boreholes: {
    title: "Borehole Drilling & Water Services",
    label: "Borehole engineering",
    heading: "Below the surface.",
    accent: "Beyond the everyday.",
    description:
      "Complete borehole and water solutions, from site assessment to pumps, piping and storage.",
    image: "drilling-rig",
  },
  solar: {
    title: "Solar Installations & Repairs",
    label: "Solar & power",
    heading: "Good energy.",
    accent: "Expertly connected.",
    description:
      "Solar installations, inverters, battery systems and repairs, shaped around your energy requirements.",
    image: "solar-panels",
  },
  projects: {
    title: "Projects & Field Gallery",
    label: "The Light World portfolio",
    heading: "Real work.",
    accent: "A closer look.",
    description:
      "Original photographs of our drilling equipment, solar installations, water systems and work in the field.",
  },
  equipment: {
    title: "Equipment & Supplies",
    label: "Equipment & supplies",
    heading: "Every component.",
    accent: "One complete system.",
    description:
      "Solar panels, inverters, batteries, pumps, pipes, tanks and accessories. Enquire about the right equipment for your project.",
    image: "shop",
  },
  contact: {
    title: "Contact",
    label: "Contact Light World",
    heading: "Your project.",
    accent: "Our next conversation.",
    description:
      "Reach the team by phone, email or WhatsApp. Visit our Chiedza House office or prepare a project enquiry.",
  },
  quote: {
    title: "Request a Quotation",
    label: "Start something worthwhile",
    heading: "From an idea.",
    accent: "To a practical plan.",
    description:
      "Tell us about your site and requirements. Prepare a quotation enquiry and send it directly to Light World on WhatsApp.",
  },
  privacy: {
    title: "Privacy",
    label: "Your information",
    heading: "A clear approach.",
    accent: "To your privacy.",
    description: "How this website handles your enquiry information.",
  },
  terms: {
    title: "Website Terms",
    label: "Website information",
    heading: "A useful starting point.",
    accent: "For your project.",
    description:
      "Information about using this website and requesting services.",
  },
};
export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = pages[slug];
  return p
    ? {
        title: p.title,
        description: p.description,
        alternates: { canonical: `/${slug}/` },
        openGraph: {
          title: `${p.title} | Light World Engineering`,
          description: p.description,
          url: `/${slug}/`,
          images: [
            {
              url: "/media/drilling-rig.webp",
              width: 1280,
              height: 960,
              alt: "Light World Engineering drilling rig on site",
            },
          ],
        },
      }
    : {};
}
function ServiceDetail({ solar = false }: { solar?: boolean }) {
  const s = services[solar ? 1 : 0];
  return (
    <>
      <section className="section wrap service-detail">
        <Reveal className="service-detail-intro">
          <Label>{solar ? "Scope of work" : "Complete water access"}</Label>
          <h2>
            {solar ? "Designed around" : "From assessment"}
            <br />
            <em>{solar ? "your energy needs." : "to the first flow."}</em>
          </h2>
          <p>
            {solar
              ? "We recommend and install solar panels, hybrid inverters, lithium batteries and the supporting protection and wiring, then test and hand over the system."
              : "Borehole work starts with understanding your site. Light World brings surveys, drilling, installation and the equipment needed for a practical water system together."}
          </p>
          <Button
            href={`/quote?service=${encodeURIComponent(solar ? "Solar installation" : "Borehole drilling")}`}
          >
            Discuss your project
          </Button>
        </Reveal>
        <div className="capability-list">
          {s.items.map((item, i) => (
            <Reveal key={item}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </Reveal>
          ))}
        </div>
      </section>
      {solar ? (
        <SolarShowcase />
      ) : (
        <section className="detail-banner">
          <Photo
            name="water-tanks"
            alt="Solar-powered water system with elevated storage tanks"
          />
          <div className="wrap">
            <Label>The complete connection</Label>
            <h2>
              More than drilling.
              <br />
              <em>A water system.</em>
            </h2>
            <p>
              Pumps, pipes, water storage and pressure systems — designed to
              work together.
            </p>
            <TextLink href="/equipment">Explore water equipment</TextLink>
          </div>
        </section>
      )}
      <Process />
      <section className="section wrap faq">
        <Label>Helpful answers</Label>
        <h2>Before we begin.</h2>
        {(solar
          ? [
              [
                "How is a solar system specified?",
                "The team assesses your energy requirements before recommending panels, an inverter, battery storage and protection.",
              ],
              [
                "Can you repair or upgrade a system?",
                "Yes. Light World provides solar-system repairs, maintenance and upgrades. Share details of your current system so the team can assess it.",
              ],
              [
                "Do you supply solar equipment?",
                "Yes. Solar panels, hybrid inverters, lithium batteries and supporting accessories are represented in our equipment catalogue. Ask for current availability.",
              ],
            ]
          : [
              [
                "How does a borehole project begin?",
                "Start with an enquiry. A site assessment helps establish the project scope and suitable equipment.",
              ],
              [
                "Can you assess an existing borehole for deepening?",
                "Yes. Suitability for deepening depends on site conditions and requires an assessment.",
              ],
              [
                "Can you install pumps and piping?",
                "Yes. Light World installs borehole and submersible pumps, piping, water storage and pressure systems.",
              ],
              [
                "Do you service and repair borehole systems?",
                "Yes. The team provides diagnosis, borehole flushing, servicing and repairs for existing borehole and water systems.",
              ],
            ]
        ).map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span>+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
      <QuoteCTA />
    </>
  );
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = pages[slug];
  if (!p) notFound();
  return (
    <>
      <PageHero
        label={p.label}
        title={p.heading}
        accent={p.accent}
        description={p.description}
        image={p.image}
      />
      {slug === "about" && (
        <>
          <Intro />
          <section className="about-statement">
            <div className="wrap">
              <Label>Our purpose</Label>
              <h2>
                Deliver reliable water and dependable power through{" "}
                <em>practical engineering.</em>
              </h2>
              <div className="about-values">
                <div>
                  <small>Our approach</small>
                  <p>
                    Assessment-led planning, quality equipment and professional
                    installation.
                  </p>
                </div>
                <div>
                  <small>Our capabilities</small>
                  <p>
                    Boreholes, pumps, solar, inverters, batteries, storage and
                    control.
                  </p>
                </div>
                <div>
                  <small>Our support</small>
                  <p>
                    Reachable before, during and after installation. A direct
                    connection to our team.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <WhyUs />
          <Process />
          <QuoteCTA />
        </>
      )}
      {slug === "services" && (
        <>
          <CoreServices />
          <section className="section wrap all-services">
            {services.map((s, i) => (
              <Reveal key={s.name} className="service-directory">
                <div>
                  <small>0{i + 1} / Engineering solutions</small>
                  <h2>{s.name}</h2>
                  <p>{s.description}</p>
                  <TextLink href={s.href}>
                    Explore {s.name.toLowerCase()}
                  </TextLink>
                </div>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </section>
          <Process />
          <QuoteCTA />
        </>
      )}
      {slug === "boreholes" && <ServiceDetail />}
      {slug === "solar" && <ServiceDetail solar />}
      {slug === "projects" && (
        <>
          <section className="section wrap portfolio">
            <div className="portfolio-intro">
              <Label>Original company imagery</Label>
              <p>
                Explore by category. Select a photograph to view it fullscreen
                and learn more. Use the arrow keys or swipe to move through the
                gallery.
              </p>
            </div>
            <Gallery />
          </section>
          <VideoReel />
          <QuoteCTA />
        </>
      )}
      {slug === "equipment" && (
        <>
          <EquipmentCatalogue />
          <QuoteCTA />
        </>
      )}
      {(slug === "contact" || slug === "quote") && (
        <section className="section wrap contact-grid">
          <ContactDetails />
          <QuoteForm />
        </section>
      )}
      {slug === "privacy" && (
        <section className="section wrap legal">
          <h2>Enquiries through WhatsApp</h2>
          <p>
            The quotation form prepares a message in your browser. It does not
            send your details to a website database. You decide whether to open
            WhatsApp and send the message to Light World Engineering.
          </p>
          <p>
            When you send an enquiry, the team receives the information you
            include so they can discuss your project. WhatsApp and email
            services handle messages under their own privacy terms.
          </p>
          <h2>Information you provide</h2>
          <p>
            Only provide information needed to discuss your project. You can
            contact <a href={`mailto:${company.email}`}>{company.email}</a> to
            ask about information you have shared with the business.
          </p>
          <h2>Website services</h2>
          <p>
            The website is hosted on Vercel. Hosting providers may process
            technical request information needed to deliver the site. This
            website does not set marketing cookies or include advertising
            trackers.
          </p>
        </section>
      )}
      {slug === "terms" && (
        <section className="section wrap legal">
          <h2>Planning your project</h2>
          <p>
            Website information is a starting point for an enquiry. Suitability,
            equipment, scope, timing, availability and pricing must be confirmed
            directly with Light World Engineering in a project quotation.
          </p>
          <h2>Equipment and photographs</h2>
          <p>
            Original company photographs show work, installations and equipment.
            Shared system photographs provide context and do not imply that
            every component is individually available or currently in stock.
          </p>
          <h2>Quotations</h2>
          <p>
            Preparing or sending a WhatsApp enquiry does not create a booking or
            contract. Agree project details and commercial terms with the
            company before work begins.
          </p>
          <h2>Contact</h2>
          <p>
            For questions, call{" "}
            <a href={`tel:${company.phone}`}>077 169 8755</a> or email{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </section>
      )}
    </>
  );
}
