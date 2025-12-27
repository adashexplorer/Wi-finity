import { defineConfig } from "vite";
import path from "path";

export default defineConfig(async () => {
  const reactPlugin = (await import("@vitejs/plugin-react")).default;

  return {
    plugins: [
      reactPlugin({ jsxRuntime: "automatic" })
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@store": path.resolve(__dirname, "./src/store"),
      }
    },

    server: {
      port: 5173,
      open: true, // automatically opens the browser
    },

    build: {
      sourcemap: true,       // helpful in production debugging
      outDir: "dist",         // default
      chunkSizeWarningLimit: 1000, // large dashboards need this
    },
  };
});