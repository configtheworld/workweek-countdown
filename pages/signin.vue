<template>
  <div>Anmelden mit Google</div>
  <div>
    <ul>
      <li>
        <button @click="handleLogin">signing with google</button>
      </li>
    </ul>
    <hr />
  </div>
</template>

<script setup lang="ts">
import { useAppAuth } from "~/composables/useAppAuth";
const { loginWithGoogle } = useAppAuth();
const router = useRouter();
const userCookie = useCookie("user");
definePageMeta({
  middleware: "notauth",
});
const handleLogin = async () => {
  try {
    const user = await loginWithGoogle();
    if (user) {
      userCookie.value = JSON.stringify(user);
      router.push("/");
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped></style>
