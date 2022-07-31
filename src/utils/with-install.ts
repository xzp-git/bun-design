import { Plugin } from 'vue'
import { setGlobalConfig, getComponentPrefix } from './global-config'
import type { SheepUIOptions } from './global-config'
export type SFCWithInstall<T> = T & Plugin

export function withInstall<T>(comp: T, options?: SheepUIOptions) {
  ;(comp as SFCWithInstall<T>).install = function (app) {
    const { name } = comp as unknown as { name: string }

    const registered = app.component(name, comp)
    if (!registered) {
      setGlobalConfig(app, options)
      app.component(name, comp)
    }
  }
  return comp as SFCWithInstall<T>
}
