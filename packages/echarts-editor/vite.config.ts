import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src')}
    ]
  },
  plugins: [
    vue(),
    vueJsx(),
    unocss({
      presets: [
        presetUno()
      ]
    })
  ]
})