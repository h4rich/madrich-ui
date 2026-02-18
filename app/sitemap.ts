import { MetadataRoute } from "next";

// Manually defined list of components to avoid importing heavy UI files
const components = [
  "accordion",
  "alert-dialog",
  "avatar",
  "button",
  "checkbox",
  "image-card",
  "input",
  "profile-selector",
  "progress",
  "select",
  "switch",
  "textarea",
  "tooltip-card",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const componentRoutes = components.map((slug) => ({
    url: `https://madrich-ui.vercel.app/components/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://madrich-ui.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://madrich-ui.vercel.app/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://madrich-ui.vercel.app/term-condition",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://madrich-ui.vercel.app/components",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...componentRoutes,
  ];
}
