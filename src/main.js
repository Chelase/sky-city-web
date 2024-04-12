import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import customMouse from '@/plugins/customMouse/index.js'
import Message from '@/plugins/Message/index.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(customMouse)
app.use(Message)

app.mount('#app')
