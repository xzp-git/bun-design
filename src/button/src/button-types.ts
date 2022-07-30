import { ExtractPropTypes, PropType } from 'vue'

export type BButtonType = 'primary' | 'secondary' | 'text'
export type BButtonSize = 'small' | 'medium' | 'large'

export const buttonProps = {
  type: {
    type: String as PropType<BButtonType>,
    default: 'secondary'
  },
  size: {
    type: String as PropType<BButtonSize>,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
