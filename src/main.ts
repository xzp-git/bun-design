import { createApp } from 'vue'
import '@/theme-chalk/index.scss'
import App from './App.vue'

import BButton from '@/button'

// 使用全量的导出
// import BunDesign from '../build'

createApp(App).use(BButton).mount('#app')
