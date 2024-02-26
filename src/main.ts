import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import router from './router'
import PrimeVue from 'primevue/config';
import App from './App.vue'


//in main.js
import 'primevue/resources/themes/aura-light-green/theme.css'

const pinia = createPinia()
const app = createApp(App)

app.use(PrimeVue)
app.use(pinia)
app.use(router)
app.mount("#app")

