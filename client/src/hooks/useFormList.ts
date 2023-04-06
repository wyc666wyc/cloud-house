import { ref, Ref } from 'vue'
import { FormComponent } from "@dynamic-form/generator/src/config"
type Use = {
  list: Ref<FormComponent[]>
}
export default function(): Use  {
  const list = ref<FormComponent[]>([])
  return {
    list
  }
}