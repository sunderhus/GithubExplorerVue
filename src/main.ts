import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './presentation/styles/global.css'

import router from '@/main/router'
import App from '@/main/App.vue'

const app = createApp(App)
import { addIcons } from 'oh-vue-icons'
import * as FaIcons from 'oh-vue-icons/icons/fa'

const Fa = Object.values({ ...FaIcons })
addIcons(...Fa)

app.use(createPinia())
app.use(router)
app.mount('#app')
