import { MetadataRoute } from "next";
import { artists, equipment } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tourmedia.pro";

  // ── Static Routes ──
  const staticPaths = ["", "/about", "/artists", "/equipment", "/contact"];
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

  // ── Dynamic Equipment Pages ──
  const equipmentRoutes = equipment.map((item) => ({
    url: `${baseUrl}/equipment/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...artistRoutes, ...equipmentRoutes];
}
