<script setup>
import CurrencyItem from './CurrencyItem.vue'

import { inject } from 'vue'
const currencyList = inject('currencyList')
</script>

<template>
  <div class="currencyList">
    <CurrencyItem
      v-for="currencyItem in currencyList"
      :key="currencyItem.name"
      :currencyItem="currencyItem"
    />
  </div>
</template>

<style scoped>
.currencyList {
  @apply p-4 flex gap-4 items-center;
}
</style>
