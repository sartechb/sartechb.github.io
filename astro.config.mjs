import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.sarthakb.com",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
