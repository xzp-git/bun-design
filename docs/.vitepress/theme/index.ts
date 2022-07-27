import DefaultTheme from 'vitepress/theme'

//@ts-ignore
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
//@ts-ignore
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import '@bun-design/theme-chalk/src/index.scss'
import BIcon from '@bun-design/components/icon'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(BIcon) // 注册组件
    //其他组件 都可以注入
    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
  }
}
