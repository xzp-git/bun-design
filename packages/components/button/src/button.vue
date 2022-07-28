<template>
  <button
    :class="[
      bem.b(),
      bem.m(props.type),
      bem.is('round', round),
      bem.is('loading', loading),
      bem.is('disabled', disabled)
    ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { createNamespace } from '@bun-design/utils/create'
import { buttonEmits, buttonProps } from './button'

defineOptions({
  name: 'BButton'
})

const props = defineProps(buttonProps)
defineEmits(buttonEmits)

const bem = createNamespace('button')
</script>
