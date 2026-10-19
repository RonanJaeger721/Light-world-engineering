export const company = {
  name: "Light World Engineering",
  phone: "+263771698755",
  phone2: "+263782110887",
  email: "lightworldengineering97@gmail.com",
  email2: "mushangiebryan@gmail.com",
  address:
    "Office 7, First Floor, Chiedza House, Corner First Street and Kwame Nkrumah Avenue",
  url: "https://light-world-engineering.vercel.app",
};
export const whatsapp = (
  message = "Hello Light World Engineering, I would like to discuss a borehole, solar or water project.",
) => `https://wa.me/263771698755?text=${encodeURIComponent(message)}`;
export const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["Equipment", "/equipment"],
  ["Contact", "/contact"],
];
export const services = [
  {
    name: "Borehole & water",
    tag: "Water, from the ground up.",
    description:
      "From the first site assessment to drilling, pump installation and water storage. A complete approach to reliable water access.",
    image: "drilling-rig",
    href: "/boreholes",
    items: [
      "Site surveys & assessments",
      "Borehole drilling",
      "Borehole installation",
      "Borehole deepening",
      "Borehole flushing",
      "Pump & submersible pump installation",
      "Water-system installation",
      "Pressure systems",
      "Water-storage solutions",
      "Borehole repairs",
      "Pipes, casing & equipment supply",
    ],
  },
  {
    name: "Solar & power",
    tag: "Make more of every sunrise.",
    description:
      "Solar systems shaped around the energy requirements of your home, farm or business. Assessment, supply, installation and support.",
    image: "rooftop-solar-array",
    href: "/solar",
    items: [
      "Energy assessment & system sizing",
      "Solar-system installation",
      "Solar repairs & maintenance",
      "System upgrades",
      "Solar-panel installation",
      "Hybrid-inverter installation",
      "Lithium-battery installation",
      "Wiring, distribution & protection",
      "Testing & commissioning",
    ],
  },
  {
    name: "Equipment & supply",
    tag: "The right parts. A complete solution.",
    description:
      "Pumps, storage, solar equipment and installation essentials. Talk to our team about the equipment your project needs.",
    image: "shop",
    href: "/equipment",
    items: [
      "Solar-equipment supply",
      "Borehole-equipment supply",
      "Pipes & casing",
      "Pumps & pressure tanks",
      "Water storage",
      "Cables, fittings & accessories",
      "Residential engineering solutions",
      "Commercial engineering solutions",
      "Agricultural engineering solutions",
    ],
  },
];
export const projects = [
  {
    title: "People behind the projects",
    category: "Client Handovers",
    image: "client-handover-group",
    images: ["client-handover-group", "client-handover", "project-team"],
    description: "Meetings, handshakes and moments with clients and the Light World Engineering team on site.",
  },
  {
    title: "Borehole drilling & casing",
    category: "Borehole Drilling",
    image: "branded-drilling-truck",
    images: [
      "branded-drilling-truck",
      "rig-sunset",
      "finished-casing",
      "drilling-rig-wide",
      "drilling-rig-on-site",
      "drilling-rig-casing",
      "drilling-rig",
    ],
    description:
      "Drilling rigs, on-site crews and borehole casing. A collection of the company’s field photographs.",
  },
  {
    title: "Rooftop solar installation",
    category: "Solar Installations",
    image: "rooftop-solar-array",
    images: [
      "rooftop-solar-array",
      "solar-roof-technician",
      "solar-installation-collage",
      "solar-panels",
    ],
    description:
      "Rooftop panels, installation work and panels prepared on site, shown in the supplied solar-work collection.",
  },
  {
    title: "Pump installation & water flow",
    category: "Borehole Installations",
    image: "pump-installation-team",
    images: [
      "pump-installation-team",
      "pump-installation-closeup",
      "pump-water-flow",
    ],
    description:
      "The crew working with a submersible pump, followed by water flowing at the borehole. Supplied photographs of pump installation and testing.",
  },
  {
    title: "Water storage & solar pumping",
    category: "Water Systems",
    image: "completed-tank-system",
    images: [
      "completed-tank-system",
      "completed-green-tank",
      "water-filtration-connections",
      "water-tanks",
      "elevated-water-tank",
      "water-system-testing",
      "water-storage-team",
      "water-storage-wide",
      "solar-water-pump-story",
    ],
    description:
      "A collection of elevated storage tanks, solar-powered water systems and the team working on water connections across different sites.",
  },
  {
    title: "Inverter & battery installations",
    category: "Solar Installations",
    image: "solar-must-battery",
    images: [
      "solar-must-battery",
      "solar-dual-battery",
      "solar-inverter-dark-battery",
      "solar-must-system",
      "inverter-battery",
    ],
    description:
      "Different inverter and battery installations from the supplied portfolio. Each photograph shows an actual installed arrangement; specifications depend on the project.",
  },
  {
    title: "Borehole flushing & servicing",
    category: "Borehole Services",
    image: "borehole-flushing",
    images: ["borehole-flushing", "borehole-service"],
    description:
      "Borehole servicing in the field, with the crew working at the casing and clearing discharge.",
  },
  {
    title: "Site surveys in the field",
    category: "Site Surveys",
    image: "survey-tree",
    images: [
      "survey-tree",
      "survey-tree-reading",
      "survey-woodland",
      "survey-woodland-setup",
      "survey-electrodes",
      "survey-open-field",
      "survey-tank-site",
      "survey-grassland",
      "site-survey",
      "survey-building",
      "survey-rig-site",
      "survey-residential",
      "survey-garden",
      "survey-garden-reading",
      "survey-courtyard",
      "survey-truck",
      "survey-streetside",
      "survey-streetside-reading",
      "survey-homestead",
      "survey-courtyard-team",
      "survey-homestead-reading",
      "survey-homestead-instrument",
      "geo-survey",
    ],
    description:
      "Site-assessment photographs from different locations, showing the team, survey instruments and electrode arrangements. These are field images rather than published client reports.",
  },
  {
    title: "Equipment & supply",
    category: "Equipment & Engineering",
    image: "blue-pipes",
    images: ["blue-pipes", "blue-pipes-closeup", "pressure-tanks", "shop"],
    description:
      "Pipes, pressure tanks and equipment photographs supplied by Light World Engineering. Contact the team for current suitability, availability and quotations.",
  },
];
export const equipment = [
  {
    name: "Solar panels",
    category: "Solar & power",
    image: "solar-panels",
    description:
      "Solar panels for residential, commercial and agricultural systems.",
  },
  {
    name: "Hybrid inverters",
    category: "Solar & power",
    image: "solar-inverter-dark-battery",
    description: "Inverters for solar, battery and grid integration.",
  },
  {
    name: "Lithium batteries",
    category: "Solar & power",
    image: "solar-must-battery",
    description: "Battery storage for solar systems and backup power.",
  },
  {
    name: "Borehole pumps",
    category: "Water & boreholes",
    image: "pump-installation-team",
    description:
      "Submersible and surface pumps for borehole and water systems.",
    context: true,
  },
  {
    name: "Pipes & casing",
    category: "Water & boreholes",
    image: "blue-pipes",
    description: "Pipes and casing for borehole, water and pressure systems.",
    context: true,
  },
  {
    name: "Pressure tanks",
    category: "Water & boreholes",
    image: "pressure-tanks",
    description: "Pressure tanks for water-system installations.",
  },
  {
    name: "Water tanks",
    category: "Water & boreholes",
    image: "water-tanks",
    description: "Water storage for homes, farms and commercial properties.",
  },
  {
    name: "Control equipment",
    category: "Installation essentials",
    image: "shop",
    description: "Protection, control and monitoring equipment.",
    context: true,
  },
  {
    name: "Cables & accessories",
    category: "Installation essentials",
    image: "shop",
    description:
      "Cables, fittings and the essentials for a complete installation.",
    context: true,
  },
];
export const process = [
  [
    "Consultation",
    "Tell us about your site, your needs and what you want to achieve.",
  ],
  [
    "Site assessment",
    "Understand the location, technical requirements and scope.",
  ],
  [
    "Recommendation",
    "A suitable solution and equipment specification for your project.",
  ],
  ["Quotation", "An itemised quotation based on the agreed scope."],
  [
    "Installation",
    "Equipment supply and professional installation by the team.",
  ],
  [
    "Testing & handover",
    "System testing, commissioning and practical handover.",
  ],
];
export const quoteServices = [
  "Site survey",
  "Borehole drilling",
  "Borehole installation",
  "Borehole deepening",
  "Borehole flushing",
  "Pump installation",
  "Solar installation",
  "Solar repairs",
  "Solar upgrade",
  "Water systems",
  "Equipment supply",
  "Other",
];

