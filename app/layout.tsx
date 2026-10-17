import type { Metadata } from "next";
import { Navbar, Footer, WhatsApp } from "@/components/site";
import { company } from "@/lib/content";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Light World Engineering | Borehole, Solar & Water Solutions",
    template: "%s | Light World Engineering",
  },
  description:
    "Borehole drilling, installations, solar systems, water pumps and engineering equipment in Zimbabwe. Speak to Light World Engineering about your project.",
  openGraph: {
    type: "website",
    siteName: company.name,
    images: [
      {
        url: "/media/drilling-rig.webp",
        width: 1280,
        height: 960,
        alt: "Light World Engineering drilling rig on site",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.png" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/manrope-500.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/dm-sans-400.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <noscript><style>{`.reveal,.hero-copy>div{opacity:1!important;transform:none!important}`}</style></noscript>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsApp />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: company.name,
              url: company.url,
              image: company.url + "/media/logo-light.png",
              telephone: [company.phone, company.phone2],
              email: [company.email, company.email2],
              address: {
                "@type": "PostalAddress",
                streetAddress: company.address,
                addressCountry: "ZW",
              },
              areaServed: "Zimbabwe",
              description:
                "Borehole, water and solar solutions, equipment supply, installation and maintenance.",
            }),
          }}
        />
      </body>
    </html>
  );
}
