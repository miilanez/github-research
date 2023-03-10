import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
/*Other imports*/
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    /*something*/
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
