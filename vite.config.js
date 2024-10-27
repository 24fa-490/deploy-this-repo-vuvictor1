import mkcert from "vite-plugin-mkcert"
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';


export default defineConfig({
	plugins: [sveltekit(),
		mkcert()
	],
	server: {
		host: '0.0.0.0', 
		port: process.env.PORT || 5173, 
		https: process.env.NODE_ENV === 'development', 
		proxy: {}, // essential to avoid "can't use Symbol where you need a string" error
	},
})
