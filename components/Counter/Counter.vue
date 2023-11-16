<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <div
      v-if="counterInfo.length > 0"
      class="max-w-4xl mx-auto sm:px-6 lg:px-8"
    >
      <CounterTitle :name="counterInfo[0].name" />
      <CounterCard :minutes="counterInfo[0].minutes" />
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";
import type { Counter } from "../../types/Counter";
import { useAppAuth } from "~/composables/useAppAuth";

const counterInfo = ref<Counter[]>([]);
const { userToken } = useAppAuth();

onMounted(async () => {
  try {
    nextTick(async () => {
      const { data: serverData } = await useFetch("/api/counters", {
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      });
      if (serverData.value !== null) {
        counterInfo.value = serverData.value;
      }
    });
  } catch (error) {
    console.error("Error fetching counters:", error);
  }
});
</script>
