export default defineNuxtRouteMiddleware((to, from) => {
  const mockUser = false;
  if (!mockUser) {
    return navigateTo("/signin");
  } else {
    return navigateTo("/counter-list");
  }
});
