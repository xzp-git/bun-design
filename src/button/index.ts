import _BButton from './src/button'
import { withInstall } from '@/utils/with-install'

const BButton = withInstall(_BButton)
export default BButton
export * from './src/button'
//让用户可以通过ref使用组件的类型， 还需要增加instance的实例类型
export type BButtonInstance = InstanceType<typeof BButton>

declare module 'vue' {
  export interface GlobalComponents {
    BButton: typeof BButton
  }
}
