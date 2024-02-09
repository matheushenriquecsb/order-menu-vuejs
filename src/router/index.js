import { createRouter, createWebHistory } from 'vue-router' 
import Index from '../views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/Order.vue')
    }
  ]
})

export default router
