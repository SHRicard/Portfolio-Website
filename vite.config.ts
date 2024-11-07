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
    },
  },
});
