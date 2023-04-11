import { h, resolveComponent, defineComponent, ref, SetupContext } from "vue"
import type { FormComponent } from "@dynamic-form/generator/src/config"
import DraggableItem from "../../../DragItem"
import useFormList from "@/hooks/useFormList"

type DragChange = {
  added?: {
    element: FormComponent
  }
}
const group = {
  name: "form"
}
const { list } = useFormList
const handleChange = (val: DragChange) => {
  if (val.added) {
    useFormList.activeItem.value = val.added.element
  }
}
export default function () {
  return (
    <el-form>
      <draggable
        class="h-full p-2"
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
