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
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Counter } from "../../types/Counter";

const counterInfo = ref<Counter[]>([]);

onMounted(async () => {
  // const counters = await getCounterInfo()
  // counterInfo.value = counters.map((item: DocumentData) => {
  //   return {
  //     name: item.name as string,
  //     minutes: item.minutes as number,
  //     userId: item.userId as string,
  //   }
  // })
  counterInfo.value = [{ name: "work fe", minutes: 231, userId: "1" }];
});

// async function getCounterInfo() {
//   const citiesCol = collection(db, 'counters')
//   const citySnapshot = await getDocs(citiesCol)
//   const cityList = citySnapshot.docs.map((doc) => doc.data())
//   return cityList
// }
</script>
