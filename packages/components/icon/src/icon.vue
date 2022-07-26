<template>
  <i :class="[bem.b()]" a="1" b="2" c="3" e="1" o="2" p="3" :style="style">
    <slot />
  </i>
  <h1 class="text-3xl font-bold underline">tailwindCss</h1>
</template>

<script lang="ts" setup>
import { createNamespace } from '@bun-design/utils/create'
import { CSSProperties, computed } from 'vue'
import { iconProps } from './icon'
defineOptions({
  name: 'BIcon'
})

const props = defineProps(iconProps)
const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {}
  return {
    ...(props.size ? { 'font-size': props.size + 'px' } : {}),
    ...(props.color ? { color: props.color } : {})
  }
})

const bem = createNamespace('icon')
</script>
