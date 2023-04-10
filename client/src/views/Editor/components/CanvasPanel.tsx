import { h, resolveComponent, defineComponent, ref, SetupContext } from 'vue'
import type { FormComponent } from '@dynamic-form/generator/src/config'
import DraggableItem from "../../DragItem"
import useFormList from '@/hooks/useFormList'

const group = {
  name: 'form',
  pull: 'clone'
}

export default defineComponent({
  components: {
    DraggableItem
  },
  setup() {
    const { list } = useFormList
    const handleChange = () => {
      console.log(list.value)
    }
    return () => (
      <el-form>
        <draggable
          class="h-full"
          list={list.value}
          group={group}
          item-key="render"
          animation={200}
          ghost-class="ghostClass"
          chosen-class="chosenClass"
          drag-class="dragClass"
          v-slots={{ item: DraggableItem }}
          onChange={handleChange}
        >
        </draggable>
      </el-form>
    )
  }
})