import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        tabler: () => import('@iconify-json/tabler').then(i => i.default as any),
        mdi: () => import('@iconify-json/mdi').then(i => i.default as any),
      }
    })
  ]
})