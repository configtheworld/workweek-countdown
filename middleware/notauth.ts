export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore();
  if (store.accessToken !== "") {
    return navigateTo("/");
  }
});
