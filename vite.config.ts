import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// build npm package using vite, source: https://levelup.gitconnected.com/using-vite-to-publish-a-vue-component-to-npm-7043a56cfa00
// https://vitejs.dev/config/
// build library mode
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'react-progress-ring',
      fileName: (format) => `react-progress-ring.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [react()],
})
