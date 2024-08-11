import App from './App.vue'
import router from './router'
import configFormKit from '../formkit.config'
import configNotiVue from '../noti-vue.config'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createNotivue } from 'notivue'
import { plugin, defaultConfig } from '@formkit/vue'


import './style.css'
import 'notivue/notification.css' // Only needed if using built-in notifications
import 'notivue/animations.css' 

const notivue = createNotivue(configNotiVue);

const app = createApp(App);
app.use(createPinia());
app.use(plugin, defaultConfig(configFormKit));
app.use(notivue);
app.use(router);
app.mount('#app');
