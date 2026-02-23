import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BrutalCN",
    short_name: "BrutalCN",
    description: "The neo-brutalist UI library for developers who build bold.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F4F0",
    theme_color: "#ae7aff",
    icons: [
      {
        src: "/image/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/image/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
