import {
    createRouter,
    createWebHistory
} from 'vue-router'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: {
                name: "layout"
            },
        },
        {
            path: '/layout',
            name: 'layout',
            component: () => import('@/views/Layout/layout.vue'),
            children:[
                {
                    path:"/home",
                    name:"home",
                    component: () => import('@/views/Home/home.vue'),
                },
                {
                    path:"/category",
                    name:"category",
                    component: () => import('@/views/Category/category.vue'),
                }
            ],
        },
        {
            path: "login",
            name: "login",
            component: () => import('@/views/Login/login.vue')
        }
    ]
})

export default router;