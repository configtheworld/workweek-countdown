<template>
  <div>Anmelden mit Google</div>
  <div>
    <ul>
      <li>
        <button @click="handleLogin">signing with google</button>
      </li>
      <li>
        <button @click="handleCheckStates">Check States</button>
      </li>
    </ul>
    <hr />
  </div>
</template>

<script setup lang="ts">
import { useAppAuth } from "~/composables/useAppAuth";
const { me, logout, loginWithGoogle } = useAppAuth();
definePageMeta({
  middleware: "notauth",
});

const handleLogin = async () => {
  try {
    await loginWithGoogle();
    navigateTo("/");
  } catch (error) {
    console.error(error);
  }
};

const handleCheckStates = async () => {
  try {
    console.log(await me());
  } catch (error) {
    console.error(error);
  }
};

const handleLogout = async () => {
  try {
    await logout();
    await navigateTo("/");
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  try {
    console.log(await me());
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped></style>
