import { createApp } from 'vue'
import App from './App.vue'
// 在 main.js 中使用 router，注册路由
import router from './router/index'

createApp(App).use(router).mount('#app')
