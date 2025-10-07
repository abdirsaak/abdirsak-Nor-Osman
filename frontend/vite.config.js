// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- MUST be imported like this

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- MUST be called like this
  ],
})