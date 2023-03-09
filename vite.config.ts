import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// const resolveAlias = Object.fromEntries(
//   Object.entries({
//     '@components': './src/components',
//     '@composable': './src/composable',
//     '@cstore': './src/composable/store',
//     '@directive': './src/directive',
//     '@pages': './src/pages',
//     '@api': './src/api',
//     '@plugins': './src/plugins',
//     '@router': './src/router',
//     '@stores': './src/stores',
//     '@postcss': './src/assets/postcss',
//     '@utils': './src/utils',
//   }).map(([key, value]) => [key, path.resolve(__dirname, value)])
// );

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, path.join(__dirname, "./env"), "");

    return {
        plugins: [react()],
        envDir: path.join(__dirname, "./env"),
        resolve: {
            // alias: resolveAlias,
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "@components": path.resolve(__dirname, "./src/components"),
                "@utils": path.resolve(__dirname, "./src/utils"),
                "@aframe": path.resolve(__dirname, "./src/aframe"),
            },
        },
    };
});
