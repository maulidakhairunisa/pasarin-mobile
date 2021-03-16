import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import List3 from '../views/List3.vue'
import View3 from '../views/View3.vue'
import View4 from '../views/View4.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/List3',
    name: 'List3',
    component: List3
  },
  {
    path: '/View3',
    name: 'View3',
    component: View3
  },
  {
    path: '/View4',
    name: 'View4',
    component: View4
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
