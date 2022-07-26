import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BIcon from "@bun-design/components/icon";
import '@bun-design/theme-chalk/src/index.scss'
const plugins = [BIcon]

const app = createApp(App)
plugins.forEach((comp) => app.use(comp))
    
app.mount('#app')
