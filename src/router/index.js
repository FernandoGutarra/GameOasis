import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vermas',
    name: 'vermas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SeeMoreView.vue')
  },
  {
    path:'/carrito',
    name: 'carrito',
    component: () => import(/* webpackChunkName: "about" */ '../views/CartView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
