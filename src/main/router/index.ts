import { createRouter, createWebHistory } from 'vue-router'
import HomeFactory from '@/main/factories/views/HomeFactory.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeFactory
    },
    {
      path: '/repositories/:owner/:repository',
      name: 'repositories',
      component: () => import('@/main/factories/views/RepositoryDetailsFactory.vue')
    }
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
