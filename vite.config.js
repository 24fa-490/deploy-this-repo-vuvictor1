import mkcert from "vite-plugin-mkcert";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		mkcert()
	],
	server: {
		https: true, 
		host: '0.0.0.0', 
		port: process.env.PORT || 5173,  
		proxy: {},  
	},
});
