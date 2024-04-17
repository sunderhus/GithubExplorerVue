import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './presentation/styles/global.css'

import App from '@/main/App.vue'
import router from '@/main/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
