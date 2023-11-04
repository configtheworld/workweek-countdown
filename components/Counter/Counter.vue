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
import useCounters from "~/composables/useCounters";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const counterInfo = ref<Counter[]>([]);
const { auth } = useFirebaseClient();

onMounted(async () => {
  const counters = await useCounters();
  if (counters !== null) {
    counterInfo.value = counters;
  }
  signInWithEmailAndPassword(auth, "erkin@pa.com", "123123")
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
</script>
