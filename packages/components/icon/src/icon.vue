<template>
  <i :class="[bem.b()]">
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
const style = computed<CSSProperties>(() => {});

const bem = createNamespace("icon");
</script>
