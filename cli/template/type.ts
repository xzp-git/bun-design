import { upperFirst } from './utils'

// 创建组件核心文件模板
export default function genTypesTemplate(name: string) {
  const compName = upperFirst(name)
  const propsName = `${name}Props`
  return `
import { ExtractPropTypes, PropType } from 'vue'

export const ${propsName} = {
} as const

export type ${compName}Props = ExtractPropTypes<typeof ${propsName}>`
}
