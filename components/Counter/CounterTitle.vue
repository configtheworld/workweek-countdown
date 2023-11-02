<template>
  <h1 class="flex justify-center text-6xl font-bold pt-8 sm:pt-0">
    {{ props.name }} <span class="ml-6 text-8xl mt-[-15px]">⏲️</span>
  </h1>
</template>

<script setup lang="ts">
const props = defineProps({
  name: { type: String, required: true },
})
</script>
