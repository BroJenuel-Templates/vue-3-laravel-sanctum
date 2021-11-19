import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: './../public/app'
    },
    base: "/app/",
    plugins: [vue()],
});
