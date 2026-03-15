import type { MetadataRoute } from "next";

const routes = ["", "/about", "/services", "/portfolio", "/why-us", "/contact", "/studio", "/testimonials", "/faq", "/careers", "/book", "/artists", "/releases", "/gallery", "/blog", "/press", "/pricing"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://echoframe.studio${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
