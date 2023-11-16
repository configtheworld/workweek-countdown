export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore();
  if (store.uid === "") {
    return navigateTo("/signin");
  } else {
    return navigateTo("/counter-list");
  }
});
