import type { App } from 'vue'
import draggable from 'vuedraggable'

const plugin = {
  install(app: App) {
    app.component('draggable', draggable)
  }
}
export default plugin