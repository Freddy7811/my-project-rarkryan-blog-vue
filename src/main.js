import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

window.axios = require('axios');

createApp(App).use(router).mount('#app')
