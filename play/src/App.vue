<script setup lang="ts">
import { Accessibility, AddCircle, AirplaneOutline } from '@vicons/ionicons5'
</script>

<template>
  <BIcon :size="40" color="red">
    <Accessibility />
  </BIcon>
  <BIcon :size="40" color="blue">
    <AddCircle />
  </BIcon>
  <BIcon :size="40" color="pink">
    <AirplaneOutline />
  </BIcon>
  <b-button
    size="medium"
    type="primary"
    :round="true"
    :loading="true"
    :disabled="true"
  >
    <b-icon :size="20" color="red">
      <AirplaneOutline />
    </b-icon>
  </b-button>
</template>
