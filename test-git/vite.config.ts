import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

console.log(
  "🧪 VITE_SECRET_KEY_NEW_TEST_KEY in vite.config.ts:",
  process.env.VITE_SECRET_KEY_NEW_TEST_KEY
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env.VITE_SECRET_KEY_NEW_TEST_KEY": JSON.stringify(
      process.env.VITE_SECRET_KEY_NEW_TEST_KEY
    ),
  },
});
