import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/terms',
    name: 'Terms and Conditions',
    component: () => import(/* webpackChunkName: "terms" */ '../views/Terms.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy Policy',
    component: () => import(/* webpackChunkName: "privacy" */ '../views/Privacy.vue')
  },
  {
    path: '/EULA',
    name: 'EULA',
    component: () => import(/* webpackChunkName: "EULA" */ '../views/EULA.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
