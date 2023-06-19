<script setup>
defineProps({
  currencyItem: {
    type: Object,
    required: true,
  },
})

import { inject } from 'vue'
const setCurrentCurencyName = inject('setCurrentCurencyName')
const currentCurrencyName = inject('currentCurrencyName')
</script>

<template>
  <div class="currencyItem">
    <AppButton
      :isActive="currentCurrencyName == currencyItem.name"
      @click="setCurrentCurencyName(currencyItem.name)"
    >
      {{ currencyItem.name }}
      {{ currencyItem.costRUB }} ₽
    </AppButton>
  </div>
</template>

<style scoped></style>
