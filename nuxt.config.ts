// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/eslint-module",
    "@nuxt/image-edge",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/image"
  ],
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    },
  },
  typescript: {
    typeCheck: true,
  },
  tailwindcss: {
    cssPath: "~/assets/main.scss",
  },
  devtools: {
    enabled: true,
  },
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
  piniaPersistedstate: {
    storage: "localStorage",
  },
  ssr: false,
});