import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import php from "vite-plugin-php";

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://www.barlowresearch.com/mybarlow/testdrive2024/",
	plugins: [react(), php()],
});
