import Vue from 'vue'
import VueRouter from 'vue-router'
import {productsRoute} from "@/pages/product";
import {cartRoute} from "@/pages/cart";
import {orderRoute} from "@/pages/order";
import {transactionRoute} from "@/pages/transactionHistory";
import {accountRoutes} from "@/pages/account";
import {inventRoute} from "@/pages/inventory";


Vue.use(VueRouter)

const routes = [
    ...productsRoute,
    ...cartRoute,
    ...orderRoute,
    ...transactionRoute,
    ...accountRoutes,
    ...inventRoute
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