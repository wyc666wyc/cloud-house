import type { App } from 'vue'
import Example from './Example.vue'

const plugin = {
  install(app: App) {
    app.component('Example', Example)
  }
}
export default plugin