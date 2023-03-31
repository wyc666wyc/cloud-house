<template>
  <div class="flex h-full">
    <ComponentPanel class="w-80 bg-blue-200"></ComponentPanel>
    <CanvasPanel class="flex-1 bg-green-200"></CanvasPanel>
    <AttributePanel class="w-80 bg-gray-200"></AttributePanel>
  </div>
</template>
<script setup lang="ts">
import AttributePanel from './components/AttributePanel'
import ComponentPanel from './components/ComponentPanel'
import CanvasPanel from './components/CanvasPanel'
</script>