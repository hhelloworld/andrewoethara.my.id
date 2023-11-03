const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
    'vue-quill-editor' // Add 'vue-quill-editor' to the transpileDependencies array

  ]
})
