const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @use "@/assets/scss/variables" as *;
          @use "@/assets/scss/mixins" as *;
        `
      }
    }
  }
})
