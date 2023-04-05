import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import registerComponents from '@/components/register'
import 'element-plus/dist/index.css'
import 'uno.css'

const app = createApp(App)
app.use(router).use(ElementPlus).use(registerComponents).mount('#app')