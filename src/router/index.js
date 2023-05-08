import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/layouts/Home';

Vue.use(VueRouter);

const routes = [
    {
        path     : '/',
        name     : 'Home',
        component: Home,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
    next();
});
export default router;
