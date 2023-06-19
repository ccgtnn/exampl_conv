<script setup>
import { inject } from 'vue'
const currencySearchField = inject('currencySearchField')
</script>

<template>
  <AppFilter :isActive="!!currencySearchField">
    <FormInput v-model="currencySearchField" placeholder="ПОИСК" />
  </AppFilter>
</template>

<style scoped></style>
