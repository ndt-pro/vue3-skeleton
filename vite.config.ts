import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'Vue3-Skeleton',
			// fileName: 'vue3-skeleton',
			fileName: (format) => `vue3-skeleton.${format}.js`,
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
