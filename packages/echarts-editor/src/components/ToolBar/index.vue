<template>
  <div>
    <ElButton @click="handleClick('openCode')">代码</ElButton>
  </div>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

const emit = defineEmits(['option'])
const handleClick = (action: string) => {
  emit('option', {
    action
  })
}
</script>