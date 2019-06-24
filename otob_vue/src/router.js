import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./components/main/Login')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('./components/product/Product')
    },
    {
      path: '/product_cust',
      name: 'ProductCustomer',
      component: () => import('./components/product/ProductCustomer')
    }, 
    {
      path: '/register',
      name: 'Register',
      component: () => import('./components/main/Register')
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('./components/user/User')
    },
    {
      path: '/thx',
      name: 'Thanks',
      component: () => import('./components/order/Thanks')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('./components/cart/Cart')
    }  
  ]
})
