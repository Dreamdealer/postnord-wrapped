import { createApp } from 'vue'
import postnordDelivered from './App.vue'

import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

const app = createApp(postnordDelivered)
app.use(VueFullPage)
app.mount('#app')