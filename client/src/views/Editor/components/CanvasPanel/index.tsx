import { h, resolveComponent, defineComponent, ref, SetupContext } from "vue"
import type { FormComponent } from "@dynamic-form/generator/src/config"
import DraggableItem from "../../../DragItem"
import useFormList from "@/hooks/useFormList"

const group = {
  name: "form"
}
const { list } = useFormList
const handleChange = () => {
  console.log(list.value)
}
export default function () {
  return (
    <el-form>
      <draggable
        class="h-full"
        list={list.value}
        group={group}
        item-key="render"
        animation={200}
        delay={0}
        ghost-class="ghostClass"
        chosen-class="chosenClass"
        drag-class="dragClass"
        v-slots={{ item: DraggableItem }}
        onChange={handleChange}
      ></draggable>
    </el-form>
  )
}
