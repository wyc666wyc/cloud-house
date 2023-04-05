<template>
  <div class="flex h-full">
    <ComponentPanel class="w-70 bg-blue-200"></ComponentPanel>
    <div class="flex flex-col flex-1">
      <Tool></Tool>
      <CanvasPanel class="flex-auto"></CanvasPanel>
    </div>
    <AttributePanel class="w-70 bg-gray-200"></AttributePanel>
  </div>
</template>
<script setup lang="ts">
import AttributePanel from './components/AttributePanel'
import ComponentPanel from './components/ComponentPanel'
import CanvasPanel from './components/CanvasPanel'
import Tool from './components/Tool';
</script>