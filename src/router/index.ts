import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/ProjectView.vue')
  },
  {
    path: '/presentations',
    name: 'presentations',
    component: () => import('@/views/PresentationsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
