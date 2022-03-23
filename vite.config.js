import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default () => defineConfig({
    plugins: [vue()],
    resolve: {
        conditions: [],
        extensions: ['.js', '.json', '.vue'],
    },
    build: {
        resolve: {
            dedupe: ['vue'],
            extensions:['.js','.json', '.vue']  
        },
        cssCodeSplit: false,
        lib: {
            entry: path.resolve(__dirname, './src/index.js'),
            name: 'Vue3CardFlip',
        },
        outDir: path.resolve(__dirname, './dist'),
        rollupOptions: {
            external: ['vue'],
            resolve: {
                dedupe: ['vue']
            },
            output: {
                globals: {
                    vue: 'Vue'
                }
            },
        },
    },
    rollupOptions: {
        input: {
            demo: path.resolve(__dirname, 'demo/index.html'),
        },
    },
});
