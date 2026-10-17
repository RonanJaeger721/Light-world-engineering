# Light World Engineering

Premium company website built with Next.js App Router, TypeScript, Tailwind CSS and Motion. Exports static pages for Vercel; no backend or secret is required.

## Development

```sh
npm ci
npm run dev
npm run build
```

`npm run build` produces `out/`. Do not run the development server and production build concurrently against the same `.next` directory.

## Content and maintenance

- `lib/content.ts`: verified business information, services, portfolio entries, equipment and enquiry options.
- `components/site.tsx`: shared navigation, page sections, galleries and enquiry interactions.
- `app/[slug]/page.tsx`: About, Services, Boreholes, Solar, Projects, Equipment, Contact, Quote, Privacy and Terms.
- `app/globals.css`: visual system, breakpoints and reduced-motion styles.
- `public/media/`: original company media and optimized WebP derivatives. The logo was extracted from the supplied live-site flyer; the worker image from that flyer is not used.
- `public/fonts/`: locally hosted DM Sans and Manrope, with their licences.

The quotation form validates required fields, prepares a contextual WhatsApp message, and lets the visitor review and send it. It does not claim delivery, create a booking or save information to a database. Photos and documents can be attached in WhatsApp.

## Source audit, 17 October 2026

The supplied GitHub repository was empty on clone. The original public site was inspected at https://light-world-powers.lovable.app/ including all eight business subpages. Nine original JPEG images and the original MP4 were retrieved from its public assets. The existing logo was embedded in a promotional flyer and was extracted into light- and dark-background assets.

The phone numbers, emails, office address, service categories and equipment types match that live source. Existing `/about`, `/services`, `/boreholes`, `/solar`, `/projects`, `/equipment`, `/contact` and `/quote` destinations are retained. Placeholder social destinations, opening hours and map placeholders were replaced with working contact paths or omitted. No project location, client, date, depth, performance guarantee or commercial availability was added.

Shared installation or shop photographs are explicitly described as context where a dedicated product photograph is unavailable. Gallery labels describe the actual subjects, without inferring that ungrouped photographs belong to one project.

## Creative direction

Brand character: capable, grounded and approachable. The genuine drilling rig is the primary subject; typography and quiet navy/gold colour carry the technical identity. The actual logo's yellow is refined rather than replaced by an unrelated palette.

Three hero approaches were evaluated:

1. Full-width drilling scene, with a left-aligned editorial headline and controlled photo drift. Chosen for immediate comprehension, authentic machinery and clear enquiry paths; mobile uses a closer crop and independent type scale.
2. Full-width video introduction. Kept as an optional field reel instead because the still photograph provides a faster, readable first frame and the video is not required to understand the business.
3. Split water-and-power composition. Used later in the story because a dual-image opening diluted the drilling subject and offered less room for mobile copy.

Prominent methods: ST-05 cinematic opening, ST-01 editorial image composition and ST-08 contextual conversion. The signature service explorer connects assessment, drilling and water storage through coordinated image/text changes. Reversible scroll reveals, restrained hero parallax and subtle image zoom provide supporting motion. Reduced motion retains content and native scrolling. No fabricated 3D, statistics or testimonials.

SmartView was inspected for floating navigation, large imagery, section rhythm, layered photo/text compositions, restrained labels and footer density. Its branding, company facts and exact page structure were not copied.

## Hosting

Vercel project: `light-world-engineering`, under `ronannyaks92-9747s-projects`. `lib/content.ts` holds the canonical production origin. If a custom domain is added later, update that origin and rebuild so canonical links, sitemap and structured data agree.

Secrets, Vercel project state, dependency directories and generated exports are excluded from Git.
