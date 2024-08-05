import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createNotivue } from 'notivue'

import './style.css'
import 'notivue/notification.css' // Only needed if using built-in notifications
import 'notivue/animations.css' 

import App from './App.vue'
import router from './router'

const notivue = createNotivue({
    position: 'top-right',
    limit: 1,
    enqueue: true,
    avoidDuplicates: true,
    notifications: {
        global: {
            duration: 3000
        }
    }
});

const app = createApp(App);
app.use(createPinia());
app.use(notivue);
app.use(router);
app.mount('#app');
