import { createApp } from 'vue'
import App from './App.vue'
//! 引入样式
import './style/index.scss'
//! 引入路由
import router from './router/index'
//! 引入vuex
import store from './store/index'
//! 按需引入vant
import { Button, Grid, GridItem } from 'vant'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
app.component(Button.name, Button)
app.component(Grid.name, Grid)
app.component(GridItem.name, GridItem)
