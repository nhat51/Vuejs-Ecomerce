import Applayout from "@/layout/Applayout";
const routes = [
    {
        path: '/transactions',
        component: Applayout,
        name: 'transactions',
        meta: {
            title: 'Transaction',
            icon: 'menu-fold'
        },
        children: [
            {
                path: 'list',
                component: () => import('./ListTransaction'),
                name: 'transactionList',
                meta: {
                    title: 'Transaction History',
                }
            }
        ]
    }
]

export default routes;