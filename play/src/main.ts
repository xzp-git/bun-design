import { createApp } from 'vue'
import App from './App.vue'
import BIcon from '@bun-design/components/icon'
import BButton from '@bun-design/components/button'

import '@bun-design/theme-chalk/src/index.scss'
const plugins = [BIcon, BButton]

const app = createApp(App)
plugins.forEach(comp => app.use(comp))

app.mount('#app')
