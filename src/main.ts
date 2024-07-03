import { createApp } from 'vue'
import pinia from './stores'
// import persist from 'pinia-plugin-persistedstate'

import 'virtual:svg-icons-register'

import 'vant/lib/index.css'
import './styles/main.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
