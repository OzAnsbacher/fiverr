import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import explorePage from '../views/explore-page.vue'
import gigPage from '../views/gig-page.vue'
import checkOutPage from '../cmps/check-out-page.vue'
import userProfile from '../views/user-profile.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: homePage,
        },
        {
            path: '/explore',
            name: 'explore',
            component: explorePage,
        },
        {
            path: '/gig/:gigid',
            name: 'gig',
            component: gigPage,
        },
        {
            path: '/checkout/:gigId',
            name: 'checkout',
            component: checkOutPage,
        },
        {
            path: '/user-profile',
            name: 'user-profile',
            component: userProfile,
        },
    ],
})

export default router
