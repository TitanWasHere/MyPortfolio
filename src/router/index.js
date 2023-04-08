import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/Resume',
      name: 'Resume',
      component: () => import('../views/Resume.vue')
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: () => import('../views/Skills.vue')
    }*/
  ]
})

export default router
