import { upperFirst } from './utils'

export default function genIndexTemplate(name) {
  const compName = upperFirst(name)
  return `\
import _${compName} from './src/${name}'
import { withInstall } from '@/utils/with-install'

const ${compName} = withInstall(_${compName})

export default ${compName}
export { _${compName} as ${compName} }

export * from './src/${name}-types'
//让用户可以通过ref使用组件的类型， 还需要增加instance的实例类型
export type ${compName}Instance = InstanceType<typeof ${compName}>

declare module 'vue' {
    export interface GlobalComponents {
        ${compName}: typeof ${compName}
    }
}`
}
