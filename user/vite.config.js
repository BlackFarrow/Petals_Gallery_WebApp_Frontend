import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// No Tailwind plugin needed here
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
  ],
});
