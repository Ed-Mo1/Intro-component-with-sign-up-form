import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Intro-component-with-sign-up-form/',
  plugins: [react()],
})
