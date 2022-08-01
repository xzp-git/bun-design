import _Tree from './src/tree'
import { withInstall } from '@/utils/with-install'

const Tree = withInstall(_Tree)

export default Tree
export { _Tree as Tree }

export * from './src/tree-types'
//让用户可以通过ref使用组件的类型， 还需要增加instance的实例类型
export type TreeInstance = InstanceType<typeof Tree>

declare module 'vue' {
    export interface GlobalComponents {
        Tree: typeof Tree
    }
}