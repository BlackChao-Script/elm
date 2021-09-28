import { createApp } from 'vue'
import App from './App.vue'
//! 引入样式
import './style/index.scss'
//! 引入路由
import router from './router/index'
//! 按需引入vant
import { Button } from 'vant'

const app = createApp(App)
app.mount('#app')
app.use(router)
app.component(Button.name, Button)
