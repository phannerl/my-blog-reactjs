import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/my-blog-reactjs/',
    plugins: [react()],
    build: {
        outDir: 'dist',
    },
    resolve: {
        alias: {
            src: '/src',
        },
    },
})
