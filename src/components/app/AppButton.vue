<script setup>
const emit = defineEmits(['click'])

defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button :class="{ active: isActive }" @click="emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  @apply px-4 py-3 bg-main-btn-bg rounded-xl;
}
.active {
  @apply bg-main-btn-bgActive;
}
</style>
