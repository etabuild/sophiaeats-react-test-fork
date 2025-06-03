import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
            injectRegister: 'auto', //ここの記述
            manifest: {
                name: 'Sophia Eats Test',
                short_name: 'SophiaEats',
                display: 'fullscreen',
                description: '上智大学食券販売アプリ',
                theme_color: '#FEA19C',
                icons: [
                    {
                        src: './src/assets/pwa-icons/pwa-icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: './src/assets/pwa-icons/pwa-icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    },
                    {
                        src: './src/assets/pwa-icons/pwa-icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any'
                    },
                    {
                        src: 'src/assets/pwa-icons/pwa-maskable-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable'
                    }
                ]
            }
        })],
})
