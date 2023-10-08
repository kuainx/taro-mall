<template>
  <div>{{ productId }}</div>
</template>
<script setup>
import { getCurrentInstance } from '@tarojs/taro'

const productId = getCurrentInstance().router.params.id
</script>
