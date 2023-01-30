import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { publicPath } from '../../vue.config'

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
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import(/* webpackChunkName: "Rules" */ '../views/Rules.vue')
  }
]

const router = createRouter({
  history: createWebHistory(publicPath),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
})

export default router
