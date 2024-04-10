import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import DaisyMessage from "@/plugins/DaisyMessage/index.js";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(DaisyMessage)

app.mount('#app')
