import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import customComponents from '@dynamic-form/generator/src/customComponents/install'
import 'element-plus/dist/index.css'
import 'uno.css'

const app = createApp(App)
app.use(router).use(ElementPlus).use(customComponents).mount('#app')