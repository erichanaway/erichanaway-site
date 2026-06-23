import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
        project1: resolve(__dirname, 'project1.html'),
        project1: resolve(__dirname, 'resume.html'),
        project1: resolve(__dirname, 'contact.html'),

      },
    },
  },
})