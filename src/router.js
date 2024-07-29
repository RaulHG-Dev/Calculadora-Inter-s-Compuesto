import { createMemoryHistory, createRouter } from "vue-router";
import PrincipalView from './components/PrincipalView.vue';

const routes = [
    {
        path: '/', component: PrincipalView
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

export default router;