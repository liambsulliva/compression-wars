// @ts-check
import { defineConfig } from "astro/config";
import deno from "@astrojs/deno";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: deno(),
});
