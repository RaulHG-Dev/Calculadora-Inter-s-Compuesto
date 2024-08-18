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
            component: () => import('./components/views/TabulationView.vue')
        },
        {
            path: '/graficar', 
            name: 'graficar',
            component: () => import('./components/views/GraphicView.vue')
        },
        {
            path: '/acerca-proyecto', 
            name: 'acerca',
            component: () => import('./components/views/About.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('./components/views/exceptions/NotFound.vue')
        }
    ]
});

export default router;