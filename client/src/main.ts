import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import globalComponents from '@/components/install'
import customComponents from '@dynamic-form/generator/src/customComponents/install'
import 'element-plus/dist/index.css'
import 'uno.css'

const app = createApp(App)
app.use(router).use(ElementPlus).use(customComponents).use(globalComponents).mount('#app')