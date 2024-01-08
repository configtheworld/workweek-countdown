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
import { onMounted, ref } from "vue";
import type { Counter } from "../../types/Counter";
import axios from "axios";

interface UserType {
  user: { stsTokenManager: { accessToken: string } };
  token: string;
}
const counterInfo = ref<Counter[]>([]);
const userCookie = useCookie<UserType>("user");
onMounted(async () => {
  try {
    const response = await axios.get("/api/counters", {
      headers: {
        Authorization:
          "Bearer " + userCookie.value.user.stsTokenManager.accessToken,
      },
    });
    counterInfo.value = response.data;
  } catch (error) {
    console.error("Error fetching counters:", error);
  }
});
</script>
