import './assets/w3.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Use o roteador antes de montar o aplicativo
app.use(router)

// Monte o aplicativo no elemento body
app.mount('body')
