import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JT Labs",
    short_name: "JT Labs",
    description: "E-commerce, delivery y desarrollo web para negocios.",
    start_url: "/",
    display: "standalone",
    background_color: "#071326",
    theme_color: "#071326",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
