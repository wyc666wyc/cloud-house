import type { App } from 'vue'
import render from './render'

const plugin = {
  install(app: App) {
    app.component('dynamic-render', render)
  }
}
export default plugin