import _BIcon from "./src/icon.vue";
import { withInstall } from "@bun-design/utils/with-install";

 

const BIcon = withInstall(_BIcon)

export default BIcon;
export * from './src/icon'
//让用户可以通过ref使用组件的类型， 还需要增加instance的实例类型
export type BIconInstance = InstanceType<typeof BIcon>

declare module "vue" {
  export interface GlobalComponents {
    BIcon: typeof BIcon;
  }
}