export const fieldVideos = [
  { title: "Clients and crew on site", category: "Client Handovers", src: "/media/updated-field-1.mp4", poster: "updated-field-1-poster" },
  { title: "Water flowing at the borehole", category: "Borehole Drilling", src: "/media/updated-field-2.mp4", poster: "updated-field-2-poster" },
  { title: "Drilling in progress", category: "Borehole Drilling", src: "/media/updated-field-3.mp4", poster: "updated-field-3-poster" },
  { title: "Solar installation in progress", category: "Solar Installations", src: "/media/updated-field-4.mp4", poster: "updated-field-4-poster" },
  { title: "Meeting clients at the rig", category: "Client Handovers", src: "/media/updated-field-5.mp4", poster: "updated-field-5-poster" },
  { title: "A handshake on site", category: "Client Handovers", src: "/media/updated-field-6.mp4", poster: "updated-field-6-poster" },
  {
    title: "Borehole rig at work",
    category: "Borehole drilling",
    src: "/media/project-video.mp4",
    poster: "field-video-4-poster",
  },
  {
    title: "Drilling in progress",
    category: "Borehole drilling",
    src: "/media/field-video-1.mp4",
    poster: "field-video-1-poster",
  },
  {
    title: "Borehole fieldwork",
    category: "Borehole drilling",
    src: "/media/field-video-2.mp4",
    poster: "field-video-2-poster",
  },
  {
    title: "Drilling site overview",
    category: "Borehole drilling",
    src: "/media/field-video-3.mp4",
    poster: "field-video-3-poster",
  },
  {
    title: "Solar installation walkthrough",
    category: "Solar installation",
    src: "/media/field-video-5.mp4",
    poster: "field-video-5-poster",
  },
  {
    title: "Inverter & battery detail",
    category: "Solar installation",
    src: "/media/field-video-6.mp4",
    poster: "field-video-6-poster",
  },
  {
    title: "Solar control system",
    category: "Solar installation",
    src: "/media/field-video-7.mp4",
    poster: "field-video-7-poster",
  },
];
