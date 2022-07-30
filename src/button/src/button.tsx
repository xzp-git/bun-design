import { createNamespace } from '@/utils/create'
import { defineComponent, toRefs } from 'vue'
import { buttonProps } from './button-types'

export default defineComponent({
  name: 'BButton',
  props: buttonProps,
  setup(props, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    const bem = createNamespace('button')
    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮'
      return (
        <button
          disabled={disabled.value}
          class={[
            bem.b(),
            bem.m(type.value),
            bem.m(size.value),
            bem.is('block', block.value)
            // bem.is('loading', loading),
            // bem.is('disabled', disabled)
          ]}
        >
          {defaultSlot}
        </button>
      )
    }
  }
})
