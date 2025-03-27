import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import libInjectCss from "vite-plugin-libcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/components", "src/index.ts"],
      exclude: ["src/App.tsx", "src/main.tsx"],
    }),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "CLReactUI",
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.ts"),
        Button: resolve(__dirname, "src/components/Button/index.ts"),
        Heading: resolve(__dirname, "src/components/Heading/index.ts"),
      },
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        entryFileNames: "[name].[format].js",
        chunkFileNames: "chunks/[name].[format].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
    cssCodeSplit: true,
  },
});
