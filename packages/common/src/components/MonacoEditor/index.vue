<template>
  <div ref="el" class="w-full h-full"></div>
  <EditorWorker></EditorWorker>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useMonacoEditor } from './index.hooks'
import { EditorWorker } from './index'

const { el, createEditor, update, format } = useMonacoEditor('typescript')

defineExpose({
  updateCode: update
})

onMounted(() => {
  createEditor()
})
</script>