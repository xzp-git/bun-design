<script setup lang="ts">
const cofirm = () => {
  console.log('cofirm')
}
</script>

<template>
  <b-button size="large" block type="primary"></b-button>
  <b-button size="medium" type="primary" @click="cofirm"></b-button>
  <b-button size="small" type="primary" disabled @click="cofirm"></b-button>
  <b-button size="small" type="primary" disabled @click="cofirm"></b-button>
  <b-button size="small" type="secondary" disabled @click="cofirm"></b-button>
  <b-button size="small" type="text"></b-button>
  <b-button size="small" type="text" disabled @click="cofirm"></b-button>
</template>
