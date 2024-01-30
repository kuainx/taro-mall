<template>
  <div class="good-color-selector">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="good-color-selector-item"
      :class="{ active: modelValue === index }"
      @click="() => (current = index)"
    >
      <image :src="item" mode="heightFix" />
    </div>
  </div>
</template>
<script setup>
const { data, modelValue } = defineProps(['data', 'modelValue'])
const emit = defineEmits(['update:modelValue'])
const current = computed({
  get() {
    return modelValue
  },
  set(value) {
    console.log(value)
    emit('update:modelValue', value)
  }
})
</script>

<style>
.good-color-selector {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.good-color-selector-item {
  height: 100px;
  border: 4px solid transparent;
}
.good-color-selector-item image {
  height: 100%;
}
.good-color-selector-item.active {
  border: 2px solid #393939;
}
</style>
