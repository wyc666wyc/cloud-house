<template>
  <div class="flex h-full">
    <ComponentPanel class="w-70 border-right"></ComponentPanel>
    <div class="flex flex-col flex-1">
      <Tool></Tool>
      <CanvasPanel class="canvasPanel"></CanvasPanel>
    </div>
    <AttributePanel class="w-80 border-left"></AttributePanel>
  </div>
</template>
<script setup lang="ts">
import AttributePanel from './components/AttributePanel/index'
import ComponentPanel from './components/ComponentPanel/index'
import CanvasPanel from './components/CanvasPanel/index'
import Tool from './components/ToolPanel/index';
</script>
<style scoped lang="scss">
:deep(.el-form-item) {
  margin-bottom: 12px;
}
.border-left {
  border-left: 1px solid #e5e7eb;
}
.border-right {
  border-right: 1px solid #e5e7eb;
}
.canvasPanel {
  height: 0;
  flex: 1 0 auto;
  overflow-y: auto;
}
.ghostClass {
  opacity: 0.1;
}
</style>