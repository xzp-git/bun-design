// 入口文件
/**
 * 1. 引入实现组件批量导处去
 *
 *
 */
import type { App } from 'vue'
import ButtonPlugin, { BButton } from '../src/button'

//2. 导出这些vue组件
export { BButton }

const installs = [ButtonPlugin]
//3. 导出一个vue插件
export default {
  install(app: App) {
    installs.forEach(p => app.use(p))
  }
}
