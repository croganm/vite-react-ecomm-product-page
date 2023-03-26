import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svgr(), react()],
	resolve: {
		alias: {
			"@": `${path.resolve(__dirname, "./src/")}`,
			components: `${path.resolve(__dirname, "./src/components/")}`,
			hooks: `${path.resolve(__dirname, "./src/hooks/")}`,
			images: `${path.resolve(__dirname, "./src/assets/images/")}`,
		},
	},
	build: {
		target: "es2022",
	},
});
