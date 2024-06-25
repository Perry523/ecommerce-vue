import { defineStore } from "pinia";

export const useUser = defineStore("users", {
  state: () => ({
    token: "",
  }),
  getters: {
    isLoggedIn: (state) => !!state.token.length,
  },
  actions: {
    login(token: string) {
      const router = useRouter();
      this.token = token;
      router.push("/");
    },
    logout() {
      const router = useRouter();
      this.token = "";
      router.push("/login");
    },
  },
});
