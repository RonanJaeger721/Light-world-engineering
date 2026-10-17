# Validation — 17 October 2026

The production export was tested locally before publication.

- Production build: passed, 16 generated framework pages (including metadata and error routes).
- Dependency audit: zero vulnerabilities after updating the PostCSS override.
- Homepage: rendered at 320, 360, 375, 390, 430, 768, 1024, 1366, 1440 and 1920 pixels.
- Every business, quotation and policy route: HTTP 200, single H1, no horizontal overflow and no broken loaded images at 390, 768 and 1440 pixels.
- Desktop and mobile visual inspection: hero, introduction, services, projects, service explorer, catalogue, form and footer.
- Navbar: hides on a one-pixel downward move and returns on a one-pixel upward move after the top threshold. Mobile menu opens, navigates and closes; menu state prevents navbar hiding.
- Borehole explorer: image, stage label, description and selected state update together.
- Projects: category filters, fullscreen lightbox, previous/next buttons, arrow keys, Escape and touch swipe.
- Equipment: filters, category query links and item-specific WhatsApp enquiry text.
- Quotation: required-field validation, service preselection, name/phone/location/details encoding and correct WhatsApp recipient. The handoff was inspected without sending a message.
- Both phone numbers and both email link destinations match the original public site.
- Original MP4 playback advances correctly.
- Reveals appear on forward and reverse scroll. Reduced motion retains visible information; no-JavaScript styles keep the editorial content readable.
- Browser interaction run: no page JavaScript errors.

A navigation test initially asserted the URL before client navigation completed; waiting for the destination resolved the test. A concurrent development/build cache issue was avoided by testing the isolated production export.

No live WhatsApp message was sent, no invented submission backend is present, and no physical-device or formal Core Web Vitals certification is claimed.

Production: https://light-world-engineering.vercel.app — published on 17 October 2026. All 11 content routes, robots.txt, sitemap.xml, sampled WebP/logo/font assets and the original MP4 returned HTTP 200. The rendered public homepage was inspected in the browser. Vercel is configured as static hosting for the Next.js export; the initial server-manifest mismatch was corrected before publication.
