<template>
  <i :class="[bem.b()]" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { createNamespace } from "@bun-design/utils/create";
import { computed } from "@vue/reactivity";
import { CSSProperties } from "vue";
import { iconProps } from "./icon";
defineOptions({
  name: "BIcon",
});
const props = defineProps(iconProps);
const style = computed<CSSProperties>(() => {
  if(!props.size && !props.color) return {}
  return{
    ...(props.size ?{"font-size": props.size+"px"}:{}),
    ...(props.color ?{color: props.color}:{})
  }
});

const bem = createNamespace("icon");
</script>
