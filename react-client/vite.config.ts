import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cesium from 'vite-plugin-cesium'
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
    cesium(),
    unocss({
      presets: [
        presetUno()
      ]
    })
  ]
})