import { ref, Ref } from 'vue'
import { FormComponent } from "@dynamic-form/generator/src/config"

const list = ref<FormComponent[]>([])
export default function useFormList() {
  const deleteItem = (index: number) => {
    list.value.splice(index, 1)
  }
  const clear = () => {
    list.value = []
  }
  return {
    list,
    deleteItem,
    clear
  }
}