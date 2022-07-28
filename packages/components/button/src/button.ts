import { ExtractPropTypes, PropType } from 'vue'

export type Size = 'small' | 'large' | 'medium'
export type Type =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default'
  | ''

export const buttonProps = {
  size: String as PropType<Size>,
  type: {
    type: String as PropType<Type>,
    validater: (type: string) => {
      return [
        'primary',
        'success',
        'warning',
        'danger',
        'info',
        'default',
        ''
      ].includes(type)
    }
  },
  round: Boolean,
  loading: Boolean,
  disabled: Boolean,
  nativeType: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button'
  },
  iconPlacement: {
    type: String as PropType<'left' | 'right'>,
    default: 'left'
  }
} as const

export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent,
  mousedown: (e: MouseEvent) => e instanceof MouseEvent
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

export type ButtonEmits = typeof buttonEmits
