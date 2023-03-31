import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'uno.css'

const app = createApp(App)
app.use(router).use(ElementPlus).mount('#app')