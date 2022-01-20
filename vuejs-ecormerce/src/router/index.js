import Vue from 'vue'
import VueRouter from 'vue-router'
import {productsRoute} from "@/pages/product";


Vue.use(VueRouter)

const routes = [
    ...productsRoute
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})

export default router;