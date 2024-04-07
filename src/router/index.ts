import { createRouter , createWebHashHistory, RouteRecordRaw } from "../../node_modules/vue-router/dist/vue-router";


const routes:Array<RouteRecordRaw>=[
    {
        path:"/",
        redirect:"/home",
    },
    {
        path:"/home",
        name:"home",
        component:()=>import('../components/layout/index.vue'),
        children:[
            {
                path:"/index",
                name:"index",
                component:()=>import('../view/index/index.vue'),
            },
            {
                path:"/monitor",
                name:"monitor",
                component:()=>import('../view/monitor/index.vue'),
            },
            {
                path:"/order",
                name:"order",
                component:()=>import('../view/order/index.vue'),
            },
            {
                path:"/census",
                name:"census",
                component:()=>import('../view/census/index.vue'),
            },
        ]
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router;