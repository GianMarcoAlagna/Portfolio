import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // Disable asset size limit
  },
  optimizeDeps: {
    include: ["**/*.svg"], // Ensure SVG files are included in dependency optimization
  },
});
