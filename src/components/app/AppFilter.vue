<script setup>
defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="filter" :class="{ active: isActive }"><slot></slot></div>
</template>

<style scoped>
.filter {
  @apply p-4 bg-main-filter-bg;
}
.active {
  @apply bg-main-filter-bgActive;
}
</style>
