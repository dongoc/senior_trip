// @ts-nocheck
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@queries': path.resolve(__dirname, 'src/queries'),
      '@types': path.resolve(__dirname, 'src/types/index.ts'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@fb': path.resolve(__dirname, 'src/firebase'),
      '@module': path.resolve(__dirname, 'src/module'),
      '@hooks': path.resolve(__dirname, 'src/lib/hooks'),
    },
  },
  plugins: [react(), tsconfigPaths()],
})
