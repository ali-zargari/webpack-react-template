import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  eslintConfigPrettier,
  build: {
    outDir: './dist',
    rollupOptions: {
      input: './index.html'
    }
  }
});
