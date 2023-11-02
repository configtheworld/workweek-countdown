<template>
  <div class="flex justify-center my-8">
    <h1 class="text-xl">
      <span v-if="hours > 0">
        <span class="text-8xl font-bold">{{ hours }}</span> hrs
      </span>
      <span v-if="minutesRef > 0">
        <span class="text-8xl font-bold">{{ minutesRef }}</span> mins
      </span>

      <span class="text-2xl font-bold">left</span>
    </h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

// const totalMinutes = ref(1212)
const hours = ref(0)
const minutesRef = ref(0)
onMounted(() => {
  hours.value = Math.floor(props.minutes / 60)
  minutesRef.value = props.minutes % 60
})

const props = defineProps({
  minutes: { type: Number, required: true },
})
</script>
