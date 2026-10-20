import type { MetadataRoute } from "next";
import { company } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: company.shortName,
    description: company.description,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#155fd6",
    icons: [{ src: "/images/koken-logo.png", sizes: "2481x2175", type: "image/png" }],
  };
}
