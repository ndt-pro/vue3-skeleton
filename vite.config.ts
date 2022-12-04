import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: './vue3-skeleton/main.js',
			name: 'Vue3-Skeleton',
			fileName: 'vue3-skeleton',
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				// Provide global variables to use in the UMD build
				// Add external deps here
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
	plugins: [vue()],
});
