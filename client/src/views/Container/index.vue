<template>
  <router-view v-slot="{ Component }">
    <!-- <keep-alive> -->
      <component :is="Component" />
    <!-- </keep-alive> -->
  </router-view>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import Parser from '@/components/Parser'
import { defineComponent } from 'vue'
</script>