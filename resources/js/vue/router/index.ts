import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from '../view/Main.vue'
import Category from '../view/Category.vue'
import Good from '../view/Good.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/admin',
        name: 'Main',
        component: Main
    },
    {
        path: '/admin/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/admin/goods',
        name: 'Goods',
        component: Good
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
