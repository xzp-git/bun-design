import { createNamespace } from '@/utils/create'
import { defineComponent, toRefs } from 'vue'
import { buttonProps } from './button-types'

export default defineComponent({
  name: 'BButton',
  props: buttonProps,
  setup(props, { slots }) {
    const { type } = toRefs(props)
    const bem = createNamespace('button')
    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮'
      return (
        <button
          class={[
            bem.b(),
            bem.m(props.type)
            // bem.is('round', round),
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
