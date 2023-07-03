<template>
  <div class="flex h-full">
    <ChartsSource class="w-70"></ChartsSource>
    <Canvas class="flex-1" :option="option"></Canvas>
    <Configurator class="w-70" :option="option"></Configurator>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { EChartsOption } from 'echarts'
import Canvas from '@/components/Canvas'
import ChartsSource from '@/components/ChartsSource'
import Configurator from '@/components/Configurator'

const option = ref<EChartsOption>()

setTimeout(() => {
  option.value = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }
})
</script>