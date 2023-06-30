<template>
  <div class="flex h-full">
    <ChartsSource class="w-70"></ChartsSource>
    <Canvas class="flex-1"></Canvas>
    <Configurator class="w-70"></Configurator>
  </div>
</template>
<script setup lang="ts">
import Canvas from '@/components/Canvas'
import ChartsSource from '@/components/ChartsSource'
import Configurator from '@/components/Configurator'
</script>