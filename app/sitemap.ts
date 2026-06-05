import { MetadataRoute } from "next";
import { artists } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tour-media-alpha.vercel.app";

  // ── Static Routes ──
  const staticPaths = ["", "/about", "/artists", "/contact"];
  const staticRoutes = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  // ── Dynamic Artist Pages ──
  const artistRoutes = artists.map((artist) => ({
    url: `${baseUrl}/artists/${artist.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...artistRoutes];
}
