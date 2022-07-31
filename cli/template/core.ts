import { upperFirst } from './utils'

// 创建组件核心文件模板
export default function genCoreTemplate(name: string) {
  const compName = 'B' + upperFirst(name)
  return `
import { createNamespace } from '@/utils/create'
import { defineComponent } from 'vue'
import { ${name}Props } from './${name}-types'

export default defineComponent({
    name: '${compName}',
    props: ${name}Props,
    setup(props) {
    const bem = createNamespace('${name}')
    return () => {
        return (
        <div
            class={[
            bem.b()
            ]}
        >
        </div>
        )
    }
    }
})`
}
