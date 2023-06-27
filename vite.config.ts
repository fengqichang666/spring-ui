import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {
		// Listening on all local IPs
		host: true,
		// Load proxy configuration from .env
		proxy: {
			'/api': {
				target: 'http://localhost:8888',
				changeOrigin: true, // 允许跨域
				ws: true, // 允许websocket代理
				rewrite: path => path.replace(/^\/api/, '')
			}
		}
	}
})
