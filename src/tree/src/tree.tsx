
import { createNamespace } from '@/utils/create'
import { defineComponent } from 'vue'
import { treeProps } from './tree-types'

export default defineComponent({
    name: 'BTree',
    props: treeProps,
    setup(props) {
    const bem = createNamespace('tree')
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
})