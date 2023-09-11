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
            component: () => import('@/views/Layout/index.vue'),
        },
        {
            path: "login",
            name: "login",
            component: () => import('@/views/Login/login.vue')
        }
    ]
})

export default router;