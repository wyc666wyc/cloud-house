import { ref } from 'vue'
import { FormComponent } from "@dynamic-form/generator/src/config"

const list = ref<FormComponent[]>([])

const addItem = (item: FormComponent) => {
  list.value.push(item)
}
const deleteItem = (index: number) => {
  list.value.splice(index, 1)
}
const clear = () => {
  list.value = []
}

export default {
  list,
  addItem,
  deleteItem,
  clear
}