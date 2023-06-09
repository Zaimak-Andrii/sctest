// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/assets/styles/global.scss";',
          additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
  },
});
