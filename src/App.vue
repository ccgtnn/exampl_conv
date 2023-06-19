<script setup>
import CurrencyBlock from './components/currency/CurrencyBlock.vue'
</script>

<template>
  <main>
    <div class="content">
      <CurrencyBlock />
    </div>
  </main>
</template>

<style scoped>
main {
  @apply mx-4 my-8 flex justify-center;
}
.content {
  @apply space-y-8;
}
</style>
