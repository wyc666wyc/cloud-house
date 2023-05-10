import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') }
    ]
  },
  plugins: [
    react(),
    unocss({
      presets: [
        presetUno()
      ]
    })
  ]
})