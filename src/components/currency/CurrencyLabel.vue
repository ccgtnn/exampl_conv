<script setup>
import { inject } from 'vue'
const currentCurrencyName = inject('currentCurrencyName')
</script>

<template>
  <div class="label">
    {{ currentCurrencyName }}
  </div>
</template>

<style scoped>
.label {
  @apply text-2xl;
}
</style>
