import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/products',
      name: 'ProductCustomer',
      component: () => import('@/pages/ProductCustomer')
    },
    {
      path: '/',
      name: 'DirectProductCustomer',
      component: () => import('@/pages/ProductCustomer')
    },
    {
      path: '/products/manage',
      name: 'Product',
      component: () => import('@/pages/Product')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/Main/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/pages/Main/Register')
    },
    {
      path: '/users',
      name: 'User',
      component: () => import('@/pages/User/User.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('@/pages/Order/ViewAllOrders.vue')
    },
    {
      path: '/orders/approvement/:id',
      name: 'order_approvement',
      component: () => import('@/pages/Order/Approvement.vue')
    },
    {
      path: '/orders/customer',
      name: 'customerOrder',
      component: () => import('@/pages/Order/Orders.vue')
    },
    {
      path: '/orders/thx',
      name: 'Thanks',
      component: () => import('@/pages/Thx-Order')
    },
    {
      path: '/orders/print-note',
      name: 'PrintNote',
      component: () => import('@/components/Nota')
    },
    {
      path: '/not-found',
      name: 'PageNotFound',
      component: () => import('@/pages/Main/PageNotFound.vue')
    },
    {
      path: '*',
      name: 'DirectPageNotFound',
      component: () => import('@/pages/Main/PageNotFound.vue')
    }
  ]
})