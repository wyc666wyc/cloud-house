<template>
  <Parser :config="config"></Parser>
</template>
<script setup lang="ts">
import { Ref, ref } from 'vue'
import type { FormComponent } from '@dynamic-form/generator/src/config'
import Parser from '@dynamic-form/parser/src/views/Parser/index'

const config: FormComponent[] = [
  {
    type: 'select',
    __config__: {
      name: '级联选择',
      tag: 'cascader',
      defaultValue: '',
      required: false,
      layout: 'col',
      span: 24,
    },
    __prop__: {

    }
  },
]
</script>