import DefaultTheme from 'vitepress/theme'

import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import 'vitepress-theme-demoblock/theme/styles/index.css'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    //其他组件 都可以注入
    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
  }
}
