<template>
  <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
    <h2 class="text-2xl leading-7 font-semibold text-center">
      To finish your
      <code class="text-2xl ml-2 text-green-600">workweek-countdown</code>
    </h2>
    <CounterClock />

    <div>
      <h3 class="text-lg leading-6 font-medium text-center">
        Reduce your remaining working hours
      </h3>
      <div>
        <div class="p-4">
          <WorktimeInput />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WorktimeInput from './WorktimeInput.vue'
</script>
