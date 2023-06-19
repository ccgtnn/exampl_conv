<script setup>
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: [Number, String],
    default: '',
  },
  inputCss: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})

function updateInput(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div>
    <label v-if="label" :for="id">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="props.modelValue"
      :class="props.inputCss"
      :placeholder="placeholder"
      @input="updateInput"
    />
  </div>
</template>

<style scoped>
label {
  @apply font-bold block p-2;
}
input {
  @apply px-3 py-2 border-2 border-main-form-input-brd bg-main-bg rounded-md 
  focus:outline-none focus:bg-main-form-input-bgActive focus:border-main-form-input-brdActive;
}
</style>
