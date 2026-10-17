import {
  Hero,
  Intro,
  CoreServices,
  FeaturedProjects,
  SolutionsShowcase,
  SolarShowcase,
  EquipmentPreview,
  WhyUs,
  Process,
  QuoteCTA,
  VideoReel,
} from "@/components/site";
export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <CoreServices />
      <FeaturedProjects />
      <SolutionsShowcase />
      <SolarShowcase />
      <EquipmentPreview />
      <WhyUs />
      <VideoReel />
      <Process />
      <QuoteCTA />
    </>
  );
}
