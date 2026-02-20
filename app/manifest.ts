import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Madrich UI",
    short_name: "Madrich UI",
    description: "The neo-brutalist UI library for developers who build bold.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F4F0",
    theme_color: "#ae7aff",
    icons: [
      {
        src: "/image/fav2.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
  