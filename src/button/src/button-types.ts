import { ExtractPropTypes, PropType } from 'vue'

export type BButtonType = 'primary' | 'secondary' | 'text'
export const buttonProps = {
  type: {
    type: String as PropType<BButtonType>,
    default: 'secondary'
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
