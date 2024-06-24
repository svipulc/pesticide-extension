import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: resolve(__dirname, "src/static"),
          dest: "",
        },
      ],
    }),
    // createHtmlPlugin({
    //   pages: [
    //     {
    //       filename: "popup.html",
    //       template: "src/popup/popup.html",
    //       injectOptions: {
    //         data: {
    //           injectScript: `<script type="module" src="/popup.js"></script>`,
    //         },
    //       },
    //     },
    //     {
    //       filename: "options.html",
    //       template: "src/options/options.html",
    //       injectOptions: {
    //         data: {
    //           injectScript: `<script type="module" src="/options.js"></script>`,
    //         },
    //       },
    //     },
    //   ],
    // }),
  ],
  build: {
    rollupOptions: {
      input: {
        // popup: resolve(__dirname, "src/popup/popup.tsx"),
        // options: resolve(__dirname, "src/options/options.tsx"),
        background: resolve(__dirname, "src/background/background.ts"),
        content: resolve(__dirname, "src/content/content-script.ts"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].[hash].js",
        assetFileNames: "[name].[ext]",
      },
    },
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
    extensions: [".tsx", ".ts", ".js"],
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "./src/styles/global.css";`,
      },
    },
  },
});
