import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export interface ParserProps {
  id: string | string[]
}

export default defineComponent({
  setup() {
    const data = ref('')
    console.log(`c1 setup`)
    const route = useRoute()
    onMounted(() => {
      console.log(`c1 mounted`)
    })
    const handleLoadJson = async () => {
      const baseUrl = `http://localhost:5173/`
      const response = (await fetch(`${baseUrl}/data/mock.json`)).json()
      data.value = await response
    }
    const handleClick = () => {
      console.log(data.value)
      const { event } = data.value
      eval(event.onChange)
    }
    return () => (
      <div>
        C1:{route.params.id}
        <button onClick={handleLoadJson}>load</button>
        <button onClick={handleClick}>click</button>
      </div>
    )
  }
})