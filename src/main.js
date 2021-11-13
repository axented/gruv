import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import VueI18n from 'vue-i18n'

createApp(App).use(router).use(VueI18n).mount('#app')
