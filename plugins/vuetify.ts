import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              primary: colors.red.darken1, // #E53935
              secondary: colors.red.lighten4, // #FFCDD
            }
          },
        },
      },
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})