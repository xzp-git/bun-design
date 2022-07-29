import { createApp } from 'vue'
import '@/theme-chalk/index.scss'
import App from './App.vue'

import BButton from '@/button'

createApp(App).use(BButton).mount('#app')
