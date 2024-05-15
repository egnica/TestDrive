import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://www.barlowresearch.com/mybarlow/TestDrive_Demo_2024/",
	plugins: [react()],
});
