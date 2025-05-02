import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'https://evgenygnezdin.github.io/thousand_app_v3' : '/',
  plugins: [react()]
})
