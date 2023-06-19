<script setup>
import CurrencyList from './CurrencyList.vue'
import CurrencyFilters from './CurrencyFilters.vue'
import CurrencyLabel from './CurrencyLabel.vue'

import { usePrepCurrency } from '../../composable/currency/usePrepCurrency'
usePrepCurrency()
</script>

<template>
  <div class="currency">
    <div class="currency__label">
      <CurrencyLabel />
    </div>
    <div class="currency__list">
      <CurrencyList />
      <CurrencyFilters />
    </div>
  </div>
</template>

<style scoped>
.currency {
  @apply p-4 bg-currency-bg border-2 border-currency-brd rounded-xl shadow-lg;
}
.currency__label {
  @apply flex justify-center;
}
.currency__list {
  @apply p-4 flex gap-4 items-center;
}
</style>
