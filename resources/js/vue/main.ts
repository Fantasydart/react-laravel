import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'

const app = createApp(App).use(store).use(router).use(vuetify).use(VueAxios, axios).mount('#app')

