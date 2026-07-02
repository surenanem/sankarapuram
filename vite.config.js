import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://surenanem.github.io/sankarapuram/ on GitHub Pages,
// so assets must resolve under the /sankarapuram/ subpath.
export default defineConfig({
  base: '/sankarapuram/',
  plugins: [react()],
})
