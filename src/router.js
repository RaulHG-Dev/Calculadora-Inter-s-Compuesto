import { createWebHistory, createRouter } from "vue-router";
import Main from "./components/views/Main.vue";

const router = createRouter({
    history: createWebHistory (),
    routes: [
        {
            path: '/', 
            name: 'index',
            component: Main
        },
        {
            path: '/tabulacion', 
            name: 'tabulacion',
            component: () => import('./components/views/TabulacionView.vue')
        },
        {
            path: '/graficar', 
            name: 'graficar',
            component: () => import('./components/views/GraphicView.vue')
        },
    ]
});

export default router;