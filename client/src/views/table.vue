<template>
  <EditTable :columns="columns" :data="data"></EditTable>
</template>
<script setup lang="ts">
import EditTable, { ShowOrEdit, Column } from "@/components/EditTable";
import { ElInput } from 'element-plus'
import { defineComponent, ref, h } from "vue";
interface Animal {
  name: string
  age: number
}
const columns = ref([
  {
    key: 'name',
    title: '姓名',
    render: (row: Animal, col: Column, index) => {
      return h(ShowOrEdit, {
        editRender: ElInput,
        value: row.age,
        onUpdateValue (v) {
          console.log('onUpdateValue',v)
          data.value[index].name = v
        }
      })
    }
  },
  {
    key: 'age',
    title: '年龄'
  },
])
const data = ref<Animal[]>([
  {
    name: 'dog',
    age: 2
  },
  {
    name: 'cat',
    age: 3
  },
])
</script>