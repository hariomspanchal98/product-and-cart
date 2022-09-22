import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import products from '../views/products.vue'
import pastOrders from '../views/pastOrders.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: products
  },
  {
    path: '/past-orders',
    name: 'pastOrders',
    component: pastOrders
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
