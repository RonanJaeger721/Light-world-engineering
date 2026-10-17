import { company } from "@/lib/content";
export const dynamic = "force-static";
export default function sitemap() {
  return [
    "",
    "about",
    "services",
    "boreholes",
    "solar",
    "projects",
    "equipment",
    "contact",
    "quote",
    "privacy",
    "terms",
  ].map((p) => ({
    url: `${company.url}/${p ? p + "/" : ""}`,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
}
