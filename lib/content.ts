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
    image: "solar-panels",
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
    title: "Borehole drilling & casing",
    category: "Borehole Drilling",
    image: "drilling-rig",
    description:
      "The drilling rig and casing on site. Part of Light World Engineering’s borehole services, from assessment through to installation.",
  },
  {
    title: "Solar panels on site",
    category: "Solar Installations",
    image: "solar-panels",
    description:
      "Solar panels photographed at a residential site. Panels form one part of an assessed and specified solar system.",
  },
  {
    title: "Inverter & battery installation",
    category: "Solar Installations",
    image: "inverter-battery",
    description:
      "A wall-mounted inverter and battery installation, photographed as part of the original Light World Engineering portfolio.",
  },
  {
    title: "Water storage & solar pumping",
    category: "Water Systems",
    image: "water-tanks",
    description:
      "Elevated water storage with solar panels: water and power working together in a single installation.",
  },
  {
    title: "Site assessment in the field",
    category: "Equipment & Engineering",
    image: "site-survey",
    description:
      "Site assessment is the starting point for understanding the location and planning a suitable solution.",
  },
  {
    title: "Pressure tanks & equipment",
    category: "Equipment & Engineering",
    image: "pressure-tanks",
    description:
      "Pressure-system equipment shown in the original company gallery. Contact the team for current options and availability.",
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
    image: "inverter-battery",
    description: "Inverters for solar, battery and grid integration.",
  },
  {
    name: "Lithium batteries",
    category: "Solar & power",
    image: "inverter-battery",
    description: "Battery storage for solar systems and backup power.",
  },
  {
    name: "Borehole pumps",
    category: "Water & boreholes",
    image: "water-tanks",
    description:
      "Submersible and surface pumps for borehole and water systems.",
    context: true,
  },
  {
    name: "Pipes & casing",
    category: "Water & boreholes",
    image: "shop",
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
