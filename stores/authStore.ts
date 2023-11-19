import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "authStore",
  state: () => {
    return {
      user: JSON.parse(localStorage.getItem("user") || "{}"),
      accessToken: localStorage.getItem("accessToken"),
    };
  },
  actions: {
    setUser(value: object) {
      this.user = value;
      useLocalStorage("user", value);
    },
    setAccessToken(value: string) {
      this.accessToken = value;
      useLocalStorage("accessToken", value);
    },
  },
});
