import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            }
        }
    },
    server: {
        watch: {
            usePolling: true,
        },
        host: true, // needed for the Docker Container port mapping to work
        strictPort: true,
        port: 5173, // you can replace this port with any port
    }
})
