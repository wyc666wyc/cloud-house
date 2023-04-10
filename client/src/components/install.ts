import type { App } from 'vue'
import draggable from 'vuedraggable'
import render from '@dynamic-form/parser/src/components/render'

const plugin = {
  install(app: App) {
    app.component('draggable', draggable)
    app.component('dynamic-render', render)
  }
}
export default plugin