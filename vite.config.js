import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio-site/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "images",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (
            assetInfo.name.endsWith(".png") ||
            assetInfo.name.endsWith(".jpg") ||
            assetInfo.name.endsWith(".jpeg")
          ) {
            return "images/[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  publicDir: "public",
});
