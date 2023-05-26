import { defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export interface ParserProps {
  id: string | string[]
}

export default defineComponent({
  setup() {
    const route = useRoute()
    onMounted(() => {
      console.log(`c1 mounted`)
    })
    return () => (
      <div>
        C1:{route.params.id}
      </div>
    )
  }
})