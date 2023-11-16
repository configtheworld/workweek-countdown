import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "authStore",
  state: () => {
    return {
      uid: "",
      accessToken: "",
      user: {},
    };
  },
  actions: {
    setUid(value: string) {
      this.uid = value;
    },
    setAccessToken(value: string) {
      this.accessToken = value;
    },
    setUser(value: object) {
      this.user = value;
    },
  },
  getters: {
    getUid: (state) => state.uid,
  },
});
