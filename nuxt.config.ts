// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  pages: true,

  typescript: {
    shim: false,
  },
  // ssr: false,
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon",],

  css: ["@/assets/css/app.css"],
 
});
