import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/test-assigment-17-04/",
  envDir: "./env",
  server: {
    host: "127.0.0.1",
    port: 3000,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
