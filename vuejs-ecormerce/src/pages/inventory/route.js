import Applayout from "@/layout/Applayout";
const routes = [
    {
        path: '/inventory',
        component: Applayout,
        name: 'inventory',
        meta: {
            title: 'Inventory',
            icon: 'menu-fold'
        },
        children: [
            {
                path: 'list',
                component: () => import('./importExportHistory'),
                name: 'history',
                meta: {
                    title: 'History Import Export',
                }
            }
        ]
    }
]

export default routes;