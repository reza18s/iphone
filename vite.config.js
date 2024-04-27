import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), sentryVitePlugin({
    org: "jam-69",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
});