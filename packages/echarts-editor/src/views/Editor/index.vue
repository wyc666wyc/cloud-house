<template>
  <div class="h-full">
    <ToolBar class="h-20" @option="handleOption"></ToolBar>
    <div class="flex h-full">
      <ChartsSource class="w-70"></ChartsSource>
      <Canvas class="flex-1" :option="chartOption"></Canvas>
      <Configurator class="w-70"></Configurator>
    </div>
    <ElDrawer v-model="monaco.visible">
      <MonacoEditor ref="momo"></MonacoEditor>
    </ElDrawer>
  </div>
</template>
<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue"
import { ElDrawer } from "element-plus"
import Canvas from "@/components/Canvas"
import ChartsSource from "@/components/ChartsSource"
import Configurator from "@/components/Configurator"
import ToolBar from "@/components/ToolBar/index.vue"
import { MonacoEditor } from "@dynamic-form/common/src/components/MonacoEditor"

const monaco = ref({
  visible: false,
})
const momo = ref(null)
const chartOption = ref()
const handleOption = ({ action, data }) => {
  switch (action) {
    case "openCode":
      monaco.value.visible = true
      nextTick(() => {
        console.log(momo.value)
        if (!momo.value) return
        momo.value.updateCode(JSON.stringify(chartOption.value))
      })
      break

    default:
      break
  }
}
</script>
