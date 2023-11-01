<template>
  <div class="flex justify-center my-8">
    <h1 class="text-xl">
      <span v-if="hours > 0">
        <span class="text-8xl font-bold">{{ hours }}</span> hrs
      </span>
      <span v-if="minutes > 0">
        <span class="text-8xl font-bold">{{ minutes }}</span> mins
      </span>

      <span class="text-2xl font-bold">left</span>
    </h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const totalMinutes = ref(1212)
const hours = ref(0)
const minutes = ref(0)
onMounted(() => {
  hours.value = Math.floor(totalMinutes.value / 60)
  minutes.value = totalMinutes.value % 60
})
</script>
