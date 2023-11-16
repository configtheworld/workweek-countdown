export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore();
  if (store.uid !== "") {
    return navigateTo("/counter-list");
  }
});
