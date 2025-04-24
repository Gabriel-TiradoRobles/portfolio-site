import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/ProjectView.vue'),
    alias: '/projects'
  },
  {
    path: '/projects/:id',
    name: 'project',
    component: () => import(/* webpackChunkName: "projects" */ '../views/ProjectPage.vue')
  },
  {
    path: '/presentations',
    name: 'presentations',
    component: () => import('@/views/PresentationsView.vue')
  },
  // Catch all 404
  {
    path: '/:catchAll(.*)',
    name: '404NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
