import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@theme": path.resolve(__dirname, "./src/theme/index"),
      "@store": path.resolve(__dirname, "./src/store/index"),
      "@slices": path.resolve(__dirname, "./src/store//slices/index"),
      "@atoms": path.resolve(__dirname, "./src/components/atoms/index"),
      "@molecules": path.resolve(__dirname, "./src/components/molecules/index"),
      "@organisms": path.resolve(__dirname, "./src/components/organisms/index"),
      "@pages": path.resolve(__dirname, "./src/components/pages/index"),
      "@templates": path.resolve(__dirname, "./src/components/templates/index"),
      "@animated": path.resolve(__dirname, "./src/components/animated/index"),
      "@layout": path.resolve(__dirname, "./src/layout/index"),
    },
  },
});
